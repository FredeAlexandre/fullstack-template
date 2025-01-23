import*as i from"react";import{useState as Oe}from"react";import{u as N,d as V,a as ve}from"./index-DJ3tN8qV.js";import{P as U,d as Re}from"./index-DXPxg-Qg.js";import{u as ee}from"./button-U5Omqg_X.js";import{jsx as K}from"react/jsx-runtime";import Le from"react-dom";function Te(e,t=globalThis?.document){const n=N(e);i.useEffect(()=>{const r=a=>{a.key==="Escape"&&n(a)};return t.addEventListener("keydown",r,{capture:!0}),()=>t.removeEventListener("keydown",r,{capture:!0})},[n,t])}var Ae="DismissableLayer",Q="dismissableLayer.update",ke="dismissableLayer.pointerDownOutside",De="dismissableLayer.focusOutside",te,he=i.createContext({layers:new Set,layersWithOutsidePointerEventsDisabled:new Set,branches:new Set}),Fe=i.forwardRef((e,t)=>{const{disableOutsidePointerEvents:n=!1,onEscapeKeyDown:r,onPointerDownOutside:a,onFocusOutside:u,onInteractOutside:s,onDismiss:o,...b}=e,d=i.useContext(he),[f,h]=i.useState(null),v=f?.ownerDocument??globalThis?.document,[,p]=i.useState({}),C=ee(t,y=>h(y)),c=Array.from(d.layers),[l]=[...d.layersWithOutsidePointerEventsDisabled].slice(-1),m=c.indexOf(l),w=f?c.indexOf(f):-1,E=d.layersWithOutsidePointerEventsDisabled.size>0,g=w>=m,S=Me(y=>{const R=y.target,F=[...d.branches].some(j=>j.contains(R));!g||F||(a?.(y),s?.(y),y.defaultPrevented||o?.())},v),O=xe(y=>{const R=y.target;[...d.branches].some(j=>j.contains(R))||(u?.(y),s?.(y),y.defaultPrevented||o?.())},v);return Te(y=>{w===d.layers.size-1&&(r?.(y),!y.defaultPrevented&&o&&(y.preventDefault(),o()))},v),i.useEffect(()=>{if(f)return n&&(d.layersWithOutsidePointerEventsDisabled.size===0&&(te=v.body.style.pointerEvents,v.body.style.pointerEvents="none"),d.layersWithOutsidePointerEventsDisabled.add(f)),d.layers.add(f),ne(),()=>{n&&d.layersWithOutsidePointerEventsDisabled.size===1&&(v.body.style.pointerEvents=te)}},[f,v,n,d]),i.useEffect(()=>()=>{f&&(d.layers.delete(f),d.layersWithOutsidePointerEventsDisabled.delete(f),ne())},[f,d]),i.useEffect(()=>{const y=()=>p({});return document.addEventListener(Q,y),()=>document.removeEventListener(Q,y)},[]),K(U.div,{...b,ref:C,style:{pointerEvents:E?g?"auto":"none":void 0,...e.style},onFocusCapture:V(e.onFocusCapture,O.onFocusCapture),onBlurCapture:V(e.onBlurCapture,O.onBlurCapture),onPointerDownCapture:V(e.onPointerDownCapture,S.onPointerDownCapture)})});Fe.displayName=Ae;var Ne="DismissableLayerBranch",Ie=i.forwardRef((e,t)=>{const n=i.useContext(he),r=i.useRef(null),a=ee(t,r);return i.useEffect(()=>{const u=r.current;if(u)return n.branches.add(u),()=>{n.branches.delete(u)}},[n.branches]),K(U.div,{...e,ref:a})});Ie.displayName=Ne;function Me(e,t=globalThis?.document){const n=N(e),r=i.useRef(!1),a=i.useRef(()=>{});return i.useEffect(()=>{const u=o=>{if(o.target&&!r.current){let b=function(){me(ke,n,d,{discrete:!0})};const d={originalEvent:o};o.pointerType==="touch"?(t.removeEventListener("click",a.current),a.current=b,t.addEventListener("click",a.current,{once:!0})):b()}else t.removeEventListener("click",a.current);r.current=!1},s=window.setTimeout(()=>{t.addEventListener("pointerdown",u)},0);return()=>{window.clearTimeout(s),t.removeEventListener("pointerdown",u),t.removeEventListener("click",a.current)}},[t,n]),{onPointerDownCapture:()=>r.current=!0}}function xe(e,t=globalThis?.document){const n=N(e),r=i.useRef(!1);return i.useEffect(()=>{const a=u=>{u.target&&!r.current&&me(De,n,{originalEvent:u},{discrete:!1})};return t.addEventListener("focusin",a),()=>t.removeEventListener("focusin",a)},[t,n]),{onFocusCapture:()=>r.current=!0,onBlurCapture:()=>r.current=!1}}function ne(){const e=new CustomEvent(Q);document.dispatchEvent(e)}function me(e,t,n,{discrete:r}){const a=n.originalEvent.target,u=new CustomEvent(e,{bubbles:!1,cancelable:!0,detail:n});t&&a.addEventListener(e,t,{once:!0}),r?Re(a,u):a.dispatchEvent(u)}var X=0;function Kt(){i.useEffect(()=>{const e=document.querySelectorAll("[data-radix-focus-guard]");return document.body.insertAdjacentElement("afterbegin",e[0]??re()),document.body.insertAdjacentElement("beforeend",e[1]??re()),X++,()=>{X===1&&document.querySelectorAll("[data-radix-focus-guard]").forEach(t=>t.remove()),X--}},[])}function re(){const e=document.createElement("span");return e.setAttribute("data-radix-focus-guard",""),e.tabIndex=0,e.style.outline="none",e.style.opacity="0",e.style.position="fixed",e.style.pointerEvents="none",e}var Y="focusScope.autoFocusOnMount",z="focusScope.autoFocusOnUnmount",ae={bubbles:!1,cancelable:!0},Be="FocusScope",We=i.forwardRef((e,t)=>{const{loop:n=!1,trapped:r=!1,onMountAutoFocus:a,onUnmountAutoFocus:u,...s}=e,[o,b]=i.useState(null),d=N(a),f=N(u),h=i.useRef(null),v=ee(t,c=>b(c)),p=i.useRef({paused:!1,pause(){this.paused=!0},resume(){this.paused=!1}}).current;i.useEffect(()=>{if(r){let c=function(E){if(p.paused||!o)return;const g=E.target;o.contains(g)?h.current=g:L(h.current,{select:!0})},l=function(E){if(p.paused||!o)return;const g=E.relatedTarget;g!==null&&(o.contains(g)||L(h.current,{select:!0}))},m=function(E){if(document.activeElement===document.body)for(const S of E)S.removedNodes.length>0&&L(o)};document.addEventListener("focusin",c),document.addEventListener("focusout",l);const w=new MutationObserver(m);return o&&w.observe(o,{childList:!0,subtree:!0}),()=>{document.removeEventListener("focusin",c),document.removeEventListener("focusout",l),w.disconnect()}}},[r,o,p.paused]),i.useEffect(()=>{if(o){ie.add(p);const c=document.activeElement;if(!o.contains(c)){const m=new CustomEvent(Y,ae);o.addEventListener(Y,d),o.dispatchEvent(m),m.defaultPrevented||(_e(Ve(pe(o)),{select:!0}),document.activeElement===c&&L(o))}return()=>{o.removeEventListener(Y,d),setTimeout(()=>{const m=new CustomEvent(z,ae);o.addEventListener(z,f),o.dispatchEvent(m),m.defaultPrevented||L(c??document.body,{select:!0}),o.removeEventListener(z,f),ie.remove(p)},0)}}},[o,d,f,p]);const C=i.useCallback(c=>{if(!n&&!r||p.paused)return;const l=c.key==="Tab"&&!c.altKey&&!c.ctrlKey&&!c.metaKey,m=document.activeElement;if(l&&m){const w=c.currentTarget,[E,g]=Ue(w);E&&g?!c.shiftKey&&m===g?(c.preventDefault(),n&&L(E,{select:!0})):c.shiftKey&&m===E&&(c.preventDefault(),n&&L(g,{select:!0})):m===w&&c.preventDefault()}},[n,r,p.paused]);return K(U.div,{tabIndex:-1,...s,ref:v,onKeyDown:C})});We.displayName=Be;function _e(e,{select:t=!1}={}){const n=document.activeElement;for(const r of e)if(L(r,{select:t}),document.activeElement!==n)return}function Ue(e){const t=pe(e),n=oe(t,e),r=oe(t.reverse(),e);return[n,r]}function pe(e){const t=[],n=document.createTreeWalker(e,NodeFilter.SHOW_ELEMENT,{acceptNode:r=>{const a=r.tagName==="INPUT"&&r.type==="hidden";return r.disabled||r.hidden||a?NodeFilter.FILTER_SKIP:r.tabIndex>=0?NodeFilter.FILTER_ACCEPT:NodeFilter.FILTER_SKIP}});for(;n.nextNode();)t.push(n.currentNode);return t}function oe(e,t){for(const n of e)if(!Ke(n,{upTo:t}))return n}function Ke(e,{upTo:t}){if(getComputedStyle(e).visibility==="hidden")return!0;for(;e;){if(t!==void 0&&e===t)return!1;if(getComputedStyle(e).display==="none")return!0;e=e.parentElement}return!1}function He(e){return e instanceof HTMLInputElement&&"select"in e}function L(e,{select:t=!1}={}){if(e&&e.focus){const n=document.activeElement;e.focus({preventScroll:!0}),e!==n&&He(e)&&t&&e.select()}}var ie=je();function je(){let e=[];return{add(t){const n=e[0];t!==n&&n?.pause(),e=ce(e,t),e.unshift(t)},remove(t){e=ce(e,t),e[0]?.resume()}}}function ce(e,t){const n=[...e],r=n.indexOf(t);return r!==-1&&n.splice(r,1),n}function Ve(e){return e.filter(t=>t.tagName!=="A")}var Xe=i.useId||(()=>{}),Ye=0;function Ht(e){const[t,n]=i.useState(Xe());return ve(()=>{e||n(r=>r??String(Ye++))},[e]),e||(t?`radix-${t}`:"")}var ze="Portal",Ge=i.forwardRef((e,t)=>{const{container:n,...r}=e,[a,u]=i.useState(!1);ve(()=>u(!0),[]);const s=n||a&&globalThis?.document?.body;return s?Le.createPortal(K(U.div,{...r,ref:t}),s):null});Ge.displayName=ze;var Ze=function(e){if(typeof document>"u")return null;var t=Array.isArray(e)?e[0]:e;return t.ownerDocument.body},T=new WeakMap,I=new WeakMap,M={},G=0,ye=function(e){return e&&(e.host||ye(e.parentNode))},$e=function(e,t){return t.map(function(n){if(e.contains(n))return n;var r=ye(n);return r&&e.contains(r)?r:(console.error("aria-hidden",n,"in not contained inside",e,". Doing nothing"),null)}).filter(function(n){return!!n})},qe=function(e,t,n,r){var a=$e(t,Array.isArray(e)?e:[e]);M[n]||(M[n]=new WeakMap);var u=M[n],s=[],o=new Set,b=new Set(a),d=function(h){!h||o.has(h)||(o.add(h),d(h.parentNode))};a.forEach(d);var f=function(h){!h||b.has(h)||Array.prototype.forEach.call(h.children,function(v){if(o.has(v))f(v);else try{var p=v.getAttribute(r),C=p!==null&&p!=="false",c=(T.get(v)||0)+1,l=(u.get(v)||0)+1;T.set(v,c),u.set(v,l),s.push(v),c===1&&C&&I.set(v,!0),l===1&&v.setAttribute(n,"true"),C||v.setAttribute(r,"true")}catch(m){console.error("aria-hidden: cannot operate on ",v,m)}})};return f(t),o.clear(),G++,function(){s.forEach(function(h){var v=T.get(h)-1,p=u.get(h)-1;T.set(h,v),u.set(h,p),v||(I.has(h)||h.removeAttribute(r),I.delete(h)),p||h.removeAttribute(n)}),G--,G||(T=new WeakMap,T=new WeakMap,I=new WeakMap,M={})}},jt=function(e,t,n){n===void 0&&(n="data-aria-hidden");var r=Array.from(Array.isArray(e)?e:[e]),a=Ze(e);return a?(r.push.apply(r,Array.from(a.querySelectorAll("[aria-live]"))),qe(r,a,n,"aria-hidden")):function(){return null}},P=function(){return P=Object.assign||function(t){for(var n,r=1,a=arguments.length;r<a;r++){n=arguments[r];for(var u in n)Object.prototype.hasOwnProperty.call(n,u)&&(t[u]=n[u])}return t},P.apply(this,arguments)};function Ee(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,r=Object.getOwnPropertySymbols(e);a<r.length;a++)t.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(n[r[a]]=e[r[a]]);return n}function Qe(e,t,n){if(n||arguments.length===2)for(var r=0,a=t.length,u;r<a;r++)(u||!(r in t))&&(u||(u=Array.prototype.slice.call(t,0,r)),u[r]=t[r]);return e.concat(u||Array.prototype.slice.call(t))}var W="right-scroll-bar-position",_="width-before-scroll-bar",Je="with-scroll-bars-hidden",et="--removed-body-scroll-bar-size";function Z(e,t){return typeof e=="function"?e(t):e&&(e.current=t),e}function tt(e,t){var n=Oe(function(){return{value:e,callback:t,facade:{get current(){return n.value},set current(r){var a=n.value;a!==r&&(n.value=r,n.callback(r,a))}}}})[0];return n.callback=t,n.facade}var nt=typeof window<"u"?i.useLayoutEffect:i.useEffect,ue=new WeakMap;function rt(e,t){var n=tt(null,function(r){return e.forEach(function(a){return Z(a,r)})});return nt(function(){var r=ue.get(n);if(r){var a=new Set(r),u=new Set(e),s=n.current;a.forEach(function(o){u.has(o)||Z(o,null)}),u.forEach(function(o){a.has(o)||Z(o,s)})}ue.set(n,e)},[e]),n}function at(e){return e}function ot(e,t){t===void 0&&(t=at);var n=[],r=!1,a={read:function(){if(r)throw new Error("Sidecar: could not `read` from an `assigned` medium. `read` could be used only with `useMedium`.");return n.length?n[n.length-1]:e},useMedium:function(u){var s=t(u,r);return n.push(s),function(){n=n.filter(function(o){return o!==s})}},assignSyncMedium:function(u){for(r=!0;n.length;){var s=n;n=[],s.forEach(u)}n={push:function(o){return u(o)},filter:function(){return n}}},assignMedium:function(u){r=!0;var s=[];if(n.length){var o=n;n=[],o.forEach(u),s=n}var b=function(){var f=s;s=[],f.forEach(u)},d=function(){return Promise.resolve().then(b)};d(),n={push:function(f){s.push(f),d()},filter:function(f){return s=s.filter(f),n}}}};return a}function it(e){e===void 0&&(e={});var t=ot(null);return t.options=P({async:!0,ssr:!1},e),t}var ge=function(e){var t=e.sideCar,n=Ee(e,["sideCar"]);if(!t)throw new Error("Sidecar: please provide `sideCar` property to import the right car");var r=t.read();if(!r)throw new Error("Sidecar medium not found");return i.createElement(r,P({},n))};ge.isSideCarExport=!0;function ct(e,t){return e.useMedium(t),ge}var be=it(),$=function(){},H=i.forwardRef(function(e,t){var n=i.useRef(null),r=i.useState({onScrollCapture:$,onWheelCapture:$,onTouchMoveCapture:$}),a=r[0],u=r[1],s=e.forwardProps,o=e.children,b=e.className,d=e.removeScrollBar,f=e.enabled,h=e.shards,v=e.sideCar,p=e.noIsolation,C=e.inert,c=e.allowPinchZoom,l=e.as,m=l===void 0?"div":l,w=e.gapMode,E=Ee(e,["forwardProps","children","className","removeScrollBar","enabled","shards","sideCar","noIsolation","inert","allowPinchZoom","as","gapMode"]),g=v,S=rt([n,t]),O=P(P({},E),a);return i.createElement(i.Fragment,null,f&&i.createElement(g,{sideCar:be,removeScrollBar:d,shards:h,noIsolation:p,inert:C,setCallbacks:u,allowPinchZoom:!!c,lockRef:n,gapMode:w}),s?i.cloneElement(i.Children.only(o),P(P({},O),{ref:S})):i.createElement(m,P({},O,{className:b,ref:S}),o))});H.defaultProps={enabled:!0,removeScrollBar:!0,inert:!1};H.classNames={fullWidth:_,zeroRight:W};var ut=function(){if(typeof __webpack_nonce__<"u")return __webpack_nonce__};function st(){if(!document)return null;var e=document.createElement("style");e.type="text/css";var t=ut();return t&&e.setAttribute("nonce",t),e}function lt(e,t){e.styleSheet?e.styleSheet.cssText=t:e.appendChild(document.createTextNode(t))}function dt(e){var t=document.head||document.getElementsByTagName("head")[0];t.appendChild(e)}var ft=function(){var e=0,t=null;return{add:function(n){e==0&&(t=st())&&(lt(t,n),dt(t)),e++},remove:function(){e--,!e&&t&&(t.parentNode&&t.parentNode.removeChild(t),t=null)}}},vt=function(){var e=ft();return function(t,n){i.useEffect(function(){return e.add(t),function(){e.remove()}},[t&&n])}},Se=function(){var e=vt(),t=function(n){var r=n.styles,a=n.dynamic;return e(r,a),null};return t},ht={left:0,top:0,right:0,gap:0},q=function(e){return parseInt(e||"",10)||0},mt=function(e){var t=window.getComputedStyle(document.body),n=t[e==="padding"?"paddingLeft":"marginLeft"],r=t[e==="padding"?"paddingTop":"marginTop"],a=t[e==="padding"?"paddingRight":"marginRight"];return[q(n),q(r),q(a)]},pt=function(e){if(e===void 0&&(e="margin"),typeof window>"u")return ht;var t=mt(e),n=document.documentElement.clientWidth,r=window.innerWidth;return{left:t[0],top:t[1],right:t[2],gap:Math.max(0,r-n+t[2]-t[0])}},yt=Se(),D="data-scroll-locked",Et=function(e,t,n,r){var a=e.left,u=e.top,s=e.right,o=e.gap;return n===void 0&&(n="margin"),`
  .`.concat(Je,` {
   overflow: hidden `).concat(r,`;
   padding-right: `).concat(o,"px ").concat(r,`;
  }
  body[`).concat(D,`] {
    overflow: hidden `).concat(r,`;
    overscroll-behavior: contain;
    `).concat([t&&"position: relative ".concat(r,";"),n==="margin"&&`
    padding-left: `.concat(a,`px;
    padding-top: `).concat(u,`px;
    padding-right: `).concat(s,`px;
    margin-left:0;
    margin-top:0;
    margin-right: `).concat(o,"px ").concat(r,`;
    `),n==="padding"&&"padding-right: ".concat(o,"px ").concat(r,";")].filter(Boolean).join(""),`
  }
  
  .`).concat(W,` {
    right: `).concat(o,"px ").concat(r,`;
  }
  
  .`).concat(_,` {
    margin-right: `).concat(o,"px ").concat(r,`;
  }
  
  .`).concat(W," .").concat(W,` {
    right: 0 `).concat(r,`;
  }
  
  .`).concat(_," .").concat(_,` {
    margin-right: 0 `).concat(r,`;
  }
  
  body[`).concat(D,`] {
    `).concat(et,": ").concat(o,`px;
  }
`)},se=function(){var e=parseInt(document.body.getAttribute(D)||"0",10);return isFinite(e)?e:0},gt=function(){i.useEffect(function(){return document.body.setAttribute(D,(se()+1).toString()),function(){var e=se()-1;e<=0?document.body.removeAttribute(D):document.body.setAttribute(D,e.toString())}},[])},bt=function(e){var t=e.noRelative,n=e.noImportant,r=e.gapMode,a=r===void 0?"margin":r;gt();var u=i.useMemo(function(){return pt(a)},[a]);return i.createElement(yt,{styles:Et(u,!t,a,n?"":"!important")})},J=!1;if(typeof window<"u")try{var x=Object.defineProperty({},"passive",{get:function(){return J=!0,!0}});window.addEventListener("test",x,x),window.removeEventListener("test",x,x)}catch{J=!1}var A=J?{passive:!1}:!1,St=function(e){return e.tagName==="TEXTAREA"},we=function(e,t){if(!(e instanceof Element))return!1;var n=window.getComputedStyle(e);return n[t]!=="hidden"&&!(n.overflowY===n.overflowX&&!St(e)&&n[t]==="visible")},wt=function(e){return we(e,"overflowY")},Ct=function(e){return we(e,"overflowX")},le=function(e,t){var n=t.ownerDocument,r=t;do{typeof ShadowRoot<"u"&&r instanceof ShadowRoot&&(r=r.host);var a=Ce(e,r);if(a){var u=Pe(e,r),s=u[1],o=u[2];if(s>o)return!0}r=r.parentNode}while(r&&r!==n.body);return!1},Pt=function(e){var t=e.scrollTop,n=e.scrollHeight,r=e.clientHeight;return[t,n,r]},Ot=function(e){var t=e.scrollLeft,n=e.scrollWidth,r=e.clientWidth;return[t,n,r]},Ce=function(e,t){return e==="v"?wt(t):Ct(t)},Pe=function(e,t){return e==="v"?Pt(t):Ot(t)},Rt=function(e,t){return e==="h"&&t==="rtl"?-1:1},Lt=function(e,t,n,r,a){var u=Rt(e,window.getComputedStyle(t).direction),s=u*r,o=n.target,b=t.contains(o),d=!1,f=s>0,h=0,v=0;do{var p=Pe(e,o),C=p[0],c=p[1],l=p[2],m=c-l-u*C;(C||m)&&Ce(e,o)&&(h+=m,v+=C),o instanceof ShadowRoot?o=o.host:o=o.parentNode}while(!b&&o!==document.body||b&&(t.contains(o)||t===o));return(f&&(Math.abs(h)<1||!a)||!f&&(Math.abs(v)<1||!a))&&(d=!0),d},B=function(e){return"changedTouches"in e?[e.changedTouches[0].clientX,e.changedTouches[0].clientY]:[0,0]},de=function(e){return[e.deltaX,e.deltaY]},fe=function(e){return e&&"current"in e?e.current:e},Tt=function(e,t){return e[0]===t[0]&&e[1]===t[1]},At=function(e){return`
  .block-interactivity-`.concat(e,` {pointer-events: none;}
  .allow-interactivity-`).concat(e,` {pointer-events: all;}
`)},kt=0,k=[];function Dt(e){var t=i.useRef([]),n=i.useRef([0,0]),r=i.useRef(),a=i.useState(kt++)[0],u=i.useState(Se)[0],s=i.useRef(e);i.useEffect(function(){s.current=e},[e]),i.useEffect(function(){if(e.inert){document.body.classList.add("block-interactivity-".concat(a));var c=Qe([e.lockRef.current],(e.shards||[]).map(fe),!0).filter(Boolean);return c.forEach(function(l){return l.classList.add("allow-interactivity-".concat(a))}),function(){document.body.classList.remove("block-interactivity-".concat(a)),c.forEach(function(l){return l.classList.remove("allow-interactivity-".concat(a))})}}},[e.inert,e.lockRef.current,e.shards]);var o=i.useCallback(function(c,l){if("touches"in c&&c.touches.length===2||c.type==="wheel"&&c.ctrlKey)return!s.current.allowPinchZoom;var m=B(c),w=n.current,E="deltaX"in c?c.deltaX:w[0]-m[0],g="deltaY"in c?c.deltaY:w[1]-m[1],S,O=c.target,y=Math.abs(E)>Math.abs(g)?"h":"v";if("touches"in c&&y==="h"&&O.type==="range")return!1;var R=le(y,O);if(!R)return!0;if(R?S=y:(S=y==="v"?"h":"v",R=le(y,O)),!R)return!1;if(!r.current&&"changedTouches"in c&&(E||g)&&(r.current=S),!S)return!0;var F=r.current||S;return Lt(F,l,c,F==="h"?E:g,!0)},[]),b=i.useCallback(function(c){var l=c;if(!(!k.length||k[k.length-1]!==u)){var m="deltaY"in l?de(l):B(l),w=t.current.filter(function(S){return S.name===l.type&&(S.target===l.target||l.target===S.shadowParent)&&Tt(S.delta,m)})[0];if(w&&w.should){l.cancelable&&l.preventDefault();return}if(!w){var E=(s.current.shards||[]).map(fe).filter(Boolean).filter(function(S){return S.contains(l.target)}),g=E.length>0?o(l,E[0]):!s.current.noIsolation;g&&l.cancelable&&l.preventDefault()}}},[]),d=i.useCallback(function(c,l,m,w){var E={name:c,delta:l,target:m,should:w,shadowParent:Ft(m)};t.current.push(E),setTimeout(function(){t.current=t.current.filter(function(g){return g!==E})},1)},[]),f=i.useCallback(function(c){n.current=B(c),r.current=void 0},[]),h=i.useCallback(function(c){d(c.type,de(c),c.target,o(c,e.lockRef.current))},[]),v=i.useCallback(function(c){d(c.type,B(c),c.target,o(c,e.lockRef.current))},[]);i.useEffect(function(){return k.push(u),e.setCallbacks({onScrollCapture:h,onWheelCapture:h,onTouchMoveCapture:v}),document.addEventListener("wheel",b,A),document.addEventListener("touchmove",b,A),document.addEventListener("touchstart",f,A),function(){k=k.filter(function(c){return c!==u}),document.removeEventListener("wheel",b,A),document.removeEventListener("touchmove",b,A),document.removeEventListener("touchstart",f,A)}},[]);var p=e.removeScrollBar,C=e.inert;return i.createElement(i.Fragment,null,C?i.createElement(u,{styles:At(a)}):null,p?i.createElement(bt,{gapMode:e.gapMode}):null)}function Ft(e){for(var t=null;e!==null;)e instanceof ShadowRoot&&(t=e.host,e=e.host),e=e.parentNode;return t}const Nt=ct(be,Dt);var It=i.forwardRef(function(e,t){return i.createElement(H,P({},e,{ref:t,sideCar:Nt}))});It.classNames=H.classNames;export{Fe as D,We as F,Ge as P,It as R,Kt as a,jt as h,Ht as u};
