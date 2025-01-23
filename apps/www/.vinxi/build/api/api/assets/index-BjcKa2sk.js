import{H3Event as f,getRequestURL as y,getRequestWebStream as P,eventHandler as R}from"h3";import{AsyncLocalStorage as v}from"node:async_hooks";function S(t={}){let e,o=!1;const p=a=>{if(e&&e!==a)throw new Error("Context conflict")};let s;if(t.asyncContext){const a=t.AsyncLocalStorage||globalThis.AsyncLocalStorage;a?s=new a:console.warn("[unctx] `AsyncLocalStorage` is not provided.")}const r=()=>{if(s&&e===void 0){const a=s.getStore();if(a!==void 0)return a}return e};return{use:()=>{const a=r();if(a===void 0)throw new Error("Context is not available");return a},tryUse:()=>r(),set:(a,n)=>{n||p(a),e=a,o=!0},unset:()=>{e=void 0,o=!1},call:(a,n)=>{p(a),e=a;try{return s?s.run(a,n):n()}finally{o||(e=void 0)}},async callAsync(a,n){e=a;const u=()=>{e=a},i=()=>e===a?u:void 0;_.add(i);try{const h=s?s.run(a,n):n();return o||(e=void 0),await h}finally{_.delete(i)}}}}function T(t={}){const e={};return{get(o,p={}){return e[o]||(e[o]=S({...t,...p})),e[o]}}}const c=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof global<"u"?global:typeof window<"u"?window:{},d="__unctx__",A=c[d]||(c[d]=T()),G=(t,e={})=>A.get(t,e),w="__unctx_async_handlers__",_=c[w]||(c[w]=new Set);function E(t){let e;const o=g(t),p={duplex:"half",method:t.method,headers:t.headers};return t.node.req.body instanceof ArrayBuffer?new Request(o,{...p,body:t.node.req.body}):new Request(o,{...p,get body(){return e||(e=$(t),e)}})}function H(t){return t.web??={request:E(t),url:g(t)},t.web.request}function I(){return q()}const m=Symbol("$HTTPEvent");function C(t){return typeof t=="object"&&(t instanceof f||t?.[m]instanceof f||t?.__is_event__===!0)}function x(t){return function(...e){let o=e[0];if(C(o))e[0]=o instanceof f||o.__is_event__?o:o[m];else{if(!globalThis.app.config.server.experimental?.asyncContext)throw new Error("AsyncLocalStorage was not enabled. Use the `server.experimental.asyncContext: true` option in your app configuration to enable it. Or, pass the instance of HTTPEvent that you have as the first argument to the function.");if(o=I(),!o)throw new Error("No HTTPEvent found in AsyncLocalStorage. Make sure you are using the function within the server runtime.");e.unshift(o)}return t(...e)}}const g=x(y),$=x(P);function L(){return G("nitro-app",{asyncContext:!!globalThis.app.config.server.experimental?.asyncContext,AsyncLocalStorage:v})}function q(){return L().use().event}const W=[{path:"/__root",filePath:"/home/alex/Github/smartflow/apps/www/app/routes/__root.tsx"},{path:"/_authed",filePath:"/home/alex/Github/smartflow/apps/www/app/routes/_authed.tsx"},{path:"/_authed/_app",filePath:"/home/alex/Github/smartflow/apps/www/app/routes/_authed/_app.tsx"},{path:"/_public/_auth",filePath:"/home/alex/Github/smartflow/apps/www/app/routes/_public/_auth.tsx"},{path:"/_public",filePath:"/home/alex/Github/smartflow/apps/www/app/routes/_public/index.tsx"},{path:"/api/deploy",filePath:"/home/alex/Github/smartflow/apps/www/app/routes/api/deploy.ts",$APIRoute:{src:"app/routes/api/deploy.ts?pick=APIRoute",build:()=>import("../deploy.js"),import:()=>import("../deploy.js")}},{path:"/_authed/_app/_dashboard",filePath:"/home/alex/Github/smartflow/apps/www/app/routes/_authed/_app/_dashboard.tsx"},{path:"/_public/_auth/forgot-password",filePath:"/home/alex/Github/smartflow/apps/www/app/routes/_public/_auth/forgot-password.tsx"},{path:"/_public/_auth/reset-password",filePath:"/home/alex/Github/smartflow/apps/www/app/routes/_public/_auth/reset-password.tsx"},{path:"/_public/_auth/signin",filePath:"/home/alex/Github/smartflow/apps/www/app/routes/_public/_auth/signin.tsx"},{path:"/_public/_auth/signup",filePath:"/home/alex/Github/smartflow/apps/www/app/routes/_public/_auth/signup.tsx"},{path:"/_public/showcase/deployer",filePath:"/home/alex/Github/smartflow/apps/www/app/routes/_public/showcase/deployer.tsx"},{path:"/_public/showcase/dnd",filePath:"/home/alex/Github/smartflow/apps/www/app/routes/_public/showcase/dnd.tsx"},{path:"/_public/showcase/jsonlidity",filePath:"/home/alex/Github/smartflow/apps/www/app/routes/_public/showcase/jsonlidity.tsx"},{path:"/api/auth/*splat",filePath:"/home/alex/Github/smartflow/apps/www/app/routes/api/auth/$.ts",$APIRoute:{src:"app/routes/api/auth/$.ts?pick=APIRoute",build:()=>import("../_.js"),import:()=>import("../_.js")}},{path:"/_authed/_app/_dashboard/dashboard",filePath:"/home/alex/Github/smartflow/apps/www/app/routes/_authed/_app/_dashboard/dashboard.tsx"},{path:"/_authed/_app/_dashboard/logs",filePath:"/home/alex/Github/smartflow/apps/www/app/routes/_authed/_app/_dashboard/logs.tsx"},{path:"/_authed/_app/_dashboard/observability",filePath:"/home/alex/Github/smartflow/apps/www/app/routes/_authed/_app/_dashboard/observability.tsx"},{path:"/_authed/_app/_dashboard/settings",filePath:"/home/alex/Github/smartflow/apps/www/app/routes/_authed/_app/_dashboard/settings.tsx"},{path:"/_authed/_app/_dashboard/support",filePath:"/home/alex/Github/smartflow/apps/www/app/routes/_authed/_app/_dashboard/support.tsx"},{path:"/_authed/_app/_dashboard/usage",filePath:"/home/alex/Github/smartflow/apps/www/app/routes/_authed/_app/_dashboard/usage.tsx"}],B=["GET","POST","PUT","PATCH","DELETE","OPTIONS","HEAD"];function M(t){return R(async e=>{const o=H(e);return await t({request:o})})}const D=t=>e=>({path:t,methods:e});function N(t,e){const o=t.pathname.split("/").filter(Boolean),p=e.sort((s,r)=>{const a=s.routePath.split("/").filter(Boolean);return r.routePath.split("/").filter(Boolean).length-a.length}).filter(s=>{const r=s.routePath.split("/").filter(Boolean);return o.length>=r.length});for(const s of p){const r=s.routePath.split("/").filter(Boolean),a={};let n=!0;for(let u=0;u<r.length;u++){const i=r[u],h=o[u];if(i.startsWith("$"))if(i==="$"){const l=o.slice(u).join("/");if(l!=="")a["*"]=l,a._splat=l;else{n=!1;break}}else{const l=i.slice(1);a[l]=h}else if(i!==h){n=!1;break}}if(n)return{routePath:s.routePath,params:a,payload:s.payload}}}const b=W.filter(t=>t.$APIRoute);function U(t){const e=[];return t.forEach(o=>{const s=o.path.split("/").filter(Boolean).map(r=>r==="*splat"?"$":r.startsWith(":$")&&r.endsWith("?")?r.slice(1,-1):r).join("/");e.push({routePath:`/${s}`,payload:o})}),e}const j=async({request:t})=>{if(!b.length)return new Response("No routes found",{status:404});if(!B.includes(t.method))return new Response("Method not allowed",{status:405});const e=U(b),o=new URL(t.url,"http://localhost:3000"),p=N(o,e);if(!p)return new Response("Not found",{status:404});let s;try{s=await p.payload.$APIRoute.import().then(n=>n.APIRoute)}catch(n){return console.error("Error importing route file:",n),new Response("Internal server error",{status:500})}if(!s)return new Response("Internal server error",{status:500});const r=t.method,a=s.methods[r];return a?await a({request:t,params:p.params}):new Response("Method not allowed",{status:405})};export{D as a,M as c,j as d};
