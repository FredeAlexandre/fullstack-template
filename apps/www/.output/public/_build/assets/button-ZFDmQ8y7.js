import{r as x,j as V,C as ne}from"./client-B6G1yI40.js";function D(e,t){if(typeof e=="function")return e(t);e!=null&&(e.current=t)}function se(...e){return t=>{let r=!1;const o=e.map(s=>{const n=D(s,t);return!r&&typeof n=="function"&&(r=!0),n});if(r)return()=>{for(let s=0;s<o.length;s++){const n=o[s];typeof n=="function"?n():D(e[s],null)}}}}function De(...e){return x.useCallback(se(...e),e)}var ie=x.forwardRef((e,t)=>{const{children:r,...o}=e,s=x.Children.toArray(r),n=s.find(be);if(n){const l=n.props.children,i=s.map(d=>d===n?x.Children.count(l)>1?x.Children.only(null):x.isValidElement(l)?l.props.children:null:d);return V.jsx(U,{...o,ref:t,children:x.isValidElement(l)?x.cloneElement(l,void 0,i):null})}return V.jsx(U,{...o,ref:t,children:r})});ie.displayName="Slot";var U=x.forwardRef((e,t)=>{const{children:r,...o}=e;if(x.isValidElement(r)){const s=ge(r);return x.cloneElement(r,{...fe(o,r.props),ref:t?se(t,s):s})}return x.Children.count(r)>1?x.Children.only(null):null});U.displayName="SlotClone";var pe=({children:e})=>V.jsx(V.Fragment,{children:e});function be(e){return x.isValidElement(e)&&e.type===pe}function fe(e,t){const r={...t};for(const o in t){const s=e[o],n=t[o];/^on[A-Z]/.test(o)?s&&n?r[o]=(...i)=>{n(...i),s(...i)}:s&&(r[o]=s):o==="style"?r[o]={...s,...n}:o==="className"&&(r[o]=[s,n].filter(Boolean).join(" "))}return{...e,...r}}function ge(e){let t=Object.getOwnPropertyDescriptor(e.props,"ref")?.get,r=t&&"isReactWarning"in t&&t.isReactWarning;return r?e.ref:(t=Object.getOwnPropertyDescriptor(e,"ref")?.get,r=t&&"isReactWarning"in t&&t.isReactWarning,r?e.props.ref:e.props.ref||e.ref)}const ee=e=>typeof e=="boolean"?`${e}`:e===0?"0":e,re=ne,me=(e,t)=>r=>{var o;if(t?.variants==null)return re(e,r?.class,r?.className);const{variants:s,defaultVariants:n}=t,l=Object.keys(s).map(c=>{const f=r?.[c],h=n?.[c];if(f===null)return null;const m=ee(f)||ee(h);return s[c][m]}),i=r&&Object.entries(r).reduce((c,f)=>{let[h,m]=f;return m===void 0||(c[h]=m),c},{}),d=t==null||(o=t.compoundVariants)===null||o===void 0?void 0:o.reduce((c,f)=>{let{class:h,className:m,...C}=f;return Object.entries(C).every(v=>{let[g,u]=v;return Array.isArray(u)?u.includes({...n,...i}[g]):{...n,...i}[g]===u})?[...c,h,m]:c},[]);return re(e,l,d,r?.class,r?.className)},q="-",he=e=>{const t=xe(e),{conflictingClassGroups:r,conflictingClassGroupModifiers:o}=e;return{getClassGroupId:l=>{const i=l.split(q);return i[0]===""&&i.length!==1&&i.shift(),le(i,t)||ye(l)},getConflictingClassGroupIds:(l,i)=>{const d=r[l]||[];return i&&o[l]?[...d,...o[l]]:d}}},le=(e,t)=>{if(e.length===0)return t.classGroupId;const r=e[0],o=t.nextPart.get(r),s=o?le(e.slice(1),o):void 0;if(s)return s;if(t.validators.length===0)return;const n=e.join(q);return t.validators.find(({validator:l})=>l(n))?.classGroupId},te=/^\[(.+)\]$/,ye=e=>{if(te.test(e)){const t=te.exec(e)[1],r=t?.substring(0,t.indexOf(":"));if(r)return"arbitrary.."+r}},xe=e=>{const{theme:t,prefix:r}=e,o={nextPart:new Map,validators:[]};return we(Object.entries(e.classGroups),r).forEach(([n,l])=>{F(l,o,n,t)}),o},F=(e,t,r,o)=>{e.forEach(s=>{if(typeof s=="string"){const n=s===""?t:oe(t,s);n.classGroupId=r;return}if(typeof s=="function"){if(ve(s)){F(s(o),t,r,o);return}t.validators.push({validator:s,classGroupId:r});return}Object.entries(s).forEach(([n,l])=>{F(l,oe(t,n),r,o)})})},oe=(e,t)=>{let r=e;return t.split(q).forEach(o=>{r.nextPart.has(o)||r.nextPart.set(o,{nextPart:new Map,validators:[]}),r=r.nextPart.get(o)}),r},ve=e=>e.isThemeGetter,we=(e,t)=>t?e.map(([r,o])=>{const s=o.map(n=>typeof n=="string"?t+n:typeof n=="object"?Object.fromEntries(Object.entries(n).map(([l,i])=>[t+l,i])):n);return[r,s]}):e,Ce=e=>{if(e<1)return{get:()=>{},set:()=>{}};let t=0,r=new Map,o=new Map;const s=(n,l)=>{r.set(n,l),t++,t>e&&(t=0,o=r,r=new Map)};return{get(n){let l=r.get(n);if(l!==void 0)return l;if((l=o.get(n))!==void 0)return s(n,l),l},set(n,l){r.has(n)?r.set(n,l):s(n,l)}}},ae="!",ke=e=>{const{separator:t,experimentalParseClassName:r}=e,o=t.length===1,s=t[0],n=t.length,l=i=>{const d=[];let c=0,f=0,h;for(let u=0;u<i.length;u++){let y=i[u];if(c===0){if(y===s&&(o||i.slice(u,u+n)===t)){d.push(i.slice(f,u)),f=u+n;continue}if(y==="/"){h=u;continue}}y==="["?c++:y==="]"&&c--}const m=d.length===0?i:i.substring(f),C=m.startsWith(ae),v=C?m.substring(1):m,g=h&&h>f?h-f:void 0;return{modifiers:d,hasImportantModifier:C,baseClassName:v,maybePostfixModifierPosition:g}};return r?i=>r({className:i,parseClassName:l}):l},ze=e=>{if(e.length<=1)return e;const t=[];let r=[];return e.forEach(o=>{o[0]==="["?(t.push(...r.sort(),o),r=[]):r.push(o)}),t.push(...r.sort()),t},Se=e=>({cache:Ce(e.cacheSize),parseClassName:ke(e),...he(e)}),Ae=/\s+/,Re=(e,t)=>{const{parseClassName:r,getClassGroupId:o,getConflictingClassGroupIds:s}=t,n=[],l=e.trim().split(Ae);let i="";for(let d=l.length-1;d>=0;d-=1){const c=l[d],{modifiers:f,hasImportantModifier:h,baseClassName:m,maybePostfixModifierPosition:C}=r(c);let v=!!C,g=o(v?m.substring(0,C):m);if(!g){if(!v){i=c+(i.length>0?" "+i:i);continue}if(g=o(m),!g){i=c+(i.length>0?" "+i:i);continue}v=!1}const u=ze(f).join(":"),y=h?u+ae:u,w=y+g;if(n.includes(w))continue;n.push(w);const M=s(g,v);for(let R=0;R<M.length;++R){const I=M[R];n.push(y+I)}i=c+(i.length>0?" "+i:i)}return i};function Pe(){let e=0,t,r,o="";for(;e<arguments.length;)(t=arguments[e++])&&(r=ce(t))&&(o&&(o+=" "),o+=r);return o}const ce=e=>{if(typeof e=="string")return e;let t,r="";for(let o=0;o<e.length;o++)e[o]&&(t=ce(e[o]))&&(r&&(r+=" "),r+=t);return r};function je(e,...t){let r,o,s,n=l;function l(d){const c=t.reduce((f,h)=>h(f),e());return r=Se(c),o=r.cache.get,s=r.cache.set,n=i,i(d)}function i(d){const c=o(d);if(c)return c;const f=Re(d,r);return s(d,f),f}return function(){return n(Pe.apply(null,arguments))}}const p=e=>{const t=r=>r[e]||[];return t.isThemeGetter=!0,t},de=/^\[(?:([a-z-]+):)?(.+)\]$/i,Me=/^\d+\/\d+$/,Ne=new Set(["px","full","screen"]),Ee=/^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/,Ge=/\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/,Ve=/^(rgba?|hsla?|hwb|(ok)?(lab|lch))\(.+\)$/,Ie=/^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/,Te=/^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/,z=e=>P(e)||Ne.has(e)||Me.test(e),S=e=>j(e,"length",Fe),P=e=>!!e&&!Number.isNaN(Number(e)),$=e=>j(e,"number",P),E=e=>!!e&&Number.isInteger(Number(e)),We=e=>e.endsWith("%")&&P(e.slice(0,-1)),a=e=>de.test(e),A=e=>Ee.test(e),Oe=new Set(["length","size","percentage"]),Le=e=>j(e,Oe,ue),_e=e=>j(e,"position",ue),Be=new Set(["image","url"]),$e=e=>j(e,Be,He),Ue=e=>j(e,"",qe),G=()=>!0,j=(e,t,r)=>{const o=de.exec(e);return o?o[1]?typeof t=="string"?o[1]===t:t.has(o[1]):r(o[2]):!1},Fe=e=>Ge.test(e)&&!Ve.test(e),ue=()=>!1,qe=e=>Ie.test(e),He=e=>Te.test(e),Ze=()=>{const e=p("colors"),t=p("spacing"),r=p("blur"),o=p("brightness"),s=p("borderColor"),n=p("borderRadius"),l=p("borderSpacing"),i=p("borderWidth"),d=p("contrast"),c=p("grayscale"),f=p("hueRotate"),h=p("invert"),m=p("gap"),C=p("gradientColorStops"),v=p("gradientColorStopPositions"),g=p("inset"),u=p("margin"),y=p("opacity"),w=p("padding"),M=p("saturate"),R=p("scale"),I=p("sepia"),H=p("skew"),Z=p("space"),J=p("translate"),O=()=>["auto","contain","none"],L=()=>["auto","hidden","clip","visible","scroll"],_=()=>["auto",a,t],b=()=>[a,t],K=()=>["",z,S],T=()=>["auto",P,a],X=()=>["bottom","center","left","left-bottom","left-top","right","right-bottom","right-top","top"],W=()=>["solid","dashed","dotted","double","none"],Q=()=>["normal","multiply","screen","overlay","darken","lighten","color-dodge","color-burn","hard-light","soft-light","difference","exclusion","hue","saturation","color","luminosity"],B=()=>["start","end","center","between","around","evenly","stretch"],N=()=>["","0",a],Y=()=>["auto","avoid","all","avoid-page","page","left","right","column"],k=()=>[P,a];return{cacheSize:500,separator:":",theme:{colors:[G],spacing:[z,S],blur:["none","",A,a],brightness:k(),borderColor:[e],borderRadius:["none","","full",A,a],borderSpacing:b(),borderWidth:K(),contrast:k(),grayscale:N(),hueRotate:k(),invert:N(),gap:b(),gradientColorStops:[e],gradientColorStopPositions:[We,S],inset:_(),margin:_(),opacity:k(),padding:b(),saturate:k(),scale:k(),sepia:N(),skew:k(),space:b(),translate:b()},classGroups:{aspect:[{aspect:["auto","square","video",a]}],container:["container"],columns:[{columns:[A]}],"break-after":[{"break-after":Y()}],"break-before":[{"break-before":Y()}],"break-inside":[{"break-inside":["auto","avoid","avoid-page","avoid-column"]}],"box-decoration":[{"box-decoration":["slice","clone"]}],box:[{box:["border","content"]}],display:["block","inline-block","inline","flex","inline-flex","table","inline-table","table-caption","table-cell","table-column","table-column-group","table-footer-group","table-header-group","table-row-group","table-row","flow-root","grid","inline-grid","contents","list-item","hidden"],float:[{float:["right","left","none","start","end"]}],clear:[{clear:["left","right","both","none","start","end"]}],isolation:["isolate","isolation-auto"],"object-fit":[{object:["contain","cover","fill","none","scale-down"]}],"object-position":[{object:[...X(),a]}],overflow:[{overflow:L()}],"overflow-x":[{"overflow-x":L()}],"overflow-y":[{"overflow-y":L()}],overscroll:[{overscroll:O()}],"overscroll-x":[{"overscroll-x":O()}],"overscroll-y":[{"overscroll-y":O()}],position:["static","fixed","absolute","relative","sticky"],inset:[{inset:[g]}],"inset-x":[{"inset-x":[g]}],"inset-y":[{"inset-y":[g]}],start:[{start:[g]}],end:[{end:[g]}],top:[{top:[g]}],right:[{right:[g]}],bottom:[{bottom:[g]}],left:[{left:[g]}],visibility:["visible","invisible","collapse"],z:[{z:["auto",E,a]}],basis:[{basis:_()}],"flex-direction":[{flex:["row","row-reverse","col","col-reverse"]}],"flex-wrap":[{flex:["wrap","wrap-reverse","nowrap"]}],flex:[{flex:["1","auto","initial","none",a]}],grow:[{grow:N()}],shrink:[{shrink:N()}],order:[{order:["first","last","none",E,a]}],"grid-cols":[{"grid-cols":[G]}],"col-start-end":[{col:["auto",{span:["full",E,a]},a]}],"col-start":[{"col-start":T()}],"col-end":[{"col-end":T()}],"grid-rows":[{"grid-rows":[G]}],"row-start-end":[{row:["auto",{span:[E,a]},a]}],"row-start":[{"row-start":T()}],"row-end":[{"row-end":T()}],"grid-flow":[{"grid-flow":["row","col","dense","row-dense","col-dense"]}],"auto-cols":[{"auto-cols":["auto","min","max","fr",a]}],"auto-rows":[{"auto-rows":["auto","min","max","fr",a]}],gap:[{gap:[m]}],"gap-x":[{"gap-x":[m]}],"gap-y":[{"gap-y":[m]}],"justify-content":[{justify:["normal",...B()]}],"justify-items":[{"justify-items":["start","end","center","stretch"]}],"justify-self":[{"justify-self":["auto","start","end","center","stretch"]}],"align-content":[{content:["normal",...B(),"baseline"]}],"align-items":[{items:["start","end","center","baseline","stretch"]}],"align-self":[{self:["auto","start","end","center","stretch","baseline"]}],"place-content":[{"place-content":[...B(),"baseline"]}],"place-items":[{"place-items":["start","end","center","baseline","stretch"]}],"place-self":[{"place-self":["auto","start","end","center","stretch"]}],p:[{p:[w]}],px:[{px:[w]}],py:[{py:[w]}],ps:[{ps:[w]}],pe:[{pe:[w]}],pt:[{pt:[w]}],pr:[{pr:[w]}],pb:[{pb:[w]}],pl:[{pl:[w]}],m:[{m:[u]}],mx:[{mx:[u]}],my:[{my:[u]}],ms:[{ms:[u]}],me:[{me:[u]}],mt:[{mt:[u]}],mr:[{mr:[u]}],mb:[{mb:[u]}],ml:[{ml:[u]}],"space-x":[{"space-x":[Z]}],"space-x-reverse":["space-x-reverse"],"space-y":[{"space-y":[Z]}],"space-y-reverse":["space-y-reverse"],w:[{w:["auto","min","max","fit","svw","lvw","dvw",a,t]}],"min-w":[{"min-w":[a,t,"min","max","fit"]}],"max-w":[{"max-w":[a,t,"none","full","min","max","fit","prose",{screen:[A]},A]}],h:[{h:[a,t,"auto","min","max","fit","svh","lvh","dvh"]}],"min-h":[{"min-h":[a,t,"min","max","fit","svh","lvh","dvh"]}],"max-h":[{"max-h":[a,t,"min","max","fit","svh","lvh","dvh"]}],size:[{size:[a,t,"auto","min","max","fit"]}],"font-size":[{text:["base",A,S]}],"font-smoothing":["antialiased","subpixel-antialiased"],"font-style":["italic","not-italic"],"font-weight":[{font:["thin","extralight","light","normal","medium","semibold","bold","extrabold","black",$]}],"font-family":[{font:[G]}],"fvn-normal":["normal-nums"],"fvn-ordinal":["ordinal"],"fvn-slashed-zero":["slashed-zero"],"fvn-figure":["lining-nums","oldstyle-nums"],"fvn-spacing":["proportional-nums","tabular-nums"],"fvn-fraction":["diagonal-fractions","stacked-fractions"],tracking:[{tracking:["tighter","tight","normal","wide","wider","widest",a]}],"line-clamp":[{"line-clamp":["none",P,$]}],leading:[{leading:["none","tight","snug","normal","relaxed","loose",z,a]}],"list-image":[{"list-image":["none",a]}],"list-style-type":[{list:["none","disc","decimal",a]}],"list-style-position":[{list:["inside","outside"]}],"placeholder-color":[{placeholder:[e]}],"placeholder-opacity":[{"placeholder-opacity":[y]}],"text-alignment":[{text:["left","center","right","justify","start","end"]}],"text-color":[{text:[e]}],"text-opacity":[{"text-opacity":[y]}],"text-decoration":["underline","overline","line-through","no-underline"],"text-decoration-style":[{decoration:[...W(),"wavy"]}],"text-decoration-thickness":[{decoration:["auto","from-font",z,S]}],"underline-offset":[{"underline-offset":["auto",z,a]}],"text-decoration-color":[{decoration:[e]}],"text-transform":["uppercase","lowercase","capitalize","normal-case"],"text-overflow":["truncate","text-ellipsis","text-clip"],"text-wrap":[{text:["wrap","nowrap","balance","pretty"]}],indent:[{indent:b()}],"vertical-align":[{align:["baseline","top","middle","bottom","text-top","text-bottom","sub","super",a]}],whitespace:[{whitespace:["normal","nowrap","pre","pre-line","pre-wrap","break-spaces"]}],break:[{break:["normal","words","all","keep"]}],hyphens:[{hyphens:["none","manual","auto"]}],content:[{content:["none",a]}],"bg-attachment":[{bg:["fixed","local","scroll"]}],"bg-clip":[{"bg-clip":["border","padding","content","text"]}],"bg-opacity":[{"bg-opacity":[y]}],"bg-origin":[{"bg-origin":["border","padding","content"]}],"bg-position":[{bg:[...X(),_e]}],"bg-repeat":[{bg:["no-repeat",{repeat:["","x","y","round","space"]}]}],"bg-size":[{bg:["auto","cover","contain",Le]}],"bg-image":[{bg:["none",{"gradient-to":["t","tr","r","br","b","bl","l","tl"]},$e]}],"bg-color":[{bg:[e]}],"gradient-from-pos":[{from:[v]}],"gradient-via-pos":[{via:[v]}],"gradient-to-pos":[{to:[v]}],"gradient-from":[{from:[C]}],"gradient-via":[{via:[C]}],"gradient-to":[{to:[C]}],rounded:[{rounded:[n]}],"rounded-s":[{"rounded-s":[n]}],"rounded-e":[{"rounded-e":[n]}],"rounded-t":[{"rounded-t":[n]}],"rounded-r":[{"rounded-r":[n]}],"rounded-b":[{"rounded-b":[n]}],"rounded-l":[{"rounded-l":[n]}],"rounded-ss":[{"rounded-ss":[n]}],"rounded-se":[{"rounded-se":[n]}],"rounded-ee":[{"rounded-ee":[n]}],"rounded-es":[{"rounded-es":[n]}],"rounded-tl":[{"rounded-tl":[n]}],"rounded-tr":[{"rounded-tr":[n]}],"rounded-br":[{"rounded-br":[n]}],"rounded-bl":[{"rounded-bl":[n]}],"border-w":[{border:[i]}],"border-w-x":[{"border-x":[i]}],"border-w-y":[{"border-y":[i]}],"border-w-s":[{"border-s":[i]}],"border-w-e":[{"border-e":[i]}],"border-w-t":[{"border-t":[i]}],"border-w-r":[{"border-r":[i]}],"border-w-b":[{"border-b":[i]}],"border-w-l":[{"border-l":[i]}],"border-opacity":[{"border-opacity":[y]}],"border-style":[{border:[...W(),"hidden"]}],"divide-x":[{"divide-x":[i]}],"divide-x-reverse":["divide-x-reverse"],"divide-y":[{"divide-y":[i]}],"divide-y-reverse":["divide-y-reverse"],"divide-opacity":[{"divide-opacity":[y]}],"divide-style":[{divide:W()}],"border-color":[{border:[s]}],"border-color-x":[{"border-x":[s]}],"border-color-y":[{"border-y":[s]}],"border-color-s":[{"border-s":[s]}],"border-color-e":[{"border-e":[s]}],"border-color-t":[{"border-t":[s]}],"border-color-r":[{"border-r":[s]}],"border-color-b":[{"border-b":[s]}],"border-color-l":[{"border-l":[s]}],"divide-color":[{divide:[s]}],"outline-style":[{outline:["",...W()]}],"outline-offset":[{"outline-offset":[z,a]}],"outline-w":[{outline:[z,S]}],"outline-color":[{outline:[e]}],"ring-w":[{ring:K()}],"ring-w-inset":["ring-inset"],"ring-color":[{ring:[e]}],"ring-opacity":[{"ring-opacity":[y]}],"ring-offset-w":[{"ring-offset":[z,S]}],"ring-offset-color":[{"ring-offset":[e]}],shadow:[{shadow:["","inner","none",A,Ue]}],"shadow-color":[{shadow:[G]}],opacity:[{opacity:[y]}],"mix-blend":[{"mix-blend":[...Q(),"plus-lighter","plus-darker"]}],"bg-blend":[{"bg-blend":Q()}],filter:[{filter:["","none"]}],blur:[{blur:[r]}],brightness:[{brightness:[o]}],contrast:[{contrast:[d]}],"drop-shadow":[{"drop-shadow":["","none",A,a]}],grayscale:[{grayscale:[c]}],"hue-rotate":[{"hue-rotate":[f]}],invert:[{invert:[h]}],saturate:[{saturate:[M]}],sepia:[{sepia:[I]}],"backdrop-filter":[{"backdrop-filter":["","none"]}],"backdrop-blur":[{"backdrop-blur":[r]}],"backdrop-brightness":[{"backdrop-brightness":[o]}],"backdrop-contrast":[{"backdrop-contrast":[d]}],"backdrop-grayscale":[{"backdrop-grayscale":[c]}],"backdrop-hue-rotate":[{"backdrop-hue-rotate":[f]}],"backdrop-invert":[{"backdrop-invert":[h]}],"backdrop-opacity":[{"backdrop-opacity":[y]}],"backdrop-saturate":[{"backdrop-saturate":[M]}],"backdrop-sepia":[{"backdrop-sepia":[I]}],"border-collapse":[{border:["collapse","separate"]}],"border-spacing":[{"border-spacing":[l]}],"border-spacing-x":[{"border-spacing-x":[l]}],"border-spacing-y":[{"border-spacing-y":[l]}],"table-layout":[{table:["auto","fixed"]}],caption:[{caption:["top","bottom"]}],transition:[{transition:["none","all","","colors","opacity","shadow","transform",a]}],duration:[{duration:k()}],ease:[{ease:["linear","in","out","in-out",a]}],delay:[{delay:k()}],animate:[{animate:["none","spin","ping","pulse","bounce",a]}],transform:[{transform:["","gpu","none"]}],scale:[{scale:[R]}],"scale-x":[{"scale-x":[R]}],"scale-y":[{"scale-y":[R]}],rotate:[{rotate:[E,a]}],"translate-x":[{"translate-x":[J]}],"translate-y":[{"translate-y":[J]}],"skew-x":[{"skew-x":[H]}],"skew-y":[{"skew-y":[H]}],"transform-origin":[{origin:["center","top","top-right","right","bottom-right","bottom","bottom-left","left","top-left",a]}],accent:[{accent:["auto",e]}],appearance:[{appearance:["none","auto"]}],cursor:[{cursor:["auto","default","pointer","wait","text","move","help","not-allowed","none","context-menu","progress","cell","crosshair","vertical-text","alias","copy","no-drop","grab","grabbing","all-scroll","col-resize","row-resize","n-resize","e-resize","s-resize","w-resize","ne-resize","nw-resize","se-resize","sw-resize","ew-resize","ns-resize","nesw-resize","nwse-resize","zoom-in","zoom-out",a]}],"caret-color":[{caret:[e]}],"pointer-events":[{"pointer-events":["none","auto"]}],resize:[{resize:["none","y","x",""]}],"scroll-behavior":[{scroll:["auto","smooth"]}],"scroll-m":[{"scroll-m":b()}],"scroll-mx":[{"scroll-mx":b()}],"scroll-my":[{"scroll-my":b()}],"scroll-ms":[{"scroll-ms":b()}],"scroll-me":[{"scroll-me":b()}],"scroll-mt":[{"scroll-mt":b()}],"scroll-mr":[{"scroll-mr":b()}],"scroll-mb":[{"scroll-mb":b()}],"scroll-ml":[{"scroll-ml":b()}],"scroll-p":[{"scroll-p":b()}],"scroll-px":[{"scroll-px":b()}],"scroll-py":[{"scroll-py":b()}],"scroll-ps":[{"scroll-ps":b()}],"scroll-pe":[{"scroll-pe":b()}],"scroll-pt":[{"scroll-pt":b()}],"scroll-pr":[{"scroll-pr":b()}],"scroll-pb":[{"scroll-pb":b()}],"scroll-pl":[{"scroll-pl":b()}],"snap-align":[{snap:["start","end","center","align-none"]}],"snap-stop":[{snap:["normal","always"]}],"snap-type":[{snap:["none","x","y","both"]}],"snap-strictness":[{snap:["mandatory","proximity"]}],touch:[{touch:["auto","none","manipulation"]}],"touch-x":[{"touch-pan":["x","left","right"]}],"touch-y":[{"touch-pan":["y","up","down"]}],"touch-pz":["touch-pinch-zoom"],select:[{select:["none","text","all","auto"]}],"will-change":[{"will-change":["auto","scroll","contents","transform",a]}],fill:[{fill:[e,"none"]}],"stroke-w":[{stroke:[z,S,$]}],stroke:[{stroke:[e,"none"]}],sr:["sr-only","not-sr-only"],"forced-color-adjust":[{"forced-color-adjust":["auto","none"]}]},conflictingClassGroups:{overflow:["overflow-x","overflow-y"],overscroll:["overscroll-x","overscroll-y"],inset:["inset-x","inset-y","start","end","top","right","bottom","left"],"inset-x":["right","left"],"inset-y":["top","bottom"],flex:["basis","grow","shrink"],gap:["gap-x","gap-y"],p:["px","py","ps","pe","pt","pr","pb","pl"],px:["pr","pl"],py:["pt","pb"],m:["mx","my","ms","me","mt","mr","mb","ml"],mx:["mr","ml"],my:["mt","mb"],size:["w","h"],"font-size":["leading"],"fvn-normal":["fvn-ordinal","fvn-slashed-zero","fvn-figure","fvn-spacing","fvn-fraction"],"fvn-ordinal":["fvn-normal"],"fvn-slashed-zero":["fvn-normal"],"fvn-figure":["fvn-normal"],"fvn-spacing":["fvn-normal"],"fvn-fraction":["fvn-normal"],"line-clamp":["display","overflow"],rounded:["rounded-s","rounded-e","rounded-t","rounded-r","rounded-b","rounded-l","rounded-ss","rounded-se","rounded-ee","rounded-es","rounded-tl","rounded-tr","rounded-br","rounded-bl"],"rounded-s":["rounded-ss","rounded-es"],"rounded-e":["rounded-se","rounded-ee"],"rounded-t":["rounded-tl","rounded-tr"],"rounded-r":["rounded-tr","rounded-br"],"rounded-b":["rounded-br","rounded-bl"],"rounded-l":["rounded-tl","rounded-bl"],"border-spacing":["border-spacing-x","border-spacing-y"],"border-w":["border-w-s","border-w-e","border-w-t","border-w-r","border-w-b","border-w-l"],"border-w-x":["border-w-r","border-w-l"],"border-w-y":["border-w-t","border-w-b"],"border-color":["border-color-s","border-color-e","border-color-t","border-color-r","border-color-b","border-color-l"],"border-color-x":["border-color-r","border-color-l"],"border-color-y":["border-color-t","border-color-b"],"scroll-m":["scroll-mx","scroll-my","scroll-ms","scroll-me","scroll-mt","scroll-mr","scroll-mb","scroll-ml"],"scroll-mx":["scroll-mr","scroll-ml"],"scroll-my":["scroll-mt","scroll-mb"],"scroll-p":["scroll-px","scroll-py","scroll-ps","scroll-pe","scroll-pt","scroll-pr","scroll-pb","scroll-pl"],"scroll-px":["scroll-pr","scroll-pl"],"scroll-py":["scroll-pt","scroll-pb"],touch:["touch-x","touch-y","touch-pz"],"touch-x":["touch"],"touch-y":["touch"],"touch-pz":["touch"]},conflictingClassGroupModifiers:{"font-size":["leading"]}}},Je=je(Ze);function Ke(...e){return Je(ne(e))}const Xe=me("inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",{variants:{variant:{default:"bg-primary text-primary-foreground shadow hover:bg-primary/90",destructive:"bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90",outline:"border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground",secondary:"bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80",ghost:"hover:bg-accent hover:text-accent-foreground",link:"text-primary underline-offset-4 hover:underline"},size:{default:"h-9 px-4 py-2",sm:"h-8 rounded-md px-3 text-xs",lg:"h-10 rounded-md px-8",icon:"h-9 w-9"}},defaultVariants:{variant:"default",size:"default"}}),Qe=x.forwardRef(({className:e,variant:t,size:r,asChild:o=!1,...s},n)=>{const l=o?ie:"button";return V.jsx(l,{className:Ke(Xe({variant:t,size:r,className:e})),ref:n,...s})});Qe.displayName="Button";export{Qe as B,ie as S,se as a,me as b,Ke as c,De as u};
