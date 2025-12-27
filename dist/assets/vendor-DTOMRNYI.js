var e,t,n,r,a,l,o={exports:{}},i={},u=(t||(t=1,o.exports=function(){if(e)return i
e=1
var t=Symbol.for("react.transitional.element"),n=Symbol.for("react.fragment")
function r(e,n,r){var a=null
if(void 0!==r&&(a=""+r),void 0!==n.key&&(a=""+n.key),"key"in n)for(var l in r={},n)"key"!==l&&(r[l]=n[l])
else r=n
return n=r.ref,{$$typeof:t,type:e,key:a,ref:void 0!==n?n:null,props:r}}return i.Fragment=n,i.jsx=r,i.jsxs=r,i}()),o.exports),s={exports:{}},c={},f={exports:{}},d={},p={exports:{}},h={}
function m(){if(a)return h
a=1
var e=Symbol.for("react.transitional.element"),t=Symbol.for("react.portal"),n=Symbol.for("react.fragment"),r=Symbol.for("react.strict_mode"),l=Symbol.for("react.profiler"),o=Symbol.for("react.consumer"),i=Symbol.for("react.context"),u=Symbol.for("react.forward_ref"),s=Symbol.for("react.suspense"),c=Symbol.for("react.memo"),f=Symbol.for("react.lazy"),d=Symbol.iterator,p={isMounted:function(){return 0},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},m=Object.assign,g={}
function y(e,t,n){this.props=e,this.context=t,this.refs=g,this.updater=n||p}function v(){}function b(e,t,n){this.props=e,this.context=t,this.refs=g,this.updater=n||p}y.prototype.isReactComponent={},y.prototype.setState=function(e,t){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error("takes an object of state variables to update or a function which returns an object of state variables.")
this.updater.enqueueSetState(this,e,t,"setState")},y.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},v.prototype=y.prototype
var k=b.prototype=new v
k.constructor=b,m(k,y.prototype),k.isPureReactComponent=1
var w=Array.isArray,S={H:null,A:null,T:null,S:null,V:null},E={}.hasOwnProperty
function x(t,n,r,a,l,o){return r=o.ref,{$$typeof:e,type:t,key:n,ref:void 0!==r?r:null,props:o}}function C(t){return"object"==typeof t&&null!==t&&t.$$typeof===e}var P=/\/+/g
function _(e,t){return"object"==typeof e&&null!==e&&null!=e.key?(n=""+e.key,r={"=":"=0",":":"=2"},"$"+n.replace(/[=:]/g,function(e){return r[e]})):t.toString(36)
var n,r}function N(){}function z(n,r,a,l,o){var i=typeof n
"undefined"!==i&&"boolean"!==i||(n=null)
var u,s,c=0
if(null===n)c=1
else switch(i){case"bigint":case"string":case"number":c=1
break
case"object":switch(n.$$typeof){case e:case t:c=1
break
case f:return z((c=n._init)(n._payload),r,a,l,o)}}if(c)return o=o(n),c=""===l?"."+_(n,0):l,w(o)?(a="",null!=c&&(a=c.replace(P,"$&/")+"/"),z(o,r,a,"",function(e){return e})):null!=o&&(C(o)&&(u=o,s=a+(null==o.key||n&&n.key===o.key?"":(""+o.key).replace(P,"$&/")+"/")+c,o=x(u.type,s,void 0,0,0,u.props)),r.push(o)),1
c=0
var p,h=""===l?".":l+":"
if(w(n))for(var m=0;m<n.length;m++)c+=z(l=n[m],r,a,i=h+_(l,m),o)
else if("function"==typeof(m=null===(p=n)||"object"!=typeof p?null:"function"==typeof(p=d&&p[d]||p["@@iterator"])?p:null))for(n=m.call(n),m=0;!(l=n.next()).done;)c+=z(l=l.value,r,a,i=h+_(l,m++),o)
else if("object"===i){if("function"==typeof n.then)return z(function(e){switch(e.status){case"fulfilled":return e.value
case"rejected":throw e.reason
default:switch("string"==typeof e.status?e.then(N,N):(e.status="pending",e.then(function(t){"pending"===e.status&&(e.status="fulfilled",e.value=t)},function(t){"pending"===e.status&&(e.status="rejected",e.reason=t)})),e.status){case"fulfilled":return e.value
case"rejected":throw e.reason}}throw e}(n),r,a,l,o)
throw Error("Objects are not valid as a React child (found: "+("[object Object]"==(r=n+"")?"object with keys {"+Object.keys(n).join(", ")+"}":r)+"). If you meant to render a collection of children, use an array instead.")}return c}function T(e,t,n){if(null==e)return e
var r=[],a=0
return z(e,r,"","",function(e){return t.call(n,e,a++)}),r}function L(e){if(-1===e._status){var t=e._result;(t=t()).then(function(t){0!==e._status&&-1!==e._status||(e._status=1,e._result=t)},function(t){0!==e._status&&-1!==e._status||(e._status=2,e._result=t)}),-1===e._status&&(e._status=0,e._result=t)}if(1===e._status)return e._result.default
throw e._result}var R="function"==typeof reportError?reportError:function(e){if("object"==typeof window&&"function"==typeof window.ErrorEvent){var t=new window.ErrorEvent("error",{bubbles:1,cancelable:1,message:"object"==typeof e&&null!==e&&"string"==typeof e.message?e.message+"":e+"",error:e})
if(!window.dispatchEvent(t))return}else if("object"==typeof process&&"function"==typeof process.emit)return void process.emit("uncaughtException",e)}
function O(){}return h.Children={map:T,forEach:function(e,t,n){T(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0
return T(e,function(){t++}),t},toArray:function(e){return T(e,function(e){return e})||[]},only:function(e){if(!C(e))throw Error("React.Children.only expected to receive a single React element child.")
return e}},h.Component=y,h.Fragment=n,h.Profiler=l,h.PureComponent=b,h.StrictMode=r,h.Suspense=s,h.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=S,h.__COMPILER_RUNTIME={__proto__:null,c:function(e){return S.H.useMemoCache(e)}},h.cache=function(e){return function(){return e.apply(null,arguments)}},h.cloneElement=function(e,t,n){if(null==e)throw Error("The argument must be a React element, but you passed "+e+".")
var r=m({},e.props),a=e.key
if(null!=t)for(l in t.ref,void 0!==t.key&&(a=""+t.key),t)!E.call(t,l)||"key"===l||"__self"===l||"__source"===l||"ref"===l&&void 0===t.ref||(r[l]=t[l])
var l=arguments.length-2
if(1===l)r.children=n
else if(l>1){for(var o=Array(l),i=0;l>i;i++)o[i]=arguments[i+2]
r.children=o}return x(e.type,a,void 0,0,0,r)},h.createContext=function(e){return(e={$$typeof:i,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null}).Provider=e,e.Consumer={$$typeof:o,_context:e},e},h.createElement=function(e,t,n){var r,a={},l=null
if(null!=t)for(r in void 0!==t.key&&(l=""+t.key),t)E.call(t,r)&&"key"!==r&&"__self"!==r&&"__source"!==r&&(a[r]=t[r])
var o=arguments.length-2
if(1===o)a.children=n
else if(o>1){for(var i=Array(o),u=0;o>u;u++)i[u]=arguments[u+2]
a.children=i}if(e&&e.defaultProps)for(r in o=e.defaultProps)void 0===a[r]&&(a[r]=o[r])
return x(e,l,void 0,0,0,a)},h.createRef=function(){return{current:null}},h.forwardRef=function(e){return{$$typeof:u,render:e}},h.isValidElement=C,h.lazy=function(e){return{$$typeof:f,_payload:{_status:-1,_result:e},_init:L}},h.memo=function(e,t){return{$$typeof:c,type:e,compare:void 0===t?null:t}},h.startTransition=function(e){var t=S.T,n={}
S.T=n
try{var r=e(),a=S.S
null!==a&&a(n,r),"object"==typeof r&&null!==r&&"function"==typeof r.then&&r.then(O,R)}catch(l){R(l)}finally{S.T=t}},h.unstable_useCacheRefresh=function(){return S.H.useCacheRefresh()},h.use=function(e){return S.H.use(e)},h.useActionState=function(e,t,n){return S.H.useActionState(e,t,n)},h.useCallback=function(e,t){return S.H.useCallback(e,t)},h.useContext=function(e){return S.H.useContext(e)},h.useDebugValue=function(){},h.useDeferredValue=function(e,t){return S.H.useDeferredValue(e,t)},h.useEffect=function(e,t,n){var r=S.H
if("function"==typeof n)throw Error("useEffect CRUD overload is not enabled in this build of React.")
return r.useEffect(e,t)},h.useId=function(){return S.H.useId()},h.useImperativeHandle=function(e,t,n){return S.H.useImperativeHandle(e,t,n)},h.useInsertionEffect=function(e,t){return S.H.useInsertionEffect(e,t)},h.useLayoutEffect=function(e,t){return S.H.useLayoutEffect(e,t)},h.useMemo=function(e,t){return S.H.useMemo(e,t)},h.useOptimistic=function(e,t){return S.H.useOptimistic(e,t)},h.useReducer=function(e,t,n){return S.H.useReducer(e,t,n)},h.useRef=function(e){return S.H.useRef(e)},h.useState=function(e){return S.H.useState(e)},h.useSyncExternalStore=function(e,t,n){return S.H.useSyncExternalStore(e,t,n)},h.useTransition=function(){return S.H.useTransition()},h.version="19.1.0",h}function g(){return l||(l=1,p.exports=m()),p.exports}var y,v,b,k,w={exports:{}},S={}
function E(){return v||(v=1,function e(){if("undefined"!=typeof __REACT_DEVTOOLS_GLOBAL_HOOK__&&"function"==typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE)try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(e)}catch(t){}}(),w.exports=function(){if(y)return S
y=1
var e=g()
function t(e){var t="https://react.dev/errors/"+e
if(arguments.length>1){t+="?args[]="+encodeURIComponent(arguments[1])
for(var n=2;arguments.length>n;n++)t+="&args[]="+encodeURIComponent(arguments[n])}return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function n(){}var r={d:{f:n,r:function(){throw Error(t(522))},D:n,C:n,L:n,m:n,X:n,S:n,M:n},p:0,findDOMNode:null},a=Symbol.for("react.portal"),l=e.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE
function o(e,t){return"font"===e?"":"string"==typeof t?"use-credentials"===t?t:"":void 0}return S.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=r,S.createPortal=function(e,n){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null
if(!n||1!==n.nodeType&&9!==n.nodeType&&11!==n.nodeType)throw Error(t(299))
return function(e,t,n){var r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:null
return{$$typeof:a,key:null==r?null:""+r,children:e,containerInfo:t,implementation:n}}(e,n,null,r)},S.flushSync=function(e){var t=l.T,n=r.p
try{if(l.T=null,r.p=2,e)return e()}finally{l.T=t,r.p=n,r.d.f()}},S.preconnect=function(e,t){"string"==typeof e&&(t=t?"string"==typeof(t=t.crossOrigin)?"use-credentials"===t?t:"":void 0:null,r.d.C(e,t))},S.prefetchDNS=function(e){"string"==typeof e&&r.d.D(e)},S.preinit=function(e,t){if("string"==typeof e&&t&&"string"==typeof t.as){var n=t.as,a=o(n,t.crossOrigin),l="string"==typeof t.integrity?t.integrity:void 0,i="string"==typeof t.fetchPriority?t.fetchPriority:void 0
"style"===n?r.d.S(e,"string"==typeof t.precedence?t.precedence:void 0,{crossOrigin:a,integrity:l,fetchPriority:i}):"script"===n&&r.d.X(e,{crossOrigin:a,integrity:l,fetchPriority:i,nonce:"string"==typeof t.nonce?t.nonce:void 0})}},S.preinitModule=function(e,t){if("string"==typeof e)if("object"==typeof t&&null!==t){if(null==t.as||"script"===t.as){var n=o(t.as,t.crossOrigin)
r.d.M(e,{crossOrigin:n,integrity:"string"==typeof t.integrity?t.integrity:void 0,nonce:"string"==typeof t.nonce?t.nonce:void 0})}}else null==t&&r.d.M(e)},S.preload=function(e,t){if("string"==typeof e&&"object"==typeof t&&null!==t&&"string"==typeof t.as){var n=t.as,a=o(n,t.crossOrigin)
r.d.L(e,n,{crossOrigin:a,integrity:"string"==typeof t.integrity?t.integrity:void 0,nonce:"string"==typeof t.nonce?t.nonce:void 0,type:"string"==typeof t.type?t.type:void 0,fetchPriority:"string"==typeof t.fetchPriority?t.fetchPriority:void 0,referrerPolicy:"string"==typeof t.referrerPolicy?t.referrerPolicy:void 0,imageSrcSet:"string"==typeof t.imageSrcSet?t.imageSrcSet:void 0,imageSizes:"string"==typeof t.imageSizes?t.imageSizes:void 0,media:"string"==typeof t.media?t.media:void 0})}},S.preloadModule=function(e,t){if("string"==typeof e)if(t){var n=o(t.as,t.crossOrigin)
r.d.m(e,{as:"string"==typeof t.as&&"script"!==t.as?t.as:void 0,crossOrigin:n,integrity:"string"==typeof t.integrity?t.integrity:void 0})}else r.d.m(e)},S.requestFormReset=function(e){r.d.r(e)},S.unstable_batchedUpdates=function(e,t){return e(t)},S.useFormState=function(e,t,n){return l.H.useFormState(e,t,n)},S.useFormStatus=function(){return l.H.useHostTransitionStatus()},S.version="19.1.0",S}()),w.exports}var x=(k||(k=1,function e(){if("undefined"!=typeof __REACT_DEVTOOLS_GLOBAL_HOOK__&&"function"==typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE)try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(e)}catch(t){}}(),s.exports=function(){if(b)return c
b=1
var e=(r||(r=1,f.exports=(n||(n=1,function(e){function t(e,t){var n=e.length
e.push(t)
e:for(;n>0;){var r=n-1>>>1,l=e[r]
if(0>=a(l,t))break e
e[r]=t,e[n]=l,n=r}}function n(e){return 0===e.length?null:e[0]}function r(e){if(0===e.length)return null
var t=e[0],n=e.pop()
if(n!==t){e[0]=n
e:for(var r=0,l=e.length,o=l>>>1;o>r;){var i=2*(r+1)-1,u=e[i],s=i+1,c=e[s]
if(0>a(u,n))l>s&&0>a(c,u)?(e[r]=c,e[s]=n,r=s):(e[r]=u,e[i]=n,r=i)
else{if(s>=l||a(c,n)>=0)break e
e[r]=c,e[s]=n,r=s}}}return t}function a(e,t){var n=e.sortIndex-t.sortIndex
return 0!==n?n:e.id-t.id}if(e.unstable_now=void 0,"object"==typeof performance&&"function"==typeof performance.now){var l=performance
e.unstable_now=function(){return l.now()}}else{var o=Date,i=o.now()
e.unstable_now=function(){return o.now()-i}}var u=[],s=[],c=1,f=null,d=3,p=0,h=0,m=0,g=0,y="function"==typeof setTimeout?setTimeout:null,v="function"==typeof clearTimeout?clearTimeout:null,b="undefined"!=typeof setImmediate?setImmediate:null
function k(e){for(var a=n(s);null!==a;){if(null===a.callback)r(s)
else{if(a.startTime>e)break
r(s),a.sortIndex=a.expirationTime,t(u,a)}a=n(s)}}function w(e){if(m=0,k(e),!h)if(null!==n(u))h=1,E||(E=1,S())
else{var t=n(s)
null!==t&&L(w,t.startTime-e)}}var S,E=0,x=-1,C=5,P=-1
function _(){return g?1:e.unstable_now()-P<C?0:1}function N(){if(g=0,E){var t=e.unstable_now()
P=t
var a=1
try{e:{h=0,m&&(m=0,v(x),x=-1),p=1
var l=d
try{t:{for(k(t),f=n(u);!(null===f||f.expirationTime>t&&_());){var o=f.callback
if("function"==typeof o){f.callback=null,d=f.priorityLevel
var i=o(f.expirationTime<=t)
if(t=e.unstable_now(),"function"==typeof i){f.callback=i,k(t),a=1
break t}f===n(u)&&r(u),k(t)}else r(u)
f=n(u)}if(null!==f)a=1
else{var c=n(s)
null!==c&&L(w,c.startTime-t),a=0}}break e}finally{f=null,d=l,p=0}a=void 0}}finally{a?S():E=0}}}if("function"==typeof b)S=function(){b(N)}
else if("undefined"!=typeof MessageChannel){var z=new MessageChannel,T=z.port2
z.port1.onmessage=N,S=function(){T.postMessage(null)}}else S=function(){y(N,0)}
function L(t,n){x=y(function(){t(e.unstable_now())},n)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(e){e.callback=null},e.unstable_forceFrameRate=function(e){0>e||e>125||(C=e>0?Math.floor(1e3/e):5)},e.unstable_getCurrentPriorityLevel=function(){return d},e.unstable_next=function(e){switch(d){case 1:case 2:case 3:var t=3
break
default:t=d}var n=d
d=t
try{return e()}finally{d=n}},e.unstable_requestPaint=function(){g=1},e.unstable_runWithPriority=function(e,t){switch(e){case 1:case 2:case 3:case 4:case 5:break
default:e=3}var n=d
d=e
try{return t()}finally{d=n}},e.unstable_scheduleCallback=function(r,a,l){var o=e.unstable_now()
switch(l="object"==typeof l&&null!==l&&"number"==typeof(l=l.delay)&&l>0?o+l:o,r){case 1:var i=-1
break
case 2:i=250
break
case 5:i=1073741823
break
case 4:i=1e4
break
default:i=5e3}return r={id:c++,callback:a,priorityLevel:r,startTime:l,expirationTime:i=l+i,sortIndex:-1},l>o?(r.sortIndex=l,t(s,r),null===n(u)&&r===n(s)&&(m?(v(x),x=-1):m=1,L(w,l-o))):(r.sortIndex=i,t(u,r),h||p||(h=1,E||(E=1,S()))),r},e.unstable_shouldYield=_,e.unstable_wrapCallback=function(e){var t=d
return function(){var n=d
d=t
try{return e.apply(this,arguments)}finally{d=n}}}}(d)),d)),f.exports),t=g(),a=E()
function l(e){var t="https://react.dev/errors/"+e
if(arguments.length>1){t+="?args[]="+encodeURIComponent(arguments[1])
for(var n=2;arguments.length>n;n++)t+="&args[]="+encodeURIComponent(arguments[n])}return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function o(e){return!(!e||1!==e.nodeType&&9!==e.nodeType&&11!==e.nodeType)}function i(e){var t=e,n=e
if(e.alternate)for(;t.return;)t=t.return
else{e=t
do{!!(4098&(t=e).flags)&&(n=t.return),e=t.return}while(e)}return 3===t.tag?n:null}function u(e){if(13===e.tag){var t=e.memoizedState
if(null===t&&null!==(e=e.alternate)&&(t=e.memoizedState),null!==t)return t.dehydrated}return null}function s(e){if(i(e)!==e)throw Error(l(188))}function p(e){var t=e.tag
if(5===t||26===t||27===t||6===t)return e
for(e=e.child;null!==e;){if(null!==(t=p(e)))return t
e=e.sibling}return null}var h=Object.assign,m=Symbol.for("react.element"),y=Symbol.for("react.transitional.element"),v=Symbol.for("react.portal"),k=Symbol.for("react.fragment"),w=Symbol.for("react.strict_mode"),S=Symbol.for("react.profiler"),x=Symbol.for("react.provider"),C=Symbol.for("react.consumer"),P=Symbol.for("react.context"),_=Symbol.for("react.forward_ref"),N=Symbol.for("react.suspense"),z=Symbol.for("react.suspense_list"),T=Symbol.for("react.memo"),L=Symbol.for("react.lazy"),R=Symbol.for("react.activity"),O=Symbol.for("react.memo_cache_sentinel"),D=Symbol.iterator
function A(e){return null===e||"object"!=typeof e?null:"function"==typeof(e=D&&e[D]||e["@@iterator"])?e:null}var F=Symbol.for("react.client.reference")
function M(e){if(null==e)return null
if("function"==typeof e)return e.$$typeof===F?null:e.displayName||e.name||null
if("string"==typeof e)return e
switch(e){case k:return"Fragment"
case S:return"Profiler"
case w:return"StrictMode"
case N:return"Suspense"
case z:return"SuspenseList"
case R:return"Activity"}if("object"==typeof e)switch(e.$$typeof){case v:return"Portal"
case P:return(e.displayName||"Context")+".Provider"
case C:return(e._context.displayName||"Context")+".Consumer"
case _:var t=e.render
return(e=e.displayName)||(e=""!==(e=t.displayName||t.name||"")?"ForwardRef("+e+")":"ForwardRef"),e
case T:return null!==(t=e.displayName||null)?t:M(e.type)||"Memo"
case L:t=e._payload,e=e._init
try{return M(e(t))}catch(n){}}return null}var $=Array.isArray,I=t.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,U=a.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,j={pending:0,data:null,method:null,action:null},H=[],B=-1
function W(e){return{current:e}}function V(e){0>B||(e.current=H[B],H[B]=null,B--)}function Q(e,t){B++,H[B]=e.current,e.current=t}var q=W(null),K=W(null),Y=W(null),G=W(null)
function X(e,t){switch(Q(Y,t),Q(K,e),Q(q,null),t.nodeType){case 9:case 11:e=(e=t.documentElement)&&(e=e.namespaceURI)?cf(e):0
break
default:if(e=t.tagName,t=t.namespaceURI)e=ff(t=cf(t),e)
else switch(e){case"svg":e=1
break
case"math":e=2
break
default:e=0}}V(q),Q(q,e)}function J(){V(q),V(K),V(Y)}function Z(e){null!==e.memoizedState&&Q(G,e)
var t=q.current,n=ff(t,e.type)
t!==n&&(Q(K,e),Q(q,n))}function ee(e){K.current===e&&(V(q),V(K)),G.current===e&&(V(G),ed._currentValue=j)}var te={}.hasOwnProperty,ne=e.unstable_scheduleCallback,re=e.unstable_cancelCallback,ae=e.unstable_shouldYield,le=e.unstable_requestPaint,oe=e.unstable_now,ie=e.unstable_getCurrentPriorityLevel,ue=e.unstable_ImmediatePriority,se=e.unstable_UserBlockingPriority,ce=e.unstable_NormalPriority,fe=e.unstable_LowPriority,de=e.unstable_IdlePriority,pe=e.log,he=e.unstable_setDisableYieldValue,me=null,ge=null
function ye(e){if("function"==typeof pe&&he(e),ge&&"function"==typeof ge.setStrictMode)try{ge.setStrictMode(me,e)}catch(t){}}var ve=Math.clz32?Math.clz32:function(e){return 0==(e>>>=0)?32:31-(be(e)/ke|0)|0},be=Math.log,ke=Math.LN2,we=256,Se=4194304
function Ee(e){var t=42&e
if(0!==t)return t
switch(e&-e){case 1:return 1
case 2:return 2
case 4:return 4
case 8:return 8
case 16:return 16
case 32:return 32
case 64:return 64
case 128:return 128
case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return 4194048&e
case 4194304:case 8388608:case 16777216:case 33554432:return 62914560&e
case 67108864:return 67108864
case 134217728:return 134217728
case 268435456:return 268435456
case 536870912:return 536870912
case 1073741824:return 0
default:return e}}function xe(e,t,n){var r=e.pendingLanes
if(0===r)return 0
var a=0,l=e.suspendedLanes,o=e.pingedLanes
e=e.warmLanes
var i=134217727&r
return 0!==i?0!==(r=i&~l)?a=Ee(r):0!==(o&=i)?a=Ee(o):n||0!==(n=i&~e)&&(a=Ee(n)):0!==(i=r&~l)?a=Ee(i):0!==o?a=Ee(o):n||0!==(n=r&~e)&&(a=Ee(n)),0===a?0:0!==t&&t!==a&&0===(t&l)&&((l=a&-a)>=(n=t&-t)||32===l&&4194048&n)?t:a}function Ce(e,t){return 0===(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&t)}function Pe(e,t){switch(e){case 1:case 2:case 4:case 8:case 64:return t+250
case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3
default:return-1}}function _e(){var e=we
return!(4194048&(we<<=1))&&(we=256),e}function Ne(){var e=Se
return!(62914560&(Se<<=1))&&(Se=4194304),e}function ze(e){for(var t=[],n=0;31>n;n++)t.push(e)
return t}function Te(e,t){e.pendingLanes|=t,268435456!==t&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function Le(e,t,n){e.pendingLanes|=t,e.suspendedLanes&=~t
var r=31-ve(t)
e.entangledLanes|=t,e.entanglements[r]=1073741824|e.entanglements[r]|4194090&n}function Re(e,t){var n=e.entangledLanes|=t
for(e=e.entanglements;n;){var r=31-ve(n),a=1<<r
a&t|e[r]&t&&(e[r]|=t),n&=~a}}function Oe(e){switch(e){case 2:e=1
break
case 8:e=4
break
case 32:e=16
break
case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128
break
case 268435456:e=134217728
break
default:e=0}return e}function De(e){return(e&=-e)>2?e>8?134217727&e?32:268435456:8:2}function Ae(){var e=U.p
return 0!==e?e:void 0===(e=window.event)?32:md(e.type)}var Fe=Math.random().toString(36).slice(2),Me="__reactFiber$"+Fe,$e="__reactProps$"+Fe,Ie="__reactContainer$"+Fe,Ue="__reactEvents$"+Fe,je="__reactListeners$"+Fe,He="__reactHandles$"+Fe,Be="__reactResources$"+Fe,We="__reactMarker$"+Fe
function Ve(e){delete e[Me],delete e[$e],delete e[Ue],delete e[je],delete e[He]}function Qe(e){var t=e[Me]
if(t)return t
for(var n=e.parentNode;n;){if(t=n[Ie]||n[Me]){if(n=t.alternate,null!==t.child||null!==n&&null!==n.child)for(e=Cf(e);null!==e;){if(n=e[Me])return n
e=Cf(e)}return t}n=(e=n).parentNode}return null}function qe(e){if(e=e[Me]||e[Ie]){var t=e.tag
if(5===t||6===t||13===t||26===t||27===t||3===t)return e}return null}function Ke(e){var t=e.tag
if(5===t||26===t||27===t||6===t)return e.stateNode
throw Error(l(33))}function Ye(e){var t=e[Be]
return t||(t=e[Be]={hoistableStyles:new Map,hoistableScripts:new Map}),t}function Ge(e){e[We]=1}var Xe=new Set,Je={}
function Ze(e,t){et(e,t),et(e+"Capture",t)}function et(e,t){for(Je[e]=t,e=0;e<t.length;e++)Xe.add(t[e])}var tt,nt,rt=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),at={},lt={}
function ot(e,t,n){if(a=t,te.call(lt,a)||!te.call(at,a)&&(rt.test(a)?lt[a]=1:(at[a]=1,0)))if(null===n)e.removeAttribute(t)
else{switch(typeof n){case"undefined":case"function":case"symbol":return void e.removeAttribute(t)
case"boolean":var r=t.toLowerCase().slice(0,5)
if("data-"!==r&&"aria-"!==r)return void e.removeAttribute(t)}e.setAttribute(t,""+n)}var a}function it(e,t,n){if(null===n)e.removeAttribute(t)
else{switch(typeof n){case"undefined":case"function":case"symbol":case"boolean":return void e.removeAttribute(t)}e.setAttribute(t,""+n)}}function ut(e,t,n,r){if(null===r)e.removeAttribute(n)
else{switch(typeof r){case"undefined":case"function":case"symbol":case"boolean":return void e.removeAttribute(n)}e.setAttributeNS(t,n,""+r)}}function st(e){if(void 0===tt)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/)
tt=t&&t[1]||"",nt=n.stack.indexOf("\n    at")>-1?" (<anonymous>)":n.stack.indexOf("@")>-1?"@unknown:0:0":""}return"\n"+tt+e+nt}var ct=0
function ft(e,t){if(!e||ct)return""
ct=1
var n=Error.prepareStackTrace
Error.prepareStackTrace=void 0
try{var r={DetermineComponentFrameRoot:function(){try{if(t){var n=function(){throw Error()}
if(Object.defineProperty(n.prototype,"props",{set:function(){throw Error()}}),"object"==typeof Reflect&&Reflect.construct){try{Reflect.construct(n,[])}catch(a){var r=a}Reflect.construct(e,[],n)}else{try{n.call()}catch(l){r=l}e.call(n.prototype)}}else{try{throw Error()}catch(o){r=o}(n=e())&&"function"==typeof n.catch&&n.catch(function(){})}}catch(i){if(i&&r&&"string"==typeof i.stack)return[i.stack,r.stack]}return[null,null]}}
r.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot"
var a=Object.getOwnPropertyDescriptor(r.DetermineComponentFrameRoot,"name")
a&&a.configurable&&Object.defineProperty(r.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"})
var l=r.DetermineComponentFrameRoot(),o=l[0],i=l[1]
if(o&&i){var u=o.split("\n"),s=i.split("\n")
for(a=r=0;r<u.length&&!u[r].includes("DetermineComponentFrameRoot");)r++
for(;a<s.length&&!s[a].includes("DetermineComponentFrameRoot");)a++
if(r===u.length||a===s.length)for(r=u.length-1,a=s.length-1;r>=1&&a>=0&&u[r]!==s[a];)a--
for(;r>=1&&a>=0;r--,a--)if(u[r]!==s[a]){if(1!==r||1!==a)do{if(r--,0>--a||u[r]!==s[a]){var c="\n"+u[r].replace(" at new "," at ")
return e.displayName&&c.includes("<anonymous>")&&(c=c.replace("<anonymous>",e.displayName)),c}}while(r>=1&&a>=0)
break}}}finally{ct=0,Error.prepareStackTrace=n}return(n=e?e.displayName||e.name:"")?st(n):""}function dt(e){switch(e.tag){case 26:case 27:case 5:return st(e.type)
case 16:return st("Lazy")
case 13:return st("Suspense")
case 19:return st("SuspenseList")
case 0:case 15:return ft(e.type,0)
case 11:return ft(e.type.render,0)
case 1:return ft(e.type,1)
case 31:return st("Activity")
default:return""}}function pt(e){try{var t=""
do{t+=dt(e),e=e.return}while(e)
return t}catch(n){return"\nError generating stack: "+n.message+"\n"+n.stack}}function ht(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":case"object":return e
default:return""}}function mt(e){var t=e.type
return(e=e.nodeName)&&"input"===e.toLowerCase()&&("checkbox"===t||"radio"===t)}function gt(e){e._valueTracker||(e._valueTracker=function(e){var t=mt(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t]
if(!e.hasOwnProperty(t)&&void 0!==n&&"function"==typeof n.get&&"function"==typeof n.set){var a=n.get,l=n.set
return Object.defineProperty(e,t,{configurable:1,get:function(){return a.call(this)},set:function(e){r=""+e,l.call(this,e)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(e){r=""+e},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}(e))}function yt(e){if(!e)return 0
var t=e._valueTracker
if(!t)return 1
var n=t.getValue(),r=""
return e&&(r=mt(e)?e.checked?"true":"false":e.value),(e=r)!==n?(t.setValue(e),1):0}function vt(e){if(void 0===(e=e||("undefined"!=typeof document?document:void 0)))return null
try{return e.activeElement||e.body}catch(t){return e.body}}var bt=/[\n"\\]/g
function kt(e){return e.replace(bt,function(e){return"\\"+e.charCodeAt(0).toString(16)+" "})}function wt(e,t,n,r,a,l,o,i){e.name="",null!=o&&"function"!=typeof o&&"symbol"!=typeof o&&"boolean"!=typeof o?e.type=o:e.removeAttribute("type"),null!=t?"number"===o?(0===t&&""===e.value||e.value!=t)&&(e.value=""+ht(t)):e.value!==""+ht(t)&&(e.value=""+ht(t)):"submit"!==o&&"reset"!==o||e.removeAttribute("value"),null!=t?Et(e,o,ht(t)):null!=n?Et(e,o,ht(n)):null!=r&&e.removeAttribute("value"),null==a&&null!=l&&(e.defaultChecked=!!l),null!=a&&(e.checked=a&&"function"!=typeof a&&"symbol"!=typeof a),null!=i&&"function"!=typeof i&&"symbol"!=typeof i&&"boolean"!=typeof i?e.name=""+ht(i):e.removeAttribute("name")}function St(e,t,n,r,a,l,o,i){if(null!=l&&"function"!=typeof l&&"symbol"!=typeof l&&"boolean"!=typeof l&&(e.type=l),null!=t||null!=n){if(("submit"===l||"reset"===l)&&null==t)return
n=null!=n?""+ht(n):"",t=null!=t?""+ht(t):n,i||t===e.value||(e.value=t),e.defaultValue=t}r="function"!=typeof(r=null!=r?r:a)&&"symbol"!=typeof r&&!!r,e.checked=i?e.checked:!!r,e.defaultChecked=!!r,null!=o&&"function"!=typeof o&&"symbol"!=typeof o&&"boolean"!=typeof o&&(e.name=o)}function Et(e,t,n){"number"===t&&vt(e.ownerDocument)===e||e.defaultValue===""+n||(e.defaultValue=""+n)}function xt(e,t,n,r){if(e=e.options,t){t={}
for(var a=0;a<n.length;a++)t["$"+n[a]]=1
for(n=0;n<e.length;n++)a=t.hasOwnProperty("$"+e[n].value),e[n].selected!==a&&(e[n].selected=a),a&&r&&(e[n].defaultSelected=1)}else{for(n=""+ht(n),t=null,a=0;a<e.length;a++){if(e[a].value===n)return e[a].selected=1,void(r&&(e[a].defaultSelected=1))
null!==t||e[a].disabled||(t=e[a])}null!==t&&(t.selected=1)}}function Ct(e,t,n){null==t||((t=""+ht(t))!==e.value&&(e.value=t),null!=n)?e.defaultValue=null!=n?""+ht(n):"":e.defaultValue!==t&&(e.defaultValue=t)}function Pt(e,t,n,r){if(null==t){if(null!=r){if(null!=n)throw Error(l(92))
if($(r)){if(r.length>1)throw Error(l(93))
r=r[0]}n=r}null==n&&(n=""),t=n}n=ht(t),e.defaultValue=n,(r=e.textContent)===n&&""!==r&&null!==r&&(e.value=r)}function _t(e,t){if(t){var n=e.firstChild
if(n&&n===e.lastChild&&3===n.nodeType)return void(n.nodeValue=t)}e.textContent=t}var Nt=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "))
function zt(e,t,n){var r=0===t.indexOf("--")
null==n||"boolean"==typeof n||""===n?r?e.setProperty(t,""):"float"===t?e.cssFloat="":e[t]="":r?e.setProperty(t,n):"number"!=typeof n||0===n||Nt.has(t)?"float"===t?e.cssFloat=n:e[t]=(""+n).trim():e[t]=n+"px"}function Tt(e,t,n){if(null!=t&&"object"!=typeof t)throw Error(l(62))
if(e=e.style,null!=n){for(var r in n)!n.hasOwnProperty(r)||null!=t&&t.hasOwnProperty(r)||(0===r.indexOf("--")?e.setProperty(r,""):"float"===r?e.cssFloat="":e[r]="")
for(var a in t)r=t[a],t.hasOwnProperty(a)&&n[a]!==r&&zt(e,a,r)}else for(var o in t)t.hasOwnProperty(o)&&zt(e,o,t[o])}function Lt(e){if(-1===e.indexOf("-"))return 0
switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return 0
default:return 1}}var Rt=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),Ot=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i
function Dt(e){return Ot.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}var At=null
function Ft(e){return(e=e.target||e.srcElement||window).correspondingUseElement&&(e=e.correspondingUseElement),3===e.nodeType?e.parentNode:e}var Mt=null,$t=null
function It(e){var t=qe(e)
if(t&&(e=t.stateNode)){var n=e[$e]||null
e:switch(e=t.stateNode,t.type){case"input":if(wt(e,n.value,n.defaultValue,n.defaultValue,n.checked,n.defaultChecked,n.type,n.name),t=n.name,"radio"===n.type&&null!=t){for(n=e;n.parentNode;)n=n.parentNode
for(n=n.querySelectorAll('input[name="'+kt(""+t)+'"][type="radio"]'),t=0;t<n.length;t++){var r=n[t]
if(r!==e&&r.form===e.form){var a=r[$e]||null
if(!a)throw Error(l(90))
wt(r,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name)}}for(t=0;t<n.length;t++)(r=n[t]).form===e.form&&yt(r)}break e
case"textarea":Ct(e,n.value,n.defaultValue)
break e
case"select":null!=(t=n.value)&&xt(e,!!n.multiple,t,0)}}}var Ut=0
function jt(e,t,n){if(Ut)return e(t,n)
Ut=1
try{return e(t)}finally{if(Ut=0,(null!==Mt||null!==$t)&&(Qs(),Mt&&(t=Mt,e=$t,$t=Mt=null,It(t),e)))for(t=0;t<e.length;t++)It(e[t])}}function Ht(e,t){var n=e.stateNode
if(null===n)return null
var r=n[$e]||null
if(null===r)return null
n=r[t]
e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(r=!("button"===(e=e.type)||"input"===e||"select"===e||"textarea"===e)),e=!r
break e
default:e=0}if(e)return null
if(n&&"function"!=typeof n)throw Error(l(231,t,typeof n))
return n}var Bt=!("undefined"==typeof window||void 0===window.document||void 0===window.document.createElement),Wt=0
if(Bt)try{var Vt={}
Object.defineProperty(Vt,"passive",{get:function(){Wt=1}}),window.addEventListener("test",Vt,Vt),window.removeEventListener("test",Vt,Vt)}catch(Id){Wt=0}var Qt=null,qt=null,Kt=null
function Yt(){if(Kt)return Kt
var e,t,n=qt,r=n.length,a="value"in Qt?Qt.value:Qt.textContent,l=a.length
for(e=0;r>e&&n[e]===a[e];e++);var o=r-e
for(t=1;o>=t&&n[r-t]===a[l-t];t++);return Kt=a.slice(e,t>1?1-t:void 0)}function Gt(e){var t=e.keyCode
return"charCode"in e?0===(e=e.charCode)&&13===t&&(e=13):e=t,10===e&&(e=13),32>e&&13!==e?0:e}function Xt(){return 1}function Jt(){return 0}function Zt(e){function t(t,n,r,a,l){for(var o in this._reactName=t,this._targetInst=r,this.type=n,this.nativeEvent=a,this.target=l,this.currentTarget=null,e)e.hasOwnProperty(o)&&(t=e[o],this[o]=t?t(a):a[o])
return this.isDefaultPrevented=(null!=a.defaultPrevented?a.defaultPrevented:0==a.returnValue)?Xt:Jt,this.isPropagationStopped=Jt,this}return h(t.prototype,{preventDefault:function(){this.defaultPrevented=1
var e=this.nativeEvent
e&&(e.preventDefault?e.preventDefault():"unknown"!=typeof e.returnValue&&(e.returnValue=0),this.isDefaultPrevented=Xt)},stopPropagation:function(){var e=this.nativeEvent
e&&(e.stopPropagation?e.stopPropagation():"unknown"!=typeof e.cancelBubble&&(e.cancelBubble=1),this.isPropagationStopped=Xt)},persist:function(){},isPersistent:Xt}),t}var en,tn,nn,rn={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},an=Zt(rn),ln=h({},rn,{view:0,detail:0}),on=Zt(ln),un=h({},ln,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:bn,button:0,buttons:0,relatedTarget:function(e){return void 0===e.relatedTarget?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==nn&&(nn&&"mousemove"===e.type?(en=e.screenX-nn.screenX,tn=e.screenY-nn.screenY):tn=en=0,nn=e),en)},movementY:function(e){return"movementY"in e?e.movementY:tn}}),sn=Zt(un),cn=Zt(h({},un,{dataTransfer:0})),fn=Zt(h({},ln,{relatedTarget:0})),dn=Zt(h({},rn,{animationName:0,elapsedTime:0,pseudoElement:0})),pn=Zt(h({},rn,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}})),hn=Zt(h({},rn,{data:0})),mn={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},gn={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},yn={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"}
function vn(e){var t=this.nativeEvent
return t.getModifierState?t.getModifierState(e):(e=yn[e])?!!t[e]:0}function bn(){return vn}var kn=Zt(h({},ln,{key:function(e){if(e.key){var t=mn[e.key]||e.key
if("Unidentified"!==t)return t}return"keypress"===e.type?13===(e=Gt(e))?"Enter":String.fromCharCode(e):"keydown"===e.type||"keyup"===e.type?gn[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:bn,charCode:function(e){return"keypress"===e.type?Gt(e):0},keyCode:function(e){return"keydown"===e.type||"keyup"===e.type?e.keyCode:0},which:function(e){return"keypress"===e.type?Gt(e):"keydown"===e.type||"keyup"===e.type?e.keyCode:0}})),wn=Zt(h({},un,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0})),Sn=Zt(h({},ln,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:bn})),En=Zt(h({},rn,{propertyName:0,elapsedTime:0,pseudoElement:0})),xn=Zt(h({},un,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0})),Cn=Zt(h({},rn,{newState:0,oldState:0})),Pn=[9,13,27,32],_n=Bt&&"CompositionEvent"in window,Nn=null
Bt&&"documentMode"in document&&(Nn=document.documentMode)
var zn=Bt&&"TextEvent"in window&&!Nn,Tn=Bt&&(!_n||Nn&&Nn>8&&11>=Nn),Ln=" ",Rn=0
function On(e,t){switch(e){case"keyup":return-1!==Pn.indexOf(t.keyCode)
case"keydown":return 229!==t.keyCode
case"keypress":case"mousedown":case"focusout":return 1
default:return 0}}function Dn(e){return"object"==typeof(e=e.detail)&&"data"in e?e.data:null}var An=0,Fn={color:1,date:1,datetime:1,"datetime-local":1,email:1,month:1,number:1,password:1,range:1,search:1,tel:1,text:1,time:1,url:1,week:1}
function Mn(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase()
return"input"===t?!!Fn[e.type]:"textarea"===t?1:0}function $n(e,t,n,r){Mt?$t?$t.push(r):$t=[r]:Mt=r,(t=Yc(t,"onChange")).length>0&&(n=new an("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var In=null,Un=null
function jn(e){jc(e,0)}function Hn(e){if(yt(Ke(e)))return e}function Bn(e,t){if("change"===e)return t}var Wn=0
if(Bt){var Vn
if(Bt){var Qn="oninput"in document
if(!Qn){var qn=document.createElement("div")
qn.setAttribute("oninput","return;"),Qn="function"==typeof qn.oninput}Vn=Qn}else Vn=0
Wn=Vn&&(!document.documentMode||document.documentMode>9)}function Kn(){In&&(In.detachEvent("onpropertychange",Yn),Un=In=null)}function Yn(e){if("value"===e.propertyName&&Hn(Un)){var t=[]
$n(t,Un,e,Ft(e)),jt(jn,t)}}function Gn(e,t,n){"focusin"===e?(Kn(),Un=n,(In=t).attachEvent("onpropertychange",Yn)):"focusout"===e&&Kn()}function Xn(e){if("selectionchange"===e||"keyup"===e||"keydown"===e)return Hn(Un)}function Jn(e,t){if("click"===e)return Hn(t)}function Zn(e,t){if("input"===e||"change"===e)return Hn(t)}var er="function"==typeof Object.is?Object.is:function(e,t){return e===t&&(0!==e||1/e==1/t)||e!=e&&t!=t}
function tr(e,t){if(er(e,t))return 1
if("object"!=typeof e||null===e||"object"!=typeof t||null===t)return 0
var n=Object.keys(e),r=Object.keys(t)
if(n.length!==r.length)return 0
for(r=0;r<n.length;r++){var a=n[r]
if(!te.call(t,a)||!er(e[a],t[a]))return 0}return 1}function nr(e){for(;e&&e.firstChild;)e=e.firstChild
return e}function rr(e,t){var n,r=nr(e)
for(e=0;r;){if(3===r.nodeType){if(n=e+r.textContent.length,t>=e&&n>=t)return{node:r,offset:t-e}
e=n}e:{for(;r;){if(r.nextSibling){r=r.nextSibling
break e}r=r.parentNode}r=void 0}r=nr(r)}}function ar(e,t){return e&&t?e===t?1:e&&3===e.nodeType?0:t&&3===t.nodeType?ar(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(16&e.compareDocumentPosition(t)):0:0}function lr(e){for(var t=vt((e=null!=e&&null!=e.ownerDocument&&null!=e.ownerDocument.defaultView?e.ownerDocument.defaultView:window).document);t instanceof e.HTMLIFrameElement;){try{var n="string"==typeof t.contentWindow.location.href}catch(r){n=0}if(!n)break
t=vt((e=t.contentWindow).document)}return t}function or(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase()
return t&&("input"===t&&("text"===e.type||"search"===e.type||"tel"===e.type||"url"===e.type||"password"===e.type)||"textarea"===t||"true"===e.contentEditable)}var ir=Bt&&"documentMode"in document&&11>=document.documentMode,ur=null,sr=null,cr=null,fr=0
function dr(e,t,n){var r=n.window===n?n.document:9===n.nodeType?n:n.ownerDocument
fr||null==ur||ur!==vt(r)||(r="selectionStart"in(r=ur)&&or(r)?{start:r.selectionStart,end:r.selectionEnd}:{anchorNode:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection()).anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset},cr&&tr(cr,r)||(cr=r,(r=Yc(sr,"onSelect")).length>0&&(t=new an("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=ur)))}function pr(e,t){var n={}
return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var hr={animationend:pr("Animation","AnimationEnd"),animationiteration:pr("Animation","AnimationIteration"),animationstart:pr("Animation","AnimationStart"),transitionrun:pr("Transition","TransitionRun"),transitionstart:pr("Transition","TransitionStart"),transitioncancel:pr("Transition","TransitionCancel"),transitionend:pr("Transition","TransitionEnd")},mr={},gr={}
function yr(e){if(mr[e])return mr[e]
if(!hr[e])return e
var t,n=hr[e]
for(t in n)if(n.hasOwnProperty(t)&&t in gr)return mr[e]=n[t]
return e}Bt&&(gr=document.createElement("div").style,"AnimationEvent"in window||(delete hr.animationend.animation,delete hr.animationiteration.animation,delete hr.animationstart.animation),"TransitionEvent"in window||delete hr.transitionend.transition)
var vr=yr("animationend"),br=yr("animationiteration"),kr=yr("animationstart"),wr=yr("transitionrun"),Sr=yr("transitionstart"),Er=yr("transitioncancel"),xr=yr("transitionend"),Cr=new Map,Pr="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ")
function _r(e,t){Cr.set(e,t),Ze(t,[e])}Pr.push("scrollEnd")
var Nr=new WeakMap
function zr(e,t){if("object"==typeof e&&null!==e){var n=Nr.get(e)
return void 0!==n?n:(t={value:e,source:t,stack:pt(t)},Nr.set(e,t),t)}return{value:e,source:t,stack:pt(t)}}var Tr=[],Lr=0,Rr=0
function Or(){for(var e=Lr,t=Rr=Lr=0;e>t;){var n=Tr[t]
Tr[t++]=null
var r=Tr[t]
Tr[t++]=null
var a=Tr[t]
Tr[t++]=null
var l=Tr[t]
if(Tr[t++]=null,null!==r&&null!==a){var o=r.pending
null===o?a.next=a:(a.next=o.next,o.next=a),r.pending=a}0!==l&&Mr(n,a,l)}}function Dr(e,t,n,r){Tr[Lr++]=e,Tr[Lr++]=t,Tr[Lr++]=n,Tr[Lr++]=r,Rr|=r,e.lanes|=r,null!==(e=e.alternate)&&(e.lanes|=r)}function Ar(e,t,n,r){return Dr(e,t,n,r),$r(e)}function Fr(e,t){return Dr(e,null,null,t),$r(e)}function Mr(e,t,n){e.lanes|=n
var r=e.alternate
null!==r&&(r.lanes|=n)
for(var a=0,l=e.return;null!==l;)l.childLanes|=n,null!==(r=l.alternate)&&(r.childLanes|=n),22===l.tag&&(null===(e=l.stateNode)||1&e._visibility||(a=1)),e=l,l=l.return
return 3===e.tag?(l=e.stateNode,a&&null!==t&&(a=31-ve(n),null===(r=(e=l.hiddenUpdates)[a])?e[a]=[t]:r.push(t),t.lane=536870912|n),l):null}function $r(e){if(Ms>50)throw Ms=0,$s=null,Error(l(185))
for(var t=e.return;null!==t;)t=(e=t).return
return 3===e.tag?e.stateNode:null}var Ir={}
function Ur(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function jr(e,t,n,r){return new Ur(e,t,n,r)}function Hr(e){return!(!(e=e.prototype)||!e.isReactComponent)}function Br(e,t){var n=e.alternate
return null===n?((n=jr(e.tag,t,e.key,e.mode)).elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=65011712&e.flags,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=null===t?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n.refCleanup=e.refCleanup,n}function Wr(e,t){e.flags&=65011714
var n=e.alternate
return null===n?(e.childLanes=0,e.lanes=t,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=n.childLanes,e.lanes=n.lanes,e.child=n.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=n.memoizedProps,e.memoizedState=n.memoizedState,e.updateQueue=n.updateQueue,e.type=n.type,t=n.dependencies,e.dependencies=null===t?null:{lanes:t.lanes,firstContext:t.firstContext}),e}function Vr(e,t,n,r,a,o){var i=0
if(r=e,"function"==typeof e)Hr(e)&&(i=1)
else if("string"==typeof e)i=function(e,t,n){if(1===n||null!=t.itemProp)return 0
switch(e){case"meta":case"title":return 1
case"style":if("string"!=typeof t.precedence||"string"!=typeof t.href||""===t.href)break
return 1
case"link":if("string"!=typeof t.rel||"string"!=typeof t.href||""===t.href||t.onLoad||t.onError)break
return"stylesheet"===t.rel?(e=t.disabled,"string"==typeof t.precedence&&null==e):1
case"script":if(t.async&&"function"!=typeof t.async&&"symbol"!=typeof t.async&&!t.onLoad&&!t.onError&&t.src&&"string"==typeof t.src)return 1}return 0}(e,n,q.current)?26:"html"===e||"head"===e||"body"===e?27:5
else e:switch(e){case R:return(e=jr(31,n,t,a)).elementType=R,e.lanes=o,e
case k:return Qr(n.children,a,o,t)
case w:i=8,a|=24
break
case S:return(e=jr(12,n,t,2|a)).elementType=S,e.lanes=o,e
case N:return(e=jr(13,n,t,a)).elementType=N,e.lanes=o,e
case z:return(e=jr(19,n,t,a)).elementType=z,e.lanes=o,e
default:if("object"==typeof e&&null!==e)switch(e.$$typeof){case x:case P:i=10
break e
case C:i=9
break e
case _:i=11
break e
case T:i=14
break e
case L:i=16,r=null
break e}i=29,n=Error(l(130,null===e?"null":typeof e,"")),r=null}return(t=jr(i,n,t,a)).elementType=e,t.type=r,t.lanes=o,t}function Qr(e,t,n,r){return(e=jr(7,e,r,t)).lanes=n,e}function qr(e,t,n){return(e=jr(6,e,null,t)).lanes=n,e}function Kr(e,t,n){return(t=jr(4,null!==e.children?e.children:[],e.key,t)).lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}var Yr=[],Gr=0,Xr=null,Jr=0,Zr=[],ea=0,ta=null,na=1,ra=""
function aa(e,t){Yr[Gr++]=Jr,Yr[Gr++]=Xr,Xr=e,Jr=t}function la(e,t,n){Zr[ea++]=na,Zr[ea++]=ra,Zr[ea++]=ta,ta=e
var r=na
e=ra
var a=32-ve(r)-1
r&=~(1<<a),n+=1
var l=32-ve(t)+a
if(l>30){var o=a-a%5
l=(r&(1<<o)-1).toString(32),r>>=o,a-=o,na=1<<32-ve(t)+a|n<<a|r,ra=l+e}else na=1<<l|n<<a|r,ra=e}function oa(e){null!==e.return&&(aa(e,1),la(e,1,0))}function ia(e){for(;e===Xr;)Xr=Yr[--Gr],Yr[Gr]=null,Jr=Yr[--Gr],Yr[Gr]=null
for(;e===ta;)ta=Zr[--ea],Zr[ea]=null,ra=Zr[--ea],Zr[ea]=null,na=Zr[--ea],Zr[ea]=null}var ua=null,sa=null,ca=0,fa=null,da=0,pa=Error(l(519))
function ha(e){throw ka(zr(Error(l(418,"")),e)),pa}function ma(e){var t=e.stateNode,n=e.type,r=e.memoizedProps
switch(t[Me]=e,t[$e]=r,n){case"dialog":Hc("cancel",t),Hc("close",t)
break
case"iframe":case"object":case"embed":Hc("load",t)
break
case"video":case"audio":for(n=0;n<Ic.length;n++)Hc(Ic[n],t)
break
case"source":Hc("error",t)
break
case"img":case"image":case"link":Hc("error",t),Hc("load",t)
break
case"details":Hc("toggle",t)
break
case"input":Hc("invalid",t),St(t,r.value,r.defaultValue,r.checked,r.defaultChecked,r.type,r.name,1),gt(t)
break
case"select":Hc("invalid",t)
break
case"textarea":Hc("invalid",t),Pt(t,r.value,r.defaultValue,r.children),gt(t)}"string"!=typeof(n=r.children)&&"number"!=typeof n&&"bigint"!=typeof n||t.textContent===""+n||1==r.suppressHydrationWarning||tf(t.textContent,n)?(null!=r.popover&&(Hc("beforetoggle",t),Hc("toggle",t)),null!=r.onScroll&&Hc("scroll",t),null!=r.onScrollEnd&&Hc("scrollend",t),null!=r.onClick&&(t.onclick=nf),t=1):t=0,t||ha(e)}function ga(e){for(ua=e.return;ua;)switch(ua.tag){case 5:case 13:return void(da=0)
case 27:case 3:return void(da=1)
default:ua=ua.return}}function ya(e){if(e!==ua)return 0
if(!ca)return ga(e),ca=1,0
var t,n=e.tag
if((t=3!==n&&27!==n)&&((t=5===n)&&(t=!("form"!==(t=e.type)&&"button"!==t)||df(e.type,e.memoizedProps)),t=!t),t&&sa&&ha(e),ga(e),13===n){if(!(e=null!==(e=e.memoizedState)?e.dehydrated:null))throw Error(l(317))
e:{for(e=e.nextSibling,n=0;e;){if(8===e.nodeType)if("/$"===(t=e.data)){if(0===n){sa=Ef(e.nextSibling)
break e}n--}else"$"!==t&&"$!"!==t&&"$?"!==t||n++
e=e.nextSibling}sa=null}}else 27===n?(n=sa,bf(e.type)?(e=xf,xf=null,sa=e):sa=n):sa=ua?Ef(e.stateNode.nextSibling):null
return 1}function va(){sa=ua=null,ca=0}function ba(){var e=fa
return null!==e&&(null===xs?xs=e:xs.push.apply(xs,e),fa=null),e}function ka(e){null===fa?fa=[e]:fa.push(e)}var wa=W(null),Sa=null,Ea=null
function xa(e,t,n){Q(wa,t._currentValue),t._currentValue=n}function Ca(e){e._currentValue=wa.current,V(wa)}function Pa(e,t,n){for(;null!==e;){var r=e.alternate
if((e.childLanes&t)!==t?(e.childLanes|=t,null!==r&&(r.childLanes|=t)):null!==r&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break
e=e.return}}function _a(e,t,n,r){var a=e.child
for(null!==a&&(a.return=e);null!==a;){var o=a.dependencies
if(null!==o){var i=a.child
o=o.firstContext
e:for(;null!==o;){var u=o
o=a
for(var s=0;s<t.length;s++)if(u.context===t[s]){o.lanes|=n,null!==(u=o.alternate)&&(u.lanes|=n),Pa(o.return,n,e),r||(i=null)
break e}o=u.next}}else if(18===a.tag){if(null===(i=a.return))throw Error(l(341))
i.lanes|=n,null!==(o=i.alternate)&&(o.lanes|=n),Pa(i,n,e),i=null}else i=a.child
if(null!==i)i.return=a
else for(i=a;null!==i;){if(i===e){i=null
break}if(null!==(a=i.sibling)){a.return=i.return,i=a
break}i=i.return}a=i}}function Na(e,t,n,r){e=null
for(var a=t,o=0;null!==a;){if(!o)if(524288&a.flags)o=1
else if(262144&a.flags)break
if(10===a.tag){var i=a.alternate
if(null===i)throw Error(l(387))
if(null!==(i=i.memoizedProps)){var u=a.type
er(a.pendingProps.value,i.value)||(null!==e?e.push(u):e=[u])}}else if(a===G.current){if(null===(i=a.alternate))throw Error(l(387))
i.memoizedState.memoizedState!==a.memoizedState.memoizedState&&(null!==e?e.push(ed):e=[ed])}a=a.return}null!==e&&_a(t,e,n,r),t.flags|=262144}function za(e){for(e=e.firstContext;null!==e;){if(!er(e.context._currentValue,e.memoizedValue))return 1
e=e.next}return 0}function Ta(e){Sa=e,Ea=null,null!==(e=e.dependencies)&&(e.firstContext=null)}function La(e){return Oa(Sa,e)}function Ra(e,t){return null===Sa&&Ta(e),Oa(e,t)}function Oa(e,t){var n=t._currentValue
if(t={context:t,memoizedValue:n,next:null},null===Ea){if(null===e)throw Error(l(308))
Ea=t,e.dependencies={lanes:0,firstContext:t},e.flags|=524288}else Ea=Ea.next=t
return n}var Da="undefined"!=typeof AbortController?AbortController:function(){var e=[],t=this.signal={aborted:0,addEventListener:function(t,n){e.push(n)}}
this.abort=function(){t.aborted=1,e.forEach(function(e){return e()})}},Aa=e.unstable_scheduleCallback,Fa=e.unstable_NormalPriority,Ma={$$typeof:P,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0}
function $a(){return{controller:new Da,data:new Map,refCount:0}}function Ia(e){e.refCount--,0===e.refCount&&Aa(Fa,function(){e.controller.abort()})}var Ua=null,ja=0,Ha=0,Ba=null
function Wa(){if(0===--ja&&null!==Ua){null!==Ba&&(Ba.status="fulfilled")
var e=Ua
Ua=null,Ha=0,Ba=null
for(var t=0;t<e.length;t++)(0,e[t])()}}var Va=I.S
I.S=function(e,t){"object"==typeof t&&null!==t&&"function"==typeof t.then&&function(e,t){if(null===Ua){var n=Ua=[]
ja=0,Ha=Dc(),Ba={status:"pending",value:void 0,then:function(e){n.push(e)}}}ja++,t.then(Wa,Wa)}(0,t),null!==Va&&Va(e,t)}
var Qa=W(null)
function qa(){var e=Qa.current
return null!==e?e:us.pooledCache}function Ka(e,t){Q(Qa,null===t?Qa.current:t.pool)}function Ya(){var e=qa()
return null===e?null:{parent:Ma._currentValue,pool:e}}var Ga=Error(l(460)),Xa=Error(l(474)),Ja=Error(l(542)),Za={then:function(){}}
function el(e){return"fulfilled"===(e=e.status)||"rejected"===e}function tl(){}function nl(e,t,n){switch(void 0===(n=e[n])?e.push(t):n!==t&&(t.then(tl,tl),t=n),t.status){case"fulfilled":return t.value
case"rejected":throw ll(e=t.reason),e
default:if("string"==typeof t.status)t.then(tl,tl)
else{if(null!==(e=us)&&e.shellSuspendCounter>100)throw Error(l(482));(e=t).status="pending",e.then(function(e){if("pending"===t.status){var n=t
n.status="fulfilled",n.value=e}},function(e){if("pending"===t.status){var n=t
n.status="rejected",n.reason=e}})}switch(t.status){case"fulfilled":return t.value
case"rejected":throw ll(e=t.reason),e}throw rl=t,Ga}}var rl=null
function al(){if(null===rl)throw Error(l(459))
var e=rl
return rl=null,e}function ll(e){if(e===Ga||e===Ja)throw Error(l(483))}var ol=0
function il(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function ul(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function sl(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function cl(e,t,n){var r=e.updateQueue
if(null===r)return null
if(r=r.shared,2&is){var a=r.pending
return null===a?t.next=t:(t.next=a.next,a.next=t),r.pending=t,t=$r(e),Mr(e,null,n),t}return Dr(e,r,t,n),$r(e)}function fl(e,t,n){if(null!==(t=t.updateQueue)&&(t=t.shared,4194048&n)){var r=t.lanes
n|=r&=e.pendingLanes,t.lanes=n,Re(e,n)}}function dl(e,t){var n=e.updateQueue,r=e.alternate
if(null!==r&&n===(r=r.updateQueue)){var a=null,l=null
if(null!==(n=n.firstBaseUpdate)){do{var o={lane:n.lane,tag:n.tag,payload:n.payload,callback:null,next:null}
null===l?a=l=o:l=l.next=o,n=n.next}while(null!==n)
null===l?a=l=t:l=l.next=t}else a=l=t
return n={baseState:r.baseState,firstBaseUpdate:a,lastBaseUpdate:l,shared:r.shared,callbacks:r.callbacks},void(e.updateQueue=n)}null===(e=n.lastBaseUpdate)?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}var pl=0
function hl(){if(pl&&null!==Ba)throw Ba}function ml(e,t,n,r){pl=0
var a=e.updateQueue
ol=0
var l=a.firstBaseUpdate,o=a.lastBaseUpdate,i=a.shared.pending
if(null!==i){a.shared.pending=null
var u=i,s=u.next
u.next=null,null===o?l=s:o.next=s,o=u
var c=e.alternate
null!==c&&(i=(c=c.updateQueue).lastBaseUpdate)!==o&&(null===i?c.firstBaseUpdate=s:i.next=s,c.lastBaseUpdate=u)}if(null!==l){var f=a.baseState
for(o=0,c=s=u=null,i=l;;){var d=-536870913&i.lane,p=d!==i.lane
if(p?(cs&d)===d:(r&d)===d){0!==d&&d===Ha&&(pl=1),null!==c&&(c=c.next={lane:0,tag:i.tag,payload:i.payload,callback:null,next:null})
e:{var m=e,g=i
d=t
var y=n
switch(g.tag){case 1:if("function"==typeof(m=g.payload)){f=m.call(y,f,d)
break e}f=m
break e
case 3:m.flags=-65537&m.flags|128
case 0:if(null==(d="function"==typeof(m=g.payload)?m.call(y,f,d):m))break e
f=h({},f,d)
break e
case 2:ol=1}}null!==(d=i.callback)&&(e.flags|=64,p&&(e.flags|=8192),null===(p=a.callbacks)?a.callbacks=[d]:p.push(d))}else p={lane:d,tag:i.tag,payload:i.payload,callback:i.callback,next:null},null===c?(s=c=p,u=f):c=c.next=p,o|=d
if(null===(i=i.next)){if(null===(i=a.shared.pending))break
i=(p=i).next,p.next=null,a.lastBaseUpdate=p,a.shared.pending=null}}null===c&&(u=f),a.baseState=u,a.firstBaseUpdate=s,a.lastBaseUpdate=c,null===l&&(a.shared.lanes=0),vs|=o,e.lanes=o,e.memoizedState=f}}function gl(e,t){if("function"!=typeof e)throw Error(l(191,e))
e.call(t)}function yl(e,t){var n=e.callbacks
if(null!==n)for(e.callbacks=null,e=0;e<n.length;e++)gl(n[e],t)}var vl=W(null),bl=W(0)
function kl(e,t){Q(bl,e=gs),Q(vl,t),gs=e|t.baseLanes}function wl(){Q(bl,gs),Q(vl,vl.current)}function Sl(){gs=bl.current,V(vl),V(bl)}var El=0,xl=null,Cl=null,Pl=null,_l=0,Nl=0,zl=0,Tl=0,Ll=0,Rl=null,Ol=0
function Dl(){throw Error(l(321))}function Al(e,t){if(null===t)return 0
for(var n=0;n<t.length&&n<e.length;n++)if(!er(e[n],t[n]))return 0
return 1}function Fl(e,t,n,r,a,l){return El=l,xl=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,I.H=null===e||null===e.memoizedState?Xo:Jo,zl=0,l=n(r,a),zl=0,Nl&&(l=$l(t,n,r,a)),Ml(e),l}function Ml(e){I.H=Go
var t=null!==Cl&&null!==Cl.next
if(El=0,Pl=Cl=xl=null,_l=0,Ll=0,Rl=null,t)throw Error(l(300))
null===e||Ri||null!==(e=e.dependencies)&&za(e)&&(Ri=1)}function $l(e,t,n,r){xl=e
var a=0
do{if(Nl&&(Rl=null),Ll=0,Nl=0,a>=25)throw Error(l(301))
if(a+=1,Pl=Cl=null,null!=e.updateQueue){var o=e.updateQueue
o.lastEffect=null,o.events=null,o.stores=null,null!=o.memoCache&&(o.memoCache.index=0)}I.H=Zo,o=t(n,r)}while(Nl)
return o}function Il(){var e=I.H,t=e.useState()[0]
return t="function"==typeof t.then?Vl(t):t,e=e.useState()[0],(null!==Cl?Cl.memoizedState:null)!==e&&(xl.flags|=1024),t}function Ul(){var e=0!==Tl
return Tl=0,e}function jl(e,t,n){t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~n}function Hl(e){if(_l){for(e=e.memoizedState;null!==e;){var t=e.queue
null!==t&&(t.pending=null),e=e.next}_l=0}El=0,Pl=Cl=xl=null,Nl=0,Ll=Tl=0,Rl=null}function Bl(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null}
return null===Pl?xl.memoizedState=Pl=e:Pl=Pl.next=e,Pl}function Wl(){if(null===Cl){var e=xl.alternate
e=null!==e?e.memoizedState:null}else e=Cl.next
var t=null===Pl?xl.memoizedState:Pl.next
if(null!==t)Pl=t,Cl=e
else{if(null===e){if(null===xl.alternate)throw Error(l(467))
throw Error(l(310))}e={memoizedState:(Cl=e).memoizedState,baseState:Cl.baseState,baseQueue:Cl.baseQueue,queue:Cl.queue,next:null},null===Pl?xl.memoizedState=Pl=e:Pl=Pl.next=e}return Pl}function Vl(e){var t=Ll
return Ll+=1,null===Rl&&(Rl=[]),e=nl(Rl,e,t),t=xl,null===(null===Pl?t.memoizedState:Pl.next)&&(t=t.alternate,I.H=null===t||null===t.memoizedState?Xo:Jo),e}function Ql(e){if(null!==e&&"object"==typeof e){if("function"==typeof e.then)return Vl(e)
if(e.$$typeof===P)return La(e)}throw Error(l(438,e+""))}function ql(e){var t=null,n=xl.updateQueue
if(null!==n&&(t=n.memoCache),null==t){var r=xl.alternate
null!==r&&null!==(r=r.updateQueue)&&null!=(r=r.memoCache)&&(t={data:r.data.map(function(e){return e.slice()}),index:0})}if(null==t&&(t={data:[],index:0}),null===n&&(n={lastEffect:null,events:null,stores:null,memoCache:null},xl.updateQueue=n),n.memoCache=t,void 0===(n=t.data[t.index]))for(n=t.data[t.index]=Array(e),r=0;e>r;r++)n[r]=O
return t.index++,n}function Kl(e,t){return"function"==typeof t?t(e):t}function Yl(e){return Gl(Wl(),Cl,e)}function Gl(e,t,n){var r=e.queue
if(null===r)throw Error(l(311))
r.lastRenderedReducer=n
var a=e.baseQueue,o=r.pending
if(null!==o){if(null!==a){var i=a.next
a.next=o.next,o.next=i}t.baseQueue=a=o,r.pending=null}if(o=e.baseState,null===a)e.memoizedState=o
else{var u=i=null,s=null,c=t=a.next,f=0
do{var d=-536870913&c.lane
if(d!==c.lane?(cs&d)===d:(El&d)===d){var p=c.revertLane
if(0===p)null!==s&&(s=s.next={lane:0,revertLane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),d===Ha&&(f=1)
else{if((El&p)===p){c=c.next,p===Ha&&(f=1)
continue}d={lane:0,revertLane:c.revertLane,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null},null===s?(u=s=d,i=o):s=s.next=d,xl.lanes|=p,vs|=p}d=c.action,zl&&n(o,d),o=c.hasEagerState?c.eagerState:n(o,d)}else p={lane:d,revertLane:c.revertLane,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null},null===s?(u=s=p,i=o):s=s.next=p,xl.lanes|=d,vs|=d
c=c.next}while(null!==c&&c!==t)
if(null===s?i=o:s.next=u,!er(o,e.memoizedState)&&(Ri=1,f&&null!==(n=Ba)))throw n
e.memoizedState=o,e.baseState=i,e.baseQueue=s,r.lastRenderedState=o}return null===a&&(r.lanes=0),[e.memoizedState,r.dispatch]}function Xl(e){var t=Wl(),n=t.queue
if(null===n)throw Error(l(311))
n.lastRenderedReducer=e
var r=n.dispatch,a=n.pending,o=t.memoizedState
if(null!==a){n.pending=null
var i=a=a.next
do{o=e(o,i.action),i=i.next}while(i!==a)
er(o,t.memoizedState)||(Ri=1),t.memoizedState=o,null===t.baseQueue&&(t.baseState=o),n.lastRenderedState=o}return[o,r]}function Jl(e,t,n){var r=xl,a=Wl(),o=ca
if(o){if(void 0===n)throw Error(l(407))
n=n()}else n=t()
var i=!er((Cl||a).memoizedState,n)
if(i&&(a.memoizedState=n,Ri=1),a=a.queue,So(2048,8,to.bind(null,r,a,e),[e]),a.getSnapshot!==t||i||null!==Pl&&1&Pl.memoizedState.tag){if(r.flags|=2048,bo(9,{destroy:void 0,resource:void 0},eo.bind(null,r,a,n,t),null),null===us)throw Error(l(349))
o||124&El||Zl(r,t,n)}return n}function Zl(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},null===(t=xl.updateQueue)?(t={lastEffect:null,events:null,stores:null,memoCache:null},xl.updateQueue=t,t.stores=[e]):null===(n=t.stores)?t.stores=[e]:n.push(e)}function eo(e,t,n,r){t.value=n,t.getSnapshot=r,no(t)&&ro(e)}function to(e,t,n){return n(function(){no(t)&&ro(e)})}function no(e){var t=e.getSnapshot
e=e.value
try{var n=t()
return!er(e,n)}catch(r){return 1}}function ro(e){var t=Fr(e,2)
null!==t&&js(t,0,2)}function ao(e){var t=Bl()
if("function"==typeof e){var n=e
if(e=n(),zl){ye(1)
try{n()}finally{ye(0)}}}return t.memoizedState=t.baseState=e,t.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Kl,lastRenderedState:e},t}function lo(e,t,n,r){return e.baseState=n,Gl(e,Cl,"function"==typeof r?r:Kl)}function oo(e,t,n,r,a){if(qo(e))throw Error(l(485))
if(null!==(e=t.action)){var o={payload:a,action:e,next:null,isTransition:1,status:"pending",value:null,reason:null,listeners:[],then:function(e){o.listeners.push(e)}}
null!==I.T?n(1):o.isTransition=0,r(o),null===(n=t.pending)?(o.next=t.pending=o,io(t,o)):(o.next=n.next,t.pending=n.next=o)}}function io(e,t){var n=t.action,r=t.payload,a=e.state
if(t.isTransition){var l=I.T,o={}
I.T=o
try{var i=n(a,r),u=I.S
null!==u&&u(o,i),uo(e,t,i)}catch(s){co(e,t,s)}finally{I.T=l}}else try{uo(e,t,l=n(a,r))}catch(c){co(e,t,c)}}function uo(e,t,n){null!==n&&"object"==typeof n&&"function"==typeof n.then?n.then(function(n){so(e,t,n)},function(n){return co(e,t,n)}):so(e,t,n)}function so(e,t,n){t.status="fulfilled",t.value=n,fo(t),e.state=n,null!==(t=e.pending)&&((n=t.next)===t?e.pending=null:(n=n.next,t.next=n,io(e,n)))}function co(e,t,n){var r=e.pending
if(e.pending=null,null!==r){r=r.next
do{t.status="rejected",t.reason=n,fo(t),t=t.next}while(t!==r)}e.action=null}function fo(e){e=e.listeners
for(var t=0;t<e.length;t++)(0,e[t])()}function po(e,t){return t}function ho(e,t){if(ca){var n=us.formState
if(null!==n){e:{var r=xl
if(ca){if(sa){t:{for(var a=sa,l=da;8!==a.nodeType;){if(!l){a=null
break t}if(null===(a=Ef(a.nextSibling))){a=null
break t}}a="F!"===(l=a.data)||"F"===l?a:null}if(a){sa=Ef(a.nextSibling),r="F!"===a.data
break e}}ha(r)}r=0}r&&(t=n[0])}}return(n=Bl()).memoizedState=n.baseState=t,r={pending:null,lanes:0,dispatch:null,lastRenderedReducer:po,lastRenderedState:t},n.queue=r,n=Wo.bind(null,xl,r),r.dispatch=n,r=ao(0),l=Qo.bind(null,xl,0,r.queue),a={state:t,dispatch:null,action:e,pending:null},(r=Bl()).queue=a,n=oo.bind(null,xl,a,l,n),a.dispatch=n,r.memoizedState=e,[t,n,0]}function mo(e){return go(Wl(),Cl,e)}function go(e,t,n){if(t=Gl(e,t,po)[0],e=Yl(Kl)[0],"object"==typeof t&&null!==t&&"function"==typeof t.then)try{var r=Vl(t)}catch(o){if(o===Ga)throw Ja
throw o}else r=t
var a=(t=Wl()).queue,l=a.dispatch
return n!==t.memoizedState&&(xl.flags|=2048,bo(9,{destroy:void 0,resource:void 0},yo.bind(null,a,n),null)),[r,l,e]}function yo(e,t){e.action=t}function vo(e){var t=Wl(),n=Cl
if(null!==n)return go(t,n,e)
Wl(),t=t.memoizedState
var r=(n=Wl()).queue.dispatch
return n.memoizedState=e,[t,r,0]}function bo(e,t,n,r){return e={tag:e,create:n,deps:r,inst:t,next:null},null===(t=xl.updateQueue)&&(t={lastEffect:null,events:null,stores:null,memoCache:null},xl.updateQueue=t),null===(n=t.lastEffect)?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e),e}function ko(){return Wl().memoizedState}function wo(e,t,n,r){var a=Bl()
r=void 0===r?null:r,xl.flags|=e,a.memoizedState=bo(1|t,{destroy:void 0,resource:void 0},n,r)}function So(e,t,n,r){var a=Wl()
r=void 0===r?null:r
var l=a.memoizedState.inst
null!==Cl&&null!==r&&Al(r,Cl.memoizedState.deps)?a.memoizedState=bo(t,l,n,r):(xl.flags|=e,a.memoizedState=bo(1|t,l,n,r))}function Eo(e,t){wo(8390656,8,e,t)}function xo(e,t){So(2048,8,e,t)}function Co(e,t){return So(4,2,e,t)}function Po(e,t){return So(4,4,e,t)}function _o(e,t){if("function"==typeof t){e=e()
var n=t(e)
return function(){"function"==typeof n?n():t(null)}}if(null!=t)return e=e(),t.current=e,function(){t.current=null}}function No(e,t,n){n=null!=n?n.concat([e]):null,So(4,4,_o.bind(null,t,e),n)}function zo(){}function To(e,t){var n=Wl()
t=void 0===t?null:t
var r=n.memoizedState
return null!==t&&Al(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function Lo(e,t){var n=Wl()
t=void 0===t?null:t
var r=n.memoizedState
if(null!==t&&Al(t,r[1]))return r[0]
if(r=e(),zl){ye(1)
try{e()}finally{ye(0)}}return n.memoizedState=[r,t],r}function Ro(e,t,n){return void 0===n||1073741824&El?e.memoizedState=t:(e.memoizedState=n,e=Us(),xl.lanes|=e,vs|=e,n)}function Oo(e,t,n,r){return er(n,t)?n:null!==vl.current?(e=Ro(e,n,r),er(e,t)||(Ri=1),e):42&El?(e=Us(),xl.lanes|=e,vs|=e,t):(Ri=1,e.memoizedState=n)}function Do(e,t,n,r,a){var l=U.p
U.p=0!==l&&8>l?l:8
var o,i,u,s=I.T,c={}
I.T=c,Qo(e,0,t,n)
try{var f=a(),d=I.S
null!==d&&d(c,f),null!==f&&"object"==typeof f&&"function"==typeof f.then?Vo(e,t,(o=r,i=[],u={status:"pending",value:null,reason:null,then:function(e){i.push(e)}},f.then(function(){u.status="fulfilled",u.value=o
for(var e=0;e<i.length;e++)(0,i[e])(o)},function(e){for(u.status="rejected",u.reason=e,e=0;e<i.length;e++)(0,i[e])(void 0)}),u),Is()):Vo(e,t,r,Is())}catch(p){Vo(e,t,{then:function(){},status:"rejected",reason:p},Is())}finally{U.p=l,I.T=s}}function Ao(){}function Fo(e,t,n,r){if(5!==e.tag)throw Error(l(476))
var a=Mo(e).queue
Do(e,a,t,j,null===n?Ao:function(){return $o(e),n(r)})}function Mo(e){var t=e.memoizedState
if(null!==t)return t
var n={}
return(t={memoizedState:j,baseState:j,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Kl,lastRenderedState:j},next:null}).next={memoizedState:n,baseState:n,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Kl,lastRenderedState:n},next:null},e.memoizedState=t,null!==(e=e.alternate)&&(e.memoizedState=t),t}function $o(e){Vo(e,Mo(e).next.queue,{},Is())}function Io(){return La(ed)}function Uo(){return Wl().memoizedState}function jo(){return Wl().memoizedState}function Ho(e){for(var t=e.return;null!==t;){switch(t.tag){case 24:case 3:var n=Is(),r=cl(t,e=sl(n),n)
return null!==r&&(js(r,0,n),fl(r,t,n)),t={cache:$a()},void(e.payload=t)}t=t.return}}function Bo(e,t,n){var r=Is()
n={lane:r,revertLane:0,action:n,hasEagerState:0,eagerState:null,next:null},qo(e)?Ko(t,n):null!==(n=Ar(e,t,n,r))&&(js(n,0,r),Yo(n,t,r))}function Wo(e,t,n){Vo(e,t,n,Is())}function Vo(e,t,n,r){var a={lane:r,revertLane:0,action:n,hasEagerState:0,eagerState:null,next:null}
if(qo(e))Ko(t,a)
else{var l=e.alternate
if(0===e.lanes&&(null===l||0===l.lanes)&&null!==(l=t.lastRenderedReducer))try{var o=t.lastRenderedState,i=l(o,n)
if(a.hasEagerState=1,a.eagerState=i,er(i,o))return Dr(e,t,a,0),null===us&&Or(),0}catch(u){}if(null!==(n=Ar(e,t,a,r)))return js(n,0,r),Yo(n,t,r),1}return 0}function Qo(e,t,n,r){if(r={lane:2,revertLane:Dc(),action:r,hasEagerState:0,eagerState:null,next:null},qo(e)){if(t)throw Error(l(479))}else null!==(t=Ar(e,n,r,2))&&js(t,0,2)}function qo(e){var t=e.alternate
return e===xl||null!==t&&t===xl}function Ko(e,t){Nl=_l=1
var n=e.pending
null===n?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function Yo(e,t,n){if(4194048&n){var r=t.lanes
n|=r&=e.pendingLanes,t.lanes=n,Re(e,n)}}var Go={readContext:La,use:Ql,useCallback:Dl,useContext:Dl,useEffect:Dl,useImperativeHandle:Dl,useLayoutEffect:Dl,useInsertionEffect:Dl,useMemo:Dl,useReducer:Dl,useRef:Dl,useState:Dl,useDebugValue:Dl,useDeferredValue:Dl,useTransition:Dl,useSyncExternalStore:Dl,useId:Dl,useHostTransitionStatus:Dl,useFormState:Dl,useActionState:Dl,useOptimistic:Dl,useMemoCache:Dl,useCacheRefresh:Dl},Xo={readContext:La,use:Ql,useCallback:function(e,t){return Bl().memoizedState=[e,void 0===t?null:t],e},useContext:La,useEffect:Eo,useImperativeHandle:function(e,t,n){n=null!=n?n.concat([e]):null,wo(4194308,4,_o.bind(null,t,e),n)},useLayoutEffect:function(e,t){return wo(4194308,4,e,t)},useInsertionEffect:function(e,t){wo(4,2,e,t)},useMemo:function(e,t){var n=Bl()
t=void 0===t?null:t
var r=e()
if(zl){ye(1)
try{e()}finally{ye(0)}}return n.memoizedState=[r,t],r},useReducer:function(e,t,n){var r=Bl()
if(void 0!==n){var a=n(t)
if(zl){ye(1)
try{n(t)}finally{ye(0)}}}else a=t
return r.memoizedState=r.baseState=a,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:a},r.queue=e,e=e.dispatch=Bo.bind(null,xl,e),[r.memoizedState,e]},useRef:function(e){return e={current:e},Bl().memoizedState=e},useState:function(e){var t=(e=ao(e)).queue,n=Wo.bind(null,xl,t)
return t.dispatch=n,[e.memoizedState,n]},useDebugValue:zo,useDeferredValue:function(e,t){return Ro(Bl(),e,t)},useTransition:function(){var e=ao(0)
return e=Do.bind(null,xl,e.queue,1,0),Bl().memoizedState=e,[0,e]},useSyncExternalStore:function(e,t,n){var r=xl,a=Bl()
if(ca){if(void 0===n)throw Error(l(407))
n=n()}else{if(n=t(),null===us)throw Error(l(349))
124&cs||Zl(r,t,n)}a.memoizedState=n
var o={value:n,getSnapshot:t}
return a.queue=o,Eo(to.bind(null,r,o,e),[e]),r.flags|=2048,bo(9,{destroy:void 0,resource:void 0},eo.bind(null,r,o,n,t),null),n},useId:function(){var e=Bl(),t=us.identifierPrefix
if(ca){var n=ra
t="«"+t+"R"+(n=(na&~(1<<32-ve(na)-1)).toString(32)+n),(n=Tl++)>0&&(t+="H"+n.toString(32)),t+="»"}else t="«"+t+"r"+(n=Ol++).toString(32)+"»"
return e.memoizedState=t},useHostTransitionStatus:Io,useFormState:ho,useActionState:ho,useOptimistic:function(e){var t=Bl()
t.memoizedState=t.baseState=e
var n={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null}
return t.queue=n,t=Qo.bind(null,xl,1,n),n.dispatch=t,[e,t]},useMemoCache:ql,useCacheRefresh:function(){return Bl().memoizedState=Ho.bind(null,xl)}},Jo={readContext:La,use:Ql,useCallback:To,useContext:La,useEffect:xo,useImperativeHandle:No,useInsertionEffect:Co,useLayoutEffect:Po,useMemo:Lo,useReducer:Yl,useRef:ko,useState:function(){return Yl(Kl)},useDebugValue:zo,useDeferredValue:function(e,t){return Oo(Wl(),Cl.memoizedState,e,t)},useTransition:function(){var e=Yl(Kl)[0],t=Wl().memoizedState
return["boolean"==typeof e?e:Vl(e),t]},useSyncExternalStore:Jl,useId:Uo,useHostTransitionStatus:Io,useFormState:mo,useActionState:mo,useOptimistic:function(e,t){return lo(Wl(),0,e,t)},useMemoCache:ql,useCacheRefresh:jo},Zo={readContext:La,use:Ql,useCallback:To,useContext:La,useEffect:xo,useImperativeHandle:No,useInsertionEffect:Co,useLayoutEffect:Po,useMemo:Lo,useReducer:Xl,useRef:ko,useState:function(){return Xl(Kl)},useDebugValue:zo,useDeferredValue:function(e,t){var n=Wl()
return null===Cl?Ro(n,e,t):Oo(n,Cl.memoizedState,e,t)},useTransition:function(){var e=Xl(Kl)[0],t=Wl().memoizedState
return["boolean"==typeof e?e:Vl(e),t]},useSyncExternalStore:Jl,useId:Uo,useHostTransitionStatus:Io,useFormState:vo,useActionState:vo,useOptimistic:function(e,t){var n=Wl()
return null!==Cl?lo(n,0,e,t):(n.baseState=e,[e,n.queue.dispatch])},useMemoCache:ql,useCacheRefresh:jo},ei=null,ti=0
function ni(e){var t=ti
return ti+=1,null===ei&&(ei=[]),nl(ei,e,t)}function ri(e,t){t=t.props.ref,e.ref=void 0!==t?t:null}function ai(e,t){if(t.$$typeof===m)throw Error(l(525))
throw e={}.toString.call(t),Error(l(31,"[object Object]"===e?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function li(e){return(0,e._init)(e._payload)}function oi(e){function t(t,n){if(e){var r=t.deletions
null===r?(t.deletions=[n],t.flags|=16):r.push(n)}}function n(n,r){if(!e)return null
for(;null!==r;)t(n,r),r=r.sibling
return null}function r(e){for(var t=new Map;null!==e;)null!==e.key?t.set(e.key,e):t.set(e.index,e),e=e.sibling
return t}function a(e,t){return(e=Br(e,t)).index=0,e.sibling=null,e}function o(t,n,r){return t.index=r,e?null!==(r=t.alternate)?n>(r=r.index)?(t.flags|=67108866,n):r:(t.flags|=67108866,n):(t.flags|=1048576,n)}function i(t){return e&&null===t.alternate&&(t.flags|=67108866),t}function u(e,t,n,r){return null===t||6!==t.tag?((t=qr(n,e.mode,r)).return=e,t):((t=a(t,n)).return=e,t)}function s(e,t,n,r){var l=n.type
return l===k?f(e,t,n.props.children,r,n.key):null!==t&&(t.elementType===l||"object"==typeof l&&null!==l&&l.$$typeof===L&&li(l)===t.type)?(ri(t=a(t,n.props),n),t.return=e,t):(ri(t=Vr(n.type,n.key,n.props,null,e.mode,r),n),t.return=e,t)}function c(e,t,n,r){return null===t||4!==t.tag||t.stateNode.containerInfo!==n.containerInfo||t.stateNode.implementation!==n.implementation?((t=Kr(n,e.mode,r)).return=e,t):((t=a(t,n.children||[])).return=e,t)}function f(e,t,n,r,l){return null===t||7!==t.tag?((t=Qr(n,e.mode,r,l)).return=e,t):((t=a(t,n)).return=e,t)}function d(e,t,n){if("string"==typeof t&&""!==t||"number"==typeof t||"bigint"==typeof t)return(t=qr(""+t,e.mode,n)).return=e,t
if("object"==typeof t&&null!==t){switch(t.$$typeof){case y:return ri(n=Vr(t.type,t.key,t.props,null,e.mode,n),t),n.return=e,n
case v:return(t=Kr(t,e.mode,n)).return=e,t
case L:return d(e,t=(0,t._init)(t._payload),n)}if($(t)||A(t))return(t=Qr(t,e.mode,n,null)).return=e,t
if("function"==typeof t.then)return d(e,ni(t),n)
if(t.$$typeof===P)return d(e,Ra(e,t),n)
ai(e,t)}return null}function p(e,t,n,r){var a=null!==t?t.key:null
if("string"==typeof n&&""!==n||"number"==typeof n||"bigint"==typeof n)return null!==a?null:u(e,t,""+n,r)
if("object"==typeof n&&null!==n){switch(n.$$typeof){case y:return n.key===a?s(e,t,n,r):null
case v:return n.key===a?c(e,t,n,r):null
case L:return p(e,t,n=(a=n._init)(n._payload),r)}if($(n)||A(n))return null!==a?null:f(e,t,n,r,null)
if("function"==typeof n.then)return p(e,t,ni(n),r)
if(n.$$typeof===P)return p(e,t,Ra(e,n),r)
ai(e,n)}return null}function h(e,t,n,r,a){if("string"==typeof r&&""!==r||"number"==typeof r||"bigint"==typeof r)return u(t,e=e.get(n)||null,""+r,a)
if("object"==typeof r&&null!==r){switch(r.$$typeof){case y:return s(t,e=e.get(null===r.key?n:r.key)||null,r,a)
case v:return c(t,e=e.get(null===r.key?n:r.key)||null,r,a)
case L:return h(e,t,n,r=(0,r._init)(r._payload),a)}if($(r)||A(r))return f(t,e=e.get(n)||null,r,a,null)
if("function"==typeof r.then)return h(e,t,n,ni(r),a)
if(r.$$typeof===P)return h(e,t,n,Ra(t,r),a)
ai(t,r)}return null}function m(u,s,c,f){if("object"==typeof c&&null!==c&&c.type===k&&null===c.key&&(c=c.props.children),"object"==typeof c&&null!==c){switch(c.$$typeof){case y:e:{for(var g=c.key;null!==s;){if(s.key===g){if((g=c.type)===k){if(7===s.tag){n(u,s.sibling),(f=a(s,c.props.children)).return=u,u=f
break e}}else if(s.elementType===g||"object"==typeof g&&null!==g&&g.$$typeof===L&&li(g)===s.type){n(u,s.sibling),ri(f=a(s,c.props),c),f.return=u,u=f
break e}n(u,s)
break}t(u,s),s=s.sibling}c.type===k?((f=Qr(c.props.children,u.mode,f,c.key)).return=u,u=f):(ri(f=Vr(c.type,c.key,c.props,null,u.mode,f),c),f.return=u,u=f)}return i(u)
case v:e:{for(g=c.key;null!==s;){if(s.key===g){if(4===s.tag&&s.stateNode.containerInfo===c.containerInfo&&s.stateNode.implementation===c.implementation){n(u,s.sibling),(f=a(s,c.children||[])).return=u,u=f
break e}n(u,s)
break}t(u,s),s=s.sibling}(f=Kr(c,u.mode,f)).return=u,u=f}return i(u)
case L:return m(u,s,c=(g=c._init)(c._payload),f)}if($(c))return function(a,l,i,u){for(var s=null,c=null,f=l,m=l=0,g=null;null!==f&&m<i.length;m++){f.index>m?(g=f,f=null):g=f.sibling
var y=p(a,f,i[m],u)
if(null===y){null===f&&(f=g)
break}e&&f&&null===y.alternate&&t(a,f),l=o(y,l,m),null===c?s=y:c.sibling=y,c=y,f=g}if(m===i.length)return n(a,f),ca&&aa(a,m),s
if(null===f){for(;m<i.length;m++)null!==(f=d(a,i[m],u))&&(l=o(f,l,m),null===c?s=f:c.sibling=f,c=f)
return ca&&aa(a,m),s}for(f=r(f);m<i.length;m++)null!==(g=h(f,a,m,i[m],u))&&(e&&null!==g.alternate&&f.delete(null===g.key?m:g.key),l=o(g,l,m),null===c?s=g:c.sibling=g,c=g)
return e&&f.forEach(function(e){return t(a,e)}),ca&&aa(a,m),s}(u,s,c,f)
if(A(c)){if("function"!=typeof(g=A(c)))throw Error(l(150))
return function(a,i,u,s){if(null==u)throw Error(l(151))
for(var c=null,f=null,m=i,g=i=0,y=null,v=u.next();null!==m&&!v.done;g++,v=u.next()){m.index>g?(y=m,m=null):y=m.sibling
var b=p(a,m,v.value,s)
if(null===b){null===m&&(m=y)
break}e&&m&&null===b.alternate&&t(a,m),i=o(b,i,g),null===f?c=b:f.sibling=b,f=b,m=y}if(v.done)return n(a,m),ca&&aa(a,g),c
if(null===m){for(;!v.done;g++,v=u.next())null!==(v=d(a,v.value,s))&&(i=o(v,i,g),null===f?c=v:f.sibling=v,f=v)
return ca&&aa(a,g),c}for(m=r(m);!v.done;g++,v=u.next())null!==(v=h(m,a,g,v.value,s))&&(e&&null!==v.alternate&&m.delete(null===v.key?g:v.key),i=o(v,i,g),null===f?c=v:f.sibling=v,f=v)
return e&&m.forEach(function(e){return t(a,e)}),ca&&aa(a,g),c}(u,s,c=g.call(c),f)}if("function"==typeof c.then)return m(u,s,ni(c),f)
if(c.$$typeof===P)return m(u,s,Ra(u,c),f)
ai(u,c)}return"string"==typeof c&&""!==c||"number"==typeof c||"bigint"==typeof c?(c=""+c,null!==s&&6===s.tag?(n(u,s.sibling),(f=a(s,c)).return=u,u=f):(n(u,s),(f=qr(c,u.mode,f)).return=u,u=f),i(u)):n(u,s)}return function(e,t,n,r){try{ti=0
var a=m(e,t,n,r)
return ei=null,a}catch(o){if(o===Ga||o===Ja)throw o
var l=jr(29,o,null,e.mode)
return l.lanes=r,l.return=e,l}}}var ii=oi(1),ui=oi(0),si=W(null),ci=null
function fi(e){var t=e.alternate
Q(mi,1&mi.current),Q(si,e),null===ci&&(null===t||null!==vl.current||null!==t.memoizedState)&&(ci=e)}function di(e){if(22===e.tag){if(Q(mi,mi.current),Q(si,e),null===ci){var t=e.alternate
null!==t&&null!==t.memoizedState&&(ci=e)}}else pi()}function pi(){Q(mi,mi.current),Q(si,si.current)}function hi(e){V(si),ci===e&&(ci=null),V(mi)}var mi=W(0)
function gi(e){for(var t=e;null!==t;){if(13===t.tag){var n=t.memoizedState
if(null!==n&&(null===(n=n.dehydrated)||"$?"===n.data||Sf(n)))return t}else if(19===t.tag&&void 0!==t.memoizedProps.revealOrder){if(128&t.flags)return t}else if(null!==t.child){t.child.return=t,t=t.child
continue}if(t===e)break
for(;null===t.sibling;){if(null===t.return||t.return===e)return null
t=t.return}t.sibling.return=t.return,t=t.sibling}return null}function yi(e,t,n,r){n=null==(n=n(r,t=e.memoizedState))?t:h({},t,n),e.memoizedState=n,0===e.lanes&&(e.updateQueue.baseState=n)}var vi={enqueueSetState:function(e,t,n){e=e._reactInternals
var r=Is(),a=sl(r)
a.payload=t,null!=n&&(a.callback=n),null!==(t=cl(e,a,r))&&(js(t,0,r),fl(t,e,r))},enqueueReplaceState:function(e,t,n){e=e._reactInternals
var r=Is(),a=sl(r)
a.tag=1,a.payload=t,null!=n&&(a.callback=n),null!==(t=cl(e,a,r))&&(js(t,0,r),fl(t,e,r))},enqueueForceUpdate:function(e,t){e=e._reactInternals
var n=Is(),r=sl(n)
r.tag=2,null!=t&&(r.callback=t),null!==(t=cl(e,r,n))&&(js(t,0,n),fl(t,e,n))}}
function bi(e,t,n,r,a,l,o){return"function"==typeof(e=e.stateNode).shouldComponentUpdate?e.shouldComponentUpdate(r,l,o):t.prototype&&t.prototype.isPureReactComponent?!tr(n,r)||!tr(a,l):1}function ki(e,t,n,r){e=t.state,"function"==typeof t.componentWillReceiveProps&&t.componentWillReceiveProps(n,r),"function"==typeof t.UNSAFE_componentWillReceiveProps&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&vi.enqueueReplaceState(t,t.state,null)}function wi(e,t){var n=t
if("ref"in t)for(var r in n={},t)"ref"!==r&&(n[r]=t[r])
if(e=e.defaultProps)for(var a in n===t&&(n=h({},n)),e)void 0===n[a]&&(n[a]=e[a])
return n}var Si="function"==typeof reportError?reportError:function(e){if("object"==typeof window&&"function"==typeof window.ErrorEvent){var t=new window.ErrorEvent("error",{bubbles:1,cancelable:1,message:"object"==typeof e&&null!==e&&"string"==typeof e.message?e.message+"":e+"",error:e})
if(!window.dispatchEvent(t))return}else if("object"==typeof process&&"function"==typeof process.emit)return void process.emit("uncaughtException",e)}
function Ei(e){Si(e)}function xi(){}function Ci(e){Si(e)}function Pi(e,t){try{(0,e.onUncaughtError)(t.value,{componentStack:t.stack})}catch(n){setTimeout(function(){throw n})}}function _i(e,t,n){try{(0,e.onCaughtError)(n.value,{componentStack:n.stack,errorBoundary:1===t.tag?t.stateNode:null})}catch(r){setTimeout(function(){throw r})}}function Ni(e,t,n){return(n=sl(n)).tag=3,n.payload={element:null},n.callback=function(){Pi(e,t)},n}function zi(e){return(e=sl(e)).tag=3,e}function Ti(e,t,n,r){var a=n.type.getDerivedStateFromError
if("function"==typeof a){var l=r.value
e.payload=function(){return a(l)},e.callback=function(){_i(t,n,r)}}var o=n.stateNode
null!==o&&"function"==typeof o.componentDidCatch&&(e.callback=function(){_i(t,n,r),"function"!=typeof a&&(null===zs?zs=new Set([this]):zs.add(this))
var e=r.stack
this.componentDidCatch(r.value,{componentStack:null!==e?e:""})})}var Li=Error(l(461)),Ri=0
function Oi(e,t,n,r){t.child=null===e?ui(t,null,n,r):ii(t,e.child,n,r)}function Di(e,t,n,r,a){n=n.render
var l=t.ref
if("ref"in r){var o={}
for(var i in r)"ref"!==i&&(o[i]=r[i])}else o=r
return Ta(t),r=Fl(e,t,n,o,l,a),i=Ul(),null===e||Ri?(ca&&i&&oa(t),t.flags|=1,Oi(e,t,r,a),t.child):(jl(e,t,a),eu(e,t,a))}function Ai(e,t,n,r,a){if(null===e){var l=n.type
return"function"!=typeof l||Hr(l)||void 0!==l.defaultProps||null!==n.compare?((e=Vr(n.type,null,r,t,t.mode,a)).ref=t.ref,e.return=t,t.child=e):(t.tag=15,t.type=l,Fi(e,t,l,r,a))}if(l=e.child,!tu(e,a)){var o=l.memoizedProps
if((n=null!==(n=n.compare)?n:tr)(o,r)&&e.ref===t.ref)return eu(e,t,a)}return t.flags|=1,(e=Br(l,r)).ref=t.ref,e.return=t,t.child=e}function Fi(e,t,n,r,a){if(null!==e){var l=e.memoizedProps
if(tr(l,r)&&e.ref===t.ref){if(Ri=0,t.pendingProps=r=l,!tu(e,a))return t.lanes=e.lanes,eu(e,t,a)
131072&e.flags&&(Ri=1)}}return Ui(e,t,n,r,a)}function Mi(e,t,n){var r=t.pendingProps,a=r.children,l=null!==e?e.memoizedState:null
if("hidden"===r.mode){if(128&t.flags){if(r=null!==l?l.baseLanes|n:n,null!==e){for(a=t.child=e.child,l=0;null!==a;)l=l|a.lanes|a.childLanes,a=a.sibling
t.childLanes=l&~r}else t.childLanes=0,t.child=null
return $i(e,t,r,n)}if(!(536870912&n))return t.lanes=t.childLanes=536870912,$i(e,t,null!==l?l.baseLanes|n:n,n)
t.memoizedState={baseLanes:0,cachePool:null},null!==e&&Ka(0,null!==l?l.cachePool:null),null!==l?kl(t,l):wl(),di(t)}else null!==l?(Ka(0,l.cachePool),kl(t,l),pi(),t.memoizedState=null):(null!==e&&Ka(0,null),wl(),pi())
return Oi(e,t,a,n),t.child}function $i(e,t,n,r){var a=qa()
return a=null===a?null:{parent:Ma._currentValue,pool:a},t.memoizedState={baseLanes:n,cachePool:a},null!==e&&Ka(0,null),wl(),di(t),null!==e&&Na(e,t,r,1),null}function Ii(e,t){var n=t.ref
if(null===n)null!==e&&null!==e.ref&&(t.flags|=4194816)
else{if("function"!=typeof n&&"object"!=typeof n)throw Error(l(284))
null!==e&&e.ref===n||(t.flags|=4194816)}}function Ui(e,t,n,r,a){return Ta(t),n=Fl(e,t,n,r,void 0,a),r=Ul(),null===e||Ri?(ca&&r&&oa(t),t.flags|=1,Oi(e,t,n,a),t.child):(jl(e,t,a),eu(e,t,a))}function ji(e,t,n,r,a,l){return Ta(t),t.updateQueue=null,n=$l(t,r,n,a),Ml(e),r=Ul(),null===e||Ri?(ca&&r&&oa(t),t.flags|=1,Oi(e,t,n,l),t.child):(jl(e,t,l),eu(e,t,l))}function Hi(e,t,n,r,a){if(Ta(t),null===t.stateNode){var l=Ir,o=n.contextType
"object"==typeof o&&null!==o&&(l=La(o)),l=new n(r,l),t.memoizedState=null!==l.state&&void 0!==l.state?l.state:null,l.updater=vi,t.stateNode=l,l._reactInternals=t,(l=t.stateNode).props=r,l.state=t.memoizedState,l.refs={},il(t),o=n.contextType,l.context="object"==typeof o&&null!==o?La(o):Ir,l.state=t.memoizedState,"function"==typeof(o=n.getDerivedStateFromProps)&&(yi(t,n,o,r),l.state=t.memoizedState),"function"==typeof n.getDerivedStateFromProps||"function"==typeof l.getSnapshotBeforeUpdate||"function"!=typeof l.UNSAFE_componentWillMount&&"function"!=typeof l.componentWillMount||(o=l.state,"function"==typeof l.componentWillMount&&l.componentWillMount(),"function"==typeof l.UNSAFE_componentWillMount&&l.UNSAFE_componentWillMount(),o!==l.state&&vi.enqueueReplaceState(l,l.state,null),ml(t,r,l,a),hl(),l.state=t.memoizedState),"function"==typeof l.componentDidMount&&(t.flags|=4194308),r=1}else if(null===e){l=t.stateNode
var i=t.memoizedProps,u=wi(n,i)
l.props=u
var s=l.context,c=n.contextType
o=Ir,"object"==typeof c&&null!==c&&(o=La(c))
var f=n.getDerivedStateFromProps
c="function"==typeof f||"function"==typeof l.getSnapshotBeforeUpdate,i=t.pendingProps!==i,c||"function"!=typeof l.UNSAFE_componentWillReceiveProps&&"function"!=typeof l.componentWillReceiveProps||(i||s!==o)&&ki(t,l,r,o),ol=0
var d=t.memoizedState
l.state=d,ml(t,r,l,a),hl(),s=t.memoizedState,i||d!==s||ol?("function"==typeof f&&(yi(t,n,f,r),s=t.memoizedState),(u=ol||bi(t,n,u,r,d,s,o))?(c||"function"!=typeof l.UNSAFE_componentWillMount&&"function"!=typeof l.componentWillMount||("function"==typeof l.componentWillMount&&l.componentWillMount(),"function"==typeof l.UNSAFE_componentWillMount&&l.UNSAFE_componentWillMount()),"function"==typeof l.componentDidMount&&(t.flags|=4194308)):("function"==typeof l.componentDidMount&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=s),l.props=r,l.state=s,l.context=o,r=u):("function"==typeof l.componentDidMount&&(t.flags|=4194308),r=0)}else{l=t.stateNode,ul(e,t),c=wi(n,o=t.memoizedProps),l.props=c,f=t.pendingProps,d=l.context,s=n.contextType,u=Ir,"object"==typeof s&&null!==s&&(u=La(s)),(s="function"==typeof(i=n.getDerivedStateFromProps)||"function"==typeof l.getSnapshotBeforeUpdate)||"function"!=typeof l.UNSAFE_componentWillReceiveProps&&"function"!=typeof l.componentWillReceiveProps||(o!==f||d!==u)&&ki(t,l,r,u),ol=0,d=t.memoizedState,l.state=d,ml(t,r,l,a),hl()
var p=t.memoizedState
o!==f||d!==p||ol||null!==e&&null!==e.dependencies&&za(e.dependencies)?("function"==typeof i&&(yi(t,n,i,r),p=t.memoizedState),(c=ol||bi(t,n,c,r,d,p,u)||null!==e&&null!==e.dependencies&&za(e.dependencies))?(s||"function"!=typeof l.UNSAFE_componentWillUpdate&&"function"!=typeof l.componentWillUpdate||("function"==typeof l.componentWillUpdate&&l.componentWillUpdate(r,p,u),"function"==typeof l.UNSAFE_componentWillUpdate&&l.UNSAFE_componentWillUpdate(r,p,u)),"function"==typeof l.componentDidUpdate&&(t.flags|=4),"function"==typeof l.getSnapshotBeforeUpdate&&(t.flags|=1024)):("function"!=typeof l.componentDidUpdate||o===e.memoizedProps&&d===e.memoizedState||(t.flags|=4),"function"!=typeof l.getSnapshotBeforeUpdate||o===e.memoizedProps&&d===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=p),l.props=r,l.state=p,l.context=u,r=c):("function"!=typeof l.componentDidUpdate||o===e.memoizedProps&&d===e.memoizedState||(t.flags|=4),"function"!=typeof l.getSnapshotBeforeUpdate||o===e.memoizedProps&&d===e.memoizedState||(t.flags|=1024),r=0)}return l=r,Ii(e,t),r=!!(128&t.flags),l||r?(l=t.stateNode,n=r&&"function"!=typeof n.getDerivedStateFromError?null:l.render(),t.flags|=1,null!==e&&r?(t.child=ii(t,e.child,null,a),t.child=ii(t,null,n,a)):Oi(e,t,n,a),t.memoizedState=l.state,e=t.child):e=eu(e,t,a),e}function Bi(e,t,n,r){return va(),t.flags|=256,Oi(e,t,n,r),t.child}var Wi={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null}
function Vi(e){return{baseLanes:e,cachePool:Ya()}}function Qi(e,t,n){return e=null!==e?e.childLanes&~n:0,t&&(e|=ws),e}function qi(e,t,n){var r,a=t.pendingProps,o=0,i=!!(128&t.flags)
if((r=i)||(r=null!==e&&null===e.memoizedState?0:!!(2&mi.current)),r&&(o=1,t.flags&=-129),r=!!(32&t.flags),t.flags&=-33,null===e){if(ca){if(o?fi(t):pi(),ca){var u,s=sa
if(u=s){e:{for(u=s,s=da;8!==u.nodeType;){if(!s){s=null
break e}if(null===(u=Ef(u.nextSibling))){s=null
break e}}s=u}null!==s?(t.memoizedState={dehydrated:s,treeContext:null!==ta?{id:na,overflow:ra}:null,retryLane:536870912,hydrationErrors:null},(u=jr(18,null,null,0)).stateNode=s,u.return=t,t.child=u,ua=t,sa=null,u=1):u=0}u||ha(t)}if(null!==(s=t.memoizedState)&&null!==(s=s.dehydrated))return Sf(s)?t.lanes=32:t.lanes=536870912,null
hi(t)}return s=a.children,a=a.fallback,o?(pi(),s=Yi({mode:"hidden",children:s},o=t.mode),a=Qr(a,o,n,null),s.return=t,a.return=t,s.sibling=a,t.child=s,(o=t.child).memoizedState=Vi(n),o.childLanes=Qi(e,r,n),t.memoizedState=Wi,a):(fi(t),Ki(t,s))}if(null!==(u=e.memoizedState)&&null!==(s=u.dehydrated)){if(i)256&t.flags?(fi(t),t.flags&=-257,t=Gi(e,t,n)):null!==t.memoizedState?(pi(),t.child=e.child,t.flags|=128,t=null):(pi(),o=a.fallback,s=t.mode,a=Yi({mode:"visible",children:a.children},s),(o=Qr(o,s,n,null)).flags|=2,a.return=t,o.return=t,a.sibling=o,t.child=a,ii(t,e.child,null,n),(a=t.child).memoizedState=Vi(n),a.childLanes=Qi(e,r,n),t.memoizedState=Wi,t=o)
else if(fi(t),Sf(s)){if(r=s.nextSibling&&s.nextSibling.dataset)var c=r.dgst
r=c,(a=Error(l(419))).stack="",a.digest=r,ka({value:a,source:null,stack:null}),t=Gi(e,t,n)}else if(Ri||Na(e,t,n,0),r=0!==(n&e.childLanes),Ri||r){if(null!==(r=us)&&0!==(a=0!==((a=42&(a=n&-n)?1:Oe(a))&(r.suspendedLanes|n))?0:a)&&a!==u.retryLane)throw u.retryLane=a,Fr(e,a),js(r,0,a),Li
"$?"===s.data||Js(),t=Gi(e,t,n)}else"$?"===s.data?(t.flags|=192,t.child=e.child,t=null):(e=u.treeContext,sa=Ef(s.nextSibling),ua=t,ca=1,fa=null,da=0,null!==e&&(Zr[ea++]=na,Zr[ea++]=ra,Zr[ea++]=ta,na=e.id,ra=e.overflow,ta=t),(t=Ki(t,a.children)).flags|=4096)
return t}return o?(pi(),o=a.fallback,s=t.mode,c=(u=e.child).sibling,(a=Br(u,{mode:"hidden",children:a.children})).subtreeFlags=65011712&u.subtreeFlags,null!==c?o=Br(c,o):(o=Qr(o,s,n,null)).flags|=2,o.return=t,a.return=t,a.sibling=o,t.child=a,a=o,o=t.child,null===(s=e.child.memoizedState)?s=Vi(n):(null!==(u=s.cachePool)?(c=Ma._currentValue,u=u.parent!==c?{parent:c,pool:c}:u):u=Ya(),s={baseLanes:s.baseLanes|n,cachePool:u}),o.memoizedState=s,o.childLanes=Qi(e,r,n),t.memoizedState=Wi,a):(fi(t),e=(n=e.child).sibling,(n=Br(n,{mode:"visible",children:a.children})).return=t,n.sibling=null,null!==e&&(null===(r=t.deletions)?(t.deletions=[e],t.flags|=16):r.push(e)),t.child=n,t.memoizedState=null,n)}function Ki(e,t){return(t=Yi({mode:"visible",children:t},e.mode)).return=e,e.child=t}function Yi(e,t){return(e=jr(22,e,null,t)).lanes=0,e.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null},e}function Gi(e,t,n){return ii(t,e.child,null,n),(e=Ki(t,t.pendingProps.children)).flags|=2,t.memoizedState=null,e}function Xi(e,t,n){e.lanes|=t
var r=e.alternate
null!==r&&(r.lanes|=t),Pa(e.return,t,n)}function Ji(e,t,n,r,a){var l=e.memoizedState
null===l?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:a}:(l.isBackwards=t,l.rendering=null,l.renderingStartTime=0,l.last=r,l.tail=n,l.tailMode=a)}function Zi(e,t,n){var r=t.pendingProps,a=r.revealOrder,l=r.tail
if(Oi(e,t,r.children,n),2&(r=mi.current))r=1&r|2,t.flags|=128
else{if(null!==e&&128&e.flags)e:for(e=t.child;null!==e;){if(13===e.tag)null!==e.memoizedState&&Xi(e,n,t)
else if(19===e.tag)Xi(e,n,t)
else if(null!==e.child){e.child.return=e,e=e.child
continue}if(e===t)break e
for(;null===e.sibling;){if(null===e.return||e.return===t)break e
e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}switch(Q(mi,r),a){case"forwards":for(n=t.child,a=null;null!==n;)null!==(e=n.alternate)&&null===gi(e)&&(a=n),n=n.sibling
null===(n=a)?(a=t.child,t.child=null):(a=n.sibling,n.sibling=null),Ji(t,0,a,n,l)
break
case"backwards":for(n=null,a=t.child,t.child=null;null!==a;){if(null!==(e=a.alternate)&&null===gi(e)){t.child=a
break}e=a.sibling,a.sibling=n,n=a,a=e}Ji(t,1,n,null,l)
break
case"together":Ji(t,0,null,null,void 0)
break
default:t.memoizedState=null}return t.child}function eu(e,t,n){if(null!==e&&(t.dependencies=e.dependencies),vs|=t.lanes,0===(n&t.childLanes)){if(null===e)return null
if(Na(e,t,n,0),0===(n&t.childLanes))return null}if(null!==e&&t.child!==e.child)throw Error(l(153))
if(null!==t.child){for(n=Br(e=t.child,e.pendingProps),t.child=n,n.return=t;null!==e.sibling;)e=e.sibling,(n=n.sibling=Br(e,e.pendingProps)).return=t
n.sibling=null}return t.child}function tu(e,t){return 0!==(e.lanes&t)||null!==(e=e.dependencies)&&za(e)?1:0}function nu(e,t,n){if(null!==e)if(e.memoizedProps!==t.pendingProps)Ri=1
else{if(!(tu(e,n)||128&t.flags))return Ri=0,function(e,t,n){switch(t.tag){case 3:X(t,t.stateNode.containerInfo),xa(0,Ma,e.memoizedState.cache),va()
break
case 27:case 5:Z(t)
break
case 4:X(t,t.stateNode.containerInfo)
break
case 10:xa(0,t.type,t.memoizedProps.value)
break
case 13:var r=t.memoizedState
if(null!==r)return null!==r.dehydrated?(fi(t),t.flags|=128,null):0!==(n&t.child.childLanes)?qi(e,t,n):(fi(t),null!==(e=eu(e,t,n))?e.sibling:null)
fi(t)
break
case 19:var a=!!(128&e.flags)
if((r=0!==(n&t.childLanes))||(Na(e,t,n,0),r=0!==(n&t.childLanes)),a){if(r)return Zi(e,t,n)
t.flags|=128}if(null!==(a=t.memoizedState)&&(a.rendering=null,a.tail=null,a.lastEffect=null),Q(mi,mi.current),r)break
return null
case 22:case 23:return t.lanes=0,Mi(e,t,n)
case 24:xa(0,Ma,e.memoizedState.cache)}return eu(e,t,n)}(e,t,n)
Ri=131072&e.flags?1:0}else Ri=0,ca&&1048576&t.flags&&la(t,Jr,t.index)
switch(t.lanes=0,t.tag){case 16:e:{e=t.pendingProps
var r=t.elementType,a=r._init
if(r=a(r._payload),t.type=r,"function"!=typeof r){if(null!=r){if((a=r.$$typeof)===_){t.tag=11,t=Di(null,t,r,e,n)
break e}if(a===T){t.tag=14,t=Ai(null,t,r,e,n)
break e}}throw t=M(r)||r,Error(l(306,t,""))}Hr(r)?(e=wi(r,e),t.tag=1,t=Hi(null,t,r,e,n)):(t.tag=0,t=Ui(null,t,r,e,n))}return t
case 0:return Ui(e,t,t.type,t.pendingProps,n)
case 1:return Hi(e,t,r=t.type,a=wi(r,t.pendingProps),n)
case 3:e:{if(X(t,t.stateNode.containerInfo),null===e)throw Error(l(387))
r=t.pendingProps
var o=t.memoizedState
a=o.element,ul(e,t),ml(t,r,null,n)
var i=t.memoizedState
if(r=i.cache,xa(0,Ma,r),r!==o.cache&&_a(t,[Ma],n,1),hl(),r=i.element,o.isDehydrated){if(o={element:r,isDehydrated:0,cache:i.cache},t.updateQueue.baseState=o,t.memoizedState=o,256&t.flags){t=Bi(e,t,r,n)
break e}if(r!==a){ka(a=zr(Error(l(424)),t)),t=Bi(e,t,r,n)
break e}for(e=9===(e=t.stateNode.containerInfo).nodeType?e.body:"HTML"===e.nodeName?e.ownerDocument.body:e,sa=Ef(e.firstChild),ua=t,ca=1,fa=null,da=1,n=ui(t,null,r,n),t.child=n;n;)n.flags=-3&n.flags|4096,n=n.sibling}else{if(va(),r===a){t=eu(e,t,n)
break e}Oi(e,t,r,n)}t=t.child}return t
case 26:return Ii(e,t),null===e?(n=Df(t.type,null,t.pendingProps,null))?t.memoizedState=n:ca||(n=t.type,e=t.pendingProps,(r=sf(Y.current).createElement(n))[Me]=t,r[$e]=e,lf(r,n,e),Ge(r),t.stateNode=r):t.memoizedState=Df(t.type,e.memoizedProps,t.pendingProps,e.memoizedState),null
case 27:return Z(t),null===e&&ca&&(r=t.stateNode=Pf(t.type,t.pendingProps,Y.current),ua=t,da=1,a=sa,bf(t.type)?(xf=a,sa=Ef(r.firstChild)):sa=a),Oi(e,t,t.pendingProps.children,n),Ii(e,t),null===e&&(t.flags|=4194304),t.child
case 5:return null===e&&ca&&((a=r=sa)&&(null!==(r=function(e,t,n,r){for(;1===e.nodeType;){var a=n
if(e.nodeName.toLowerCase()!==t.toLowerCase()){if(!r&&("INPUT"!==e.nodeName||"hidden"!==e.type))break}else if(r){if(!e[We])switch(t){case"meta":if(!e.hasAttribute("itemprop"))break
return e
case"link":if("stylesheet"===(l=e.getAttribute("rel"))&&e.hasAttribute("data-precedence"))break
if(l!==a.rel||e.getAttribute("href")!==(null==a.href||""===a.href?null:a.href)||e.getAttribute("crossorigin")!==(null==a.crossOrigin?null:a.crossOrigin)||e.getAttribute("title")!==(null==a.title?null:a.title))break
return e
case"style":if(e.hasAttribute("data-precedence"))break
return e
case"script":if(((l=e.getAttribute("src"))!==(null==a.src?null:a.src)||e.getAttribute("type")!==(null==a.type?null:a.type)||e.getAttribute("crossorigin")!==(null==a.crossOrigin?null:a.crossOrigin))&&l&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break
return e
default:return e}}else{if("input"!==t||"hidden"!==e.type)return e
var l=null==a.name?null:""+a.name
if("hidden"===a.type&&e.getAttribute("name")===l)return e}if(null===(e=Ef(e.nextSibling)))break}return null}(r,t.type,t.pendingProps,da))?(t.stateNode=r,ua=t,sa=Ef(r.firstChild),da=0,a=1):a=0),a||ha(t)),Z(t),a=t.type,o=t.pendingProps,i=null!==e?e.memoizedProps:null,r=o.children,df(a,o)?r=null:null!==i&&df(a,i)&&(t.flags|=32),null!==t.memoizedState&&(a=Fl(e,t,Il,null,null,n),ed._currentValue=a),Ii(e,t),Oi(e,t,r,n),t.child
case 6:return null===e&&ca&&((e=n=sa)&&(null!==(n=function(e,t,n){if(""===t)return null
for(;3!==e.nodeType;){if((1!==e.nodeType||"INPUT"!==e.nodeName||"hidden"!==e.type)&&!n)return null
if(null===(e=Ef(e.nextSibling)))return null}return e}(n,t.pendingProps,da))?(t.stateNode=n,ua=t,sa=null,e=1):e=0),e||ha(t)),null
case 13:return qi(e,t,n)
case 4:return X(t,t.stateNode.containerInfo),r=t.pendingProps,null===e?t.child=ii(t,null,r,n):Oi(e,t,r,n),t.child
case 11:return Di(e,t,t.type,t.pendingProps,n)
case 7:return Oi(e,t,t.pendingProps,n),t.child
case 8:case 12:return Oi(e,t,t.pendingProps.children,n),t.child
case 10:return r=t.pendingProps,xa(0,t.type,r.value),Oi(e,t,r.children,n),t.child
case 9:return a=t.type._context,r=t.pendingProps.children,Ta(t),r=r(a=La(a)),t.flags|=1,Oi(e,t,r,n),t.child
case 14:return Ai(e,t,t.type,t.pendingProps,n)
case 15:return Fi(e,t,t.type,t.pendingProps,n)
case 19:return Zi(e,t,n)
case 31:return r=t.pendingProps,n=t.mode,r={mode:r.mode,children:r.children},null===e?((n=Yi(r,n)).ref=t.ref,t.child=n,n.return=t,t=n):((n=Br(e.child,r)).ref=t.ref,t.child=n,n.return=t,t=n),t
case 22:return Mi(e,t,n)
case 24:return Ta(t),r=La(Ma),null===e?(null===(a=qa())&&(a=us,o=$a(),a.pooledCache=o,o.refCount++,null!==o&&(a.pooledCacheLanes|=n),a=o),t.memoizedState={parent:r,cache:a},il(t),xa(0,Ma,a)):(0!==(e.lanes&n)&&(ul(e,t),ml(t,null,null,n),hl()),a=e.memoizedState,o=t.memoizedState,a.parent!==r?(a={parent:r,cache:r},t.memoizedState=a,0===t.lanes&&(t.memoizedState=t.updateQueue.baseState=a),xa(0,Ma,r)):(r=o.cache,xa(0,Ma,r),r!==a.cache&&_a(t,[Ma],n,1))),Oi(e,t,t.pendingProps.children,n),t.child
case 29:throw t.pendingProps}throw Error(l(156,t.tag))}function ru(e){e.flags|=4}function au(e,t){if("stylesheet"!==t.type||4&t.state.loading)e.flags&=-16777217
else if(e.flags|=16777216,!qf(t)){if(null!==(t=si.current)&&((4194048&cs)===cs?null!==ci:(62914560&cs)!==cs&&!(536870912&cs)||t!==ci))throw rl=Za,Xa
e.flags|=8192}}function lu(e,t){null!==t&&(e.flags|=4),16384&e.flags&&(t=22!==e.tag?Ne():536870912,e.lanes|=t,Ss|=t)}function ou(e,t){if(!ca)switch(e.tailMode){case"hidden":t=e.tail
for(var n=null;null!==t;)null!==t.alternate&&(n=t),t=t.sibling
null===n?e.tail=null:n.sibling=null
break
case"collapsed":n=e.tail
for(var r=null;null!==n;)null!==n.alternate&&(r=n),n=n.sibling
null===r?t||null===e.tail?e.tail=null:e.tail.sibling=null:r.sibling=null}}function iu(e){var t=null!==e.alternate&&e.alternate.child===e.child,n=0,r=0
if(t)for(var a=e.child;null!==a;)n|=a.lanes|a.childLanes,r|=65011712&a.subtreeFlags,r|=65011712&a.flags,a.return=e,a=a.sibling
else for(a=e.child;null!==a;)n|=a.lanes|a.childLanes,r|=a.subtreeFlags,r|=a.flags,a.return=e,a=a.sibling
return e.subtreeFlags|=r,e.childLanes=n,t}function uu(e,t,n){var r=t.pendingProps
switch(ia(t),t.tag){case 31:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:case 1:return iu(t),null
case 3:return n=t.stateNode,r=null,null!==e&&(r=e.memoizedState.cache),t.memoizedState.cache!==r&&(t.flags|=2048),Ca(Ma),J(),n.pendingContext&&(n.context=n.pendingContext,n.pendingContext=null),null!==e&&null!==e.child||(ya(t)?ru(t):null===e||e.memoizedState.isDehydrated&&!(256&t.flags)||(t.flags|=1024,ba())),iu(t),null
case 26:return n=t.memoizedState,null===e?(ru(t),null!==n?(iu(t),au(t,n)):(iu(t),t.flags&=-16777217)):n?n!==e.memoizedState?(ru(t),iu(t),au(t,n)):(iu(t),t.flags&=-16777217):(e.memoizedProps!==r&&ru(t),iu(t),t.flags&=-16777217),null
case 27:ee(t),n=Y.current
var a=t.type
if(null!==e&&null!=t.stateNode)e.memoizedProps!==r&&ru(t)
else{if(!r){if(null===t.stateNode)throw Error(l(166))
return iu(t),null}e=q.current,ya(t)?ma(t):(e=Pf(a,r,n),t.stateNode=e,ru(t))}return iu(t),null
case 5:if(ee(t),n=t.type,null!==e&&null!=t.stateNode)e.memoizedProps!==r&&ru(t)
else{if(!r){if(null===t.stateNode)throw Error(l(166))
return iu(t),null}if(e=q.current,ya(t))ma(t)
else{switch(a=sf(Y.current),e){case 1:e=a.createElementNS("http://www.w3.org/2000/svg",n)
break
case 2:e=a.createElementNS("http://www.w3.org/1998/Math/MathML",n)
break
default:switch(n){case"svg":e=a.createElementNS("http://www.w3.org/2000/svg",n)
break
case"math":e=a.createElementNS("http://www.w3.org/1998/Math/MathML",n)
break
case"script":(e=a.createElement("div")).innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)
break
case"select":e="string"==typeof r.is?a.createElement("select",{is:r.is}):a.createElement("select"),r.multiple?e.multiple=1:r.size&&(e.size=r.size)
break
default:e="string"==typeof r.is?a.createElement(n,{is:r.is}):a.createElement(n)}}e[Me]=t,e[$e]=r
e:for(a=t.child;null!==a;){if(5===a.tag||6===a.tag)e.appendChild(a.stateNode)
else if(4!==a.tag&&27!==a.tag&&null!==a.child){a.child.return=a,a=a.child
continue}if(a===t)break e
for(;null===a.sibling;){if(null===a.return||a.return===t)break e
a=a.return}a.sibling.return=a.return,a=a.sibling}t.stateNode=e
e:switch(lf(e,n,r),n){case"button":case"input":case"select":case"textarea":e=!!r.autoFocus
break e
case"img":e=1
break e
default:e=0}e&&ru(t)}}return iu(t),t.flags&=-16777217,null
case 6:if(e&&null!=t.stateNode)e.memoizedProps!==r&&ru(t)
else{if("string"!=typeof r&&null===t.stateNode)throw Error(l(166))
if(e=Y.current,ya(t)){if(e=t.stateNode,n=t.memoizedProps,r=null,null!==(a=ua))switch(a.tag){case 27:case 5:r=a.memoizedProps}e[Me]=t,(e=e.nodeValue===n||null!==r&&1==r.suppressHydrationWarning||tf(e.nodeValue,n)?1:0)||ha(t)}else(e=sf(e).createTextNode(r))[Me]=t,t.stateNode=e}return iu(t),null
case 13:if(r=t.memoizedState,null===e||null!==e.memoizedState&&null!==e.memoizedState.dehydrated){if(a=ya(t),null!==r&&null!==r.dehydrated){if(null===e){if(!a)throw Error(l(318))
if(!(a=null!==(a=t.memoizedState)?a.dehydrated:null))throw Error(l(317))
a[Me]=t}else va(),!(128&t.flags)&&(t.memoizedState=null),t.flags|=4
iu(t),a=0}else a=ba(),null!==e&&null!==e.memoizedState&&(e.memoizedState.hydrationErrors=a),a=1
if(!a)return 256&t.flags?(hi(t),t):(hi(t),null)}if(hi(t),128&t.flags)return t.lanes=n,t
if(n=null!==r,e=null!==e&&null!==e.memoizedState,n){a=null,null!==(r=t.child).alternate&&null!==r.alternate.memoizedState&&null!==r.alternate.memoizedState.cachePool&&(a=r.alternate.memoizedState.cachePool.pool)
var o=null
null!==r.memoizedState&&null!==r.memoizedState.cachePool&&(o=r.memoizedState.cachePool.pool),o!==a&&(r.flags|=2048)}return n!==e&&n&&(t.child.flags|=8192),lu(t,t.updateQueue),iu(t),null
case 4:return J(),null===e&&Vc(t.stateNode.containerInfo),iu(t),null
case 10:return Ca(t.type),iu(t),null
case 19:if(V(mi),null===(a=t.memoizedState))return iu(t),null
if(r=!!(128&t.flags),null===(o=a.rendering))if(r)ou(a,0)
else{if(0!==ys||null!==e&&128&e.flags)for(e=t.child;null!==e;){if(null!==(o=gi(e))){for(t.flags|=128,ou(a,0),e=o.updateQueue,t.updateQueue=e,lu(t,e),t.subtreeFlags=0,e=n,n=t.child;null!==n;)Wr(n,e),n=n.sibling
return Q(mi,1&mi.current|2),t.child}e=e.sibling}null!==a.tail&&oe()>_s&&(t.flags|=128,r=1,ou(a,0),t.lanes=4194304)}else{if(!r)if(null!==(e=gi(o))){if(t.flags|=128,r=1,e=e.updateQueue,t.updateQueue=e,lu(t,e),ou(a,1),null===a.tail&&"hidden"===a.tailMode&&!o.alternate&&!ca)return iu(t),null}else 2*oe()-a.renderingStartTime>_s&&536870912!==n&&(t.flags|=128,r=1,ou(a,0),t.lanes=4194304)
a.isBackwards?(o.sibling=t.child,t.child=o):(null!==(e=a.last)?e.sibling=o:t.child=o,a.last=o)}return null!==a.tail?(t=a.tail,a.rendering=t,a.tail=t.sibling,a.renderingStartTime=oe(),t.sibling=null,e=mi.current,Q(mi,r?1&e|2:1&e),t):(iu(t),null)
case 22:case 23:return hi(t),Sl(),r=null!==t.memoizedState,null!==e?null!==e.memoizedState!==r&&(t.flags|=8192):r&&(t.flags|=8192),r?!!(536870912&n)&&!(128&t.flags)&&(iu(t),6&t.subtreeFlags&&(t.flags|=8192)):iu(t),null!==(n=t.updateQueue)&&lu(t,n.retryQueue),n=null,null!==e&&null!==e.memoizedState&&null!==e.memoizedState.cachePool&&(n=e.memoizedState.cachePool.pool),r=null,null!==t.memoizedState&&null!==t.memoizedState.cachePool&&(r=t.memoizedState.cachePool.pool),r!==n&&(t.flags|=2048),null!==e&&V(Qa),null
case 24:return n=null,null!==e&&(n=e.memoizedState.cache),t.memoizedState.cache!==n&&(t.flags|=2048),Ca(Ma),iu(t),null
case 25:case 30:return null}throw Error(l(156,t.tag))}function su(e,t){switch(ia(t),t.tag){case 1:return 65536&(e=t.flags)?(t.flags=-65537&e|128,t):null
case 3:return Ca(Ma),J(),65536&(e=t.flags)&&!(128&e)?(t.flags=-65537&e|128,t):null
case 26:case 27:case 5:return ee(t),null
case 13:if(hi(t),null!==(e=t.memoizedState)&&null!==e.dehydrated){if(null===t.alternate)throw Error(l(340))
va()}return 65536&(e=t.flags)?(t.flags=-65537&e|128,t):null
case 19:return V(mi),null
case 4:return J(),null
case 10:return Ca(t.type),null
case 22:case 23:return hi(t),Sl(),null!==e&&V(Qa),65536&(e=t.flags)?(t.flags=-65537&e|128,t):null
case 24:return Ca(Ma),null
default:return null}}function cu(e,t){switch(ia(t),t.tag){case 3:Ca(Ma),J()
break
case 26:case 27:case 5:ee(t)
break
case 4:J()
break
case 13:hi(t)
break
case 19:V(mi)
break
case 10:Ca(t.type)
break
case 22:case 23:hi(t),Sl(),null!==e&&V(Qa)
break
case 24:Ca(Ma)}}function fu(e,t){try{var n=t.updateQueue,r=null!==n?n.lastEffect:null
if(null!==r){var a=r.next
n=a
do{if((n.tag&e)===e){r=void 0
var l=n.create,o=n.inst
r=l(),o.destroy=r}n=n.next}while(n!==a)}}catch(i){mc(t,t.return,i)}}function du(e,t,n){try{var r=t.updateQueue,a=null!==r?r.lastEffect:null
if(null!==a){var l=a.next
r=l
do{if((r.tag&e)===e){var o=r.inst,i=o.destroy
if(void 0!==i){o.destroy=void 0,a=t
var u=n,s=i
try{s()}catch(c){mc(a,u,c)}}}r=r.next}while(r!==l)}}catch(c){mc(t,t.return,c)}}function pu(e){var t=e.updateQueue
if(null!==t){var n=e.stateNode
try{yl(t,n)}catch(r){mc(e,e.return,r)}}}function hu(e,t,n){n.props=wi(e.type,e.memoizedProps),n.state=e.memoizedState
try{n.componentWillUnmount()}catch(r){mc(e,t,r)}}function mu(e,t){try{var n=e.ref
if(null!==n){switch(e.tag){case 26:case 27:case 5:var r=e.stateNode
break
default:r=e.stateNode}"function"==typeof n?e.refCleanup=n(r):n.current=r}}catch(a){mc(e,t,a)}}function gu(e,t){var n=e.ref,r=e.refCleanup
if(null!==n)if("function"==typeof r)try{r()}catch(a){mc(e,t,a)}finally{e.refCleanup=null,null!=(e=e.alternate)&&(e.refCleanup=null)}else if("function"==typeof n)try{n(null)}catch(l){mc(e,t,l)}else n.current=null}function yu(e){var t=e.type,n=e.memoizedProps,r=e.stateNode
try{e:switch(t){case"button":case"input":case"select":case"textarea":n.autoFocus&&r.focus()
break e
case"img":n.src?r.src=n.src:n.srcSet&&(r.srcset=n.srcSet)}}catch(a){mc(e,e.return,a)}}function vu(e,t,n){try{var r=e.stateNode
!function(e,t,n,r){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break
case"input":var a=null,o=null,i=null,u=null,s=null,c=null,f=null
for(h in n){var d=n[h]
if(n.hasOwnProperty(h)&&null!=d)switch(h){case"checked":case"value":break
case"defaultValue":s=d
default:r.hasOwnProperty(h)||rf(e,t,h,null,r,d)}}for(var p in r){var h=r[p]
if(d=n[p],r.hasOwnProperty(p)&&(null!=h||null!=d))switch(p){case"type":o=h
break
case"name":a=h
break
case"checked":c=h
break
case"defaultChecked":f=h
break
case"value":i=h
break
case"defaultValue":u=h
break
case"children":case"dangerouslySetInnerHTML":if(null!=h)throw Error(l(137,t))
break
default:h!==d&&rf(e,t,p,h,r,d)}}return void wt(e,i,u,s,c,f,o,a)
case"select":for(o in h=i=u=p=null,n)if(s=n[o],n.hasOwnProperty(o)&&null!=s)switch(o){case"value":break
case"multiple":h=s
default:r.hasOwnProperty(o)||rf(e,t,o,null,r,s)}for(a in r)if(o=r[a],s=n[a],r.hasOwnProperty(a)&&(null!=o||null!=s))switch(a){case"value":p=o
break
case"defaultValue":u=o
break
case"multiple":i=o
default:o!==s&&rf(e,t,a,o,r,s)}return t=u,n=i,r=h,void(null!=p?xt(e,!!n,p,0):!!r!=!!n&&(null!=t?xt(e,!!n,t,1):xt(e,!!n,n?[]:"",0)))
case"textarea":for(u in h=p=null,n)if(a=n[u],n.hasOwnProperty(u)&&null!=a&&!r.hasOwnProperty(u))switch(u){case"value":case"children":break
default:rf(e,t,u,null,r,a)}for(i in r)if(a=r[i],o=n[i],r.hasOwnProperty(i)&&(null!=a||null!=o))switch(i){case"value":p=a
break
case"defaultValue":h=a
break
case"children":break
case"dangerouslySetInnerHTML":if(null!=a)throw Error(l(91))
break
default:a!==o&&rf(e,t,i,a,r,o)}return void Ct(e,p,h)
case"option":for(var m in n)p=n[m],n.hasOwnProperty(m)&&null!=p&&!r.hasOwnProperty(m)&&("selected"===m?e.selected=0:rf(e,t,m,null,r,p))
for(s in r)p=r[s],h=n[s],!r.hasOwnProperty(s)||p===h||null==p&&null==h||("selected"===s?e.selected=p&&"function"!=typeof p&&"symbol"!=typeof p:rf(e,t,s,p,r,h))
return
case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var g in n)p=n[g],n.hasOwnProperty(g)&&null!=p&&!r.hasOwnProperty(g)&&rf(e,t,g,null,r,p)
for(c in r)if(p=r[c],h=n[c],r.hasOwnProperty(c)&&p!==h&&(null!=p||null!=h))switch(c){case"children":case"dangerouslySetInnerHTML":if(null!=p)throw Error(l(137,t))
break
default:rf(e,t,c,p,r,h)}return
default:if(Lt(t)){for(var y in n)p=n[y],n.hasOwnProperty(y)&&void 0!==p&&!r.hasOwnProperty(y)&&af(e,t,y,void 0,r,p)
for(f in r)p=r[f],h=n[f],!r.hasOwnProperty(f)||p===h||void 0===p&&void 0===h||af(e,t,f,p,r,h)
return}}for(var v in n)p=n[v],n.hasOwnProperty(v)&&null!=p&&!r.hasOwnProperty(v)&&rf(e,t,v,null,r,p)
for(d in r)p=r[d],h=n[d],!r.hasOwnProperty(d)||p===h||null==p&&null==h||rf(e,t,d,p,r,h)}(r,e.type,n,t),r[$e]=t}catch(a){mc(e,e.return,a)}}function bu(e){return 5===e.tag||3===e.tag||26===e.tag||27===e.tag&&bf(e.type)||4===e.tag}function ku(e){e:for(;;){for(;null===e.sibling;){if(null===e.return||bu(e.return))return null
e=e.return}for(e.sibling.return=e.return,e=e.sibling;5!==e.tag&&6!==e.tag&&18!==e.tag;){if(27===e.tag&&bf(e.type))continue e
if(2&e.flags)continue e
if(null===e.child||4===e.tag)continue e
e.child.return=e,e=e.child}if(!(2&e.flags))return e.stateNode}}function wu(e,t,n){var r=e.tag
if(5===r||6===r)e=e.stateNode,t?(9===n.nodeType?n.body:"HTML"===n.nodeName?n.ownerDocument.body:n).insertBefore(e,t):((t=9===n.nodeType?n.body:"HTML"===n.nodeName?n.ownerDocument.body:n).appendChild(e),null!=(n=n._reactRootContainer)||null!==t.onclick||(t.onclick=nf))
else if(4!==r&&(27===r&&bf(e.type)&&(n=e.stateNode,t=null),null!==(e=e.child)))for(wu(e,t,n),e=e.sibling;null!==e;)wu(e,t,n),e=e.sibling}function Su(e,t,n){var r=e.tag
if(5===r||6===r)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e)
else if(4!==r&&(27===r&&bf(e.type)&&(n=e.stateNode),null!==(e=e.child)))for(Su(e,t,n),e=e.sibling;null!==e;)Su(e,t,n),e=e.sibling}function Eu(e){var t=e.stateNode,n=e.memoizedProps
try{for(var r=e.type,a=t.attributes;a.length;)t.removeAttributeNode(a[0])
lf(t,r,n),t[Me]=e,t[$e]=n}catch(l){mc(e,e.return,l)}}var xu=0,Cu=0,Pu=0,_u="function"==typeof WeakSet?WeakSet:Set,Nu=null
function zu(e,t,n){var r=n.flags
switch(n.tag){case 0:case 11:case 15:Hu(e,n),4&r&&fu(5,n)
break
case 1:if(Hu(e,n),4&r)if(e=n.stateNode,null===t)try{e.componentDidMount()}catch(o){mc(n,n.return,o)}else{var a=wi(n.type,t.memoizedProps)
t=t.memoizedState
try{e.componentDidUpdate(a,t,e.__reactInternalSnapshotBeforeUpdate)}catch(i){mc(n,n.return,i)}}64&r&&pu(n),512&r&&mu(n,n.return)
break
case 3:if(Hu(e,n),64&r&&null!==(e=n.updateQueue)){if(t=null,null!==n.child)switch(n.child.tag){case 27:case 5:case 1:t=n.child.stateNode}try{yl(e,t)}catch(o){mc(n,n.return,o)}}break
case 27:null===t&&4&r&&Eu(n)
case 26:case 5:Hu(e,n),null===t&&4&r&&yu(n),512&r&&mu(n,n.return)
break
case 12:Hu(e,n)
break
case 13:Hu(e,n),4&r&&Au(e,n),64&r&&null!==(e=n.memoizedState)&&null!==(e=e.dehydrated)&&function(e,t){var n=e.ownerDocument
if("$?"!==e.data||"complete"===n.readyState)t()
else{var r=function(){t(),n.removeEventListener("DOMContentLoaded",r)}
n.addEventListener("DOMContentLoaded",r),e._reactRetry=r}}(e,n=bc.bind(null,n))
break
case 22:if(!(r=null!==n.memoizedState||xu)){t=null!==t&&null!==t.memoizedState||Cu,a=xu
var l=Cu
xu=r,(Cu=t)&&!l?Wu(e,n,!!(8772&n.subtreeFlags)):Hu(e,n),xu=a,Cu=l}break
case 30:break
default:Hu(e,n)}}function Tu(e){var t=e.alternate
null!==t&&(e.alternate=null,Tu(t)),e.child=null,e.deletions=null,e.sibling=null,5===e.tag&&null!==(t=e.stateNode)&&Ve(t),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var Lu=null,Ru=0
function Ou(e,t,n){for(n=n.child;null!==n;)Du(e,t,n),n=n.sibling}function Du(e,t,n){if(ge&&"function"==typeof ge.onCommitFiberUnmount)try{ge.onCommitFiberUnmount(me,n)}catch(l){}switch(n.tag){case 26:Cu||gu(n,t),Ou(e,t,n),n.memoizedState?n.memoizedState.count--:n.stateNode&&(n=n.stateNode).parentNode.removeChild(n)
break
case 27:Cu||gu(n,t)
var r=Lu,a=Ru
bf(n.type)&&(Lu=n.stateNode,Ru=0),Ou(e,t,n),_f(n.stateNode),Lu=r,Ru=a
break
case 5:Cu||gu(n,t)
case 6:if(r=Lu,a=Ru,Lu=null,Ou(e,t,n),Ru=a,null!==(Lu=r))if(Ru)try{(9===Lu.nodeType?Lu.body:"HTML"===Lu.nodeName?Lu.ownerDocument.body:Lu).removeChild(n.stateNode)}catch(o){mc(n,t,o)}else try{Lu.removeChild(n.stateNode)}catch(o){mc(n,t,o)}break
case 18:null!==Lu&&(Ru?(kf(9===(e=Lu).nodeType?e.body:"HTML"===e.nodeName?e.ownerDocument.body:e,n.stateNode),Od(e)):kf(Lu,n.stateNode))
break
case 4:r=Lu,a=Ru,Lu=n.stateNode.containerInfo,Ru=1,Ou(e,t,n),Lu=r,Ru=a
break
case 0:case 11:case 14:case 15:Cu||du(2,n,t),Cu||du(4,n,t),Ou(e,t,n)
break
case 1:Cu||(gu(n,t),"function"==typeof(r=n.stateNode).componentWillUnmount&&hu(n,t,r)),Ou(e,t,n)
break
case 21:Ou(e,t,n)
break
case 22:Cu=(r=Cu)||null!==n.memoizedState,Ou(e,t,n),Cu=r
break
default:Ou(e,t,n)}}function Au(e,t){if(null===t.memoizedState&&null!==(e=t.alternate)&&null!==(e=e.memoizedState)&&null!==(e=e.dehydrated))try{Od(e)}catch(n){mc(t,t.return,n)}}function Fu(e,t){var n=function(e){switch(e.tag){case 13:case 19:var t=e.stateNode
return null===t&&(t=e.stateNode=new _u),t
case 22:return null===(t=(e=e.stateNode)._retryCache)&&(t=e._retryCache=new _u),t
default:throw Error(l(435,e.tag))}}(e)
t.forEach(function(t){var r=kc.bind(null,e,t)
n.has(t)||(n.add(t),t.then(r,r))})}function Mu(e,t){var n=t.deletions
if(null!==n)for(var r=0;r<n.length;r++){var a=n[r],o=e,i=t,u=i
e:for(;null!==u;){switch(u.tag){case 27:if(bf(u.type)){Lu=u.stateNode,Ru=0
break e}break
case 5:Lu=u.stateNode,Ru=0
break e
case 3:case 4:Lu=u.stateNode.containerInfo,Ru=1
break e}u=u.return}if(null===Lu)throw Error(l(160))
Du(o,i,a),Lu=null,Ru=0,null!==(o=a.alternate)&&(o.return=null),a.return=null}if(13878&t.subtreeFlags)for(t=t.child;null!==t;)Iu(t,e),t=t.sibling}var $u=null
function Iu(e,t){var n=e.alternate,r=e.flags
switch(e.tag){case 0:case 11:case 14:case 15:Mu(t,e),Uu(e),4&r&&(du(3,e,e.return),fu(3,e),du(5,e,e.return))
break
case 1:Mu(t,e),Uu(e),512&r&&(Cu||null===n||gu(n,n.return)),64&r&&xu&&null!==(e=e.updateQueue)&&null!==(r=e.callbacks)&&(n=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=null===n?r:n.concat(r))
break
case 26:var a=$u
if(Mu(t,e),Uu(e),512&r&&(Cu||null===n||gu(n,n.return)),4&r){var o=null!==n?n.memoizedState:null
if(r=e.memoizedState,null===n)if(null===r)if(null===e.stateNode){e:{r=e.type,n=e.memoizedProps,a=a.ownerDocument||a
t:switch(r){case"title":(!(o=a.getElementsByTagName("title")[0])||o[We]||o[Me]||"http://www.w3.org/2000/svg"===o.namespaceURI||o.hasAttribute("itemprop"))&&(o=a.createElement(r),a.head.insertBefore(o,a.querySelector("head > title"))),lf(o,r,n),o[Me]=e,Ge(o),r=o
break e
case"link":var i=Vf("link","href",a).get(r+(n.href||""))
if(i)for(var u=0;u<i.length;u++)if((o=i[u]).getAttribute("href")===(null==n.href||""===n.href?null:n.href)&&o.getAttribute("rel")===(null==n.rel?null:n.rel)&&o.getAttribute("title")===(null==n.title?null:n.title)&&o.getAttribute("crossorigin")===(null==n.crossOrigin?null:n.crossOrigin)){i.splice(u,1)
break t}lf(o=a.createElement(r),r,n),a.head.appendChild(o)
break
case"meta":if(i=Vf("meta","content",a).get(r+(n.content||"")))for(u=0;u<i.length;u++)if((o=i[u]).getAttribute("content")===(null==n.content?null:""+n.content)&&o.getAttribute("name")===(null==n.name?null:n.name)&&o.getAttribute("property")===(null==n.property?null:n.property)&&o.getAttribute("http-equiv")===(null==n.httpEquiv?null:n.httpEquiv)&&o.getAttribute("charset")===(null==n.charSet?null:n.charSet)){i.splice(u,1)
break t}lf(o=a.createElement(r),r,n),a.head.appendChild(o)
break
default:throw Error(l(468,r))}o[Me]=e,Ge(o),r=o}e.stateNode=r}else Qf(a,e.type,e.stateNode)
else e.stateNode=Uf(a,r,e.memoizedProps)
else o!==r?(null===o?null!==n.stateNode&&(n=n.stateNode).parentNode.removeChild(n):o.count--,null===r?Qf(a,e.type,e.stateNode):Uf(a,r,e.memoizedProps)):null===r&&null!==e.stateNode&&vu(e,e.memoizedProps,n.memoizedProps)}break
case 27:Mu(t,e),Uu(e),512&r&&(Cu||null===n||gu(n,n.return)),null!==n&&4&r&&vu(e,e.memoizedProps,n.memoizedProps)
break
case 5:if(Mu(t,e),Uu(e),512&r&&(Cu||null===n||gu(n,n.return)),32&e.flags){a=e.stateNode
try{_t(a,"")}catch(h){mc(e,e.return,h)}}4&r&&null!=e.stateNode&&vu(e,a=e.memoizedProps,null!==n?n.memoizedProps:a),1024&r&&(Pu=1)
break
case 6:if(Mu(t,e),Uu(e),4&r){if(null===e.stateNode)throw Error(l(162))
r=e.memoizedProps,n=e.stateNode
try{n.nodeValue=r}catch(h){mc(e,e.return,h)}}break
case 3:if(Wf=null,a=$u,$u=Tf(t.containerInfo),Mu(t,e),$u=a,Uu(e),4&r&&null!==n&&n.memoizedState.isDehydrated)try{Od(t.containerInfo)}catch(h){mc(e,e.return,h)}Pu&&(Pu=0,ju(e))
break
case 4:r=$u,$u=Tf(e.stateNode.containerInfo),Mu(t,e),Uu(e),$u=r
break
case 12:default:Mu(t,e),Uu(e)
break
case 13:Mu(t,e),Uu(e),8192&e.child.flags&&null!==e.memoizedState!=(null!==n&&null!==n.memoizedState)&&(Ps=oe()),4&r&&null!==(r=e.updateQueue)&&(e.updateQueue=null,Fu(e,r))
break
case 22:a=null!==e.memoizedState
var s=null!==n&&null!==n.memoizedState,c=xu,f=Cu
if(xu=c||a,Cu=f||s,Mu(t,e),Cu=f,xu=c,Uu(e),8192&r)e:for(t=e.stateNode,t._visibility=a?-2&t._visibility:1|t._visibility,a&&(null===n||s||xu||Cu||Bu(e)),n=null,t=e;;){if(5===t.tag||26===t.tag){if(null===n){s=n=t
try{if(o=s.stateNode,a)"function"==typeof(i=o.style).setProperty?i.setProperty("display","none","important"):i.display="none"
else{u=s.stateNode
var d=s.memoizedProps.style,p=null!=d&&d.hasOwnProperty("display")?d.display:null
u.style.display=null==p||"boolean"==typeof p?"":(""+p).trim()}}catch(h){mc(s,s.return,h)}}}else if(6===t.tag){if(null===n){s=t
try{s.stateNode.nodeValue=a?"":s.memoizedProps}catch(h){mc(s,s.return,h)}}}else if((22!==t.tag&&23!==t.tag||null===t.memoizedState||t===e)&&null!==t.child){t.child.return=t,t=t.child
continue}if(t===e)break e
for(;null===t.sibling;){if(null===t.return||t.return===e)break e
n===t&&(n=null),t=t.return}n===t&&(n=null),t.sibling.return=t.return,t=t.sibling}4&r&&null!==(r=e.updateQueue)&&null!==(n=r.retryQueue)&&(r.retryQueue=null,Fu(e,n))
break
case 19:Mu(t,e),Uu(e),4&r&&null!==(r=e.updateQueue)&&(e.updateQueue=null,Fu(e,r))
case 30:case 21:}}function Uu(e){var t=e.flags
if(2&t){try{for(var n,r=e.return;null!==r;){if(bu(r)){n=r
break}r=r.return}if(null==n)throw Error(l(160))
switch(n.tag){case 27:var a=n.stateNode
Su(e,ku(e),a)
break
case 5:var o=n.stateNode
32&n.flags&&(_t(o,""),n.flags&=-33),Su(e,ku(e),o)
break
case 3:case 4:var i=n.stateNode.containerInfo
wu(e,ku(e),i)
break
default:throw Error(l(161))}}catch(u){mc(e,e.return,u)}e.flags&=-3}4096&t&&(e.flags&=-4097)}function ju(e){if(1024&e.subtreeFlags)for(e=e.child;null!==e;){var t=e
ju(t),5===t.tag&&1024&t.flags&&t.stateNode.reset(),e=e.sibling}}function Hu(e,t){if(8772&t.subtreeFlags)for(t=t.child;null!==t;)zu(e,t.alternate,t),t=t.sibling}function Bu(e){for(e=e.child;null!==e;){var t=e
switch(t.tag){case 0:case 11:case 14:case 15:du(4,t,t.return),Bu(t)
break
case 1:gu(t,t.return)
var n=t.stateNode
"function"==typeof n.componentWillUnmount&&hu(t,t.return,n),Bu(t)
break
case 27:_f(t.stateNode)
case 26:case 5:gu(t,t.return),Bu(t)
break
case 22:null===t.memoizedState&&Bu(t)
break
default:Bu(t)}e=e.sibling}}function Wu(e,t,n){for(n=n&&!!(8772&t.subtreeFlags),t=t.child;null!==t;){var r=t.alternate,a=e,l=t,o=l.flags
switch(l.tag){case 0:case 11:case 15:Wu(a,l,n),fu(4,l)
break
case 1:if(Wu(a,l,n),"function"==typeof(a=(r=l).stateNode).componentDidMount)try{a.componentDidMount()}catch(s){mc(r,r.return,s)}if(null!==(a=(r=l).updateQueue)){var i=r.stateNode
try{var u=a.shared.hiddenCallbacks
if(null!==u)for(a.shared.hiddenCallbacks=null,a=0;a<u.length;a++)gl(u[a],i)}catch(s){mc(r,r.return,s)}}n&&64&o&&pu(l),mu(l,l.return)
break
case 27:Eu(l)
case 26:case 5:Wu(a,l,n),n&&null===r&&4&o&&yu(l),mu(l,l.return)
break
case 12:Wu(a,l,n)
break
case 13:Wu(a,l,n),n&&4&o&&Au(a,l)
break
case 22:null===l.memoizedState&&Wu(a,l,n),mu(l,l.return)
break
case 30:break
default:Wu(a,l,n)}t=t.sibling}}function Vu(e,t){var n=null
null!==e&&null!==e.memoizedState&&null!==e.memoizedState.cachePool&&(n=e.memoizedState.cachePool.pool),e=null,null!==t.memoizedState&&null!==t.memoizedState.cachePool&&(e=t.memoizedState.cachePool.pool),e!==n&&(null!=e&&e.refCount++,null!=n&&Ia(n))}function Qu(e,t){e=null,null!==t.alternate&&(e=t.alternate.memoizedState.cache),(t=t.memoizedState.cache)!==e&&(t.refCount++,null!=e&&Ia(e))}function qu(e,t,n,r){if(10256&t.subtreeFlags)for(t=t.child;null!==t;)Ku(e,t,n,r),t=t.sibling}function Ku(e,t,n,r){var a=t.flags
switch(t.tag){case 0:case 11:case 15:qu(e,t,n,r),2048&a&&fu(9,t)
break
case 1:case 13:default:qu(e,t,n,r)
break
case 3:qu(e,t,n,r),2048&a&&(e=null,null!==t.alternate&&(e=t.alternate.memoizedState.cache),(t=t.memoizedState.cache)!==e&&(t.refCount++,null!=e&&Ia(e)))
break
case 12:if(2048&a){qu(e,t,n,r),e=t.stateNode
try{var l=t.memoizedProps,o=l.id,i=l.onPostCommit
"function"==typeof i&&i(o,null===t.alternate?"mount":"update",e.passiveEffectDuration,-0)}catch(u){mc(t,t.return,u)}}else qu(e,t,n,r)
break
case 23:break
case 22:l=t.stateNode,o=t.alternate,null!==t.memoizedState?2&l._visibility?qu(e,t,n,r):Gu(e,t):2&l._visibility?qu(e,t,n,r):(l._visibility|=2,Yu(e,t,n,r,!!(10256&t.subtreeFlags))),2048&a&&Vu(o,t)
break
case 24:qu(e,t,n,r),2048&a&&Qu(t.alternate,t)}}function Yu(e,t,n,r,a){for(a=a&&!!(10256&t.subtreeFlags),t=t.child;null!==t;){var l=e,o=t,i=n,u=r,s=o.flags
switch(o.tag){case 0:case 11:case 15:Yu(l,o,i,u,a),fu(8,o)
break
case 23:break
case 22:var c=o.stateNode
null!==o.memoizedState?2&c._visibility?Yu(l,o,i,u,a):Gu(l,o):(c._visibility|=2,Yu(l,o,i,u,a)),a&&2048&s&&Vu(o.alternate,o)
break
case 24:Yu(l,o,i,u,a),a&&2048&s&&Qu(o.alternate,o)
break
default:Yu(l,o,i,u,a)}t=t.sibling}}function Gu(e,t){if(10256&t.subtreeFlags)for(t=t.child;null!==t;){var n=e,r=t,a=r.flags
switch(r.tag){case 22:Gu(n,r),2048&a&&Vu(r.alternate,r)
break
case 24:Gu(n,r),2048&a&&Qu(r.alternate,r)
break
default:Gu(n,r)}t=t.sibling}}var Xu=8192
function Ju(e){if(e.subtreeFlags&Xu)for(e=e.child;null!==e;)Zu(e),e=e.sibling}function Zu(e){switch(e.tag){case 26:Ju(e),e.flags&Xu&&null!==e.memoizedState&&function(e,t,n){if(null===Kf)throw Error(l(475))
var r=Kf
if(!("stylesheet"!==t.type||"string"==typeof n.media&&0==matchMedia(n.media).matches||4&t.state.loading)){if(null===t.instance){var a=Af(n.href),o=e.querySelector(Ff(a))
if(o)return null!==(e=o._p)&&"object"==typeof e&&"function"==typeof e.then&&(r.count++,r=Gf.bind(r),e.then(r,r)),t.state.loading|=4,t.instance=o,void Ge(o)
o=e.ownerDocument||e,n=Mf(n),(a=Nf.get(a))&&Hf(n,a),Ge(o=o.createElement("link"))
var i=o
i._p=new Promise(function(e,t){i.onload=e,i.onerror=t}),lf(o,"link",n),t.instance=o}null===r.stylesheets&&(r.stylesheets=new Map),r.stylesheets.set(t,e),(e=t.state.preload)&&!(3&t.state.loading)&&(r.count++,t=Gf.bind(r),e.addEventListener("load",t),e.addEventListener("error",t))}}($u,e.memoizedState,e.memoizedProps)
break
case 5:default:Ju(e)
break
case 3:case 4:var t=$u
$u=Tf(e.stateNode.containerInfo),Ju(e),$u=t
break
case 22:null===e.memoizedState&&(null!==(t=e.alternate)&&null!==t.memoizedState?(t=Xu,Xu=16777216,Ju(e),Xu=t):Ju(e))}}function es(e){var t=e.alternate
if(null!==t&&null!==(e=t.child)){t.child=null
do{t=e.sibling,e.sibling=null,e=t}while(null!==e)}}function ts(e){var t=e.deletions
if(16&e.flags){if(null!==t)for(var n=0;n<t.length;n++){var r=t[n]
Nu=r,as(r,e)}es(e)}if(10256&e.subtreeFlags)for(e=e.child;null!==e;)ns(e),e=e.sibling}function ns(e){switch(e.tag){case 0:case 11:case 15:ts(e),2048&e.flags&&du(9,e,e.return)
break
case 3:case 12:default:ts(e)
break
case 22:var t=e.stateNode
null!==e.memoizedState&&2&t._visibility&&(null===e.return||13!==e.return.tag)?(t._visibility&=-3,rs(e)):ts(e)}}function rs(e){var t=e.deletions
if(16&e.flags){if(null!==t)for(var n=0;n<t.length;n++){var r=t[n]
Nu=r,as(r,e)}es(e)}for(e=e.child;null!==e;){switch((t=e).tag){case 0:case 11:case 15:du(8,t,t.return),rs(t)
break
case 22:2&(n=t.stateNode)._visibility&&(n._visibility&=-3,rs(t))
break
default:rs(t)}e=e.sibling}}function as(e,t){for(;null!==Nu;){var n=Nu
switch(n.tag){case 0:case 11:case 15:du(8,n,t)
break
case 23:case 22:if(null!==n.memoizedState&&null!==n.memoizedState.cachePool){var r=n.memoizedState.cachePool.pool
null!=r&&r.refCount++}break
case 24:Ia(n.memoizedState.cache)}if(null!==(r=n.child))r.return=n,Nu=r
else e:for(n=e;null!==Nu;){var a=(r=Nu).sibling,l=r.return
if(Tu(r),r===n){Nu=null
break e}if(null!==a){a.return=l,Nu=a
break e}Nu=l}}}var ls={getCacheForType:function(e){var t=La(Ma),n=t.data.get(e)
return void 0===n&&(n=e(),t.data.set(e,n)),n}},os="function"==typeof WeakMap?WeakMap:Map,is=0,us=null,ss=null,cs=0,fs=0,ds=null,ps=0,hs=0,ms=0,gs=0,ys=0,vs=0,bs=0,ks=0,ws=0,Ss=0,Es=null,xs=null,Cs=0,Ps=0,_s=1/0,Ns=null,zs=null,Ts=0,Ls=null,Rs=null,Os=0,Ds=0,As=null,Fs=null,Ms=0,$s=null
function Is(){return 2&is&&0!==cs?cs&-cs:null!==I.T?0!==Ha?Ha:Dc():Ae()}function Us(){0===ws&&(ws=536870912&cs&&!ca?536870912:_e())
var e=si.current
return null!==e&&(e.flags|=32),ws}function js(e,t,n){(e!==us||2!==fs&&9!==fs)&&null===e.cancelPendingCommit||(Ks(e,0),Vs(e,cs,ws,0)),Te(e,n),2&is&&e===us||(e===us&&(!(2&is)&&(bs|=n),4===ys&&Vs(e,cs,ws,0)),_c(e))}function Hs(e,t,n){if(6&is)throw Error(l(327))
for(var r=!n&&!(124&t)&&0===(t&e.expiredLanes)||Ce(e,t),a=r?function(e,t){var n=is
is|=2
var r=Gs(),a=Xs()
us!==e||cs!==t?(Ns=null,_s=oe()+500,Ks(e,t)):hs=Ce(e,t)
e:for(;;)try{if(0!==fs&&null!==ss){t=ss
var o=ds
t:switch(fs){case 1:fs=0,ds=null,ac(e,t,o,1)
break
case 2:case 9:if(el(o)){fs=0,ds=null,rc(t)
break}t=function(){2!==fs&&9!==fs||us!==e||(fs=7),_c(e)},o.then(t,t)
break e
case 3:fs=7
break e
case 4:fs=5
break e
case 7:el(o)?(fs=0,ds=null,rc(t)):(fs=0,ds=null,ac(e,t,o,7))
break
case 5:var i=null
switch(ss.tag){case 26:i=ss.memoizedState
case 5:case 27:var u=ss
if(!i||qf(i)){fs=0,ds=null
var s=u.sibling
if(null!==s)ss=s
else{var c=u.return
null!==c?(ss=c,lc(c)):ss=null}break t}}fs=0,ds=null,ac(e,t,o,5)
break
case 6:fs=0,ds=null,ac(e,t,o,6)
break
case 8:qs(),ys=6
break e
default:throw Error(l(462))}}tc()
break}catch(f){Ys(e,f)}return Ea=Sa=null,I.H=r,I.A=a,is=n,null!==ss?0:(us=null,cs=0,Or(),ys)}(e,t):Zs(e,t,1),o=r;;){if(0===a){hs&&!r&&Vs(e,t,0,0)
break}if(n=e.current.alternate,!o||Ws(n)){if(2===a){if(o=t,e.errorRecoveryDisabledLanes&o)var i=0
else i=0!=(i=-536870913&e.pendingLanes)?i:536870912&i?536870912:0
if(0!==i){t=i
e:{var u=e
a=Es
var s=u.current.memoizedState.isDehydrated
if(s&&(Ks(u,i).flags|=256),2!==(i=Zs(u,i,0))){if(ms&&!s){u.errorRecoveryDisabledLanes|=o,bs|=o,a=4
break e}o=xs,xs=a,null!==o&&(null===xs?xs=o:xs.push.apply(xs,o))}a=i}if(o=0,2!==a)continue}}if(1===a){Ks(e,0),Vs(e,t,0,1)
break}e:{switch(r=e,o=a){case 0:case 1:throw Error(l(345))
case 4:if((4194048&t)!==t)break
case 6:Vs(r,t,ws,!ps)
break e
case 2:xs=null
break
case 3:case 5:break
default:throw Error(l(329))}if((62914560&t)===t&&(a=Ps+300-oe())>10){if(Vs(r,t,ws,!ps),0!==xe(r,0,1))break e
r.timeoutHandle=hf(Bs.bind(null,r,n,xs,Ns,Cs,t,ws,bs,Ss,ps,o,2,-0,0),a)}else Bs(r,n,xs,Ns,Cs,t,ws,bs,Ss,ps,o,0,-0,0)}break}a=Zs(e,t,0),o=0}_c(e)}function Bs(e,t,n,r,a,o,i,u,s,c,f,d,p,h){if(e.timeoutHandle=-1,(8192&(d=t.subtreeFlags)||!(16785408&~d))&&(Kf={stylesheets:null,count:0,unsuspend:Yf},Zu(t),null!==(d=function(){if(null===Kf)throw Error(l(475))
var e=Kf
return e.stylesheets&&0===e.count&&Jf(e,e.stylesheets),e.count>0?function(t){var n=setTimeout(function(){if(e.stylesheets&&Jf(e,e.stylesheets),e.unsuspend){var t=e.unsuspend
e.unsuspend=null,t()}},6e4)
return e.unsuspend=t,function(){e.unsuspend=null,clearTimeout(n)}}:null}())))return e.cancelPendingCommit=d(ic.bind(null,e,t,o,n,r,a,i,u,s,f,1,p,h)),void Vs(e,o,i,!c)
ic(e,t,o,n,r,a,i,u,s)}function Ws(e){for(var t=e;;){var n=t.tag
if((0===n||11===n||15===n)&&16384&t.flags&&null!==(n=t.updateQueue)&&null!==(n=n.stores))for(var r=0;r<n.length;r++){var a=n[r],l=a.getSnapshot
a=a.value
try{if(!er(l(),a))return 0}catch(o){return 0}}if(n=t.child,16384&t.subtreeFlags&&null!==n)n.return=t,t=n
else{if(t===e)break
for(;null===t.sibling;){if(null===t.return||t.return===e)return 1
t=t.return}t.sibling.return=t.return,t=t.sibling}}return 1}function Vs(e,t,n,r){t&=~ks,t&=~bs,e.suspendedLanes|=t,e.pingedLanes&=~t,r&&(e.warmLanes|=t),r=e.expirationTimes
for(var a=t;a>0;){var l=31-ve(a),o=1<<l
r[l]=-1,a&=~o}0!==n&&Le(e,n,t)}function Qs(){return 6&is?1:(Nc(0),0)}function qs(){if(null!==ss){if(0===fs)var e=ss.return
else Ea=Sa=null,Hl(e=ss),ei=null,ti=0,e=ss
for(;null!==e;)cu(e.alternate,e),e=e.return
ss=null}}function Ks(e,t){var n=e.timeoutHandle;-1!==n&&(e.timeoutHandle=-1,mf(n)),null!==(n=e.cancelPendingCommit)&&(e.cancelPendingCommit=null,n()),qs(),us=e,ss=n=Br(e.current,null),cs=t,fs=0,ds=null,ps=0,hs=Ce(e,t),ms=0,Ss=ws=ks=bs=vs=ys=0,xs=Es=null,Cs=0,8&t&&(t|=32&t)
var r=e.entangledLanes
if(0!==r)for(e=e.entanglements,r&=t;r>0;){var a=31-ve(r),l=1<<a
t|=e[a],r&=~l}return gs=t,Or(),n}function Ys(e,t){xl=null,I.H=Go,t===Ga||t===Ja?(t=al(),fs=3):t===Xa?(t=al(),fs=4):fs=t===Li?8:null!==t&&"object"==typeof t&&"function"==typeof t.then?6:1,ds=t,null===ss&&(ys=1,Pi(e,zr(t,e.current)))}function Gs(){var e=I.H
return I.H=Go,null===e?Go:e}function Xs(){var e=I.A
return I.A=ls,e}function Js(){ys=4,ps||(4194048&cs)!==cs&&null!==si.current||(hs=1),!(134217727&vs)&&!(134217727&bs)||null===us||Vs(us,cs,ws,0)}function Zs(e,t,n){var r=is
is|=2
var a=Gs(),l=Xs()
us===e&&cs===t||(Ns=null,Ks(e,t)),t=0
var o=ys
e:for(;;)try{if(0!==fs&&null!==ss){var i=ss,u=ds
switch(fs){case 8:qs(),o=6
break e
case 3:case 2:case 9:case 6:null===si.current&&(t=1)
var s=fs
if(fs=0,ds=null,ac(e,i,u,s),n&&hs){o=0
break e}break
default:s=fs,fs=0,ds=null,ac(e,i,u,s)}}ec(),o=ys
break}catch(c){Ys(e,c)}return t&&e.shellSuspendCounter++,Ea=Sa=null,is=r,I.H=a,I.A=l,null===ss&&(us=null,cs=0,Or()),o}function ec(){for(;null!==ss;)nc(ss)}function tc(){for(;null!==ss&&!ae();)nc(ss)}function nc(e){var t=nu(e.alternate,e,gs)
e.memoizedProps=e.pendingProps,null===t?lc(e):ss=t}function rc(e){var t=e,n=t.alternate
switch(t.tag){case 15:case 0:t=ji(n,t,t.pendingProps,t.type,void 0,cs)
break
case 11:t=ji(n,t,t.pendingProps,t.type.render,t.ref,cs)
break
case 5:Hl(t)
default:cu(n,t),t=nu(n,t=ss=Wr(t,gs),gs)}e.memoizedProps=e.pendingProps,null===t?lc(e):ss=t}function ac(e,t,n,r){Ea=Sa=null,Hl(t),ei=null,ti=0
var a=t.return
try{if(function(e,t,n,r,a){if(n.flags|=32768,null!==r&&"object"==typeof r&&"function"==typeof r.then){if(null!==(t=n.alternate)&&Na(t,n,a,1),null!==(n=si.current)){switch(n.tag){case 13:return null===ci?Js():null===n.alternate&&0===ys&&(ys=3),n.flags&=-257,n.flags|=65536,n.lanes=a,r===Za?n.flags|=16384:(null===(t=n.updateQueue)?n.updateQueue=new Set([r]):t.add(r),gc(e,r,a)),0
case 22:return n.flags|=65536,r===Za?n.flags|=16384:(null===(t=n.updateQueue)?(t={transitions:null,markerInstances:null,retryQueue:new Set([r])},n.updateQueue=t):null===(n=t.retryQueue)?t.retryQueue=new Set([r]):n.add(r),gc(e,r,a)),0}throw Error(l(435,n.tag))}return gc(e,r,a),Js(),0}if(ca)return null!==(t=si.current)?(!(65536&t.flags)&&(t.flags|=256),t.flags|=65536,t.lanes=a,r!==pa&&ka(zr(e=Error(l(422),{cause:r}),n))):(r!==pa&&ka(zr(t=Error(l(423),{cause:r}),n)),(e=e.current.alternate).flags|=65536,a&=-a,e.lanes|=a,r=zr(r,n),dl(e,a=Ni(e.stateNode,r,a)),4!==ys&&(ys=2)),0
var o=Error(l(520),{cause:r})
if(o=zr(o,n),null===Es?Es=[o]:Es.push(o),4!==ys&&(ys=2),null===t)return 1
r=zr(r,n),n=t
do{switch(n.tag){case 3:return n.flags|=65536,e=a&-a,n.lanes|=e,dl(n,e=Ni(n.stateNode,r,e)),0
case 1:if(t=n.type,o=n.stateNode,!(128&n.flags||"function"!=typeof t.getDerivedStateFromError&&(null===o||"function"!=typeof o.componentDidCatch||null!==zs&&zs.has(o))))return n.flags|=65536,a&=-a,n.lanes|=a,Ti(a=zi(a),e,n,r),dl(n,a),0}n=n.return}while(null!==n)
return 0}(e,a,t,n,cs))return ys=1,Pi(e,zr(n,e.current)),void(ss=null)}catch(o){if(null!==a)throw ss=a,o
return ys=1,Pi(e,zr(n,e.current)),void(ss=null)}32768&t.flags?(ca||1===r?e=1:hs||536870912&cs?e=0:(ps=e=1,(2===r||9===r||3===r||6===r)&&null!==(r=si.current)&&13===r.tag&&(r.flags|=16384)),oc(t,e)):lc(t)}function lc(e){var t=e
do{if(32768&t.flags)return void oc(t,ps)
e=t.return
var n=uu(t.alternate,t,gs)
if(null!==n)return void(ss=n)
if(null!==(t=t.sibling))return void(ss=t)
ss=t=e}while(null!==t)
0===ys&&(ys=5)}function oc(e,t){do{var n=su(e.alternate,e)
if(null!==n)return n.flags&=32767,void(ss=n)
if(null!==(n=e.return)&&(n.flags|=32768,n.subtreeFlags=0,n.deletions=null),!t&&null!==(e=e.sibling))return void(ss=e)
ss=e=n}while(null!==e)
ys=6,ss=null}function ic(e,t,n,r,a,o,i,u,s){e.cancelPendingCommit=null
do{dc()}while(0!==Ts)
if(6&is)throw Error(l(327))
if(null!==t){if(t===e.current)throw Error(l(177))
if(o=t.lanes|t.childLanes,function(e,t,n,r,a,l){var o=e.pendingLanes
e.pendingLanes=n,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=n,e.entangledLanes&=n,e.errorRecoveryDisabledLanes&=n,e.shellSuspendCounter=0
var i=e.entanglements,u=e.expirationTimes,s=e.hiddenUpdates
for(n=o&~n;n>0;){var c=31-ve(n),f=1<<c
i[c]=0,u[c]=-1
var d=s[c]
if(null!==d)for(s[c]=null,c=0;c<d.length;c++){var p=d[c]
null!==p&&(p.lane&=-536870913)}n&=~f}0!==r&&Le(e,r,0),0!==l&&0===a&&0!==e.tag&&(e.suspendedLanes|=l&~(o&~t))}(e,n,o|=Rr,i,u,s),e===us&&(ss=us=null,cs=0),Rs=t,Ls=e,Os=n,Ds=o,As=a,Fs=r,10256&t.subtreeFlags||10256&t.flags?(e.callbackNode=null,e.callbackPriority=0,ne(ce,function(){return pc(),null})):(e.callbackNode=null,e.callbackPriority=0),r=!!(13878&t.flags),13878&t.subtreeFlags||r){r=I.T,I.T=null,a=U.p,U.p=2,i=is,is|=4
try{!function(e,t){if(e=e.containerInfo,of=ud,or(e=lr(e))){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd}
else e:{var r=(n=(n=e.ownerDocument)&&n.defaultView||window).getSelection&&n.getSelection()
if(r&&0!==r.rangeCount){n=r.anchorNode
var a=r.anchorOffset,o=r.focusNode
r=r.focusOffset
try{n.nodeType,o.nodeType}catch(g){n=null
break e}var i=0,u=-1,s=-1,c=0,f=0,d=e,p=null
t:for(;;){for(var h;d!==n||0!==a&&3!==d.nodeType||(u=i+a),d!==o||0!==r&&3!==d.nodeType||(s=i+r),3===d.nodeType&&(i+=d.nodeValue.length),null!==(h=d.firstChild);)p=d,d=h
for(;;){if(d===e)break t
if(p===n&&++c===a&&(u=i),p===o&&++f===r&&(s=i),null!==(h=d.nextSibling))break
p=(d=p).parentNode}d=h}n=-1===u||-1===s?null:{start:u,end:s}}else n=null}n=n||{start:0,end:0}}else n=null
for(uf={focusedElem:e,selectionRange:n},ud=0,Nu=t;null!==Nu;)if(e=(t=Nu).child,1024&t.subtreeFlags&&null!==e)e.return=t,Nu=e
else for(;null!==Nu;){switch(o=(t=Nu).alternate,e=t.flags,t.tag){case 0:case 11:case 15:case 5:case 26:case 27:case 6:case 4:case 17:break
case 1:if(1024&e&&null!==o){e=void 0,n=t,a=o.memoizedProps,o=o.memoizedState,r=n.stateNode
try{var m=wi(n.type,a,(n.elementType,n.type))
e=r.getSnapshotBeforeUpdate(m,o),r.__reactInternalSnapshotBeforeUpdate=e}catch(y){mc(n,n.return,y)}}break
case 3:if(1024&e)if(9===(n=(e=t.stateNode.containerInfo).nodeType))wf(e)
else if(1===n)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":wf(e)
break
default:e.textContent=""}break
default:if(1024&e)throw Error(l(163))}if(null!==(e=t.sibling)){e.return=t.return,Nu=e
break}Nu=t.return}}(e,t)}finally{is=i,U.p=a,I.T=r}}Ts=1,uc(),sc(),cc()}}function uc(){if(1===Ts){Ts=0
var e=Ls,t=Rs,n=!!(13878&t.flags)
if(13878&t.subtreeFlags||n){n=I.T,I.T=null
var r=U.p
U.p=2
var a=is
is|=4
try{Iu(t,e)
var l=uf,o=lr(e.containerInfo),i=l.focusedElem,u=l.selectionRange
if(o!==i&&i&&i.ownerDocument&&ar(i.ownerDocument.documentElement,i)){if(null!==u&&or(i)){var s=u.start,c=u.end
if(void 0===c&&(c=s),"selectionStart"in i)i.selectionStart=s,i.selectionEnd=Math.min(c,i.value.length)
else{var f=i.ownerDocument||document,d=f&&f.defaultView||window
if(d.getSelection){var p=d.getSelection(),h=i.textContent.length,m=Math.min(u.start,h),g=void 0===u.end?m:Math.min(u.end,h)
!p.extend&&m>g&&(o=g,g=m,m=o)
var y=rr(i,m),v=rr(i,g)
if(y&&v&&(1!==p.rangeCount||p.anchorNode!==y.node||p.anchorOffset!==y.offset||p.focusNode!==v.node||p.focusOffset!==v.offset)){var b=f.createRange()
b.setStart(y.node,y.offset),p.removeAllRanges(),m>g?(p.addRange(b),p.extend(v.node,v.offset)):(b.setEnd(v.node,v.offset),p.addRange(b))}}}}for(f=[],p=i;p=p.parentNode;)1===p.nodeType&&f.push({element:p,left:p.scrollLeft,top:p.scrollTop})
for("function"==typeof i.focus&&i.focus(),i=0;i<f.length;i++){var k=f[i]
k.element.scrollLeft=k.left,k.element.scrollTop=k.top}}ud=!!of,uf=of=null}finally{is=a,U.p=r,I.T=n}}e.current=t,Ts=2}}function sc(){if(2===Ts){Ts=0
var e=Ls,t=Rs,n=!!(8772&t.flags)
if(8772&t.subtreeFlags||n){n=I.T,I.T=null
var r=U.p
U.p=2
var a=is
is|=4
try{zu(e,t.alternate,t)}finally{is=a,U.p=r,I.T=n}}Ts=3}}function cc(){if(4===Ts||3===Ts){Ts=0,le()
var e=Ls,t=Rs,n=Os,r=Fs
10256&t.subtreeFlags||10256&t.flags?Ts=5:(Ts=0,Rs=Ls=null,fc(e,e.pendingLanes))
var a=e.pendingLanes
if(0===a&&(zs=null),De(n),t=t.stateNode,ge&&"function"==typeof ge.onCommitFiberRoot)try{ge.onCommitFiberRoot(me,t,void 0,!(128&~t.current.flags))}catch(u){}if(null!==r){t=I.T,a=U.p,U.p=2,I.T=null
try{for(var l=e.onRecoverableError,o=0;o<r.length;o++){var i=r[o]
l(i.value,{componentStack:i.stack})}}finally{I.T=t,U.p=a}}3&Os&&dc(),_c(e),a=e.pendingLanes,4194090&n&&42&a?e===$s?Ms++:(Ms=0,$s=e):Ms=0,Nc(0)}}function fc(e,t){0===(e.pooledCacheLanes&=t)&&null!=(t=e.pooledCache)&&(e.pooledCache=null,Ia(t))}function dc(){return uc(),sc(),cc(),pc()}function pc(){if(5!==Ts)return 0
var e=Ls,t=Ds
Ds=0
var n=De(Os),r=I.T,a=U.p
try{U.p=32>n?32:n,I.T=null,n=As,As=null
var o=Ls,i=Os
if(Ts=0,Rs=Ls=null,Os=0,6&is)throw Error(l(331))
var u=is
if(is|=4,ns(o.current),Ku(o,o.current,i,n),is=u,Nc(0),ge&&"function"==typeof ge.onPostCommitFiberRoot)try{ge.onPostCommitFiberRoot(me,o)}catch(s){}return 1}finally{U.p=a,I.T=r,fc(e,t)}}function hc(e,t,n){t=zr(n,t),null!==(e=cl(e,t=Ni(e.stateNode,t,2),2))&&(Te(e,2),_c(e))}function mc(e,t,n){if(3===e.tag)hc(e,e,n)
else for(;null!==t;){if(3===t.tag){hc(t,e,n)
break}if(1===t.tag){var r=t.stateNode
if("function"==typeof t.type.getDerivedStateFromError||"function"==typeof r.componentDidCatch&&(null===zs||!zs.has(r))){e=zr(n,e),null!==(r=cl(t,n=zi(2),2))&&(Ti(n,r,t,e),Te(r,2),_c(r))
break}}t=t.return}}function gc(e,t,n){var r=e.pingCache
if(null===r){r=e.pingCache=new os
var a=new Set
r.set(t,a)}else void 0===(a=r.get(t))&&(a=new Set,r.set(t,a))
a.has(n)||(ms=1,a.add(n),e=yc.bind(null,e,t,n),t.then(e,e))}function yc(e,t,n){var r=e.pingCache
null!==r&&r.delete(t),e.pingedLanes|=e.suspendedLanes&n,e.warmLanes&=~n,us===e&&(cs&n)===n&&(4===ys||3===ys&&(62914560&cs)===cs&&300>oe()-Ps?!(2&is)&&Ks(e,0):ks|=n,Ss===cs&&(Ss=0)),_c(e)}function vc(e,t){0===t&&(t=Ne()),null!==(e=Fr(e,t))&&(Te(e,t),_c(e))}function bc(e){var t=e.memoizedState,n=0
null!==t&&(n=t.retryLane),vc(e,n)}function kc(e,t){var n=0
switch(e.tag){case 13:var r=e.stateNode,a=e.memoizedState
null!==a&&(n=a.retryLane)
break
case 19:r=e.stateNode
break
case 22:r=e.stateNode._retryCache
break
default:throw Error(l(314))}null!==r&&r.delete(t),vc(e,n)}var wc=null,Sc=null,Ec=0,xc=0,Cc=0,Pc=0
function _c(e){e!==Sc&&null===e.next&&(null===Sc?wc=Sc=e:Sc=Sc.next=e),xc=1,Ec||(Ec=1,yf(function(){6&is?ne(ue,zc):Tc()}))}function Nc(e){if(!Cc&&xc){Cc=1
do{for(var t=0,n=wc;null!==n;){if(0!==e){var r=n.pendingLanes
if(0===r)var a=0
else{var l=n.suspendedLanes,o=n.pingedLanes
a=(1<<31-ve(42|e)+1)-1,a=201326741&(a&=r&~(l&~o))?201326741&a|1:a?2|a:0}0!==a&&(t=1,Oc(n,a))}else a=cs,!(3&(a=xe(n,n===us?a:0,null!==n.cancelPendingCommit||-1!==n.timeoutHandle)))||Ce(n,a)||(t=1,Oc(n,a))
n=n.next}}while(t)
Cc=0}}function zc(){Tc()}function Tc(){xc=Ec=0
var e,t=0
0!==Pc&&(((e=window.event)&&"popstate"===e.type?e===pf?0:(pf=e,1):(pf=null,0))&&(t=Pc),Pc=0)
for(var n=oe(),r=null,a=wc;null!==a;){var l=a.next,o=Lc(a,n)
0===o?(a.next=null,null===r?wc=l:r.next=l,null===l&&(Sc=r)):(r=a,(0!==t||3&o)&&(xc=1)),a=l}Nc(t)}function Lc(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,a=e.expirationTimes,l=-62914561&e.pendingLanes;l>0;){var o=31-ve(l),i=1<<o,u=a[o];-1===u?0!==(i&n)&&0===(i&r)||(a[o]=Pe(i,t)):t>=u&&(e.expiredLanes|=i),l&=~i}if(n=cs,n=xe(e,e===(t=us)?n:0,null!==e.cancelPendingCommit||-1!==e.timeoutHandle),r=e.callbackNode,0===n||e===t&&(2===fs||9===fs)||null!==e.cancelPendingCommit)return null!==r&&null!==r&&re(r),e.callbackNode=null,e.callbackPriority=0
if(!(3&n)||Ce(e,n)){if((t=n&-n)===e.callbackPriority)return t
switch(null!==r&&re(r),De(n)){case 2:case 8:n=se
break
case 32:default:n=ce
break
case 268435456:n=de}return r=Rc.bind(null,e),n=ne(n,r),e.callbackPriority=t,e.callbackNode=n,t}return null!==r&&null!==r&&re(r),e.callbackPriority=2,e.callbackNode=null,2}function Rc(e,t){if(0!==Ts&&5!==Ts)return e.callbackNode=null,e.callbackPriority=0,null
var n=e.callbackNode
if(dc()&&e.callbackNode!==n)return null
var r=cs
return 0===(r=xe(e,e===us?r:0,null!==e.cancelPendingCommit||-1!==e.timeoutHandle))?null:(Hs(e,r,t),Lc(e,oe()),null!=e.callbackNode&&e.callbackNode===n?Rc.bind(null,e):null)}function Oc(e,t){if(dc())return null
Hs(e,t,1)}function Dc(){return 0===Pc&&(Pc=_e()),Pc}function Ac(e){return null==e||"symbol"==typeof e||"boolean"==typeof e?null:"function"==typeof e?e:Dt(""+e)}function Fc(e,t){var n=t.ownerDocument.createElement("input")
return n.name=t.name,n.value=t.value,e.id&&n.setAttribute("form",e.id),t.parentNode.insertBefore(n,t),e=new FormData(e),n.parentNode.removeChild(n),e}for(var Mc=0;Mc<Pr.length;Mc++){var $c=Pr[Mc]
_r($c.toLowerCase(),"on"+($c[0].toUpperCase()+$c.slice(1)))}_r(vr,"onAnimationEnd"),_r(br,"onAnimationIteration"),_r(kr,"onAnimationStart"),_r("dblclick","onDoubleClick"),_r("focusin","onFocus"),_r("focusout","onBlur"),_r(wr,"onTransitionRun"),_r(Sr,"onTransitionStart"),_r(Er,"onTransitionCancel"),_r(xr,"onTransitionEnd"),et("onMouseEnter",["mouseout","mouseover"]),et("onMouseLeave",["mouseout","mouseover"]),et("onPointerEnter",["pointerout","pointerover"]),et("onPointerLeave",["pointerout","pointerover"]),Ze("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),Ze("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),Ze("onBeforeInput",["compositionend","keypress","textInput","paste"]),Ze("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),Ze("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),Ze("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "))
var Ic="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Uc=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Ic))
function jc(e,t){t=!!(4&t)
for(var n=0;n<e.length;n++){var r=e[n],a=r.event
r=r.listeners
e:{var l=void 0
if(t)for(var o=r.length-1;o>=0;o--){var i=r[o],u=i.instance,s=i.currentTarget
if(i=i.listener,u!==l&&a.isPropagationStopped())break e
l=i,a.currentTarget=s
try{l(a)}catch(c){Si(c)}a.currentTarget=null,l=u}else for(o=0;o<r.length;o++){if(u=(i=r[o]).instance,s=i.currentTarget,i=i.listener,u!==l&&a.isPropagationStopped())break e
l=i,a.currentTarget=s
try{l(a)}catch(c){Si(c)}a.currentTarget=null,l=u}}}}function Hc(e,t){var n=t[Ue]
void 0===n&&(n=t[Ue]=new Set)
var r=e+"__bubble"
n.has(r)||(Qc(t,e,2,0),n.add(r))}function Bc(e,t,n){var r=0
t&&(r|=4),Qc(n,e,r,t)}var Wc="_reactListening"+Math.random().toString(36).slice(2)
function Vc(e){if(!e[Wc]){e[Wc]=1,Xe.forEach(function(t){"selectionchange"!==t&&(Uc.has(t)||Bc(t,0,e),Bc(t,1,e))})
var t=9===e.nodeType?e:e.ownerDocument
null===t||t[Wc]||(t[Wc]=1,Bc("selectionchange",0,t))}}function Qc(e,t,n,r){switch(md(t)){case 2:var a=sd
break
case 8:a=cd
break
default:a=fd}n=a.bind(null,t,n,e),a=void 0,!Wt||"touchstart"!==t&&"touchmove"!==t&&"wheel"!==t||(a=1),r?void 0!==a?e.addEventListener(t,n,{capture:1,passive:a}):e.addEventListener(t,n,1):void 0!==a?e.addEventListener(t,n,{passive:a}):e.addEventListener(t,n,0)}function qc(e,t,n,r,a){var l=r
if(!(1&t||2&t||null===r))e:for(;;){if(null===r)return
var o=r.tag
if(3===o||4===o){var u=r.stateNode.containerInfo
if(u===a)break
if(4===o)for(o=r.return;null!==o;){var s=o.tag
if((3===s||4===s)&&o.stateNode.containerInfo===a)return
o=o.return}for(;null!==u;){if(null===(o=Qe(u)))return
if(5===(s=o.tag)||6===s||26===s||27===s){r=l=o
continue e}u=u.parentNode}}r=r.return}jt(function(){var r=l,a=Ft(n),o=[]
e:{var u=Cr.get(e)
if(void 0!==u){var s=an,c=e
switch(e){case"keypress":if(0===Gt(n))break e
case"keydown":case"keyup":s=kn
break
case"focusin":c="focus",s=fn
break
case"focusout":c="blur",s=fn
break
case"beforeblur":case"afterblur":s=fn
break
case"click":if(2===n.button)break e
case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":s=sn
break
case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":s=cn
break
case"touchcancel":case"touchend":case"touchmove":case"touchstart":s=Sn
break
case vr:case br:case kr:s=dn
break
case xr:s=En
break
case"scroll":case"scrollend":s=on
break
case"wheel":s=xn
break
case"copy":case"cut":case"paste":s=pn
break
case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":s=wn
break
case"toggle":case"beforetoggle":s=Cn}var f=!!(4&t),d=!f&&("scroll"===e||"scrollend"===e),p=f?null!==u?u+"Capture":null:u
f=[]
for(var h,m=r;null!==m;){var g=m
if(h=g.stateNode,5!==(g=g.tag)&&26!==g&&27!==g||null===h||null===p||null!=(g=Ht(m,p))&&f.push(Kc(m,g,h)),d)break
m=m.return}f.length>0&&(u=new s(u,c,null,n,a),o.push({event:u,listeners:f}))}}if(!(7&t)){if(s="mouseout"===e||"pointerout"===e,(!(u="mouseover"===e||"pointerover"===e)||n===At||!(c=n.relatedTarget||n.fromElement)||!Qe(c)&&!c[Ie])&&(s||u)&&(u=a.window===a?a:(u=a.ownerDocument)?u.defaultView||u.parentWindow:window,s?(s=r,null!==(c=(c=n.relatedTarget||n.toElement)?Qe(c):null)&&(d=i(c),f=c.tag,c!==d||5!==f&&27!==f&&6!==f)&&(c=null)):(s=null,c=r),s!==c)){if(f=sn,g="onMouseLeave",p="onMouseEnter",m="mouse","pointerout"!==e&&"pointerover"!==e||(f=wn,g="onPointerLeave",p="onPointerEnter",m="pointer"),d=null==s?u:Ke(s),h=null==c?u:Ke(c),(u=new f(g,m+"leave",s,n,a)).target=d,u.relatedTarget=h,g=null,Qe(a)===r&&((f=new f(p,m+"enter",c,n,a)).target=h,f.relatedTarget=d,g=f),d=g,s&&c)e:{for(p=c,m=0,h=f=s;h;h=Gc(h))m++
for(h=0,g=p;g;g=Gc(g))h++
for(;m-h>0;)f=Gc(f),m--
for(;h-m>0;)p=Gc(p),h--
for(;m--;){if(f===p||null!==p&&f===p.alternate)break e
f=Gc(f),p=Gc(p)}f=null}else f=null
null!==s&&Xc(o,u,s,f,0),null!==c&&null!==d&&Xc(o,d,c,f,1)}if("select"===(s=(u=r?Ke(r):window).nodeName&&u.nodeName.toLowerCase())||"input"===s&&"file"===u.type)var y=Bn
else if(Mn(u))if(Wn)y=Zn
else{y=Xn
var v=Gn}else!(s=u.nodeName)||"input"!==s.toLowerCase()||"checkbox"!==u.type&&"radio"!==u.type?r&&Lt(r.elementType)&&(y=Bn):y=Jn
switch(y&&(y=y(e,r))?$n(o,y,n,a):(v&&v(e,u,r),"focusout"===e&&r&&"number"===u.type&&null!=r.memoizedProps.value&&Et(u,"number",u.value)),v=r?Ke(r):window,e){case"focusin":(Mn(v)||"true"===v.contentEditable)&&(ur=v,sr=r,cr=null)
break
case"focusout":cr=sr=ur=null
break
case"mousedown":fr=1
break
case"contextmenu":case"mouseup":case"dragend":fr=0,dr(o,n,a)
break
case"selectionchange":if(ir)break
case"keydown":case"keyup":dr(o,n,a)}var b
if(_n)e:{switch(e){case"compositionstart":var k="onCompositionStart"
break e
case"compositionend":k="onCompositionEnd"
break e
case"compositionupdate":k="onCompositionUpdate"
break e}k=void 0}else An?On(e,n)&&(k="onCompositionEnd"):"keydown"===e&&229===n.keyCode&&(k="onCompositionStart")
k&&(Tn&&"ko"!==n.locale&&(An||"onCompositionStart"!==k?"onCompositionEnd"===k&&An&&(b=Yt()):(qt="value"in(Qt=a)?Qt.value:Qt.textContent,An=1)),(v=Yc(r,k)).length>0&&(k=new hn(k,e,null,n,a),o.push({event:k,listeners:v}),(b||null!==(b=Dn(n)))&&(k.data=b))),(b=zn?function(e,t){switch(e){case"compositionend":return Dn(t)
case"keypress":return 32!==t.which?null:(Rn=1,Ln)
case"textInput":return(e=t.data)===Ln&&Rn?null:e
default:return null}}(e,n):function(e,t){if(An)return"compositionend"===e||!_n&&On(e,t)?(e=Yt(),Kt=qt=Qt=null,An=0,e):null
switch(e){case"paste":default:return null
case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&t.char.length>1)return t.char
if(t.which)return String.fromCharCode(t.which)}return null
case"compositionend":return Tn&&"ko"!==t.locale?null:t.data}}(e,n))&&(k=Yc(r,"onBeforeInput")).length>0&&(v=new hn("onBeforeInput","beforeinput",null,n,a),o.push({event:v,listeners:k}),v.data=b),function(e,t,n,r,a){if("submit"===t&&n&&n.stateNode===a){var l=Ac((a[$e]||null).action),o=r.submitter
o&&null!==(t=(t=o[$e]||null)?Ac(t.formAction):o.getAttribute("formAction"))&&(l=t,o=null)
var i=new an("action","action",null,r,a)
e.push({event:i,listeners:[{instance:null,listener:function(){if(r.defaultPrevented){if(0!==Pc){var e=o?Fc(a,o):new FormData(a)
Fo(n,{pending:1,data:e,method:a.method,action:l},null,e)}}else"function"==typeof l&&(i.preventDefault(),e=o?Fc(a,o):new FormData(a),Fo(n,{pending:1,data:e,method:a.method,action:l},l,e))},currentTarget:a}]})}}(o,e,r,n,a)}jc(o,t)})}function Kc(e,t,n){return{instance:e,listener:t,currentTarget:n}}function Yc(e,t){for(var n=t+"Capture",r=[];null!==e;){var a=e,l=a.stateNode
if(5!==(a=a.tag)&&26!==a&&27!==a||null===l||(null!=(a=Ht(e,n))&&r.unshift(Kc(e,a,l)),null!=(a=Ht(e,t))&&r.push(Kc(e,a,l))),3===e.tag)return r
e=e.return}return[]}function Gc(e){if(null===e)return null
do{e=e.return}while(e&&5!==e.tag&&27!==e.tag)
return e||null}function Xc(e,t,n,r,a){for(var l=t._reactName,o=[];null!==n&&n!==r;){var i=n,u=i.alternate,s=i.stateNode
if(i=i.tag,null!==u&&u===r)break
5!==i&&26!==i&&27!==i||null===s||(u=s,a?null!=(s=Ht(n,l))&&o.unshift(Kc(n,s,u)):a||null!=(s=Ht(n,l))&&o.push(Kc(n,s,u))),n=n.return}0!==o.length&&e.push({event:t,listeners:o})}var Jc=/\r\n?/g,Zc=/\u0000|\uFFFD/g
function ef(e){return("string"==typeof e?e:""+e).replace(Jc,"\n").replace(Zc,"")}function tf(e,t){return t=ef(t),ef(e)===t?1:0}function nf(){}function rf(e,t,n,r,a,o){switch(n){case"children":"string"==typeof r?"body"===t||"textarea"===t&&""===r||_t(e,r):("number"==typeof r||"bigint"==typeof r)&&"body"!==t&&_t(e,""+r)
break
case"className":it(e,"class",r)
break
case"tabIndex":it(e,"tabindex",r)
break
case"dir":case"role":case"viewBox":case"width":case"height":it(e,n,r)
break
case"style":Tt(e,r,o)
break
case"data":if("object"!==t){it(e,"data",r)
break}case"src":case"href":if(""===r&&("a"!==t||"href"!==n)){e.removeAttribute(n)
break}if(null==r||"function"==typeof r||"symbol"==typeof r||"boolean"==typeof r){e.removeAttribute(n)
break}r=Dt(""+r),e.setAttribute(n,r)
break
case"action":case"formAction":if("function"==typeof r){e.setAttribute(n,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')")
break}if("function"==typeof o&&("formAction"===n?("input"!==t&&rf(e,t,"name",a.name,a,null),rf(e,t,"formEncType",a.formEncType,a,null),rf(e,t,"formMethod",a.formMethod,a,null),rf(e,t,"formTarget",a.formTarget,a,null)):(rf(e,t,"encType",a.encType,a,null),rf(e,t,"method",a.method,a,null),rf(e,t,"target",a.target,a,null))),null==r||"symbol"==typeof r||"boolean"==typeof r){e.removeAttribute(n)
break}r=Dt(""+r),e.setAttribute(n,r)
break
case"onClick":null!=r&&(e.onclick=nf)
break
case"onScroll":null!=r&&Hc("scroll",e)
break
case"onScrollEnd":null!=r&&Hc("scrollend",e)
break
case"dangerouslySetInnerHTML":if(null!=r){if("object"!=typeof r||!("__html"in r))throw Error(l(61))
if(null!=(n=r.__html)){if(null!=a.children)throw Error(l(60))
e.innerHTML=n}}break
case"multiple":e.multiple=r&&"function"!=typeof r&&"symbol"!=typeof r
break
case"muted":e.muted=r&&"function"!=typeof r&&"symbol"!=typeof r
break
case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":case"autoFocus":break
case"xlinkHref":if(null==r||"function"==typeof r||"boolean"==typeof r||"symbol"==typeof r){e.removeAttribute("xlink:href")
break}n=Dt(""+r),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",n)
break
case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":null!=r&&"function"!=typeof r&&"symbol"!=typeof r?e.setAttribute(n,""+r):e.removeAttribute(n)
break
case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":r&&"function"!=typeof r&&"symbol"!=typeof r?e.setAttribute(n,""):e.removeAttribute(n)
break
case"capture":case"download":1==r?e.setAttribute(n,""):0!=r&&null!=r&&"function"!=typeof r&&"symbol"!=typeof r?e.setAttribute(n,r):e.removeAttribute(n)
break
case"cols":case"rows":case"size":case"span":null==r||"function"==typeof r||"symbol"==typeof r||isNaN(r)||1>r?e.removeAttribute(n):e.setAttribute(n,r)
break
case"rowSpan":case"start":null==r||"function"==typeof r||"symbol"==typeof r||isNaN(r)?e.removeAttribute(n):e.setAttribute(n,r)
break
case"popover":Hc("beforetoggle",e),Hc("toggle",e),ot(e,"popover",r)
break
case"xlinkActuate":ut(e,"http://www.w3.org/1999/xlink","xlink:actuate",r)
break
case"xlinkArcrole":ut(e,"http://www.w3.org/1999/xlink","xlink:arcrole",r)
break
case"xlinkRole":ut(e,"http://www.w3.org/1999/xlink","xlink:role",r)
break
case"xlinkShow":ut(e,"http://www.w3.org/1999/xlink","xlink:show",r)
break
case"xlinkTitle":ut(e,"http://www.w3.org/1999/xlink","xlink:title",r)
break
case"xlinkType":ut(e,"http://www.w3.org/1999/xlink","xlink:type",r)
break
case"xmlBase":ut(e,"http://www.w3.org/XML/1998/namespace","xml:base",r)
break
case"xmlLang":ut(e,"http://www.w3.org/XML/1998/namespace","xml:lang",r)
break
case"xmlSpace":ut(e,"http://www.w3.org/XML/1998/namespace","xml:space",r)
break
case"is":ot(e,"is",r)
break
case"innerText":case"textContent":break
default:(2>=n.length||"o"!==n[0]&&"O"!==n[0]||"n"!==n[1]&&"N"!==n[1])&&ot(e,n=Rt.get(n)||n,r)}}function af(e,t,n,r,a,o){switch(n){case"style":Tt(e,r,o)
break
case"dangerouslySetInnerHTML":if(null!=r){if("object"!=typeof r||!("__html"in r))throw Error(l(61))
if(null!=(n=r.__html)){if(null!=a.children)throw Error(l(60))
e.innerHTML=n}}break
case"children":"string"==typeof r?_t(e,r):("number"==typeof r||"bigint"==typeof r)&&_t(e,""+r)
break
case"onScroll":null!=r&&Hc("scroll",e)
break
case"onScrollEnd":null!=r&&Hc("scrollend",e)
break
case"onClick":null!=r&&(e.onclick=nf)
break
case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":case"innerText":case"textContent":break
default:Je.hasOwnProperty(n)||("o"!==n[0]||"n"!==n[1]||(a=n.endsWith("Capture"),t=n.slice(2,a?n.length-7:void 0),"function"==typeof(o=null!=(o=e[$e]||null)?o[n]:null)&&e.removeEventListener(t,o,a),"function"!=typeof r)?n in e?e[n]=r:1==r?e.setAttribute(n,""):ot(e,n,r):("function"!=typeof o&&null!==o&&(n in e?e[n]=null:e.hasAttribute(n)&&e.removeAttribute(n)),e.addEventListener(t,r,a)))}}function lf(e,t,n){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break
case"img":Hc("error",e),Hc("load",e)
var r,a=0,o=0
for(r in n)if(n.hasOwnProperty(r)){var i=n[r]
if(null!=i)switch(r){case"src":a=1
break
case"srcSet":o=1
break
case"children":case"dangerouslySetInnerHTML":throw Error(l(137,t))
default:rf(e,t,r,i,n,null)}}return o&&rf(e,t,"srcSet",n.srcSet,n,null),void(a&&rf(e,t,"src",n.src,n,null))
case"input":Hc("invalid",e)
var u=r=i=o=null,s=null,c=null
for(a in n)if(n.hasOwnProperty(a)){var f=n[a]
if(null!=f)switch(a){case"name":o=f
break
case"type":i=f
break
case"checked":s=f
break
case"defaultChecked":c=f
break
case"value":r=f
break
case"defaultValue":u=f
break
case"children":case"dangerouslySetInnerHTML":if(null!=f)throw Error(l(137,t))
break
default:rf(e,t,a,f,n,null)}}return St(e,r,u,s,c,i,o,0),void gt(e)
case"select":for(o in Hc("invalid",e),a=i=r=null,n)if(n.hasOwnProperty(o)&&null!=(u=n[o]))switch(o){case"value":r=u
break
case"defaultValue":i=u
break
case"multiple":a=u
default:rf(e,t,o,u,n,null)}return t=r,n=i,e.multiple=!!a,void(null!=t?xt(e,!!a,t,0):null!=n&&xt(e,!!a,n,1))
case"textarea":for(i in Hc("invalid",e),r=o=a=null,n)if(n.hasOwnProperty(i)&&null!=(u=n[i]))switch(i){case"value":a=u
break
case"defaultValue":o=u
break
case"children":r=u
break
case"dangerouslySetInnerHTML":if(null!=u)throw Error(l(91))
break
default:rf(e,t,i,u,n,null)}return Pt(e,a,o,r),void gt(e)
case"option":for(s in n)n.hasOwnProperty(s)&&null!=(a=n[s])&&("selected"===s?e.selected=a&&"function"!=typeof a&&"symbol"!=typeof a:rf(e,t,s,a,n,null))
return
case"dialog":Hc("beforetoggle",e),Hc("toggle",e),Hc("cancel",e),Hc("close",e)
break
case"iframe":case"object":Hc("load",e)
break
case"video":case"audio":for(a=0;a<Ic.length;a++)Hc(Ic[a],e)
break
case"image":Hc("error",e),Hc("load",e)
break
case"details":Hc("toggle",e)
break
case"embed":case"source":case"link":Hc("error",e),Hc("load",e)
case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(c in n)if(n.hasOwnProperty(c)&&null!=(a=n[c]))switch(c){case"children":case"dangerouslySetInnerHTML":throw Error(l(137,t))
default:rf(e,t,c,a,n,null)}return
default:if(Lt(t)){for(f in n)n.hasOwnProperty(f)&&void 0!==(a=n[f])&&af(e,t,f,a,n,void 0)
return}}for(u in n)n.hasOwnProperty(u)&&null!=(a=n[u])&&rf(e,t,u,a,n,null)}var of=null,uf=null
function sf(e){return 9===e.nodeType?e:e.ownerDocument}function cf(e){switch(e){case"http://www.w3.org/2000/svg":return 1
case"http://www.w3.org/1998/Math/MathML":return 2
default:return 0}}function ff(e,t){if(0===e)switch(t){case"svg":return 1
case"math":return 2
default:return 0}return 1===e&&"foreignObject"===t?0:e}function df(e,t){return"textarea"===e||"noscript"===e||"string"==typeof t.children||"number"==typeof t.children||"bigint"==typeof t.children||"object"==typeof t.dangerouslySetInnerHTML&&null!==t.dangerouslySetInnerHTML&&null!=t.dangerouslySetInnerHTML.__html}var pf=null,hf="function"==typeof setTimeout?setTimeout:void 0,mf="function"==typeof clearTimeout?clearTimeout:void 0,gf="function"==typeof Promise?Promise:void 0,yf="function"==typeof queueMicrotask?queueMicrotask:void 0!==gf?function(e){return gf.resolve(null).then(e).catch(vf)}:hf
function vf(e){setTimeout(function(){throw e})}function bf(e){return"head"===e}function kf(e,t){var n=t,r=0,a=0
do{var l=n.nextSibling
if(e.removeChild(n),l&&8===l.nodeType)if("/$"===(n=l.data)){if(r>0&&8>r){n=r
var o=e.ownerDocument
if(1&n&&_f(o.documentElement),2&n&&_f(o.body),4&n)for(_f(n=o.head),o=n.firstChild;o;){var i=o.nextSibling,u=o.nodeName
o[We]||"SCRIPT"===u||"STYLE"===u||"LINK"===u&&"stylesheet"===o.rel.toLowerCase()||n.removeChild(o),o=i}}if(0===a)return e.removeChild(l),void Od(t)
a--}else"$"===n||"$?"===n||"$!"===n?a++:r=n.charCodeAt(0)-48
else r=0
n=l}while(n)
Od(t)}function wf(e){var t=e.firstChild
for(t&&10===t.nodeType&&(t=t.nextSibling);t;){var n=t
switch(t=t.nextSibling,n.nodeName){case"HTML":case"HEAD":case"BODY":wf(n),Ve(n)
continue
case"SCRIPT":case"STYLE":continue
case"LINK":if("stylesheet"===n.rel.toLowerCase())continue}e.removeChild(n)}}function Sf(e){return"$!"===e.data||"$?"===e.data&&"complete"===e.ownerDocument.readyState}function Ef(e){for(;null!=e;e=e.nextSibling){var t=e.nodeType
if(1===t||3===t)break
if(8===t){if("$"===(t=e.data)||"$!"===t||"$?"===t||"F!"===t||"F"===t)break
if("/$"===t)return null}}return e}var xf=null
function Cf(e){e=e.previousSibling
for(var t=0;e;){if(8===e.nodeType){var n=e.data
if("$"===n||"$!"===n||"$?"===n){if(0===t)return e
t--}else"/$"===n&&t++}e=e.previousSibling}return null}function Pf(e,t,n){switch(t=sf(n),e){case"html":if(!(e=t.documentElement))throw Error(l(452))
return e
case"head":if(!(e=t.head))throw Error(l(453))
return e
case"body":if(!(e=t.body))throw Error(l(454))
return e
default:throw Error(l(451))}}function _f(e){for(var t=e.attributes;t.length;)e.removeAttributeNode(t[0])
Ve(e)}var Nf=new Map,zf=new Set
function Tf(e){return"function"==typeof e.getRootNode?e.getRootNode():9===e.nodeType?e:e.ownerDocument}var Lf=U.d
U.d={f:function(){var e=Lf.f(),t=Qs()
return e||t},r:function(e){var t=qe(e)
null!==t&&5===t.tag&&"form"===t.type?$o(t):Lf.r(e)},D:function(e){Lf.D(e),Of("dns-prefetch",e,null)},C:function(e,t){Lf.C(e,t),Of("preconnect",e,t)},L:function(e,t,n){Lf.L(e,t,n)
var r=Rf
if(r&&e&&t){var a='link[rel="preload"][as="'+kt(t)+'"]'
"image"===t&&n&&n.imageSrcSet?(a+='[imagesrcset="'+kt(n.imageSrcSet)+'"]',"string"==typeof n.imageSizes&&(a+='[imagesizes="'+kt(n.imageSizes)+'"]')):a+='[href="'+kt(e)+'"]'
var l=a
switch(t){case"style":l=Af(e)
break
case"script":l=$f(e)}Nf.has(l)||(e=h({rel:"preload",href:"image"===t&&n&&n.imageSrcSet?void 0:e,as:t},n),Nf.set(l,e),null!==r.querySelector(a)||"style"===t&&r.querySelector(Ff(l))||"script"===t&&r.querySelector(If(l))||(lf(t=r.createElement("link"),"link",e),Ge(t),r.head.appendChild(t)))}},m:function(e,t){Lf.m(e,t)
var n=Rf
if(n&&e){var r=t&&"string"==typeof t.as?t.as:"script",a='link[rel="modulepreload"][as="'+kt(r)+'"][href="'+kt(e)+'"]',l=a
switch(r){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":l=$f(e)}if(!Nf.has(l)&&(e=h({rel:"modulepreload",href:e},t),Nf.set(l,e),null===n.querySelector(a))){switch(r){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(n.querySelector(If(l)))return}lf(r=n.createElement("link"),"link",e),Ge(r),n.head.appendChild(r)}}},X:function(e,t){Lf.X(e,t)
var n=Rf
if(n&&e){var r=Ye(n).hoistableScripts,a=$f(e),l=r.get(a)
l||((l=n.querySelector(If(a)))||(e=h({src:e,async:1},t),(t=Nf.get(a))&&Bf(e,t),Ge(l=n.createElement("script")),lf(l,"link",e),n.head.appendChild(l)),l={type:"script",instance:l,count:1,state:null},r.set(a,l))}},S:function(e,t,n){Lf.S(e,t,n)
var r=Rf
if(r&&e){var a=Ye(r).hoistableStyles,l=Af(e)
t=t||"default"
var o=a.get(l)
if(!o){var i={loading:0,preload:null}
if(o=r.querySelector(Ff(l)))i.loading=5
else{e=h({rel:"stylesheet",href:e,"data-precedence":t},n),(n=Nf.get(l))&&Hf(e,n)
var u=o=r.createElement("link")
Ge(u),lf(u,"link",e),u._p=new Promise(function(e,t){u.onload=e,u.onerror=t}),u.addEventListener("load",function(){i.loading|=1}),u.addEventListener("error",function(){i.loading|=2}),i.loading|=4,jf(o,t,r)}o={type:"stylesheet",instance:o,count:1,state:i},a.set(l,o)}}},M:function(e,t){Lf.M(e,t)
var n=Rf
if(n&&e){var r=Ye(n).hoistableScripts,a=$f(e),l=r.get(a)
l||((l=n.querySelector(If(a)))||(e=h({src:e,async:1,type:"module"},t),(t=Nf.get(a))&&Bf(e,t),Ge(l=n.createElement("script")),lf(l,"link",e),n.head.appendChild(l)),l={type:"script",instance:l,count:1,state:null},r.set(a,l))}}}
var Rf="undefined"==typeof document?null:document
function Of(e,t,n){var r=Rf
if(r&&"string"==typeof t&&t){var a=kt(t)
a='link[rel="'+e+'"][href="'+a+'"]',"string"==typeof n&&(a+='[crossorigin="'+n+'"]'),zf.has(a)||(zf.add(a),e={rel:e,crossOrigin:n,href:t},null===r.querySelector(a)&&(lf(t=r.createElement("link"),"link",e),Ge(t),r.head.appendChild(t)))}}function Df(e,t,n,r){var a,o,i,u,s=(s=Y.current)?Tf(s):null
if(!s)throw Error(l(446))
switch(e){case"meta":case"title":return null
case"style":return"string"==typeof n.precedence&&"string"==typeof n.href?(t=Af(n.href),(r=(n=Ye(s).hoistableStyles).get(t))||(r={type:"style",instance:null,count:0,state:null},n.set(t,r)),r):{type:"void",instance:null,count:0,state:null}
case"link":if("stylesheet"===n.rel&&"string"==typeof n.href&&"string"==typeof n.precedence){e=Af(n.href)
var c=Ye(s).hoistableStyles,f=c.get(e)
if(f||(s=s.ownerDocument||s,f={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},c.set(e,f),(c=s.querySelector(Ff(e)))&&!c._p&&(f.instance=c,f.state.loading=5),Nf.has(e)||(n={rel:"preload",as:"style",href:n.href,crossOrigin:n.crossOrigin,integrity:n.integrity,media:n.media,hrefLang:n.hrefLang,referrerPolicy:n.referrerPolicy},Nf.set(e,n),c||(a=s,o=e,i=n,u=f.state,a.querySelector('link[rel="preload"][as="style"]['+o+"]")?u.loading=1:(o=a.createElement("link"),u.preload=o,o.addEventListener("load",function(){return u.loading|=1}),o.addEventListener("error",function(){return u.loading|=2}),lf(o,"link",i),Ge(o),a.head.appendChild(o))))),t&&null===r)throw Error(l(528,""))
return f}if(t&&null!==r)throw Error(l(529,""))
return null
case"script":return t=n.async,"string"==typeof(n=n.src)&&t&&"function"!=typeof t&&"symbol"!=typeof t?(t=$f(n),(r=(n=Ye(s).hoistableScripts).get(t))||(r={type:"script",instance:null,count:0,state:null},n.set(t,r)),r):{type:"void",instance:null,count:0,state:null}
default:throw Error(l(444,e))}}function Af(e){return'href="'+kt(e)+'"'}function Ff(e){return'link[rel="stylesheet"]['+e+"]"}function Mf(e){return h({},e,{"data-precedence":e.precedence,precedence:null})}function $f(e){return'[src="'+kt(e)+'"]'}function If(e){return"script[async]"+e}function Uf(e,t,n){if(t.count++,null===t.instance)switch(t.type){case"style":var r=e.querySelector('style[data-href~="'+kt(n.href)+'"]')
if(r)return t.instance=r,Ge(r),r
var a=h({},n,{"data-href":n.href,"data-precedence":n.precedence,href:null,precedence:null})
return Ge(r=(e.ownerDocument||e).createElement("style")),lf(r,"style",a),jf(r,n.precedence,e),t.instance=r
case"stylesheet":a=Af(n.href)
var o=e.querySelector(Ff(a))
if(o)return t.state.loading|=4,t.instance=o,Ge(o),o
r=Mf(n),(a=Nf.get(a))&&Hf(r,a),Ge(o=(e.ownerDocument||e).createElement("link"))
var i=o
return i._p=new Promise(function(e,t){i.onload=e,i.onerror=t}),lf(o,"link",r),t.state.loading|=4,jf(o,n.precedence,e),t.instance=o
case"script":return o=$f(n.src),(a=e.querySelector(If(o)))?(t.instance=a,Ge(a),a):(r=n,(a=Nf.get(o))&&Bf(r=h({},n),a),Ge(a=(e=e.ownerDocument||e).createElement("script")),lf(a,"link",r),e.head.appendChild(a),t.instance=a)
case"void":return null
default:throw Error(l(443,t.type))}else"stylesheet"===t.type&&!(4&t.state.loading)&&(r=t.instance,t.state.loading|=4,jf(r,n.precedence,e))
return t.instance}function jf(e,t,n){for(var r=n.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),a=r.length?r[r.length-1]:null,l=a,o=0;o<r.length;o++){var i=r[o]
if(i.dataset.precedence===t)l=i
else if(l!==a)break}l?l.parentNode.insertBefore(e,l.nextSibling):(t=9===n.nodeType?n.head:n).insertBefore(e,t.firstChild)}function Hf(e,t){null==e.crossOrigin&&(e.crossOrigin=t.crossOrigin),null==e.referrerPolicy&&(e.referrerPolicy=t.referrerPolicy),null==e.title&&(e.title=t.title)}function Bf(e,t){null==e.crossOrigin&&(e.crossOrigin=t.crossOrigin),null==e.referrerPolicy&&(e.referrerPolicy=t.referrerPolicy),null==e.integrity&&(e.integrity=t.integrity)}var Wf=null
function Vf(e,t,n){if(null===Wf){var r=new Map,a=Wf=new Map
a.set(n,r)}else(r=(a=Wf).get(n))||(r=new Map,a.set(n,r))
if(r.has(e))return r
for(r.set(e,null),n=n.getElementsByTagName(e),a=0;a<n.length;a++){var l=n[a]
if(!(l[We]||l[Me]||"link"===e&&"stylesheet"===l.getAttribute("rel"))&&"http://www.w3.org/2000/svg"!==l.namespaceURI){var o=l.getAttribute(t)||""
o=e+o
var i=r.get(o)
i?i.push(l):r.set(o,[l])}}return r}function Qf(e,t,n){(e=e.ownerDocument||e).head.insertBefore(n,"title"===t?e.querySelector("head > title"):null)}function qf(e){return"stylesheet"!==e.type||3&e.state.loading?1:0}var Kf=null
function Yf(){}function Gf(){if(this.count--,0===this.count)if(this.stylesheets)Jf(this,this.stylesheets)
else if(this.unsuspend){var e=this.unsuspend
this.unsuspend=null,e()}}var Xf=null
function Jf(e,t){e.stylesheets=null,null!==e.unsuspend&&(e.count++,Xf=new Map,t.forEach(Zf,e),Xf=null,Gf.call(e))}function Zf(e,t){if(!(4&t.state.loading)){var n=Xf.get(e)
if(n)var r=n.get(null)
else{n=new Map,Xf.set(e,n)
for(var a=e.querySelectorAll("link[data-precedence],style[data-precedence]"),l=0;l<a.length;l++){var o=a[l]
"LINK"!==o.nodeName&&"not all"===o.getAttribute("media")||(n.set(o.dataset.precedence,o),r=o)}r&&n.set(null,r)}o=(a=t.instance).getAttribute("data-precedence"),(l=n.get(o)||r)===r&&n.set(null,a),n.set(o,a),this.count++,r=Gf.bind(this),a.addEventListener("load",r),a.addEventListener("error",r),l?l.parentNode.insertBefore(a,l.nextSibling):(e=9===e.nodeType?e.head:e).insertBefore(a,e.firstChild),t.state.loading|=4}}var ed={$$typeof:P,Provider:null,Consumer:null,_currentValue:j,_currentValue2:j,_threadCount:0}
function td(e,t,n,r,a,l,o,i){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=ze(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=ze(0),this.hiddenUpdates=ze(null),this.identifierPrefix=r,this.onUncaughtError=a,this.onCaughtError=l,this.onRecoverableError=o,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=i,this.incompleteTransitions=new Map}function nd(e,t,n,r,a,l,o,i,u,s,c,f){return e=new td(e,t,n,o,i,u,s,f),t=1,1==l&&(t|=24),l=jr(3,null,null,t),e.current=l,l.stateNode=e,(t=$a()).refCount++,e.pooledCache=t,t.refCount++,l.memoizedState={element:r,isDehydrated:n,cache:t},il(l),e}function rd(e){return e?e=Ir:Ir}function ad(e,t,n,r,a,l){a=rd(a),null===r.context?r.context=a:r.pendingContext=a,(r=sl(t)).payload={element:n},null!==(l=void 0===l?null:l)&&(r.callback=l),null!==(n=cl(e,r,t))&&(js(n,0,t),fl(n,e,t))}function ld(e,t){if(null!==(e=e.memoizedState)&&null!==e.dehydrated){var n=e.retryLane
e.retryLane=0!==n&&t>n?n:t}}function od(e,t){ld(e,t),(e=e.alternate)&&ld(e,t)}function id(e){if(13===e.tag){var t=Fr(e,67108864)
null!==t&&js(t,0,67108864),od(e,67108864)}}var ud=1
function sd(e,t,n,r){var a=I.T
I.T=null
var l=U.p
try{U.p=2,fd(e,t,n,r)}finally{U.p=l,I.T=a}}function cd(e,t,n,r){var a=I.T
I.T=null
var l=U.p
try{U.p=8,fd(e,t,n,r)}finally{U.p=l,I.T=a}}function fd(e,t,n,r){if(ud){var a=dd(r)
if(null===a)qc(e,t,r,pd,n),xd(e,r)
else if(function(e,t,n,r,a){switch(t){case"focusin":return yd=Cd(yd,e,t,n,r,a),1
case"dragenter":return vd=Cd(vd,e,t,n,r,a),1
case"mouseover":return bd=Cd(bd,e,t,n,r,a),1
case"pointerover":var l=a.pointerId
return kd.set(l,Cd(kd.get(l)||null,e,t,n,r,a)),1
case"gotpointercapture":return l=a.pointerId,wd.set(l,Cd(wd.get(l)||null,e,t,n,r,a)),1}return 0}(a,e,t,n,r))r.stopPropagation()
else if(xd(e,r),4&t&&Ed.indexOf(e)>-1){for(;null!==a;){var l=qe(a)
if(null!==l)switch(l.tag){case 3:if((l=l.stateNode).current.memoizedState.isDehydrated){var o=Ee(l.pendingLanes)
if(0!==o){var i=l
for(i.pendingLanes|=2,i.entangledLanes|=2;o;){var u=1<<31-ve(o)
i.entanglements[1]|=u,o&=~u}_c(l),!(6&is)&&(_s=oe()+500,Nc(0))}}break
case 13:null!==(i=Fr(l,2))&&js(i,0,2),Qs(),od(l,2)}if(null===(l=dd(r))&&qc(e,t,r,pd,n),l===a)break
a=l}null!==a&&r.stopPropagation()}else qc(e,t,r,null,n)}}function dd(e){return hd(e=Ft(e))}var pd=null
function hd(e){if(pd=null,null!==(e=Qe(e))){var t=i(e)
if(null===t)e=null
else{var n=t.tag
if(13===n){if(null!==(e=u(t)))return e
e=null}else if(3===n){if(t.stateNode.current.memoizedState.isDehydrated)return 3===t.tag?t.stateNode.containerInfo:null
e=null}else t!==e&&(e=null)}}return pd=e,null}function md(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2
case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8
case"message":switch(ie()){case ue:return 2
case se:return 8
case ce:case fe:return 32
case de:return 268435456
default:return 32}default:return 32}}var gd=0,yd=null,vd=null,bd=null,kd=new Map,wd=new Map,Sd=[],Ed="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ")
function xd(e,t){switch(e){case"focusin":case"focusout":yd=null
break
case"dragenter":case"dragleave":vd=null
break
case"mouseover":case"mouseout":bd=null
break
case"pointerover":case"pointerout":kd.delete(t.pointerId)
break
case"gotpointercapture":case"lostpointercapture":wd.delete(t.pointerId)}}function Cd(e,t,n,r,a,l){return null===e||e.nativeEvent!==l?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:l,targetContainers:[a]},null!==t&&null!==(t=qe(t))&&id(t),e):(e.eventSystemFlags|=r,t=e.targetContainers,null!==a&&-1===t.indexOf(a)&&t.push(a),e)}function Pd(e){var t=Qe(e.target)
if(null!==t){var n=i(t)
if(null!==n)if(13===(t=n.tag)){if(null!==(t=u(n)))return e.blockedOn=t,void function(e){var t=U.p
try{return U.p=e,function(){if(13===n.tag){var e=Is()
e=Oe(e)
var t=Fr(n,e)
null!==t&&js(t,0,e),od(n,e)}}()}finally{U.p=t}}(e.priority)}else if(3===t&&n.stateNode.current.memoizedState.isDehydrated)return void(e.blockedOn=3===n.tag?n.stateNode.containerInfo:null)}e.blockedOn=null}function _d(e){if(null!==e.blockedOn)return 0
for(var t=e.targetContainers;t.length>0;){var n=dd(e.nativeEvent)
if(null!==n)return null!==(t=qe(n))&&id(t),e.blockedOn=n,0
var r=new(n=e.nativeEvent).constructor(n.type,n)
At=r,n.target.dispatchEvent(r),At=null,t.shift()}return 1}function Nd(e,t,n){_d(e)&&n.delete(t)}function zd(){gd=0,null!==yd&&_d(yd)&&(yd=null),null!==vd&&_d(vd)&&(vd=null),null!==bd&&_d(bd)&&(bd=null),kd.forEach(Nd),wd.forEach(Nd)}function Td(t,n){t.blockedOn===n&&(t.blockedOn=null,gd||(gd=1,e.unstable_scheduleCallback(e.unstable_NormalPriority,zd)))}var Ld=null
function Rd(t){Ld!==t&&(Ld=t,e.unstable_scheduleCallback(e.unstable_NormalPriority,function(){Ld===t&&(Ld=null)
for(var e=0;e<t.length;e+=3){var n=t[e],r=t[e+1],a=t[e+2]
if("function"!=typeof r){if(null===hd(r||n))continue
break}var l=qe(n)
null!==l&&(t.splice(e,3),e-=3,Fo(l,{pending:1,data:a,method:n.method,action:r},r,a))}}))}function Od(e){function t(t){return Td(t,e)}null!==yd&&Td(yd,e),null!==vd&&Td(vd,e),null!==bd&&Td(bd,e),kd.forEach(t),wd.forEach(t)
for(var n=0;n<Sd.length;n++){var r=Sd[n]
r.blockedOn===e&&(r.blockedOn=null)}for(;Sd.length>0&&null===(n=Sd[0]).blockedOn;)Pd(n),null===n.blockedOn&&Sd.shift()
if(null!=(n=(e.ownerDocument||e).$$reactFormReplay))for(r=0;r<n.length;r+=3){var a=n[r],l=n[r+1],o=a[$e]||null
if("function"==typeof l)o||Rd(n)
else if(o){var i=null
if(l&&l.hasAttribute("formAction")){if(a=l,o=l[$e]||null)i=o.formAction
else if(null!==hd(a))continue}else i=o.action
"function"==typeof i?n[r+1]=i:(n.splice(r,3),r-=3),Rd(n)}}}function Dd(e){this._internalRoot=e}function Ad(e){this._internalRoot=e}Ad.prototype.render=Dd.prototype.render=function(e){var t=this._internalRoot
if(null===t)throw Error(l(409))
ad(t.current,Is(),e,t,null,null)},Ad.prototype.unmount=Dd.prototype.unmount=function(){var e=this._internalRoot
if(null!==e){this._internalRoot=null
var t=e.containerInfo
ad(e.current,2,null,e,null,null),Qs(),t[Ie]=null}},Ad.prototype.unstable_scheduleHydration=function(e){if(e){var t=Ae()
e={blockedOn:null,target:e,priority:t}
for(var n=0;n<Sd.length&&0!==t&&t<Sd[n].priority;n++);Sd.splice(n,0,e),0===n&&Pd(e)}}
var Fd=t.version
if("19.1.0"!==Fd)throw Error(l(527,Fd,"19.1.0"))
U.findDOMNode=function(e){var t=e._reactInternals
if(void 0===t){if("function"==typeof e.render)throw Error(l(188))
throw e=Object.keys(e).join(","),Error(l(268,e))}return e=function(e){var t=e.alternate
if(!t){if(null===(t=i(e)))throw Error(l(188))
return t!==e?null:e}for(var n=e,r=t;;){var a=n.return
if(null===a)break
var o=a.alternate
if(null===o){if(null!==(r=a.return)){n=r
continue}break}if(a.child===o.child){for(o=a.child;o;){if(o===n)return s(a),e
if(o===r)return s(a),t
o=o.sibling}throw Error(l(188))}if(n.return!==r.return)n=a,r=o
else{for(var u=0,c=a.child;c;){if(c===n){u=1,n=a,r=o
break}if(c===r){u=1,r=a,n=o
break}c=c.sibling}if(!u){for(c=o.child;c;){if(c===n){u=1,n=o,r=a
break}if(c===r){u=1,r=o,n=a
break}c=c.sibling}if(!u)throw Error(l(189))}}if(n.alternate!==r)throw Error(l(190))}if(3!==n.tag)throw Error(l(188))
return n.stateNode.current===n?e:t}(t),null===(e=null!==e?p(e):null)?null:e.stateNode}
var Md={bundleType:0,version:"19.1.0",rendererPackageName:"react-dom",currentDispatcherRef:I,reconcilerVersion:"19.1.0"}
if("undefined"!=typeof __REACT_DEVTOOLS_GLOBAL_HOOK__){var $d=__REACT_DEVTOOLS_GLOBAL_HOOK__
if(!$d.isDisabled&&$d.supportsFiber)try{me=$d.inject(Md),ge=$d}catch(Ud){}}return c.createRoot=function(e,t){if(!o(e))throw Error(l(299))
var n=0,r="",a=Ei,i=xi,u=Ci
return null!=t&&(1==t.unstable_strictMode&&(n=1),void 0!==t.identifierPrefix&&(r=t.identifierPrefix),void 0!==t.onUncaughtError&&(a=t.onUncaughtError),void 0!==t.onCaughtError&&(i=t.onCaughtError),void 0!==t.onRecoverableError&&(u=t.onRecoverableError),void 0!==t.unstable_transitionCallbacks&&t.unstable_transitionCallbacks),t=nd(e,1,0,null,0,n,r,a,i,u,0,null),e[Ie]=t.current,Vc(e),new Dd(t)},c.hydrateRoot=function(e,t,n){if(!o(e))throw Error(l(299))
var r=0,a="",i=Ei,u=xi,s=Ci,c=null
return null!=n&&(1==n.unstable_strictMode&&(r=1),void 0!==n.identifierPrefix&&(a=n.identifierPrefix),void 0!==n.onUncaughtError&&(i=n.onUncaughtError),void 0!==n.onCaughtError&&(u=n.onCaughtError),void 0!==n.onRecoverableError&&(s=n.onRecoverableError),void 0!==n.unstable_transitionCallbacks&&n.unstable_transitionCallbacks,void 0!==n.formState&&(c=n.formState)),(t=nd(e,1,1,t,0,r,a,i,u,s,0,c)).context=rd(null),n=t.current,(a=sl(r=Oe(r=Is()))).callback=null,cl(n,a,r),n=r,t.current.lanes=n,Te(t,n),_c(t),e[Ie]=t.current,Vc(e),new Ad(t)},c.version="19.1.0",c}()),s.exports),C=g(),P="popstate"
function _(e,t){if(0==e||null==e)throw Error(t)}function N(e,t){if(!e)try{throw Error(t)}catch(n){}}function z(e,t){return{usr:e.state,key:e.key,idx:t}}function T(e,t,n=null,r){return{pathname:"string"==typeof e?e:e.pathname,search:"",hash:"",..."string"==typeof t?R(t):t,state:n,key:t&&t.key||r||Math.random().toString(36).substring(2,10)}}function L({pathname:e="/",search:t="",hash:n=""}){return t&&"?"!==t&&(e+="?"===t.charAt(0)?t:"?"+t),n&&"#"!==n&&(e+="#"===n.charAt(0)?n:"#"+n),e}function R(e){let t={}
if(e){let n=e.indexOf("#")
0>n||(t.hash=e.substring(n),e=e.substring(0,n))
let r=e.indexOf("?")
0>r||(t.search=e.substring(r),e=e.substring(0,r)),e&&(t.pathname=e)}return t}function O(e,t,n="/"){return function(e,t,n){let r=q(("string"==typeof t?R(t):t).pathname||"/",n)
if(null==r)return null
let a=D(e)
!function(e){e.sort((e,t)=>e.score!==t.score?t.score-e.score:function(e,t){return e.length===t.length&&e.slice(0,-1).every((e,n)=>e===t[n])?e[e.length-1]-t[t.length-1]:0}(e.routesMeta.map(e=>e.childrenIndex),t.routesMeta.map(e=>e.childrenIndex)))}(a)
let l=null
for(let o=0;null==l&&o<a.length;++o){let e=Q(r)
l=W(a[o],e,0)}return l}(e,t,n)}function D(e,t=[],n=[],r="",a=0){let l=(e,l,o=a,i)=>{let u={relativePath:void 0===i?e.path||"":i,caseSensitive:1==e.caseSensitive,childrenIndex:l,route:e}
if(u.relativePath.startsWith("/")){if(!u.relativePath.startsWith(r)&&o)return
_(u.relativePath.startsWith(r),`Absolute route path "${u.relativePath}" nested under path "${r}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`),u.relativePath=u.relativePath.slice(r.length)}let s=X([r,u.relativePath]),c=n.concat(u)
e.children&&e.children.length>0&&(_(1!=e.index,`Index routes must not have child routes. Please remove all child routes from route path "${s}".`),D(e.children,t,c,s,o)),(null!=e.path||e.index)&&t.push({path:s,score:B(s,e.index),routesMeta:c})}
return e.forEach((e,t)=>{var n
if(""!==e.path&&(null==(n=e.path)?void 0:n.includes("?")))for(let r of A(e.path))l(e,t,1,r)
else l(e,t)}),t}function A(e){let t=e.split("/")
if(0===t.length)return[]
let[n,...r]=t,a=n.endsWith("?"),l=n.replace(/\?$/,"")
if(0===r.length)return a?[l,""]:[l]
let o=A(r.join("/")),i=[]
return i.push(...o.map(e=>""===e?l:[l,e].join("/"))),a&&i.push(...o),i.map(t=>e.startsWith("/")&&""===t?"/":t)}var F=/^:[\w-]+$/,M=3,$=2,I=1,U=10,j=-2,H=e=>"*"===e
function B(e,t){let n=e.split("/"),r=n.length
return n.some(H)&&(r+=j),t&&(r+=$),n.filter(e=>!H(e)).reduce((e,t)=>e+(F.test(t)?M:""===t?I:U),r)}function W(e,t,n=0){let{routesMeta:r}=e,a={},l="/",o=[]
for(let i=0;i<r.length;++i){let e=r[i],u=i===r.length-1,s="/"===l?t:t.slice(l.length)||"/",c=V({path:e.relativePath,caseSensitive:e.caseSensitive,end:u},s),f=e.route
if(!c&&u&&n&&!r[r.length-1].route.index&&(c=V({path:e.relativePath,caseSensitive:e.caseSensitive,end:0},s)),!c)return null
Object.assign(a,c.params),o.push({params:a,pathname:X([l,c.pathname]),pathnameBase:J(X([l,c.pathnameBase])),route:f}),"/"!==c.pathnameBase&&(l=X([l,c.pathnameBase]))}return o}function V(e,t){"string"==typeof e&&(e={path:e,caseSensitive:0,end:1})
let[n,r]=function(e,t=0,n=1){N("*"===e||!e.endsWith("*")||e.endsWith("/*"),`Route path "${e}" will be treated as if it were "${e.replace(/\*$/,"/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${e.replace(/\*$/,"/*")}".`)
let r=[],a="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(e,t,n)=>(r.push({paramName:t,isOptional:null!=n}),n?"/?([^\\/]+)?":"/([^\\/]+)")).replace(/\/([\w-]+)\?(\/|$)/g,"(/$1)?$2")
return e.endsWith("*")?(r.push({paramName:"*"}),a+="*"===e||"/*"===e?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?a+="\\/*$":""!==e&&"/"!==e&&(a+="(?:(?=\\/|$))"),[RegExp(a,t?void 0:"i"),r]}(e.path,e.caseSensitive,e.end),a=t.match(n)
if(!a)return null
let l=a[0],o=l.replace(/(.)\/+$/,"$1"),i=a.slice(1)
return{params:r.reduce((e,{paramName:t,isOptional:n},r)=>{if("*"===t){let e=i[r]||""
o=l.slice(0,l.length-e.length).replace(/(.)\/+$/,"$1")}const a=i[r]
return e[t]=n&&!a?void 0:(a||"").replace(/%2F/g,"/"),e},{}),pathname:l,pathnameBase:o,pattern:e}}function Q(e){try{return e.split("/").map(e=>decodeURIComponent(e).replace(/\//g,"%2F")).join("/")}catch(t){return N(0,`The URL path "${e}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${t}).`),e}}function q(e,t){if("/"===t)return e
if(!e.toLowerCase().startsWith(t.toLowerCase()))return null
let n=t.endsWith("/")?t.length-1:t.length,r=e.charAt(n)
return r&&"/"!==r?null:e.slice(n)||"/"}function K(e,t,n,r){return`Cannot include a '${e}' character in a manually specified \`to.${t}\` field [${JSON.stringify(r)}].  Please separate it out to the \`to.${n}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`}function Y(e){let t=function(e){return e.filter((e,t)=>0===t||e.route.path&&e.route.path.length>0)}(e)
return t.map((e,n)=>n===t.length-1?e.pathname:e.pathnameBase)}function G(e,t,n,r=0){let a
"string"==typeof e?a=R(e):(a={...e},_(!a.pathname||!a.pathname.includes("?"),K("?","pathname","search",a)),_(!a.pathname||!a.pathname.includes("#"),K("#","pathname","hash",a)),_(!a.search||!a.search.includes("#"),K("#","search","hash",a)))
let l,o=""===e||""===a.pathname,i=o?"/":a.pathname
if(null==i)l=n
else{let e=t.length-1
if(!r&&i.startsWith("..")){let t=i.split("/")
for(;".."===t[0];)t.shift(),e-=1
a.pathname=t.join("/")}l=0>e?"/":t[e]}let u=function(e,t="/"){let{pathname:n,search:r="",hash:a=""}="string"==typeof e?R(e):e,l=n?n.startsWith("/")?n:function(e,t){let n=t.replace(/\/+$/,"").split("/")
return e.split("/").forEach(e=>{".."===e?n.length>1&&n.pop():"."!==e&&n.push(e)}),n.length>1?n.join("/"):"/"}(n,t):t
return{pathname:l,search:Z(r),hash:ee(a)}}(a,l),s=i&&"/"!==i&&i.endsWith("/"),c=(o||"."===i)&&n.endsWith("/")
return u.pathname.endsWith("/")||!s&&!c||(u.pathname+="/"),u}var X=e=>e.join("/").replace(/\/\/+/g,"/"),J=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),Z=e=>e&&"?"!==e?e.startsWith("?")?e:"?"+e:"",ee=e=>e&&"#"!==e?e.startsWith("#")?e:"#"+e:"",te=["POST","PUT","PATCH","DELETE"]
new Set(te)
var ne=["GET",...te]
new Set(ne)
var re=C.createContext(null)
re.displayName="DataRouter"
var ae=C.createContext(null)
ae.displayName="DataRouterState",C.createContext(0)
var le=C.createContext({isTransitioning:0})
le.displayName="ViewTransition",C.createContext(new Map).displayName="Fetchers",C.createContext(null).displayName="Await"
var oe=C.createContext(null)
oe.displayName="Navigation"
var ie=C.createContext(null)
ie.displayName="Location"
var ue=C.createContext({outlet:null,matches:[],isDataRoute:0})
ue.displayName="Route"
var se=C.createContext(null)
function ce(){return null!=C.useContext(ie)}function fe(){return _(ce(),"useLocation() may be used only in the context of a <Router> component."),C.useContext(ie).location}se.displayName="RouteError"
var de="You should call navigate() in a React.useEffect(), not when your component is first rendered."
function pe(e){C.useContext(oe).static||C.useLayoutEffect(e)}function he(){let{isDataRoute:e}=C.useContext(ue)
return e?function(){let{router:e}=function(){let e=C.useContext(re)
return _(e,we("useNavigate")),e}(),t=Se("useNavigate"),n=C.useRef(0)
return pe(()=>{n.current=1}),C.useCallback(async(r,a={})=>{N(n.current,de),n.current&&("number"==typeof r?e.navigate(r):await e.navigate(r,{fromRouteId:t,...a}))},[e,t])}():function(){_(ce(),"useNavigate() may be used only in the context of a <Router> component.")
let e=C.useContext(re),{basename:t,navigator:n}=C.useContext(oe),{matches:r}=C.useContext(ue),{pathname:a}=fe(),l=JSON.stringify(Y(r)),o=C.useRef(0)
return pe(()=>{o.current=1}),C.useCallback((r,i={})=>{if(N(o.current,de),!o.current)return
if("number"==typeof r)return void n.go(r)
let u=G(r,JSON.parse(l),a,"path"===i.relative)
null==e&&"/"!==t&&(u.pathname="/"===u.pathname?t:X([t,u.pathname])),(i.replace?n.replace:n.push)(u,i.state,i)},[t,n,l,a,e])}()}function me(e,{relative:t}={}){let{matches:n}=C.useContext(ue),{pathname:r}=fe(),a=JSON.stringify(Y(n))
return C.useMemo(()=>G(e,JSON.parse(a),r,"path"===t),[e,a,r,t])}function ge(e,t,n,r){var a
_(ce(),"useRoutes() may be used only in the context of a <Router> component.")
let{navigator:l}=C.useContext(oe),{matches:o}=C.useContext(ue),i=o[o.length-1],u=i?i.params:{},s=i?i.pathname:"/",c=i?i.pathnameBase:"/",f=i&&i.route
{let e=f&&f.path||""
xe(s,!f||e.endsWith("*")||e.endsWith("*?"),`You rendered descendant <Routes> (or called \`useRoutes()\`) at "${s}" (under <Route path="${e}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.\n\nPlease change the parent <Route path="${e}"> to <Route path="${"/"===e?"*":e+"/*"}">.`)}let d,p=fe()
if(t){let e="string"==typeof t?R(t):t
_("/"===c||(null==(a=e.pathname)?void 0:a.startsWith(c)),`When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${c}" but pathname "${e.pathname}" was given in the \`location\` prop.`),d=e}else d=p
let h=d.pathname||"/",m=h
if("/"!==c){let e=c.replace(/^\//,"").split("/")
m="/"+h.replace(/^\//,"").split("/").slice(e.length).join("/")}let g=O(e,{pathname:m})
N(f||null!=g,`No routes matched location "${d.pathname}${d.search}${d.hash}" `),N(null==g||void 0!==g[g.length-1].route.element||void 0!==g[g.length-1].route.Component||void 0!==g[g.length-1].route.lazy,`Matched leaf route at location "${d.pathname}${d.search}${d.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`)
let y=function(e,t=[],n=null,r=null){if(null==e){if(!n)return null
if(n.errors)e=n.matches
else{if(0!==t.length||n.initialized||0>=n.matches.length)return null
e=n.matches}}let a=e,l=null==n?void 0:n.errors
if(null!=l){let e=a.findIndex(e=>e.route.id&&void 0!==(null==l?void 0:l[e.route.id]))
_(e>=0,"Could not find a matching route for errors on route IDs: "+Object.keys(l).join(",")),a=a.slice(0,Math.min(a.length,e+1))}let o=0,i=-1
if(n)for(let u=0;u<a.length;u++){let e=a[u]
if((e.route.HydrateFallback||e.route.hydrateFallbackElement)&&(i=u),e.route.id){let{loaderData:t,errors:r}=n,l=e.route.loader&&!t.hasOwnProperty(e.route.id)&&(!r||void 0===r[e.route.id])
if(e.route.lazy||l){o=1,a=0>i?[a[0]]:a.slice(0,i+1)
break}}}return a.reduceRight((e,u,s)=>{let c,f=0,d=null,p=null
n&&(c=l&&u.route.id?l[u.route.id]:void 0,d=u.route.errorElement||ve,o&&(0>i&&0===s?(xe("route-fallback",0,"No `HydrateFallback` element provided to render during initial hydration"),f=1,p=null):i===s&&(f=1,p=u.route.hydrateFallbackElement||null)))
let h=t.concat(a.slice(0,s+1)),m=()=>{let t
return t=c?d:f?p:u.route.Component?C.createElement(u.route.Component,null):u.route.element?u.route.element:e,C.createElement(ke,{match:u,routeContext:{outlet:e,matches:h,isDataRoute:null!=n},children:t})}
return n&&(u.route.ErrorBoundary||u.route.errorElement||0===s)?C.createElement(be,{location:n.location,revalidation:n.revalidation,component:d,error:c,children:m(),routeContext:{outlet:null,matches:h,isDataRoute:1},unstable_onError:r}):m()},null)}(g&&g.map(e=>Object.assign({},e,{params:Object.assign({},u,e.params),pathname:X([c,l.encodeLocation?l.encodeLocation(e.pathname.replace(/\?/g,"%3F").replace(/#/g,"%23")).pathname:e.pathname]),pathnameBase:"/"===e.pathnameBase?c:X([c,l.encodeLocation?l.encodeLocation(e.pathnameBase.replace(/\?/g,"%3F").replace(/#/g,"%23")).pathname:e.pathnameBase])})),o,n,r)
return t&&y?C.createElement(ie.Provider,{value:{location:{pathname:"/",search:"",hash:"",state:null,key:"default",...d},navigationType:"POP"}},y):y}function ye(){let e=function(){var e
let t=C.useContext(se),n=function(){let e=C.useContext(ae)
return _(e,we("useRouteError")),e}(),r=Se("useRouteError")
return void 0!==t?t:null==(e=n.errors)?void 0:e[r]}(),t=function(e){return null!=e&&"number"==typeof e.status&&"string"==typeof e.statusText&&"boolean"==typeof e.internal&&"data"in e}(e)?`${e.status} ${e.statusText}`:e instanceof Error?e.message:JSON.stringify(e),n=e instanceof Error?e.stack:null,r="rgba(200,200,200, 0.5)",a={padding:"0.5rem",backgroundColor:r},l={padding:"2px 4px",backgroundColor:r},o=null
return o=C.createElement(C.Fragment,null,C.createElement("p",null,"💿 Hey developer 👋"),C.createElement("p",null,"You can provide a way better UX than this when your app throws errors by providing your own ",C.createElement("code",{style:l},"ErrorBoundary")," or"," ",C.createElement("code",{style:l},"errorElement")," prop on your route.")),C.createElement(C.Fragment,null,C.createElement("h2",null,"Unexpected Application Error!"),C.createElement("h3",{style:{fontStyle:"italic"}},t),n?C.createElement("pre",{style:a},n):null,o)}C.createContext(null)
var ve=C.createElement(ye,null),be=class extends C.Component{constructor(e){super(e),this.state={location:e.location,revalidation:e.revalidation,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,t){return t.location!==e.location||"idle"!==t.revalidation&&"idle"===e.revalidation?{error:e.error,location:e.location,revalidation:e.revalidation}:{error:void 0!==e.error?e.error:t.error,location:t.location,revalidation:e.revalidation||t.revalidation}}componentDidCatch(e,t){this.props.unstable_onError&&this.props.unstable_onError(e,t)}render(){return void 0!==this.state.error?C.createElement(ue.Provider,{value:this.props.routeContext},C.createElement(se.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}
function ke({routeContext:e,match:t,children:n}){let r=C.useContext(re)
return r&&r.static&&r.staticContext&&(t.route.errorElement||t.route.ErrorBoundary)&&(r.staticContext._deepestRenderedBoundaryId=t.route.id),C.createElement(ue.Provider,{value:e},n)}function we(e){return e+" must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router."}function Se(e){let t=function(e){let t=C.useContext(ue)
return _(t,we(e)),t}(e),n=t.matches[t.matches.length-1]
return _(n.route.id,e+' can only be used on routes that contain a unique "id"'),n.route.id}var Ee={}
function xe(e,t,n){t||Ee[e]||(Ee[e]=1,N(0,n))}function Ce(){_(0,"A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.")}function Pe({basename:e="/",children:t=null,location:n,navigationType:r="POP",navigator:a,static:l=0}){_(!ce(),"You cannot render a <Router> inside another <Router>. You should never have more than one in your app.")
let o=e.replace(/^\/*/,"/"),i=C.useMemo(()=>({basename:o,navigator:a,static:l,future:{}}),[o,a,l])
"string"==typeof n&&(n=R(n))
let{pathname:u="/",search:s="",hash:c="",state:f=null,key:d="default"}=n,p=C.useMemo(()=>{let e=q(u,o)
return null==e?null:{location:{pathname:e,search:s,hash:c,state:f,key:d},navigationType:r}},[o,u,s,c,f,d,r])
return N(null!=p,`<Router basename="${o}"> is not able to match the URL "${u}${s}${c}" because it does not start with the basename, so the <Router> won't render anything.`),null==p?null:C.createElement(oe.Provider,{value:i},C.createElement(ie.Provider,{children:t,value:p}))}function _e({children:e,location:t}){return ge(Ne(e),t)}function Ne(e,t=[]){let n=[]
return C.Children.forEach(e,(e,r)=>{if(!C.isValidElement(e))return
let a=[...t,r]
if(e.type===C.Fragment)return void n.push.apply(n,Ne(e.props.children,a))
_(e.type===Ce,`[${"string"==typeof e.type?e.type:e.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`),_(!e.props.index||!e.props.children,"An index route cannot have child routes.")
let l={id:e.props.id||a.join("-"),caseSensitive:e.props.caseSensitive,element:e.props.element,Component:e.props.Component,index:e.props.index,path:e.props.path,middleware:e.props.middleware,loader:e.props.loader,action:e.props.action,hydrateFallbackElement:e.props.hydrateFallbackElement,HydrateFallback:e.props.HydrateFallback,errorElement:e.props.errorElement,ErrorBoundary:e.props.ErrorBoundary,hasErrorBoundary:1==e.props.hasErrorBoundary||null!=e.props.ErrorBoundary||null!=e.props.errorElement,shouldRevalidate:e.props.shouldRevalidate,handle:e.props.handle,lazy:e.props.lazy}
e.props.children&&(l.children=Ne(e.props.children,a)),n.push(l)}),n}C.memo(function({routes:e,future:t,state:n,unstable_onError:r}){return ge(e,void 0,n,r)})
var ze="get",Te="application/x-www-form-urlencoded"
function Le(e){return null!=e&&"string"==typeof e.tagName}var Re=null,Oe=new Set(["application/x-www-form-urlencoded","multipart/form-data","text/plain"])
function De(e){return null==e||Oe.has(e)?e:(N(0,`"${e}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${Te}"`),null)}function Ae(e,t){if(0==e||null==e)throw Error(t)}function Fe(e){return null==e?0:null==e.href?"preload"===e.rel&&"string"==typeof e.imageSrcSet&&"string"==typeof e.imageSizes:"string"==typeof e.rel&&"string"==typeof e.href}function Me(e,t,n,r,a,l){let o=(e,t)=>n[t]?e.route.id!==n[t].route.id:1,i=(e,t)=>{var r
return n[t].pathname!==e.pathname||(null==(r=n[t].route.path)?void 0:r.endsWith("*"))&&n[t].params["*"]!==e.params["*"]}
return"assets"===l?t.filter((e,t)=>o(e,t)||i(e,t)):"data"===l?t.filter((t,l)=>{var u
let s=r.routes[t.route.id]
if(!s||!s.hasLoader)return 0
if(o(t,l)||i(t,l))return 1
if(t.route.shouldRevalidate){let r=t.route.shouldRevalidate({currentUrl:new URL(a.pathname+a.search+a.hash,window.origin),currentParams:(null==(u=n[0])?void 0:u.params)||{},nextUrl:new URL(e,window.origin),nextParams:t.params,defaultShouldRevalidate:1})
if("boolean"==typeof r)return r}return 1}):[]}function $e(){let e=C.useContext(re)
return Ae(e,"You must render this element inside a <DataRouterContext.Provider> element"),e}Object.getOwnPropertyNames(Object.prototype).sort().join("\0")
var Ie=C.createContext(void 0)
function Ue(){let e=C.useContext(Ie)
return Ae(e,"You must render this element inside a <HydratedRouter> element"),e}function je(e,t){return n=>{e&&e(n),n.defaultPrevented||t(n)}}function He({page:e,...t}){let{router:n}=$e(),r=C.useMemo(()=>O(n.routes,e,n.basename),[n.routes,e,n.basename])
return r?C.createElement(Be,{page:e,matches:r,...t}):null}function Be({page:e,matches:t,...n}){let r=fe(),{manifest:a,routeModules:l}=Ue(),{basename:o}=$e(),{loaderData:i,matches:u}=function(){let e=C.useContext(ae)
return Ae(e,"You must render this element inside a <DataRouterStateContext.Provider> element"),e}(),s=C.useMemo(()=>Me(e,t,u,a,r,"data"),[e,t,u,a,r]),c=C.useMemo(()=>Me(e,t,u,a,r,"assets"),[e,t,u,a,r]),f=C.useMemo(()=>{if(e===r.pathname+r.search+r.hash)return[]
let n=new Set,u=0
if(t.forEach(e=>{var t
let r=a.routes[e.route.id]
r&&r.hasLoader&&(!s.some(t=>t.route.id===e.route.id)&&e.route.id in i&&(null==(t=l[e.route.id])?void 0:t.shouldRevalidate)||r.hasClientLoader?u=1:n.add(e.route.id))}),0===n.size)return[]
let c=function(e,t,n){let r="string"==typeof e?new URL(e,"undefined"==typeof window?"server://singlefetch/":window.location.origin):e
return"/"===r.pathname?r.pathname="_root."+n:t&&"/"===q(r.pathname,t)?r.pathname=`${t.replace(/\/$/,"")}/_root.${n}`:r.pathname=`${r.pathname.replace(/\/$/,"")}.${n}`,r}(e,o,"data")
return u&&n.size>0&&c.searchParams.set("_routes",t.filter(e=>n.has(e.route.id)).map(e=>e.route.id).join(",")),[c.pathname+c.search]},[o,i,r,a,s,t,e,l]),d=C.useMemo(()=>function(e,t,{includeHydrateFallback:n}={}){return r=e.map(e=>{let r=t.routes[e.route.id]
if(!r)return[]
let a=[r.module]
return r.clientActionModule&&(a=a.concat(r.clientActionModule)),r.clientLoaderModule&&(a=a.concat(r.clientLoaderModule)),n&&r.hydrateFallbackModule&&(a=a.concat(r.hydrateFallbackModule)),r.imports&&(a=a.concat(r.imports)),a}).flat(1),[...new Set(r)]
var r}(c,a),[c,a]),p=function(e){let{manifest:t,routeModules:n}=Ue(),[r,a]=C.useState([])
return C.useEffect(()=>{let r=0
return async function(e,t,n){return function(e){let t=new Set
return new Set(void 0),e.reduce((e,n)=>{let r=JSON.stringify(function(e){let t={},n=Object.keys(e).sort()
for(let r of n)t[r]=e[r]
return t}(n))
return t.has(r)||(t.add(r),e.push({key:r,link:n})),e},[])}((await Promise.all(e.map(async e=>{let r=t.routes[e.route.id]
if(r){let e=await async function(e,t){if(e.id in t)return t[e.id]
try{let n=await import(e.module)
return t[e.id]=n,n}catch(n){return window.__reactRouterContext&&window.__reactRouterContext.isSpaMode,window.location.reload(),new Promise(()=>{})}}(r,n)
return e.links?e.links():[]}return[]}))).flat(1).filter(Fe).filter(e=>"stylesheet"===e.rel||"preload"===e.rel).map(e=>"stylesheet"===e.rel?{...e,rel:"prefetch",as:"style"}:{...e,rel:"prefetch"}))}(e,t,n).then(e=>{r||a(e)}),()=>{r=1}},[e,t,n]),r}(c)
return C.createElement(C.Fragment,null,f.map(e=>C.createElement("link",{key:e,rel:"prefetch",as:"fetch",href:e,...n})),d.map(e=>C.createElement("link",{key:e,rel:"modulepreload",href:e,...n})),p.map(({key:e,link:t})=>C.createElement("link",{key:e,nonce:n.nonce,...t})))}function We(...e){return t=>{e.forEach(e=>{"function"==typeof e?e(t):null!=e&&(e.current=t)})}}Ie.displayName="FrameworkContext"
var Ve="undefined"!=typeof window&&void 0!==window.document&&void 0!==window.document.createElement
try{Ve&&(window.__reactRouterVersion="7.9.3")}catch(Ze){}function Qe({basename:e,children:t,window:n}){let r=C.useRef()
null==r.current&&(r.current=function(e={}){return function(e,t,n,r={}){let{window:a=document.defaultView,v5Compat:l=0}=r,o=a.history,i="POP",u=null,s=c()
function c(){return(o.state||{idx:null}).idx}function f(){i="POP"
let e=c(),t=null==e?null:e-s
s=e,u&&u({action:i,location:p.location,delta:t})}function d(e){return function(e,t=0){let n="http://localhost"
"undefined"!=typeof window&&(n="null"!==window.location.origin?window.location.origin:window.location.href),_(n,"No window.location.(origin|href) available to create URL")
let r="string"==typeof e?e:L(e)
return r=r.replace(/ $/,"%20"),!t&&r.startsWith("//")&&(r=n+r),new URL(r,n)}(e)}null==s&&(s=0,o.replaceState({...o.state,idx:s},""))
let p={get action(){return i},get location(){return e(a,o)},listen(e){if(u)throw Error("A history only accepts one active listener")
return a.addEventListener(P,f),u=e,()=>{a.removeEventListener(P,f),u=null}},createHref:e=>t(a,e),createURL:d,encodeLocation(e){let t=d(e)
return{pathname:t.pathname,search:t.search,hash:t.hash}},push:function(e,t){i="PUSH"
let n=T(p.location,e,t)
s=c()+1
let r=z(n,s),f=p.createHref(n)
try{o.pushState(r,"",f)}catch(d){if(d instanceof DOMException&&"DataCloneError"===d.name)throw d
a.location.assign(f)}l&&u&&u({action:i,location:p.location,delta:1})},replace:function(e,t){i="REPLACE"
let n=T(p.location,e,t)
s=c()
let r=z(n,s),a=p.createHref(n)
o.replaceState(r,"",a),l&&u&&u({action:i,location:p.location,delta:0})},go:e=>o.go(e)}
return p}(function(e,t){let{pathname:n,search:r,hash:a}=e.location
return T("",{pathname:n,search:r,hash:a},t.state&&t.state.usr||null,t.state&&t.state.key||"default")},function(e,t){return"string"==typeof t?t:L(t)},0,e)}({window:n,v5Compat:1}))
let a=r.current,[l,o]=C.useState({action:a.action,location:a.location}),i=C.useCallback(e=>{C.startTransition(()=>o(e))},[o])
return C.useLayoutEffect(()=>a.listen(i),[a,i]),C.createElement(Pe,{basename:e,children:t,location:l.location,navigationType:l.action,navigator:a})}var qe=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Ke=C.forwardRef(function({onClick:e,discover:t="render",prefetch:n="none",relative:r,reloadDocument:a,replace:l,state:o,target:i,to:u,preventScrollReset:s,viewTransition:c,...f},d){let p,{basename:h}=C.useContext(oe),m="string"==typeof u&&qe.test(u),g=0
if("string"==typeof u&&m&&(p=u,Ve))try{let e=new URL(window.location.href),t=u.startsWith("//")?new URL(e.protocol+u):new URL(u),n=q(t.pathname,h)
t.origin===e.origin&&null!=n?u=n+t.search+t.hash:g=1}catch(Ze){N(0,`<Link to="${u}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`)}let y=function(e,{relative:t}={}){_(ce(),"useHref() may be used only in the context of a <Router> component.")
let{basename:n,navigator:r}=C.useContext(oe),{hash:a,pathname:l,search:o}=me(e,{relative:t}),i=l
return"/"!==n&&(i="/"===l?n:X([n,l])),r.createHref({pathname:i,search:o,hash:a})}(u,{relative:r}),[v,b,k]=function(e,t){let n=C.useContext(Ie),[r,a]=C.useState(0),[l,o]=C.useState(0),{onFocus:i,onBlur:u,onMouseEnter:s,onMouseLeave:c,onTouchStart:f}=t,d=C.useRef(null)
C.useEffect(()=>{if("render"===e&&o(1),"viewport"===e){let e=new IntersectionObserver(e=>{e.forEach(e=>{o(e.isIntersecting)})},{threshold:.5})
return d.current&&e.observe(d.current),()=>{e.disconnect()}}},[e]),C.useEffect(()=>{if(r){let e=setTimeout(()=>{o(1)},100)
return()=>{clearTimeout(e)}}},[r])
let p=()=>{a(1)},h=()=>{a(0),o(0)}
return n?"intent"!==e?[l,d,{}]:[l,d,{onFocus:je(i,p),onBlur:je(u,h),onMouseEnter:je(s,p),onMouseLeave:je(c,h),onTouchStart:je(f,p)}]:[0,d,{}]}(n,f),w=function(e,{target:t,replace:n,state:r,preventScrollReset:a,relative:l,viewTransition:o}={}){let i=he(),u=fe(),s=me(e,{relative:l})
return C.useCallback(c=>{if(function(e,t){return!(0!==e.button||t&&"_self"!==t||function(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}(e))}(c,t)){c.preventDefault()
let t=void 0!==n?n:L(u)===L(s)
i(e,{replace:t,state:r,preventScrollReset:a,relative:l,viewTransition:o})}},[u,i,s,n,r,t,e,a,l,o])}(u,{replace:l,state:o,target:i,preventScrollReset:s,relative:r,viewTransition:c}),S=C.createElement("a",{...f,...k,href:p||y,onClick:g||a?e:function(t){e&&e(t),t.defaultPrevented||w(t)},ref:We(d,b),target:i,"data-discover":m||"render"!==t?void 0:"true"})
return v&&!m?C.createElement(C.Fragment,null,S,C.createElement(He,{page:y})):S})
function Ye(e){let t=C.useContext(re)
return _(t,function(e){return e+" must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router."}(e)),t}Ke.displayName="Link",C.forwardRef(function({"aria-current":e="page",caseSensitive:t=0,className:n="",end:r=0,style:a,to:l,viewTransition:o,children:i,...u},s){let c=me(l,{relative:u.relative}),f=fe(),d=C.useContext(ae),{navigator:p,basename:h}=C.useContext(oe),m=null!=d&&function(e,{relative:t}={}){let n=C.useContext(le)
_(null!=n,"`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?")
let{basename:r}=Ye("useViewTransitionState"),a=me(e,{relative:t})
if(!n.isTransitioning)return 0
let l=q(n.currentLocation.pathname,r)||n.currentLocation.pathname,o=q(n.nextLocation.pathname,r)||n.nextLocation.pathname
return null!=V(a.pathname,o)||null!=V(a.pathname,l)}(c)&&1==o,g=p.encodeLocation?p.encodeLocation(c).pathname:c.pathname,y=f.pathname,v=d&&d.navigation&&d.navigation.location?d.navigation.location.pathname:null
t||(y=y.toLowerCase(),v=v?v.toLowerCase():null,g=g.toLowerCase()),v&&h&&(v=q(v,h)||v)
const b="/"!==g&&g.endsWith("/")?g.length-1:g.length
let k,w=y===g||!r&&y.startsWith(g)&&"/"===y.charAt(b),S=null!=v&&(v===g||!r&&v.startsWith(g)&&"/"===v.charAt(g.length)),E={isActive:w,isPending:S,isTransitioning:m},x=w?e:void 0
k="function"==typeof n?n(E):[n,w?"active":null,S?"pending":null,m?"transitioning":null].filter(Boolean).join(" ")
let P="function"==typeof a?a(E):a
return C.createElement(Ke,{...u,"aria-current":x,className:k,ref:s,style:P,to:l,viewTransition:o},"function"==typeof i?i(E):i)}).displayName="NavLink",C.forwardRef(({discover:e="render",fetcherKey:t,navigate:n,reloadDocument:r,replace:a,state:l,method:o=ze,action:i,onSubmit:u,relative:s,preventScrollReset:c,viewTransition:f,...d},p)=>{let h=function(){let{router:e}=Ye("useSubmit"),{basename:t}=C.useContext(oe),n=Se("useRouteId")
return C.useCallback(async(r,a={})=>{let{action:l,method:o,encType:i,formData:u,body:s}=function(e,t){let n,r,a,l,o
if(Le(i=e)&&"form"===i.tagName.toLowerCase()){let o=e.getAttribute("action")
r=o?q(o,t):null,n=e.getAttribute("method")||ze,a=De(e.getAttribute("enctype"))||Te,l=new FormData(e)}else if(function(e){return Le(e)&&"button"===e.tagName.toLowerCase()}(e)||function(e){return Le(e)&&"input"===e.tagName.toLowerCase()}(e)&&("submit"===e.type||"image"===e.type)){let o=e.form
if(null==o)throw Error('Cannot submit a <button> or <input type="submit"> without a <form>')
let i=e.getAttribute("formaction")||o.getAttribute("action")
if(r=i?q(i,t):null,n=e.getAttribute("formmethod")||o.getAttribute("method")||ze,a=De(e.getAttribute("formenctype"))||De(o.getAttribute("enctype"))||Te,l=new FormData(o,e),!function(){if(null===Re)try{new FormData(document.createElement("form"),0),Re=0}catch(Ze){Re=1}return Re}()){let{name:t,type:n,value:r}=e
if("image"===n){let e=t?t+".":""
l.append(e+"x","0"),l.append(e+"y","0")}else t&&l.append(t,r)}}else{if(Le(e))throw Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">')
n=ze,r=null,a=Te,o=e}var i
return l&&"text/plain"===a&&(o=l,l=void 0),{action:r,method:n.toLowerCase(),encType:a,formData:l,body:o}}(r,t)
if(0==a.navigate){let t=a.fetcherKey||Xe()
await e.fetch(t,n,a.action||l,{preventScrollReset:a.preventScrollReset,formData:u,body:s,formMethod:a.method||o,formEncType:a.encType||i,flushSync:a.flushSync})}else await e.navigate(a.action||l,{preventScrollReset:a.preventScrollReset,formData:u,body:s,formMethod:a.method||o,formEncType:a.encType||i,replace:a.replace,state:a.state,fromRouteId:n,flushSync:a.flushSync,viewTransition:a.viewTransition})},[e,t,n])}(),m=function(e,{relative:t}={}){let{basename:n}=C.useContext(oe),r=C.useContext(ue)
_(r,"useFormAction must be used inside a RouteContext")
let[a]=r.matches.slice(-1),l={...me(e||".",{relative:t})},o=fe()
if(null==e){l.search=o.search
let e=new URLSearchParams(l.search),t=e.getAll("index")
if(t.some(e=>""===e)){e.delete("index"),t.filter(e=>e).forEach(t=>e.append("index",t))
let n=e.toString()
l.search=n?"?"+n:""}}return e&&"."!==e||!a.route.index||(l.search=l.search?l.search.replace(/^\?/,"?index&"):"?index"),"/"!==n&&(l.pathname="/"===l.pathname?n:X([n,l.pathname])),L(l)}(i,{relative:s}),g="get"===o.toLowerCase()?"get":"post",y="string"==typeof i&&qe.test(i)
return C.createElement("form",{ref:p,method:g,action:m,onSubmit:r?u:e=>{if(u&&u(e),e.defaultPrevented)return
e.preventDefault()
let r=e.nativeEvent.submitter,i=(null==r?void 0:r.getAttribute("formmethod"))||o
h(r||e.currentTarget,{fetcherKey:t,method:i,navigate:n,replace:a,state:l,relative:s,preventScrollReset:c,viewTransition:f})},...d,"data-discover":y||"render"!==e?void 0:"true"})}).displayName="Form"
var Ge=0,Xe=()=>`__${++Ge+""}__`,Je=E()
export{Qe as B,Ke as L,_e as R,Je as a,fe as b,Ce as c,x as d,u as j,C as r,he as u}
