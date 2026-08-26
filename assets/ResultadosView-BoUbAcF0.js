import{C as e,G as t,H as n,I as r,O as i,Q as a,S as o,U as s,X as c,it as l,q as u,tt as d,w as f,x as p}from"./index-Ny_vA5X2.js";var m=l(d(),1),h=a(),g=100,_=[`inicio`,`fin`,`publicacion`];function v(e){if(!e||e===`-`)return null;if(e instanceof Date)return Number.isNaN(e.getTime())?null:new Date(e.getFullYear(),e.getMonth(),e.getDate());let t=String(e).trim(),n=t.match(/^(\d{4})-(\d{2})-(\d{2})/);if(n){let[,e,t,r]=n;return new Date(Number(e),Number(t)-1,Number(r))}let r=t.match(/^(\d{1,2})[/-](\d{1,2})[/-](\d{4})$/);if(r){let[,e,t,n]=r;return new Date(Number(n),Number(t)-1,Number(e))}let i=new Date(t);return Number.isNaN(i.getTime())?null:i}var y=new Intl.DateTimeFormat(`es-MX`,{month:`short`});function b(e){if(!e||e===`-`)return`-`;let t=e instanceof Date?e:v(e);if(!t||Number.isNaN(t.getTime()))return String(e);let n=y.format(t).replace(`.`,``);return`${`${n.charAt(0).toUpperCase()}${n.slice(1)}`} ${t.getDate()}, ${t.getFullYear()}`}function x(e){let t=v(e);return t?`${t.getFullYear()}-${String(t.getMonth()+1).padStart(2,`0`)}`:`Sin fecha`}function S(e){if(e==null||e===``)return null;let t=String(e).replace(/[^0-9.-]/g,``),n=Number(t);return Number.isNaN(n)?null:n}function ee(e){return e==null?`-`:new Intl.NumberFormat(`es-MX`,{style:`currency`,currency:`MXN`,maximumFractionDigits:0}).format(e)}function te(e){return e==null?`-`:new Intl.NumberFormat(`es-MX`,{maximumFractionDigits:0}).format(e)}function C({obras:a=[],onSelectionChange:l,selectionResetToken:d=0,onViewFicha:y}){let[C,w]=(0,m.useState)(null),[T,E]=(0,m.useState)({}),[D,O]=(0,m.useState)({}),[ne,re]=(0,m.useState)([]),[k,A]=(0,m.useState)([]),[j,ie]=(0,m.useState)({field:null,direction:`asc`}),[ae,M]=(0,m.useState)(1),N=(0,m.useRef)(null),P=(0,m.useRef)(null),oe=(0,m.useRef)(d),se=(0,m.useRef)(``),[ce,le]=(0,m.useState)({top:0,left:0}),F={surface:`var(--cl-surface)`,surfaceMuted:`var(--cl-surface-muted)`,hover:`var(--cl-hover)`,border:`var(--cl-border)`,text:`var(--cl-text)`,textStrong:`var(--cl-text-strong)`,textMuted:`var(--cl-text-muted)`,inputBg:`var(--cl-input-bg)`,shadow:`var(--cl-shadow)`},I=e=>{M(1),ie(t=>t.field===e?{field:e,direction:t.direction===`asc`?`desc`:`asc`}:{field:e,direction:`asc`})},L=(e,t)=>j.field===e&&j.direction===t?`#FF653F`:F.textMuted,R=(0,m.useMemo)(()=>(a||[]).map((e,t)=>({id:e.Id_Obra||e.ID_OBRA||e.id_obra||e.id||t,clave:e.clave||e.Clave_Proyecto||e.CLAVE_PROYECTO||e.clave_proyecto||e.claveProyecto||e.ClaveProyecto||e.claveproyecto||`-`,proyecto:e.proyecto||e.Proyecto||e.PROYECTO||e.Nombre_Proyecto||e.NOMBRE_PROYECTO||`-`,genero:e.genero||e.Genero||e.GENERO||`-`,subgenero:e.subgenero||e.Subgenero||e.SUBGENERO||e.subGenero||`-`,tipoobra:e.tipoObra||e.Tipo_Obra||e.TIPO_OBRA||e.tipo_obra||e.TipoObra||e.tipoobra||`-`,inversionRaw:S(e.inversion||e.Inversion||e.INVERSION||e.inversionTotal||e.InversionTotal||null),inversion:S(e.inversion||e.Inversion||e.INVERSION||e.inversionTotal||null)===null?`-`:ee(S(e.inversion||e.Inversion||e.INVERSION||e.inversionTotal||null)),superficieRaw:S(e.superficie??e.Superficie??e.SUPERFICIE??e.superficieTotal??e.SuperficieTotal??0),superficie:S(e.superficie??e.Superficie??e.SUPERFICIE??e.superficieTotal??e.SuperficieTotal??0)>0?`${te(S(e.superficie??e.Superficie??e.SUPERFICIE??e.superficieTotal??e.SuperficieTotal??0))} m²`:`No definido`,estado:e.estado||e.Estado_Proyecto||e.ESTADO_PROYECTO||e.estado_proyecto||e.Estado||e.ESTADO||`-`,localizacion:e.localizacion||e.Localizacion1||e.ubicacion||e.Ubicacion||e.direccion||e.Direccion||``,inicioRaw:e.fechaInicioDate||e.fechaInicioTime||e.fechaInicio||e.Fecha_Inicio||e.FECHA_INICIO||e.fecha_inicio||e.FechaInicio||e.fechainicio||`-`,inicio:b(e.fechaInicioDate||e.fechaInicioTime||e.fechaInicio||e.Fecha_Inicio||e.FECHA_INICIO||e.fecha_inicio||e.FechaInicio||e.fechainicio),finRaw:e.fechaTerminoDate||e.fechaTerminoTime||e.fechaTerminacionDate||e.fechaFinDate||e.fechaTermino||e.fechaTerminacion||e.fechaFin||e.Fecha_Terminacion||e.Fecha_Termino||e.FECHA_TERMINACION||e.FECHA_TERMINO||e.fecha_terminacion||e.fecha_termino||e.FechaTerminacion||e.FechaTermino||e.fechaterminacion||e.fechatermino||e.Fecha_Fin||e.FECHA_FIN||e.fecha_fin||`-`,fin:b(e.fechaTerminoDate||e.fechaTerminoTime||e.fechaTerminacionDate||e.fechaFinDate||e.fechaTermino||e.fechaTerminacion||e.fechaFin||e.Fecha_Terminacion||e.Fecha_Termino||e.FECHA_TERMINACION||e.FECHA_TERMINO||e.fecha_terminacion||e.fecha_termino||e.FechaTerminacion||e.FechaTermino||e.fechaterminacion||e.fechatermino||e.Fecha_Fin||e.FECHA_FIN||e.fecha_fin||`-`),publicacionRaw:e.fechaPublicacionDate||e.fechaPublicacionTime||e.fechaPublicacion||e.Fecha_publicacion||e.FECHA_PUBLICACION||e.fecha_publicacion||e.FechaPublicacion||e.fechapublicacion||e.Fecha_Publicacion||`-`,publicacion:b(e.fechaPublicacionDate||e.fechaPublicacionTime||e.fechaPublicacion||e.Fecha_publicacion||e.FECHA_PUBLICACION||e.fecha_publicacion||e.FechaPublicacion||e.fechapublicacion||e.Fecha_Publicacion),tipo:e.tipoProyecto||`-`,compania:e.compania||e.Compania||e.COMPANIA||`-`,source:e})),[a]),z=e=>String(e.id||e.clave||e.proyecto),ue={display:`-webkit-box`,WebkitLineClamp:2,WebkitBoxOrient:`vertical`,overflow:`hidden`,textOverflow:`ellipsis`,whiteSpace:`normal`,wordBreak:`break-word`,lineHeight:`1.3`,maxHeight:`2.6em`,textAlign:`left`},B=(e,t=``)=>(0,h.jsx)(`div`,{className:`result-cell-text ${t}`,style:ue,title:typeof e==`string`?e:void 0,children:e??`-`}),de=e=>{let t=[e.localizacion,e.estado].filter(Boolean).filter((e,t,n)=>n.findIndex(t=>String(t).toLowerCase()===String(e).toLowerCase())===t).join(` · `);return(0,h.jsxs)(`div`,{className:`result-project-cell`,title:e.proyecto,children:[(0,h.jsx)(`span`,{className:`result-project-title`,children:e.proyecto||`-`}),t&&(0,h.jsx)(`span`,{className:`result-project-location`,children:t})]})},fe=e=>(0,h.jsxs)(`div`,{className:`result-genre-cell`,title:`${e.genero||`-`} · ${e.subgenero||`-`}`,children:[(0,h.jsx)(`span`,{className:`result-genre-title`,children:e.genero||`-`}),e.subgenero&&e.subgenero!==`-`&&(0,h.jsx)(`span`,{className:`result-subgenre-title`,children:e.subgenero})]});(0,m.useEffect)(()=>{oe.current!==d&&(oe.current=d,A([]))},[d]),(0,m.useEffect)(()=>{let e=new Set(R.map(z)),t=window.requestAnimationFrame(()=>{A(t=>t.filter(t=>e.has(t)))});return()=>window.cancelAnimationFrame(t)},[R]),(0,m.useEffect)(()=>{if(!l)return;let e=[...k].sort().join(`|`);if(se.current===e)return;se.current=e;let t=new Set(k);l(R.filter(e=>t.has(z(e))).map(e=>e.source))},[k,R,l]),(0,m.useEffect)(()=>{let e=e=>{e.key===`Escape`&&w(null)},t=e=>{N.current&&!N.current.contains(e.target)&&w(null)};return document.addEventListener(`keydown`,e),document.addEventListener(`mousedown`,t),()=>{document.removeEventListener(`keydown`,e),document.removeEventListener(`mousedown`,t)}},[]);let V=(0,m.useMemo)(()=>R.filter(e=>Object.entries(T).every(([t,n])=>{if(!n||n.length===0)return!0;if(t===`categoria`)return n.some(t=>{let[n,r,i]=String(t).split(`::`);return n===`genero`?e.genero===r:n===`subgenero`&&e.genero===r&&e.subgenero===i});if(_.includes(t)){let r=x(e[`${t}Raw`]||e[t]);return n.includes(r)}return n.includes(String(e[t]??``))})),[R,T]),H=(0,m.useMemo)(()=>{if(!j.field)return V;let e=[...V],{field:t,direction:n}=j;return e.sort((e,r)=>{let i=String(e[t]??``).trim(),a=String(r[t]??``).trim();if(_.includes(t)){let o=v(e[`${t}Raw`]||i),s=v(r[`${t}Raw`]||a);return o&&s?n===`asc`?o.getTime()-s.getTime():s.getTime()-o.getTime():o?n===`asc`?-1:1:s?n===`asc`?1:-1:0}if(t===`inversion`||t===`superficie`){let i=Number(e[`${t}Raw`]??NaN),a=Number(r[`${t}Raw`]??NaN);return Number.isFinite(i)&&Number.isFinite(a)?n===`asc`?i-a:a-i:Number.isFinite(i)?n===`asc`?-1:1:Number.isFinite(a)?n===`asc`?1:-1:0}let o=i.localeCompare(a,`es`,{numeric:!0});return n===`asc`?o:-o}),e},[V,j]),U=Math.max(1,Math.ceil(H.length/g)),W=Math.min(ae,U),G=(0,m.useMemo)(()=>{let e=(W-1)*g;return H.slice(e,e+g)},[H,W]),K=(0,m.useMemo)(()=>{let e=[],t={clave:`Clave`,proyecto:`Proyecto`,compania:`Compañía`,genero:`Género`,subgenero:`Subgénero`,tipoobra:`Tipo de obra`,estado:`Estado`,categoria:`Género`,inversion:`Inversión`,superficie:`Superficie`,inicio:`Inicio`,fin:`Término`,publicacion:`Publicación`};return Object.entries(T).forEach(([n,r])=>{!Array.isArray(r)||!r.length||e.push({key:`column-${n}`,label:t[n]||n,value:r.length===1?r[0].replace(/^genero::|^subgenero::/u,``).replace(/::/g,` · `):`${r.length} seleccionados`})}),e},[T]),pe=()=>{E({}),O({}),w(null),M(1)},q=(0,m.useMemo)(()=>new Set(k),[k]),me=(0,m.useMemo)(()=>[`clave`,`proyecto`,`genero`,`subgenero`,`estado`,`inversion`,`superficie`,`inicio`,`fin`,`publicacion`,`tipoobra`,`compania`].reduce((e,t)=>(e[t]=[...new Set(R.map(e=>String(e[`${t}Raw`]||e[t]||``)).filter(Boolean))].sort((e,t)=>{let n=v(e),r=v(t);return n&&r?n.getTime()-r.getTime():e.localeCompare(t,`es`)}),e),{}),[R]),he=(0,m.useMemo)(()=>{let e=new Map;return R.forEach(t=>{let n=String(t.genero||`-`),r=String(t.subgenero||`-`);e.has(n)||e.set(n,new Set),r&&r!==`-`&&e.get(n).add(r)}),[...e.entries()].map(([e,t])=>({genero:e,subgeneros:[...t].sort((e,t)=>e.localeCompare(t,`es`))})).sort((e,t)=>e.genero.localeCompare(t.genero,`es`))},[R]),J=V.length>0&&V.every(e=>q.has(z(e))),ge=k.length>0&&V.some(e=>q.has(z(e)))&&!J,Y=(e,t)=>{let n=t.getBoundingClientRect(),r=P.current,i=r?.getBoundingClientRect(),a=r&&i?.width?i.width/r.offsetWidth:1,o=r&&i?.height?i.height/r.offsetHeight:a,s=_.includes(e)?300:e===`categoria`?320:e===`proyecto`?340:280,c=i?(n.left-i.left)/a-20:n.left;le({top:i?(n.bottom-i.top)/o+8:n.bottom+8,left:r?Math.max(8,Math.min(c,r.offsetWidth-s-8)):c}),w(t=>t===e?null:e)},X=e=>me[e]||[],Z=(e,t)=>{M(1),E(n=>{let r=n[e]||[];return{...n,[e]:r.includes(t)?r.filter(e=>e!==t):[...r,t]}})},_e=e=>{let t=`genero::${e}`;M(1),E(n=>{let r=n.categoria||[],i=r.includes(t),a=r.filter(t=>!t.startsWith(`genero::${e}`)&&!t.startsWith(`subgenero::${e}::`));return{...n,categoria:i?a:[...a,t]}})},Q=(e,t)=>{let n=`genero::${e}`,r=`subgenero::${e}::${t}`;M(1),E(e=>{let t=(e.categoria||[]).filter(e=>e!==n);return{...e,categoria:t.includes(r)?t.filter(e=>e!==r):[...t,r]}})},ve=e=>{let t=z(e);A(e=>e.includes(t)?e.filter(e=>e!==t):[...e,t])},ye=()=>{let e=V.map(z);A(t=>J?t.filter(t=>!e.includes(t)):[...new Set([...t,...e])])},$=(e,i,{compact:a=!1}={})=>{let o=a?`16px`:`20px`,c=a?`18px`:`20px`;return(0,h.jsxs)(s,{align:`center`,justify:`space-between`,gap:1,minW:0,w:`100%`,children:[(0,h.jsx)(u,{fontSize:a?`9px`:`10px`,fontWeight:`800`,color:F.textMuted,letterSpacing:`.045em`,textTransform:`none`,whiteSpace:`nowrap`,minW:0,overflow:`hidden`,textOverflow:`ellipsis`,children:i}),(0,h.jsxs)(n,{spacing:0,flexShrink:0,children:[(0,h.jsx)(t,{variant:`ghost`,size:`xs`,minW:o,w:o,h:c,p:0,borderRadius:`6px`,_hover:{bg:F.hover},onClick:t=>{t.stopPropagation(),Y(e,t.currentTarget)},"aria-label":`Filtrar ${i}`,title:`Filtrar ${i}`,children:(0,h.jsx)(r,{size:a?10:11,color:F.textMuted})}),(0,h.jsx)(t,{variant:`ghost`,size:`xs`,minW:o,w:o,h:c,p:0,borderRadius:`6px`,_hover:{bg:F.hover},onClick:t=>{t.stopPropagation(),I(e)},"aria-label":`Ordenar ${i}`,title:`Ordenar ${i}`,children:(0,h.jsxs)(s,{direction:`column`,align:`center`,gap:0,children:[(0,h.jsx)(f,{size:a?8:9,color:L(e,`asc`)}),(0,h.jsx)(p,{size:a?8:9,color:L(e,`desc`)})]})})]})]})};return(0,h.jsxs)(c,{height:`100%`,minH:`0`,overflow:`hidden`,display:`flex`,flexDirection:`column`,bg:F.surface,color:F.text,pt:0,children:[(0,h.jsxs)(c,{ref:P,bg:F.surface,border:`1px solid ${F.border}`,borderRadius:`8px`,overflow:`hidden`,flex:`1`,minH:`0`,display:`flex`,flexDirection:`column`,position:`relative`,children:[(0,h.jsxs)(c,{flex:`1`,minH:`0`,minW:`0`,overflow:`hidden`,overscrollBehavior:`contain`,children:[(0,h.jsx)(`style`,{children:`
              .resultados-scroll {
                scrollbar-width: auto;
                scrollbar-color: var(--cl-text-muted) var(--cl-surface-muted);
              }
              .resultados-scroll::-webkit-scrollbar {
                width: 12px;
                height: 12px;
              }
              .resultados-scroll::-webkit-scrollbar-track {
                background: var(--cl-surface-muted);
                border-radius: 999px;
              }
              .resultados-scroll::-webkit-scrollbar-thumb {
                background: var(--cl-text-muted);
                border: 3px solid var(--cl-surface-muted);
                border-radius: 999px;
              }
              .resultados-scroll::-webkit-scrollbar-thumb:hover {
                background: var(--cl-text-strong);
              }
              .resultados-table thead th {
                position: sticky;
                top: 0;
                z-index: 2;
                background: var(--cl-surface-muted);
              }
              .resultados-table th,
              .resultados-table td {
                box-sizing: border-box;
                text-align: left !important;
                vertical-align: middle;
              }
              .resultados-table th:first-child,
              .resultados-table td:first-child,
              .resultados-table th:last-child,
              .resultados-table td:last-child {
                text-align: center !important;
              }
              .resultados-table th:last-child {
                position: sticky;
                right: 0;
                z-index: 5;
                background: var(--cl-surface-muted);
                box-shadow: -1px 0 0 var(--cl-border);
              }
              .resultados-table td:last-child {
                position: sticky;
                right: 0;
                z-index: 3;
                box-shadow: -1px 0 0 var(--cl-border);
                vertical-align: middle;
              }
              .resultados-action-cell {
                height: 100%;
                min-height: 52px;
                display: flex;
                align-items: center;
                justify-content: center;
                background: inherit;
              }
              /* Jerarquía editorial: lo operativo se lee primero; la ubicación
                 y las fechas acompañan sin competir con el nombre del proyecto. */
              .resultados-table {
                font-variant-numeric: tabular-nums;
              }
              .resultados-table tbody tr {
                transition: background-color 140ms ease;
              }
              .resultados-table tbody tr:hover td {
                background: var(--cl-hover);
              }
              .resultados-table .resultados-cell {
                color: var(--cl-text);
                font-size: 12px;
                line-height: 1.32;
              }
              .resultados-table .resultados-cell-key .result-cell-text {
                color: var(--cl-text-muted);
                font-size: 11px;
                font-weight: 400;
                letter-spacing: .01em;
              }
              .resultados-table .result-cell-text {
                color: var(--cl-text);
                font-size: 12px;
              }
              .resultados-table .resultados-cell-company .result-cell-text {
                color: var(--cl-text-strong);
                font-weight: 500;
              }
              .resultados-table .resultados-cell-state .result-cell-text {
                color: var(--cl-text-muted);
                font-size: 11px;
                font-weight: 400;
              }
              .resultados-table .resultados-cell-number .result-cell-text {
                color: var(--cl-text-strong);
                font-size: 11px;
                font-weight: 400;
                text-align: right;
              }
              .resultados-table .resultados-cell-emphasis .result-cell-text {
                font-weight: 500;
              }
              .resultados-table .resultados-cell-number.resultados-cell-undefined .result-cell-text {
                color: var(--cl-text-muted);
                font-weight: 400;
              }
              .resultados-table .resultados-cell-date .result-cell-text {
                color: var(--cl-text-muted);
                font-size: 11px;
                font-weight: 400;
              }
              .resultados-table .result-project-cell {
                display: flex;
                flex-direction: column;
                gap: 3px;
                min-width: 0;
              }
              .resultados-table .result-project-title {
                color: var(--cl-text-strong);
                display: -webkit-box;
                font-size: 12px;
                font-weight: 500;
                line-height: 1.28;
                overflow: hidden;
                -webkit-box-orient: vertical;
                -webkit-line-clamp: 2;
              }
              .resultados-table .result-project-location {
                color: var(--cl-text-muted);
                font-size: 10px;
                font-weight: 400;
                overflow: hidden;
                text-overflow: ellipsis;
                white-space: nowrap;
              }
              .resultados-table .result-genre-cell {
                display: flex;
                flex-direction: column;
                gap: 3px;
                min-width: 0;
              }
              .resultados-table .result-genre-title {
                color: var(--cl-text-strong);
                font-size: 12px;
                font-weight: 600;
                line-height: 1.2;
                overflow: hidden;
                text-overflow: ellipsis;
                white-space: nowrap;
              }
              .resultados-table .result-subgenre-title {
                color: var(--cl-text-muted);
                font-size: 10px;
                font-weight: 400;
                line-height: 1.2;
                overflow: hidden;
                text-overflow: ellipsis;
                white-space: nowrap;
              }
              .resultados-table thead th:not(:first-child) {
                letter-spacing: .02em;
              }
              @media (max-width: 1180px) {
                .resultados-table .resultados-cell { font-size: 11px; }
                .resultados-table .result-project-title { font-size: 11px; }
              }
            `}),(0,h.jsx)(c,{className:`resultados-scroll`,h:`100%`,minH:`0`,minW:`0`,overflowX:`hidden`,overflowY:`scroll`,overscrollBehavior:`contain`,children:(0,h.jsxs)(`table`,{className:`resultados-table`,style:{minWidth:`100%`,width:`100%`,borderCollapse:`collapse`,fontSize:`14px`,tableLayout:`fixed`},children:[(0,h.jsxs)(`colgroup`,{children:[(0,h.jsx)(`col`,{style:{width:`2.5%`}}),(0,h.jsx)(`col`,{style:{width:`6%`}}),(0,h.jsx)(`col`,{style:{width:`20%`}}),(0,h.jsx)(`col`,{style:{width:`9%`}}),(0,h.jsx)(`col`,{style:{width:`10%`}}),(0,h.jsx)(`col`,{style:{width:`8%`}}),(0,h.jsx)(`col`,{style:{width:`8%`}}),(0,h.jsx)(`col`,{style:{width:`11%`}}),(0,h.jsx)(`col`,{style:{width:`10%`}}),(0,h.jsx)(`col`,{style:{width:`9.5%`}}),(0,h.jsx)(`col`,{style:{width:`6%`}})]}),(0,h.jsx)(`thead`,{style:{background:F.surfaceMuted},children:(0,h.jsxs)(`tr`,{children:[(0,h.jsx)(`th`,{style:{padding:`12px 10px`,textAlign:`center`,borderBottom:`1px solid ${F.border}`},children:(0,h.jsx)(`input`,{type:`checkbox`,checked:J,ref:e=>{e&&(e.indeterminate=ge)},onChange:ye,style:{accentColor:`#4B5563`,width:14,height:14}})}),(0,h.jsx)(`th`,{style:{padding:`10px 8px`,textAlign:`left`,borderBottom:`1px solid ${F.border}`},children:$(`clave`,`Clave`)}),(0,h.jsx)(`th`,{style:{padding:`10px 8px`,textAlign:`left`,borderBottom:`1px solid ${F.border}`},children:$(`proyecto`,`Proyecto`)}),(0,h.jsx)(`th`,{style:{padding:`10px 8px`,textAlign:`left`,borderBottom:`1px solid ${F.border}`},children:(0,h.jsxs)(s,{align:`center`,justify:`flex-start`,gap:1,minW:`max-content`,children:[(0,h.jsx)(u,{fontSize:`10px`,fontWeight:`800`,color:F.textMuted,letterSpacing:`.02em`,whiteSpace:`nowrap`,flexShrink:0,children:`Género`}),(0,h.jsxs)(n,{spacing:0,flexShrink:0,children:[(0,h.jsx)(t,{variant:`ghost`,size:`xs`,minW:`20px`,w:`20px`,h:`20px`,p:0,borderRadius:`6px`,_hover:{bg:F.hover},onClick:e=>{e.stopPropagation(),Y(`categoria`,e.currentTarget)},"aria-label":`Filtrar género y subgénero`,title:`Filtrar género y subgénero`,children:(0,h.jsx)(r,{size:11,color:F.textMuted})}),(0,h.jsx)(t,{variant:`ghost`,size:`xs`,minW:`20px`,w:`20px`,h:`20px`,p:0,borderRadius:`6px`,_hover:{bg:F.hover},onClick:e=>{e.stopPropagation(),I(`genero`)},"aria-label":`Ordenar género`,title:`Ordenar género`,children:(0,h.jsxs)(s,{direction:`column`,align:`center`,gap:0,children:[(0,h.jsx)(f,{size:9,color:L(`genero`,`asc`)}),(0,h.jsx)(p,{size:9,color:L(`genero`,`desc`)})]})})]})]})}),(0,h.jsx)(`th`,{style:{padding:`10px 8px`,textAlign:`left`,borderBottom:`1px solid ${F.border}`},children:$(`tipoobra`,`Tipo de obra`)}),(0,h.jsx)(`th`,{style:{padding:`12px 8px`,textAlign:`left`,borderBottom:`1px solid ${F.border}`,whiteSpace:`nowrap`},children:$(`publicacion`,`Publicación`)}),(0,h.jsx)(`th`,{style:{padding:`12px 8px`,textAlign:`left`,borderBottom:`1px solid ${F.border}`,whiteSpace:`nowrap`},children:$(`inicio`,`Inicio`)}),(0,h.jsx)(`th`,{style:{padding:`10px 8px`,textAlign:`left`,borderBottom:`1px solid ${F.border}`},children:$(`compania`,`Compañía`)}),(0,h.jsx)(`th`,{style:{padding:`12px 8px`,textAlign:`left`,borderBottom:`1px solid ${F.border}`},children:$(`inversion`,`Inversión (MXN)`,{compact:!0})}),(0,h.jsx)(`th`,{style:{padding:`10px 6px`,textAlign:`left`,borderBottom:`1px solid ${F.border}`,whiteSpace:`nowrap`},children:$(`superficie`,`Superficie`,{compact:!0})}),(0,h.jsx)(`th`,{style:{padding:`12px 6px`,textAlign:`center`,fontWeight:700,color:F.textMuted,whiteSpace:`nowrap`,fontSize:`13px`,borderBottom:`1px solid ${F.border}`,background:F.surfaceMuted},children:`Ficha`})]})}),(0,h.jsx)(`tbody`,{children:G.map((e,n)=>{let r=z(e),a=q.has(r),o=a?`var(--cl-selected)`:n%2==0?F.surface:F.surfaceMuted;return(0,h.jsxs)(`tr`,{style:{background:o},children:[(0,h.jsx)(`td`,{style:{padding:`12px 10px`,borderTop:`1px solid ${F.border}`,textAlign:`center`},children:(0,h.jsx)(`input`,{type:`checkbox`,checked:a,onChange:()=>ve(e),style:{accentColor:`#4B5563`,width:14,height:14}})}),(0,h.jsx)(`td`,{className:`resultados-cell resultados-cell-key`,style:{padding:`9px 8px`,borderTop:`1px solid ${F.border}`},children:B(e.clave)}),(0,h.jsx)(`td`,{className:`resultados-cell resultados-cell-project`,style:{padding:`9px 8px`,borderTop:`1px solid ${F.border}`},children:de(e)}),(0,h.jsx)(`td`,{className:`resultados-cell resultados-cell-genre`,style:{padding:`9px 8px`,borderTop:`1px solid ${F.border}`},children:fe(e)}),(0,h.jsx)(`td`,{className:`resultados-cell`,style:{padding:`9px 8px`,borderTop:`1px solid ${F.border}`},children:B(e.tipoobra)}),(0,h.jsx)(`td`,{className:`resultados-cell resultados-cell-date`,style:{padding:`10px 8px`,borderTop:`1px solid ${F.border}`},children:B(e.publicacion)}),(0,h.jsx)(`td`,{className:`resultados-cell resultados-cell-date`,style:{padding:`10px 8px`,borderTop:`1px solid ${F.border}`},children:B(e.inicio)}),(0,h.jsx)(`td`,{className:`resultados-cell resultados-cell-company`,style:{padding:`9px 8px`,borderTop:`1px solid ${F.border}`},children:B(e.compania)}),(0,h.jsx)(`td`,{className:`resultados-cell resultados-cell-number resultados-cell-emphasis`,style:{padding:`10px 12px`,borderTop:`1px solid ${F.border}`},children:B(e.inversion)}),(0,h.jsx)(`td`,{className:`resultados-cell resultados-cell-number resultados-cell-emphasis${e.superficie===`No definido`?` resultados-cell-undefined`:``}`,style:{padding:`9px 8px`,borderTop:`1px solid ${F.border}`},children:B(e.superficie)}),(0,h.jsx)(`td`,{style:{padding:0,borderTop:`1px solid ${F.border}`,whiteSpace:`nowrap`,fontSize:`13px`,textAlign:`center`,background:o},children:(0,h.jsx)(`div`,{className:`resultados-action-cell`,children:(0,h.jsx)(t,{size:`xs`,variant:`outline`,"aria-label":`Ver proyecto`,title:`Ver proyecto`,w:`32px`,h:`32px`,minW:`32px`,p:0,borderColor:F.border,color:F.textStrong,borderRadius:`8px`,bg:o,_hover:{bg:F.surfaceMuted,borderColor:`#FF653F`,color:`#FF653F`},onClick:()=>y?.(e.source||e),children:(0,h.jsx)(i,{size:15})})})})]},r)})},`tbody-${a.length}`)]})})]}),C&&(0,h.jsxs)(`div`,{ref:N,style:{position:`absolute`,top:`${ce.top}px`,left:`${ce.left}px`,zIndex:1e3,background:F.surface,border:`1px solid ${F.border}`,borderRadius:`10px`,padding:`12px`,width:_.includes(C)?`300px`:C===`categoria`?`320px`:C===`proyecto`?`340px`:`280px`,maxHeight:`340px`,overflowY:`auto`,boxShadow:`none`,color:F.textStrong,fontSize:`13px`},children:[_.includes(C)?(e=>{let n=X(e).filter(e=>v(e)).reduce((e,t)=>{let n=v(t),r=n?String(n.getFullYear()):`Sin fecha`,i=x(t),a=n?new Intl.DateTimeFormat(`es-MX`,{month:`long`}).format(n):t;return e[r]=e[r]||[],e[r].some(e=>e.key===i)||e[r].push({key:i,label:a,date:n}),e},{}),r=Object.keys(n).sort((e,t)=>e===`Sin fecha`?1:t===`Sin fecha`?-1:Number(t)-Number(e));return(0,h.jsxs)(c,{children:[(0,h.jsx)(u,{fontSize:`12px`,fontWeight:`700`,color:F.textStrong,mb:3,children:`Año y meses con información`}),r.map(r=>(0,h.jsxs)(c,{mb:4,children:[(0,h.jsx)(u,{fontSize:`12px`,fontWeight:`700`,color:F.textMuted,mb:2,children:r}),(0,h.jsx)(c,{display:`grid`,gridTemplateColumns:`repeat(4, minmax(0, 1fr))`,gap:`6px`,children:n[r].sort((e,t)=>e.date?.getTime()-t.date?.getTime()).map(({key:n,label:r})=>{let i=(T[e]||[]).includes(n);return(0,h.jsx)(t,{size:`xs`,h:`30px`,minW:`0`,borderRadius:`8px`,bg:i?`#FF653F`:F.surfaceMuted,color:i?`white`:F.text,border:`1px solid ${i?`#FF653F`:F.border}`,_hover:{bg:i?`#FF653F`:F.hover,borderColor:i?`#FF653F`:F.textMuted},onClick:()=>Z(e,n),title:r,children:r},n)})})]},r))]})})(C):C===`categoria`?(()=>{let t=T.categoria||[];return(0,h.jsxs)(c,{children:[(0,h.jsx)(u,{fontSize:`12px`,fontWeight:`700`,color:F.textStrong,mb:2,children:`Género y subgénero`}),(0,h.jsx)(u,{fontSize:`11px`,color:F.textMuted,mb:3,lineHeight:`1.35`,children:`Selecciona un género completo o abre sus subgéneros para afinar el resultado.`}),he.map(({genero:n,subgeneros:r})=>{let i=`genero::${n}`,a=t.includes(i),o=r.filter(e=>t.includes(`subgenero::${n}::${e}`)),l=!a&&o.length>0,d=ne.includes(n);return(0,h.jsxs)(c,{mb:1,borderRadius:`8px`,overflow:`hidden`,children:[(0,h.jsxs)(s,{align:`center`,gap:2,px:2,py:1.5,bg:a||l?F.surfaceMuted:`transparent`,borderRadius:`8px`,_hover:{bg:F.hover},cursor:`pointer`,onClick:()=>re(e=>e.includes(n)?e.filter(e=>e!==n):[...e,n]),children:[(0,h.jsx)(`input`,{type:`checkbox`,checked:a,ref:e=>{e&&(e.indeterminate=l)},onClick:e=>e.stopPropagation(),onChange:()=>_e(n),style:{accentColor:`#FF653F`,width:14,height:14}}),(0,h.jsx)(u,{flex:`1`,fontSize:`12px`,fontWeight:`700`,color:F.textStrong,lineClamp:1,children:n}),r.length>0&&(0,h.jsx)(c,{color:F.textMuted,transform:d?`rotate(90deg)`:`none`,transition:`transform 160ms ease`,children:(0,h.jsx)(e,{size:15})})]}),d&&r.length>0&&(0,h.jsx)(c,{ml:5,mt:1,pl:2,borderLeft:`1px solid ${F.border}`,children:r.map(e=>{let r=`subgenero::${n}::${e}`,i=t.includes(r);return(0,h.jsxs)(s,{align:`center`,gap:2,py:1.5,cursor:`pointer`,_hover:{color:F.textStrong},onClick:()=>Q(n,e),children:[(0,h.jsx)(`input`,{type:`checkbox`,checked:i,onClick:e=>e.stopPropagation(),onChange:()=>Q(n,e),style:{accentColor:`#FF653F`,width:13,height:13}}),(0,h.jsx)(u,{fontSize:`12px`,color:F.text,lineClamp:1,children:e})]},e)})})]},n)})]})})():C===`proyecto`?(()=>{let e=D.proyecto||``,t=X(`proyecto`).filter(t=>String(t).toLowerCase().includes(e.toLowerCase())),n=e?t.slice(0,50):[];return(0,h.jsxs)(c,{children:[(0,h.jsx)(u,{fontSize:`12px`,fontWeight:`700`,color:F.textStrong,mb:3,children:`Proyecto y estado`}),(0,h.jsx)(u,{fontSize:`11px`,fontWeight:`700`,color:F.textMuted,mb:1.5,children:`Proyecto`}),(0,h.jsx)(`input`,{value:e,onChange:e=>O(t=>({...t,proyecto:e.target.value})),placeholder:`Buscar proyecto...`,style:{width:`100%`,height:`34px`,borderRadius:`8px`,border:`1px solid ${F.border}`,padding:`0 10px`,background:F.inputBg,color:F.text,outline:`none`,fontSize:`13px`}}),!e&&(0,h.jsxs)(u,{fontSize:`11px`,color:F.textMuted,mt:1.5,children:[`Escribe para buscar entre `,X(`proyecto`).length,` proyectos.`]}),(0,h.jsxs)(c,{mt:3,pt:3,borderTop:`1px solid ${F.border}`,children:[(0,h.jsx)(u,{fontSize:`11px`,fontWeight:`700`,color:F.textMuted,mb:1.5,children:`Estado`}),(0,h.jsx)(c,{display:`grid`,gridTemplateColumns:`repeat(2, minmax(0, 1fr))`,columnGap:2,rowGap:1,children:X(`estado`).map(e=>(0,h.jsxs)(`label`,{style:{display:`flex`,gap:`7px`,alignItems:`center`,minWidth:0,cursor:`pointer`,lineHeight:1.25},children:[(0,h.jsx)(`input`,{type:`checkbox`,checked:(T.estado||[]).includes(e),onChange:()=>Z(`estado`,e),style:{accentColor:`#4B5563`,flexShrink:0}}),(0,h.jsx)(`span`,{style:{overflow:`hidden`,textOverflow:`ellipsis`,whiteSpace:`nowrap`},title:e,children:e})]},e))})]}),e&&(0,h.jsxs)(c,{mt:3,pt:3,borderTop:`1px solid ${F.border}`,children:[n.map(e=>(0,h.jsxs)(`label`,{style:{display:`flex`,gap:`8px`,alignItems:`flex-start`,marginBottom:`8px`,lineHeight:1.35,cursor:`pointer`},children:[(0,h.jsx)(`input`,{type:`checkbox`,checked:(T.proyecto||[]).includes(e),onChange:()=>Z(`proyecto`,e),style:{accentColor:`#4B5563`,marginTop:`2px`}}),(0,h.jsx)(`span`,{children:e})]},e)),!n.length&&(0,h.jsx)(u,{fontSize:`11px`,color:F.textMuted,children:`No encontramos proyectos con ese nombre.`})]})]})})():(e=>{let t=D[e]||``,n=e===`clave`||e===`proyecto`||e===`compania`,r=X(e).filter(e=>String(e).toLowerCase().includes(t.toLowerCase())),i=n&&!t?r.slice(0,80):r;return(0,h.jsxs)(c,{children:[n&&(0,h.jsx)(`input`,{value:t,onChange:t=>O(n=>({...n,[e]:t.target.value})),placeholder:e===`compania`?`Buscar compañía...`:e===`clave`?`Buscar clave...`:`Buscar proyecto...`,style:{width:`100%`,height:`34px`,borderRadius:`8px`,border:`1px solid ${F.border}`,padding:`0 10px`,marginBottom:`10px`,background:F.inputBg,color:F.text,outline:`none`,fontSize:`13px`}}),n&&!t&&r.length>i.length&&(0,h.jsxs)(u,{fontSize:`11px`,color:F.textMuted,mb:2,children:[`Escribe para buscar entre `,r.length,` `,e===`compania`?`compañías`:e===`clave`?`claves`:`proyectos`,`.`]}),i.map(e=>(0,h.jsxs)(`label`,{style:{display:`flex`,gap:`8px`,alignItems:`flex-start`,marginBottom:`8px`,lineHeight:1.35,cursor:`pointer`},children:[(0,h.jsx)(`input`,{type:`checkbox`,checked:(T[C]||[]).includes(e),onChange:()=>Z(C,e),style:{accentColor:`#4B5563`,marginTop:`2px`}}),(0,h.jsx)(`span`,{children:e})]},e))]})})(C),(0,h.jsxs)(s,{position:`sticky`,bottom:`-12px`,mt:3,mx:`-12px`,mb:`-12px`,px:3,py:2.5,justify:`space-between`,align:`center`,bg:F.surface,borderTop:`1px solid ${F.border}`,children:[(0,h.jsx)(t,{size:`xs`,variant:`ghost`,color:F.text,onClick:()=>{E(e=>C===`proyecto`?{...e,proyecto:[],estado:[]}:{...e,[C]:[]}),O(e=>C===`proyecto`?{...e,proyecto:``}:{...e,[C]:``}),M(1)},children:`Limpiar`}),(0,h.jsx)(t,{size:`xs`,bg:`#FF653F`,color:`white`,_hover:{bg:`#E85A37`},onClick:()=>w(null),children:`Listo`})]})]})]}),K.length>0&&(0,h.jsxs)(s,{flexShrink:0,align:`center`,gap:2,px:3,py:2,borderTop:`1px solid ${F.border}`,bg:F.surface,minW:0,children:[(0,h.jsxs)(u,{color:F.textMuted,fontSize:`11px`,fontWeight:`600`,whiteSpace:`nowrap`,children:[`Filtros de tabla (`,K.length,`)`]}),(0,h.jsx)(s,{gap:1.5,overflowX:`auto`,flex:`1`,minW:0,pb:`1px`,children:K.map(e=>(0,h.jsxs)(s,{align:`center`,gap:1,px:2,h:`28px`,flexShrink:0,maxW:`280px`,borderRadius:`999px`,border:`1px solid rgba(255, 101, 63, .42)`,bg:`rgba(255, 101, 63, .08)`,color:F.text,children:[(0,h.jsxs)(u,{fontSize:`11px`,color:F.textMuted,whiteSpace:`nowrap`,children:[e.label,`:`]}),(0,h.jsx)(u,{fontSize:`11px`,fontWeight:`600`,noOfLines:1,title:e.value,children:e.value})]},e.key))}),(0,h.jsx)(t,{size:`xs`,h:`28px`,px:3,flexShrink:0,borderRadius:`8px`,bg:`#FF653F`,color:`white`,_hover:{bg:`#E85A37`},onClick:pe,children:`Limpiar filtros`})]}),(0,h.jsxs)(s,{flexShrink:0,justify:`space-between`,align:`center`,px:3,borderTop:`1px solid ${F.border}`,bg:F.surface,py:3,mt:0,children:[(0,h.jsxs)(s,{align:`center`,gap:3,minW:0,children:[(0,h.jsxs)(u,{color:F.textMuted,fontSize:`13px`,whiteSpace:`nowrap`,children:[`Mostrando `,G.length?`${(W-1)*g+1}-${Math.min(W*g,V.length)}`:`0`,` de `,V.length,` resultados`]}),U>1&&(0,h.jsxs)(n,{spacing:1,children:[(0,h.jsx)(t,{size:`xs`,variant:`outline`,"aria-label":`Página anterior`,title:`Página anterior`,minW:`28px`,h:`28px`,p:0,borderColor:F.border,isDisabled:W===1,onClick:()=>M(Math.max(1,W-1)),children:(0,h.jsx)(o,{size:14})}),(0,h.jsxs)(u,{color:F.textMuted,fontSize:`12px`,minW:`76px`,textAlign:`center`,children:[W,` de `,U]}),(0,h.jsx)(t,{size:`xs`,variant:`outline`,"aria-label":`Página siguiente`,title:`Página siguiente`,minW:`28px`,h:`28px`,p:0,borderColor:F.border,isDisabled:W===U,onClick:()=>M(Math.min(U,W+1)),children:(0,h.jsx)(e,{size:14})})]})]}),(0,h.jsxs)(u,{color:F.textMuted,fontSize:`13px`,children:[k.length,` seleccionados`]})]})]})}export{C as default};