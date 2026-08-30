(()=>{var Vi=Object.defineProperty;var gd=Object.getOwnPropertyDescriptor;var vd=Object.getOwnPropertyNames;var yd=Object.prototype.hasOwnProperty;var wd=(w,D)=>()=>(w&&(D=w(w=0)),D);var xd=(w,D)=>{for(var h in D)Vi(w,h,{get:D[h],enumerable:!0})},kd=(w,D,h,se)=>{if(D&&typeof D=="object"||typeof D=="function")for(let oe of vd(D))!yd.call(w,oe)&&oe!==h&&Vi(w,oe,{get:()=>D[oe],enumerable:!(se=gd(D,oe))||se.enumerable});return w};var Sd=w=>kd(Vi({},"__esModule",{value:!0}),w);var gs={};xd(gs,{Component:()=>Ld,Fragment:()=>zd,StrictMode:()=>Pd,createContext:()=>_d,createElement:()=>Td,default:()=>k,useCallback:()=>Bi,useContext:()=>Nd,useEffect:()=>Hi,useMemo:()=>Ed,useRef:()=>Cd,useState:()=>qt});var hs,k,qt,Hi,Bi,Ed,Cd,Nd,_d,zd,Pd,Td,Ld,qo=wd(()=>{(function(){"use strict";(function(w,D){typeof exports=="object"&&typeof module<"u"?D(exports):typeof define=="function"&&define.amd?define(["exports"],D):(w=w||self,D(w.React={}))})(this,function(w){function D(a){return a===null||typeof a!="object"?null:(a=bn&&a[bn]||a["@@iterator"],typeof a=="function"?a:null)}function h(a,m,S){this.props=a,this.context=m,this.refs=vn,this.updater=S||qn}function se(){}function oe(a,m,S){this.props=a,this.context=m,this.refs=vn,this.updater=S||qn}function hn(a,m,S){var P,F={},B=null,V=null;if(m!=null)for(P in m.ref!==void 0&&(V=m.ref),m.key!==void 0&&(B=""+m.key),m)tr.call(m,P)&&!nr.hasOwnProperty(P)&&(F[P]=m[P]);var H=arguments.length-2;if(H===1)F.children=S;else if(1<H){for(var R=Array(H),le=0;le<H;le++)R[le]=arguments[le+2];F.children=R}if(a&&a.defaultProps)for(P in H=a.defaultProps,H)F[P]===void 0&&(F[P]=H[P]);return{$$typeof:ne,type:a,key:B,ref:V,props:F,_owner:yn.current}}function Gn(a,m){return{$$typeof:ne,type:a.type,key:m,ref:a.ref,props:a.props,_owner:a._owner}}function nt(a){return typeof a=="object"&&a!==null&&a.$$typeof===ne}function te(a){var m={"=":"=0",":":"=2"};return"$"+a.replace(/[=:]/g,function(S){return m[S]})}function dt(a,m){return typeof a=="object"&&a!==null&&a.key!=null?te(""+a.key):m.toString(36)}function je(a,m,S,P,F){var B=typeof a;(B==="undefined"||B==="boolean")&&(a=null);var V=!1;if(a===null)V=!0;else switch(B){case"string":case"number":V=!0;break;case"object":switch(a.$$typeof){case ne:case en:V=!0}}if(V)return V=a,F=F(V),a=P===""?"."+dt(V,0):P,er(F)?(S="",a!=null&&(S=a.replace(It,"$&/")+"/"),je(F,m,S,"",function(le){return le})):F!=null&&(nt(F)&&(F=Gn(F,S+(!F.key||V&&V.key===F.key?"":(""+F.key).replace(It,"$&/")+"/")+a)),m.push(F)),1;if(V=0,P=P===""?".":P+":",er(a))for(var H=0;H<a.length;H++){B=a[H];var R=P+dt(B,H);V+=je(B,m,S,R,F)}else if(R=D(a),typeof R=="function")for(a=R.call(a),H=0;!(B=a.next()).done;)B=B.value,R=P+dt(B,H++),V+=je(B,m,S,R,F);else if(B==="object")throw m=String(a),Error("Objects are not valid as a React child (found: "+(m==="[object Object]"?"object with keys {"+Object.keys(a).join(", ")+"}":m)+"). If you meant to render a collection of children, use an array instead.");return V}function Pe(a,m,S){if(a==null)return a;var P=[],F=0;return je(a,P,"","",function(B){return m.call(S,B,F++)}),P}function ft(a){if(a._status===-1){var m=a._result;m=m(),m.then(function(S){(a._status===0||a._status===-1)&&(a._status=1,a._result=S)},function(S){(a._status===0||a._status===-1)&&(a._status=2,a._result=S)}),a._status===-1&&(a._status=0,a._result=m)}if(a._status===1)return a._result.default;throw a._result}function Qe(a,m){var S=a.length;a.push(m);e:for(;0<S;){var P=S-1>>>1,F=a[P];if(0<Ee(F,m))a[P]=m,a[S]=F,S=P;else break e}}function me(a){return a.length===0?null:a[0]}function Lt(a){if(a.length===0)return null;var m=a[0],S=a.pop();if(S!==m){a[0]=S;e:for(var P=0,F=a.length,B=F>>>1;P<B;){var V=2*(P+1)-1,H=a[V],R=V+1,le=a[R];if(0>Ee(H,S))R<F&&0>Ee(le,H)?(a[P]=le,a[R]=S,P=R):(a[P]=H,a[V]=S,P=V);else if(R<F&&0>Ee(le,S))a[P]=le,a[R]=S,P=R;else break e}}return m}function Ee(a,m){var S=a.sortIndex-m.sortIndex;return S!==0?S:a.id-m.id}function pt(a){for(var m=me(Xe);m!==null;){if(m.callback===null)Lt(Xe);else if(m.startTime<=a)Lt(Xe),m.sortIndex=m.expirationTime,Qe(De,m);else break;m=me(Xe)}}function Ft(a){if(tn=!1,pt(a),!gt)if(me(De)!==null)gt=!0,O(Ye);else{var m=me(Xe);m!==null&&W(Ft,m.startTime-a)}}function Ye(a,m){gt=!1,tn&&(tn=!1,or(vt),vt=-1),ht=!0;var S=b;try{for(pt(m),Te=me(De);Te!==null&&(!(Te.expirationTime>m)||a&&!I());){var P=Te.callback;if(typeof P=="function"){Te.callback=null,b=Te.priorityLevel;var F=P(Te.expirationTime<=m);m=rt(),typeof F=="function"?Te.callback=F:Te===me(De)&&Lt(De),pt(m)}else Lt(De);Te=me(De)}if(Te!==null)var B=!0;else{var V=me(Xe);V!==null&&W(Ft,V.startTime-m),B=!1}return B}finally{Te=null,b=S,ht=!1}}function I(){return!(rt()-ir<lr)}function O(a){Sn=a,ot||(ot=!0,En())}function W(a,m){vt=xn(function(){a(rt())},m)}function J(a){throw Error("act(...) is not supported in production builds of React.")}var ne=Symbol.for("react.element"),en=Symbol.for("react.portal"),Vr=Symbol.for("react.fragment"),Kn=Symbol.for("react.strict_mode"),Mt=Symbol.for("react.profiler"),Zn=Symbol.for("react.provider"),Hr=Symbol.for("react.context"),Br=Symbol.for("react.forward_ref"),Wr=Symbol.for("react.suspense"),Qr=Symbol.for("react.memo"),Jn=Symbol.for("react.lazy"),bn=Symbol.iterator,qn={isMounted:function(a){return!1},enqueueForceUpdate:function(a,m,S){},enqueueReplaceState:function(a,m,S,P){},enqueueSetState:function(a,m,S,P){}},gn=Object.assign,vn={};h.prototype.isReactComponent={},h.prototype.setState=function(a,m){if(typeof a!="object"&&typeof a!="function"&&a!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,a,m,"setState")},h.prototype.forceUpdate=function(a){this.updater.enqueueForceUpdate(this,a,"forceUpdate")},se.prototype=h.prototype;var Ae=oe.prototype=new se;Ae.constructor=oe,gn(Ae,h.prototype),Ae.isPureReactComponent=!0;var er=Array.isArray,tr=Object.prototype.hasOwnProperty,yn={current:null},nr={key:!0,ref:!0,__self:!0,__source:!0},It=/\/+/g,he={current:null},wn={transition:null};if(typeof performance=="object"&&typeof performance.now=="function")var mt=performance,rt=function(){return mt.now()};else{var rr=Date,el=rr.now();rt=function(){return rr.now()-el}}var De=[],Xe=[],tl=1,Te=null,b=3,ht=!1,gt=!1,tn=!1,xn=typeof setTimeout=="function"?setTimeout:null,or=typeof clearTimeout=="function"?clearTimeout:null,kn=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);var ot=!1,Sn=null,vt=-1,lr=5,ir=-1,yt=function(){if(Sn!==null){var a=rt();ir=a;var m=!0;try{m=Sn(!0,a)}finally{m?En():(ot=!1,Sn=null)}}else ot=!1};if(typeof kn=="function")var En=function(){kn(yt)};else if(typeof MessageChannel<"u"){Ae=new MessageChannel;var Yr=Ae.port2;Ae.port1.onmessage=yt,En=function(){Yr.postMessage(null)}}else En=function(){xn(yt,0)};Ae={ReactCurrentDispatcher:he,ReactCurrentOwner:yn,ReactCurrentBatchConfig:wn,Scheduler:{__proto__:null,unstable_ImmediatePriority:1,unstable_UserBlockingPriority:2,unstable_NormalPriority:3,unstable_IdlePriority:5,unstable_LowPriority:4,unstable_runWithPriority:function(a,m){switch(a){case 1:case 2:case 3:case 4:case 5:break;default:a=3}var S=b;b=a;try{return m()}finally{b=S}},unstable_next:function(a){switch(b){case 1:case 2:case 3:var m=3;break;default:m=b}var S=b;b=m;try{return a()}finally{b=S}},unstable_scheduleCallback:function(a,m,S){var P=rt();switch(typeof S=="object"&&S!==null?(S=S.delay,S=typeof S=="number"&&0<S?P+S:P):S=P,a){case 1:var F=-1;break;case 2:F=250;break;case 5:F=1073741823;break;case 4:F=1e4;break;default:F=5e3}return F=S+F,a={id:tl++,callback:m,priorityLevel:a,startTime:S,expirationTime:F,sortIndex:-1},S>P?(a.sortIndex=S,Qe(Xe,a),me(De)===null&&a===me(Xe)&&(tn?(or(vt),vt=-1):tn=!0,W(Ft,S-P))):(a.sortIndex=F,Qe(De,a),gt||ht||(gt=!0,O(Ye))),a},unstable_cancelCallback:function(a){a.callback=null},unstable_wrapCallback:function(a){var m=b;return function(){var S=b;b=m;try{return a.apply(this,arguments)}finally{b=S}}},unstable_getCurrentPriorityLevel:function(){return b},unstable_shouldYield:I,unstable_requestPaint:function(){},unstable_continueExecution:function(){gt||ht||(gt=!0,O(Ye))},unstable_pauseExecution:function(){},unstable_getFirstCallbackNode:function(){return me(De)},get unstable_now(){return rt},unstable_forceFrameRate:function(a){0>a||125<a?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):lr=0<a?Math.floor(1e3/a):5},unstable_Profiling:null}},w.Children={map:Pe,forEach:function(a,m,S){Pe(a,function(){m.apply(this,arguments)},S)},count:function(a){var m=0;return Pe(a,function(){m++}),m},toArray:function(a){return Pe(a,function(m){return m})||[]},only:function(a){if(!nt(a))throw Error("React.Children.only expected to receive a single React element child.");return a}},w.Component=h,w.Fragment=Vr,w.Profiler=Mt,w.PureComponent=oe,w.StrictMode=Kn,w.Suspense=Wr,w.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Ae,w.act=J,w.cloneElement=function(a,m,S){if(a==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+a+".");var P=gn({},a.props),F=a.key,B=a.ref,V=a._owner;if(m!=null){if(m.ref!==void 0&&(B=m.ref,V=yn.current),m.key!==void 0&&(F=""+m.key),a.type&&a.type.defaultProps)var H=a.type.defaultProps;for(R in m)tr.call(m,R)&&!nr.hasOwnProperty(R)&&(P[R]=m[R]===void 0&&H!==void 0?H[R]:m[R])}var R=arguments.length-2;if(R===1)P.children=S;else if(1<R){H=Array(R);for(var le=0;le<R;le++)H[le]=arguments[le+2];P.children=H}return{$$typeof:ne,type:a.type,key:F,ref:B,props:P,_owner:V}},w.createContext=function(a){return a={$$typeof:Hr,_currentValue:a,_currentValue2:a,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},a.Provider={$$typeof:Zn,_context:a},a.Consumer=a},w.createElement=hn,w.createFactory=function(a){var m=hn.bind(null,a);return m.type=a,m},w.createRef=function(){return{current:null}},w.forwardRef=function(a){return{$$typeof:Br,render:a}},w.isValidElement=nt,w.lazy=function(a){return{$$typeof:Jn,_payload:{_status:-1,_result:a},_init:ft}},w.memo=function(a,m){return{$$typeof:Qr,type:a,compare:m===void 0?null:m}},w.startTransition=function(a,m){m=wn.transition,wn.transition={};try{a()}finally{wn.transition=m}},w.unstable_act=J,w.useCallback=function(a,m){return he.current.useCallback(a,m)},w.useContext=function(a){return he.current.useContext(a)},w.useDebugValue=function(a,m){},w.useDeferredValue=function(a){return he.current.useDeferredValue(a)},w.useEffect=function(a,m){return he.current.useEffect(a,m)},w.useId=function(){return he.current.useId()},w.useImperativeHandle=function(a,m,S){return he.current.useImperativeHandle(a,m,S)},w.useInsertionEffect=function(a,m){return he.current.useInsertionEffect(a,m)},w.useLayoutEffect=function(a,m){return he.current.useLayoutEffect(a,m)},w.useMemo=function(a,m){return he.current.useMemo(a,m)},w.useReducer=function(a,m,S){return he.current.useReducer(a,m,S)},w.useRef=function(a){return he.current.useRef(a)},w.useState=function(a){return he.current.useState(a)},w.useSyncExternalStore=function(a,m,S){return he.current.useSyncExternalStore(a,m,S)},w.useTransition=function(){return he.current.useTransition()},w.version="18.3.1"})})();hs=window.React,k=hs,{useState:qt,useEffect:Hi,useCallback:Bi,useMemo:Ed,useRef:Cd,useContext:Nd,createContext:_d,Fragment:zd,StrictMode:Pd,createElement:Td,Component:Ld}=hs});qo();(function(){"use strict";(function(w,D){typeof exports=="object"&&typeof module<"u"?D(exports,(qo(),Sd(gs))):typeof define=="function"&&define.amd?define(["exports","react"],D):(w=w||self,D(w.ReactDOM={},w.React))})(this,function(w,D){function h(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function se(e,t){oe(e,t),oe(e+"Capture",t)}function oe(e,t){for(vr[e]=t,e=0;e<t.length;e++)Ia.add(t[e])}function hn(e){return bl.call(ja,e)?!0:bl.call(Oa,e)?!1:lc.test(e)?ja[e]=!0:(Oa[e]=!0,!1)}function Gn(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function nt(e,t,n,r){if(t===null||typeof t>"u"||Gn(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function te(e,t,n,r,o,l,i){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=o,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=l,this.removeEmptyString=i}function dt(e,t,n,r){var o=ge.hasOwnProperty(t)?ge[t]:null;(o!==null?o.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(nt(t,n,o,r)&&(n=null),r||o===null?hn(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):o.mustUseProperty?e[o.propertyName]=n===null?o.type===3?!1:"":n:(t=o.attributeName,r=o.attributeNamespace,n===null?e.removeAttribute(t):(o=o.type,n=o===3||o===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}function je(e){return e===null||typeof e!="object"?null:(e=Aa&&e[Aa]||e["@@iterator"],typeof e=="function"?e:null)}function Pe(e,t,n){if(ui===void 0)try{throw Error()}catch(r){ui=(t=r.stack.trim().match(/\n( *(at )?)/))&&t[1]||""}return`
`+ui+e}function ft(e,t){if(!e||ai)return"";ai=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(p){var r=p}Reflect.construct(e,[],t)}else{try{t.call()}catch(p){r=p}e.call(t.prototype)}else{try{throw Error()}catch(p){r=p}e()}}catch(p){if(p&&r&&typeof p.stack=="string"){for(var o=p.stack.split(`
`),l=r.stack.split(`
`),i=o.length-1,u=l.length-1;1<=i&&0<=u&&o[i]!==l[u];)u--;for(;1<=i&&0<=u;i--,u--)if(o[i]!==l[u]){if(i!==1||u!==1)do if(i--,u--,0>u||o[i]!==l[u]){var s=`
`+o[i].replace(" at new "," at ");return e.displayName&&s.includes("<anonymous>")&&(s=s.replace("<anonymous>",e.displayName)),s}while(1<=i&&0<=u);break}}}finally{ai=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?Pe(e):""}function Qe(e){switch(e.tag){case 5:return Pe(e.type);case 16:return Pe("Lazy");case 13:return Pe("Suspense");case 19:return Pe("SuspenseList");case 0:case 2:case 15:return e=ft(e.type,!1),e;case 11:return e=ft(e.type.render,!1),e;case 1:return e=ft(e.type,!0),e;default:return""}}function me(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case On:return"Fragment";case In:return"Portal";case ni:return"Profiler";case ti:return"StrictMode";case oi:return"Suspense";case li:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case Ra:return(e.displayName||"Context")+".Consumer";case Da:return(e._context.displayName||"Context")+".Provider";case ri:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case ii:return t=e.displayName||null,t!==null?t:me(e.type)||"Memo";case Ht:t=e._payload,e=e._init;try{return me(e(t))}catch{}}return null}function Lt(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return me(t);case 8:return t===ti?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function Ee(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function pt(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function Ft(e){var t=pt(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var o=n.get,l=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return o.call(this)},set:function(i){r=""+i,l.call(this,i)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(i){r=""+i},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Ye(e){e._valueTracker||(e._valueTracker=Ft(e))}function I(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=pt(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function O(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function W(e,t){var n=t.checked;return G({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function J(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=Ee(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function ne(e,t){t=t.checked,t!=null&&dt(e,"checked",t,!1)}function en(e,t){ne(e,t);var n=Ee(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?Kn(e,t.type,n):t.hasOwnProperty("defaultValue")&&Kn(e,t.type,Ee(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function Vr(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function Kn(e,t,n){(t!=="number"||O(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}function Mt(e,t,n,r){if(e=e.options,t){t={};for(var o=0;o<n.length;o++)t["$"+n[o]]=!0;for(n=0;n<e.length;n++)o=t.hasOwnProperty("$"+e[n].value),e[n].selected!==o&&(e[n].selected=o),o&&r&&(e[n].defaultSelected=!0)}else{for(n=""+Ee(n),t=null,o=0;o<e.length;o++){if(e[o].value===n){e[o].selected=!0,r&&(e[o].defaultSelected=!0);return}t!==null||e[o].disabled||(t=e[o])}t!==null&&(t.selected=!0)}}function Zn(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(h(91));return G({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function Hr(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(h(92));if(yr(n)){if(1<n.length)throw Error(h(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:Ee(n)}}function Br(e,t){var n=Ee(t.value),r=Ee(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function Wr(e,t){t=e.textContent,t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function Qr(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Jn(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?Qr(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}function bn(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||xr.hasOwnProperty(e)&&xr[e]?(""+t).trim():t+"px"}function qn(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,o=bn(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,o):e[n]=o}}function gn(e,t){if(t){if(uc[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(h(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(h(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(h(61))}if(t.style!=null&&typeof t.style!="object")throw Error(h(62))}}function vn(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}function Ae(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}function er(e){if(e=cr(e)){if(typeof ci!="function")throw Error(h(280));var t=e.stateNode;t&&(t=to(t),ci(e.stateNode,e.type,t))}}function tr(e){jn?Dn?Dn.push(e):Dn=[e]:jn=e}function yn(){if(jn){var e=jn,t=Dn;if(Dn=jn=null,er(e),t)for(e=0;e<t.length;e++)er(t[e])}}function nr(e,t,n){if(di)return e(t,n);di=!0;try{return Va(e,t,n)}finally{di=!1,(jn!==null||Dn!==null)&&(Ha(),yn())}}function It(e,t){var n=e.stateNode;if(n===null)return null;var r=to(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(h(231,t,typeof n));return n}function he(e,t,n,r,o,l,i,u,s){Sr=!1,Co=null,ac.apply(sc,arguments)}function wn(e,t,n,r,o,l,i,u,s){if(he.apply(this,arguments),Sr){if(Sr){var p=Co;Sr=!1,Co=null}else throw Error(h(198));No||(No=!0,pi=p)}}function mt(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function rt(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function rr(e){if(mt(e)!==e)throw Error(h(188))}function el(e){var t=e.alternate;if(!t){if(t=mt(e),t===null)throw Error(h(188));return t!==e?null:e}for(var n=e,r=t;;){var o=n.return;if(o===null)break;var l=o.alternate;if(l===null){if(r=o.return,r!==null){n=r;continue}break}if(o.child===l.child){for(l=o.child;l;){if(l===n)return rr(o),e;if(l===r)return rr(o),t;l=l.sibling}throw Error(h(188))}if(n.return!==r.return)n=o,r=l;else{for(var i=!1,u=o.child;u;){if(u===n){i=!0,n=o,r=l;break}if(u===r){i=!0,r=o,n=l;break}u=u.sibling}if(!i){for(u=l.child;u;){if(u===n){i=!0,n=l,r=o;break}if(u===r){i=!0,r=l,n=o;break}u=u.sibling}if(!i)throw Error(h(189))}}if(n.alternate!==r)throw Error(h(190))}if(n.tag!==3)throw Error(h(188));return n.stateNode.current===n?e:t}function De(e){return e=el(e),e!==null?Xe(e):null}function Xe(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=Xe(e);if(t!==null)return t;e=e.sibling}return null}function tl(e,t){if(ut&&typeof ut.onCommitFiberRoot=="function")try{ut.onCommitFiberRoot(zo,e,void 0,(e.current.flags&128)===128)}catch{}}function Te(e){return e>>>=0,e===0?32:31-(mc(e)/hc|0)|0}function b(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function ht(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,o=e.suspendedLanes,l=e.pingedLanes,i=n&268435455;if(i!==0){var u=i&~o;u!==0?r=b(u):(l&=i,l!==0&&(r=b(l)))}else i=n&~o,i!==0?r=b(i):l!==0&&(r=b(l));if(r===0)return 0;if(t!==0&&t!==r&&!(t&o)&&(o=r&-r,l=t&-t,o>=l||o===16&&(l&4194240)!==0))return t;if(r&4&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-be(t),o=1<<n,r|=e[n],t&=~o;return r}function gt(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function tn(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,o=e.expirationTimes,l=e.pendingLanes;0<l;){var i=31-be(l),u=1<<i,s=o[i];s===-1?(!(u&n)||u&r)&&(o[i]=gt(u,t)):s<=t&&(e.expiredLanes|=u),l&=~u}}function xn(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function or(){var e=Po;return Po<<=1,!(Po&4194240)&&(Po=64),e}function kn(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function ot(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-be(t),e[t]=n}function Sn(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var o=31-be(n),l=1<<o;t[o]=0,r[o]=-1,e[o]=-1,n&=~l}}function vt(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-be(n),o=1<<r;o&t|e[r]&t&&(e[r]|=t),n&=~o}}function lr(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}function ir(e,t){switch(e){case"focusin":case"focusout":Bt=null;break;case"dragenter":case"dragleave":Wt=null;break;case"mouseover":case"mouseout":Qt=null;break;case"pointerover":case"pointerout":Er.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Cr.delete(t.pointerId)}}function yt(e,t,n,r,o,l){return e===null||e.nativeEvent!==l?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:l,targetContainers:[o]},t!==null&&(t=cr(t),t!==null&&ms(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,o!==null&&t.indexOf(o)===-1&&t.push(o),e)}function En(e,t,n,r,o){switch(t){case"focusin":return Bt=yt(Bt,e,t,n,r,o),!0;case"dragenter":return Wt=yt(Wt,e,t,n,r,o),!0;case"mouseover":return Qt=yt(Qt,e,t,n,r,o),!0;case"pointerover":var l=o.pointerId;return Er.set(l,yt(Er.get(l)||null,e,t,n,r,o)),!0;case"gotpointercapture":return l=o.pointerId,Cr.set(l,yt(Cr.get(l)||null,e,t,n,r,o)),!0}return!1}function Yr(e){var t=nn(e.target);if(t!==null){var n=mt(t);if(n!==null){if(t=n.tag,t===13){if(t=rt(n),t!==null){e.blockedOn=t,pd(e.priority,function(){dd(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function a(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=R(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);si=r,n.target.dispatchEvent(r),si=null}else return t=cr(n),t!==null&&ms(t),e.blockedOn=n,!1;t.shift()}return!0}function m(e,t,n){a(e)&&n.delete(t)}function S(){hi=!1,Bt!==null&&a(Bt)&&(Bt=null),Wt!==null&&a(Wt)&&(Wt=null),Qt!==null&&a(Qt)&&(Qt=null),Er.forEach(m),Cr.forEach(m)}function P(e,t){e.blockedOn===t&&(e.blockedOn=null,hi||(hi=!0,Ba(Wa,S)))}function F(e){if(0<Lo.length){P(Lo[0],e);for(var t=1;t<Lo.length;t++){var n=Lo[t];n.blockedOn===e&&(n.blockedOn=null)}}for(Bt!==null&&P(Bt,e),Wt!==null&&P(Wt,e),Qt!==null&&P(Qt,e),t=function(r){return P(r,e)},Er.forEach(t),Cr.forEach(t),t=0;t<Yt.length;t++)n=Yt[t],n.blockedOn===e&&(n.blockedOn=null);for(;0<Yt.length&&(t=Yt[0],t.blockedOn===null);)Yr(t),t.blockedOn===null&&Yt.shift()}function B(e,t,n,r){var o=A,l=Rn.transition;Rn.transition=null;try{A=1,H(e,t,n,r)}finally{A=o,Rn.transition=l}}function V(e,t,n,r){var o=A,l=Rn.transition;Rn.transition=null;try{A=4,H(e,t,n,r)}finally{A=o,Rn.transition=l}}function H(e,t,n,r){if(Fo){var o=R(e,t,n,r);if(o===null)ll(e,t,r,Mo,n),ir(e,r);else if(En(o,e,t,n,r))r.stopPropagation();else if(ir(e,r),t&4&&-1<gc.indexOf(e)){for(;o!==null;){var l=cr(o);if(l!==null&&cd(l),l=R(e,t,n,r),l===null&&ll(e,t,r,Mo,n),l===o)break;o=l}o!==null&&r.stopPropagation()}else ll(e,t,r,null,n)}}function R(e,t,n,r){if(Mo=null,e=Ae(r),e=nn(e),e!==null)if(t=mt(e),t===null)e=null;else if(n=t.tag,n===13){if(e=rt(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return Mo=e,null}function le(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(fc()){case mi:return 1;case Xa:return 4;case _o:case pc:return 16;case Ga:return 536870912;default:return 16}default:return 16}}function Wi(){if(Io)return Io;var e,t=gi,n=t.length,r,o="value"in Xt?Xt.value:Xt.textContent,l=o.length;for(e=0;e<n&&t[e]===o[e];e++);var i=n-e;for(r=1;r<=i&&t[n-r]===o[l-r];r++);return Io=o.slice(e,1<r?1-r:void 0)}function Xr(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function Gr(){return!0}function Qi(){return!1}function Re(e){function t(n,r,o,l,i){this._reactName=n,this._targetInst=o,this.type=r,this.nativeEvent=l,this.target=i,this.currentTarget=null;for(var u in e)e.hasOwnProperty(u)&&(n=e[u],this[u]=n?n(l):l[u]);return this.isDefaultPrevented=(l.defaultPrevented!=null?l.defaultPrevented:l.returnValue===!1)?Gr:Qi,this.isPropagationStopped=Qi,this}return G(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Gr)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Gr)},persist:function(){},isPersistent:Gr}),t}function Ss(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=Tc[e])?!!t[e]:!1}function nl(e){return Ss}function Yi(e,t){switch(e){case"keyup":return Ac.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Xi(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}function Es(e,t){switch(e){case"compositionend":return Xi(t);case"keypress":return t.which!==32?null:(es=!0,qa);case"textInput":return e=t.data,e===qa&&es?null:e;default:return null}}function Cs(e,t){if(An)return e==="compositionend"||!ki&&Yi(e,t)?(e=Wi(),Io=gi=Xt=null,An=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return ba&&t.locale!=="ko"?null:t.data;default:return null}}function Gi(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!Vc[e.type]:t==="textarea"}function Ns(e){if(!Et)return!1;e="on"+e;var t=e in document;return t||(t=document.createElement("div"),t.setAttribute(e,"return;"),t=typeof t[e]=="function"),t}function Ki(e,t,n,r){tr(r),t=br(t,"onChange"),0<t.length&&(n=new vi("onChange","change",null,n,r),e.push({event:n,listeners:t}))}function _s(e){ou(e,0)}function Kr(e){var t=Nn(e);if(I(t))return e}function zs(e,t){if(e==="change")return t}function Zi(){Pr&&(Pr.detachEvent("onpropertychange",Ji),Tr=Pr=null)}function Ji(e){if(e.propertyName==="value"&&Kr(Tr)){var t=[];Ki(t,Tr,e,Ae(e)),nr(_s,t)}}function Ps(e,t,n){e==="focusin"?(Zi(),Pr=t,Tr=n,Pr.attachEvent("onpropertychange",Ji)):e==="focusout"&&Zi()}function Ts(e,t){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Kr(Tr)}function Ls(e,t){if(e==="click")return Kr(t)}function Fs(e,t){if(e==="input"||e==="change")return Kr(t)}function Ms(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}function ur(e,t){if(qe(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var o=n[r];if(!bl.call(t,o)||!qe(e[o],t[o]))return!1}return!0}function bi(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function qi(e,t){var n=bi(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=bi(n)}}function eu(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?eu(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function tu(){for(var e=window,t=O();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=O(e.document)}return t}function rl(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function Is(e){var t=tu(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&eu(n.ownerDocument.documentElement,n)){if(r!==null&&rl(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var o=n.textContent.length,l=Math.min(r.start,o);r=r.end===void 0?l:Math.min(r.end,o),!e.extend&&l>r&&(o=r,r=l,l=o),o=qi(n,l);var i=qi(n,r);o&&i&&(e.rangeCount!==1||e.anchorNode!==o.node||e.anchorOffset!==o.offset||e.focusNode!==i.node||e.focusOffset!==i.offset)&&(t=t.createRange(),t.setStart(o.node,o.offset),e.removeAllRanges(),l>r?(e.addRange(t),e.extend(i.node,i.offset)):(t.setEnd(i.node,i.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}function nu(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Ei||$n==null||$n!==O(r)||(r=$n,"selectionStart"in r&&rl(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Lr&&ur(Lr,r)||(Lr=r,r=br(Si,"onSelect"),0<r.length&&(t=new vi("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=$n)))}function Zr(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}function Jr(e){if(Ci[e])return Ci[e];if(!Vn[e])return e;var t=Vn[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in ns)return Ci[e]=t[n];return e}function Ot(e,t){us.set(e,t),se(t,[e])}function ru(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,wn(r,t,void 0,e),e.currentTarget=null}function ou(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],o=r.event;r=r.listeners;e:{var l=void 0;if(t)for(var i=r.length-1;0<=i;i--){var u=r[i],s=u.instance,p=u.currentTarget;if(u=u.listener,s!==l&&o.isPropagationStopped())break e;ru(o,u,p),l=s}else for(i=0;i<r.length;i++){if(u=r[i],s=u.instance,p=u.currentTarget,u=u.listener,s!==l&&o.isPropagationStopped())break e;ru(o,u,p),l=s}}}if(No)throw e=pi,No=!1,pi=null,e}function Y(e,t){var n=t[Pi];n===void 0&&(n=t[Pi]=new Set);var r=e+"__bubble";n.has(r)||(lu(t,e,2,!1),n.add(r))}function ol(e,t,n){var r=0;t&&(r|=4),lu(n,e,r,t)}function ar(e){if(!e[jo]){e[jo]=!0,Ia.forEach(function(n){n!=="selectionchange"&&(Bc.has(n)||ol(n,!1,e),ol(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[jo]||(t[jo]=!0,ol("selectionchange",!1,t))}}function lu(e,t,n,r,o){switch(le(t)){case 1:o=B;break;case 4:o=V;break;default:o=H}n=o.bind(null,t,n,e),o=void 0,!fi||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(o=!0),r?o!==void 0?e.addEventListener(t,n,{capture:!0,passive:o}):e.addEventListener(t,n,!0):o!==void 0?e.addEventListener(t,n,{passive:o}):e.addEventListener(t,n,!1)}function ll(e,t,n,r,o){var l=r;if(!(t&1)&&!(t&2)&&r!==null)e:for(;;){if(r===null)return;var i=r.tag;if(i===3||i===4){var u=r.stateNode.containerInfo;if(u===o||u.nodeType===8&&u.parentNode===o)break;if(i===4)for(i=r.return;i!==null;){var s=i.tag;if((s===3||s===4)&&(s=i.stateNode.containerInfo,s===o||s.nodeType===8&&s.parentNode===o))return;i=i.return}for(;u!==null;){if(i=nn(u),i===null)return;if(s=i.tag,s===5||s===6){r=l=i;continue e}u=u.parentNode}}r=r.return}nr(function(){var p=l,v=Ae(n),y=[];e:{var g=us.get(e);if(g!==void 0){var E=vi,N=e;switch(e){case"keypress":if(Xr(n)===0)break e;case"keydown":case"keyup":E=Fc;break;case"focusin":N="focus",E=xi;break;case"focusout":N="blur",E=xi;break;case"beforeblur":case"afterblur":E=xi;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":E=Ka;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":E=wc;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":E=Oc;break;case rs:case os:case ls:E=Sc;break;case is:E=Dc;break;case"scroll":E=vc;break;case"wheel":E=Uc;break;case"copy":case"cut":case"paste":E=Cc;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":E=Ja}var _=(t&4)!==0,ee=!_&&e==="scroll",d=_?g!==null?g+"Capture":null:g;_=[];for(var c=p,f;c!==null;){f=c;var x=f.stateNode;if(f.tag===5&&x!==null&&(f=x,d!==null&&(x=It(c,d),x!=null&&_.push(sr(c,x,f)))),ee)break;c=c.return}0<_.length&&(g=new E(g,N,null,n,v),y.push({event:g,listeners:_}))}}if(!(t&7)){e:{if(g=e==="mouseover"||e==="pointerover",E=e==="mouseout"||e==="pointerout",g&&n!==si&&(N=n.relatedTarget||n.fromElement)&&(nn(N)||N[Nt]))break e;if((E||g)&&(g=v.window===v?v:(g=v.ownerDocument)?g.defaultView||g.parentWindow:window,E?(N=n.relatedTarget||n.toElement,E=p,N=N?nn(N):null,N!==null&&(ee=mt(N),N!==ee||N.tag!==5&&N.tag!==6)&&(N=null)):(E=null,N=p),E!==N)){if(_=Ka,x="onMouseLeave",d="onMouseEnter",c="mouse",(e==="pointerout"||e==="pointerover")&&(_=Ja,x="onPointerLeave",d="onPointerEnter",c="pointer"),ee=E==null?g:Nn(E),f=N==null?g:Nn(N),g=new _(x,c+"leave",E,n,v),g.target=ee,g.relatedTarget=f,x=null,nn(v)===p&&(_=new _(d,c+"enter",N,n,v),_.target=f,_.relatedTarget=ee,x=_),ee=x,E&&N)t:{for(_=E,d=N,c=0,f=_;f;f=Cn(f))c++;for(f=0,x=d;x;x=Cn(x))f++;for(;0<c-f;)_=Cn(_),c--;for(;0<f-c;)d=Cn(d),f--;for(;c--;){if(_===d||d!==null&&_===d.alternate)break t;_=Cn(_),d=Cn(d)}_=null}else _=null;E!==null&&iu(y,g,E,_,!1),N!==null&&ee!==null&&iu(y,ee,N,_,!0)}}e:{if(g=p?Nn(p):window,E=g.nodeName&&g.nodeName.toLowerCase(),E==="select"||E==="input"&&g.type==="file")var z=zs;else if(Gi(g))if(ts)z=Fs;else{z=Ts;var T=Ps}else(E=g.nodeName)&&E.toLowerCase()==="input"&&(g.type==="checkbox"||g.type==="radio")&&(z=Ls);if(z&&(z=z(e,p))){Ki(y,z,n,v);break e}T&&T(e,g,p),e==="focusout"&&(T=g._wrapperState)&&T.controlled&&g.type==="number"&&Kn(g,"number",g.value)}switch(T=p?Nn(p):window,e){case"focusin":(Gi(T)||T.contentEditable==="true")&&($n=T,Si=p,Lr=null);break;case"focusout":Lr=Si=$n=null;break;case"mousedown":Ei=!0;break;case"contextmenu":case"mouseup":case"dragend":Ei=!1,nu(y,n,v);break;case"selectionchange":if(Hc)break;case"keydown":case"keyup":nu(y,n,v)}var L;if(ki)e:{switch(e){case"compositionstart":var M="onCompositionStart";break e;case"compositionend":M="onCompositionEnd";break e;case"compositionupdate":M="onCompositionUpdate";break e}M=void 0}else An?Yi(e,n)&&(M="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(M="onCompositionStart");M&&(ba&&n.locale!=="ko"&&(An||M!=="onCompositionStart"?M==="onCompositionEnd"&&An&&(L=Wi()):(Xt=v,gi="value"in Xt?Xt.value:Xt.textContent,An=!0)),T=br(p,M),0<T.length&&(M=new Za(M,e,null,n,v),y.push({event:M,listeners:T}),L?M.data=L:(L=Xi(n),L!==null&&(M.data=L)))),(L=$c?Es(e,n):Cs(e,n))&&(p=br(p,"onBeforeInput"),0<p.length&&(v=new _c("onBeforeInput","beforeinput",null,n,v),y.push({event:v,listeners:p}),v.data=L))}ou(y,t)})}function sr(e,t,n){return{instance:e,listener:t,currentTarget:n}}function br(e,t){for(var n=t+"Capture",r=[];e!==null;){var o=e,l=o.stateNode;o.tag===5&&l!==null&&(o=l,l=It(e,n),l!=null&&r.unshift(sr(e,l,o)),l=It(e,t),l!=null&&r.push(sr(e,l,o))),e=e.return}return r}function Cn(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function iu(e,t,n,r,o){for(var l=t._reactName,i=[];n!==null&&n!==r;){var u=n,s=u.alternate,p=u.stateNode;if(s!==null&&s===r)break;u.tag===5&&p!==null&&(u=p,o?(s=It(n,l),s!=null&&i.unshift(sr(n,s,u))):o||(s=It(n,l),s!=null&&i.push(sr(n,s,u)))),n=n.return}i.length!==0&&e.push({event:t,listeners:i})}function uu(e){return(typeof e=="string"?e:""+e).replace(Wc,`
`).replace(Qc,"")}function qr(e,t,n,r){if(t=uu(t),uu(e)!==t&&n)throw Error(h(425))}function eo(){}function il(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}function Os(e){setTimeout(function(){throw e})}function ul(e,t){var n=t,r=0;do{var o=n.nextSibling;if(e.removeChild(n),o&&o.nodeType===8)if(n=o.data,n==="/$"){if(r===0){e.removeChild(o),F(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=o}while(n);F(t)}function wt(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function au(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}function nn(e){var t=e[at];if(t)return t;for(var n=e.parentNode;n;){if(t=n[Nt]||n[at]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=au(e);e!==null;){if(n=e[at])return n;e=au(e)}return t}e=n,n=e.parentNode}return null}function cr(e){return e=e[at]||e[Nt],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function Nn(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(h(33))}function to(e){return e[Mr]||null}function jt(e){return{current:e}}function U(e,t){0>Bn||(e.current=Ti[Bn],Ti[Bn]=null,Bn--)}function Q(e,t,n){Bn++,Ti[Bn]=e.current,e.current=t}function _n(e,t){var n=e.type.contextTypes;if(!n)return Gt;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var o={},l;for(l in n)o[l]=t[l];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=o),o}function Le(e){return e=e.childContextTypes,e!=null}function su(e,t,n){if(ie.current!==Gt)throw Error(h(168));Q(ie,t),Q(ve,n)}function cu(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var o in r)if(!(o in t))throw Error(h(108,Lt(e)||"Unknown",o));return G({},n,r)}function no(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||Gt,cn=ie.current,Q(ie,e),Q(ve,ve.current),!0}function du(e,t,n){var r=e.stateNode;if(!r)throw Error(h(169));n?(e=cu(e,t,cn),r.__reactInternalMemoizedMergedChildContext=e,U(ve),U(ie),Q(ie,e)):U(ve),Q(ve,n)}function fu(e){_t===null?_t=[e]:_t.push(e)}function js(e){Do=!0,fu(e)}function Dt(){if(!Li&&_t!==null){Li=!0;var e=0,t=A;try{var n=_t;for(A=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}_t=null,Do=!1}catch(o){throw _t!==null&&(_t=_t.slice(e+1)),Qa(mi,Dt),o}finally{A=t,Li=!1}}return null}function rn(e,t){Wn[Qn++]=Uo,Wn[Qn++]=Ro,Ro=e,Uo=t}function pu(e,t,n){He[Be++]=zt,He[Be++]=Pt,He[Be++]=dn,dn=e;var r=zt;e=Pt;var o=32-be(r)-1;r&=~(1<<o),n+=1;var l=32-be(t)+o;if(30<l){var i=o-o%5;l=(r&(1<<i)-1).toString(32),r>>=i,o-=i,zt=1<<32-be(t)+o|n<<o|r,Pt=l+e}else zt=1<<l|n<<o|r,Pt=e}function al(e){e.return!==null&&(rn(e,1),pu(e,1,0))}function sl(e){for(;e===Ro;)Ro=Wn[--Qn],Wn[Qn]=null,Uo=Wn[--Qn],Wn[Qn]=null;for(;e===dn;)dn=He[--Be],He[Be]=null,Pt=He[--Be],He[Be]=null,zt=He[--Be],He[Be]=null}function mu(e,t){var n=We(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function hu(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,Ue=e,Me=wt(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,Ue=e,Me=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=dn!==null?{id:zt,overflow:Pt}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=We(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,Ue=e,Me=null,!0):!1;default:return!1}}function cl(e){return(e.mode&1)!==0&&(e.flags&128)===0}function dl(e){if(X){var t=Me;if(t){var n=t;if(!hu(e,t)){if(cl(e))throw Error(h(418));t=wt(n.nextSibling);var r=Ue;t&&hu(e,t)?mu(r,n):(e.flags=e.flags&-4097|2,X=!1,Ue=e)}}else{if(cl(e))throw Error(h(418));e.flags=e.flags&-4097|2,X=!1,Ue=e}}}function gu(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;Ue=e}function ro(e){if(e!==Ue)return!1;if(!X)return gu(e),X=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!il(e.type,e.memoizedProps)),t&&(t=Me)){if(cl(e)){for(e=Me;e;)e=wt(e.nextSibling);throw Error(h(418))}for(;t;)mu(e,t),t=wt(t.nextSibling)}if(gu(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(h(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){Me=wt(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}Me=null}}else Me=Ue?wt(e.stateNode.nextSibling):null;return!0}function zn(){Me=Ue=null,X=!1}function fl(e){et===null?et=[e]:et.push(e)}function dr(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(h(309));var r=n.stateNode}if(!r)throw Error(h(147,e));var o=r,l=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===l?t.ref:(t=function(i){var u=o.refs;i===null?delete u[l]:u[l]=i},t._stringRef=l,t)}if(typeof e!="string")throw Error(h(284));if(!n._owner)throw Error(h(290,e))}return e}function oo(e,t){throw e=Object.prototype.toString.call(t),Error(h(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function vu(e){var t=e._init;return t(e._payload)}function yu(e){function t(d,c){if(e){var f=d.deletions;f===null?(d.deletions=[c],d.flags|=16):f.push(c)}}function n(d,c){if(!e)return null;for(;c!==null;)t(d,c),c=c.sibling;return null}function r(d,c){for(d=new Map;c!==null;)c.key!==null?d.set(c.key,c):d.set(c.index,c),c=c.sibling;return d}function o(d,c){return d=Vt(d,c),d.index=0,d.sibling=null,d}function l(d,c,f){return d.index=f,e?(f=d.alternate,f!==null?(f=f.index,f<c?(d.flags|=2,c):f):(d.flags|=2,c)):(d.flags|=1048576,c)}function i(d){return e&&d.alternate===null&&(d.flags|=2),d}function u(d,c,f,x){return c===null||c.tag!==6?(c=Yl(f,d.mode,x),c.return=d,c):(c=o(c,f),c.return=d,c)}function s(d,c,f,x){var z=f.type;return z===On?v(d,c,f.props.children,x,f.key):c!==null&&(c.elementType===z||typeof z=="object"&&z!==null&&z.$$typeof===Ht&&vu(z)===c.type)?(x=o(c,f.props),x.ref=dr(d,c,f),x.return=d,x):(x=ho(f.type,f.key,f.props,null,d.mode,x),x.ref=dr(d,c,f),x.return=d,x)}function p(d,c,f,x){return c===null||c.tag!==4||c.stateNode.containerInfo!==f.containerInfo||c.stateNode.implementation!==f.implementation?(c=Xl(f,d.mode,x),c.return=d,c):(c=o(c,f.children||[]),c.return=d,c)}function v(d,c,f,x,z){return c===null||c.tag!==7?(c=sn(f,d.mode,x,z),c.return=d,c):(c=o(c,f),c.return=d,c)}function y(d,c,f){if(typeof c=="string"&&c!==""||typeof c=="number")return c=Yl(""+c,d.mode,f),c.return=d,c;if(typeof c=="object"&&c!==null){switch(c.$$typeof){case So:return f=ho(c.type,c.key,c.props,null,d.mode,f),f.ref=dr(d,null,c),f.return=d,f;case In:return c=Xl(c,d.mode,f),c.return=d,c;case Ht:var x=c._init;return y(d,x(c._payload),f)}if(yr(c)||je(c))return c=sn(c,d.mode,f,null),c.return=d,c;oo(d,c)}return null}function g(d,c,f,x){var z=c!==null?c.key:null;if(typeof f=="string"&&f!==""||typeof f=="number")return z!==null?null:u(d,c,""+f,x);if(typeof f=="object"&&f!==null){switch(f.$$typeof){case So:return f.key===z?s(d,c,f,x):null;case In:return f.key===z?p(d,c,f,x):null;case Ht:return z=f._init,g(d,c,z(f._payload),x)}if(yr(f)||je(f))return z!==null?null:v(d,c,f,x,null);oo(d,f)}return null}function E(d,c,f,x,z){if(typeof x=="string"&&x!==""||typeof x=="number")return d=d.get(f)||null,u(c,d,""+x,z);if(typeof x=="object"&&x!==null){switch(x.$$typeof){case So:return d=d.get(x.key===null?f:x.key)||null,s(c,d,x,z);case In:return d=d.get(x.key===null?f:x.key)||null,p(c,d,x,z);case Ht:var T=x._init;return E(d,c,f,T(x._payload),z)}if(yr(x)||je(x))return d=d.get(f)||null,v(c,d,x,z,null);oo(c,x)}return null}function N(d,c,f,x){for(var z=null,T=null,L=c,M=c=0,pe=null;L!==null&&M<f.length;M++){L.index>M?(pe=L,L=null):pe=L.sibling;var $=g(d,L,f[M],x);if($===null){L===null&&(L=pe);break}e&&L&&$.alternate===null&&t(d,L),c=l($,c,M),T===null?z=$:T.sibling=$,T=$,L=pe}if(M===f.length)return n(d,L),X&&rn(d,M),z;if(L===null){for(;M<f.length;M++)L=y(d,f[M],x),L!==null&&(c=l(L,c,M),T===null?z=L:T.sibling=L,T=L);return X&&rn(d,M),z}for(L=r(d,L);M<f.length;M++)pe=E(L,d,M,f[M],x),pe!==null&&(e&&pe.alternate!==null&&L.delete(pe.key===null?M:pe.key),c=l(pe,c,M),T===null?z=pe:T.sibling=pe,T=pe);return e&&L.forEach(function(bt){return t(d,bt)}),X&&rn(d,M),z}function _(d,c,f,x){var z=je(f);if(typeof z!="function")throw Error(h(150));if(f=z.call(f),f==null)throw Error(h(151));for(var T=z=null,L=c,M=c=0,pe=null,$=f.next();L!==null&&!$.done;M++,$=f.next()){L.index>M?(pe=L,L=null):pe=L.sibling;var bt=g(d,L,$.value,x);if(bt===null){L===null&&(L=pe);break}e&&L&&bt.alternate===null&&t(d,L),c=l(bt,c,M),T===null?z=bt:T.sibling=bt,T=bt,L=pe}if($.done)return n(d,L),X&&rn(d,M),z;if(L===null){for(;!$.done;M++,$=f.next())$=y(d,$.value,x),$!==null&&(c=l($,c,M),T===null?z=$:T.sibling=$,T=$);return X&&rn(d,M),z}for(L=r(d,L);!$.done;M++,$=f.next())$=E(L,d,M,$.value,x),$!==null&&(e&&$.alternate!==null&&L.delete($.key===null?M:$.key),c=l($,c,M),T===null?z=$:T.sibling=$,T=$);return e&&L.forEach(function(hd){return t(d,hd)}),X&&rn(d,M),z}function ee(d,c,f,x){if(typeof f=="object"&&f!==null&&f.type===On&&f.key===null&&(f=f.props.children),typeof f=="object"&&f!==null){switch(f.$$typeof){case So:e:{for(var z=f.key,T=c;T!==null;){if(T.key===z){if(z=f.type,z===On){if(T.tag===7){n(d,T.sibling),c=o(T,f.props.children),c.return=d,d=c;break e}}else if(T.elementType===z||typeof z=="object"&&z!==null&&z.$$typeof===Ht&&vu(z)===T.type){n(d,T.sibling),c=o(T,f.props),c.ref=dr(d,T,f),c.return=d,d=c;break e}n(d,T);break}else t(d,T);T=T.sibling}f.type===On?(c=sn(f.props.children,d.mode,x,f.key),c.return=d,d=c):(x=ho(f.type,f.key,f.props,null,d.mode,x),x.ref=dr(d,c,f),x.return=d,d=x)}return i(d);case In:e:{for(T=f.key;c!==null;){if(c.key===T)if(c.tag===4&&c.stateNode.containerInfo===f.containerInfo&&c.stateNode.implementation===f.implementation){n(d,c.sibling),c=o(c,f.children||[]),c.return=d,d=c;break e}else{n(d,c);break}else t(d,c);c=c.sibling}c=Xl(f,d.mode,x),c.return=d,d=c}return i(d);case Ht:return T=f._init,ee(d,c,T(f._payload),x)}if(yr(f))return N(d,c,f,x);if(je(f))return _(d,c,f,x);oo(d,f)}return typeof f=="string"&&f!==""||typeof f=="number"?(f=""+f,c!==null&&c.tag===6?(n(d,c.sibling),c=o(c,f),c.return=d,d=c):(n(d,c),c=Yl(f,d.mode,x),c.return=d,d=c),i(d)):n(d,c)}return ee}function pl(){Fi=Xn=$o=null}function ml(e,t){t=Ao.current,U(Ao),e._currentValue=t}function hl(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function Pn(e,t){$o=e,Fi=Xn=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(Ie=!0),e.firstContext=null)}function $e(e){var t=e._currentValue;if(Fi!==e)if(e={context:e,memoizedValue:t,next:null},Xn===null){if($o===null)throw Error(h(308));Xn=e,$o.dependencies={lanes:0,firstContext:e}}else Xn=Xn.next=e;return t}function gl(e){fn===null?fn=[e]:fn.push(e)}function wu(e,t,n,r){var o=t.interleaved;return o===null?(n.next=n,gl(t)):(n.next=o.next,o.next=n),t.interleaved=n,xt(e,r)}function xt(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}function vl(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function xu(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function kt(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function Rt(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,j&2){var o=r.pending;return o===null?t.next=t:(t.next=o.next,o.next=t),r.pending=t,Jc(e,n)}return o=r.interleaved,o===null?(t.next=t,gl(r)):(t.next=o.next,o.next=t),r.interleaved=t,xt(e,n)}function lo(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,vt(e,n)}}function ku(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var o=null,l=null;if(n=n.firstBaseUpdate,n!==null){do{var i={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};l===null?o=l=i:l=l.next=i,n=n.next}while(n!==null);l===null?o=l=t:l=l.next=t}else o=l=t;n={baseState:r.baseState,firstBaseUpdate:o,lastBaseUpdate:l,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function io(e,t,n,r){var o=e.updateQueue;Kt=!1;var l=o.firstBaseUpdate,i=o.lastBaseUpdate,u=o.shared.pending;if(u!==null){o.shared.pending=null;var s=u,p=s.next;s.next=null,i===null?l=p:i.next=p,i=s;var v=e.alternate;v!==null&&(v=v.updateQueue,u=v.lastBaseUpdate,u!==i&&(u===null?v.firstBaseUpdate=p:u.next=p,v.lastBaseUpdate=s))}if(l!==null){var y=o.baseState;i=0,v=p=s=null,u=l;do{var g=u.lane,E=u.eventTime;if((r&g)===g){v!==null&&(v=v.next={eventTime:E,lane:0,tag:u.tag,payload:u.payload,callback:u.callback,next:null});e:{var N=e,_=u;switch(g=t,E=n,_.tag){case 1:if(N=_.payload,typeof N=="function"){y=N.call(E,y,g);break e}y=N;break e;case 3:N.flags=N.flags&-65537|128;case 0:if(N=_.payload,g=typeof N=="function"?N.call(E,y,g):N,g==null)break e;y=G({},y,g);break e;case 2:Kt=!0}}u.callback!==null&&u.lane!==0&&(e.flags|=64,g=o.effects,g===null?o.effects=[u]:g.push(u))}else E={eventTime:E,lane:g,tag:u.tag,payload:u.payload,callback:u.callback,next:null},v===null?(p=v=E,s=y):v=v.next=E,i|=g;if(u=u.next,u===null){if(u=o.shared.pending,u===null)break;g=u,u=g.next,g.next=null,o.lastBaseUpdate=g,o.shared.pending=null}}while(!0);if(v===null&&(s=y),o.baseState=s,o.firstBaseUpdate=p,o.lastBaseUpdate=v,t=o.shared.interleaved,t!==null){o=t;do i|=o.lane,o=o.next;while(o!==t)}else l===null&&(o.shared.lanes=0);mn|=i,e.lanes=i,e.memoizedState=y}}function Su(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],o=r.callback;if(o!==null){if(r.callback=null,r=n,typeof o!="function")throw Error(h(191,o));o.call(r)}}}function on(e){if(e===Ir)throw Error(h(174));return e}function yl(e,t){switch(Q(jr,t),Q(Or,e),Q(st,Ir),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:Jn(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=Jn(t,e)}U(st),Q(st,t)}function Tn(e){U(st),U(Or),U(jr)}function Eu(e){on(jr.current);var t=on(st.current),n=Jn(t,e.type);t!==n&&(Q(Or,e),Q(st,n))}function wl(e){Or.current===e&&(U(st),U(Or))}function uo(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}function xl(){for(var e=0;e<Mi.length;e++)Mi[e]._workInProgressVersionPrimary=null;Mi.length=0}function xe(){throw Error(h(321))}function kl(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!qe(e[n],t[n]))return!1;return!0}function Sl(e,t,n,r,o,l){if(pn=l,Z=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,Vo.current=e===null||e.memoizedState===null?qc:ed,e=n(r,o),Dr){l=0;do{if(Dr=!1,Rr=0,25<=l)throw Error(h(301));l+=1,de=ue=null,t.updateQueue=null,Vo.current=td,e=n(r,o)}while(Dr)}if(Vo.current=Bo,t=ue!==null&&ue.next!==null,pn=0,de=ue=Z=null,Ho=!1,t)throw Error(h(300));return e}function El(){var e=Rr!==0;return Rr=0,e}function lt(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return de===null?Z.memoizedState=de=e:de=de.next=e,de}function Ve(){if(ue===null){var e=Z.alternate;e=e!==null?e.memoizedState:null}else e=ue.next;var t=de===null?Z.memoizedState:de.next;if(t!==null)de=t,ue=e;else{if(e===null)throw Error(h(310));ue=e,e={memoizedState:ue.memoizedState,baseState:ue.baseState,baseQueue:ue.baseQueue,queue:ue.queue,next:null},de===null?Z.memoizedState=de=e:de=de.next=e}return de}function fr(e,t){return typeof t=="function"?t(e):t}function Cl(e,t,n){if(t=Ve(),n=t.queue,n===null)throw Error(h(311));n.lastRenderedReducer=e;var r=ue,o=r.baseQueue,l=n.pending;if(l!==null){if(o!==null){var i=o.next;o.next=l.next,l.next=i}r.baseQueue=o=l,n.pending=null}if(o!==null){l=o.next,r=r.baseState;var u=i=null,s=null,p=l;do{var v=p.lane;if((pn&v)===v)s!==null&&(s=s.next={lane:0,action:p.action,hasEagerState:p.hasEagerState,eagerState:p.eagerState,next:null}),r=p.hasEagerState?p.eagerState:e(r,p.action);else{var y={lane:v,action:p.action,hasEagerState:p.hasEagerState,eagerState:p.eagerState,next:null};s===null?(u=s=y,i=r):s=s.next=y,Z.lanes|=v,mn|=v}p=p.next}while(p!==null&&p!==l);s===null?i=r:s.next=u,qe(r,t.memoizedState)||(Ie=!0),t.memoizedState=r,t.baseState=i,t.baseQueue=s,n.lastRenderedState=r}if(e=n.interleaved,e!==null){o=e;do l=o.lane,Z.lanes|=l,mn|=l,o=o.next;while(o!==e)}else o===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function Nl(e,t,n){if(t=Ve(),n=t.queue,n===null)throw Error(h(311));n.lastRenderedReducer=e;var r=n.dispatch,o=n.pending,l=t.memoizedState;if(o!==null){n.pending=null;var i=o=o.next;do l=e(l,i.action),i=i.next;while(i!==o);qe(l,t.memoizedState)||(Ie=!0),t.memoizedState=l,t.baseQueue===null&&(t.baseState=l),n.lastRenderedState=l}return[l,r]}function Cu(e,t,n){}function Nu(e,t,n){n=Z;var r=Ve(),o=t(),l=!qe(r.memoizedState,o);if(l&&(r.memoizedState=o,Ie=!0),r=r.queue,_l(Pu.bind(null,n,r,e),[e]),r.getSnapshot!==t||l||de!==null&&de.memoizedState.tag&1){if(n.flags|=2048,pr(9,zu.bind(null,n,r,o,t),void 0,null),fe===null)throw Error(h(349));pn&30||_u(n,t,o)}return o}function _u(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=Z.updateQueue,t===null?(t={lastEffect:null,stores:null},Z.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function zu(e,t,n,r){t.value=n,t.getSnapshot=r,Tu(t)&&Lu(e)}function Pu(e,t,n){return n(function(){Tu(t)&&Lu(e)})}function Tu(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!qe(e,n)}catch{return!0}}function Lu(e){var t=xt(e,1);t!==null&&Ze(t,e,1,-1)}function Fu(e){var t=lt();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:fr,lastRenderedState:e},t.queue=e,e=e.dispatch=Us.bind(null,Z,e),[t.memoizedState,e]}function pr(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=Z.updateQueue,t===null?(t={lastEffect:null,stores:null},Z.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function Mu(e){return Ve().memoizedState}function ao(e,t,n,r){var o=lt();Z.flags|=e,o.memoizedState=pr(1|t,n,void 0,r===void 0?null:r)}function so(e,t,n,r){var o=Ve();r=r===void 0?null:r;var l=void 0;if(ue!==null){var i=ue.memoizedState;if(l=i.destroy,r!==null&&kl(r,i.deps)){o.memoizedState=pr(t,n,l,r);return}}Z.flags|=e,o.memoizedState=pr(1|t,n,l,r)}function Iu(e,t){return ao(8390656,8,e,t)}function _l(e,t){return so(2048,8,e,t)}function Ou(e,t){return so(4,2,e,t)}function ju(e,t){return so(4,4,e,t)}function Du(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function Ru(e,t,n){return n=n!=null?n.concat([e]):null,so(4,4,Du.bind(null,t,e),n)}function zl(e,t){}function Uu(e,t){var n=Ve();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&kl(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function Au(e,t){var n=Ve();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&kl(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function $u(e,t,n){return pn&21?(qe(n,t)||(n=or(),Z.lanes|=n,mn|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,Ie=!0),e.memoizedState=n)}function Ds(e,t,n){n=A,A=n!==0&&4>n?n:4,e(!0);var r=Ii.transition;Ii.transition={};try{e(!1),t()}finally{A=n,Ii.transition=r}}function Vu(){return Ve().memoizedState}function Rs(e,t,n){var r=At(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},Hu(e))Bu(t,n);else if(n=wu(e,t,n,r),n!==null){var o=Ne();Ze(n,e,r,o),Wu(n,t,r)}}function Us(e,t,n){var r=At(e),o={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(Hu(e))Bu(t,o);else{var l=e.alternate;if(e.lanes===0&&(l===null||l.lanes===0)&&(l=t.lastRenderedReducer,l!==null))try{var i=t.lastRenderedState,u=l(i,n);if(o.hasEagerState=!0,o.eagerState=u,qe(u,i)){var s=t.interleaved;s===null?(o.next=o,gl(t)):(o.next=s.next,s.next=o),t.interleaved=o;return}}catch{}finally{}n=wu(e,t,o,r),n!==null&&(o=Ne(),Ze(n,e,r,o),Wu(n,t,r))}}function Hu(e){var t=e.alternate;return e===Z||t!==null&&t===Z}function Bu(e,t){Dr=Ho=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function Wu(e,t,n){if(n&4194240){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,vt(e,n)}}function Ge(e,t){if(e&&e.defaultProps){t=G({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}function Pl(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:G({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}function Qu(e,t,n,r,o,l,i){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,l,i):t.prototype&&t.prototype.isPureReactComponent?!ur(n,r)||!ur(o,l):!0}function Yu(e,t,n){var r=!1,o=Gt,l=t.contextType;return typeof l=="object"&&l!==null?l=$e(l):(o=Le(t)?cn:ie.current,r=t.contextTypes,l=(r=r!=null)?_n(e,o):Gt),t=new t(n,l),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=Wo,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=o,e.__reactInternalMemoizedMaskedChildContext=l),t}function Xu(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&Wo.enqueueReplaceState(t,t.state,null)}function Tl(e,t,n,r){var o=e.stateNode;o.props=n,o.state=e.memoizedState,o.refs={},vl(e);var l=t.contextType;typeof l=="object"&&l!==null?o.context=$e(l):(l=Le(t)?cn:ie.current,o.context=_n(e,l)),o.state=e.memoizedState,l=t.getDerivedStateFromProps,typeof l=="function"&&(Pl(e,t,l,n),o.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof o.getSnapshotBeforeUpdate=="function"||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(t=o.state,typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount(),t!==o.state&&Wo.enqueueReplaceState(o,o.state,null),io(e,n,o,r),o.state=e.memoizedState),typeof o.componentDidMount=="function"&&(e.flags|=4194308)}function Ln(e,t){try{var n="",r=t;do n+=Qe(r),r=r.return;while(r);var o=n}catch(l){o=`
Error generating stack: `+l.message+`
`+l.stack}return{value:e,source:t,stack:o,digest:null}}function Ll(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function Fl(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}function Gu(e,t,n){n=kt(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){Go||(Go=!0,Ai=r),Fl(e,t)},n}function Ku(e,t,n){n=kt(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var o=t.value;n.payload=function(){return r(o)},n.callback=function(){Fl(e,t)}}var l=e.stateNode;return l!==null&&typeof l.componentDidCatch=="function"&&(n.callback=function(){Fl(e,t),typeof r!="function"&&(Zt===null?Zt=new Set([this]):Zt.add(this));var i=t.stack;this.componentDidCatch(t.value,{componentStack:i!==null?i:""})}),n}function Zu(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new nd;var o=new Set;r.set(t,o)}else o=r.get(t),o===void 0&&(o=new Set,r.set(t,o));o.has(n)||(o.add(n),e=Ks.bind(null,e,t,n),t.then(e,e))}function Ju(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function bu(e,t,n,r,o){return e.mode&1?(e.flags|=65536,e.lanes=o,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=kt(-1,1),t.tag=2,Rt(n,t,1))),n.lanes|=1),e)}function Ce(e,t,n,r){t.child=e===null?cs(t,null,n,r):Yn(t,e.child,n,r)}function qu(e,t,n,r,o){n=n.render;var l=t.ref;return Pn(t,o),r=Sl(e,t,n,r,l,o),n=El(),e!==null&&!Ie?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~o,St(e,t,o)):(X&&n&&al(t),t.flags|=1,Ce(e,t,r,o),t.child)}function ea(e,t,n,r,o){if(e===null){var l=n.type;return typeof l=="function"&&!Ql(l)&&l.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=l,ta(e,t,l,r,o)):(e=ho(n.type,null,r,t,t.mode,o),e.ref=t.ref,e.return=t,t.child=e)}if(l=e.child,!(e.lanes&o)){var i=l.memoizedProps;if(n=n.compare,n=n!==null?n:ur,n(i,r)&&e.ref===t.ref)return St(e,t,o)}return t.flags|=1,e=Vt(l,r),e.ref=t.ref,e.return=t,t.child=e}function ta(e,t,n,r,o){if(e!==null){var l=e.memoizedProps;if(ur(l,r)&&e.ref===t.ref)if(Ie=!1,t.pendingProps=r=l,(e.lanes&o)!==0)e.flags&131072&&(Ie=!0);else return t.lanes=e.lanes,St(e,t,o)}return Ml(e,t,n,r,o)}function na(e,t,n){var r=t.pendingProps,o=r.children,l=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},Q(ct,ze),ze|=n;else{if(!(n&1073741824))return e=l!==null?l.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,Q(ct,ze),ze|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=l!==null?l.baseLanes:n,Q(ct,ze),ze|=r}else l!==null?(r=l.baseLanes|n,t.memoizedState=null):r=n,Q(ct,ze),ze|=r;return Ce(e,t,o,n),t.child}function ra(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function Ml(e,t,n,r,o){var l=Le(n)?cn:ie.current;return l=_n(t,l),Pn(t,o),n=Sl(e,t,n,r,l,o),r=El(),e!==null&&!Ie?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~o,St(e,t,o)):(X&&r&&al(t),t.flags|=1,Ce(e,t,n,o),t.child)}function oa(e,t,n,r,o){if(Le(n)){var l=!0;no(t)}else l=!1;if(Pn(t,o),t.stateNode===null)fo(e,t),Yu(t,n,r),Tl(t,n,r,o),r=!0;else if(e===null){var i=t.stateNode,u=t.memoizedProps;i.props=u;var s=i.context,p=n.contextType;typeof p=="object"&&p!==null?p=$e(p):(p=Le(n)?cn:ie.current,p=_n(t,p));var v=n.getDerivedStateFromProps,y=typeof v=="function"||typeof i.getSnapshotBeforeUpdate=="function";y||typeof i.UNSAFE_componentWillReceiveProps!="function"&&typeof i.componentWillReceiveProps!="function"||(u!==r||s!==p)&&Xu(t,i,r,p),Kt=!1;var g=t.memoizedState;i.state=g,io(t,r,i,o),s=t.memoizedState,u!==r||g!==s||ve.current||Kt?(typeof v=="function"&&(Pl(t,n,v,r),s=t.memoizedState),(u=Kt||Qu(t,n,u,r,g,s,p))?(y||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount()),typeof i.componentDidMount=="function"&&(t.flags|=4194308)):(typeof i.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=s),i.props=r,i.state=s,i.context=p,r=u):(typeof i.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{i=t.stateNode,xu(e,t),u=t.memoizedProps,p=t.type===t.elementType?u:Ge(t.type,u),i.props=p,y=t.pendingProps,g=i.context,s=n.contextType,typeof s=="object"&&s!==null?s=$e(s):(s=Le(n)?cn:ie.current,s=_n(t,s));var E=n.getDerivedStateFromProps;(v=typeof E=="function"||typeof i.getSnapshotBeforeUpdate=="function")||typeof i.UNSAFE_componentWillReceiveProps!="function"&&typeof i.componentWillReceiveProps!="function"||(u!==y||g!==s)&&Xu(t,i,r,s),Kt=!1,g=t.memoizedState,i.state=g,io(t,r,i,o);var N=t.memoizedState;u!==y||g!==N||ve.current||Kt?(typeof E=="function"&&(Pl(t,n,E,r),N=t.memoizedState),(p=Kt||Qu(t,n,p,r,g,N,s)||!1)?(v||typeof i.UNSAFE_componentWillUpdate!="function"&&typeof i.componentWillUpdate!="function"||(typeof i.componentWillUpdate=="function"&&i.componentWillUpdate(r,N,s),typeof i.UNSAFE_componentWillUpdate=="function"&&i.UNSAFE_componentWillUpdate(r,N,s)),typeof i.componentDidUpdate=="function"&&(t.flags|=4),typeof i.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof i.componentDidUpdate!="function"||u===e.memoizedProps&&g===e.memoizedState||(t.flags|=4),typeof i.getSnapshotBeforeUpdate!="function"||u===e.memoizedProps&&g===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=N),i.props=r,i.state=N,i.context=s,r=p):(typeof i.componentDidUpdate!="function"||u===e.memoizedProps&&g===e.memoizedState||(t.flags|=4),typeof i.getSnapshotBeforeUpdate!="function"||u===e.memoizedProps&&g===e.memoizedState||(t.flags|=1024),r=!1)}return Il(e,t,n,r,l,o)}function Il(e,t,n,r,o,l){ra(e,t);var i=(t.flags&128)!==0;if(!r&&!i)return o&&du(t,n,!1),St(e,t,l);r=t.stateNode,rd.current=t;var u=i&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&i?(t.child=Yn(t,e.child,null,l),t.child=Yn(t,null,u,l)):Ce(e,t,u,l),t.memoizedState=r.state,o&&du(t,n,!0),t.child}function la(e){var t=e.stateNode;t.pendingContext?su(e,t.pendingContext,t.pendingContext!==t.context):t.context&&su(e,t.context,!1),yl(e,t.containerInfo)}function ia(e,t,n,r,o){return zn(),fl(o),t.flags|=256,Ce(e,t,n,r),t.child}function Ol(e){return{baseLanes:e,cachePool:null,transitions:null}}function ua(e,t,n){var r=t.pendingProps,o=K.current,l=!1,i=(t.flags&128)!==0,u;if((u=i)||(u=e!==null&&e.memoizedState===null?!1:(o&2)!==0),u?(l=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(o|=1),Q(K,o&1),e===null)return dl(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(i=r.children,e=r.fallback,l?(r=t.mode,l=t.child,i={mode:"hidden",children:i},!(r&1)&&l!==null?(l.childLanes=0,l.pendingProps=i):l=go(i,r,0,null),e=sn(e,r,n,null),l.return=t,e.return=t,l.sibling=e,t.child=l,t.child.memoizedState=Ol(n),t.memoizedState=Oi,e):jl(t,i));if(o=e.memoizedState,o!==null&&(u=o.dehydrated,u!==null))return As(e,t,i,r,u,o,n);if(l){l=r.fallback,i=t.mode,o=e.child,u=o.sibling;var s={mode:"hidden",children:r.children};return!(i&1)&&t.child!==o?(r=t.child,r.childLanes=0,r.pendingProps=s,t.deletions=null):(r=Vt(o,s),r.subtreeFlags=o.subtreeFlags&14680064),u!==null?l=Vt(u,l):(l=sn(l,i,n,null),l.flags|=2),l.return=t,r.return=t,r.sibling=l,t.child=r,r=l,l=t.child,i=e.child.memoizedState,i=i===null?Ol(n):{baseLanes:i.baseLanes|n,cachePool:null,transitions:i.transitions},l.memoizedState=i,l.childLanes=e.childLanes&~n,t.memoizedState=Oi,r}return l=e.child,e=l.sibling,r=Vt(l,{mode:"visible",children:r.children}),!(t.mode&1)&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function jl(e,t,n){return t=go({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function co(e,t,n,r){return r!==null&&fl(r),Yn(t,e.child,null,n),e=jl(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function As(e,t,n,r,o,l,i){if(n)return t.flags&256?(t.flags&=-257,r=Ll(Error(h(422))),co(e,t,i,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(l=r.fallback,o=t.mode,r=go({mode:"visible",children:r.children},o,0,null),l=sn(l,o,i,null),l.flags|=2,r.return=t,l.return=t,r.sibling=l,t.child=r,t.mode&1&&Yn(t,e.child,null,i),t.child.memoizedState=Ol(i),t.memoizedState=Oi,l);if(!(t.mode&1))return co(e,t,i,null);if(o.data==="$!"){if(r=o.nextSibling&&o.nextSibling.dataset,r)var u=r.dgst;return r=u,l=Error(h(419)),r=Ll(l,r,void 0),co(e,t,i,r)}if(u=(i&e.childLanes)!==0,Ie||u){if(r=fe,r!==null){switch(i&-i){case 4:o=2;break;case 16:o=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:o=32;break;case 536870912:o=268435456;break;default:o=0}o=o&(r.suspendedLanes|i)?0:o,o!==0&&o!==l.retryLane&&(l.retryLane=o,xt(e,o),Ze(r,e,o,-1))}return Wl(),r=Ll(Error(h(421))),co(e,t,i,r)}return o.data==="$?"?(t.flags|=128,t.child=e.child,t=Zs.bind(null,e),o._reactRetry=t,null):(e=l.treeContext,Me=wt(o.nextSibling),Ue=t,X=!0,et=null,e!==null&&(He[Be++]=zt,He[Be++]=Pt,He[Be++]=dn,zt=e.id,Pt=e.overflow,dn=t),t=jl(t,r.children),t.flags|=4096,t)}function aa(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),hl(e.return,t,n)}function Dl(e,t,n,r,o){var l=e.memoizedState;l===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:o}:(l.isBackwards=t,l.rendering=null,l.renderingStartTime=0,l.last=r,l.tail=n,l.tailMode=o)}function sa(e,t,n){var r=t.pendingProps,o=r.revealOrder,l=r.tail;if(Ce(e,t,r.children,n),r=K.current,r&2)r=r&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&aa(e,n,t);else if(e.tag===19)aa(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(Q(K,r),!(t.mode&1))t.memoizedState=null;else switch(o){case"forwards":for(n=t.child,o=null;n!==null;)e=n.alternate,e!==null&&uo(e)===null&&(o=n),n=n.sibling;n=o,n===null?(o=t.child,t.child=null):(o=n.sibling,n.sibling=null),Dl(t,!1,o,n,l);break;case"backwards":for(n=null,o=t.child,t.child=null;o!==null;){if(e=o.alternate,e!==null&&uo(e)===null){t.child=o;break}e=o.sibling,o.sibling=n,n=o,o=e}Dl(t,!0,n,null,l);break;case"together":Dl(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function fo(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function St(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),mn|=t.lanes,!(n&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(h(153));if(t.child!==null){for(e=t.child,n=Vt(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=Vt(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function $s(e,t,n){switch(t.tag){case 3:la(t),zn();break;case 5:Eu(t);break;case 1:Le(t.type)&&no(t);break;case 4:yl(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,o=t.memoizedProps.value;Q(Ao,r._currentValue),r._currentValue=o;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(Q(K,K.current&1),t.flags|=128,null):n&t.child.childLanes?ua(e,t,n):(Q(K,K.current&1),e=St(e,t,n),e!==null?e.sibling:null);Q(K,K.current&1);break;case 19:if(r=(n&t.childLanes)!==0,e.flags&128){if(r)return sa(e,t,n);t.flags|=128}if(o=t.memoizedState,o!==null&&(o.rendering=null,o.tail=null,o.lastEffect=null),Q(K,K.current),r)break;return null;case 22:case 23:return t.lanes=0,na(e,t,n)}return St(e,t,n)}function mr(e,t){if(!X)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function ke(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var o=e.child;o!==null;)n|=o.lanes|o.childLanes,r|=o.subtreeFlags&14680064,r|=o.flags&14680064,o.return=e,o=o.sibling;else for(o=e.child;o!==null;)n|=o.lanes|o.childLanes,r|=o.subtreeFlags,r|=o.flags,o.return=e,o=o.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function Vs(e,t,n){var r=t.pendingProps;switch(sl(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return ke(t),null;case 1:return Le(t.type)&&(U(ve),U(ie)),ke(t),null;case 3:return r=t.stateNode,Tn(),U(ve),U(ie),xl(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(ro(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,et!==null&&(Hl(et),et=null))),ds(e,t),ke(t),null;case 5:wl(t);var o=on(jr.current);if(n=t.type,e!==null&&t.stateNode!=null)ld(e,t,n,r,o),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(h(166));return ke(t),null}if(e=on(st.current),ro(t)){r=t.stateNode,n=t.type;var l=t.memoizedProps;switch(r[at]=t,r[Mr]=l,e=(t.mode&1)!==0,n){case"dialog":Y("cancel",r),Y("close",r);break;case"iframe":case"object":case"embed":Y("load",r);break;case"video":case"audio":for(o=0;o<Fr.length;o++)Y(Fr[o],r);break;case"source":Y("error",r);break;case"img":case"image":case"link":Y("error",r),Y("load",r);break;case"details":Y("toggle",r);break;case"input":J(r,l),Y("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!l.multiple},Y("invalid",r);break;case"textarea":Hr(r,l),Y("invalid",r)}gn(n,l),o=null;for(var i in l)if(l.hasOwnProperty(i)){var u=l[i];i==="children"?typeof u=="string"?r.textContent!==u&&(l.suppressHydrationWarning!==!0&&qr(r.textContent,u,e),o=["children",u]):typeof u=="number"&&r.textContent!==""+u&&(l.suppressHydrationWarning!==!0&&qr(r.textContent,u,e),o=["children",""+u]):vr.hasOwnProperty(i)&&u!=null&&i==="onScroll"&&Y("scroll",r)}switch(n){case"input":Ye(r),Vr(r,l,!0);break;case"textarea":Ye(r),Wr(r);break;case"select":case"option":break;default:typeof l.onClick=="function"&&(r.onclick=eo)}r=o,t.updateQueue=r,r!==null&&(t.flags|=4)}else{i=o.nodeType===9?o:o.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=Qr(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=i.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=i.createElement(n,{is:r.is}):(e=i.createElement(n),n==="select"&&(i=e,r.multiple?i.multiple=!0:r.size&&(i.size=r.size))):e=i.createElementNS(e,n),e[at]=t,e[Mr]=r,od(e,t,!1,!1),t.stateNode=e;e:{switch(i=vn(n,r),n){case"dialog":Y("cancel",e),Y("close",e),o=r;break;case"iframe":case"object":case"embed":Y("load",e),o=r;break;case"video":case"audio":for(o=0;o<Fr.length;o++)Y(Fr[o],e);o=r;break;case"source":Y("error",e),o=r;break;case"img":case"image":case"link":Y("error",e),Y("load",e),o=r;break;case"details":Y("toggle",e),o=r;break;case"input":J(e,r),o=W(e,r),Y("invalid",e);break;case"option":o=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},o=G({},r,{value:void 0}),Y("invalid",e);break;case"textarea":Hr(e,r),o=Zn(e,r),Y("invalid",e);break;default:o=r}gn(n,o),u=o;for(l in u)if(u.hasOwnProperty(l)){var s=u[l];l==="style"?qn(e,s):l==="dangerouslySetInnerHTML"?(s=s?s.__html:void 0,s!=null&&$a(e,s)):l==="children"?typeof s=="string"?(n!=="textarea"||s!=="")&&wr(e,s):typeof s=="number"&&wr(e,""+s):l!=="suppressContentEditableWarning"&&l!=="suppressHydrationWarning"&&l!=="autoFocus"&&(vr.hasOwnProperty(l)?s!=null&&l==="onScroll"&&Y("scroll",e):s!=null&&dt(e,l,s,i))}switch(n){case"input":Ye(e),Vr(e,r,!1);break;case"textarea":Ye(e),Wr(e);break;case"option":r.value!=null&&e.setAttribute("value",""+Ee(r.value));break;case"select":e.multiple=!!r.multiple,l=r.value,l!=null?Mt(e,!!r.multiple,l,!1):r.defaultValue!=null&&Mt(e,!!r.multiple,r.defaultValue,!0);break;default:typeof o.onClick=="function"&&(e.onclick=eo)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return ke(t),null;case 6:if(e&&t.stateNode!=null)id(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(h(166));if(n=on(jr.current),on(st.current),ro(t)){if(r=t.stateNode,n=t.memoizedProps,r[at]=t,(l=r.nodeValue!==n)&&(e=Ue,e!==null))switch(e.tag){case 3:qr(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&qr(r.nodeValue,n,(e.mode&1)!==0)}l&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[at]=t,t.stateNode=r}return ke(t),null;case 13:if(U(K),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(X&&Me!==null&&t.mode&1&&!(t.flags&128)){for(l=Me;l;)l=wt(l.nextSibling);zn(),t.flags|=98560,l=!1}else if(l=ro(t),r!==null&&r.dehydrated!==null){if(e===null){if(!l)throw Error(h(318));if(l=t.memoizedState,l=l!==null?l.dehydrated:null,!l)throw Error(h(317));l[at]=t}else zn(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;ke(t),l=!1}else et!==null&&(Hl(et),et=null),l=!0;if(!l)return t.flags&65536?t:null}return t.flags&128?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,t.mode&1&&(e===null||K.current&1?ae===0&&(ae=3):Wl())),t.updateQueue!==null&&(t.flags|=4),ke(t),null);case 4:return Tn(),ds(e,t),e===null&&ar(t.stateNode.containerInfo),ke(t),null;case 10:return ml(t.type._context),ke(t),null;case 17:return Le(t.type)&&(U(ve),U(ie)),ke(t),null;case 19:if(U(K),l=t.memoizedState,l===null)return ke(t),null;if(r=(t.flags&128)!==0,i=l.rendering,i===null)if(r)mr(l,!1);else{if(ae!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(i=uo(e),i!==null){for(t.flags|=128,mr(l,!1),r=i.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)l=n,e=r,l.flags&=14680066,i=l.alternate,i===null?(l.childLanes=0,l.lanes=e,l.child=null,l.subtreeFlags=0,l.memoizedProps=null,l.memoizedState=null,l.updateQueue=null,l.dependencies=null,l.stateNode=null):(l.childLanes=i.childLanes,l.lanes=i.lanes,l.child=i.child,l.subtreeFlags=0,l.deletions=null,l.memoizedProps=i.memoizedProps,l.memoizedState=i.memoizedState,l.updateQueue=i.updateQueue,l.type=i.type,e=i.dependencies,l.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return Q(K,K.current&1|2),t.child}e=e.sibling}l.tail!==null&&ce()>Ui&&(t.flags|=128,r=!0,mr(l,!1),t.lanes=4194304)}else{if(!r)if(e=uo(i),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),mr(l,!0),l.tail===null&&l.tailMode==="hidden"&&!i.alternate&&!X)return ke(t),null}else 2*ce()-l.renderingStartTime>Ui&&n!==1073741824&&(t.flags|=128,r=!0,mr(l,!1),t.lanes=4194304);l.isBackwards?(i.sibling=t.child,t.child=i):(n=l.last,n!==null?n.sibling=i:t.child=i,l.last=i)}return l.tail!==null?(t=l.tail,l.rendering=t,l.tail=t.sibling,l.renderingStartTime=ce(),t.sibling=null,n=K.current,Q(K,r?n&1|2:n&1),t):(ke(t),null);case 22:case 23:return ze=ct.current,U(ct),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&t.mode&1?ze&1073741824&&(ke(t),t.subtreeFlags&6&&(t.flags|=8192)):ke(t),null;case 24:return null;case 25:return null}throw Error(h(156,t.tag))}function Hs(e,t,n){switch(sl(t),t.tag){case 1:return Le(t.type)&&(U(ve),U(ie)),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return Tn(),U(ve),U(ie),xl(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return wl(t),null;case 13:if(U(K),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(h(340));zn()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return U(K),null;case 4:return Tn(),null;case 10:return ml(t.type._context),null;case 22:case 23:return ze=ct.current,U(ct),null;case 24:return null;default:return null}}function Fn(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){q(e,t,r)}else n.current=null}function Rl(e,t,n){try{n()}catch(r){q(e,t,r)}}function Bs(e,t){if(Ni=Fo,e=tu(),rl(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var o=r.anchorOffset,l=r.focusNode;r=r.focusOffset;try{n.nodeType,l.nodeType}catch{n=null;break e}var i=0,u=-1,s=-1,p=0,v=0,y=e,g=null;t:for(;;){for(var E;y!==n||o!==0&&y.nodeType!==3||(u=i+o),y!==l||r!==0&&y.nodeType!==3||(s=i+r),y.nodeType===3&&(i+=y.nodeValue.length),(E=y.firstChild)!==null;)g=y,y=E;for(;;){if(y===e)break t;if(g===n&&++p===o&&(u=i),g===l&&++v===r&&(s=i),(E=y.nextSibling)!==null)break;y=g,g=y.parentNode}y=E}n=u===-1||s===-1?null:{start:u,end:s}}else n=null}n=n||{start:0,end:0}}else n=null;for(_i={focusedElem:e,selectionRange:n},Fo=!1,C=t;C!==null;)if(t=C,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,C=e;else for(;C!==null;){t=C;try{var N=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(N!==null){var _=N.memoizedProps,ee=N.memoizedState,d=t.stateNode,c=d.getSnapshotBeforeUpdate(t.elementType===t.type?_:Ge(t.type,_),ee);d.__reactInternalSnapshotBeforeUpdate=c}break;case 3:var f=t.stateNode.containerInfo;f.nodeType===1?f.textContent="":f.nodeType===9&&f.documentElement&&f.removeChild(f.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(h(163))}}catch(x){q(t,t.return,x)}if(e=t.sibling,e!==null){e.return=t.return,C=e;break}C=t.return}return N=fs,fs=!1,N}function hr(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var o=r=r.next;do{if((o.tag&e)===e){var l=o.destroy;o.destroy=void 0,l!==void 0&&Rl(t,n,l)}o=o.next}while(o!==r)}}function po(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function Ul(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function ca(e){var t=e.alternate;t!==null&&(e.alternate=null,ca(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[at],delete t[Mr],delete t[Pi],delete t[Gc],delete t[Kc])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function da(e){return e.tag===5||e.tag===3||e.tag===4}function fa(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||da(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Al(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=eo));else if(r!==4&&(e=e.child,e!==null))for(Al(e,t,n),e=e.sibling;e!==null;)Al(e,t,n),e=e.sibling}function $l(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for($l(e,t,n),e=e.sibling;e!==null;)$l(e,t,n),e=e.sibling}function Ut(e,t,n){for(n=n.child;n!==null;)pa(e,t,n),n=n.sibling}function pa(e,t,n){if(ut&&typeof ut.onCommitFiberUnmount=="function")try{ut.onCommitFiberUnmount(zo,n)}catch{}switch(n.tag){case 5:Se||Fn(n,t);case 6:var r=ye,o=tt;ye=null,Ut(e,t,n),ye=r,tt=o,ye!==null&&(tt?(e=ye,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):ye.removeChild(n.stateNode));break;case 18:ye!==null&&(tt?(e=ye,n=n.stateNode,e.nodeType===8?ul(e.parentNode,n):e.nodeType===1&&ul(e,n),F(e)):ul(ye,n.stateNode));break;case 4:r=ye,o=tt,ye=n.stateNode.containerInfo,tt=!0,Ut(e,t,n),ye=r,tt=o;break;case 0:case 11:case 14:case 15:if(!Se&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){o=r=r.next;do{var l=o,i=l.destroy;l=l.tag,i!==void 0&&(l&2||l&4)&&Rl(n,t,i),o=o.next}while(o!==r)}Ut(e,t,n);break;case 1:if(!Se&&(Fn(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(u){q(n,t,u)}Ut(e,t,n);break;case 21:Ut(e,t,n);break;case 22:n.mode&1?(Se=(r=Se)||n.memoizedState!==null,Ut(e,t,n),Se=r):Ut(e,t,n);break;default:Ut(e,t,n)}}function ma(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new ud),t.forEach(function(r){var o=Js.bind(null,e,r);n.has(r)||(n.add(r),r.then(o,o))})}}function Ke(e,t,n){if(n=t.deletions,n!==null)for(var r=0;r<n.length;r++){var o=n[r];try{var l=e,i=t,u=i;e:for(;u!==null;){switch(u.tag){case 5:ye=u.stateNode,tt=!1;break e;case 3:ye=u.stateNode.containerInfo,tt=!0;break e;case 4:ye=u.stateNode.containerInfo,tt=!0;break e}u=u.return}if(ye===null)throw Error(h(160));pa(l,i,o),ye=null,tt=!1;var s=o.alternate;s!==null&&(s.return=null),o.return=null}catch(p){q(o,t,p)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)ha(t,e),t=t.sibling}function ha(e,t,n){var r=e.alternate;switch(n=e.flags,e.tag){case 0:case 11:case 14:case 15:if(Ke(t,e),it(e),n&4){try{hr(3,e,e.return),po(3,e)}catch(_){q(e,e.return,_)}try{hr(5,e,e.return)}catch(_){q(e,e.return,_)}}break;case 1:Ke(t,e),it(e),n&512&&r!==null&&Fn(r,r.return);break;case 5:if(Ke(t,e),it(e),n&512&&r!==null&&Fn(r,r.return),e.flags&32){var o=e.stateNode;try{wr(o,"")}catch(_){q(e,e.return,_)}}if(n&4&&(o=e.stateNode,o!=null)){var l=e.memoizedProps,i=r!==null?r.memoizedProps:l,u=e.type,s=e.updateQueue;if(e.updateQueue=null,s!==null)try{u==="input"&&l.type==="radio"&&l.name!=null&&ne(o,l),vn(u,i);var p=vn(u,l);for(i=0;i<s.length;i+=2){var v=s[i],y=s[i+1];v==="style"?qn(o,y):v==="dangerouslySetInnerHTML"?$a(o,y):v==="children"?wr(o,y):dt(o,v,y,p)}switch(u){case"input":en(o,l);break;case"textarea":Br(o,l);break;case"select":var g=o._wrapperState.wasMultiple;o._wrapperState.wasMultiple=!!l.multiple;var E=l.value;E!=null?Mt(o,!!l.multiple,E,!1):g!==!!l.multiple&&(l.defaultValue!=null?Mt(o,!!l.multiple,l.defaultValue,!0):Mt(o,!!l.multiple,l.multiple?[]:"",!1))}o[Mr]=l}catch(_){q(e,e.return,_)}}break;case 6:if(Ke(t,e),it(e),n&4){if(e.stateNode===null)throw Error(h(162));o=e.stateNode,l=e.memoizedProps;try{o.nodeValue=l}catch(_){q(e,e.return,_)}}break;case 3:if(Ke(t,e),it(e),n&4&&r!==null&&r.memoizedState.isDehydrated)try{F(t.containerInfo)}catch(_){q(e,e.return,_)}break;case 4:Ke(t,e),it(e);break;case 13:Ke(t,e),it(e),o=e.child,o.flags&8192&&(l=o.memoizedState!==null,o.stateNode.isHidden=l,!l||o.alternate!==null&&o.alternate.memoizedState!==null||(Ri=ce())),n&4&&ma(e);break;case 22:if(v=r!==null&&r.memoizedState!==null,e.mode&1?(Se=(p=Se)||v,Ke(t,e),Se=p):Ke(t,e),it(e),n&8192){if(p=e.memoizedState!==null,(e.stateNode.isHidden=p)&&!v&&e.mode&1)for(C=e,v=e.child;v!==null;){for(y=C=v;C!==null;){switch(g=C,E=g.child,g.tag){case 0:case 11:case 14:case 15:hr(4,g,g.return);break;case 1:Fn(g,g.return);var N=g.stateNode;if(typeof N.componentWillUnmount=="function"){n=g,t=g.return;try{r=n,N.props=r.memoizedProps,N.state=r.memoizedState,N.componentWillUnmount()}catch(_){q(n,t,_)}}break;case 5:Fn(g,g.return);break;case 22:if(g.memoizedState!==null){ya(y);continue}}E!==null?(E.return=g,C=E):ya(y)}v=v.sibling}e:for(v=null,y=e;;){if(y.tag===5){if(v===null){v=y;try{o=y.stateNode,p?(l=o.style,typeof l.setProperty=="function"?l.setProperty("display","none","important"):l.display="none"):(u=y.stateNode,s=y.memoizedProps.style,i=s!=null&&s.hasOwnProperty("display")?s.display:null,u.style.display=bn("display",i))}catch(_){q(e,e.return,_)}}}else if(y.tag===6){if(v===null)try{y.stateNode.nodeValue=p?"":y.memoizedProps}catch(_){q(e,e.return,_)}}else if((y.tag!==22&&y.tag!==23||y.memoizedState===null||y===e)&&y.child!==null){y.child.return=y,y=y.child;continue}if(y===e)break e;for(;y.sibling===null;){if(y.return===null||y.return===e)break e;v===y&&(v=null),y=y.return}v===y&&(v=null),y.sibling.return=y.return,y=y.sibling}}break;case 19:Ke(t,e),it(e),n&4&&ma(e);break;case 21:break;default:Ke(t,e),it(e)}}function it(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(da(n)){var r=n;break e}n=n.return}throw Error(h(160))}switch(r.tag){case 5:var o=r.stateNode;r.flags&32&&(wr(o,""),r.flags&=-33);var l=fa(e);$l(e,l,o);break;case 3:case 4:var i=r.stateNode.containerInfo,u=fa(e);Al(e,u,i);break;default:throw Error(h(161))}}catch(s){q(e,e.return,s)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function Ws(e,t,n){C=e,ga(e,t,n)}function ga(e,t,n){for(var r=(e.mode&1)!==0;C!==null;){var o=C,l=o.child;if(o.tag===22&&r){var i=o.memoizedState!==null||Qo;if(!i){var u=o.alternate,s=u!==null&&u.memoizedState!==null||Se;u=Qo;var p=Se;if(Qo=i,(Se=s)&&!p)for(C=o;C!==null;)i=C,s=i.child,i.tag===22&&i.memoizedState!==null?wa(o):s!==null?(s.return=i,C=s):wa(o);for(;l!==null;)C=l,ga(l,t,n),l=l.sibling;C=o,Qo=u,Se=p}va(e,t,n)}else o.subtreeFlags&8772&&l!==null?(l.return=o,C=l):va(e,t,n)}}function va(e,t,n){for(;C!==null;){if(t=C,t.flags&8772){n=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:Se||po(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!Se)if(n===null)r.componentDidMount();else{var o=t.elementType===t.type?n.memoizedProps:Ge(t.type,n.memoizedProps);r.componentDidUpdate(o,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var l=t.updateQueue;l!==null&&Su(t,l,r);break;case 3:var i=t.updateQueue;if(i!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}Su(t,i,n)}break;case 5:var u=t.stateNode;if(n===null&&t.flags&4){n=u;var s=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":s.autoFocus&&n.focus();break;case"img":s.src&&(n.src=s.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var p=t.alternate;if(p!==null){var v=p.memoizedState;if(v!==null){var y=v.dehydrated;y!==null&&F(y)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(h(163))}Se||t.flags&512&&Ul(t)}catch(g){q(t,t.return,g)}}if(t===e){C=null;break}if(n=t.sibling,n!==null){n.return=t.return,C=n;break}C=t.return}}function ya(e){for(;C!==null;){var t=C;if(t===e){C=null;break}var n=t.sibling;if(n!==null){n.return=t.return,C=n;break}C=t.return}}function wa(e){for(;C!==null;){var t=C;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{po(4,t)}catch(s){q(t,n,s)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var o=t.return;try{r.componentDidMount()}catch(s){q(t,o,s)}}var l=t.return;try{Ul(t)}catch(s){q(t,l,s)}break;case 5:var i=t.return;try{Ul(t)}catch(s){q(t,i,s)}}}catch(s){q(t,t.return,s)}if(t===e){C=null;break}var u=t.sibling;if(u!==null){u.return=t.return,C=u;break}C=t.return}}function gr(){Ui=ce()+500}function Ne(){return j&6?ce():Jo!==-1?Jo:Jo=ce()}function At(e){return e.mode&1?j&2&&we!==0?we&-we:Zc.transition!==null?(bo===0&&(bo=or()),bo):(e=A,e!==0||(e=window.event,e=e===void 0?16:le(e.type)),e):1}function Ze(e,t,n,r){if(50<$r)throw $r=0,$i=null,Error(h(185));ot(e,n,r),(!(j&2)||e!==fe)&&(e===fe&&(!(j&2)&&(Xo|=n),ae===4&&$t(e,we)),Fe(e,r),n===1&&j===0&&!(t.mode&1)&&(gr(),Do&&Dt()))}function Fe(e,t){var n=e.callbackNode;tn(e,t);var r=ht(e,e===fe?we:0);if(r===0)n!==null&&Ya(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&Ya(n),t===1)e.tag===0?js(ka.bind(null,e)):fu(ka.bind(null,e)),Xc(function(){!(j&6)&&Dt()}),n=null;else{switch(lr(r)){case 1:n=mi;break;case 4:n=Xa;break;case 16:n=_o;break;case 536870912:n=Ga;break;default:n=_o}n=Pa(n,xa.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function xa(e,t){if(Jo=-1,bo=0,j&6)throw Error(h(327));var n=e.callbackNode;if(Mn()&&e.callbackNode!==n)return null;var r=ht(e,e===fe?we:0);if(r===0)return null;if(r&30||r&e.expiredLanes||t)t=mo(e,r);else{t=r;var o=j;j|=2;var l=Ea();(fe!==e||we!==t)&&(Tt=null,gr(),un(e,t));do try{Xs();break}catch(u){Sa(e,u)}while(!0);pl(),Yo.current=l,j=o,re!==null?t=0:(fe=null,we=0,t=ae)}if(t!==0){if(t===2&&(o=xn(e),o!==0&&(r=o,t=Vl(e,o))),t===1)throw n=Ur,un(e,0),$t(e,r),Fe(e,ce()),n;if(t===6)$t(e,r);else{if(o=e.current.alternate,!(r&30)&&!Qs(o)&&(t=mo(e,r),t===2&&(l=xn(e),l!==0&&(r=l,t=Vl(e,l))),t===1))throw n=Ur,un(e,0),$t(e,r),Fe(e,ce()),n;switch(e.finishedWork=o,e.finishedLanes=r,t){case 0:case 1:throw Error(h(345));case 2:an(e,Oe,Tt);break;case 3:if($t(e,r),(r&130023424)===r&&(t=Ri+500-ce(),10<t)){if(ht(e,0)!==0)break;if(o=e.suspendedLanes,(o&r)!==r){Ne(),e.pingedLanes|=e.suspendedLanes&o;break}e.timeoutHandle=zi(an.bind(null,e,Oe,Tt),t);break}an(e,Oe,Tt);break;case 4:if($t(e,r),(r&4194240)===r)break;for(t=e.eventTimes,o=-1;0<r;){var i=31-be(r);l=1<<i,i=t[i],i>o&&(o=i),r&=~l}if(r=o,r=ce()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*ad(r/1960))-r,10<r){e.timeoutHandle=zi(an.bind(null,e,Oe,Tt),r);break}an(e,Oe,Tt);break;case 5:an(e,Oe,Tt);break;default:throw Error(h(329))}}}return Fe(e,ce()),e.callbackNode===n?xa.bind(null,e):null}function Vl(e,t){var n=Ar;return e.current.memoizedState.isDehydrated&&(un(e,t).flags|=256),e=mo(e,t),e!==2&&(t=Oe,Oe=n,t!==null&&Hl(t)),e}function Hl(e){Oe===null?Oe=e:Oe.push.apply(Oe,e)}function Qs(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var o=n[r],l=o.getSnapshot;o=o.value;try{if(!qe(l(),o))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function $t(e,t){for(t&=~Di,t&=~Xo,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-be(t),r=1<<n;e[n]=-1,t&=~r}}function ka(e){if(j&6)throw Error(h(327));Mn();var t=ht(e,0);if(!(t&1))return Fe(e,ce()),null;var n=mo(e,t);if(e.tag!==0&&n===2){var r=xn(e);r!==0&&(t=r,n=Vl(e,r))}if(n===1)throw n=Ur,un(e,0),$t(e,t),Fe(e,ce()),n;if(n===6)throw Error(h(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,an(e,Oe,Tt),Fe(e,ce()),null}function Bl(e,t){var n=j;j|=1;try{return e(t)}finally{j=n,j===0&&(gr(),Do&&Dt())}}function ln(e){Jt!==null&&Jt.tag===0&&!(j&6)&&Mn();var t=j;j|=1;var n=_e.transition,r=A;try{if(_e.transition=null,A=1,e)return e()}finally{A=r,_e.transition=n,j=t,!(j&6)&&Dt()}}function un(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,Yc(n)),re!==null)for(n=re.return;n!==null;){var r=n;switch(sl(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&(U(ve),U(ie));break;case 3:Tn(),U(ve),U(ie),xl();break;case 5:wl(r);break;case 4:Tn();break;case 13:U(K);break;case 19:U(K);break;case 10:ml(r.type._context);break;case 22:case 23:ze=ct.current,U(ct)}n=n.return}if(fe=e,re=e=Vt(e.current,null),we=ze=t,ae=0,Ur=null,Di=Xo=mn=0,Oe=Ar=null,fn!==null){for(t=0;t<fn.length;t++)if(n=fn[t],r=n.interleaved,r!==null){n.interleaved=null;var o=r.next,l=n.pending;if(l!==null){var i=l.next;l.next=o,r.next=i}n.pending=r}fn=null}return e}function Sa(e,t){do{var n=re;try{if(pl(),Vo.current=Bo,Ho){for(var r=Z.memoizedState;r!==null;){var o=r.queue;o!==null&&(o.pending=null),r=r.next}Ho=!1}if(pn=0,de=ue=Z=null,Dr=!1,Rr=0,ji.current=null,n===null||n.return===null){ae=1,Ur=t,re=null;break}e:{var l=e,i=n.return,u=n,s=t;if(t=we,u.flags|=32768,s!==null&&typeof s=="object"&&typeof s.then=="function"){var p=s,v=u,y=v.tag;if(!(v.mode&1)&&(y===0||y===11||y===15)){var g=v.alternate;g?(v.updateQueue=g.updateQueue,v.memoizedState=g.memoizedState,v.lanes=g.lanes):(v.updateQueue=null,v.memoizedState=null)}var E=Ju(i);if(E!==null){E.flags&=-257,bu(E,i,u,l,t),E.mode&1&&Zu(l,p,t),t=E,s=p;var N=t.updateQueue;if(N===null){var _=new Set;_.add(s),t.updateQueue=_}else N.add(s);break e}else{if(!(t&1)){Zu(l,p,t),Wl();break e}s=Error(h(426))}}else if(X&&u.mode&1){var ee=Ju(i);if(ee!==null){!(ee.flags&65536)&&(ee.flags|=256),bu(ee,i,u,l,t),fl(Ln(s,u));break e}}l=s=Ln(s,u),ae!==4&&(ae=2),Ar===null?Ar=[l]:Ar.push(l),l=i;do{switch(l.tag){case 3:l.flags|=65536,t&=-t,l.lanes|=t;var d=Gu(l,s,t);ku(l,d);break e;case 1:u=s;var c=l.type,f=l.stateNode;if(!(l.flags&128)&&(typeof c.getDerivedStateFromError=="function"||f!==null&&typeof f.componentDidCatch=="function"&&(Zt===null||!Zt.has(f)))){l.flags|=65536,t&=-t,l.lanes|=t;var x=Ku(l,u,t);ku(l,x);break e}}l=l.return}while(l!==null)}Na(n)}catch(z){t=z,re===n&&n!==null&&(re=n=n.return);continue}break}while(!0)}function Ea(){var e=Yo.current;return Yo.current=Bo,e===null?Bo:e}function Wl(){(ae===0||ae===3||ae===2)&&(ae=4),fe===null||!(mn&268435455)&&!(Xo&268435455)||$t(fe,we)}function mo(e,t){var n=j;j|=2;var r=Ea();(fe!==e||we!==t)&&(Tt=null,un(e,t));do try{Ys();break}catch(o){Sa(e,o)}while(!0);if(pl(),j=n,Yo.current=r,re!==null)throw Error(h(261));return fe=null,we=0,ae}function Ys(){for(;re!==null;)Ca(re)}function Xs(){for(;re!==null&&!cc();)Ca(re)}function Ca(e){var t=sd(e.alternate,e,ze);e.memoizedProps=e.pendingProps,t===null?Na(e):re=t,ji.current=null}function Na(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=Hs(n,t),n!==null){n.flags&=32767,re=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{ae=6,re=null;return}}else if(n=Vs(n,t,ze),n!==null){re=n;return}if(t=t.sibling,t!==null){re=t;return}re=t=e}while(t!==null);ae===0&&(ae=5)}function an(e,t,n){var r=A,o=_e.transition;try{_e.transition=null,A=1,Gs(e,t,n,r)}finally{_e.transition=o,A=r}return null}function Gs(e,t,n,r){do Mn();while(Jt!==null);if(j&6)throw Error(h(327));n=e.finishedWork;var o=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(h(177));e.callbackNode=null,e.callbackPriority=0;var l=n.lanes|n.childLanes;if(Sn(e,l),e===fe&&(re=fe=null,we=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||Ko||(Ko=!0,Pa(_o,function(){return Mn(),null})),l=(n.flags&15990)!==0,n.subtreeFlags&15990||l){l=_e.transition,_e.transition=null;var i=A;A=1;var u=j;j|=4,ji.current=null,Bs(e,n),ha(n,e),Is(_i),Fo=!!Ni,_i=Ni=null,e.current=n,Ws(n,e,o),dc(),j=u,A=i,_e.transition=l}else e.current=n;if(Ko&&(Ko=!1,Jt=e,Zo=o),l=e.pendingLanes,l===0&&(Zt=null),tl(n.stateNode,r),Fe(e,ce()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)o=t[n],r(o.value,{componentStack:o.stack,digest:o.digest});if(Go)throw Go=!1,e=Ai,Ai=null,e;return Zo&1&&e.tag!==0&&Mn(),l=e.pendingLanes,l&1?e===$i?$r++:($r=0,$i=e):$r=0,Dt(),null}function Mn(){if(Jt!==null){var e=lr(Zo),t=_e.transition,n=A;try{if(_e.transition=null,A=16>e?16:e,Jt===null)var r=!1;else{if(e=Jt,Jt=null,Zo=0,j&6)throw Error(h(331));var o=j;for(j|=4,C=e.current;C!==null;){var l=C,i=l.child;if(C.flags&16){var u=l.deletions;if(u!==null){for(var s=0;s<u.length;s++){var p=u[s];for(C=p;C!==null;){var v=C;switch(v.tag){case 0:case 11:case 15:hr(8,v,l)}var y=v.child;if(y!==null)y.return=v,C=y;else for(;C!==null;){v=C;var g=v.sibling,E=v.return;if(ca(v),v===p){C=null;break}if(g!==null){g.return=E,C=g;break}C=E}}}var N=l.alternate;if(N!==null){var _=N.child;if(_!==null){N.child=null;do{var ee=_.sibling;_.sibling=null,_=ee}while(_!==null)}}C=l}}if(l.subtreeFlags&2064&&i!==null)i.return=l,C=i;else e:for(;C!==null;){if(l=C,l.flags&2048)switch(l.tag){case 0:case 11:case 15:hr(9,l,l.return)}var d=l.sibling;if(d!==null){d.return=l.return,C=d;break e}C=l.return}}var c=e.current;for(C=c;C!==null;){i=C;var f=i.child;if(i.subtreeFlags&2064&&f!==null)f.return=i,C=f;else e:for(i=c;C!==null;){if(u=C,u.flags&2048)try{switch(u.tag){case 0:case 11:case 15:po(9,u)}}catch(z){q(u,u.return,z)}if(u===i){C=null;break e}var x=u.sibling;if(x!==null){x.return=u.return,C=x;break e}C=u.return}}if(j=o,Dt(),ut&&typeof ut.onPostCommitFiberRoot=="function")try{ut.onPostCommitFiberRoot(zo,e)}catch{}r=!0}return r}finally{A=n,_e.transition=t}}return!1}function _a(e,t,n){t=Ln(n,t),t=Gu(e,t,1),e=Rt(e,t,1),t=Ne(),e!==null&&(ot(e,1,t),Fe(e,t))}function q(e,t,n){if(e.tag===3)_a(e,e,n);else for(;t!==null;){if(t.tag===3){_a(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(Zt===null||!Zt.has(r))){e=Ln(n,e),e=Ku(t,e,1),t=Rt(t,e,1),e=Ne(),t!==null&&(ot(t,1,e),Fe(t,e));break}}t=t.return}}function Ks(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=Ne(),e.pingedLanes|=e.suspendedLanes&n,fe===e&&(we&n)===n&&(ae===4||ae===3&&(we&130023424)===we&&500>ce()-Ri?un(e,0):Di|=n),Fe(e,t)}function za(e,t){t===0&&(e.mode&1?(t=To,To<<=1,!(To&130023424)&&(To=4194304)):t=1);var n=Ne();e=xt(e,t),e!==null&&(ot(e,t,n),Fe(e,n))}function Zs(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),za(e,n)}function Js(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,o=e.memoizedState;o!==null&&(n=o.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(h(314))}r!==null&&r.delete(t),za(e,n)}function Pa(e,t){return Qa(e,t)}function bs(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Ql(e){return e=e.prototype,!(!e||!e.isReactComponent)}function qs(e){if(typeof e=="function")return Ql(e)?1:0;if(e!=null){if(e=e.$$typeof,e===ri)return 11;if(e===ii)return 14}return 2}function Vt(e,t){var n=e.alternate;return n===null?(n=We(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function ho(e,t,n,r,o,l){var i=2;if(r=e,typeof e=="function")Ql(e)&&(i=1);else if(typeof e=="string")i=5;else e:switch(e){case On:return sn(n.children,o,l,t);case ti:i=8,o|=8;break;case ni:return e=We(12,n,t,o|2),e.elementType=ni,e.lanes=l,e;case oi:return e=We(13,n,t,o),e.elementType=oi,e.lanes=l,e;case li:return e=We(19,n,t,o),e.elementType=li,e.lanes=l,e;case Ua:return go(n,o,l,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case Da:i=10;break e;case Ra:i=9;break e;case ri:i=11;break e;case ii:i=14;break e;case Ht:i=16,r=null;break e}throw Error(h(130,e==null?e:typeof e,""))}return t=We(i,n,t,o),t.elementType=e,t.type=r,t.lanes=l,t}function sn(e,t,n,r){return e=We(7,e,r,t),e.lanes=n,e}function go(e,t,n,r){return e=We(22,e,r,t),e.elementType=Ua,e.lanes=n,e.stateNode={isHidden:!1},e}function Yl(e,t,n){return e=We(6,e,null,t),e.lanes=n,e}function Xl(e,t,n){return t=We(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function ec(e,t,n,r,o){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=kn(0),this.expirationTimes=kn(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=kn(0),this.identifierPrefix=r,this.onRecoverableError=o,this.mutableSourceEagerHydrationData=null}function Gl(e,t,n,r,o,l,i,u,s,p){return e=new ec(e,t,n,u,s),t===1?(t=1,l===!0&&(t|=8)):t=0,l=We(3,null,null,t),e.current=l,l.stateNode=e,l.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},vl(l),e}function tc(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:In,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function Ta(e){if(!e)return Gt;e=e._reactInternals;e:{if(mt(e)!==e||e.tag!==1)throw Error(h(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(Le(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(h(171))}if(e.tag===1){var n=e.type;if(Le(n))return cu(e,n,t)}return t}function La(e,t,n,r,o,l,i,u,s,p){return e=Gl(n,r,!0,e,o,l,i,u,s),e.context=Ta(null),n=e.current,r=Ne(),o=At(n),l=kt(r,o),l.callback=t??null,Rt(n,l,o),e.current.lanes=o,ot(e,o,r),Fe(e,r),e}function vo(e,t,n,r){var o=t.current,l=Ne(),i=At(o);return n=Ta(n),t.context===null?t.context=n:t.pendingContext=n,t=kt(l,i),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=Rt(o,t,i),e!==null&&(Ze(e,o,i,l),lo(e,o,i)),i}function yo(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function Fa(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function Kl(e,t){Fa(e,t),(e=e.alternate)&&Fa(e,t)}function nc(e){return e=De(e),e===null?null:e.stateNode}function rc(e){return null}function Zl(e){this._internalRoot=e}function wo(e){this._internalRoot=e}function Jl(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function xo(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function Ma(){}function oc(e,t,n,r,o){if(o){if(typeof r=="function"){var l=r;r=function(){var p=yo(i);l.call(p)}}var i=La(t,r,e,0,null,!1,!1,"",Ma);return e._reactRootContainer=i,e[Nt]=i.current,ar(e.nodeType===8?e.parentNode:e),ln(),i}for(;o=e.lastChild;)e.removeChild(o);if(typeof r=="function"){var u=r;r=function(){var p=yo(s);u.call(p)}}var s=Gl(e,0,!1,null,null,!1,!1,"",Ma);return e._reactRootContainer=s,e[Nt]=s.current,ar(e.nodeType===8?e.parentNode:e),ln(function(){vo(t,s,n,r)}),s}function ko(e,t,n,r,o){var l=n._reactRootContainer;if(l){var i=l;if(typeof o=="function"){var u=o;o=function(){var s=yo(i);u.call(s)}}vo(t,i,e,o)}else i=oc(n,t,e,o,r);return yo(i)}var Ia=new Set,vr={},Et=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),bl=Object.prototype.hasOwnProperty,lc=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Oa={},ja={},ge={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){ge[e]=new te(e,0,!1,e,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];ge[t]=new te(t,1,!1,e[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(e){ge[e]=new te(e,2,!1,e.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){ge[e]=new te(e,2,!1,e,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){ge[e]=new te(e,3,!1,e.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(e){ge[e]=new te(e,3,!0,e,null,!1,!1)}),["capture","download"].forEach(function(e){ge[e]=new te(e,4,!1,e,null,!1,!1)}),["cols","rows","size","span"].forEach(function(e){ge[e]=new te(e,6,!1,e,null,!1,!1)}),["rowSpan","start"].forEach(function(e){ge[e]=new te(e,5,!1,e.toLowerCase(),null,!1,!1)});var ql=/[\-:]([a-z])/g,ei=function(e){return e[1].toUpperCase()};"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(ql,ei);ge[t]=new te(t,1,!1,e,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(ql,ei);ge[t]=new te(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(ql,ei);ge[t]=new te(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(e){ge[e]=new te(e,1,!1,e.toLowerCase(),null,!1,!1)}),ge.xlinkHref=new te("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(e){ge[e]=new te(e,1,!1,e.toLowerCase(),null,!0,!0)});var Ct=D.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,So=Symbol.for("react.element"),In=Symbol.for("react.portal"),On=Symbol.for("react.fragment"),ti=Symbol.for("react.strict_mode"),ni=Symbol.for("react.profiler"),Da=Symbol.for("react.provider"),Ra=Symbol.for("react.context"),ri=Symbol.for("react.forward_ref"),oi=Symbol.for("react.suspense"),li=Symbol.for("react.suspense_list"),ii=Symbol.for("react.memo"),Ht=Symbol.for("react.lazy");Symbol.for("react.scope"),Symbol.for("react.debug_trace_mode");var Ua=Symbol.for("react.offscreen");Symbol.for("react.legacy_hidden"),Symbol.for("react.cache"),Symbol.for("react.tracing_marker");var Aa=Symbol.iterator,G=Object.assign,ui,ai=!1,yr=Array.isArray,Eo,$a=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,o){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,o)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(Eo=Eo||document.createElement("div"),Eo.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=Eo.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}}),wr=function(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t},xr={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},ic=["Webkit","ms","Moz","O"];Object.keys(xr).forEach(function(e){ic.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),xr[t]=xr[e]})});var uc=G({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0}),si=null,ci=null,jn=null,Dn=null,Va=function(e,t){return e(t)},Ha=function(){},di=!1,fi=!1;if(Et)try{var kr={};Object.defineProperty(kr,"passive",{get:function(){fi=!0}}),window.addEventListener("test",kr,kr),window.removeEventListener("test",kr,kr)}catch{fi=!1}var ac=function(e,t,n,r,o,l,i,u,s){var p=Array.prototype.slice.call(arguments,3);try{t.apply(n,p)}catch(v){this.onError(v)}},Sr=!1,Co=null,No=!1,pi=null,sc={onError:function(e){Sr=!0,Co=e}},Je=D.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.Scheduler,Ba=Je.unstable_scheduleCallback,Wa=Je.unstable_NormalPriority,Qa=Ba,Ya=Je.unstable_cancelCallback,cc=Je.unstable_shouldYield,dc=Je.unstable_requestPaint,ce=Je.unstable_now,fc=Je.unstable_getCurrentPriorityLevel,mi=Je.unstable_ImmediatePriority,Xa=Je.unstable_UserBlockingPriority,_o=Wa,pc=Je.unstable_LowPriority,Ga=Je.unstable_IdlePriority,zo=null,ut=null,be=Math.clz32?Math.clz32:Te,mc=Math.log,hc=Math.LN2,Po=64,To=4194304,A=0,hi=!1,Lo=[],Bt=null,Wt=null,Qt=null,Er=new Map,Cr=new Map,Yt=[],gc="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" "),Rn=Ct.ReactCurrentBatchConfig,Fo=!0,Mo=null,Xt=null,gi=null,Io=null,Un={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},vi=Re(Un),Nr=G({},Un,{view:0,detail:0}),vc=Re(Nr),yi,wi,_r,Oo=G({},Nr,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:nl,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==_r&&(_r&&e.type==="mousemove"?(yi=e.screenX-_r.screenX,wi=e.screenY-_r.screenY):wi=yi=0,_r=e),yi)},movementY:function(e){return"movementY"in e?e.movementY:wi}}),Ka=Re(Oo),yc=G({},Oo,{dataTransfer:0}),wc=Re(yc),xc=G({},Nr,{relatedTarget:0}),xi=Re(xc),kc=G({},Un,{animationName:0,elapsedTime:0,pseudoElement:0}),Sc=Re(kc),Ec=G({},Un,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Cc=Re(Ec),Nc=G({},Un,{data:0}),Za=Re(Nc),_c=Za,zc={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Pc={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Tc={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"},Lc=G({},Nr,{key:function(e){if(e.key){var t=zc[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Xr(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Pc[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:nl,charCode:function(e){return e.type==="keypress"?Xr(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Xr(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Fc=Re(Lc),Mc=G({},Oo,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Ja=Re(Mc),Ic=G({},Nr,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:nl}),Oc=Re(Ic),jc=G({},Un,{propertyName:0,elapsedTime:0,pseudoElement:0}),Dc=Re(jc),Rc=G({},Oo,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Uc=Re(Rc),Ac=[9,13,27,32],ki=Et&&"CompositionEvent"in window,zr=null;Et&&"documentMode"in document&&(zr=document.documentMode);var $c=Et&&"TextEvent"in window&&!zr,ba=Et&&(!ki||zr&&8<zr&&11>=zr),qa=" ",es=!1,An=!1,Vc={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0},Pr=null,Tr=null,ts=!1;Et&&(ts=Ns("input")&&(!document.documentMode||9<document.documentMode));var qe=typeof Object.is=="function"?Object.is:Ms,Hc=Et&&"documentMode"in document&&11>=document.documentMode,$n=null,Si=null,Lr=null,Ei=!1,Vn={animationend:Zr("Animation","AnimationEnd"),animationiteration:Zr("Animation","AnimationIteration"),animationstart:Zr("Animation","AnimationStart"),transitionend:Zr("Transition","TransitionEnd")},Ci={},ns={};Et&&(ns=document.createElement("div").style,"AnimationEvent"in window||(delete Vn.animationend.animation,delete Vn.animationiteration.animation,delete Vn.animationstart.animation),"TransitionEvent"in window||delete Vn.transitionend.transition);var rs=Jr("animationend"),os=Jr("animationiteration"),ls=Jr("animationstart"),is=Jr("transitionend"),us=new Map,as="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");(function(){for(var e=0;e<as.length;e++){var t=as[e],n=t.toLowerCase();t=t[0].toUpperCase()+t.slice(1),Ot(n,"on"+t)}Ot(rs,"onAnimationEnd"),Ot(os,"onAnimationIteration"),Ot(ls,"onAnimationStart"),Ot("dblclick","onDoubleClick"),Ot("focusin","onFocus"),Ot("focusout","onBlur"),Ot(is,"onTransitionEnd")})(),oe("onMouseEnter",["mouseout","mouseover"]),oe("onMouseLeave",["mouseout","mouseover"]),oe("onPointerEnter",["pointerout","pointerover"]),oe("onPointerLeave",["pointerout","pointerover"]),se("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),se("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),se("onBeforeInput",["compositionend","keypress","textInput","paste"]),se("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),se("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),se("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Fr="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Bc=new Set("cancel close invalid load scroll toggle".split(" ").concat(Fr)),jo="_reactListening"+Math.random().toString(36).slice(2),Wc=/\r\n?/g,Qc=/\u0000|\uFFFD/g,Ni=null,_i=null,zi=typeof setTimeout=="function"?setTimeout:void 0,Yc=typeof clearTimeout=="function"?clearTimeout:void 0,ss=typeof Promise=="function"?Promise:void 0,Xc=typeof queueMicrotask=="function"?queueMicrotask:typeof ss<"u"?function(e){return ss.resolve(null).then(e).catch(Os)}:zi,Hn=Math.random().toString(36).slice(2),at="__reactFiber$"+Hn,Mr="__reactProps$"+Hn,Nt="__reactContainer$"+Hn,Pi="__reactEvents$"+Hn,Gc="__reactListeners$"+Hn,Kc="__reactHandles$"+Hn,Ti=[],Bn=-1,Gt={},ie=jt(Gt),ve=jt(!1),cn=Gt,_t=null,Do=!1,Li=!1,Wn=[],Qn=0,Ro=null,Uo=0,He=[],Be=0,dn=null,zt=1,Pt="",Ue=null,Me=null,X=!1,et=null,Zc=Ct.ReactCurrentBatchConfig,Yn=yu(!0),cs=yu(!1),Ao=jt(null),$o=null,Xn=null,Fi=null,fn=null,Jc=xt,Kt=!1,Ir={},st=jt(Ir),Or=jt(Ir),jr=jt(Ir),K=jt(0),Mi=[],Vo=Ct.ReactCurrentDispatcher,Ii=Ct.ReactCurrentBatchConfig,pn=0,Z=null,ue=null,de=null,Ho=!1,Dr=!1,Rr=0,bc=0,Bo={readContext:$e,useCallback:xe,useContext:xe,useEffect:xe,useImperativeHandle:xe,useInsertionEffect:xe,useLayoutEffect:xe,useMemo:xe,useReducer:xe,useRef:xe,useState:xe,useDebugValue:xe,useDeferredValue:xe,useTransition:xe,useMutableSource:xe,useSyncExternalStore:xe,useId:xe,unstable_isNewReconciler:!1},qc={readContext:$e,useCallback:function(e,t){return lt().memoizedState=[e,t===void 0?null:t],e},useContext:$e,useEffect:Iu,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,ao(4194308,4,Du.bind(null,t,e),n)},useLayoutEffect:function(e,t){return ao(4194308,4,e,t)},useInsertionEffect:function(e,t){return ao(4,2,e,t)},useMemo:function(e,t){var n=lt();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=lt();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=Rs.bind(null,Z,e),[r.memoizedState,e]},useRef:function(e){var t=lt();return e={current:e},t.memoizedState=e},useState:Fu,useDebugValue:zl,useDeferredValue:function(e){return lt().memoizedState=e},useTransition:function(){var e=Fu(!1),t=e[0];return e=Ds.bind(null,e[1]),lt().memoizedState=e,[t,e]},useMutableSource:function(e,t,n){},useSyncExternalStore:function(e,t,n){var r=Z,o=lt();if(X){if(n===void 0)throw Error(h(407));n=n()}else{if(n=t(),fe===null)throw Error(h(349));pn&30||_u(r,t,n)}o.memoizedState=n;var l={value:n,getSnapshot:t};return o.queue=l,Iu(Pu.bind(null,r,l,e),[e]),r.flags|=2048,pr(9,zu.bind(null,r,l,n,t),void 0,null),n},useId:function(){var e=lt(),t=fe.identifierPrefix;if(X){var n=Pt,r=zt;n=(r&~(1<<32-be(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=Rr++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=bc++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},ed={readContext:$e,useCallback:Uu,useContext:$e,useEffect:_l,useImperativeHandle:Ru,useInsertionEffect:Ou,useLayoutEffect:ju,useMemo:Au,useReducer:Cl,useRef:Mu,useState:function(e){return Cl(fr)},useDebugValue:zl,useDeferredValue:function(e){var t=Ve();return $u(t,ue.memoizedState,e)},useTransition:function(){var e=Cl(fr)[0],t=Ve().memoizedState;return[e,t]},useMutableSource:Cu,useSyncExternalStore:Nu,useId:Vu,unstable_isNewReconciler:!1},td={readContext:$e,useCallback:Uu,useContext:$e,useEffect:_l,useImperativeHandle:Ru,useInsertionEffect:Ou,useLayoutEffect:ju,useMemo:Au,useReducer:Nl,useRef:Mu,useState:function(e){return Nl(fr)},useDebugValue:zl,useDeferredValue:function(e){var t=Ve();return ue===null?t.memoizedState=e:$u(t,ue.memoizedState,e)},useTransition:function(){var e=Nl(fr)[0],t=Ve().memoizedState;return[e,t]},useMutableSource:Cu,useSyncExternalStore:Nu,useId:Vu,unstable_isNewReconciler:!1},Wo={isMounted:function(e){return(e=e._reactInternals)?mt(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=Ne(),o=At(e),l=kt(r,o);l.payload=t,n!=null&&(l.callback=n),t=Rt(e,l,o),t!==null&&(Ze(t,e,o,r),lo(t,e,o))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=Ne(),o=At(e),l=kt(r,o);l.tag=1,l.payload=t,n!=null&&(l.callback=n),t=Rt(e,l,o),t!==null&&(Ze(t,e,o,r),lo(t,e,o))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=Ne(),r=At(e),o=kt(n,r);o.tag=2,t!=null&&(o.callback=t),t=Rt(e,o,r),t!==null&&(Ze(t,e,r,n),lo(t,e,r))}},nd=typeof WeakMap=="function"?WeakMap:Map,rd=Ct.ReactCurrentOwner,Ie=!1,Oi={dehydrated:null,treeContext:null,retryLane:0},od=function(e,t,n,r){for(n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}},ds=function(e,t){},ld=function(e,t,n,r,o){var l=e.memoizedProps;if(l!==r){switch(e=t.stateNode,on(st.current),o=null,n){case"input":l=W(e,l),r=W(e,r),o=[];break;case"select":l=G({},l,{value:void 0}),r=G({},r,{value:void 0}),o=[];break;case"textarea":l=Zn(e,l),r=Zn(e,r),o=[];break;default:typeof l.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=eo)}gn(n,r);var i;n=null;for(p in l)if(!r.hasOwnProperty(p)&&l.hasOwnProperty(p)&&l[p]!=null)if(p==="style"){var u=l[p];for(i in u)u.hasOwnProperty(i)&&(n||(n={}),n[i]="")}else p!=="dangerouslySetInnerHTML"&&p!=="children"&&p!=="suppressContentEditableWarning"&&p!=="suppressHydrationWarning"&&p!=="autoFocus"&&(vr.hasOwnProperty(p)?o||(o=[]):(o=o||[]).push(p,null));for(p in r){var s=r[p];if(u=l!=null?l[p]:void 0,r.hasOwnProperty(p)&&s!==u&&(s!=null||u!=null))if(p==="style")if(u){for(i in u)!u.hasOwnProperty(i)||s&&s.hasOwnProperty(i)||(n||(n={}),n[i]="");for(i in s)s.hasOwnProperty(i)&&u[i]!==s[i]&&(n||(n={}),n[i]=s[i])}else n||(o||(o=[]),o.push(p,n)),n=s;else p==="dangerouslySetInnerHTML"?(s=s?s.__html:void 0,u=u?u.__html:void 0,s!=null&&u!==s&&(o=o||[]).push(p,s)):p==="children"?typeof s!="string"&&typeof s!="number"||(o=o||[]).push(p,""+s):p!=="suppressContentEditableWarning"&&p!=="suppressHydrationWarning"&&(vr.hasOwnProperty(p)?(s!=null&&p==="onScroll"&&Y("scroll",e),o||u===s||(o=[])):(o=o||[]).push(p,s))}n&&(o=o||[]).push("style",n);var p=o;(t.updateQueue=p)&&(t.flags|=4)}},id=function(e,t,n,r){n!==r&&(t.flags|=4)},Qo=!1,Se=!1,ud=typeof WeakSet=="function"?WeakSet:Set,C=null,fs=!1,ye=null,tt=!1,ad=Math.ceil,Yo=Ct.ReactCurrentDispatcher,ji=Ct.ReactCurrentOwner,_e=Ct.ReactCurrentBatchConfig,j=0,fe=null,re=null,we=0,ze=0,ct=jt(0),ae=0,Ur=null,mn=0,Xo=0,Di=0,Ar=null,Oe=null,Ri=0,Ui=1/0,Tt=null,Go=!1,Ai=null,Zt=null,Ko=!1,Jt=null,Zo=0,$r=0,$i=null,Jo=-1,bo=0,sd=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||ve.current)Ie=!0;else{if(!(e.lanes&n)&&!(t.flags&128))return Ie=!1,$s(e,t,n);Ie=!!(e.flags&131072)}else Ie=!1,X&&t.flags&1048576&&pu(t,Uo,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;fo(e,t),e=t.pendingProps;var o=_n(t,ie.current);Pn(t,n),o=Sl(null,t,r,e,o,n);var l=El();return t.flags|=1,typeof o=="object"&&o!==null&&typeof o.render=="function"&&o.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,Le(r)?(l=!0,no(t)):l=!1,t.memoizedState=o.state!==null&&o.state!==void 0?o.state:null,vl(t),o.updater=Wo,t.stateNode=o,o._reactInternals=t,Tl(t,r,e,n),t=Il(null,t,r,!0,l,n)):(t.tag=0,X&&l&&al(t),Ce(null,t,o,n),t=t.child),t;case 16:r=t.elementType;e:{switch(fo(e,t),e=t.pendingProps,o=r._init,r=o(r._payload),t.type=r,o=t.tag=qs(r),e=Ge(r,e),o){case 0:t=Ml(null,t,r,e,n);break e;case 1:t=oa(null,t,r,e,n);break e;case 11:t=qu(null,t,r,e,n);break e;case 14:t=ea(null,t,r,Ge(r.type,e),n);break e}throw Error(h(306,r,""))}return t;case 0:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:Ge(r,o),Ml(e,t,r,o,n);case 1:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:Ge(r,o),oa(e,t,r,o,n);case 3:e:{if(la(t),e===null)throw Error(h(387));r=t.pendingProps,l=t.memoizedState,o=l.element,xu(e,t),io(t,r,null,n);var i=t.memoizedState;if(r=i.element,l.isDehydrated)if(l={element:r,isDehydrated:!1,cache:i.cache,pendingSuspenseBoundaries:i.pendingSuspenseBoundaries,transitions:i.transitions},t.updateQueue.baseState=l,t.memoizedState=l,t.flags&256){o=Ln(Error(h(423)),t),t=ia(e,t,r,n,o);break e}else if(r!==o){o=Ln(Error(h(424)),t),t=ia(e,t,r,n,o);break e}else for(Me=wt(t.stateNode.containerInfo.firstChild),Ue=t,X=!0,et=null,n=cs(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(zn(),r===o){t=St(e,t,n);break e}Ce(e,t,r,n)}t=t.child}return t;case 5:return Eu(t),e===null&&dl(t),r=t.type,o=t.pendingProps,l=e!==null?e.memoizedProps:null,i=o.children,il(r,o)?i=null:l!==null&&il(r,l)&&(t.flags|=32),ra(e,t),Ce(e,t,i,n),t.child;case 6:return e===null&&dl(t),null;case 13:return ua(e,t,n);case 4:return yl(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=Yn(t,null,r,n):Ce(e,t,r,n),t.child;case 11:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:Ge(r,o),qu(e,t,r,o,n);case 7:return Ce(e,t,t.pendingProps,n),t.child;case 8:return Ce(e,t,t.pendingProps.children,n),t.child;case 12:return Ce(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,o=t.pendingProps,l=t.memoizedProps,i=o.value,Q(Ao,r._currentValue),r._currentValue=i,l!==null)if(qe(l.value,i)){if(l.children===o.children&&!ve.current){t=St(e,t,n);break e}}else for(l=t.child,l!==null&&(l.return=t);l!==null;){var u=l.dependencies;if(u!==null){i=l.child;for(var s=u.firstContext;s!==null;){if(s.context===r){if(l.tag===1){s=kt(-1,n&-n),s.tag=2;var p=l.updateQueue;if(p!==null){p=p.shared;var v=p.pending;v===null?s.next=s:(s.next=v.next,v.next=s),p.pending=s}}l.lanes|=n,s=l.alternate,s!==null&&(s.lanes|=n),hl(l.return,n,t),u.lanes|=n;break}s=s.next}}else if(l.tag===10)i=l.type===t.type?null:l.child;else if(l.tag===18){if(i=l.return,i===null)throw Error(h(341));i.lanes|=n,u=i.alternate,u!==null&&(u.lanes|=n),hl(i,n,t),i=l.sibling}else i=l.child;if(i!==null)i.return=l;else for(i=l;i!==null;){if(i===t){i=null;break}if(l=i.sibling,l!==null){l.return=i.return,i=l;break}i=i.return}l=i}Ce(e,t,o.children,n),t=t.child}return t;case 9:return o=t.type,r=t.pendingProps.children,Pn(t,n),o=$e(o),r=r(o),t.flags|=1,Ce(e,t,r,n),t.child;case 14:return r=t.type,o=Ge(r,t.pendingProps),o=Ge(r.type,o),ea(e,t,r,o,n);case 15:return ta(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:Ge(r,o),fo(e,t),t.tag=1,Le(r)?(e=!0,no(t)):e=!1,Pn(t,n),Yu(t,r,o),Tl(t,r,o,n),Il(null,t,r,!0,e,n);case 19:return sa(e,t,n);case 22:return na(e,t,n)}throw Error(h(156,t.tag))},We=function(e,t,n,r){return new bs(e,t,n,r)},ps=typeof reportError=="function"?reportError:function(e){console.error(e)};wo.prototype.render=Zl.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(h(409));vo(e,t,null,null)},wo.prototype.unmount=Zl.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;ln(function(){vo(null,e,null,null)}),t[Nt]=null}},wo.prototype.unstable_scheduleHydration=function(e){if(e){var t=fd();e={blockedOn:null,target:e,priority:t};for(var n=0;n<Yt.length&&t!==0&&t<Yt[n].priority;n++);Yt.splice(n,0,e),n===0&&Yr(e)}};var cd=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=b(t.pendingLanes);n!==0&&(vt(t,n|1),Fe(t,ce()),!(j&6)&&(gr(),Dt()))}break;case 13:ln(function(){var r=xt(e,1);if(r!==null){var o=Ne();Ze(r,e,1,o)}}),Kl(e,1)}},ms=function(e){if(e.tag===13){var t=xt(e,134217728);if(t!==null){var n=Ne();Ze(t,e,134217728,n)}Kl(e,134217728)}},dd=function(e){if(e.tag===13){var t=At(e),n=xt(e,t);if(n!==null){var r=Ne();Ze(n,e,t,r)}Kl(e,t)}},fd=function(){return A},pd=function(e,t){var n=A;try{return A=e,t()}finally{A=n}};ci=function(e,t,n){switch(t){case"input":if(en(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var o=to(r);if(!o)throw Error(h(90));I(r),en(r,o)}}}break;case"textarea":Br(e,n);break;case"select":t=n.value,t!=null&&Mt(e,!!n.multiple,t,!1)}},function(e,t,n){Va=e,Ha=n}(Bl,function(e,t,n,r,o){var l=A,i=_e.transition;try{return _e.transition=null,A=1,e(t,n,r,o)}finally{A=l,_e.transition=i,j===0&&gr()}},ln);var md={usingClientEntryPoint:!1,Events:[cr,Nn,to,tr,yn,Bl]};(function(e){if(e={bundleType:e.bundleType,version:e.version,rendererPackageName:e.rendererPackageName,rendererConfig:e.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Ct.ReactCurrentDispatcher,findHostInstanceByFiber:nc,findFiberByHostInstance:e.findFiberByHostInstance||rc,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1"},typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u")e=!1;else{var t=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(t.isDisabled||!t.supportsFiber)e=!0;else{try{zo=t.inject(e),ut=t}catch{}e=!!t.checkDCE}}return e})({findFiberByHostInstance:nn,bundleType:0,version:"18.3.1-next-f1338f8080-20240426",rendererPackageName:"react-dom"}),w.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=md,w.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Jl(t))throw Error(h(200));return tc(e,t,null,n)},w.createRoot=function(e,t){if(!Jl(e))throw Error(h(299));var n=!1,r="",o=ps;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(o=t.onRecoverableError)),t=Gl(e,1,!1,null,null,n,!1,r,o),e[Nt]=t.current,ar(e.nodeType===8?e.parentNode:e),new Zl(t)},w.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(h(188)):(e=Object.keys(e).join(","),Error(h(268,e)));return e=De(t),e=e===null?null:e.stateNode,e},w.flushSync=function(e){return ln(e)},w.hydrate=function(e,t,n){if(!xo(t))throw Error(h(200));return ko(null,e,t,!0,n)},w.hydrateRoot=function(e,t,n){if(!Jl(e))throw Error(h(405));var r=n!=null&&n.hydratedSources||null,o=!1,l="",i=ps;if(n!=null&&(n.unstable_strictMode===!0&&(o=!0),n.identifierPrefix!==void 0&&(l=n.identifierPrefix),n.onRecoverableError!==void 0&&(i=n.onRecoverableError)),t=La(t,null,e,1,n??null,o,!1,l,i),e[Nt]=t.current,ar(e),r)for(e=0;e<r.length;e++)n=r[e],o=n._getVersion,o=o(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,o]:t.mutableSourceEagerHydrationData.push(n,o);return new wo(t)},w.render=function(e,t,n){if(!xo(t))throw Error(h(200));return ko(null,e,t,!1,n)},w.unmountComponentAtNode=function(e){if(!xo(e))throw Error(h(40));return e._reactRootContainer?(ln(function(){ko(null,null,e,!1,function(){e._reactRootContainer=null,e[Nt]=null})}),!0):!1},w.unstable_batchedUpdates=Bl,w.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!xo(n))throw Error(h(200));if(e==null||e._reactInternals===void 0)throw Error(h(38));return ko(e,t,n,!1,r)},w.version="18.3.1-next-f1338f8080-20240426"})})();var vs=window.ReactDOM;var ys=vs.createRoot,{render:Od,hydrate:jd}=vs;qo();(function(){let w=document.createElement("style");w.textContent=`@import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;600;700&display=swap');

*, ::before, ::after{
  --tw-border-spacing-x: 0;
  --tw-border-spacing-y: 0;
  --tw-translate-x: 0;
  --tw-translate-y: 0;
  --tw-rotate: 0;
  --tw-skew-x: 0;
  --tw-skew-y: 0;
  --tw-scale-x: 1;
  --tw-scale-y: 1;
  --tw-pan-x:  ;
  --tw-pan-y:  ;
  --tw-pinch-zoom:  ;
  --tw-scroll-snap-strictness: proximity;
  --tw-gradient-from-position:  ;
  --tw-gradient-via-position:  ;
  --tw-gradient-to-position:  ;
  --tw-ordinal:  ;
  --tw-slashed-zero:  ;
  --tw-numeric-figure:  ;
  --tw-numeric-spacing:  ;
  --tw-numeric-fraction:  ;
  --tw-ring-inset:  ;
  --tw-ring-offset-width: 0px;
  --tw-ring-offset-color: #fff;
  --tw-ring-color: rgb(59 130 246 / 0.5);
  --tw-ring-offset-shadow: 0 0 #0000;
  --tw-ring-shadow: 0 0 #0000;
  --tw-shadow: 0 0 #0000;
  --tw-shadow-colored: 0 0 #0000;
  --tw-blur:  ;
  --tw-brightness:  ;
  --tw-contrast:  ;
  --tw-grayscale:  ;
  --tw-hue-rotate:  ;
  --tw-invert:  ;
  --tw-saturate:  ;
  --tw-sepia:  ;
  --tw-drop-shadow:  ;
  --tw-backdrop-blur:  ;
  --tw-backdrop-brightness:  ;
  --tw-backdrop-contrast:  ;
  --tw-backdrop-grayscale:  ;
  --tw-backdrop-hue-rotate:  ;
  --tw-backdrop-invert:  ;
  --tw-backdrop-opacity:  ;
  --tw-backdrop-saturate:  ;
  --tw-backdrop-sepia:  ;
  --tw-contain-size:  ;
  --tw-contain-layout:  ;
  --tw-contain-paint:  ;
  --tw-contain-style:  ;
}

::backdrop{
  --tw-border-spacing-x: 0;
  --tw-border-spacing-y: 0;
  --tw-translate-x: 0;
  --tw-translate-y: 0;
  --tw-rotate: 0;
  --tw-skew-x: 0;
  --tw-skew-y: 0;
  --tw-scale-x: 1;
  --tw-scale-y: 1;
  --tw-pan-x:  ;
  --tw-pan-y:  ;
  --tw-pinch-zoom:  ;
  --tw-scroll-snap-strictness: proximity;
  --tw-gradient-from-position:  ;
  --tw-gradient-via-position:  ;
  --tw-gradient-to-position:  ;
  --tw-ordinal:  ;
  --tw-slashed-zero:  ;
  --tw-numeric-figure:  ;
  --tw-numeric-spacing:  ;
  --tw-numeric-fraction:  ;
  --tw-ring-inset:  ;
  --tw-ring-offset-width: 0px;
  --tw-ring-offset-color: #fff;
  --tw-ring-color: rgb(59 130 246 / 0.5);
  --tw-ring-offset-shadow: 0 0 #0000;
  --tw-ring-shadow: 0 0 #0000;
  --tw-shadow: 0 0 #0000;
  --tw-shadow-colored: 0 0 #0000;
  --tw-blur:  ;
  --tw-brightness:  ;
  --tw-contrast:  ;
  --tw-grayscale:  ;
  --tw-hue-rotate:  ;
  --tw-invert:  ;
  --tw-saturate:  ;
  --tw-sepia:  ;
  --tw-drop-shadow:  ;
  --tw-backdrop-blur:  ;
  --tw-backdrop-brightness:  ;
  --tw-backdrop-contrast:  ;
  --tw-backdrop-grayscale:  ;
  --tw-backdrop-hue-rotate:  ;
  --tw-backdrop-invert:  ;
  --tw-backdrop-opacity:  ;
  --tw-backdrop-saturate:  ;
  --tw-backdrop-sepia:  ;
  --tw-contain-size:  ;
  --tw-contain-layout:  ;
  --tw-contain-paint:  ;
  --tw-contain-style:  ;
}

/*
! tailwindcss v3.4.19 | MIT License | https://tailwindcss.com
*//*
1. Prevent padding and border from affecting element width. (https://github.com/mozdevs/cssremedy/issues/4)
2. Allow adding a border to an element by just adding a border-width. (https://github.com/tailwindcss/tailwindcss/pull/116)
*/

*,
::before,
::after {
  box-sizing: border-box; /* 1 */
  border-width: 0; /* 2 */
  border-style: solid; /* 2 */
  border-color: #e5e7eb; /* 2 */
}

::before,
::after {
  --tw-content: '';
}

/*
1. Use a consistent sensible line-height in all browsers.
2. Prevent adjustments of font size after orientation changes in iOS.
3. Use a more readable tab size.
4. Use the user's configured \`sans\` font-family by default.
5. Use the user's configured \`sans\` font-feature-settings by default.
6. Use the user's configured \`sans\` font-variation-settings by default.
7. Disable tap highlights on iOS
*/

html,
:host {
  line-height: 1.5; /* 1 */
  -webkit-text-size-adjust: 100%; /* 2 */
  -moz-tab-size: 4; /* 3 */
  -o-tab-size: 4;
     tab-size: 4; /* 3 */
  font-family: ui-sans-serif, system-ui, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"; /* 4 */
  font-feature-settings: normal; /* 5 */
  font-variation-settings: normal; /* 6 */
  -webkit-tap-highlight-color: transparent; /* 7 */
}

/*
1. Remove the margin in all browsers.
2. Inherit line-height from \`html\` so users can set them as a class directly on the \`html\` element.
*/

body {
  margin: 0; /* 1 */
  line-height: inherit; /* 2 */
}

/*
1. Add the correct height in Firefox.
2. Correct the inheritance of border color in Firefox. (https://bugzilla.mozilla.org/show_bug.cgi?id=190655)
3. Ensure horizontal rules are visible by default.
*/

hr {
  height: 0; /* 1 */
  color: inherit; /* 2 */
  border-top-width: 1px; /* 3 */
}

/*
Add the correct text decoration in Chrome, Edge, and Safari.
*/

abbr:where([title]) {
  -webkit-text-decoration: underline dotted;
          text-decoration: underline dotted;
}

/*
Remove the default font size and weight for headings.
*/

h1,
h2,
h3,
h4,
h5,
h6 {
  font-size: inherit;
  font-weight: inherit;
}

/*
Reset links to optimize for opt-in styling instead of opt-out.
*/

a {
  color: inherit;
  text-decoration: inherit;
}

/*
Add the correct font weight in Edge and Safari.
*/

b,
strong {
  font-weight: bolder;
}

/*
1. Use the user's configured \`mono\` font-family by default.
2. Use the user's configured \`mono\` font-feature-settings by default.
3. Use the user's configured \`mono\` font-variation-settings by default.
4. Correct the odd \`em\` font sizing in all browsers.
*/

code,
kbd,
samp,
pre {
  font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace; /* 1 */
  font-feature-settings: normal; /* 2 */
  font-variation-settings: normal; /* 3 */
  font-size: 1em; /* 4 */
}

/*
Add the correct font size in all browsers.
*/

small {
  font-size: 80%;
}

/*
Prevent \`sub\` and \`sup\` elements from affecting the line height in all browsers.
*/

sub,
sup {
  font-size: 75%;
  line-height: 0;
  position: relative;
  vertical-align: baseline;
}

sub {
  bottom: -0.25em;
}

sup {
  top: -0.5em;
}

/*
1. Remove text indentation from table contents in Chrome and Safari. (https://bugs.chromium.org/p/chromium/issues/detail?id=999088, https://bugs.webkit.org/show_bug.cgi?id=201297)
2. Correct table border color inheritance in all Chrome and Safari. (https://bugs.chromium.org/p/chromium/issues/detail?id=935729, https://bugs.webkit.org/show_bug.cgi?id=195016)
3. Remove gaps between table borders by default.
*/

table {
  text-indent: 0; /* 1 */
  border-color: inherit; /* 2 */
  border-collapse: collapse; /* 3 */
}

/*
1. Change the font styles in all browsers.
2. Remove the margin in Firefox and Safari.
3. Remove default padding in all browsers.
*/

button,
input,
optgroup,
select,
textarea {
  font-family: inherit; /* 1 */
  font-feature-settings: inherit; /* 1 */
  font-variation-settings: inherit; /* 1 */
  font-size: 100%; /* 1 */
  font-weight: inherit; /* 1 */
  line-height: inherit; /* 1 */
  letter-spacing: inherit; /* 1 */
  color: inherit; /* 1 */
  margin: 0; /* 2 */
  padding: 0; /* 3 */
}

/*
Remove the inheritance of text transform in Edge and Firefox.
*/

button,
select {
  text-transform: none;
}

/*
1. Correct the inability to style clickable types in iOS and Safari.
2. Remove default button styles.
*/

button,
input:where([type='button']),
input:where([type='reset']),
input:where([type='submit']) {
  -webkit-appearance: button; /* 1 */
  background-color: transparent; /* 2 */
  background-image: none; /* 2 */
}

/*
Use the modern Firefox focus style for all focusable elements.
*/

:-moz-focusring {
  outline: auto;
}

/*
Remove the additional \`:invalid\` styles in Firefox. (https://github.com/mozilla/gecko-dev/blob/2f9eacd9d3d995c937b4251a5557d95d494c9be1/layout/style/res/forms.css#L728-L737)
*/

:-moz-ui-invalid {
  box-shadow: none;
}

/*
Add the correct vertical alignment in Chrome and Firefox.
*/

progress {
  vertical-align: baseline;
}

/*
Correct the cursor style of increment and decrement buttons in Safari.
*/

::-webkit-inner-spin-button,
::-webkit-outer-spin-button {
  height: auto;
}

/*
1. Correct the odd appearance in Chrome and Safari.
2. Correct the outline style in Safari.
*/

[type='search'] {
  -webkit-appearance: textfield; /* 1 */
  outline-offset: -2px; /* 2 */
}

/*
Remove the inner padding in Chrome and Safari on macOS.
*/

::-webkit-search-decoration {
  -webkit-appearance: none;
}

/*
1. Correct the inability to style clickable types in iOS and Safari.
2. Change font properties to \`inherit\` in Safari.
*/

::-webkit-file-upload-button {
  -webkit-appearance: button; /* 1 */
  font: inherit; /* 2 */
}

/*
Add the correct display in Chrome and Safari.
*/

summary {
  display: list-item;
}

/*
Removes the default spacing and border for appropriate elements.
*/

blockquote,
dl,
dd,
h1,
h2,
h3,
h4,
h5,
h6,
hr,
figure,
p,
pre {
  margin: 0;
}

fieldset {
  margin: 0;
  padding: 0;
}

legend {
  padding: 0;
}

ol,
ul,
menu {
  list-style: none;
  margin: 0;
  padding: 0;
}

/*
Reset default styling for dialogs.
*/
dialog {
  padding: 0;
}

/*
Prevent resizing textareas horizontally by default.
*/

textarea {
  resize: vertical;
}

/*
1. Reset the default placeholder opacity in Firefox. (https://github.com/tailwindlabs/tailwindcss/issues/3300)
2. Set the default placeholder color to the user's configured gray 400 color.
*/

input::-moz-placeholder, textarea::-moz-placeholder {
  opacity: 1; /* 1 */
  color: #9ca3af; /* 2 */
}

input::placeholder,
textarea::placeholder {
  opacity: 1; /* 1 */
  color: #9ca3af; /* 2 */
}

/*
Set the default cursor for buttons.
*/

button,
[role="button"] {
  cursor: pointer;
}

/*
Make sure disabled buttons don't get the pointer cursor.
*/
:disabled {
  cursor: default;
}

/*
1. Make replaced elements \`display: block\` by default. (https://github.com/mozdevs/cssremedy/issues/14)
2. Add \`vertical-align: middle\` to align replaced elements more sensibly by default. (https://github.com/jensimmons/cssremedy/issues/14#issuecomment-634934210)
   This can trigger a poorly considered lint error in some tools but is included by design.
*/

img,
svg,
video,
canvas,
audio,
iframe,
embed,
object {
  display: block; /* 1 */
  vertical-align: middle; /* 2 */
}

/*
Constrain images and videos to the parent width and preserve their intrinsic aspect ratio. (https://github.com/mozdevs/cssremedy/issues/14)
*/

img,
video {
  max-width: 100%;
  height: auto;
}

/* Make elements with the HTML hidden attribute stay hidden by default */
[hidden]:where(:not([hidden="until-found"])) {
  display: none;
}
.container{
  width: 100%;
}
@media (min-width: 640px){

  .container{
    max-width: 640px;
  }
}
@media (min-width: 768px){

  .container{
    max-width: 768px;
  }
}
@media (min-width: 1024px){

  .container{
    max-width: 1024px;
  }
}
@media (min-width: 1280px){

  .container{
    max-width: 1280px;
  }
}
@media (min-width: 1536px){

  .container{
    max-width: 1536px;
  }
}
.pointer-events-none{
  pointer-events: none;
}
.fixed{
  position: fixed;
}
.absolute{
  position: absolute;
}
.relative{
  position: relative;
}
.inset-0{
  inset: 0px;
}
.top-0\\.5{
  top: 0.125rem;
}
.mt-0\\.5{
  margin-top: 0.125rem;
}
.flex{
  display: flex;
}
.grid{
  display: grid;
}
.contents{
  display: contents;
}
.hidden{
  display: none;
}
.h-1\\.5{
  height: 0.375rem;
}
.h-2{
  height: 0.5rem;
}
.h-2\\.5{
  height: 0.625rem;
}
.h-3{
  height: 0.75rem;
}
.h-3\\.5{
  height: 0.875rem;
}
.h-4{
  height: 1rem;
}
.h-5{
  height: 1.25rem;
}
.h-8{
  height: 2rem;
}
.h-full{
  height: 100%;
}
.min-h-\\[520px\\]{
  min-height: 520px;
}
.w-2\\.5{
  width: 0.625rem;
}
.w-3{
  width: 0.75rem;
}
.w-3\\.5{
  width: 0.875rem;
}
.w-4{
  width: 1rem;
}
.w-5{
  width: 1.25rem;
}
.w-7{
  width: 1.75rem;
}
.w-8{
  width: 2rem;
}
.w-\\[400px\\]{
  width: 400px;
}
.w-full{
  width: 100%;
}
.max-w-\\[200px\\]{
  max-width: 200px;
}
.flex-1{
  flex: 1 1 0%;
}
.shrink-0{
  flex-shrink: 0;
}
.translate-x-0\\.5{
  --tw-translate-x: 0.125rem;
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}
.translate-x-3\\.5{
  --tw-translate-x: 0.875rem;
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}
.transform{
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}
@keyframes spin{

  to{
    transform: rotate(360deg);
  }
}
.animate-spin{
  animation: spin 1s linear infinite;
}
.cursor-pointer{
  cursor: pointer;
}
.select-none{
  -webkit-user-select: none;
     -moz-user-select: none;
          user-select: none;
}
.resize{
  resize: both;
}
.grid-cols-2{
  grid-template-columns: repeat(2, minmax(0, 1fr));
}
.grid-cols-3{
  grid-template-columns: repeat(3, minmax(0, 1fr));
}
.flex-col{
  flex-direction: column;
}
.items-start{
  align-items: flex-start;
}
.items-center{
  align-items: center;
}
.justify-center{
  justify-content: center;
}
.justify-between{
  justify-content: space-between;
}
.gap-1\\.5{
  gap: 0.375rem;
}
.gap-2{
  gap: 0.5rem;
}
.space-x-1\\.5 > :not([hidden]) ~ :not([hidden]){
  --tw-space-x-reverse: 0;
  margin-right: calc(0.375rem * var(--tw-space-x-reverse));
  margin-left: calc(0.375rem * calc(1 - var(--tw-space-x-reverse)));
}
.space-x-2 > :not([hidden]) ~ :not([hidden]){
  --tw-space-x-reverse: 0;
  margin-right: calc(0.5rem * var(--tw-space-x-reverse));
  margin-left: calc(0.5rem * calc(1 - var(--tw-space-x-reverse)));
}
.space-x-2\\.5 > :not([hidden]) ~ :not([hidden]){
  --tw-space-x-reverse: 0;
  margin-right: calc(0.625rem * var(--tw-space-x-reverse));
  margin-left: calc(0.625rem * calc(1 - var(--tw-space-x-reverse)));
}
.space-x-3 > :not([hidden]) ~ :not([hidden]){
  --tw-space-x-reverse: 0;
  margin-right: calc(0.75rem * var(--tw-space-x-reverse));
  margin-left: calc(0.75rem * calc(1 - var(--tw-space-x-reverse)));
}
.space-y-1\\.5 > :not([hidden]) ~ :not([hidden]){
  --tw-space-y-reverse: 0;
  margin-top: calc(0.375rem * calc(1 - var(--tw-space-y-reverse)));
  margin-bottom: calc(0.375rem * var(--tw-space-y-reverse));
}
.space-y-2 > :not([hidden]) ~ :not([hidden]){
  --tw-space-y-reverse: 0;
  margin-top: calc(0.5rem * calc(1 - var(--tw-space-y-reverse)));
  margin-bottom: calc(0.5rem * var(--tw-space-y-reverse));
}
.space-y-3 > :not([hidden]) ~ :not([hidden]){
  --tw-space-y-reverse: 0;
  margin-top: calc(0.75rem * calc(1 - var(--tw-space-y-reverse)));
  margin-bottom: calc(0.75rem * var(--tw-space-y-reverse));
}
.space-y-4 > :not([hidden]) ~ :not([hidden]){
  --tw-space-y-reverse: 0;
  margin-top: calc(1rem * calc(1 - var(--tw-space-y-reverse)));
  margin-bottom: calc(1rem * var(--tw-space-y-reverse));
}
.overflow-hidden{
  overflow: hidden;
}
.truncate{
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.rounded{
  border-radius: 0.25rem;
}
.rounded-2xl{
  border-radius: 1rem;
}
.rounded-full{
  border-radius: 9999px;
}
.rounded-lg{
  border-radius: 0.5rem;
}
.rounded-xl{
  border-radius: 0.75rem;
}
.border{
  border-width: 1px;
}
.border-b{
  border-bottom-width: 1px;
}
.border-t{
  border-top-width: 1px;
}
.border-amber-500\\/30{
  border-color: rgb(245 158 11 / 0.3);
}
.border-emerald-400\\/30{
  border-color: rgb(52 211 153 / 0.3);
}
.border-orange-400\\/50{
  border-color: rgb(251 146 60 / 0.5);
}
.border-pink-500\\/50{
  border-color: rgb(236 72 153 / 0.5);
}
.border-rose-800\\/50{
  border-color: rgb(159 18 57 / 0.5);
}
.border-slate-800{
  --tw-border-opacity: 1;
  border-color: rgb(30 41 59 / var(--tw-border-opacity, 1));
}
.border-slate-800\\/60{
  border-color: rgb(30 41 59 / 0.6);
}
.border-slate-800\\/80{
  border-color: rgb(30 41 59 / 0.8);
}
.bg-amber-500\\/20{
  background-color: rgb(245 158 11 / 0.2);
}
.bg-emerald-400{
  --tw-bg-opacity: 1;
  background-color: rgb(52 211 153 / var(--tw-bg-opacity, 1));
}
.bg-pink-500\\/10{
  background-color: rgb(236 72 153 / 0.1);
}
.bg-pink-600{
  --tw-bg-opacity: 1;
  background-color: rgb(219 39 119 / var(--tw-bg-opacity, 1));
}
.bg-rose-950\\/70{
  background-color: rgb(76 5 25 / 0.7);
}
.bg-slate-600{
  --tw-bg-opacity: 1;
  background-color: rgb(71 85 105 / var(--tw-bg-opacity, 1));
}
.bg-slate-700{
  --tw-bg-opacity: 1;
  background-color: rgb(51 65 85 / var(--tw-bg-opacity, 1));
}
.bg-slate-800{
  --tw-bg-opacity: 1;
  background-color: rgb(30 41 59 / var(--tw-bg-opacity, 1));
}
.bg-slate-900\\/60{
  background-color: rgb(15 23 42 / 0.6);
}
.bg-slate-900\\/80{
  background-color: rgb(15 23 42 / 0.8);
}
.bg-slate-900\\/90{
  background-color: rgb(15 23 42 / 0.9);
}
.bg-slate-950{
  --tw-bg-opacity: 1;
  background-color: rgb(2 6 23 / var(--tw-bg-opacity, 1));
}
.bg-slate-950\\/40{
  background-color: rgb(2 6 23 / 0.4);
}
.bg-slate-950\\/60{
  background-color: rgb(2 6 23 / 0.6);
}
.bg-white{
  --tw-bg-opacity: 1;
  background-color: rgb(255 255 255 / var(--tw-bg-opacity, 1));
}
.bg-gradient-to-r{
  background-image: linear-gradient(to right, var(--tw-gradient-stops));
}
.bg-gradient-to-tr{
  background-image: linear-gradient(to top right, var(--tw-gradient-stops));
}
.from-emerald-600{
  --tw-gradient-from: #059669 var(--tw-gradient-from-position);
  --tw-gradient-to: rgb(5 150 105 / 0) var(--tw-gradient-to-position);
  --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to);
}
.from-pink-500{
  --tw-gradient-from: #ec4899 var(--tw-gradient-from-position);
  --tw-gradient-to: rgb(236 72 153 / 0) var(--tw-gradient-to-position);
  --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to);
}
.from-red-500{
  --tw-gradient-from: #ef4444 var(--tw-gradient-from-position);
  --tw-gradient-to: rgb(239 68 68 / 0) var(--tw-gradient-to-position);
  --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to);
}
.from-red-600{
  --tw-gradient-from: #dc2626 var(--tw-gradient-from-position);
  --tw-gradient-to: rgb(220 38 38 / 0) var(--tw-gradient-to-position);
  --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to);
}
.via-indigo-500{
  --tw-gradient-to: rgb(99 102 241 / 0)  var(--tw-gradient-to-position);
  --tw-gradient-stops: var(--tw-gradient-from), #6366f1 var(--tw-gradient-via-position), var(--tw-gradient-to);
}
.via-orange-500{
  --tw-gradient-to: rgb(249 115 22 / 0)  var(--tw-gradient-to-position);
  --tw-gradient-stops: var(--tw-gradient-from), #f97316 var(--tw-gradient-via-position), var(--tw-gradient-to);
}
.via-rose-600{
  --tw-gradient-to: rgb(225 29 72 / 0)  var(--tw-gradient-to-position);
  --tw-gradient-stops: var(--tw-gradient-from), #e11d48 var(--tw-gradient-via-position), var(--tw-gradient-to);
}
.to-amber-400{
  --tw-gradient-to: #fbbf24 var(--tw-gradient-to-position);
}
.to-emerald-400{
  --tw-gradient-to: #34d399 var(--tw-gradient-to-position);
}
.to-orange-500{
  --tw-gradient-to: #f97316 var(--tw-gradient-to-position);
}
.to-teal-600{
  --tw-gradient-to: #0d9488 var(--tw-gradient-to-position);
}
.p-2\\.5{
  padding: 0.625rem;
}
.p-3{
  padding: 0.75rem;
}
.p-4{
  padding: 1rem;
}
.p-5{
  padding: 1.25rem;
}
.px-1\\.5{
  padding-left: 0.375rem;
  padding-right: 0.375rem;
}
.px-3\\.5{
  padding-left: 0.875rem;
  padding-right: 0.875rem;
}
.px-5{
  padding-left: 1.25rem;
  padding-right: 1.25rem;
}
.px-6{
  padding-left: 1.5rem;
  padding-right: 1.5rem;
}
.py-0\\.5{
  padding-top: 0.125rem;
  padding-bottom: 0.125rem;
}
.py-1\\.5{
  padding-top: 0.375rem;
  padding-bottom: 0.375rem;
}
.py-4{
  padding-top: 1rem;
  padding-bottom: 1rem;
}
.pt-1{
  padding-top: 0.25rem;
}
.text-left{
  text-align: left;
}
.text-center{
  text-align: center;
}
.font-mono{
  font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace;
}
.font-sans{
  font-family: ui-sans-serif, system-ui, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
}
.text-\\[10px\\]{
  font-size: 10px;
}
.text-\\[11px\\]{
  font-size: 11px;
}
.text-base{
  font-size: 1rem;
  line-height: 1.5rem;
}
.text-lg{
  font-size: 1.125rem;
  line-height: 1.75rem;
}
.text-sm{
  font-size: 0.875rem;
  line-height: 1.25rem;
}
.text-xs{
  font-size: 0.75rem;
  line-height: 1rem;
}
.font-bold{
  font-weight: 700;
}
.font-medium{
  font-weight: 500;
}
.font-semibold{
  font-weight: 600;
}
.uppercase{
  text-transform: uppercase;
}
.leading-tight{
  line-height: 1.25;
}
.tracking-tight{
  letter-spacing: -0.025em;
}
.tracking-wide{
  letter-spacing: 0.025em;
}
.tracking-wider{
  letter-spacing: 0.05em;
}
.text-amber-300{
  --tw-text-opacity: 1;
  color: rgb(252 211 77 / var(--tw-text-opacity, 1));
}
.text-emerald-200{
  --tw-text-opacity: 1;
  color: rgb(167 243 208 / var(--tw-text-opacity, 1));
}
.text-emerald-400{
  --tw-text-opacity: 1;
  color: rgb(52 211 153 / var(--tw-text-opacity, 1));
}
.text-pink-200{
  --tw-text-opacity: 1;
  color: rgb(251 207 232 / var(--tw-text-opacity, 1));
}
.text-pink-400{
  --tw-text-opacity: 1;
  color: rgb(244 114 182 / var(--tw-text-opacity, 1));
}
.text-rose-300{
  --tw-text-opacity: 1;
  color: rgb(253 164 175 / var(--tw-text-opacity, 1));
}
.text-rose-400{
  --tw-text-opacity: 1;
  color: rgb(251 113 133 / var(--tw-text-opacity, 1));
}
.text-slate-100{
  --tw-text-opacity: 1;
  color: rgb(241 245 249 / var(--tw-text-opacity, 1));
}
.text-slate-200{
  --tw-text-opacity: 1;
  color: rgb(226 232 240 / var(--tw-text-opacity, 1));
}
.text-slate-300{
  --tw-text-opacity: 1;
  color: rgb(203 213 225 / var(--tw-text-opacity, 1));
}
.text-slate-400{
  --tw-text-opacity: 1;
  color: rgb(148 163 184 / var(--tw-text-opacity, 1));
}
.text-slate-500{
  --tw-text-opacity: 1;
  color: rgb(100 116 139 / var(--tw-text-opacity, 1));
}
.text-violet-400{
  --tw-text-opacity: 1;
  color: rgb(167 139 250 / var(--tw-text-opacity, 1));
}
.text-white{
  --tw-text-opacity: 1;
  color: rgb(255 255 255 / var(--tw-text-opacity, 1));
}
.text-yellow-200{
  --tw-text-opacity: 1;
  color: rgb(254 240 138 / var(--tw-text-opacity, 1));
}
.accent-pink-500{
  accent-color: #ec4899;
}
.shadow-\\[0_0_8px_\\#34d399\\]{
  --tw-shadow: 0 0 8px #34d399;
  --tw-shadow-colored: 0 0 8px var(--tw-shadow-color);
  box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);
}
.shadow-lg{
  --tw-shadow: 0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1);
  --tw-shadow-colored: 0 10px 15px -3px var(--tw-shadow-color), 0 4px 6px -4px var(--tw-shadow-color);
  box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);
}
.shadow-xl{
  --tw-shadow: 0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1);
  --tw-shadow-colored: 0 20px 25px -5px var(--tw-shadow-color), 0 8px 10px -6px var(--tw-shadow-color);
  box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);
}
.shadow-emerald-950\\/40{
  --tw-shadow-color: rgb(2 44 34 / 0.4);
  --tw-shadow: var(--tw-shadow-colored);
}
.shadow-red-500\\/30{
  --tw-shadow-color: rgb(239 68 68 / 0.3);
  --tw-shadow: var(--tw-shadow-colored);
}
.shadow-red-950\\/50{
  --tw-shadow-color: rgb(69 10 10 / 0.5);
  --tw-shadow: var(--tw-shadow-colored);
}
.outline{
  outline-style: solid;
}
.ring-1{
  --tw-ring-offset-shadow: var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);
  --tw-ring-shadow: var(--tw-ring-inset) 0 0 0 calc(1px + var(--tw-ring-offset-width)) var(--tw-ring-color);
  box-shadow: var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow, 0 0 #0000);
}
.ring-white\\/20{
  --tw-ring-color: rgb(255 255 255 / 0.2);
}
.blur{
  --tw-blur: blur(8px);
  filter: var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow);
}
.filter{
  filter: var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow);
}
.backdrop-blur{
  --tw-backdrop-blur: blur(8px);
  backdrop-filter: var(--tw-backdrop-blur) var(--tw-backdrop-brightness) var(--tw-backdrop-contrast) var(--tw-backdrop-grayscale) var(--tw-backdrop-hue-rotate) var(--tw-backdrop-invert) var(--tw-backdrop-opacity) var(--tw-backdrop-saturate) var(--tw-backdrop-sepia);
}
.backdrop-filter{
  backdrop-filter: var(--tw-backdrop-blur) var(--tw-backdrop-brightness) var(--tw-backdrop-contrast) var(--tw-backdrop-grayscale) var(--tw-backdrop-hue-rotate) var(--tw-backdrop-invert) var(--tw-backdrop-opacity) var(--tw-backdrop-saturate) var(--tw-backdrop-sepia);
}
.transition{
  transition-property: color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 150ms;
}
.transition-all{
  transition-property: all;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 150ms;
}
.transition-colors{
  transition-property: color, background-color, border-color, text-decoration-color, fill, stroke;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 150ms;
}
.transition-transform{
  transition-property: transform;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 150ms;
}
.duration-200{
  transition-duration: 200ms;
}
.duration-300{
  transition-duration: 300ms;
}

*, *::before, *::after {
  box-sizing: border-box;
}

html {
  width: 400px;
}

body {
  width: 400px;
  max-width: 400px;
  min-height: 520px;
  overflow-x: hidden;
  margin: 0;
  padding: 0;
  font-family: 'Space Grotesk', system-ui, sans-serif;
  background-color: #020617;
}

#root {
  width: 100%;
  max-width: 100%;
  overflow-x: hidden;
}

/* Custom modern scrollbars */
::-webkit-scrollbar {
  width: 5px;
}
::-webkit-scrollbar-track {
  background: #090d16;
}
::-webkit-scrollbar-thumb {
  background: #334155;
  border-radius: 4px;
}
::-webkit-scrollbar-thumb:hover {
  background: #475569;
}

/* ============================================
   HAVOC BUTTON \u2014 animated hazard styling
   ============================================ */
.havoc-btn {
  position: relative;
  overflow: hidden;
  isolation: isolate;
  animation: havocPulse 2.2s ease-in-out infinite;
}

/* Pulse glow animation */
@keyframes havocPulse {
  0%, 100% {
    box-shadow: 0 6px 25px rgba(239, 68, 68, 0.55), 0 0 18px rgba(249, 115, 22, 0.35), inset 0 0 8px rgba(255, 255, 255, 0.06);
    transform: scale(1);
  }
  50% {
    box-shadow: 0 6px 32px rgba(239, 68, 68, 0.75), 0 0 28px rgba(249, 115, 22, 0.55), inset 0 0 12px rgba(255, 255, 255, 0.1);
    transform: scale(1.015);
  }
}

/* Sheen sweep across the button surface */
.havoc-btn-sheen {
  background: linear-gradient(
    115deg,
    transparent 20%,
    rgba(255, 255, 255, 0.18) 38%,
    rgba(255, 255, 255, 0.35) 50%,
    rgba(255, 255, 255, 0.18) 62%,
    transparent 80%
  );
  background-size: 250% 100%;
  animation: havocSheen 2.8s linear infinite;
}

@keyframes havocSheen {
  0% {
    background-position: 200% 0;
  }
  100% {
    background-position: -150% 0;
  }
}

/* Hover intensification */
.havoc-btn:hover {
  animation-duration: 1.4s;
}

.havoc-btn:hover .havoc-btn-sheen {
  animation-duration: 1.6s;
  background-size: 200% 100%;
}

/* Active press */
.havoc-btn:active {
  animation: none;
  transform: scale(0.96);
  box-shadow: 0 2px 10px rgba(239, 68, 68, 0.5), 0 0 14px rgba(249, 115, 22, 0.3);
}
.hover\\:border-slate-700:hover{
  --tw-border-opacity: 1;
  border-color: rgb(51 65 85 / var(--tw-border-opacity, 1));
}
.hover\\:bg-slate-700:hover{
  --tw-bg-opacity: 1;
  background-color: rgb(51 65 85 / var(--tw-bg-opacity, 1));
}
.hover\\:from-emerald-500:hover{
  --tw-gradient-from: #10b981 var(--tw-gradient-from-position);
  --tw-gradient-to: rgb(16 185 129 / 0) var(--tw-gradient-to-position);
  --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to);
}
.hover\\:from-red-500:hover{
  --tw-gradient-from: #ef4444 var(--tw-gradient-from-position);
  --tw-gradient-to: rgb(239 68 68 / 0) var(--tw-gradient-to-position);
  --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to);
}
.hover\\:via-rose-500:hover{
  --tw-gradient-to: rgb(244 63 94 / 0)  var(--tw-gradient-to-position);
  --tw-gradient-stops: var(--tw-gradient-from), #f43f5e var(--tw-gradient-via-position), var(--tw-gradient-to);
}
.hover\\:to-orange-400:hover{
  --tw-gradient-to: #fb923c var(--tw-gradient-to-position);
}
.hover\\:to-teal-500:hover{
  --tw-gradient-to: #14b8a6 var(--tw-gradient-to-position);
}
.hover\\:text-slate-300:hover{
  --tw-text-opacity: 1;
  color: rgb(203 213 225 / var(--tw-text-opacity, 1));
}
.hover\\:text-white:hover{
  --tw-text-opacity: 1;
  color: rgb(255 255 255 / var(--tw-text-opacity, 1));
}
.active\\:scale-\\[0\\.98\\]:active{
  --tw-scale-x: 0.98;
  --tw-scale-y: 0.98;
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}`,document.head.appendChild(w)})();var Fd={gravity:.25,repulsionForce:14,repulsionRadius:160,maxElements:35,soundEnabled:!0,intensityMultiplier:1,preset:"balanced"},ws={isActive:!1,totalElements:0,caughtElements:0,escapedElements:0,timeElapsed:0,isWon:!1},Md=()=>{let[w,D]=qt(ws),[h,se]=qt(Fd),[oe,hn]=qt("Current Webpage"),[Gn,nt]=qt(!0),[te,dt]=qt(null),[je,Pe]=qt(null),ft=Bi(async()=>{var I,O,W;try{let[J]=await chrome.tabs.query({active:!0,currentWindow:!0});if(!(J!=null&&J.id)){nt(!1);return}if(hn(J.title?J.title.length>28?J.title.substring(0,26)+"...":J.title:"Active Page"),(I=J.url)!=null&&I.startsWith("chrome://")||(O=J.url)!=null&&O.startsWith("edge://")||(W=J.url)!=null&&W.startsWith("https://chromewebstore.google.com")){Pe("NovaChaos cannot run on protected browser system pages."),nt(!1);return}chrome.tabs.sendMessage(J.id,{type:"CHAOS_GET_STATE"},ne=>{chrome.runtime.lastError?D(en=>({...en,isActive:!1})):ne!=null&&ne.state&&(D(ne.state),ne.config&&se(ne.config)),nt(!1)})}catch{nt(!1)}},[]);Hi(()=>{ft(),chrome.storage.local.get(["chaosBestTime","chaosConfig"],O=>{O.chaosBestTime&&dt(O.chaosBestTime),O.chaosConfig&&se(O.chaosConfig)});let I=setInterval(ft,800);return()=>clearInterval(I)},[ft]);let Qe=async(I,O)=>{Pe(null);try{let[W]=await chrome.tabs.query({active:!0,currentWindow:!0});if(!(W!=null&&W.id))return;chrome.tabs.sendMessage(W.id,{type:I,payload:O},J=>{chrome.runtime.lastError?chrome.scripting.executeScript({target:{tabId:W.id},files:["content.js"]},()=>{chrome.tabs.sendMessage(W.id,{type:I,payload:O},ne=>{ne!=null&&ne.state&&D(ne.state)})}):J!=null&&J.state&&D(J.state)})}catch(W){Pe(W.message||"Failed to interact with page.")}},me=()=>{w.isActive?(Qe("CHAOS_STOP"),D(I=>({...I,isActive:!1}))):(Qe("CHAOS_START",{config:h}),D(I=>({...I,isActive:!0,caughtElements:0})))},Lt=()=>{Qe("CHAOS_RESET"),D(ws)},Ee=I=>{let O={...h,preset:I};I==="balanced"?O={...O,gravity:.25,repulsionForce:14,repulsionRadius:160}:I==="zeroG"?O={...O,gravity:0,repulsionForce:18,repulsionRadius:200}:I==="hyperRepulsion"?O={...O,gravity:.35,repulsionForce:28,repulsionRadius:240}:I==="earthquake"&&(O={...O,gravity:.6,repulsionForce:10,repulsionRadius:120}),se(O),chrome.storage.local.set({chaosConfig:O}),w.isActive&&Qe("CHAOS_UPDATE_CONFIG",{config:O})},pt=(I,O)=>{let W={...h,[I]:O};se(W),chrome.storage.local.set({chaosConfig:W}),w.isActive&&Qe("CHAOS_UPDATE_CONFIG",{config:W})},Ft=I=>{let O=Math.floor(I/60),W=I%60;return`${O}:${W<10?"0":""}${W}`},Ye=w.totalElements>0?Math.round(w.caughtElements/w.totalElements*100):0;return k.createElement("div",{className:"w-[400px] min-h-[520px] bg-slate-950 text-slate-100 flex flex-col justify-between select-none overflow-hidden"},k.createElement("header",{className:"px-5 py-4 bg-slate-900/90 border-b border-slate-800/80 backdrop-blur flex items-center justify-between"},k.createElement("div",{className:"flex items-center space-x-2.5"},k.createElement("div",{className:"w-8 h-8 rounded-lg bg-gradient-to-tr from-red-500 via-orange-500 to-amber-400 flex items-center justify-center shadow-lg shadow-red-500/30 ring-1 ring-white/20"},k.createElement("svg",{className:"w-5 h-5 text-white",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",strokeWidth:2},k.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M13 10V3L4 14h7v7l9-11h-7z"}))),k.createElement("div",null,k.createElement("h1",{className:"text-base font-bold tracking-tight text-white flex items-center gap-1.5 font-sans"},"Nova",k.createElement("span",{className:"text-[10px] uppercase tracking-wider font-semibold px-1.5 py-0.5 rounded bg-amber-500/20 text-amber-300 border border-amber-500/30"},"Chaos")),k.createElement("p",{className:"text-[11px] text-slate-400 truncate max-w-[200px]",title:oe},oe))),k.createElement("div",{className:"flex items-center space-x-1.5"},k.createElement("span",{className:`w-2.5 h-2.5 rounded-full ${w.isActive?"bg-emerald-400 shadow-[0_0_8px_#34d399]":"bg-slate-600"}`}),k.createElement("span",{className:"text-[11px] font-medium text-slate-300"},w.isActive?"RUNNING":"IDLE"))),k.createElement("main",{className:"p-5 space-y-4 flex-1"},je&&k.createElement("div",{className:"p-3 bg-rose-950/70 border border-rose-800/50 rounded-xl text-rose-300 text-xs flex items-start space-x-2"},k.createElement("svg",{className:"w-4 h-4 text-rose-400 mt-0.5 shrink-0",fill:"currentColor",viewBox:"0 0 20 20"},k.createElement("path",{fillRule:"evenodd",d:"M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z",clipRule:"evenodd"})),k.createElement("span",null,je)),k.createElement("button",{onClick:me,disabled:Gn,className:`w-full py-4 px-6 rounded-2xl font-bold text-sm tracking-wide transition-all duration-200 transform active:scale-[0.98] shadow-xl flex items-center justify-center space-x-3 border relative overflow-hidden havoc-btn ${w.isActive?"bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 text-white border-emerald-400/30 shadow-emerald-950/40":"bg-gradient-to-r from-red-600 via-rose-600 to-orange-500 hover:from-red-500 hover:via-rose-500 hover:to-orange-400 text-white border-orange-400/50 shadow-red-950/50"}`},!w.isActive&&k.createElement("span",{className:"havoc-btn-sheen absolute inset-0 pointer-events-none"}),w.isActive?k.createElement(k.Fragment,null,k.createElement("svg",{className:"w-5 h-5 text-emerald-200",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},k.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2.5,d:"M5 13l4 4L19 7"})),k.createElement("span",null,"RESTORE & STABILIZE PAGE")):k.createElement(k.Fragment,null,k.createElement("svg",{className:"w-5 h-5 text-yellow-200 animate-spin",style:{animationDuration:"2s"},fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},k.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M13 10V3L4 14h7v7l9-11h-7z"})),k.createElement("span",null,"RELEASE THE HAVOC!"))),k.createElement("div",{className:"bg-slate-900/80 border border-slate-800 rounded-2xl p-4 space-y-3"},k.createElement("div",{className:"flex items-center justify-between text-xs text-slate-400"},k.createElement("span",{className:"font-semibold uppercase tracking-wider text-[11px] text-slate-300"},"Live Escape Metrics"),k.createElement("span",{className:"font-mono text-pink-400 font-bold"},w.isActive?Ft(w.timeElapsed):"0:00")),k.createElement("div",{className:"grid grid-cols-3 gap-2"},k.createElement("div",{className:"bg-slate-950/60 p-2.5 rounded-xl border border-slate-800/60 text-center"},k.createElement("p",{className:"text-[10px] text-slate-400 uppercase font-medium"},"Escaped"),k.createElement("p",{className:"text-lg font-bold font-mono text-pink-400"},w.isActive?w.escapedElements:"--")),k.createElement("div",{className:"bg-slate-950/60 p-2.5 rounded-xl border border-slate-800/60 text-center"},k.createElement("p",{className:"text-[10px] text-slate-400 uppercase font-medium"},"Caught"),k.createElement("p",{className:"text-lg font-bold font-mono text-emerald-400"},w.isActive?`${w.caughtElements}/${w.totalElements}`:"--")),k.createElement("div",{className:"bg-slate-950/60 p-2.5 rounded-xl border border-slate-800/60 text-center"},k.createElement("p",{className:"text-[10px] text-slate-400 uppercase font-medium"},"Best Record"),k.createElement("p",{className:"text-lg font-bold font-mono text-violet-400"},te!==null?Ft(te):"--"))),k.createElement("div",{className:"space-y-1.5"},k.createElement("div",{className:"flex justify-between text-[11px] text-slate-400"},k.createElement("span",null,"Restoration Progress"),k.createElement("span",{className:"font-mono text-slate-200"},Ye,"%")),k.createElement("div",{className:"w-full h-2 bg-slate-950 rounded-full overflow-hidden border border-slate-800"},k.createElement("div",{className:"h-full bg-gradient-to-r from-pink-500 via-indigo-500 to-emerald-400 transition-all duration-300",style:{width:`${Ye}%`}})))),k.createElement("div",{className:"bg-slate-900/60 border border-slate-800 rounded-2xl p-4 space-y-3"},k.createElement("div",{className:"flex items-center justify-between"},k.createElement("label",{className:"text-xs font-semibold text-slate-200 uppercase tracking-wider"},"Physics Preset"),k.createElement("div",{className:"flex items-center space-x-2"},k.createElement("span",{className:"text-[11px] text-slate-400"},"Audio Synth"),k.createElement("button",{type:"button",onClick:()=>pt("soundEnabled",!h.soundEnabled),className:`w-7 h-4 rounded-full transition-colors relative ${h.soundEnabled?"bg-pink-600":"bg-slate-700"}`},k.createElement("div",{className:`w-3 h-3 rounded-full bg-white transition-transform transform absolute top-0.5 ${h.soundEnabled?"translate-x-3.5":"translate-x-0.5"}`})))),k.createElement("div",{className:"grid grid-cols-2 gap-2"},[{id:"balanced",label:"Classic Bounce",desc:"Normal gravity & cursor dodge"},{id:"zeroG",label:"Zero-G Space",desc:"Floating cosmic web elements"},{id:"hyperRepulsion",label:"Hyper Flee",desc:"Ultra-fast cursor evasion"},{id:"earthquake",label:"Heavy Fall",desc:"High gravity drop & slide"}].map(I=>k.createElement("button",{key:I.id,onClick:()=>Ee(I.id),className:`p-2.5 rounded-xl border text-left transition-all ${h.preset===I.id?"bg-pink-500/10 border-pink-500/50 text-pink-200":"bg-slate-950/40 border-slate-800 text-slate-400 hover:border-slate-700 hover:text-slate-300"}`},k.createElement("p",{className:"text-xs font-bold leading-tight"},I.label),k.createElement("p",{className:"text-[10px] text-slate-500 mt-0.5"},I.desc)))),k.createElement("div",{className:"space-y-2 pt-1 border-t border-slate-800/60 text-xs"},k.createElement("div",{className:"flex justify-between items-center text-slate-400 text-[11px]"},k.createElement("span",null,"Cursor Repulsion Force"),k.createElement("span",{className:"font-mono text-slate-300"},h.repulsionForce,"x")),k.createElement("input",{type:"range",min:"5",max:"35",step:"1",value:h.repulsionForce,onChange:I=>pt("repulsionForce",parseFloat(I.target.value)),className:"w-full accent-pink-500 h-1.5 bg-slate-950 rounded-lg cursor-pointer"})))),k.createElement("footer",{className:"p-4 bg-slate-900/90 border-t border-slate-800 flex items-center justify-between text-xs"},k.createElement("button",{onClick:Lt,className:"px-3.5 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white transition font-medium flex items-center space-x-1.5"},k.createElement("svg",{className:"w-3.5 h-3.5",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},k.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"})),k.createElement("span",null,"Reset Page")),k.createElement("div",{className:"text-[10px] text-slate-500 font-medium"},"Drag elements to original ghost slots")))},xs=Md;var ks=document.getElementById("root");ks&&ys(ks).render(k.createElement(k.StrictMode,null,k.createElement(xs,null)));})();
/**
* @license React
* react.production.min.js
*
* Copyright (c) Facebook, Inc. and its affiliates.
*
* This source code is licensed under the MIT license found in the
* LICENSE file in the root directory of this source tree.
*/
/**
* @license React
* react-dom.production.min.js
*
* Copyright (c) Facebook, Inc. and its affiliates.
*
* This source code is licensed under the MIT license found in the
* LICENSE file in the root directory of this source tree.
*/
