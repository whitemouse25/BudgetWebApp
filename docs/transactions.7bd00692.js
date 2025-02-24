var t,e,n,s,o,i,a,r,c,l,d,u,h,f,g,m,E,p,C,y,O,v,I,_,T=globalThis,N={},A={},R=T.parcelRequire94c2;null==R&&((R=function(t){if(t in N)return N[t].exports;if(t in A){var e=A[t];delete A[t];var n={id:t,exports:{}};return N[t]=n,e.call(n.exports,n,n.exports),n.exports}var s=Error("Cannot find module '"+t+"'");throw s.code="MODULE_NOT_FOUND",s}).register=function(t,e){A[t]=e},T.parcelRequire94c2=R),R.register;var w=R("47Mwn"),S=R("6AR8M"),b=R("ilpIi");(t=h||(h={})).STRING="string",t.NUMBER="number",t.INTEGER="integer",t.BOOLEAN="boolean",t.ARRAY="array",t.OBJECT="object",(e=f||(f={})).LANGUAGE_UNSPECIFIED="language_unspecified",e.PYTHON="python",(n=g||(g={})).OUTCOME_UNSPECIFIED="outcome_unspecified",n.OUTCOME_OK="outcome_ok",n.OUTCOME_FAILED="outcome_failed",n.OUTCOME_DEADLINE_EXCEEDED="outcome_deadline_exceeded";/**
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
 */const M=["user","model","function","system"];(s=m||(m={})).HARM_CATEGORY_UNSPECIFIED="HARM_CATEGORY_UNSPECIFIED",s.HARM_CATEGORY_HATE_SPEECH="HARM_CATEGORY_HATE_SPEECH",s.HARM_CATEGORY_SEXUALLY_EXPLICIT="HARM_CATEGORY_SEXUALLY_EXPLICIT",s.HARM_CATEGORY_HARASSMENT="HARM_CATEGORY_HARASSMENT",s.HARM_CATEGORY_DANGEROUS_CONTENT="HARM_CATEGORY_DANGEROUS_CONTENT",(o=E||(E={})).HARM_BLOCK_THRESHOLD_UNSPECIFIED="HARM_BLOCK_THRESHOLD_UNSPECIFIED",o.BLOCK_LOW_AND_ABOVE="BLOCK_LOW_AND_ABOVE",o.BLOCK_MEDIUM_AND_ABOVE="BLOCK_MEDIUM_AND_ABOVE",o.BLOCK_ONLY_HIGH="BLOCK_ONLY_HIGH",o.BLOCK_NONE="BLOCK_NONE",(i=p||(p={})).HARM_PROBABILITY_UNSPECIFIED="HARM_PROBABILITY_UNSPECIFIED",i.NEGLIGIBLE="NEGLIGIBLE",i.LOW="LOW",i.MEDIUM="MEDIUM",i.HIGH="HIGH",(a=C||(C={})).BLOCKED_REASON_UNSPECIFIED="BLOCKED_REASON_UNSPECIFIED",a.SAFETY="SAFETY",a.OTHER="OTHER",(r=y||(y={})).FINISH_REASON_UNSPECIFIED="FINISH_REASON_UNSPECIFIED",r.STOP="STOP",r.MAX_TOKENS="MAX_TOKENS",r.SAFETY="SAFETY",r.RECITATION="RECITATION",r.LANGUAGE="LANGUAGE",r.OTHER="OTHER",(c=O||(O={})).TASK_TYPE_UNSPECIFIED="TASK_TYPE_UNSPECIFIED",c.RETRIEVAL_QUERY="RETRIEVAL_QUERY",c.RETRIEVAL_DOCUMENT="RETRIEVAL_DOCUMENT",c.SEMANTIC_SIMILARITY="SEMANTIC_SIMILARITY",c.CLASSIFICATION="CLASSIFICATION",c.CLUSTERING="CLUSTERING",(l=v||(v={})).MODE_UNSPECIFIED="MODE_UNSPECIFIED",l.AUTO="AUTO",l.ANY="ANY",l.NONE="NONE",(d=I||(I={})).MODE_UNSPECIFIED="MODE_UNSPECIFIED",d.MODE_DYNAMIC="MODE_DYNAMIC";/**
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
 */class x extends Error{constructor(t){super(`[GoogleGenerativeAI Error]: ${t}`)}}class L extends x{constructor(t,e){super(t),this.response=e}}class D extends x{constructor(t,e,n,s){super(t),this.status=e,this.statusText=n,this.errorDetails=s}}class B extends x{}(u=_||(_={})).GENERATE_CONTENT="generateContent",u.STREAM_GENERATE_CONTENT="streamGenerateContent",u.COUNT_TOKENS="countTokens",u.EMBED_CONTENT="embedContent",u.BATCH_EMBED_CONTENTS="batchEmbedContents";class ${constructor(t,e,n,s,o){this.model=t,this.task=e,this.apiKey=n,this.stream=s,this.requestOptions=o}toString(){var t,e;let n=(null===(t=this.requestOptions)||void 0===t?void 0:t.apiVersion)||"v1beta",s=(null===(e=this.requestOptions)||void 0===e?void 0:e.baseUrl)||"https://generativelanguage.googleapis.com",o=`${s}/${n}/${this.model}:${this.task}`;return this.stream&&(o+="?alt=sse"),o}}async function F(t){var e;let n=new Headers;n.append("Content-Type","application/json"),n.append("x-goog-api-client",function(t){let e=[];return(null==t?void 0:t.apiClient)&&e.push(t.apiClient),e.push("genai-js/0.21.0"),e.join(" ")}(t.requestOptions)),n.append("x-goog-api-key",t.apiKey);let s=null===(e=t.requestOptions)||void 0===e?void 0:e.customHeaders;if(s){if(!(s instanceof Headers))try{s=new Headers(s)}catch(t){throw new B(`unable to convert customHeaders value ${JSON.stringify(s)} to Headers: ${t.message}`)}for(let[t,e]of s.entries()){if("x-goog-api-key"===t)throw new B(`Cannot set reserved header name ${t}`);if("x-goog-api-client"===t)throw new B(`Header name ${t} can only be set using the apiClient field`);n.append(t,e)}}return n}async function H(t,e,n,s,o,i){let a=new $(t,e,n,s,i);return{url:a.toString(),fetchOptions:Object.assign(Object.assign({},function(t){let e={};if((null==t?void 0:t.signal)!==void 0||(null==t?void 0:t.timeout)>=0){let n=new AbortController;(null==t?void 0:t.timeout)>=0&&setTimeout(()=>n.abort(),t.timeout),(null==t?void 0:t.signal)&&t.signal.addEventListener("abort",()=>{n.abort()}),e.signal=n.signal}return e}(i)),{method:"POST",headers:await F(a),body:o})}}async function U(t,e,n,s,o,i={},a=fetch){let{url:r,fetchOptions:c}=await H(t,e,n,s,o,i);return G(r,c,a)}async function G(t,e,n=fetch){let s;try{s=await n(t,e)}catch(e){!function(t,e){let n=t;throw t instanceof D||t instanceof B||((n=new x(`Error fetching from ${e.toString()}: ${t.message}`)).stack=t.stack),n}(e,t)}return s.ok||await P(s,t),s}async function P(t,e){let n,s="";try{let e=await t.json();s=e.error.message,e.error.details&&(s+=` ${JSON.stringify(e.error.details)}`,n=e.error.details)}catch(t){}throw new D(`Error fetching from ${e.toString()}: [${t.status} ${t.statusText}] ${s}`,t.status,t.statusText,n)}/**
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
 */function j(t){return t.text=()=>{if(t.candidates&&t.candidates.length>0){if(t.candidates.length>1&&console.warn(`This response had ${t.candidates.length} candidates. Returning text from the first candidate only. Access response.candidates directly to use the other candidates.`),K(t.candidates[0]))throw new L(`${q(t)}`,t);return function(t){var e,n,s,o;let i=[];if(null===(n=null===(e=t.candidates)||void 0===e?void 0:e[0].content)||void 0===n?void 0:n.parts)for(let e of null===(o=null===(s=t.candidates)||void 0===s?void 0:s[0].content)||void 0===o?void 0:o.parts)e.text&&i.push(e.text),e.executableCode&&i.push("\n```"+e.executableCode.language+"\n"+e.executableCode.code+"\n```\n"),e.codeExecutionResult&&i.push("\n```\n"+e.codeExecutionResult.output+"\n```\n");return i.length>0?i.join(""):""}(t)}if(t.promptFeedback)throw new L(`Text not available. ${q(t)}`,t);return""},t.functionCall=()=>{if(t.candidates&&t.candidates.length>0){if(t.candidates.length>1&&console.warn(`This response had ${t.candidates.length} candidates. Returning function calls from the first candidate only. Access response.candidates directly to use the other candidates.`),K(t.candidates[0]))throw new L(`${q(t)}`,t);return console.warn("response.functionCall() is deprecated. Use response.functionCalls() instead."),k(t)[0]}if(t.promptFeedback)throw new L(`Function call not available. ${q(t)}`,t)},t.functionCalls=()=>{if(t.candidates&&t.candidates.length>0){if(t.candidates.length>1&&console.warn(`This response had ${t.candidates.length} candidates. Returning function calls from the first candidate only. Access response.candidates directly to use the other candidates.`),K(t.candidates[0]))throw new L(`${q(t)}`,t);return k(t)}if(t.promptFeedback)throw new L(`Function call not available. ${q(t)}`,t)},t}function k(t){var e,n,s,o;let i=[];if(null===(n=null===(e=t.candidates)||void 0===e?void 0:e[0].content)||void 0===n?void 0:n.parts)for(let e of null===(o=null===(s=t.candidates)||void 0===s?void 0:s[0].content)||void 0===o?void 0:o.parts)e.functionCall&&i.push(e.functionCall);return i.length>0?i:void 0}const Y=[y.RECITATION,y.SAFETY,y.LANGUAGE];function K(t){return!!t.finishReason&&Y.includes(t.finishReason)}function q(t){var e,n,s;let o="";if((!t.candidates||0===t.candidates.length)&&t.promptFeedback)o+="Response was blocked",(null===(e=t.promptFeedback)||void 0===e?void 0:e.blockReason)&&(o+=` due to ${t.promptFeedback.blockReason}`),(null===(n=t.promptFeedback)||void 0===n?void 0:n.blockReasonMessage)&&(o+=`: ${t.promptFeedback.blockReasonMessage}`);else if(null===(s=t.candidates)||void 0===s?void 0:s[0]){let e=t.candidates[0];K(e)&&(o+=`Candidate was blocked due to ${e.finishReason}`,e.finishMessage&&(o+=`: ${e.finishMessage}`))}return o}function J(t){return this instanceof J?(this.v=t,this):new J(t)}"function"==typeof SuppressedError&&SuppressedError;/**
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
 */const V=/^data\: (.*)(?:\n\n|\r\r|\r\n\r\n)/;async function W(t){let e=[],n=t.getReader();for(;;){let{done:t,value:s}=await n.read();if(t)return j(function(t){let e=t[t.length-1],n={promptFeedback:null==e?void 0:e.promptFeedback};for(let e of t){if(e.candidates)for(let t of e.candidates){let e=t.index;if(n.candidates||(n.candidates=[]),n.candidates[e]||(n.candidates[e]={index:t.index}),n.candidates[e].citationMetadata=t.citationMetadata,n.candidates[e].groundingMetadata=t.groundingMetadata,n.candidates[e].finishReason=t.finishReason,n.candidates[e].finishMessage=t.finishMessage,n.candidates[e].safetyRatings=t.safetyRatings,t.content&&t.content.parts){n.candidates[e].content||(n.candidates[e].content={role:t.content.role||"user",parts:[]});let s={};for(let o of t.content.parts)o.text&&(s.text=o.text),o.functionCall&&(s.functionCall=o.functionCall),o.executableCode&&(s.executableCode=o.executableCode),o.codeExecutionResult&&(s.codeExecutionResult=o.codeExecutionResult),0===Object.keys(s).length&&(s.text=""),n.candidates[e].content.parts.push(s)}}e.usageMetadata&&(n.usageMetadata=e.usageMetadata)}return n}(e));e.push(s)}}/**
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
 */async function X(t,e,n,s){return function(t){let[e,n]=(function(t){let e=t.getReader();return new ReadableStream({start(t){let n="";return function s(){return e.read().then(({value:e,done:o})=>{let i;if(o){if(n.trim()){t.error(new x("Failed to parse stream"));return}t.close();return}let a=(n+=e).match(V);for(;a;){try{i=JSON.parse(a[1])}catch(e){t.error(new x(`Error parsing JSON response: "${a[1]}"`));return}t.enqueue(i),a=(n=n.substring(a[0].length)).match(V)}return s()})}()}})})(t.body.pipeThrough(new TextDecoderStream("utf8",{fatal:!0}))).tee();return{stream:function(t){return function(t,e,n){if(!Symbol.asyncIterator)throw TypeError("Symbol.asyncIterator is not defined.");var s,o=n.apply(t,e||[]),i=[];return s={},a("next"),a("throw"),a("return"),s[Symbol.asyncIterator]=function(){return this},s;function a(t){o[t]&&(s[t]=function(e){return new Promise(function(n,s){i.push([t,e,n,s])>1||r(t,e)})})}function r(t,e){try{var n;(n=o[t](e)).value instanceof J?Promise.resolve(n.value.v).then(c,l):d(i[0][2],n)}catch(t){d(i[0][3],t)}}function c(t){r("next",t)}function l(t){r("throw",t)}function d(t,e){t(e),i.shift(),i.length&&r(i[0][0],i[0][1])}}(this,arguments,function*(){let e=t.getReader();for(;;){let{value:t,done:n}=yield J(e.read());if(n)break;yield yield J(j(t))}})}(e),response:W(n)}}(await U(e,_.STREAM_GENERATE_CONTENT,t,!0,JSON.stringify(n),s))}async function Q(t,e,n,s){let o=await U(e,_.GENERATE_CONTENT,t,!1,JSON.stringify(n),s);return{response:j(await o.json())}}/**
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
 */function z(t){if(null!=t){if("string"==typeof t)return{role:"system",parts:[{text:t}]};if(t.text)return{role:"system",parts:[t]};if(t.parts)return t.role?t:{role:"system",parts:t.parts}}}function Z(t){let e=[];if("string"==typeof t)e=[{text:t}];else for(let n of t)"string"==typeof n?e.push({text:n}):e.push(n);return function(t){let e={role:"user",parts:[]},n={role:"function",parts:[]},s=!1,o=!1;for(let i of t)"functionResponse"in i?(n.parts.push(i),o=!0):(e.parts.push(i),s=!0);if(s&&o)throw new x("Within a single message, FunctionResponse cannot be mixed with other type of part in the request for sending chat message.");if(!s&&!o)throw new x("No content is provided for sending chat message.");return s?e:n}(e)}function tt(t){let e;return e=t.contents?t:{contents:[Z(t)]},t.systemInstruction&&(e.systemInstruction=z(t.systemInstruction)),e}/**
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
 */const te=["text","inlineData","functionCall","functionResponse","executableCode","codeExecutionResult"],tn={user:["text","inlineData"],function:["functionResponse"],model:["text","functionCall","executableCode","codeExecutionResult"],system:["text"]},ts="SILENT_ERROR";class to{constructor(t,e,n,s={}){this.model=e,this.params=n,this._requestOptions=s,this._history=[],this._sendPromise=Promise.resolve(),this._apiKey=t,(null==n?void 0:n.history)&&(function(t){let e=!1;for(let n of t){let{role:t,parts:s}=n;if(!e&&"user"!==t)throw new x(`First content should be with role 'user', got ${t}`);if(!M.includes(t))throw new x(`Each item should include role field. Got ${t} but valid roles are: ${JSON.stringify(M)}`);if(!Array.isArray(s))throw new x("Content should have 'parts' property with an array of Parts");if(0===s.length)throw new x("Each Content should have at least one part");let o={text:0,inlineData:0,functionCall:0,functionResponse:0,fileData:0,executableCode:0,codeExecutionResult:0};for(let t of s)for(let e of te)e in t&&(o[e]+=1);let i=tn[t];for(let e of te)if(!i.includes(e)&&o[e]>0)throw new x(`Content with role '${t}' can't contain '${e}' part`);e=!0}}(n.history),this._history=n.history)}async getHistory(){return await this._sendPromise,this._history}async sendMessage(t,e={}){var n,s,o,i,a,r;let c;await this._sendPromise;let l=Z(t),d={safetySettings:null===(n=this.params)||void 0===n?void 0:n.safetySettings,generationConfig:null===(s=this.params)||void 0===s?void 0:s.generationConfig,tools:null===(o=this.params)||void 0===o?void 0:o.tools,toolConfig:null===(i=this.params)||void 0===i?void 0:i.toolConfig,systemInstruction:null===(a=this.params)||void 0===a?void 0:a.systemInstruction,cachedContent:null===(r=this.params)||void 0===r?void 0:r.cachedContent,contents:[...this._history,l]},u=Object.assign(Object.assign({},this._requestOptions),e);return this._sendPromise=this._sendPromise.then(()=>Q(this._apiKey,this.model,d,u)).then(t=>{var e;if(t.response.candidates&&t.response.candidates.length>0){this._history.push(l);let n=Object.assign({parts:[],role:"model"},null===(e=t.response.candidates)||void 0===e?void 0:e[0].content);this._history.push(n)}else{let e=q(t.response);e&&console.warn(`sendMessage() was unsuccessful. ${e}. Inspect response object for details.`)}c=t}),await this._sendPromise,c}async sendMessageStream(t,e={}){var n,s,o,i,a,r;await this._sendPromise;let c=Z(t),l={safetySettings:null===(n=this.params)||void 0===n?void 0:n.safetySettings,generationConfig:null===(s=this.params)||void 0===s?void 0:s.generationConfig,tools:null===(o=this.params)||void 0===o?void 0:o.tools,toolConfig:null===(i=this.params)||void 0===i?void 0:i.toolConfig,systemInstruction:null===(a=this.params)||void 0===a?void 0:a.systemInstruction,cachedContent:null===(r=this.params)||void 0===r?void 0:r.cachedContent,contents:[...this._history,c]},d=Object.assign(Object.assign({},this._requestOptions),e),u=X(this._apiKey,this.model,l,d);return this._sendPromise=this._sendPromise.then(()=>u).catch(t=>{throw Error(ts)}).then(t=>t.response).then(t=>{if(t.candidates&&t.candidates.length>0){this._history.push(c);let e=Object.assign({},t.candidates[0].content);e.role||(e.role="model"),this._history.push(e)}else{let e=q(t);e&&console.warn(`sendMessageStream() was unsuccessful. ${e}. Inspect response object for details.`)}}).catch(t=>{t.message!==ts&&console.error(t)}),u}}/**
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
 */async function ti(t,e,n,s){return(await U(e,_.COUNT_TOKENS,t,!1,JSON.stringify(n),s)).json()}/**
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
 */async function ta(t,e,n,s){return(await U(e,_.EMBED_CONTENT,t,!1,JSON.stringify(n),s)).json()}async function tr(t,e,n,s){let o=n.requests.map(t=>Object.assign(Object.assign({},t),{model:e}));return(await U(e,_.BATCH_EMBED_CONTENTS,t,!1,JSON.stringify({requests:o}),s)).json()}/**
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
 */class tc{constructor(t,e,n={}){this.apiKey=t,this._requestOptions=n,e.model.includes("/")?this.model=e.model:this.model=`models/${e.model}`,this.generationConfig=e.generationConfig||{},this.safetySettings=e.safetySettings||[],this.tools=e.tools,this.toolConfig=e.toolConfig,this.systemInstruction=z(e.systemInstruction),this.cachedContent=e.cachedContent}async generateContent(t,e={}){var n;let s=tt(t),o=Object.assign(Object.assign({},this._requestOptions),e);return Q(this.apiKey,this.model,Object.assign({generationConfig:this.generationConfig,safetySettings:this.safetySettings,tools:this.tools,toolConfig:this.toolConfig,systemInstruction:this.systemInstruction,cachedContent:null===(n=this.cachedContent)||void 0===n?void 0:n.name},s),o)}async generateContentStream(t,e={}){var n;let s=tt(t),o=Object.assign(Object.assign({},this._requestOptions),e);return X(this.apiKey,this.model,Object.assign({generationConfig:this.generationConfig,safetySettings:this.safetySettings,tools:this.tools,toolConfig:this.toolConfig,systemInstruction:this.systemInstruction,cachedContent:null===(n=this.cachedContent)||void 0===n?void 0:n.name},s),o)}startChat(t){var e;return new to(this.apiKey,this.model,Object.assign({generationConfig:this.generationConfig,safetySettings:this.safetySettings,tools:this.tools,toolConfig:this.toolConfig,systemInstruction:this.systemInstruction,cachedContent:null===(e=this.cachedContent)||void 0===e?void 0:e.name},t),this._requestOptions)}async countTokens(t,e={}){let n=function(t,e){var n;let s={model:null==e?void 0:e.model,generationConfig:null==e?void 0:e.generationConfig,safetySettings:null==e?void 0:e.safetySettings,tools:null==e?void 0:e.tools,toolConfig:null==e?void 0:e.toolConfig,systemInstruction:null==e?void 0:e.systemInstruction,cachedContent:null===(n=null==e?void 0:e.cachedContent)||void 0===n?void 0:n.name,contents:[]},o=null!=t.generateContentRequest;if(t.contents){if(o)throw new B("CountTokensRequest must have one of contents or generateContentRequest, not both.");s.contents=t.contents}else if(o)s=Object.assign(Object.assign({},s),t.generateContentRequest);else{let e=Z(t);s.contents=[e]}return{generateContentRequest:s}}(t,{model:this.model,generationConfig:this.generationConfig,safetySettings:this.safetySettings,tools:this.tools,toolConfig:this.toolConfig,systemInstruction:this.systemInstruction,cachedContent:this.cachedContent}),s=Object.assign(Object.assign({},this._requestOptions),e);return ti(this.apiKey,this.model,n,s)}async embedContent(t,e={}){let n="string"==typeof t||Array.isArray(t)?{content:Z(t)}:t,s=Object.assign(Object.assign({},this._requestOptions),e);return ta(this.apiKey,this.model,n,s)}async batchEmbedContents(t,e={}){let n=Object.assign(Object.assign({},this._requestOptions),e);return tr(this.apiKey,this.model,t,n)}}/**
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
 */class tl{constructor(t){this.apiKey=t}getGenerativeModel(t,e){if(!t.model)throw new x("Must provide a model name. Example: genai.getGenerativeModel({ model: 'my-model-name' })");return new tc(this.apiKey,t,e)}getGenerativeModelFromCachedContent(t,e,n){if(!t.name)throw new B("Cached content must contain a `name` field.");if(!t.model)throw new B("Cached content must contain a `model` field.");for(let n of["model","systemInstruction"])if((null==e?void 0:e[n])&&t[n]&&(null==e?void 0:e[n])!==t[n]){if("model"===n&&(e.model.startsWith("models/")?e.model.replace("models/",""):e.model)===(t.model.startsWith("models/")?t.model.replace("models/",""):t.model))continue;throw new B(`Different value for "${n}" specified in modelParams (${e[n]}) and cachedContent (${t[n]})`)}let s=Object.assign(Object.assign({},e),{model:t.model,tools:t.tools,toolConfig:t.toolConfig,systemInstruction:t.systemInstruction,cachedContent:t});return new tc(this.apiKey,s,n)}}(0,w.auth).onAuthStateChanged(async t=>{t&&await tI()});const td=document.getElementById("logoutBtn");document.getElementById("biometricAuthBtn");const tu=document.getElementById("generateQRCodeBtn"),th=document.getElementById("addTransactionBtn"),tf=document.getElementById("transactionModal"),tg=document.getElementById("transactionForm"),tm=document.getElementById("cancelBtn"),tE=document.getElementById("transactionsList"),tp=document.getElementById("chatbotModal"),tC=document.getElementById("closeChatbot"),ty=document.getElementById("chatInput"),tO=document.getElementById("sendChat"),tv=document.getElementById("chatbotMessages");async function tI(){let t=w.auth.currentUser;if(t)try{let e=await (0,b.getDocs)((0,b.query)((0,b.collection)(w.db,"transactions"),(0,b.where)("userId","==",t.uid))),n=0,s=0;tE.innerHTML=e.empty?"No transactions yet":"",e.forEach(t=>{let e=t.data();"income"===e.type?n+=parseFloat(e.amount):s+=parseFloat(e.amount);let o=document.createElement("div");o.className=`transaction ${e.type}`,o.innerHTML=`${e.description} ${"income"===e.type?"+":"-"}$${parseFloat(e.amount).toFixed(2)}`;let i=document.createElement("button");i.textContent="Delete",i.className="delete-btn",i.addEventListener("click",async()=>{try{await (0,b.deleteDoc)((0,b.doc)(w.db,"transactions",t.id)),tN("Transaction deleted successfully!"),tI()}catch(t){tN("Error deleting transaction: "+t.message,"error")}}),o.appendChild(i),tE.appendChild(o)}),document.getElementById("totalBalance").textContent=`$${(n-s).toFixed(2)}`,document.getElementById("totalIncome").textContent=`$${n.toFixed(2)}`,document.getElementById("totalExpenses").textContent=`$${s.toFixed(2)}`}catch(t){tN("Error loading transactions: "+t.message,"error")}}async function t_(t){try{let e=new tl("YOUR_API_KEY").getGenerativeModel({model:"gemini-1.5-flash"});return(await e.generateContent(t)).response.text()}catch(t){return"Error: Unable to process your request."}}function tT(t,e){let n=document.createElement("div");n.className="chat-message",n.innerHTML=`${t}: ${e}`,tv.appendChild(n),tv.scrollTop=tv.scrollHeight}function tN(t,e="success"){let n=document.createElement("div");n.className=`toast ${e}`,n.textContent=t,document.getElementById("toastContainer").appendChild(n),setTimeout(()=>n.remove(),3e3)}td.addEventListener("click",()=>{(0,S.signOut)(w.auth).then(()=>{console.log("Signed out successfully!"),window.location.href="index.html"}).catch(t=>{console.error("Error signing out:",t.message)})}),tu.addEventListener("click",function(){let t=document.getElementById("qrcode");t.innerHTML="",new QRCode(t,{text:"https://whitemouse25.github.io/budget-web-app/",width:128,height:128}),t.style.display="block"}),th.addEventListener("click",()=>{tf.classList.add("active")}),tm.addEventListener("click",()=>{tf.classList.remove("active"),tg.reset()}),tg.addEventListener("submit",async t=>{t.preventDefault();let e=t.target.description.value,n=parseFloat(t.target.amount.value),s=t.target.type.value,o=w.auth.currentUser;if(!(!o||!e||isNaN(n))&&s)try{await (0,b.addDoc)((0,b.collection)(w.db,"transactions"),{description:e,amount:n,type:s,userId:o.uid,createdAt:new Date}),tN("Transaction added successfully!"),tI(),tf.classList.remove("active"),tg.reset()}catch(t){tN("Error adding transaction: "+t.message,"error")}}),document.getElementById("chatbotButton").addEventListener("click",()=>{tp.classList.toggle("hidden")}),tC.addEventListener("click",()=>{tp.classList.add("hidden")}),tO.addEventListener("click",async()=>{let t=ty.value.trim();if(t){tT("You",t),ty.value="";try{let e=await t_(t);tT("Gemini AI",e)}catch(t){tN("Error processing chat request: "+t.message,"error")}}});
//# sourceMappingURL=transactions.7bd00692.js.map
