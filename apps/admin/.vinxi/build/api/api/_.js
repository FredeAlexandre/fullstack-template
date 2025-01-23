import{a as X}from"./assets/index-C8oNvzK0.js";import Z from"fs";import ee from"path";import te from"os";import re from"crypto";import{drizzle as ne}from"drizzle-orm/node-postgres";import{betterAuth as oe}from"better-auth";import{drizzleAdapter as se}from"better-auth/adapters/drizzle";import{admin as ie}from"better-auth/plugins";import{PgUUID as ae,PgChar as ce,PgVarchar as le,pgTable as b,integer as ue,text as s,timestamp as g,boolean as j}from"drizzle-orm/pg-core";import{getTableColumns as de,is as _}from"drizzle-orm";import{MySqlVarChar as pe,MySqlVarBinary as fe,MySqlChar as me}from"drizzle-orm/mysql-core";import{SQLiteText as ge}from"drizzle-orm/sqlite-core";import{z as c}from"zod";import"h3";import"node:async_hooks";var R={},N={exports:{}};const ve="dotenv",Ee="16.4.7",he="Loads environment variables from .env file",Ne="lib/main.js",ye="lib/main.d.ts",_e={".":{types:"./lib/main.d.ts",require:"./lib/main.js",default:"./lib/main.js"},"./config":"./config.js","./config.js":"./config.js","./lib/env-options":"./lib/env-options.js","./lib/env-options.js":"./lib/env-options.js","./lib/cli-options":"./lib/cli-options.js","./lib/cli-options.js":"./lib/cli-options.js","./package.json":"./package.json"},Ae={"dts-check":"tsc --project tests/types/tsconfig.json",lint:"standard",pretest:"npm run lint && npm run dts-check",test:"tap run --allow-empty-coverage --disable-coverage --timeout=60000","test:coverage":"tap run --show-full-coverage --timeout=60000 --coverage-report=lcov",prerelease:"npm test",release:"standard-version"},Oe={type:"git",url:"git://github.com/motdotla/dotenv.git"},be="https://dotenvx.com",Te=["dotenv","env",".env","environment","variables","config","settings"],De="README.md",Ve="BSD-2-Clause",Ie={"@types/node":"^18.11.3",decache:"^4.6.2",sinon:"^14.0.1",standard:"^17.0.0","standard-version":"^9.5.0",tap:"^19.2.0",typescript:"^4.8.4"},we={node:">=12"},$e={fs:!1},xe={name:ve,version:Ee,description:he,main:Ne,types:ye,exports:_e,scripts:Ae,repository:Oe,funding:be,keywords:Te,readmeFilename:De,license:Ve,devDependencies:Ie,engines:we,browser:$e};var C;function ke(){if(C)return N.exports;C=1;const t=Z,i=ee,p=te,y=re,m=xe.version,h=/(?:^|^)\s*(?:export\s+)?([\w.-]+)(?:\s*=\s*?|:\s+?)(\s*'(?:\\'|[^'])*'|\s*"(?:\\"|[^"])*"|\s*`(?:\\`|[^`])*`|[^#\r\n]+)?\s*(?:#.*)?(?:$|$)/mg;function P(e){const n={};let o=e.toString();o=o.replace(/\r\n?/mg,`
`);let l;for(;(l=h.exec(o))!=null;){const f=l[1];let r=l[2]||"";r=r.trim();const a=r[0];r=r.replace(/^(['"`])([\s\S]*)\1$/mg,"$2"),a==='"'&&(r=r.replace(/\\n/g,`
`),r=r.replace(/\\r/g,"\r")),n[f]=r}return n}function U(e){const n=x(e),o=d.configDotenv({path:n});if(!o.parsed){const a=new Error(`MISSING_DATA: Cannot parse ${n} for an unknown reason`);throw a.code="MISSING_DATA",a}const l=$(e).split(","),f=l.length;let r;for(let a=0;a<f;a++)try{const u=l[a].trim(),v=M(o,u);r=d.decrypt(v.ciphertext,v.key);break}catch(u){if(a+1>=f)throw u}return d.parse(r)}function G(e){console.log(`[dotenv@${m}][INFO] ${e}`)}function B(e){console.log(`[dotenv@${m}][WARN] ${e}`)}function T(e){console.log(`[dotenv@${m}][DEBUG] ${e}`)}function $(e){return e&&e.DOTENV_KEY&&e.DOTENV_KEY.length>0?e.DOTENV_KEY:process.env.DOTENV_KEY&&process.env.DOTENV_KEY.length>0?process.env.DOTENV_KEY:""}function M(e,n){let o;try{o=new URL(n)}catch(u){if(u.code==="ERR_INVALID_URL"){const v=new Error("INVALID_DOTENV_KEY: Wrong format. Must be in valid uri format like dotenv://:key_1234@dotenvx.com/vault/.env.vault?environment=development");throw v.code="INVALID_DOTENV_KEY",v}throw u}const l=o.password;if(!l){const u=new Error("INVALID_DOTENV_KEY: Missing key part");throw u.code="INVALID_DOTENV_KEY",u}const f=o.searchParams.get("environment");if(!f){const u=new Error("INVALID_DOTENV_KEY: Missing environment part");throw u.code="INVALID_DOTENV_KEY",u}const r=`DOTENV_VAULT_${f.toUpperCase()}`,a=e.parsed[r];if(!a){const u=new Error(`NOT_FOUND_DOTENV_ENVIRONMENT: Cannot locate environment ${r} in your .env.vault file.`);throw u.code="NOT_FOUND_DOTENV_ENVIRONMENT",u}return{ciphertext:a,key:l}}function x(e){let n=null;if(e&&e.path&&e.path.length>0)if(Array.isArray(e.path))for(const o of e.path)t.existsSync(o)&&(n=o.endsWith(".vault")?o:`${o}.vault`);else n=e.path.endsWith(".vault")?e.path:`${e.path}.vault`;else n=i.resolve(process.cwd(),".env.vault");return t.existsSync(n)?n:null}function k(e){return e[0]==="~"?i.join(p.homedir(),e.slice(1)):e}function z(e){G("Loading env from encrypted .env.vault");const n=d._parseVault(e);let o=process.env;return e&&e.processEnv!=null&&(o=e.processEnv),d.populate(o,n,e),{parsed:n}}function W(e){const n=i.resolve(process.cwd(),".env");let o="utf8";const l=!!(e&&e.debug);e&&e.encoding?o=e.encoding:l&&T("No encoding is specified. UTF-8 is used by default");let f=[n];if(e&&e.path)if(!Array.isArray(e.path))f=[k(e.path)];else{f=[];for(const v of e.path)f.push(k(v))}let r;const a={};for(const v of f)try{const A=d.parse(t.readFileSync(v,{encoding:o}));d.populate(a,A,e)}catch(A){l&&T(`Failed to load ${v} ${A.message}`),r=A}let u=process.env;return e&&e.processEnv!=null&&(u=e.processEnv),d.populate(u,a,e),r?{parsed:a,error:r}:{parsed:a}}function J(e){if($(e).length===0)return d.configDotenv(e);const n=x(e);return n?d._configVault(e):(B(`You set DOTENV_KEY but you are missing a .env.vault file at ${n}. Did you forget to build it?`),d.configDotenv(e))}function Q(e,n){const o=Buffer.from(n.slice(-64),"hex");let l=Buffer.from(e,"base64");const f=l.subarray(0,12),r=l.subarray(-16);l=l.subarray(12,-16);try{const a=y.createDecipheriv("aes-256-gcm",o,f);return a.setAuthTag(r),`${a.update(l)}${a.final()}`}catch(a){const u=a instanceof RangeError,v=a.message==="Invalid key length",A=a.message==="Unsupported state or unable to authenticate data";if(u||v){const O=new Error("INVALID_DOTENV_KEY: It must be 64 characters long (or more)");throw O.code="INVALID_DOTENV_KEY",O}else if(A){const O=new Error("DECRYPTION_FAILED: Please check your DOTENV_KEY");throw O.code="DECRYPTION_FAILED",O}else throw a}}function H(e,n,o={}){const l=!!(o&&o.debug),f=!!(o&&o.override);if(typeof n!="object"){const r=new Error("OBJECT_REQUIRED: Please check the processEnv argument being passed to populate");throw r.code="OBJECT_REQUIRED",r}for(const r of Object.keys(n))Object.prototype.hasOwnProperty.call(e,r)?(f===!0&&(e[r]=n[r]),l&&T(f===!0?`"${r}" is already defined and WAS overwritten`:`"${r}" is already defined and was NOT overwritten`)):e[r]=n[r]}const d={configDotenv:W,_configVault:z,_parseVault:U,config:J,decrypt:Q,parse:P,populate:H};return N.exports.configDotenv=d.configDotenv,N.exports._configVault=d._configVault,N.exports._parseVault=d._parseVault,N.exports.config=d.config,N.exports.decrypt=d.decrypt,N.exports.parse=d.parse,N.exports.populate=d.populate,N.exports=d,N.exports}var V,K;function je(){if(K)return V;K=1;const t={};return process.env.DOTENV_CONFIG_ENCODING!=null&&(t.encoding=process.env.DOTENV_CONFIG_ENCODING),process.env.DOTENV_CONFIG_PATH!=null&&(t.path=process.env.DOTENV_CONFIG_PATH),process.env.DOTENV_CONFIG_DEBUG!=null&&(t.debug=process.env.DOTENV_CONFIG_DEBUG),process.env.DOTENV_CONFIG_OVERRIDE!=null&&(t.override=process.env.DOTENV_CONFIG_OVERRIDE),process.env.DOTENV_CONFIG_DOTENV_KEY!=null&&(t.DOTENV_KEY=process.env.DOTENV_CONFIG_DOTENV_KEY),V=t,V}var I,S;function Re(){if(S)return I;S=1;const t=/^dotenv_config_(encoding|path|debug|override|DOTENV_KEY)=(.+)$/;return I=function(p){return p.reduce(function(y,E){const m=E.match(t);return m&&(y[m[1]]=m[2]),y},{})},I}var q;function Ce(){return q||(q=1,function(){ke().config(Object.assign({},je(),Re()(process.argv)))}()),R}Ce();if(!process.env.DATABASE_URL)throw new Error("Missing DATABASE_URL is required");const Ke=ne(process.env.DATABASE_URL),Se=c.union([c.string(),c.number(),c.boolean(),c.null()]),w=c.lazy(()=>c.union([Se,c.array(w),c.record(w)]));function qe(t,i){const p=de(t),y=Object.entries(p);let E=Object.fromEntries(y.map(([m,h])=>[m,Y(h)]));i&&(E=Object.assign(E,Object.fromEntries(Object.entries(i).map(([m,h])=>[m,typeof h=="function"?h(E):h]))));for(const[m,h]of y)h.notNull?h.hasDefault&&(E[m]=E[m].optional()):E[m]=E[m].nullable().optional();return c.object(E)}function Y(t){let i;if(function(p){return"enumValues"in p&&Array.isArray(p.enumValues)&&p.enumValues.length>0}(t)&&(i=t.enumValues.length?c.enum(t.enumValues):c.string()),!i){if(_(t,ae))i=c.string().uuid();else if(t.dataType==="custom")i=c.any();else if(t.dataType==="json")i=w;else if(t.dataType==="array")i=c.array(Y(t.baseColumn));else if(t.dataType==="number")i=c.number();else if(t.dataType==="bigint")i=c.bigint();else if(t.dataType==="boolean")i=c.boolean();else if(t.dataType==="date")i=c.date();else if(t.dataType==="string"){let p=c.string();(_(t,ce)||_(t,le)||_(t,pe)||_(t,fe)||_(t,me)||_(t,ge))&&typeof t.length=="number"&&(p=p.max(t.length)),i=p}}return i||(i=c.any()),i}const L=b("project",{id:ue("id").primaryKey().generatedAlwaysAsIdentity(),name:s("name").notNull(),userId:s("userId").notNull().references(()=>D.id),description:s("description"),createdAt:g("createdAt").notNull().defaultNow(),updatedAt:g("updatedAt").notNull().defaultNow()}),Fe=qe(L,{name:c.string().max(256),userId:c.string(),description:c.string().max(1024).optional()}).omit({id:!0,createdAt:!0,updatedAt:!0}),D=b("user",{id:s("id").primaryKey(),name:s("name").notNull(),email:s("email").notNull().unique(),emailVerified:j("emailVerified").notNull(),image:s("image"),createdAt:g("createdAt").notNull(),updatedAt:g("updatedAt").notNull(),role:s("role"),banned:j("banned"),banReason:s("banReason"),banExpires:g("banExpires")}),Ye=b("session",{id:s("id").primaryKey(),expiresAt:g("expiresAt").notNull(),token:s("token").notNull().unique(),createdAt:g("createdAt").notNull(),updatedAt:g("updatedAt").notNull(),ipAddress:s("ipAddress"),userAgent:s("userAgent"),userId:s("userId").notNull().references(()=>D.id),impersonatedBy:s("impersonatedBy")}),Le=b("account",{id:s("id").primaryKey(),accountId:s("accountId").notNull(),providerId:s("providerId").notNull(),userId:s("userId").notNull().references(()=>D.id),accessToken:s("accessToken"),refreshToken:s("refreshToken"),idToken:s("idToken"),accessTokenExpiresAt:g("accessTokenExpiresAt"),refreshTokenExpiresAt:g("refreshTokenExpiresAt"),scope:s("scope"),password:s("password"),createdAt:g("createdAt").notNull(),updatedAt:g("updatedAt").notNull()}),Pe=b("verification",{id:s("id").primaryKey(),identifier:s("identifier").notNull(),value:s("value").notNull(),expiresAt:g("expiresAt").notNull(),createdAt:g("createdAt"),updatedAt:g("updatedAt")}),Ue=Object.freeze(Object.defineProperty({__proto__:null,CreateProjectSchema:Fe,account:Le,project:L,session:Ye,user:D,verification:Pe},Symbol.toStringTag,{value:"Module"})),F=oe({database:se(Ke,{provider:"pg",schema:Ue}),plugins:[ie()],emailAndPassword:{enabled:!0,sendResetPassword:async({user:t,url:i,token:p},y)=>{console.log(`[FAKE] Reseting password to ${t.email} with token ${p} go to this url ${i}`)}},emailVerification:{sendOnSignUp:!0,requireEmailVerification:!0,sendVerificationEmail:async({user:t,url:i,token:p},y)=>{console.log(`[FAKE] Sending email to ${t.email} with token ${p} go to this url ${i}`)}}}),it=X("/api/auth/$")({GET:({request:t})=>F.handler(t),POST:({request:t})=>F.handler(t)});export{it as APIRoute};
