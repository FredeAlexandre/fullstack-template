import process from 'node:process';globalThis._importMeta_=globalThis._importMeta_||{url:"file:///_entry.js",env:process.env};import * as http$1 from 'node:http';
import http__default$1, { Server as Server$1 } from 'node:http';
import * as node_https from 'node:https';
import node_https__default, { Server } from 'node:https';
import * as node_zlib from 'node:zlib';
import * as node_stream from 'node:stream';
import { PassThrough, Transform } from 'node:stream';
import * as node_buffer from 'node:buffer';
import * as node_util from 'node:util';
import * as node_url from 'node:url';
import { pathToFileURL, fileURLToPath } from 'node:url';
import * as node_net from 'node:net';
import * as node_fs$1 from 'node:fs';
import { promises, existsSync } from 'node:fs';
import * as node_path$1 from 'node:path';
import { dirname as dirname$1, resolve as resolve$1, join as join$1 } from 'node:path';
import invariant from 'vinxi/lib/invariant';
import { join, virtualId, handlerModule } from 'vinxi/lib/path';
import { AsyncLocalStorage } from 'node:async_hooks';
import { defaultTransformer, isRedirect as isRedirect$1, isNotFound, createRootRouteWithContext, Outlet, ScrollRestoration, createFileRoute, lazyRouteComponent, redirect, createMemoryHistory, useRouter, useMatch, rootRouteId, ErrorComponent, Link, useRouterState, isPlainArray, isPlainObject as isPlainObject$1, RouterProvider, ScriptOnce, encode as encode$1, createRouter as createRouter$2, defer as defer$1, pick, TSR_DEFERRED_PROMISE, createControlledPromise } from '@tanstack/react-router';
import se from 'fs';
import ae from 'path';
import ie from 'os';
import require$$1$2 from 'crypto';
import { drizzle } from 'drizzle-orm/node-postgres';
import { betterAuth } from 'better-auth';
import { drizzleAdapter } from 'better-auth/adapters/drizzle';
import { admin } from 'better-auth/plugins';
import { pgTable, integer, text, timestamp, boolean, PgUUID, PgChar, PgVarchar } from 'drizzle-orm/pg-core';
import { eq, getTableColumns, is } from 'drizzle-orm';
import { MySqlVarChar, MySqlVarBinary, MySqlChar } from 'drizzle-orm/mysql-core';
import { SQLiteText } from 'drizzle-orm/sqlite-core';
import { z as z$2 } from 'zod';
import { jsx, jsxs, Fragment } from 'react/jsx-runtime';
import * as V from 'react';
import { createElement, createContext as createContext$1 } from 'react';
import te from 'react-dom/server';
import { QueryClient } from '@tanstack/react-query';
import { routerWithQueryClient } from '@tanstack/react-router-with-query';
import { TanStackRouterDevtools } from '@tanstack/router-devtools';
import { Toaster } from 'sonner';
import { useLocalStorage } from 'usehooks-ts';

var commonjsGlobal$1 = typeof globalThis !== 'undefined' ? globalThis : "undefined" !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};

function getDefaultExportFromNamespaceIfNotNamed (n) {
	return n && Object.prototype.hasOwnProperty.call(n, 'default') && Object.keys(n).length === 1 ? n['default'] : n;
}

var node$1 = {};

const require$$3 = /*@__PURE__*/getDefaultExportFromNamespaceIfNotNamed(http$1);

const require$$4$1 = /*@__PURE__*/getDefaultExportFromNamespaceIfNotNamed(node_https);

const require$$5 = /*@__PURE__*/getDefaultExportFromNamespaceIfNotNamed(node_zlib);

const require$$6$1 = /*@__PURE__*/getDefaultExportFromNamespaceIfNotNamed(node_stream);

const require$$7 = /*@__PURE__*/getDefaultExportFromNamespaceIfNotNamed(node_buffer);

const require$$8 = /*@__PURE__*/getDefaultExportFromNamespaceIfNotNamed(node_util);

var nodeFetchNative_61758d11 = {};

var l$1=Object.defineProperty;var o=(e,t)=>l$1(e,"name",{value:t,configurable:!0});var commonjsGlobal=typeof globalThis<"u"?globalThis:typeof commonjsGlobal$1<"u"?commonjsGlobal$1:typeof self<"u"?self:{};function getDefaultExportFromCjs(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}o(getDefaultExportFromCjs,"getDefaultExportFromCjs"),nodeFetchNative_61758d11.commonjsGlobal=commonjsGlobal,nodeFetchNative_61758d11.getDefaultExportFromCjs=getDefaultExportFromCjs;

const require$$10 = /*@__PURE__*/getDefaultExportFromNamespaceIfNotNamed(node_url);

const require$$11 = /*@__PURE__*/getDefaultExportFromNamespaceIfNotNamed(node_net);

const require$$0$1 = /*@__PURE__*/getDefaultExportFromNamespaceIfNotNamed(node_fs$1);

const require$$1$1 = /*@__PURE__*/getDefaultExportFromNamespaceIfNotNamed(node_path$1);

var ms=Object.defineProperty;var u=(c,l)=>ms(c,"name",{value:l,configurable:!0});var Po$1=(c,l,d)=>{if(!l.has(c))throw TypeError("Cannot "+d)};var D$1=(c,l,d)=>(Po$1(c,l,"read from private field"),d?d.call(c):l.get(c)),ye=(c,l,d)=>{if(l.has(c))throw TypeError("Cannot add the same private member more than once");l instanceof WeakSet?l.add(c):l.set(c,d);},ne$1=(c,l,d,y)=>(Po$1(c,l,"write to private field"),l.set(c,d),d);var Pe$2,bt,ot$2,Zt,Ue$2,mt$1,yt$1,gt$1,oe,_t,Me$2,xe$1,St;Object.defineProperty(node$1,"__esModule",{value:!0});const http=require$$3,https=require$$4$1,zlib=require$$5,Stream=require$$6$1,require$$6=require$$7,require$$0=require$$8,_commonjsHelpers=nodeFetchNative_61758d11,require$$1=require$$10,require$$4=require$$11,node_fs=require$$0$1,node_path=require$$1$1;function _interopDefaultCompat(c){return c&&typeof c=="object"&&"default"in c?c.default:c}u(_interopDefaultCompat,"_interopDefaultCompat");const http__default=_interopDefaultCompat(http),https__default=_interopDefaultCompat(https),zlib__default=_interopDefaultCompat(zlib),Stream__default=_interopDefaultCompat(Stream);function dataUriToBuffer(c){if(!/^data:/i.test(c))throw new TypeError('`uri` does not appear to be a Data URI (must begin with "data:")');c=c.replace(/\r?\n/g,"");const l=c.indexOf(",");if(l===-1||l<=4)throw new TypeError("malformed data: URI");const d=c.substring(5,l).split(";");let y="",b=!1;const R=d[0]||"text/plain";let w=R;for(let F=1;F<d.length;F++)d[F]==="base64"?b=!0:d[F]&&(w+=`;${d[F]}`,d[F].indexOf("charset=")===0&&(y=d[F].substring(8)));!d[0]&&!y.length&&(w+=";charset=US-ASCII",y="US-ASCII");const v=b?"base64":"ascii",I=unescape(c.substring(l+1)),B=Buffer.from(I,v);return B.type=R,B.typeFull=w,B.charset=y,B}u(dataUriToBuffer,"dataUriToBuffer");var ponyfill_es2018={exports:{}};/**
 * @license
 * web-streams-polyfill v3.3.3
 * Copyright 2024 Mattias Buelens, Diwank Singh Tomer and other contributors.
 * This code is released under the MIT license.
 * SPDX-License-Identifier: MIT
 */var hasRequiredPonyfill_es2018;function requirePonyfill_es2018(){return hasRequiredPonyfill_es2018||(hasRequiredPonyfill_es2018=1,function(c,l){(function(d,y){y(l);})(_commonjsHelpers.commonjsGlobal,function(d){function y(){}u(y,"noop");function b(n){return typeof n=="object"&&n!==null||typeof n=="function"}u(b,"typeIsObject");const R=y;function w(n,o){try{Object.defineProperty(n,"name",{value:o,configurable:!0});}catch{}}u(w,"setFunctionName");const v=Promise,I=Promise.prototype.then,B=Promise.reject.bind(v);function F(n){return new v(n)}u(F,"newPromise");function k(n){return F(o=>o(n))}u(k,"promiseResolvedWith");function T(n){return B(n)}u(T,"promiseRejectedWith");function $(n,o,a){return I.call(n,o,a)}u($,"PerformPromiseThen");function E(n,o,a){$($(n,o,a),void 0,R);}u(E,"uponPromise");function K(n,o){E(n,o);}u(K,"uponFulfillment");function U(n,o){E(n,void 0,o);}u(U,"uponRejection");function N(n,o,a){return $(n,o,a)}u(N,"transformPromiseWith");function J(n){$(n,void 0,R);}u(J,"setPromiseIsHandledToTrue");let ge=u(n=>{if(typeof queueMicrotask=="function")ge=queueMicrotask;else {const o=k(void 0);ge=u(a=>$(o,a),"_queueMicrotask");}return ge(n)},"_queueMicrotask");function M(n,o,a){if(typeof n!="function")throw new TypeError("Argument is not a function");return Function.prototype.apply.call(n,o,a)}u(M,"reflectCall");function H(n,o,a){try{return k(M(n,o,a))}catch(p){return T(p)}}u(H,"promiseCall");const G=16384,Dr=class Dr{constructor(){this._cursor=0,this._size=0,this._front={_elements:[],_next:void 0},this._back=this._front,this._cursor=0,this._size=0;}get length(){return this._size}push(o){const a=this._back;let p=a;a._elements.length===G-1&&(p={_elements:[],_next:void 0}),a._elements.push(o),p!==a&&(this._back=p,a._next=p),++this._size;}shift(){const o=this._front;let a=o;const p=this._cursor;let g=p+1;const _=o._elements,S=_[p];return g===G&&(a=o._next,g=0),--this._size,this._cursor=g,o!==a&&(this._front=a),_[p]=void 0,S}forEach(o){let a=this._cursor,p=this._front,g=p._elements;for(;(a!==g.length||p._next!==void 0)&&!(a===g.length&&(p=p._next,g=p._elements,a=0,g.length===0));)o(g[a]),++a;}peek(){const o=this._front,a=this._cursor;return o._elements[a]}};u(Dr,"SimpleQueue");let Q=Dr;const wt=Symbol("[[AbortSteps]]"),un=Symbol("[[ErrorSteps]]"),er=Symbol("[[CancelSteps]]"),tr=Symbol("[[PullSteps]]"),rr=Symbol("[[ReleaseSteps]]");function ln(n,o){n._ownerReadableStream=o,o._reader=n,o._state==="readable"?or(n):o._state==="closed"?vo(n):fn(n,o._storedError);}u(ln,"ReadableStreamReaderGenericInitialize");function nr(n,o){const a=n._ownerReadableStream;return le(a,o)}u(nr,"ReadableStreamReaderGenericCancel");function _e(n){const o=n._ownerReadableStream;o._state==="readable"?ir(n,new TypeError("Reader was released and can no longer be used to monitor the stream's closedness")):Eo(n,new TypeError("Reader was released and can no longer be used to monitor the stream's closedness")),o._readableStreamController[rr](),o._reader=void 0,n._ownerReadableStream=void 0;}u(_e,"ReadableStreamReaderGenericRelease");function Rt(n){return new TypeError("Cannot "+n+" a stream using a released reader")}u(Rt,"readerLockException");function or(n){n._closedPromise=F((o,a)=>{n._closedPromise_resolve=o,n._closedPromise_reject=a;});}u(or,"defaultReaderClosedPromiseInitialize");function fn(n,o){or(n),ir(n,o);}u(fn,"defaultReaderClosedPromiseInitializeAsRejected");function vo(n){or(n),cn(n);}u(vo,"defaultReaderClosedPromiseInitializeAsResolved");function ir(n,o){n._closedPromise_reject!==void 0&&(J(n._closedPromise),n._closedPromise_reject(o),n._closedPromise_resolve=void 0,n._closedPromise_reject=void 0);}u(ir,"defaultReaderClosedPromiseReject");function Eo(n,o){fn(n,o);}u(Eo,"defaultReaderClosedPromiseResetToRejected");function cn(n){n._closedPromise_resolve!==void 0&&(n._closedPromise_resolve(void 0),n._closedPromise_resolve=void 0,n._closedPromise_reject=void 0);}u(cn,"defaultReaderClosedPromiseResolve");const dn=Number.isFinite||function(n){return typeof n=="number"&&isFinite(n)},Ao=Math.trunc||function(n){return n<0?Math.ceil(n):Math.floor(n)};function Bo(n){return typeof n=="object"||typeof n=="function"}u(Bo,"isDictionary");function ce(n,o){if(n!==void 0&&!Bo(n))throw new TypeError(`${o} is not an object.`)}u(ce,"assertDictionary");function ee(n,o){if(typeof n!="function")throw new TypeError(`${o} is not a function.`)}u(ee,"assertFunction");function qo(n){return typeof n=="object"&&n!==null||typeof n=="function"}u(qo,"isObject");function hn(n,o){if(!qo(n))throw new TypeError(`${o} is not an object.`)}u(hn,"assertObject");function Se(n,o,a){if(n===void 0)throw new TypeError(`Parameter ${o} is required in '${a}'.`)}u(Se,"assertRequiredArgument");function sr(n,o,a){if(n===void 0)throw new TypeError(`${o} is required in '${a}'.`)}u(sr,"assertRequiredField");function ar(n){return Number(n)}u(ar,"convertUnrestrictedDouble");function pn(n){return n===0?0:n}u(pn,"censorNegativeZero");function ko(n){return pn(Ao(n))}u(ko,"integerPart");function ur(n,o){const p=Number.MAX_SAFE_INTEGER;let g=Number(n);if(g=pn(g),!dn(g))throw new TypeError(`${o} is not a finite number`);if(g=ko(g),g<0||g>p)throw new TypeError(`${o} is outside the accepted range of 0 to ${p}, inclusive`);return !dn(g)||g===0?0:g}u(ur,"convertUnsignedLongLongWithEnforceRange");function lr(n,o){if(!qe(n))throw new TypeError(`${o} is not a ReadableStream.`)}u(lr,"assertReadableStream");function Ne(n){return new de(n)}u(Ne,"AcquireReadableStreamDefaultReader");function bn(n,o){n._reader._readRequests.push(o);}u(bn,"ReadableStreamAddReadRequest");function fr(n,o,a){const g=n._reader._readRequests.shift();a?g._closeSteps():g._chunkSteps(o);}u(fr,"ReadableStreamFulfillReadRequest");function Tt(n){return n._reader._readRequests.length}u(Tt,"ReadableStreamGetNumReadRequests");function mn(n){const o=n._reader;return !(o===void 0||!ve(o))}u(mn,"ReadableStreamHasDefaultReader");const Mr=class Mr{constructor(o){if(Se(o,1,"ReadableStreamDefaultReader"),lr(o,"First parameter"),ke(o))throw new TypeError("This stream has already been locked for exclusive reading by another reader");ln(this,o),this._readRequests=new Q;}get closed(){return ve(this)?this._closedPromise:T(Ct("closed"))}cancel(o=void 0){return ve(this)?this._ownerReadableStream===void 0?T(Rt("cancel")):nr(this,o):T(Ct("cancel"))}read(){if(!ve(this))return T(Ct("read"));if(this._ownerReadableStream===void 0)return T(Rt("read from"));let o,a;const p=F((_,S)=>{o=_,a=S;});return it(this,{_chunkSteps:_=>o({value:_,done:!1}),_closeSteps:()=>o({value:void 0,done:!0}),_errorSteps:_=>a(_)}),p}releaseLock(){if(!ve(this))throw Ct("releaseLock");this._ownerReadableStream!==void 0&&Wo(this);}};u(Mr,"ReadableStreamDefaultReader");let de=Mr;Object.defineProperties(de.prototype,{cancel:{enumerable:!0},read:{enumerable:!0},releaseLock:{enumerable:!0},closed:{enumerable:!0}}),w(de.prototype.cancel,"cancel"),w(de.prototype.read,"read"),w(de.prototype.releaseLock,"releaseLock"),typeof Symbol.toStringTag=="symbol"&&Object.defineProperty(de.prototype,Symbol.toStringTag,{value:"ReadableStreamDefaultReader",configurable:!0});function ve(n){return !b(n)||!Object.prototype.hasOwnProperty.call(n,"_readRequests")?!1:n instanceof de}u(ve,"IsReadableStreamDefaultReader");function it(n,o){const a=n._ownerReadableStream;a._disturbed=!0,a._state==="closed"?o._closeSteps():a._state==="errored"?o._errorSteps(a._storedError):a._readableStreamController[tr](o);}u(it,"ReadableStreamDefaultReaderRead");function Wo(n){_e(n);const o=new TypeError("Reader was released");yn(n,o);}u(Wo,"ReadableStreamDefaultReaderRelease");function yn(n,o){const a=n._readRequests;n._readRequests=new Q,a.forEach(p=>{p._errorSteps(o);});}u(yn,"ReadableStreamDefaultReaderErrorReadRequests");function Ct(n){return new TypeError(`ReadableStreamDefaultReader.prototype.${n} can only be used on a ReadableStreamDefaultReader`)}u(Ct,"defaultReaderBrandCheckException");const Oo=Object.getPrototypeOf(Object.getPrototypeOf(async function*(){}).prototype),xr=class xr{constructor(o,a){this._ongoingPromise=void 0,this._isFinished=!1,this._reader=o,this._preventCancel=a;}next(){const o=u(()=>this._nextSteps(),"nextSteps");return this._ongoingPromise=this._ongoingPromise?N(this._ongoingPromise,o,o):o(),this._ongoingPromise}return(o){const a=u(()=>this._returnSteps(o),"returnSteps");return this._ongoingPromise?N(this._ongoingPromise,a,a):a()}_nextSteps(){if(this._isFinished)return Promise.resolve({value:void 0,done:!0});const o=this._reader;let a,p;const g=F((S,C)=>{a=S,p=C;});return it(o,{_chunkSteps:S=>{this._ongoingPromise=void 0,ge(()=>a({value:S,done:!1}));},_closeSteps:()=>{this._ongoingPromise=void 0,this._isFinished=!0,_e(o),a({value:void 0,done:!0});},_errorSteps:S=>{this._ongoingPromise=void 0,this._isFinished=!0,_e(o),p(S);}}),g}_returnSteps(o){if(this._isFinished)return Promise.resolve({value:o,done:!0});this._isFinished=!0;const a=this._reader;if(!this._preventCancel){const p=nr(a,o);return _e(a),N(p,()=>({value:o,done:!0}))}return _e(a),k({value:o,done:!0})}};u(xr,"ReadableStreamAsyncIteratorImpl");let Pt=xr;const gn={next(){return _n(this)?this._asyncIteratorImpl.next():T(Sn("next"))},return(n){return _n(this)?this._asyncIteratorImpl.return(n):T(Sn("return"))}};Object.setPrototypeOf(gn,Oo);function zo(n,o){const a=Ne(n),p=new Pt(a,o),g=Object.create(gn);return g._asyncIteratorImpl=p,g}u(zo,"AcquireReadableStreamAsyncIterator");function _n(n){if(!b(n)||!Object.prototype.hasOwnProperty.call(n,"_asyncIteratorImpl"))return !1;try{return n._asyncIteratorImpl instanceof Pt}catch{return !1}}u(_n,"IsReadableStreamAsyncIterator");function Sn(n){return new TypeError(`ReadableStreamAsyncIterator.${n} can only be used on a ReadableSteamAsyncIterator`)}u(Sn,"streamAsyncIteratorBrandCheckException");const wn=Number.isNaN||function(n){return n!==n};var cr,dr,hr;function st(n){return n.slice()}u(st,"CreateArrayFromList");function Rn(n,o,a,p,g){new Uint8Array(n).set(new Uint8Array(a,p,g),o);}u(Rn,"CopyDataBlockBytes");let we=u(n=>(typeof n.transfer=="function"?we=u(o=>o.transfer(),"TransferArrayBuffer"):typeof structuredClone=="function"?we=u(o=>structuredClone(o,{transfer:[o]}),"TransferArrayBuffer"):we=u(o=>o,"TransferArrayBuffer"),we(n)),"TransferArrayBuffer"),Ee=u(n=>(typeof n.detached=="boolean"?Ee=u(o=>o.detached,"IsDetachedBuffer"):Ee=u(o=>o.byteLength===0,"IsDetachedBuffer"),Ee(n)),"IsDetachedBuffer");function Tn(n,o,a){if(n.slice)return n.slice(o,a);const p=a-o,g=new ArrayBuffer(p);return Rn(g,0,n,o,p),g}u(Tn,"ArrayBufferSlice");function vt(n,o){const a=n[o];if(a!=null){if(typeof a!="function")throw new TypeError(`${String(o)} is not a function`);return a}}u(vt,"GetMethod");function Fo(n){const o={[Symbol.iterator]:()=>n.iterator},a=async function*(){return yield*o}(),p=a.next;return {iterator:a,nextMethod:p,done:!1}}u(Fo,"CreateAsyncFromSyncIterator");const pr=(hr=(cr=Symbol.asyncIterator)!==null&&cr!==void 0?cr:(dr=Symbol.for)===null||dr===void 0?void 0:dr.call(Symbol,"Symbol.asyncIterator"))!==null&&hr!==void 0?hr:"@@asyncIterator";function Cn(n,o="sync",a){if(a===void 0)if(o==="async"){if(a=vt(n,pr),a===void 0){const _=vt(n,Symbol.iterator),S=Cn(n,"sync",_);return Fo(S)}}else a=vt(n,Symbol.iterator);if(a===void 0)throw new TypeError("The object is not iterable");const p=M(a,n,[]);if(!b(p))throw new TypeError("The iterator method must return an object");const g=p.next;return {iterator:p,nextMethod:g,done:!1}}u(Cn,"GetIterator");function Io(n){const o=M(n.nextMethod,n.iterator,[]);if(!b(o))throw new TypeError("The iterator.next() method must return an object");return o}u(Io,"IteratorNext");function jo(n){return !!n.done}u(jo,"IteratorComplete");function Lo(n){return n.value}u(Lo,"IteratorValue");function $o(n){return !(typeof n!="number"||wn(n)||n<0)}u($o,"IsNonNegativeNumber");function Pn(n){const o=Tn(n.buffer,n.byteOffset,n.byteOffset+n.byteLength);return new Uint8Array(o)}u(Pn,"CloneAsUint8Array");function br(n){const o=n._queue.shift();return n._queueTotalSize-=o.size,n._queueTotalSize<0&&(n._queueTotalSize=0),o.value}u(br,"DequeueValue");function mr(n,o,a){if(!$o(a)||a===1/0)throw new RangeError("Size must be a finite, non-NaN, non-negative number.");n._queue.push({value:o,size:a}),n._queueTotalSize+=a;}u(mr,"EnqueueValueWithSize");function Do(n){return n._queue.peek().value}u(Do,"PeekQueueValue");function Ae(n){n._queue=new Q,n._queueTotalSize=0;}u(Ae,"ResetQueue");function vn(n){return n===DataView}u(vn,"isDataViewConstructor");function Mo(n){return vn(n.constructor)}u(Mo,"isDataView");function xo(n){return vn(n)?1:n.BYTES_PER_ELEMENT}u(xo,"arrayBufferViewElementSize");const Ur=class Ur{constructor(){throw new TypeError("Illegal constructor")}get view(){if(!yr(this))throw Rr("view");return this._view}respond(o){if(!yr(this))throw Rr("respond");if(Se(o,1,"respond"),o=ur(o,"First parameter"),this._associatedReadableByteStreamController===void 0)throw new TypeError("This BYOB request has been invalidated");if(Ee(this._view.buffer))throw new TypeError("The BYOB request's buffer has been detached and so cannot be used as a response");qt(this._associatedReadableByteStreamController,o);}respondWithNewView(o){if(!yr(this))throw Rr("respondWithNewView");if(Se(o,1,"respondWithNewView"),!ArrayBuffer.isView(o))throw new TypeError("You can only respond with array buffer views");if(this._associatedReadableByteStreamController===void 0)throw new TypeError("This BYOB request has been invalidated");if(Ee(o.buffer))throw new TypeError("The given view's buffer has been detached and so cannot be used as a response");kt(this._associatedReadableByteStreamController,o);}};u(Ur,"ReadableStreamBYOBRequest");let Re=Ur;Object.defineProperties(Re.prototype,{respond:{enumerable:!0},respondWithNewView:{enumerable:!0},view:{enumerable:!0}}),w(Re.prototype.respond,"respond"),w(Re.prototype.respondWithNewView,"respondWithNewView"),typeof Symbol.toStringTag=="symbol"&&Object.defineProperty(Re.prototype,Symbol.toStringTag,{value:"ReadableStreamBYOBRequest",configurable:!0});const Nr=class Nr{constructor(){throw new TypeError("Illegal constructor")}get byobRequest(){if(!Oe(this))throw ut("byobRequest");return wr(this)}get desiredSize(){if(!Oe(this))throw ut("desiredSize");return In(this)}close(){if(!Oe(this))throw ut("close");if(this._closeRequested)throw new TypeError("The stream has already been closed; do not close it again!");const o=this._controlledReadableByteStream._state;if(o!=="readable")throw new TypeError(`The stream (in ${o} state) is not in the readable state and cannot be closed`);at(this);}enqueue(o){if(!Oe(this))throw ut("enqueue");if(Se(o,1,"enqueue"),!ArrayBuffer.isView(o))throw new TypeError("chunk must be an array buffer view");if(o.byteLength===0)throw new TypeError("chunk must have non-zero byteLength");if(o.buffer.byteLength===0)throw new TypeError("chunk's buffer must have non-zero byteLength");if(this._closeRequested)throw new TypeError("stream is closed or draining");const a=this._controlledReadableByteStream._state;if(a!=="readable")throw new TypeError(`The stream (in ${a} state) is not in the readable state and cannot be enqueued to`);Bt(this,o);}error(o=void 0){if(!Oe(this))throw ut("error");te(this,o);}[er](o){En(this),Ae(this);const a=this._cancelAlgorithm(o);return At(this),a}[tr](o){const a=this._controlledReadableByteStream;if(this._queueTotalSize>0){Fn(this,o);return}const p=this._autoAllocateChunkSize;if(p!==void 0){let g;try{g=new ArrayBuffer(p);}catch(S){o._errorSteps(S);return}const _={buffer:g,bufferByteLength:p,byteOffset:0,byteLength:p,bytesFilled:0,minimumFill:1,elementSize:1,viewConstructor:Uint8Array,readerType:"default"};this._pendingPullIntos.push(_);}bn(a,o),ze(this);}[rr](){if(this._pendingPullIntos.length>0){const o=this._pendingPullIntos.peek();o.readerType="none",this._pendingPullIntos=new Q,this._pendingPullIntos.push(o);}}};u(Nr,"ReadableByteStreamController");let ie=Nr;Object.defineProperties(ie.prototype,{close:{enumerable:!0},enqueue:{enumerable:!0},error:{enumerable:!0},byobRequest:{enumerable:!0},desiredSize:{enumerable:!0}}),w(ie.prototype.close,"close"),w(ie.prototype.enqueue,"enqueue"),w(ie.prototype.error,"error"),typeof Symbol.toStringTag=="symbol"&&Object.defineProperty(ie.prototype,Symbol.toStringTag,{value:"ReadableByteStreamController",configurable:!0});function Oe(n){return !b(n)||!Object.prototype.hasOwnProperty.call(n,"_controlledReadableByteStream")?!1:n instanceof ie}u(Oe,"IsReadableByteStreamController");function yr(n){return !b(n)||!Object.prototype.hasOwnProperty.call(n,"_associatedReadableByteStreamController")?!1:n instanceof Re}u(yr,"IsReadableStreamBYOBRequest");function ze(n){if(!Qo(n))return;if(n._pulling){n._pullAgain=!0;return}n._pulling=!0;const a=n._pullAlgorithm();E(a,()=>(n._pulling=!1,n._pullAgain&&(n._pullAgain=!1,ze(n)),null),p=>(te(n,p),null));}u(ze,"ReadableByteStreamControllerCallPullIfNeeded");function En(n){_r(n),n._pendingPullIntos=new Q;}u(En,"ReadableByteStreamControllerClearPendingPullIntos");function gr(n,o){let a=!1;n._state==="closed"&&(a=!0);const p=An(o);o.readerType==="default"?fr(n,p,a):Xo(n,p,a);}u(gr,"ReadableByteStreamControllerCommitPullIntoDescriptor");function An(n){const o=n.bytesFilled,a=n.elementSize;return new n.viewConstructor(n.buffer,n.byteOffset,o/a)}u(An,"ReadableByteStreamControllerConvertPullIntoDescriptor");function Et(n,o,a,p){n._queue.push({buffer:o,byteOffset:a,byteLength:p}),n._queueTotalSize+=p;}u(Et,"ReadableByteStreamControllerEnqueueChunkToQueue");function Bn(n,o,a,p){let g;try{g=Tn(o,a,a+p);}catch(_){throw te(n,_),_}Et(n,g,0,p);}u(Bn,"ReadableByteStreamControllerEnqueueClonedChunkToQueue");function qn(n,o){o.bytesFilled>0&&Bn(n,o.buffer,o.byteOffset,o.bytesFilled),He(n);}u(qn,"ReadableByteStreamControllerEnqueueDetachedPullIntoToQueue");function kn(n,o){const a=Math.min(n._queueTotalSize,o.byteLength-o.bytesFilled),p=o.bytesFilled+a;let g=a,_=!1;const S=p%o.elementSize,C=p-S;C>=o.minimumFill&&(g=C-o.bytesFilled,_=!0);const q=n._queue;for(;g>0;){const P=q.peek(),W=Math.min(g,P.byteLength),O=o.byteOffset+o.bytesFilled;Rn(o.buffer,O,P.buffer,P.byteOffset,W),P.byteLength===W?q.shift():(P.byteOffset+=W,P.byteLength-=W),n._queueTotalSize-=W,Wn(n,W,o),g-=W;}return _}u(kn,"ReadableByteStreamControllerFillPullIntoDescriptorFromQueue");function Wn(n,o,a){a.bytesFilled+=o;}u(Wn,"ReadableByteStreamControllerFillHeadPullIntoDescriptor");function On(n){n._queueTotalSize===0&&n._closeRequested?(At(n),pt(n._controlledReadableByteStream)):ze(n);}u(On,"ReadableByteStreamControllerHandleQueueDrain");function _r(n){n._byobRequest!==null&&(n._byobRequest._associatedReadableByteStreamController=void 0,n._byobRequest._view=null,n._byobRequest=null);}u(_r,"ReadableByteStreamControllerInvalidateBYOBRequest");function Sr(n){for(;n._pendingPullIntos.length>0;){if(n._queueTotalSize===0)return;const o=n._pendingPullIntos.peek();kn(n,o)&&(He(n),gr(n._controlledReadableByteStream,o));}}u(Sr,"ReadableByteStreamControllerProcessPullIntoDescriptorsUsingQueue");function Uo(n){const o=n._controlledReadableByteStream._reader;for(;o._readRequests.length>0;){if(n._queueTotalSize===0)return;const a=o._readRequests.shift();Fn(n,a);}}u(Uo,"ReadableByteStreamControllerProcessReadRequestsUsingQueue");function No(n,o,a,p){const g=n._controlledReadableByteStream,_=o.constructor,S=xo(_),{byteOffset:C,byteLength:q}=o,P=a*S;let W;try{W=we(o.buffer);}catch(j){p._errorSteps(j);return}const O={buffer:W,bufferByteLength:W.byteLength,byteOffset:C,byteLength:q,bytesFilled:0,minimumFill:P,elementSize:S,viewConstructor:_,readerType:"byob"};if(n._pendingPullIntos.length>0){n._pendingPullIntos.push(O),$n(g,p);return}if(g._state==="closed"){const j=new _(O.buffer,O.byteOffset,0);p._closeSteps(j);return}if(n._queueTotalSize>0){if(kn(n,O)){const j=An(O);On(n),p._chunkSteps(j);return}if(n._closeRequested){const j=new TypeError("Insufficient bytes to fill elements in the given buffer");te(n,j),p._errorSteps(j);return}}n._pendingPullIntos.push(O),$n(g,p),ze(n);}u(No,"ReadableByteStreamControllerPullInto");function Ho(n,o){o.readerType==="none"&&He(n);const a=n._controlledReadableByteStream;if(Tr(a))for(;Dn(a)>0;){const p=He(n);gr(a,p);}}u(Ho,"ReadableByteStreamControllerRespondInClosedState");function Vo(n,o,a){if(Wn(n,o,a),a.readerType==="none"){qn(n,a),Sr(n);return}if(a.bytesFilled<a.minimumFill)return;He(n);const p=a.bytesFilled%a.elementSize;if(p>0){const g=a.byteOffset+a.bytesFilled;Bn(n,a.buffer,g-p,p);}a.bytesFilled-=p,gr(n._controlledReadableByteStream,a),Sr(n);}u(Vo,"ReadableByteStreamControllerRespondInReadableState");function zn(n,o){const a=n._pendingPullIntos.peek();_r(n),n._controlledReadableByteStream._state==="closed"?Ho(n,a):Vo(n,o,a),ze(n);}u(zn,"ReadableByteStreamControllerRespondInternal");function He(n){return n._pendingPullIntos.shift()}u(He,"ReadableByteStreamControllerShiftPendingPullInto");function Qo(n){const o=n._controlledReadableByteStream;return o._state!=="readable"||n._closeRequested||!n._started?!1:!!(mn(o)&&Tt(o)>0||Tr(o)&&Dn(o)>0||In(n)>0)}u(Qo,"ReadableByteStreamControllerShouldCallPull");function At(n){n._pullAlgorithm=void 0,n._cancelAlgorithm=void 0;}u(At,"ReadableByteStreamControllerClearAlgorithms");function at(n){const o=n._controlledReadableByteStream;if(!(n._closeRequested||o._state!=="readable")){if(n._queueTotalSize>0){n._closeRequested=!0;return}if(n._pendingPullIntos.length>0){const a=n._pendingPullIntos.peek();if(a.bytesFilled%a.elementSize!==0){const p=new TypeError("Insufficient bytes to fill elements in the given buffer");throw te(n,p),p}}At(n),pt(o);}}u(at,"ReadableByteStreamControllerClose");function Bt(n,o){const a=n._controlledReadableByteStream;if(n._closeRequested||a._state!=="readable")return;const{buffer:p,byteOffset:g,byteLength:_}=o;if(Ee(p))throw new TypeError("chunk's buffer is detached and so cannot be enqueued");const S=we(p);if(n._pendingPullIntos.length>0){const C=n._pendingPullIntos.peek();if(Ee(C.buffer))throw new TypeError("The BYOB request's buffer has been detached and so cannot be filled with an enqueued chunk");_r(n),C.buffer=we(C.buffer),C.readerType==="none"&&qn(n,C);}if(mn(a))if(Uo(n),Tt(a)===0)Et(n,S,g,_);else {n._pendingPullIntos.length>0&&He(n);const C=new Uint8Array(S,g,_);fr(a,C,!1);}else Tr(a)?(Et(n,S,g,_),Sr(n)):Et(n,S,g,_);ze(n);}u(Bt,"ReadableByteStreamControllerEnqueue");function te(n,o){const a=n._controlledReadableByteStream;a._state==="readable"&&(En(n),Ae(n),At(n),fo(a,o));}u(te,"ReadableByteStreamControllerError");function Fn(n,o){const a=n._queue.shift();n._queueTotalSize-=a.byteLength,On(n);const p=new Uint8Array(a.buffer,a.byteOffset,a.byteLength);o._chunkSteps(p);}u(Fn,"ReadableByteStreamControllerFillReadRequestFromQueue");function wr(n){if(n._byobRequest===null&&n._pendingPullIntos.length>0){const o=n._pendingPullIntos.peek(),a=new Uint8Array(o.buffer,o.byteOffset+o.bytesFilled,o.byteLength-o.bytesFilled),p=Object.create(Re.prototype);Yo(p,n,a),n._byobRequest=p;}return n._byobRequest}u(wr,"ReadableByteStreamControllerGetBYOBRequest");function In(n){const o=n._controlledReadableByteStream._state;return o==="errored"?null:o==="closed"?0:n._strategyHWM-n._queueTotalSize}u(In,"ReadableByteStreamControllerGetDesiredSize");function qt(n,o){const a=n._pendingPullIntos.peek();if(n._controlledReadableByteStream._state==="closed"){if(o!==0)throw new TypeError("bytesWritten must be 0 when calling respond() on a closed stream")}else {if(o===0)throw new TypeError("bytesWritten must be greater than 0 when calling respond() on a readable stream");if(a.bytesFilled+o>a.byteLength)throw new RangeError("bytesWritten out of range")}a.buffer=we(a.buffer),zn(n,o);}u(qt,"ReadableByteStreamControllerRespond");function kt(n,o){const a=n._pendingPullIntos.peek();if(n._controlledReadableByteStream._state==="closed"){if(o.byteLength!==0)throw new TypeError("The view's length must be 0 when calling respondWithNewView() on a closed stream")}else if(o.byteLength===0)throw new TypeError("The view's length must be greater than 0 when calling respondWithNewView() on a readable stream");if(a.byteOffset+a.bytesFilled!==o.byteOffset)throw new RangeError("The region specified by view does not match byobRequest");if(a.bufferByteLength!==o.buffer.byteLength)throw new RangeError("The buffer of view has different capacity than byobRequest");if(a.bytesFilled+o.byteLength>a.byteLength)throw new RangeError("The region specified by view is larger than byobRequest");const g=o.byteLength;a.buffer=we(o.buffer),zn(n,g);}u(kt,"ReadableByteStreamControllerRespondWithNewView");function jn(n,o,a,p,g,_,S){o._controlledReadableByteStream=n,o._pullAgain=!1,o._pulling=!1,o._byobRequest=null,o._queue=o._queueTotalSize=void 0,Ae(o),o._closeRequested=!1,o._started=!1,o._strategyHWM=_,o._pullAlgorithm=p,o._cancelAlgorithm=g,o._autoAllocateChunkSize=S,o._pendingPullIntos=new Q,n._readableStreamController=o;const C=a();E(k(C),()=>(o._started=!0,ze(o),null),q=>(te(o,q),null));}u(jn,"SetUpReadableByteStreamController");function Go(n,o,a){const p=Object.create(ie.prototype);let g,_,S;o.start!==void 0?g=u(()=>o.start(p),"startAlgorithm"):g=u(()=>{},"startAlgorithm"),o.pull!==void 0?_=u(()=>o.pull(p),"pullAlgorithm"):_=u(()=>k(void 0),"pullAlgorithm"),o.cancel!==void 0?S=u(q=>o.cancel(q),"cancelAlgorithm"):S=u(()=>k(void 0),"cancelAlgorithm");const C=o.autoAllocateChunkSize;if(C===0)throw new TypeError("autoAllocateChunkSize must be greater than 0");jn(n,p,g,_,S,a,C);}u(Go,"SetUpReadableByteStreamControllerFromUnderlyingSource");function Yo(n,o,a){n._associatedReadableByteStreamController=o,n._view=a;}u(Yo,"SetUpReadableStreamBYOBRequest");function Rr(n){return new TypeError(`ReadableStreamBYOBRequest.prototype.${n} can only be used on a ReadableStreamBYOBRequest`)}u(Rr,"byobRequestBrandCheckException");function ut(n){return new TypeError(`ReadableByteStreamController.prototype.${n} can only be used on a ReadableByteStreamController`)}u(ut,"byteStreamControllerBrandCheckException");function Zo(n,o){ce(n,o);const a=n?.mode;return {mode:a===void 0?void 0:Ko(a,`${o} has member 'mode' that`)}}u(Zo,"convertReaderOptions");function Ko(n,o){if(n=`${n}`,n!=="byob")throw new TypeError(`${o} '${n}' is not a valid enumeration value for ReadableStreamReaderMode`);return n}u(Ko,"convertReadableStreamReaderMode");function Jo(n,o){var a;ce(n,o);const p=(a=n?.min)!==null&&a!==void 0?a:1;return {min:ur(p,`${o} has member 'min' that`)}}u(Jo,"convertByobReadOptions");function Ln(n){return new he(n)}u(Ln,"AcquireReadableStreamBYOBReader");function $n(n,o){n._reader._readIntoRequests.push(o);}u($n,"ReadableStreamAddReadIntoRequest");function Xo(n,o,a){const g=n._reader._readIntoRequests.shift();a?g._closeSteps(o):g._chunkSteps(o);}u(Xo,"ReadableStreamFulfillReadIntoRequest");function Dn(n){return n._reader._readIntoRequests.length}u(Dn,"ReadableStreamGetNumReadIntoRequests");function Tr(n){const o=n._reader;return !(o===void 0||!Fe(o))}u(Tr,"ReadableStreamHasBYOBReader");const Hr=class Hr{constructor(o){if(Se(o,1,"ReadableStreamBYOBReader"),lr(o,"First parameter"),ke(o))throw new TypeError("This stream has already been locked for exclusive reading by another reader");if(!Oe(o._readableStreamController))throw new TypeError("Cannot construct a ReadableStreamBYOBReader for a stream not constructed with a byte source");ln(this,o),this._readIntoRequests=new Q;}get closed(){return Fe(this)?this._closedPromise:T(Wt("closed"))}cancel(o=void 0){return Fe(this)?this._ownerReadableStream===void 0?T(Rt("cancel")):nr(this,o):T(Wt("cancel"))}read(o,a={}){if(!Fe(this))return T(Wt("read"));if(!ArrayBuffer.isView(o))return T(new TypeError("view must be an array buffer view"));if(o.byteLength===0)return T(new TypeError("view must have non-zero byteLength"));if(o.buffer.byteLength===0)return T(new TypeError("view's buffer must have non-zero byteLength"));if(Ee(o.buffer))return T(new TypeError("view's buffer has been detached"));let p;try{p=Jo(a,"options");}catch(P){return T(P)}const g=p.min;if(g===0)return T(new TypeError("options.min must be greater than 0"));if(Mo(o)){if(g>o.byteLength)return T(new RangeError("options.min must be less than or equal to view's byteLength"))}else if(g>o.length)return T(new RangeError("options.min must be less than or equal to view's length"));if(this._ownerReadableStream===void 0)return T(Rt("read from"));let _,S;const C=F((P,W)=>{_=P,S=W;});return Mn(this,o,g,{_chunkSteps:P=>_({value:P,done:!1}),_closeSteps:P=>_({value:P,done:!0}),_errorSteps:P=>S(P)}),C}releaseLock(){if(!Fe(this))throw Wt("releaseLock");this._ownerReadableStream!==void 0&&ei(this);}};u(Hr,"ReadableStreamBYOBReader");let he=Hr;Object.defineProperties(he.prototype,{cancel:{enumerable:!0},read:{enumerable:!0},releaseLock:{enumerable:!0},closed:{enumerable:!0}}),w(he.prototype.cancel,"cancel"),w(he.prototype.read,"read"),w(he.prototype.releaseLock,"releaseLock"),typeof Symbol.toStringTag=="symbol"&&Object.defineProperty(he.prototype,Symbol.toStringTag,{value:"ReadableStreamBYOBReader",configurable:!0});function Fe(n){return !b(n)||!Object.prototype.hasOwnProperty.call(n,"_readIntoRequests")?!1:n instanceof he}u(Fe,"IsReadableStreamBYOBReader");function Mn(n,o,a,p){const g=n._ownerReadableStream;g._disturbed=!0,g._state==="errored"?p._errorSteps(g._storedError):No(g._readableStreamController,o,a,p);}u(Mn,"ReadableStreamBYOBReaderRead");function ei(n){_e(n);const o=new TypeError("Reader was released");xn(n,o);}u(ei,"ReadableStreamBYOBReaderRelease");function xn(n,o){const a=n._readIntoRequests;n._readIntoRequests=new Q,a.forEach(p=>{p._errorSteps(o);});}u(xn,"ReadableStreamBYOBReaderErrorReadIntoRequests");function Wt(n){return new TypeError(`ReadableStreamBYOBReader.prototype.${n} can only be used on a ReadableStreamBYOBReader`)}u(Wt,"byobReaderBrandCheckException");function lt(n,o){const{highWaterMark:a}=n;if(a===void 0)return o;if(wn(a)||a<0)throw new RangeError("Invalid highWaterMark");return a}u(lt,"ExtractHighWaterMark");function Ot(n){const{size:o}=n;return o||(()=>1)}u(Ot,"ExtractSizeAlgorithm");function zt(n,o){ce(n,o);const a=n?.highWaterMark,p=n?.size;return {highWaterMark:a===void 0?void 0:ar(a),size:p===void 0?void 0:ti(p,`${o} has member 'size' that`)}}u(zt,"convertQueuingStrategy");function ti(n,o){return ee(n,o),a=>ar(n(a))}u(ti,"convertQueuingStrategySize");function ri(n,o){ce(n,o);const a=n?.abort,p=n?.close,g=n?.start,_=n?.type,S=n?.write;return {abort:a===void 0?void 0:ni(a,n,`${o} has member 'abort' that`),close:p===void 0?void 0:oi(p,n,`${o} has member 'close' that`),start:g===void 0?void 0:ii(g,n,`${o} has member 'start' that`),write:S===void 0?void 0:si(S,n,`${o} has member 'write' that`),type:_}}u(ri,"convertUnderlyingSink");function ni(n,o,a){return ee(n,a),p=>H(n,o,[p])}u(ni,"convertUnderlyingSinkAbortCallback");function oi(n,o,a){return ee(n,a),()=>H(n,o,[])}u(oi,"convertUnderlyingSinkCloseCallback");function ii(n,o,a){return ee(n,a),p=>M(n,o,[p])}u(ii,"convertUnderlyingSinkStartCallback");function si(n,o,a){return ee(n,a),(p,g)=>H(n,o,[p,g])}u(si,"convertUnderlyingSinkWriteCallback");function Un(n,o){if(!Ve(n))throw new TypeError(`${o} is not a WritableStream.`)}u(Un,"assertWritableStream");function ai(n){if(typeof n!="object"||n===null)return !1;try{return typeof n.aborted=="boolean"}catch{return !1}}u(ai,"isAbortSignal");const ui=typeof AbortController=="function";function li(){if(ui)return new AbortController}u(li,"createAbortController");const Vr=class Vr{constructor(o={},a={}){o===void 0?o=null:hn(o,"First parameter");const p=zt(a,"Second parameter"),g=ri(o,"First parameter");if(Hn(this),g.type!==void 0)throw new RangeError("Invalid type is specified");const S=Ot(p),C=lt(p,1);Ti(this,g,C,S);}get locked(){if(!Ve(this))throw $t("locked");return Qe(this)}abort(o=void 0){return Ve(this)?Qe(this)?T(new TypeError("Cannot abort a stream that already has a writer")):Ft(this,o):T($t("abort"))}close(){return Ve(this)?Qe(this)?T(new TypeError("Cannot close a stream that already has a writer")):be(this)?T(new TypeError("Cannot close an already-closing stream")):Vn(this):T($t("close"))}getWriter(){if(!Ve(this))throw $t("getWriter");return Nn(this)}};u(Vr,"WritableStream");let pe=Vr;Object.defineProperties(pe.prototype,{abort:{enumerable:!0},close:{enumerable:!0},getWriter:{enumerable:!0},locked:{enumerable:!0}}),w(pe.prototype.abort,"abort"),w(pe.prototype.close,"close"),w(pe.prototype.getWriter,"getWriter"),typeof Symbol.toStringTag=="symbol"&&Object.defineProperty(pe.prototype,Symbol.toStringTag,{value:"WritableStream",configurable:!0});function Nn(n){return new se(n)}u(Nn,"AcquireWritableStreamDefaultWriter");function fi(n,o,a,p,g=1,_=()=>1){const S=Object.create(pe.prototype);Hn(S);const C=Object.create(Be.prototype);return Jn(S,C,n,o,a,p,g,_),S}u(fi,"CreateWritableStream");function Hn(n){n._state="writable",n._storedError=void 0,n._writer=void 0,n._writableStreamController=void 0,n._writeRequests=new Q,n._inFlightWriteRequest=void 0,n._closeRequest=void 0,n._inFlightCloseRequest=void 0,n._pendingAbortRequest=void 0,n._backpressure=!1;}u(Hn,"InitializeWritableStream");function Ve(n){return !b(n)||!Object.prototype.hasOwnProperty.call(n,"_writableStreamController")?!1:n instanceof pe}u(Ve,"IsWritableStream");function Qe(n){return n._writer!==void 0}u(Qe,"IsWritableStreamLocked");function Ft(n,o){var a;if(n._state==="closed"||n._state==="errored")return k(void 0);n._writableStreamController._abortReason=o,(a=n._writableStreamController._abortController)===null||a===void 0||a.abort(o);const p=n._state;if(p==="closed"||p==="errored")return k(void 0);if(n._pendingAbortRequest!==void 0)return n._pendingAbortRequest._promise;let g=!1;p==="erroring"&&(g=!0,o=void 0);const _=F((S,C)=>{n._pendingAbortRequest={_promise:void 0,_resolve:S,_reject:C,_reason:o,_wasAlreadyErroring:g};});return n._pendingAbortRequest._promise=_,g||Pr(n,o),_}u(Ft,"WritableStreamAbort");function Vn(n){const o=n._state;if(o==="closed"||o==="errored")return T(new TypeError(`The stream (in ${o} state) is not in the writable state and cannot be closed`));const a=F((g,_)=>{const S={_resolve:g,_reject:_};n._closeRequest=S;}),p=n._writer;return p!==void 0&&n._backpressure&&o==="writable"&&Or(p),Ci(n._writableStreamController),a}u(Vn,"WritableStreamClose");function ci(n){return F((a,p)=>{const g={_resolve:a,_reject:p};n._writeRequests.push(g);})}u(ci,"WritableStreamAddWriteRequest");function Cr(n,o){if(n._state==="writable"){Pr(n,o);return}vr(n);}u(Cr,"WritableStreamDealWithRejection");function Pr(n,o){const a=n._writableStreamController;n._state="erroring",n._storedError=o;const p=n._writer;p!==void 0&&Gn(p,o),!mi(n)&&a._started&&vr(n);}u(Pr,"WritableStreamStartErroring");function vr(n){n._state="errored",n._writableStreamController[un]();const o=n._storedError;if(n._writeRequests.forEach(g=>{g._reject(o);}),n._writeRequests=new Q,n._pendingAbortRequest===void 0){It(n);return}const a=n._pendingAbortRequest;if(n._pendingAbortRequest=void 0,a._wasAlreadyErroring){a._reject(o),It(n);return}const p=n._writableStreamController[wt](a._reason);E(p,()=>(a._resolve(),It(n),null),g=>(a._reject(g),It(n),null));}u(vr,"WritableStreamFinishErroring");function di(n){n._inFlightWriteRequest._resolve(void 0),n._inFlightWriteRequest=void 0;}u(di,"WritableStreamFinishInFlightWrite");function hi(n,o){n._inFlightWriteRequest._reject(o),n._inFlightWriteRequest=void 0,Cr(n,o);}u(hi,"WritableStreamFinishInFlightWriteWithError");function pi(n){n._inFlightCloseRequest._resolve(void 0),n._inFlightCloseRequest=void 0,n._state==="erroring"&&(n._storedError=void 0,n._pendingAbortRequest!==void 0&&(n._pendingAbortRequest._resolve(),n._pendingAbortRequest=void 0)),n._state="closed";const a=n._writer;a!==void 0&&ro(a);}u(pi,"WritableStreamFinishInFlightClose");function bi(n,o){n._inFlightCloseRequest._reject(o),n._inFlightCloseRequest=void 0,n._pendingAbortRequest!==void 0&&(n._pendingAbortRequest._reject(o),n._pendingAbortRequest=void 0),Cr(n,o);}u(bi,"WritableStreamFinishInFlightCloseWithError");function be(n){return !(n._closeRequest===void 0&&n._inFlightCloseRequest===void 0)}u(be,"WritableStreamCloseQueuedOrInFlight");function mi(n){return !(n._inFlightWriteRequest===void 0&&n._inFlightCloseRequest===void 0)}u(mi,"WritableStreamHasOperationMarkedInFlight");function yi(n){n._inFlightCloseRequest=n._closeRequest,n._closeRequest=void 0;}u(yi,"WritableStreamMarkCloseRequestInFlight");function gi(n){n._inFlightWriteRequest=n._writeRequests.shift();}u(gi,"WritableStreamMarkFirstWriteRequestInFlight");function It(n){n._closeRequest!==void 0&&(n._closeRequest._reject(n._storedError),n._closeRequest=void 0);const o=n._writer;o!==void 0&&kr(o,n._storedError);}u(It,"WritableStreamRejectCloseAndClosedPromiseIfNeeded");function Er(n,o){const a=n._writer;a!==void 0&&o!==n._backpressure&&(o?ki(a):Or(a)),n._backpressure=o;}u(Er,"WritableStreamUpdateBackpressure");const Qr=class Qr{constructor(o){if(Se(o,1,"WritableStreamDefaultWriter"),Un(o,"First parameter"),Qe(o))throw new TypeError("This stream has already been locked for exclusive writing by another writer");this._ownerWritableStream=o,o._writer=this;const a=o._state;if(a==="writable")!be(o)&&o._backpressure?Mt(this):no(this),Dt(this);else if(a==="erroring")Wr(this,o._storedError),Dt(this);else if(a==="closed")no(this),Bi(this);else {const p=o._storedError;Wr(this,p),to(this,p);}}get closed(){return Ie(this)?this._closedPromise:T(je("closed"))}get desiredSize(){if(!Ie(this))throw je("desiredSize");if(this._ownerWritableStream===void 0)throw ct("desiredSize");return Ri(this)}get ready(){return Ie(this)?this._readyPromise:T(je("ready"))}abort(o=void 0){return Ie(this)?this._ownerWritableStream===void 0?T(ct("abort")):_i(this,o):T(je("abort"))}close(){if(!Ie(this))return T(je("close"));const o=this._ownerWritableStream;return o===void 0?T(ct("close")):be(o)?T(new TypeError("Cannot close an already-closing stream")):Qn(this)}releaseLock(){if(!Ie(this))throw je("releaseLock");this._ownerWritableStream!==void 0&&Yn(this);}write(o=void 0){return Ie(this)?this._ownerWritableStream===void 0?T(ct("write to")):Zn(this,o):T(je("write"))}};u(Qr,"WritableStreamDefaultWriter");let se=Qr;Object.defineProperties(se.prototype,{abort:{enumerable:!0},close:{enumerable:!0},releaseLock:{enumerable:!0},write:{enumerable:!0},closed:{enumerable:!0},desiredSize:{enumerable:!0},ready:{enumerable:!0}}),w(se.prototype.abort,"abort"),w(se.prototype.close,"close"),w(se.prototype.releaseLock,"releaseLock"),w(se.prototype.write,"write"),typeof Symbol.toStringTag=="symbol"&&Object.defineProperty(se.prototype,Symbol.toStringTag,{value:"WritableStreamDefaultWriter",configurable:!0});function Ie(n){return !b(n)||!Object.prototype.hasOwnProperty.call(n,"_ownerWritableStream")?!1:n instanceof se}u(Ie,"IsWritableStreamDefaultWriter");function _i(n,o){const a=n._ownerWritableStream;return Ft(a,o)}u(_i,"WritableStreamDefaultWriterAbort");function Qn(n){const o=n._ownerWritableStream;return Vn(o)}u(Qn,"WritableStreamDefaultWriterClose");function Si(n){const o=n._ownerWritableStream,a=o._state;return be(o)||a==="closed"?k(void 0):a==="errored"?T(o._storedError):Qn(n)}u(Si,"WritableStreamDefaultWriterCloseWithErrorPropagation");function wi(n,o){n._closedPromiseState==="pending"?kr(n,o):qi(n,o);}u(wi,"WritableStreamDefaultWriterEnsureClosedPromiseRejected");function Gn(n,o){n._readyPromiseState==="pending"?oo(n,o):Wi(n,o);}u(Gn,"WritableStreamDefaultWriterEnsureReadyPromiseRejected");function Ri(n){const o=n._ownerWritableStream,a=o._state;return a==="errored"||a==="erroring"?null:a==="closed"?0:Xn(o._writableStreamController)}u(Ri,"WritableStreamDefaultWriterGetDesiredSize");function Yn(n){const o=n._ownerWritableStream,a=new TypeError("Writer was released and can no longer be used to monitor the stream's closedness");Gn(n,a),wi(n,a),o._writer=void 0,n._ownerWritableStream=void 0;}u(Yn,"WritableStreamDefaultWriterRelease");function Zn(n,o){const a=n._ownerWritableStream,p=a._writableStreamController,g=Pi(p,o);if(a!==n._ownerWritableStream)return T(ct("write to"));const _=a._state;if(_==="errored")return T(a._storedError);if(be(a)||_==="closed")return T(new TypeError("The stream is closing or closed and cannot be written to"));if(_==="erroring")return T(a._storedError);const S=ci(a);return vi(p,o,g),S}u(Zn,"WritableStreamDefaultWriterWrite");const Kn={},Gr=class Gr{constructor(){throw new TypeError("Illegal constructor")}get abortReason(){if(!Ar(this))throw qr("abortReason");return this._abortReason}get signal(){if(!Ar(this))throw qr("signal");if(this._abortController===void 0)throw new TypeError("WritableStreamDefaultController.prototype.signal is not supported");return this._abortController.signal}error(o=void 0){if(!Ar(this))throw qr("error");this._controlledWritableStream._state==="writable"&&eo(this,o);}[wt](o){const a=this._abortAlgorithm(o);return jt(this),a}[un](){Ae(this);}};u(Gr,"WritableStreamDefaultController");let Be=Gr;Object.defineProperties(Be.prototype,{abortReason:{enumerable:!0},signal:{enumerable:!0},error:{enumerable:!0}}),typeof Symbol.toStringTag=="symbol"&&Object.defineProperty(Be.prototype,Symbol.toStringTag,{value:"WritableStreamDefaultController",configurable:!0});function Ar(n){return !b(n)||!Object.prototype.hasOwnProperty.call(n,"_controlledWritableStream")?!1:n instanceof Be}u(Ar,"IsWritableStreamDefaultController");function Jn(n,o,a,p,g,_,S,C){o._controlledWritableStream=n,n._writableStreamController=o,o._queue=void 0,o._queueTotalSize=void 0,Ae(o),o._abortReason=void 0,o._abortController=li(),o._started=!1,o._strategySizeAlgorithm=C,o._strategyHWM=S,o._writeAlgorithm=p,o._closeAlgorithm=g,o._abortAlgorithm=_;const q=Br(o);Er(n,q);const P=a(),W=k(P);E(W,()=>(o._started=!0,Lt(o),null),O=>(o._started=!0,Cr(n,O),null));}u(Jn,"SetUpWritableStreamDefaultController");function Ti(n,o,a,p){const g=Object.create(Be.prototype);let _,S,C,q;o.start!==void 0?_=u(()=>o.start(g),"startAlgorithm"):_=u(()=>{},"startAlgorithm"),o.write!==void 0?S=u(P=>o.write(P,g),"writeAlgorithm"):S=u(()=>k(void 0),"writeAlgorithm"),o.close!==void 0?C=u(()=>o.close(),"closeAlgorithm"):C=u(()=>k(void 0),"closeAlgorithm"),o.abort!==void 0?q=u(P=>o.abort(P),"abortAlgorithm"):q=u(()=>k(void 0),"abortAlgorithm"),Jn(n,g,_,S,C,q,a,p);}u(Ti,"SetUpWritableStreamDefaultControllerFromUnderlyingSink");function jt(n){n._writeAlgorithm=void 0,n._closeAlgorithm=void 0,n._abortAlgorithm=void 0,n._strategySizeAlgorithm=void 0;}u(jt,"WritableStreamDefaultControllerClearAlgorithms");function Ci(n){mr(n,Kn,0),Lt(n);}u(Ci,"WritableStreamDefaultControllerClose");function Pi(n,o){try{return n._strategySizeAlgorithm(o)}catch(a){return ft(n,a),1}}u(Pi,"WritableStreamDefaultControllerGetChunkSize");function Xn(n){return n._strategyHWM-n._queueTotalSize}u(Xn,"WritableStreamDefaultControllerGetDesiredSize");function vi(n,o,a){try{mr(n,o,a);}catch(g){ft(n,g);return}const p=n._controlledWritableStream;if(!be(p)&&p._state==="writable"){const g=Br(n);Er(p,g);}Lt(n);}u(vi,"WritableStreamDefaultControllerWrite");function Lt(n){const o=n._controlledWritableStream;if(!n._started||o._inFlightWriteRequest!==void 0)return;if(o._state==="erroring"){vr(o);return}if(n._queue.length===0)return;const p=Do(n);p===Kn?Ei(n):Ai(n,p);}u(Lt,"WritableStreamDefaultControllerAdvanceQueueIfNeeded");function ft(n,o){n._controlledWritableStream._state==="writable"&&eo(n,o);}u(ft,"WritableStreamDefaultControllerErrorIfNeeded");function Ei(n){const o=n._controlledWritableStream;yi(o),br(n);const a=n._closeAlgorithm();jt(n),E(a,()=>(pi(o),null),p=>(bi(o,p),null));}u(Ei,"WritableStreamDefaultControllerProcessClose");function Ai(n,o){const a=n._controlledWritableStream;gi(a);const p=n._writeAlgorithm(o);E(p,()=>{di(a);const g=a._state;if(br(n),!be(a)&&g==="writable"){const _=Br(n);Er(a,_);}return Lt(n),null},g=>(a._state==="writable"&&jt(n),hi(a,g),null));}u(Ai,"WritableStreamDefaultControllerProcessWrite");function Br(n){return Xn(n)<=0}u(Br,"WritableStreamDefaultControllerGetBackpressure");function eo(n,o){const a=n._controlledWritableStream;jt(n),Pr(a,o);}u(eo,"WritableStreamDefaultControllerError");function $t(n){return new TypeError(`WritableStream.prototype.${n} can only be used on a WritableStream`)}u($t,"streamBrandCheckException$2");function qr(n){return new TypeError(`WritableStreamDefaultController.prototype.${n} can only be used on a WritableStreamDefaultController`)}u(qr,"defaultControllerBrandCheckException$2");function je(n){return new TypeError(`WritableStreamDefaultWriter.prototype.${n} can only be used on a WritableStreamDefaultWriter`)}u(je,"defaultWriterBrandCheckException");function ct(n){return new TypeError("Cannot "+n+" a stream using a released writer")}u(ct,"defaultWriterLockException");function Dt(n){n._closedPromise=F((o,a)=>{n._closedPromise_resolve=o,n._closedPromise_reject=a,n._closedPromiseState="pending";});}u(Dt,"defaultWriterClosedPromiseInitialize");function to(n,o){Dt(n),kr(n,o);}u(to,"defaultWriterClosedPromiseInitializeAsRejected");function Bi(n){Dt(n),ro(n);}u(Bi,"defaultWriterClosedPromiseInitializeAsResolved");function kr(n,o){n._closedPromise_reject!==void 0&&(J(n._closedPromise),n._closedPromise_reject(o),n._closedPromise_resolve=void 0,n._closedPromise_reject=void 0,n._closedPromiseState="rejected");}u(kr,"defaultWriterClosedPromiseReject");function qi(n,o){to(n,o);}u(qi,"defaultWriterClosedPromiseResetToRejected");function ro(n){n._closedPromise_resolve!==void 0&&(n._closedPromise_resolve(void 0),n._closedPromise_resolve=void 0,n._closedPromise_reject=void 0,n._closedPromiseState="resolved");}u(ro,"defaultWriterClosedPromiseResolve");function Mt(n){n._readyPromise=F((o,a)=>{n._readyPromise_resolve=o,n._readyPromise_reject=a;}),n._readyPromiseState="pending";}u(Mt,"defaultWriterReadyPromiseInitialize");function Wr(n,o){Mt(n),oo(n,o);}u(Wr,"defaultWriterReadyPromiseInitializeAsRejected");function no(n){Mt(n),Or(n);}u(no,"defaultWriterReadyPromiseInitializeAsResolved");function oo(n,o){n._readyPromise_reject!==void 0&&(J(n._readyPromise),n._readyPromise_reject(o),n._readyPromise_resolve=void 0,n._readyPromise_reject=void 0,n._readyPromiseState="rejected");}u(oo,"defaultWriterReadyPromiseReject");function ki(n){Mt(n);}u(ki,"defaultWriterReadyPromiseReset");function Wi(n,o){Wr(n,o);}u(Wi,"defaultWriterReadyPromiseResetToRejected");function Or(n){n._readyPromise_resolve!==void 0&&(n._readyPromise_resolve(void 0),n._readyPromise_resolve=void 0,n._readyPromise_reject=void 0,n._readyPromiseState="fulfilled");}u(Or,"defaultWriterReadyPromiseResolve");function Oi(){if(typeof globalThis<"u")return globalThis;if(typeof self<"u")return self;if(typeof _commonjsHelpers.commonjsGlobal<"u")return _commonjsHelpers.commonjsGlobal}u(Oi,"getGlobals");const zr=Oi();function zi(n){if(!(typeof n=="function"||typeof n=="object")||n.name!=="DOMException")return !1;try{return new n,!0}catch{return !1}}u(zi,"isDOMExceptionConstructor");function Fi(){const n=zr?.DOMException;return zi(n)?n:void 0}u(Fi,"getFromGlobal");function Ii(){const n=u(function(a,p){this.message=a||"",this.name=p||"Error",Error.captureStackTrace&&Error.captureStackTrace(this,this.constructor);},"DOMException");return w(n,"DOMException"),n.prototype=Object.create(Error.prototype),Object.defineProperty(n.prototype,"constructor",{value:n,writable:!0,configurable:!0}),n}u(Ii,"createPolyfill");const ji=Fi()||Ii();function io(n,o,a,p,g,_){const S=Ne(n),C=Nn(o);n._disturbed=!0;let q=!1,P=k(void 0);return F((W,O)=>{let j;if(_!==void 0){if(j=u(()=>{const A=_.reason!==void 0?_.reason:new ji("Aborted","AbortError"),z=[];p||z.push(()=>o._state==="writable"?Ft(o,A):k(void 0)),g||z.push(()=>n._state==="readable"?le(n,A):k(void 0)),Z(()=>Promise.all(z.map(L=>L())),!0,A);},"abortAlgorithm"),_.aborted){j();return}_.addEventListener("abort",j);}function fe(){return F((A,z)=>{function L(X){X?A():$(et(),L,z);}u(L,"next"),L(!1);})}u(fe,"pipeLoop");function et(){return q?k(!0):$(C._readyPromise,()=>F((A,z)=>{it(S,{_chunkSteps:L=>{P=$(Zn(C,L),void 0,y),A(!1);},_closeSteps:()=>A(!0),_errorSteps:z});}))}if(u(et,"pipeStep"),Te(n,S._closedPromise,A=>(p?re(!0,A):Z(()=>Ft(o,A),!0,A),null)),Te(o,C._closedPromise,A=>(g?re(!0,A):Z(()=>le(n,A),!0,A),null)),Y(n,S._closedPromise,()=>(a?re():Z(()=>Si(C)),null)),be(o)||o._state==="closed"){const A=new TypeError("the destination writable stream closed before all data could be piped to it");g?re(!0,A):Z(()=>le(n,A),!0,A);}J(fe());function We(){const A=P;return $(P,()=>A!==P?We():void 0)}u(We,"waitForWritesToFinish");function Te(A,z,L){A._state==="errored"?L(A._storedError):U(z,L);}u(Te,"isOrBecomesErrored");function Y(A,z,L){A._state==="closed"?L():K(z,L);}u(Y,"isOrBecomesClosed");function Z(A,z,L){if(q)return;q=!0,o._state==="writable"&&!be(o)?K(We(),X):X();function X(){return E(A(),()=>Ce(z,L),tt=>Ce(!0,tt)),null}u(X,"doTheRest");}u(Z,"shutdownWithAction");function re(A,z){q||(q=!0,o._state==="writable"&&!be(o)?K(We(),()=>Ce(A,z)):Ce(A,z));}u(re,"shutdown");function Ce(A,z){return Yn(C),_e(S),_!==void 0&&_.removeEventListener("abort",j),A?O(z):W(void 0),null}u(Ce,"finalize");})}u(io,"ReadableStreamPipeTo");const Yr=class Yr{constructor(){throw new TypeError("Illegal constructor")}get desiredSize(){if(!xt(this))throw Nt("desiredSize");return Fr(this)}close(){if(!xt(this))throw Nt("close");if(!Ye(this))throw new TypeError("The stream is not in a state that permits close");Le(this);}enqueue(o=void 0){if(!xt(this))throw Nt("enqueue");if(!Ye(this))throw new TypeError("The stream is not in a state that permits enqueue");return Ge(this,o)}error(o=void 0){if(!xt(this))throw Nt("error");ue(this,o);}[er](o){Ae(this);const a=this._cancelAlgorithm(o);return Ut(this),a}[tr](o){const a=this._controlledReadableStream;if(this._queue.length>0){const p=br(this);this._closeRequested&&this._queue.length===0?(Ut(this),pt(a)):dt(this),o._chunkSteps(p);}else bn(a,o),dt(this);}[rr](){}};u(Yr,"ReadableStreamDefaultController");let ae=Yr;Object.defineProperties(ae.prototype,{close:{enumerable:!0},enqueue:{enumerable:!0},error:{enumerable:!0},desiredSize:{enumerable:!0}}),w(ae.prototype.close,"close"),w(ae.prototype.enqueue,"enqueue"),w(ae.prototype.error,"error"),typeof Symbol.toStringTag=="symbol"&&Object.defineProperty(ae.prototype,Symbol.toStringTag,{value:"ReadableStreamDefaultController",configurable:!0});function xt(n){return !b(n)||!Object.prototype.hasOwnProperty.call(n,"_controlledReadableStream")?!1:n instanceof ae}u(xt,"IsReadableStreamDefaultController");function dt(n){if(!so(n))return;if(n._pulling){n._pullAgain=!0;return}n._pulling=!0;const a=n._pullAlgorithm();E(a,()=>(n._pulling=!1,n._pullAgain&&(n._pullAgain=!1,dt(n)),null),p=>(ue(n,p),null));}u(dt,"ReadableStreamDefaultControllerCallPullIfNeeded");function so(n){const o=n._controlledReadableStream;return !Ye(n)||!n._started?!1:!!(ke(o)&&Tt(o)>0||Fr(n)>0)}u(so,"ReadableStreamDefaultControllerShouldCallPull");function Ut(n){n._pullAlgorithm=void 0,n._cancelAlgorithm=void 0,n._strategySizeAlgorithm=void 0;}u(Ut,"ReadableStreamDefaultControllerClearAlgorithms");function Le(n){if(!Ye(n))return;const o=n._controlledReadableStream;n._closeRequested=!0,n._queue.length===0&&(Ut(n),pt(o));}u(Le,"ReadableStreamDefaultControllerClose");function Ge(n,o){if(!Ye(n))return;const a=n._controlledReadableStream;if(ke(a)&&Tt(a)>0)fr(a,o,!1);else {let p;try{p=n._strategySizeAlgorithm(o);}catch(g){throw ue(n,g),g}try{mr(n,o,p);}catch(g){throw ue(n,g),g}}dt(n);}u(Ge,"ReadableStreamDefaultControllerEnqueue");function ue(n,o){const a=n._controlledReadableStream;a._state==="readable"&&(Ae(n),Ut(n),fo(a,o));}u(ue,"ReadableStreamDefaultControllerError");function Fr(n){const o=n._controlledReadableStream._state;return o==="errored"?null:o==="closed"?0:n._strategyHWM-n._queueTotalSize}u(Fr,"ReadableStreamDefaultControllerGetDesiredSize");function Li(n){return !so(n)}u(Li,"ReadableStreamDefaultControllerHasBackpressure");function Ye(n){const o=n._controlledReadableStream._state;return !n._closeRequested&&o==="readable"}u(Ye,"ReadableStreamDefaultControllerCanCloseOrEnqueue");function ao(n,o,a,p,g,_,S){o._controlledReadableStream=n,o._queue=void 0,o._queueTotalSize=void 0,Ae(o),o._started=!1,o._closeRequested=!1,o._pullAgain=!1,o._pulling=!1,o._strategySizeAlgorithm=S,o._strategyHWM=_,o._pullAlgorithm=p,o._cancelAlgorithm=g,n._readableStreamController=o;const C=a();E(k(C),()=>(o._started=!0,dt(o),null),q=>(ue(o,q),null));}u(ao,"SetUpReadableStreamDefaultController");function $i(n,o,a,p){const g=Object.create(ae.prototype);let _,S,C;o.start!==void 0?_=u(()=>o.start(g),"startAlgorithm"):_=u(()=>{},"startAlgorithm"),o.pull!==void 0?S=u(()=>o.pull(g),"pullAlgorithm"):S=u(()=>k(void 0),"pullAlgorithm"),o.cancel!==void 0?C=u(q=>o.cancel(q),"cancelAlgorithm"):C=u(()=>k(void 0),"cancelAlgorithm"),ao(n,g,_,S,C,a,p);}u($i,"SetUpReadableStreamDefaultControllerFromUnderlyingSource");function Nt(n){return new TypeError(`ReadableStreamDefaultController.prototype.${n} can only be used on a ReadableStreamDefaultController`)}u(Nt,"defaultControllerBrandCheckException$1");function Di(n,o){return Oe(n._readableStreamController)?xi(n):Mi(n)}u(Di,"ReadableStreamTee");function Mi(n,o){const a=Ne(n);let p=!1,g=!1,_=!1,S=!1,C,q,P,W,O;const j=F(Y=>{O=Y;});function fe(){return p?(g=!0,k(void 0)):(p=!0,it(a,{_chunkSteps:Z=>{ge(()=>{g=!1;const re=Z,Ce=Z;_||Ge(P._readableStreamController,re),S||Ge(W._readableStreamController,Ce),p=!1,g&&fe();});},_closeSteps:()=>{p=!1,_||Le(P._readableStreamController),S||Le(W._readableStreamController),(!_||!S)&&O(void 0);},_errorSteps:()=>{p=!1;}}),k(void 0))}u(fe,"pullAlgorithm");function et(Y){if(_=!0,C=Y,S){const Z=st([C,q]),re=le(n,Z);O(re);}return j}u(et,"cancel1Algorithm");function We(Y){if(S=!0,q=Y,_){const Z=st([C,q]),re=le(n,Z);O(re);}return j}u(We,"cancel2Algorithm");function Te(){}return u(Te,"startAlgorithm"),P=ht(Te,fe,et),W=ht(Te,fe,We),U(a._closedPromise,Y=>(ue(P._readableStreamController,Y),ue(W._readableStreamController,Y),(!_||!S)&&O(void 0),null)),[P,W]}u(Mi,"ReadableStreamDefaultTee");function xi(n){let o=Ne(n),a=!1,p=!1,g=!1,_=!1,S=!1,C,q,P,W,O;const j=F(A=>{O=A;});function fe(A){U(A._closedPromise,z=>(A!==o||(te(P._readableStreamController,z),te(W._readableStreamController,z),(!_||!S)&&O(void 0)),null));}u(fe,"forwardReaderError");function et(){Fe(o)&&(_e(o),o=Ne(n),fe(o)),it(o,{_chunkSteps:z=>{ge(()=>{p=!1,g=!1;const L=z;let X=z;if(!_&&!S)try{X=Pn(z);}catch(tt){te(P._readableStreamController,tt),te(W._readableStreamController,tt),O(le(n,tt));return}_||Bt(P._readableStreamController,L),S||Bt(W._readableStreamController,X),a=!1,p?Te():g&&Y();});},_closeSteps:()=>{a=!1,_||at(P._readableStreamController),S||at(W._readableStreamController),P._readableStreamController._pendingPullIntos.length>0&&qt(P._readableStreamController,0),W._readableStreamController._pendingPullIntos.length>0&&qt(W._readableStreamController,0),(!_||!S)&&O(void 0);},_errorSteps:()=>{a=!1;}});}u(et,"pullWithDefaultReader");function We(A,z){ve(o)&&(_e(o),o=Ln(n),fe(o));const L=z?W:P,X=z?P:W;Mn(o,A,1,{_chunkSteps:rt=>{ge(()=>{p=!1,g=!1;const nt=z?S:_;if(z?_:S)nt||kt(L._readableStreamController,rt);else {let Co;try{Co=Pn(rt);}catch(tn){te(L._readableStreamController,tn),te(X._readableStreamController,tn),O(le(n,tn));return}nt||kt(L._readableStreamController,rt),Bt(X._readableStreamController,Co);}a=!1,p?Te():g&&Y();});},_closeSteps:rt=>{a=!1;const nt=z?S:_,Yt=z?_:S;nt||at(L._readableStreamController),Yt||at(X._readableStreamController),rt!==void 0&&(nt||kt(L._readableStreamController,rt),!Yt&&X._readableStreamController._pendingPullIntos.length>0&&qt(X._readableStreamController,0)),(!nt||!Yt)&&O(void 0);},_errorSteps:()=>{a=!1;}});}u(We,"pullWithBYOBReader");function Te(){if(a)return p=!0,k(void 0);a=!0;const A=wr(P._readableStreamController);return A===null?et():We(A._view,!1),k(void 0)}u(Te,"pull1Algorithm");function Y(){if(a)return g=!0,k(void 0);a=!0;const A=wr(W._readableStreamController);return A===null?et():We(A._view,!0),k(void 0)}u(Y,"pull2Algorithm");function Z(A){if(_=!0,C=A,S){const z=st([C,q]),L=le(n,z);O(L);}return j}u(Z,"cancel1Algorithm");function re(A){if(S=!0,q=A,_){const z=st([C,q]),L=le(n,z);O(L);}return j}u(re,"cancel2Algorithm");function Ce(){}return u(Ce,"startAlgorithm"),P=lo(Ce,Te,Z),W=lo(Ce,Y,re),fe(o),[P,W]}u(xi,"ReadableByteStreamTee");function Ui(n){return b(n)&&typeof n.getReader<"u"}u(Ui,"isReadableStreamLike");function Ni(n){return Ui(n)?Vi(n.getReader()):Hi(n)}u(Ni,"ReadableStreamFrom");function Hi(n){let o;const a=Cn(n,"async"),p=y;function g(){let S;try{S=Io(a);}catch(q){return T(q)}const C=k(S);return N(C,q=>{if(!b(q))throw new TypeError("The promise returned by the iterator.next() method must fulfill with an object");if(jo(q))Le(o._readableStreamController);else {const W=Lo(q);Ge(o._readableStreamController,W);}})}u(g,"pullAlgorithm");function _(S){const C=a.iterator;let q;try{q=vt(C,"return");}catch(O){return T(O)}if(q===void 0)return k(void 0);let P;try{P=M(q,C,[S]);}catch(O){return T(O)}const W=k(P);return N(W,O=>{if(!b(O))throw new TypeError("The promise returned by the iterator.return() method must fulfill with an object")})}return u(_,"cancelAlgorithm"),o=ht(p,g,_,0),o}u(Hi,"ReadableStreamFromIterable");function Vi(n){let o;const a=y;function p(){let _;try{_=n.read();}catch(S){return T(S)}return N(_,S=>{if(!b(S))throw new TypeError("The promise returned by the reader.read() method must fulfill with an object");if(S.done)Le(o._readableStreamController);else {const C=S.value;Ge(o._readableStreamController,C);}})}u(p,"pullAlgorithm");function g(_){try{return k(n.cancel(_))}catch(S){return T(S)}}return u(g,"cancelAlgorithm"),o=ht(a,p,g,0),o}u(Vi,"ReadableStreamFromDefaultReader");function Qi(n,o){ce(n,o);const a=n,p=a?.autoAllocateChunkSize,g=a?.cancel,_=a?.pull,S=a?.start,C=a?.type;return {autoAllocateChunkSize:p===void 0?void 0:ur(p,`${o} has member 'autoAllocateChunkSize' that`),cancel:g===void 0?void 0:Gi(g,a,`${o} has member 'cancel' that`),pull:_===void 0?void 0:Yi(_,a,`${o} has member 'pull' that`),start:S===void 0?void 0:Zi(S,a,`${o} has member 'start' that`),type:C===void 0?void 0:Ki(C,`${o} has member 'type' that`)}}u(Qi,"convertUnderlyingDefaultOrByteSource");function Gi(n,o,a){return ee(n,a),p=>H(n,o,[p])}u(Gi,"convertUnderlyingSourceCancelCallback");function Yi(n,o,a){return ee(n,a),p=>H(n,o,[p])}u(Yi,"convertUnderlyingSourcePullCallback");function Zi(n,o,a){return ee(n,a),p=>M(n,o,[p])}u(Zi,"convertUnderlyingSourceStartCallback");function Ki(n,o){if(n=`${n}`,n!=="bytes")throw new TypeError(`${o} '${n}' is not a valid enumeration value for ReadableStreamType`);return n}u(Ki,"convertReadableStreamType");function Ji(n,o){return ce(n,o),{preventCancel:!!n?.preventCancel}}u(Ji,"convertIteratorOptions");function uo(n,o){ce(n,o);const a=n?.preventAbort,p=n?.preventCancel,g=n?.preventClose,_=n?.signal;return _!==void 0&&Xi(_,`${o} has member 'signal' that`),{preventAbort:!!a,preventCancel:!!p,preventClose:!!g,signal:_}}u(uo,"convertPipeOptions");function Xi(n,o){if(!ai(n))throw new TypeError(`${o} is not an AbortSignal.`)}u(Xi,"assertAbortSignal");function es(n,o){ce(n,o);const a=n?.readable;sr(a,"readable","ReadableWritablePair"),lr(a,`${o} has member 'readable' that`);const p=n?.writable;return sr(p,"writable","ReadableWritablePair"),Un(p,`${o} has member 'writable' that`),{readable:a,writable:p}}u(es,"convertReadableWritablePair");const Zr=class Zr{constructor(o={},a={}){o===void 0?o=null:hn(o,"First parameter");const p=zt(a,"Second parameter"),g=Qi(o,"First parameter");if(Ir(this),g.type==="bytes"){if(p.size!==void 0)throw new RangeError("The strategy for a byte stream cannot have a size function");const _=lt(p,0);Go(this,g,_);}else {const _=Ot(p),S=lt(p,1);$i(this,g,S,_);}}get locked(){if(!qe(this))throw $e("locked");return ke(this)}cancel(o=void 0){return qe(this)?ke(this)?T(new TypeError("Cannot cancel a stream that already has a reader")):le(this,o):T($e("cancel"))}getReader(o=void 0){if(!qe(this))throw $e("getReader");return Zo(o,"First parameter").mode===void 0?Ne(this):Ln(this)}pipeThrough(o,a={}){if(!qe(this))throw $e("pipeThrough");Se(o,1,"pipeThrough");const p=es(o,"First parameter"),g=uo(a,"Second parameter");if(ke(this))throw new TypeError("ReadableStream.prototype.pipeThrough cannot be used on a locked ReadableStream");if(Qe(p.writable))throw new TypeError("ReadableStream.prototype.pipeThrough cannot be used on a locked WritableStream");const _=io(this,p.writable,g.preventClose,g.preventAbort,g.preventCancel,g.signal);return J(_),p.readable}pipeTo(o,a={}){if(!qe(this))return T($e("pipeTo"));if(o===void 0)return T("Parameter 1 is required in 'pipeTo'.");if(!Ve(o))return T(new TypeError("ReadableStream.prototype.pipeTo's first argument must be a WritableStream"));let p;try{p=uo(a,"Second parameter");}catch(g){return T(g)}return ke(this)?T(new TypeError("ReadableStream.prototype.pipeTo cannot be used on a locked ReadableStream")):Qe(o)?T(new TypeError("ReadableStream.prototype.pipeTo cannot be used on a locked WritableStream")):io(this,o,p.preventClose,p.preventAbort,p.preventCancel,p.signal)}tee(){if(!qe(this))throw $e("tee");const o=Di(this);return st(o)}values(o=void 0){if(!qe(this))throw $e("values");const a=Ji(o,"First parameter");return zo(this,a.preventCancel)}[pr](o){return this.values(o)}static from(o){return Ni(o)}};u(Zr,"ReadableStream");let V=Zr;Object.defineProperties(V,{from:{enumerable:!0}}),Object.defineProperties(V.prototype,{cancel:{enumerable:!0},getReader:{enumerable:!0},pipeThrough:{enumerable:!0},pipeTo:{enumerable:!0},tee:{enumerable:!0},values:{enumerable:!0},locked:{enumerable:!0}}),w(V.from,"from"),w(V.prototype.cancel,"cancel"),w(V.prototype.getReader,"getReader"),w(V.prototype.pipeThrough,"pipeThrough"),w(V.prototype.pipeTo,"pipeTo"),w(V.prototype.tee,"tee"),w(V.prototype.values,"values"),typeof Symbol.toStringTag=="symbol"&&Object.defineProperty(V.prototype,Symbol.toStringTag,{value:"ReadableStream",configurable:!0}),Object.defineProperty(V.prototype,pr,{value:V.prototype.values,writable:!0,configurable:!0});function ht(n,o,a,p=1,g=()=>1){const _=Object.create(V.prototype);Ir(_);const S=Object.create(ae.prototype);return ao(_,S,n,o,a,p,g),_}u(ht,"CreateReadableStream");function lo(n,o,a){const p=Object.create(V.prototype);Ir(p);const g=Object.create(ie.prototype);return jn(p,g,n,o,a,0,void 0),p}u(lo,"CreateReadableByteStream");function Ir(n){n._state="readable",n._reader=void 0,n._storedError=void 0,n._disturbed=!1;}u(Ir,"InitializeReadableStream");function qe(n){return !b(n)||!Object.prototype.hasOwnProperty.call(n,"_readableStreamController")?!1:n instanceof V}u(qe,"IsReadableStream");function ke(n){return n._reader!==void 0}u(ke,"IsReadableStreamLocked");function le(n,o){if(n._disturbed=!0,n._state==="closed")return k(void 0);if(n._state==="errored")return T(n._storedError);pt(n);const a=n._reader;if(a!==void 0&&Fe(a)){const g=a._readIntoRequests;a._readIntoRequests=new Q,g.forEach(_=>{_._closeSteps(void 0);});}const p=n._readableStreamController[er](o);return N(p,y)}u(le,"ReadableStreamCancel");function pt(n){n._state="closed";const o=n._reader;if(o!==void 0&&(cn(o),ve(o))){const a=o._readRequests;o._readRequests=new Q,a.forEach(p=>{p._closeSteps();});}}u(pt,"ReadableStreamClose");function fo(n,o){n._state="errored",n._storedError=o;const a=n._reader;a!==void 0&&(ir(a,o),ve(a)?yn(a,o):xn(a,o));}u(fo,"ReadableStreamError");function $e(n){return new TypeError(`ReadableStream.prototype.${n} can only be used on a ReadableStream`)}u($e,"streamBrandCheckException$1");function co(n,o){ce(n,o);const a=n?.highWaterMark;return sr(a,"highWaterMark","QueuingStrategyInit"),{highWaterMark:ar(a)}}u(co,"convertQueuingStrategyInit");const ho=u(n=>n.byteLength,"byteLengthSizeFunction");w(ho,"size");const Kr=class Kr{constructor(o){Se(o,1,"ByteLengthQueuingStrategy"),o=co(o,"First parameter"),this._byteLengthQueuingStrategyHighWaterMark=o.highWaterMark;}get highWaterMark(){if(!bo(this))throw po("highWaterMark");return this._byteLengthQueuingStrategyHighWaterMark}get size(){if(!bo(this))throw po("size");return ho}};u(Kr,"ByteLengthQueuingStrategy");let Ze=Kr;Object.defineProperties(Ze.prototype,{highWaterMark:{enumerable:!0},size:{enumerable:!0}}),typeof Symbol.toStringTag=="symbol"&&Object.defineProperty(Ze.prototype,Symbol.toStringTag,{value:"ByteLengthQueuingStrategy",configurable:!0});function po(n){return new TypeError(`ByteLengthQueuingStrategy.prototype.${n} can only be used on a ByteLengthQueuingStrategy`)}u(po,"byteLengthBrandCheckException");function bo(n){return !b(n)||!Object.prototype.hasOwnProperty.call(n,"_byteLengthQueuingStrategyHighWaterMark")?!1:n instanceof Ze}u(bo,"IsByteLengthQueuingStrategy");const mo=u(()=>1,"countSizeFunction");w(mo,"size");const Jr=class Jr{constructor(o){Se(o,1,"CountQueuingStrategy"),o=co(o,"First parameter"),this._countQueuingStrategyHighWaterMark=o.highWaterMark;}get highWaterMark(){if(!go(this))throw yo("highWaterMark");return this._countQueuingStrategyHighWaterMark}get size(){if(!go(this))throw yo("size");return mo}};u(Jr,"CountQueuingStrategy");let Ke=Jr;Object.defineProperties(Ke.prototype,{highWaterMark:{enumerable:!0},size:{enumerable:!0}}),typeof Symbol.toStringTag=="symbol"&&Object.defineProperty(Ke.prototype,Symbol.toStringTag,{value:"CountQueuingStrategy",configurable:!0});function yo(n){return new TypeError(`CountQueuingStrategy.prototype.${n} can only be used on a CountQueuingStrategy`)}u(yo,"countBrandCheckException");function go(n){return !b(n)||!Object.prototype.hasOwnProperty.call(n,"_countQueuingStrategyHighWaterMark")?!1:n instanceof Ke}u(go,"IsCountQueuingStrategy");function ts(n,o){ce(n,o);const a=n?.cancel,p=n?.flush,g=n?.readableType,_=n?.start,S=n?.transform,C=n?.writableType;return {cancel:a===void 0?void 0:is(a,n,`${o} has member 'cancel' that`),flush:p===void 0?void 0:rs(p,n,`${o} has member 'flush' that`),readableType:g,start:_===void 0?void 0:ns(_,n,`${o} has member 'start' that`),transform:S===void 0?void 0:os(S,n,`${o} has member 'transform' that`),writableType:C}}u(ts,"convertTransformer");function rs(n,o,a){return ee(n,a),p=>H(n,o,[p])}u(rs,"convertTransformerFlushCallback");function ns(n,o,a){return ee(n,a),p=>M(n,o,[p])}u(ns,"convertTransformerStartCallback");function os(n,o,a){return ee(n,a),(p,g)=>H(n,o,[p,g])}u(os,"convertTransformerTransformCallback");function is(n,o,a){return ee(n,a),p=>H(n,o,[p])}u(is,"convertTransformerCancelCallback");const Xr=class Xr{constructor(o={},a={},p={}){o===void 0&&(o=null);const g=zt(a,"Second parameter"),_=zt(p,"Third parameter"),S=ts(o,"First parameter");if(S.readableType!==void 0)throw new RangeError("Invalid readableType specified");if(S.writableType!==void 0)throw new RangeError("Invalid writableType specified");const C=lt(_,0),q=Ot(_),P=lt(g,1),W=Ot(g);let O;const j=F(fe=>{O=fe;});ss(this,j,P,W,C,q),us(this,S),S.start!==void 0?O(S.start(this._transformStreamController)):O(void 0);}get readable(){if(!_o(this))throw To("readable");return this._readable}get writable(){if(!_o(this))throw To("writable");return this._writable}};u(Xr,"TransformStream");let Je=Xr;Object.defineProperties(Je.prototype,{readable:{enumerable:!0},writable:{enumerable:!0}}),typeof Symbol.toStringTag=="symbol"&&Object.defineProperty(Je.prototype,Symbol.toStringTag,{value:"TransformStream",configurable:!0});function ss(n,o,a,p,g,_){function S(){return o}u(S,"startAlgorithm");function C(j){return cs(n,j)}u(C,"writeAlgorithm");function q(j){return ds(n,j)}u(q,"abortAlgorithm");function P(){return hs(n)}u(P,"closeAlgorithm"),n._writable=fi(S,C,P,q,a,p);function W(){return ps(n)}u(W,"pullAlgorithm");function O(j){return bs(n,j)}u(O,"cancelAlgorithm"),n._readable=ht(S,W,O,g,_),n._backpressure=void 0,n._backpressureChangePromise=void 0,n._backpressureChangePromise_resolve=void 0,Ht(n,!0),n._transformStreamController=void 0;}u(ss,"InitializeTransformStream");function _o(n){return !b(n)||!Object.prototype.hasOwnProperty.call(n,"_transformStreamController")?!1:n instanceof Je}u(_o,"IsTransformStream");function So(n,o){ue(n._readable._readableStreamController,o),jr(n,o);}u(So,"TransformStreamError");function jr(n,o){Qt(n._transformStreamController),ft(n._writable._writableStreamController,o),Lr(n);}u(jr,"TransformStreamErrorWritableAndUnblockWrite");function Lr(n){n._backpressure&&Ht(n,!1);}u(Lr,"TransformStreamUnblockWrite");function Ht(n,o){n._backpressureChangePromise!==void 0&&n._backpressureChangePromise_resolve(),n._backpressureChangePromise=F(a=>{n._backpressureChangePromise_resolve=a;}),n._backpressure=o;}u(Ht,"TransformStreamSetBackpressure");const en=class en{constructor(){throw new TypeError("Illegal constructor")}get desiredSize(){if(!Vt(this))throw Gt("desiredSize");const o=this._controlledTransformStream._readable._readableStreamController;return Fr(o)}enqueue(o=void 0){if(!Vt(this))throw Gt("enqueue");wo(this,o);}error(o=void 0){if(!Vt(this))throw Gt("error");ls(this,o);}terminate(){if(!Vt(this))throw Gt("terminate");fs(this);}};u(en,"TransformStreamDefaultController");let me=en;Object.defineProperties(me.prototype,{enqueue:{enumerable:!0},error:{enumerable:!0},terminate:{enumerable:!0},desiredSize:{enumerable:!0}}),w(me.prototype.enqueue,"enqueue"),w(me.prototype.error,"error"),w(me.prototype.terminate,"terminate"),typeof Symbol.toStringTag=="symbol"&&Object.defineProperty(me.prototype,Symbol.toStringTag,{value:"TransformStreamDefaultController",configurable:!0});function Vt(n){return !b(n)||!Object.prototype.hasOwnProperty.call(n,"_controlledTransformStream")?!1:n instanceof me}u(Vt,"IsTransformStreamDefaultController");function as(n,o,a,p,g){o._controlledTransformStream=n,n._transformStreamController=o,o._transformAlgorithm=a,o._flushAlgorithm=p,o._cancelAlgorithm=g,o._finishPromise=void 0,o._finishPromise_resolve=void 0,o._finishPromise_reject=void 0;}u(as,"SetUpTransformStreamDefaultController");function us(n,o){const a=Object.create(me.prototype);let p,g,_;o.transform!==void 0?p=u(S=>o.transform(S,a),"transformAlgorithm"):p=u(S=>{try{return wo(a,S),k(void 0)}catch(C){return T(C)}},"transformAlgorithm"),o.flush!==void 0?g=u(()=>o.flush(a),"flushAlgorithm"):g=u(()=>k(void 0),"flushAlgorithm"),o.cancel!==void 0?_=u(S=>o.cancel(S),"cancelAlgorithm"):_=u(()=>k(void 0),"cancelAlgorithm"),as(n,a,p,g,_);}u(us,"SetUpTransformStreamDefaultControllerFromTransformer");function Qt(n){n._transformAlgorithm=void 0,n._flushAlgorithm=void 0,n._cancelAlgorithm=void 0;}u(Qt,"TransformStreamDefaultControllerClearAlgorithms");function wo(n,o){const a=n._controlledTransformStream,p=a._readable._readableStreamController;if(!Ye(p))throw new TypeError("Readable side is not in a state that permits enqueue");try{Ge(p,o);}catch(_){throw jr(a,_),a._readable._storedError}Li(p)!==a._backpressure&&Ht(a,!0);}u(wo,"TransformStreamDefaultControllerEnqueue");function ls(n,o){So(n._controlledTransformStream,o);}u(ls,"TransformStreamDefaultControllerError");function Ro(n,o){const a=n._transformAlgorithm(o);return N(a,void 0,p=>{throw So(n._controlledTransformStream,p),p})}u(Ro,"TransformStreamDefaultControllerPerformTransform");function fs(n){const o=n._controlledTransformStream,a=o._readable._readableStreamController;Le(a);const p=new TypeError("TransformStream terminated");jr(o,p);}u(fs,"TransformStreamDefaultControllerTerminate");function cs(n,o){const a=n._transformStreamController;if(n._backpressure){const p=n._backpressureChangePromise;return N(p,()=>{const g=n._writable;if(g._state==="erroring")throw g._storedError;return Ro(a,o)})}return Ro(a,o)}u(cs,"TransformStreamDefaultSinkWriteAlgorithm");function ds(n,o){const a=n._transformStreamController;if(a._finishPromise!==void 0)return a._finishPromise;const p=n._readable;a._finishPromise=F((_,S)=>{a._finishPromise_resolve=_,a._finishPromise_reject=S;});const g=a._cancelAlgorithm(o);return Qt(a),E(g,()=>(p._state==="errored"?Xe(a,p._storedError):(ue(p._readableStreamController,o),$r(a)),null),_=>(ue(p._readableStreamController,_),Xe(a,_),null)),a._finishPromise}u(ds,"TransformStreamDefaultSinkAbortAlgorithm");function hs(n){const o=n._transformStreamController;if(o._finishPromise!==void 0)return o._finishPromise;const a=n._readable;o._finishPromise=F((g,_)=>{o._finishPromise_resolve=g,o._finishPromise_reject=_;});const p=o._flushAlgorithm();return Qt(o),E(p,()=>(a._state==="errored"?Xe(o,a._storedError):(Le(a._readableStreamController),$r(o)),null),g=>(ue(a._readableStreamController,g),Xe(o,g),null)),o._finishPromise}u(hs,"TransformStreamDefaultSinkCloseAlgorithm");function ps(n){return Ht(n,!1),n._backpressureChangePromise}u(ps,"TransformStreamDefaultSourcePullAlgorithm");function bs(n,o){const a=n._transformStreamController;if(a._finishPromise!==void 0)return a._finishPromise;const p=n._writable;a._finishPromise=F((_,S)=>{a._finishPromise_resolve=_,a._finishPromise_reject=S;});const g=a._cancelAlgorithm(o);return Qt(a),E(g,()=>(p._state==="errored"?Xe(a,p._storedError):(ft(p._writableStreamController,o),Lr(n),$r(a)),null),_=>(ft(p._writableStreamController,_),Lr(n),Xe(a,_),null)),a._finishPromise}u(bs,"TransformStreamDefaultSourceCancelAlgorithm");function Gt(n){return new TypeError(`TransformStreamDefaultController.prototype.${n} can only be used on a TransformStreamDefaultController`)}u(Gt,"defaultControllerBrandCheckException");function $r(n){n._finishPromise_resolve!==void 0&&(n._finishPromise_resolve(),n._finishPromise_resolve=void 0,n._finishPromise_reject=void 0);}u($r,"defaultControllerFinishPromiseResolve");function Xe(n,o){n._finishPromise_reject!==void 0&&(J(n._finishPromise),n._finishPromise_reject(o),n._finishPromise_resolve=void 0,n._finishPromise_reject=void 0);}u(Xe,"defaultControllerFinishPromiseReject");function To(n){return new TypeError(`TransformStream.prototype.${n} can only be used on a TransformStream`)}u(To,"streamBrandCheckException"),d.ByteLengthQueuingStrategy=Ze,d.CountQueuingStrategy=Ke,d.ReadableByteStreamController=ie,d.ReadableStream=V,d.ReadableStreamBYOBReader=he,d.ReadableStreamBYOBRequest=Re,d.ReadableStreamDefaultController=ae,d.ReadableStreamDefaultReader=de,d.TransformStream=Je,d.TransformStreamDefaultController=me,d.WritableStream=pe,d.WritableStreamDefaultController=Be,d.WritableStreamDefaultWriter=se;});}(ponyfill_es2018,ponyfill_es2018.exports)),ponyfill_es2018.exports}u(requirePonyfill_es2018,"requirePonyfill_es2018");const POOL_SIZE$1=65536;if(!globalThis.ReadableStream)try{const c=require("node:process"),{emitWarning:l}=c;try{c.emitWarning=()=>{},Object.assign(globalThis,require("node:stream/web")),c.emitWarning=l;}catch(d){throw c.emitWarning=l,d}}catch{Object.assign(globalThis,requirePonyfill_es2018());}try{const{Blob:c}=require("buffer");c&&!c.prototype.stream&&(c.prototype.stream=u(function(d){let y=0;const b=this;return new ReadableStream({type:"bytes",async pull(R){const v=await b.slice(y,Math.min(b.size,y+POOL_SIZE$1)).arrayBuffer();y+=v.byteLength,R.enqueue(new Uint8Array(v)),y===b.size&&R.close();}})},"name"));}catch{}/*! fetch-blob. MIT License. Jimmy Wärting <https://jimmy.warting.se/opensource> */const POOL_SIZE=65536;async function*toIterator(c,l=!0){for(const d of c)if("stream"in d)yield*d.stream();else if(ArrayBuffer.isView(d))if(l){let y=d.byteOffset;const b=d.byteOffset+d.byteLength;for(;y!==b;){const R=Math.min(b-y,POOL_SIZE),w=d.buffer.slice(y,y+R);y+=w.byteLength,yield new Uint8Array(w);}}else yield d;else {let y=0,b=d;for(;y!==b.size;){const w=await b.slice(y,Math.min(b.size,y+POOL_SIZE)).arrayBuffer();y+=w.byteLength,yield new Uint8Array(w);}}}u(toIterator,"toIterator");const _Blob=(Ue$2=class{constructor(l=[],d={}){ye(this,Pe$2,[]);ye(this,bt,"");ye(this,ot$2,0);ye(this,Zt,"transparent");if(typeof l!="object"||l===null)throw new TypeError("Failed to construct 'Blob': The provided value cannot be converted to a sequence.");if(typeof l[Symbol.iterator]!="function")throw new TypeError("Failed to construct 'Blob': The object must have a callable @@iterator property.");if(typeof d!="object"&&typeof d!="function")throw new TypeError("Failed to construct 'Blob': parameter 2 cannot convert to dictionary.");d===null&&(d={});const y=new TextEncoder;for(const R of l){let w;ArrayBuffer.isView(R)?w=new Uint8Array(R.buffer.slice(R.byteOffset,R.byteOffset+R.byteLength)):R instanceof ArrayBuffer?w=new Uint8Array(R.slice(0)):R instanceof Ue$2?w=R:w=y.encode(`${R}`),ne$1(this,ot$2,D$1(this,ot$2)+(ArrayBuffer.isView(w)?w.byteLength:w.size)),D$1(this,Pe$2).push(w);}ne$1(this,Zt,`${d.endings===void 0?"transparent":d.endings}`);const b=d.type===void 0?"":String(d.type);ne$1(this,bt,/^[\x20-\x7E]*$/.test(b)?b:"");}get size(){return D$1(this,ot$2)}get type(){return D$1(this,bt)}async text(){const l=new TextDecoder;let d="";for await(const y of toIterator(D$1(this,Pe$2),!1))d+=l.decode(y,{stream:!0});return d+=l.decode(),d}async arrayBuffer(){const l=new Uint8Array(this.size);let d=0;for await(const y of toIterator(D$1(this,Pe$2),!1))l.set(y,d),d+=y.length;return l.buffer}stream(){const l=toIterator(D$1(this,Pe$2),!0);return new globalThis.ReadableStream({type:"bytes",async pull(d){const y=await l.next();y.done?d.close():d.enqueue(y.value);},async cancel(){await l.return();}})}slice(l=0,d=this.size,y=""){const{size:b}=this;let R=l<0?Math.max(b+l,0):Math.min(l,b),w=d<0?Math.max(b+d,0):Math.min(d,b);const v=Math.max(w-R,0),I=D$1(this,Pe$2),B=[];let F=0;for(const T of I){if(F>=v)break;const $=ArrayBuffer.isView(T)?T.byteLength:T.size;if(R&&$<=R)R-=$,w-=$;else {let E;ArrayBuffer.isView(T)?(E=T.subarray(R,Math.min($,w)),F+=E.byteLength):(E=T.slice(R,Math.min($,w)),F+=E.size),w-=$,B.push(E),R=0;}}const k=new Ue$2([],{type:String(y).toLowerCase()});return ne$1(k,ot$2,v),ne$1(k,Pe$2,B),k}get[Symbol.toStringTag](){return "Blob"}static[Symbol.hasInstance](l){return l&&typeof l=="object"&&typeof l.constructor=="function"&&(typeof l.stream=="function"||typeof l.arrayBuffer=="function")&&/^(Blob|File)$/.test(l[Symbol.toStringTag])}},Pe$2=new WeakMap,bt=new WeakMap,ot$2=new WeakMap,Zt=new WeakMap,u(Ue$2,"Blob"),Ue$2);Object.defineProperties(_Blob.prototype,{size:{enumerable:!0},type:{enumerable:!0},slice:{enumerable:!0}});const Blob=_Blob,r$1=Blob,_File=(gt$1=class extends r$1{constructor(d,y,b={}){if(arguments.length<2)throw new TypeError(`Failed to construct 'File': 2 arguments required, but only ${arguments.length} present.`);super(d,b);ye(this,mt$1,0);ye(this,yt$1,"");b===null&&(b={});const R=b.lastModified===void 0?Date.now():Number(b.lastModified);Number.isNaN(R)||ne$1(this,mt$1,R),ne$1(this,yt$1,String(y));}get name(){return D$1(this,yt$1)}get lastModified(){return D$1(this,mt$1)}get[Symbol.toStringTag](){return "File"}static[Symbol.hasInstance](d){return !!d&&d instanceof r$1&&/^(File)$/.test(d[Symbol.toStringTag])}},mt$1=new WeakMap,yt$1=new WeakMap,u(gt$1,"File"),gt$1),File=_File,File$1=File;/*! formdata-polyfill. MIT License. Jimmy Wärting <https://jimmy.warting.se/opensource> */var{toStringTag:t$1,iterator:i$3,hasInstance:h$1}=Symbol,r=Math.random,m$2="append,set,get,getAll,delete,keys,values,entries,forEach,constructor".split(","),f=u((c,l,d)=>(c+="",/^(Blob|File)$/.test(l&&l[t$1])?[(d=d!==void 0?d+"":l[t$1]=="File"?l.name:"blob",c),l.name!==d||l[t$1]=="blob"?new File$1([l],d,l):l]:[c,l+""]),"f"),e$1=u((c,l)=>(l?c:c.replace(/\r?\n|\r/g,`\r
`)).replace(/\n/g,"%0A").replace(/\r/g,"%0D").replace(/"/g,"%22"),"e$1"),x$1=u((c,l,d)=>{if(l.length<d)throw new TypeError(`Failed to execute '${c}' on 'FormData': ${d} arguments required, but only ${l.length} present.`)},"x");const FormData$1=(_t=class{constructor(...l){ye(this,oe,[]);if(l.length)throw new TypeError("Failed to construct 'FormData': parameter 1 is not of type 'HTMLFormElement'.")}get[t$1](){return "FormData"}[i$3](){return this.entries()}static[h$1](l){return l&&typeof l=="object"&&l[t$1]==="FormData"&&!m$2.some(d=>typeof l[d]!="function")}append(...l){x$1("append",arguments,2),D$1(this,oe).push(f(...l));}delete(l){x$1("delete",arguments,1),l+="",ne$1(this,oe,D$1(this,oe).filter(([d])=>d!==l));}get(l){x$1("get",arguments,1),l+="";for(var d=D$1(this,oe),y=d.length,b=0;b<y;b++)if(d[b][0]===l)return d[b][1];return null}getAll(l,d){return x$1("getAll",arguments,1),d=[],l+="",D$1(this,oe).forEach(y=>y[0]===l&&d.push(y[1])),d}has(l){return x$1("has",arguments,1),l+="",D$1(this,oe).some(d=>d[0]===l)}forEach(l,d){x$1("forEach",arguments,1);for(var[y,b]of this)l.call(d,b,y,this);}set(...l){x$1("set",arguments,2);var d=[],y=!0;l=f(...l),D$1(this,oe).forEach(b=>{b[0]===l[0]?y&&(y=!d.push(l)):d.push(b);}),y&&d.push(l),ne$1(this,oe,d);}*entries(){yield*D$1(this,oe);}*keys(){for(var[l]of this)yield l;}*values(){for(var[,l]of this)yield l;}},oe=new WeakMap,u(_t,"FormData"),_t);function formDataToBlob(c,l=r$1){var d=`${r()}${r()}`.replace(/\./g,"").slice(-28).padStart(32,"-"),y=[],b=`--${d}\r
Content-Disposition: form-data; name="`;return c.forEach((R,w)=>typeof R=="string"?y.push(b+e$1(w)+`"\r
\r
${R.replace(/\r(?!\n)|(?<!\r)\n/g,`\r
`)}\r
`):y.push(b+e$1(w)+`"; filename="${e$1(R.name,1)}"\r
Content-Type: ${R.type||"application/octet-stream"}\r
\r
`,R,`\r
`)),y.push(`--${d}--`),new l(y,{type:"multipart/form-data; boundary="+d})}u(formDataToBlob,"formDataToBlob");const rn$1=class rn extends Error{constructor(l,d){super(l),Error.captureStackTrace(this,this.constructor),this.type=d;}get name(){return this.constructor.name}get[Symbol.toStringTag](){return this.constructor.name}};u(rn$1,"FetchBaseError");let FetchBaseError=rn$1;const nn$1=class nn extends FetchBaseError{constructor(l,d,y){super(l,d),y&&(this.code=this.errno=y.code,this.erroredSysCall=y.syscall);}};u(nn$1,"FetchError");let FetchError$1=nn$1;const NAME=Symbol.toStringTag,isURLSearchParameters=u(c=>typeof c=="object"&&typeof c.append=="function"&&typeof c.delete=="function"&&typeof c.get=="function"&&typeof c.getAll=="function"&&typeof c.has=="function"&&typeof c.set=="function"&&typeof c.sort=="function"&&c[NAME]==="URLSearchParams","isURLSearchParameters"),isBlob=u(c=>c&&typeof c=="object"&&typeof c.arrayBuffer=="function"&&typeof c.type=="string"&&typeof c.stream=="function"&&typeof c.constructor=="function"&&/^(Blob|File)$/.test(c[NAME]),"isBlob"),isAbortSignal=u(c=>typeof c=="object"&&(c[NAME]==="AbortSignal"||c[NAME]==="EventTarget"),"isAbortSignal"),isDomainOrSubdomain=u((c,l)=>{const d=new URL(l).hostname,y=new URL(c).hostname;return d===y||d.endsWith(`.${y}`)},"isDomainOrSubdomain"),isSameProtocol=u((c,l)=>{const d=new URL(l).protocol,y=new URL(c).protocol;return d===y},"isSameProtocol"),pipeline=require$$0.promisify(Stream__default.pipeline),INTERNALS$2=Symbol("Body internals"),on$1=class on{constructor(l,{size:d=0}={}){let y=null;l===null?l=null:isURLSearchParameters(l)?l=require$$6.Buffer.from(l.toString()):isBlob(l)||require$$6.Buffer.isBuffer(l)||(require$$0.types.isAnyArrayBuffer(l)?l=require$$6.Buffer.from(l):ArrayBuffer.isView(l)?l=require$$6.Buffer.from(l.buffer,l.byteOffset,l.byteLength):l instanceof Stream__default||(l instanceof FormData$1?(l=formDataToBlob(l),y=l.type.split("=")[1]):l=require$$6.Buffer.from(String(l))));let b=l;require$$6.Buffer.isBuffer(l)?b=Stream__default.Readable.from(l):isBlob(l)&&(b=Stream__default.Readable.from(l.stream())),this[INTERNALS$2]={body:l,stream:b,boundary:y,disturbed:!1,error:null},this.size=d,l instanceof Stream__default&&l.on("error",R=>{const w=R instanceof FetchBaseError?R:new FetchError$1(`Invalid response body while trying to fetch ${this.url}: ${R.message}`,"system",R);this[INTERNALS$2].error=w;});}get body(){return this[INTERNALS$2].stream}get bodyUsed(){return this[INTERNALS$2].disturbed}async arrayBuffer(){const{buffer:l,byteOffset:d,byteLength:y}=await consumeBody(this);return l.slice(d,d+y)}async formData(){const l=this.headers.get("content-type");if(l.startsWith("application/x-www-form-urlencoded")){const y=new FormData$1,b=new URLSearchParams(await this.text());for(const[R,w]of b)y.append(R,w);return y}const{toFormData:d}=await import('../_/multipart-parser.mjs').then(function (n) { return n.m; });return d(this.body,l)}async blob(){const l=this.headers&&this.headers.get("content-type")||this[INTERNALS$2].body&&this[INTERNALS$2].body.type||"",d=await this.arrayBuffer();return new r$1([d],{type:l})}async json(){const l=await this.text();return JSON.parse(l)}async text(){const l=await consumeBody(this);return new TextDecoder().decode(l)}buffer(){return consumeBody(this)}};u(on$1,"Body");let Body=on$1;Body.prototype.buffer=require$$0.deprecate(Body.prototype.buffer,"Please use 'response.arrayBuffer()' instead of 'response.buffer()'","node-fetch#buffer"),Object.defineProperties(Body.prototype,{body:{enumerable:!0},bodyUsed:{enumerable:!0},arrayBuffer:{enumerable:!0},blob:{enumerable:!0},json:{enumerable:!0},text:{enumerable:!0},data:{get:require$$0.deprecate(()=>{},"data doesn't exist, use json(), text(), arrayBuffer(), or body instead","https://github.com/node-fetch/node-fetch/issues/1000 (response)")}});async function consumeBody(c){if(c[INTERNALS$2].disturbed)throw new TypeError(`body used already for: ${c.url}`);if(c[INTERNALS$2].disturbed=!0,c[INTERNALS$2].error)throw c[INTERNALS$2].error;const{body:l}=c;if(l===null||!(l instanceof Stream__default))return require$$6.Buffer.alloc(0);const d=[];let y=0;try{for await(const b of l){if(c.size>0&&y+b.length>c.size){const R=new FetchError$1(`content size at ${c.url} over limit: ${c.size}`,"max-size");throw l.destroy(R),R}y+=b.length,d.push(b);}}catch(b){throw b instanceof FetchBaseError?b:new FetchError$1(`Invalid response body while trying to fetch ${c.url}: ${b.message}`,"system",b)}if(l.readableEnded===!0||l._readableState.ended===!0)try{return d.every(b=>typeof b=="string")?require$$6.Buffer.from(d.join("")):require$$6.Buffer.concat(d,y)}catch(b){throw new FetchError$1(`Could not create Buffer from response body for ${c.url}: ${b.message}`,"system",b)}else throw new FetchError$1(`Premature close of server response while trying to fetch ${c.url}`)}u(consumeBody,"consumeBody");const clone=u((c,l)=>{let d,y,{body:b}=c[INTERNALS$2];if(c.bodyUsed)throw new Error("cannot clone body after it is used");return b instanceof Stream__default&&typeof b.getBoundary!="function"&&(d=new Stream.PassThrough({highWaterMark:l}),y=new Stream.PassThrough({highWaterMark:l}),b.pipe(d),b.pipe(y),c[INTERNALS$2].stream=d,b=y),b},"clone"),getNonSpecFormDataBoundary=require$$0.deprecate(c=>c.getBoundary(),"form-data doesn't follow the spec and requires special treatment. Use alternative package","https://github.com/node-fetch/node-fetch/issues/1167"),extractContentType=u((c,l)=>c===null?null:typeof c=="string"?"text/plain;charset=UTF-8":isURLSearchParameters(c)?"application/x-www-form-urlencoded;charset=UTF-8":isBlob(c)?c.type||null:require$$6.Buffer.isBuffer(c)||require$$0.types.isAnyArrayBuffer(c)||ArrayBuffer.isView(c)?null:c instanceof FormData$1?`multipart/form-data; boundary=${l[INTERNALS$2].boundary}`:c&&typeof c.getBoundary=="function"?`multipart/form-data;boundary=${getNonSpecFormDataBoundary(c)}`:c instanceof Stream__default?null:"text/plain;charset=UTF-8","extractContentType"),getTotalBytes=u(c=>{const{body:l}=c[INTERNALS$2];return l===null?0:isBlob(l)?l.size:require$$6.Buffer.isBuffer(l)?l.length:l&&typeof l.getLengthSync=="function"&&l.hasKnownLength&&l.hasKnownLength()?l.getLengthSync():null},"getTotalBytes"),writeToStream=u(async(c,{body:l})=>{l===null?c.end():await pipeline(l,c);},"writeToStream"),validateHeaderName=typeof http__default.validateHeaderName=="function"?http__default.validateHeaderName:c=>{if(!/^[\^`\-\w!#$%&'*+.|~]+$/.test(c)){const l=new TypeError(`Header name must be a valid HTTP token [${c}]`);throw Object.defineProperty(l,"code",{value:"ERR_INVALID_HTTP_TOKEN"}),l}},validateHeaderValue=typeof http__default.validateHeaderValue=="function"?http__default.validateHeaderValue:(c,l)=>{if(/[^\t\u0020-\u007E\u0080-\u00FF]/.test(l)){const d=new TypeError(`Invalid character in header content ["${c}"]`);throw Object.defineProperty(d,"code",{value:"ERR_INVALID_CHAR"}),d}},Kt=class Kt extends URLSearchParams{constructor(l){let d=[];if(l instanceof Kt){const y=l.raw();for(const[b,R]of Object.entries(y))d.push(...R.map(w=>[b,w]));}else if(l!=null)if(typeof l=="object"&&!require$$0.types.isBoxedPrimitive(l)){const y=l[Symbol.iterator];if(y==null)d.push(...Object.entries(l));else {if(typeof y!="function")throw new TypeError("Header pairs must be iterable");d=[...l].map(b=>{if(typeof b!="object"||require$$0.types.isBoxedPrimitive(b))throw new TypeError("Each header pair must be an iterable object");return [...b]}).map(b=>{if(b.length!==2)throw new TypeError("Each header pair must be a name/value tuple");return [...b]});}}else throw new TypeError("Failed to construct 'Headers': The provided value is not of type '(sequence<sequence<ByteString>> or record<ByteString, ByteString>)");return d=d.length>0?d.map(([y,b])=>(validateHeaderName(y),validateHeaderValue(y,String(b)),[String(y).toLowerCase(),String(b)])):void 0,super(d),new Proxy(this,{get(y,b,R){switch(b){case"append":case"set":return (w,v)=>(validateHeaderName(w),validateHeaderValue(w,String(v)),URLSearchParams.prototype[b].call(y,String(w).toLowerCase(),String(v)));case"delete":case"has":case"getAll":return w=>(validateHeaderName(w),URLSearchParams.prototype[b].call(y,String(w).toLowerCase()));case"keys":return ()=>(y.sort(),new Set(URLSearchParams.prototype.keys.call(y)).keys());default:return Reflect.get(y,b,R)}}})}get[Symbol.toStringTag](){return this.constructor.name}toString(){return Object.prototype.toString.call(this)}get(l){const d=this.getAll(l);if(d.length===0)return null;let y=d.join(", ");return /^content-encoding$/i.test(l)&&(y=y.toLowerCase()),y}forEach(l,d=void 0){for(const y of this.keys())Reflect.apply(l,d,[this.get(y),y,this]);}*values(){for(const l of this.keys())yield this.get(l);}*entries(){for(const l of this.keys())yield [l,this.get(l)];}[Symbol.iterator](){return this.entries()}raw(){return [...this.keys()].reduce((l,d)=>(l[d]=this.getAll(d),l),{})}[Symbol.for("nodejs.util.inspect.custom")](){return [...this.keys()].reduce((l,d)=>{const y=this.getAll(d);return d==="host"?l[d]=y[0]:l[d]=y.length>1?y:y[0],l},{})}};u(Kt,"Headers");let Headers$2=Kt;Object.defineProperties(Headers$2.prototype,["get","entries","forEach","values"].reduce((c,l)=>(c[l]={enumerable:!0},c),{}));function fromRawHeaders(c=[]){return new Headers$2(c.reduce((l,d,y,b)=>(y%2===0&&l.push(b.slice(y,y+2)),l),[]).filter(([l,d])=>{try{return validateHeaderName(l),validateHeaderValue(l,String(d)),!0}catch{return !1}}))}u(fromRawHeaders,"fromRawHeaders");const redirectStatus=new Set([301,302,303,307,308]),isRedirect=u(c=>redirectStatus.has(c),"isRedirect"),INTERNALS$1=Symbol("Response internals"),De$1=class De extends Body{constructor(l=null,d={}){super(l,d);const y=d.status!=null?d.status:200,b=new Headers$2(d.headers);if(l!==null&&!b.has("Content-Type")){const R=extractContentType(l,this);R&&b.append("Content-Type",R);}this[INTERNALS$1]={type:"default",url:d.url,status:y,statusText:d.statusText||"",headers:b,counter:d.counter,highWaterMark:d.highWaterMark};}get type(){return this[INTERNALS$1].type}get url(){return this[INTERNALS$1].url||""}get status(){return this[INTERNALS$1].status}get ok(){return this[INTERNALS$1].status>=200&&this[INTERNALS$1].status<300}get redirected(){return this[INTERNALS$1].counter>0}get statusText(){return this[INTERNALS$1].statusText}get headers(){return this[INTERNALS$1].headers}get highWaterMark(){return this[INTERNALS$1].highWaterMark}clone(){return new De(clone(this,this.highWaterMark),{type:this.type,url:this.url,status:this.status,statusText:this.statusText,headers:this.headers,ok:this.ok,redirected:this.redirected,size:this.size,highWaterMark:this.highWaterMark})}static redirect(l,d=302){if(!isRedirect(d))throw new RangeError('Failed to execute "redirect" on "response": Invalid status code');return new De(null,{headers:{location:new URL(l).toString()},status:d})}static error(){const l=new De(null,{status:0,statusText:""});return l[INTERNALS$1].type="error",l}static json(l=void 0,d={}){const y=JSON.stringify(l);if(y===void 0)throw new TypeError("data is not JSON serializable");const b=new Headers$2(d&&d.headers);return b.has("content-type")||b.set("content-type","application/json"),new De(y,{...d,headers:b})}get[Symbol.toStringTag](){return "Response"}};u(De$1,"Response");let Response$1=De$1;Object.defineProperties(Response$1.prototype,{type:{enumerable:!0},url:{enumerable:!0},status:{enumerable:!0},ok:{enumerable:!0},redirected:{enumerable:!0},statusText:{enumerable:!0},headers:{enumerable:!0},clone:{enumerable:!0}});const getSearch=u(c=>{if(c.search)return c.search;const l=c.href.length-1,d=c.hash||(c.href[l]==="#"?"#":"");return c.href[l-d.length]==="?"?"?":""},"getSearch");function stripURLForUseAsAReferrer(c,l=!1){return c==null||(c=new URL(c),/^(about|blob|data):$/.test(c.protocol))?"no-referrer":(c.username="",c.password="",c.hash="",l&&(c.pathname="",c.search=""),c)}u(stripURLForUseAsAReferrer,"stripURLForUseAsAReferrer");const ReferrerPolicy=new Set(["","no-referrer","no-referrer-when-downgrade","same-origin","origin","strict-origin","origin-when-cross-origin","strict-origin-when-cross-origin","unsafe-url"]),DEFAULT_REFERRER_POLICY="strict-origin-when-cross-origin";function validateReferrerPolicy(c){if(!ReferrerPolicy.has(c))throw new TypeError(`Invalid referrerPolicy: ${c}`);return c}u(validateReferrerPolicy,"validateReferrerPolicy");function isOriginPotentiallyTrustworthy(c){if(/^(http|ws)s:$/.test(c.protocol))return !0;const l=c.host.replace(/(^\[)|(]$)/g,""),d=require$$4.isIP(l);return d===4&&/^127\./.test(l)||d===6&&/^(((0+:){7})|(::(0+:){0,6}))0*1$/.test(l)?!0:c.host==="localhost"||c.host.endsWith(".localhost")?!1:c.protocol==="file:"}u(isOriginPotentiallyTrustworthy,"isOriginPotentiallyTrustworthy");function isUrlPotentiallyTrustworthy(c){return /^about:(blank|srcdoc)$/.test(c)||c.protocol==="data:"||/^(blob|filesystem):$/.test(c.protocol)?!0:isOriginPotentiallyTrustworthy(c)}u(isUrlPotentiallyTrustworthy,"isUrlPotentiallyTrustworthy");function determineRequestsReferrer(c,{referrerURLCallback:l,referrerOriginCallback:d}={}){if(c.referrer==="no-referrer"||c.referrerPolicy==="")return null;const y=c.referrerPolicy;if(c.referrer==="about:client")return "no-referrer";const b=c.referrer;let R=stripURLForUseAsAReferrer(b),w=stripURLForUseAsAReferrer(b,!0);R.toString().length>4096&&(R=w),l&&(R=l(R)),d&&(w=d(w));const v=new URL(c.url);switch(y){case"no-referrer":return "no-referrer";case"origin":return w;case"unsafe-url":return R;case"strict-origin":return isUrlPotentiallyTrustworthy(R)&&!isUrlPotentiallyTrustworthy(v)?"no-referrer":w.toString();case"strict-origin-when-cross-origin":return R.origin===v.origin?R:isUrlPotentiallyTrustworthy(R)&&!isUrlPotentiallyTrustworthy(v)?"no-referrer":w;case"same-origin":return R.origin===v.origin?R:"no-referrer";case"origin-when-cross-origin":return R.origin===v.origin?R:w;case"no-referrer-when-downgrade":return isUrlPotentiallyTrustworthy(R)&&!isUrlPotentiallyTrustworthy(v)?"no-referrer":R;default:throw new TypeError(`Invalid referrerPolicy: ${y}`)}}u(determineRequestsReferrer,"determineRequestsReferrer");function parseReferrerPolicyFromHeader(c){const l=(c.get("referrer-policy")||"").split(/[,\s]+/);let d="";for(const y of l)y&&ReferrerPolicy.has(y)&&(d=y);return d}u(parseReferrerPolicyFromHeader,"parseReferrerPolicyFromHeader");const INTERNALS=Symbol("Request internals"),isRequest=u(c=>typeof c=="object"&&typeof c[INTERNALS]=="object","isRequest"),doBadDataWarn=require$$0.deprecate(()=>{},".data is not a valid RequestInit property, use .body instead","https://github.com/node-fetch/node-fetch/issues/1000 (request)"),Jt=class Jt extends Body{constructor(l,d={}){let y;if(isRequest(l)?y=new URL(l.url):(y=new URL(l),l={}),y.username!==""||y.password!=="")throw new TypeError(`${y} is an url with embedded credentials.`);let b=d.method||l.method||"GET";if(/^(delete|get|head|options|post|put)$/i.test(b)&&(b=b.toUpperCase()),!isRequest(d)&&"data"in d&&doBadDataWarn(),(d.body!=null||isRequest(l)&&l.body!==null)&&(b==="GET"||b==="HEAD"))throw new TypeError("Request with GET/HEAD method cannot have body");const R=d.body?d.body:isRequest(l)&&l.body!==null?clone(l):null;super(R,{size:d.size||l.size||0});const w=new Headers$2(d.headers||l.headers||{});if(R!==null&&!w.has("Content-Type")){const B=extractContentType(R,this);B&&w.set("Content-Type",B);}let v=isRequest(l)?l.signal:null;if("signal"in d&&(v=d.signal),v!=null&&!isAbortSignal(v))throw new TypeError("Expected signal to be an instanceof AbortSignal or EventTarget");let I=d.referrer==null?l.referrer:d.referrer;if(I==="")I="no-referrer";else if(I){const B=new URL(I);I=/^about:(\/\/)?client$/.test(B)?"client":B;}else I=void 0;this[INTERNALS]={method:b,redirect:d.redirect||l.redirect||"follow",headers:w,parsedURL:y,signal:v,referrer:I},this.follow=d.follow===void 0?l.follow===void 0?20:l.follow:d.follow,this.compress=d.compress===void 0?l.compress===void 0?!0:l.compress:d.compress,this.counter=d.counter||l.counter||0,this.agent=d.agent||l.agent,this.highWaterMark=d.highWaterMark||l.highWaterMark||16384,this.insecureHTTPParser=d.insecureHTTPParser||l.insecureHTTPParser||!1,this.referrerPolicy=d.referrerPolicy||l.referrerPolicy||"";}get method(){return this[INTERNALS].method}get url(){return require$$1.format(this[INTERNALS].parsedURL)}get headers(){return this[INTERNALS].headers}get redirect(){return this[INTERNALS].redirect}get signal(){return this[INTERNALS].signal}get referrer(){if(this[INTERNALS].referrer==="no-referrer")return "";if(this[INTERNALS].referrer==="client")return "about:client";if(this[INTERNALS].referrer)return this[INTERNALS].referrer.toString()}get referrerPolicy(){return this[INTERNALS].referrerPolicy}set referrerPolicy(l){this[INTERNALS].referrerPolicy=validateReferrerPolicy(l);}clone(){return new Jt(this)}get[Symbol.toStringTag](){return "Request"}};u(Jt,"Request");let Request$1=Jt;Object.defineProperties(Request$1.prototype,{method:{enumerable:!0},url:{enumerable:!0},headers:{enumerable:!0},redirect:{enumerable:!0},clone:{enumerable:!0},signal:{enumerable:!0},referrer:{enumerable:!0},referrerPolicy:{enumerable:!0}});const getNodeRequestOptions=u(c=>{const{parsedURL:l}=c[INTERNALS],d=new Headers$2(c[INTERNALS].headers);d.has("Accept")||d.set("Accept","*/*");let y=null;if(c.body===null&&/^(post|put)$/i.test(c.method)&&(y="0"),c.body!==null){const v=getTotalBytes(c);typeof v=="number"&&!Number.isNaN(v)&&(y=String(v));}y&&d.set("Content-Length",y),c.referrerPolicy===""&&(c.referrerPolicy=DEFAULT_REFERRER_POLICY),c.referrer&&c.referrer!=="no-referrer"?c[INTERNALS].referrer=determineRequestsReferrer(c):c[INTERNALS].referrer="no-referrer",c[INTERNALS].referrer instanceof URL&&d.set("Referer",c.referrer),d.has("User-Agent")||d.set("User-Agent","node-fetch"),c.compress&&!d.has("Accept-Encoding")&&d.set("Accept-Encoding","gzip, deflate, br");let{agent:b}=c;typeof b=="function"&&(b=b(l));const R=getSearch(l),w={path:l.pathname+R,method:c.method,headers:d[Symbol.for("nodejs.util.inspect.custom")](),insecureHTTPParser:c.insecureHTTPParser,agent:b};return {parsedURL:l,options:w}},"getNodeRequestOptions"),sn$1=class sn extends FetchBaseError{constructor(l,d="aborted"){super(l,d);}};u(sn$1,"AbortError");let AbortError=sn$1;/*! node-domexception. MIT License. Jimmy Wärting <https://jimmy.warting.se/opensource> */if(!globalThis.DOMException)try{const{MessageChannel:c}=require("worker_threads"),l=new c().port1,d=new ArrayBuffer;l.postMessage(d,[d,d]);}catch(c){c.constructor.name==="DOMException"&&(globalThis.DOMException=c.constructor);}var nodeDomexception=globalThis.DOMException;const DOMException=_commonjsHelpers.getDefaultExportFromCjs(nodeDomexception),{stat}=node_fs.promises,blobFromSync=u((c,l)=>fromBlob(node_fs.statSync(c),c,l),"blobFromSync"),blobFrom=u((c,l)=>stat(c).then(d=>fromBlob(d,c,l)),"blobFrom"),fileFrom=u((c,l)=>stat(c).then(d=>fromFile(d,c,l)),"fileFrom"),fileFromSync=u((c,l)=>fromFile(node_fs.statSync(c),c,l),"fileFromSync"),fromBlob=u((c,l,d="")=>new r$1([new BlobDataItem({path:l,size:c.size,lastModified:c.mtimeMs,start:0})],{type:d}),"fromBlob"),fromFile=u((c,l,d="")=>new File$1([new BlobDataItem({path:l,size:c.size,lastModified:c.mtimeMs,start:0})],node_path.basename(l),{type:d,lastModified:c.mtimeMs}),"fromFile"),Xt=class Xt{constructor(l){ye(this,Me$2,void 0);ye(this,xe$1,void 0);ne$1(this,Me$2,l.path),ne$1(this,xe$1,l.start),this.size=l.size,this.lastModified=l.lastModified;}slice(l,d){return new Xt({path:D$1(this,Me$2),lastModified:this.lastModified,size:d-l,start:D$1(this,xe$1)+l})}async*stream(){const{mtimeMs:l}=await stat(D$1(this,Me$2));if(l>this.lastModified)throw new DOMException("The requested file could not be read, typically due to permission problems that have occurred after a reference to a file was acquired.","NotReadableError");yield*node_fs.createReadStream(D$1(this,Me$2),{start:D$1(this,xe$1),end:D$1(this,xe$1)+this.size-1});}get[Symbol.toStringTag](){return "Blob"}};Me$2=new WeakMap,xe$1=new WeakMap,u(Xt,"BlobDataItem");let BlobDataItem=Xt;const supportedSchemas=new Set(["data:","http:","https:"]);async function fetch$1(c,l){return new Promise((d,y)=>{const b=new Request$1(c,l),{parsedURL:R,options:w}=getNodeRequestOptions(b);if(!supportedSchemas.has(R.protocol))throw new TypeError(`node-fetch cannot load ${c}. URL scheme "${R.protocol.replace(/:$/,"")}" is not supported.`);if(R.protocol==="data:"){const E=dataUriToBuffer(b.url),K=new Response$1(E,{headers:{"Content-Type":E.typeFull}});d(K);return}const v=(R.protocol==="https:"?https__default:http__default).request,{signal:I}=b;let B=null;const F=u(()=>{const E=new AbortError("The operation was aborted.");y(E),b.body&&b.body instanceof Stream__default.Readable&&b.body.destroy(E),!(!B||!B.body)&&B.body.emit("error",E);},"abort");if(I&&I.aborted){F();return}const k=u(()=>{F(),$();},"abortAndFinalize"),T=v(R.toString(),w);I&&I.addEventListener("abort",k);const $=u(()=>{T.abort(),I&&I.removeEventListener("abort",k);},"finalize");T.on("error",E=>{y(new FetchError$1(`request to ${b.url} failed, reason: ${E.message}`,"system",E)),$();}),fixResponseChunkedTransferBadEnding(T,E=>{B&&B.body&&B.body.destroy(E);}),process.version<"v14"&&T.on("socket",E=>{let K;E.prependListener("end",()=>{K=E._eventsCount;}),E.prependListener("close",U=>{if(B&&K<E._eventsCount&&!U){const N=new Error("Premature close");N.code="ERR_STREAM_PREMATURE_CLOSE",B.body.emit("error",N);}});}),T.on("response",E=>{T.setTimeout(0);const K=fromRawHeaders(E.rawHeaders);if(isRedirect(E.statusCode)){const M=K.get("Location");let H=null;try{H=M===null?null:new URL(M,b.url);}catch{if(b.redirect!=="manual"){y(new FetchError$1(`uri requested responds with an invalid redirect URL: ${M}`,"invalid-redirect")),$();return}}switch(b.redirect){case"error":y(new FetchError$1(`uri requested responds with a redirect, redirect mode is set to error: ${b.url}`,"no-redirect")),$();return;case"manual":break;case"follow":{if(H===null)break;if(b.counter>=b.follow){y(new FetchError$1(`maximum redirect reached at: ${b.url}`,"max-redirect")),$();return}const G={headers:new Headers$2(b.headers),follow:b.follow,counter:b.counter+1,agent:b.agent,compress:b.compress,method:b.method,body:clone(b),signal:b.signal,size:b.size,referrer:b.referrer,referrerPolicy:b.referrerPolicy};if(!isDomainOrSubdomain(b.url,H)||!isSameProtocol(b.url,H))for(const wt of ["authorization","www-authenticate","cookie","cookie2"])G.headers.delete(wt);if(E.statusCode!==303&&b.body&&l.body instanceof Stream__default.Readable){y(new FetchError$1("Cannot follow redirect with body being a readable stream","unsupported-redirect")),$();return}(E.statusCode===303||(E.statusCode===301||E.statusCode===302)&&b.method==="POST")&&(G.method="GET",G.body=void 0,G.headers.delete("content-length"));const Q=parseReferrerPolicyFromHeader(K);Q&&(G.referrerPolicy=Q),d(fetch$1(new Request$1(H,G))),$();return}default:return y(new TypeError(`Redirect option '${b.redirect}' is not a valid value of RequestRedirect`))}}I&&E.once("end",()=>{I.removeEventListener("abort",k);});let U=Stream.pipeline(E,new Stream.PassThrough,M=>{M&&y(M);});process.version<"v12.10"&&E.on("aborted",k);const N={url:b.url,status:E.statusCode,statusText:E.statusMessage,headers:K,size:b.size,counter:b.counter,highWaterMark:b.highWaterMark},J=K.get("Content-Encoding");if(!b.compress||b.method==="HEAD"||J===null||E.statusCode===204||E.statusCode===304){B=new Response$1(U,N),d(B);return}const ge={flush:zlib__default.Z_SYNC_FLUSH,finishFlush:zlib__default.Z_SYNC_FLUSH};if(J==="gzip"||J==="x-gzip"){U=Stream.pipeline(U,zlib__default.createGunzip(ge),M=>{M&&y(M);}),B=new Response$1(U,N),d(B);return}if(J==="deflate"||J==="x-deflate"){const M=Stream.pipeline(E,new Stream.PassThrough,H=>{H&&y(H);});M.once("data",H=>{(H[0]&15)===8?U=Stream.pipeline(U,zlib__default.createInflate(),G=>{G&&y(G);}):U=Stream.pipeline(U,zlib__default.createInflateRaw(),G=>{G&&y(G);}),B=new Response$1(U,N),d(B);}),M.once("end",()=>{B||(B=new Response$1(U,N),d(B));});return}if(J==="br"){U=Stream.pipeline(U,zlib__default.createBrotliDecompress(),M=>{M&&y(M);}),B=new Response$1(U,N),d(B);return}B=new Response$1(U,N),d(B);}),writeToStream(T,b).catch(y);})}u(fetch$1,"fetch$1");function fixResponseChunkedTransferBadEnding(c,l){const d=require$$6.Buffer.from(`0\r
\r
`);let y=!1,b=!1,R;c.on("response",w=>{const{headers:v}=w;y=v["transfer-encoding"]==="chunked"&&!v["content-length"];}),c.on("socket",w=>{const v=u(()=>{if(y&&!b){const B=new Error("Premature close");B.code="ERR_STREAM_PREMATURE_CLOSE",l(B);}},"onSocketClose"),I=u(B=>{b=require$$6.Buffer.compare(B.slice(-5),d)===0,!b&&R&&(b=require$$6.Buffer.compare(R.slice(-3),d.slice(0,3))===0&&require$$6.Buffer.compare(B.slice(-2),d.slice(3))===0),R=B;},"onData");w.prependListener("close",v),w.on("data",I),c.on("close",()=>{w.removeListener("close",v),w.removeListener("data",I);});});}u(fixResponseChunkedTransferBadEnding,"fixResponseChunkedTransferBadEnding");const privateData=new WeakMap,wrappers=new WeakMap;function pd(c){const l=privateData.get(c);return console.assert(l!=null,"'this' is expected an Event object, but got",c),l}u(pd,"pd");function setCancelFlag(c){if(c.passiveListener!=null){typeof console<"u"&&typeof console.error=="function"&&console.error("Unable to preventDefault inside passive event listener invocation.",c.passiveListener);return}c.event.cancelable&&(c.canceled=!0,typeof c.event.preventDefault=="function"&&c.event.preventDefault());}u(setCancelFlag,"setCancelFlag");function Event(c,l){privateData.set(this,{eventTarget:c,event:l,eventPhase:2,currentTarget:c,canceled:!1,stopped:!1,immediateStopped:!1,passiveListener:null,timeStamp:l.timeStamp||Date.now()}),Object.defineProperty(this,"isTrusted",{value:!1,enumerable:!0});const d=Object.keys(l);for(let y=0;y<d.length;++y){const b=d[y];b in this||Object.defineProperty(this,b,defineRedirectDescriptor(b));}}u(Event,"Event"),Event.prototype={get type(){return pd(this).event.type},get target(){return pd(this).eventTarget},get currentTarget(){return pd(this).currentTarget},composedPath(){const c=pd(this).currentTarget;return c==null?[]:[c]},get NONE(){return 0},get CAPTURING_PHASE(){return 1},get AT_TARGET(){return 2},get BUBBLING_PHASE(){return 3},get eventPhase(){return pd(this).eventPhase},stopPropagation(){const c=pd(this);c.stopped=!0,typeof c.event.stopPropagation=="function"&&c.event.stopPropagation();},stopImmediatePropagation(){const c=pd(this);c.stopped=!0,c.immediateStopped=!0,typeof c.event.stopImmediatePropagation=="function"&&c.event.stopImmediatePropagation();},get bubbles(){return !!pd(this).event.bubbles},get cancelable(){return !!pd(this).event.cancelable},preventDefault(){setCancelFlag(pd(this));},get defaultPrevented(){return pd(this).canceled},get composed(){return !!pd(this).event.composed},get timeStamp(){return pd(this).timeStamp},get srcElement(){return pd(this).eventTarget},get cancelBubble(){return pd(this).stopped},set cancelBubble(c){if(!c)return;const l=pd(this);l.stopped=!0,typeof l.event.cancelBubble=="boolean"&&(l.event.cancelBubble=!0);},get returnValue(){return !pd(this).canceled},set returnValue(c){c||setCancelFlag(pd(this));},initEvent(){}},Object.defineProperty(Event.prototype,"constructor",{value:Event,configurable:!0,writable:!0});function defineRedirectDescriptor(c){return {get(){return pd(this).event[c]},set(l){pd(this).event[c]=l;},configurable:!0,enumerable:!0}}u(defineRedirectDescriptor,"defineRedirectDescriptor");function defineCallDescriptor(c){return {value(){const l=pd(this).event;return l[c].apply(l,arguments)},configurable:!0,enumerable:!0}}u(defineCallDescriptor,"defineCallDescriptor");function defineWrapper(c,l){const d=Object.keys(l);if(d.length===0)return c;function y(b,R){c.call(this,b,R);}u(y,"CustomEvent"),y.prototype=Object.create(c.prototype,{constructor:{value:y,configurable:!0,writable:!0}});for(let b=0;b<d.length;++b){const R=d[b];if(!(R in c.prototype)){const v=typeof Object.getOwnPropertyDescriptor(l,R).value=="function";Object.defineProperty(y.prototype,R,v?defineCallDescriptor(R):defineRedirectDescriptor(R));}}return y}u(defineWrapper,"defineWrapper");function getWrapper(c){if(c==null||c===Object.prototype)return Event;let l=wrappers.get(c);return l==null&&(l=defineWrapper(getWrapper(Object.getPrototypeOf(c)),c),wrappers.set(c,l)),l}u(getWrapper,"getWrapper");function wrapEvent(c,l){const d=getWrapper(Object.getPrototypeOf(l));return new d(c,l)}u(wrapEvent,"wrapEvent");function isStopped(c){return pd(c).immediateStopped}u(isStopped,"isStopped");function setEventPhase(c,l){pd(c).eventPhase=l;}u(setEventPhase,"setEventPhase");function setCurrentTarget(c,l){pd(c).currentTarget=l;}u(setCurrentTarget,"setCurrentTarget");function setPassiveListener(c,l){pd(c).passiveListener=l;}u(setPassiveListener,"setPassiveListener");const listenersMap=new WeakMap,CAPTURE=1,BUBBLE=2,ATTRIBUTE=3;function isObject(c){return c!==null&&typeof c=="object"}u(isObject,"isObject");function getListeners(c){const l=listenersMap.get(c);if(l==null)throw new TypeError("'this' is expected an EventTarget object, but got another value.");return l}u(getListeners,"getListeners");function defineEventAttributeDescriptor(c){return {get(){let d=getListeners(this).get(c);for(;d!=null;){if(d.listenerType===ATTRIBUTE)return d.listener;d=d.next;}return null},set(l){typeof l!="function"&&!isObject(l)&&(l=null);const d=getListeners(this);let y=null,b=d.get(c);for(;b!=null;)b.listenerType===ATTRIBUTE?y!==null?y.next=b.next:b.next!==null?d.set(c,b.next):d.delete(c):y=b,b=b.next;if(l!==null){const R={listener:l,listenerType:ATTRIBUTE,passive:!1,once:!1,next:null};y===null?d.set(c,R):y.next=R;}},configurable:!0,enumerable:!0}}u(defineEventAttributeDescriptor,"defineEventAttributeDescriptor");function defineEventAttribute(c,l){Object.defineProperty(c,`on${l}`,defineEventAttributeDescriptor(l));}u(defineEventAttribute,"defineEventAttribute");function defineCustomEventTarget(c){function l(){EventTarget.call(this);}u(l,"CustomEventTarget"),l.prototype=Object.create(EventTarget.prototype,{constructor:{value:l,configurable:!0,writable:!0}});for(let d=0;d<c.length;++d)defineEventAttribute(l.prototype,c[d]);return l}u(defineCustomEventTarget,"defineCustomEventTarget");function EventTarget(){if(this instanceof EventTarget){listenersMap.set(this,new Map);return}if(arguments.length===1&&Array.isArray(arguments[0]))return defineCustomEventTarget(arguments[0]);if(arguments.length>0){const c=new Array(arguments.length);for(let l=0;l<arguments.length;++l)c[l]=arguments[l];return defineCustomEventTarget(c)}throw new TypeError("Cannot call a class as a function")}u(EventTarget,"EventTarget"),EventTarget.prototype={addEventListener(c,l,d){if(l==null)return;if(typeof l!="function"&&!isObject(l))throw new TypeError("'listener' should be a function or an object.");const y=getListeners(this),b=isObject(d),w=(b?!!d.capture:!!d)?CAPTURE:BUBBLE,v={listener:l,listenerType:w,passive:b&&!!d.passive,once:b&&!!d.once,next:null};let I=y.get(c);if(I===void 0){y.set(c,v);return}let B=null;for(;I!=null;){if(I.listener===l&&I.listenerType===w)return;B=I,I=I.next;}B.next=v;},removeEventListener(c,l,d){if(l==null)return;const y=getListeners(this),R=(isObject(d)?!!d.capture:!!d)?CAPTURE:BUBBLE;let w=null,v=y.get(c);for(;v!=null;){if(v.listener===l&&v.listenerType===R){w!==null?w.next=v.next:v.next!==null?y.set(c,v.next):y.delete(c);return}w=v,v=v.next;}},dispatchEvent(c){if(c==null||typeof c.type!="string")throw new TypeError('"event.type" should be a string.');const l=getListeners(this),d=c.type;let y=l.get(d);if(y==null)return !0;const b=wrapEvent(this,c);let R=null;for(;y!=null;){if(y.once?R!==null?R.next=y.next:y.next!==null?l.set(d,y.next):l.delete(d):R=y,setPassiveListener(b,y.passive?y.listener:null),typeof y.listener=="function")try{y.listener.call(this,b);}catch(w){typeof console<"u"&&typeof console.error=="function"&&console.error(w);}else y.listenerType!==ATTRIBUTE&&typeof y.listener.handleEvent=="function"&&y.listener.handleEvent(b);if(isStopped(b))break;y=y.next;}return setPassiveListener(b,null),setEventPhase(b,0),setCurrentTarget(b,null),!b.defaultPrevented}},Object.defineProperty(EventTarget.prototype,"constructor",{value:EventTarget,configurable:!0,writable:!0});const an$1=class an extends EventTarget{constructor(){throw super(),new TypeError("AbortSignal cannot be constructed directly")}get aborted(){const l=abortedFlags.get(this);if(typeof l!="boolean")throw new TypeError(`Expected 'this' to be an 'AbortSignal' object, but got ${this===null?"null":typeof this}`);return l}};u(an$1,"AbortSignal");let AbortSignal=an$1;defineEventAttribute(AbortSignal.prototype,"abort");function createAbortSignal(){const c=Object.create(AbortSignal.prototype);return EventTarget.call(c),abortedFlags.set(c,!1),c}u(createAbortSignal,"createAbortSignal");function abortSignal(c){abortedFlags.get(c)===!1&&(abortedFlags.set(c,!0),c.dispatchEvent({type:"abort"}));}u(abortSignal,"abortSignal");const abortedFlags=new WeakMap;Object.defineProperties(AbortSignal.prototype,{aborted:{enumerable:!0}}),typeof Symbol=="function"&&typeof Symbol.toStringTag=="symbol"&&Object.defineProperty(AbortSignal.prototype,Symbol.toStringTag,{configurable:!0,value:"AbortSignal"});let AbortController$1$1=(St=class{constructor(){signals.set(this,createAbortSignal());}get signal(){return getSignal(this)}abort(){abortSignal(getSignal(this));}},u(St,"AbortController"),St);const signals=new WeakMap;function getSignal(c){const l=signals.get(c);if(l==null)throw new TypeError(`Expected 'this' to be an 'AbortController' object, but got ${c===null?"null":typeof c}`);return l}u(getSignal,"getSignal"),Object.defineProperties(AbortController$1$1.prototype,{signal:{enumerable:!0},abort:{enumerable:!0}}),typeof Symbol=="function"&&typeof Symbol.toStringTag=="symbol"&&Object.defineProperty(AbortController$1$1.prototype,Symbol.toStringTag,{configurable:!0,value:"AbortController"});var t$2=Object.defineProperty,e$2=u((c,l)=>t$2(c,"name",{value:l,configurable:!0}),"e");const fetch$2=fetch$1;s$1();function s$1(){!globalThis.process?.versions?.node&&!globalThis.process?.env.DISABLE_NODE_FETCH_NATIVE_WARN&&console.warn("[node-fetch-native] Node.js compatible build of `node-fetch-native` is being used in a non-Node.js environment. Please make sure you are using proper export conditions or report this issue to https://github.com/unjs/node-fetch-native. You can set `process.env.DISABLE_NODE_FETCH_NATIVE_WARN` to disable this warning.");}u(s$1,"s"),e$2(s$1,"checkNodeEnvironment"),node$1.AbortController=AbortController$1$1,node$1.AbortError=AbortError,node$1.Blob=r$1,node$1.FetchError=FetchError$1,node$1.File=File$1,node$1.FormData=FormData$1,node$1.Headers=Headers$2,node$1.Request=Request$1,node$1.Response=Response$1,node$1.blobFrom=blobFrom,node$1.blobFromSync=blobFromSync,node$1.default=fetch$2,node$1.fetch=fetch$2,node$1.fileFrom=fileFrom,node$1.fileFromSync=fileFromSync,node$1.isRedirect=isRedirect;

var n=Object.defineProperty;var i$2=(r,o)=>n(r,"name",{value:o,configurable:!0});const node=node$1;var t=Object.defineProperty,a=i$2((r,o)=>t(r,"name",{value:o,configurable:!0}),"a");function e(r,o){if(!(r in globalThis))try{globalThis[r]=o;}catch{}}i$2(e,"e"),a(e,"polyfill"),e("fetch",node.fetch),e("Blob",node.Blob),e("File",node.File),e("FormData",node.FormData),e("Headers",node.Headers),e("Request",node.Request),e("Response",node.Response),e("AbortController",node.AbortController);

const suspectProtoRx = /"(?:_|\\u0{2}5[Ff]){2}(?:p|\\u0{2}70)(?:r|\\u0{2}72)(?:o|\\u0{2}6[Ff])(?:t|\\u0{2}74)(?:o|\\u0{2}6[Ff])(?:_|\\u0{2}5[Ff]){2}"\s*:/;
const suspectConstructorRx = /"(?:c|\\u0063)(?:o|\\u006[Ff])(?:n|\\u006[Ee])(?:s|\\u0073)(?:t|\\u0074)(?:r|\\u0072)(?:u|\\u0075)(?:c|\\u0063)(?:t|\\u0074)(?:o|\\u006[Ff])(?:r|\\u0072)"\s*:/;
const JsonSigRx = /^\s*["[{]|^\s*-?\d{1,16}(\.\d{1,17})?([Ee][+-]?\d+)?\s*$/;
function jsonParseTransform(key, value) {
  if (key === "__proto__" || key === "constructor" && value && typeof value === "object" && "prototype" in value) {
    warnKeyDropped(key);
    return;
  }
  return value;
}
function warnKeyDropped(key) {
  console.warn(`[destr] Dropping "${key}" key to prevent prototype pollution.`);
}
function destr(value, options = {}) {
  if (typeof value !== "string") {
    return value;
  }
  const _value = value.trim();
  if (
    // eslint-disable-next-line unicorn/prefer-at
    value[0] === '"' && value.endsWith('"') && !value.includes("\\")
  ) {
    return _value.slice(1, -1);
  }
  if (_value.length <= 9) {
    const _lval = _value.toLowerCase();
    if (_lval === "true") {
      return true;
    }
    if (_lval === "false") {
      return false;
    }
    if (_lval === "undefined") {
      return void 0;
    }
    if (_lval === "null") {
      return null;
    }
    if (_lval === "nan") {
      return Number.NaN;
    }
    if (_lval === "infinity") {
      return Number.POSITIVE_INFINITY;
    }
    if (_lval === "-infinity") {
      return Number.NEGATIVE_INFINITY;
    }
  }
  if (!JsonSigRx.test(value)) {
    if (options.strict) {
      throw new SyntaxError("[destr] Invalid JSON");
    }
    return value;
  }
  try {
    if (suspectProtoRx.test(value) || suspectConstructorRx.test(value)) {
      if (options.strict) {
        throw new Error("[destr] Possible prototype pollution");
      }
      return JSON.parse(value, jsonParseTransform);
    }
    return JSON.parse(value);
  } catch (error) {
    if (options.strict) {
      throw error;
    }
    return value;
  }
}

const HASH_RE = /#/g;
const AMPERSAND_RE = /&/g;
const SLASH_RE = /\//g;
const EQUAL_RE = /=/g;
const PLUS_RE = /\+/g;
const ENC_CARET_RE = /%5e/gi;
const ENC_BACKTICK_RE = /%60/gi;
const ENC_PIPE_RE = /%7c/gi;
const ENC_SPACE_RE = /%20/gi;
const ENC_SLASH_RE = /%2f/gi;
function encode(text) {
  return encodeURI("" + text).replace(ENC_PIPE_RE, "|");
}
function encodeQueryValue(input) {
  return encode(typeof input === "string" ? input : JSON.stringify(input)).replace(PLUS_RE, "%2B").replace(ENC_SPACE_RE, "+").replace(HASH_RE, "%23").replace(AMPERSAND_RE, "%26").replace(ENC_BACKTICK_RE, "`").replace(ENC_CARET_RE, "^").replace(SLASH_RE, "%2F");
}
function encodeQueryKey(text) {
  return encodeQueryValue(text).replace(EQUAL_RE, "%3D");
}
function decode(text = "") {
  try {
    return decodeURIComponent("" + text);
  } catch {
    return "" + text;
  }
}
function decodePath(text) {
  return decode(text.replace(ENC_SLASH_RE, "%252F"));
}
function decodeQueryKey(text) {
  return decode(text.replace(PLUS_RE, " "));
}
function decodeQueryValue(text) {
  return decode(text.replace(PLUS_RE, " "));
}

function parseQuery(parametersString = "") {
  const object = {};
  if (parametersString[0] === "?") {
    parametersString = parametersString.slice(1);
  }
  for (const parameter of parametersString.split("&")) {
    const s = parameter.match(/([^=]+)=?(.*)/) || [];
    if (s.length < 2) {
      continue;
    }
    const key = decodeQueryKey(s[1]);
    if (key === "__proto__" || key === "constructor") {
      continue;
    }
    const value = decodeQueryValue(s[2] || "");
    if (object[key] === void 0) {
      object[key] = value;
    } else if (Array.isArray(object[key])) {
      object[key].push(value);
    } else {
      object[key] = [object[key], value];
    }
  }
  return object;
}
function encodeQueryItem(key, value) {
  if (typeof value === "number" || typeof value === "boolean") {
    value = String(value);
  }
  if (!value) {
    return encodeQueryKey(key);
  }
  if (Array.isArray(value)) {
    return value.map((_value) => `${encodeQueryKey(key)}=${encodeQueryValue(_value)}`).join("&");
  }
  return `${encodeQueryKey(key)}=${encodeQueryValue(value)}`;
}
function stringifyQuery(query) {
  return Object.keys(query).filter((k) => query[k] !== void 0).map((k) => encodeQueryItem(k, query[k])).filter(Boolean).join("&");
}

const PROTOCOL_STRICT_REGEX = /^[\s\w\0+.-]{2,}:([/\\]{1,2})/;
const PROTOCOL_REGEX = /^[\s\w\0+.-]{2,}:([/\\]{2})?/;
const PROTOCOL_RELATIVE_REGEX = /^([/\\]\s*){2,}[^/\\]/;
const JOIN_LEADING_SLASH_RE = /^\.?\//;
function hasProtocol(inputString, opts = {}) {
  if (typeof opts === "boolean") {
    opts = { acceptRelative: opts };
  }
  if (opts.strict) {
    return PROTOCOL_STRICT_REGEX.test(inputString);
  }
  return PROTOCOL_REGEX.test(inputString) || (opts.acceptRelative ? PROTOCOL_RELATIVE_REGEX.test(inputString) : false);
}
function hasTrailingSlash(input = "", respectQueryAndFragment) {
  {
    return input.endsWith("/");
  }
}
function withoutTrailingSlash(input = "", respectQueryAndFragment) {
  {
    return (hasTrailingSlash(input) ? input.slice(0, -1) : input) || "/";
  }
}
function withTrailingSlash(input = "", respectQueryAndFragment) {
  {
    return input.endsWith("/") ? input : input + "/";
  }
}
function hasLeadingSlash(input = "") {
  return input.startsWith("/");
}
function withLeadingSlash(input = "") {
  return hasLeadingSlash(input) ? input : "/" + input;
}
function withBase(input, base) {
  if (isEmptyURL(base) || hasProtocol(input)) {
    return input;
  }
  const _base = withoutTrailingSlash(base);
  if (input.startsWith(_base)) {
    return input;
  }
  return joinURL(_base, input);
}
function withoutBase(input, base) {
  if (isEmptyURL(base)) {
    return input;
  }
  const _base = withoutTrailingSlash(base);
  if (!input.startsWith(_base)) {
    return input;
  }
  const trimmed = input.slice(_base.length);
  return trimmed[0] === "/" ? trimmed : "/" + trimmed;
}
function withQuery(input, query) {
  const parsed = parseURL(input);
  const mergedQuery = { ...parseQuery(parsed.search), ...query };
  parsed.search = stringifyQuery(mergedQuery);
  return stringifyParsedURL(parsed);
}
function getQuery(input) {
  return parseQuery(parseURL(input).search);
}
function isEmptyURL(url) {
  return !url || url === "/";
}
function isNonEmptyURL(url) {
  return url && url !== "/";
}
function joinURL(base, ...input) {
  let url = base || "";
  for (const segment of input.filter((url2) => isNonEmptyURL(url2))) {
    if (url) {
      const _segment = segment.replace(JOIN_LEADING_SLASH_RE, "");
      url = withTrailingSlash(url) + _segment;
    } else {
      url = segment;
    }
  }
  return url;
}

const protocolRelative = Symbol.for("ufo:protocolRelative");
function parseURL(input = "", defaultProto) {
  const _specialProtoMatch = input.match(
    /^[\s\0]*(blob:|data:|javascript:|vbscript:)(.*)/i
  );
  if (_specialProtoMatch) {
    const [, _proto, _pathname = ""] = _specialProtoMatch;
    return {
      protocol: _proto.toLowerCase(),
      pathname: _pathname,
      href: _proto + _pathname,
      auth: "",
      host: "",
      search: "",
      hash: ""
    };
  }
  if (!hasProtocol(input, { acceptRelative: true })) {
    return defaultProto ? parseURL(defaultProto + input) : parsePath(input);
  }
  const [, protocol = "", auth, hostAndPath = ""] = input.replace(/\\/g, "/").match(/^[\s\0]*([\w+.-]{2,}:)?\/\/([^/@]+@)?(.*)/) || [];
  let [, host = "", path = ""] = hostAndPath.match(/([^#/?]*)(.*)?/) || [];
  if (protocol === "file:") {
    path = path.replace(/\/(?=[A-Za-z]:)/, "");
  }
  const { pathname, search, hash } = parsePath(path);
  return {
    protocol: protocol.toLowerCase(),
    auth: auth ? auth.slice(0, Math.max(0, auth.length - 1)) : "",
    host,
    pathname,
    search,
    hash,
    [protocolRelative]: !protocol
  };
}
function parsePath(input = "") {
  const [pathname = "", search = "", hash = ""] = (input.match(/([^#?]*)(\?[^#]*)?(#.*)?/) || []).splice(1);
  return {
    pathname,
    search,
    hash
  };
}
function stringifyParsedURL(parsed) {
  const pathname = parsed.pathname || "";
  const search = parsed.search ? (parsed.search.startsWith("?") ? "" : "?") + parsed.search : "";
  const hash = parsed.hash || "";
  const auth = parsed.auth ? parsed.auth + "@" : "";
  const host = parsed.host || "";
  const proto = parsed.protocol || parsed[protocolRelative] ? (parsed.protocol || "") + "//" : "";
  return proto + auth + host + pathname + search + hash;
}

const defaults = Object.freeze({
  ignoreUnknown: false,
  respectType: false,
  respectFunctionNames: false,
  respectFunctionProperties: false,
  unorderedObjects: true,
  unorderedArrays: false,
  unorderedSets: false,
  excludeKeys: void 0,
  excludeValues: void 0,
  replacer: void 0
});
function objectHash(object, options) {
  if (options) {
    options = { ...defaults, ...options };
  } else {
    options = defaults;
  }
  const hasher = createHasher(options);
  hasher.dispatch(object);
  return hasher.toString();
}
const defaultPrototypesKeys = Object.freeze([
  "prototype",
  "__proto__",
  "constructor"
]);
function createHasher(options) {
  let buff = "";
  let context = /* @__PURE__ */ new Map();
  const write = (str) => {
    buff += str;
  };
  return {
    toString() {
      return buff;
    },
    getContext() {
      return context;
    },
    dispatch(value) {
      if (options.replacer) {
        value = options.replacer(value);
      }
      const type = value === null ? "null" : typeof value;
      return this[type](value);
    },
    object(object) {
      if (object && typeof object.toJSON === "function") {
        return this.object(object.toJSON());
      }
      const objString = Object.prototype.toString.call(object);
      let objType = "";
      const objectLength = objString.length;
      if (objectLength < 10) {
        objType = "unknown:[" + objString + "]";
      } else {
        objType = objString.slice(8, objectLength - 1);
      }
      objType = objType.toLowerCase();
      let objectNumber = null;
      if ((objectNumber = context.get(object)) === void 0) {
        context.set(object, context.size);
      } else {
        return this.dispatch("[CIRCULAR:" + objectNumber + "]");
      }
      if (typeof Buffer !== "undefined" && Buffer.isBuffer && Buffer.isBuffer(object)) {
        write("buffer:");
        return write(object.toString("utf8"));
      }
      if (objType !== "object" && objType !== "function" && objType !== "asyncfunction") {
        if (this[objType]) {
          this[objType](object);
        } else if (!options.ignoreUnknown) {
          this.unkown(object, objType);
        }
      } else {
        let keys = Object.keys(object);
        if (options.unorderedObjects) {
          keys = keys.sort();
        }
        let extraKeys = [];
        if (options.respectType !== false && !isNativeFunction(object)) {
          extraKeys = defaultPrototypesKeys;
        }
        if (options.excludeKeys) {
          keys = keys.filter((key) => {
            return !options.excludeKeys(key);
          });
          extraKeys = extraKeys.filter((key) => {
            return !options.excludeKeys(key);
          });
        }
        write("object:" + (keys.length + extraKeys.length) + ":");
        const dispatchForKey = (key) => {
          this.dispatch(key);
          write(":");
          if (!options.excludeValues) {
            this.dispatch(object[key]);
          }
          write(",");
        };
        for (const key of keys) {
          dispatchForKey(key);
        }
        for (const key of extraKeys) {
          dispatchForKey(key);
        }
      }
    },
    array(arr, unordered) {
      unordered = unordered === void 0 ? options.unorderedArrays !== false : unordered;
      write("array:" + arr.length + ":");
      if (!unordered || arr.length <= 1) {
        for (const entry of arr) {
          this.dispatch(entry);
        }
        return;
      }
      const contextAdditions = /* @__PURE__ */ new Map();
      const entries = arr.map((entry) => {
        const hasher = createHasher(options);
        hasher.dispatch(entry);
        for (const [key, value] of hasher.getContext()) {
          contextAdditions.set(key, value);
        }
        return hasher.toString();
      });
      context = contextAdditions;
      entries.sort();
      return this.array(entries, false);
    },
    date(date) {
      return write("date:" + date.toJSON());
    },
    symbol(sym) {
      return write("symbol:" + sym.toString());
    },
    unkown(value, type) {
      write(type);
      if (!value) {
        return;
      }
      write(":");
      if (value && typeof value.entries === "function") {
        return this.array(
          Array.from(value.entries()),
          true
          /* ordered */
        );
      }
    },
    error(err) {
      return write("error:" + err.toString());
    },
    boolean(bool) {
      return write("bool:" + bool);
    },
    string(string) {
      write("string:" + string.length + ":");
      write(string);
    },
    function(fn) {
      write("fn:");
      if (isNativeFunction(fn)) {
        this.dispatch("[native]");
      } else {
        this.dispatch(fn.toString());
      }
      if (options.respectFunctionNames !== false) {
        this.dispatch("function-name:" + String(fn.name));
      }
      if (options.respectFunctionProperties) {
        this.object(fn);
      }
    },
    number(number) {
      return write("number:" + number);
    },
    xml(xml) {
      return write("xml:" + xml.toString());
    },
    null() {
      return write("Null");
    },
    undefined() {
      return write("Undefined");
    },
    regexp(regex) {
      return write("regex:" + regex.toString());
    },
    uint8array(arr) {
      write("uint8array:");
      return this.dispatch(Array.prototype.slice.call(arr));
    },
    uint8clampedarray(arr) {
      write("uint8clampedarray:");
      return this.dispatch(Array.prototype.slice.call(arr));
    },
    int8array(arr) {
      write("int8array:");
      return this.dispatch(Array.prototype.slice.call(arr));
    },
    uint16array(arr) {
      write("uint16array:");
      return this.dispatch(Array.prototype.slice.call(arr));
    },
    int16array(arr) {
      write("int16array:");
      return this.dispatch(Array.prototype.slice.call(arr));
    },
    uint32array(arr) {
      write("uint32array:");
      return this.dispatch(Array.prototype.slice.call(arr));
    },
    int32array(arr) {
      write("int32array:");
      return this.dispatch(Array.prototype.slice.call(arr));
    },
    float32array(arr) {
      write("float32array:");
      return this.dispatch(Array.prototype.slice.call(arr));
    },
    float64array(arr) {
      write("float64array:");
      return this.dispatch(Array.prototype.slice.call(arr));
    },
    arraybuffer(arr) {
      write("arraybuffer:");
      return this.dispatch(new Uint8Array(arr));
    },
    url(url) {
      return write("url:" + url.toString());
    },
    map(map) {
      write("map:");
      const arr = [...map];
      return this.array(arr, options.unorderedSets !== false);
    },
    set(set) {
      write("set:");
      const arr = [...set];
      return this.array(arr, options.unorderedSets !== false);
    },
    file(file) {
      write("file:");
      return this.dispatch([file.name, file.size, file.type, file.lastModfied]);
    },
    blob() {
      if (options.ignoreUnknown) {
        return write("[blob]");
      }
      throw new Error(
        'Hashing Blob objects is currently not supported\nUse "options.replacer" or "options.ignoreUnknown"\n'
      );
    },
    domwindow() {
      return write("domwindow");
    },
    bigint(number) {
      return write("bigint:" + number.toString());
    },
    /* Node.js standard native objects */
    process() {
      return write("process");
    },
    timer() {
      return write("timer");
    },
    pipe() {
      return write("pipe");
    },
    tcp() {
      return write("tcp");
    },
    udp() {
      return write("udp");
    },
    tty() {
      return write("tty");
    },
    statwatcher() {
      return write("statwatcher");
    },
    securecontext() {
      return write("securecontext");
    },
    connection() {
      return write("connection");
    },
    zlib() {
      return write("zlib");
    },
    context() {
      return write("context");
    },
    nodescript() {
      return write("nodescript");
    },
    httpparser() {
      return write("httpparser");
    },
    dataview() {
      return write("dataview");
    },
    signal() {
      return write("signal");
    },
    fsevent() {
      return write("fsevent");
    },
    tlswrap() {
      return write("tlswrap");
    }
  };
}
const nativeFunc = "[native code] }";
const nativeFuncLength = nativeFunc.length;
function isNativeFunction(f) {
  if (typeof f !== "function") {
    return false;
  }
  return Function.prototype.toString.call(f).slice(-nativeFuncLength) === nativeFunc;
}

var __defProp$1 = Object.defineProperty;
var __defNormalProp$1 = (obj, key, value) => key in obj ? __defProp$1(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField$1 = (obj, key, value) => {
  __defNormalProp$1(obj, typeof key !== "symbol" ? key + "" : key, value);
  return value;
};
class WordArray {
  constructor(words, sigBytes) {
    __publicField$1(this, "words");
    __publicField$1(this, "sigBytes");
    words = this.words = words || [];
    this.sigBytes = sigBytes === void 0 ? words.length * 4 : sigBytes;
  }
  toString(encoder) {
    return (encoder || Hex).stringify(this);
  }
  concat(wordArray) {
    this.clamp();
    if (this.sigBytes % 4) {
      for (let i = 0; i < wordArray.sigBytes; i++) {
        const thatByte = wordArray.words[i >>> 2] >>> 24 - i % 4 * 8 & 255;
        this.words[this.sigBytes + i >>> 2] |= thatByte << 24 - (this.sigBytes + i) % 4 * 8;
      }
    } else {
      for (let j = 0; j < wordArray.sigBytes; j += 4) {
        this.words[this.sigBytes + j >>> 2] = wordArray.words[j >>> 2];
      }
    }
    this.sigBytes += wordArray.sigBytes;
    return this;
  }
  clamp() {
    this.words[this.sigBytes >>> 2] &= 4294967295 << 32 - this.sigBytes % 4 * 8;
    this.words.length = Math.ceil(this.sigBytes / 4);
  }
  clone() {
    return new WordArray([...this.words]);
  }
}
const Hex = {
  stringify(wordArray) {
    const hexChars = [];
    for (let i = 0; i < wordArray.sigBytes; i++) {
      const bite = wordArray.words[i >>> 2] >>> 24 - i % 4 * 8 & 255;
      hexChars.push((bite >>> 4).toString(16), (bite & 15).toString(16));
    }
    return hexChars.join("");
  }
};
const Base64 = {
  stringify(wordArray) {
    const keyStr = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    const base64Chars = [];
    for (let i = 0; i < wordArray.sigBytes; i += 3) {
      const byte1 = wordArray.words[i >>> 2] >>> 24 - i % 4 * 8 & 255;
      const byte2 = wordArray.words[i + 1 >>> 2] >>> 24 - (i + 1) % 4 * 8 & 255;
      const byte3 = wordArray.words[i + 2 >>> 2] >>> 24 - (i + 2) % 4 * 8 & 255;
      const triplet = byte1 << 16 | byte2 << 8 | byte3;
      for (let j = 0; j < 4 && i * 8 + j * 6 < wordArray.sigBytes * 8; j++) {
        base64Chars.push(keyStr.charAt(triplet >>> 6 * (3 - j) & 63));
      }
    }
    return base64Chars.join("");
  }
};
const Latin1 = {
  parse(latin1Str) {
    const latin1StrLength = latin1Str.length;
    const words = [];
    for (let i = 0; i < latin1StrLength; i++) {
      words[i >>> 2] |= (latin1Str.charCodeAt(i) & 255) << 24 - i % 4 * 8;
    }
    return new WordArray(words, latin1StrLength);
  }
};
const Utf8 = {
  parse(utf8Str) {
    return Latin1.parse(unescape(encodeURIComponent(utf8Str)));
  }
};
class BufferedBlockAlgorithm {
  constructor() {
    __publicField$1(this, "_data", new WordArray());
    __publicField$1(this, "_nDataBytes", 0);
    __publicField$1(this, "_minBufferSize", 0);
    __publicField$1(this, "blockSize", 512 / 32);
  }
  reset() {
    this._data = new WordArray();
    this._nDataBytes = 0;
  }
  _append(data) {
    if (typeof data === "string") {
      data = Utf8.parse(data);
    }
    this._data.concat(data);
    this._nDataBytes += data.sigBytes;
  }
  _doProcessBlock(_dataWords, _offset) {
  }
  _process(doFlush) {
    let processedWords;
    let nBlocksReady = this._data.sigBytes / (this.blockSize * 4);
    if (doFlush) {
      nBlocksReady = Math.ceil(nBlocksReady);
    } else {
      nBlocksReady = Math.max((nBlocksReady | 0) - this._minBufferSize, 0);
    }
    const nWordsReady = nBlocksReady * this.blockSize;
    const nBytesReady = Math.min(nWordsReady * 4, this._data.sigBytes);
    if (nWordsReady) {
      for (let offset = 0; offset < nWordsReady; offset += this.blockSize) {
        this._doProcessBlock(this._data.words, offset);
      }
      processedWords = this._data.words.splice(0, nWordsReady);
      this._data.sigBytes -= nBytesReady;
    }
    return new WordArray(processedWords, nBytesReady);
  }
}
class Hasher extends BufferedBlockAlgorithm {
  update(messageUpdate) {
    this._append(messageUpdate);
    this._process();
    return this;
  }
  finalize(messageUpdate) {
    if (messageUpdate) {
      this._append(messageUpdate);
    }
  }
}

var __defProp$3 = Object.defineProperty;
var __defNormalProp$3 = (obj, key, value) => key in obj ? __defProp$3(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField$3 = (obj, key, value) => {
  __defNormalProp$3(obj, key + "" , value);
  return value;
};
const H$3 = [
  1779033703,
  -1150833019,
  1013904242,
  -1521486534,
  1359893119,
  -1694144372,
  528734635,
  1541459225
];
const K$3 = [
  1116352408,
  1899447441,
  -1245643825,
  -373957723,
  961987163,
  1508970993,
  -1841331548,
  -1424204075,
  -670586216,
  310598401,
  607225278,
  1426881987,
  1925078388,
  -2132889090,
  -1680079193,
  -1046744716,
  -459576895,
  -272742522,
  264347078,
  604807628,
  770255983,
  1249150122,
  1555081692,
  1996064986,
  -1740746414,
  -1473132947,
  -1341970488,
  -1084653625,
  -958395405,
  -710438585,
  113926993,
  338241895,
  666307205,
  773529912,
  1294757372,
  1396182291,
  1695183700,
  1986661051,
  -2117940946,
  -1838011259,
  -1564481375,
  -1474664885,
  -1035236496,
  -949202525,
  -778901479,
  -694614492,
  -200395387,
  275423344,
  430227734,
  506948616,
  659060556,
  883997877,
  958139571,
  1322822218,
  1537002063,
  1747873779,
  1955562222,
  2024104815,
  -2067236844,
  -1933114872,
  -1866530822,
  -1538233109,
  -1090935817,
  -965641998
];
const W$3 = [];
class SHA256 extends Hasher {
  constructor() {
    super(...arguments);
    __publicField$3(this, "_hash", new WordArray([...H$3]));
  }
  /**
   * Resets the internal state of the hash object to initial values.
   */
  reset() {
    super.reset();
    this._hash = new WordArray([...H$3]);
  }
  _doProcessBlock(M, offset) {
    const H2 = this._hash.words;
    let a = H2[0];
    let b = H2[1];
    let c = H2[2];
    let d = H2[3];
    let e = H2[4];
    let f = H2[5];
    let g = H2[6];
    let h = H2[7];
    for (let i = 0; i < 64; i++) {
      if (i < 16) {
        W$3[i] = M[offset + i] | 0;
      } else {
        const gamma0x = W$3[i - 15];
        const gamma0 = (gamma0x << 25 | gamma0x >>> 7) ^ (gamma0x << 14 | gamma0x >>> 18) ^ gamma0x >>> 3;
        const gamma1x = W$3[i - 2];
        const gamma1 = (gamma1x << 15 | gamma1x >>> 17) ^ (gamma1x << 13 | gamma1x >>> 19) ^ gamma1x >>> 10;
        W$3[i] = gamma0 + W$3[i - 7] + gamma1 + W$3[i - 16];
      }
      const ch = e & f ^ ~e & g;
      const maj = a & b ^ a & c ^ b & c;
      const sigma0 = (a << 30 | a >>> 2) ^ (a << 19 | a >>> 13) ^ (a << 10 | a >>> 22);
      const sigma1 = (e << 26 | e >>> 6) ^ (e << 21 | e >>> 11) ^ (e << 7 | e >>> 25);
      const t1 = h + sigma1 + ch + K$3[i] + W$3[i];
      const t2 = sigma0 + maj;
      h = g;
      g = f;
      f = e;
      e = d + t1 | 0;
      d = c;
      c = b;
      b = a;
      a = t1 + t2 | 0;
    }
    H2[0] = H2[0] + a | 0;
    H2[1] = H2[1] + b | 0;
    H2[2] = H2[2] + c | 0;
    H2[3] = H2[3] + d | 0;
    H2[4] = H2[4] + e | 0;
    H2[5] = H2[5] + f | 0;
    H2[6] = H2[6] + g | 0;
    H2[7] = H2[7] + h | 0;
  }
  /**
   * Finishes the hash calculation and returns the hash as a WordArray.
   *
   * @param {string} messageUpdate - Additional message content to include in the hash.
   * @returns {WordArray} The finalised hash as a WordArray.
   */
  finalize(messageUpdate) {
    super.finalize(messageUpdate);
    const nBitsTotal = this._nDataBytes * 8;
    const nBitsLeft = this._data.sigBytes * 8;
    this._data.words[nBitsLeft >>> 5] |= 128 << 24 - nBitsLeft % 32;
    this._data.words[(nBitsLeft + 64 >>> 9 << 4) + 14] = Math.floor(
      nBitsTotal / 4294967296
    );
    this._data.words[(nBitsLeft + 64 >>> 9 << 4) + 15] = nBitsTotal;
    this._data.sigBytes = this._data.words.length * 4;
    this._process();
    return this._hash;
  }
}
function sha256base64(message) {
  return new SHA256().finalize(message).toString(Base64);
}

function hash(object, options = {}) {
  const hashed = typeof object === "string" ? object : objectHash(object, options);
  return sha256base64(hashed).slice(0, 10);
}

const NODE_TYPES = {
  NORMAL: 0,
  WILDCARD: 1,
  PLACEHOLDER: 2
};

function createRouter$1(options = {}) {
  const ctx = {
    options,
    rootNode: createRadixNode(),
    staticRoutesMap: {}
  };
  const normalizeTrailingSlash = (p) => options.strictTrailingSlash ? p : p.replace(/\/$/, "") || "/";
  if (options.routes) {
    for (const path in options.routes) {
      insert(ctx, normalizeTrailingSlash(path), options.routes[path]);
    }
  }
  return {
    ctx,
    lookup: (path) => lookup(ctx, normalizeTrailingSlash(path)),
    insert: (path, data) => insert(ctx, normalizeTrailingSlash(path), data),
    remove: (path) => remove(ctx, normalizeTrailingSlash(path))
  };
}
function lookup(ctx, path) {
  const staticPathNode = ctx.staticRoutesMap[path];
  if (staticPathNode) {
    return staticPathNode.data;
  }
  const sections = path.split("/");
  const params = {};
  let paramsFound = false;
  let wildcardNode = null;
  let node = ctx.rootNode;
  let wildCardParam = null;
  for (let i = 0; i < sections.length; i++) {
    const section = sections[i];
    if (node.wildcardChildNode !== null) {
      wildcardNode = node.wildcardChildNode;
      wildCardParam = sections.slice(i).join("/");
    }
    const nextNode = node.children.get(section);
    if (nextNode === void 0) {
      if (node && node.placeholderChildren.length > 1) {
        const remaining = sections.length - i;
        node = node.placeholderChildren.find((c) => c.maxDepth === remaining) || null;
      } else {
        node = node.placeholderChildren[0] || null;
      }
      if (!node) {
        break;
      }
      if (node.paramName) {
        params[node.paramName] = section;
      }
      paramsFound = true;
    } else {
      node = nextNode;
    }
  }
  if ((node === null || node.data === null) && wildcardNode !== null) {
    node = wildcardNode;
    params[node.paramName || "_"] = wildCardParam;
    paramsFound = true;
  }
  if (!node) {
    return null;
  }
  if (paramsFound) {
    return {
      ...node.data,
      params: paramsFound ? params : void 0
    };
  }
  return node.data;
}
function insert(ctx, path, data) {
  let isStaticRoute = true;
  const sections = path.split("/");
  let node = ctx.rootNode;
  let _unnamedPlaceholderCtr = 0;
  const matchedNodes = [node];
  for (const section of sections) {
    let childNode;
    if (childNode = node.children.get(section)) {
      node = childNode;
    } else {
      const type = getNodeType(section);
      childNode = createRadixNode({ type, parent: node });
      node.children.set(section, childNode);
      if (type === NODE_TYPES.PLACEHOLDER) {
        childNode.paramName = section === "*" ? `_${_unnamedPlaceholderCtr++}` : section.slice(1);
        node.placeholderChildren.push(childNode);
        isStaticRoute = false;
      } else if (type === NODE_TYPES.WILDCARD) {
        node.wildcardChildNode = childNode;
        childNode.paramName = section.slice(
          3
          /* "**:" */
        ) || "_";
        isStaticRoute = false;
      }
      matchedNodes.push(childNode);
      node = childNode;
    }
  }
  for (const [depth, node2] of matchedNodes.entries()) {
    node2.maxDepth = Math.max(matchedNodes.length - depth, node2.maxDepth || 0);
  }
  node.data = data;
  if (isStaticRoute === true) {
    ctx.staticRoutesMap[path] = node;
  }
  return node;
}
function remove(ctx, path) {
  let success = false;
  const sections = path.split("/");
  let node = ctx.rootNode;
  for (const section of sections) {
    node = node.children.get(section);
    if (!node) {
      return success;
    }
  }
  if (node.data) {
    const lastSection = sections.at(-1) || "";
    node.data = null;
    if (Object.keys(node.children).length === 0 && node.parent) {
      node.parent.children.delete(lastSection);
      node.parent.wildcardChildNode = null;
      node.parent.placeholderChildren = [];
    }
    success = true;
  }
  return success;
}
function createRadixNode(options = {}) {
  return {
    type: options.type || NODE_TYPES.NORMAL,
    maxDepth: 0,
    parent: options.parent || null,
    children: /* @__PURE__ */ new Map(),
    data: options.data || null,
    paramName: options.paramName || null,
    wildcardChildNode: null,
    placeholderChildren: []
  };
}
function getNodeType(str) {
  if (str.startsWith("**")) {
    return NODE_TYPES.WILDCARD;
  }
  if (str[0] === ":" || str === "*") {
    return NODE_TYPES.PLACEHOLDER;
  }
  return NODE_TYPES.NORMAL;
}

function toRouteMatcher(router) {
  const table = _routerNodeToTable("", router.ctx.rootNode);
  return _createMatcher(table, router.ctx.options.strictTrailingSlash);
}
function _createMatcher(table, strictTrailingSlash) {
  return {
    ctx: { table },
    matchAll: (path) => _matchRoutes(path, table, strictTrailingSlash)
  };
}
function _createRouteTable() {
  return {
    static: /* @__PURE__ */ new Map(),
    wildcard: /* @__PURE__ */ new Map(),
    dynamic: /* @__PURE__ */ new Map()
  };
}
function _matchRoutes(path, table, strictTrailingSlash) {
  if (strictTrailingSlash !== true && path.endsWith("/")) {
    path = path.slice(0, -1) || "/";
  }
  const matches = [];
  for (const [key, value] of _sortRoutesMap(table.wildcard)) {
    if (path === key || path.startsWith(key + "/")) {
      matches.push(value);
    }
  }
  for (const [key, value] of _sortRoutesMap(table.dynamic)) {
    if (path.startsWith(key + "/")) {
      const subPath = "/" + path.slice(key.length).split("/").splice(2).join("/");
      matches.push(..._matchRoutes(subPath, value));
    }
  }
  const staticMatch = table.static.get(path);
  if (staticMatch) {
    matches.push(staticMatch);
  }
  return matches.filter(Boolean);
}
function _sortRoutesMap(m) {
  return [...m.entries()].sort((a, b) => a[0].length - b[0].length);
}
function _routerNodeToTable(initialPath, initialNode) {
  const table = _createRouteTable();
  function _addNode(path, node) {
    if (path) {
      if (node.type === NODE_TYPES.NORMAL && !(path.includes("*") || path.includes(":"))) {
        if (node.data) {
          table.static.set(path, node.data);
        }
      } else if (node.type === NODE_TYPES.WILDCARD) {
        table.wildcard.set(path.replace("/**", ""), node.data);
      } else if (node.type === NODE_TYPES.PLACEHOLDER) {
        const subTable = _routerNodeToTable("", node);
        if (node.data) {
          subTable.static.set("/", node.data);
        }
        table.dynamic.set(path.replace(/\/\*|\/:\w+/, ""), subTable);
        return;
      }
    }
    for (const [childPath, child] of node.children.entries()) {
      _addNode(`${path}/${childPath}`.replace("//", "/"), child);
    }
  }
  _addNode(initialPath, initialNode);
  return table;
}

function isPlainObject(value) {
  if (value === null || typeof value !== "object") {
    return false;
  }
  const prototype = Object.getPrototypeOf(value);
  if (prototype !== null && prototype !== Object.prototype && Object.getPrototypeOf(prototype) !== null) {
    return false;
  }
  if (Symbol.iterator in value) {
    return false;
  }
  if (Symbol.toStringTag in value) {
    return Object.prototype.toString.call(value) === "[object Module]";
  }
  return true;
}

function _defu(baseObject, defaults, namespace = ".", merger) {
  if (!isPlainObject(defaults)) {
    return _defu(baseObject, {}, namespace, merger);
  }
  const object = Object.assign({}, defaults);
  for (const key in baseObject) {
    if (key === "__proto__" || key === "constructor") {
      continue;
    }
    const value = baseObject[key];
    if (value === null || value === void 0) {
      continue;
    }
    if (merger && merger(object, key, value, namespace)) {
      continue;
    }
    if (Array.isArray(value) && Array.isArray(object[key])) {
      object[key] = [...value, ...object[key]];
    } else if (isPlainObject(value) && isPlainObject(object[key])) {
      object[key] = _defu(
        value,
        object[key],
        (namespace ? `${namespace}.` : "") + key.toString(),
        merger
      );
    } else {
      object[key] = value;
    }
  }
  return object;
}
function createDefu(merger) {
  return (...arguments_) => (
    // eslint-disable-next-line unicorn/no-array-reduce
    arguments_.reduce((p, c) => _defu(p, c, "", merger), {})
  );
}
const defu = createDefu();
const defuFn = createDefu((object, key, currentValue) => {
  if (object[key] !== void 0 && typeof currentValue === "function") {
    object[key] = currentValue(object[key]);
    return true;
  }
});

function rawHeaders(headers) {
  const rawHeaders2 = [];
  for (const key in headers) {
    if (Array.isArray(headers[key])) {
      for (const h of headers[key]) {
        rawHeaders2.push(key, h);
      }
    } else {
      rawHeaders2.push(key, headers[key]);
    }
  }
  return rawHeaders2;
}
function mergeFns(...functions) {
  return function(...args) {
    for (const fn of functions) {
      fn(...args);
    }
  };
}
function createNotImplementedError(name) {
  throw new Error(`[unenv] ${name} is not implemented yet!`);
}

let defaultMaxListeners = 10;
let EventEmitter$1 = class EventEmitter {
  __unenv__ = true;
  _events = /* @__PURE__ */ Object.create(null);
  _maxListeners;
  static get defaultMaxListeners() {
    return defaultMaxListeners;
  }
  static set defaultMaxListeners(arg) {
    if (typeof arg !== "number" || arg < 0 || Number.isNaN(arg)) {
      throw new RangeError(
        'The value of "defaultMaxListeners" is out of range. It must be a non-negative number. Received ' + arg + "."
      );
    }
    defaultMaxListeners = arg;
  }
  setMaxListeners(n) {
    if (typeof n !== "number" || n < 0 || Number.isNaN(n)) {
      throw new RangeError(
        'The value of "n" is out of range. It must be a non-negative number. Received ' + n + "."
      );
    }
    this._maxListeners = n;
    return this;
  }
  getMaxListeners() {
    return _getMaxListeners(this);
  }
  emit(type, ...args) {
    if (!this._events[type] || this._events[type].length === 0) {
      return false;
    }
    if (type === "error") {
      let er;
      if (args.length > 0) {
        er = args[0];
      }
      if (er instanceof Error) {
        throw er;
      }
      const err = new Error(
        "Unhandled error." + (er ? " (" + er.message + ")" : "")
      );
      err.context = er;
      throw err;
    }
    for (const _listener of this._events[type]) {
      (_listener.listener || _listener).apply(this, args);
    }
    return true;
  }
  addListener(type, listener) {
    return _addListener(this, type, listener, false);
  }
  on(type, listener) {
    return _addListener(this, type, listener, false);
  }
  prependListener(type, listener) {
    return _addListener(this, type, listener, true);
  }
  once(type, listener) {
    return this.on(type, _wrapOnce(this, type, listener));
  }
  prependOnceListener(type, listener) {
    return this.prependListener(type, _wrapOnce(this, type, listener));
  }
  removeListener(type, listener) {
    return _removeListener(this, type, listener);
  }
  off(type, listener) {
    return this.removeListener(type, listener);
  }
  removeAllListeners(type) {
    return _removeAllListeners(this, type);
  }
  listeners(type) {
    return _listeners(this, type, true);
  }
  rawListeners(type) {
    return _listeners(this, type, false);
  }
  listenerCount(type) {
    return this.rawListeners(type).length;
  }
  eventNames() {
    return Object.keys(this._events);
  }
};
function _addListener(target, type, listener, prepend) {
  _checkListener(listener);
  if (target._events.newListener !== void 0) {
    target.emit("newListener", type, listener.listener || listener);
  }
  if (!target._events[type]) {
    target._events[type] = [];
  }
  if (prepend) {
    target._events[type].unshift(listener);
  } else {
    target._events[type].push(listener);
  }
  const maxListeners = _getMaxListeners(target);
  if (maxListeners > 0 && target._events[type].length > maxListeners && !target._events[type].warned) {
    target._events[type].warned = true;
    const warning = new Error(
      `[unenv] Possible EventEmitter memory leak detected. ${target._events[type].length} ${type} listeners added. Use emitter.setMaxListeners() to increase limit`
    );
    warning.name = "MaxListenersExceededWarning";
    warning.emitter = target;
    warning.type = type;
    warning.count = target._events[type]?.length;
    console.warn(warning);
  }
  return target;
}
function _removeListener(target, type, listener) {
  _checkListener(listener);
  if (!target._events[type] || target._events[type].length === 0) {
    return target;
  }
  const lenBeforeFilter = target._events[type].length;
  target._events[type] = target._events[type].filter((fn) => fn !== listener);
  if (lenBeforeFilter === target._events[type].length) {
    return target;
  }
  if (target._events.removeListener) {
    target.emit("removeListener", type, listener.listener || listener);
  }
  if (target._events[type].length === 0) {
    delete target._events[type];
  }
  return target;
}
function _removeAllListeners(target, type) {
  if (!target._events[type] || target._events[type].length === 0) {
    return target;
  }
  if (target._events.removeListener) {
    for (const _listener of target._events[type]) {
      target.emit("removeListener", type, _listener.listener || _listener);
    }
  }
  delete target._events[type];
  return target;
}
function _wrapOnce(target, type, listener) {
  let fired = false;
  const wrapper = (...args) => {
    if (fired) {
      return;
    }
    target.removeListener(type, wrapper);
    fired = true;
    return args.length === 0 ? listener.call(target) : listener.apply(target, args);
  };
  wrapper.listener = listener;
  return wrapper;
}
function _getMaxListeners(target) {
  return target._maxListeners ?? EventEmitter$1.defaultMaxListeners;
}
function _listeners(target, type, unwrap) {
  let listeners = target._events[type];
  if (typeof listeners === "function") {
    listeners = [listeners];
  }
  return unwrap ? listeners.map((l) => l.listener || l) : listeners;
}
function _checkListener(listener) {
  if (typeof listener !== "function") {
    throw new TypeError(
      'The "listener" argument must be of type Function. Received type ' + typeof listener
    );
  }
}

const EventEmitter = globalThis.EventEmitter || EventEmitter$1;

class _Readable extends EventEmitter {
  __unenv__ = true;
  readableEncoding = null;
  readableEnded = true;
  readableFlowing = false;
  readableHighWaterMark = 0;
  readableLength = 0;
  readableObjectMode = false;
  readableAborted = false;
  readableDidRead = false;
  closed = false;
  errored = null;
  readable = false;
  destroyed = false;
  static from(_iterable, options) {
    return new _Readable(options);
  }
  constructor(_opts) {
    super();
  }
  _read(_size) {
  }
  read(_size) {
  }
  setEncoding(_encoding) {
    return this;
  }
  pause() {
    return this;
  }
  resume() {
    return this;
  }
  isPaused() {
    return true;
  }
  unpipe(_destination) {
    return this;
  }
  unshift(_chunk, _encoding) {
  }
  wrap(_oldStream) {
    return this;
  }
  push(_chunk, _encoding) {
    return false;
  }
  _destroy(_error, _callback) {
    this.removeAllListeners();
  }
  destroy(error) {
    this.destroyed = true;
    this._destroy(error);
    return this;
  }
  pipe(_destenition, _options) {
    return {};
  }
  compose(stream, options) {
    throw new Error("[unenv] Method not implemented.");
  }
  [Symbol.asyncDispose]() {
    this.destroy();
    return Promise.resolve();
  }
  // eslint-disable-next-line require-yield
  async *[Symbol.asyncIterator]() {
    throw createNotImplementedError("Readable.asyncIterator");
  }
  iterator(options) {
    throw createNotImplementedError("Readable.iterator");
  }
  map(fn, options) {
    throw createNotImplementedError("Readable.map");
  }
  filter(fn, options) {
    throw createNotImplementedError("Readable.filter");
  }
  forEach(fn, options) {
    throw createNotImplementedError("Readable.forEach");
  }
  reduce(fn, initialValue, options) {
    throw createNotImplementedError("Readable.reduce");
  }
  find(fn, options) {
    throw createNotImplementedError("Readable.find");
  }
  findIndex(fn, options) {
    throw createNotImplementedError("Readable.findIndex");
  }
  some(fn, options) {
    throw createNotImplementedError("Readable.some");
  }
  toArray(options) {
    throw createNotImplementedError("Readable.toArray");
  }
  every(fn, options) {
    throw createNotImplementedError("Readable.every");
  }
  flatMap(fn, options) {
    throw createNotImplementedError("Readable.flatMap");
  }
  drop(limit, options) {
    throw createNotImplementedError("Readable.drop");
  }
  take(limit, options) {
    throw createNotImplementedError("Readable.take");
  }
  asIndexedPairs(options) {
    throw createNotImplementedError("Readable.asIndexedPairs");
  }
}
const Readable = globalThis.Readable || _Readable;

class _Writable extends EventEmitter {
  __unenv__ = true;
  writable = true;
  writableEnded = false;
  writableFinished = false;
  writableHighWaterMark = 0;
  writableLength = 0;
  writableObjectMode = false;
  writableCorked = 0;
  closed = false;
  errored = null;
  writableNeedDrain = false;
  destroyed = false;
  _data;
  _encoding = "utf-8";
  constructor(_opts) {
    super();
  }
  pipe(_destenition, _options) {
    return {};
  }
  _write(chunk, encoding, callback) {
    if (this.writableEnded) {
      if (callback) {
        callback();
      }
      return;
    }
    if (this._data === void 0) {
      this._data = chunk;
    } else {
      const a = typeof this._data === "string" ? Buffer.from(this._data, this._encoding || encoding || "utf8") : this._data;
      const b = typeof chunk === "string" ? Buffer.from(chunk, encoding || this._encoding || "utf8") : chunk;
      this._data = Buffer.concat([a, b]);
    }
    this._encoding = encoding;
    if (callback) {
      callback();
    }
  }
  _writev(_chunks, _callback) {
  }
  _destroy(_error, _callback) {
  }
  _final(_callback) {
  }
  write(chunk, arg2, arg3) {
    const encoding = typeof arg2 === "string" ? this._encoding : "utf-8";
    const cb = typeof arg2 === "function" ? arg2 : typeof arg3 === "function" ? arg3 : void 0;
    this._write(chunk, encoding, cb);
    return true;
  }
  setDefaultEncoding(_encoding) {
    return this;
  }
  end(arg1, arg2, arg3) {
    const callback = typeof arg1 === "function" ? arg1 : typeof arg2 === "function" ? arg2 : typeof arg3 === "function" ? arg3 : void 0;
    if (this.writableEnded) {
      if (callback) {
        callback();
      }
      return this;
    }
    const data = arg1 === callback ? void 0 : arg1;
    if (data) {
      const encoding = arg2 === callback ? void 0 : arg2;
      this.write(data, encoding, callback);
    }
    this.writableEnded = true;
    this.writableFinished = true;
    this.emit("close");
    this.emit("finish");
    return this;
  }
  cork() {
  }
  uncork() {
  }
  destroy(_error) {
    this.destroyed = true;
    delete this._data;
    this.removeAllListeners();
    return this;
  }
  compose(stream, options) {
    throw new Error("[h3] Method not implemented.");
  }
}
const Writable = globalThis.Writable || _Writable;

const __Duplex = class {
  allowHalfOpen = true;
  _destroy;
  constructor(readable = new Readable(), writable = new Writable()) {
    Object.assign(this, readable);
    Object.assign(this, writable);
    this._destroy = mergeFns(readable._destroy, writable._destroy);
  }
};
function getDuplex() {
  Object.assign(__Duplex.prototype, Readable.prototype);
  Object.assign(__Duplex.prototype, Writable.prototype);
  return __Duplex;
}
const _Duplex = /* @__PURE__ */ getDuplex();
const Duplex = globalThis.Duplex || _Duplex;

class Socket extends Duplex {
  __unenv__ = true;
  bufferSize = 0;
  bytesRead = 0;
  bytesWritten = 0;
  connecting = false;
  destroyed = false;
  pending = false;
  localAddress = "";
  localPort = 0;
  remoteAddress = "";
  remoteFamily = "";
  remotePort = 0;
  autoSelectFamilyAttemptedAddresses = [];
  readyState = "readOnly";
  constructor(_options) {
    super();
  }
  write(_buffer, _arg1, _arg2) {
    return false;
  }
  connect(_arg1, _arg2, _arg3) {
    return this;
  }
  end(_arg1, _arg2, _arg3) {
    return this;
  }
  setEncoding(_encoding) {
    return this;
  }
  pause() {
    return this;
  }
  resume() {
    return this;
  }
  setTimeout(_timeout, _callback) {
    return this;
  }
  setNoDelay(_noDelay) {
    return this;
  }
  setKeepAlive(_enable, _initialDelay) {
    return this;
  }
  address() {
    return {};
  }
  unref() {
    return this;
  }
  ref() {
    return this;
  }
  destroySoon() {
    this.destroy();
  }
  resetAndDestroy() {
    const err = new Error("ERR_SOCKET_CLOSED");
    err.code = "ERR_SOCKET_CLOSED";
    this.destroy(err);
    return this;
  }
}

class IncomingMessage extends Readable {
  __unenv__ = {};
  aborted = false;
  httpVersion = "1.1";
  httpVersionMajor = 1;
  httpVersionMinor = 1;
  complete = true;
  connection;
  socket;
  headers = {};
  trailers = {};
  method = "GET";
  url = "/";
  statusCode = 200;
  statusMessage = "";
  closed = false;
  errored = null;
  readable = false;
  constructor(socket) {
    super();
    this.socket = this.connection = socket || new Socket();
  }
  get rawHeaders() {
    return rawHeaders(this.headers);
  }
  get rawTrailers() {
    return [];
  }
  setTimeout(_msecs, _callback) {
    return this;
  }
  get headersDistinct() {
    return _distinct(this.headers);
  }
  get trailersDistinct() {
    return _distinct(this.trailers);
  }
}
function _distinct(obj) {
  const d = {};
  for (const [key, value] of Object.entries(obj)) {
    if (key) {
      d[key] = (Array.isArray(value) ? value : [value]).filter(
        Boolean
      );
    }
  }
  return d;
}

class ServerResponse extends Writable {
  __unenv__ = true;
  statusCode = 200;
  statusMessage = "";
  upgrading = false;
  chunkedEncoding = false;
  shouldKeepAlive = false;
  useChunkedEncodingByDefault = false;
  sendDate = false;
  finished = false;
  headersSent = false;
  strictContentLength = false;
  connection = null;
  socket = null;
  req;
  _headers = {};
  constructor(req) {
    super();
    this.req = req;
  }
  assignSocket(socket) {
    socket._httpMessage = this;
    this.socket = socket;
    this.connection = socket;
    this.emit("socket", socket);
    this._flush();
  }
  _flush() {
    this.flushHeaders();
  }
  detachSocket(_socket) {
  }
  writeContinue(_callback) {
  }
  writeHead(statusCode, arg1, arg2) {
    if (statusCode) {
      this.statusCode = statusCode;
    }
    if (typeof arg1 === "string") {
      this.statusMessage = arg1;
      arg1 = void 0;
    }
    const headers = arg2 || arg1;
    if (headers) {
      if (Array.isArray(headers)) ; else {
        for (const key in headers) {
          this.setHeader(key, headers[key]);
        }
      }
    }
    this.headersSent = true;
    return this;
  }
  writeProcessing() {
  }
  setTimeout(_msecs, _callback) {
    return this;
  }
  appendHeader(name, value) {
    name = name.toLowerCase();
    const current = this._headers[name];
    const all = [
      ...Array.isArray(current) ? current : [current],
      ...Array.isArray(value) ? value : [value]
    ].filter(Boolean);
    this._headers[name] = all.length > 1 ? all : all[0];
    return this;
  }
  setHeader(name, value) {
    this._headers[name.toLowerCase()] = value;
    return this;
  }
  getHeader(name) {
    return this._headers[name.toLowerCase()];
  }
  getHeaders() {
    return this._headers;
  }
  getHeaderNames() {
    return Object.keys(this._headers);
  }
  hasHeader(name) {
    return name.toLowerCase() in this._headers;
  }
  removeHeader(name) {
    delete this._headers[name.toLowerCase()];
  }
  addTrailers(_headers) {
  }
  flushHeaders() {
  }
  writeEarlyHints(_headers, cb) {
    if (typeof cb === "function") {
      cb();
    }
  }
}

function hasProp(obj, prop) {
  try {
    return prop in obj;
  } catch {
    return false;
  }
}

var __defProp$2 = Object.defineProperty;
var __defNormalProp$2 = (obj, key, value) => key in obj ? __defProp$2(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField$2 = (obj, key, value) => {
  __defNormalProp$2(obj, typeof key !== "symbol" ? key + "" : key, value);
  return value;
};
class H3Error extends Error {
  constructor(message, opts = {}) {
    super(message, opts);
    __publicField$2(this, "statusCode", 500);
    __publicField$2(this, "fatal", false);
    __publicField$2(this, "unhandled", false);
    __publicField$2(this, "statusMessage");
    __publicField$2(this, "data");
    __publicField$2(this, "cause");
    if (opts.cause && !this.cause) {
      this.cause = opts.cause;
    }
  }
  toJSON() {
    const obj = {
      message: this.message,
      statusCode: sanitizeStatusCode(this.statusCode, 500)
    };
    if (this.statusMessage) {
      obj.statusMessage = sanitizeStatusMessage(this.statusMessage);
    }
    if (this.data !== void 0) {
      obj.data = this.data;
    }
    return obj;
  }
}
__publicField$2(H3Error, "__h3_error__", true);
function createError$1(input) {
  if (typeof input === "string") {
    return new H3Error(input);
  }
  if (isError(input)) {
    return input;
  }
  const err = new H3Error(input.message ?? input.statusMessage ?? "", {
    cause: input.cause || input
  });
  if (hasProp(input, "stack")) {
    try {
      Object.defineProperty(err, "stack", {
        get() {
          return input.stack;
        }
      });
    } catch {
      try {
        err.stack = input.stack;
      } catch {
      }
    }
  }
  if (input.data) {
    err.data = input.data;
  }
  if (input.statusCode) {
    err.statusCode = sanitizeStatusCode(input.statusCode, err.statusCode);
  } else if (input.status) {
    err.statusCode = sanitizeStatusCode(input.status, err.statusCode);
  }
  if (input.statusMessage) {
    err.statusMessage = input.statusMessage;
  } else if (input.statusText) {
    err.statusMessage = input.statusText;
  }
  if (err.statusMessage) {
    const originalMessage = err.statusMessage;
    const sanitizedMessage = sanitizeStatusMessage(err.statusMessage);
    if (sanitizedMessage !== originalMessage) {
      console.warn(
        "[h3] Please prefer using `message` for longer error messages instead of `statusMessage`. In the future, `statusMessage` will be sanitized by default."
      );
    }
  }
  if (input.fatal !== void 0) {
    err.fatal = input.fatal;
  }
  if (input.unhandled !== void 0) {
    err.unhandled = input.unhandled;
  }
  return err;
}
function sendError(event, error, debug) {
  if (event.handled) {
    return;
  }
  const h3Error = isError(error) ? error : createError$1(error);
  const responseBody = {
    statusCode: h3Error.statusCode,
    statusMessage: h3Error.statusMessage,
    stack: [],
    data: h3Error.data
  };
  if (debug) {
    responseBody.stack = (h3Error.stack || "").split("\n").map((l) => l.trim());
  }
  if (event.handled) {
    return;
  }
  const _code = Number.parseInt(h3Error.statusCode);
  setResponseStatus(event, _code, h3Error.statusMessage);
  event.node.res.setHeader("content-type", MIMES.json);
  event.node.res.end(JSON.stringify(responseBody, void 0, 2));
}
function isError(input) {
  return input?.constructor?.__h3_error__ === true;
}
function isMethod(event, expected, allowHead) {
  if (typeof expected === "string") {
    if (event.method === expected) {
      return true;
    }
  } else if (expected.includes(event.method)) {
    return true;
  }
  return false;
}
function assertMethod(event, expected, allowHead) {
  if (!isMethod(event, expected)) {
    throw createError$1({
      statusCode: 405,
      statusMessage: "HTTP method is not allowed."
    });
  }
}
function getRequestHeaders(event) {
  const _headers = {};
  for (const key in event.node.req.headers) {
    const val = event.node.req.headers[key];
    _headers[key] = Array.isArray(val) ? val.filter(Boolean).join(", ") : val;
  }
  return _headers;
}
function getRequestHeader(event, name) {
  const headers = getRequestHeaders(event);
  const value = headers[name.toLowerCase()];
  return value;
}
function getRequestHost(event, opts = {}) {
  if (opts.xForwardedHost) {
    const xForwardedHost = event.node.req.headers["x-forwarded-host"];
    if (xForwardedHost) {
      return xForwardedHost;
    }
  }
  return event.node.req.headers.host || "localhost";
}
function getRequestProtocol(event, opts = {}) {
  if (opts.xForwardedProto !== false && event.node.req.headers["x-forwarded-proto"] === "https") {
    return "https";
  }
  return event.node.req.connection?.encrypted ? "https" : "http";
}
function getRequestURL(event, opts = {}) {
  const host = getRequestHost(event, opts);
  const protocol = getRequestProtocol(event, opts);
  const path = (event.node.req.originalUrl || event.path).replace(
    /^[/\\]+/g,
    "/"
  );
  return new URL(path, `${protocol}://${host}`);
}

const RawBodySymbol = Symbol.for("h3RawBody");
const PayloadMethods$1 = ["PATCH", "POST", "PUT", "DELETE"];
function readRawBody(event, encoding = "utf8") {
  assertMethod(event, PayloadMethods$1);
  const _rawBody = event._requestBody || event.web?.request?.body || event.node.req[RawBodySymbol] || event.node.req.rawBody || event.node.req.body;
  if (_rawBody) {
    const promise2 = Promise.resolve(_rawBody).then((_resolved) => {
      if (Buffer.isBuffer(_resolved)) {
        return _resolved;
      }
      if (typeof _resolved.pipeTo === "function") {
        return new Promise((resolve, reject) => {
          const chunks = [];
          _resolved.pipeTo(
            new WritableStream({
              write(chunk) {
                chunks.push(chunk);
              },
              close() {
                resolve(Buffer.concat(chunks));
              },
              abort(reason) {
                reject(reason);
              }
            })
          ).catch(reject);
        });
      } else if (typeof _resolved.pipe === "function") {
        return new Promise((resolve, reject) => {
          const chunks = [];
          _resolved.on("data", (chunk) => {
            chunks.push(chunk);
          }).on("end", () => {
            resolve(Buffer.concat(chunks));
          }).on("error", reject);
        });
      }
      if (_resolved.constructor === Object) {
        return Buffer.from(JSON.stringify(_resolved));
      }
      if (_resolved instanceof URLSearchParams) {
        return Buffer.from(_resolved.toString());
      }
      return Buffer.from(_resolved);
    });
    return encoding ? promise2.then((buff) => buff.toString(encoding)) : promise2;
  }
  if (!Number.parseInt(event.node.req.headers["content-length"] || "") && !String(event.node.req.headers["transfer-encoding"] ?? "").split(",").map((e) => e.trim()).filter(Boolean).includes("chunked")) {
    return Promise.resolve(void 0);
  }
  const promise = event.node.req[RawBodySymbol] = new Promise(
    (resolve, reject) => {
      const bodyData = [];
      event.node.req.on("error", (err) => {
        reject(err);
      }).on("data", (chunk) => {
        bodyData.push(chunk);
      }).on("end", () => {
        resolve(Buffer.concat(bodyData));
      });
    }
  );
  const result = encoding ? promise.then((buff) => buff.toString(encoding)) : promise;
  return result;
}
function getRequestWebStream(event) {
  if (!PayloadMethods$1.includes(event.method)) {
    return;
  }
  const bodyStream = event.web?.request?.body || event._requestBody;
  if (bodyStream) {
    return bodyStream;
  }
  const _hasRawBody = RawBodySymbol in event.node.req || "rawBody" in event.node.req || "body" in event.node.req || "__unenv__" in event.node.req;
  if (_hasRawBody) {
    return new ReadableStream({
      async start(controller) {
        const _rawBody = await readRawBody(event, false);
        if (_rawBody) {
          controller.enqueue(_rawBody);
        }
        controller.close();
      }
    });
  }
  return new ReadableStream({
    start: (controller) => {
      event.node.req.on("data", (chunk) => {
        controller.enqueue(chunk);
      });
      event.node.req.on("end", () => {
        controller.close();
      });
      event.node.req.on("error", (err) => {
        controller.error(err);
      });
    }
  });
}

function handleCacheHeaders(event, opts) {
  const cacheControls = ["public", ...opts.cacheControls || []];
  let cacheMatched = false;
  if (opts.maxAge !== void 0) {
    cacheControls.push(`max-age=${+opts.maxAge}`, `s-maxage=${+opts.maxAge}`);
  }
  if (opts.modifiedTime) {
    const modifiedTime = new Date(opts.modifiedTime);
    const ifModifiedSince = event.node.req.headers["if-modified-since"];
    event.node.res.setHeader("last-modified", modifiedTime.toUTCString());
    if (ifModifiedSince && new Date(ifModifiedSince) >= opts.modifiedTime) {
      cacheMatched = true;
    }
  }
  if (opts.etag) {
    event.node.res.setHeader("etag", opts.etag);
    const ifNonMatch = event.node.req.headers["if-none-match"];
    if (ifNonMatch === opts.etag) {
      cacheMatched = true;
    }
  }
  event.node.res.setHeader("cache-control", cacheControls.join(", "));
  if (cacheMatched) {
    event.node.res.statusCode = 304;
    if (!event.handled) {
      event.node.res.end();
    }
    return true;
  }
  return false;
}

const MIMES = {
  html: "text/html",
  json: "application/json"
};

const DISALLOWED_STATUS_CHARS = /[^\u0009\u0020-\u007E]/g;
function sanitizeStatusMessage(statusMessage = "") {
  return statusMessage.replace(DISALLOWED_STATUS_CHARS, "");
}
function sanitizeStatusCode(statusCode, defaultStatusCode = 200) {
  if (!statusCode) {
    return defaultStatusCode;
  }
  if (typeof statusCode === "string") {
    statusCode = Number.parseInt(statusCode, 10);
  }
  if (statusCode < 100 || statusCode > 999) {
    return defaultStatusCode;
  }
  return statusCode;
}
function splitCookiesString(cookiesString) {
  if (Array.isArray(cookiesString)) {
    return cookiesString.flatMap((c) => splitCookiesString(c));
  }
  if (typeof cookiesString !== "string") {
    return [];
  }
  const cookiesStrings = [];
  let pos = 0;
  let start;
  let ch;
  let lastComma;
  let nextStart;
  let cookiesSeparatorFound;
  const skipWhitespace = () => {
    while (pos < cookiesString.length && /\s/.test(cookiesString.charAt(pos))) {
      pos += 1;
    }
    return pos < cookiesString.length;
  };
  const notSpecialChar = () => {
    ch = cookiesString.charAt(pos);
    return ch !== "=" && ch !== ";" && ch !== ",";
  };
  while (pos < cookiesString.length) {
    start = pos;
    cookiesSeparatorFound = false;
    while (skipWhitespace()) {
      ch = cookiesString.charAt(pos);
      if (ch === ",") {
        lastComma = pos;
        pos += 1;
        skipWhitespace();
        nextStart = pos;
        while (pos < cookiesString.length && notSpecialChar()) {
          pos += 1;
        }
        if (pos < cookiesString.length && cookiesString.charAt(pos) === "=") {
          cookiesSeparatorFound = true;
          pos = nextStart;
          cookiesStrings.push(cookiesString.slice(start, lastComma));
          start = pos;
        } else {
          pos = lastComma + 1;
        }
      } else {
        pos += 1;
      }
    }
    if (!cookiesSeparatorFound || pos >= cookiesString.length) {
      cookiesStrings.push(cookiesString.slice(start));
    }
  }
  return cookiesStrings;
}

const defer = typeof setImmediate === "undefined" ? (fn) => fn() : setImmediate;
function send(event, data, type) {
  if (type) {
    defaultContentType(event, type);
  }
  return new Promise((resolve) => {
    defer(() => {
      if (!event.handled) {
        event.node.res.end(data);
      }
      resolve();
    });
  });
}
function sendNoContent(event, code) {
  if (event.handled) {
    return;
  }
  if (!code && event.node.res.statusCode !== 200) {
    code = event.node.res.statusCode;
  }
  const _code = sanitizeStatusCode(code, 204);
  if (_code === 204) {
    event.node.res.removeHeader("content-length");
  }
  event.node.res.writeHead(_code);
  event.node.res.end();
}
function setResponseStatus(event, code, text) {
  if (code) {
    event.node.res.statusCode = sanitizeStatusCode(
      code,
      event.node.res.statusCode
    );
  }
  if (text) {
    event.node.res.statusMessage = sanitizeStatusMessage(text);
  }
}
function getResponseStatus(event) {
  return event.node.res.statusCode;
}
function defaultContentType(event, type) {
  if (type && event.node.res.statusCode !== 304 && !event.node.res.getHeader("content-type")) {
    event.node.res.setHeader("content-type", type);
  }
}
function sendRedirect(event, location, code = 302) {
  event.node.res.statusCode = sanitizeStatusCode(
    code,
    event.node.res.statusCode
  );
  event.node.res.setHeader("location", location);
  const encodedLoc = location.replace(/"/g, "%22");
  const html = `<!DOCTYPE html><html><head><meta http-equiv="refresh" content="0; url=${encodedLoc}"></head></html>`;
  return send(event, html, MIMES.html);
}
function getResponseHeaders(event) {
  return event.node.res.getHeaders();
}
function getResponseHeader(event, name) {
  return event.node.res.getHeader(name);
}
function setResponseHeaders(event, headers) {
  for (const [name, value] of Object.entries(headers)) {
    event.node.res.setHeader(
      name,
      value
    );
  }
}
const setHeaders = setResponseHeaders;
function setResponseHeader(event, name, value) {
  event.node.res.setHeader(name, value);
}
function appendResponseHeader(event, name, value) {
  let current = event.node.res.getHeader(name);
  if (!current) {
    event.node.res.setHeader(name, value);
    return;
  }
  if (!Array.isArray(current)) {
    current = [current.toString()];
  }
  event.node.res.setHeader(name, [...current, value]);
}
function removeResponseHeader(event, name) {
  return event.node.res.removeHeader(name);
}
function isStream(data) {
  if (!data || typeof data !== "object") {
    return false;
  }
  if (typeof data.pipe === "function") {
    if (typeof data._read === "function") {
      return true;
    }
    if (typeof data.abort === "function") {
      return true;
    }
  }
  if (typeof data.pipeTo === "function") {
    return true;
  }
  return false;
}
function isWebResponse(data) {
  return typeof Response !== "undefined" && data instanceof Response;
}
function sendStream(event, stream) {
  if (!stream || typeof stream !== "object") {
    throw new Error("[h3] Invalid stream provided.");
  }
  event.node.res._data = stream;
  if (!event.node.res.socket) {
    event._handled = true;
    return Promise.resolve();
  }
  if (hasProp(stream, "pipeTo") && typeof stream.pipeTo === "function") {
    return stream.pipeTo(
      new WritableStream({
        write(chunk) {
          event.node.res.write(chunk);
        }
      })
    ).then(() => {
      event.node.res.end();
    });
  }
  if (hasProp(stream, "pipe") && typeof stream.pipe === "function") {
    return new Promise((resolve, reject) => {
      stream.pipe(event.node.res);
      if (stream.on) {
        stream.on("end", () => {
          event.node.res.end();
          resolve();
        });
        stream.on("error", (error) => {
          reject(error);
        });
      }
      event.node.res.on("close", () => {
        if (stream.abort) {
          stream.abort();
        }
      });
    });
  }
  throw new Error("[h3] Invalid or incompatible stream provided.");
}
function sendWebResponse(event, response) {
  for (const [key, value] of response.headers) {
    if (key === "set-cookie") {
      event.node.res.appendHeader(key, splitCookiesString(value));
    } else {
      event.node.res.setHeader(key, value);
    }
  }
  if (response.status) {
    event.node.res.statusCode = sanitizeStatusCode(
      response.status,
      event.node.res.statusCode
    );
  }
  if (response.statusText) {
    event.node.res.statusMessage = sanitizeStatusMessage(response.statusText);
  }
  if (response.redirected) {
    event.node.res.setHeader("location", response.url);
  }
  if (!response.body) {
    event.node.res.end();
    return;
  }
  return sendStream(event, response.body);
}

const PayloadMethods = /* @__PURE__ */ new Set(["PATCH", "POST", "PUT", "DELETE"]);
const ignoredHeaders = /* @__PURE__ */ new Set([
  "transfer-encoding",
  "connection",
  "keep-alive",
  "upgrade",
  "expect",
  "host",
  "accept"
]);
async function proxyRequest(event, target, opts = {}) {
  let body;
  let duplex;
  if (PayloadMethods.has(event.method)) {
    if (opts.streamRequest) {
      body = getRequestWebStream(event);
      duplex = "half";
    } else {
      body = await readRawBody(event, false).catch(() => void 0);
    }
  }
  const method = opts.fetchOptions?.method || event.method;
  const fetchHeaders = mergeHeaders$1(
    getProxyRequestHeaders(event),
    opts.fetchOptions?.headers,
    opts.headers
  );
  return sendProxy(event, target, {
    ...opts,
    fetchOptions: {
      method,
      body,
      duplex,
      ...opts.fetchOptions,
      headers: fetchHeaders
    }
  });
}
async function sendProxy(event, target, opts = {}) {
  let response;
  try {
    response = await _getFetch(opts.fetch)(target, {
      headers: opts.headers,
      ignoreResponseError: true,
      // make $ofetch.raw transparent
      ...opts.fetchOptions
    });
  } catch (error) {
    throw createError$1({
      status: 502,
      statusMessage: "Bad Gateway",
      cause: error
    });
  }
  event.node.res.statusCode = sanitizeStatusCode(
    response.status,
    event.node.res.statusCode
  );
  event.node.res.statusMessage = sanitizeStatusMessage(response.statusText);
  const cookies = [];
  for (const [key, value] of response.headers.entries()) {
    if (key === "content-encoding") {
      continue;
    }
    if (key === "content-length") {
      continue;
    }
    if (key === "set-cookie") {
      cookies.push(...splitCookiesString(value));
      continue;
    }
    event.node.res.setHeader(key, value);
  }
  if (cookies.length > 0) {
    event.node.res.setHeader(
      "set-cookie",
      cookies.map((cookie) => {
        if (opts.cookieDomainRewrite) {
          cookie = rewriteCookieProperty(
            cookie,
            opts.cookieDomainRewrite,
            "domain"
          );
        }
        if (opts.cookiePathRewrite) {
          cookie = rewriteCookieProperty(
            cookie,
            opts.cookiePathRewrite,
            "path"
          );
        }
        return cookie;
      })
    );
  }
  if (opts.onResponse) {
    await opts.onResponse(event, response);
  }
  if (response._data !== void 0) {
    return response._data;
  }
  if (event.handled) {
    return;
  }
  if (opts.sendStream === false) {
    const data = new Uint8Array(await response.arrayBuffer());
    return event.node.res.end(data);
  }
  if (response.body) {
    for await (const chunk of response.body) {
      event.node.res.write(chunk);
    }
  }
  return event.node.res.end();
}
function getProxyRequestHeaders(event) {
  const headers = /* @__PURE__ */ Object.create(null);
  const reqHeaders = getRequestHeaders(event);
  for (const name in reqHeaders) {
    if (!ignoredHeaders.has(name)) {
      headers[name] = reqHeaders[name];
    }
  }
  return headers;
}
function fetchWithEvent(event, req, init, options) {
  return _getFetch(options?.fetch)(req, {
    ...init,
    context: init?.context || event.context,
    headers: {
      ...getProxyRequestHeaders(event),
      ...init?.headers
    }
  });
}
function _getFetch(_fetch) {
  if (_fetch) {
    return _fetch;
  }
  if (globalThis.fetch) {
    return globalThis.fetch;
  }
  throw new Error(
    "fetch is not available. Try importing `node-fetch-native/polyfill` for Node.js."
  );
}
function rewriteCookieProperty(header, map, property) {
  const _map = typeof map === "string" ? { "*": map } : map;
  return header.replace(
    new RegExp(`(;\\s*${property}=)([^;]+)`, "gi"),
    (match, prefix, previousValue) => {
      let newValue;
      if (previousValue in _map) {
        newValue = _map[previousValue];
      } else if ("*" in _map) {
        newValue = _map["*"];
      } else {
        return match;
      }
      return newValue ? prefix + newValue : "";
    }
  );
}
function mergeHeaders$1(defaults, ...inputs) {
  const _inputs = inputs.filter(Boolean);
  if (_inputs.length === 0) {
    return defaults;
  }
  const merged = new Headers(defaults);
  for (const input of _inputs) {
    for (const [key, value] of Object.entries(input)) {
      if (value !== void 0) {
        merged.set(key, value);
      }
    }
  }
  return merged;
}

var __defProp = Object.defineProperty;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField = (obj, key, value) => {
  __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
  return value;
};
class H3Event {
  constructor(req, res) {
    __publicField(this, "__is_event__", true);
    // Context
    __publicField(this, "node");
    // Node
    __publicField(this, "web");
    // Web
    __publicField(this, "context", {});
    // Shared
    // Request
    __publicField(this, "_method");
    __publicField(this, "_path");
    __publicField(this, "_headers");
    __publicField(this, "_requestBody");
    // Response
    __publicField(this, "_handled", false);
    // Hooks
    __publicField(this, "_onBeforeResponseCalled");
    __publicField(this, "_onAfterResponseCalled");
    this.node = { req, res };
  }
  // --- Request ---
  get method() {
    if (!this._method) {
      this._method = (this.node.req.method || "GET").toUpperCase();
    }
    return this._method;
  }
  get path() {
    return this._path || this.node.req.url || "/";
  }
  get headers() {
    if (!this._headers) {
      this._headers = _normalizeNodeHeaders(this.node.req.headers);
    }
    return this._headers;
  }
  // --- Respoonse ---
  get handled() {
    return this._handled || this.node.res.writableEnded || this.node.res.headersSent;
  }
  respondWith(response) {
    return Promise.resolve(response).then(
      (_response) => sendWebResponse(this, _response)
    );
  }
  // --- Utils ---
  toString() {
    return `[${this.method}] ${this.path}`;
  }
  toJSON() {
    return this.toString();
  }
  // --- Deprecated ---
  /** @deprecated Please use `event.node.req` instead. */
  get req() {
    return this.node.req;
  }
  /** @deprecated Please use `event.node.res` instead. */
  get res() {
    return this.node.res;
  }
}
function isEvent(input) {
  return hasProp(input, "__is_event__");
}
function createEvent(req, res) {
  return new H3Event(req, res);
}
function _normalizeNodeHeaders(nodeHeaders) {
  const headers = new Headers();
  for (const [name, value] of Object.entries(nodeHeaders)) {
    if (Array.isArray(value)) {
      for (const item of value) {
        headers.append(name, item);
      }
    } else if (value) {
      headers.set(name, value);
    }
  }
  return headers;
}

function defineEventHandler(handler) {
  if (typeof handler === "function") {
    handler.__is_handler__ = true;
    return handler;
  }
  const _hooks = {
    onRequest: _normalizeArray(handler.onRequest),
    onBeforeResponse: _normalizeArray(handler.onBeforeResponse)
  };
  const _handler = (event) => {
    return _callHandler(event, handler.handler, _hooks);
  };
  _handler.__is_handler__ = true;
  _handler.__resolve__ = handler.handler.__resolve__;
  _handler.__websocket__ = handler.websocket;
  return _handler;
}
function _normalizeArray(input) {
  return input ? Array.isArray(input) ? input : [input] : void 0;
}
async function _callHandler(event, handler, hooks) {
  if (hooks.onRequest) {
    for (const hook of hooks.onRequest) {
      await hook(event);
      if (event.handled) {
        return;
      }
    }
  }
  const body = await handler(event);
  const response = { body };
  if (hooks.onBeforeResponse) {
    for (const hook of hooks.onBeforeResponse) {
      await hook(event, response);
    }
  }
  return response.body;
}
const eventHandler = defineEventHandler;
function isEventHandler(input) {
  return hasProp(input, "__is_handler__");
}
function toEventHandler(input, _, _route) {
  if (!isEventHandler(input)) {
    console.warn(
      "[h3] Implicit event handler conversion is deprecated. Use `eventHandler()` or `fromNodeMiddleware()` to define event handlers.",
      _route && _route !== "/" ? `
     Route: ${_route}` : "",
      `
     Handler: ${input}`
    );
  }
  return input;
}
function defineLazyEventHandler(factory) {
  let _promise;
  let _resolved;
  const resolveHandler = () => {
    if (_resolved) {
      return Promise.resolve(_resolved);
    }
    if (!_promise) {
      _promise = Promise.resolve(factory()).then((r) => {
        const handler2 = r.default || r;
        if (typeof handler2 !== "function") {
          throw new TypeError(
            "Invalid lazy handler result. It should be a function:",
            handler2
          );
        }
        _resolved = { handler: toEventHandler(r.default || r) };
        return _resolved;
      });
    }
    return _promise;
  };
  const handler = eventHandler((event) => {
    if (_resolved) {
      return _resolved.handler(event);
    }
    return resolveHandler().then((r) => r.handler(event));
  });
  handler.__resolve__ = resolveHandler;
  return handler;
}
const lazyEventHandler = defineLazyEventHandler;

function createApp(options = {}) {
  const stack = [];
  const handler = createAppEventHandler(stack, options);
  const resolve = createResolver(stack);
  handler.__resolve__ = resolve;
  const getWebsocket = cachedFn(() => websocketOptions(resolve, options));
  const app = {
    // @ts-expect-error
    use: (arg1, arg2, arg3) => use(app, arg1, arg2, arg3),
    resolve,
    handler,
    stack,
    options,
    get websocket() {
      return getWebsocket();
    }
  };
  return app;
}
function use(app, arg1, arg2, arg3) {
  if (Array.isArray(arg1)) {
    for (const i of arg1) {
      use(app, i, arg2, arg3);
    }
  } else if (Array.isArray(arg2)) {
    for (const i of arg2) {
      use(app, arg1, i, arg3);
    }
  } else if (typeof arg1 === "string") {
    app.stack.push(
      normalizeLayer({ ...arg3, route: arg1, handler: arg2 })
    );
  } else if (typeof arg1 === "function") {
    app.stack.push(normalizeLayer({ ...arg2, handler: arg1 }));
  } else {
    app.stack.push(normalizeLayer({ ...arg1 }));
  }
  return app;
}
function createAppEventHandler(stack, options) {
  const spacing = options.debug ? 2 : void 0;
  return eventHandler(async (event) => {
    event.node.req.originalUrl = event.node.req.originalUrl || event.node.req.url || "/";
    const _reqPath = event._path || event.node.req.url || "/";
    let _layerPath;
    if (options.onRequest) {
      await options.onRequest(event);
    }
    for (const layer of stack) {
      if (layer.route.length > 1) {
        if (!_reqPath.startsWith(layer.route)) {
          continue;
        }
        _layerPath = _reqPath.slice(layer.route.length) || "/";
      } else {
        _layerPath = _reqPath;
      }
      if (layer.match && !layer.match(_layerPath, event)) {
        continue;
      }
      event._path = _layerPath;
      event.node.req.url = _layerPath;
      const val = await layer.handler(event);
      const _body = val === void 0 ? void 0 : await val;
      if (_body !== void 0) {
        const _response = { body: _body };
        if (options.onBeforeResponse) {
          event._onBeforeResponseCalled = true;
          await options.onBeforeResponse(event, _response);
        }
        await handleHandlerResponse(event, _response.body, spacing);
        if (options.onAfterResponse) {
          event._onAfterResponseCalled = true;
          await options.onAfterResponse(event, _response);
        }
        return;
      }
      if (event.handled) {
        if (options.onAfterResponse) {
          event._onAfterResponseCalled = true;
          await options.onAfterResponse(event, void 0);
        }
        return;
      }
    }
    if (!event.handled) {
      throw createError$1({
        statusCode: 404,
        statusMessage: `Cannot find any path matching ${event.path || "/"}.`
      });
    }
    if (options.onAfterResponse) {
      event._onAfterResponseCalled = true;
      await options.onAfterResponse(event, void 0);
    }
  });
}
function createResolver(stack) {
  return async (path) => {
    let _layerPath;
    for (const layer of stack) {
      if (layer.route === "/" && !layer.handler.__resolve__) {
        continue;
      }
      if (!path.startsWith(layer.route)) {
        continue;
      }
      _layerPath = path.slice(layer.route.length) || "/";
      if (layer.match && !layer.match(_layerPath, void 0)) {
        continue;
      }
      let res = { route: layer.route, handler: layer.handler };
      if (res.handler.__resolve__) {
        const _res = await res.handler.__resolve__(_layerPath);
        if (!_res) {
          continue;
        }
        res = {
          ...res,
          ..._res,
          route: joinURL(res.route || "/", _res.route || "/")
        };
      }
      return res;
    }
  };
}
function normalizeLayer(input) {
  let handler = input.handler;
  if (handler.handler) {
    handler = handler.handler;
  }
  if (input.lazy) {
    handler = lazyEventHandler(handler);
  } else if (!isEventHandler(handler)) {
    handler = toEventHandler(handler, void 0, input.route);
  }
  return {
    route: withoutTrailingSlash(input.route),
    match: input.match,
    handler
  };
}
function handleHandlerResponse(event, val, jsonSpace) {
  if (val === null) {
    return sendNoContent(event);
  }
  if (val) {
    if (isWebResponse(val)) {
      return sendWebResponse(event, val);
    }
    if (isStream(val)) {
      return sendStream(event, val);
    }
    if (val.buffer) {
      return send(event, val);
    }
    if (val.arrayBuffer && typeof val.arrayBuffer === "function") {
      return val.arrayBuffer().then((arrayBuffer) => {
        return send(event, Buffer.from(arrayBuffer), val.type);
      });
    }
    if (val instanceof Error) {
      throw createError$1(val);
    }
    if (typeof val.end === "function") {
      return true;
    }
  }
  const valType = typeof val;
  if (valType === "string") {
    return send(event, val, MIMES.html);
  }
  if (valType === "object" || valType === "boolean" || valType === "number") {
    return send(event, JSON.stringify(val, void 0, jsonSpace), MIMES.json);
  }
  if (valType === "bigint") {
    return send(event, val.toString(), MIMES.json);
  }
  throw createError$1({
    statusCode: 500,
    statusMessage: `[h3] Cannot send ${valType} as response.`
  });
}
function cachedFn(fn) {
  let cache;
  return () => {
    if (!cache) {
      cache = fn();
    }
    return cache;
  };
}
function websocketOptions(evResolver, appOptions) {
  return {
    ...appOptions.websocket,
    async resolve(info) {
      const url = info.request?.url || info.url || "/";
      const { pathname } = typeof url === "string" ? parseURL(url) : url;
      const resolved = await evResolver(pathname);
      return resolved?.handler?.__websocket__ || {};
    }
  };
}

const RouterMethods = [
  "connect",
  "delete",
  "get",
  "head",
  "options",
  "post",
  "put",
  "trace",
  "patch"
];
function createRouter(opts = {}) {
  const _router = createRouter$1({});
  const routes = {};
  let _matcher;
  const router = {};
  const addRoute = (path, handler, method) => {
    let route = routes[path];
    if (!route) {
      routes[path] = route = { path, handlers: {} };
      _router.insert(path, route);
    }
    if (Array.isArray(method)) {
      for (const m of method) {
        addRoute(path, handler, m);
      }
    } else {
      route.handlers[method] = toEventHandler(handler, void 0, path);
    }
    return router;
  };
  router.use = router.add = (path, handler, method) => addRoute(path, handler, method || "all");
  for (const method of RouterMethods) {
    router[method] = (path, handle) => router.add(path, handle, method);
  }
  const matchHandler = (path = "/", method = "get") => {
    const qIndex = path.indexOf("?");
    if (qIndex !== -1) {
      path = path.slice(0, Math.max(0, qIndex));
    }
    const matched = _router.lookup(path);
    if (!matched || !matched.handlers) {
      return {
        error: createError$1({
          statusCode: 404,
          name: "Not Found",
          statusMessage: `Cannot find any route matching ${path || "/"}.`
        })
      };
    }
    let handler = matched.handlers[method] || matched.handlers.all;
    if (!handler) {
      if (!_matcher) {
        _matcher = toRouteMatcher(_router);
      }
      const _matches = _matcher.matchAll(path).reverse();
      for (const _match of _matches) {
        if (_match.handlers[method]) {
          handler = _match.handlers[method];
          matched.handlers[method] = matched.handlers[method] || handler;
          break;
        }
        if (_match.handlers.all) {
          handler = _match.handlers.all;
          matched.handlers.all = matched.handlers.all || handler;
          break;
        }
      }
    }
    if (!handler) {
      return {
        error: createError$1({
          statusCode: 405,
          name: "Method Not Allowed",
          statusMessage: `Method ${method} is not allowed on this route.`
        })
      };
    }
    return { matched, handler };
  };
  const isPreemptive = opts.preemptive || opts.preemtive;
  router.handler = eventHandler((event) => {
    const match = matchHandler(
      event.path,
      event.method.toLowerCase()
    );
    if ("error" in match) {
      if (isPreemptive) {
        throw match.error;
      } else {
        return;
      }
    }
    event.context.matchedRoute = match.matched;
    const params = match.matched.params || {};
    event.context.params = params;
    return Promise.resolve(match.handler(event)).then((res) => {
      if (res === void 0 && isPreemptive) {
        return null;
      }
      return res;
    });
  });
  router.handler.__resolve__ = async (path) => {
    path = withLeadingSlash(path);
    const match = matchHandler(path);
    if ("error" in match) {
      return;
    }
    let res = {
      route: match.matched.path,
      handler: match.handler
    };
    if (match.handler.__resolve__) {
      const _res = await match.handler.__resolve__(path);
      if (!_res) {
        return;
      }
      res = { ...res, ..._res };
    }
    return res;
  };
  return router;
}
function toNodeListener(app) {
  const toNodeHandle = async function(req, res) {
    const event = createEvent(req, res);
    try {
      await app.handler(event);
    } catch (_error) {
      const error = createError$1(_error);
      if (!isError(_error)) {
        error.unhandled = true;
      }
      setResponseStatus(event, error.statusCode, error.statusMessage);
      if (app.options.onError) {
        await app.options.onError(error, event);
      }
      if (event.handled) {
        return;
      }
      if (error.unhandled || error.fatal) {
        console.error("[h3]", error.fatal ? "[fatal]" : "[unhandled]", error);
      }
      if (app.options.onBeforeResponse && !event._onBeforeResponseCalled) {
        await app.options.onBeforeResponse(event, { body: error });
      }
      await sendError(event, error, !!app.options.debug);
      if (app.options.onAfterResponse && !event._onAfterResponseCalled) {
        await app.options.onAfterResponse(event, { body: error });
      }
    }
  };
  return toNodeHandle;
}

function flatHooks(configHooks, hooks = {}, parentName) {
  for (const key in configHooks) {
    const subHook = configHooks[key];
    const name = parentName ? `${parentName}:${key}` : key;
    if (typeof subHook === "object" && subHook !== null) {
      flatHooks(subHook, hooks, name);
    } else if (typeof subHook === "function") {
      hooks[name] = subHook;
    }
  }
  return hooks;
}
const defaultTask = { run: (function_) => function_() };
const _createTask = () => defaultTask;
const createTask = typeof console.createTask !== "undefined" ? console.createTask : _createTask;
function serialTaskCaller(hooks, args) {
  const name = args.shift();
  const task = createTask(name);
  return hooks.reduce(
    (promise, hookFunction) => promise.then(() => task.run(() => hookFunction(...args))),
    Promise.resolve()
  );
}
function parallelTaskCaller(hooks, args) {
  const name = args.shift();
  const task = createTask(name);
  return Promise.all(hooks.map((hook) => task.run(() => hook(...args))));
}
function callEachWith(callbacks, arg0) {
  for (const callback of [...callbacks]) {
    callback(arg0);
  }
}

class Hookable {
  constructor() {
    this._hooks = {};
    this._before = void 0;
    this._after = void 0;
    this._deprecatedMessages = void 0;
    this._deprecatedHooks = {};
    this.hook = this.hook.bind(this);
    this.callHook = this.callHook.bind(this);
    this.callHookWith = this.callHookWith.bind(this);
  }
  hook(name, function_, options = {}) {
    if (!name || typeof function_ !== "function") {
      return () => {
      };
    }
    const originalName = name;
    let dep;
    while (this._deprecatedHooks[name]) {
      dep = this._deprecatedHooks[name];
      name = dep.to;
    }
    if (dep && !options.allowDeprecated) {
      let message = dep.message;
      if (!message) {
        message = `${originalName} hook has been deprecated` + (dep.to ? `, please use ${dep.to}` : "");
      }
      if (!this._deprecatedMessages) {
        this._deprecatedMessages = /* @__PURE__ */ new Set();
      }
      if (!this._deprecatedMessages.has(message)) {
        console.warn(message);
        this._deprecatedMessages.add(message);
      }
    }
    if (!function_.name) {
      try {
        Object.defineProperty(function_, "name", {
          get: () => "_" + name.replace(/\W+/g, "_") + "_hook_cb",
          configurable: true
        });
      } catch {
      }
    }
    this._hooks[name] = this._hooks[name] || [];
    this._hooks[name].push(function_);
    return () => {
      if (function_) {
        this.removeHook(name, function_);
        function_ = void 0;
      }
    };
  }
  hookOnce(name, function_) {
    let _unreg;
    let _function = (...arguments_) => {
      if (typeof _unreg === "function") {
        _unreg();
      }
      _unreg = void 0;
      _function = void 0;
      return function_(...arguments_);
    };
    _unreg = this.hook(name, _function);
    return _unreg;
  }
  removeHook(name, function_) {
    if (this._hooks[name]) {
      const index = this._hooks[name].indexOf(function_);
      if (index !== -1) {
        this._hooks[name].splice(index, 1);
      }
      if (this._hooks[name].length === 0) {
        delete this._hooks[name];
      }
    }
  }
  deprecateHook(name, deprecated) {
    this._deprecatedHooks[name] = typeof deprecated === "string" ? { to: deprecated } : deprecated;
    const _hooks = this._hooks[name] || [];
    delete this._hooks[name];
    for (const hook of _hooks) {
      this.hook(name, hook);
    }
  }
  deprecateHooks(deprecatedHooks) {
    Object.assign(this._deprecatedHooks, deprecatedHooks);
    for (const name in deprecatedHooks) {
      this.deprecateHook(name, deprecatedHooks[name]);
    }
  }
  addHooks(configHooks) {
    const hooks = flatHooks(configHooks);
    const removeFns = Object.keys(hooks).map(
      (key) => this.hook(key, hooks[key])
    );
    return () => {
      for (const unreg of removeFns.splice(0, removeFns.length)) {
        unreg();
      }
    };
  }
  removeHooks(configHooks) {
    const hooks = flatHooks(configHooks);
    for (const key in hooks) {
      this.removeHook(key, hooks[key]);
    }
  }
  removeAllHooks() {
    for (const key in this._hooks) {
      delete this._hooks[key];
    }
  }
  callHook(name, ...arguments_) {
    arguments_.unshift(name);
    return this.callHookWith(serialTaskCaller, name, ...arguments_);
  }
  callHookParallel(name, ...arguments_) {
    arguments_.unshift(name);
    return this.callHookWith(parallelTaskCaller, name, ...arguments_);
  }
  callHookWith(caller, name, ...arguments_) {
    const event = this._before || this._after ? { name, args: arguments_, context: {} } : void 0;
    if (this._before) {
      callEachWith(this._before, event);
    }
    const result = caller(
      name in this._hooks ? [...this._hooks[name]] : [],
      arguments_
    );
    if (result instanceof Promise) {
      return result.finally(() => {
        if (this._after && event) {
          callEachWith(this._after, event);
        }
      });
    }
    if (this._after && event) {
      callEachWith(this._after, event);
    }
    return result;
  }
  beforeEach(function_) {
    this._before = this._before || [];
    this._before.push(function_);
    return () => {
      if (this._before !== void 0) {
        const index = this._before.indexOf(function_);
        if (index !== -1) {
          this._before.splice(index, 1);
        }
      }
    };
  }
  afterEach(function_) {
    this._after = this._after || [];
    this._after.push(function_);
    return () => {
      if (this._after !== void 0) {
        const index = this._after.indexOf(function_);
        if (index !== -1) {
          this._after.splice(index, 1);
        }
      }
    };
  }
}
function createHooks() {
  return new Hookable();
}

const s=globalThis.Headers,i$1=globalThis.AbortController,l=globalThis.fetch||(()=>{throw new Error("[node-fetch-native] Failed to fetch: `globalThis.fetch` is not available!")});

class FetchError extends Error {
  constructor(message, opts) {
    super(message, opts);
    this.name = "FetchError";
    if (opts?.cause && !this.cause) {
      this.cause = opts.cause;
    }
  }
}
function createFetchError(ctx) {
  const errorMessage = ctx.error?.message || ctx.error?.toString() || "";
  const method = ctx.request?.method || ctx.options?.method || "GET";
  const url = ctx.request?.url || String(ctx.request) || "/";
  const requestStr = `[${method}] ${JSON.stringify(url)}`;
  const statusStr = ctx.response ? `${ctx.response.status} ${ctx.response.statusText}` : "<no response>";
  const message = `${requestStr}: ${statusStr}${errorMessage ? ` ${errorMessage}` : ""}`;
  const fetchError = new FetchError(
    message,
    ctx.error ? { cause: ctx.error } : void 0
  );
  for (const key of ["request", "options", "response"]) {
    Object.defineProperty(fetchError, key, {
      get() {
        return ctx[key];
      }
    });
  }
  for (const [key, refKey] of [
    ["data", "_data"],
    ["status", "status"],
    ["statusCode", "status"],
    ["statusText", "statusText"],
    ["statusMessage", "statusText"]
  ]) {
    Object.defineProperty(fetchError, key, {
      get() {
        return ctx.response && ctx.response[refKey];
      }
    });
  }
  return fetchError;
}

const payloadMethods = new Set(
  Object.freeze(["PATCH", "POST", "PUT", "DELETE"])
);
function isPayloadMethod(method = "GET") {
  return payloadMethods.has(method.toUpperCase());
}
function isJSONSerializable(value) {
  if (value === void 0) {
    return false;
  }
  const t = typeof value;
  if (t === "string" || t === "number" || t === "boolean" || t === null) {
    return true;
  }
  if (t !== "object") {
    return false;
  }
  if (Array.isArray(value)) {
    return true;
  }
  if (value.buffer) {
    return false;
  }
  return value.constructor && value.constructor.name === "Object" || typeof value.toJSON === "function";
}
const textTypes = /* @__PURE__ */ new Set([
  "image/svg",
  "application/xml",
  "application/xhtml",
  "application/html"
]);
const JSON_RE = /^application\/(?:[\w!#$%&*.^`~-]*\+)?json(;.+)?$/i;
function detectResponseType(_contentType = "") {
  if (!_contentType) {
    return "json";
  }
  const contentType = _contentType.split(";").shift() || "";
  if (JSON_RE.test(contentType)) {
    return "json";
  }
  if (textTypes.has(contentType) || contentType.startsWith("text/")) {
    return "text";
  }
  return "blob";
}
function resolveFetchOptions(request, input, defaults, Headers) {
  const headers = mergeHeaders(
    input?.headers ?? request?.headers,
    defaults?.headers,
    Headers
  );
  let query;
  if (defaults?.query || defaults?.params || input?.params || input?.query) {
    query = {
      ...defaults?.params,
      ...defaults?.query,
      ...input?.params,
      ...input?.query
    };
  }
  return {
    ...defaults,
    ...input,
    query,
    params: query,
    headers
  };
}
function mergeHeaders(input, defaults, Headers) {
  if (!defaults) {
    return new Headers(input);
  }
  const headers = new Headers(defaults);
  if (input) {
    for (const [key, value] of Symbol.iterator in input || Array.isArray(input) ? input : new Headers(input)) {
      headers.set(key, value);
    }
  }
  return headers;
}
async function callHooks(context, hooks) {
  if (hooks) {
    if (Array.isArray(hooks)) {
      for (const hook of hooks) {
        await hook(context);
      }
    } else {
      await hooks(context);
    }
  }
}

const retryStatusCodes = /* @__PURE__ */ new Set([
  408,
  // Request Timeout
  409,
  // Conflict
  425,
  // Too Early (Experimental)
  429,
  // Too Many Requests
  500,
  // Internal Server Error
  502,
  // Bad Gateway
  503,
  // Service Unavailable
  504
  // Gateway Timeout
]);
const nullBodyResponses$1 = /* @__PURE__ */ new Set([101, 204, 205, 304]);
function createFetch$1(globalOptions = {}) {
  const {
    fetch = globalThis.fetch,
    Headers = globalThis.Headers,
    AbortController = globalThis.AbortController
  } = globalOptions;
  async function onError(context) {
    const isAbort = context.error && context.error.name === "AbortError" && !context.options.timeout || false;
    if (context.options.retry !== false && !isAbort) {
      let retries;
      if (typeof context.options.retry === "number") {
        retries = context.options.retry;
      } else {
        retries = isPayloadMethod(context.options.method) ? 0 : 1;
      }
      const responseCode = context.response && context.response.status || 500;
      if (retries > 0 && (Array.isArray(context.options.retryStatusCodes) ? context.options.retryStatusCodes.includes(responseCode) : retryStatusCodes.has(responseCode))) {
        const retryDelay = typeof context.options.retryDelay === "function" ? context.options.retryDelay(context) : context.options.retryDelay || 0;
        if (retryDelay > 0) {
          await new Promise((resolve) => setTimeout(resolve, retryDelay));
        }
        return $fetchRaw(context.request, {
          ...context.options,
          retry: retries - 1
        });
      }
    }
    const error = createFetchError(context);
    if (Error.captureStackTrace) {
      Error.captureStackTrace(error, $fetchRaw);
    }
    throw error;
  }
  const $fetchRaw = async function $fetchRaw2(_request, _options = {}) {
    const context = {
      request: _request,
      options: resolveFetchOptions(
        _request,
        _options,
        globalOptions.defaults,
        Headers
      ),
      response: void 0,
      error: void 0
    };
    if (context.options.method) {
      context.options.method = context.options.method.toUpperCase();
    }
    if (context.options.onRequest) {
      await callHooks(context, context.options.onRequest);
    }
    if (typeof context.request === "string") {
      if (context.options.baseURL) {
        context.request = withBase(context.request, context.options.baseURL);
      }
      if (context.options.query) {
        context.request = withQuery(context.request, context.options.query);
        delete context.options.query;
      }
      if ("query" in context.options) {
        delete context.options.query;
      }
      if ("params" in context.options) {
        delete context.options.params;
      }
    }
    if (context.options.body && isPayloadMethod(context.options.method)) {
      if (isJSONSerializable(context.options.body)) {
        context.options.body = typeof context.options.body === "string" ? context.options.body : JSON.stringify(context.options.body);
        context.options.headers = new Headers(context.options.headers || {});
        if (!context.options.headers.has("content-type")) {
          context.options.headers.set("content-type", "application/json");
        }
        if (!context.options.headers.has("accept")) {
          context.options.headers.set("accept", "application/json");
        }
      } else if (
        // ReadableStream Body
        "pipeTo" in context.options.body && typeof context.options.body.pipeTo === "function" || // Node.js Stream Body
        typeof context.options.body.pipe === "function"
      ) {
        if (!("duplex" in context.options)) {
          context.options.duplex = "half";
        }
      }
    }
    let abortTimeout;
    if (!context.options.signal && context.options.timeout) {
      const controller = new AbortController();
      abortTimeout = setTimeout(() => {
        const error = new Error(
          "[TimeoutError]: The operation was aborted due to timeout"
        );
        error.name = "TimeoutError";
        error.code = 23;
        controller.abort(error);
      }, context.options.timeout);
      context.options.signal = controller.signal;
    }
    try {
      context.response = await fetch(
        context.request,
        context.options
      );
    } catch (error) {
      context.error = error;
      if (context.options.onRequestError) {
        await callHooks(
          context,
          context.options.onRequestError
        );
      }
      return await onError(context);
    } finally {
      if (abortTimeout) {
        clearTimeout(abortTimeout);
      }
    }
    const hasBody = (context.response.body || // https://github.com/unjs/ofetch/issues/324
    // https://github.com/unjs/ofetch/issues/294
    // https://github.com/JakeChampion/fetch/issues/1454
    context.response._bodyInit) && !nullBodyResponses$1.has(context.response.status) && context.options.method !== "HEAD";
    if (hasBody) {
      const responseType = (context.options.parseResponse ? "json" : context.options.responseType) || detectResponseType(context.response.headers.get("content-type") || "");
      switch (responseType) {
        case "json": {
          const data = await context.response.text();
          const parseFunction = context.options.parseResponse || destr;
          context.response._data = parseFunction(data);
          break;
        }
        case "stream": {
          context.response._data = context.response.body || context.response._bodyInit;
          break;
        }
        default: {
          context.response._data = await context.response[responseType]();
        }
      }
    }
    if (context.options.onResponse) {
      await callHooks(
        context,
        context.options.onResponse
      );
    }
    if (!context.options.ignoreResponseError && context.response.status >= 400 && context.response.status < 600) {
      if (context.options.onResponseError) {
        await callHooks(
          context,
          context.options.onResponseError
        );
      }
      return await onError(context);
    }
    return context.response;
  };
  const $fetch = async function $fetch2(request, options) {
    const r = await $fetchRaw(request, options);
    return r._data;
  };
  $fetch.raw = $fetchRaw;
  $fetch.native = (...args) => fetch(...args);
  $fetch.create = (defaultOptions = {}, customGlobalOptions = {}) => createFetch$1({
    ...globalOptions,
    ...customGlobalOptions,
    defaults: {
      ...globalOptions.defaults,
      ...customGlobalOptions.defaults,
      ...defaultOptions
    }
  });
  return $fetch;
}

function createNodeFetch() {
  const useKeepAlive = JSON.parse(process.env.FETCH_KEEP_ALIVE || "false");
  if (!useKeepAlive) {
    return l;
  }
  const agentOptions = { keepAlive: true };
  const httpAgent = new http__default$1.Agent(agentOptions);
  const httpsAgent = new node_https__default.Agent(agentOptions);
  const nodeFetchOptions = {
    agent(parsedURL) {
      return parsedURL.protocol === "http:" ? httpAgent : httpsAgent;
    }
  };
  return function nodeFetchWithKeepAlive(input, init) {
    return l(input, { ...nodeFetchOptions, ...init });
  };
}
const fetch = globalThis.fetch ? (...args) => globalThis.fetch(...args) : createNodeFetch();
const Headers$1 = globalThis.Headers || s;
const AbortController$1 = globalThis.AbortController || i$1;
createFetch$1({ fetch, Headers: Headers$1, AbortController: AbortController$1 });

const nullBodyResponses = /* @__PURE__ */ new Set([101, 204, 205, 304]);
function createCall(handle) {
  return function callHandle(context) {
    const req = new IncomingMessage();
    const res = new ServerResponse(req);
    req.url = context.url || "/";
    req.method = context.method || "GET";
    req.headers = {};
    if (context.headers) {
      const headerEntries = typeof context.headers.entries === "function" ? context.headers.entries() : Object.entries(context.headers);
      for (const [name, value] of headerEntries) {
        if (!value) {
          continue;
        }
        req.headers[name.toLowerCase()] = value;
      }
    }
    req.headers.host = req.headers.host || context.host || "localhost";
    req.connection.encrypted = // @ts-ignore
    req.connection.encrypted || context.protocol === "https";
    req.body = context.body || null;
    req.__unenv__ = context.context;
    return handle(req, res).then(() => {
      let body = res._data;
      if (nullBodyResponses.has(res.statusCode) || req.method.toUpperCase() === "HEAD") {
        body = null;
        delete res._headers["content-length"];
      }
      const r = {
        body,
        headers: res._headers,
        status: res.statusCode,
        statusText: res.statusMessage
      };
      req.destroy();
      res.destroy();
      return r;
    });
  };
}

function createFetch(call, _fetch = global.fetch) {
  return async function ufetch(input, init) {
    const url = input.toString();
    if (!url.startsWith("/")) {
      return _fetch(url, init);
    }
    try {
      const r = await call({ url, ...init });
      return new Response(r.body, {
        status: r.status,
        statusText: r.statusText,
        headers: Object.fromEntries(
          Object.entries(r.headers).map(([name, value]) => [
            name,
            Array.isArray(value) ? value.join(",") : String(value) || ""
          ])
        )
      });
    } catch (error) {
      return new Response(error.toString(), {
        status: Number.parseInt(error.statusCode || error.code) || 500,
        statusText: error.statusText
      });
    }
  };
}

function hasReqHeader(event, name, includes) {
  const value = getRequestHeader(event, name);
  return value && typeof value === "string" && value.toLowerCase().includes(includes);
}
function isJsonRequest(event) {
  if (hasReqHeader(event, "accept", "text/html")) {
    return false;
  }
  return hasReqHeader(event, "accept", "application/json") || hasReqHeader(event, "user-agent", "curl/") || hasReqHeader(event, "user-agent", "httpie/") || hasReqHeader(event, "sec-fetch-mode", "cors") || event.path.startsWith("/api/") || event.path.endsWith(".json");
}
function normalizeError(error, isDev) {
  const cwd = typeof process.cwd === "function" ? process.cwd() : "/";
  const stack = (error.unhandled || error.fatal) ? [] : (error.stack || "").split("\n").splice(1).filter((line) => line.includes("at ")).map((line) => {
    const text = line.replace(cwd + "/", "./").replace("webpack:/", "").replace("file://", "").trim();
    return {
      text,
      internal: line.includes("node_modules") && !line.includes(".cache") || line.includes("internal") || line.includes("new Promise")
    };
  });
  const statusCode = error.statusCode || 500;
  const statusMessage = error.statusMessage ?? (statusCode === 404 ? "Not Found" : "");
  const message = error.unhandled ? "internal server error" : error.message || error.toString();
  return {
    stack,
    statusCode,
    statusMessage,
    message
  };
}
function _captureError(error, type) {
  console.error(`[nitro] [${type}]`, error);
  useNitroApp().captureError(error, { tags: [type] });
}
function trapUnhandledNodeErrors() {
  process.on(
    "unhandledRejection",
    (error) => _captureError(error, "unhandledRejection")
  );
  process.on(
    "uncaughtException",
    (error) => _captureError(error, "uncaughtException")
  );
}
function joinHeaders(value) {
  return Array.isArray(value) ? value.join(", ") : String(value);
}
function normalizeFetchResponse(response) {
  if (!response.headers.has("set-cookie")) {
    return response;
  }
  return new Response(response.body, {
    status: response.status,
    statusText: response.statusText,
    headers: normalizeCookieHeaders(response.headers)
  });
}
function normalizeCookieHeader(header = "") {
  return splitCookiesString(joinHeaders(header));
}
function normalizeCookieHeaders(headers) {
  const outgoingHeaders = new Headers();
  for (const [name, header] of headers) {
    if (name === "set-cookie") {
      for (const cookie of normalizeCookieHeader(header)) {
        outgoingHeaders.append("set-cookie", cookie);
      }
    } else {
      outgoingHeaders.set(name, joinHeaders(header));
    }
  }
  return outgoingHeaders;
}

function defineNitroErrorHandler(handler) {
  return handler;
}
const errorHandler = defineNitroErrorHandler(
  function defaultNitroErrorHandler(error, event) {
    const { stack, statusCode, statusMessage, message } = normalizeError(
      error);
    const errorObject = {
      url: event.path || "",
      statusCode,
      statusMessage,
      message,
      stack: void 0
    };
    if (error.unhandled || error.fatal) {
      const tags = [
        "[nitro]",
        "[request error]",
        error.unhandled && "[unhandled]",
        error.fatal && "[fatal]"
      ].filter(Boolean).join(" ");
      console.error(
        tags,
        error.message + "\n" + stack.map((l) => "  " + l.text).join("  \n")
      );
    }
    if (statusCode === 404) {
      setResponseHeader(event, "Cache-Control", "no-cache");
    }
    setResponseStatus(event, statusCode, statusMessage);
    if (isJsonRequest(event)) {
      setResponseHeader(event, "Content-Type", "application/json");
      return send(event, JSON.stringify(errorObject));
    }
    setResponseHeader(event, "Content-Type", "text/html");
    return send(event, renderHTMLError(errorObject));
  }
);
function renderHTMLError(error) {
  const statusCode = error.statusCode || 500;
  const statusMessage = error.statusMessage || "Request Error";
  return `<!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>${statusCode} ${statusMessage}</title>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@picocss/pico/css/pico.min.css">
  </head>
  <body>
    <main class="container">
      <dialog open>
        <article>
          <header>
            <h2>${statusCode} ${statusMessage}</h2>
          </header>
          <code>
            ${error.message}<br><br>
            ${"\n" + (error.stack || []).map((i) => `&nbsp;&nbsp;${i}`).join("<br>")}
          </code>
          <footer>
            <a href="/" onclick="event.preventDefault();history.back();">Go Back</a>
          </footer>
        </article>
      </dialog>
    </main>
  </body>
</html>
`;
}

const appConfig$1 = {"name":"vinxi","routers":[{"name":"public","type":"static","dir":"./public","base":"/","root":"/home/alex/Github/smartflow/apps/admin","order":0,"outDir":"/home/alex/Github/smartflow/apps/admin/.vinxi/build/public"},{"name":"client","type":"client","target":"browser","handler":"app/client.tsx","base":"/_build","build":{"sourcemap":true},"root":"/home/alex/Github/smartflow/apps/admin","outDir":"/home/alex/Github/smartflow/apps/admin/.vinxi/build/client","order":1},{"name":"ssr","type":"http","target":"server","handler":"app/ssr.tsx","link":{"client":"client"},"root":"/home/alex/Github/smartflow/apps/admin","base":"/","outDir":"/home/alex/Github/smartflow/apps/admin/.vinxi/build/ssr","order":2},{"name":"server","type":"http","target":"server","base":"/_server","handler":"../../node_modules/.pnpm/@tanstack+start@1.91.2_@libsql+client@0.14.0_@types+node@22.10.2_drizzle-orm@0.36.4_@libsql+c_jxgf2xeexl2k52vpzvk6jvkwtq/node_modules/@tanstack/start/dist/esm/server-handler/index.js","root":"/home/alex/Github/smartflow/apps/admin","outDir":"/home/alex/Github/smartflow/apps/admin/.vinxi/build/server","order":3},{"name":"api","base":"/api","type":"http","handler":"app/api.ts","target":"server","root":"/home/alex/Github/smartflow/apps/admin","outDir":"/home/alex/Github/smartflow/apps/admin/.vinxi/build/api","order":4}],"server":{"preset":"node-server","experimental":{"asyncContext":true}},"root":"/home/alex/Github/smartflow/apps/admin"};
				const buildManifest = {"client":{"/home/alex/Github/smartflow/apps/admin/app/styles/app.css":{"file":"assets/app-C95hcxyN.css","src":"/home/alex/Github/smartflow/apps/admin/app/styles/app.css"},"_client-S9szjlsc.js":{"file":"assets/client-S9szjlsc.js","name":"client","dynamicImports":["app/routes/first-launch.tsx?tsr-split","app/routes/index.tsx?tsr-split"],"assets":["assets/app-C95hcxyN.css"]},"app/routes/first-launch.tsx?tsr-split":{"file":"assets/first-launch-BTNi7KV-.js","name":"first-launch","src":"app/routes/first-launch.tsx?tsr-split","isDynamicEntry":true,"imports":["_client-S9szjlsc.js"]},"app/routes/index.tsx?tsr-split":{"file":"assets/index-C_Z9ab4V.js","name":"index","src":"app/routes/index.tsx?tsr-split","isDynamicEntry":true,"imports":["_client-S9szjlsc.js"]},"virtual:$vinxi/handler/client":{"file":"assets/client-DwHcPOMt.js","name":"client","src":"virtual:$vinxi/handler/client","isEntry":true,"imports":["_client-S9szjlsc.js"]}},"ssr":{"/home/alex/Github/smartflow/apps/admin/app/styles/app.css":{"file":"assets/app-C95hcxyN.css","src":"/home/alex/Github/smartflow/apps/admin/app/styles/app.css"},"app/routes/first-launch.tsx?tsr-split":{"file":"assets/first-launch-DUIftxPJ.js","name":"first-launch","src":"app/routes/first-launch.tsx?tsr-split","isDynamicEntry":true},"app/routes/index.tsx?tsr-split":{"file":"assets/index-BfrTTpz9.js","name":"index","src":"app/routes/index.tsx?tsr-split","isDynamicEntry":true},"virtual:$vinxi/handler/ssr":{"file":"ssr.js","name":"ssr","src":"virtual:$vinxi/handler/ssr","isEntry":true,"dynamicImports":["app/routes/first-launch.tsx?tsr-split","app/routes/index.tsx?tsr-split"],"assets":["assets/app-C95hcxyN.css"]}},"server":{"_http.mjs":{"file":"http.mjs","name":"http"},"app/utils/queries/auth.ts":{"file":"c_78j5o.mjs","name":"c_78j5o","src":"app/utils/queries/auth.ts","isEntry":true,"imports":["_http.mjs"]},"virtual:$vinxi/handler/server":{"file":"entry.mjs","name":"entry","src":"virtual:$vinxi/handler/server","isEntry":true,"imports":["_http.mjs"]}},"api":{"_index-C8oNvzK0.js":{"file":"assets/index-C8oNvzK0.js","name":"index","dynamicImports":["app/routes/api/auth/$.ts?pick=APIRoute","app/routes/api/auth/$.ts?pick=APIRoute"]},"app/routes/api/auth/$.ts?pick=APIRoute":{"file":"_.js","name":"_","src":"app/routes/api/auth/$.ts?pick=APIRoute","isEntry":true,"isDynamicEntry":true,"imports":["_index-C8oNvzK0.js"]},"virtual:$vinxi/handler/api":{"file":"api.js","name":"api","src":"virtual:$vinxi/handler/api","isEntry":true,"imports":["_index-C8oNvzK0.js"]}}};

				const routeManifest = {"api":{}};

        function createProdApp(appConfig) {
          return {
            config: { ...appConfig, buildManifest, routeManifest },
            getRouter(name) {
              return appConfig.routers.find(router => router.name === name)
            }
          }
        }

        function plugin$2(app) {
          const prodApp = createProdApp(appConfig$1);
          globalThis.app = prodApp;
        }

function plugin$1(app) {
	globalThis.$handle = (event) => app.h3App.handler(event);
}

/**
 * Traverses the module graph and collects assets for a given chunk
 *
 * @param {any} manifest Client manifest
 * @param {string} id Chunk id
 * @param {Map<string, string[]>} assetMap Cache of assets
 * @param {string[]} stack Stack of chunk ids to prevent circular dependencies
 * @returns Array of asset URLs
 */
function findAssetsInViteManifest(manifest, id, assetMap = new Map(), stack = []) {
	if (stack.includes(id)) {
		return [];
	}

	const cached = assetMap.get(id);
	if (cached) {
		return cached;
	}
	const chunk = manifest[id];
	if (!chunk) {
		return [];
	}

	const assets = [
		...(chunk.assets?.filter(Boolean) || []),
		...(chunk.css?.filter(Boolean) || [])
	];
	if (chunk.imports) {
		stack.push(id);
		for (let i = 0, l = chunk.imports.length; i < l; i++) {
			assets.push(...findAssetsInViteManifest(manifest, chunk.imports[i], assetMap, stack));
		}
		stack.pop();
	}
	assets.push(chunk.file);
	const all = Array.from(new Set(assets));
	assetMap.set(id, all);

	return all;
}

/** @typedef {import("../app.js").App & { config: { buildManifest: { [key:string]: any } }}} ProdApp */

function createHtmlTagsForAssets(router, app, assets) {
	return assets
		.filter(
			(asset) =>
				asset.endsWith(".css") ||
				asset.endsWith(".js") ||
				asset.endsWith(".mjs"),
		)
		.map((asset) => ({
			tag: "link",
			attrs: {
				href: joinURL(app.config.server.baseURL ?? "/", router.base, asset),
				key: join(app.config.server.baseURL ?? "", router.base, asset),
				...(asset.endsWith(".css")
					? { rel: "stylesheet", fetchPriority: "high" }
					: { rel: "modulepreload" }),
			},
		}));
}

/**
 *
 * @param {ProdApp} app
 * @returns
 */
function createProdManifest(app) {
	const manifest = new Proxy(
		{},
		{
			get(target, routerName) {
				invariant(typeof routerName === "string", "Bundler name expected");
				const router = app.getRouter(routerName);
				const bundlerManifest = app.config.buildManifest[routerName];

				invariant(
					router.type !== "static",
					"manifest not available for static router",
				);
				return {
					handler: router.handler,
					async assets() {
						/** @type {{ [key: string]: string[] }} */
						let assets = {};
						assets[router.handler] = await this.inputs[router.handler].assets();
						for (const route of (await router.internals.routes?.getRoutes()) ??
							[]) {
							assets[route.filePath] = await this.inputs[
								route.filePath
							].assets();
						}
						return assets;
					},
					async routes() {
						return (await router.internals.routes?.getRoutes()) ?? [];
					},
					async json() {
						/** @type {{ [key: string]: { output: string; assets: string[]} }} */
						let json = {};
						for (const input of Object.keys(this.inputs)) {
							json[input] = {
								output: this.inputs[input].output.path,
								assets: await this.inputs[input].assets(),
							};
						}
						return json;
					},
					chunks: new Proxy(
						{},
						{
							get(target, chunk) {
								invariant(typeof chunk === "string", "Chunk expected");
								const chunkPath = join(
									router.outDir,
									router.base,
									chunk + ".mjs",
								);
								return {
									import() {
										if (globalThis.$$chunks[chunk + ".mjs"]) {
											return globalThis.$$chunks[chunk + ".mjs"];
										}
										return import(
											/* @vite-ignore */ pathToFileURL(chunkPath).href
										);
									},
									output: {
										path: chunkPath,
									},
								};
							},
						},
					),
					inputs: new Proxy(
						{},
						{
							ownKeys(target) {
								const keys = Object.keys(bundlerManifest)
									.filter((id) => bundlerManifest[id].isEntry)
									.map((id) => id);
								return keys;
							},
							getOwnPropertyDescriptor(k) {
								return {
									enumerable: true,
									configurable: true,
								};
							},
							get(target, input) {
								invariant(typeof input === "string", "Input expected");
								if (router.target === "server") {
									const id =
										input === router.handler
											? virtualId(handlerModule(router))
											: input;
									return {
										assets() {
											return createHtmlTagsForAssets(
												router,
												app,
												findAssetsInViteManifest(bundlerManifest, id),
											);
										},
										output: {
											path: join(
												router.outDir,
												router.base,
												bundlerManifest[id].file,
											),
										},
									};
								} else if (router.target === "browser") {
									const id =
										input === router.handler && !input.endsWith(".html")
											? virtualId(handlerModule(router))
											: input;
									return {
										import() {
											return import(
												/* @vite-ignore */ joinURL(
													app.config.server.baseURL ?? "",
													router.base,
													bundlerManifest[id].file,
												)
											);
										},
										assets() {
											return createHtmlTagsForAssets(
												router,
												app,
												findAssetsInViteManifest(bundlerManifest, id),
											);
										},
										output: {
											path: joinURL(
												app.config.server.baseURL ?? "",
												router.base,
												bundlerManifest[id].file,
											),
										},
									};
								}
							},
						},
					),
				};
			},
		},
	);

	return manifest;
}

function plugin() {
	globalThis.MANIFEST =
		createProdManifest(globalThis.app)
			;
}

var S$1="Invariant failed";function I$1(t,e){if(!t)throw new Error(S$1)}function R$1(t={}){let e,o=!1;const r=n=>{if(e&&e!==n)throw new Error("Context conflict")};let s;if(t.asyncContext){const n=t.AsyncLocalStorage||globalThis.AsyncLocalStorage;n?s=new n:console.warn("[unctx] `AsyncLocalStorage` is not provided.");}const f=()=>{if(s&&e===void 0){const n=s.getStore();if(n!==void 0)return n}return e};return {use:()=>{const n=f();if(n===void 0)throw new Error("Context is not available");return n},tryUse:()=>f(),set:(n,a)=>{a||r(n),e=n,o=!0;},unset:()=>{e=void 0,o=!1;},call:(n,a)=>{r(n),e=n;try{return s?s.run(n,a):a()}finally{o||(e=void 0);}},async callAsync(n,a){e=n;const b=()=>{e=n;},l=()=>e===n?b:void 0;y$1.add(l);try{const w=s?s.run(n,a):a();return o||(e=void 0),await w}finally{y$1.delete(l);}}}}function T$2(t={}){const e={};return {get(o,r={}){return e[o]||(e[o]=R$1({...t,...r})),e[o]}}}const i=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof global<"u"?global:{},d$2="__unctx__",q$2=i[d$2]||(i[d$2]=T$2()),C$3=(t,e={})=>q$2.get(t,e),g$1="__unctx_async_handlers__",y$1=i[g$1]||(i[g$1]=new Set);function E$1(t){let e;const o=h(t),r={duplex:"half",method:t.method,headers:t.headers};return t.node.req.body instanceof ArrayBuffer?new Request(o,{...r,body:t.node.req.body}):new Request(o,{...r,get body(){return e||(e=W$2(t),e)}})}function A$1(t){return t.web??={request:E$1(t),url:h(t)},t.web.request}function L$2(){return U$3()}const p$1=Symbol("$HTTPEvent");function H$2(t){return typeof t=="object"&&(t instanceof H3Event||t?.[p$1]instanceof H3Event||t?.__is_event__===!0)}function c(t){return function(...e){let o=e[0];if(H$2(o))e[0]=o instanceof H3Event||o.__is_event__?o:o[p$1];else {if(!globalThis.app.config.server.experimental?.asyncContext)throw new Error("AsyncLocalStorage was not enabled. Use the `server.experimental.asyncContext: true` option in your app configuration to enable it. Or, pass the instance of HTTPEvent that you have as the first argument to the function.");if(o=L$2(),!o)throw new Error("No HTTPEvent found in AsyncLocalStorage. Make sure you are using the function within the server runtime.");e.unshift(o);}return t(...e)}}const h=c(getRequestURL),K$2=c(getResponseStatus),W$2=c(getRequestWebStream),B$2=c(A$1);function P$2(){return C$3("nitro-app",{asyncContext:!!globalThis.app.config.server.experimental?.asyncContext,AsyncLocalStorage:AsyncLocalStorage})}function U$3(){return P$2().use().event}

function B$1(e,n,r){return Object.assign(e,{url:"https://localhost:3000"})}function be$1(e){return e instanceof Headers?new Headers(e):Array.isArray(e)?new Headers(e):typeof e=="object"?new Headers(e):new Headers}function Te$1(...e){return e.reduce((n,r)=>{const o=be$1(r);for(const[a,s]of o.entries())n.set(a,s);return n},new Headers)}const Ae=[];function x(e,n){const r=n||e||{};return typeof r.method>"u"&&(r.method="GET"),{options:r,middleware:o=>x(void 0,Object.assign(r,{middleware:o})),validator:o=>x(void 0,Object.assign(r,{validator:o})),handler:(...o)=>{const[a,s]=o;Object.assign(r,{...a,extractedFn:a,serverFn:s}),I$1(a.url);const f=[...r.middleware||[],Ie$1(r)];return Object.assign(async y=>M$1(f,"client",{...a,method:r.method,data:y?.data,headers:y?.headers,context:Object.assign({},a)}).then(O=>O.result),{...a,__executeServer:y=>{const O=y instanceof FormData?we$1(y):y;return M$1(f,"server",{...a,...O}).then(T=>({result:T.result,context:T.sendContext}))}})}}}function we$1(e){const n=e.get("__TSR_CONTEXT");if(e.delete("__TSR_CONTEXT"),typeof n!="string")return {context:{},data:e};try{return {context:defaultTransformer.parse(n),data:e}}catch{return {data:e}}}function De(e){const n=new Set,r=[],o=a=>{a.forEach(s=>{s.options.middleware&&o(s.options.middleware),n.has(s)||(n.add(s),r.push(s));});};return o(e),r}const q$1=(e,n,r)=>e({data:n.data,context:n.context,sendContext:n.sendContext,method:n.method,next:o=>{const a={...n.context,...o?.context},s={...n.sendContext,...o?.sendContext??{}},f=Te$1(n.headers,o?.headers);return r({method:n.method,data:n.data,context:a,sendContext:s,headers:f,result:o?.result??n.result})}});function Ve$1(e,n){if(e==null)return {};if("~standard"in e){const r=e["~standard"].validate(n);if(r instanceof Promise)throw new Error("Async validation not supported");if(r.issues)throw new Error(JSON.stringify(r.issues,void 0,2));return r.value}if("parse"in e)return e.parse(n);if(typeof e=="function")return e(n);throw new Error("Invalid validator type!")}async function M$1(e,n,r){const o=De([...Ae,...e]),a=async s=>{const f=o.shift();if(!f)return s;f.options.validator&&(n!=="client"||f.options.validateClient)&&(s.data=await Ve$1(f.options.validator,s.data));const y=n==="client"?f.options.client:f.options.server;return y?q$1(y,s,async O=>{if(n==="client"&&f.options.clientAfter){const T=await a(O);return q$1(f.options.clientAfter,T,$=>$)}return a(O)}):a(s)};return a({...r,headers:r.headers||{},sendContext:r.sendContext||{},context:r.context||{}})}function Ie$1(e){return {_types:void 0,options:{validator:e.validator,validateClient:e.validateClient,client:async({next:n,sendContext:r,...o})=>{var a;const s=await((a=e.extractedFn)==null?void 0:a.call(e,{...o,context:r}));return n(s)},server:async({next:n,...r})=>{var o;const a=await((o=e.serverFn)==null?void 0:o.call(e,r));return n({result:a})}}}}var L$1={},N$1={exports:{}};const xe="dotenv",$e$1="16.4.7",je$1="Loads environment variables from .env file",ke$1="lib/main.js",Ce="lib/main.d.ts",Se$1={".":{types:"./lib/main.d.ts",require:"./lib/main.js",default:"./lib/main.js"},"./config":"./config.js","./config.js":"./config.js","./lib/env-options":"./lib/env-options.js","./lib/env-options.js":"./lib/env-options.js","./lib/cli-options":"./lib/cli-options.js","./lib/cli-options.js":"./lib/cli-options.js","./package.json":"./package.json"},Fe$1={"dts-check":"tsc --project tests/types/tsconfig.json",lint:"standard",pretest:"npm run lint && npm run dts-check",test:"tap run --allow-empty-coverage --disable-coverage --timeout=60000","test:coverage":"tap run --show-full-coverage --timeout=60000 --coverage-report=lcov",prerelease:"npm test",release:"standard-version"},Ke$1={type:"git",url:"git://github.com/motdotla/dotenv.git"},Re="https://dotenvx.com",qe$1=["dotenv","env",".env","environment","variables","config","settings"],Me$1="README.md",Le$1="BSD-2-Clause",Ye={"@types/node":"^18.11.3",decache:"^4.6.2",sinon:"^14.0.1",standard:"^17.0.0","standard-version":"^9.5.0",tap:"^19.2.0",typescript:"^4.8.4"},Ue$1={node:">=12"},Ge$1={fs:!1},Pe$1={name:xe,version:$e$1,description:je$1,main:ke$1,types:Ce,exports:Se$1,scripts:Fe$1,repository:Ke$1,funding:Re,keywords:qe$1,readmeFilename:Me$1,license:Le$1,devDependencies:Ye,engines:Ue$1,browser:Ge$1};var Y;function Be$1(){if(Y)return N$1.exports;Y=1;const e=se,n=ae,r=ie,o=require$$1$2,s=Pe$1.version,f=/(?:^|^)\s*(?:export\s+)?([\w.-]+)(?:\s*=\s*?|:\s+?)(\s*'(?:\\'|[^'])*'|\s*"(?:\\"|[^"])*"|\s*`(?:\\`|[^`])*`|[^#\r\n]+)?\s*(?:#.*)?(?:$|$)/mg;function y(t){const c={};let l=t.toString();l=l.replace(/\r\n?/mg,`
`);let v;for(;(v=f.exec(l))!=null;){const h=v[1];let i=v[2]||"";i=i.trim();const u=i[0];i=i.replace(/^(['"`])([\s\S]*)\1$/mg,"$2"),u==='"'&&(i=i.replace(/\\n/g,`
`),i=i.replace(/\\r/g,"\r")),c[h]=i;}return c}function O(t){const c=F(t),l=g.configDotenv({path:c});if(!l.parsed){const u=new Error(`MISSING_DATA: Cannot parse ${c} for an unknown reason`);throw u.code="MISSING_DATA",u}const v=S(t).split(","),h=v.length;let i;for(let u=0;u<h;u++)try{const m=v[u].trim(),_=J(l,m);i=g.decrypt(_.ciphertext,_.key);break}catch(m){if(u+1>=h)throw m}return g.parse(i)}function T(t){console.log(`[dotenv@${s}][INFO] ${t}`);}function $(t){console.log(`[dotenv@${s}][WARN] ${t}`);}function I(t){console.log(`[dotenv@${s}][DEBUG] ${t}`);}function S(t){return t&&t.DOTENV_KEY&&t.DOTENV_KEY.length>0?t.DOTENV_KEY:process.env.DOTENV_KEY&&process.env.DOTENV_KEY.length>0?process.env.DOTENV_KEY:""}function J(t,c){let l;try{l=new URL(c);}catch(m){if(m.code==="ERR_INVALID_URL"){const _=new Error("INVALID_DOTENV_KEY: Wrong format. Must be in valid uri format like dotenv://:key_1234@dotenvx.com/vault/.env.vault?environment=development");throw _.code="INVALID_DOTENV_KEY",_}throw m}const v=l.password;if(!v){const m=new Error("INVALID_DOTENV_KEY: Missing key part");throw m.code="INVALID_DOTENV_KEY",m}const h=l.searchParams.get("environment");if(!h){const m=new Error("INVALID_DOTENV_KEY: Missing environment part");throw m.code="INVALID_DOTENV_KEY",m}const i=`DOTENV_VAULT_${h.toUpperCase()}`,u=t.parsed[i];if(!u){const m=new Error(`NOT_FOUND_DOTENV_ENVIRONMENT: Cannot locate environment ${i} in your .env.vault file.`);throw m.code="NOT_FOUND_DOTENV_ENVIRONMENT",m}return {ciphertext:u,key:v}}function F(t){let c=null;if(t&&t.path&&t.path.length>0)if(Array.isArray(t.path))for(const l of t.path)e.existsSync(l)&&(c=l.endsWith(".vault")?l:`${l}.vault`);else c=t.path.endsWith(".vault")?t.path:`${t.path}.vault`;else c=n.resolve(process.cwd(),".env.vault");return e.existsSync(c)?c:null}function K(t){return t[0]==="~"?n.join(r.homedir(),t.slice(1)):t}function Q(t){T("Loading env from encrypted .env.vault");const c=g._parseVault(t);let l=process.env;return t&&t.processEnv!=null&&(l=t.processEnv),g.populate(l,c,t),{parsed:c}}function X(t){const c=n.resolve(process.cwd(),".env");let l="utf8";const v=!!(t&&t.debug);t&&t.encoding?l=t.encoding:v&&I("No encoding is specified. UTF-8 is used by default");let h=[c];if(t&&t.path)if(!Array.isArray(t.path))h=[K(t.path)];else {h=[];for(const _ of t.path)h.push(K(_));}let i;const u={};for(const _ of h)try{const A=g.parse(e.readFileSync(_,{encoding:l}));g.populate(u,A,t);}catch(A){v&&I(`Failed to load ${_} ${A.message}`),i=A;}let m=process.env;return t&&t.processEnv!=null&&(m=t.processEnv),g.populate(m,u,t),i?{parsed:u,error:i}:{parsed:u}}function Z(t){if(S(t).length===0)return g.configDotenv(t);const c=F(t);return c?g._configVault(t):($(`You set DOTENV_KEY but you are missing a .env.vault file at ${c}. Did you forget to build it?`),g.configDotenv(t))}function ee(t,c){const l=Buffer.from(c.slice(-64),"hex");let v=Buffer.from(t,"base64");const h=v.subarray(0,12),i=v.subarray(-16);v=v.subarray(12,-16);try{const u=o.createDecipheriv("aes-256-gcm",l,h);return u.setAuthTag(i),`${u.update(v)}${u.final()}`}catch(u){const m=u instanceof RangeError,_=u.message==="Invalid key length",A=u.message==="Unsupported state or unable to authenticate data";if(m||_){const D=new Error("INVALID_DOTENV_KEY: It must be 64 characters long (or more)");throw D.code="INVALID_DOTENV_KEY",D}else if(A){const D=new Error("DECRYPTION_FAILED: Please check your DOTENV_KEY");throw D.code="DECRYPTION_FAILED",D}else throw u}}function te(t,c,l={}){const v=!!(l&&l.debug),h=!!(l&&l.override);if(typeof c!="object"){const i=new Error("OBJECT_REQUIRED: Please check the processEnv argument being passed to populate");throw i.code="OBJECT_REQUIRED",i}for(const i of Object.keys(c))Object.prototype.hasOwnProperty.call(t,i)?(h===!0&&(t[i]=c[i]),v&&I(h===!0?`"${i}" is already defined and WAS overwritten`:`"${i}" is already defined and was NOT overwritten`)):t[i]=c[i];}const g={configDotenv:X,_configVault:Q,_parseVault:O,config:Z,decrypt:ee,parse:y,populate:te};return N$1.exports.configDotenv=g.configDotenv,N$1.exports._configVault=g._configVault,N$1.exports._parseVault=g._parseVault,N$1.exports.config=g.config,N$1.exports.decrypt=g.decrypt,N$1.exports.parse=g.parse,N$1.exports.populate=g.populate,N$1.exports=g,N$1.exports}var j$1,U$2;function He$1(){if(U$2)return j$1;U$2=1;const e={};return process.env.DOTENV_CONFIG_ENCODING!=null&&(e.encoding=process.env.DOTENV_CONFIG_ENCODING),process.env.DOTENV_CONFIG_PATH!=null&&(e.path=process.env.DOTENV_CONFIG_PATH),process.env.DOTENV_CONFIG_DEBUG!=null&&(e.debug=process.env.DOTENV_CONFIG_DEBUG),process.env.DOTENV_CONFIG_OVERRIDE!=null&&(e.override=process.env.DOTENV_CONFIG_OVERRIDE),process.env.DOTENV_CONFIG_DOTENV_KEY!=null&&(e.DOTENV_KEY=process.env.DOTENV_CONFIG_DOTENV_KEY),j$1=e,j$1}var k,G$1;function ze$1(){if(G$1)return k;G$1=1;const e=/^dotenv_config_(encoding|path|debug|override|DOTENV_KEY)=(.+)$/;return k=function(r){return r.reduce(function(o,a){const s=a.match(e);return s&&(o[s[1]]=s[2]),o},{})},k}var P$1;function We(){return P$1||(P$1=1,function(){Be$1().config(Object.assign({},He$1(),ze$1()(process.argv)));}()),L$1}We();if(!process.env.DATABASE_URL)throw new Error("Missing DATABASE_URL is required");const H$1=drizzle(process.env.DATABASE_URL),Je=z$2.union([z$2.string(),z$2.number(),z$2.boolean(),z$2.null()]),C$2=z$2.lazy(()=>z$2.union([Je,z$2.array(C$2),z$2.record(C$2)]));function Qe(e,n){const r=getTableColumns(e),o=Object.entries(r);let a=Object.fromEntries(o.map(([s,f])=>[s,z$1(f)]));n&&(a=Object.assign(a,Object.fromEntries(Object.entries(n).map(([s,f])=>[s,typeof f=="function"?f(a):f]))));for(const[s,f]of o)f.notNull?f.hasDefault&&(a[s]=a[s].optional()):a[s]=a[s].nullable().optional();return z$2.object(a)}function z$1(e){let n;if(function(r){return "enumValues"in r&&Array.isArray(r.enumValues)&&r.enumValues.length>0}(e)&&(n=e.enumValues.length?z$2.enum(e.enumValues):z$2.string()),!n){if(is(e,PgUUID))n=z$2.string().uuid();else if(e.dataType==="custom")n=z$2.any();else if(e.dataType==="json")n=C$2;else if(e.dataType==="array")n=z$2.array(z$1(e.baseColumn));else if(e.dataType==="number")n=z$2.number();else if(e.dataType==="bigint")n=z$2.bigint();else if(e.dataType==="boolean")n=z$2.boolean();else if(e.dataType==="date")n=z$2.date();else if(e.dataType==="string"){let r=z$2.string();(is(e,PgChar)||is(e,PgVarchar)||is(e,MySqlVarChar)||is(e,MySqlVarBinary)||is(e,MySqlChar)||is(e,SQLiteText))&&typeof e.length=="number"&&(r=r.max(e.length)),n=r;}}return n||(n=z$2.any()),n}const W$1=pgTable("project",{id:integer("id").primaryKey().generatedAlwaysAsIdentity(),name:text("name").notNull(),userId:text("userId").notNull().references(()=>w$1.id),description:text("description"),createdAt:timestamp("createdAt").notNull().defaultNow(),updatedAt:timestamp("updatedAt").notNull().defaultNow()}),Xe=Qe(W$1,{name:z$2.string().max(256),userId:z$2.string(),description:z$2.string().max(1024).optional()}).omit({id:!0,createdAt:!0,updatedAt:!0}),w$1=pgTable("user",{id:text("id").primaryKey(),name:text("name").notNull(),email:text("email").notNull().unique(),emailVerified:boolean("emailVerified").notNull(),image:text("image"),createdAt:timestamp("createdAt").notNull(),updatedAt:timestamp("updatedAt").notNull(),role:text("role"),banned:boolean("banned"),banReason:text("banReason"),banExpires:timestamp("banExpires")}),Ze$1=pgTable("session",{id:text("id").primaryKey(),expiresAt:timestamp("expiresAt").notNull(),token:text("token").notNull().unique(),createdAt:timestamp("createdAt").notNull(),updatedAt:timestamp("updatedAt").notNull(),ipAddress:text("ipAddress"),userAgent:text("userAgent"),userId:text("userId").notNull().references(()=>w$1.id),impersonatedBy:text("impersonatedBy")}),et$1=pgTable("account",{id:text("id").primaryKey(),accountId:text("accountId").notNull(),providerId:text("providerId").notNull(),userId:text("userId").notNull().references(()=>w$1.id),accessToken:text("accessToken"),refreshToken:text("refreshToken"),idToken:text("idToken"),accessTokenExpiresAt:timestamp("accessTokenExpiresAt"),refreshTokenExpiresAt:timestamp("refreshTokenExpiresAt"),scope:text("scope"),password:text("password"),createdAt:timestamp("createdAt").notNull(),updatedAt:timestamp("updatedAt").notNull()}),tt$1=pgTable("verification",{id:text("id").primaryKey(),identifier:text("identifier").notNull(),value:text("value").notNull(),expiresAt:timestamp("expiresAt").notNull(),createdAt:timestamp("createdAt"),updatedAt:timestamp("updatedAt")}),nt$1=Object.freeze(Object.defineProperty({__proto__:null,CreateProjectSchema:Xe,account:et$1,project:W$1,session:Ze$1,user:w$1,verification:tt$1},Symbol.toStringTag,{value:"Module"})),rt$1=betterAuth({database:drizzleAdapter(H$1,{provider:"pg",schema:nt$1}),plugins:[admin()],emailAndPassword:{enabled:!0,sendResetPassword:async({user:e,url:n,token:r},o)=>{console.log(`[FAKE] Reseting password to ${e.email} with token ${r} go to this url ${n}`);}},emailVerification:{sendOnSignUp:!0,requireEmailVerification:!0,sendVerificationEmail:async({user:e,url:n,token:r},o)=>{console.log(`[FAKE] Sending email to ${e.email} with token ${r} go to this url ${n}`);}}}),ot$1=x({method:"GET"}).handler(B$1(at$1),async()=>{const e=B$2();return await rt$1.api.getSession({headers:e.headers})}),st$1=x({method:"GET"}).handler(B$1(it$1),async()=>(await H$1.select().from(w$1).where(eq(w$1.role,"admin")).limit(1)).length===0);function at$1(e){return ot$1.__executeServer(e)}function it$1(e){return st$1.__executeServer(e)}

const mod_0_3 = /*#__PURE__*/Object.freeze({
	__proto__: null,
	$$function0: at$1,
	$$function1: it$1,
	fetchUser: ot$1,
	isFirstLaunch: st$1
});

const chunks = {};
				chunks['c_78j5o.mjs'] = mod_0_3;
			

			 function app() {
				 globalThis.$$chunks = chunks;
			 }

const plugins = [
  plugin$2,
plugin$1,
plugin,
app
];

const assets$1 = {
  "/apple-touch-icon.png": {
    "type": "image/png",
    "etag": "\"97b-2M2VJIPna0H/e2eCsiiOh0Veq+o\"",
    "mtime": "2025-01-10T11:54:19.330Z",
    "size": 2427,
    "path": "../public/apple-touch-icon.png"
  },
  "/favicon-96x96.png": {
    "type": "image/png",
    "etag": "\"5a6-HpisYySsNmbVrMXlpSccsuLOpFU\"",
    "mtime": "2025-01-10T11:54:19.330Z",
    "size": 1446,
    "path": "../public/favicon-96x96.png"
  },
  "/favicon.ico": {
    "type": "image/vnd.microsoft.icon",
    "etag": "\"3aee-Dm0jSG/yve/ANRQ/lEz/9f53JIw\"",
    "mtime": "2025-01-10T11:54:19.330Z",
    "size": 15086,
    "path": "../public/favicon.ico"
  },
  "/favicon.svg": {
    "type": "image/svg+xml",
    "etag": "\"5ed-c6isvOcGzW35uXfinMu8HJKwZOY\"",
    "mtime": "2025-01-10T11:54:19.330Z",
    "size": 1517,
    "path": "../public/favicon.svg"
  },
  "/site.webmanifest": {
    "type": "application/manifest+json",
    "etag": "\"1b5-d33RMB1+PUFDiEhuu6RNZ6XzSMs\"",
    "mtime": "2025-01-10T11:54:19.331Z",
    "size": 437,
    "path": "../public/site.webmanifest"
  },
  "/web-app-manifest-192x192.png": {
    "type": "image/png",
    "etag": "\"c11-shXGTYUBxAvZQSIhyyXsuogSoXc\"",
    "mtime": "2025-01-10T11:54:19.331Z",
    "size": 3089,
    "path": "../public/web-app-manifest-192x192.png"
  },
  "/web-app-manifest-512x512.png": {
    "type": "image/png",
    "etag": "\"3054-KTVDsGQD6qwoQI05gsruijShaq4\"",
    "mtime": "2025-01-10T11:54:19.331Z",
    "size": 12372,
    "path": "../public/web-app-manifest-512x512.png"
  },
  "/_build/server-functions-manifest.json": {
    "type": "application/json",
    "etag": "\"5b-30GP8ZkSPxX8yuLWmflgoiBy0fg\"",
    "mtime": "2025-01-10T11:54:19.342Z",
    "size": 91,
    "path": "../public/_build/server-functions-manifest.json"
  },
  "/assets/app-C95hcxyN.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"4d4f-6WMI/lcDcPagYunn0UR9/3oc4lM\"",
    "mtime": "2025-01-10T11:54:19.362Z",
    "size": 19791,
    "path": "../public/assets/app-C95hcxyN.css"
  },
  "/_build/.vite/manifest.json": {
    "type": "application/json",
    "etag": "\"481-dTGNAdUrqD/aIKdwqAvDvGHFj3o\"",
    "mtime": "2025-01-10T11:54:19.343Z",
    "size": 1153,
    "path": "../public/_build/.vite/manifest.json"
  },
  "/_build/assets/app-C95hcxyN.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"4d4f-6WMI/lcDcPagYunn0UR9/3oc4lM\"",
    "mtime": "2025-01-10T11:54:19.343Z",
    "size": 19791,
    "path": "../public/_build/assets/app-C95hcxyN.css"
  },
  "/_build/assets/client-DwHcPOMt.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"3f-id5mybjYLRz1bbqv+0tV2PDsHcM\"",
    "mtime": "2025-01-10T11:54:19.344Z",
    "size": 63,
    "path": "../public/_build/assets/client-DwHcPOMt.js"
  },
  "/_build/assets/client-S9szjlsc.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"5bcbb-rjhGP2+BVzFIrEsyDY0F/16RA0Q\"",
    "mtime": "2025-01-10T11:54:19.347Z",
    "size": 375995,
    "path": "../public/_build/assets/client-S9szjlsc.js"
  },
  "/_build/assets/first-launch-BTNi7KV-.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"8d-uu6EJDfzQ7mCXR8owAqMg2pkf6U\"",
    "mtime": "2025-01-10T11:54:19.345Z",
    "size": 141,
    "path": "../public/_build/assets/first-launch-BTNi7KV-.js"
  },
  "/_build/assets/index-C_Z9ab4V.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"81-pfmfCp/cVIN8fZc2Ff+pxBN3zS4\"",
    "mtime": "2025-01-10T11:54:19.345Z",
    "size": 129,
    "path": "../public/_build/assets/index-C_Z9ab4V.js"
  }
};

const _DRIVE_LETTER_START_RE = /^[A-Za-z]:\//;
function normalizeWindowsPath(input = "") {
  if (!input) {
    return input;
  }
  return input.replace(/\\/g, "/").replace(_DRIVE_LETTER_START_RE, (r) => r.toUpperCase());
}
const _IS_ABSOLUTE_RE = /^[/\\](?![/\\])|^[/\\]{2}(?!\.)|^[A-Za-z]:[/\\]/;
const _DRIVE_LETTER_RE = /^[A-Za-z]:$/;
function cwd() {
  if (typeof process !== "undefined" && typeof process.cwd === "function") {
    return process.cwd().replace(/\\/g, "/");
  }
  return "/";
}
const resolve = function(...arguments_) {
  arguments_ = arguments_.map((argument) => normalizeWindowsPath(argument));
  let resolvedPath = "";
  let resolvedAbsolute = false;
  for (let index = arguments_.length - 1; index >= -1 && !resolvedAbsolute; index--) {
    const path = index >= 0 ? arguments_[index] : cwd();
    if (!path || path.length === 0) {
      continue;
    }
    resolvedPath = `${path}/${resolvedPath}`;
    resolvedAbsolute = isAbsolute(path);
  }
  resolvedPath = normalizeString(resolvedPath, !resolvedAbsolute);
  if (resolvedAbsolute && !isAbsolute(resolvedPath)) {
    return `/${resolvedPath}`;
  }
  return resolvedPath.length > 0 ? resolvedPath : ".";
};
function normalizeString(path, allowAboveRoot) {
  let res = "";
  let lastSegmentLength = 0;
  let lastSlash = -1;
  let dots = 0;
  let char = null;
  for (let index = 0; index <= path.length; ++index) {
    if (index < path.length) {
      char = path[index];
    } else if (char === "/") {
      break;
    } else {
      char = "/";
    }
    if (char === "/") {
      if (lastSlash === index - 1 || dots === 1) ; else if (dots === 2) {
        if (res.length < 2 || lastSegmentLength !== 2 || res[res.length - 1] !== "." || res[res.length - 2] !== ".") {
          if (res.length > 2) {
            const lastSlashIndex = res.lastIndexOf("/");
            if (lastSlashIndex === -1) {
              res = "";
              lastSegmentLength = 0;
            } else {
              res = res.slice(0, lastSlashIndex);
              lastSegmentLength = res.length - 1 - res.lastIndexOf("/");
            }
            lastSlash = index;
            dots = 0;
            continue;
          } else if (res.length > 0) {
            res = "";
            lastSegmentLength = 0;
            lastSlash = index;
            dots = 0;
            continue;
          }
        }
        if (allowAboveRoot) {
          res += res.length > 0 ? "/.." : "..";
          lastSegmentLength = 2;
        }
      } else {
        if (res.length > 0) {
          res += `/${path.slice(lastSlash + 1, index)}`;
        } else {
          res = path.slice(lastSlash + 1, index);
        }
        lastSegmentLength = index - lastSlash - 1;
      }
      lastSlash = index;
      dots = 0;
    } else if (char === "." && dots !== -1) {
      ++dots;
    } else {
      dots = -1;
    }
  }
  return res;
}
const isAbsolute = function(p) {
  return _IS_ABSOLUTE_RE.test(p);
};
const dirname = function(p) {
  const segments = normalizeWindowsPath(p).replace(/\/$/, "").split("/").slice(0, -1);
  if (segments.length === 1 && _DRIVE_LETTER_RE.test(segments[0])) {
    segments[0] += "/";
  }
  return segments.join("/") || (isAbsolute(p) ? "/" : ".");
};

function readAsset (id) {
  const serverDir = dirname(fileURLToPath(globalThis._importMeta_.url));
  return promises.readFile(resolve(serverDir, assets$1[id].path))
}

const publicAssetBases = {};

function isPublicAssetURL(id = '') {
  if (assets$1[id]) {
    return true
  }
  for (const base in publicAssetBases) {
    if (id.startsWith(base)) { return true }
  }
  return false
}

function getAsset (id) {
  return assets$1[id]
}

const METHODS = /* @__PURE__ */ new Set(["HEAD", "GET"]);
const EncodingMap = { gzip: ".gz", br: ".br" };
const _2gg26d = eventHandler((event) => {
  if (event.method && !METHODS.has(event.method)) {
    return;
  }
  let id = decodePath(
    withLeadingSlash(withoutTrailingSlash(parseURL(event.path).pathname))
  );
  let asset;
  const encodingHeader = String(
    getRequestHeader(event, "accept-encoding") || ""
  );
  const encodings = [
    ...encodingHeader.split(",").map((e) => EncodingMap[e.trim()]).filter(Boolean).sort(),
    ""
  ];
  if (encodings.length > 1) {
    appendResponseHeader(event, "Vary", "Accept-Encoding");
  }
  for (const encoding of encodings) {
    for (const _id of [id + encoding, joinURL(id, "index.html" + encoding)]) {
      const _asset = getAsset(_id);
      if (_asset) {
        asset = _asset;
        id = _id;
        break;
      }
    }
  }
  if (!asset) {
    if (isPublicAssetURL(id)) {
      removeResponseHeader(event, "Cache-Control");
      throw createError$1({
        statusMessage: "Cannot find static asset " + id,
        statusCode: 404
      });
    }
    return;
  }
  const ifNotMatch = getRequestHeader(event, "if-none-match") === asset.etag;
  if (ifNotMatch) {
    setResponseStatus(event, 304, "Not Modified");
    return "";
  }
  const ifModifiedSinceH = getRequestHeader(event, "if-modified-since");
  const mtimeDate = new Date(asset.mtime);
  if (ifModifiedSinceH && asset.mtime && new Date(ifModifiedSinceH) >= mtimeDate) {
    setResponseStatus(event, 304, "Not Modified");
    return "";
  }
  if (asset.type && !getResponseHeader(event, "Content-Type")) {
    setResponseHeader(event, "Content-Type", asset.type);
  }
  if (asset.etag && !getResponseHeader(event, "ETag")) {
    setResponseHeader(event, "ETag", asset.etag);
  }
  if (asset.mtime && !getResponseHeader(event, "Last-Modified")) {
    setResponseHeader(event, "Last-Modified", mtimeDate.toUTCString());
  }
  if (asset.encoding && !getResponseHeader(event, "Content-Encoding")) {
    setResponseHeader(event, "Content-Encoding", asset.encoding);
  }
  if (asset.size > 0 && !getResponseHeader(event, "Content-Length")) {
    setResponseHeader(event, "Content-Length", asset.size);
  }
  return readAsset(id);
});

function T$1(e){return globalThis.MANIFEST[e]}const b=eventHandler(C$1);async function C$1(e){return j(A$1(e))}async function j(e,c){var r,d;const p=e.method,y=new URL(e.url,"http://localhost:3000"),o=Object.fromEntries(y.searchParams.entries()),s=o._serverFnId,u=o._serverFnName;if(!s||!u)throw new Error("Invalid request");I$1(typeof s=="string");const g=(d=await((r=T$1("server").chunks[s])==null?void 0:r.import()))==null?void 0:d[u],a=await(async()=>{try{const t=await(async()=>{var l;if((l=e.headers.get("Content-Type"))!=null&&l.includes("multipart/form-data"))return I$1(p.toLowerCase()!=="get","GET requests with FormData payloads are not supported"),await e.formData();if(p.toLowerCase()==="get")return o.payload?defaultTransformer.parse(o.payload):void 0;const w=await e.text();return defaultTransformer.parse(w)})(),n=await g(t);return n instanceof Response?n:isRedirect$1(n)||isNotFound(n)?m$1(n):new Response(n!==void 0?defaultTransformer.stringify(n):void 0,{status:K$2(U$3()),headers:{"Content-Type":"application/json"}})}catch(t){return t instanceof Response?t:isRedirect$1(t)||isNotFound(t)?m$1(t):(console.error("Server Fn Error!"),console.error(t),console.info(),new Response(JSON.stringify(t),{status:500,headers:{"Content-Type":"application/json"}}))}})();if(a.headers.get("Content-Type")==="application/json"){const n=await a.clone().text();n&&JSON.stringify(JSON.parse(n));}return a}function m$1(e){const{headers:c,...r}=e;return new Response(JSON.stringify(r),{status:200,headers:{"Content-Type":"application/json",...c||{}}})}

function S(t = {}) {
  let e, o = false;
  const i = (n) => {
    if (e && e !== n) throw new Error("Context conflict");
  };
  let r;
  if (t.asyncContext) {
    const n = t.AsyncLocalStorage || globalThis.AsyncLocalStorage;
    n ? r = new n() : console.warn("[unctx] `AsyncLocalStorage` is not provided.");
  }
  const s = () => {
    if (r && e === void 0) {
      const n = r.getStore();
      if (n !== void 0) return n;
    }
    return e;
  };
  return { use: () => {
    const n = s();
    if (n === void 0) throw new Error("Context is not available");
    return n;
  }, tryUse: () => s(), set: (n, a) => {
    a || i(n), e = n, o = true;
  }, unset: () => {
    e = void 0, o = false;
  }, call: (n, a) => {
    i(n), e = n;
    try {
      return r ? r.run(n, a) : a();
    } finally {
      o || (e = void 0);
    }
  }, async callAsync(n, a) {
    e = n;
    const u = () => {
      e = n;
    }, l = () => e === n ? u : void 0;
    y.add(l);
    try {
      const f = r ? r.run(n, a) : a();
      return o || (e = void 0), await f;
    } finally {
      y.delete(l);
    }
  } };
}
function T(t = {}) {
  const e = {};
  return { get(o, i = {}) {
    return e[o] || (e[o] = S({ ...t, ...i })), e[o];
  } };
}
const p = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof global < "u" ? global : {}, d$1 = "__unctx__", A = p[d$1] || (p[d$1] = T()), E = (t, e = {}) => A.get(t, e), m = "__unctx_async_handlers__", y = p[m] || (p[m] = /* @__PURE__ */ new Set());
function H(t) {
  let e;
  const o = R(t), i = { duplex: "half", method: t.method, headers: t.headers };
  return t.node.req.body instanceof ArrayBuffer ? new Request(o, { ...i, body: t.node.req.body }) : new Request(o, { ...i, get body() {
    return e || (e = $(t), e);
  } });
}
function C(t) {
  var _a;
  return (_a = t.web) != null ? _a : t.web = { request: H(t), url: R(t) }, t.web.request;
}
function I() {
  return W();
}
const w = Symbol("$HTTPEvent");
function L(t) {
  return typeof t == "object" && (t instanceof H3Event || (t == null ? void 0 : t[w]) instanceof H3Event || (t == null ? void 0 : t.__is_event__) === true);
}
function P(t) {
  return function(...e) {
    var _a;
    let o = e[0];
    if (L(o)) e[0] = o instanceof H3Event || o.__is_event__ ? o : o[w];
    else {
      if (!((_a = globalThis.app.config.server.experimental) == null ? void 0 : _a.asyncContext)) throw new Error("AsyncLocalStorage was not enabled. Use the `server.experimental.asyncContext: true` option in your app configuration to enable it. Or, pass the instance of HTTPEvent that you have as the first argument to the function.");
      if (o = I(), !o) throw new Error("No HTTPEvent found in AsyncLocalStorage. Make sure you are using the function within the server runtime.");
      e.unshift(o);
    }
    return t(...e);
  };
}
const R = P(getRequestURL), $ = P(getRequestWebStream);
function q() {
  var _a;
  return E("nitro-app", { asyncContext: !!((_a = globalThis.app.config.server.experimental) == null ? void 0 : _a.asyncContext), AsyncLocalStorage: AsyncLocalStorage });
}
function W() {
  return q().use().event;
}
const B = [{ path: "/__root", filePath: "/home/alex/Github/smartflow/apps/admin/app/routes/__root.tsx" }, { path: "/first-launch", filePath: "/home/alex/Github/smartflow/apps/admin/app/routes/first-launch.tsx" }, { path: "/", filePath: "/home/alex/Github/smartflow/apps/admin/app/routes/index.tsx" }, { path: "/api/auth/*splat", filePath: "/home/alex/Github/smartflow/apps/admin/app/routes/api/auth/$.ts", $APIRoute: { src: "app/routes/api/auth/$.ts?pick=APIRoute", build: () => import('../build/_.mjs'), import: () => import('../build/_.mjs') } }], N = ["GET", "POST", "PUT", "PATCH", "DELETE", "OPTIONS", "HEAD"];
function M(t) {
  return eventHandler(async (e) => {
    const o = C(e);
    return await t({ request: o });
  });
}
const D = (t) => (e) => ({ path: t, methods: e });
function U$1(t, e) {
  const o = t.pathname.split("/").filter(Boolean), i = e.sort((r, s) => {
    const n = r.routePath.split("/").filter(Boolean);
    return s.routePath.split("/").filter(Boolean).length - n.length;
  }).filter((r) => {
    const s = r.routePath.split("/").filter(Boolean);
    return o.length >= s.length;
  });
  for (const r of i) {
    const s = r.routePath.split("/").filter(Boolean), n = {};
    let a = true;
    for (let u = 0; u < s.length; u++) {
      const l = s[u], f = o[u];
      if (l.startsWith("$")) if (l === "$") {
        const c = o.slice(u).join("/");
        if (c !== "") n["*"] = c, n._splat = c;
        else {
          a = false;
          break;
        }
      } else {
        const c = l.slice(1);
        n[c] = f;
      }
      else if (l !== f) {
        a = false;
        break;
      }
    }
    if (a) return { routePath: r.routePath, params: n, payload: r.payload };
  }
}
const g = B.filter((t) => t.$APIRoute);
function F$1(t) {
  const e = [];
  return t.forEach((o) => {
    const r = o.path.split("/").filter(Boolean).map((s) => s === "*splat" ? "$" : s.startsWith(":$") && s.endsWith("?") ? s.slice(1, -1) : s).join("/");
    e.push({ routePath: `/${r}`, payload: o });
  }), e;
}
const K$1 = async ({ request: t }) => {
  if (!g.length) return new Response("No routes found", { status: 404 });
  if (!N.includes(t.method)) return new Response("Method not allowed", { status: 405 });
  const e = F$1(g), o = new URL(t.url, "http://localhost:3000"), i = U$1(o, e);
  if (!i) return new Response("Not found", { status: 404 });
  let r;
  try {
    r = await i.payload.$APIRoute.import().then((a) => a.APIRoute);
  } catch (a) {
    return console.error("Error importing route file:", a), new Response("Internal server error", { status: 500 });
  }
  if (!r) return new Response("Internal server error", { status: 500 });
  const s = t.method, n = r.methods[s];
  return n ? await n({ request: t, params: i.params }) : new Response("Method not allowed", { status: 405 });
};

const d = M(K$1);

const vr = () => ({ routes: { __root__: { filePath: "__root.tsx", children: ["/", "/first-launch"], preloads: ["/_build/assets/client-DwHcPOMt.js", "/_build/assets/client-S9szjlsc.js"] }, "/": { filePath: "index.tsx" }, "/first-launch": { filePath: "first-launch.tsx" } } });
function Ze(e) {
  return globalThis.MANIFEST[e];
}
function wr() {
  var _a;
  const e = vr(), t = e.routes.__root__ = e.routes.__root__ || {};
  t.assets = t.assets || [];
  const r = Ze("client");
  return t.assets.push({ tag: "script", attrs: { src: (_a = r.inputs[r.handler]) == null ? void 0 : _a.output.path, type: "module", async: true, suppressHydrationWarning: true } }), e;
}
function br() {
  const e = wr();
  return { ...e, routes: Object.fromEntries(Object.entries(e.routes).map(([t, r]) => {
    const { preloads: n, assets: s } = r;
    return [t, { preloads: n, assets: s }];
  })) };
}
class z {
  constructor() {
    this.cache = /* @__PURE__ */ new Map();
  }
  static create() {
    return z.instance || (z.instance = new z()), z.instance;
  }
  createContext(t, r) {
    const n = createContext$1(r);
    return this.cache.set(t, n), n;
  }
  get(t, r) {
    return this.cache.get(t) || this.createContext(t, r);
  }
}
const et = z.create();
function xr(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var le, ke;
function Er() {
  if (ke) return le;
  ke = 1;
  const e = {}, t = e.hasOwnProperty, r = (i, u) => {
    for (const _ in i) t.call(i, _) && u(_, i[_]);
  }, n = (i, u) => (u && r(u, (_, h) => {
    i[_] = h;
  }), i), s = (i, u) => {
    const _ = i.length;
    let h = -1;
    for (; ++h < _; ) u(i[h]);
  }, a = (i) => "\\u" + ("0000" + i).slice(-4), o = (i, u) => {
    let _ = i.toString(16);
    return u ? _ : _.toUpperCase();
  }, c = e.toString, d = Array.isArray, f = (i) => typeof Buffer == "function" && Buffer.isBuffer(i), m = (i) => c.call(i) == "[object Object]", v = (i) => typeof i == "string" || c.call(i) == "[object String]", b = (i) => typeof i == "number" || c.call(i) == "[object Number]", A = (i) => typeof i == "bigint", k = (i) => typeof i == "function", I = (i) => c.call(i) == "[object Map]", P = (i) => c.call(i) == "[object Set]", oe = { "\\": "\\\\", "\b": "\\b", "\f": "\\f", "\n": "\\n", "\r": "\\r", "	": "\\t" }, se = /[\\\b\f\n\r\t]/, ae = /[0-9]/, ie = /[\xA0\u1680\u2000-\u200A\u2028\u2029\u202F\u205F\u3000]/, S = /([\uD800-\uDBFF][\uDC00-\uDFFF])|([\uD800-\uDFFF])|(['"`])|[^]/g, l = /([\uD800-\uDBFF][\uDC00-\uDFFF])|([\uD800-\uDFFF])|(['"`])|[^ !#-&\(-\[\]-_a-~]/g, g = (i, u) => {
    const _ = () => {
      ce = j, ++u.indentLevel, j = u.indent.repeat(u.indentLevel);
    }, h = { escapeEverything: false, minimal: false, isScriptContext: false, quotes: "single", wrap: false, es6: false, json: false, compact: true, lowercaseHex: false, numbers: "decimal", indent: "	", indentLevel: 0, __inline1__: false, __inline2__: false }, y = u && u.json;
    y && (h.quotes = "double", h.wrap = true), u = n(h, u), u.quotes != "single" && u.quotes != "double" && u.quotes != "backtick" && (u.quotes = "single");
    const x = u.quotes == "double" ? '"' : u.quotes == "backtick" ? "`" : "'", T = u.compact, D = u.lowercaseHex;
    let j = u.indent.repeat(u.indentLevel), ce = "";
    const _t = u.__inline1__, X = u.__inline2__, B = T ? "" : `
`;
    let R, Z = true;
    const vt = u.numbers == "binary", wt = u.numbers == "octal", bt = u.numbers == "decimal", xt = u.numbers == "hexadecimal";
    if (y && i && k(i.toJSON) && (i = i.toJSON()), !v(i)) {
      if (I(i)) return i.size == 0 ? "new Map()" : (T || (u.__inline1__ = true, u.__inline2__ = false), "new Map(" + g(Array.from(i), u) + ")");
      if (P(i)) return i.size == 0 ? "new Set()" : "new Set(" + g(Array.from(i), u) + ")";
      if (f(i)) return i.length == 0 ? "Buffer.from([])" : "Buffer.from(" + g(Array.from(i), u) + ")";
      if (d(i)) return R = [], u.wrap = true, _t && (u.__inline1__ = false, u.__inline2__ = true), X || _(), s(i, (N) => {
        Z = false, X && (u.__inline2__ = false), R.push((T || X ? "" : j) + g(N, u));
      }), Z ? "[]" : X ? "[" + R.join(", ") + "]" : "[" + B + R.join("," + B) + B + (T ? "" : ce) + "]";
      if (b(i) || A(i)) {
        if (y) return JSON.stringify(Number(i));
        let N;
        if (bt) N = String(i);
        else if (xt) {
          let $ = i.toString(16);
          D || ($ = $.toUpperCase()), N = "0x" + $;
        } else vt ? N = "0b" + i.toString(2) : wt && (N = "0o" + i.toString(8));
        return A(i) ? N + "n" : N;
      } else return A(i) ? y ? JSON.stringify(Number(i)) : i + "n" : m(i) ? (R = [], u.wrap = true, _(), r(i, (N, $) => {
        Z = false, R.push((T ? "" : j) + g(N, u) + ":" + (T ? "" : " ") + g($, u));
      }), Z ? "{}" : "{" + B + R.join("," + B) + B + (T ? "" : ce) + "}") : y ? JSON.stringify(i) || "null" : String(i);
    }
    const Et = u.escapeEverything ? S : l;
    return R = i.replace(Et, (N, $, Re, ee, St, Tt) => {
      if ($) {
        if (u.minimal) return $;
        const Oe = $.charCodeAt(0), Ae = $.charCodeAt(1);
        if (u.es6) {
          const Nt = (Oe - 55296) * 1024 + Ae - 56320 + 65536;
          return "\\u{" + o(Nt, D) + "}";
        }
        return a(o(Oe, D)) + a(o(Ae, D));
      }
      if (Re) return a(o(Re.charCodeAt(0), D));
      if (N == "\0" && !y && !ae.test(Tt.charAt(St + 1))) return "\\0";
      if (ee) return ee == x || u.escapeEverything ? "\\" + ee : ee;
      if (se.test(N)) return oe[N];
      if (u.minimal && !ie.test(N)) return N;
      const ue = o(N.charCodeAt(0), D);
      return y || ue.length > 2 ? a(ue) : "\\x" + ("00" + ue).slice(-2);
    }), x == "`" && (R = R.replace(/\$\{/g, "\\${")), u.isScriptContext && (R = R.replace(/<\/(script|style)/gi, "<\\/$1").replace(/<!--/g, y ? "\\u003C!--" : "\\x3C!--")), u.wrap && (R = x + R + x), R;
  };
  return g.version = "3.0.2", le = g, le;
}
var Sr = Er();
const Q = xr(Sr);
var Tr = "Invariant failed";
function J(e, t) {
  if (!e) throw new Error(Tr);
}
function Nr(e, t, r) {
  if (!r.router.isServer) return t;
  r.match.extracted = r.match.extracted || [];
  const n = r.match.extracted;
  return _e(t, (a, o) => {
    const c = a instanceof ReadableStream ? "stream" : a instanceof Promise ? "promise" : void 0;
    if (c === "stream") {
      const [d, f] = a.tee(), m = { dataType: e, type: c, path: o, id: n.length, matchIndex: r.match.index, streamState: Cr({ stream: f }) };
      return n.push(m), d;
    } else if (c === "promise") {
      defer$1(a);
      const d = { dataType: e, type: c, path: o, id: n.length, matchIndex: r.match.index, promiseState: a };
      n.push(d);
    }
    return a;
  });
}
function Rr(e) {
  const t = useRouter(), r = t.state.matches[e.matchIndex];
  if (!t.isServer) return null;
  const n = r.extracted, [s, a] = ["__beforeLoadContext", "loaderData"].map((o) => n ? n.reduce((c, d) => d.dataType !== o ? ve(c, ["temp", ...d.path], void 0) : c, { temp: r[o] }).temp : r[o]);
  if (s !== void 0 || a !== void 0 || (n == null ? void 0 : n.length)) {
    const o = `__TSR__.initMatch(${Q({ index: e.matchIndex, __beforeLoadContext: t.options.transformer.stringify(s), loaderData: t.options.transformer.stringify(a), extracted: n ? Object.fromEntries(n.map((c) => [c.id, pick(c, ["type", "path"])])) : {} }, { isScriptContext: true, wrap: true, json: true })})`;
    return jsxs(Fragment, { children: [jsx(ScriptOnce, { children: o }), n ? n.map((c) => c.type === "stream" ? jsx(Dr, { entry: c }, c.id) : jsx(Or, { entry: c }, c.id)) : null] });
  }
  return null;
}
function _e(e, t, r = []) {
  if (isPlainArray(e)) return e.map((s, a) => _e(s, t, [...r, `${a}`]));
  if (isPlainObject$1(e)) {
    const s = {};
    for (const a in e) s[a] = _e(e[a], t, [...r, a]);
    return s;
  }
  const n = t(e, r);
  return n !== e ? n : e;
}
function Or({ entry: e }) {
  return jsx("div", { className: "tsr-once", children: jsx(V.Suspense, { fallback: null, children: jsx(Ar, { entry: e }) }) });
}
function Ar({ entry: e }) {
  const t = useRouter();
  if (e.promiseState[TSR_DEFERRED_PROMISE].status === "pending") throw e.promiseState;
  const r = `__TSR__.resolvePromise(${Q({ ...e, value: e.promiseState[TSR_DEFERRED_PROMISE] }, { isScriptContext: true, wrap: true, json: true })})`;
  return t.injectScript(r), jsx(Fragment, {});
}
function Dr({ entry: e }) {
  J(e.streamState);
  const t = useRouter();
  return jsx(tt, { streamState: e.streamState, children: (r) => {
    const n = r ? `__TSR__.matches[${e.matchIndex}].extracted[${e.id}].value.controller.enqueue(new TextEncoder().encode(${Q(r.toString(), { isScriptContext: true, wrap: true, json: true })}))` : `__TSR__.matches[${e.matchIndex}].extracted[${e.id}].value.controller.close()`;
    return t.injectScript(n), jsx(Fragment, {});
  } });
}
function Cr({ stream: e }) {
  const t = { promises: [] }, r = e.getReader(), n = (s) => (t.promises[s] = createControlledPromise(), r.read().then(({ done: a, value: o }) => {
    if (a) {
      t.promises[s].resolve(null), r.releaseLock();
      return;
    }
    return t.promises[s].resolve(o), n(s + 1);
  }));
  return n(0).catch((s) => {
    console.error("stream read error", s);
  }), t;
}
function tt({ streamState: e, children: t, __index: r = 0 }) {
  const n = e.promises[r];
  if (!n) return null;
  if (n.status === "pending") throw n;
  const s = n.value;
  return jsxs(Fragment, { children: [t(s), jsx("div", { className: "tsr-once", children: jsx(V.Suspense, { fallback: null, children: jsx(tt, { streamState: e, __index: r + 1, children: t }) }) })] });
}
function ve(e, t, r) {
  if (t.length === 0) return r;
  const [n, ...s] = t;
  return Array.isArray(e) ? e.map((a, o) => o === Number(n) ? ve(a, s, r) : a) : isPlainObject$1(e) ? { ...e, [n]: ve(e[n], s, r) } : e;
}
function Ie(e) {
  e.router.AfterEachMatch = Rr, e.router.serializer = (n) => Q(n, { isScriptContext: true, wrap: true, json: true });
  const t = et.get("TanStackRouterHydrationContext", {}), r = V.useMemo(() => {
    var n, s;
    return { router: e.router.dehydrate(), payload: (s = (n = e.router.options).dehydrate) == null ? void 0 : s.call(n) };
  }, [e.router]);
  return jsx(t.Provider, { value: r, children: jsx(RouterProvider, { router: e.router }) });
}
function kr(e = {}) {
  let t, r = false;
  const n = (o) => {
    if (t && t !== o) throw new Error("Context conflict");
  };
  let s;
  if (e.asyncContext) {
    const o = e.AsyncLocalStorage || globalThis.AsyncLocalStorage;
    o ? s = new o() : console.warn("[unctx] `AsyncLocalStorage` is not provided.");
  }
  const a = () => {
    if (s && t === void 0) {
      const o = s.getStore();
      if (o !== void 0) return o;
    }
    return t;
  };
  return { use: () => {
    const o = a();
    if (o === void 0) throw new Error("Context is not available");
    return o;
  }, tryUse: () => a(), set: (o, c) => {
    c || n(o), t = o, r = true;
  }, unset: () => {
    t = void 0, r = false;
  }, call: (o, c) => {
    n(o), t = o;
    try {
      return s ? s.run(o, c) : c();
    } finally {
      r || (t = void 0);
    }
  }, async callAsync(o, c) {
    t = o;
    const d = () => {
      t = o;
    }, f = () => t === o ? d : void 0;
    Fe.add(f);
    try {
      const m = s ? s.run(o, c) : c();
      return r || (t = void 0), await m;
    } finally {
      Fe.delete(f);
    }
  } };
}
function Ir(e = {}) {
  const t = {};
  return { get(r, n = {}) {
    return t[r] || (t[r] = kr({ ...e, ...n })), t[r];
  } };
}
const re = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof global < "u" ? global : {}, je = "__unctx__", jr = re[je] || (re[je] = Ir()), $r = (e, t = {}) => jr.get(e, t), $e = "__unctx_async_handlers__", Fe = re[$e] || (re[$e] = /* @__PURE__ */ new Set());
function Fr(e) {
  let t;
  const r = nt(e), n = { duplex: "half", method: e.method, headers: e.headers };
  return e.node.req.body instanceof ArrayBuffer ? new Request(r, { ...n, body: e.node.req.body }) : new Request(r, { ...n, get body() {
    return t || (t = Hr(e), t);
  } });
}
function Ee(e) {
  var _a;
  return (_a = e.web) != null ? _a : e.web = { request: Fr(e), url: nt(e) }, e.web.request;
}
function Vr() {
  return Se();
}
const rt = Symbol("$HTTPEvent");
function Pr(e) {
  return typeof e == "object" && (e instanceof H3Event || (e == null ? void 0 : e[rt]) instanceof H3Event || (e == null ? void 0 : e.__is_event__) === true);
}
function K(e) {
  return function(...t) {
    var _a;
    let r = t[0];
    if (Pr(r)) t[0] = r instanceof H3Event || r.__is_event__ ? r : r[rt];
    else {
      if (!((_a = globalThis.app.config.server.experimental) == null ? void 0 : _a.asyncContext)) throw new Error("AsyncLocalStorage was not enabled. Use the `server.experimental.asyncContext: true` option in your app configuration to enable it. Or, pass the instance of HTTPEvent that you have as the first argument to the function.");
      if (r = Vr(), !r) throw new Error("No HTTPEvent found in AsyncLocalStorage. Make sure you are using the function within the server runtime.");
      t.unshift(r);
    }
    return e(...t);
  };
}
const qr = K(getRequestHeaders), nt = K(getRequestURL), Lr = K(getResponseStatus), Mr = K(getResponseHeaders), Hr = K(getRequestWebStream), Br = K(Ee);
function zr() {
  var _a;
  return $r("nitro-app", { asyncContext: !!((_a = globalThis.app.config.server.experimental) == null ? void 0 : _a.asyncContext), AsyncLocalStorage: AsyncLocalStorage });
}
function Se() {
  return zr().use().event;
}
function Ur(e) {
  return e instanceof Headers ? new Headers(e) : Array.isArray(e) ? new Headers(e) : typeof e == "object" ? new Headers(e) : new Headers();
}
function we(...e) {
  return e.reduce((t, r) => {
    const n = Ur(r);
    for (const [s, a] of n.entries()) t.set(s, a);
    return t;
  }, new Headers());
}
function Kr({ createRouter: e, getRouterManifest: t }) {
  return (r) => eventHandler(async (n) => {
    const s = Ee(n), a = new URL(s.url), o = a.href.replace(a.origin, ""), c = createMemoryHistory({ initialEntries: [o] }), d = e();
    d.serializeLoaderData = Nr, t && (d.manifest = t()), d.update({ history: c }), await d.load();
    const f = Gr({ event: n, router: d });
    return await r({ request: s, router: d, responseHeaders: f });
  });
}
function Gr(e) {
  e.event.__tsrHeadersSent = true;
  let t = we(Mr(e.event), { "Content-Type": "text/html; charset=UTF-8" }, ...e.router.state.matches.map((n) => n.headers));
  const { redirect: r } = e.router.state;
  return r && (t = we(t, r.headers, { Location: r.href })), t;
}
var Wr = " daum[ /]| deusu/| yadirectfetcher|(?:^|[^g])news(?!sapphire)|(?<! (?:channel/|google/))google(?!(app|/google| pixel))|(?<! cu)bots?(?:\\b|_)|(?<!(?:lib))http|(?<![hg]m)score|@[a-z][\\w-]+\\.|\\(\\)|\\.com\\b|\\btime/|^<|^[\\w \\.\\-\\(?:\\):]+(?:/v?\\d+(?:\\.\\d+)?(?:\\.\\d{1,10})*?)?(?:,|$)|^[^ ]{50,}$|^\\d+\\b|^\\w*search\\b|^\\w+/[\\w\\(\\)]*$|^active|^ad muncher|^amaya|^avsdevicesdk/|^biglotron|^bot|^bw/|^clamav[ /]|^client/|^cobweb/|^custom|^ddg[_-]android|^discourse|^dispatch/\\d|^downcast/|^duckduckgo|^facebook|^getright/|^gozilla/|^hobbit|^hotzonu|^hwcdn/|^jeode/|^jetty/|^jigsaw|^microsoft bits|^movabletype|^mozilla/5\\.0\\s[a-z\\.-]+$|^mozilla/\\d\\.\\d \\(compatible;?\\)$|^mozilla/\\d\\.\\d \\w*$|^navermailapp|^netsurf|^offline|^owler|^php|^postman|^python|^rank|^read|^reed|^rest|^rss|^snapchat|^space bison|^svn|^swcd |^taringa|^thumbor/|^track|^valid|^w3c|^webbandit/|^webcopier|^wget|^whatsapp|^wordpress|^xenu link sleuth|^yahoo|^yandex|^zdm/\\d|^zoom marketplace/|^{{.*}}$|adscanner/|analyzer|archive|ask jeeves/teoma|bit\\.ly/|bluecoat drtr|browsex|burpcollaborator|capture|catch|check\\b|checker|chrome-lighthouse|chromeframe|classifier|cloudflare|convertify|cookiehubscan|crawl|cypress/|dareboost|datanyze|dejaclick|detect|dmbrowser|download|evc-batch/|exaleadcloudview|feed|firephp|functionize|gomezagent|headless|httrack|hubspot marketing grader|hydra|ibisbrowser|images|infrawatch|insight|inspect|iplabel|ips-agent|java(?!;)|jsjcw_scanner|library|linkcheck|mail\\.ru/|manager|measure|neustar wpm|node|nutch|offbyone|optimize|pageburst|pagespeed|parser|perl|phantomjs|pingdom|powermarks|preview|proxy|ptst[ /]\\d|reputation|resolver|retriever|rexx;|rigor|rss\\b|scanner\\.|scrape|server|sogou|sparkler/|speedcurve|spider|splash|statuscake|supercleaner|synapse|synthetic|tools|torrent|trace|transcoder|url|virtuoso|wappalyzer|webglance|webkit2png|whatcms/|zgrab", Jr = /bot|crawl|http|lighthouse|scan|search|spider/i, G;
function Yr() {
  if (G instanceof RegExp) return G;
  try {
    G = new RegExp(Wr, "i");
  } catch {
    G = Jr;
  }
  return G;
}
function Ve(e) {
  return !!e && Yr().test(e);
}
function Qr(e) {
  const t = ot(() => e.injectedHtml.map((r) => r()).join(""));
  return new Transform({ transform(r, n, s) {
    t.transform(r, this.push.bind(this)).then(() => s()).catch((a) => s(a));
  }, flush(r) {
    t.flush(this.push.bind(this)).then(() => r()).catch((n) => r(n));
  } });
}
function Xr(e) {
  const t = ot(() => e.injectedHtml.map((n) => n()).join("")), r = new TextEncoder();
  return new TransformStream({ transform(n, s) {
    return t.transform(n, (a) => (s.enqueue(r.encode(a)), true));
  }, flush(n) {
    return t.flush((s) => (n.enqueue(s), true));
  } });
}
const Zr = /(<body)/, en = /(<\/body>)/, tn = /(<\/html>)/, rn = /(<\/[a-zA-Z][\w:.-]*?>)/g, nn = new TextDecoder();
function ot(e) {
  let t = false, r = "", n = "";
  return { async transform(s, a) {
    const o = r + nn.decode(s), c = o.match(Zr), d = o.match(en), f = o.match(tn);
    try {
      if (c && (t = true), !t) {
        a(o), r = "";
        return;
      }
      const m = e();
      if (d && f && d.index < f.index) {
        const v = d.index + d[0].length, b = f.index + f[0].length, A = o.slice(0, v) + m + o.slice(v, b) + o.slice(b);
        a(A), r = "";
      } else {
        let v, b = 0;
        for (; (v = rn.exec(o)) !== null; ) b = v.index + v[0].length;
        if (b > 0) {
          const A = o.slice(0, b) + m + n;
          a(A), r = o.slice(b);
        } else r = o, n += m;
      }
    } catch (m) {
      throw console.error("Error transforming HTML:", m), m;
    }
  }, async flush(s) {
    r && s(r);
  } };
}
const on = async ({ request: e, router: t, responseHeaders: r }) => {
  if (typeof te.renderToReadableStream == "function") {
    const n = await te.renderToReadableStream(jsx(Ie, { router: t }), { signal: e.signal });
    Ve(e.headers.get("User-Agent")) && await n.allReady;
    const a = [Xr(t)].reduce((o, c) => o.pipeThrough(c), n);
    return new Response(a, { status: t.state.statusCode, headers: r });
  }
  if (typeof te.renderToPipeableStream == "function") {
    const n = new PassThrough();
    try {
      const o = te.renderToPipeableStream(jsx(Ie, { router: t }), { ...Ve(e.headers.get("User-Agent")) ? { onAllReady() {
        o.pipe(n);
      } } : { onShellReady() {
        o.pipe(n);
      } }, onError: (c, d) => {
        console.log("Error in renderToPipeableStream:", c, d);
      } });
    } catch (o) {
      console.log("Error in renderToPipeableStream:", o);
    }
    const a = [Qr(t)].reduce((o, c) => o.pipe(c), n);
    return new Response(a, { status: t.state.statusCode, headers: r });
  }
  throw new Error("No renderToReadableStream or renderToPipeableStream found in react-dom/server. Ensure you are using a version of react-dom that supports streaming.");
};
function st({ error: e }) {
  const t = useRouter(), r = useMatch({ strict: false, select: (n) => n.id === rootRouteId });
  return console.error(e), jsxs("div", { className: "min-w-0 flex-1 p-4 flex flex-col items-center justify-center gap-6", children: [jsx(ErrorComponent, { error: e }), jsxs("div", { className: "flex gap-2 items-center flex-wrap", children: [jsx("button", { type: "button", onClick: () => {
    t.invalidate();
  }, className: "px-2 py-1 bg-gray-600 dark:bg-gray-700 rounded text-white uppercase font-extrabold", children: "Try Again" }), r ? jsx(Link, { to: "/", className: "px-2 py-1 bg-gray-600 dark:bg-gray-700 rounded text-white uppercase font-extrabold", children: "Home" }) : jsx(Link, { to: "/", className: "px-2 py-1 bg-gray-600 dark:bg-gray-700 rounded text-white uppercase font-extrabold", onClick: (n) => {
    n.preventDefault(), window.history.back();
  }, children: "Go Back" })] })] });
}
function at({ children: e }) {
  return jsxs("div", { className: "space-y-2 p-2", children: [jsx("div", { className: "text-gray-600 dark:text-gray-400", children: e || jsx("p", { children: "The page you are looking for does not exist." }) }), jsxs("p", { className: "flex items-center gap-2 flex-wrap", children: [jsx("button", { type: "button", onClick: () => window.history.back(), className: "bg-emerald-500 text-white px-2 py-1 rounded uppercase font-black text-sm", children: "Go back" }), jsx(Link, { to: "/", className: "bg-cyan-600 text-white px-2 py-1 rounded uppercase font-black text-sm", children: "Start Over" })] })] });
}
function it({ tag: e, attrs: t, children: r }) {
  switch (e) {
    case "title":
      return jsx("title", { ...t, suppressHydrationWarning: true, children: r });
    case "meta":
      return jsx("meta", { ...t, suppressHydrationWarning: true });
    case "link":
      return jsx("link", { ...t, suppressHydrationWarning: true });
    case "style":
      return jsx("style", { ...t, dangerouslySetInnerHTML: { __html: r } });
    case "script":
      return t && t.src ? jsx("script", { ...t, suppressHydrationWarning: true }) : typeof r == "string" ? jsx("script", { ...t, dangerouslySetInnerHTML: { __html: r }, suppressHydrationWarning: true }) : null;
    default:
      return null;
  }
}
const sn = [];
function ne(e, t) {
  const r = t || e || {};
  return typeof r.method > "u" && (r.method = "GET"), { options: r, middleware: (n) => ne(void 0, Object.assign(r, { middleware: n })), validator: (n) => ne(void 0, Object.assign(r, { validator: n })), handler: (...n) => {
    const [s, a] = n;
    Object.assign(r, { ...s, extractedFn: s, serverFn: a }), J(s.url);
    const o = [...r.middleware || [], ln(r)];
    return Object.assign(async (c) => qe(o, "client", { ...s, method: r.method, data: c == null ? void 0 : c.data, headers: c == null ? void 0 : c.headers, context: Object.assign({}, s) }).then((d) => d.result), { ...s, __executeServer: (c) => {
      const d = c instanceof FormData ? an(c) : c;
      return qe(o, "server", { ...s, ...d }).then((f) => ({ result: f.result, context: f.sendContext }));
    } });
  } };
}
function an(e) {
  const t = e.get("__TSR_CONTEXT");
  if (e.delete("__TSR_CONTEXT"), typeof t != "string") return { context: {}, data: e };
  try {
    return { context: defaultTransformer.parse(t), data: e };
  } catch {
    return { data: e };
  }
}
function cn(e) {
  const t = /* @__PURE__ */ new Set(), r = [], n = (s) => {
    s.forEach((a) => {
      a.options.middleware && n(a.options.middleware), t.has(a) || (t.add(a), r.push(a));
    });
  };
  return n(e), r;
}
const Pe = (e, t, r) => e({ data: t.data, context: t.context, sendContext: t.sendContext, method: t.method, next: (n) => {
  var _a, _b;
  const s = { ...t.context, ...n == null ? void 0 : n.context }, a = { ...t.sendContext, ...(_a = n == null ? void 0 : n.sendContext) != null ? _a : {} }, o = we(t.headers, n == null ? void 0 : n.headers);
  return r({ method: t.method, data: t.data, context: s, sendContext: a, headers: o, result: (_b = n == null ? void 0 : n.result) != null ? _b : t.result });
} });
function un(e, t) {
  if (e == null) return {};
  if ("~standard" in e) {
    const r = e["~standard"].validate(t);
    if (r instanceof Promise) throw new Error("Async validation not supported");
    if (r.issues) throw new Error(JSON.stringify(r.issues, void 0, 2));
    return r.value;
  }
  if ("parse" in e) return e.parse(t);
  if (typeof e == "function") return e(t);
  throw new Error("Invalid validator type!");
}
async function qe(e, t, r) {
  const n = cn([...sn, ...e]), s = async (a) => {
    const o = n.shift();
    if (!o) return a;
    o.options.validator && (t !== "client" || o.options.validateClient) && (a.data = await un(o.options.validator, a.data));
    const c = t === "client" ? o.options.client : o.options.server;
    return c ? Pe(c, a, async (d) => {
      if (t === "client" && o.options.clientAfter) {
        const f = await s(d);
        return Pe(o.options.clientAfter, f, (m) => m);
      }
      return s(d);
    }) : s(a);
  };
  return s({ ...r, headers: r.headers || {}, sendContext: r.sendContext || {}, context: r.context || {} });
}
function ln(e) {
  return { _types: void 0, options: { validator: e.validator, validateClient: e.validateClient, client: async ({ next: t, sendContext: r, ...n }) => {
    var s;
    const a = await ((s = e.extractedFn) == null ? void 0 : s.call(e, { ...n, context: r }));
    return t(a);
  }, server: async ({ next: t, ...r }) => {
    var n;
    const s = await ((n = e.serverFn) == null ? void 0 : n.call(e, r));
    return t({ result: s });
  } } };
}
const dn = () => {
  const e = useRouter(), t = useRouterState({ select: (a) => a.matches.map((o) => o.meta).filter(Boolean) }), r = V.useMemo(() => {
    const a = [], o = {};
    let c;
    return [...t].reverse().forEach((d) => {
      [...d].reverse().forEach((f) => {
        var _a;
        if (f) if (f.title) c || (c = { tag: "title", children: f.title });
        else {
          const m = (_a = f.name) != null ? _a : f.property;
          if (m) {
            if (o[m]) return;
            o[m] = true;
          }
          a.push({ tag: "meta", attrs: { ...f } });
        }
      });
    }), c && a.push(c), a.reverse(), a;
  }, [t]), n = useRouterState({ select: (a) => a.matches.map((o) => o.links).filter(Boolean).flat(1).map((o) => ({ tag: "link", attrs: { ...o } })), structuralSharing: true }), s = useRouterState({ select: (a) => {
    const o = [];
    return a.matches.map((c) => e.looseRoutesById[c.routeId]).forEach((c) => {
      var d, f, m;
      return (m = (f = (d = e.manifest) == null ? void 0 : d.routes[c.id]) == null ? void 0 : f.preloads) == null ? void 0 : m.filter(Boolean).forEach((v) => {
        o.push({ tag: "link", attrs: { rel: "modulepreload", href: v } });
      });
    }), o;
  }, structuralSharing: true });
  return hn([...r, ...s, ...n], (a) => JSON.stringify(a));
}, fn = () => {
  const e = useRouter(), t = dn(), r = V.useContext(et.get("TanStackRouterHydrationContext", {}));
  return jsxs(Fragment, { children: [t.map((n, s) => createElement(it, { ...n, key: `tsr-meta-${JSON.stringify(n)}` })), jsxs(Fragment, { children: [jsx(ScriptOnce, { log: false, children: '__TSR__={matches:[],streamedValues:{},queue:[],runQueue:()=>{let e=!1;__TSR__.queue=__TSR__.queue.filter((_=>!_()||(e=!0,!1))),e&&__TSR__.runQueue()},initMatch:e=>{__TSR__.queue.push((()=>(__TSR__.matches[e.index]||(__TSR__.matches[e.index]=e,Object.entries(e.extracted).forEach((([e,_])=>{if("stream"===_.type){let e;_.value=new ReadableStream({start(_){e=_}}),_.value.controller=e}else if("promise"===_.type){let e,t;_.value=new Promise(((_,u)=>{e=_,t=u})),_.resolve=e,_.reject=t}}))),!0))),__TSR__.runQueue()},resolvePromise:e=>{__TSR__.queue.push((()=>{const _=__TSR__.matches[e.matchIndex];if(_){const t=_.extracted[e.id];if(t)return t.resolve(e.value.data),!0}return!1})),__TSR__.runQueue()},cleanScripts:()=>{document.querySelectorAll(".tsr-once").forEach((e=>{e.remove()}))}};' }), jsx(ScriptOnce, { children: `__TSR__.dehydrated = ${Q(e.options.transformer.stringify(r), { isScriptContext: true, wrap: true, json: true })}` })] })] });
}, pn = () => jsx(Fragment, { children: fn() });
function hn(e, t) {
  const r = /* @__PURE__ */ new Set();
  return e.filter((n) => {
    const s = t(n);
    return r.has(s) ? false : (r.add(s), true);
  });
}
const mn = () => {
  const e = useRouter(), t = useRouterState({ select: (s) => {
    const a = [];
    return s.matches.map((o) => e.looseRoutesById[o.routeId]).forEach((o) => {
      var c, d, f;
      return (f = (d = (c = e.manifest) == null ? void 0 : c.routes[o.id]) == null ? void 0 : d.assets) == null ? void 0 : f.filter((m) => m.tag === "script").forEach((m) => {
        a.push({ tag: "script", attrs: m.attrs, children: m.children });
      });
    }), a;
  }, structuralSharing: true }), { scripts: r } = useRouterState({ select: (s) => ({ scripts: s.matches.map((a) => a.scripts).filter(Boolean).flat(1).map(({ children: a, ...o }) => ({ tag: "script", attrs: { ...o, suppressHydrationWarning: true }, children: a })) }) }), n = [...r, ...t];
  return jsx(Fragment, { children: n.map((s, a) => createElement(it, { ...s, key: `tsr-scripts-${s.tag}-${a}` })) });
}, gn = "/_build/assets/app-C95hcxyN.css", yn = ({ title: e, description: t, keywords: r, image: n }) => [{ title: e }, { name: "description", content: t }, { name: "keywords", content: r }, { name: "twitter:title", content: e }, { name: "twitter:description", content: t }, { name: "twitter:creator", content: "@tannerlinsley" }, { name: "twitter:site", content: "@tannerlinsley" }, { name: "og:type", content: "website" }, { name: "og:title", content: e }, { name: "og:description", content: t }, ...n ? [{ name: "twitter:image", content: n }, { name: "twitter:card", content: "summary_large_image" }, { name: "og:image", content: n }] : []], _n = { theme: "system", setTheme: () => null }, ct = V.createContext(_n);
function vn({ children: e, defaultTheme: t = "system", storageKey: r = "vite-ui-theme", ...n }) {
  const [s, a] = useLocalStorage(r, t, { initializeWithValue: false });
  V.useEffect(() => {
    const c = window.document.documentElement;
    if (c.classList.remove("light", "dark"), s === "system") {
      const d = window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
      c.classList.add(d);
      return;
    }
    c.classList.add(s);
  }, [s]);
  const o = { theme: s, setTheme: a };
  return V.createElement(ct.Provider, { ...n, value: o }, e);
}
const wn = () => {
  const e = V.useContext(ct);
  if (e === void 0) throw new Error("useTheme must be used within a ThemeProvider");
  return e;
}, bn = ({ ...e }) => {
  const { theme: t = "system" } = wn();
  return V.createElement(Toaster, { theme: t, className: "toaster group", toastOptions: { classNames: { toast: "group toast group-[.toaster]:bg-background group-[.toaster]:text-foreground group-[.toaster]:border-border group-[.toaster]:shadow-lg", description: "group-[.toast]:text-muted-foreground", actionButton: "group-[.toast]:bg-primary group-[.toast]:text-primary-foreground", cancelButton: "group-[.toast]:bg-muted group-[.toast]:text-muted-foreground" } }, ...e });
};
async function xn(e, t, r) {
  var n;
  const s = t[0];
  if (isPlainObject$1(s) && s.method) {
    const f = s, m = f.data instanceof FormData ? "formData" : "payload", v = new Headers({ ...m === "payload" ? { "content-type": "application/json", accept: "application/json" } : {}, ...f.headers instanceof Headers ? Object.fromEntries(f.headers.entries()) : f.headers || {} });
    if (f.method === "GET") {
      const I = encode$1({ payload: defaultTransformer.stringify({ data: f.data, context: f.context }) });
      I && (e += `&${I}`);
    }
    const b = new Request(e, { method: f.method, headers: v, ...En(f) }), A = await r(b), k = await Le(A);
    if ((n = k.headers.get("content-type")) != null && n.includes("application/json")) {
      const I = await k.text(), P = I ? defaultTransformer.parse(I) : void 0;
      if (isRedirect$1(P) || isNotFound(P)) throw P;
      return P;
    }
    return k;
  }
  const a = new Request(e, { method: "POST", headers: { Accept: "application/json", "Content-Type": "application/json" }, body: JSON.stringify(t) }), o = await Le(await r(a)), c = o.headers.get("content-type"), d = await o.text();
  return c && c.includes("application/json") ? d ? JSON.parse(d) : void 0 : d;
}
function En(e) {
  var _a;
  return e.method === "POST" ? e.data instanceof FormData ? (e.data.set("__TSR_CONTEXT", defaultTransformer.stringify(e.context)), { body: e.data }) : { body: defaultTransformer.stringify({ data: (_a = e.data) != null ? _a : null, context: e.context }) } : {};
}
async function Le(e) {
  if (!e.ok) {
    const t = e.headers.get("content-type"), r = t && t.includes("application/json"), n = await (async () => r ? await e.json() : await e.text())(), s = `Request failed with status ${e.status}`;
    throw r ? new Error(JSON.stringify({ message: s, body: n })) : new Error([s, `${JSON.stringify(n, null, 2)}`].join(`

`));
  }
  return e;
}
function Sn(e) {
  return e.replace(/^\/|\/$/g, "");
}
function Tn(e, t, r) {
  return `${e}/${Sn("/_server")}/?_serverFnId=${encodeURI(t)}&_serverFnName=${encodeURI(r)}`;
}
eventHandler(Nn);
async function Nn(e) {
  return ut(Ee(e));
}
async function ut(e, t) {
  var r, n;
  const s = e.method, a = new URL(e.url, "http://localhost:3000"), o = Object.fromEntries(a.searchParams.entries()), c = o._serverFnId, d = o._serverFnName;
  if (!c || !d) throw new Error("Invalid request");
  J(typeof c == "string");
  const f = (n = await ((r = Ze("server").chunks[c]) == null ? void 0 : r.import())) == null ? void 0 : n[d], m = await (async () => {
    try {
      const v = await (async () => {
        var A;
        if ((A = e.headers.get("Content-Type")) != null && A.includes("multipart/form-data")) return J(s.toLowerCase() !== "get", "GET requests with FormData payloads are not supported"), await e.formData();
        if (s.toLowerCase() === "get") return o.payload ? defaultTransformer.parse(o.payload) : void 0;
        const k = await e.text();
        return defaultTransformer.parse(k);
      })(), b = await f(v);
      return b instanceof Response ? b : isRedirect$1(b) || isNotFound(b) ? Me(b) : new Response(b !== void 0 ? defaultTransformer.stringify(b) : void 0, { status: Lr(Se()), headers: { "Content-Type": "application/json" } });
    } catch (v) {
      return v instanceof Response ? v : isRedirect$1(v) || isNotFound(v) ? Me(v) : (console.error("Server Fn Error!"), console.error(v), console.info(), new Response(JSON.stringify(v), { status: 500, headers: { "Content-Type": "application/json" } }));
    }
  })();
  if (m.headers.get("Content-Type") === "application/json") {
    const b = await m.clone().text();
    b && JSON.stringify(JSON.parse(b));
  }
  return m;
}
function Me(e) {
  const { headers: t, ...r } = e;
  return new Response(JSON.stringify(r), { status: 200, headers: { "Content-Type": "application/json", ...t || {} } });
}
const He = "http://localhost:3000";
function lt(e, t, r) {
  const n = Tn(He, t, r);
  return Object.assign((...a) => (J(a.length === 1), xn(n, a, async (o) => {
    const c = Se(), d = qr(c);
    return Object.entries(d).forEach(([f, m]) => {
      o.headers.has(f) || o.headers.append(f, m);
    }), ut(o);
  })), { url: n.replace(He, ""), filename: t, functionId: r });
}
var Be = {}, F = { exports: {} };
const Rn = "dotenv", On = "16.4.7", An = "Loads environment variables from .env file", Dn = "lib/main.js", Cn = "lib/main.d.ts", kn = { ".": { types: "./lib/main.d.ts", require: "./lib/main.js", default: "./lib/main.js" }, "./config": "./config.js", "./config.js": "./config.js", "./lib/env-options": "./lib/env-options.js", "./lib/env-options.js": "./lib/env-options.js", "./lib/cli-options": "./lib/cli-options.js", "./lib/cli-options.js": "./lib/cli-options.js", "./package.json": "./package.json" }, In = { "dts-check": "tsc --project tests/types/tsconfig.json", lint: "standard", pretest: "npm run lint && npm run dts-check", test: "tap run --allow-empty-coverage --disable-coverage --timeout=60000", "test:coverage": "tap run --show-full-coverage --timeout=60000 --coverage-report=lcov", prerelease: "npm test", release: "standard-version" }, jn = { type: "git", url: "git://github.com/motdotla/dotenv.git" }, $n = "https://dotenvx.com", Fn = ["dotenv", "env", ".env", "environment", "variables", "config", "settings"], Vn = "README.md", Pn = "BSD-2-Clause", qn = { "@types/node": "^18.11.3", decache: "^4.6.2", sinon: "^14.0.1", standard: "^17.0.0", "standard-version": "^9.5.0", tap: "^19.2.0", typescript: "^4.8.4" }, Ln = { node: ">=12" }, Mn = { fs: false }, Hn = { name: Rn, version: On, description: An, main: Dn, types: Cn, exports: kn, scripts: In, repository: jn, funding: $n, keywords: Fn, readmeFilename: Vn, license: Pn, devDependencies: qn, engines: Ln, browser: Mn };
var ze;
function Bn() {
  if (ze) return F.exports;
  ze = 1;
  const e = se, t = ae, r = ie, n = require$$1$2, a = Hn.version, o = /(?:^|^)\s*(?:export\s+)?([\w.-]+)(?:\s*=\s*?|:\s+?)(\s*'(?:\\'|[^'])*'|\s*"(?:\\"|[^"])*"|\s*`(?:\\`|[^`])*`|[^#\r\n]+)?\s*(?:#.*)?(?:$|$)/mg;
  function c(l) {
    const g = {};
    let i = l.toString();
    i = i.replace(/\r\n?/mg, `
`);
    let u;
    for (; (u = o.exec(i)) != null; ) {
      const _ = u[1];
      let h = u[2] || "";
      h = h.trim();
      const y = h[0];
      h = h.replace(/^(['"`])([\s\S]*)\1$/mg, "$2"), y === '"' && (h = h.replace(/\\n/g, `
`), h = h.replace(/\\r/g, "\r")), g[_] = h;
    }
    return g;
  }
  function d(l) {
    const g = k(l), i = S.configDotenv({ path: g });
    if (!i.parsed) {
      const y = new Error(`MISSING_DATA: Cannot parse ${g} for an unknown reason`);
      throw y.code = "MISSING_DATA", y;
    }
    const u = b(l).split(","), _ = u.length;
    let h;
    for (let y = 0; y < _; y++) try {
      const x = u[y].trim(), T = A(i, x);
      h = S.decrypt(T.ciphertext, T.key);
      break;
    } catch (x) {
      if (y + 1 >= _) throw x;
    }
    return S.parse(h);
  }
  function f(l) {
    console.log(`[dotenv@${a}][INFO] ${l}`);
  }
  function m(l) {
    console.log(`[dotenv@${a}][WARN] ${l}`);
  }
  function v(l) {
    console.log(`[dotenv@${a}][DEBUG] ${l}`);
  }
  function b(l) {
    return l && l.DOTENV_KEY && l.DOTENV_KEY.length > 0 ? l.DOTENV_KEY : process.env.DOTENV_KEY && process.env.DOTENV_KEY.length > 0 ? process.env.DOTENV_KEY : "";
  }
  function A(l, g) {
    let i;
    try {
      i = new URL(g);
    } catch (x) {
      if (x.code === "ERR_INVALID_URL") {
        const T = new Error("INVALID_DOTENV_KEY: Wrong format. Must be in valid uri format like dotenv://:key_1234@dotenvx.com/vault/.env.vault?environment=development");
        throw T.code = "INVALID_DOTENV_KEY", T;
      }
      throw x;
    }
    const u = i.password;
    if (!u) {
      const x = new Error("INVALID_DOTENV_KEY: Missing key part");
      throw x.code = "INVALID_DOTENV_KEY", x;
    }
    const _ = i.searchParams.get("environment");
    if (!_) {
      const x = new Error("INVALID_DOTENV_KEY: Missing environment part");
      throw x.code = "INVALID_DOTENV_KEY", x;
    }
    const h = `DOTENV_VAULT_${_.toUpperCase()}`, y = l.parsed[h];
    if (!y) {
      const x = new Error(`NOT_FOUND_DOTENV_ENVIRONMENT: Cannot locate environment ${h} in your .env.vault file.`);
      throw x.code = "NOT_FOUND_DOTENV_ENVIRONMENT", x;
    }
    return { ciphertext: y, key: u };
  }
  function k(l) {
    let g = null;
    if (l && l.path && l.path.length > 0) if (Array.isArray(l.path)) for (const i of l.path) e.existsSync(i) && (g = i.endsWith(".vault") ? i : `${i}.vault`);
    else g = l.path.endsWith(".vault") ? l.path : `${l.path}.vault`;
    else g = t.resolve(process.cwd(), ".env.vault");
    return e.existsSync(g) ? g : null;
  }
  function I(l) {
    return l[0] === "~" ? t.join(r.homedir(), l.slice(1)) : l;
  }
  function P(l) {
    f("Loading env from encrypted .env.vault");
    const g = S._parseVault(l);
    let i = process.env;
    return l && l.processEnv != null && (i = l.processEnv), S.populate(i, g, l), { parsed: g };
  }
  function oe(l) {
    const g = t.resolve(process.cwd(), ".env");
    let i = "utf8";
    const u = !!(l && l.debug);
    l && l.encoding ? i = l.encoding : u && v("No encoding is specified. UTF-8 is used by default");
    let _ = [g];
    if (l && l.path) if (!Array.isArray(l.path)) _ = [I(l.path)];
    else {
      _ = [];
      for (const T of l.path) _.push(I(T));
    }
    let h;
    const y = {};
    for (const T of _) try {
      const D = S.parse(e.readFileSync(T, { encoding: i }));
      S.populate(y, D, l);
    } catch (D) {
      u && v(`Failed to load ${T} ${D.message}`), h = D;
    }
    let x = process.env;
    return l && l.processEnv != null && (x = l.processEnv), S.populate(x, y, l), h ? { parsed: y, error: h } : { parsed: y };
  }
  function se$1(l) {
    if (b(l).length === 0) return S.configDotenv(l);
    const g = k(l);
    return g ? S._configVault(l) : (m(`You set DOTENV_KEY but you are missing a .env.vault file at ${g}. Did you forget to build it?`), S.configDotenv(l));
  }
  function ae$1(l, g) {
    const i = Buffer.from(g.slice(-64), "hex");
    let u = Buffer.from(l, "base64");
    const _ = u.subarray(0, 12), h = u.subarray(-16);
    u = u.subarray(12, -16);
    try {
      const y = n.createDecipheriv("aes-256-gcm", i, _);
      return y.setAuthTag(h), `${y.update(u)}${y.final()}`;
    } catch (y) {
      const x = y instanceof RangeError, T = y.message === "Invalid key length", D = y.message === "Unsupported state or unable to authenticate data";
      if (x || T) {
        const j = new Error("INVALID_DOTENV_KEY: It must be 64 characters long (or more)");
        throw j.code = "INVALID_DOTENV_KEY", j;
      } else if (D) {
        const j = new Error("DECRYPTION_FAILED: Please check your DOTENV_KEY");
        throw j.code = "DECRYPTION_FAILED", j;
      } else throw y;
    }
  }
  function ie$1(l, g, i = {}) {
    const u = !!(i && i.debug), _ = !!(i && i.override);
    if (typeof g != "object") {
      const h = new Error("OBJECT_REQUIRED: Please check the processEnv argument being passed to populate");
      throw h.code = "OBJECT_REQUIRED", h;
    }
    for (const h of Object.keys(g)) Object.prototype.hasOwnProperty.call(l, h) ? (_ === true && (l[h] = g[h]), u && v(_ === true ? `"${h}" is already defined and WAS overwritten` : `"${h}" is already defined and was NOT overwritten`)) : l[h] = g[h];
  }
  const S = { configDotenv: oe, _configVault: P, _parseVault: d, config: se$1, decrypt: ae$1, parse: c, populate: ie$1 };
  return F.exports.configDotenv = S.configDotenv, F.exports._configVault = S._configVault, F.exports._parseVault = S._parseVault, F.exports.config = S.config, F.exports.decrypt = S.decrypt, F.exports.parse = S.parse, F.exports.populate = S.populate, F.exports = S, F.exports;
}
var de, Ue;
function zn() {
  if (Ue) return de;
  Ue = 1;
  const e = {};
  return process.env.DOTENV_CONFIG_ENCODING != null && (e.encoding = process.env.DOTENV_CONFIG_ENCODING), process.env.DOTENV_CONFIG_PATH != null && (e.path = process.env.DOTENV_CONFIG_PATH), process.env.DOTENV_CONFIG_DEBUG != null && (e.debug = process.env.DOTENV_CONFIG_DEBUG), process.env.DOTENV_CONFIG_OVERRIDE != null && (e.override = process.env.DOTENV_CONFIG_OVERRIDE), process.env.DOTENV_CONFIG_DOTENV_KEY != null && (e.DOTENV_KEY = process.env.DOTENV_CONFIG_DOTENV_KEY), de = e, de;
}
var fe, Ke;
function Un() {
  if (Ke) return fe;
  Ke = 1;
  const e = /^dotenv_config_(encoding|path|debug|override|DOTENV_KEY)=(.+)$/;
  return fe = function(r) {
    return r.reduce(function(n, s) {
      const a = s.match(e);
      return a && (n[a[1]] = a[2]), n;
    }, {});
  }, fe;
}
var Ge;
function Kn() {
  return Ge || (Ge = 1, function() {
    Bn().config(Object.assign({}, zn(), Un()(process.argv)));
  }()), Be;
}
Kn();
if (!process.env.DATABASE_URL) throw new Error("Missing DATABASE_URL is required");
const dt = drizzle(process.env.DATABASE_URL), Gn = z$2.union([z$2.string(), z$2.number(), z$2.boolean(), z$2.null()]), be = z$2.lazy(() => z$2.union([Gn, z$2.array(be), z$2.record(be)]));
function Wn(e, t) {
  const r = getTableColumns(e), n = Object.entries(r);
  let s = Object.fromEntries(n.map(([a, o]) => [a, ft(o)]));
  t && (s = Object.assign(s, Object.fromEntries(Object.entries(t).map(([a, o]) => [a, typeof o == "function" ? o(s) : o]))));
  for (const [a, o] of n) o.notNull ? o.hasDefault && (s[a] = s[a].optional()) : s[a] = s[a].nullable().optional();
  return z$2.object(s);
}
function ft(e) {
  let t;
  if (function(r) {
    return "enumValues" in r && Array.isArray(r.enumValues) && r.enumValues.length > 0;
  }(e) && (t = e.enumValues.length ? z$2.enum(e.enumValues) : z$2.string()), !t) {
    if (is(e, PgUUID)) t = z$2.string().uuid();
    else if (e.dataType === "custom") t = z$2.any();
    else if (e.dataType === "json") t = be;
    else if (e.dataType === "array") t = z$2.array(ft(e.baseColumn));
    else if (e.dataType === "number") t = z$2.number();
    else if (e.dataType === "bigint") t = z$2.bigint();
    else if (e.dataType === "boolean") t = z$2.boolean();
    else if (e.dataType === "date") t = z$2.date();
    else if (e.dataType === "string") {
      let r = z$2.string();
      (is(e, PgChar) || is(e, PgVarchar) || is(e, MySqlVarChar) || is(e, MySqlVarBinary) || is(e, MySqlChar) || is(e, SQLiteText)) && typeof e.length == "number" && (r = r.max(e.length)), t = r;
    }
  }
  return t || (t = z$2.any()), t;
}
const pt = pgTable("project", { id: integer("id").primaryKey().generatedAlwaysAsIdentity(), name: text("name").notNull(), userId: text("userId").notNull().references(() => U.id), description: text("description"), createdAt: timestamp("createdAt").notNull().defaultNow(), updatedAt: timestamp("updatedAt").notNull().defaultNow() }), Jn = Wn(pt, { name: z$2.string().max(256), userId: z$2.string(), description: z$2.string().max(1024).optional() }).omit({ id: true, createdAt: true, updatedAt: true }), U = pgTable("user", { id: text("id").primaryKey(), name: text("name").notNull(), email: text("email").notNull().unique(), emailVerified: boolean("emailVerified").notNull(), image: text("image"), createdAt: timestamp("createdAt").notNull(), updatedAt: timestamp("updatedAt").notNull(), role: text("role"), banned: boolean("banned"), banReason: text("banReason"), banExpires: timestamp("banExpires") }), Yn = pgTable("session", { id: text("id").primaryKey(), expiresAt: timestamp("expiresAt").notNull(), token: text("token").notNull().unique(), createdAt: timestamp("createdAt").notNull(), updatedAt: timestamp("updatedAt").notNull(), ipAddress: text("ipAddress"), userAgent: text("userAgent"), userId: text("userId").notNull().references(() => U.id), impersonatedBy: text("impersonatedBy") }), Qn = pgTable("account", { id: text("id").primaryKey(), accountId: text("accountId").notNull(), providerId: text("providerId").notNull(), userId: text("userId").notNull().references(() => U.id), accessToken: text("accessToken"), refreshToken: text("refreshToken"), idToken: text("idToken"), accessTokenExpiresAt: timestamp("accessTokenExpiresAt"), refreshTokenExpiresAt: timestamp("refreshTokenExpiresAt"), scope: text("scope"), password: text("password"), createdAt: timestamp("createdAt").notNull(), updatedAt: timestamp("updatedAt").notNull() }), Xn = pgTable("verification", { id: text("id").primaryKey(), identifier: text("identifier").notNull(), value: text("value").notNull(), expiresAt: timestamp("expiresAt").notNull(), createdAt: timestamp("createdAt"), updatedAt: timestamp("updatedAt") }), Zn = Object.freeze(Object.defineProperty({ __proto__: null, CreateProjectSchema: Jn, account: Qn, project: pt, session: Yn, user: U, verification: Xn }, Symbol.toStringTag, { value: "Module" })), eo = betterAuth({ database: drizzleAdapter(dt, { provider: "pg", schema: Zn }), plugins: [admin()], emailAndPassword: { enabled: true, sendResetPassword: async ({ user: e, url: t, token: r }, n) => {
  console.log(`[FAKE] Reseting password to ${e.email} with token ${r} go to this url ${t}`);
} }, emailVerification: { sendOnSignUp: true, requireEmailVerification: true, sendVerificationEmail: async ({ user: e, url: t, token: r }, n) => {
  console.log(`[FAKE] Sending email to ${e.email} with token ${r} go to this url ${t}`);
} } }), ht = ne({ method: "GET" }).handler(lt(to, "c_78j5o", "$$function0"), async () => {
  const e = Br();
  return await eo.api.getSession({ headers: e.headers });
}), Te = ne({ method: "GET" }).handler(lt(ro, "c_78j5o", "$$function1"), async () => (await dt.select().from(U).where(eq(U.role, "admin")).limit(1)).length === 0);
function to(e) {
  return ht.__executeServer(e);
}
function ro(e) {
  return Te.__executeServer(e);
}
const Ne = createRootRouteWithContext()({ head: () => ({ meta: [{ charSet: "utf-8" }, { name: "viewport", content: "width=device-width, initial-scale=1" }, ...yn({ title: "Smartflow - The modern way to write and deploy smart contracts", description: "Smartflow is a low code drag and drop platform to write and deploy smart contracts" })], links: [{ rel: "stylesheet", href: gn }, { rel: "apple-touch-icon", sizes: "180x180", href: "/apple-touch-icon.png" }, { rel: "icon", type: "image/png", sizes: "96x96", href: "/favicon-96x96.png" }, { rel: "manifest", href: "/site.webmanifest", color: "#fffff" }, { rel: "icon", href: "/favicon.ico" }] }), beforeLoad: async () => ({ user: await ht() }), errorComponent: (e) => jsx(mt, { children: jsx(st, { ...e }) }), notFoundComponent: () => jsx(at, {}), component: no });
function no() {
  return jsx(mt, { children: jsxs(vn, { children: [jsx(Outlet, {}), jsx(bn, {})] }) });
}
function mt({ children: e }) {
  return jsxs("html", { lang: "en", children: [jsx("head", { children: jsx(pn, {}) }), jsxs("body", { children: [e, jsx(ScrollRestoration, {}), jsx(TanStackRouterDevtools, { position: "bottom-right" }), jsx(mn, {})] })] });
}
const oo = () => import('../build/first-launch-DUIftxPJ.mjs'), gt = createFileRoute("/first-launch")({ component: lazyRouteComponent(oo, "component", () => gt.ssr), beforeLoad: async () => {
  if (!await Te()) throw redirect({ to: "/" });
} }), so = () => import('../build/index-BfrTTpz9.mjs'), yt = createFileRoute("/")({ component: lazyRouteComponent(so, "component", () => yt.ssr), beforeLoad: async () => {
  if (await Te()) throw redirect({ to: "/first-launch" });
} }), ao = gt.update({ id: "/first-launch", path: "/first-launch", getParentRoute: () => Ne }), io = yt.update({ id: "/", path: "/", getParentRoute: () => Ne }), co = { IndexRoute: io, FirstLaunchRoute: ao }, uo = Ne._addFileChildren(co)._addFileTypes();
function lo() {
  const e = new QueryClient(), t = createRouter$2({ routeTree: uo, context: { queryClient: e }, defaultPreload: "intent", defaultErrorComponent: st, defaultNotFoundComponent: () => jsx(at, {}) });
  return routerWithQueryClient(t, e);
}
const Po = Kr({ createRouter: lo, getRouterManifest: br })(on);

const handlers = [
  { route: '', handler: _2gg26d, lazy: false, middleware: true, method: undefined },
  { route: '/_server', handler: b, lazy: false, middleware: true, method: undefined },
  { route: '/api', handler: d, lazy: false, middleware: true, method: undefined },
  { route: '/', handler: Po, lazy: false, middleware: true, method: undefined }
];

function wrapToPromise(value) {
  if (!value || typeof value.then !== "function") {
    return Promise.resolve(value);
  }
  return value;
}
function asyncCall(function_, ...arguments_) {
  try {
    return wrapToPromise(function_(...arguments_));
  } catch (error) {
    return Promise.reject(error);
  }
}
function isPrimitive(value) {
  const type = typeof value;
  return value === null || type !== "object" && type !== "function";
}
function isPureObject(value) {
  const proto = Object.getPrototypeOf(value);
  return !proto || proto.isPrototypeOf(Object);
}
function stringify(value) {
  if (isPrimitive(value)) {
    return String(value);
  }
  if (isPureObject(value) || Array.isArray(value)) {
    return JSON.stringify(value);
  }
  if (typeof value.toJSON === "function") {
    return stringify(value.toJSON());
  }
  throw new Error("[unstorage] Cannot stringify value!");
}
function checkBufferSupport() {
  if (typeof Buffer === "undefined") {
    throw new TypeError("[unstorage] Buffer is not supported!");
  }
}
const BASE64_PREFIX = "base64:";
function serializeRaw(value) {
  if (typeof value === "string") {
    return value;
  }
  checkBufferSupport();
  const base64 = Buffer.from(value).toString("base64");
  return BASE64_PREFIX + base64;
}
function deserializeRaw(value) {
  if (typeof value !== "string") {
    return value;
  }
  if (!value.startsWith(BASE64_PREFIX)) {
    return value;
  }
  checkBufferSupport();
  return Buffer.from(value.slice(BASE64_PREFIX.length), "base64");
}

const storageKeyProperties = [
  "hasItem",
  "getItem",
  "getItemRaw",
  "setItem",
  "setItemRaw",
  "removeItem",
  "getMeta",
  "setMeta",
  "removeMeta",
  "getKeys",
  "clear",
  "mount",
  "unmount"
];
function prefixStorage(storage, base) {
  base = normalizeBaseKey(base);
  if (!base) {
    return storage;
  }
  const nsStorage = { ...storage };
  for (const property of storageKeyProperties) {
    nsStorage[property] = (key = "", ...args) => (
      // @ts-ignore
      storage[property](base + key, ...args)
    );
  }
  nsStorage.getKeys = (key = "", ...arguments_) => storage.getKeys(base + key, ...arguments_).then((keys) => keys.map((key2) => key2.slice(base.length)));
  return nsStorage;
}
function normalizeKey$1(key) {
  if (!key) {
    return "";
  }
  return key.split("?")[0].replace(/[/\\]/g, ":").replace(/:+/g, ":").replace(/^:|:$/g, "");
}
function joinKeys(...keys) {
  return normalizeKey$1(keys.join(":"));
}
function normalizeBaseKey(base) {
  base = normalizeKey$1(base);
  return base ? base + ":" : "";
}

function defineDriver$1(factory) {
  return factory;
}

const DRIVER_NAME$1 = "memory";
const memory = defineDriver$1(() => {
  const data = /* @__PURE__ */ new Map();
  return {
    name: DRIVER_NAME$1,
    getInstance: () => data,
    hasItem(key) {
      return data.has(key);
    },
    getItem(key) {
      return data.get(key) ?? null;
    },
    getItemRaw(key) {
      return data.get(key) ?? null;
    },
    setItem(key, value) {
      data.set(key, value);
    },
    setItemRaw(key, value) {
      data.set(key, value);
    },
    removeItem(key) {
      data.delete(key);
    },
    getKeys() {
      return [...data.keys()];
    },
    clear() {
      data.clear();
    },
    dispose() {
      data.clear();
    }
  };
});

function createStorage(options = {}) {
  const context = {
    mounts: { "": options.driver || memory() },
    mountpoints: [""],
    watching: false,
    watchListeners: [],
    unwatch: {}
  };
  const getMount = (key) => {
    for (const base of context.mountpoints) {
      if (key.startsWith(base)) {
        return {
          base,
          relativeKey: key.slice(base.length),
          driver: context.mounts[base]
        };
      }
    }
    return {
      base: "",
      relativeKey: key,
      driver: context.mounts[""]
    };
  };
  const getMounts = (base, includeParent) => {
    return context.mountpoints.filter(
      (mountpoint) => mountpoint.startsWith(base) || includeParent && base.startsWith(mountpoint)
    ).map((mountpoint) => ({
      relativeBase: base.length > mountpoint.length ? base.slice(mountpoint.length) : void 0,
      mountpoint,
      driver: context.mounts[mountpoint]
    }));
  };
  const onChange = (event, key) => {
    if (!context.watching) {
      return;
    }
    key = normalizeKey$1(key);
    for (const listener of context.watchListeners) {
      listener(event, key);
    }
  };
  const startWatch = async () => {
    if (context.watching) {
      return;
    }
    context.watching = true;
    for (const mountpoint in context.mounts) {
      context.unwatch[mountpoint] = await watch(
        context.mounts[mountpoint],
        onChange,
        mountpoint
      );
    }
  };
  const stopWatch = async () => {
    if (!context.watching) {
      return;
    }
    for (const mountpoint in context.unwatch) {
      await context.unwatch[mountpoint]();
    }
    context.unwatch = {};
    context.watching = false;
  };
  const runBatch = (items, commonOptions, cb) => {
    const batches = /* @__PURE__ */ new Map();
    const getBatch = (mount) => {
      let batch = batches.get(mount.base);
      if (!batch) {
        batch = {
          driver: mount.driver,
          base: mount.base,
          items: []
        };
        batches.set(mount.base, batch);
      }
      return batch;
    };
    for (const item of items) {
      const isStringItem = typeof item === "string";
      const key = normalizeKey$1(isStringItem ? item : item.key);
      const value = isStringItem ? void 0 : item.value;
      const options2 = isStringItem || !item.options ? commonOptions : { ...commonOptions, ...item.options };
      const mount = getMount(key);
      getBatch(mount).items.push({
        key,
        value,
        relativeKey: mount.relativeKey,
        options: options2
      });
    }
    return Promise.all([...batches.values()].map((batch) => cb(batch))).then(
      (r) => r.flat()
    );
  };
  const storage = {
    // Item
    hasItem(key, opts = {}) {
      key = normalizeKey$1(key);
      const { relativeKey, driver } = getMount(key);
      return asyncCall(driver.hasItem, relativeKey, opts);
    },
    getItem(key, opts = {}) {
      key = normalizeKey$1(key);
      const { relativeKey, driver } = getMount(key);
      return asyncCall(driver.getItem, relativeKey, opts).then(
        (value) => destr(value)
      );
    },
    getItems(items, commonOptions) {
      return runBatch(items, commonOptions, (batch) => {
        if (batch.driver.getItems) {
          return asyncCall(
            batch.driver.getItems,
            batch.items.map((item) => ({
              key: item.relativeKey,
              options: item.options
            })),
            commonOptions
          ).then(
            (r) => r.map((item) => ({
              key: joinKeys(batch.base, item.key),
              value: destr(item.value)
            }))
          );
        }
        return Promise.all(
          batch.items.map((item) => {
            return asyncCall(
              batch.driver.getItem,
              item.relativeKey,
              item.options
            ).then((value) => ({
              key: item.key,
              value: destr(value)
            }));
          })
        );
      });
    },
    getItemRaw(key, opts = {}) {
      key = normalizeKey$1(key);
      const { relativeKey, driver } = getMount(key);
      if (driver.getItemRaw) {
        return asyncCall(driver.getItemRaw, relativeKey, opts);
      }
      return asyncCall(driver.getItem, relativeKey, opts).then(
        (value) => deserializeRaw(value)
      );
    },
    async setItem(key, value, opts = {}) {
      if (value === void 0) {
        return storage.removeItem(key);
      }
      key = normalizeKey$1(key);
      const { relativeKey, driver } = getMount(key);
      if (!driver.setItem) {
        return;
      }
      await asyncCall(driver.setItem, relativeKey, stringify(value), opts);
      if (!driver.watch) {
        onChange("update", key);
      }
    },
    async setItems(items, commonOptions) {
      await runBatch(items, commonOptions, async (batch) => {
        if (batch.driver.setItems) {
          return asyncCall(
            batch.driver.setItems,
            batch.items.map((item) => ({
              key: item.relativeKey,
              value: stringify(item.value),
              options: item.options
            })),
            commonOptions
          );
        }
        if (!batch.driver.setItem) {
          return;
        }
        await Promise.all(
          batch.items.map((item) => {
            return asyncCall(
              batch.driver.setItem,
              item.relativeKey,
              stringify(item.value),
              item.options
            );
          })
        );
      });
    },
    async setItemRaw(key, value, opts = {}) {
      if (value === void 0) {
        return storage.removeItem(key, opts);
      }
      key = normalizeKey$1(key);
      const { relativeKey, driver } = getMount(key);
      if (driver.setItemRaw) {
        await asyncCall(driver.setItemRaw, relativeKey, value, opts);
      } else if (driver.setItem) {
        await asyncCall(driver.setItem, relativeKey, serializeRaw(value), opts);
      } else {
        return;
      }
      if (!driver.watch) {
        onChange("update", key);
      }
    },
    async removeItem(key, opts = {}) {
      if (typeof opts === "boolean") {
        opts = { removeMeta: opts };
      }
      key = normalizeKey$1(key);
      const { relativeKey, driver } = getMount(key);
      if (!driver.removeItem) {
        return;
      }
      await asyncCall(driver.removeItem, relativeKey, opts);
      if (opts.removeMeta || opts.removeMata) {
        await asyncCall(driver.removeItem, relativeKey + "$", opts);
      }
      if (!driver.watch) {
        onChange("remove", key);
      }
    },
    // Meta
    async getMeta(key, opts = {}) {
      if (typeof opts === "boolean") {
        opts = { nativeOnly: opts };
      }
      key = normalizeKey$1(key);
      const { relativeKey, driver } = getMount(key);
      const meta = /* @__PURE__ */ Object.create(null);
      if (driver.getMeta) {
        Object.assign(meta, await asyncCall(driver.getMeta, relativeKey, opts));
      }
      if (!opts.nativeOnly) {
        const value = await asyncCall(
          driver.getItem,
          relativeKey + "$",
          opts
        ).then((value_) => destr(value_));
        if (value && typeof value === "object") {
          if (typeof value.atime === "string") {
            value.atime = new Date(value.atime);
          }
          if (typeof value.mtime === "string") {
            value.mtime = new Date(value.mtime);
          }
          Object.assign(meta, value);
        }
      }
      return meta;
    },
    setMeta(key, value, opts = {}) {
      return this.setItem(key + "$", value, opts);
    },
    removeMeta(key, opts = {}) {
      return this.removeItem(key + "$", opts);
    },
    // Keys
    async getKeys(base, opts = {}) {
      base = normalizeBaseKey(base);
      const mounts = getMounts(base, true);
      let maskedMounts = [];
      const allKeys = [];
      for (const mount of mounts) {
        const rawKeys = await asyncCall(
          mount.driver.getKeys,
          mount.relativeBase,
          opts
        );
        for (const key of rawKeys) {
          const fullKey = mount.mountpoint + normalizeKey$1(key);
          if (!maskedMounts.some((p) => fullKey.startsWith(p))) {
            allKeys.push(fullKey);
          }
        }
        maskedMounts = [
          mount.mountpoint,
          ...maskedMounts.filter((p) => !p.startsWith(mount.mountpoint))
        ];
      }
      return base ? allKeys.filter(
        (key) => key.startsWith(base) && key[key.length - 1] !== "$"
      ) : allKeys.filter((key) => key[key.length - 1] !== "$");
    },
    // Utils
    async clear(base, opts = {}) {
      base = normalizeBaseKey(base);
      await Promise.all(
        getMounts(base, false).map(async (m) => {
          if (m.driver.clear) {
            return asyncCall(m.driver.clear, m.relativeBase, opts);
          }
          if (m.driver.removeItem) {
            const keys = await m.driver.getKeys(m.relativeBase || "", opts);
            return Promise.all(
              keys.map((key) => m.driver.removeItem(key, opts))
            );
          }
        })
      );
    },
    async dispose() {
      await Promise.all(
        Object.values(context.mounts).map((driver) => dispose(driver))
      );
    },
    async watch(callback) {
      await startWatch();
      context.watchListeners.push(callback);
      return async () => {
        context.watchListeners = context.watchListeners.filter(
          (listener) => listener !== callback
        );
        if (context.watchListeners.length === 0) {
          await stopWatch();
        }
      };
    },
    async unwatch() {
      context.watchListeners = [];
      await stopWatch();
    },
    // Mount
    mount(base, driver) {
      base = normalizeBaseKey(base);
      if (base && context.mounts[base]) {
        throw new Error(`already mounted at ${base}`);
      }
      if (base) {
        context.mountpoints.push(base);
        context.mountpoints.sort((a, b) => b.length - a.length);
      }
      context.mounts[base] = driver;
      if (context.watching) {
        Promise.resolve(watch(driver, onChange, base)).then((unwatcher) => {
          context.unwatch[base] = unwatcher;
        }).catch(console.error);
      }
      return storage;
    },
    async unmount(base, _dispose = true) {
      base = normalizeBaseKey(base);
      if (!base || !context.mounts[base]) {
        return;
      }
      if (context.watching && base in context.unwatch) {
        context.unwatch[base]();
        delete context.unwatch[base];
      }
      if (_dispose) {
        await dispose(context.mounts[base]);
      }
      context.mountpoints = context.mountpoints.filter((key) => key !== base);
      delete context.mounts[base];
    },
    getMount(key = "") {
      key = normalizeKey$1(key) + ":";
      const m = getMount(key);
      return {
        driver: m.driver,
        base: m.base
      };
    },
    getMounts(base = "", opts = {}) {
      base = normalizeKey$1(base);
      const mounts = getMounts(base, opts.parents);
      return mounts.map((m) => ({
        driver: m.driver,
        base: m.mountpoint
      }));
    },
    // Aliases
    keys: (base, opts = {}) => storage.getKeys(base, opts),
    get: (key, opts = {}) => storage.getItem(key, opts),
    set: (key, value, opts = {}) => storage.setItem(key, value, opts),
    has: (key, opts = {}) => storage.hasItem(key, opts),
    del: (key, opts = {}) => storage.removeItem(key, opts),
    remove: (key, opts = {}) => storage.removeItem(key, opts)
  };
  return storage;
}
function watch(driver, onChange, base) {
  return driver.watch ? driver.watch((event, key) => onChange(event, base + key)) : () => {
  };
}
async function dispose(driver) {
  if (typeof driver.dispose === "function") {
    await asyncCall(driver.dispose);
  }
}

const _assets = {

};

const normalizeKey = function normalizeKey(key) {
  if (!key) {
    return "";
  }
  return key.split("?")[0].replace(/[/\\]/g, ":").replace(/:+/g, ":").replace(/^:|:$/g, "");
};

const assets = {
  getKeys() {
    return Promise.resolve(Object.keys(_assets))
  },
  hasItem (id) {
    id = normalizeKey(id);
    return Promise.resolve(id in _assets)
  },
  getItem (id) {
    id = normalizeKey(id);
    return Promise.resolve(_assets[id] ? _assets[id].import() : null)
  },
  getMeta (id) {
    id = normalizeKey(id);
    return Promise.resolve(_assets[id] ? _assets[id].meta : {})
  }
};

function defineDriver(factory) {
  return factory;
}
function createError(driver, message, opts) {
  const err = new Error(`[unstorage] [${driver}] ${message}`, opts);
  return err;
}
function createRequiredError(driver, name) {
  if (Array.isArray(name)) {
    return createError(
      driver,
      `Missing some of the required options ${name.map((n) => "`" + n + "`").join(", ")}`
    );
  }
  return createError(driver, `Missing required option \`${name}\`.`);
}

function ignoreNotfound(err) {
  return err.code === "ENOENT" || err.code === "EISDIR" ? null : err;
}
function ignoreExists(err) {
  return err.code === "EEXIST" ? null : err;
}
async function writeFile(path, data, encoding) {
  await ensuredir(dirname$1(path));
  return promises.writeFile(path, data, encoding);
}
function readFile(path, encoding) {
  return promises.readFile(path, encoding).catch(ignoreNotfound);
}
function unlink(path) {
  return promises.unlink(path).catch(ignoreNotfound);
}
function readdir(dir) {
  return promises.readdir(dir, { withFileTypes: true }).catch(ignoreNotfound).then((r) => r || []);
}
async function ensuredir(dir) {
  if (existsSync(dir)) {
    return;
  }
  await ensuredir(dirname$1(dir)).catch(ignoreExists);
  await promises.mkdir(dir).catch(ignoreExists);
}
async function readdirRecursive(dir, ignore) {
  if (ignore && ignore(dir)) {
    return [];
  }
  const entries = await readdir(dir);
  const files = [];
  await Promise.all(
    entries.map(async (entry) => {
      const entryPath = resolve$1(dir, entry.name);
      if (entry.isDirectory()) {
        const dirFiles = await readdirRecursive(entryPath, ignore);
        files.push(...dirFiles.map((f) => entry.name + "/" + f));
      } else {
        if (!(ignore && ignore(entry.name))) {
          files.push(entry.name);
        }
      }
    })
  );
  return files;
}
async function rmRecursive(dir) {
  const entries = await readdir(dir);
  await Promise.all(
    entries.map((entry) => {
      const entryPath = resolve$1(dir, entry.name);
      if (entry.isDirectory()) {
        return rmRecursive(entryPath).then(() => promises.rmdir(entryPath));
      } else {
        return promises.unlink(entryPath);
      }
    })
  );
}

const PATH_TRAVERSE_RE = /\.\.:|\.\.$/;
const DRIVER_NAME = "fs-lite";
const unstorage_47drivers_47fs_45lite = defineDriver((opts = {}) => {
  if (!opts.base) {
    throw createRequiredError(DRIVER_NAME, "base");
  }
  opts.base = resolve$1(opts.base);
  const r = (key) => {
    if (PATH_TRAVERSE_RE.test(key)) {
      throw createError(
        DRIVER_NAME,
        `Invalid key: ${JSON.stringify(key)}. It should not contain .. segments`
      );
    }
    const resolved = join$1(opts.base, key.replace(/:/g, "/"));
    return resolved;
  };
  return {
    name: DRIVER_NAME,
    options: opts,
    hasItem(key) {
      return existsSync(r(key));
    },
    getItem(key) {
      return readFile(r(key), "utf8");
    },
    getItemRaw(key) {
      return readFile(r(key));
    },
    async getMeta(key) {
      const { atime, mtime, size, birthtime, ctime } = await promises.stat(r(key)).catch(() => ({}));
      return { atime, mtime, size, birthtime, ctime };
    },
    setItem(key, value) {
      if (opts.readOnly) {
        return;
      }
      return writeFile(r(key), value, "utf8");
    },
    setItemRaw(key, value) {
      if (opts.readOnly) {
        return;
      }
      return writeFile(r(key), value);
    },
    removeItem(key) {
      if (opts.readOnly) {
        return;
      }
      return unlink(r(key));
    },
    getKeys() {
      return readdirRecursive(r("."), opts.ignore);
    },
    async clear() {
      if (opts.readOnly || opts.noClear) {
        return;
      }
      await rmRecursive(r("."));
    }
  };
});

const storage = createStorage({});

storage.mount('/assets', assets);

storage.mount('data', unstorage_47drivers_47fs_45lite({"driver":"fsLite","base":"/home/alex/Github/smartflow/apps/admin/.data/kv"}));

function useStorage(base = "") {
  return base ? prefixStorage(storage, base) : storage;
}

function defaultCacheOptions() {
  return {
    name: "_",
    base: "/cache",
    swr: true,
    maxAge: 1
  };
}
function defineCachedFunction(fn, opts = {}) {
  opts = { ...defaultCacheOptions(), ...opts };
  const pending = {};
  const group = opts.group || "nitro/functions";
  const name = opts.name || fn.name || "_";
  const integrity = opts.integrity || hash([fn, opts]);
  const validate = opts.validate || ((entry) => entry.value !== void 0);
  async function get(key, resolver, shouldInvalidateCache, event) {
    const cacheKey = [opts.base, group, name, key + ".json"].filter(Boolean).join(":").replace(/:\/$/, ":index");
    let entry = await useStorage().getItem(cacheKey).catch((error) => {
      console.error(`[nitro] [cache] Cache read error.`, error);
      useNitroApp().captureError(error, { event, tags: ["cache"] });
    }) || {};
    if (typeof entry !== "object") {
      entry = {};
      const error = new Error("Malformed data read from cache.");
      console.error("[nitro] [cache]", error);
      useNitroApp().captureError(error, { event, tags: ["cache"] });
    }
    const ttl = (opts.maxAge ?? 0) * 1e3;
    if (ttl) {
      entry.expires = Date.now() + ttl;
    }
    const expired = shouldInvalidateCache || entry.integrity !== integrity || ttl && Date.now() - (entry.mtime || 0) > ttl || validate(entry) === false;
    const _resolve = async () => {
      const isPending = pending[key];
      if (!isPending) {
        if (entry.value !== void 0 && (opts.staleMaxAge || 0) >= 0 && opts.swr === false) {
          entry.value = void 0;
          entry.integrity = void 0;
          entry.mtime = void 0;
          entry.expires = void 0;
        }
        pending[key] = Promise.resolve(resolver());
      }
      try {
        entry.value = await pending[key];
      } catch (error) {
        if (!isPending) {
          delete pending[key];
        }
        throw error;
      }
      if (!isPending) {
        entry.mtime = Date.now();
        entry.integrity = integrity;
        delete pending[key];
        if (validate(entry) !== false) {
          let setOpts;
          if (opts.maxAge && !opts.swr) {
            setOpts = { ttl: opts.maxAge };
          }
          const promise = useStorage().setItem(cacheKey, entry, setOpts).catch((error) => {
            console.error(`[nitro] [cache] Cache write error.`, error);
            useNitroApp().captureError(error, { event, tags: ["cache"] });
          });
          if (event?.waitUntil) {
            event.waitUntil(promise);
          }
        }
      }
    };
    const _resolvePromise = expired ? _resolve() : Promise.resolve();
    if (entry.value === void 0) {
      await _resolvePromise;
    } else if (expired && event && event.waitUntil) {
      event.waitUntil(_resolvePromise);
    }
    if (opts.swr && validate(entry) !== false) {
      _resolvePromise.catch((error) => {
        console.error(`[nitro] [cache] SWR handler error.`, error);
        useNitroApp().captureError(error, { event, tags: ["cache"] });
      });
      return entry;
    }
    return _resolvePromise.then(() => entry);
  }
  return async (...args) => {
    const shouldBypassCache = await opts.shouldBypassCache?.(...args);
    if (shouldBypassCache) {
      return fn(...args);
    }
    const key = await (opts.getKey || getKey)(...args);
    const shouldInvalidateCache = await opts.shouldInvalidateCache?.(...args);
    const entry = await get(
      key,
      () => fn(...args),
      shouldInvalidateCache,
      args[0] && isEvent(args[0]) ? args[0] : void 0
    );
    let value = entry.value;
    if (opts.transform) {
      value = await opts.transform(entry, ...args) || value;
    }
    return value;
  };
}
function cachedFunction(fn, opts = {}) {
  return defineCachedFunction(fn, opts);
}
function getKey(...args) {
  return args.length > 0 ? hash(args, {}) : "";
}
function escapeKey(key) {
  return String(key).replace(/\W/g, "");
}
function defineCachedEventHandler(handler, opts = defaultCacheOptions()) {
  const variableHeaderNames = (opts.varies || []).filter(Boolean).map((h) => h.toLowerCase()).sort();
  const _opts = {
    ...opts,
    getKey: async (event) => {
      const customKey = await opts.getKey?.(event);
      if (customKey) {
        return escapeKey(customKey);
      }
      const _path = event.node.req.originalUrl || event.node.req.url || event.path;
      let _pathname;
      try {
        _pathname = escapeKey(decodeURI(parseURL(_path).pathname)).slice(0, 16) || "index";
      } catch {
        _pathname = "-";
      }
      const _hashedPath = `${_pathname}.${hash(_path)}`;
      const _headers = variableHeaderNames.map((header) => [header, event.node.req.headers[header]]).map(([name, value]) => `${escapeKey(name)}.${hash(value)}`);
      return [_hashedPath, ..._headers].join(":");
    },
    validate: (entry) => {
      if (!entry.value) {
        return false;
      }
      if (entry.value.code >= 400) {
        return false;
      }
      if (entry.value.body === void 0) {
        return false;
      }
      if (entry.value.headers.etag === "undefined" || entry.value.headers["last-modified"] === "undefined") {
        return false;
      }
      return true;
    },
    group: opts.group || "nitro/handlers",
    integrity: opts.integrity || hash([handler, opts])
  };
  const _cachedHandler = cachedFunction(
    async (incomingEvent) => {
      const variableHeaders = {};
      for (const header of variableHeaderNames) {
        const value = incomingEvent.node.req.headers[header];
        if (value !== void 0) {
          variableHeaders[header] = value;
        }
      }
      const reqProxy = cloneWithProxy(incomingEvent.node.req, {
        headers: variableHeaders
      });
      const resHeaders = {};
      let _resSendBody;
      const resProxy = cloneWithProxy(incomingEvent.node.res, {
        statusCode: 200,
        writableEnded: false,
        writableFinished: false,
        headersSent: false,
        closed: false,
        getHeader(name) {
          return resHeaders[name];
        },
        setHeader(name, value) {
          resHeaders[name] = value;
          return this;
        },
        getHeaderNames() {
          return Object.keys(resHeaders);
        },
        hasHeader(name) {
          return name in resHeaders;
        },
        removeHeader(name) {
          delete resHeaders[name];
        },
        getHeaders() {
          return resHeaders;
        },
        end(chunk, arg2, arg3) {
          if (typeof chunk === "string") {
            _resSendBody = chunk;
          }
          if (typeof arg2 === "function") {
            arg2();
          }
          if (typeof arg3 === "function") {
            arg3();
          }
          return this;
        },
        write(chunk, arg2, arg3) {
          if (typeof chunk === "string") {
            _resSendBody = chunk;
          }
          if (typeof arg2 === "function") {
            arg2(void 0);
          }
          if (typeof arg3 === "function") {
            arg3();
          }
          return true;
        },
        writeHead(statusCode, headers2) {
          this.statusCode = statusCode;
          if (headers2) {
            if (Array.isArray(headers2) || typeof headers2 === "string") {
              throw new TypeError("Raw headers  is not supported.");
            }
            for (const header in headers2) {
              const value = headers2[header];
              if (value !== void 0) {
                this.setHeader(
                  header,
                  value
                );
              }
            }
          }
          return this;
        }
      });
      const event = createEvent(reqProxy, resProxy);
      event.fetch = (url, fetchOptions) => fetchWithEvent(event, url, fetchOptions, {
        fetch: useNitroApp().localFetch
      });
      event.$fetch = (url, fetchOptions) => fetchWithEvent(event, url, fetchOptions, {
        fetch: globalThis.$fetch
      });
      event.context = incomingEvent.context;
      event.context.cache = {
        options: _opts
      };
      const body = await handler(event) || _resSendBody;
      const headers = event.node.res.getHeaders();
      headers.etag = String(
        headers.Etag || headers.etag || `W/"${hash(body)}"`
      );
      headers["last-modified"] = String(
        headers["Last-Modified"] || headers["last-modified"] || (/* @__PURE__ */ new Date()).toUTCString()
      );
      const cacheControl = [];
      if (opts.swr) {
        if (opts.maxAge) {
          cacheControl.push(`s-maxage=${opts.maxAge}`);
        }
        if (opts.staleMaxAge) {
          cacheControl.push(`stale-while-revalidate=${opts.staleMaxAge}`);
        } else {
          cacheControl.push("stale-while-revalidate");
        }
      } else if (opts.maxAge) {
        cacheControl.push(`max-age=${opts.maxAge}`);
      }
      if (cacheControl.length > 0) {
        headers["cache-control"] = cacheControl.join(", ");
      }
      const cacheEntry = {
        code: event.node.res.statusCode,
        headers,
        body
      };
      return cacheEntry;
    },
    _opts
  );
  return defineEventHandler(async (event) => {
    if (opts.headersOnly) {
      if (handleCacheHeaders(event, { maxAge: opts.maxAge })) {
        return;
      }
      return handler(event);
    }
    const response = await _cachedHandler(
      event
    );
    if (event.node.res.headersSent || event.node.res.writableEnded) {
      return response.body;
    }
    if (handleCacheHeaders(event, {
      modifiedTime: new Date(response.headers["last-modified"]),
      etag: response.headers.etag,
      maxAge: opts.maxAge
    })) {
      return;
    }
    event.node.res.statusCode = response.code;
    for (const name in response.headers) {
      const value = response.headers[name];
      if (name === "set-cookie") {
        event.node.res.appendHeader(
          name,
          splitCookiesString(value)
        );
      } else {
        if (value !== void 0) {
          event.node.res.setHeader(name, value);
        }
      }
    }
    return response.body;
  });
}
function cloneWithProxy(obj, overrides) {
  return new Proxy(obj, {
    get(target, property, receiver) {
      if (property in overrides) {
        return overrides[property];
      }
      return Reflect.get(target, property, receiver);
    },
    set(target, property, value, receiver) {
      if (property in overrides) {
        overrides[property] = value;
        return true;
      }
      return Reflect.set(target, property, value, receiver);
    }
  });
}
const cachedEventHandler = defineCachedEventHandler;

function klona(x) {
	if (typeof x !== 'object') return x;

	var k, tmp, str=Object.prototype.toString.call(x);

	if (str === '[object Object]') {
		if (x.constructor !== Object && typeof x.constructor === 'function') {
			tmp = new x.constructor();
			for (k in x) {
				if (x.hasOwnProperty(k) && tmp[k] !== x[k]) {
					tmp[k] = klona(x[k]);
				}
			}
		} else {
			tmp = {}; // null
			for (k in x) {
				if (k === '__proto__') {
					Object.defineProperty(tmp, k, {
						value: klona(x[k]),
						configurable: true,
						enumerable: true,
						writable: true,
					});
				} else {
					tmp[k] = klona(x[k]);
				}
			}
		}
		return tmp;
	}

	if (str === '[object Array]') {
		k = x.length;
		for (tmp=Array(k); k--;) {
			tmp[k] = klona(x[k]);
		}
		return tmp;
	}

	if (str === '[object Set]') {
		tmp = new Set;
		x.forEach(function (val) {
			tmp.add(klona(val));
		});
		return tmp;
	}

	if (str === '[object Map]') {
		tmp = new Map;
		x.forEach(function (val, key) {
			tmp.set(klona(key), klona(val));
		});
		return tmp;
	}

	if (str === '[object Date]') {
		return new Date(+x);
	}

	if (str === '[object RegExp]') {
		tmp = new RegExp(x.source, x.flags);
		tmp.lastIndex = x.lastIndex;
		return tmp;
	}

	if (str === '[object DataView]') {
		return new x.constructor( klona(x.buffer) );
	}

	if (str === '[object ArrayBuffer]') {
		return x.slice(0);
	}

	// ArrayBuffer.isView(x)
	// ~> `new` bcuz `Buffer.slice` => ref
	if (str.slice(-6) === 'Array]') {
		return new x.constructor(x);
	}

	return x;
}

const inlineAppConfig = {};



const appConfig = defuFn(inlineAppConfig);

const NUMBER_CHAR_RE = /\d/;
const STR_SPLITTERS = ["-", "_", "/", "."];
function isUppercase(char = "") {
  if (NUMBER_CHAR_RE.test(char)) {
    return void 0;
  }
  return char !== char.toLowerCase();
}
function splitByCase(str, separators) {
  const splitters = STR_SPLITTERS;
  const parts = [];
  if (!str || typeof str !== "string") {
    return parts;
  }
  let buff = "";
  let previousUpper;
  let previousSplitter;
  for (const char of str) {
    const isSplitter = splitters.includes(char);
    if (isSplitter === true) {
      parts.push(buff);
      buff = "";
      previousUpper = void 0;
      continue;
    }
    const isUpper = isUppercase(char);
    if (previousSplitter === false) {
      if (previousUpper === false && isUpper === true) {
        parts.push(buff);
        buff = char;
        previousUpper = isUpper;
        continue;
      }
      if (previousUpper === true && isUpper === false && buff.length > 1) {
        const lastChar = buff.at(-1);
        parts.push(buff.slice(0, Math.max(0, buff.length - 1)));
        buff = lastChar + char;
        previousUpper = isUpper;
        continue;
      }
    }
    buff += char;
    previousUpper = isUpper;
    previousSplitter = isSplitter;
  }
  parts.push(buff);
  return parts;
}
function kebabCase(str, joiner) {
  return str ? (Array.isArray(str) ? str : splitByCase(str)).map((p) => p.toLowerCase()).join(joiner) : "";
}
function snakeCase(str) {
  return kebabCase(str || "", "_");
}

function getEnv(key, opts) {
  const envKey = snakeCase(key).toUpperCase();
  return destr(
    process.env[opts.prefix + envKey] ?? process.env[opts.altPrefix + envKey]
  );
}
function _isObject(input) {
  return typeof input === "object" && !Array.isArray(input);
}
function applyEnv(obj, opts, parentKey = "") {
  for (const key in obj) {
    const subKey = parentKey ? `${parentKey}_${key}` : key;
    const envValue = getEnv(subKey, opts);
    if (_isObject(obj[key])) {
      if (_isObject(envValue)) {
        obj[key] = { ...obj[key], ...envValue };
        applyEnv(obj[key], opts, subKey);
      } else if (envValue === void 0) {
        applyEnv(obj[key], opts, subKey);
      } else {
        obj[key] = envValue ?? obj[key];
      }
    } else {
      obj[key] = envValue ?? obj[key];
    }
    if (opts.envExpansion && typeof obj[key] === "string") {
      obj[key] = _expandFromEnv(obj[key]);
    }
  }
  return obj;
}
const envExpandRx = /{{(.*?)}}/g;
function _expandFromEnv(value) {
  return value.replace(envExpandRx, (match, key) => {
    return process.env[key] || match;
  });
}

const _inlineRuntimeConfig = {
  "app": {
    "baseURL": "/"
  },
  "nitro": {
    "routeRules": {}
  }
};
const envOptions = {
  prefix: "NITRO_",
  altPrefix: _inlineRuntimeConfig.nitro.envPrefix ?? process.env.NITRO_ENV_PREFIX ?? "_",
  envExpansion: _inlineRuntimeConfig.nitro.envExpansion ?? process.env.NITRO_ENV_EXPANSION ?? false
};
const _sharedRuntimeConfig = _deepFreeze(
  applyEnv(klona(_inlineRuntimeConfig), envOptions)
);
function useRuntimeConfig(event) {
  {
    return _sharedRuntimeConfig;
  }
}
_deepFreeze(klona(appConfig));
function _deepFreeze(object) {
  const propNames = Object.getOwnPropertyNames(object);
  for (const name of propNames) {
    const value = object[name];
    if (value && typeof value === "object") {
      _deepFreeze(value);
    }
  }
  return Object.freeze(object);
}
new Proxy(/* @__PURE__ */ Object.create(null), {
  get: (_, prop) => {
    console.warn(
      "Please use `useRuntimeConfig()` instead of accessing config directly."
    );
    const runtimeConfig = useRuntimeConfig();
    if (prop in runtimeConfig) {
      return runtimeConfig[prop];
    }
    return void 0;
  }
});

function createContext(opts = {}) {
  let currentInstance;
  let isSingleton = false;
  const checkConflict = (instance) => {
    if (currentInstance && currentInstance !== instance) {
      throw new Error("Context conflict");
    }
  };
  let als;
  if (opts.asyncContext) {
    const _AsyncLocalStorage = opts.AsyncLocalStorage || globalThis.AsyncLocalStorage;
    if (_AsyncLocalStorage) {
      als = new _AsyncLocalStorage();
    } else {
      console.warn("[unctx] `AsyncLocalStorage` is not provided.");
    }
  }
  const _getCurrentInstance = () => {
    if (als && currentInstance === void 0) {
      const instance = als.getStore();
      if (instance !== void 0) {
        return instance;
      }
    }
    return currentInstance;
  };
  return {
    use: () => {
      const _instance = _getCurrentInstance();
      if (_instance === void 0) {
        throw new Error("Context is not available");
      }
      return _instance;
    },
    tryUse: () => {
      return _getCurrentInstance();
    },
    set: (instance, replace) => {
      if (!replace) {
        checkConflict(instance);
      }
      currentInstance = instance;
      isSingleton = true;
    },
    unset: () => {
      currentInstance = void 0;
      isSingleton = false;
    },
    call: (instance, callback) => {
      checkConflict(instance);
      currentInstance = instance;
      try {
        return als ? als.run(instance, callback) : callback();
      } finally {
        if (!isSingleton) {
          currentInstance = void 0;
        }
      }
    },
    async callAsync(instance, callback) {
      currentInstance = instance;
      const onRestore = () => {
        currentInstance = instance;
      };
      const onLeave = () => currentInstance === instance ? onRestore : void 0;
      asyncHandlers.add(onLeave);
      try {
        const r = als ? als.run(instance, callback) : callback();
        if (!isSingleton) {
          currentInstance = void 0;
        }
        return await r;
      } finally {
        asyncHandlers.delete(onLeave);
      }
    }
  };
}
function createNamespace(defaultOpts = {}) {
  const contexts = {};
  return {
    get(key, opts = {}) {
      if (!contexts[key]) {
        contexts[key] = createContext({ ...defaultOpts, ...opts });
      }
      return contexts[key];
    }
  };
}
const _globalThis = typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : typeof global !== "undefined" ? global : {};
const globalKey = "__unctx__";
const defaultNamespace = _globalThis[globalKey] || (_globalThis[globalKey] = createNamespace());
const getContext = (key, opts = {}) => defaultNamespace.get(key, opts);
const asyncHandlersKey = "__unctx_async_handlers__";
const asyncHandlers = _globalThis[asyncHandlersKey] || (_globalThis[asyncHandlersKey] = /* @__PURE__ */ new Set());

const nitroAsyncContext = getContext("nitro-app", {
  asyncContext: true,
  AsyncLocalStorage: AsyncLocalStorage 
});

const config = useRuntimeConfig();
const _routeRulesMatcher = toRouteMatcher(
  createRouter$1({ routes: config.nitro.routeRules })
);
function createRouteRulesHandler(ctx) {
  return eventHandler((event) => {
    const routeRules = getRouteRules(event);
    if (routeRules.headers) {
      setHeaders(event, routeRules.headers);
    }
    if (routeRules.redirect) {
      let target = routeRules.redirect.to;
      if (target.endsWith("/**")) {
        let targetPath = event.path;
        const strpBase = routeRules.redirect._redirectStripBase;
        if (strpBase) {
          targetPath = withoutBase(targetPath, strpBase);
        }
        target = joinURL(target.slice(0, -3), targetPath);
      } else if (event.path.includes("?")) {
        const query = getQuery(event.path);
        target = withQuery(target, query);
      }
      return sendRedirect(event, target, routeRules.redirect.statusCode);
    }
    if (routeRules.proxy) {
      let target = routeRules.proxy.to;
      if (target.endsWith("/**")) {
        let targetPath = event.path;
        const strpBase = routeRules.proxy._proxyStripBase;
        if (strpBase) {
          targetPath = withoutBase(targetPath, strpBase);
        }
        target = joinURL(target.slice(0, -3), targetPath);
      } else if (event.path.includes("?")) {
        const query = getQuery(event.path);
        target = withQuery(target, query);
      }
      return proxyRequest(event, target, {
        fetch: ctx.localFetch,
        ...routeRules.proxy
      });
    }
  });
}
function getRouteRules(event) {
  event.context._nitro = event.context._nitro || {};
  if (!event.context._nitro.routeRules) {
    event.context._nitro.routeRules = getRouteRulesForPath(
      withoutBase(event.path.split("?")[0], useRuntimeConfig().app.baseURL)
    );
  }
  return event.context._nitro.routeRules;
}
function getRouteRulesForPath(path) {
  return defu({}, ..._routeRulesMatcher.matchAll(path).reverse());
}

function createNitroApp() {
  const config = useRuntimeConfig();
  const hooks = createHooks();
  const captureError = (error, context = {}) => {
    const promise = hooks.callHookParallel("error", error, context).catch((error_) => {
      console.error("Error while capturing another error", error_);
    });
    if (context.event && isEvent(context.event)) {
      const errors = context.event.context.nitro?.errors;
      if (errors) {
        errors.push({ error, context });
      }
      if (context.event.waitUntil) {
        context.event.waitUntil(promise);
      }
    }
  };
  const h3App = createApp({
    debug: destr(false),
    onError: (error, event) => {
      captureError(error, { event, tags: ["request"] });
      return errorHandler(error, event);
    },
    onRequest: async (event) => {
      await nitroApp$1.hooks.callHook("request", event).catch((error) => {
        captureError(error, { event, tags: ["request"] });
      });
    },
    onBeforeResponse: async (event, response) => {
      await nitroApp$1.hooks.callHook("beforeResponse", event, response).catch((error) => {
        captureError(error, { event, tags: ["request", "response"] });
      });
    },
    onAfterResponse: async (event, response) => {
      await nitroApp$1.hooks.callHook("afterResponse", event, response).catch((error) => {
        captureError(error, { event, tags: ["request", "response"] });
      });
    }
  });
  const router = createRouter({
    preemptive: true
  });
  const localCall = createCall(toNodeListener(h3App));
  const _localFetch = createFetch(localCall, globalThis.fetch);
  const localFetch = (input, init) => _localFetch(input, init).then(
    (response) => normalizeFetchResponse(response)
  );
  const $fetch = createFetch$1({
    fetch: localFetch,
    Headers: Headers$1,
    defaults: { baseURL: config.app.baseURL }
  });
  globalThis.$fetch = $fetch;
  h3App.use(createRouteRulesHandler({ localFetch }));
  h3App.use(
    eventHandler((event) => {
      event.context.nitro = event.context.nitro || { errors: [] };
      const envContext = event.node.req?.__unenv__;
      if (envContext) {
        Object.assign(event.context, envContext);
      }
      event.fetch = (req, init) => fetchWithEvent(event, req, init, { fetch: localFetch });
      event.$fetch = (req, init) => fetchWithEvent(event, req, init, {
        fetch: $fetch
      });
      event.waitUntil = (promise) => {
        if (!event.context.nitro._waitUntilPromises) {
          event.context.nitro._waitUntilPromises = [];
        }
        event.context.nitro._waitUntilPromises.push(promise);
        if (envContext?.waitUntil) {
          envContext.waitUntil(promise);
        }
      };
      event.captureError = (error, context) => {
        captureError(error, { event, ...context });
      };
    })
  );
  for (const h of handlers) {
    let handler = h.lazy ? lazyEventHandler(h.handler) : h.handler;
    if (h.middleware || !h.route) {
      const middlewareBase = (config.app.baseURL + (h.route || "/")).replace(
        /\/+/g,
        "/"
      );
      h3App.use(middlewareBase, handler);
    } else {
      const routeRules = getRouteRulesForPath(
        h.route.replace(/:\w+|\*\*/g, "_")
      );
      if (routeRules.cache) {
        handler = cachedEventHandler(handler, {
          group: "nitro/routes",
          ...routeRules.cache
        });
      }
      router.use(h.route, handler, h.method);
    }
  }
  h3App.use(config.app.baseURL, router.handler);
  {
    const _handler = h3App.handler;
    h3App.handler = (event) => {
      const ctx = { event };
      return nitroAsyncContext.callAsync(ctx, () => _handler(event));
    };
  }
  const app = {
    hooks,
    h3App,
    router,
    localCall,
    localFetch,
    captureError
  };
  return app;
}
function runNitroPlugins(nitroApp2) {
  for (const plugin of plugins) {
    try {
      plugin(nitroApp2);
    } catch (error) {
      nitroApp2.captureError(error, { tags: ["plugin"] });
      throw error;
    }
  }
}
const nitroApp$1 = createNitroApp();
function useNitroApp() {
  return nitroApp$1;
}
runNitroPlugins(nitroApp$1);

const debug = (...args) => {
};
function GracefulShutdown(server, opts) {
  opts = opts || {};
  const options = Object.assign(
    {
      signals: "SIGINT SIGTERM",
      timeout: 3e4,
      development: false,
      forceExit: true,
      onShutdown: (signal) => Promise.resolve(signal),
      preShutdown: (signal) => Promise.resolve(signal)
    },
    opts
  );
  let isShuttingDown = false;
  const connections = {};
  let connectionCounter = 0;
  const secureConnections = {};
  let secureConnectionCounter = 0;
  let failed = false;
  let finalRun = false;
  function onceFactory() {
    let called = false;
    return (emitter, events, callback) => {
      function call() {
        if (!called) {
          called = true;
          return Reflect.apply(callback, this, arguments);
        }
      }
      for (const e of events) {
        emitter.on(e, call);
      }
    };
  }
  const signals = options.signals.split(" ").map((s) => s.trim()).filter((s) => s.length > 0);
  const once = onceFactory();
  once(process, signals, (signal) => {
    shutdown(signal).then(() => {
      if (options.forceExit) {
        process.exit(failed ? 1 : 0);
      }
    }).catch((error) => {
      process.exit(1);
    });
  });
  function isFunction(functionToCheck) {
    const getType = Object.prototype.toString.call(functionToCheck);
    return /^\[object\s([A-Za-z]+)?Function]$/.test(getType);
  }
  function destroy(socket, force = false) {
    if (socket._isIdle && isShuttingDown || force) {
      socket.destroy();
      if (socket.server instanceof http__default$1.Server) {
        delete connections[socket._connectionId];
      } else {
        delete secureConnections[socket._connectionId];
      }
    }
  }
  function destroyAllConnections(force = false) {
    for (const key of Object.keys(connections)) {
      const socket = connections[key];
      const serverResponse = socket._httpMessage;
      if (serverResponse && !force) {
        if (!serverResponse.headersSent) {
          serverResponse.setHeader("connection", "close");
        }
      } else {
        destroy(socket);
      }
    }
    for (const key of Object.keys(secureConnections)) {
      const socket = secureConnections[key];
      const serverResponse = socket._httpMessage;
      if (serverResponse && !force) {
        if (!serverResponse.headersSent) {
          serverResponse.setHeader("connection", "close");
        }
      } else {
        destroy(socket);
      }
    }
  }
  server.on("request", (req, res) => {
    req.socket._isIdle = false;
    if (isShuttingDown && !res.headersSent) {
      res.setHeader("connection", "close");
    }
    res.on("finish", () => {
      req.socket._isIdle = true;
      destroy(req.socket);
    });
  });
  server.on("connection", (socket) => {
    if (isShuttingDown) {
      socket.destroy();
    } else {
      const id = connectionCounter++;
      socket._isIdle = true;
      socket._connectionId = id;
      connections[id] = socket;
      socket.once("close", () => {
        delete connections[socket._connectionId];
      });
    }
  });
  server.on("secureConnection", (socket) => {
    if (isShuttingDown) {
      socket.destroy();
    } else {
      const id = secureConnectionCounter++;
      socket._isIdle = true;
      socket._connectionId = id;
      secureConnections[id] = socket;
      socket.once("close", () => {
        delete secureConnections[socket._connectionId];
      });
    }
  });
  process.on("close", () => {
  });
  function shutdown(sig) {
    function cleanupHttp() {
      destroyAllConnections();
      return new Promise((resolve, reject) => {
        server.close((err) => {
          if (err) {
            return reject(err);
          }
          return resolve(true);
        });
      });
    }
    if (options.development) {
      return process.exit(0);
    }
    function finalHandler() {
      if (!finalRun) {
        finalRun = true;
        if (options.finally && isFunction(options.finally)) {
          options.finally();
        }
      }
      return Promise.resolve();
    }
    function waitForReadyToShutDown(totalNumInterval) {
      if (totalNumInterval === 0) {
        debug(
          `Could not close connections in time (${options.timeout}ms), will forcefully shut down`
        );
        return Promise.resolve(true);
      }
      const allConnectionsClosed = Object.keys(connections).length === 0 && Object.keys(secureConnections).length === 0;
      if (allConnectionsClosed) {
        return Promise.resolve(false);
      }
      return new Promise((resolve) => {
        setTimeout(() => {
          resolve(waitForReadyToShutDown(totalNumInterval - 1));
        }, 250);
      });
    }
    if (isShuttingDown) {
      return Promise.resolve();
    }
    return options.preShutdown(sig).then(() => {
      isShuttingDown = true;
      cleanupHttp();
    }).then(() => {
      const pollIterations = options.timeout ? Math.round(options.timeout / 250) : 0;
      return waitForReadyToShutDown(pollIterations);
    }).then((force) => {
      if (force) {
        destroyAllConnections(force);
      }
      return options.onShutdown(sig);
    }).then(finalHandler).catch((error) => {
      const errString = typeof error === "string" ? error : JSON.stringify(error);
      failed = true;
      throw errString;
    });
  }
  function shutdownManual() {
    return shutdown("manual");
  }
  return shutdownManual;
}

function getGracefulShutdownConfig() {
  return {
    disabled: !!process.env.NITRO_SHUTDOWN_DISABLED,
    signals: (process.env.NITRO_SHUTDOWN_SIGNALS || "SIGTERM SIGINT").split(" ").map((s) => s.trim()),
    timeout: Number.parseInt(process.env.NITRO_SHUTDOWN_TIMEOUT || "", 10) || 3e4,
    forceExit: !process.env.NITRO_SHUTDOWN_NO_FORCE_EXIT
  };
}
function setupGracefulShutdown(listener, nitroApp) {
  const shutdownConfig = getGracefulShutdownConfig();
  if (shutdownConfig.disabled) {
    return;
  }
  GracefulShutdown(listener, {
    signals: shutdownConfig.signals.join(" "),
    timeout: shutdownConfig.timeout,
    forceExit: shutdownConfig.forceExit,
    onShutdown: async () => {
      await new Promise((resolve) => {
        const timeout = setTimeout(() => {
          console.warn("Graceful shutdown timeout, force exiting...");
          resolve();
        }, shutdownConfig.timeout);
        nitroApp.hooks.callHook("close").catch((error) => {
          console.error(error);
        }).finally(() => {
          clearTimeout(timeout);
          resolve();
        });
      });
    }
  });
}

const cert = process.env.NITRO_SSL_CERT;
const key = process.env.NITRO_SSL_KEY;
const nitroApp = useNitroApp();
const server = cert && key ? new Server({ key, cert }, toNodeListener(nitroApp.h3App)) : new Server$1(toNodeListener(nitroApp.h3App));
const port = destr(process.env.NITRO_PORT || process.env.PORT) || 3e3;
const host = process.env.NITRO_HOST || process.env.HOST;
const path = process.env.NITRO_UNIX_SOCKET;
const listener = server.listen(path ? { path } : { port, host }, (err) => {
  if (err) {
    console.error(err);
    process.exit(1);
  }
  const protocol = cert && key ? "https" : "http";
  const addressInfo = listener.address();
  if (typeof addressInfo === "string") {
    console.log(`Listening on unix socket ${addressInfo}`);
    return;
  }
  const baseURL = (useRuntimeConfig().app.baseURL || "").replace(/\/$/, "");
  const url = `${protocol}://${addressInfo.family === "IPv6" ? `[${addressInfo.address}]` : addressInfo.address}:${addressInfo.port}${baseURL}`;
  console.log(`Listening on ${url}`);
});
trapUnhandledNodeErrors();
setupGracefulShutdown(listener, nitroApp);
const nodeServer = {};

export { D, nodeServer as a, node$1 as n };
//# sourceMappingURL=nitro.mjs.map
