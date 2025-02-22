function e(e,t,r,n){Object.defineProperty(e,t,{get:r,set:n,enumerable:!0,configurable:!0})}var t=globalThis,r={},n={},i=t.parcelRequire94c2;null==i&&((i=function(e){if(e in r)return r[e].exports;if(e in n){var t=n[e];delete n[e];var i={id:e,exports:{}};return r[e]=i,t.call(i.exports,i,i.exports),i.exports}var s=Error("Cannot find module '"+e+"'");throw s.code="MODULE_NOT_FOUND",s}).register=function(e,t){n[e]=t},t.parcelRequire94c2=i);var s=i.register;s("47Mwn",function(t,r){e(t.exports,"auth",()=>l),e(t.exports,"db",()=>u),i("fhN3L");var n=i("7xvHX");i("ilpIi");var s=i("9HrqM");i("6AR8M");var o=i("guynj");let a=(0,n.initializeApp)({apiKey:"AIzaSyAfr8hn7WyMTPK9kX3A9cHL_2_EPX-41lg",authDomain:"web-development-trends.firebaseapp.com",projectId:"web-development-trends",storageBucket:"web-development-trends.firebasestorage.app",messagingSenderId:"1033130996649",appId:"1:1033130996649:web:dc33f415f1ce75b5494ab8"}),l=(0,o.o)(a),u=(0,s.getFirestore)(a)}),s("fhN3L",function(t,r){e(t.exports,"initializeApp",()=>i("7xvHX").initializeApp),e(t.exports,"registerVersion",()=>i("7xvHX").registerVersion),/**
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
 */(0,i("7xvHX").registerVersion)("firebase","11.3.1","app")}),s("7xvHX",function(t,r){e(t.exports,"_registerComponent",()=>v),e(t.exports,"_getProvider",()=>w),e(t.exports,"_removeServiceInstance",()=>_),e(t.exports,"_isFirebaseServerApp",()=>E),e(t.exports,"registerVersion",()=>A),e(t.exports,"SDK_VERSION",()=>T),e(t.exports,"initializeApp",()=>S),e(t.exports,"getApp",()=>C);var n=i("eryG9"),s=i("5Z2ef"),o=i("gMVVg"),a=i("iItpQ");/**
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
 */class l{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(e=>{if(!function(e){let t=e.getComponent();return(null==t?void 0:t.type)==="VERSION"}(e))return null;{let t=e.getImmediate();return`${t.library}/${t.version}`}}).filter(e=>e).join(" ")}}let u="@firebase/app",h="0.11.1",c=new s.Logger("@firebase/app"),f="[DEFAULT]",d={[u]:"fire-core","@firebase/app-compat":"fire-core-compat","@firebase/analytics":"fire-analytics","@firebase/analytics-compat":"fire-analytics-compat","@firebase/app-check":"fire-app-check","@firebase/app-check-compat":"fire-app-check-compat","@firebase/auth":"fire-auth","@firebase/auth-compat":"fire-auth-compat","@firebase/database":"fire-rtdb","@firebase/data-connect":"fire-data-connect","@firebase/database-compat":"fire-rtdb-compat","@firebase/functions":"fire-fn","@firebase/functions-compat":"fire-fn-compat","@firebase/installations":"fire-iid","@firebase/installations-compat":"fire-iid-compat","@firebase/messaging":"fire-fcm","@firebase/messaging-compat":"fire-fcm-compat","@firebase/performance":"fire-perf","@firebase/performance-compat":"fire-perf-compat","@firebase/remote-config":"fire-rc","@firebase/remote-config-compat":"fire-rc-compat","@firebase/storage":"fire-gcs","@firebase/storage-compat":"fire-gcs-compat","@firebase/firestore":"fire-fst","@firebase/firestore-compat":"fire-fst-compat","@firebase/vertexai":"fire-vertex","fire-js":"fire-js",firebase:"fire-js-all"},p=new Map,g=new Map,m=new Map;function y(e,t){try{e.container.addComponent(t)}catch(r){c.debug(`Component ${t.name} failed to register with FirebaseApp ${e.name}`,r)}}function v(e){let t=e.name;if(m.has(t))return c.debug(`There were multiple attempts to register component ${t}.`),!1;for(let r of(m.set(t,e),p.values()))y(r,e);for(let t of g.values())y(t,e);return!0}function w(e,t){let r=e.container.getProvider("heartbeat").getImmediate({optional:!0});return r&&r.triggerHeartbeat(),e.container.getProvider(t)}function _(e,t,r=f){w(e,t).clearInstance(r)}function E(e){return null!=e&&void 0!==e.settings}let b=new o.ErrorFactory("app","Firebase",{"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."});/**
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
 */class I{constructor(e,t,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new n.Component("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw b.create("app-deleted",{appName:this._name})}}/**
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
 */let T="11.3.1";function S(e,t={}){let r=e;"object"!=typeof t&&(t={name:t});let i=Object.assign({name:f,automaticDataCollectionEnabled:!1},t),s=i.name;if("string"!=typeof s||!s)throw b.create("bad-app-name",{appName:String(s)});if(r||(r=(0,o.getDefaultAppConfig)()),!r)throw b.create("no-options");let a=p.get(s);if(a){if((0,o.deepEqual)(r,a.options)&&(0,o.deepEqual)(i,a.config))return a;throw b.create("duplicate-app",{appName:s})}let l=new n.ComponentContainer(s);for(let e of m.values())l.addComponent(e);let u=new I(r,i,l);return p.set(s,u),u}function C(e=f){let t=p.get(e);if(!t&&e===f&&(0,o.getDefaultAppConfig)())return S();if(!t)throw b.create("no-app",{appName:e});return t}function A(e,t,r){var i;let s=null!==(i=d[e])&&void 0!==i?i:e;r&&(s+=`-${r}`);let o=s.match(/\s|\//),a=t.match(/\s|\//);if(o||a){let e=[`Unable to register library "${s}" with version "${t}":`];o&&e.push(`library name "${s}" contains illegal characters (whitespace or "/")`),o&&a&&e.push("and"),a&&e.push(`version name "${t}" contains illegal characters (whitespace or "/")`),c.warn(e.join(" "));return}v(new n.Component(`${s}-version`,()=>({library:s,version:t}),"VERSION"))}let k="firebase-heartbeat-store",x=null;function R(){return x||(x=(0,a.openDB)("firebase-heartbeat-database",1,{upgrade:(e,t)=>{if(0===t)try{e.createObjectStore(k)}catch(e){console.warn(e)}}}).catch(e=>{throw b.create("idb-open",{originalErrorMessage:e.message})})),x}async function N(e){try{let t=(await R()).transaction(k),r=await t.objectStore(k).get(O(e));return await t.done,r}catch(e){if(e instanceof o.FirebaseError)c.warn(e.message);else{let t=b.create("idb-get",{originalErrorMessage:null==e?void 0:e.message});c.warn(t.message)}}}async function D(e,t){try{let r=(await R()).transaction(k,"readwrite"),n=r.objectStore(k);await n.put(t,O(e)),await r.done}catch(e){if(e instanceof o.FirebaseError)c.warn(e.message);else{let t=b.create("idb-set",{originalErrorMessage:null==e?void 0:e.message});c.warn(t.message)}}}function O(e){return`${e.name}!${e.options.appId}`}class P{constructor(e){this.container=e,this._heartbeatsCache=null;let t=this.container.getProvider("app").getImmediate();this._storage=new M(t),this._heartbeatsCachePromise=this._storage.read().then(e=>(this._heartbeatsCache=e,e))}async triggerHeartbeat(){var e,t;try{let r=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),n=L();if((null===(e=this._heartbeatsCache)||void 0===e?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,(null===(t=this._heartbeatsCache)||void 0===t?void 0:t.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===n||this._heartbeatsCache.heartbeats.some(e=>e.date===n))return;if(this._heartbeatsCache.heartbeats.push({date:n,agent:r}),this._heartbeatsCache.heartbeats.length>30){let e=function(e){if(0===e.length)return -1;let t=0,r=e[0].date;for(let n=1;n<e.length;n++)e[n].date<r&&(r=e[n].date,t=n);return t}(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(e,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(e){c.warn(e)}}async getHeartbeatsHeader(){var e;try{if(null===this._heartbeatsCache&&await this._heartbeatsCachePromise,(null===(e=this._heartbeatsCache)||void 0===e?void 0:e.heartbeats)==null||0===this._heartbeatsCache.heartbeats.length)return"";let t=L(),{heartbeatsToSend:r,unsentEntries:n}=function(e,t=1024){let r=[],n=e.slice();for(let i of e){let e=r.find(e=>e.agent===i.agent);if(e){if(e.dates.push(i.date),U(r)>t){e.dates.pop();break}}else if(r.push({agent:i.agent,dates:[i.date]}),U(r)>t){r.pop();break}n=n.slice(1)}return{heartbeatsToSend:r,unsentEntries:n}}(this._heartbeatsCache.heartbeats),i=(0,o.base64urlEncodeWithoutPadding)(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=t,n.length>0?(this._heartbeatsCache.heartbeats=n,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}catch(e){return c.warn(e),""}}}function L(){return new Date().toISOString().substring(0,10)}class M{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return!!(0,o.isIndexedDBAvailable)()&&(0,o.validateIndexedDBOpenable)().then(()=>!0).catch(()=>!1)}async read(){if(!await this._canUseIndexedDBPromise)return{heartbeats:[]};{let e=await N(this.app);return(null==e?void 0:e.heartbeats)?e:{heartbeats:[]}}}async overwrite(e){var t;if(await this._canUseIndexedDBPromise){let r=await this.read();return D(this.app,{lastSentHeartbeatDate:null!==(t=e.lastSentHeartbeatDate)&&void 0!==t?t:r.lastSentHeartbeatDate,heartbeats:e.heartbeats})}}async add(e){var t;if(await this._canUseIndexedDBPromise){let r=await this.read();return D(this.app,{lastSentHeartbeatDate:null!==(t=e.lastSentHeartbeatDate)&&void 0!==t?t:r.lastSentHeartbeatDate,heartbeats:[...r.heartbeats,...e.heartbeats]})}}}function U(e){return(0,o.base64urlEncodeWithoutPadding)(JSON.stringify({version:2,heartbeats:e})).length}v(new n.Component("platform-logger",e=>new l(e),"PRIVATE")),v(new n.Component("heartbeat",e=>new P(e),"PRIVATE")),A(u,h,""),A(u,h,"esm2017"),A("fire-js","")}),s("eryG9",function(t,r){e(t.exports,"Component",()=>s),e(t.exports,"ComponentContainer",()=>l);var n=i("gMVVg");class s{constructor(e,t,r){this.name=e,this.instanceFactory=t,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */let o="[DEFAULT]";/**
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
 */class a{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){let t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){let e=new n.Deferred;if(this.instancesDeferred.set(t,e),this.isInitialized(t)||this.shouldAutoInitialize())try{let r=this.getOrInitializeService({instanceIdentifier:t});r&&e.resolve(r)}catch(e){}}return this.instancesDeferred.get(t).promise}getImmediate(e){var t;let r=this.normalizeInstanceIdentifier(null==e?void 0:e.identifier),n=null!==(t=null==e?void 0:e.optional)&&void 0!==t&&t;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(e){if(n)return null;throw e}else{if(n)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,this.shouldAutoInitialize()){if("EAGER"===e.instantiationMode)try{this.getOrInitializeService({instanceIdentifier:o})}catch(e){}for(let[e,t]of this.instancesDeferred.entries()){let r=this.normalizeInstanceIdentifier(e);try{let e=this.getOrInitializeService({instanceIdentifier:r});t.resolve(e)}catch(e){}}}}clearInstance(e=o){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){let e=Array.from(this.instances.values());await Promise.all([...e.filter(e=>"INTERNAL"in e).map(e=>e.INTERNAL.delete()),...e.filter(e=>"_delete"in e).map(e=>e._delete())])}isComponentSet(){return null!=this.component}isInitialized(e=o){return this.instances.has(e)}getOptions(e=o){return this.instancesOptions.get(e)||{}}initialize(e={}){let{options:t={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);let n=this.getOrInitializeService({instanceIdentifier:r,options:t});for(let[e,t]of this.instancesDeferred.entries())r===this.normalizeInstanceIdentifier(e)&&t.resolve(n);return n}onInit(e,t){var r;let n=this.normalizeInstanceIdentifier(t),i=null!==(r=this.onInitCallbacks.get(n))&&void 0!==r?r:new Set;i.add(e),this.onInitCallbacks.set(n,i);let s=this.instances.get(n);return s&&e(s,n),()=>{i.delete(e)}}invokeOnInitCallbacks(e,t){let r=this.onInitCallbacks.get(t);if(r)for(let n of r)try{n(e,t)}catch(e){}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:e===o?void 0:e,options:t}),this.instances.set(e,r),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch(e){}return r||null}normalizeInstanceIdentifier(e=o){return this.component?this.component.multipleInstances?e:o:e}shouldAutoInitialize(){return!!this.component&&"EXPLICIT"!==this.component.instantiationMode}}/**
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
 */class l{constructor(e){this.name=e,this.providers=new Map}addComponent(e){let t=this.getProvider(e.name);if(t.isComponentSet())throw Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);let t=new a(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}}),s("gMVVg",function(r,n){e(r.exports,"base64urlEncodeWithoutPadding",()=>c),e(r.exports,"base64Decode",()=>f),e(r.exports,"getDefaultEmulatorHost",()=>y),e(r.exports,"getDefaultEmulatorHostnameAndPort",()=>v),e(r.exports,"getDefaultAppConfig",()=>w),e(r.exports,"getExperimentalSetting",()=>_),e(r.exports,"Deferred",()=>E),e(r.exports,"createMockUserToken",()=>b),e(r.exports,"getUA",()=>I),e(r.exports,"isMobileCordova",()=>T),e(r.exports,"isBrowser",()=>S),e(r.exports,"isWebWorker",()=>C),e(r.exports,"isCloudflareWorker",()=>A),e(r.exports,"isBrowserExtension",()=>k),e(r.exports,"isReactNative",()=>x),e(r.exports,"isIE",()=>R),e(r.exports,"isSafari",()=>N),e(r.exports,"isIndexedDBAvailable",()=>D),e(r.exports,"validateIndexedDBOpenable",()=>O),e(r.exports,"FirebaseError",()=>P),e(r.exports,"ErrorFactory",()=>L),e(r.exports,"isEmpty",()=>U),e(r.exports,"deepEqual",()=>function e(t,r){if(t===r)return!0;let n=Object.keys(t),i=Object.keys(r);for(let s of n){if(!i.includes(s))return!1;let n=t[s],o=r[s];if(V(n)&&V(o)){if(!e(n,o))return!1}else if(n!==o)return!1}for(let e of i)if(!n.includes(e))return!1;return!0}),e(r.exports,"querystring",()=>F),e(r.exports,"querystringDecode",()=>B),e(r.exports,"extractQuerystring",()=>j),e(r.exports,"createSubscribe",()=>q),e(r.exports,"getModularInstance",()=>H);/**
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
 */var s=i("hPtJY");/**
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
 */let o=function(e){let t=[],r=0;for(let n=0;n<e.length;n++){let i=e.charCodeAt(n);i<128?t[r++]=i:(i<2048?t[r++]=i>>6|192:((64512&i)==55296&&n+1<e.length&&(64512&e.charCodeAt(n+1))==56320?(i=65536+((1023&i)<<10)+(1023&e.charCodeAt(++n)),t[r++]=i>>18|240,t[r++]=i>>12&63|128):t[r++]=i>>12|224,t[r++]=i>>6&63|128),t[r++]=63&i|128)}return t},a=function(e){let t=[],r=0,n=0;for(;r<e.length;){let i=e[r++];if(i<128)t[n++]=String.fromCharCode(i);else if(i>191&&i<224){let s=e[r++];t[n++]=String.fromCharCode((31&i)<<6|63&s)}else if(i>239&&i<365){let s=((7&i)<<18|(63&e[r++])<<12|(63&e[r++])<<6|63&e[r++])-65536;t[n++]=String.fromCharCode(55296+(s>>10)),t[n++]=String.fromCharCode(56320+(1023&s))}else{let s=e[r++],o=e[r++];t[n++]=String.fromCharCode((15&i)<<12|(63&s)<<6|63&o)}}return t.join("")},l={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:"function"==typeof atob,encodeByteArray(e,t){if(!Array.isArray(e))throw Error("encodeByteArray takes an array as a parameter");this.init_();let r=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,n=[];for(let t=0;t<e.length;t+=3){let i=e[t],s=t+1<e.length,o=s?e[t+1]:0,a=t+2<e.length,l=a?e[t+2]:0,u=i>>2,h=(3&i)<<4|o>>4,c=(15&o)<<2|l>>6,f=63&l;a||(f=64,s||(c=64)),n.push(r[u],r[h],r[c],r[f])}return n.join("")},encodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(e):this.encodeByteArray(o(e),t)},decodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(e):a(this.decodeStringToByteArray(e,t))},decodeStringToByteArray(e,t){this.init_();let r=t?this.charToByteMapWebSafe_:this.charToByteMap_,n=[];for(let t=0;t<e.length;){let i=r[e.charAt(t++)],s=t<e.length?r[e.charAt(t)]:0,o=++t<e.length?r[e.charAt(t)]:64,a=++t<e.length?r[e.charAt(t)]:64;if(++t,null==i||null==s||null==o||null==a)throw new u;let l=i<<2|s>>4;if(n.push(l),64!==o){let e=s<<4&240|o>>2;if(n.push(e),64!==a){let e=o<<6&192|a;n.push(e)}}}return n},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let e=0;e<this.ENCODED_VALS.length;e++)this.byteToCharMap_[e]=this.ENCODED_VALS.charAt(e),this.charToByteMap_[this.byteToCharMap_[e]]=e,this.byteToCharMapWebSafe_[e]=this.ENCODED_VALS_WEBSAFE.charAt(e),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[e]]=e,e>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(e)]=e,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(e)]=e)}}};class u extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}let h=function(e){let t=o(e);return l.encodeByteArray(t,!0)},c=function(e){return h(e).replace(/\./g,"")},f=function(e){try{return l.decodeString(e,!0)}catch(e){console.error("base64Decode failed: ",e)}return null},d=()=>/**
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
 */(function(){if("undefined"!=typeof self)return self;if("undefined"!=typeof window)return window;if(void 0!==t)return t;throw Error("Unable to locate global object.")})().__FIREBASE_DEFAULTS__,p=()=>{if(void 0===s||void 0===s.env)return;let e=void 0;if(e)return JSON.parse(e)},g=()=>{let e;if("undefined"==typeof document)return;try{e=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch(e){return}let t=e&&f(e[1]);return t&&JSON.parse(t)},m=()=>{try{return d()||p()||g()}catch(e){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${e}`);return}},y=e=>{var t,r;return null===(r=null===(t=m())||void 0===t?void 0:t.emulatorHosts)||void 0===r?void 0:r[e]},v=e=>{let t=y(e);if(!t)return;let r=t.lastIndexOf(":");if(r<=0||r+1===t.length)throw Error(`Invalid host ${t} with no separate hostname and port!`);let n=parseInt(t.substring(r+1),10);return"["===t[0]?[t.substring(1,r-1),n]:[t.substring(0,r),n]},w=()=>{var e;return null===(e=m())||void 0===e?void 0:e.config},_=e=>{var t;return null===(t=m())||void 0===t?void 0:t[`_${e}`]};/**
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
 */class E{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,r)=>{t?this.reject(t):this.resolve(r),"function"==typeof e&&(this.promise.catch(()=>{}),1===e.length?e(t):e(t,r))}}}/**
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
 */function b(e,t){if(e.uid)throw Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');let r=t||"demo-project",n=e.iat||0,i=e.sub||e.user_id;if(!i)throw Error("mockUserToken must contain 'sub' or 'user_id' field!");let s=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:n,exp:n+3600,auth_time:n,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}}},e);return[c(JSON.stringify({alg:"none",type:"JWT"})),c(JSON.stringify(s)),""].join(".")}/**
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
 */function I(){return"undefined"!=typeof navigator&&"string"==typeof navigator.userAgent?navigator.userAgent:""}function T(){return"undefined"!=typeof window&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(I())}function S(){return"undefined"!=typeof window||C()}function C(){return"undefined"!=typeof WorkerGlobalScope&&"undefined"!=typeof self&&self instanceof WorkerGlobalScope}function A(){return"undefined"!=typeof navigator&&"Cloudflare-Workers"===navigator.userAgent}function k(){let e="object"==typeof chrome?chrome.runtime:"object"==typeof browser?browser.runtime:void 0;return"object"==typeof e&&void 0!==e.id}function x(){return"object"==typeof navigator&&"ReactNative"===navigator.product}function R(){let e=I();return e.indexOf("MSIE ")>=0||e.indexOf("Trident/")>=0}function N(){return!function(){var e;let r=null===(e=m())||void 0===e?void 0:e.forceEnvironment;if("node"===r)return!0;if("browser"===r)return!1;try{return"[object process]"===Object.prototype.toString.call(t.process)}catch(e){return!1}}()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function D(){try{return"object"==typeof indexedDB}catch(e){return!1}}function O(){return new Promise((e,t)=>{try{let r=!0,n="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(n);i.onsuccess=()=>{i.result.close(),r||self.indexedDB.deleteDatabase(n),e(!0)},i.onupgradeneeded=()=>{r=!1},i.onerror=()=>{var e;t((null===(e=i.error)||void 0===e?void 0:e.message)||"")}}catch(e){t(e)}})}class P extends Error{constructor(e,t,r){super(t),this.code=e,this.customData=r,this.name="FirebaseError",Object.setPrototypeOf(this,P.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,L.prototype.create)}}class L{constructor(e,t,r){this.service=e,this.serviceName=t,this.errors=r}create(e,...t){let r=t[0]||{},n=`${this.service}/${e}`,i=this.errors[e],s=i?i.replace(M,(e,t)=>{let n=r[t];return null!=n?String(n):`<${t}?>`}):"Error",o=`${this.serviceName}: ${s} (${n}).`;return new P(n,o,r)}}let M=/\{\$([^}]+)}/g;function U(e){for(let t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}function V(e){return null!==e&&"object"==typeof e}/**
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
 */function F(e){let t=[];for(let[r,n]of Object.entries(e))Array.isArray(n)?n.forEach(e=>{t.push(encodeURIComponent(r)+"="+encodeURIComponent(e))}):t.push(encodeURIComponent(r)+"="+encodeURIComponent(n));return t.length?"&"+t.join("&"):""}function B(e){let t={};return e.replace(/^\?/,"").split("&").forEach(e=>{if(e){let[r,n]=e.split("=");t[decodeURIComponent(r)]=decodeURIComponent(n)}}),t}function j(e){let t=e.indexOf("?");if(!t)return"";let r=e.indexOf("#",t);return e.substring(t,r>0?r:void 0)}function q(e,t){let r=new $(e,t);return r.subscribe.bind(r)}class ${constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then(()=>{e(this)}).catch(e=>{this.error(e)})}next(e){this.forEachObserver(t=>{t.next(e)})}error(e){this.forEachObserver(t=>{t.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,t,r){let n;if(void 0===e&&void 0===t&&void 0===r)throw Error("Missing Observer.");void 0===(n=!function(e,t){if("object"!=typeof e||null===e)return!1;for(let r of t)if(r in e&&"function"==typeof e[r])return!0;return!1}(e,["next","error","complete"])?{next:e,error:t,complete:r}:e).next&&(n.next=z),void 0===n.error&&(n.error=z),void 0===n.complete&&(n.complete=z);let i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?n.error(this.finalError):n.complete()}catch(e){}}),this.observers.push(n),i}unsubscribeOne(e){void 0!==this.observers&&void 0!==this.observers[e]&&(delete this.observers[e],this.observerCount-=1,0===this.observerCount&&void 0!==this.onNoObservers&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then(()=>{if(void 0!==this.observers&&void 0!==this.observers[e])try{t(this.observers[e])}catch(e){"undefined"!=typeof console&&console.error&&console.error(e)}})}close(e){this.finalized||(this.finalized=!0,void 0!==e&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function z(){}/**
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
 */function H(e){return e&&e._delegate?e._delegate:e}}),s("hPtJY",function(e,t){var r,n,i,s=e.exports={};function o(){throw Error("setTimeout has not been defined")}function a(){throw Error("clearTimeout has not been defined")}function l(e){if(r===setTimeout)return setTimeout(e,0);if((r===o||!r)&&setTimeout)return r=setTimeout,setTimeout(e,0);try{return r(e,0)}catch(t){try{return r.call(null,e,0)}catch(t){return r.call(this,e,0)}}}!function(){try{r="function"==typeof setTimeout?setTimeout:o}catch(e){r=o}try{n="function"==typeof clearTimeout?clearTimeout:a}catch(e){n=a}}();var u=[],h=!1,c=-1;function f(){h&&i&&(h=!1,i.length?u=i.concat(u):c=-1,u.length&&d())}function d(){if(!h){var e=l(f);h=!0;for(var t=u.length;t;){for(i=u,u=[];++c<t;)i&&i[c].run();c=-1,t=u.length}i=null,h=!1,function(e){if(n===clearTimeout)return clearTimeout(e);if((n===a||!n)&&clearTimeout)return n=clearTimeout,clearTimeout(e);try{n(e)}catch(t){try{return n.call(null,e)}catch(t){return n.call(this,e)}}}(e)}}function p(e,t){this.fun=e,this.array=t}function g(){}s.nextTick=function(e){var t=Array(arguments.length-1);if(arguments.length>1)for(var r=1;r<arguments.length;r++)t[r-1]=arguments[r];u.push(new p(e,t)),1!==u.length||h||l(d)},p.prototype.run=function(){this.fun.apply(null,this.array)},s.title="browser",s.browser=!0,s.env={},s.argv=[],s.version="",s.versions={},s.on=g,s.addListener=g,s.once=g,s.off=g,s.removeListener=g,s.removeAllListeners=g,s.emit=g,s.prependListener=g,s.prependOnceListener=g,s.listeners=function(e){return[]},s.binding=function(e){throw Error("process.binding is not supported")},s.cwd=function(){return"/"},s.chdir=function(e){throw Error("process.chdir is not supported")},s.umask=function(){return 0}}),s("5Z2ef",function(t,r){var n,i;e(t.exports,"LogLevel",()=>n),e(t.exports,"Logger",()=>h),e(t.exports,"setLogLevel",()=>c),e(t.exports,"setUserLogHandler",()=>f);/**
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
 */let s=[];(i=n||(n={}))[i.DEBUG=0]="DEBUG",i[i.VERBOSE=1]="VERBOSE",i[i.INFO=2]="INFO",i[i.WARN=3]="WARN",i[i.ERROR=4]="ERROR",i[i.SILENT=5]="SILENT";let o={debug:n.DEBUG,verbose:n.VERBOSE,info:n.INFO,warn:n.WARN,error:n.ERROR,silent:n.SILENT},a=n.INFO,l={[n.DEBUG]:"log",[n.VERBOSE]:"log",[n.INFO]:"info",[n.WARN]:"warn",[n.ERROR]:"error"},u=(e,t,...r)=>{if(t<e.logLevel)return;let n=new Date().toISOString(),i=l[t];if(i)console[i](`[${n}]  ${e.name}:`,...r);else throw Error(`Attempted to log a message with an invalid logType (value: ${t})`)};class h{constructor(e){this.name=e,this._logLevel=a,this._logHandler=u,this._userLogHandler=null,s.push(this)}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in n))throw TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel="string"==typeof e?o[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if("function"!=typeof e)throw TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,n.DEBUG,...e),this._logHandler(this,n.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,n.VERBOSE,...e),this._logHandler(this,n.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,n.INFO,...e),this._logHandler(this,n.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,n.WARN,...e),this._logHandler(this,n.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,n.ERROR,...e),this._logHandler(this,n.ERROR,...e)}}function c(e){s.forEach(t=>{t.setLogLevel(e)})}function f(e,t){for(let r of s){let i=null;t&&t.level&&(i=o[t.level]),null===e?r.userLogHandler=null:r.userLogHandler=(t,r,...s)=>{let o=s.map(e=>{if(null==e)return null;if("string"==typeof e)return e;if("number"==typeof e||"boolean"==typeof e)return e.toString();if(e instanceof Error)return e.message;try{return JSON.stringify(e)}catch(e){return null}}).filter(e=>e).join(" ");r>=(null!=i?i:t.logLevel)&&e({level:n[r].toLowerCase(),message:o,args:s,type:t.name})}}}}),s("iItpQ",function(t,r){e(t.exports,"openDB",()=>s);var n=i("jMRra");function s(e,t,{blocked:r,upgrade:i,blocking:o,terminated:a}={}){let l=indexedDB.open(e,t),u=(0,n.w)(l);return i&&l.addEventListener("upgradeneeded",e=>{i((0,n.w)(l.result),e.oldVersion,e.newVersion,(0,n.w)(l.transaction),e)}),r&&l.addEventListener("blocked",e=>r(e.oldVersion,e.newVersion,e)),u.then(e=>{a&&e.addEventListener("close",()=>a()),o&&e.addEventListener("versionchange",e=>o(e.oldVersion,e.newVersion,e))}).catch(()=>{}),u}let o=["get","getKey","getAll","getAllKeys","count"],a=["put","add","delete","clear"],l=new Map;function u(e,t){if(!(e instanceof IDBDatabase&&!(t in e)&&"string"==typeof t))return;if(l.get(t))return l.get(t);let r=t.replace(/FromIndex$/,""),n=t!==r,i=a.includes(r);if(!(r in(n?IDBIndex:IDBObjectStore).prototype)||!(i||o.includes(r)))return;let s=async function(e,...t){let s=this.transaction(e,i?"readwrite":"readonly"),o=s.store;return n&&(o=o.index(t.shift())),(await Promise.all([o[r](...t),i&&s.done]))[0]};return l.set(t,s),s}(0,n.r)(e=>({...e,get:(t,r,n)=>u(t,r)||e.get(t,r,n),has:(t,r)=>!!u(t,r)||e.has(t,r)}))}),s("jMRra",function(t,r){let n,i;e(t.exports,"w",()=>d),e(t.exports,"r",()=>f);let s=(e,t)=>t.some(t=>e instanceof t),o=new WeakMap,a=new WeakMap,l=new WeakMap,u=new WeakMap,h=new WeakMap,c={get(e,t,r){if(e instanceof IDBTransaction){if("done"===t)return a.get(e);if("objectStoreNames"===t)return e.objectStoreNames||l.get(e);if("store"===t)return r.objectStoreNames[1]?void 0:r.objectStore(r.objectStoreNames[0])}return d(e[t])},set:(e,t,r)=>(e[t]=r,!0),has:(e,t)=>e instanceof IDBTransaction&&("done"===t||"store"===t)||t in e};function f(e){c=e(c)}function d(e){var t;if(e instanceof IDBRequest)return function(e){let t=new Promise((t,r)=>{let n=()=>{e.removeEventListener("success",i),e.removeEventListener("error",s)},i=()=>{t(d(e.result)),n()},s=()=>{r(e.error),n()};e.addEventListener("success",i),e.addEventListener("error",s)});return t.then(t=>{t instanceof IDBCursor&&o.set(t,e)}).catch(()=>{}),h.set(t,e),t}(e);if(u.has(e))return u.get(e);let r="function"==typeof(t=e)?t!==IDBDatabase.prototype.transaction||"objectStoreNames"in IDBTransaction.prototype?(i||(i=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])).includes(t)?function(...e){return t.apply(p(this),e),d(o.get(this))}:function(...e){return d(t.apply(p(this),e))}:function(e,...r){let n=t.call(p(this),e,...r);return l.set(n,e.sort?e.sort():[e]),d(n)}:(t instanceof IDBTransaction&&function(e){if(a.has(e))return;let t=new Promise((t,r)=>{let n=()=>{e.removeEventListener("complete",i),e.removeEventListener("error",s),e.removeEventListener("abort",s)},i=()=>{t(),n()},s=()=>{r(e.error||new DOMException("AbortError","AbortError")),n()};e.addEventListener("complete",i),e.addEventListener("error",s),e.addEventListener("abort",s)});a.set(e,t)}(t),s(t,n||(n=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])))?new Proxy(t,c):t;return r!==e&&(u.set(e,r),h.set(r,e)),r}let p=e=>h.get(e)}),s("ilpIi",function(t,r){e(t.exports,"addDoc",()=>i("9HrqM").addDoc),e(t.exports,"collection",()=>i("9HrqM").collection),e(t.exports,"deleteDoc",()=>i("9HrqM").deleteDoc),e(t.exports,"doc",()=>i("9HrqM").doc),e(t.exports,"getDocs",()=>i("9HrqM").getDocs),e(t.exports,"getFirestore",()=>i("9HrqM").getFirestore),e(t.exports,"query",()=>i("9HrqM").query),e(t.exports,"where",()=>i("9HrqM").where),i("9HrqM")}),s("9HrqM",function(t,r){e(t.exports,"collection",()=>i8),e(t.exports,"doc",()=>i4),e(t.exports,"getFirestore",()=>st),e(t.exports,"query",()=>sC),e(t.exports,"where",()=>sk),e(t.exports,"getDocs",()=>sF),e(t.exports,"deleteDoc",()=>sB),e(t.exports,"addDoc",()=>sj);var n,s,o,a,l=i("7xvHX"),u=i("eryG9"),h=i("5Z2ef"),c=i("gMVVg"),f=i("cozvr"),d=i("4rHck");i("hPtJY");var p=i("6ZWSX").Buffer;let g="@firebase/firestore",m="4.7.8";/**
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
 */class y{constructor(e){this.uid=e}isAuthenticated(){return null!=this.uid}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}y.UNAUTHENTICATED=new y(null),y.GOOGLE_CREDENTIALS=new y("google-credentials-uid"),y.FIRST_PARTY=new y("first-party-uid"),y.MOCK_USER=new y("mock-user");/**
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
 */let v="11.3.1",w=new h.Logger("@firebase/firestore");function _(){return w.logLevel}function E(e,...t){if(w.logLevel<=h.LogLevel.DEBUG){let r=t.map(T);w.debug(`Firestore (${v}): ${e}`,...r)}}function b(e,...t){if(w.logLevel<=h.LogLevel.ERROR){let r=t.map(T);w.error(`Firestore (${v}): ${e}`,...r)}}function I(e,...t){if(w.logLevel<=h.LogLevel.WARN){let r=t.map(T);w.warn(`Firestore (${v}): ${e}`,...r)}}function T(e){if("string"==typeof e)return e;try{/**
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
 */return JSON.stringify(e)}catch(t){return e}}/**
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
 */function S(e="Unexpected state"){let t=`FIRESTORE (${v}) INTERNAL ASSERTION FAILED: `+e;throw b(t),Error(t)}/**
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
 */let C={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class A extends c.FirebaseError{constructor(e,t){super(e,t),this.code=e,this.message=t,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class k{constructor(){this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}}/**
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
 */class x{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class R{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable(()=>t(y.UNAUTHENTICATED))}shutdown(){}}class N{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,t){this.changeListener=t,e.enqueueRetryable(()=>t(this.token.user))}shutdown(){this.changeListener=null}}class D{constructor(e){this.t=e,this.currentUser=y.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,t){void 0===this.o||S();let r=this.i,n=e=>this.i!==r?(r=this.i,t(e)):Promise.resolve(),i=new k;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new k,e.enqueueRetryable(()=>n(this.currentUser))};let s=()=>{let t=i;e.enqueueRetryable(async()=>{await t.promise,await n(this.currentUser)})},o=e=>{E("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=e,this.o&&(this.auth.addAuthTokenListener(this.o),s())};this.t.onInit(e=>o(e)),setTimeout(()=>{if(!this.auth){let e=this.t.getImmediate({optional:!0});e?o(e):(E("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new k)}},0),s()}getToken(){let e=this.i,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then(t=>this.i!==e?(E("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):t?("string"==typeof t.accessToken||S(),new x(t.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){let e=this.auth&&this.auth.getUid();return null===e||"string"==typeof e||S(),new y(e)}}class O{constructor(e,t,r){this.l=e,this.h=t,this.P=r,this.type="FirstParty",this.user=y.FIRST_PARTY,this.T=new Map}I(){return this.P?this.P():null}get headers(){this.T.set("X-Goog-AuthUser",this.l);let e=this.I();return e&&this.T.set("Authorization",e),this.h&&this.T.set("X-Goog-Iam-Authorization-Token",this.h),this.T}}class P{constructor(e,t,r){this.l=e,this.h=t,this.P=r}getToken(){return Promise.resolve(new O(this.l,this.h,this.P))}start(e,t){e.enqueueRetryable(()=>t(y.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class L{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class M{constructor(e,t){this.A=t,this.forceRefresh=!1,this.appCheck=null,this.R=null,this.V=null,(0,l._isFirebaseServerApp)(e)&&e.settings.appCheckToken&&(this.V=e.settings.appCheckToken)}start(e,t){void 0===this.o||S();let r=e=>{null!=e.error&&E("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${e.error.message}`);let r=e.token!==this.R;return this.R=e.token,E("FirebaseAppCheckTokenProvider",`Received ${r?"new":"existing"} token.`),r?t(e.token):Promise.resolve()};this.o=t=>{e.enqueueRetryable(()=>r(t))};let n=e=>{E("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=e,this.o&&this.appCheck.addTokenListener(this.o)};this.A.onInit(e=>n(e)),setTimeout(()=>{if(!this.appCheck){let e=this.A.getImmediate({optional:!0});e?n(e):E("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){if(this.V)return Promise.resolve(new L(this.V));let e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(e=>e?("string"==typeof e.token||S(),this.R=e.token,new L(e.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
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
 */class U{static newId(){let e=62*Math.floor(256/62),t="";for(;t.length<20;){let r=/**
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
 */function(e){let t="undefined"!=typeof self&&(self.crypto||self.msCrypto),r=new Uint8Array(40);if(t&&"function"==typeof t.getRandomValues)t.getRandomValues(r);else for(let e=0;e<40;e++)r[e]=Math.floor(256*Math.random());return r}(0);for(let n=0;n<r.length;++n)t.length<20&&r[n]<e&&(t+="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".charAt(r[n]%62))}return t}}function V(e,t){return e<t?-1:e>t?1:0}function F(e,t,r){return e.length===t.length&&e.every((e,n)=>r(e,t[n]))}class B{static now(){return B.fromMillis(Date.now())}static fromDate(e){return B.fromMillis(e.getTime())}static fromMillis(e){let t=Math.floor(e/1e3),r=Math.floor((e-1e3*t)*1e6);return new B(t,r)}constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0||t>=1e9)throw new A(C.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(e<-0xe7791f700||e>=0x3afff44180)throw new A(C.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?V(this.nanoseconds,e.nanoseconds):V(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){return String(this.seconds- -0xe7791f700).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
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
 */class j{static fromTimestamp(e){return new j(e)}static min(){return new j(new B(0,0))}static max(){return new j(new B(0x3afff4417f,0x3b9ac9ff))}constructor(e){this.timestamp=e}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */let q="__name__";class ${constructor(e,t,r){void 0===t?t=0:t>e.length&&S(),void 0===r?r=e.length-t:r>e.length-t&&S(),this.segments=e,this.offset=t,this.len=r}get length(){return this.len}isEqual(e){return 0===$.comparator(this,e)}child(e){let t=this.segments.slice(this.offset,this.limit());return e instanceof $?e.forEach(e=>{t.push(e)}):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=void 0===e?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return 0===this.length}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,r=this.limit();t<r;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){let r=Math.min(e.length,t.length);for(let n=0;n<r;n++){let r=$.compareSegments(e.get(n),t.get(n));if(0!==r)return r}return Math.sign(e.length-t.length)}static compareSegments(e,t){let r=$.isNumericId(e),n=$.isNumericId(t);return r&&!n?-1:!r&&n?1:r&&n?$.extractNumericId(e).compare($.extractNumericId(t)):e<t?-1:e>t?1:0}static isNumericId(e){return e.startsWith("__id")&&e.endsWith("__")}static extractNumericId(e){return(0,f.Integer).fromString(e.substring(4,e.length-2))}}class z extends ${construct(e,t,r){return new z(e,t,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){let t=[];for(let r of e){if(r.indexOf("//")>=0)throw new A(C.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);t.push(...r.split("/").filter(e=>e.length>0))}return new z(t)}static emptyPath(){return new z([])}}let H=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class K extends ${construct(e,t,r){return new K(e,t,r)}static isValidIdentifier(e){return H.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),K.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return 1===this.length&&this.get(0)===q}static keyField(){return new K([q])}static fromServerFormat(e){let t=[],r="",n=0,i=()=>{if(0===r.length)throw new A(C.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(r),r=""},s=!1;for(;n<e.length;){let t=e[n];if("\\"===t){if(n+1===e.length)throw new A(C.INVALID_ARGUMENT,"Path has trailing escape character: "+e);let t=e[n+1];if("\\"!==t&&"."!==t&&"`"!==t)throw new A(C.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=t,n+=2}else"`"===t?s=!s:"."!==t||s?r+=t:i(),n++}if(i(),s)throw new A(C.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new K(t)}static emptyPath(){return new K([])}}/**
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
 */class G{constructor(e){this.path=e}static fromPath(e){return new G(z.fromString(e))}static fromName(e){return new G(z.fromString(e).popFirst(5))}static empty(){return new G(z.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return null!==e&&0===z.comparator(this.path,e.path)}toString(){return this.path.toString()}static comparator(e,t){return z.comparator(e.path,t.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new G(new z(e.slice()))}}class W{constructor(e,t,r){this.readTime=e,this.documentKey=t,this.largestBatchId=r}static min(){return new W(j.min(),G.empty(),-1)}static max(){return new W(j.max(),G.empty(),-1)}}class Q{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
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
 */async function X(e){if(e.code!==C.FAILED_PRECONDITION||"The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab."!==e.message)throw e;E("LocalStore","Unexpectedly lost primary lease")}/**
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
 */class J{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(e=>{this.isDone=!0,this.result=e,this.nextCallback&&this.nextCallback(e)},e=>{this.isDone=!0,this.error=e,this.catchCallback&&this.catchCallback(e)})}catch(e){return this.next(void 0,e)}next(e,t){return this.callbackAttached&&S(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(t,this.error):this.wrapSuccess(e,this.result):new J((r,n)=>{this.nextCallback=t=>{this.wrapSuccess(e,t).next(r,n)},this.catchCallback=e=>{this.wrapFailure(t,e).next(r,n)}})}toPromise(){return new Promise((e,t)=>{this.next(e,t)})}wrapUserFunction(e){try{let t=e();return t instanceof J?t:J.resolve(t)}catch(e){return J.reject(e)}}wrapSuccess(e,t){return e?this.wrapUserFunction(()=>e(t)):J.resolve(t)}wrapFailure(e,t){return e?this.wrapUserFunction(()=>e(t)):J.reject(t)}static resolve(e){return new J((t,r)=>{t(e)})}static reject(e){return new J((t,r)=>{r(e)})}static waitFor(e){return new J((t,r)=>{let n=0,i=0,s=!1;e.forEach(e=>{++n,e.next(()=>{++i,s&&i===n&&t()},e=>r(e))}),s=!0,i===n&&t()})}static or(e){let t=J.resolve(!1);for(let r of e)t=t.next(e=>e?J.resolve(e):r());return t}static forEach(e,t){let r=[];return e.forEach((e,n)=>{r.push(t.call(this,e,n))}),this.waitFor(r)}static mapArray(e,t){return new J((r,n)=>{let i=e.length,s=Array(i),o=0;for(let a=0;a<i;a++){let l=a;t(e[l]).next(e=>{s[l]=e,++o===i&&r(s)},e=>n(e))}})}static doWhile(e,t){return new J((r,n)=>{let i=()=>{!0===e()?t().next(()=>{i()},n):r()};i()})}}function Y(e){return"IndexedDbTransactionError"===e.name}/**
 * @license
 * Copyright 2018 Google LLC
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
 */class Z{constructor(e,t){this.previousValue=e,t&&(t.sequenceNumberHandler=e=>this.oe(e),this._e=e=>t.writeSequenceNumber(e))}oe(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){let e=++this.previousValue;return this._e&&this._e(e),e}}function ee(e){return 0===e&&1/e==-1/0}/**
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
 */function et(e){let t=0;for(let r in e)Object.prototype.hasOwnProperty.call(e,r)&&t++;return t}function er(e,t){for(let r in e)Object.prototype.hasOwnProperty.call(e,r)&&t(r,e[r])}function en(e){for(let t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}Z.ae=-1;/**
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
 */class ei{constructor(e,t){this.comparator=e,this.root=t||eo.EMPTY}insert(e,t){return new ei(this.comparator,this.root.insert(e,t,this.comparator).copy(null,null,eo.BLACK,null,null))}remove(e){return new ei(this.comparator,this.root.remove(e,this.comparator).copy(null,null,eo.BLACK,null,null))}get(e){let t=this.root;for(;!t.isEmpty();){let r=this.comparator(e,t.key);if(0===r)return t.value;r<0?t=t.left:r>0&&(t=t.right)}return null}indexOf(e){let t=0,r=this.root;for(;!r.isEmpty();){let n=this.comparator(e,r.key);if(0===n)return t+r.left.size;n<0?r=r.left:(t+=r.left.size+1,r=r.right)}return -1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((t,r)=>(e(t,r),!1))}toString(){let e=[];return this.inorderTraversal((t,r)=>(e.push(`${t}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new es(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new es(this.root,e,this.comparator,!1)}getReverseIterator(){return new es(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new es(this.root,e,this.comparator,!0)}}class es{constructor(e,t,r,n){this.isReverse=n,this.nodeStack=[];let i=1;for(;!e.isEmpty();)if(i=t?r(e.key,t):1,t&&n&&(i*=-1),i<0)e=this.isReverse?e.left:e.right;else{if(0===i){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop(),t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}hasNext(){return this.nodeStack.length>0}peek(){if(0===this.nodeStack.length)return null;let e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class eo{constructor(e,t,r,n,i){this.key=e,this.value=t,this.color=null!=r?r:eo.RED,this.left=null!=n?n:eo.EMPTY,this.right=null!=i?i:eo.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,t,r,n,i){return new eo(null!=e?e:this.key,null!=t?t:this.value,null!=r?r:this.color,null!=n?n:this.left,null!=i?i:this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,r){let n=this,i=r(e,n.key);return(n=i<0?n.copy(null,null,null,n.left.insert(e,t,r),null):0===i?n.copy(null,t,null,null,null):n.copy(null,null,null,null,n.right.insert(e,t,r))).fixUp()}removeMin(){if(this.left.isEmpty())return eo.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),(e=e.copy(null,null,null,e.left.removeMin(),null)).fixUp()}remove(e,t){let r,n=this;if(0>t(e,n.key))n.left.isEmpty()||n.left.isRed()||n.left.left.isRed()||(n=n.moveRedLeft()),n=n.copy(null,null,null,n.left.remove(e,t),null);else{if(n.left.isRed()&&(n=n.rotateRight()),n.right.isEmpty()||n.right.isRed()||n.right.left.isRed()||(n=n.moveRedRight()),0===t(e,n.key)){if(n.right.isEmpty())return eo.EMPTY;r=n.right.min(),n=n.copy(r.key,r.value,null,null,n.right.removeMin())}n=n.copy(null,null,null,null,n.right.remove(e,t))}return n.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=(e=(e=e.copy(null,null,null,null,e.right.rotateRight())).rotateLeft()).colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=(e=e.rotateRight()).colorFlip()),e}rotateLeft(){let e=this.copy(null,null,eo.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){let e=this.copy(null,null,eo.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){let e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth(){return Math.pow(2,this.check())<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw S();let e=this.left.check();if(e!==this.right.check())throw S();return e+(this.isRed()?0:1)}}eo.EMPTY=null,eo.RED=!0,eo.BLACK=!1,eo.EMPTY=new class{constructor(){this.size=0}get key(){throw S()}get value(){throw S()}get color(){throw S()}get left(){throw S()}get right(){throw S()}copy(e,t,r,n,i){return this}insert(e,t,r){return new eo(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class ea{constructor(e){this.comparator=e,this.data=new ei(this.comparator)}has(e){return null!==this.data.get(e)}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((t,r)=>(e(t),!1))}forEachInRange(e,t){let r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){let n=r.getNext();if(this.comparator(n.key,e[1])>=0)return;t(n.key)}}forEachWhile(e,t){let r;for(r=void 0!==t?this.data.getIteratorFrom(t):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){let t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}getIterator(){return new el(this.data.getIterator())}getIteratorFrom(e){return new el(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let t=this;return t.size<e.size&&(t=e,e=this),e.forEach(e=>{t=t.add(e)}),t}isEqual(e){if(!(e instanceof ea)||this.size!==e.size)return!1;let t=this.data.getIterator(),r=e.data.getIterator();for(;t.hasNext();){let e=t.getNext().key,n=r.getNext().key;if(0!==this.comparator(e,n))return!1}return!0}toArray(){let e=[];return this.forEach(t=>{e.push(t)}),e}toString(){let e=[];return this.forEach(t=>e.push(t)),"SortedSet("+e.toString()+")"}copy(e){let t=new ea(this.comparator);return t.data=e,t}}class el{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
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
 */class eu{constructor(e){this.fields=e,e.sort(K.comparator)}static empty(){return new eu([])}unionWith(e){let t=new ea(K.comparator);for(let e of this.fields)t=t.add(e);for(let r of e)t=t.add(r);return new eu(t.toArray())}covers(e){for(let t of this.fields)if(t.isPrefixOf(e))return!0;return!1}isEqual(e){return F(this.fields,e.fields,(e,t)=>e.isEqual(t))}}/**
 * @license
 * Copyright 2023 Google LLC
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
 */class eh extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
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
 */class ec{constructor(e){this.binaryString=e}static fromBase64String(e){return new ec(function(e){try{return atob(e)}catch(e){throw"undefined"!=typeof DOMException&&e instanceof DOMException?new eh("Invalid base64 string: "+e):e}}(e))}static fromUint8Array(e){return new ec(function(e){let t="";for(let r=0;r<e.length;++r)t+=String.fromCharCode(e[r]);return t}(e))}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return btoa(this.binaryString)}toUint8Array(){return function(e){let t=new Uint8Array(e.length);for(let r=0;r<e.length;r++)t[r]=e.charCodeAt(r);return t}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return V(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}ec.EMPTY_BYTE_STRING=new ec("");let ef=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function ed(e){if(e||S(),"string"==typeof e){let t=0,r=ef.exec(e);if(r||S(),r[1]){let e=r[1];t=Number(e=(e+"000000000").substr(0,9))}return{seconds:Math.floor(new Date(e).getTime()/1e3),nanos:t}}return{seconds:ep(e.seconds),nanos:ep(e.nanos)}}function ep(e){return"number"==typeof e?e:"string"==typeof e?Number(e):0}function eg(e){return"string"==typeof e?ec.fromBase64String(e):ec.fromUint8Array(e)}/**
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
 */let em="server_timestamp",ey="__type__",ev="__previous_value__",ew="__local_write_time__";function e_(e){var t,r;return(null===(r=((null===(t=null==e?void 0:e.mapValue)||void 0===t?void 0:t.fields)||{})[ey])||void 0===r?void 0:r.stringValue)===em}function eE(e){let t=e.mapValue.fields[ev];return e_(t)?eE(t):t}function eb(e){let t=ed(e.mapValue.fields[ew].timestampValue);return new B(t.seconds,t.nanos)}/**
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
 */class eI{constructor(e,t,r,n,i,s,o,a,l){this.databaseId=e,this.appId=t,this.persistenceKey=r,this.host=n,this.ssl=i,this.forceLongPolling=s,this.autoDetectLongPolling=o,this.longPollingOptions=a,this.useFetchStreams=l}}let eT="(default)";class eS{constructor(e,t){this.projectId=e,this.database=t||eT}static empty(){return new eS("","")}get isDefaultDatabase(){return this.database===eT}isEqual(e){return e instanceof eS&&e.projectId===this.projectId&&e.database===this.database}}/**
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
 */let eC="__type__",eA="__max__",ek={mapValue:{fields:{__type__:{stringValue:eA}}}},ex="__vector__",eR="value";function eN(e){return"nullValue"in e?0:"booleanValue"in e?1:"integerValue"in e||"doubleValue"in e?2:"timestampValue"in e?3:"stringValue"in e?5:"bytesValue"in e?6:"referenceValue"in e?7:"geoPointValue"in e?8:"arrayValue"in e?9:"mapValue"in e?e_(e)?4:eK(e)?0x1fffffffffffff:ez(e)?10:11:S()}function eD(e,t){if(e===t)return!0;let r=eN(e);if(r!==eN(t))return!1;switch(r){case 0:case 0x1fffffffffffff:return!0;case 1:return e.booleanValue===t.booleanValue;case 4:return eb(e).isEqual(eb(t));case 3:return function(e,t){if("string"==typeof e.timestampValue&&"string"==typeof t.timestampValue&&e.timestampValue.length===t.timestampValue.length)return e.timestampValue===t.timestampValue;let r=ed(e.timestampValue),n=ed(t.timestampValue);return r.seconds===n.seconds&&r.nanos===n.nanos}(e,t);case 5:return e.stringValue===t.stringValue;case 6:return eg(e.bytesValue).isEqual(eg(t.bytesValue));case 7:return e.referenceValue===t.referenceValue;case 8:return ep(e.geoPointValue.latitude)===ep(t.geoPointValue.latitude)&&ep(e.geoPointValue.longitude)===ep(t.geoPointValue.longitude);case 2:return function(e,t){if("integerValue"in e&&"integerValue"in t)return ep(e.integerValue)===ep(t.integerValue);if("doubleValue"in e&&"doubleValue"in t){let r=ep(e.doubleValue),n=ep(t.doubleValue);return r===n?ee(r)===ee(n):isNaN(r)&&isNaN(n)}return!1}(e,t);case 9:return F(e.arrayValue.values||[],t.arrayValue.values||[],eD);case 10:case 11:return function(e,t){let r=e.mapValue.fields||{},n=t.mapValue.fields||{};if(et(r)!==et(n))return!1;for(let e in r)if(r.hasOwnProperty(e)&&(void 0===n[e]||!eD(r[e],n[e])))return!1;return!0}(e,t);default:return S()}}function eO(e,t){return void 0!==(e.values||[]).find(e=>eD(e,t))}function eP(e,t){if(e===t)return 0;let r=eN(e),n=eN(t);if(r!==n)return V(r,n);switch(r){case 0:case 0x1fffffffffffff:return 0;case 1:return V(e.booleanValue,t.booleanValue);case 2:return function(e,t){let r=ep(e.integerValue||e.doubleValue),n=ep(t.integerValue||t.doubleValue);return r<n?-1:r>n?1:r===n?0:isNaN(r)?isNaN(n)?0:-1:1}(e,t);case 3:return eL(e.timestampValue,t.timestampValue);case 4:return eL(eb(e),eb(t));case 5:return V(e.stringValue,t.stringValue);case 6:return function(e,t){let r=eg(e),n=eg(t);return r.compareTo(n)}(e.bytesValue,t.bytesValue);case 7:return function(e,t){let r=e.split("/"),n=t.split("/");for(let e=0;e<r.length&&e<n.length;e++){let t=V(r[e],n[e]);if(0!==t)return t}return V(r.length,n.length)}(e.referenceValue,t.referenceValue);case 8:return function(e,t){let r=V(ep(e.latitude),ep(t.latitude));return 0!==r?r:V(ep(e.longitude),ep(t.longitude))}(e.geoPointValue,t.geoPointValue);case 9:return eM(e.arrayValue,t.arrayValue);case 10:return function(e,t){var r,n,i,s;let o=e.fields||{},a=t.fields||{},l=null===(r=o[eR])||void 0===r?void 0:r.arrayValue,u=null===(n=a[eR])||void 0===n?void 0:n.arrayValue,h=V((null===(i=null==l?void 0:l.values)||void 0===i?void 0:i.length)||0,(null===(s=null==u?void 0:u.values)||void 0===s?void 0:s.length)||0);return 0!==h?h:eM(l,u)}(e.mapValue,t.mapValue);case 11:return function(e,t){if(e===ek.mapValue&&t===ek.mapValue)return 0;if(e===ek.mapValue)return 1;if(t===ek.mapValue)return -1;let r=e.fields||{},n=Object.keys(r),i=t.fields||{},s=Object.keys(i);n.sort(),s.sort();for(let e=0;e<n.length&&e<s.length;++e){let t=V(n[e],s[e]);if(0!==t)return t;let o=eP(r[n[e]],i[s[e]]);if(0!==o)return o}return V(n.length,s.length)}(e.mapValue,t.mapValue);default:throw S()}}function eL(e,t){if("string"==typeof e&&"string"==typeof t&&e.length===t.length)return V(e,t);let r=ed(e),n=ed(t),i=V(r.seconds,n.seconds);return 0!==i?i:V(r.nanos,n.nanos)}function eM(e,t){let r=e.values||[],n=t.values||[];for(let e=0;e<r.length&&e<n.length;++e){let t=eP(r[e],n[e]);if(t)return t}return V(r.length,n.length)}function eU(e){var t,r;return"nullValue"in e?"null":"booleanValue"in e?""+e.booleanValue:"integerValue"in e?""+e.integerValue:"doubleValue"in e?""+e.doubleValue:"timestampValue"in e?function(e){let t=ed(e);return`time(${t.seconds},${t.nanos})`}(e.timestampValue):"stringValue"in e?e.stringValue:"bytesValue"in e?eg(e.bytesValue).toBase64():"referenceValue"in e?(t=e.referenceValue,G.fromName(t).toString()):"geoPointValue"in e?(r=e.geoPointValue,`geo(${r.latitude},${r.longitude})`):"arrayValue"in e?function(e){let t="[",r=!0;for(let n of e.values||[])r?r=!1:t+=",",t+=eU(n);return t+"]"}(e.arrayValue):"mapValue"in e?function(e){let t=Object.keys(e.fields||{}).sort(),r="{",n=!0;for(let i of t)n?n=!1:r+=",",r+=`${i}:${eU(e.fields[i])}`;return r+"}"}(e.mapValue):S()}function eV(e,t){return{referenceValue:`projects/${e.projectId}/databases/${e.database}/documents/${t.path.canonicalString()}`}}function eF(e){return!!e&&"integerValue"in e}function eB(e){return!!e&&"arrayValue"in e}function ej(e){return!!e&&"nullValue"in e}function eq(e){return!!e&&"doubleValue"in e&&isNaN(Number(e.doubleValue))}function e$(e){return!!e&&"mapValue"in e}function ez(e){var t,r;return(null===(r=((null===(t=null==e?void 0:e.mapValue)||void 0===t?void 0:t.fields)||{})[eC])||void 0===r?void 0:r.stringValue)===ex}function eH(e){if(e.geoPointValue)return{geoPointValue:Object.assign({},e.geoPointValue)};if(e.timestampValue&&"object"==typeof e.timestampValue)return{timestampValue:Object.assign({},e.timestampValue)};if(e.mapValue){let t={mapValue:{fields:{}}};return er(e.mapValue.fields,(e,r)=>t.mapValue.fields[e]=eH(r)),t}if(e.arrayValue){let t={arrayValue:{values:[]}};for(let r=0;r<(e.arrayValue.values||[]).length;++r)t.arrayValue.values[r]=eH(e.arrayValue.values[r]);return t}return Object.assign({},e)}function eK(e){return(((e.mapValue||{}).fields||{}).__type__||{}).stringValue===eA}/**
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
 */class eG{constructor(e){this.value=e}static empty(){return new eG({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let r=0;r<e.length-1;++r)if(!e$(t=(t.mapValue.fields||{})[e.get(r)]))return null;return(t=(t.mapValue.fields||{})[e.lastSegment()])||null}}set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=eH(t)}setAll(e){let t=K.emptyPath(),r={},n=[];e.forEach((e,i)=>{if(!t.isImmediateParentOf(i)){let e=this.getFieldsMap(t);this.applyChanges(e,r,n),r={},n=[],t=i.popLast()}e?r[i.lastSegment()]=eH(e):n.push(i.lastSegment())});let i=this.getFieldsMap(t);this.applyChanges(i,r,n)}delete(e){let t=this.field(e.popLast());e$(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return eD(this.value,e.value)}getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let r=0;r<e.length;++r){let n=t.mapValue.fields[e.get(r)];e$(n)&&n.mapValue.fields||(n={mapValue:{fields:{}}},t.mapValue.fields[e.get(r)]=n),t=n}return t.mapValue.fields}applyChanges(e,t,r){for(let n of(er(t,(t,r)=>e[t]=r),r))delete e[n]}clone(){return new eG(eH(this.value))}}/**
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
 */class eW{constructor(e,t,r,n,i,s,o){this.key=e,this.documentType=t,this.version=r,this.readTime=n,this.createTime=i,this.data=s,this.documentState=o}static newInvalidDocument(e){return new eW(e,0,j.min(),j.min(),j.min(),eG.empty(),0)}static newFoundDocument(e,t,r,n){return new eW(e,1,t,j.min(),r,n,0)}static newNoDocument(e,t){return new eW(e,2,t,j.min(),j.min(),eG.empty(),0)}static newUnknownDocument(e,t){return new eW(e,3,t,j.min(),j.min(),eG.empty(),2)}convertToFoundDocument(e,t){return this.createTime.isEqual(j.min())&&(2===this.documentType||0===this.documentType)&&(this.createTime=e),this.version=e,this.documentType=1,this.data=t,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=eG.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=eG.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=j.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return 1===this.documentState}get hasCommittedMutations(){return 2===this.documentState}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return 0!==this.documentType}isFoundDocument(){return 1===this.documentType}isNoDocument(){return 2===this.documentType}isUnknownDocument(){return 3===this.documentType}isEqual(e){return e instanceof eW&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new eW(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class eQ{constructor(e,t){this.position=e,this.inclusive=t}}function eX(e,t,r){let n=0;for(let i=0;i<e.position.length;i++){let s=t[i],o=e.position[i];if(n=s.field.isKeyField()?G.comparator(G.fromName(o.referenceValue),r.key):eP(o,r.data.field(s.field)),"desc"===s.dir&&(n*=-1),0!==n)break}return n}function eJ(e,t){if(null===e)return null===t;if(null===t||e.inclusive!==t.inclusive||e.position.length!==t.position.length)return!1;for(let r=0;r<e.position.length;r++)if(!eD(e.position[r],t.position[r]))return!1;return!0}/**
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
 */class eY{constructor(e,t="asc"){this.field=e,this.dir=t}}/**
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
 */class eZ{}class e0 extends eZ{constructor(e,t,r){super(),this.field=e,this.op=t,this.value=r}static create(e,t,r){return e.isKeyField()?"in"===t||"not-in"===t?this.createKeyFieldInFilter(e,t,r):new e3(e,t,r):"array-contains"===t?new e9(e,r):"in"===t?new e7(e,r):"not-in"===t?new te(e,r):"array-contains-any"===t?new tt(e,r):new e0(e,t,r)}static createKeyFieldInFilter(e,t,r){return"in"===t?new e5(e,r):new e8(e,r)}matches(e){let t=e.data.field(this.field);return"!="===this.op?null!==t&&this.matchesComparison(eP(t,this.value)):null!==t&&eN(this.value)===eN(t)&&this.matchesComparison(eP(t,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return 0===e;case"!=":return 0!==e;case">":return e>0;case">=":return e>=0;default:return S()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class e1 extends eZ{constructor(e,t){super(),this.filters=e,this.op=t,this.ce=null}static create(e,t){return new e1(e,t)}matches(e){return e2(this)?void 0===this.filters.find(t=>!t.matches(e)):void 0!==this.filters.find(t=>t.matches(e))}getFlattenedFilters(){return null!==this.ce||(this.ce=this.filters.reduce((e,t)=>e.concat(t.getFlattenedFilters()),[])),this.ce}getFilters(){return Object.assign([],this.filters)}}function e2(e){return"and"===e.op}function e6(e){for(let t of e.filters)if(t instanceof e1)return!1;return!0}class e3 extends e0{constructor(e,t,r){super(e,t,r),this.key=G.fromName(r.referenceValue)}matches(e){let t=G.comparator(e.key,this.key);return this.matchesComparison(t)}}class e5 extends e0{constructor(e,t){super(e,"in",t),this.keys=e4("in",t)}matches(e){return this.keys.some(t=>t.isEqual(e.key))}}class e8 extends e0{constructor(e,t){super(e,"not-in",t),this.keys=e4("not-in",t)}matches(e){return!this.keys.some(t=>t.isEqual(e.key))}}function e4(e,t){var r;return((null===(r=t.arrayValue)||void 0===r?void 0:r.values)||[]).map(e=>G.fromName(e.referenceValue))}class e9 extends e0{constructor(e,t){super(e,"array-contains",t)}matches(e){let t=e.data.field(this.field);return eB(t)&&eO(t.arrayValue,this.value)}}class e7 extends e0{constructor(e,t){super(e,"in",t)}matches(e){let t=e.data.field(this.field);return null!==t&&eO(this.value.arrayValue,t)}}class te extends e0{constructor(e,t){super(e,"not-in",t)}matches(e){if(eO(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;let t=e.data.field(this.field);return null!==t&&!eO(this.value.arrayValue,t)}}class tt extends e0{constructor(e,t){super(e,"array-contains-any",t)}matches(e){let t=e.data.field(this.field);return!(!eB(t)||!t.arrayValue.values)&&t.arrayValue.values.some(e=>eO(this.value.arrayValue,e))}}/**
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
 */class tr{constructor(e,t=null,r=[],n=[],i=null,s=null,o=null){this.path=e,this.collectionGroup=t,this.orderBy=r,this.filters=n,this.limit=i,this.startAt=s,this.endAt=o,this.le=null}}function tn(e,t=null,r=[],n=[],i=null,s=null,o=null){return new tr(e,t,r,n,i,s,o)}function ti(e){if(null===e.le){let t=e.path.canonicalString();null!==e.collectionGroup&&(t+="|cg:"+e.collectionGroup),t+="|f:",t+=e.filters.map(e=>(function e(t){if(t instanceof e0)return t.field.canonicalString()+t.op.toString()+eU(t.value);if(e6(t)&&e2(t))return t.filters.map(t=>e(t)).join(",");{let r=t.filters.map(t=>e(t)).join(",");return`${t.op}(${r})`}})(e)).join(","),t+="|ob:",t+=e.orderBy.map(e=>e.field.canonicalString()+e.dir).join(","),null==e.limit||(t+="|l:",t+=e.limit),e.startAt&&(t+="|lb:",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map(e=>eU(e)).join(",")),e.endAt&&(t+="|ub:",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map(e=>eU(e)).join(",")),e.le=t}return e.le}function ts(e,t){if(e.limit!==t.limit||e.orderBy.length!==t.orderBy.length)return!1;for(let i=0;i<e.orderBy.length;i++){var r,n;if(r=e.orderBy[i],n=t.orderBy[i],!(r.dir===n.dir&&r.field.isEqual(n.field)))return!1}if(e.filters.length!==t.filters.length)return!1;for(let r=0;r<e.filters.length;r++)if(!function e(t,r){return t instanceof e0?r instanceof e0&&t.op===r.op&&t.field.isEqual(r.field)&&eD(t.value,r.value):t instanceof e1?r instanceof e1&&t.op===r.op&&t.filters.length===r.filters.length&&t.filters.reduce((t,n,i)=>t&&e(n,r.filters[i]),!0):void S()}(e.filters[r],t.filters[r]))return!1;return e.collectionGroup===t.collectionGroup&&!!e.path.isEqual(t.path)&&!!eJ(e.startAt,t.startAt)&&eJ(e.endAt,t.endAt)}function to(e){return G.isDocumentKey(e.path)&&null===e.collectionGroup&&0===e.filters.length}/**
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
 */class ta{constructor(e,t=null,r=[],n=[],i=null,s="F",o=null,a=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=r,this.filters=n,this.limit=i,this.limitType=s,this.startAt=o,this.endAt=a,this.he=null,this.Pe=null,this.Te=null,this.startAt,this.endAt}}function tl(e){return 0===e.filters.length&&null===e.limit&&null==e.startAt&&null==e.endAt&&(0===e.explicitOrderBy.length||1===e.explicitOrderBy.length&&e.explicitOrderBy[0].field.isKeyField())}function tu(e){return null!==e.collectionGroup}function th(e){if(null===e.he){let t;e.he=[];let r=new Set;for(let t of e.explicitOrderBy)e.he.push(t),r.add(t.field.canonicalString());let n=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(t=new ea(K.comparator),e.filters.forEach(e=>{e.getFlattenedFilters().forEach(e=>{e.isInequality()&&(t=t.add(e.field))})}),t).forEach(t=>{r.has(t.canonicalString())||t.isKeyField()||e.he.push(new eY(t,n))}),r.has(K.keyField().canonicalString())||e.he.push(new eY(K.keyField(),n))}return e.he}function tc(e){return e.Pe||(e.Pe=function(e,t){if("F"===e.limitType)return tn(e.path,e.collectionGroup,t,e.filters,e.limit,e.startAt,e.endAt);{t=t.map(e=>{let t="desc"===e.dir?"asc":"desc";return new eY(e.field,t)});let r=e.endAt?new eQ(e.endAt.position,e.endAt.inclusive):null,n=e.startAt?new eQ(e.startAt.position,e.startAt.inclusive):null;return tn(e.path,e.collectionGroup,t,e.filters,e.limit,r,n)}}(e,th(e))),e.Pe}function tf(e,t){let r=e.filters.concat([t]);return new ta(e.path,e.collectionGroup,e.explicitOrderBy.slice(),r,e.limit,e.limitType,e.startAt,e.endAt)}function td(e,t,r){return new ta(e.path,e.collectionGroup,e.explicitOrderBy.slice(),e.filters.slice(),t,r,e.startAt,e.endAt)}function tp(e,t){return ts(tc(e),tc(t))&&e.limitType===t.limitType}function tg(e){return`${ti(tc(e))}|lt:${e.limitType}`}function tm(e){var t;let r;return`Query(target=${r=(t=tc(e)).path.canonicalString(),null!==t.collectionGroup&&(r+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(r+=`, filters: [${t.filters.map(e=>(function e(t){return t instanceof e0?`${t.field.canonicalString()} ${t.op} ${eU(t.value)}`:t instanceof e1?t.op.toString()+" {"+t.getFilters().map(e).join(" ,")+"}":"Filter"})(e)).join(", ")}]`),null==t.limit||(r+=", limit: "+t.limit),t.orderBy.length>0&&(r+=`, orderBy: [${t.orderBy.map(e=>`${e.field.canonicalString()} (${e.dir})`).join(", ")}]`),t.startAt&&(r+=", startAt: ",r+=t.startAt.inclusive?"b:":"a:",r+=t.startAt.position.map(e=>eU(e)).join(",")),t.endAt&&(r+=", endAt: ",r+=t.endAt.inclusive?"a:":"b:",r+=t.endAt.position.map(e=>eU(e)).join(",")),`Target(${r})`}; limitType=${e.limitType})`}function ty(e,t){return t.isFoundDocument()&&function(e,t){let r=t.key.path;return null!==e.collectionGroup?t.key.hasCollectionId(e.collectionGroup)&&e.path.isPrefixOf(r):G.isDocumentKey(e.path)?e.path.isEqual(r):e.path.isImmediateParentOf(r)}(e,t)&&function(e,t){for(let r of th(e))if(!r.field.isKeyField()&&null===t.data.field(r.field))return!1;return!0}(e,t)&&function(e,t){for(let r of e.filters)if(!r.matches(t))return!1;return!0}(e,t)&&(!e.startAt||!!function(e,t,r){let n=eX(e,t,r);return e.inclusive?n<=0:n<0}(e.startAt,th(e),t))&&(!e.endAt||!!function(e,t,r){let n=eX(e,t,r);return e.inclusive?n>=0:n>0}(e.endAt,th(e),t))}function tv(e){return(t,r)=>{let n=!1;for(let i of th(e)){let e=function(e,t,r){let n=e.field.isKeyField()?G.comparator(t.key,r.key):function(e,t,r){let n=t.data.field(e),i=r.data.field(e);return null!==n&&null!==i?eP(n,i):S()}(e.field,t,r);switch(e.dir){case"asc":return n;case"desc":return -1*n;default:return S()}}(i,t,r);if(0!==e)return e;n=n||i.field.isKeyField()}return 0}}/**
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
 */class tw{constructor(e,t){this.mapKeyFn=e,this.equalsFn=t,this.inner={},this.innerSize=0}get(e){let t=this.mapKeyFn(e),r=this.inner[t];if(void 0!==r){for(let[t,n]of r)if(this.equalsFn(t,e))return n}}has(e){return void 0!==this.get(e)}set(e,t){let r=this.mapKeyFn(e),n=this.inner[r];if(void 0===n)return this.inner[r]=[[e,t]],void this.innerSize++;for(let r=0;r<n.length;r++)if(this.equalsFn(n[r][0],e))return void(n[r]=[e,t]);n.push([e,t]),this.innerSize++}delete(e){let t=this.mapKeyFn(e),r=this.inner[t];if(void 0===r)return!1;for(let n=0;n<r.length;n++)if(this.equalsFn(r[n][0],e))return 1===r.length?delete this.inner[t]:r.splice(n,1),this.innerSize--,!0;return!1}forEach(e){er(this.inner,(t,r)=>{for(let[t,n]of r)e(t,n)})}isEmpty(){return en(this.inner)}size(){return this.innerSize}}/**
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
 */let t_=new ei(G.comparator),tE=new ei(G.comparator);function tb(...e){let t=tE;for(let r of e)t=t.insert(r.key,r);return t}function tI(e){let t=tE;return e.forEach((e,r)=>t=t.insert(e,r.overlayedDocument)),t}function tT(){return new tw(e=>e.toString(),(e,t)=>e.isEqual(t))}let tS=new ei(G.comparator),tC=new ea(G.comparator);function tA(...e){let t=tC;for(let r of e)t=t.add(r);return t}let tk=new ea(V);/**
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
 */function tx(e,t){if(e.useProto3Json){if(isNaN(t))return{doubleValue:"NaN"};if(t===1/0)return{doubleValue:"Infinity"};if(t===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:ee(t)?"-0":t}}function tR(e){return{integerValue:""+e}}/**
 * @license
 * Copyright 2018 Google LLC
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
 */class tN{constructor(){this._=void 0}}function tD(e,t){return e instanceof tV?eF(t)||t&&"doubleValue"in t?t:{integerValue:0}:null}class tO extends tN{}class tP extends tN{constructor(e){super(),this.elements=e}}function tL(e,t){let r=tB(t);for(let t of e.elements)r.some(e=>eD(e,t))||r.push(t);return{arrayValue:{values:r}}}class tM extends tN{constructor(e){super(),this.elements=e}}function tU(e,t){let r=tB(t);for(let t of e.elements)r=r.filter(e=>!eD(e,t));return{arrayValue:{values:r}}}class tV extends tN{constructor(e,t){super(),this.serializer=e,this.Ie=t}}function tF(e){return ep(e.integerValue||e.doubleValue)}function tB(e){return eB(e)&&e.arrayValue.values?e.arrayValue.values.slice():[]}class tj{constructor(e,t){this.version=e,this.transformResults=t}}class tq{constructor(e,t){this.updateTime=e,this.exists=t}static none(){return new tq}static exists(e){return new tq(void 0,e)}static updateTime(e){return new tq(e)}get isNone(){return void 0===this.updateTime&&void 0===this.exists}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function t$(e,t){return void 0!==e.updateTime?t.isFoundDocument()&&t.version.isEqual(e.updateTime):void 0===e.exists||e.exists===t.isFoundDocument()}class tz{}function tH(e,t){if(!e.hasLocalMutations||t&&0===t.fields.length)return null;if(null===t)return e.isNoDocument()?new tZ(e.key,tq.none()):new tW(e.key,e.data,tq.none());{let r=e.data,n=eG.empty(),i=new ea(K.comparator);for(let e of t.fields)if(!i.has(e)){let t=r.field(e);null===t&&e.length>1&&(e=e.popLast(),t=r.field(e)),null===t?n.delete(e):n.set(e,t),i=i.add(e)}return new tQ(e.key,n,new eu(i.toArray()),tq.none())}}function tK(e,t,r,n){return e instanceof tW?function(e,t,r,n){if(!t$(e.precondition,t))return r;let i=e.value.clone(),s=tY(e.fieldTransforms,n,t);return i.setAll(s),t.convertToFoundDocument(t.version,i).setHasLocalMutations(),null}(e,t,r,n):e instanceof tQ?function(e,t,r,n){if(!t$(e.precondition,t))return r;let i=tY(e.fieldTransforms,n,t),s=t.data;return(s.setAll(tX(e)),s.setAll(i),t.convertToFoundDocument(t.version,s).setHasLocalMutations(),null===r)?null:r.unionWith(e.fieldMask.fields).unionWith(e.fieldTransforms.map(e=>e.field))}(e,t,r,n):t$(e.precondition,t)?(t.convertToNoDocument(t.version).setHasLocalMutations(),null):r}function tG(e,t){var r,n;return e.type===t.type&&!!e.key.isEqual(t.key)&&!!e.precondition.isEqual(t.precondition)&&(r=e.fieldTransforms,n=t.fieldTransforms,!!(void 0===r&&void 0===n||!(!r||!n)&&F(r,n,(e,t)=>{var r,n;return e.field.isEqual(t.field)&&(r=e.transform,n=t.transform,r instanceof tP&&n instanceof tP||r instanceof tM&&n instanceof tM?F(r.elements,n.elements,eD):r instanceof tV&&n instanceof tV?eD(r.Ie,n.Ie):r instanceof tO&&n instanceof tO)})))&&(0===e.type?e.value.isEqual(t.value):1!==e.type||e.data.isEqual(t.data)&&e.fieldMask.isEqual(t.fieldMask))}class tW extends tz{constructor(e,t,r,n=[]){super(),this.key=e,this.value=t,this.precondition=r,this.fieldTransforms=n,this.type=0}getFieldMask(){return null}}class tQ extends tz{constructor(e,t,r,n,i=[]){super(),this.key=e,this.data=t,this.fieldMask=r,this.precondition=n,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}function tX(e){let t=new Map;return e.fieldMask.fields.forEach(r=>{if(!r.isEmpty()){let n=e.data.field(r);t.set(r,n)}}),t}function tJ(e,t,r){var n;let i=new Map;e.length===r.length||S();for(let s=0;s<r.length;s++){let o=e[s],a=o.transform,l=t.data.field(o.field);i.set(o.field,(n=r[s],a instanceof tP?tL(a,l):a instanceof tM?tU(a,l):n))}return i}function tY(e,t,r){let n=new Map;for(let i of e){let e=i.transform,s=r.data.field(i.field);n.set(i.field,e instanceof tO?function(e,t){let r={fields:{[ey]:{stringValue:em},[ew]:{timestampValue:{seconds:e.seconds,nanos:e.nanoseconds}}}};return t&&e_(t)&&(t=eE(t)),t&&(r.fields[ev]=t),{mapValue:r}}(t,s):e instanceof tP?tL(e,s):e instanceof tM?tU(e,s):function(e,t){let r=tD(e,t),n=tF(r)+tF(e.Ie);return eF(r)&&eF(e.Ie)?tR(n):tx(e.serializer,n)}(e,s))}return n}class tZ extends tz{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class t0 extends tz{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
 */class t1{constructor(e,t,r,n){this.batchId=e,this.localWriteTime=t,this.baseMutations=r,this.mutations=n}applyToRemoteDocument(e,t){let r=t.mutationResults;for(let t=0;t<this.mutations.length;t++){let i=this.mutations[t];if(i.key.isEqual(e.key)){var n;n=r[t],i instanceof tW?function(e,t,r){let n=e.value.clone(),i=tJ(e.fieldTransforms,t,r.transformResults);n.setAll(i),t.convertToFoundDocument(r.version,n).setHasCommittedMutations()}(i,e,n):i instanceof tQ?function(e,t,r){if(!t$(e.precondition,t))return void t.convertToUnknownDocument(r.version);let n=tJ(e.fieldTransforms,t,r.transformResults),i=t.data;i.setAll(tX(e)),i.setAll(n),t.convertToFoundDocument(r.version,i).setHasCommittedMutations()}(i,e,n):function(e,t,r){t.convertToNoDocument(r.version).setHasCommittedMutations()}(0,e,n)}}}applyToLocalView(e,t){for(let r of this.baseMutations)r.key.isEqual(e.key)&&(t=tK(r,e,t,this.localWriteTime));for(let r of this.mutations)r.key.isEqual(e.key)&&(t=tK(r,e,t,this.localWriteTime));return t}applyToLocalDocumentSet(e,t){let r=tT();return this.mutations.forEach(n=>{let i=e.get(n.key),s=i.overlayedDocument,o=this.applyToLocalView(s,i.mutatedFields),a=tH(s,o=t.has(n.key)?null:o);null!==a&&r.set(n.key,a),s.isValidDocument()||s.convertToNoDocument(j.min())}),r}keys(){return this.mutations.reduce((e,t)=>e.add(t.key),tA())}isEqual(e){return this.batchId===e.batchId&&F(this.mutations,e.mutations,(e,t)=>tG(e,t))&&F(this.baseMutations,e.baseMutations,(e,t)=>tG(e,t))}}class t2{constructor(e,t,r,n){this.batch=e,this.commitVersion=t,this.mutationResults=r,this.docVersions=n}static from(e,t,r){e.mutations.length===r.length||S();let n=tS,i=e.mutations;for(let e=0;e<i.length;e++)n=n.insert(i[e].key,r[e].version);return new t2(e,t,r,n)}}/**
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
 */class t6{constructor(e,t){this.largestBatchId=e,this.mutation=t}getKey(){return this.mutation.key}isEqual(e){return null!==e&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
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
 */class t3{constructor(e,t){this.count=e,this.unchangedNames=t}}function t5(e){if(void 0===e)return b("GRPC error has no .code"),C.UNKNOWN;switch(e){case n.OK:return C.OK;case n.CANCELLED:return C.CANCELLED;case n.UNKNOWN:return C.UNKNOWN;case n.DEADLINE_EXCEEDED:return C.DEADLINE_EXCEEDED;case n.RESOURCE_EXHAUSTED:return C.RESOURCE_EXHAUSTED;case n.INTERNAL:return C.INTERNAL;case n.UNAVAILABLE:return C.UNAVAILABLE;case n.UNAUTHENTICATED:return C.UNAUTHENTICATED;case n.INVALID_ARGUMENT:return C.INVALID_ARGUMENT;case n.NOT_FOUND:return C.NOT_FOUND;case n.ALREADY_EXISTS:return C.ALREADY_EXISTS;case n.PERMISSION_DENIED:return C.PERMISSION_DENIED;case n.FAILED_PRECONDITION:return C.FAILED_PRECONDITION;case n.ABORTED:return C.ABORTED;case n.OUT_OF_RANGE:return C.OUT_OF_RANGE;case n.UNIMPLEMENTED:return C.UNIMPLEMENTED;case n.DATA_LOSS:return C.DATA_LOSS;default:return S()}}(s=n||(n={}))[s.OK=0]="OK",s[s.CANCELLED=1]="CANCELLED",s[s.UNKNOWN=2]="UNKNOWN",s[s.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",s[s.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",s[s.NOT_FOUND=5]="NOT_FOUND",s[s.ALREADY_EXISTS=6]="ALREADY_EXISTS",s[s.PERMISSION_DENIED=7]="PERMISSION_DENIED",s[s.UNAUTHENTICATED=16]="UNAUTHENTICATED",s[s.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",s[s.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",s[s.ABORTED=10]="ABORTED",s[s.OUT_OF_RANGE=11]="OUT_OF_RANGE",s[s.UNIMPLEMENTED=12]="UNIMPLEMENTED",s[s.INTERNAL=13]="INTERNAL",s[s.UNAVAILABLE=14]="UNAVAILABLE",s[s.DATA_LOSS=15]="DATA_LOSS";/**
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
 */let t8=new f.Integer([0xffffffff,0xffffffff],0);function t4(e){let t=(new TextEncoder).encode(e),r=new f.Md5;return r.update(t),new Uint8Array(r.digest())}function t9(e){let t=new DataView(e.buffer),r=t.getUint32(0,!0),n=t.getUint32(4,!0),i=t.getUint32(8,!0),s=t.getUint32(12,!0);return[new f.Integer([r,n],0),new f.Integer([i,s],0)]}class t7{constructor(e,t,r){if(this.bitmap=e,this.padding=t,this.hashCount=r,t<0||t>=8)throw new re(`Invalid padding: ${t}`);if(r<0||e.length>0&&0===this.hashCount)throw new re(`Invalid hash count: ${r}`);if(0===e.length&&0!==t)throw new re(`Invalid padding when bitmap length is 0: ${t}`);this.Ee=8*e.length-t,this.de=(0,f.Integer).fromNumber(this.Ee)}Ae(e,t,r){let n=e.add(t.multiply((0,f.Integer).fromNumber(r)));return 1===n.compare(t8)&&(n=new f.Integer([n.getBits(0),n.getBits(1)],0)),n.modulo(this.de).toNumber()}Re(e){return!!(this.bitmap[Math.floor(e/8)]&1<<e%8)}mightContain(e){if(0===this.Ee)return!1;let[t,r]=t9(t4(e));for(let e=0;e<this.hashCount;e++){let n=this.Ae(t,r,e);if(!this.Re(n))return!1}return!0}static create(e,t,r){let n=new t7(new Uint8Array(Math.ceil(e/8)),e%8==0?0:8-e%8,t);return r.forEach(e=>n.insert(e)),n}insert(e){if(0===this.Ee)return;let[t,r]=t9(t4(e));for(let e=0;e<this.hashCount;e++){let n=this.Ae(t,r,e);this.Ve(n)}}Ve(e){let t=Math.floor(e/8);this.bitmap[t]|=1<<e%8}}class re extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
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
 */class rt{constructor(e,t,r,n,i){this.snapshotVersion=e,this.targetChanges=t,this.targetMismatches=r,this.documentUpdates=n,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(e,t,r){let n=new Map;return n.set(e,rr.createSynthesizedTargetChangeForCurrentChange(e,t,r)),new rt(j.min(),n,new ei(V),t_,tA())}}class rr{constructor(e,t,r,n,i){this.resumeToken=e,this.current=t,this.addedDocuments=r,this.modifiedDocuments=n,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(e,t,r){return new rr(r,t,tA(),tA(),tA())}}/**
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
 */class rn{constructor(e,t,r,n){this.me=e,this.removedTargetIds=t,this.key=r,this.fe=n}}class ri{constructor(e,t){this.targetId=e,this.ge=t}}class rs{constructor(e,t,r=ec.EMPTY_BYTE_STRING,n=null){this.state=e,this.targetIds=t,this.resumeToken=r,this.cause=n}}class ro{constructor(){this.pe=0,this.ye=ru(),this.we=ec.EMPTY_BYTE_STRING,this.Se=!1,this.be=!0}get current(){return this.Se}get resumeToken(){return this.we}get De(){return 0!==this.pe}get ve(){return this.be}Ce(e){e.approximateByteSize()>0&&(this.be=!0,this.we=e)}Fe(){let e=tA(),t=tA(),r=tA();return this.ye.forEach((n,i)=>{switch(i){case 0:e=e.add(n);break;case 2:t=t.add(n);break;case 1:r=r.add(n);break;default:S()}}),new rr(this.we,this.Se,e,t,r)}Me(){this.be=!1,this.ye=ru()}xe(e,t){this.be=!0,this.ye=this.ye.insert(e,t)}Oe(e){this.be=!0,this.ye=this.ye.remove(e)}Ne(){this.pe+=1}Be(){this.pe-=1,this.pe>=0||S()}Le(){this.be=!0,this.Se=!0}}class ra{constructor(e){this.ke=e,this.qe=new Map,this.Qe=t_,this.$e=rl(),this.Ke=rl(),this.Ue=new ei(V)}We(e){for(let t of e.me)e.fe&&e.fe.isFoundDocument()?this.Ge(t,e.fe):this.ze(t,e.key,e.fe);for(let t of e.removedTargetIds)this.ze(t,e.key,e.fe)}je(e){this.forEachTarget(e,t=>{let r=this.He(t);switch(e.state){case 0:this.Je(t)&&r.Ce(e.resumeToken);break;case 1:r.Be(),r.De||r.Me(),r.Ce(e.resumeToken);break;case 2:r.Be(),r.De||this.removeTarget(t);break;case 3:this.Je(t)&&(r.Le(),r.Ce(e.resumeToken));break;case 4:this.Je(t)&&(this.Ye(t),r.Ce(e.resumeToken));break;default:S()}})}forEachTarget(e,t){e.targetIds.length>0?e.targetIds.forEach(t):this.qe.forEach((e,r)=>{this.Je(r)&&t(r)})}Ze(e){let t=e.targetId,r=e.ge.count,n=this.Xe(t);if(n){let i=n.target;if(to(i)){if(0===r){let e=new G(i.path);this.ze(t,e,eW.newNoDocument(e,j.min()))}else 1===r||S()}else{let n=this.et(t);if(n!==r){let r=this.tt(e),i=r?this.nt(r,e,n):1;0!==i&&(this.Ye(t),this.Ue=this.Ue.insert(t,2===i?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch"))}}}}tt(e){let t,r;let n=e.ge.unchangedNames;if(!n||!n.bits)return null;let{bits:{bitmap:i="",padding:s=0},hashCount:o=0}=n;try{t=eg(i).toUint8Array()}catch(e){if(e instanceof eh)return I("Decoding the base64 bloom filter in existence filter failed ("+e.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw e}try{r=new t7(t,s,o)}catch(e){return I(e instanceof re?"BloomFilter error: ":"Applying bloom filter failed: ",e),null}return 0===r.Ee?null:r}nt(e,t,r){return t.ge.count===r-this.st(e,t.targetId)?0:2}st(e,t){let r=this.ke.getRemoteKeysForTarget(t),n=0;return r.forEach(r=>{let i=this.ke.it(),s=`projects/${i.projectId}/databases/${i.database}/documents/${r.path.canonicalString()}`;e.mightContain(s)||(this.ze(t,r,null),n++)}),n}ot(e){let t=new Map;this.qe.forEach((r,n)=>{let i=this.Xe(n);if(i){if(r.current&&to(i.target)){let t=new G(i.target.path);this._t(t).has(n)||this.ut(n,t)||this.ze(n,t,eW.newNoDocument(t,e))}r.ve&&(t.set(n,r.Fe()),r.Me())}});let r=tA();this.Ke.forEach((e,t)=>{let n=!0;t.forEachWhile(e=>{let t=this.Xe(e);return!t||"TargetPurposeLimboResolution"===t.purpose||(n=!1,!1)}),n&&(r=r.add(e))}),this.Qe.forEach((t,r)=>r.setReadTime(e));let n=new rt(e,t,this.Ue,this.Qe,r);return this.Qe=t_,this.$e=rl(),this.Ke=rl(),this.Ue=new ei(V),n}Ge(e,t){if(!this.Je(e))return;let r=this.ut(e,t.key)?2:0;this.He(e).xe(t.key,r),this.Qe=this.Qe.insert(t.key,t),this.$e=this.$e.insert(t.key,this._t(t.key).add(e)),this.Ke=this.Ke.insert(t.key,this.ct(t.key).add(e))}ze(e,t,r){if(!this.Je(e))return;let n=this.He(e);this.ut(e,t)?n.xe(t,1):n.Oe(t),this.Ke=this.Ke.insert(t,this.ct(t).delete(e)),this.Ke=this.Ke.insert(t,this.ct(t).add(e)),r&&(this.Qe=this.Qe.insert(t,r))}removeTarget(e){this.qe.delete(e)}et(e){let t=this.He(e).Fe();return this.ke.getRemoteKeysForTarget(e).size+t.addedDocuments.size-t.removedDocuments.size}Ne(e){this.He(e).Ne()}He(e){let t=this.qe.get(e);return t||(t=new ro,this.qe.set(e,t)),t}ct(e){let t=this.Ke.get(e);return t||(t=new ea(V),this.Ke=this.Ke.insert(e,t)),t}_t(e){let t=this.$e.get(e);return t||(t=new ea(V),this.$e=this.$e.insert(e,t)),t}Je(e){let t=null!==this.Xe(e);return t||E("WatchChangeAggregator","Detected inactive target",e),t}Xe(e){let t=this.qe.get(e);return t&&t.De?null:this.ke.lt(e)}Ye(e){this.qe.set(e,new ro),this.ke.getRemoteKeysForTarget(e).forEach(t=>{this.ze(e,t,null)})}ut(e,t){return this.ke.getRemoteKeysForTarget(e).has(t)}}function rl(){return new ei(G.comparator)}function ru(){return new ei(G.comparator)}let rh={asc:"ASCENDING",desc:"DESCENDING"},rc={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},rf={and:"AND",or:"OR"};class rd{constructor(e,t){this.databaseId=e,this.useProto3Json=t}}function rp(e,t){return e.useProto3Json||null==t?t:{value:t}}function rg(e,t){return e.useProto3Json?`${new Date(1e3*t.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+t.nanoseconds).slice(-9)}Z`:{seconds:""+t.seconds,nanos:t.nanoseconds}}function rm(e,t){return e.useProto3Json?t.toBase64():t.toUint8Array()}function ry(e){return e||S(),j.fromTimestamp(function(e){let t=ed(e);return new B(t.seconds,t.nanos)}(e))}function rv(e,t){return rw(e,t).canonicalString()}function rw(e,t){let r=new z(["projects",e.projectId,"databases",e.database]).child("documents");return void 0===t?r:r.child(t)}function r_(e){let t=z.fromString(e);return rx(t)||S(),t}function rE(e,t){return rv(e.databaseId,t.path)}function rb(e,t){let r=r_(t);if(r.get(1)!==e.databaseId.projectId)throw new A(C.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+r.get(1)+" vs "+e.databaseId.projectId);if(r.get(3)!==e.databaseId.database)throw new A(C.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+r.get(3)+" vs "+e.databaseId.database);return new G(rS(r))}function rI(e,t){return rv(e.databaseId,t)}function rT(e){return new z(["projects",e.databaseId.projectId,"databases",e.databaseId.database]).canonicalString()}function rS(e){return e.length>4&&"documents"===e.get(4)||S(),e.popFirst(5)}function rC(e,t,r){return{name:rE(e,t),fields:r.value.mapValue.fields}}function rA(e){return{fieldPath:e.canonicalString()}}function rk(e){return K.fromServerFormat(e.fieldPath)}function rx(e){return e.length>=4&&"projects"===e.get(0)&&"databases"===e.get(2)}/**
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
 */class rR{constructor(e,t,r,n,i=j.min(),s=j.min(),o=ec.EMPTY_BYTE_STRING,a=null){this.target=e,this.targetId=t,this.purpose=r,this.sequenceNumber=n,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=s,this.resumeToken=o,this.expectedCount=a}withSequenceNumber(e){return new rR(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,t){return new rR(this.target,this.targetId,this.purpose,this.sequenceNumber,t,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new rR(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new rR(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
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
 */class rN{constructor(e){this.Tt=e}}/**
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
 */class rD{constructor(){}At(e,t){this.Rt(e,t),t.Vt()}Rt(e,t){if("nullValue"in e)this.ft(t,5);else if("booleanValue"in e)this.ft(t,10),t.gt(e.booleanValue?1:0);else if("integerValue"in e)this.ft(t,15),t.gt(ep(e.integerValue));else if("doubleValue"in e){let r=ep(e.doubleValue);isNaN(r)?this.ft(t,13):(this.ft(t,15),ee(r)?t.gt(0):t.gt(r))}else if("timestampValue"in e){let r=e.timestampValue;this.ft(t,20),"string"==typeof r&&(r=ed(r)),t.yt(`${r.seconds||""}`),t.gt(r.nanos||0)}else if("stringValue"in e)this.wt(e.stringValue,t),this.St(t);else if("bytesValue"in e)this.ft(t,30),t.bt(eg(e.bytesValue)),this.St(t);else if("referenceValue"in e)this.Dt(e.referenceValue,t);else if("geoPointValue"in e){let r=e.geoPointValue;this.ft(t,45),t.gt(r.latitude||0),t.gt(r.longitude||0)}else"mapValue"in e?eK(e)?this.ft(t,Number.MAX_SAFE_INTEGER):ez(e)?this.vt(e.mapValue,t):(this.Ct(e.mapValue,t),this.St(t)):"arrayValue"in e?(this.Ft(e.arrayValue,t),this.St(t)):S()}wt(e,t){this.ft(t,25),this.Mt(e,t)}Mt(e,t){t.yt(e)}Ct(e,t){let r=e.fields||{};for(let e of(this.ft(t,55),Object.keys(r)))this.wt(e,t),this.Rt(r[e],t)}vt(e,t){var r,n;let i=e.fields||{};this.ft(t,53);let s=(null===(n=null===(r=i[eR].arrayValue)||void 0===r?void 0:r.values)||void 0===n?void 0:n.length)||0;this.ft(t,15),t.gt(ep(s)),this.wt(eR,t),this.Rt(i[eR],t)}Ft(e,t){let r=e.values||[];for(let e of(this.ft(t,50),r))this.Rt(e,t)}Dt(e,t){this.ft(t,37),G.fromName(e).path.forEach(e=>{this.ft(t,60),this.Mt(e,t)})}ft(e,t){e.gt(t)}St(e){e.gt(2)}}rD.xt=new rD;/**
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
 */class rO{constructor(){this.Tn=new rP}addToCollectionParentIndex(e,t){return this.Tn.add(t),J.resolve()}getCollectionParents(e,t){return J.resolve(this.Tn.getEntries(t))}addFieldIndex(e,t){return J.resolve()}deleteFieldIndex(e,t){return J.resolve()}deleteAllFieldIndexes(e){return J.resolve()}createTargetIndexes(e,t){return J.resolve()}getDocumentsMatchingTarget(e,t){return J.resolve(null)}getIndexType(e,t){return J.resolve(0)}getFieldIndexes(e,t){return J.resolve([])}getNextCollectionGroupToUpdate(e){return J.resolve(null)}getMinOffset(e,t){return J.resolve(W.min())}getMinOffsetFromCollectionGroup(e,t){return J.resolve(W.min())}updateCollectionGroup(e,t,r){return J.resolve()}updateIndexEntries(e,t){return J.resolve()}}class rP{constructor(){this.index={}}add(e){let t=e.lastSegment(),r=e.popLast(),n=this.index[t]||new ea(z.comparator),i=!n.has(r);return this.index[t]=n.add(r),i}has(e){let t=e.lastSegment(),r=e.popLast(),n=this.index[t];return n&&n.has(r)}getEntries(e){return(this.index[e]||new ea(z.comparator)).toArray()}}new Uint8Array(0);/**
 * @license
 * Copyright 2018 Google LLC
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
 */let rL={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0};class rM{static withCacheSize(e){return new rM(e,rM.DEFAULT_COLLECTION_PERCENTILE,rM.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(e,t,r){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=t,this.maximumSequenceNumbersToCollect=r}}/**
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
 */rM.DEFAULT_COLLECTION_PERCENTILE=10,rM.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,rM.DEFAULT=new rM(0x2800000,rM.DEFAULT_COLLECTION_PERCENTILE,rM.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),rM.DISABLED=new rM(-1,0,0);/**
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
 */class rU{constructor(e){this.$n=e}next(){return this.$n+=2,this.$n}static Kn(){return new rU(0)}static Un(){return new rU(-1)}}/**
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
 */let rV="LruGarbageCollector";function rF([e,t],[r,n]){let i=V(e,r);return 0===i?V(t,n):i}class rB{constructor(e){this.Hn=e,this.buffer=new ea(rF),this.Jn=0}Yn(){return++this.Jn}Zn(e){let t=[e,this.Yn()];if(this.buffer.size<this.Hn)this.buffer=this.buffer.add(t);else{let e=this.buffer.last();0>rF(t,e)&&(this.buffer=this.buffer.delete(e).add(t))}}get maxValue(){return this.buffer.last()[0]}}class rj{constructor(e,t,r){this.garbageCollector=e,this.asyncQueue=t,this.localStore=r,this.Xn=null}start(){-1!==this.garbageCollector.params.cacheSizeCollectionThreshold&&this.er(6e4)}stop(){this.Xn&&(this.Xn.cancel(),this.Xn=null)}get started(){return null!==this.Xn}er(e){E(rV,`Garbage collection scheduled in ${e}ms`),this.Xn=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,async()=>{this.Xn=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(e){Y(e)?E(rV,"Ignoring IndexedDB error during garbage collection: ",e):await X(e)}await this.er(3e5)})}}class rq{constructor(e,t){this.tr=e,this.params=t}calculateTargetCount(e,t){return this.tr.nr(e).next(e=>Math.floor(t/100*e))}nthSequenceNumber(e,t){if(0===t)return J.resolve(Z.ae);let r=new rB(t);return this.tr.forEachTarget(e,e=>r.Zn(e.sequenceNumber)).next(()=>this.tr.rr(e,e=>r.Zn(e))).next(()=>r.maxValue)}removeTargets(e,t,r){return this.tr.removeTargets(e,t,r)}removeOrphanedDocuments(e,t){return this.tr.removeOrphanedDocuments(e,t)}collect(e,t){return -1===this.params.cacheSizeCollectionThreshold?(E("LruGarbageCollector","Garbage collection skipped; disabled"),J.resolve(rL)):this.getCacheSize(e).next(r=>r<this.params.cacheSizeCollectionThreshold?(E("LruGarbageCollector",`Garbage collection skipped; Cache size ${r} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),rL):this.ir(e,t))}getCacheSize(e){return this.tr.getCacheSize(e)}ir(e,t){let r,n,i,s,o,a,l;let u=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next(t=>(t>this.params.maximumSequenceNumbersToCollect?(E("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${t}`),n=this.params.maximumSequenceNumbersToCollect):n=t,s=Date.now(),this.nthSequenceNumber(e,n))).next(n=>(r=n,o=Date.now(),this.removeTargets(e,r,t))).next(t=>(i=t,a=Date.now(),this.removeOrphanedDocuments(e,r))).next(e=>(l=Date.now(),_()<=h.LogLevel.DEBUG&&E("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${s-u}ms
	Determined least recently used ${n} in `+(o-s)+"ms\n"+`	Removed ${i} targets in `+(a-o)+"ms\n"+`	Removed ${e} documents in `+(l-a)+"ms\n"+`Total Duration: ${l-u}ms`),J.resolve({didRun:!0,sequenceNumbersCollected:n,targetsRemoved:i,documentsRemoved:e})))}}/**
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
 */class r${constructor(){this.changes=new tw(e=>e.toString(),(e,t)=>e.isEqual(t)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,t){this.assertNotApplied(),this.changes.set(e,eW.newInvalidDocument(e).setReadTime(t))}getEntry(e,t){this.assertNotApplied();let r=this.changes.get(t);return void 0!==r?J.resolve(r):this.getFromCache(e,t)}getEntries(e,t){return this.getAllFromCache(e,t)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
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
 */class rz{constructor(e,t){this.overlayedDocument=e,this.mutatedFields=t}}/**
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
 */class rH{constructor(e,t,r,n){this.remoteDocumentCache=e,this.mutationQueue=t,this.documentOverlayCache=r,this.indexManager=n}getDocument(e,t){let r=null;return this.documentOverlayCache.getOverlay(e,t).next(n=>(r=n,this.remoteDocumentCache.getEntry(e,t))).next(e=>(null!==r&&tK(r.mutation,e,eu.empty(),B.now()),e))}getDocuments(e,t){return this.remoteDocumentCache.getEntries(e,t).next(t=>this.getLocalViewOfDocuments(e,t,tA()).next(()=>t))}getLocalViewOfDocuments(e,t,r=tA()){let n=tT();return this.populateOverlays(e,n,t).next(()=>this.computeViews(e,t,n,r).next(e=>{let t=tb();return e.forEach((e,r)=>{t=t.insert(e,r.overlayedDocument)}),t}))}getOverlayedDocuments(e,t){let r=tT();return this.populateOverlays(e,r,t).next(()=>this.computeViews(e,t,r,tA()))}populateOverlays(e,t,r){let n=[];return r.forEach(e=>{t.has(e)||n.push(e)}),this.documentOverlayCache.getOverlays(e,n).next(e=>{e.forEach((e,r)=>{t.set(e,r)})})}computeViews(e,t,r,n){let i=t_,s=tT(),o=tT();return t.forEach((e,t)=>{let o=r.get(t.key);n.has(t.key)&&(void 0===o||o.mutation instanceof tQ)?i=i.insert(t.key,t):void 0!==o?(s.set(t.key,o.mutation.getFieldMask()),tK(o.mutation,t,o.mutation.getFieldMask(),B.now())):s.set(t.key,eu.empty())}),this.recalculateAndSaveOverlays(e,i).next(e=>(e.forEach((e,t)=>s.set(e,t)),t.forEach((e,t)=>{var r;return o.set(e,new rz(t,null!==(r=s.get(e))&&void 0!==r?r:null))}),o))}recalculateAndSaveOverlays(e,t){let r=tT(),n=new ei((e,t)=>e-t),i=tA();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,t).next(e=>{for(let i of e)i.keys().forEach(e=>{let s=t.get(e);if(null===s)return;let o=r.get(e)||eu.empty();o=i.applyToLocalView(s,o),r.set(e,o);let a=(n.get(i.batchId)||tA()).add(e);n=n.insert(i.batchId,a)})}).next(()=>{let s=[],o=n.getReverseIterator();for(;o.hasNext();){let n=o.getNext(),a=n.key,l=n.value,u=tT();l.forEach(e=>{if(!i.has(e)){let n=tH(t.get(e),r.get(e));null!==n&&u.set(e,n),i=i.add(e)}}),s.push(this.documentOverlayCache.saveOverlays(e,a,u))}return J.waitFor(s)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,t){return this.remoteDocumentCache.getEntries(e,t).next(t=>this.recalculateAndSaveOverlays(e,t))}getDocumentsMatchingQuery(e,t,r,n){return G.isDocumentKey(t.path)&&null===t.collectionGroup&&0===t.filters.length?this.getDocumentsMatchingDocumentQuery(e,t.path):tu(t)?this.getDocumentsMatchingCollectionGroupQuery(e,t,r,n):this.getDocumentsMatchingCollectionQuery(e,t,r,n)}getNextDocuments(e,t,r,n){return this.remoteDocumentCache.getAllFromCollectionGroup(e,t,r,n).next(i=>{let s=n-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,t,r.largestBatchId,n-i.size):J.resolve(tT()),o=-1,a=i;return s.next(t=>J.forEach(t,(t,r)=>(o<r.largestBatchId&&(o=r.largestBatchId),i.get(t)?J.resolve():this.remoteDocumentCache.getEntry(e,t).next(e=>{a=a.insert(t,e)}))).next(()=>this.populateOverlays(e,t,i)).next(()=>this.computeViews(e,a,t,tA())).next(e=>({batchId:o,changes:tI(e)})))})}getDocumentsMatchingDocumentQuery(e,t){return this.getDocument(e,new G(t)).next(e=>{let t=tb();return e.isFoundDocument()&&(t=t.insert(e.key,e)),t})}getDocumentsMatchingCollectionGroupQuery(e,t,r,n){let i=t.collectionGroup,s=tb();return this.indexManager.getCollectionParents(e,i).next(o=>J.forEach(o,o=>{let a=new ta(o.child(i),null,t.explicitOrderBy.slice(),t.filters.slice(),t.limit,t.limitType,t.startAt,t.endAt);return this.getDocumentsMatchingCollectionQuery(e,a,r,n).next(e=>{e.forEach((e,t)=>{s=s.insert(e,t)})})}).next(()=>s))}getDocumentsMatchingCollectionQuery(e,t,r,n){let i;return this.documentOverlayCache.getOverlaysForCollection(e,t.path,r.largestBatchId).next(s=>(i=s,this.remoteDocumentCache.getDocumentsMatchingQuery(e,t,r,i,n))).next(e=>{i.forEach((t,r)=>{let n=r.getKey();null===e.get(n)&&(e=e.insert(n,eW.newInvalidDocument(n)))});let r=tb();return e.forEach((e,n)=>{let s=i.get(e);void 0!==s&&tK(s.mutation,n,eu.empty(),B.now()),ty(t,n)&&(r=r.insert(e,n))}),r})}}/**
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
 */class rK{constructor(e){this.serializer=e,this.dr=new Map,this.Ar=new Map}getBundleMetadata(e,t){return J.resolve(this.dr.get(t))}saveBundleMetadata(e,t){return this.dr.set(t.id,{id:t.id,version:t.version,createTime:ry(t.createTime)}),J.resolve()}getNamedQuery(e,t){return J.resolve(this.Ar.get(t))}saveNamedQuery(e,t){return this.Ar.set(t.name,{name:t.name,query:function(e){let t=function(e){var t;let r,n=function(e){let t=r_(e);return 4===t.length?z.emptyPath():rS(t)}(e.parent),i=e.structuredQuery,s=i.from?i.from.length:0,o=null;if(s>0){1===s||S();let e=i.from[0];e.allDescendants?o=e.collectionId:n=n.child(e.collectionId)}let a=[];i.where&&(a=function(e){var t;let r=function e(t){return void 0!==t.unaryFilter?function(e){switch(e.unaryFilter.op){case"IS_NAN":let t=rk(e.unaryFilter.field);return e0.create(t,"==",{doubleValue:NaN});case"IS_NULL":let r=rk(e.unaryFilter.field);return e0.create(r,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":let n=rk(e.unaryFilter.field);return e0.create(n,"!=",{doubleValue:NaN});case"IS_NOT_NULL":let i=rk(e.unaryFilter.field);return e0.create(i,"!=",{nullValue:"NULL_VALUE"});default:return S()}}(t):void 0!==t.fieldFilter?e0.create(rk(t.fieldFilter.field),function(e){switch(e){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return S()}}(t.fieldFilter.op),t.fieldFilter.value):void 0!==t.compositeFilter?e1.create(t.compositeFilter.filters.map(t=>e(t)),function(e){switch(e){case"AND":return"and";case"OR":return"or";default:return S()}}(t.compositeFilter.op)):S()}(e);return r instanceof e1&&e6(t=r)&&e2(t)?r.getFilters():[r]}(i.where));let l=[];i.orderBy&&(l=i.orderBy.map(e=>new eY(rk(e.field),function(e){switch(e){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(e.direction))));let u=null;i.limit&&(u=null==(r="object"==typeof(t=i.limit)?t.value:t)?null:r);let h=null;i.startAt&&(h=function(e){let t=!!e.before;return new eQ(e.values||[],t)}(i.startAt));let c=null;return i.endAt&&(c=function(e){let t=!e.before;return new eQ(e.values||[],t)}(i.endAt)),new ta(n,o,l,a,u,"F",h,c)}({parent:e.parent,structuredQuery:e.structuredQuery});return"LAST"===e.limitType?td(t,t.limit,"L"):t}(t.bundledQuery),readTime:ry(t.readTime)}),J.resolve()}}/**
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
 */class rG{constructor(){this.overlays=new ei(G.comparator),this.Rr=new Map}getOverlay(e,t){return J.resolve(this.overlays.get(t))}getOverlays(e,t){let r=tT();return J.forEach(t,t=>this.getOverlay(e,t).next(e=>{null!==e&&r.set(t,e)})).next(()=>r)}saveOverlays(e,t,r){return r.forEach((r,n)=>{this.Et(e,t,n)}),J.resolve()}removeOverlaysForBatchId(e,t,r){let n=this.Rr.get(r);return void 0!==n&&(n.forEach(e=>this.overlays=this.overlays.remove(e)),this.Rr.delete(r)),J.resolve()}getOverlaysForCollection(e,t,r){let n=tT(),i=t.length+1,s=new G(t.child("")),o=this.overlays.getIteratorFrom(s);for(;o.hasNext();){let e=o.getNext().value,s=e.getKey();if(!t.isPrefixOf(s.path))break;s.path.length===i&&e.largestBatchId>r&&n.set(e.getKey(),e)}return J.resolve(n)}getOverlaysForCollectionGroup(e,t,r,n){let i=new ei((e,t)=>e-t),s=this.overlays.getIterator();for(;s.hasNext();){let e=s.getNext().value;if(e.getKey().getCollectionGroup()===t&&e.largestBatchId>r){let t=i.get(e.largestBatchId);null===t&&(t=tT(),i=i.insert(e.largestBatchId,t)),t.set(e.getKey(),e)}}let o=tT(),a=i.getIterator();for(;a.hasNext()&&(a.getNext().value.forEach((e,t)=>o.set(e,t)),!(o.size()>=n)););return J.resolve(o)}Et(e,t,r){let n=this.overlays.get(r.key);if(null!==n){let e=this.Rr.get(n.largestBatchId).delete(r.key);this.Rr.set(n.largestBatchId,e)}this.overlays=this.overlays.insert(r.key,new t6(t,r));let i=this.Rr.get(t);void 0===i&&(i=tA(),this.Rr.set(t,i)),this.Rr.set(t,i.add(r.key))}}/**
 * @license
 * Copyright 2024 Google LLC
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
 */class rW{constructor(){this.sessionToken=ec.EMPTY_BYTE_STRING}getSessionToken(e){return J.resolve(this.sessionToken)}setSessionToken(e,t){return this.sessionToken=t,J.resolve()}}/**
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
 */class rQ{constructor(){this.Vr=new ea(rX.mr),this.gr=new ea(rX.pr)}isEmpty(){return this.Vr.isEmpty()}addReference(e,t){let r=new rX(e,t);this.Vr=this.Vr.add(r),this.gr=this.gr.add(r)}yr(e,t){e.forEach(e=>this.addReference(e,t))}removeReference(e,t){this.wr(new rX(e,t))}Sr(e,t){e.forEach(e=>this.removeReference(e,t))}br(e){let t=new G(new z([])),r=new rX(t,e),n=new rX(t,e+1),i=[];return this.gr.forEachInRange([r,n],e=>{this.wr(e),i.push(e.key)}),i}Dr(){this.Vr.forEach(e=>this.wr(e))}wr(e){this.Vr=this.Vr.delete(e),this.gr=this.gr.delete(e)}vr(e){let t=new G(new z([])),r=new rX(t,e),n=new rX(t,e+1),i=tA();return this.gr.forEachInRange([r,n],e=>{i=i.add(e.key)}),i}containsKey(e){let t=new rX(e,0),r=this.Vr.firstAfterOrEqual(t);return null!==r&&e.isEqual(r.key)}}class rX{constructor(e,t){this.key=e,this.Cr=t}static mr(e,t){return G.comparator(e.key,t.key)||V(e.Cr,t.Cr)}static pr(e,t){return V(e.Cr,t.Cr)||G.comparator(e.key,t.key)}}/**
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
 */class rJ{constructor(e,t){this.indexManager=e,this.referenceDelegate=t,this.mutationQueue=[],this.Fr=1,this.Mr=new ea(rX.mr)}checkEmpty(e){return J.resolve(0===this.mutationQueue.length)}addMutationBatch(e,t,r,n){let i=this.Fr;this.Fr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];let s=new t1(i,t,r,n);for(let t of(this.mutationQueue.push(s),n))this.Mr=this.Mr.add(new rX(t.key,i)),this.indexManager.addToCollectionParentIndex(e,t.key.path.popLast());return J.resolve(s)}lookupMutationBatch(e,t){return J.resolve(this.Or(t))}getNextMutationBatchAfterBatchId(e,t){let r=this.Nr(t+1),n=r<0?0:r;return J.resolve(this.mutationQueue.length>n?this.mutationQueue[n]:null)}getHighestUnacknowledgedBatchId(){return J.resolve(0===this.mutationQueue.length?-1:this.Fr-1)}getAllMutationBatches(e){return J.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,t){let r=new rX(t,0),n=new rX(t,Number.POSITIVE_INFINITY),i=[];return this.Mr.forEachInRange([r,n],e=>{let t=this.Or(e.Cr);i.push(t)}),J.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(e,t){let r=new ea(V);return t.forEach(e=>{let t=new rX(e,0),n=new rX(e,Number.POSITIVE_INFINITY);this.Mr.forEachInRange([t,n],e=>{r=r.add(e.Cr)})}),J.resolve(this.Br(r))}getAllMutationBatchesAffectingQuery(e,t){let r=t.path,n=r.length+1,i=r;G.isDocumentKey(i)||(i=i.child(""));let s=new rX(new G(i),0),o=new ea(V);return this.Mr.forEachWhile(e=>{let t=e.key.path;return!!r.isPrefixOf(t)&&(t.length===n&&(o=o.add(e.Cr)),!0)},s),J.resolve(this.Br(o))}Br(e){let t=[];return e.forEach(e=>{let r=this.Or(e);null!==r&&t.push(r)}),t}removeMutationBatch(e,t){0===this.Lr(t.batchId,"removed")||S(),this.mutationQueue.shift();let r=this.Mr;return J.forEach(t.mutations,n=>{let i=new rX(n.key,t.batchId);return r=r.delete(i),this.referenceDelegate.markPotentiallyOrphaned(e,n.key)}).next(()=>{this.Mr=r})}qn(e){}containsKey(e,t){let r=new rX(t,0),n=this.Mr.firstAfterOrEqual(r);return J.resolve(t.isEqual(n&&n.key))}performConsistencyCheck(e){return this.mutationQueue.length,J.resolve()}Lr(e,t){return this.Nr(e)}Nr(e){return 0===this.mutationQueue.length?0:e-this.mutationQueue[0].batchId}Or(e){let t=this.Nr(e);return t<0||t>=this.mutationQueue.length?null:this.mutationQueue[t]}}/**
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
 */class rY{constructor(e){this.kr=e,this.docs=new ei(G.comparator),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,t){let r=t.key,n=this.docs.get(r),i=n?n.size:0,s=this.kr(t);return this.docs=this.docs.insert(r,{document:t.mutableCopy(),size:s}),this.size+=s-i,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){let t=this.docs.get(e);t&&(this.docs=this.docs.remove(e),this.size-=t.size)}getEntry(e,t){let r=this.docs.get(t);return J.resolve(r?r.document.mutableCopy():eW.newInvalidDocument(t))}getEntries(e,t){let r=t_;return t.forEach(e=>{let t=this.docs.get(e);r=r.insert(e,t?t.document.mutableCopy():eW.newInvalidDocument(e))}),J.resolve(r)}getDocumentsMatchingQuery(e,t,r,n){let i=t_,s=t.path,o=new G(s.child("__id-9223372036854775808__")),a=this.docs.getIteratorFrom(o);for(;a.hasNext();){let{key:e,value:{document:o}}=a.getNext();if(!s.isPrefixOf(e.path))break;e.path.length>s.length+1||0>=function(e,t){let r=e.readTime.compareTo(t.readTime);return 0!==r?r:0!==(r=G.comparator(e.documentKey,t.documentKey))?r:V(e.largestBatchId,t.largestBatchId)}(new W(o.readTime,o.key,-1),r)||(n.has(o.key)||ty(t,o))&&(i=i.insert(o.key,o.mutableCopy()))}return J.resolve(i)}getAllFromCollectionGroup(e,t,r,n){S()}qr(e,t){return J.forEach(this.docs,e=>t(e))}newChangeBuffer(e){return new rZ(this)}getSize(e){return J.resolve(this.size)}}class rZ extends r${constructor(e){super(),this.Ir=e}applyChanges(e){let t=[];return this.changes.forEach((r,n)=>{n.isValidDocument()?t.push(this.Ir.addEntry(e,n)):this.Ir.removeEntry(r)}),J.waitFor(t)}getFromCache(e,t){return this.Ir.getEntry(e,t)}getAllFromCache(e,t){return this.Ir.getEntries(e,t)}}/**
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
 */class r0{constructor(e){this.persistence=e,this.Qr=new tw(e=>ti(e),ts),this.lastRemoteSnapshotVersion=j.min(),this.highestTargetId=0,this.$r=0,this.Kr=new rQ,this.targetCount=0,this.Ur=rU.Kn()}forEachTarget(e,t){return this.Qr.forEach((e,r)=>t(r)),J.resolve()}getLastRemoteSnapshotVersion(e){return J.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return J.resolve(this.$r)}allocateTargetId(e){return this.highestTargetId=this.Ur.next(),J.resolve(this.highestTargetId)}setTargetsMetadata(e,t,r){return r&&(this.lastRemoteSnapshotVersion=r),t>this.$r&&(this.$r=t),J.resolve()}zn(e){this.Qr.set(e.target,e);let t=e.targetId;t>this.highestTargetId&&(this.Ur=new rU(t),this.highestTargetId=t),e.sequenceNumber>this.$r&&(this.$r=e.sequenceNumber)}addTargetData(e,t){return this.zn(t),this.targetCount+=1,J.resolve()}updateTargetData(e,t){return this.zn(t),J.resolve()}removeTargetData(e,t){return this.Qr.delete(t.target),this.Kr.br(t.targetId),this.targetCount-=1,J.resolve()}removeTargets(e,t,r){let n=0,i=[];return this.Qr.forEach((s,o)=>{o.sequenceNumber<=t&&null===r.get(o.targetId)&&(this.Qr.delete(s),i.push(this.removeMatchingKeysForTargetId(e,o.targetId)),n++)}),J.waitFor(i).next(()=>n)}getTargetCount(e){return J.resolve(this.targetCount)}getTargetData(e,t){let r=this.Qr.get(t)||null;return J.resolve(r)}addMatchingKeys(e,t,r){return this.Kr.yr(t,r),J.resolve()}removeMatchingKeys(e,t,r){this.Kr.Sr(t,r);let n=this.persistence.referenceDelegate,i=[];return n&&t.forEach(t=>{i.push(n.markPotentiallyOrphaned(e,t))}),J.waitFor(i)}removeMatchingKeysForTargetId(e,t){return this.Kr.br(t),J.resolve()}getMatchingKeysForTargetId(e,t){let r=this.Kr.vr(t);return J.resolve(r)}containsKey(e,t){return J.resolve(this.Kr.containsKey(t))}}/**
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
 */class r1{constructor(e,t){this.Wr={},this.overlays={},this.Gr=new Z(0),this.zr=!1,this.zr=!0,this.jr=new rW,this.referenceDelegate=e(this),this.Hr=new r0(this),this.indexManager=new rO,this.remoteDocumentCache=new rY(e=>this.referenceDelegate.Jr(e)),this.serializer=new rN(t),this.Yr=new rK(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.zr=!1,Promise.resolve()}get started(){return this.zr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let t=this.overlays[e.toKey()];return t||(t=new rG,this.overlays[e.toKey()]=t),t}getMutationQueue(e,t){let r=this.Wr[e.toKey()];return r||(r=new rJ(t,this.referenceDelegate),this.Wr[e.toKey()]=r),r}getGlobalsCache(){return this.jr}getTargetCache(){return this.Hr}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Yr}runTransaction(e,t,r){E("MemoryPersistence","Starting transaction:",e);let n=new r2(this.Gr.next());return this.referenceDelegate.Zr(),r(n).next(e=>this.referenceDelegate.Xr(n).next(()=>e)).toPromise().then(e=>(n.raiseOnCommittedEvent(),e))}ei(e,t){return J.or(Object.values(this.Wr).map(r=>()=>r.containsKey(e,t)))}}class r2 extends Q{constructor(e){super(),this.currentSequenceNumber=e}}class r6{constructor(e){this.persistence=e,this.ti=new rQ,this.ni=null}static ri(e){return new r6(e)}get ii(){if(this.ni)return this.ni;throw S()}addReference(e,t,r){return this.ti.addReference(r,t),this.ii.delete(r.toString()),J.resolve()}removeReference(e,t,r){return this.ti.removeReference(r,t),this.ii.add(r.toString()),J.resolve()}markPotentiallyOrphaned(e,t){return this.ii.add(t.toString()),J.resolve()}removeTarget(e,t){this.ti.br(t.targetId).forEach(e=>this.ii.add(e.toString()));let r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,t.targetId).next(e=>{e.forEach(e=>this.ii.add(e.toString()))}).next(()=>r.removeTargetData(e,t))}Zr(){this.ni=new Set}Xr(e){let t=this.persistence.getRemoteDocumentCache().newChangeBuffer();return J.forEach(this.ii,r=>{let n=G.fromPath(r);return this.si(e,n).next(e=>{e||t.removeEntry(n,j.min())})}).next(()=>(this.ni=null,t.apply(e)))}updateLimboDocument(e,t){return this.si(e,t).next(e=>{e?this.ii.delete(t.toString()):this.ii.add(t.toString())})}Jr(e){return 0}si(e,t){return J.or([()=>J.resolve(this.ti.containsKey(t)),()=>this.persistence.getTargetCache().containsKey(e,t),()=>this.persistence.ei(e,t)])}}class r3{constructor(e,t){this.persistence=e,this.oi=new tw(e=>(function(e){let t="";for(let r=0;r<e.length;r++)t.length>0&&(t+="\x01\x01"),t=function(e,t){let r=t,n=e.length;for(let t=0;t<n;t++){let n=e.charAt(t);switch(n){case"\0":r+="\x01\x10";break;case"\x01":r+="\x01\x11";break;default:r+=n}}return r}(e.get(r),t);return t+"\x01\x01"})(e.path),(e,t)=>e.isEqual(t)),this.garbageCollector=new rq(this,t)}static ri(e,t){return new r3(e,t)}Zr(){}Xr(e){return J.resolve()}forEachTarget(e,t){return this.persistence.getTargetCache().forEachTarget(e,t)}nr(e){let t=this.sr(e);return this.persistence.getTargetCache().getTargetCount(e).next(e=>t.next(t=>e+t))}sr(e){let t=0;return this.rr(e,e=>{t++}).next(()=>t)}rr(e,t){return J.forEach(this.oi,(r,n)=>this.ar(e,r,n).next(e=>e?J.resolve():t(n)))}removeTargets(e,t,r){return this.persistence.getTargetCache().removeTargets(e,t,r)}removeOrphanedDocuments(e,t){let r=0,n=this.persistence.getRemoteDocumentCache(),i=n.newChangeBuffer();return n.qr(e,n=>this.ar(e,n,t).next(e=>{e||(r++,i.removeEntry(n,j.min()))})).next(()=>i.apply(e)).next(()=>r)}markPotentiallyOrphaned(e,t){return this.oi.set(t,e.currentSequenceNumber),J.resolve()}removeTarget(e,t){let r=t.withSequenceNumber(e.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(e,r)}addReference(e,t,r){return this.oi.set(r,e.currentSequenceNumber),J.resolve()}removeReference(e,t,r){return this.oi.set(r,e.currentSequenceNumber),J.resolve()}updateLimboDocument(e,t){return this.oi.set(t,e.currentSequenceNumber),J.resolve()}Jr(e){let t=e.key.toString().length;return e.isFoundDocument()&&(t+=function e(t){switch(eN(t)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:let r=eE(t);return r?16+e(r):16;case 5:return 2*t.stringValue.length;case 6:return eg(t.bytesValue).approximateByteSize();case 7:return t.referenceValue.length;case 9:return(t.arrayValue.values||[]).reduce((t,r)=>t+e(r),0);case 10:case 11:var n;let i;return n=t.mapValue,i=0,er(n.fields,(t,r)=>{i+=t.length+e(r)}),i;default:throw S()}}(e.data.value)),t}ar(e,t,r){return J.or([()=>this.persistence.ei(e,t),()=>this.persistence.getTargetCache().containsKey(e,t),()=>{let e=this.oi.get(t);return J.resolve(void 0!==e&&e>r)}])}getCacheSize(e){return this.persistence.getRemoteDocumentCache().getSize(e)}}/**
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
 */class r5{constructor(e,t,r,n){this.targetId=e,this.fromCache=t,this.Hi=r,this.Ji=n}static Yi(e,t){let r=tA(),n=tA();for(let e of t.docChanges)switch(e.type){case 0:r=r.add(e.doc.key);break;case 1:n=n.add(e.doc.key)}return new r5(e,t.fromCache,r,n)}}/**
 * @license
 * Copyright 2023 Google LLC
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
 */class r8{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
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
 */class r4{constructor(){this.Zi=!1,this.Xi=!1,this.es=100,this.ts=(0,c.isSafari)()?8:function(e){let t=e.match(/Android ([\d.]+)/i);return Number(t?t[1].split(".").slice(0,2).join("."):"-1")}((0,c.getUA)())>0?6:4}initialize(e,t){this.ns=e,this.indexManager=t,this.Zi=!0}getDocumentsMatchingQuery(e,t,r,n){let i={result:null};return this.rs(e,t).next(e=>{i.result=e}).next(()=>{if(!i.result)return this.ss(e,t,n,r).next(e=>{i.result=e})}).next(()=>{if(i.result)return;let r=new r8;return this._s(e,t,r).next(n=>{if(i.result=n,this.Xi)return this.us(e,t,r,n.size)})}).next(()=>i.result)}us(e,t,r,n){return r.documentReadCount<this.es?(_()<=h.LogLevel.DEBUG&&E("QueryEngine","SDK will not create cache indexes for query:",tm(t),"since it only creates cache indexes for collection contains","more than or equal to",this.es,"documents"),J.resolve()):(_()<=h.LogLevel.DEBUG&&E("QueryEngine","Query:",tm(t),"scans",r.documentReadCount,"local documents and returns",n,"documents as results."),r.documentReadCount>this.ts*n?(_()<=h.LogLevel.DEBUG&&E("QueryEngine","The SDK decides to create cache indexes for query:",tm(t),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,tc(t))):J.resolve())}rs(e,t){if(tl(t))return J.resolve(null);let r=tc(t);return this.indexManager.getIndexType(e,r).next(n=>0===n?null:(null!==t.limit&&1===n&&(r=tc(t=td(t,null,"F"))),this.indexManager.getDocumentsMatchingTarget(e,r).next(n=>{let i=tA(...n);return this.ns.getDocuments(e,i).next(n=>this.indexManager.getMinOffset(e,r).next(r=>{let s=this.cs(t,n);return this.ls(t,s,i,r.readTime)?this.rs(e,td(t,null,"F")):this.hs(e,s,t,r)}))})))}ss(e,t,r,n){return tl(t)||n.isEqual(j.min())?J.resolve(null):this.ns.getDocuments(e,r).next(i=>{let s=this.cs(t,i);return this.ls(t,s,r,n)?J.resolve(null):(_()<=h.LogLevel.DEBUG&&E("QueryEngine","Re-using previous result from %s to execute query: %s",n.toString(),tm(t)),this.hs(e,s,t,function(e,t){let r=e.toTimestamp().seconds,n=e.toTimestamp().nanoseconds+1;return new W(j.fromTimestamp(1e9===n?new B(r+1,0):new B(r,n)),G.empty(),-1)}(n,0)).next(e=>e))})}cs(e,t){let r=new ea(tv(e));return t.forEach((t,n)=>{ty(e,n)&&(r=r.add(n))}),r}ls(e,t,r,n){if(null===e.limit)return!1;if(r.size!==t.size)return!0;let i="F"===e.limitType?t.last():t.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(n)>0)}_s(e,t,r){return _()<=h.LogLevel.DEBUG&&E("QueryEngine","Using full collection scan to execute query:",tm(t)),this.ns.getDocumentsMatchingQuery(e,t,W.min(),r)}hs(e,t,r,n){return this.ns.getDocumentsMatchingQuery(e,r,n).next(e=>(t.forEach(t=>{e=e.insert(t.key,t)}),e))}}/**
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
 */let r9="LocalStore";class r7{constructor(e,t,r,n){this.persistence=e,this.Ps=t,this.serializer=n,this.Ts=new ei(V),this.Is=new tw(e=>ti(e),ts),this.Es=new Map,this.ds=e.getRemoteDocumentCache(),this.Hr=e.getTargetCache(),this.Yr=e.getBundleCache(),this.As(r)}As(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new rH(this.ds,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.ds.setIndexManager(this.indexManager),this.Ps.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",t=>e.collect(t,this.Ts))}}async function ne(e,t){return await e.persistence.runTransaction("Handle user change","readonly",r=>{let n;return e.mutationQueue.getAllMutationBatches(r).next(i=>(n=i,e.As(t),e.mutationQueue.getAllMutationBatches(r))).next(t=>{let i=[],s=[],o=tA();for(let e of n)for(let t of(i.push(e.batchId),e.mutations))o=o.add(t.key);for(let e of t)for(let t of(s.push(e.batchId),e.mutations))o=o.add(t.key);return e.localDocuments.getDocuments(r,o).next(e=>({Rs:e,removedBatchIds:i,addedBatchIds:s}))})})}function nt(e){return e.persistence.runTransaction("Get last remote snapshot version","readonly",t=>e.Hr.getLastRemoteSnapshotVersion(t))}async function nr(e,t,r){let n=e.Ts.get(t);try{r||await e.persistence.runTransaction("Release target",r?"readwrite":"readwrite-primary",t=>e.persistence.referenceDelegate.removeTarget(t,n))}catch(e){if(!Y(e))throw e;E(r9,`Failed to update sequence numbers for target ${t}: ${e}`)}e.Ts=e.Ts.remove(t),e.Is.delete(n.target)}function nn(e,t,r){let n=j.min(),i=tA();return e.persistence.runTransaction("Execute query","readwrite",s=>(function(e,t,r){let n=e.Is.get(r);return void 0!==n?J.resolve(e.Ts.get(n)):e.Hr.getTargetData(t,r)})(e,s,tc(t)).next(t=>{if(t)return n=t.lastLimboFreeSnapshotVersion,e.Hr.getMatchingKeysForTargetId(s,t.targetId).next(e=>{i=e})}).next(()=>e.Ps.getDocumentsMatchingQuery(s,t,r?n:j.min(),r?i:tA())).next(r=>{var n;let s;return n=t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2)),s=e.Es.get(n)||j.min(),r.forEach((e,t)=>{t.readTime.compareTo(s)>0&&(s=t.readTime)}),e.Es.set(n,s),{documents:r,gs:i}}))}class ni{constructor(){this.activeTargetIds=tk}Ds(e){this.activeTargetIds=this.activeTargetIds.add(e)}vs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}bs(){return JSON.stringify({activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()})}}class ns{constructor(){this.ho=new ni,this.Po={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,t,r){}addLocalQueryTarget(e,t=!0){return t&&this.ho.Ds(e),this.Po[e]||"not-current"}updateQueryState(e,t,r){this.Po[e]=t}removeLocalQueryTarget(e){this.ho.vs(e)}isLocalQueryTarget(e){return this.ho.activeTargetIds.has(e)}clearQueryState(e){delete this.Po[e]}getAllActiveQueryTargets(){return this.ho.activeTargetIds}isActiveQueryTarget(e){return this.ho.activeTargetIds.has(e)}start(){return this.ho=new ni,Promise.resolve()}handleUserChange(e,t,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */class no{To(e){}shutdown(){}}/**
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
 */let na="ConnectivityMonitor";class nl{constructor(){this.Io=()=>this.Eo(),this.Ao=()=>this.Ro(),this.Vo=[],this.mo()}To(e){this.Vo.push(e)}shutdown(){window.removeEventListener("online",this.Io),window.removeEventListener("offline",this.Ao)}mo(){window.addEventListener("online",this.Io),window.addEventListener("offline",this.Ao)}Eo(){for(let e of(E(na,"Network connectivity changed: AVAILABLE"),this.Vo))e(0)}Ro(){for(let e of(E(na,"Network connectivity changed: UNAVAILABLE"),this.Vo))e(1)}static D(){return"undefined"!=typeof window&&void 0!==window.addEventListener&&void 0!==window.removeEventListener}}/**
 * @license
 * Copyright 2023 Google LLC
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
 */let nu=null;function nh(){return null===nu?nu=0x10000000+Math.round(0x80000000*Math.random()):nu++,"0x"+nu.toString(16)}/**
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
 */let nc="RestConnection",nf={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};class nd{get fo(){return!1}constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;let t=e.ssl?"https":"http",r=encodeURIComponent(this.databaseId.projectId),n=encodeURIComponent(this.databaseId.database);this.po=t+"://"+e.host,this.yo=`projects/${r}/databases/${n}`,this.wo=this.databaseId.database===eT?`project_id=${r}`:`project_id=${r}&database_id=${n}`}So(e,t,r,n,i){let s=nh(),o=this.bo(e,t.toUriEncodedString());E(nc,`Sending RPC '${e}' ${s}:`,o,r);let a={"google-cloud-resource-prefix":this.yo,"x-goog-request-params":this.wo};return this.Do(a,n,i),this.vo(e,o,a,r).then(t=>(E(nc,`Received RPC '${e}' ${s}: `,t),t),t=>{throw I(nc,`RPC '${e}' ${s} failed with error: `,t,"url: ",o,"request:",r),t})}Co(e,t,r,n,i,s){return this.So(e,t,r,n,i)}Do(e,t,r){e["X-Goog-Api-Client"]="gl-js/ fire/"+v,e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),t&&t.headers.forEach((t,r)=>e[r]=t),r&&r.headers.forEach((t,r)=>e[r]=t)}bo(e,t){let r=nf[e];return`${this.po}/v1/${t}:${r}`}terminate(){}}/**
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
 */class np{constructor(e){this.Fo=e.Fo,this.Mo=e.Mo}xo(e){this.Oo=e}No(e){this.Bo=e}Lo(e){this.ko=e}onMessage(e){this.qo=e}close(){this.Mo()}send(e){this.Fo(e)}Qo(){this.Oo()}$o(){this.Bo()}Ko(e){this.ko(e)}Uo(e){this.qo(e)}}/**
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
 */let ng="WebChannelConnection";class nm extends nd{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}vo(e,t,r,n){let i=nh();return new Promise((s,o)=>{let a=new d.XhrIo;a.setWithCredentials(!0),a.listenOnce(d.EventType.COMPLETE,()=>{try{switch(a.getLastErrorCode()){case d.ErrorCode.NO_ERROR:let t=a.getResponseJson();E(ng,`XHR for RPC '${e}' ${i} received:`,JSON.stringify(t)),s(t);break;case d.ErrorCode.TIMEOUT:E(ng,`RPC '${e}' ${i} timed out`),o(new A(C.DEADLINE_EXCEEDED,"Request time out"));break;case d.ErrorCode.HTTP_ERROR:let r=a.getStatus();if(E(ng,`RPC '${e}' ${i} failed with status:`,r,"response text:",a.getResponseText()),r>0){let e=a.getResponseJson();Array.isArray(e)&&(e=e[0]);let t=null==e?void 0:e.error;if(t&&t.status&&t.message){let e=function(e){let t=e.toLowerCase().replace(/_/g,"-");return Object.values(C).indexOf(t)>=0?t:C.UNKNOWN}(t.status);o(new A(e,t.message))}else o(new A(C.UNKNOWN,"Server responded with status "+a.getStatus()))}else o(new A(C.UNAVAILABLE,"Connection failed."));break;default:S()}}finally{E(ng,`RPC '${e}' ${i} completed.`)}});let l=JSON.stringify(n);E(ng,`RPC '${e}' ${i} sending request:`,n),a.send(t,"POST",l,r,15)})}Wo(e,t,r){let i=nh(),s=[this.po,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=(0,d.createWebChannelTransport)(),a=(0,d.getStatEventTarget)(),l={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},u=this.longPollingOptions.timeoutSeconds;void 0!==u&&(l.longPollingTimeout=Math.round(1e3*u)),this.useFetchStreams&&(l.useFetchStreams=!0),this.Do(l.initMessageHeaders,t,r),l.encodeInitMessageHeaders=!0;let h=s.join("");E(ng,`Creating RPC '${e}' stream ${i}: ${h}`,l);let c=o.createWebChannel(h,l),f=!1,p=!1,g=new np({Fo:t=>{p?E(ng,`Not sending because RPC '${e}' stream ${i} is closed:`,t):(f||(E(ng,`Opening RPC '${e}' stream ${i} transport.`),c.open(),f=!0),E(ng,`RPC '${e}' stream ${i} sending:`,t),c.send(t))},Mo:()=>c.close()}),m=(e,t,r)=>{e.listen(t,e=>{try{r(e)}catch(e){setTimeout(()=>{throw e},0)}})};return m(c,d.WebChannel.EventType.OPEN,()=>{p||(E(ng,`RPC '${e}' stream ${i} transport opened.`),g.Qo())}),m(c,d.WebChannel.EventType.CLOSE,()=>{p||(p=!0,E(ng,`RPC '${e}' stream ${i} transport closed`),g.Ko())}),m(c,d.WebChannel.EventType.ERROR,t=>{p||(p=!0,I(ng,`RPC '${e}' stream ${i} transport errored:`,t),g.Ko(new A(C.UNAVAILABLE,"The operation could not be completed")))}),m(c,d.WebChannel.EventType.MESSAGE,t=>{var r;if(!p){let s=t.data[0];s||S();let o=(null==s?void 0:s.error)||(null===(r=s[0])||void 0===r?void 0:r.error);if(o){E(ng,`RPC '${e}' stream ${i} received error:`,o);let t=o.status,r=function(e){let t=n[e];if(void 0!==t)return t5(t)}(t),s=o.message;void 0===r&&(r=C.INTERNAL,s="Unknown error status: "+t+" with message "+o.message),p=!0,g.Ko(new A(r,s)),c.close()}else E(ng,`RPC '${e}' stream ${i} received:`,s),g.Uo(s)}}),m(a,d.Event.STAT_EVENT,t=>{t.stat===d.Stat.PROXY?E(ng,`RPC '${e}' stream ${i} detected buffering proxy`):t.stat===d.Stat.NOPROXY&&E(ng,`RPC '${e}' stream ${i} detected no buffering proxy`)}),setTimeout(()=>{g.$o()},0),g}}function ny(){return"undefined"!=typeof document?document:null}/**
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
 */function nv(e){return new rd(e,!0)}/**
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
 */class nw{constructor(e,t,r=1e3,n=1.5,i=6e4){this.Ti=e,this.timerId=t,this.Go=r,this.zo=n,this.jo=i,this.Ho=0,this.Jo=null,this.Yo=Date.now(),this.reset()}reset(){this.Ho=0}Zo(){this.Ho=this.jo}Xo(e){this.cancel();let t=Math.floor(this.Ho+this.e_()),r=Math.max(0,Date.now()-this.Yo),n=Math.max(0,t-r);n>0&&E("ExponentialBackoff",`Backing off for ${n} ms (base delay: ${this.Ho} ms, delay with jitter: ${t} ms, last attempt: ${r} ms ago)`),this.Jo=this.Ti.enqueueAfterDelay(this.timerId,n,()=>(this.Yo=Date.now(),e())),this.Ho*=this.zo,this.Ho<this.Go&&(this.Ho=this.Go),this.Ho>this.jo&&(this.Ho=this.jo)}t_(){null!==this.Jo&&(this.Jo.skipDelay(),this.Jo=null)}cancel(){null!==this.Jo&&(this.Jo.cancel(),this.Jo=null)}e_(){return(Math.random()-.5)*this.Ho}}/**
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
 */let n_="PersistentStream";class nE{constructor(e,t,r,n,i,s,o,a){this.Ti=e,this.n_=r,this.r_=n,this.connection=i,this.authCredentialsProvider=s,this.appCheckCredentialsProvider=o,this.listener=a,this.state=0,this.i_=0,this.s_=null,this.o_=null,this.stream=null,this.__=0,this.a_=new nw(e,t)}u_(){return 1===this.state||5===this.state||this.c_()}c_(){return 2===this.state||3===this.state}start(){this.__=0,4!==this.state?this.auth():this.l_()}async stop(){this.u_()&&await this.close(0)}h_(){this.state=0,this.a_.reset()}P_(){this.c_()&&null===this.s_&&(this.s_=this.Ti.enqueueAfterDelay(this.n_,6e4,()=>this.T_()))}I_(e){this.E_(),this.stream.send(e)}async T_(){if(this.c_())return this.close(0)}E_(){this.s_&&(this.s_.cancel(),this.s_=null)}d_(){this.o_&&(this.o_.cancel(),this.o_=null)}async close(e,t){this.E_(),this.d_(),this.a_.cancel(),this.i_++,4!==e?this.a_.reset():t&&t.code===C.RESOURCE_EXHAUSTED?(b(t.toString()),b("Using maximum backoff delay to prevent overloading the backend."),this.a_.Zo()):t&&t.code===C.UNAUTHENTICATED&&3!==this.state&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),null!==this.stream&&(this.A_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.Lo(t)}A_(){}auth(){this.state=1;let e=this.R_(this.i_),t=this.i_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([e,r])=>{this.i_===t&&this.V_(e,r)},t=>{e(()=>{let e=new A(C.UNKNOWN,"Fetching auth token failed: "+t.message);return this.m_(e)})})}V_(e,t){let r=this.R_(this.i_);this.stream=this.f_(e,t),this.stream.xo(()=>{r(()=>this.listener.xo())}),this.stream.No(()=>{r(()=>(this.state=2,this.o_=this.Ti.enqueueAfterDelay(this.r_,1e4,()=>(this.c_()&&(this.state=3),Promise.resolve())),this.listener.No()))}),this.stream.Lo(e=>{r(()=>this.m_(e))}),this.stream.onMessage(e=>{r(()=>1==++this.__?this.g_(e):this.onNext(e))})}l_(){this.state=5,this.a_.Xo(async()=>{this.state=0,this.start()})}m_(e){return E(n_,`close with error: ${e}`),this.stream=null,this.close(4,e)}R_(e){return t=>{this.Ti.enqueueAndForget(()=>this.i_===e?t():(E(n_,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class nb extends nE{constructor(e,t,r,n,i,s){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",t,r,n,s),this.serializer=i}f_(e,t){return this.connection.Wo("Listen",e,t)}g_(e){return this.onNext(e)}onNext(e){this.a_.reset();let t=function(e,t){let r;if("targetChange"in t){var n,i;t.targetChange;let s="NO_CHANGE"===(n=t.targetChange.targetChangeType||"NO_CHANGE")?0:"ADD"===n?1:"REMOVE"===n?2:"CURRENT"===n?3:"RESET"===n?4:S(),o=t.targetChange.targetIds||[],a=(i=t.targetChange.resumeToken,e.useProto3Json?(void 0===i||"string"==typeof i||S(),ec.fromBase64String(i||"")):(void 0===i||i instanceof p||i instanceof Uint8Array||S(),ec.fromUint8Array(i||new Uint8Array))),l=t.targetChange.cause;r=new rs(s,o,a,l&&new A(void 0===l.code?C.UNKNOWN:t5(l.code),l.message||"")||null)}else if("documentChange"in t){t.documentChange;let n=t.documentChange;n.document,n.document.name,n.document.updateTime;let i=rb(e,n.document.name),s=ry(n.document.updateTime),o=n.document.createTime?ry(n.document.createTime):j.min(),a=new eG({mapValue:{fields:n.document.fields}}),l=eW.newFoundDocument(i,s,o,a);r=new rn(n.targetIds||[],n.removedTargetIds||[],l.key,l)}else if("documentDelete"in t){t.documentDelete;let n=t.documentDelete;n.document;let i=rb(e,n.document),s=n.readTime?ry(n.readTime):j.min(),o=eW.newNoDocument(i,s);r=new rn([],n.removedTargetIds||[],o.key,o)}else if("documentRemove"in t){t.documentRemove;let n=t.documentRemove;n.document;let i=rb(e,n.document);r=new rn([],n.removedTargetIds||[],i,null)}else{if(!("filter"in t))return S();{t.filter;let e=t.filter;e.targetId;let{count:n=0,unchangedNames:i}=e,s=new t3(n,i);r=new ri(e.targetId,s)}}return r}(this.serializer,e),r=function(e){if(!("targetChange"in e))return j.min();let t=e.targetChange;return t.targetIds&&t.targetIds.length?j.min():t.readTime?ry(t.readTime):j.min()}(e);return this.listener.p_(t,r)}y_(e){let t={};t.database=rT(this.serializer),t.addTarget=function(e,t){let r;let n=t.target;if((r=to(n)?{documents:{documents:[rI(e,n.path)]}}:{query:function(e,t){var r,n;let i;let s={structuredQuery:{}},o=t.path;null!==t.collectionGroup?(i=o,s.structuredQuery.from=[{collectionId:t.collectionGroup,allDescendants:!0}]):(i=o.popLast(),s.structuredQuery.from=[{collectionId:o.lastSegment()}]),s.parent=rI(e,i);let a=function(e){if(0!==e.length)return function e(t){return t instanceof e0?function(e){if("=="===e.op){if(eq(e.value))return{unaryFilter:{field:rA(e.field),op:"IS_NAN"}};if(ej(e.value))return{unaryFilter:{field:rA(e.field),op:"IS_NULL"}}}else if("!="===e.op){if(eq(e.value))return{unaryFilter:{field:rA(e.field),op:"IS_NOT_NAN"}};if(ej(e.value))return{unaryFilter:{field:rA(e.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:rA(e.field),op:rc[e.op],value:e.value}}}(t):t instanceof e1?function(t){let r=t.getFilters().map(t=>e(t));return 1===r.length?r[0]:{compositeFilter:{op:rf[t.op],filters:r}}}(t):S()}(e1.create(e,"and"))}(t.filters);a&&(s.structuredQuery.where=a);let l=function(e){if(0!==e.length)return e.map(e=>({field:rA(e.field),direction:rh[e.dir]}))}(t.orderBy);l&&(s.structuredQuery.orderBy=l);let u=rp(e,t.limit);return null!==u&&(s.structuredQuery.limit=u),t.startAt&&(s.structuredQuery.startAt={before:(r=t.startAt).inclusive,values:r.position}),t.endAt&&(s.structuredQuery.endAt={before:!(n=t.endAt).inclusive,values:n.position}),{ht:s,parent:i}}(e,n).ht}).targetId=t.targetId,t.resumeToken.approximateByteSize()>0){r.resumeToken=rm(e,t.resumeToken);let n=rp(e,t.expectedCount);null!==n&&(r.expectedCount=n)}else if(t.snapshotVersion.compareTo(j.min())>0){r.readTime=rg(e,t.snapshotVersion.toTimestamp());let n=rp(e,t.expectedCount);null!==n&&(r.expectedCount=n)}return r}(this.serializer,e);let r=function(e,t){let r=function(e){switch(e){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return S()}}(t.purpose);return null==r?null:{"goog-listen-tags":r}}(this.serializer,e);r&&(t.labels=r),this.I_(t)}w_(e){let t={};t.database=rT(this.serializer),t.removeTarget=e,this.I_(t)}}class nI extends nE{constructor(e,t,r,n,i,s){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",t,r,n,s),this.serializer=i}get S_(){return this.__>0}start(){this.lastStreamToken=void 0,super.start()}A_(){this.S_&&this.b_([])}f_(e,t){return this.connection.Wo("Write",e,t)}g_(e){return e.streamToken||S(),this.lastStreamToken=e.streamToken,e.writeResults&&0!==e.writeResults.length&&S(),this.listener.D_()}onNext(e){var t,r;e.streamToken||S(),this.lastStreamToken=e.streamToken,this.a_.reset();let n=(t=e.writeResults,r=e.commitTime,t&&t.length>0?(void 0!==r||S(),t.map(e=>{let t;return(t=e.updateTime?ry(e.updateTime):ry(r)).isEqual(j.min())&&(t=ry(r)),new tj(t,e.transformResults||[])})):[]),i=ry(e.commitTime);return this.listener.v_(i,n)}C_(){let e={};e.database=rT(this.serializer),this.I_(e)}b_(e){let t={streamToken:this.lastStreamToken,writes:e.map(e=>(function(e,t){var r;let n;if(t instanceof tW)n={update:rC(e,t.key,t.value)};else if(t instanceof tZ)n={delete:rE(e,t.key)};else if(t instanceof tQ)n={update:rC(e,t.key,t.data),updateMask:function(e){let t=[];return e.fields.forEach(e=>t.push(e.canonicalString())),{fieldPaths:t}}(t.fieldMask)};else{if(!(t instanceof t0))return S();n={verify:rE(e,t.key)}}return t.fieldTransforms.length>0&&(n.updateTransforms=t.fieldTransforms.map(e=>(function(e,t){let r=t.transform;if(r instanceof tO)return{fieldPath:t.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(r instanceof tP)return{fieldPath:t.field.canonicalString(),appendMissingElements:{values:r.elements}};if(r instanceof tM)return{fieldPath:t.field.canonicalString(),removeAllFromArray:{values:r.elements}};if(r instanceof tV)return{fieldPath:t.field.canonicalString(),increment:r.Ie};throw S()})(0,e))),t.precondition.isNone||(n.currentDocument=void 0!==(r=t.precondition).updateTime?{updateTime:rg(e,r.updateTime.toTimestamp())}:void 0!==r.exists?{exists:r.exists}:S()),n})(this.serializer,e))};this.I_(t)}}/**
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
 */class nT{}class nS extends nT{constructor(e,t,r,n){super(),this.authCredentials=e,this.appCheckCredentials=t,this.connection=r,this.serializer=n,this.F_=!1}M_(){if(this.F_)throw new A(C.FAILED_PRECONDITION,"The client has already been terminated.")}So(e,t,r,n){return this.M_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,s])=>this.connection.So(e,rw(t,r),n,i,s)).catch(e=>{throw"FirebaseError"===e.name?(e.code===C.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),e):new A(C.UNKNOWN,e.toString())})}Co(e,t,r,n,i){return this.M_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([s,o])=>this.connection.Co(e,rw(t,r),n,s,o,i)).catch(e=>{throw"FirebaseError"===e.name?(e.code===C.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),e):new A(C.UNKNOWN,e.toString())})}terminate(){this.F_=!0,this.connection.terminate()}}class nC{constructor(e,t){this.asyncQueue=e,this.onlineStateHandler=t,this.state="Unknown",this.x_=0,this.O_=null,this.N_=!0}B_(){0===this.x_&&(this.L_("Unknown"),this.O_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.O_=null,this.k_("Backend didn't respond within 10 seconds."),this.L_("Offline"),Promise.resolve())))}q_(e){"Online"===this.state?this.L_("Unknown"):(this.x_++,this.x_>=1&&(this.Q_(),this.k_(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.L_("Offline")))}set(e){this.Q_(),this.x_=0,"Online"===e&&(this.N_=!1),this.L_(e)}L_(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}k_(e){let t=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.N_?(b(t),this.N_=!1):E("OnlineStateTracker",t)}Q_(){null!==this.O_&&(this.O_.cancel(),this.O_=null)}}/**
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
 */let nA="RemoteStore";class nk{constructor(e,t,r,n,i){this.localStore=e,this.datastore=t,this.asyncQueue=r,this.remoteSyncer={},this.K_=[],this.U_=new Map,this.W_=new Set,this.G_=[],this.z_=i,this.z_.To(e=>{r.enqueueAndForget(async()=>{nU(this)&&(E(nA,"Restarting streams for network reachability change."),await async function(e){e.W_.add(4),await nR(e),e.j_.set("Unknown"),e.W_.delete(4),await nx(e)}(this))})}),this.j_=new nC(r,n)}}async function nx(e){if(nU(e))for(let t of e.G_)await t(!0)}async function nR(e){for(let t of e.G_)await t(!1)}function nN(e,t){e.U_.has(t.targetId)||(e.U_.set(t.targetId,t),nM(e)?nL(e):nZ(e).c_()&&nO(e,t))}function nD(e,t){let r=nZ(e);e.U_.delete(t),r.c_()&&nP(e,t),0===e.U_.size&&(r.c_()?r.P_():nU(e)&&e.j_.set("Unknown"))}function nO(e,t){if(e.H_.Ne(t.targetId),t.resumeToken.approximateByteSize()>0||t.snapshotVersion.compareTo(j.min())>0){let r=e.remoteSyncer.getRemoteKeysForTarget(t.targetId).size;t=t.withExpectedCount(r)}nZ(e).y_(t)}function nP(e,t){e.H_.Ne(t),nZ(e).w_(t)}function nL(e){e.H_=new ra({getRemoteKeysForTarget:t=>e.remoteSyncer.getRemoteKeysForTarget(t),lt:t=>e.U_.get(t)||null,it:()=>e.datastore.serializer.databaseId}),nZ(e).start(),e.j_.B_()}function nM(e){return nU(e)&&!nZ(e).u_()&&e.U_.size>0}function nU(e){return 0===e.W_.size}async function nV(e){e.j_.set("Online")}async function nF(e){e.U_.forEach((t,r)=>{nO(e,t)})}async function nB(e,t){e.H_=void 0,nM(e)?(e.j_.q_(t),nL(e)):e.j_.set("Unknown")}async function nj(e,t,r){if(e.j_.set("Online"),t instanceof rs&&2===t.state&&t.cause)try{await async function(e,t){let r=t.cause;for(let n of t.targetIds)e.U_.has(n)&&(await e.remoteSyncer.rejectListen(n,r),e.U_.delete(n),e.H_.removeTarget(n))}(e,t)}catch(r){E(nA,"Failed to remove targets %s: %s ",t.targetIds.join(","),r),await nq(e,r)}else if(t instanceof rn?e.H_.We(t):t instanceof ri?e.H_.Ze(t):e.H_.je(t),!r.isEqual(j.min()))try{let t=await nt(e.localStore);r.compareTo(t)>=0&&await function(e,t){let r=e.H_.ot(t);return r.targetChanges.forEach((r,n)=>{if(r.resumeToken.approximateByteSize()>0){let i=e.U_.get(n);i&&e.U_.set(n,i.withResumeToken(r.resumeToken,t))}}),r.targetMismatches.forEach((t,r)=>{let n=e.U_.get(t);if(!n)return;e.U_.set(t,n.withResumeToken(ec.EMPTY_BYTE_STRING,n.snapshotVersion)),nP(e,t);let i=new rR(n.target,t,r,n.sequenceNumber);nO(e,i)}),e.remoteSyncer.applyRemoteEvent(r)}(e,r)}catch(t){E(nA,"Failed to raise snapshot:",t),await nq(e,t)}}async function nq(e,t,r){if(!Y(t))throw t;e.W_.add(1),await nR(e),e.j_.set("Offline"),r||(r=()=>nt(e.localStore)),e.asyncQueue.enqueueRetryable(async()=>{E(nA,"Retrying IndexedDB access"),await r(),e.W_.delete(1),await nx(e)})}function n$(e,t){return t().catch(r=>nq(e,r,t))}async function nz(e){let t=n0(e),r=e.K_.length>0?e.K_[e.K_.length-1].batchId:-1;for(;nU(e)&&e.K_.length<10;)try{let n=await function(e,t){return e.persistence.runTransaction("Get next mutation batch","readonly",r=>(void 0===t&&(t=-1),e.mutationQueue.getNextMutationBatchAfterBatchId(r,t)))}(e.localStore,r);if(null===n){0===e.K_.length&&t.P_();break}r=n.batchId,function(e,t){e.K_.push(t);let r=n0(e);r.c_()&&r.S_&&r.b_(t.mutations)}(e,n)}catch(t){await nq(e,t)}nH(e)&&nK(e)}function nH(e){return nU(e)&&!n0(e).u_()&&e.K_.length>0}function nK(e){n0(e).start()}async function nG(e){n0(e).C_()}async function nW(e){let t=n0(e);for(let r of e.K_)t.b_(r.mutations)}async function nQ(e,t,r){let n=e.K_.shift(),i=t2.from(n,t,r);await n$(e,()=>e.remoteSyncer.applySuccessfulWrite(i)),await nz(e)}async function nX(e,t){t&&n0(e).S_&&await async function(e,t){var r;if(function(e){switch(e){case C.OK:return S();case C.CANCELLED:case C.UNKNOWN:case C.DEADLINE_EXCEEDED:case C.RESOURCE_EXHAUSTED:case C.INTERNAL:case C.UNAVAILABLE:case C.UNAUTHENTICATED:return!1;case C.INVALID_ARGUMENT:case C.NOT_FOUND:case C.ALREADY_EXISTS:case C.PERMISSION_DENIED:case C.FAILED_PRECONDITION:case C.ABORTED:case C.OUT_OF_RANGE:case C.UNIMPLEMENTED:case C.DATA_LOSS:return!0;default:return S()}}(r=t.code)&&r!==C.ABORTED){let r=e.K_.shift();n0(e).h_(),await n$(e,()=>e.remoteSyncer.rejectFailedWrite(r.batchId,t)),await nz(e)}}(e,t),nH(e)&&nK(e)}async function nJ(e,t){e.asyncQueue.verifyOperationInProgress(),E(nA,"RemoteStore received new credentials");let r=nU(e);e.W_.add(3),await nR(e),r&&e.j_.set("Unknown"),await e.remoteSyncer.handleCredentialChange(t),e.W_.delete(3),await nx(e)}async function nY(e,t){t?(e.W_.delete(2),await nx(e)):t||(e.W_.add(2),await nR(e),e.j_.set("Unknown"))}function nZ(e){var t,r,n;return e.J_||(e.J_=(t=e.datastore,r=e.asyncQueue,n={xo:nV.bind(null,e),No:nF.bind(null,e),Lo:nB.bind(null,e),p_:nj.bind(null,e)},t.M_(),new nb(r,t.connection,t.authCredentials,t.appCheckCredentials,t.serializer,n)),e.G_.push(async t=>{t?(e.J_.h_(),nM(e)?nL(e):e.j_.set("Unknown")):(await e.J_.stop(),e.H_=void 0)})),e.J_}function n0(e){var t,r,n;return e.Y_||(e.Y_=(t=e.datastore,r=e.asyncQueue,n={xo:()=>Promise.resolve(),No:nG.bind(null,e),Lo:nX.bind(null,e),D_:nW.bind(null,e),v_:nQ.bind(null,e)},t.M_(),new nI(r,t.connection,t.authCredentials,t.appCheckCredentials,t.serializer,n)),e.G_.push(async t=>{t?(e.Y_.h_(),await nz(e)):(await e.Y_.stop(),e.K_.length>0&&(E(nA,`Stopping write stream with ${e.K_.length} pending writes`),e.K_=[]))})),e.Y_}/**
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
 */class n1{constructor(e,t,r,n,i){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=r,this.op=n,this.removalCallback=i,this.deferred=new k,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(e=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,t,r,n,i){let s=new n1(e,t,Date.now()+r,n,i);return s.start(r),s}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){null!==this.timerHandle&&(this.clearTimeout(),this.deferred.reject(new A(C.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>null!==this.timerHandle?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){null!==this.timerHandle&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function n2(e,t){if(b("AsyncQueue",`${t}: ${e}`),Y(e))return new A(C.UNAVAILABLE,`${t}: ${e}`);throw e}/**
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
 */class n6{static emptySet(e){return new n6(e.comparator)}constructor(e){this.comparator=e?(t,r)=>e(t,r)||G.comparator(t.key,r.key):(e,t)=>G.comparator(e.key,t.key),this.keyedMap=tb(),this.sortedSet=new ei(this.comparator)}has(e){return null!=this.keyedMap.get(e)}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){let t=this.keyedMap.get(e);return t?this.sortedSet.indexOf(t):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((t,r)=>(e(t),!1))}add(e){let t=this.delete(e.key);return t.copy(t.keyedMap.insert(e.key,e),t.sortedSet.insert(e,null))}delete(e){let t=this.get(e);return t?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(t)):this}isEqual(e){if(!(e instanceof n6)||this.size!==e.size)return!1;let t=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;t.hasNext();){let e=t.getNext().key,n=r.getNext().key;if(!e.isEqual(n))return!1}return!0}toString(){let e=[];return this.forEach(t=>{e.push(t.toString())}),0===e.length?"DocumentSet ()":"DocumentSet (\n  "+e.join("  \n")+"\n)"}copy(e,t){let r=new n6;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=t,r}}/**
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
 */class n3{constructor(){this.Z_=new ei(G.comparator)}track(e){let t=e.doc.key,r=this.Z_.get(t);r?0!==e.type&&3===r.type?this.Z_=this.Z_.insert(t,e):3===e.type&&1!==r.type?this.Z_=this.Z_.insert(t,{type:r.type,doc:e.doc}):2===e.type&&2===r.type?this.Z_=this.Z_.insert(t,{type:2,doc:e.doc}):2===e.type&&0===r.type?this.Z_=this.Z_.insert(t,{type:0,doc:e.doc}):1===e.type&&0===r.type?this.Z_=this.Z_.remove(t):1===e.type&&2===r.type?this.Z_=this.Z_.insert(t,{type:1,doc:r.doc}):0===e.type&&1===r.type?this.Z_=this.Z_.insert(t,{type:2,doc:e.doc}):S():this.Z_=this.Z_.insert(t,e)}X_(){let e=[];return this.Z_.inorderTraversal((t,r)=>{e.push(r)}),e}}class n5{constructor(e,t,r,n,i,s,o,a,l){this.query=e,this.docs=t,this.oldDocs=r,this.docChanges=n,this.mutatedKeys=i,this.fromCache=s,this.syncStateChanged=o,this.excludesMetadataChanges=a,this.hasCachedResults=l}static fromInitialDocuments(e,t,r,n,i){let s=[];return t.forEach(e=>{s.push({type:0,doc:e})}),new n5(e,t,n6.emptySet(t),s,r,n,!0,!1,i)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&tp(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;let t=this.docChanges,r=e.docChanges;if(t.length!==r.length)return!1;for(let e=0;e<t.length;e++)if(t[e].type!==r[e].type||!t[e].doc.isEqual(r[e].doc))return!1;return!0}}/**
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
 */class n8{constructor(){this.ea=void 0,this.ta=[]}na(){return this.ta.some(e=>e.ra())}}class n4{constructor(){this.queries=n9(),this.onlineState="Unknown",this.ia=new Set}terminate(){!function(e,t){let r=e.queries;e.queries=n9(),r.forEach((e,r)=>{for(let e of r.ta)e.onError(t)})}(this,new A(C.ABORTED,"Firestore shutting down"))}}function n9(){return new tw(e=>tg(e),tp)}async function n7(e,t){let r=3,n=t.query,i=e.queries.get(n);i?!i.na()&&t.ra()&&(r=2):(i=new n8,r=t.ra()?0:1);try{switch(r){case 0:i.ea=await e.onListen(n,!0);break;case 1:i.ea=await e.onListen(n,!1);break;case 2:await e.onFirstRemoteStoreListen(n)}}catch(r){let e=n2(r,`Initialization of query '${tm(t.query)}' failed`);return void t.onError(e)}e.queries.set(n,i),i.ta.push(t),t.sa(e.onlineState),i.ea&&t.oa(i.ea)&&ii(e)}async function ie(e,t){let r=t.query,n=3,i=e.queries.get(r);if(i){let e=i.ta.indexOf(t);e>=0&&(i.ta.splice(e,1),0===i.ta.length?n=t.ra()?0:1:!i.na()&&t.ra()&&(n=2))}switch(n){case 0:return e.queries.delete(r),e.onUnlisten(r,!0);case 1:return e.queries.delete(r),e.onUnlisten(r,!1);case 2:return e.onLastRemoteStoreUnlisten(r);default:return}}function it(e,t){let r=!1;for(let n of t){let t=n.query,i=e.queries.get(t);if(i){for(let e of i.ta)e.oa(n)&&(r=!0);i.ea=n}}r&&ii(e)}function ir(e,t,r){let n=e.queries.get(t);if(n)for(let e of n.ta)e.onError(r);e.queries.delete(t)}function ii(e){e.ia.forEach(e=>{e.next()})}(a=o||(o={}))._a="default",a.Cache="cache";class is{constructor(e,t,r){this.query=e,this.aa=t,this.ua=!1,this.ca=null,this.onlineState="Unknown",this.options=r||{}}oa(e){if(!this.options.includeMetadataChanges){let t=[];for(let r of e.docChanges)3!==r.type&&t.push(r);e=new n5(e.query,e.docs,e.oldDocs,t,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let t=!1;return this.ua?this.la(e)&&(this.aa.next(e),t=!0):this.ha(e,this.onlineState)&&(this.Pa(e),t=!0),this.ca=e,t}onError(e){this.aa.error(e)}sa(e){this.onlineState=e;let t=!1;return this.ca&&!this.ua&&this.ha(this.ca,e)&&(this.Pa(this.ca),t=!0),t}ha(e,t){return!(e.fromCache&&this.ra())||(!this.options.Ta||!("Offline"!==t))&&(!e.docs.isEmpty()||e.hasCachedResults||"Offline"===t)}la(e){if(e.docChanges.length>0)return!0;let t=this.ca&&this.ca.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!t)&&!0===this.options.includeMetadataChanges}Pa(e){e=n5.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.ua=!0,this.aa.next(e)}ra(){return this.options.source!==o.Cache}}/**
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
 */class io{constructor(e){this.key=e}}class ia{constructor(e){this.key=e}}class il{constructor(e,t){this.query=e,this.fa=t,this.ga=null,this.hasCachedResults=!1,this.current=!1,this.pa=tA(),this.mutatedKeys=tA(),this.ya=tv(e),this.wa=new n6(this.ya)}get Sa(){return this.fa}ba(e,t){let r=t?t.Da:new n3,n=t?t.wa:this.wa,i=t?t.mutatedKeys:this.mutatedKeys,s=n,o=!1,a="F"===this.query.limitType&&n.size===this.query.limit?n.last():null,l="L"===this.query.limitType&&n.size===this.query.limit?n.first():null;if(e.inorderTraversal((e,t)=>{let u=n.get(e),h=ty(this.query,t)?t:null,c=!!u&&this.mutatedKeys.has(u.key),f=!!h&&(h.hasLocalMutations||this.mutatedKeys.has(h.key)&&h.hasCommittedMutations),d=!1;u&&h?u.data.isEqual(h.data)?c!==f&&(r.track({type:3,doc:h}),d=!0):this.va(u,h)||(r.track({type:2,doc:h}),d=!0,(a&&this.ya(h,a)>0||l&&0>this.ya(h,l))&&(o=!0)):!u&&h?(r.track({type:0,doc:h}),d=!0):u&&!h&&(r.track({type:1,doc:u}),d=!0,(a||l)&&(o=!0)),d&&(h?(s=s.add(h),i=f?i.add(e):i.delete(e)):(s=s.delete(e),i=i.delete(e)))}),null!==this.query.limit)for(;s.size>this.query.limit;){let e="F"===this.query.limitType?s.last():s.first();s=s.delete(e.key),i=i.delete(e.key),r.track({type:1,doc:e})}return{wa:s,Da:r,ls:o,mutatedKeys:i}}va(e,t){return e.hasLocalMutations&&t.hasCommittedMutations&&!t.hasLocalMutations}applyChanges(e,t,r,n){let i=this.wa;this.wa=e.wa,this.mutatedKeys=e.mutatedKeys;let s=e.Da.X_();s.sort((e,t)=>(function(e,t){let r=e=>{switch(e){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return S()}};return r(e)-r(t)})(e.type,t.type)||this.ya(e.doc,t.doc)),this.Ca(r),n=null!=n&&n;let o=t&&!n?this.Fa():[],a=0===this.pa.size&&this.current&&!n?1:0,l=a!==this.ga;return(this.ga=a,0!==s.length||l)?{snapshot:new n5(this.query,e.wa,i,s,e.mutatedKeys,0===a,l,!1,!!r&&r.resumeToken.approximateByteSize()>0),Ma:o}:{Ma:o}}sa(e){return this.current&&"Offline"===e?(this.current=!1,this.applyChanges({wa:this.wa,Da:new n3,mutatedKeys:this.mutatedKeys,ls:!1},!1)):{Ma:[]}}xa(e){return!this.fa.has(e)&&!!this.wa.has(e)&&!this.wa.get(e).hasLocalMutations}Ca(e){e&&(e.addedDocuments.forEach(e=>this.fa=this.fa.add(e)),e.modifiedDocuments.forEach(e=>{}),e.removedDocuments.forEach(e=>this.fa=this.fa.delete(e)),this.current=e.current)}Fa(){if(!this.current)return[];let e=this.pa;this.pa=tA(),this.wa.forEach(e=>{this.xa(e.key)&&(this.pa=this.pa.add(e.key))});let t=[];return e.forEach(e=>{this.pa.has(e)||t.push(new ia(e))}),this.pa.forEach(r=>{e.has(r)||t.push(new io(r))}),t}Oa(e){this.fa=e.gs,this.pa=tA();let t=this.ba(e.documents);return this.applyChanges(t,!0)}Na(){return n5.fromInitialDocuments(this.query,this.wa,this.mutatedKeys,0===this.ga,this.hasCachedResults)}}let iu="SyncEngine";class ih{constructor(e,t,r){this.query=e,this.targetId=t,this.view=r}}class ic{constructor(e){this.key=e,this.Ba=!1}}class id{constructor(e,t,r,n,i,s){this.localStore=e,this.remoteStore=t,this.eventManager=r,this.sharedClientState=n,this.currentUser=i,this.maxConcurrentLimboResolutions=s,this.La={},this.ka=new tw(e=>tg(e),tp),this.qa=new Map,this.Qa=new Set,this.$a=new ei(G.comparator),this.Ka=new Map,this.Ua=new rQ,this.Wa={},this.Ga=new Map,this.za=rU.Un(),this.onlineState="Unknown",this.ja=void 0}get isPrimaryClient(){return!0===this.ja}}async function ip(e,t,r=!0){let n;let i=iL(e),s=i.ka.get(t);return s?(i.sharedClientState.addLocalQueryTarget(s.targetId),n=s.view.Na()):n=await im(i,t,r,!0),n}async function ig(e,t){let r=iL(e);await im(r,t,!0,!1)}async function im(e,t,r,n){var i,s;let o;let a=await (i=e.localStore,s=tc(t),i.persistence.runTransaction("Allocate target","readwrite",e=>{let t;return i.Hr.getTargetData(e,s).next(r=>r?(t=r,J.resolve(t)):i.Hr.allocateTargetId(e).next(r=>(t=new rR(s,r,"TargetPurposeListen",e.currentSequenceNumber),i.Hr.addTargetData(e,t).next(()=>t))))}).then(e=>{let t=i.Ts.get(e.targetId);return(null===t||e.snapshotVersion.compareTo(t.snapshotVersion)>0)&&(i.Ts=i.Ts.insert(e.targetId,e),i.Is.set(s,e.targetId)),e})),l=a.targetId,u=e.sharedClientState.addLocalQueryTarget(l,r);return n&&(o=await iy(e,t,l,"current"===u,a.resumeToken)),e.isPrimaryClient&&r&&nN(e.remoteStore,a),o}async function iy(e,t,r,n,i){e.Ha=(t,r,n)=>(async function(e,t,r,n){let i=t.view.ba(r);i.ls&&(i=await nn(e.localStore,t.query,!1).then(({documents:e})=>t.view.ba(e,i)));let s=n&&n.targetChanges.get(t.targetId),o=n&&null!=n.targetMismatches.get(t.targetId),a=t.view.applyChanges(i,e.isPrimaryClient,s,o);return iR(e,t.targetId,a.Ma),a.snapshot})(e,t,r,n);let s=await nn(e.localStore,t,!0),o=new il(t,s.gs),a=o.ba(s.documents),l=rr.createSynthesizedTargetChangeForCurrentChange(r,n&&"Offline"!==e.onlineState,i),u=o.applyChanges(a,e.isPrimaryClient,l);iR(e,r,u.Ma);let h=new ih(t,r,o);return e.ka.set(t,h),e.qa.has(r)?e.qa.get(r).push(t):e.qa.set(r,[t]),u.snapshot}async function iv(e,t,r){let n=e.ka.get(t),i=e.qa.get(n.targetId);if(i.length>1)return e.qa.set(n.targetId,i.filter(e=>!tp(e,t))),void e.ka.delete(t);e.isPrimaryClient?(e.sharedClientState.removeLocalQueryTarget(n.targetId),e.sharedClientState.isActiveQueryTarget(n.targetId)||await nr(e.localStore,n.targetId,!1).then(()=>{e.sharedClientState.clearQueryState(n.targetId),r&&nD(e.remoteStore,n.targetId),ik(e,n.targetId)}).catch(X)):(ik(e,n.targetId),await nr(e.localStore,n.targetId,!0))}async function iw(e,t){let r=e.ka.get(t),n=e.qa.get(r.targetId);e.isPrimaryClient&&1===n.length&&(e.sharedClientState.removeLocalQueryTarget(r.targetId),nD(e.remoteStore,r.targetId))}async function i_(e,t,r){var n;let i=(e.remoteStore.remoteSyncer.applySuccessfulWrite=iT.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=iS.bind(null,e),e);try{let e;let s=await function(e,t){let r,n;let i=B.now(),s=t.reduce((e,t)=>e.add(t.key),tA());return e.persistence.runTransaction("Locally write mutations","readwrite",o=>{let a=t_,l=tA();return e.ds.getEntries(o,s).next(e=>{(a=e).forEach((e,t)=>{t.isValidDocument()||(l=l.add(e))})}).next(()=>e.localDocuments.getOverlayedDocuments(o,a)).next(n=>{r=n;let s=[];for(let e of t){let t=function(e,t){let r=null;for(let n of e.fieldTransforms){let e=t.data.field(n.field),i=tD(n.transform,e||null);null!=i&&(null===r&&(r=eG.empty()),r.set(n.field,i))}return r||null}(e,r.get(e.key).overlayedDocument);null!=t&&s.push(new tQ(e.key,t,function e(t){let r=[];return er(t.fields,(t,n)=>{let i=new K([t]);if(e$(n)){let t=e(n.mapValue).fields;if(0===t.length)r.push(i);else for(let e of t)r.push(i.child(e))}else r.push(i)}),new eu(r)}(t.value.mapValue),tq.exists(!0)))}return e.mutationQueue.addMutationBatch(o,i,s,t)}).next(t=>{n=t;let i=t.applyToLocalDocumentSet(r,l);return e.documentOverlayCache.saveOverlays(o,t.batchId,i)})}).then(()=>({batchId:n.batchId,changes:tI(r)}))}(i.localStore,t);i.sharedClientState.addPendingMutation(s.batchId),n=s.batchId,(e=i.Wa[i.currentUser.toKey()])||(e=new ei(V)),e=e.insert(n,r),i.Wa[i.currentUser.toKey()]=e,await iD(i,s.changes),await nz(i.remoteStore)}catch(t){let e=n2(t,"Failed to persist write");r.reject(e)}}async function iE(e,t){try{let r=await function(e,t){let r=t.snapshotVersion,n=e.Ts;return e.persistence.runTransaction("Apply remote event","readwrite-primary",i=>{var s;let o,a;let l=e.ds.newChangeBuffer({trackRemovals:!0});n=e.Ts;let u=[];t.targetChanges.forEach((s,o)=>{var a;let l=n.get(o);if(!l)return;u.push(e.Hr.removeMatchingKeys(i,s.removedDocuments,o).next(()=>e.Hr.addMatchingKeys(i,s.addedDocuments,o)));let h=l.withSequenceNumber(i.currentSequenceNumber);null!==t.targetMismatches.get(o)?h=h.withResumeToken(ec.EMPTY_BYTE_STRING,j.min()).withLastLimboFreeSnapshotVersion(j.min()):s.resumeToken.approximateByteSize()>0&&(h=h.withResumeToken(s.resumeToken,r)),n=n.insert(o,h),a=h,(0===l.resumeToken.approximateByteSize()||a.snapshotVersion.toMicroseconds()-l.snapshotVersion.toMicroseconds()>=3e8||s.addedDocuments.size+s.modifiedDocuments.size+s.removedDocuments.size>0)&&u.push(e.Hr.updateTargetData(i,h))});let h=t_,c=tA();if(t.documentUpdates.forEach(r=>{t.resolvedLimboDocuments.has(r)&&u.push(e.persistence.referenceDelegate.updateLimboDocument(i,r))}),u.push((s=t.documentUpdates,o=tA(),a=tA(),s.forEach(e=>o=o.add(e)),l.getEntries(i,o).next(e=>{let t=t_;return s.forEach((r,n)=>{let i=e.get(r);n.isFoundDocument()!==i.isFoundDocument()&&(a=a.add(r)),n.isNoDocument()&&n.version.isEqual(j.min())?(l.removeEntry(r,n.readTime),t=t.insert(r,n)):!i.isValidDocument()||n.version.compareTo(i.version)>0||0===n.version.compareTo(i.version)&&i.hasPendingWrites?(l.addEntry(n),t=t.insert(r,n)):E(r9,"Ignoring outdated watch update for ",r,". Current version:",i.version," Watch version:",n.version)}),{Vs:t,fs:a}})).next(e=>{h=e.Vs,c=e.fs})),!r.isEqual(j.min())){let t=e.Hr.getLastRemoteSnapshotVersion(i).next(t=>e.Hr.setTargetsMetadata(i,i.currentSequenceNumber,r));u.push(t)}return J.waitFor(u).next(()=>l.apply(i)).next(()=>e.localDocuments.getLocalViewOfDocuments(i,h,c)).next(()=>h)}).then(t=>(e.Ts=n,t))}(e.localStore,t);t.targetChanges.forEach((t,r)=>{let n=e.Ka.get(r);n&&(t.addedDocuments.size+t.modifiedDocuments.size+t.removedDocuments.size<=1||S(),t.addedDocuments.size>0?n.Ba=!0:t.modifiedDocuments.size>0?n.Ba||S():t.removedDocuments.size>0&&(n.Ba||S(),n.Ba=!1))}),await iD(e,r,t)}catch(e){await X(e)}}function ib(e,t,r){var n;if(e.isPrimaryClient&&0===r||!e.isPrimaryClient&&1===r){let r;let i=[];e.ka.forEach((e,r)=>{let n=r.view.sa(t);n.snapshot&&i.push(n.snapshot)}),(n=e.eventManager).onlineState=t,r=!1,n.queries.forEach((e,n)=>{for(let e of n.ta)e.sa(t)&&(r=!0)}),r&&ii(n),i.length&&e.La.p_(i),e.onlineState=t,e.isPrimaryClient&&e.sharedClientState.setOnlineState(t)}}async function iI(e,t,r){e.sharedClientState.updateQueryState(t,"rejected",r);let n=e.Ka.get(t),i=n&&n.key;if(i){let r=new ei(G.comparator);r=r.insert(i,eW.newNoDocument(i,j.min()));let n=tA().add(i),s=new rt(j.min(),new Map,new ei(V),r,n);await iE(e,s),e.$a=e.$a.remove(i),e.Ka.delete(t),iN(e)}else await nr(e.localStore,t,!1).then(()=>ik(e,t,r)).catch(X)}async function iT(e,t){var r;let n=t.batch.batchId;try{let i=await (r=e.localStore).persistence.runTransaction("Acknowledge batch","readwrite-primary",e=>{let n=t.batch.keys(),i=r.ds.newChangeBuffer({trackRemovals:!0});return(function(e,t,r,n){let i=r.batch,s=i.keys(),o=J.resolve();return s.forEach(e=>{o=o.next(()=>n.getEntry(t,e)).next(t=>{let s=r.docVersions.get(e);null!==s||S(),0>t.version.compareTo(s)&&(i.applyToRemoteDocument(t,r),t.isValidDocument()&&(t.setReadTime(r.commitVersion),n.addEntry(t)))})}),o.next(()=>e.mutationQueue.removeMutationBatch(t,i))})(r,e,t,i).next(()=>i.apply(e)).next(()=>r.mutationQueue.performConsistencyCheck(e)).next(()=>r.documentOverlayCache.removeOverlaysForBatchId(e,n,t.batch.batchId)).next(()=>r.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(e,function(e){let t=tA();for(let r=0;r<e.mutationResults.length;++r)e.mutationResults[r].transformResults.length>0&&(t=t.add(e.batch.mutations[r].key));return t}(t))).next(()=>r.localDocuments.getDocuments(e,n))});iA(e,n,null),iC(e,n),e.sharedClientState.updateMutationState(n,"acknowledged"),await iD(e,i)}catch(e){await X(e)}}async function iS(e,t,r){var n;try{let i=await (n=e.localStore).persistence.runTransaction("Reject batch","readwrite-primary",e=>{let r;return n.mutationQueue.lookupMutationBatch(e,t).next(t=>(null!==t||S(),r=t.keys(),n.mutationQueue.removeMutationBatch(e,t))).next(()=>n.mutationQueue.performConsistencyCheck(e)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(e,r,t)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(e,r)).next(()=>n.localDocuments.getDocuments(e,r))});iA(e,t,r),iC(e,t),e.sharedClientState.updateMutationState(t,"rejected",r),await iD(e,i)}catch(e){await X(e)}}function iC(e,t){(e.Ga.get(t)||[]).forEach(e=>{e.resolve()}),e.Ga.delete(t)}function iA(e,t,r){let n=e.Wa[e.currentUser.toKey()];if(n){let i=n.get(t);i&&(r?i.reject(r):i.resolve(),n=n.remove(t)),e.Wa[e.currentUser.toKey()]=n}}function ik(e,t,r=null){for(let n of(e.sharedClientState.removeLocalQueryTarget(t),e.qa.get(t)))e.ka.delete(n),r&&e.La.Ja(n,r);e.qa.delete(t),e.isPrimaryClient&&e.Ua.br(t).forEach(t=>{e.Ua.containsKey(t)||ix(e,t)})}function ix(e,t){e.Qa.delete(t.path.canonicalString());let r=e.$a.get(t);null!==r&&(nD(e.remoteStore,r),e.$a=e.$a.remove(t),e.Ka.delete(r),iN(e))}function iR(e,t,r){for(let n of r)n instanceof io?(e.Ua.addReference(n.key,t),function(e,t){let r=t.key,n=r.path.canonicalString();e.$a.get(r)||e.Qa.has(n)||(E(iu,"New document in limbo: "+r),e.Qa.add(n),iN(e))}(e,n)):n instanceof ia?(E(iu,"Document no longer in limbo: "+n.key),e.Ua.removeReference(n.key,t),e.Ua.containsKey(n.key)||ix(e,n.key)):S()}function iN(e){for(;e.Qa.size>0&&e.$a.size<e.maxConcurrentLimboResolutions;){let t=e.Qa.values().next().value;e.Qa.delete(t);let r=new G(z.fromString(t)),n=e.za.next();e.Ka.set(n,new ic(r)),e.$a=e.$a.insert(r,n),nN(e.remoteStore,new rR(tc(new ta(r.path)),n,"TargetPurposeLimboResolution",Z.ae))}}async function iD(e,t,r){let n=[],i=[],s=[];e.ka.isEmpty()||(e.ka.forEach((o,a)=>{s.push(e.Ha(a,t,r).then(t=>{var s;if((t||r)&&e.isPrimaryClient){let n=t?!t.fromCache:null===(s=null==r?void 0:r.targetChanges.get(a.targetId))||void 0===s?void 0:s.current;e.sharedClientState.updateQueryState(a.targetId,n?"current":"not-current")}if(t){n.push(t);let e=r5.Yi(a.targetId,t);i.push(e)}}))}),await Promise.all(s),e.La.p_(n),await async function(e,t){try{await e.persistence.runTransaction("notifyLocalViewChanges","readwrite",r=>J.forEach(t,t=>J.forEach(t.Hi,n=>e.persistence.referenceDelegate.addReference(r,t.targetId,n)).next(()=>J.forEach(t.Ji,n=>e.persistence.referenceDelegate.removeReference(r,t.targetId,n)))))}catch(e){if(!Y(e))throw e;E(r9,"Failed to update sequence numbers: "+e)}for(let r of t){let t=r.targetId;if(!r.fromCache){let r=e.Ts.get(t),n=r.snapshotVersion,i=r.withLastLimboFreeSnapshotVersion(n);e.Ts=e.Ts.insert(t,i)}}}(e.localStore,i))}async function iO(e,t){var r;if(!e.currentUser.isEqual(t)){E(iu,"User change. New user:",t.toKey());let n=await ne(e.localStore,t);e.currentUser=t,r="'waitForPendingWrites' promise is rejected due to a user change.",e.Ga.forEach(e=>{e.forEach(e=>{e.reject(new A(C.CANCELLED,r))})}),e.Ga.clear(),e.sharedClientState.handleUserChange(t,n.removedBatchIds,n.addedBatchIds),await iD(e,n.Rs)}}function iP(e,t){let r=e.Ka.get(t);if(r&&r.Ba)return tA().add(r.key);{let r=tA(),n=e.qa.get(t);if(!n)return r;for(let t of n){let n=e.ka.get(t);r=r.unionWith(n.view.Sa)}return r}}function iL(e){return e.remoteStore.remoteSyncer.applyRemoteEvent=iE.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=iP.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=iI.bind(null,e),e.La.p_=it.bind(null,e.eventManager),e.La.Ja=ir.bind(null,e.eventManager),e}class iM{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=nv(e.databaseInfo.databaseId),this.sharedClientState=this.Za(e),this.persistence=this.Xa(e),await this.persistence.start(),this.localStore=this.eu(e),this.gcScheduler=this.tu(e,this.localStore),this.indexBackfillerScheduler=this.nu(e,this.localStore)}tu(e,t){return null}nu(e,t){return null}eu(e){var t;return t=this.persistence,new r7(t,new r4,e.initialUser,this.serializer)}Xa(e){return new r1(r6.ri,this.serializer)}Za(e){return new ns}async terminate(){var e,t;null===(e=this.gcScheduler)||void 0===e||e.stop(),null===(t=this.indexBackfillerScheduler)||void 0===t||t.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}iM.provider={build:()=>new iM};class iU extends iM{constructor(e){super(),this.cacheSizeBytes=e}tu(e,t){return this.persistence.referenceDelegate instanceof r3||S(),new rj(this.persistence.referenceDelegate.garbageCollector,e.asyncQueue,t)}Xa(e){let t=void 0!==this.cacheSizeBytes?rM.withCacheSize(this.cacheSizeBytes):rM.DEFAULT;return new r1(e=>r3.ri(e,t),this.serializer)}}class iV{async initialize(e,t){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(t),this.remoteStore=this.createRemoteStore(t),this.eventManager=this.createEventManager(t),this.syncEngine=this.createSyncEngine(t,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=e=>ib(this.syncEngine,e,1),this.remoteStore.remoteSyncer.handleCredentialChange=iO.bind(null,this.syncEngine),await nY(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return new n4}createDatastore(e){let t=nv(e.databaseInfo.databaseId),r=new nm(e.databaseInfo);return new nS(e.authCredentials,e.appCheckCredentials,r,t)}createRemoteStore(e){var t;return t=this.localStore,new nk(t,this.datastore,e.asyncQueue,e=>ib(this.syncEngine,e,0),nl.D()?new nl:new no)}createSyncEngine(e,t){return function(e,t,r,n,i,s,o){let a=new id(e,t,r,n,i,s);return o&&(a.ja=!0),a}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,t)}async terminate(){var e,t;await async function(e){E(nA,"RemoteStore shutting down."),e.W_.add(5),await nR(e),e.z_.shutdown(),e.j_.set("Unknown")}(this.remoteStore),null===(e=this.datastore)||void 0===e||e.terminate(),null===(t=this.eventManager)||void 0===t||t.terminate()}}iV.provider={build:()=>new iV};/**
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
 */class iF{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.iu(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.iu(this.observer.error,e):b("Uncaught Error in snapshot listener:",e.toString()))}su(){this.muted=!0}iu(e,t){setTimeout(()=>{this.muted||e(t)},0)}}/**
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
 */let iB="FirestoreClient";class ij{constructor(e,t,r,n,i){this.authCredentials=e,this.appCheckCredentials=t,this.asyncQueue=r,this.databaseInfo=n,this.user=y.UNAUTHENTICATED,this.clientId=U.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=i,this.authCredentials.start(r,async e=>{E(iB,"Received user=",e.uid),await this.authCredentialListener(e),this.user=e}),this.appCheckCredentials.start(r,e=>(E(iB,"Received new app check token=",e),this.appCheckCredentialListener(e,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();let e=new k;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(r){let t=n2(r,"Failed to shutdown persistence");e.reject(t)}}),e.promise}}async function iq(e,t){e.asyncQueue.verifyOperationInProgress(),E(iB,"Initializing OfflineComponentProvider");let r=e.configuration;await t.initialize(r);let n=r.initialUser;e.setCredentialChangeListener(async e=>{n.isEqual(e)||(await ne(t.localStore,e),n=e)}),t.persistence.setDatabaseDeletedListener(()=>e.terminate()),e._offlineComponents=t}async function i$(e,t){e.asyncQueue.verifyOperationInProgress();let r=await iz(e);E(iB,"Initializing OnlineComponentProvider"),await t.initialize(r,e.configuration),e.setCredentialChangeListener(e=>nJ(t.remoteStore,e)),e.setAppCheckTokenChangeListener((e,r)=>nJ(t.remoteStore,r)),e._onlineComponents=t}async function iz(e){if(!e._offlineComponents){if(e._uninitializedComponentsProvider){E(iB,"Using user provided OfflineComponentProvider");try{await iq(e,e._uninitializedComponentsProvider._offline)}catch(t){if(!("FirebaseError"===t.name?t.code===C.FAILED_PRECONDITION||t.code===C.UNIMPLEMENTED:!("undefined"!=typeof DOMException&&t instanceof DOMException)||22===t.code||20===t.code||11===t.code))throw t;I("Error using user provided cache. Falling back to memory cache: "+t),await iq(e,new iM)}}else E(iB,"Using default OfflineComponentProvider"),await iq(e,new iU(void 0))}return e._offlineComponents}async function iH(e){return e._onlineComponents||(e._uninitializedComponentsProvider?(E(iB,"Using user provided OnlineComponentProvider"),await i$(e,e._uninitializedComponentsProvider._online)):(E(iB,"Using default OnlineComponentProvider"),await i$(e,new iV))),e._onlineComponents}async function iK(e){let t=await iH(e),r=t.eventManager;return r.onListen=ip.bind(null,t.syncEngine),r.onUnlisten=iv.bind(null,t.syncEngine),r.onFirstRemoteStoreListen=ig.bind(null,t.syncEngine),r.onLastRemoteStoreUnlisten=iw.bind(null,t.syncEngine),r}/**
 * @license
 * Copyright 2023 Google LLC
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
 */function iG(e){let t={};return void 0!==e.timeoutSeconds&&(t.timeoutSeconds=e.timeoutSeconds),t}/**
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
 */let iW=new Map;/**
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
 */function iQ(e,t,r){if(!r)throw new A(C.INVALID_ARGUMENT,`Function ${e}() cannot be called with an empty ${t}.`)}function iX(e){if(!G.isDocumentKey(e))throw new A(C.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${e} has ${e.length}.`)}function iJ(e){if(G.isDocumentKey(e))throw new A(C.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${e} has ${e.length}.`)}function iY(e){if(void 0===e)return"undefined";if(null===e)return"null";if("string"==typeof e)return e.length>20&&(e=`${e.substring(0,20)}...`),JSON.stringify(e);if("number"==typeof e||"boolean"==typeof e)return""+e;if("object"==typeof e){if(e instanceof Array)return"an array";{var t;let r=(t=e).constructor?t.constructor.name:null;return r?`a custom ${r} object`:"an object"}}return"function"==typeof e?"a function":S()}function iZ(e,t){if("_delegate"in e&&(e=e._delegate),!(e instanceof t)){if(t.name===e.constructor.name)throw new A(C.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{let r=iY(e);throw new A(C.INVALID_ARGUMENT,`Expected type '${t.name}', but it was: ${r}`)}}return e}/**
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
 */let i0="firestore.googleapis.com";class i1{constructor(e){var t,r;if(void 0===e.host){if(void 0!==e.ssl)throw new A(C.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=i0,this.ssl=!0}else this.host=e.host,this.ssl=null===(t=e.ssl)||void 0===t||t;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,void 0===e.cacheSizeBytes)this.cacheSizeBytes=0x2800000;else{if(-1!==e.cacheSizeBytes&&e.cacheSizeBytes<1048576)throw new A(C.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}(function(e,t,r,n){if(!0===t&&!0===n)throw new A(C.INVALID_ARGUMENT,`${e} and ${r} cannot be used together.`)})("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:void 0===e.experimentalAutoDetectLongPolling?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=iG(null!==(r=e.experimentalLongPollingOptions)&&void 0!==r?r:{}),function(e){if(void 0!==e.timeoutSeconds){if(isNaN(e.timeoutSeconds))throw new A(C.INVALID_ARGUMENT,`invalid long polling timeout: ${e.timeoutSeconds} (must not be NaN)`);if(e.timeoutSeconds<5)throw new A(C.INVALID_ARGUMENT,`invalid long polling timeout: ${e.timeoutSeconds} (minimum allowed value is 5)`);if(e.timeoutSeconds>30)throw new A(C.INVALID_ARGUMENT,`invalid long polling timeout: ${e.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){var t,r;return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&(t=this.experimentalLongPollingOptions,r=e.experimentalLongPollingOptions,t.timeoutSeconds===r.timeoutSeconds)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class i2{constructor(e,t,r,n){this._authCredentials=e,this._appCheckCredentials=t,this._databaseId=r,this._app=n,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new i1({}),this._settingsFrozen=!1,this._terminateTask="notTerminated"}get app(){if(!this._app)throw new A(C.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return"notTerminated"!==this._terminateTask}_setSettings(e){if(this._settingsFrozen)throw new A(C.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new i1(e),void 0!==e.credentials&&(this._authCredentials=function(e){if(!e)return new R;switch(e.type){case"firstParty":return new P(e.sessionIndex||"0",e.iamToken||null,e.authTokenFactory||null);case"provider":return e.client;default:throw new A(C.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return"notTerminated"===this._terminateTask&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){"notTerminated"===this._terminateTask?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(e){let t=iW.get(e);t&&(E("ComponentProvider","Removing Datastore"),iW.delete(e),t.terminate())}(this),Promise.resolve()}}/**
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
 */class i6{constructor(e,t,r){this.converter=t,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new i6(this.firestore,e,this._query)}}class i3{constructor(e,t,r){this.converter=t,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new i5(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new i3(this.firestore,e,this._key)}}class i5 extends i6{constructor(e,t,r){super(e,t,new ta(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){let e=this._path.popLast();return e.isEmpty()?null:new i3(this.firestore,null,new G(e))}withConverter(e){return new i5(this.firestore,e,this._path)}}function i8(e,t,...r){if(e=(0,c.getModularInstance)(e),iQ("collection","path",t),e instanceof i2){let n=z.fromString(t,...r);return iJ(n),new i5(e,null,n)}{if(!(e instanceof i3||e instanceof i5))throw new A(C.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");let n=e._path.child(z.fromString(t,...r));return iJ(n),new i5(e.firestore,null,n)}}function i4(e,t,...r){if(e=(0,c.getModularInstance)(e),1==arguments.length&&(t=U.newId()),iQ("doc","path",t),e instanceof i2){let n=z.fromString(t,...r);return iX(n),new i3(e,null,new G(n))}{if(!(e instanceof i3||e instanceof i5))throw new A(C.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");let n=e._path.child(z.fromString(t,...r));return iX(n),new i3(e.firestore,e instanceof i5?e.converter:null,new G(n))}}/**
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
 */let i9="AsyncQueue";class i7{constructor(e=Promise.resolve()){this.Vu=[],this.mu=!1,this.fu=[],this.gu=null,this.pu=!1,this.yu=!1,this.wu=[],this.a_=new nw(this,"async_queue_retry"),this.Su=()=>{let e=ny();e&&E(i9,"Visibility state changed to "+e.visibilityState),this.a_.t_()},this.bu=e;let t=ny();t&&"function"==typeof t.addEventListener&&t.addEventListener("visibilitychange",this.Su)}get isShuttingDown(){return this.mu}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.Du(),this.vu(e)}enterRestrictedMode(e){if(!this.mu){this.mu=!0,this.yu=e||!1;let t=ny();t&&"function"==typeof t.removeEventListener&&t.removeEventListener("visibilitychange",this.Su)}}enqueue(e){if(this.Du(),this.mu)return new Promise(()=>{});let t=new k;return this.vu(()=>this.mu&&this.yu?Promise.resolve():(e().then(t.resolve,t.reject),t.promise)).then(()=>t.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Vu.push(e),this.Cu()))}async Cu(){if(0!==this.Vu.length){try{await this.Vu[0](),this.Vu.shift(),this.a_.reset()}catch(e){if(!Y(e))throw e;E(i9,"Operation failed with retryable error: "+e)}this.Vu.length>0&&this.a_.Xo(()=>this.Cu())}}vu(e){let t=this.bu.then(()=>(this.pu=!0,e().catch(e=>{let t;throw this.gu=e,this.pu=!1,b("INTERNAL UNHANDLED ERROR: ",(t=e.message||"",e.stack&&(t=e.stack.includes(e.message)?e.stack:e.message+"\n"+e.stack),t)),e}).then(e=>(this.pu=!1,e))));return this.bu=t,t}enqueueAfterDelay(e,t,r){this.Du(),this.wu.indexOf(e)>-1&&(t=0);let n=n1.createAndSchedule(this,e,t,r,e=>this.Fu(e));return this.fu.push(n),n}Du(){this.gu&&S()}verifyOperationInProgress(){}async Mu(){let e;do e=this.bu,await e;while(e!==this.bu)}xu(e){for(let t of this.fu)if(t.timerId===e)return!0;return!1}Ou(e){return this.Mu().then(()=>{for(let t of(this.fu.sort((e,t)=>e.targetTimeMs-t.targetTimeMs),this.fu))if(t.skipDelay(),"all"!==e&&t.timerId===e)break;return this.Mu()})}Nu(e){this.wu.push(e)}Fu(e){let t=this.fu.indexOf(e);this.fu.splice(t,1)}}class se extends i2{constructor(e,t,r,n){super(e,t,r,n),this.type="firestore",this._queue=new i7,this._persistenceKey=(null==n?void 0:n.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){let e=this._firestoreClient.terminate();this._queue=new i7(e),this._firestoreClient=void 0,await e}}}function st(e,t){let r="object"==typeof e?e:(0,l.getApp)(),n=(0,l._getProvider)(r,"firestore").getImmediate({identifier:"string"==typeof e?e:t||eT});if(!n._initialized){let e=(0,c.getDefaultEmulatorHostnameAndPort)("firestore");e&&function(e,t,r,n={}){var i;let s=(e=iZ(e,i2))._getSettings(),o=`${t}:${r}`;if(s.host!==i0&&s.host!==o&&I("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),e._setSettings(Object.assign(Object.assign({},s),{host:o,ssl:!1})),n.mockUserToken){let t,r;if("string"==typeof n.mockUserToken)t=n.mockUserToken,r=y.MOCK_USER;else{t=(0,c.createMockUserToken)(n.mockUserToken,null===(i=e._app)||void 0===i?void 0:i.options.projectId);let s=n.mockUserToken.sub||n.mockUserToken.user_id;if(!s)throw new A(C.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");r=new y(s)}e._authCredentials=new N(new x(t,r))}}(n,...e)}return n}function sr(e){if(e._terminated)throw new A(C.FAILED_PRECONDITION,"The client has already been terminated.");return e._firestoreClient||function(e){var t,r,n,i;let s=e._freezeSettings(),o=(i=e._databaseId,new eI(i,(null===(t=e._app)||void 0===t?void 0:t.options.appId)||"",e._persistenceKey,s.host,s.ssl,s.experimentalForceLongPolling,s.experimentalAutoDetectLongPolling,iG(s.experimentalLongPollingOptions),s.useFetchStreams));e._componentsProvider||(null===(r=s.localCache)||void 0===r?void 0:r._offlineComponentProvider)&&(null===(n=s.localCache)||void 0===n?void 0:n._onlineComponentProvider)&&(e._componentsProvider={_offline:s.localCache._offlineComponentProvider,_online:s.localCache._onlineComponentProvider}),e._firestoreClient=new ij(e._authCredentials,e._appCheckCredentials,e._queue,o,e._componentsProvider&&function(e){let t=null==e?void 0:e._online.build();return{_offline:null==e?void 0:e._offline.build(t),_online:t}}(e._componentsProvider))}(e),e._firestoreClient}/**
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
 */class sn{constructor(e){this._byteString=e}static fromBase64String(e){try{return new sn(ec.fromBase64String(e))}catch(e){throw new A(C.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+e)}}static fromUint8Array(e){return new sn(ec.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
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
 */class si{constructor(...e){for(let t=0;t<e.length;++t)if(0===e[t].length)throw new A(C.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new K(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
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
 */class ss{constructor(e){this._methodName=e}}/**
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
 */class so{constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new A(C.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new A(C.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return V(this._lat,e._lat)||V(this._long,e._long)}}/**
 * @license
 * Copyright 2024 Google LLC
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
 */class sa{constructor(e){this._values=(e||[]).map(e=>e)}toArray(){return this._values.map(e=>e)}isEqual(e){return function(e,t){if(e.length!==t.length)return!1;for(let r=0;r<e.length;++r)if(e[r]!==t[r])return!1;return!0}(this._values,e._values)}}/**
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
 */let sl=/^__.*__$/;class su{constructor(e,t,r){this.data=e,this.fieldMask=t,this.fieldTransforms=r}toMutation(e,t){return null!==this.fieldMask?new tQ(e,this.data,this.fieldMask,t,this.fieldTransforms):new tW(e,this.data,t,this.fieldTransforms)}}function sh(e){switch(e){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw S()}}class sc{constructor(e,t,r,n,i,s){this.settings=e,this.databaseId=t,this.serializer=r,this.ignoreUndefinedProperties=n,void 0===i&&this.Bu(),this.fieldTransforms=i||[],this.fieldMask=s||[]}get path(){return this.settings.path}get Lu(){return this.settings.Lu}ku(e){return new sc(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}qu(e){var t;let r=null===(t=this.path)||void 0===t?void 0:t.child(e),n=this.ku({path:r,Qu:!1});return n.$u(e),n}Ku(e){var t;let r=null===(t=this.path)||void 0===t?void 0:t.child(e),n=this.ku({path:r,Qu:!1});return n.Bu(),n}Uu(e){return this.ku({path:void 0,Qu:!0})}Wu(e){return s_(e,this.settings.methodName,this.settings.Gu||!1,this.path,this.settings.zu)}contains(e){return void 0!==this.fieldMask.find(t=>e.isPrefixOf(t))||void 0!==this.fieldTransforms.find(t=>e.isPrefixOf(t.field))}Bu(){if(this.path)for(let e=0;e<this.path.length;e++)this.$u(this.path.get(e))}$u(e){if(0===e.length)throw this.Wu("Document fields must not be empty");if(sh(this.Lu)&&sl.test(e))throw this.Wu('Document fields cannot begin and end with "__"')}}class sf{constructor(e,t,r){this.databaseId=e,this.ignoreUndefinedProperties=t,this.serializer=r||nv(e)}ju(e,t,r,n=!1){return new sc({Lu:e,methodName:t,zu:r,path:K.emptyPath(),Qu:!1,Gu:n},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function sd(e){let t=e._freezeSettings(),r=nv(e._databaseId);return new sf(e._databaseId,!!t.ignoreUndefinedProperties,r)}function sp(e,t){if(sm(e=(0,c.getModularInstance)(e)))return sy("Unsupported field value:",t,e),sg(e,t);if(e instanceof ss)return function(e,t){if(!sh(t.Lu))throw t.Wu(`${e._methodName}() can only be used with update() and set()`);if(!t.path)throw t.Wu(`${e._methodName}() is not currently supported inside arrays`);let r=e._toFieldTransform(t);r&&t.fieldTransforms.push(r)}(e,t),null;if(void 0===e&&t.ignoreUndefinedProperties)return null;if(t.path&&t.fieldMask.push(t.path),e instanceof Array){if(t.settings.Qu&&4!==t.Lu)throw t.Wu("Nested arrays are not supported");return function(e,t){let r=[],n=0;for(let i of e){let e=sp(i,t.Uu(n));null==e&&(e={nullValue:"NULL_VALUE"}),r.push(e),n++}return{arrayValue:{values:r}}}(e,t)}return function(e,t){var r,n,i;if(null===(e=(0,c.getModularInstance)(e)))return{nullValue:"NULL_VALUE"};if("number"==typeof e)return r=t.serializer,"number"==typeof(i=n=e)&&Number.isInteger(i)&&!ee(i)&&i<=Number.MAX_SAFE_INTEGER&&i>=Number.MIN_SAFE_INTEGER?tR(n):tx(r,n);if("boolean"==typeof e)return{booleanValue:e};if("string"==typeof e)return{stringValue:e};if(e instanceof Date){let r=B.fromDate(e);return{timestampValue:rg(t.serializer,r)}}if(e instanceof B){let r=new B(e.seconds,1e3*Math.floor(e.nanoseconds/1e3));return{timestampValue:rg(t.serializer,r)}}if(e instanceof so)return{geoPointValue:{latitude:e.latitude,longitude:e.longitude}};if(e instanceof sn)return{bytesValue:rm(t.serializer,e._byteString)};if(e instanceof i3){let r=t.databaseId,n=e.firestore._databaseId;if(!n.isEqual(r))throw t.Wu(`Document reference is for database ${n.projectId}/${n.database} but should be for database ${r.projectId}/${r.database}`);return{referenceValue:rv(e.firestore._databaseId||t.databaseId,e._key.path)}}if(e instanceof sa)return{mapValue:{fields:{[eC]:{stringValue:ex},[eR]:{arrayValue:{values:e.toArray().map(e=>{if("number"!=typeof e)throw t.Wu("VectorValues must only contain numeric values.");return tx(t.serializer,e)})}}}}};throw t.Wu(`Unsupported field value: ${iY(e)}`)}(e,t)}function sg(e,t){let r={};return en(e)?t.path&&t.path.length>0&&t.fieldMask.push(t.path):er(e,(e,n)=>{let i=sp(n,t.qu(e));null!=i&&(r[e]=i)}),{mapValue:{fields:r}}}function sm(e){return!("object"!=typeof e||null===e||e instanceof Array||e instanceof Date||e instanceof B||e instanceof so||e instanceof sn||e instanceof i3||e instanceof ss||e instanceof sa)}function sy(e,t,r){if(!sm(r)||!("object"==typeof r&&null!==r&&(Object.getPrototypeOf(r)===Object.prototype||null===Object.getPrototypeOf(r)))){let n=iY(r);throw"an object"===n?t.Wu(e+" a custom object"):t.Wu(e+" "+n)}}let sv=RegExp("[~\\*/\\[\\]]");function sw(e,t,r){if(t.search(sv)>=0)throw s_(`Invalid field path (${t}). Paths must not contain '~', '*', '/', '[', or ']'`,e,!1,void 0,r);try{return new si(...t.split("."))._internalPath}catch(n){throw s_(`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,e,!1,void 0,r)}}function s_(e,t,r,n,i){let s=n&&!n.isEmpty(),o=void 0!==i,a=`Function ${t}() called with invalid data`;r&&(a+=" (via `toFirestore()`)"),a+=". ";let l="";return(s||o)&&(l+=" (found",s&&(l+=` in field ${n}`),o&&(l+=` in document ${i}`),l+=")"),new A(C.INVALID_ARGUMENT,a+e+l)}/**
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
 */class sE{constructor(e,t,r,n,i){this._firestore=e,this._userDataWriter=t,this._key=r,this._document=n,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new i3(this._firestore,this._converter,this._key)}exists(){return null!==this._document}data(){if(this._document){if(this._converter){let e=new sb(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){let t=this._document.data.field(sI("DocumentSnapshot.get",e));if(null!==t)return this._userDataWriter.convertValue(t)}}}class sb extends sE{data(){return super.data()}}function sI(e,t){return"string"==typeof t?sw(e,t):t instanceof si?t._internalPath:t._delegate._internalPath}class sT{}class sS extends sT{}function sC(e,t,...r){let n=[];for(let i of(t instanceof sT&&n.push(t),function(e){let t=e.filter(e=>e instanceof sx).length,r=e.filter(e=>e instanceof sA).length;if(t>1||t>0&&r>0)throw new A(C.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(n=n.concat(r)),n))e=i._apply(e);return e}class sA extends sS{constructor(e,t,r){super(),this._field=e,this._op=t,this._value=r,this.type="where"}static _create(e,t,r){return new sA(e,t,r)}_apply(e){let t=this._parse(e);return sD(e._query,t),new i6(e.firestore,e.converter,tf(e._query,t))}_parse(e){let t=sd(e.firestore);return function(e,t,r,n,i,s,o){let a;if(i.isKeyField()){if("array-contains"===s||"array-contains-any"===s)throw new A(C.INVALID_ARGUMENT,`Invalid Query. You can't perform '${s}' queries on documentId().`);if("in"===s||"not-in"===s){sN(o,s);let t=[];for(let r of o)t.push(sR(n,e,r));a={arrayValue:{values:t}}}else a=sR(n,e,o)}else"in"!==s&&"not-in"!==s&&"array-contains-any"!==s||sN(o,s),a=function(e,t,r,n=!1){return sp(r,e.ju(n?4:3,t))}(r,t,o,"in"===s||"not-in"===s);return e0.create(i,s,a)}(e._query,"where",t,e.firestore._databaseId,this._field,this._op,this._value)}}function sk(e,t,r){let n=sI("where",e);return sA._create(n,t,r)}class sx extends sT{constructor(e,t){super(),this.type=e,this._queryConstraints=t}static _create(e,t){return new sx(e,t)}_parse(e){let t=this._queryConstraints.map(t=>t._parse(e)).filter(e=>e.getFilters().length>0);return 1===t.length?t[0]:e1.create(t,this._getOperator())}_apply(e){let t=this._parse(e);return 0===t.getFilters().length?e:(function(e,t){let r=e;for(let e of t.getFlattenedFilters())sD(r,e),r=tf(r,e)}(e._query,t),new i6(e.firestore,e.converter,tf(e._query,t)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return"and"===this.type?"and":"or"}}function sR(e,t,r){if("string"==typeof(r=(0,c.getModularInstance)(r))){if(""===r)throw new A(C.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!tu(t)&&-1!==r.indexOf("/"))throw new A(C.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${r}' contains a '/' character.`);let n=t.path.child(z.fromString(r));if(!G.isDocumentKey(n))throw new A(C.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${n}' is not because it has an odd number of segments (${n.length}).`);return eV(e,new G(n))}if(r instanceof i3)return eV(e,r._key);throw new A(C.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${iY(r)}.`)}function sN(e,t){if(!Array.isArray(e)||0===e.length)throw new A(C.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${t.toString()}' filters.`)}function sD(e,t){let r=function(e,t){for(let r of e)for(let e of r.getFlattenedFilters())if(t.indexOf(e.op)>=0)return e.op;return null}(e.filters,function(e){switch(e){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(t.op));if(null!==r)throw r===t.op?new A(C.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${t.op.toString()}' filter.`):new A(C.INVALID_ARGUMENT,`Invalid query. You cannot use '${t.op.toString()}' filters with '${r.toString()}' filters.`)}class sO{convertValue(e,t="none"){switch(eN(e)){case 0:return null;case 1:return e.booleanValue;case 2:return ep(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,t);case 5:return e.stringValue;case 6:return this.convertBytes(eg(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,t);case 11:return this.convertObject(e.mapValue,t);case 10:return this.convertVectorValue(e.mapValue);default:throw S()}}convertObject(e,t){return this.convertObjectMap(e.fields,t)}convertObjectMap(e,t="none"){let r={};return er(e,(e,n)=>{r[e]=this.convertValue(n,t)}),r}convertVectorValue(e){var t,r,n;return new sa(null===(n=null===(r=null===(t=e.fields)||void 0===t?void 0:t[eR].arrayValue)||void 0===r?void 0:r.values)||void 0===n?void 0:n.map(e=>ep(e.doubleValue)))}convertGeoPoint(e){return new so(ep(e.latitude),ep(e.longitude))}convertArray(e,t){return(e.values||[]).map(e=>this.convertValue(e,t))}convertServerTimestamp(e,t){switch(t){case"previous":let r=eE(e);return null==r?null:this.convertValue(r,t);case"estimate":return this.convertTimestamp(eb(e));default:return null}}convertTimestamp(e){let t=ed(e);return new B(t.seconds,t.nanos)}convertDocumentKey(e,t){let r=z.fromString(e);rx(r)||S();let n=new eS(r.get(1),r.get(3)),i=new G(r.popFirst(5));return n.isEqual(t)||b(`Document ${i} contains a document reference within a different database (${n.projectId}/${n.database}) which is not supported. It will be treated as a reference in the current database (${t.projectId}/${t.database}) instead.`),i}}/**
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
 */class sP{constructor(e,t){this.hasPendingWrites=e,this.fromCache=t}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class sL extends sE{constructor(e,t,r,n,i,s){super(e,t,r,n,s),this._firestore=e,this._firestoreImpl=e,this.metadata=i}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){let t=new sM(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(t,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,t={}){if(this._document){let r=this._document.data.field(sI("DocumentSnapshot.get",e));if(null!==r)return this._userDataWriter.convertValue(r,t.serverTimestamps)}}}class sM extends sL{data(e={}){return super.data(e)}}class sU{constructor(e,t,r,n){this._firestore=e,this._userDataWriter=t,this._snapshot=n,this.metadata=new sP(n.hasPendingWrites,n.fromCache),this.query=r}get docs(){let e=[];return this.forEach(t=>e.push(t)),e}get size(){return this._snapshot.docs.size}get empty(){return 0===this.size}forEach(e,t){this._snapshot.docs.forEach(r=>{e.call(t,new sM(this._firestore,this._userDataWriter,r.key,r,new sP(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){let t=!!e.includeMetadataChanges;if(t&&this._snapshot.excludesMetadataChanges)throw new A(C.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===t||(this._cachedChanges=function(e,t){if(e._snapshot.oldDocs.isEmpty()){let t=0;return e._snapshot.docChanges.map(r=>{let n=new sM(e._firestore,e._userDataWriter,r.doc.key,r.doc,new sP(e._snapshot.mutatedKeys.has(r.doc.key),e._snapshot.fromCache),e.query.converter);return r.doc,{type:"added",doc:n,oldIndex:-1,newIndex:t++}})}{let r=e._snapshot.oldDocs;return e._snapshot.docChanges.filter(e=>t||3!==e.type).map(t=>{let n=new sM(e._firestore,e._userDataWriter,t.doc.key,t.doc,new sP(e._snapshot.mutatedKeys.has(t.doc.key),e._snapshot.fromCache),e.query.converter),i=-1,s=-1;return 0!==t.type&&(i=r.indexOf(t.doc.key),r=r.delete(t.doc.key)),1!==t.type&&(s=(r=r.add(t.doc)).indexOf(t.doc.key)),{type:function(e){switch(e){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return S()}}(t.type),doc:n,oldIndex:i,newIndex:s}})}}(this,t),this._cachedChangesIncludeMetadataChanges=t),this._cachedChanges}}class sV extends sO{constructor(e){super(),this.firestore=e}convertBytes(e){return new sn(e)}convertReference(e){let t=this.convertDocumentKey(e,this.firestore._databaseId);return new i3(this.firestore,null,t)}}function sF(e){e=iZ(e,i6);let t=iZ(e.firestore,se),r=sr(t),n=new sV(t);return(/**
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
 */function(e){if("L"===e.limitType&&0===e.explicitOrderBy.length)throw new A(C.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}(e._query),(function(e,t,r={}){let n=new k;return e.asyncQueue.enqueueAndForget(async()=>(function(e,t,r,n,i){let s=new iF({next:r=>{s.su(),t.enqueueAndForget(()=>ie(e,o)),r.fromCache&&"server"===n.source?i.reject(new A(C.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):i.resolve(r)},error:e=>i.reject(e)}),o=new is(r,s,{includeMetadataChanges:!0,Ta:!0});return n7(e,o)})(await iK(e),e.asyncQueue,t,r,n)),n.promise})(r,e._query).then(r=>new sU(t,n,e,r)))}function sB(e){return sq(iZ(e.firestore,se),[new tZ(e._key,tq.none())])}function sj(e,t){var r;let n=iZ(e.firestore,se),i=i4(e),s=(r=e.converter)?r.toFirestore(t):t;return sq(n,[(function(e,t,r,n,i,s={}){let o,a;let l=e.ju(s.merge||s.mergeFields?2:0,t,r,i);sy("Data must be an object, but it was:",l,n);let u=sg(n,l);if(s.merge)o=new eu(l.fieldMask),a=l.fieldTransforms;else if(s.mergeFields){let e=[];for(let n of s.mergeFields){let i=function(e,t,r){if((t=(0,c.getModularInstance)(t))instanceof si)return t._internalPath;if("string"==typeof t)return sw(e,t);throw s_("Field path arguments must be of type string or ",e,!1,void 0,r)}(t,n,r);if(!l.contains(i))throw new A(C.INVALID_ARGUMENT,`Field '${i}' is specified in your field mask but missing from your input data.`);(function(e,t){return e.some(e=>e.isEqual(t))})(e,i)||e.push(i)}o=new eu(e),a=l.fieldTransforms.filter(e=>o.covers(e.field))}else o=null,a=l.fieldTransforms;return new su(new eG(u),o,a)})(sd(e.firestore),"addDoc",i._key,s,null!==e.converter,{}).toMutation(i._key,tq.exists(!1))]).then(()=>i)}function sq(e,t){return function(e,t){let r=new k;return e.asyncQueue.enqueueAndForget(async()=>i_(await iH(e).then(e=>e.syncEngine),t,r)),r.promise}(sr(e),t)}new WeakMap,function(e=!0){v=l.SDK_VERSION,(0,l._registerComponent)(new(0,u.Component)("firestore",(t,{instanceIdentifier:r,options:n})=>{let i=t.getProvider("app").getImmediate(),s=new se(new D(t.getProvider("auth-internal")),new M(i,t.getProvider("app-check-internal")),function(e,t){if(!Object.prototype.hasOwnProperty.apply(e.options,["projectId"]))throw new A(C.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new eS(e.options.projectId,t)}(i,r),i);return n=Object.assign({useFetchStreams:e},n),s._setSettings(n),s},"PUBLIC").setMultipleInstances(!0)),(0,l.registerVersion)(g,m,void 0),(0,l.registerVersion)(g,m,"esm2017")}()}),s("cozvr",function(r,n){e(r.exports,"Integer",()=>i),e(r.exports,"Md5",()=>s);var i,s,o="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:void 0!==t?t:"undefined"!=typeof self?self:{},a={};(function(){function e(){this.blockSize=-1,this.blockSize=64,this.g=[,,,,],this.B=Array(this.blockSize),this.o=this.h=0,this.s()}function t(e,t,r){r||(r=0);var n=Array(16);if("string"==typeof t)for(var i=0;16>i;++i)n[i]=t.charCodeAt(r++)|t.charCodeAt(r++)<<8|t.charCodeAt(r++)<<16|t.charCodeAt(r++)<<24;else for(i=0;16>i;++i)n[i]=t[r++]|t[r++]<<8|t[r++]<<16|t[r++]<<24;t=e.g[0],r=e.g[1],i=e.g[2];var s=e.g[3],o=t+(s^r&(i^s))+n[0]+0xd76aa478&0xffffffff;o=s+(i^(t=r+(o<<7&0xffffffff|o>>>25))&(r^i))+n[1]+0xe8c7b756&0xffffffff,o=i+(r^(s=t+(o<<12&0xffffffff|o>>>20))&(t^r))+n[2]+0x242070db&0xffffffff,o=r+(t^(i=s+(o<<17&0xffffffff|o>>>15))&(s^t))+n[3]+0xc1bdceee&0xffffffff,o=t+(s^(r=i+(o<<22&0xffffffff|o>>>10))&(i^s))+n[4]+0xf57c0faf&0xffffffff,o=s+(i^(t=r+(o<<7&0xffffffff|o>>>25))&(r^i))+n[5]+0x4787c62a&0xffffffff,o=i+(r^(s=t+(o<<12&0xffffffff|o>>>20))&(t^r))+n[6]+0xa8304613&0xffffffff,o=r+(t^(i=s+(o<<17&0xffffffff|o>>>15))&(s^t))+n[7]+0xfd469501&0xffffffff,o=t+(s^(r=i+(o<<22&0xffffffff|o>>>10))&(i^s))+n[8]+0x698098d8&0xffffffff,o=s+(i^(t=r+(o<<7&0xffffffff|o>>>25))&(r^i))+n[9]+0x8b44f7af&0xffffffff,o=i+(r^(s=t+(o<<12&0xffffffff|o>>>20))&(t^r))+n[10]+0xffff5bb1&0xffffffff,o=r+(t^(i=s+(o<<17&0xffffffff|o>>>15))&(s^t))+n[11]+0x895cd7be&0xffffffff,o=t+(s^(r=i+(o<<22&0xffffffff|o>>>10))&(i^s))+n[12]+0x6b901122&0xffffffff,o=s+(i^(t=r+(o<<7&0xffffffff|o>>>25))&(r^i))+n[13]+0xfd987193&0xffffffff,o=i+(r^(s=t+(o<<12&0xffffffff|o>>>20))&(t^r))+n[14]+0xa679438e&0xffffffff,o=r+(t^(i=s+(o<<17&0xffffffff|o>>>15))&(s^t))+n[15]+0x49b40821&0xffffffff,r=i+(o<<22&0xffffffff|o>>>10),o=t+(i^s&(r^i))+n[1]+0xf61e2562&0xffffffff,t=r+(o<<5&0xffffffff|o>>>27),o=s+(r^i&(t^r))+n[6]+0xc040b340&0xffffffff,s=t+(o<<9&0xffffffff|o>>>23),o=i+(t^r&(s^t))+n[11]+0x265e5a51&0xffffffff,i=s+(o<<14&0xffffffff|o>>>18),o=r+(s^t&(i^s))+n[0]+0xe9b6c7aa&0xffffffff,r=i+(o<<20&0xffffffff|o>>>12),o=t+(i^s&(r^i))+n[5]+0xd62f105d&0xffffffff,t=r+(o<<5&0xffffffff|o>>>27),o=s+(r^i&(t^r))+n[10]+0x2441453&0xffffffff,s=t+(o<<9&0xffffffff|o>>>23),o=i+(t^r&(s^t))+n[15]+0xd8a1e681&0xffffffff,i=s+(o<<14&0xffffffff|o>>>18),o=r+(s^t&(i^s))+n[4]+0xe7d3fbc8&0xffffffff,r=i+(o<<20&0xffffffff|o>>>12),o=t+(i^s&(r^i))+n[9]+0x21e1cde6&0xffffffff,t=r+(o<<5&0xffffffff|o>>>27),o=s+(r^i&(t^r))+n[14]+0xc33707d6&0xffffffff,s=t+(o<<9&0xffffffff|o>>>23),o=i+(t^r&(s^t))+n[3]+0xf4d50d87&0xffffffff,i=s+(o<<14&0xffffffff|o>>>18),o=r+(s^t&(i^s))+n[8]+0x455a14ed&0xffffffff,r=i+(o<<20&0xffffffff|o>>>12),o=t+(i^s&(r^i))+n[13]+0xa9e3e905&0xffffffff,t=r+(o<<5&0xffffffff|o>>>27),o=s+(r^i&(t^r))+n[2]+0xfcefa3f8&0xffffffff,s=t+(o<<9&0xffffffff|o>>>23),o=i+(t^r&(s^t))+n[7]+0x676f02d9&0xffffffff,i=s+(o<<14&0xffffffff|o>>>18),o=r+(s^t&(i^s))+n[12]+0x8d2a4c8a&0xffffffff,o=t+((r=i+(o<<20&0xffffffff|o>>>12))^i^s)+n[5]+0xfffa3942&0xffffffff,o=s+((t=r+(o<<4&0xffffffff|o>>>28))^r^i)+n[8]+0x8771f681&0xffffffff,o=i+((s=t+(o<<11&0xffffffff|o>>>21))^t^r)+n[11]+0x6d9d6122&0xffffffff,o=r+((i=s+(o<<16&0xffffffff|o>>>16))^s^t)+n[14]+0xfde5380c&0xffffffff,o=t+((r=i+(o<<23&0xffffffff|o>>>9))^i^s)+n[1]+0xa4beea44&0xffffffff,o=s+((t=r+(o<<4&0xffffffff|o>>>28))^r^i)+n[4]+0x4bdecfa9&0xffffffff,o=i+((s=t+(o<<11&0xffffffff|o>>>21))^t^r)+n[7]+0xf6bb4b60&0xffffffff,o=r+((i=s+(o<<16&0xffffffff|o>>>16))^s^t)+n[10]+0xbebfbc70&0xffffffff,o=t+((r=i+(o<<23&0xffffffff|o>>>9))^i^s)+n[13]+0x289b7ec6&0xffffffff,o=s+((t=r+(o<<4&0xffffffff|o>>>28))^r^i)+n[0]+0xeaa127fa&0xffffffff,o=i+((s=t+(o<<11&0xffffffff|o>>>21))^t^r)+n[3]+0xd4ef3085&0xffffffff,o=r+((i=s+(o<<16&0xffffffff|o>>>16))^s^t)+n[6]+0x4881d05&0xffffffff,o=t+((r=i+(o<<23&0xffffffff|o>>>9))^i^s)+n[9]+0xd9d4d039&0xffffffff,o=s+((t=r+(o<<4&0xffffffff|o>>>28))^r^i)+n[12]+0xe6db99e5&0xffffffff,o=i+((s=t+(o<<11&0xffffffff|o>>>21))^t^r)+n[15]+0x1fa27cf8&0xffffffff,o=r+((i=s+(o<<16&0xffffffff|o>>>16))^s^t)+n[2]+0xc4ac5665&0xffffffff,r=i+(o<<23&0xffffffff|o>>>9),o=t+(i^(r|~s))+n[0]+0xf4292244&0xffffffff,t=r+(o<<6&0xffffffff|o>>>26),o=s+(r^(t|~i))+n[7]+0x432aff97&0xffffffff,s=t+(o<<10&0xffffffff|o>>>22),o=i+(t^(s|~r))+n[14]+0xab9423a7&0xffffffff,i=s+(o<<15&0xffffffff|o>>>17),o=r+(s^(i|~t))+n[5]+0xfc93a039&0xffffffff,r=i+(o<<21&0xffffffff|o>>>11),o=t+(i^(r|~s))+n[12]+0x655b59c3&0xffffffff,t=r+(o<<6&0xffffffff|o>>>26),o=s+(r^(t|~i))+n[3]+0x8f0ccc92&0xffffffff,s=t+(o<<10&0xffffffff|o>>>22),o=i+(t^(s|~r))+n[10]+0xffeff47d&0xffffffff,i=s+(o<<15&0xffffffff|o>>>17),o=r+(s^(i|~t))+n[1]+0x85845dd1&0xffffffff,r=i+(o<<21&0xffffffff|o>>>11),o=t+(i^(r|~s))+n[8]+0x6fa87e4f&0xffffffff,t=r+(o<<6&0xffffffff|o>>>26),o=s+(r^(t|~i))+n[15]+0xfe2ce6e0&0xffffffff,s=t+(o<<10&0xffffffff|o>>>22),o=i+(t^(s|~r))+n[6]+0xa3014314&0xffffffff,i=s+(o<<15&0xffffffff|o>>>17),o=r+(s^(i|~t))+n[13]+0x4e0811a1&0xffffffff,r=i+(o<<21&0xffffffff|o>>>11),o=t+(i^(r|~s))+n[4]+0xf7537e82&0xffffffff,t=r+(o<<6&0xffffffff|o>>>26),o=s+(r^(t|~i))+n[11]+0xbd3af235&0xffffffff,s=t+(o<<10&0xffffffff|o>>>22),o=i+(t^(s|~r))+n[2]+0x2ad7d2bb&0xffffffff,i=s+(o<<15&0xffffffff|o>>>17),o=r+(s^(i|~t))+n[9]+0xeb86d391&0xffffffff,e.g[0]=e.g[0]+t&0xffffffff,e.g[1]=e.g[1]+(i+(o<<21&0xffffffff|o>>>11))&0xffffffff,e.g[2]=e.g[2]+i&0xffffffff,e.g[3]=e.g[3]+s&0xffffffff}function r(e,t){this.h=t;for(var r=[],n=!0,i=e.length-1;0<=i;i--){var s=0|e[i];n&&s==t||(r[i]=s,n=!1)}this.g=r}(function(e,t){function r(){}r.prototype=t.prototype,e.D=t.prototype,e.prototype=new r,e.prototype.constructor=e,e.C=function(e,r,n){for(var i=Array(arguments.length-2),s=2;s<arguments.length;s++)i[s-2]=arguments[s];return t.prototype[r].apply(e,i)}})(e,function(){this.blockSize=-1}),e.prototype.s=function(){this.g[0]=0x67452301,this.g[1]=0xefcdab89,this.g[2]=0x98badcfe,this.g[3]=0x10325476,this.o=this.h=0},e.prototype.u=function(e,r){void 0===r&&(r=e.length);for(var n=r-this.blockSize,i=this.B,s=this.h,o=0;o<r;){if(0==s)for(;o<=n;)t(this,e,o),o+=this.blockSize;if("string"==typeof e){for(;o<r;)if(i[s++]=e.charCodeAt(o++),s==this.blockSize){t(this,i),s=0;break}}else for(;o<r;)if(i[s++]=e[o++],s==this.blockSize){t(this,i),s=0;break}}this.h=s,this.o+=r},e.prototype.v=function(){var e=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);e[0]=128;for(var t=1;t<e.length-8;++t)e[t]=0;var r=8*this.o;for(t=e.length-8;t<e.length;++t)e[t]=255&r,r/=256;for(this.u(e),e=Array(16),t=r=0;4>t;++t)for(var n=0;32>n;n+=8)e[r++]=this.g[t]>>>n&255;return e};var n,o={};function l(e){var t;return -128<=e&&128>e?(t=function(e){return new r([0|e],0>e?-1:0)},Object.prototype.hasOwnProperty.call(o,e)?o[e]:o[e]=t(e)):new r([0|e],0>e?-1:0)}function u(e){if(isNaN(e)||!isFinite(e))return h;if(0>e)return g(u(-e));for(var t=[],n=1,i=0;e>=n;i++)t[i]=e/n|0,n*=0x100000000;return new r(t,0)}var h=l(0),c=l(1),f=l(0x1000000);function d(e){if(0!=e.h)return!1;for(var t=0;t<e.g.length;t++)if(0!=e.g[t])return!1;return!0}function p(e){return -1==e.h}function g(e){for(var t=e.g.length,n=[],i=0;i<t;i++)n[i]=~e.g[i];return new r(n,~e.h).add(c)}function m(e,t){return e.add(g(t))}function y(e,t){for(;(65535&e[t])!=e[t];)e[t+1]+=e[t]>>>16,e[t]&=65535,t++}function v(e,t){this.g=e,this.h=t}function w(e,t){if(d(t))throw Error("division by zero");if(d(e))return new v(h,h);if(p(e))return t=w(g(e),t),new v(g(t.g),g(t.h));if(p(t))return t=w(e,g(t)),new v(g(t.g),t.h);if(30<e.g.length){if(p(e)||p(t))throw Error("slowDivide_ only works with positive integers.");for(var r=c,n=t;0>=n.l(e);)r=_(r),n=_(n);var i=E(r,1),s=E(n,1);for(n=E(n,2),r=E(r,2);!d(n);){var o=s.add(n);0>=o.l(e)&&(i=i.add(r),s=o),n=E(n,1),r=E(r,1)}return t=m(e,i.j(t)),new v(i,t)}for(i=h;0<=e.l(t);){for(n=48>=(n=Math.ceil(Math.log(r=Math.max(1,Math.floor(e.m()/t.m())))/Math.LN2))?1:Math.pow(2,n-48),o=(s=u(r)).j(t);p(o)||0<o.l(e);)r-=n,o=(s=u(r)).j(t);d(s)&&(s=c),i=i.add(s),e=m(e,o)}return new v(i,e)}function _(e){for(var t=e.g.length+1,n=[],i=0;i<t;i++)n[i]=e.i(i)<<1|e.i(i-1)>>>31;return new r(n,e.h)}function E(e,t){var n=t>>5;t%=32;for(var i=e.g.length-n,s=[],o=0;o<i;o++)s[o]=0<t?e.i(o+n)>>>t|e.i(o+n+1)<<32-t:e.i(o+n);return new r(s,e.h)}(n=r.prototype).m=function(){if(p(this))return-g(this).m();for(var e=0,t=1,r=0;r<this.g.length;r++){var n=this.i(r);e+=(0<=n?n:0x100000000+n)*t,t*=0x100000000}return e},n.toString=function(e){if(2>(e=e||10)||36<e)throw Error("radix out of range: "+e);if(d(this))return"0";if(p(this))return"-"+g(this).toString(e);for(var t=u(Math.pow(e,6)),r=this,n="";;){var i=w(r,t).g,s=((0<(r=m(r,i.j(t))).g.length?r.g[0]:r.h)>>>0).toString(e);if(d(r=i))return s+n;for(;6>s.length;)s="0"+s;n=s+n}},n.i=function(e){return 0>e?0:e<this.g.length?this.g[e]:this.h},n.l=function(e){return p(e=m(this,e))?-1:d(e)?0:1},n.abs=function(){return p(this)?g(this):this},n.add=function(e){for(var t=Math.max(this.g.length,e.g.length),n=[],i=0,s=0;s<=t;s++){var o=i+(65535&this.i(s))+(65535&e.i(s)),a=(o>>>16)+(this.i(s)>>>16)+(e.i(s)>>>16);i=a>>>16,o&=65535,a&=65535,n[s]=a<<16|o}return new r(n,-0x80000000&n[n.length-1]?-1:0)},n.j=function(e){if(d(this)||d(e))return h;if(p(this))return p(e)?g(this).j(g(e)):g(g(this).j(e));if(p(e))return g(this.j(g(e)));if(0>this.l(f)&&0>e.l(f))return u(this.m()*e.m());for(var t=this.g.length+e.g.length,n=[],i=0;i<2*t;i++)n[i]=0;for(i=0;i<this.g.length;i++)for(var s=0;s<e.g.length;s++){var o=this.i(i)>>>16,a=65535&this.i(i),l=e.i(s)>>>16,c=65535&e.i(s);n[2*i+2*s]+=a*c,y(n,2*i+2*s),n[2*i+2*s+1]+=o*c,y(n,2*i+2*s+1),n[2*i+2*s+1]+=a*l,y(n,2*i+2*s+1),n[2*i+2*s+2]+=o*l,y(n,2*i+2*s+2)}for(i=0;i<t;i++)n[i]=n[2*i+1]<<16|n[2*i];for(i=t;i<2*t;i++)n[i]=0;return new r(n,0)},n.A=function(e){return w(this,e).h},n.and=function(e){for(var t=Math.max(this.g.length,e.g.length),n=[],i=0;i<t;i++)n[i]=this.i(i)&e.i(i);return new r(n,this.h&e.h)},n.or=function(e){for(var t=Math.max(this.g.length,e.g.length),n=[],i=0;i<t;i++)n[i]=this.i(i)|e.i(i);return new r(n,this.h|e.h)},n.xor=function(e){for(var t=Math.max(this.g.length,e.g.length),n=[],i=0;i<t;i++)n[i]=this.i(i)^e.i(i);return new r(n,this.h^e.h)},e.prototype.digest=e.prototype.v,e.prototype.reset=e.prototype.s,e.prototype.update=e.prototype.u,s=a.Md5=e,r.prototype.add=r.prototype.add,r.prototype.multiply=r.prototype.j,r.prototype.modulo=r.prototype.A,r.prototype.compare=r.prototype.l,r.prototype.toNumber=r.prototype.m,r.prototype.toString=r.prototype.toString,r.prototype.getBits=r.prototype.i,r.fromNumber=u,r.fromString=function e(t,r){if(0==t.length)throw Error("number format error: empty string");if(2>(r=r||10)||36<r)throw Error("radix out of range: "+r);if("-"==t.charAt(0))return g(e(t.substring(1),r));if(0<=t.indexOf("-"))throw Error('number format error: interior "-" character');for(var n=u(Math.pow(r,8)),i=h,s=0;s<t.length;s+=8){var o=Math.min(8,t.length-s),a=parseInt(t.substring(s,s+o),r);8>o?(o=u(Math.pow(r,o)),i=i.j(o).add(u(a))):i=(i=i.j(n)).add(u(a))}return i},i=a.Integer=r}).apply(void 0!==o?o:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{})}),s("4rHck",function(r,n){e(r.exports,"XhrIo",()=>i),e(r.exports,"WebChannel",()=>s),e(r.exports,"EventType",()=>o),e(r.exports,"ErrorCode",()=>a),e(r.exports,"Stat",()=>l),e(r.exports,"Event",()=>u),e(r.exports,"getStatEventTarget",()=>h),e(r.exports,"createWebChannelTransport",()=>c);var i,s,o,a,l,u,h,c,f="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:void 0!==t?t:"undefined"!=typeof self?self:{},d={};(function(){var e,t,r,n="function"==typeof Object.defineProperties?Object.defineProperty:function(e,t,r){return e==Array.prototype||e==Object.prototype||(e[t]=r.value),e},p=function(e){e=["object"==typeof globalThis&&globalThis,e,"object"==typeof window&&window,"object"==typeof self&&self,"object"==typeof f&&f];for(var t=0;t<e.length;++t){var r=e[t];if(r&&r.Math==Math)return r}throw Error("Cannot find global object")}(this);!function(e,t){if(t)e:{var r=p;e=e.split(".");for(var i=0;i<e.length-1;i++){var s=e[i];if(!(s in r))break e;r=r[s]}(t=t(i=r[e=e[e.length-1]]))!=i&&null!=t&&n(r,e,{configurable:!0,writable:!0,value:t})}}("Array.prototype.values",function(e){return e||function(){var e,t,r,n,i;return e=this,t=function(e,t){return t},e instanceof String&&(e+=""),r=0,n=!1,(i={next:function(){if(!n&&r<e.length){var i=r++;return{value:t(i,e[i]),done:!1}}return n=!0,{done:!0,value:void 0}}})[Symbol.iterator]=function(){return i},i}});var g=g||{},m=this||self;function y(e){var t=typeof e;return"array"==(t="object"!=t?t:e?Array.isArray(e)?"array":t:"null")||"object"==t&&"number"==typeof e.length}function v(e){var t=typeof e;return"object"==t&&null!=e||"function"==t}function w(e,t,r){return e.call.apply(e.bind,arguments)}function _(e,t,r){if(!e)throw Error();if(2<arguments.length){var n=Array.prototype.slice.call(arguments,2);return function(){var r=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(r,n),e.apply(t,r)}}return function(){return e.apply(t,arguments)}}function E(e,t,r){return(E=Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?w:_).apply(null,arguments)}function b(e,t){var r=Array.prototype.slice.call(arguments,1);return function(){var t=r.slice();return t.push.apply(t,arguments),e.apply(this,t)}}function I(e,t){function r(){}r.prototype=t.prototype,e.aa=t.prototype,e.prototype=new r,e.prototype.constructor=e,e.Qb=function(e,r,n){for(var i=Array(arguments.length-2),s=2;s<arguments.length;s++)i[s-2]=arguments[s];return t.prototype[r].apply(e,i)}}function T(e){let t=e.length;if(0<t){let r=Array(t);for(let n=0;n<t;n++)r[n]=e[n];return r}return[]}function S(e,t){for(let t=1;t<arguments.length;t++){let r=arguments[t];if(y(r)){let t=e.length||0,n=r.length||0;e.length=t+n;for(let i=0;i<n;i++)e[t+i]=r[i]}else e.push(r)}}function C(e){return/^[\s\xa0]*$/.test(e)}function A(){var e=m.navigator;return e&&(e=e.userAgent)?e:""}function k(e){return k[" "](e),e}k[" "]=function(){};var x=-1!=A().indexOf("Gecko")&&!(-1!=A().toLowerCase().indexOf("webkit")&&-1==A().indexOf("Edge"))&&!(-1!=A().indexOf("Trident")||-1!=A().indexOf("MSIE"))&&-1==A().indexOf("Edge");function R(e,t,r){for(let n in e)t.call(r,e[n],n,e)}function N(e){let t={};for(let r in e)t[r]=e[r];return t}let D="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function O(e,t){let r,n;for(let t=1;t<arguments.length;t++){for(r in n=arguments[t])e[r]=n[r];for(let t=0;t<D.length;t++)r=D[t],Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}}var P=new class{constructor(e,t){this.i=e,this.j=t,this.h=0,this.g=null}get(){let e;return 0<this.h?(this.h--,e=this.g,this.g=e.next,e.next=null):e=this.i(),e}}(()=>new L,e=>e.reset());class L{constructor(){this.next=this.g=this.h=null}set(e,t){this.h=e,this.g=t,this.next=null}reset(){this.next=this.g=this.h=null}}let M,U=!1,V=new class{constructor(){this.h=this.g=null}add(e,t){let r=P.get();r.set(e,t),this.h?this.h.next=r:this.g=r,this.h=r}},F=()=>{let e=m.Promise.resolve(void 0);M=()=>{e.then(B)}};var B=()=>{let e;for(var t;e=null,V.g&&(e=V.g,V.g=V.g.next,V.g||(V.h=null),e.next=null),t=e;){try{t.h.call(t.g)}catch(e){!function(e){m.setTimeout(()=>{throw e},0)}(e)}P.j(t),100>P.h&&(P.h++,t.next=P.g,P.g=t)}U=!1};function j(){this.s=this.s,this.C=this.C}function q(e,t){this.type=e,this.g=this.target=t,this.defaultPrevented=!1}j.prototype.s=!1,j.prototype.ma=function(){this.s||(this.s=!0,this.N())},j.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()},q.prototype.h=function(){this.defaultPrevented=!0};var $=function(){if(!m.addEventListener||!Object.defineProperty)return!1;var e=!1,t=Object.defineProperty({},"passive",{get:function(){e=!0}});try{let e=()=>{};m.addEventListener("test",e,t),m.removeEventListener("test",e,t)}catch(e){}return e}();function z(e,t){if(q.call(this,e?e.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,e){var r=this.type=e.type,n=e.changedTouches&&e.changedTouches.length?e.changedTouches[0]:null;if(this.target=e.target||e.srcElement,this.g=t,t=e.relatedTarget){if(x){e:{try{k(t.nodeName);var i=!0;break e}catch(e){}i=!1}i||(t=null)}}else"mouseover"==r?t=e.fromElement:"mouseout"==r&&(t=e.toElement);this.relatedTarget=t,n?(this.clientX=void 0!==n.clientX?n.clientX:n.pageX,this.clientY=void 0!==n.clientY?n.clientY:n.pageY,this.screenX=n.screenX||0,this.screenY=n.screenY||0):(this.clientX=void 0!==e.clientX?e.clientX:e.pageX,this.clientY=void 0!==e.clientY?e.clientY:e.pageY,this.screenX=e.screenX||0,this.screenY=e.screenY||0),this.button=e.button,this.key=e.key||"",this.ctrlKey=e.ctrlKey,this.altKey=e.altKey,this.shiftKey=e.shiftKey,this.metaKey=e.metaKey,this.pointerId=e.pointerId||0,this.pointerType="string"==typeof e.pointerType?e.pointerType:H[e.pointerType]||"",this.state=e.state,this.i=e,e.defaultPrevented&&z.aa.h.call(this)}}I(z,q);var H={2:"touch",3:"pen",4:"mouse"};z.prototype.h=function(){z.aa.h.call(this);var e=this.i;e.preventDefault?e.preventDefault():e.returnValue=!1};var K="closure_listenable_"+(1e6*Math.random()|0),G=0;function W(e,t,r,n,i){this.listener=e,this.proxy=null,this.src=t,this.type=r,this.capture=!!n,this.ha=i,this.key=++G,this.da=this.fa=!1}function Q(e){e.da=!0,e.listener=null,e.proxy=null,e.src=null,e.ha=null}function X(e){this.src=e,this.g={},this.h=0}function J(e,t){var r=t.type;if(r in e.g){var n,i=e.g[r],s=Array.prototype.indexOf.call(i,t,void 0);(n=0<=s)&&Array.prototype.splice.call(i,s,1),n&&(Q(t),0==e.g[r].length&&(delete e.g[r],e.h--))}}function Y(e,t,r,n){for(var i=0;i<e.length;++i){var s=e[i];if(!s.da&&s.listener==t&&!!r==s.capture&&s.ha==n)return i}return -1}X.prototype.add=function(e,t,r,n,i){var s=e.toString();(e=this.g[s])||(e=this.g[s]=[],this.h++);var o=Y(e,t,n,i);return -1<o?(t=e[o],r||(t.fa=!1)):((t=new W(t,this.src,s,!!n,i)).fa=r,e.push(t)),t};var Z="closure_lm_"+(1e6*Math.random()|0),ee={};function et(e,t,r,n,i,s){if(!t)throw Error("Invalid event type");var o=v(i)?!!i.capture:!!i,a=es(e);if(a||(e[Z]=a=new X(e)),(r=a.add(t,r,n,o,s)).proxy)return r;if(n=function e(t){return ei.call(e.src,e.listener,t)},r.proxy=n,n.src=e,n.listener=r,e.addEventListener)$||(i=o),void 0===i&&(i=!1),e.addEventListener(t.toString(),n,i);else if(e.attachEvent)e.attachEvent(en(t.toString()),n);else if(e.addListener&&e.removeListener)e.addListener(n);else throw Error("addEventListener and attachEvent are unavailable.");return r}function er(e){if("number"!=typeof e&&e&&!e.da){var t=e.src;if(t&&t[K])J(t.i,e);else{var r=e.type,n=e.proxy;t.removeEventListener?t.removeEventListener(r,n,e.capture):t.detachEvent?t.detachEvent(en(r),n):t.addListener&&t.removeListener&&t.removeListener(n),(r=es(t))?(J(r,e),0==r.h&&(r.src=null,t[Z]=null)):Q(e)}}}function en(e){return e in ee?ee[e]:ee[e]="on"+e}function ei(e,t){if(e.da)e=!0;else{t=new z(t,this);var r=e.listener,n=e.ha||e.src;e.fa&&er(e),e=r.call(n,t)}return e}function es(e){return(e=e[Z])instanceof X?e:null}var eo="__closure_events_fn_"+(1e9*Math.random()>>>0);function ea(e){return"function"==typeof e?e:(e[eo]||(e[eo]=function(t){return e.handleEvent(t)}),e[eo])}function el(){j.call(this),this.i=new X(this),this.M=this,this.F=null}function eu(e,t){var r,n=e.F;if(n)for(r=[];n;n=n.F)r.push(n);if(e=e.M,n=t.type||t,"string"==typeof t)t=new q(t,e);else if(t instanceof q)t.target=t.target||e;else{var i=t;O(t=new q(n,e),i)}if(i=!0,r)for(var s=r.length-1;0<=s;s--){var o=t.g=r[s];i=eh(o,n,!0,t)&&i}if(i=eh(o=t.g=e,n,!0,t)&&i,i=eh(o,n,!1,t)&&i,r)for(s=0;s<r.length;s++)i=eh(o=t.g=r[s],n,!1,t)&&i}function eh(e,t,r,n){if(!(t=e.i.g[String(t)]))return!0;t=t.concat();for(var i=!0,s=0;s<t.length;++s){var o=t[s];if(o&&!o.da&&o.capture==r){var a=o.listener,l=o.ha||o.src;o.fa&&J(e.i,o),i=!1!==a.call(l,n)&&i}}return i&&!n.defaultPrevented}function ec(e,t,r){if("function"==typeof e)r&&(e=E(e,r));else if(e&&"function"==typeof e.handleEvent)e=E(e.handleEvent,e);else throw Error("Invalid listener argument");return 0x7fffffff<Number(t)?-1:m.setTimeout(e,t||0)}I(el,j),el.prototype[K]=!0,el.prototype.removeEventListener=function(e,t,r,n){!function e(t,r,n,i,s){if(Array.isArray(r))for(var o=0;o<r.length;o++)e(t,r[o],n,i,s);else(i=v(i)?!!i.capture:!!i,n=ea(n),t&&t[K])?(t=t.i,(r=String(r).toString())in t.g&&-1<(n=Y(o=t.g[r],n,i,s))&&(Q(o[n]),Array.prototype.splice.call(o,n,1),0==o.length&&(delete t.g[r],t.h--))):t&&(t=es(t))&&(r=t.g[r.toString()],t=-1,r&&(t=Y(r,n,i,s)),(n=-1<t?r[t]:null)&&er(n))}(this,e,t,r,n)},el.prototype.N=function(){if(el.aa.N.call(this),this.i){var e,t=this.i;for(e in t.g){for(var r=t.g[e],n=0;n<r.length;n++)Q(r[n]);delete t.g[e],t.h--}}this.F=null},el.prototype.K=function(e,t,r,n){return this.i.add(String(e),t,!1,r,n)},el.prototype.L=function(e,t,r,n){return this.i.add(String(e),t,!0,r,n)};class ef extends j{constructor(e,t){super(),this.m=e,this.l=t,this.h=null,this.i=!1,this.g=null}j(e){this.h=arguments,this.g?this.i=!0:function e(t){t.g=ec(()=>{t.g=null,t.i&&(t.i=!1,e(t))},t.l);let r=t.h;t.h=null,t.m.apply(null,r)}(this)}N(){super.N(),this.g&&(m.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function ed(e){j.call(this),this.h=e,this.g={}}I(ed,j);var ep=[];function eg(e){R(e.g,function(e,t){this.g.hasOwnProperty(t)&&er(e)},e),e.g={}}ed.prototype.N=function(){ed.aa.N.call(this),eg(this)},ed.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var em=m.JSON.stringify,ey=m.JSON.parse,ev=class{stringify(e){return m.JSON.stringify(e,void 0)}parse(e){return m.JSON.parse(e,void 0)}};function ew(){}function e_(e){return e.h||(e.h=e.i())}function eE(){}ew.prototype.h=null;var eb={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function eI(){q.call(this,"d")}function eT(){q.call(this,"c")}I(eI,q),I(eT,q);var eS={},eC=null;function eA(){return eC=eC||new el}function ek(e){q.call(this,eS.La,e)}function ex(e){let t=eA();eu(t,new ek(t))}function eR(e,t){q.call(this,eS.STAT_EVENT,e),this.stat=t}function eN(e){let t=eA();eu(t,new eR(t,e))}function eD(e,t){q.call(this,eS.Ma,e),this.size=t}function eO(e,t){if("function"!=typeof e)throw Error("Fn must not be null and must be a function");return m.setTimeout(function(){e()},t)}function eP(){this.g=!0}function eL(e,t,r,n){e.info(function(){return"XMLHTTP TEXT ("+t+"): "+function(e,t){if(!e.g)return t;if(!t)return null;try{var r=JSON.parse(t);if(r){for(e=0;e<r.length;e++)if(Array.isArray(r[e])){var n=r[e];if(!(2>n.length)){var i=n[1];if(Array.isArray(i)&&!(1>i.length)){var s=i[0];if("noop"!=s&&"stop"!=s&&"close"!=s)for(var o=1;o<i.length;o++)i[o]=""}}}}return em(r)}catch(e){return t}}(e,r)+(n?" "+n:"")})}eS.La="serverreachability",I(ek,q),eS.STAT_EVENT="statevent",I(eR,q),eS.Ma="timingevent",I(eD,q),eP.prototype.xa=function(){this.g=!1},eP.prototype.info=function(){};var eM={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},eU={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"};function eV(){}function eF(e,t,r,n){this.j=e,this.i=t,this.l=r,this.R=n||1,this.U=new ed(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new eB}function eB(){this.i=null,this.g="",this.h=!1}I(eV,ew),eV.prototype.g=function(){return new XMLHttpRequest},eV.prototype.i=function(){return{}},t=new eV;var ej={},eq={};function e$(e,t,r){e.L=1,e.v=ti(e7(t)),e.m=r,e.P=!0,ez(e,null)}function ez(e,t){e.F=Date.now(),eK(e),e.A=e7(e.v);var r=e.A,n=e.R;Array.isArray(n)||(n=[String(n)]),ty(r.i,"t",n),e.C=0,r=e.j.J,e.h=new eB,e.g=t6(e.j,r?t:null,!e.m),0<e.O&&(e.M=new ef(E(e.Y,e,e.g),e.O)),t=e.U,r=e.g,n=e.ca;var i="readystatechange";Array.isArray(i)||(i&&(ep[0]=i.toString()),i=ep);for(var s=0;s<i.length;s++){var o=function e(t,r,n,i,s){if(i&&i.once)return function e(t,r,n,i,s){if(Array.isArray(r)){for(var o=0;o<r.length;o++)e(t,r[o],n,i,s);return null}return n=ea(n),t&&t[K]?t.L(r,n,v(i)?!!i.capture:!!i,s):et(t,r,n,!0,i,s)}(t,r,n,i,s);if(Array.isArray(r)){for(var o=0;o<r.length;o++)e(t,r[o],n,i,s);return null}return n=ea(n),t&&t[K]?t.K(r,n,v(i)?!!i.capture:!!i,s):et(t,r,n,!1,i,s)}(r,i[s],n||t.handleEvent,!1,t.h||t);if(!o)break;t.g[o.key]=o}t=e.H?N(e.H):{},e.m?(e.u||(e.u="POST"),t["Content-Type"]="application/x-www-form-urlencoded",e.g.ea(e.A,e.u,e.m,t)):(e.u="GET",e.g.ea(e.A,e.u,null,t)),ex(),function(e,t,r,n,i,s){e.info(function(){if(e.g){if(s)for(var o="",a=s.split("&"),l=0;l<a.length;l++){var u=a[l].split("=");if(1<u.length){var h=u[0];u=u[1];var c=h.split("_");o=2<=c.length&&"type"==c[1]?o+(h+"=")+u+"&":o+(h+"=redacted&")}}else o=null}else o=s;return"XMLHTTP REQ ("+n+") [attempt "+i+"]: "+t+"\n"+r+"\n"+o})}(e.i,e.u,e.A,e.l,e.R,e.m)}function eH(e){return!!e.g&&"GET"==e.u&&2!=e.L&&e.j.Ca}function eK(e){e.S=Date.now()+e.I,eG(e,e.I)}function eG(e,t){if(null!=e.B)throw Error("WatchDog timer not null");e.B=eO(E(e.ba,e),t)}function eW(e){e.B&&(m.clearTimeout(e.B),e.B=null)}function eQ(e){0==e.j.G||e.J||tY(e.j,e)}function eX(e){eW(e);var t=e.M;t&&"function"==typeof t.ma&&t.ma(),e.M=null,eg(e.U),e.g&&(t=e.g,e.g=null,t.abort(),t.ma())}function eJ(e,t){try{var r=e.j;if(0!=r.G&&(r.g==e||e2(r.h,e))){if(!e.K&&e2(r.h,e)&&3==r.G){try{var n=r.Da.g.parse(t)}catch(e){n=null}if(Array.isArray(n)&&3==n.length){var i=n;if(0==i[0]){e:if(!r.u){if(r.g){if(r.g.F+3e3<e.F)tJ(r),tj(r);else break e}tW(r),eN(18)}}else r.za=i[1],0<r.za-r.T&&37500>i[2]&&r.F&&0==r.v&&!r.C&&(r.C=eO(E(r.Za,r),6e3));if(1>=e1(r.h)&&r.ca){try{r.ca()}catch(e){}r.ca=void 0}}else t0(r,11)}else if((e.K||r.g==e)&&tJ(r),!C(t))for(i=r.Da.g.parse(t),t=0;t<i.length;t++){let a=i[t];if(r.T=a[0],a=a[1],2==r.G){if("c"==a[0]){r.K=a[1],r.ia=a[2];let t=a[3];null!=t&&(r.la=t,r.j.info("VER="+r.la));let i=a[4];null!=i&&(r.Aa=i,r.j.info("SVER="+r.Aa));let l=a[5];null!=l&&"number"==typeof l&&0<l&&(n=1.5*l,r.L=n,r.j.info("backChannelRequestTimeoutMs_="+n)),n=r;let u=e.g;if(u){let e=u.g?u.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(e){var s=n.h;s.g||-1==e.indexOf("spdy")&&-1==e.indexOf("quic")&&-1==e.indexOf("h2")||(s.j=s.l,s.g=new Set,s.h&&(e6(s,s.h),s.h=null))}if(n.D){let e=u.g?u.g.getResponseHeader("X-HTTP-Session-Id"):null;e&&(n.ya=e,tn(n.I,n.D,e))}}if(r.G=3,r.l&&r.l.ua(),r.ba&&(r.R=Date.now()-e.F,r.j.info("Handshake RTT: "+r.R+"ms")),(n=r).qa=t2(n,n.J?n.ia:null,n.W),e.K){e3(n.h,e);var o=n.L;o&&(e.I=o),e.B&&(eW(e),eK(e)),n.g=e}else tG(n);0<r.i.length&&t$(r)}else"stop"!=a[0]&&"close"!=a[0]||t0(r,7)}else 3==r.G&&("stop"==a[0]||"close"==a[0]?"stop"==a[0]?t0(r,7):tB(r):"noop"!=a[0]&&r.l&&r.l.ta(a),r.v=0)}}ex(4)}catch(e){}}eF.prototype.ca=function(e){e=e.target;let t=this.M;t&&3==tM(e)?t.j():this.Y(e)},eF.prototype.Y=function(e){try{if(e==this.g)e:{let c=tM(this.g);var t=this.g.Ba();let f=this.g.Z();if(!(3>c)&&(3!=c||this.g&&(this.h.h||this.g.oa()||tU(this.g)))){this.J||4!=c||7==t||(8==t||0>=f?ex(3):ex(2)),eW(this);var r=this.g.Z();this.X=r;t:if(eH(this)){var n=tU(this.g);e="";var i=n.length,s=4==tM(this.g);if(!this.h.i){if("undefined"==typeof TextDecoder){eX(this),eQ(this);var o="";break t}this.h.i=new m.TextDecoder}for(t=0;t<i;t++)this.h.h=!0,e+=this.h.i.decode(n[t],{stream:!(s&&t==i-1)});n.length=0,this.h.g+=e,this.C=0,o=this.h.g}else o=this.g.oa();if(this.o=200==r,function(e,t,r,n,i,s,o){e.info(function(){return"XMLHTTP RESP ("+n+") [ attempt "+i+"]: "+t+"\n"+r+"\n"+s+" "+o})}(this.i,this.u,this.A,this.l,this.R,c,r),this.o){if(this.T&&!this.K){t:{if(this.g){var a,l=this.g;if((a=l.g?l.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!C(a)){var u=a;break t}}u=null}if(r=u)eL(this.i,this.l,r,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,eJ(this,r);else{this.o=!1,this.s=3,eN(12),eX(this),eQ(this);break e}}if(this.P){let e;for(r=!0;!this.J&&this.C<o.length;)if((e=function(e,t){var r=e.C,n=t.indexOf("\n",r);return -1==n?eq:isNaN(r=Number(t.substring(r,n)))?ej:(n+=1)+r>t.length?eq:(t=t.slice(n,n+r),e.C=n+r,t)}(this,o))==eq){4==c&&(this.s=4,eN(14),r=!1),eL(this.i,this.l,null,"[Incomplete Response]");break}else if(e==ej){this.s=4,eN(15),eL(this.i,this.l,o,"[Invalid Chunk]"),r=!1;break}else eL(this.i,this.l,e,null),eJ(this,e);if(eH(this)&&0!=this.C&&(this.h.g=this.h.g.slice(this.C),this.C=0),4!=c||0!=o.length||this.h.h||(this.s=1,eN(16),r=!1),this.o=this.o&&r,r){if(0<o.length&&!this.W){this.W=!0;var h=this.j;h.g==this&&h.ba&&!h.M&&(h.j.info("Great, no buffering proxy detected. Bytes received: "+o.length),tQ(h),h.M=!0,eN(11))}}else eL(this.i,this.l,o,"[Invalid Chunked Response]"),eX(this),eQ(this)}else eL(this.i,this.l,o,null),eJ(this,o);4==c&&eX(this),this.o&&!this.J&&(4==c?tY(this.j,this):(this.o=!1,eK(this)))}else(function(e){let t={};e=(e.g&&2<=tM(e)&&e.g.getAllResponseHeaders()||"").split("\r\n");for(let n=0;n<e.length;n++){if(C(e[n]))continue;var r=function(e){var t=1;e=e.split(":");let r=[];for(;0<t&&e.length;)r.push(e.shift()),t--;return e.length&&r.push(e.join(":")),r}(e[n]);let i=r[0];if("string"!=typeof(r=r[1]))continue;r=r.trim();let s=t[i]||[];t[i]=s,s.push(r)}!function(e,t){for(let r in e)t.call(void 0,e[r],r,e)}(t,function(e){return e.join(", ")})})(this.g),400==r&&0<o.indexOf("Unknown SID")?(this.s=3,eN(12)):(this.s=0,eN(13)),eX(this),eQ(this)}}}catch(e){}finally{}},eF.prototype.cancel=function(){this.J=!0,eX(this)},eF.prototype.ba=function(){this.B=null;let e=Date.now();0<=e-this.S?(function(e,t){e.info(function(){return"TIMEOUT: "+t})}(this.i,this.A),2!=this.L&&(ex(),eN(17)),eX(this),this.s=2,eQ(this)):eG(this,this.S-e)};var eY=class{constructor(e,t){this.g=e,this.map=t}};function eZ(e){this.l=e||10,e=m.PerformanceNavigationTiming?0<(e=m.performance.getEntriesByType("navigation")).length&&("hq"==e[0].nextHopProtocol||"h2"==e[0].nextHopProtocol):!!(m.chrome&&m.chrome.loadTimes&&m.chrome.loadTimes()&&m.chrome.loadTimes().wasFetchedViaSpdy),this.j=e?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function e0(e){return!!e.h||!!e.g&&e.g.size>=e.j}function e1(e){return e.h?1:e.g?e.g.size:0}function e2(e,t){return e.h?e.h==t:!!e.g&&e.g.has(t)}function e6(e,t){e.g?e.g.add(t):e.h=t}function e3(e,t){e.h&&e.h==t?e.h=null:e.g&&e.g.has(t)&&e.g.delete(t)}function e5(e){if(null!=e.h)return e.i.concat(e.h.D);if(null!=e.g&&0!==e.g.size){let t=e.i;for(let r of e.g.values())t=t.concat(r.D);return t}return T(e.i)}function e8(e,t){if(e.forEach&&"function"==typeof e.forEach)e.forEach(t,void 0);else if(y(e)||"string"==typeof e)Array.prototype.forEach.call(e,t,void 0);else for(var r=function(e){if(e.na&&"function"==typeof e.na)return e.na();if(!e.V||"function"!=typeof e.V){if("undefined"!=typeof Map&&e instanceof Map)return Array.from(e.keys());if(!("undefined"!=typeof Set&&e instanceof Set)){if(y(e)||"string"==typeof e){var t=[];e=e.length;for(var r=0;r<e;r++)t.push(r);return t}for(let n in t=[],r=0,e)t[r++]=n;return t}}}(e),n=function(e){if(e.V&&"function"==typeof e.V)return e.V();if("undefined"!=typeof Map&&e instanceof Map||"undefined"!=typeof Set&&e instanceof Set)return Array.from(e.values());if("string"==typeof e)return e.split("");if(y(e)){for(var t=[],r=e.length,n=0;n<r;n++)t.push(e[n]);return t}for(n in t=[],r=0,e)t[r++]=e[n];return t}(e),i=n.length,s=0;s<i;s++)t.call(void 0,n[s],r&&r[s],e)}eZ.prototype.cancel=function(){if(this.i=e5(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&0!==this.g.size){for(let e of this.g.values())e.cancel();this.g.clear()}};var e4=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function e9(e){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,e instanceof e9){this.h=e.h,te(this,e.j),this.o=e.o,this.g=e.g,tt(this,e.s),this.l=e.l;var t=e.i,r=new td;r.i=t.i,t.g&&(r.g=new Map(t.g),r.h=t.h),tr(this,r),this.m=e.m}else e&&(t=String(e).match(e4))?(this.h=!1,te(this,t[1]||"",!0),this.o=ts(t[2]||""),this.g=ts(t[3]||"",!0),tt(this,t[4]),this.l=ts(t[5]||"",!0),tr(this,t[6]||"",!0),this.m=ts(t[7]||"")):(this.h=!1,this.i=new td(null,this.h))}function e7(e){return new e9(e)}function te(e,t,r){e.j=r?ts(t,!0):t,e.j&&(e.j=e.j.replace(/:$/,""))}function tt(e,t){if(t){if(isNaN(t=Number(t))||0>t)throw Error("Bad port number "+t);e.s=t}else e.s=null}function tr(e,t,r){var n,i;t instanceof td?(e.i=t,n=e.i,(i=e.h)&&!n.j&&(tp(n),n.i=null,n.g.forEach(function(e,t){var r=t.toLowerCase();t!=r&&(tg(this,t),ty(this,r,e))},n)),n.j=i):(r||(t=to(t,tc)),e.i=new td(t,e.h))}function tn(e,t,r){e.i.set(t,r)}function ti(e){return tn(e,"zx",Math.floor(0x80000000*Math.random()).toString(36)+Math.abs(Math.floor(0x80000000*Math.random())^Date.now()).toString(36)),e}function ts(e,t){return e?t?decodeURI(e.replace(/%25/g,"%2525")):decodeURIComponent(e):""}function to(e,t,r){return"string"==typeof e?(e=encodeURI(e).replace(t,ta),r&&(e=e.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),e):null}function ta(e){return"%"+((e=e.charCodeAt(0))>>4&15).toString(16)+(15&e).toString(16)}e9.prototype.toString=function(){var e=[],t=this.j;t&&e.push(to(t,tl,!0),":");var r=this.g;return(r||"file"==t)&&(e.push("//"),(t=this.o)&&e.push(to(t,tl,!0),"@"),e.push(encodeURIComponent(String(r)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),null!=(r=this.s)&&e.push(":",String(r))),(r=this.l)&&(this.g&&"/"!=r.charAt(0)&&e.push("/"),e.push(to(r,"/"==r.charAt(0)?th:tu,!0))),(r=this.i.toString())&&e.push("?",r),(r=this.m)&&e.push("#",to(r,tf)),e.join("")};var tl=/[#\/\?@]/g,tu=/[#\?:]/g,th=/[#\?]/g,tc=/[#\?@]/g,tf=/#/g;function td(e,t){this.h=this.g=null,this.i=e||null,this.j=!!t}function tp(e){e.g||(e.g=new Map,e.h=0,e.i&&function(e,t){if(e){e=e.split("&");for(var r=0;r<e.length;r++){var n=e[r].indexOf("="),i=null;if(0<=n){var s=e[r].substring(0,n);i=e[r].substring(n+1)}else s=e[r];t(s,i?decodeURIComponent(i.replace(/\+/g," ")):"")}}}(e.i,function(t,r){e.add(decodeURIComponent(t.replace(/\+/g," ")),r)}))}function tg(e,t){tp(e),t=tv(e,t),e.g.has(t)&&(e.i=null,e.h-=e.g.get(t).length,e.g.delete(t))}function tm(e,t){return tp(e),t=tv(e,t),e.g.has(t)}function ty(e,t,r){tg(e,t),0<r.length&&(e.i=null,e.g.set(tv(e,t),T(r)),e.h+=r.length)}function tv(e,t){return t=String(t),e.j&&(t=t.toLowerCase()),t}function tw(e,t,r,n,i){try{i&&(i.onload=null,i.onerror=null,i.onabort=null,i.ontimeout=null),n(r)}catch(e){}}function t_(){this.g=new ev}function tE(e){this.l=e.Ub||null,this.j=e.eb||!1}function tb(e,t){el.call(this),this.D=e,this.o=t,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}function tI(e){e.j.read().then(e.Pa.bind(e)).catch(e.ga.bind(e))}function tT(e){e.readyState=4,e.l=null,e.j=null,e.v=null,tS(e)}function tS(e){e.onreadystatechange&&e.onreadystatechange.call(e)}function tC(e){let t="";return R(e,function(e,r){t+=r,t+=":",t+=e,t+="\r\n"}),t}function tA(e,t,r){e:{for(n in r){var n=!1;break e}n=!0}n||(r=tC(r),"string"==typeof e?null!=r&&encodeURIComponent(String(r)):tn(e,t,r))}function tk(e){el.call(this),this.headers=new Map,this.o=e||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}(r=td.prototype).add=function(e,t){tp(this),this.i=null,e=tv(this,e);var r=this.g.get(e);return r||this.g.set(e,r=[]),r.push(t),this.h+=1,this},r.forEach=function(e,t){tp(this),this.g.forEach(function(r,n){r.forEach(function(r){e.call(t,r,n,this)},this)},this)},r.na=function(){tp(this);let e=Array.from(this.g.values()),t=Array.from(this.g.keys()),r=[];for(let n=0;n<t.length;n++){let i=e[n];for(let e=0;e<i.length;e++)r.push(t[n])}return r},r.V=function(e){tp(this);let t=[];if("string"==typeof e)tm(this,e)&&(t=t.concat(this.g.get(tv(this,e))));else{e=Array.from(this.g.values());for(let r=0;r<e.length;r++)t=t.concat(e[r])}return t},r.set=function(e,t){return tp(this),this.i=null,tm(this,e=tv(this,e))&&(this.h-=this.g.get(e).length),this.g.set(e,[t]),this.h+=1,this},r.get=function(e,t){return e&&0<(e=this.V(e)).length?String(e[0]):t},r.toString=function(){if(this.i)return this.i;if(!this.g)return"";let e=[],t=Array.from(this.g.keys());for(var r=0;r<t.length;r++){var n=t[r];let s=encodeURIComponent(String(n)),o=this.V(n);for(n=0;n<o.length;n++){var i=s;""!==o[n]&&(i+="="+encodeURIComponent(String(o[n]))),e.push(i)}}return this.i=e.join("&")},I(tE,ew),tE.prototype.g=function(){return new tb(this.l,this.j)},tE.prototype.i=(e={},function(){return e}),I(tb,el),(r=tb.prototype).open=function(e,t){if(0!=this.readyState)throw this.abort(),Error("Error reopening a connection");this.B=e,this.A=t,this.readyState=1,tS(this)},r.send=function(e){if(1!=this.readyState)throw this.abort(),Error("need to call open() first. ");this.g=!0;let t={headers:this.u,method:this.B,credentials:this.m,cache:void 0};e&&(t.body=e),(this.D||m).fetch(new Request(this.A,t)).then(this.Sa.bind(this),this.ga.bind(this))},r.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&4!=this.readyState&&(this.g=!1,tT(this)),this.readyState=0},r.Sa=function(e){if(this.g&&(this.l=e,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=e.headers,this.readyState=2,tS(this)),this.g&&(this.readyState=3,tS(this),this.g))){if("arraybuffer"===this.responseType)e.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(void 0!==m.ReadableStream&&"body"in e){if(this.j=e.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;tI(this)}else e.text().then(this.Ra.bind(this),this.ga.bind(this))}},r.Pa=function(e){if(this.g){if(this.o&&e.value)this.response.push(e.value);else if(!this.o){var t=e.value?e.value:new Uint8Array(0);(t=this.v.decode(t,{stream:!e.done}))&&(this.response=this.responseText+=t)}e.done?tT(this):tS(this),3==this.readyState&&tI(this)}},r.Ra=function(e){this.g&&(this.response=this.responseText=e,tT(this))},r.Qa=function(e){this.g&&(this.response=e,tT(this))},r.ga=function(){this.g&&tT(this)},r.setRequestHeader=function(e,t){this.u.append(e,t)},r.getResponseHeader=function(e){return this.h&&this.h.get(e.toLowerCase())||""},r.getAllResponseHeaders=function(){if(!this.h)return"";let e=[],t=this.h.entries();for(var r=t.next();!r.done;)e.push((r=r.value)[0]+": "+r[1]),r=t.next();return e.join("\r\n")},Object.defineProperty(tb.prototype,"withCredentials",{get:function(){return"include"===this.m},set:function(e){this.m=e?"include":"same-origin"}}),I(tk,el);var tx=/^https?$/i,tR=["POST","PUT"];function tN(e,t){e.h=!1,e.g&&(e.j=!0,e.g.abort(),e.j=!1),e.l=t,e.m=5,tD(e),tP(e)}function tD(e){e.A||(e.A=!0,eu(e,"complete"),eu(e,"error"))}function tO(e){if(e.h&&void 0!==g&&(!e.v[1]||4!=tM(e)||2!=e.Z())){if(e.u&&4==tM(e))ec(e.Ea,0,e);else if(eu(e,"readystatechange"),4==tM(e)){e.h=!1;try{let o=e.Z();switch(o){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var t,r,n=!0;break;default:n=!1}if(!(t=n)){if(r=0===o){var i=String(e.D).match(e4)[1]||null;!i&&m.self&&m.self.location&&(i=m.self.location.protocol.slice(0,-1)),r=!tx.test(i?i.toLowerCase():"")}t=r}if(t)eu(e,"complete"),eu(e,"success");else{e.m=6;try{var s=2<tM(e)?e.g.statusText:""}catch(e){s=""}e.l=s+" ["+e.Z()+"]",tD(e)}}finally{tP(e)}}}}function tP(e,t){if(e.g){tL(e);let r=e.g,n=e.v[0]?()=>{}:null;e.g=null,e.v=null,t||eu(e,"ready");try{r.onreadystatechange=n}catch(e){}}}function tL(e){e.I&&(m.clearTimeout(e.I),e.I=null)}function tM(e){return e.g?e.g.readyState:0}function tU(e){try{if(!e.g)return null;if("response"in e.g)return e.g.response;switch(e.H){case"":case"text":return e.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in e.g)return e.g.mozResponseArrayBuffer}return null}catch(e){return null}}function tV(e,t,r){return r&&r.internalChannelParams&&r.internalChannelParams[e]||t}function tF(e){this.Aa=0,this.i=[],this.j=new eP,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=tV("failFast",!1,e),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=tV("baseRetryDelayMs",5e3,e),this.cb=tV("retryDelaySeedMs",1e4,e),this.Wa=tV("forwardChannelMaxRetries",2,e),this.wa=tV("forwardChannelRequestTimeoutMs",2e4,e),this.pa=e&&e.xmlHttpFactory||void 0,this.Xa=e&&e.Tb||void 0,this.Ca=e&&e.useFetchStreams||!1,this.L=void 0,this.J=e&&e.supportsCrossDomainXhr||!1,this.K="",this.h=new eZ(e&&e.concurrentRequestLimit),this.Da=new t_,this.P=e&&e.fastHandshake||!1,this.O=e&&e.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=e&&e.Rb||!1,e&&e.xa&&this.j.xa(),e&&e.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&e&&e.detectBufferingProxy||!1,this.ja=void 0,e&&e.longPollingTimeout&&0<e.longPollingTimeout&&(this.ja=e.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}function tB(e){if(tq(e),3==e.G){var t=e.U++,r=e7(e.I);if(tn(r,"SID",e.K),tn(r,"RID",t),tn(r,"TYPE","terminate"),tH(e,r),(t=new eF(e,e.j,t)).L=2,t.v=ti(e7(r)),r=!1,m.navigator&&m.navigator.sendBeacon)try{r=m.navigator.sendBeacon(t.v.toString(),"")}catch(e){}!r&&m.Image&&((new Image).src=t.v,r=!0),r||(t.g=t6(t.j,null),t.g.ea(t.v)),t.F=Date.now(),eK(t)}t1(e)}function tj(e){e.g&&(tQ(e),e.g.cancel(),e.g=null)}function tq(e){tj(e),e.u&&(m.clearTimeout(e.u),e.u=null),tJ(e),e.h.cancel(),e.s&&("number"==typeof e.s&&m.clearTimeout(e.s),e.s=null)}function t$(e){if(!e0(e.h)&&!e.s){e.s=!0;var t=e.Ga;M||F(),U||(M(),U=!0),V.add(t,e),e.B=0}}function tz(e,t){var r;r=t?t.l:e.U++;let n=e7(e.I);tn(n,"SID",e.K),tn(n,"RID",r),tn(n,"AID",e.T),tH(e,n),e.m&&e.o&&tA(n,e.m,e.o),r=new eF(e,e.j,r,e.B+1),null===e.m&&(r.H=e.o),t&&(e.i=t.D.concat(e.i)),t=tK(e,r,1e3),r.I=Math.round(.5*e.wa)+Math.round(.5*e.wa*Math.random()),e6(e.h,r),e$(r,n,t)}function tH(e,t){e.H&&R(e.H,function(e,r){tn(t,r,e)}),e.l&&e8({},function(e,r){tn(t,r,e)})}function tK(e,t,r){r=Math.min(e.i.length,r);var n=e.l?E(e.l.Na,e.l,e):null;e:{var i=e.i;let t=-1;for(;;){let e=["count="+r];-1==t?0<r?(t=i[0].g,e.push("ofs="+t)):t=0:e.push("ofs="+t);let s=!0;for(let o=0;o<r;o++){let r=i[o].g,a=i[o].map;if(0>(r-=t))t=Math.max(0,i[o].g-100),s=!1;else try{!function(e,t,r){let n=r||"";try{e8(e,function(e,r){let i=e;v(e)&&(i=em(e)),t.push(n+r+"="+encodeURIComponent(i))})}catch(e){throw t.push(n+"type="+encodeURIComponent("_badmap")),e}}(a,e,"req"+r+"_")}catch(e){n&&n(a)}}if(s){n=e.join("&");break e}}}return e=e.i.splice(0,r),t.D=e,n}function tG(e){if(!e.g&&!e.u){e.Y=1;var t=e.Fa;M||F(),U||(M(),U=!0),V.add(t,e),e.v=0}}function tW(e){return!e.g&&!e.u&&!(3<=e.v)&&(e.Y++,e.u=eO(E(e.Fa,e),tZ(e,e.v)),e.v++,!0)}function tQ(e){null!=e.A&&(m.clearTimeout(e.A),e.A=null)}function tX(e){e.g=new eF(e,e.j,"rpc",e.Y),null===e.m&&(e.g.H=e.o),e.g.O=0;var t=e7(e.qa);tn(t,"RID","rpc"),tn(t,"SID",e.K),tn(t,"AID",e.T),tn(t,"CI",e.F?"0":"1"),!e.F&&e.ja&&tn(t,"TO",e.ja),tn(t,"TYPE","xmlhttp"),tH(e,t),e.m&&e.o&&tA(t,e.m,e.o),e.L&&(e.g.I=e.L);var r=e.g;e=e.ia,r.L=1,r.v=ti(e7(t)),r.m=null,r.P=!0,ez(r,e)}function tJ(e){null!=e.C&&(m.clearTimeout(e.C),e.C=null)}function tY(e,t){var r=null;if(e.g==t){tJ(e),tQ(e),e.g=null;var n=2}else{if(!e2(e.h,t))return;r=t.D,e3(e.h,t),n=1}if(0!=e.G){if(t.o){if(1==n){r=t.m?t.m.length:0,t=Date.now()-t.F;var i,s=e.B;eu(n=eA(),new eD(n,r)),t$(e)}else tG(e)}else if(3==(s=t.s)||0==s&&0<t.X||!(1==n&&(i=t,!(e1(e.h)>=e.h.j-(e.s?1:0))&&(e.s?(e.i=i.D.concat(e.i),!0):1!=e.G&&2!=e.G&&!(e.B>=(e.Va?0:e.Wa))&&(e.s=eO(E(e.Ga,e,i),tZ(e,e.B)),e.B++,!0)))||2==n&&tW(e)))switch(r&&0<r.length&&((t=e.h).i=t.i.concat(r)),s){case 1:t0(e,5);break;case 4:t0(e,10);break;case 3:t0(e,6);break;default:t0(e,2)}}}function tZ(e,t){let r=e.Ta+Math.floor(Math.random()*e.cb);return e.isActive()||(r*=2),r*t}function t0(e,t){if(e.j.info("Error code "+t),2==t){var r=E(e.fb,e),n=e.Xa;let t=!n;n=new e9(n||"//www.google.com/images/cleardot.gif"),m.location&&"http"==m.location.protocol||te(n,"https"),ti(n),t?function(e,t){let r=new eP;if(m.Image){let n=new Image;n.onload=b(tw,r,"TestLoadImage: loaded",!0,t,n),n.onerror=b(tw,r,"TestLoadImage: error",!1,t,n),n.onabort=b(tw,r,"TestLoadImage: abort",!1,t,n),n.ontimeout=b(tw,r,"TestLoadImage: timeout",!1,t,n),m.setTimeout(function(){n.ontimeout&&n.ontimeout()},1e4),n.src=e}else t(!1)}(n.toString(),r):function(e,t){let r=new eP,n=new AbortController,i=setTimeout(()=>{n.abort(),tw(r,"TestPingServer: timeout",!1,t)},1e4);fetch(e,{signal:n.signal}).then(e=>{clearTimeout(i),e.ok?tw(r,"TestPingServer: ok",!0,t):tw(r,"TestPingServer: server error",!1,t)}).catch(()=>{clearTimeout(i),tw(r,"TestPingServer: error",!1,t)})}(n.toString(),r)}else eN(2);e.G=0,e.l&&e.l.sa(t),t1(e),tq(e)}function t1(e){if(e.G=0,e.ka=[],e.l){let t=e5(e.h);(0!=t.length||0!=e.i.length)&&(S(e.ka,t),S(e.ka,e.i),e.h.i.length=0,T(e.i),e.i.length=0),e.l.ra()}}function t2(e,t,r){var n=r instanceof e9?e7(r):new e9(r);if(""!=n.g)t&&(n.g=t+"."+n.g),tt(n,n.s);else{var i=m.location;n=i.protocol,t=t?t+"."+i.hostname:i.hostname,i=+i.port;var s=new e9(null);n&&te(s,n),t&&(s.g=t),i&&tt(s,i),r&&(s.l=r),n=s}return r=e.D,t=e.ya,r&&t&&tn(n,r,t),tn(n,"VER",e.la),tH(e,n),n}function t6(e,t,r){if(t&&!e.J)throw Error("Can't create secondary domain capable XhrIo object.");return(t=new tk(e.Ca&&!e.pa?new tE({eb:r}):e.pa)).Ha(e.J),t}function t3(){}function t5(){}function t8(e,t){el.call(this),this.g=new tF(t),this.l=e,this.h=t&&t.messageUrlParams||null,e=t&&t.messageHeaders||null,t&&t.clientProtocolHeaderRequired&&(e?e["X-Client-Protocol"]="webchannel":e={"X-Client-Protocol":"webchannel"}),this.g.o=e,e=t&&t.initMessageHeaders||null,t&&t.messageContentType&&(e?e["X-WebChannel-Content-Type"]=t.messageContentType:e={"X-WebChannel-Content-Type":t.messageContentType}),t&&t.va&&(e?e["X-WebChannel-Client-Profile"]=t.va:e={"X-WebChannel-Client-Profile":t.va}),this.g.S=e,(e=t&&t.Sb)&&!C(e)&&(this.g.m=e),this.v=t&&t.supportsCrossDomainXhr||!1,this.u=t&&t.sendRawJson||!1,(t=t&&t.httpSessionIdParam)&&!C(t)&&(this.g.D=t,null!==(e=this.h)&&t in e&&t in(e=this.h)&&delete e[t]),this.j=new t7(this)}function t4(e){eI.call(this),e.__headers__&&(this.headers=e.__headers__,this.statusCode=e.__status__,delete e.__headers__,delete e.__status__);var t=e.__sm__;if(t){e:{for(let r in t){e=r;break e}e=void 0}(this.i=e)&&(e=this.i,t=null!==t&&e in t?t[e]:void 0),this.data=t}else this.data=e}function t9(){eT.call(this),this.status=1}function t7(e){this.g=e}(r=tk.prototype).Ha=function(e){this.J=e},r.ea=function(e,r,n,i){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+e);r=r?r.toUpperCase():"GET",this.D=e,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():t.g(),this.v=this.o?e_(this.o):e_(t),this.g.onreadystatechange=E(this.Ea,this);try{this.B=!0,this.g.open(r,String(e),!0),this.B=!1}catch(e){tN(this,e);return}if(e=n||"",n=new Map(this.headers),i){if(Object.getPrototypeOf(i)===Object.prototype)for(var s in i)n.set(s,i[s]);else if("function"==typeof i.keys&&"function"==typeof i.get)for(let e of i.keys())n.set(e,i.get(e));else throw Error("Unknown input type for opt_headers: "+String(i))}for(let[t,o]of(i=Array.from(n.keys()).find(e=>"content-type"==e.toLowerCase()),s=m.FormData&&e instanceof m.FormData,!(0<=Array.prototype.indexOf.call(tR,r,void 0))||i||s||n.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8"),n))this.g.setRequestHeader(t,o);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{tL(this),this.u=!0,this.g.send(e),this.u=!1}catch(e){tN(this,e)}},r.abort=function(e){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=e||7,eu(this,"complete"),eu(this,"abort"),tP(this))},r.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),tP(this,!0)),tk.aa.N.call(this)},r.Ea=function(){this.s||(this.B||this.u||this.j?tO(this):this.bb())},r.bb=function(){tO(this)},r.isActive=function(){return!!this.g},r.Z=function(){try{return 2<tM(this)?this.g.status:-1}catch(e){return -1}},r.oa=function(){try{return this.g?this.g.responseText:""}catch(e){return""}},r.Oa=function(e){if(this.g){var t=this.g.responseText;return e&&0==t.indexOf(e)&&(t=t.substring(e.length)),ey(t)}},r.Ba=function(){return this.m},r.Ka=function(){return"string"==typeof this.l?this.l:String(this.l)},(r=tF.prototype).la=8,r.G=1,r.connect=function(e,t,r,n){eN(0),this.W=e,this.H=t||{},r&&void 0!==n&&(this.H.OSID=r,this.H.OAID=n),this.F=this.X,this.I=t2(this,null,this.W),t$(this)},r.Ga=function(e){if(this.s){if(this.s=null,1==this.G){if(!e){this.U=Math.floor(1e5*Math.random()),e=this.U++;let i=new eF(this,this.j,e),s=this.o;if(this.S&&(s?O(s=N(s),this.S):s=this.S),null!==this.m||this.O||(i.H=s,s=null),this.P)e:{for(var t=0,r=0;r<this.i.length;r++){t:{var n=this.i[r];if("__data__"in n.map&&"string"==typeof(n=n.map.__data__)){n=n.length;break t}n=void 0}if(void 0===n)break;if(4096<(t+=n)){t=r;break e}if(4096===t||r===this.i.length-1){t=r+1;break e}}t=1e3}else t=1e3;t=tK(this,i,t),tn(r=e7(this.I),"RID",e),tn(r,"CVER",22),this.D&&tn(r,"X-HTTP-Session-Id",this.D),tH(this,r),s&&(this.O?t="headers="+encodeURIComponent(String(tC(s)))+"&"+t:this.m&&tA(r,this.m,s)),e6(this.h,i),this.Ua&&tn(r,"TYPE","init"),this.P?(tn(r,"$req",t),tn(r,"SID","null"),i.T=!0,e$(i,r,null)):e$(i,r,t),this.G=2}}else 3==this.G&&(e?tz(this,e):0==this.i.length||e0(this.h)||tz(this))}},r.Fa=function(){if(this.u=null,tX(this),this.ba&&!(this.M||null==this.g||0>=this.R)){var e=2*this.R;this.j.info("BP detection timer enabled: "+e),this.A=eO(E(this.ab,this),e)}},r.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,eN(10),tj(this),tX(this))},r.Za=function(){null!=this.C&&(this.C=null,tj(this),tW(this),eN(19))},r.fb=function(e){e?(this.j.info("Successfully pinged google.com"),eN(2)):(this.j.info("Failed to ping google.com"),eN(1))},r.isActive=function(){return!!this.l&&this.l.isActive(this)},(r=t3.prototype).ua=function(){},r.ta=function(){},r.sa=function(){},r.ra=function(){},r.isActive=function(){return!0},r.Na=function(){},t5.prototype.g=function(e,t){return new t8(e,t)},I(t8,el),t8.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},t8.prototype.close=function(){tB(this.g)},t8.prototype.o=function(e){var t=this.g;if("string"==typeof e){var r={};r.__data__=e,e=r}else this.u&&((r={}).__data__=em(e),e=r);t.i.push(new eY(t.Ya++,e)),3==t.G&&t$(t)},t8.prototype.N=function(){this.g.l=null,delete this.j,tB(this.g),delete this.g,t8.aa.N.call(this)},I(t4,eI),I(t9,eT),I(t7,t3),t7.prototype.ua=function(){eu(this.g,"a")},t7.prototype.ta=function(e){eu(this.g,new t4(e))},t7.prototype.sa=function(e){eu(this.g,new t9)},t7.prototype.ra=function(){eu(this.g,"b")},t5.prototype.createWebChannel=t5.prototype.g,t8.prototype.send=t8.prototype.o,t8.prototype.open=t8.prototype.m,t8.prototype.close=t8.prototype.close,c=d.createWebChannelTransport=function(){return new t5},h=d.getStatEventTarget=function(){return eA()},u=d.Event=eS,l=d.Stat={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},eM.NO_ERROR=0,eM.TIMEOUT=8,eM.HTTP_ERROR=6,a=d.ErrorCode=eM,eU.COMPLETE="complete",o=d.EventType=eU,eE.EventType=eb,eb.OPEN="a",eb.CLOSE="b",eb.ERROR="c",eb.MESSAGE="d",el.prototype.listen=el.prototype.K,s=d.WebChannel=eE,d.FetchXmlHttpFactory=tE,tk.prototype.listenOnce=tk.prototype.L,tk.prototype.getLastError=tk.prototype.Ka,tk.prototype.getLastErrorCode=tk.prototype.Ba,tk.prototype.getStatus=tk.prototype.Z,tk.prototype.getResponseJson=tk.prototype.Oa,tk.prototype.getResponseText=tk.prototype.oa,tk.prototype.send=tk.prototype.ea,tk.prototype.setWithCredentials=tk.prototype.Ha,i=d.XhrIo=tk}).apply(void 0!==f?f:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{})}),s("6ZWSX",function(t,r){e(t.exports,"Buffer",()=>n,e=>n=e),e(t.exports,"INSPECT_MAX_BYTES",()=>s,e=>s=e);var n,s,o=i("kuxul"),a=i("9NvM5");let l="function"==typeof Symbol&&"function"==typeof Symbol.for?Symbol.for("nodejs.util.inspect.custom"):null;function u(e){if(e>0x7fffffff)throw RangeError('The value "'+e+'" is invalid for option "size"');let t=new Uint8Array(e);return Object.setPrototypeOf(t,h.prototype),t}function h(e,t,r){if("number"==typeof e){if("string"==typeof t)throw TypeError('The "string" argument must be of type string. Received type number');return d(e)}return c(e,t,r)}function c(e,t,r){if("string"==typeof e)return function(e,t){if(("string"!=typeof t||""===t)&&(t="utf8"),!h.isEncoding(t))throw TypeError("Unknown encoding: "+t);let r=0|y(e,t),n=u(r),i=n.write(e,t);return i!==r&&(n=n.slice(0,i)),n}(e,t);if(ArrayBuffer.isView(e))return function(e){if(B(e,Uint8Array)){let t=new Uint8Array(e);return g(t.buffer,t.byteOffset,t.byteLength)}return p(e)}(e);if(null==e)throw TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type "+typeof e);if(B(e,ArrayBuffer)||e&&B(e.buffer,ArrayBuffer)||"undefined"!=typeof SharedArrayBuffer&&(B(e,SharedArrayBuffer)||e&&B(e.buffer,SharedArrayBuffer)))return g(e,t,r);if("number"==typeof e)throw TypeError('The "value" argument must not be of type number. Received type number');let n=e.valueOf&&e.valueOf();if(null!=n&&n!==e)return h.from(n,t,r);let i=function(e){var t;if(h.isBuffer(e)){let t=0|m(e.length),r=u(t);return 0===r.length||e.copy(r,0,0,t),r}return void 0!==e.length?"number"!=typeof e.length||(t=e.length)!=t?u(0):p(e):"Buffer"===e.type&&Array.isArray(e.data)?p(e.data):void 0}(e);if(i)return i;if("undefined"!=typeof Symbol&&null!=Symbol.toPrimitive&&"function"==typeof e[Symbol.toPrimitive])return h.from(e[Symbol.toPrimitive]("string"),t,r);throw TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type "+typeof e)}function f(e){if("number"!=typeof e)throw TypeError('"size" argument must be of type number');if(e<0)throw RangeError('The value "'+e+'" is invalid for option "size"')}function d(e){return f(e),u(e<0?0:0|m(e))}function p(e){let t=e.length<0?0:0|m(e.length),r=u(t);for(let n=0;n<t;n+=1)r[n]=255&e[n];return r}function g(e,t,r){let n;if(t<0||e.byteLength<t)throw RangeError('"offset" is outside of buffer bounds');if(e.byteLength<t+(r||0))throw RangeError('"length" is outside of buffer bounds');return Object.setPrototypeOf(n=void 0===t&&void 0===r?new Uint8Array(e):void 0===r?new Uint8Array(e,t):new Uint8Array(e,t,r),h.prototype),n}function m(e){if(e>=0x7fffffff)throw RangeError("Attempt to allocate Buffer larger than maximum size: 0x7fffffff bytes");return 0|e}function y(e,t){if(h.isBuffer(e))return e.length;if(ArrayBuffer.isView(e)||B(e,ArrayBuffer))return e.byteLength;if("string"!=typeof e)throw TypeError('The "string" argument must be one of type string, Buffer, or ArrayBuffer. Received type '+typeof e);let r=e.length,n=arguments.length>2&&!0===arguments[2];if(!n&&0===r)return 0;let i=!1;for(;;)switch(t){case"ascii":case"latin1":case"binary":return r;case"utf8":case"utf-8":return U(e).length;case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return 2*r;case"hex":return r>>>1;case"base64":return V(e).length;default:if(i)return n?-1:U(e).length;t=(""+t).toLowerCase(),i=!0}}function v(e,t,r){let n=!1;if((void 0===t||t<0)&&(t=0),t>this.length||((void 0===r||r>this.length)&&(r=this.length),r<=0||(r>>>=0)<=(t>>>=0)))return"";for(e||(e="utf8");;)switch(e){case"hex":return function(e,t,r){let n=e.length;(!t||t<0)&&(t=0),(!r||r<0||r>n)&&(r=n);let i="";for(let n=t;n<r;++n)i+=j[e[n]];return i}(this,t,r);case"utf8":case"utf-8":return b(this,t,r);case"ascii":return function(e,t,r){let n="";r=Math.min(e.length,r);for(let i=t;i<r;++i)n+=String.fromCharCode(127&e[i]);return n}(this,t,r);case"latin1":case"binary":return function(e,t,r){let n="";r=Math.min(e.length,r);for(let i=t;i<r;++i)n+=String.fromCharCode(e[i]);return n}(this,t,r);case"base64":var i,s;return i=t,s=r,0===i&&s===this.length?o.fromByteArray(this):o.fromByteArray(this.slice(i,s));case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return function(e,t,r){let n=e.slice(t,r),i="";for(let e=0;e<n.length-1;e+=2)i+=String.fromCharCode(n[e]+256*n[e+1]);return i}(this,t,r);default:if(n)throw TypeError("Unknown encoding: "+e);e=(e+"").toLowerCase(),n=!0}}function w(e,t,r){let n=e[t];e[t]=e[r],e[r]=n}function _(e,t,r,n,i){var s;if(0===e.length)return -1;if("string"==typeof r?(n=r,r=0):r>0x7fffffff?r=0x7fffffff:r<-0x80000000&&(r=-0x80000000),(s=r=+r)!=s&&(r=i?0:e.length-1),r<0&&(r=e.length+r),r>=e.length){if(i)return -1;r=e.length-1}else if(r<0){if(!i)return -1;r=0}if("string"==typeof t&&(t=h.from(t,n)),h.isBuffer(t))return 0===t.length?-1:E(e,t,r,n,i);if("number"==typeof t)return(t&=255,"function"==typeof Uint8Array.prototype.indexOf)?i?Uint8Array.prototype.indexOf.call(e,t,r):Uint8Array.prototype.lastIndexOf.call(e,t,r):E(e,[t],r,n,i);throw TypeError("val must be string, number or Buffer")}function E(e,t,r,n,i){let s,o=1,a=e.length,l=t.length;if(void 0!==n&&("ucs2"===(n=String(n).toLowerCase())||"ucs-2"===n||"utf16le"===n||"utf-16le"===n)){if(e.length<2||t.length<2)return -1;o=2,a/=2,l/=2,r/=2}function u(e,t){return 1===o?e[t]:e.readUInt16BE(t*o)}if(i){let n=-1;for(s=r;s<a;s++)if(u(e,s)===u(t,-1===n?0:s-n)){if(-1===n&&(n=s),s-n+1===l)return n*o}else -1!==n&&(s-=s-n),n=-1}else for(r+l>a&&(r=a-l),s=r;s>=0;s--){let r=!0;for(let n=0;n<l;n++)if(u(e,s+n)!==u(t,n)){r=!1;break}if(r)return s}return -1}function b(e,t,r){r=Math.min(e.length,r);let n=[],i=t;for(;i<r;){let t=e[i],s=null,o=t>239?4:t>223?3:t>191?2:1;if(i+o<=r){let r,n,a,l;switch(o){case 1:t<128&&(s=t);break;case 2:(192&(r=e[i+1]))==128&&(l=(31&t)<<6|63&r)>127&&(s=l);break;case 3:r=e[i+1],n=e[i+2],(192&r)==128&&(192&n)==128&&(l=(15&t)<<12|(63&r)<<6|63&n)>2047&&(l<55296||l>57343)&&(s=l);break;case 4:r=e[i+1],n=e[i+2],a=e[i+3],(192&r)==128&&(192&n)==128&&(192&a)==128&&(l=(15&t)<<18|(63&r)<<12|(63&n)<<6|63&a)>65535&&l<1114112&&(s=l)}}null===s?(s=65533,o=1):s>65535&&(s-=65536,n.push(s>>>10&1023|55296),s=56320|1023&s),n.push(s),i+=o}return function(e){let t=e.length;if(t<=4096)return String.fromCharCode.apply(String,e);let r="",n=0;for(;n<t;)r+=String.fromCharCode.apply(String,e.slice(n,n+=4096));return r}(n)}function I(e,t,r){if(e%1!=0||e<0)throw RangeError("offset is not uint");if(e+t>r)throw RangeError("Trying to access beyond buffer length")}function T(e,t,r,n,i,s){if(!h.isBuffer(e))throw TypeError('"buffer" argument must be a Buffer instance');if(t>i||t<s)throw RangeError('"value" argument is out of bounds');if(r+n>e.length)throw RangeError("Index out of range")}function S(e,t,r,n,i){O(t,n,i,e,r,7);let s=Number(t&BigInt(0xffffffff));e[r++]=s,s>>=8,e[r++]=s,s>>=8,e[r++]=s,s>>=8,e[r++]=s;let o=Number(t>>BigInt(32)&BigInt(0xffffffff));return e[r++]=o,o>>=8,e[r++]=o,o>>=8,e[r++]=o,o>>=8,e[r++]=o,r}function C(e,t,r,n,i){O(t,n,i,e,r,7);let s=Number(t&BigInt(0xffffffff));e[r+7]=s,s>>=8,e[r+6]=s,s>>=8,e[r+5]=s,s>>=8,e[r+4]=s;let o=Number(t>>BigInt(32)&BigInt(0xffffffff));return e[r+3]=o,o>>=8,e[r+2]=o,o>>=8,e[r+1]=o,o>>=8,e[r]=o,r+8}function A(e,t,r,n,i,s){if(r+n>e.length||r<0)throw RangeError("Index out of range")}function k(e,t,r,n,i){return t=+t,r>>>=0,i||A(e,t,r,4,34028234663852886e22,-34028234663852886e22),a.write(e,t,r,n,23,4),r+4}function x(e,t,r,n,i){return t=+t,r>>>=0,i||A(e,t,r,8,17976931348623157e292,-17976931348623157e292),a.write(e,t,r,n,52,8),r+8}n=h,s=50,h.TYPED_ARRAY_SUPPORT=function(){try{let e=new Uint8Array(1),t={foo:function(){return 42}};return Object.setPrototypeOf(t,Uint8Array.prototype),Object.setPrototypeOf(e,t),42===e.foo()}catch(e){return!1}}(),h.TYPED_ARRAY_SUPPORT||"undefined"==typeof console||"function"!=typeof console.error||console.error("This browser lacks typed array (Uint8Array) support which is required by `buffer` v5.x. Use `buffer` v4.x if you require old browser support."),Object.defineProperty(h.prototype,"parent",{enumerable:!0,get:function(){if(h.isBuffer(this))return this.buffer}}),Object.defineProperty(h.prototype,"offset",{enumerable:!0,get:function(){if(h.isBuffer(this))return this.byteOffset}}),h.poolSize=8192,h.from=function(e,t,r){return c(e,t,r)},Object.setPrototypeOf(h.prototype,Uint8Array.prototype),Object.setPrototypeOf(h,Uint8Array),h.alloc=function(e,t,r){return(f(e),e<=0)?u(e):void 0!==t?"string"==typeof r?u(e).fill(t,r):u(e).fill(t):u(e)},h.allocUnsafe=function(e){return d(e)},h.allocUnsafeSlow=function(e){return d(e)},h.isBuffer=function(e){return null!=e&&!0===e._isBuffer&&e!==h.prototype},h.compare=function(e,t){if(B(e,Uint8Array)&&(e=h.from(e,e.offset,e.byteLength)),B(t,Uint8Array)&&(t=h.from(t,t.offset,t.byteLength)),!h.isBuffer(e)||!h.isBuffer(t))throw TypeError('The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array');if(e===t)return 0;let r=e.length,n=t.length;for(let i=0,s=Math.min(r,n);i<s;++i)if(e[i]!==t[i]){r=e[i],n=t[i];break}return r<n?-1:n<r?1:0},h.isEncoding=function(e){switch(String(e).toLowerCase()){case"hex":case"utf8":case"utf-8":case"ascii":case"latin1":case"binary":case"base64":case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return!0;default:return!1}},h.concat=function(e,t){let r;if(!Array.isArray(e))throw TypeError('"list" argument must be an Array of Buffers');if(0===e.length)return h.alloc(0);if(void 0===t)for(r=0,t=0;r<e.length;++r)t+=e[r].length;let n=h.allocUnsafe(t),i=0;for(r=0;r<e.length;++r){let t=e[r];if(B(t,Uint8Array))i+t.length>n.length?(h.isBuffer(t)||(t=h.from(t)),t.copy(n,i)):Uint8Array.prototype.set.call(n,t,i);else if(h.isBuffer(t))t.copy(n,i);else throw TypeError('"list" argument must be an Array of Buffers');i+=t.length}return n},h.byteLength=y,h.prototype._isBuffer=!0,h.prototype.swap16=function(){let e=this.length;if(e%2!=0)throw RangeError("Buffer size must be a multiple of 16-bits");for(let t=0;t<e;t+=2)w(this,t,t+1);return this},h.prototype.swap32=function(){let e=this.length;if(e%4!=0)throw RangeError("Buffer size must be a multiple of 32-bits");for(let t=0;t<e;t+=4)w(this,t,t+3),w(this,t+1,t+2);return this},h.prototype.swap64=function(){let e=this.length;if(e%8!=0)throw RangeError("Buffer size must be a multiple of 64-bits");for(let t=0;t<e;t+=8)w(this,t,t+7),w(this,t+1,t+6),w(this,t+2,t+5),w(this,t+3,t+4);return this},h.prototype.toString=function(){let e=this.length;return 0===e?"":0==arguments.length?b(this,0,e):v.apply(this,arguments)},h.prototype.toLocaleString=h.prototype.toString,h.prototype.equals=function(e){if(!h.isBuffer(e))throw TypeError("Argument must be a Buffer");return this===e||0===h.compare(this,e)},h.prototype.inspect=function(){let e="",t=s;return e=this.toString("hex",0,t).replace(/(.{2})/g,"$1 ").trim(),this.length>t&&(e+=" ... "),"<Buffer "+e+">"},l&&(h.prototype[l]=h.prototype.inspect),h.prototype.compare=function(e,t,r,n,i){if(B(e,Uint8Array)&&(e=h.from(e,e.offset,e.byteLength)),!h.isBuffer(e))throw TypeError('The "target" argument must be one of type Buffer or Uint8Array. Received type '+typeof e);if(void 0===t&&(t=0),void 0===r&&(r=e?e.length:0),void 0===n&&(n=0),void 0===i&&(i=this.length),t<0||r>e.length||n<0||i>this.length)throw RangeError("out of range index");if(n>=i&&t>=r)return 0;if(n>=i)return -1;if(t>=r)return 1;if(t>>>=0,r>>>=0,n>>>=0,i>>>=0,this===e)return 0;let s=i-n,o=r-t,a=Math.min(s,o),l=this.slice(n,i),u=e.slice(t,r);for(let e=0;e<a;++e)if(l[e]!==u[e]){s=l[e],o=u[e];break}return s<o?-1:o<s?1:0},h.prototype.includes=function(e,t,r){return -1!==this.indexOf(e,t,r)},h.prototype.indexOf=function(e,t,r){return _(this,e,t,r,!0)},h.prototype.lastIndexOf=function(e,t,r){return _(this,e,t,r,!1)},h.prototype.write=function(e,t,r,n){var i,s,o,a,l,u,h,c;if(void 0===t)n="utf8",r=this.length,t=0;else if(void 0===r&&"string"==typeof t)n=t,r=this.length,t=0;else if(isFinite(t))t>>>=0,isFinite(r)?(r>>>=0,void 0===n&&(n="utf8")):(n=r,r=void 0);else throw Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");let f=this.length-t;if((void 0===r||r>f)&&(r=f),e.length>0&&(r<0||t<0)||t>this.length)throw RangeError("Attempt to write outside buffer bounds");n||(n="utf8");let d=!1;for(;;)switch(n){case"hex":return function(e,t,r,n){let i;r=Number(r)||0;let s=e.length-r;n?(n=Number(n))>s&&(n=s):n=s;let o=t.length;for(n>o/2&&(n=o/2),i=0;i<n;++i){let n=parseInt(t.substr(2*i,2),16);if(n!=n)break;e[r+i]=n}return i}(this,e,t,r);case"utf8":case"utf-8":return i=t,s=r,F(U(e,this.length-i),this,i,s);case"ascii":case"latin1":case"binary":return o=t,a=r,F(function(e){let t=[];for(let r=0;r<e.length;++r)t.push(255&e.charCodeAt(r));return t}(e),this,o,a);case"base64":return l=t,u=r,F(V(e),this,l,u);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return h=t,c=r,F(function(e,t){let r,n;let i=[];for(let s=0;s<e.length&&!((t-=2)<0);++s)n=(r=e.charCodeAt(s))>>8,i.push(r%256),i.push(n);return i}(e,this.length-h),this,h,c);default:if(d)throw TypeError("Unknown encoding: "+n);n=(""+n).toLowerCase(),d=!0}},h.prototype.toJSON=function(){return{type:"Buffer",data:Array.prototype.slice.call(this._arr||this,0)}},h.prototype.slice=function(e,t){let r=this.length;e=~~e,t=void 0===t?r:~~t,e<0?(e+=r)<0&&(e=0):e>r&&(e=r),t<0?(t+=r)<0&&(t=0):t>r&&(t=r),t<e&&(t=e);let n=this.subarray(e,t);return Object.setPrototypeOf(n,h.prototype),n},h.prototype.readUintLE=h.prototype.readUIntLE=function(e,t,r){e>>>=0,t>>>=0,r||I(e,t,this.length);let n=this[e],i=1,s=0;for(;++s<t&&(i*=256);)n+=this[e+s]*i;return n},h.prototype.readUintBE=h.prototype.readUIntBE=function(e,t,r){e>>>=0,t>>>=0,r||I(e,t,this.length);let n=this[e+--t],i=1;for(;t>0&&(i*=256);)n+=this[e+--t]*i;return n},h.prototype.readUint8=h.prototype.readUInt8=function(e,t){return e>>>=0,t||I(e,1,this.length),this[e]},h.prototype.readUint16LE=h.prototype.readUInt16LE=function(e,t){return e>>>=0,t||I(e,2,this.length),this[e]|this[e+1]<<8},h.prototype.readUint16BE=h.prototype.readUInt16BE=function(e,t){return e>>>=0,t||I(e,2,this.length),this[e]<<8|this[e+1]},h.prototype.readUint32LE=h.prototype.readUInt32LE=function(e,t){return e>>>=0,t||I(e,4,this.length),(this[e]|this[e+1]<<8|this[e+2]<<16)+0x1000000*this[e+3]},h.prototype.readUint32BE=h.prototype.readUInt32BE=function(e,t){return e>>>=0,t||I(e,4,this.length),0x1000000*this[e]+(this[e+1]<<16|this[e+2]<<8|this[e+3])},h.prototype.readBigUInt64LE=q(function(e){P(e>>>=0,"offset");let t=this[e],r=this[e+7];(void 0===t||void 0===r)&&L(e,this.length-8);let n=t+256*this[++e]+65536*this[++e]+0x1000000*this[++e],i=this[++e]+256*this[++e]+65536*this[++e]+0x1000000*r;return BigInt(n)+(BigInt(i)<<BigInt(32))}),h.prototype.readBigUInt64BE=q(function(e){P(e>>>=0,"offset");let t=this[e],r=this[e+7];(void 0===t||void 0===r)&&L(e,this.length-8);let n=0x1000000*t+65536*this[++e]+256*this[++e]+this[++e],i=0x1000000*this[++e]+65536*this[++e]+256*this[++e]+r;return(BigInt(n)<<BigInt(32))+BigInt(i)}),h.prototype.readIntLE=function(e,t,r){e>>>=0,t>>>=0,r||I(e,t,this.length);let n=this[e],i=1,s=0;for(;++s<t&&(i*=256);)n+=this[e+s]*i;return n>=(i*=128)&&(n-=Math.pow(2,8*t)),n},h.prototype.readIntBE=function(e,t,r){e>>>=0,t>>>=0,r||I(e,t,this.length);let n=t,i=1,s=this[e+--n];for(;n>0&&(i*=256);)s+=this[e+--n]*i;return s>=(i*=128)&&(s-=Math.pow(2,8*t)),s},h.prototype.readInt8=function(e,t){return(e>>>=0,t||I(e,1,this.length),128&this[e])?-((255-this[e]+1)*1):this[e]},h.prototype.readInt16LE=function(e,t){e>>>=0,t||I(e,2,this.length);let r=this[e]|this[e+1]<<8;return 32768&r?0xffff0000|r:r},h.prototype.readInt16BE=function(e,t){e>>>=0,t||I(e,2,this.length);let r=this[e+1]|this[e]<<8;return 32768&r?0xffff0000|r:r},h.prototype.readInt32LE=function(e,t){return e>>>=0,t||I(e,4,this.length),this[e]|this[e+1]<<8|this[e+2]<<16|this[e+3]<<24},h.prototype.readInt32BE=function(e,t){return e>>>=0,t||I(e,4,this.length),this[e]<<24|this[e+1]<<16|this[e+2]<<8|this[e+3]},h.prototype.readBigInt64LE=q(function(e){P(e>>>=0,"offset");let t=this[e],r=this[e+7];return(void 0===t||void 0===r)&&L(e,this.length-8),(BigInt(this[e+4]+256*this[e+5]+65536*this[e+6]+(r<<24))<<BigInt(32))+BigInt(t+256*this[++e]+65536*this[++e]+0x1000000*this[++e])}),h.prototype.readBigInt64BE=q(function(e){P(e>>>=0,"offset");let t=this[e],r=this[e+7];return(void 0===t||void 0===r)&&L(e,this.length-8),(BigInt((t<<24)+65536*this[++e]+256*this[++e]+this[++e])<<BigInt(32))+BigInt(0x1000000*this[++e]+65536*this[++e]+256*this[++e]+r)}),h.prototype.readFloatLE=function(e,t){return e>>>=0,t||I(e,4,this.length),a.read(this,e,!0,23,4)},h.prototype.readFloatBE=function(e,t){return e>>>=0,t||I(e,4,this.length),a.read(this,e,!1,23,4)},h.prototype.readDoubleLE=function(e,t){return e>>>=0,t||I(e,8,this.length),a.read(this,e,!0,52,8)},h.prototype.readDoubleBE=function(e,t){return e>>>=0,t||I(e,8,this.length),a.read(this,e,!1,52,8)},h.prototype.writeUintLE=h.prototype.writeUIntLE=function(e,t,r,n){if(e=+e,t>>>=0,r>>>=0,!n){let n=Math.pow(2,8*r)-1;T(this,e,t,r,n,0)}let i=1,s=0;for(this[t]=255&e;++s<r&&(i*=256);)this[t+s]=e/i&255;return t+r},h.prototype.writeUintBE=h.prototype.writeUIntBE=function(e,t,r,n){if(e=+e,t>>>=0,r>>>=0,!n){let n=Math.pow(2,8*r)-1;T(this,e,t,r,n,0)}let i=r-1,s=1;for(this[t+i]=255&e;--i>=0&&(s*=256);)this[t+i]=e/s&255;return t+r},h.prototype.writeUint8=h.prototype.writeUInt8=function(e,t,r){return e=+e,t>>>=0,r||T(this,e,t,1,255,0),this[t]=255&e,t+1},h.prototype.writeUint16LE=h.prototype.writeUInt16LE=function(e,t,r){return e=+e,t>>>=0,r||T(this,e,t,2,65535,0),this[t]=255&e,this[t+1]=e>>>8,t+2},h.prototype.writeUint16BE=h.prototype.writeUInt16BE=function(e,t,r){return e=+e,t>>>=0,r||T(this,e,t,2,65535,0),this[t]=e>>>8,this[t+1]=255&e,t+2},h.prototype.writeUint32LE=h.prototype.writeUInt32LE=function(e,t,r){return e=+e,t>>>=0,r||T(this,e,t,4,0xffffffff,0),this[t+3]=e>>>24,this[t+2]=e>>>16,this[t+1]=e>>>8,this[t]=255&e,t+4},h.prototype.writeUint32BE=h.prototype.writeUInt32BE=function(e,t,r){return e=+e,t>>>=0,r||T(this,e,t,4,0xffffffff,0),this[t]=e>>>24,this[t+1]=e>>>16,this[t+2]=e>>>8,this[t+3]=255&e,t+4},h.prototype.writeBigUInt64LE=q(function(e,t=0){return S(this,e,t,BigInt(0),BigInt("0xffffffffffffffff"))}),h.prototype.writeBigUInt64BE=q(function(e,t=0){return C(this,e,t,BigInt(0),BigInt("0xffffffffffffffff"))}),h.prototype.writeIntLE=function(e,t,r,n){if(e=+e,t>>>=0,!n){let n=Math.pow(2,8*r-1);T(this,e,t,r,n-1,-n)}let i=0,s=1,o=0;for(this[t]=255&e;++i<r&&(s*=256);)e<0&&0===o&&0!==this[t+i-1]&&(o=1),this[t+i]=(e/s>>0)-o&255;return t+r},h.prototype.writeIntBE=function(e,t,r,n){if(e=+e,t>>>=0,!n){let n=Math.pow(2,8*r-1);T(this,e,t,r,n-1,-n)}let i=r-1,s=1,o=0;for(this[t+i]=255&e;--i>=0&&(s*=256);)e<0&&0===o&&0!==this[t+i+1]&&(o=1),this[t+i]=(e/s>>0)-o&255;return t+r},h.prototype.writeInt8=function(e,t,r){return e=+e,t>>>=0,r||T(this,e,t,1,127,-128),e<0&&(e=255+e+1),this[t]=255&e,t+1},h.prototype.writeInt16LE=function(e,t,r){return e=+e,t>>>=0,r||T(this,e,t,2,32767,-32768),this[t]=255&e,this[t+1]=e>>>8,t+2},h.prototype.writeInt16BE=function(e,t,r){return e=+e,t>>>=0,r||T(this,e,t,2,32767,-32768),this[t]=e>>>8,this[t+1]=255&e,t+2},h.prototype.writeInt32LE=function(e,t,r){return e=+e,t>>>=0,r||T(this,e,t,4,0x7fffffff,-0x80000000),this[t]=255&e,this[t+1]=e>>>8,this[t+2]=e>>>16,this[t+3]=e>>>24,t+4},h.prototype.writeInt32BE=function(e,t,r){return e=+e,t>>>=0,r||T(this,e,t,4,0x7fffffff,-0x80000000),e<0&&(e=0xffffffff+e+1),this[t]=e>>>24,this[t+1]=e>>>16,this[t+2]=e>>>8,this[t+3]=255&e,t+4},h.prototype.writeBigInt64LE=q(function(e,t=0){return S(this,e,t,-BigInt("0x8000000000000000"),BigInt("0x7fffffffffffffff"))}),h.prototype.writeBigInt64BE=q(function(e,t=0){return C(this,e,t,-BigInt("0x8000000000000000"),BigInt("0x7fffffffffffffff"))}),h.prototype.writeFloatLE=function(e,t,r){return k(this,e,t,!0,r)},h.prototype.writeFloatBE=function(e,t,r){return k(this,e,t,!1,r)},h.prototype.writeDoubleLE=function(e,t,r){return x(this,e,t,!0,r)},h.prototype.writeDoubleBE=function(e,t,r){return x(this,e,t,!1,r)},h.prototype.copy=function(e,t,r,n){if(!h.isBuffer(e))throw TypeError("argument should be a Buffer");if(r||(r=0),n||0===n||(n=this.length),t>=e.length&&(t=e.length),t||(t=0),n>0&&n<r&&(n=r),n===r||0===e.length||0===this.length)return 0;if(t<0)throw RangeError("targetStart out of bounds");if(r<0||r>=this.length)throw RangeError("Index out of range");if(n<0)throw RangeError("sourceEnd out of bounds");n>this.length&&(n=this.length),e.length-t<n-r&&(n=e.length-t+r);let i=n-r;return this===e&&"function"==typeof Uint8Array.prototype.copyWithin?this.copyWithin(t,r,n):Uint8Array.prototype.set.call(e,this.subarray(r,n),t),i},h.prototype.fill=function(e,t,r,n){let i;if("string"==typeof e){if("string"==typeof t?(n=t,t=0,r=this.length):"string"==typeof r&&(n=r,r=this.length),void 0!==n&&"string"!=typeof n)throw TypeError("encoding must be a string");if("string"==typeof n&&!h.isEncoding(n))throw TypeError("Unknown encoding: "+n);if(1===e.length){let t=e.charCodeAt(0);("utf8"===n&&t<128||"latin1"===n)&&(e=t)}}else"number"==typeof e?e&=255:"boolean"==typeof e&&(e=Number(e));if(t<0||this.length<t||this.length<r)throw RangeError("Out of range index");if(r<=t)return this;if(t>>>=0,r=void 0===r?this.length:r>>>0,e||(e=0),"number"==typeof e)for(i=t;i<r;++i)this[i]=e;else{let s=h.isBuffer(e)?e:h.from(e,n),o=s.length;if(0===o)throw TypeError('The value "'+e+'" is invalid for argument "value"');for(i=0;i<r-t;++i)this[i+t]=s[i%o]}return this};let R={};function N(e,t,r){R[e]=class extends r{constructor(){super(),Object.defineProperty(this,"message",{value:t.apply(this,arguments),writable:!0,configurable:!0}),this.name=`${this.name} [${e}]`,this.stack,delete this.name}get code(){return e}set code(e){Object.defineProperty(this,"code",{configurable:!0,enumerable:!0,value:e,writable:!0})}toString(){return`${this.name} [${e}]: ${this.message}`}}}function D(e){let t="",r=e.length,n="-"===e[0]?1:0;for(;r>=n+4;r-=3)t=`_${e.slice(r-3,r)}${t}`;return`${e.slice(0,r)}${t}`}function O(e,t,r,n,i,s){if(e>r||e<t){let n;let i="bigint"==typeof t?"n":"";throw n=s>3?0===t||t===BigInt(0)?`>= 0${i} and < 2${i} ** ${(s+1)*8}${i}`:`>= -(2${i} ** ${(s+1)*8-1}${i}) and < 2 ** ${(s+1)*8-1}${i}`:`>= ${t}${i} and <= ${r}${i}`,new R.ERR_OUT_OF_RANGE("value",n,e)}P(i,"offset"),(void 0===n[i]||void 0===n[i+s])&&L(i,n.length-(s+1))}function P(e,t){if("number"!=typeof e)throw new R.ERR_INVALID_ARG_TYPE(t,"number",e)}function L(e,t,r){if(Math.floor(e)!==e)throw P(e,r),new R.ERR_OUT_OF_RANGE(r||"offset","an integer",e);if(t<0)throw new R.ERR_BUFFER_OUT_OF_BOUNDS;throw new R.ERR_OUT_OF_RANGE(r||"offset",`>= ${r?1:0} and <= ${t}`,e)}N("ERR_BUFFER_OUT_OF_BOUNDS",function(e){return e?`${e} is outside of buffer bounds`:"Attempt to access memory outside buffer bounds"},RangeError),N("ERR_INVALID_ARG_TYPE",function(e,t){return`The "${e}" argument must be of type number. Received type ${typeof t}`},TypeError),N("ERR_OUT_OF_RANGE",function(e,t,r){let n=`The value of "${e}" is out of range.`,i=r;return Number.isInteger(r)&&Math.abs(r)>0x100000000?i=D(String(r)):"bigint"==typeof r&&(i=String(r),(r>BigInt(2)**BigInt(32)||r<-(BigInt(2)**BigInt(32)))&&(i=D(i)),i+="n"),n+=` It must be ${t}. Received ${i}`},RangeError);let M=/[^+/0-9A-Za-z-_]/g;function U(e,t){let r;t=t||1/0;let n=e.length,i=null,s=[];for(let o=0;o<n;++o){if((r=e.charCodeAt(o))>55295&&r<57344){if(!i){if(r>56319||o+1===n){(t-=3)>-1&&s.push(239,191,189);continue}i=r;continue}if(r<56320){(t-=3)>-1&&s.push(239,191,189),i=r;continue}r=(i-55296<<10|r-56320)+65536}else i&&(t-=3)>-1&&s.push(239,191,189);if(i=null,r<128){if((t-=1)<0)break;s.push(r)}else if(r<2048){if((t-=2)<0)break;s.push(r>>6|192,63&r|128)}else if(r<65536){if((t-=3)<0)break;s.push(r>>12|224,r>>6&63|128,63&r|128)}else if(r<1114112){if((t-=4)<0)break;s.push(r>>18|240,r>>12&63|128,r>>6&63|128,63&r|128)}else throw Error("Invalid code point")}return s}function V(e){return o.toByteArray(function(e){if((e=(e=e.split("=")[0]).trim().replace(M,"")).length<2)return"";for(;e.length%4!=0;)e+="=";return e}(e))}function F(e,t,r,n){let i;for(i=0;i<n&&!(i+r>=t.length)&&!(i>=e.length);++i)t[i+r]=e[i];return i}function B(e,t){return e instanceof t||null!=e&&null!=e.constructor&&null!=e.constructor.name&&e.constructor.name===t.name}let j=function(){let e="0123456789abcdef",t=Array(256);for(let r=0;r<16;++r){let n=16*r;for(let i=0;i<16;++i)t[n+i]=e[r]+e[i]}return t}();function q(e){return"undefined"==typeof BigInt?$:e}function $(){throw Error("BigInt not supported")}}),s("kuxul",function(t,r){e(t.exports,"toByteArray",()=>n,e=>n=e),e(t.exports,"fromByteArray",()=>i,e=>i=e),n=function(e){var t,r,n=function(e){var t=e.length;if(t%4>0)throw Error("Invalid string. Length must be a multiple of 4");var r=e.indexOf("=");-1===r&&(r=t);var n=r===t?0:4-r%4;return[r,n]}(e),i=n[0],s=n[1],l=new a((i+s)*3/4-s),u=0,h=s>0?i-4:i;for(r=0;r<h;r+=4)t=o[e.charCodeAt(r)]<<18|o[e.charCodeAt(r+1)]<<12|o[e.charCodeAt(r+2)]<<6|o[e.charCodeAt(r+3)],l[u++]=t>>16&255,l[u++]=t>>8&255,l[u++]=255&t;return 2===s&&(t=o[e.charCodeAt(r)]<<2|o[e.charCodeAt(r+1)]>>4,l[u++]=255&t),1===s&&(t=o[e.charCodeAt(r)]<<10|o[e.charCodeAt(r+1)]<<4|o[e.charCodeAt(r+2)]>>2,l[u++]=t>>8&255,l[u++]=255&t),l},i=function(e){for(var t,r=e.length,n=r%3,i=[],o=0,a=r-n;o<a;o+=16383)i.push(function(e,t,r){for(var n,i=[],o=t;o<r;o+=3)i.push(s[(n=(e[o]<<16&0xff0000)+(e[o+1]<<8&65280)+(255&e[o+2]))>>18&63]+s[n>>12&63]+s[n>>6&63]+s[63&n]);return i.join("")}(e,o,o+16383>a?a:o+16383));return 1===n?i.push(s[(t=e[r-1])>>2]+s[t<<4&63]+"=="):2===n&&i.push(s[(t=(e[r-2]<<8)+e[r-1])>>10]+s[t>>4&63]+s[t<<2&63]+"="),i.join("")};for(var n,i,s=[],o=[],a="undefined"!=typeof Uint8Array?Uint8Array:Array,l="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",u=0,h=l.length;u<h;++u)s[u]=l[u],o[l.charCodeAt(u)]=u;o["-".charCodeAt(0)]=62,o["_".charCodeAt(0)]=63}),s("9NvM5",function(t,r){var n,i;e(t.exports,"read",()=>n,e=>n=e),e(t.exports,"write",()=>i,e=>i=e),n=function(e,t,r,n,i){var s,o,a=8*i-n-1,l=(1<<a)-1,u=l>>1,h=-7,c=r?i-1:0,f=r?-1:1,d=e[t+c];for(c+=f,s=d&(1<<-h)-1,d>>=-h,h+=a;h>0;s=256*s+e[t+c],c+=f,h-=8);for(o=s&(1<<-h)-1,s>>=-h,h+=n;h>0;o=256*o+e[t+c],c+=f,h-=8);if(0===s)s=1-u;else{if(s===l)return o?NaN:1/0*(d?-1:1);o+=Math.pow(2,n),s-=u}return(d?-1:1)*o*Math.pow(2,s-n)},i=function(e,t,r,n,i,s){var o,a,l,u=8*s-i-1,h=(1<<u)-1,c=h>>1,f=23===i?5960464477539062e-23:0,d=n?0:s-1,p=n?1:-1,g=t<0||0===t&&1/t<0?1:0;for(isNaN(t=Math.abs(t))||t===1/0?(a=isNaN(t)?1:0,o=h):(o=Math.floor(Math.log(t)/Math.LN2),t*(l=Math.pow(2,-o))<1&&(o--,l*=2),o+c>=1?t+=f/l:t+=f*Math.pow(2,1-c),t*l>=2&&(o++,l/=2),o+c>=h?(a=0,o=h):o+c>=1?(a=(t*l-1)*Math.pow(2,i),o+=c):(a=t*Math.pow(2,c-1)*Math.pow(2,i),o=0));i>=8;e[r+d]=255&a,d+=p,a/=256,i-=8);for(o=o<<i|a,u+=i;u>0;e[r+d]=255&o,d+=p,o/=256,u-=8);e[r+d-p]|=128*g}}),s("6AR8M",function(t,r){e(t.exports,"getAuth",()=>i("guynj").o),e(t.exports,"GoogleAuthProvider",()=>i("guynj").X),e(t.exports,"signInWithPopup",()=>i("guynj").c),e(t.exports,"signOut",()=>i("guynj").C),i("eljci")}),s("eljci",function(t,r){e(t.exports,"GoogleAuthProvider",()=>i("guynj").X),e(t.exports,"getAuth",()=>i("guynj").o),e(t.exports,"signInWithPopup",()=>i("guynj").c),e(t.exports,"signOut",()=>i("guynj").C),i("guynj"),i("7xvHX"),i("gMVVg"),i("5Z2ef"),i("eryG9")}),s("guynj",function(t,r){e(t.exports,"X",()=>e0),e(t.exports,"C",()=>te),e(t.exports,"c",()=>tP),e(t.exports,"o",()=>rl);var n,s=i("7xvHX"),o=i("gMVVg"),a=i("5Z2ef"),l=i("7WQrb"),u=i("eryG9");function h(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}let c=new o.ErrorFactory("auth","Firebase",h()),f=new a.Logger("@firebase/auth");function d(e,...t){f.logLevel<=a.LogLevel.ERROR&&f.error(`Auth (${s.SDK_VERSION}): ${e}`,...t)}/**
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
 */function p(e,...t){throw v(e,...t)}function g(e,...t){return v(e,...t)}function m(e,t,r){let n=Object.assign(Object.assign({},h()),{[t]:r});return new o.ErrorFactory("auth","Firebase",n).create(t,{appName:e.name})}function y(e){return m(e,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function v(e,...t){if("string"!=typeof e){let r=t[0],n=[...t.slice(1)];return n[0]&&(n[0].appName=e.name),e._errorFactory.create(r,...n)}return c.create(e,...t)}function w(e,t,...r){if(!e)throw v(t,...r)}function _(e){let t="INTERNAL ASSERTION FAILED: "+e;throw d(t),Error(t)}/**
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
 */function E(){var e;return"undefined"!=typeof self&&(null===(e=self.location)||void 0===e?void 0:e.href)||""}function b(){var e;return"undefined"!=typeof self&&(null===(e=self.location)||void 0===e?void 0:e.protocol)||null}/**
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
 */class I{constructor(e,t){var r;this.shortDelay=e,this.longDelay=t,r="Short delay should be less than long delay!",t>e||_(r),this.isMobile=(0,o.isMobileCordova)()||(0,o.isReactNative)()}get(){return!("undefined"!=typeof navigator&&navigator&&"onLine"in navigator&&"boolean"==typeof navigator.onLine&&("http:"===b()||"https:"===b()||(0,o.isBrowserExtension)()||"connection"in navigator))||navigator.onLine?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function T(e,t){var r,n;r=e.emulator,n="Emulator should always be set here",r||_(n);let{url:i}=e.emulator;return t?`${i}${t.startsWith("/")?t.slice(1):t}`:i}/**
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
 */class S{static initialize(e,t,r){this.fetchImpl=e,t&&(this.headersImpl=t),r&&(this.responseImpl=r)}static fetch(){return this.fetchImpl?this.fetchImpl:"undefined"!=typeof self&&"fetch"in self?self.fetch:"undefined"!=typeof globalThis&&globalThis.fetch?globalThis.fetch:"undefined"!=typeof fetch?fetch:void _("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){return this.headersImpl?this.headersImpl:"undefined"!=typeof self&&"Headers"in self?self.Headers:"undefined"!=typeof globalThis&&globalThis.Headers?globalThis.Headers:"undefined"!=typeof Headers?Headers:void _("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){return this.responseImpl?this.responseImpl:"undefined"!=typeof self&&"Response"in self?self.Response:"undefined"!=typeof globalThis&&globalThis.Response?globalThis.Response:"undefined"!=typeof Response?Response:void _("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */let C={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"},A=new I(3e4,6e4);function k(e,t){return e.tenantId&&!t.tenantId?Object.assign(Object.assign({},t),{tenantId:e.tenantId}):t}async function x(e,t,r,n,i={}){return R(e,i,async()=>{let i={},s={};n&&("GET"===t?s=n:i={body:JSON.stringify(n)});let a=(0,o.querystring)(Object.assign({key:e.config.apiKey},s)).slice(1),l=await e._getAdditionalHeaders();l["Content-Type"]="application/json",e.languageCode&&(l["X-Firebase-Locale"]=e.languageCode);let u=Object.assign({method:t,headers:l},i);return(0,o.isCloudflareWorker)()||(u.referrerPolicy="no-referrer"),S.fetch()(D(e,e.config.apiHost,r,a),u)})}async function R(e,t,r){e._canInitEmulator=!1;let n=Object.assign(Object.assign({},C),t);try{let t=new O(e),i=await Promise.race([r(),t.promise]);t.clearNetworkTimeout();let s=await i.json();if("needConfirmation"in s)throw P(e,"account-exists-with-different-credential",s);if(i.ok&&!("errorMessage"in s))return s;{let[t,r]=(i.ok?s.errorMessage:s.error.message).split(" : ");if("FEDERATED_USER_ID_ALREADY_LINKED"===t)throw P(e,"credential-already-in-use",s);if("EMAIL_EXISTS"===t)throw P(e,"email-already-in-use",s);if("USER_DISABLED"===t)throw P(e,"user-disabled",s);let o=n[t]||t.toLowerCase().replace(/[_\s]+/g,"-");if(r)throw m(e,o,r);p(e,o)}}catch(t){if(t instanceof o.FirebaseError)throw t;p(e,"network-request-failed",{message:String(t)})}}async function N(e,t,r,n,i={}){let s=await x(e,t,r,n,i);return"mfaPendingCredential"in s&&p(e,"multi-factor-auth-required",{_serverResponse:s}),s}function D(e,t,r,n){let i=`${t}${r}?${n}`;return e.config.emulator?T(e.config,i):`${e.config.apiScheme}://${i}`}class O{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((e,t)=>{this.timer=setTimeout(()=>t(g(this.auth,"network-request-failed")),A.get())})}}function P(e,t,r){let n={appName:e.name};r.email&&(n.email=r.email),r.phoneNumber&&(n.phoneNumber=r.phoneNumber);let i=g(e,t,n);return i.customData._tokenResponse=r,i}function L(e){return void 0!==e&&void 0!==e.enterprise}class M{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],void 0===e.recaptchaKey)throw Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||0===this.recaptchaEnforcementState.length)return null;for(let t of this.recaptchaEnforcementState)if(t.provider&&t.provider===e)return function(e){switch(e){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}(t.enforcementState);return null}isProviderEnabled(e){return"ENFORCE"===this.getProviderEnforcementState(e)||"AUDIT"===this.getProviderEnforcementState(e)}isAnyProviderEnabled(){return this.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")||this.isProviderEnabled("PHONE_PROVIDER")}}async function U(e,t){return x(e,"GET","/v2/recaptchaConfig",k(e,t))}/**
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
 */async function V(e,t){return x(e,"POST","/v1/accounts:delete",t)}async function F(e,t){return x(e,"POST","/v1/accounts:lookup",t)}/**
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
 */function B(e){if(e)try{let t=new Date(Number(e));if(!isNaN(t.getTime()))return t.toUTCString()}catch(e){}}async function j(e,t=!1){let r=(0,o.getModularInstance)(e),n=await r.getIdToken(t),i=$(n);w(i&&i.exp&&i.auth_time&&i.iat,r.auth,"internal-error");let s="object"==typeof i.firebase?i.firebase:void 0,a=null==s?void 0:s.sign_in_provider;return{claims:i,token:n,authTime:B(q(i.auth_time)),issuedAtTime:B(q(i.iat)),expirationTime:B(q(i.exp)),signInProvider:a||null,signInSecondFactor:(null==s?void 0:s.sign_in_second_factor)||null}}function q(e){return 1e3*Number(e)}function $(e){let[t,r,n]=e.split(".");if(void 0===t||void 0===r||void 0===n)return d("JWT malformed, contained fewer than 3 sections"),null;try{let e=(0,o.base64Decode)(r);if(!e)return d("Failed to decode base64 JWT payload"),null;return JSON.parse(e)}catch(e){return d("Caught error parsing JWT payload as JSON",null==e?void 0:e.toString()),null}}function z(e){let t=$(e);return w(t,"internal-error"),w(void 0!==t.exp,"internal-error"),w(void 0!==t.iat,"internal-error"),Number(t.exp)-Number(t.iat)}/**
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
 */async function H(e,t,r=!1){if(r)return t;try{return await t}catch(t){throw t instanceof o.FirebaseError&&function({code:e}){return"auth/user-disabled"===e||"auth/user-token-expired"===e}(t)&&e.auth.currentUser===e&&await e.auth.signOut(),t}}/**
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
 */class K{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,null!==this.timerId&&clearTimeout(this.timerId))}getInterval(e){var t;if(!e)return this.errorBackoff=3e4,Math.max(0,(null!==(t=this.user.stsTokenManager.expirationTime)&&void 0!==t?t:0)-Date.now()-3e5);{let e=this.errorBackoff;return this.errorBackoff=Math.min(2*this.errorBackoff,96e4),e}}schedule(e=!1){if(!this.isRunning)return;let t=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(null==e?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class G{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=B(this.lastLoginAt),this.creationTime=B(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function W(e){var t;let r=e.auth,n=await e.getIdToken(),i=await H(e,F(r,{idToken:n}));w(null==i?void 0:i.users.length,r,"internal-error");let s=i.users[0];e._notifyReloadListener(s);let o=(null===(t=s.providerUserInfo)||void 0===t?void 0:t.length)?X(s.providerUserInfo):[],a=[...e.providerData.filter(e=>!o.some(t=>t.providerId===e.providerId)),...o],l=e.isAnonymous,u=!(e.email&&s.passwordHash)&&!(null==a?void 0:a.length);Object.assign(e,{uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:a,metadata:new G(s.createdAt,s.lastLoginAt),isAnonymous:!!l&&u})}async function Q(e){let t=(0,o.getModularInstance)(e);await W(t),await t.auth._persistUserIfCurrent(t),t.auth._notifyListenersIfCurrent(t)}function X(e){return e.map(e=>{var{providerId:t}=e,r=(0,l.__rest)(e,["providerId"]);return{providerId:t,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
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
 */async function J(e,t){let r=await R(e,{},async()=>{let r=(0,o.querystring)({grant_type:"refresh_token",refresh_token:t}).slice(1),{tokenApiHost:n,apiKey:i}=e.config,s=D(e,n,"/v1/token",`key=${i}`),a=await e._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",S.fetch()(s,{method:"POST",headers:a,body:r})});return{accessToken:r.access_token,expiresIn:r.expires_in,refreshToken:r.refresh_token}}async function Y(e,t){return x(e,"POST","/v2/accounts:revokeToken",k(e,t))}/**
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
 */class Z{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){w(e.idToken,"internal-error"),w(void 0!==e.idToken,"internal-error"),w(void 0!==e.refreshToken,"internal-error");let t="expiresIn"in e&&void 0!==e.expiresIn?Number(e.expiresIn):z(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}updateFromIdToken(e){w(0!==e.length,"internal-error");let t=z(e);this.updateTokensAndExpiration(e,null,t)}async getToken(e,t=!1){return t||!this.accessToken||this.isExpired?(w(this.refreshToken,e,"user-token-expired"),this.refreshToken)?(await this.refresh(e,this.refreshToken),this.accessToken):null:this.accessToken}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){let{accessToken:r,refreshToken:n,expiresIn:i}=await J(e,t);this.updateTokensAndExpiration(r,n,Number(i))}updateTokensAndExpiration(e,t,r){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+1e3*r}static fromJSON(e,t){let{refreshToken:r,accessToken:n,expirationTime:i}=t,s=new Z;return r&&(w("string"==typeof r,"internal-error",{appName:e}),s.refreshToken=r),n&&(w("string"==typeof n,"internal-error",{appName:e}),s.accessToken=n),i&&(w("number"==typeof i,"internal-error",{appName:e}),s.expirationTime=i),s}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Z,this.toJSON())}_performRefresh(){return _("not implemented")}}/**
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
 */function ee(e,t){w("string"==typeof e||void 0===e,"internal-error",{appName:t})}class et{constructor(e){var{uid:t,auth:r,stsTokenManager:n}=e,i=(0,l.__rest)(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new K(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=t,this.auth=r,this.stsTokenManager=n,this.accessToken=n.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new G(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){let t=await H(this,this.stsTokenManager.getToken(this.auth,e));return w(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return j(this,e)}reload(){return Q(this)}_assign(e){this!==e&&(w(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(e=>Object.assign({},e)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){let t=new et(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return t.metadata._copy(this.metadata),t}_onReload(e){w(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),t&&await W(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if((0,s._isFirebaseServerApp)(this.auth.app))return Promise.reject(y(this.auth));let e=await this.getIdToken();return await H(this,V(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){var r,n,i,s,o,a,l,u;let h=null!==(r=t.displayName)&&void 0!==r?r:void 0,c=null!==(n=t.email)&&void 0!==n?n:void 0,f=null!==(i=t.phoneNumber)&&void 0!==i?i:void 0,d=null!==(s=t.photoURL)&&void 0!==s?s:void 0,p=null!==(o=t.tenantId)&&void 0!==o?o:void 0,g=null!==(a=t._redirectEventId)&&void 0!==a?a:void 0,m=null!==(l=t.createdAt)&&void 0!==l?l:void 0,y=null!==(u=t.lastLoginAt)&&void 0!==u?u:void 0,{uid:v,emailVerified:_,isAnonymous:E,providerData:b,stsTokenManager:I}=t;w(v&&I,e,"internal-error");let T=Z.fromJSON(this.name,I);w("string"==typeof v,e,"internal-error"),ee(h,e.name),ee(c,e.name),w("boolean"==typeof _,e,"internal-error"),w("boolean"==typeof E,e,"internal-error"),ee(f,e.name),ee(d,e.name),ee(p,e.name),ee(g,e.name),ee(m,e.name),ee(y,e.name);let S=new et({uid:v,auth:e,email:c,emailVerified:_,displayName:h,isAnonymous:E,photoURL:d,phoneNumber:f,tenantId:p,stsTokenManager:T,createdAt:m,lastLoginAt:y});return b&&Array.isArray(b)&&(S.providerData=b.map(e=>Object.assign({},e))),g&&(S._redirectEventId=g),S}static async _fromIdTokenResponse(e,t,r=!1){let n=new Z;n.updateFromServerResponse(t);let i=new et({uid:t.localId,auth:e,stsTokenManager:n,isAnonymous:r});return await W(i),i}static async _fromGetAccountInfoResponse(e,t,r){let n=t.users[0];w(void 0!==n.localId,"internal-error");let i=void 0!==n.providerUserInfo?X(n.providerUserInfo):[],s=!(n.email&&n.passwordHash)&&!(null==i?void 0:i.length),o=new Z;o.updateFromIdToken(r);let a=new et({uid:n.localId,auth:e,stsTokenManager:o,isAnonymous:s});return Object.assign(a,{uid:n.localId,displayName:n.displayName||null,photoURL:n.photoUrl||null,email:n.email||null,emailVerified:n.emailVerified||!1,phoneNumber:n.phoneNumber||null,tenantId:n.tenantId||null,providerData:i,metadata:new G(n.createdAt,n.lastLoginAt),isAnonymous:!(n.email&&n.passwordHash)&&!(null==i?void 0:i.length)}),a}}/**
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
 */let er=new Map;function en(e){var t,r;t="Expected a class definition",e instanceof Function||_(t);let n=er.get(e);return n?(r="Instance stored in cache mismatched with class",n instanceof e||_(r)):(n=new e,er.set(e,n)),n}/**
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
 */class ei{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){let t=this.storage[e];return void 0===t?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}/**
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
 */function es(e,t,r){return`firebase:${e}:${t}:${r}`}ei.type="NONE";class eo{constructor(e,t,r){this.persistence=e,this.auth=t,this.userKey=r;let{config:n,name:i}=this.auth;this.fullUserKey=es(this.userKey,n.apiKey,i),this.fullPersistenceKey=es("persistence",n.apiKey,i),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){let e=await this.persistence._get(this.fullUserKey);return e?et._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;let t=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,t)return this.setCurrentUser(t)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,r="authUser"){if(!t.length)return new eo(en(ei),e,r);let n=(await Promise.all(t.map(async e=>{if(await e._isAvailable())return e}))).filter(e=>e),i=n[0]||en(ei),s=es(r,e.config.apiKey,e.name),o=null;for(let r of t)try{let t=await r._get(s);if(t){let n=et._fromJSON(e,t);r!==i&&(o=n),i=r;break}}catch(e){}let a=n.filter(e=>e._shouldAllowMigration);return i._shouldAllowMigration&&a.length&&(i=a[0],o&&await i._set(s,o.toJSON()),await Promise.all(t.map(async e=>{if(e!==i)try{await e._remove(s)}catch(e){}}))),new eo(i,e,r)}}/**
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
 */function ea(e){let t=e.toLowerCase();if(t.includes("opera/")||t.includes("opr/")||t.includes("opios/"))return"Opera";{if(ec(t))return"IEMobile";if(t.includes("msie")||t.includes("trident/"))return"IE";if(t.includes("edge/"))return"Edge";if(el(t))return"Firefox";if(t.includes("silk/"))return"Silk";if(ed(t))return"Blackberry";if(ep(t))return"Webos";if(eu(t))return"Safari";if((t.includes("chrome/")||eh(t))&&!t.includes("edge/"))return"Chrome";if(ef(t))return"Android";let r=e.match(/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/);if((null==r?void 0:r.length)===2)return r[1]}return"Other"}function el(e=(0,o.getUA)()){return/firefox\//i.test(e)}function eu(e=(0,o.getUA)()){let t=e.toLowerCase();return t.includes("safari/")&&!t.includes("chrome/")&&!t.includes("crios/")&&!t.includes("android")}function eh(e=(0,o.getUA)()){return/crios\//i.test(e)}function ec(e=(0,o.getUA)()){return/iemobile/i.test(e)}function ef(e=(0,o.getUA)()){return/android/i.test(e)}function ed(e=(0,o.getUA)()){return/blackberry/i.test(e)}function ep(e=(0,o.getUA)()){return/webos/i.test(e)}function eg(e=(0,o.getUA)()){return/iphone|ipad|ipod/i.test(e)||/macintosh/i.test(e)&&/mobile/i.test(e)}function em(e=(0,o.getUA)()){return eg(e)||ef(e)||ep(e)||ed(e)||/windows phone/i.test(e)||ec(e)}/**
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
 */function ey(e,t=[]){let r;switch(e){case"Browser":r=ea((0,o.getUA)());break;case"Worker":r=`${ea((0,o.getUA)())}-${e}`;break;default:r=e}let n=t.length?t.join(","):"FirebaseCore-web";return`${r}/JsCore/${s.SDK_VERSION}/${n}`}/**
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
 */class ev{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){let r=t=>new Promise((r,n)=>{try{let n=e(t);r(n)}catch(e){n(e)}});r.onAbort=t,this.queue.push(r);let n=this.queue.length-1;return()=>{this.queue[n]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;let t=[];try{for(let r of this.queue)await r(e),r.onAbort&&t.push(r.onAbort)}catch(e){for(let e of(t.reverse(),t))try{e()}catch(e){}throw this.auth._errorFactory.create("login-blocked",{originalMessage:null==e?void 0:e.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
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
 */async function ew(e,t={}){return x(e,"GET","/v2/passwordPolicy",k(e,t))}class e_{constructor(e){var t,r,n,i;let s=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=null!==(t=s.minPasswordLength)&&void 0!==t?t:6,s.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=s.maxPasswordLength),void 0!==s.containsLowercaseCharacter&&(this.customStrengthOptions.containsLowercaseLetter=s.containsLowercaseCharacter),void 0!==s.containsUppercaseCharacter&&(this.customStrengthOptions.containsUppercaseLetter=s.containsUppercaseCharacter),void 0!==s.containsNumericCharacter&&(this.customStrengthOptions.containsNumericCharacter=s.containsNumericCharacter),void 0!==s.containsNonAlphanumericCharacter&&(this.customStrengthOptions.containsNonAlphanumericCharacter=s.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,"ENFORCEMENT_STATE_UNSPECIFIED"===this.enforcementState&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=null!==(n=null===(r=e.allowedNonAlphanumericCharacters)||void 0===r?void 0:r.join(""))&&void 0!==n?n:"",this.forceUpgradeOnSignin=null!==(i=e.forceUpgradeOnSignin)&&void 0!==i&&i,this.schemaVersion=e.schemaVersion}validatePassword(e){var t,r,n,i,s,o;let a={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,a),this.validatePasswordCharacterOptions(e,a),a.isValid&&(a.isValid=null===(t=a.meetsMinPasswordLength)||void 0===t||t),a.isValid&&(a.isValid=null===(r=a.meetsMaxPasswordLength)||void 0===r||r),a.isValid&&(a.isValid=null===(n=a.containsLowercaseLetter)||void 0===n||n),a.isValid&&(a.isValid=null===(i=a.containsUppercaseLetter)||void 0===i||i),a.isValid&&(a.isValid=null===(s=a.containsNumericCharacter)||void 0===s||s),a.isValid&&(a.isValid=null===(o=a.containsNonAlphanumericCharacter)||void 0===o||o),a}validatePasswordLengthOptions(e,t){let r=this.customStrengthOptions.minPasswordLength,n=this.customStrengthOptions.maxPasswordLength;r&&(t.meetsMinPasswordLength=e.length>=r),n&&(t.meetsMaxPasswordLength=e.length<=n)}validatePasswordCharacterOptions(e,t){let r;this.updatePasswordCharacterOptionsStatuses(t,!1,!1,!1,!1);for(let n=0;n<e.length;n++)r=e.charAt(n),this.updatePasswordCharacterOptionsStatuses(t,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,t,r,n,i){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=t)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=n)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=i))}}/**
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
 */class eE{constructor(e,t,r,n){this.app=e,this.heartbeatServiceProvider=t,this.appCheckServiceProvider=r,this.config=n,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new eI(this),this.idTokenSubscription=new eI(this),this.beforeStateQueue=new ev(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=c,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=n.sdkClientVersion}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=en(t)),this._initializationPromise=this.queue(async()=>{var r,n;if(!this._deleted&&(this.persistenceManager=await eo.create(this,e),!this._deleted)){if(null===(r=this._popupRedirectResolver)||void 0===r?void 0:r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch(e){}await this.initializeCurrentUser(t),this.lastNotifiedUid=(null===(n=this.currentUser)||void 0===n?void 0:n.uid)||null,this._deleted||(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;let e=await this.assertedPersistence.getCurrentUser();if(this.currentUser||e){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{let t=await F(this,{idToken:e}),r=await et._fromGetAccountInfoResponse(this,t,e);await this.directlySetCurrentUser(r)}catch(e){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",e),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var t;if((0,s._isFirebaseServerApp)(this.app)){let e=this.app.settings.authIdToken;return e?new Promise(t=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(e).then(t,t))}):this.directlySetCurrentUser(null)}let r=await this.assertedPersistence.getCurrentUser(),n=r,i=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();let r=null===(t=this.redirectUser)||void 0===t?void 0:t._redirectEventId,s=null==n?void 0:n._redirectEventId,o=await this.tryRedirectSignIn(e);(!r||r===s)&&(null==o?void 0:o.user)&&(n=o.user,i=!0)}if(!n)return this.directlySetCurrentUser(null);if(!n._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(n)}catch(e){n=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(e))}return n?this.reloadAndSetCurrentUserOrClear(n):this.directlySetCurrentUser(null)}return(w(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===n._redirectEventId)?this.directlySetCurrentUser(n):this.reloadAndSetCurrentUserOrClear(n)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch(e){await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await W(e)}catch(e){if((null==e?void 0:e.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=function(){if("undefined"==typeof navigator)return null;let e=navigator;return e.languages&&e.languages[0]||e.language||null}()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if((0,s._isFirebaseServerApp)(this.app))return Promise.reject(y(this));let t=e?(0,o.getModularInstance)(e):null;return t&&w(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&w(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return(0,s._isFirebaseServerApp)(this.app)?Promise.reject(y(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return(0,s._isFirebaseServerApp)(this.app)?Promise.reject(y(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(en(e))})}_getRecaptchaConfig(){return null==this.tenantId?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();let t=this._getPasswordPolicyInternal();return t.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):t.validatePassword(e)}_getPasswordPolicyInternal(){return null===this.tenantId?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){let e=new e_(await ew(this));null===this.tenantId?this._projectPasswordPolicy=e:this._tenantPasswordPolicies[this.tenantId]=e}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new o.ErrorFactory("auth","Firebase",e())}onAuthStateChanged(e,t,r){return this.registerStateListener(this.authStateSubscription,e,t,r)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,r){return this.registerStateListener(this.idTokenSubscription,e,t,r)}authStateReady(){return new Promise((e,t)=>{if(this.currentUser)e();else{let r=this.onAuthStateChanged(()=>{r(),e()},t)}})}async revokeAccessToken(e){if(this.currentUser){let t={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:await this.currentUser.getIdToken()};null!=this.tenantId&&(t.tenantId=this.tenantId),await Y(this,t)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:null===(e=this._currentUser)||void 0===e?void 0:e.toJSON()}}async _setRedirectUser(e,t){let r=await this.getOrInitRedirectPersistenceManager(t);return null===e?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){let t=e&&en(e)||this._popupRedirectResolver;w(t,this,"argument-error"),this.redirectPersistenceManager=await eo.create(this,[en(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,r;return(this._isInitialized&&await this.queue(async()=>{}),(null===(t=this._currentUser)||void 0===t?void 0:t._redirectEventId)===e)?this._currentUser:(null===(r=this.redirectUser)||void 0===r?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);let r=null!==(t=null===(e=this.currentUser)||void 0===e?void 0:e.uid)&&void 0!==t?t:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,r,n){if(this._deleted)return()=>{};let i="function"==typeof t?t:t.next.bind(t),s=!1,o=this._isInitialized?Promise.resolve():this._initializationPromise;if(w(o,this,"internal-error"),o.then(()=>{s||i(this.currentUser)}),"function"==typeof t){let i=e.addObserver(t,r,n);return()=>{s=!0,i()}}{let r=e.addObserver(t);return()=>{s=!0,r()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return w(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=ey(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;let t={"X-Client-Version":this.clientVersion};this.app.options.appId&&(t["X-Firebase-gmpid"]=this.app.options.appId);let r=await (null===(e=this.heartbeatServiceProvider.getImmediate({optional:!0}))||void 0===e?void 0:e.getHeartbeatsHeader());r&&(t["X-Firebase-Client"]=r);let n=await this._getAppCheckToken();return n&&(t["X-Firebase-AppCheck"]=n),t}async _getAppCheckToken(){var e;if((0,s._isFirebaseServerApp)(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;let t=await (null===(e=this.appCheckServiceProvider.getImmediate({optional:!0}))||void 0===e?void 0:e.getToken());return(null==t?void 0:t.error)&&function(e,...t){f.logLevel<=a.LogLevel.WARN&&f.warn(`Auth (${s.SDK_VERSION}): ${e}`,...t)}(`Error while retrieving App Check token: ${t.error}`),null==t?void 0:t.token}}function eb(e){return(0,o.getModularInstance)(e)}class eI{constructor(e){this.auth=e,this.observer=null,this.addObserver=(0,o.createSubscribe)(e=>this.observer=e)}get next(){return w(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */let eT={async loadJS(){throw Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function eS(e){return`__${e}${Math.floor(1e6*Math.random())}`}class eC{constructor(){this.enterprise=new eA}ready(e){e()}execute(e,t){return Promise.resolve("token")}render(e,t){return""}}class eA{ready(e){e()}execute(e,t){return Promise.resolve("token")}render(e,t){return""}}let ek="NO_RECAPTCHA";class ex{constructor(e){this.type="recaptcha-enterprise",this.auth=eb(e)}async verify(e="verify",t=!1){async function r(e){if(!t){if(null==e.tenantId&&null!=e._agentRecaptchaConfig)return e._agentRecaptchaConfig.siteKey;if(null!=e.tenantId&&void 0!==e._tenantRecaptchaConfigs[e.tenantId])return e._tenantRecaptchaConfigs[e.tenantId].siteKey}return new Promise(async(t,r)=>{U(e,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(n=>{if(void 0===n.recaptchaKey)r(Error("recaptcha Enterprise site key undefined"));else{let r=new M(n);return null==e.tenantId?e._agentRecaptchaConfig=r:e._tenantRecaptchaConfigs[e.tenantId]=r,t(r.siteKey)}}).catch(e=>{r(e)})})}function n(t,r,n){let i=window.grecaptcha;L(i)?i.enterprise.ready(()=>{i.enterprise.execute(t,{action:e}).then(e=>{r(e)}).catch(()=>{r(ek)})}):n(Error("No reCAPTCHA enterprise script loaded."))}return this.auth.settings.appVerificationDisabledForTesting?new eC().execute("siteKey",{action:"verify"}):new Promise((e,i)=>{r(this.auth).then(r=>{if(!t&&L(window.grecaptcha))n(r,e,i);else{var s;if("undefined"==typeof window){i(Error("RecaptchaVerifier is only supported in browser"));return}let t=eT.recaptchaEnterpriseScript;0!==t.length&&(t+=r),(s=t,eT.loadJS(s)).then(()=>{n(r,e,i)}).catch(e=>{i(e)})}}).catch(e=>{i(e)})})}}async function eR(e,t,r,n=!1,i=!1){let s;let o=new ex(e);if(i)s=ek;else try{s=await o.verify(r)}catch(e){s=await o.verify(r,!0)}let a=Object.assign({},t);if("mfaSmsEnrollment"===r||"mfaSmsSignIn"===r){if("phoneEnrollmentInfo"in a){let e=a.phoneEnrollmentInfo.phoneNumber,t=a.phoneEnrollmentInfo.recaptchaToken;Object.assign(a,{phoneEnrollmentInfo:{phoneNumber:e,recaptchaToken:t,captchaResponse:s,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}else if("phoneSignInInfo"in a){let e=a.phoneSignInInfo.recaptchaToken;Object.assign(a,{phoneSignInInfo:{recaptchaToken:e,captchaResponse:s,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}return a}return n?Object.assign(a,{captchaResp:s}):Object.assign(a,{captchaResponse:s}),Object.assign(a,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(a,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),a}async function eN(e,t,r,n,i){var s,o;if("EMAIL_PASSWORD_PROVIDER"===i){if(null===(s=e._getRecaptchaConfig())||void 0===s||!s.isProviderEnabled("EMAIL_PASSWORD_PROVIDER"))return n(e,t).catch(async i=>{if("auth/missing-recaptcha-token"!==i.code)return Promise.reject(i);{console.log(`${r} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);let i=await eR(e,t,r,"getOobCode"===r);return n(e,i)}});{let i=await eR(e,t,r,"getOobCode"===r);return n(e,i)}}if("PHONE_PROVIDER"!==i)return Promise.reject(i+" provider is not supported.");if(null===(o=e._getRecaptchaConfig())||void 0===o?void 0:o.isProviderEnabled("PHONE_PROVIDER")){let i=await eR(e,t,r);return n(e,i).catch(async i=>{var s;if((null===(s=e._getRecaptchaConfig())||void 0===s?void 0:s.getProviderEnforcementState("PHONE_PROVIDER"))==="AUDIT"&&("auth/missing-recaptcha-token"===i.code||"auth/invalid-app-credential"===i.code)){console.log(`Failed to verify with reCAPTCHA Enterprise. Automatically triggering the reCAPTCHA v2 flow to complete the ${r} flow.`);let i=await eR(e,t,r,!1,!0);return n(e,i)}return Promise.reject(i)})}{let i=await eR(e,t,r,!1,!0);return n(e,i)}}async function eD(e){let t=eb(e),r=new M(await U(t,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}));null==t.tenantId?t._agentRecaptchaConfig=r:t._tenantRecaptchaConfigs[t.tenantId]=r,r.isAnyProviderEnabled()&&new ex(t).verify()}function eO(e){let t=e.indexOf(":");return t<0?"":e.substr(0,t+1)}function eP(e){if(!e)return null;let t=Number(e);return isNaN(t)?null:t}/**
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
 */class eL{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return _("not implemented")}_getIdTokenResponse(e){return _("not implemented")}_linkToIdToken(e,t){return _("not implemented")}_getReauthenticationResolver(e){return _("not implemented")}}async function eM(e,t){return x(e,"POST","/v1/accounts:signUp",t)}/**
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
 */async function eU(e,t){return N(e,"POST","/v1/accounts:signInWithPassword",k(e,t))}/**
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
 */async function eV(e,t){return N(e,"POST","/v1/accounts:signInWithEmailLink",k(e,t))}async function eF(e,t){return N(e,"POST","/v1/accounts:signInWithEmailLink",k(e,t))}/**
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
 */class eB extends eL{constructor(e,t,r,n=null){super("password",r),this._email=e,this._password=t,this._tenantId=n}static _fromEmailAndPassword(e,t){return new eB(e,t,"password")}static _fromEmailAndCode(e,t,r=null){return new eB(e,t,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){let t="string"==typeof e?JSON.parse(e):e;if((null==t?void 0:t.email)&&(null==t?void 0:t.password)){if("password"===t.signInMethod)return this._fromEmailAndPassword(t.email,t.password);if("emailLink"===t.signInMethod)return this._fromEmailAndCode(t.email,t.password,t.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":return eN(e,{returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"},"signInWithPassword",eU,"EMAIL_PASSWORD_PROVIDER");case"emailLink":return eV(e,{email:this._email,oobCode:this._password});default:p(e,"internal-error")}}async _linkToIdToken(e,t){switch(this.signInMethod){case"password":return eN(e,{idToken:t,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",eM,"EMAIL_PASSWORD_PROVIDER");case"emailLink":return eF(e,{idToken:t,email:this._email,oobCode:this._password});default:p(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
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
 */async function ej(e,t){return N(e,"POST","/v1/accounts:signInWithIdp",k(e,t))}class eq extends eL{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){let t=new eq(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):p("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){let t="string"==typeof e?JSON.parse(e):e,{providerId:r,signInMethod:n}=t,i=(0,l.__rest)(t,["providerId","signInMethod"]);if(!r||!n)return null;let s=new eq(r,n);return s.idToken=i.idToken||void 0,s.accessToken=i.accessToken||void 0,s.secret=i.secret,s.nonce=i.nonce,s.pendingToken=i.pendingToken||null,s}_getIdTokenResponse(e){return ej(e,this.buildRequest())}_linkToIdToken(e,t){let r=this.buildRequest();return r.idToken=t,ej(e,r)}_getReauthenticationResolver(e){let t=this.buildRequest();return t.autoCreate=!1,ej(e,t)}buildRequest(){let e={requestUri:"http://localhost",returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{let t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=(0,o.querystring)(t)}return e}}/**
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
 */async function e$(e,t){return x(e,"POST","/v1/accounts:sendVerificationCode",k(e,t))}async function ez(e,t){return N(e,"POST","/v1/accounts:signInWithPhoneNumber",k(e,t))}async function eH(e,t){let r=await N(e,"POST","/v1/accounts:signInWithPhoneNumber",k(e,t));if(r.temporaryProof)throw P(e,"account-exists-with-different-credential",r);return r}let eK={USER_NOT_FOUND:"user-not-found"};async function eG(e,t){return N(e,"POST","/v1/accounts:signInWithPhoneNumber",k(e,Object.assign(Object.assign({},t),{operation:"REAUTH"})),eK)}/**
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
 */class eW extends eL{constructor(e){super("phone","phone"),this.params=e}static _fromVerification(e,t){return new eW({verificationId:e,verificationCode:t})}static _fromTokenResponse(e,t){return new eW({phoneNumber:e,temporaryProof:t})}_getIdTokenResponse(e){return ez(e,this._makeVerificationRequest())}_linkToIdToken(e,t){return eH(e,Object.assign({idToken:t},this._makeVerificationRequest()))}_getReauthenticationResolver(e){return eG(e,this._makeVerificationRequest())}_makeVerificationRequest(){let{temporaryProof:e,phoneNumber:t,verificationId:r,verificationCode:n}=this.params;return e&&t?{temporaryProof:e,phoneNumber:t}:{sessionInfo:r,code:n}}toJSON(){let e={providerId:this.providerId};return this.params.phoneNumber&&(e.phoneNumber=this.params.phoneNumber),this.params.temporaryProof&&(e.temporaryProof=this.params.temporaryProof),this.params.verificationCode&&(e.verificationCode=this.params.verificationCode),this.params.verificationId&&(e.verificationId=this.params.verificationId),e}static fromJSON(e){"string"==typeof e&&(e=JSON.parse(e));let{verificationId:t,verificationCode:r,phoneNumber:n,temporaryProof:i}=e;return r||t||n||i?new eW({verificationId:t,verificationCode:r,phoneNumber:n,temporaryProof:i}):null}}class eQ{constructor(e){var t,r,n,i,s,a;let l=(0,o.querystringDecode)((0,o.extractQuerystring)(e)),u=null!==(t=l.apiKey)&&void 0!==t?t:null,h=null!==(r=l.oobCode)&&void 0!==r?r:null,c=/**
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
 */function(e){switch(e){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}(null!==(n=l.mode)&&void 0!==n?n:null);w(u&&h&&c,"argument-error"),this.apiKey=u,this.operation=c,this.code=h,this.continueUrl=null!==(i=l.continueUrl)&&void 0!==i?i:null,this.languageCode=null!==(s=l.languageCode)&&void 0!==s?s:null,this.tenantId=null!==(a=l.tenantId)&&void 0!==a?a:null}static parseLink(e){let t=function(e){let t=(0,o.querystringDecode)((0,o.extractQuerystring)(e)).link,r=t?(0,o.querystringDecode)((0,o.extractQuerystring)(t)).deep_link_id:null,n=(0,o.querystringDecode)((0,o.extractQuerystring)(e)).deep_link_id;return(n?(0,o.querystringDecode)((0,o.extractQuerystring)(n)).link:null)||n||r||t||e}(e);try{return new eQ(t)}catch(e){return null}}}/**
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
 */class eX{constructor(){this.providerId=eX.PROVIDER_ID}static credential(e,t){return eB._fromEmailAndPassword(e,t)}static credentialWithLink(e,t){let r=eQ.parseLink(t);return w(r,"argument-error"),eB._fromEmailAndCode(e,r.code,r.tenantId)}}eX.PROVIDER_ID="password",eX.EMAIL_PASSWORD_SIGN_IN_METHOD="password",eX.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
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
 */class eJ{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class eY extends eJ{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
 */class eZ extends eY{constructor(){super("facebook.com")}static credential(e){return eq._fromParams({providerId:eZ.PROVIDER_ID,signInMethod:eZ.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return eZ.credentialFromTaggedObject(e)}static credentialFromError(e){return eZ.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return eZ.credential(e.oauthAccessToken)}catch(e){return null}}}eZ.FACEBOOK_SIGN_IN_METHOD="facebook.com",eZ.PROVIDER_ID="facebook.com";/**
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
 */class e0 extends eY{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return eq._fromParams({providerId:e0.PROVIDER_ID,signInMethod:e0.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return e0.credentialFromTaggedObject(e)}static credentialFromError(e){return e0.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;let{oauthIdToken:t,oauthAccessToken:r}=e;if(!t&&!r)return null;try{return e0.credential(t,r)}catch(e){return null}}}e0.GOOGLE_SIGN_IN_METHOD="google.com",e0.PROVIDER_ID="google.com";/**
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
 */class e1 extends eY{constructor(){super("github.com")}static credential(e){return eq._fromParams({providerId:e1.PROVIDER_ID,signInMethod:e1.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return e1.credentialFromTaggedObject(e)}static credentialFromError(e){return e1.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return e1.credential(e.oauthAccessToken)}catch(e){return null}}}e1.GITHUB_SIGN_IN_METHOD="github.com",e1.PROVIDER_ID="github.com";/**
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
 */class e2 extends eY{constructor(){super("twitter.com")}static credential(e,t){return eq._fromParams({providerId:e2.PROVIDER_ID,signInMethod:e2.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return e2.credentialFromTaggedObject(e)}static credentialFromError(e){return e2.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;let{oauthAccessToken:t,oauthTokenSecret:r}=e;if(!t||!r)return null;try{return e2.credential(t,r)}catch(e){return null}}}e2.TWITTER_SIGN_IN_METHOD="twitter.com",e2.PROVIDER_ID="twitter.com";/**
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
 */class e6{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,r,n=!1){return new e6({user:await et._fromIdTokenResponse(e,r,n),providerId:e3(r),_tokenResponse:r,operationType:t})}static async _forOperation(e,t,r){return await e._updateTokensIfNecessary(r,!0),new e6({user:e,providerId:e3(r),_tokenResponse:r,operationType:t})}}function e3(e){return e.providerId?e.providerId:"phoneNumber"in e?"phone":null}/**
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
 */class e5 extends o.FirebaseError{constructor(e,t,r,n){var i;super(t.code,t.message),this.operationType=r,this.user=n,Object.setPrototypeOf(this,e5.prototype),this.customData={appName:e.name,tenantId:null!==(i=e.tenantId)&&void 0!==i?i:void 0,_serverResponse:t.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,t,r,n){return new e5(e,t,r,n)}}function e8(e,t,r,n){return("reauthenticate"===t?r._getReauthenticationResolver(e):r._getIdTokenResponse(e)).catch(r=>{if("auth/multi-factor-auth-required"===r.code)throw e5._fromErrorAndOperation(e,r,t,n);throw r})}async function e4(e,t,r=!1){let n=await H(e,t._linkToIdToken(e.auth,await e.getIdToken()),r);return e6._forOperation(e,"link",n)}/**
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
 */async function e9(e,t,r=!1){let{auth:n}=e;if((0,s._isFirebaseServerApp)(n.app))return Promise.reject(y(n));let i="reauthenticate";try{let s=await H(e,e8(n,i,t,e),r);w(s.idToken,n,"internal-error");let o=$(s.idToken);w(o,n,"internal-error");let{sub:a}=o;return w(e.uid===a,n,"user-mismatch"),e6._forOperation(e,i,s)}catch(e){throw(null==e?void 0:e.code)==="auth/user-not-found"&&p(n,"user-mismatch"),e}}/**
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
 */async function e7(e,t,r=!1){if((0,s._isFirebaseServerApp)(e.app))return Promise.reject(y(e));let n="signIn",i=await e8(e,n,t),o=await e6._fromIdTokenResponse(e,n,i);return r||await e._updateCurrentUser(o.user),o}function te(e){return(0,o.getModularInstance)(e).signOut()}/**
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
 */function tt(e,t){return x(e,"POST","/v2/accounts/mfaEnrollment:start",k(e,t))}new WeakMap;let tr="__sak";/**
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
 */class tn{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{if(!this.storage)return Promise.resolve(!1);return this.storage.setItem(tr,"1"),this.storage.removeItem(tr),Promise.resolve(!0)}catch(e){return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){let t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}class ti extends tn{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=em(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(let t of Object.keys(this.listeners)){let r=this.storage.getItem(t),n=this.localCache[t];r!==n&&e(t,n,r)}}onStorageEvent(e,t=!1){if(!e.key){this.forAllChangedKeys((e,t,r)=>{this.notifyListeners(e,r)});return}let r=e.key;t?this.detachListener():this.stopPolling();let n=()=>{let e=this.storage.getItem(r);(t||this.localCache[r]!==e)&&this.notifyListeners(r,e)},i=this.storage.getItem(r);(0,o.isIE)()&&10===document.documentMode&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(n,10):n()}notifyListeners(e,t){this.localCache[e]=t;let r=this.listeners[e];if(r)for(let e of Array.from(r))e(t?JSON.parse(t):t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,t,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:r}),!0)})},1e3)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){0===Object.keys(this.listeners).length&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),0===this.listeners[e].size&&delete this.listeners[e]),0===Object.keys(this.listeners).length&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){let t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}ti.type="LOCAL";/**
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
 */class ts extends tn{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,t){}_removeListener(e,t){}}ts.type="SESSION";/**
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
 */class to{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){let t=this.receivers.find(t=>t.isListeningto(e));if(t)return t;let r=new to(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){let{eventId:t,eventType:r,data:n}=e.data,i=this.handlersMap[r];if(!(null==i?void 0:i.size))return;e.ports[0].postMessage({status:"ack",eventId:t,eventType:r});let s=Array.from(i).map(async t=>t(e.origin,n)),o=await Promise.all(s.map(async e=>{try{let t=await e;return{fulfilled:!0,value:t}}catch(e){return{fulfilled:!1,reason:e}}}));e.ports[0].postMessage({status:"done",eventId:t,eventType:r,response:o})}_subscribe(e,t){0===Object.keys(this.handlersMap).length&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),t&&0!==this.handlersMap[e].size||delete this.handlersMap[e],0===Object.keys(this.handlersMap).length&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}/**
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
 */function ta(e="",t=10){let r="";for(let e=0;e<t;e++)r+=Math.floor(10*Math.random());return e+r}to.receivers=[];/**
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
 */class tl{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,r=50){let n,i;let s="undefined"!=typeof MessageChannel?new MessageChannel:null;if(!s)throw Error("connection_unavailable");return new Promise((o,a)=>{let l=ta("",20);s.port1.start();let u=setTimeout(()=>{a(Error("unsupported_event"))},r);i={messageChannel:s,onMessage(e){if(e.data.eventId===l)switch(e.data.status){case"ack":clearTimeout(u),n=setTimeout(()=>{a(Error("timeout"))},3e3);break;case"done":clearTimeout(n),o(e.data.response);break;default:clearTimeout(u),clearTimeout(n),a(Error("invalid_response"))}}},this.handlers.add(i),s.port1.addEventListener("message",i.onMessage),this.target.postMessage({eventType:e,eventId:l,data:t},[s.port2])}).finally(()=>{i&&this.removeMessageHandler(i)})}}/**
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
 */function tu(){return window}/**
 * @license
 * Copyright 2020 Google LLC.
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
 */function th(){return void 0!==tu().WorkerGlobalScope&&"function"==typeof tu().importScripts}async function tc(){if(!(null==navigator?void 0:navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch(e){return null}}/**
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
 */let tf="firebaseLocalStorageDb",td="firebaseLocalStorage",tp="fbase_key";class tg{constructor(e){this.request=e}toPromise(){return new Promise((e,t)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{t(this.request.error)})})}}function tm(e,t){return e.transaction([td],t?"readwrite":"readonly").objectStore(td)}function ty(){let e=indexedDB.open(tf,1);return new Promise((t,r)=>{e.addEventListener("error",()=>{r(e.error)}),e.addEventListener("upgradeneeded",()=>{let t=e.result;try{t.createObjectStore(td,{keyPath:tp})}catch(e){r(e)}}),e.addEventListener("success",async()=>{let r=e.result;r.objectStoreNames.contains(td)?t(r):(r.close(),await new tg(indexedDB.deleteDatabase(tf)).toPromise(),t(await ty()))})})}async function tv(e,t,r){return new tg(tm(e,!0).put({[tp]:t,value:r})).toPromise()}async function tw(e,t){let r=tm(e,!1).get(t),n=await new tg(r).toPromise();return void 0===n?null:n.value}function t_(e,t){return new tg(tm(e,!0).delete(t)).toPromise()}class tE{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db||(this.db=await ty()),this.db}async _withRetries(e){let t=0;for(;;)try{let t=await this._openDb();return await e(t)}catch(e){if(t++>3)throw e;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return th()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=to._getInstance(th()?self:null),this.receiver._subscribe("keyChanged",async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)})),this.receiver._subscribe("ping",async(e,t)=>["keyChanged"])}async initializeSender(){var e,t;if(this.activeServiceWorker=await tc(),!this.activeServiceWorker)return;this.sender=new tl(this.activeServiceWorker);let r=await this.sender._send("ping",{},800);r&&(null===(e=r[0])||void 0===e?void 0:e.fulfilled)&&(null===(t=r[0])||void 0===t?void 0:t.value.includes("keyChanged"))&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){var t;if(this.sender&&this.activeServiceWorker&&((null===(t=null==navigator?void 0:navigator.serviceWorker)||void 0===t?void 0:t.controller)||null)===this.activeServiceWorker)try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch(e){}}async _isAvailable(){try{if(!indexedDB)return!1;let e=await ty();return await tv(e,tr,"1"),await t_(e,tr),!0}catch(e){}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite(async()=>(await this._withRetries(r=>tv(r,e,t)),this.localCache[e]=t,this.notifyServiceWorker(e)))}async _get(e){let t=await this._withRetries(t=>tw(t,e));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(t=>t_(t,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){let e=await this._withRetries(e=>new tg(tm(e,!1).getAll()).toPromise());if(!e||0!==this.pendingWrites)return[];let t=[],r=new Set;if(0!==e.length)for(let{fbase_key:n,value:i}of e)r.add(n),JSON.stringify(this.localCache[n])!==JSON.stringify(i)&&(this.notifyListeners(n,i),t.push(n));for(let e of Object.keys(this.localCache))this.localCache[e]&&!r.has(e)&&(this.notifyListeners(e,null),t.push(e));return t}notifyListeners(e,t){this.localCache[e]=t;let r=this.listeners[e];if(r)for(let e of Array.from(r))e(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),800)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){0===Object.keys(this.listeners).length&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),0===this.listeners[e].size&&delete this.listeners[e]),0===Object.keys(this.listeners).length&&this.stopPolling()}}/**
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
 */function tb(e,t){return x(e,"POST","/v2/accounts/mfaSignIn:start",k(e,t))}tE.type="LOCAL",eS("rcb"),new I(3e4,6e4);/**
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
 */let tI="recaptcha";async function tT(e,t,r){var n;if(!e._getRecaptchaConfig())try{await eD(e)}catch(e){console.log("Failed to initialize reCAPTCHA Enterprise config. Triggering the reCAPTCHA v2 verification.")}try{let i;if(i="string"==typeof t?{phoneNumber:t}:t,"session"in i){let t=i.session;if("phoneNumber"in i){w("enroll"===t.type,e,"internal-error");let n={idToken:t.credential,phoneEnrollmentInfo:{phoneNumber:i.phoneNumber,clientType:"CLIENT_TYPE_WEB"}},s=async(e,t)=>{if(t.phoneEnrollmentInfo.captchaResponse===ek){w((null==r?void 0:r.type)===tI,e,"argument-error");let n=await tS(e,t,r);return tt(e,n)}return tt(e,t)},o=eN(e,n,"mfaSmsEnrollment",s,"PHONE_PROVIDER");return(await o.catch(e=>Promise.reject(e))).phoneSessionInfo.sessionInfo}{w("signin"===t.type,e,"internal-error");let s=(null===(n=i.multiFactorHint)||void 0===n?void 0:n.uid)||i.multiFactorUid;w(s,e,"missing-multi-factor-info");let o={mfaPendingCredential:t.credential,mfaEnrollmentId:s,phoneSignInInfo:{clientType:"CLIENT_TYPE_WEB"}},a=async(e,t)=>{if(t.phoneSignInInfo.captchaResponse===ek){w((null==r?void 0:r.type)===tI,e,"argument-error");let n=await tS(e,t,r);return tb(e,n)}return tb(e,t)},l=eN(e,o,"mfaSmsSignIn",a,"PHONE_PROVIDER");return(await l.catch(e=>Promise.reject(e))).phoneResponseInfo.sessionInfo}}{let t={phoneNumber:i.phoneNumber,clientType:"CLIENT_TYPE_WEB"},n=async(e,t)=>{if(t.captchaResponse===ek){w((null==r?void 0:r.type)===tI,e,"argument-error");let n=await tS(e,t,r);return e$(e,n)}return e$(e,t)},s=eN(e,t,"sendVerificationCode",n,"PHONE_PROVIDER");return(await s.catch(e=>Promise.reject(e))).sessionInfo}}finally{null==r||r._reset()}}async function tS(e,t,r){w(r.type===tI,e,"argument-error");let n=await r.verify();w("string"==typeof n,e,"argument-error");let i=Object.assign({},t);if("phoneEnrollmentInfo"in i){let e=i.phoneEnrollmentInfo.phoneNumber,t=i.phoneEnrollmentInfo.captchaResponse,r=i.phoneEnrollmentInfo.clientType,s=i.phoneEnrollmentInfo.recaptchaVersion;return Object.assign(i,{phoneEnrollmentInfo:{phoneNumber:e,recaptchaToken:n,captchaResponse:t,clientType:r,recaptchaVersion:s}}),i}if(!("phoneSignInInfo"in i))return Object.assign(i,{recaptchaToken:n}),i;{let e=i.phoneSignInInfo.captchaResponse,t=i.phoneSignInInfo.clientType,r=i.phoneSignInInfo.recaptchaVersion;return Object.assign(i,{phoneSignInInfo:{recaptchaToken:n,captchaResponse:e,clientType:t,recaptchaVersion:r}}),i}}/**
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
 */class tC{constructor(e){this.providerId=tC.PROVIDER_ID,this.auth=eb(e)}verifyPhoneNumber(e,t){return tT(this.auth,e,(0,o.getModularInstance)(t))}static credential(e,t){return eW._fromVerification(e,t)}static credentialFromResult(e){return tC.credentialFromTaggedObject(e)}static credentialFromError(e){return tC.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;let{phoneNumber:t,temporaryProof:r}=e;return t&&r?eW._fromTokenResponse(t,r):null}}/**
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
 */function tA(e,t){return t?en(t):(w(e._popupRedirectResolver,e,"argument-error"),e._popupRedirectResolver)}tC.PROVIDER_ID="phone",tC.PHONE_SIGN_IN_METHOD="phone";/**
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
 */class tk extends eL{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return ej(e,this._buildIdpRequest())}_linkToIdToken(e,t){return ej(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return ej(e,this._buildIdpRequest())}_buildIdpRequest(e){let t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function tx(e){return e7(e.auth,new tk(e),e.bypassAuthState)}function tR(e){let{auth:t,user:r}=e;return w(r,t,"internal-error"),e9(r,new tk(e),e.bypassAuthState)}async function tN(e){let{auth:t,user:r}=e;return w(r,t,"internal-error"),e4(r,new tk(e),e.bypassAuthState)}/**
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
 */class tD{constructor(e,t,r,n,i=!1){this.auth=e,this.resolver=r,this.user=n,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise(async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(e){this.reject(e)}})}async onAuthEvent(e){let{urlResponse:t,sessionId:r,postBody:n,tenantId:i,error:s,type:o}=e;if(s){this.reject(s);return}let a={auth:this.auth,requestUri:t,sessionId:r,tenantId:i||void 0,postBody:n||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(o)(a))}catch(e){this.reject(e)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return tx;case"linkViaPopup":case"linkViaRedirect":return tN;case"reauthViaPopup":case"reauthViaRedirect":return tR;default:p(this.auth,"internal-error")}}resolve(e){var t,r;t=this.pendingPromise,r="Pending promise was never set",t||_(r),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){var t,r;t=this.pendingPromise,r="Pending promise was never set",t||_(r),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */let tO=new I(2e3,1e4);async function tP(e,t,r){if((0,s._isFirebaseServerApp)(e.app))return Promise.reject(g(e,"operation-not-supported-in-this-environment"));let n=eb(e);!function(e,t,r){if(!(t instanceof r))throw r.name!==t.constructor.name&&p(e,"argument-error"),m(e,"argument-error",`Type of ${t.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}(e,t,eJ);let i=tA(n,r);return new tL(n,"signInViaPopup",t,i).executeNotNull()}class tL extends tD{constructor(e,t,r,n,i){super(e,t,n,i),this.provider=r,this.authWindow=null,this.pollId=null,tL.currentPopupAction&&tL.currentPopupAction.cancel(),tL.currentPopupAction=this}async executeNotNull(){let e=await this.execute();return w(e,this.auth,"internal-error"),e}async onExecution(){var e,t;e=1===this.filter.length,t="Popup operations only handle one event",e||_(t);let r=ta();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],r),this.authWindow.associatedEvent=r,this.resolver._originValidation(this.auth).catch(e=>{this.reject(e)}),this.resolver._isIframeWebStorageSupported(this.auth,e=>{e||this.reject(g(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return(null===(e=this.authWindow)||void 0===e?void 0:e.associatedEvent)||null}cancel(){this.reject(g(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,tL.currentPopupAction=null}pollUserCancellation(){let e=()=>{var t,r;if(null===(r=null===(t=this.authWindow)||void 0===t?void 0:t.window)||void 0===r?void 0:r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(g(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,tO.get())};e()}}tL.currentPopupAction=null;let tM=new Map;class tU extends tD{constructor(e,t,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,r),this.eventId=null}async execute(){let e=tM.get(this.auth._key());if(!e){try{let t=await tV(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(t)}catch(t){e=()=>Promise.reject(t)}tM.set(this.auth._key(),e)}return this.bypassAuthState||tM.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if("signInViaRedirect"===e.type)return super.onAuthEvent(e);if("unknown"===e.type){this.resolve(null);return}if(e.eventId){let t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function tV(e,t){let r=es("pendingRedirect",t.config.apiKey,t.name),n=en(e._redirectPersistence);if(!await n._isAvailable())return!1;let i=await n._get(r)==="true";return await n._remove(r),i}function tF(e,t){tM.set(e._key(),t)}async function tB(e,t,r=!1){if((0,s._isFirebaseServerApp)(e.app))return Promise.reject(y(e));let n=eb(e),i=tA(n,t),o=new tU(n,i,r),a=await o.execute();return a&&!r&&(delete a.user._redirectEventId,await n._persistUserIfCurrent(a.user),await n._setRedirectUser(null,t)),a}class tj{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(t=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!function(e){switch(e.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return t$(e);default:return!1}}(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var r;if(e.error&&!t$(e)){let n=(null===(r=e.error.code)||void 0===r?void 0:r.split("auth/")[1])||"internal-error";t.onError(g(this.auth,n))}else t.onAuthEvent(e)}isEventForConsumer(e,t){let r=null===t.eventId||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=6e5&&this.cachedEventUids.clear(),this.cachedEventUids.has(tq(e))}saveEventToCache(e){this.cachedEventUids.add(tq(e)),this.lastProcessedEventTime=Date.now()}}function tq(e){return[e.type,e.eventId,e.sessionId,e.tenantId].filter(e=>e).join("-")}function t$({type:e,error:t}){return"unknown"===e&&(null==t?void 0:t.code)==="auth/no-auth-event"}/**
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
 */async function tz(e,t={}){return x(e,"GET","/v1/projects",t)}/**
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
 */let tH=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,tK=/^https?/;async function tG(e){if(e.config.emulator)return;let{authorizedDomains:t}=await tz(e);for(let e of t)try{if(function(e){let t=E(),{protocol:r,hostname:n}=new URL(t);if(e.startsWith("chrome-extension://")){let i=new URL(e);return""===i.hostname&&""===n?"chrome-extension:"===r&&e.replace("chrome-extension://","")===t.replace("chrome-extension://",""):"chrome-extension:"===r&&i.hostname===n}if(!tK.test(r))return!1;if(tH.test(e))return n===e;let i=e.replace(/\./g,"\\.");return RegExp("^(.+\\."+i+"|"+i+")$","i").test(n)}(e))return}catch(e){}p(e,"unauthorized-domain")}/**
 * @license
 * Copyright 2020 Google LLC.
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
 */let tW=new I(3e4,6e4);function tQ(){let e=tu().___jsl;if(null==e?void 0:e.H){for(let t of Object.keys(e.H))if(e.H[t].r=e.H[t].r||[],e.H[t].L=e.H[t].L||[],e.H[t].r=[...e.H[t].L],e.CP)for(let t=0;t<e.CP.length;t++)e.CP[t]=null}}let tX=null,tJ=new I(5e3,15e3),tY={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},tZ=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);async function t0(e){let t=await (tX=tX||new Promise((t,r)=>{var n,i,s,o;function a(){tQ(),gapi.load("gapi.iframes",{callback:()=>{t(gapi.iframes.getContext())},ontimeout:()=>{tQ(),r(g(e,"network-request-failed"))},timeout:tW.get()})}if(null===(i=null===(n=tu().gapi)||void 0===n?void 0:n.iframes)||void 0===i?void 0:i.Iframe)t(gapi.iframes.getContext());else if(null===(s=tu().gapi)||void 0===s?void 0:s.load)a();else{let t=eS("iframefcb");return tu()[t]=()=>{gapi.load?a():r(g(e,"network-request-failed"))},(o=`${eT.gapiScript}?onload=${t}`,eT.loadJS(o)).catch(e=>r(e))}}).catch(e=>{throw tX=null,e})),r=tu().gapi;return w(r,e,"internal-error"),t.open({where:document.body,url:function(e){let t=e.config;w(t.authDomain,e,"auth-domain-config-required");let r=t.emulator?T(t,"emulator/auth/iframe"):`https://${e.config.authDomain}/__/auth/iframe`,n={apiKey:t.apiKey,appName:e.name,v:s.SDK_VERSION},i=tZ.get(e.config.apiHost);i&&(n.eid=i);let a=e._getFrameworks();return a.length&&(n.fw=a.join(",")),`${r}?${(0,o.querystring)(n).slice(1)}`}(e),messageHandlersFilter:r.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:tY,dontclear:!0},t=>new Promise(async(r,n)=>{await t.restyle({setHideOnLeave:!1});let i=g(e,"network-request-failed"),s=tu().setTimeout(()=>{n(i)},tJ.get());function o(){tu().clearTimeout(s),r(t)}t.ping(o).then(o,()=>{n(i)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
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
 */let t1={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"};class t2{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch(e){}}}let t6=encodeURIComponent("fac");async function t3(e,t,r,n,i,a){w(e.config.authDomain,e,"auth-domain-config-required"),w(e.config.apiKey,e,"invalid-api-key");let l={apiKey:e.config.apiKey,appName:e.name,authType:r,redirectUrl:n,v:s.SDK_VERSION,eventId:i};if(t instanceof eJ)for(let[r,n]of(t.setDefaultLanguage(e.languageCode),l.providerId=t.providerId||"",(0,o.isEmpty)(t.getCustomParameters())||(l.customParameters=JSON.stringify(t.getCustomParameters())),Object.entries(a||{})))l[r]=n;if(t instanceof eY){let e=t.getScopes().filter(e=>""!==e);e.length>0&&(l.scopes=e.join(","))}for(let t of(e.tenantId&&(l.tid=e.tenantId),Object.keys(l)))void 0===l[t]&&delete l[t];let u=await e._getAppCheckToken(),h=u?`#${t6}=${encodeURIComponent(u)}`:"";return`${function({config:e}){return e.emulator?T(e,"emulator/auth/handler"):`https://${e.authDomain}/__/auth/handler`}(e)}?${(0,o.querystring)(l).slice(1)}${h}`}/**
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
 */let t5="webStorageSupport",t8=class{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=ts,this._completeRedirectFn=tB,this._overrideRedirectResult=tF}async _openPopup(e,t,r,n){var i,s,a;s=null===(i=this.eventManagers[e._key()])||void 0===i?void 0:i.manager,a="_initialize() not called before _openPopup()",s||_(a);let l=await t3(e,t,r,E(),n);return function(e,t,r,n=500,i=600){let s=Math.max((window.screen.availHeight-i)/2,0).toString(),a=Math.max((window.screen.availWidth-n)/2,0).toString(),l="",u=Object.assign(Object.assign({},t1),{width:n.toString(),height:i.toString(),top:s,left:a}),h=(0,o.getUA)().toLowerCase();r&&(l=eh(h)?"_blank":r),el(h)&&(t=t||"http://localhost",u.scrollbars="yes");let c=Object.entries(u).reduce((e,[t,r])=>`${e}${t}=${r},`,"");if(function(e=(0,o.getUA)()){var t;return eg(e)&&!!(null===(t=window.navigator)||void 0===t?void 0:t.standalone)}(h)&&"_self"!==l)return function(e,t){let r=document.createElement("a");r.href=e,r.target=t;let n=document.createEvent("MouseEvent");n.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),r.dispatchEvent(n)}(t||"",l),new t2(null);let f=window.open(t||"",l,c);w(f,e,"popup-blocked");try{f.focus()}catch(e){}return new t2(f)}(e,l,ta())}async _openRedirect(e,t,r,n){var i;return await this._originValidation(e),i=await t3(e,t,r,E(),n),tu().location.href=i,new Promise(()=>{})}_initialize(e){let t=e._key();if(this.eventManagers[t]){var r;let{manager:e,promise:n}=this.eventManagers[t];return e?Promise.resolve(e):(r="If manager is not set, promise should be",n||_(r),n)}let n=this.initAndGetManager(e);return this.eventManagers[t]={promise:n},n.catch(()=>{delete this.eventManagers[t]}),n}async initAndGetManager(e){let t=await t0(e),r=new tj(e);return t.register("authEvent",t=>(w(null==t?void 0:t.authEvent,e,"invalid-auth-event"),{status:r.onEvent(t.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=t,r}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send(t5,{type:t5},r=>{var n;let i=null===(n=null==r?void 0:r[0])||void 0===n?void 0:n[t5];void 0!==i&&t(!!i),p(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){let t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=tG(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return em()||eu()||eg()}};class t4{constructor(e){this.factorId=e}_process(e,t,r){switch(t.type){case"enroll":return this._finalizeEnroll(e,t.credential,r);case"signin":return this._finalizeSignIn(e,t.credential);default:return _("unexpected MultiFactorSessionType")}}}class t9 extends t4{constructor(e){super("phone"),this.credential=e}static _fromCredential(e){return new t9(e)}_finalizeEnroll(e,t,r){return x(e,"POST","/v2/accounts/mfaEnrollment:finalize",k(e,{idToken:t,displayName:r,phoneVerificationInfo:this.credential._makeVerificationRequest()}))}_finalizeSignIn(e,t){return x(e,"POST","/v2/accounts/mfaSignIn:finalize",k(e,{mfaPendingCredential:t,phoneVerificationInfo:this.credential._makeVerificationRequest()}))}}class t7 extends t4{constructor(e,t,r){super("totp"),this.otp=e,this.enrollmentId=t,this.secret=r}static _fromSecret(e,t){return new t7(t,void 0,e)}static _fromEnrollmentId(e,t){return new t7(t,e)}async _finalizeEnroll(e,t,r){return w(void 0!==this.secret,e,"argument-error"),x(e,"POST","/v2/accounts/mfaEnrollment:finalize",k(e,{idToken:t,displayName:r,totpVerificationInfo:this.secret._makeTotpVerificationInfo(this.otp)}))}async _finalizeSignIn(e,t){w(void 0!==this.enrollmentId&&void 0!==this.otp,e,"argument-error");let r={verificationCode:this.otp};return x(e,"POST","/v2/accounts/mfaSignIn:finalize",k(e,{mfaPendingCredential:t,mfaEnrollmentId:this.enrollmentId,totpVerificationInfo:r}))}}class re{constructor(e,t,r,n,i,s,o){this.sessionInfo=s,this.auth=o,this.secretKey=e,this.hashingAlgorithm=t,this.codeLength=r,this.codeIntervalSeconds=n,this.enrollmentCompletionDeadline=i}static _fromStartTotpMfaEnrollmentResponse(e,t){return new re(e.totpSessionInfo.sharedSecretKey,e.totpSessionInfo.hashingAlgorithm,e.totpSessionInfo.verificationCodeLength,e.totpSessionInfo.periodSec,new Date(e.totpSessionInfo.finalizeEnrollmentTime).toUTCString(),e.totpSessionInfo.sessionInfo,t)}_makeTotpVerificationInfo(e){return{sessionInfo:this.sessionInfo,verificationCode:e}}generateQrCodeUrl(e,t){var r;let n=!1;return(rt(e)||rt(t))&&(n=!0),n&&(rt(e)&&(e=(null===(r=this.auth.currentUser)||void 0===r?void 0:r.email)||"unknownuser"),rt(t)&&(t=this.auth.name)),`otpauth://totp/${t}:${e}?secret=${this.secretKey}&issuer=${t}&algorithm=${this.hashingAlgorithm}&digits=${this.codeLength}`}}function rt(e){return void 0===e||(null==e?void 0:e.length)===0}var rr="@firebase/auth",rn="1.9.0";/**
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
 */class ri{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),(null===(e=this.auth.currentUser)||void 0===e?void 0:e.uid)||null}async getToken(e){return(this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser)?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;let t=this.auth.onIdTokenChanged(t=>{e((null==t?void 0:t.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();let t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){w(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}let rs=(0,o.getExperimentalSetting)("authIdTokenMaxAge")||300,ro=null,ra=e=>async t=>{let r=t&&await t.getIdTokenResult(),n=r&&(new Date().getTime()-Date.parse(r.issuedAtTime))/1e3;if(n&&n>rs)return;let i=null==r?void 0:r.token;ro!==i&&(ro=i,await fetch(e,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function rl(e=(0,s.getApp)()){let t=(0,s._getProvider)(e,"auth");if(t.isInitialized())return t.getImmediate();let r=/**
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
 */function(e,t){let r=(0,s._getProvider)(e,"auth");if(r.isInitialized()){let e=r.getImmediate(),n=r.getOptions();if((0,o.deepEqual)(n,null!=t?t:{}))return e;p(e,"already-initialized")}return r.initialize({options:t})}(e,{popupRedirectResolver:t8,persistence:[tE,ti,ts]}),n=(0,o.getExperimentalSetting)("authTokenSyncURL");if(n&&"boolean"==typeof isSecureContext&&isSecureContext){let e=new URL(n,location.origin);if(location.origin===e.origin){var i,a;let t=ra(e.toString());i=()=>t(r.currentUser),(0,o.getModularInstance)(r).beforeAuthStateChanged(t,i),a=e=>t(e),(0,o.getModularInstance)(r).onIdTokenChanged(a,void 0,void 0)}}let l=(0,o.getDefaultEmulatorHost)("auth");return l&&function(e,t,r){let n=eb(e);w(n._canInitEmulator,n,"emulator-config-failed"),w(/^https?:\/\//.test(t),n,"invalid-emulator-scheme");let i=eO(t),{host:s,port:o}=function(e){let t=eO(e),r=/(\/\/)?([^?#/]+)/.exec(e.substr(t.length));if(!r)return{host:"",port:null};let n=r[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(n);if(i){let e=i[1];return{host:e,port:eP(n.substr(e.length+1))}}{let[e,t]=n.split(":");return{host:e,port:eP(t)}}}(t),a=null===o?"":`:${o}`;n.config.emulator={url:`${i}//${s}${a}/`},n.settings.appVerificationDisabledForTesting=!0,n.emulatorConfig=Object.freeze({host:s,port:o,protocol:i.replace(":",""),options:Object.freeze({disableWarnings:!1})}),function(){function e(){let e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}"undefined"!=typeof console&&"function"==typeof console.info&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),"undefined"!=typeof window&&"undefined"!=typeof document&&("loading"===document.readyState?window.addEventListener("DOMContentLoaded",e):e())}()}(r,`http://${l}`),r}eT={loadJS:e=>new Promise((t,r)=>{var n,i;let s=document.createElement("script");s.setAttribute("src",e),s.onload=t,s.onerror=e=>{let t=g("internal-error");t.customData=e,r(t)},s.type="text/javascript",s.charset="UTF-8",(null!==(i=null===(n=document.getElementsByTagName("head"))||void 0===n?void 0:n[0])&&void 0!==i?i:document).appendChild(s)}),gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="},n="Browser",(0,s._registerComponent)(new(0,u.Component)("auth",(e,{options:t})=>{let r=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),s=e.getProvider("app-check-internal"),{apiKey:o,authDomain:a}=r.options;w(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});let l=new eE(r,i,s,{apiKey:o,authDomain:a,clientPlatform:n,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:ey(n)});return function(e,t){let r=(null==t?void 0:t.persistence)||[],n=(Array.isArray(r)?r:[r]).map(en);(null==t?void 0:t.errorMap)&&e._updateErrorMap(t.errorMap),e._initializeWithPersistence(n,null==t?void 0:t.popupRedirectResolver)}(l,t),l},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,t,r)=>{e.getProvider("auth-internal").initialize()})),(0,s._registerComponent)(new(0,u.Component)("auth-internal",e=>new ri(eb(e.getProvider("auth").getImmediate())),"PRIVATE").setInstantiationMode("EXPLICIT")),(0,s.registerVersion)(rr,rn,/**
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
 */function(e){switch(e){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}(n)),(0,s.registerVersion)(rr,rn,"esm2017")}),s("7WQrb",function(t,r){function n(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&0>t.indexOf(n)&&(r[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(var i=0,n=Object.getOwnPropertySymbols(e);i<n.length;i++)0>t.indexOf(n[i])&&Object.prototype.propertyIsEnumerable.call(e,n[i])&&(r[n[i]]=e[n[i]]);return r}e(t.exports,"__rest",()=>n),"function"==typeof SuppressedError&&SuppressedError});
//# sourceMappingURL=index.5b4f745e.js.map
