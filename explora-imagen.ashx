<%@ WebHandler Language="C#" Class="ExploraImageHandler" %>

using System;
using System.Globalization;
using System.Reflection;
using System.Runtime.InteropServices;
using System.Text.RegularExpressions;
using System.Web;

// Compatible con ASP.NET 2.0 y posteriores. WinHTTP usa el HTTPS de Windows:
// no requiere HttpClient, System.Net.Http, Task ni cambiar el CLR del App Pool.
public sealed class ExploraImageHandler : IHttpHandler
{
    internal const int MaxImageBytes = 8 * 1024 * 1024;
    private const int TimeoutMilliseconds = 15000;
    private const string ImageOrigin = "https://bimsareports.com";
    private static readonly Regex ImagePath = new Regex(
        @"\A/imagenes_ge/(?:[A-Za-z0-9_-]+/){1,8}[A-Za-z0-9_-]+\.(?:jpg|jpeg|png|webp)\z",
        RegexOptions.CultureInvariant | RegexOptions.IgnoreCase);
    private static readonly Regex CompleteRange = new Regex(
        @"\Abytes 0-([0-9]+)/([0-9]+)\z", RegexOptions.CultureInvariant);

    public bool IsReusable { get { return true; } }

    internal static bool IsAllowedPath(string path)
    {
        return !String.IsNullOrEmpty(path) && path.Length <= 512
            && path.StartsWith("/imagenes_ge/", StringComparison.Ordinal) && ImagePath.IsMatch(path);
    }

    internal static string GetOriginalUrl(string path)
    {
        if (!IsAllowedPath(path)) throw new ImageDownloadException(400);
        // El archivo siempre se descarga del sitio original, con el mismo path.
        return ImageOrigin + path;
    }

    internal static int UpstreamFailureStatus(int status)
    {
        return status == 404 || status == 410 ? status : 502;
    }

    internal static string DetectImageType(byte[] bytes)
    {
        if (bytes == null) return null;
        if (bytes.Length >= 8 && bytes[0] == 137 && bytes[1] == 80 && bytes[2] == 78
            && bytes[3] == 71 && bytes[4] == 13 && bytes[5] == 10 && bytes[6] == 26 && bytes[7] == 10)
            return "image/png";
        if (bytes.Length >= 3 && bytes[0] == 255 && bytes[1] == 216 && bytes[2] == 255)
            return "image/jpeg";
        if (bytes.Length >= 12 && bytes[0] == 82 && bytes[1] == 73 && bytes[2] == 70
            && bytes[3] == 70 && bytes[8] == 87 && bytes[9] == 69 && bytes[10] == 66 && bytes[11] == 80)
            return "image/webp";
        return null;
    }

    internal static void ValidateImageResponse(int status, string range, string contentLength, byte[] bytes)
    {
        if (status != 200 && status != 206) throw new ImageDownloadException(UpstreamFailureStatus(status));
        long length;
        if (Int64.TryParse(contentLength, NumberStyles.None, CultureInfo.InvariantCulture, out length)
            && length > MaxImageBytes) throw new ImageDownloadException(413);
        if (status == 206) {
            Match match = CompleteRange.Match(range ?? "");
            long end;
            long total;
            if (!match.Success
                || !Int64.TryParse(match.Groups[1].Value, NumberStyles.None, CultureInfo.InvariantCulture, out end)
                || !Int64.TryParse(match.Groups[2].Value, NumberStyles.None, CultureInfo.InvariantCulture, out total))
                throw new ImageDownloadException(502);
            if (total > MaxImageBytes) throw new ImageDownloadException(413);
            if (total <= 0 || end != total - 1 || (bytes != null && bytes.LongLength != total))
                throw new ImageDownloadException(502);
        }
        if (bytes != null) {
            if (bytes.Length > MaxImageBytes) throw new ImageDownloadException(413);
            if (DetectImageType(bytes) == null) throw new ImageDownloadException(502);
            if (Int64.TryParse(contentLength, NumberStyles.None, CultureInfo.InvariantCulture, out length)
                && bytes.LongLength != length) throw new ImageDownloadException(502);
        }
    }

    private static object Call(object request, string name, BindingFlags flags, params object[] arguments)
    {
        return request.GetType().InvokeMember(name, flags | BindingFlags.OptionalParamBinding,
            null, request, arguments, CultureInfo.InvariantCulture);
    }

    private static string Header(object request, string name)
    {
        try { return Convert.ToString(Call(request, "GetResponseHeader", BindingFlags.InvokeMethod, name), CultureInfo.InvariantCulture); }
        catch (TargetInvocationException error) {
            COMException cause = error.InnerException as COMException;
            if (cause != null && (cause.ErrorCode & 65535) == 12150) return "";
            throw;
        }
    }

    internal static byte[] DownloadOriginalImage(string path)
    {
        string url = GetOriginalUrl(path);
        object request = null;
        try {
            Type requestType = Type.GetTypeFromProgID("WinHttp.WinHttpRequest.5.1", true);
            request = Activator.CreateInstance(requestType);
            Call(request, "SetTimeouts", BindingFlags.InvokeMethod,
                TimeoutMilliseconds, TimeoutMilliseconds, TimeoutMilliseconds, TimeoutMilliseconds);
            Call(request, "Open", BindingFlags.InvokeMethod, "GET", url, true);
            Call(request, "Option", BindingFlags.SetProperty, 6, false); // No redirecciones.
            Call(request, "Option", BindingFlags.SetProperty, 4, 0); // Validar certificados.
            Call(request, "Option", BindingFlags.SetProperty, 9, 2048); // TLS 1.2 de Windows.
            Call(request, "SetAutoLogonPolicy", BindingFlags.InvokeMethod, 2); // Sin credenciales del servidor.
            Call(request, "SetRequestHeader", BindingFlags.InvokeMethod, "Accept", "image/jpeg, image/png, image/webp");
            // IIS publica estos archivos con Accept-Ranges. Evitar descargar más
            // de 8 MiB; rechazar también respuestas parciales o truncadas.
            Call(request, "SetRequestHeader", BindingFlags.InvokeMethod, "Range",
                "bytes=0-" + (MaxImageBytes - 1).ToString(CultureInfo.InvariantCulture));
            Call(request, "Send", BindingFlags.InvokeMethod, Type.Missing);
            bool complete = Convert.ToBoolean(Call(request, "WaitForResponse", BindingFlags.InvokeMethod,
                TimeoutMilliseconds / 1000), CultureInfo.InvariantCulture);
            if (!complete) throw new ImageDownloadException(504);
            int status = Convert.ToInt32(Call(request, "Status", BindingFlags.GetProperty), CultureInfo.InvariantCulture);
            string range = Header(request, "Content-Range");
            string length = Header(request, "Content-Length");
            ValidateImageResponse(status, range, length, null);
            byte[] bytes = Call(request, "ResponseBody", BindingFlags.GetProperty) as byte[];
            if (bytes == null) throw new ImageDownloadException(502);
            ValidateImageResponse(status, range, length, bytes);
            return bytes;
        } catch (TargetInvocationException error) {
            COMException cause = error.InnerException as COMException;
            if (cause != null && (cause.ErrorCode & 65535) == 12002) throw new ImageDownloadException(504);
            throw;
        } finally {
            if (request != null) {
                try { Call(request, "Abort", BindingFlags.InvokeMethod); } catch { }
                if (Marshal.IsComObject(request)) Marshal.FinalReleaseComObject(request);
            }
        }
    }

    private static void PrepareResponse(HttpResponse response)
    {
        response.BufferOutput = true;
        // Esta propiedad no existe en todas las revisiones de System.Web 2.0.
        PropertyInfo skipErrors = response.GetType().GetProperty("TrySkipIisCustomErrors");
        if (skipErrors != null) skipErrors.SetValue(response, true, null);
        response.Cache.SetCacheability(HttpCacheability.NoCache);
        response.Cache.SetNoStore();
        response.Cache.SetRevalidation(HttpCacheRevalidation.AllCaches);
        response.Cache.SetExpires(DateTime.UtcNow.AddYears(-1));
        response.AppendHeader("X-Content-Type-Options", "nosniff");
        response.AppendHeader("X-Explora-Downloader", "original-winhttp-v1");
    }

    private static void Reject(HttpContext context, int status)
    {
        context.Response.StatusCode = status;
        context.Response.ContentType = "text/plain; charset=utf-8";
        context.Response.Write("No fue posible cargar la imagen de Explora.");
    }

    public void ProcessRequest(HttpContext context)
    {
        PrepareResponse(context.Response);
        if (!String.Equals(context.Request.HttpMethod, "GET", StringComparison.Ordinal)) {
            context.Response.AppendHeader("Allow", "GET");
            Reject(context, 405);
            return;
        }
        string[] values = context.Request.QueryString.GetValues("path");
        if (context.Request.QueryString.Count != 1 || context.Request.QueryString.AllKeys[0] != "path"
            || values == null || values.Length != 1 || !IsAllowedPath(values[0])) {
            Reject(context, 400);
            return;
        }
        try {
            byte[] bytes = DownloadOriginalImage(values[0]);
            if (!context.Response.IsClientConnected) return;
            context.Response.ContentType = DetectImageType(bytes);
            context.Response.AppendHeader("Content-Length", bytes.Length.ToString(CultureInfo.InvariantCulture));
            context.Response.BinaryWrite(bytes);
        } catch (ImageDownloadException error) {
            Reject(context, error.StatusCode);
        } catch {
            Reject(context, 502);
        }
    }

    internal sealed class ImageDownloadException : Exception
    {
        internal readonly int StatusCode;
        internal ImageDownloadException(int statusCode) { StatusCode = statusCode; }
    }
}
