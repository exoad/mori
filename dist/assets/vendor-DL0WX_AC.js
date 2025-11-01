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
return r.useEffect(e,t)},h.useId=function(){return S.H.useId()},h.useImperativeHandle=function(e,t,n){return S.H.useImperativeHandle(e,t,n)},h.useInsertionEffect=function(e,t){return S.H.useInsertionEffect(e,t)},h.useLayoutEffect=function(e,t){return S.H.useLayoutEffect(e,t)},h.useMemo=function(e,t){return S.H.useMemo(e,t)},h.useOptimistic=function(e,t){return S.H.useOptimistic(e,t)},h.useReducer=function(e,t,n){return S.H.useReducer(e,t,n)},h.useRef=function(e){return S.H.useRef(e)},h.useState=function(e){return S.H.useState(e)},h.useSyncExternalStore=function(e,t,n){return S.H.useSyncExternalStore(e,t,n)},h.useTransition=function(){return S.H.useTransition()},h.version="19.1.0",h}function g(){return l||(l=1,p.exports=m()),p.exports}var y,v,b,k,w={exports:{}},S={},E=(k||(k=1,function e(){if("undefined"!=typeof __REACT_DEVTOOLS_GLOBAL_HOOK__&&"function"==typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE)try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(e)}catch(t){}}(),s.exports=function(){if(b)return c
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
try{return e.apply(this,arguments)}finally{d=n}}}}(d)),d)),f.exports),t=g(),a=(v||(v=1,function e(){if("undefined"!=typeof __REACT_DEVTOOLS_GLOBAL_HOOK__&&"function"==typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE)try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(e)}catch(t){}}(),w.exports=function(){if(y)return S
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
r.d.m(e,{as:"string"==typeof t.as&&"script"!==t.as?t.as:void 0,crossOrigin:n,integrity:"string"==typeof t.integrity?t.integrity:void 0})}else r.d.m(e)},S.requestFormReset=function(e){r.d.r(e)},S.unstable_batchedUpdates=function(e,t){return e(t)},S.useFormState=function(e,t,n){return l.H.useFormState(e,t,n)},S.useFormStatus=function(){return l.H.useHostTransitionStatus()},S.version="19.1.0",S}()),w.exports)
function l(e){var t="https://react.dev/errors/"+e
if(arguments.length>1){t+="?args[]="+encodeURIComponent(arguments[1])
for(var n=2;arguments.length>n;n++)t+="&args[]="+encodeURIComponent(arguments[n])}return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function o(e){return!(!e||1!==e.nodeType&&9!==e.nodeType&&11!==e.nodeType)}function i(e){var t=e,n=e
if(e.alternate)for(;t.return;)t=t.return
else{e=t
do{!!(4098&(t=e).flags)&&(n=t.return),e=t.return}while(e)}return 3===t.tag?n:null}function u(e){if(13===e.tag){var t=e.memoizedState
if(null===t&&null!==(e=e.alternate)&&(t=e.memoizedState),null!==t)return t.dehydrated}return null}function s(e){if(i(e)!==e)throw Error(l(188))}function p(e){var t=e.tag
if(5===t||26===t||27===t||6===t)return e
for(e=e.child;null!==e;){if(null!==(t=p(e)))return t
e=e.sibling}return null}var h=Object.assign,m=Symbol.for("react.element"),k=Symbol.for("react.transitional.element"),E=Symbol.for("react.portal"),x=Symbol.for("react.fragment"),C=Symbol.for("react.strict_mode"),P=Symbol.for("react.profiler"),_=Symbol.for("react.provider"),N=Symbol.for("react.consumer"),z=Symbol.for("react.context"),T=Symbol.for("react.forward_ref"),L=Symbol.for("react.suspense"),R=Symbol.for("react.suspense_list"),O=Symbol.for("react.memo"),D=Symbol.for("react.lazy"),A=Symbol.for("react.activity"),F=Symbol.for("react.memo_cache_sentinel"),M=Symbol.iterator
function $(e){return null===e||"object"!=typeof e?null:"function"==typeof(e=M&&e[M]||e["@@iterator"])?e:null}var I=Symbol.for("react.client.reference")
function U(e){if(null==e)return null
if("function"==typeof e)return e.$$typeof===I?null:e.displayName||e.name||null
if("string"==typeof e)return e
switch(e){case x:return"Fragment"
case P:return"Profiler"
case C:return"StrictMode"
case L:return"Suspense"
case R:return"SuspenseList"
case A:return"Activity"}if("object"==typeof e)switch(e.$$typeof){case E:return"Portal"
case z:return(e.displayName||"Context")+".Provider"
case N:return(e._context.displayName||"Context")+".Consumer"
case T:var t=e.render
return(e=e.displayName)||(e=""!==(e=t.displayName||t.name||"")?"ForwardRef("+e+")":"ForwardRef"),e
case O:return null!==(t=e.displayName||null)?t:U(e.type)||"Memo"
case D:t=e._payload,e=e._init
try{return U(e(t))}catch(n){}}return null}var j=Array.isArray,H=t.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,B=a.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,W={pending:0,data:null,method:null,action:null},V=[],Q=-1
function q(e){return{current:e}}function K(e){0>Q||(e.current=V[Q],V[Q]=null,Q--)}function Y(e,t){Q++,V[Q]=e.current,e.current=t}var G=q(null),X=q(null),J=q(null),Z=q(null)
function ee(e,t){switch(Y(J,t),Y(X,e),Y(G,null),t.nodeType){case 9:case 11:e=(e=t.documentElement)&&(e=e.namespaceURI)?pf(e):0
break
default:if(e=t.tagName,t=t.namespaceURI)e=hf(t=pf(t),e)
else switch(e){case"svg":e=1
break
case"math":e=2
break
default:e=0}}K(G),Y(G,e)}function te(){K(G),K(X),K(J)}function ne(e){null!==e.memoizedState&&Y(Z,e)
var t=G.current,n=hf(t,e.type)
t!==n&&(Y(X,e),Y(G,n))}function re(e){X.current===e&&(K(G),K(X)),Z.current===e&&(K(Z),rd._currentValue=W)}var ae={}.hasOwnProperty,le=e.unstable_scheduleCallback,oe=e.unstable_cancelCallback,ie=e.unstable_shouldYield,ue=e.unstable_requestPaint,se=e.unstable_now,ce=e.unstable_getCurrentPriorityLevel,fe=e.unstable_ImmediatePriority,de=e.unstable_UserBlockingPriority,pe=e.unstable_NormalPriority,he=e.unstable_LowPriority,me=e.unstable_IdlePriority,ge=e.log,ye=e.unstable_setDisableYieldValue,ve=null,be=null
function ke(e){if("function"==typeof ge&&ye(e),be&&"function"==typeof be.setStrictMode)try{be.setStrictMode(ve,e)}catch(t){}}var we=Math.clz32?Math.clz32:function(e){return 0==(e>>>=0)?32:31-(Se(e)/Ee|0)|0},Se=Math.log,Ee=Math.LN2,xe=256,Ce=4194304
function Pe(e){var t=42&e
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
default:return e}}function _e(e,t,n){var r=e.pendingLanes
if(0===r)return 0
var a=0,l=e.suspendedLanes,o=e.pingedLanes
e=e.warmLanes
var i=134217727&r
return 0!==i?0!==(r=i&~l)?a=Pe(r):0!==(o&=i)?a=Pe(o):n||0!==(n=i&~e)&&(a=Pe(n)):0!==(i=r&~l)?a=Pe(i):0!==o?a=Pe(o):n||0!==(n=r&~e)&&(a=Pe(n)),0===a?0:0!==t&&t!==a&&0===(t&l)&&((l=a&-a)>=(n=t&-t)||32===l&&4194048&n)?t:a}function Ne(e,t){return 0===(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&t)}function ze(e,t){switch(e){case 1:case 2:case 4:case 8:case 64:return t+250
case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3
default:return-1}}function Te(){var e=xe
return!(4194048&(xe<<=1))&&(xe=256),e}function Le(){var e=Ce
return!(62914560&(Ce<<=1))&&(Ce=4194304),e}function Re(e){for(var t=[],n=0;31>n;n++)t.push(e)
return t}function Oe(e,t){e.pendingLanes|=t,268435456!==t&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function De(e,t,n){e.pendingLanes|=t,e.suspendedLanes&=~t
var r=31-we(t)
e.entangledLanes|=t,e.entanglements[r]=1073741824|e.entanglements[r]|4194090&n}function Ae(e,t){var n=e.entangledLanes|=t
for(e=e.entanglements;n;){var r=31-we(n),a=1<<r
a&t|e[r]&t&&(e[r]|=t),n&=~a}}function Fe(e){switch(e){case 2:e=1
break
case 8:e=4
break
case 32:e=16
break
case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128
break
case 268435456:e=134217728
break
default:e=0}return e}function Me(e){return(e&=-e)>2?e>8?134217727&e?32:268435456:8:2}function $e(){var e=B.p
return 0!==e?e:void 0===(e=window.event)?32:vd(e.type)}var Ie=Math.random().toString(36).slice(2),Ue="__reactFiber$"+Ie,je="__reactProps$"+Ie,He="__reactContainer$"+Ie,Be="__reactEvents$"+Ie,We="__reactListeners$"+Ie,Ve="__reactHandles$"+Ie,Qe="__reactResources$"+Ie,qe="__reactMarker$"+Ie
function Ke(e){delete e[Ue],delete e[je],delete e[Be],delete e[We],delete e[Ve]}function Ye(e){var t=e[Ue]
if(t)return t
for(var n=e.parentNode;n;){if(t=n[He]||n[Ue]){if(n=t.alternate,null!==t.child||null!==n&&null!==n.child)for(e=Nf(e);null!==e;){if(n=e[Ue])return n
e=Nf(e)}return t}n=(e=n).parentNode}return null}function Ge(e){if(e=e[Ue]||e[He]){var t=e.tag
if(5===t||6===t||13===t||26===t||27===t||3===t)return e}return null}function Xe(e){var t=e.tag
if(5===t||26===t||27===t||6===t)return e.stateNode
throw Error(l(33))}function Je(e){var t=e[Qe]
return t||(t=e[Qe]={hoistableStyles:new Map,hoistableScripts:new Map}),t}function Ze(e){e[qe]=1}var et=new Set,tt={}
function nt(e,t){rt(e,t),rt(e+"Capture",t)}function rt(e,t){for(tt[e]=t,e=0;e<t.length;e++)et.add(t[e])}var at,lt,ot=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),it={},ut={}
function st(e,t,n){if(a=t,ae.call(ut,a)||!ae.call(it,a)&&(ot.test(a)?ut[a]=1:(it[a]=1,0)))if(null===n)e.removeAttribute(t)
else{switch(typeof n){case"undefined":case"function":case"symbol":return void e.removeAttribute(t)
case"boolean":var r=t.toLowerCase().slice(0,5)
if("data-"!==r&&"aria-"!==r)return void e.removeAttribute(t)}e.setAttribute(t,""+n)}var a}function ct(e,t,n){if(null===n)e.removeAttribute(t)
else{switch(typeof n){case"undefined":case"function":case"symbol":case"boolean":return void e.removeAttribute(t)}e.setAttribute(t,""+n)}}function ft(e,t,n,r){if(null===r)e.removeAttribute(n)
else{switch(typeof r){case"undefined":case"function":case"symbol":case"boolean":return void e.removeAttribute(n)}e.setAttributeNS(t,n,""+r)}}function dt(e){if(void 0===at)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/)
at=t&&t[1]||"",lt=n.stack.indexOf("\n    at")>-1?" (<anonymous>)":n.stack.indexOf("@")>-1?"@unknown:0:0":""}return"\n"+at+e+lt}var pt=0
function ht(e,t){if(!e||pt)return""
pt=1
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
break}}}finally{pt=0,Error.prepareStackTrace=n}return(n=e?e.displayName||e.name:"")?dt(n):""}function mt(e){switch(e.tag){case 26:case 27:case 5:return dt(e.type)
case 16:return dt("Lazy")
case 13:return dt("Suspense")
case 19:return dt("SuspenseList")
case 0:case 15:return ht(e.type,0)
case 11:return ht(e.type.render,0)
case 1:return ht(e.type,1)
case 31:return dt("Activity")
default:return""}}function gt(e){try{var t=""
do{t+=mt(e),e=e.return}while(e)
return t}catch(n){return"\nError generating stack: "+n.message+"\n"+n.stack}}function yt(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":case"object":return e
default:return""}}function vt(e){var t=e.type
return(e=e.nodeName)&&"input"===e.toLowerCase()&&("checkbox"===t||"radio"===t)}function bt(e){e._valueTracker||(e._valueTracker=function(e){var t=vt(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t]
if(!e.hasOwnProperty(t)&&void 0!==n&&"function"==typeof n.get&&"function"==typeof n.set){var a=n.get,l=n.set
return Object.defineProperty(e,t,{configurable:1,get:function(){return a.call(this)},set:function(e){r=""+e,l.call(this,e)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(e){r=""+e},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}(e))}function kt(e){if(!e)return 0
var t=e._valueTracker
if(!t)return 1
var n=t.getValue(),r=""
return e&&(r=vt(e)?e.checked?"true":"false":e.value),(e=r)!==n?(t.setValue(e),1):0}function wt(e){if(void 0===(e=e||("undefined"!=typeof document?document:void 0)))return null
try{return e.activeElement||e.body}catch(t){return e.body}}var St=/[\n"\\]/g
function Et(e){return e.replace(St,function(e){return"\\"+e.charCodeAt(0).toString(16)+" "})}function xt(e,t,n,r,a,l,o,i){e.name="",null!=o&&"function"!=typeof o&&"symbol"!=typeof o&&"boolean"!=typeof o?e.type=o:e.removeAttribute("type"),null!=t?"number"===o?(0===t&&""===e.value||e.value!=t)&&(e.value=""+yt(t)):e.value!==""+yt(t)&&(e.value=""+yt(t)):"submit"!==o&&"reset"!==o||e.removeAttribute("value"),null!=t?Pt(e,o,yt(t)):null!=n?Pt(e,o,yt(n)):null!=r&&e.removeAttribute("value"),null==a&&null!=l&&(e.defaultChecked=!!l),null!=a&&(e.checked=a&&"function"!=typeof a&&"symbol"!=typeof a),null!=i&&"function"!=typeof i&&"symbol"!=typeof i&&"boolean"!=typeof i?e.name=""+yt(i):e.removeAttribute("name")}function Ct(e,t,n,r,a,l,o,i){if(null!=l&&"function"!=typeof l&&"symbol"!=typeof l&&"boolean"!=typeof l&&(e.type=l),null!=t||null!=n){if(("submit"===l||"reset"===l)&&null==t)return
n=null!=n?""+yt(n):"",t=null!=t?""+yt(t):n,i||t===e.value||(e.value=t),e.defaultValue=t}r="function"!=typeof(r=null!=r?r:a)&&"symbol"!=typeof r&&!!r,e.checked=i?e.checked:!!r,e.defaultChecked=!!r,null!=o&&"function"!=typeof o&&"symbol"!=typeof o&&"boolean"!=typeof o&&(e.name=o)}function Pt(e,t,n){"number"===t&&wt(e.ownerDocument)===e||e.defaultValue===""+n||(e.defaultValue=""+n)}function _t(e,t,n,r){if(e=e.options,t){t={}
for(var a=0;a<n.length;a++)t["$"+n[a]]=1
for(n=0;n<e.length;n++)a=t.hasOwnProperty("$"+e[n].value),e[n].selected!==a&&(e[n].selected=a),a&&r&&(e[n].defaultSelected=1)}else{for(n=""+yt(n),t=null,a=0;a<e.length;a++){if(e[a].value===n)return e[a].selected=1,void(r&&(e[a].defaultSelected=1))
null!==t||e[a].disabled||(t=e[a])}null!==t&&(t.selected=1)}}function Nt(e,t,n){null==t||((t=""+yt(t))!==e.value&&(e.value=t),null!=n)?e.defaultValue=null!=n?""+yt(n):"":e.defaultValue!==t&&(e.defaultValue=t)}function zt(e,t,n,r){if(null==t){if(null!=r){if(null!=n)throw Error(l(92))
if(j(r)){if(r.length>1)throw Error(l(93))
r=r[0]}n=r}null==n&&(n=""),t=n}n=yt(t),e.defaultValue=n,(r=e.textContent)===n&&""!==r&&null!==r&&(e.value=r)}function Tt(e,t){if(t){var n=e.firstChild
if(n&&n===e.lastChild&&3===n.nodeType)return void(n.nodeValue=t)}e.textContent=t}var Lt=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "))
function Rt(e,t,n){var r=0===t.indexOf("--")
null==n||"boolean"==typeof n||""===n?r?e.setProperty(t,""):"float"===t?e.cssFloat="":e[t]="":r?e.setProperty(t,n):"number"!=typeof n||0===n||Lt.has(t)?"float"===t?e.cssFloat=n:e[t]=(""+n).trim():e[t]=n+"px"}function Ot(e,t,n){if(null!=t&&"object"!=typeof t)throw Error(l(62))
if(e=e.style,null!=n){for(var r in n)!n.hasOwnProperty(r)||null!=t&&t.hasOwnProperty(r)||(0===r.indexOf("--")?e.setProperty(r,""):"float"===r?e.cssFloat="":e[r]="")
for(var a in t)r=t[a],t.hasOwnProperty(a)&&n[a]!==r&&Rt(e,a,r)}else for(var o in t)t.hasOwnProperty(o)&&Rt(e,o,t[o])}function Dt(e){if(-1===e.indexOf("-"))return 0
switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return 0
default:return 1}}var At=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),Ft=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i
function Mt(e){return Ft.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}var $t=null
function It(e){return(e=e.target||e.srcElement||window).correspondingUseElement&&(e=e.correspondingUseElement),3===e.nodeType?e.parentNode:e}var Ut=null,jt=null
function Ht(e){var t=Ge(e)
if(t&&(e=t.stateNode)){var n=e[je]||null
e:switch(e=t.stateNode,t.type){case"input":if(xt(e,n.value,n.defaultValue,n.defaultValue,n.checked,n.defaultChecked,n.type,n.name),t=n.name,"radio"===n.type&&null!=t){for(n=e;n.parentNode;)n=n.parentNode
for(n=n.querySelectorAll('input[name="'+Et(""+t)+'"][type="radio"]'),t=0;t<n.length;t++){var r=n[t]
if(r!==e&&r.form===e.form){var a=r[je]||null
if(!a)throw Error(l(90))
xt(r,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name)}}for(t=0;t<n.length;t++)(r=n[t]).form===e.form&&kt(r)}break e
case"textarea":Nt(e,n.value,n.defaultValue)
break e
case"select":null!=(t=n.value)&&_t(e,!!n.multiple,t,0)}}}var Bt=0
function Wt(e,t,n){if(Bt)return e(t,n)
Bt=1
try{return e(t)}finally{if(Bt=0,(null!==Ut||null!==jt)&&(Ys(),Ut&&(t=Ut,e=jt,jt=Ut=null,Ht(t),e)))for(t=0;t<e.length;t++)Ht(e[t])}}function Vt(e,t){var n=e.stateNode
if(null===n)return null
var r=n[je]||null
if(null===r)return null
n=r[t]
e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(r=!("button"===(e=e.type)||"input"===e||"select"===e||"textarea"===e)),e=!r
break e
default:e=0}if(e)return null
if(n&&"function"!=typeof n)throw Error(l(231,t,typeof n))
return n}var Qt=!("undefined"==typeof window||void 0===window.document||void 0===window.document.createElement),qt=0
if(Qt)try{var Kt={}
Object.defineProperty(Kt,"passive",{get:function(){qt=1}}),window.addEventListener("test",Kt,Kt),window.removeEventListener("test",Kt,Kt)}catch(Hd){qt=0}var Yt=null,Gt=null,Xt=null
function Jt(){if(Xt)return Xt
var e,t,n=Gt,r=n.length,a="value"in Yt?Yt.value:Yt.textContent,l=a.length
for(e=0;r>e&&n[e]===a[e];e++);var o=r-e
for(t=1;o>=t&&n[r-t]===a[l-t];t++);return Xt=a.slice(e,t>1?1-t:void 0)}function Zt(e){var t=e.keyCode
return"charCode"in e?0===(e=e.charCode)&&13===t&&(e=13):e=t,10===e&&(e=13),32>e&&13!==e?0:e}function en(){return 1}function tn(){return 0}function nn(e){function t(t,n,r,a,l){for(var o in this._reactName=t,this._targetInst=r,this.type=n,this.nativeEvent=a,this.target=l,this.currentTarget=null,e)e.hasOwnProperty(o)&&(t=e[o],this[o]=t?t(a):a[o])
return this.isDefaultPrevented=(null!=a.defaultPrevented?a.defaultPrevented:0==a.returnValue)?en:tn,this.isPropagationStopped=tn,this}return h(t.prototype,{preventDefault:function(){this.defaultPrevented=1
var e=this.nativeEvent
e&&(e.preventDefault?e.preventDefault():"unknown"!=typeof e.returnValue&&(e.returnValue=0),this.isDefaultPrevented=en)},stopPropagation:function(){var e=this.nativeEvent
e&&(e.stopPropagation?e.stopPropagation():"unknown"!=typeof e.cancelBubble&&(e.cancelBubble=1),this.isPropagationStopped=en)},persist:function(){},isPersistent:en}),t}var rn,an,ln,on={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},un=nn(on),sn=h({},on,{view:0,detail:0}),cn=nn(sn),fn=h({},sn,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Sn,button:0,buttons:0,relatedTarget:function(e){return void 0===e.relatedTarget?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==ln&&(ln&&"mousemove"===e.type?(rn=e.screenX-ln.screenX,an=e.screenY-ln.screenY):an=rn=0,ln=e),rn)},movementY:function(e){return"movementY"in e?e.movementY:an}}),dn=nn(fn),pn=nn(h({},fn,{dataTransfer:0})),hn=nn(h({},sn,{relatedTarget:0})),mn=nn(h({},on,{animationName:0,elapsedTime:0,pseudoElement:0})),gn=nn(h({},on,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}})),yn=nn(h({},on,{data:0})),vn={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},bn={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},kn={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"}
function wn(e){var t=this.nativeEvent
return t.getModifierState?t.getModifierState(e):(e=kn[e])?!!t[e]:0}function Sn(){return wn}var En=nn(h({},sn,{key:function(e){if(e.key){var t=vn[e.key]||e.key
if("Unidentified"!==t)return t}return"keypress"===e.type?13===(e=Zt(e))?"Enter":String.fromCharCode(e):"keydown"===e.type||"keyup"===e.type?bn[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Sn,charCode:function(e){return"keypress"===e.type?Zt(e):0},keyCode:function(e){return"keydown"===e.type||"keyup"===e.type?e.keyCode:0},which:function(e){return"keypress"===e.type?Zt(e):"keydown"===e.type||"keyup"===e.type?e.keyCode:0}})),xn=nn(h({},fn,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0})),Cn=nn(h({},sn,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Sn})),Pn=nn(h({},on,{propertyName:0,elapsedTime:0,pseudoElement:0})),_n=nn(h({},fn,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0})),Nn=nn(h({},on,{newState:0,oldState:0})),zn=[9,13,27,32],Tn=Qt&&"CompositionEvent"in window,Ln=null
Qt&&"documentMode"in document&&(Ln=document.documentMode)
var Rn=Qt&&"TextEvent"in window&&!Ln,On=Qt&&(!Tn||Ln&&Ln>8&&11>=Ln),Dn=" ",An=0
function Fn(e,t){switch(e){case"keyup":return-1!==zn.indexOf(t.keyCode)
case"keydown":return 229!==t.keyCode
case"keypress":case"mousedown":case"focusout":return 1
default:return 0}}function Mn(e){return"object"==typeof(e=e.detail)&&"data"in e?e.data:null}var $n=0,In={color:1,date:1,datetime:1,"datetime-local":1,email:1,month:1,number:1,password:1,range:1,search:1,tel:1,text:1,time:1,url:1,week:1}
function Un(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase()
return"input"===t?!!In[e.type]:"textarea"===t?1:0}function jn(e,t,n,r){Ut?jt?jt.push(r):jt=[r]:Ut=r,(t=Jc(t,"onChange")).length>0&&(n=new un("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var Hn=null,Bn=null
function Wn(e){Wc(e,0)}function Vn(e){if(kt(Xe(e)))return e}function Qn(e,t){if("change"===e)return t}var qn=0
if(Qt){var Kn
if(Qt){var Yn="oninput"in document
if(!Yn){var Gn=document.createElement("div")
Gn.setAttribute("oninput","return;"),Yn="function"==typeof Gn.oninput}Kn=Yn}else Kn=0
qn=Kn&&(!document.documentMode||document.documentMode>9)}function Xn(){Hn&&(Hn.detachEvent("onpropertychange",Jn),Bn=Hn=null)}function Jn(e){if("value"===e.propertyName&&Vn(Bn)){var t=[]
jn(t,Bn,e,It(e)),Wt(Wn,t)}}function Zn(e,t,n){"focusin"===e?(Xn(),Bn=n,(Hn=t).attachEvent("onpropertychange",Jn)):"focusout"===e&&Xn()}function er(e){if("selectionchange"===e||"keyup"===e||"keydown"===e)return Vn(Bn)}function tr(e,t){if("click"===e)return Vn(t)}function nr(e,t){if("input"===e||"change"===e)return Vn(t)}var rr="function"==typeof Object.is?Object.is:function(e,t){return e===t&&(0!==e||1/e==1/t)||e!=e&&t!=t}
function ar(e,t){if(rr(e,t))return 1
if("object"!=typeof e||null===e||"object"!=typeof t||null===t)return 0
var n=Object.keys(e),r=Object.keys(t)
if(n.length!==r.length)return 0
for(r=0;r<n.length;r++){var a=n[r]
if(!ae.call(t,a)||!rr(e[a],t[a]))return 0}return 1}function lr(e){for(;e&&e.firstChild;)e=e.firstChild
return e}function or(e,t){var n,r=lr(e)
for(e=0;r;){if(3===r.nodeType){if(n=e+r.textContent.length,t>=e&&n>=t)return{node:r,offset:t-e}
e=n}e:{for(;r;){if(r.nextSibling){r=r.nextSibling
break e}r=r.parentNode}r=void 0}r=lr(r)}}function ir(e,t){return e&&t?e===t?1:e&&3===e.nodeType?0:t&&3===t.nodeType?ir(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(16&e.compareDocumentPosition(t)):0:0}function ur(e){for(var t=wt((e=null!=e&&null!=e.ownerDocument&&null!=e.ownerDocument.defaultView?e.ownerDocument.defaultView:window).document);t instanceof e.HTMLIFrameElement;){try{var n="string"==typeof t.contentWindow.location.href}catch(r){n=0}if(!n)break
t=wt((e=t.contentWindow).document)}return t}function sr(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase()
return t&&("input"===t&&("text"===e.type||"search"===e.type||"tel"===e.type||"url"===e.type||"password"===e.type)||"textarea"===t||"true"===e.contentEditable)}var cr=Qt&&"documentMode"in document&&11>=document.documentMode,fr=null,dr=null,pr=null,hr=0
function mr(e,t,n){var r=n.window===n?n.document:9===n.nodeType?n:n.ownerDocument
hr||null==fr||fr!==wt(r)||(r="selectionStart"in(r=fr)&&sr(r)?{start:r.selectionStart,end:r.selectionEnd}:{anchorNode:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection()).anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset},pr&&ar(pr,r)||(pr=r,(r=Jc(dr,"onSelect")).length>0&&(t=new un("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=fr)))}function gr(e,t){var n={}
return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var yr={animationend:gr("Animation","AnimationEnd"),animationiteration:gr("Animation","AnimationIteration"),animationstart:gr("Animation","AnimationStart"),transitionrun:gr("Transition","TransitionRun"),transitionstart:gr("Transition","TransitionStart"),transitioncancel:gr("Transition","TransitionCancel"),transitionend:gr("Transition","TransitionEnd")},vr={},br={}
function kr(e){if(vr[e])return vr[e]
if(!yr[e])return e
var t,n=yr[e]
for(t in n)if(n.hasOwnProperty(t)&&t in br)return vr[e]=n[t]
return e}Qt&&(br=document.createElement("div").style,"AnimationEvent"in window||(delete yr.animationend.animation,delete yr.animationiteration.animation,delete yr.animationstart.animation),"TransitionEvent"in window||delete yr.transitionend.transition)
var wr=kr("animationend"),Sr=kr("animationiteration"),Er=kr("animationstart"),xr=kr("transitionrun"),Cr=kr("transitionstart"),Pr=kr("transitioncancel"),_r=kr("transitionend"),Nr=new Map,zr="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ")
function Tr(e,t){Nr.set(e,t),nt(t,[e])}zr.push("scrollEnd")
var Lr=new WeakMap
function Rr(e,t){if("object"==typeof e&&null!==e){var n=Lr.get(e)
return void 0!==n?n:(t={value:e,source:t,stack:gt(t)},Lr.set(e,t),t)}return{value:e,source:t,stack:gt(t)}}var Or=[],Dr=0,Ar=0
function Fr(){for(var e=Dr,t=Ar=Dr=0;e>t;){var n=Or[t]
Or[t++]=null
var r=Or[t]
Or[t++]=null
var a=Or[t]
Or[t++]=null
var l=Or[t]
if(Or[t++]=null,null!==r&&null!==a){var o=r.pending
null===o?a.next=a:(a.next=o.next,o.next=a),r.pending=a}0!==l&&Ur(n,a,l)}}function Mr(e,t,n,r){Or[Dr++]=e,Or[Dr++]=t,Or[Dr++]=n,Or[Dr++]=r,Ar|=r,e.lanes|=r,null!==(e=e.alternate)&&(e.lanes|=r)}function $r(e,t,n,r){return Mr(e,t,n,r),jr(e)}function Ir(e,t){return Mr(e,null,null,t),jr(e)}function Ur(e,t,n){e.lanes|=n
var r=e.alternate
null!==r&&(r.lanes|=n)
for(var a=0,l=e.return;null!==l;)l.childLanes|=n,null!==(r=l.alternate)&&(r.childLanes|=n),22===l.tag&&(null===(e=l.stateNode)||1&e._visibility||(a=1)),e=l,l=l.return
return 3===e.tag?(l=e.stateNode,a&&null!==t&&(a=31-we(n),null===(r=(e=l.hiddenUpdates)[a])?e[a]=[t]:r.push(t),t.lane=536870912|n),l):null}function jr(e){if(Us>50)throw Us=0,js=null,Error(l(185))
for(var t=e.return;null!==t;)t=(e=t).return
return 3===e.tag?e.stateNode:null}var Hr={}
function Br(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Wr(e,t,n,r){return new Br(e,t,n,r)}function Vr(e){return!(!(e=e.prototype)||!e.isReactComponent)}function Qr(e,t){var n=e.alternate
return null===n?((n=Wr(e.tag,t,e.key,e.mode)).elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=65011712&e.flags,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=null===t?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n.refCleanup=e.refCleanup,n}function qr(e,t){e.flags&=65011714
var n=e.alternate
return null===n?(e.childLanes=0,e.lanes=t,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=n.childLanes,e.lanes=n.lanes,e.child=n.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=n.memoizedProps,e.memoizedState=n.memoizedState,e.updateQueue=n.updateQueue,e.type=n.type,t=n.dependencies,e.dependencies=null===t?null:{lanes:t.lanes,firstContext:t.firstContext}),e}function Kr(e,t,n,r,a,o){var i=0
if(r=e,"function"==typeof e)Vr(e)&&(i=1)
else if("string"==typeof e)i=function(e,t,n){if(1===n||null!=t.itemProp)return 0
switch(e){case"meta":case"title":return 1
case"style":if("string"!=typeof t.precedence||"string"!=typeof t.href||""===t.href)break
return 1
case"link":if("string"!=typeof t.rel||"string"!=typeof t.href||""===t.href||t.onLoad||t.onError)break
return"stylesheet"===t.rel?(e=t.disabled,"string"==typeof t.precedence&&null==e):1
case"script":if(t.async&&"function"!=typeof t.async&&"symbol"!=typeof t.async&&!t.onLoad&&!t.onError&&t.src&&"string"==typeof t.src)return 1}return 0}(e,n,G.current)?26:"html"===e||"head"===e||"body"===e?27:5
else e:switch(e){case A:return(e=Wr(31,n,t,a)).elementType=A,e.lanes=o,e
case x:return Yr(n.children,a,o,t)
case C:i=8,a|=24
break
case P:return(e=Wr(12,n,t,2|a)).elementType=P,e.lanes=o,e
case L:return(e=Wr(13,n,t,a)).elementType=L,e.lanes=o,e
case R:return(e=Wr(19,n,t,a)).elementType=R,e.lanes=o,e
default:if("object"==typeof e&&null!==e)switch(e.$$typeof){case _:case z:i=10
break e
case N:i=9
break e
case T:i=11
break e
case O:i=14
break e
case D:i=16,r=null
break e}i=29,n=Error(l(130,null===e?"null":typeof e,"")),r=null}return(t=Wr(i,n,t,a)).elementType=e,t.type=r,t.lanes=o,t}function Yr(e,t,n,r){return(e=Wr(7,e,r,t)).lanes=n,e}function Gr(e,t,n){return(e=Wr(6,e,null,t)).lanes=n,e}function Xr(e,t,n){return(t=Wr(4,null!==e.children?e.children:[],e.key,t)).lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}var Jr=[],Zr=0,ea=null,ta=0,na=[],ra=0,aa=null,la=1,oa=""
function ia(e,t){Jr[Zr++]=ta,Jr[Zr++]=ea,ea=e,ta=t}function ua(e,t,n){na[ra++]=la,na[ra++]=oa,na[ra++]=aa,aa=e
var r=la
e=oa
var a=32-we(r)-1
r&=~(1<<a),n+=1
var l=32-we(t)+a
if(l>30){var o=a-a%5
l=(r&(1<<o)-1).toString(32),r>>=o,a-=o,la=1<<32-we(t)+a|n<<a|r,oa=l+e}else la=1<<l|n<<a|r,oa=e}function sa(e){null!==e.return&&(ia(e,1),ua(e,1,0))}function ca(e){for(;e===ea;)ea=Jr[--Zr],Jr[Zr]=null,ta=Jr[--Zr],Jr[Zr]=null
for(;e===aa;)aa=na[--ra],na[ra]=null,oa=na[--ra],na[ra]=null,la=na[--ra],na[ra]=null}var fa=null,da=null,pa=0,ha=null,ma=0,ga=Error(l(519))
function ya(e){throw Ea(Rr(Error(l(418,"")),e)),ga}function va(e){var t=e.stateNode,n=e.type,r=e.memoizedProps
switch(t[Ue]=e,t[je]=r,n){case"dialog":Vc("cancel",t),Vc("close",t)
break
case"iframe":case"object":case"embed":Vc("load",t)
break
case"video":case"audio":for(n=0;n<Hc.length;n++)Vc(Hc[n],t)
break
case"source":Vc("error",t)
break
case"img":case"image":case"link":Vc("error",t),Vc("load",t)
break
case"details":Vc("toggle",t)
break
case"input":Vc("invalid",t),Ct(t,r.value,r.defaultValue,r.checked,r.defaultChecked,r.type,r.name,1),bt(t)
break
case"select":Vc("invalid",t)
break
case"textarea":Vc("invalid",t),zt(t,r.value,r.defaultValue,r.children),bt(t)}"string"!=typeof(n=r.children)&&"number"!=typeof n&&"bigint"!=typeof n||t.textContent===""+n||1==r.suppressHydrationWarning||af(t.textContent,n)?(null!=r.popover&&(Vc("beforetoggle",t),Vc("toggle",t)),null!=r.onScroll&&Vc("scroll",t),null!=r.onScrollEnd&&Vc("scrollend",t),null!=r.onClick&&(t.onclick=lf),t=1):t=0,t||ya(e)}function ba(e){for(fa=e.return;fa;)switch(fa.tag){case 5:case 13:return void(ma=0)
case 27:case 3:return void(ma=1)
default:fa=fa.return}}function ka(e){if(e!==fa)return 0
if(!pa)return ba(e),pa=1,0
var t,n=e.tag
if((t=3!==n&&27!==n)&&((t=5===n)&&(t=!("form"!==(t=e.type)&&"button"!==t)||mf(e.type,e.memoizedProps)),t=!t),t&&da&&ya(e),ba(e),13===n){if(!(e=null!==(e=e.memoizedState)?e.dehydrated:null))throw Error(l(317))
e:{for(e=e.nextSibling,n=0;e;){if(8===e.nodeType)if("/$"===(t=e.data)){if(0===n){da=Pf(e.nextSibling)
break e}n--}else"$"!==t&&"$!"!==t&&"$?"!==t||n++
e=e.nextSibling}da=null}}else 27===n?(n=da,Sf(e.type)?(e=_f,_f=null,da=e):da=n):da=fa?Pf(e.stateNode.nextSibling):null
return 1}function wa(){da=fa=null,pa=0}function Sa(){var e=ha
return null!==e&&(null===_s?_s=e:_s.push.apply(_s,e),ha=null),e}function Ea(e){null===ha?ha=[e]:ha.push(e)}var xa=q(null),Ca=null,Pa=null
function _a(e,t,n){Y(xa,t._currentValue),t._currentValue=n}function Na(e){e._currentValue=xa.current,K(xa)}function za(e,t,n){for(;null!==e;){var r=e.alternate
if((e.childLanes&t)!==t?(e.childLanes|=t,null!==r&&(r.childLanes|=t)):null!==r&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break
e=e.return}}function Ta(e,t,n,r){var a=e.child
for(null!==a&&(a.return=e);null!==a;){var o=a.dependencies
if(null!==o){var i=a.child
o=o.firstContext
e:for(;null!==o;){var u=o
o=a
for(var s=0;s<t.length;s++)if(u.context===t[s]){o.lanes|=n,null!==(u=o.alternate)&&(u.lanes|=n),za(o.return,n,e),r||(i=null)
break e}o=u.next}}else if(18===a.tag){if(null===(i=a.return))throw Error(l(341))
i.lanes|=n,null!==(o=i.alternate)&&(o.lanes|=n),za(i,n,e),i=null}else i=a.child
if(null!==i)i.return=a
else for(i=a;null!==i;){if(i===e){i=null
break}if(null!==(a=i.sibling)){a.return=i.return,i=a
break}i=i.return}a=i}}function La(e,t,n,r){e=null
for(var a=t,o=0;null!==a;){if(!o)if(524288&a.flags)o=1
else if(262144&a.flags)break
if(10===a.tag){var i=a.alternate
if(null===i)throw Error(l(387))
if(null!==(i=i.memoizedProps)){var u=a.type
rr(a.pendingProps.value,i.value)||(null!==e?e.push(u):e=[u])}}else if(a===Z.current){if(null===(i=a.alternate))throw Error(l(387))
i.memoizedState.memoizedState!==a.memoizedState.memoizedState&&(null!==e?e.push(rd):e=[rd])}a=a.return}null!==e&&Ta(t,e,n,r),t.flags|=262144}function Ra(e){for(e=e.firstContext;null!==e;){if(!rr(e.context._currentValue,e.memoizedValue))return 1
e=e.next}return 0}function Oa(e){Ca=e,Pa=null,null!==(e=e.dependencies)&&(e.firstContext=null)}function Da(e){return Fa(Ca,e)}function Aa(e,t){return null===Ca&&Oa(e),Fa(e,t)}function Fa(e,t){var n=t._currentValue
if(t={context:t,memoizedValue:n,next:null},null===Pa){if(null===e)throw Error(l(308))
Pa=t,e.dependencies={lanes:0,firstContext:t},e.flags|=524288}else Pa=Pa.next=t
return n}var Ma="undefined"!=typeof AbortController?AbortController:function(){var e=[],t=this.signal={aborted:0,addEventListener:function(t,n){e.push(n)}}
this.abort=function(){t.aborted=1,e.forEach(function(e){return e()})}},$a=e.unstable_scheduleCallback,Ia=e.unstable_NormalPriority,Ua={$$typeof:z,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0}
function ja(){return{controller:new Ma,data:new Map,refCount:0}}function Ha(e){e.refCount--,0===e.refCount&&$a(Ia,function(){e.controller.abort()})}var Ba=null,Wa=0,Va=0,Qa=null
function qa(){if(0===--Wa&&null!==Ba){null!==Qa&&(Qa.status="fulfilled")
var e=Ba
Ba=null,Va=0,Qa=null
for(var t=0;t<e.length;t++)(0,e[t])()}}var Ka=H.S
H.S=function(e,t){"object"==typeof t&&null!==t&&"function"==typeof t.then&&function(e,t){if(null===Ba){var n=Ba=[]
Wa=0,Va=Mc(),Qa={status:"pending",value:void 0,then:function(e){n.push(e)}}}Wa++,t.then(qa,qa)}(0,t),null!==Ka&&Ka(e,t)}
var Ya=q(null)
function Ga(){var e=Ya.current
return null!==e?e:fs.pooledCache}function Xa(e,t){Y(Ya,null===t?Ya.current:t.pool)}function Ja(){var e=Ga()
return null===e?null:{parent:Ua._currentValue,pool:e}}var Za=Error(l(460)),el=Error(l(474)),tl=Error(l(542)),nl={then:function(){}}
function rl(e){return"fulfilled"===(e=e.status)||"rejected"===e}function al(){}function ll(e,t,n){switch(void 0===(n=e[n])?e.push(t):n!==t&&(t.then(al,al),t=n),t.status){case"fulfilled":return t.value
case"rejected":throw ul(e=t.reason),e
default:if("string"==typeof t.status)t.then(al,al)
else{if(null!==(e=fs)&&e.shellSuspendCounter>100)throw Error(l(482));(e=t).status="pending",e.then(function(e){if("pending"===t.status){var n=t
n.status="fulfilled",n.value=e}},function(e){if("pending"===t.status){var n=t
n.status="rejected",n.reason=e}})}switch(t.status){case"fulfilled":return t.value
case"rejected":throw ul(e=t.reason),e}throw ol=t,Za}}var ol=null
function il(){if(null===ol)throw Error(l(459))
var e=ol
return ol=null,e}function ul(e){if(e===Za||e===tl)throw Error(l(483))}var sl=0
function cl(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function fl(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function dl(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function pl(e,t,n){var r=e.updateQueue
if(null===r)return null
if(r=r.shared,2&cs){var a=r.pending
return null===a?t.next=t:(t.next=a.next,a.next=t),r.pending=t,t=jr(e),Ur(e,null,n),t}return Mr(e,r,t,n),jr(e)}function hl(e,t,n){if(null!==(t=t.updateQueue)&&(t=t.shared,4194048&n)){var r=t.lanes
n|=r&=e.pendingLanes,t.lanes=n,Ae(e,n)}}function ml(e,t){var n=e.updateQueue,r=e.alternate
if(null!==r&&n===(r=r.updateQueue)){var a=null,l=null
if(null!==(n=n.firstBaseUpdate)){do{var o={lane:n.lane,tag:n.tag,payload:n.payload,callback:null,next:null}
null===l?a=l=o:l=l.next=o,n=n.next}while(null!==n)
null===l?a=l=t:l=l.next=t}else a=l=t
return n={baseState:r.baseState,firstBaseUpdate:a,lastBaseUpdate:l,shared:r.shared,callbacks:r.callbacks},void(e.updateQueue=n)}null===(e=n.lastBaseUpdate)?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}var gl=0
function yl(){if(gl&&null!==Qa)throw Qa}function vl(e,t,n,r){gl=0
var a=e.updateQueue
sl=0
var l=a.firstBaseUpdate,o=a.lastBaseUpdate,i=a.shared.pending
if(null!==i){a.shared.pending=null
var u=i,s=u.next
u.next=null,null===o?l=s:o.next=s,o=u
var c=e.alternate
null!==c&&(i=(c=c.updateQueue).lastBaseUpdate)!==o&&(null===i?c.firstBaseUpdate=s:i.next=s,c.lastBaseUpdate=u)}if(null!==l){var f=a.baseState
for(o=0,c=s=u=null,i=l;;){var d=-536870913&i.lane,p=d!==i.lane
if(p?(ps&d)===d:(r&d)===d){0!==d&&d===Va&&(gl=1),null!==c&&(c=c.next={lane:0,tag:i.tag,payload:i.payload,callback:null,next:null})
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
case 2:sl=1}}null!==(d=i.callback)&&(e.flags|=64,p&&(e.flags|=8192),null===(p=a.callbacks)?a.callbacks=[d]:p.push(d))}else p={lane:d,tag:i.tag,payload:i.payload,callback:i.callback,next:null},null===c?(s=c=p,u=f):c=c.next=p,o|=d
if(null===(i=i.next)){if(null===(i=a.shared.pending))break
i=(p=i).next,p.next=null,a.lastBaseUpdate=p,a.shared.pending=null}}null===c&&(u=f),a.baseState=u,a.firstBaseUpdate=s,a.lastBaseUpdate=c,null===l&&(a.shared.lanes=0),ws|=o,e.lanes=o,e.memoizedState=f}}function bl(e,t){if("function"!=typeof e)throw Error(l(191,e))
e.call(t)}function kl(e,t){var n=e.callbacks
if(null!==n)for(e.callbacks=null,e=0;e<n.length;e++)bl(n[e],t)}var wl=q(null),Sl=q(0)
function El(e,t){Y(Sl,e=bs),Y(wl,t),bs=e|t.baseLanes}function xl(){Y(Sl,bs),Y(wl,wl.current)}function Cl(){bs=Sl.current,K(wl),K(Sl)}var Pl=0,_l=null,Nl=null,zl=null,Tl=0,Ll=0,Rl=0,Ol=0,Dl=0,Al=null,Fl=0
function Ml(){throw Error(l(321))}function $l(e,t){if(null===t)return 0
for(var n=0;n<t.length&&n<e.length;n++)if(!rr(e[n],t[n]))return 0
return 1}function Il(e,t,n,r,a,l){return Pl=l,_l=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,H.H=null===e||null===e.memoizedState?ei:ti,Rl=0,l=n(r,a),Rl=0,Ll&&(l=jl(t,n,r,a)),Ul(e),l}function Ul(e){H.H=Zo
var t=null!==Nl&&null!==Nl.next
if(Pl=0,zl=Nl=_l=null,Tl=0,Dl=0,Al=null,t)throw Error(l(300))
null===e||Ai||null!==(e=e.dependencies)&&Ra(e)&&(Ai=1)}function jl(e,t,n,r){_l=e
var a=0
do{if(Ll&&(Al=null),Dl=0,Ll=0,a>=25)throw Error(l(301))
if(a+=1,zl=Nl=null,null!=e.updateQueue){var o=e.updateQueue
o.lastEffect=null,o.events=null,o.stores=null,null!=o.memoCache&&(o.memoCache.index=0)}H.H=ni,o=t(n,r)}while(Ll)
return o}function Hl(){var e=H.H,t=e.useState()[0]
return t="function"==typeof t.then?Kl(t):t,e=e.useState()[0],(null!==Nl?Nl.memoizedState:null)!==e&&(_l.flags|=1024),t}function Bl(){var e=0!==Ol
return Ol=0,e}function Wl(e,t,n){t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~n}function Vl(e){if(Tl){for(e=e.memoizedState;null!==e;){var t=e.queue
null!==t&&(t.pending=null),e=e.next}Tl=0}Pl=0,zl=Nl=_l=null,Ll=0,Dl=Ol=0,Al=null}function Ql(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null}
return null===zl?_l.memoizedState=zl=e:zl=zl.next=e,zl}function ql(){if(null===Nl){var e=_l.alternate
e=null!==e?e.memoizedState:null}else e=Nl.next
var t=null===zl?_l.memoizedState:zl.next
if(null!==t)zl=t,Nl=e
else{if(null===e){if(null===_l.alternate)throw Error(l(467))
throw Error(l(310))}e={memoizedState:(Nl=e).memoizedState,baseState:Nl.baseState,baseQueue:Nl.baseQueue,queue:Nl.queue,next:null},null===zl?_l.memoizedState=zl=e:zl=zl.next=e}return zl}function Kl(e){var t=Dl
return Dl+=1,null===Al&&(Al=[]),e=ll(Al,e,t),t=_l,null===(null===zl?t.memoizedState:zl.next)&&(t=t.alternate,H.H=null===t||null===t.memoizedState?ei:ti),e}function Yl(e){if(null!==e&&"object"==typeof e){if("function"==typeof e.then)return Kl(e)
if(e.$$typeof===z)return Da(e)}throw Error(l(438,e+""))}function Gl(e){var t=null,n=_l.updateQueue
if(null!==n&&(t=n.memoCache),null==t){var r=_l.alternate
null!==r&&null!==(r=r.updateQueue)&&null!=(r=r.memoCache)&&(t={data:r.data.map(function(e){return e.slice()}),index:0})}if(null==t&&(t={data:[],index:0}),null===n&&(n={lastEffect:null,events:null,stores:null,memoCache:null},_l.updateQueue=n),n.memoCache=t,void 0===(n=t.data[t.index]))for(n=t.data[t.index]=Array(e),r=0;e>r;r++)n[r]=F
return t.index++,n}function Xl(e,t){return"function"==typeof t?t(e):t}function Jl(e){return Zl(ql(),Nl,e)}function Zl(e,t,n){var r=e.queue
if(null===r)throw Error(l(311))
r.lastRenderedReducer=n
var a=e.baseQueue,o=r.pending
if(null!==o){if(null!==a){var i=a.next
a.next=o.next,o.next=i}t.baseQueue=a=o,r.pending=null}if(o=e.baseState,null===a)e.memoizedState=o
else{var u=i=null,s=null,c=t=a.next,f=0
do{var d=-536870913&c.lane
if(d!==c.lane?(ps&d)===d:(Pl&d)===d){var p=c.revertLane
if(0===p)null!==s&&(s=s.next={lane:0,revertLane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),d===Va&&(f=1)
else{if((Pl&p)===p){c=c.next,p===Va&&(f=1)
continue}d={lane:0,revertLane:c.revertLane,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null},null===s?(u=s=d,i=o):s=s.next=d,_l.lanes|=p,ws|=p}d=c.action,Rl&&n(o,d),o=c.hasEagerState?c.eagerState:n(o,d)}else p={lane:d,revertLane:c.revertLane,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null},null===s?(u=s=p,i=o):s=s.next=p,_l.lanes|=d,ws|=d
c=c.next}while(null!==c&&c!==t)
if(null===s?i=o:s.next=u,!rr(o,e.memoizedState)&&(Ai=1,f&&null!==(n=Qa)))throw n
e.memoizedState=o,e.baseState=i,e.baseQueue=s,r.lastRenderedState=o}return null===a&&(r.lanes=0),[e.memoizedState,r.dispatch]}function eo(e){var t=ql(),n=t.queue
if(null===n)throw Error(l(311))
n.lastRenderedReducer=e
var r=n.dispatch,a=n.pending,o=t.memoizedState
if(null!==a){n.pending=null
var i=a=a.next
do{o=e(o,i.action),i=i.next}while(i!==a)
rr(o,t.memoizedState)||(Ai=1),t.memoizedState=o,null===t.baseQueue&&(t.baseState=o),n.lastRenderedState=o}return[o,r]}function to(e,t,n){var r=_l,a=ql(),o=pa
if(o){if(void 0===n)throw Error(l(407))
n=n()}else n=t()
var i=!rr((Nl||a).memoizedState,n)
if(i&&(a.memoizedState=n,Ai=1),a=a.queue,Co(2048,8,ao.bind(null,r,a,e),[e]),a.getSnapshot!==t||i||null!==zl&&1&zl.memoizedState.tag){if(r.flags|=2048,So(9,{destroy:void 0,resource:void 0},ro.bind(null,r,a,n,t),null),null===fs)throw Error(l(349))
o||124&Pl||no(r,t,n)}return n}function no(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},null===(t=_l.updateQueue)?(t={lastEffect:null,events:null,stores:null,memoCache:null},_l.updateQueue=t,t.stores=[e]):null===(n=t.stores)?t.stores=[e]:n.push(e)}function ro(e,t,n,r){t.value=n,t.getSnapshot=r,lo(t)&&oo(e)}function ao(e,t,n){return n(function(){lo(t)&&oo(e)})}function lo(e){var t=e.getSnapshot
e=e.value
try{var n=t()
return!rr(e,n)}catch(r){return 1}}function oo(e){var t=Ir(e,2)
null!==t&&Ws(t,0,2)}function io(e){var t=Ql()
if("function"==typeof e){var n=e
if(e=n(),Rl){ke(1)
try{n()}finally{ke(0)}}}return t.memoizedState=t.baseState=e,t.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Xl,lastRenderedState:e},t}function uo(e,t,n,r){return e.baseState=n,Zl(e,Nl,"function"==typeof r?r:Xl)}function so(e,t,n,r,a){if(Go(e))throw Error(l(485))
if(null!==(e=t.action)){var o={payload:a,action:e,next:null,isTransition:1,status:"pending",value:null,reason:null,listeners:[],then:function(e){o.listeners.push(e)}}
null!==H.T?n(1):o.isTransition=0,r(o),null===(n=t.pending)?(o.next=t.pending=o,co(t,o)):(o.next=n.next,t.pending=n.next=o)}}function co(e,t){var n=t.action,r=t.payload,a=e.state
if(t.isTransition){var l=H.T,o={}
H.T=o
try{var i=n(a,r),u=H.S
null!==u&&u(o,i),fo(e,t,i)}catch(s){ho(e,t,s)}finally{H.T=l}}else try{fo(e,t,l=n(a,r))}catch(c){ho(e,t,c)}}function fo(e,t,n){null!==n&&"object"==typeof n&&"function"==typeof n.then?n.then(function(n){po(e,t,n)},function(n){return ho(e,t,n)}):po(e,t,n)}function po(e,t,n){t.status="fulfilled",t.value=n,mo(t),e.state=n,null!==(t=e.pending)&&((n=t.next)===t?e.pending=null:(n=n.next,t.next=n,co(e,n)))}function ho(e,t,n){var r=e.pending
if(e.pending=null,null!==r){r=r.next
do{t.status="rejected",t.reason=n,mo(t),t=t.next}while(t!==r)}e.action=null}function mo(e){e=e.listeners
for(var t=0;t<e.length;t++)(0,e[t])()}function go(e,t){return t}function yo(e,t){if(pa){var n=fs.formState
if(null!==n){e:{var r=_l
if(pa){if(da){t:{for(var a=da,l=ma;8!==a.nodeType;){if(!l){a=null
break t}if(null===(a=Pf(a.nextSibling))){a=null
break t}}a="F!"===(l=a.data)||"F"===l?a:null}if(a){da=Pf(a.nextSibling),r="F!"===a.data
break e}}ya(r)}r=0}r&&(t=n[0])}}return(n=Ql()).memoizedState=n.baseState=t,r={pending:null,lanes:0,dispatch:null,lastRenderedReducer:go,lastRenderedState:t},n.queue=r,n=qo.bind(null,_l,r),r.dispatch=n,r=io(0),l=Yo.bind(null,_l,0,r.queue),a={state:t,dispatch:null,action:e,pending:null},(r=Ql()).queue=a,n=so.bind(null,_l,a,l,n),a.dispatch=n,r.memoizedState=e,[t,n,0]}function vo(e){return bo(ql(),Nl,e)}function bo(e,t,n){if(t=Zl(e,t,go)[0],e=Jl(Xl)[0],"object"==typeof t&&null!==t&&"function"==typeof t.then)try{var r=Kl(t)}catch(o){if(o===Za)throw tl
throw o}else r=t
var a=(t=ql()).queue,l=a.dispatch
return n!==t.memoizedState&&(_l.flags|=2048,So(9,{destroy:void 0,resource:void 0},ko.bind(null,a,n),null)),[r,l,e]}function ko(e,t){e.action=t}function wo(e){var t=ql(),n=Nl
if(null!==n)return bo(t,n,e)
ql(),t=t.memoizedState
var r=(n=ql()).queue.dispatch
return n.memoizedState=e,[t,r,0]}function So(e,t,n,r){return e={tag:e,create:n,deps:r,inst:t,next:null},null===(t=_l.updateQueue)&&(t={lastEffect:null,events:null,stores:null,memoCache:null},_l.updateQueue=t),null===(n=t.lastEffect)?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e),e}function Eo(){return ql().memoizedState}function xo(e,t,n,r){var a=Ql()
r=void 0===r?null:r,_l.flags|=e,a.memoizedState=So(1|t,{destroy:void 0,resource:void 0},n,r)}function Co(e,t,n,r){var a=ql()
r=void 0===r?null:r
var l=a.memoizedState.inst
null!==Nl&&null!==r&&$l(r,Nl.memoizedState.deps)?a.memoizedState=So(t,l,n,r):(_l.flags|=e,a.memoizedState=So(1|t,l,n,r))}function Po(e,t){xo(8390656,8,e,t)}function _o(e,t){Co(2048,8,e,t)}function No(e,t){return Co(4,2,e,t)}function zo(e,t){return Co(4,4,e,t)}function To(e,t){if("function"==typeof t){e=e()
var n=t(e)
return function(){"function"==typeof n?n():t(null)}}if(null!=t)return e=e(),t.current=e,function(){t.current=null}}function Lo(e,t,n){n=null!=n?n.concat([e]):null,Co(4,4,To.bind(null,t,e),n)}function Ro(){}function Oo(e,t){var n=ql()
t=void 0===t?null:t
var r=n.memoizedState
return null!==t&&$l(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function Do(e,t){var n=ql()
t=void 0===t?null:t
var r=n.memoizedState
if(null!==t&&$l(t,r[1]))return r[0]
if(r=e(),Rl){ke(1)
try{e()}finally{ke(0)}}return n.memoizedState=[r,t],r}function Ao(e,t,n){return void 0===n||1073741824&Pl?e.memoizedState=t:(e.memoizedState=n,e=Bs(),_l.lanes|=e,ws|=e,n)}function Fo(e,t,n,r){return rr(n,t)?n:null!==wl.current?(e=Ao(e,n,r),rr(e,t)||(Ai=1),e):42&Pl?(e=Bs(),_l.lanes|=e,ws|=e,t):(Ai=1,e.memoizedState=n)}function Mo(e,t,n,r,a){var l=B.p
B.p=0!==l&&8>l?l:8
var o,i,u,s=H.T,c={}
H.T=c,Yo(e,0,t,n)
try{var f=a(),d=H.S
null!==d&&d(c,f),null!==f&&"object"==typeof f&&"function"==typeof f.then?Ko(e,t,(o=r,i=[],u={status:"pending",value:null,reason:null,then:function(e){i.push(e)}},f.then(function(){u.status="fulfilled",u.value=o
for(var e=0;e<i.length;e++)(0,i[e])(o)},function(e){for(u.status="rejected",u.reason=e,e=0;e<i.length;e++)(0,i[e])(void 0)}),u),Hs()):Ko(e,t,r,Hs())}catch(p){Ko(e,t,{then:function(){},status:"rejected",reason:p},Hs())}finally{B.p=l,H.T=s}}function $o(){}function Io(e,t,n,r){if(5!==e.tag)throw Error(l(476))
var a=Uo(e).queue
Mo(e,a,t,W,null===n?$o:function(){return jo(e),n(r)})}function Uo(e){var t=e.memoizedState
if(null!==t)return t
var n={}
return(t={memoizedState:W,baseState:W,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Xl,lastRenderedState:W},next:null}).next={memoizedState:n,baseState:n,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Xl,lastRenderedState:n},next:null},e.memoizedState=t,null!==(e=e.alternate)&&(e.memoizedState=t),t}function jo(e){Ko(e,Uo(e).next.queue,{},Hs())}function Ho(){return Da(rd)}function Bo(){return ql().memoizedState}function Wo(){return ql().memoizedState}function Vo(e){for(var t=e.return;null!==t;){switch(t.tag){case 24:case 3:var n=Hs(),r=pl(t,e=dl(n),n)
return null!==r&&(Ws(r,0,n),hl(r,t,n)),t={cache:ja()},void(e.payload=t)}t=t.return}}function Qo(e,t,n){var r=Hs()
n={lane:r,revertLane:0,action:n,hasEagerState:0,eagerState:null,next:null},Go(e)?Xo(t,n):null!==(n=$r(e,t,n,r))&&(Ws(n,0,r),Jo(n,t,r))}function qo(e,t,n){Ko(e,t,n,Hs())}function Ko(e,t,n,r){var a={lane:r,revertLane:0,action:n,hasEagerState:0,eagerState:null,next:null}
if(Go(e))Xo(t,a)
else{var l=e.alternate
if(0===e.lanes&&(null===l||0===l.lanes)&&null!==(l=t.lastRenderedReducer))try{var o=t.lastRenderedState,i=l(o,n)
if(a.hasEagerState=1,a.eagerState=i,rr(i,o))return Mr(e,t,a,0),null===fs&&Fr(),0}catch(u){}if(null!==(n=$r(e,t,a,r)))return Ws(n,0,r),Jo(n,t,r),1}return 0}function Yo(e,t,n,r){if(r={lane:2,revertLane:Mc(),action:r,hasEagerState:0,eagerState:null,next:null},Go(e)){if(t)throw Error(l(479))}else null!==(t=$r(e,n,r,2))&&Ws(t,0,2)}function Go(e){var t=e.alternate
return e===_l||null!==t&&t===_l}function Xo(e,t){Ll=Tl=1
var n=e.pending
null===n?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function Jo(e,t,n){if(4194048&n){var r=t.lanes
n|=r&=e.pendingLanes,t.lanes=n,Ae(e,n)}}var Zo={readContext:Da,use:Yl,useCallback:Ml,useContext:Ml,useEffect:Ml,useImperativeHandle:Ml,useLayoutEffect:Ml,useInsertionEffect:Ml,useMemo:Ml,useReducer:Ml,useRef:Ml,useState:Ml,useDebugValue:Ml,useDeferredValue:Ml,useTransition:Ml,useSyncExternalStore:Ml,useId:Ml,useHostTransitionStatus:Ml,useFormState:Ml,useActionState:Ml,useOptimistic:Ml,useMemoCache:Ml,useCacheRefresh:Ml},ei={readContext:Da,use:Yl,useCallback:function(e,t){return Ql().memoizedState=[e,void 0===t?null:t],e},useContext:Da,useEffect:Po,useImperativeHandle:function(e,t,n){n=null!=n?n.concat([e]):null,xo(4194308,4,To.bind(null,t,e),n)},useLayoutEffect:function(e,t){return xo(4194308,4,e,t)},useInsertionEffect:function(e,t){xo(4,2,e,t)},useMemo:function(e,t){var n=Ql()
t=void 0===t?null:t
var r=e()
if(Rl){ke(1)
try{e()}finally{ke(0)}}return n.memoizedState=[r,t],r},useReducer:function(e,t,n){var r=Ql()
if(void 0!==n){var a=n(t)
if(Rl){ke(1)
try{n(t)}finally{ke(0)}}}else a=t
return r.memoizedState=r.baseState=a,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:a},r.queue=e,e=e.dispatch=Qo.bind(null,_l,e),[r.memoizedState,e]},useRef:function(e){return e={current:e},Ql().memoizedState=e},useState:function(e){var t=(e=io(e)).queue,n=qo.bind(null,_l,t)
return t.dispatch=n,[e.memoizedState,n]},useDebugValue:Ro,useDeferredValue:function(e,t){return Ao(Ql(),e,t)},useTransition:function(){var e=io(0)
return e=Mo.bind(null,_l,e.queue,1,0),Ql().memoizedState=e,[0,e]},useSyncExternalStore:function(e,t,n){var r=_l,a=Ql()
if(pa){if(void 0===n)throw Error(l(407))
n=n()}else{if(n=t(),null===fs)throw Error(l(349))
124&ps||no(r,t,n)}a.memoizedState=n
var o={value:n,getSnapshot:t}
return a.queue=o,Po(ao.bind(null,r,o,e),[e]),r.flags|=2048,So(9,{destroy:void 0,resource:void 0},ro.bind(null,r,o,n,t),null),n},useId:function(){var e=Ql(),t=fs.identifierPrefix
if(pa){var n=oa
t="«"+t+"R"+(n=(la&~(1<<32-we(la)-1)).toString(32)+n),(n=Ol++)>0&&(t+="H"+n.toString(32)),t+="»"}else t="«"+t+"r"+(n=Fl++).toString(32)+"»"
return e.memoizedState=t},useHostTransitionStatus:Ho,useFormState:yo,useActionState:yo,useOptimistic:function(e){var t=Ql()
t.memoizedState=t.baseState=e
var n={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null}
return t.queue=n,t=Yo.bind(null,_l,1,n),n.dispatch=t,[e,t]},useMemoCache:Gl,useCacheRefresh:function(){return Ql().memoizedState=Vo.bind(null,_l)}},ti={readContext:Da,use:Yl,useCallback:Oo,useContext:Da,useEffect:_o,useImperativeHandle:Lo,useInsertionEffect:No,useLayoutEffect:zo,useMemo:Do,useReducer:Jl,useRef:Eo,useState:function(){return Jl(Xl)},useDebugValue:Ro,useDeferredValue:function(e,t){return Fo(ql(),Nl.memoizedState,e,t)},useTransition:function(){var e=Jl(Xl)[0],t=ql().memoizedState
return["boolean"==typeof e?e:Kl(e),t]},useSyncExternalStore:to,useId:Bo,useHostTransitionStatus:Ho,useFormState:vo,useActionState:vo,useOptimistic:function(e,t){return uo(ql(),0,e,t)},useMemoCache:Gl,useCacheRefresh:Wo},ni={readContext:Da,use:Yl,useCallback:Oo,useContext:Da,useEffect:_o,useImperativeHandle:Lo,useInsertionEffect:No,useLayoutEffect:zo,useMemo:Do,useReducer:eo,useRef:Eo,useState:function(){return eo(Xl)},useDebugValue:Ro,useDeferredValue:function(e,t){var n=ql()
return null===Nl?Ao(n,e,t):Fo(n,Nl.memoizedState,e,t)},useTransition:function(){var e=eo(Xl)[0],t=ql().memoizedState
return["boolean"==typeof e?e:Kl(e),t]},useSyncExternalStore:to,useId:Bo,useHostTransitionStatus:Ho,useFormState:wo,useActionState:wo,useOptimistic:function(e,t){var n=ql()
return null!==Nl?uo(n,0,e,t):(n.baseState=e,[e,n.queue.dispatch])},useMemoCache:Gl,useCacheRefresh:Wo},ri=null,ai=0
function li(e){var t=ai
return ai+=1,null===ri&&(ri=[]),ll(ri,e,t)}function oi(e,t){t=t.props.ref,e.ref=void 0!==t?t:null}function ii(e,t){if(t.$$typeof===m)throw Error(l(525))
throw e={}.toString.call(t),Error(l(31,"[object Object]"===e?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function ui(e){return(0,e._init)(e._payload)}function si(e){function t(t,n){if(e){var r=t.deletions
null===r?(t.deletions=[n],t.flags|=16):r.push(n)}}function n(n,r){if(!e)return null
for(;null!==r;)t(n,r),r=r.sibling
return null}function r(e){for(var t=new Map;null!==e;)null!==e.key?t.set(e.key,e):t.set(e.index,e),e=e.sibling
return t}function a(e,t){return(e=Qr(e,t)).index=0,e.sibling=null,e}function o(t,n,r){return t.index=r,e?null!==(r=t.alternate)?n>(r=r.index)?(t.flags|=67108866,n):r:(t.flags|=67108866,n):(t.flags|=1048576,n)}function i(t){return e&&null===t.alternate&&(t.flags|=67108866),t}function u(e,t,n,r){return null===t||6!==t.tag?((t=Gr(n,e.mode,r)).return=e,t):((t=a(t,n)).return=e,t)}function s(e,t,n,r){var l=n.type
return l===x?f(e,t,n.props.children,r,n.key):null!==t&&(t.elementType===l||"object"==typeof l&&null!==l&&l.$$typeof===D&&ui(l)===t.type)?(oi(t=a(t,n.props),n),t.return=e,t):(oi(t=Kr(n.type,n.key,n.props,null,e.mode,r),n),t.return=e,t)}function c(e,t,n,r){return null===t||4!==t.tag||t.stateNode.containerInfo!==n.containerInfo||t.stateNode.implementation!==n.implementation?((t=Xr(n,e.mode,r)).return=e,t):((t=a(t,n.children||[])).return=e,t)}function f(e,t,n,r,l){return null===t||7!==t.tag?((t=Yr(n,e.mode,r,l)).return=e,t):((t=a(t,n)).return=e,t)}function d(e,t,n){if("string"==typeof t&&""!==t||"number"==typeof t||"bigint"==typeof t)return(t=Gr(""+t,e.mode,n)).return=e,t
if("object"==typeof t&&null!==t){switch(t.$$typeof){case k:return oi(n=Kr(t.type,t.key,t.props,null,e.mode,n),t),n.return=e,n
case E:return(t=Xr(t,e.mode,n)).return=e,t
case D:return d(e,t=(0,t._init)(t._payload),n)}if(j(t)||$(t))return(t=Yr(t,e.mode,n,null)).return=e,t
if("function"==typeof t.then)return d(e,li(t),n)
if(t.$$typeof===z)return d(e,Aa(e,t),n)
ii(e,t)}return null}function p(e,t,n,r){var a=null!==t?t.key:null
if("string"==typeof n&&""!==n||"number"==typeof n||"bigint"==typeof n)return null!==a?null:u(e,t,""+n,r)
if("object"==typeof n&&null!==n){switch(n.$$typeof){case k:return n.key===a?s(e,t,n,r):null
case E:return n.key===a?c(e,t,n,r):null
case D:return p(e,t,n=(a=n._init)(n._payload),r)}if(j(n)||$(n))return null!==a?null:f(e,t,n,r,null)
if("function"==typeof n.then)return p(e,t,li(n),r)
if(n.$$typeof===z)return p(e,t,Aa(e,n),r)
ii(e,n)}return null}function h(e,t,n,r,a){if("string"==typeof r&&""!==r||"number"==typeof r||"bigint"==typeof r)return u(t,e=e.get(n)||null,""+r,a)
if("object"==typeof r&&null!==r){switch(r.$$typeof){case k:return s(t,e=e.get(null===r.key?n:r.key)||null,r,a)
case E:return c(t,e=e.get(null===r.key?n:r.key)||null,r,a)
case D:return h(e,t,n,r=(0,r._init)(r._payload),a)}if(j(r)||$(r))return f(t,e=e.get(n)||null,r,a,null)
if("function"==typeof r.then)return h(e,t,n,li(r),a)
if(r.$$typeof===z)return h(e,t,n,Aa(t,r),a)
ii(t,r)}return null}function m(u,s,c,f){if("object"==typeof c&&null!==c&&c.type===x&&null===c.key&&(c=c.props.children),"object"==typeof c&&null!==c){switch(c.$$typeof){case k:e:{for(var g=c.key;null!==s;){if(s.key===g){if((g=c.type)===x){if(7===s.tag){n(u,s.sibling),(f=a(s,c.props.children)).return=u,u=f
break e}}else if(s.elementType===g||"object"==typeof g&&null!==g&&g.$$typeof===D&&ui(g)===s.type){n(u,s.sibling),oi(f=a(s,c.props),c),f.return=u,u=f
break e}n(u,s)
break}t(u,s),s=s.sibling}c.type===x?((f=Yr(c.props.children,u.mode,f,c.key)).return=u,u=f):(oi(f=Kr(c.type,c.key,c.props,null,u.mode,f),c),f.return=u,u=f)}return i(u)
case E:e:{for(g=c.key;null!==s;){if(s.key===g){if(4===s.tag&&s.stateNode.containerInfo===c.containerInfo&&s.stateNode.implementation===c.implementation){n(u,s.sibling),(f=a(s,c.children||[])).return=u,u=f
break e}n(u,s)
break}t(u,s),s=s.sibling}(f=Xr(c,u.mode,f)).return=u,u=f}return i(u)
case D:return m(u,s,c=(g=c._init)(c._payload),f)}if(j(c))return function(a,l,i,u){for(var s=null,c=null,f=l,m=l=0,g=null;null!==f&&m<i.length;m++){f.index>m?(g=f,f=null):g=f.sibling
var y=p(a,f,i[m],u)
if(null===y){null===f&&(f=g)
break}e&&f&&null===y.alternate&&t(a,f),l=o(y,l,m),null===c?s=y:c.sibling=y,c=y,f=g}if(m===i.length)return n(a,f),pa&&ia(a,m),s
if(null===f){for(;m<i.length;m++)null!==(f=d(a,i[m],u))&&(l=o(f,l,m),null===c?s=f:c.sibling=f,c=f)
return pa&&ia(a,m),s}for(f=r(f);m<i.length;m++)null!==(g=h(f,a,m,i[m],u))&&(e&&null!==g.alternate&&f.delete(null===g.key?m:g.key),l=o(g,l,m),null===c?s=g:c.sibling=g,c=g)
return e&&f.forEach(function(e){return t(a,e)}),pa&&ia(a,m),s}(u,s,c,f)
if($(c)){if("function"!=typeof(g=$(c)))throw Error(l(150))
return function(a,i,u,s){if(null==u)throw Error(l(151))
for(var c=null,f=null,m=i,g=i=0,y=null,v=u.next();null!==m&&!v.done;g++,v=u.next()){m.index>g?(y=m,m=null):y=m.sibling
var b=p(a,m,v.value,s)
if(null===b){null===m&&(m=y)
break}e&&m&&null===b.alternate&&t(a,m),i=o(b,i,g),null===f?c=b:f.sibling=b,f=b,m=y}if(v.done)return n(a,m),pa&&ia(a,g),c
if(null===m){for(;!v.done;g++,v=u.next())null!==(v=d(a,v.value,s))&&(i=o(v,i,g),null===f?c=v:f.sibling=v,f=v)
return pa&&ia(a,g),c}for(m=r(m);!v.done;g++,v=u.next())null!==(v=h(m,a,g,v.value,s))&&(e&&null!==v.alternate&&m.delete(null===v.key?g:v.key),i=o(v,i,g),null===f?c=v:f.sibling=v,f=v)
return e&&m.forEach(function(e){return t(a,e)}),pa&&ia(a,g),c}(u,s,c=g.call(c),f)}if("function"==typeof c.then)return m(u,s,li(c),f)
if(c.$$typeof===z)return m(u,s,Aa(u,c),f)
ii(u,c)}return"string"==typeof c&&""!==c||"number"==typeof c||"bigint"==typeof c?(c=""+c,null!==s&&6===s.tag?(n(u,s.sibling),(f=a(s,c)).return=u,u=f):(n(u,s),(f=Gr(c,u.mode,f)).return=u,u=f),i(u)):n(u,s)}return function(e,t,n,r){try{ai=0
var a=m(e,t,n,r)
return ri=null,a}catch(o){if(o===Za||o===tl)throw o
var l=Wr(29,o,null,e.mode)
return l.lanes=r,l.return=e,l}}}var ci=si(1),fi=si(0),di=q(null),pi=null
function hi(e){var t=e.alternate
Y(vi,1&vi.current),Y(di,e),null===pi&&(null===t||null!==wl.current||null!==t.memoizedState)&&(pi=e)}function mi(e){if(22===e.tag){if(Y(vi,vi.current),Y(di,e),null===pi){var t=e.alternate
null!==t&&null!==t.memoizedState&&(pi=e)}}else gi()}function gi(){Y(vi,vi.current),Y(di,di.current)}function yi(e){K(di),pi===e&&(pi=null),K(vi)}var vi=q(0)
function bi(e){for(var t=e;null!==t;){if(13===t.tag){var n=t.memoizedState
if(null!==n&&(null===(n=n.dehydrated)||"$?"===n.data||Cf(n)))return t}else if(19===t.tag&&void 0!==t.memoizedProps.revealOrder){if(128&t.flags)return t}else if(null!==t.child){t.child.return=t,t=t.child
continue}if(t===e)break
for(;null===t.sibling;){if(null===t.return||t.return===e)return null
t=t.return}t.sibling.return=t.return,t=t.sibling}return null}function ki(e,t,n,r){n=null==(n=n(r,t=e.memoizedState))?t:h({},t,n),e.memoizedState=n,0===e.lanes&&(e.updateQueue.baseState=n)}var wi={enqueueSetState:function(e,t,n){e=e._reactInternals
var r=Hs(),a=dl(r)
a.payload=t,null!=n&&(a.callback=n),null!==(t=pl(e,a,r))&&(Ws(t,0,r),hl(t,e,r))},enqueueReplaceState:function(e,t,n){e=e._reactInternals
var r=Hs(),a=dl(r)
a.tag=1,a.payload=t,null!=n&&(a.callback=n),null!==(t=pl(e,a,r))&&(Ws(t,0,r),hl(t,e,r))},enqueueForceUpdate:function(e,t){e=e._reactInternals
var n=Hs(),r=dl(n)
r.tag=2,null!=t&&(r.callback=t),null!==(t=pl(e,r,n))&&(Ws(t,0,n),hl(t,e,n))}}
function Si(e,t,n,r,a,l,o){return"function"==typeof(e=e.stateNode).shouldComponentUpdate?e.shouldComponentUpdate(r,l,o):t.prototype&&t.prototype.isPureReactComponent?!ar(n,r)||!ar(a,l):1}function Ei(e,t,n,r){e=t.state,"function"==typeof t.componentWillReceiveProps&&t.componentWillReceiveProps(n,r),"function"==typeof t.UNSAFE_componentWillReceiveProps&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&wi.enqueueReplaceState(t,t.state,null)}function xi(e,t){var n=t
if("ref"in t)for(var r in n={},t)"ref"!==r&&(n[r]=t[r])
if(e=e.defaultProps)for(var a in n===t&&(n=h({},n)),e)void 0===n[a]&&(n[a]=e[a])
return n}var Ci="function"==typeof reportError?reportError:function(e){if("object"==typeof window&&"function"==typeof window.ErrorEvent){var t=new window.ErrorEvent("error",{bubbles:1,cancelable:1,message:"object"==typeof e&&null!==e&&"string"==typeof e.message?e.message+"":e+"",error:e})
if(!window.dispatchEvent(t))return}else if("object"==typeof process&&"function"==typeof process.emit)return void process.emit("uncaughtException",e)}
function Pi(e){Ci(e)}function _i(){}function Ni(e){Ci(e)}function zi(e,t){try{(0,e.onUncaughtError)(t.value,{componentStack:t.stack})}catch(n){setTimeout(function(){throw n})}}function Ti(e,t,n){try{(0,e.onCaughtError)(n.value,{componentStack:n.stack,errorBoundary:1===t.tag?t.stateNode:null})}catch(r){setTimeout(function(){throw r})}}function Li(e,t,n){return(n=dl(n)).tag=3,n.payload={element:null},n.callback=function(){zi(e,t)},n}function Ri(e){return(e=dl(e)).tag=3,e}function Oi(e,t,n,r){var a=n.type.getDerivedStateFromError
if("function"==typeof a){var l=r.value
e.payload=function(){return a(l)},e.callback=function(){Ti(t,n,r)}}var o=n.stateNode
null!==o&&"function"==typeof o.componentDidCatch&&(e.callback=function(){Ti(t,n,r),"function"!=typeof a&&(null===Rs?Rs=new Set([this]):Rs.add(this))
var e=r.stack
this.componentDidCatch(r.value,{componentStack:null!==e?e:""})})}var Di=Error(l(461)),Ai=0
function Fi(e,t,n,r){t.child=null===e?fi(t,null,n,r):ci(t,e.child,n,r)}function Mi(e,t,n,r,a){n=n.render
var l=t.ref
if("ref"in r){var o={}
for(var i in r)"ref"!==i&&(o[i]=r[i])}else o=r
return Oa(t),r=Il(e,t,n,o,l,a),i=Bl(),null===e||Ai?(pa&&i&&sa(t),t.flags|=1,Fi(e,t,r,a),t.child):(Wl(e,t,a),ru(e,t,a))}function $i(e,t,n,r,a){if(null===e){var l=n.type
return"function"!=typeof l||Vr(l)||void 0!==l.defaultProps||null!==n.compare?((e=Kr(n.type,null,r,t,t.mode,a)).ref=t.ref,e.return=t,t.child=e):(t.tag=15,t.type=l,Ii(e,t,l,r,a))}if(l=e.child,!au(e,a)){var o=l.memoizedProps
if((n=null!==(n=n.compare)?n:ar)(o,r)&&e.ref===t.ref)return ru(e,t,a)}return t.flags|=1,(e=Qr(l,r)).ref=t.ref,e.return=t,t.child=e}function Ii(e,t,n,r,a){if(null!==e){var l=e.memoizedProps
if(ar(l,r)&&e.ref===t.ref){if(Ai=0,t.pendingProps=r=l,!au(e,a))return t.lanes=e.lanes,ru(e,t,a)
131072&e.flags&&(Ai=1)}}return Bi(e,t,n,r,a)}function Ui(e,t,n){var r=t.pendingProps,a=r.children,l=null!==e?e.memoizedState:null
if("hidden"===r.mode){if(128&t.flags){if(r=null!==l?l.baseLanes|n:n,null!==e){for(a=t.child=e.child,l=0;null!==a;)l=l|a.lanes|a.childLanes,a=a.sibling
t.childLanes=l&~r}else t.childLanes=0,t.child=null
return ji(e,t,r,n)}if(!(536870912&n))return t.lanes=t.childLanes=536870912,ji(e,t,null!==l?l.baseLanes|n:n,n)
t.memoizedState={baseLanes:0,cachePool:null},null!==e&&Xa(0,null!==l?l.cachePool:null),null!==l?El(t,l):xl(),mi(t)}else null!==l?(Xa(0,l.cachePool),El(t,l),gi(),t.memoizedState=null):(null!==e&&Xa(0,null),xl(),gi())
return Fi(e,t,a,n),t.child}function ji(e,t,n,r){var a=Ga()
return a=null===a?null:{parent:Ua._currentValue,pool:a},t.memoizedState={baseLanes:n,cachePool:a},null!==e&&Xa(0,null),xl(),mi(t),null!==e&&La(e,t,r,1),null}function Hi(e,t){var n=t.ref
if(null===n)null!==e&&null!==e.ref&&(t.flags|=4194816)
else{if("function"!=typeof n&&"object"!=typeof n)throw Error(l(284))
null!==e&&e.ref===n||(t.flags|=4194816)}}function Bi(e,t,n,r,a){return Oa(t),n=Il(e,t,n,r,void 0,a),r=Bl(),null===e||Ai?(pa&&r&&sa(t),t.flags|=1,Fi(e,t,n,a),t.child):(Wl(e,t,a),ru(e,t,a))}function Wi(e,t,n,r,a,l){return Oa(t),t.updateQueue=null,n=jl(t,r,n,a),Ul(e),r=Bl(),null===e||Ai?(pa&&r&&sa(t),t.flags|=1,Fi(e,t,n,l),t.child):(Wl(e,t,l),ru(e,t,l))}function Vi(e,t,n,r,a){if(Oa(t),null===t.stateNode){var l=Hr,o=n.contextType
"object"==typeof o&&null!==o&&(l=Da(o)),l=new n(r,l),t.memoizedState=null!==l.state&&void 0!==l.state?l.state:null,l.updater=wi,t.stateNode=l,l._reactInternals=t,(l=t.stateNode).props=r,l.state=t.memoizedState,l.refs={},cl(t),o=n.contextType,l.context="object"==typeof o&&null!==o?Da(o):Hr,l.state=t.memoizedState,"function"==typeof(o=n.getDerivedStateFromProps)&&(ki(t,n,o,r),l.state=t.memoizedState),"function"==typeof n.getDerivedStateFromProps||"function"==typeof l.getSnapshotBeforeUpdate||"function"!=typeof l.UNSAFE_componentWillMount&&"function"!=typeof l.componentWillMount||(o=l.state,"function"==typeof l.componentWillMount&&l.componentWillMount(),"function"==typeof l.UNSAFE_componentWillMount&&l.UNSAFE_componentWillMount(),o!==l.state&&wi.enqueueReplaceState(l,l.state,null),vl(t,r,l,a),yl(),l.state=t.memoizedState),"function"==typeof l.componentDidMount&&(t.flags|=4194308),r=1}else if(null===e){l=t.stateNode
var i=t.memoizedProps,u=xi(n,i)
l.props=u
var s=l.context,c=n.contextType
o=Hr,"object"==typeof c&&null!==c&&(o=Da(c))
var f=n.getDerivedStateFromProps
c="function"==typeof f||"function"==typeof l.getSnapshotBeforeUpdate,i=t.pendingProps!==i,c||"function"!=typeof l.UNSAFE_componentWillReceiveProps&&"function"!=typeof l.componentWillReceiveProps||(i||s!==o)&&Ei(t,l,r,o),sl=0
var d=t.memoizedState
l.state=d,vl(t,r,l,a),yl(),s=t.memoizedState,i||d!==s||sl?("function"==typeof f&&(ki(t,n,f,r),s=t.memoizedState),(u=sl||Si(t,n,u,r,d,s,o))?(c||"function"!=typeof l.UNSAFE_componentWillMount&&"function"!=typeof l.componentWillMount||("function"==typeof l.componentWillMount&&l.componentWillMount(),"function"==typeof l.UNSAFE_componentWillMount&&l.UNSAFE_componentWillMount()),"function"==typeof l.componentDidMount&&(t.flags|=4194308)):("function"==typeof l.componentDidMount&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=s),l.props=r,l.state=s,l.context=o,r=u):("function"==typeof l.componentDidMount&&(t.flags|=4194308),r=0)}else{l=t.stateNode,fl(e,t),c=xi(n,o=t.memoizedProps),l.props=c,f=t.pendingProps,d=l.context,s=n.contextType,u=Hr,"object"==typeof s&&null!==s&&(u=Da(s)),(s="function"==typeof(i=n.getDerivedStateFromProps)||"function"==typeof l.getSnapshotBeforeUpdate)||"function"!=typeof l.UNSAFE_componentWillReceiveProps&&"function"!=typeof l.componentWillReceiveProps||(o!==f||d!==u)&&Ei(t,l,r,u),sl=0,d=t.memoizedState,l.state=d,vl(t,r,l,a),yl()
var p=t.memoizedState
o!==f||d!==p||sl||null!==e&&null!==e.dependencies&&Ra(e.dependencies)?("function"==typeof i&&(ki(t,n,i,r),p=t.memoizedState),(c=sl||Si(t,n,c,r,d,p,u)||null!==e&&null!==e.dependencies&&Ra(e.dependencies))?(s||"function"!=typeof l.UNSAFE_componentWillUpdate&&"function"!=typeof l.componentWillUpdate||("function"==typeof l.componentWillUpdate&&l.componentWillUpdate(r,p,u),"function"==typeof l.UNSAFE_componentWillUpdate&&l.UNSAFE_componentWillUpdate(r,p,u)),"function"==typeof l.componentDidUpdate&&(t.flags|=4),"function"==typeof l.getSnapshotBeforeUpdate&&(t.flags|=1024)):("function"!=typeof l.componentDidUpdate||o===e.memoizedProps&&d===e.memoizedState||(t.flags|=4),"function"!=typeof l.getSnapshotBeforeUpdate||o===e.memoizedProps&&d===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=p),l.props=r,l.state=p,l.context=u,r=c):("function"!=typeof l.componentDidUpdate||o===e.memoizedProps&&d===e.memoizedState||(t.flags|=4),"function"!=typeof l.getSnapshotBeforeUpdate||o===e.memoizedProps&&d===e.memoizedState||(t.flags|=1024),r=0)}return l=r,Hi(e,t),r=!!(128&t.flags),l||r?(l=t.stateNode,n=r&&"function"!=typeof n.getDerivedStateFromError?null:l.render(),t.flags|=1,null!==e&&r?(t.child=ci(t,e.child,null,a),t.child=ci(t,null,n,a)):Fi(e,t,n,a),t.memoizedState=l.state,e=t.child):e=ru(e,t,a),e}function Qi(e,t,n,r){return wa(),t.flags|=256,Fi(e,t,n,r),t.child}var qi={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null}
function Ki(e){return{baseLanes:e,cachePool:Ja()}}function Yi(e,t,n){return e=null!==e?e.childLanes&~n:0,t&&(e|=xs),e}function Gi(e,t,n){var r,a=t.pendingProps,o=0,i=!!(128&t.flags)
if((r=i)||(r=null!==e&&null===e.memoizedState?0:!!(2&vi.current)),r&&(o=1,t.flags&=-129),r=!!(32&t.flags),t.flags&=-33,null===e){if(pa){if(o?hi(t):gi(),pa){var u,s=da
if(u=s){e:{for(u=s,s=ma;8!==u.nodeType;){if(!s){s=null
break e}if(null===(u=Pf(u.nextSibling))){s=null
break e}}s=u}null!==s?(t.memoizedState={dehydrated:s,treeContext:null!==aa?{id:la,overflow:oa}:null,retryLane:536870912,hydrationErrors:null},(u=Wr(18,null,null,0)).stateNode=s,u.return=t,t.child=u,fa=t,da=null,u=1):u=0}u||ya(t)}if(null!==(s=t.memoizedState)&&null!==(s=s.dehydrated))return Cf(s)?t.lanes=32:t.lanes=536870912,null
yi(t)}return s=a.children,a=a.fallback,o?(gi(),s=Ji({mode:"hidden",children:s},o=t.mode),a=Yr(a,o,n,null),s.return=t,a.return=t,s.sibling=a,t.child=s,(o=t.child).memoizedState=Ki(n),o.childLanes=Yi(e,r,n),t.memoizedState=qi,a):(hi(t),Xi(t,s))}if(null!==(u=e.memoizedState)&&null!==(s=u.dehydrated)){if(i)256&t.flags?(hi(t),t.flags&=-257,t=Zi(e,t,n)):null!==t.memoizedState?(gi(),t.child=e.child,t.flags|=128,t=null):(gi(),o=a.fallback,s=t.mode,a=Ji({mode:"visible",children:a.children},s),(o=Yr(o,s,n,null)).flags|=2,a.return=t,o.return=t,a.sibling=o,t.child=a,ci(t,e.child,null,n),(a=t.child).memoizedState=Ki(n),a.childLanes=Yi(e,r,n),t.memoizedState=qi,t=o)
else if(hi(t),Cf(s)){if(r=s.nextSibling&&s.nextSibling.dataset)var c=r.dgst
r=c,(a=Error(l(419))).stack="",a.digest=r,Ea({value:a,source:null,stack:null}),t=Zi(e,t,n)}else if(Ai||La(e,t,n,0),r=0!==(n&e.childLanes),Ai||r){if(null!==(r=fs)&&0!==(a=0!==((a=42&(a=n&-n)?1:Fe(a))&(r.suspendedLanes|n))?0:a)&&a!==u.retryLane)throw u.retryLane=a,Ir(e,a),Ws(r,0,a),Di
"$?"===s.data||tc(),t=Zi(e,t,n)}else"$?"===s.data?(t.flags|=192,t.child=e.child,t=null):(e=u.treeContext,da=Pf(s.nextSibling),fa=t,pa=1,ha=null,ma=0,null!==e&&(na[ra++]=la,na[ra++]=oa,na[ra++]=aa,la=e.id,oa=e.overflow,aa=t),(t=Xi(t,a.children)).flags|=4096)
return t}return o?(gi(),o=a.fallback,s=t.mode,c=(u=e.child).sibling,(a=Qr(u,{mode:"hidden",children:a.children})).subtreeFlags=65011712&u.subtreeFlags,null!==c?o=Qr(c,o):(o=Yr(o,s,n,null)).flags|=2,o.return=t,a.return=t,a.sibling=o,t.child=a,a=o,o=t.child,null===(s=e.child.memoizedState)?s=Ki(n):(null!==(u=s.cachePool)?(c=Ua._currentValue,u=u.parent!==c?{parent:c,pool:c}:u):u=Ja(),s={baseLanes:s.baseLanes|n,cachePool:u}),o.memoizedState=s,o.childLanes=Yi(e,r,n),t.memoizedState=qi,a):(hi(t),e=(n=e.child).sibling,(n=Qr(n,{mode:"visible",children:a.children})).return=t,n.sibling=null,null!==e&&(null===(r=t.deletions)?(t.deletions=[e],t.flags|=16):r.push(e)),t.child=n,t.memoizedState=null,n)}function Xi(e,t){return(t=Ji({mode:"visible",children:t},e.mode)).return=e,e.child=t}function Ji(e,t){return(e=Wr(22,e,null,t)).lanes=0,e.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null},e}function Zi(e,t,n){return ci(t,e.child,null,n),(e=Xi(t,t.pendingProps.children)).flags|=2,t.memoizedState=null,e}function eu(e,t,n){e.lanes|=t
var r=e.alternate
null!==r&&(r.lanes|=t),za(e.return,t,n)}function tu(e,t,n,r,a){var l=e.memoizedState
null===l?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:a}:(l.isBackwards=t,l.rendering=null,l.renderingStartTime=0,l.last=r,l.tail=n,l.tailMode=a)}function nu(e,t,n){var r=t.pendingProps,a=r.revealOrder,l=r.tail
if(Fi(e,t,r.children,n),2&(r=vi.current))r=1&r|2,t.flags|=128
else{if(null!==e&&128&e.flags)e:for(e=t.child;null!==e;){if(13===e.tag)null!==e.memoizedState&&eu(e,n,t)
else if(19===e.tag)eu(e,n,t)
else if(null!==e.child){e.child.return=e,e=e.child
continue}if(e===t)break e
for(;null===e.sibling;){if(null===e.return||e.return===t)break e
e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}switch(Y(vi,r),a){case"forwards":for(n=t.child,a=null;null!==n;)null!==(e=n.alternate)&&null===bi(e)&&(a=n),n=n.sibling
null===(n=a)?(a=t.child,t.child=null):(a=n.sibling,n.sibling=null),tu(t,0,a,n,l)
break
case"backwards":for(n=null,a=t.child,t.child=null;null!==a;){if(null!==(e=a.alternate)&&null===bi(e)){t.child=a
break}e=a.sibling,a.sibling=n,n=a,a=e}tu(t,1,n,null,l)
break
case"together":tu(t,0,null,null,void 0)
break
default:t.memoizedState=null}return t.child}function ru(e,t,n){if(null!==e&&(t.dependencies=e.dependencies),ws|=t.lanes,0===(n&t.childLanes)){if(null===e)return null
if(La(e,t,n,0),0===(n&t.childLanes))return null}if(null!==e&&t.child!==e.child)throw Error(l(153))
if(null!==t.child){for(n=Qr(e=t.child,e.pendingProps),t.child=n,n.return=t;null!==e.sibling;)e=e.sibling,(n=n.sibling=Qr(e,e.pendingProps)).return=t
n.sibling=null}return t.child}function au(e,t){return 0!==(e.lanes&t)||null!==(e=e.dependencies)&&Ra(e)?1:0}function lu(e,t,n){if(null!==e)if(e.memoizedProps!==t.pendingProps)Ai=1
else{if(!(au(e,n)||128&t.flags))return Ai=0,function(e,t,n){switch(t.tag){case 3:ee(t,t.stateNode.containerInfo),_a(0,Ua,e.memoizedState.cache),wa()
break
case 27:case 5:ne(t)
break
case 4:ee(t,t.stateNode.containerInfo)
break
case 10:_a(0,t.type,t.memoizedProps.value)
break
case 13:var r=t.memoizedState
if(null!==r)return null!==r.dehydrated?(hi(t),t.flags|=128,null):0!==(n&t.child.childLanes)?Gi(e,t,n):(hi(t),null!==(e=ru(e,t,n))?e.sibling:null)
hi(t)
break
case 19:var a=!!(128&e.flags)
if((r=0!==(n&t.childLanes))||(La(e,t,n,0),r=0!==(n&t.childLanes)),a){if(r)return nu(e,t,n)
t.flags|=128}if(null!==(a=t.memoizedState)&&(a.rendering=null,a.tail=null,a.lastEffect=null),Y(vi,vi.current),r)break
return null
case 22:case 23:return t.lanes=0,Ui(e,t,n)
case 24:_a(0,Ua,e.memoizedState.cache)}return ru(e,t,n)}(e,t,n)
Ai=131072&e.flags?1:0}else Ai=0,pa&&1048576&t.flags&&ua(t,ta,t.index)
switch(t.lanes=0,t.tag){case 16:e:{e=t.pendingProps
var r=t.elementType,a=r._init
if(r=a(r._payload),t.type=r,"function"!=typeof r){if(null!=r){if((a=r.$$typeof)===T){t.tag=11,t=Mi(null,t,r,e,n)
break e}if(a===O){t.tag=14,t=$i(null,t,r,e,n)
break e}}throw t=U(r)||r,Error(l(306,t,""))}Vr(r)?(e=xi(r,e),t.tag=1,t=Vi(null,t,r,e,n)):(t.tag=0,t=Bi(null,t,r,e,n))}return t
case 0:return Bi(e,t,t.type,t.pendingProps,n)
case 1:return Vi(e,t,r=t.type,a=xi(r,t.pendingProps),n)
case 3:e:{if(ee(t,t.stateNode.containerInfo),null===e)throw Error(l(387))
r=t.pendingProps
var o=t.memoizedState
a=o.element,fl(e,t),vl(t,r,null,n)
var i=t.memoizedState
if(r=i.cache,_a(0,Ua,r),r!==o.cache&&Ta(t,[Ua],n,1),yl(),r=i.element,o.isDehydrated){if(o={element:r,isDehydrated:0,cache:i.cache},t.updateQueue.baseState=o,t.memoizedState=o,256&t.flags){t=Qi(e,t,r,n)
break e}if(r!==a){Ea(a=Rr(Error(l(424)),t)),t=Qi(e,t,r,n)
break e}for(e=9===(e=t.stateNode.containerInfo).nodeType?e.body:"HTML"===e.nodeName?e.ownerDocument.body:e,da=Pf(e.firstChild),fa=t,pa=1,ha=null,ma=1,n=fi(t,null,r,n),t.child=n;n;)n.flags=-3&n.flags|4096,n=n.sibling}else{if(wa(),r===a){t=ru(e,t,n)
break e}Fi(e,t,r,n)}t=t.child}return t
case 26:return Hi(e,t),null===e?(n=Mf(t.type,null,t.pendingProps,null))?t.memoizedState=n:pa||(n=t.type,e=t.pendingProps,(r=df(J.current).createElement(n))[Ue]=t,r[je]=e,sf(r,n,e),Ze(r),t.stateNode=r):t.memoizedState=Mf(t.type,e.memoizedProps,t.pendingProps,e.memoizedState),null
case 27:return ne(t),null===e&&pa&&(r=t.stateNode=zf(t.type,t.pendingProps,J.current),fa=t,ma=1,a=da,Sf(t.type)?(_f=a,da=Pf(r.firstChild)):da=a),Fi(e,t,t.pendingProps.children,n),Hi(e,t),null===e&&(t.flags|=4194304),t.child
case 5:return null===e&&pa&&((a=r=da)&&(null!==(r=function(e,t,n,r){for(;1===e.nodeType;){var a=n
if(e.nodeName.toLowerCase()!==t.toLowerCase()){if(!r&&("INPUT"!==e.nodeName||"hidden"!==e.type))break}else if(r){if(!e[qe])switch(t){case"meta":if(!e.hasAttribute("itemprop"))break
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
if("hidden"===a.type&&e.getAttribute("name")===l)return e}if(null===(e=Pf(e.nextSibling)))break}return null}(r,t.type,t.pendingProps,ma))?(t.stateNode=r,fa=t,da=Pf(r.firstChild),ma=0,a=1):a=0),a||ya(t)),ne(t),a=t.type,o=t.pendingProps,i=null!==e?e.memoizedProps:null,r=o.children,mf(a,o)?r=null:null!==i&&mf(a,i)&&(t.flags|=32),null!==t.memoizedState&&(a=Il(e,t,Hl,null,null,n),rd._currentValue=a),Hi(e,t),Fi(e,t,r,n),t.child
case 6:return null===e&&pa&&((e=n=da)&&(null!==(n=function(e,t,n){if(""===t)return null
for(;3!==e.nodeType;){if((1!==e.nodeType||"INPUT"!==e.nodeName||"hidden"!==e.type)&&!n)return null
if(null===(e=Pf(e.nextSibling)))return null}return e}(n,t.pendingProps,ma))?(t.stateNode=n,fa=t,da=null,e=1):e=0),e||ya(t)),null
case 13:return Gi(e,t,n)
case 4:return ee(t,t.stateNode.containerInfo),r=t.pendingProps,null===e?t.child=ci(t,null,r,n):Fi(e,t,r,n),t.child
case 11:return Mi(e,t,t.type,t.pendingProps,n)
case 7:return Fi(e,t,t.pendingProps,n),t.child
case 8:case 12:return Fi(e,t,t.pendingProps.children,n),t.child
case 10:return r=t.pendingProps,_a(0,t.type,r.value),Fi(e,t,r.children,n),t.child
case 9:return a=t.type._context,r=t.pendingProps.children,Oa(t),r=r(a=Da(a)),t.flags|=1,Fi(e,t,r,n),t.child
case 14:return $i(e,t,t.type,t.pendingProps,n)
case 15:return Ii(e,t,t.type,t.pendingProps,n)
case 19:return nu(e,t,n)
case 31:return r=t.pendingProps,n=t.mode,r={mode:r.mode,children:r.children},null===e?((n=Ji(r,n)).ref=t.ref,t.child=n,n.return=t,t=n):((n=Qr(e.child,r)).ref=t.ref,t.child=n,n.return=t,t=n),t
case 22:return Ui(e,t,n)
case 24:return Oa(t),r=Da(Ua),null===e?(null===(a=Ga())&&(a=fs,o=ja(),a.pooledCache=o,o.refCount++,null!==o&&(a.pooledCacheLanes|=n),a=o),t.memoizedState={parent:r,cache:a},cl(t),_a(0,Ua,a)):(0!==(e.lanes&n)&&(fl(e,t),vl(t,null,null,n),yl()),a=e.memoizedState,o=t.memoizedState,a.parent!==r?(a={parent:r,cache:r},t.memoizedState=a,0===t.lanes&&(t.memoizedState=t.updateQueue.baseState=a),_a(0,Ua,r)):(r=o.cache,_a(0,Ua,r),r!==a.cache&&Ta(t,[Ua],n,1))),Fi(e,t,t.pendingProps.children,n),t.child
case 29:throw t.pendingProps}throw Error(l(156,t.tag))}function ou(e){e.flags|=4}function iu(e,t){if("stylesheet"!==t.type||4&t.state.loading)e.flags&=-16777217
else if(e.flags|=16777216,!Gf(t)){if(null!==(t=di.current)&&((4194048&ps)===ps?null!==pi:(62914560&ps)!==ps&&!(536870912&ps)||t!==pi))throw ol=nl,el
e.flags|=8192}}function uu(e,t){null!==t&&(e.flags|=4),16384&e.flags&&(t=22!==e.tag?Le():536870912,e.lanes|=t,Cs|=t)}function su(e,t){if(!pa)switch(e.tailMode){case"hidden":t=e.tail
for(var n=null;null!==t;)null!==t.alternate&&(n=t),t=t.sibling
null===n?e.tail=null:n.sibling=null
break
case"collapsed":n=e.tail
for(var r=null;null!==n;)null!==n.alternate&&(r=n),n=n.sibling
null===r?t||null===e.tail?e.tail=null:e.tail.sibling=null:r.sibling=null}}function cu(e){var t=null!==e.alternate&&e.alternate.child===e.child,n=0,r=0
if(t)for(var a=e.child;null!==a;)n|=a.lanes|a.childLanes,r|=65011712&a.subtreeFlags,r|=65011712&a.flags,a.return=e,a=a.sibling
else for(a=e.child;null!==a;)n|=a.lanes|a.childLanes,r|=a.subtreeFlags,r|=a.flags,a.return=e,a=a.sibling
return e.subtreeFlags|=r,e.childLanes=n,t}function fu(e,t,n){var r=t.pendingProps
switch(ca(t),t.tag){case 31:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:case 1:return cu(t),null
case 3:return n=t.stateNode,r=null,null!==e&&(r=e.memoizedState.cache),t.memoizedState.cache!==r&&(t.flags|=2048),Na(Ua),te(),n.pendingContext&&(n.context=n.pendingContext,n.pendingContext=null),null!==e&&null!==e.child||(ka(t)?ou(t):null===e||e.memoizedState.isDehydrated&&!(256&t.flags)||(t.flags|=1024,Sa())),cu(t),null
case 26:return n=t.memoizedState,null===e?(ou(t),null!==n?(cu(t),iu(t,n)):(cu(t),t.flags&=-16777217)):n?n!==e.memoizedState?(ou(t),cu(t),iu(t,n)):(cu(t),t.flags&=-16777217):(e.memoizedProps!==r&&ou(t),cu(t),t.flags&=-16777217),null
case 27:re(t),n=J.current
var a=t.type
if(null!==e&&null!=t.stateNode)e.memoizedProps!==r&&ou(t)
else{if(!r){if(null===t.stateNode)throw Error(l(166))
return cu(t),null}e=G.current,ka(t)?va(t):(e=zf(a,r,n),t.stateNode=e,ou(t))}return cu(t),null
case 5:if(re(t),n=t.type,null!==e&&null!=t.stateNode)e.memoizedProps!==r&&ou(t)
else{if(!r){if(null===t.stateNode)throw Error(l(166))
return cu(t),null}if(e=G.current,ka(t))va(t)
else{switch(a=df(J.current),e){case 1:e=a.createElementNS("http://www.w3.org/2000/svg",n)
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
default:e="string"==typeof r.is?a.createElement(n,{is:r.is}):a.createElement(n)}}e[Ue]=t,e[je]=r
e:for(a=t.child;null!==a;){if(5===a.tag||6===a.tag)e.appendChild(a.stateNode)
else if(4!==a.tag&&27!==a.tag&&null!==a.child){a.child.return=a,a=a.child
continue}if(a===t)break e
for(;null===a.sibling;){if(null===a.return||a.return===t)break e
a=a.return}a.sibling.return=a.return,a=a.sibling}t.stateNode=e
e:switch(sf(e,n,r),n){case"button":case"input":case"select":case"textarea":e=!!r.autoFocus
break e
case"img":e=1
break e
default:e=0}e&&ou(t)}}return cu(t),t.flags&=-16777217,null
case 6:if(e&&null!=t.stateNode)e.memoizedProps!==r&&ou(t)
else{if("string"!=typeof r&&null===t.stateNode)throw Error(l(166))
if(e=J.current,ka(t)){if(e=t.stateNode,n=t.memoizedProps,r=null,null!==(a=fa))switch(a.tag){case 27:case 5:r=a.memoizedProps}e[Ue]=t,(e=e.nodeValue===n||null!==r&&1==r.suppressHydrationWarning||af(e.nodeValue,n)?1:0)||ya(t)}else(e=df(e).createTextNode(r))[Ue]=t,t.stateNode=e}return cu(t),null
case 13:if(r=t.memoizedState,null===e||null!==e.memoizedState&&null!==e.memoizedState.dehydrated){if(a=ka(t),null!==r&&null!==r.dehydrated){if(null===e){if(!a)throw Error(l(318))
if(!(a=null!==(a=t.memoizedState)?a.dehydrated:null))throw Error(l(317))
a[Ue]=t}else wa(),!(128&t.flags)&&(t.memoizedState=null),t.flags|=4
cu(t),a=0}else a=Sa(),null!==e&&null!==e.memoizedState&&(e.memoizedState.hydrationErrors=a),a=1
if(!a)return 256&t.flags?(yi(t),t):(yi(t),null)}if(yi(t),128&t.flags)return t.lanes=n,t
if(n=null!==r,e=null!==e&&null!==e.memoizedState,n){a=null,null!==(r=t.child).alternate&&null!==r.alternate.memoizedState&&null!==r.alternate.memoizedState.cachePool&&(a=r.alternate.memoizedState.cachePool.pool)
var o=null
null!==r.memoizedState&&null!==r.memoizedState.cachePool&&(o=r.memoizedState.cachePool.pool),o!==a&&(r.flags|=2048)}return n!==e&&n&&(t.child.flags|=8192),uu(t,t.updateQueue),cu(t),null
case 4:return te(),null===e&&Kc(t.stateNode.containerInfo),cu(t),null
case 10:return Na(t.type),cu(t),null
case 19:if(K(vi),null===(a=t.memoizedState))return cu(t),null
if(r=!!(128&t.flags),null===(o=a.rendering))if(r)su(a,0)
else{if(0!==ks||null!==e&&128&e.flags)for(e=t.child;null!==e;){if(null!==(o=bi(e))){for(t.flags|=128,su(a,0),e=o.updateQueue,t.updateQueue=e,uu(t,e),t.subtreeFlags=0,e=n,n=t.child;null!==n;)qr(n,e),n=n.sibling
return Y(vi,1&vi.current|2),t.child}e=e.sibling}null!==a.tail&&se()>Ts&&(t.flags|=128,r=1,su(a,0),t.lanes=4194304)}else{if(!r)if(null!==(e=bi(o))){if(t.flags|=128,r=1,e=e.updateQueue,t.updateQueue=e,uu(t,e),su(a,1),null===a.tail&&"hidden"===a.tailMode&&!o.alternate&&!pa)return cu(t),null}else 2*se()-a.renderingStartTime>Ts&&536870912!==n&&(t.flags|=128,r=1,su(a,0),t.lanes=4194304)
a.isBackwards?(o.sibling=t.child,t.child=o):(null!==(e=a.last)?e.sibling=o:t.child=o,a.last=o)}return null!==a.tail?(t=a.tail,a.rendering=t,a.tail=t.sibling,a.renderingStartTime=se(),t.sibling=null,e=vi.current,Y(vi,r?1&e|2:1&e),t):(cu(t),null)
case 22:case 23:return yi(t),Cl(),r=null!==t.memoizedState,null!==e?null!==e.memoizedState!==r&&(t.flags|=8192):r&&(t.flags|=8192),r?!!(536870912&n)&&!(128&t.flags)&&(cu(t),6&t.subtreeFlags&&(t.flags|=8192)):cu(t),null!==(n=t.updateQueue)&&uu(t,n.retryQueue),n=null,null!==e&&null!==e.memoizedState&&null!==e.memoizedState.cachePool&&(n=e.memoizedState.cachePool.pool),r=null,null!==t.memoizedState&&null!==t.memoizedState.cachePool&&(r=t.memoizedState.cachePool.pool),r!==n&&(t.flags|=2048),null!==e&&K(Ya),null
case 24:return n=null,null!==e&&(n=e.memoizedState.cache),t.memoizedState.cache!==n&&(t.flags|=2048),Na(Ua),cu(t),null
case 25:case 30:return null}throw Error(l(156,t.tag))}function du(e,t){switch(ca(t),t.tag){case 1:return 65536&(e=t.flags)?(t.flags=-65537&e|128,t):null
case 3:return Na(Ua),te(),65536&(e=t.flags)&&!(128&e)?(t.flags=-65537&e|128,t):null
case 26:case 27:case 5:return re(t),null
case 13:if(yi(t),null!==(e=t.memoizedState)&&null!==e.dehydrated){if(null===t.alternate)throw Error(l(340))
wa()}return 65536&(e=t.flags)?(t.flags=-65537&e|128,t):null
case 19:return K(vi),null
case 4:return te(),null
case 10:return Na(t.type),null
case 22:case 23:return yi(t),Cl(),null!==e&&K(Ya),65536&(e=t.flags)?(t.flags=-65537&e|128,t):null
case 24:return Na(Ua),null
default:return null}}function pu(e,t){switch(ca(t),t.tag){case 3:Na(Ua),te()
break
case 26:case 27:case 5:re(t)
break
case 4:te()
break
case 13:yi(t)
break
case 19:K(vi)
break
case 10:Na(t.type)
break
case 22:case 23:yi(t),Cl(),null!==e&&K(Ya)
break
case 24:Na(Ua)}}function hu(e,t){try{var n=t.updateQueue,r=null!==n?n.lastEffect:null
if(null!==r){var a=r.next
n=a
do{if((n.tag&e)===e){r=void 0
var l=n.create,o=n.inst
r=l(),o.destroy=r}n=n.next}while(n!==a)}}catch(i){vc(t,t.return,i)}}function mu(e,t,n){try{var r=t.updateQueue,a=null!==r?r.lastEffect:null
if(null!==a){var l=a.next
r=l
do{if((r.tag&e)===e){var o=r.inst,i=o.destroy
if(void 0!==i){o.destroy=void 0,a=t
var u=n,s=i
try{s()}catch(c){vc(a,u,c)}}}r=r.next}while(r!==l)}}catch(c){vc(t,t.return,c)}}function gu(e){var t=e.updateQueue
if(null!==t){var n=e.stateNode
try{kl(t,n)}catch(r){vc(e,e.return,r)}}}function yu(e,t,n){n.props=xi(e.type,e.memoizedProps),n.state=e.memoizedState
try{n.componentWillUnmount()}catch(r){vc(e,t,r)}}function vu(e,t){try{var n=e.ref
if(null!==n){switch(e.tag){case 26:case 27:case 5:var r=e.stateNode
break
default:r=e.stateNode}"function"==typeof n?e.refCleanup=n(r):n.current=r}}catch(a){vc(e,t,a)}}function bu(e,t){var n=e.ref,r=e.refCleanup
if(null!==n)if("function"==typeof r)try{r()}catch(a){vc(e,t,a)}finally{e.refCleanup=null,null!=(e=e.alternate)&&(e.refCleanup=null)}else if("function"==typeof n)try{n(null)}catch(l){vc(e,t,l)}else n.current=null}function ku(e){var t=e.type,n=e.memoizedProps,r=e.stateNode
try{e:switch(t){case"button":case"input":case"select":case"textarea":n.autoFocus&&r.focus()
break e
case"img":n.src?r.src=n.src:n.srcSet&&(r.srcset=n.srcSet)}}catch(a){vc(e,e.return,a)}}function wu(e,t,n){try{var r=e.stateNode
!function(e,t,n,r){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break
case"input":var a=null,o=null,i=null,u=null,s=null,c=null,f=null
for(h in n){var d=n[h]
if(n.hasOwnProperty(h)&&null!=d)switch(h){case"checked":case"value":break
case"defaultValue":s=d
default:r.hasOwnProperty(h)||of(e,t,h,null,r,d)}}for(var p in r){var h=r[p]
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
default:h!==d&&of(e,t,p,h,r,d)}}return void xt(e,i,u,s,c,f,o,a)
case"select":for(o in h=i=u=p=null,n)if(s=n[o],n.hasOwnProperty(o)&&null!=s)switch(o){case"value":break
case"multiple":h=s
default:r.hasOwnProperty(o)||of(e,t,o,null,r,s)}for(a in r)if(o=r[a],s=n[a],r.hasOwnProperty(a)&&(null!=o||null!=s))switch(a){case"value":p=o
break
case"defaultValue":u=o
break
case"multiple":i=o
default:o!==s&&of(e,t,a,o,r,s)}return t=u,n=i,r=h,void(null!=p?_t(e,!!n,p,0):!!r!=!!n&&(null!=t?_t(e,!!n,t,1):_t(e,!!n,n?[]:"",0)))
case"textarea":for(u in h=p=null,n)if(a=n[u],n.hasOwnProperty(u)&&null!=a&&!r.hasOwnProperty(u))switch(u){case"value":case"children":break
default:of(e,t,u,null,r,a)}for(i in r)if(a=r[i],o=n[i],r.hasOwnProperty(i)&&(null!=a||null!=o))switch(i){case"value":p=a
break
case"defaultValue":h=a
break
case"children":break
case"dangerouslySetInnerHTML":if(null!=a)throw Error(l(91))
break
default:a!==o&&of(e,t,i,a,r,o)}return void Nt(e,p,h)
case"option":for(var m in n)p=n[m],n.hasOwnProperty(m)&&null!=p&&!r.hasOwnProperty(m)&&("selected"===m?e.selected=0:of(e,t,m,null,r,p))
for(s in r)p=r[s],h=n[s],!r.hasOwnProperty(s)||p===h||null==p&&null==h||("selected"===s?e.selected=p&&"function"!=typeof p&&"symbol"!=typeof p:of(e,t,s,p,r,h))
return
case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var g in n)p=n[g],n.hasOwnProperty(g)&&null!=p&&!r.hasOwnProperty(g)&&of(e,t,g,null,r,p)
for(c in r)if(p=r[c],h=n[c],r.hasOwnProperty(c)&&p!==h&&(null!=p||null!=h))switch(c){case"children":case"dangerouslySetInnerHTML":if(null!=p)throw Error(l(137,t))
break
default:of(e,t,c,p,r,h)}return
default:if(Dt(t)){for(var y in n)p=n[y],n.hasOwnProperty(y)&&void 0!==p&&!r.hasOwnProperty(y)&&uf(e,t,y,void 0,r,p)
for(f in r)p=r[f],h=n[f],!r.hasOwnProperty(f)||p===h||void 0===p&&void 0===h||uf(e,t,f,p,r,h)
return}}for(var v in n)p=n[v],n.hasOwnProperty(v)&&null!=p&&!r.hasOwnProperty(v)&&of(e,t,v,null,r,p)
for(d in r)p=r[d],h=n[d],!r.hasOwnProperty(d)||p===h||null==p&&null==h||of(e,t,d,p,r,h)}(r,e.type,n,t),r[je]=t}catch(a){vc(e,e.return,a)}}function Su(e){return 5===e.tag||3===e.tag||26===e.tag||27===e.tag&&Sf(e.type)||4===e.tag}function Eu(e){e:for(;;){for(;null===e.sibling;){if(null===e.return||Su(e.return))return null
e=e.return}for(e.sibling.return=e.return,e=e.sibling;5!==e.tag&&6!==e.tag&&18!==e.tag;){if(27===e.tag&&Sf(e.type))continue e
if(2&e.flags)continue e
if(null===e.child||4===e.tag)continue e
e.child.return=e,e=e.child}if(!(2&e.flags))return e.stateNode}}function xu(e,t,n){var r=e.tag
if(5===r||6===r)e=e.stateNode,t?(9===n.nodeType?n.body:"HTML"===n.nodeName?n.ownerDocument.body:n).insertBefore(e,t):((t=9===n.nodeType?n.body:"HTML"===n.nodeName?n.ownerDocument.body:n).appendChild(e),null!=(n=n._reactRootContainer)||null!==t.onclick||(t.onclick=lf))
else if(4!==r&&(27===r&&Sf(e.type)&&(n=e.stateNode,t=null),null!==(e=e.child)))for(xu(e,t,n),e=e.sibling;null!==e;)xu(e,t,n),e=e.sibling}function Cu(e,t,n){var r=e.tag
if(5===r||6===r)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e)
else if(4!==r&&(27===r&&Sf(e.type)&&(n=e.stateNode),null!==(e=e.child)))for(Cu(e,t,n),e=e.sibling;null!==e;)Cu(e,t,n),e=e.sibling}function Pu(e){var t=e.stateNode,n=e.memoizedProps
try{for(var r=e.type,a=t.attributes;a.length;)t.removeAttributeNode(a[0])
sf(t,r,n),t[Ue]=e,t[je]=n}catch(l){vc(e,e.return,l)}}var _u=0,Nu=0,zu=0,Tu="function"==typeof WeakSet?WeakSet:Set,Lu=null
function Ru(e,t,n){var r=n.flags
switch(n.tag){case 0:case 11:case 15:Vu(e,n),4&r&&hu(5,n)
break
case 1:if(Vu(e,n),4&r)if(e=n.stateNode,null===t)try{e.componentDidMount()}catch(o){vc(n,n.return,o)}else{var a=xi(n.type,t.memoizedProps)
t=t.memoizedState
try{e.componentDidUpdate(a,t,e.__reactInternalSnapshotBeforeUpdate)}catch(i){vc(n,n.return,i)}}64&r&&gu(n),512&r&&vu(n,n.return)
break
case 3:if(Vu(e,n),64&r&&null!==(e=n.updateQueue)){if(t=null,null!==n.child)switch(n.child.tag){case 27:case 5:case 1:t=n.child.stateNode}try{kl(e,t)}catch(o){vc(n,n.return,o)}}break
case 27:null===t&&4&r&&Pu(n)
case 26:case 5:Vu(e,n),null===t&&4&r&&ku(n),512&r&&vu(n,n.return)
break
case 12:Vu(e,n)
break
case 13:Vu(e,n),4&r&&$u(e,n),64&r&&null!==(e=n.memoizedState)&&null!==(e=e.dehydrated)&&function(e,t){var n=e.ownerDocument
if("$?"!==e.data||"complete"===n.readyState)t()
else{var r=function(){t(),n.removeEventListener("DOMContentLoaded",r)}
n.addEventListener("DOMContentLoaded",r),e._reactRetry=r}}(e,n=Sc.bind(null,n))
break
case 22:if(!(r=null!==n.memoizedState||_u)){t=null!==t&&null!==t.memoizedState||Nu,a=_u
var l=Nu
_u=r,(Nu=t)&&!l?qu(e,n,!!(8772&n.subtreeFlags)):Vu(e,n),_u=a,Nu=l}break
case 30:break
default:Vu(e,n)}}function Ou(e){var t=e.alternate
null!==t&&(e.alternate=null,Ou(t)),e.child=null,e.deletions=null,e.sibling=null,5===e.tag&&null!==(t=e.stateNode)&&Ke(t),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var Du=null,Au=0
function Fu(e,t,n){for(n=n.child;null!==n;)Mu(e,t,n),n=n.sibling}function Mu(e,t,n){if(be&&"function"==typeof be.onCommitFiberUnmount)try{be.onCommitFiberUnmount(ve,n)}catch(l){}switch(n.tag){case 26:Nu||bu(n,t),Fu(e,t,n),n.memoizedState?n.memoizedState.count--:n.stateNode&&(n=n.stateNode).parentNode.removeChild(n)
break
case 27:Nu||bu(n,t)
var r=Du,a=Au
Sf(n.type)&&(Du=n.stateNode,Au=0),Fu(e,t,n),Tf(n.stateNode),Du=r,Au=a
break
case 5:Nu||bu(n,t)
case 6:if(r=Du,a=Au,Du=null,Fu(e,t,n),Au=a,null!==(Du=r))if(Au)try{(9===Du.nodeType?Du.body:"HTML"===Du.nodeName?Du.ownerDocument.body:Du).removeChild(n.stateNode)}catch(o){vc(n,t,o)}else try{Du.removeChild(n.stateNode)}catch(o){vc(n,t,o)}break
case 18:null!==Du&&(Au?(Ef(9===(e=Du).nodeType?e.body:"HTML"===e.nodeName?e.ownerDocument.body:e,n.stateNode),Fd(e)):Ef(Du,n.stateNode))
break
case 4:r=Du,a=Au,Du=n.stateNode.containerInfo,Au=1,Fu(e,t,n),Du=r,Au=a
break
case 0:case 11:case 14:case 15:Nu||mu(2,n,t),Nu||mu(4,n,t),Fu(e,t,n)
break
case 1:Nu||(bu(n,t),"function"==typeof(r=n.stateNode).componentWillUnmount&&yu(n,t,r)),Fu(e,t,n)
break
case 21:Fu(e,t,n)
break
case 22:Nu=(r=Nu)||null!==n.memoizedState,Fu(e,t,n),Nu=r
break
default:Fu(e,t,n)}}function $u(e,t){if(null===t.memoizedState&&null!==(e=t.alternate)&&null!==(e=e.memoizedState)&&null!==(e=e.dehydrated))try{Fd(e)}catch(n){vc(t,t.return,n)}}function Iu(e,t){var n=function(e){switch(e.tag){case 13:case 19:var t=e.stateNode
return null===t&&(t=e.stateNode=new Tu),t
case 22:return null===(t=(e=e.stateNode)._retryCache)&&(t=e._retryCache=new Tu),t
default:throw Error(l(435,e.tag))}}(e)
t.forEach(function(t){var r=Ec.bind(null,e,t)
n.has(t)||(n.add(t),t.then(r,r))})}function Uu(e,t){var n=t.deletions
if(null!==n)for(var r=0;r<n.length;r++){var a=n[r],o=e,i=t,u=i
e:for(;null!==u;){switch(u.tag){case 27:if(Sf(u.type)){Du=u.stateNode,Au=0
break e}break
case 5:Du=u.stateNode,Au=0
break e
case 3:case 4:Du=u.stateNode.containerInfo,Au=1
break e}u=u.return}if(null===Du)throw Error(l(160))
Mu(o,i,a),Du=null,Au=0,null!==(o=a.alternate)&&(o.return=null),a.return=null}if(13878&t.subtreeFlags)for(t=t.child;null!==t;)Hu(t,e),t=t.sibling}var ju=null
function Hu(e,t){var n=e.alternate,r=e.flags
switch(e.tag){case 0:case 11:case 14:case 15:Uu(t,e),Bu(e),4&r&&(mu(3,e,e.return),hu(3,e),mu(5,e,e.return))
break
case 1:Uu(t,e),Bu(e),512&r&&(Nu||null===n||bu(n,n.return)),64&r&&_u&&null!==(e=e.updateQueue)&&null!==(r=e.callbacks)&&(n=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=null===n?r:n.concat(r))
break
case 26:var a=ju
if(Uu(t,e),Bu(e),512&r&&(Nu||null===n||bu(n,n.return)),4&r){var o=null!==n?n.memoizedState:null
if(r=e.memoizedState,null===n)if(null===r)if(null===e.stateNode){e:{r=e.type,n=e.memoizedProps,a=a.ownerDocument||a
t:switch(r){case"title":(!(o=a.getElementsByTagName("title")[0])||o[qe]||o[Ue]||"http://www.w3.org/2000/svg"===o.namespaceURI||o.hasAttribute("itemprop"))&&(o=a.createElement(r),a.head.insertBefore(o,a.querySelector("head > title"))),sf(o,r,n),o[Ue]=e,Ze(o),r=o
break e
case"link":var i=Kf("link","href",a).get(r+(n.href||""))
if(i)for(var u=0;u<i.length;u++)if((o=i[u]).getAttribute("href")===(null==n.href||""===n.href?null:n.href)&&o.getAttribute("rel")===(null==n.rel?null:n.rel)&&o.getAttribute("title")===(null==n.title?null:n.title)&&o.getAttribute("crossorigin")===(null==n.crossOrigin?null:n.crossOrigin)){i.splice(u,1)
break t}sf(o=a.createElement(r),r,n),a.head.appendChild(o)
break
case"meta":if(i=Kf("meta","content",a).get(r+(n.content||"")))for(u=0;u<i.length;u++)if((o=i[u]).getAttribute("content")===(null==n.content?null:""+n.content)&&o.getAttribute("name")===(null==n.name?null:n.name)&&o.getAttribute("property")===(null==n.property?null:n.property)&&o.getAttribute("http-equiv")===(null==n.httpEquiv?null:n.httpEquiv)&&o.getAttribute("charset")===(null==n.charSet?null:n.charSet)){i.splice(u,1)
break t}sf(o=a.createElement(r),r,n),a.head.appendChild(o)
break
default:throw Error(l(468,r))}o[Ue]=e,Ze(o),r=o}e.stateNode=r}else Yf(a,e.type,e.stateNode)
else e.stateNode=Bf(a,r,e.memoizedProps)
else o!==r?(null===o?null!==n.stateNode&&(n=n.stateNode).parentNode.removeChild(n):o.count--,null===r?Yf(a,e.type,e.stateNode):Bf(a,r,e.memoizedProps)):null===r&&null!==e.stateNode&&wu(e,e.memoizedProps,n.memoizedProps)}break
case 27:Uu(t,e),Bu(e),512&r&&(Nu||null===n||bu(n,n.return)),null!==n&&4&r&&wu(e,e.memoizedProps,n.memoizedProps)
break
case 5:if(Uu(t,e),Bu(e),512&r&&(Nu||null===n||bu(n,n.return)),32&e.flags){a=e.stateNode
try{Tt(a,"")}catch(h){vc(e,e.return,h)}}4&r&&null!=e.stateNode&&wu(e,a=e.memoizedProps,null!==n?n.memoizedProps:a),1024&r&&(zu=1)
break
case 6:if(Uu(t,e),Bu(e),4&r){if(null===e.stateNode)throw Error(l(162))
r=e.memoizedProps,n=e.stateNode
try{n.nodeValue=r}catch(h){vc(e,e.return,h)}}break
case 3:if(qf=null,a=ju,ju=Of(t.containerInfo),Uu(t,e),ju=a,Bu(e),4&r&&null!==n&&n.memoizedState.isDehydrated)try{Fd(t.containerInfo)}catch(h){vc(e,e.return,h)}zu&&(zu=0,Wu(e))
break
case 4:r=ju,ju=Of(e.stateNode.containerInfo),Uu(t,e),Bu(e),ju=r
break
case 12:default:Uu(t,e),Bu(e)
break
case 13:Uu(t,e),Bu(e),8192&e.child.flags&&null!==e.memoizedState!=(null!==n&&null!==n.memoizedState)&&(zs=se()),4&r&&null!==(r=e.updateQueue)&&(e.updateQueue=null,Iu(e,r))
break
case 22:a=null!==e.memoizedState
var s=null!==n&&null!==n.memoizedState,c=_u,f=Nu
if(_u=c||a,Nu=f||s,Uu(t,e),Nu=f,_u=c,Bu(e),8192&r)e:for(t=e.stateNode,t._visibility=a?-2&t._visibility:1|t._visibility,a&&(null===n||s||_u||Nu||Qu(e)),n=null,t=e;;){if(5===t.tag||26===t.tag){if(null===n){s=n=t
try{if(o=s.stateNode,a)"function"==typeof(i=o.style).setProperty?i.setProperty("display","none","important"):i.display="none"
else{u=s.stateNode
var d=s.memoizedProps.style,p=null!=d&&d.hasOwnProperty("display")?d.display:null
u.style.display=null==p||"boolean"==typeof p?"":(""+p).trim()}}catch(h){vc(s,s.return,h)}}}else if(6===t.tag){if(null===n){s=t
try{s.stateNode.nodeValue=a?"":s.memoizedProps}catch(h){vc(s,s.return,h)}}}else if((22!==t.tag&&23!==t.tag||null===t.memoizedState||t===e)&&null!==t.child){t.child.return=t,t=t.child
continue}if(t===e)break e
for(;null===t.sibling;){if(null===t.return||t.return===e)break e
n===t&&(n=null),t=t.return}n===t&&(n=null),t.sibling.return=t.return,t=t.sibling}4&r&&null!==(r=e.updateQueue)&&null!==(n=r.retryQueue)&&(r.retryQueue=null,Iu(e,n))
break
case 19:Uu(t,e),Bu(e),4&r&&null!==(r=e.updateQueue)&&(e.updateQueue=null,Iu(e,r))
case 30:case 21:}}function Bu(e){var t=e.flags
if(2&t){try{for(var n,r=e.return;null!==r;){if(Su(r)){n=r
break}r=r.return}if(null==n)throw Error(l(160))
switch(n.tag){case 27:var a=n.stateNode
Cu(e,Eu(e),a)
break
case 5:var o=n.stateNode
32&n.flags&&(Tt(o,""),n.flags&=-33),Cu(e,Eu(e),o)
break
case 3:case 4:var i=n.stateNode.containerInfo
xu(e,Eu(e),i)
break
default:throw Error(l(161))}}catch(u){vc(e,e.return,u)}e.flags&=-3}4096&t&&(e.flags&=-4097)}function Wu(e){if(1024&e.subtreeFlags)for(e=e.child;null!==e;){var t=e
Wu(t),5===t.tag&&1024&t.flags&&t.stateNode.reset(),e=e.sibling}}function Vu(e,t){if(8772&t.subtreeFlags)for(t=t.child;null!==t;)Ru(e,t.alternate,t),t=t.sibling}function Qu(e){for(e=e.child;null!==e;){var t=e
switch(t.tag){case 0:case 11:case 14:case 15:mu(4,t,t.return),Qu(t)
break
case 1:bu(t,t.return)
var n=t.stateNode
"function"==typeof n.componentWillUnmount&&yu(t,t.return,n),Qu(t)
break
case 27:Tf(t.stateNode)
case 26:case 5:bu(t,t.return),Qu(t)
break
case 22:null===t.memoizedState&&Qu(t)
break
default:Qu(t)}e=e.sibling}}function qu(e,t,n){for(n=n&&!!(8772&t.subtreeFlags),t=t.child;null!==t;){var r=t.alternate,a=e,l=t,o=l.flags
switch(l.tag){case 0:case 11:case 15:qu(a,l,n),hu(4,l)
break
case 1:if(qu(a,l,n),"function"==typeof(a=(r=l).stateNode).componentDidMount)try{a.componentDidMount()}catch(s){vc(r,r.return,s)}if(null!==(a=(r=l).updateQueue)){var i=r.stateNode
try{var u=a.shared.hiddenCallbacks
if(null!==u)for(a.shared.hiddenCallbacks=null,a=0;a<u.length;a++)bl(u[a],i)}catch(s){vc(r,r.return,s)}}n&&64&o&&gu(l),vu(l,l.return)
break
case 27:Pu(l)
case 26:case 5:qu(a,l,n),n&&null===r&&4&o&&ku(l),vu(l,l.return)
break
case 12:qu(a,l,n)
break
case 13:qu(a,l,n),n&&4&o&&$u(a,l)
break
case 22:null===l.memoizedState&&qu(a,l,n),vu(l,l.return)
break
case 30:break
default:qu(a,l,n)}t=t.sibling}}function Ku(e,t){var n=null
null!==e&&null!==e.memoizedState&&null!==e.memoizedState.cachePool&&(n=e.memoizedState.cachePool.pool),e=null,null!==t.memoizedState&&null!==t.memoizedState.cachePool&&(e=t.memoizedState.cachePool.pool),e!==n&&(null!=e&&e.refCount++,null!=n&&Ha(n))}function Yu(e,t){e=null,null!==t.alternate&&(e=t.alternate.memoizedState.cache),(t=t.memoizedState.cache)!==e&&(t.refCount++,null!=e&&Ha(e))}function Gu(e,t,n,r){if(10256&t.subtreeFlags)for(t=t.child;null!==t;)Xu(e,t,n,r),t=t.sibling}function Xu(e,t,n,r){var a=t.flags
switch(t.tag){case 0:case 11:case 15:Gu(e,t,n,r),2048&a&&hu(9,t)
break
case 1:case 13:default:Gu(e,t,n,r)
break
case 3:Gu(e,t,n,r),2048&a&&(e=null,null!==t.alternate&&(e=t.alternate.memoizedState.cache),(t=t.memoizedState.cache)!==e&&(t.refCount++,null!=e&&Ha(e)))
break
case 12:if(2048&a){Gu(e,t,n,r),e=t.stateNode
try{var l=t.memoizedProps,o=l.id,i=l.onPostCommit
"function"==typeof i&&i(o,null===t.alternate?"mount":"update",e.passiveEffectDuration,-0)}catch(u){vc(t,t.return,u)}}else Gu(e,t,n,r)
break
case 23:break
case 22:l=t.stateNode,o=t.alternate,null!==t.memoizedState?2&l._visibility?Gu(e,t,n,r):Zu(e,t):2&l._visibility?Gu(e,t,n,r):(l._visibility|=2,Ju(e,t,n,r,!!(10256&t.subtreeFlags))),2048&a&&Ku(o,t)
break
case 24:Gu(e,t,n,r),2048&a&&Yu(t.alternate,t)}}function Ju(e,t,n,r,a){for(a=a&&!!(10256&t.subtreeFlags),t=t.child;null!==t;){var l=e,o=t,i=n,u=r,s=o.flags
switch(o.tag){case 0:case 11:case 15:Ju(l,o,i,u,a),hu(8,o)
break
case 23:break
case 22:var c=o.stateNode
null!==o.memoizedState?2&c._visibility?Ju(l,o,i,u,a):Zu(l,o):(c._visibility|=2,Ju(l,o,i,u,a)),a&&2048&s&&Ku(o.alternate,o)
break
case 24:Ju(l,o,i,u,a),a&&2048&s&&Yu(o.alternate,o)
break
default:Ju(l,o,i,u,a)}t=t.sibling}}function Zu(e,t){if(10256&t.subtreeFlags)for(t=t.child;null!==t;){var n=e,r=t,a=r.flags
switch(r.tag){case 22:Zu(n,r),2048&a&&Ku(r.alternate,r)
break
case 24:Zu(n,r),2048&a&&Yu(r.alternate,r)
break
default:Zu(n,r)}t=t.sibling}}var es=8192
function ts(e){if(e.subtreeFlags&es)for(e=e.child;null!==e;)ns(e),e=e.sibling}function ns(e){switch(e.tag){case 26:ts(e),e.flags&es&&null!==e.memoizedState&&function(e,t,n){if(null===Xf)throw Error(l(475))
var r=Xf
if(!("stylesheet"!==t.type||"string"==typeof n.media&&0==matchMedia(n.media).matches||4&t.state.loading)){if(null===t.instance){var a=$f(n.href),o=e.querySelector(If(a))
if(o)return null!==(e=o._p)&&"object"==typeof e&&"function"==typeof e.then&&(r.count++,r=Zf.bind(r),e.then(r,r)),t.state.loading|=4,t.instance=o,void Ze(o)
o=e.ownerDocument||e,n=Uf(n),(a=Lf.get(a))&&Vf(n,a),Ze(o=o.createElement("link"))
var i=o
i._p=new Promise(function(e,t){i.onload=e,i.onerror=t}),sf(o,"link",n),t.instance=o}null===r.stylesheets&&(r.stylesheets=new Map),r.stylesheets.set(t,e),(e=t.state.preload)&&!(3&t.state.loading)&&(r.count++,t=Zf.bind(r),e.addEventListener("load",t),e.addEventListener("error",t))}}(ju,e.memoizedState,e.memoizedProps)
break
case 5:default:ts(e)
break
case 3:case 4:var t=ju
ju=Of(e.stateNode.containerInfo),ts(e),ju=t
break
case 22:null===e.memoizedState&&(null!==(t=e.alternate)&&null!==t.memoizedState?(t=es,es=16777216,ts(e),es=t):ts(e))}}function rs(e){var t=e.alternate
if(null!==t&&null!==(e=t.child)){t.child=null
do{t=e.sibling,e.sibling=null,e=t}while(null!==e)}}function as(e){var t=e.deletions
if(16&e.flags){if(null!==t)for(var n=0;n<t.length;n++){var r=t[n]
Lu=r,is(r,e)}rs(e)}if(10256&e.subtreeFlags)for(e=e.child;null!==e;)ls(e),e=e.sibling}function ls(e){switch(e.tag){case 0:case 11:case 15:as(e),2048&e.flags&&mu(9,e,e.return)
break
case 3:case 12:default:as(e)
break
case 22:var t=e.stateNode
null!==e.memoizedState&&2&t._visibility&&(null===e.return||13!==e.return.tag)?(t._visibility&=-3,os(e)):as(e)}}function os(e){var t=e.deletions
if(16&e.flags){if(null!==t)for(var n=0;n<t.length;n++){var r=t[n]
Lu=r,is(r,e)}rs(e)}for(e=e.child;null!==e;){switch((t=e).tag){case 0:case 11:case 15:mu(8,t,t.return),os(t)
break
case 22:2&(n=t.stateNode)._visibility&&(n._visibility&=-3,os(t))
break
default:os(t)}e=e.sibling}}function is(e,t){for(;null!==Lu;){var n=Lu
switch(n.tag){case 0:case 11:case 15:mu(8,n,t)
break
case 23:case 22:if(null!==n.memoizedState&&null!==n.memoizedState.cachePool){var r=n.memoizedState.cachePool.pool
null!=r&&r.refCount++}break
case 24:Ha(n.memoizedState.cache)}if(null!==(r=n.child))r.return=n,Lu=r
else e:for(n=e;null!==Lu;){var a=(r=Lu).sibling,l=r.return
if(Ou(r),r===n){Lu=null
break e}if(null!==a){a.return=l,Lu=a
break e}Lu=l}}}var us={getCacheForType:function(e){var t=Da(Ua),n=t.data.get(e)
return void 0===n&&(n=e(),t.data.set(e,n)),n}},ss="function"==typeof WeakMap?WeakMap:Map,cs=0,fs=null,ds=null,ps=0,hs=0,ms=null,gs=0,ys=0,vs=0,bs=0,ks=0,ws=0,Ss=0,Es=0,xs=0,Cs=0,Ps=null,_s=null,Ns=0,zs=0,Ts=1/0,Ls=null,Rs=null,Os=0,Ds=null,As=null,Fs=0,Ms=0,$s=null,Is=null,Us=0,js=null
function Hs(){return 2&cs&&0!==ps?ps&-ps:null!==H.T?0!==Va?Va:Mc():$e()}function Bs(){0===xs&&(xs=536870912&ps&&!pa?536870912:Te())
var e=di.current
return null!==e&&(e.flags|=32),xs}function Ws(e,t,n){(e!==fs||2!==hs&&9!==hs)&&null===e.cancelPendingCommit||(Xs(e,0),Ks(e,ps,xs,0)),Oe(e,n),2&cs&&e===fs||(e===fs&&(!(2&cs)&&(Ss|=n),4===ks&&Ks(e,ps,xs,0)),Tc(e))}function Vs(e,t,n){if(6&cs)throw Error(l(327))
for(var r=!n&&!(124&t)&&0===(t&e.expiredLanes)||Ne(e,t),a=r?function(e,t){var n=cs
cs|=2
var r=Zs(),a=ec()
fs!==e||ps!==t?(Ls=null,Ts=se()+500,Xs(e,t)):ys=Ne(e,t)
e:for(;;)try{if(0!==hs&&null!==ds){t=ds
var o=ms
t:switch(hs){case 1:hs=0,ms=null,ic(e,t,o,1)
break
case 2:case 9:if(rl(o)){hs=0,ms=null,oc(t)
break}t=function(){2!==hs&&9!==hs||fs!==e||(hs=7),Tc(e)},o.then(t,t)
break e
case 3:hs=7
break e
case 4:hs=5
break e
case 7:rl(o)?(hs=0,ms=null,oc(t)):(hs=0,ms=null,ic(e,t,o,7))
break
case 5:var i=null
switch(ds.tag){case 26:i=ds.memoizedState
case 5:case 27:var u=ds
if(!i||Gf(i)){hs=0,ms=null
var s=u.sibling
if(null!==s)ds=s
else{var c=u.return
null!==c?(ds=c,uc(c)):ds=null}break t}}hs=0,ms=null,ic(e,t,o,5)
break
case 6:hs=0,ms=null,ic(e,t,o,6)
break
case 8:Gs(),ks=6
break e
default:throw Error(l(462))}}ac()
break}catch(f){Js(e,f)}return Pa=Ca=null,H.H=r,H.A=a,cs=n,null!==ds?0:(fs=null,ps=0,Fr(),ks)}(e,t):nc(e,t,1),o=r;;){if(0===a){ys&&!r&&Ks(e,t,0,0)
break}if(n=e.current.alternate,!o||qs(n)){if(2===a){if(o=t,e.errorRecoveryDisabledLanes&o)var i=0
else i=0!=(i=-536870913&e.pendingLanes)?i:536870912&i?536870912:0
if(0!==i){t=i
e:{var u=e
a=Ps
var s=u.current.memoizedState.isDehydrated
if(s&&(Xs(u,i).flags|=256),2!==(i=nc(u,i,0))){if(vs&&!s){u.errorRecoveryDisabledLanes|=o,Ss|=o,a=4
break e}o=_s,_s=a,null!==o&&(null===_s?_s=o:_s.push.apply(_s,o))}a=i}if(o=0,2!==a)continue}}if(1===a){Xs(e,0),Ks(e,t,0,1)
break}e:{switch(r=e,o=a){case 0:case 1:throw Error(l(345))
case 4:if((4194048&t)!==t)break
case 6:Ks(r,t,xs,!gs)
break e
case 2:_s=null
break
case 3:case 5:break
default:throw Error(l(329))}if((62914560&t)===t&&(a=zs+300-se())>10){if(Ks(r,t,xs,!gs),0!==_e(r,0,1))break e
r.timeoutHandle=yf(Qs.bind(null,r,n,_s,Ls,Ns,t,xs,Ss,Cs,gs,o,2,-0,0),a)}else Qs(r,n,_s,Ls,Ns,t,xs,Ss,Cs,gs,o,0,-0,0)}break}a=nc(e,t,0),o=0}Tc(e)}function Qs(e,t,n,r,a,o,i,u,s,c,f,d,p,h){if(e.timeoutHandle=-1,(8192&(d=t.subtreeFlags)||!(16785408&~d))&&(Xf={stylesheets:null,count:0,unsuspend:Jf},ns(t),null!==(d=function(){if(null===Xf)throw Error(l(475))
var e=Xf
return e.stylesheets&&0===e.count&&td(e,e.stylesheets),e.count>0?function(t){var n=setTimeout(function(){if(e.stylesheets&&td(e,e.stylesheets),e.unsuspend){var t=e.unsuspend
e.unsuspend=null,t()}},6e4)
return e.unsuspend=t,function(){e.unsuspend=null,clearTimeout(n)}}:null}())))return e.cancelPendingCommit=d(cc.bind(null,e,t,o,n,r,a,i,u,s,f,1,p,h)),void Ks(e,o,i,!c)
cc(e,t,o,n,r,a,i,u,s)}function qs(e){for(var t=e;;){var n=t.tag
if((0===n||11===n||15===n)&&16384&t.flags&&null!==(n=t.updateQueue)&&null!==(n=n.stores))for(var r=0;r<n.length;r++){var a=n[r],l=a.getSnapshot
a=a.value
try{if(!rr(l(),a))return 0}catch(o){return 0}}if(n=t.child,16384&t.subtreeFlags&&null!==n)n.return=t,t=n
else{if(t===e)break
for(;null===t.sibling;){if(null===t.return||t.return===e)return 1
t=t.return}t.sibling.return=t.return,t=t.sibling}}return 1}function Ks(e,t,n,r){t&=~Es,t&=~Ss,e.suspendedLanes|=t,e.pingedLanes&=~t,r&&(e.warmLanes|=t),r=e.expirationTimes
for(var a=t;a>0;){var l=31-we(a),o=1<<l
r[l]=-1,a&=~o}0!==n&&De(e,n,t)}function Ys(){return 6&cs?1:(Lc(0),0)}function Gs(){if(null!==ds){if(0===hs)var e=ds.return
else Pa=Ca=null,Vl(e=ds),ri=null,ai=0,e=ds
for(;null!==e;)pu(e.alternate,e),e=e.return
ds=null}}function Xs(e,t){var n=e.timeoutHandle;-1!==n&&(e.timeoutHandle=-1,vf(n)),null!==(n=e.cancelPendingCommit)&&(e.cancelPendingCommit=null,n()),Gs(),fs=e,ds=n=Qr(e.current,null),ps=t,hs=0,ms=null,gs=0,ys=Ne(e,t),vs=0,Cs=xs=Es=Ss=ws=ks=0,_s=Ps=null,Ns=0,8&t&&(t|=32&t)
var r=e.entangledLanes
if(0!==r)for(e=e.entanglements,r&=t;r>0;){var a=31-we(r),l=1<<a
t|=e[a],r&=~l}return bs=t,Fr(),n}function Js(e,t){_l=null,H.H=Zo,t===Za||t===tl?(t=il(),hs=3):t===el?(t=il(),hs=4):hs=t===Di?8:null!==t&&"object"==typeof t&&"function"==typeof t.then?6:1,ms=t,null===ds&&(ks=1,zi(e,Rr(t,e.current)))}function Zs(){var e=H.H
return H.H=Zo,null===e?Zo:e}function ec(){var e=H.A
return H.A=us,e}function tc(){ks=4,gs||(4194048&ps)!==ps&&null!==di.current||(ys=1),!(134217727&ws)&&!(134217727&Ss)||null===fs||Ks(fs,ps,xs,0)}function nc(e,t,n){var r=cs
cs|=2
var a=Zs(),l=ec()
fs===e&&ps===t||(Ls=null,Xs(e,t)),t=0
var o=ks
e:for(;;)try{if(0!==hs&&null!==ds){var i=ds,u=ms
switch(hs){case 8:Gs(),o=6
break e
case 3:case 2:case 9:case 6:null===di.current&&(t=1)
var s=hs
if(hs=0,ms=null,ic(e,i,u,s),n&&ys){o=0
break e}break
default:s=hs,hs=0,ms=null,ic(e,i,u,s)}}rc(),o=ks
break}catch(c){Js(e,c)}return t&&e.shellSuspendCounter++,Pa=Ca=null,cs=r,H.H=a,H.A=l,null===ds&&(fs=null,ps=0,Fr()),o}function rc(){for(;null!==ds;)lc(ds)}function ac(){for(;null!==ds&&!ie();)lc(ds)}function lc(e){var t=lu(e.alternate,e,bs)
e.memoizedProps=e.pendingProps,null===t?uc(e):ds=t}function oc(e){var t=e,n=t.alternate
switch(t.tag){case 15:case 0:t=Wi(n,t,t.pendingProps,t.type,void 0,ps)
break
case 11:t=Wi(n,t,t.pendingProps,t.type.render,t.ref,ps)
break
case 5:Vl(t)
default:pu(n,t),t=lu(n,t=ds=qr(t,bs),bs)}e.memoizedProps=e.pendingProps,null===t?uc(e):ds=t}function ic(e,t,n,r){Pa=Ca=null,Vl(t),ri=null,ai=0
var a=t.return
try{if(function(e,t,n,r,a){if(n.flags|=32768,null!==r&&"object"==typeof r&&"function"==typeof r.then){if(null!==(t=n.alternate)&&La(t,n,a,1),null!==(n=di.current)){switch(n.tag){case 13:return null===pi?tc():null===n.alternate&&0===ks&&(ks=3),n.flags&=-257,n.flags|=65536,n.lanes=a,r===nl?n.flags|=16384:(null===(t=n.updateQueue)?n.updateQueue=new Set([r]):t.add(r),bc(e,r,a)),0
case 22:return n.flags|=65536,r===nl?n.flags|=16384:(null===(t=n.updateQueue)?(t={transitions:null,markerInstances:null,retryQueue:new Set([r])},n.updateQueue=t):null===(n=t.retryQueue)?t.retryQueue=new Set([r]):n.add(r),bc(e,r,a)),0}throw Error(l(435,n.tag))}return bc(e,r,a),tc(),0}if(pa)return null!==(t=di.current)?(!(65536&t.flags)&&(t.flags|=256),t.flags|=65536,t.lanes=a,r!==ga&&Ea(Rr(e=Error(l(422),{cause:r}),n))):(r!==ga&&Ea(Rr(t=Error(l(423),{cause:r}),n)),(e=e.current.alternate).flags|=65536,a&=-a,e.lanes|=a,r=Rr(r,n),ml(e,a=Li(e.stateNode,r,a)),4!==ks&&(ks=2)),0
var o=Error(l(520),{cause:r})
if(o=Rr(o,n),null===Ps?Ps=[o]:Ps.push(o),4!==ks&&(ks=2),null===t)return 1
r=Rr(r,n),n=t
do{switch(n.tag){case 3:return n.flags|=65536,e=a&-a,n.lanes|=e,ml(n,e=Li(n.stateNode,r,e)),0
case 1:if(t=n.type,o=n.stateNode,!(128&n.flags||"function"!=typeof t.getDerivedStateFromError&&(null===o||"function"!=typeof o.componentDidCatch||null!==Rs&&Rs.has(o))))return n.flags|=65536,a&=-a,n.lanes|=a,Oi(a=Ri(a),e,n,r),ml(n,a),0}n=n.return}while(null!==n)
return 0}(e,a,t,n,ps))return ks=1,zi(e,Rr(n,e.current)),void(ds=null)}catch(o){if(null!==a)throw ds=a,o
return ks=1,zi(e,Rr(n,e.current)),void(ds=null)}32768&t.flags?(pa||1===r?e=1:ys||536870912&ps?e=0:(gs=e=1,(2===r||9===r||3===r||6===r)&&null!==(r=di.current)&&13===r.tag&&(r.flags|=16384)),sc(t,e)):uc(t)}function uc(e){var t=e
do{if(32768&t.flags)return void sc(t,gs)
e=t.return
var n=fu(t.alternate,t,bs)
if(null!==n)return void(ds=n)
if(null!==(t=t.sibling))return void(ds=t)
ds=t=e}while(null!==t)
0===ks&&(ks=5)}function sc(e,t){do{var n=du(e.alternate,e)
if(null!==n)return n.flags&=32767,void(ds=n)
if(null!==(n=e.return)&&(n.flags|=32768,n.subtreeFlags=0,n.deletions=null),!t&&null!==(e=e.sibling))return void(ds=e)
ds=e=n}while(null!==e)
ks=6,ds=null}function cc(e,t,n,r,a,o,i,u,s){e.cancelPendingCommit=null
do{mc()}while(0!==Os)
if(6&cs)throw Error(l(327))
if(null!==t){if(t===e.current)throw Error(l(177))
if(o=t.lanes|t.childLanes,function(e,t,n,r,a,l){var o=e.pendingLanes
e.pendingLanes=n,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=n,e.entangledLanes&=n,e.errorRecoveryDisabledLanes&=n,e.shellSuspendCounter=0
var i=e.entanglements,u=e.expirationTimes,s=e.hiddenUpdates
for(n=o&~n;n>0;){var c=31-we(n),f=1<<c
i[c]=0,u[c]=-1
var d=s[c]
if(null!==d)for(s[c]=null,c=0;c<d.length;c++){var p=d[c]
null!==p&&(p.lane&=-536870913)}n&=~f}0!==r&&De(e,r,0),0!==l&&0===a&&0!==e.tag&&(e.suspendedLanes|=l&~(o&~t))}(e,n,o|=Ar,i,u,s),e===fs&&(ds=fs=null,ps=0),As=t,Ds=e,Fs=n,Ms=o,$s=a,Is=r,10256&t.subtreeFlags||10256&t.flags?(e.callbackNode=null,e.callbackPriority=0,le(pe,function(){return gc(),null})):(e.callbackNode=null,e.callbackPriority=0),r=!!(13878&t.flags),13878&t.subtreeFlags||r){r=H.T,H.T=null,a=B.p,B.p=2,i=cs,cs|=4
try{!function(e,t){if(e=e.containerInfo,cf=fd,sr(e=ur(e))){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd}
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
for(ff={focusedElem:e,selectionRange:n},fd=0,Lu=t;null!==Lu;)if(e=(t=Lu).child,1024&t.subtreeFlags&&null!==e)e.return=t,Lu=e
else for(;null!==Lu;){switch(o=(t=Lu).alternate,e=t.flags,t.tag){case 0:case 11:case 15:case 5:case 26:case 27:case 6:case 4:case 17:break
case 1:if(1024&e&&null!==o){e=void 0,n=t,a=o.memoizedProps,o=o.memoizedState,r=n.stateNode
try{var m=xi(n.type,a,(n.elementType,n.type))
e=r.getSnapshotBeforeUpdate(m,o),r.__reactInternalSnapshotBeforeUpdate=e}catch(y){vc(n,n.return,y)}}break
case 3:if(1024&e)if(9===(n=(e=t.stateNode.containerInfo).nodeType))xf(e)
else if(1===n)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":xf(e)
break
default:e.textContent=""}break
default:if(1024&e)throw Error(l(163))}if(null!==(e=t.sibling)){e.return=t.return,Lu=e
break}Lu=t.return}}(e,t)}finally{cs=i,B.p=a,H.T=r}}Os=1,fc(),dc(),pc()}}function fc(){if(1===Os){Os=0
var e=Ds,t=As,n=!!(13878&t.flags)
if(13878&t.subtreeFlags||n){n=H.T,H.T=null
var r=B.p
B.p=2
var a=cs
cs|=4
try{Hu(t,e)
var l=ff,o=ur(e.containerInfo),i=l.focusedElem,u=l.selectionRange
if(o!==i&&i&&i.ownerDocument&&ir(i.ownerDocument.documentElement,i)){if(null!==u&&sr(i)){var s=u.start,c=u.end
if(void 0===c&&(c=s),"selectionStart"in i)i.selectionStart=s,i.selectionEnd=Math.min(c,i.value.length)
else{var f=i.ownerDocument||document,d=f&&f.defaultView||window
if(d.getSelection){var p=d.getSelection(),h=i.textContent.length,m=Math.min(u.start,h),g=void 0===u.end?m:Math.min(u.end,h)
!p.extend&&m>g&&(o=g,g=m,m=o)
var y=or(i,m),v=or(i,g)
if(y&&v&&(1!==p.rangeCount||p.anchorNode!==y.node||p.anchorOffset!==y.offset||p.focusNode!==v.node||p.focusOffset!==v.offset)){var b=f.createRange()
b.setStart(y.node,y.offset),p.removeAllRanges(),m>g?(p.addRange(b),p.extend(v.node,v.offset)):(b.setEnd(v.node,v.offset),p.addRange(b))}}}}for(f=[],p=i;p=p.parentNode;)1===p.nodeType&&f.push({element:p,left:p.scrollLeft,top:p.scrollTop})
for("function"==typeof i.focus&&i.focus(),i=0;i<f.length;i++){var k=f[i]
k.element.scrollLeft=k.left,k.element.scrollTop=k.top}}fd=!!cf,ff=cf=null}finally{cs=a,B.p=r,H.T=n}}e.current=t,Os=2}}function dc(){if(2===Os){Os=0
var e=Ds,t=As,n=!!(8772&t.flags)
if(8772&t.subtreeFlags||n){n=H.T,H.T=null
var r=B.p
B.p=2
var a=cs
cs|=4
try{Ru(e,t.alternate,t)}finally{cs=a,B.p=r,H.T=n}}Os=3}}function pc(){if(4===Os||3===Os){Os=0,ue()
var e=Ds,t=As,n=Fs,r=Is
10256&t.subtreeFlags||10256&t.flags?Os=5:(Os=0,As=Ds=null,hc(e,e.pendingLanes))
var a=e.pendingLanes
if(0===a&&(Rs=null),Me(n),t=t.stateNode,be&&"function"==typeof be.onCommitFiberRoot)try{be.onCommitFiberRoot(ve,t,void 0,!(128&~t.current.flags))}catch(u){}if(null!==r){t=H.T,a=B.p,B.p=2,H.T=null
try{for(var l=e.onRecoverableError,o=0;o<r.length;o++){var i=r[o]
l(i.value,{componentStack:i.stack})}}finally{H.T=t,B.p=a}}3&Fs&&mc(),Tc(e),a=e.pendingLanes,4194090&n&&42&a?e===js?Us++:(Us=0,js=e):Us=0,Lc(0)}}function hc(e,t){0===(e.pooledCacheLanes&=t)&&null!=(t=e.pooledCache)&&(e.pooledCache=null,Ha(t))}function mc(){return fc(),dc(),pc(),gc()}function gc(){if(5!==Os)return 0
var e=Ds,t=Ms
Ms=0
var n=Me(Fs),r=H.T,a=B.p
try{B.p=32>n?32:n,H.T=null,n=$s,$s=null
var o=Ds,i=Fs
if(Os=0,As=Ds=null,Fs=0,6&cs)throw Error(l(331))
var u=cs
if(cs|=4,ls(o.current),Xu(o,o.current,i,n),cs=u,Lc(0),be&&"function"==typeof be.onPostCommitFiberRoot)try{be.onPostCommitFiberRoot(ve,o)}catch(s){}return 1}finally{B.p=a,H.T=r,hc(e,t)}}function yc(e,t,n){t=Rr(n,t),null!==(e=pl(e,t=Li(e.stateNode,t,2),2))&&(Oe(e,2),Tc(e))}function vc(e,t,n){if(3===e.tag)yc(e,e,n)
else for(;null!==t;){if(3===t.tag){yc(t,e,n)
break}if(1===t.tag){var r=t.stateNode
if("function"==typeof t.type.getDerivedStateFromError||"function"==typeof r.componentDidCatch&&(null===Rs||!Rs.has(r))){e=Rr(n,e),null!==(r=pl(t,n=Ri(2),2))&&(Oi(n,r,t,e),Oe(r,2),Tc(r))
break}}t=t.return}}function bc(e,t,n){var r=e.pingCache
if(null===r){r=e.pingCache=new ss
var a=new Set
r.set(t,a)}else void 0===(a=r.get(t))&&(a=new Set,r.set(t,a))
a.has(n)||(vs=1,a.add(n),e=kc.bind(null,e,t,n),t.then(e,e))}function kc(e,t,n){var r=e.pingCache
null!==r&&r.delete(t),e.pingedLanes|=e.suspendedLanes&n,e.warmLanes&=~n,fs===e&&(ps&n)===n&&(4===ks||3===ks&&(62914560&ps)===ps&&300>se()-zs?!(2&cs)&&Xs(e,0):Es|=n,Cs===ps&&(Cs=0)),Tc(e)}function wc(e,t){0===t&&(t=Le()),null!==(e=Ir(e,t))&&(Oe(e,t),Tc(e))}function Sc(e){var t=e.memoizedState,n=0
null!==t&&(n=t.retryLane),wc(e,n)}function Ec(e,t){var n=0
switch(e.tag){case 13:var r=e.stateNode,a=e.memoizedState
null!==a&&(n=a.retryLane)
break
case 19:r=e.stateNode
break
case 22:r=e.stateNode._retryCache
break
default:throw Error(l(314))}null!==r&&r.delete(t),wc(e,n)}var xc=null,Cc=null,Pc=0,_c=0,Nc=0,zc=0
function Tc(e){e!==Cc&&null===e.next&&(null===Cc?xc=Cc=e:Cc=Cc.next=e),_c=1,Pc||(Pc=1,kf(function(){6&cs?le(fe,Rc):Oc()}))}function Lc(e){if(!Nc&&_c){Nc=1
do{for(var t=0,n=xc;null!==n;){if(0!==e){var r=n.pendingLanes
if(0===r)var a=0
else{var l=n.suspendedLanes,o=n.pingedLanes
a=(1<<31-we(42|e)+1)-1,a=201326741&(a&=r&~(l&~o))?201326741&a|1:a?2|a:0}0!==a&&(t=1,Fc(n,a))}else a=ps,!(3&(a=_e(n,n===fs?a:0,null!==n.cancelPendingCommit||-1!==n.timeoutHandle)))||Ne(n,a)||(t=1,Fc(n,a))
n=n.next}}while(t)
Nc=0}}function Rc(){Oc()}function Oc(){_c=Pc=0
var e,t=0
0!==zc&&(((e=window.event)&&"popstate"===e.type?e===gf?0:(gf=e,1):(gf=null,0))&&(t=zc),zc=0)
for(var n=se(),r=null,a=xc;null!==a;){var l=a.next,o=Dc(a,n)
0===o?(a.next=null,null===r?xc=l:r.next=l,null===l&&(Cc=r)):(r=a,(0!==t||3&o)&&(_c=1)),a=l}Lc(t)}function Dc(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,a=e.expirationTimes,l=-62914561&e.pendingLanes;l>0;){var o=31-we(l),i=1<<o,u=a[o];-1===u?0!==(i&n)&&0===(i&r)||(a[o]=ze(i,t)):t>=u&&(e.expiredLanes|=i),l&=~i}if(n=ps,n=_e(e,e===(t=fs)?n:0,null!==e.cancelPendingCommit||-1!==e.timeoutHandle),r=e.callbackNode,0===n||e===t&&(2===hs||9===hs)||null!==e.cancelPendingCommit)return null!==r&&null!==r&&oe(r),e.callbackNode=null,e.callbackPriority=0
if(!(3&n)||Ne(e,n)){if((t=n&-n)===e.callbackPriority)return t
switch(null!==r&&oe(r),Me(n)){case 2:case 8:n=de
break
case 32:default:n=pe
break
case 268435456:n=me}return r=Ac.bind(null,e),n=le(n,r),e.callbackPriority=t,e.callbackNode=n,t}return null!==r&&null!==r&&oe(r),e.callbackPriority=2,e.callbackNode=null,2}function Ac(e,t){if(0!==Os&&5!==Os)return e.callbackNode=null,e.callbackPriority=0,null
var n=e.callbackNode
if(mc()&&e.callbackNode!==n)return null
var r=ps
return 0===(r=_e(e,e===fs?r:0,null!==e.cancelPendingCommit||-1!==e.timeoutHandle))?null:(Vs(e,r,t),Dc(e,se()),null!=e.callbackNode&&e.callbackNode===n?Ac.bind(null,e):null)}function Fc(e,t){if(mc())return null
Vs(e,t,1)}function Mc(){return 0===zc&&(zc=Te()),zc}function $c(e){return null==e||"symbol"==typeof e||"boolean"==typeof e?null:"function"==typeof e?e:Mt(""+e)}function Ic(e,t){var n=t.ownerDocument.createElement("input")
return n.name=t.name,n.value=t.value,e.id&&n.setAttribute("form",e.id),t.parentNode.insertBefore(n,t),e=new FormData(e),n.parentNode.removeChild(n),e}for(var Uc=0;Uc<zr.length;Uc++){var jc=zr[Uc]
Tr(jc.toLowerCase(),"on"+(jc[0].toUpperCase()+jc.slice(1)))}Tr(wr,"onAnimationEnd"),Tr(Sr,"onAnimationIteration"),Tr(Er,"onAnimationStart"),Tr("dblclick","onDoubleClick"),Tr("focusin","onFocus"),Tr("focusout","onBlur"),Tr(xr,"onTransitionRun"),Tr(Cr,"onTransitionStart"),Tr(Pr,"onTransitionCancel"),Tr(_r,"onTransitionEnd"),rt("onMouseEnter",["mouseout","mouseover"]),rt("onMouseLeave",["mouseout","mouseover"]),rt("onPointerEnter",["pointerout","pointerover"]),rt("onPointerLeave",["pointerout","pointerover"]),nt("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),nt("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),nt("onBeforeInput",["compositionend","keypress","textInput","paste"]),nt("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),nt("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),nt("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "))
var Hc="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Bc=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Hc))
function Wc(e,t){t=!!(4&t)
for(var n=0;n<e.length;n++){var r=e[n],a=r.event
r=r.listeners
e:{var l=void 0
if(t)for(var o=r.length-1;o>=0;o--){var i=r[o],u=i.instance,s=i.currentTarget
if(i=i.listener,u!==l&&a.isPropagationStopped())break e
l=i,a.currentTarget=s
try{l(a)}catch(c){Ci(c)}a.currentTarget=null,l=u}else for(o=0;o<r.length;o++){if(u=(i=r[o]).instance,s=i.currentTarget,i=i.listener,u!==l&&a.isPropagationStopped())break e
l=i,a.currentTarget=s
try{l(a)}catch(c){Ci(c)}a.currentTarget=null,l=u}}}}function Vc(e,t){var n=t[Be]
void 0===n&&(n=t[Be]=new Set)
var r=e+"__bubble"
n.has(r)||(Yc(t,e,2,0),n.add(r))}function Qc(e,t,n){var r=0
t&&(r|=4),Yc(n,e,r,t)}var qc="_reactListening"+Math.random().toString(36).slice(2)
function Kc(e){if(!e[qc]){e[qc]=1,et.forEach(function(t){"selectionchange"!==t&&(Bc.has(t)||Qc(t,0,e),Qc(t,1,e))})
var t=9===e.nodeType?e:e.ownerDocument
null===t||t[qc]||(t[qc]=1,Qc("selectionchange",0,t))}}function Yc(e,t,n,r){switch(vd(t)){case 2:var a=dd
break
case 8:a=pd
break
default:a=hd}n=a.bind(null,t,n,e),a=void 0,!qt||"touchstart"!==t&&"touchmove"!==t&&"wheel"!==t||(a=1),r?void 0!==a?e.addEventListener(t,n,{capture:1,passive:a}):e.addEventListener(t,n,1):void 0!==a?e.addEventListener(t,n,{passive:a}):e.addEventListener(t,n,0)}function Gc(e,t,n,r,a){var l=r
if(!(1&t||2&t||null===r))e:for(;;){if(null===r)return
var o=r.tag
if(3===o||4===o){var u=r.stateNode.containerInfo
if(u===a)break
if(4===o)for(o=r.return;null!==o;){var s=o.tag
if((3===s||4===s)&&o.stateNode.containerInfo===a)return
o=o.return}for(;null!==u;){if(null===(o=Ye(u)))return
if(5===(s=o.tag)||6===s||26===s||27===s){r=l=o
continue e}u=u.parentNode}}r=r.return}Wt(function(){var r=l,a=It(n),o=[]
e:{var u=Nr.get(e)
if(void 0!==u){var s=un,c=e
switch(e){case"keypress":if(0===Zt(n))break e
case"keydown":case"keyup":s=En
break
case"focusin":c="focus",s=hn
break
case"focusout":c="blur",s=hn
break
case"beforeblur":case"afterblur":s=hn
break
case"click":if(2===n.button)break e
case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":s=dn
break
case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":s=pn
break
case"touchcancel":case"touchend":case"touchmove":case"touchstart":s=Cn
break
case wr:case Sr:case Er:s=mn
break
case _r:s=Pn
break
case"scroll":case"scrollend":s=cn
break
case"wheel":s=_n
break
case"copy":case"cut":case"paste":s=gn
break
case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":s=xn
break
case"toggle":case"beforetoggle":s=Nn}var f=!!(4&t),d=!f&&("scroll"===e||"scrollend"===e),p=f?null!==u?u+"Capture":null:u
f=[]
for(var h,m=r;null!==m;){var g=m
if(h=g.stateNode,5!==(g=g.tag)&&26!==g&&27!==g||null===h||null===p||null!=(g=Vt(m,p))&&f.push(Xc(m,g,h)),d)break
m=m.return}f.length>0&&(u=new s(u,c,null,n,a),o.push({event:u,listeners:f}))}}if(!(7&t)){if(s="mouseout"===e||"pointerout"===e,(!(u="mouseover"===e||"pointerover"===e)||n===$t||!(c=n.relatedTarget||n.fromElement)||!Ye(c)&&!c[He])&&(s||u)&&(u=a.window===a?a:(u=a.ownerDocument)?u.defaultView||u.parentWindow:window,s?(s=r,null!==(c=(c=n.relatedTarget||n.toElement)?Ye(c):null)&&(d=i(c),f=c.tag,c!==d||5!==f&&27!==f&&6!==f)&&(c=null)):(s=null,c=r),s!==c)){if(f=dn,g="onMouseLeave",p="onMouseEnter",m="mouse","pointerout"!==e&&"pointerover"!==e||(f=xn,g="onPointerLeave",p="onPointerEnter",m="pointer"),d=null==s?u:Xe(s),h=null==c?u:Xe(c),(u=new f(g,m+"leave",s,n,a)).target=d,u.relatedTarget=h,g=null,Ye(a)===r&&((f=new f(p,m+"enter",c,n,a)).target=h,f.relatedTarget=d,g=f),d=g,s&&c)e:{for(p=c,m=0,h=f=s;h;h=Zc(h))m++
for(h=0,g=p;g;g=Zc(g))h++
for(;m-h>0;)f=Zc(f),m--
for(;h-m>0;)p=Zc(p),h--
for(;m--;){if(f===p||null!==p&&f===p.alternate)break e
f=Zc(f),p=Zc(p)}f=null}else f=null
null!==s&&ef(o,u,s,f,0),null!==c&&null!==d&&ef(o,d,c,f,1)}if("select"===(s=(u=r?Xe(r):window).nodeName&&u.nodeName.toLowerCase())||"input"===s&&"file"===u.type)var y=Qn
else if(Un(u))if(qn)y=nr
else{y=er
var v=Zn}else!(s=u.nodeName)||"input"!==s.toLowerCase()||"checkbox"!==u.type&&"radio"!==u.type?r&&Dt(r.elementType)&&(y=Qn):y=tr
switch(y&&(y=y(e,r))?jn(o,y,n,a):(v&&v(e,u,r),"focusout"===e&&r&&"number"===u.type&&null!=r.memoizedProps.value&&Pt(u,"number",u.value)),v=r?Xe(r):window,e){case"focusin":(Un(v)||"true"===v.contentEditable)&&(fr=v,dr=r,pr=null)
break
case"focusout":pr=dr=fr=null
break
case"mousedown":hr=1
break
case"contextmenu":case"mouseup":case"dragend":hr=0,mr(o,n,a)
break
case"selectionchange":if(cr)break
case"keydown":case"keyup":mr(o,n,a)}var b
if(Tn)e:{switch(e){case"compositionstart":var k="onCompositionStart"
break e
case"compositionend":k="onCompositionEnd"
break e
case"compositionupdate":k="onCompositionUpdate"
break e}k=void 0}else $n?Fn(e,n)&&(k="onCompositionEnd"):"keydown"===e&&229===n.keyCode&&(k="onCompositionStart")
k&&(On&&"ko"!==n.locale&&($n||"onCompositionStart"!==k?"onCompositionEnd"===k&&$n&&(b=Jt()):(Gt="value"in(Yt=a)?Yt.value:Yt.textContent,$n=1)),(v=Jc(r,k)).length>0&&(k=new yn(k,e,null,n,a),o.push({event:k,listeners:v}),(b||null!==(b=Mn(n)))&&(k.data=b))),(b=Rn?function(e,t){switch(e){case"compositionend":return Mn(t)
case"keypress":return 32!==t.which?null:(An=1,Dn)
case"textInput":return(e=t.data)===Dn&&An?null:e
default:return null}}(e,n):function(e,t){if($n)return"compositionend"===e||!Tn&&Fn(e,t)?(e=Jt(),Xt=Gt=Yt=null,$n=0,e):null
switch(e){case"paste":default:return null
case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&t.char.length>1)return t.char
if(t.which)return String.fromCharCode(t.which)}return null
case"compositionend":return On&&"ko"!==t.locale?null:t.data}}(e,n))&&(k=Jc(r,"onBeforeInput")).length>0&&(v=new yn("onBeforeInput","beforeinput",null,n,a),o.push({event:v,listeners:k}),v.data=b),function(e,t,n,r,a){if("submit"===t&&n&&n.stateNode===a){var l=$c((a[je]||null).action),o=r.submitter
o&&null!==(t=(t=o[je]||null)?$c(t.formAction):o.getAttribute("formAction"))&&(l=t,o=null)
var i=new un("action","action",null,r,a)
e.push({event:i,listeners:[{instance:null,listener:function(){if(r.defaultPrevented){if(0!==zc){var e=o?Ic(a,o):new FormData(a)
Io(n,{pending:1,data:e,method:a.method,action:l},null,e)}}else"function"==typeof l&&(i.preventDefault(),e=o?Ic(a,o):new FormData(a),Io(n,{pending:1,data:e,method:a.method,action:l},l,e))},currentTarget:a}]})}}(o,e,r,n,a)}Wc(o,t)})}function Xc(e,t,n){return{instance:e,listener:t,currentTarget:n}}function Jc(e,t){for(var n=t+"Capture",r=[];null!==e;){var a=e,l=a.stateNode
if(5!==(a=a.tag)&&26!==a&&27!==a||null===l||(null!=(a=Vt(e,n))&&r.unshift(Xc(e,a,l)),null!=(a=Vt(e,t))&&r.push(Xc(e,a,l))),3===e.tag)return r
e=e.return}return[]}function Zc(e){if(null===e)return null
do{e=e.return}while(e&&5!==e.tag&&27!==e.tag)
return e||null}function ef(e,t,n,r,a){for(var l=t._reactName,o=[];null!==n&&n!==r;){var i=n,u=i.alternate,s=i.stateNode
if(i=i.tag,null!==u&&u===r)break
5!==i&&26!==i&&27!==i||null===s||(u=s,a?null!=(s=Vt(n,l))&&o.unshift(Xc(n,s,u)):a||null!=(s=Vt(n,l))&&o.push(Xc(n,s,u))),n=n.return}0!==o.length&&e.push({event:t,listeners:o})}var tf=/\r\n?/g,nf=/\u0000|\uFFFD/g
function rf(e){return("string"==typeof e?e:""+e).replace(tf,"\n").replace(nf,"")}function af(e,t){return t=rf(t),rf(e)===t?1:0}function lf(){}function of(e,t,n,r,a,o){switch(n){case"children":"string"==typeof r?"body"===t||"textarea"===t&&""===r||Tt(e,r):("number"==typeof r||"bigint"==typeof r)&&"body"!==t&&Tt(e,""+r)
break
case"className":ct(e,"class",r)
break
case"tabIndex":ct(e,"tabindex",r)
break
case"dir":case"role":case"viewBox":case"width":case"height":ct(e,n,r)
break
case"style":Ot(e,r,o)
break
case"data":if("object"!==t){ct(e,"data",r)
break}case"src":case"href":if(""===r&&("a"!==t||"href"!==n)){e.removeAttribute(n)
break}if(null==r||"function"==typeof r||"symbol"==typeof r||"boolean"==typeof r){e.removeAttribute(n)
break}r=Mt(""+r),e.setAttribute(n,r)
break
case"action":case"formAction":if("function"==typeof r){e.setAttribute(n,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')")
break}if("function"==typeof o&&("formAction"===n?("input"!==t&&of(e,t,"name",a.name,a,null),of(e,t,"formEncType",a.formEncType,a,null),of(e,t,"formMethod",a.formMethod,a,null),of(e,t,"formTarget",a.formTarget,a,null)):(of(e,t,"encType",a.encType,a,null),of(e,t,"method",a.method,a,null),of(e,t,"target",a.target,a,null))),null==r||"symbol"==typeof r||"boolean"==typeof r){e.removeAttribute(n)
break}r=Mt(""+r),e.setAttribute(n,r)
break
case"onClick":null!=r&&(e.onclick=lf)
break
case"onScroll":null!=r&&Vc("scroll",e)
break
case"onScrollEnd":null!=r&&Vc("scrollend",e)
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
break}n=Mt(""+r),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",n)
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
case"popover":Vc("beforetoggle",e),Vc("toggle",e),st(e,"popover",r)
break
case"xlinkActuate":ft(e,"http://www.w3.org/1999/xlink","xlink:actuate",r)
break
case"xlinkArcrole":ft(e,"http://www.w3.org/1999/xlink","xlink:arcrole",r)
break
case"xlinkRole":ft(e,"http://www.w3.org/1999/xlink","xlink:role",r)
break
case"xlinkShow":ft(e,"http://www.w3.org/1999/xlink","xlink:show",r)
break
case"xlinkTitle":ft(e,"http://www.w3.org/1999/xlink","xlink:title",r)
break
case"xlinkType":ft(e,"http://www.w3.org/1999/xlink","xlink:type",r)
break
case"xmlBase":ft(e,"http://www.w3.org/XML/1998/namespace","xml:base",r)
break
case"xmlLang":ft(e,"http://www.w3.org/XML/1998/namespace","xml:lang",r)
break
case"xmlSpace":ft(e,"http://www.w3.org/XML/1998/namespace","xml:space",r)
break
case"is":st(e,"is",r)
break
case"innerText":case"textContent":break
default:(2>=n.length||"o"!==n[0]&&"O"!==n[0]||"n"!==n[1]&&"N"!==n[1])&&st(e,n=At.get(n)||n,r)}}function uf(e,t,n,r,a,o){switch(n){case"style":Ot(e,r,o)
break
case"dangerouslySetInnerHTML":if(null!=r){if("object"!=typeof r||!("__html"in r))throw Error(l(61))
if(null!=(n=r.__html)){if(null!=a.children)throw Error(l(60))
e.innerHTML=n}}break
case"children":"string"==typeof r?Tt(e,r):("number"==typeof r||"bigint"==typeof r)&&Tt(e,""+r)
break
case"onScroll":null!=r&&Vc("scroll",e)
break
case"onScrollEnd":null!=r&&Vc("scrollend",e)
break
case"onClick":null!=r&&(e.onclick=lf)
break
case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":case"innerText":case"textContent":break
default:tt.hasOwnProperty(n)||("o"!==n[0]||"n"!==n[1]||(a=n.endsWith("Capture"),t=n.slice(2,a?n.length-7:void 0),"function"==typeof(o=null!=(o=e[je]||null)?o[n]:null)&&e.removeEventListener(t,o,a),"function"!=typeof r)?n in e?e[n]=r:1==r?e.setAttribute(n,""):st(e,n,r):("function"!=typeof o&&null!==o&&(n in e?e[n]=null:e.hasAttribute(n)&&e.removeAttribute(n)),e.addEventListener(t,r,a)))}}function sf(e,t,n){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break
case"img":Vc("error",e),Vc("load",e)
var r,a=0,o=0
for(r in n)if(n.hasOwnProperty(r)){var i=n[r]
if(null!=i)switch(r){case"src":a=1
break
case"srcSet":o=1
break
case"children":case"dangerouslySetInnerHTML":throw Error(l(137,t))
default:of(e,t,r,i,n,null)}}return o&&of(e,t,"srcSet",n.srcSet,n,null),void(a&&of(e,t,"src",n.src,n,null))
case"input":Vc("invalid",e)
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
default:of(e,t,a,f,n,null)}}return Ct(e,r,u,s,c,i,o,0),void bt(e)
case"select":for(o in Vc("invalid",e),a=i=r=null,n)if(n.hasOwnProperty(o)&&null!=(u=n[o]))switch(o){case"value":r=u
break
case"defaultValue":i=u
break
case"multiple":a=u
default:of(e,t,o,u,n,null)}return t=r,n=i,e.multiple=!!a,void(null!=t?_t(e,!!a,t,0):null!=n&&_t(e,!!a,n,1))
case"textarea":for(i in Vc("invalid",e),r=o=a=null,n)if(n.hasOwnProperty(i)&&null!=(u=n[i]))switch(i){case"value":a=u
break
case"defaultValue":o=u
break
case"children":r=u
break
case"dangerouslySetInnerHTML":if(null!=u)throw Error(l(91))
break
default:of(e,t,i,u,n,null)}return zt(e,a,o,r),void bt(e)
case"option":for(s in n)n.hasOwnProperty(s)&&null!=(a=n[s])&&("selected"===s?e.selected=a&&"function"!=typeof a&&"symbol"!=typeof a:of(e,t,s,a,n,null))
return
case"dialog":Vc("beforetoggle",e),Vc("toggle",e),Vc("cancel",e),Vc("close",e)
break
case"iframe":case"object":Vc("load",e)
break
case"video":case"audio":for(a=0;a<Hc.length;a++)Vc(Hc[a],e)
break
case"image":Vc("error",e),Vc("load",e)
break
case"details":Vc("toggle",e)
break
case"embed":case"source":case"link":Vc("error",e),Vc("load",e)
case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(c in n)if(n.hasOwnProperty(c)&&null!=(a=n[c]))switch(c){case"children":case"dangerouslySetInnerHTML":throw Error(l(137,t))
default:of(e,t,c,a,n,null)}return
default:if(Dt(t)){for(f in n)n.hasOwnProperty(f)&&void 0!==(a=n[f])&&uf(e,t,f,a,n,void 0)
return}}for(u in n)n.hasOwnProperty(u)&&null!=(a=n[u])&&of(e,t,u,a,n,null)}var cf=null,ff=null
function df(e){return 9===e.nodeType?e:e.ownerDocument}function pf(e){switch(e){case"http://www.w3.org/2000/svg":return 1
case"http://www.w3.org/1998/Math/MathML":return 2
default:return 0}}function hf(e,t){if(0===e)switch(t){case"svg":return 1
case"math":return 2
default:return 0}return 1===e&&"foreignObject"===t?0:e}function mf(e,t){return"textarea"===e||"noscript"===e||"string"==typeof t.children||"number"==typeof t.children||"bigint"==typeof t.children||"object"==typeof t.dangerouslySetInnerHTML&&null!==t.dangerouslySetInnerHTML&&null!=t.dangerouslySetInnerHTML.__html}var gf=null,yf="function"==typeof setTimeout?setTimeout:void 0,vf="function"==typeof clearTimeout?clearTimeout:void 0,bf="function"==typeof Promise?Promise:void 0,kf="function"==typeof queueMicrotask?queueMicrotask:void 0!==bf?function(e){return bf.resolve(null).then(e).catch(wf)}:yf
function wf(e){setTimeout(function(){throw e})}function Sf(e){return"head"===e}function Ef(e,t){var n=t,r=0,a=0
do{var l=n.nextSibling
if(e.removeChild(n),l&&8===l.nodeType)if("/$"===(n=l.data)){if(r>0&&8>r){n=r
var o=e.ownerDocument
if(1&n&&Tf(o.documentElement),2&n&&Tf(o.body),4&n)for(Tf(n=o.head),o=n.firstChild;o;){var i=o.nextSibling,u=o.nodeName
o[qe]||"SCRIPT"===u||"STYLE"===u||"LINK"===u&&"stylesheet"===o.rel.toLowerCase()||n.removeChild(o),o=i}}if(0===a)return e.removeChild(l),void Fd(t)
a--}else"$"===n||"$?"===n||"$!"===n?a++:r=n.charCodeAt(0)-48
else r=0
n=l}while(n)
Fd(t)}function xf(e){var t=e.firstChild
for(t&&10===t.nodeType&&(t=t.nextSibling);t;){var n=t
switch(t=t.nextSibling,n.nodeName){case"HTML":case"HEAD":case"BODY":xf(n),Ke(n)
continue
case"SCRIPT":case"STYLE":continue
case"LINK":if("stylesheet"===n.rel.toLowerCase())continue}e.removeChild(n)}}function Cf(e){return"$!"===e.data||"$?"===e.data&&"complete"===e.ownerDocument.readyState}function Pf(e){for(;null!=e;e=e.nextSibling){var t=e.nodeType
if(1===t||3===t)break
if(8===t){if("$"===(t=e.data)||"$!"===t||"$?"===t||"F!"===t||"F"===t)break
if("/$"===t)return null}}return e}var _f=null
function Nf(e){e=e.previousSibling
for(var t=0;e;){if(8===e.nodeType){var n=e.data
if("$"===n||"$!"===n||"$?"===n){if(0===t)return e
t--}else"/$"===n&&t++}e=e.previousSibling}return null}function zf(e,t,n){switch(t=df(n),e){case"html":if(!(e=t.documentElement))throw Error(l(452))
return e
case"head":if(!(e=t.head))throw Error(l(453))
return e
case"body":if(!(e=t.body))throw Error(l(454))
return e
default:throw Error(l(451))}}function Tf(e){for(var t=e.attributes;t.length;)e.removeAttributeNode(t[0])
Ke(e)}var Lf=new Map,Rf=new Set
function Of(e){return"function"==typeof e.getRootNode?e.getRootNode():9===e.nodeType?e:e.ownerDocument}var Df=B.d
B.d={f:function(){var e=Df.f(),t=Ys()
return e||t},r:function(e){var t=Ge(e)
null!==t&&5===t.tag&&"form"===t.type?jo(t):Df.r(e)},D:function(e){Df.D(e),Ff("dns-prefetch",e,null)},C:function(e,t){Df.C(e,t),Ff("preconnect",e,t)},L:function(e,t,n){Df.L(e,t,n)
var r=Af
if(r&&e&&t){var a='link[rel="preload"][as="'+Et(t)+'"]'
"image"===t&&n&&n.imageSrcSet?(a+='[imagesrcset="'+Et(n.imageSrcSet)+'"]',"string"==typeof n.imageSizes&&(a+='[imagesizes="'+Et(n.imageSizes)+'"]')):a+='[href="'+Et(e)+'"]'
var l=a
switch(t){case"style":l=$f(e)
break
case"script":l=jf(e)}Lf.has(l)||(e=h({rel:"preload",href:"image"===t&&n&&n.imageSrcSet?void 0:e,as:t},n),Lf.set(l,e),null!==r.querySelector(a)||"style"===t&&r.querySelector(If(l))||"script"===t&&r.querySelector(Hf(l))||(sf(t=r.createElement("link"),"link",e),Ze(t),r.head.appendChild(t)))}},m:function(e,t){Df.m(e,t)
var n=Af
if(n&&e){var r=t&&"string"==typeof t.as?t.as:"script",a='link[rel="modulepreload"][as="'+Et(r)+'"][href="'+Et(e)+'"]',l=a
switch(r){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":l=jf(e)}if(!Lf.has(l)&&(e=h({rel:"modulepreload",href:e},t),Lf.set(l,e),null===n.querySelector(a))){switch(r){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(n.querySelector(Hf(l)))return}sf(r=n.createElement("link"),"link",e),Ze(r),n.head.appendChild(r)}}},X:function(e,t){Df.X(e,t)
var n=Af
if(n&&e){var r=Je(n).hoistableScripts,a=jf(e),l=r.get(a)
l||((l=n.querySelector(Hf(a)))||(e=h({src:e,async:1},t),(t=Lf.get(a))&&Qf(e,t),Ze(l=n.createElement("script")),sf(l,"link",e),n.head.appendChild(l)),l={type:"script",instance:l,count:1,state:null},r.set(a,l))}},S:function(e,t,n){Df.S(e,t,n)
var r=Af
if(r&&e){var a=Je(r).hoistableStyles,l=$f(e)
t=t||"default"
var o=a.get(l)
if(!o){var i={loading:0,preload:null}
if(o=r.querySelector(If(l)))i.loading=5
else{e=h({rel:"stylesheet",href:e,"data-precedence":t},n),(n=Lf.get(l))&&Vf(e,n)
var u=o=r.createElement("link")
Ze(u),sf(u,"link",e),u._p=new Promise(function(e,t){u.onload=e,u.onerror=t}),u.addEventListener("load",function(){i.loading|=1}),u.addEventListener("error",function(){i.loading|=2}),i.loading|=4,Wf(o,t,r)}o={type:"stylesheet",instance:o,count:1,state:i},a.set(l,o)}}},M:function(e,t){Df.M(e,t)
var n=Af
if(n&&e){var r=Je(n).hoistableScripts,a=jf(e),l=r.get(a)
l||((l=n.querySelector(Hf(a)))||(e=h({src:e,async:1,type:"module"},t),(t=Lf.get(a))&&Qf(e,t),Ze(l=n.createElement("script")),sf(l,"link",e),n.head.appendChild(l)),l={type:"script",instance:l,count:1,state:null},r.set(a,l))}}}
var Af="undefined"==typeof document?null:document
function Ff(e,t,n){var r=Af
if(r&&"string"==typeof t&&t){var a=Et(t)
a='link[rel="'+e+'"][href="'+a+'"]',"string"==typeof n&&(a+='[crossorigin="'+n+'"]'),Rf.has(a)||(Rf.add(a),e={rel:e,crossOrigin:n,href:t},null===r.querySelector(a)&&(sf(t=r.createElement("link"),"link",e),Ze(t),r.head.appendChild(t)))}}function Mf(e,t,n,r){var a,o,i,u,s=(s=J.current)?Of(s):null
if(!s)throw Error(l(446))
switch(e){case"meta":case"title":return null
case"style":return"string"==typeof n.precedence&&"string"==typeof n.href?(t=$f(n.href),(r=(n=Je(s).hoistableStyles).get(t))||(r={type:"style",instance:null,count:0,state:null},n.set(t,r)),r):{type:"void",instance:null,count:0,state:null}
case"link":if("stylesheet"===n.rel&&"string"==typeof n.href&&"string"==typeof n.precedence){e=$f(n.href)
var c=Je(s).hoistableStyles,f=c.get(e)
if(f||(s=s.ownerDocument||s,f={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},c.set(e,f),(c=s.querySelector(If(e)))&&!c._p&&(f.instance=c,f.state.loading=5),Lf.has(e)||(n={rel:"preload",as:"style",href:n.href,crossOrigin:n.crossOrigin,integrity:n.integrity,media:n.media,hrefLang:n.hrefLang,referrerPolicy:n.referrerPolicy},Lf.set(e,n),c||(a=s,o=e,i=n,u=f.state,a.querySelector('link[rel="preload"][as="style"]['+o+"]")?u.loading=1:(o=a.createElement("link"),u.preload=o,o.addEventListener("load",function(){return u.loading|=1}),o.addEventListener("error",function(){return u.loading|=2}),sf(o,"link",i),Ze(o),a.head.appendChild(o))))),t&&null===r)throw Error(l(528,""))
return f}if(t&&null!==r)throw Error(l(529,""))
return null
case"script":return t=n.async,"string"==typeof(n=n.src)&&t&&"function"!=typeof t&&"symbol"!=typeof t?(t=jf(n),(r=(n=Je(s).hoistableScripts).get(t))||(r={type:"script",instance:null,count:0,state:null},n.set(t,r)),r):{type:"void",instance:null,count:0,state:null}
default:throw Error(l(444,e))}}function $f(e){return'href="'+Et(e)+'"'}function If(e){return'link[rel="stylesheet"]['+e+"]"}function Uf(e){return h({},e,{"data-precedence":e.precedence,precedence:null})}function jf(e){return'[src="'+Et(e)+'"]'}function Hf(e){return"script[async]"+e}function Bf(e,t,n){if(t.count++,null===t.instance)switch(t.type){case"style":var r=e.querySelector('style[data-href~="'+Et(n.href)+'"]')
if(r)return t.instance=r,Ze(r),r
var a=h({},n,{"data-href":n.href,"data-precedence":n.precedence,href:null,precedence:null})
return Ze(r=(e.ownerDocument||e).createElement("style")),sf(r,"style",a),Wf(r,n.precedence,e),t.instance=r
case"stylesheet":a=$f(n.href)
var o=e.querySelector(If(a))
if(o)return t.state.loading|=4,t.instance=o,Ze(o),o
r=Uf(n),(a=Lf.get(a))&&Vf(r,a),Ze(o=(e.ownerDocument||e).createElement("link"))
var i=o
return i._p=new Promise(function(e,t){i.onload=e,i.onerror=t}),sf(o,"link",r),t.state.loading|=4,Wf(o,n.precedence,e),t.instance=o
case"script":return o=jf(n.src),(a=e.querySelector(Hf(o)))?(t.instance=a,Ze(a),a):(r=n,(a=Lf.get(o))&&Qf(r=h({},n),a),Ze(a=(e=e.ownerDocument||e).createElement("script")),sf(a,"link",r),e.head.appendChild(a),t.instance=a)
case"void":return null
default:throw Error(l(443,t.type))}else"stylesheet"===t.type&&!(4&t.state.loading)&&(r=t.instance,t.state.loading|=4,Wf(r,n.precedence,e))
return t.instance}function Wf(e,t,n){for(var r=n.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),a=r.length?r[r.length-1]:null,l=a,o=0;o<r.length;o++){var i=r[o]
if(i.dataset.precedence===t)l=i
else if(l!==a)break}l?l.parentNode.insertBefore(e,l.nextSibling):(t=9===n.nodeType?n.head:n).insertBefore(e,t.firstChild)}function Vf(e,t){null==e.crossOrigin&&(e.crossOrigin=t.crossOrigin),null==e.referrerPolicy&&(e.referrerPolicy=t.referrerPolicy),null==e.title&&(e.title=t.title)}function Qf(e,t){null==e.crossOrigin&&(e.crossOrigin=t.crossOrigin),null==e.referrerPolicy&&(e.referrerPolicy=t.referrerPolicy),null==e.integrity&&(e.integrity=t.integrity)}var qf=null
function Kf(e,t,n){if(null===qf){var r=new Map,a=qf=new Map
a.set(n,r)}else(r=(a=qf).get(n))||(r=new Map,a.set(n,r))
if(r.has(e))return r
for(r.set(e,null),n=n.getElementsByTagName(e),a=0;a<n.length;a++){var l=n[a]
if(!(l[qe]||l[Ue]||"link"===e&&"stylesheet"===l.getAttribute("rel"))&&"http://www.w3.org/2000/svg"!==l.namespaceURI){var o=l.getAttribute(t)||""
o=e+o
var i=r.get(o)
i?i.push(l):r.set(o,[l])}}return r}function Yf(e,t,n){(e=e.ownerDocument||e).head.insertBefore(n,"title"===t?e.querySelector("head > title"):null)}function Gf(e){return"stylesheet"!==e.type||3&e.state.loading?1:0}var Xf=null
function Jf(){}function Zf(){if(this.count--,0===this.count)if(this.stylesheets)td(this,this.stylesheets)
else if(this.unsuspend){var e=this.unsuspend
this.unsuspend=null,e()}}var ed=null
function td(e,t){e.stylesheets=null,null!==e.unsuspend&&(e.count++,ed=new Map,t.forEach(nd,e),ed=null,Zf.call(e))}function nd(e,t){if(!(4&t.state.loading)){var n=ed.get(e)
if(n)var r=n.get(null)
else{n=new Map,ed.set(e,n)
for(var a=e.querySelectorAll("link[data-precedence],style[data-precedence]"),l=0;l<a.length;l++){var o=a[l]
"LINK"!==o.nodeName&&"not all"===o.getAttribute("media")||(n.set(o.dataset.precedence,o),r=o)}r&&n.set(null,r)}o=(a=t.instance).getAttribute("data-precedence"),(l=n.get(o)||r)===r&&n.set(null,a),n.set(o,a),this.count++,r=Zf.bind(this),a.addEventListener("load",r),a.addEventListener("error",r),l?l.parentNode.insertBefore(a,l.nextSibling):(e=9===e.nodeType?e.head:e).insertBefore(a,e.firstChild),t.state.loading|=4}}var rd={$$typeof:z,Provider:null,Consumer:null,_currentValue:W,_currentValue2:W,_threadCount:0}
function ad(e,t,n,r,a,l,o,i){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Re(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Re(0),this.hiddenUpdates=Re(null),this.identifierPrefix=r,this.onUncaughtError=a,this.onCaughtError=l,this.onRecoverableError=o,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=i,this.incompleteTransitions=new Map}function ld(e,t,n,r,a,l,o,i,u,s,c,f){return e=new ad(e,t,n,o,i,u,s,f),t=1,1==l&&(t|=24),l=Wr(3,null,null,t),e.current=l,l.stateNode=e,(t=ja()).refCount++,e.pooledCache=t,t.refCount++,l.memoizedState={element:r,isDehydrated:n,cache:t},cl(l),e}function od(e){return e?e=Hr:Hr}function id(e,t,n,r,a,l){a=od(a),null===r.context?r.context=a:r.pendingContext=a,(r=dl(t)).payload={element:n},null!==(l=void 0===l?null:l)&&(r.callback=l),null!==(n=pl(e,r,t))&&(Ws(n,0,t),hl(n,e,t))}function ud(e,t){if(null!==(e=e.memoizedState)&&null!==e.dehydrated){var n=e.retryLane
e.retryLane=0!==n&&t>n?n:t}}function sd(e,t){ud(e,t),(e=e.alternate)&&ud(e,t)}function cd(e){if(13===e.tag){var t=Ir(e,67108864)
null!==t&&Ws(t,0,67108864),sd(e,67108864)}}var fd=1
function dd(e,t,n,r){var a=H.T
H.T=null
var l=B.p
try{B.p=2,hd(e,t,n,r)}finally{B.p=l,H.T=a}}function pd(e,t,n,r){var a=H.T
H.T=null
var l=B.p
try{B.p=8,hd(e,t,n,r)}finally{B.p=l,H.T=a}}function hd(e,t,n,r){if(fd){var a=md(r)
if(null===a)Gc(e,t,r,gd,n),_d(e,r)
else if(function(e,t,n,r,a){switch(t){case"focusin":return kd=Nd(kd,e,t,n,r,a),1
case"dragenter":return wd=Nd(wd,e,t,n,r,a),1
case"mouseover":return Sd=Nd(Sd,e,t,n,r,a),1
case"pointerover":var l=a.pointerId
return Ed.set(l,Nd(Ed.get(l)||null,e,t,n,r,a)),1
case"gotpointercapture":return l=a.pointerId,xd.set(l,Nd(xd.get(l)||null,e,t,n,r,a)),1}return 0}(a,e,t,n,r))r.stopPropagation()
else if(_d(e,r),4&t&&Pd.indexOf(e)>-1){for(;null!==a;){var l=Ge(a)
if(null!==l)switch(l.tag){case 3:if((l=l.stateNode).current.memoizedState.isDehydrated){var o=Pe(l.pendingLanes)
if(0!==o){var i=l
for(i.pendingLanes|=2,i.entangledLanes|=2;o;){var u=1<<31-we(o)
i.entanglements[1]|=u,o&=~u}Tc(l),!(6&cs)&&(Ts=se()+500,Lc(0))}}break
case 13:null!==(i=Ir(l,2))&&Ws(i,0,2),Ys(),sd(l,2)}if(null===(l=md(r))&&Gc(e,t,r,gd,n),l===a)break
a=l}null!==a&&r.stopPropagation()}else Gc(e,t,r,null,n)}}function md(e){return yd(e=It(e))}var gd=null
function yd(e){if(gd=null,null!==(e=Ye(e))){var t=i(e)
if(null===t)e=null
else{var n=t.tag
if(13===n){if(null!==(e=u(t)))return e
e=null}else if(3===n){if(t.stateNode.current.memoizedState.isDehydrated)return 3===t.tag?t.stateNode.containerInfo:null
e=null}else t!==e&&(e=null)}}return gd=e,null}function vd(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2
case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8
case"message":switch(ce()){case fe:return 2
case de:return 8
case pe:case he:return 32
case me:return 268435456
default:return 32}default:return 32}}var bd=0,kd=null,wd=null,Sd=null,Ed=new Map,xd=new Map,Cd=[],Pd="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ")
function _d(e,t){switch(e){case"focusin":case"focusout":kd=null
break
case"dragenter":case"dragleave":wd=null
break
case"mouseover":case"mouseout":Sd=null
break
case"pointerover":case"pointerout":Ed.delete(t.pointerId)
break
case"gotpointercapture":case"lostpointercapture":xd.delete(t.pointerId)}}function Nd(e,t,n,r,a,l){return null===e||e.nativeEvent!==l?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:l,targetContainers:[a]},null!==t&&null!==(t=Ge(t))&&cd(t),e):(e.eventSystemFlags|=r,t=e.targetContainers,null!==a&&-1===t.indexOf(a)&&t.push(a),e)}function zd(e){var t=Ye(e.target)
if(null!==t){var n=i(t)
if(null!==n)if(13===(t=n.tag)){if(null!==(t=u(n)))return e.blockedOn=t,void function(e){var t=B.p
try{return B.p=e,function(){if(13===n.tag){var e=Hs()
e=Fe(e)
var t=Ir(n,e)
null!==t&&Ws(t,0,e),sd(n,e)}}()}finally{B.p=t}}(e.priority)}else if(3===t&&n.stateNode.current.memoizedState.isDehydrated)return void(e.blockedOn=3===n.tag?n.stateNode.containerInfo:null)}e.blockedOn=null}function Td(e){if(null!==e.blockedOn)return 0
for(var t=e.targetContainers;t.length>0;){var n=md(e.nativeEvent)
if(null!==n)return null!==(t=Ge(n))&&cd(t),e.blockedOn=n,0
var r=new(n=e.nativeEvent).constructor(n.type,n)
$t=r,n.target.dispatchEvent(r),$t=null,t.shift()}return 1}function Ld(e,t,n){Td(e)&&n.delete(t)}function Rd(){bd=0,null!==kd&&Td(kd)&&(kd=null),null!==wd&&Td(wd)&&(wd=null),null!==Sd&&Td(Sd)&&(Sd=null),Ed.forEach(Ld),xd.forEach(Ld)}function Od(t,n){t.blockedOn===n&&(t.blockedOn=null,bd||(bd=1,e.unstable_scheduleCallback(e.unstable_NormalPriority,Rd)))}var Dd=null
function Ad(t){Dd!==t&&(Dd=t,e.unstable_scheduleCallback(e.unstable_NormalPriority,function(){Dd===t&&(Dd=null)
for(var e=0;e<t.length;e+=3){var n=t[e],r=t[e+1],a=t[e+2]
if("function"!=typeof r){if(null===yd(r||n))continue
break}var l=Ge(n)
null!==l&&(t.splice(e,3),e-=3,Io(l,{pending:1,data:a,method:n.method,action:r},r,a))}}))}function Fd(e){function t(t){return Od(t,e)}null!==kd&&Od(kd,e),null!==wd&&Od(wd,e),null!==Sd&&Od(Sd,e),Ed.forEach(t),xd.forEach(t)
for(var n=0;n<Cd.length;n++){var r=Cd[n]
r.blockedOn===e&&(r.blockedOn=null)}for(;Cd.length>0&&null===(n=Cd[0]).blockedOn;)zd(n),null===n.blockedOn&&Cd.shift()
if(null!=(n=(e.ownerDocument||e).$$reactFormReplay))for(r=0;r<n.length;r+=3){var a=n[r],l=n[r+1],o=a[je]||null
if("function"==typeof l)o||Ad(n)
else if(o){var i=null
if(l&&l.hasAttribute("formAction")){if(a=l,o=l[je]||null)i=o.formAction
else if(null!==yd(a))continue}else i=o.action
"function"==typeof i?n[r+1]=i:(n.splice(r,3),r-=3),Ad(n)}}}function Md(e){this._internalRoot=e}function $d(e){this._internalRoot=e}$d.prototype.render=Md.prototype.render=function(e){var t=this._internalRoot
if(null===t)throw Error(l(409))
id(t.current,Hs(),e,t,null,null)},$d.prototype.unmount=Md.prototype.unmount=function(){var e=this._internalRoot
if(null!==e){this._internalRoot=null
var t=e.containerInfo
id(e.current,2,null,e,null,null),Ys(),t[He]=null}},$d.prototype.unstable_scheduleHydration=function(e){if(e){var t=$e()
e={blockedOn:null,target:e,priority:t}
for(var n=0;n<Cd.length&&0!==t&&t<Cd[n].priority;n++);Cd.splice(n,0,e),0===n&&zd(e)}}
var Id=t.version
if("19.1.0"!==Id)throw Error(l(527,Id,"19.1.0"))
B.findDOMNode=function(e){var t=e._reactInternals
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
var Ud={bundleType:0,version:"19.1.0",rendererPackageName:"react-dom",currentDispatcherRef:H,reconcilerVersion:"19.1.0"}
if("undefined"!=typeof __REACT_DEVTOOLS_GLOBAL_HOOK__){var jd=__REACT_DEVTOOLS_GLOBAL_HOOK__
if(!jd.isDisabled&&jd.supportsFiber)try{ve=jd.inject(Ud),be=jd}catch(Bd){}}return c.createRoot=function(e,t){if(!o(e))throw Error(l(299))
var n=0,r="",a=Pi,i=_i,u=Ni
return null!=t&&(1==t.unstable_strictMode&&(n=1),void 0!==t.identifierPrefix&&(r=t.identifierPrefix),void 0!==t.onUncaughtError&&(a=t.onUncaughtError),void 0!==t.onCaughtError&&(i=t.onCaughtError),void 0!==t.onRecoverableError&&(u=t.onRecoverableError),void 0!==t.unstable_transitionCallbacks&&t.unstable_transitionCallbacks),t=ld(e,1,0,null,0,n,r,a,i,u,0,null),e[He]=t.current,Kc(e),new Md(t)},c.hydrateRoot=function(e,t,n){if(!o(e))throw Error(l(299))
var r=0,a="",i=Pi,u=_i,s=Ni,c=null
return null!=n&&(1==n.unstable_strictMode&&(r=1),void 0!==n.identifierPrefix&&(a=n.identifierPrefix),void 0!==n.onUncaughtError&&(i=n.onUncaughtError),void 0!==n.onCaughtError&&(u=n.onCaughtError),void 0!==n.onRecoverableError&&(s=n.onRecoverableError),void 0!==n.unstable_transitionCallbacks&&n.unstable_transitionCallbacks,void 0!==n.formState&&(c=n.formState)),(t=ld(e,1,1,t,0,r,a,i,u,s,0,c)).context=od(null),n=t.current,(a=dl(r=Fe(r=Hs()))).callback=null,pl(n,a,r),n=r,t.current.lanes=n,Oe(t,n),Tc(t),e[He]=t.current,Kc(e),new $d(t)},c.version="19.1.0",c}()),s.exports),x=g(),C="popstate"
function P(e,t){if(0==e||null==e)throw Error(t)}function _(e,t){if(!e)try{throw Error(t)}catch(n){}}function N(e,t){return{usr:e.state,key:e.key,idx:t}}function z(e,t,n=null,r){return{pathname:"string"==typeof e?e:e.pathname,search:"",hash:"",..."string"==typeof t?L(t):t,state:n,key:t&&t.key||r||Math.random().toString(36).substring(2,10)}}function T({pathname:e="/",search:t="",hash:n=""}){return t&&"?"!==t&&(e+="?"===t.charAt(0)?t:"?"+t),n&&"#"!==n&&(e+="#"===n.charAt(0)?n:"#"+n),e}function L(e){let t={}
if(e){let n=e.indexOf("#")
0>n||(t.hash=e.substring(n),e=e.substring(0,n))
let r=e.indexOf("?")
0>r||(t.search=e.substring(r),e=e.substring(0,r)),e&&(t.pathname=e)}return t}function R(e,t,n="/"){return function(e,t,n){let r=Q(("string"==typeof t?L(t):t).pathname||"/",n)
if(null==r)return null
let a=O(e)
!function(e){e.sort((e,t)=>e.score!==t.score?t.score-e.score:function(e,t){return e.length===t.length&&e.slice(0,-1).every((e,n)=>e===t[n])?e[e.length-1]-t[t.length-1]:0}(e.routesMeta.map(e=>e.childrenIndex),t.routesMeta.map(e=>e.childrenIndex)))}(a)
let l=null
for(let o=0;null==l&&o<a.length;++o){let e=V(r)
l=B(a[o],e,0)}return l}(e,t,n)}function O(e,t=[],n=[],r="",a=0){let l=(e,l,o=a,i)=>{let u={relativePath:void 0===i?e.path||"":i,caseSensitive:1==e.caseSensitive,childrenIndex:l,route:e}
if(u.relativePath.startsWith("/")){if(!u.relativePath.startsWith(r)&&o)return
P(u.relativePath.startsWith(r),`Absolute route path "${u.relativePath}" nested under path "${r}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`),u.relativePath=u.relativePath.slice(r.length)}let s=G([r,u.relativePath]),c=n.concat(u)
e.children&&e.children.length>0&&(P(1!=e.index,`Index routes must not have child routes. Please remove all child routes from route path "${s}".`),O(e.children,t,c,s,o)),(null!=e.path||e.index)&&t.push({path:s,score:H(s,e.index),routesMeta:c})}
return e.forEach((e,t)=>{var n
if(""!==e.path&&(null==(n=e.path)?void 0:n.includes("?")))for(let r of D(e.path))l(e,t,1,r)
else l(e,t)}),t}function D(e){let t=e.split("/")
if(0===t.length)return[]
let[n,...r]=t,a=n.endsWith("?"),l=n.replace(/\?$/,"")
if(0===r.length)return a?[l,""]:[l]
let o=D(r.join("/")),i=[]
return i.push(...o.map(e=>""===e?l:[l,e].join("/"))),a&&i.push(...o),i.map(t=>e.startsWith("/")&&""===t?"/":t)}var A=/^:[\w-]+$/,F=3,M=2,$=1,I=10,U=-2,j=e=>"*"===e
function H(e,t){let n=e.split("/"),r=n.length
return n.some(j)&&(r+=U),t&&(r+=M),n.filter(e=>!j(e)).reduce((e,t)=>e+(A.test(t)?F:""===t?$:I),r)}function B(e,t,n=0){let{routesMeta:r}=e,a={},l="/",o=[]
for(let i=0;i<r.length;++i){let e=r[i],u=i===r.length-1,s="/"===l?t:t.slice(l.length)||"/",c=W({path:e.relativePath,caseSensitive:e.caseSensitive,end:u},s),f=e.route
if(!c&&u&&n&&!r[r.length-1].route.index&&(c=W({path:e.relativePath,caseSensitive:e.caseSensitive,end:0},s)),!c)return null
Object.assign(a,c.params),o.push({params:a,pathname:G([l,c.pathname]),pathnameBase:X(G([l,c.pathnameBase])),route:f}),"/"!==c.pathnameBase&&(l=G([l,c.pathnameBase]))}return o}function W(e,t){"string"==typeof e&&(e={path:e,caseSensitive:0,end:1})
let[n,r]=function(e,t=0,n=1){_("*"===e||!e.endsWith("*")||e.endsWith("/*"),`Route path "${e}" will be treated as if it were "${e.replace(/\*$/,"/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${e.replace(/\*$/,"/*")}".`)
let r=[],a="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(e,t,n)=>(r.push({paramName:t,isOptional:null!=n}),n?"/?([^\\/]+)?":"/([^\\/]+)")).replace(/\/([\w-]+)\?(\/|$)/g,"(/$1)?$2")
return e.endsWith("*")?(r.push({paramName:"*"}),a+="*"===e||"/*"===e?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?a+="\\/*$":""!==e&&"/"!==e&&(a+="(?:(?=\\/|$))"),[RegExp(a,t?void 0:"i"),r]}(e.path,e.caseSensitive,e.end),a=t.match(n)
if(!a)return null
let l=a[0],o=l.replace(/(.)\/+$/,"$1"),i=a.slice(1)
return{params:r.reduce((e,{paramName:t,isOptional:n},r)=>{if("*"===t){let e=i[r]||""
o=l.slice(0,l.length-e.length).replace(/(.)\/+$/,"$1")}const a=i[r]
return e[t]=n&&!a?void 0:(a||"").replace(/%2F/g,"/"),e},{}),pathname:l,pathnameBase:o,pattern:e}}function V(e){try{return e.split("/").map(e=>decodeURIComponent(e).replace(/\//g,"%2F")).join("/")}catch(t){return _(0,`The URL path "${e}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${t}).`),e}}function Q(e,t){if("/"===t)return e
if(!e.toLowerCase().startsWith(t.toLowerCase()))return null
let n=t.endsWith("/")?t.length-1:t.length,r=e.charAt(n)
return r&&"/"!==r?null:e.slice(n)||"/"}function q(e,t,n,r){return`Cannot include a '${e}' character in a manually specified \`to.${t}\` field [${JSON.stringify(r)}].  Please separate it out to the \`to.${n}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`}function K(e){let t=function(e){return e.filter((e,t)=>0===t||e.route.path&&e.route.path.length>0)}(e)
return t.map((e,n)=>n===t.length-1?e.pathname:e.pathnameBase)}function Y(e,t,n,r=0){let a
"string"==typeof e?a=L(e):(a={...e},P(!a.pathname||!a.pathname.includes("?"),q("?","pathname","search",a)),P(!a.pathname||!a.pathname.includes("#"),q("#","pathname","hash",a)),P(!a.search||!a.search.includes("#"),q("#","search","hash",a)))
let l,o=""===e||""===a.pathname,i=o?"/":a.pathname
if(null==i)l=n
else{let e=t.length-1
if(!r&&i.startsWith("..")){let t=i.split("/")
for(;".."===t[0];)t.shift(),e-=1
a.pathname=t.join("/")}l=0>e?"/":t[e]}let u=function(e,t="/"){let{pathname:n,search:r="",hash:a=""}="string"==typeof e?L(e):e,l=n?n.startsWith("/")?n:function(e,t){let n=t.replace(/\/+$/,"").split("/")
return e.split("/").forEach(e=>{".."===e?n.length>1&&n.pop():"."!==e&&n.push(e)}),n.length>1?n.join("/"):"/"}(n,t):t
return{pathname:l,search:J(r),hash:Z(a)}}(a,l),s=i&&"/"!==i&&i.endsWith("/"),c=(o||"."===i)&&n.endsWith("/")
return u.pathname.endsWith("/")||!s&&!c||(u.pathname+="/"),u}var G=e=>e.join("/").replace(/\/\/+/g,"/"),X=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),J=e=>e&&"?"!==e?e.startsWith("?")?e:"?"+e:"",Z=e=>e&&"#"!==e?e.startsWith("#")?e:"#"+e:"",ee=["POST","PUT","PATCH","DELETE"]
new Set(ee)
var te=["GET",...ee]
new Set(te)
var ne=x.createContext(null)
ne.displayName="DataRouter"
var re=x.createContext(null)
re.displayName="DataRouterState",x.createContext(0)
var ae=x.createContext({isTransitioning:0})
ae.displayName="ViewTransition",x.createContext(new Map).displayName="Fetchers",x.createContext(null).displayName="Await"
var le=x.createContext(null)
le.displayName="Navigation"
var oe=x.createContext(null)
oe.displayName="Location"
var ie=x.createContext({outlet:null,matches:[],isDataRoute:0})
ie.displayName="Route"
var ue=x.createContext(null)
function se(){return null!=x.useContext(oe)}function ce(){return P(se(),"useLocation() may be used only in the context of a <Router> component."),x.useContext(oe).location}ue.displayName="RouteError"
var fe="You should call navigate() in a React.useEffect(), not when your component is first rendered."
function de(e){x.useContext(le).static||x.useLayoutEffect(e)}function pe(){let{isDataRoute:e}=x.useContext(ie)
return e?function(){let{router:e}=function(){let e=x.useContext(ne)
return P(e,ke("useNavigate")),e}(),t=we("useNavigate"),n=x.useRef(0)
return de(()=>{n.current=1}),x.useCallback(async(r,a={})=>{_(n.current,fe),n.current&&("number"==typeof r?e.navigate(r):await e.navigate(r,{fromRouteId:t,...a}))},[e,t])}():function(){P(se(),"useNavigate() may be used only in the context of a <Router> component.")
let e=x.useContext(ne),{basename:t,navigator:n}=x.useContext(le),{matches:r}=x.useContext(ie),{pathname:a}=ce(),l=JSON.stringify(K(r)),o=x.useRef(0)
return de(()=>{o.current=1}),x.useCallback((r,i={})=>{if(_(o.current,fe),!o.current)return
if("number"==typeof r)return void n.go(r)
let u=Y(r,JSON.parse(l),a,"path"===i.relative)
null==e&&"/"!==t&&(u.pathname="/"===u.pathname?t:G([t,u.pathname])),(i.replace?n.replace:n.push)(u,i.state,i)},[t,n,l,a,e])}()}function he(e,{relative:t}={}){let{matches:n}=x.useContext(ie),{pathname:r}=ce(),a=JSON.stringify(K(n))
return x.useMemo(()=>Y(e,JSON.parse(a),r,"path"===t),[e,a,r,t])}function me(e,t,n,r){var a
P(se(),"useRoutes() may be used only in the context of a <Router> component.")
let{navigator:l}=x.useContext(le),{matches:o}=x.useContext(ie),i=o[o.length-1],u=i?i.params:{},s=i?i.pathname:"/",c=i?i.pathnameBase:"/",f=i&&i.route
{let e=f&&f.path||""
Ee(s,!f||e.endsWith("*")||e.endsWith("*?"),`You rendered descendant <Routes> (or called \`useRoutes()\`) at "${s}" (under <Route path="${e}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.\n\nPlease change the parent <Route path="${e}"> to <Route path="${"/"===e?"*":e+"/*"}">.`)}let d,p=ce()
if(t){let e="string"==typeof t?L(t):t
P("/"===c||(null==(a=e.pathname)?void 0:a.startsWith(c)),`When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${c}" but pathname "${e.pathname}" was given in the \`location\` prop.`),d=e}else d=p
let h=d.pathname||"/",m=h
if("/"!==c){let e=c.replace(/^\//,"").split("/")
m="/"+h.replace(/^\//,"").split("/").slice(e.length).join("/")}let g=R(e,{pathname:m})
_(f||null!=g,`No routes matched location "${d.pathname}${d.search}${d.hash}" `),_(null==g||void 0!==g[g.length-1].route.element||void 0!==g[g.length-1].route.Component||void 0!==g[g.length-1].route.lazy,`Matched leaf route at location "${d.pathname}${d.search}${d.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`)
let y=function(e,t=[],n=null,r=null){if(null==e){if(!n)return null
if(n.errors)e=n.matches
else{if(0!==t.length||n.initialized||0>=n.matches.length)return null
e=n.matches}}let a=e,l=null==n?void 0:n.errors
if(null!=l){let e=a.findIndex(e=>e.route.id&&void 0!==(null==l?void 0:l[e.route.id]))
P(e>=0,"Could not find a matching route for errors on route IDs: "+Object.keys(l).join(",")),a=a.slice(0,Math.min(a.length,e+1))}let o=0,i=-1
if(n)for(let u=0;u<a.length;u++){let e=a[u]
if((e.route.HydrateFallback||e.route.hydrateFallbackElement)&&(i=u),e.route.id){let{loaderData:t,errors:r}=n,l=e.route.loader&&!t.hasOwnProperty(e.route.id)&&(!r||void 0===r[e.route.id])
if(e.route.lazy||l){o=1,a=0>i?[a[0]]:a.slice(0,i+1)
break}}}return a.reduceRight((e,u,s)=>{let c,f=0,d=null,p=null
n&&(c=l&&u.route.id?l[u.route.id]:void 0,d=u.route.errorElement||ye,o&&(0>i&&0===s?(Ee("route-fallback",0,"No `HydrateFallback` element provided to render during initial hydration"),f=1,p=null):i===s&&(f=1,p=u.route.hydrateFallbackElement||null)))
let h=t.concat(a.slice(0,s+1)),m=()=>{let t
return t=c?d:f?p:u.route.Component?x.createElement(u.route.Component,null):u.route.element?u.route.element:e,x.createElement(be,{match:u,routeContext:{outlet:e,matches:h,isDataRoute:null!=n},children:t})}
return n&&(u.route.ErrorBoundary||u.route.errorElement||0===s)?x.createElement(ve,{location:n.location,revalidation:n.revalidation,component:d,error:c,children:m(),routeContext:{outlet:null,matches:h,isDataRoute:1},unstable_onError:r}):m()},null)}(g&&g.map(e=>Object.assign({},e,{params:Object.assign({},u,e.params),pathname:G([c,l.encodeLocation?l.encodeLocation(e.pathname.replace(/\?/g,"%3F").replace(/#/g,"%23")).pathname:e.pathname]),pathnameBase:"/"===e.pathnameBase?c:G([c,l.encodeLocation?l.encodeLocation(e.pathnameBase.replace(/\?/g,"%3F").replace(/#/g,"%23")).pathname:e.pathnameBase])})),o,n,r)
return t&&y?x.createElement(oe.Provider,{value:{location:{pathname:"/",search:"",hash:"",state:null,key:"default",...d},navigationType:"POP"}},y):y}function ge(){let e=function(){var e
let t=x.useContext(ue),n=function(){let e=x.useContext(re)
return P(e,ke("useRouteError")),e}(),r=we("useRouteError")
return void 0!==t?t:null==(e=n.errors)?void 0:e[r]}(),t=function(e){return null!=e&&"number"==typeof e.status&&"string"==typeof e.statusText&&"boolean"==typeof e.internal&&"data"in e}(e)?`${e.status} ${e.statusText}`:e instanceof Error?e.message:JSON.stringify(e),n=e instanceof Error?e.stack:null,r="rgba(200,200,200, 0.5)",a={padding:"0.5rem",backgroundColor:r},l={padding:"2px 4px",backgroundColor:r},o=null
return o=x.createElement(x.Fragment,null,x.createElement("p",null,"💿 Hey developer 👋"),x.createElement("p",null,"You can provide a way better UX than this when your app throws errors by providing your own ",x.createElement("code",{style:l},"ErrorBoundary")," or"," ",x.createElement("code",{style:l},"errorElement")," prop on your route.")),x.createElement(x.Fragment,null,x.createElement("h2",null,"Unexpected Application Error!"),x.createElement("h3",{style:{fontStyle:"italic"}},t),n?x.createElement("pre",{style:a},n):null,o)}x.createContext(null)
var ye=x.createElement(ge,null),ve=class extends x.Component{constructor(e){super(e),this.state={location:e.location,revalidation:e.revalidation,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,t){return t.location!==e.location||"idle"!==t.revalidation&&"idle"===e.revalidation?{error:e.error,location:e.location,revalidation:e.revalidation}:{error:void 0!==e.error?e.error:t.error,location:t.location,revalidation:e.revalidation||t.revalidation}}componentDidCatch(e,t){this.props.unstable_onError&&this.props.unstable_onError(e,t)}render(){return void 0!==this.state.error?x.createElement(ie.Provider,{value:this.props.routeContext},x.createElement(ue.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}
function be({routeContext:e,match:t,children:n}){let r=x.useContext(ne)
return r&&r.static&&r.staticContext&&(t.route.errorElement||t.route.ErrorBoundary)&&(r.staticContext._deepestRenderedBoundaryId=t.route.id),x.createElement(ie.Provider,{value:e},n)}function ke(e){return e+" must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router."}function we(e){let t=function(e){let t=x.useContext(ie)
return P(t,ke(e)),t}(e),n=t.matches[t.matches.length-1]
return P(n.route.id,e+' can only be used on routes that contain a unique "id"'),n.route.id}var Se={}
function Ee(e,t,n){t||Se[e]||(Se[e]=1,_(0,n))}function xe(){P(0,"A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.")}function Ce({basename:e="/",children:t=null,location:n,navigationType:r="POP",navigator:a,static:l=0}){P(!se(),"You cannot render a <Router> inside another <Router>. You should never have more than one in your app.")
let o=e.replace(/^\/*/,"/"),i=x.useMemo(()=>({basename:o,navigator:a,static:l,future:{}}),[o,a,l])
"string"==typeof n&&(n=L(n))
let{pathname:u="/",search:s="",hash:c="",state:f=null,key:d="default"}=n,p=x.useMemo(()=>{let e=Q(u,o)
return null==e?null:{location:{pathname:e,search:s,hash:c,state:f,key:d},navigationType:r}},[o,u,s,c,f,d,r])
return _(null!=p,`<Router basename="${o}"> is not able to match the URL "${u}${s}${c}" because it does not start with the basename, so the <Router> won't render anything.`),null==p?null:x.createElement(le.Provider,{value:i},x.createElement(oe.Provider,{children:t,value:p}))}function Pe({children:e,location:t}){return me(_e(e),t)}function _e(e,t=[]){let n=[]
return x.Children.forEach(e,(e,r)=>{if(!x.isValidElement(e))return
let a=[...t,r]
if(e.type===x.Fragment)return void n.push.apply(n,_e(e.props.children,a))
P(e.type===xe,`[${"string"==typeof e.type?e.type:e.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`),P(!e.props.index||!e.props.children,"An index route cannot have child routes.")
let l={id:e.props.id||a.join("-"),caseSensitive:e.props.caseSensitive,element:e.props.element,Component:e.props.Component,index:e.props.index,path:e.props.path,middleware:e.props.middleware,loader:e.props.loader,action:e.props.action,hydrateFallbackElement:e.props.hydrateFallbackElement,HydrateFallback:e.props.HydrateFallback,errorElement:e.props.errorElement,ErrorBoundary:e.props.ErrorBoundary,hasErrorBoundary:1==e.props.hasErrorBoundary||null!=e.props.ErrorBoundary||null!=e.props.errorElement,shouldRevalidate:e.props.shouldRevalidate,handle:e.props.handle,lazy:e.props.lazy}
e.props.children&&(l.children=_e(e.props.children,a)),n.push(l)}),n}x.memo(function({routes:e,future:t,state:n,unstable_onError:r}){return me(e,void 0,n,r)})
var Ne="get",ze="application/x-www-form-urlencoded"
function Te(e){return null!=e&&"string"==typeof e.tagName}var Le=null,Re=new Set(["application/x-www-form-urlencoded","multipart/form-data","text/plain"])
function Oe(e){return null==e||Re.has(e)?e:(_(0,`"${e}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${ze}"`),null)}function De(e,t){if(0==e||null==e)throw Error(t)}function Ae(e){return null==e?0:null==e.href?"preload"===e.rel&&"string"==typeof e.imageSrcSet&&"string"==typeof e.imageSizes:"string"==typeof e.rel&&"string"==typeof e.href}function Fe(e,t,n,r,a,l){let o=(e,t)=>n[t]?e.route.id!==n[t].route.id:1,i=(e,t)=>{var r
return n[t].pathname!==e.pathname||(null==(r=n[t].route.path)?void 0:r.endsWith("*"))&&n[t].params["*"]!==e.params["*"]}
return"assets"===l?t.filter((e,t)=>o(e,t)||i(e,t)):"data"===l?t.filter((t,l)=>{var u
let s=r.routes[t.route.id]
if(!s||!s.hasLoader)return 0
if(o(t,l)||i(t,l))return 1
if(t.route.shouldRevalidate){let r=t.route.shouldRevalidate({currentUrl:new URL(a.pathname+a.search+a.hash,window.origin),currentParams:(null==(u=n[0])?void 0:u.params)||{},nextUrl:new URL(e,window.origin),nextParams:t.params,defaultShouldRevalidate:1})
if("boolean"==typeof r)return r}return 1}):[]}function Me(){let e=x.useContext(ne)
return De(e,"You must render this element inside a <DataRouterContext.Provider> element"),e}Object.getOwnPropertyNames(Object.prototype).sort().join("\0")
var $e=x.createContext(void 0)
function Ie(){let e=x.useContext($e)
return De(e,"You must render this element inside a <HydratedRouter> element"),e}function Ue(e,t){return n=>{e&&e(n),n.defaultPrevented||t(n)}}function je({page:e,...t}){let{router:n}=Me(),r=x.useMemo(()=>R(n.routes,e,n.basename),[n.routes,e,n.basename])
return r?x.createElement(He,{page:e,matches:r,...t}):null}function He({page:e,matches:t,...n}){let r=ce(),{manifest:a,routeModules:l}=Ie(),{basename:o}=Me(),{loaderData:i,matches:u}=function(){let e=x.useContext(re)
return De(e,"You must render this element inside a <DataRouterStateContext.Provider> element"),e}(),s=x.useMemo(()=>Fe(e,t,u,a,r,"data"),[e,t,u,a,r]),c=x.useMemo(()=>Fe(e,t,u,a,r,"assets"),[e,t,u,a,r]),f=x.useMemo(()=>{if(e===r.pathname+r.search+r.hash)return[]
let n=new Set,u=0
if(t.forEach(e=>{var t
let r=a.routes[e.route.id]
r&&r.hasLoader&&(!s.some(t=>t.route.id===e.route.id)&&e.route.id in i&&(null==(t=l[e.route.id])?void 0:t.shouldRevalidate)||r.hasClientLoader?u=1:n.add(e.route.id))}),0===n.size)return[]
let c=function(e,t,n){let r="string"==typeof e?new URL(e,"undefined"==typeof window?"server://singlefetch/":window.location.origin):e
return"/"===r.pathname?r.pathname="_root."+n:t&&"/"===Q(r.pathname,t)?r.pathname=`${t.replace(/\/$/,"")}/_root.${n}`:r.pathname=`${r.pathname.replace(/\/$/,"")}.${n}`,r}(e,o,"data")
return u&&n.size>0&&c.searchParams.set("_routes",t.filter(e=>n.has(e.route.id)).map(e=>e.route.id).join(",")),[c.pathname+c.search]},[o,i,r,a,s,t,e,l]),d=x.useMemo(()=>function(e,t,{includeHydrateFallback:n}={}){return r=e.map(e=>{let r=t.routes[e.route.id]
if(!r)return[]
let a=[r.module]
return r.clientActionModule&&(a=a.concat(r.clientActionModule)),r.clientLoaderModule&&(a=a.concat(r.clientLoaderModule)),n&&r.hydrateFallbackModule&&(a=a.concat(r.hydrateFallbackModule)),r.imports&&(a=a.concat(r.imports)),a}).flat(1),[...new Set(r)]
var r}(c,a),[c,a]),p=function(e){let{manifest:t,routeModules:n}=Ie(),[r,a]=x.useState([])
return x.useEffect(()=>{let r=0
return async function(e,t,n){return function(e){let t=new Set
return new Set(void 0),e.reduce((e,n)=>{let r=JSON.stringify(function(e){let t={},n=Object.keys(e).sort()
for(let r of n)t[r]=e[r]
return t}(n))
return t.has(r)||(t.add(r),e.push({key:r,link:n})),e},[])}((await Promise.all(e.map(async e=>{let r=t.routes[e.route.id]
if(r){let e=await async function(e,t){if(e.id in t)return t[e.id]
try{let n=await import(e.module)
return t[e.id]=n,n}catch(n){return window.__reactRouterContext&&window.__reactRouterContext.isSpaMode,window.location.reload(),new Promise(()=>{})}}(r,n)
return e.links?e.links():[]}return[]}))).flat(1).filter(Ae).filter(e=>"stylesheet"===e.rel||"preload"===e.rel).map(e=>"stylesheet"===e.rel?{...e,rel:"prefetch",as:"style"}:{...e,rel:"prefetch"}))}(e,t,n).then(e=>{r||a(e)}),()=>{r=1}},[e,t,n]),r}(c)
return x.createElement(x.Fragment,null,f.map(e=>x.createElement("link",{key:e,rel:"prefetch",as:"fetch",href:e,...n})),d.map(e=>x.createElement("link",{key:e,rel:"modulepreload",href:e,...n})),p.map(({key:e,link:t})=>x.createElement("link",{key:e,nonce:n.nonce,...t})))}function Be(...e){return t=>{e.forEach(e=>{"function"==typeof e?e(t):null!=e&&(e.current=t)})}}$e.displayName="FrameworkContext"
var We="undefined"!=typeof window&&void 0!==window.document&&void 0!==window.document.createElement
try{We&&(window.__reactRouterVersion="7.9.3")}catch(Xe){}function Ve({basename:e,children:t,window:n}){let r=x.useRef()
null==r.current&&(r.current=function(e={}){return function(e,t,n,r={}){let{window:a=document.defaultView,v5Compat:l=0}=r,o=a.history,i="POP",u=null,s=c()
function c(){return(o.state||{idx:null}).idx}function f(){i="POP"
let e=c(),t=null==e?null:e-s
s=e,u&&u({action:i,location:p.location,delta:t})}function d(e){return function(e,t=0){let n="http://localhost"
"undefined"!=typeof window&&(n="null"!==window.location.origin?window.location.origin:window.location.href),P(n,"No window.location.(origin|href) available to create URL")
let r="string"==typeof e?e:T(e)
return r=r.replace(/ $/,"%20"),!t&&r.startsWith("//")&&(r=n+r),new URL(r,n)}(e)}null==s&&(s=0,o.replaceState({...o.state,idx:s},""))
let p={get action(){return i},get location(){return e(a,o)},listen(e){if(u)throw Error("A history only accepts one active listener")
return a.addEventListener(C,f),u=e,()=>{a.removeEventListener(C,f),u=null}},createHref:e=>t(a,e),createURL:d,encodeLocation(e){let t=d(e)
return{pathname:t.pathname,search:t.search,hash:t.hash}},push:function(e,t){i="PUSH"
let n=z(p.location,e,t)
s=c()+1
let r=N(n,s),f=p.createHref(n)
try{o.pushState(r,"",f)}catch(d){if(d instanceof DOMException&&"DataCloneError"===d.name)throw d
a.location.assign(f)}l&&u&&u({action:i,location:p.location,delta:1})},replace:function(e,t){i="REPLACE"
let n=z(p.location,e,t)
s=c()
let r=N(n,s),a=p.createHref(n)
o.replaceState(r,"",a),l&&u&&u({action:i,location:p.location,delta:0})},go:e=>o.go(e)}
return p}(function(e,t){let{pathname:n,search:r,hash:a}=e.location
return z("",{pathname:n,search:r,hash:a},t.state&&t.state.usr||null,t.state&&t.state.key||"default")},function(e,t){return"string"==typeof t?t:T(t)},0,e)}({window:n,v5Compat:1}))
let a=r.current,[l,o]=x.useState({action:a.action,location:a.location}),i=x.useCallback(e=>{x.startTransition(()=>o(e))},[o])
return x.useLayoutEffect(()=>a.listen(i),[a,i]),x.createElement(Ce,{basename:e,children:t,location:l.location,navigationType:l.action,navigator:a})}var Qe=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,qe=x.forwardRef(function({onClick:e,discover:t="render",prefetch:n="none",relative:r,reloadDocument:a,replace:l,state:o,target:i,to:u,preventScrollReset:s,viewTransition:c,...f},d){let p,{basename:h}=x.useContext(le),m="string"==typeof u&&Qe.test(u),g=0
if("string"==typeof u&&m&&(p=u,We))try{let e=new URL(window.location.href),t=u.startsWith("//")?new URL(e.protocol+u):new URL(u),n=Q(t.pathname,h)
t.origin===e.origin&&null!=n?u=n+t.search+t.hash:g=1}catch(Xe){_(0,`<Link to="${u}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`)}let y=function(e,{relative:t}={}){P(se(),"useHref() may be used only in the context of a <Router> component.")
let{basename:n,navigator:r}=x.useContext(le),{hash:a,pathname:l,search:o}=he(e,{relative:t}),i=l
return"/"!==n&&(i="/"===l?n:G([n,l])),r.createHref({pathname:i,search:o,hash:a})}(u,{relative:r}),[v,b,k]=function(e,t){let n=x.useContext($e),[r,a]=x.useState(0),[l,o]=x.useState(0),{onFocus:i,onBlur:u,onMouseEnter:s,onMouseLeave:c,onTouchStart:f}=t,d=x.useRef(null)
x.useEffect(()=>{if("render"===e&&o(1),"viewport"===e){let e=new IntersectionObserver(e=>{e.forEach(e=>{o(e.isIntersecting)})},{threshold:.5})
return d.current&&e.observe(d.current),()=>{e.disconnect()}}},[e]),x.useEffect(()=>{if(r){let e=setTimeout(()=>{o(1)},100)
return()=>{clearTimeout(e)}}},[r])
let p=()=>{a(1)},h=()=>{a(0),o(0)}
return n?"intent"!==e?[l,d,{}]:[l,d,{onFocus:Ue(i,p),onBlur:Ue(u,h),onMouseEnter:Ue(s,p),onMouseLeave:Ue(c,h),onTouchStart:Ue(f,p)}]:[0,d,{}]}(n,f),w=function(e,{target:t,replace:n,state:r,preventScrollReset:a,relative:l,viewTransition:o}={}){let i=pe(),u=ce(),s=he(e,{relative:l})
return x.useCallback(c=>{if(function(e,t){return!(0!==e.button||t&&"_self"!==t||function(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}(e))}(c,t)){c.preventDefault()
let t=void 0!==n?n:T(u)===T(s)
i(e,{replace:t,state:r,preventScrollReset:a,relative:l,viewTransition:o})}},[u,i,s,n,r,t,e,a,l,o])}(u,{replace:l,state:o,target:i,preventScrollReset:s,relative:r,viewTransition:c}),S=x.createElement("a",{...f,...k,href:p||y,onClick:g||a?e:function(t){e&&e(t),t.defaultPrevented||w(t)},ref:Be(d,b),target:i,"data-discover":m||"render"!==t?void 0:"true"})
return v&&!m?x.createElement(x.Fragment,null,S,x.createElement(je,{page:y})):S})
function Ke(e){let t=x.useContext(ne)
return P(t,function(e){return e+" must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router."}(e)),t}qe.displayName="Link",x.forwardRef(function({"aria-current":e="page",caseSensitive:t=0,className:n="",end:r=0,style:a,to:l,viewTransition:o,children:i,...u},s){let c=he(l,{relative:u.relative}),f=ce(),d=x.useContext(re),{navigator:p,basename:h}=x.useContext(le),m=null!=d&&function(e,{relative:t}={}){let n=x.useContext(ae)
P(null!=n,"`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?")
let{basename:r}=Ke("useViewTransitionState"),a=he(e,{relative:t})
if(!n.isTransitioning)return 0
let l=Q(n.currentLocation.pathname,r)||n.currentLocation.pathname,o=Q(n.nextLocation.pathname,r)||n.nextLocation.pathname
return null!=W(a.pathname,o)||null!=W(a.pathname,l)}(c)&&1==o,g=p.encodeLocation?p.encodeLocation(c).pathname:c.pathname,y=f.pathname,v=d&&d.navigation&&d.navigation.location?d.navigation.location.pathname:null
t||(y=y.toLowerCase(),v=v?v.toLowerCase():null,g=g.toLowerCase()),v&&h&&(v=Q(v,h)||v)
const b="/"!==g&&g.endsWith("/")?g.length-1:g.length
let k,w=y===g||!r&&y.startsWith(g)&&"/"===y.charAt(b),S=null!=v&&(v===g||!r&&v.startsWith(g)&&"/"===v.charAt(g.length)),E={isActive:w,isPending:S,isTransitioning:m},C=w?e:void 0
k="function"==typeof n?n(E):[n,w?"active":null,S?"pending":null,m?"transitioning":null].filter(Boolean).join(" ")
let _="function"==typeof a?a(E):a
return x.createElement(qe,{...u,"aria-current":C,className:k,ref:s,style:_,to:l,viewTransition:o},"function"==typeof i?i(E):i)}).displayName="NavLink",x.forwardRef(({discover:e="render",fetcherKey:t,navigate:n,reloadDocument:r,replace:a,state:l,method:o=Ne,action:i,onSubmit:u,relative:s,preventScrollReset:c,viewTransition:f,...d},p)=>{let h=function(){let{router:e}=Ke("useSubmit"),{basename:t}=x.useContext(le),n=we("useRouteId")
return x.useCallback(async(r,a={})=>{let{action:l,method:o,encType:i,formData:u,body:s}=function(e,t){let n,r,a,l,o
if(Te(i=e)&&"form"===i.tagName.toLowerCase()){let o=e.getAttribute("action")
r=o?Q(o,t):null,n=e.getAttribute("method")||Ne,a=Oe(e.getAttribute("enctype"))||ze,l=new FormData(e)}else if(function(e){return Te(e)&&"button"===e.tagName.toLowerCase()}(e)||function(e){return Te(e)&&"input"===e.tagName.toLowerCase()}(e)&&("submit"===e.type||"image"===e.type)){let o=e.form
if(null==o)throw Error('Cannot submit a <button> or <input type="submit"> without a <form>')
let i=e.getAttribute("formaction")||o.getAttribute("action")
if(r=i?Q(i,t):null,n=e.getAttribute("formmethod")||o.getAttribute("method")||Ne,a=Oe(e.getAttribute("formenctype"))||Oe(o.getAttribute("enctype"))||ze,l=new FormData(o,e),!function(){if(null===Le)try{new FormData(document.createElement("form"),0),Le=0}catch(Xe){Le=1}return Le}()){let{name:t,type:n,value:r}=e
if("image"===n){let e=t?t+".":""
l.append(e+"x","0"),l.append(e+"y","0")}else t&&l.append(t,r)}}else{if(Te(e))throw Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">')
n=Ne,r=null,a=ze,o=e}var i
return l&&"text/plain"===a&&(o=l,l=void 0),{action:r,method:n.toLowerCase(),encType:a,formData:l,body:o}}(r,t)
if(0==a.navigate){let t=a.fetcherKey||Ge()
await e.fetch(t,n,a.action||l,{preventScrollReset:a.preventScrollReset,formData:u,body:s,formMethod:a.method||o,formEncType:a.encType||i,flushSync:a.flushSync})}else await e.navigate(a.action||l,{preventScrollReset:a.preventScrollReset,formData:u,body:s,formMethod:a.method||o,formEncType:a.encType||i,replace:a.replace,state:a.state,fromRouteId:n,flushSync:a.flushSync,viewTransition:a.viewTransition})},[e,t,n])}(),m=function(e,{relative:t}={}){let{basename:n}=x.useContext(le),r=x.useContext(ie)
P(r,"useFormAction must be used inside a RouteContext")
let[a]=r.matches.slice(-1),l={...he(e||".",{relative:t})},o=ce()
if(null==e){l.search=o.search
let e=new URLSearchParams(l.search),t=e.getAll("index")
if(t.some(e=>""===e)){e.delete("index"),t.filter(e=>e).forEach(t=>e.append("index",t))
let n=e.toString()
l.search=n?"?"+n:""}}return e&&"."!==e||!a.route.index||(l.search=l.search?l.search.replace(/^\?/,"?index&"):"?index"),"/"!==n&&(l.pathname="/"===l.pathname?n:G([n,l.pathname])),T(l)}(i,{relative:s}),g="get"===o.toLowerCase()?"get":"post",y="string"==typeof i&&Qe.test(i)
return x.createElement("form",{ref:p,method:g,action:m,onSubmit:r?u:e=>{if(u&&u(e),e.defaultPrevented)return
e.preventDefault()
let r=e.nativeEvent.submitter,i=(null==r?void 0:r.getAttribute("formmethod"))||o
h(r||e.currentTarget,{fetcherKey:t,method:i,navigate:n,replace:a,state:l,relative:s,preventScrollReset:c,viewTransition:f})},...d,"data-discover":y||"render"!==e?void 0:"true"})}).displayName="Form"
var Ye=0,Ge=()=>`__${++Ye+""}__`
export{Ve as B,qe as L,Pe as R,ce as a,xe as b,E as c,u as j,x as r,pe as u}
