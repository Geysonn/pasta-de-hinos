var e=Object.create,t=Object.defineProperty,n=Object.getOwnPropertyDescriptor,r=Object.getOwnPropertyNames,i=Object.getPrototypeOf,a=Object.prototype.hasOwnProperty,o=(e,t)=>()=>(t||(e((t={exports:{}}).exports,t),e=null),t.exports),s=(e,i,o,s)=>{if(i&&typeof i==`object`||typeof i==`function`)for(var c=r(i),l=0,u=c.length,d;l<u;l++)d=c[l],!a.call(e,d)&&d!==o&&t(e,d,{get:(e=>i[e]).bind(null,d),enumerable:!(s=n(i,d))||s.enumerable});return e},c=(n,r,o)=>(o=n==null?{}:e(i(n)),s(r||!n||!n.__esModule||!a.call(n,`default`)?t(o,`default`,{value:n,enumerable:!0}):o,n));(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),t.credentials=e.crossOrigin===`use-credentials`?`include`:e.crossOrigin===`anonymous`?`omit`:`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();var l=o((e=>{var t=Symbol.for(`react.transitional.element`),n=Symbol.for(`react.portal`),r=Symbol.for(`react.fragment`),i=Symbol.for(`react.strict_mode`),a=Symbol.for(`react.profiler`),o=Symbol.for(`react.consumer`),s=Symbol.for(`react.context`),c=Symbol.for(`react.forward_ref`),l=Symbol.for(`react.suspense`),u=Symbol.for(`react.memo`),d=Symbol.for(`react.lazy`),f=Symbol.for(`react.activity`),p=Symbol.iterator;function m(e){return typeof e!=`object`||!e?null:(e=p&&e[p]||e[`@@iterator`],typeof e==`function`?e:null)}var h={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},g=Object.assign,_={};function v(e,t,n){this.props=e,this.context=t,this.refs=_,this.updater=n||h}v.prototype.isReactComponent={},v.prototype.setState=function(e,t){if(typeof e!=`object`&&typeof e!=`function`&&e!=null)throw Error(`takes an object of state variables to update or a function which returns an object of state variables.`);this.updater.enqueueSetState(this,e,t,`setState`)},v.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,`forceUpdate`)};function y(){}y.prototype=v.prototype;function b(e,t,n){this.props=e,this.context=t,this.refs=_,this.updater=n||h}var x=b.prototype=new y;x.constructor=b,g(x,v.prototype),x.isPureReactComponent=!0;var ee=Array.isArray;function S(){}var C={H:null,A:null,T:null,S:null},te=Object.prototype.hasOwnProperty;function ne(e,n,r){var i=r.ref;return{$$typeof:t,type:e,key:n,ref:i===void 0?null:i,props:r}}function re(e,t){return ne(e.type,t,e.props)}function w(e){return typeof e==`object`&&!!e&&e.$$typeof===t}function T(e){var t={"=":`=0`,":":`=2`};return`$`+e.replace(/[=:]/g,function(e){return t[e]})}var ie=/\/+/g;function ae(e,t){return typeof e==`object`&&e&&e.key!=null?T(``+e.key):t.toString(36)}function oe(e){switch(e.status){case`fulfilled`:return e.value;case`rejected`:throw e.reason;default:switch(typeof e.status==`string`?e.then(S,S):(e.status=`pending`,e.then(function(t){e.status===`pending`&&(e.status=`fulfilled`,e.value=t)},function(t){e.status===`pending`&&(e.status=`rejected`,e.reason=t)})),e.status){case`fulfilled`:return e.value;case`rejected`:throw e.reason}}throw e}function se(e,r,i,a,o){var s=typeof e;(s===`undefined`||s===`boolean`)&&(e=null);var c=!1;if(e===null)c=!0;else switch(s){case`bigint`:case`string`:case`number`:c=!0;break;case`object`:switch(e.$$typeof){case t:case n:c=!0;break;case d:return c=e._init,se(c(e._payload),r,i,a,o)}}if(c)return o=o(e),c=a===``?`.`+ae(e,0):a,ee(o)?(i=``,c!=null&&(i=c.replace(ie,`$&/`)+`/`),se(o,r,i,``,function(e){return e})):o!=null&&(w(o)&&(o=re(o,i+(o.key==null||e&&e.key===o.key?``:(``+o.key).replace(ie,`$&/`)+`/`)+c)),r.push(o)),1;c=0;var l=a===``?`.`:a+`:`;if(ee(e))for(var u=0;u<e.length;u++)a=e[u],s=l+ae(a,u),c+=se(a,r,i,s,o);else if(u=m(e),typeof u==`function`)for(e=u.call(e),u=0;!(a=e.next()).done;)a=a.value,s=l+ae(a,u++),c+=se(a,r,i,s,o);else if(s===`object`){if(typeof e.then==`function`)return se(oe(e),r,i,a,o);throw r=String(e),Error(`Objects are not valid as a React child (found: `+(r===`[object Object]`?`object with keys {`+Object.keys(e).join(`, `)+`}`:r)+`). If you meant to render a collection of children, use an array instead.`)}return c}function ce(e,t,n){if(e==null)return e;var r=[],i=0;return se(e,r,``,``,function(e){return t.call(n,e,i++)}),r}function le(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(t){(e._status===0||e._status===-1)&&(e._status=1,e._result=t)},function(t){(e._status===0||e._status===-1)&&(e._status=2,e._result=t)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var E=typeof reportError==`function`?reportError:function(e){if(typeof window==`object`&&typeof window.ErrorEvent==`function`){var t=new window.ErrorEvent(`error`,{bubbles:!0,cancelable:!0,message:typeof e==`object`&&e&&typeof e.message==`string`?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process==`object`&&typeof process.emit==`function`){process.emit(`uncaughtException`,e);return}console.error(e)},D={map:ce,forEach:function(e,t,n){ce(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return ce(e,function(){t++}),t},toArray:function(e){return ce(e,function(e){return e})||[]},only:function(e){if(!w(e))throw Error(`React.Children.only expected to receive a single React element child.`);return e}};e.Activity=f,e.Children=D,e.Component=v,e.Fragment=r,e.Profiler=a,e.PureComponent=b,e.StrictMode=i,e.Suspense=l,e.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=C,e.__COMPILER_RUNTIME={__proto__:null,c:function(e){return C.H.useMemoCache(e)}},e.cache=function(e){return function(){return e.apply(null,arguments)}},e.cacheSignal=function(){return null},e.cloneElement=function(e,t,n){if(e==null)throw Error(`The argument must be a React element, but you passed `+e+`.`);var r=g({},e.props),i=e.key;if(t!=null)for(a in t.key!==void 0&&(i=``+t.key),t)!te.call(t,a)||a===`key`||a===`__self`||a===`__source`||a===`ref`&&t.ref===void 0||(r[a]=t[a]);var a=arguments.length-2;if(a===1)r.children=n;else if(1<a){for(var o=Array(a),s=0;s<a;s++)o[s]=arguments[s+2];r.children=o}return ne(e.type,i,r)},e.createContext=function(e){return e={$$typeof:s,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null},e.Provider=e,e.Consumer={$$typeof:o,_context:e},e},e.createElement=function(e,t,n){var r,i={},a=null;if(t!=null)for(r in t.key!==void 0&&(a=``+t.key),t)te.call(t,r)&&r!==`key`&&r!==`__self`&&r!==`__source`&&(i[r]=t[r]);var o=arguments.length-2;if(o===1)i.children=n;else if(1<o){for(var s=Array(o),c=0;c<o;c++)s[c]=arguments[c+2];i.children=s}if(e&&e.defaultProps)for(r in o=e.defaultProps,o)i[r]===void 0&&(i[r]=o[r]);return ne(e,a,i)},e.createRef=function(){return{current:null}},e.forwardRef=function(e){return{$$typeof:c,render:e}},e.isValidElement=w,e.lazy=function(e){return{$$typeof:d,_payload:{_status:-1,_result:e},_init:le}},e.memo=function(e,t){return{$$typeof:u,type:e,compare:t===void 0?null:t}},e.startTransition=function(e){var t=C.T,n={};C.T=n;try{var r=e(),i=C.S;i!==null&&i(n,r),typeof r==`object`&&r&&typeof r.then==`function`&&r.then(S,E)}catch(e){E(e)}finally{t!==null&&n.types!==null&&(t.types=n.types),C.T=t}},e.unstable_useCacheRefresh=function(){return C.H.useCacheRefresh()},e.use=function(e){return C.H.use(e)},e.useActionState=function(e,t,n){return C.H.useActionState(e,t,n)},e.useCallback=function(e,t){return C.H.useCallback(e,t)},e.useContext=function(e){return C.H.useContext(e)},e.useDebugValue=function(){},e.useDeferredValue=function(e,t){return C.H.useDeferredValue(e,t)},e.useEffect=function(e,t){return C.H.useEffect(e,t)},e.useEffectEvent=function(e){return C.H.useEffectEvent(e)},e.useId=function(){return C.H.useId()},e.useImperativeHandle=function(e,t,n){return C.H.useImperativeHandle(e,t,n)},e.useInsertionEffect=function(e,t){return C.H.useInsertionEffect(e,t)},e.useLayoutEffect=function(e,t){return C.H.useLayoutEffect(e,t)},e.useMemo=function(e,t){return C.H.useMemo(e,t)},e.useOptimistic=function(e,t){return C.H.useOptimistic(e,t)},e.useReducer=function(e,t,n){return C.H.useReducer(e,t,n)},e.useRef=function(e){return C.H.useRef(e)},e.useState=function(e){return C.H.useState(e)},e.useSyncExternalStore=function(e,t,n){return C.H.useSyncExternalStore(e,t,n)},e.useTransition=function(){return C.H.useTransition()},e.version=`19.2.8`})),u=o(((e,t)=>{t.exports=l()})),d=o((e=>{function t(e,t){var n=e.length;e.push(t);a:for(;0<n;){var r=n-1>>>1,a=e[r];if(0<i(a,t))e[r]=t,e[n]=a,n=r;else break a}}function n(e){return e.length===0?null:e[0]}function r(e){if(e.length===0)return null;var t=e[0],n=e.pop();if(n!==t){e[0]=n;a:for(var r=0,a=e.length,o=a>>>1;r<o;){var s=2*(r+1)-1,c=e[s],l=s+1,u=e[l];if(0>i(c,n))l<a&&0>i(u,c)?(e[r]=u,e[l]=n,r=l):(e[r]=c,e[s]=n,r=s);else if(l<a&&0>i(u,n))e[r]=u,e[l]=n,r=l;else break a}}return t}function i(e,t){var n=e.sortIndex-t.sortIndex;return n===0?e.id-t.id:n}if(e.unstable_now=void 0,typeof performance==`object`&&typeof performance.now==`function`){var a=performance;e.unstable_now=function(){return a.now()}}else{var o=Date,s=o.now();e.unstable_now=function(){return o.now()-s}}var c=[],l=[],u=1,d=null,f=3,p=!1,m=!1,h=!1,g=!1,_=typeof setTimeout==`function`?setTimeout:null,v=typeof clearTimeout==`function`?clearTimeout:null,y=typeof setImmediate<`u`?setImmediate:null;function b(e){for(var i=n(l);i!==null;){if(i.callback===null)r(l);else if(i.startTime<=e)r(l),i.sortIndex=i.expirationTime,t(c,i);else break;i=n(l)}}function x(e){if(h=!1,b(e),!m){if(n(c)!==null)m=!0,ee||(ee=!0,w());else{var t=n(l);t!==null&&ae(x,t.startTime-e)}}}var ee=!1,S=-1,C=5,te=-1;function ne(){return g?!0:!(e.unstable_now()-te<C)}function re(){if(g=!1,ee){var t=e.unstable_now();te=t;var i=!0;try{a:{m=!1,h&&(h=!1,v(S),S=-1),p=!0;var a=f;try{b:{for(b(t),d=n(c);d!==null&&!(d.expirationTime>t&&ne());){var o=d.callback;if(typeof o==`function`){d.callback=null,f=d.priorityLevel;var s=o(d.expirationTime<=t);if(t=e.unstable_now(),typeof s==`function`){d.callback=s,b(t),i=!0;break b}d===n(c)&&r(c),b(t)}else r(c);d=n(c)}if(d!==null)i=!0;else{var u=n(l);u!==null&&ae(x,u.startTime-t),i=!1}}break a}finally{d=null,f=a,p=!1}}}finally{i?w():ee=!1}}}var w;if(typeof y==`function`)w=function(){y(re)};else if(typeof MessageChannel<`u`){var T=new MessageChannel,ie=T.port2;T.port1.onmessage=re,w=function(){ie.postMessage(null)}}else w=function(){_(re,0)};function ae(t,n){S=_(function(){t(e.unstable_now())},n)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(e){e.callback=null},e.unstable_forceFrameRate=function(e){0>e||125<e?console.error(`forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported`):C=0<e?Math.floor(1e3/e):5},e.unstable_getCurrentPriorityLevel=function(){return f},e.unstable_next=function(e){switch(f){case 1:case 2:case 3:var t=3;break;default:t=f}var n=f;f=t;try{return e()}finally{f=n}},e.unstable_requestPaint=function(){g=!0},e.unstable_runWithPriority=function(e,t){switch(e){case 1:case 2:case 3:case 4:case 5:break;default:e=3}var n=f;f=e;try{return t()}finally{f=n}},e.unstable_scheduleCallback=function(r,i,a){var o=e.unstable_now();switch(typeof a==`object`&&a?(a=a.delay,a=typeof a==`number`&&0<a?o+a:o):a=o,r){case 1:var s=-1;break;case 2:s=250;break;case 5:s=1073741823;break;case 4:s=1e4;break;default:s=5e3}return s=a+s,r={id:u++,callback:i,priorityLevel:r,startTime:a,expirationTime:s,sortIndex:-1},a>o?(r.sortIndex=a,t(l,r),n(c)===null&&r===n(l)&&(h?(v(S),S=-1):h=!0,ae(x,a-o))):(r.sortIndex=s,t(c,r),m||p||(m=!0,ee||(ee=!0,w()))),r},e.unstable_shouldYield=ne,e.unstable_wrapCallback=function(e){var t=f;return function(){var n=f;f=t;try{return e.apply(this,arguments)}finally{f=n}}}})),f=o(((e,t)=>{t.exports=d()})),p=o((e=>{var t=u();function n(e){var t=`https://react.dev/errors/`+e;if(1<arguments.length){t+=`?args[]=`+encodeURIComponent(arguments[1]);for(var n=2;n<arguments.length;n++)t+=`&args[]=`+encodeURIComponent(arguments[n])}return`Minified React error #`+e+`; visit `+t+` for the full message or use the non-minified dev environment for full errors and additional helpful warnings.`}function r(){}var i={d:{f:r,r:function(){throw Error(n(522))},D:r,C:r,L:r,m:r,X:r,S:r,M:r},p:0,findDOMNode:null},a=Symbol.for(`react.portal`);function o(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:a,key:r==null?null:``+r,children:e,containerInfo:t,implementation:n}}var s=t.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function c(e,t){if(e===`font`)return``;if(typeof t==`string`)return t===`use-credentials`?t:``}e.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=i,e.createPortal=function(e,t){var r=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)throw Error(n(299));return o(e,t,null,r)},e.flushSync=function(e){var t=s.T,n=i.p;try{if(s.T=null,i.p=2,e)return e()}finally{s.T=t,i.p=n,i.d.f()}},e.preconnect=function(e,t){typeof e==`string`&&(t?(t=t.crossOrigin,t=typeof t==`string`?t===`use-credentials`?t:``:void 0):t=null,i.d.C(e,t))},e.prefetchDNS=function(e){typeof e==`string`&&i.d.D(e)},e.preinit=function(e,t){if(typeof e==`string`&&t&&typeof t.as==`string`){var n=t.as,r=c(n,t.crossOrigin),a=typeof t.integrity==`string`?t.integrity:void 0,o=typeof t.fetchPriority==`string`?t.fetchPriority:void 0;n===`style`?i.d.S(e,typeof t.precedence==`string`?t.precedence:void 0,{crossOrigin:r,integrity:a,fetchPriority:o}):n===`script`&&i.d.X(e,{crossOrigin:r,integrity:a,fetchPriority:o,nonce:typeof t.nonce==`string`?t.nonce:void 0})}},e.preinitModule=function(e,t){if(typeof e==`string`){if(typeof t==`object`&&t){if(t.as==null||t.as===`script`){var n=c(t.as,t.crossOrigin);i.d.M(e,{crossOrigin:n,integrity:typeof t.integrity==`string`?t.integrity:void 0,nonce:typeof t.nonce==`string`?t.nonce:void 0})}}else t??i.d.M(e)}},e.preload=function(e,t){if(typeof e==`string`&&typeof t==`object`&&t&&typeof t.as==`string`){var n=t.as,r=c(n,t.crossOrigin);i.d.L(e,n,{crossOrigin:r,integrity:typeof t.integrity==`string`?t.integrity:void 0,nonce:typeof t.nonce==`string`?t.nonce:void 0,type:typeof t.type==`string`?t.type:void 0,fetchPriority:typeof t.fetchPriority==`string`?t.fetchPriority:void 0,referrerPolicy:typeof t.referrerPolicy==`string`?t.referrerPolicy:void 0,imageSrcSet:typeof t.imageSrcSet==`string`?t.imageSrcSet:void 0,imageSizes:typeof t.imageSizes==`string`?t.imageSizes:void 0,media:typeof t.media==`string`?t.media:void 0})}},e.preloadModule=function(e,t){if(typeof e==`string`){if(t){var n=c(t.as,t.crossOrigin);i.d.m(e,{as:typeof t.as==`string`&&t.as!==`script`?t.as:void 0,crossOrigin:n,integrity:typeof t.integrity==`string`?t.integrity:void 0})}else i.d.m(e)}},e.requestFormReset=function(e){i.d.r(e)},e.unstable_batchedUpdates=function(e,t){return e(t)},e.useFormState=function(e,t,n){return s.H.useFormState(e,t,n)},e.useFormStatus=function(){return s.H.useHostTransitionStatus()},e.version=`19.2.8`})),m=o(((e,t)=>{function n(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>`u`||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!=`function`))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n)}catch(e){console.error(e)}}n(),t.exports=p()})),h=o((e=>{var t=f(),n=u(),r=m();function i(e){var t=`https://react.dev/errors/`+e;if(1<arguments.length){t+=`?args[]=`+encodeURIComponent(arguments[1]);for(var n=2;n<arguments.length;n++)t+=`&args[]=`+encodeURIComponent(arguments[n])}return`Minified React error #`+e+`; visit `+t+` for the full message or use the non-minified dev environment for full errors and additional helpful warnings.`}function a(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function o(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function s(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function c(e){if(e.tag===31){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function l(e){if(o(e)!==e)throw Error(i(188))}function d(e){var t=e.alternate;if(!t){if(t=o(e),t===null)throw Error(i(188));return t===e?e:null}for(var n=e,r=t;;){var a=n.return;if(a===null)break;var s=a.alternate;if(s===null){if(r=a.return,r!==null){n=r;continue}break}if(a.child===s.child){for(s=a.child;s;){if(s===n)return l(a),e;if(s===r)return l(a),t;s=s.sibling}throw Error(i(188))}if(n.return!==r.return)n=a,r=s;else{for(var c=!1,u=a.child;u;){if(u===n){c=!0,n=a,r=s;break}if(u===r){c=!0,r=a,n=s;break}u=u.sibling}if(!c){for(u=s.child;u;){if(u===n){c=!0,n=s,r=a;break}if(u===r){c=!0,r=s,n=a;break}u=u.sibling}if(!c)throw Error(i(189))}}if(n.alternate!==r)throw Error(i(190))}if(n.tag!==3)throw Error(i(188));return n.stateNode.current===n?e:t}function p(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e;for(e=e.child;e!==null;){if(t=p(e),t!==null)return t;e=e.sibling}return null}var h=Object.assign,g=Symbol.for(`react.element`),_=Symbol.for(`react.transitional.element`),v=Symbol.for(`react.portal`),y=Symbol.for(`react.fragment`),b=Symbol.for(`react.strict_mode`),x=Symbol.for(`react.profiler`),ee=Symbol.for(`react.consumer`),S=Symbol.for(`react.context`),C=Symbol.for(`react.forward_ref`),te=Symbol.for(`react.suspense`),ne=Symbol.for(`react.suspense_list`),re=Symbol.for(`react.memo`),w=Symbol.for(`react.lazy`),T=Symbol.for(`react.activity`),ie=Symbol.for(`react.memo_cache_sentinel`),ae=Symbol.iterator;function oe(e){return typeof e!=`object`||!e?null:(e=ae&&e[ae]||e[`@@iterator`],typeof e==`function`?e:null)}var se=Symbol.for(`react.client.reference`);function ce(e){if(e==null)return null;if(typeof e==`function`)return e.$$typeof===se?null:e.displayName||e.name||null;if(typeof e==`string`)return e;switch(e){case y:return`Fragment`;case x:return`Profiler`;case b:return`StrictMode`;case te:return`Suspense`;case ne:return`SuspenseList`;case T:return`Activity`}if(typeof e==`object`)switch(e.$$typeof){case v:return`Portal`;case S:return e.displayName||`Context`;case ee:return(e._context.displayName||`Context`)+`.Consumer`;case C:var t=e.render;return e=e.displayName,e||=(e=t.displayName||t.name||``,e===``?`ForwardRef`:`ForwardRef(`+e+`)`),e;case re:return t=e.displayName||null,t===null?ce(e.type)||`Memo`:t;case w:t=e._payload,e=e._init;try{return ce(e(t))}catch{}}return null}var le=Array.isArray,E=n.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,D=r.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,ue={pending:!1,data:null,method:null,action:null},de=[],fe=-1;function pe(e){return{current:e}}function me(e){0>fe||(e.current=de[fe],de[fe]=null,fe--)}function O(e,t){fe++,de[fe]=e.current,e.current=t}var he=pe(null),ge=pe(null),_e=pe(null),ve=pe(null);function ye(e,t){switch(O(_e,t),O(ge,e),O(he,null),t.nodeType){case 9:case 11:e=(e=t.documentElement)&&(e=e.namespaceURI)?Vd(e):0;break;default:if(e=t.tagName,t=t.namespaceURI)t=Vd(t),e=Hd(t,e);else switch(e){case`svg`:e=1;break;case`math`:e=2;break;default:e=0}}me(he),O(he,e)}function be(){me(he),me(ge),me(_e)}function xe(e){e.memoizedState!==null&&O(ve,e);var t=he.current,n=Hd(t,e.type);t!==n&&(O(ge,e),O(he,n))}function Se(e){ge.current===e&&(me(he),me(ge)),ve.current===e&&(me(ve),Qf._currentValue=ue)}var Ce,we;function Te(e){if(Ce===void 0)try{throw Error()}catch(e){var t=e.stack.trim().match(/\n( *(at )?)/);Ce=t&&t[1]||``,we=-1<e.stack.indexOf(`
    at`)?` (<anonymous>)`:-1<e.stack.indexOf(`@`)?`@unknown:0:0`:``}return`
`+Ce+e+we}var Ee=!1;function De(e,t){if(!e||Ee)return``;Ee=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var r={DetermineComponentFrameRoot:function(){try{if(t){var n=function(){throw Error()};if(Object.defineProperty(n.prototype,"props",{set:function(){throw Error()}}),typeof Reflect==`object`&&Reflect.construct){try{Reflect.construct(n,[])}catch(e){var r=e}Reflect.construct(e,[],n)}else{try{n.call()}catch(e){r=e}e.call(n.prototype)}}else{try{throw Error()}catch(e){r=e}(n=e())&&typeof n.catch==`function`&&n.catch(function(){})}}catch(e){if(e&&r&&typeof e.stack==`string`)return[e.stack,r.stack]}return[null,null]}};r.DetermineComponentFrameRoot.displayName=`DetermineComponentFrameRoot`;var i=Object.getOwnPropertyDescriptor(r.DetermineComponentFrameRoot,`name`);i&&i.configurable&&Object.defineProperty(r.DetermineComponentFrameRoot,"name",{value:`DetermineComponentFrameRoot`});var a=r.DetermineComponentFrameRoot(),o=a[0],s=a[1];if(o&&s){var c=o.split(`
`),l=s.split(`
`);for(i=r=0;r<c.length&&!c[r].includes(`DetermineComponentFrameRoot`);)r++;for(;i<l.length&&!l[i].includes(`DetermineComponentFrameRoot`);)i++;if(r===c.length||i===l.length)for(r=c.length-1,i=l.length-1;1<=r&&0<=i&&c[r]!==l[i];)i--;for(;1<=r&&0<=i;r--,i--)if(c[r]!==l[i]){if(r!==1||i!==1)do if(r--,i--,0>i||c[r]!==l[i]){var u=`
`+c[r].replace(` at new `,` at `);return e.displayName&&u.includes(`<anonymous>`)&&(u=u.replace(`<anonymous>`,e.displayName)),u}while(1<=r&&0<=i);break}}}finally{Ee=!1,Error.prepareStackTrace=n}return(n=e?e.displayName||e.name:``)?Te(n):``}function Oe(e,t){switch(e.tag){case 26:case 27:case 5:return Te(e.type);case 16:return Te(`Lazy`);case 13:return e.child!==t&&t!==null?Te(`Suspense Fallback`):Te(`Suspense`);case 19:return Te(`SuspenseList`);case 0:case 15:return De(e.type,!1);case 11:return De(e.type.render,!1);case 1:return De(e.type,!0);case 31:return Te(`Activity`);default:return``}}function ke(e){try{var t=``,n=null;do t+=Oe(e,n),n=e,e=e.return;while(e);return t}catch(e){return`
Error generating stack: `+e.message+`
`+e.stack}}var Ae=Object.prototype.hasOwnProperty,je=t.unstable_scheduleCallback,Me=t.unstable_cancelCallback,Ne=t.unstable_shouldYield,Pe=t.unstable_requestPaint,Fe=t.unstable_now,Ie=t.unstable_getCurrentPriorityLevel,Le=t.unstable_ImmediatePriority,Re=t.unstable_UserBlockingPriority,ze=t.unstable_NormalPriority,Be=t.unstable_LowPriority,Ve=t.unstable_IdlePriority,He=t.log,Ue=t.unstable_setDisableYieldValue,We=null,Ge=null;function Ke(e){if(typeof He==`function`&&Ue(e),Ge&&typeof Ge.setStrictMode==`function`)try{Ge.setStrictMode(We,e)}catch{}}var qe=Math.clz32?Math.clz32:Xe,Je=Math.log,Ye=Math.LN2;function Xe(e){return e>>>=0,e===0?32:31-(Je(e)/Ye|0)|0}var Ze=256,Qe=262144,$e=4194304;function et(e){var t=e&42;if(t!==0)return t;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return e&261888;case 262144:case 524288:case 1048576:case 2097152:return e&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function tt(e,t,n){var r=e.pendingLanes;if(r===0)return 0;var i=0,a=e.suspendedLanes,o=e.pingedLanes;e=e.warmLanes;var s=r&134217727;return s===0?(s=r&~a,s===0?o===0?n||(n=r&~e,n!==0&&(i=et(n))):i=et(o):i=et(s)):(r=s&~a,r===0?(o&=s,o===0?n||(n=s&~e,n!==0&&(i=et(n))):i=et(o)):i=et(r)),i===0?0:t!==0&&t!==i&&(t&a)===0&&(a=i&-i,n=t&-t,a>=n||a===32&&n&4194048)?t:i}function nt(e,t){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&t)===0}function rt(e,t){switch(e){case 1:case 2:case 4:case 8:case 64:return t+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function it(){var e=$e;return $e<<=1,!($e&62914560)&&($e=4194304),e}function at(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function ot(e,t){e.pendingLanes|=t,t!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function st(e,t,n,r,i,a){var o=e.pendingLanes;e.pendingLanes=n,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=n,e.entangledLanes&=n,e.errorRecoveryDisabledLanes&=n,e.shellSuspendCounter=0;var s=e.entanglements,c=e.expirationTimes,l=e.hiddenUpdates;for(n=o&~n;0<n;){var u=31-qe(n),d=1<<u;s[u]=0,c[u]=-1;var f=l[u];if(f!==null)for(l[u]=null,u=0;u<f.length;u++){var p=f[u];p!==null&&(p.lane&=-536870913)}n&=~d}r!==0&&ct(e,r,0),a!==0&&i===0&&e.tag!==0&&(e.suspendedLanes|=a&~(o&~t))}function ct(e,t,n){e.pendingLanes|=t,e.suspendedLanes&=~t;var r=31-qe(t);e.entangledLanes|=t,e.entanglements[r]=e.entanglements[r]|1073741824|n&261930}function lt(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-qe(n),i=1<<r;i&t|e[r]&t&&(e[r]|=t),n&=~i}}function ut(e,t){var n=t&-t;return n=n&42?1:dt(n),(n&(e.suspendedLanes|t))===0?n:0}function dt(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function ft(e){return e&=-e,2<e?8<e?e&134217727?32:268435456:8:2}function pt(){var e=D.p;return e===0?(e=window.event,e===void 0?32:mp(e.type)):e}function mt(e,t){var n=D.p;try{return D.p=e,t()}finally{D.p=n}}var ht=Math.random().toString(36).slice(2),k=`__reactFiber$`+ht,gt=`__reactProps$`+ht,_t=`__reactContainer$`+ht,vt=`__reactEvents$`+ht,yt=`__reactListeners$`+ht,bt=`__reactHandles$`+ht,xt=`__reactResources$`+ht,St=`__reactMarker$`+ht;function Ct(e){delete e[k],delete e[gt],delete e[vt],delete e[yt],delete e[bt]}function wt(e){var t=e[k];if(t)return t;for(var n=e.parentNode;n;){if(t=n[_t]||n[k]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=df(e);e!==null;){if(n=e[k])return n;e=df(e)}return t}e=n,n=e.parentNode}return null}function Tt(e){if(e=e[k]||e[_t]){var t=e.tag;if(t===5||t===6||t===13||t===31||t===26||t===27||t===3)return e}return null}function Et(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e.stateNode;throw Error(i(33))}function Dt(e){var t=e[xt];return t||=e[xt]={hoistableStyles:new Map,hoistableScripts:new Map},t}function A(e){e[St]=!0}var Ot=new Set,kt={};function At(e,t){jt(e,t),jt(e+`Capture`,t)}function jt(e,t){for(kt[e]=t,e=0;e<t.length;e++)Ot.add(t[e])}var Mt=RegExp(`^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$`),Nt={},Pt={};function Ft(e){return Ae.call(Pt,e)?!0:Ae.call(Nt,e)?!1:Mt.test(e)?Pt[e]=!0:(Nt[e]=!0,!1)}function It(e,t,n){if(Ft(t)){if(n===null)e.removeAttribute(t);else{switch(typeof n){case`undefined`:case`function`:case`symbol`:e.removeAttribute(t);return;case`boolean`:var r=t.toLowerCase().slice(0,5);if(r!==`data-`&&r!==`aria-`){e.removeAttribute(t);return}}e.setAttribute(t,``+n)}}}function Lt(e,t,n){if(n===null)e.removeAttribute(t);else{switch(typeof n){case`undefined`:case`function`:case`symbol`:case`boolean`:e.removeAttribute(t);return}e.setAttribute(t,``+n)}}function Rt(e,t,n,r){if(r===null)e.removeAttribute(n);else{switch(typeof r){case`undefined`:case`function`:case`symbol`:case`boolean`:e.removeAttribute(n);return}e.setAttributeNS(t,n,``+r)}}function zt(e){switch(typeof e){case`bigint`:case`boolean`:case`number`:case`string`:case`undefined`:return e;case`object`:return e;default:return``}}function Bt(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()===`input`&&(t===`checkbox`||t===`radio`)}function Vt(e,t,n){var r=Object.getOwnPropertyDescriptor(e.constructor.prototype,t);if(!e.hasOwnProperty(t)&&r!==void 0&&typeof r.get==`function`&&typeof r.set==`function`){var i=r.get,a=r.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return i.call(this)},set:function(e){n=``+e,a.call(this,e)}}),Object.defineProperty(e,t,{enumerable:r.enumerable}),{getValue:function(){return n},setValue:function(e){n=``+e},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Ht(e){if(!e._valueTracker){var t=Bt(e)?`checked`:`value`;e._valueTracker=Vt(e,t,``+e[t])}}function Ut(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r=``;return e&&(r=Bt(e)?e.checked?`true`:`false`:e.value),e=r,e!==n&&(t.setValue(e),!0)}function Wt(e){if(e||=typeof document<`u`?document:void 0,e===void 0)return null;try{return e.activeElement||e.body}catch{return e.body}}var Gt=/[\n"\\]/g;function Kt(e){return e.replace(Gt,function(e){return`\\`+e.charCodeAt(0).toString(16)+` `})}function qt(e,t,n,r,i,a,o,s){e.name=``,o!=null&&typeof o!=`function`&&typeof o!=`symbol`&&typeof o!=`boolean`?e.type=o:e.removeAttribute(`type`),t==null?o!==`submit`&&o!==`reset`||e.removeAttribute(`value`):o===`number`?(t===0&&e.value===``||e.value!=t)&&(e.value=``+zt(t)):e.value!==``+zt(t)&&(e.value=``+zt(t)),t==null?n==null?r!=null&&e.removeAttribute(`value`):Yt(e,o,zt(n)):Yt(e,o,zt(t)),i==null&&a!=null&&(e.defaultChecked=!!a),i!=null&&(e.checked=i&&typeof i!=`function`&&typeof i!=`symbol`),s!=null&&typeof s!=`function`&&typeof s!=`symbol`&&typeof s!=`boolean`?e.name=``+zt(s):e.removeAttribute(`name`)}function Jt(e,t,n,r,i,a,o,s){if(a!=null&&typeof a!=`function`&&typeof a!=`symbol`&&typeof a!=`boolean`&&(e.type=a),t!=null||n!=null){if(!(a!==`submit`&&a!==`reset`||t!=null)){Ht(e);return}n=n==null?``:``+zt(n),t=t==null?n:``+zt(t),s||t===e.value||(e.value=t),e.defaultValue=t}r??=i,r=typeof r!=`function`&&typeof r!=`symbol`&&!!r,e.checked=s?e.checked:!!r,e.defaultChecked=!!r,o!=null&&typeof o!=`function`&&typeof o!=`symbol`&&typeof o!=`boolean`&&(e.name=o),Ht(e)}function Yt(e,t,n){t===`number`&&Wt(e.ownerDocument)===e||e.defaultValue===``+n||(e.defaultValue=``+n)}function Xt(e,t,n,r){if(e=e.options,t){t={};for(var i=0;i<n.length;i++)t[`$`+n[i]]=!0;for(n=0;n<e.length;n++)i=t.hasOwnProperty(`$`+e[n].value),e[n].selected!==i&&(e[n].selected=i),i&&r&&(e[n].defaultSelected=!0)}else{for(n=``+zt(n),t=null,i=0;i<e.length;i++){if(e[i].value===n){e[i].selected=!0,r&&(e[i].defaultSelected=!0);return}t!==null||e[i].disabled||(t=e[i])}t!==null&&(t.selected=!0)}}function Zt(e,t,n){if(t!=null&&(t=``+zt(t),t!==e.value&&(e.value=t),n==null)){e.defaultValue!==t&&(e.defaultValue=t);return}e.defaultValue=n==null?``:``+zt(n)}function Qt(e,t,n,r){if(t==null){if(r!=null){if(n!=null)throw Error(i(92));if(le(r)){if(1<r.length)throw Error(i(93));r=r[0]}n=r}n??=``,t=n}n=zt(t),e.defaultValue=n,r=e.textContent,r===n&&r!==``&&r!==null&&(e.value=r),Ht(e)}function $t(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var en=new Set(`animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp`.split(` `));function tn(e,t,n){var r=t.indexOf(`--`)===0;n==null||typeof n==`boolean`||n===``?r?e.setProperty(t,``):t===`float`?e.cssFloat=``:e[t]=``:r?e.setProperty(t,n):typeof n!=`number`||n===0||en.has(t)?t===`float`?e.cssFloat=n:e[t]=(``+n).trim():e[t]=n+`px`}function nn(e,t,n){if(t!=null&&typeof t!=`object`)throw Error(i(62));if(e=e.style,n!=null){for(var r in n)!n.hasOwnProperty(r)||t!=null&&t.hasOwnProperty(r)||(r.indexOf(`--`)===0?e.setProperty(r,``):r===`float`?e.cssFloat=``:e[r]=``);for(var a in t)r=t[a],t.hasOwnProperty(a)&&n[a]!==r&&tn(e,a,r)}else for(var o in t)t.hasOwnProperty(o)&&tn(e,o,t[o])}function rn(e){if(e.indexOf(`-`)===-1)return!1;switch(e){case`annotation-xml`:case`color-profile`:case`font-face`:case`font-face-src`:case`font-face-uri`:case`font-face-format`:case`font-face-name`:case`missing-glyph`:return!1;default:return!0}}var an=new Map([[`acceptCharset`,`accept-charset`],[`htmlFor`,`for`],[`httpEquiv`,`http-equiv`],[`crossOrigin`,`crossorigin`],[`accentHeight`,`accent-height`],[`alignmentBaseline`,`alignment-baseline`],[`arabicForm`,`arabic-form`],[`baselineShift`,`baseline-shift`],[`capHeight`,`cap-height`],[`clipPath`,`clip-path`],[`clipRule`,`clip-rule`],[`colorInterpolation`,`color-interpolation`],[`colorInterpolationFilters`,`color-interpolation-filters`],[`colorProfile`,`color-profile`],[`colorRendering`,`color-rendering`],[`dominantBaseline`,`dominant-baseline`],[`enableBackground`,`enable-background`],[`fillOpacity`,`fill-opacity`],[`fillRule`,`fill-rule`],[`floodColor`,`flood-color`],[`floodOpacity`,`flood-opacity`],[`fontFamily`,`font-family`],[`fontSize`,`font-size`],[`fontSizeAdjust`,`font-size-adjust`],[`fontStretch`,`font-stretch`],[`fontStyle`,`font-style`],[`fontVariant`,`font-variant`],[`fontWeight`,`font-weight`],[`glyphName`,`glyph-name`],[`glyphOrientationHorizontal`,`glyph-orientation-horizontal`],[`glyphOrientationVertical`,`glyph-orientation-vertical`],[`horizAdvX`,`horiz-adv-x`],[`horizOriginX`,`horiz-origin-x`],[`imageRendering`,`image-rendering`],[`letterSpacing`,`letter-spacing`],[`lightingColor`,`lighting-color`],[`markerEnd`,`marker-end`],[`markerMid`,`marker-mid`],[`markerStart`,`marker-start`],[`overlinePosition`,`overline-position`],[`overlineThickness`,`overline-thickness`],[`paintOrder`,`paint-order`],[`panose-1`,`panose-1`],[`pointerEvents`,`pointer-events`],[`renderingIntent`,`rendering-intent`],[`shapeRendering`,`shape-rendering`],[`stopColor`,`stop-color`],[`stopOpacity`,`stop-opacity`],[`strikethroughPosition`,`strikethrough-position`],[`strikethroughThickness`,`strikethrough-thickness`],[`strokeDasharray`,`stroke-dasharray`],[`strokeDashoffset`,`stroke-dashoffset`],[`strokeLinecap`,`stroke-linecap`],[`strokeLinejoin`,`stroke-linejoin`],[`strokeMiterlimit`,`stroke-miterlimit`],[`strokeOpacity`,`stroke-opacity`],[`strokeWidth`,`stroke-width`],[`textAnchor`,`text-anchor`],[`textDecoration`,`text-decoration`],[`textRendering`,`text-rendering`],[`transformOrigin`,`transform-origin`],[`underlinePosition`,`underline-position`],[`underlineThickness`,`underline-thickness`],[`unicodeBidi`,`unicode-bidi`],[`unicodeRange`,`unicode-range`],[`unitsPerEm`,`units-per-em`],[`vAlphabetic`,`v-alphabetic`],[`vHanging`,`v-hanging`],[`vIdeographic`,`v-ideographic`],[`vMathematical`,`v-mathematical`],[`vectorEffect`,`vector-effect`],[`vertAdvY`,`vert-adv-y`],[`vertOriginX`,`vert-origin-x`],[`vertOriginY`,`vert-origin-y`],[`wordSpacing`,`word-spacing`],[`writingMode`,`writing-mode`],[`xmlnsXlink`,`xmlns:xlink`],[`xHeight`,`x-height`]]),on=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function sn(e){return on.test(``+e)?`javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')`:e}function cn(){}var ln=null;function un(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var dn=null,fn=null;function pn(e){var t=Tt(e);if(t&&(e=t.stateNode)){var n=e[gt]||null;a:switch(e=t.stateNode,t.type){case`input`:if(qt(e,n.value,n.defaultValue,n.defaultValue,n.checked,n.defaultChecked,n.type,n.name),t=n.name,n.type===`radio`&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll(`input[name="`+Kt(``+t)+`"][type="radio"]`),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var a=r[gt]||null;if(!a)throw Error(i(90));qt(r,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name)}}for(t=0;t<n.length;t++)r=n[t],r.form===e.form&&Ut(r)}break a;case`textarea`:Zt(e,n.value,n.defaultValue);break a;case`select`:t=n.value,t!=null&&Xt(e,!!n.multiple,t,!1)}}}var mn=!1;function hn(e,t,n){if(mn)return e(t,n);mn=!0;try{return e(t)}finally{if(mn=!1,(dn!==null||fn!==null)&&(bu(),dn&&(t=dn,e=fn,fn=dn=null,pn(t),e)))for(t=0;t<e.length;t++)pn(e[t])}}function gn(e,t){var n=e.stateNode;if(n===null)return null;var r=n[gt]||null;if(r===null)return null;n=r[t];a:switch(t){case`onClick`:case`onClickCapture`:case`onDoubleClick`:case`onDoubleClickCapture`:case`onMouseDown`:case`onMouseDownCapture`:case`onMouseMove`:case`onMouseMoveCapture`:case`onMouseUp`:case`onMouseUpCapture`:case`onMouseEnter`:(r=!r.disabled)||(e=e.type,r=e!==`button`&&e!==`input`&&e!==`select`&&e!==`textarea`),e=!r;break a;default:e=!1}if(e)return null;if(n&&typeof n!=`function`)throw Error(i(231,t,typeof n));return n}var _n=!(typeof window>`u`||window.document===void 0||window.document.createElement===void 0),vn=!1;if(_n)try{var yn={};Object.defineProperty(yn,"passive",{get:function(){vn=!0}}),window.addEventListener(`test`,yn,yn),window.removeEventListener(`test`,yn,yn)}catch{vn=!1}var bn=null,xn=null,Sn=null;function Cn(){if(Sn)return Sn;var e,t=xn,n=t.length,r,i=`value`in bn?bn.value:bn.textContent,a=i.length;for(e=0;e<n&&t[e]===i[e];e++);var o=n-e;for(r=1;r<=o&&t[n-r]===i[a-r];r++);return Sn=i.slice(e,1<r?1-r:void 0)}function wn(e){var t=e.keyCode;return`charCode`in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function Tn(){return!0}function En(){return!1}function Dn(e){function t(t,n,r,i,a){for(var o in this._reactName=t,this._targetInst=r,this.type=n,this.nativeEvent=i,this.target=a,this.currentTarget=null,e)e.hasOwnProperty(o)&&(t=e[o],this[o]=t?t(i):i[o]);return this.isDefaultPrevented=(i.defaultPrevented==null?!1===i.returnValue:i.defaultPrevented)?Tn:En,this.isPropagationStopped=En,this}return h(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var e=this.nativeEvent;e&&(e.preventDefault?e.preventDefault():typeof e.returnValue!=`unknown`&&(e.returnValue=!1),this.isDefaultPrevented=Tn)},stopPropagation:function(){var e=this.nativeEvent;e&&(e.stopPropagation?e.stopPropagation():typeof e.cancelBubble!=`unknown`&&(e.cancelBubble=!0),this.isPropagationStopped=Tn)},persist:function(){},isPersistent:Tn}),t}var On={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},kn=Dn(On),An=h({},On,{view:0,detail:0}),jn=Dn(An),Mn,Nn,Pn,Fn=h({},An,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Kn,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return`movementX`in e?e.movementX:(e!==Pn&&(Pn&&e.type===`mousemove`?(Mn=e.screenX-Pn.screenX,Nn=e.screenY-Pn.screenY):Nn=Mn=0,Pn=e),Mn)},movementY:function(e){return`movementY`in e?e.movementY:Nn}}),In=Dn(Fn),Ln=Dn(h({},Fn,{dataTransfer:0})),Rn=Dn(h({},An,{relatedTarget:0})),zn=Dn(h({},On,{animationName:0,elapsedTime:0,pseudoElement:0})),Bn=Dn(h({},On,{clipboardData:function(e){return`clipboardData`in e?e.clipboardData:window.clipboardData}})),Vn=Dn(h({},On,{data:0})),Hn={Esc:`Escape`,Spacebar:` `,Left:`ArrowLeft`,Up:`ArrowUp`,Right:`ArrowRight`,Down:`ArrowDown`,Del:`Delete`,Win:`OS`,Menu:`ContextMenu`,Apps:`ContextMenu`,Scroll:`ScrollLock`,MozPrintableKey:`Unidentified`},Un={8:`Backspace`,9:`Tab`,12:`Clear`,13:`Enter`,16:`Shift`,17:`Control`,18:`Alt`,19:`Pause`,20:`CapsLock`,27:`Escape`,32:` `,33:`PageUp`,34:`PageDown`,35:`End`,36:`Home`,37:`ArrowLeft`,38:`ArrowUp`,39:`ArrowRight`,40:`ArrowDown`,45:`Insert`,46:`Delete`,112:`F1`,113:`F2`,114:`F3`,115:`F4`,116:`F5`,117:`F6`,118:`F7`,119:`F8`,120:`F9`,121:`F10`,122:`F11`,123:`F12`,144:`NumLock`,145:`ScrollLock`,224:`Meta`},Wn={Alt:`altKey`,Control:`ctrlKey`,Meta:`metaKey`,Shift:`shiftKey`};function Gn(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=Wn[e])?!!t[e]:!1}function Kn(){return Gn}var qn=Dn(h({},An,{key:function(e){if(e.key){var t=Hn[e.key]||e.key;if(t!==`Unidentified`)return t}return e.type===`keypress`?(e=wn(e),e===13?`Enter`:String.fromCharCode(e)):e.type===`keydown`||e.type===`keyup`?Un[e.keyCode]||`Unidentified`:``},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Kn,charCode:function(e){return e.type===`keypress`?wn(e):0},keyCode:function(e){return e.type===`keydown`||e.type===`keyup`?e.keyCode:0},which:function(e){return e.type===`keypress`?wn(e):e.type===`keydown`||e.type===`keyup`?e.keyCode:0}})),Jn=Dn(h({},Fn,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0})),Yn=Dn(h({},An,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Kn})),Xn=Dn(h({},On,{propertyName:0,elapsedTime:0,pseudoElement:0})),Zn=Dn(h({},Fn,{deltaX:function(e){return`deltaX`in e?e.deltaX:`wheelDeltaX`in e?-e.wheelDeltaX:0},deltaY:function(e){return`deltaY`in e?e.deltaY:`wheelDeltaY`in e?-e.wheelDeltaY:`wheelDelta`in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0})),Qn=Dn(h({},On,{newState:0,oldState:0})),$n=[9,13,27,32],j=_n&&`CompositionEvent`in window,er=null;_n&&`documentMode`in document&&(er=document.documentMode);var tr=_n&&`TextEvent`in window&&!er,nr=_n&&(!j||er&&8<er&&11>=er),rr=` `,ir=!1;function ar(e,t){switch(e){case`keyup`:return $n.indexOf(t.keyCode)!==-1;case`keydown`:return t.keyCode!==229;case`keypress`:case`mousedown`:case`focusout`:return!0;default:return!1}}function or(e){return e=e.detail,typeof e==`object`&&`data`in e?e.data:null}var sr=!1;function cr(e,t){switch(e){case`compositionend`:return or(t);case`keypress`:return t.which===32?(ir=!0,rr):null;case`textInput`:return e=t.data,e===rr&&ir?null:e;default:return null}}function lr(e,t){if(sr)return e===`compositionend`||!j&&ar(e,t)?(e=Cn(),Sn=xn=bn=null,sr=!1,e):null;switch(e){case`paste`:return null;case`keypress`:if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case`compositionend`:return nr&&t.locale!==`ko`?null:t.data;default:return null}}var ur={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function dr(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t===`input`?!!ur[e.type]:t===`textarea`}function fr(e,t,n,r){dn?fn?fn.push(r):fn=[r]:dn=r,t=Ed(t,`onChange`),0<t.length&&(n=new kn(`onChange`,`change`,null,n,r),e.push({event:n,listeners:t}))}var pr=null,mr=null;function hr(e){yd(e,0)}function gr(e){if(Ut(Et(e)))return e}function _r(e,t){if(e===`change`)return t}var vr=!1;if(_n){var yr;if(_n){var br=`oninput`in document;if(!br){var xr=document.createElement(`div`);xr.setAttribute(`oninput`,`return;`),br=typeof xr.oninput==`function`}yr=br}else yr=!1;vr=yr&&(!document.documentMode||9<document.documentMode)}function Sr(){pr&&(pr.detachEvent(`onpropertychange`,Cr),mr=pr=null)}function Cr(e){if(e.propertyName===`value`&&gr(mr)){var t=[];fr(t,mr,e,un(e)),hn(hr,t)}}function wr(e,t,n){e===`focusin`?(Sr(),pr=t,mr=n,pr.attachEvent(`onpropertychange`,Cr)):e===`focusout`&&Sr()}function Tr(e){if(e===`selectionchange`||e===`keyup`||e===`keydown`)return gr(mr)}function Er(e,t){if(e===`click`)return gr(t)}function Dr(e,t){if(e===`input`||e===`change`)return gr(t)}function Or(e,t){return e===t&&(e!==0||1/e==1/t)||e!==e&&t!==t}var kr=typeof Object.is==`function`?Object.is:Or;function Ar(e,t){if(kr(e,t))return!0;if(typeof e!=`object`||!e||typeof t!=`object`||!t)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!Ae.call(t,i)||!kr(e[i],t[i]))return!1}return!0}function jr(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Mr(e,t){var n=jr(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}a:{for(;n;){if(n.nextSibling){n=n.nextSibling;break a}n=n.parentNode}n=void 0}n=jr(n)}}function Nr(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Nr(e,t.parentNode):`contains`in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Pr(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var t=Wt(e.document);t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href==`string`}catch{n=!1}if(n)e=t.contentWindow;else break;t=Wt(e.document)}return t}function Fr(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t===`input`&&(e.type===`text`||e.type===`search`||e.type===`tel`||e.type===`url`||e.type===`password`)||t===`textarea`||e.contentEditable===`true`)}var Ir=_n&&`documentMode`in document&&11>=document.documentMode,Lr=null,Rr=null,zr=null,Br=!1;function Vr(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Br||Lr==null||Lr!==Wt(r)||(r=Lr,`selectionStart`in r&&Fr(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),zr&&Ar(zr,r)||(zr=r,r=Ed(Rr,`onSelect`),0<r.length&&(t=new kn(`onSelect`,`select`,null,t,n),e.push({event:t,listeners:r}),t.target=Lr)))}function Hr(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n[`Webkit`+e]=`webkit`+t,n[`Moz`+e]=`moz`+t,n}var Ur={animationend:Hr(`Animation`,`AnimationEnd`),animationiteration:Hr(`Animation`,`AnimationIteration`),animationstart:Hr(`Animation`,`AnimationStart`),transitionrun:Hr(`Transition`,`TransitionRun`),transitionstart:Hr(`Transition`,`TransitionStart`),transitioncancel:Hr(`Transition`,`TransitionCancel`),transitionend:Hr(`Transition`,`TransitionEnd`)},Wr={},Gr={};_n&&(Gr=document.createElement(`div`).style,`AnimationEvent`in window||(delete Ur.animationend.animation,delete Ur.animationiteration.animation,delete Ur.animationstart.animation),`TransitionEvent`in window||delete Ur.transitionend.transition);function Kr(e){if(Wr[e])return Wr[e];if(!Ur[e])return e;var t=Ur[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in Gr)return Wr[e]=t[n];return e}var qr=Kr(`animationend`),Jr=Kr(`animationiteration`),Yr=Kr(`animationstart`),Xr=Kr(`transitionrun`),Zr=Kr(`transitionstart`),Qr=Kr(`transitioncancel`),$r=Kr(`transitionend`),ei=new Map,ti=`abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel`.split(` `);ti.push(`scrollEnd`);function ni(e,t){ei.set(e,t),At(t,[e])}var ri=typeof reportError==`function`?reportError:function(e){if(typeof window==`object`&&typeof window.ErrorEvent==`function`){var t=new window.ErrorEvent(`error`,{bubbles:!0,cancelable:!0,message:typeof e==`object`&&e&&typeof e.message==`string`?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process==`object`&&typeof process.emit==`function`){process.emit(`uncaughtException`,e);return}console.error(e)},ii=[],ai=0,oi=0;function si(){for(var e=ai,t=oi=ai=0;t<e;){var n=ii[t];ii[t++]=null;var r=ii[t];ii[t++]=null;var i=ii[t];ii[t++]=null;var a=ii[t];if(ii[t++]=null,r!==null&&i!==null){var o=r.pending;o===null?i.next=i:(i.next=o.next,o.next=i),r.pending=i}a!==0&&di(n,i,a)}}function ci(e,t,n,r){ii[ai++]=e,ii[ai++]=t,ii[ai++]=n,ii[ai++]=r,oi|=r,e.lanes|=r,e=e.alternate,e!==null&&(e.lanes|=r)}function li(e,t,n,r){return ci(e,t,n,r),fi(e)}function ui(e,t){return ci(e,null,null,t),fi(e)}function di(e,t,n){e.lanes|=n;var r=e.alternate;r!==null&&(r.lanes|=n);for(var i=!1,a=e.return;a!==null;)a.childLanes|=n,r=a.alternate,r!==null&&(r.childLanes|=n),a.tag===22&&(e=a.stateNode,e===null||e._visibility&1||(i=!0)),e=a,a=a.return;return e.tag===3?(a=e.stateNode,i&&t!==null&&(i=31-qe(n),e=a.hiddenUpdates,r=e[i],r===null?e[i]=[t]:r.push(t),t.lane=n|536870912),a):null}function fi(e){if(50<du)throw du=0,fu=null,Error(i(185));for(var t=e.return;t!==null;)e=t,t=e.return;return e.tag===3?e.stateNode:null}var pi={};function mi(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function hi(e,t,n,r){return new mi(e,t,n,r)}function gi(e){return e=e.prototype,!(!e||!e.isReactComponent)}function _i(e,t){var n=e.alternate;return n===null?(n=hi(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&65011712,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n.refCleanup=e.refCleanup,n}function vi(e,t){e.flags&=65011714;var n=e.alternate;return n===null?(e.childLanes=0,e.lanes=t,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=n.childLanes,e.lanes=n.lanes,e.child=n.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=n.memoizedProps,e.memoizedState=n.memoizedState,e.updateQueue=n.updateQueue,e.type=n.type,t=n.dependencies,e.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),e}function yi(e,t,n,r,a,o){var s=0;if(r=e,typeof e==`function`)gi(e)&&(s=1);else if(typeof e==`string`)s=Uf(e,n,he.current)?26:e===`html`||e===`head`||e===`body`?27:5;else a:switch(e){case T:return e=hi(31,n,t,a),e.elementType=T,e.lanes=o,e;case y:return bi(n.children,a,o,t);case b:s=8,a|=24;break;case x:return e=hi(12,n,t,a|2),e.elementType=x,e.lanes=o,e;case te:return e=hi(13,n,t,a),e.elementType=te,e.lanes=o,e;case ne:return e=hi(19,n,t,a),e.elementType=ne,e.lanes=o,e;default:if(typeof e==`object`&&e)switch(e.$$typeof){case S:s=10;break a;case ee:s=9;break a;case C:s=11;break a;case re:s=14;break a;case w:s=16,r=null;break a}s=29,n=Error(i(130,e===null?`null`:typeof e,``)),r=null}return t=hi(s,n,t,a),t.elementType=e,t.type=r,t.lanes=o,t}function bi(e,t,n,r){return e=hi(7,e,r,t),e.lanes=n,e}function xi(e,t,n){return e=hi(6,e,null,t),e.lanes=n,e}function Si(e){var t=hi(18,null,null,0);return t.stateNode=e,t}function Ci(e,t,n){return t=hi(4,e.children===null?[]:e.children,e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}var wi=new WeakMap;function Ti(e,t){if(typeof e==`object`&&e){var n=wi.get(e);return n===void 0?(t={value:e,source:t,stack:ke(t)},wi.set(e,t),t):n}return{value:e,source:t,stack:ke(t)}}var Ei=[],Di=0,Oi=null,ki=0,Ai=[],ji=0,Mi=null,Ni=1,Pi=``;function Fi(e,t){Ei[Di++]=ki,Ei[Di++]=Oi,Oi=e,ki=t}function Ii(e,t,n){Ai[ji++]=Ni,Ai[ji++]=Pi,Ai[ji++]=Mi,Mi=e;var r=Ni;e=Pi;var i=32-qe(r)-1;r&=~(1<<i),n+=1;var a=32-qe(t)+i;if(30<a){var o=i-i%5;a=(r&(1<<o)-1).toString(32),r>>=o,i-=o,Ni=1<<32-qe(t)+i|n<<i|r,Pi=a+e}else Ni=1<<a|n<<i|r,Pi=e}function Li(e){e.return!==null&&(Fi(e,1),Ii(e,1,0))}function Ri(e){for(;e===Oi;)Oi=Ei[--Di],Ei[Di]=null,ki=Ei[--Di],Ei[Di]=null;for(;e===Mi;)Mi=Ai[--ji],Ai[ji]=null,Pi=Ai[--ji],Ai[ji]=null,Ni=Ai[--ji],Ai[ji]=null}function zi(e,t){Ai[ji++]=Ni,Ai[ji++]=Pi,Ai[ji++]=Mi,Ni=t.id,Pi=t.overflow,Mi=e}var Bi=null,M=null,N=!1,Vi=null,Hi=!1,Ui=Error(i(519));function Wi(e){throw Xi(Ti(Error(i(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?`text`:`HTML`,``)),e)),Ui}function Gi(e){var t=e.stateNode,n=e.type,r=e.memoizedProps;switch(t[k]=e,t[gt]=r,n){case`dialog`:Q(`cancel`,t),Q(`close`,t);break;case`iframe`:case`object`:case`embed`:Q(`load`,t);break;case`video`:case`audio`:for(n=0;n<_d.length;n++)Q(_d[n],t);break;case`source`:Q(`error`,t);break;case`img`:case`image`:case`link`:Q(`error`,t),Q(`load`,t);break;case`details`:Q(`toggle`,t);break;case`input`:Q(`invalid`,t),Jt(t,r.value,r.defaultValue,r.checked,r.defaultChecked,r.type,r.name,!0);break;case`select`:Q(`invalid`,t);break;case`textarea`:Q(`invalid`,t),Qt(t,r.value,r.defaultValue,r.children)}n=r.children,typeof n!=`string`&&typeof n!=`number`&&typeof n!=`bigint`||t.textContent===``+n||!0===r.suppressHydrationWarning||Md(t.textContent,n)?(r.popover!=null&&(Q(`beforetoggle`,t),Q(`toggle`,t)),r.onScroll!=null&&Q(`scroll`,t),r.onScrollEnd!=null&&Q(`scrollend`,t),r.onClick!=null&&(t.onclick=cn),t=!0):t=!1,t||Wi(e,!0)}function Ki(e){for(Bi=e.return;Bi;)switch(Bi.tag){case 5:case 31:case 13:Hi=!1;return;case 27:case 3:Hi=!0;return;default:Bi=Bi.return}}function qi(e){if(e!==Bi)return!1;if(!N)return Ki(e),N=!0,!1;var t=e.tag,n;if((n=t!==3&&t!==27)&&((n=t===5)&&(n=e.type,n=n===`form`||n===`button`||Ud(e.type,e.memoizedProps)),n=!n),n&&M&&Wi(e),Ki(e),t===13){if(e=e.memoizedState,e=e===null?null:e.dehydrated,!e)throw Error(i(317));M=uf(e)}else if(t===31){if(e=e.memoizedState,e=e===null?null:e.dehydrated,!e)throw Error(i(317));M=uf(e)}else t===27?(t=M,Zd(e.type)?(e=lf,lf=null,M=e):M=t):M=Bi?cf(e.stateNode.nextSibling):null;return!0}function Ji(){M=Bi=null,N=!1}function Yi(){var e=Vi;return e!==null&&(Zl===null?Zl=e:Zl.push.apply(Zl,e),Vi=null),e}function Xi(e){Vi===null?Vi=[e]:Vi.push(e)}var Zi=pe(null),Qi=null,$i=null;function ea(e,t,n){O(Zi,t._currentValue),t._currentValue=n}function ta(e){e._currentValue=Zi.current,me(Zi)}function na(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)===t?r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t):(e.childLanes|=t,r!==null&&(r.childLanes|=t)),e===n)break;e=e.return}}function ra(e,t,n,r){var a=e.child;for(a!==null&&(a.return=e);a!==null;){var o=a.dependencies;if(o!==null){var s=a.child;o=o.firstContext;a:for(;o!==null;){var c=o;o=a;for(var l=0;l<t.length;l++)if(c.context===t[l]){o.lanes|=n,c=o.alternate,c!==null&&(c.lanes|=n),na(o.return,n,e),r||(s=null);break a}o=c.next}}else if(a.tag===18){if(s=a.return,s===null)throw Error(i(341));s.lanes|=n,o=s.alternate,o!==null&&(o.lanes|=n),na(s,n,e),s=null}else s=a.child;if(s!==null)s.return=a;else for(s=a;s!==null;){if(s===e){s=null;break}if(a=s.sibling,a!==null){a.return=s.return,s=a;break}s=s.return}a=s}}function ia(e,t,n,r){e=null;for(var a=t,o=!1;a!==null;){if(!o){if(a.flags&524288)o=!0;else if(a.flags&262144)break}if(a.tag===10){var s=a.alternate;if(s===null)throw Error(i(387));if(s=s.memoizedProps,s!==null){var c=a.type;kr(a.pendingProps.value,s.value)||(e===null?e=[c]:e.push(c))}}else if(a===ve.current){if(s=a.alternate,s===null)throw Error(i(387));s.memoizedState.memoizedState!==a.memoizedState.memoizedState&&(e===null?e=[Qf]:e.push(Qf))}a=a.return}e!==null&&ra(t,e,n,r),t.flags|=262144}function aa(e){for(e=e.firstContext;e!==null;){if(!kr(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function oa(e){Qi=e,$i=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function sa(e){return la(Qi,e)}function ca(e,t){return Qi===null&&oa(e),la(e,t)}function la(e,t){var n=t._currentValue;if(t={context:t,memoizedValue:n,next:null},$i===null){if(e===null)throw Error(i(308));$i=t,e.dependencies={lanes:0,firstContext:t},e.flags|=524288}else $i=$i.next=t;return n}var ua=typeof AbortController<`u`?AbortController:function(){var e=[],t=this.signal={aborted:!1,addEventListener:function(t,n){e.push(n)}};this.abort=function(){t.aborted=!0,e.forEach(function(e){return e()})}},da=t.unstable_scheduleCallback,fa=t.unstable_NormalPriority,P={$$typeof:S,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function pa(){return{controller:new ua,data:new Map,refCount:0}}function ma(e){e.refCount--,e.refCount===0&&da(fa,function(){e.controller.abort()})}var ha=null,ga=0,_a=0,va=null;function ya(e,t){if(ha===null){var n=ha=[];ga=0,_a=dd(),va={status:`pending`,value:void 0,then:function(e){n.push(e)}}}return ga++,t.then(ba,ba),t}function ba(){if(--ga===0&&ha!==null){va!==null&&(va.status=`fulfilled`);var e=ha;ha=null,_a=0,va=null;for(var t=0;t<e.length;t++)(0,e[t])()}}function xa(e,t){var n=[],r={status:`pending`,value:null,reason:null,then:function(e){n.push(e)}};return e.then(function(){r.status=`fulfilled`,r.value=t;for(var e=0;e<n.length;e++)(0,n[e])(t)},function(e){for(r.status=`rejected`,r.reason=e,e=0;e<n.length;e++)(0,n[e])(void 0)}),r}var Sa=E.S;E.S=function(e,t){eu=Fe(),typeof t==`object`&&t&&typeof t.then==`function`&&ya(e,t),Sa!==null&&Sa(e,t)};var Ca=pe(null);function wa(){var e=Ca.current;return e===null?K.pooledCache:e}function Ta(e,t){t===null?O(Ca,Ca.current):O(Ca,t.pool)}function Ea(){var e=wa();return e===null?null:{parent:P._currentValue,pool:e}}var Da=Error(i(460)),Oa=Error(i(474)),ka=Error(i(542)),Aa={then:function(){}};function ja(e){return e=e.status,e===`fulfilled`||e===`rejected`}function Ma(e,t,n){switch(n=e[n],n===void 0?e.push(t):n!==t&&(t.then(cn,cn),t=n),t.status){case`fulfilled`:return t.value;case`rejected`:throw e=t.reason,Ia(e),e;default:if(typeof t.status==`string`)t.then(cn,cn);else{if(e=K,e!==null&&100<e.shellSuspendCounter)throw Error(i(482));e=t,e.status=`pending`,e.then(function(e){if(t.status===`pending`){var n=t;n.status=`fulfilled`,n.value=e}},function(e){if(t.status===`pending`){var n=t;n.status=`rejected`,n.reason=e}})}switch(t.status){case`fulfilled`:return t.value;case`rejected`:throw e=t.reason,Ia(e),e}throw Pa=t,Da}}function Na(e){try{var t=e._init;return t(e._payload)}catch(e){throw typeof e==`object`&&e&&typeof e.then==`function`?(Pa=e,Da):e}}var Pa=null;function Fa(){if(Pa===null)throw Error(i(459));var e=Pa;return Pa=null,e}function Ia(e){if(e===Da||e===ka)throw Error(i(483))}var La=null,Ra=0;function za(e){var t=Ra;return Ra+=1,La===null&&(La=[]),Ma(La,e,t)}function Ba(e,t){t=t.props.ref,e.ref=t===void 0?null:t}function Va(e,t){throw t.$$typeof===g?Error(i(525)):(e=Object.prototype.toString.call(t),Error(i(31,e===`[object Object]`?`object with keys {`+Object.keys(t).join(`, `)+`}`:e)))}function Ha(e){function t(t,n){if(e){var r=t.deletions;r===null?(t.deletions=[n],t.flags|=16):r.push(n)}}function n(n,r){if(!e)return null;for(;r!==null;)t(n,r),r=r.sibling;return null}function r(e){for(var t=new Map;e!==null;)e.key===null?t.set(e.index,e):t.set(e.key,e),e=e.sibling;return t}function a(e,t){return e=_i(e,t),e.index=0,e.sibling=null,e}function o(t,n,r){return t.index=r,e?(r=t.alternate,r===null?(t.flags|=67108866,n):(r=r.index,r<n?(t.flags|=67108866,n):r)):(t.flags|=1048576,n)}function s(t){return e&&t.alternate===null&&(t.flags|=67108866),t}function c(e,t,n,r){return t===null||t.tag!==6?(t=xi(n,e.mode,r),t.return=e,t):(t=a(t,n),t.return=e,t)}function l(e,t,n,r){var i=n.type;return i===y?d(e,t,n.props.children,r,n.key):t!==null&&(t.elementType===i||typeof i==`object`&&i&&i.$$typeof===w&&Na(i)===t.type)?(t=a(t,n.props),Ba(t,n),t.return=e,t):(t=yi(n.type,n.key,n.props,null,e.mode,r),Ba(t,n),t.return=e,t)}function u(e,t,n,r){return t===null||t.tag!==4||t.stateNode.containerInfo!==n.containerInfo||t.stateNode.implementation!==n.implementation?(t=Ci(n,e.mode,r),t.return=e,t):(t=a(t,n.children||[]),t.return=e,t)}function d(e,t,n,r,i){return t===null||t.tag!==7?(t=bi(n,e.mode,r,i),t.return=e,t):(t=a(t,n),t.return=e,t)}function f(e,t,n){if(typeof t==`string`&&t!==``||typeof t==`number`||typeof t==`bigint`)return t=xi(``+t,e.mode,n),t.return=e,t;if(typeof t==`object`&&t){switch(t.$$typeof){case _:return n=yi(t.type,t.key,t.props,null,e.mode,n),Ba(n,t),n.return=e,n;case v:return t=Ci(t,e.mode,n),t.return=e,t;case w:return t=Na(t),f(e,t,n)}if(le(t)||oe(t))return t=bi(t,e.mode,n,null),t.return=e,t;if(typeof t.then==`function`)return f(e,za(t),n);if(t.$$typeof===S)return f(e,ca(e,t),n);Va(e,t)}return null}function p(e,t,n,r){var i=t===null?null:t.key;if(typeof n==`string`&&n!==``||typeof n==`number`||typeof n==`bigint`)return i===null?c(e,t,``+n,r):null;if(typeof n==`object`&&n){switch(n.$$typeof){case _:return n.key===i?l(e,t,n,r):null;case v:return n.key===i?u(e,t,n,r):null;case w:return n=Na(n),p(e,t,n,r)}if(le(n)||oe(n))return i===null?d(e,t,n,r,null):null;if(typeof n.then==`function`)return p(e,t,za(n),r);if(n.$$typeof===S)return p(e,t,ca(e,n),r);Va(e,n)}return null}function m(e,t,n,r,i){if(typeof r==`string`&&r!==``||typeof r==`number`||typeof r==`bigint`)return e=e.get(n)||null,c(t,e,``+r,i);if(typeof r==`object`&&r){switch(r.$$typeof){case _:return e=e.get(r.key===null?n:r.key)||null,l(t,e,r,i);case v:return e=e.get(r.key===null?n:r.key)||null,u(t,e,r,i);case w:return r=Na(r),m(e,t,n,r,i)}if(le(r)||oe(r))return e=e.get(n)||null,d(t,e,r,i,null);if(typeof r.then==`function`)return m(e,t,n,za(r),i);if(r.$$typeof===S)return m(e,t,n,ca(t,r),i);Va(t,r)}return null}function h(i,a,s,c){for(var l=null,u=null,d=a,h=a=0,g=null;d!==null&&h<s.length;h++){d.index>h?(g=d,d=null):g=d.sibling;var _=p(i,d,s[h],c);if(_===null){d===null&&(d=g);break}e&&d&&_.alternate===null&&t(i,d),a=o(_,a,h),u===null?l=_:u.sibling=_,u=_,d=g}if(h===s.length)return n(i,d),N&&Fi(i,h),l;if(d===null){for(;h<s.length;h++)d=f(i,s[h],c),d!==null&&(a=o(d,a,h),u===null?l=d:u.sibling=d,u=d);return N&&Fi(i,h),l}for(d=r(d);h<s.length;h++)g=m(d,i,h,s[h],c),g!==null&&(e&&g.alternate!==null&&d.delete(g.key===null?h:g.key),a=o(g,a,h),u===null?l=g:u.sibling=g,u=g);return e&&d.forEach(function(e){return t(i,e)}),N&&Fi(i,h),l}function g(a,s,c,l){if(c==null)throw Error(i(151));for(var u=null,d=null,h=s,g=s=0,_=null,v=c.next();h!==null&&!v.done;g++,v=c.next()){h.index>g?(_=h,h=null):_=h.sibling;var y=p(a,h,v.value,l);if(y===null){h===null&&(h=_);break}e&&h&&y.alternate===null&&t(a,h),s=o(y,s,g),d===null?u=y:d.sibling=y,d=y,h=_}if(v.done)return n(a,h),N&&Fi(a,g),u;if(h===null){for(;!v.done;g++,v=c.next())v=f(a,v.value,l),v!==null&&(s=o(v,s,g),d===null?u=v:d.sibling=v,d=v);return N&&Fi(a,g),u}for(h=r(h);!v.done;g++,v=c.next())v=m(h,a,g,v.value,l),v!==null&&(e&&v.alternate!==null&&h.delete(v.key===null?g:v.key),s=o(v,s,g),d===null?u=v:d.sibling=v,d=v);return e&&h.forEach(function(e){return t(a,e)}),N&&Fi(a,g),u}function b(e,r,o,c){if(typeof o==`object`&&o&&o.type===y&&o.key===null&&(o=o.props.children),typeof o==`object`&&o){switch(o.$$typeof){case _:a:{for(var l=o.key;r!==null;){if(r.key===l){if(l=o.type,l===y){if(r.tag===7){n(e,r.sibling),c=a(r,o.props.children),c.return=e,e=c;break a}}else if(r.elementType===l||typeof l==`object`&&l&&l.$$typeof===w&&Na(l)===r.type){n(e,r.sibling),c=a(r,o.props),Ba(c,o),c.return=e,e=c;break a}n(e,r);break}t(e,r),r=r.sibling}o.type===y?(c=bi(o.props.children,e.mode,c,o.key),c.return=e,e=c):(c=yi(o.type,o.key,o.props,null,e.mode,c),Ba(c,o),c.return=e,e=c)}return s(e);case v:a:{for(l=o.key;r!==null;){if(r.key===l){if(r.tag===4&&r.stateNode.containerInfo===o.containerInfo&&r.stateNode.implementation===o.implementation){n(e,r.sibling),c=a(r,o.children||[]),c.return=e,e=c;break a}n(e,r);break}t(e,r),r=r.sibling}c=Ci(o,e.mode,c),c.return=e,e=c}return s(e);case w:return o=Na(o),b(e,r,o,c)}if(le(o))return h(e,r,o,c);if(oe(o)){if(l=oe(o),typeof l!=`function`)throw Error(i(150));return o=l.call(o),g(e,r,o,c)}if(typeof o.then==`function`)return b(e,r,za(o),c);if(o.$$typeof===S)return b(e,r,ca(e,o),c);Va(e,o)}return typeof o==`string`&&o!==``||typeof o==`number`||typeof o==`bigint`?(o=``+o,r!==null&&r.tag===6?(n(e,r.sibling),c=a(r,o),c.return=e,e=c):(n(e,r),c=xi(o,e.mode,c),c.return=e,e=c),s(e)):n(e,r)}return function(e,t,n,r){try{Ra=0;var i=b(e,t,n,r);return La=null,i}catch(t){if(t===Da||t===ka)throw t;var a=hi(29,t,null,e.mode);return a.lanes=r,a.return=e,a}}}var Ua=Ha(!0),Wa=Ha(!1),Ga=!1;function Ka(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function qa(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function Ja(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function Ya(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,G&2){var i=r.pending;return i===null?t.next=t:(t.next=i.next,i.next=t),r.pending=t,t=fi(e),di(e,null,n),t}return ci(e,r,t,n),fi(e)}function Xa(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,n&4194048)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,lt(e,n)}}function Za(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,a=null;if(n=n.firstBaseUpdate,n!==null){do{var o={lane:n.lane,tag:n.tag,payload:n.payload,callback:null,next:null};a===null?i=a=o:a=a.next=o,n=n.next}while(n!==null);a===null?i=a=t:a=a.next=t}else i=a=t;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:a,shared:r.shared,callbacks:r.callbacks},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}var Qa=!1;function $a(){if(Qa){var e=va;if(e!==null)throw e}}function eo(e,t,n,r){Qa=!1;var i=e.updateQueue;Ga=!1;var a=i.firstBaseUpdate,o=i.lastBaseUpdate,s=i.shared.pending;if(s!==null){i.shared.pending=null;var c=s,l=c.next;c.next=null,o===null?a=l:o.next=l,o=c;var u=e.alternate;u!==null&&(u=u.updateQueue,s=u.lastBaseUpdate,s!==o&&(s===null?u.firstBaseUpdate=l:s.next=l,u.lastBaseUpdate=c))}if(a!==null){var d=i.baseState;o=0,u=l=c=null,s=a;do{var f=s.lane&-536870913,p=f!==s.lane;if(p?(J&f)===f:(r&f)===f){f!==0&&f===_a&&(Qa=!0),u!==null&&(u=u.next={lane:0,tag:s.tag,payload:s.payload,callback:null,next:null});a:{var m=e,g=s;f=t;var _=n;switch(g.tag){case 1:if(m=g.payload,typeof m==`function`){d=m.call(_,d,f);break a}d=m;break a;case 3:m.flags=m.flags&-65537|128;case 0:if(m=g.payload,f=typeof m==`function`?m.call(_,d,f):m,f==null)break a;d=h({},d,f);break a;case 2:Ga=!0}}f=s.callback,f!==null&&(e.flags|=64,p&&(e.flags|=8192),p=i.callbacks,p===null?i.callbacks=[f]:p.push(f))}else p={lane:f,tag:s.tag,payload:s.payload,callback:s.callback,next:null},u===null?(l=u=p,c=d):u=u.next=p,o|=f;if(s=s.next,s===null){if(s=i.shared.pending,s===null)break;p=s,s=p.next,p.next=null,i.lastBaseUpdate=p,i.shared.pending=null}}while(1);u===null&&(c=d),i.baseState=c,i.firstBaseUpdate=l,i.lastBaseUpdate=u,a===null&&(i.shared.lanes=0),Gl|=o,e.lanes=o,e.memoizedState=d}}function to(e,t){if(typeof e!=`function`)throw Error(i(191,e));e.call(t)}function no(e,t){var n=e.callbacks;if(n!==null)for(e.callbacks=null,e=0;e<n.length;e++)to(n[e],t)}var ro=pe(null),io=pe(0);function ao(e,t){e=Wl,O(io,e),O(ro,t),Wl=e|t.baseLanes}function oo(){O(io,Wl),O(ro,ro.current)}function so(){Wl=io.current,me(ro),me(io)}var co=pe(null),lo=null;function uo(e){var t=e.alternate;O(F,F.current&1),O(co,e),lo===null&&(t===null||ro.current!==null||t.memoizedState!==null)&&(lo=e)}function fo(e){O(F,F.current),O(co,e),lo===null&&(lo=e)}function po(e){e.tag===22?(O(F,F.current),O(co,e),lo===null&&(lo=e)):mo(e)}function mo(){O(F,F.current),O(co,co.current)}function ho(e){me(co),lo===e&&(lo=null),me(F)}var F=pe(0);function go(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||af(n)||of(n)))return t}else if(t.tag===19&&(t.memoizedProps.revealOrder===`forwards`||t.memoizedProps.revealOrder===`backwards`||t.memoizedProps.revealOrder===`unstable_legacy-backwards`||t.memoizedProps.revealOrder===`together`)){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var _o=0,I=null,L=null,R=null,vo=!1,yo=!1,bo=!1,xo=0,So=0,Co=null,wo=0;function z(){throw Error(i(321))}function To(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!kr(e[n],t[n]))return!1;return!0}function Eo(e,t,n,r,i,a){return _o=a,I=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,E.H=e===null||e.memoizedState===null?Hs:Us,bo=!1,a=n(r,i),bo=!1,yo&&(a=Oo(t,n,r,i)),Do(e),a}function Do(e){E.H=Vs;var t=L!==null&&L.next!==null;if(_o=0,R=L=I=null,vo=!1,So=0,Co=null,t)throw Error(i(300));e===null||V||(e=e.dependencies,e!==null&&aa(e)&&(V=!0))}function Oo(e,t,n,r){I=e;var a=0;do{if(yo&&(Co=null),So=0,yo=!1,25<=a)throw Error(i(301));if(a+=1,R=L=null,e.updateQueue!=null){var o=e.updateQueue;o.lastEffect=null,o.events=null,o.stores=null,o.memoCache!=null&&(o.memoCache.index=0)}E.H=Ws,o=t(n,r)}while(yo);return o}function ko(){var e=E.H,t=e.useState()[0];return t=typeof t.then==`function`?Fo(t):t,e=e.useState()[0],(L===null?null:L.memoizedState)!==e&&(I.flags|=1024),t}function Ao(){var e=xo!==0;return xo=0,e}function jo(e,t,n){t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~n}function Mo(e){if(vo){for(e=e.memoizedState;e!==null;){var t=e.queue;t!==null&&(t.pending=null),e=e.next}vo=!1}_o=0,R=L=I=null,yo=!1,So=xo=0,Co=null}function No(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return R===null?I.memoizedState=R=e:R=R.next=e,R}function B(){if(L===null){var e=I.alternate;e=e===null?null:e.memoizedState}else e=L.next;var t=R===null?I.memoizedState:R.next;if(t!==null)R=t,L=e;else{if(e===null)throw I.alternate===null?Error(i(467)):Error(i(310));L=e,e={memoizedState:L.memoizedState,baseState:L.baseState,baseQueue:L.baseQueue,queue:L.queue,next:null},R===null?I.memoizedState=R=e:R=R.next=e}return R}function Po(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function Fo(e){var t=So;return So+=1,Co===null&&(Co=[]),e=Ma(Co,e,t),t=I,(R===null?t.memoizedState:R.next)===null&&(t=t.alternate,E.H=t===null||t.memoizedState===null?Hs:Us),e}function Io(e){if(typeof e==`object`&&e){if(typeof e.then==`function`)return Fo(e);if(e.$$typeof===S)return sa(e)}throw Error(i(438,String(e)))}function Lo(e){var t=null,n=I.updateQueue;if(n!==null&&(t=n.memoCache),t==null){var r=I.alternate;r!==null&&(r=r.updateQueue,r!==null&&(r=r.memoCache,r!=null&&(t={data:r.data.map(function(e){return e.slice()}),index:0})))}if(t??={data:[],index:0},n===null&&(n=Po(),I.updateQueue=n),n.memoCache=t,n=t.data[t.index],n===void 0)for(n=t.data[t.index]=Array(e),r=0;r<e;r++)n[r]=ie;return t.index++,n}function Ro(e,t){return typeof t==`function`?t(e):t}function zo(e){return Bo(B(),L,e)}function Bo(e,t,n){var r=e.queue;if(r===null)throw Error(i(311));r.lastRenderedReducer=n;var a=e.baseQueue,o=r.pending;if(o!==null){if(a!==null){var s=a.next;a.next=o.next,o.next=s}t.baseQueue=a=o,r.pending=null}if(o=e.baseState,a===null)e.memoizedState=o;else{t=a.next;var c=s=null,l=null,u=t,d=!1;do{var f=u.lane&-536870913;if(f===u.lane?(_o&f)===f:(J&f)===f){var p=u.revertLane;if(p===0)l!==null&&(l=l.next={lane:0,revertLane:0,gesture:null,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),f===_a&&(d=!0);else if((_o&p)===p){u=u.next,p===_a&&(d=!0);continue}else f={lane:0,revertLane:u.revertLane,gesture:null,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null},l===null?(c=l=f,s=o):l=l.next=f,I.lanes|=p,Gl|=p;f=u.action,bo&&n(o,f),o=u.hasEagerState?u.eagerState:n(o,f)}else p={lane:f,revertLane:u.revertLane,gesture:u.gesture,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null},l===null?(c=l=p,s=o):l=l.next=p,I.lanes|=f,Gl|=f;u=u.next}while(u!==null&&u!==t);if(l===null?s=o:l.next=c,!kr(o,e.memoizedState)&&(V=!0,d&&(n=va,n!==null)))throw n;e.memoizedState=o,e.baseState=s,e.baseQueue=l,r.lastRenderedState=o}return a===null&&(r.lanes=0),[e.memoizedState,r.dispatch]}function Vo(e){var t=B(),n=t.queue;if(n===null)throw Error(i(311));n.lastRenderedReducer=e;var r=n.dispatch,a=n.pending,o=t.memoizedState;if(a!==null){n.pending=null;var s=a=a.next;do o=e(o,s.action),s=s.next;while(s!==a);kr(o,t.memoizedState)||(V=!0),t.memoizedState=o,t.baseQueue===null&&(t.baseState=o),n.lastRenderedState=o}return[o,r]}function Ho(e,t,n){var r=I,a=B(),o=N;if(o){if(n===void 0)throw Error(i(407));n=n()}else n=t();var s=!kr((L||a).memoizedState,n);if(s&&(a.memoizedState=n,V=!0),a=a.queue,ps(Go.bind(null,r,a,e),[e]),a.getSnapshot!==t||s||R!==null&&R.memoizedState.tag&1){if(r.flags|=2048,cs(9,{destroy:void 0},Wo.bind(null,r,a,n,t),null),K===null)throw Error(i(349));o||_o&127||Uo(r,t,n)}return n}function Uo(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=I.updateQueue,t===null?(t=Po(),I.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function Wo(e,t,n,r){t.value=n,t.getSnapshot=r,Ko(t)&&qo(e)}function Go(e,t,n){return n(function(){Ko(t)&&qo(e)})}function Ko(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!kr(e,n)}catch{return!0}}function qo(e){var t=ui(e,2);t!==null&&hu(t,e,2)}function Jo(e){var t=No();if(typeof e==`function`){var n=e;if(e=n(),bo){Ke(!0);try{n()}finally{Ke(!1)}}}return t.memoizedState=t.baseState=e,t.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Ro,lastRenderedState:e},t}function Yo(e,t,n,r){return e.baseState=n,Bo(e,L,typeof r==`function`?r:Ro)}function Xo(e,t,n,r,a){if(Rs(e))throw Error(i(485));if(e=t.action,e!==null){var o={payload:a,action:e,next:null,isTransition:!0,status:`pending`,value:null,reason:null,listeners:[],then:function(e){o.listeners.push(e)}};E.T===null?o.isTransition=!1:n(!0),r(o),n=t.pending,n===null?(o.next=t.pending=o,Zo(t,o)):(o.next=n.next,t.pending=n.next=o)}}function Zo(e,t){var n=t.action,r=t.payload,i=e.state;if(t.isTransition){var a=E.T,o={};E.T=o;try{var s=n(i,r),c=E.S;c!==null&&c(o,s),Qo(e,t,s)}catch(n){es(e,t,n)}finally{a!==null&&o.types!==null&&(a.types=o.types),E.T=a}}else try{a=n(i,r),Qo(e,t,a)}catch(n){es(e,t,n)}}function Qo(e,t,n){typeof n==`object`&&n&&typeof n.then==`function`?n.then(function(n){$o(e,t,n)},function(n){return es(e,t,n)}):$o(e,t,n)}function $o(e,t,n){t.status=`fulfilled`,t.value=n,ts(t),e.state=n,t=e.pending,t!==null&&(n=t.next,n===t?e.pending=null:(n=n.next,t.next=n,Zo(e,n)))}function es(e,t,n){var r=e.pending;if(e.pending=null,r!==null){r=r.next;do t.status=`rejected`,t.reason=n,ts(t),t=t.next;while(t!==r)}e.action=null}function ts(e){e=e.listeners;for(var t=0;t<e.length;t++)(0,e[t])()}function ns(e,t){return t}function rs(e,t){if(N){var n=K.formState;if(n!==null){a:{var r=I;if(N){if(M){b:{for(var i=M,a=Hi;i.nodeType!==8;){if(!a){i=null;break b}if(i=cf(i.nextSibling),i===null){i=null;break b}}a=i.data,i=a===`F!`||a===`F`?i:null}if(i){M=cf(i.nextSibling),r=i.data===`F!`;break a}}Wi(r)}r=!1}r&&(t=n[0])}}return n=No(),n.memoizedState=n.baseState=t,r={pending:null,lanes:0,dispatch:null,lastRenderedReducer:ns,lastRenderedState:t},n.queue=r,n=Fs.bind(null,I,r),r.dispatch=n,r=Jo(!1),a=Ls.bind(null,I,!1,r.queue),r=No(),i={state:t,dispatch:null,action:e,pending:null},r.queue=i,n=Xo.bind(null,I,i,a,n),i.dispatch=n,r.memoizedState=e,[t,n,!1]}function is(e){return as(B(),L,e)}function as(e,t,n){if(t=Bo(e,t,ns)[0],e=zo(Ro)[0],typeof t==`object`&&t&&typeof t.then==`function`)try{var r=Fo(t)}catch(e){throw e===Da?ka:e}else r=t;t=B();var i=t.queue,a=i.dispatch;return n!==t.memoizedState&&(I.flags|=2048,cs(9,{destroy:void 0},os.bind(null,i,n),null)),[r,a,e]}function os(e,t){e.action=t}function ss(e){var t=B(),n=L;if(n!==null)return as(t,n,e);B(),t=t.memoizedState,n=B();var r=n.queue.dispatch;return n.memoizedState=e,[t,r,!1]}function cs(e,t,n,r){return e={tag:e,create:n,deps:r,inst:t,next:null},t=I.updateQueue,t===null&&(t=Po(),I.updateQueue=t),n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e),e}function ls(){return B().memoizedState}function us(e,t,n,r){var i=No();I.flags|=e,i.memoizedState=cs(1|t,{destroy:void 0},n,r===void 0?null:r)}function ds(e,t,n,r){var i=B();r=r===void 0?null:r;var a=i.memoizedState.inst;L!==null&&r!==null&&To(r,L.memoizedState.deps)?i.memoizedState=cs(t,a,n,r):(I.flags|=e,i.memoizedState=cs(1|t,a,n,r))}function fs(e,t){us(8390656,8,e,t)}function ps(e,t){ds(2048,8,e,t)}function ms(e){I.flags|=4;var t=I.updateQueue;if(t===null)t=Po(),I.updateQueue=t,t.events=[e];else{var n=t.events;n===null?t.events=[e]:n.push(e)}}function hs(e){var t=B().memoizedState;return ms({ref:t,nextImpl:e}),function(){if(G&2)throw Error(i(440));return t.impl.apply(void 0,arguments)}}function gs(e,t){return ds(4,2,e,t)}function _s(e,t){return ds(4,4,e,t)}function vs(e,t){if(typeof t==`function`){e=e();var n=t(e);return function(){typeof n==`function`?n():t(null)}}if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function ys(e,t,n){n=n==null?null:n.concat([e]),ds(4,4,vs.bind(null,t,e),n)}function bs(){}function xs(e,t){var n=B();t=t===void 0?null:t;var r=n.memoizedState;return t!==null&&To(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function Ss(e,t){var n=B();t=t===void 0?null:t;var r=n.memoizedState;if(t!==null&&To(t,r[1]))return r[0];if(r=e(),bo){Ke(!0);try{e()}finally{Ke(!1)}}return n.memoizedState=[r,t],r}function Cs(e,t,n){return n===void 0||_o&1073741824&&!(J&261930)?e.memoizedState=t:(e.memoizedState=n,e=mu(),I.lanes|=e,Gl|=e,n)}function ws(e,t,n,r){return kr(n,t)?n:ro.current===null?!(_o&42)||_o&1073741824&&!(J&261930)?(V=!0,e.memoizedState=n):(e=mu(),I.lanes|=e,Gl|=e,t):(e=Cs(e,n,r),kr(e,t)||(V=!0),e)}function Ts(e,t,n,r,i){var a=D.p;D.p=a!==0&&8>a?a:8;var o=E.T,s={};E.T=s,Ls(e,!1,t,n);try{var c=i(),l=E.S;l!==null&&l(s,c),typeof c==`object`&&c&&typeof c.then==`function`?Is(e,t,xa(c,r),pu(e)):Is(e,t,r,pu(e))}catch(n){Is(e,t,{then:function(){},status:`rejected`,reason:n},pu())}finally{D.p=a,o!==null&&s.types!==null&&(o.types=s.types),E.T=o}}function Es(){}function Ds(e,t,n,r){if(e.tag!==5)throw Error(i(476));var a=Os(e).queue;Ts(e,a,t,ue,n===null?Es:function(){return ks(e),n(r)})}function Os(e){var t=e.memoizedState;if(t!==null)return t;t={memoizedState:ue,baseState:ue,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Ro,lastRenderedState:ue},next:null};var n={};return t.next={memoizedState:n,baseState:n,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Ro,lastRenderedState:n},next:null},e.memoizedState=t,e=e.alternate,e!==null&&(e.memoizedState=t),t}function ks(e){var t=Os(e);t.next===null&&(t=e.alternate.memoizedState),Is(e,t.next.queue,{},pu())}function As(){return sa(Qf)}function js(){return B().memoizedState}function Ms(){return B().memoizedState}function Ns(e){for(var t=e.return;t!==null;){switch(t.tag){case 24:case 3:var n=pu();e=Ja(n);var r=Ya(t,e,n);r!==null&&(hu(r,t,n),Xa(r,t,n)),t={cache:pa()},e.payload=t;return}t=t.return}}function Ps(e,t,n){var r=pu();n={lane:r,revertLane:0,gesture:null,action:n,hasEagerState:!1,eagerState:null,next:null},Rs(e)?zs(t,n):(n=li(e,t,n,r),n!==null&&(hu(n,e,r),Bs(n,t,r)))}function Fs(e,t,n){Is(e,t,n,pu())}function Is(e,t,n,r){var i={lane:r,revertLane:0,gesture:null,action:n,hasEagerState:!1,eagerState:null,next:null};if(Rs(e))zs(t,i);else{var a=e.alternate;if(e.lanes===0&&(a===null||a.lanes===0)&&(a=t.lastRenderedReducer,a!==null))try{var o=t.lastRenderedState,s=a(o,n);if(i.hasEagerState=!0,i.eagerState=s,kr(s,o))return ci(e,t,i,0),K===null&&si(),!1}catch{}if(n=li(e,t,i,r),n!==null)return hu(n,e,r),Bs(n,t,r),!0}return!1}function Ls(e,t,n,r){if(r={lane:2,revertLane:dd(),gesture:null,action:r,hasEagerState:!1,eagerState:null,next:null},Rs(e)){if(t)throw Error(i(479))}else t=li(e,n,r,2),t!==null&&hu(t,e,2)}function Rs(e){var t=e.alternate;return e===I||t!==null&&t===I}function zs(e,t){yo=vo=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function Bs(e,t,n){if(n&4194048){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,lt(e,n)}}var Vs={readContext:sa,use:Io,useCallback:z,useContext:z,useEffect:z,useImperativeHandle:z,useLayoutEffect:z,useInsertionEffect:z,useMemo:z,useReducer:z,useRef:z,useState:z,useDebugValue:z,useDeferredValue:z,useTransition:z,useSyncExternalStore:z,useId:z,useHostTransitionStatus:z,useFormState:z,useActionState:z,useOptimistic:z,useMemoCache:z,useCacheRefresh:z};Vs.useEffectEvent=z;var Hs={readContext:sa,use:Io,useCallback:function(e,t){return No().memoizedState=[e,t===void 0?null:t],e},useContext:sa,useEffect:fs,useImperativeHandle:function(e,t,n){n=n==null?null:n.concat([e]),us(4194308,4,vs.bind(null,t,e),n)},useLayoutEffect:function(e,t){return us(4194308,4,e,t)},useInsertionEffect:function(e,t){us(4,2,e,t)},useMemo:function(e,t){var n=No();t=t===void 0?null:t;var r=e();if(bo){Ke(!0);try{e()}finally{Ke(!1)}}return n.memoizedState=[r,t],r},useReducer:function(e,t,n){var r=No();if(n!==void 0){var i=n(t);if(bo){Ke(!0);try{n(t)}finally{Ke(!1)}}}else i=t;return r.memoizedState=r.baseState=i,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:i},r.queue=e,e=e.dispatch=Ps.bind(null,I,e),[r.memoizedState,e]},useRef:function(e){var t=No();return e={current:e},t.memoizedState=e},useState:function(e){e=Jo(e);var t=e.queue,n=Fs.bind(null,I,t);return t.dispatch=n,[e.memoizedState,n]},useDebugValue:bs,useDeferredValue:function(e,t){return Cs(No(),e,t)},useTransition:function(){var e=Jo(!1);return e=Ts.bind(null,I,e.queue,!0,!1),No().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,t,n){var r=I,a=No();if(N){if(n===void 0)throw Error(i(407));n=n()}else{if(n=t(),K===null)throw Error(i(349));J&127||Uo(r,t,n)}a.memoizedState=n;var o={value:n,getSnapshot:t};return a.queue=o,fs(Go.bind(null,r,o,e),[e]),r.flags|=2048,cs(9,{destroy:void 0},Wo.bind(null,r,o,n,t),null),n},useId:function(){var e=No(),t=K.identifierPrefix;if(N){var n=Pi,r=Ni;n=(r&~(1<<32-qe(r)-1)).toString(32)+n,t=`_`+t+`R_`+n,n=xo++,0<n&&(t+=`H`+n.toString(32)),t+=`_`}else n=wo++,t=`_`+t+`r_`+n.toString(32)+`_`;return e.memoizedState=t},useHostTransitionStatus:As,useFormState:rs,useActionState:rs,useOptimistic:function(e){var t=No();t.memoizedState=t.baseState=e;var n={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return t.queue=n,t=Ls.bind(null,I,!0,n),n.dispatch=t,[e,t]},useMemoCache:Lo,useCacheRefresh:function(){return No().memoizedState=Ns.bind(null,I)},useEffectEvent:function(e){var t=No(),n={impl:e};return t.memoizedState=n,function(){if(G&2)throw Error(i(440));return n.impl.apply(void 0,arguments)}}},Us={readContext:sa,use:Io,useCallback:xs,useContext:sa,useEffect:ps,useImperativeHandle:ys,useInsertionEffect:gs,useLayoutEffect:_s,useMemo:Ss,useReducer:zo,useRef:ls,useState:function(){return zo(Ro)},useDebugValue:bs,useDeferredValue:function(e,t){return ws(B(),L.memoizedState,e,t)},useTransition:function(){var e=zo(Ro)[0],t=B().memoizedState;return[typeof e==`boolean`?e:Fo(e),t]},useSyncExternalStore:Ho,useId:js,useHostTransitionStatus:As,useFormState:is,useActionState:is,useOptimistic:function(e,t){return Yo(B(),L,e,t)},useMemoCache:Lo,useCacheRefresh:Ms};Us.useEffectEvent=hs;var Ws={readContext:sa,use:Io,useCallback:xs,useContext:sa,useEffect:ps,useImperativeHandle:ys,useInsertionEffect:gs,useLayoutEffect:_s,useMemo:Ss,useReducer:Vo,useRef:ls,useState:function(){return Vo(Ro)},useDebugValue:bs,useDeferredValue:function(e,t){var n=B();return L===null?Cs(n,e,t):ws(n,L.memoizedState,e,t)},useTransition:function(){var e=Vo(Ro)[0],t=B().memoizedState;return[typeof e==`boolean`?e:Fo(e),t]},useSyncExternalStore:Ho,useId:js,useHostTransitionStatus:As,useFormState:ss,useActionState:ss,useOptimistic:function(e,t){var n=B();return L===null?(n.baseState=e,[e,n.queue.dispatch]):Yo(n,L,e,t)},useMemoCache:Lo,useCacheRefresh:Ms};Ws.useEffectEvent=hs;function Gs(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:h({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var Ks={enqueueSetState:function(e,t,n){e=e._reactInternals;var r=pu(),i=Ja(r);i.payload=t,n!=null&&(i.callback=n),t=Ya(e,i,r),t!==null&&(hu(t,e,r),Xa(t,e,r))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=pu(),i=Ja(r);i.tag=1,i.payload=t,n!=null&&(i.callback=n),t=Ya(e,i,r),t!==null&&(hu(t,e,r),Xa(t,e,r))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=pu(),r=Ja(n);r.tag=2,t!=null&&(r.callback=t),t=Ya(e,r,n),t!==null&&(hu(t,e,n),Xa(t,e,n))}};function qs(e,t,n,r,i,a,o){return e=e.stateNode,typeof e.shouldComponentUpdate==`function`?e.shouldComponentUpdate(r,a,o):t.prototype&&t.prototype.isPureReactComponent?!Ar(n,r)||!Ar(i,a):!0}function Js(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps==`function`&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps==`function`&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&Ks.enqueueReplaceState(t,t.state,null)}function Ys(e,t){var n=t;if(`ref`in t)for(var r in n={},t)r!==`ref`&&(n[r]=t[r]);if(e=e.defaultProps)for(var i in n===t&&(n=h({},n)),e)n[i]===void 0&&(n[i]=e[i]);return n}function Xs(e){ri(e)}function Zs(e){console.error(e)}function Qs(e){ri(e)}function $s(e,t){try{var n=e.onUncaughtError;n(t.value,{componentStack:t.stack})}catch(e){setTimeout(function(){throw e})}}function ec(e,t,n){try{var r=e.onCaughtError;r(n.value,{componentStack:n.stack,errorBoundary:t.tag===1?t.stateNode:null})}catch(e){setTimeout(function(){throw e})}}function tc(e,t,n){return n=Ja(n),n.tag=3,n.payload={element:null},n.callback=function(){$s(e,t)},n}function nc(e){return e=Ja(e),e.tag=3,e}function rc(e,t,n,r){var i=n.type.getDerivedStateFromError;if(typeof i==`function`){var a=r.value;e.payload=function(){return i(a)},e.callback=function(){ec(t,n,r)}}var o=n.stateNode;o!==null&&typeof o.componentDidCatch==`function`&&(e.callback=function(){ec(t,n,r),typeof i!=`function`&&(ru===null?ru=new Set([this]):ru.add(this));var e=r.stack;this.componentDidCatch(r.value,{componentStack:e===null?``:e})})}function ic(e,t,n,r,a){if(n.flags|=32768,typeof r==`object`&&r&&typeof r.then==`function`){if(t=n.alternate,t!==null&&ia(t,n,a,!0),n=co.current,n!==null){switch(n.tag){case 31:case 13:return lo===null?Du():n.alternate===null&&X===0&&(X=3),n.flags&=-257,n.flags|=65536,n.lanes=a,r===Aa?n.flags|=16384:(t=n.updateQueue,t===null?n.updateQueue=new Set([r]):t.add(r),Gu(e,r,a)),!1;case 22:return n.flags|=65536,r===Aa?n.flags|=16384:(t=n.updateQueue,t===null?(t={transitions:null,markerInstances:null,retryQueue:new Set([r])},n.updateQueue=t):(n=t.retryQueue,n===null?t.retryQueue=new Set([r]):n.add(r)),Gu(e,r,a)),!1}throw Error(i(435,n.tag))}return Gu(e,r,a),Du(),!1}if(N)return t=co.current,t===null?(r!==Ui&&(t=Error(i(423),{cause:r}),Xi(Ti(t,n))),e=e.current.alternate,e.flags|=65536,a&=-a,e.lanes|=a,r=Ti(r,n),a=tc(e.stateNode,r,a),Za(e,a),X!==4&&(X=2)):(!(t.flags&65536)&&(t.flags|=256),t.flags|=65536,t.lanes=a,r!==Ui&&(e=Error(i(422),{cause:r}),Xi(Ti(e,n)))),!1;var o=Error(i(520),{cause:r});if(o=Ti(o,n),Xl===null?Xl=[o]:Xl.push(o),X!==4&&(X=2),t===null)return!0;r=Ti(r,n),n=t;do{switch(n.tag){case 3:return n.flags|=65536,e=a&-a,n.lanes|=e,e=tc(n.stateNode,r,e),Za(n,e),!1;case 1:if(t=n.type,o=n.stateNode,!(n.flags&128)&&(typeof t.getDerivedStateFromError==`function`||o!==null&&typeof o.componentDidCatch==`function`&&(ru===null||!ru.has(o))))return n.flags|=65536,a&=-a,n.lanes|=a,a=nc(a),rc(a,e,n,r),Za(n,a),!1}n=n.return}while(n!==null);return!1}var ac=Error(i(461)),V=!1;function oc(e,t,n,r){t.child=e===null?Wa(t,null,n,r):Ua(t,e.child,n,r)}function sc(e,t,n,r,i){n=n.render;var a=t.ref;if(`ref`in r){var o={};for(var s in r)s!==`ref`&&(o[s]=r[s])}else o=r;return oa(t),r=Eo(e,t,n,o,a,i),s=Ao(),e!==null&&!V?(jo(e,t,i),jc(e,t,i)):(N&&s&&Li(t),t.flags|=1,oc(e,t,r,i),t.child)}function cc(e,t,n,r,i){if(e===null){var a=n.type;return typeof a==`function`&&!gi(a)&&a.defaultProps===void 0&&n.compare===null?(t.tag=15,t.type=a,lc(e,t,a,r,i)):(e=yi(n.type,null,r,t,t.mode,i),e.ref=t.ref,e.return=t,t.child=e)}if(a=e.child,!Mc(e,i)){var o=a.memoizedProps;if(n=n.compare,n=n===null?Ar:n,n(o,r)&&e.ref===t.ref)return jc(e,t,i)}return t.flags|=1,e=_i(a,r),e.ref=t.ref,e.return=t,t.child=e}function lc(e,t,n,r,i){if(e!==null){var a=e.memoizedProps;if(Ar(a,r)&&e.ref===t.ref){if(V=!1,t.pendingProps=r=a,Mc(e,i))e.flags&131072&&(V=!0);else return t.lanes=e.lanes,jc(e,t,i)}}return _c(e,t,n,r,i)}function uc(e,t,n,r){var i=r.children,a=e===null?null:e.memoizedState;if(e===null&&t.stateNode===null&&(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),r.mode===`hidden`){if(t.flags&128){if(a=a===null?n:a.baseLanes|n,e!==null){for(r=t.child=e.child,i=0;r!==null;)i=i|r.lanes|r.childLanes,r=r.sibling;r=i&~a}else r=0,t.child=null;return fc(e,t,a,n,r)}if(n&536870912)t.memoizedState={baseLanes:0,cachePool:null},e!==null&&Ta(t,a===null?null:a.cachePool),a===null?oo():ao(t,a),po(t);else return r=t.lanes=536870912,fc(e,t,a===null?n:a.baseLanes|n,n,r)}else a===null?(e!==null&&Ta(t,null),oo(),mo(t)):(Ta(t,a.cachePool),ao(t,a),mo(t),t.memoizedState=null);return oc(e,t,i,n),t.child}function dc(e,t){return e!==null&&e.tag===22||t.stateNode!==null||(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),t.sibling}function fc(e,t,n,r,i){var a=wa();return a=a===null?null:{parent:P._currentValue,pool:a},t.memoizedState={baseLanes:n,cachePool:a},e!==null&&Ta(t,null),oo(),po(t),e!==null&&ia(e,t,r,!0),t.childLanes=i,null}function pc(e,t){return t=Ec({mode:t.mode,children:t.children},e.mode),t.ref=e.ref,e.child=t,t.return=e,t}function mc(e,t,n){return Ua(t,e.child,null,n),e=pc(t,t.pendingProps),e.flags|=2,ho(t),t.memoizedState=null,e}function hc(e,t,n){var r=t.pendingProps,a=!!(t.flags&128);if(t.flags&=-129,e===null){if(N){if(r.mode===`hidden`)return e=pc(t,r),t.lanes=536870912,dc(null,e);if(fo(t),(e=M)?(e=rf(e,Hi),e=e!==null&&e.data===`&`?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:Mi===null?null:{id:Ni,overflow:Pi},retryLane:536870912,hydrationErrors:null},n=Si(e),n.return=t,t.child=n,Bi=t,M=null)):e=null,e===null)throw Wi(t);return t.lanes=536870912,null}return pc(t,r)}var o=e.memoizedState;if(o!==null){var s=o.dehydrated;if(fo(t),a){if(t.flags&256)t.flags&=-257,t=mc(e,t,n);else if(t.memoizedState!==null)t.child=e.child,t.flags|=128,t=null;else throw Error(i(558))}else if(V||ia(e,t,n,!1),a=(n&e.childLanes)!==0,V||a){if(r=K,r!==null&&(s=ut(r,n),s!==0&&s!==o.retryLane))throw o.retryLane=s,ui(e,s),hu(r,e,s),ac;Du(),t=mc(e,t,n)}else e=o.treeContext,M=cf(s.nextSibling),Bi=t,N=!0,Vi=null,Hi=!1,e!==null&&zi(t,e),t=pc(t,r),t.flags|=4096;return t}return e=_i(e.child,{mode:r.mode,children:r.children}),e.ref=t.ref,t.child=e,e.return=t,e}function gc(e,t){var n=t.ref;if(n===null)e!==null&&e.ref!==null&&(t.flags|=4194816);else{if(typeof n!=`function`&&typeof n!=`object`)throw Error(i(284));(e===null||e.ref!==n)&&(t.flags|=4194816)}}function _c(e,t,n,r,i){return oa(t),n=Eo(e,t,n,r,void 0,i),r=Ao(),e!==null&&!V?(jo(e,t,i),jc(e,t,i)):(N&&r&&Li(t),t.flags|=1,oc(e,t,n,i),t.child)}function vc(e,t,n,r,i,a){return oa(t),t.updateQueue=null,n=Oo(t,r,n,i),Do(e),r=Ao(),e!==null&&!V?(jo(e,t,a),jc(e,t,a)):(N&&r&&Li(t),t.flags|=1,oc(e,t,n,a),t.child)}function yc(e,t,n,r,i){if(oa(t),t.stateNode===null){var a=pi,o=n.contextType;typeof o==`object`&&o&&(a=sa(o)),a=new n(r,a),t.memoizedState=a.state!==null&&a.state!==void 0?a.state:null,a.updater=Ks,t.stateNode=a,a._reactInternals=t,a=t.stateNode,a.props=r,a.state=t.memoizedState,a.refs={},Ka(t),o=n.contextType,a.context=typeof o==`object`&&o?sa(o):pi,a.state=t.memoizedState,o=n.getDerivedStateFromProps,typeof o==`function`&&(Gs(t,n,o,r),a.state=t.memoizedState),typeof n.getDerivedStateFromProps==`function`||typeof a.getSnapshotBeforeUpdate==`function`||typeof a.UNSAFE_componentWillMount!=`function`&&typeof a.componentWillMount!=`function`||(o=a.state,typeof a.componentWillMount==`function`&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount==`function`&&a.UNSAFE_componentWillMount(),o!==a.state&&Ks.enqueueReplaceState(a,a.state,null),eo(t,r,a,i),$a(),a.state=t.memoizedState),typeof a.componentDidMount==`function`&&(t.flags|=4194308),r=!0}else if(e===null){a=t.stateNode;var s=t.memoizedProps,c=Ys(n,s);a.props=c;var l=a.context,u=n.contextType;o=pi,typeof u==`object`&&u&&(o=sa(u));var d=n.getDerivedStateFromProps;u=typeof d==`function`||typeof a.getSnapshotBeforeUpdate==`function`,s=t.pendingProps!==s,u||typeof a.UNSAFE_componentWillReceiveProps!=`function`&&typeof a.componentWillReceiveProps!=`function`||(s||l!==o)&&Js(t,a,r,o),Ga=!1;var f=t.memoizedState;a.state=f,eo(t,r,a,i),$a(),l=t.memoizedState,s||f!==l||Ga?(typeof d==`function`&&(Gs(t,n,d,r),l=t.memoizedState),(c=Ga||qs(t,n,c,r,f,l,o))?(u||typeof a.UNSAFE_componentWillMount!=`function`&&typeof a.componentWillMount!=`function`||(typeof a.componentWillMount==`function`&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount==`function`&&a.UNSAFE_componentWillMount()),typeof a.componentDidMount==`function`&&(t.flags|=4194308)):(typeof a.componentDidMount==`function`&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=l),a.props=r,a.state=l,a.context=o,r=c):(typeof a.componentDidMount==`function`&&(t.flags|=4194308),r=!1)}else{a=t.stateNode,qa(e,t),o=t.memoizedProps,u=Ys(n,o),a.props=u,d=t.pendingProps,f=a.context,l=n.contextType,c=pi,typeof l==`object`&&l&&(c=sa(l)),s=n.getDerivedStateFromProps,(l=typeof s==`function`||typeof a.getSnapshotBeforeUpdate==`function`)||typeof a.UNSAFE_componentWillReceiveProps!=`function`&&typeof a.componentWillReceiveProps!=`function`||(o!==d||f!==c)&&Js(t,a,r,c),Ga=!1,f=t.memoizedState,a.state=f,eo(t,r,a,i),$a();var p=t.memoizedState;o!==d||f!==p||Ga||e!==null&&e.dependencies!==null&&aa(e.dependencies)?(typeof s==`function`&&(Gs(t,n,s,r),p=t.memoizedState),(u=Ga||qs(t,n,u,r,f,p,c)||e!==null&&e.dependencies!==null&&aa(e.dependencies))?(l||typeof a.UNSAFE_componentWillUpdate!=`function`&&typeof a.componentWillUpdate!=`function`||(typeof a.componentWillUpdate==`function`&&a.componentWillUpdate(r,p,c),typeof a.UNSAFE_componentWillUpdate==`function`&&a.UNSAFE_componentWillUpdate(r,p,c)),typeof a.componentDidUpdate==`function`&&(t.flags|=4),typeof a.getSnapshotBeforeUpdate==`function`&&(t.flags|=1024)):(typeof a.componentDidUpdate!=`function`||o===e.memoizedProps&&f===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!=`function`||o===e.memoizedProps&&f===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=p),a.props=r,a.state=p,a.context=c,r=u):(typeof a.componentDidUpdate!=`function`||o===e.memoizedProps&&f===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!=`function`||o===e.memoizedProps&&f===e.memoizedState||(t.flags|=1024),r=!1)}return a=r,gc(e,t),r=!!(t.flags&128),a||r?(a=t.stateNode,n=r&&typeof n.getDerivedStateFromError!=`function`?null:a.render(),t.flags|=1,e!==null&&r?(t.child=Ua(t,e.child,null,i),t.child=Ua(t,null,n,i)):oc(e,t,n,i),t.memoizedState=a.state,e=t.child):e=jc(e,t,i),e}function bc(e,t,n,r){return Ji(),t.flags|=256,oc(e,t,n,r),t.child}var xc={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function Sc(e){return{baseLanes:e,cachePool:Ea()}}function Cc(e,t,n){return e=e===null?0:e.childLanes&~n,t&&(e|=Jl),e}function wc(e,t,n){var r=t.pendingProps,a=!1,o=!!(t.flags&128),s;if((s=o)||(s=e!==null&&e.memoizedState===null?!1:!!(F.current&2)),s&&(a=!0,t.flags&=-129),s=!!(t.flags&32),t.flags&=-33,e===null){if(N){if(a?uo(t):mo(t),(e=M)?(e=rf(e,Hi),e=e!==null&&e.data!==`&`?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:Mi===null?null:{id:Ni,overflow:Pi},retryLane:536870912,hydrationErrors:null},n=Si(e),n.return=t,t.child=n,Bi=t,M=null)):e=null,e===null)throw Wi(t);return of(e)?t.lanes=32:t.lanes=536870912,null}var c=r.children;return r=r.fallback,a?(mo(t),a=t.mode,c=Ec({mode:`hidden`,children:c},a),r=bi(r,a,n,null),c.return=t,r.return=t,c.sibling=r,t.child=c,r=t.child,r.memoizedState=Sc(n),r.childLanes=Cc(e,s,n),t.memoizedState=xc,dc(null,r)):(uo(t),Tc(t,c))}var l=e.memoizedState;if(l!==null&&(c=l.dehydrated,c!==null)){if(o)t.flags&256?(uo(t),t.flags&=-257,t=Dc(e,t,n)):t.memoizedState===null?(mo(t),c=r.fallback,a=t.mode,r=Ec({mode:`visible`,children:r.children},a),c=bi(c,a,n,null),c.flags|=2,r.return=t,c.return=t,r.sibling=c,t.child=r,Ua(t,e.child,null,n),r=t.child,r.memoizedState=Sc(n),r.childLanes=Cc(e,s,n),t.memoizedState=xc,t=dc(null,r)):(mo(t),t.child=e.child,t.flags|=128,t=null);else if(uo(t),of(c)){if(s=c.nextSibling&&c.nextSibling.dataset,s)var u=s.dgst;s=u,r=Error(i(419)),r.stack=``,r.digest=s,Xi({value:r,source:null,stack:null}),t=Dc(e,t,n)}else if(V||ia(e,t,n,!1),s=(n&e.childLanes)!==0,V||s){if(s=K,s!==null&&(r=ut(s,n),r!==0&&r!==l.retryLane))throw l.retryLane=r,ui(e,r),hu(s,e,r),ac;af(c)||Du(),t=Dc(e,t,n)}else af(c)?(t.flags|=192,t.child=e.child,t=null):(e=l.treeContext,M=cf(c.nextSibling),Bi=t,N=!0,Vi=null,Hi=!1,e!==null&&zi(t,e),t=Tc(t,r.children),t.flags|=4096);return t}return a?(mo(t),c=r.fallback,a=t.mode,l=e.child,u=l.sibling,r=_i(l,{mode:`hidden`,children:r.children}),r.subtreeFlags=l.subtreeFlags&65011712,u===null?(c=bi(c,a,n,null),c.flags|=2):c=_i(u,c),c.return=t,r.return=t,r.sibling=c,t.child=r,dc(null,r),r=t.child,c=e.child.memoizedState,c===null?c=Sc(n):(a=c.cachePool,a===null?a=Ea():(l=P._currentValue,a=a.parent===l?a:{parent:l,pool:l}),c={baseLanes:c.baseLanes|n,cachePool:a}),r.memoizedState=c,r.childLanes=Cc(e,s,n),t.memoizedState=xc,dc(e.child,r)):(uo(t),n=e.child,e=n.sibling,n=_i(n,{mode:`visible`,children:r.children}),n.return=t,n.sibling=null,e!==null&&(s=t.deletions,s===null?(t.deletions=[e],t.flags|=16):s.push(e)),t.child=n,t.memoizedState=null,n)}function Tc(e,t){return t=Ec({mode:`visible`,children:t},e.mode),t.return=e,e.child=t}function Ec(e,t){return e=hi(22,e,null,t),e.lanes=0,e}function Dc(e,t,n){return Ua(t,e.child,null,n),e=Tc(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function Oc(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),na(e.return,t,n)}function kc(e,t,n,r,i,a){var o=e.memoizedState;o===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i,treeForkCount:a}:(o.isBackwards=t,o.rendering=null,o.renderingStartTime=0,o.last=r,o.tail=n,o.tailMode=i,o.treeForkCount=a)}function Ac(e,t,n){var r=t.pendingProps,i=r.revealOrder,a=r.tail;r=r.children;var o=F.current,s=!!(o&2);if(s?(o=o&1|2,t.flags|=128):o&=1,O(F,o),oc(e,t,r,n),r=N?ki:0,!s&&e!==null&&e.flags&128)a:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Oc(e,n,t);else if(e.tag===19)Oc(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break a;for(;e.sibling===null;){if(e.return===null||e.return===t)break a;e=e.return}e.sibling.return=e.return,e=e.sibling}switch(i){case`forwards`:for(n=t.child,i=null;n!==null;)e=n.alternate,e!==null&&go(e)===null&&(i=n),n=n.sibling;n=i,n===null?(i=t.child,t.child=null):(i=n.sibling,n.sibling=null),kc(t,!1,i,n,a,r);break;case`backwards`:case`unstable_legacy-backwards`:for(n=null,i=t.child,t.child=null;i!==null;){if(e=i.alternate,e!==null&&go(e)===null){t.child=i;break}e=i.sibling,i.sibling=n,n=i,i=e}kc(t,!0,n,null,a,r);break;case`together`:kc(t,!1,null,null,void 0,r);break;default:t.memoizedState=null}return t.child}function jc(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),Gl|=t.lanes,(n&t.childLanes)===0){if(e!==null){if(ia(e,t,n,!1),(n&t.childLanes)===0)return null}else return null}if(e!==null&&t.child!==e.child)throw Error(i(153));if(t.child!==null){for(e=t.child,n=_i(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=_i(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function Mc(e,t){return(e.lanes&t)!==0||(e=e.dependencies,!!(e!==null&&aa(e)))}function Nc(e,t,n){switch(t.tag){case 3:ye(t,t.stateNode.containerInfo),ea(t,P,e.memoizedState.cache),Ji();break;case 27:case 5:xe(t);break;case 4:ye(t,t.stateNode.containerInfo);break;case 10:ea(t,t.type,t.memoizedProps.value);break;case 31:if(t.memoizedState!==null)return t.flags|=128,fo(t),null;break;case 13:var r=t.memoizedState;if(r!==null)return r.dehydrated===null?(n&t.child.childLanes)===0?(uo(t),e=jc(e,t,n),e===null?null:e.sibling):wc(e,t,n):(uo(t),t.flags|=128,null);uo(t);break;case 19:var i=!!(e.flags&128);if(r=(n&t.childLanes)!==0,r||=(ia(e,t,n,!1),(n&t.childLanes)!==0),i){if(r)return Ac(e,t,n);t.flags|=128}if(i=t.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),O(F,F.current),r)break;return null;case 22:return t.lanes=0,uc(e,t,n,t.pendingProps);case 24:ea(t,P,e.memoizedState.cache)}return jc(e,t,n)}function Pc(e,t,n){if(e!==null){if(e.memoizedProps!==t.pendingProps)V=!0;else{if(!Mc(e,n)&&!(t.flags&128))return V=!1,Nc(e,t,n);V=!!(e.flags&131072)}}else V=!1,N&&t.flags&1048576&&Ii(t,ki,t.index);switch(t.lanes=0,t.tag){case 16:a:{var r=t.pendingProps;if(e=Na(t.elementType),t.type=e,typeof e==`function`)gi(e)?(r=Ys(e,r),t.tag=1,t=yc(null,t,e,r,n)):(t.tag=0,t=_c(null,t,e,r,n));else{if(e!=null){var a=e.$$typeof;if(a===C){t.tag=11,t=sc(null,t,e,r,n);break a}if(a===re){t.tag=14,t=cc(null,t,e,r,n);break a}}throw t=ce(e)||e,Error(i(306,t,``))}}return t;case 0:return _c(e,t,t.type,t.pendingProps,n);case 1:return r=t.type,a=Ys(r,t.pendingProps),yc(e,t,r,a,n);case 3:a:{if(ye(t,t.stateNode.containerInfo),e===null)throw Error(i(387));r=t.pendingProps;var o=t.memoizedState;a=o.element,qa(e,t),eo(t,r,null,n);var s=t.memoizedState;if(r=s.cache,ea(t,P,r),r!==o.cache&&ra(t,[P],n,!0),$a(),r=s.element,o.isDehydrated){if(o={element:r,isDehydrated:!1,cache:s.cache},t.updateQueue.baseState=o,t.memoizedState=o,t.flags&256){t=bc(e,t,r,n);break a}if(r!==a){a=Ti(Error(i(424)),t),Xi(a),t=bc(e,t,r,n);break a}switch(e=t.stateNode.containerInfo,e.nodeType){case 9:e=e.body;break;default:e=e.nodeName===`HTML`?e.ownerDocument.body:e}for(M=cf(e.firstChild),Bi=t,N=!0,Vi=null,Hi=!0,n=Wa(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling}else{if(Ji(),r===a){t=jc(e,t,n);break a}oc(e,t,r,n)}t=t.child}return t;case 26:return gc(e,t),e===null?(n=kf(t.type,null,t.pendingProps,null))?t.memoizedState=n:N||(n=t.type,e=t.pendingProps,r=Bd(_e.current).createElement(n),r[k]=t,r[gt]=e,Pd(r,n,e),A(r),t.stateNode=r):t.memoizedState=kf(t.type,e.memoizedProps,t.pendingProps,e.memoizedState),null;case 27:return xe(t),e===null&&N&&(r=t.stateNode=ff(t.type,t.pendingProps,_e.current),Bi=t,Hi=!0,a=M,Zd(t.type)?(lf=a,M=cf(r.firstChild)):M=a),oc(e,t,t.pendingProps.children,n),gc(e,t),e===null&&(t.flags|=4194304),t.child;case 5:return e===null&&N&&((a=r=M)&&(r=tf(r,t.type,t.pendingProps,Hi),r===null?a=!1:(t.stateNode=r,Bi=t,M=cf(r.firstChild),Hi=!1,a=!0)),a||Wi(t)),xe(t),a=t.type,o=t.pendingProps,s=e===null?null:e.memoizedProps,r=o.children,Ud(a,o)?r=null:s!==null&&Ud(a,s)&&(t.flags|=32),t.memoizedState!==null&&(a=Eo(e,t,ko,null,null,n),Qf._currentValue=a),gc(e,t),oc(e,t,r,n),t.child;case 6:return e===null&&N&&((e=n=M)&&(n=nf(n,t.pendingProps,Hi),n===null?e=!1:(t.stateNode=n,Bi=t,M=null,e=!0)),e||Wi(t)),null;case 13:return wc(e,t,n);case 4:return ye(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=Ua(t,null,r,n):oc(e,t,r,n),t.child;case 11:return sc(e,t,t.type,t.pendingProps,n);case 7:return oc(e,t,t.pendingProps,n),t.child;case 8:return oc(e,t,t.pendingProps.children,n),t.child;case 12:return oc(e,t,t.pendingProps.children,n),t.child;case 10:return r=t.pendingProps,ea(t,t.type,r.value),oc(e,t,r.children,n),t.child;case 9:return a=t.type._context,r=t.pendingProps.children,oa(t),a=sa(a),r=r(a),t.flags|=1,oc(e,t,r,n),t.child;case 14:return cc(e,t,t.type,t.pendingProps,n);case 15:return lc(e,t,t.type,t.pendingProps,n);case 19:return Ac(e,t,n);case 31:return hc(e,t,n);case 22:return uc(e,t,n,t.pendingProps);case 24:return oa(t),r=sa(P),e===null?(a=wa(),a===null&&(a=K,o=pa(),a.pooledCache=o,o.refCount++,o!==null&&(a.pooledCacheLanes|=n),a=o),t.memoizedState={parent:r,cache:a},Ka(t),ea(t,P,a)):((e.lanes&n)!==0&&(qa(e,t),eo(t,null,null,n),$a()),a=e.memoizedState,o=t.memoizedState,a.parent===r?(r=o.cache,ea(t,P,r),r!==a.cache&&ra(t,[P],n,!0)):(a={parent:r,cache:r},t.memoizedState=a,t.lanes===0&&(t.memoizedState=t.updateQueue.baseState=a),ea(t,P,r))),oc(e,t,t.pendingProps.children,n),t.child;case 29:throw t.pendingProps}throw Error(i(156,t.tag))}function Fc(e){e.flags|=4}function Ic(e,t,n,r,i){if((t=!!(e.mode&32))&&(t=!1),t){if(e.flags|=16777216,(i&335544128)===i){if(e.stateNode.complete)e.flags|=8192;else if(wu())e.flags|=8192;else throw Pa=Aa,Oa}}else e.flags&=-16777217}function Lc(e,t){if(t.type!==`stylesheet`||t.state.loading&4)e.flags&=-16777217;else if(e.flags|=16777216,!Wf(t)){if(wu())e.flags|=8192;else throw Pa=Aa,Oa}}function Rc(e,t){t!==null&&(e.flags|=4),e.flags&16384&&(t=e.tag===22?536870912:it(),e.lanes|=t,Yl|=t)}function zc(e,t){if(!N)switch(e.tailMode){case`hidden`:t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case`collapsed`:n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function H(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&65011712,r|=i.flags&65011712,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function Bc(e,t,n){var r=t.pendingProps;switch(Ri(t),t.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return H(t),null;case 1:return H(t),null;case 3:return n=t.stateNode,r=null,e!==null&&(r=e.memoizedState.cache),t.memoizedState.cache!==r&&(t.flags|=2048),ta(P),be(),n.pendingContext&&(n.context=n.pendingContext,n.pendingContext=null),(e===null||e.child===null)&&(qi(t)?Fc(t):e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,Yi())),H(t),null;case 26:var a=t.type,o=t.memoizedState;return e===null?(Fc(t),o===null?(H(t),Ic(t,a,null,r,n)):(H(t),Lc(t,o))):o?o===e.memoizedState?(H(t),t.flags&=-16777217):(Fc(t),H(t),Lc(t,o)):(e=e.memoizedProps,e!==r&&Fc(t),H(t),Ic(t,a,e,r,n)),null;case 27:if(Se(t),n=_e.current,a=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==r&&Fc(t);else{if(!r){if(t.stateNode===null)throw Error(i(166));return H(t),null}e=he.current,qi(t)?Gi(t,e):(e=ff(a,r,n),t.stateNode=e,Fc(t))}return H(t),null;case 5:if(Se(t),a=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==r&&Fc(t);else{if(!r){if(t.stateNode===null)throw Error(i(166));return H(t),null}if(o=he.current,qi(t))Gi(t,o);else{var s=Bd(_e.current);switch(o){case 1:o=s.createElementNS(`http://www.w3.org/2000/svg`,a);break;case 2:o=s.createElementNS(`http://www.w3.org/1998/Math/MathML`,a);break;default:switch(a){case`svg`:o=s.createElementNS(`http://www.w3.org/2000/svg`,a);break;case`math`:o=s.createElementNS(`http://www.w3.org/1998/Math/MathML`,a);break;case`script`:o=s.createElement(`div`),o.innerHTML=`<script><\/script>`,o=o.removeChild(o.firstChild);break;case`select`:o=typeof r.is==`string`?s.createElement(`select`,{is:r.is}):s.createElement(`select`),r.multiple?o.multiple=!0:r.size&&(o.size=r.size);break;default:o=typeof r.is==`string`?s.createElement(a,{is:r.is}):s.createElement(a)}}o[k]=t,o[gt]=r;a:for(s=t.child;s!==null;){if(s.tag===5||s.tag===6)o.appendChild(s.stateNode);else if(s.tag!==4&&s.tag!==27&&s.child!==null){s.child.return=s,s=s.child;continue}if(s===t)break a;for(;s.sibling===null;){if(s.return===null||s.return===t)break a;s=s.return}s.sibling.return=s.return,s=s.sibling}t.stateNode=o;a:switch(Pd(o,a,r),a){case`button`:case`input`:case`select`:case`textarea`:r=!!r.autoFocus;break a;case`img`:r=!0;break a;default:r=!1}r&&Fc(t)}}return H(t),Ic(t,t.type,e===null?null:e.memoizedProps,t.pendingProps,n),null;case 6:if(e&&t.stateNode!=null)e.memoizedProps!==r&&Fc(t);else{if(typeof r!=`string`&&t.stateNode===null)throw Error(i(166));if(e=_e.current,qi(t)){if(e=t.stateNode,n=t.memoizedProps,r=null,a=Bi,a!==null)switch(a.tag){case 27:case 5:r=a.memoizedProps}e[k]=t,e=!!(e.nodeValue===n||r!==null&&!0===r.suppressHydrationWarning||Md(e.nodeValue,n)),e||Wi(t,!0)}else e=Bd(e).createTextNode(r),e[k]=t,t.stateNode=e}return H(t),null;case 31:if(n=t.memoizedState,e===null||e.memoizedState!==null){if(r=qi(t),n!==null){if(e===null){if(!r)throw Error(i(318));if(e=t.memoizedState,e=e===null?null:e.dehydrated,!e)throw Error(i(557));e[k]=t}else Ji(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;H(t),e=!1}else n=Yi(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=n),e=!0;if(!e)return t.flags&256?(ho(t),t):(ho(t),null);if(t.flags&128)throw Error(i(558))}return H(t),null;case 13:if(r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(a=qi(t),r!==null&&r.dehydrated!==null){if(e===null){if(!a)throw Error(i(318));if(a=t.memoizedState,a=a===null?null:a.dehydrated,!a)throw Error(i(317));a[k]=t}else Ji(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;H(t),a=!1}else a=Yi(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=a),a=!0;if(!a)return t.flags&256?(ho(t),t):(ho(t),null)}return ho(t),t.flags&128?(t.lanes=n,t):(n=r!==null,e=e!==null&&e.memoizedState!==null,n&&(r=t.child,a=null,r.alternate!==null&&r.alternate.memoizedState!==null&&r.alternate.memoizedState.cachePool!==null&&(a=r.alternate.memoizedState.cachePool.pool),o=null,r.memoizedState!==null&&r.memoizedState.cachePool!==null&&(o=r.memoizedState.cachePool.pool),o!==a&&(r.flags|=2048)),n!==e&&n&&(t.child.flags|=8192),Rc(t,t.updateQueue),H(t),null);case 4:return be(),e===null&&Sd(t.stateNode.containerInfo),H(t),null;case 10:return ta(t.type),H(t),null;case 19:if(me(F),r=t.memoizedState,r===null)return H(t),null;if(a=!!(t.flags&128),o=r.rendering,o===null){if(a)zc(r,!1);else{if(X!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(o=go(e),o!==null){for(t.flags|=128,zc(r,!1),e=o.updateQueue,t.updateQueue=e,Rc(t,e),t.subtreeFlags=0,e=n,n=t.child;n!==null;)vi(n,e),n=n.sibling;return O(F,F.current&1|2),N&&Fi(t,r.treeForkCount),t.child}e=e.sibling}r.tail!==null&&Fe()>tu&&(t.flags|=128,a=!0,zc(r,!1),t.lanes=4194304)}}else{if(!a){if(e=go(o),e!==null){if(t.flags|=128,a=!0,e=e.updateQueue,t.updateQueue=e,Rc(t,e),zc(r,!0),r.tail===null&&r.tailMode===`hidden`&&!o.alternate&&!N)return H(t),null}else 2*Fe()-r.renderingStartTime>tu&&n!==536870912&&(t.flags|=128,a=!0,zc(r,!1),t.lanes=4194304)}r.isBackwards?(o.sibling=t.child,t.child=o):(e=r.last,e===null?t.child=o:e.sibling=o,r.last=o)}return r.tail===null?(H(t),null):(e=r.tail,r.rendering=e,r.tail=e.sibling,r.renderingStartTime=Fe(),e.sibling=null,n=F.current,O(F,a?n&1|2:n&1),N&&Fi(t,r.treeForkCount),e);case 22:case 23:return ho(t),so(),r=t.memoizedState!==null,e===null?r&&(t.flags|=8192):e.memoizedState!==null!==r&&(t.flags|=8192),r?n&536870912&&!(t.flags&128)&&(H(t),t.subtreeFlags&6&&(t.flags|=8192)):H(t),n=t.updateQueue,n!==null&&Rc(t,n.retryQueue),n=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(n=e.memoizedState.cachePool.pool),r=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(r=t.memoizedState.cachePool.pool),r!==n&&(t.flags|=2048),e!==null&&me(Ca),null;case 24:return n=null,e!==null&&(n=e.memoizedState.cache),t.memoizedState.cache!==n&&(t.flags|=2048),ta(P),H(t),null;case 25:return null;case 30:return null}throw Error(i(156,t.tag))}function Vc(e,t){switch(Ri(t),t.tag){case 1:return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return ta(P),be(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 26:case 27:case 5:return Se(t),null;case 31:if(t.memoizedState!==null){if(ho(t),t.alternate===null)throw Error(i(340));Ji()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 13:if(ho(t),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(i(340));Ji()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return me(F),null;case 4:return be(),null;case 10:return ta(t.type),null;case 22:case 23:return ho(t),so(),e!==null&&me(Ca),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 24:return ta(P),null;case 25:return null;default:return null}}function Hc(e,t){switch(Ri(t),t.tag){case 3:ta(P),be();break;case 26:case 27:case 5:Se(t);break;case 4:be();break;case 31:t.memoizedState!==null&&ho(t);break;case 13:ho(t);break;case 19:me(F);break;case 10:ta(t.type);break;case 22:case 23:ho(t),so(),e!==null&&me(Ca);break;case 24:ta(P)}}function Uc(e,t){try{var n=t.updateQueue,r=n===null?null:n.lastEffect;if(r!==null){var i=r.next;n=i;do{if((n.tag&e)===e){r=void 0;var a=n.create,o=n.inst;r=a(),o.destroy=r}n=n.next}while(n!==i)}}catch(e){Z(t,t.return,e)}}function Wc(e,t,n){try{var r=t.updateQueue,i=r===null?null:r.lastEffect;if(i!==null){var a=i.next;r=a;do{if((r.tag&e)===e){var o=r.inst,s=o.destroy;if(s!==void 0){o.destroy=void 0,i=t;var c=n,l=s;try{l()}catch(e){Z(i,c,e)}}}r=r.next}while(r!==a)}}catch(e){Z(t,t.return,e)}}function Gc(e){var t=e.updateQueue;if(t!==null){var n=e.stateNode;try{no(t,n)}catch(t){Z(e,e.return,t)}}}function Kc(e,t,n){n.props=Ys(e.type,e.memoizedProps),n.state=e.memoizedState;try{n.componentWillUnmount()}catch(n){Z(e,t,n)}}function qc(e,t){try{var n=e.ref;if(n!==null){switch(e.tag){case 26:case 27:case 5:var r=e.stateNode;break;case 30:r=e.stateNode;break;default:r=e.stateNode}typeof n==`function`?e.refCleanup=n(r):n.current=r}}catch(n){Z(e,t,n)}}function Jc(e,t){var n=e.ref,r=e.refCleanup;if(n!==null){if(typeof r==`function`)try{r()}catch(n){Z(e,t,n)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof n==`function`)try{n(null)}catch(n){Z(e,t,n)}else n.current=null}}function Yc(e){var t=e.type,n=e.memoizedProps,r=e.stateNode;try{a:switch(t){case`button`:case`input`:case`select`:case`textarea`:n.autoFocus&&r.focus();break a;case`img`:n.src?r.src=n.src:n.srcSet&&(r.srcset=n.srcSet)}}catch(t){Z(e,e.return,t)}}function Xc(e,t,n){try{var r=e.stateNode;Fd(r,e.type,n,t),r[gt]=t}catch(t){Z(e,e.return,t)}}function Zc(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&Zd(e.type)||e.tag===4}function Qc(e){a:for(;;){for(;e.sibling===null;){if(e.return===null||Zc(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&Zd(e.type)||e.flags&2||e.child===null||e.tag===4)continue a;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function $c(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?(n.nodeType===9?n.body:n.nodeName===`HTML`?n.ownerDocument.body:n).insertBefore(e,t):(t=n.nodeType===9?n.body:n.nodeName===`HTML`?n.ownerDocument.body:n,t.appendChild(e),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=cn));else if(r!==4&&(r===27&&Zd(e.type)&&(n=e.stateNode,t=null),e=e.child,e!==null))for($c(e,t,n),e=e.sibling;e!==null;)$c(e,t,n),e=e.sibling}function el(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(r===27&&Zd(e.type)&&(n=e.stateNode),e=e.child,e!==null))for(el(e,t,n),e=e.sibling;e!==null;)el(e,t,n),e=e.sibling}function tl(e){var t=e.stateNode,n=e.memoizedProps;try{for(var r=e.type,i=t.attributes;i.length;)t.removeAttributeNode(i[0]);Pd(t,r,n),t[k]=e,t[gt]=n}catch(t){Z(e,e.return,t)}}var nl=!1,U=!1,rl=!1,il=typeof WeakSet==`function`?WeakSet:Set,al=null;function ol(e,t){if(e=e.containerInfo,Rd=sp,e=Pr(e),Fr(e)){if(`selectionStart`in e)var n={start:e.selectionStart,end:e.selectionEnd};else a:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var a=r.anchorOffset,o=r.focusNode;r=r.focusOffset;try{n.nodeType,o.nodeType}catch{n=null;break a}var s=0,c=-1,l=-1,u=0,d=0,f=e,p=null;b:for(;;){for(var m;f!==n||a!==0&&f.nodeType!==3||(c=s+a),f!==o||r!==0&&f.nodeType!==3||(l=s+r),f.nodeType===3&&(s+=f.nodeValue.length),(m=f.firstChild)!==null;)p=f,f=m;for(;;){if(f===e)break b;if(p===n&&++u===a&&(c=s),p===o&&++d===r&&(l=s),(m=f.nextSibling)!==null)break;f=p,p=f.parentNode}f=m}n=c===-1||l===-1?null:{start:c,end:l}}else n=null}n||={start:0,end:0}}else n=null;for(zd={focusedElem:e,selectionRange:n},sp=!1,al=t;al!==null;)if(t=al,e=t.child,t.subtreeFlags&1028&&e!==null)e.return=t,al=e;else for(;al!==null;){switch(t=al,o=t.alternate,e=t.flags,t.tag){case 0:if(e&4&&(e=t.updateQueue,e=e===null?null:e.events,e!==null))for(n=0;n<e.length;n++)a=e[n],a.ref.impl=a.nextImpl;break;case 11:case 15:break;case 1:if(e&1024&&o!==null){e=void 0,n=t,a=o.memoizedProps,o=o.memoizedState,r=n.stateNode;try{var h=Ys(n.type,a);e=r.getSnapshotBeforeUpdate(h,o),r.__reactInternalSnapshotBeforeUpdate=e}catch(e){Z(n,n.return,e)}}break;case 3:if(e&1024){if(e=t.stateNode.containerInfo,n=e.nodeType,n===9)ef(e);else if(n===1)switch(e.nodeName){case`HEAD`:case`HTML`:case`BODY`:ef(e);break;default:e.textContent=``}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if(e&1024)throw Error(i(163))}if(e=t.sibling,e!==null){e.return=t.return,al=e;break}al=t.return}}function sl(e,t,n){var r=n.flags;switch(n.tag){case 0:case 11:case 15:xl(e,n),r&4&&Uc(5,n);break;case 1:if(xl(e,n),r&4){if(e=n.stateNode,t===null)try{e.componentDidMount()}catch(e){Z(n,n.return,e)}else{var i=Ys(n.type,t.memoizedProps);t=t.memoizedState;try{e.componentDidUpdate(i,t,e.__reactInternalSnapshotBeforeUpdate)}catch(e){Z(n,n.return,e)}}}r&64&&Gc(n),r&512&&qc(n,n.return);break;case 3:if(xl(e,n),r&64&&(e=n.updateQueue,e!==null)){if(t=null,n.child!==null)switch(n.child.tag){case 27:case 5:t=n.child.stateNode;break;case 1:t=n.child.stateNode}try{no(e,t)}catch(e){Z(n,n.return,e)}}break;case 27:t===null&&r&4&&tl(n);case 26:case 5:xl(e,n),t===null&&r&4&&Yc(n),r&512&&qc(n,n.return);break;case 12:xl(e,n);break;case 31:xl(e,n),r&4&&fl(e,n);break;case 13:xl(e,n),r&4&&pl(e,n),r&64&&(e=n.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(n=Ju.bind(null,n),sf(e,n))));break;case 22:if(r=n.memoizedState!==null||nl,!r){t=t!==null&&t.memoizedState!==null||U,i=nl;var a=U;nl=r,(U=t)&&!a?Cl(e,n,!!(n.subtreeFlags&8772)):xl(e,n),nl=i,U=a}break;case 30:break;default:xl(e,n)}}function cl(e){var t=e.alternate;t!==null&&(e.alternate=null,cl(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&Ct(t)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var W=null,ll=!1;function ul(e,t,n){for(n=n.child;n!==null;)dl(e,t,n),n=n.sibling}function dl(e,t,n){if(Ge&&typeof Ge.onCommitFiberUnmount==`function`)try{Ge.onCommitFiberUnmount(We,n)}catch{}switch(n.tag){case 26:U||Jc(n,t),ul(e,t,n),n.memoizedState?n.memoizedState.count--:n.stateNode&&(n=n.stateNode,n.parentNode.removeChild(n));break;case 27:U||Jc(n,t);var r=W,i=ll;Zd(n.type)&&(W=n.stateNode,ll=!1),ul(e,t,n),pf(n.stateNode),W=r,ll=i;break;case 5:U||Jc(n,t);case 6:if(r=W,i=ll,W=null,ul(e,t,n),W=r,ll=i,W!==null){if(ll)try{(W.nodeType===9?W.body:W.nodeName===`HTML`?W.ownerDocument.body:W).removeChild(n.stateNode)}catch(e){Z(n,t,e)}else try{W.removeChild(n.stateNode)}catch(e){Z(n,t,e)}}break;case 18:W!==null&&(ll?(e=W,Qd(e.nodeType===9?e.body:e.nodeName===`HTML`?e.ownerDocument.body:e,n.stateNode),Np(e)):Qd(W,n.stateNode));break;case 4:r=W,i=ll,W=n.stateNode.containerInfo,ll=!0,ul(e,t,n),W=r,ll=i;break;case 0:case 11:case 14:case 15:Wc(2,n,t),U||Wc(4,n,t),ul(e,t,n);break;case 1:U||(Jc(n,t),r=n.stateNode,typeof r.componentWillUnmount==`function`&&Kc(n,t,r)),ul(e,t,n);break;case 21:ul(e,t,n);break;case 22:U=(r=U)||n.memoizedState!==null,ul(e,t,n),U=r;break;default:ul(e,t,n)}}function fl(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null))){e=e.dehydrated;try{Np(e)}catch(e){Z(t,t.return,e)}}}function pl(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{Np(e)}catch(e){Z(t,t.return,e)}}function ml(e){switch(e.tag){case 31:case 13:case 19:var t=e.stateNode;return t===null&&(t=e.stateNode=new il),t;case 22:return e=e.stateNode,t=e._retryCache,t===null&&(t=e._retryCache=new il),t;default:throw Error(i(435,e.tag))}}function hl(e,t){var n=ml(e);t.forEach(function(t){if(!n.has(t)){n.add(t);var r=Yu.bind(null,e,t);t.then(r,r)}})}function gl(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var a=n[r],o=e,s=t,c=s;a:for(;c!==null;){switch(c.tag){case 27:if(Zd(c.type)){W=c.stateNode,ll=!1;break a}break;case 5:W=c.stateNode,ll=!1;break a;case 3:case 4:W=c.stateNode.containerInfo,ll=!0;break a}c=c.return}if(W===null)throw Error(i(160));dl(o,s,a),W=null,ll=!1,o=a.alternate,o!==null&&(o.return=null),a.return=null}if(t.subtreeFlags&13886)for(t=t.child;t!==null;)vl(t,e),t=t.sibling}var _l=null;function vl(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:gl(t,e),yl(e),r&4&&(Wc(3,e,e.return),Uc(3,e),Wc(5,e,e.return));break;case 1:gl(t,e),yl(e),r&512&&(U||n===null||Jc(n,n.return)),r&64&&nl&&(e=e.updateQueue,e!==null&&(r=e.callbacks,r!==null&&(n=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=n===null?r:n.concat(r))));break;case 26:var a=_l;if(gl(t,e),yl(e),r&512&&(U||n===null||Jc(n,n.return)),r&4){var o=n===null?null:n.memoizedState;if(r=e.memoizedState,n===null){if(r===null){if(e.stateNode===null){a:{r=e.type,n=e.memoizedProps,a=a.ownerDocument||a;b:switch(r){case`title`:o=a.getElementsByTagName(`title`)[0],(!o||o[St]||o[k]||o.namespaceURI===`http://www.w3.org/2000/svg`||o.hasAttribute(`itemprop`))&&(o=a.createElement(r),a.head.insertBefore(o,a.querySelector(`head > title`))),Pd(o,r,n),o[k]=e,A(o),r=o;break a;case`link`:var s=Vf(`link`,`href`,a).get(r+(n.href||``));if(s){for(var c=0;c<s.length;c++)if(o=s[c],o.getAttribute(`href`)===(n.href==null||n.href===``?null:n.href)&&o.getAttribute(`rel`)===(n.rel==null?null:n.rel)&&o.getAttribute(`title`)===(n.title==null?null:n.title)&&o.getAttribute(`crossorigin`)===(n.crossOrigin==null?null:n.crossOrigin)){s.splice(c,1);break b}}o=a.createElement(r),Pd(o,r,n),a.head.appendChild(o);break;case`meta`:if(s=Vf(`meta`,`content`,a).get(r+(n.content||``))){for(c=0;c<s.length;c++)if(o=s[c],o.getAttribute(`content`)===(n.content==null?null:``+n.content)&&o.getAttribute(`name`)===(n.name==null?null:n.name)&&o.getAttribute(`property`)===(n.property==null?null:n.property)&&o.getAttribute(`http-equiv`)===(n.httpEquiv==null?null:n.httpEquiv)&&o.getAttribute(`charset`)===(n.charSet==null?null:n.charSet)){s.splice(c,1);break b}}o=a.createElement(r),Pd(o,r,n),a.head.appendChild(o);break;default:throw Error(i(468,r))}o[k]=e,A(o),r=o}e.stateNode=r}else Hf(a,e.type,e.stateNode)}else e.stateNode=If(a,r,e.memoizedProps)}else o===r?r===null&&e.stateNode!==null&&Xc(e,e.memoizedProps,n.memoizedProps):(o===null?n.stateNode!==null&&(n=n.stateNode,n.parentNode.removeChild(n)):o.count--,r===null?Hf(a,e.type,e.stateNode):If(a,r,e.memoizedProps))}break;case 27:gl(t,e),yl(e),r&512&&(U||n===null||Jc(n,n.return)),n!==null&&r&4&&Xc(e,e.memoizedProps,n.memoizedProps);break;case 5:if(gl(t,e),yl(e),r&512&&(U||n===null||Jc(n,n.return)),e.flags&32){a=e.stateNode;try{$t(a,``)}catch(t){Z(e,e.return,t)}}r&4&&e.stateNode!=null&&(a=e.memoizedProps,Xc(e,a,n===null?a:n.memoizedProps)),r&1024&&(rl=!0);break;case 6:if(gl(t,e),yl(e),r&4){if(e.stateNode===null)throw Error(i(162));r=e.memoizedProps,n=e.stateNode;try{n.nodeValue=r}catch(t){Z(e,e.return,t)}}break;case 3:if(Bf=null,a=_l,_l=gf(t.containerInfo),gl(t,e),_l=a,yl(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Np(t.containerInfo)}catch(t){Z(e,e.return,t)}rl&&(rl=!1,bl(e));break;case 4:r=_l,_l=gf(e.stateNode.containerInfo),gl(t,e),yl(e),_l=r;break;case 12:gl(t,e),yl(e);break;case 31:gl(t,e),yl(e),r&4&&(r=e.updateQueue,r!==null&&(e.updateQueue=null,hl(e,r)));break;case 13:gl(t,e),yl(e),e.child.flags&8192&&e.memoizedState!==null!=(n!==null&&n.memoizedState!==null)&&($l=Fe()),r&4&&(r=e.updateQueue,r!==null&&(e.updateQueue=null,hl(e,r)));break;case 22:a=e.memoizedState!==null;var l=n!==null&&n.memoizedState!==null,u=nl,d=U;if(nl=u||a,U=d||l,gl(t,e),U=d,nl=u,yl(e),r&8192)a:for(t=e.stateNode,t._visibility=a?t._visibility&-2:t._visibility|1,a&&(n===null||l||nl||U||Sl(e)),n=null,t=e;;){if(t.tag===5||t.tag===26){if(n===null){l=n=t;try{if(o=l.stateNode,a)s=o.style,typeof s.setProperty==`function`?s.setProperty(`display`,`none`,`important`):s.display=`none`;else{c=l.stateNode;var f=l.memoizedProps.style,p=f!=null&&f.hasOwnProperty(`display`)?f.display:null;c.style.display=p==null||typeof p==`boolean`?``:(``+p).trim()}}catch(e){Z(l,l.return,e)}}}else if(t.tag===6){if(n===null){l=t;try{l.stateNode.nodeValue=a?``:l.memoizedProps}catch(e){Z(l,l.return,e)}}}else if(t.tag===18){if(n===null){l=t;try{var m=l.stateNode;a?$d(m,!0):$d(l.stateNode,!1)}catch(e){Z(l,l.return,e)}}}else if((t.tag!==22&&t.tag!==23||t.memoizedState===null||t===e)&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break a;for(;t.sibling===null;){if(t.return===null||t.return===e)break a;n===t&&(n=null),t=t.return}n===t&&(n=null),t.sibling.return=t.return,t=t.sibling}r&4&&(r=e.updateQueue,r!==null&&(n=r.retryQueue,n!==null&&(r.retryQueue=null,hl(e,n))));break;case 19:gl(t,e),yl(e),r&4&&(r=e.updateQueue,r!==null&&(e.updateQueue=null,hl(e,r)));break;case 30:break;case 21:break;default:gl(t,e),yl(e)}}function yl(e){var t=e.flags;if(t&2){try{for(var n,r=e.return;r!==null;){if(Zc(r)){n=r;break}r=r.return}if(n==null)throw Error(i(160));switch(n.tag){case 27:var a=n.stateNode;el(e,Qc(e),a);break;case 5:var o=n.stateNode;n.flags&32&&($t(o,``),n.flags&=-33),el(e,Qc(e),o);break;case 3:case 4:var s=n.stateNode.containerInfo;$c(e,Qc(e),s);break;default:throw Error(i(161))}}catch(t){Z(e,e.return,t)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function bl(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var t=e;bl(t),t.tag===5&&t.flags&1024&&t.stateNode.reset(),e=e.sibling}}function xl(e,t){if(t.subtreeFlags&8772)for(t=t.child;t!==null;)sl(e,t.alternate,t),t=t.sibling}function Sl(e){for(e=e.child;e!==null;){var t=e;switch(t.tag){case 0:case 11:case 14:case 15:Wc(4,t,t.return),Sl(t);break;case 1:Jc(t,t.return);var n=t.stateNode;typeof n.componentWillUnmount==`function`&&Kc(t,t.return,n),Sl(t);break;case 27:pf(t.stateNode);case 26:case 5:Jc(t,t.return),Sl(t);break;case 22:t.memoizedState===null&&Sl(t);break;case 30:Sl(t);break;default:Sl(t)}e=e.sibling}}function Cl(e,t,n){for(n&&=!!(t.subtreeFlags&8772),t=t.child;t!==null;){var r=t.alternate,i=e,a=t,o=a.flags;switch(a.tag){case 0:case 11:case 15:Cl(i,a,n),Uc(4,a);break;case 1:if(Cl(i,a,n),r=a,i=r.stateNode,typeof i.componentDidMount==`function`)try{i.componentDidMount()}catch(e){Z(r,r.return,e)}if(r=a,i=r.updateQueue,i!==null){var s=r.stateNode;try{var c=i.shared.hiddenCallbacks;if(c!==null)for(i.shared.hiddenCallbacks=null,i=0;i<c.length;i++)to(c[i],s)}catch(e){Z(r,r.return,e)}}n&&o&64&&Gc(a),qc(a,a.return);break;case 27:tl(a);case 26:case 5:Cl(i,a,n),n&&r===null&&o&4&&Yc(a),qc(a,a.return);break;case 12:Cl(i,a,n);break;case 31:Cl(i,a,n),n&&o&4&&fl(i,a);break;case 13:Cl(i,a,n),n&&o&4&&pl(i,a);break;case 22:a.memoizedState===null&&Cl(i,a,n),qc(a,a.return);break;case 30:break;default:Cl(i,a,n)}t=t.sibling}}function wl(e,t){var n=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(n=e.memoizedState.cachePool.pool),e=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(e=t.memoizedState.cachePool.pool),e!==n&&(e!=null&&e.refCount++,n!=null&&ma(n))}function Tl(e,t){e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&ma(e))}function El(e,t,n,r){if(t.subtreeFlags&10256)for(t=t.child;t!==null;)Dl(e,t,n,r),t=t.sibling}function Dl(e,t,n,r){var i=t.flags;switch(t.tag){case 0:case 11:case 15:El(e,t,n,r),i&2048&&Uc(9,t);break;case 1:El(e,t,n,r);break;case 3:El(e,t,n,r),i&2048&&(e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&ma(e)));break;case 12:if(i&2048){El(e,t,n,r),e=t.stateNode;try{var a=t.memoizedProps,o=a.id,s=a.onPostCommit;typeof s==`function`&&s(o,t.alternate===null?`mount`:`update`,e.passiveEffectDuration,-0)}catch(e){Z(t,t.return,e)}}else El(e,t,n,r);break;case 31:El(e,t,n,r);break;case 13:El(e,t,n,r);break;case 23:break;case 22:a=t.stateNode,o=t.alternate,t.memoizedState===null?a._visibility&2?El(e,t,n,r):(a._visibility|=2,Ol(e,t,n,r,!!(t.subtreeFlags&10256)||!1)):a._visibility&2?El(e,t,n,r):kl(e,t),i&2048&&wl(o,t);break;case 24:El(e,t,n,r),i&2048&&Tl(t.alternate,t);break;default:El(e,t,n,r)}}function Ol(e,t,n,r,i){for(i&&=!!(t.subtreeFlags&10256)||!1,t=t.child;t!==null;){var a=e,o=t,s=n,c=r,l=o.flags;switch(o.tag){case 0:case 11:case 15:Ol(a,o,s,c,i),Uc(8,o);break;case 23:break;case 22:var u=o.stateNode;o.memoizedState===null?(u._visibility|=2,Ol(a,o,s,c,i)):u._visibility&2?Ol(a,o,s,c,i):kl(a,o),i&&l&2048&&wl(o.alternate,o);break;case 24:Ol(a,o,s,c,i),i&&l&2048&&Tl(o.alternate,o);break;default:Ol(a,o,s,c,i)}t=t.sibling}}function kl(e,t){if(t.subtreeFlags&10256)for(t=t.child;t!==null;){var n=e,r=t,i=r.flags;switch(r.tag){case 22:kl(n,r),i&2048&&wl(r.alternate,r);break;case 24:kl(n,r),i&2048&&Tl(r.alternate,r);break;default:kl(n,r)}t=t.sibling}}var Al=8192;function jl(e,t,n){if(e.subtreeFlags&Al)for(e=e.child;e!==null;)Ml(e,t,n),e=e.sibling}function Ml(e,t,n){switch(e.tag){case 26:jl(e,t,n),e.flags&Al&&e.memoizedState!==null&&Gf(n,_l,e.memoizedState,e.memoizedProps);break;case 5:jl(e,t,n);break;case 3:case 4:var r=_l;_l=gf(e.stateNode.containerInfo),jl(e,t,n),_l=r;break;case 22:e.memoizedState===null&&(r=e.alternate,r!==null&&r.memoizedState!==null?(r=Al,Al=16777216,jl(e,t,n),Al=r):jl(e,t,n));break;default:jl(e,t,n)}}function Nl(e){var t=e.alternate;if(t!==null&&(e=t.child,e!==null)){t.child=null;do t=e.sibling,e.sibling=null,e=t;while(e!==null)}}function Pl(e){var t=e.deletions;if(e.flags&16){if(t!==null)for(var n=0;n<t.length;n++){var r=t[n];al=r,Ll(r,e)}Nl(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)Fl(e),e=e.sibling}function Fl(e){switch(e.tag){case 0:case 11:case 15:Pl(e),e.flags&2048&&Wc(9,e,e.return);break;case 3:Pl(e);break;case 12:Pl(e);break;case 22:var t=e.stateNode;e.memoizedState!==null&&t._visibility&2&&(e.return===null||e.return.tag!==13)?(t._visibility&=-3,Il(e)):Pl(e);break;default:Pl(e)}}function Il(e){var t=e.deletions;if(e.flags&16){if(t!==null)for(var n=0;n<t.length;n++){var r=t[n];al=r,Ll(r,e)}Nl(e)}for(e=e.child;e!==null;){switch(t=e,t.tag){case 0:case 11:case 15:Wc(8,t,t.return),Il(t);break;case 22:n=t.stateNode,n._visibility&2&&(n._visibility&=-3,Il(t));break;default:Il(t)}e=e.sibling}}function Ll(e,t){for(;al!==null;){var n=al;switch(n.tag){case 0:case 11:case 15:Wc(8,n,t);break;case 23:case 22:if(n.memoizedState!==null&&n.memoizedState.cachePool!==null){var r=n.memoizedState.cachePool.pool;r!=null&&r.refCount++}break;case 24:ma(n.memoizedState.cache)}if(r=n.child,r!==null)r.return=n,al=r;else a:for(n=e;al!==null;){r=al;var i=r.sibling,a=r.return;if(cl(r),r===n){al=null;break a}if(i!==null){i.return=a,al=i;break a}al=a}}}var Rl={getCacheForType:function(e){var t=sa(P),n=t.data.get(e);return n===void 0&&(n=e(),t.data.set(e,n)),n},cacheSignal:function(){return sa(P).controller.signal}},zl=typeof WeakMap==`function`?WeakMap:Map,G=0,K=null,q=null,J=0,Y=0,Bl=null,Vl=!1,Hl=!1,Ul=!1,Wl=0,X=0,Gl=0,Kl=0,ql=0,Jl=0,Yl=0,Xl=null,Zl=null,Ql=!1,$l=0,eu=0,tu=1/0,nu=null,ru=null,iu=0,au=null,ou=null,su=0,cu=0,lu=null,uu=null,du=0,fu=null;function pu(){return G&2&&J!==0?J&-J:E.T===null?pt():dd()}function mu(){if(Jl===0){if(!(J&536870912)||N){var e=Qe;Qe<<=1,!(Qe&3932160)&&(Qe=262144),Jl=e}else Jl=536870912}return e=co.current,e!==null&&(e.flags|=32),Jl}function hu(e,t,n){(e===K&&(Y===2||Y===9)||e.cancelPendingCommit!==null)&&(Su(e,0),yu(e,J,Jl,!1)),ot(e,n),(!(G&2)||e!==K)&&(e===K&&(!(G&2)&&(Kl|=n),X===4&&yu(e,J,Jl,!1)),rd(e))}function gu(e,t,n){if(G&6)throw Error(i(327));var r=!n&&!(t&127)&&(t&e.expiredLanes)===0||nt(e,t),a=r?Au(e,t):Ou(e,t,!0),o=r;do{if(a===0){Hl&&!r&&yu(e,t,0,!1);break}if(n=e.current.alternate,o&&!vu(n)){a=Ou(e,t,!1),o=!1;continue}if(a===2){if(o=t,e.errorRecoveryDisabledLanes&o)var s=0;else s=e.pendingLanes&-536870913,s=s===0?s&536870912?536870912:0:s;if(s!==0){t=s;a:{var c=e;a=Xl;var l=c.current.memoizedState.isDehydrated;if(l&&(Su(c,s).flags|=256),s=Ou(c,s,!1),s!==2){if(Ul&&!l){c.errorRecoveryDisabledLanes|=o,Kl|=o,a=4;break a}o=Zl,Zl=a,o!==null&&(Zl===null?Zl=o:Zl.push.apply(Zl,o))}a=s}if(o=!1,a!==2)continue}}if(a===1){Su(e,0),yu(e,t,0,!0);break}a:{switch(r=e,o=a,o){case 0:case 1:throw Error(i(345));case 4:if((t&4194048)!==t)break;case 6:yu(r,t,Jl,!Vl);break a;case 2:Zl=null;break;case 3:case 5:break;default:throw Error(i(329))}if((t&62914560)===t&&(a=$l+300-Fe(),10<a)){if(yu(r,t,Jl,!Vl),tt(r,0,!0)!==0)break a;su=t,r.timeoutHandle=Kd(_u.bind(null,r,n,Zl,nu,Ql,t,Jl,Kl,Yl,Vl,o,`Throttled`,-0,0),a);break a}_u(r,n,Zl,nu,Ql,t,Jl,Kl,Yl,Vl,o,null,-0,0)}break}while(1);rd(e)}function _u(e,t,n,r,i,a,o,s,c,l,u,d,f,p){if(e.timeoutHandle=-1,d=t.subtreeFlags,d&8192||(d&16785408)==16785408){d={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:cn},Ml(t,a,d);var m=(a&62914560)===a?$l-Fe():(a&4194048)===a?eu-Fe():0;if(m=qf(d,m),m!==null){su=a,e.cancelPendingCommit=m(Lu.bind(null,e,t,a,n,r,i,o,s,c,u,d,null,f,p)),yu(e,a,o,!l);return}}Lu(e,t,a,n,r,i,o,s,c)}function vu(e){for(var t=e;;){var n=t.tag;if((n===0||n===11||n===15)&&t.flags&16384&&(n=t.updateQueue,n!==null&&(n=n.stores,n!==null)))for(var r=0;r<n.length;r++){var i=n[r],a=i.getSnapshot;i=i.value;try{if(!kr(a(),i))return!1}catch{return!1}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function yu(e,t,n,r){t&=~ql,t&=~Kl,e.suspendedLanes|=t,e.pingedLanes&=~t,r&&(e.warmLanes|=t),r=e.expirationTimes;for(var i=t;0<i;){var a=31-qe(i),o=1<<a;r[a]=-1,i&=~o}n!==0&&ct(e,n,t)}function bu(){return G&6?!0:(id(0,!1),!1)}function xu(){if(q!==null){if(Y===0)var e=q.return;else e=q,$i=Qi=null,Mo(e),La=null,Ra=0,e=q;for(;e!==null;)Hc(e.alternate,e),e=e.return;q=null}}function Su(e,t){var n=e.timeoutHandle;n!==-1&&(e.timeoutHandle=-1,qd(n)),n=e.cancelPendingCommit,n!==null&&(e.cancelPendingCommit=null,n()),su=0,xu(),K=e,q=n=_i(e.current,null),J=t,Y=0,Bl=null,Vl=!1,Hl=nt(e,t),Ul=!1,Yl=Jl=ql=Kl=Gl=X=0,Zl=Xl=null,Ql=!1,t&8&&(t|=t&32);var r=e.entangledLanes;if(r!==0)for(e=e.entanglements,r&=t;0<r;){var i=31-qe(r),a=1<<i;t|=e[i],r&=~a}return Wl=t,si(),n}function Cu(e,t){I=null,E.H=Vs,t===Da||t===ka?(t=Fa(),Y=3):t===Oa?(t=Fa(),Y=4):Y=t===ac?8:typeof t==`object`&&t&&typeof t.then==`function`?6:1,Bl=t,q===null&&(X=1,$s(e,Ti(t,e.current)))}function wu(){var e=co.current;return e===null?!0:(J&4194048)===J?lo===null:(J&62914560)===J||J&536870912?e===lo:!1}function Tu(){var e=E.H;return E.H=Vs,e===null?Vs:e}function Eu(){var e=E.A;return E.A=Rl,e}function Du(){X=4,Vl||(J&4194048)!==J&&co.current!==null||(Hl=!0),!(Gl&134217727)&&!(Kl&134217727)||K===null||yu(K,J,Jl,!1)}function Ou(e,t,n){var r=G;G|=2;var i=Tu(),a=Eu();(K!==e||J!==t)&&(nu=null,Su(e,t)),t=!1;var o=X;a:do try{if(Y!==0&&q!==null){var s=q,c=Bl;switch(Y){case 8:xu(),o=6;break a;case 3:case 2:case 9:case 6:co.current===null&&(t=!0);var l=Y;if(Y=0,Bl=null,Pu(e,s,c,l),n&&Hl){o=0;break a}break;default:l=Y,Y=0,Bl=null,Pu(e,s,c,l)}}ku(),o=X;break}catch(t){Cu(e,t)}while(1);return t&&e.shellSuspendCounter++,$i=Qi=null,G=r,E.H=i,E.A=a,q===null&&(K=null,J=0,si()),o}function ku(){for(;q!==null;)Mu(q)}function Au(e,t){var n=G;G|=2;var r=Tu(),a=Eu();K!==e||J!==t?(nu=null,tu=Fe()+500,Su(e,t)):Hl=nt(e,t);a:do try{if(Y!==0&&q!==null){t=q;var o=Bl;b:switch(Y){case 1:Y=0,Bl=null,Pu(e,t,o,1);break;case 2:case 9:if(ja(o)){Y=0,Bl=null,Nu(t);break}t=function(){Y!==2&&Y!==9||K!==e||(Y=7),rd(e)},o.then(t,t);break a;case 3:Y=7;break a;case 4:Y=5;break a;case 7:ja(o)?(Y=0,Bl=null,Nu(t)):(Y=0,Bl=null,Pu(e,t,o,7));break;case 5:var s=null;switch(q.tag){case 26:s=q.memoizedState;case 5:case 27:var c=q;if(s?Wf(s):c.stateNode.complete){Y=0,Bl=null;var l=c.sibling;if(l!==null)q=l;else{var u=c.return;u===null?q=null:(q=u,Fu(u))}break b}}Y=0,Bl=null,Pu(e,t,o,5);break;case 6:Y=0,Bl=null,Pu(e,t,o,6);break;case 8:xu(),X=6;break a;default:throw Error(i(462))}}ju();break}catch(t){Cu(e,t)}while(1);return $i=Qi=null,E.H=r,E.A=a,G=n,q===null?(K=null,J=0,si(),X):0}function ju(){for(;q!==null&&!Ne();)Mu(q)}function Mu(e){var t=Pc(e.alternate,e,Wl);e.memoizedProps=e.pendingProps,t===null?Fu(e):q=t}function Nu(e){var t=e,n=t.alternate;switch(t.tag){case 15:case 0:t=vc(n,t,t.pendingProps,t.type,void 0,J);break;case 11:t=vc(n,t,t.pendingProps,t.type.render,t.ref,J);break;case 5:Mo(t);default:Hc(n,t),t=q=vi(t,Wl),t=Pc(n,t,Wl)}e.memoizedProps=e.pendingProps,t===null?Fu(e):q=t}function Pu(e,t,n,r){$i=Qi=null,Mo(t),La=null,Ra=0;var i=t.return;try{if(ic(e,i,t,n,J)){X=1,$s(e,Ti(n,e.current)),q=null;return}}catch(t){if(i!==null)throw q=i,t;X=1,$s(e,Ti(n,e.current)),q=null;return}t.flags&32768?(N||r===1?e=!0:Hl||J&536870912?e=!1:(Vl=e=!0,(r===2||r===9||r===3||r===6)&&(r=co.current,r!==null&&r.tag===13&&(r.flags|=16384))),Iu(t,e)):Fu(t)}function Fu(e){var t=e;do{if(t.flags&32768){Iu(t,Vl);return}e=t.return;var n=Bc(t.alternate,t,Wl);if(n!==null){q=n;return}if(t=t.sibling,t!==null){q=t;return}q=t=e}while(t!==null);X===0&&(X=5)}function Iu(e,t){do{var n=Vc(e.alternate,e);if(n!==null){n.flags&=32767,q=n;return}if(n=e.return,n!==null&&(n.flags|=32768,n.subtreeFlags=0,n.deletions=null),!t&&(e=e.sibling,e!==null)){q=e;return}q=e=n}while(e!==null);X=6,q=null}function Lu(e,t,n,r,a,o,s,c,l){e.cancelPendingCommit=null;do Hu();while(iu!==0);if(G&6)throw Error(i(327));if(t!==null){if(t===e.current)throw Error(i(177));if(o=t.lanes|t.childLanes,o|=oi,st(e,n,o,s,c,l),e===K&&(q=K=null,J=0),ou=t,au=e,su=n,cu=o,lu=a,uu=r,t.subtreeFlags&10256||t.flags&10256?(e.callbackNode=null,e.callbackPriority=0,Xu(ze,function(){return Uu(),null})):(e.callbackNode=null,e.callbackPriority=0),r=!!(t.flags&13878),t.subtreeFlags&13878||r){r=E.T,E.T=null,a=D.p,D.p=2,s=G,G|=4;try{ol(e,t,n)}finally{G=s,D.p=a,E.T=r}}iu=1,Ru(),zu(),Bu()}}function Ru(){if(iu===1){iu=0;var e=au,t=ou,n=!!(t.flags&13878);if(t.subtreeFlags&13878||n){n=E.T,E.T=null;var r=D.p;D.p=2;var i=G;G|=4;try{vl(t,e);var a=zd,o=Pr(e.containerInfo),s=a.focusedElem,c=a.selectionRange;if(o!==s&&s&&s.ownerDocument&&Nr(s.ownerDocument.documentElement,s)){if(c!==null&&Fr(s)){var l=c.start,u=c.end;if(u===void 0&&(u=l),`selectionStart`in s)s.selectionStart=l,s.selectionEnd=Math.min(u,s.value.length);else{var d=s.ownerDocument||document,f=d&&d.defaultView||window;if(f.getSelection){var p=f.getSelection(),m=s.textContent.length,h=Math.min(c.start,m),g=c.end===void 0?h:Math.min(c.end,m);!p.extend&&h>g&&(o=g,g=h,h=o);var _=Mr(s,h),v=Mr(s,g);if(_&&v&&(p.rangeCount!==1||p.anchorNode!==_.node||p.anchorOffset!==_.offset||p.focusNode!==v.node||p.focusOffset!==v.offset)){var y=d.createRange();y.setStart(_.node,_.offset),p.removeAllRanges(),h>g?(p.addRange(y),p.extend(v.node,v.offset)):(y.setEnd(v.node,v.offset),p.addRange(y))}}}}for(d=[],p=s;p=p.parentNode;)p.nodeType===1&&d.push({element:p,left:p.scrollLeft,top:p.scrollTop});for(typeof s.focus==`function`&&s.focus(),s=0;s<d.length;s++){var b=d[s];b.element.scrollLeft=b.left,b.element.scrollTop=b.top}}sp=!!Rd,zd=Rd=null}finally{G=i,D.p=r,E.T=n}}e.current=t,iu=2}}function zu(){if(iu===2){iu=0;var e=au,t=ou,n=!!(t.flags&8772);if(t.subtreeFlags&8772||n){n=E.T,E.T=null;var r=D.p;D.p=2;var i=G;G|=4;try{sl(e,t.alternate,t)}finally{G=i,D.p=r,E.T=n}}iu=3}}function Bu(){if(iu===4||iu===3){iu=0,Pe();var e=au,t=ou,n=su,r=uu;t.subtreeFlags&10256||t.flags&10256?iu=5:(iu=0,ou=au=null,Vu(e,e.pendingLanes));var i=e.pendingLanes;if(i===0&&(ru=null),ft(n),t=t.stateNode,Ge&&typeof Ge.onCommitFiberRoot==`function`)try{Ge.onCommitFiberRoot(We,t,void 0,(t.current.flags&128)==128)}catch{}if(r!==null){t=E.T,i=D.p,D.p=2,E.T=null;try{for(var a=e.onRecoverableError,o=0;o<r.length;o++){var s=r[o];a(s.value,{componentStack:s.stack})}}finally{E.T=t,D.p=i}}su&3&&Hu(),rd(e),i=e.pendingLanes,n&261930&&i&42?e===fu?du++:(du=0,fu=e):du=0,id(0,!1)}}function Vu(e,t){(e.pooledCacheLanes&=t)===0&&(t=e.pooledCache,t!=null&&(e.pooledCache=null,ma(t)))}function Hu(){return Ru(),zu(),Bu(),Uu()}function Uu(){if(iu!==5)return!1;var e=au,t=cu;cu=0;var n=ft(su),r=E.T,a=D.p;try{D.p=32>n?32:n,E.T=null,n=lu,lu=null;var o=au,s=su;if(iu=0,ou=au=null,su=0,G&6)throw Error(i(331));var c=G;if(G|=4,Fl(o.current),Dl(o,o.current,s,n),G=c,id(0,!1),Ge&&typeof Ge.onPostCommitFiberRoot==`function`)try{Ge.onPostCommitFiberRoot(We,o)}catch{}return!0}finally{D.p=a,E.T=r,Vu(e,t)}}function Wu(e,t,n){t=Ti(n,t),t=tc(e.stateNode,t,2),e=Ya(e,t,2),e!==null&&(ot(e,2),rd(e))}function Z(e,t,n){if(e.tag===3)Wu(e,e,n);else for(;t!==null;){if(t.tag===3){Wu(t,e,n);break}if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError==`function`||typeof r.componentDidCatch==`function`&&(ru===null||!ru.has(r))){e=Ti(n,e),n=nc(2),r=Ya(t,n,2),r!==null&&(rc(n,r,t,e),ot(r,2),rd(r));break}}t=t.return}}function Gu(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new zl;var i=new Set;r.set(t,i)}else i=r.get(t),i===void 0&&(i=new Set,r.set(t,i));i.has(n)||(Ul=!0,i.add(n),e=Ku.bind(null,e,t,n),t.then(e,e))}function Ku(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),e.pingedLanes|=e.suspendedLanes&n,e.warmLanes&=~n,K===e&&(J&n)===n&&(X===4||X===3&&(J&62914560)===J&&300>Fe()-$l?!(G&2)&&Su(e,0):ql|=n,Yl===J&&(Yl=0)),rd(e)}function qu(e,t){t===0&&(t=it()),e=ui(e,t),e!==null&&(ot(e,t),rd(e))}function Ju(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),qu(e,n)}function Yu(e,t){var n=0;switch(e.tag){case 31:case 13:var r=e.stateNode,a=e.memoizedState;a!==null&&(n=a.retryLane);break;case 19:r=e.stateNode;break;case 22:r=e.stateNode._retryCache;break;default:throw Error(i(314))}r!==null&&r.delete(t),qu(e,n)}function Xu(e,t){return je(e,t)}var Zu=null,Qu=null,$u=!1,ed=!1,td=!1,nd=0;function rd(e){e!==Qu&&e.next===null&&(Qu===null?Zu=Qu=e:Qu=Qu.next=e),ed=!0,$u||($u=!0,ud())}function id(e,t){if(!td&&ed){td=!0;do for(var n=!1,r=Zu;r!==null;){if(!t){if(e!==0){var i=r.pendingLanes;if(i===0)var a=0;else{var o=r.suspendedLanes,s=r.pingedLanes;a=(1<<31-qe(42|e)+1)-1,a&=i&~(o&~s),a=a&201326741?a&201326741|1:a?a|2:0}a!==0&&(n=!0,ld(r,a))}else a=J,a=tt(r,r===K?a:0,r.cancelPendingCommit!==null||r.timeoutHandle!==-1),!(a&3)||nt(r,a)||(n=!0,ld(r,a))}r=r.next}while(n);td=!1}}function ad(){od()}function od(){ed=$u=!1;var e=0;nd!==0&&Gd()&&(e=nd);for(var t=Fe(),n=null,r=Zu;r!==null;){var i=r.next,a=sd(r,t);a===0?(r.next=null,n===null?Zu=i:n.next=i,i===null&&(Qu=n)):(n=r,(e!==0||a&3)&&(ed=!0)),r=i}iu!==0&&iu!==5||id(e,!1),nd!==0&&(nd=0)}function sd(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,i=e.expirationTimes,a=e.pendingLanes&-62914561;0<a;){var o=31-qe(a),s=1<<o,c=i[o];c===-1?((s&n)===0||(s&r)!==0)&&(i[o]=rt(s,t)):c<=t&&(e.expiredLanes|=s),a&=~s}if(t=K,n=J,n=tt(e,e===t?n:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),r=e.callbackNode,n===0||e===t&&(Y===2||Y===9)||e.cancelPendingCommit!==null)return r!==null&&r!==null&&Me(r),e.callbackNode=null,e.callbackPriority=0;if(!(n&3)||nt(e,n)){if(t=n&-n,t===e.callbackPriority)return t;switch(r!==null&&Me(r),ft(n)){case 2:case 8:n=Re;break;case 32:n=ze;break;case 268435456:n=Ve;break;default:n=ze}return r=cd.bind(null,e),n=je(n,r),e.callbackPriority=t,e.callbackNode=n,t}return r!==null&&r!==null&&Me(r),e.callbackPriority=2,e.callbackNode=null,2}function cd(e,t){if(iu!==0&&iu!==5)return e.callbackNode=null,e.callbackPriority=0,null;var n=e.callbackNode;if(Hu()&&e.callbackNode!==n)return null;var r=J;return r=tt(e,e===K?r:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),r===0?null:(gu(e,r,t),sd(e,Fe()),e.callbackNode!=null&&e.callbackNode===n?cd.bind(null,e):null)}function ld(e,t){if(Hu())return null;gu(e,t,!0)}function ud(){Yd(function(){G&6?je(Le,ad):od()})}function dd(){if(nd===0){var e=_a;e===0&&(e=Ze,Ze<<=1,!(Ze&261888)&&(Ze=256)),nd=e}return nd}function fd(e){return e==null||typeof e==`symbol`||typeof e==`boolean`?null:typeof e==`function`?e:sn(``+e)}function pd(e,t){var n=t.ownerDocument.createElement(`input`);return n.name=t.name,n.value=t.value,e.id&&n.setAttribute(`form`,e.id),t.parentNode.insertBefore(n,t),e=new FormData(e),n.parentNode.removeChild(n),e}function md(e,t,n,r,i){if(t===`submit`&&n&&n.stateNode===i){var a=fd((i[gt]||null).action),o=r.submitter;o&&(t=(t=o[gt]||null)?fd(t.formAction):o.getAttribute(`formAction`),t!==null&&(a=t,o=null));var s=new kn(`action`,`action`,null,r,i);e.push({event:s,listeners:[{instance:null,listener:function(){if(r.defaultPrevented){if(nd!==0){var e=o?pd(i,o):new FormData(i);Ds(n,{pending:!0,data:e,method:i.method,action:a},null,e)}}else typeof a==`function`&&(s.preventDefault(),e=o?pd(i,o):new FormData(i),Ds(n,{pending:!0,data:e,method:i.method,action:a},a,e))},currentTarget:i}]})}}for(var hd=0;hd<ti.length;hd++){var gd=ti[hd];ni(gd.toLowerCase(),`on`+(gd[0].toUpperCase()+gd.slice(1)))}ni(qr,`onAnimationEnd`),ni(Jr,`onAnimationIteration`),ni(Yr,`onAnimationStart`),ni(`dblclick`,`onDoubleClick`),ni(`focusin`,`onFocus`),ni(`focusout`,`onBlur`),ni(Xr,`onTransitionRun`),ni(Zr,`onTransitionStart`),ni(Qr,`onTransitionCancel`),ni($r,`onTransitionEnd`),jt(`onMouseEnter`,[`mouseout`,`mouseover`]),jt(`onMouseLeave`,[`mouseout`,`mouseover`]),jt(`onPointerEnter`,[`pointerout`,`pointerover`]),jt(`onPointerLeave`,[`pointerout`,`pointerover`]),At(`onChange`,`change click focusin focusout input keydown keyup selectionchange`.split(` `)),At(`onSelect`,`focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange`.split(` `)),At(`onBeforeInput`,[`compositionend`,`keypress`,`textInput`,`paste`]),At(`onCompositionEnd`,`compositionend focusout keydown keypress keyup mousedown`.split(` `)),At(`onCompositionStart`,`compositionstart focusout keydown keypress keyup mousedown`.split(` `)),At(`onCompositionUpdate`,`compositionupdate focusout keydown keypress keyup mousedown`.split(` `));var _d=`abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting`.split(` `),vd=new Set(`beforetoggle cancel close invalid load scroll scrollend toggle`.split(` `).concat(_d));function yd(e,t){t=!!(t&4);for(var n=0;n<e.length;n++){var r=e[n],i=r.event;r=r.listeners;a:{var a=void 0;if(t)for(var o=r.length-1;0<=o;o--){var s=r[o],c=s.instance,l=s.currentTarget;if(s=s.listener,c!==a&&i.isPropagationStopped())break a;a=s,i.currentTarget=l;try{a(i)}catch(e){ri(e)}i.currentTarget=null,a=c}else for(o=0;o<r.length;o++){if(s=r[o],c=s.instance,l=s.currentTarget,s=s.listener,c!==a&&i.isPropagationStopped())break a;a=s,i.currentTarget=l;try{a(i)}catch(e){ri(e)}i.currentTarget=null,a=c}}}}function Q(e,t){var n=t[vt];n===void 0&&(n=t[vt]=new Set);var r=e+`__bubble`;n.has(r)||(Cd(t,e,2,!1),n.add(r))}function bd(e,t,n){var r=0;t&&(r|=4),Cd(n,e,r,t)}var xd=`_reactListening`+Math.random().toString(36).slice(2);function Sd(e){if(!e[xd]){e[xd]=!0,Ot.forEach(function(t){t!==`selectionchange`&&(vd.has(t)||bd(t,!1,e),bd(t,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[xd]||(t[xd]=!0,bd(`selectionchange`,!1,t))}}function Cd(e,t,n,r){switch(mp(t)){case 2:var i=cp;break;case 8:i=lp;break;default:i=up}n=i.bind(null,t,n,e),i=void 0,!vn||t!==`touchstart`&&t!==`touchmove`&&t!==`wheel`||(i=!0),r?i===void 0?e.addEventListener(t,n,!0):e.addEventListener(t,n,{capture:!0,passive:i}):i===void 0?e.addEventListener(t,n,!1):e.addEventListener(t,n,{passive:i})}function wd(e,t,n,r,i){var a=r;if(!(t&1)&&!(t&2)&&r!==null)a:for(;;){if(r===null)return;var s=r.tag;if(s===3||s===4){var c=r.stateNode.containerInfo;if(c===i)break;if(s===4)for(s=r.return;s!==null;){var l=s.tag;if((l===3||l===4)&&s.stateNode.containerInfo===i)return;s=s.return}for(;c!==null;){if(s=wt(c),s===null)return;if(l=s.tag,l===5||l===6||l===26||l===27){r=a=s;continue a}c=c.parentNode}}r=r.return}hn(function(){var r=a,i=un(n),s=[];a:{var c=ei.get(e);if(c!==void 0){var l=kn,u=e;switch(e){case`keypress`:if(wn(n)===0)break a;case`keydown`:case`keyup`:l=qn;break;case`focusin`:u=`focus`,l=Rn;break;case`focusout`:u=`blur`,l=Rn;break;case`beforeblur`:case`afterblur`:l=Rn;break;case`click`:if(n.button===2)break a;case`auxclick`:case`dblclick`:case`mousedown`:case`mousemove`:case`mouseup`:case`mouseout`:case`mouseover`:case`contextmenu`:l=In;break;case`drag`:case`dragend`:case`dragenter`:case`dragexit`:case`dragleave`:case`dragover`:case`dragstart`:case`drop`:l=Ln;break;case`touchcancel`:case`touchend`:case`touchmove`:case`touchstart`:l=Yn;break;case qr:case Jr:case Yr:l=zn;break;case $r:l=Xn;break;case`scroll`:case`scrollend`:l=jn;break;case`wheel`:l=Zn;break;case`copy`:case`cut`:case`paste`:l=Bn;break;case`gotpointercapture`:case`lostpointercapture`:case`pointercancel`:case`pointerdown`:case`pointermove`:case`pointerout`:case`pointerover`:case`pointerup`:l=Jn;break;case`toggle`:case`beforetoggle`:l=Qn}var d=!!(t&4),f=!d&&(e===`scroll`||e===`scrollend`),p=d?c===null?null:c+`Capture`:c;d=[];for(var m=r,h;m!==null;){var g=m;if(h=g.stateNode,g=g.tag,g!==5&&g!==26&&g!==27||h===null||p===null||(g=gn(m,p),g!=null&&d.push(Td(m,g,h))),f)break;m=m.return}0<d.length&&(c=new l(c,u,null,n,i),s.push({event:c,listeners:d}))}}if(!(t&7)){a:{if(c=e===`mouseover`||e===`pointerover`,l=e===`mouseout`||e===`pointerout`,c&&n!==ln&&(u=n.relatedTarget||n.fromElement)&&(wt(u)||u[_t]))break a;if((l||c)&&(c=i.window===i?i:(c=i.ownerDocument)?c.defaultView||c.parentWindow:window,l?(u=n.relatedTarget||n.toElement,l=r,u=u?wt(u):null,u!==null&&(f=o(u),d=u.tag,u!==f||d!==5&&d!==27&&d!==6)&&(u=null)):(l=null,u=r),l!==u)){if(d=In,g=`onMouseLeave`,p=`onMouseEnter`,m=`mouse`,(e===`pointerout`||e===`pointerover`)&&(d=Jn,g=`onPointerLeave`,p=`onPointerEnter`,m=`pointer`),f=l==null?c:Et(l),h=u==null?c:Et(u),c=new d(g,m+`leave`,l,n,i),c.target=f,c.relatedTarget=h,g=null,wt(i)===r&&(d=new d(p,m+`enter`,u,n,i),d.target=h,d.relatedTarget=f,g=d),f=g,l&&u)b:{for(d=Dd,p=l,m=u,h=0,g=p;g;g=d(g))h++;g=0;for(var _=m;_;_=d(_))g++;for(;0<h-g;)p=d(p),h--;for(;0<g-h;)m=d(m),g--;for(;h--;){if(p===m||m!==null&&p===m.alternate){d=p;break b}p=d(p),m=d(m)}d=null}else d=null;l!==null&&Od(s,c,l,d,!1),u!==null&&f!==null&&Od(s,f,u,d,!0)}}a:{if(c=r?Et(r):window,l=c.nodeName&&c.nodeName.toLowerCase(),l===`select`||l===`input`&&c.type===`file`)var v=_r;else if(dr(c)){if(vr)v=Dr;else{v=Tr;var y=wr}}else l=c.nodeName,!l||l.toLowerCase()!==`input`||c.type!==`checkbox`&&c.type!==`radio`?r&&rn(r.elementType)&&(v=_r):v=Er;if(v&&=v(e,r)){fr(s,v,n,i);break a}y&&y(e,c,r),e===`focusout`&&r&&c.type===`number`&&r.memoizedProps.value!=null&&Yt(c,`number`,c.value)}switch(y=r?Et(r):window,e){case`focusin`:(dr(y)||y.contentEditable===`true`)&&(Lr=y,Rr=r,zr=null);break;case`focusout`:zr=Rr=Lr=null;break;case`mousedown`:Br=!0;break;case`contextmenu`:case`mouseup`:case`dragend`:Br=!1,Vr(s,n,i);break;case`selectionchange`:if(Ir)break;case`keydown`:case`keyup`:Vr(s,n,i)}var b;if(j)b:{switch(e){case`compositionstart`:var x=`onCompositionStart`;break b;case`compositionend`:x=`onCompositionEnd`;break b;case`compositionupdate`:x=`onCompositionUpdate`;break b}x=void 0}else sr?ar(e,n)&&(x=`onCompositionEnd`):e===`keydown`&&n.keyCode===229&&(x=`onCompositionStart`);x&&(nr&&n.locale!==`ko`&&(sr||x!==`onCompositionStart`?x===`onCompositionEnd`&&sr&&(b=Cn()):(bn=i,xn=`value`in bn?bn.value:bn.textContent,sr=!0)),y=Ed(r,x),0<y.length&&(x=new Vn(x,e,null,n,i),s.push({event:x,listeners:y}),b?x.data=b:(b=or(n),b!==null&&(x.data=b)))),(b=tr?cr(e,n):lr(e,n))&&(x=Ed(r,`onBeforeInput`),0<x.length&&(y=new Vn(`onBeforeInput`,`beforeinput`,null,n,i),s.push({event:y,listeners:x}),y.data=b)),md(s,e,r,n,i)}yd(s,t)})}function Td(e,t,n){return{instance:e,listener:t,currentTarget:n}}function Ed(e,t){for(var n=t+`Capture`,r=[];e!==null;){var i=e,a=i.stateNode;if(i=i.tag,i!==5&&i!==26&&i!==27||a===null||(i=gn(e,n),i!=null&&r.unshift(Td(e,i,a)),i=gn(e,t),i!=null&&r.push(Td(e,i,a))),e.tag===3)return r;e=e.return}return[]}function Dd(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function Od(e,t,n,r,i){for(var a=t._reactName,o=[];n!==null&&n!==r;){var s=n,c=s.alternate,l=s.stateNode;if(s=s.tag,c!==null&&c===r)break;s!==5&&s!==26&&s!==27||l===null||(c=l,i?(l=gn(n,a),l!=null&&o.unshift(Td(n,l,c))):i||(l=gn(n,a),l!=null&&o.push(Td(n,l,c)))),n=n.return}o.length!==0&&e.push({event:t,listeners:o})}var kd=/\r\n?/g,Ad=/\u0000|\uFFFD/g;function jd(e){return(typeof e==`string`?e:``+e).replace(kd,`
`).replace(Ad,``)}function Md(e,t){return t=jd(t),jd(e)===t}function $(e,t,n,r,a,o){switch(n){case`children`:typeof r==`string`?t===`body`||t===`textarea`&&r===``||$t(e,r):(typeof r==`number`||typeof r==`bigint`)&&t!==`body`&&$t(e,``+r);break;case`className`:Lt(e,`class`,r);break;case`tabIndex`:Lt(e,`tabindex`,r);break;case`dir`:case`role`:case`viewBox`:case`width`:case`height`:Lt(e,n,r);break;case`style`:nn(e,r,o);break;case`data`:if(t!==`object`){Lt(e,`data`,r);break}case`src`:case`href`:if(r===``&&(t!==`a`||n!==`href`)){e.removeAttribute(n);break}if(r==null||typeof r==`function`||typeof r==`symbol`||typeof r==`boolean`){e.removeAttribute(n);break}r=sn(``+r),e.setAttribute(n,r);break;case`action`:case`formAction`:if(typeof r==`function`){e.setAttribute(n,`javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')`);break}if(typeof o==`function`&&(n===`formAction`?(t!==`input`&&$(e,t,`name`,a.name,a,null),$(e,t,`formEncType`,a.formEncType,a,null),$(e,t,`formMethod`,a.formMethod,a,null),$(e,t,`formTarget`,a.formTarget,a,null)):($(e,t,`encType`,a.encType,a,null),$(e,t,`method`,a.method,a,null),$(e,t,`target`,a.target,a,null))),r==null||typeof r==`symbol`||typeof r==`boolean`){e.removeAttribute(n);break}r=sn(``+r),e.setAttribute(n,r);break;case`onClick`:r!=null&&(e.onclick=cn);break;case`onScroll`:r!=null&&Q(`scroll`,e);break;case`onScrollEnd`:r!=null&&Q(`scrollend`,e);break;case`dangerouslySetInnerHTML`:if(r!=null){if(typeof r!=`object`||!(`__html`in r))throw Error(i(61));if(n=r.__html,n!=null){if(a.children!=null)throw Error(i(60));e.innerHTML=n}}break;case`multiple`:e.multiple=r&&typeof r!=`function`&&typeof r!=`symbol`;break;case`muted`:e.muted=r&&typeof r!=`function`&&typeof r!=`symbol`;break;case`suppressContentEditableWarning`:case`suppressHydrationWarning`:case`defaultValue`:case`defaultChecked`:case`innerHTML`:case`ref`:break;case`autoFocus`:break;case`xlinkHref`:if(r==null||typeof r==`function`||typeof r==`boolean`||typeof r==`symbol`){e.removeAttribute(`xlink:href`);break}n=sn(``+r),e.setAttributeNS(`http://www.w3.org/1999/xlink`,`xlink:href`,n);break;case`contentEditable`:case`spellCheck`:case`draggable`:case`value`:case`autoReverse`:case`externalResourcesRequired`:case`focusable`:case`preserveAlpha`:r!=null&&typeof r!=`function`&&typeof r!=`symbol`?e.setAttribute(n,``+r):e.removeAttribute(n);break;case`inert`:case`allowFullScreen`:case`async`:case`autoPlay`:case`controls`:case`default`:case`defer`:case`disabled`:case`disablePictureInPicture`:case`disableRemotePlayback`:case`formNoValidate`:case`hidden`:case`loop`:case`noModule`:case`noValidate`:case`open`:case`playsInline`:case`readOnly`:case`required`:case`reversed`:case`scoped`:case`seamless`:case`itemScope`:r&&typeof r!=`function`&&typeof r!=`symbol`?e.setAttribute(n,``):e.removeAttribute(n);break;case`capture`:case`download`:!0===r?e.setAttribute(n,``):!1!==r&&r!=null&&typeof r!=`function`&&typeof r!=`symbol`?e.setAttribute(n,r):e.removeAttribute(n);break;case`cols`:case`rows`:case`size`:case`span`:r!=null&&typeof r!=`function`&&typeof r!=`symbol`&&!isNaN(r)&&1<=r?e.setAttribute(n,r):e.removeAttribute(n);break;case`rowSpan`:case`start`:r==null||typeof r==`function`||typeof r==`symbol`||isNaN(r)?e.removeAttribute(n):e.setAttribute(n,r);break;case`popover`:Q(`beforetoggle`,e),Q(`toggle`,e),It(e,`popover`,r);break;case`xlinkActuate`:Rt(e,`http://www.w3.org/1999/xlink`,`xlink:actuate`,r);break;case`xlinkArcrole`:Rt(e,`http://www.w3.org/1999/xlink`,`xlink:arcrole`,r);break;case`xlinkRole`:Rt(e,`http://www.w3.org/1999/xlink`,`xlink:role`,r);break;case`xlinkShow`:Rt(e,`http://www.w3.org/1999/xlink`,`xlink:show`,r);break;case`xlinkTitle`:Rt(e,`http://www.w3.org/1999/xlink`,`xlink:title`,r);break;case`xlinkType`:Rt(e,`http://www.w3.org/1999/xlink`,`xlink:type`,r);break;case`xmlBase`:Rt(e,`http://www.w3.org/XML/1998/namespace`,`xml:base`,r);break;case`xmlLang`:Rt(e,`http://www.w3.org/XML/1998/namespace`,`xml:lang`,r);break;case`xmlSpace`:Rt(e,`http://www.w3.org/XML/1998/namespace`,`xml:space`,r);break;case`is`:It(e,`is`,r);break;case`innerText`:case`textContent`:break;default:(!(2<n.length)||n[0]!==`o`&&n[0]!==`O`||n[1]!==`n`&&n[1]!==`N`)&&(n=an.get(n)||n,It(e,n,r))}}function Nd(e,t,n,r,a,o){switch(n){case`style`:nn(e,r,o);break;case`dangerouslySetInnerHTML`:if(r!=null){if(typeof r!=`object`||!(`__html`in r))throw Error(i(61));if(n=r.__html,n!=null){if(a.children!=null)throw Error(i(60));e.innerHTML=n}}break;case`children`:typeof r==`string`?$t(e,r):(typeof r==`number`||typeof r==`bigint`)&&$t(e,``+r);break;case`onScroll`:r!=null&&Q(`scroll`,e);break;case`onScrollEnd`:r!=null&&Q(`scrollend`,e);break;case`onClick`:r!=null&&(e.onclick=cn);break;case`suppressContentEditableWarning`:case`suppressHydrationWarning`:case`innerHTML`:case`ref`:break;case`innerText`:case`textContent`:break;default:if(!kt.hasOwnProperty(n))a:{if(n[0]===`o`&&n[1]===`n`&&(a=n.endsWith(`Capture`),t=n.slice(2,a?n.length-7:void 0),o=e[gt]||null,o=o==null?null:o[n],typeof o==`function`&&e.removeEventListener(t,o,a),typeof r==`function`)){typeof o!=`function`&&o!==null&&(n in e?e[n]=null:e.hasAttribute(n)&&e.removeAttribute(n)),e.addEventListener(t,r,a);break a}n in e?e[n]=r:!0===r?e.setAttribute(n,``):It(e,n,r)}}}function Pd(e,t,n){switch(t){case`div`:case`span`:case`svg`:case`path`:case`a`:case`g`:case`p`:case`li`:break;case`img`:Q(`error`,e),Q(`load`,e);var r=!1,a=!1,o;for(o in n)if(n.hasOwnProperty(o)){var s=n[o];if(s!=null)switch(o){case`src`:r=!0;break;case`srcSet`:a=!0;break;case`children`:case`dangerouslySetInnerHTML`:throw Error(i(137,t));default:$(e,t,o,s,n,null)}}a&&$(e,t,`srcSet`,n.srcSet,n,null),r&&$(e,t,`src`,n.src,n,null);return;case`input`:Q(`invalid`,e);var c=o=s=a=null,l=null,u=null;for(r in n)if(n.hasOwnProperty(r)){var d=n[r];if(d!=null)switch(r){case`name`:a=d;break;case`type`:s=d;break;case`checked`:l=d;break;case`defaultChecked`:u=d;break;case`value`:o=d;break;case`defaultValue`:c=d;break;case`children`:case`dangerouslySetInnerHTML`:if(d!=null)throw Error(i(137,t));break;default:$(e,t,r,d,n,null)}}Jt(e,o,c,l,u,s,a,!1);return;case`select`:for(a in Q(`invalid`,e),r=s=o=null,n)if(n.hasOwnProperty(a)&&(c=n[a],c!=null))switch(a){case`value`:o=c;break;case`defaultValue`:s=c;break;case`multiple`:r=c;default:$(e,t,a,c,n,null)}t=o,n=s,e.multiple=!!r,t==null?n!=null&&Xt(e,!!r,n,!0):Xt(e,!!r,t,!1);return;case`textarea`:for(s in Q(`invalid`,e),o=a=r=null,n)if(n.hasOwnProperty(s)&&(c=n[s],c!=null))switch(s){case`value`:r=c;break;case`defaultValue`:a=c;break;case`children`:o=c;break;case`dangerouslySetInnerHTML`:if(c!=null)throw Error(i(91));break;default:$(e,t,s,c,n,null)}Qt(e,r,a,o);return;case`option`:for(l in n)if(n.hasOwnProperty(l)&&(r=n[l],r!=null))switch(l){case`selected`:e.selected=r&&typeof r!=`function`&&typeof r!=`symbol`;break;default:$(e,t,l,r,n,null)}return;case`dialog`:Q(`beforetoggle`,e),Q(`toggle`,e),Q(`cancel`,e),Q(`close`,e);break;case`iframe`:case`object`:Q(`load`,e);break;case`video`:case`audio`:for(r=0;r<_d.length;r++)Q(_d[r],e);break;case`image`:Q(`error`,e),Q(`load`,e);break;case`details`:Q(`toggle`,e);break;case`embed`:case`source`:case`link`:Q(`error`,e),Q(`load`,e);case`area`:case`base`:case`br`:case`col`:case`hr`:case`keygen`:case`meta`:case`param`:case`track`:case`wbr`:case`menuitem`:for(u in n)if(n.hasOwnProperty(u)&&(r=n[u],r!=null))switch(u){case`children`:case`dangerouslySetInnerHTML`:throw Error(i(137,t));default:$(e,t,u,r,n,null)}return;default:if(rn(t)){for(d in n)n.hasOwnProperty(d)&&(r=n[d],r!==void 0&&Nd(e,t,d,r,n,void 0));return}}for(c in n)n.hasOwnProperty(c)&&(r=n[c],r!=null&&$(e,t,c,r,n,null))}function Fd(e,t,n,r){switch(t){case`div`:case`span`:case`svg`:case`path`:case`a`:case`g`:case`p`:case`li`:break;case`input`:var a=null,o=null,s=null,c=null,l=null,u=null,d=null;for(m in n){var f=n[m];if(n.hasOwnProperty(m)&&f!=null)switch(m){case`checked`:break;case`value`:break;case`defaultValue`:l=f;default:r.hasOwnProperty(m)||$(e,t,m,null,r,f)}}for(var p in r){var m=r[p];if(f=n[p],r.hasOwnProperty(p)&&(m!=null||f!=null))switch(p){case`type`:o=m;break;case`name`:a=m;break;case`checked`:u=m;break;case`defaultChecked`:d=m;break;case`value`:s=m;break;case`defaultValue`:c=m;break;case`children`:case`dangerouslySetInnerHTML`:if(m!=null)throw Error(i(137,t));break;default:m!==f&&$(e,t,p,m,r,f)}}qt(e,s,c,l,u,d,o,a);return;case`select`:for(o in m=s=c=p=null,n)if(l=n[o],n.hasOwnProperty(o)&&l!=null)switch(o){case`value`:break;case`multiple`:m=l;default:r.hasOwnProperty(o)||$(e,t,o,null,r,l)}for(a in r)if(o=r[a],l=n[a],r.hasOwnProperty(a)&&(o!=null||l!=null))switch(a){case`value`:p=o;break;case`defaultValue`:c=o;break;case`multiple`:s=o;default:o!==l&&$(e,t,a,o,r,l)}t=c,n=s,r=m,p==null?!!r!=!!n&&(t==null?Xt(e,!!n,n?[]:``,!1):Xt(e,!!n,t,!0)):Xt(e,!!n,p,!1);return;case`textarea`:for(c in m=p=null,n)if(a=n[c],n.hasOwnProperty(c)&&a!=null&&!r.hasOwnProperty(c))switch(c){case`value`:break;case`children`:break;default:$(e,t,c,null,r,a)}for(s in r)if(a=r[s],o=n[s],r.hasOwnProperty(s)&&(a!=null||o!=null))switch(s){case`value`:p=a;break;case`defaultValue`:m=a;break;case`children`:break;case`dangerouslySetInnerHTML`:if(a!=null)throw Error(i(91));break;default:a!==o&&$(e,t,s,a,r,o)}Zt(e,p,m);return;case`option`:for(var h in n)if(p=n[h],n.hasOwnProperty(h)&&p!=null&&!r.hasOwnProperty(h))switch(h){case`selected`:e.selected=!1;break;default:$(e,t,h,null,r,p)}for(l in r)if(p=r[l],m=n[l],r.hasOwnProperty(l)&&p!==m&&(p!=null||m!=null))switch(l){case`selected`:e.selected=p&&typeof p!=`function`&&typeof p!=`symbol`;break;default:$(e,t,l,p,r,m)}return;case`img`:case`link`:case`area`:case`base`:case`br`:case`col`:case`embed`:case`hr`:case`keygen`:case`meta`:case`param`:case`source`:case`track`:case`wbr`:case`menuitem`:for(var g in n)p=n[g],n.hasOwnProperty(g)&&p!=null&&!r.hasOwnProperty(g)&&$(e,t,g,null,r,p);for(u in r)if(p=r[u],m=n[u],r.hasOwnProperty(u)&&p!==m&&(p!=null||m!=null))switch(u){case`children`:case`dangerouslySetInnerHTML`:if(p!=null)throw Error(i(137,t));break;default:$(e,t,u,p,r,m)}return;default:if(rn(t)){for(var _ in n)p=n[_],n.hasOwnProperty(_)&&p!==void 0&&!r.hasOwnProperty(_)&&Nd(e,t,_,void 0,r,p);for(d in r)p=r[d],m=n[d],!r.hasOwnProperty(d)||p===m||p===void 0&&m===void 0||Nd(e,t,d,p,r,m);return}}for(var v in n)p=n[v],n.hasOwnProperty(v)&&p!=null&&!r.hasOwnProperty(v)&&$(e,t,v,null,r,p);for(f in r)p=r[f],m=n[f],!r.hasOwnProperty(f)||p===m||p==null&&m==null||$(e,t,f,p,r,m)}function Id(e){switch(e){case`css`:case`script`:case`font`:case`img`:case`image`:case`input`:case`link`:return!0;default:return!1}}function Ld(){if(typeof performance.getEntriesByType==`function`){for(var e=0,t=0,n=performance.getEntriesByType(`resource`),r=0;r<n.length;r++){var i=n[r],a=i.transferSize,o=i.initiatorType,s=i.duration;if(a&&s&&Id(o)){for(o=0,s=i.responseEnd,r+=1;r<n.length;r++){var c=n[r],l=c.startTime;if(l>s)break;var u=c.transferSize,d=c.initiatorType;u&&Id(d)&&(c=c.responseEnd,o+=u*(c<s?1:(s-l)/(c-l)))}if(--r,t+=8*(a+o)/(i.duration/1e3),e++,10<e)break}}if(0<e)return t/e/1e6}return navigator.connection&&(e=navigator.connection.downlink,typeof e==`number`)?e:5}var Rd=null,zd=null;function Bd(e){return e.nodeType===9?e:e.ownerDocument}function Vd(e){switch(e){case`http://www.w3.org/2000/svg`:return 1;case`http://www.w3.org/1998/Math/MathML`:return 2;default:return 0}}function Hd(e,t){if(e===0)switch(t){case`svg`:return 1;case`math`:return 2;default:return 0}return e===1&&t===`foreignObject`?0:e}function Ud(e,t){return e===`textarea`||e===`noscript`||typeof t.children==`string`||typeof t.children==`number`||typeof t.children==`bigint`||typeof t.dangerouslySetInnerHTML==`object`&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Wd=null;function Gd(){var e=window.event;return e&&e.type===`popstate`?e!==Wd&&(Wd=e,!0):(Wd=null,!1)}var Kd=typeof setTimeout==`function`?setTimeout:void 0,qd=typeof clearTimeout==`function`?clearTimeout:void 0,Jd=typeof Promise==`function`?Promise:void 0,Yd=typeof queueMicrotask==`function`?queueMicrotask:Jd===void 0?Kd:function(e){return Jd.resolve(null).then(e).catch(Xd)};function Xd(e){setTimeout(function(){throw e})}function Zd(e){return e===`head`}function Qd(e,t){var n=t,r=0;do{var i=n.nextSibling;if(e.removeChild(n),i&&i.nodeType===8){if(n=i.data,n===`/$`||n===`/&`){if(r===0){e.removeChild(i),Np(t);return}r--}else if(n===`$`||n===`$?`||n===`$~`||n===`$!`||n===`&`)r++;else if(n===`html`)pf(e.ownerDocument.documentElement);else if(n===`head`){n=e.ownerDocument.head,pf(n);for(var a=n.firstChild;a;){var o=a.nextSibling,s=a.nodeName;a[St]||s===`SCRIPT`||s===`STYLE`||s===`LINK`&&a.rel.toLowerCase()===`stylesheet`||n.removeChild(a),a=o}}else n===`body`&&pf(e.ownerDocument.body)}n=i}while(n);Np(t)}function $d(e,t){var n=e;e=0;do{var r=n.nextSibling;if(n.nodeType===1?t?(n._stashedDisplay=n.style.display,n.style.display=`none`):(n.style.display=n._stashedDisplay||``,n.getAttribute(`style`)===``&&n.removeAttribute(`style`)):n.nodeType===3&&(t?(n._stashedText=n.nodeValue,n.nodeValue=``):n.nodeValue=n._stashedText||``),r&&r.nodeType===8){if(n=r.data,n===`/$`){if(e===0)break;e--}else n!==`$`&&n!==`$?`&&n!==`$~`&&n!==`$!`||e++}n=r}while(n)}function ef(e){var t=e.firstChild;for(t&&t.nodeType===10&&(t=t.nextSibling);t;){var n=t;switch(t=t.nextSibling,n.nodeName){case`HTML`:case`HEAD`:case`BODY`:ef(n),Ct(n);continue;case`SCRIPT`:case`STYLE`:continue;case`LINK`:if(n.rel.toLowerCase()===`stylesheet`)continue}e.removeChild(n)}}function tf(e,t,n,r){for(;e.nodeType===1;){var i=n;if(e.nodeName.toLowerCase()!==t.toLowerCase()){if(!r&&(e.nodeName!==`INPUT`||e.type!==`hidden`))break}else if(!r){if(t===`input`&&e.type===`hidden`){var a=i.name==null?null:``+i.name;if(i.type===`hidden`&&e.getAttribute(`name`)===a)return e}else return e}else if(!e[St])switch(t){case`meta`:if(!e.hasAttribute(`itemprop`))break;return e;case`link`:if(a=e.getAttribute(`rel`),a===`stylesheet`&&e.hasAttribute(`data-precedence`)||a!==i.rel||e.getAttribute(`href`)!==(i.href==null||i.href===``?null:i.href)||e.getAttribute(`crossorigin`)!==(i.crossOrigin==null?null:i.crossOrigin)||e.getAttribute(`title`)!==(i.title==null?null:i.title))break;return e;case`style`:if(e.hasAttribute(`data-precedence`))break;return e;case`script`:if(a=e.getAttribute(`src`),(a!==(i.src==null?null:i.src)||e.getAttribute(`type`)!==(i.type==null?null:i.type)||e.getAttribute(`crossorigin`)!==(i.crossOrigin==null?null:i.crossOrigin))&&a&&e.hasAttribute(`async`)&&!e.hasAttribute(`itemprop`))break;return e;default:return e}if(e=cf(e.nextSibling),e===null)break}return null}function nf(e,t,n){if(t===``)return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!==`INPUT`||e.type!==`hidden`)&&!n||(e=cf(e.nextSibling),e===null))return null;return e}function rf(e,t){for(;e.nodeType!==8;)if((e.nodeType!==1||e.nodeName!==`INPUT`||e.type!==`hidden`)&&!t||(e=cf(e.nextSibling),e===null))return null;return e}function af(e){return e.data===`$?`||e.data===`$~`}function of(e){return e.data===`$!`||e.data===`$?`&&e.ownerDocument.readyState!==`loading`}function sf(e,t){var n=e.ownerDocument;if(e.data===`$~`)e._reactRetry=t;else if(e.data!==`$?`||n.readyState!==`loading`)t();else{var r=function(){t(),n.removeEventListener(`DOMContentLoaded`,r)};n.addEventListener(`DOMContentLoaded`,r),e._reactRetry=r}}function cf(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t===`$`||t===`$!`||t===`$?`||t===`$~`||t===`&`||t===`F!`||t===`F`)break;if(t===`/$`||t===`/&`)return null}}return e}var lf=null;function uf(e){e=e.nextSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n===`/$`||n===`/&`){if(t===0)return cf(e.nextSibling);t--}else n!==`$`&&n!==`$!`&&n!==`$?`&&n!==`$~`&&n!==`&`||t++}e=e.nextSibling}return null}function df(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n===`$`||n===`$!`||n===`$?`||n===`$~`||n===`&`){if(t===0)return e;t--}else n!==`/$`&&n!==`/&`||t++}e=e.previousSibling}return null}function ff(e,t,n){switch(t=Bd(n),e){case`html`:if(e=t.documentElement,!e)throw Error(i(452));return e;case`head`:if(e=t.head,!e)throw Error(i(453));return e;case`body`:if(e=t.body,!e)throw Error(i(454));return e;default:throw Error(i(451))}}function pf(e){for(var t=e.attributes;t.length;)e.removeAttributeNode(t[0]);Ct(e)}var mf=new Map,hf=new Set;function gf(e){return typeof e.getRootNode==`function`?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var _f=D.d;D.d={f:vf,r:yf,D:Sf,C:Cf,L:wf,m:Tf,X:Df,S:Ef,M:Of};function vf(){var e=_f.f(),t=bu();return e||t}function yf(e){var t=Tt(e);t!==null&&t.tag===5&&t.type===`form`?ks(t):_f.r(e)}var bf=typeof document>`u`?null:document;function xf(e,t,n){var r=bf;if(r&&typeof t==`string`&&t){var i=Kt(t);i=`link[rel="`+e+`"][href="`+i+`"]`,typeof n==`string`&&(i+=`[crossorigin="`+n+`"]`),hf.has(i)||(hf.add(i),e={rel:e,crossOrigin:n,href:t},r.querySelector(i)===null&&(t=r.createElement(`link`),Pd(t,`link`,e),A(t),r.head.appendChild(t)))}}function Sf(e){_f.D(e),xf(`dns-prefetch`,e,null)}function Cf(e,t){_f.C(e,t),xf(`preconnect`,e,t)}function wf(e,t,n){_f.L(e,t,n);var r=bf;if(r&&e&&t){var i=`link[rel="preload"][as="`+Kt(t)+`"]`;t===`image`&&n&&n.imageSrcSet?(i+=`[imagesrcset="`+Kt(n.imageSrcSet)+`"]`,typeof n.imageSizes==`string`&&(i+=`[imagesizes="`+Kt(n.imageSizes)+`"]`)):i+=`[href="`+Kt(e)+`"]`;var a=i;switch(t){case`style`:a=Af(e);break;case`script`:a=Pf(e)}mf.has(a)||(e=h({rel:`preload`,href:t===`image`&&n&&n.imageSrcSet?void 0:e,as:t},n),mf.set(a,e),r.querySelector(i)!==null||t===`style`&&r.querySelector(jf(a))||t===`script`&&r.querySelector(Ff(a))||(t=r.createElement(`link`),Pd(t,`link`,e),A(t),r.head.appendChild(t)))}}function Tf(e,t){_f.m(e,t);var n=bf;if(n&&e){var r=t&&typeof t.as==`string`?t.as:`script`,i=`link[rel="modulepreload"][as="`+Kt(r)+`"][href="`+Kt(e)+`"]`,a=i;switch(r){case`audioworklet`:case`paintworklet`:case`serviceworker`:case`sharedworker`:case`worker`:case`script`:a=Pf(e)}if(!mf.has(a)&&(e=h({rel:`modulepreload`,href:e},t),mf.set(a,e),n.querySelector(i)===null)){switch(r){case`audioworklet`:case`paintworklet`:case`serviceworker`:case`sharedworker`:case`worker`:case`script`:if(n.querySelector(Ff(a)))return}r=n.createElement(`link`),Pd(r,`link`,e),A(r),n.head.appendChild(r)}}}function Ef(e,t,n){_f.S(e,t,n);var r=bf;if(r&&e){var i=Dt(r).hoistableStyles,a=Af(e);t||=`default`;var o=i.get(a);if(!o){var s={loading:0,preload:null};if(o=r.querySelector(jf(a)))s.loading=5;else{e=h({rel:`stylesheet`,href:e,"data-precedence":t},n),(n=mf.get(a))&&Rf(e,n);var c=o=r.createElement(`link`);A(c),Pd(c,`link`,e),c._p=new Promise(function(e,t){c.onload=e,c.onerror=t}),c.addEventListener(`load`,function(){s.loading|=1}),c.addEventListener(`error`,function(){s.loading|=2}),s.loading|=4,Lf(o,t,r)}o={type:`stylesheet`,instance:o,count:1,state:s},i.set(a,o)}}}function Df(e,t){_f.X(e,t);var n=bf;if(n&&e){var r=Dt(n).hoistableScripts,i=Pf(e),a=r.get(i);a||(a=n.querySelector(Ff(i)),a||(e=h({src:e,async:!0},t),(t=mf.get(i))&&zf(e,t),a=n.createElement(`script`),A(a),Pd(a,`link`,e),n.head.appendChild(a)),a={type:`script`,instance:a,count:1,state:null},r.set(i,a))}}function Of(e,t){_f.M(e,t);var n=bf;if(n&&e){var r=Dt(n).hoistableScripts,i=Pf(e),a=r.get(i);a||(a=n.querySelector(Ff(i)),a||(e=h({src:e,async:!0,type:`module`},t),(t=mf.get(i))&&zf(e,t),a=n.createElement(`script`),A(a),Pd(a,`link`,e),n.head.appendChild(a)),a={type:`script`,instance:a,count:1,state:null},r.set(i,a))}}function kf(e,t,n,r){var a=(a=_e.current)?gf(a):null;if(!a)throw Error(i(446));switch(e){case`meta`:case`title`:return null;case`style`:return typeof n.precedence==`string`&&typeof n.href==`string`?(t=Af(n.href),n=Dt(a).hoistableStyles,r=n.get(t),r||(r={type:`style`,instance:null,count:0,state:null},n.set(t,r)),r):{type:`void`,instance:null,count:0,state:null};case`link`:if(n.rel===`stylesheet`&&typeof n.href==`string`&&typeof n.precedence==`string`){e=Af(n.href);var o=Dt(a).hoistableStyles,s=o.get(e);if(s||(a=a.ownerDocument||a,s={type:`stylesheet`,instance:null,count:0,state:{loading:0,preload:null}},o.set(e,s),(o=a.querySelector(jf(e)))&&!o._p&&(s.instance=o,s.state.loading=5),mf.has(e)||(n={rel:`preload`,as:`style`,href:n.href,crossOrigin:n.crossOrigin,integrity:n.integrity,media:n.media,hrefLang:n.hrefLang,referrerPolicy:n.referrerPolicy},mf.set(e,n),o||Nf(a,e,n,s.state))),t&&r===null)throw Error(i(528,``));return s}if(t&&r!==null)throw Error(i(529,``));return null;case`script`:return t=n.async,n=n.src,typeof n==`string`&&t&&typeof t!=`function`&&typeof t!=`symbol`?(t=Pf(n),n=Dt(a).hoistableScripts,r=n.get(t),r||(r={type:`script`,instance:null,count:0,state:null},n.set(t,r)),r):{type:`void`,instance:null,count:0,state:null};default:throw Error(i(444,e))}}function Af(e){return`href="`+Kt(e)+`"`}function jf(e){return`link[rel="stylesheet"][`+e+`]`}function Mf(e){return h({},e,{"data-precedence":e.precedence,precedence:null})}function Nf(e,t,n,r){e.querySelector(`link[rel="preload"][as="style"][`+t+`]`)?r.loading=1:(t=e.createElement(`link`),r.preload=t,t.addEventListener(`load`,function(){return r.loading|=1}),t.addEventListener(`error`,function(){return r.loading|=2}),Pd(t,`link`,n),A(t),e.head.appendChild(t))}function Pf(e){return`[src="`+Kt(e)+`"]`}function Ff(e){return`script[async]`+e}function If(e,t,n){if(t.count++,t.instance===null)switch(t.type){case`style`:var r=e.querySelector(`style[data-href~="`+Kt(n.href)+`"]`);if(r)return t.instance=r,A(r),r;var a=h({},n,{"data-href":n.href,"data-precedence":n.precedence,href:null,precedence:null});return r=(e.ownerDocument||e).createElement(`style`),A(r),Pd(r,`style`,a),Lf(r,n.precedence,e),t.instance=r;case`stylesheet`:a=Af(n.href);var o=e.querySelector(jf(a));if(o)return t.state.loading|=4,t.instance=o,A(o),o;r=Mf(n),(a=mf.get(a))&&Rf(r,a),o=(e.ownerDocument||e).createElement(`link`),A(o);var s=o;return s._p=new Promise(function(e,t){s.onload=e,s.onerror=t}),Pd(o,`link`,r),t.state.loading|=4,Lf(o,n.precedence,e),t.instance=o;case`script`:return o=Pf(n.src),(a=e.querySelector(Ff(o)))?(t.instance=a,A(a),a):(r=n,(a=mf.get(o))&&(r=h({},n),zf(r,a)),e=e.ownerDocument||e,a=e.createElement(`script`),A(a),Pd(a,`link`,r),e.head.appendChild(a),t.instance=a);case`void`:return null;default:throw Error(i(443,t.type))}else t.type===`stylesheet`&&!(t.state.loading&4)&&(r=t.instance,t.state.loading|=4,Lf(r,n.precedence,e));return t.instance}function Lf(e,t,n){for(var r=n.querySelectorAll(`link[rel="stylesheet"][data-precedence],style[data-precedence]`),i=r.length?r[r.length-1]:null,a=i,o=0;o<r.length;o++){var s=r[o];if(s.dataset.precedence===t)a=s;else if(a!==i)break}a?a.parentNode.insertBefore(e,a.nextSibling):(t=n.nodeType===9?n.head:n,t.insertBefore(e,t.firstChild))}function Rf(e,t){e.crossOrigin??=t.crossOrigin,e.referrerPolicy??=t.referrerPolicy,e.title??=t.title}function zf(e,t){e.crossOrigin??=t.crossOrigin,e.referrerPolicy??=t.referrerPolicy,e.integrity??=t.integrity}var Bf=null;function Vf(e,t,n){if(Bf===null){var r=new Map,i=Bf=new Map;i.set(n,r)}else i=Bf,r=i.get(n),r||(r=new Map,i.set(n,r));if(r.has(e))return r;for(r.set(e,null),n=n.getElementsByTagName(e),i=0;i<n.length;i++){var a=n[i];if(!(a[St]||a[k]||e===`link`&&a.getAttribute(`rel`)===`stylesheet`)&&a.namespaceURI!==`http://www.w3.org/2000/svg`){var o=a.getAttribute(t)||``;o=e+o;var s=r.get(o);s?s.push(a):r.set(o,[a])}}return r}function Hf(e,t,n){e=e.ownerDocument||e,e.head.insertBefore(n,t===`title`?e.querySelector(`head > title`):null)}function Uf(e,t,n){if(n===1||t.itemProp!=null)return!1;switch(e){case`meta`:case`title`:return!0;case`style`:if(typeof t.precedence!=`string`||typeof t.href!=`string`||t.href===``)break;return!0;case`link`:if(typeof t.rel!=`string`||typeof t.href!=`string`||t.href===``||t.onLoad||t.onError)break;switch(t.rel){case`stylesheet`:return e=t.disabled,typeof t.precedence==`string`&&e==null;default:return!0}case`script`:if(t.async&&typeof t.async!=`function`&&typeof t.async!=`symbol`&&!t.onLoad&&!t.onError&&t.src&&typeof t.src==`string`)return!0}return!1}function Wf(e){return!(e.type===`stylesheet`&&!(e.state.loading&3))}function Gf(e,t,n,r){if(n.type===`stylesheet`&&(typeof r.media!=`string`||!1!==matchMedia(r.media).matches)&&!(n.state.loading&4)){if(n.instance===null){var i=Af(r.href),a=t.querySelector(jf(i));if(a){t=a._p,typeof t==`object`&&t&&typeof t.then==`function`&&(e.count++,e=Jf.bind(e),t.then(e,e)),n.state.loading|=4,n.instance=a,A(a);return}a=t.ownerDocument||t,r=Mf(r),(i=mf.get(i))&&Rf(r,i),a=a.createElement(`link`),A(a);var o=a;o._p=new Promise(function(e,t){o.onload=e,o.onerror=t}),Pd(a,`link`,r),n.instance=a}e.stylesheets===null&&(e.stylesheets=new Map),e.stylesheets.set(n,t),(t=n.state.preload)&&!(n.state.loading&3)&&(e.count++,n=Jf.bind(e),t.addEventListener(`load`,n),t.addEventListener(`error`,n))}}var Kf=0;function qf(e,t){return e.stylesheets&&e.count===0&&Xf(e,e.stylesheets),0<e.count||0<e.imgCount?function(n){var r=setTimeout(function(){if(e.stylesheets&&Xf(e,e.stylesheets),e.unsuspend){var t=e.unsuspend;e.unsuspend=null,t()}},6e4+t);0<e.imgBytes&&Kf===0&&(Kf=62500*Ld());var i=setTimeout(function(){if(e.waitingForImages=!1,e.count===0&&(e.stylesheets&&Xf(e,e.stylesheets),e.unsuspend)){var t=e.unsuspend;e.unsuspend=null,t()}},(e.imgBytes>Kf?50:800)+t);return e.unsuspend=n,function(){e.unsuspend=null,clearTimeout(r),clearTimeout(i)}}:null}function Jf(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)Xf(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var Yf=null;function Xf(e,t){e.stylesheets=null,e.unsuspend!==null&&(e.count++,Yf=new Map,t.forEach(Zf,e),Yf=null,Jf.call(e))}function Zf(e,t){if(!(t.state.loading&4)){var n=Yf.get(e);if(n)var r=n.get(null);else{n=new Map,Yf.set(e,n);for(var i=e.querySelectorAll(`link[data-precedence],style[data-precedence]`),a=0;a<i.length;a++){var o=i[a];(o.nodeName===`LINK`||o.getAttribute(`media`)!==`not all`)&&(n.set(o.dataset.precedence,o),r=o)}r&&n.set(null,r)}i=t.instance,o=i.getAttribute(`data-precedence`),a=n.get(o)||r,a===r&&n.set(null,i),n.set(o,i),this.count++,r=Jf.bind(this),i.addEventListener(`load`,r),i.addEventListener(`error`,r),a?a.parentNode.insertBefore(i,a.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(i,e.firstChild)),t.state.loading|=4}}var Qf={$$typeof:S,Provider:null,Consumer:null,_currentValue:ue,_currentValue2:ue,_threadCount:0};function $f(e,t,n,r,i,a,o,s,c){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=at(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=at(0),this.hiddenUpdates=at(null),this.identifierPrefix=r,this.onUncaughtError=i,this.onCaughtError=a,this.onRecoverableError=o,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=c,this.incompleteTransitions=new Map}function ep(e,t,n,r,i,a,o,s,c,l,u,d){return e=new $f(e,t,n,o,c,l,u,d,s),t=1,!0===a&&(t|=24),a=hi(3,null,null,t),e.current=a,a.stateNode=e,t=pa(),t.refCount++,e.pooledCache=t,t.refCount++,a.memoizedState={element:r,isDehydrated:n,cache:t},Ka(a),e}function tp(e){return e?(e=pi,e):pi}function np(e,t,n,r,i,a){i=tp(i),r.context===null?r.context=i:r.pendingContext=i,r=Ja(t),r.payload={element:n},a=a===void 0?null:a,a!==null&&(r.callback=a),n=Ya(e,r,t),n!==null&&(hu(n,e,t),Xa(n,e,t))}function rp(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function ip(e,t){rp(e,t),(e=e.alternate)&&rp(e,t)}function ap(e){if(e.tag===13||e.tag===31){var t=ui(e,67108864);t!==null&&hu(t,e,67108864),ip(e,67108864)}}function op(e){if(e.tag===13||e.tag===31){var t=pu();t=dt(t);var n=ui(e,t);n!==null&&hu(n,e,t),ip(e,t)}}var sp=!0;function cp(e,t,n,r){var i=E.T;E.T=null;var a=D.p;try{D.p=2,up(e,t,n,r)}finally{D.p=a,E.T=i}}function lp(e,t,n,r){var i=E.T;E.T=null;var a=D.p;try{D.p=8,up(e,t,n,r)}finally{D.p=a,E.T=i}}function up(e,t,n,r){if(sp){var i=dp(r);if(i===null)wd(e,t,r,fp,n),Cp(e,r);else if(Tp(i,e,t,n,r))r.stopPropagation();else if(Cp(e,r),t&4&&-1<Sp.indexOf(e)){for(;i!==null;){var a=Tt(i);if(a!==null)switch(a.tag){case 3:if(a=a.stateNode,a.current.memoizedState.isDehydrated){var o=et(a.pendingLanes);if(o!==0){var s=a;for(s.pendingLanes|=2,s.entangledLanes|=2;o;){var c=1<<31-qe(o);s.entanglements[1]|=c,o&=~c}rd(a),!(G&6)&&(tu=Fe()+500,id(0,!1))}}break;case 31:case 13:s=ui(a,2),s!==null&&hu(s,a,2),bu(),ip(a,2)}if(a=dp(r),a===null&&wd(e,t,r,fp,n),a===i)break;i=a}i!==null&&r.stopPropagation()}else wd(e,t,r,null,n)}}function dp(e){return e=un(e),pp(e)}var fp=null;function pp(e){if(fp=null,e=wt(e),e!==null){var t=o(e);if(t===null)e=null;else{var n=t.tag;if(n===13){if(e=s(t),e!==null)return e;e=null}else if(n===31){if(e=c(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null)}}return fp=e,null}function mp(e){switch(e){case`beforetoggle`:case`cancel`:case`click`:case`close`:case`contextmenu`:case`copy`:case`cut`:case`auxclick`:case`dblclick`:case`dragend`:case`dragstart`:case`drop`:case`focusin`:case`focusout`:case`input`:case`invalid`:case`keydown`:case`keypress`:case`keyup`:case`mousedown`:case`mouseup`:case`paste`:case`pause`:case`play`:case`pointercancel`:case`pointerdown`:case`pointerup`:case`ratechange`:case`reset`:case`resize`:case`seeked`:case`submit`:case`toggle`:case`touchcancel`:case`touchend`:case`touchstart`:case`volumechange`:case`change`:case`selectionchange`:case`textInput`:case`compositionstart`:case`compositionend`:case`compositionupdate`:case`beforeblur`:case`afterblur`:case`beforeinput`:case`blur`:case`fullscreenchange`:case`focus`:case`hashchange`:case`popstate`:case`select`:case`selectstart`:return 2;case`drag`:case`dragenter`:case`dragexit`:case`dragleave`:case`dragover`:case`mousemove`:case`mouseout`:case`mouseover`:case`pointermove`:case`pointerout`:case`pointerover`:case`scroll`:case`touchmove`:case`wheel`:case`mouseenter`:case`mouseleave`:case`pointerenter`:case`pointerleave`:return 8;case`message`:switch(Ie()){case Le:return 2;case Re:return 8;case ze:case Be:return 32;case Ve:return 268435456;default:return 32}default:return 32}}var hp=!1,gp=null,_p=null,vp=null,yp=new Map,bp=new Map,xp=[],Sp=`mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset`.split(` `);function Cp(e,t){switch(e){case`focusin`:case`focusout`:gp=null;break;case`dragenter`:case`dragleave`:_p=null;break;case`mouseover`:case`mouseout`:vp=null;break;case`pointerover`:case`pointerout`:yp.delete(t.pointerId);break;case`gotpointercapture`:case`lostpointercapture`:bp.delete(t.pointerId)}}function wp(e,t,n,r,i,a){return e===null||e.nativeEvent!==a?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:a,targetContainers:[i]},t!==null&&(t=Tt(t),t!==null&&ap(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,i!==null&&t.indexOf(i)===-1&&t.push(i),e)}function Tp(e,t,n,r,i){switch(t){case`focusin`:return gp=wp(gp,e,t,n,r,i),!0;case`dragenter`:return _p=wp(_p,e,t,n,r,i),!0;case`mouseover`:return vp=wp(vp,e,t,n,r,i),!0;case`pointerover`:var a=i.pointerId;return yp.set(a,wp(yp.get(a)||null,e,t,n,r,i)),!0;case`gotpointercapture`:return a=i.pointerId,bp.set(a,wp(bp.get(a)||null,e,t,n,r,i)),!0}return!1}function Ep(e){var t=wt(e.target);if(t!==null){var n=o(t);if(n!==null){if(t=n.tag,t===13){if(t=s(n),t!==null){e.blockedOn=t,mt(e.priority,function(){op(n)});return}}else if(t===31){if(t=c(n),t!==null){e.blockedOn=t,mt(e.priority,function(){op(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Dp(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=dp(e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);ln=r,n.target.dispatchEvent(r),ln=null}else return t=Tt(n),t!==null&&ap(t),e.blockedOn=n,!1;t.shift()}return!0}function Op(e,t,n){Dp(e)&&n.delete(t)}function kp(){hp=!1,gp!==null&&Dp(gp)&&(gp=null),_p!==null&&Dp(_p)&&(_p=null),vp!==null&&Dp(vp)&&(vp=null),yp.forEach(Op),bp.forEach(Op)}function Ap(e,n){e.blockedOn===n&&(e.blockedOn=null,hp||(hp=!0,t.unstable_scheduleCallback(t.unstable_NormalPriority,kp)))}var jp=null;function Mp(e){jp!==e&&(jp=e,t.unstable_scheduleCallback(t.unstable_NormalPriority,function(){jp===e&&(jp=null);for(var t=0;t<e.length;t+=3){var n=e[t],r=e[t+1],i=e[t+2];if(typeof r!=`function`){if(pp(r||n)===null)continue;break}var a=Tt(n);a!==null&&(e.splice(t,3),t-=3,Ds(a,{pending:!0,data:i,method:n.method,action:r},r,i))}}))}function Np(e){function t(t){return Ap(t,e)}gp!==null&&Ap(gp,e),_p!==null&&Ap(_p,e),vp!==null&&Ap(vp,e),yp.forEach(t),bp.forEach(t);for(var n=0;n<xp.length;n++){var r=xp[n];r.blockedOn===e&&(r.blockedOn=null)}for(;0<xp.length&&(n=xp[0],n.blockedOn===null);)Ep(n),n.blockedOn===null&&xp.shift();if(n=(e.ownerDocument||e).$$reactFormReplay,n!=null)for(r=0;r<n.length;r+=3){var i=n[r],a=n[r+1],o=i[gt]||null;if(typeof a==`function`)o||Mp(n);else if(o){var s=null;if(a&&a.hasAttribute(`formAction`)){if(i=a,o=a[gt]||null)s=o.formAction;else if(pp(i)!==null)continue}else s=o.action;typeof s==`function`?n[r+1]=s:(n.splice(r,3),r-=3),Mp(n)}}}function Pp(){function e(e){e.canIntercept&&e.info===`react-transition`&&e.intercept({handler:function(){return new Promise(function(e){return i=e})},focusReset:`manual`,scroll:`manual`})}function t(){i!==null&&(i(),i=null),r||setTimeout(n,20)}function n(){if(!r&&!navigation.transition){var e=navigation.currentEntry;e&&e.url!=null&&navigation.navigate(e.url,{state:e.getState(),info:`react-transition`,history:`replace`})}}if(typeof navigation==`object`){var r=!1,i=null;return navigation.addEventListener(`navigate`,e),navigation.addEventListener(`navigatesuccess`,t),navigation.addEventListener(`navigateerror`,t),setTimeout(n,100),function(){r=!0,navigation.removeEventListener(`navigate`,e),navigation.removeEventListener(`navigatesuccess`,t),navigation.removeEventListener(`navigateerror`,t),i!==null&&(i(),i=null)}}}function Fp(e){this._internalRoot=e}Ip.prototype.render=Fp.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(i(409));var n=t.current;np(n,pu(),e,t,null,null)},Ip.prototype.unmount=Fp.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;np(e.current,2,null,e,null,null),bu(),t[_t]=null}};function Ip(e){this._internalRoot=e}Ip.prototype.unstable_scheduleHydration=function(e){if(e){var t=pt();e={blockedOn:null,target:e,priority:t};for(var n=0;n<xp.length&&t!==0&&t<xp[n].priority;n++);xp.splice(n,0,e),n===0&&Ep(e)}};var Lp=n.version;if(Lp!==`19.2.8`)throw Error(i(527,Lp,`19.2.8`));D.findDOMNode=function(e){var t=e._reactInternals;if(t===void 0)throw typeof e.render==`function`?Error(i(188)):(e=Object.keys(e).join(`,`),Error(i(268,e)));return e=d(t),e=e===null?null:p(e),e=e===null?null:e.stateNode,e};var Rp={bundleType:0,version:`19.2.8`,rendererPackageName:`react-dom`,currentDispatcherRef:E,reconcilerVersion:`19.2.8`};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<`u`){var zp=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!zp.isDisabled&&zp.supportsFiber)try{We=zp.inject(Rp),Ge=zp}catch{}}e.createRoot=function(e,t){if(!a(e))throw Error(i(299));var n=!1,r=``,o=Xs,s=Zs,c=Qs;return t!=null&&(!0===t.unstable_strictMode&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onUncaughtError!==void 0&&(o=t.onUncaughtError),t.onCaughtError!==void 0&&(s=t.onCaughtError),t.onRecoverableError!==void 0&&(c=t.onRecoverableError)),t=ep(e,1,!1,null,null,n,r,null,o,s,c,Pp),e[_t]=t.current,Sd(e),new Fp(t)}})),g=o(((e,t)=>{function n(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>`u`||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!=`function`))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n)}catch(e){console.error(e)}}n(),t.exports=h()})),_=`modulepreload`,v=function(e,t){return new URL(e,t).href},y={},b=function(e,t,n){let r=Promise.resolve();if(t&&t.length>0){let e=document.getElementsByTagName(`link`),i=document.querySelector(`meta[property=csp-nonce]`),a=i?.nonce||i?.getAttribute(`nonce`);function o(e){return Promise.all(e.map(e=>Promise.resolve(e).then(e=>({status:`fulfilled`,value:e}),e=>({status:`rejected`,reason:e}))))}function s(e){return import.meta.resolve?import.meta.resolve(e):new URL(e,import.meta.url).href}r=o(t.map(t=>{if(t=v(t,n),t=s(t),t in y)return;y[t]=!0;let r=t.endsWith(`.css`);for(let n=e.length-1;n>=0;n--){let i=e[n];if(i.href===t&&(!r||i.rel===`stylesheet`))return}let i=document.createElement(`link`);if(i.rel=r?`stylesheet`:_,r||(i.as=`script`),i.crossOrigin=``,i.href=t,a&&i.setAttribute(`nonce`,a),document.head.appendChild(i),r)return new Promise((e,n)=>{i.addEventListener(`load`,e),i.addEventListener(`error`,()=>n(Error(`Unable to preload CSS for ${t}`)))})}))}function i(e){let t=new Event(`vite:preloadError`,{cancelable:!0});if(t.payload=e,window.dispatchEvent(t),!t.defaultPrevented)throw e}return r.then(t=>{for(let e of t||[])e.status===`rejected`&&i(e.reason);return e().catch(i)})},x=c(u(),1),ee=/^(?:[a-z][a-z0-9+.-]*:|[\\/]{2})/i,S=/^[\\/]{2}/;function C(e,t){return t+e.replace(/\\/g,`/`)}var te=`popstate`;function ne(e){return typeof e==`object`&&!!e&&`pathname`in e&&`search`in e&&`hash`in e&&`state`in e&&`key`in e}function re(e={}){function t(e,t){let{pathname:n=`/`,search:r=``,hash:i=``}=ce(e.location.hash.substring(1));return!n.startsWith(`/`)&&!n.startsWith(`.`)&&(n=`/`+n),oe(``,{pathname:n,search:r,hash:i},t.state&&t.state.usr||null,t.state&&t.state.key||`default`)}function n(e,t){let n=e.document.querySelector(`base`),r=``;if(n&&n.getAttribute(`href`)){let t=e.location.href,n=t.indexOf(`#`);r=n===-1?t:t.slice(0,n)}return r+`#`+(typeof t==`string`?t:se(t))}function r(e,t){T(e.pathname.charAt(0)===`/`,`relative pathnames are not supported in hash history.push(${JSON.stringify(t)})`)}return le(t,n,r,e)}function w(e,t){if(e===!1||e==null)throw Error(t)}function T(e,t){if(!e){typeof console<`u`&&console.warn(t);try{throw Error(t)}catch{}}}function ie(){return Math.random().toString(36).substring(2,10)}function ae(e,t){return{usr:e.state,key:e.key,idx:t,masked:e.mask?{pathname:e.pathname,search:e.search,hash:e.hash}:void 0}}function oe(e,t,n=null,r,i){return{pathname:typeof e==`string`?e:e.pathname,search:``,hash:``,...typeof t==`string`?ce(t):t,state:n,key:t&&t.key||r||ie(),mask:i}}function se({pathname:e=`/`,search:t=``,hash:n=``}){return t&&t!==`?`&&(e+=t.charAt(0)===`?`?t:`?`+t),n&&n!==`#`&&(e+=n.charAt(0)===`#`?n:`#`+n),e}function ce(e){let t={};if(e){let n=e.indexOf(`#`);n>=0&&(t.hash=e.substring(n),e=e.substring(0,n));let r=e.indexOf(`?`);r>=0&&(t.search=e.substring(r),e=e.substring(0,r)),e&&(t.pathname=e)}return t}function le(e,t,n,r={}){let{window:i=document.defaultView,v5Compat:a=!1}=r,o=i.history,s=`POP`,c=null,l=u();l??(l=0,o.replaceState({...o.state,idx:l},``));function u(){return(o.state||{idx:null}).idx}function d(){s=`POP`;let e=u(),t=e==null?null:e-l;l=e,c&&c({action:s,location:h.location,delta:t})}function f(e,t){s=`PUSH`;let r=ne(e)?e:oe(h.location,e,t);n&&n(r,e),l=u()+1;let d=ae(r,l),f=h.createHref(r.mask||r);try{o.pushState(d,``,f)}catch(e){if(e instanceof DOMException&&e.name===`DataCloneError`)throw e;i.location.assign(f)}a&&c&&c({action:s,location:h.location,delta:1})}function p(e,t){s=`REPLACE`;let r=ne(e)?e:oe(h.location,e,t);n&&n(r,e),l=u();let i=ae(r,l),d=h.createHref(r.mask||r);o.replaceState(i,``,d),a&&c&&c({action:s,location:h.location,delta:0})}function m(e){return E(i,e)}let h={get action(){return s},get location(){return e(i,o)},listen(e){if(c)throw Error(`A history only accepts one active listener`);return i.addEventListener(te,d),c=e,()=>{i.removeEventListener(te,d),c=null}},createHref(e){return t(i,e)},createURL:m,encodeLocation(e){let t=m(e);return{pathname:t.pathname,search:t.search,hash:t.hash}},push:f,replace:p,go(e){return o.go(e)}};return h}function E(e,t,n=!1){let r=`http://localhost`;e&&(r=e.location.origin===`null`?e.location.href:e.location.origin),w(r,`No window.location.(origin|href) available to create URL`);let i=typeof t==`string`?t:se(t);return i=i.replace(/ $/,`%20`),!n&&S.test(i)&&(i=r+i),new URL(i,r)}function D(e,t,n=`/`){return ue(e,t,n,!1)}function ue(e,t,n,r,i){let a=Oe((typeof t==`string`?ce(t):t).pathname||`/`,n);if(a==null)return null;let o=i??de(e),s=null,c=De(a);for(let e=0;s==null&&e<o.length;++e)s=Ce(o[e],c,r);return s}function de(e){let t=fe(e);return me(t),t}function fe(e,t=[],n=[],r=``,i=!1){let a=(e,a,o=i,s)=>{let c={relativePath:s===void 0?e.path||``:s,caseSensitive:e.caseSensitive===!0,childrenIndex:a,route:e};if(c.relativePath.startsWith(`/`)){if(!c.relativePath.startsWith(r)&&o)return;w(c.relativePath.startsWith(r),`Absolute route path "${c.relativePath}" nested under path "${r}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`),c.relativePath=c.relativePath.slice(r.length)}let l=Ie([r,c.relativePath]),u=n.concat(c);e.children&&e.children.length>0&&(w(e.index!==!0,`Index routes must not have child routes. Please remove all child routes from route path "${l}".`),fe(e.children,t,u,l,o)),!(e.path==null&&!e.index)&&t.push({path:l,score:xe(l,e.index),routesMeta:u.map((e,t)=>{let[n,r]=Ee(e.relativePath,e.caseSensitive,t===u.length-1);return{...e,matcher:n,compiledParams:r}})})};return e.forEach((e,t)=>{if(e.path===``||!e.path?.includes(`?`))a(e,t);else for(let n of pe(e.path))a(e,t,!0,n)}),t}function pe(e){let t=e.split(`/`);if(t.length===0)return[];let[n,...r]=t,i=n.endsWith(`?`),a=n.replace(/\?$/,``);if(r.length===0)return i?[a,``]:[a];let o=pe(r.join(`/`)),s=[];return s.push(...o.map(e=>e===``?a:[a,e].join(`/`))),i&&s.push(...o),s.map(t=>e.startsWith(`/`)&&t===``?`/`:t)}function me(e){e.sort((e,t)=>e.score===t.score?Se(e.routesMeta.map(e=>e.childrenIndex),t.routesMeta.map(e=>e.childrenIndex)):t.score-e.score)}var O=/^:[\w-]+$/,he=3,ge=2,_e=1,ve=10,ye=-2,be=e=>e===`*`;function xe(e,t){let n=e.split(`/`),r=n.length;return n.some(be)&&(r+=ye),t&&(r+=ge),n.filter(e=>!be(e)).reduce((e,t)=>e+(O.test(t)?he:t===``?_e:ve),r)}function Se(e,t){return e.length===t.length&&e.slice(0,-1).every((e,n)=>e===t[n])?e[e.length-1]-t[t.length-1]:0}function Ce(e,t,n=!1){let{routesMeta:r}=e,i={},a=`/`,o=[];for(let e=0;e<r.length;++e){let s=r[e],c=e===r.length-1,l=a===`/`?t:t.slice(a.length)||`/`,u={path:s.relativePath,caseSensitive:s.caseSensitive,end:c},d=s.matcher&&s.compiledParams?Te(u,l,s.matcher,s.compiledParams):we(u,l),f=s.route;if(!d&&c&&n&&!r[r.length-1].route.index&&(d=we({path:s.relativePath,caseSensitive:s.caseSensitive,end:!1},l)),!d)return null;Object.assign(i,d.params),o.push({params:i,pathname:Ie([a,d.pathname]),pathnameBase:Re(Ie([a,d.pathnameBase])),route:f}),d.pathnameBase!==`/`&&(a=Ie([a,d.pathnameBase]))}return o}function we(e,t){typeof e==`string`&&(e={path:e,caseSensitive:!1,end:!0});let[n,r]=Ee(e.path,e.caseSensitive,e.end);return Te(e,t,n,r)}function Te(e,t,n,r){let i=t.match(n);if(!i)return null;let a=i[0],o=a.replace(/(.)\/+$/,`$1`),s=i.slice(1);return{params:r.reduce((e,{paramName:t,isOptional:n},r)=>{if(t===`*`){let e=s[r]||``;o=a.slice(0,a.length-e.length).replace(/(.)\/+$/,`$1`)}let i=s[r];return e[t]=n&&!i?void 0:(i||``).replace(/%2F/g,`/`),e},{}),pathname:a,pathnameBase:o,pattern:e}}function Ee(e,t=!1,n=!0){T(e===`*`||!e.endsWith(`*`)||e.endsWith(`/*`),`Route path "${e}" will be treated as if it were "${e.replace(/\*$/,`/*`)}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${e.replace(/\*$/,`/*`)}".`);let r=[],i=`^`+e.replace(/\/*\*?$/,``).replace(/^\/*/,`/`).replace(/[\\.*+^${}|()[\]]/g,`\\$&`).replace(/\/:([\w-]+)(\?)?/g,(e,t,n,i,a)=>{if(r.push({paramName:t,isOptional:n!=null}),n){let t=a.charAt(i+e.length);return t&&t!==`/`?`/([^\\/]*)`:`(?:/([^\\/]*))?`}return`/([^\\/]+)`}).replace(/\/([\w-]+)\?(\/|$)/g,`(/$1)?$2`);return e.endsWith(`*`)?(r.push({paramName:`*`}),i+=e===`*`||e===`/*`?`(.*)$`:`(?:\\/(.+)|\\/*)$`):n?i+=`\\/*$`:e!==``&&e!==`/`&&(i+=`(?:(?=\\/|$))`),[new RegExp(i,t?void 0:`i`),r]}function De(e){try{return e.split(`/`).map(e=>decodeURIComponent(e).replace(/\//g,`%2F`)).join(`/`)}catch(t){return T(!1,`The URL path "${e}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${t}).`),e}}function Oe(e,t){if(t===`/`)return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let n=t.endsWith(`/`)?t.length-1:t.length,r=e.charAt(n);return r&&r!==`/`?null:e.slice(n)||`/`}function ke(e,t=`/`){let{pathname:n,search:r=``,hash:i=``}=typeof e==`string`?ce(e):e,a;return n?(n=Fe(n),a=n.startsWith(`/`)?Ae(n.substring(1),`/`):Ae(n,t)):a=t,{pathname:a,search:ze(r),hash:Be(i)}}function Ae(e,t){let n=Le(t).split(`/`);return e.split(`/`).forEach(e=>{e===`..`?n.length>1&&n.pop():e!==`.`&&n.push(e)}),n.length>1?n.join(`/`):`/`}function je(e,t,n,r){return`Cannot include a '${e}' character in a manually specified \`to.${t}\` field [${JSON.stringify(r)}].  Please separate it out to the \`to.${n}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`}function Me(e){return e.filter((e,t)=>t===0||e.route.path&&e.route.path.length>0)}function Ne(e){let t=Me(e);return t.map((e,n)=>n===t.length-1?e.pathname:e.pathnameBase)}function Pe(e,t,n,r=!1){let i;typeof e==`string`?i=ce(e):(i={...e},w(!i.pathname||!i.pathname.includes(`?`),je(`?`,`pathname`,`search`,i)),w(!i.pathname||!i.pathname.includes(`#`),je(`#`,`pathname`,`hash`,i)),w(!i.search||!i.search.includes(`#`),je(`#`,`search`,`hash`,i)));let a=e===``||i.pathname===``,o=a?`/`:i.pathname,s;if(o==null)s=n;else{let e=t.length-1;if(!r&&o.startsWith(`..`)){let t=o.split(`/`);for(;t[0]===`..`;)t.shift(),--e;i.pathname=t.join(`/`)}s=e>=0?t[e]:`/`}let c=ke(i,s),l=o&&o!==`/`&&o.endsWith(`/`),u=(a||o===`.`)&&n.endsWith(`/`);return!c.pathname.endsWith(`/`)&&(l||u)&&(c.pathname+=`/`),c}var Fe=e=>e.replace(/[\\/]{2,}/g,`/`),Ie=e=>Fe(e.join(`/`)),Le=e=>e.replace(/\/+$/,``),Re=e=>Le(e).replace(/^\/*/,`/`),ze=e=>!e||e===`?`?``:e.startsWith(`?`)?e:`?`+e,Be=e=>!e||e===`#`?``:e.startsWith(`#`)?e:`#`+e,Ve=class{constructor(e,t,n,r=!1){this.status=e,this.statusText=t||``,this.internal=r,n instanceof Error?(this.data=n.toString(),this.error=n):this.data=n}};function He(e){return e!=null&&typeof e.status==`number`&&typeof e.statusText==`string`&&typeof e.internal==`boolean`&&`data`in e}function Ue(e){return Ie(e.map(e=>e.route.path).filter(Boolean))||`/`}var We=typeof window<`u`&&window.document!==void 0&&window.document.createElement!==void 0;function Ge(e,t){let n=e;if(typeof n!=`string`||!ee.test(n))return{absoluteURL:void 0,isExternal:!1,to:n};let r=n,i=!1;if(We)try{let e=new URL(window.location.href),r=S.test(n)?new URL(C(n,e.protocol)):new URL(n),a=Oe(r.pathname,t);r.origin===e.origin&&a!=null?n=a+r.search+r.hash:i=!0}catch{T(!1,`<Link to="${n}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`)}return{absoluteURL:r,isExternal:i,to:n}}Object.getOwnPropertyNames(Object.prototype).sort().join(`\0`);var Ke=[`POST`,`PUT`,`PATCH`,`DELETE`];new Set(Ke);var qe=[`GET`,...Ke];new Set(qe);var Je=[`about:`,`blob:`,`chrome:`,`chrome-untrusted:`,`content:`,`data:`,`devtools:`,`file:`,`filesystem:`,`javascript:`];function Ye(e){try{return Je.includes(new URL(e).protocol)}catch{return!1}}var Xe=x.createContext(null);Xe.displayName=`DataRouter`;var Ze=x.createContext(null);Ze.displayName=`DataRouterState`;var Qe=x.createContext(!1);function $e(){return x.useContext(Qe)}var et=x.createContext({isTransitioning:!1});et.displayName=`ViewTransition`;var tt=x.createContext(new Map);tt.displayName=`Fetchers`;var nt=x.createContext(null);nt.displayName=`Await`;var rt=x.createContext(null);rt.displayName=`Navigation`;var it=x.createContext(null);it.displayName=`Location`;var at=x.createContext({outlet:null,matches:[],isDataRoute:!1});at.displayName=`Route`;var ot=x.createContext(null);ot.displayName=`RouteError`;var st=`REACT_ROUTER_ERROR`,ct=`REDIRECT`,lt=`ROUTE_ERROR_RESPONSE`;function ut(e){if(e.startsWith(`${st}:${ct}:{`))try{let t=JSON.parse(e.slice(28));if(typeof t==`object`&&t&&typeof t.status==`number`&&typeof t.statusText==`string`&&typeof t.location==`string`&&typeof t.reloadDocument==`boolean`&&typeof t.replace==`boolean`)return t}catch{}}function dt(e){if(e.startsWith(`${st}:${lt}:{`))try{let t=JSON.parse(e.slice(40));if(typeof t==`object`&&t&&typeof t.status==`number`&&typeof t.statusText==`string`)return new Ve(t.status,t.statusText,t.data)}catch{}}function ft(e,{relative:t}={}){w(pt(),`useHref() may be used only in the context of a <Router> component.`);let{basename:n,navigator:r}=x.useContext(rt),{hash:i,pathname:a,search:o}=xt(e,{relative:t}),s=a;return n!==`/`&&(s=a===`/`?n:Ie([n,a])),r.createHref({pathname:s,search:o,hash:i})}function pt(){return x.useContext(it)!=null}function mt(){return w(pt(),`useLocation() may be used only in the context of a <Router> component.`),x.useContext(it).location}var ht=`You should call navigate() in a React.useEffect(), not when your component is first rendered.`;function k(e){x.useContext(rt).static||x.useLayoutEffect(e)}function gt(){let{isDataRoute:e}=x.useContext(at);return e?Lt():_t()}function _t(){w(pt(),`useNavigate() may be used only in the context of a <Router> component.`);let e=x.useContext(Xe),{basename:t,navigator:n}=x.useContext(rt),{matches:r}=x.useContext(at),{pathname:i}=mt(),a=JSON.stringify(Ne(r)),o=x.useRef(!1);return k(()=>{o.current=!0}),x.useCallback((r,s={})=>{if(T(o.current,ht),!o.current)return;if(typeof r==`number`){n.go(r);return}let c=Pe(r,JSON.parse(a),i,s.relative===`path`);e==null&&t!==`/`&&(c.pathname=c.pathname===`/`?t:Ie([t,c.pathname])),(s.replace?n.replace:n.push)(c,s.state,s)},[t,n,a,i,e])}var vt=x.createContext(null);function yt(e){let t=x.useContext(at).outlet;return x.useMemo(()=>t&&x.createElement(vt.Provider,{value:e},t),[t,e])}function bt(){let{matches:e}=x.useContext(at);return e[e.length-1]?.params??{}}function xt(e,{relative:t}={}){let{matches:n}=x.useContext(at),{pathname:r}=mt(),i=JSON.stringify(Ne(n));return x.useMemo(()=>Pe(e,JSON.parse(i),r,t===`path`),[e,i,r,t])}function St(e,t){return Ct(e,t)}function Ct(e,t,n){w(pt(),`useRoutes() may be used only in the context of a <Router> component.`);let{navigator:r}=x.useContext(rt),{matches:i}=x.useContext(at),a=i[i.length-1],o=a?a.params:{},s=a?a.pathname:`/`,c=a?a.pathnameBase:`/`,l=a&&a.route;{let e=l&&l.path||``;zt(s,!l||e.endsWith(`*`)||e.endsWith(`*?`),`You rendered descendant <Routes> (or called \`useRoutes()\`) at "${s}" (under <Route path="${e}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${e}"> to <Route path="${e===`/`?`*`:`${e}/*`}">.`)}let u=mt(),d;if(t){let e=typeof t==`string`?ce(t):t;w(c===`/`||e.pathname?.startsWith(c),`When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${c}" but pathname "${e.pathname}" was given in the \`location\` prop.`),d=e}else d=u;let f=d.pathname||`/`,p=f;if(c!==`/`){let e=c.replace(/^\//,``).split(`/`);p=`/`+f.replace(/^\//,``).split(`/`).slice(e.length).join(`/`)}let m=n&&n.state.matches.length?n.state.matches.map(e=>Object.assign(e,{route:n.manifest[e.route.id]||e.route})):D(e,{pathname:p});T(l||m!=null,`No routes matched location "${d.pathname}${d.search}${d.hash}" `),T(m==null||m[m.length-1].route.element!==void 0||m[m.length-1].route.Component!==void 0||m[m.length-1].route.lazy!==void 0,`Matched leaf route at location "${d.pathname}${d.search}${d.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`);let h=kt(m&&m.map(e=>Object.assign({},e,{params:Object.assign({},o,e.params),pathname:Ie([c,r.encodeLocation?r.encodeLocation(e.pathname.replace(/%/g,`%25`).replace(/\?/g,`%3F`).replace(/#/g,`%23`)).pathname:e.pathname]),pathnameBase:e.pathnameBase===`/`?c:Ie([c,r.encodeLocation?r.encodeLocation(e.pathnameBase.replace(/%/g,`%25`).replace(/\?/g,`%3F`).replace(/#/g,`%23`)).pathname:e.pathnameBase])})),i,n);return t&&h?x.createElement(it.Provider,{value:{location:{pathname:`/`,search:``,hash:``,state:null,key:`default`,mask:void 0,...d},navigationType:`POP`}},h):h}function wt(){let e=It(),t=He(e)?`${e.status} ${e.statusText}`:e instanceof Error?e.message:JSON.stringify(e),n=e instanceof Error?e.stack:null,r=`rgba(200,200,200, 0.5)`,i={padding:`0.5rem`,backgroundColor:r},a={padding:`2px 4px`,backgroundColor:r},o=null;return console.error(`Error handled by React Router default ErrorBoundary:`,e),o=x.createElement(x.Fragment,null,x.createElement(`p`,null,`💿 Hey developer 👋`),x.createElement(`p`,null,`You can provide a way better UX than this when your app throws errors by providing your own `,x.createElement(`code`,{style:a},`ErrorBoundary`),` or`,` `,x.createElement(`code`,{style:a},`errorElement`),` prop on your route.`)),x.createElement(x.Fragment,null,x.createElement(`h2`,null,`Unexpected Application Error!`),x.createElement(`h3`,{style:{fontStyle:`italic`}},t),n?x.createElement(`pre`,{style:i},n):null,o)}var Tt=x.createElement(wt,null),Et=class extends x.Component{constructor(e){super(e),this.state={location:e.location,revalidation:e.revalidation,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,t){return t.location!==e.location||t.revalidation!==`idle`&&e.revalidation===`idle`?{error:e.error,location:e.location,revalidation:e.revalidation}:{error:e.error===void 0?t.error:e.error,location:t.location,revalidation:e.revalidation||t.revalidation}}componentDidCatch(e,t){this.props.onError?this.props.onError(e,t):console.error(`React Router caught the following error during render`,e)}render(){let e=this.state.error;if(this.context&&typeof e==`object`&&e&&`digest`in e&&typeof e.digest==`string`){let t=dt(e.digest);t&&(e=t)}let t=e===void 0?this.props.children:x.createElement(at.Provider,{value:this.props.routeContext},x.createElement(ot.Provider,{value:e,children:this.props.component}));return this.context?x.createElement(A,{error:e},t):t}};Et.contextType=Qe;var Dt=new WeakMap;function A({children:e,error:t}){let{basename:n}=x.useContext(rt);if(typeof t==`object`&&t&&`digest`in t&&typeof t.digest==`string`){let e=ut(t.digest);if(e){let r=Dt.get(t);if(r)throw r;let i=Ge(e.location,n),a=i.absoluteURL||i.to;if(Ye(a))throw Error(`Invalid redirect location`);if(We&&!Dt.get(t)){if(i.isExternal||e.reloadDocument)window.location.href=a;else{let n=Promise.resolve().then(()=>window.__reactRouterDataRouter.navigate(i.to,{replace:e.replace}));throw Dt.set(t,n),n}}return x.createElement(`meta`,{httpEquiv:`refresh`,content:`0;url=${a}`})}}return e}function Ot({routeContext:e,match:t,children:n}){let r=x.useContext(Xe);return r&&r.static&&r.staticContext&&(t.route.errorElement||t.route.ErrorBoundary)&&(r.staticContext._deepestRenderedBoundaryId=t.route.id),x.createElement(at.Provider,{value:e},n)}function kt(e,t=[],n){let r=n?.state;if(e==null){if(!r)return null;if(r.errors)e=r.matches;else if(t.length===0&&!r.initialized&&r.matches.length>0)e=r.matches;else return null}let i=e,a=r?.errors;if(a!=null){let e=i.findIndex(e=>e.route.id&&a?.[e.route.id]!==void 0);w(e>=0,`Could not find a matching route for errors on route IDs: ${Object.keys(a).join(`,`)}`),i=i.slice(0,Math.min(i.length,e+1))}let o=!1,s=-1;if(n&&r){o=r.renderFallback;for(let e=0;e<i.length;e++){let t=i[e];if((t.route.HydrateFallback||t.route.hydrateFallbackElement)&&(s=e),t.route.id){let{loaderData:e,errors:a}=r,c=t.route.loader&&!e.hasOwnProperty(t.route.id)&&(!a||a[t.route.id]===void 0);if(t.route.lazy||c){n.isStatic&&(o=!0),i=s>=0?i.slice(0,s+1):[i[0]];break}}}}let c=n?.onError,l=r&&c?(e,t)=>{c(e,{location:r.location,params:r.matches?.[0]?.params??{},pattern:Ue(r.matches),errorInfo:t})}:void 0;return i.reduceRight((e,n,c)=>{let u,d=!1,f=null,p=null;r&&(u=a&&n.route.id?a[n.route.id]:void 0,f=n.route.errorElement||Tt,o&&(s<0&&c===0?(zt(`route-fallback`,!1,"No `HydrateFallback` element provided to render during initial hydration"),d=!0,p=null):s===c&&(d=!0,p=n.route.hydrateFallbackElement||null)));let m=t.concat(i.slice(0,c+1)),h=()=>{let t;return t=u?f:d?p:n.route.Component?x.createElement(n.route.Component,null):n.route.element?n.route.element:e,x.createElement(Ot,{match:n,routeContext:{outlet:e,matches:m,isDataRoute:r!=null},children:t})};return r&&(n.route.ErrorBoundary||n.route.errorElement||c===0)?x.createElement(Et,{location:r.location,revalidation:r.revalidation,component:f,error:u,children:h(),routeContext:{outlet:null,matches:m,isDataRoute:!0},onError:l}):h()},null)}function At(e){return`${e} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function jt(e){let t=x.useContext(Xe);return w(t,At(e)),t}function Mt(e){let t=x.useContext(Ze);return w(t,At(e)),t}function Nt(e){let t=x.useContext(at);return w(t,At(e)),t}function Pt(e){let t=Nt(e),n=t.matches[t.matches.length-1];return w(n.route.id,`${e} can only be used on routes that contain a unique "id"`),n.route.id}function Ft(){return Pt(`useRouteId`)}function It(){let e=x.useContext(ot),t=Mt(`useRouteError`),n=Pt(`useRouteError`);return e===void 0?t.errors?.[n]:e}function Lt(){let{router:e}=jt(`useNavigate`),t=Pt(`useNavigate`),n=x.useRef(!1);return k(()=>{n.current=!0}),x.useCallback(async(r,i={})=>{T(n.current,ht),n.current&&(typeof r==`number`?await e.navigate(r):await e.navigate(r,{fromRouteId:t,...i}))},[e,t])}var Rt={};function zt(e,t,n){!t&&!Rt[e]&&(Rt[e]=!0,T(!1,n))}x.memo(Bt);function Bt({routes:e,manifest:t,future:n,state:r,isStatic:i,onError:a}){return Ct(e,void 0,{manifest:t,state:r,isStatic:i,onError:a,future:n})}function Vt({to:e,replace:t,state:n,relative:r}){w(pt(),`<Navigate> may be used only in the context of a <Router> component.`);let{static:i}=x.useContext(rt);T(!i,`<Navigate> must not be used on the initial render in a <StaticRouter>. This is a no-op, but you should modify your code so the <Navigate> is only ever rendered in response to some user interaction or state change.`);let{matches:a}=x.useContext(at),{pathname:o}=mt(),s=gt(),c=Pe(e,Ne(a),o,r===`path`),l=JSON.stringify(c);return x.useEffect(()=>{s(JSON.parse(l),{replace:t,state:n,relative:r})},[s,l,r,t,n]),null}function Ht(e){return yt(e.context)}function Ut(e){w(!1,`A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.`)}function Wt({basename:e=`/`,children:t=null,location:n,navigationType:r=`POP`,navigator:i,static:a=!1,useTransitions:o}){w(!pt(),`You cannot render a <Router> inside another <Router>. You should never have more than one in your app.`);let s=e.replace(/^\/*/,`/`),c=x.useMemo(()=>({basename:s,navigator:i,static:a,useTransitions:o,future:{}}),[s,i,a,o]);typeof n==`string`&&(n=ce(n));let{pathname:l=`/`,search:u=``,hash:d=``,state:f=null,key:p=`default`,mask:m}=n,h=x.useMemo(()=>{let e=Oe(l,s);return e==null?null:{location:{pathname:e,search:u,hash:d,state:f,key:p,mask:m},navigationType:r}},[s,l,u,d,f,p,r,m]);return T(h!=null,`<Router basename="${s}"> is not able to match the URL "${l}${u}${d}" because it does not start with the basename, so the <Router> won't render anything.`),h==null?null:x.createElement(rt.Provider,{value:c},x.createElement(it.Provider,{children:t,value:h}))}function Gt({children:e,location:t}){return St(Kt(e),t)}x.Component;function Kt(e,t=[]){let n=[];return x.Children.forEach(e,(e,r)=>{if(!x.isValidElement(e))return;let i=[...t,r];if(e.type===x.Fragment){n.push.apply(n,Kt(e.props.children,i));return}w(e.type===Ut,`[${typeof e.type==`string`?e.type:e.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`),w(!e.props.index||!e.props.children,`An index route cannot have child routes.`);let a={id:e.props.id||i.join(`-`),caseSensitive:e.props.caseSensitive,element:e.props.element,Component:e.props.Component,index:e.props.index,path:e.props.path,middleware:e.props.middleware,loader:e.props.loader,action:e.props.action,hydrateFallbackElement:e.props.hydrateFallbackElement,HydrateFallback:e.props.HydrateFallback,errorElement:e.props.errorElement,ErrorBoundary:e.props.ErrorBoundary,hasErrorBoundary:e.props.hasErrorBoundary===!0||e.props.ErrorBoundary!=null||e.props.errorElement!=null,shouldRevalidate:e.props.shouldRevalidate,handle:e.props.handle,lazy:e.props.lazy};e.props.children&&(a.children=Kt(e.props.children,i)),n.push(a)}),n}var qt=`get`,Jt=`application/x-www-form-urlencoded`;function Yt(e){return typeof HTMLElement<`u`&&e instanceof HTMLElement}function Xt(e){return Yt(e)&&e.tagName.toLowerCase()===`button`}function Zt(e){return Yt(e)&&e.tagName.toLowerCase()===`form`}function Qt(e){return Yt(e)&&e.tagName.toLowerCase()===`input`}function $t(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}function en(e,t){return e.button===0&&(!t||t===`_self`)&&!$t(e)}var tn=null;function nn(){if(tn===null)try{new FormData(document.createElement(`form`),0),tn=!1}catch{tn=!0}return tn}var rn=new Set([`application/x-www-form-urlencoded`,`multipart/form-data`,`text/plain`]);function an(e){return e!=null&&!rn.has(e)?(T(!1,`"${e}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${Jt}"`),null):e}function on(e,t){let n,r,i,a,o;if(Zt(e)){let o=e.getAttribute(`action`);r=o?Oe(o,t):null,n=e.getAttribute(`method`)||qt,i=an(e.getAttribute(`enctype`))||Jt,a=new FormData(e)}else if(Xt(e)||Qt(e)&&(e.type===`submit`||e.type===`image`)){let o=e.form;if(o==null)throw Error(`Cannot submit a <button> or <input type="submit"> without a <form>`);let s=e.getAttribute(`formaction`)||o.getAttribute(`action`);if(r=s?Oe(s,t):null,n=e.getAttribute(`formmethod`)||o.getAttribute(`method`)||qt,i=an(e.getAttribute(`formenctype`))||an(o.getAttribute(`enctype`))||Jt,a=new FormData(o,e),!nn()){let{name:t,type:n,value:r}=e;if(n===`image`){let e=t?`${t}.`:``;a.append(`${e}x`,`0`),a.append(`${e}y`,`0`)}else t&&a.append(t,r)}}else if(Yt(e))throw Error(`Cannot submit element that is not <form>, <button>, or <input type="submit|image">`);else n=qt,r=null,i=Jt,o=e;return a&&i===`text/plain`&&(o=a,a=void 0),{action:r,method:n.toLowerCase(),encType:i,formData:a,body:o}}Object.getOwnPropertyNames(Object.prototype).sort().join(`\0`);function sn(e,t){if(e===!1||e==null)throw Error(t)}function cn(e,t,n,r){let i=typeof e==`string`?new URL(e,typeof window>`u`?`server://singlefetch/`:window.location.origin):e;return i.pathname=n?i.pathname.endsWith(`/`)?`${i.pathname}_.${r}`:`${i.pathname}.${r}`:i.pathname===`/`?`_root.${r}`:t&&Oe(i.pathname,t)===`/`?`${Le(t)}/_root.${r}`:`${Le(i.pathname)}.${r}`,i}async function ln(e,t){if(e.id in t)return t[e.id];try{let n=await b(()=>import(e.module),[],import.meta.url);return t[e.id]=n,n}catch(t){return console.error(`Error loading route module \`${e.module}\`, reloading page...`),console.error(t),window.__reactRouterContext&&window.__reactRouterContext.isSpaMode,window.location.reload(),new Promise(()=>{})}}function un(e){return e!=null&&typeof e.page==`string`}function dn(e){return e==null?!1:e.href==null?e.rel===`preload`&&typeof e.imageSrcSet==`string`&&typeof e.imageSizes==`string`:typeof e.rel==`string`&&typeof e.href==`string`}async function fn(e,t,n){return _n((await Promise.all(e.map(async e=>{let r=t.routes[e.route.id];if(r){let e=await ln(r,n);return e.links?e.links():[]}return[]}))).flat(1).filter(dn).filter(e=>e.rel===`stylesheet`||e.rel===`preload`).map(e=>e.rel===`stylesheet`?{...e,rel:`prefetch`,as:`style`}:{...e,rel:`prefetch`}))}function pn(e,t,n,r,i,a){let o=(e,t)=>!n[t]||e.route.id!==n[t].route.id,s=(e,t)=>n[t].pathname!==e.pathname||n[t].route.path?.endsWith(`*`)&&n[t].params[`*`]!==e.params[`*`];return a===`assets`?t.filter((e,t)=>o(e,t)||s(e,t)):a===`data`?t.filter((t,a)=>{let c=r.routes[t.route.id];if(!c||!c.hasLoader)return!1;if(o(t,a)||s(t,a))return!0;if(t.route.shouldRevalidate){let r=t.route.shouldRevalidate({currentUrl:new URL(i.pathname+i.search+i.hash,window.origin),currentParams:n[0]?.params||{},nextUrl:new URL(e,window.origin),nextParams:t.params,defaultShouldRevalidate:!0});if(typeof r==`boolean`)return r}return!0}):[]}function mn(e,t,{includeHydrateFallback:n}={}){return hn(e.map(e=>{let r=t.routes[e.route.id];if(!r)return[];let i=[r.module];return r.clientActionModule&&(i=i.concat(r.clientActionModule)),r.clientLoaderModule&&(i=i.concat(r.clientLoaderModule)),n&&r.hydrateFallbackModule&&(i=i.concat(r.hydrateFallbackModule)),r.imports&&(i=i.concat(r.imports)),i}).flat(1))}function hn(e){return[...new Set(e)]}function gn(e){let t={},n=Object.keys(e).sort();for(let r of n)t[r]=e[r];return t}function _n(e,t){let n=new Set,r=new Set(t);return e.reduce((e,i)=>{if(t&&!un(i)&&i.as===`script`&&i.href&&r.has(i.href))return e;let a=JSON.stringify(gn(i));return n.has(a)||(n.add(a),e.push({key:a,link:i})),e},[])}function vn(){let e=x.useContext(Xe);return sn(e,`You must render this element inside a <DataRouterContext.Provider> element`),e}function yn(){let e=x.useContext(Ze);return sn(e,`You must render this element inside a <DataRouterStateContext.Provider> element`),e}var bn=x.createContext(void 0);bn.displayName=`FrameworkContext`;function xn(){let e=x.useContext(bn);return sn(e,`You must render this element inside a <HydratedRouter> element`),e}function Sn(e,t){let n=x.useContext(bn),[r,i]=x.useState(!1),[a,o]=x.useState(!1),{onFocus:s,onBlur:c,onMouseEnter:l,onMouseLeave:u,onTouchStart:d}=t,f=x.useRef(null);x.useEffect(()=>{if(e===`render`&&o(!0),e===`viewport`){let e=new IntersectionObserver(e=>{e.forEach(e=>{o(e.isIntersecting)})},{threshold:.5});return f.current&&e.observe(f.current),()=>{e.disconnect()}}},[e]),x.useEffect(()=>{if(r){let e=setTimeout(()=>{o(!0)},100);return()=>{clearTimeout(e)}}},[r]);let p=()=>{i(!0)},m=()=>{i(!1),o(!1)};return n?e===`intent`?[a,f,{onFocus:Cn(s,p),onBlur:Cn(c,m),onMouseEnter:Cn(l,p),onMouseLeave:Cn(u,m),onTouchStart:Cn(d,p)}]:[a,f,{}]:[!1,f,{}]}function Cn(e,t){return n=>{e&&e(n),n.defaultPrevented||t(n)}}function wn({page:e,...t}){let n=$e(),{nonce:r}=xn(),{router:i}=vn(),a=x.useMemo(()=>D(i.routes,e,i.basename),[i.routes,e,i.basename]);return a?(t.nonce==null&&r&&(t={...t,nonce:r}),n?x.createElement(En,{page:e,matches:a,...t}):x.createElement(Dn,{page:e,matches:a,...t})):null}function Tn(e){let{manifest:t,routeModules:n}=xn(),[r,i]=x.useState([]);return x.useEffect(()=>{let r=!1;return fn(e,t,n).then(e=>{r||i(e)}),()=>{r=!0}},[e,t,n]),r}function En({page:e,matches:t,...n}){let r=mt(),{future:i}=xn(),{basename:a}=vn(),o=x.useMemo(()=>{if(e===r.pathname+r.search+r.hash)return[];let n=cn(e,a,i.v8_trailingSlashAwareDataRequests,`rsc`),o=!1,s=[];for(let e of t)typeof e.route.shouldRevalidate==`function`?o=!0:s.push(e.route.id);return o&&s.length>0&&n.searchParams.set(`_routes`,s.join(`,`)),[n.pathname+n.search]},[a,i.v8_trailingSlashAwareDataRequests,e,r,t]);return x.createElement(x.Fragment,null,o.map(e=>x.createElement(`link`,{key:e,rel:`prefetch`,as:`fetch`,href:e,...n})))}function Dn({page:e,matches:t,...n}){let r=mt(),{future:i,manifest:a,routeModules:o}=xn(),{basename:s}=vn(),{loaderData:c,matches:l}=yn(),u=x.useMemo(()=>pn(e,t,l,a,r,`data`),[e,t,l,a,r]),d=x.useMemo(()=>pn(e,t,l,a,r,`assets`),[e,t,l,a,r]),f=x.useMemo(()=>{if(e===r.pathname+r.search+r.hash)return[];let n=new Set,l=!1;if(t.forEach(e=>{let t=a.routes[e.route.id];!t||!t.hasLoader||(!u.some(t=>t.route.id===e.route.id)&&e.route.id in c&&o[e.route.id]?.shouldRevalidate||t.hasClientLoader?l=!0:n.add(e.route.id))}),n.size===0)return[];let d=cn(e,s,i.v8_trailingSlashAwareDataRequests,`data`);return l&&n.size>0&&d.searchParams.set(`_routes`,t.filter(e=>n.has(e.route.id)).map(e=>e.route.id).join(`,`)),[d.pathname+d.search]},[s,i.v8_trailingSlashAwareDataRequests,c,r,a,u,t,e,o]),p=x.useMemo(()=>mn(d,a),[d,a]),m=Tn(d);return x.createElement(x.Fragment,null,f.map(e=>x.createElement(`link`,{key:e,rel:`prefetch`,as:`fetch`,href:e,...n})),p.map(e=>x.createElement(`link`,{key:e,rel:`modulepreload`,href:e,...n})),m.map(({key:e,link:t})=>x.createElement(`link`,{key:e,nonce:n.nonce,...t,crossOrigin:t.crossOrigin??n.crossOrigin})))}function On(...e){return t=>{e.forEach(e=>{typeof e==`function`?e(t):e!=null&&(e.current=t)})}}x.Component;var kn=typeof window<`u`&&window.document!==void 0&&window.document.createElement!==void 0;try{kn&&(window.__reactRouterVersion=`7.18.2`)}catch{}function An({basename:e,children:t,useTransitions:n,window:r}){let i=x.useRef();i.current??=re({window:r,v5Compat:!0});let a=i.current,[o,s]=x.useState({action:a.action,location:a.location}),c=x.useCallback(e=>{n===!1?s(e):x.startTransition(()=>s(e))},[n]);return x.useLayoutEffect(()=>a.listen(c),[a,c]),x.createElement(Wt,{basename:e,children:t,location:o.location,navigationType:o.action,navigator:a,useTransitions:n})}var jn=x.forwardRef(function({onClick:e,discover:t=`render`,prefetch:n=`none`,relative:r,reloadDocument:i,replace:a,mask:o,state:s,target:c,to:l,preventScrollReset:u,viewTransition:d,defaultShouldRevalidate:f,...p},m){let{basename:h,navigator:g,useTransitions:_}=x.useContext(rt),v=typeof l==`string`&&ee.test(l),y=Ge(l,h);l=y.to;let b=ft(l,{relative:r}),S=mt(),C=null;if(o){let e=Pe(o,[],S.mask?S.mask.pathname:`/`,!0);h!==`/`&&(e.pathname=e.pathname===`/`?h:Ie([h,e.pathname])),C=g.createHref(e)}let[te,ne,re]=Sn(n,p),w=In(l,{replace:a,mask:o,state:s,target:c,preventScrollReset:u,relative:r,viewTransition:d,defaultShouldRevalidate:f,useTransitions:_});function T(t){e&&e(t),t.defaultPrevented||w(t)}let ie=!(y.isExternal||i),ae=x.createElement(`a`,{...p,...re,href:(ie?C:void 0)||y.absoluteURL||b,onClick:ie?T:e,ref:On(m,ne),target:c,"data-discover":!v&&t===`render`?`true`:void 0});return te&&!v?x.createElement(x.Fragment,null,ae,x.createElement(wn,{page:b})):ae});jn.displayName=`Link`;var Mn=x.forwardRef(function({"aria-current":e=`page`,caseSensitive:t=!1,className:n=``,end:r=!1,style:i,to:a,viewTransition:o,children:s,...c},l){let u=xt(a,{relative:c.relative}),d=mt(),f=x.useContext(Ze),{navigator:p,basename:m}=x.useContext(rt),h=f!=null&&Vn(u)&&o===!0,g=p.encodeLocation?p.encodeLocation(u).pathname:u.pathname,_=d.pathname,v=f&&f.navigation&&f.navigation.location?f.navigation.location.pathname:null;t||(_=_.toLowerCase(),v=v?v.toLowerCase():null,g=g.toLowerCase()),v&&m&&(v=Oe(v,m)||v);let y=g!==`/`&&g.endsWith(`/`)?g.length-1:g.length,b=_===g||!r&&_.startsWith(g)&&_.charAt(y)===`/`,ee=v!=null&&(v===g||!r&&v.startsWith(g)&&v.charAt(g.length)===`/`),S={isActive:b,isPending:ee,isTransitioning:h},C=b?e:void 0,te;te=typeof n==`function`?n(S):[n,b?`active`:null,ee?`pending`:null,h?`transitioning`:null].filter(Boolean).join(` `);let ne=typeof i==`function`?i(S):i;return x.createElement(jn,{...c,"aria-current":C,className:te,ref:l,style:ne,to:a,viewTransition:o},typeof s==`function`?s(S):s)});Mn.displayName=`NavLink`;var Nn=x.forwardRef(({discover:e=`render`,fetcherKey:t,navigate:n,reloadDocument:r,replace:i,state:a,method:o=qt,action:s,onSubmit:c,relative:l,preventScrollReset:u,viewTransition:d,defaultShouldRevalidate:f,...p},m)=>{let{useTransitions:h}=x.useContext(rt),g=zn(),_=Bn(s,{relative:l}),v=o.toLowerCase()===`get`?`get`:`post`,y=typeof s==`string`&&ee.test(s);return x.createElement(`form`,{ref:m,method:v,action:_,onSubmit:r?c:e=>{if(c&&c(e),e.defaultPrevented)return;e.preventDefault();let r=e.nativeEvent.submitter,s=r?.getAttribute(`formmethod`)||o,p=()=>g(r||e.currentTarget,{fetcherKey:t,method:s,navigate:n,replace:i,state:a,relative:l,preventScrollReset:u,viewTransition:d,defaultShouldRevalidate:f});h&&n!==!1?x.startTransition(()=>p()):p()},...p,"data-discover":!y&&e===`render`?`true`:void 0})});Nn.displayName=`Form`;function Pn(e){return`${e} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function Fn(e){let t=x.useContext(Xe);return w(t,Pn(e)),t}function In(e,{target:t,replace:n,mask:r,state:i,preventScrollReset:a,relative:o,viewTransition:s,defaultShouldRevalidate:c,useTransitions:l}={}){let u=gt(),d=mt(),f=xt(e,{relative:o});return x.useCallback(p=>{if(en(p,t)){p.preventDefault();let t=n===void 0?se(d)===se(f):n,m=()=>u(e,{replace:t,mask:r,state:i,preventScrollReset:a,relative:o,viewTransition:s,defaultShouldRevalidate:c});l?x.startTransition(()=>m()):m()}},[d,u,f,n,r,i,t,e,a,o,s,c,l])}var Ln=0,Rn=()=>`__${String(++Ln)}__`;function zn(){let{router:e}=Fn(`useSubmit`),{basename:t}=x.useContext(rt),n=Ft(),r=e.fetch,i=e.navigate;return x.useCallback(async(e,a={})=>{let{action:o,method:s,encType:c,formData:l,body:u}=on(e,t);if(a.navigate===!1){let e=a.fetcherKey||Rn();await r(e,n,a.action||o,{defaultShouldRevalidate:a.defaultShouldRevalidate,preventScrollReset:a.preventScrollReset,formData:l,body:u,formMethod:a.method||s,formEncType:a.encType||c,flushSync:a.flushSync})}else await i(a.action||o,{defaultShouldRevalidate:a.defaultShouldRevalidate,preventScrollReset:a.preventScrollReset,formData:l,body:u,formMethod:a.method||s,formEncType:a.encType||c,replace:a.replace,state:a.state,fromRouteId:n,flushSync:a.flushSync,viewTransition:a.viewTransition})},[r,i,t,n])}function Bn(e,{relative:t}={}){let{basename:n}=x.useContext(rt),r=x.useContext(at);w(r,`useFormAction must be used inside a RouteContext`);let[i]=r.matches.slice(-1),a={...xt(e||`.`,{relative:t})},o=mt();if(e==null){a.search=o.search;let e=new URLSearchParams(a.search),t=e.getAll(`index`);if(t.some(e=>e===``)){e.delete(`index`),t.filter(e=>e).forEach(t=>e.append(`index`,t));let n=e.toString();a.search=n?`?${n}`:``}}return(!e||e===`.`)&&i.route.index&&(a.search=a.search?a.search.replace(/^\?/,`?index&`):`?index`),n!==`/`&&(a.pathname=a.pathname===`/`?n:Ie([n,a.pathname])),se(a)}function Vn(e,{relative:t}={}){let n=x.useContext(et);w(n!=null,"`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");let{basename:r}=Fn(`useViewTransitionState`),i=xt(e,{relative:t});if(!n.isTransitioning)return!1;let a=Oe(n.currentLocation.pathname,r)||n.currentLocation.pathname,o=Oe(n.nextLocation.pathname,r)||n.nextLocation.pathname;return we(i.pathname,o)!=null||we(i.pathname,a)!=null}var Hn=g(),Un=e=>{let t,n=new Set,r=(e,r)=>{let i=typeof e==`function`?e(t):e;if(!Object.is(i,t)){let e=t;t=r??(typeof i!=`object`||!i)?i:Object.assign({},t,i),n.forEach(n=>n(t,e))}},i=()=>t,a={setState:r,getState:i,getInitialState:()=>o,subscribe:e=>(n.add(e),()=>n.delete(e))},o=t=e(r,i,a);return a},Wn=(e=>e?Un(e):Un),Gn=e=>e;function Kn(e,t=Gn){let n=x.useSyncExternalStore(e.subscribe,x.useCallback(()=>t(e.getState()),[e,t]),x.useCallback(()=>t(e.getInitialState()),[e,t]));return x.useDebugValue(n),n}var qn=e=>{let t=Wn(e),n=e=>Kn(t,e);return Object.assign(n,t),n},Jn=(e=>e?qn(e):qn);function Yn(e,t){let n;try{n=e()}catch{return}return{getItem:e=>{let r=e=>e===null?null:JSON.parse(e,t?.reviver),i=n.getItem(e)??null;return i instanceof Promise?i.then(r):r(i)},setItem:(e,r)=>n.setItem(e,JSON.stringify(r,t?.replacer)),removeItem:e=>n.removeItem(e)}}var Xn=e=>t=>{try{let n=e(t);return n instanceof Promise?n:{then(e){return Xn(e)(n)},catch(e){return this}}}catch(e){return{then(e){return this},catch(t){return Xn(t)(e)}}}},Zn=(e,t)=>(n,r,i)=>{let a={storage:Yn(()=>window.localStorage),partialize:e=>e,version:0,merge:(e,t)=>({...t,...e}),...t},o=!1,s=0,c=new Set,l=new Set,u=a.storage;if(!u)return e((...e)=>{console.warn(`[zustand persist middleware] Unable to update item '${a.name}', the given storage is currently unavailable.`),n(...e)},r,i);let d=()=>{let e=a.partialize({...r()});return u.setItem(a.name,{state:e,version:a.version})},f=i.setState;i.setState=(e,t)=>(f(e,t),d());let p=e((...e)=>(n(...e),d()),r,i);i.getInitialState=()=>p;let m,h=()=>{if(!u)return;let e=++s;o=!1,c.forEach(e=>e(r()??p));let t=a.onRehydrateStorage?.call(a,r()??p)||void 0;return Xn(u.getItem.bind(u))(a.name).then(e=>{if(e){if(typeof e.version==`number`&&e.version!==a.version){if(a.migrate){let t=a.migrate(e.state,e.version);return t instanceof Promise?t.then(e=>[!0,e]):[!0,t]}console.error(`State loaded from storage couldn't be migrated since no migrate function was provided`)}else return[!1,e.state]}return[!1,void 0]}).then(t=>{if(e!==s)return;let[i,o]=t;if(m=a.merge(o,r()??p),n(m,!0),i)return d()}).then(()=>{e===s&&(t?.(r(),void 0),m=r(),o=!0,l.forEach(e=>e(m)))}).catch(n=>{e===s&&t?.(void 0,n)})};return i.persist={setOptions:e=>{a={...a,...e},e.storage&&(u=e.storage)},clearStorage:()=>{++s,u?.removeItem(a.name)},getOptions:()=>a,rehydrate:()=>h(),hasHydrated:()=>o,onHydrate:e=>(c.add(e),()=>{c.delete(e)}),onFinishHydration:e=>(l.add(e),()=>{l.delete(e)})},a.skipHydration||h(),m||p},Qn=Jn()(Zn(e=>({theme:`dark`,setTheme:t=>e({theme:t}),fontScale:1,setFontScale:t=>e({fontScale:Math.min(1.6,Math.max(.8,t))}),lastReadBible:null,setLastReadBible:t=>e({lastReadBible:t})}),{name:`adba-app-state`})),$n=o((e=>{var t=Symbol.for(`react.transitional.element`),n=Symbol.for(`react.fragment`);function r(e,n,r){var i=null;if(r!==void 0&&(i=``+r),n.key!==void 0&&(i=``+n.key),`key`in n)for(var a in r={},n)a!==`key`&&(r[a]=n[a]);else r=n;return n=r.ref,{$$typeof:t,type:e,key:i,ref:n===void 0?null:n,props:r}}e.Fragment=n,e.jsx=r,e.jsxs=r})),j=o(((e,t)=>{t.exports=$n()}))();function er(){let e=Qn(e=>e.lastReadBible),t=[{to:`/`,label:`Pastas`,icon:`🗂️`,end:!0},{to:e?`/biblia/${e.book}/${e.chapter}`:`/biblia`,label:`Bíblia`,icon:`📖`,match:`/biblia`},{to:`/favoritos`,label:`Favoritos`,icon:`⭐`},{to:`/configuracoes`,label:`Ajustes`,icon:`⚙️`}];return(0,j.jsx)(`nav`,{className:`safe-bottom fixed bottom-0 left-0 right-0 z-40 border-t border-border/60 bg-bg`,children:(0,j.jsx)(`div`,{className:`mx-auto grid max-w-md grid-cols-4`,children:t.map(e=>(0,j.jsxs)(Mn,{to:e.to,end:e.end,className:({isActive:t})=>`flex flex-col items-center gap-0.5 py-2.5 text-[11px] font-medium transition ${(e.match?location.pathname.startsWith(e.match):t)?`text-primary`:`text-text-muted`}`,children:[(0,j.jsx)(`span`,{className:`text-lg`,"aria-hidden":!0,children:e.icon}),e.label]},e.match??e.to))})})}function tr(){return(0,j.jsxs)(`div`,{className:`mx-auto min-h-full max-w-md bg-bg pb-20`,children:[(0,j.jsx)(Ht,{}),(0,j.jsx)(er,{})]})}function nr(){let e=Qn(e=>e.theme);(0,x.useEffect)(()=>{let t=document.documentElement,n=e=>t.setAttribute(`data-theme`,e);if(e===`system`){let e=window.matchMedia(`(prefers-color-scheme: dark)`);n(e.matches?`dark`:`light`);let t=e=>n(e.matches?`dark`:`light`);return e.addEventListener(`change`,t),()=>e.removeEventListener(`change`,t)}n(e)},[e])}function rr({size:e=36}){return(0,j.jsxs)(`svg`,{width:e,height:e,viewBox:`0 0 100 100`,fill:`none`,xmlns:`http://www.w3.org/2000/svg`,"aria-hidden":!0,children:[(0,j.jsx)(`rect`,{width:`100`,height:`100`,rx:`20`,fill:`#12131f`}),(0,j.jsx)(`path`,{d:`M50 20c8 10 14 16 14 26a14 14 0 1 1-28 0c0-6 3-10 6-14-1 6 1 9 4 11-2-9 1-16 4-23Z`,fill:`url(#flame)`}),(0,j.jsx)(`path`,{d:`M30 55h40l-4 20-16 8-16-8-4-20Z`,stroke:`#9a9ba6`,strokeWidth:`3`,strokeLinejoin:`round`,fill:`none`}),(0,j.jsx)(`defs`,{children:(0,j.jsxs)(`linearGradient`,{id:`flame`,x1:`50`,y1:`20`,x2:`50`,y2:`60`,gradientUnits:`userSpaceOnUse`,children:[(0,j.jsx)(`stop`,{stopColor:`#e2536a`}),(0,j.jsx)(`stop`,{offset:`1`,stopColor:`#8b1e2b`})]})})]})}function ir({title:e=`Minha Igreja`,subtitle:t,showBack:n,onBack:r}){return(0,j.jsx)(`header`,{className:`sticky top-0 z-30 bg-bg px-4 pb-2 pt-4`,children:(0,j.jsxs)(`div`,{className:`mx-auto flex max-w-md items-center gap-3`,children:[n?(0,j.jsx)(`button`,{onClick:r,"aria-label":`Voltar`,className:`flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-surface text-text active:scale-95`,children:`←`}):(0,j.jsx)(rr,{size:34}),(0,j.jsxs)(`div`,{className:`min-w-0 flex-1`,children:[(0,j.jsx)(`p`,{className:`truncate text-xl font-bold leading-tight text-text`,children:e}),t&&(0,j.jsx)(`p`,{className:`truncate text-xs text-text-muted`,children:t})]})]})})}var ar={harpa:[],preciosas:[{id:`p1`,hymnal:`preciosas`,number:1,title:`Mãos de Jeová`,lyrics:`Não há quem possa escapar
De Quem tem todo o poder
De Quem no momento tudo faz
acontecer
Ele foi Quem fez o Sol
O universo, a amplidão
As estrelas foram feitas pela Sua mão
Ele colocou limite
Até onde vem o mar
Daquele lugar não passa,
permanece lá
Suas ondas emboladas
Batem e voltam dali
Para obedecer aquele que lhe
fez surgir

**Não há quem consiga dEle se livrar
Seus olhos estão em todo lugar
A Ele todos os joelhos têm que se
dobrar
Nem a Terra pode a Ele suportar
Derrete, balança, muda de lugar
Não há quem possa resistir
à mão de Jeová**

A Ele não se suborna
Não respeita posição
Não se compra com dinheiro por
uma razão
Ele é o Dono da prata
Dono do ouro também
Ninguém pode sequestrá-lo,
não teme a ninguém
O Seu trono é muito alto
Ninguém pode subir lá
Há alguém que quis tomá-lo
já desceu de lá
E jamais terá remédio
Para sua transgressão
Ai de quem ofende a Deus e cai em
Sua mão!`},{id:`p2`,hymnal:`preciosas`,number:2,title:`Fica Jesus`,lyrics:`É uma honra ter Jesus em nosso meio
Foi convidado e o primeiro a chegar
Sua presença é tão marcante eu até
vejo
A sua glória inundado este lugar

**Fica Jesus mais um pouquinho
Não vá sem eu antes lhe falar
Como Tu és maravilhoso
Sua presença alegrou este lugar**

O culto hoje foi marcado em sua
homenagem
E o pastor mandou até anunciar
Que toda igreja não faltasse nem
um membro
E que trouxessem outros para Te
louvar

**(CORO)**

Cada minuto desse culto é importante
Tudo aqui é somente adoração
Até as lágrimas que rolam em cada
rosto
São para Ti como sinal de gratidão

**(CORO)**

Que bom que foi Jesus achar seu
endereço
Melhor ainda porque Tu nos atendeu
Fica a vontade, és bem-vindo em
nosso meio
Não só a casa, mas aqui tudo é teu`},{id:`p3`,hymnal:`preciosas`,number:3,title:`A Cruz no Chão`,lyrics:`A cruz no chão
Ao seu lado, um carrasco e o
martelo na mão
Olhando os pregos e a multidão
Sentiu grande vazio no seu coração
Pegaram o mestre, deitaram sobre a
cruz
Abriram seus braços, não viram sua luz
Juntaram seus pés, chamaram o
carrasco
Ele se achegou, e ao lado do mestre,
se agachou
E o martelo subiu, subiu, subiu
Sobre os pregos desceu, desceu,
desceu
E bateu, bateu, bateu, bateu, bateu

Ergueram a cruz
Lá estava pregado, do mundo a luz
Nenhum gemido sequer soltou
Todos viram em seu rosto a marca
da dor
Seu sangue jorrando, batendo no chão
Viu em todos os homens a ingratidão
Mas não se irou
Pediu ao pai perdão, e o pai perdoou
Rendeu seu espírito e chorou
Sua cabeça tombou, tombou, tombou
Sobre o peito caiu, caiu, caiu
E morreu, morreu, morreu, morreu,
morreu

Tudo em silêncio
Nem as aves cantavam,
nenhum som se ouvia
Maria olhou a tumba vazia
E ninguém se lembrou que era o
terceiro dia
A tampa do túmulo estava caída
Meu mestre já tinha voltado à vida
Onde está o meu mestre, gritava Maria,
quem o escondeu?
E uma voz conhecida se fez ouvir
Quem procuras, Maria?
Eis-me aqui, eis-me aqui
Ao teu lado estou, estou, estou
Estou vivo, estou vivo, estou vivo,
estou vivo, vivo estou`},{id:`p4`,hymnal:`preciosas`,number:4,title:`Quem É`,lyrics:`Quem é que vem entrando aqui
Com Seus cabelos brancos, alvos
como a neve
Quem é que vem entrando aqui
Com os olhos brilhantes como fogo
ardente
Quem é que quando Ele fala
A Sua voz parece o som de
cachoeira
Quem é que em Sua cabeça
Traz uma coroa que brilha como a
estrela

**Ele é o Todo-Poderoso, o Deus
maravilhoso
É o princípio, meio e fim
Ele é O que esteve morto, que
agora está vivo
Sinta Ele aí! Sinta Ele aí, sinta Ele
aí, Sinta Ele aí, sinta Ele aí!**

Quem é que traz em volta do peito
Um cinto de ouro e na mão tem a
espada de fogo
Quem é que como sol do meio-dia
Nos traz alegria e tem o brilho no
rosto
Quem é que no meio do povo
Vem trazendo renovo, alegrando
coração
É forte a Sua presença
Já encheu esta casa de poder e
unção`},{id:`p5`,hymnal:`preciosas`,number:5,title:`Canta Vitoria`,lyrics:`Não fique ai parado á beira do caminho
Nem tudo esta perdido
Você não está sozinho
Levanta a cabeça teu socorro vem
do céu
Deus te toma pelas mãos
Vai mudar o teu coração
O Senhor é Deus fiel

**Quando Deus está na frente
Vai abrindo portas
Acalma a tempestade os vendavais
Abre o mar vermelho em terra seca
seu povo atravessa em clima de paz
Mil cai ao seu ao seu lado
Dez mil a direita
Mas na tua vida ninguém vai tocar
Se Deus está na frente vai cuidando
de tudo
E a vitória você vai ganhar**

**Canta, canta vitória
Canta com fé
Em nome de Jesus
Em nome de Jesus de Nazaré**

O momento é agora
A sua benção já chegou
Acredite na vitória
Em nome do senhor
A graça é garantida
Para aqueles que tem fé
E de Deus jamais duvida
Poderoso Ele é`},{id:`p6`,hymnal:`preciosas`,number:6,title:`Dia Após Dia`,lyrics:`Quantas vezes planejei em abrir mão
de tudo                                               Na
verdade, eu até deixei as minhas redes
para trás
Mas não me conformei e decidi tentar
um pouco mais
Como alguém que já tentou todas as
possibilidades
Ainda não desanimou e nem
deixa a fé morrer?
Isso é um mistério que só o céu sabe
responder.

É que há um renovo pra cada dia Uma
misericórdia a cada manhã Que me
encontra e me abraça                 O
segredo de eu não parar                    é
a Tua graça

**E é por isso que eu
ainda estou de pé
Embora o meu exterior
esteja a se desgastar
Em meu interior,
estou sendo renovado
Dia após dia, dia após dia**

Há um renovo pra cada dia
Uma misericórdia pra cada manhã Que
me encontra e me abraça                   O
segredo de eu não parar é a Tua graça

**E é por isso que eu
ainda estou de pé
Embora o meu exterior
esteja a se desgastar
Em meu interior,
estou sendo renovado
Dia após dia, dia após dia**

E mesmo chorando,
vou caminhando
Estou sendo abastecido pelo Espírito
Santo (4x)

**E é por isso que eu
ainda estou de pé
Embora o meu exterior
esteja a se desgastar
Em meu interior, estou sendo
renovado
Dia após dia, dia após dia**

**E é por isso que eu
ainda estou de pé
Embora o meu exterior
esteja a se desgastar
Em meu interior, estou sendo
renovado, renovado, renovado,
renovado, renovado...
renovado, renovadooo..**`},{id:`p7`,hymnal:`preciosas`,number:7,title:`Do Anonimato ao Vencedor`,lyrics:`Já faz tempo que você está
Numa prova sem fim
Já faz tempo que o vento sopra
contra ti
Mas eu quero te dizer
Os seus sonhos não morreram
Você vai conseguir

Já montaram arquibancada
Pra assistir tua derrota
Mas não sabe que com Deus
Você já tem hora marcada
A sua velha história Deus vai
apagar agora
E uma página de vitória
Deus vai escrever pra ti

**Ele entrou na guerra
Derrotou gigante
Você é pequeno
Mas seu Deus é grande
Sua força é inabalável
Seu poder é inexplicável
O mundo para pra vê-lo agir**

**Vai acontecer
Um rebuliço em sua vida, uma
reviravolta
Aonde não houver saída
Deus vai abrir portas
E você vai ser exaltado
O mundo vai saber
Vai ver o seu retrato no noticiário
Você será manchete de um
anonimato Deus te fará um vencedor**`},{id:`p8`,hymnal:`preciosas`,number:8,title:`Maior que Tu Não Há`,lyrics:`Maior que o grão de areia
temos a pedra
Maior que a pedra temos o monte
Maior que o monte a cordilheira além
Maior que tu porém não há ninguém

**Não há ninguém maior que Tu meu
Deus
Não há ninguém que se compare a Ti
Não há no mundo ou lá no céu
também
Maior que Tu porém não há ninguém**

Maior na criação temos o homem
Maior que o homem temos o anjo
Maior que o anjo arcanjo e querubim
Maior que Tu porém não há ninguém

**Não há ninguém maior que Tu meu
Deus
Não há ninguém que se compare a Ti
Não há no mundo ou lá no céu
também
Maior que Tu porém não há ninguém**

Maior que Lua temos a terra
Maior que a terra temos o Sol
Maior que o Sol o universo além
Maior que tu porém não há ninguém

**Não há ninguém maior que Tu meu
Deus
Não há ninguém que se compare a Ti
Não há no mundo ou lá no céu
também
Maior que Tu porém não há ninguém**`},{id:`p9`,hymnal:`preciosas`,number:9,title:`Felicidade`,lyrics:`Felicidade é ter Cristo ao meu lado
E por ele ser guardado
Ter o meu nome escrito no céu
Meu nome está escrito nas
mãos de meu Jesus
Quando morreu ali na cruz
E assim mui feliz sou eu

**Felicidade é possuir o meu Jesus
E todos os dias levar a cruz
Até o dia que ele voltar
Felicidade é ser lavado no
sangue de Jesus
E sempre andar na sua luz
Até o dia que ele voltar**

Felicidade é ir morar numa cidade
Aonde tem paz de verdade
É Jesus quem mora lá
Eu sou feliz, em Jesus eu tenho algo
E por ele já sou salvo
Ele pode me guiar`},{id:`p10`,hymnal:`preciosas`,number:10,title:`Valeu a Pena`,lyrics:`Será que você já imaginou como será
naquele dia?
Quando você entrar no céu ao lado
de Jesus, como será?
Será que você já pensou no que
Ele vai te falar?
Quando olhar bem dentro dos teus
olhos
E disser teu novo nome? Ah!

**Valeu a pena esperar, valeu a pena
confiar
E sua vida inteira consagrar a Deus
Valeu a pena obedecer, e por Jesus
aqui sofrer
Naquele dia você vai dizer:
Meu Deus, valeu**

Será que você tem noção
Do que pra você está preparado?
O que o olho não viu, ninguém jamais
contou
E a mente humana não imaginou
E não há felicidade maior
Nem prazer que possa assim ser
comparado
Como tocar no rosto de Jesus
E receber aquele abraço

Será que você já parou pra pensar
Que está tão perto esse dia?
É hora de se preparar e de sua vida
santificar
Jesus está voltando!
E a igreja vai viver o momento mais
lindo da sua história
Pois o céu está preparado
Pronto pra cantar sua vitória`},{id:`p11`,hymnal:`preciosas`,number:11,title:`Na Sombra Dele`,lyrics:`Tire essa tristeza do olhar,
você não tem motivos
Pra assim ficar, se as lutas querem
te desanimar
Você pode confiar, Deus vai agir

**Tudo que Deus prometeu
Ele jamais se esqueceu, ele vai te
abençoar, se levante irmão
E erga a cabeça, tenha fé não se
esqueça que a vitória chegará**

Se o inimigo vier te deter, chame por
Jesus para te socorrer
Nada fica em sua frente você pode
crer, pois você é escolhido
Ungido com poder, se numa fornalha
alguém te lançar
Ele é o quarto homem contigo estará,
se o valente no caminho
Vier te deter, você tem nas mãos a
pedra que te faz vencer

Nada pode parar, nada pode deter,
nada pode impedir
Quando Deus quer fazer, ele faz e
desfaz e se preciso for
Retorna a fazer,
faz o impossível se tornar possível
Até o invisível faz aparecer,
muda a sentença só com um olhar
Pois na sombra dele,
ninguém pode te tocar (3x no final)`},{id:`p12`,hymnal:`preciosas`,number:12,title:`Chora Aos  Pés de Jesus`,lyrics:`Nesta vida, o crente é provado
Mas tem ao seu lado o auxílio divino
E chorando sua cruz tão pesada
À beira da estrada, lamenta o destino
O Senhor tem provado seu povo
E é vitorioso quem leva a sua cruz
Se não tens esperança de vida
Procura guarida nos pés de Jesus

**Chora aos pés de Jesus
Porque Ele enxuga teus olhos
também Confia, somente espera, no
amanhecer Tua vitória vem
Chora aos pés de Jesus
Derrama em prantos o teu coração
E quando o Senhor responder
Saberás que o crente não chora
em vão**

Quantas vezes a noite é sombria
Não traz alegria e tudo é tristeza
E o crente, de rosto em terra
Gemendo e chorando, não perde a
certeza
De que Deus não despreza o Seu povo
Na água e no fogo
Ele estende suas mãos
Quando tudo parece perdido
Para seu problema Deus da solução`},{id:`p13`,hymnal:`preciosas`,number:13,title:`Deus Vai Te Exaltar`,lyrics:`Toda fúria do inimigo
Toda obra do mal
Estão sendo destruídas
Pelo nosso General
Nenhum mal em sua tenda
Chegará
E a cabeça da serpente
Deus esmagará

**Toda força do mal
Deus vai destruir
Se o inimigo está de pé, hoje ele
Vai cair
Hoje a porta de bronze
Deus vai estourar
Ele vai abrir caminho pra
você passar (3x no final)**

Há coisa que Deus não suporta
É ver o crente chorar
Enxugue as tuas lágrimas
Deus se levantou pra te ajudar
Todo impedimento vai sair
Deus vai te abençoar
Chegou a hora de Deus agir
Ele vai te exaltar.`},{id:`p14`,hymnal:`preciosas`,number:14,title:`Vou Vencer`,lyrics:`Deus não se agrada da pessoa que
não tem coragem
Deus não se agrada da pessoa que só
sente medo
Deus já tem guardado recompensa
para os corajosos
É na ousadia e na fé que esta o seu
segredo
Quando o crente vai e entra na guerra
Deus envia anjos para a terra
Para quem tem fé não há tempo ruim
Vai cantando e dizendo assim

**Vou buscar, vou bater
Vou lutar, vou vencer
Enfrentar quem vier
Vou contar vitória pela fé**

Deus não se alegra na derrota, nem no
derrotado
Ele tem coroa reservada para os
vencedores
Ele entra na luta como o grande
general de guerra
Faz dos mais humildes e pequenos
grandes vencedores
Faz o mar se abrir, faz o sol parar
Só pra dar vitória ao seu guerreiro
Com um Deus assim, não há tempo
ruim
Tem vitória para o ano inteiro`},{id:`p15`,hymnal:`preciosas`,number:15,title:`Hora de Partir`,lyrics:`Está chegando a hora de partir

Prepara-ti ó igreja pra subir

Medita sempre firme em oração

É tempo de real consagração.

**Jesus em breve vem do céu**

**Em glória majestade e poder**

**Medita ó igreja de Jesus**

**Que dia glorioso há de ser**

Em breve os anjos vão anunciar

Que Cristo em grande glória

vai desce,

A igreja triunfante subirá

E os crentes com Jesus irão viver.

E quando estivermos lá no céu

Em morte nunca mais se falará

O gozo alegria e o prazer

Pra sempre com Jesus iremos ter.`},{id:`p16`,hymnal:`preciosas`,number:16,title:`Eu Estou na Benção`,lyrics:`Já determinei, que a vitória é minha,
ninguém vai tomar.
Eu já declarei, que na minha vida
benção sempre vão estar.
Eu já decidi, que venha o que vier
ou passe o que passar,
Não vou desistir, de vitória em
vitória sempre vou andar.

Sei que minhas lutas, só vão me
fazer crescer.
E que pouco a pouco, chego mais
perto de Deus.
E se estou juntinho dele,
posso confiar.
Que ele vai trazer minha vitória
outra vez.

**Eu estou na benção, e na benção
vou ficar.
Quando a gente está na benção,
nada pode segurar.
Eu estou na benção, ninguém vai
tirar de mim.
Tudo que Jesus já conquistou pra
mim.**`},{id:`p17`,hymnal:`preciosas`,number:17,title:`Se Falou Tá Falado`,lyrics:`Quando Deus quer fazer,
ninguém pode impedir
Se quer abençoar um servo
seu aqui
É em vão levantar para contrariar
se levantar é só pra cair
Quem pode ensinar este
Deus trabalhar
Você tem que aprender
no senhor esperar
Ele faz como quer,
ninguém pode mudar
Seu decreto ele vai revogar.

Se falou tá falado,
se assinou tá assinado,
É assunto encerrado,
é caso irrevogável
É somente esperar,
é somente aguardar
O banquete que está preparado
Se tem alguém que não quer
deixe ele contender
Até quando quiser,
Deus está com você
Quero ver quem pode impedir
o que Deus vai fazer

A vitória é tua quem pode impedir
O que Deus falou, ele vai cumprir
O tempo vai chegar,
Deus vai te exaltar
Quem viu você chorando vai ver
você sorrir.`},{id:`p18`,hymnal:`preciosas`,number:18,title:`A Oração do Crente`,lyrics:`Você chorou, você pediu, tanto você
insistiu, precisando da resposta
Já não faz nenhum sentido a vida
que está vivendo de fracasso
e derrota.
Tão sozinho e sem sorte
No vale da sombra da morte
Pensando até que é o fim
Mas Jesus que muda a história
Já declarou sua vitória,
só pra te fazer feliz.

**O crente quando chora o
Senhor responde
A oração do crente
estremece o monte
E quando ele chora o
Senhor atende
Tem um grande valor a lágrima
do crente. (2x no final)**

Ele foi com Daniel lá na
cova dos leões
Nada ali aconteceu,
Deus ouviu suas orações
Mesmo quando Ana orava,
por um filho ela clamava
E o senhor a atendeu.
Atendeu a Josué quando
orou e o sol parou
Mandou tocarem as trombetas
e as muralhas derrubou
Esse Deus se faz presente
Vive no meio da gente
É o mesmo e não mudou.`},{id:`p19`,hymnal:`preciosas`,number:19,title:`Barulho de Glória`,lyrics:`Brevemente este mundo ouvirá
Uma noticia que irá abalar
Inesperadamente sumirá
Um povo humilde que ao mundo
rejeitou
Este povo dizia: Não somos daqui!
O nosso lugar, Jesus foi preparar
O mundo ficará em prantos
Mas a igreja com Jesus estará
a se alegrar

**No céu se ouve um canto
Santo! Santo! Santo! Santo! Santo!
Santo! Santo! Santo! Santo!
Santo, santo é o senhor!
Juntamente com os anjos,
a igreja canta:
Santo! Santo! Santo! Santo! Santo!
Santo! Santo! Santo! Santo!
Santo, santo é o senhor!
E em um só coral, a igreja, os anjos
Querubins e serafins, arcanjos
E todos os santos
exaltam lá na gloria
O rei dos reis Jesus,
leão da tribo de Judá**

E quando vermos a face de Jesus
Suas mãos feridas pelos
cravos lá da cruz
Cada um salvo, a Jesus vai abraçar
Grande barulho de glórias haverá
Jesus ao pai, sua noiva apresentará
Oh que alegria, ver os salvos lá será
E com os olhos da fé eu posso ver
De tanta glória o céu estremecer`},{id:`p20`,hymnal:`preciosas`,number:20,title:`Deus de Milagres`,lyrics:`**Vai acontecer milagre hoje aqui
Vai acontecer milagre hoje aqui
Não importa sua dor,
o teu Deus é doutor
Vai acontecer milagre**

Por onde Ele passava,
alguém logo gritava
Vai ter milagre aqui
Eu já posso ouvir, Jesus já vem ali
Uns aos outros falavam:
Eu conheço aquele olhar
Um olhar de amor,
eu conheço o meu Senhor
É o Deus de milagre, milagre, milagre

**(CORO)**

Faça como aquela mulher,
toque nele pela fé
E seja sarado, seja libertado
Dele vai sair virtude,
Dele vai sair a cura
Que você procura

**(CORO)**

Uns aos outros falavam:
Eu conheço aquele olhar
Um olhar de amor, eu conheço o meu
Senhor
É o Deus de milagre
se prepare, ó, igreja, pra o milagre
acontecer
Eu já posso sentir, pois Jesus está aqui
E vai fazer milagre, milagre, milagre`},{id:`p21`,hymnal:`preciosas`,number:21,title:`Tudo por Você`,lyrics:`O Sol se esconde sob o teu olhar
E te obriga a enfrentar mais uma noite
sem dormir
As lutas em tua porta vêm bater
Na intenção de te fazer,
da caminhada desistir
Com lágrimas nos olhos você ora
Soluçando a Deus, implora forças
pra sobreviver
O céu se move porque Deus atende
O teu pranto Ele entende e manda
alguém te socorrer

**E por você Deus estremece terra
Quebra as cadeias pra te libertar
Onde estiver, Ele manda um anjo
Até o cativeiro para te buscar
Deus entra em cena contra o inimigo
E mostra que contigo Ele sempre
está Quem toca em você está
tocando em Deus
E procurando fogo para se queimar
Você está à sombra do Onipotente
Você tem mil motivos pra seguir em
frente
Quem vier te ofender,
com Deus vai ter que guerrear**

Com lágrimas nos olhos você ora
Soluçando a Deus, implora forças
pra sobreviver
O céu se move porque Deus atende
O teu pranto Ele entende e manda
alguém te socorrer`},{id:`p22`,hymnal:`preciosas`,number:22,title:`Grandes Coisas`,lyrics:`Tu és o Deus dessa terra
Tu és Rei desse povo
És o Senhor da nação
Tu és
Tu és a luz desse mundo
Esperança para os perdidos
Tu és a paz pros cansados
Tu és

Ninguém é como nosso Deus (2x)

**Grandes coisas estão por vir
Grandes coisas vão acontecer
nesse lugar (2x)**

Tu és o Deus dessa terra
Tu és Rei desse povo
És o Senhor da nação
Tu és
Tu és a luz desse mundo
Esperança para os perdidos
Tu és a paz pros cansados
Tu és

Ninguém é como nosso Deus (2x)

**Grandes coisas estão por vir
Grandes coisas vão acontecer
nesse lugar (3x)
Grandes coisas estão por vir
Grandes coisas vão acontecer aqui**

Ninguém é como nosso Deus (4x)

**Grandes coisas estão por vir
Grandes coisas vão acontecer
nesse lugar (3x)
Grandes coisas estão por vir
Grandes coisas vão acontecer aqui**`},{id:`p23`,hymnal:`preciosas`,number:23,title:`Decreto de Deus`,lyrics:`Eu nunca vi, estou pra ver
Um Deus igual ao meu
Que governa o universo inteiro
E nunca me esqueceu
O que Ele criou
Ninguém vai copiar
Pra baleias e peixes
Ele fez o mar
Fez a lua pra noite
E o sol para dia clarear
Eu nunca vi, Estou pra ver
Um Deus perfeito assim
Que o inferno em reverência se cala
Para lhe ouvir
Quando se apresenta
o impacto é total
E com uma palavra que Ele proferir
Para o tempo na hora que quer
Esse Deus é assim

Especialista no que faz
Não perde pra ninguém
Criador do Universo
E outro igual não tem
Você é confirmação de tudo
o que Ele fez
O que Ele projetou
Causa inveja, é de admirar
Construiu uma cidade
pros santos morar
Que não precisa de alicerce
para segurar.

Eu já vi desenhista,
um desenho errar
Numa planta de casa,
arquiteto falhar
Mas o meu Deus nunca erra,
o que faz é perfeito
Ele faz desenho em cima do mar
Este Deus que eu conheço
Ele é mesmo assim
Ele age da forma que tem que agir
Ele já sabe o formato
de um ser humano
Antes de existir.

Este Deus é demais
Tudo, tudo Ele faz
Pra te dar vitória já está de pé
Pode o vento soprar
Pode a luta chegar
No decreto de Deus,
vencedor você é
Ele é dono de tudo e também
é teu dono
E não desampara o servo fiel
Você honrou compromisso
E já tem o registro
De cidadão do céu.`},{id:`p24`,hymnal:`preciosas`,number:24,title:`Vendavais`,lyrics:`Hoje alguém falou seu nome para
mim, que você está sofrendo tanto
assim coração tá em pedaços
Foi vencido pelos laços dessa vida
Foi arremessado contra o cais
Açoitado pelos vendavais
Chora o peito, grita a alma
procurando a paz.

**Mas eu sei, Jesus te olha e te vê
E diz: Filho, vou te socorrer
Do pó das cinzas eu vou te
levantar  Sou o Teu Deus, é só
Meu nome clamar
Sei que os sonhos se
perderam no caminho
Estás sozinho e entregue
à solidão
Mas Sou o Deus,
que tudo pode e tudo vê
Nesse momento vou abençoar
você.**

O sorriso que havia em seu rosto
Pouco a pouco ele desapareceu
Diz que tudo está perdido
Vai vivendo iludido em fantasias
Foi arremessado contra o cais
Açoitado pelos vendavais
Chora o peito, grita a alma
procurando a paz.`},{id:`p25`,hymnal:`preciosas`,number:25,title:`Sem Jesus Não Dá`,lyrics:`Você pode até ter tudo
As coisas mais belas do mundo
Mas sem Jesus não dá
As pessoas te rodeiam
Os amigos te abraçam
Mas se não tiver a paz, não dá.
És um alguém tão sem graça
Não tendo alegria n'alma
De tristeza é só chorar
De que adianta o teu trabalho
Se no final é só cansaço
Sem Jesus não dá.

**Sem Jesus não dá
Você não vai conseguir
Não adianta nem tentar
Que você pode se iludir
Ele é a alegria do aflito
Levanta o que está caído
E lhe dá forças pra lutar**

Se estás sem esperança
Só Jesus é a saída, sem Ele não dá
A nossa vida aqui é curta
O homem vai, não sabe se volta
É sem Jesus não dá
Por favor, me escute agora
Mande a tristeza embora
E vem comigo cantar
Vai sentir a diferença
Quando Ele entrar na sua vida
Sem Jesus não dá.

Final:
Sem Jesus não dá (sem Jesus não
dá)
Sem Jesus não dá..(sem Jesus não
dá)
Sem Jesus não dá...`},{id:`p26`,hymnal:`preciosas`,number:26,title:`Deixa Eu Te Usar`,lyrics:`Apesar das feridas,
apesar das decepções
Eu te chamei, Eu te chamei
Apesar do passado,
apesar das desilusões
Eu te chamei, Eu te chamei

**Deixa Eu te usar para curar
Deixa Eu te usar para salvar
Enquanto Eu te uso
Eu cuido de tudo que te faz
chorar.(2X)**

Apesar das feridas,
apesar das decepções
Eu te chamei, Eu te chamei
Apesar do passado,
apesar das desilusões
Eu te chamei, Eu te chamei

**          Coro 2x**

Eu não te dei espírito de temor, mas
de ousadia,
Onde Eu te mandar, tu irás
Onde Eu te colocar, tu brilharás
E Eu te encherei,
E Eu te encherei
E Eu te encherei,
Vai, vai, vai em paz.

Deixa Eu te usar para curar
Deixa Eu te usar para salvar
Enquanto Eu te uso
Eu cuido de tudo que te faz chorar

Deixa Eu te usar, Deixa Eu te usar
Enquanto Eu te uso
Eu cuido de tudo que te faz chorar`},{id:`p27`,hymnal:`preciosas`,number:27,title:`Pra Sempre`,lyrics:`O universo chora, o sol se apagou
Ali estava morto o Salvador
Seu corpo lá na cruz
Seu sangue derramou
O peso do pecado Ele levou
Deus Pai o abandonou
Cessou seu respirar
Em trevas se encontrou o Filho
A guerra começou,
a morte enfrentou
Todo o poder das trevas vencido foi
A Terra estremeceu,
o sepulcro se abriu
E nada vencerá Seu grande amor
Ó, morte, onde estás?
O Rei ressuscitou
Ele venceu pra sempre
Pra sempre Exaltado É
Pra sempre Adorado É
Pra sempre Ele vive
Ressuscitou, ressuscitou.
A Terra estremeceu,
o sepulcro se abriu
E nada vencerá Seu grande amor
Ó, morte, onde estás?
O Rei ressuscitou
Ele venceu pra sempre
Pra sempre Exaltado É
Pra sempre Adorado É
Pra sempre Ele vive
Ressuscitou, ressuscitou
                                                         Cantamos
Aleluia!  (3x)
O Cordeiro venceu

Pra sempre Exaltado É
Pra sempre Adorado É
Pra sempre Ele vive
Ressuscitou, ressuscitou. (2x)`},{id:`p28`,hymnal:`preciosas`,number:28,title:`A Escolha de Deus`,lyrics:`Existia um homem, por nome Saulo
Que perseguia o povo de Deus
Ele tinha prazer, em açoitar e
até mesmo matar
Os discípulos de Jesus
Homem tão temido,
respeitado era romano
Mas não sabia, que o que plantava,
colheria, que sua história,
e sua vida um dia mudaria
Foi assim, a caminho de Damasco,
indo para perseguir
Quando um resplendor, de luz do
céu o fez, em terra cair
Então ouviu-se, uma voz cheia de
amor, e diferente que vai no
profundo, da alma
E mexe o coração, da gente.

Saulo, Saulo, porque me
persegues? Saulo perguntou!
Mas quem és tu Senhor?
Eu sou Jesus o Cristo, a quem tu
persegues duro e para ti,
recalcitrar contra os agrilhoes
O que queres, que eu te faça, meu
Senhor? Pregaras minha palavra,
aos gentios
Te escolhi tu és um vaso
Teu novo nome, agora é Paulo.

Quando Deus escolhe, é pra
confundir
E se Ele escolhe, quem vai impedir
O perseguidor, agora é perseguido
Mas em tudo Deus, o livra do perigo

Não vivo mais eu, mas Cristo vive
em mim, Seu nome anunciarei, até
chegar meu fim
O viver é Cristo, e o morrer é lucro
Sou cidadão do céu, eu não sou
deste mundo,
E ainda hoje, a igreja de Jesus, é
perseguida
Querem nos calar, formando leis
para tentar nos corromper
A igreja não irá ceder,
estará firme a esperar
Jesus voltar, e nos arrebatar
Mas somente, os que forem fieis a
Deus, no céu irão chegar, aleluia!
Pode até o inferno, se levantar
Essa obra é de Deus,
e ninguém pode parar
O Dono da igreja, se chama Jesus
O Todo Poderoso,
que venceu a cruz
Ele é quem determina,
e faz como quer
Usa o pequenino,
seja homem ou mulher
Tem nas mãos,
o controle e guarda os seus
Aí daquele que tocar, na menina
dos olhos de Deus!

FINAL 2x

Nada vai calar,
Nada vai parar,
Nada vai deter o exército, de Deus.

Operando Deus, quem impedira?
E se Ele te escolheu,
quem O impedira?`},{id:`p29`,hymnal:`preciosas`,number:29,title:`Nos Pés de Jesus`,lyrics:`O lugar de todo crente,
é nos pés, sim, de Jesus
Onde jorra fortemente
raios de celeste luz
Lá encontra fortaleza o
cristão que fraco está
Santidade e pureza
só ali encontrará.

**É nos pés de Jesus cristo
Que eu encontro mais poder
De ficar eu não desisto
Ficarei até morrer.**

Só orando ou cantando,
aos seus pés quero ficar
Ele vai me consolando
para eu não desanimar
Do pecado fui liberto,
quando aos seus pés cheguei
Hoje, vejo os céu aberto,
pela fé eu chegarei.

Lá na terra prometida,
onde eu irei morar
A minha alma lá remida,
vai com cristo descansar
Junto ao rio cristalino,
o Senhor me levará
Seu aspecto divino,
vai minha alma contemplar.`},{id:`p30`,hymnal:`preciosas`,number:30,title:`Um Novo Dia`,lyrics:`Você sofre, amargurado e cansado
dos problemas você chora,
e até pensa que não dá mais, já não
tem a paz , e quer parar
mas saiba, que o Deus dos deuses
com sua força e seu poder te
escuta.

Pensai nas coisas que vem do céu.
E a nuvem negra passará,
olhai somente para cristo,
e um novo dia vai brilhar (2x)

Não desespere em Deus espere,
põe a sua fé em Jesus, e os
problemas com os seus dilemas
sairão de ti e verás a luz.
E como águia voando no além,
voarás também, Deus te conduz.

CORO FINAL 4X

Pensai nas coisas que vem do céu.
(Pensai nas coisas que vem do céu)
E a nuvem negra passará.
(Sim passará)
Olhai somente para cristo.
(Olhai somente para Cristo)
E um novo dia vai brilhar.
(Sim passará)
Pensai nas coisas que vem do céu.`},{id:`p31`,hymnal:`preciosas`,number:31,title:`Deus Determinou`,lyrics:`Vai se abrir o céu...
E a glória do Senhor vai descer
E o impossível Deus vai fazer aqui
Milagres, maravilhas e proezas.
Vai se abrir o céu....
E a unção de Deus vai nos envolver
Porque este lugar vai estremecer
De glória, de vitória e de poder.

Hoje o altar já está queimando,
Entre os obreiros vejo anjos
caminhando
E na mocidade tem brasas acesas
Espalhando fogo por toda igreja
O povo de Deus hoje tem resposta
Suas orações foram ouvidas
lá na glória
O inferno inteiro já fechou as portas
Deus determinou e quem crer vai
receber.

No meio do povo o varão de branco
Está passando renovando
Batizando libertando restaurando
Seus olhos de fogo estão
contemplando
A doença, o problema,
a angustia, a miséria
Não vão resistir
Ele vai tocar ele vai agir
Com certeza ninguém pode impedir.

No meio do povo é o santo fogo
Ouço línguas repartidas
Labaredas do espírito de Deus
Anjos a subir outros a descer
Entregando uma chave de vitória
Para mim e pra você
Hoje o próprio Deus ele está aqui
Pra virar o cativeiro de uma vez.

Receba em nome de Jesus
esta glória
Pois hoje você não vai embora
Sem levar a tua benção
Receba em nome de Jesus o poder
E Profetize para você
A vitória pra vencer.

Final:

Receba.... receba....,
A vitória pra vencer.
Receba (receba..), Receba
(receba...), receba,
A vitória é pra vencer.... Receba`},{id:`p32`,hymnal:`preciosas`,number:32,title:`Desapareceu um Povo`,lyrics:`Muito em breve vai sair uma notícia
De um povo que desapareceu
Era um povo muito humilde,
que aqui muito sofreu
Aquele povo, era o povo de Deus.

**Onde está aquele povo
barulhento? Onde está que não
se vê nenhum irmão?
Alguém, com voz de lamento
Vai dizer neste momento
Aquele povo foi embora pra Sião**

Onde está o dirigente desta Igreja?
E os obreiros daqui, onde estão?
As mensagens que pregavam
Muitos tristes se alegram
Elas também foram
embora pra Sião

Onde está a juventude desta igreja?
E as irmãs do círculo de oração
Que a Deus tanto clamavam?
E as crianças que cantavam?
Elas também foram morar em Sião!

Depois deste grande acontecimento
Muitos crentes desviados vão voltar
Procurando os irmãos
para reconciliação
Mas, infelizmente,
não vão encontrar,`},{id:`p33`,hymnal:`preciosas`,number:33,title:`Palavras`,lyrics:`Com gemidos que palavras
não podem explicar
Ele leva ao Pai as minhas
interseções
Quando dobro os meus joelhos em
meio às tribulações
Ele ouve o gemido do meu coração

Ó, Jesus, a Ti confesso,
não dá pra viver
Sem sentir a tua presença
no meu ser
Sou eterno dependente,
ser humano tão carente
Estou de novo aqui e quero teu
poder.

**Ainda que pra te servir Jesus eu
tenha que chorar
Te servirei porque comigo
estarás
Sofrer contigo é bem melhor
do que errar
Perdoa-me porque às vezes não
consigo nem falar
Logo as lágrimas meus olhos
vêm molhar
Como um sinal que tu estás
neste lugar.**`},{id:`p34`,hymnal:`preciosas`,number:34,title:`Ai de Mim!`,lyrics:`Ai de mim!
Se os judeus tivessem um coração
quebrantado
Ao invés de condenar o Mestre
fossem abraçá-lo
Se não negasse que o conheci e
fosse ao seu favor
Ai de mim!
Se o carrasco recusasse a ordem
de surrá-lo
Se o Mestre desistisse quando
Pedro ali pediu
Pra voltar atrás,
não cumprir jamais a sua missão.

Ai de mim!
Se eu tivesse que levar
as chicotadas
Se eu tivesse que cumprir suas
pisadas.
Se eu tivesse que morrer naquela
cruz.
Eu não suportaria
Carregar a culpa de uma multidão
Ver meu sangue escorrendo pelo
chão, ver os cravos transpassar
as minhas mãos.
Eu não suportaria
Amarrado em pleno sol do meio-dia
Por amor de quem amor
não merecia
Resistindo a ser vencido pela dor
Sou grato porque Ele suportou.

Ai de mim se não houvessem
os milagre.
Ao invés de água eu tomasse
o vinagre
Se o meu suor se tornasse
em sangue
Se a multidão pedisse morte
ao assaltante.
Ai de mim se fosse em mim
tantos espinhos
Se fosse eu abandonado e sozinho
Ai de mim se fosse as minhas
mãos furadas
E a honra pelo povo esmagada.

Ai de mim!
Se eu tivesse que levar a
cruz pesada
Se eu tivesse que cumprir
suas pisadas
Se eu tivesse que morrer
naquela cruz
Eu não suportaria
Carregar a culpa de uma multidão
Ver meu sangue escorrendo
pelo chão
Ver os cravos transpassar
as minhas mãos.
Eu não suportaria
Amarrado em pleno sol do meio-dia
Por amor de quem amor
não merecia
Resistindo a ser vencido pela dor
Sou grato porque Ele suportou.

FINAL: Ai de mim!`},{id:`p35`,hymnal:`preciosas`,number:35,title:`Mãos Ungidas`,lyrics:`De onde vem, esta unção,
este poder
De curar, enfermidade, tirar a dor,
com autoridade
De onde vem, tanta unção
Que minhas mãos, estão ungidas
Posso ordenar, em nome de Jesus

Levanto as minhas mãos
E posso ordenar,
que o mal vá embora
Pra nunca mais voltar,
curado vai ficar
Com as mãos ungidas
Não há mal que resista, tanto poder
Poder que só nos dá,
recebe só quem crer
Enfermidade vai embora
Quando levanto as minhas mãos,
pra repreender.

**O mudo fala, o cego enxerga,
o coxo anda
Tudo obedece a Sua voz quando
Ele manda
Se Ele mandar estendo a mão
e o morto se levanta
É o Senhor dos impossíveis,
creia agora
Deus vai usar as minhas
mãos e nessa hora
O surdo vai ouvir a voz de
Deus aqui
Porque Ele ungiu minhas mãos,
enfermidade vai sair.**`},{id:`p36`,hymnal:`preciosas`,number:36,title:`Vai Me Ajudar`,lyrics:`Minh' alma suspira por meu Deus
Minha esperança, ela vem do céu
Por isso não, não temo a nada
Os perigos em minha jornada
Pois tenho um Deus que está
comigo pra me ajudar.

**Vai me ajudar, vai me ajudar
Eu tenho um Deus que vai
me ajudar
O inimigo quer ver o meu fim
Mas se engana,
pois não será assim
Porque as misericórdias de Deus
Elas são sobre mim.**

Há momentos nesta vida
Que as aflições são fortes demais
E parece que não vou suportar
Mas, quando isto acontece
Se minha força se acabar
Jesus aparece e me diz vou te
ajudar.

Jesus está perto de voltar
Para com ele me levar
Sabendo disto,
o inimigo quer me atrapalhar
Não adianta ele lutar
Pois Jesus está a me ajudar
Com sua ajuda,
certamente, eu chegarei lá!`},{id:`p37`,hymnal:`preciosas`,number:37,title:`Daniel`,lyrics:`Fala Daniel, o que aconteceu?
Eu tenho uma cova para entrar.
Conta Daniel, o que vai fazer?
Eu também não sei,
o jeito é só orar.

**Se eu orar, o céu vai mover
Se eu orar, Deus vai responder
Se eu orar, Deus vai agir
Vai entrar na cova e o leão vai
dormir.**

Durante aquela noite, o rei não
descansou
Por causa de Daniel, até os músicos
dispensou
A população pensou: vamos ver
Daniel na cova, moído, morrer.. mas

           “VOLTAR AO CORO”

Daniel caiu na cova,
o povo se espantou
Passaram horas e minutos,
nenhum grito se escutou
De manhã bem cedinho, o rei foi lá
pra ver, voltou maravilhado,
com Daniel a dizer:
Naquela noite, eu pude ver
A presença de Deus a me envolver
Em cada volta que o leão dava em
mim, eu ouvia uma voz me falando
assim:

**Calma, Daniel, eu sou o Senhor
Não tenha medo, não, o leão me
escutou. Eu ordenei a ele pra que
fosse se deitar
Durante esta prova o leão vai
jejuar  Calma, Daniel,
eu estou aqui
Se você tiver com sono, Daniel,
pode dormir, aí tem travesseiro,
deita em cima do leão
Durante aquela noite foi só
glória e unção.**

Foi o Senhor Jesus que estava
lá (2x)`},{id:`p38`,hymnal:`preciosas`,number:38,title:`Deus Proverá`,lyrics:`Há momentos na vida da gente,
Que é preciso se humilhar,
Dobrar os joelhos calado,
Para ouvir o Senhor falar,
Entrar na presença do Altíssimo,
Em Jejum e oração,
Não existe problema difícil,
Que Deus não tenha, a solução,

**Deus proverá, Não cai uma gota
d´água, se Deus não deixar,
Deus pode fazer fluir,
água da rocha,
Deus faz do impossível, possível,
Por que Ele é Maior,
Deus proverá,
Não cai uma folha da árvore,
Se Deus não deixar,
Faz brotar a flor e faz, crescer o
fruto, tudo isso existe porque,
Nosso Deus é Maior**`},{id:`p39`,hymnal:`preciosas`,number:39,title:`Martirio`,lyrics:`Eu sinto no meu peito uma forte

emoção, quando lembro sobre o

martírio de jesus.

As vezes fecho os olhos e posso ver,

o sofrimento dele carregando a cruz .

sangue e suor, corriam do seu rosto e

o carrasco açoitava o seu corpo.

O povo escarnecia do rei que foi

rejeitado,

E que na cruz para morrer foi

condenado

Eu posso imaginar a dor que sentiu,

quando a coroa de espinhos o cravou

Assim mesmo com ternura

consolava, aqueles que por Ele ali

choravam.

Rastro de sangue por onde passou

Jesus, refletia em cada vida

o seu amor .

Hoje  essa história comove o meu

coração, em saber que

esse martírio foi por mim .

Em saber que esse martírio foi mim

E por fim crucificaram a Jesus, entre

dois ladrões puseram meu Senhor.

Tendo sede pediu água alguém lhe

deu, uma esponja com vinagre

Ele bebeu.

então o seu espirito ao Pai Ele

entregou, inclinando a cabeça expirou

Uma lança transpassou o

corpo de Jesus.

Sangue e agua então derramou

A terra estremeceu e o sepulcro   se

abriram,

as potencias do céu foram abaladas.

O tempo logo mudou, fortes ventos

sopraram, raios e trovões anunciaram

que quem ali morreu foi o filho de

Deus .

Aleluia,

(Aleluia meu Jesus ressuscitou ) 4x

Declamação:

Jesus morreu, mas ressuscitou  e

esta assentado a destra do Pai, e

breve, muito breve virá buscar sua

igreja, e com Ele viveremos para

sempre, amem ,Aleluia!`},{id:`p40`,hymnal:`preciosas`,number:40,title:`No Olho do Furacão`,lyrics:`Quando a gente clama
e Deus atende
No peito o coração se acende
Até faz festa pro Senhor
A gente louva, ri, a gente adora
E o que era triste foi embora
E o deserto enfim passou

O nosso Deus se mostra então fiel
Ele nos escuta lá do Céu
Responde a nossa oração
Sobre nós derrama o Seu favor
Revelando em nós o Seu amor
Digno é Ele de adoração

Mas quando o silêncio de Deus
É tudo que a gente tem,
o que fazer nessa hora?
Será que a gente louva e adora
Ou lamenta e chora?
Qual é a nossa reação?

**Quero ver adorar no
olho do furacão!
Quero ver adorar no vale, na
prisão! Quero ver adorar na
tempestade,  na dor!
É assim que Deus conhece o
verdadeiro adorador!
Um verdadeiro adorador!**`},{id:`p41`,hymnal:`preciosas`,number:41,title:`Obreiro Aprovado`,lyrics:`Estavas no mundo de lá te busquei
Estavas perdido, eu te encontrei
Estavas ferido, tuas feridas sarei
Estavas tão triste, alegria te dei
Te dei novo rumo, mudei tua vida
Te dei meu consolo e te de guarida
Eu te escolhi, eu te preparei
Te dei minha benção,
meus dons te entreguei
E na minha obra eu te coloquei

**Obreiro aprovado meu servo fiel
Que às vezes cansado,
nunca se rendeu
O teu galardão comigo está
Todo teu trabalho registrado está
Que maneja bem a minha palavra
Que entrega a vida pela
minha causa
Minha benção na terra sempre
te darei
E, no céu, muito mais
para ti reservei**

Meu servo no pouco tem sido fiel
Por isso no muito te colocarei
Tuas necessidades sempre
hei de suprir
Em qualquer batalha lutarei por ti
Como fui com Moisés, contigo serei
E mesmo no deserto eu
cuidarei de ti
Se no fogo passares,
não te queimarás
Ou mesmo nas águas não te
afogarás
Eu sou o que sou,
descansa em mim`},{id:`p42`,hymnal:`preciosas`,number:42,title:`Dia Inesquecivel`,lyrics:`O dia que nascia
Seria para sempre inesquecível
O Mestre já sabia
Que a profecia então se cumpriria
Que com um beijo Judas o trairia
Aquele que veio mudar as nossas
vidas. E ao cair da tarde,
No monte um clamor já se ouvia
O Mestre então dizia:
"Oh! Pai passa de mim esta agonia"
Aproximam-se meus inimigos,
a hora então chegou
E o inferno será vencido,
assim diz o meu Senhor...
E levaram meu Jesus,
crucificaram numa cruz
O véu do templo se rasgou
o dia negou sua luz
E mataram meu Jesus.
Mas ao terceiro dia o anjo
surpreendeu Maria. Ele não está
aqui, Ele já ressuscitou...
A morte não venceu meu Jesus
A dor de ser pregado na cruz
Não foi bastante para deter
Aquele que tem todo poder
Solução pra quem precisar
Nome que acalma o mar
Muralhas vão por terra cair
Todo mal não vai resistir
Quando então este nome chamar
Jesus... Nome que liberta
A vitória é certa
Todo Poderoso Ele é
Jesus... Ele é Majestade
Acalma a tempestade
Se o gigante se levantar
Pode então esse nome chamar!
Jesus.`},{id:`p43`,hymnal:`preciosas`,number:43,title:`Sempre Fiel`,lyrics:`Deus sempre abre uma porta
pra livrar
E preserva o mundo inteiro,
se o escolhido nele está
Deus não lhe deixa,
nem por um minuto fracassar
E lhe dá o livramento no momento
certo que precisar.
Destrói seus inimigos e põe anjos
pra mostrar saída
Dando escape com sua forte mão
Preservando sempre sua vida
Porque pra livrar um justo,
Deus destrói uma cidade
Faz cair ao chão, Deus é sempre
fiel, pra livrar o servo seu.
Sempre fiel,
jamais deixa você fracassar
Sempre fiel,
não te deixa para atrás olhar
Sempre fiel,
te dá força e na luta faz você
cantar
Sempre fiel,
te dá força pra vencer
Te faz passar pelo fogo,
ainda sobreviver
E nos espinhos te levanta,
não te deixa ferir
Seca as águas, faz caminho
só pra você seguir`},{id:`p44`,hymnal:`preciosas`,number:44,title:`Vitoria`,lyrics:`Porque temer se Deus é teu amigo
Desesperar se Ele está bem perto
de ti. Só Ele é quem pode te livrar
do perigo, e tem nas mãos as
chaves pra fechar e abrir
Levanta os olhos, irmão,
olhe para cima.
Por que não creste? o crente vive
pela fé. Querido irmão, nem tudo
está perdido ainda
Deus dá vitória a quem busca,
espera e crê.
Se tua vida irmão, está nas mãos
de Deus . Por que desesperar?
O Senhor é fiel.
Cumpre o que prometeu
E não te deixará sozinho andar ao
léu. Espera no Senhor,
Ele concederá o que teu coração
desejando está.
E não vai demorar,
Tua vitória irmão,
bem pertinho está
Por que querer esconder-se na
caverna
Tal qual Elias certo dia se escondeu
Por que pedir para morrer se Deus
é vida
E dá a vida com abundância para os
seus. Irmão, não sei pelo que estais
passando
Mas sei que Deus conhece o teu
coração
Pra cada crente ele preparou um
plano. Por que temer, já tens a
vitória nas mãos.`},{id:`p45`,hymnal:`preciosas`,number:45,title:`Eu Nasci pra Te Adorar`,lyrics:`Quero a ti cantar louvor, quero te
glorificar. Por teus atos de amor,
pela graça que me dá
Teu espírito Senhor,
me ensina te louvar
E me fala ao coração,
Senhor...
que eu nasci pra te adorar

**Eu nasci pra te adorar, eu nasci
pra te adorar.
Eu nasci pra te adorar, Senhor...
eu nasci pra te adorar.**

Em tua casa, meu Senhor,
para sempre estarei
Só pra te render louvor,
dos teus átrios cantarei
E direi que és meu Deus,
comerei o teu maná
E prostrado adorarei,
porque ....
eu nasci pra te adorar

Quero entrar no teu altar
e cantar o novo hino
Como os anjos vou voar,
vou saltar como um menino
Vou entrar no lindo céu,
vou correndo te abraçar
Vou gritar e vou dizer pro céus,
que eu nasci pra te adorar.`},{id:`p46`,hymnal:`preciosas`,number:46,title:`Meu Deus É Fiel`,lyrics:`Eu posso dizer com convicção:
meu Deus é fiel
Eu posso falar, sem medo de errar:
meu Deus é fiel
Cumpre suas promessas, age na
hora certa:
meu Deus é fiel
Haja o que houver, eu continuo
dizendo:
que o meu Deus é fiel

**Meu Deus é fiel
Não falha jamais, não me deixa
só, socorro me traz
Se alguém me despreza, Ele diz:
Não temas, contigo estou!
Meu Deus é fiel
Minha fortaleza, em todas as
batalhas é minha defesa
Ele por mim peleja e me faz
vencedor:
porque Deus é fiel**

Quando estou chorando, Ele
enxuga meu pranto:
Meu Deus é fiel
Se entro na guerra, Ele luta por
mim:
Meu Deus é fiel
Se a tristeza me encerra, Ele vem e
me alegra:
Meu Deus é fiel
Se as ondas me cercam, Ele fala:
aquieta-te!
Porque Deus é fiel.

Meu Deus é fiel, é o Deus do
impossível:
Meu Deus é fiel
Ele humilha e exalta, Ele fere, Ele
sara:
Meu Deus é fiel
Ele é soberano e age como quer:
Meu Deus é fiel
Aquiete-se irmão, tua vitória é certa:
Porque Deus é fiel

Meu Deus é fiel, não me canso em
dizer:
Meu Deus é fiel
Não há quem impeça o seu
trabalhar:
Meu Deus é fiel
Se o inimigo me cerca, lançando
suas setas:
Meu Deus é fiel
Faz Satã recuar, pra o seu povo
marchar:
Porque Deus é fiel.`},{id:`p47`,hymnal:`preciosas`,number:47,title:`Vendaval`,lyrics:`Vagando pelas sombras
do meu Padecer
Sem ter aonde repousar
Guardando a certeza de um Dia ver
E ter aonde descansar
Meus pés estão marcados
pelo espinhar
Meu ser morre calado neste
Vendaval..
Vendaval... (4x)

Se em meio ao perigo tenho
que passar
Ficar seria meu Cair
Embora tanta dor queira me sufocar
No mar da vida mal daqui
A fé me dá coragem
No meu caminhar
Até chegar na Glória onde vou
morar
Vou Morar... (4x)

Irmãos se pelas sombras
tendes que passar
Andar na noite do teu ser
Confia que Jesus contigo vai estar
Cuidar de todo teu Viver
Meu Deus nunca,
jamais vai nos desamparar
Os seus de todas sombras
Ele livrará
Livrará... (4x)`},{id:`p48`,hymnal:`preciosas`,number:48,title:`Desejo Missionario`,lyrics:`Senhor tu sabes, do anelo que há
em Minh ‘alma
É como um fogo, bem aceso
em meu coração
Senhor pergunto,
porque é que eu não posso
Andar pelos países,
deste mundo perdido

**Eu quisera, ir ao campo
missionário Eu quisera,
Senhor ir a proclamar
Mesmo aqueles quase mortos,
sem saber que há um Deus
Eu quisera, eu quisera anunciar**

Somente tu, conhece os
meus problemas
Somente tu, Senhor me ajudará
Pois eu sei que em ti vivo, tudo em
mim podes fazer
Irei Senhor, aonde me ordenares

**Eu quisera ir ao campo
missionário
Eu queria Senhor ir a proclamar
Mesmo aqueles quase mortos
Sem saber que há um Deus
Eu quisera, eu quisera anunciar
Mesmo aqueles quase mortos
Sem saber que há um Deus
Eu quisera, eu quisera anunciar**`},{id:`p49`,hymnal:`preciosas`,number:49,title:`Dias de Guerra`,lyrics:`Tem dias que o dia acorda estranho,
e angústia bate e não tem tamanho
Dá vontade de chorar
Acalma, insista, se anima,
são dias pra lutar

Em dias de guerra, não mostre ao
inimigo a tua fraqueza
Mostre a ele quem está contigo na
peleja
E acalma, insista, se anima,
são dias pra lutar

Mas Eu bem sei, a matéria-prima que
Eu te formei
Eu já sabia que teria dias que tudo isso
ia pesar
E a pressão ia aumentar, ah
Mas eu te dou uma notícia
Quanto maior é a guerra,
maior a vitória será

**Eu tô cuidando, Eu tô zelando
Tô segurando, tô acalmando
Eu tô guiando, tô te moldando
E o resto é detalhe e
Eu estou anotando**

**Tá indo aos pouquinhos,
mas você vai chegar lá
O que é um vencedor,
sem suas guerras pra ganhar?
Mas fique sabendo que durante
esses dias
Contigo, Eu vou lutar, ah
Mas fique sabendo que durante
esses dias
Você pode confiar, ah
E vai pro campo de batalha,
Eu estou na retaguarda
Pode ir que Eu vou cuidar**

Mas Eu bem sei, a matéria-prima que
Eu te formei
Eu já sabia que teria dias que tudo isso
ia pesar
E a pressão ia aumentar, ah
Mas eu te dou uma notícia
Quanto maior é a guerra,
maior a vitória será

**Eu tô cuidando, Eu tô zelando
Tô segurando, tô acalmando
Eu tô guiando, tô te moldando
E o resto é detalhe e
Eu estou anotando**

**Tá indo aos pouquinhos,
mas você vai chegar lá
O que é um vencedor,
sem suas guerras pra ganhar?
Mas fique sabendo que durante
esses dias
Contigo, Eu vou lutar, ah
Mas fique sabendo que durante
esses dias
Você pode confiar, ah
E vai pro campo de batalha,
Eu estou na retaguarda
Pode ir que Eu vou cuidar**

**Eu vou cuidar, Eu vou cuidar, Eu vou
cuidar**`},{id:`p50`,hymnal:`preciosas`,number:50,title:`Sem Palavras`,lyrics:`Quando você fica triste
Desespero insiste em te abater
Angústia invade o seu peito
Você não tem mais o que fazer
Quando você senta e chora
E não tem ninguém pra te ajudar
Apenas dobre os seus joelhos
Se não tem palavras,
começa a chorar.

**Mesmo em gemidos o Senhor te
ouvirá!
Até sem palavras Ele vai te
responder!
Pois Ele entende quando você
quer chorar!
Sabe de tudo mesmo antes de
falar! Ele conhece o teu sofrer a
tua dor! Sabe perfeitamente onde
ela está! Por isso eu sei que
mesmo sem palavras
O Senhor te ouvirá!**

Ao dobrar os seus joelhos
em meio às lágrimas
Você clama a Deus
Sua voz é um gemido
Não tem palavras mais para pedir!
E em meio a sofrimento
Que causa lamento não sabe o que
fazer
Deus responde às orações
Deixa o Espírito Santo
falar com você.`},{id:`p51`,hymnal:`preciosas`,number:51,title:`Deus Está no Controle`,lyrics:`As vezes você fica a dizer
Meu Deus, até quando vou viver
assim?
As lutas parecem não ter fim
Assim não dá pra suportar
E você pensa em desistir
Mas Deus está a lhe dizer
Não temas eu vou lhe socorrer
Confia em Deus,
porque só ele tem poder
Sua palavra diz que tudo é possível
ao que crê

**A tormenta da sua vida vai passar
Esse vento forte não vai lhe
derrubar
O inimigo vai tentar lhe fazer
parar  Mas Deus não vai deixar
Deus está no controle da situação
Não se preocupe
não desanimes não
Estenda com fé suas mãos agora
Tome posse da tua vitória**

Não deixe em teu rosto transparecer
Tanta angustia e sofrer
Cante um hino de louvor, se alegra
no Senhor
E na força do seu poder
Não pense que Deus lhe esqueceu
Ele jamais esquece um filho seu
Deus lhe ama e pode nisso
acreditar
Ele entra com você nesta batalha
pra ganhar`},{id:`p52`,hymnal:`preciosas`,number:52,title:`Mestre`,lyrics:`Mestre!
A morte chegou
E o meu filho levou,
não sei o que fazer
Mestre!
A notícia abalou
O coração se calou,
então só eu fiquei.

E a multidão consolava,
Aquela pobre mulher
Mas por ali passava,
o homem de Nazaré
Deteve aquela multidão,
e o povo estremeceu
Jesus estendeu sua mão,
e o morto reviveu

Pra glória de Deus, a multidão abalou,
abalou, abalou                                A
multidão abalou, abalou, abalou,
abalou

Quando ele chega o lugar estremece
Quando ele manda até morto obedece
Quando ele fala qualquer um se cala
pra lhe escutar
Quando ele fala, falou tá falado  Ama o
pecador mas detesta o pecado
Está na igreja, venceu a peleja,
é leão de Judá

Vou erguer a bandeira da
vitória e cantar
O fogo pega no pavio que fumega,
quanto mais o fogo pega,
mais tem fogo pra pegar`},{id:`p53`,hymnal:`preciosas`,number:53,title:`Minha Benção`,lyrics:`Já na alva luz do dia a raiar
Lá estava a cena que me
impressionou
Um anjo preso a Jacó
Que por sua bênção lutou
E jamais desistiu

Não largava o anjo ele muito insistiu
Não sairia dali, sem sua bênção
nas mãos
De tanto ele insistir,
o anjo lhe tocou
E abençoado ele foi

**Preciso de uma bênção
não vou desistir
Sem ela eu não vou sair daqui
Só saio quando o Senhor me
tocar Não posso mais ficar sem te
sentir Nada vai impedir a unção
de Deus sobre mim (2x)**`},{id:`p54`,hymnal:`preciosas`,number:54,title:`Deus Faz`,lyrics:`Se na frente está o mar vermelho e
atrás vem faraó
Se apresenta o desespero.
Deus não vai deixá-lo só
Vai rasgar o mar ao meio
pra você  passar
Ele é o único Deus verdadeiro e
vai te ajudar

Deus despedaça a lança e quebra
o arco do inimigo
Seu povo atravessa o mar em terra
seca sem correr perigo
Abre a porta fechada e entrega
aos Seus os tesouros escondidos,
Deus faz. Deus faz,
Faz dos ventos mensageiro e de
Seus ministros fogo abrasador
A nuvem de dia, a coluna à noite,
guia Seu povo por onde passar
Abate o soberbo levanta o caído.
Ele é poderoso, nunca vai mudar
Se você é temente, Deus está na
frente, tenha certeza
A vitória virá.

Ele é Senhor dos exércitos,
Ele é o senhor Jeová.
Ele é o senhor,
nunca vai mudar.`},{id:`p55`,hymnal:`preciosas`,number:55,title:`Outra Vez o Mar`,lyrics:`Outra vez o mar, meu barco
balançou. E o forte vento, então,
de novo me assolou
Mas desta vez, Senhor,
sozinho me senti
Pois quando eu olhei no barco
não te vi
Então quando eu pensei
que ia perecer. Andando sobre o
mar Jesus eu pude ver
Em minha direção sua
mão se estendeu
No mesmo instante o mar e
o vento, repreendeu

**Aí eu entendi que cuidarás de
mim  E mesmo sem te ver eu sei
que estais aqui
Se firme esta minha fé eu posso
descansar
Te amo, oh, Senhor, perdão por
reclamar**

Então quando eu pensei que ia
perecer
Andando sobre o mar Jesus eu
pude ver
Em minha direção sua mão se
estendeu
No mesmo instante o mar e o vento,
repreendeu.

**Se firme esta minha fé eu posso
descansar, Te amo, oh, Senhor,
perdão por reclamar
Se firme esta minha fé, posso
andar sobre o mar. Te amo, oh,
Senhor, perdão por reclamar**`},{id:`p56`,hymnal:`preciosas`,number:56,title:`Esperamos`,lyrics:`Jesus teu povo Te chama
Teu povo te clama, para que venhas
Jesus tua noiva canta
E as mãos levanta, porque Te
espera

Oh! vem, em tua nuvem de gloria
Oh! vem coroado em vitória (2x)

Vem Senhor Jesus
E abre os céus com poder
Oh vem! Oh vem!
Desce pra reinar
Com autoridade e majestade
Oh vem! Oh vem.

Jesus teu povo Te chama
Teu povo te clama, para que venhas
Jesus tua noiva canta
E as mãos levanta,
porque Te espera

Oh! vem, em tua nuvem de gloria
Oh! Vem, coroado em vitória (2x)

Vem Senhor Jesus
E abre os céus com poder
Oh vem! Oh vem!
Desce pra reinar
Com autoridade e majestade
Oh vem! Oh vem.

Verás!

Todo olho Te verás e todo mundo
dirá

Que tu És o Senhor, sobre a terra.

Verás!

Todo olho Te verás e todo mundo
dirá

Que tu és o Senhor, sobre a
terra.(2x)

Cristo te esperamos
Volta logo, vem por favor ...
Vem que te esperamos
Volta logo óo vem já.

Cristo te esperamos
Volta logo, vem por favor
Vem que te esperamos
Volta logo óo vem já. (4x)

**Verás!
Como Te esperamos
E todo mundo dirá
Que Tu és o Senhor, sobre a
terra.**

Verás!
Todo olho te verá e todo mundo dirá
que Tu és o Senhor,
sobre a terra (2x)`},{id:`p57`,hymnal:`preciosas`,number:57,title:`Que se Abram Os Céus`,lyrics:`Deus ,Tu és bem vindo aqui
E em nosso coração
Toma a direção

Deus, te queremos conhecer,
com teu fogo abrasador,
Vem e move- te outra vez!

Espírito, aviva-nos,
Te desejamos Deus!
Te desejamos Deus!...

Estou de pé
Na presença do Rei
Tua glória está aqui
Teu amor liberta-me

Estás aqui
No trono de louvor
Tua presença me curou
Fascinado estou.

Espírito, Aviva-nos
Te desejamos Deus! (3x)

Oh oh oh oh... (2x)

Que se abram os céus
Move- te Senhor
Vem aqui teu reino
Grande Deus (4x)

Que os céus fechados se abram
Teu reino se move aqui
A nossa fé e esperança
Estão em Deus,
Grande Deus (2x)

Oh, oh, oh, oh... (2x)

Que os céus fechados se abram
Teu reino se move aqui
A nossa fé e esperança
Estão em Deus,
Grande Deus.

Que os céus fechados se abram
Teu reino se move aqui
A nossa fé e esperança
Estão em Deus,
Grande Deus (3x)

Oh oh oh oh... (2x)`},{id:`p58`,hymnal:`preciosas`,number:58,title:`Ela Canta`,lyrics:`Quem disse que você é frágil e
não é capaz
Quem disse que você não pode, que
você não faz
A sua força não vai ser medida
pelo braço
A sua força vem de dentro vem
da sua fé
Eu sei que é difícil muitas vezes
prosseguir
Olha pro lado e não vê quem
você queria aqui
Continue adorando e servindo
ao senhor
Pois Deus está te vendo e vai   traze-
los com amor

Não pare, prossiga, avance e insista
Mulher de oração Deus está entrando
em ação                                     Não
temas, confia, coragem, vigia   Mulher
de valor Deus está
ouvindo seu clamor
Levante a cabeça e não retroceda você
vai cantar vitória

A mulher guerreira,
a mulher que ora
A mulher que luta,
a mulher que adora
Ela vence qualquer luta
qualquer prova
Deus é quem garante a sua vitória
A mulher guerreira a mulher que ora
Ela não desiste,
não murmura e canta
Mesmo que o inferno contra
ela se levanta
Ela canta, ela canta

Ela canta, ela canta,
Ela canta o hino da vitória (2x no final)`},{id:`p59`,hymnal:`preciosas`,number:59,title:`Renovo`,lyrics:`Pai, me dá disposição para aprender
de ti                                          Me da
disposição pra mergulhar            No
mar da oração mais uma vez.    Pai, eu
quero ser levado por                      tua
direção
Ouvir tua palavra e entender
Com suprema exatidão o que
quer de mim.

Eu não vim aqui pedir mais
um milagre
Eu não vim aqui apenas
de passagem
Hoje eu vim aqui pra
te servir melhor.. (2X)

Renovo, o que eu quero é renovo Pra
te sentir de novo, de novo Renovo, o
que eu quero é renovo Pra ter o brilho
no rosto de novo

Eu não vim aqui pedir mais um milagre
Eu não vim aqui apenas de passagem
Hoje eu vim aqui pra te servir melhor
(2X)

Renovo, o que eu quero é renovo Pra
te sentir de novo, de novo Renovo, o
que eu quero é renovo Pra ter o brilho
no rosto de novo

Toca-me, toca-me
Nem mais um passo darei
Nada farei sem ti (4x)

Tem renovo na casa, tem
Tem renovo na casa, tem
Tem, tem, tem
Tem renovo na casa, tem
Tem renovo na casa, tem
Renovo... tem

Renovo, o que eu quero é renovo Pra
te sentir de novo, de novo Renovo, o
que eu quero é renovo Pra ter o brilho
no rosto de novo`},{id:`p60`,hymnal:`preciosas`,number:60,title:`Cadeias Quebrar`,lyrics:`Há poder no nome de Jesus (3x)
Pra cadeias quebrar, Cadeias
quebrar

**Há poder no nome de Jesus  (3x)
Pra cadeias quebrar
Cadeias quebrar, cadeias quebrar
Cadeias quebrar, cadeias
quebrar, cadeias quebrar**

Alto preço ele pagou
Tão livremente se entregou
Por nossa redenção se deu
E o céu se abriu (eu creio)

**Há poder no nome de Jesus  3x
Pra cadeias quebrar
Cadeias quebrar, cadeias quebrar
Cadeias quebrar, cadeias
quebrar, cadeias quebrar.**

Um exército surgiu  3x
Pra cadeias quebrar
Cadeias quebrar, cadeias quebrar

Um exército surgiu (3x)
Pra cadeias quebrar
Cadeias quebrar, cadeias quebrar
Cadeias quebrar, cadeias quebrar,
cadeias quebrar.

Ouço cadeias quebrando
Ouço cadeias quebrando
Ouço cadeias quebrando
(quebrando em nome de Jesus)
Ouço cadeias quebrando
(toda cadeia da enfermidade,
quebra)
Ouço cadeias quebrando
(ouço prisões que se abrem agora)
Ouço cadeias quebrando
(em nome de Jesus)
Ouço cadeias quebrando

Há poder no seu nome Jesus

Pra cadeias quebrar
Cadeias quebrar, cadeias quebrar
Cadeias quebrar, cadeias quebrar,
cadeias quebrar

FINAL: Há poder no nome de Jesus!`},{id:`p61`,hymnal:`preciosas`,number:61,title:`O Pai Te Espera`,lyrics:`Tu me pediste parte dos bens que
eu tinha. Pegou tudo e pelo mundo
foi sem direção
Nem mesmo um abraço em mim
você deu. Me magoou ferindo o
meu pobre coração. Meu filho não
me aborreço com mais nada
E na calçada me assentei e
vou te esperar
Um dia quem sabe lá,
Deus você desista
E pro seu velho pai então ira voltar

**Não vale a pena ficar no mundo
Deixando o lugar vazio a lhe
esperar.
Volta correndo, teu pai te espera
Vai ter festa quando você voltar**

Deus está falando com você agora
Que deixou o lugar vazio e
se afastou
Volta correndo meu irmão
ainda é tempo
O pai te espera com carinho e
com amor
Não se incomode com os
comentários que houverem
Se teu irmão não entender o que
Deus vai dizer
Pois um anel e roupas limpas
te esperam
E uma festa lá no céu os
anjos vão fazer.`},{id:`p62`,hymnal:`preciosas`,number:62,title:`Cem Ovelhas`,lyrics:`Eram cem ovelhas,
juntas no aprisco
Eram cem ovelhas,
que amante cuidou
Porém numa tarde,
ao contá-las todas
Lhe faltava uma,
lhe faltava uma e triste chorou

**As noventa e nove, deixou no
aprisco
E pelas montanhas, a buscá-la foi
A encontrou gemendo,
tremendo de frio
Curou suas feridas,
pois logo em seus ombros e ao
redil voltou. 3x final**

Essa mesma história,
volta a repetir-se
Pois muitas ovelhas, perdidas estão
Mas ainda hoje, o pastor amado
Cura suas feridas,
cura suas feridas.
E quer te salvar`},{id:`p63`,hymnal:`preciosas`,number:63,title:`Além da Medicina`,lyrics:`A dor de procurar
e não achar uma saída
É tão sofrido ver alguém
perder a vida
O desespero toma conta do coração
A dor de se clamar a
petição não respondida
De esperar e ver a vida destruída
E concluir que não existe mais o
que fazer

Mas Ele vem aí, e vem pra decidir
Se o teu caso está perdido,
Ele faz o impossível
Pois Ele tem poder,
Ele te faz vencer
Sim, Ele é o teu amigo,
o seu nome é Jesus Cristo

Sim foi Ele quem apareceu
Depois de quatro dias que
Lázaro morreu
Naquela tumba fria, já não existia
Uma esperança, uma solução
Sim foi Ele mesmo quem falou
Que Ele é a vida e a ressurreição
Quando Ele disse: Lázaro,
sai para fora!
Ele surpreendeu aquela multidão

Ele vai além da medicina
Quando Ele estende as sua mãos
Quando não se tem saída, quando
já se perde a vida
Ele ainda tem a solução
(Jesus, Jesus)`},{id:`p64`,hymnal:`preciosas`,number:64,title:`Espírito de Adorador`,lyrics:`Entoarei louvores,
Não cessarei meu canto,
Não pouparei a carne,
Mesmo na dor,
Pra o meu Senhor eu canto...(2x)

Mesmo que não haja peixes no mar
Mesmo que não haja estrelas no
céu
Mesmo que o sol venha escurecer
O meu Deus permanece fiel
Eu não posso retroceder,
Meu espirito é de adorador
Te amo, te adoro Senhor...

Um fogo arde no meu coração,
Uma alegria invade o meu ser,
Eu não consigo controlar a emoção
Meu desejo é saltar e correr
Ha uma chama que queima
por dentro
Por isso eu não posso parar,
Vou aproveitar o momento,
vou adorar.

**...Cantando louvores...a Deus!**`},{id:`p65`,hymnal:`preciosas`,number:65,title:`Jó`,lyrics:`Jó, como pode ainda adorar
Se não tem motivos pra cantar?
Abandona esse Deus e morre

Mas não O adoro pelo que Ele faz
Nem menos por bens materiais
Eu O adoro pelo que Ele é
Eu sou d’Ele, tudo é d’Ele

Jó, você não tem motivos
Perdeu os seus bens, seus filhos,
seus amigos
O que você vai fazer?

Eu vou adorar, simplesmente adorar
Eu vou adorar

Deus me deu, Deus tomou
Bendito seja o nome do Senhor!
A Ele a glória, a Ele a honra e o
louvor

Jó, como pode ainda adorar
Se não tem motivos pra cantar?
Abandona esse Deus e morre

Mas não O adoro pelo que Ele faz
Nem menos por bens materiais
Eu O adoro pelo que Ele é
Eu sou d’Ele, tudo é d’Ele

Jó, você não tem motivos
Perdeu os seus bens, seus filhos,
seus amigos
O que você vai fazer?

Eu vou adorar, simplesmente adorar
Eu vou adorar

Deus me deu, Deus tomou
Bendito seja o nome do Senhor!
A Ele a glória, a Ele a honra e o
louvor

A Ele a glória.... A Ele a glória
A Ele a glória... A Ele a glória

A Ele a glória (oh, a Ele a glória)
A Ele a glória (Ele merece toda a
glória)
A Ele a glória
Pra sempre, Amém
Amém!

Deus me deu, Deus tomou
Bendito seja o nome do Senhor!
A Ele a glória,
A Ele a honra e o louvor
Deus me deu, Deus tomou
Bendito seja o nome do Senhor!
A Ele a glória,
a Ele a honra e o louvor

A Ele seja dado o louvor
Te damos todo o louvor, Senhor!`},{id:`p66`,hymnal:`preciosas`,number:66,title:`Santo`,lyrics:`**Santo, Santo, Santo, Santo,
Santo, Santo**

Isaías teve uma grande visão
Viu os anjos cantando em Sião
Em volta do seu Deus,
cantavam assim
Santo, Santo, Santo
Santo, Santo é Deus
Cantavam os Serafins.

**Mas os anjos cantavam:
(Santo, Santo)
Cantavam:(Santo, Santo)
Assim: Santo, Santo é Deus
Cantavam os Serafins**

Isaías atemorizado muito ficou.
E disse: "Ai de mim, que vou
perecer, pois vi o Senhor".
"Eu sou um homem de lábios
impuros, e habito no meio de um
povo de impuros lábios"
"E os meus olhos viram o Senhor".

Um anjo de Isaías se aproximou
Com uma tenaz,
os seus lábios queimou
Ele foi purificado,
e por Deus foi transformado
Foi quando uma voz ele ouviu dizer:
"A quem enviarei? Quem há de ir
por nós?"
Ele disse:" Eis- me aqui Senhor,
envia-me a mim" (2x)`},{id:`p67`,hymnal:`preciosas`,number:67,title:`Na Alegria Ou na Dor`,lyrics:`Mesmo que não haja fruto na videira
Mesmo que não haja
flores no jardim
Até mesmo que a figueira
não floresça
Nem chova na terra nem
a erva cresça
Há um Deus no céu
olhando para mim
O que eu não posso é ficar calado
Estando feliz ou mesmo atribulado
Ainda louvarei seu nome mesmo
assim.

**Eu louvarei ao Senhor.
Na alegria ou na dor
Cantarei! Ele é o meu Salvador
Ele é o meu Senhor.
Ele é Rei! (2x)**

Mesmo que o fruto da figueira minta
Mesmo que não haja chuva
sobre a terra
Mesmo que não haja
ovelhas no curral
Mesmo que na terra
sobrevenha o mal
Louvarei seu nome na
paz ou na guerra
Louvarei seu nome enquanto viver
E quando aqui da terra eu
desaparecer
Nem mesmo assim o meu louvor
encerra`},{id:`p68`,hymnal:`preciosas`,number:68,title:`Esse Adorador`,lyrics:`Como Davi, eu quero adorar
Diante da morte, não vou me
prostrar
Ele adorou, naquela situação
Depois que o filho morreu
Será que pode ser assim, nos dias
de hoje?
Mesmo na decepção, Deus achar
um adorador?
É muito difícil, na provação louvar
Abrir mão da própria dor e o adorar.

**Esse adorador,
já amanhece adorando
Esse adorador,
já tem milagre esperando
Esse adorador,
quando abre sua boca
Faz inferno estremecer
Esse adorador,
não tem momento e nem hora
A qualquer momento,
ele se ergue e adora
Porque sabe que sua adoração,
move a mão de Deus.**

Ele entrou, no templo para adorar
Deixou seu luto, deixou seu lar
Queria saber, o pensamento de
Davi no momento dessa adoração.
O coração de Deus se derreteu
Ao ver Davi, romper seu luto,
foi o que escolheu
Davi se prostrou, rasgou o seu
coração. Deus curou a sua dor
através da sua adoração.

Move a mão de Deus,
Move a mão,(move a mão)
Move a mão de Deus
Adore, adore, adore, adore, adore,
adore, adore ,adore
adore, adore, não importa a
situação.
Adore, adore, adore, adore,
adore, adore,
adore, não importa a situação.
Adore, adore, adore, adore, adore,
adore, adore
Adore meu irmão.
Adore, adore, adore, adore, adore
Adore, adore, não importa a
situação.

**FINAL:
MOVE A MÃO DE DEUS
MOVE A MÃO DE DEUS
ADORE...**`},{id:`p69`,hymnal:`preciosas`,number:69,title:`Deixa Senhor`,lyrics:`Na hora de Deus, Jesus descerá Como
raio reluzente                      Que
explode no oriente
Jesus Cristo descerá.

Aquele que é vaso já transborda
Na glória, no poder e na unção
O Espírito de Deus em movimento Os
anjos vão entrando em ação Tomando
a vida imortal Transformando com um
toque sobrenatural
Ossos, carne, sangue,
pele e coração.

Quando em corpo glorioso
Deus me transformar
Nada nesse mundo me impedirá
De subir no alto
Com asas de anjos e corpo de luz Em
algum lugar nos ares desse céu azul.
Encontrarei aquele que
morreu na cruz
Diante dos salvos, Diante dos anjos
Direi a Jesus.

Deixa te dizer que eu te amo
Que há muito tempo sonho
Olhar dentro dos teus olhos
E dizer te adoro
Deixa eu beijar O rosto santo
De quem enxugou meu pranto
Na ternura de um sorriso ver o paraíso.

Deixa Senhor
Te falar como é grande
O meu amor por ti
Deixa Senhor
Declarar para o céu
O quanto eu te amo
Deixa, ó deixa
Deixa eu te falar o meu amor
Deixa, ó deixa
Eu dizer que sou O teu adorador.`},{id:`p70`,hymnal:`preciosas`,number:70,title:`Se Isto Não For Amor`,lyrics:`Deixou o esplendor de sua glória
Sabendo o destino aqui
Estava só e ferido no Gólgota
Para dar sua vida por mim

**Se isto não for amor,
o oceano secou
Não há estrelas no céu, as
andorinhas não voam mais
Se isto não for amor,
o céu não é real
Tudo perde o valor,
se isto não for amor**

Mesmo na morte lembrou-se
Do ladrão que ao seu lado estava
Com amor e ternura falou-lhe
Ao Paraíso, comigo irás`},{id:`p71`,hymnal:`preciosas`,number:71,title:`Quem Peleja É Jeová`,lyrics:`O dia é hoje,
e a hora, é agora irmão,
É o fim do cativeiro, é hoje a
libertação.
Não tem mar vermelho e nem faraó
para lhe deter
Se Jeová vai na frente por que
temer.
O mar vermelho se abre irmão,
deixa faraó com Deus.
O compromisso do Senhor é com os
Hebreus.

**Entra na fornalha ardente,
Ele abre o mar,
Ele para o sol e detém a lua,
Ele Põe leão pra jejuar,
Acredite a vitória é sua,
Porque quem peleja é Jeová
Quem peleja é Jeová.**

Irmão a sua angustia, o
Senhor vai por um fim,
Caiu uma muralha porque Deus
determinou assim,
Agradeça ao senhor por tudo que
Ele fez,
Quem já abriu o mar vermelho,
abre outra vez.
Quem deu vitória a gideão,
trouxe a benção pra você.
Se Jeová vai na frente
porque temer.`},{id:`p72`,hymnal:`preciosas`,number:72,title:`É Madrugada`,lyrics:`É madrugada
E outra vez você perdeu o sono
Final da estrada
Desabaram tantos planos, tantos
sonhos
As lutas são demais
No teu rosto vejo lágrimas rolarem
Mas, filho, não desista de lutar
Porque eu estou contigo a toda hora

Eu sempre te amei
E andar sozinho nunca te deixei
Nos meus braços eu te carreguei
Por isso, filho meu, não pare agora.

**As portas vão se abrir
A tempestade vai passar
A vitória vai surgir
A tua benção vai chegar
Fui eu quem te escolhi
E nunca vou te abandonar
E nas minhas mãos você vai
descansar (2x no fina)l**`},{id:`p73`,hymnal:`preciosas`,number:73,title:`Consolador`,lyrics:`**Consolador, não sai daqui
Meu peito dói, minha alma chora
Se Tu sair
Consolador, mora em mim
Sinto um vazio quando
estou longe de Ti**

Perdoa o meu coração
Das vezes que errei sem perceber Mas
não afaste Sua presença
Seus frutos me fazem viver

**Consolador, não sai daqui
Meu peito dói, minha alma chora
Se Tu sair
Consolador (Espírito Santo), mora
em mim
Sinto um vazio quando estou longe
de Ti**

Perdoa o meu coração (Espírito Santo)
Das vezes que errei sem perceber
Mas não afaste Sua presença
Seus frutos me fazem viver

Quando minha alma se cansou Fostes
minha força pra seguir Quando o meu
coração calou Fostes intercessor, o
meu Ajudador O meu Consolador Fiel

Consolador (Oh Espírito Santo)
Não sai daqui (Não sai de dentro de
mim) Meu peito dói (meu peito dói)
Minha alma chora (minha alma chora)
Se Tu sair (quando não Está aqui)
Consolador, mora em mim
Sinto um vazio quando
estou longe de Ti
Longe de Ti...`},{id:`p74`,hymnal:`preciosas`,number:74,title:`É Só Clamar`,lyrics:`Quem disse pra você que você não
vai conseguir?
Quem disse pra você que o Senhor
te esqueceu?
Não conhece o teu Deus,
não conhece o teu Deus
Ele vai agir

E sob sua fé, Ele entra em ação
E prova pra você que você é um
campeão
Ele te estende a mão,
Ele te estende a mão
Ele é fiel

**É só você clamar é só você
chorar  É só você pedir que a
benção vai chegar
Se Ele prometeu, você pode crer
vai te abençoar
Não tem tempestade,
não tem vendaval
Não tem inimigo nem mesmo
Baal O teu Deus é grande,
repreende todo mal**`},{id:`p75`,hymnal:`preciosas`,number:75,title:`Sobrevivi`,lyrics:`O vento não me derrubou,
o medo não me parou
A guerra me feriu,
mas a experiência ficou
Eu não me calei e não vou me calar
Enquanto houver fôlego, vou adorar
Posso até ter caído na guerra, mas
caído não vou ficar

Sei que esse vento vai passar
Também sei que o meu milagre vai
chegar
Deus conhece a minha história,
sabe tudo sobre mim
É só olhar pra  trás para ver quantas
guerras já venci

**Sobrevivi adorando,
Sobrevivi confiando
Sobrevivi, não desisti,
Deus cuida de mim
Sobrevivi adorando,
Sobrevivi confiando
Sobrevivi, não desisti,
Deus cuida de mim**

Ele cuida da tua casa,
cuida da família
Cuida do trabalho,
Ele cuida da tua vida
Cuida do ministério,
cuida da saúde
Cuida dessa igreja, Ele cuida de ti

Adore, que Ele cuida,
Exalte, que Ele cuida
Glorifique, que Ele cuida,
Louve a Ele que Ele cuida
Receba força, receba alegria
Receba equilíbrio, unção de ousadia

Essa guerra não te mata
vai te fortalecer
É nesse deserto que Deus vai prover
Se prepare, tem novidade chegando
pra você
Deus dá força ao cansado,
levanta o caído
Exalta o humilhado, Ele cuida do ferido
Enquanto você adora Ele aqui
Ele cuida de tudo pra você

Então adore, que Ele cuida,
Exalte, que Ele cuida
Glorifique, que Ele cuida,
Louve a Ele que Ele cuida
Se alguém perguntar como você
venceu
Você vai dizer assim:

**Sobrevivi adorando,
Sobrevivi confiando
Sobrevivi, não desisti,
Deus cuida de mim
Sobrevivi adorando,
Sobrevivi confiando
Sobrevivi, não desisti,
Deus cuida de mim**

**Ele cuida de mim**`},{id:`p76`,hymnal:`preciosas`,number:76,title:`Eu Não Mudo`,lyrics:`Filho, eu já te vi, sei como estás
A palavra Eu Não Mudo que eu
falei acontecerá
E porque entristece o teu coração
Se a vitória é certa,
passa o vento e chuva
Mas chega o verão

**Quando Abraão clamou no altar
eu respondi
Quando Daniel entrou na cova lá
cheguei
Quando os três jovens entrar no
fogo lá desci
Quando José foi vendido
encontrei
Quando Josafá me invocou
entrei na guerra
Quando Mardoqueu foi
humilhado, Eu defendi
Quando Josué estava lutando
o sol parou
Quando Israel se viu aflito eu ouvi
Eu não mudo, Eu não mudo
Eu não mudo ,
Filho nunca mudei
Eu não mudo, Eu não mudo
Porque choras assim
Olha para mim eu não mudo.**

Quantas vezes tua alma,
quer desesperar
Dizendo o tempo da minha vitória
nunca virá
Cada tempo que passa,
a tua alma chora
Tentando vencer,
mas Deus manda dizer
Sou o dono da Glória

**Solo de Guitarra**

É chegado o momento,
vou te responder
Todo este silêncio do tempo de
prova vai resplandecer
Marque a hora, e minutos também
Meu relógio não para, e na hora
marcada tua vitória vem

** CORO FINAL:
Eu não mudo, Eu não mudo
Eu não mudo ,
Filho nunca mudei
Eu não mudo, Eu não mudo,
É só glorificar que a vitória virá,
Eu não mudo
É só glorificar que a vitória vira
O meu nome é sempre, e sempre,
e sempre sempre será**`},{id:`p77`,hymnal:`preciosas`,number:77,title:`A Volta do Rei`,lyrics:`A qualquer momento iremos ouvir
O som da trombeta soar
Os crentes remidos de todas as
nações. Ouvirão a trombeta soar
A igreja de Cristo vai reconhecer
Quando aquela trombeta soar
O arrebatamento vai acontecer
Quando o som da trombeta soar
Dia de grande dor e de muita aflição
Para quem não se preparou
Dia lindo, de glória e de muito louvor
Para aquele que espera o Senhor

**Pode ser hoje a volta do Rei
Pode ser hoje a volta do Rei
Tudo nos mostra que o fim está
próximo, eu sei
Pode ser hoje a volta do Rei**

O céu vai se abrir e Ele aparecerá
Jesus Cristo nas nuvens
todo olho há de ver
Os mortos em Cristo ressuscitarão
Corpo glorificado vamos receber
Uma voz de comando como
de um general
Levando as tropas, iremos ouvir
A trombeta de Deus é o
grande sinal
Isso significa é o começo do fim
Satanás dominado e a morte vencida
É o fim do sofrimento da igreja querida
Que aguarda o amado como prometeu
Voltar e levar sua noiva pra o céu.

Vai abrir o grande livro da vida, Jesus
vai abrir
E com sua voz tão linda meu nome
quero ouvir. Jesus Cristo chamar
E dirá, vem bendito de Deus
Para o reino que vos preparado está
Quero te perguntar:
Se Ele voltar agora pra levar-nos pra o
céu. Será que vais subir?
Se num piscar de olhos Jesus
aparecer. Será que vais subir?
É chegado o momento de nos preparar
Não sabemos a hora em Cristo virá
Mas eu sei que Ele vem, eu sei
Eu sei que Ele vem
Então guarda o que tens

Declamação:
"Jesus está voltando
Estamos vivendo os últimos momentos
da igreja do SENHOR aqui na terra.
É pai contra filho, irmão contra irmão.
Reino contra reino, nação contra nação
E a Bíblia nos diz quando isso
acontecer.
É somente o começo do fim
Ele surgirá das nuvens com
poder e muita glória
Os mortos ressuscitarão primeiro
E nós que estivermos vivos seremos
transformados
A Bíblia nos afirma que aquele que
vencer. Será chamado filho de Deus e
se assentará com ele em seu trono. E
receberá das mãos do próprio Deus
uma coroa de glória Santificai-vos,
santificai-vos
Prepara-te ó Israel para encontrares
com o teu Deus!"

**Pode ser hoje a volta do rei,
( a volta do rei...Jesus.....)**`},{id:`p78`,hymnal:`preciosas`,number:78,title:`De Joelhos`,lyrics:`De joelhos, enfrentamos lutas
O inimigo tentou nos desanimar
Não foi fácil, quantas lágrimas
Derramadas para Deus neste lugar
Muitas vezes pensamos em desistir
Mas o Espírito de Deus com seu
agir. Nos mostrou que de joelhos
Não há luta que possa resistir

Não foi fácil, quantos levantes
Mas não foram o bastante
para nos vencer
Nos unimos destruindo as
diferenças
Pra cantar vitória hoje estamos aqui
De joelhos quem é crente não
desiste
Mas vai até o fim

**Pois de joelho a gente
pede e recebe
A porta se abre, a providência
vem De joelhos Deus resolve o
problema Tira toda contenda e
não tem pra ninguém
De joelhos não há mal que resiste
Potestade se rende à unção do
céu vem
De joelhos nós pedimos só glória
Clamamos a Deus,
Ele nos mandou vitória....**

FINAL:
Vitória ... nos mandou vitória...
Vitória`},{id:`p79`,hymnal:`preciosas`,number:79,title:`Buscar Tua Face`,lyrics:`Quando tudo parece estranho ao
redor
Buscar tua face é preciso, Deus
Quando a gente não sabe o que
está ocorrendo
Buscar tua face é preciso, Deus
Quando a fúria dos ventos vem
contra nós
E a vontade é sumir e calar a voz.

**É nessa hora que a gente precisa
lutar.
E jamais desistir
Justamente agora é o momento
de se humilhar
E buscar a face de Deus (2x)**

Mirar no alvo das portas do inferno
E arremeter com fúria e fé contra
elas
Completamente ungido e revestido
de poder
Equipado com as armas de guerra

Não parar de orar
Não parar de adorar
Não parar de profetizar
Não parar de interceder

Não parar de vigiar
Não parar de lutar
Não parar de sonhar, não parar
Não desistir do chamado.`},{id:`p80`,hymnal:`preciosas`,number:80,title:`Começa o Dia`,lyrics:`Começa o dia, na manhã
de sexta-feira
Jesus vai levando a cruz,
em direção ao Caveira
A multidão, curiosa acompanhava
Muita gente escarnecia, poucas
mulheres choravam
Quando chegaram,
ao lugar determinado
Crucificaram Jesus,
e um ladrão de cada lado
Na cruz pregado,
fala o Príncipe da Paz
Pai perdoa a multidão, ela não sabe
o que faz.

**Como um cordeiro não abriu a
sua boca
Mesmo tendo a voz tão rouca,
pelo homem intercedeu
E lá na cruz, meu Jesus foi
pendurado
Pra tirar os meus pecados
Oh! como Jesus sofreu!**

Todos zombavam, os soldados
escarneciam
Ofereceram vinagre, pra ver se
Jesus bebia
Lhe maltratavam, com palavras e
pancadas
Mesmo assim Jesus amava,
e pelo homem intercedia
Um dos ladrões, blasfemava
enfurecido

Mas o ladrão da direita, já estava
arrependido
Disse: Jesus, lembra de mim, eu
preciso
Jesus disse: Hoje mesmo estarás
no paraíso

**(VOLTAR AO CORO)**

À hora sexta, toda Terra
estremeceu
Nesta hora o Sol não deu, sua
refulgente luz
O véu do templo, de alto a baixo
se rasgou
Toda Terra demonstrou seu respeito
por Jesus
Pegaram o corpo de Jesus e
sepultaram
Guardas ali colocaram,
pra pastorar o Senhor
Quando pensavam, ter um Cristo
derrotado
No domingo constataram que Jesus
ressuscitou`},{id:`p81`,hymnal:`preciosas`,number:81,title:`Se o Mar Não se Abrir`,lyrics:`Muitas guerras já venci
pra chegar até aqui
Só Deus sabe
Quantas noites eu chorei
Os gigantes que enfrentei
Só Deus sabe

Inimigos vi cair,
até o mar vi Deus abrir
Eu vivo de milagres
E somente as mãos de Deus
Pra fazer alguém como eu
Sobreviver às tempestades

Eu não estou sozinho
Deus sempre está comigo
Ele é meu amigo
Jesus está comigo

**Se o mar não se abrir
Deus vai me fazer andar por
sobre as águas
Não vou me afligir
Eu sei que esse problema
para Deus é nada
Chorando vou seguir,
eu não vou desistir
Eu sei que o céu me guarda**

Eu não estou sozinho
Deus sempre está comigo
Ele é meu amigo
Jesus está comigo

**Se o mar não se abrir
Deus vai me fazer andar por
sobre as águas
Não vou me afligir
Eu sei que esse problema
para Deus é nada
Chorando vou seguir,
eu não vou desistir
Eu sei que o céu me guarda (2x)**

Firme, firme
Firme nas promessas de Jesus,
o Cristo
Firme, firme
Sim, firme nas promessas
de Jesus (2x)

**Se o mar não se abrir
Deus vai me fazer andar por
sobre as águas
Não vou me afligir
Eu sei que esse problema
para Deus é nada
Chorando vou seguir,
eu não vou desistir
Eu sei que o céu me guarda**`},{id:`p82`,hymnal:`preciosas`,number:82,title:`Sacrificio de Adoração`,lyrics:`"Desde a antiguidade Deus habita no

meio dos louvores

Jesus disse que: "Aquele que oferece

sacrifício de louvor, me glorificará"

Não encobriremos dos nossos filhos

Mostrando à geração futura o que é

sacrifício de louvor

Assim como a sua força e as

maravilhas que Ele faz

Porque não lembrar de Paulo e Silas

Quando adoravam na prisão e as

cadeias se quebraram

Davi quando salmodiava, dedilhando

sua harpa, Miriã tocava seu tamborim

em adoração a Deus

Povos, línguas e nações entoarão

louvores ao senhor

E toda carne louvará o seu nome para

todo sempre.

Quando tudo está bem, é fácil cantar

Quando nada falta, é fácil adorar

O celeiro está cheio, é fácil ficar

animado.

É muito fácil amar quando a gente é

amado.

Mais é preciso aprender que nem tudo

é bonança

Vem a hora da dor e a desesperança

Vem a ingratidão, vem o desamor

Mais até nessas horas adore ao

Senhor

Se tudo está difícil, adore ao Senhor

Mesmo no sacrifício, dai a Ele louvor

Se tudo está difícil, adore ao Senhor

Mesmo no sacrifício, dai a Ele louvor

**Se você for capaz de adorar a prova**

**vai passar**

**O louvor move o céu e as cadeias**

**também podem quebrar**

**Mesmo na dor Jó adorou,**

**Paulo e Silas deram louvor**

**A terra tremeu, a prisão se abriu**

**As cadeias se quebraram**

**Davi cantava, o rei se alegrava**

**O mal não resiste o louvor.**

**Final: “ LOUVE AO SENHOR”**`},{id:`p83`,hymnal:`preciosas`,number:83,title:`Meu Deus É Grande`,lyrics:`Ele é, Ele é, Ele é grande, Ele é o
Senhor

Mais doce que o mel (mais doce que o
mel)
Maior que o céu (maior que o céu)
Mais alvo que a neve (mais alvo que a
neve)
Brilha mais que o Sol (brilha mais que o
Sol)
A terra se cala (a terra se cala)
Para lhe escutar (para lhe escutar)
E pelo Seu nome, (E pelo seu nome)
Ele chama cada estrela (Ele chama,
Ele chama)

E tem o universo na palma da mão
Só cai uma folha da árvore
Com a Sua permissão
(Oh, Oh, Oh... Oh, Oh, Oh)

Sabe quantos grãos de areia tem no
oceano
Põe limite nas águas, (Meu Deus é
grande, grande grande)
porque Ele é grande

Grande! Meu Deus é grande!
E não existe outro Deus tão grande
assim
Grande, o Senhor é grande!
E não existe outro Deus, tão grande
assim!

Príncipe da paz, (Ele é)
Pai da eternidade (Ele é)
Lírio dos vales, (Ele é)
Rosa de Saron (Sim, só Ele é)
Sol da justiça (Ele é Senhor)
Resplandecente estrela da manhã
(Ele é Senhor)
Alfa e ômega (Ele é Senhor)
Princípio e o fim (sim, Ele é o Senhor)

Fez o homem à Sua imagem e
semelhança
Está presente no sorriso da criança
Para escuridão, Ele é a luz
Para o perdido, Ele é Jesus

Ele fez, Ele faz, Ele fez , Ele faz
está presente, está presente,
esta presente hoje aqui
Ele é, Ele é a luz, Ele é,
Ele é Jesus

Grande, o Senhor, é grande!
E não existe outro Deus
tão grande assim
E não existe outro Deus,
tão grande assim
E não existe outro Deus,
tão grande assim
Meu Deus é grande!`},{id:`p84`,hymnal:`preciosas`,number:84,title:`Gideão e Os Trezentos`,lyrics:`Junta o povo, Gideão
Chegou a hora de lutar
Grande vai ser a escolha
Os covardes e medrosos
Do caminho irão voltar
Junta o povo, Gideão
Eu vou marcar a tua história
Te darei o livramento
Pois somente com trezentos
Eu te darei vitória
Trinta e dois mil
Era a quantidade de homens a postos
para pelejar
Aparentemente todos corajosos,
preparados pra lutar
Porém há momentos que Deus
resolve agir diferente
E o Senhor disse a Gideão:
Ainda tem muita gente
E Disse o Senhor a Gideão
Muito é o povo que está contigo
para Eu dar os midianitas em tuas
mãos
A fim de que Israel não se glorie
contra mim dizendo
A minha mão me livrou
Apregoa pois agora aos ouvidos de
todo o povo dizendo
Os covardes e medrosos voltem!
Então o povo ouviu
E começou a voltar: um, dois,
voltaram vinte mil
Porém há momentos que Deus quer
agir diferente
E o Senhor disse a Gideão
Ainda tem muita gente
E disse o Senhor a Gideão
Faz descer o povo às águas e
ali os provarei
E há de ser que aquele que Eu te
disser esse irá contigo, Esse contigo
irá. Porém todo aquele que Eu disser
esse não irá contigo. Esse não irá

E Gideão ordenou descer às águas
E de longe começou entender
Que havia um segredo de Deus
Na forma que o povo água ia beber
Pois quem tomasse a água com a mão
E levasse a boca este serviria
Porém quem baixasse perdendo
atenção. Esse voltaria
E o segredo de Jeová, naquele
momento.
Era escolher entre os trinta e dois mil
Somente trezentos
Mas trezentos com buzinas
Trezentos com cântaros
Trezentos com tochas
Trezentos com fogo
Trezentos que obedecem
Trezentos corajosos
Trezentos verdadeiros
Trezentos valorosos
Porque Deus quando entra na guerra
É d'Ele o comando, é d'Ele a estratégia
Manda quebrar o cântaro e toca as
buzinas . Não tente entender o
trabalhar de Deus.
E o resultado é vitória, vitória, vitória
Vitória, vitória, vitória, vitória, vitória,
vitória! Deus está dando o livramento!
E o resultado é vitória, vitória, vitória
Vitória, vitória, vitória, vitória!
Se trinta e dois mil não querem ir
Deus usa os trezentos.
Mas trezentos com buzinas
Trezentos com cântaros
Trezentos com tochas
Trezentos com fogo
Trezentos que obedecem
Trezentos corajosos
Trezentos verdadeiro
Trezentos valorosos
Se trinta e dois mil não querem ir
Deus usa os trezentos
Aleluia! A vitória é do povo de Deus`},{id:`p85`,hymnal:`preciosas`,number:85,title:`Vencendo de Pé`,lyrics:`Assim disse o rei Nabucodonosor
A todos os prefeitos, os presidentes
Juízes, tesoureiros, conselheiros
Oficiais e todos os governadores das
províncias
Servos, escravos, livres, pais, filhos
Raça, tribo, todos do pátio do palácio
Do rei Nabucodonosor, para adorarem
a estátua
Que ele levantou para sua própria
glória . E todo aquele que não se
dobrar perante a estátua
Será lançado na fornalha de fogo
ardente
Assim disse o rei, assim se fará
E lá estavam os três cheios de unção
E de convicção da cabeça aos pés
Um olhando para o outro,
dizendo "não vamos nos prostrar
Ainda que custe a nossa vida, vamos
ser fiéis"
Começam os preparativos para a
banda tocar
E a cada minuto que passa, deles
aumenta a fé
E quando a banda tocou todos se
prostraram de uma só vez
Mas no meio da multidão,
os três ficaram de pé
Rapidamente alguém já viu e ali ao rei
fora informar
O senhor não mandou se dobrar?
Mas tem gente aí no meio que não
obedece
Mesmo sendo ameaçado de fornalha
eles ficam lá
Com um brilho diferente até no olhar
E de pé na multidão eles permanecem
Chama-os aqui pra gente conversar
Pois eu quero ver quem vai os livrar
Traga-os a minha presença
E vou mostrar quem manda neste lugar
E lá vem os três firmes, sem temer
E não se importaram em viver ou
morrer. Indignado, o rei
Nabucodonosor começou a dizer:

É verdade, Sadraque, Mesaque e
Abdenego. Que vocês não prestam
culto aos meus deuses?
Nem adoram a imagem de ouro que
mandei erguer? Pois agora, quando
vocês ouvirem os instrumentos tocarem
Se vocês se dispuserem a prostrar-se
em terra
E adorar a imagem que eu fiz será
melhor pra vocês
Mas se não adorarem, serão
imediatamente atirados
Na fornalha em chamas
E que Deus vos poderá livrar das
minhas mãos?
Não necessitamos responder-te, oh, rei
O Deus do céu é quem pode nos livrar
E, senão, fica sabendo, oh, rei
Não serviremos aos teus deuses
Nem vamos nos prostrar
E foram jogados na fornalha ardente
Mas aconteceu algo surpreendente
É que o quarto homem lá chegou
primeiro. Para os três jovens livrar
E eles passeavam no meio do fogo
E o rei assustado faz um decreto novo
De hoje em diante só ao Deus do céu
iremos adorar
É o mundo se curvando e a igreja de
pé, de pé, de pé, de pé
A igreja não se dobra
É o mundo se curvando e a igreja de
pé, de pé, de pé, de pé
E a vitória é nossa
É o mundo perseguindo e a igreja de
pé
É o mundo insistindo e a igreja de pé
É o mundo oprimindo e a igreja de
pé, de pé, de pé
A igreja vai permanecer de pé .`},{id:`p86`,hymnal:`preciosas`,number:86,title:`Vaso de Alabastro`,lyrics:`**Pra te adorar, Senhor
Te dar o meu louvor
Quero me prostrar
Vou me derramar
Aos teus pés, Senhor
O meu vaso de alabastro
Quero lhe oferecer
Me humilho aos seus pés
Porque santo tu és
Vem meu louvor receber**

Sou pequeno e tão falho
Não mereço teu amor
Mas eu sei que mesmo assim
O Senhor cuida de mim
Um tão pobre pecador
Purifica as minhas vestes
Com seu sangue remidor
Me ajude a ser fiel
Eu quero chegar no céu
E te abraçar, Senhor

DECLAMAÇÃO:

Porque Tú És Santo, Santo,
Pra te adorar Senhor
De todo meu coração
Te dar o meu louvor, porque Tú És
digno , quero me prostrar Senhor,
me derramar, aos teus pés Senhor.
Eu me humilho aos teus pés Senhor...
Recebe Senhor.`},{id:`p87`,hymnal:`preciosas`,number:87,title:`Vai Tudo Bem`,lyrics:`Olha eu de novo
Lutando pra me levantar do chão!
Tentando costurar meu coração
Pra quem sabe eu voltar ainda hoje
A sorrir...
Olha eu de novo
Juntando os pedaços da minha vida
Lutando pra achar uma saída
Mas não saio da presença de quem
pode. Me ajudar

Vai tudo bem!
Enquanto aqui por dentro a gente chora
Sabendo que a alegria foi embora
E só restou a esperança nesse Deus
Que tudo vê..
Vai tudo bem!
Foi o mesmo que falou a Sunamita
E assim também preservo a minha vida
Que interessa só a Deus e a mais
ninguém

**E eu vou profetizar: Vai tudo bem!
Com a minha boca declarar: Vai tudo
bem! Vou fazer dos meus problemas
Uma grande passarela
Só dizer: Vai tudo bem!
E eu vou profetizar: Vai tudo bem!"
Com a minha boca declarar: Vai tudo
bem!
Meu irmão, se eu determino
Se eu declaro ao Deus vivo
Minha vitória logo vem.(2x) final**

**       “Olha eu de novo”**`},{id:`p88`,hymnal:`preciosas`,number:88,title:`Porta da Vitória`,lyrics:`Andaram dizendo que eu não seria
capaz.
Chegaram a falar que os meus sonhos
ficaram pra traz.
Tentaram de todas as formas me
interromper.
Dizendo essa luta é maior você não vai
vencer.
E eu sofrendo ali calada esperando em
Deus
Por mais que fui caluniada a esperança
não morreu
E Deus não suportando mais ver o meu
sofrimento
Do seu trono levantou-se e disse é
agora
Que pra você estou abrindo a porta da
vitória

**Os meus inimigos foram
surpreendidos ficaram surpresos
sem acreditar
Que esse Deus tremendo já entrou
em cena pra contracenar
Fui humilhada mais valeu a pena
Tive recompensa da parte de Deus
Mais pra chegar aqui vocês nem
imaginam o que aconteceu
O céu se abriu, o inferno parou
Na frente do inimigo Deus me
exaltou
A fúria foi maior quando peguei nas
mãos meu troféu de glória escrito
vencedor
Passei pelo vale, fui caluniada,
cheguei a ser alvo de acusação
Mas Deus me exaltou pra honra e
glória dele me fez campeão.**`},{id:`p89`,hymnal:`preciosas`,number:89,title:`Escudo Forte`,lyrics:`Nunca diga não, você vai conseguir
se o inimigo se levanta vai ser pra cair
Deus não te esqueceu e nunca te
deixou
insista confiante, espere no Senhor
há uma dor que não tem cura
há um coração ferido
que não sabe o que é ser feliz
Mas existe uma saída
hoje Deus vai dar um jeito
E vai mudar a sua vida

**Deixa o Senhor agir, deixa o Senhor
lutar por ti
Você não vai ser vencido, o seu
Deus está contigo
Deixa o Senhor agir**

Ele é o escudo forte o Deus que não
falha,
e se for preciso entra na fornalha para
te proteger
Ele é Deus poderoso e sempre está
presente
Ele está contigo, e vai na sua frente.`},{id:`p90`,hymnal:`preciosas`,number:90,title:`Questiona Ou Adora`,lyrics:`Me peguei perguntando: O que pode
Deus fazer?
Mudar todos os planos, fazer o seu
querer
Fazer o que Lhe apraz,
sem dar explicação
Conhecer teu sentimento,
e avaliar tua reação

E se Ele não quiser fazer o vento
cessar
E se Ele não quiser o mar acalmar
E no meio dessa tempestade
Apenas te restar a voz de um adorador
E se Ele não quiser matar a faraó
Te levar lá no deserto e te deixar só
E no meio da adversidade
Um exército inimigo vier te afrontar
O que é que você faz?

**Questiona ou adora?
Questiona ou adora?
Se Ele nada fizer, mostra a sua fé
Questiona ou adora?**

E se Ele não quiser fazer o vento
cessar
E se Ele não quiser o mar acalmar
E no meio dessa tempestade
Apenas te restar à voz de um adorador
E se Ele não quiser matar a faraó
Te levar lá no deserto e te deixar só
E no meio da adversidade
Um exército inimigo vier te afronta
O que é que você faz?

DECLAMAÇÃO:

Nós vivemos num contexto onde tudo
tem que dar certo
Ou Deus faz, ou Deus faz
Quando isto não acontece
Nos decepcionamos, nos frustramos
E achamos que Deus nos esqueceu
Que Deus nos abandonou
Mas na verdade Deus quer saber
Se você é um verdadeiro adorador
Então adore!

**Eu prefiro adorar,
Eu prefiro adorar,
Se Ele nada fizer, eu uso a minha fé
Eu prefiro adorar
Eu prefiro adorar (prefiro)
Eu prefiro adorar (prefiro)
Se Ele nada fizer, eu uso a minha fé
Eu prefiro adorar
Adorar  ...**`},{id:`p91`,hymnal:`preciosas`,number:91,title:`Acredita`,lyrics:`Um dia lá do céu Deus te olhou
E disse: Nesse aí ninguém toca
Por isso você é tão perseguido
É estratégia do inimigo, você incomoda

Você é um daqueles que Deus pega e
não abre mão
Escolhido, separado, foi ungido pra ser
campeão
Só adora porque toda vez que você
clama Deus responde
E te dá vitória
O inferno fez de tudo, investiu alto pra
te conquistar
Quando viu que não deu certo usou
meios pra te derrubar
Se esconder nessa caverna não
resolve, Deus quer te usar
Chegou a sua hora

Acredita, vai a luta, Deus garante, ele é
contigo
Teu melhor amigo, já foi decidido
Quem vai impedir, este é o teu
momento
Se levanta, você vai fazer história, creia
na promessa
Quem te prometeu é fiel, não falha
Está em suas mãos a tua vitória

**Chora aos pés de Jesus
A sua história aqui na terra não
acabou Teu inimigo ainda vai ter que
te aturar, ouvir teu Deus falar
Chora aos pés de Jesus
Você tem tudo que precisa pra se
proteger
Nenhuma arma preparada vai
prevalecer
Você nasceu pra vencer**`},{id:`p92`,hymnal:`preciosas`,number:92,title:`Adorarei`,lyrics:`Por Tua morte lá na cruz
Jesus, Te adorarei
Pelo sangue derramado
Pelo véu que foi rasgado
Te adorarei
Pelo privilégio de aqui estar
Poder soltar a minha voz e Te louvar
Por sentir a Sua presença
Pela total certeza da Tua existência
Te adorarei

Por Teu Santo Espírito que habita em
mim
Por Teu grande amor que não tem fim
Te adorarei
Por me inspirar na letra da canção
Por cantar agora e sentir a tua unção
Te adorarei

( Te adorarei...)
Senhor mais uma vez, Te adorarei
Fui chamado pra adorar, então,
adorarei
Sou adorador, foi assim que Deus me
fez. Então, adorarei

Ninguém vai me calar, Te adorarei
Está no meu DNA, Te adorarei
Ainda que tirarem minha vida
Quando chegar aí no céu, Te adorarei

Te adorarei, Te adorarei   2x
Quando chegar aí no céu,
Te adorarei final 6x`},{id:`p93`,hymnal:`preciosas`,number:93,title:`É Ele`,lyrics:`A minha história foi escrita pelas mãos
de Deus
O meu caminho foi traçado, foi ele
quem arquitetou
Ele me criou e me fez existir
E ainda no ventre da minha mãe me
viu, e de mim se agradou
Ah eu sei que não mereço, mas foi o
meu Deus, quem quis assim
Meu filho não me escolhestes, eu te
escolhi
Da qual da sarça sei que sou, sem
aparência sem saber
Mas minha vida é de Deus, não sou
mas Ele é

O inimigo já lutou, pra me fazer parar
Tentando impedir e quis atrapalhar
Os planos que o meu Deus,
pra mim aqui traçou
Mas Deus que é o meu refúgio, a
minha fortaleza
E agindo Ele não tem quem impeça
Venceu por mim a guerra, e me
mandou louvar

Se ele me criou sou Dele,
agora vivo para Ele
Por isso louvo só à Ele,
adoro tão somente a Ele
Com alegria sirvo à Ele,
minha alma anseia por Ele
Eu quero estar mais perto Dele,
fazer sempre a vontade Dele
Eu sou escolhida Dele,
eleita também fui por Ele
Quem vive agora em mim é Ele,
Quem dirige minha vida é Ele
A minha alegria é Ele,
A força da minha vida é Ele
O meu sustento é só Ele,

Quem me faz triunfar é Ele
Quem me faz prosperar é Ele, O brilho
da minha vida é Ele
Não sou não posso, tudo é Ele, Não
faço, quem faz tudo é Ele
Quero ser mais fiel à Ele, Buscar
sempre a face Dele
Quando aqui tudo terminar,
eu vou morar com Ele

Jesus é bom, meu coração é Dele
Eu fui comprada pelo sangue Dele
Edificada na rocha, que é Ele
Sou protegida pela sombra Dele
Na oração ouvida só por Ele
E quem responde o meu clamor é Ele
Minha vitória vem da parte Dele
Glória então, a Ele, a Ele, a Ele

**ELE É DIGNO....
SÓ ELE**`},{id:`p94`,hymnal:`preciosas`,number:94,title:`Santidade`,lyrics:`Não dá mais pra ficar do jeito que está
Chegou o tempo eu sei que
Deus irá usar
Profetas verdadeiros como Daniel
Que honram o chamado como Samuel
O amor de muita gente já se esfriou
A iniquidade a muito se multiplicou
Amantes de si mesmos é o
que mais se vê
Mais Deus não vai deixar jamais se
escarnecer

É hora da Igreja se manifestar
Lutar contra o pecado e denunciar
Aqueles que distorcem o que a
Bíblia diz
Que tentam infiltrar na igreja os
seus ardis.
É tempo de viver em santificação
De se entregar a Deus de todo coração
A noiva amada, preparada deve estar
O noivo a qualquer momento vai
chamar.

Santidade ao Senhor! Santidade ao
Senhor!
Pois sem santificação, ninguém verá o
Salvador
Santidade no agir, Santidade no falar
Santidade no vestir, Santidade no olhar
Santidade pra vencer o pecado e
todo mal

Santidade para crer no que é
sobrenatural
Santidade pra esperar a promessa se
cumprir
Santidade ao caminhar e aos impulsos
resistir
Santidade ao se negar e ao tomar a
sua cruz
Santidade pra subir ao encontro de
Jesus

**DECLAMAÇÃO:**

Levantai pois as vossas mãos
cansadas, e os joelhos trêmulos,
vigiem vossos passos no caminho reto,
para que o pé aleijado não manque,
mas seja curado, procurai a paz com
todos, e ao mesmo tempo a santidade,
sem a qual ninguém verá o Senhor!

**FINAL:
Santidade.... santidade... santidade
Pra fazer a vontade de Deus.
Seja santo, santo, santo,
santo... santidade.**`},{id:`p95`,hymnal:`preciosas`,number:95,title:`Meu Grito`,lyrics:`Passei por grandes provações,
Sofri demais, foi grande a dor,
Desprezo afronta humilhação,
Pensei meu Deus me abandonou,
Meu grito aflito ecoou,
até o trono do meu Deus,
Daí então Jesus falou,
que queres filho meu.

O mar que estava em minha frente
Ele fez se abrir,
O gigante que eu temia ele fez cair
A muralha ele fez desabar ao chão
A vitória entregou então em minhas
mãos,
É por isso que eu hoje estou aqui
O inimigo já perdeu, meu Deus faz
assim, Seu decreto ninguém pode
desmanchar
Hoje estou aqui louvando a Jeová

A vitória é certa, pode crer irmão,
Não te apresses, nem desanimes, não.
Dobre os teus joelhos, e comece a
clamar,
Ao Deus vivo que é fiel, Ele não vai
falhar,
Assim como pensou se sucederá,
Conforme seu querer se efetuará,
A vitória é garantida, pra quem esperar,
Ele fez por mim e por ti fará...

É vitória, é só vitória,
Pra quem espera em Deus.
É vitória, é só vitória,
Deus cuida dos seus.
É vitória, é só vitória,
É só esperar,
É vitória, é só vitória,
Ele é o Deus de já`},{id:`p96`,hymnal:`preciosas`,number:96,title:`Ditosa Cidade`,lyrics:`A ditosa cidade deve ser linda
Se pudesse eu iria pra lá agora
Veria ao Senhor frente a frente
Cantaria naquele imenso coral

**Veria anjos e querubins ali, reunidos
Cantando hosanas ao Rei
Breve este meu pensamento será
realidade, pois pra lá voarei**

Veria ainda todos os discípulos
Que andaram por aqui pregando a
palavra
Imagino abraçar Paulo e Tiago
Ver João, Abraão, Isaque e Jacó

**Veria anjos e querubins ali, reunidos
Cantando hosanas ao Rei
Breve este meu pensamento será
realidade, pois pra lá voarei**

Irmão se ficarmos em comunhão com
Cristo
Naquela linda cidade nós iremos morar
Veremos o Senhor frente a frente
Cantaremos naquele imenso coral

**Veremos anjos e querubins ali,
reunidos
Cantando hosanas ao rei
Teremos somente prazer e muita
alegria
Para sempre, Amém!**`},{id:`p97`,hymnal:`preciosas`,number:97,title:`Em Fervente Oração`,lyrics:`Eu creio no poder da oração
Aquele que se prostra com o rosto
No pó e chora é dono do milagre, é
dono do milagre

Eu creio no poder da oração
Aquele que na luta não murmura
Se levanta e ora
É dono do milagre, é dono do milagre

Quando a gente ora, cresce intimidade
Deus nos capacita com autoridade
E quando a oração chega aos seus
ouvidos, logo o céu se abre.

Então se você crê, levante a mão agora
Erga a sua voz com brado de vitória
Comece a orar, comece a clamar,
comece a adorar

Se quer ser ungido, separado,
consagrado, e de joelhos
Se quer sua família restaurada ,
ao pé do altar, é de joelhos
Se quer um milagre, a cura dessa
enfermidade, é de joelhos,

oooh, oooh oooh ooh

Se quer ser profeta, pregador do
evangelho, é de joelhos
Se quer as promessas, uma vida
abençoada, é de joelhos
Se quer o seu nome escrito no livro da
vida, é de joelhos,

oooh oooh ooh ooh

E se o meu povo que se chama pelo
meu nome, orar e buscar a
Minha face, se converter dos seus
maus caminhos eu sararei a sua terra

Em fervente oração
Vem o teu coração na presença
De Deus derramar
Mas só podes fluir o que estás a pedir
Quando tudo deixares no altar

Se quer ser ungido, separado,
consagrado, e de joelhos
Se quer sua família restaurada , ao pé
do altar, é de joelhos
Se quer um milagre, a cura dessa
enfermidade, é de joelhos,
oooh, oooh, oooh ooh

Se quer ser profeta, pregador do
evangelho, é de joelhos
Se quer as promessas, uma vida
abençoada, é de joelhos
Se quer o seu nome escrito no livro da
vida, é de joelhos,
oooh oooh oooh ooh

Quando tudo perante o Senhor estiver
E todo o teu ser ele controlar
Só, então, hás de ver que o Senhor
tem poder
Quando tudo deixares no altar`},{id:`p98`,hymnal:`preciosas`,number:98,title:`Quem Me Ve Cantando`,lyrics:`Quem me vê cantando pensa que em
todo tempo, foi só alegria
E que nesta vida eu nunca tive
motivos pra chorar
Quem me vê cantando nunca imagina
Que passei noites escuras
Pensa que minha vida foi viver feliz e
só cantar

Mas não foi bem assim
O deserto atravessei
Os pés doendo com as feridas dos
espinhos
E quantas vezes eu gritei
Porque a dor não suportei
Deus, eu vou morrer neste caminho

Mas quando eu pensava que estava só
O todo poderoso aparecia
E renovava as promessas
Me lembrava do que ele fez
E palavras de conforto me dizia

Lembra da nuvem de dia, fui eu
Lembra da coluna de fogo, fui eu
Eu fiz pedra jorrar água pra você beber
Lembra do maná do céu, fui eu
Lembra do caminho no meio do mar
Canta, pois sou eu quem cuido de você

Ninguém vai te tocar
Ninguém vai te deter
E se te acusar
Eu defendo você
Eu te abençoo aqui
Eu te abençoo lá
Onde pisar teu pé
Abençoado será

Eu dou, eu tomo, exalto, humilho
Abato e honro, dou e tiro
Tenho, faço, mando, posso,
Eu sou, Eu sou
Eu posso matar, Eu faço viver
Eu posso exaltar, Eu posso abater
E se Eu quero te abençoar
Quem vai contender`},{id:`p99`,hymnal:`preciosas`,number:99,title:`Depois da Cruz`,lyrics:`Antes da cruz, estava condenado
Eu carregava o peso do pecado
Até que Deus me concedeu
A chance de ser regenerado

Antes da cruz, estava separado
O véu ainda não tinha se rasgado
De um lado eu, do outro, Deus
Mas pela cruz fomos aproximados

**Depois da cruz do Salvador
Mudou a história de um pecador
Que era eu, longe de Deus
Mas, pela graça, salvação
concedeu
Depois da cruz do Salvador
Os sonhos mortos de um
sonhador
Que era eu, longe de Deus
Mas, pelo Seu favor,
meus sonhos reviveu**

Quando Ele morreu,
Eu também morri
Quando Ele reviveu,
Eu também revivi
Ooh, ooh!
Ooh, ooh!

Quando Ele venceu,
eu também venci
Ele subiu ao céu,
eu também vou subir
Eu vou, eu vou subir

**Depois da cruz do Salvador
Mudou a história de um pecador
Que era eu, longe de Deus
Mas, pela graça, salvação
concedeu**

**Depois da cruz**`},{id:`p100`,hymnal:`preciosas`,number:100,title:`Prova de Amor`,lyrics:`Posso te provar que ninguém pode
te amar como eu te amei
posso te provar, nenhum só
momento eu te abandonei
Nos momentos maus, nem se
lembra que em meus braços eu te
segurei e agora que a bonança já
chegou,
Me esqueceste e Me trocaste por
um outro amor, que não fez nada,
só te trouxe dor

**Se quiser ainda a prova desse
amor, Pergunte ao madeiro que
Me levantou
E o Meu sangue que jorrava
e corria ao chão,
E a coroa que Minha fronte
perfurou
Se quiser ainda a prova desse
amor, Pergunte as noites frias
que por ti chorei
Em nenhum só momento
Eu Me esqueci
Que você e importante para Mim.**

Posso te provar, quantas vezes
encontrei você desfalecendo
Posso te provar, que eu ouvia os
teu gritos já morrendo
Eu te socorri, dei carinho, dei alento,
fiz você alguém
E agora por que vai Me esquecer,
Me trocar por uma vida passageira
Eu preparei um paraíso pra você.`},{id:`p101`,hymnal:`preciosas`,number:101,title:`Santidade Gera`,lyrics:`**INTIMIDADE**

**Declamação: Mas, como é santo
aquele que vos chamou, sede vós
também santos em toda a vossa
maneira de viver;  Porque escrito
está: Sede santos, porque eu sou
santo."**

Separado estou
Para o teu louvor
Consagrei minha vida
Em teu altar
Justificado estou
Teu sangue me purificou
Minhas vestes
Não vou manchar

Vou guardar meu coração
pra te adorar
Vou guardar o meu olhar
pra te contemplar
Elevar meus pensamentos e
te entronizar
Tu és Santo e outro igual não há

**Santidade gera intimidade
E eu quero ser íntimo de Deus
Contemplá-lo face a face
E prostrado O adorar (2x)**

Pra sempre ôh, ôh, ôh (4x)

Santidade pra viver e
não me contaminar
Santidade pra andar e não tropeçar
Santidade pra não dar
legalidade ao inimigo
Santidade para ver a
face do Deus vivo
Santidade para ter contigo comunhão
Santidade pra viver tua unção
Santidade ao falar,
ao erguer as minhas mãos
Santidade pra impactar minha
geração

**Santidade gera intimidade
E eu quero ser íntimo de Deus
Contemplá-lo face a face
E prostrado O adorar (2x)**

Pra sempre ó ó ó
Pra sempre ó ó ó
Pra sempre ó ó ó
Pra sempre o adorar (2x)

Oh,oh, oh... Santidade`},{id:`p102`,hymnal:`preciosas`,number:102,title:`Só Deus Faz Milagres`,lyrics:`**Só Deus pode fazer milagres,
só Deus pode fazer milagres,
somente Deus (2x)
Porque ele tem em suas mãos o
poder e a autoridade
Creia que é somente Deus para fazer
milagres**

Só Deus pode ordenar ao morto que
venha pra fora, dizer pra viúva:
"A hora é agora! A vida pro seu filho eu
posso devolver!"
Só Deus pode afundar muros, destruir
cidades
Ele tem nas mãos poder e autoridade
É somente Deus para fazer milagres

                     “CORO”

Só Deus pode arrancar o mal e
queimar a raiz
Curar depressão e te fazer feliz e dizer
ao cego: agora, podes ver!
Só Deus pode fazer bater mais forte o
coração
Renovar, encher o homem de unção, é
somente Deus para fazer milagres

Só Deus pode encher os vales com a
sua glória
Escrever pro homem uma nova
história, pode trazer de volta a arca do
seu povo
Só Deus pra perdoar pecado e dar
liberdade
Ele é soberano, dono da verdade, é
somente Deus para fazer milagres.

**Só Deus pode fazer milagres (3x)**`},{id:`p103`,hymnal:`preciosas`,number:103,title:`Assembléia de Deus`,lyrics:`Em Belém do Pará onde começou
A doutrina dos dons Deus enviou
O batismo com fogo para os fiéis era
1910

**Assembléia de Deus no Brasil
chegou Cuidando da doutrina e
também dos dons
A porta que abriu nunca mais fechou
Deus multiplicou o seu rebanho
A porta que abriu nunca mais fechou
Deus multiplicou o seu rebanho**

Muitos ministérios a Assembléia tem
mais um só Espirito apascentando vem
seu numero é como as águas de
muitos rios
É a grande multidão que João viu

Os lideres das Assembleias que
formadas estão
Daniel Berg e Gunnar Vingren seus
irmãos
Os outros pioneiros que ainda estão
lutando
E Cristo lá do céu abençoando

Em cada Cidade desse nosso céu
Assembléia de Deus já estendeu o seu
véu
Em cada povoado tem uma igreja
E o inimigo já perdeu essa peleja`},{id:`p104`,hymnal:`preciosas`,number:104,title:`Jesus Não É um Homem`,lyrics:`Jesus desceu do monte com a multidão
E eis que um leproso o adorava ali
Dizendo: "O Senhor, se Tu quiseres faz
com que eu fique limpo"
Jesus tocou-lhe com a mão dizendo:
"Quero"
E no mesmo instante curado ficou
Apenas com um toque do Senhor
aquele leproso sarou

**Jesus não é o homem, quando cura,
cura
Faz a obra completa, não faz
confusão  E quando Ele opera, não
deixa sintoma, nada por fazer
Quando Ele fere, fere, quando mata,
mata, quando sara, sara
Ele diz: "Eu sou" e o mundo se cala
Todo homem treme ante o seu poder**

Entrou na Sinagoga e encontrou ali
Um homem com a mão atrofiada e
então
Falou: "Estende a mão" e Ele estendeu
com fé e foi curado
Lá em Cafarnaum milagres operou
Ao paralítico, seus pecados perdoou
E disse: "Mais levanta, toma a cama e
anda" e o moço andou

A beira do caminho estava Bartimeu
Um cego de nascença queria ver
"Tem compaixão de mim" dizia ele ali,
clamando por Jesus
"Que queres que Eu te faça" o Senhor
perguntou
"Senhor, eu quero ver!" Bartimeu lhe
falou
Jesus curou e pronto, enxugou-lhe o
pranto e Bartimeu sarou.`},{id:`p105`,hymnal:`preciosas`,number:105,title:`In Memorian`,lyrics:`Sempre vou lembrar da coragem,
do amor
Da firmeza e vontade, da fé e devoção
Da igreja do tempo de Paulo, de Pedro
e João
Que enfrentaram a fúria de Roma
Mas nunca negaram sua fé de cristãos
É um exemplo pra mim, verdadeira
lição

Eu queria ver a bravura dos santos em
plena arena enfrentando os leões
Quanto mais a fogueira queimava
Mais se ouvia o louvor dos nossos
irmãos
Sob o sangue, tombavam nas ruas
Chegavam no céu com a vitória nas
mãos
É um exemplo pra mim, verdadeira
lição

**Oh, meu Deus,
reaviva tua igreja de novo
Faz a chama arder nesse povo
Como foram os primeiros cristãos
Oh, meu Deus,
reaviva tua igreja de novo
Faz a chama arder nesse povo
Começando em meu coração**`},{id:`p106`,hymnal:`preciosas`,number:106,title:`Lazaro o Amigo Especial`,lyrics:`Passaram-se os dias
E nada de Jesus chegar
Uma inquietação
Tomava Betânia,
cidade de um amigo amado

Perguntam: Cadê, não dá mais pra
esperar
Vamos conduzir o corpo ao sepulcro
Seu amigo não vai mais chegar

Marta e Maria, depois do enterro
Chorando ainda por não entender
Porque Jesus Cristo fez isso com ele
Deixando um amigo doente morrer
Será que Ele não entendeu o recado?
Será que Ele foi induzido a não vir?
Será que Ele não quis saber mais do
amigo?
Será, será, será?

Jesus chega mudando toda indagação
E calando a boca de quem só sabe
murmurar
Ele sabe que a morte não fica presente
Se Ele chega o inferno, tem que recuar
Ele chama o amigo por nome: Fiel
Faz questão que a mídia esteja pra ver
Pra provar que só ele faz o impossível
acontecer

Abato, Exalto, Eu faço o que Quero
Não Chego na hora que você marcou
Eu Mudo, o tempo, Eu Mudo a história
Eu Faço, Desfaço, Eu sou o Senhor

Eu Quebro qualquer protocolo, Sou a
medicina
Eu entro e mudo a sentença em
qualquer tribunal
Reduzo o planeta em um grão de areia
O Amigo Fiel pra mim é bem mais que
especial

Eu Sou Amigo das horas incertas
Eu Sou Amigo e provo o que Sou
Eu Sou Amigo e não Abandono
Eu Sou Amigo, Eu sou o Senhor

**Lázaro, vem para fora**`},{id:`p107`,hymnal:`preciosas`,number:107,title:`Jesus Venceu`,lyrics:`Um valente só fica até outro mais
valente na casa chegar,
na casa chegar
É a bíblia que afirma que é impossível
dois reis governar no mesmo lugar
E Jesus chegou,
o mais valente chegou para anular
a minha sentença de morte
Somente um preço muito caro
de um sangue sem pecado
Poderia mudar minha sorte
E Jesus mudou, Jesus mudou
E aquela dívida que me condenava, lá
na cruz ela foi paga
Foi Jesus quem pagou,
o sangue derramou
Eu não sou mais escravo,
tudo está consumado

**Onde está, ó morte, a tua vitória?
Onde está, ó morte, o teu aguilhão?
Jesus venceu,
ressuscitou pra me dar vida
Jesus venceu, ressuscitou,
vem me buscar um dia
Jesus venceu,
ressuscitou pra me dar vida
Jesus venceu, ressuscitou,
vem me buscar um dia!**

E Jesus chegou, o mais valente chegou
Para anular a minha sentença de morte
Somente o preço muito caro de um
sangue sem pecado
Poderia mudar minha sorte
E Jesus mudou, Jesus mudou
E aquela dívida que me condenava, lá
na cruz ela foi paga
Foi Jesus quem pagou,
o sangue derramou
Eu não sou mais escravo,
tudo está consumado

**E onde está, ó morte, a tua vitória?
Onde está, ó morte, o teu aguilhão?
Jesus venceu,
ressuscitou pra me dar vida
Jesus venceu, ressuscitou,
vem me buscar um dia
Jesus venceu,
ressuscitou pra me dar vida
Jesus venceu, ressuscitou,
vem me buscar um dia**

Eu sinto cheiro de vida!
Estou cercado de vida!
Jesus venceu pra me dar vida!
Vida em abundância!
Eu sinto cheiro de vida!
Estou cercado de vida!
Jesus venceu! (4x)

**E onde está, ó morte, a tua vitória?
Onde está, ó morte, o teu aguilhão?
Jesus venceu,
ressuscitou pra me dar vida
Jesus venceu, ressuscitou,
vem me buscar um dia
Jesus venceu, ressuscitou
pra me dar vida
Jesus venceu, Jesus venceu...
oh..oh...oh...**

Vida, oh vidaa...

Uhoou... uhoou... uhoouu.. vidaa

Hoje eu.. eu tenho vida`},{id:`p108`,hymnal:`preciosas`,number:108,title:`Eu Te Chamei`,lyrics:`Eu te chamei para curar
almas feridas
Eu te formei e projetei a tua vida
Entre milhões, Eu te escolhi antes do
ventre
Para cumprir um chamado na
Terra e ser diferente
Sei que não é fácil seguir este caminho
Mas quem ama as rosas, tem que
aprender suportar os espinhos

E se faltar forças pra prosseguir
Não se esqueça que Eu estou aqui
Te renovando, te dando estratégia pra
não desistir

Faz a minha obra que Eu cuido de você
Faz a minha obra que nada vai te faltar
Faz a minha obra que Eu vou te
socorrer
Estarei contigo, seja em terra, céu ou
mar

Faz a minha obra e vai aonde Eu te
mandar
Faz a minha obra e Eu cuido dos
sonhos teus
Tenho recompensa em minhas mãos
para te dar
Eu sou teu Deus

Tenho recompensa em minhas mãos
para te dar, Eu sou teu Deus, Eu sou
teu Deus

**Sou teu Deus**`},{id:`p109`,hymnal:`preciosas`,number:109,title:`Acima das Estrelas`,lyrics:`Curou-me, curou-me
Curou-me a minha cegueira
O homem que mora
Que mora acima das estrelas

**Ele mora acima das estrelas
Ele é Jesus, o Rei da Glória
Ele mora acima das estrelas
Ele é Jesus, o Rei da Glória**

Salvou-me, salvou-me
Salvou-me com muito amor
O homem que mora
Que mora acima das estrelas

**Ele mora acima das estrelas
Ele é Jesus, o Rei da Glória**

**Jesus, o Rei da Glória**`},{id:`p110`,hymnal:`preciosas`,number:110,title:`Coisa do Meu Deus`,lyrics:`Parece de ferro a porta fechada,
o céu é de bronze
Na hora do medo
até das promessas a gente esquece
Mas Deus não,
Deus não esquece não
O tempo dispara um alarme
em meu peito
São vozes gritando que
não tem mais jeito
Amigos se afastam e
nos abandonam
Mas Deus não, não abandona não

Pelo contrário, mesmo invisível,
Ele está perto
Sua presença é combustível
pra você não parar
Quem foi que disse que porta de
ferro impede d'Ele operar?

Não tente entender, apenas acredita
que a vitória é certa
Deus vai fazer você ficar de
boca aberta
Quando o extraordinário então
acontecer, e vai acontecer
Não tente entender, porque Deus é
mistério dentro de mistério
E quando perguntarem
como aconteceu
Você só vai dizer:
Isso é coisa do meu Deus

**É coisa do meu Deus
fazer o mar abrir
É coisa do meu Deus
o gigante cair
É coisa do meu Deus
mudar a natureza
Fazer leão com fome
ignorar a presa
É coisa do meu Deus
abrir porta trancada
Responder oração de crente
de madrugada
Tirar a depressão,
jogar o medo fora
Mudar de vez a tua história**

**Final: Do meu Deus, do meu Deus
Isso é coisa do meu Deus,
do meu Deus**`},{id:`p111`,hymnal:`preciosas`,number:111,title:`Se Eu Não Te Ouvir`,lyrics:`Tua voz, Senhor
Faz tremer o deserto
Tua voz, Senhor
Ecoa sobre as águas
As águas agitadas
Da alma inquieta
Que não consegue descansar

Tua voz, Senhor
Fez surgir o universo
Tua voz, Senhor
É cheia de majestade
Ela aponta a direção
Dissipa toda confusão
E traz luz na escuridão

Eu preciso calar todas as vozes,
menos a Tua
Silenciar todas as vozes,
menos a Tua...
A Tua, A Tua

**Se eu não Te ouvir, eu morro
Se eu não Te ouvir, eu pereço
Tua voz é livramento
No meio do tormento
Tua voz é tudo
Mas, se eu Te ouvir, eu vivo
Se eu Te ouvir, eu prospero
Tua voz é a segurança
No começo, meio e fim
Tua voz é tudo**

Preciso calar todas as vozes,
menos a Tua
Silenciar todas as vozes,
menos a Tua...
A Tua, A Tua

**Se eu não Te ouvir, eu morro
Se eu não Te ouvir, eu pereço
Tua voz é livramento
No meio do tormento
Tua voz é tudo
Mas, se eu Te ouvir, eu vivo
Se eu Te ouvir, eu prospero
Tua voz é a segurança
No começo, meio e fim
Tua voz é tudo**

Fala, Deus, Fala, Deus
Toca-me com brasas do altar
Fala, Deus, Fala, Deus
Sim, alegre, atendo ao Teu mandar
(2x)

**Se eu não Te ouvir, eu morro
Se eu não Te ouvir, eu pereço
Tua voz é livramento
No meio do tormento
Tua voz é tudo
Mas, se eu Te ouvir, eu vivo
Se eu Te ouvir, eu prospero
Tua voz é a segurança
No começo, meio e fim
Tua voz é tudo.**`},{id:`p112`,hymnal:`preciosas`,number:112,title:`Ah! que Saudade`,lyrics:`O Rei está voltando,
o Rei está voltando
A trombeta está soando,
o meu nome a chamar
Sim o Rei está voltando,
o Rei está voltando
Aleluia! Ele vem nos buscar

Lá verei meu pai, lá verei minha mãe
Lá verei meu Jesus com as
marcas nas mãos

Onde está aquele povo barulhento
Onde esta que não se ver nenhum
irmão
Alguém com voz de lamento,
vai dizer neste momento
Aquele povo foi embora pra Sião.

Ah! Que saudade, ah! Que saudade!
Não quero fazer comparação, sou o
resultado desta igreja de oração
Quero de volta essa igreja hoje aqui
Ah! Que saudade

O maestro que a banda regia
E o coral cantava com muita ousadia
E as crianças empunhando a espada
e dizendo: O gigante vai cair!
Os jovens cantavam em fervente
oração
As irmãs cantando com muita unção
Era a marca de uma igreja que
chegava pra nunca mais sair
A irmã levantava pra entregar profecia
Deus honrava tudo que ela dizia

Ah! Que saudade! Ah! Que saudade!

**Ah! Que saudade, ah! Que saudade!
Não quero fazer comparação, sou o
resultado desta igreja de oração
Quero de volta essa igreja hoje aqui
Ah! Que saudade!**

O maestro que a banda regia
E o coral cantava com muita ousadia
E as crianças empunhando a espada
e dizendo: O gigante vai cair!
Os jovens cantavam em fervente
oração
As irmãs cantando com muita unção
Era a marca de uma igreja que
chegava pra nunca mais sair
A irmã levantava pra entregar profecia
Deus honrava tudo que ela dizia

Ah! Que saudade! Ah! Que saudade!

**Ah! Que saudade, ah! Que saudade!
Não quero fazer comparação, sou o
resultado desta igreja de oração
Quero de volta essa igreja hoje aqui
Ah! Que saudade!**

Porque Ele vive, posso crer no amanhã
Porque Ele vive, temor não há
Mas eu bem sei, eu sei,
que a minha vida
Está nas mãos do meu Jesus,
que vivo está.

**Sou o resultado desta igreja de
oração ... Ah! Que saudade.**`},{id:`p113`,hymnal:`preciosas`,number:113,title:`Quem Ficou,Ficou,Quem`,lyrics:`**PARTIU, PARTIU.**

**Quem ficou, ficou, quem partiu,
partiu  Quem ficou só lágrimas, pra
quem partiu é festa
Quem ficou, ficou, quem partiu,
partiu Quem ficou só lágrimas, pra
quem partiu é festa**

Brevemente a notícia se espalhará
Que um povo da terra desapareceu
E um grande tumulto acontecerá
Perguntam se como isto se deu
Quem sabe dirá foi o arrebatamento
Quem não sabe dirá marcianos
levaram
A verdade sagrada escrita está
Jesus o Seu povo veio buscar

**Quem ficou, ficou, quem partiu,
partiu  Quem ficou só lágrimas, pra
quem partiu é festa (2x)**

Aviões sem pilotos voam para o abismo
Trens desgovernados e ônibus também
Mães desesperadas e filhos sumidos
Grandes e pequenos tremendo
também
Quem sabe dirá foi o arrebatamento
Quem não sabe dirá marcianos
levaram
A verdade sagrada escrita está
Jesus o Seu povo veio buscar

**Quem ficou, ficou, quem partiu,
partiu Quem ficou só lágrimas, pra
quem partiu é festa (4x)**`},{id:`p114`,hymnal:`preciosas`,number:114,title:`Volte a Sonhar`,lyrics:`Você diz que está sozinho
Mas Deus diz: Estou contigo
Você diz que não tem jeito, não
Mas Deus te diz que tudo é possível
Você diz: Eu não posso
Você diz: Eu não aguento
Diz: Meus sonhos estão perdidos
O que passou não volta mais
Mas Deus está dizendo
Eu ainda realizo os sonhos

**Volte a sonhar, volte a sonhar
Deus ainda realiza sonhos**

Você diz: Eu não posso
Você diz: Eu não aguento
Diz: Meus sonhos estão perdidos
O que passou não volta mais
Mas Deus está dizendo
Eu ainda realizo os sonhos

**Volte a sonhar
Se, por um tempo, a dor te fez parar
Volte a sonhar
Deus ainda realiza sonhos (2x)**

Se deu tudo errado pra você
Se está no leito do hospital
Ou no chão de uma prisão
Há tempo de chorar
Há tempo de sorrir
Deus é o Senhor do tempo
E Ele ainda realiza sonhos

**Volte a sonhar
(Se, por um tempo, a dor te fez
parar)
Volte a sonhar
(Deus ainda realiza sonhos)
Volte a sonhar
Deus ainda realiza sonhos**`},{id:`p115`,hymnal:`preciosas`,number:115,title:`Uma Coisa Nova`,lyrics:`Armadilha preparada pra você
É uma guerra espiritual
que você não vê
O inimigo rodeando,
querendo atacar
Mas o Senhor dos Exércitos
chegou aqui pra guerrear

**Ele vai exaltar o humilhado
Ele vai abater o exaltado
Ele entra contigo no fogo
E caminha no fogo ao teu lado
Ele vai confundir o inimigo
Ele vai te livrar do perigo
Ele vai trovejar contra eles
Ele vai te esconder no abrigo
Ele livra do arco de longe
Ele livra da lança de perto
Ele queima os carros no fogo
Ele é provisão**

Seja no vale ou na caverna
O nosso Deus está sempre perto

**Deus vai fazer uma coisa nova
Vai mudar a cena
Vai fazer a roda grande passar
dentro da pequena
Vai fazer surpresa à crente
aqui na Terra**

Deus já ganhou essa batalha
E o inimigo bateu em retirada
Esse problema até parece grande
Mas pra Deus é nada

Essa muralha aí pra o nosso
Deus é nada
Esse gigante aí pra o nosso
Deus é nada
Essa doença aí é nada
É nada, é nada

A tempestade aí pra o nosso
Deus é nada
O Mar Vermelho aí pra o nosso
Deus é nada
Esse levante aí é nada
Pra o nosso Deus é nada`},{id:`p116`,hymnal:`preciosas`,number:116,title:`Tempo de Cantar`,lyrics:`Não vai terminar assim,
isso não é o teu fim
É Deus quem te fala,
é Deus quem te fala!
Toda prova tem limite,
e a vitória quem decide
É Deus quem te fala,
é Deus quem te fala!

Ele já entrou em cena, para guerrear
Ele já abriu caminho pra você passar
Está providenciando água no deserto,
pra você tomar
Toda prova há um tempo, dela terminar
Toda batalha há um dia, de se findar
E essa prova que tu passas aqui hoje
Deus marcou, para terminar!

Então canta, canta, canta, pois chegou
o tempo de cantar
Então louva, louva, louva, pois chegou
o tempo de adorar

Não vai ter muralha, não vai ter gigante
Não vai ter fornalha, nem quem se
levante
Que vai impedir o que Deus projetou
pra tua vida
Não tem filisteus, não tem amorreus
Não tem saduceus, que tome o que é
teu
Se faltou tem mais e se não tem nada o
senhor multiplica

Deus vai entrar na tua casa e vai fazer
acontecer
Vai dar de volta tudo em dobro pra
você
Vai restaurar, vai libertar, vai te curar,
ele vai salvar
Te prepara, pois chegou o tempo de
cantar.

**Vão olhar de longe, vão ficar sem
entender
Dizendo como é que pode ele estava
pra morrer
Desenganado dos médicos sem ter
pra onde correr
Mas pelo que estou vendo ele
acabou de nascer
Vai ser grande a surpresa, vão ficar
de boca aberta
E o culto de ação de graça grande
vai ser sua festa
Canta e louva e me dá glória
Pois hoje na sua história, eu escrevo
a vitória!**`},{id:`p117`,hymnal:`preciosas`,number:117,title:`A Última Hora`,lyrics:`Igreja, o Senhor em breve voltará
No relógio de Deus é já a última hora
Como está tua vida então?
Será que estás preparado?
A qualquer momento o
Senhor vai voltar.

Acorda, desperta, levanta,
é já a última hora
Jesus já vem cercado de anjos tocando
trombetas
E a igreja subindo, subindo, subindo
Cantando, cantando, cantando,
cantando, louvando ao Senhor
E a igreja subindo, subindo, subindo
Cantando, cantando, cantando
Cantando ao encontro do Senhor

E lá é só glória, glória, glória, glória
Glória, glória, glória, glória,
glória ao Senhor

Corpos transformados,
vestes gloriosas
Recebendo o galardão
conforme as obras
No lindo coral, iremos cantar,
eternamente, a Cristo

Cantando glória, glória, glória, glória,
glória ,glória, glória, glória,
glória ao Senhor
E lá é só glória, glória, glória, glória
Glória, glória, glória, glória,
glória ao Senhor
E lá é só santo, santo, santo, santo,
santo, santo, santo, santo, santo, santo
é o Senhor.
E lá é só santo, santo, santo, santo,
santo, santo, santo, santo, santo, santo
é o Senhor.

E lá é só glória, glória, glória, glória,
glória, glória, glória, glória, glória ao
Senhor
E lá é só glória, glória, glória, glória,
glória, glória, glória, glória,
glória ao Senhor.

**A quem vencer lhe concederei que
se assente comigo no meu trono
Assim como eu venci e me assentei
com meu Pai no seu trono.**`},{id:`p118`,hymnal:`preciosas`,number:118,title:`No Tempo Dele`,lyrics:`Marta e Maria mandaram um recado
dizendo à Jesus: Lázaro adoeceu
O teu amigo, a quem tanto amas,
precisa urgentemente de um
socorro teu!
Porém, Jesus disse pro mensageiro:
Vai você primeiro, depois chego lá
Enquanto isso, Marta e Maria
esperando e nada de Jesus chegar
E de repente, houve um alvoroço,
as duas chorando à se lamentarem
Pois, o infortúnio aconteceu. Lázaro
morreu e nada de Jesus chegar

Todos chorando e Jesus não chega
Embalsamando e Jesus não chega
Pôs ataduras e Jesus não chega
Pôs no esquife e Jesus não chega
Vai o cortejo e Jesus não chega
Põe no sepulcro e Jesus não chega
A despedida e Jesus não chega
Puseram a pedra e Jesus não
chega

Só após quatro dias de dor e agonia
É que Jesus resolve chegar no lugar
Porém, Marta e Maria, sem
entender, diziam
Se tu tivesse aqui ele não morreria!
Mas, Jesus disse: Marta! - Com sua
voz tão calma
O teu o irmão hoje farei ressuscitar
Pois, o milagre eu opero é quando
eu quero
Remove a pedra, pois hoje vou
operar!

Eu vou chegar no tempo, não é
como você pensou é no meu tempo
Mas, quando Eu chegar,
Eu vou soprar o vento
Eu vou fazer o impossível acontecer
e a minha glória tu vais ver
Eu vou fazer milagres
Eu vou chegar e acalmar a
tempestade
Vou restaurar, ressuscitar então
aguarde
Fica tranquilo, filho, ninguém vai
morrer, pois eu sou vida pra você
Porém, meu filho tem um segredo
para você ter a vitória
Remove a pedra da incredulidade
agora
Pois o milagre entre os teus vou
operar

Remove a pedra que eu curo,
eu saro, liberto, trabalho, dou vida,
restauro
Controlo, acalmo, eu entro na
guerra, eu sou livramento
Eu tiro o embaraço, eu quebro a
lança e corto o arco
Pra o teu problema, meu filho,
Eu sou a saída
E como resposta te digo:
Eu sou vida!
Creia tão somente eu sou o que
sou!

**Sou o que sou!**`},{id:`p119`,hymnal:`preciosas`,number:119,title:`A Promessa`,lyrics:`Outra vez a vida te fez ir se
adaptando a suportar calado
O que ninguém aguentaria nem
gritando
Olha você aí, tirando forças de
onde não tem

De pouco a pouco,
você se tornou alguém
Que o fardo é grande,
não divide com ninguém
Você é forte, mas ainda é humano
Sei que chorar não estava nos teus
planos
Mas o que fere também ensina a
viver
É na fraqueza que Deus se
aperfeiçoa em você

**Quem te vê adorando não
imagina o quanto está sendo
difícil
Ter que esconder as lágrimas
com esse sorriso
E a voz que ainda embarga
quando quer cantar
E, mesmo assim, você não para
de adorar**

**Os olhos embaçados,
mas tá aguentando
Entre o soluço e o choro,
está se superando
Crendo que amanhã o dia mau
passou
E que a promessa é bem maior do
que essa momentânea dor.**`},{id:`p120`,hymnal:`preciosas`,number:120,title:`Viveu por Me Amar`,lyrics:`Porque me deu amor de tal maneira
Porque se entregou em meu lugar
Eu não merecia ...
Eu não merecia

Os cravos transpassando suas
mãos
Os cravos transpassando os seus
pés
Jesus ensanguentado,
morreu por meus pecados
Viveu por me amar!

**Ooh... A cruz está vazia
Ooh... Jesus não está lá!
Ooh... Seu corpo ensanguentado
Morreu por meus pecados
Viveu por me amar!**

Eu, sou livre pra viver
A eternidade com meu Deus!
Sou livre pra viver
Tudo que ele prometeu!
Jesus ensanguentado lá na cruz me
libertou! 3x

**Ooh... A cruz está vazia
Ooh... Jesus não está lá!
Ooh... Seu corpo ensanguentado
Morreu por meus pecados
Viveu por me amar!**`},{id:`p121`,hymnal:`preciosas`,number:121,title:`Semente de Sangue`,lyrics:`Olhando o passado,
eu vejo o sangue na arena
Dos nossos irmãos primitivos,
morrendo então
E, como se fosse num vídeo,
eu vejo as cenas
Dos nossos irmãos devorados
por fortes leões

O sangue quente que corria
Como enxurrada pelo chão
Era a semente do evangelho
Era sinal de salvação
Pois cada alma que partia
Ia direto ao Paraíso
Mesmo morrendo aos milhões
Pra Deus não era prejuízo

**Eu sou a semente do sangue, dos
irmãos que morreram sangrando
Pra manter o evangelho
vencendo, eles iam morrendo de
Cristo falando
Eu sou a semente do sangue,
dos irmãos que tiveram coragem
De enfrentar os açoites e a morte
E levar a mensagem**

Sei que Tiago foi morto ao ser
decapitado
E Pedro foi crucificado de forma
cruel
Sei que alguns foram mortos ao fio
da espada
Sei que, também, eles estão lá no
seio de Deus

Ninguém pensou em ser covarde,
morreram mesmo por amor
Não negaram um segundo que
Jesus Cristo é salvador
Eram firmados na promessa,
por Jesus Cristo, garantida
Quem for fiel até a morte terá a
coroa da vida

**Eu sou a semente do sangue, dos
irmãos que morreram sangrando
Pra manter o evangelho
vencendo, eles iam morrendo
De Cristo falando
Eu sou a semente do sangue, dos
irmãos que tiveram coragem
De enfrentar os açoites e a morte
E levar a mensagem**`},{id:`p122`,hymnal:`preciosas`,number:122,title:`Em Nome do Senhor`,lyrics:`Tem, tem um gigante da altura de seis
côvados gritando                           Tem,
tem e no grito um exército de Israel
amedrontado
Tem, tem pois diz ele que não tem
ninguém que esteja pronto para o
enfrentar
Tem, tem na cabeça do gigante um
capacete de bronze
Tem, tem uma arma que desafia
qualquer homem
Tem, tem um exército de Israel recuado
com medo de lutar

E todos os dias Golias desafiava Israel
dizendo escolhei dentre vós um homem
que desça a mim
E há de ser que, se ele pelejar comigo
e me ferir                                              A
vós seremos por servos        Porém, se
lhe vencer e o ferir                  A nós
sereis por servos e nos servireis hoje
desafio as companhias de Israel.
Dê-me homem para que ambos
pelejemos Mas ele não sabia,          ele
não sabia que Israel também..

Tem, tem um menino lá no campo
cuidando das ovelhas do seu pai Tem,
tem já matou um urso e um leão, e está
querendo mais                      Tem, tem
um menino que está vindo com uma
funda e uma pedra                        Pois
é o que ele sabe usar
Tem, tem uma força e uma coragem
que lá no campo ele ganhou
Tem, tem o Espírito que enquanto ele
canta sobre ele repousou, tem, tem tem
coragem, com uma funda e uma pedra
decidiu ir lutar

Então Davi falou aos homens que
estavam com ele quem é esse
incircunciso filisteu para
Afrontar o exército do Deus vivo? Não
desfaleça o coração de ninguém por
causa dele,                        Disse Davi
ao Filisteu
Ainda hoje Deus entregará tua cabeça
em minhas mãos                                E
toda a terra saberá que há um Deus
em Israel                                 Tu vens a
mim com lança,            espada e
escudo                                 Mas, eu
vou a Ti em nome                       do
Senhor

**Em nome do Senhor a igreja vai
vencendo  todo dia vai crescendo, o
inimigo Vai perdendo em nome do
Senhor                                                A
igreja ela só cresce e o mal não
prevalece
Pois a igreja não esquece o nome do
Senhor
Vai se levantar gigante,
mas a igreja vai avante
E seremos triunfantes
em nome do Senhor**

Vem Golias, nós vamos como Davi,    e
ainda hoje o nosso Deus nos dará
vitória aqui
Vem Golias, nós vamos te enfrentar
Sem lança, espada e escudo nós
vamos te derrubar

O mundo tem Golias, mas a igreja tem
Davi e ainda hoje o nosso Deus nos
dará vitória aqui
Vem Golias, nós vamos te enfrentar
Sem lança, espada e escudo nós
vamos te derrubar

**Em nome do Senhor. (5x final)**`},{id:`p123`,hymnal:`preciosas`,number:123,title:`As Sete Trombetas`,lyrics:`Uma mistura de sangue com fogo
A terça parte deste mundo queimará
Eu quero estar distante,
quero estar no céu
Quando o anjo a primeira trombeta tocar
Um grande meteoro vai cair no mar
Pela segunda vez que a trombeta soar
Levando a terça parte à destruição
Não quero estar presente nesta ocasião

Na terceira vez que a trombeta tocar
Uma grande estrela do céu cairá
Destruindo as fontes das águas
Envenenados, muitos homens morrerão
Na quarta vez, o Sol perderá a luz
A Lua não terá aquele brilho que seduz
O dia vai ser noite, a noite vai ser dia
Eu quero estar na glória junto de Jesus

(Breve virá) breve virá, breve Jesus
voltará

**Eu quero estar além de tudo
Eu não pertenço a este mundo
Eu vou guardar a minha fé pra não
perder minha coroa
Preciso andar em santidade
Pra ver a face do meu Noivo
E adorar na excelência
o Todo-Poderoso**

E quando pela quinta vez a
trombeta tocar
A porta do inferno, então, se abrirá
O mau será liberto para atormentar
Aqueles que não foram fiéis a Jeová
Os homens vão querer à morte
se entregar
E certamente deles ela fugirá
Desesperadamente vão gritar: Perdão
Durante cinco meses assim ficarão

E quando pela sexta vez a trombeta tocar
Duzentos milhões de anjos do inferno
virão
São eles cavaleiros da destruição
Matando a terça parte da população.

DECLAMAÇÃO: E quando o sétimo anjo
tocar a última trombeta
Haverá no céu grandes vozes
que dirão
Os reinos do mundo vieram a ser do
nosso Senhor Jesus Cristo
E Ele reinará para sempre
E os vinte e quatro anciãos
Que estão assentados em seus tronos
diante de Deus
Se prostrarão sobre seus rostos e
adorarão
Em espírito e em verdade
Ó, aleluia

Não quero estar aqui quando as
trombetas tocarem
Não quero estar aqui,
eu quero estar com Jeová
Eu vou me preparar,
eu vou me preparar
Aqui não vou ficar, aqui não vou ficar

**Eu quero estar além de tudo
Eu não pertenço a este mundo
Eu vou guardar a minha fé pra não
perder minha coroa
Preciso andar em santidade
Pra ver a face do meu Noivo
E adorar na excelência o
Todo-Poderoso**

FINAL: O Todo-Poderoso 2x`},{id:`p124`,hymnal:`preciosas`,number:124,title:`Arma Secreta`,lyrics:`Eu não vou fugir de luta
Não vou desistir, nem parar
Pra vencer eu tenho
uma arma secreta
Com ela, ninguém pode me derrotar Se
estou em campo de batalha                é
pra lutar
Se me alistei no exército foi pra
guerrear.
Usar a minha arma que é meu louvor
cantar o cântico de guerra                 de
vencedor
Mas eis que estou ouvindo o gigante
chamando
Desafiando o povo para guerra
e zombando
Está se confiando em seu próprio
poder
Mas a minha arma secreta, ele ainda
não viu

Ele tem espada, ele tem escudo
Ele tem lança e pensa que tem tudo Só
que eu tenho Deus!

**Eu tenho Deus, eu tenho Deus
A minha arma secreta pra vencer
é meu Deus
Eu tenho Deus, eu tenho Deus
A minha arma secreta pra vencer é
meu Deus (2X)**

Pode vir fornalha, pode vir leões
Pode vir muralhas, se levantar nações.
Pode vir, pode vir
Eu tenho um Deus pra lutar por mim.
Posso ser pequeno e muito limitado
Mas sempre ao meu lado tem o meu
advogado não se engane            com a
minha aparência

A presença de Deus em mim
faz a diferença.
Levante-se o inferno com seus
aguilhões
Levante-se o mundo com suas
convicções
Levante-se os fortes pra querer
me matar
Eu tenho arma secreta e com ela vou
lutar

**Eu tenho Deus, eu tenho Deus,     eu
tenho Deus
A minha arma secreta pra vencer é
meu Deus
Eu tenho Deus, eu tenho Deus
A minha arma secreta pra vencer é
meu Deus (2X)**

Pode vir fornalha, pode vir leões
Pode vir muralhas, se levantar nações
Pode vir, pode vir
Eu tenho um Deus pra lutar por mim.
Posso ser pequeno e muito limitado
Mas sempre ao meu lado tem o meu
advogado                                      Não
se engane com a minha aparência
A presença de Deus em mim
faz a diferença.

**Eu tenho Deus, eu tenho Deus,     eu
tenho Deus
A minha arma secreta pra vencer é
meu Deus
Eu tenho Deus, eu tenho Deus
A minha arma secreta pra vencer é
meu Deus (2X)**

**A minha arma secreta pra vencer é
meu Deus 2x final**`},{id:`p125`,hymnal:`preciosas`,number:125,title:`Não Pare`,lyrics:`Amanheceu
Nada pesquei
Parecia ser apenas mais um dia
Como qualquer outro
Estava cansado
Sem forças, desanimado
Decidida a largar tudo e parar

Deus conhece tua estrutura
Sabe o que está fazendo
Mesmo que seja difícil
Não pares, Ele está vendo
Colheu todas tuas lágrimas
E mandou a ti falar
Pegue o que Ele te entregou
E volte para o mar que é o teu lugar

**Quem mandou largar a rede?
Quem mandou você parar?
Volte para o mar alto
No lugar da tua vergonha,
Eu vou te honrar (2x)**

**Filho, Eu vou te honrar**

Deus conhece tua estrutura
Sabe o que está fazendo
Mesmo que seja difícil
Não pares, Ele está vendo
Colheu todas tuas lágrimas
E mandou a ti falar
Pegue o que Ele te entregou
E volte para o mar que é o teu lugar

**Quem mandou largar a rede?
Quem mandou você parar?
Volte para o mar alto
No lugar da tua vergonha,
Eu vou te honrar (2x)**

**Filho, Eu vou te honrar**

Ó, filho, a noite já passou
A tua hora chegou
Pegue a tua rede e volte para o mar
Vou te esperar no mar

Oh,oh,oh....

Não é hora de parar
Deus contemplou teu caminhar
Eu sei, é difícil prosseguir
Quando tudo lhe faltar
Esse cenário vai mudar
A tua hora chegará
Há um tempo pra tudo

**Quem mandou largar a rede?
Quem mandou você parar?
Volte para o mar alto
No lugar da tua vergonha,
Eu vou te honrar (2x)**

**Filho, Eu vou te honrar**`},{id:`p126`,hymnal:`preciosas`,number:126,title:`Trajetória de um Fiel`,lyrics:`Quem é este moço aí que o governo
vai assumir?
Quem Ele é?
Nunca o vi por aqui, dele eu nunca ouvi
Esse tal de José
Alguém me fale, por favor
Quem conhece este moço, venha me
contar
E se aproxima alguém que informação
tem
E começa a me falar
Quem olha pra este moço
Não imagina que um dia ele foi traído
Foi jogado na cisterna e esquecido
Foi vendido como escravo à casa de
Potifar
Quem olha pra este moço
Não imagina que um dia ele foi tentado
E por não ter cedido, foi caluniado
E em uma cela fria de uma prisão foi
parar

Quem olha pra este moço
Não imagina quantas vezes já chorou
De saudades do seu pai, que ele
deixou
Falo isso por que fui seu companheiro
Lá na prisão alguém teve um sonho
E ele interpretou
Quanto ao meu sonho, pra mim, assim
falou
Você voltará ao palácio outra vez como
copeiro

Mas é sempre assim
Quem olha pra você como estás agora
Não sabe nem um terço da sua história
Acha que você venceu por coincidência
Mas você tem a marca
Que ganhou no dia do sofrimento cruel
Preferiu perder tudo do que ser infiel
E traz no seu corpo as marcas da
experiência

Chore, se humilhe e desça ao pó,
vá insistindo
Um dia chorando, outro dia sorrindo
Mas deixe rastros de azeite em tua
trajetória
Ande, prossiga, avance mesmo
sem poder
Depois que tudo isso te acontecer
Deus vai te coroar com a grande vitória
Com a grande vitória`},{id:`p127`,hymnal:`preciosas`,number:127,title:`Medley Floreça`,lyrics:`Somos do jardim de Deus
Escolhidos para, transformar
Espalhar o bom perfume
E vidas abençoar
Onde há ódio leve o amor
Onde há guerra leve a paz
Onde há tristeza leve alegria
Esperança de um novo dia

**Floresça, floresça
Servindo com amor e alegria,
floresça
Floresça, floresça
Com bom perfume de Cristo
ao mundo, floresça**

Somos do jardim de Deus
Escolhidos para, transformar
Espalhar o bom perfume
E vidas abençoar
Onde há ódio leve o amor
Onde há guerra leve a paz
Onde há tristeza leve alegria
Esperança de um novo dia

**Floresça, floresça
Servindo com amor e alegria,
floresça
Floresça, floresça
Com bom perfume de Cristo
ao mundo, floresça**

Floresça, através do amor
Floresça, Deus te chamou
Floresça, semeando a paz
Floresça, Deus te fez capaz

Floresça, através da oração
Floresça, levando a salvação
Floresça, na tua família
Servindo a Deus e ao próximo
com alegria

Vai florescer, vai florescer
Deus marcou esse dia noite, só pra
te dizer, que vai florescer
Vai florescer, vai florescer
Pode ter cortado, pode ter secado,
mas vai florescer

Tua família  vai florescer
Tua casa vai florescer
A tua vida vai florescer
Tuas finanças vai florescer
Tua esperança vai florescer
A tua historia vai florescer`},{id:`p128`,hymnal:`preciosas`,number:128,title:`Jeová Jireh`,lyrics:`O fogo não me queima
Nas águas não vou afundar
Pois estás comigo
Não estou sozinho
Eu estou guardado
No esconderijo
Não estou sozinho
Tu estás comigo

Temer por quê?
Se eu estou
Guardado por quem nunca
Perdeu batalhas

Seu nome é
Jeová Jireh
Irás prover de novo
Eu creio em Ti
Haja o que houver
Venha o que vier
Irás prover de novo
Eu creio em Ti

Eu não vivo do que vejo
Vivo do que creio
Irás prover de novo
Eu creio em Ti

O fogo não me queima
Nas águas não vou afundar
Pois estás comigo
Não estou sozinho
Eu estou guardado
No esconderijo
Não estou sozinho
Tu estás comigo

Temer por quê?
Se eu estou
Guardado por quem nunca
Perdeu batalhas

Seu nome é
Jeová Jireh
Irás prover de novo
Eu creio em Ti
Haja o que houver
Venha o que vier
Irás prover de novo
Eu creio em Ti

Eu não vivo do que vejo
Mas eu vivo do que creio
Irás prover de novo
Eu creio em Ti

**OH... OH...**

A tempestade
E o vento forte
Não vão roubar a minha fé
Em Ti, meu Deus (4x)

Em Ti, meu Deus, em Ti, meu
Deus... Temer por quê?
Se eu estou
Guardado por quem nunca
Perdeu batalhas

Seu nome é
Jeová Jireh
Irás prover de novo
Eu creio em Ti
Haja o que houver
Venha o que vier
Irás prover de novo
Eu creio em Ti

Eu não vivo do que vejo
Vivo do que creio
Irás prover de novo
Eu creio em Ti`},{id:`p129`,hymnal:`preciosas`,number:129,title:`Tem que Ter Raiz`,lyrics:`Nada é por acaso, nada é em vão
Na vida com Deus, tudo tem uma
razão
Cada vale que eu atravessei
Cada deserto que eu sobrevivi
Trouxe um bem pra mim

Olhando de fora ninguém ia ver
Mas com o tempo deu para
perceber
Minha raiz cresceu
E os ventos sopraram cada vez
mais fortes
E ainda assim, eu prevaleci

**Só quem tem raiz
Suporta o que eu suportei
Só quem tem raiz
Aguenta chorar o que eu chorei
E ainda adorar
Como se nada tivesse acontecido
E ainda adorar, adorar
Até o dia raiar
Até o dia raiar**

Cada vale que eu atravessei
Cada deserto que eu sobrevivi
Trouxe um bem pra mim

Olhando de fora ninguém ia ver
Mas com o tempo deu para
perceber
Minha raiz cresceu
E os ventos sopraram cada vez
mais fortes
E ainda sim, eu prevaleci

**Só quem tem raiz
Suporta o que eu suportei
Só quem tem raiz
Aguenta chorar o que eu chorei
E ainda adorar
Como se nada tivesse acontecido
E ainda adorar, adorar**

Quando fui ferido, machucado
Minha raiz cresceu
Quando perseguido, caluniado
Minha raiz cresceu
Quando perdoei e esqueci
Minha raiz cresceu
Quando ajoelhei e Te busquei
Minha raiz cresceu

**Só quem tem raiz
Suporta o que eu suportei
Só quem tem raiz
Aguenta chorar o que eu chorei
E ainda adorar
Como se nada tivesse acontecido
E ainda adorar, adorar
Até o dia raiar
Até o dia raiar
Até o dia raiar**`},{id:`p130`,hymnal:`preciosas`,number:130,title:`O Leão e o Cordeiro`,lyrics:`O Rei da glória Se despiu da majestade
E Se assentou com pecadores,
nenhum brilho ou trono revelou
Quem saberia que Seus olhos viram
o universo sendo feito?
Quem acreditaria que o Seu cetro já
regeu o tempo?

Homem tão simples, sem ter lugar ou
onde repousar
Na estrebaria não é o melhor lugar pra
se estrear
Quem notaria que Sua voz chamou o
mundo à existência?
E aquelas mãos, moldou o homem à
Sua semelhança?

Como cordeiro mudo foi levado ao
matadouro
Não tinha glória,
Seu coração na cruz rasgou
Ficou calado, assinou todas as
nossas culpas
Não tinha manchas, no calvário não
reclamou
Foi maltratado e humilhado
O cordeiro de Deus,
mas foi fiel até o fim
Que tira o pecado do mundo
Revela a eternidade e Sua glória em
mim

**Mas como Leão rugirá e
todo olho O verá
Em glória marchando, Ele vem
Sobre as nuvens, Ele vem
Ele é o Leão e o Cordeiro
O mal foi vencido, o céu cantou
Onde está, ó morte, a tua vitória?
O Cordeiro foi morto, mas o Leão
ressuscitou
Oh, oh, oh, oh Ele ressuscitou
Oh, oh, oh, oh, oh, oh
Ele ressuscitou.... Oh**

Emanuel, o Verbo, o Rei da Eternidade
O Pão da Vida, o Eu Sou,
o Verdadeiro Deus
Ele é o Senhor, Libertador e Salvador
A Rocha Eterna, Palavra Viva,
é o Bom Pastor
Jeová Nissi, Jeová Rafá,
Jeová Shalom
Deus Adonai, Kadosh, El Elion
Jeová Jireh, o Elohim,
Deus El Shaddai
Yahweh Shammah,
com toda glória O adorai`},{id:`p131`,hymnal:`preciosas`,number:131,title:`João 20`,lyrics:`TODAS:
Abri minha Bíblia em João 20
E me deparei com Maria Madalena
chorando junto ao túmulo do Rei
Ela levanta Sua cabeça,
enxugando suas lágrimas,
Seus olhos Ela abriu
E aonde está o corpo do Mestre?
Dois anjos Maria viu

SOLO:
E eles lhe perguntaram:
Maria, por que choras?
E Ela respondeu:
É que ali estava o corpo do
Meu Menino Jesus
Só que o corpo d'Ele desapareceu,
Desapareceu, o corpo d'Ele não
está mais lá

TODAS:
Então, Maria se volta pra trás,
creio eu, já disposta a ir embora
É quando Yeshua aparece e
Lhe pergunta:
Maria, por que choras?
Maria, por que Me buscas?
Maria, faça-Me um favor
Não me procure entres os mortos,
porque vivo eu estou
Vai lá e avisa aos Seus irmãos
Pra eles começarem, Maria, a sorrir
Fala pra eles que ainda não acabou
Diga que a morte Eu venci

SOLO:
Então, Maria, sem perder tempo, foi
Em direção aos discípulos,
Ela correu
E ao chegar lá, Ela disse assim:
Senta todo mundo aí
Porque Eu vou contar o que
aconteceu

**TODAS:
A terra estremeceu,
o sepulcro se abriu
E nada vencerá Seu grande amor
Ô, morte, onde estás?
O Rei ressuscitou
Ele venceu pra sempre**

**Pra sempre, exaltado é
Pra sempre, adorado é
Pra sempre, Ele vive
Ressuscitou, ressuscitou  (2x)**

**Final: Ressuscitou....**`},{id:`p132`,hymnal:`preciosas`,number:132,title:`Desperta Tu que Dormes`,lyrics:`Amanhã talvez o sol não apareça mais
Amanhã talvez você não veja mais
seus pais
E a Terra entre em tribulação
E não haja outra chance,
não haja salvação
Pode Imaginar
As sete taças da ira de Deus
se derramar
Pode Imaginar
A lua de sangue aparecer no céu

Fome, peste, guerra
O silêncio da morte a Reinar
Será tarde pra mudar, lembre-se hoje
Pecado ainda é pecado, lembre-se hoje
O oculto será revelado, a hora está
chegando
Não há tempo a perder,
acorda desse sono
E ouça o Espírito de Deus a te dizer

**Desperta tu que dormes
desperta sem demora
Quem ganha o mundo perderá a
alma Desperta tu que dormes,
hoje é tua chance
Perto está o fim**

Amanhã talvez o sol não apareça mais
Amanhã talvez você não veja mais
seus pais
E a Terra entre em tribulação
E não haja outra chance,
não haja salvação
Pode Imaginar
As sete taças da ira de Deus
se derramar
Pode Imaginar
A lua de sangue aparecer no céu

Fome, peste, guerra
O silêncio da morte a Reinar
Será tarde pra mudar, lembre-se hoje
Pecado ainda é pecado, lembre-se hoje
O oculto será revelado, a hora está
chegando
Não há tempo a perder,
acorda desse sono
E ouça o Espírito de Deus a te dizer

**Desperta tu que dormes
desperta sem demora
Quem ganha o mundo perderá a
alma Desperta tu que dormes,
hoje é tua chance
Perto está o fim**

Vida ou morte o que vais escolher?
Vida ou morte, não há tempo a perder
Céu ou inferno, vida ou morte, luz ou
escuridão?

**Desperta tu que dormes
desperta sem demora
Quem ganha o mundo perderá a
alma Desperta tu que dormes,
hoje é tua chance
Perto está o fim**`},{id:`p133`,hymnal:`preciosas`,number:133,title:`Eu Sou Teu Pai`,lyrics:`Muitos me conhecem pelo nome
Outros me conhecem
só de ouvir falar
Alguns são de perto,
e outros, de longe
Com licença, Eu vou me apresentar

Sabe quem Eu sou?
Eu sou aquele que te ouviu chorar
Eu sou o único que escolheu ficar
Amigo, confidente, o Pai que
sempre sabe te aconselhar
Mais conhecido como Yeshua
O pão da vida, Jeová Rafah
Eu sou a luz no fim do túnel
A força quando a sua acabar

**E se precisar, é só chamar
Não preciso de formalidade
Eu quero intimidade
Eu sou teu Pai, é só chamar
Não é sobre religiosidade
Eu quero intimidade**

Sabe quem Eu sou?
Eu sou aquele que te ouviu chorar
Eu sou o único que escolheu ficar
Amigo, confidente, o Pai que
sempre sabe te aconselhar
Mais conhecido como Yeshua
O pão da vida, Jeová Rafah
Eu sou a luz no fim do túnel
A força quando a sua acabar

**E se precisar, é só chamar
Não preciso de formalidade
Eu quero intimidade
Eu sou teu Pai, é só chamar
Não é sobre religiosidade
Eu quero intimidade**

Estar contigo a cada dia
Na angústia ou na alegria
E na felicidade ou na dificuldade
Não quero algo de momento
Eu quero um relacionamento
Com profundidade, na intimidade

**E se precisar, é só chamar
Não preciso de formalidade
Eu quero intimidade
Eu sou teu Pai, é só chamar
Não é sobre religiosidade
Eu quero intimidade (2x)**

Eu sou teu Pai, é só chamar( 6x)

**E não preciso de formalidade
Eu quero intimidade
Eu sou teu Pai, é só chamar
Não é sobre religiosidade
Eu quero intimidade**`},{id:`p134`,hymnal:`preciosas`,number:134,title:`Mãe`,lyrics:`Mãe, você não se lembra
Mas eu não esqueci das tuas
orações
De joelhos dobrados
Com o rosto molhado
choravas por mim

Mãe, eu era pequeno
Quando a senhora pra mim
assim falou
Deus, abençoe o meu filho
Pra que ele cresça no
caminho do amor

**Mãe, sou teu fruto
Do coração, o amor
Sou teu sorriso
Tu és meu abrigo
na hora da dor (2x)**

Mãe, você não se lembra
Mas eu não esqueci das tuas
orações
De joelhos dobrados
Com o rosto molhado
choravas por mim

Mãe, eu era pequeno
Quando a senhora pra mim
assim falou
Deus, abençoe o meu filho
Pra que ele cresça no
caminho do amor

**Mãe, sou teu fruto
Do coração, o amor
Sou teu sorriso
Tu és meu abrigo
na hora da dor (4x)**`},{id:`p135`,hymnal:`preciosas`,number:135,title:`Eternidade`,lyrics:`O inimigo tenta me comprar
Mas meu valor não vou negociar
Já fui comprado pelo
Sangue do Cordeiro
Esses manjares não vão
me impressionar

Prefiro viver em santidade                   Eu
não abro mão da eternidade
Por mais que a caminhada         aqui seja
tão difícil                                              Maior
é aquele que sempre                           está
aqui comigo

Com minhas lamparina           sempre
abastecidas
Pela porta estreita sem
pegar atalhos
Eu sigo adorando aquele que é Fiel
E garantindo o meu galardão            lá no
Céu

**Eu vou morar no céu de Glória
Pois nada se compara a Glória
Que lá eu hei de ver
E o que o olho não viu
Ouvidos não ouviram                           eu
vou alcançar
O céu de Glória
Pois nada se compara a Glória Enquanto
peregrino aqui              na terra for
Tudo que eu fizer vai ser pra
glória do Senhor.**

Enquanto eu for fiel aqui                       Tem
morada no céu pra mim                  Não vou
negociar a minha verdade                  Irei de
Glória em Glória até a eternidade (2x)

**No céu de Glória
Pois nada se compara a Glória
Que lá eu hei de ver                                O
que o olho não viu
Ouvidos não ouviram
eu vou alcançar
O céu de Glória
Pois nada se compara a Glória
Enquanto peregrino aqui                     na
Terra for
Tudo que eu fizer vai ser pra glória do
Senhor.**`},{id:`p136`,hymnal:`preciosas`,number:136,title:`Poder da Adoração`,lyrics:`Só quem já provou da sua fidelidade
Poderá dizer que o conhece de
verdade
O Deus que fez tremer o chão
Livrando Paulo e Silas daquela prisão
Provou que em meio a adoração
As portas do inferno não
prevalecerão
E eu que já experimentei,
Do seu poder, posso dizer
Quando você adora, Deus trabalha
por você

**É no meio da adoração que o
céu se abre
Enquanto as mão estão erguidas
as muralhas caem
Esse é o poder da adoração,
esse é o poder da adoração
É no meio da adoração que o céu
se abre
Deus não rejeita um coração que
adora com verdade
Esse é o poder da adoração,
esse é o poder da adoração**

O Deus que fez tremer o chão
Livrando Paulo e Silas daquela prisão
Provou que em meio a adoração
As portas do inferno não
prevalecerão
E eu que já experimentei do seu
poder, posso dizer
Quando você adora, Deus trabalha
por você

**É no meio da adoração que o
céu se abre
Enquanto as mão estão erguidas
as muralhas caem
Esse é o poder da adoração,
esse é o poder da adoração
É no meio da adoração que o céu
se abre
Deus não rejeita um coração que
adora com verdade
Esse é o poder da adoração,
esse é o poder da adoração**

Leva cura pra casa
Leva milagre pra casa
Hoje o meu Deus faz
Esse é o Deus que faz
Leva vida pra casa
Leva renovo pra casa
Hoje o meu Deus faz
Esse é o Deus que faz
Esse é o Deus que faz (2x)

**É no meio da adoração que o
céu se abre
Enquanto as mão estão erguidas
as muralhas caem
Esse é o poder da adoração,
esse é o poder da adoração
É no meio da adoração que o céu
se abre
Deus não rejeita um coração que
adora com verdade
Esse é o poder da adoração,
esse é o poder da adoração**`},{id:`p137`,hymnal:`preciosas`,number:137,title:`Forte É o Meu Deus`,lyrics:`Grande é o meu Deus
Forte é o meu Deus

Quem é esse que ninguém ousa
desafiar
Sem as consequências no futuro
enfrentar
Construir uma torre para afrontar
os céus
Soberba, orgulho o juízo desceu
Ouro, prata e gesso no lugar
do criador
Desviando o foco de quem é
merecedor
A prova de fogo na fornalha
aconteceu
O fogo não queima o meu Deus!

Ele não perde, nem empata
sempre é vencedor
Não envelhece pois o tempo
jamais o afetou
Até o ateu na dificuldade chama
Deus!

**Forte é o meu Deus
Grande é o meu Deus
Forte é o meu Deus
Grande é o meu Deus**

Quem é esse Deus que não tolera
a iniquidade
Porque Ele é santo e exige santidade
A humanidade no pecado se perdeu
Cuidado! Deus não brinca de ser
Deus

Ele não divide com ninguém a
sua glória
Quem tentou perdeu,
tá registrado na história
A prova dos fortes lá na cruz
aconteceu
A morte perdeu pra o meu Deus

Ele não perde, nem empata
sempre é vencedor
Não envelhece pois o tempo
jamais o afetou
Até o ateu na dificuldade chama
Deus!

**Forte é o meu Deus
Grande é o meu Deus
Forte é o meu Deus
Grande é o meu Deus**

O dono da glória já está na casa  (5x)

**Forte é o meu Deus
Grande é o meu Deus
Forte é o meu Deus
Grande é o meu Deus**`},{id:`p138`,hymnal:`preciosas`,number:138,title:`Clamo Jesus`,lyrics:`Jesus, quero declarar Teu nome
Sobre toda mente e coração
Pois sei que existe paz em
Tua presença
Clamo: Jesus

Jesus, quero declarar Teu nome
Quebrando os vícios dessa geração
Declaro que há esperança e
liberdade
Clamo: Jesus

**Teu nome é cura
É poderoso
Teu nome é vida
Destrói cadeias
Dissipa as trevas
Vem incendiar**

Jesus, quero declarar Teu nome
Sobre toda alma em depressão
Ansiedade e medo saiam agora
Clamo: Jesus

**Teu nome é cura
É poderoso
Teu nome é vida
Destrói cadeias
Dissipa as trevas
Vem incendiar (2x)**

Declare pelas ruas
O nome de Jesus
Sobre a escuridão,
Ele vai trazer a sua luz
Sobre sua família
Clame o santo nome, Jesus (2x)

**Teu nome é cura
É poderoso
Teu nome é vida
Destrói cadeias
Dissipa as trevas
Vem incendiar (2x)**

Jesus, quero declarar Teu nome
Sobre toda mente e coração
Pois sei que existe paz em
Tua presença
Clamo: Jesus

Declare pelas ruas
O nome de Jesus
Sobre a escuridão,
Ele vai trazer a sua luz
Sobre sua família
Clame o santo nome, Jesus

**Declare pelas ruas
O nome de Jesus
Sobre a escuridão,
Ele vai trazer a sua luz
Sobre sua família
Clame o santo nome, Jesus (2x)**`},{id:`p139`,hymnal:`preciosas`,number:139,title:`Medley Pai Eu Confiarei`,lyrics:`**SOLO**

Eu sei que a caminhada é tão difícil
de seguir
É tão bom estar sorrindo
quando tudo vai bem
Eu quero ver tua fé quando o mundo
te esquecer
Lembrarás que Eu sou o teu Deus?

SOLO: Deixarás te levar?

TODAS: Confio em Ti

SOLO: Vai em mim descansar?

TODAS: Confio em Ti

SOLO: Lembrarás das promessas
que Eu te fiz?
TODAS: Que Eu te fiz

SOLO: Quando for impossível
TODAS: Clamarás a mim
SOLO: Clamarás a mim?

TODAS: Clamarás a mim
TODAS: Lembrarás que sou teu
Pai ou me esquecerás?
Senhor, eu confio em Ti.

SOLO: E se chorares
TODAS: confio em Ti
SOLO: E se te machucares
TODAS: confio em Ti

SOLO: Lembrarás das promessas
que Eu te fiz?
TODAS: Que eu te fiz

SOLO: Quando for impossível
TODAS: Clamarás a mim
SOLO: Clamarás a mim?

TODAS: Clamarás a mim
TODAS: Lembrarás que sou teu
Pai ou me esquecerás?
Senhor, eu confio em Ti.

TODAS: Pai, eu confiarei
Pai, eu confiarei,
Pai, eu confiarei,
Eu confiarei (3x)

Quando o crente está firme
nos pés do Senhor
Ele passa pela prova cantando
louvor O inimigo se levanta, mas
tem que cair O crente não deixa a
cruz,
mas leva até o fim
Se cair mil ao seu lado,
ele não cede, não
Sempre está protegido por um
batalhão Deus dá ordens aos seus
anjos para proteger
Bem guardado desse
jeito, desistir por quê?

**Vou seguir os passos de
Jesus Vou levar comigo a
minha cruz Se espinhos
ferem os meus pés Eu vou
descansar nos braços de
Jesus.**

Seguirei, eu levarei a minha
cruz Se no caminho tropeçar
Deus vai me ajudar a me erguer
Ele tem nas mãos a força pra vencer
Não vou temer, vou caminhar
Deus vai me ajudar (2x)`}],geracaoLife:[]};async function or(e){return[...ar[e]].sort((e,t)=>e.number-t.number)}async function sr(e,t){return ar[e].find(e=>e.id===t)}var cr={harpa:`Harpa Cristã`,preciosas:`Preciosas`,geracaoLife:`Geração Life`},lr={harpa:`Pasta a cadastrar`,preciosas:`Círculo de Oração · JD América`,geracaoLife:`Pasta a cadastrar`},ur={harpa:`🎵`,preciosas:`💎`,geracaoLife:`🔥`},dr={preciosas:`./preciosas-logo.jpg`},fr={harpa:`harpa`,preciosas:`preciosas`,geracaoLife:`geracao-life`},pr=[`preciosas`,`harpa`,`geracaoLife`];function mr(){let e=new Date().getHours();return e<12?`Bom dia`:e<18?`Boa tarde`:`Boa noite`}function hr(){let[e,t]=(0,x.useState)({});return(0,x.useEffect)(()=>{let e=!0;return Promise.all(pr.map(e=>or(e))).then(n=>{if(!e)return;let r={};pr.forEach((e,t)=>{r[e]=n[t].length}),t(r)}),()=>{e=!1}},[]),(0,j.jsxs)(`div`,{children:[(0,j.jsx)(ir,{title:`Minha Igreja`}),(0,j.jsxs)(`div`,{className:`px-4 pb-2 pt-2`,children:[(0,j.jsx)(`h1`,{className:`text-2xl font-bold text-text`,children:mr()}),(0,j.jsx)(`p`,{className:`mt-1 text-sm text-text-muted`,children:`Hinos e Bíblia, sempre com você.`})]}),(0,j.jsx)(`div`,{className:`px-4 pb-2 pt-4`,children:(0,j.jsx)(`p`,{className:`mb-2 px-1 text-xs font-semibold uppercase tracking-wide text-text-muted`,children:`Pastas de hinos`})}),(0,j.jsx)(`div`,{className:`flex flex-col gap-3 px-4 pb-4`,children:pr.map(t=>{let n=e[t],r=n===0;return(0,j.jsxs)(jn,{to:`/${fr[t]}`,className:`flex items-center gap-3 rounded-2xl bg-surface px-4 py-4 transition active:scale-[0.98]`,children:[dr[t]?(0,j.jsx)(`img`,{src:dr[t],alt:``,"aria-hidden":!0,className:`h-12 w-12 shrink-0 rounded-xl object-cover`}):(0,j.jsx)(`span`,{className:`flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary-soft text-2xl`,"aria-hidden":!0,children:ur[t]}),(0,j.jsxs)(`div`,{className:`min-w-0 flex-1`,children:[(0,j.jsx)(`p`,{className:`truncate font-semibold text-text`,children:cr[t]}),(0,j.jsx)(`p`,{className:`truncate text-xs text-text-muted`,children:lr[t]})]}),(0,j.jsx)(`span`,{className:`shrink-0 text-xs font-medium text-text-muted`,children:n===void 0?`…`:r?`em breve`:`${n} hinos`}),(0,j.jsx)(`span`,{className:`text-text-muted`,children:`›`})]},t)})})]})}function gr({value:e,onChange:t,placeholder:n=`Pesquisar…`}){return(0,j.jsxs)(`div`,{className:`flex items-center gap-2 rounded-full bg-surface px-4 py-3`,children:[(0,j.jsx)(`span`,{"aria-hidden":!0,className:`text-text-muted`,children:`🔎`}),(0,j.jsx)(`input`,{value:e,onChange:e=>t(e.target.value),placeholder:n,className:`w-full bg-transparent text-sm text-text placeholder:text-text-muted focus:outline-none`}),e&&(0,j.jsx)(`button`,{onClick:()=>t(``),"aria-label":`Limpar busca`,className:`text-text-muted hover:text-text`,children:`✕`})]})}function _r({rows:e=4}){return(0,j.jsx)(`div`,{className:`flex flex-col gap-3 px-4 py-4`,"aria-busy":`true`,"aria-label":`Carregando`,children:Array.from({length:e}).map((e,t)=>(0,j.jsx)(`div`,{className:`h-24 w-full animate-pulse rounded-2xl bg-surface-alt`},t))})}function vr(){return(0,j.jsx)(`div`,{className:`flex items-center justify-center py-16`,"aria-busy":`true`,"aria-label":`Carregando`,children:(0,j.jsx)(`div`,{className:`h-8 w-8 animate-spin rounded-full border-2 border-border border-t-primary`})})}function yr({title:e=`Não foi possível carregar o conteúdo`,description:t=`Verifique sua conexão e tente novamente.`,onRetry:n}){return(0,j.jsxs)(`div`,{className:`flex flex-col items-center justify-center gap-3 px-6 py-16 text-center`,children:[(0,j.jsx)(`span`,{className:`text-4xl`,"aria-hidden":!0,children:`⚠️`}),(0,j.jsx)(`p`,{className:`font-medium text-text`,children:e}),(0,j.jsx)(`p`,{className:`text-sm text-text-muted max-w-xs`,children:t}),n&&(0,j.jsx)(`button`,{onClick:n,className:`mt-2 rounded-full bg-primary px-5 py-2 text-sm font-medium text-white active:scale-95 transition`,children:`Tentar novamente`})]})}function br({icon:e=`📭`,title:t,description:n}){return(0,j.jsxs)(`div`,{className:`flex flex-col items-center justify-center gap-2 px-6 py-16 text-center`,children:[(0,j.jsx)(`span`,{className:`text-4xl`,"aria-hidden":!0,children:e}),(0,j.jsx)(`p`,{className:`font-medium text-text`,children:t}),n&&(0,j.jsx)(`p`,{className:`text-sm text-text-muted max-w-xs`,children:n})]})}function xr(e,t=[]){let[n,r]=(0,x.useState)(null),[i,a]=(0,x.useState)(!0),[o,s]=(0,x.useState)(!1),[c,l]=(0,x.useState)(0),u=(0,x.useCallback)(()=>l(e=>e+1),[]);return(0,x.useEffect)(()=>{let t=!0;return a(!0),s(!1),e().then(e=>{t&&r(e)}).catch(()=>{t&&s(!0)}).finally(()=>{t&&a(!1)}),()=>{t=!1}},[...t,c]),{data:n,loading:i,error:o,reload:u}}var Sr=Jn()(Zn((e,t)=>({hymnFavorites:[],toggleHymnFavorite:t=>e(e=>({hymnFavorites:e.hymnFavorites.includes(t)?e.hymnFavorites.filter(e=>e!==t):[...e.hymnFavorites,t]})),isHymnFavorite:e=>t().hymnFavorites.includes(e),verseFavorites:[],toggleVerseFavorite:t=>e(e=>({verseFavorites:e.verseFavorites.includes(t)?e.verseFavorites.filter(e=>e!==t):[...e.verseFavorites,t]})),isVerseFavorite:e=>t().verseFavorites.includes(e)}),{name:`adba-app-favorites`}));function Cr({hymnalId:e,basePath:t}){let{data:n,loading:r,error:i,reload:a}=xr(()=>or(e),[e]),[o,s]=(0,x.useState)(``),{isHymnFavorite:c}=Sr(),l=(0,x.useMemo)(()=>{if(!n)return[];let e=o.trim().toLowerCase();return e?n.filter(t=>t.title.toLowerCase().includes(e)||String(t.number).includes(e)):n},[n,o]);return(0,j.jsxs)(`div`,{children:[(0,j.jsx)(ir,{title:cr[e],showBack:!0,onBack:()=>history.back()}),(0,j.jsx)(`div`,{className:`px-4 pt-4`,children:(0,j.jsx)(gr,{value:o,onChange:s,placeholder:`Buscar por número ou título…`})}),(0,j.jsxs)(`div`,{className:`px-4 py-4`,children:[r&&(0,j.jsx)(_r,{}),i&&(0,j.jsx)(yr,{onRetry:a}),n&&l.length===0&&(0,j.jsx)(br,{icon:`🎵`,title:`Nenhum hino encontrado`}),(0,j.jsx)(`div`,{className:`flex flex-col gap-2`,children:l.map(e=>(0,j.jsxs)(jn,{to:`${t}/${e.id}`,className:`flex items-center gap-3 rounded-2xl bg-surface px-3 py-3 transition active:scale-[0.98]`,children:[(0,j.jsx)(`span`,{className:`flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-primary-soft text-sm font-bold text-primary`,children:e.number}),(0,j.jsx)(`span`,{className:`flex-1 text-sm font-medium text-text`,children:e.title}),c(e.id)&&(0,j.jsx)(`span`,{"aria-hidden":!0,children:`★`})]},e.id))})]})]})}async function wr(e){if(navigator.share)try{return await navigator.share(e),!0}catch{return!1}return navigator.clipboard&&e.url?(await navigator.clipboard.writeText(e.url),`copied`):!1}function Tr({lyrics:e}){let t=e.split(`**`);return(0,j.jsx)(j.Fragment,{children:t.map((e,t)=>t%2==1?(0,j.jsx)(`strong`,{className:`font-bold`,children:e},t):(0,j.jsx)(`span`,{children:e},t))})}function Er({hymnalId:e,basePath:t}){let{id:n}=bt(),r=gt(),{data:i,loading:a,error:o}=xr(()=>sr(e,n),[e,n]),{data:s}=xr(()=>or(e),[e]),c=Qn(e=>e.fontScale),l=Qn(e=>e.setFontScale),{isHymnFavorite:u,toggleHymnFavorite:d}=Sr(),[f,p]=(0,x.useState)(!1),m=s&&i?s.findIndex(e=>e.id===i.id):-1,h=s&&m>0?s[m-1]:null,g=s&&m>=0&&m<s.length-1?s[m+1]:null;return(0,j.jsxs)(`div`,{className:`pb-28`,children:[(0,j.jsxs)(`div`,{className:`sticky top-0 z-30 flex items-center gap-2 bg-bg px-4 pb-2 pt-4`,children:[(0,j.jsx)(`button`,{onClick:()=>r(t),"aria-label":`Voltar`,className:`flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-surface text-text active:scale-95`,children:`←`}),(0,j.jsxs)(`div`,{className:`flex flex-1 gap-2`,children:[(0,j.jsx)(`button`,{onClick:()=>l(c-.1),className:`h-9 w-9 rounded-full bg-surface text-sm text-text active:scale-95`,children:`A-`}),(0,j.jsx)(`button`,{onClick:()=>l(c+.1),className:`h-9 w-9 rounded-full bg-surface text-sm text-text active:scale-95`,children:`A+`})]}),i&&(0,j.jsx)(`button`,{onClick:()=>d(i.id),"aria-label":`Favoritar`,className:`flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-surface text-lg active:scale-95`,children:u(i.id)?`★`:`☆`})]}),a&&(0,j.jsx)(vr,{}),o&&(0,j.jsx)(yr,{}),i&&(0,j.jsxs)(j.Fragment,{children:[(0,j.jsxs)(`div`,{className:`px-4 py-2 text-center`,children:[(0,j.jsx)(`p`,{className:`text-xs font-semibold uppercase tracking-widest text-text-muted`,children:cr[e]}),(0,j.jsx)(`p`,{className:`text-6xl font-black leading-none text-text`,children:i.number}),(0,j.jsx)(`h1`,{className:`mt-2 text-xl font-bold leading-snug text-text`,children:i.title})]}),(0,j.jsx)(`div`,{className:`px-4`,children:(0,j.jsx)(`p`,{className:`whitespace-pre-line leading-relaxed text-text`,style:{fontSize:`${c}rem`},children:(0,j.jsx)(Tr,{lyrics:i.lyrics})})}),(0,j.jsx)(`div`,{className:`fixed bottom-16 left-0 right-0 z-30 mx-auto max-w-md px-4 pb-3`,children:f?(0,j.jsx)(`div`,{className:`flex items-center justify-center rounded-2xl border border-border bg-surface py-2 shadow-lg`,children:(0,j.jsxs)(`button`,{onClick:()=>{wr({title:i.title,text:i.lyrics.replace(/\*\*/g,``),url:location.href}),p(!1)},className:`flex flex-col items-center gap-0.5 px-4 text-[11px] font-medium text-text active:scale-95`,children:[(0,j.jsx)(`span`,{className:`text-lg`,children:`📤`}),`Compartilhar`]})}):(0,j.jsxs)(`div`,{className:`flex items-center gap-1 rounded-full border border-border bg-surface p-1.5 shadow-lg`,children:[h?(0,j.jsx)(jn,{to:`${t}/${h.id}`,className:`flex h-9 w-9 items-center justify-center rounded-full text-text active:scale-95`,"aria-label":`Hino anterior`,children:`‹`}):(0,j.jsx)(`span`,{className:`h-9 w-9`}),(0,j.jsxs)(`button`,{onClick:()=>p(!0),className:`flex-1 truncate rounded-full py-2 text-center text-sm font-medium text-text`,children:[`Hino `,i.number]}),g?(0,j.jsx)(jn,{to:`${t}/${g.id}`,className:`flex h-9 w-9 items-center justify-center rounded-full text-text active:scale-95`,"aria-label":`Próximo hino`,children:`›`}):(0,j.jsx)(`span`,{className:`h-9 w-9`})]})})]})]})}var Dr=null;function Or(){return Dr||=fetch(`./bible/aa.json`).then(e=>e.json()),Dr}async function kr(e){let t=(await Or()).find(t=>t.abbrev===e);return t?t.chapters.length:0}async function Ar(e,t){let n=(await Or()).find(t=>t.abbrev===e);return n?n.chapters[t-1]??[]:[]}var jr=[{abbrev:`gn`,name:`Gênesis`,testament:`VT`},{abbrev:`ex`,name:`Êxodo`,testament:`VT`},{abbrev:`lv`,name:`Levítico`,testament:`VT`},{abbrev:`nm`,name:`Números`,testament:`VT`},{abbrev:`dt`,name:`Deuteronômio`,testament:`VT`},{abbrev:`js`,name:`Josué`,testament:`VT`},{abbrev:`jz`,name:`Juízes`,testament:`VT`},{abbrev:`rt`,name:`Rute`,testament:`VT`},{abbrev:`1sm`,name:`1 Samuel`,testament:`VT`},{abbrev:`2sm`,name:`2 Samuel`,testament:`VT`},{abbrev:`1rs`,name:`1 Reis`,testament:`VT`},{abbrev:`2rs`,name:`2 Reis`,testament:`VT`},{abbrev:`1cr`,name:`1 Crônicas`,testament:`VT`},{abbrev:`2cr`,name:`2 Crônicas`,testament:`VT`},{abbrev:`ed`,name:`Esdras`,testament:`VT`},{abbrev:`ne`,name:`Neemias`,testament:`VT`},{abbrev:`et`,name:`Ester`,testament:`VT`},{abbrev:`jó`,name:`Jó`,testament:`VT`},{abbrev:`sl`,name:`Salmos`,testament:`VT`},{abbrev:`pv`,name:`Provérbios`,testament:`VT`},{abbrev:`ec`,name:`Eclesiastes`,testament:`VT`},{abbrev:`ct`,name:`Cânticos`,testament:`VT`},{abbrev:`is`,name:`Isaías`,testament:`VT`},{abbrev:`jr`,name:`Jeremias`,testament:`VT`},{abbrev:`lm`,name:`Lamentações`,testament:`VT`},{abbrev:`ez`,name:`Ezequiel`,testament:`VT`},{abbrev:`dn`,name:`Daniel`,testament:`VT`},{abbrev:`os`,name:`Oséias`,testament:`VT`},{abbrev:`jl`,name:`Joel`,testament:`VT`},{abbrev:`am`,name:`Amós`,testament:`VT`},{abbrev:`ob`,name:`Obadias`,testament:`VT`},{abbrev:`jn`,name:`Jonas`,testament:`VT`},{abbrev:`mq`,name:`Miquéias`,testament:`VT`},{abbrev:`na`,name:`Naum`,testament:`VT`},{abbrev:`hc`,name:`Habacuque`,testament:`VT`},{abbrev:`sf`,name:`Sofonias`,testament:`VT`},{abbrev:`ag`,name:`Ageu`,testament:`VT`},{abbrev:`zc`,name:`Zacarias`,testament:`VT`},{abbrev:`ml`,name:`Malaquias`,testament:`VT`},{abbrev:`mt`,name:`Mateus`,testament:`NT`},{abbrev:`mc`,name:`Marcos`,testament:`NT`},{abbrev:`lc`,name:`Lucas`,testament:`NT`},{abbrev:`jo`,name:`João`,testament:`NT`},{abbrev:`atos`,name:`Atos`,testament:`NT`},{abbrev:`rm`,name:`Romanos`,testament:`NT`},{abbrev:`1co`,name:`1 Coríntios`,testament:`NT`},{abbrev:`2co`,name:`2 Coríntios`,testament:`NT`},{abbrev:`gl`,name:`Gálatas`,testament:`NT`},{abbrev:`ef`,name:`Efésios`,testament:`NT`},{abbrev:`fp`,name:`Filipenses`,testament:`NT`},{abbrev:`cl`,name:`Colossenses`,testament:`NT`},{abbrev:`1ts`,name:`1 Tessalonicenses`,testament:`NT`},{abbrev:`2ts`,name:`2 Tessalonicenses`,testament:`NT`},{abbrev:`1tm`,name:`1 Timóteo`,testament:`NT`},{abbrev:`2tm`,name:`2 Timóteo`,testament:`NT`},{abbrev:`tt`,name:`Tito`,testament:`NT`},{abbrev:`fm`,name:`Filemom`,testament:`NT`},{abbrev:`hb`,name:`Hebreus`,testament:`NT`},{abbrev:`tg`,name:`Tiago`,testament:`NT`},{abbrev:`1pe`,name:`1 Pedro`,testament:`NT`},{abbrev:`2pe`,name:`2 Pedro`,testament:`NT`},{abbrev:`1jo`,name:`1 João`,testament:`NT`},{abbrev:`2jo`,name:`2 João`,testament:`NT`},{abbrev:`3jo`,name:`3 João`,testament:`NT`},{abbrev:`jd`,name:`Judas`,testament:`NT`},{abbrev:`ap`,name:`Apocalipse`,testament:`NT`}],Mr=Object.fromEntries(jr.map(e=>[e.abbrev,e]));function Nr(){let{hymnFavorites:e,verseFavorites:t}=Sr(),[n,r]=(0,x.useState)(null),[i,a]=(0,x.useState)(null);(0,x.useEffect)(()=>{let t=!0;return Promise.all(pr.map(e=>or(e))).then(n=>{if(!t)return;let i=n.flat();r(i.filter(t=>e.includes(t.id)))}),()=>{t=!1}},[e]),(0,x.useEffect)(()=>{let e=!0;return Promise.all(t.map(async e=>{let[t,n,r]=e.split(`-`),i=Number(n),a=Number(r);return{key:e,book:t,chapter:i,verse:a,text:(await Ar(t,i))[a-1]??``}})).then(t=>{e&&a(t)}),()=>{e=!1}},[t]);let o=n!==null&&n.length===0&&i!==null&&i.length===0;return(0,j.jsxs)(`div`,{children:[(0,j.jsx)(ir,{title:`Favoritos`,subtitle:`Hinos e versículos marcados`}),(0,j.jsxs)(`div`,{className:`px-4 py-4`,children:[(n===null||i===null)&&(0,j.jsx)(_r,{}),o&&(0,j.jsx)(br,{icon:`⭐`,title:`Nenhum favorito ainda`,description:`Marque um hino ou versículo para guardá-lo aqui.`}),i&&i.length>0&&(0,j.jsxs)(`div`,{className:`mb-6`,children:[(0,j.jsx)(`p`,{className:`mb-2 px-1 text-xs font-semibold uppercase tracking-wide text-text-muted`,children:`Versículos`}),(0,j.jsx)(`div`,{className:`flex flex-col gap-2`,children:i.map(e=>(0,j.jsxs)(jn,{to:`/biblia/${e.book}/${e.chapter}`,className:`rounded-2xl bg-surface px-4 py-3 transition active:scale-[0.98]`,children:[(0,j.jsx)(`p`,{className:`line-clamp-2 text-sm text-text`,children:e.text}),(0,j.jsxs)(`p`,{className:`mt-1 text-xs font-medium text-primary`,children:[Mr[e.book]?.name,` `,e.chapter,`:`,e.verse]})]},e.key))})]}),n&&n.length>0&&(0,j.jsxs)(`div`,{children:[(0,j.jsx)(`p`,{className:`mb-2 px-1 text-xs font-semibold uppercase tracking-wide text-text-muted`,children:`Hinos`}),(0,j.jsx)(`div`,{className:`flex flex-col gap-2`,children:n.map(e=>(0,j.jsxs)(jn,{to:`/${fr[e.hymnal]}/${e.id}`,className:`flex items-center gap-3 rounded-2xl bg-surface px-3 py-3 transition active:scale-[0.98]`,children:[(0,j.jsx)(`span`,{className:`flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-primary-soft text-sm font-bold text-primary`,children:e.number}),(0,j.jsxs)(`div`,{className:`min-w-0 flex-1`,children:[(0,j.jsx)(`p`,{className:`truncate text-sm font-medium text-text`,children:e.title}),(0,j.jsx)(`p`,{className:`truncate text-xs text-text-muted`,children:cr[e.hymnal]})]}),(0,j.jsx)(`span`,{"aria-hidden":!0,children:`★`})]},e.id))})]})]})]})}var Pr=[{value:`light`,label:`Claro`},{value:`dark`,label:`Escuro`},{value:`system`,label:`Seguir sistema`}];function Fr(){let e=Qn(e=>e.theme),t=Qn(e=>e.setTheme),n=Qn(e=>e.fontScale),r=Qn(e=>e.setFontScale);return(0,j.jsxs)(`div`,{children:[(0,j.jsx)(ir,{title:`Configurações`}),(0,j.jsxs)(`div`,{className:`px-4 py-4`,children:[(0,j.jsx)(`h2`,{className:`mb-2 text-sm font-semibold text-text-muted`,children:`Tema`}),(0,j.jsx)(`div`,{className:`flex gap-2`,children:Pr.map(n=>(0,j.jsx)(`button`,{onClick:()=>t(n.value),className:`flex-1 rounded-full py-2.5 text-sm font-medium transition ${e===n.value?`bg-primary text-white`:`bg-surface text-text-muted`}`,children:n.label},n.value))}),(0,j.jsx)(`h2`,{className:`mt-6 mb-2 text-sm font-semibold text-text-muted`,children:`Tamanho da letra`}),(0,j.jsxs)(`div`,{className:`flex items-center gap-3`,children:[(0,j.jsx)(`button`,{onClick:()=>r(n-.1),className:`h-10 w-10 rounded-full bg-surface text-sm font-medium text-text active:scale-95`,children:`A-`}),(0,j.jsxs)(`span`,{className:`text-sm text-text-muted`,children:[Math.round(n*100),`%`]}),(0,j.jsx)(`button`,{onClick:()=>r(n+.1),className:`h-10 w-10 rounded-full bg-surface text-sm font-medium text-text active:scale-95`,children:`A+`})]}),(0,j.jsx)(`h2`,{className:`mt-6 mb-2 text-sm font-semibold text-text-muted`,children:`Sobre`}),(0,j.jsx)(`p`,{className:`text-sm text-text-muted`,children:`Minha Igreja reúne, em um só lugar no celular, os cadernos de hinos usados nos cultos e reuniões e a Bíblia — começando pela pasta do Círculo de Oração JD América. Funciona offline, como um app de igreja.`})]})]})}function Ir(){let[e,t]=(0,x.useState)(``),n=Qn(e=>e.lastReadBible),r=n?Mr[n.book]:null,{vt:i,nt:a}=(0,x.useMemo)(()=>{let t=e.trim().toLowerCase(),n=t?jr.filter(e=>e.name.toLowerCase().includes(t)):jr;return{vt:n.filter(e=>e.testament===`VT`),nt:n.filter(e=>e.testament===`NT`)}},[e]);return(0,j.jsxs)(`div`,{children:[(0,j.jsx)(ir,{title:`Bíblia`,subtitle:`Almeida Atualizada`}),(0,j.jsx)(`div`,{className:`px-4 pt-4`,children:(0,j.jsx)(gr,{value:e,onChange:t,placeholder:`Buscar livro…`})}),r&&n&&!e&&(0,j.jsx)(`div`,{className:`px-4 pt-4`,children:(0,j.jsxs)(jn,{to:`/biblia/${n.book}/${n.chapter}`,className:`flex items-center gap-3 rounded-2xl bg-primary-soft px-4 py-3 transition active:scale-[0.98]`,children:[(0,j.jsx)(`span`,{className:`text-2xl`,children:`📖`}),(0,j.jsxs)(`div`,{className:`min-w-0 flex-1`,children:[(0,j.jsx)(`p`,{className:`text-xs font-medium text-primary`,children:`Continuar lendo`}),(0,j.jsxs)(`p`,{className:`truncate font-semibold text-text`,children:[r.name,` `,n.chapter]})]}),(0,j.jsx)(`span`,{className:`text-text-muted`,children:`›`})]})}),(0,j.jsxs)(`div`,{className:`px-4 py-4`,children:[i.length>0&&(0,j.jsx)(Lr,{title:`Antigo Testamento`,books:i}),a.length>0&&(0,j.jsx)(Lr,{title:`Novo Testamento`,books:a}),i.length===0&&a.length===0&&(0,j.jsx)(`p`,{className:`py-8 text-center text-sm text-text-muted`,children:`Nenhum livro encontrado`})]})]})}function Lr({title:e,books:t}){return(0,j.jsxs)(`div`,{className:`mb-6`,children:[(0,j.jsx)(`p`,{className:`mb-2 px-1 text-xs font-semibold uppercase tracking-wide text-text-muted`,children:e}),(0,j.jsx)(`div`,{className:`grid grid-cols-3 gap-2`,children:t.map(e=>(0,j.jsx)(jn,{to:`/biblia/${e.abbrev}`,className:`rounded-2xl bg-surface px-3 py-3 text-center text-sm font-medium text-text transition active:scale-[0.97]`,children:e.name},e.abbrev))})]})}function Rr(){let{book:e}=bt(),t=e?Mr[e]:void 0,{data:n,loading:r,error:i}=xr(()=>kr(e),[e]);return t?(0,j.jsxs)(`div`,{children:[(0,j.jsx)(ir,{title:t.name,showBack:!0,onBack:()=>history.back()}),(0,j.jsxs)(`div`,{className:`px-4 py-4`,children:[r&&(0,j.jsx)(vr,{}),i&&(0,j.jsx)(yr,{}),n!==null&&(0,j.jsx)(`div`,{className:`grid grid-cols-5 gap-2`,children:Array.from({length:n},(e,t)=>t+1).map(e=>(0,j.jsx)(jn,{to:`/biblia/${t.abbrev}/${e}`,className:`flex aspect-square items-center justify-center rounded-2xl bg-surface text-sm font-semibold text-text transition active:scale-[0.95]`,children:e},e))})]})]}):(0,j.jsx)(Vt,{to:`/biblia`,replace:!0})}var zr=Jn()(Zn((e,t)=>({notes:{},setNote:(t,n)=>e(e=>({notes:{...e.notes,[t]:n}})),removeNote:t=>e(e=>{let n={...e.notes};return delete n[t],{notes:n}}),getNote:e=>t().notes[e]}),{name:`adba-app-notes`}));function Br(){let{book:e,chapter:t}=bt(),n=gt(),r=e?Mr[e]:void 0,i=Number(t),{data:a,loading:o,error:s}=xr(()=>Ar(e,i),[e,i]),{data:c}=xr(()=>kr(e),[e]),l=Qn(e=>e.fontScale),u=Qn(e=>e.setFontScale),d=Qn(e=>e.setLastReadBible),{isVerseFavorite:f,toggleVerseFavorite:p}=Sr(),{getNote:m,setNote:h,removeNote:g}=zr(),[_,v]=(0,x.useState)(null),[y,b]=(0,x.useState)(``),[ee,S]=(0,x.useState)(!1);if((0,x.useEffect)(()=>{r&&Number.isFinite(i)&&i>0&&d({book:r.abbrev,chapter:i})},[r,i,d]),(0,x.useEffect)(()=>{v(null),S(!1)},[e,i]),!r||!Number.isFinite(i)||i<1)return(0,j.jsx)(Vt,{to:`/biblia`,replace:!0});let C=r,te=i>1,ne=c!==null&&i<c,re=e=>`${C.abbrev}-${i}-${e}`,w=_===null?null:re(_);function T(){w&&b(m(w)??``),S(!0)}function ie(){w&&(y.trim()?h(w,y.trim()):g(w),S(!1))}function ae(){_===null||!a||navigator.clipboard?.writeText(`${a[_-1]} (${C.name} ${i}:${_})`)}function oe(){_===null||!a||wr({title:`${C.name} ${i}:${_}`,text:`${a[_-1]} (${C.name} ${i}:${_})`,url:location.href})}return(0,j.jsxs)(`div`,{className:`pb-28`,children:[(0,j.jsxs)(`div`,{className:`sticky top-0 z-30 flex items-center gap-2 bg-bg px-4 pb-2 pt-4`,children:[(0,j.jsx)(`button`,{onClick:()=>n(`/biblia`),"aria-label":`Voltar`,className:`flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-surface text-text active:scale-95`,children:`←`}),(0,j.jsxs)(`div`,{className:`flex flex-1 gap-2`,children:[(0,j.jsx)(`button`,{onClick:()=>u(l-.1),className:`h-9 w-9 rounded-full bg-surface text-sm text-text active:scale-95`,children:`A-`}),(0,j.jsx)(`button`,{onClick:()=>u(l+.1),className:`h-9 w-9 rounded-full bg-surface text-sm text-text active:scale-95`,children:`A+`})]})]}),(0,j.jsxs)(`div`,{className:`px-4 py-2 text-center`,children:[(0,j.jsx)(jn,{to:`/biblia/${r.abbrev}`,className:`text-xs font-semibold uppercase tracking-widest text-text-muted`,children:r.name}),(0,j.jsx)(`p`,{className:`text-6xl font-black leading-none text-text`,children:i})]}),(0,j.jsxs)(`div`,{className:`px-4`,children:[o&&(0,j.jsx)(vr,{}),s&&(0,j.jsx)(yr,{}),a&&(0,j.jsx)(`p`,{className:`leading-loose text-text`,style:{fontSize:`${l}rem`,fontFamily:`Georgia, "Times New Roman", serif`},children:a.map((e,t)=>{let n=t+1,r=re(n),i=f(r),a=!!m(r),o=_===n;return(0,j.jsxs)(`span`,{onClick:()=>v(o?null:n),className:`cursor-pointer rounded transition ${i?`bg-accent/25`:``} ${o?`ring-2 ring-primary`:``}`,children:[(0,j.jsxs)(`sup`,{className:`mr-1 font-sans text-[0.65em] font-bold text-primary`,children:[n,a&&`📝`]}),e,` `]},n)})})]}),_!==null&&(0,j.jsx)(`div`,{className:`fixed bottom-16 left-0 right-0 z-40 mx-auto max-w-md px-4`,children:ee?(0,j.jsxs)(`div`,{className:`rounded-2xl border border-border bg-surface p-3 shadow-lg`,children:[(0,j.jsx)(`textarea`,{autoFocus:!0,value:y,onChange:e=>b(e.target.value),placeholder:`Anotação sobre ${r.name} ${i}:${_}…`,className:`h-20 w-full resize-none rounded-xl border border-border bg-bg p-2 text-sm text-text outline-none`}),(0,j.jsxs)(`div`,{className:`mt-2 flex justify-end gap-2`,children:[(0,j.jsx)(`button`,{onClick:()=>S(!1),className:`rounded-full px-4 py-1.5 text-sm font-medium text-text-muted active:scale-95`,children:`Cancelar`}),(0,j.jsx)(`button`,{onClick:ie,className:`rounded-full bg-primary px-4 py-1.5 text-sm font-medium text-white active:scale-95`,children:`Salvar`})]})]}):(0,j.jsxs)(`div`,{className:`flex items-center justify-around rounded-2xl border border-border bg-surface py-2 shadow-lg`,children:[(0,j.jsxs)(`button`,{onClick:()=>w&&p(w),className:`flex flex-col items-center gap-0.5 px-2 text-[11px] font-medium text-text active:scale-95`,children:[(0,j.jsx)(`span`,{className:`text-lg`,children:w&&f(w)?`🖍️`:`🖊️`}),`Marcar`]}),(0,j.jsxs)(`button`,{onClick:T,className:`flex flex-col items-center gap-0.5 px-2 text-[11px] font-medium text-text active:scale-95`,children:[(0,j.jsx)(`span`,{className:`text-lg`,children:`📝`}),`Anotar`]}),(0,j.jsxs)(`button`,{onClick:ae,className:`flex flex-col items-center gap-0.5 px-2 text-[11px] font-medium text-text active:scale-95`,children:[(0,j.jsx)(`span`,{className:`text-lg`,children:`📋`}),`Copiar`]}),(0,j.jsxs)(`button`,{onClick:oe,className:`flex flex-col items-center gap-0.5 px-2 text-[11px] font-medium text-text active:scale-95`,children:[(0,j.jsx)(`span`,{className:`text-lg`,children:`📤`}),`Compartilhar`]})]})}),(0,j.jsx)(`div`,{className:`fixed bottom-16 left-0 right-0 z-30 mx-auto max-w-md px-4 pb-3`,style:{display:_===null?void 0:`none`},children:(0,j.jsxs)(`div`,{className:`flex items-center gap-1 rounded-full border border-border bg-surface p-1.5 shadow-lg`,children:[te?(0,j.jsx)(jn,{to:`/biblia/${r.abbrev}/${i-1}`,className:`flex h-9 w-9 items-center justify-center rounded-full text-text active:scale-95`,"aria-label":`Capítulo anterior`,children:`‹`}):(0,j.jsx)(`span`,{className:`h-9 w-9`}),(0,j.jsxs)(jn,{to:`/biblia/${r.abbrev}`,className:`flex-1 truncate rounded-full py-2 text-center text-sm font-medium text-text`,children:[r.name,` `,i]}),ne?(0,j.jsx)(jn,{to:`/biblia/${r.abbrev}/${i+1}`,className:`flex h-9 w-9 items-center justify-center rounded-full text-text active:scale-95`,"aria-label":`Próximo capítulo`,children:`›`}):(0,j.jsx)(`span`,{className:`h-9 w-9`})]})})]})}function Vr(){return nr(),(0,j.jsxs)(Gt,{children:[(0,j.jsxs)(Ut,{element:(0,j.jsx)(tr,{}),children:[(0,j.jsx)(Ut,{path:`/`,element:(0,j.jsx)(hr,{})}),(0,j.jsx)(Ut,{path:`/harpa`,element:(0,j.jsx)(Cr,{hymnalId:`harpa`,basePath:`/harpa`})}),(0,j.jsx)(Ut,{path:`/harpa/:id`,element:(0,j.jsx)(Er,{hymnalId:`harpa`,basePath:`/harpa`})}),(0,j.jsx)(Ut,{path:`/preciosas`,element:(0,j.jsx)(Cr,{hymnalId:`preciosas`,basePath:`/preciosas`})}),(0,j.jsx)(Ut,{path:`/preciosas/:id`,element:(0,j.jsx)(Er,{hymnalId:`preciosas`,basePath:`/preciosas`})}),(0,j.jsx)(Ut,{path:`/geracao-life`,element:(0,j.jsx)(Cr,{hymnalId:`geracaoLife`,basePath:`/geracao-life`})}),(0,j.jsx)(Ut,{path:`/geracao-life/:id`,element:(0,j.jsx)(Er,{hymnalId:`geracaoLife`,basePath:`/geracao-life`})}),(0,j.jsx)(Ut,{path:`/biblia`,element:(0,j.jsx)(Ir,{})}),(0,j.jsx)(Ut,{path:`/biblia/:book`,element:(0,j.jsx)(Rr,{})}),(0,j.jsx)(Ut,{path:`/biblia/:book/:chapter`,element:(0,j.jsx)(Br,{})}),(0,j.jsx)(Ut,{path:`/favoritos`,element:(0,j.jsx)(Nr,{})}),(0,j.jsx)(Ut,{path:`/configuracoes`,element:(0,j.jsx)(Fr,{})})]}),(0,j.jsx)(Ut,{path:`*`,element:(0,j.jsx)(Vt,{to:`/`,replace:!0})})]})}(0,Hn.createRoot)(document.getElementById(`root`)).render((0,j.jsx)(x.StrictMode,{children:(0,j.jsx)(An,{children:(0,j.jsx)(Vr,{})})}));