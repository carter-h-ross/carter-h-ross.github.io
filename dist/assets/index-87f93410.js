(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))i(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function t(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(s){if(s.ep)return;s.ep=!0;const r=t(s);fetch(s.href,r)}})();/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Oc=function(a){const e=[];let t=0;for(let i=0;i<a.length;i++){let s=a.charCodeAt(i);s<128?e[t++]=s:s<2048?(e[t++]=s>>6|192,e[t++]=s&63|128):(s&64512)===55296&&i+1<a.length&&(a.charCodeAt(i+1)&64512)===56320?(s=65536+((s&1023)<<10)+(a.charCodeAt(++i)&1023),e[t++]=s>>18|240,e[t++]=s>>12&63|128,e[t++]=s>>6&63|128,e[t++]=s&63|128):(e[t++]=s>>12|224,e[t++]=s>>6&63|128,e[t++]=s&63|128)}return e},su=function(a){const e=[];let t=0,i=0;for(;t<a.length;){const s=a[t++];if(s<128)e[i++]=String.fromCharCode(s);else if(s>191&&s<224){const r=a[t++];e[i++]=String.fromCharCode((s&31)<<6|r&63)}else if(s>239&&s<365){const r=a[t++],o=a[t++],c=a[t++],l=((s&7)<<18|(r&63)<<12|(o&63)<<6|c&63)-65536;e[i++]=String.fromCharCode(55296+(l>>10)),e[i++]=String.fromCharCode(56320+(l&1023))}else{const r=a[t++],o=a[t++];e[i++]=String.fromCharCode((s&15)<<12|(r&63)<<6|o&63)}}return e.join("")},Fc={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(a,e){if(!Array.isArray(a))throw Error("encodeByteArray takes an array as a parameter");this.init_();const t=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,i=[];for(let s=0;s<a.length;s+=3){const r=a[s],o=s+1<a.length,c=o?a[s+1]:0,l=s+2<a.length,u=l?a[s+2]:0,h=r>>2,d=(r&3)<<4|c>>4;let f=(c&15)<<2|u>>6,g=u&63;l||(g=64,o||(f=64)),i.push(t[h],t[d],t[f],t[g])}return i.join("")},encodeString(a,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(a):this.encodeByteArray(Oc(a),e)},decodeString(a,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(a):su(this.decodeStringToByteArray(a,e))},decodeStringToByteArray(a,e){this.init_();const t=e?this.charToByteMapWebSafe_:this.charToByteMap_,i=[];for(let s=0;s<a.length;){const r=t[a.charAt(s++)],c=s<a.length?t[a.charAt(s)]:0;++s;const u=s<a.length?t[a.charAt(s)]:64;++s;const d=s<a.length?t[a.charAt(s)]:64;if(++s,r==null||c==null||u==null||d==null)throw new ru;const f=r<<2|c>>4;if(i.push(f),u!==64){const g=c<<4&240|u>>2;if(i.push(g),d!==64){const _=u<<6&192|d;i.push(_)}}}return i},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let a=0;a<this.ENCODED_VALS.length;a++)this.byteToCharMap_[a]=this.ENCODED_VALS.charAt(a),this.charToByteMap_[this.byteToCharMap_[a]]=a,this.byteToCharMapWebSafe_[a]=this.ENCODED_VALS_WEBSAFE.charAt(a),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[a]]=a,a>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(a)]=a,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(a)]=a)}}};class ru extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const au=function(a){const e=Oc(a);return Fc.encodeByteArray(e,!0)},Uc=function(a){return au(a).replace(/\./g,"")},ou=function(a){try{return Fc.decodeString(a,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function cu(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lu=()=>cu().__FIREBASE_DEFAULTS__,uu=()=>{if(typeof process>"u"||typeof process.env>"u")return;const a={}.__FIREBASE_DEFAULTS__;if(a)return JSON.parse(a)},hu=()=>{if(typeof document>"u")return;let a;try{a=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=a&&ou(a[1]);return e&&JSON.parse(e)},du=()=>{try{return lu()||uu()||hu()}catch(a){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${a}`);return}},fu=()=>{var a;return(a=du())===null||a===void 0?void 0:a.config};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pu{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,i)=>{t?this.reject(t):this.resolve(i),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(t):e(t,i))}}}function mu(){const a=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof a=="object"&&a.id!==void 0}function Bc(){try{return typeof indexedDB=="object"}catch{return!1}}function kc(){return new Promise((a,e)=>{try{let t=!0;const i="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(i);s.onsuccess=()=>{s.result.close(),t||self.indexedDB.deleteDatabase(i),a(!0)},s.onupgradeneeded=()=>{t=!1},s.onerror=()=>{var r;e(((r=s.error)===null||r===void 0?void 0:r.message)||"")}}catch(t){e(t)}})}function gu(){return!(typeof navigator>"u"||!navigator.cookieEnabled)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _u="FirebaseError";class Zn extends Error{constructor(e,t,i){super(t),this.code=e,this.customData=i,this.name=_u,Object.setPrototypeOf(this,Zn.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,ks.prototype.create)}}class ks{constructor(e,t,i){this.service=e,this.serviceName=t,this.errors=i}create(e,...t){const i=t[0]||{},s=`${this.service}/${e}`,r=this.errors[e],o=r?xu(r,i):"Error",c=`${this.serviceName}: ${o} (${s}).`;return new Zn(s,c,i)}}function xu(a,e){return a.replace(vu,(t,i)=>{const s=e[i];return s!=null?String(s):`<${i}?>`})}const vu=/\{\$([^}]+)}/g;function Ns(a,e){if(a===e)return!0;const t=Object.keys(a),i=Object.keys(e);for(const s of t){if(!i.includes(s))return!1;const r=a[s],o=e[s];if(Ra(r)&&Ra(o)){if(!Ns(r,o))return!1}else if(r!==o)return!1}for(const s of i)if(!t.includes(s))return!1;return!0}function Ra(a){return a!==null&&typeof a=="object"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yu=1e3,bu=2,Mu=4*60*60*1e3,Su=.5;function Da(a,e=yu,t=bu){const i=e*Math.pow(t,a),s=Math.round(Su*i*(Math.random()-.5)*2);return Math.min(Mu,i+s)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zc(a){return a&&a._delegate?a._delegate:a}class Tn{constructor(e,t,i){this.name=e,this.instanceFactory=t,this.type=i,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const In="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wu{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const i=new pu;if(this.instancesDeferred.set(t,i),this.isInitialized(t)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:t});s&&i.resolve(s)}catch{}}return this.instancesDeferred.get(t).promise}getImmediate(e){var t;const i=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),s=(t=e==null?void 0:e.optional)!==null&&t!==void 0?t:!1;if(this.isInitialized(i)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:i})}catch(r){if(s)return null;throw r}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(Eu(e))try{this.getOrInitializeService({instanceIdentifier:In})}catch{}for(const[t,i]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(t);try{const r=this.getOrInitializeService({instanceIdentifier:s});i.resolve(r)}catch{}}}}clearInstance(e=In){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(t=>"INTERNAL"in t).map(t=>t.INTERNAL.delete()),...e.filter(t=>"_delete"in t).map(t=>t._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=In){return this.instances.has(e)}getOptions(e=In){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,i=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(i))throw Error(`${this.name}(${i}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:i,options:t});for(const[r,o]of this.instancesDeferred.entries()){const c=this.normalizeInstanceIdentifier(r);i===c&&o.resolve(s)}return s}onInit(e,t){var i;const s=this.normalizeInstanceIdentifier(t),r=(i=this.onInitCallbacks.get(s))!==null&&i!==void 0?i:new Set;r.add(e),this.onInitCallbacks.set(s,r);const o=this.instances.get(s);return o&&e(o,s),()=>{r.delete(e)}}invokeOnInitCallbacks(e,t){const i=this.onInitCallbacks.get(t);if(i)for(const s of i)try{s(e,t)}catch{}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let i=this.instances.get(e);if(!i&&this.component&&(i=this.component.instanceFactory(this.container,{instanceIdentifier:Tu(e),options:t}),this.instances.set(e,i),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(i,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,i)}catch{}return i||null}normalizeInstanceIdentifier(e=In){return this.component?this.component.multipleInstances?e:In:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function Tu(a){return a===In?void 0:a}function Eu(a){return a.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Au{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new wu(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Xe;(function(a){a[a.DEBUG=0]="DEBUG",a[a.VERBOSE=1]="VERBOSE",a[a.INFO=2]="INFO",a[a.WARN=3]="WARN",a[a.ERROR=4]="ERROR",a[a.SILENT=5]="SILENT"})(Xe||(Xe={}));const Cu={debug:Xe.DEBUG,verbose:Xe.VERBOSE,info:Xe.INFO,warn:Xe.WARN,error:Xe.ERROR,silent:Xe.SILENT},Lu=Xe.INFO,Ru={[Xe.DEBUG]:"log",[Xe.VERBOSE]:"log",[Xe.INFO]:"info",[Xe.WARN]:"warn",[Xe.ERROR]:"error"},Du=(a,e,...t)=>{if(e<a.logLevel)return;const i=new Date().toISOString(),s=Ru[e];if(s)console[s](`[${i}]  ${a.name}:`,...t);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Gc{constructor(e){this.name=e,this._logLevel=Lu,this._logHandler=Du,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in Xe))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?Cu[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,Xe.DEBUG,...e),this._logHandler(this,Xe.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,Xe.VERBOSE,...e),this._logHandler(this,Xe.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,Xe.INFO,...e),this._logHandler(this,Xe.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,Xe.WARN,...e),this._logHandler(this,Xe.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,Xe.ERROR,...e),this._logHandler(this,Xe.ERROR,...e)}}const Iu=(a,e)=>e.some(t=>a instanceof t);let Ia,Pa;function Pu(){return Ia||(Ia=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Nu(){return Pa||(Pa=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Vc=new WeakMap,Vr=new WeakMap,Hc=new WeakMap,Qs=new WeakMap,oa=new WeakMap;function Ou(a){const e=new Promise((t,i)=>{const s=()=>{a.removeEventListener("success",r),a.removeEventListener("error",o)},r=()=>{t(bn(a.result)),s()},o=()=>{i(a.error),s()};a.addEventListener("success",r),a.addEventListener("error",o)});return e.then(t=>{t instanceof IDBCursor&&Vc.set(t,a)}).catch(()=>{}),oa.set(e,a),e}function Fu(a){if(Vr.has(a))return;const e=new Promise((t,i)=>{const s=()=>{a.removeEventListener("complete",r),a.removeEventListener("error",o),a.removeEventListener("abort",o)},r=()=>{t(),s()},o=()=>{i(a.error||new DOMException("AbortError","AbortError")),s()};a.addEventListener("complete",r),a.addEventListener("error",o),a.addEventListener("abort",o)});Vr.set(a,e)}let Hr={get(a,e,t){if(a instanceof IDBTransaction){if(e==="done")return Vr.get(a);if(e==="objectStoreNames")return a.objectStoreNames||Hc.get(a);if(e==="store")return t.objectStoreNames[1]?void 0:t.objectStore(t.objectStoreNames[0])}return bn(a[e])},set(a,e,t){return a[e]=t,!0},has(a,e){return a instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in a}};function Uu(a){Hr=a(Hr)}function Bu(a){return a===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...t){const i=a.call(er(this),e,...t);return Hc.set(i,e.sort?e.sort():[e]),bn(i)}:Nu().includes(a)?function(...e){return a.apply(er(this),e),bn(Vc.get(this))}:function(...e){return bn(a.apply(er(this),e))}}function ku(a){return typeof a=="function"?Bu(a):(a instanceof IDBTransaction&&Fu(a),Iu(a,Pu())?new Proxy(a,Hr):a)}function bn(a){if(a instanceof IDBRequest)return Ou(a);if(Qs.has(a))return Qs.get(a);const e=ku(a);return e!==a&&(Qs.set(a,e),oa.set(e,a)),e}const er=a=>oa.get(a);function Wc(a,e,{blocked:t,upgrade:i,blocking:s,terminated:r}={}){const o=indexedDB.open(a,e),c=bn(o);return i&&o.addEventListener("upgradeneeded",l=>{i(bn(o.result),l.oldVersion,l.newVersion,bn(o.transaction))}),t&&o.addEventListener("blocked",()=>t()),c.then(l=>{r&&l.addEventListener("close",()=>r()),s&&l.addEventListener("versionchange",()=>s())}).catch(()=>{}),c}const zu=["get","getKey","getAll","getAllKeys","count"],Gu=["put","add","delete","clear"],tr=new Map;function Na(a,e){if(!(a instanceof IDBDatabase&&!(e in a)&&typeof e=="string"))return;if(tr.get(e))return tr.get(e);const t=e.replace(/FromIndex$/,""),i=e!==t,s=Gu.includes(t);if(!(t in(i?IDBIndex:IDBObjectStore).prototype)||!(s||zu.includes(t)))return;const r=async function(o,...c){const l=this.transaction(o,s?"readwrite":"readonly");let u=l.store;return i&&(u=u.index(c.shift())),(await Promise.all([u[t](...c),s&&l.done]))[0]};return tr.set(e,r),r}Uu(a=>({...a,get:(e,t,i)=>Na(e,t)||a.get(e,t,i),has:(e,t)=>!!Na(e,t)||a.has(e,t)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vu{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(t=>{if(Hu(t)){const i=t.getImmediate();return`${i.library}/${i.version}`}else return null}).filter(t=>t).join(" ")}}function Hu(a){const e=a.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Wr="@firebase/app",Oa="0.9.4";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Gn=new Gc("@firebase/app"),Wu="@firebase/app-compat",ju="@firebase/analytics-compat",qu="@firebase/analytics",Xu="@firebase/app-check-compat",$u="@firebase/app-check",Yu="@firebase/auth",Ku="@firebase/auth-compat",Zu="@firebase/database",Ju="@firebase/database-compat",Qu="@firebase/functions",eh="@firebase/functions-compat",th="@firebase/installations",nh="@firebase/installations-compat",ih="@firebase/messaging",sh="@firebase/messaging-compat",rh="@firebase/performance",ah="@firebase/performance-compat",oh="@firebase/remote-config",ch="@firebase/remote-config-compat",lh="@firebase/storage",uh="@firebase/storage-compat",hh="@firebase/firestore",dh="@firebase/firestore-compat",fh="firebase";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jr="[DEFAULT]",ph={[Wr]:"fire-core",[Wu]:"fire-core-compat",[qu]:"fire-analytics",[ju]:"fire-analytics-compat",[$u]:"fire-app-check",[Xu]:"fire-app-check-compat",[Yu]:"fire-auth",[Ku]:"fire-auth-compat",[Zu]:"fire-rtdb",[Ju]:"fire-rtdb-compat",[Qu]:"fire-fn",[eh]:"fire-fn-compat",[th]:"fire-iid",[nh]:"fire-iid-compat",[ih]:"fire-fcm",[sh]:"fire-fcm-compat",[rh]:"fire-perf",[ah]:"fire-perf-compat",[oh]:"fire-rc",[ch]:"fire-rc-compat",[lh]:"fire-gcs",[uh]:"fire-gcs-compat",[hh]:"fire-fst",[dh]:"fire-fst-compat","fire-js":"fire-js",[fh]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Os=new Map,qr=new Map;function mh(a,e){try{a.container.addComponent(e)}catch(t){Gn.debug(`Component ${e.name} failed to register with FirebaseApp ${a.name}`,t)}}function Vn(a){const e=a.name;if(qr.has(e))return Gn.debug(`There were multiple attempts to register component ${e}.`),!1;qr.set(e,a);for(const t of Os.values())mh(t,a);return!0}function zs(a,e){const t=a.container.getProvider("heartbeat").getImmediate({optional:!0});return t&&t.triggerHeartbeat(),a.container.getProvider(e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gh={["no-app"]:"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["no-options"]:"Need to provide options, when not being deployed to hosting via source.",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["idb-open"]:"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.",["idb-get"]:"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.",["idb-set"]:"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.",["idb-delete"]:"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},Mn=new ks("app","Firebase",gh);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _h{constructor(e,t,i){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=i,this.container.addComponent(new Tn("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Mn.create("app-deleted",{appName:this._name})}}function jc(a,e={}){let t=a;typeof e!="object"&&(e={name:e});const i=Object.assign({name:jr,automaticDataCollectionEnabled:!1},e),s=i.name;if(typeof s!="string"||!s)throw Mn.create("bad-app-name",{appName:String(s)});if(t||(t=fu()),!t)throw Mn.create("no-options");const r=Os.get(s);if(r){if(Ns(t,r.options)&&Ns(i,r.config))return r;throw Mn.create("duplicate-app",{appName:s})}const o=new Au(s);for(const l of qr.values())o.addComponent(l);const c=new _h(t,i,o);return Os.set(s,c),c}function xh(a=jr){const e=Os.get(a);if(!e&&a===jr)return jc();if(!e)throw Mn.create("no-app",{appName:a});return e}function Sn(a,e,t){var i;let s=(i=ph[a])!==null&&i!==void 0?i:a;t&&(s+=`-${t}`);const r=s.match(/\s|\//),o=e.match(/\s|\//);if(r||o){const c=[`Unable to register library "${s}" with version "${e}":`];r&&c.push(`library name "${s}" contains illegal characters (whitespace or "/")`),r&&o&&c.push("and"),o&&c.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Gn.warn(c.join(" "));return}Vn(new Tn(`${s}-version`,()=>({library:s,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vh="firebase-heartbeat-database",yh=1,Zi="firebase-heartbeat-store";let nr=null;function qc(){return nr||(nr=Wc(vh,yh,{upgrade:(a,e)=>{switch(e){case 0:a.createObjectStore(Zi)}}}).catch(a=>{throw Mn.create("idb-open",{originalErrorMessage:a.message})})),nr}async function bh(a){try{return(await qc()).transaction(Zi).objectStore(Zi).get(Xc(a))}catch(e){if(e instanceof Zn)Gn.warn(e.message);else{const t=Mn.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Gn.warn(t.message)}}}async function Fa(a,e){try{const i=(await qc()).transaction(Zi,"readwrite");return await i.objectStore(Zi).put(e,Xc(a)),i.done}catch(t){if(t instanceof Zn)Gn.warn(t.message);else{const i=Mn.create("idb-set",{originalErrorMessage:t==null?void 0:t.message});Gn.warn(i.message)}}}function Xc(a){return`${a.name}!${a.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Mh=1024,Sh=30*24*60*60*1e3;class wh{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new Eh(t),this._heartbeatsCachePromise=this._storage.read().then(i=>(this._heartbeatsCache=i,i))}async triggerHeartbeat(){const t=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),i=Ua();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===i||this._heartbeatsCache.heartbeats.some(s=>s.date===i)))return this._heartbeatsCache.heartbeats.push({date:i,agent:t}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(s=>{const r=new Date(s.date).valueOf();return Date.now()-r<=Sh}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const e=Ua(),{heartbeatsToSend:t,unsentEntries:i}=Th(this._heartbeatsCache.heartbeats),s=Uc(JSON.stringify({version:2,heartbeats:t}));return this._heartbeatsCache.lastSentHeartbeatDate=e,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}}function Ua(){return new Date().toISOString().substring(0,10)}function Th(a,e=Mh){const t=[];let i=a.slice();for(const s of a){const r=t.find(o=>o.agent===s.agent);if(r){if(r.dates.push(s.date),Ba(t)>e){r.dates.pop();break}}else if(t.push({agent:s.agent,dates:[s.date]}),Ba(t)>e){t.pop();break}i=i.slice(1)}return{heartbeatsToSend:t,unsentEntries:i}}class Eh{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Bc()?kc().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await bh(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(e){var t;if(await this._canUseIndexedDBPromise){const s=await this.read();return Fa(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:s.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var t;if(await this._canUseIndexedDBPromise){const s=await this.read();return Fa(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...e.heartbeats]})}else return}}function Ba(a){return Uc(JSON.stringify({version:2,heartbeats:a})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ah(a){Vn(new Tn("platform-logger",e=>new Vu(e),"PRIVATE")),Vn(new Tn("heartbeat",e=>new wh(e),"PRIVATE")),Sn(Wr,Oa,a),Sn(Wr,Oa,"esm2017"),Sn("fire-js","")}Ah("");var Ch="firebase",Lh="9.17.2";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Sn(Ch,Lh,"app");const $c="@firebase/installations",ca="0.6.4";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Yc=1e4,Kc=`w:${ca}`,Zc="FIS_v2",Rh="https://firebaseinstallations.googleapis.com/v1",Dh=60*60*1e3,Ih="installations",Ph="Installations";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Nh={["missing-app-config-values"]:'Missing App configuration value: "{$valueName}"',["not-registered"]:"Firebase Installation is not registered.",["installation-not-found"]:"Firebase Installation not found.",["request-failed"]:'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',["app-offline"]:"Could not process request. Application offline.",["delete-pending-registration"]:"Can't delete installation while there is a pending registration request."},Hn=new ks(Ih,Ph,Nh);function Jc(a){return a instanceof Zn&&a.code.includes("request-failed")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Qc({projectId:a}){return`${Rh}/projects/${a}/installations`}function el(a){return{token:a.token,requestStatus:2,expiresIn:Fh(a.expiresIn),creationTime:Date.now()}}async function tl(a,e){const i=(await e.json()).error;return Hn.create("request-failed",{requestName:a,serverCode:i.code,serverMessage:i.message,serverStatus:i.status})}function nl({apiKey:a}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":a})}function Oh(a,{refreshToken:e}){const t=nl(a);return t.append("Authorization",Uh(e)),t}async function il(a){const e=await a();return e.status>=500&&e.status<600?a():e}function Fh(a){return Number(a.replace("s","000"))}function Uh(a){return`${Zc} ${a}`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Bh({appConfig:a,heartbeatServiceProvider:e},{fid:t}){const i=Qc(a),s=nl(a),r=e.getImmediate({optional:!0});if(r){const u=await r.getHeartbeatsHeader();u&&s.append("x-firebase-client",u)}const o={fid:t,authVersion:Zc,appId:a.appId,sdkVersion:Kc},c={method:"POST",headers:s,body:JSON.stringify(o)},l=await il(()=>fetch(i,c));if(l.ok){const u=await l.json();return{fid:u.fid||t,registrationStatus:2,refreshToken:u.refreshToken,authToken:el(u.authToken)}}else throw await tl("Create Installation",l)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sl(a){return new Promise(e=>{setTimeout(e,a)})}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function kh(a){return btoa(String.fromCharCode(...a)).replace(/\+/g,"-").replace(/\//g,"_")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zh=/^[cdef][\w-]{21}$/,Xr="";function Gh(){try{const a=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(a),a[0]=112+a[0]%16;const t=Vh(a);return zh.test(t)?t:Xr}catch{return Xr}}function Vh(a){return kh(a).substr(0,22)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Gs(a){return`${a.appName}!${a.appId}`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rl=new Map;function al(a,e){const t=Gs(a);ol(t,e),Hh(t,e)}function ol(a,e){const t=rl.get(a);if(t)for(const i of t)i(e)}function Hh(a,e){const t=Wh();t&&t.postMessage({key:a,fid:e}),jh()}let Fn=null;function Wh(){return!Fn&&"BroadcastChannel"in self&&(Fn=new BroadcastChannel("[Firebase] FID Change"),Fn.onmessage=a=>{ol(a.data.key,a.data.fid)}),Fn}function jh(){rl.size===0&&Fn&&(Fn.close(),Fn=null)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qh="firebase-installations-database",Xh=1,Wn="firebase-installations-store";let ir=null;function la(){return ir||(ir=Wc(qh,Xh,{upgrade:(a,e)=>{switch(e){case 0:a.createObjectStore(Wn)}}})),ir}async function Fs(a,e){const t=Gs(a),s=(await la()).transaction(Wn,"readwrite"),r=s.objectStore(Wn),o=await r.get(t);return await r.put(e,t),await s.done,(!o||o.fid!==e.fid)&&al(a,e.fid),e}async function cl(a){const e=Gs(a),i=(await la()).transaction(Wn,"readwrite");await i.objectStore(Wn).delete(e),await i.done}async function Vs(a,e){const t=Gs(a),s=(await la()).transaction(Wn,"readwrite"),r=s.objectStore(Wn),o=await r.get(t),c=e(o);return c===void 0?await r.delete(t):await r.put(c,t),await s.done,c&&(!o||o.fid!==c.fid)&&al(a,c.fid),c}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ua(a){let e;const t=await Vs(a.appConfig,i=>{const s=$h(i),r=Yh(a,s);return e=r.registrationPromise,r.installationEntry});return t.fid===Xr?{installationEntry:await e}:{installationEntry:t,registrationPromise:e}}function $h(a){const e=a||{fid:Gh(),registrationStatus:0};return ll(e)}function Yh(a,e){if(e.registrationStatus===0){if(!navigator.onLine){const s=Promise.reject(Hn.create("app-offline"));return{installationEntry:e,registrationPromise:s}}const t={fid:e.fid,registrationStatus:1,registrationTime:Date.now()},i=Kh(a,t);return{installationEntry:t,registrationPromise:i}}else return e.registrationStatus===1?{installationEntry:e,registrationPromise:Zh(a)}:{installationEntry:e}}async function Kh(a,e){try{const t=await Bh(a,e);return Fs(a.appConfig,t)}catch(t){throw Jc(t)&&t.customData.serverCode===409?await cl(a.appConfig):await Fs(a.appConfig,{fid:e.fid,registrationStatus:0}),t}}async function Zh(a){let e=await ka(a.appConfig);for(;e.registrationStatus===1;)await sl(100),e=await ka(a.appConfig);if(e.registrationStatus===0){const{installationEntry:t,registrationPromise:i}=await ua(a);return i||t}return e}function ka(a){return Vs(a,e=>{if(!e)throw Hn.create("installation-not-found");return ll(e)})}function ll(a){return Jh(a)?{fid:a.fid,registrationStatus:0}:a}function Jh(a){return a.registrationStatus===1&&a.registrationTime+Yc<Date.now()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Qh({appConfig:a,heartbeatServiceProvider:e},t){const i=ed(a,t),s=Oh(a,t),r=e.getImmediate({optional:!0});if(r){const u=await r.getHeartbeatsHeader();u&&s.append("x-firebase-client",u)}const o={installation:{sdkVersion:Kc,appId:a.appId}},c={method:"POST",headers:s,body:JSON.stringify(o)},l=await il(()=>fetch(i,c));if(l.ok){const u=await l.json();return el(u)}else throw await tl("Generate Auth Token",l)}function ed(a,{fid:e}){return`${Qc(a)}/${e}/authTokens:generate`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ha(a,e=!1){let t;const i=await Vs(a.appConfig,r=>{if(!ul(r))throw Hn.create("not-registered");const o=r.authToken;if(!e&&id(o))return r;if(o.requestStatus===1)return t=td(a,e),r;{if(!navigator.onLine)throw Hn.create("app-offline");const c=rd(r);return t=nd(a,c),c}});return t?await t:i.authToken}async function td(a,e){let t=await za(a.appConfig);for(;t.authToken.requestStatus===1;)await sl(100),t=await za(a.appConfig);const i=t.authToken;return i.requestStatus===0?ha(a,e):i}function za(a){return Vs(a,e=>{if(!ul(e))throw Hn.create("not-registered");const t=e.authToken;return ad(t)?Object.assign(Object.assign({},e),{authToken:{requestStatus:0}}):e})}async function nd(a,e){try{const t=await Qh(a,e),i=Object.assign(Object.assign({},e),{authToken:t});return await Fs(a.appConfig,i),t}catch(t){if(Jc(t)&&(t.customData.serverCode===401||t.customData.serverCode===404))await cl(a.appConfig);else{const i=Object.assign(Object.assign({},e),{authToken:{requestStatus:0}});await Fs(a.appConfig,i)}throw t}}function ul(a){return a!==void 0&&a.registrationStatus===2}function id(a){return a.requestStatus===2&&!sd(a)}function sd(a){const e=Date.now();return e<a.creationTime||a.creationTime+a.expiresIn<e+Dh}function rd(a){const e={requestStatus:1,requestTime:Date.now()};return Object.assign(Object.assign({},a),{authToken:e})}function ad(a){return a.requestStatus===1&&a.requestTime+Yc<Date.now()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function od(a){const e=a,{installationEntry:t,registrationPromise:i}=await ua(e);return i?i.catch(console.error):ha(e).catch(console.error),t.fid}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function cd(a,e=!1){const t=a;return await ld(t),(await ha(t,e)).token}async function ld(a){const{registrationPromise:e}=await ua(a);e&&await e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ud(a){if(!a||!a.options)throw sr("App Configuration");if(!a.name)throw sr("App Name");const e=["projectId","apiKey","appId"];for(const t of e)if(!a.options[t])throw sr(t);return{appName:a.name,projectId:a.options.projectId,apiKey:a.options.apiKey,appId:a.options.appId}}function sr(a){return Hn.create("missing-app-config-values",{valueName:a})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hl="installations",hd="installations-internal",dd=a=>{const e=a.getProvider("app").getImmediate(),t=ud(e),i=zs(e,"heartbeat");return{app:e,appConfig:t,heartbeatServiceProvider:i,_delete:()=>Promise.resolve()}},fd=a=>{const e=a.getProvider("app").getImmediate(),t=zs(e,hl).getImmediate();return{getId:()=>od(t),getToken:s=>cd(t,s)}};function pd(){Vn(new Tn(hl,dd,"PUBLIC")),Vn(new Tn(hd,fd,"PRIVATE"))}pd();Sn($c,ca);Sn($c,ca,"esm2017");/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Us="analytics",md="firebase_id",gd="origin",_d=60*1e3,xd="https://firebase.googleapis.com/v1alpha/projects/-/apps/{app-id}/webConfig",dl="https://www.googletagmanager.com/gtag/js";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Lt=new Gc("@firebase/analytics");/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fl(a){return Promise.all(a.map(e=>e.catch(t=>t)))}function vd(a,e){const t=document.createElement("script");t.src=`${dl}?l=${a}&id=${e}`,t.async=!0,document.head.appendChild(t)}function yd(a){let e=[];return Array.isArray(window[a])?e=window[a]:window[a]=e,e}async function bd(a,e,t,i,s,r){const o=i[s];try{if(o)await e[o];else{const l=(await fl(t)).find(u=>u.measurementId===s);l&&await e[l.appId]}}catch(c){Lt.error(c)}a("config",s,r)}async function Md(a,e,t,i,s){try{let r=[];if(s&&s.send_to){let o=s.send_to;Array.isArray(o)||(o=[o]);const c=await fl(t);for(const l of o){const u=c.find(d=>d.measurementId===l),h=u&&e[u.appId];if(h)r.push(h);else{r=[];break}}}r.length===0&&(r=Object.values(e)),await Promise.all(r),a("event",i,s||{})}catch(r){Lt.error(r)}}function Sd(a,e,t,i){async function s(r,o,c){try{r==="event"?await Md(a,e,t,o,c):r==="config"?await bd(a,e,t,i,o,c):r==="consent"?a("consent","update",c):a("set",o)}catch(l){Lt.error(l)}}return s}function wd(a,e,t,i,s){let r=function(...o){window[i].push(arguments)};return window[s]&&typeof window[s]=="function"&&(r=window[s]),window[s]=Sd(r,a,e,t),{gtagCore:r,wrappedGtag:window[s]}}function Td(a){const e=window.document.getElementsByTagName("script");for(const t of Object.values(e))if(t.src&&t.src.includes(dl)&&t.src.includes(a))return t;return null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ed={["already-exists"]:"A Firebase Analytics instance with the appId {$id}  already exists. Only one Firebase Analytics instance can be created for each appId.",["already-initialized"]:"initializeAnalytics() cannot be called again with different options than those it was initially called with. It can be called again with the same options to return the existing instance, or getAnalytics() can be used to get a reference to the already-intialized instance.",["already-initialized-settings"]:"Firebase Analytics has already been initialized.settings() must be called before initializing any Analytics instanceor it will have no effect.",["interop-component-reg-failed"]:"Firebase Analytics Interop Component failed to instantiate: {$reason}",["invalid-analytics-context"]:"Firebase Analytics is not supported in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}",["indexeddb-unavailable"]:"IndexedDB unavailable or restricted in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}",["fetch-throttle"]:"The config fetch request timed out while in an exponential backoff state. Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}.",["config-fetch-failed"]:"Dynamic config fetch failed: [{$httpStatus}] {$responseMessage}",["no-api-key"]:'The "apiKey" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid API key.',["no-app-id"]:'The "appId" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid app ID.'},Bt=new ks("analytics","Analytics",Ed);/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ad=30,Cd=1e3;class Ld{constructor(e={},t=Cd){this.throttleMetadata=e,this.intervalMillis=t}getThrottleMetadata(e){return this.throttleMetadata[e]}setThrottleMetadata(e,t){this.throttleMetadata[e]=t}deleteThrottleMetadata(e){delete this.throttleMetadata[e]}}const pl=new Ld;function Rd(a){return new Headers({Accept:"application/json","x-goog-api-key":a})}async function Dd(a){var e;const{appId:t,apiKey:i}=a,s={method:"GET",headers:Rd(i)},r=xd.replace("{app-id}",t),o=await fetch(r,s);if(o.status!==200&&o.status!==304){let c="";try{const l=await o.json();!((e=l.error)===null||e===void 0)&&e.message&&(c=l.error.message)}catch{}throw Bt.create("config-fetch-failed",{httpStatus:o.status,responseMessage:c})}return o.json()}async function Id(a,e=pl,t){const{appId:i,apiKey:s,measurementId:r}=a.options;if(!i)throw Bt.create("no-app-id");if(!s){if(r)return{measurementId:r,appId:i};throw Bt.create("no-api-key")}const o=e.getThrottleMetadata(i)||{backoffCount:0,throttleEndTimeMillis:Date.now()},c=new Od;return setTimeout(async()=>{c.abort()},t!==void 0?t:_d),ml({appId:i,apiKey:s,measurementId:r},o,c,e)}async function ml(a,{throttleEndTimeMillis:e,backoffCount:t},i,s=pl){var r;const{appId:o,measurementId:c}=a;try{await Pd(i,e)}catch(l){if(c)return Lt.warn(`Timed out fetching this Firebase app's measurement ID from the server. Falling back to the measurement ID ${c} provided in the "measurementId" field in the local Firebase config. [${l==null?void 0:l.message}]`),{appId:o,measurementId:c};throw l}try{const l=await Dd(a);return s.deleteThrottleMetadata(o),l}catch(l){const u=l;if(!Nd(u)){if(s.deleteThrottleMetadata(o),c)return Lt.warn(`Failed to fetch this Firebase app's measurement ID from the server. Falling back to the measurement ID ${c} provided in the "measurementId" field in the local Firebase config. [${u==null?void 0:u.message}]`),{appId:o,measurementId:c};throw l}const h=Number((r=u==null?void 0:u.customData)===null||r===void 0?void 0:r.httpStatus)===503?Da(t,s.intervalMillis,Ad):Da(t,s.intervalMillis),d={throttleEndTimeMillis:Date.now()+h,backoffCount:t+1};return s.setThrottleMetadata(o,d),Lt.debug(`Calling attemptFetch again in ${h} millis`),ml(a,d,i,s)}}function Pd(a,e){return new Promise((t,i)=>{const s=Math.max(e-Date.now(),0),r=setTimeout(t,s);a.addEventListener(()=>{clearTimeout(r),i(Bt.create("fetch-throttle",{throttleEndTimeMillis:e}))})})}function Nd(a){if(!(a instanceof Zn)||!a.customData)return!1;const e=Number(a.customData.httpStatus);return e===429||e===500||e===503||e===504}class Od{constructor(){this.listeners=[]}addEventListener(e){this.listeners.push(e)}abort(){this.listeners.forEach(e=>e())}}async function Fd(a,e,t,i,s){if(s&&s.global){a("event",t,i);return}else{const r=await e,o=Object.assign(Object.assign({},i),{send_to:r});a("event",t,o)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ud(){if(Bc())try{await kc()}catch(a){return Lt.warn(Bt.create("indexeddb-unavailable",{errorInfo:a==null?void 0:a.toString()}).message),!1}else return Lt.warn(Bt.create("indexeddb-unavailable",{errorInfo:"IndexedDB is not available in this environment."}).message),!1;return!0}async function Bd(a,e,t,i,s,r,o){var c;const l=Id(a);l.then(g=>{t[g.measurementId]=g.appId,a.options.measurementId&&g.measurementId!==a.options.measurementId&&Lt.warn(`The measurement ID in the local Firebase config (${a.options.measurementId}) does not match the measurement ID fetched from the server (${g.measurementId}). To ensure analytics events are always sent to the correct Analytics property, update the measurement ID field in the local config or remove it from the local config.`)}).catch(g=>Lt.error(g)),e.push(l);const u=Ud().then(g=>{if(g)return i.getId()}),[h,d]=await Promise.all([l,u]);Td(r)||vd(r,h.measurementId),s("js",new Date);const f=(c=o==null?void 0:o.config)!==null&&c!==void 0?c:{};return f[gd]="firebase",f.update=!0,d!=null&&(f[md]=d),s("config",h.measurementId,f),h.measurementId}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kd{constructor(e){this.app=e}_delete(){return delete $i[this.app.options.appId],Promise.resolve()}}let $i={},Ga=[];const Va={};let rr="dataLayer",zd="gtag",Ha,gl,Wa=!1;function Gd(){const a=[];if(mu()&&a.push("This is a browser extension environment."),gu()||a.push("Cookies are not available."),a.length>0){const e=a.map((i,s)=>`(${s+1}) ${i}`).join(" "),t=Bt.create("invalid-analytics-context",{errorInfo:e});Lt.warn(t.message)}}function Vd(a,e,t){Gd();const i=a.options.appId;if(!i)throw Bt.create("no-app-id");if(!a.options.apiKey)if(a.options.measurementId)Lt.warn(`The "apiKey" field is empty in the local Firebase config. This is needed to fetch the latest measurement ID for this Firebase app. Falling back to the measurement ID ${a.options.measurementId} provided in the "measurementId" field in the local Firebase config.`);else throw Bt.create("no-api-key");if($i[i]!=null)throw Bt.create("already-exists",{id:i});if(!Wa){yd(rr);const{wrappedGtag:r,gtagCore:o}=wd($i,Ga,Va,rr,zd);gl=r,Ha=o,Wa=!0}return $i[i]=Bd(a,Ga,Va,e,Ha,rr,t),new kd(a)}function Hd(a=xh()){a=zc(a);const e=zs(a,Us);return e.isInitialized()?e.getImmediate():Wd(a)}function Wd(a,e={}){const t=zs(a,Us);if(t.isInitialized()){const s=t.getImmediate();if(Ns(e,t.getOptions()))return s;throw Bt.create("already-initialized")}return t.initialize({options:e})}function jd(a,e,t,i){a=zc(a),Fd(gl,$i[a.app.options.appId],e,t,i).catch(s=>Lt.error(s))}const ja="@firebase/analytics",qa="0.9.4";function qd(){Vn(new Tn(Us,(e,{options:t})=>{const i=e.getProvider("app").getImmediate(),s=e.getProvider("installations-internal").getImmediate();return Vd(i,s,t)},"PUBLIC")),Vn(new Tn("analytics-internal",a,"PRIVATE")),Sn(ja,qa),Sn(ja,qa,"esm2017");function a(e){try{const t=e.getProvider(Us).getImmediate();return{logEvent:(i,s,r)=>jd(t,i,s,r)}}catch(t){throw Bt.create("interop-component-reg-failed",{reason:t})}}}qd();/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const da="150",ei={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},ti={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},Xd=0,Xa=1,$d=2,_l=1,Yd=2,qi=3,hn=0,Rt=1,cn=2,wn=0,_i=1,$a=2,Ya=3,Ka=4,Kd=5,mi=100,Zd=101,Jd=102,Za=103,Ja=104,Qd=200,ef=201,tf=202,nf=203,xl=204,vl=205,sf=206,rf=207,af=208,of=209,cf=210,lf=0,uf=1,hf=2,$r=3,df=4,ff=5,pf=6,mf=7,yl=0,gf=1,_f=2,un=0,xf=1,vf=2,yf=3,bf=4,Mf=5,bl=300,bi=301,Mi=302,Yr=303,Kr=304,Hs=306,Si=1e3,Ot=1001,Bs=1002,ct=1003,Zr=1004,Is=1005,St=1006,Ml=1007,jn=1008,qn=1009,Sf=1010,wf=1011,Sl=1012,Tf=1013,Un=1014,vn=1015,Ji=1016,Ef=1017,Af=1018,xi=1020,Cf=1021,Ft=1023,Lf=1024,Rf=1025,zn=1026,wi=1027,Df=1028,If=1029,Pf=1030,Nf=1031,Of=1033,ar=33776,or=33777,cr=33778,lr=33779,Qa=35840,eo=35841,to=35842,no=35843,Ff=36196,io=37492,so=37496,ro=37808,ao=37809,oo=37810,co=37811,lo=37812,uo=37813,ho=37814,fo=37815,po=37816,mo=37817,go=37818,_o=37819,xo=37820,vo=37821,ur=36492,Uf=36283,yo=36284,bo=36285,Mo=36286,Qi=2300,Ti=2301,hr=2302,So=2400,wo=2401,To=2402,Bf=2500,kf=0,wl=1,Jr=2,Xn=3e3,ze=3001,zf=3200,Gf=3201,Tl=0,Vf=1,$t="srgb",es="srgb-linear",El="display-p3",dr=7680,Hf=519,Qr=35044,Eo="300 es",ea=1035;class Jn{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const i=this._listeners;return i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const s=this._listeners[e];if(s!==void 0){const r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const i=this._listeners[e.type];if(i!==void 0){e.target=this;const s=i.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,e);e.target=null}}}const ut=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Ao=1234567;const Yi=Math.PI/180,ts=180/Math.PI;function Ht(){const a=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(ut[a&255]+ut[a>>8&255]+ut[a>>16&255]+ut[a>>24&255]+"-"+ut[e&255]+ut[e>>8&255]+"-"+ut[e>>16&15|64]+ut[e>>24&255]+"-"+ut[t&63|128]+ut[t>>8&255]+"-"+ut[t>>16&255]+ut[t>>24&255]+ut[i&255]+ut[i>>8&255]+ut[i>>16&255]+ut[i>>24&255]).toLowerCase()}function dt(a,e,t){return Math.max(e,Math.min(t,a))}function fa(a,e){return(a%e+e)%e}function Wf(a,e,t,i,s){return i+(a-e)*(s-i)/(t-e)}function jf(a,e,t){return a!==e?(t-a)/(e-a):0}function Ki(a,e,t){return(1-t)*a+t*e}function qf(a,e,t,i){return Ki(a,e,1-Math.exp(-t*i))}function Xf(a,e=1){return e-Math.abs(fa(a,e*2)-e)}function $f(a,e,t){return a<=e?0:a>=t?1:(a=(a-e)/(t-e),a*a*(3-2*a))}function Yf(a,e,t){return a<=e?0:a>=t?1:(a=(a-e)/(t-e),a*a*a*(a*(a*6-15)+10))}function Kf(a,e){return a+Math.floor(Math.random()*(e-a+1))}function Zf(a,e){return a+Math.random()*(e-a)}function Jf(a){return a*(.5-Math.random())}function Qf(a){a!==void 0&&(Ao=a);let e=Ao+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function ep(a){return a*Yi}function tp(a){return a*ts}function ta(a){return(a&a-1)===0&&a!==0}function Al(a){return Math.pow(2,Math.ceil(Math.log(a)/Math.LN2))}function Cl(a){return Math.pow(2,Math.floor(Math.log(a)/Math.LN2))}function np(a,e,t,i,s){const r=Math.cos,o=Math.sin,c=r(t/2),l=o(t/2),u=r((e+i)/2),h=o((e+i)/2),d=r((e-i)/2),f=o((e-i)/2),g=r((i-e)/2),_=o((i-e)/2);switch(s){case"XYX":a.set(c*h,l*d,l*f,c*u);break;case"YZY":a.set(l*f,c*h,l*d,c*u);break;case"ZXZ":a.set(l*d,l*f,c*h,c*u);break;case"XZX":a.set(c*h,l*_,l*g,c*u);break;case"YXY":a.set(l*g,c*h,l*_,c*u);break;case"ZYZ":a.set(l*_,l*g,c*h,c*u);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function ln(a,e){switch(e.constructor){case Float32Array:return a;case Uint16Array:return a/65535;case Uint8Array:return a/255;case Int16Array:return Math.max(a/32767,-1);case Int8Array:return Math.max(a/127,-1);default:throw new Error("Invalid component type.")}}function He(a,e){switch(e.constructor){case Float32Array:return a;case Uint16Array:return Math.round(a*65535);case Uint8Array:return Math.round(a*255);case Int16Array:return Math.round(a*32767);case Int8Array:return Math.round(a*127);default:throw new Error("Invalid component type.")}}const ip={DEG2RAD:Yi,RAD2DEG:ts,generateUUID:Ht,clamp:dt,euclideanModulo:fa,mapLinear:Wf,inverseLerp:jf,lerp:Ki,damp:qf,pingpong:Xf,smoothstep:$f,smootherstep:Yf,randInt:Kf,randFloat:Zf,randFloatSpread:Jf,seededRandom:Qf,degToRad:ep,radToDeg:tp,isPowerOfTwo:ta,ceilPowerOfTwo:Al,floorPowerOfTwo:Cl,setQuaternionFromProperEuler:np,normalize:He,denormalize:ln};class Se{constructor(e=0,t=0){Se.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,i=this.y,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6],this.y=s[1]*t+s[4]*i+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const i=Math.cos(t),s=Math.sin(t),r=this.x-e.x,o=this.y-e.y;return this.x=r*i-o*s+e.x,this.y=r*s+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class bt{constructor(){bt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1]}set(e,t,i,s,r,o,c,l,u){const h=this.elements;return h[0]=e,h[1]=s,h[2]=c,h[3]=t,h[4]=r,h[5]=l,h[6]=i,h[7]=o,h[8]=u,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,s=t.elements,r=this.elements,o=i[0],c=i[3],l=i[6],u=i[1],h=i[4],d=i[7],f=i[2],g=i[5],_=i[8],m=s[0],p=s[3],x=s[6],E=s[1],y=s[4],M=s[7],w=s[2],L=s[5],I=s[8];return r[0]=o*m+c*E+l*w,r[3]=o*p+c*y+l*L,r[6]=o*x+c*M+l*I,r[1]=u*m+h*E+d*w,r[4]=u*p+h*y+d*L,r[7]=u*x+h*M+d*I,r[2]=f*m+g*E+_*w,r[5]=f*p+g*y+_*L,r[8]=f*x+g*M+_*I,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],o=e[4],c=e[5],l=e[6],u=e[7],h=e[8];return t*o*h-t*c*u-i*r*h+i*c*l+s*r*u-s*o*l}invert(){const e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],o=e[4],c=e[5],l=e[6],u=e[7],h=e[8],d=h*o-c*u,f=c*l-h*r,g=u*r-o*l,_=t*d+i*f+s*g;if(_===0)return this.set(0,0,0,0,0,0,0,0,0);const m=1/_;return e[0]=d*m,e[1]=(s*u-h*i)*m,e[2]=(c*i-s*o)*m,e[3]=f*m,e[4]=(h*t-s*l)*m,e[5]=(s*r-c*t)*m,e[6]=g*m,e[7]=(i*l-u*t)*m,e[8]=(o*t-i*r)*m,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,s,r,o,c){const l=Math.cos(r),u=Math.sin(r);return this.set(i*l,i*u,-i*(l*o+u*c)+o+e,-s*u,s*l,-s*(-u*o+l*c)+c+t,0,0,1),this}scale(e,t){return this.premultiply(fr.makeScale(e,t)),this}rotate(e){return this.premultiply(fr.makeRotation(-e)),this}translate(e,t){return this.premultiply(fr.makeTranslation(e,t)),this}makeTranslation(e,t){return this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,i=e.elements;for(let s=0;s<9;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const fr=new bt;function Ll(a){for(let e=a.length-1;e>=0;--e)if(a[e]>=65535)return!0;return!1}function ns(a){return document.createElementNS("http://www.w3.org/1999/xhtml",a)}class Zt{constructor(e=0,t=0,i=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=s}static slerpFlat(e,t,i,s,r,o,c){let l=i[s+0],u=i[s+1],h=i[s+2],d=i[s+3];const f=r[o+0],g=r[o+1],_=r[o+2],m=r[o+3];if(c===0){e[t+0]=l,e[t+1]=u,e[t+2]=h,e[t+3]=d;return}if(c===1){e[t+0]=f,e[t+1]=g,e[t+2]=_,e[t+3]=m;return}if(d!==m||l!==f||u!==g||h!==_){let p=1-c;const x=l*f+u*g+h*_+d*m,E=x>=0?1:-1,y=1-x*x;if(y>Number.EPSILON){const w=Math.sqrt(y),L=Math.atan2(w,x*E);p=Math.sin(p*L)/w,c=Math.sin(c*L)/w}const M=c*E;if(l=l*p+f*M,u=u*p+g*M,h=h*p+_*M,d=d*p+m*M,p===1-c){const w=1/Math.sqrt(l*l+u*u+h*h+d*d);l*=w,u*=w,h*=w,d*=w}}e[t]=l,e[t+1]=u,e[t+2]=h,e[t+3]=d}static multiplyQuaternionsFlat(e,t,i,s,r,o){const c=i[s],l=i[s+1],u=i[s+2],h=i[s+3],d=r[o],f=r[o+1],g=r[o+2],_=r[o+3];return e[t]=c*_+h*d+l*g-u*f,e[t+1]=l*_+h*f+u*d-c*g,e[t+2]=u*_+h*g+c*f-l*d,e[t+3]=h*_-c*d-l*f-u*g,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,s){return this._x=e,this._y=t,this._z=i,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t){const i=e._x,s=e._y,r=e._z,o=e._order,c=Math.cos,l=Math.sin,u=c(i/2),h=c(s/2),d=c(r/2),f=l(i/2),g=l(s/2),_=l(r/2);switch(o){case"XYZ":this._x=f*h*d+u*g*_,this._y=u*g*d-f*h*_,this._z=u*h*_+f*g*d,this._w=u*h*d-f*g*_;break;case"YXZ":this._x=f*h*d+u*g*_,this._y=u*g*d-f*h*_,this._z=u*h*_-f*g*d,this._w=u*h*d+f*g*_;break;case"ZXY":this._x=f*h*d-u*g*_,this._y=u*g*d+f*h*_,this._z=u*h*_+f*g*d,this._w=u*h*d-f*g*_;break;case"ZYX":this._x=f*h*d-u*g*_,this._y=u*g*d+f*h*_,this._z=u*h*_-f*g*d,this._w=u*h*d+f*g*_;break;case"YZX":this._x=f*h*d+u*g*_,this._y=u*g*d+f*h*_,this._z=u*h*_-f*g*d,this._w=u*h*d-f*g*_;break;case"XZY":this._x=f*h*d-u*g*_,this._y=u*g*d-f*h*_,this._z=u*h*_+f*g*d,this._w=u*h*d+f*g*_;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t!==!1&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const i=t/2,s=Math.sin(i);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,i=t[0],s=t[4],r=t[8],o=t[1],c=t[5],l=t[9],u=t[2],h=t[6],d=t[10],f=i+c+d;if(f>0){const g=.5/Math.sqrt(f+1);this._w=.25/g,this._x=(h-l)*g,this._y=(r-u)*g,this._z=(o-s)*g}else if(i>c&&i>d){const g=2*Math.sqrt(1+i-c-d);this._w=(h-l)/g,this._x=.25*g,this._y=(s+o)/g,this._z=(r+u)/g}else if(c>d){const g=2*Math.sqrt(1+c-i-d);this._w=(r-u)/g,this._x=(s+o)/g,this._y=.25*g,this._z=(l+h)/g}else{const g=2*Math.sqrt(1+d-i-c);this._w=(o-s)/g,this._x=(r+u)/g,this._y=(l+h)/g,this._z=.25*g}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(dt(this.dot(e),-1,1)))}rotateTowards(e,t){const i=this.angleTo(e);if(i===0)return this;const s=Math.min(1,t/i);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const i=e._x,s=e._y,r=e._z,o=e._w,c=t._x,l=t._y,u=t._z,h=t._w;return this._x=i*h+o*c+s*u-r*l,this._y=s*h+o*l+r*c-i*u,this._z=r*h+o*u+i*l-s*c,this._w=o*h-i*c-s*l-r*u,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const i=this._x,s=this._y,r=this._z,o=this._w;let c=o*e._w+i*e._x+s*e._y+r*e._z;if(c<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,c=-c):this.copy(e),c>=1)return this._w=o,this._x=i,this._y=s,this._z=r,this;const l=1-c*c;if(l<=Number.EPSILON){const g=1-t;return this._w=g*o+t*this._w,this._x=g*i+t*this._x,this._y=g*s+t*this._y,this._z=g*r+t*this._z,this.normalize(),this._onChangeCallback(),this}const u=Math.sqrt(l),h=Math.atan2(u,c),d=Math.sin((1-t)*h)/u,f=Math.sin(t*h)/u;return this._w=o*d+this._w*f,this._x=i*d+this._x*f,this._y=s*d+this._y*f,this._z=r*d+this._z*f,this._onChangeCallback(),this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){const e=Math.random(),t=Math.sqrt(1-e),i=Math.sqrt(e),s=2*Math.PI*Math.random(),r=2*Math.PI*Math.random();return this.set(t*Math.cos(s),i*Math.sin(r),i*Math.cos(r),t*Math.sin(s))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class D{constructor(e=0,t=0,i=0){D.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Co.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Co.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6]*s,this.y=r[1]*t+r[4]*i+r[7]*s,this.z=r[2]*t+r[5]*i+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,i=this.y,s=this.z,r=e.elements,o=1/(r[3]*t+r[7]*i+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*i+r[8]*s+r[12])*o,this.y=(r[1]*t+r[5]*i+r[9]*s+r[13])*o,this.z=(r[2]*t+r[6]*i+r[10]*s+r[14])*o,this}applyQuaternion(e){const t=this.x,i=this.y,s=this.z,r=e.x,o=e.y,c=e.z,l=e.w,u=l*t+o*s-c*i,h=l*i+c*t-r*s,d=l*s+r*i-o*t,f=-r*t-o*i-c*s;return this.x=u*l+f*-r+h*-c-d*-o,this.y=h*l+f*-o+d*-r-u*-c,this.z=d*l+f*-c+u*-o-h*-r,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*i+r[8]*s,this.y=r[1]*t+r[5]*i+r[9]*s,this.z=r[2]*t+r[6]*i+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const i=e.x,s=e.y,r=e.z,o=t.x,c=t.y,l=t.z;return this.x=s*l-r*c,this.y=r*o-i*l,this.z=i*c-s*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return pr.copy(this).projectOnVector(e),this.sub(pr)}reflect(e){return this.sub(pr.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(dt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y,s=this.z-e.z;return t*t+i*i+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){const s=Math.sin(t)*e;return this.x=s*Math.sin(i),this.y=Math.cos(t)*e,this.z=s*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=(Math.random()-.5)*2,t=Math.random()*Math.PI*2,i=Math.sqrt(1-e**2);return this.x=i*Math.cos(t),this.y=i*Math.sin(t),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const pr=new D,Co=new Zt;function vi(a){return a<.04045?a*.0773993808:Math.pow(a*.9478672986+.0521327014,2.4)}function mr(a){return a<.0031308?a*12.92:1.055*Math.pow(a,.41666)-.055}const sp=new bt().fromArray([.8224621,.0331941,.0170827,.177538,.9668058,.0723974,-1e-7,1e-7,.9105199]),rp=new bt().fromArray([1.2249401,-.0420569,-.0196376,-.2249404,1.0420571,-.0786361,1e-7,0,1.0982735]),yn=new D;function ap(a){return a.convertSRGBToLinear(),yn.set(a.r,a.g,a.b).applyMatrix3(rp),a.setRGB(yn.x,yn.y,yn.z)}function op(a){return yn.set(a.r,a.g,a.b).applyMatrix3(sp),a.setRGB(yn.x,yn.y,yn.z).convertLinearToSRGB()}const cp={[es]:a=>a,[$t]:a=>a.convertSRGBToLinear(),[El]:ap},lp={[es]:a=>a,[$t]:a=>a.convertLinearToSRGB(),[El]:op},_t={enabled:!1,get legacyMode(){return console.warn("THREE.ColorManagement: .legacyMode=false renamed to .enabled=true in r150."),!this.enabled},set legacyMode(a){console.warn("THREE.ColorManagement: .legacyMode=false renamed to .enabled=true in r150."),this.enabled=!a},get workingColorSpace(){return es},set workingColorSpace(a){console.warn("THREE.ColorManagement: .workingColorSpace is readonly.")},convert:function(a,e,t){if(this.enabled===!1||e===t||!e||!t)return a;const i=cp[e],s=lp[t];if(i===void 0||s===void 0)throw new Error(`Unsupported color space conversion, "${e}" to "${t}".`);return s(i(a))},fromWorkingColorSpace:function(a,e){return this.convert(a,this.workingColorSpace,e)},toWorkingColorSpace:function(a,e){return this.convert(a,e,this.workingColorSpace)}};let ni;class Rl{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{ni===void 0&&(ni=ns("canvas")),ni.width=e.width,ni.height=e.height;const i=ni.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),t=ni}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=ns("canvas");t.width=e.width,t.height=e.height;const i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const s=i.getImageData(0,0,e.width,e.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=vi(r[o]/255)*255;return i.putImageData(s,0,0),t}else if(e.data){const t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(vi(t[i]/255)*255):t[i]=vi(t[i]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}class Dl{constructor(e=null){this.isSource=!0,this.uuid=Ht(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,c=s.length;o<c;o++)s[o].isDataTexture?r.push(gr(s[o].image)):r.push(gr(s[o]))}else r=gr(s);i.url=r}return t||(e.images[this.uuid]=i),i}}function gr(a){return typeof HTMLImageElement<"u"&&a instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&a instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&a instanceof ImageBitmap?Rl.getDataURL(a):a.data?{data:Array.from(a.data),width:a.width,height:a.height,type:a.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let up=0;class lt extends Jn{constructor(e=lt.DEFAULT_IMAGE,t=lt.DEFAULT_MAPPING,i=Ot,s=Ot,r=St,o=jn,c=Ft,l=qn,u=lt.DEFAULT_ANISOTROPY,h=Xn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:up++}),this.uuid=Ht(),this.name="",this.source=new Dl(e),this.mipmaps=[],this.mapping=t,this.wrapS=i,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=u,this.format=c,this.internalFormat=null,this.type=l,this.offset=new Se(0,0),this.repeat=new Se(1,1),this.center=new Se(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new bt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.encoding=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.encoding=e.encoding,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.5,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,encoding:this.encoding,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==bl)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Si:e.x=e.x-Math.floor(e.x);break;case Ot:e.x=e.x<0?0:1;break;case Bs:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Si:e.y=e.y-Math.floor(e.y);break;case Ot:e.y=e.y<0?0:1;break;case Bs:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}}lt.DEFAULT_IMAGE=null;lt.DEFAULT_MAPPING=bl;lt.DEFAULT_ANISOTROPY=1;class We{constructor(e=0,t=0,i=0,s=1){We.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,s){return this.x=e,this.y=t,this.z=i,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,i=this.y,s=this.z,r=this.w,o=e.elements;return this.x=o[0]*t+o[4]*i+o[8]*s+o[12]*r,this.y=o[1]*t+o[5]*i+o[9]*s+o[13]*r,this.z=o[2]*t+o[6]*i+o[10]*s+o[14]*r,this.w=o[3]*t+o[7]*i+o[11]*s+o[15]*r,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,s,r;const l=e.elements,u=l[0],h=l[4],d=l[8],f=l[1],g=l[5],_=l[9],m=l[2],p=l[6],x=l[10];if(Math.abs(h-f)<.01&&Math.abs(d-m)<.01&&Math.abs(_-p)<.01){if(Math.abs(h+f)<.1&&Math.abs(d+m)<.1&&Math.abs(_+p)<.1&&Math.abs(u+g+x-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const y=(u+1)/2,M=(g+1)/2,w=(x+1)/2,L=(h+f)/4,I=(d+m)/4,b=(_+p)/4;return y>M&&y>w?y<.01?(i=0,s=.707106781,r=.707106781):(i=Math.sqrt(y),s=L/i,r=I/i):M>w?M<.01?(i=.707106781,s=0,r=.707106781):(s=Math.sqrt(M),i=L/s,r=b/s):w<.01?(i=.707106781,s=.707106781,r=0):(r=Math.sqrt(w),i=I/r,s=b/r),this.set(i,s,r,t),this}let E=Math.sqrt((p-_)*(p-_)+(d-m)*(d-m)+(f-h)*(f-h));return Math.abs(E)<.001&&(E=1),this.x=(p-_)/E,this.y=(d-m)/E,this.z=(f-h)/E,this.w=Math.acos((u+g+x-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this.w=this.w<0?Math.ceil(this.w):Math.floor(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class $n extends Jn{constructor(e=1,t=1,i={}){super(),this.isWebGLRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new We(0,0,e,t),this.scissorTest=!1,this.viewport=new We(0,0,e,t);const s={width:e,height:t,depth:1};this.texture=new lt(s,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.encoding),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=i.generateMipmaps!==void 0?i.generateMipmaps:!1,this.texture.internalFormat=i.internalFormat!==void 0?i.internalFormat:null,this.texture.minFilter=i.minFilter!==void 0?i.minFilter:St,this.depthBuffer=i.depthBuffer!==void 0?i.depthBuffer:!0,this.stencilBuffer=i.stencilBuffer!==void 0?i.stencilBuffer:!1,this.depthTexture=i.depthTexture!==void 0?i.depthTexture:null,this.samples=i.samples!==void 0?i.samples:0}setSize(e,t,i=1){(this.width!==e||this.height!==t||this.depth!==i)&&(this.width=e,this.height=t,this.depth=i,this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=i,this.dispose()),this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new Dl(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Il extends lt{constructor(e=null,t=1,i=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=ct,this.minFilter=ct,this.wrapR=Ot,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class hp extends lt{constructor(e=null,t=1,i=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=ct,this.minFilter=ct,this.wrapR=Ot,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Ci{constructor(e=new D(1/0,1/0,1/0),t=new D(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){let t=1/0,i=1/0,s=1/0,r=-1/0,o=-1/0,c=-1/0;for(let l=0,u=e.length;l<u;l+=3){const h=e[l],d=e[l+1],f=e[l+2];h<t&&(t=h),d<i&&(i=d),f<s&&(s=f),h>r&&(r=h),d>o&&(o=d),f>c&&(c=f)}return this.min.set(t,i,s),this.max.set(r,o,c),this}setFromBufferAttribute(e){let t=1/0,i=1/0,s=1/0,r=-1/0,o=-1/0,c=-1/0;for(let l=0,u=e.count;l<u;l++){const h=e.getX(l),d=e.getY(l),f=e.getZ(l);h<t&&(t=h),d<i&&(i=d),f<s&&(s=f),h>r&&(r=h),d>o&&(o=d),f>c&&(c=f)}return this.min.set(t,i,s),this.max.set(r,o,c),this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const i=Ln.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0)if(t&&i.attributes!=null&&i.attributes.position!==void 0){const r=i.attributes.position;for(let o=0,c=r.count;o<c;o++)Ln.fromBufferAttribute(r,o).applyMatrix4(e.matrixWorld),this.expandByPoint(Ln)}else i.boundingBox===null&&i.computeBoundingBox(),_r.copy(i.boundingBox),_r.applyMatrix4(e.matrixWorld),this.union(_r);const s=e.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,Ln),Ln.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Oi),ls.subVectors(this.max,Oi),ii.subVectors(e.a,Oi),si.subVectors(e.b,Oi),ri.subVectors(e.c,Oi),dn.subVectors(si,ii),fn.subVectors(ri,si),Rn.subVectors(ii,ri);let t=[0,-dn.z,dn.y,0,-fn.z,fn.y,0,-Rn.z,Rn.y,dn.z,0,-dn.x,fn.z,0,-fn.x,Rn.z,0,-Rn.x,-dn.y,dn.x,0,-fn.y,fn.x,0,-Rn.y,Rn.x,0];return!xr(t,ii,si,ri,ls)||(t=[1,0,0,0,1,0,0,0,1],!xr(t,ii,si,ri,ls))?!1:(us.crossVectors(dn,fn),t=[us.x,us.y,us.z],xr(t,ii,si,ri,ls))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Ln).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Ln).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(en[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),en[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),en[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),en[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),en[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),en[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),en[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),en[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(en),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const en=[new D,new D,new D,new D,new D,new D,new D,new D],Ln=new D,_r=new Ci,ii=new D,si=new D,ri=new D,dn=new D,fn=new D,Rn=new D,Oi=new D,ls=new D,us=new D,Dn=new D;function xr(a,e,t,i,s){for(let r=0,o=a.length-3;r<=o;r+=3){Dn.fromArray(a,r);const c=s.x*Math.abs(Dn.x)+s.y*Math.abs(Dn.y)+s.z*Math.abs(Dn.z),l=e.dot(Dn),u=t.dot(Dn),h=i.dot(Dn);if(Math.max(-Math.max(l,u,h),Math.min(l,u,h))>c)return!1}return!0}const dp=new Ci,Fi=new D,vr=new D;class Li{constructor(e=new D,t=-1){this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const i=this.center;t!==void 0?i.copy(t):dp.setFromPoints(e).getCenter(i);let s=0;for(let r=0,o=e.length;r<o;r++)s=Math.max(s,i.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Fi.subVectors(e,this.center);const t=Fi.lengthSq();if(t>this.radius*this.radius){const i=Math.sqrt(t),s=(i-this.radius)*.5;this.center.addScaledVector(Fi,s/i),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(vr.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Fi.copy(e.center).add(vr)),this.expandByPoint(Fi.copy(e.center).sub(vr))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const tn=new D,yr=new D,hs=new D,pn=new D,br=new D,ds=new D,Mr=new D;class pa{constructor(e=new D,t=new D(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,tn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=tn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(tn.copy(this.origin).addScaledVector(this.direction,t),tn.distanceToSquared(e))}distanceSqToSegment(e,t,i,s){yr.copy(e).add(t).multiplyScalar(.5),hs.copy(t).sub(e).normalize(),pn.copy(this.origin).sub(yr);const r=e.distanceTo(t)*.5,o=-this.direction.dot(hs),c=pn.dot(this.direction),l=-pn.dot(hs),u=pn.lengthSq(),h=Math.abs(1-o*o);let d,f,g,_;if(h>0)if(d=o*l-c,f=o*c-l,_=r*h,d>=0)if(f>=-_)if(f<=_){const m=1/h;d*=m,f*=m,g=d*(d+o*f+2*c)+f*(o*d+f+2*l)+u}else f=r,d=Math.max(0,-(o*f+c)),g=-d*d+f*(f+2*l)+u;else f=-r,d=Math.max(0,-(o*f+c)),g=-d*d+f*(f+2*l)+u;else f<=-_?(d=Math.max(0,-(-o*r+c)),f=d>0?-r:Math.min(Math.max(-r,-l),r),g=-d*d+f*(f+2*l)+u):f<=_?(d=0,f=Math.min(Math.max(-r,-l),r),g=f*(f+2*l)+u):(d=Math.max(0,-(o*r+c)),f=d>0?r:Math.min(Math.max(-r,-l),r),g=-d*d+f*(f+2*l)+u);else f=o>0?-r:r,d=Math.max(0,-(o*f+c)),g=-d*d+f*(f+2*l)+u;return i&&i.copy(this.origin).addScaledVector(this.direction,d),s&&s.copy(yr).addScaledVector(hs,f),g}intersectSphere(e,t){tn.subVectors(e.center,this.origin);const i=tn.dot(this.direction),s=tn.dot(tn)-i*i,r=e.radius*e.radius;if(s>r)return null;const o=Math.sqrt(r-s),c=i-o,l=i+o;return l<0?null:c<0?this.at(l,t):this.at(c,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){const i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,s,r,o,c,l;const u=1/this.direction.x,h=1/this.direction.y,d=1/this.direction.z,f=this.origin;return u>=0?(i=(e.min.x-f.x)*u,s=(e.max.x-f.x)*u):(i=(e.max.x-f.x)*u,s=(e.min.x-f.x)*u),h>=0?(r=(e.min.y-f.y)*h,o=(e.max.y-f.y)*h):(r=(e.max.y-f.y)*h,o=(e.min.y-f.y)*h),i>o||r>s||((r>i||isNaN(i))&&(i=r),(o<s||isNaN(s))&&(s=o),d>=0?(c=(e.min.z-f.z)*d,l=(e.max.z-f.z)*d):(c=(e.max.z-f.z)*d,l=(e.min.z-f.z)*d),i>l||c>s)||((c>i||i!==i)&&(i=c),(l<s||s!==s)&&(s=l),s<0)?null:this.at(i>=0?i:s,t)}intersectsBox(e){return this.intersectBox(e,tn)!==null}intersectTriangle(e,t,i,s,r){br.subVectors(t,e),ds.subVectors(i,e),Mr.crossVectors(br,ds);let o=this.direction.dot(Mr),c;if(o>0){if(s)return null;c=1}else if(o<0)c=-1,o=-o;else return null;pn.subVectors(this.origin,e);const l=c*this.direction.dot(ds.crossVectors(pn,ds));if(l<0)return null;const u=c*this.direction.dot(br.cross(pn));if(u<0||l+u>o)return null;const h=-c*pn.dot(Mr);return h<0?null:this.at(h/o,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Re{constructor(){Re.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1]}set(e,t,i,s,r,o,c,l,u,h,d,f,g,_,m,p){const x=this.elements;return x[0]=e,x[4]=t,x[8]=i,x[12]=s,x[1]=r,x[5]=o,x[9]=c,x[13]=l,x[2]=u,x[6]=h,x[10]=d,x[14]=f,x[3]=g,x[7]=_,x[11]=m,x[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Re().fromArray(this.elements)}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){const t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,i=e.elements,s=1/ai.setFromMatrixColumn(e,0).length(),r=1/ai.setFromMatrixColumn(e,1).length(),o=1/ai.setFromMatrixColumn(e,2).length();return t[0]=i[0]*s,t[1]=i[1]*s,t[2]=i[2]*s,t[3]=0,t[4]=i[4]*r,t[5]=i[5]*r,t[6]=i[6]*r,t[7]=0,t[8]=i[8]*o,t[9]=i[9]*o,t[10]=i[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,i=e.x,s=e.y,r=e.z,o=Math.cos(i),c=Math.sin(i),l=Math.cos(s),u=Math.sin(s),h=Math.cos(r),d=Math.sin(r);if(e.order==="XYZ"){const f=o*h,g=o*d,_=c*h,m=c*d;t[0]=l*h,t[4]=-l*d,t[8]=u,t[1]=g+_*u,t[5]=f-m*u,t[9]=-c*l,t[2]=m-f*u,t[6]=_+g*u,t[10]=o*l}else if(e.order==="YXZ"){const f=l*h,g=l*d,_=u*h,m=u*d;t[0]=f+m*c,t[4]=_*c-g,t[8]=o*u,t[1]=o*d,t[5]=o*h,t[9]=-c,t[2]=g*c-_,t[6]=m+f*c,t[10]=o*l}else if(e.order==="ZXY"){const f=l*h,g=l*d,_=u*h,m=u*d;t[0]=f-m*c,t[4]=-o*d,t[8]=_+g*c,t[1]=g+_*c,t[5]=o*h,t[9]=m-f*c,t[2]=-o*u,t[6]=c,t[10]=o*l}else if(e.order==="ZYX"){const f=o*h,g=o*d,_=c*h,m=c*d;t[0]=l*h,t[4]=_*u-g,t[8]=f*u+m,t[1]=l*d,t[5]=m*u+f,t[9]=g*u-_,t[2]=-u,t[6]=c*l,t[10]=o*l}else if(e.order==="YZX"){const f=o*l,g=o*u,_=c*l,m=c*u;t[0]=l*h,t[4]=m-f*d,t[8]=_*d+g,t[1]=d,t[5]=o*h,t[9]=-c*h,t[2]=-u*h,t[6]=g*d+_,t[10]=f-m*d}else if(e.order==="XZY"){const f=o*l,g=o*u,_=c*l,m=c*u;t[0]=l*h,t[4]=-d,t[8]=u*h,t[1]=f*d+m,t[5]=o*h,t[9]=g*d-_,t[2]=_*d-g,t[6]=c*h,t[10]=m*d+f}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(fp,e,pp)}lookAt(e,t,i){const s=this.elements;return At.subVectors(e,t),At.lengthSq()===0&&(At.z=1),At.normalize(),mn.crossVectors(i,At),mn.lengthSq()===0&&(Math.abs(i.z)===1?At.x+=1e-4:At.z+=1e-4,At.normalize(),mn.crossVectors(i,At)),mn.normalize(),fs.crossVectors(At,mn),s[0]=mn.x,s[4]=fs.x,s[8]=At.x,s[1]=mn.y,s[5]=fs.y,s[9]=At.y,s[2]=mn.z,s[6]=fs.z,s[10]=At.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,s=t.elements,r=this.elements,o=i[0],c=i[4],l=i[8],u=i[12],h=i[1],d=i[5],f=i[9],g=i[13],_=i[2],m=i[6],p=i[10],x=i[14],E=i[3],y=i[7],M=i[11],w=i[15],L=s[0],I=s[4],b=s[8],A=s[12],F=s[1],$=s[5],X=s[9],U=s[13],P=s[2],G=s[6],Y=s[10],Q=s[14],q=s[3],ee=s[7],K=s[11],ve=s[15];return r[0]=o*L+c*F+l*P+u*q,r[4]=o*I+c*$+l*G+u*ee,r[8]=o*b+c*X+l*Y+u*K,r[12]=o*A+c*U+l*Q+u*ve,r[1]=h*L+d*F+f*P+g*q,r[5]=h*I+d*$+f*G+g*ee,r[9]=h*b+d*X+f*Y+g*K,r[13]=h*A+d*U+f*Q+g*ve,r[2]=_*L+m*F+p*P+x*q,r[6]=_*I+m*$+p*G+x*ee,r[10]=_*b+m*X+p*Y+x*K,r[14]=_*A+m*U+p*Q+x*ve,r[3]=E*L+y*F+M*P+w*q,r[7]=E*I+y*$+M*G+w*ee,r[11]=E*b+y*X+M*Y+w*K,r[15]=E*A+y*U+M*Q+w*ve,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[4],s=e[8],r=e[12],o=e[1],c=e[5],l=e[9],u=e[13],h=e[2],d=e[6],f=e[10],g=e[14],_=e[3],m=e[7],p=e[11],x=e[15];return _*(+r*l*d-s*u*d-r*c*f+i*u*f+s*c*g-i*l*g)+m*(+t*l*g-t*u*f+r*o*f-s*o*g+s*u*h-r*l*h)+p*(+t*u*d-t*c*g-r*o*d+i*o*g+r*c*h-i*u*h)+x*(-s*c*h-t*l*d+t*c*f+s*o*d-i*o*f+i*l*h)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){const s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=i),this}invert(){const e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],o=e[4],c=e[5],l=e[6],u=e[7],h=e[8],d=e[9],f=e[10],g=e[11],_=e[12],m=e[13],p=e[14],x=e[15],E=d*p*u-m*f*u+m*l*g-c*p*g-d*l*x+c*f*x,y=_*f*u-h*p*u-_*l*g+o*p*g+h*l*x-o*f*x,M=h*m*u-_*d*u+_*c*g-o*m*g-h*c*x+o*d*x,w=_*d*l-h*m*l-_*c*f+o*m*f+h*c*p-o*d*p,L=t*E+i*y+s*M+r*w;if(L===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const I=1/L;return e[0]=E*I,e[1]=(m*f*r-d*p*r-m*s*g+i*p*g+d*s*x-i*f*x)*I,e[2]=(c*p*r-m*l*r+m*s*u-i*p*u-c*s*x+i*l*x)*I,e[3]=(d*l*r-c*f*r-d*s*u+i*f*u+c*s*g-i*l*g)*I,e[4]=y*I,e[5]=(h*p*r-_*f*r+_*s*g-t*p*g-h*s*x+t*f*x)*I,e[6]=(_*l*r-o*p*r-_*s*u+t*p*u+o*s*x-t*l*x)*I,e[7]=(o*f*r-h*l*r+h*s*u-t*f*u-o*s*g+t*l*g)*I,e[8]=M*I,e[9]=(_*d*r-h*m*r-_*i*g+t*m*g+h*i*x-t*d*x)*I,e[10]=(o*m*r-_*c*r+_*i*u-t*m*u-o*i*x+t*c*x)*I,e[11]=(h*c*r-o*d*r-h*i*u+t*d*u+o*i*g-t*c*g)*I,e[12]=w*I,e[13]=(h*m*s-_*d*s+_*i*f-t*m*f-h*i*p+t*d*p)*I,e[14]=(_*c*s-o*m*s-_*i*l+t*m*l+o*i*p-t*c*p)*I,e[15]=(o*d*s-h*c*s+h*i*l-t*d*l-o*i*f+t*c*f)*I,this}scale(e){const t=this.elements,i=e.x,s=e.y,r=e.z;return t[0]*=i,t[4]*=s,t[8]*=r,t[1]*=i,t[5]*=s,t[9]*=r,t[2]*=i,t[6]*=s,t[10]*=r,t[3]*=i,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,s))}makeTranslation(e,t,i){return this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const i=Math.cos(t),s=Math.sin(t),r=1-i,o=e.x,c=e.y,l=e.z,u=r*o,h=r*c;return this.set(u*o+i,u*c-s*l,u*l+s*c,0,u*c+s*l,h*c+i,h*l-s*o,0,u*l-s*c,h*l+s*o,r*l*l+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,s,r,o){return this.set(1,i,r,0,e,1,o,0,t,s,1,0,0,0,0,1),this}compose(e,t,i){const s=this.elements,r=t._x,o=t._y,c=t._z,l=t._w,u=r+r,h=o+o,d=c+c,f=r*u,g=r*h,_=r*d,m=o*h,p=o*d,x=c*d,E=l*u,y=l*h,M=l*d,w=i.x,L=i.y,I=i.z;return s[0]=(1-(m+x))*w,s[1]=(g+M)*w,s[2]=(_-y)*w,s[3]=0,s[4]=(g-M)*L,s[5]=(1-(f+x))*L,s[6]=(p+E)*L,s[7]=0,s[8]=(_+y)*I,s[9]=(p-E)*I,s[10]=(1-(f+m))*I,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,i){const s=this.elements;let r=ai.set(s[0],s[1],s[2]).length();const o=ai.set(s[4],s[5],s[6]).length(),c=ai.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),e.x=s[12],e.y=s[13],e.z=s[14],zt.copy(this);const u=1/r,h=1/o,d=1/c;return zt.elements[0]*=u,zt.elements[1]*=u,zt.elements[2]*=u,zt.elements[4]*=h,zt.elements[5]*=h,zt.elements[6]*=h,zt.elements[8]*=d,zt.elements[9]*=d,zt.elements[10]*=d,t.setFromRotationMatrix(zt),i.x=r,i.y=o,i.z=c,this}makePerspective(e,t,i,s,r,o){const c=this.elements,l=2*r/(t-e),u=2*r/(i-s),h=(t+e)/(t-e),d=(i+s)/(i-s),f=-(o+r)/(o-r),g=-2*o*r/(o-r);return c[0]=l,c[4]=0,c[8]=h,c[12]=0,c[1]=0,c[5]=u,c[9]=d,c[13]=0,c[2]=0,c[6]=0,c[10]=f,c[14]=g,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,i,s,r,o){const c=this.elements,l=1/(t-e),u=1/(i-s),h=1/(o-r),d=(t+e)*l,f=(i+s)*u,g=(o+r)*h;return c[0]=2*l,c[4]=0,c[8]=0,c[12]=-d,c[1]=0,c[5]=2*u,c[9]=0,c[13]=-f,c[2]=0,c[6]=0,c[10]=-2*h,c[14]=-g,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){const t=this.elements,i=e.elements;for(let s=0;s<16;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}}const ai=new D,zt=new Re,fp=new D(0,0,0),pp=new D(1,1,1),mn=new D,fs=new D,At=new D,Lo=new Re,Ro=new Zt;class Ws{constructor(e=0,t=0,i=0,s=Ws.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,s=this._order){return this._x=e,this._y=t,this._z=i,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){const s=e.elements,r=s[0],o=s[4],c=s[8],l=s[1],u=s[5],h=s[9],d=s[2],f=s[6],g=s[10];switch(t){case"XYZ":this._y=Math.asin(dt(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-h,g),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(f,u),this._z=0);break;case"YXZ":this._x=Math.asin(-dt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(c,g),this._z=Math.atan2(l,u)):(this._y=Math.atan2(-d,r),this._z=0);break;case"ZXY":this._x=Math.asin(dt(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-d,g),this._z=Math.atan2(-o,u)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-dt(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(f,g),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,u));break;case"YZX":this._z=Math.asin(dt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,u),this._y=Math.atan2(-d,r)):(this._x=0,this._y=Math.atan2(c,g));break;case"XZY":this._z=Math.asin(-dt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(f,u),this._y=Math.atan2(c,r)):(this._x=Math.atan2(-h,g),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return Lo.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Lo,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Ro.setFromEuler(this),this.setFromQuaternion(Ro,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Ws.DEFAULT_ORDER="XYZ";class Pl{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let mp=0;const Do=new D,oi=new Zt,nn=new Re,ps=new D,Ui=new D,gp=new D,_p=new Zt,Io=new D(1,0,0),Po=new D(0,1,0),No=new D(0,0,1),xp={type:"added"},Oo={type:"removed"};class Ye extends Jn{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:mp++}),this.uuid=Ht(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Ye.DEFAULT_UP.clone();const e=new D,t=new Ws,i=new Zt,s=new D(1,1,1);function r(){i.setFromEuler(t,!1)}function o(){t.setFromQuaternion(i,void 0,!1)}t._onChange(r),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new Re},normalMatrix:{value:new bt}}),this.matrix=new Re,this.matrixWorld=new Re,this.matrixAutoUpdate=Ye.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.matrixWorldAutoUpdate=Ye.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.layers=new Pl,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return oi.setFromAxisAngle(e,t),this.quaternion.multiply(oi),this}rotateOnWorldAxis(e,t){return oi.setFromAxisAngle(e,t),this.quaternion.premultiply(oi),this}rotateX(e){return this.rotateOnAxis(Io,e)}rotateY(e){return this.rotateOnAxis(Po,e)}rotateZ(e){return this.rotateOnAxis(No,e)}translateOnAxis(e,t){return Do.copy(e).applyQuaternion(this.quaternion),this.position.add(Do.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Io,e)}translateY(e){return this.translateOnAxis(Po,e)}translateZ(e){return this.translateOnAxis(No,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(nn.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?ps.copy(e):ps.set(e,t,i);const s=this.parent;this.updateWorldMatrix(!0,!1),Ui.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?nn.lookAt(Ui,ps,this.up):nn.lookAt(ps,Ui,this.up),this.quaternion.setFromRotationMatrix(nn),s&&(nn.extractRotation(s.matrixWorld),oi.setFromRotationMatrix(nn),this.quaternion.premultiply(oi.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(xp)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Oo)),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){for(let e=0;e<this.children.length;e++){const t=this.children[e];t.parent=null,t.dispatchEvent(Oo)}return this.children.length=0,this}attach(e){return this.updateWorldMatrix(!0,!1),nn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),nn.multiply(e.parent.matrixWorld)),e.applyMatrix4(nn),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,s=this.children.length;i<s;i++){const o=this.children[i].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t){let i=[];this[e]===t&&i.push(this);for(let s=0,r=this.children.length;s<r;s++){const o=this.children[s].getObjectsByProperty(e,t);o.length>0&&(i=i.concat(o))}return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ui,e,gp),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ui,_p,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let i=0,s=t.length;i<s;i++){const r=t[i];(r.matrixWorldAutoUpdate===!0||e===!0)&&r.updateMatrixWorld(e)}}updateWorldMatrix(e,t){const i=this.parent;if(e===!0&&i!==null&&i.matrixWorldAutoUpdate===!0&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){const s=this.children;for(let r=0,o=s.length;r<o;r++){const c=s[r];c.matrixWorldAutoUpdate===!0&&c.updateWorldMatrix(!1,!0)}}}toJSON(e){const t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.5,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON()));function r(c,l){return c[l.uuid]===void 0&&(c[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);const c=this.geometry.parameters;if(c!==void 0&&c.shapes!==void 0){const l=c.shapes;if(Array.isArray(l))for(let u=0,h=l.length;u<h;u++){const d=l[u];r(e.shapes,d)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const c=[];for(let l=0,u=this.material.length;l<u;l++)c.push(r(e.materials,this.material[l]));s.material=c}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let c=0;c<this.children.length;c++)s.children.push(this.children[c].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let c=0;c<this.animations.length;c++){const l=this.animations[c];s.animations.push(r(e.animations,l))}}if(t){const c=o(e.geometries),l=o(e.materials),u=o(e.textures),h=o(e.images),d=o(e.shapes),f=o(e.skeletons),g=o(e.animations),_=o(e.nodes);c.length>0&&(i.geometries=c),l.length>0&&(i.materials=l),u.length>0&&(i.textures=u),h.length>0&&(i.images=h),d.length>0&&(i.shapes=d),f.length>0&&(i.skeletons=f),g.length>0&&(i.animations=g),_.length>0&&(i.nodes=_)}return i.object=s,i;function o(c){const l=[];for(const u in c){const h=c[u];delete h.metadata,l.push(h)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){const s=e.children[i];this.add(s.clone())}return this}}Ye.DEFAULT_UP=new D(0,1,0);Ye.DEFAULT_MATRIX_AUTO_UPDATE=!0;Ye.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Gt=new D,sn=new D,Sr=new D,rn=new D,ci=new D,li=new D,Fo=new D,wr=new D,Tr=new D,Er=new D;class on{constructor(e=new D,t=new D,i=new D){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,s){s.subVectors(i,t),Gt.subVectors(e,t),s.cross(Gt);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,i,s,r){Gt.subVectors(s,t),sn.subVectors(i,t),Sr.subVectors(e,t);const o=Gt.dot(Gt),c=Gt.dot(sn),l=Gt.dot(Sr),u=sn.dot(sn),h=sn.dot(Sr),d=o*u-c*c;if(d===0)return r.set(-2,-1,-1);const f=1/d,g=(u*l-c*h)*f,_=(o*h-c*l)*f;return r.set(1-g-_,_,g)}static containsPoint(e,t,i,s){return this.getBarycoord(e,t,i,s,rn),rn.x>=0&&rn.y>=0&&rn.x+rn.y<=1}static getUV(e,t,i,s,r,o,c,l){return this.getBarycoord(e,t,i,s,rn),l.set(0,0),l.addScaledVector(r,rn.x),l.addScaledVector(o,rn.y),l.addScaledVector(c,rn.z),l}static isFrontFacing(e,t,i,s){return Gt.subVectors(i,t),sn.subVectors(e,t),Gt.cross(sn).dot(s)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,s){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,i,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Gt.subVectors(this.c,this.b),sn.subVectors(this.a,this.b),Gt.cross(sn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return on.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return on.getBarycoord(e,this.a,this.b,this.c,t)}getUV(e,t,i,s,r){return on.getUV(e,this.a,this.b,this.c,t,i,s,r)}containsPoint(e){return on.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return on.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const i=this.a,s=this.b,r=this.c;let o,c;ci.subVectors(s,i),li.subVectors(r,i),wr.subVectors(e,i);const l=ci.dot(wr),u=li.dot(wr);if(l<=0&&u<=0)return t.copy(i);Tr.subVectors(e,s);const h=ci.dot(Tr),d=li.dot(Tr);if(h>=0&&d<=h)return t.copy(s);const f=l*d-h*u;if(f<=0&&l>=0&&h<=0)return o=l/(l-h),t.copy(i).addScaledVector(ci,o);Er.subVectors(e,r);const g=ci.dot(Er),_=li.dot(Er);if(_>=0&&g<=_)return t.copy(r);const m=g*u-l*_;if(m<=0&&u>=0&&_<=0)return c=u/(u-_),t.copy(i).addScaledVector(li,c);const p=h*_-g*d;if(p<=0&&d-h>=0&&g-_>=0)return Fo.subVectors(r,s),c=(d-h)/(d-h+(g-_)),t.copy(s).addScaledVector(Fo,c);const x=1/(p+m+f);return o=m*x,c=f*x,t.copy(i).addScaledVector(ci,o).addScaledVector(li,c)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}let vp=0;class Kt extends Jn{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:vp++}),this.uuid=Ht(),this.name="",this.type="Material",this.blending=_i,this.side=hn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.blendSrc=xl,this.blendDst=vl,this.blendEquation=mi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.depthFunc=$r,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Hf,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=dr,this.stencilZFail=dr,this.stencilZPass=dr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const i=e[t];if(i===void 0){console.warn("THREE.Material: '"+t+"' parameter is undefined.");continue}const s=this[t];if(s===void 0){console.warn("THREE."+this.type+": '"+t+"' is not a property of this material.");continue}s&&s.isColor?s.set(i):s&&s.isVector3&&i&&i.isVector3?s.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const i={metadata:{version:4.5,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==_i&&(i.blending=this.blending),this.side!==hn&&(i.side=this.side),this.vertexColors&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=this.transparent),i.depthFunc=this.depthFunc,i.depthTest=this.depthTest,i.depthWrite=this.depthWrite,i.colorWrite=this.colorWrite,i.stencilWrite=this.stencilWrite,i.stencilWriteMask=this.stencilWriteMask,i.stencilFunc=this.stencilFunc,i.stencilRef=this.stencilRef,i.stencilFuncMask=this.stencilFuncMask,i.stencilFail=this.stencilFail,i.stencilZFail=this.stencilZFail,i.stencilZPass=this.stencilZPass,this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaToCoverage===!0&&(i.alphaToCoverage=this.alphaToCoverage),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=this.premultipliedAlpha),this.forceSinglePass===!0&&(i.forceSinglePass=this.forceSinglePass),this.wireframe===!0&&(i.wireframe=this.wireframe),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=this.flatShading),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function s(r){const o=[];for(const c in r){const l=r[c];delete l.metadata,o.push(l)}return o}if(t){const r=s(e.textures),o=s(e.images);r.length>0&&(i.textures=r),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let i=null;if(t!==null){const s=t.length;i=new Array(s);for(let r=0;r!==s;++r)i[r]=t[r].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}const Nl={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Vt={h:0,s:0,l:0},ms={h:0,s:0,l:0};function Ar(a,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?a+(e-a)*6*t:t<1/2?e:t<2/3?a+(e-a)*6*(2/3-t):a}class we{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,t===void 0&&i===void 0?this.set(e):this.setRGB(e,t,i)}set(e){return e&&e.isColor?this.copy(e):typeof e=="number"?this.setHex(e):typeof e=="string"&&this.setStyle(e),this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=$t){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,_t.toWorkingColorSpace(this,t),this}setRGB(e,t,i,s=_t.workingColorSpace){return this.r=e,this.g=t,this.b=i,_t.toWorkingColorSpace(this,s),this}setHSL(e,t,i,s=_t.workingColorSpace){if(e=fa(e,1),t=dt(t,0,1),i=dt(i,0,1),t===0)this.r=this.g=this.b=i;else{const r=i<=.5?i*(1+t):i+t-i*t,o=2*i-r;this.r=Ar(o,r,e+1/3),this.g=Ar(o,r,e),this.b=Ar(o,r,e-1/3)}return _t.toWorkingColorSpace(this,s),this}setStyle(e,t=$t){function i(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r;const o=s[1],c=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(c))return this.r=Math.min(255,parseInt(r[1],10))/255,this.g=Math.min(255,parseInt(r[2],10))/255,this.b=Math.min(255,parseInt(r[3],10))/255,_t.toWorkingColorSpace(this,t),i(r[4]),this;if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(c))return this.r=Math.min(100,parseInt(r[1],10))/100,this.g=Math.min(100,parseInt(r[2],10))/100,this.b=Math.min(100,parseInt(r[3],10))/100,_t.toWorkingColorSpace(this,t),i(r[4]),this;break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(c)){const l=parseFloat(r[1])/360,u=parseFloat(r[2])/100,h=parseFloat(r[3])/100;return i(r[4]),this.setHSL(l,u,h,t)}break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){const r=s[1],o=r.length;if(o===3)return this.r=parseInt(r.charAt(0)+r.charAt(0),16)/255,this.g=parseInt(r.charAt(1)+r.charAt(1),16)/255,this.b=parseInt(r.charAt(2)+r.charAt(2),16)/255,_t.toWorkingColorSpace(this,t),this;if(o===6)return this.r=parseInt(r.charAt(0)+r.charAt(1),16)/255,this.g=parseInt(r.charAt(2)+r.charAt(3),16)/255,this.b=parseInt(r.charAt(4)+r.charAt(5),16)/255,_t.toWorkingColorSpace(this,t),this;console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=$t){const i=Nl[e.toLowerCase()];return i!==void 0?this.setHex(i,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=vi(e.r),this.g=vi(e.g),this.b=vi(e.b),this}copyLinearToSRGB(e){return this.r=mr(e.r),this.g=mr(e.g),this.b=mr(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=$t){return _t.fromWorkingColorSpace(ht.copy(this),e),dt(ht.r*255,0,255)<<16^dt(ht.g*255,0,255)<<8^dt(ht.b*255,0,255)<<0}getHexString(e=$t){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=_t.workingColorSpace){_t.fromWorkingColorSpace(ht.copy(this),t);const i=ht.r,s=ht.g,r=ht.b,o=Math.max(i,s,r),c=Math.min(i,s,r);let l,u;const h=(c+o)/2;if(c===o)l=0,u=0;else{const d=o-c;switch(u=h<=.5?d/(o+c):d/(2-o-c),o){case i:l=(s-r)/d+(s<r?6:0);break;case s:l=(r-i)/d+2;break;case r:l=(i-s)/d+4;break}l/=6}return e.h=l,e.s=u,e.l=h,e}getRGB(e,t=_t.workingColorSpace){return _t.fromWorkingColorSpace(ht.copy(this),t),e.r=ht.r,e.g=ht.g,e.b=ht.b,e}getStyle(e=$t){_t.fromWorkingColorSpace(ht.copy(this),e);const t=ht.r,i=ht.g,s=ht.b;return e!==$t?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${s.toFixed(3)})`:`rgb(${t*255|0},${i*255|0},${s*255|0})`}offsetHSL(e,t,i){return this.getHSL(Vt),Vt.h+=e,Vt.s+=t,Vt.l+=i,this.setHSL(Vt.h,Vt.s,Vt.l),this}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(Vt),e.getHSL(ms);const i=Ki(Vt.h,ms.h,t),s=Ki(Vt.s,ms.s,t),r=Ki(Vt.l,ms.l,t);return this.setHSL(i,s,r),this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const ht=new we;we.NAMES=Nl;class Bn extends Kt{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new we(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=yl,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Qe=new D,gs=new Se;class Mt{constructor(e,t,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=Qr,this.updateRange={offset:0,count:-1},this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[i+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)gs.fromBufferAttribute(this,t),gs.applyMatrix3(e),this.setXY(t,gs.x,gs.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)Qe.fromBufferAttribute(this,t),Qe.applyMatrix3(e),this.setXYZ(t,Qe.x,Qe.y,Qe.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)Qe.fromBufferAttribute(this,t),Qe.applyMatrix4(e),this.setXYZ(t,Qe.x,Qe.y,Qe.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)Qe.fromBufferAttribute(this,t),Qe.applyNormalMatrix(e),this.setXYZ(t,Qe.x,Qe.y,Qe.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)Qe.fromBufferAttribute(this,t),Qe.transformDirection(e),this.setXYZ(t,Qe.x,Qe.y,Qe.z);return this}set(e,t=0){return this.array.set(e,t),this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=ln(t,this.array)),t}setX(e,t){return this.normalized&&(t=He(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=ln(t,this.array)),t}setY(e,t){return this.normalized&&(t=He(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=ln(t,this.array)),t}setZ(e,t){return this.normalized&&(t=He(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=ln(t,this.array)),t}setW(e,t){return this.normalized&&(t=He(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=He(t,this.array),i=He(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,s){return e*=this.itemSize,this.normalized&&(t=He(t,this.array),i=He(i,this.array),s=He(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this}setXYZW(e,t,i,s,r){return e*=this.itemSize,this.normalized&&(t=He(t,this.array),i=He(i,this.array),s=He(s,this.array),r=He(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Qr&&(e.usage=this.usage),(this.updateRange.offset!==0||this.updateRange.count!==-1)&&(e.updateRange=this.updateRange),e}copyColorsArray(){console.error("THREE.BufferAttribute: copyColorsArray() was removed in r144.")}copyVector2sArray(){console.error("THREE.BufferAttribute: copyVector2sArray() was removed in r144.")}copyVector3sArray(){console.error("THREE.BufferAttribute: copyVector3sArray() was removed in r144.")}copyVector4sArray(){console.error("THREE.BufferAttribute: copyVector4sArray() was removed in r144.")}}class Ol extends Mt{constructor(e,t,i){super(new Uint16Array(e),t,i)}}class Fl extends Mt{constructor(e,t,i){super(new Uint32Array(e),t,i)}}class Dt extends Mt{constructor(e,t,i){super(new Float32Array(e),t,i)}}let yp=0;const Pt=new Re,Cr=new Ye,ui=new D,Ct=new Ci,Bi=new Ci,ot=new D;class kt extends Jn{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:yp++}),this.uuid=Ht(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Ll(e)?Fl:Ol)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const r=new bt().getNormalMatrix(e);i.applyNormalMatrix(r),i.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Pt.makeRotationFromQuaternion(e),this.applyMatrix4(Pt),this}rotateX(e){return Pt.makeRotationX(e),this.applyMatrix4(Pt),this}rotateY(e){return Pt.makeRotationY(e),this.applyMatrix4(Pt),this}rotateZ(e){return Pt.makeRotationZ(e),this.applyMatrix4(Pt),this}translate(e,t,i){return Pt.makeTranslation(e,t,i),this.applyMatrix4(Pt),this}scale(e,t,i){return Pt.makeScale(e,t,i),this.applyMatrix4(Pt),this}lookAt(e){return Cr.lookAt(e),Cr.updateMatrix(),this.applyMatrix4(Cr.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ui).negate(),this.translate(ui.x,ui.y,ui.z),this}setFromPoints(e){const t=[];for(let i=0,s=e.length;i<s;i++){const r=e[i];t.push(r.x,r.y,r.z||0)}return this.setAttribute("position",new Dt(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Ci);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new D(-1/0,-1/0,-1/0),new D(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,s=t.length;i<s;i++){const r=t[i];Ct.setFromBufferAttribute(r),this.morphTargetsRelative?(ot.addVectors(this.boundingBox.min,Ct.min),this.boundingBox.expandByPoint(ot),ot.addVectors(this.boundingBox.max,Ct.max),this.boundingBox.expandByPoint(ot)):(this.boundingBox.expandByPoint(Ct.min),this.boundingBox.expandByPoint(Ct.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Li);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new D,1/0);return}if(e){const i=this.boundingSphere.center;if(Ct.setFromBufferAttribute(e),t)for(let r=0,o=t.length;r<o;r++){const c=t[r];Bi.setFromBufferAttribute(c),this.morphTargetsRelative?(ot.addVectors(Ct.min,Bi.min),Ct.expandByPoint(ot),ot.addVectors(Ct.max,Bi.max),Ct.expandByPoint(ot)):(Ct.expandByPoint(Bi.min),Ct.expandByPoint(Bi.max))}Ct.getCenter(i);let s=0;for(let r=0,o=e.count;r<o;r++)ot.fromBufferAttribute(e,r),s=Math.max(s,i.distanceToSquared(ot));if(t)for(let r=0,o=t.length;r<o;r++){const c=t[r],l=this.morphTargetsRelative;for(let u=0,h=c.count;u<h;u++)ot.fromBufferAttribute(c,u),l&&(ui.fromBufferAttribute(e,u),ot.add(ui)),s=Math.max(s,i.distanceToSquared(ot))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=e.array,s=t.position.array,r=t.normal.array,o=t.uv.array,c=s.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Mt(new Float32Array(4*c),4));const l=this.getAttribute("tangent").array,u=[],h=[];for(let F=0;F<c;F++)u[F]=new D,h[F]=new D;const d=new D,f=new D,g=new D,_=new Se,m=new Se,p=new Se,x=new D,E=new D;function y(F,$,X){d.fromArray(s,F*3),f.fromArray(s,$*3),g.fromArray(s,X*3),_.fromArray(o,F*2),m.fromArray(o,$*2),p.fromArray(o,X*2),f.sub(d),g.sub(d),m.sub(_),p.sub(_);const U=1/(m.x*p.y-p.x*m.y);isFinite(U)&&(x.copy(f).multiplyScalar(p.y).addScaledVector(g,-m.y).multiplyScalar(U),E.copy(g).multiplyScalar(m.x).addScaledVector(f,-p.x).multiplyScalar(U),u[F].add(x),u[$].add(x),u[X].add(x),h[F].add(E),h[$].add(E),h[X].add(E))}let M=this.groups;M.length===0&&(M=[{start:0,count:i.length}]);for(let F=0,$=M.length;F<$;++F){const X=M[F],U=X.start,P=X.count;for(let G=U,Y=U+P;G<Y;G+=3)y(i[G+0],i[G+1],i[G+2])}const w=new D,L=new D,I=new D,b=new D;function A(F){I.fromArray(r,F*3),b.copy(I);const $=u[F];w.copy($),w.sub(I.multiplyScalar(I.dot($))).normalize(),L.crossVectors(b,$);const U=L.dot(h[F])<0?-1:1;l[F*4]=w.x,l[F*4+1]=w.y,l[F*4+2]=w.z,l[F*4+3]=U}for(let F=0,$=M.length;F<$;++F){const X=M[F],U=X.start,P=X.count;for(let G=U,Y=U+P;G<Y;G+=3)A(i[G+0]),A(i[G+1]),A(i[G+2])}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new Mt(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let f=0,g=i.count;f<g;f++)i.setXYZ(f,0,0,0);const s=new D,r=new D,o=new D,c=new D,l=new D,u=new D,h=new D,d=new D;if(e)for(let f=0,g=e.count;f<g;f+=3){const _=e.getX(f+0),m=e.getX(f+1),p=e.getX(f+2);s.fromBufferAttribute(t,_),r.fromBufferAttribute(t,m),o.fromBufferAttribute(t,p),h.subVectors(o,r),d.subVectors(s,r),h.cross(d),c.fromBufferAttribute(i,_),l.fromBufferAttribute(i,m),u.fromBufferAttribute(i,p),c.add(h),l.add(h),u.add(h),i.setXYZ(_,c.x,c.y,c.z),i.setXYZ(m,l.x,l.y,l.z),i.setXYZ(p,u.x,u.y,u.z)}else for(let f=0,g=t.count;f<g;f+=3)s.fromBufferAttribute(t,f+0),r.fromBufferAttribute(t,f+1),o.fromBufferAttribute(t,f+2),h.subVectors(o,r),d.subVectors(s,r),h.cross(d),i.setXYZ(f+0,h.x,h.y,h.z),i.setXYZ(f+1,h.x,h.y,h.z),i.setXYZ(f+2,h.x,h.y,h.z);this.normalizeNormals(),i.needsUpdate=!0}}merge(){return console.error("THREE.BufferGeometry.merge() has been removed. Use THREE.BufferGeometryUtils.mergeBufferGeometries() instead."),this}normalizeNormals(){const e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)ot.fromBufferAttribute(e,t),ot.normalize(),e.setXYZ(t,ot.x,ot.y,ot.z)}toNonIndexed(){function e(c,l){const u=c.array,h=c.itemSize,d=c.normalized,f=new u.constructor(l.length*h);let g=0,_=0;for(let m=0,p=l.length;m<p;m++){c.isInterleavedBufferAttribute?g=l[m]*c.data.stride+c.offset:g=l[m]*h;for(let x=0;x<h;x++)f[_++]=u[g++]}return new Mt(f,h,d)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new kt,i=this.index.array,s=this.attributes;for(const c in s){const l=s[c],u=e(l,i);t.setAttribute(c,u)}const r=this.morphAttributes;for(const c in r){const l=[],u=r[c];for(let h=0,d=u.length;h<d;h++){const f=u[h],g=e(f,i);l.push(g)}t.morphAttributes[c]=l}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let c=0,l=o.length;c<l;c++){const u=o[c];t.addGroup(u.start,u.count,u.materialIndex)}return t}toJSON(){const e={metadata:{version:4.5,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const u in l)l[u]!==void 0&&(e[u]=l[u]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const i=this.attributes;for(const l in i){const u=i[l];e.data.attributes[l]=u.toJSON(e.data)}const s={};let r=!1;for(const l in this.morphAttributes){const u=this.morphAttributes[l],h=[];for(let d=0,f=u.length;d<f;d++){const g=u[d];h.push(g.toJSON(e.data))}h.length>0&&(s[l]=h,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const c=this.boundingSphere;return c!==null&&(e.data.boundingSphere={center:c.center.toArray(),radius:c.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone(t));const s=e.attributes;for(const u in s){const h=s[u];this.setAttribute(u,h.clone(t))}const r=e.morphAttributes;for(const u in r){const h=[],d=r[u];for(let f=0,g=d.length;f<g;f++)h.push(d[f].clone(t));this.morphAttributes[u]=h}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let u=0,h=o.length;u<h;u++){const d=o[u];this.addGroup(d.start,d.count,d.materialIndex)}const c=e.boundingBox;c!==null&&(this.boundingBox=c.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Uo=new Re,Xt=new pa,_s=new Li,Bo=new D,ki=new D,zi=new D,Gi=new D,Lr=new D,xs=new D,vs=new Se,ys=new Se,bs=new Se,Rr=new D,Ms=new D;class Ut extends Ye{constructor(e=new kt,t=new Bn){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const c=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[c]=r}}}}getVertexPosition(e,t){const i=this.geometry,s=i.attributes.position,r=i.morphAttributes.position,o=i.morphTargetsRelative;t.fromBufferAttribute(s,e);const c=this.morphTargetInfluences;if(r&&c){xs.set(0,0,0);for(let l=0,u=r.length;l<u;l++){const h=c[l],d=r[l];h!==0&&(Lr.fromBufferAttribute(d,e),o?xs.addScaledVector(Lr,h):xs.addScaledVector(Lr.sub(t),h))}t.add(xs)}return this.isSkinnedMesh&&this.boneTransform(e,t),t}raycast(e,t){const i=this.geometry,s=this.material,r=this.matrixWorld;if(s===void 0||(i.boundingSphere===null&&i.computeBoundingSphere(),_s.copy(i.boundingSphere),_s.applyMatrix4(r),Xt.copy(e.ray).recast(e.near),_s.containsPoint(Xt.origin)===!1&&(Xt.intersectSphere(_s,Bo)===null||Xt.origin.distanceToSquared(Bo)>(e.far-e.near)**2))||(Uo.copy(r).invert(),Xt.copy(e.ray).applyMatrix4(Uo),i.boundingBox!==null&&Xt.intersectsBox(i.boundingBox)===!1))return;let o;const c=i.index,l=i.attributes.position,u=i.attributes.uv,h=i.attributes.uv2,d=i.groups,f=i.drawRange;if(c!==null)if(Array.isArray(s))for(let g=0,_=d.length;g<_;g++){const m=d[g],p=s[m.materialIndex],x=Math.max(m.start,f.start),E=Math.min(c.count,Math.min(m.start+m.count,f.start+f.count));for(let y=x,M=E;y<M;y+=3){const w=c.getX(y),L=c.getX(y+1),I=c.getX(y+2);o=Ss(this,p,e,Xt,u,h,w,L,I),o&&(o.faceIndex=Math.floor(y/3),o.face.materialIndex=m.materialIndex,t.push(o))}}else{const g=Math.max(0,f.start),_=Math.min(c.count,f.start+f.count);for(let m=g,p=_;m<p;m+=3){const x=c.getX(m),E=c.getX(m+1),y=c.getX(m+2);o=Ss(this,s,e,Xt,u,h,x,E,y),o&&(o.faceIndex=Math.floor(m/3),t.push(o))}}else if(l!==void 0)if(Array.isArray(s))for(let g=0,_=d.length;g<_;g++){const m=d[g],p=s[m.materialIndex],x=Math.max(m.start,f.start),E=Math.min(l.count,Math.min(m.start+m.count,f.start+f.count));for(let y=x,M=E;y<M;y+=3){const w=y,L=y+1,I=y+2;o=Ss(this,p,e,Xt,u,h,w,L,I),o&&(o.faceIndex=Math.floor(y/3),o.face.materialIndex=m.materialIndex,t.push(o))}}else{const g=Math.max(0,f.start),_=Math.min(l.count,f.start+f.count);for(let m=g,p=_;m<p;m+=3){const x=m,E=m+1,y=m+2;o=Ss(this,s,e,Xt,u,h,x,E,y),o&&(o.faceIndex=Math.floor(m/3),t.push(o))}}}}function bp(a,e,t,i,s,r,o,c){let l;if(e.side===Rt?l=i.intersectTriangle(o,r,s,!0,c):l=i.intersectTriangle(s,r,o,e.side===hn,c),l===null)return null;Ms.copy(c),Ms.applyMatrix4(a.matrixWorld);const u=t.ray.origin.distanceTo(Ms);return u<t.near||u>t.far?null:{distance:u,point:Ms.clone(),object:a}}function Ss(a,e,t,i,s,r,o,c,l){a.getVertexPosition(o,ki),a.getVertexPosition(c,zi),a.getVertexPosition(l,Gi);const u=bp(a,e,t,i,ki,zi,Gi,Rr);if(u){s&&(vs.fromBufferAttribute(s,o),ys.fromBufferAttribute(s,c),bs.fromBufferAttribute(s,l),u.uv=on.getUV(Rr,ki,zi,Gi,vs,ys,bs,new Se)),r&&(vs.fromBufferAttribute(r,o),ys.fromBufferAttribute(r,c),bs.fromBufferAttribute(r,l),u.uv2=on.getUV(Rr,ki,zi,Gi,vs,ys,bs,new Se));const h={a:o,b:c,c:l,normal:new D,materialIndex:0};on.getNormal(ki,zi,Gi,h.normal),u.face=h}return u}class rs extends kt{constructor(e=1,t=1,i=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:s,heightSegments:r,depthSegments:o};const c=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);const l=[],u=[],h=[],d=[];let f=0,g=0;_("z","y","x",-1,-1,i,t,e,o,r,0),_("z","y","x",1,-1,i,t,-e,o,r,1),_("x","z","y",1,1,e,i,t,s,o,2),_("x","z","y",1,-1,e,i,-t,s,o,3),_("x","y","z",1,-1,e,t,i,s,r,4),_("x","y","z",-1,-1,e,t,-i,s,r,5),this.setIndex(l),this.setAttribute("position",new Dt(u,3)),this.setAttribute("normal",new Dt(h,3)),this.setAttribute("uv",new Dt(d,2));function _(m,p,x,E,y,M,w,L,I,b,A){const F=M/I,$=w/b,X=M/2,U=w/2,P=L/2,G=I+1,Y=b+1;let Q=0,q=0;const ee=new D;for(let K=0;K<Y;K++){const ve=K*$-U;for(let z=0;z<G;z++){const Z=z*F-X;ee[m]=Z*E,ee[p]=ve*y,ee[x]=P,u.push(ee.x,ee.y,ee.z),ee[m]=0,ee[p]=0,ee[x]=L>0?1:-1,h.push(ee.x,ee.y,ee.z),d.push(z/I),d.push(1-K/b),Q+=1}}for(let K=0;K<b;K++)for(let ve=0;ve<I;ve++){const z=f+ve+G*K,Z=f+ve+G*(K+1),se=f+(ve+1)+G*(K+1),B=f+(ve+1)+G*K;l.push(z,Z,B),l.push(Z,se,B),q+=6}c.addGroup(g,q,A),g+=q,f+=Q}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new rs(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Ei(a){const e={};for(const t in a){e[t]={};for(const i in a[t]){const s=a[t][i];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?e[t][i]=s.clone():Array.isArray(s)?e[t][i]=s.slice():e[t][i]=s}}return e}function vt(a){const e={};for(let t=0;t<a.length;t++){const i=Ei(a[t]);for(const s in i)e[s]=i[s]}return e}function Mp(a){const e=[];for(let t=0;t<a.length;t++)e.push(a[t].clone());return e}function Ul(a){return a.getRenderTarget()===null&&a.outputEncoding===ze?$t:es}const Sp={clone:Ei,merge:vt};var wp=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Tp=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Yn extends Kt{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=wp,this.fragmentShader=Tp,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv2:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Ei(e.uniforms),this.uniformsGroups=Mp(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const s in this.uniforms){const o=this.uniforms[s].value;o&&o.isTexture?t.uniforms[s]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[s]={type:"m4",value:o.toArray()}:t.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader;const i={};for(const s in this.extensions)this.extensions[s]===!0&&(i[s]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}}class Bl extends Ye{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Re,this.projectionMatrix=new Re,this.projectionMatrixInverse=new Re}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(-t[8],-t[9],-t[10]).normalize()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class yt extends Bl{constructor(e=50,t=1,i=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=ts*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Yi*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return ts*2*Math.atan(Math.tan(Yi*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,t,i,s,r,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Yi*.5*this.fov)/this.zoom,i=2*t,s=this.aspect*i,r=-.5*s;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,u=o.fullHeight;r+=o.offsetX*s/l,t-=o.offsetY*i/u,s*=o.width/l,i*=o.height/u}const c=this.filmOffset;c!==0&&(r+=e*c/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-i,e,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const hi=-90,di=1;class Ep extends Ye{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i;const s=new yt(hi,di,e,t);s.layers=this.layers,s.up.set(0,1,0),s.lookAt(1,0,0),this.add(s);const r=new yt(hi,di,e,t);r.layers=this.layers,r.up.set(0,1,0),r.lookAt(-1,0,0),this.add(r);const o=new yt(hi,di,e,t);o.layers=this.layers,o.up.set(0,0,-1),o.lookAt(0,1,0),this.add(o);const c=new yt(hi,di,e,t);c.layers=this.layers,c.up.set(0,0,1),c.lookAt(0,-1,0),this.add(c);const l=new yt(hi,di,e,t);l.layers=this.layers,l.up.set(0,1,0),l.lookAt(0,0,1),this.add(l);const u=new yt(hi,di,e,t);u.layers=this.layers,u.up.set(0,1,0),u.lookAt(0,0,-1),this.add(u)}update(e,t){this.parent===null&&this.updateMatrixWorld();const i=this.renderTarget,[s,r,o,c,l,u]=this.children,h=e.getRenderTarget(),d=e.toneMapping,f=e.xr.enabled;e.toneMapping=un,e.xr.enabled=!1;const g=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0),e.render(t,s),e.setRenderTarget(i,1),e.render(t,r),e.setRenderTarget(i,2),e.render(t,o),e.setRenderTarget(i,3),e.render(t,c),e.setRenderTarget(i,4),e.render(t,l),i.texture.generateMipmaps=g,e.setRenderTarget(i,5),e.render(t,u),e.setRenderTarget(h),e.toneMapping=d,e.xr.enabled=f,i.texture.needsPMREMUpdate=!0}}class kl extends lt{constructor(e,t,i,s,r,o,c,l,u,h){e=e!==void 0?e:[],t=t!==void 0?t:bi,super(e,t,i,s,r,o,c,l,u,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Ap extends $n{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},s=[i,i,i,i,i,i];this.texture=new kl(s,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.encoding),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:St}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.encoding=t.encoding,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},s=new rs(5,5,5),r=new Yn({name:"CubemapFromEquirect",uniforms:Ei(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Rt,blending:wn});r.uniforms.tEquirect.value=t;const o=new Ut(s,r),c=t.minFilter;return t.minFilter===jn&&(t.minFilter=St),new Ep(1,10,this).update(e,o),t.minFilter=c,o.geometry.dispose(),o.material.dispose(),this}clear(e,t,i,s){const r=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,i,s);e.setRenderTarget(r)}}const Dr=new D,Cp=new D,Lp=new bt;class Pn{constructor(e=new D(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,s){return this.normal.set(e,t,i),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){const s=Dr.subVectors(i,t).cross(Cp.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const i=e.delta(Dr),s=this.normal.dot(i);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const r=-(e.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:t.copy(e.start).addScaledVector(i,r)}intersectsLine(e){const t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const i=t||Lp.getNormalMatrix(e),s=this.coplanarPoint(Dr).applyMatrix4(e),r=this.normal.applyMatrix3(i).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const fi=new Li,ws=new D;class ma{constructor(e=new Pn,t=new Pn,i=new Pn,s=new Pn,r=new Pn,o=new Pn){this.planes=[e,t,i,s,r,o]}set(e,t,i,s,r,o){const c=this.planes;return c[0].copy(e),c[1].copy(t),c[2].copy(i),c[3].copy(s),c[4].copy(r),c[5].copy(o),this}copy(e){const t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e){const t=this.planes,i=e.elements,s=i[0],r=i[1],o=i[2],c=i[3],l=i[4],u=i[5],h=i[6],d=i[7],f=i[8],g=i[9],_=i[10],m=i[11],p=i[12],x=i[13],E=i[14],y=i[15];return t[0].setComponents(c-s,d-l,m-f,y-p).normalize(),t[1].setComponents(c+s,d+l,m+f,y+p).normalize(),t[2].setComponents(c+r,d+u,m+g,y+x).normalize(),t[3].setComponents(c-r,d-u,m-g,y-x).normalize(),t[4].setComponents(c-o,d-h,m-_,y-E).normalize(),t[5].setComponents(c+o,d+h,m+_,y+E).normalize(),this}intersectsObject(e){const t=e.geometry;return t.boundingSphere===null&&t.computeBoundingSphere(),fi.copy(t.boundingSphere).applyMatrix4(e.matrixWorld),this.intersectsSphere(fi)}intersectsSprite(e){return fi.center.set(0,0,0),fi.radius=.7071067811865476,fi.applyMatrix4(e.matrixWorld),this.intersectsSphere(fi)}intersectsSphere(e){const t=this.planes,i=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(i)<s)return!1;return!0}intersectsBox(e){const t=this.planes;for(let i=0;i<6;i++){const s=t[i];if(ws.x=s.normal.x>0?e.max.x:e.min.x,ws.y=s.normal.y>0?e.max.y:e.min.y,ws.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(ws)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function zl(){let a=null,e=!1,t=null,i=null;function s(r,o){t(r,o),i=a.requestAnimationFrame(s)}return{start:function(){e!==!0&&t!==null&&(i=a.requestAnimationFrame(s),e=!0)},stop:function(){a.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){a=r}}}function Rp(a,e){const t=e.isWebGL2,i=new WeakMap;function s(u,h){const d=u.array,f=u.usage,g=a.createBuffer();a.bindBuffer(h,g),a.bufferData(h,d,f),u.onUploadCallback();let _;if(d instanceof Float32Array)_=5126;else if(d instanceof Uint16Array)if(u.isFloat16BufferAttribute)if(t)_=5131;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else _=5123;else if(d instanceof Int16Array)_=5122;else if(d instanceof Uint32Array)_=5125;else if(d instanceof Int32Array)_=5124;else if(d instanceof Int8Array)_=5120;else if(d instanceof Uint8Array)_=5121;else if(d instanceof Uint8ClampedArray)_=5121;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+d);return{buffer:g,type:_,bytesPerElement:d.BYTES_PER_ELEMENT,version:u.version}}function r(u,h,d){const f=h.array,g=h.updateRange;a.bindBuffer(d,u),g.count===-1?a.bufferSubData(d,0,f):(t?a.bufferSubData(d,g.offset*f.BYTES_PER_ELEMENT,f,g.offset,g.count):a.bufferSubData(d,g.offset*f.BYTES_PER_ELEMENT,f.subarray(g.offset,g.offset+g.count)),g.count=-1),h.onUploadCallback()}function o(u){return u.isInterleavedBufferAttribute&&(u=u.data),i.get(u)}function c(u){u.isInterleavedBufferAttribute&&(u=u.data);const h=i.get(u);h&&(a.deleteBuffer(h.buffer),i.delete(u))}function l(u,h){if(u.isGLBufferAttribute){const f=i.get(u);(!f||f.version<u.version)&&i.set(u,{buffer:u.buffer,type:u.type,bytesPerElement:u.elementSize,version:u.version});return}u.isInterleavedBufferAttribute&&(u=u.data);const d=i.get(u);d===void 0?i.set(u,s(u,h)):d.version<u.version&&(r(d.buffer,u,h),d.version=u.version)}return{get:o,remove:c,update:l}}class ga extends kt{constructor(e=1,t=1,i=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:s};const r=e/2,o=t/2,c=Math.floor(i),l=Math.floor(s),u=c+1,h=l+1,d=e/c,f=t/l,g=[],_=[],m=[],p=[];for(let x=0;x<h;x++){const E=x*f-o;for(let y=0;y<u;y++){const M=y*d-r;_.push(M,-E,0),m.push(0,0,1),p.push(y/c),p.push(1-x/l)}}for(let x=0;x<l;x++)for(let E=0;E<c;E++){const y=E+u*x,M=E+u*(x+1),w=E+1+u*(x+1),L=E+1+u*x;g.push(y,M,L),g.push(M,w,L)}this.setIndex(g),this.setAttribute("position",new Dt(_,3)),this.setAttribute("normal",new Dt(m,3)),this.setAttribute("uv",new Dt(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ga(e.width,e.height,e.widthSegments,e.heightSegments)}}var Dp=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vUv ).g;
#endif`,Ip=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Pp=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,Np=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Op=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vUv2 ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Fp=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Up="vec3 transformed = vec3( position );",Bp=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,kp=`vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 f0, const in float f90, const in float roughness ) {
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
	float D = D_GGX( alpha, dotNH );
	return F * ( V * D );
}
#ifdef USE_IRIDESCENCE
	vec3 BRDF_GGX_Iridescence( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 f0, const in float f90, const in float iridescence, const in vec3 iridescenceFresnel, const in float roughness ) {
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = mix( F_Schlick( f0, f90, dotVH ), iridescenceFresnel, iridescence );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif`,zp=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			 return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float R21 = R12;
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,Gp=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vUv );
		vec2 dSTdy = dFdy( vUv );
		float Hll = bumpScale * texture2D( bumpMap, vUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = dFdx( surf_pos.xyz );
		vec3 vSigmaY = dFdy( surf_pos.xyz );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,Vp=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#pragma unroll_loop_start
	for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
		plane = clippingPlanes[ i ];
		if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
	}
	#pragma unroll_loop_end
	#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
		bool clipped = true;
		#pragma unroll_loop_start
		for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
		}
		#pragma unroll_loop_end
		if ( clipped ) discard;
	#endif
#endif`,Hp=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Wp=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,jp=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,qp=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Xp=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,$p=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,Yp=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,Kp=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
struct GeometricContext {
	vec3 position;
	vec3 normal;
	vec3 viewDir;
#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal;
#endif
};
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}`,Zp=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_v0 0.339
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_v1 0.276
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_v4 0.046
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_v5 0.016
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_v6 0.0038
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,Jp=`vec3 transformedNormal = objectNormal;
#ifdef USE_INSTANCING
	mat3 m = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( m[ 0 ], m[ 0 ] ), dot( m[ 1 ], m[ 1 ] ), dot( m[ 2 ], m[ 2 ] ) );
	transformedNormal = m * transformedNormal;
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	vec3 transformedTangent = ( modelViewMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,Qp=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,em=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vUv ).x * displacementScale + displacementBias );
#endif`,tm=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,nm=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,im="gl_FragColor = linearToOutputTexel( gl_FragColor );",sm=`vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,rm=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,am=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,om=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,cm=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,lm=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,um=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,hm=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,dm=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,fm=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,pm=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,mm=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vUv2 );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,gm=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,_m=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,xm=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in GeometricContext geometry, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in GeometricContext geometry, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,vm=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
uniform vec3 lightProbe[ 9 ];
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	#if defined ( LEGACY_LIGHTS )
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#else
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#endif
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, const in GeometricContext geometry, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometry.position;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometry.position;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,ym=`#if defined( USE_ENVMAP )
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#if defined( ENVMAP_TYPE_CUBE_UV )
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#if defined( ENVMAP_TYPE_CUBE_UV )
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
#endif`,bm=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Mm=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometry.normal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Sm=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,wm=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Tm=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( geometryNormal ) ), abs( dFdy( geometryNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULARINTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vUv ).a;
		#endif
		#ifdef USE_SPECULARCOLORMAP
			specularColorFactor *= texture2D( specularColorMap, vUv ).rgb;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEENCOLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEENROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vUv ).a;
	#endif
#endif`,Em=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
};
vec3 clearcoatSpecular = vec3( 0.0 );
vec3 sheenSpecular = vec3( 0.0 );
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometry.normal;
		vec3 viewDir = geometry.viewDir;
		vec3 position = geometry.position;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometry.clearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecular += ccIrradiance * BRDF_GGX( directLight.direction, geometry.viewDir, geometry.clearcoatNormal, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * BRDF_Sheen( directLight.direction, geometry.viewDir, geometry.normal, material.sheenColor, material.sheenRoughness );
	#endif
	#ifdef USE_IRIDESCENCE
		reflectedLight.directSpecular += irradiance * BRDF_GGX_Iridescence( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness );
	#else
		reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularF90, material.roughness );
	#endif
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecular += clearcoatRadiance * EnvironmentBRDF( geometry.clearcoatNormal, geometry.viewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * material.sheenColor * IBLSheenBRDF( geometry.normal, geometry.viewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Am=`
GeometricContext geometry;
geometry.position = - vViewPosition;
geometry.normal = normal;
geometry.viewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
#ifdef USE_CLEARCOAT
	geometry.clearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometry.viewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometry, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	irradiance += getLightProbeIrradiance( lightProbe, geometry.normal );
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometry.normal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Cm=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vUv2 );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometry.normal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	radiance += getIBLRadiance( geometry.viewDir, geometry.normal, material.roughness );
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometry.viewDir, geometry.clearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Lm=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometry, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometry, material, reflectedLight );
#endif`,Rm=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Dm=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Im=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,Pm=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,Nm=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Om=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Fm=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,Um=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	uniform mat3 uvTransform;
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Bm=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vUv );
	metalnessFactor *= texelMetalness.b;
#endif`,km=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,zm=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Gm=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,Vm=`#ifdef USE_MORPHTARGETS
	uniform float morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,Hm=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,Wm=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	#ifdef USE_TANGENT
		vec3 tangent = normalize( vTangent );
		vec3 bitangent = normalize( vBitangent );
		#ifdef DOUBLE_SIDED
			tangent = tangent * faceDirection;
			bitangent = bitangent * faceDirection;
		#endif
		#if defined( TANGENTSPACE_NORMALMAP ) || defined( USE_CLEARCOAT_NORMALMAP )
			mat3 vTBN = mat3( tangent, bitangent, normal );
		#endif
	#endif
#endif
vec3 geometryNormal = normal;`,jm=`#ifdef OBJECTSPACE_NORMALMAP
	normal = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( TANGENTSPACE_NORMALMAP )
	vec3 mapN = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	#ifdef USE_TANGENT
		normal = normalize( vTBN * mapN );
	#else
		normal = perturbNormal2Arb( - vViewPosition, normal, mapN, faceDirection );
	#endif
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,qm=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Xm=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,$m=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Ym=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef OBJECTSPACE_NORMALMAP
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( TANGENTSPACE_NORMALMAP ) || defined ( USE_CLEARCOAT_NORMALMAP ) )
	vec3 perturbNormal2Arb( vec3 eye_pos, vec3 surf_norm, vec3 mapN, float faceDirection ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( vUv.st );
		vec2 st1 = dFdy( vUv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : faceDirection * inversesqrt( det );
		return normalize( T * ( mapN.x * scale ) + B * ( mapN.y * scale ) + N * mapN.z );
	}
#endif`,Km=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = geometryNormal;
#endif`,Zm=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	#ifdef USE_TANGENT
		clearcoatNormal = normalize( vTBN * clearcoatMapN );
	#else
		clearcoatNormal = perturbNormal2Arb( - vViewPosition, clearcoatNormal, clearcoatMapN, faceDirection );
	#endif
#endif`,Jm=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif`,Qm=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,eg=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha + 0.1;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,tg=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float linearClipZ, const in float near, const in float far ) {
	return linearClipZ * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float invClipZ, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * invClipZ - far );
}`,ng=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,ig=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,sg=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,rg=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,ag=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vUv );
	roughnessFactor *= texelRoughness.g;
#endif`,og=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,cg=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
			) * ( 1.0 / 9.0 );
		#else
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`,lg=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,ug=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,hg=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,dg=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,fg=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	uniform int boneTextureSize;
	mat4 getBoneMatrix( const in float i ) {
		float j = i * 4.0;
		float x = mod( j, float( boneTextureSize ) );
		float y = floor( j / float( boneTextureSize ) );
		float dx = 1.0 / float( boneTextureSize );
		float dy = 1.0 / float( boneTextureSize );
		y = dy * ( y + 0.5 );
		vec4 v1 = texture2D( boneTexture, vec2( dx * ( x + 0.5 ), y ) );
		vec4 v2 = texture2D( boneTexture, vec2( dx * ( x + 1.5 ), y ) );
		vec4 v3 = texture2D( boneTexture, vec2( dx * ( x + 2.5 ), y ) );
		vec4 v4 = texture2D( boneTexture, vec2( dx * ( x + 3.5 ), y ) );
		mat4 bone = mat4( v1, v2, v3, v4 );
		return bone;
	}
#endif`,pg=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,mg=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,gg=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,_g=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,xg=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,vg=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return toneMappingExposure * color;
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,yg=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmission = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmission.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmission.rgb, material.transmission );
#endif`,bg=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, vec2 fullSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		
		vec2 lodFudge = pow( 1.95, lod ) / fullSize;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec2 fullSize = vec2( textureSize( sampler, 0 ) );
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), fullSize, floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), fullSize, ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 applyVolumeAttenuation( const in vec3 radiance, const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return radiance;
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance * radiance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 attenuatedColor = applyVolumeAttenuation( transmittedLight.rgb, length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		return vec4( ( 1.0 - F ) * attenuatedColor * diffuseColor, transmittedLight.a );
	}
#endif`,Mg=`#if ( defined( USE_UV ) && ! defined( UVS_VERTEX_ONLY ) )
	varying vec2 vUv;
#endif`,Sg=`#ifdef USE_UV
	#ifdef UVS_VERTEX_ONLY
		vec2 vUv;
	#else
		varying vec2 vUv;
	#endif
	uniform mat3 uvTransform;
#endif`,wg=`#ifdef USE_UV
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
#endif`,Tg=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	varying vec2 vUv2;
#endif`,Eg=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	attribute vec2 uv2;
	varying vec2 vUv2;
	uniform mat3 uv2Transform;
#endif`,Ag=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	vUv2 = ( uv2Transform * vec3( uv2, 1 ) ).xy;
#endif`,Cg=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Lg=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Rg=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,Dg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Ig=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,Pg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Ng=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,Og=`#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,Fg=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,Ug=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,Bg=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,kg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,zg=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,Gg=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Vg=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Hg=`#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,Wg=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vUv2 );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,jg=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,qg=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Xg=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,$g=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Yg=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	vViewPosition = - mvPosition.xyz;
#endif
}`,Kg=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), opacity );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,Zg=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Jg=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Qg=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,e_=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULARINTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
	#ifdef USE_SPECULARCOLORMAP
		uniform sampler2D specularColorMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEENCOLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEENROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <bsdfs>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecular;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometry.clearcoatNormal, geometry.viewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + clearcoatSpecular * material.clearcoat;
	#endif
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,t_=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,n_=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,i_=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,s_=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,r_=`#include <common>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,a_=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
}`,o_=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,c_=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
}`,Ee={alphamap_fragment:Dp,alphamap_pars_fragment:Ip,alphatest_fragment:Pp,alphatest_pars_fragment:Np,aomap_fragment:Op,aomap_pars_fragment:Fp,begin_vertex:Up,beginnormal_vertex:Bp,bsdfs:kp,iridescence_fragment:zp,bumpmap_pars_fragment:Gp,clipping_planes_fragment:Vp,clipping_planes_pars_fragment:Hp,clipping_planes_pars_vertex:Wp,clipping_planes_vertex:jp,color_fragment:qp,color_pars_fragment:Xp,color_pars_vertex:$p,color_vertex:Yp,common:Kp,cube_uv_reflection_fragment:Zp,defaultnormal_vertex:Jp,displacementmap_pars_vertex:Qp,displacementmap_vertex:em,emissivemap_fragment:tm,emissivemap_pars_fragment:nm,encodings_fragment:im,encodings_pars_fragment:sm,envmap_fragment:rm,envmap_common_pars_fragment:am,envmap_pars_fragment:om,envmap_pars_vertex:cm,envmap_physical_pars_fragment:ym,envmap_vertex:lm,fog_vertex:um,fog_pars_vertex:hm,fog_fragment:dm,fog_pars_fragment:fm,gradientmap_pars_fragment:pm,lightmap_fragment:mm,lightmap_pars_fragment:gm,lights_lambert_fragment:_m,lights_lambert_pars_fragment:xm,lights_pars_begin:vm,lights_toon_fragment:bm,lights_toon_pars_fragment:Mm,lights_phong_fragment:Sm,lights_phong_pars_fragment:wm,lights_physical_fragment:Tm,lights_physical_pars_fragment:Em,lights_fragment_begin:Am,lights_fragment_maps:Cm,lights_fragment_end:Lm,logdepthbuf_fragment:Rm,logdepthbuf_pars_fragment:Dm,logdepthbuf_pars_vertex:Im,logdepthbuf_vertex:Pm,map_fragment:Nm,map_pars_fragment:Om,map_particle_fragment:Fm,map_particle_pars_fragment:Um,metalnessmap_fragment:Bm,metalnessmap_pars_fragment:km,morphcolor_vertex:zm,morphnormal_vertex:Gm,morphtarget_pars_vertex:Vm,morphtarget_vertex:Hm,normal_fragment_begin:Wm,normal_fragment_maps:jm,normal_pars_fragment:qm,normal_pars_vertex:Xm,normal_vertex:$m,normalmap_pars_fragment:Ym,clearcoat_normal_fragment_begin:Km,clearcoat_normal_fragment_maps:Zm,clearcoat_pars_fragment:Jm,iridescence_pars_fragment:Qm,output_fragment:eg,packing:tg,premultiplied_alpha_fragment:ng,project_vertex:ig,dithering_fragment:sg,dithering_pars_fragment:rg,roughnessmap_fragment:ag,roughnessmap_pars_fragment:og,shadowmap_pars_fragment:cg,shadowmap_pars_vertex:lg,shadowmap_vertex:ug,shadowmask_pars_fragment:hg,skinbase_vertex:dg,skinning_pars_vertex:fg,skinning_vertex:pg,skinnormal_vertex:mg,specularmap_fragment:gg,specularmap_pars_fragment:_g,tonemapping_fragment:xg,tonemapping_pars_fragment:vg,transmission_fragment:yg,transmission_pars_fragment:bg,uv_pars_fragment:Mg,uv_pars_vertex:Sg,uv_vertex:wg,uv2_pars_fragment:Tg,uv2_pars_vertex:Eg,uv2_vertex:Ag,worldpos_vertex:Cg,background_vert:Lg,background_frag:Rg,backgroundCube_vert:Dg,backgroundCube_frag:Ig,cube_vert:Pg,cube_frag:Ng,depth_vert:Og,depth_frag:Fg,distanceRGBA_vert:Ug,distanceRGBA_frag:Bg,equirect_vert:kg,equirect_frag:zg,linedashed_vert:Gg,linedashed_frag:Vg,meshbasic_vert:Hg,meshbasic_frag:Wg,meshlambert_vert:jg,meshlambert_frag:qg,meshmatcap_vert:Xg,meshmatcap_frag:$g,meshnormal_vert:Yg,meshnormal_frag:Kg,meshphong_vert:Zg,meshphong_frag:Jg,meshphysical_vert:Qg,meshphysical_frag:e_,meshtoon_vert:t_,meshtoon_frag:n_,points_vert:i_,points_frag:s_,shadow_vert:r_,shadow_frag:a_,sprite_vert:o_,sprite_frag:c_},ie={common:{diffuse:{value:new we(16777215)},opacity:{value:1},map:{value:null},uvTransform:{value:new bt},uv2Transform:{value:new bt},alphaMap:{value:null},alphaTest:{value:0}},specularmap:{specularMap:{value:null}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1}},emissivemap:{emissiveMap:{value:null}},bumpmap:{bumpMap:{value:null},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalScale:{value:new Se(1,1)}},displacementmap:{displacementMap:{value:null},displacementScale:{value:1},displacementBias:{value:0}},roughnessmap:{roughnessMap:{value:null}},metalnessmap:{metalnessMap:{value:null}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new we(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new we(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaTest:{value:0},uvTransform:{value:new bt}},sprite:{diffuse:{value:new we(16777215)},opacity:{value:1},center:{value:new Se(.5,.5)},rotation:{value:0},map:{value:null},alphaMap:{value:null},alphaTest:{value:0},uvTransform:{value:new bt}}},Yt={basic:{uniforms:vt([ie.common,ie.specularmap,ie.envmap,ie.aomap,ie.lightmap,ie.fog]),vertexShader:Ee.meshbasic_vert,fragmentShader:Ee.meshbasic_frag},lambert:{uniforms:vt([ie.common,ie.specularmap,ie.envmap,ie.aomap,ie.lightmap,ie.emissivemap,ie.bumpmap,ie.normalmap,ie.displacementmap,ie.fog,ie.lights,{emissive:{value:new we(0)}}]),vertexShader:Ee.meshlambert_vert,fragmentShader:Ee.meshlambert_frag},phong:{uniforms:vt([ie.common,ie.specularmap,ie.envmap,ie.aomap,ie.lightmap,ie.emissivemap,ie.bumpmap,ie.normalmap,ie.displacementmap,ie.fog,ie.lights,{emissive:{value:new we(0)},specular:{value:new we(1118481)},shininess:{value:30}}]),vertexShader:Ee.meshphong_vert,fragmentShader:Ee.meshphong_frag},standard:{uniforms:vt([ie.common,ie.envmap,ie.aomap,ie.lightmap,ie.emissivemap,ie.bumpmap,ie.normalmap,ie.displacementmap,ie.roughnessmap,ie.metalnessmap,ie.fog,ie.lights,{emissive:{value:new we(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ee.meshphysical_vert,fragmentShader:Ee.meshphysical_frag},toon:{uniforms:vt([ie.common,ie.aomap,ie.lightmap,ie.emissivemap,ie.bumpmap,ie.normalmap,ie.displacementmap,ie.gradientmap,ie.fog,ie.lights,{emissive:{value:new we(0)}}]),vertexShader:Ee.meshtoon_vert,fragmentShader:Ee.meshtoon_frag},matcap:{uniforms:vt([ie.common,ie.bumpmap,ie.normalmap,ie.displacementmap,ie.fog,{matcap:{value:null}}]),vertexShader:Ee.meshmatcap_vert,fragmentShader:Ee.meshmatcap_frag},points:{uniforms:vt([ie.points,ie.fog]),vertexShader:Ee.points_vert,fragmentShader:Ee.points_frag},dashed:{uniforms:vt([ie.common,ie.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ee.linedashed_vert,fragmentShader:Ee.linedashed_frag},depth:{uniforms:vt([ie.common,ie.displacementmap]),vertexShader:Ee.depth_vert,fragmentShader:Ee.depth_frag},normal:{uniforms:vt([ie.common,ie.bumpmap,ie.normalmap,ie.displacementmap,{opacity:{value:1}}]),vertexShader:Ee.meshnormal_vert,fragmentShader:Ee.meshnormal_frag},sprite:{uniforms:vt([ie.sprite,ie.fog]),vertexShader:Ee.sprite_vert,fragmentShader:Ee.sprite_frag},background:{uniforms:{uvTransform:{value:new bt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ee.background_vert,fragmentShader:Ee.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:Ee.backgroundCube_vert,fragmentShader:Ee.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ee.cube_vert,fragmentShader:Ee.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ee.equirect_vert,fragmentShader:Ee.equirect_frag},distanceRGBA:{uniforms:vt([ie.common,ie.displacementmap,{referencePosition:{value:new D},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ee.distanceRGBA_vert,fragmentShader:Ee.distanceRGBA_frag},shadow:{uniforms:vt([ie.lights,ie.fog,{color:{value:new we(0)},opacity:{value:1}}]),vertexShader:Ee.shadow_vert,fragmentShader:Ee.shadow_frag}};Yt.physical={uniforms:vt([Yt.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatNormalScale:{value:new Se(1,1)},clearcoatNormalMap:{value:null},iridescence:{value:0},iridescenceMap:{value:null},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},sheen:{value:0},sheenColor:{value:new we(0)},sheenColorMap:{value:null},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},transmission:{value:0},transmissionMap:{value:null},transmissionSamplerSize:{value:new Se},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},attenuationDistance:{value:0},attenuationColor:{value:new we(0)},specularIntensity:{value:1},specularIntensityMap:{value:null},specularColor:{value:new we(1,1,1)},specularColorMap:{value:null}}]),vertexShader:Ee.meshphysical_vert,fragmentShader:Ee.meshphysical_frag};const Ts={r:0,b:0,g:0};function l_(a,e,t,i,s,r,o){const c=new we(0);let l=r===!0?0:1,u,h,d=null,f=0,g=null;function _(p,x){let E=!1,y=x.isScene===!0?x.background:null;y&&y.isTexture&&(y=(x.backgroundBlurriness>0?t:e).get(y));const M=a.xr,w=M.getSession&&M.getSession();w&&w.environmentBlendMode==="additive"&&(y=null),y===null?m(c,l):y&&y.isColor&&(m(y,1),E=!0),(a.autoClear||E)&&a.clear(a.autoClearColor,a.autoClearDepth,a.autoClearStencil),y&&(y.isCubeTexture||y.mapping===Hs)?(h===void 0&&(h=new Ut(new rs(1,1,1),new Yn({name:"BackgroundCubeMaterial",uniforms:Ei(Yt.backgroundCube.uniforms),vertexShader:Yt.backgroundCube.vertexShader,fragmentShader:Yt.backgroundCube.fragmentShader,side:Rt,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(L,I,b){this.matrixWorld.copyPosition(b.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(h)),h.material.uniforms.envMap.value=y,h.material.uniforms.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=x.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,h.material.toneMapped=y.encoding!==ze,(d!==y||f!==y.version||g!==a.toneMapping)&&(h.material.needsUpdate=!0,d=y,f=y.version,g=a.toneMapping),h.layers.enableAll(),p.unshift(h,h.geometry,h.material,0,0,null)):y&&y.isTexture&&(u===void 0&&(u=new Ut(new ga(2,2),new Yn({name:"BackgroundMaterial",uniforms:Ei(Yt.background.uniforms),vertexShader:Yt.background.vertexShader,fragmentShader:Yt.background.fragmentShader,side:hn,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),Object.defineProperty(u.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(u)),u.material.uniforms.t2D.value=y,u.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,u.material.toneMapped=y.encoding!==ze,y.matrixAutoUpdate===!0&&y.updateMatrix(),u.material.uniforms.uvTransform.value.copy(y.matrix),(d!==y||f!==y.version||g!==a.toneMapping)&&(u.material.needsUpdate=!0,d=y,f=y.version,g=a.toneMapping),u.layers.enableAll(),p.unshift(u,u.geometry,u.material,0,0,null))}function m(p,x){p.getRGB(Ts,Ul(a)),i.buffers.color.setClear(Ts.r,Ts.g,Ts.b,x,o)}return{getClearColor:function(){return c},setClearColor:function(p,x=1){c.set(p),l=x,m(c,l)},getClearAlpha:function(){return l},setClearAlpha:function(p){l=p,m(c,l)},render:_}}function u_(a,e,t,i){const s=a.getParameter(34921),r=i.isWebGL2?null:e.get("OES_vertex_array_object"),o=i.isWebGL2||r!==null,c={},l=p(null);let u=l,h=!1;function d(P,G,Y,Q,q){let ee=!1;if(o){const K=m(Q,Y,G);u!==K&&(u=K,g(u.object)),ee=x(P,Q,Y,q),ee&&E(P,Q,Y,q)}else{const K=G.wireframe===!0;(u.geometry!==Q.id||u.program!==Y.id||u.wireframe!==K)&&(u.geometry=Q.id,u.program=Y.id,u.wireframe=K,ee=!0)}q!==null&&t.update(q,34963),(ee||h)&&(h=!1,b(P,G,Y,Q),q!==null&&a.bindBuffer(34963,t.get(q).buffer))}function f(){return i.isWebGL2?a.createVertexArray():r.createVertexArrayOES()}function g(P){return i.isWebGL2?a.bindVertexArray(P):r.bindVertexArrayOES(P)}function _(P){return i.isWebGL2?a.deleteVertexArray(P):r.deleteVertexArrayOES(P)}function m(P,G,Y){const Q=Y.wireframe===!0;let q=c[P.id];q===void 0&&(q={},c[P.id]=q);let ee=q[G.id];ee===void 0&&(ee={},q[G.id]=ee);let K=ee[Q];return K===void 0&&(K=p(f()),ee[Q]=K),K}function p(P){const G=[],Y=[],Q=[];for(let q=0;q<s;q++)G[q]=0,Y[q]=0,Q[q]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:G,enabledAttributes:Y,attributeDivisors:Q,object:P,attributes:{},index:null}}function x(P,G,Y,Q){const q=u.attributes,ee=G.attributes;let K=0;const ve=Y.getAttributes();for(const z in ve)if(ve[z].location>=0){const se=q[z];let B=ee[z];if(B===void 0&&(z==="instanceMatrix"&&P.instanceMatrix&&(B=P.instanceMatrix),z==="instanceColor"&&P.instanceColor&&(B=P.instanceColor)),se===void 0||se.attribute!==B||B&&se.data!==B.data)return!0;K++}return u.attributesNum!==K||u.index!==Q}function E(P,G,Y,Q){const q={},ee=G.attributes;let K=0;const ve=Y.getAttributes();for(const z in ve)if(ve[z].location>=0){let se=ee[z];se===void 0&&(z==="instanceMatrix"&&P.instanceMatrix&&(se=P.instanceMatrix),z==="instanceColor"&&P.instanceColor&&(se=P.instanceColor));const B={};B.attribute=se,se&&se.data&&(B.data=se.data),q[z]=B,K++}u.attributes=q,u.attributesNum=K,u.index=Q}function y(){const P=u.newAttributes;for(let G=0,Y=P.length;G<Y;G++)P[G]=0}function M(P){w(P,0)}function w(P,G){const Y=u.newAttributes,Q=u.enabledAttributes,q=u.attributeDivisors;Y[P]=1,Q[P]===0&&(a.enableVertexAttribArray(P),Q[P]=1),q[P]!==G&&((i.isWebGL2?a:e.get("ANGLE_instanced_arrays"))[i.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](P,G),q[P]=G)}function L(){const P=u.newAttributes,G=u.enabledAttributes;for(let Y=0,Q=G.length;Y<Q;Y++)G[Y]!==P[Y]&&(a.disableVertexAttribArray(Y),G[Y]=0)}function I(P,G,Y,Q,q,ee){i.isWebGL2===!0&&(Y===5124||Y===5125)?a.vertexAttribIPointer(P,G,Y,q,ee):a.vertexAttribPointer(P,G,Y,Q,q,ee)}function b(P,G,Y,Q){if(i.isWebGL2===!1&&(P.isInstancedMesh||Q.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;y();const q=Q.attributes,ee=Y.getAttributes(),K=G.defaultAttributeValues;for(const ve in ee){const z=ee[ve];if(z.location>=0){let Z=q[ve];if(Z===void 0&&(ve==="instanceMatrix"&&P.instanceMatrix&&(Z=P.instanceMatrix),ve==="instanceColor"&&P.instanceColor&&(Z=P.instanceColor)),Z!==void 0){const se=Z.normalized,B=Z.itemSize,ue=t.get(Z);if(ue===void 0)continue;const he=ue.buffer,fe=ue.type,de=ue.bytesPerElement;if(Z.isInterleavedBufferAttribute){const be=Z.data,Te=be.stride,Ae=Z.offset;if(be.isInstancedInterleavedBuffer){for(let Fe=0;Fe<z.locationSize;Fe++)w(z.location+Fe,be.meshPerAttribute);P.isInstancedMesh!==!0&&Q._maxInstanceCount===void 0&&(Q._maxInstanceCount=be.meshPerAttribute*be.count)}else for(let Fe=0;Fe<z.locationSize;Fe++)M(z.location+Fe);a.bindBuffer(34962,he);for(let Fe=0;Fe<z.locationSize;Fe++)I(z.location+Fe,B/z.locationSize,fe,se,Te*de,(Ae+B/z.locationSize*Fe)*de)}else{if(Z.isInstancedBufferAttribute){for(let be=0;be<z.locationSize;be++)w(z.location+be,Z.meshPerAttribute);P.isInstancedMesh!==!0&&Q._maxInstanceCount===void 0&&(Q._maxInstanceCount=Z.meshPerAttribute*Z.count)}else for(let be=0;be<z.locationSize;be++)M(z.location+be);a.bindBuffer(34962,he);for(let be=0;be<z.locationSize;be++)I(z.location+be,B/z.locationSize,fe,se,B*de,B/z.locationSize*be*de)}}else if(K!==void 0){const se=K[ve];if(se!==void 0)switch(se.length){case 2:a.vertexAttrib2fv(z.location,se);break;case 3:a.vertexAttrib3fv(z.location,se);break;case 4:a.vertexAttrib4fv(z.location,se);break;default:a.vertexAttrib1fv(z.location,se)}}}}L()}function A(){X();for(const P in c){const G=c[P];for(const Y in G){const Q=G[Y];for(const q in Q)_(Q[q].object),delete Q[q];delete G[Y]}delete c[P]}}function F(P){if(c[P.id]===void 0)return;const G=c[P.id];for(const Y in G){const Q=G[Y];for(const q in Q)_(Q[q].object),delete Q[q];delete G[Y]}delete c[P.id]}function $(P){for(const G in c){const Y=c[G];if(Y[P.id]===void 0)continue;const Q=Y[P.id];for(const q in Q)_(Q[q].object),delete Q[q];delete Y[P.id]}}function X(){U(),h=!0,u!==l&&(u=l,g(u.object))}function U(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:d,reset:X,resetDefaultState:U,dispose:A,releaseStatesOfGeometry:F,releaseStatesOfProgram:$,initAttributes:y,enableAttribute:M,disableUnusedAttributes:L}}function h_(a,e,t,i){const s=i.isWebGL2;let r;function o(u){r=u}function c(u,h){a.drawArrays(r,u,h),t.update(h,r,1)}function l(u,h,d){if(d===0)return;let f,g;if(s)f=a,g="drawArraysInstanced";else if(f=e.get("ANGLE_instanced_arrays"),g="drawArraysInstancedANGLE",f===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}f[g](r,u,h,d),t.update(h,r,d)}this.setMode=o,this.render=c,this.renderInstances=l}function d_(a,e,t){let i;function s(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){const I=e.get("EXT_texture_filter_anisotropic");i=a.getParameter(I.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function r(I){if(I==="highp"){if(a.getShaderPrecisionFormat(35633,36338).precision>0&&a.getShaderPrecisionFormat(35632,36338).precision>0)return"highp";I="mediump"}return I==="mediump"&&a.getShaderPrecisionFormat(35633,36337).precision>0&&a.getShaderPrecisionFormat(35632,36337).precision>0?"mediump":"lowp"}const o=typeof WebGL2RenderingContext<"u"&&a instanceof WebGL2RenderingContext;let c=t.precision!==void 0?t.precision:"highp";const l=r(c);l!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",l,"instead."),c=l);const u=o||e.has("WEBGL_draw_buffers"),h=t.logarithmicDepthBuffer===!0,d=a.getParameter(34930),f=a.getParameter(35660),g=a.getParameter(3379),_=a.getParameter(34076),m=a.getParameter(34921),p=a.getParameter(36347),x=a.getParameter(36348),E=a.getParameter(36349),y=f>0,M=o||e.has("OES_texture_float"),w=y&&M,L=o?a.getParameter(36183):0;return{isWebGL2:o,drawBuffers:u,getMaxAnisotropy:s,getMaxPrecision:r,precision:c,logarithmicDepthBuffer:h,maxTextures:d,maxVertexTextures:f,maxTextureSize:g,maxCubemapSize:_,maxAttributes:m,maxVertexUniforms:p,maxVaryings:x,maxFragmentUniforms:E,vertexTextures:y,floatFragmentTextures:M,floatVertexTextures:w,maxSamples:L}}function f_(a){const e=this;let t=null,i=0,s=!1,r=!1;const o=new Pn,c=new bt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,f){const g=d.length!==0||f||i!==0||s;return s=f,i=d.length,g},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(d,f){t=h(d,f,0)},this.setState=function(d,f,g){const _=d.clippingPlanes,m=d.clipIntersection,p=d.clipShadows,x=a.get(d);if(!s||_===null||_.length===0||r&&!p)r?h(null):u();else{const E=r?0:i,y=E*4;let M=x.clippingState||null;l.value=M,M=h(_,f,y,g);for(let w=0;w!==y;++w)M[w]=t[w];x.clippingState=M,this.numIntersection=m?this.numPlanes:0,this.numPlanes+=E}};function u(){l.value!==t&&(l.value=t,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function h(d,f,g,_){const m=d!==null?d.length:0;let p=null;if(m!==0){if(p=l.value,_!==!0||p===null){const x=g+m*4,E=f.matrixWorldInverse;c.getNormalMatrix(E),(p===null||p.length<x)&&(p=new Float32Array(x));for(let y=0,M=g;y!==m;++y,M+=4)o.copy(d[y]).applyMatrix4(E,c),o.normal.toArray(p,M),p[M+3]=o.constant}l.value=p,l.needsUpdate=!0}return e.numPlanes=m,e.numIntersection=0,p}}function p_(a){let e=new WeakMap;function t(o,c){return c===Yr?o.mapping=bi:c===Kr&&(o.mapping=Mi),o}function i(o){if(o&&o.isTexture&&o.isRenderTargetTexture===!1){const c=o.mapping;if(c===Yr||c===Kr)if(e.has(o)){const l=e.get(o).texture;return t(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const u=new Ap(l.height/2);return u.fromEquirectangularTexture(a,o),e.set(o,u),o.addEventListener("dispose",s),t(u.texture,o.mapping)}else return null}}return o}function s(o){const c=o.target;c.removeEventListener("dispose",s);const l=e.get(c);l!==void 0&&(e.delete(c),l.dispose())}function r(){e=new WeakMap}return{get:i,dispose:r}}class _a extends Bl{constructor(e=-1,t=1,i=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=i-e,o=i+e,c=s+t,l=s-t;if(this.view!==null&&this.view.enabled){const u=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=u*this.view.offsetX,o=r+u*this.view.width,c-=h*this.view.offsetY,l=c-h*this.view.height}this.projectionMatrix.makeOrthographic(r,o,c,l,this.near,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const gi=4,ko=[.125,.215,.35,.446,.526,.582],On=20,Ir=new _a,zo=new we;let Pr=null;const Nn=(1+Math.sqrt(5))/2,pi=1/Nn,Go=[new D(1,1,1),new D(-1,1,1),new D(1,1,-1),new D(-1,1,-1),new D(0,Nn,pi),new D(0,Nn,-pi),new D(pi,0,Nn),new D(-pi,0,Nn),new D(Nn,pi,0),new D(-Nn,pi,0)];class Vo{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,i=.1,s=100){Pr=this._renderer.getRenderTarget(),this._setSize(256);const r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(e,i,s,r),t>0&&this._blur(r,0,0,t),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=jo(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Wo(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Pr),e.scissorTest=!1,Es(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===bi||e.mapping===Mi?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Pr=this._renderer.getRenderTarget();const i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:St,minFilter:St,generateMipmaps:!1,type:Ji,format:Ft,encoding:Xn,depthBuffer:!1},s=Ho(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Ho(e,t,i);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=m_(r)),this._blurMaterial=g_(r,e,t)}return s}_compileMaterial(e){const t=new Ut(this._lodPlanes[0],e);this._renderer.compile(t,Ir)}_sceneToCubeUV(e,t,i,s){const c=new yt(90,1,t,i),l=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],h=this._renderer,d=h.autoClear,f=h.toneMapping;h.getClearColor(zo),h.toneMapping=un,h.autoClear=!1;const g=new Bn({name:"PMREM.Background",side:Rt,depthWrite:!1,depthTest:!1}),_=new Ut(new rs,g);let m=!1;const p=e.background;p?p.isColor&&(g.color.copy(p),e.background=null,m=!0):(g.color.copy(zo),m=!0);for(let x=0;x<6;x++){const E=x%3;E===0?(c.up.set(0,l[x],0),c.lookAt(u[x],0,0)):E===1?(c.up.set(0,0,l[x]),c.lookAt(0,u[x],0)):(c.up.set(0,l[x],0),c.lookAt(0,0,u[x]));const y=this._cubeSize;Es(s,E*y,x>2?y:0,y,y),h.setRenderTarget(s),m&&h.render(_,c),h.render(e,c)}_.geometry.dispose(),_.material.dispose(),h.toneMapping=f,h.autoClear=d,e.background=p}_textureToCubeUV(e,t){const i=this._renderer,s=e.mapping===bi||e.mapping===Mi;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=jo()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Wo());const r=s?this._cubemapMaterial:this._equirectMaterial,o=new Ut(this._lodPlanes[0],r),c=r.uniforms;c.envMap.value=e;const l=this._cubeSize;Es(t,0,0,3*l,2*l),i.setRenderTarget(t),i.render(o,Ir)}_applyPMREM(e){const t=this._renderer,i=t.autoClear;t.autoClear=!1;for(let s=1;s<this._lodPlanes.length;s++){const r=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),o=Go[(s-1)%Go.length];this._blur(e,s-1,s,r,o)}t.autoClear=i}_blur(e,t,i,s,r){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,i,s,"latitudinal",r),this._halfBlur(o,e,i,i,s,"longitudinal",r)}_halfBlur(e,t,i,s,r,o,c){const l=this._renderer,u=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,d=new Ut(this._lodPlanes[s],u),f=u.uniforms,g=this._sizeLods[i]-1,_=isFinite(r)?Math.PI/(2*g):2*Math.PI/(2*On-1),m=r/_,p=isFinite(r)?1+Math.floor(h*m):On;p>On&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${On}`);const x=[];let E=0;for(let I=0;I<On;++I){const b=I/m,A=Math.exp(-b*b/2);x.push(A),I===0?E+=A:I<p&&(E+=2*A)}for(let I=0;I<x.length;I++)x[I]=x[I]/E;f.envMap.value=e.texture,f.samples.value=p,f.weights.value=x,f.latitudinal.value=o==="latitudinal",c&&(f.poleAxis.value=c);const{_lodMax:y}=this;f.dTheta.value=_,f.mipInt.value=y-i;const M=this._sizeLods[s],w=3*M*(s>y-gi?s-y+gi:0),L=4*(this._cubeSize-M);Es(t,w,L,3*M,2*M),l.setRenderTarget(t),l.render(d,Ir)}}function m_(a){const e=[],t=[],i=[];let s=a;const r=a-gi+1+ko.length;for(let o=0;o<r;o++){const c=Math.pow(2,s);t.push(c);let l=1/c;o>a-gi?l=ko[o-a+gi-1]:o===0&&(l=0),i.push(l);const u=1/(c-2),h=-u,d=1+u,f=[h,h,d,h,d,d,h,h,d,d,h,d],g=6,_=6,m=3,p=2,x=1,E=new Float32Array(m*_*g),y=new Float32Array(p*_*g),M=new Float32Array(x*_*g);for(let L=0;L<g;L++){const I=L%3*2/3-1,b=L>2?0:-1,A=[I,b,0,I+2/3,b,0,I+2/3,b+1,0,I,b,0,I+2/3,b+1,0,I,b+1,0];E.set(A,m*_*L),y.set(f,p*_*L);const F=[L,L,L,L,L,L];M.set(F,x*_*L)}const w=new kt;w.setAttribute("position",new Mt(E,m)),w.setAttribute("uv",new Mt(y,p)),w.setAttribute("faceIndex",new Mt(M,x)),e.push(w),s>gi&&s--}return{lodPlanes:e,sizeLods:t,sigmas:i}}function Ho(a,e,t){const i=new $n(a,e,t);return i.texture.mapping=Hs,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Es(a,e,t,i,s){a.viewport.set(e,t,i,s),a.scissor.set(e,t,i,s)}function g_(a,e,t){const i=new Float32Array(On),s=new D(0,1,0);return new Yn({name:"SphericalGaussianBlur",defines:{n:On,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${a}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:xa(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:wn,depthTest:!1,depthWrite:!1})}function Wo(){return new Yn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:xa(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:wn,depthTest:!1,depthWrite:!1})}function jo(){return new Yn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:xa(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:wn,depthTest:!1,depthWrite:!1})}function xa(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function __(a){let e=new WeakMap,t=null;function i(c){if(c&&c.isTexture){const l=c.mapping,u=l===Yr||l===Kr,h=l===bi||l===Mi;if(u||h)if(c.isRenderTargetTexture&&c.needsPMREMUpdate===!0){c.needsPMREMUpdate=!1;let d=e.get(c);return t===null&&(t=new Vo(a)),d=u?t.fromEquirectangular(c,d):t.fromCubemap(c,d),e.set(c,d),d.texture}else{if(e.has(c))return e.get(c).texture;{const d=c.image;if(u&&d&&d.height>0||h&&d&&s(d)){t===null&&(t=new Vo(a));const f=u?t.fromEquirectangular(c):t.fromCubemap(c);return e.set(c,f),c.addEventListener("dispose",r),f.texture}else return null}}}return c}function s(c){let l=0;const u=6;for(let h=0;h<u;h++)c[h]!==void 0&&l++;return l===u}function r(c){const l=c.target;l.removeEventListener("dispose",r);const u=e.get(l);u!==void 0&&(e.delete(l),u.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:i,dispose:o}}function x_(a){const e={};function t(i){if(e[i]!==void 0)return e[i];let s;switch(i){case"WEBGL_depth_texture":s=a.getExtension("WEBGL_depth_texture")||a.getExtension("MOZ_WEBGL_depth_texture")||a.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=a.getExtension("EXT_texture_filter_anisotropic")||a.getExtension("MOZ_EXT_texture_filter_anisotropic")||a.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=a.getExtension("WEBGL_compressed_texture_s3tc")||a.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||a.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=a.getExtension("WEBGL_compressed_texture_pvrtc")||a.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=a.getExtension(i)}return e[i]=s,s}return{has:function(i){return t(i)!==null},init:function(i){i.isWebGL2?t("EXT_color_buffer_float"):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(i){const s=t(i);return s===null&&console.warn("THREE.WebGLRenderer: "+i+" extension not supported."),s}}}function v_(a,e,t,i){const s={},r=new WeakMap;function o(d){const f=d.target;f.index!==null&&e.remove(f.index);for(const _ in f.attributes)e.remove(f.attributes[_]);f.removeEventListener("dispose",o),delete s[f.id];const g=r.get(f);g&&(e.remove(g),r.delete(f)),i.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,t.memory.geometries--}function c(d,f){return s[f.id]===!0||(f.addEventListener("dispose",o),s[f.id]=!0,t.memory.geometries++),f}function l(d){const f=d.attributes;for(const _ in f)e.update(f[_],34962);const g=d.morphAttributes;for(const _ in g){const m=g[_];for(let p=0,x=m.length;p<x;p++)e.update(m[p],34962)}}function u(d){const f=[],g=d.index,_=d.attributes.position;let m=0;if(g!==null){const E=g.array;m=g.version;for(let y=0,M=E.length;y<M;y+=3){const w=E[y+0],L=E[y+1],I=E[y+2];f.push(w,L,L,I,I,w)}}else{const E=_.array;m=_.version;for(let y=0,M=E.length/3-1;y<M;y+=3){const w=y+0,L=y+1,I=y+2;f.push(w,L,L,I,I,w)}}const p=new(Ll(f)?Fl:Ol)(f,1);p.version=m;const x=r.get(d);x&&e.remove(x),r.set(d,p)}function h(d){const f=r.get(d);if(f){const g=d.index;g!==null&&f.version<g.version&&u(d)}else u(d);return r.get(d)}return{get:c,update:l,getWireframeAttribute:h}}function y_(a,e,t,i){const s=i.isWebGL2;let r;function o(f){r=f}let c,l;function u(f){c=f.type,l=f.bytesPerElement}function h(f,g){a.drawElements(r,g,c,f*l),t.update(g,r,1)}function d(f,g,_){if(_===0)return;let m,p;if(s)m=a,p="drawElementsInstanced";else if(m=e.get("ANGLE_instanced_arrays"),p="drawElementsInstancedANGLE",m===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}m[p](r,g,c,f*l,_),t.update(g,r,_)}this.setMode=o,this.setIndex=u,this.render=h,this.renderInstances=d}function b_(a){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(r,o,c){switch(t.calls++,o){case 4:t.triangles+=c*(r/3);break;case 1:t.lines+=c*(r/2);break;case 3:t.lines+=c*(r-1);break;case 2:t.lines+=c*r;break;case 0:t.points+=c*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function s(){t.frame++,t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:i}}function M_(a,e){return a[0]-e[0]}function S_(a,e){return Math.abs(e[1])-Math.abs(a[1])}function w_(a,e,t){const i={},s=new Float32Array(8),r=new WeakMap,o=new We,c=[];for(let u=0;u<8;u++)c[u]=[u,0];function l(u,h,d){const f=u.morphTargetInfluences;if(e.isWebGL2===!0){const _=h.morphAttributes.position||h.morphAttributes.normal||h.morphAttributes.color,m=_!==void 0?_.length:0;let p=r.get(h);if(p===void 0||p.count!==m){let G=function(){U.dispose(),r.delete(h),h.removeEventListener("dispose",G)};var g=G;p!==void 0&&p.texture.dispose();const y=h.morphAttributes.position!==void 0,M=h.morphAttributes.normal!==void 0,w=h.morphAttributes.color!==void 0,L=h.morphAttributes.position||[],I=h.morphAttributes.normal||[],b=h.morphAttributes.color||[];let A=0;y===!0&&(A=1),M===!0&&(A=2),w===!0&&(A=3);let F=h.attributes.position.count*A,$=1;F>e.maxTextureSize&&($=Math.ceil(F/e.maxTextureSize),F=e.maxTextureSize);const X=new Float32Array(F*$*4*m),U=new Il(X,F,$,m);U.type=vn,U.needsUpdate=!0;const P=A*4;for(let Y=0;Y<m;Y++){const Q=L[Y],q=I[Y],ee=b[Y],K=F*$*4*Y;for(let ve=0;ve<Q.count;ve++){const z=ve*P;y===!0&&(o.fromBufferAttribute(Q,ve),X[K+z+0]=o.x,X[K+z+1]=o.y,X[K+z+2]=o.z,X[K+z+3]=0),M===!0&&(o.fromBufferAttribute(q,ve),X[K+z+4]=o.x,X[K+z+5]=o.y,X[K+z+6]=o.z,X[K+z+7]=0),w===!0&&(o.fromBufferAttribute(ee,ve),X[K+z+8]=o.x,X[K+z+9]=o.y,X[K+z+10]=o.z,X[K+z+11]=ee.itemSize===4?o.w:1)}}p={count:m,texture:U,size:new Se(F,$)},r.set(h,p),h.addEventListener("dispose",G)}let x=0;for(let y=0;y<f.length;y++)x+=f[y];const E=h.morphTargetsRelative?1:1-x;d.getUniforms().setValue(a,"morphTargetBaseInfluence",E),d.getUniforms().setValue(a,"morphTargetInfluences",f),d.getUniforms().setValue(a,"morphTargetsTexture",p.texture,t),d.getUniforms().setValue(a,"morphTargetsTextureSize",p.size)}else{const _=f===void 0?0:f.length;let m=i[h.id];if(m===void 0||m.length!==_){m=[];for(let M=0;M<_;M++)m[M]=[M,0];i[h.id]=m}for(let M=0;M<_;M++){const w=m[M];w[0]=M,w[1]=f[M]}m.sort(S_);for(let M=0;M<8;M++)M<_&&m[M][1]?(c[M][0]=m[M][0],c[M][1]=m[M][1]):(c[M][0]=Number.MAX_SAFE_INTEGER,c[M][1]=0);c.sort(M_);const p=h.morphAttributes.position,x=h.morphAttributes.normal;let E=0;for(let M=0;M<8;M++){const w=c[M],L=w[0],I=w[1];L!==Number.MAX_SAFE_INTEGER&&I?(p&&h.getAttribute("morphTarget"+M)!==p[L]&&h.setAttribute("morphTarget"+M,p[L]),x&&h.getAttribute("morphNormal"+M)!==x[L]&&h.setAttribute("morphNormal"+M,x[L]),s[M]=I,E+=I):(p&&h.hasAttribute("morphTarget"+M)===!0&&h.deleteAttribute("morphTarget"+M),x&&h.hasAttribute("morphNormal"+M)===!0&&h.deleteAttribute("morphNormal"+M),s[M]=0)}const y=h.morphTargetsRelative?1:1-E;d.getUniforms().setValue(a,"morphTargetBaseInfluence",y),d.getUniforms().setValue(a,"morphTargetInfluences",s)}}return{update:l}}function T_(a,e,t,i){let s=new WeakMap;function r(l){const u=i.render.frame,h=l.geometry,d=e.get(l,h);return s.get(d)!==u&&(e.update(d),s.set(d,u)),l.isInstancedMesh&&(l.hasEventListener("dispose",c)===!1&&l.addEventListener("dispose",c),t.update(l.instanceMatrix,34962),l.instanceColor!==null&&t.update(l.instanceColor,34962)),d}function o(){s=new WeakMap}function c(l){const u=l.target;u.removeEventListener("dispose",c),t.remove(u.instanceMatrix),u.instanceColor!==null&&t.remove(u.instanceColor)}return{update:r,dispose:o}}const Gl=new lt,Vl=new Il,Hl=new hp,Wl=new kl,qo=[],Xo=[],$o=new Float32Array(16),Yo=new Float32Array(9),Ko=new Float32Array(4);function Ri(a,e,t){const i=a[0];if(i<=0||i>0)return a;const s=e*t;let r=qo[s];if(r===void 0&&(r=new Float32Array(s),qo[s]=r),e!==0){i.toArray(r,0);for(let o=1,c=0;o!==e;++o)c+=t,a[o].toArray(r,c)}return r}function et(a,e){if(a.length!==e.length)return!1;for(let t=0,i=a.length;t<i;t++)if(a[t]!==e[t])return!1;return!0}function tt(a,e){for(let t=0,i=e.length;t<i;t++)a[t]=e[t]}function js(a,e){let t=Xo[e];t===void 0&&(t=new Int32Array(e),Xo[e]=t);for(let i=0;i!==e;++i)t[i]=a.allocateTextureUnit();return t}function E_(a,e){const t=this.cache;t[0]!==e&&(a.uniform1f(this.addr,e),t[0]=e)}function A_(a,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(a.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(et(t,e))return;a.uniform2fv(this.addr,e),tt(t,e)}}function C_(a,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(a.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(a.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(et(t,e))return;a.uniform3fv(this.addr,e),tt(t,e)}}function L_(a,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(a.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(et(t,e))return;a.uniform4fv(this.addr,e),tt(t,e)}}function R_(a,e){const t=this.cache,i=e.elements;if(i===void 0){if(et(t,e))return;a.uniformMatrix2fv(this.addr,!1,e),tt(t,e)}else{if(et(t,i))return;Ko.set(i),a.uniformMatrix2fv(this.addr,!1,Ko),tt(t,i)}}function D_(a,e){const t=this.cache,i=e.elements;if(i===void 0){if(et(t,e))return;a.uniformMatrix3fv(this.addr,!1,e),tt(t,e)}else{if(et(t,i))return;Yo.set(i),a.uniformMatrix3fv(this.addr,!1,Yo),tt(t,i)}}function I_(a,e){const t=this.cache,i=e.elements;if(i===void 0){if(et(t,e))return;a.uniformMatrix4fv(this.addr,!1,e),tt(t,e)}else{if(et(t,i))return;$o.set(i),a.uniformMatrix4fv(this.addr,!1,$o),tt(t,i)}}function P_(a,e){const t=this.cache;t[0]!==e&&(a.uniform1i(this.addr,e),t[0]=e)}function N_(a,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(a.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(et(t,e))return;a.uniform2iv(this.addr,e),tt(t,e)}}function O_(a,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(a.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(et(t,e))return;a.uniform3iv(this.addr,e),tt(t,e)}}function F_(a,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(a.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(et(t,e))return;a.uniform4iv(this.addr,e),tt(t,e)}}function U_(a,e){const t=this.cache;t[0]!==e&&(a.uniform1ui(this.addr,e),t[0]=e)}function B_(a,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(a.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(et(t,e))return;a.uniform2uiv(this.addr,e),tt(t,e)}}function k_(a,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(a.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(et(t,e))return;a.uniform3uiv(this.addr,e),tt(t,e)}}function z_(a,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(a.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(et(t,e))return;a.uniform4uiv(this.addr,e),tt(t,e)}}function G_(a,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(a.uniform1i(this.addr,s),i[0]=s),t.setTexture2D(e||Gl,s)}function V_(a,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(a.uniform1i(this.addr,s),i[0]=s),t.setTexture3D(e||Hl,s)}function H_(a,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(a.uniform1i(this.addr,s),i[0]=s),t.setTextureCube(e||Wl,s)}function W_(a,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(a.uniform1i(this.addr,s),i[0]=s),t.setTexture2DArray(e||Vl,s)}function j_(a){switch(a){case 5126:return E_;case 35664:return A_;case 35665:return C_;case 35666:return L_;case 35674:return R_;case 35675:return D_;case 35676:return I_;case 5124:case 35670:return P_;case 35667:case 35671:return N_;case 35668:case 35672:return O_;case 35669:case 35673:return F_;case 5125:return U_;case 36294:return B_;case 36295:return k_;case 36296:return z_;case 35678:case 36198:case 36298:case 36306:case 35682:return G_;case 35679:case 36299:case 36307:return V_;case 35680:case 36300:case 36308:case 36293:return H_;case 36289:case 36303:case 36311:case 36292:return W_}}function q_(a,e){a.uniform1fv(this.addr,e)}function X_(a,e){const t=Ri(e,this.size,2);a.uniform2fv(this.addr,t)}function $_(a,e){const t=Ri(e,this.size,3);a.uniform3fv(this.addr,t)}function Y_(a,e){const t=Ri(e,this.size,4);a.uniform4fv(this.addr,t)}function K_(a,e){const t=Ri(e,this.size,4);a.uniformMatrix2fv(this.addr,!1,t)}function Z_(a,e){const t=Ri(e,this.size,9);a.uniformMatrix3fv(this.addr,!1,t)}function J_(a,e){const t=Ri(e,this.size,16);a.uniformMatrix4fv(this.addr,!1,t)}function Q_(a,e){a.uniform1iv(this.addr,e)}function e0(a,e){a.uniform2iv(this.addr,e)}function t0(a,e){a.uniform3iv(this.addr,e)}function n0(a,e){a.uniform4iv(this.addr,e)}function i0(a,e){a.uniform1uiv(this.addr,e)}function s0(a,e){a.uniform2uiv(this.addr,e)}function r0(a,e){a.uniform3uiv(this.addr,e)}function a0(a,e){a.uniform4uiv(this.addr,e)}function o0(a,e,t){const i=this.cache,s=e.length,r=js(t,s);et(i,r)||(a.uniform1iv(this.addr,r),tt(i,r));for(let o=0;o!==s;++o)t.setTexture2D(e[o]||Gl,r[o])}function c0(a,e,t){const i=this.cache,s=e.length,r=js(t,s);et(i,r)||(a.uniform1iv(this.addr,r),tt(i,r));for(let o=0;o!==s;++o)t.setTexture3D(e[o]||Hl,r[o])}function l0(a,e,t){const i=this.cache,s=e.length,r=js(t,s);et(i,r)||(a.uniform1iv(this.addr,r),tt(i,r));for(let o=0;o!==s;++o)t.setTextureCube(e[o]||Wl,r[o])}function u0(a,e,t){const i=this.cache,s=e.length,r=js(t,s);et(i,r)||(a.uniform1iv(this.addr,r),tt(i,r));for(let o=0;o!==s;++o)t.setTexture2DArray(e[o]||Vl,r[o])}function h0(a){switch(a){case 5126:return q_;case 35664:return X_;case 35665:return $_;case 35666:return Y_;case 35674:return K_;case 35675:return Z_;case 35676:return J_;case 5124:case 35670:return Q_;case 35667:case 35671:return e0;case 35668:case 35672:return t0;case 35669:case 35673:return n0;case 5125:return i0;case 36294:return s0;case 36295:return r0;case 36296:return a0;case 35678:case 36198:case 36298:case 36306:case 35682:return o0;case 35679:case 36299:case 36307:return c0;case 35680:case 36300:case 36308:case 36293:return l0;case 36289:case 36303:case 36311:case 36292:return u0}}class d0{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.setValue=j_(t.type)}}class f0{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.size=t.size,this.setValue=h0(t.type)}}class p0{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){const s=this.seq;for(let r=0,o=s.length;r!==o;++r){const c=s[r];c.setValue(e,t[c.id],i)}}}const Nr=/(\w+)(\])?(\[|\.)?/g;function Zo(a,e){a.seq.push(e),a.map[e.id]=e}function m0(a,e,t){const i=a.name,s=i.length;for(Nr.lastIndex=0;;){const r=Nr.exec(i),o=Nr.lastIndex;let c=r[1];const l=r[2]==="]",u=r[3];if(l&&(c=c|0),u===void 0||u==="["&&o+2===s){Zo(t,u===void 0?new d0(c,a,e):new f0(c,a,e));break}else{let d=t.map[c];d===void 0&&(d=new p0(c),Zo(t,d)),t=d}}}class Ps{constructor(e,t){this.seq=[],this.map={};const i=e.getProgramParameter(t,35718);for(let s=0;s<i;++s){const r=e.getActiveUniform(t,s),o=e.getUniformLocation(t,r.name);m0(r,o,this)}}setValue(e,t,i,s){const r=this.map[t];r!==void 0&&r.setValue(e,i,s)}setOptional(e,t,i){const s=t[i];s!==void 0&&this.setValue(e,i,s)}static upload(e,t,i,s){for(let r=0,o=t.length;r!==o;++r){const c=t[r],l=i[c.id];l.needsUpdate!==!1&&c.setValue(e,l.value,s)}}static seqWithValue(e,t){const i=[];for(let s=0,r=e.length;s!==r;++s){const o=e[s];o.id in t&&i.push(o)}return i}}function Jo(a,e,t){const i=a.createShader(e);return a.shaderSource(i,t),a.compileShader(i),i}let g0=0;function _0(a,e){const t=a.split(`
`),i=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let o=s;o<r;o++){const c=o+1;i.push(`${c===e?">":" "} ${c}: ${t[o]}`)}return i.join(`
`)}function x0(a){switch(a){case Xn:return["Linear","( value )"];case ze:return["sRGB","( value )"];default:return console.warn("THREE.WebGLProgram: Unsupported encoding:",a),["Linear","( value )"]}}function Qo(a,e,t){const i=a.getShaderParameter(e,35713),s=a.getShaderInfoLog(e).trim();if(i&&s==="")return"";const r=/ERROR: 0:(\d+)/.exec(s);if(r){const o=parseInt(r[1]);return t.toUpperCase()+`

`+s+`

`+_0(a.getShaderSource(e),o)}else return s}function v0(a,e){const t=x0(e);return"vec4 "+a+"( vec4 value ) { return LinearTo"+t[0]+t[1]+"; }"}function y0(a,e){let t;switch(e){case xf:t="Linear";break;case vf:t="Reinhard";break;case yf:t="OptimizedCineon";break;case bf:t="ACESFilmic";break;case Mf:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+a+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function b0(a){return[a.extensionDerivatives||a.envMapCubeUVHeight||a.bumpMap||a.tangentSpaceNormalMap||a.clearcoatNormalMap||a.flatShading||a.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(a.extensionFragDepth||a.logarithmicDepthBuffer)&&a.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",a.extensionDrawBuffers&&a.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(a.extensionShaderTextureLOD||a.envMap||a.transmission)&&a.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(Xi).join(`
`)}function M0(a){const e=[];for(const t in a){const i=a[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function S0(a,e){const t={},i=a.getProgramParameter(e,35721);for(let s=0;s<i;s++){const r=a.getActiveAttrib(e,s),o=r.name;let c=1;r.type===35674&&(c=2),r.type===35675&&(c=3),r.type===35676&&(c=4),t[o]={type:r.type,location:a.getAttribLocation(e,o),locationSize:c}}return t}function Xi(a){return a!==""}function ec(a,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return a.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function tc(a,e){return a.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const w0=/^[ \t]*#include +<([\w\d./]+)>/gm;function na(a){return a.replace(w0,T0)}function T0(a,e){const t=Ee[e];if(t===void 0)throw new Error("Can not resolve #include <"+e+">");return na(t)}const E0=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function nc(a){return a.replace(E0,A0)}function A0(a,e,t,i){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function ic(a){let e="precision "+a.precision+` float;
precision `+a.precision+" int;";return a.precision==="highp"?e+=`
#define HIGH_PRECISION`:a.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:a.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function C0(a){let e="SHADOWMAP_TYPE_BASIC";return a.shadowMapType===_l?e="SHADOWMAP_TYPE_PCF":a.shadowMapType===Yd?e="SHADOWMAP_TYPE_PCF_SOFT":a.shadowMapType===qi&&(e="SHADOWMAP_TYPE_VSM"),e}function L0(a){let e="ENVMAP_TYPE_CUBE";if(a.envMap)switch(a.envMapMode){case bi:case Mi:e="ENVMAP_TYPE_CUBE";break;case Hs:e="ENVMAP_TYPE_CUBE_UV";break}return e}function R0(a){let e="ENVMAP_MODE_REFLECTION";if(a.envMap)switch(a.envMapMode){case Mi:e="ENVMAP_MODE_REFRACTION";break}return e}function D0(a){let e="ENVMAP_BLENDING_NONE";if(a.envMap)switch(a.combine){case yl:e="ENVMAP_BLENDING_MULTIPLY";break;case gf:e="ENVMAP_BLENDING_MIX";break;case _f:e="ENVMAP_BLENDING_ADD";break}return e}function I0(a){const e=a.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:i,maxMip:t}}function P0(a,e,t,i){const s=a.getContext(),r=t.defines;let o=t.vertexShader,c=t.fragmentShader;const l=C0(t),u=L0(t),h=R0(t),d=D0(t),f=I0(t),g=t.isWebGL2?"":b0(t),_=M0(r),m=s.createProgram();let p,x,E=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(p=[_].filter(Xi).join(`
`),p.length>0&&(p+=`
`),x=[g,_].filter(Xi).join(`
`),x.length>0&&(x+=`
`)):(p=[ic(t),"#define SHADER_NAME "+t.shaderName,_,t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.supportsVertexTextures?"#define VERTEX_TEXTURES":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMap&&t.objectSpaceNormalMap?"#define OBJECTSPACE_NORMALMAP":"",t.normalMap&&t.tangentSpaceNormalMap?"#define TANGENTSPACE_NORMALMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.displacementMap&&t.supportsVertexTextures?"#define USE_DISPLACEMENTMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularIntensityMap?"#define USE_SPECULARINTENSITYMAP":"",t.specularColorMap?"#define USE_SPECULARCOLORMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEENCOLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEENROUGHNESSMAP":"",t.vertexTangents?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUvs?"#define USE_UV":"",t.uvsVertexOnly?"#define UVS_VERTEX_ONLY":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors&&t.isWebGL2?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Xi).join(`
`),x=[g,ic(t),"#define SHADER_NAME "+t.shaderName,_,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.envMap?"#define "+h:"",t.envMap?"#define "+d:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMap&&t.objectSpaceNormalMap?"#define OBJECTSPACE_NORMALMAP":"",t.normalMap&&t.tangentSpaceNormalMap?"#define TANGENTSPACE_NORMALMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularIntensityMap?"#define USE_SPECULARINTENSITYMAP":"",t.specularColorMap?"#define USE_SPECULARCOLORMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEENCOLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEENROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.vertexTangents?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUvs?"#define USE_UV":"",t.uvsVertexOnly?"#define UVS_VERTEX_ONLY":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==un?"#define TONE_MAPPING":"",t.toneMapping!==un?Ee.tonemapping_pars_fragment:"",t.toneMapping!==un?y0("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Ee.encodings_pars_fragment,v0("linearToOutputTexel",t.outputEncoding),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Xi).join(`
`)),o=na(o),o=ec(o,t),o=tc(o,t),c=na(c),c=ec(c,t),c=tc(c,t),o=nc(o),c=nc(c),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(E=`#version 300 es
`,p=["precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,x=["#define varying in",t.glslVersion===Eo?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Eo?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+x);const y=E+p+o,M=E+x+c,w=Jo(s,35633,y),L=Jo(s,35632,M);if(s.attachShader(m,w),s.attachShader(m,L),t.index0AttributeName!==void 0?s.bindAttribLocation(m,0,t.index0AttributeName):t.morphTargets===!0&&s.bindAttribLocation(m,0,"position"),s.linkProgram(m),a.debug.checkShaderErrors){const A=s.getProgramInfoLog(m).trim(),F=s.getShaderInfoLog(w).trim(),$=s.getShaderInfoLog(L).trim();let X=!0,U=!0;if(s.getProgramParameter(m,35714)===!1){X=!1;const P=Qo(s,w,"vertex"),G=Qo(s,L,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(m,35715)+`

Program Info Log: `+A+`
`+P+`
`+G)}else A!==""?console.warn("THREE.WebGLProgram: Program Info Log:",A):(F===""||$==="")&&(U=!1);U&&(this.diagnostics={runnable:X,programLog:A,vertexShader:{log:F,prefix:p},fragmentShader:{log:$,prefix:x}})}s.deleteShader(w),s.deleteShader(L);let I;this.getUniforms=function(){return I===void 0&&(I=new Ps(s,m)),I};let b;return this.getAttributes=function(){return b===void 0&&(b=S0(s,m)),b},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(m),this.program=void 0},this.name=t.shaderName,this.id=g0++,this.cacheKey=e,this.usedTimes=1,this.program=m,this.vertexShader=w,this.fragmentShader=L,this}let N0=0;class O0{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,i=e.fragmentShader,s=this._getShaderStage(t),r=this._getShaderStage(i),o=this._getShaderCacheForMaterial(e);return o.has(s)===!1&&(o.add(s),s.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){const t=this.shaderCache;let i=t.get(e);return i===void 0&&(i=new F0(e),t.set(e,i)),i}}class F0{constructor(e){this.id=N0++,this.code=e,this.usedTimes=0}}function U0(a,e,t,i,s,r,o){const c=new Pl,l=new O0,u=[],h=s.isWebGL2,d=s.logarithmicDepthBuffer,f=s.vertexTextures;let g=s.precision;const _={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function m(b,A,F,$,X){const U=$.fog,P=X.geometry,G=b.isMeshStandardMaterial?$.environment:null,Y=(b.isMeshStandardMaterial?t:e).get(b.envMap||G),Q=Y&&Y.mapping===Hs?Y.image.height:null,q=_[b.type];b.precision!==null&&(g=s.getMaxPrecision(b.precision),g!==b.precision&&console.warn("THREE.WebGLProgram.getParameters:",b.precision,"not supported, using",g,"instead."));const ee=P.morphAttributes.position||P.morphAttributes.normal||P.morphAttributes.color,K=ee!==void 0?ee.length:0;let ve=0;P.morphAttributes.position!==void 0&&(ve=1),P.morphAttributes.normal!==void 0&&(ve=2),P.morphAttributes.color!==void 0&&(ve=3);let z,Z,se,B;if(q){const Te=Yt[q];z=Te.vertexShader,Z=Te.fragmentShader}else z=b.vertexShader,Z=b.fragmentShader,l.update(b),se=l.getVertexShaderID(b),B=l.getFragmentShaderID(b);const ue=a.getRenderTarget(),he=b.alphaTest>0,fe=b.clearcoat>0,de=b.iridescence>0;return{isWebGL2:h,shaderID:q,shaderName:b.type,vertexShader:z,fragmentShader:Z,defines:b.defines,customVertexShaderID:se,customFragmentShaderID:B,isRawShaderMaterial:b.isRawShaderMaterial===!0,glslVersion:b.glslVersion,precision:g,instancing:X.isInstancedMesh===!0,instancingColor:X.isInstancedMesh===!0&&X.instanceColor!==null,supportsVertexTextures:f,outputEncoding:ue===null?a.outputEncoding:ue.isXRRenderTarget===!0?ue.texture.encoding:Xn,map:!!b.map,matcap:!!b.matcap,envMap:!!Y,envMapMode:Y&&Y.mapping,envMapCubeUVHeight:Q,lightMap:!!b.lightMap,aoMap:!!b.aoMap,emissiveMap:!!b.emissiveMap,bumpMap:!!b.bumpMap,normalMap:!!b.normalMap,objectSpaceNormalMap:b.normalMapType===Vf,tangentSpaceNormalMap:b.normalMapType===Tl,decodeVideoTexture:!!b.map&&b.map.isVideoTexture===!0&&b.map.encoding===ze,clearcoat:fe,clearcoatMap:fe&&!!b.clearcoatMap,clearcoatRoughnessMap:fe&&!!b.clearcoatRoughnessMap,clearcoatNormalMap:fe&&!!b.clearcoatNormalMap,iridescence:de,iridescenceMap:de&&!!b.iridescenceMap,iridescenceThicknessMap:de&&!!b.iridescenceThicknessMap,displacementMap:!!b.displacementMap,roughnessMap:!!b.roughnessMap,metalnessMap:!!b.metalnessMap,specularMap:!!b.specularMap,specularIntensityMap:!!b.specularIntensityMap,specularColorMap:!!b.specularColorMap,opaque:b.transparent===!1&&b.blending===_i,alphaMap:!!b.alphaMap,alphaTest:he,gradientMap:!!b.gradientMap,sheen:b.sheen>0,sheenColorMap:!!b.sheenColorMap,sheenRoughnessMap:!!b.sheenRoughnessMap,transmission:b.transmission>0,transmissionMap:!!b.transmissionMap,thicknessMap:!!b.thicknessMap,combine:b.combine,vertexTangents:!!b.normalMap&&!!P.attributes.tangent,vertexColors:b.vertexColors,vertexAlphas:b.vertexColors===!0&&!!P.attributes.color&&P.attributes.color.itemSize===4,vertexUvs:!!b.map||!!b.bumpMap||!!b.normalMap||!!b.specularMap||!!b.alphaMap||!!b.emissiveMap||!!b.roughnessMap||!!b.metalnessMap||!!b.clearcoatMap||!!b.clearcoatRoughnessMap||!!b.clearcoatNormalMap||!!b.iridescenceMap||!!b.iridescenceThicknessMap||!!b.displacementMap||!!b.transmissionMap||!!b.thicknessMap||!!b.specularIntensityMap||!!b.specularColorMap||!!b.sheenColorMap||!!b.sheenRoughnessMap,uvsVertexOnly:!(b.map||b.bumpMap||b.normalMap||b.specularMap||b.alphaMap||b.emissiveMap||b.roughnessMap||b.metalnessMap||b.clearcoatNormalMap||b.iridescenceMap||b.iridescenceThicknessMap||b.transmission>0||b.transmissionMap||b.thicknessMap||b.specularIntensityMap||b.specularColorMap||b.sheen>0||b.sheenColorMap||b.sheenRoughnessMap)&&!!b.displacementMap,fog:!!U,useFog:b.fog===!0,fogExp2:U&&U.isFogExp2,flatShading:!!b.flatShading,sizeAttenuation:b.sizeAttenuation,logarithmicDepthBuffer:d,skinning:X.isSkinnedMesh===!0,morphTargets:P.morphAttributes.position!==void 0,morphNormals:P.morphAttributes.normal!==void 0,morphColors:P.morphAttributes.color!==void 0,morphTargetsCount:K,morphTextureStride:ve,numDirLights:A.directional.length,numPointLights:A.point.length,numSpotLights:A.spot.length,numSpotLightMaps:A.spotLightMap.length,numRectAreaLights:A.rectArea.length,numHemiLights:A.hemi.length,numDirLightShadows:A.directionalShadowMap.length,numPointLightShadows:A.pointShadowMap.length,numSpotLightShadows:A.spotShadowMap.length,numSpotLightShadowsWithMaps:A.numSpotLightShadowsWithMaps,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:b.dithering,shadowMapEnabled:a.shadowMap.enabled&&F.length>0,shadowMapType:a.shadowMap.type,toneMapping:b.toneMapped?a.toneMapping:un,useLegacyLights:a.useLegacyLights,premultipliedAlpha:b.premultipliedAlpha,doubleSided:b.side===cn,flipSided:b.side===Rt,useDepthPacking:!!b.depthPacking,depthPacking:b.depthPacking||0,index0AttributeName:b.index0AttributeName,extensionDerivatives:b.extensions&&b.extensions.derivatives,extensionFragDepth:b.extensions&&b.extensions.fragDepth,extensionDrawBuffers:b.extensions&&b.extensions.drawBuffers,extensionShaderTextureLOD:b.extensions&&b.extensions.shaderTextureLOD,rendererExtensionFragDepth:h||i.has("EXT_frag_depth"),rendererExtensionDrawBuffers:h||i.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:h||i.has("EXT_shader_texture_lod"),customProgramCacheKey:b.customProgramCacheKey()}}function p(b){const A=[];if(b.shaderID?A.push(b.shaderID):(A.push(b.customVertexShaderID),A.push(b.customFragmentShaderID)),b.defines!==void 0)for(const F in b.defines)A.push(F),A.push(b.defines[F]);return b.isRawShaderMaterial===!1&&(x(A,b),E(A,b),A.push(a.outputEncoding)),A.push(b.customProgramCacheKey),A.join()}function x(b,A){b.push(A.precision),b.push(A.outputEncoding),b.push(A.envMapMode),b.push(A.envMapCubeUVHeight),b.push(A.combine),b.push(A.vertexUvs),b.push(A.fogExp2),b.push(A.sizeAttenuation),b.push(A.morphTargetsCount),b.push(A.morphAttributeCount),b.push(A.numDirLights),b.push(A.numPointLights),b.push(A.numSpotLights),b.push(A.numSpotLightMaps),b.push(A.numHemiLights),b.push(A.numRectAreaLights),b.push(A.numDirLightShadows),b.push(A.numPointLightShadows),b.push(A.numSpotLightShadows),b.push(A.numSpotLightShadowsWithMaps),b.push(A.shadowMapType),b.push(A.toneMapping),b.push(A.numClippingPlanes),b.push(A.numClipIntersection),b.push(A.depthPacking)}function E(b,A){c.disableAll(),A.isWebGL2&&c.enable(0),A.supportsVertexTextures&&c.enable(1),A.instancing&&c.enable(2),A.instancingColor&&c.enable(3),A.map&&c.enable(4),A.matcap&&c.enable(5),A.envMap&&c.enable(6),A.lightMap&&c.enable(7),A.aoMap&&c.enable(8),A.emissiveMap&&c.enable(9),A.bumpMap&&c.enable(10),A.normalMap&&c.enable(11),A.objectSpaceNormalMap&&c.enable(12),A.tangentSpaceNormalMap&&c.enable(13),A.clearcoat&&c.enable(14),A.clearcoatMap&&c.enable(15),A.clearcoatRoughnessMap&&c.enable(16),A.clearcoatNormalMap&&c.enable(17),A.iridescence&&c.enable(18),A.iridescenceMap&&c.enable(19),A.iridescenceThicknessMap&&c.enable(20),A.displacementMap&&c.enable(21),A.specularMap&&c.enable(22),A.roughnessMap&&c.enable(23),A.metalnessMap&&c.enable(24),A.gradientMap&&c.enable(25),A.alphaMap&&c.enable(26),A.alphaTest&&c.enable(27),A.vertexColors&&c.enable(28),A.vertexAlphas&&c.enable(29),A.vertexUvs&&c.enable(30),A.vertexTangents&&c.enable(31),A.uvsVertexOnly&&c.enable(32),b.push(c.mask),c.disableAll(),A.fog&&c.enable(0),A.useFog&&c.enable(1),A.flatShading&&c.enable(2),A.logarithmicDepthBuffer&&c.enable(3),A.skinning&&c.enable(4),A.morphTargets&&c.enable(5),A.morphNormals&&c.enable(6),A.morphColors&&c.enable(7),A.premultipliedAlpha&&c.enable(8),A.shadowMapEnabled&&c.enable(9),A.useLegacyLights&&c.enable(10),A.doubleSided&&c.enable(11),A.flipSided&&c.enable(12),A.useDepthPacking&&c.enable(13),A.dithering&&c.enable(14),A.specularIntensityMap&&c.enable(15),A.specularColorMap&&c.enable(16),A.transmission&&c.enable(17),A.transmissionMap&&c.enable(18),A.thicknessMap&&c.enable(19),A.sheen&&c.enable(20),A.sheenColorMap&&c.enable(21),A.sheenRoughnessMap&&c.enable(22),A.decodeVideoTexture&&c.enable(23),A.opaque&&c.enable(24),b.push(c.mask)}function y(b){const A=_[b.type];let F;if(A){const $=Yt[A];F=Sp.clone($.uniforms)}else F=b.uniforms;return F}function M(b,A){let F;for(let $=0,X=u.length;$<X;$++){const U=u[$];if(U.cacheKey===A){F=U,++F.usedTimes;break}}return F===void 0&&(F=new P0(a,A,b,r),u.push(F)),F}function w(b){if(--b.usedTimes===0){const A=u.indexOf(b);u[A]=u[u.length-1],u.pop(),b.destroy()}}function L(b){l.remove(b)}function I(){l.dispose()}return{getParameters:m,getProgramCacheKey:p,getUniforms:y,acquireProgram:M,releaseProgram:w,releaseShaderCache:L,programs:u,dispose:I}}function B0(){let a=new WeakMap;function e(r){let o=a.get(r);return o===void 0&&(o={},a.set(r,o)),o}function t(r){a.delete(r)}function i(r,o,c){a.get(r)[o]=c}function s(){a=new WeakMap}return{get:e,remove:t,update:i,dispose:s}}function k0(a,e){return a.groupOrder!==e.groupOrder?a.groupOrder-e.groupOrder:a.renderOrder!==e.renderOrder?a.renderOrder-e.renderOrder:a.material.id!==e.material.id?a.material.id-e.material.id:a.z!==e.z?a.z-e.z:a.id-e.id}function sc(a,e){return a.groupOrder!==e.groupOrder?a.groupOrder-e.groupOrder:a.renderOrder!==e.renderOrder?a.renderOrder-e.renderOrder:a.z!==e.z?e.z-a.z:a.id-e.id}function rc(){const a=[];let e=0;const t=[],i=[],s=[];function r(){e=0,t.length=0,i.length=0,s.length=0}function o(d,f,g,_,m,p){let x=a[e];return x===void 0?(x={id:d.id,object:d,geometry:f,material:g,groupOrder:_,renderOrder:d.renderOrder,z:m,group:p},a[e]=x):(x.id=d.id,x.object=d,x.geometry=f,x.material=g,x.groupOrder=_,x.renderOrder=d.renderOrder,x.z=m,x.group=p),e++,x}function c(d,f,g,_,m,p){const x=o(d,f,g,_,m,p);g.transmission>0?i.push(x):g.transparent===!0?s.push(x):t.push(x)}function l(d,f,g,_,m,p){const x=o(d,f,g,_,m,p);g.transmission>0?i.unshift(x):g.transparent===!0?s.unshift(x):t.unshift(x)}function u(d,f){t.length>1&&t.sort(d||k0),i.length>1&&i.sort(f||sc),s.length>1&&s.sort(f||sc)}function h(){for(let d=e,f=a.length;d<f;d++){const g=a[d];if(g.id===null)break;g.id=null,g.object=null,g.geometry=null,g.material=null,g.group=null}}return{opaque:t,transmissive:i,transparent:s,init:r,push:c,unshift:l,finish:h,sort:u}}function z0(){let a=new WeakMap;function e(i,s){const r=a.get(i);let o;return r===void 0?(o=new rc,a.set(i,[o])):s>=r.length?(o=new rc,r.push(o)):o=r[s],o}function t(){a=new WeakMap}return{get:e,dispose:t}}function G0(){const a={};return{get:function(e){if(a[e.id]!==void 0)return a[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new D,color:new we};break;case"SpotLight":t={position:new D,direction:new D,color:new we,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new D,color:new we,distance:0,decay:0};break;case"HemisphereLight":t={direction:new D,skyColor:new we,groundColor:new we};break;case"RectAreaLight":t={color:new we,position:new D,halfWidth:new D,halfHeight:new D};break}return a[e.id]=t,t}}}function V0(){const a={};return{get:function(e){if(a[e.id]!==void 0)return a[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Se};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Se};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Se,shadowCameraNear:1,shadowCameraFar:1e3};break}return a[e.id]=t,t}}}let H0=0;function W0(a,e){return(e.castShadow?2:0)-(a.castShadow?2:0)+(e.map?1:0)-(a.map?1:0)}function j0(a,e){const t=new G0,i=V0(),s={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0};for(let h=0;h<9;h++)s.probe.push(new D);const r=new D,o=new Re,c=new Re;function l(h,d){let f=0,g=0,_=0;for(let $=0;$<9;$++)s.probe[$].set(0,0,0);let m=0,p=0,x=0,E=0,y=0,M=0,w=0,L=0,I=0,b=0;h.sort(W0);const A=d===!0?Math.PI:1;for(let $=0,X=h.length;$<X;$++){const U=h[$],P=U.color,G=U.intensity,Y=U.distance,Q=U.shadow&&U.shadow.map?U.shadow.map.texture:null;if(U.isAmbientLight)f+=P.r*G*A,g+=P.g*G*A,_+=P.b*G*A;else if(U.isLightProbe)for(let q=0;q<9;q++)s.probe[q].addScaledVector(U.sh.coefficients[q],G);else if(U.isDirectionalLight){const q=t.get(U);if(q.color.copy(U.color).multiplyScalar(U.intensity*A),U.castShadow){const ee=U.shadow,K=i.get(U);K.shadowBias=ee.bias,K.shadowNormalBias=ee.normalBias,K.shadowRadius=ee.radius,K.shadowMapSize=ee.mapSize,s.directionalShadow[m]=K,s.directionalShadowMap[m]=Q,s.directionalShadowMatrix[m]=U.shadow.matrix,M++}s.directional[m]=q,m++}else if(U.isSpotLight){const q=t.get(U);q.position.setFromMatrixPosition(U.matrixWorld),q.color.copy(P).multiplyScalar(G*A),q.distance=Y,q.coneCos=Math.cos(U.angle),q.penumbraCos=Math.cos(U.angle*(1-U.penumbra)),q.decay=U.decay,s.spot[x]=q;const ee=U.shadow;if(U.map&&(s.spotLightMap[I]=U.map,I++,ee.updateMatrices(U),U.castShadow&&b++),s.spotLightMatrix[x]=ee.matrix,U.castShadow){const K=i.get(U);K.shadowBias=ee.bias,K.shadowNormalBias=ee.normalBias,K.shadowRadius=ee.radius,K.shadowMapSize=ee.mapSize,s.spotShadow[x]=K,s.spotShadowMap[x]=Q,L++}x++}else if(U.isRectAreaLight){const q=t.get(U);q.color.copy(P).multiplyScalar(G),q.halfWidth.set(U.width*.5,0,0),q.halfHeight.set(0,U.height*.5,0),s.rectArea[E]=q,E++}else if(U.isPointLight){const q=t.get(U);if(q.color.copy(U.color).multiplyScalar(U.intensity*A),q.distance=U.distance,q.decay=U.decay,U.castShadow){const ee=U.shadow,K=i.get(U);K.shadowBias=ee.bias,K.shadowNormalBias=ee.normalBias,K.shadowRadius=ee.radius,K.shadowMapSize=ee.mapSize,K.shadowCameraNear=ee.camera.near,K.shadowCameraFar=ee.camera.far,s.pointShadow[p]=K,s.pointShadowMap[p]=Q,s.pointShadowMatrix[p]=U.shadow.matrix,w++}s.point[p]=q,p++}else if(U.isHemisphereLight){const q=t.get(U);q.skyColor.copy(U.color).multiplyScalar(G*A),q.groundColor.copy(U.groundColor).multiplyScalar(G*A),s.hemi[y]=q,y++}}E>0&&(e.isWebGL2||a.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=ie.LTC_FLOAT_1,s.rectAreaLTC2=ie.LTC_FLOAT_2):a.has("OES_texture_half_float_linear")===!0?(s.rectAreaLTC1=ie.LTC_HALF_1,s.rectAreaLTC2=ie.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),s.ambient[0]=f,s.ambient[1]=g,s.ambient[2]=_;const F=s.hash;(F.directionalLength!==m||F.pointLength!==p||F.spotLength!==x||F.rectAreaLength!==E||F.hemiLength!==y||F.numDirectionalShadows!==M||F.numPointShadows!==w||F.numSpotShadows!==L||F.numSpotMaps!==I)&&(s.directional.length=m,s.spot.length=x,s.rectArea.length=E,s.point.length=p,s.hemi.length=y,s.directionalShadow.length=M,s.directionalShadowMap.length=M,s.pointShadow.length=w,s.pointShadowMap.length=w,s.spotShadow.length=L,s.spotShadowMap.length=L,s.directionalShadowMatrix.length=M,s.pointShadowMatrix.length=w,s.spotLightMatrix.length=L+I-b,s.spotLightMap.length=I,s.numSpotLightShadowsWithMaps=b,F.directionalLength=m,F.pointLength=p,F.spotLength=x,F.rectAreaLength=E,F.hemiLength=y,F.numDirectionalShadows=M,F.numPointShadows=w,F.numSpotShadows=L,F.numSpotMaps=I,s.version=H0++)}function u(h,d){let f=0,g=0,_=0,m=0,p=0;const x=d.matrixWorldInverse;for(let E=0,y=h.length;E<y;E++){const M=h[E];if(M.isDirectionalLight){const w=s.directional[f];w.direction.setFromMatrixPosition(M.matrixWorld),r.setFromMatrixPosition(M.target.matrixWorld),w.direction.sub(r),w.direction.transformDirection(x),f++}else if(M.isSpotLight){const w=s.spot[_];w.position.setFromMatrixPosition(M.matrixWorld),w.position.applyMatrix4(x),w.direction.setFromMatrixPosition(M.matrixWorld),r.setFromMatrixPosition(M.target.matrixWorld),w.direction.sub(r),w.direction.transformDirection(x),_++}else if(M.isRectAreaLight){const w=s.rectArea[m];w.position.setFromMatrixPosition(M.matrixWorld),w.position.applyMatrix4(x),c.identity(),o.copy(M.matrixWorld),o.premultiply(x),c.extractRotation(o),w.halfWidth.set(M.width*.5,0,0),w.halfHeight.set(0,M.height*.5,0),w.halfWidth.applyMatrix4(c),w.halfHeight.applyMatrix4(c),m++}else if(M.isPointLight){const w=s.point[g];w.position.setFromMatrixPosition(M.matrixWorld),w.position.applyMatrix4(x),g++}else if(M.isHemisphereLight){const w=s.hemi[p];w.direction.setFromMatrixPosition(M.matrixWorld),w.direction.transformDirection(x),p++}}}return{setup:l,setupView:u,state:s}}function ac(a,e){const t=new j0(a,e),i=[],s=[];function r(){i.length=0,s.length=0}function o(d){i.push(d)}function c(d){s.push(d)}function l(d){t.setup(i,d)}function u(d){t.setupView(i,d)}return{init:r,state:{lightsArray:i,shadowsArray:s,lights:t},setupLights:l,setupLightsView:u,pushLight:o,pushShadow:c}}function q0(a,e){let t=new WeakMap;function i(r,o=0){const c=t.get(r);let l;return c===void 0?(l=new ac(a,e),t.set(r,[l])):o>=c.length?(l=new ac(a,e),c.push(l)):l=c[o],l}function s(){t=new WeakMap}return{get:i,dispose:s}}class X0 extends Kt{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=zf,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class $0 extends Kt{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.referencePosition=new D,this.nearDistance=1,this.farDistance=1e3,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.referencePosition.copy(e.referencePosition),this.nearDistance=e.nearDistance,this.farDistance=e.farDistance,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const Y0=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,K0=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function Z0(a,e,t){let i=new ma;const s=new Se,r=new Se,o=new We,c=new X0({depthPacking:Gf}),l=new $0,u={},h=t.maxTextureSize,d={[hn]:Rt,[Rt]:hn,[cn]:cn},f=new Yn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Se},radius:{value:4}},vertexShader:Y0,fragmentShader:K0}),g=f.clone();g.defines.HORIZONTAL_PASS=1;const _=new kt;_.setAttribute("position",new Mt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const m=new Ut(_,f),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=_l,this.render=function(M,w,L){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||M.length===0)return;const I=a.getRenderTarget(),b=a.getActiveCubeFace(),A=a.getActiveMipmapLevel(),F=a.state;F.setBlending(wn),F.buffers.color.setClear(1,1,1,1),F.buffers.depth.setTest(!0),F.setScissorTest(!1);for(let $=0,X=M.length;$<X;$++){const U=M[$],P=U.shadow;if(P===void 0){console.warn("THREE.WebGLShadowMap:",U,"has no shadow.");continue}if(P.autoUpdate===!1&&P.needsUpdate===!1)continue;s.copy(P.mapSize);const G=P.getFrameExtents();if(s.multiply(G),r.copy(P.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/G.x),s.x=r.x*G.x,P.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/G.y),s.y=r.y*G.y,P.mapSize.y=r.y)),P.map===null){const Q=this.type!==qi?{minFilter:ct,magFilter:ct}:{};P.map=new $n(s.x,s.y,Q),P.map.texture.name=U.name+".shadowMap",P.camera.updateProjectionMatrix()}a.setRenderTarget(P.map),a.clear();const Y=P.getViewportCount();for(let Q=0;Q<Y;Q++){const q=P.getViewport(Q);o.set(r.x*q.x,r.y*q.y,r.x*q.z,r.y*q.w),F.viewport(o),P.updateMatrices(U,Q),i=P.getFrustum(),y(w,L,P.camera,U,this.type)}P.isPointLightShadow!==!0&&this.type===qi&&x(P,L),P.needsUpdate=!1}p.needsUpdate=!1,a.setRenderTarget(I,b,A)};function x(M,w){const L=e.update(m);f.defines.VSM_SAMPLES!==M.blurSamples&&(f.defines.VSM_SAMPLES=M.blurSamples,g.defines.VSM_SAMPLES=M.blurSamples,f.needsUpdate=!0,g.needsUpdate=!0),M.mapPass===null&&(M.mapPass=new $n(s.x,s.y)),f.uniforms.shadow_pass.value=M.map.texture,f.uniforms.resolution.value=M.mapSize,f.uniforms.radius.value=M.radius,a.setRenderTarget(M.mapPass),a.clear(),a.renderBufferDirect(w,null,L,f,m,null),g.uniforms.shadow_pass.value=M.mapPass.texture,g.uniforms.resolution.value=M.mapSize,g.uniforms.radius.value=M.radius,a.setRenderTarget(M.map),a.clear(),a.renderBufferDirect(w,null,L,g,m,null)}function E(M,w,L,I,b,A){let F=null;const $=L.isPointLight===!0?M.customDistanceMaterial:M.customDepthMaterial;if($!==void 0)F=$;else if(F=L.isPointLight===!0?l:c,a.localClippingEnabled&&w.clipShadows===!0&&Array.isArray(w.clippingPlanes)&&w.clippingPlanes.length!==0||w.displacementMap&&w.displacementScale!==0||w.alphaMap&&w.alphaTest>0||w.map&&w.alphaTest>0){const X=F.uuid,U=w.uuid;let P=u[X];P===void 0&&(P={},u[X]=P);let G=P[U];G===void 0&&(G=F.clone(),P[U]=G),F=G}return F.visible=w.visible,F.wireframe=w.wireframe,A===qi?F.side=w.shadowSide!==null?w.shadowSide:w.side:F.side=w.shadowSide!==null?w.shadowSide:d[w.side],F.alphaMap=w.alphaMap,F.alphaTest=w.alphaTest,F.map=w.map,F.clipShadows=w.clipShadows,F.clippingPlanes=w.clippingPlanes,F.clipIntersection=w.clipIntersection,F.displacementMap=w.displacementMap,F.displacementScale=w.displacementScale,F.displacementBias=w.displacementBias,F.wireframeLinewidth=w.wireframeLinewidth,F.linewidth=w.linewidth,L.isPointLight===!0&&F.isMeshDistanceMaterial===!0&&(F.referencePosition.setFromMatrixPosition(L.matrixWorld),F.nearDistance=I,F.farDistance=b),F}function y(M,w,L,I,b){if(M.visible===!1)return;if(M.layers.test(w.layers)&&(M.isMesh||M.isLine||M.isPoints)&&(M.castShadow||M.receiveShadow&&b===qi)&&(!M.frustumCulled||i.intersectsObject(M))){M.modelViewMatrix.multiplyMatrices(L.matrixWorldInverse,M.matrixWorld);const $=e.update(M),X=M.material;if(Array.isArray(X)){const U=$.groups;for(let P=0,G=U.length;P<G;P++){const Y=U[P],Q=X[Y.materialIndex];if(Q&&Q.visible){const q=E(M,Q,I,L.near,L.far,b);a.renderBufferDirect(L,null,$,q,M,Y)}}}else if(X.visible){const U=E(M,X,I,L.near,L.far,b);a.renderBufferDirect(L,null,$,U,M,null)}}const F=M.children;for(let $=0,X=F.length;$<X;$++)y(F[$],w,L,I,b)}}function J0(a,e,t){const i=t.isWebGL2;function s(){let R=!1;const W=new We;let J=null;const ce=new We(0,0,0,0);return{setMask:function(pe){J!==pe&&!R&&(a.colorMask(pe,pe,pe,pe),J=pe)},setLocked:function(pe){R=pe},setClear:function(pe,qe,rt,mt,jt){jt===!0&&(pe*=mt,qe*=mt,rt*=mt),W.set(pe,qe,rt,mt),ce.equals(W)===!1&&(a.clearColor(pe,qe,rt,mt),ce.copy(W))},reset:function(){R=!1,J=null,ce.set(-1,0,0,0)}}}function r(){let R=!1,W=null,J=null,ce=null;return{setTest:function(pe){pe?he(2929):fe(2929)},setMask:function(pe){W!==pe&&!R&&(a.depthMask(pe),W=pe)},setFunc:function(pe){if(J!==pe){switch(pe){case lf:a.depthFunc(512);break;case uf:a.depthFunc(519);break;case hf:a.depthFunc(513);break;case $r:a.depthFunc(515);break;case df:a.depthFunc(514);break;case ff:a.depthFunc(518);break;case pf:a.depthFunc(516);break;case mf:a.depthFunc(517);break;default:a.depthFunc(515)}J=pe}},setLocked:function(pe){R=pe},setClear:function(pe){ce!==pe&&(a.clearDepth(pe),ce=pe)},reset:function(){R=!1,W=null,J=null,ce=null}}}function o(){let R=!1,W=null,J=null,ce=null,pe=null,qe=null,rt=null,mt=null,jt=null;return{setTest:function(Ke){R||(Ke?he(2960):fe(2960))},setMask:function(Ke){W!==Ke&&!R&&(a.stencilMask(Ke),W=Ke)},setFunc:function(Ke,It,qt){(J!==Ke||ce!==It||pe!==qt)&&(a.stencilFunc(Ke,It,qt),J=Ke,ce=It,pe=qt)},setOp:function(Ke,It,qt){(qe!==Ke||rt!==It||mt!==qt)&&(a.stencilOp(Ke,It,qt),qe=Ke,rt=It,mt=qt)},setLocked:function(Ke){R=Ke},setClear:function(Ke){jt!==Ke&&(a.clearStencil(Ke),jt=Ke)},reset:function(){R=!1,W=null,J=null,ce=null,pe=null,qe=null,rt=null,mt=null,jt=null}}}const c=new s,l=new r,u=new o,h=new WeakMap,d=new WeakMap;let f={},g={},_=new WeakMap,m=[],p=null,x=!1,E=null,y=null,M=null,w=null,L=null,I=null,b=null,A=!1,F=null,$=null,X=null,U=null,P=null;const G=a.getParameter(35661);let Y=!1,Q=0;const q=a.getParameter(7938);q.indexOf("WebGL")!==-1?(Q=parseFloat(/^WebGL (\d)/.exec(q)[1]),Y=Q>=1):q.indexOf("OpenGL ES")!==-1&&(Q=parseFloat(/^OpenGL ES (\d)/.exec(q)[1]),Y=Q>=2);let ee=null,K={};const ve=a.getParameter(3088),z=a.getParameter(2978),Z=new We().fromArray(ve),se=new We().fromArray(z);function B(R,W,J){const ce=new Uint8Array(4),pe=a.createTexture();a.bindTexture(R,pe),a.texParameteri(R,10241,9728),a.texParameteri(R,10240,9728);for(let qe=0;qe<J;qe++)a.texImage2D(W+qe,0,6408,1,1,0,6408,5121,ce);return pe}const ue={};ue[3553]=B(3553,3553,1),ue[34067]=B(34067,34069,6),c.setClear(0,0,0,1),l.setClear(1),u.setClear(0),he(2929),l.setFunc($r),it(!1),st(Xa),he(2884),nt(wn);function he(R){f[R]!==!0&&(a.enable(R),f[R]=!0)}function fe(R){f[R]!==!1&&(a.disable(R),f[R]=!1)}function de(R,W){return g[R]!==W?(a.bindFramebuffer(R,W),g[R]=W,i&&(R===36009&&(g[36160]=W),R===36160&&(g[36009]=W)),!0):!1}function be(R,W){let J=m,ce=!1;if(R)if(J=_.get(W),J===void 0&&(J=[],_.set(W,J)),R.isWebGLMultipleRenderTargets){const pe=R.texture;if(J.length!==pe.length||J[0]!==36064){for(let qe=0,rt=pe.length;qe<rt;qe++)J[qe]=36064+qe;J.length=pe.length,ce=!0}}else J[0]!==36064&&(J[0]=36064,ce=!0);else J[0]!==1029&&(J[0]=1029,ce=!0);ce&&(t.isWebGL2?a.drawBuffers(J):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(J))}function Te(R){return p!==R?(a.useProgram(R),p=R,!0):!1}const Ae={[mi]:32774,[Zd]:32778,[Jd]:32779};if(i)Ae[Za]=32775,Ae[Ja]=32776;else{const R=e.get("EXT_blend_minmax");R!==null&&(Ae[Za]=R.MIN_EXT,Ae[Ja]=R.MAX_EXT)}const Fe={[Qd]:0,[ef]:1,[tf]:768,[xl]:770,[cf]:776,[af]:774,[sf]:772,[nf]:769,[vl]:771,[of]:775,[rf]:773};function nt(R,W,J,ce,pe,qe,rt,mt){if(R===wn){x===!0&&(fe(3042),x=!1);return}if(x===!1&&(he(3042),x=!0),R!==Kd){if(R!==E||mt!==A){if((y!==mi||L!==mi)&&(a.blendEquation(32774),y=mi,L=mi),mt)switch(R){case _i:a.blendFuncSeparate(1,771,1,771);break;case $a:a.blendFunc(1,1);break;case Ya:a.blendFuncSeparate(0,769,0,1);break;case Ka:a.blendFuncSeparate(0,768,0,770);break;default:console.error("THREE.WebGLState: Invalid blending: ",R);break}else switch(R){case _i:a.blendFuncSeparate(770,771,1,771);break;case $a:a.blendFunc(770,1);break;case Ya:a.blendFuncSeparate(0,769,0,1);break;case Ka:a.blendFunc(0,768);break;default:console.error("THREE.WebGLState: Invalid blending: ",R);break}M=null,w=null,I=null,b=null,E=R,A=mt}return}pe=pe||W,qe=qe||J,rt=rt||ce,(W!==y||pe!==L)&&(a.blendEquationSeparate(Ae[W],Ae[pe]),y=W,L=pe),(J!==M||ce!==w||qe!==I||rt!==b)&&(a.blendFuncSeparate(Fe[J],Fe[ce],Fe[qe],Fe[rt]),M=J,w=ce,I=qe,b=rt),E=R,A=!1}function ft(R,W){R.side===cn?fe(2884):he(2884);let J=R.side===Rt;W&&(J=!J),it(J),R.blending===_i&&R.transparent===!1?nt(wn):nt(R.blending,R.blendEquation,R.blendSrc,R.blendDst,R.blendEquationAlpha,R.blendSrcAlpha,R.blendDstAlpha,R.premultipliedAlpha),l.setFunc(R.depthFunc),l.setTest(R.depthTest),l.setMask(R.depthWrite),c.setMask(R.colorWrite);const ce=R.stencilWrite;u.setTest(ce),ce&&(u.setMask(R.stencilWriteMask),u.setFunc(R.stencilFunc,R.stencilRef,R.stencilFuncMask),u.setOp(R.stencilFail,R.stencilZFail,R.stencilZPass)),je(R.polygonOffset,R.polygonOffsetFactor,R.polygonOffsetUnits),R.alphaToCoverage===!0?he(32926):fe(32926)}function it(R){F!==R&&(R?a.frontFace(2304):a.frontFace(2305),F=R)}function st(R){R!==Xd?(he(2884),R!==$&&(R===Xa?a.cullFace(1029):R===$d?a.cullFace(1028):a.cullFace(1032))):fe(2884),$=R}function $e(R){R!==X&&(Y&&a.lineWidth(R),X=R)}function je(R,W,J){R?(he(32823),(U!==W||P!==J)&&(a.polygonOffset(W,J),U=W,P=J)):fe(32823)}function wt(R){R?he(3089):fe(3089)}function pt(R){R===void 0&&(R=33984+G-1),ee!==R&&(a.activeTexture(R),ee=R)}function T(R,W,J){J===void 0&&(ee===null?J=33984+G-1:J=ee);let ce=K[J];ce===void 0&&(ce={type:void 0,texture:void 0},K[J]=ce),(ce.type!==R||ce.texture!==W)&&(ee!==J&&(a.activeTexture(J),ee=J),a.bindTexture(R,W||ue[R]),ce.type=R,ce.texture=W)}function v(){const R=K[ee];R!==void 0&&R.type!==void 0&&(a.bindTexture(R.type,null),R.type=void 0,R.texture=void 0)}function H(){try{a.compressedTexImage2D.apply(a,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function te(){try{a.compressedTexImage3D.apply(a,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function ne(){try{a.texSubImage2D.apply(a,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function ae(){try{a.texSubImage3D.apply(a,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function xe(){try{a.compressedTexSubImage2D.apply(a,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function C(){try{a.compressedTexSubImage3D.apply(a,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function N(){try{a.texStorage2D.apply(a,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function oe(){try{a.texStorage3D.apply(a,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function re(){try{a.texImage2D.apply(a,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function me(){try{a.texImage3D.apply(a,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function _e(R){Z.equals(R)===!1&&(a.scissor(R.x,R.y,R.z,R.w),Z.copy(R))}function ge(R){se.equals(R)===!1&&(a.viewport(R.x,R.y,R.z,R.w),se.copy(R))}function De(R,W){let J=d.get(W);J===void 0&&(J=new WeakMap,d.set(W,J));let ce=J.get(R);ce===void 0&&(ce=a.getUniformBlockIndex(W,R.name),J.set(R,ce))}function Ue(R,W){const ce=d.get(W).get(R);h.get(W)!==ce&&(a.uniformBlockBinding(W,ce,R.__bindingPointIndex),h.set(W,ce))}function Ve(){a.disable(3042),a.disable(2884),a.disable(2929),a.disable(32823),a.disable(3089),a.disable(2960),a.disable(32926),a.blendEquation(32774),a.blendFunc(1,0),a.blendFuncSeparate(1,0,1,0),a.colorMask(!0,!0,!0,!0),a.clearColor(0,0,0,0),a.depthMask(!0),a.depthFunc(513),a.clearDepth(1),a.stencilMask(4294967295),a.stencilFunc(519,0,4294967295),a.stencilOp(7680,7680,7680),a.clearStencil(0),a.cullFace(1029),a.frontFace(2305),a.polygonOffset(0,0),a.activeTexture(33984),a.bindFramebuffer(36160,null),i===!0&&(a.bindFramebuffer(36009,null),a.bindFramebuffer(36008,null)),a.useProgram(null),a.lineWidth(1),a.scissor(0,0,a.canvas.width,a.canvas.height),a.viewport(0,0,a.canvas.width,a.canvas.height),f={},ee=null,K={},g={},_=new WeakMap,m=[],p=null,x=!1,E=null,y=null,M=null,w=null,L=null,I=null,b=null,A=!1,F=null,$=null,X=null,U=null,P=null,Z.set(0,0,a.canvas.width,a.canvas.height),se.set(0,0,a.canvas.width,a.canvas.height),c.reset(),l.reset(),u.reset()}return{buffers:{color:c,depth:l,stencil:u},enable:he,disable:fe,bindFramebuffer:de,drawBuffers:be,useProgram:Te,setBlending:nt,setMaterial:ft,setFlipSided:it,setCullFace:st,setLineWidth:$e,setPolygonOffset:je,setScissorTest:wt,activeTexture:pt,bindTexture:T,unbindTexture:v,compressedTexImage2D:H,compressedTexImage3D:te,texImage2D:re,texImage3D:me,updateUBOMapping:De,uniformBlockBinding:Ue,texStorage2D:N,texStorage3D:oe,texSubImage2D:ne,texSubImage3D:ae,compressedTexSubImage2D:xe,compressedTexSubImage3D:C,scissor:_e,viewport:ge,reset:Ve}}function Q0(a,e,t,i,s,r,o){const c=s.isWebGL2,l=s.maxTextures,u=s.maxCubemapSize,h=s.maxTextureSize,d=s.maxSamples,f=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,g=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),_=new WeakMap;let m;const p=new WeakMap;let x=!1;try{x=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function E(T,v){return x?new OffscreenCanvas(T,v):ns("canvas")}function y(T,v,H,te){let ne=1;if((T.width>te||T.height>te)&&(ne=te/Math.max(T.width,T.height)),ne<1||v===!0)if(typeof HTMLImageElement<"u"&&T instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&T instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&T instanceof ImageBitmap){const ae=v?Cl:Math.floor,xe=ae(ne*T.width),C=ae(ne*T.height);m===void 0&&(m=E(xe,C));const N=H?E(xe,C):m;return N.width=xe,N.height=C,N.getContext("2d").drawImage(T,0,0,xe,C),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+T.width+"x"+T.height+") to ("+xe+"x"+C+")."),N}else return"data"in T&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+T.width+"x"+T.height+")."),T;return T}function M(T){return ta(T.width)&&ta(T.height)}function w(T){return c?!1:T.wrapS!==Ot||T.wrapT!==Ot||T.minFilter!==ct&&T.minFilter!==St}function L(T,v){return T.generateMipmaps&&v&&T.minFilter!==ct&&T.minFilter!==St}function I(T){a.generateMipmap(T)}function b(T,v,H,te,ne=!1){if(c===!1)return v;if(T!==null){if(a[T]!==void 0)return a[T];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+T+"'")}let ae=v;return v===6403&&(H===5126&&(ae=33326),H===5131&&(ae=33325),H===5121&&(ae=33321)),v===33319&&(H===5126&&(ae=33328),H===5131&&(ae=33327),H===5121&&(ae=33323)),v===6408&&(H===5126&&(ae=34836),H===5131&&(ae=34842),H===5121&&(ae=te===ze&&ne===!1?35907:32856),H===32819&&(ae=32854),H===32820&&(ae=32855)),(ae===33325||ae===33326||ae===33327||ae===33328||ae===34842||ae===34836)&&e.get("EXT_color_buffer_float"),ae}function A(T,v,H){return L(T,H)===!0||T.isFramebufferTexture&&T.minFilter!==ct&&T.minFilter!==St?Math.log2(Math.max(v.width,v.height))+1:T.mipmaps!==void 0&&T.mipmaps.length>0?T.mipmaps.length:T.isCompressedTexture&&Array.isArray(T.image)?v.mipmaps.length:1}function F(T){return T===ct||T===Zr||T===Is?9728:9729}function $(T){const v=T.target;v.removeEventListener("dispose",$),U(v),v.isVideoTexture&&_.delete(v)}function X(T){const v=T.target;v.removeEventListener("dispose",X),G(v)}function U(T){const v=i.get(T);if(v.__webglInit===void 0)return;const H=T.source,te=p.get(H);if(te){const ne=te[v.__cacheKey];ne.usedTimes--,ne.usedTimes===0&&P(T),Object.keys(te).length===0&&p.delete(H)}i.remove(T)}function P(T){const v=i.get(T);a.deleteTexture(v.__webglTexture);const H=T.source,te=p.get(H);delete te[v.__cacheKey],o.memory.textures--}function G(T){const v=T.texture,H=i.get(T),te=i.get(v);if(te.__webglTexture!==void 0&&(a.deleteTexture(te.__webglTexture),o.memory.textures--),T.depthTexture&&T.depthTexture.dispose(),T.isWebGLCubeRenderTarget)for(let ne=0;ne<6;ne++)a.deleteFramebuffer(H.__webglFramebuffer[ne]),H.__webglDepthbuffer&&a.deleteRenderbuffer(H.__webglDepthbuffer[ne]);else{if(a.deleteFramebuffer(H.__webglFramebuffer),H.__webglDepthbuffer&&a.deleteRenderbuffer(H.__webglDepthbuffer),H.__webglMultisampledFramebuffer&&a.deleteFramebuffer(H.__webglMultisampledFramebuffer),H.__webglColorRenderbuffer)for(let ne=0;ne<H.__webglColorRenderbuffer.length;ne++)H.__webglColorRenderbuffer[ne]&&a.deleteRenderbuffer(H.__webglColorRenderbuffer[ne]);H.__webglDepthRenderbuffer&&a.deleteRenderbuffer(H.__webglDepthRenderbuffer)}if(T.isWebGLMultipleRenderTargets)for(let ne=0,ae=v.length;ne<ae;ne++){const xe=i.get(v[ne]);xe.__webglTexture&&(a.deleteTexture(xe.__webglTexture),o.memory.textures--),i.remove(v[ne])}i.remove(v),i.remove(T)}let Y=0;function Q(){Y=0}function q(){const T=Y;return T>=l&&console.warn("THREE.WebGLTextures: Trying to use "+T+" texture units while this GPU supports only "+l),Y+=1,T}function ee(T){const v=[];return v.push(T.wrapS),v.push(T.wrapT),v.push(T.wrapR||0),v.push(T.magFilter),v.push(T.minFilter),v.push(T.anisotropy),v.push(T.internalFormat),v.push(T.format),v.push(T.type),v.push(T.generateMipmaps),v.push(T.premultiplyAlpha),v.push(T.flipY),v.push(T.unpackAlignment),v.push(T.encoding),v.join()}function K(T,v){const H=i.get(T);if(T.isVideoTexture&&wt(T),T.isRenderTargetTexture===!1&&T.version>0&&H.__version!==T.version){const te=T.image;if(te===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(te.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{fe(H,T,v);return}}t.bindTexture(3553,H.__webglTexture,33984+v)}function ve(T,v){const H=i.get(T);if(T.version>0&&H.__version!==T.version){fe(H,T,v);return}t.bindTexture(35866,H.__webglTexture,33984+v)}function z(T,v){const H=i.get(T);if(T.version>0&&H.__version!==T.version){fe(H,T,v);return}t.bindTexture(32879,H.__webglTexture,33984+v)}function Z(T,v){const H=i.get(T);if(T.version>0&&H.__version!==T.version){de(H,T,v);return}t.bindTexture(34067,H.__webglTexture,33984+v)}const se={[Si]:10497,[Ot]:33071,[Bs]:33648},B={[ct]:9728,[Zr]:9984,[Is]:9986,[St]:9729,[Ml]:9985,[jn]:9987};function ue(T,v,H){if(H?(a.texParameteri(T,10242,se[v.wrapS]),a.texParameteri(T,10243,se[v.wrapT]),(T===32879||T===35866)&&a.texParameteri(T,32882,se[v.wrapR]),a.texParameteri(T,10240,B[v.magFilter]),a.texParameteri(T,10241,B[v.minFilter])):(a.texParameteri(T,10242,33071),a.texParameteri(T,10243,33071),(T===32879||T===35866)&&a.texParameteri(T,32882,33071),(v.wrapS!==Ot||v.wrapT!==Ot)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),a.texParameteri(T,10240,F(v.magFilter)),a.texParameteri(T,10241,F(v.minFilter)),v.minFilter!==ct&&v.minFilter!==St&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),e.has("EXT_texture_filter_anisotropic")===!0){const te=e.get("EXT_texture_filter_anisotropic");if(v.magFilter===ct||v.minFilter!==Is&&v.minFilter!==jn||v.type===vn&&e.has("OES_texture_float_linear")===!1||c===!1&&v.type===Ji&&e.has("OES_texture_half_float_linear")===!1)return;(v.anisotropy>1||i.get(v).__currentAnisotropy)&&(a.texParameterf(T,te.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(v.anisotropy,s.getMaxAnisotropy())),i.get(v).__currentAnisotropy=v.anisotropy)}}function he(T,v){let H=!1;T.__webglInit===void 0&&(T.__webglInit=!0,v.addEventListener("dispose",$));const te=v.source;let ne=p.get(te);ne===void 0&&(ne={},p.set(te,ne));const ae=ee(v);if(ae!==T.__cacheKey){ne[ae]===void 0&&(ne[ae]={texture:a.createTexture(),usedTimes:0},o.memory.textures++,H=!0),ne[ae].usedTimes++;const xe=ne[T.__cacheKey];xe!==void 0&&(ne[T.__cacheKey].usedTimes--,xe.usedTimes===0&&P(v)),T.__cacheKey=ae,T.__webglTexture=ne[ae].texture}return H}function fe(T,v,H){let te=3553;(v.isDataArrayTexture||v.isCompressedArrayTexture)&&(te=35866),v.isData3DTexture&&(te=32879);const ne=he(T,v),ae=v.source;t.bindTexture(te,T.__webglTexture,33984+H);const xe=i.get(ae);if(ae.version!==xe.__version||ne===!0){t.activeTexture(33984+H),a.pixelStorei(37440,v.flipY),a.pixelStorei(37441,v.premultiplyAlpha),a.pixelStorei(3317,v.unpackAlignment),a.pixelStorei(37443,0);const C=w(v)&&M(v.image)===!1;let N=y(v.image,C,!1,h);N=pt(v,N);const oe=M(N)||c,re=r.convert(v.format,v.encoding);let me=r.convert(v.type),_e=b(v.internalFormat,re,me,v.encoding,v.isVideoTexture);ue(te,v,oe);let ge;const De=v.mipmaps,Ue=c&&v.isVideoTexture!==!0,Ve=xe.__version===void 0||ne===!0,R=A(v,N,oe);if(v.isDepthTexture)_e=6402,c?v.type===vn?_e=36012:v.type===Un?_e=33190:v.type===xi?_e=35056:_e=33189:v.type===vn&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),v.format===zn&&_e===6402&&v.type!==Sl&&v.type!==Un&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),v.type=Un,me=r.convert(v.type)),v.format===wi&&_e===6402&&(_e=34041,v.type!==xi&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),v.type=xi,me=r.convert(v.type))),Ve&&(Ue?t.texStorage2D(3553,1,_e,N.width,N.height):t.texImage2D(3553,0,_e,N.width,N.height,0,re,me,null));else if(v.isDataTexture)if(De.length>0&&oe){Ue&&Ve&&t.texStorage2D(3553,R,_e,De[0].width,De[0].height);for(let W=0,J=De.length;W<J;W++)ge=De[W],Ue?t.texSubImage2D(3553,W,0,0,ge.width,ge.height,re,me,ge.data):t.texImage2D(3553,W,_e,ge.width,ge.height,0,re,me,ge.data);v.generateMipmaps=!1}else Ue?(Ve&&t.texStorage2D(3553,R,_e,N.width,N.height),t.texSubImage2D(3553,0,0,0,N.width,N.height,re,me,N.data)):t.texImage2D(3553,0,_e,N.width,N.height,0,re,me,N.data);else if(v.isCompressedTexture)if(v.isCompressedArrayTexture){Ue&&Ve&&t.texStorage3D(35866,R,_e,De[0].width,De[0].height,N.depth);for(let W=0,J=De.length;W<J;W++)ge=De[W],v.format!==Ft?re!==null?Ue?t.compressedTexSubImage3D(35866,W,0,0,0,ge.width,ge.height,N.depth,re,ge.data,0,0):t.compressedTexImage3D(35866,W,_e,ge.width,ge.height,N.depth,0,ge.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ue?t.texSubImage3D(35866,W,0,0,0,ge.width,ge.height,N.depth,re,me,ge.data):t.texImage3D(35866,W,_e,ge.width,ge.height,N.depth,0,re,me,ge.data)}else{Ue&&Ve&&t.texStorage2D(3553,R,_e,De[0].width,De[0].height);for(let W=0,J=De.length;W<J;W++)ge=De[W],v.format!==Ft?re!==null?Ue?t.compressedTexSubImage2D(3553,W,0,0,ge.width,ge.height,re,ge.data):t.compressedTexImage2D(3553,W,_e,ge.width,ge.height,0,ge.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ue?t.texSubImage2D(3553,W,0,0,ge.width,ge.height,re,me,ge.data):t.texImage2D(3553,W,_e,ge.width,ge.height,0,re,me,ge.data)}else if(v.isDataArrayTexture)Ue?(Ve&&t.texStorage3D(35866,R,_e,N.width,N.height,N.depth),t.texSubImage3D(35866,0,0,0,0,N.width,N.height,N.depth,re,me,N.data)):t.texImage3D(35866,0,_e,N.width,N.height,N.depth,0,re,me,N.data);else if(v.isData3DTexture)Ue?(Ve&&t.texStorage3D(32879,R,_e,N.width,N.height,N.depth),t.texSubImage3D(32879,0,0,0,0,N.width,N.height,N.depth,re,me,N.data)):t.texImage3D(32879,0,_e,N.width,N.height,N.depth,0,re,me,N.data);else if(v.isFramebufferTexture){if(Ve)if(Ue)t.texStorage2D(3553,R,_e,N.width,N.height);else{let W=N.width,J=N.height;for(let ce=0;ce<R;ce++)t.texImage2D(3553,ce,_e,W,J,0,re,me,null),W>>=1,J>>=1}}else if(De.length>0&&oe){Ue&&Ve&&t.texStorage2D(3553,R,_e,De[0].width,De[0].height);for(let W=0,J=De.length;W<J;W++)ge=De[W],Ue?t.texSubImage2D(3553,W,0,0,re,me,ge):t.texImage2D(3553,W,_e,re,me,ge);v.generateMipmaps=!1}else Ue?(Ve&&t.texStorage2D(3553,R,_e,N.width,N.height),t.texSubImage2D(3553,0,0,0,re,me,N)):t.texImage2D(3553,0,_e,re,me,N);L(v,oe)&&I(te),xe.__version=ae.version,v.onUpdate&&v.onUpdate(v)}T.__version=v.version}function de(T,v,H){if(v.image.length!==6)return;const te=he(T,v),ne=v.source;t.bindTexture(34067,T.__webglTexture,33984+H);const ae=i.get(ne);if(ne.version!==ae.__version||te===!0){t.activeTexture(33984+H),a.pixelStorei(37440,v.flipY),a.pixelStorei(37441,v.premultiplyAlpha),a.pixelStorei(3317,v.unpackAlignment),a.pixelStorei(37443,0);const xe=v.isCompressedTexture||v.image[0].isCompressedTexture,C=v.image[0]&&v.image[0].isDataTexture,N=[];for(let W=0;W<6;W++)!xe&&!C?N[W]=y(v.image[W],!1,!0,u):N[W]=C?v.image[W].image:v.image[W],N[W]=pt(v,N[W]);const oe=N[0],re=M(oe)||c,me=r.convert(v.format,v.encoding),_e=r.convert(v.type),ge=b(v.internalFormat,me,_e,v.encoding),De=c&&v.isVideoTexture!==!0,Ue=ae.__version===void 0||te===!0;let Ve=A(v,oe,re);ue(34067,v,re);let R;if(xe){De&&Ue&&t.texStorage2D(34067,Ve,ge,oe.width,oe.height);for(let W=0;W<6;W++){R=N[W].mipmaps;for(let J=0;J<R.length;J++){const ce=R[J];v.format!==Ft?me!==null?De?t.compressedTexSubImage2D(34069+W,J,0,0,ce.width,ce.height,me,ce.data):t.compressedTexImage2D(34069+W,J,ge,ce.width,ce.height,0,ce.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):De?t.texSubImage2D(34069+W,J,0,0,ce.width,ce.height,me,_e,ce.data):t.texImage2D(34069+W,J,ge,ce.width,ce.height,0,me,_e,ce.data)}}}else{R=v.mipmaps,De&&Ue&&(R.length>0&&Ve++,t.texStorage2D(34067,Ve,ge,N[0].width,N[0].height));for(let W=0;W<6;W++)if(C){De?t.texSubImage2D(34069+W,0,0,0,N[W].width,N[W].height,me,_e,N[W].data):t.texImage2D(34069+W,0,ge,N[W].width,N[W].height,0,me,_e,N[W].data);for(let J=0;J<R.length;J++){const pe=R[J].image[W].image;De?t.texSubImage2D(34069+W,J+1,0,0,pe.width,pe.height,me,_e,pe.data):t.texImage2D(34069+W,J+1,ge,pe.width,pe.height,0,me,_e,pe.data)}}else{De?t.texSubImage2D(34069+W,0,0,0,me,_e,N[W]):t.texImage2D(34069+W,0,ge,me,_e,N[W]);for(let J=0;J<R.length;J++){const ce=R[J];De?t.texSubImage2D(34069+W,J+1,0,0,me,_e,ce.image[W]):t.texImage2D(34069+W,J+1,ge,me,_e,ce.image[W])}}}L(v,re)&&I(34067),ae.__version=ne.version,v.onUpdate&&v.onUpdate(v)}T.__version=v.version}function be(T,v,H,te,ne){const ae=r.convert(H.format,H.encoding),xe=r.convert(H.type),C=b(H.internalFormat,ae,xe,H.encoding);i.get(v).__hasExternalTextures||(ne===32879||ne===35866?t.texImage3D(ne,0,C,v.width,v.height,v.depth,0,ae,xe,null):t.texImage2D(ne,0,C,v.width,v.height,0,ae,xe,null)),t.bindFramebuffer(36160,T),je(v)?f.framebufferTexture2DMultisampleEXT(36160,te,ne,i.get(H).__webglTexture,0,$e(v)):(ne===3553||ne>=34069&&ne<=34074)&&a.framebufferTexture2D(36160,te,ne,i.get(H).__webglTexture,0),t.bindFramebuffer(36160,null)}function Te(T,v,H){if(a.bindRenderbuffer(36161,T),v.depthBuffer&&!v.stencilBuffer){let te=33189;if(H||je(v)){const ne=v.depthTexture;ne&&ne.isDepthTexture&&(ne.type===vn?te=36012:ne.type===Un&&(te=33190));const ae=$e(v);je(v)?f.renderbufferStorageMultisampleEXT(36161,ae,te,v.width,v.height):a.renderbufferStorageMultisample(36161,ae,te,v.width,v.height)}else a.renderbufferStorage(36161,te,v.width,v.height);a.framebufferRenderbuffer(36160,36096,36161,T)}else if(v.depthBuffer&&v.stencilBuffer){const te=$e(v);H&&je(v)===!1?a.renderbufferStorageMultisample(36161,te,35056,v.width,v.height):je(v)?f.renderbufferStorageMultisampleEXT(36161,te,35056,v.width,v.height):a.renderbufferStorage(36161,34041,v.width,v.height),a.framebufferRenderbuffer(36160,33306,36161,T)}else{const te=v.isWebGLMultipleRenderTargets===!0?v.texture:[v.texture];for(let ne=0;ne<te.length;ne++){const ae=te[ne],xe=r.convert(ae.format,ae.encoding),C=r.convert(ae.type),N=b(ae.internalFormat,xe,C,ae.encoding),oe=$e(v);H&&je(v)===!1?a.renderbufferStorageMultisample(36161,oe,N,v.width,v.height):je(v)?f.renderbufferStorageMultisampleEXT(36161,oe,N,v.width,v.height):a.renderbufferStorage(36161,N,v.width,v.height)}}a.bindRenderbuffer(36161,null)}function Ae(T,v){if(v&&v.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(36160,T),!(v.depthTexture&&v.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(v.depthTexture).__webglTexture||v.depthTexture.image.width!==v.width||v.depthTexture.image.height!==v.height)&&(v.depthTexture.image.width=v.width,v.depthTexture.image.height=v.height,v.depthTexture.needsUpdate=!0),K(v.depthTexture,0);const te=i.get(v.depthTexture).__webglTexture,ne=$e(v);if(v.depthTexture.format===zn)je(v)?f.framebufferTexture2DMultisampleEXT(36160,36096,3553,te,0,ne):a.framebufferTexture2D(36160,36096,3553,te,0);else if(v.depthTexture.format===wi)je(v)?f.framebufferTexture2DMultisampleEXT(36160,33306,3553,te,0,ne):a.framebufferTexture2D(36160,33306,3553,te,0);else throw new Error("Unknown depthTexture format")}function Fe(T){const v=i.get(T),H=T.isWebGLCubeRenderTarget===!0;if(T.depthTexture&&!v.__autoAllocateDepthBuffer){if(H)throw new Error("target.depthTexture not supported in Cube render targets");Ae(v.__webglFramebuffer,T)}else if(H){v.__webglDepthbuffer=[];for(let te=0;te<6;te++)t.bindFramebuffer(36160,v.__webglFramebuffer[te]),v.__webglDepthbuffer[te]=a.createRenderbuffer(),Te(v.__webglDepthbuffer[te],T,!1)}else t.bindFramebuffer(36160,v.__webglFramebuffer),v.__webglDepthbuffer=a.createRenderbuffer(),Te(v.__webglDepthbuffer,T,!1);t.bindFramebuffer(36160,null)}function nt(T,v,H){const te=i.get(T);v!==void 0&&be(te.__webglFramebuffer,T,T.texture,36064,3553),H!==void 0&&Fe(T)}function ft(T){const v=T.texture,H=i.get(T),te=i.get(v);T.addEventListener("dispose",X),T.isWebGLMultipleRenderTargets!==!0&&(te.__webglTexture===void 0&&(te.__webglTexture=a.createTexture()),te.__version=v.version,o.memory.textures++);const ne=T.isWebGLCubeRenderTarget===!0,ae=T.isWebGLMultipleRenderTargets===!0,xe=M(T)||c;if(ne){H.__webglFramebuffer=[];for(let C=0;C<6;C++)H.__webglFramebuffer[C]=a.createFramebuffer()}else{if(H.__webglFramebuffer=a.createFramebuffer(),ae)if(s.drawBuffers){const C=T.texture;for(let N=0,oe=C.length;N<oe;N++){const re=i.get(C[N]);re.__webglTexture===void 0&&(re.__webglTexture=a.createTexture(),o.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(c&&T.samples>0&&je(T)===!1){const C=ae?v:[v];H.__webglMultisampledFramebuffer=a.createFramebuffer(),H.__webglColorRenderbuffer=[],t.bindFramebuffer(36160,H.__webglMultisampledFramebuffer);for(let N=0;N<C.length;N++){const oe=C[N];H.__webglColorRenderbuffer[N]=a.createRenderbuffer(),a.bindRenderbuffer(36161,H.__webglColorRenderbuffer[N]);const re=r.convert(oe.format,oe.encoding),me=r.convert(oe.type),_e=b(oe.internalFormat,re,me,oe.encoding,T.isXRRenderTarget===!0),ge=$e(T);a.renderbufferStorageMultisample(36161,ge,_e,T.width,T.height),a.framebufferRenderbuffer(36160,36064+N,36161,H.__webglColorRenderbuffer[N])}a.bindRenderbuffer(36161,null),T.depthBuffer&&(H.__webglDepthRenderbuffer=a.createRenderbuffer(),Te(H.__webglDepthRenderbuffer,T,!0)),t.bindFramebuffer(36160,null)}}if(ne){t.bindTexture(34067,te.__webglTexture),ue(34067,v,xe);for(let C=0;C<6;C++)be(H.__webglFramebuffer[C],T,v,36064,34069+C);L(v,xe)&&I(34067),t.unbindTexture()}else if(ae){const C=T.texture;for(let N=0,oe=C.length;N<oe;N++){const re=C[N],me=i.get(re);t.bindTexture(3553,me.__webglTexture),ue(3553,re,xe),be(H.__webglFramebuffer,T,re,36064+N,3553),L(re,xe)&&I(3553)}t.unbindTexture()}else{let C=3553;(T.isWebGL3DRenderTarget||T.isWebGLArrayRenderTarget)&&(c?C=T.isWebGL3DRenderTarget?32879:35866:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),t.bindTexture(C,te.__webglTexture),ue(C,v,xe),be(H.__webglFramebuffer,T,v,36064,C),L(v,xe)&&I(C),t.unbindTexture()}T.depthBuffer&&Fe(T)}function it(T){const v=M(T)||c,H=T.isWebGLMultipleRenderTargets===!0?T.texture:[T.texture];for(let te=0,ne=H.length;te<ne;te++){const ae=H[te];if(L(ae,v)){const xe=T.isWebGLCubeRenderTarget?34067:3553,C=i.get(ae).__webglTexture;t.bindTexture(xe,C),I(xe),t.unbindTexture()}}}function st(T){if(c&&T.samples>0&&je(T)===!1){const v=T.isWebGLMultipleRenderTargets?T.texture:[T.texture],H=T.width,te=T.height;let ne=16384;const ae=[],xe=T.stencilBuffer?33306:36096,C=i.get(T),N=T.isWebGLMultipleRenderTargets===!0;if(N)for(let oe=0;oe<v.length;oe++)t.bindFramebuffer(36160,C.__webglMultisampledFramebuffer),a.framebufferRenderbuffer(36160,36064+oe,36161,null),t.bindFramebuffer(36160,C.__webglFramebuffer),a.framebufferTexture2D(36009,36064+oe,3553,null,0);t.bindFramebuffer(36008,C.__webglMultisampledFramebuffer),t.bindFramebuffer(36009,C.__webglFramebuffer);for(let oe=0;oe<v.length;oe++){ae.push(36064+oe),T.depthBuffer&&ae.push(xe);const re=C.__ignoreDepthValues!==void 0?C.__ignoreDepthValues:!1;if(re===!1&&(T.depthBuffer&&(ne|=256),T.stencilBuffer&&(ne|=1024)),N&&a.framebufferRenderbuffer(36008,36064,36161,C.__webglColorRenderbuffer[oe]),re===!0&&(a.invalidateFramebuffer(36008,[xe]),a.invalidateFramebuffer(36009,[xe])),N){const me=i.get(v[oe]).__webglTexture;a.framebufferTexture2D(36009,36064,3553,me,0)}a.blitFramebuffer(0,0,H,te,0,0,H,te,ne,9728),g&&a.invalidateFramebuffer(36008,ae)}if(t.bindFramebuffer(36008,null),t.bindFramebuffer(36009,null),N)for(let oe=0;oe<v.length;oe++){t.bindFramebuffer(36160,C.__webglMultisampledFramebuffer),a.framebufferRenderbuffer(36160,36064+oe,36161,C.__webglColorRenderbuffer[oe]);const re=i.get(v[oe]).__webglTexture;t.bindFramebuffer(36160,C.__webglFramebuffer),a.framebufferTexture2D(36009,36064+oe,3553,re,0)}t.bindFramebuffer(36009,C.__webglMultisampledFramebuffer)}}function $e(T){return Math.min(d,T.samples)}function je(T){const v=i.get(T);return c&&T.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&v.__useRenderToTexture!==!1}function wt(T){const v=o.render.frame;_.get(T)!==v&&(_.set(T,v),T.update())}function pt(T,v){const H=T.encoding,te=T.format,ne=T.type;return T.isCompressedTexture===!0||T.isVideoTexture===!0||T.format===ea||H!==Xn&&(H===ze?c===!1?e.has("EXT_sRGB")===!0&&te===Ft?(T.format=ea,T.minFilter=St,T.generateMipmaps=!1):v=Rl.sRGBToLinear(v):(te!==Ft||ne!==qn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture encoding:",H)),v}this.allocateTextureUnit=q,this.resetTextureUnits=Q,this.setTexture2D=K,this.setTexture2DArray=ve,this.setTexture3D=z,this.setTextureCube=Z,this.rebindTextures=nt,this.setupRenderTarget=ft,this.updateRenderTargetMipmap=it,this.updateMultisampleRenderTarget=st,this.setupDepthRenderbuffer=Fe,this.setupFrameBufferTexture=be,this.useMultisampledRTT=je}function ex(a,e,t){const i=t.isWebGL2;function s(r,o=null){let c;if(r===qn)return 5121;if(r===Ef)return 32819;if(r===Af)return 32820;if(r===Sf)return 5120;if(r===wf)return 5122;if(r===Sl)return 5123;if(r===Tf)return 5124;if(r===Un)return 5125;if(r===vn)return 5126;if(r===Ji)return i?5131:(c=e.get("OES_texture_half_float"),c!==null?c.HALF_FLOAT_OES:null);if(r===Cf)return 6406;if(r===Ft)return 6408;if(r===Lf)return 6409;if(r===Rf)return 6410;if(r===zn)return 6402;if(r===wi)return 34041;if(r===ea)return c=e.get("EXT_sRGB"),c!==null?c.SRGB_ALPHA_EXT:null;if(r===Df)return 6403;if(r===If)return 36244;if(r===Pf)return 33319;if(r===Nf)return 33320;if(r===Of)return 36249;if(r===ar||r===or||r===cr||r===lr)if(o===ze)if(c=e.get("WEBGL_compressed_texture_s3tc_srgb"),c!==null){if(r===ar)return c.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===or)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===cr)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===lr)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(c=e.get("WEBGL_compressed_texture_s3tc"),c!==null){if(r===ar)return c.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===or)return c.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===cr)return c.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===lr)return c.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===Qa||r===eo||r===to||r===no)if(c=e.get("WEBGL_compressed_texture_pvrtc"),c!==null){if(r===Qa)return c.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===eo)return c.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===to)return c.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===no)return c.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===Ff)return c=e.get("WEBGL_compressed_texture_etc1"),c!==null?c.COMPRESSED_RGB_ETC1_WEBGL:null;if(r===io||r===so)if(c=e.get("WEBGL_compressed_texture_etc"),c!==null){if(r===io)return o===ze?c.COMPRESSED_SRGB8_ETC2:c.COMPRESSED_RGB8_ETC2;if(r===so)return o===ze?c.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:c.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(r===ro||r===ao||r===oo||r===co||r===lo||r===uo||r===ho||r===fo||r===po||r===mo||r===go||r===_o||r===xo||r===vo)if(c=e.get("WEBGL_compressed_texture_astc"),c!==null){if(r===ro)return o===ze?c.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:c.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===ao)return o===ze?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:c.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===oo)return o===ze?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:c.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===co)return o===ze?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:c.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===lo)return o===ze?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:c.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===uo)return o===ze?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:c.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===ho)return o===ze?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:c.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===fo)return o===ze?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:c.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===po)return o===ze?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:c.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===mo)return o===ze?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:c.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===go)return o===ze?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:c.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===_o)return o===ze?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:c.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===xo)return o===ze?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:c.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===vo)return o===ze?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:c.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===ur)if(c=e.get("EXT_texture_compression_bptc"),c!==null){if(r===ur)return o===ze?c.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:c.COMPRESSED_RGBA_BPTC_UNORM_EXT}else return null;if(r===Uf||r===yo||r===bo||r===Mo)if(c=e.get("EXT_texture_compression_rgtc"),c!==null){if(r===ur)return c.COMPRESSED_RED_RGTC1_EXT;if(r===yo)return c.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===bo)return c.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===Mo)return c.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===xi?i?34042:(c=e.get("WEBGL_depth_texture"),c!==null?c.UNSIGNED_INT_24_8_WEBGL:null):a[r]!==void 0?a[r]:null}return{convert:s}}class tx extends yt{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class kn extends Ye{constructor(){super(),this.isGroup=!0,this.type="Group"}}const nx={type:"move"};class Or{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new kn,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new kn,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new D,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new D),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new kn,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new D,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new D),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let s=null,r=null,o=null;const c=this._targetRay,l=this._grip,u=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(u&&e.hand){o=!0;for(const m of e.hand.values()){const p=t.getJointPose(m,i),x=this._getHandJoint(u,m);p!==null&&(x.matrix.fromArray(p.transform.matrix),x.matrix.decompose(x.position,x.rotation,x.scale),x.jointRadius=p.radius),x.visible=p!==null}const h=u.joints["index-finger-tip"],d=u.joints["thumb-tip"],f=h.position.distanceTo(d.position),g=.02,_=.005;u.inputState.pinching&&f>g+_?(u.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!u.inputState.pinching&&f<=g-_&&(u.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,i),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));c!==null&&(s=t.getPose(e.targetRaySpace,i),s===null&&r!==null&&(s=r),s!==null&&(c.matrix.fromArray(s.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),s.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(s.linearVelocity)):c.hasLinearVelocity=!1,s.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(s.angularVelocity)):c.hasAngularVelocity=!1,this.dispatchEvent(nx)))}return c!==null&&(c.visible=s!==null),l!==null&&(l.visible=r!==null),u!==null&&(u.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const i=new kn;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}}class ix extends lt{constructor(e,t,i,s,r,o,c,l,u,h){if(h=h!==void 0?h:zn,h!==zn&&h!==wi)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&h===zn&&(i=Un),i===void 0&&h===wi&&(i=xi),super(null,s,r,o,c,l,h,i,u),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=c!==void 0?c:ct,this.minFilter=l!==void 0?l:ct,this.flipY=!1,this.generateMipmaps=!1}}class sx extends Jn{constructor(e,t){super();const i=this;let s=null,r=1,o=null,c="local-floor",l=1,u=null,h=null,d=null,f=null,g=null,_=null;const m=t.getContextAttributes();let p=null,x=null;const E=[],y=[],M=new Set,w=new Map,L=new yt;L.layers.enable(1),L.viewport=new We;const I=new yt;I.layers.enable(2),I.viewport=new We;const b=[L,I],A=new tx;A.layers.enable(1),A.layers.enable(2);let F=null,$=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(z){let Z=E[z];return Z===void 0&&(Z=new Or,E[z]=Z),Z.getTargetRaySpace()},this.getControllerGrip=function(z){let Z=E[z];return Z===void 0&&(Z=new Or,E[z]=Z),Z.getGripSpace()},this.getHand=function(z){let Z=E[z];return Z===void 0&&(Z=new Or,E[z]=Z),Z.getHandSpace()};function X(z){const Z=y.indexOf(z.inputSource);if(Z===-1)return;const se=E[Z];se!==void 0&&se.dispatchEvent({type:z.type,data:z.inputSource})}function U(){s.removeEventListener("select",X),s.removeEventListener("selectstart",X),s.removeEventListener("selectend",X),s.removeEventListener("squeeze",X),s.removeEventListener("squeezestart",X),s.removeEventListener("squeezeend",X),s.removeEventListener("end",U),s.removeEventListener("inputsourceschange",P);for(let z=0;z<E.length;z++){const Z=y[z];Z!==null&&(y[z]=null,E[z].disconnect(Z))}F=null,$=null,e.setRenderTarget(p),g=null,f=null,d=null,s=null,x=null,ve.stop(),i.isPresenting=!1,i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(z){r=z,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(z){c=z,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return u||o},this.setReferenceSpace=function(z){u=z},this.getBaseLayer=function(){return f!==null?f:g},this.getBinding=function(){return d},this.getFrame=function(){return _},this.getSession=function(){return s},this.setSession=async function(z){if(s=z,s!==null){if(p=e.getRenderTarget(),s.addEventListener("select",X),s.addEventListener("selectstart",X),s.addEventListener("selectend",X),s.addEventListener("squeeze",X),s.addEventListener("squeezestart",X),s.addEventListener("squeezeend",X),s.addEventListener("end",U),s.addEventListener("inputsourceschange",P),m.xrCompatible!==!0&&await t.makeXRCompatible(),s.renderState.layers===void 0||e.capabilities.isWebGL2===!1){const Z={antialias:s.renderState.layers===void 0?m.antialias:!0,alpha:m.alpha,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:r};g=new XRWebGLLayer(s,t,Z),s.updateRenderState({baseLayer:g}),x=new $n(g.framebufferWidth,g.framebufferHeight,{format:Ft,type:qn,encoding:e.outputEncoding,stencilBuffer:m.stencil})}else{let Z=null,se=null,B=null;m.depth&&(B=m.stencil?35056:33190,Z=m.stencil?wi:zn,se=m.stencil?xi:Un);const ue={colorFormat:32856,depthFormat:B,scaleFactor:r};d=new XRWebGLBinding(s,t),f=d.createProjectionLayer(ue),s.updateRenderState({layers:[f]}),x=new $n(f.textureWidth,f.textureHeight,{format:Ft,type:qn,depthTexture:new ix(f.textureWidth,f.textureHeight,se,void 0,void 0,void 0,void 0,void 0,void 0,Z),stencilBuffer:m.stencil,encoding:e.outputEncoding,samples:m.antialias?4:0});const he=e.properties.get(x);he.__ignoreDepthValues=f.ignoreDepthValues}x.isXRRenderTarget=!0,this.setFoveation(l),u=null,o=await s.requestReferenceSpace(c),ve.setContext(s),ve.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}};function P(z){for(let Z=0;Z<z.removed.length;Z++){const se=z.removed[Z],B=y.indexOf(se);B>=0&&(y[B]=null,E[B].disconnect(se))}for(let Z=0;Z<z.added.length;Z++){const se=z.added[Z];let B=y.indexOf(se);if(B===-1){for(let he=0;he<E.length;he++)if(he>=y.length){y.push(se),B=he;break}else if(y[he]===null){y[he]=se,B=he;break}if(B===-1)break}const ue=E[B];ue&&ue.connect(se)}}const G=new D,Y=new D;function Q(z,Z,se){G.setFromMatrixPosition(Z.matrixWorld),Y.setFromMatrixPosition(se.matrixWorld);const B=G.distanceTo(Y),ue=Z.projectionMatrix.elements,he=se.projectionMatrix.elements,fe=ue[14]/(ue[10]-1),de=ue[14]/(ue[10]+1),be=(ue[9]+1)/ue[5],Te=(ue[9]-1)/ue[5],Ae=(ue[8]-1)/ue[0],Fe=(he[8]+1)/he[0],nt=fe*Ae,ft=fe*Fe,it=B/(-Ae+Fe),st=it*-Ae;Z.matrixWorld.decompose(z.position,z.quaternion,z.scale),z.translateX(st),z.translateZ(it),z.matrixWorld.compose(z.position,z.quaternion,z.scale),z.matrixWorldInverse.copy(z.matrixWorld).invert();const $e=fe+it,je=de+it,wt=nt-st,pt=ft+(B-st),T=be*de/je*$e,v=Te*de/je*$e;z.projectionMatrix.makePerspective(wt,pt,T,v,$e,je)}function q(z,Z){Z===null?z.matrixWorld.copy(z.matrix):z.matrixWorld.multiplyMatrices(Z.matrixWorld,z.matrix),z.matrixWorldInverse.copy(z.matrixWorld).invert()}this.updateCamera=function(z){if(s===null)return;A.near=I.near=L.near=z.near,A.far=I.far=L.far=z.far,(F!==A.near||$!==A.far)&&(s.updateRenderState({depthNear:A.near,depthFar:A.far}),F=A.near,$=A.far);const Z=z.parent,se=A.cameras;q(A,Z);for(let ue=0;ue<se.length;ue++)q(se[ue],Z);A.matrixWorld.decompose(A.position,A.quaternion,A.scale),z.matrix.copy(A.matrix),z.matrix.decompose(z.position,z.quaternion,z.scale);const B=z.children;for(let ue=0,he=B.length;ue<he;ue++)B[ue].updateMatrixWorld(!0);se.length===2?Q(A,L,I):A.projectionMatrix.copy(L.projectionMatrix)},this.getCamera=function(){return A},this.getFoveation=function(){if(!(f===null&&g===null))return l},this.setFoveation=function(z){l=z,f!==null&&(f.fixedFoveation=z),g!==null&&g.fixedFoveation!==void 0&&(g.fixedFoveation=z)},this.getPlanes=function(){return M};let ee=null;function K(z,Z){if(h=Z.getViewerPose(u||o),_=Z,h!==null){const se=h.views;g!==null&&(e.setRenderTargetFramebuffer(x,g.framebuffer),e.setRenderTarget(x));let B=!1;se.length!==A.cameras.length&&(A.cameras.length=0,B=!0);for(let ue=0;ue<se.length;ue++){const he=se[ue];let fe=null;if(g!==null)fe=g.getViewport(he);else{const be=d.getViewSubImage(f,he);fe=be.viewport,ue===0&&(e.setRenderTargetTextures(x,be.colorTexture,f.ignoreDepthValues?void 0:be.depthStencilTexture),e.setRenderTarget(x))}let de=b[ue];de===void 0&&(de=new yt,de.layers.enable(ue),de.viewport=new We,b[ue]=de),de.matrix.fromArray(he.transform.matrix),de.projectionMatrix.fromArray(he.projectionMatrix),de.viewport.set(fe.x,fe.y,fe.width,fe.height),ue===0&&A.matrix.copy(de.matrix),B===!0&&A.cameras.push(de)}}for(let se=0;se<E.length;se++){const B=y[se],ue=E[se];B!==null&&ue!==void 0&&ue.update(B,Z,u||o)}if(ee&&ee(z,Z),Z.detectedPlanes){i.dispatchEvent({type:"planesdetected",data:Z.detectedPlanes});let se=null;for(const B of M)Z.detectedPlanes.has(B)||(se===null&&(se=[]),se.push(B));if(se!==null)for(const B of se)M.delete(B),w.delete(B),i.dispatchEvent({type:"planeremoved",data:B});for(const B of Z.detectedPlanes)if(!M.has(B))M.add(B),w.set(B,Z.lastChangedTime),i.dispatchEvent({type:"planeadded",data:B});else{const ue=w.get(B);B.lastChangedTime>ue&&(w.set(B,B.lastChangedTime),i.dispatchEvent({type:"planechanged",data:B}))}}_=null}const ve=new zl;ve.setAnimationLoop(K),this.setAnimationLoop=function(z){ee=z},this.dispose=function(){}}}function rx(a,e){function t(m,p){p.color.getRGB(m.fogColor.value,Ul(a)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function i(m,p,x,E,y){p.isMeshBasicMaterial||p.isMeshLambertMaterial?s(m,p):p.isMeshToonMaterial?(s(m,p),h(m,p)):p.isMeshPhongMaterial?(s(m,p),u(m,p)):p.isMeshStandardMaterial?(s(m,p),d(m,p),p.isMeshPhysicalMaterial&&f(m,p,y)):p.isMeshMatcapMaterial?(s(m,p),g(m,p)):p.isMeshDepthMaterial?s(m,p):p.isMeshDistanceMaterial?(s(m,p),_(m,p)):p.isMeshNormalMaterial?s(m,p):p.isLineBasicMaterial?(r(m,p),p.isLineDashedMaterial&&o(m,p)):p.isPointsMaterial?c(m,p,x,E):p.isSpriteMaterial?l(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function s(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map),p.alphaMap&&(m.alphaMap.value=p.alphaMap),p.bumpMap&&(m.bumpMap.value=p.bumpMap,m.bumpScale.value=p.bumpScale,p.side===Rt&&(m.bumpScale.value*=-1)),p.displacementMap&&(m.displacementMap.value=p.displacementMap,m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap),p.normalMap&&(m.normalMap.value=p.normalMap,m.normalScale.value.copy(p.normalScale),p.side===Rt&&m.normalScale.value.negate()),p.specularMap&&(m.specularMap.value=p.specularMap),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);const x=e.get(p).envMap;if(x&&(m.envMap.value=x,m.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap){m.lightMap.value=p.lightMap;const M=a.useLegacyLights===!0?Math.PI:1;m.lightMapIntensity.value=p.lightMapIntensity*M}p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity);let E;p.map?E=p.map:p.specularMap?E=p.specularMap:p.displacementMap?E=p.displacementMap:p.normalMap?E=p.normalMap:p.bumpMap?E=p.bumpMap:p.roughnessMap?E=p.roughnessMap:p.metalnessMap?E=p.metalnessMap:p.alphaMap?E=p.alphaMap:p.emissiveMap?E=p.emissiveMap:p.clearcoatMap?E=p.clearcoatMap:p.clearcoatNormalMap?E=p.clearcoatNormalMap:p.clearcoatRoughnessMap?E=p.clearcoatRoughnessMap:p.iridescenceMap?E=p.iridescenceMap:p.iridescenceThicknessMap?E=p.iridescenceThicknessMap:p.specularIntensityMap?E=p.specularIntensityMap:p.specularColorMap?E=p.specularColorMap:p.transmissionMap?E=p.transmissionMap:p.thicknessMap?E=p.thicknessMap:p.sheenColorMap?E=p.sheenColorMap:p.sheenRoughnessMap&&(E=p.sheenRoughnessMap),E!==void 0&&(E.isWebGLRenderTarget&&(E=E.texture),E.matrixAutoUpdate===!0&&E.updateMatrix(),m.uvTransform.value.copy(E.matrix));let y;p.aoMap?y=p.aoMap:p.lightMap&&(y=p.lightMap),y!==void 0&&(y.isWebGLRenderTarget&&(y=y.texture),y.matrixAutoUpdate===!0&&y.updateMatrix(),m.uv2Transform.value.copy(y.matrix))}function r(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity}function o(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function c(m,p,x,E){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*x,m.scale.value=E*.5,p.map&&(m.map.value=p.map),p.alphaMap&&(m.alphaMap.value=p.alphaMap),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);let y;p.map?y=p.map:p.alphaMap&&(y=p.alphaMap),y!==void 0&&(y.matrixAutoUpdate===!0&&y.updateMatrix(),m.uvTransform.value.copy(y.matrix))}function l(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map),p.alphaMap&&(m.alphaMap.value=p.alphaMap),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);let x;p.map?x=p.map:p.alphaMap&&(x=p.alphaMap),x!==void 0&&(x.matrixAutoUpdate===!0&&x.updateMatrix(),m.uvTransform.value.copy(x.matrix))}function u(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function h(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function d(m,p){m.roughness.value=p.roughness,m.metalness.value=p.metalness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap),p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap),e.get(p).envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function f(m,p,x){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap)),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap),p.clearcoatNormalMap&&(m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),m.clearcoatNormalMap.value=p.clearcoatNormalMap,p.side===Rt&&m.clearcoatNormalScale.value.negate())),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap)),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=x.texture,m.transmissionSamplerSize.value.set(x.width,x.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap)}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function _(m,p){m.referencePosition.value.copy(p.referencePosition),m.nearDistance.value=p.nearDistance,m.farDistance.value=p.farDistance}return{refreshFogUniforms:t,refreshMaterialUniforms:i}}function ax(a,e,t,i){let s={},r={},o=[];const c=t.isWebGL2?a.getParameter(35375):0;function l(E,y){const M=y.program;i.uniformBlockBinding(E,M)}function u(E,y){let M=s[E.id];M===void 0&&(_(E),M=h(E),s[E.id]=M,E.addEventListener("dispose",p));const w=y.program;i.updateUBOMapping(E,w);const L=e.render.frame;r[E.id]!==L&&(f(E),r[E.id]=L)}function h(E){const y=d();E.__bindingPointIndex=y;const M=a.createBuffer(),w=E.__size,L=E.usage;return a.bindBuffer(35345,M),a.bufferData(35345,w,L),a.bindBuffer(35345,null),a.bindBufferBase(35345,y,M),M}function d(){for(let E=0;E<c;E++)if(o.indexOf(E)===-1)return o.push(E),E;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(E){const y=s[E.id],M=E.uniforms,w=E.__cache;a.bindBuffer(35345,y);for(let L=0,I=M.length;L<I;L++){const b=M[L];if(g(b,L,w)===!0){const A=b.__offset,F=Array.isArray(b.value)?b.value:[b.value];let $=0;for(let X=0;X<F.length;X++){const U=F[X],P=m(U);typeof U=="number"?(b.__data[0]=U,a.bufferSubData(35345,A+$,b.__data)):U.isMatrix3?(b.__data[0]=U.elements[0],b.__data[1]=U.elements[1],b.__data[2]=U.elements[2],b.__data[3]=U.elements[0],b.__data[4]=U.elements[3],b.__data[5]=U.elements[4],b.__data[6]=U.elements[5],b.__data[7]=U.elements[0],b.__data[8]=U.elements[6],b.__data[9]=U.elements[7],b.__data[10]=U.elements[8],b.__data[11]=U.elements[0]):(U.toArray(b.__data,$),$+=P.storage/Float32Array.BYTES_PER_ELEMENT)}a.bufferSubData(35345,A,b.__data)}}a.bindBuffer(35345,null)}function g(E,y,M){const w=E.value;if(M[y]===void 0){if(typeof w=="number")M[y]=w;else{const L=Array.isArray(w)?w:[w],I=[];for(let b=0;b<L.length;b++)I.push(L[b].clone());M[y]=I}return!0}else if(typeof w=="number"){if(M[y]!==w)return M[y]=w,!0}else{const L=Array.isArray(M[y])?M[y]:[M[y]],I=Array.isArray(w)?w:[w];for(let b=0;b<L.length;b++){const A=L[b];if(A.equals(I[b])===!1)return A.copy(I[b]),!0}}return!1}function _(E){const y=E.uniforms;let M=0;const w=16;let L=0;for(let I=0,b=y.length;I<b;I++){const A=y[I],F={boundary:0,storage:0},$=Array.isArray(A.value)?A.value:[A.value];for(let X=0,U=$.length;X<U;X++){const P=$[X],G=m(P);F.boundary+=G.boundary,F.storage+=G.storage}if(A.__data=new Float32Array(F.storage/Float32Array.BYTES_PER_ELEMENT),A.__offset=M,I>0){L=M%w;const X=w-L;L!==0&&X-F.boundary<0&&(M+=w-L,A.__offset=M)}M+=F.storage}return L=M%w,L>0&&(M+=w-L),E.__size=M,E.__cache={},this}function m(E){const y={boundary:0,storage:0};return typeof E=="number"?(y.boundary=4,y.storage=4):E.isVector2?(y.boundary=8,y.storage=8):E.isVector3||E.isColor?(y.boundary=16,y.storage=12):E.isVector4?(y.boundary=16,y.storage=16):E.isMatrix3?(y.boundary=48,y.storage=48):E.isMatrix4?(y.boundary=64,y.storage=64):E.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",E),y}function p(E){const y=E.target;y.removeEventListener("dispose",p);const M=o.indexOf(y.__bindingPointIndex);o.splice(M,1),a.deleteBuffer(s[y.id]),delete s[y.id],delete r[y.id]}function x(){for(const E in s)a.deleteBuffer(s[E]);o=[],s={},r={}}return{bind:l,update:u,dispose:x}}function ox(){const a=ns("canvas");return a.style.display="block",a}function va(a={}){this.isWebGLRenderer=!0;const e=a.canvas!==void 0?a.canvas:ox(),t=a.context!==void 0?a.context:null,i=a.depth!==void 0?a.depth:!0,s=a.stencil!==void 0?a.stencil:!0,r=a.antialias!==void 0?a.antialias:!1,o=a.premultipliedAlpha!==void 0?a.premultipliedAlpha:!0,c=a.preserveDrawingBuffer!==void 0?a.preserveDrawingBuffer:!1,l=a.powerPreference!==void 0?a.powerPreference:"default",u=a.failIfMajorPerformanceCaveat!==void 0?a.failIfMajorPerformanceCaveat:!1;let h;t!==null?h=t.getContextAttributes().alpha:h=a.alpha!==void 0?a.alpha:!1;let d=null,f=null;const g=[],_=[];this.domElement=e,this.debug={checkShaderErrors:!0},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.outputEncoding=Xn,this.useLegacyLights=!0,this.toneMapping=un,this.toneMappingExposure=1;const m=this;let p=!1,x=0,E=0,y=null,M=-1,w=null;const L=new We,I=new We;let b=null,A=e.width,F=e.height,$=1,X=null,U=null;const P=new We(0,0,A,F),G=new We(0,0,A,F);let Y=!1;const Q=new ma;let q=!1,ee=!1,K=null;const ve=new Re,z=new D,Z={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function se(){return y===null?$:1}let B=t;function ue(S,k){for(let V=0;V<S.length;V++){const O=S[V],j=e.getContext(O,k);if(j!==null)return j}return null}try{const S={alpha:!0,depth:i,stencil:s,antialias:r,premultipliedAlpha:o,preserveDrawingBuffer:c,powerPreference:l,failIfMajorPerformanceCaveat:u};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${da}`),e.addEventListener("webglcontextlost",me,!1),e.addEventListener("webglcontextrestored",_e,!1),e.addEventListener("webglcontextcreationerror",ge,!1),B===null){const k=["webgl2","webgl","experimental-webgl"];if(m.isWebGL1Renderer===!0&&k.shift(),B=ue(k,S),B===null)throw ue(k)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}B.getShaderPrecisionFormat===void 0&&(B.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(S){throw console.error("THREE.WebGLRenderer: "+S.message),S}let he,fe,de,be,Te,Ae,Fe,nt,ft,it,st,$e,je,wt,pt,T,v,H,te,ne,ae,xe,C,N;function oe(){he=new x_(B),fe=new d_(B,he,a),he.init(fe),xe=new ex(B,he,fe),de=new J0(B,he,fe),be=new b_,Te=new B0,Ae=new Q0(B,he,de,Te,fe,xe,be),Fe=new p_(m),nt=new __(m),ft=new Rp(B,fe),C=new u_(B,he,ft,fe),it=new v_(B,ft,be,C),st=new T_(B,it,ft,be),te=new w_(B,fe,Ae),T=new f_(Te),$e=new U0(m,Fe,nt,he,fe,C,T),je=new rx(m,Te),wt=new z0,pt=new q0(he,fe),H=new l_(m,Fe,nt,de,st,h,o),v=new Z0(m,st,fe),N=new ax(B,be,fe,de),ne=new h_(B,he,be,fe),ae=new y_(B,he,be,fe),be.programs=$e.programs,m.capabilities=fe,m.extensions=he,m.properties=Te,m.renderLists=wt,m.shadowMap=v,m.state=de,m.info=be}oe();const re=new sx(m,B);this.xr=re,this.getContext=function(){return B},this.getContextAttributes=function(){return B.getContextAttributes()},this.forceContextLoss=function(){const S=he.get("WEBGL_lose_context");S&&S.loseContext()},this.forceContextRestore=function(){const S=he.get("WEBGL_lose_context");S&&S.restoreContext()},this.getPixelRatio=function(){return $},this.setPixelRatio=function(S){S!==void 0&&($=S,this.setSize(A,F,!1))},this.getSize=function(S){return S.set(A,F)},this.setSize=function(S,k,V=!0){if(re.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}A=S,F=k,e.width=Math.floor(S*$),e.height=Math.floor(k*$),V===!0&&(e.style.width=S+"px",e.style.height=k+"px"),this.setViewport(0,0,S,k)},this.getDrawingBufferSize=function(S){return S.set(A*$,F*$).floor()},this.setDrawingBufferSize=function(S,k,V){A=S,F=k,$=V,e.width=Math.floor(S*V),e.height=Math.floor(k*V),this.setViewport(0,0,S,k)},this.getCurrentViewport=function(S){return S.copy(L)},this.getViewport=function(S){return S.copy(P)},this.setViewport=function(S,k,V,O){S.isVector4?P.set(S.x,S.y,S.z,S.w):P.set(S,k,V,O),de.viewport(L.copy(P).multiplyScalar($).floor())},this.getScissor=function(S){return S.copy(G)},this.setScissor=function(S,k,V,O){S.isVector4?G.set(S.x,S.y,S.z,S.w):G.set(S,k,V,O),de.scissor(I.copy(G).multiplyScalar($).floor())},this.getScissorTest=function(){return Y},this.setScissorTest=function(S){de.setScissorTest(Y=S)},this.setOpaqueSort=function(S){X=S},this.setTransparentSort=function(S){U=S},this.getClearColor=function(S){return S.copy(H.getClearColor())},this.setClearColor=function(){H.setClearColor.apply(H,arguments)},this.getClearAlpha=function(){return H.getClearAlpha()},this.setClearAlpha=function(){H.setClearAlpha.apply(H,arguments)},this.clear=function(S=!0,k=!0,V=!0){let O=0;S&&(O|=16384),k&&(O|=256),V&&(O|=1024),B.clear(O)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",me,!1),e.removeEventListener("webglcontextrestored",_e,!1),e.removeEventListener("webglcontextcreationerror",ge,!1),wt.dispose(),pt.dispose(),Te.dispose(),Fe.dispose(),nt.dispose(),st.dispose(),C.dispose(),N.dispose(),$e.dispose(),re.dispose(),re.removeEventListener("sessionstart",J),re.removeEventListener("sessionend",ce),K&&(K.dispose(),K=null),pe.stop()};function me(S){S.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),p=!0}function _e(){console.log("THREE.WebGLRenderer: Context Restored."),p=!1;const S=be.autoReset,k=v.enabled,V=v.autoUpdate,O=v.needsUpdate,j=v.type;oe(),be.autoReset=S,v.enabled=k,v.autoUpdate=V,v.needsUpdate=O,v.type=j}function ge(S){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",S.statusMessage)}function De(S){const k=S.target;k.removeEventListener("dispose",De),Ue(k)}function Ue(S){Ve(S),Te.remove(S)}function Ve(S){const k=Te.get(S).programs;k!==void 0&&(k.forEach(function(V){$e.releaseProgram(V)}),S.isShaderMaterial&&$e.releaseShaderCache(S))}this.renderBufferDirect=function(S,k,V,O,j,ye){k===null&&(k=Z);const Me=j.isMesh&&j.matrixWorld.determinant()<0,Ce=eu(S,k,V,O,j);de.setMaterial(O,Me);let Le=V.index,Be=1;O.wireframe===!0&&(Le=it.getWireframeAttribute(V),Be=2);const Ie=V.drawRange,Pe=V.attributes.position;let Ze=Ie.start*Be,Tt=(Ie.start+Ie.count)*Be;ye!==null&&(Ze=Math.max(Ze,ye.start*Be),Tt=Math.min(Tt,(ye.start+ye.count)*Be)),Le!==null?(Ze=Math.max(Ze,0),Tt=Math.min(Tt,Le.count)):Pe!=null&&(Ze=Math.max(Ze,0),Tt=Math.min(Tt,Pe.count));const Qt=Tt-Ze;if(Qt<0||Qt===1/0)return;C.setup(j,O,Ce,V,Le);let En,Je=ne;if(Le!==null&&(En=ft.get(Le),Je=ae,Je.setIndex(En)),j.isMesh)O.wireframe===!0?(de.setLineWidth(O.wireframeLinewidth*se()),Je.setMode(1)):Je.setMode(4);else if(j.isLine){let Ne=O.linewidth;Ne===void 0&&(Ne=1),de.setLineWidth(Ne*se()),j.isLineSegments?Je.setMode(1):j.isLineLoop?Je.setMode(2):Je.setMode(3)}else j.isPoints?Je.setMode(0):j.isSprite&&Je.setMode(4);if(j.isInstancedMesh)Je.renderInstances(Ze,Qt,j.count);else if(V.isInstancedBufferGeometry){const Ne=V._maxInstanceCount!==void 0?V._maxInstanceCount:1/0,Ys=Math.min(V.instanceCount,Ne);Je.renderInstances(Ze,Qt,Ys)}else Je.render(Ze,Qt)},this.compile=function(S,k){function V(O,j,ye){O.transparent===!0&&O.side===cn&&O.forceSinglePass===!1?(O.side=Rt,O.needsUpdate=!0,It(O,j,ye),O.side=hn,O.needsUpdate=!0,It(O,j,ye),O.side=cn):It(O,j,ye)}f=pt.get(S),f.init(),_.push(f),S.traverseVisible(function(O){O.isLight&&O.layers.test(k.layers)&&(f.pushLight(O),O.castShadow&&f.pushShadow(O))}),f.setupLights(m.useLegacyLights),S.traverse(function(O){const j=O.material;if(j)if(Array.isArray(j))for(let ye=0;ye<j.length;ye++){const Me=j[ye];V(Me,S,O)}else V(j,S,O)}),_.pop(),f=null};let R=null;function W(S){R&&R(S)}function J(){pe.stop()}function ce(){pe.start()}const pe=new zl;pe.setAnimationLoop(W),typeof self<"u"&&pe.setContext(self),this.setAnimationLoop=function(S){R=S,re.setAnimationLoop(S),S===null?pe.stop():pe.start()},re.addEventListener("sessionstart",J),re.addEventListener("sessionend",ce),this.render=function(S,k){if(k!==void 0&&k.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(p===!0)return;S.matrixWorldAutoUpdate===!0&&S.updateMatrixWorld(),k.parent===null&&k.matrixWorldAutoUpdate===!0&&k.updateMatrixWorld(),re.enabled===!0&&re.isPresenting===!0&&(re.cameraAutoUpdate===!0&&re.updateCamera(k),k=re.getCamera()),S.isScene===!0&&S.onBeforeRender(m,S,k,y),f=pt.get(S,_.length),f.init(),_.push(f),ve.multiplyMatrices(k.projectionMatrix,k.matrixWorldInverse),Q.setFromProjectionMatrix(ve),ee=this.localClippingEnabled,q=T.init(this.clippingPlanes,ee),d=wt.get(S,g.length),d.init(),g.push(d),qe(S,k,0,m.sortObjects),d.finish(),m.sortObjects===!0&&d.sort(X,U),q===!0&&T.beginShadows();const V=f.state.shadowsArray;if(v.render(V,S,k),q===!0&&T.endShadows(),this.info.autoReset===!0&&this.info.reset(),H.render(d,S),f.setupLights(m.useLegacyLights),k.isArrayCamera){const O=k.cameras;for(let j=0,ye=O.length;j<ye;j++){const Me=O[j];rt(d,S,Me,Me.viewport)}}else rt(d,S,k);y!==null&&(Ae.updateMultisampleRenderTarget(y),Ae.updateRenderTargetMipmap(y)),S.isScene===!0&&S.onAfterRender(m,S,k),C.resetDefaultState(),M=-1,w=null,_.pop(),_.length>0?f=_[_.length-1]:f=null,g.pop(),g.length>0?d=g[g.length-1]:d=null};function qe(S,k,V,O){if(S.visible===!1)return;if(S.layers.test(k.layers)){if(S.isGroup)V=S.renderOrder;else if(S.isLOD)S.autoUpdate===!0&&S.update(k);else if(S.isLight)f.pushLight(S),S.castShadow&&f.pushShadow(S);else if(S.isSprite){if(!S.frustumCulled||Q.intersectsSprite(S)){O&&z.setFromMatrixPosition(S.matrixWorld).applyMatrix4(ve);const Me=st.update(S),Ce=S.material;Ce.visible&&d.push(S,Me,Ce,V,z.z,null)}}else if((S.isMesh||S.isLine||S.isPoints)&&(S.isSkinnedMesh&&S.skeleton.frame!==be.render.frame&&(S.skeleton.update(),S.skeleton.frame=be.render.frame),!S.frustumCulled||Q.intersectsObject(S))){O&&z.setFromMatrixPosition(S.matrixWorld).applyMatrix4(ve);const Me=st.update(S),Ce=S.material;if(Array.isArray(Ce)){const Le=Me.groups;for(let Be=0,Ie=Le.length;Be<Ie;Be++){const Pe=Le[Be],Ze=Ce[Pe.materialIndex];Ze&&Ze.visible&&d.push(S,Me,Ze,V,z.z,Pe)}}else Ce.visible&&d.push(S,Me,Ce,V,z.z,null)}}const ye=S.children;for(let Me=0,Ce=ye.length;Me<Ce;Me++)qe(ye[Me],k,V,O)}function rt(S,k,V,O){const j=S.opaque,ye=S.transmissive,Me=S.transparent;f.setupLightsView(V),q===!0&&T.setGlobalState(m.clippingPlanes,V),ye.length>0&&mt(j,k,V),O&&de.viewport(L.copy(O)),j.length>0&&jt(j,k,V),ye.length>0&&jt(ye,k,V),Me.length>0&&jt(Me,k,V),de.buffers.depth.setTest(!0),de.buffers.depth.setMask(!0),de.buffers.color.setMask(!0),de.setPolygonOffset(!1)}function mt(S,k,V){const O=fe.isWebGL2;K===null&&(K=new $n(1024,1024,{generateMipmaps:!0,type:he.has("EXT_color_buffer_half_float")?Ji:qn,minFilter:jn,samples:O&&r===!0?4:0}));const j=m.getRenderTarget();m.setRenderTarget(K),m.clear();const ye=m.toneMapping;m.toneMapping=un,jt(S,k,V),m.toneMapping=ye,Ae.updateMultisampleRenderTarget(K),Ae.updateRenderTargetMipmap(K),m.setRenderTarget(j)}function jt(S,k,V){const O=k.isScene===!0?k.overrideMaterial:null;for(let j=0,ye=S.length;j<ye;j++){const Me=S[j],Ce=Me.object,Le=Me.geometry,Be=O===null?Me.material:O,Ie=Me.group;Ce.layers.test(V.layers)&&Ke(Ce,k,V,Le,Be,Ie)}}function Ke(S,k,V,O,j,ye){S.onBeforeRender(m,k,V,O,j,ye),S.modelViewMatrix.multiplyMatrices(V.matrixWorldInverse,S.matrixWorld),S.normalMatrix.getNormalMatrix(S.modelViewMatrix),j.onBeforeRender(m,k,V,O,S,ye),j.transparent===!0&&j.side===cn&&j.forceSinglePass===!1?(j.side=Rt,j.needsUpdate=!0,m.renderBufferDirect(V,k,O,j,S,ye),j.side=hn,j.needsUpdate=!0,m.renderBufferDirect(V,k,O,j,S,ye),j.side=cn):m.renderBufferDirect(V,k,O,j,S,ye),S.onAfterRender(m,k,V,O,j,ye)}function It(S,k,V){k.isScene!==!0&&(k=Z);const O=Te.get(S),j=f.state.lights,ye=f.state.shadowsArray,Me=j.state.version,Ce=$e.getParameters(S,j.state,ye,k,V),Le=$e.getProgramCacheKey(Ce);let Be=O.programs;O.environment=S.isMeshStandardMaterial?k.environment:null,O.fog=k.fog,O.envMap=(S.isMeshStandardMaterial?nt:Fe).get(S.envMap||O.environment),Be===void 0&&(S.addEventListener("dispose",De),Be=new Map,O.programs=Be);let Ie=Be.get(Le);if(Ie!==void 0){if(O.currentProgram===Ie&&O.lightsStateVersion===Me)return qt(S,Ce),Ie}else Ce.uniforms=$e.getUniforms(S),S.onBuild(V,Ce,m),S.onBeforeCompile(Ce,m),Ie=$e.acquireProgram(Ce,Le),Be.set(Le,Ie),O.uniforms=Ce.uniforms;const Pe=O.uniforms;(!S.isShaderMaterial&&!S.isRawShaderMaterial||S.clipping===!0)&&(Pe.clippingPlanes=T.uniform),qt(S,Ce),O.needsLights=nu(S),O.lightsStateVersion=Me,O.needsLights&&(Pe.ambientLightColor.value=j.state.ambient,Pe.lightProbe.value=j.state.probe,Pe.directionalLights.value=j.state.directional,Pe.directionalLightShadows.value=j.state.directionalShadow,Pe.spotLights.value=j.state.spot,Pe.spotLightShadows.value=j.state.spotShadow,Pe.rectAreaLights.value=j.state.rectArea,Pe.ltc_1.value=j.state.rectAreaLTC1,Pe.ltc_2.value=j.state.rectAreaLTC2,Pe.pointLights.value=j.state.point,Pe.pointLightShadows.value=j.state.pointShadow,Pe.hemisphereLights.value=j.state.hemi,Pe.directionalShadowMap.value=j.state.directionalShadowMap,Pe.directionalShadowMatrix.value=j.state.directionalShadowMatrix,Pe.spotShadowMap.value=j.state.spotShadowMap,Pe.spotLightMatrix.value=j.state.spotLightMatrix,Pe.spotLightMap.value=j.state.spotLightMap,Pe.pointShadowMap.value=j.state.pointShadowMap,Pe.pointShadowMatrix.value=j.state.pointShadowMatrix);const Ze=Ie.getUniforms(),Tt=Ps.seqWithValue(Ze.seq,Pe);return O.currentProgram=Ie,O.uniformsList=Tt,Ie}function qt(S,k){const V=Te.get(S);V.outputEncoding=k.outputEncoding,V.instancing=k.instancing,V.skinning=k.skinning,V.morphTargets=k.morphTargets,V.morphNormals=k.morphNormals,V.morphColors=k.morphColors,V.morphTargetsCount=k.morphTargetsCount,V.numClippingPlanes=k.numClippingPlanes,V.numIntersection=k.numClipIntersection,V.vertexAlphas=k.vertexAlphas,V.vertexTangents=k.vertexTangents,V.toneMapping=k.toneMapping}function eu(S,k,V,O,j){k.isScene!==!0&&(k=Z),Ae.resetTextureUnits();const ye=k.fog,Me=O.isMeshStandardMaterial?k.environment:null,Ce=y===null?m.outputEncoding:y.isXRRenderTarget===!0?y.texture.encoding:Xn,Le=(O.isMeshStandardMaterial?nt:Fe).get(O.envMap||Me),Be=O.vertexColors===!0&&!!V.attributes.color&&V.attributes.color.itemSize===4,Ie=!!O.normalMap&&!!V.attributes.tangent,Pe=!!V.morphAttributes.position,Ze=!!V.morphAttributes.normal,Tt=!!V.morphAttributes.color,Qt=O.toneMapped?m.toneMapping:un,En=V.morphAttributes.position||V.morphAttributes.normal||V.morphAttributes.color,Je=En!==void 0?En.length:0,Ne=Te.get(O),Ys=f.state.lights;if(q===!0&&(ee===!0||S!==w)){const Et=S===w&&O.id===M;T.setState(O,S,Et)}let at=!1;O.version===Ne.__version?(Ne.needsLights&&Ne.lightsStateVersion!==Ys.state.version||Ne.outputEncoding!==Ce||j.isInstancedMesh&&Ne.instancing===!1||!j.isInstancedMesh&&Ne.instancing===!0||j.isSkinnedMesh&&Ne.skinning===!1||!j.isSkinnedMesh&&Ne.skinning===!0||Ne.envMap!==Le||O.fog===!0&&Ne.fog!==ye||Ne.numClippingPlanes!==void 0&&(Ne.numClippingPlanes!==T.numPlanes||Ne.numIntersection!==T.numIntersection)||Ne.vertexAlphas!==Be||Ne.vertexTangents!==Ie||Ne.morphTargets!==Pe||Ne.morphNormals!==Ze||Ne.morphColors!==Tt||Ne.toneMapping!==Qt||fe.isWebGL2===!0&&Ne.morphTargetsCount!==Je)&&(at=!0):(at=!0,Ne.__version=O.version);let An=Ne.currentProgram;at===!0&&(An=It(O,k,j));let Ca=!1,Ni=!1,Ks=!1;const gt=An.getUniforms(),Cn=Ne.uniforms;if(de.useProgram(An.program)&&(Ca=!0,Ni=!0,Ks=!0),O.id!==M&&(M=O.id,Ni=!0),Ca||w!==S){if(gt.setValue(B,"projectionMatrix",S.projectionMatrix),fe.logarithmicDepthBuffer&&gt.setValue(B,"logDepthBufFC",2/(Math.log(S.far+1)/Math.LN2)),w!==S&&(w=S,Ni=!0,Ks=!0),O.isShaderMaterial||O.isMeshPhongMaterial||O.isMeshToonMaterial||O.isMeshStandardMaterial||O.envMap){const Et=gt.map.cameraPosition;Et!==void 0&&Et.setValue(B,z.setFromMatrixPosition(S.matrixWorld))}(O.isMeshPhongMaterial||O.isMeshToonMaterial||O.isMeshLambertMaterial||O.isMeshBasicMaterial||O.isMeshStandardMaterial||O.isShaderMaterial)&&gt.setValue(B,"isOrthographic",S.isOrthographicCamera===!0),(O.isMeshPhongMaterial||O.isMeshToonMaterial||O.isMeshLambertMaterial||O.isMeshBasicMaterial||O.isMeshStandardMaterial||O.isShaderMaterial||O.isShadowMaterial||j.isSkinnedMesh)&&gt.setValue(B,"viewMatrix",S.matrixWorldInverse)}if(j.isSkinnedMesh){gt.setOptional(B,j,"bindMatrix"),gt.setOptional(B,j,"bindMatrixInverse");const Et=j.skeleton;Et&&(fe.floatVertexTextures?(Et.boneTexture===null&&Et.computeBoneTexture(),gt.setValue(B,"boneTexture",Et.boneTexture,Ae),gt.setValue(B,"boneTextureSize",Et.boneTextureSize)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}const Zs=V.morphAttributes;if((Zs.position!==void 0||Zs.normal!==void 0||Zs.color!==void 0&&fe.isWebGL2===!0)&&te.update(j,V,An),(Ni||Ne.receiveShadow!==j.receiveShadow)&&(Ne.receiveShadow=j.receiveShadow,gt.setValue(B,"receiveShadow",j.receiveShadow)),O.isMeshGouraudMaterial&&O.envMap!==null&&(Cn.envMap.value=Le,Cn.flipEnvMap.value=Le.isCubeTexture&&Le.isRenderTargetTexture===!1?-1:1),Ni&&(gt.setValue(B,"toneMappingExposure",m.toneMappingExposure),Ne.needsLights&&tu(Cn,Ks),ye&&O.fog===!0&&je.refreshFogUniforms(Cn,ye),je.refreshMaterialUniforms(Cn,O,$,F,K),Ps.upload(B,Ne.uniformsList,Cn,Ae)),O.isShaderMaterial&&O.uniformsNeedUpdate===!0&&(Ps.upload(B,Ne.uniformsList,Cn,Ae),O.uniformsNeedUpdate=!1),O.isSpriteMaterial&&gt.setValue(B,"center",j.center),gt.setValue(B,"modelViewMatrix",j.modelViewMatrix),gt.setValue(B,"normalMatrix",j.normalMatrix),gt.setValue(B,"modelMatrix",j.matrixWorld),O.isShaderMaterial||O.isRawShaderMaterial){const Et=O.uniformsGroups;for(let Js=0,iu=Et.length;Js<iu;Js++)if(fe.isWebGL2){const La=Et[Js];N.update(La,An),N.bind(La,An)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return An}function tu(S,k){S.ambientLightColor.needsUpdate=k,S.lightProbe.needsUpdate=k,S.directionalLights.needsUpdate=k,S.directionalLightShadows.needsUpdate=k,S.pointLights.needsUpdate=k,S.pointLightShadows.needsUpdate=k,S.spotLights.needsUpdate=k,S.spotLightShadows.needsUpdate=k,S.rectAreaLights.needsUpdate=k,S.hemisphereLights.needsUpdate=k}function nu(S){return S.isMeshLambertMaterial||S.isMeshToonMaterial||S.isMeshPhongMaterial||S.isMeshStandardMaterial||S.isShadowMaterial||S.isShaderMaterial&&S.lights===!0}this.getActiveCubeFace=function(){return x},this.getActiveMipmapLevel=function(){return E},this.getRenderTarget=function(){return y},this.setRenderTargetTextures=function(S,k,V){Te.get(S.texture).__webglTexture=k,Te.get(S.depthTexture).__webglTexture=V;const O=Te.get(S);O.__hasExternalTextures=!0,O.__hasExternalTextures&&(O.__autoAllocateDepthBuffer=V===void 0,O.__autoAllocateDepthBuffer||he.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),O.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(S,k){const V=Te.get(S);V.__webglFramebuffer=k,V.__useDefaultFramebuffer=k===void 0},this.setRenderTarget=function(S,k=0,V=0){y=S,x=k,E=V;let O=!0,j=null,ye=!1,Me=!1;if(S){const Le=Te.get(S);Le.__useDefaultFramebuffer!==void 0?(de.bindFramebuffer(36160,null),O=!1):Le.__webglFramebuffer===void 0?Ae.setupRenderTarget(S):Le.__hasExternalTextures&&Ae.rebindTextures(S,Te.get(S.texture).__webglTexture,Te.get(S.depthTexture).__webglTexture);const Be=S.texture;(Be.isData3DTexture||Be.isDataArrayTexture||Be.isCompressedArrayTexture)&&(Me=!0);const Ie=Te.get(S).__webglFramebuffer;S.isWebGLCubeRenderTarget?(j=Ie[k],ye=!0):fe.isWebGL2&&S.samples>0&&Ae.useMultisampledRTT(S)===!1?j=Te.get(S).__webglMultisampledFramebuffer:j=Ie,L.copy(S.viewport),I.copy(S.scissor),b=S.scissorTest}else L.copy(P).multiplyScalar($).floor(),I.copy(G).multiplyScalar($).floor(),b=Y;if(de.bindFramebuffer(36160,j)&&fe.drawBuffers&&O&&de.drawBuffers(S,j),de.viewport(L),de.scissor(I),de.setScissorTest(b),ye){const Le=Te.get(S.texture);B.framebufferTexture2D(36160,36064,34069+k,Le.__webglTexture,V)}else if(Me){const Le=Te.get(S.texture),Be=k||0;B.framebufferTextureLayer(36160,36064,Le.__webglTexture,V||0,Be)}M=-1},this.readRenderTargetPixels=function(S,k,V,O,j,ye,Me){if(!(S&&S.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ce=Te.get(S).__webglFramebuffer;if(S.isWebGLCubeRenderTarget&&Me!==void 0&&(Ce=Ce[Me]),Ce){de.bindFramebuffer(36160,Ce);try{const Le=S.texture,Be=Le.format,Ie=Le.type;if(Be!==Ft&&xe.convert(Be)!==B.getParameter(35739)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const Pe=Ie===Ji&&(he.has("EXT_color_buffer_half_float")||fe.isWebGL2&&he.has("EXT_color_buffer_float"));if(Ie!==qn&&xe.convert(Ie)!==B.getParameter(35738)&&!(Ie===vn&&(fe.isWebGL2||he.has("OES_texture_float")||he.has("WEBGL_color_buffer_float")))&&!Pe){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}k>=0&&k<=S.width-O&&V>=0&&V<=S.height-j&&B.readPixels(k,V,O,j,xe.convert(Be),xe.convert(Ie),ye)}finally{const Le=y!==null?Te.get(y).__webglFramebuffer:null;de.bindFramebuffer(36160,Le)}}},this.copyFramebufferToTexture=function(S,k,V=0){const O=Math.pow(2,-V),j=Math.floor(k.image.width*O),ye=Math.floor(k.image.height*O);Ae.setTexture2D(k,0),B.copyTexSubImage2D(3553,V,0,0,S.x,S.y,j,ye),de.unbindTexture()},this.copyTextureToTexture=function(S,k,V,O=0){const j=k.image.width,ye=k.image.height,Me=xe.convert(V.format),Ce=xe.convert(V.type);Ae.setTexture2D(V,0),B.pixelStorei(37440,V.flipY),B.pixelStorei(37441,V.premultiplyAlpha),B.pixelStorei(3317,V.unpackAlignment),k.isDataTexture?B.texSubImage2D(3553,O,S.x,S.y,j,ye,Me,Ce,k.image.data):k.isCompressedTexture?B.compressedTexSubImage2D(3553,O,S.x,S.y,k.mipmaps[0].width,k.mipmaps[0].height,Me,k.mipmaps[0].data):B.texSubImage2D(3553,O,S.x,S.y,Me,Ce,k.image),O===0&&V.generateMipmaps&&B.generateMipmap(3553),de.unbindTexture()},this.copyTextureToTexture3D=function(S,k,V,O,j=0){if(m.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const ye=S.max.x-S.min.x+1,Me=S.max.y-S.min.y+1,Ce=S.max.z-S.min.z+1,Le=xe.convert(O.format),Be=xe.convert(O.type);let Ie;if(O.isData3DTexture)Ae.setTexture3D(O,0),Ie=32879;else if(O.isDataArrayTexture)Ae.setTexture2DArray(O,0),Ie=35866;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}B.pixelStorei(37440,O.flipY),B.pixelStorei(37441,O.premultiplyAlpha),B.pixelStorei(3317,O.unpackAlignment);const Pe=B.getParameter(3314),Ze=B.getParameter(32878),Tt=B.getParameter(3316),Qt=B.getParameter(3315),En=B.getParameter(32877),Je=V.isCompressedTexture?V.mipmaps[0]:V.image;B.pixelStorei(3314,Je.width),B.pixelStorei(32878,Je.height),B.pixelStorei(3316,S.min.x),B.pixelStorei(3315,S.min.y),B.pixelStorei(32877,S.min.z),V.isDataTexture||V.isData3DTexture?B.texSubImage3D(Ie,j,k.x,k.y,k.z,ye,Me,Ce,Le,Be,Je.data):V.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),B.compressedTexSubImage3D(Ie,j,k.x,k.y,k.z,ye,Me,Ce,Le,Je.data)):B.texSubImage3D(Ie,j,k.x,k.y,k.z,ye,Me,Ce,Le,Be,Je),B.pixelStorei(3314,Pe),B.pixelStorei(32878,Ze),B.pixelStorei(3316,Tt),B.pixelStorei(3315,Qt),B.pixelStorei(32877,En),j===0&&O.generateMipmaps&&B.generateMipmap(Ie),de.unbindTexture()},this.initTexture=function(S){S.isCubeTexture?Ae.setTextureCube(S,0):S.isData3DTexture?Ae.setTexture3D(S,0):S.isDataArrayTexture||S.isCompressedArrayTexture?Ae.setTexture2DArray(S,0):Ae.setTexture2D(S,0),de.unbindTexture()},this.resetState=function(){x=0,E=0,y=null,de.reset(),C.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}Object.defineProperties(va.prototype,{physicallyCorrectLights:{get:function(){return console.warn("THREE.WebGLRenderer: the property .physicallyCorrectLights has been removed. Set renderer.useLegacyLights instead."),!this.useLegacyLights},set:function(a){console.warn("THREE.WebGLRenderer: the property .physicallyCorrectLights has been removed. Set renderer.useLegacyLights instead."),this.useLegacyLights=!a}}});class cx extends va{}cx.prototype.isWebGL1Renderer=!0;class lx extends Ye{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t}get autoUpdate(){return console.warn("THREE.Scene: autoUpdate was renamed to matrixWorldAutoUpdate in r144."),this.matrixWorldAutoUpdate}set autoUpdate(e){console.warn("THREE.Scene: autoUpdate was renamed to matrixWorldAutoUpdate in r144."),this.matrixWorldAutoUpdate=e}}class ux{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=Qr,this.updateRange={offset:0,count:-1},this.version=0,this.uuid=Ht()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,i){e*=this.stride,i*=t.stride;for(let s=0,r=this.stride;s<r;s++)this.array[e+s]=t.array[i+s];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Ht()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),i=new this.constructor(t,this.stride);return i.setUsage(this.usage),i}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Ht()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const xt=new D;class ya{constructor(e,t,i,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=i,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,i=this.data.count;t<i;t++)xt.fromBufferAttribute(this,t),xt.applyMatrix4(e),this.setXYZ(t,xt.x,xt.y,xt.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)xt.fromBufferAttribute(this,t),xt.applyNormalMatrix(e),this.setXYZ(t,xt.x,xt.y,xt.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)xt.fromBufferAttribute(this,t),xt.transformDirection(e),this.setXYZ(t,xt.x,xt.y,xt.z);return this}setX(e,t){return this.normalized&&(t=He(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=He(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=He(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=He(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=ln(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=ln(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=ln(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=ln(t,this.array)),t}setXY(e,t,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=He(t,this.array),i=He(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this}setXYZ(e,t,i,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=He(t,this.array),i=He(i,this.array),s=He(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=s,this}setXYZW(e,t,i,s,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=He(t,this.array),i=He(i,this.array),s=He(s,this.array),r=He(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=s,this.data.array[e+3]=r,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let i=0;i<this.count;i++){const s=i*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return new Mt(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new ya(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let i=0;i<this.count;i++){const s=i*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}const oc=new D,cc=new We,lc=new We,hx=new D,uc=new Re;class dx extends Ut{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode="attached",this.bindMatrix=new Re,this.bindMatrixInverse=new Re}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,this}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){const e=new We,t=this.geometry.attributes.skinWeight;for(let i=0,s=t.count;i<s;i++){e.fromBufferAttribute(t,i);const r=1/e.manhattanLength();r!==1/0?e.multiplyScalar(r):e.set(1,0,0,0),t.setXYZW(i,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode==="attached"?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode==="detached"?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}boneTransform(e,t){const i=this.skeleton,s=this.geometry;cc.fromBufferAttribute(s.attributes.skinIndex,e),lc.fromBufferAttribute(s.attributes.skinWeight,e),oc.copy(t).applyMatrix4(this.bindMatrix),t.set(0,0,0);for(let r=0;r<4;r++){const o=lc.getComponent(r);if(o!==0){const c=cc.getComponent(r);uc.multiplyMatrices(i.bones[c].matrixWorld,i.boneInverses[c]),t.addScaledVector(hx.copy(oc).applyMatrix4(uc),o)}}return t.applyMatrix4(this.bindMatrixInverse)}}class jl extends Ye{constructor(){super(),this.isBone=!0,this.type="Bone"}}class fx extends lt{constructor(e=null,t=1,i=1,s,r,o,c,l,u=ct,h=ct,d,f){super(null,o,c,l,u,h,s,r,d,f),this.isDataTexture=!0,this.image={data:e,width:t,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const hc=new Re,px=new Re;class ba{constructor(e=[],t=[]){this.uuid=Ht(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.boneTexture=null,this.boneTextureSize=0,this.frame=-1,this.init()}init(){const e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let i=0,s=this.bones.length;i<s;i++)this.boneInverses.push(new Re)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){const i=new Re;this.bones[e]&&i.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(i)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){const i=this.bones[e];i&&i.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){const i=this.bones[e];i&&(i.parent&&i.parent.isBone?(i.matrix.copy(i.parent.matrixWorld).invert(),i.matrix.multiply(i.matrixWorld)):i.matrix.copy(i.matrixWorld),i.matrix.decompose(i.position,i.quaternion,i.scale))}}update(){const e=this.bones,t=this.boneInverses,i=this.boneMatrices,s=this.boneTexture;for(let r=0,o=e.length;r<o;r++){const c=e[r]?e[r].matrixWorld:px;hc.multiplyMatrices(c,t[r]),hc.toArray(i,r*16)}s!==null&&(s.needsUpdate=!0)}clone(){return new ba(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Al(e),e=Math.max(e,4);const t=new Float32Array(e*e*4);t.set(this.boneMatrices);const i=new fx(t,e,e,Ft,vn);return i.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=i,this.boneTextureSize=e,this}getBoneByName(e){for(let t=0,i=this.bones.length;t<i;t++){const s=this.bones[t];if(s.name===e)return s}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let i=0,s=e.bones.length;i<s;i++){const r=e.bones[i];let o=t[r];o===void 0&&(console.warn("THREE.Skeleton: No bone found with UUID:",r),o=new jl),this.bones.push(o),this.boneInverses.push(new Re().fromArray(e.boneInverses[i]))}return this.init(),this}toJSON(){const e={metadata:{version:4.5,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;const t=this.bones,i=this.boneInverses;for(let s=0,r=t.length;s<r;s++){const o=t[s];e.bones.push(o.uuid);const c=i[s];e.boneInverses.push(c.toArray())}return e}}class dc extends Mt{constructor(e,t,i,s=1){super(e,t,i),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const fc=new Re,pc=new Re,As=[],mx=new Re,Vi=new Ut;class gx extends Ut{constructor(e,t,i){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new dc(new Float32Array(i*16),16),this.instanceColor=null,this.count=i,this.frustumCulled=!1;for(let s=0;s<i;s++)this.setMatrixAt(s,mx)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}raycast(e,t){const i=this.matrixWorld,s=this.count;if(Vi.geometry=this.geometry,Vi.material=this.material,Vi.material!==void 0)for(let r=0;r<s;r++){this.getMatrixAt(r,fc),pc.multiplyMatrices(i,fc),Vi.matrixWorld=pc,Vi.raycast(e,As);for(let o=0,c=As.length;o<c;o++){const l=As[o];l.instanceId=r,l.object=this,t.push(l)}As.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new dc(new Float32Array(this.instanceMatrix.count*3),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"})}}class qs extends Kt{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new we(16777215),this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const mc=new D,gc=new D,_c=new Re,Fr=new pa,Cs=new Li;class Ma extends Ye{constructor(e=new kt,t=new qs){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,i=[0];for(let s=1,r=t.count;s<r;s++)mc.fromBufferAttribute(t,s-1),gc.fromBufferAttribute(t,s),i[s]=i[s-1],i[s]+=mc.distanceTo(gc);e.setAttribute("lineDistance",new Dt(i,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const i=this.geometry,s=this.matrixWorld,r=e.params.Line.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Cs.copy(i.boundingSphere),Cs.applyMatrix4(s),Cs.radius+=r,e.ray.intersectsSphere(Cs)===!1)return;_c.copy(s).invert(),Fr.copy(e.ray).applyMatrix4(_c);const c=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=c*c,u=new D,h=new D,d=new D,f=new D,g=this.isLineSegments?2:1,_=i.index,p=i.attributes.position;if(_!==null){const x=Math.max(0,o.start),E=Math.min(_.count,o.start+o.count);for(let y=x,M=E-1;y<M;y+=g){const w=_.getX(y),L=_.getX(y+1);if(u.fromBufferAttribute(p,w),h.fromBufferAttribute(p,L),Fr.distanceSqToSegment(u,h,f,d)>l)continue;f.applyMatrix4(this.matrixWorld);const b=e.ray.origin.distanceTo(f);b<e.near||b>e.far||t.push({distance:b,point:d.clone().applyMatrix4(this.matrixWorld),index:y,face:null,faceIndex:null,object:this})}}else{const x=Math.max(0,o.start),E=Math.min(p.count,o.start+o.count);for(let y=x,M=E-1;y<M;y+=g){if(u.fromBufferAttribute(p,y),h.fromBufferAttribute(p,y+1),Fr.distanceSqToSegment(u,h,f,d)>l)continue;f.applyMatrix4(this.matrixWorld);const L=e.ray.origin.distanceTo(f);L<e.near||L>e.far||t.push({distance:L,point:d.clone().applyMatrix4(this.matrixWorld),index:y,face:null,faceIndex:null,object:this})}}}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const c=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[c]=r}}}}}const xc=new D,vc=new D;class Sa extends Ma{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,i=[];for(let s=0,r=t.count;s<r;s+=2)xc.fromBufferAttribute(t,s),vc.fromBufferAttribute(t,s+1),i[s]=s===0?0:i[s-1],i[s+1]=i[s]+xc.distanceTo(vc);e.setAttribute("lineDistance",new Dt(i,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class _x extends Ma{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}}class ql extends Kt{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new we(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const yc=new Re,ia=new pa,Ls=new Li,Rs=new D;class xx extends Ye{constructor(e=new kt,t=new ql){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=e.material,this.geometry=e.geometry,this}raycast(e,t){const i=this.geometry,s=this.matrixWorld,r=e.params.Points.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Ls.copy(i.boundingSphere),Ls.applyMatrix4(s),Ls.radius+=r,e.ray.intersectsSphere(Ls)===!1)return;yc.copy(s).invert(),ia.copy(e.ray).applyMatrix4(yc);const c=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=c*c,u=i.index,d=i.attributes.position;if(u!==null){const f=Math.max(0,o.start),g=Math.min(u.count,o.start+o.count);for(let _=f,m=g;_<m;_++){const p=u.getX(_);Rs.fromBufferAttribute(d,p),bc(Rs,p,l,s,e,t,this)}}else{const f=Math.max(0,o.start),g=Math.min(d.count,o.start+o.count);for(let _=f,m=g;_<m;_++)Rs.fromBufferAttribute(d,_),bc(Rs,_,l,s,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const c=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[c]=r}}}}}function bc(a,e,t,i,s,r,o){const c=ia.distanceSqToPoint(a);if(c<t){const l=new D;ia.closestPointToPoint(a,l),l.applyMatrix4(i);const u=s.ray.origin.distanceTo(l);if(u<s.near||u>s.far)return;r.push({distance:u,distanceToRay:Math.sqrt(c),point:l,index:e,face:null,object:o})}}class wa extends Kt{constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new we(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new we(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Tl,this.normalScale=new Se(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Qn extends wa{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new Se(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return dt(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new we(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new we(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new we(1,1,1),this.specularColorMap=null,this._sheen=0,this._clearcoat=0,this._iridescence=0,this._transmission=0,this.setValues(e)}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}function gn(a,e,t){return Xl(a)?new a.constructor(a.subarray(e,t!==void 0?t:a.length)):a.slice(e,t)}function Ds(a,e,t){return!a||!t&&a.constructor===e?a:typeof e.BYTES_PER_ELEMENT=="number"?new e(a):Array.prototype.slice.call(a)}function Xl(a){return ArrayBuffer.isView(a)&&!(a instanceof DataView)}function vx(a){function e(s,r){return a[s]-a[r]}const t=a.length,i=new Array(t);for(let s=0;s!==t;++s)i[s]=s;return i.sort(e),i}function Mc(a,e,t){const i=a.length,s=new a.constructor(i);for(let r=0,o=0;o!==i;++r){const c=t[r]*e;for(let l=0;l!==e;++l)s[o++]=a[c+l]}return s}function $l(a,e,t,i){let s=1,r=a[0];for(;r!==void 0&&r[i]===void 0;)r=a[s++];if(r===void 0)return;let o=r[i];if(o!==void 0)if(Array.isArray(o))do o=r[i],o!==void 0&&(e.push(r.time),t.push.apply(t,o)),r=a[s++];while(r!==void 0);else if(o.toArray!==void 0)do o=r[i],o!==void 0&&(e.push(r.time),o.toArray(t,t.length)),r=a[s++];while(r!==void 0);else do o=r[i],o!==void 0&&(e.push(r.time),t.push(o)),r=a[s++];while(r!==void 0)}class as{constructor(e,t,i,s){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new t.constructor(i),this.sampleValues=t,this.valueSize=i,this.settings=null,this.DefaultSettings_={}}evaluate(e){const t=this.parameterPositions;let i=this._cachedIndex,s=t[i],r=t[i-1];e:{t:{let o;n:{i:if(!(e<s)){for(let c=i+2;;){if(s===void 0){if(e<r)break i;return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}if(i===c)break;if(r=s,s=t[++i],e<s)break t}o=t.length;break n}if(!(e>=r)){const c=t[1];e<c&&(i=2,r=c);for(let l=i-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===l)break;if(s=r,r=t[--i-1],e>=r)break t}o=i,i=0;break n}break e}for(;i<o;){const c=i+o>>>1;e<t[c]?o=c:i=c+1}if(s=t[i],r=t[i-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}this._cachedIndex=i,this.intervalChanged_(i,r,s)}return this.interpolate_(i,r,e,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){const t=this.resultBuffer,i=this.sampleValues,s=this.valueSize,r=e*s;for(let o=0;o!==s;++o)t[o]=i[r+o];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}}class yx extends as{constructor(e,t,i,s){super(e,t,i,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:So,endingEnd:So}}intervalChanged_(e,t,i){const s=this.parameterPositions;let r=e-2,o=e+1,c=s[r],l=s[o];if(c===void 0)switch(this.getSettings_().endingStart){case wo:r=e,c=2*t-i;break;case To:r=s.length-2,c=t+s[r]-s[r+1];break;default:r=e,c=i}if(l===void 0)switch(this.getSettings_().endingEnd){case wo:o=e,l=2*i-t;break;case To:o=1,l=i+s[1]-s[0];break;default:o=e-1,l=t}const u=(i-t)*.5,h=this.valueSize;this._weightPrev=u/(t-c),this._weightNext=u/(l-i),this._offsetPrev=r*h,this._offsetNext=o*h}interpolate_(e,t,i,s){const r=this.resultBuffer,o=this.sampleValues,c=this.valueSize,l=e*c,u=l-c,h=this._offsetPrev,d=this._offsetNext,f=this._weightPrev,g=this._weightNext,_=(i-t)/(s-t),m=_*_,p=m*_,x=-f*p+2*f*m-f*_,E=(1+f)*p+(-1.5-2*f)*m+(-.5+f)*_+1,y=(-1-g)*p+(1.5+g)*m+.5*_,M=g*p-g*m;for(let w=0;w!==c;++w)r[w]=x*o[h+w]+E*o[u+w]+y*o[l+w]+M*o[d+w];return r}}class bx extends as{constructor(e,t,i,s){super(e,t,i,s)}interpolate_(e,t,i,s){const r=this.resultBuffer,o=this.sampleValues,c=this.valueSize,l=e*c,u=l-c,h=(i-t)/(s-t),d=1-h;for(let f=0;f!==c;++f)r[f]=o[u+f]*d+o[l+f]*h;return r}}class Mx extends as{constructor(e,t,i,s){super(e,t,i,s)}interpolate_(e){return this.copySampleValue_(e-1)}}class Jt{constructor(e,t,i,s){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=Ds(t,this.TimeBufferType),this.values=Ds(i,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(e){const t=e.constructor;let i;if(t.toJSON!==this.toJSON)i=t.toJSON(e);else{i={name:e.name,times:Ds(e.times,Array),values:Ds(e.values,Array)};const s=e.getInterpolation();s!==e.DefaultInterpolation&&(i.interpolation=s)}return i.type=e.ValueTypeName,i}InterpolantFactoryMethodDiscrete(e){return new Mx(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new bx(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new yx(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case Qi:t=this.InterpolantFactoryMethodDiscrete;break;case Ti:t=this.InterpolantFactoryMethodLinear;break;case hr:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){const i="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(i);return console.warn("THREE.KeyframeTrack:",i),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Qi;case this.InterpolantFactoryMethodLinear:return Ti;case this.InterpolantFactoryMethodSmooth:return hr}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){const t=this.times;for(let i=0,s=t.length;i!==s;++i)t[i]+=e}return this}scale(e){if(e!==1){const t=this.times;for(let i=0,s=t.length;i!==s;++i)t[i]*=e}return this}trim(e,t){const i=this.times,s=i.length;let r=0,o=s-1;for(;r!==s&&i[r]<e;)++r;for(;o!==-1&&i[o]>t;)--o;if(++o,r!==0||o!==s){r>=o&&(o=Math.max(o,1),r=o-1);const c=this.getValueSize();this.times=gn(i,r,o),this.values=gn(this.values,r*c,o*c)}return this}validate(){let e=!0;const t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);const i=this.times,s=this.values,r=i.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let o=null;for(let c=0;c!==r;c++){const l=i[c];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,c,l),e=!1;break}if(o!==null&&o>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,c,l,o),e=!1;break}o=l}if(s!==void 0&&Xl(s))for(let c=0,l=s.length;c!==l;++c){const u=s[c];if(isNaN(u)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,c,u),e=!1;break}}return e}optimize(){const e=gn(this.times),t=gn(this.values),i=this.getValueSize(),s=this.getInterpolation()===hr,r=e.length-1;let o=1;for(let c=1;c<r;++c){let l=!1;const u=e[c],h=e[c+1];if(u!==h&&(c!==1||u!==e[0]))if(s)l=!0;else{const d=c*i,f=d-i,g=d+i;for(let _=0;_!==i;++_){const m=t[d+_];if(m!==t[f+_]||m!==t[g+_]){l=!0;break}}}if(l){if(c!==o){e[o]=e[c];const d=c*i,f=o*i;for(let g=0;g!==i;++g)t[f+g]=t[d+g]}++o}}if(r>0){e[o]=e[r];for(let c=r*i,l=o*i,u=0;u!==i;++u)t[l+u]=t[c+u];++o}return o!==e.length?(this.times=gn(e,0,o),this.values=gn(t,0,o*i)):(this.times=e,this.values=t),this}clone(){const e=gn(this.times,0),t=gn(this.values,0),i=this.constructor,s=new i(this.name,e,t);return s.createInterpolant=this.createInterpolant,s}}Jt.prototype.TimeBufferType=Float32Array;Jt.prototype.ValueBufferType=Float32Array;Jt.prototype.DefaultInterpolation=Ti;class Di extends Jt{}Di.prototype.ValueTypeName="bool";Di.prototype.ValueBufferType=Array;Di.prototype.DefaultInterpolation=Qi;Di.prototype.InterpolantFactoryMethodLinear=void 0;Di.prototype.InterpolantFactoryMethodSmooth=void 0;class Yl extends Jt{}Yl.prototype.ValueTypeName="color";class is extends Jt{}is.prototype.ValueTypeName="number";class Sx extends as{constructor(e,t,i,s){super(e,t,i,s)}interpolate_(e,t,i,s){const r=this.resultBuffer,o=this.sampleValues,c=this.valueSize,l=(i-t)/(s-t);let u=e*c;for(let h=u+c;u!==h;u+=4)Zt.slerpFlat(r,0,o,u-c,o,u,l);return r}}class Kn extends Jt{InterpolantFactoryMethodLinear(e){return new Sx(this.times,this.values,this.getValueSize(),e)}}Kn.prototype.ValueTypeName="quaternion";Kn.prototype.DefaultInterpolation=Ti;Kn.prototype.InterpolantFactoryMethodSmooth=void 0;class Ii extends Jt{}Ii.prototype.ValueTypeName="string";Ii.prototype.ValueBufferType=Array;Ii.prototype.DefaultInterpolation=Qi;Ii.prototype.InterpolantFactoryMethodLinear=void 0;Ii.prototype.InterpolantFactoryMethodSmooth=void 0;class ss extends Jt{}ss.prototype.ValueTypeName="vector";class wx{constructor(e,t=-1,i,s=Bf){this.name=e,this.tracks=i,this.duration=t,this.blendMode=s,this.uuid=Ht(),this.duration<0&&this.resetDuration()}static parse(e){const t=[],i=e.tracks,s=1/(e.fps||1);for(let o=0,c=i.length;o!==c;++o)t.push(Ex(i[o]).scale(s));const r=new this(e.name,e.duration,t,e.blendMode);return r.uuid=e.uuid,r}static toJSON(e){const t=[],i=e.tracks,s={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode};for(let r=0,o=i.length;r!==o;++r)t.push(Jt.toJSON(i[r]));return s}static CreateFromMorphTargetSequence(e,t,i,s){const r=t.length,o=[];for(let c=0;c<r;c++){let l=[],u=[];l.push((c+r-1)%r,c,(c+1)%r),u.push(0,1,0);const h=vx(l);l=Mc(l,1,h),u=Mc(u,1,h),!s&&l[0]===0&&(l.push(r),u.push(u[0])),o.push(new is(".morphTargetInfluences["+t[c].name+"]",l,u).scale(1/i))}return new this(e,-1,o)}static findByName(e,t){let i=e;if(!Array.isArray(e)){const s=e;i=s.geometry&&s.geometry.animations||s.animations}for(let s=0;s<i.length;s++)if(i[s].name===t)return i[s];return null}static CreateClipsFromMorphTargetSequences(e,t,i){const s={},r=/^([\w-]*?)([\d]+)$/;for(let c=0,l=e.length;c<l;c++){const u=e[c],h=u.name.match(r);if(h&&h.length>1){const d=h[1];let f=s[d];f||(s[d]=f=[]),f.push(u)}}const o=[];for(const c in s)o.push(this.CreateFromMorphTargetSequence(c,s[c],t,i));return o}static parseAnimation(e,t){if(!e)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;const i=function(d,f,g,_,m){if(g.length!==0){const p=[],x=[];$l(g,p,x,_),p.length!==0&&m.push(new d(f,p,x))}},s=[],r=e.name||"default",o=e.fps||30,c=e.blendMode;let l=e.length||-1;const u=e.hierarchy||[];for(let d=0;d<u.length;d++){const f=u[d].keys;if(!(!f||f.length===0))if(f[0].morphTargets){const g={};let _;for(_=0;_<f.length;_++)if(f[_].morphTargets)for(let m=0;m<f[_].morphTargets.length;m++)g[f[_].morphTargets[m]]=-1;for(const m in g){const p=[],x=[];for(let E=0;E!==f[_].morphTargets.length;++E){const y=f[_];p.push(y.time),x.push(y.morphTarget===m?1:0)}s.push(new is(".morphTargetInfluence["+m+"]",p,x))}l=g.length*o}else{const g=".bones["+t[d].name+"]";i(ss,g+".position",f,"pos",s),i(Kn,g+".quaternion",f,"rot",s),i(ss,g+".scale",f,"scl",s)}}return s.length===0?null:new this(r,l,s,c)}resetDuration(){const e=this.tracks;let t=0;for(let i=0,s=e.length;i!==s;++i){const r=this.tracks[i];t=Math.max(t,r.times[r.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){const e=[];for(let t=0;t<this.tracks.length;t++)e.push(this.tracks[t].clone());return new this.constructor(this.name,this.duration,e,this.blendMode)}toJSON(){return this.constructor.toJSON(this)}}function Tx(a){switch(a.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return is;case"vector":case"vector2":case"vector3":case"vector4":return ss;case"color":return Yl;case"quaternion":return Kn;case"bool":case"boolean":return Di;case"string":return Ii}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+a)}function Ex(a){if(a.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");const e=Tx(a.type);if(a.times===void 0){const t=[],i=[];$l(a.keys,t,i,"value"),a.times=t,a.values=i}return e.parse!==void 0?e.parse(a):new e(a.name,a.times,a.values,a.interpolation)}const Ai={enabled:!1,files:{},add:function(a,e){this.enabled!==!1&&(this.files[a]=e)},get:function(a){if(this.enabled!==!1)return this.files[a]},remove:function(a){delete this.files[a]},clear:function(){this.files={}}};class Ax{constructor(e,t,i){const s=this;let r=!1,o=0,c=0,l;const u=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=i,this.itemStart=function(h){c++,r===!1&&s.onStart!==void 0&&s.onStart(h,o,c),r=!0},this.itemEnd=function(h){o++,s.onProgress!==void 0&&s.onProgress(h,o,c),o===c&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,d){return u.push(h,d),this},this.removeHandler=function(h){const d=u.indexOf(h);return d!==-1&&u.splice(d,2),this},this.getHandler=function(h){for(let d=0,f=u.length;d<f;d+=2){const g=u[d],_=u[d+1];if(g.global&&(g.lastIndex=0),g.test(h))return _}return null}}}const Cx=new Ax;class os{constructor(e){this.manager=e!==void 0?e:Cx,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const i=this;return new Promise(function(s,r){i.load(e,s,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}const an={};class Lx extends Error{constructor(e,t){super(e),this.response=t}}class Kl extends os{constructor(e){super(e)}load(e,t,i,s){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=Ai.get(e);if(r!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(r),this.manager.itemEnd(e)},0),r;if(an[e]!==void 0){an[e].push({onLoad:t,onProgress:i,onError:s});return}an[e]=[],an[e].push({onLoad:t,onProgress:i,onError:s});const o=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),c=this.mimeType,l=this.responseType;fetch(o).then(u=>{if(u.status===200||u.status===0){if(u.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||u.body===void 0||u.body.getReader===void 0)return u;const h=an[e],d=u.body.getReader(),f=u.headers.get("Content-Length")||u.headers.get("X-File-Size"),g=f?parseInt(f):0,_=g!==0;let m=0;const p=new ReadableStream({start(x){E();function E(){d.read().then(({done:y,value:M})=>{if(y)x.close();else{m+=M.byteLength;const w=new ProgressEvent("progress",{lengthComputable:_,loaded:m,total:g});for(let L=0,I=h.length;L<I;L++){const b=h[L];b.onProgress&&b.onProgress(w)}x.enqueue(M),E()}})}}});return new Response(p)}else throw new Lx(`fetch for "${u.url}" responded with ${u.status}: ${u.statusText}`,u)}).then(u=>{switch(l){case"arraybuffer":return u.arrayBuffer();case"blob":return u.blob();case"document":return u.text().then(h=>new DOMParser().parseFromString(h,c));case"json":return u.json();default:if(c===void 0)return u.text();{const d=/charset="?([^;"\s]*)"?/i.exec(c),f=d&&d[1]?d[1].toLowerCase():void 0,g=new TextDecoder(f);return u.arrayBuffer().then(_=>g.decode(_))}}}).then(u=>{Ai.add(e,u);const h=an[e];delete an[e];for(let d=0,f=h.length;d<f;d++){const g=h[d];g.onLoad&&g.onLoad(u)}}).catch(u=>{const h=an[e];if(h===void 0)throw this.manager.itemError(e),u;delete an[e];for(let d=0,f=h.length;d<f;d++){const g=h[d];g.onError&&g.onError(u)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}}class Rx extends os{constructor(e){super(e)}load(e,t,i,s){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=this,o=Ai.get(e);if(o!==void 0)return r.manager.itemStart(e),setTimeout(function(){t&&t(o),r.manager.itemEnd(e)},0),o;const c=ns("img");function l(){h(),Ai.add(e,this),t&&t(this),r.manager.itemEnd(e)}function u(d){h(),s&&s(d),r.manager.itemError(e),r.manager.itemEnd(e)}function h(){c.removeEventListener("load",l,!1),c.removeEventListener("error",u,!1)}return c.addEventListener("load",l,!1),c.addEventListener("error",u,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(c.crossOrigin=this.crossOrigin),r.manager.itemStart(e),c.src=e,c}}class Zl extends os{constructor(e){super(e)}load(e,t,i,s){const r=new lt,o=new Rx(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(e,function(c){r.image=c,r.needsUpdate=!0,t!==void 0&&t(r)},i,s),r}}class Xs extends Ye{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new we(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),t}}const Ur=new Re,Sc=new D,wc=new D;class Ta{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Se(512,512),this.map=null,this.mapPass=null,this.matrix=new Re,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new ma,this._frameExtents=new Se(1,1),this._viewportCount=1,this._viewports=[new We(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,i=this.matrix;Sc.setFromMatrixPosition(e.matrixWorld),t.position.copy(Sc),wc.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(wc),t.updateMatrixWorld(),Ur.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Ur),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(Ur)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class Dx extends Ta{constructor(){super(new yt(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(e){const t=this.camera,i=ts*2*e.angle*this.focus,s=this.mapSize.width/this.mapSize.height,r=e.distance||t.far;(i!==t.fov||s!==t.aspect||r!==t.far)&&(t.fov=i,t.aspect=s,t.far=r,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}}class Ix extends Xs{constructor(e,t,i=0,s=Math.PI/3,r=0,o=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(Ye.DEFAULT_UP),this.updateMatrix(),this.target=new Ye,this.distance=i,this.angle=s,this.penumbra=r,this.decay=o,this.map=null,this.shadow=new Dx}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}const Tc=new Re,Hi=new D,Br=new D;class Px extends Ta{constructor(){super(new yt(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new Se(4,2),this._viewportCount=6,this._viewports=[new We(2,1,1,1),new We(0,1,1,1),new We(3,1,1,1),new We(1,1,1,1),new We(3,0,1,1),new We(1,0,1,1)],this._cubeDirections=[new D(1,0,0),new D(-1,0,0),new D(0,0,1),new D(0,0,-1),new D(0,1,0),new D(0,-1,0)],this._cubeUps=[new D(0,1,0),new D(0,1,0),new D(0,1,0),new D(0,1,0),new D(0,0,1),new D(0,0,-1)]}updateMatrices(e,t=0){const i=this.camera,s=this.matrix,r=e.distance||i.far;r!==i.far&&(i.far=r,i.updateProjectionMatrix()),Hi.setFromMatrixPosition(e.matrixWorld),i.position.copy(Hi),Br.copy(i.position),Br.add(this._cubeDirections[t]),i.up.copy(this._cubeUps[t]),i.lookAt(Br),i.updateMatrixWorld(),s.makeTranslation(-Hi.x,-Hi.y,-Hi.z),Tc.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Tc)}}class Nx extends Xs{constructor(e,t,i=0,s=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=s,this.shadow=new Px}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class Ox extends Ta{constructor(){super(new _a(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Fx extends Xs{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Ye.DEFAULT_UP),this.updateMatrix(),this.target=new Ye,this.shadow=new Ox}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class Ux extends Xs{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}class sa{static decodeText(e){if(typeof TextDecoder<"u")return new TextDecoder().decode(e);let t="";for(let i=0,s=e.length;i<s;i++)t+=String.fromCharCode(e[i]);try{return decodeURIComponent(escape(t))}catch{return t}}static extractUrlBase(e){const t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}}class Bx extends os{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&console.warn("THREE.ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"}}setOptions(e){return this.options=e,this}load(e,t,i,s){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=this,o=Ai.get(e);if(o!==void 0)return r.manager.itemStart(e),setTimeout(function(){t&&t(o),r.manager.itemEnd(e)},0),o;const c={};c.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",c.headers=this.requestHeader,fetch(e,c).then(function(l){return l.blob()}).then(function(l){return createImageBitmap(l,Object.assign(r.options,{colorSpaceConversion:"none"}))}).then(function(l){Ai.add(e,l),t&&t(l),r.manager.itemEnd(e)}).catch(function(l){s&&s(l),r.manager.itemError(e),r.manager.itemEnd(e)}),r.manager.itemStart(e)}}const Ea="\\[\\]\\.:\\/",kx=new RegExp("["+Ea+"]","g"),Aa="[^"+Ea+"]",zx="[^"+Ea.replace("\\.","")+"]",Gx=/((?:WC+[\/:])*)/.source.replace("WC",Aa),Vx=/(WCOD+)?/.source.replace("WCOD",zx),Hx=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Aa),Wx=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Aa),jx=new RegExp("^"+Gx+Vx+Hx+Wx+"$"),qx=["material","materials","bones","map"];class Xx{constructor(e,t,i){const s=i||Ge.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,s)}getValue(e,t){this.bind();const i=this._targetGroup.nCachedObjects_,s=this._bindings[i];s!==void 0&&s.getValue(e,t)}setValue(e,t){const i=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=i.length;s!==r;++s)i[s].setValue(e,t)}bind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].bind()}unbind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].unbind()}}class Ge{constructor(e,t,i){this.path=t,this.parsedPath=i||Ge.parseTrackName(t),this.node=Ge.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,i){return e&&e.isAnimationObjectGroup?new Ge.Composite(e,t,i):new Ge(e,t,i)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(kx,"")}static parseTrackName(e){const t=jx.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);const i={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},s=i.nodeName&&i.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){const r=i.nodeName.substring(s+1);qx.indexOf(r)!==-1&&(i.nodeName=i.nodeName.substring(0,s),i.objectName=r)}if(i.propertyName===null||i.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return i}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){const i=e.skeleton.getBoneByName(t);if(i!==void 0)return i}if(e.children){const i=function(r){for(let o=0;o<r.length;o++){const c=r[o];if(c.name===t||c.uuid===t)return c;const l=i(c.children);if(l)return l}return null},s=i(e.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){const i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)e[t++]=i[s]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){const i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=e[t++]}_setValue_array_setNeedsUpdate(e,t){const i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){const i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node;const t=this.parsedPath,i=t.objectName,s=t.propertyName;let r=t.propertyIndex;if(e||(e=Ge.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.error("THREE.PropertyBinding: Trying to update node for track: "+this.path+" but it wasn't found.");return}if(i){let u=t.objectIndex;switch(i){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let h=0;h<e.length;h++)if(e[h].name===u){u=h;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[i]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[i]}if(u!==void 0){if(e[u]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[u]}}const o=e[s];if(o===void 0){const u=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+u+"."+s+" but it wasn't found.",e);return}let c=this.Versioning.None;this.targetObject=e,e.needsUpdate!==void 0?c=this.Versioning.NeedsUpdate:e.matrixWorldNeedsUpdate!==void 0&&(c=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(l=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][c]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}Ge.Composite=Xx;Ge.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Ge.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Ge.prototype.GetterByBindingType=[Ge.prototype._getValue_direct,Ge.prototype._getValue_array,Ge.prototype._getValue_arrayElement,Ge.prototype._getValue_toArray];Ge.prototype.SetterByBindingTypeAndVersioning=[[Ge.prototype._setValue_direct,Ge.prototype._setValue_direct_setNeedsUpdate,Ge.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Ge.prototype._setValue_array,Ge.prototype._setValue_array_setNeedsUpdate,Ge.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Ge.prototype._setValue_arrayElement,Ge.prototype._setValue_arrayElement_setNeedsUpdate,Ge.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Ge.prototype._setValue_fromArray,Ge.prototype._setValue_fromArray_setNeedsUpdate,Ge.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];class Ec{constructor(e=1,t=0,i=0){return this.radius=e,this.phi=t,this.theta=i,this}set(e,t,i){return this.radius=e,this.phi=t,this.theta=i,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,i){return this.radius=Math.sqrt(e*e+t*t+i*i),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,i),this.phi=Math.acos(dt(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class $x extends Sa{constructor(e=10,t=10,i=4473924,s=8947848){i=new we(i),s=new we(s);const r=t/2,o=e/t,c=e/2,l=[],u=[];for(let f=0,g=0,_=-c;f<=t;f++,_+=o){l.push(-c,0,_,c,0,_),l.push(_,0,-c,_,0,c);const m=f===r?i:s;m.toArray(u,g),g+=3,m.toArray(u,g),g+=3,m.toArray(u,g),g+=3,m.toArray(u,g),g+=3}const h=new kt;h.setAttribute("position",new Dt(l,3)),h.setAttribute("color",new Dt(u,3));const d=new qs({vertexColors:!0,toneMapped:!1});super(h,d),this.type="GridHelper"}dispose(){this.geometry.dispose(),this.material.dispose()}}class Yx extends Sa{constructor(e=1){const t=[0,0,0,e,0,0,0,0,0,0,e,0,0,0,0,0,0,e],i=[1,0,0,1,.6,0,0,1,0,.6,1,0,0,0,1,0,.6,1],s=new kt;s.setAttribute("position",new Dt(t,3)),s.setAttribute("color",new Dt(i,3));const r=new qs({vertexColors:!0,toneMapped:!1});super(s,r),this.type="AxesHelper"}setColors(e,t,i){const s=new we,r=this.geometry.attributes.color.array;return s.set(e),s.toArray(r,0),s.toArray(r,3),s.set(t),s.toArray(r,6),s.toArray(r,9),s.set(i),s.toArray(r,12),s.toArray(r,15),this.geometry.attributes.color.needsUpdate=!0,this}dispose(){this.geometry.dispose(),this.material.dispose()}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:da}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=da);function Ac(a,e){if(e===kf)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),a;if(e===Jr||e===wl){let t=a.getIndex();if(t===null){const o=[],c=a.getAttribute("position");if(c!==void 0){for(let l=0;l<c.count;l++)o.push(l);a.setIndex(o),t=a.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),a}const i=t.count-2,s=[];if(e===Jr)for(let o=1;o<=i;o++)s.push(t.getX(0)),s.push(t.getX(o)),s.push(t.getX(o+1));else for(let o=0;o<i;o++)o%2===0?(s.push(t.getX(o)),s.push(t.getX(o+1)),s.push(t.getX(o+2))):(s.push(t.getX(o+2)),s.push(t.getX(o+1)),s.push(t.getX(o)));s.length/3!==i&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");const r=a.clone();return r.setIndex(s),r.clearGroups(),r}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",e),a}class Kx extends os{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(t){return new tv(t)}),this.register(function(t){return new cv(t)}),this.register(function(t){return new lv(t)}),this.register(function(t){return new uv(t)}),this.register(function(t){return new iv(t)}),this.register(function(t){return new sv(t)}),this.register(function(t){return new rv(t)}),this.register(function(t){return new av(t)}),this.register(function(t){return new ev(t)}),this.register(function(t){return new ov(t)}),this.register(function(t){return new nv(t)}),this.register(function(t){return new Jx(t)}),this.register(function(t){return new hv(t)}),this.register(function(t){return new dv(t)})}load(e,t,i,s){const r=this;let o;this.resourcePath!==""?o=this.resourcePath:this.path!==""?o=this.path:o=sa.extractUrlBase(e),this.manager.itemStart(e);const c=function(u){s?s(u):console.error(u),r.manager.itemError(e),r.manager.itemEnd(e)},l=new Kl(this.manager);l.setPath(this.path),l.setResponseType("arraybuffer"),l.setRequestHeader(this.requestHeader),l.setWithCredentials(this.withCredentials),l.load(e,function(u){try{r.parse(u,o,function(h){t(h),r.manager.itemEnd(e)},c)}catch(h){c(h)}},i,c)}setDRACOLoader(e){return this.dracoLoader=e,this}setDDSLoader(){throw new Error('THREE.GLTFLoader: "MSFT_texture_dds" no longer supported. Please update to "KHR_texture_basisu".')}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,i,s){let r;const o={},c={},l=new TextDecoder;if(typeof e=="string")r=JSON.parse(e);else if(e instanceof ArrayBuffer)if(l.decode(new Uint8Array(e,0,4))===Jl){try{o[Oe.KHR_BINARY_GLTF]=new fv(e)}catch(d){s&&s(d);return}r=JSON.parse(o[Oe.KHR_BINARY_GLTF].content)}else r=JSON.parse(l.decode(e));else r=e;if(r.asset===void 0||r.asset.version[0]<2){s&&s(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}const u=new Ev(r,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});u.fileLoader.setRequestHeader(this.requestHeader);for(let h=0;h<this.pluginCallbacks.length;h++){const d=this.pluginCallbacks[h](u);c[d.name]=d,o[d.name]=!0}if(r.extensionsUsed)for(let h=0;h<r.extensionsUsed.length;++h){const d=r.extensionsUsed[h],f=r.extensionsRequired||[];switch(d){case Oe.KHR_MATERIALS_UNLIT:o[d]=new Qx;break;case Oe.KHR_DRACO_MESH_COMPRESSION:o[d]=new pv(r,this.dracoLoader);break;case Oe.KHR_TEXTURE_TRANSFORM:o[d]=new mv;break;case Oe.KHR_MESH_QUANTIZATION:o[d]=new gv;break;default:f.indexOf(d)>=0&&c[d]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+d+'".')}}u.setExtensions(o),u.setPlugins(c),u.parse(i,s)}parseAsync(e,t){const i=this;return new Promise(function(s,r){i.parse(e,t,s,r)})}}function Zx(){let a={};return{get:function(e){return a[e]},add:function(e,t){a[e]=t},remove:function(e){delete a[e]},removeAll:function(){a={}}}}const Oe={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"};class Jx{constructor(e){this.parser=e,this.name=Oe.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){const e=this.parser,t=this.parser.json.nodes||[];for(let i=0,s=t.length;i<s;i++){const r=t[i];r.extensions&&r.extensions[this.name]&&r.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,r.extensions[this.name].light)}}_loadLight(e){const t=this.parser,i="light:"+e;let s=t.cache.get(i);if(s)return s;const r=t.json,l=((r.extensions&&r.extensions[this.name]||{}).lights||[])[e];let u;const h=new we(16777215);l.color!==void 0&&h.fromArray(l.color);const d=l.range!==void 0?l.range:0;switch(l.type){case"directional":u=new Fx(h),u.target.position.set(0,0,-1),u.add(u.target);break;case"point":u=new Nx(h),u.distance=d;break;case"spot":u=new Ix(h),u.distance=d,l.spot=l.spot||{},l.spot.innerConeAngle=l.spot.innerConeAngle!==void 0?l.spot.innerConeAngle:0,l.spot.outerConeAngle=l.spot.outerConeAngle!==void 0?l.spot.outerConeAngle:Math.PI/4,u.angle=l.spot.outerConeAngle,u.penumbra=1-l.spot.innerConeAngle/l.spot.outerConeAngle,u.target.position.set(0,0,-1),u.add(u.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+l.type)}return u.position.set(0,0,0),u.decay=2,xn(u,l),l.intensity!==void 0&&(u.intensity=l.intensity),u.name=t.createUniqueName(l.name||"light_"+e),s=Promise.resolve(u),t.cache.add(i,s),s}getDependency(e,t){if(e==="light")return this._loadLight(t)}createNodeAttachment(e){const t=this,i=this.parser,r=i.json.nodes[e],c=(r.extensions&&r.extensions[this.name]||{}).light;return c===void 0?null:this._loadLight(c).then(function(l){return i._getNodeRef(t.cache,c,l)})}}class Qx{constructor(){this.name=Oe.KHR_MATERIALS_UNLIT}getMaterialType(){return Bn}extendParams(e,t,i){const s=[];e.color=new we(1,1,1),e.opacity=1;const r=t.pbrMetallicRoughness;if(r){if(Array.isArray(r.baseColorFactor)){const o=r.baseColorFactor;e.color.fromArray(o),e.opacity=o[3]}r.baseColorTexture!==void 0&&s.push(i.assignTexture(e,"map",r.baseColorTexture,ze))}return Promise.all(s)}}class ev{constructor(e){this.parser=e,this.name=Oe.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){const s=this.parser.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=s.extensions[this.name].emissiveStrength;return r!==void 0&&(t.emissiveIntensity=r),Promise.resolve()}}class tv{constructor(e){this.parser=e,this.name=Oe.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:Qn}extendMaterialParams(e,t){const i=this.parser,s=i.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=[],o=s.extensions[this.name];if(o.clearcoatFactor!==void 0&&(t.clearcoat=o.clearcoatFactor),o.clearcoatTexture!==void 0&&r.push(i.assignTexture(t,"clearcoatMap",o.clearcoatTexture)),o.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=o.clearcoatRoughnessFactor),o.clearcoatRoughnessTexture!==void 0&&r.push(i.assignTexture(t,"clearcoatRoughnessMap",o.clearcoatRoughnessTexture)),o.clearcoatNormalTexture!==void 0&&(r.push(i.assignTexture(t,"clearcoatNormalMap",o.clearcoatNormalTexture)),o.clearcoatNormalTexture.scale!==void 0)){const c=o.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new Se(c,c)}return Promise.all(r)}}class nv{constructor(e){this.parser=e,this.name=Oe.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:Qn}extendMaterialParams(e,t){const i=this.parser,s=i.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=[],o=s.extensions[this.name];return o.iridescenceFactor!==void 0&&(t.iridescence=o.iridescenceFactor),o.iridescenceTexture!==void 0&&r.push(i.assignTexture(t,"iridescenceMap",o.iridescenceTexture)),o.iridescenceIor!==void 0&&(t.iridescenceIOR=o.iridescenceIor),t.iridescenceThicknessRange===void 0&&(t.iridescenceThicknessRange=[100,400]),o.iridescenceThicknessMinimum!==void 0&&(t.iridescenceThicknessRange[0]=o.iridescenceThicknessMinimum),o.iridescenceThicknessMaximum!==void 0&&(t.iridescenceThicknessRange[1]=o.iridescenceThicknessMaximum),o.iridescenceThicknessTexture!==void 0&&r.push(i.assignTexture(t,"iridescenceThicknessMap",o.iridescenceThicknessTexture)),Promise.all(r)}}class iv{constructor(e){this.parser=e,this.name=Oe.KHR_MATERIALS_SHEEN}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:Qn}extendMaterialParams(e,t){const i=this.parser,s=i.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=[];t.sheenColor=new we(0,0,0),t.sheenRoughness=0,t.sheen=1;const o=s.extensions[this.name];return o.sheenColorFactor!==void 0&&t.sheenColor.fromArray(o.sheenColorFactor),o.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=o.sheenRoughnessFactor),o.sheenColorTexture!==void 0&&r.push(i.assignTexture(t,"sheenColorMap",o.sheenColorTexture,ze)),o.sheenRoughnessTexture!==void 0&&r.push(i.assignTexture(t,"sheenRoughnessMap",o.sheenRoughnessTexture)),Promise.all(r)}}class sv{constructor(e){this.parser=e,this.name=Oe.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:Qn}extendMaterialParams(e,t){const i=this.parser,s=i.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=[],o=s.extensions[this.name];return o.transmissionFactor!==void 0&&(t.transmission=o.transmissionFactor),o.transmissionTexture!==void 0&&r.push(i.assignTexture(t,"transmissionMap",o.transmissionTexture)),Promise.all(r)}}class rv{constructor(e){this.parser=e,this.name=Oe.KHR_MATERIALS_VOLUME}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:Qn}extendMaterialParams(e,t){const i=this.parser,s=i.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=[],o=s.extensions[this.name];t.thickness=o.thicknessFactor!==void 0?o.thicknessFactor:0,o.thicknessTexture!==void 0&&r.push(i.assignTexture(t,"thicknessMap",o.thicknessTexture)),t.attenuationDistance=o.attenuationDistance||1/0;const c=o.attenuationColor||[1,1,1];return t.attenuationColor=new we(c[0],c[1],c[2]),Promise.all(r)}}class av{constructor(e){this.parser=e,this.name=Oe.KHR_MATERIALS_IOR}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:Qn}extendMaterialParams(e,t){const s=this.parser.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=s.extensions[this.name];return t.ior=r.ior!==void 0?r.ior:1.5,Promise.resolve()}}class ov{constructor(e){this.parser=e,this.name=Oe.KHR_MATERIALS_SPECULAR}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:Qn}extendMaterialParams(e,t){const i=this.parser,s=i.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=[],o=s.extensions[this.name];t.specularIntensity=o.specularFactor!==void 0?o.specularFactor:1,o.specularTexture!==void 0&&r.push(i.assignTexture(t,"specularIntensityMap",o.specularTexture));const c=o.specularColorFactor||[1,1,1];return t.specularColor=new we(c[0],c[1],c[2]),o.specularColorTexture!==void 0&&r.push(i.assignTexture(t,"specularColorMap",o.specularColorTexture,ze)),Promise.all(r)}}class cv{constructor(e){this.parser=e,this.name=Oe.KHR_TEXTURE_BASISU}loadTexture(e){const t=this.parser,i=t.json,s=i.textures[e];if(!s.extensions||!s.extensions[this.name])return null;const r=s.extensions[this.name],o=t.options.ktx2Loader;if(!o){if(i.extensionsRequired&&i.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return t.loadTextureImage(e,r.source,o)}}class lv{constructor(e){this.parser=e,this.name=Oe.EXT_TEXTURE_WEBP,this.isSupported=null}loadTexture(e){const t=this.name,i=this.parser,s=i.json,r=s.textures[e];if(!r.extensions||!r.extensions[t])return null;const o=r.extensions[t],c=s.images[o.source];let l=i.textureLoader;if(c.uri){const u=i.options.manager.getHandler(c.uri);u!==null&&(l=u)}return this.detectSupport().then(function(u){if(u)return i.loadTextureImage(e,o.source,l);if(s.extensionsRequired&&s.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: WebP required by asset but unsupported.");return i.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){const t=new Image;t.src="data:image/webp;base64,UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEADsD+JaQAA3AAAAAA",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}}class uv{constructor(e){this.parser=e,this.name=Oe.EXT_TEXTURE_AVIF,this.isSupported=null}loadTexture(e){const t=this.name,i=this.parser,s=i.json,r=s.textures[e];if(!r.extensions||!r.extensions[t])return null;const o=r.extensions[t],c=s.images[o.source];let l=i.textureLoader;if(c.uri){const u=i.options.manager.getHandler(c.uri);u!==null&&(l=u)}return this.detectSupport().then(function(u){if(u)return i.loadTextureImage(e,o.source,l);if(s.extensionsRequired&&s.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: AVIF required by asset but unsupported.");return i.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){const t=new Image;t.src="data:image/avif;base64,AAAAIGZ0eXBhdmlmAAAAAGF2aWZtaWYxbWlhZk1BMUIAAADybWV0YQAAAAAAAAAoaGRscgAAAAAAAAAAcGljdAAAAAAAAAAAAAAAAGxpYmF2aWYAAAAADnBpdG0AAAAAAAEAAAAeaWxvYwAAAABEAAABAAEAAAABAAABGgAAABcAAAAoaWluZgAAAAAAAQAAABppbmZlAgAAAAABAABhdjAxQ29sb3IAAAAAamlwcnAAAABLaXBjbwAAABRpc3BlAAAAAAAAAAEAAAABAAAAEHBpeGkAAAAAAwgICAAAAAxhdjFDgQAMAAAAABNjb2xybmNseAACAAIABoAAAAAXaXBtYQAAAAAAAAABAAEEAQKDBAAAAB9tZGF0EgAKCBgABogQEDQgMgkQAAAAB8dSLfI=",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}}class hv{constructor(e){this.name=Oe.EXT_MESHOPT_COMPRESSION,this.parser=e}loadBufferView(e){const t=this.parser.json,i=t.bufferViews[e];if(i.extensions&&i.extensions[this.name]){const s=i.extensions[this.name],r=this.parser.getDependency("buffer",s.buffer),o=this.parser.options.meshoptDecoder;if(!o||!o.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return r.then(function(c){const l=s.byteOffset||0,u=s.byteLength||0,h=s.count,d=s.byteStride,f=new Uint8Array(c,l,u);return o.decodeGltfBufferAsync?o.decodeGltfBufferAsync(h,d,f,s.mode,s.filter).then(function(g){return g.buffer}):o.ready.then(function(){const g=new ArrayBuffer(h*d);return o.decodeGltfBuffer(new Uint8Array(g),h,d,f,s.mode,s.filter),g})})}else return null}}class dv{constructor(e){this.name=Oe.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){const t=this.parser.json,i=t.nodes[e];if(!i.extensions||!i.extensions[this.name]||i.mesh===void 0)return null;const s=t.meshes[i.mesh];for(const u of s.primitives)if(u.mode!==Nt.TRIANGLES&&u.mode!==Nt.TRIANGLE_STRIP&&u.mode!==Nt.TRIANGLE_FAN&&u.mode!==void 0)return null;const o=i.extensions[this.name].attributes,c=[],l={};for(const u in o)c.push(this.parser.getDependency("accessor",o[u]).then(h=>(l[u]=h,l[u])));return c.length<1?null:(c.push(this.parser.createNodeMesh(e)),Promise.all(c).then(u=>{const h=u.pop(),d=h.isGroup?h.children:[h],f=u[0].count,g=[];for(const _ of d){const m=new Re,p=new D,x=new Zt,E=new D(1,1,1),y=new gx(_.geometry,_.material,f);for(let M=0;M<f;M++)l.TRANSLATION&&p.fromBufferAttribute(l.TRANSLATION,M),l.ROTATION&&x.fromBufferAttribute(l.ROTATION,M),l.SCALE&&E.fromBufferAttribute(l.SCALE,M),y.setMatrixAt(M,m.compose(p,x,E));for(const M in l)M!=="TRANSLATION"&&M!=="ROTATION"&&M!=="SCALE"&&_.geometry.setAttribute(M,l[M]);Ye.prototype.copy.call(y,_),y.frustumCulled=!1,this.parser.assignFinalMaterial(y),g.push(y)}return h.isGroup?(h.clear(),h.add(...g),h):g[0]}))}}const Jl="glTF",Wi=12,Cc={JSON:1313821514,BIN:5130562};class fv{constructor(e){this.name=Oe.KHR_BINARY_GLTF,this.content=null,this.body=null;const t=new DataView(e,0,Wi),i=new TextDecoder;if(this.header={magic:i.decode(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==Jl)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");const s=this.header.length-Wi,r=new DataView(e,Wi);let o=0;for(;o<s;){const c=r.getUint32(o,!0);o+=4;const l=r.getUint32(o,!0);if(o+=4,l===Cc.JSON){const u=new Uint8Array(e,Wi+o,c);this.content=i.decode(u)}else if(l===Cc.BIN){const u=Wi+o;this.body=e.slice(u,u+c)}o+=c}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}}class pv{constructor(e,t){if(!t)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=Oe.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){const i=this.json,s=this.dracoLoader,r=e.extensions[this.name].bufferView,o=e.extensions[this.name].attributes,c={},l={},u={};for(const h in o){const d=ra[h]||h.toLowerCase();c[d]=o[h]}for(const h in e.attributes){const d=ra[h]||h.toLowerCase();if(o[h]!==void 0){const f=i.accessors[e.attributes[h]],g=yi[f.componentType];u[d]=g.name,l[d]=f.normalized===!0}}return t.getDependency("bufferView",r).then(function(h){return new Promise(function(d){s.decodeDracoFile(h,function(f){for(const g in f.attributes){const _=f.attributes[g],m=l[g];m!==void 0&&(_.normalized=m)}d(f)},c,u)})})}}class mv{constructor(){this.name=Oe.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){return t.texCoord!==void 0&&console.warn('THREE.GLTFLoader: Custom UV sets in "'+this.name+'" extension not yet supported.'),t.offset===void 0&&t.rotation===void 0&&t.scale===void 0||(e=e.clone(),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),e.needsUpdate=!0),e}}class gv{constructor(){this.name=Oe.KHR_MESH_QUANTIZATION}}class Ql extends as{constructor(e,t,i,s){super(e,t,i,s)}copySampleValue_(e){const t=this.resultBuffer,i=this.sampleValues,s=this.valueSize,r=e*s*3+s;for(let o=0;o!==s;o++)t[o]=i[r+o];return t}interpolate_(e,t,i,s){const r=this.resultBuffer,o=this.sampleValues,c=this.valueSize,l=c*2,u=c*3,h=s-t,d=(i-t)/h,f=d*d,g=f*d,_=e*u,m=_-u,p=-2*g+3*f,x=g-f,E=1-p,y=x-f+d;for(let M=0;M!==c;M++){const w=o[m+M+c],L=o[m+M+l]*h,I=o[_+M+c],b=o[_+M]*h;r[M]=E*w+y*L+p*I+x*b}return r}}const _v=new Zt;class xv extends Ql{interpolate_(e,t,i,s){const r=super.interpolate_(e,t,i,s);return _v.fromArray(r).normalize().toArray(r),r}}const Nt={FLOAT:5126,FLOAT_MAT3:35675,FLOAT_MAT4:35676,FLOAT_VEC2:35664,FLOAT_VEC3:35665,FLOAT_VEC4:35666,LINEAR:9729,REPEAT:10497,SAMPLER_2D:35678,POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6,UNSIGNED_BYTE:5121,UNSIGNED_SHORT:5123},yi={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},Lc={9728:ct,9729:St,9984:Zr,9985:Ml,9986:Is,9987:jn},Rc={33071:Ot,33648:Bs,10497:Si},kr={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},ra={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv2",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},_n={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},vv={CUBICSPLINE:void 0,LINEAR:Ti,STEP:Qi},zr={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function yv(a){return a.DefaultMaterial===void 0&&(a.DefaultMaterial=new wa({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:hn})),a.DefaultMaterial}function ji(a,e,t){for(const i in t.extensions)a[i]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[i]=t.extensions[i])}function xn(a,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(a.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}function bv(a,e,t){let i=!1,s=!1,r=!1;for(let u=0,h=e.length;u<h;u++){const d=e[u];if(d.POSITION!==void 0&&(i=!0),d.NORMAL!==void 0&&(s=!0),d.COLOR_0!==void 0&&(r=!0),i&&s&&r)break}if(!i&&!s&&!r)return Promise.resolve(a);const o=[],c=[],l=[];for(let u=0,h=e.length;u<h;u++){const d=e[u];if(i){const f=d.POSITION!==void 0?t.getDependency("accessor",d.POSITION):a.attributes.position;o.push(f)}if(s){const f=d.NORMAL!==void 0?t.getDependency("accessor",d.NORMAL):a.attributes.normal;c.push(f)}if(r){const f=d.COLOR_0!==void 0?t.getDependency("accessor",d.COLOR_0):a.attributes.color;l.push(f)}}return Promise.all([Promise.all(o),Promise.all(c),Promise.all(l)]).then(function(u){const h=u[0],d=u[1],f=u[2];return i&&(a.morphAttributes.position=h),s&&(a.morphAttributes.normal=d),r&&(a.morphAttributes.color=f),a.morphTargetsRelative=!0,a})}function Mv(a,e){if(a.updateMorphTargets(),e.weights!==void 0)for(let t=0,i=e.weights.length;t<i;t++)a.morphTargetInfluences[t]=e.weights[t];if(e.extras&&Array.isArray(e.extras.targetNames)){const t=e.extras.targetNames;if(a.morphTargetInfluences.length===t.length){a.morphTargetDictionary={};for(let i=0,s=t.length;i<s;i++)a.morphTargetDictionary[t[i]]=i}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function Sv(a){const e=a.extensions&&a.extensions[Oe.KHR_DRACO_MESH_COMPRESSION];let t;return e?t="draco:"+e.bufferView+":"+e.indices+":"+Dc(e.attributes):t=a.indices+":"+Dc(a.attributes)+":"+a.mode,t}function Dc(a){let e="";const t=Object.keys(a).sort();for(let i=0,s=t.length;i<s;i++)e+=t[i]+":"+a[t[i]]+";";return e}function aa(a){switch(a){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function wv(a){return a.search(/\.jpe?g($|\?)/i)>0||a.search(/^data\:image\/jpeg/)===0?"image/jpeg":a.search(/\.webp($|\?)/i)>0||a.search(/^data\:image\/webp/)===0?"image/webp":"image/png"}const Tv=new Re;class Ev{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new Zx,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let i=!1,s=!1,r=-1;typeof navigator<"u"&&(i=/^((?!chrome|android).)*safari/i.test(navigator.userAgent)===!0,s=navigator.userAgent.indexOf("Firefox")>-1,r=s?navigator.userAgent.match(/Firefox\/([0-9]+)\./)[1]:-1),typeof createImageBitmap>"u"||i||s&&r<98?this.textureLoader=new Zl(this.options.manager):this.textureLoader=new Bx(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new Kl(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){const i=this,s=this.json,r=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(o){return o._markDefs&&o._markDefs()}),Promise.all(this._invokeAll(function(o){return o.beforeRoot&&o.beforeRoot()})).then(function(){return Promise.all([i.getDependencies("scene"),i.getDependencies("animation"),i.getDependencies("camera")])}).then(function(o){const c={scene:o[0][s.scene||0],scenes:o[0],animations:o[1],cameras:o[2],asset:s.asset,parser:i,userData:{}};ji(r,c,s),xn(c,s),Promise.all(i._invokeAll(function(l){return l.afterRoot&&l.afterRoot(c)})).then(function(){e(c)})}).catch(t)}_markDefs(){const e=this.json.nodes||[],t=this.json.skins||[],i=this.json.meshes||[];for(let s=0,r=t.length;s<r;s++){const o=t[s].joints;for(let c=0,l=o.length;c<l;c++)e[o[c]].isBone=!0}for(let s=0,r=e.length;s<r;s++){const o=e[s];o.mesh!==void 0&&(this._addNodeRef(this.meshCache,o.mesh),o.skin!==void 0&&(i[o.mesh].isSkinnedMesh=!0)),o.camera!==void 0&&this._addNodeRef(this.cameraCache,o.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,i){if(e.refs[t]<=1)return i;const s=i.clone(),r=(o,c)=>{const l=this.associations.get(o);l!=null&&this.associations.set(c,l);for(const[u,h]of o.children.entries())r(h,c.children[u])};return r(i,s),s.name+="_instance_"+e.uses[t]++,s}_invokeOne(e){const t=Object.values(this.plugins);t.push(this);for(let i=0;i<t.length;i++){const s=e(t[i]);if(s)return s}return null}_invokeAll(e){const t=Object.values(this.plugins);t.unshift(this);const i=[];for(let s=0;s<t.length;s++){const r=e(t[s]);r&&i.push(r)}return i}getDependency(e,t){const i=e+":"+t;let s=this.cache.get(i);if(!s){switch(e){case"scene":s=this.loadScene(t);break;case"node":s=this._invokeOne(function(r){return r.loadNode&&r.loadNode(t)});break;case"mesh":s=this._invokeOne(function(r){return r.loadMesh&&r.loadMesh(t)});break;case"accessor":s=this.loadAccessor(t);break;case"bufferView":s=this._invokeOne(function(r){return r.loadBufferView&&r.loadBufferView(t)});break;case"buffer":s=this.loadBuffer(t);break;case"material":s=this._invokeOne(function(r){return r.loadMaterial&&r.loadMaterial(t)});break;case"texture":s=this._invokeOne(function(r){return r.loadTexture&&r.loadTexture(t)});break;case"skin":s=this.loadSkin(t);break;case"animation":s=this._invokeOne(function(r){return r.loadAnimation&&r.loadAnimation(t)});break;case"camera":s=this.loadCamera(t);break;default:if(s=this._invokeOne(function(r){return r!=this&&r.getDependency&&r.getDependency(e,t)}),!s)throw new Error("Unknown type: "+e);break}this.cache.add(i,s)}return s}getDependencies(e){let t=this.cache.get(e);if(!t){const i=this,s=this.json[e+(e==="mesh"?"es":"s")]||[];t=Promise.all(s.map(function(r,o){return i.getDependency(e,o)})),this.cache.add(e,t)}return t}loadBuffer(e){const t=this.json.buffers[e],i=this.fileLoader;if(t.type&&t.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[Oe.KHR_BINARY_GLTF].body);const s=this.options;return new Promise(function(r,o){i.load(sa.resolveURL(t.uri,s.path),r,void 0,function(){o(new Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(e){const t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(i){const s=t.byteLength||0,r=t.byteOffset||0;return i.slice(r,r+s)})}loadAccessor(e){const t=this,i=this.json,s=this.json.accessors[e];if(s.bufferView===void 0&&s.sparse===void 0){const o=kr[s.type],c=yi[s.componentType],l=s.normalized===!0,u=new c(s.count*o);return Promise.resolve(new Mt(u,o,l))}const r=[];return s.bufferView!==void 0?r.push(this.getDependency("bufferView",s.bufferView)):r.push(null),s.sparse!==void 0&&(r.push(this.getDependency("bufferView",s.sparse.indices.bufferView)),r.push(this.getDependency("bufferView",s.sparse.values.bufferView))),Promise.all(r).then(function(o){const c=o[0],l=kr[s.type],u=yi[s.componentType],h=u.BYTES_PER_ELEMENT,d=h*l,f=s.byteOffset||0,g=s.bufferView!==void 0?i.bufferViews[s.bufferView].byteStride:void 0,_=s.normalized===!0;let m,p;if(g&&g!==d){const x=Math.floor(f/g),E="InterleavedBuffer:"+s.bufferView+":"+s.componentType+":"+x+":"+s.count;let y=t.cache.get(E);y||(m=new u(c,x*g,s.count*g/h),y=new ux(m,g/h),t.cache.add(E,y)),p=new ya(y,l,f%g/h,_)}else c===null?m=new u(s.count*l):m=new u(c,f,s.count*l),p=new Mt(m,l,_);if(s.sparse!==void 0){const x=kr.SCALAR,E=yi[s.sparse.indices.componentType],y=s.sparse.indices.byteOffset||0,M=s.sparse.values.byteOffset||0,w=new E(o[1],y,s.sparse.count*x),L=new u(o[2],M,s.sparse.count*l);c!==null&&(p=new Mt(p.array.slice(),p.itemSize,p.normalized));for(let I=0,b=w.length;I<b;I++){const A=w[I];if(p.setX(A,L[I*l]),l>=2&&p.setY(A,L[I*l+1]),l>=3&&p.setZ(A,L[I*l+2]),l>=4&&p.setW(A,L[I*l+3]),l>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}}return p})}loadTexture(e){const t=this.json,i=this.options,r=t.textures[e].source,o=t.images[r];let c=this.textureLoader;if(o.uri){const l=i.manager.getHandler(o.uri);l!==null&&(c=l)}return this.loadTextureImage(e,r,c)}loadTextureImage(e,t,i){const s=this,r=this.json,o=r.textures[e],c=r.images[t],l=(c.uri||c.bufferView)+":"+o.sampler;if(this.textureCache[l])return this.textureCache[l];const u=this.loadImageSource(t,i).then(function(h){h.flipY=!1,h.name=o.name||c.name||"";const f=(r.samplers||{})[o.sampler]||{};return h.magFilter=Lc[f.magFilter]||St,h.minFilter=Lc[f.minFilter]||jn,h.wrapS=Rc[f.wrapS]||Si,h.wrapT=Rc[f.wrapT]||Si,s.associations.set(h,{textures:e}),h}).catch(function(){return null});return this.textureCache[l]=u,u}loadImageSource(e,t){const i=this,s=this.json,r=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(d=>d.clone());const o=s.images[e],c=self.URL||self.webkitURL;let l=o.uri||"",u=!1;if(o.bufferView!==void 0)l=i.getDependency("bufferView",o.bufferView).then(function(d){u=!0;const f=new Blob([d],{type:o.mimeType});return l=c.createObjectURL(f),l});else if(o.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");const h=Promise.resolve(l).then(function(d){return new Promise(function(f,g){let _=f;t.isImageBitmapLoader===!0&&(_=function(m){const p=new lt(m);p.needsUpdate=!0,f(p)}),t.load(sa.resolveURL(d,r.path),_,void 0,g)})}).then(function(d){return u===!0&&c.revokeObjectURL(l),d.userData.mimeType=o.mimeType||wv(o.uri),d}).catch(function(d){throw console.error("THREE.GLTFLoader: Couldn't load texture",l),d});return this.sourceCache[e]=h,h}assignTexture(e,t,i,s){const r=this;return this.getDependency("texture",i.index).then(function(o){if(!o)return null;if(i.texCoord!==void 0&&i.texCoord!=0&&!(t==="aoMap"&&i.texCoord==1)&&console.warn("THREE.GLTFLoader: Custom UV set "+i.texCoord+" for texture "+t+" not yet supported."),r.extensions[Oe.KHR_TEXTURE_TRANSFORM]){const c=i.extensions!==void 0?i.extensions[Oe.KHR_TEXTURE_TRANSFORM]:void 0;if(c){const l=r.associations.get(o);o=r.extensions[Oe.KHR_TEXTURE_TRANSFORM].extendTexture(o,c),r.associations.set(o,l)}}return s!==void 0&&(o.encoding=s),e[t]=o,o})}assignFinalMaterial(e){const t=e.geometry;let i=e.material;const s=t.attributes.tangent===void 0,r=t.attributes.color!==void 0,o=t.attributes.normal===void 0;if(e.isPoints){const c="PointsMaterial:"+i.uuid;let l=this.cache.get(c);l||(l=new ql,Kt.prototype.copy.call(l,i),l.color.copy(i.color),l.map=i.map,l.sizeAttenuation=!1,this.cache.add(c,l)),i=l}else if(e.isLine){const c="LineBasicMaterial:"+i.uuid;let l=this.cache.get(c);l||(l=new qs,Kt.prototype.copy.call(l,i),l.color.copy(i.color),this.cache.add(c,l)),i=l}if(s||r||o){let c="ClonedMaterial:"+i.uuid+":";s&&(c+="derivative-tangents:"),r&&(c+="vertex-colors:"),o&&(c+="flat-shading:");let l=this.cache.get(c);l||(l=i.clone(),r&&(l.vertexColors=!0),o&&(l.flatShading=!0),s&&(l.normalScale&&(l.normalScale.y*=-1),l.clearcoatNormalScale&&(l.clearcoatNormalScale.y*=-1)),this.cache.add(c,l),this.associations.set(l,this.associations.get(i))),i=l}i.aoMap&&t.attributes.uv2===void 0&&t.attributes.uv!==void 0&&t.setAttribute("uv2",t.attributes.uv),e.material=i}getMaterialType(){return wa}loadMaterial(e){const t=this,i=this.json,s=this.extensions,r=i.materials[e];let o;const c={},l=r.extensions||{},u=[];if(l[Oe.KHR_MATERIALS_UNLIT]){const d=s[Oe.KHR_MATERIALS_UNLIT];o=d.getMaterialType(),u.push(d.extendParams(c,r,t))}else{const d=r.pbrMetallicRoughness||{};if(c.color=new we(1,1,1),c.opacity=1,Array.isArray(d.baseColorFactor)){const f=d.baseColorFactor;c.color.fromArray(f),c.opacity=f[3]}d.baseColorTexture!==void 0&&u.push(t.assignTexture(c,"map",d.baseColorTexture,ze)),c.metalness=d.metallicFactor!==void 0?d.metallicFactor:1,c.roughness=d.roughnessFactor!==void 0?d.roughnessFactor:1,d.metallicRoughnessTexture!==void 0&&(u.push(t.assignTexture(c,"metalnessMap",d.metallicRoughnessTexture)),u.push(t.assignTexture(c,"roughnessMap",d.metallicRoughnessTexture))),o=this._invokeOne(function(f){return f.getMaterialType&&f.getMaterialType(e)}),u.push(Promise.all(this._invokeAll(function(f){return f.extendMaterialParams&&f.extendMaterialParams(e,c)})))}r.doubleSided===!0&&(c.side=cn);const h=r.alphaMode||zr.OPAQUE;if(h===zr.BLEND?(c.transparent=!0,c.depthWrite=!1):(c.transparent=!1,h===zr.MASK&&(c.alphaTest=r.alphaCutoff!==void 0?r.alphaCutoff:.5)),r.normalTexture!==void 0&&o!==Bn&&(u.push(t.assignTexture(c,"normalMap",r.normalTexture)),c.normalScale=new Se(1,1),r.normalTexture.scale!==void 0)){const d=r.normalTexture.scale;c.normalScale.set(d,d)}return r.occlusionTexture!==void 0&&o!==Bn&&(u.push(t.assignTexture(c,"aoMap",r.occlusionTexture)),r.occlusionTexture.strength!==void 0&&(c.aoMapIntensity=r.occlusionTexture.strength)),r.emissiveFactor!==void 0&&o!==Bn&&(c.emissive=new we().fromArray(r.emissiveFactor)),r.emissiveTexture!==void 0&&o!==Bn&&u.push(t.assignTexture(c,"emissiveMap",r.emissiveTexture,ze)),Promise.all(u).then(function(){const d=new o(c);return r.name&&(d.name=r.name),xn(d,r),t.associations.set(d,{materials:e}),r.extensions&&ji(s,d,r),d})}createUniqueName(e){const t=Ge.sanitizeNodeName(e||"");let i=t;for(let s=1;this.nodeNamesUsed[i];++s)i=t+"_"+s;return this.nodeNamesUsed[i]=!0,i}loadGeometries(e){const t=this,i=this.extensions,s=this.primitiveCache;function r(c){return i[Oe.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(c,t).then(function(l){return Ic(l,c,t)})}const o=[];for(let c=0,l=e.length;c<l;c++){const u=e[c],h=Sv(u),d=s[h];if(d)o.push(d.promise);else{let f;u.extensions&&u.extensions[Oe.KHR_DRACO_MESH_COMPRESSION]?f=r(u):f=Ic(new kt,u,t),s[h]={primitive:u,promise:f},o.push(f)}}return Promise.all(o)}loadMesh(e){const t=this,i=this.json,s=this.extensions,r=i.meshes[e],o=r.primitives,c=[];for(let l=0,u=o.length;l<u;l++){const h=o[l].material===void 0?yv(this.cache):this.getDependency("material",o[l].material);c.push(h)}return c.push(t.loadGeometries(o)),Promise.all(c).then(function(l){const u=l.slice(0,l.length-1),h=l[l.length-1],d=[];for(let g=0,_=h.length;g<_;g++){const m=h[g],p=o[g];let x;const E=u[g];if(p.mode===Nt.TRIANGLES||p.mode===Nt.TRIANGLE_STRIP||p.mode===Nt.TRIANGLE_FAN||p.mode===void 0)x=r.isSkinnedMesh===!0?new dx(m,E):new Ut(m,E),x.isSkinnedMesh===!0&&x.normalizeSkinWeights(),p.mode===Nt.TRIANGLE_STRIP?x.geometry=Ac(x.geometry,wl):p.mode===Nt.TRIANGLE_FAN&&(x.geometry=Ac(x.geometry,Jr));else if(p.mode===Nt.LINES)x=new Sa(m,E);else if(p.mode===Nt.LINE_STRIP)x=new Ma(m,E);else if(p.mode===Nt.LINE_LOOP)x=new _x(m,E);else if(p.mode===Nt.POINTS)x=new xx(m,E);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+p.mode);Object.keys(x.geometry.morphAttributes).length>0&&Mv(x,r),x.name=t.createUniqueName(r.name||"mesh_"+e),xn(x,r),p.extensions&&ji(s,x,p),t.assignFinalMaterial(x),d.push(x)}for(let g=0,_=d.length;g<_;g++)t.associations.set(d[g],{meshes:e,primitives:g});if(d.length===1)return d[0];const f=new kn;t.associations.set(f,{meshes:e});for(let g=0,_=d.length;g<_;g++)f.add(d[g]);return f})}loadCamera(e){let t;const i=this.json.cameras[e],s=i[i.type];if(!s){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return i.type==="perspective"?t=new yt(ip.radToDeg(s.yfov),s.aspectRatio||1,s.znear||1,s.zfar||2e6):i.type==="orthographic"&&(t=new _a(-s.xmag,s.xmag,s.ymag,-s.ymag,s.znear,s.zfar)),i.name&&(t.name=this.createUniqueName(i.name)),xn(t,i),Promise.resolve(t)}loadSkin(e){const t=this.json.skins[e],i=[];for(let s=0,r=t.joints.length;s<r;s++)i.push(this._loadNodeShallow(t.joints[s]));return t.inverseBindMatrices!==void 0?i.push(this.getDependency("accessor",t.inverseBindMatrices)):i.push(null),Promise.all(i).then(function(s){const r=s.pop(),o=s,c=[],l=[];for(let u=0,h=o.length;u<h;u++){const d=o[u];if(d){c.push(d);const f=new Re;r!==null&&f.fromArray(r.array,u*16),l.push(f)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',t.joints[u])}return new ba(c,l)})}loadAnimation(e){const i=this.json.animations[e],s=[],r=[],o=[],c=[],l=[];for(let u=0,h=i.channels.length;u<h;u++){const d=i.channels[u],f=i.samplers[d.sampler],g=d.target,_=g.node,m=i.parameters!==void 0?i.parameters[f.input]:f.input,p=i.parameters!==void 0?i.parameters[f.output]:f.output;s.push(this.getDependency("node",_)),r.push(this.getDependency("accessor",m)),o.push(this.getDependency("accessor",p)),c.push(f),l.push(g)}return Promise.all([Promise.all(s),Promise.all(r),Promise.all(o),Promise.all(c),Promise.all(l)]).then(function(u){const h=u[0],d=u[1],f=u[2],g=u[3],_=u[4],m=[];for(let x=0,E=h.length;x<E;x++){const y=h[x],M=d[x],w=f[x],L=g[x],I=_[x];if(y===void 0)continue;y.updateMatrix();let b;switch(_n[I.path]){case _n.weights:b=is;break;case _n.rotation:b=Kn;break;case _n.position:case _n.scale:default:b=ss;break}const A=y.name?y.name:y.uuid,F=L.interpolation!==void 0?vv[L.interpolation]:Ti,$=[];_n[I.path]===_n.weights?y.traverse(function(U){U.morphTargetInfluences&&$.push(U.name?U.name:U.uuid)}):$.push(A);let X=w.array;if(w.normalized){const U=aa(X.constructor),P=new Float32Array(X.length);for(let G=0,Y=X.length;G<Y;G++)P[G]=X[G]*U;X=P}for(let U=0,P=$.length;U<P;U++){const G=new b($[U]+"."+_n[I.path],M.array,X,F);L.interpolation==="CUBICSPLINE"&&(G.createInterpolant=function(Q){const q=this instanceof Kn?xv:Ql;return new q(this.times,this.values,this.getValueSize()/3,Q)},G.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0),m.push(G)}}const p=i.name?i.name:"animation_"+e;return new wx(p,void 0,m)})}createNodeMesh(e){const t=this.json,i=this,s=t.nodes[e];return s.mesh===void 0?null:i.getDependency("mesh",s.mesh).then(function(r){const o=i._getNodeRef(i.meshCache,s.mesh,r);return s.weights!==void 0&&o.traverse(function(c){if(c.isMesh)for(let l=0,u=s.weights.length;l<u;l++)c.morphTargetInfluences[l]=s.weights[l]}),o})}loadNode(e){const t=this.json,i=this,s=t.nodes[e],r=i._loadNodeShallow(e),o=[],c=s.children||[];for(let u=0,h=c.length;u<h;u++)o.push(i.getDependency("node",c[u]));const l=s.skin===void 0?Promise.resolve(null):i.getDependency("skin",s.skin);return Promise.all([r,Promise.all(o),l]).then(function(u){const h=u[0],d=u[1],f=u[2];f!==null&&h.traverse(function(g){g.isSkinnedMesh&&g.bind(f,Tv)});for(let g=0,_=d.length;g<_;g++)h.add(d[g]);return h})}_loadNodeShallow(e){const t=this.json,i=this.extensions,s=this;if(this.nodeCache[e]!==void 0)return this.nodeCache[e];const r=t.nodes[e],o=r.name?s.createUniqueName(r.name):"",c=[],l=s._invokeOne(function(u){return u.createNodeMesh&&u.createNodeMesh(e)});return l&&c.push(l),r.camera!==void 0&&c.push(s.getDependency("camera",r.camera).then(function(u){return s._getNodeRef(s.cameraCache,r.camera,u)})),s._invokeAll(function(u){return u.createNodeAttachment&&u.createNodeAttachment(e)}).forEach(function(u){c.push(u)}),this.nodeCache[e]=Promise.all(c).then(function(u){let h;if(r.isBone===!0?h=new jl:u.length>1?h=new kn:u.length===1?h=u[0]:h=new Ye,h!==u[0])for(let d=0,f=u.length;d<f;d++)h.add(u[d]);if(r.name&&(h.userData.name=r.name,h.name=o),xn(h,r),r.extensions&&ji(i,h,r),r.matrix!==void 0){const d=new Re;d.fromArray(r.matrix),h.applyMatrix4(d)}else r.translation!==void 0&&h.position.fromArray(r.translation),r.rotation!==void 0&&h.quaternion.fromArray(r.rotation),r.scale!==void 0&&h.scale.fromArray(r.scale);return s.associations.has(h)||s.associations.set(h,{}),s.associations.get(h).nodes=e,h}),this.nodeCache[e]}loadScene(e){const t=this.extensions,i=this.json.scenes[e],s=this,r=new kn;i.name&&(r.name=s.createUniqueName(i.name)),xn(r,i),i.extensions&&ji(t,r,i);const o=i.nodes||[],c=[];for(let l=0,u=o.length;l<u;l++)c.push(s.getDependency("node",o[l]));return Promise.all(c).then(function(l){for(let h=0,d=l.length;h<d;h++)r.add(l[h]);const u=h=>{const d=new Map;for(const[f,g]of s.associations)(f instanceof Kt||f instanceof lt)&&d.set(f,g);return h.traverse(f=>{const g=s.associations.get(f);g!=null&&d.set(f,g)}),d};return s.associations=u(r),r})}}function Av(a,e,t){const i=e.attributes,s=new Ci;if(i.POSITION!==void 0){const c=t.json.accessors[i.POSITION],l=c.min,u=c.max;if(l!==void 0&&u!==void 0){if(s.set(new D(l[0],l[1],l[2]),new D(u[0],u[1],u[2])),c.normalized){const h=aa(yi[c.componentType]);s.min.multiplyScalar(h),s.max.multiplyScalar(h)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;const r=e.targets;if(r!==void 0){const c=new D,l=new D;for(let u=0,h=r.length;u<h;u++){const d=r[u];if(d.POSITION!==void 0){const f=t.json.accessors[d.POSITION],g=f.min,_=f.max;if(g!==void 0&&_!==void 0){if(l.setX(Math.max(Math.abs(g[0]),Math.abs(_[0]))),l.setY(Math.max(Math.abs(g[1]),Math.abs(_[1]))),l.setZ(Math.max(Math.abs(g[2]),Math.abs(_[2]))),f.normalized){const m=aa(yi[f.componentType]);l.multiplyScalar(m)}c.max(l)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}s.expandByVector(c)}a.boundingBox=s;const o=new Li;s.getCenter(o.center),o.radius=s.min.distanceTo(s.max)/2,a.boundingSphere=o}function Ic(a,e,t){const i=e.attributes,s=[];function r(o,c){return t.getDependency("accessor",o).then(function(l){a.setAttribute(c,l)})}for(const o in i){const c=ra[o]||o.toLowerCase();c in a.attributes||s.push(r(i[o],c))}if(e.indices!==void 0&&!a.index){const o=t.getDependency("accessor",e.indices).then(function(c){a.setIndex(c)});s.push(o)}return xn(a,e),Av(a,e,t),Promise.all(s).then(function(){return e.targets!==void 0?bv(a,e.targets,t):a})}const Pc={type:"change"},Gr={type:"start"},Nc={type:"end"};class Cv extends Jn{constructor(e,t){super(),this.object=e,this.domElement=t,this.domElement.style.touchAction="none",this.enabled=!0,this.target=new D,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:ei.ROTATE,MIDDLE:ei.DOLLY,RIGHT:ei.PAN},this.touches={ONE:ti.ROTATE,TWO:ti.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this.getPolarAngle=function(){return c.phi},this.getAzimuthalAngle=function(){return c.theta},this.getDistance=function(){return this.object.position.distanceTo(this.target)},this.listenToKeyEvents=function(C){C.addEventListener("keydown",pt),this._domElementKeyEvents=C},this.stopListenToKeyEvents=function(){this._domElementKeyEvents.removeEventListener("keydown",pt),this._domElementKeyEvents=null},this.saveState=function(){i.target0.copy(i.target),i.position0.copy(i.object.position),i.zoom0=i.object.zoom},this.reset=function(){i.target.copy(i.target0),i.object.position.copy(i.position0),i.object.zoom=i.zoom0,i.object.updateProjectionMatrix(),i.dispatchEvent(Pc),i.update(),r=s.NONE},this.update=function(){const C=new D,N=new Zt().setFromUnitVectors(e.up,new D(0,1,0)),oe=N.clone().invert(),re=new D,me=new Zt,_e=2*Math.PI;return function(){const De=i.object.position;C.copy(De).sub(i.target),C.applyQuaternion(N),c.setFromVector3(C),i.autoRotate&&r===s.NONE&&A(I()),i.enableDamping?(c.theta+=l.theta*i.dampingFactor,c.phi+=l.phi*i.dampingFactor):(c.theta+=l.theta,c.phi+=l.phi);let Ue=i.minAzimuthAngle,Ve=i.maxAzimuthAngle;return isFinite(Ue)&&isFinite(Ve)&&(Ue<-Math.PI?Ue+=_e:Ue>Math.PI&&(Ue-=_e),Ve<-Math.PI?Ve+=_e:Ve>Math.PI&&(Ve-=_e),Ue<=Ve?c.theta=Math.max(Ue,Math.min(Ve,c.theta)):c.theta=c.theta>(Ue+Ve)/2?Math.max(Ue,c.theta):Math.min(Ve,c.theta)),c.phi=Math.max(i.minPolarAngle,Math.min(i.maxPolarAngle,c.phi)),c.makeSafe(),c.radius*=u,c.radius=Math.max(i.minDistance,Math.min(i.maxDistance,c.radius)),i.enableDamping===!0?i.target.addScaledVector(h,i.dampingFactor):i.target.add(h),C.setFromSpherical(c),C.applyQuaternion(oe),De.copy(i.target).add(C),i.object.lookAt(i.target),i.enableDamping===!0?(l.theta*=1-i.dampingFactor,l.phi*=1-i.dampingFactor,h.multiplyScalar(1-i.dampingFactor)):(l.set(0,0,0),h.set(0,0,0)),u=1,d||re.distanceToSquared(i.object.position)>o||8*(1-me.dot(i.object.quaternion))>o?(i.dispatchEvent(Pc),re.copy(i.object.position),me.copy(i.object.quaternion),d=!1,!0):!1}}(),this.dispose=function(){i.domElement.removeEventListener("contextmenu",H),i.domElement.removeEventListener("pointerdown",nt),i.domElement.removeEventListener("pointercancel",st),i.domElement.removeEventListener("wheel",wt),i.domElement.removeEventListener("pointermove",ft),i.domElement.removeEventListener("pointerup",it),i._domElementKeyEvents!==null&&(i._domElementKeyEvents.removeEventListener("keydown",pt),i._domElementKeyEvents=null)};const i=this,s={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6};let r=s.NONE;const o=1e-6,c=new Ec,l=new Ec;let u=1;const h=new D;let d=!1;const f=new Se,g=new Se,_=new Se,m=new Se,p=new Se,x=new Se,E=new Se,y=new Se,M=new Se,w=[],L={};function I(){return 2*Math.PI/60/60*i.autoRotateSpeed}function b(){return Math.pow(.95,i.zoomSpeed)}function A(C){l.theta-=C}function F(C){l.phi-=C}const $=function(){const C=new D;return function(oe,re){C.setFromMatrixColumn(re,0),C.multiplyScalar(-oe),h.add(C)}}(),X=function(){const C=new D;return function(oe,re){i.screenSpacePanning===!0?C.setFromMatrixColumn(re,1):(C.setFromMatrixColumn(re,0),C.crossVectors(i.object.up,C)),C.multiplyScalar(oe),h.add(C)}}(),U=function(){const C=new D;return function(oe,re){const me=i.domElement;if(i.object.isPerspectiveCamera){const _e=i.object.position;C.copy(_e).sub(i.target);let ge=C.length();ge*=Math.tan(i.object.fov/2*Math.PI/180),$(2*oe*ge/me.clientHeight,i.object.matrix),X(2*re*ge/me.clientHeight,i.object.matrix)}else i.object.isOrthographicCamera?($(oe*(i.object.right-i.object.left)/i.object.zoom/me.clientWidth,i.object.matrix),X(re*(i.object.top-i.object.bottom)/i.object.zoom/me.clientHeight,i.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),i.enablePan=!1)}}();function P(C){i.object.isPerspectiveCamera?u/=C:i.object.isOrthographicCamera?(i.object.zoom=Math.max(i.minZoom,Math.min(i.maxZoom,i.object.zoom*C)),i.object.updateProjectionMatrix(),d=!0):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),i.enableZoom=!1)}function G(C){i.object.isPerspectiveCamera?u*=C:i.object.isOrthographicCamera?(i.object.zoom=Math.max(i.minZoom,Math.min(i.maxZoom,i.object.zoom/C)),i.object.updateProjectionMatrix(),d=!0):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),i.enableZoom=!1)}function Y(C){f.set(C.clientX,C.clientY)}function Q(C){E.set(C.clientX,C.clientY)}function q(C){m.set(C.clientX,C.clientY)}function ee(C){g.set(C.clientX,C.clientY),_.subVectors(g,f).multiplyScalar(i.rotateSpeed);const N=i.domElement;A(2*Math.PI*_.x/N.clientHeight),F(2*Math.PI*_.y/N.clientHeight),f.copy(g),i.update()}function K(C){y.set(C.clientX,C.clientY),M.subVectors(y,E),M.y>0?P(b()):M.y<0&&G(b()),E.copy(y),i.update()}function ve(C){p.set(C.clientX,C.clientY),x.subVectors(p,m).multiplyScalar(i.panSpeed),U(x.x,x.y),m.copy(p),i.update()}function z(C){C.deltaY<0?G(b()):C.deltaY>0&&P(b()),i.update()}function Z(C){let N=!1;switch(C.code){case i.keys.UP:C.ctrlKey||C.metaKey||C.shiftKey?F(2*Math.PI*i.rotateSpeed/i.domElement.clientHeight):U(0,i.keyPanSpeed),N=!0;break;case i.keys.BOTTOM:C.ctrlKey||C.metaKey||C.shiftKey?F(-2*Math.PI*i.rotateSpeed/i.domElement.clientHeight):U(0,-i.keyPanSpeed),N=!0;break;case i.keys.LEFT:C.ctrlKey||C.metaKey||C.shiftKey?A(2*Math.PI*i.rotateSpeed/i.domElement.clientHeight):U(i.keyPanSpeed,0),N=!0;break;case i.keys.RIGHT:C.ctrlKey||C.metaKey||C.shiftKey?A(-2*Math.PI*i.rotateSpeed/i.domElement.clientHeight):U(-i.keyPanSpeed,0),N=!0;break}N&&(C.preventDefault(),i.update())}function se(){if(w.length===1)f.set(w[0].pageX,w[0].pageY);else{const C=.5*(w[0].pageX+w[1].pageX),N=.5*(w[0].pageY+w[1].pageY);f.set(C,N)}}function B(){if(w.length===1)m.set(w[0].pageX,w[0].pageY);else{const C=.5*(w[0].pageX+w[1].pageX),N=.5*(w[0].pageY+w[1].pageY);m.set(C,N)}}function ue(){const C=w[0].pageX-w[1].pageX,N=w[0].pageY-w[1].pageY,oe=Math.sqrt(C*C+N*N);E.set(0,oe)}function he(){i.enableZoom&&ue(),i.enablePan&&B()}function fe(){i.enableZoom&&ue(),i.enableRotate&&se()}function de(C){if(w.length==1)g.set(C.pageX,C.pageY);else{const oe=xe(C),re=.5*(C.pageX+oe.x),me=.5*(C.pageY+oe.y);g.set(re,me)}_.subVectors(g,f).multiplyScalar(i.rotateSpeed);const N=i.domElement;A(2*Math.PI*_.x/N.clientHeight),F(2*Math.PI*_.y/N.clientHeight),f.copy(g)}function be(C){if(w.length===1)p.set(C.pageX,C.pageY);else{const N=xe(C),oe=.5*(C.pageX+N.x),re=.5*(C.pageY+N.y);p.set(oe,re)}x.subVectors(p,m).multiplyScalar(i.panSpeed),U(x.x,x.y),m.copy(p)}function Te(C){const N=xe(C),oe=C.pageX-N.x,re=C.pageY-N.y,me=Math.sqrt(oe*oe+re*re);y.set(0,me),M.set(0,Math.pow(y.y/E.y,i.zoomSpeed)),P(M.y),E.copy(y)}function Ae(C){i.enableZoom&&Te(C),i.enablePan&&be(C)}function Fe(C){i.enableZoom&&Te(C),i.enableRotate&&de(C)}function nt(C){i.enabled!==!1&&(w.length===0&&(i.domElement.setPointerCapture(C.pointerId),i.domElement.addEventListener("pointermove",ft),i.domElement.addEventListener("pointerup",it)),te(C),C.pointerType==="touch"?T(C):$e(C))}function ft(C){i.enabled!==!1&&(C.pointerType==="touch"?v(C):je(C))}function it(C){ne(C),w.length===0&&(i.domElement.releasePointerCapture(C.pointerId),i.domElement.removeEventListener("pointermove",ft),i.domElement.removeEventListener("pointerup",it)),i.dispatchEvent(Nc),r=s.NONE}function st(C){ne(C)}function $e(C){let N;switch(C.button){case 0:N=i.mouseButtons.LEFT;break;case 1:N=i.mouseButtons.MIDDLE;break;case 2:N=i.mouseButtons.RIGHT;break;default:N=-1}switch(N){case ei.DOLLY:if(i.enableZoom===!1)return;Q(C),r=s.DOLLY;break;case ei.ROTATE:if(C.ctrlKey||C.metaKey||C.shiftKey){if(i.enablePan===!1)return;q(C),r=s.PAN}else{if(i.enableRotate===!1)return;Y(C),r=s.ROTATE}break;case ei.PAN:if(C.ctrlKey||C.metaKey||C.shiftKey){if(i.enableRotate===!1)return;Y(C),r=s.ROTATE}else{if(i.enablePan===!1)return;q(C),r=s.PAN}break;default:r=s.NONE}r!==s.NONE&&i.dispatchEvent(Gr)}function je(C){switch(r){case s.ROTATE:if(i.enableRotate===!1)return;ee(C);break;case s.DOLLY:if(i.enableZoom===!1)return;K(C);break;case s.PAN:if(i.enablePan===!1)return;ve(C);break}}function wt(C){i.enabled===!1||i.enableZoom===!1||r!==s.NONE||(C.preventDefault(),i.dispatchEvent(Gr),z(C),i.dispatchEvent(Nc))}function pt(C){i.enabled===!1||i.enablePan===!1||Z(C)}function T(C){switch(ae(C),w.length){case 1:switch(i.touches.ONE){case ti.ROTATE:if(i.enableRotate===!1)return;se(),r=s.TOUCH_ROTATE;break;case ti.PAN:if(i.enablePan===!1)return;B(),r=s.TOUCH_PAN;break;default:r=s.NONE}break;case 2:switch(i.touches.TWO){case ti.DOLLY_PAN:if(i.enableZoom===!1&&i.enablePan===!1)return;he(),r=s.TOUCH_DOLLY_PAN;break;case ti.DOLLY_ROTATE:if(i.enableZoom===!1&&i.enableRotate===!1)return;fe(),r=s.TOUCH_DOLLY_ROTATE;break;default:r=s.NONE}break;default:r=s.NONE}r!==s.NONE&&i.dispatchEvent(Gr)}function v(C){switch(ae(C),r){case s.TOUCH_ROTATE:if(i.enableRotate===!1)return;de(C),i.update();break;case s.TOUCH_PAN:if(i.enablePan===!1)return;be(C),i.update();break;case s.TOUCH_DOLLY_PAN:if(i.enableZoom===!1&&i.enablePan===!1)return;Ae(C),i.update();break;case s.TOUCH_DOLLY_ROTATE:if(i.enableZoom===!1&&i.enableRotate===!1)return;Fe(C),i.update();break;default:r=s.NONE}}function H(C){i.enabled!==!1&&C.preventDefault()}function te(C){w.push(C)}function ne(C){delete L[C.pointerId];for(let N=0;N<w.length;N++)if(w[N].pointerId==C.pointerId){w.splice(N,1);return}}function ae(C){let N=L[C.pointerId];N===void 0&&(N=new Se,L[C.pointerId]=N),N.set(C.pageX,C.pageY)}function xe(C){const N=C.pointerId===w[0].pointerId?w[1]:w[0];return L[N.pointerId]}i.domElement.addEventListener("contextmenu",H),i.domElement.addEventListener("pointerdown",nt),i.domElement.addEventListener("pointercancel",st),i.domElement.addEventListener("wheel",wt,{passive:!1}),this.update()}}function Lv(){let a="";for(let e=0;e<8;e++){a+=`
|`;for(let t=0;t<8;t++)Wt[e][t].team!="-"?a+=`${Wt[e][t].id}|`:a+="  |"}console.log(a)}function Rv(){let a="",e=0,t=!1;e:for(let i=0;i<8;i++)for(let s=0;s<8;s++){if(i>7&&s>7)break e;Wt[i][s].team!="-"?(t&&(a+=`${e}`,e=0,t=!1),a+=Wt[i][s].id):(e++,t=!0)}return console.log(a),a}function Dv(a){let e="";for(let t=0;t<8;t++){e+=`
|`;for(let i=0;i<8;i++)for(let s=0;s<a.length;s++)if(a[s][0]==t&&a[s][1]==i){e+="*|";break}else s==a.length-1&&(e+=" |")}console.log(e)}class le{constructor(e,t,i){this.r=e,this.c=t,this.id=i,this.team=i[0],this.piece=i[1]}isCheck(){let e=[],t=[],i=Wt,s=this.team,r=this.r,o=this.c;if(s=="w"&&(r>0&&o<7&&i[r-1][o+1].id=="bp"||r>0&&o>0&&i[r-1][o-1].id=="bp")||s=="b"&&(r<7&&o<7&&i[r+1][o+1].id=="wp"||r<7&&o>0&&i[r+1][o-1].id=="wp"))return!0;e=[1,2,2,1,-1,-2,-2,-1],t=[2,1,-1,-2,-2,-1,1,2];for(let c=0;c<8;c++)if(r+e[c]>-1&&r+e[c]<8&&o+t[c]>-1&&o+t[c]<8&&i[r+e[c]][o+t[c]].id==`${ke[s]}n`)return!0;if(r<7){for(let c=r+1;c<8&&i[c][o].team!=s;c++)if(i[c][o].team==ke[s]){if(i[c][o].id==`${ke[s]}r`||i[c][o].id==`${ke[s]}q`)return!0;break}}if(o<7){for(let c=o+1;c<8&&i[r][c].team!=s;c++)if(i[r][c].team==ke[s]){if(i[r][c].id==`${ke[s]}r`||i[r][c].id==`${ke[s]}q`)return!0;break}}if(r>0){for(let c=r-1;c>-1&&i[c][o].team!=s;c--)if(i[c][o].team==ke[s]){if(i[c][o].id==`${ke[s]}r`||i[c][o].id==`${ke[s]}q`)return!0;break}}if(o>0){for(let c=o-1;c>-1&&i[r][c].team!=s;c--)if(i[r][c].team==ke[s]){if(i[r][c].id==`${ke[s]}r`||i[r][c].id==`${ke[s]}q`)return!0;break}}e=[1,1,-1,-1],t=[1,-1,-1,1];for(let c=1;c<8&&!(r+c==8||o+c==8||i[r+c][o+c].team==s);c++)if(i[r+c][o+c].id==`${ke[s]}b`||i[r+c][o+c].id==`${ke[s]}q`)return!0;for(let c=1;c<8&&!(r+c==8||o-c==-1||i[r+c][o-c].team==s);c++)if(i[r+c][o-c].id==`${ke[s]}b`||i[r+c][o-c].id==`${ke[s]}q`)return!0;for(let c=1;c<8&&!(r-c==-1||o-c==-1||i[r-c][o-c].team==s);c++)if(i[r-c][o-c].id==`${ke[s]}b`||i[r-c][o-c].id==`${ke[s]}q`)return!0;for(let c=1;c<8&&!(r-c==-1||o+c==8||i[r-c][o+c].team==s);c++)if(i[r-c][o+c].id==`${ke[s]}b`||i[r-c][o+c].id==`${ke[s]}q`)return!0;e=[0,1,1,1,0,-1,-1,-1],t=[1,1,0,-1,-1,-1,0,1];for(let c=0;c<8;c++)if(r+e[c]>0&&r+e[c]<8&&o+t[c]>0&&o+t[c]<8&&n[r+e[c]][o+t[c]].id==`${ke[s]}k`)return!0;return!1}find_moves(){let e=[],t=[],i=Wt,s=this.team,r=this.r,o=this.c,c=[],l=this.piece,u=this.id;if(u=="wp"&&(r==6&&i[r-2][o].team=="-"&&c.push([r-2,o]),i[r-1][o].team=="-"&&c.push([r-1,o]),i[r-1][o+1].team==ke[s]&&c.push([r-1,o+1]),i[r-1][o-1].team==ke[s]&&c.push([r-1,o+1])),u=="bp"&&(r==1&&i[r+2][o].team=="-"&&c.push([r+2,o]),i[r+1][o].team=="-"&&c.push([r+1,o]),i[r-1][o+1].team==ke[s]&&c.push([r+1,o+1]),i[r-1][o-1].team==ke[s]&&c.push([r+1,o+1])),l=="n"){e=[1,2,2,1,-1,-2,-2,-1],t=[2,1,-1,-2,-2,-1,1,2];for(let h=0;h<8;h++)r+e[h]>-1&&r+e[h]<8&&o+t[h]>-1&&o+t[h]<8&&i[r+e[h]][o+t[h]].team!=s&&c.push([r+e[h],o+t[h]])}if(l=="r"||l=="q"){if(r<7){for(let h=r+1;h<8&&i[h][o].team!=s;h++)if(c.push([h,o]),i[h][o].team==ke[s])break}if(o<7){for(let h=o+1;h<8&&i[r][h].team!=s;h++)if(c.push([r,h]),i[r][h].team==ke[s])break}if(r>0){for(let h=r-1;h>-1&&i[h][o].team!=s;h--)if(c.push([h,o]),i[h][o].team==ke[s])break}if(o>0){for(let h=o-1;h>-1&&i[r][h].team!=s;h--)if(c.push([r,h]),i[r][h].team==ke[s])break}}if(l=="b"||l=="q"){for(let h=1;h<8&&!(r+h==8||o+h==8);h++)if(i[r+h][o+h].team=="-")c.push([r+h,o+h]);else{if(i[r+h][o+h].team==s)break;c.push([r+h,o+h]);break}for(let h=1;h<8&&!(r+h==8||o-h==-1);h++)if(i[r+h][o-h].team=="-")c.push([r+h,o-h]);else{if(i[r+h][o-h].team==s)break;c.push([r+h,o-h]);break}for(let h=1;h<8&&!(r-h==-1||o-h==-1);h++)if(i[r-h][o-h].team=="-")c.push([r-h,o-h]);else{if(i[r-h][o-h].team==s)break;c.push([r-h,o-h]);break}for(let h=1;h<8&&!(r-h==-1||o+h==8);h++)if(i[r-h][o+h].team=="-")c.push([r-h,o+h]);else{if(i[r-h][o+h].team==s)break;c.push([r-h,o+h]);break}}if(l=="k"){e=[0,1,1,1,0,-1,-1,-1],t=[1,1,0,-1,-1,-1,0,1];for(let h=0;h<8;h++)r+e[h]>-1&&r+e[h]<8&&o+t[h]>-1&&o+t[h]<8&&(n[r+e[h]][o+t[h]].isCheck()||c.push([r+e[h],o+t[h]]))}return Lv(),console.log(`id: ${u} | location: (${r},${o})`),console.log(c),Dv(c),console.log("<-------------------------------------------------------------------------->"),c}}var Wt=[[new le(0,0,"-="),new le(0,1,"-="),new le(0,2,"-="),new le(0,3,"-="),new le(0,4,"-="),new le(0,5,"-="),new le(0,6,"-="),new le(0,7,"-=")],[new le(1,0,"-="),new le(1,1,"-="),new le(1,2,"-="),new le(1,3,"-="),new le(1,4,"-="),new le(1,5,"-="),new le(1,6,"-="),new le(1,7,"-=")],[new le(2,0,"-="),new le(2,1,"-="),new le(2,2,"-="),new le(2,3,"-="),new le(2,4,"-="),new le(2,5,"-="),new le(2,6,"wr"),new le(2,7,"-=")],[new le(3,0,"-="),new le(3,1,"-="),new le(3,2,"-="),new le(3,3,"-="),new le(3,4,"bb"),new le(3,5,"-="),new le(3,6,"-="),new le(3,7,"-=")],[new le(4,0,"-="),new le(4,1,"-="),new le(4,2,"-="),new le(4,3,"-="),new le(4,4,"wn"),new le(4,5,"-="),new le(4,6,"-="),new le(4,7,"-=")],[new le(5,0,"-="),new le(5,1,"-="),new le(5,2,"-="),new le(5,3,"-="),new le(5,4,"-="),new le(5,5,"-="),new le(5,6,"-="),new le(5,7,"-=")],[new le(6,0,"-="),new le(6,1,"-="),new le(6,2,"br"),new le(6,3,"-="),new le(6,4,"-="),new le(6,5,"-="),new le(6,6,"wp"),new le(6,7,"-=")],[new le(7,0,"-="),new le(7,1,"-="),new le(7,2,"-="),new le(7,3,"-="),new le(7,4,"-="),new le(7,5,"-="),new le(7,6,"-="),new le(7,7,"-=")]];const ke={b:"w",w:"b"};Wt[4][4].find_moves();Wt[6][6].find_moves();Wt[2][6].find_moves();Wt[6][2].find_moves();Wt[3][4].find_moves();Rv();const Iv={apiKey:"AIzaSyCCn6J8utFoEoPf2SHKcMXfb5DY6jbysXc",authDomain:"chess-3d-webapp.firebaseapp.com",databaseURL:"https://chess-3d-webapp-default-rtdb.firebaseio.com",projectId:"chess-3d-webapp",storageBucket:"chess-3d-webapp.appspot.com",messagingSenderId:"1073149571702",appId:"1:1073149571702:web:46b347a2bfbbe2d695e557",measurementId:"G-86L9THZL9G"},Pv=jc(Iv);Hd(Pv);const Pi=new lx,$s=new yt(75,window.innerWidth/window.innerHeight,.1,1e3),Nv=new Kx,cs=new va({canvas:document.querySelector("#bg")});cs.setPixelRatio(window.devicePixelRatio);cs.setSize(window.innerWidth,window.innerHeight);$s.position.z=5;$s.position.y=2;const Ov=new $x(100,10);Pi.add(Ov);const Fv=new Cv($s,cs.domElement);Fv.update();const Uv=new Yx(20);Pi.add(Uv);const Bv=new Ux(16777215);Pi.add(Bv);const kv=new Zl().load("white_background.jpeg");Pi.background=kv;Nv.load("/chess_board/scene.gltf",function(a){const e=a.scene;Pi.add(e),e.position.set(0,0,0)},void 0,function(a){console.error(a)});function zv(){cs.render(Pi,$s)}cs.setAnimationLoop(zv);
