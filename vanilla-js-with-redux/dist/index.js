!function(t){var e={};function r(n){if(e[n])return e[n].exports;var o=e[n]={i:n,l:!1,exports:{}};return t[n].call(o.exports,o,o.exports,r),o.l=!0,o.exports}r.m=t,r.c=e,r.d=function(t,e,n){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},r.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)r.d(n,o,function(e){return t[e]}.bind(null,o));return n},r.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="",r(r.s=4)}([function(t,e,r){"use strict";(function(t,n){var o,i=r(1);o="undefined"!=typeof self?self:"undefined"!=typeof window?window:void 0!==t?t:n;var u=Object(i.a)(o);e.a=u}).call(this,r(2),r(3)(t))},function(t,e,r){"use strict";function n(t){var e,r=t.Symbol;return"function"==typeof r?r.observable?e=r.observable:(e=r("observable"),r.observable=e):e="@@observable",e}r.d(e,"a",(function(){return n}))},function(t,e){var r;r=function(){return this}();try{r=r||new Function("return this")()}catch(t){"object"==typeof window&&(r=window)}t.exports=r},function(t,e){t.exports=function(t){if(!t.webpackPolyfill){var e=Object.create(t);e.children||(e.children=[]),Object.defineProperty(e,"loaded",{enumerable:!0,get:function(){return e.l}}),Object.defineProperty(e,"id",{enumerable:!0,get:function(){return e.i}}),Object.defineProperty(e,"exports",{enumerable:!0}),e.webpackPolyfill=1}return e}},function(t,e,r){"use strict";function n(t){for(var e=arguments.length,r=Array(e>1?e-1:0),n=1;n<e;n++)r[n-1]=arguments[n];throw Error("[Immer] minified error nr: "+t+(r.length?" "+r.join(","):"")+". Find the full error at: https://bit.ly/3cXEKWf")}function o(t){return!!t&&!!t[Y]}function i(t){return!!t&&(function(t){if(!t||"object"!=typeof t)return!1;var e=Object.getPrototypeOf(t);return!e||e===Object.prototype}(t)||Array.isArray(t)||!!t[B]||!!t.constructor[B]||d(t)||p(t))}function u(t,e,r){void 0===r&&(r=!1),0===c(t)?(r?Object.keys:$)(t).forEach((function(n){r&&"symbol"==typeof n||e(n,t[n],t)})):t.forEach((function(r,n){return e(n,r,t)}))}function c(t){var e=t[Y];return e?e.i>3?e.i-4:e.i:Array.isArray(t)?1:d(t)?2:p(t)?3:0}function a(t,e){return 2===c(t)?t.has(e):Object.prototype.hasOwnProperty.call(t,e)}function f(t,e){return 2===c(t)?t.get(e):t[e]}function l(t,e,r){var n=c(t);2===n?t.set(e,r):3===n?(t.delete(e),t.add(r)):t[e]=r}function s(t,e){return t===e?0!==t||1/t==1/e:t!=t&&e!=e}function d(t){return W&&t instanceof Map}function p(t){return q&&t instanceof Set}function y(t){return t.o||t.t}function h(t){if(Array.isArray(t))return Array.prototype.slice.call(t);var e=H(t);delete e[Y];for(var r=$(e),n=0;n<r.length;n++){var o=r[n],i=e[o];!1===i.writable&&(i.writable=!0,i.configurable=!0),(i.get||i.set)&&(e[o]={configurable:!0,writable:!0,enumerable:i.enumerable,value:t[o]})}return Object.create(Object.getPrototypeOf(t),e)}function v(t,e){g(t)||o(t)||!i(t)||(c(t)>1&&(t.set=t.add=t.clear=t.delete=b),Object.freeze(t),e&&u(t,(function(t,e){return v(e,!0)}),!0))}function b(){n(2)}function g(t){return null==t||"object"!=typeof t||Object.isFrozen(t)}function m(t){var e=V[t];return e||n(19,t),e}function w(t,e){V[t]=e}function O(){return z}function P(t,e){e&&(m("Patches"),t.u=[],t.s=[],t.v=e)}function j(t){S(t),t.p.forEach(x),t.p=null}function S(t){t===z&&(z=t.l)}function E(t){return z={p:[],l:z,h:t,m:!0,_:0}}function x(t){var e=t[Y];0===e.i||1===e.i?e.j():e.g=!0}function A(t,e){e._=e.p.length;var r=e.p[0],o=void 0!==t&&t!==r;return e.h.O||m("ES5").S(e,t,o),o?(r[Y].P&&(j(e),n(4)),i(t)&&(t=_(e,t),e.l||D(e,t)),e.u&&m("Patches").M(r[Y],t,e.u,e.s)):t=_(e,r,[]),j(e),e.u&&e.v(e.u,e.s),t!==J?t:void 0}function _(t,e,r){if(g(e))return e;var n=e[Y];if(!n)return u(e,(function(o,i){return I(t,n,e,o,i,r)}),!0),e;if(n.A!==t)return e;if(!n.P)return D(t,n.t,!0),n.t;if(!n.I){n.I=!0,n.A._--;var o=4===n.i||5===n.i?n.o=h(n.k):n.o;u(3===n.i?new Set(o):o,(function(e,i){return I(t,n,o,e,i,r)})),D(t,o,!1),r&&t.u&&m("Patches").R(n,r,t.u,t.s)}return n.o}function I(t,e,r,n,u,c){if(o(u)){var f=_(t,u,c&&e&&3!==e.i&&!a(e.D,n)?c.concat(n):void 0);if(l(r,n,f),!o(f))return;t.m=!1}if(i(u)&&!g(u)){if(!t.h.N&&t._<1)return;_(t,u),e&&e.A.l||D(t,u)}}function D(t,e,r){void 0===r&&(r=!1),t.h.N&&t.m&&v(e,r)}function k(t,e){var r=t[Y];return(r?y(r):t)[e]}function R(t,e){if(e in t)for(var r=Object.getPrototypeOf(t);r;){var n=Object.getOwnPropertyDescriptor(r,e);if(n)return n;r=Object.getPrototypeOf(r)}}function T(t){t.P||(t.P=!0,t.l&&T(t.l))}function N(t){t.o||(t.o=h(t.t))}function C(t,e,r){var n=d(e)?m("MapSet").T(e,r):p(e)?m("MapSet").F(e,r):t.O?function(t,e){var r=Array.isArray(t),n={i:r?1:0,A:e?e.A:O(),P:!1,I:!1,D:{},l:e,t:t,k:null,o:null,j:null,C:!1},o=n,i=G;r&&(o=[n],i=Q);var u=Proxy.revocable(o,i),c=u.revoke,a=u.proxy;return n.k=a,n.j=c,a}(e,r):m("ES5").J(e,r);return(r?r.A:O()).p.push(n),n}function M(t){return o(t)||n(22,t),function t(e){if(!i(e))return e;var r,n=e[Y],o=c(e);if(n){if(!n.P&&(n.i<4||!m("ES5").K(n)))return n.t;n.I=!0,r=L(e,o),n.I=!1}else r=L(e,o);return u(r,(function(e,o){n&&f(n.t,e)===o||l(r,e,t(o))})),3===o?new Set(r):r}(t)}function L(t,e){switch(e){case 2:return new Map(t);case 3:return Array.from(t)}return h(t)}function F(){function t(t,e){var r=i[t];return r?r.enumerable=e:i[t]=r={configurable:!0,enumerable:e,get:function(){var e=this[Y];return G.get(e,t)},set:function(e){var r=this[Y];G.set(r,t,e)}},r}function e(t){for(var e=t.length-1;e>=0;e--){var o=t[e][Y];if(!o.P)switch(o.i){case 5:n(o)&&T(o);break;case 4:r(o)&&T(o)}}}function r(t){for(var e=t.t,r=t.k,n=$(r),o=n.length-1;o>=0;o--){var i=n[o];if(i!==Y){var u=e[i];if(void 0===u&&!a(e,i))return!0;var c=r[i],f=c&&c[Y];if(f?f.t!==u:!s(c,u))return!0}}var l=!!e[Y];return n.length!==$(e).length+(l?0:1)}function n(t){var e=t.k;if(e.length!==t.t.length)return!0;var r=Object.getOwnPropertyDescriptor(e,e.length-1);return!(!r||r.get)}var i={};w("ES5",{J:function(e,r){var n=Array.isArray(e),o=function(e,r){if(e){for(var n=Array(r.length),o=0;o<r.length;o++)Object.defineProperty(n,""+o,t(o,!0));return n}var i=H(r);delete i[Y];for(var u=$(i),c=0;c<u.length;c++){var a=u[c];i[a]=t(a,e||!!i[a].enumerable)}return Object.create(Object.getPrototypeOf(r),i)}(n,e),i={i:n?5:4,A:r?r.A:O(),P:!1,I:!1,D:{},l:r,t:e,k:o,o:null,g:!1,C:!1};return Object.defineProperty(o,Y,{value:i,writable:!0}),o},S:function(t,r,i){i?o(r)&&r[Y].A===t&&e(t.p):(t.u&&function t(e){if(e&&"object"==typeof e){var r=e[Y];if(r){var o=r.t,i=r.k,c=r.D,f=r.i;if(4===f)u(i,(function(e){e!==Y&&(void 0!==o[e]||a(o,e)?c[e]||t(i[e]):(c[e]=!0,T(r)))})),u(o,(function(t){void 0!==i[t]||a(i,t)||(c[t]=!1,T(r))}));else if(5===f){if(n(r)&&(T(r),c.length=!0),i.length<o.length)for(var l=i.length;l<o.length;l++)c[l]=!1;else for(var s=o.length;s<i.length;s++)c[s]=!0;for(var d=Math.min(i.length,o.length),p=0;p<d;p++)void 0===c[p]&&t(i[p])}}}}(t.p[0]),e(t.p))},K:function(t){return 4===t.i?r(t):n(t)}})}r.r(e);var K,z,U="undefined"!=typeof Symbol&&"symbol"==typeof Symbol("x"),W="undefined"!=typeof Map,q="undefined"!=typeof Set,X="undefined"!=typeof Proxy&&void 0!==Proxy.revocable&&"undefined"!=typeof Reflect,J=U?Symbol.for("immer-nothing"):((K={})["immer-nothing"]=!0,K),B=U?Symbol.for("immer-draftable"):"__$immer_draftable",Y=U?Symbol.for("immer-state"):"__$immer_state",$=("undefined"!=typeof Symbol&&Symbol.iterator,"undefined"!=typeof Reflect&&Reflect.ownKeys?Reflect.ownKeys:void 0!==Object.getOwnPropertySymbols?function(t){return Object.getOwnPropertyNames(t).concat(Object.getOwnPropertySymbols(t))}:Object.getOwnPropertyNames),H=Object.getOwnPropertyDescriptors||function(t){var e={};return $(t).forEach((function(r){e[r]=Object.getOwnPropertyDescriptor(t,r)})),e},V={},G={get:function(t,e){if(e===Y)return t;var r=y(t);if(!a(r,e))return function(t,e,r){var n,o=R(e,r);return o?"value"in o?o.value:null===(n=o.get)||void 0===n?void 0:n.call(t.k):void 0}(t,r,e);var n=r[e];return t.I||!i(n)?n:n===k(t.t,e)?(N(t),t.o[e]=C(t.A.h,n,t)):n},has:function(t,e){return e in y(t)},ownKeys:function(t){return Reflect.ownKeys(y(t))},set:function(t,e,r){var n=R(y(t),e);if(null==n?void 0:n.set)return n.set.call(t.k,r),!0;if(t.D[e]=!0,!t.P){if(s(r,k(y(t),e))&&(void 0!==r||a(t.t,e)))return!0;N(t),T(t)}return t.o[e]=r,!0},deleteProperty:function(t,e){return void 0!==k(t.t,e)||e in t.t?(t.D[e]=!1,N(t),T(t)):delete t.D[e],t.o&&delete t.o[e],!0},getOwnPropertyDescriptor:function(t,e){var r=y(t),n=Reflect.getOwnPropertyDescriptor(r,e);return n?{writable:!0,configurable:1!==t.i||"length"!==e,enumerable:n.enumerable,value:r[e]}:n},defineProperty:function(){n(11)},getPrototypeOf:function(t){return Object.getPrototypeOf(t.t)},setPrototypeOf:function(){n(12)}},Q={};u(G,(function(t,e){Q[t]=function(){return arguments[0]=arguments[0][0],e.apply(this,arguments)}})),Q.deleteProperty=function(t,e){return G.deleteProperty.call(this,t[0],e)},Q.set=function(t,e,r){return G.set.call(this,t[0],e,r,t[0])};var Z=new(function(){function t(t){this.O=X,this.N=!1,"boolean"==typeof(null==t?void 0:t.useProxies)&&this.setUseProxies(t.useProxies),"boolean"==typeof(null==t?void 0:t.autoFreeze)&&this.setAutoFreeze(t.autoFreeze),this.produce=this.produce.bind(this),this.produceWithPatches=this.produceWithPatches.bind(this)}var e=t.prototype;return e.produce=function(t,e,r){if("function"==typeof t&&"function"!=typeof e){var o=e;e=t;var u=this;return function(t){var r=this;void 0===t&&(t=o);for(var n=arguments.length,i=Array(n>1?n-1:0),c=1;c<n;c++)i[c-1]=arguments[c];return u.produce(t,(function(t){var n;return(n=e).call.apply(n,[r,t].concat(i))}))}}var c;if("function"!=typeof e&&n(6),void 0!==r&&"function"!=typeof r&&n(7),i(t)){var a=E(this),f=C(this,t,void 0),l=!0;try{c=e(f),l=!1}finally{l?j(a):S(a)}return"undefined"!=typeof Promise&&c instanceof Promise?c.then((function(t){return P(a,r),A(t,a)}),(function(t){throw j(a),t})):(P(a,r),A(c,a))}if(!t||"object"!=typeof t){if((c=e(t))===J)return;return void 0===c&&(c=t),this.N&&v(c,!0),c}n(21,t)},e.produceWithPatches=function(t,e){var r,n,o=this;return"function"==typeof t?function(e){for(var r=arguments.length,n=Array(r>1?r-1:0),i=1;i<r;i++)n[i-1]=arguments[i];return o.produceWithPatches(e,(function(e){return t.apply(void 0,[e].concat(n))}))}:[this.produce(t,e,(function(t,e){r=t,n=e})),r,n]},e.createDraft=function(t){i(t)||n(8),o(t)&&(t=M(t));var e=E(this),r=C(this,t,void 0);return r[Y].C=!0,S(e),r},e.finishDraft=function(t,e){var r=(t&&t[Y]).A;return P(r,e),A(void 0,r)},e.setAutoFreeze=function(t){this.N=t},e.setUseProxies=function(t){t&&!X&&n(20),this.O=t},e.applyPatches=function(t,e){var r;for(r=e.length-1;r>=0;r--){var n=e[r];if(0===n.path.length&&"replace"===n.op){t=n.value;break}}var i=m("Patches").$;return o(t)?i(t,e):this.produce(t,(function(t){return i(t,e.slice(r+1))}))},t}()),tt=Z.produce,et=(Z.produceWithPatches.bind(Z),Z.setAutoFreeze.bind(Z),Z.setUseProxies.bind(Z),Z.applyPatches.bind(Z),Z.createDraft.bind(Z),Z.finishDraft.bind(Z),tt),rt=r(0),nt=function(){return Math.random().toString(36).substring(7).split("").join(".")},ot={INIT:"@@redux/INIT"+nt(),REPLACE:"@@redux/REPLACE"+nt(),PROBE_UNKNOWN_ACTION:function(){return"@@redux/PROBE_UNKNOWN_ACTION"+nt()}};function it(t){if("object"!=typeof t||null===t)return!1;for(var e=t;null!==Object.getPrototypeOf(e);)e=Object.getPrototypeOf(e);return Object.getPrototypeOf(t)===e}function ut(t,e,r){var n;if("function"==typeof e&&"function"==typeof r||"function"==typeof r&&"function"==typeof arguments[3])throw new Error("It looks like you are passing several store enhancers to createStore(). This is not supported. Instead, compose them together to a single function.");if("function"==typeof e&&void 0===r&&(r=e,e=void 0),void 0!==r){if("function"!=typeof r)throw new Error("Expected the enhancer to be a function.");return r(ut)(t,e)}if("function"!=typeof t)throw new Error("Expected the reducer to be a function.");var o=t,i=e,u=[],c=u,a=!1;function f(){c===u&&(c=u.slice())}function l(){if(a)throw new Error("You may not call store.getState() while the reducer is executing. The reducer has already received the state as an argument. Pass it down from the top reducer instead of reading it from the store.");return i}function s(t){if("function"!=typeof t)throw new Error("Expected the listener to be a function.");if(a)throw new Error("You may not call store.subscribe() while the reducer is executing. If you would like to be notified after the store has been updated, subscribe from a component and invoke store.getState() in the callback to access the latest state. See https://redux.js.org/api-reference/store#subscribelistener for more details.");var e=!0;return f(),c.push(t),function(){if(e){if(a)throw new Error("You may not unsubscribe from a store listener while the reducer is executing. See https://redux.js.org/api-reference/store#subscribelistener for more details.");e=!1,f();var r=c.indexOf(t);c.splice(r,1),u=null}}}function d(t){if(!it(t))throw new Error("Actions must be plain objects. Use custom middleware for async actions.");if(void 0===t.type)throw new Error('Actions may not have an undefined "type" property. Have you misspelled a constant?');if(a)throw new Error("Reducers may not dispatch actions.");try{a=!0,i=o(i,t)}finally{a=!1}for(var e=u=c,r=0;r<e.length;r++){(0,e[r])()}return t}function p(t){if("function"!=typeof t)throw new Error("Expected the nextReducer to be a function.");o=t,d({type:ot.REPLACE})}function y(){var t,e=s;return(t={subscribe:function(t){if("object"!=typeof t||null===t)throw new TypeError("Expected the observer to be an object.");function r(){t.next&&t.next(l())}return r(),{unsubscribe:e(r)}}})[rt.a]=function(){return this},t}return d({type:ot.INIT}),(n={dispatch:d,subscribe:s,getState:l,replaceReducer:p})[rt.a]=y,n}function ct(t,e){var r=e&&e.type;return"Given "+(r&&'action "'+String(r)+'"'||"an action")+', reducer "'+t+'" returned undefined. To ignore an action, you must explicitly return the previous state. If you want this reducer to hold no value, you can return null instead of undefined.'}function at(t){for(var e=Object.keys(t),r={},n=0;n<e.length;n++){var o=e[n];0,"function"==typeof t[o]&&(r[o]=t[o])}var i,u=Object.keys(r);try{!function(t){Object.keys(t).forEach((function(e){var r=t[e];if(void 0===r(void 0,{type:ot.INIT}))throw new Error('Reducer "'+e+"\" returned undefined during initialization. If the state passed to the reducer is undefined, you must explicitly return the initial state. The initial state may not be undefined. If you don't want to set a value for this reducer, you can use null instead of undefined.");if(void 0===r(void 0,{type:ot.PROBE_UNKNOWN_ACTION()}))throw new Error('Reducer "'+e+"\" returned undefined when probed with a random type. Don't try to handle "+ot.INIT+' or other actions in "redux/*" namespace. They are considered private. Instead, you must return the current state for any unknown actions, unless it is undefined, in which case you must return the initial state, regardless of the action type. The initial state may not be undefined, but can be null.')}))}(r)}catch(t){i=t}return function(t,e){if(void 0===t&&(t={}),i)throw i;for(var n=!1,o={},c=0;c<u.length;c++){var a=u[c],f=r[a],l=t[a],s=f(l,e);if(void 0===s){var d=ct(a,e);throw new Error(d)}o[a]=s,n=n||s!==l}return(n=n||u.length!==Object.keys(t).length)?o:t}}function ft(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function lt(t,e){var r=Object.keys(t);return Object.getOwnPropertySymbols&&r.push.apply(r,Object.getOwnPropertySymbols(t)),e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r}function st(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?lt(r,!0).forEach((function(e){ft(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):lt(r).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function dt(){for(var t=arguments.length,e=new Array(t),r=0;r<t;r++)e[r]=arguments[r];return 0===e.length?function(t){return t}:1===e.length?e[0]:e.reduce((function(t,e){return function(){return t(e.apply(void 0,arguments))}}))}function pt(){for(var t=arguments.length,e=new Array(t),r=0;r<t;r++)e[r]=arguments[r];return function(t){return function(){var r=t.apply(void 0,arguments),n=function(){throw new Error("Dispatching while constructing your middleware is not allowed. Other middleware would not be applied to this dispatch.")},o={getState:r.getState,dispatch:function(){return n.apply(void 0,arguments)}},i=e.map((function(t){return t(o)}));return st({},r,{dispatch:n=dt.apply(void 0,i)(r.dispatch)})}}}function yt(t,e){return t===e}function ht(t,e,r){if(null===e||null===r||e.length!==r.length)return!1;for(var n=e.length,o=0;o<n;o++)if(!t(e[o],r[o]))return!1;return!0}function vt(t){var e=Array.isArray(t[0])?t[0]:t;if(!e.every((function(t){return"function"==typeof t}))){var r=e.map((function(t){return typeof t})).join(", ");throw new Error("Selector creators expect all input-selectors to be functions, instead received the following types: ["+r+"]")}return e}!function(t){for(var e=arguments.length,r=Array(e>1?e-1:0),n=1;n<e;n++)r[n-1]=arguments[n]}((function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:yt,r=null,n=null;return function(){return ht(e,r,arguments)||(n=t.apply(null,arguments)),r=arguments,n}}));function bt(t){return function(e){var r=e.dispatch,n=e.getState;return function(e){return function(o){return"function"==typeof o?o(r,n,t):e(o)}}}}var gt=bt();gt.withExtraArgument=bt;var mt=gt;function wt(){return(wt=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var r=arguments[e];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])}return t}).apply(this,arguments)}function Ot(t){return(Ot=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function Pt(t,e){return(Pt=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function jt(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}function St(t,e,r){return(St=jt()?Reflect.construct:function(t,e,r){var n=[null];n.push.apply(n,e);var o=new(Function.bind.apply(t,n));return r&&Pt(o,r.prototype),o}).apply(null,arguments)}function Et(t){var e="function"==typeof Map?new Map:void 0;return(Et=function(t){if(null===t||!function(t){return-1!==Function.toString.call(t).indexOf("[native code]")}(t))return t;if("function"!=typeof t)throw new TypeError("Super expression must either be null or a function");if(void 0!==e){if(e.has(t))return e.get(t);e.set(t,r)}function r(){return St(t,arguments,Ot(this).constructor)}return r.prototype=Object.create(t.prototype,{constructor:{value:r,enumerable:!1,writable:!0,configurable:!0}}),Pt(r,t)})(t)}var xt="undefined"!=typeof window&&window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__?window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__:function(){if(0!==arguments.length)return"object"==typeof arguments[0]?dt:dt.apply(null,arguments)};function At(t){if("object"!=typeof t||null===t)return!1;for(var e=t;null!==Object.getPrototypeOf(e);)e=Object.getPrototypeOf(e);return Object.getPrototypeOf(t)===e}var _t=function(t){var e,r;function n(){return t.apply(this,arguments)||this}r=t,(e=n).prototype=Object.create(r.prototype),e.prototype.constructor=e,e.__proto__=r;var o=n.prototype;return o.concat=function(){for(var e,r=arguments.length,o=new Array(r),i=0;i<r;i++)o[i]=arguments[i];return St(n,(e=t.prototype.concat).call.apply(e,[this].concat(o)))},o.prepend=function(){for(var t=arguments.length,e=new Array(t),r=0;r<t;r++)e[r]=arguments[r];return 1===e.length&&Array.isArray(e[0])?St(n,e[0].concat(this)):St(n,e.concat(this))},n}(Et(Array));function It(){return function(t){return function(t){void 0===t&&(t={});var e=t,r=e.thunk,n=void 0===r||r,o=(e.immutableCheck,e.serializableCheck,new _t);n&&(!function(t){return"boolean"==typeof t}(n)?o.push(mt.withExtraArgument(n.extraArgument)):o.push(mt));0;return o}(t)}}function Dt(t,e){function r(){if(e){var r=e.apply(void 0,arguments);if(!r)throw new Error("prepareAction did not return an object");return wt({type:t,payload:r.payload},"meta"in r&&{meta:r.meta},{},"error"in r&&{error:r.error})}return{type:t,payload:arguments.length<=0?void 0:arguments[0]}}return r.toString=function(){return""+t},r.type=t,r.match=function(e){return e.type===t},r}function kt(t){var e,r={},n=[],o={addCase:function(t,e){var n="string"==typeof t?t:t.type;if(n in r)throw new Error("addCase cannot be called with two reducers for the same action type");return r[n]=e,o},addMatcher:function(t,e){return n.push({matcher:t,reducer:e}),o},addDefaultCase:function(t){return e=t,o}};return t(o),[r,n,e]}"undefined"!=typeof Symbol&&(Symbol.iterator||(Symbol.iterator=Symbol("Symbol.iterator"))),"undefined"!=typeof Symbol&&(Symbol.asyncIterator||(Symbol.asyncIterator=Symbol("Symbol.asyncIterator")));F();const Rt=function(t){var e=t.name,r=t.initialState;if(!e)throw new Error("`name` is a required option for createSlice");var n=t.reducers||{},u=void 0===t.extraReducers?[]:"function"==typeof t.extraReducers?kt(t.extraReducers):[t.extraReducers],c=u[0],a=void 0===c?{}:c,f=u[1],l=void 0===f?[]:f,s=u[2],d=void 0===s?void 0:s,p=Object.keys(n),y={},h={},v={};p.forEach((function(t){var r,o,i=n[t],u=e+"/"+t;"reducer"in i?(r=i.reducer,o=i.prepare):r=i,y[t]=r,h[u]=r,v[t]=o?Dt(u,o):Dt(u)}));var b=function(t,e,r,n){void 0===r&&(r=[]);var u="function"==typeof e?kt(e):[e,r,n],c=u[0],a=u[1],f=u[2];return function(e,r){void 0===e&&(e=t);var n=[c[r.type]].concat(a.filter((function(t){return(0,t.matcher)(r)})).map((function(t){return t.reducer})));return 0===n.filter((function(t){return!!t})).length&&(n=[f]),n.reduce((function(t,e){if(e){if(o(t)){var n=e(t,r);return void 0===n?t:n}if(i(t))return et(t,(function(t){return e(t,r)}));var u=e(t,r);if(void 0===u)throw Error("A case reducer on a non-draftable value must not return undefined");return u}return t}),e)}}(r,wt({},a,{},h),l,d);return{name:e,reducer:b,actions:v,caseReducers:y}}({name:"todo",initialState:function(t){let e=localStorage.getItem(t);return e=e?JSON.parse(e):[],e}("todo"),reducers:{addTodo:{reducer(t,e){t.push(e.payload)},prepare:(t,e)=>({payload:{id:Date.now(),text:t,status:e}})},removeTodo(t,e){}}}),{addTodo:Tt,removeTodo:Nt}=Rt.actions;var Ct=function(t){var e,r=It(),n=t||{},o=n.reducer,i=void 0===o?void 0:o,u=n.middleware,c=void 0===u?r():u,a=n.devTools,f=void 0===a||a,l=n.preloadedState,s=void 0===l?void 0:l,d=n.enhancers,p=void 0===d?void 0:d;if("function"==typeof i)e=i;else{if(!At(i))throw new Error('"reducer" is a required argument, and must be a function or an object of functions that can be passed to combineReducers');e=at(i)}var y=pt.apply(void 0,"function"==typeof c?c(r):c),h=dt;f&&(h=xt(wt({trace:!1},"object"==typeof f&&f)));var v=[y];return Array.isArray(p)?v=[y].concat(p):"function"==typeof p&&(v=p(v)),ut(e,s,h.apply(void 0,v))}({reducer:{todo:Rt.reducer}});const Mt=document.querySelector(".todo-form"),Lt=document.querySelector(".todo-input"),Ft=document.querySelector(".todo-list");function Kt(t){t.preventDefault(),Ct.dispatch(Tt(Lt.value,"ongoing")),Lt.value=""}function zt(){}function Ut(){}function Wt(){}function qt(t,e,r){const n=document.createElement("button");return n.classList.add(...e),n.innerText=t,r&&"function"==typeof r&&n.addEventListener("click",r.bind(this)),n}function Xt(){Ft.innerHTML="",Ct.getState().todo.forEach(t=>{Ft.appendChild(function(t){const e=document.createElement("li"),r=document.createElement("span"),n=document.createElement("div");let o;"ongoing"===t.status?o=qt("v",["btn","todo-status-btn","todo-finish-btn"],zt):"finished"===t.status&&(o=qt("r",["btn","todo-status-btn","todo-ongoing-btn"],Wt),e.classList.add("finished"));const i=qt("x",["btn","todo-delete-btn"],Ut);return n.classList.add("todo-btns"),n.appendChild(o),n.appendChild(i),r.classList.add("todo-text"),r.innerText=t.text,e.id=t.id,e.classList.add("todo-item"),e.appendChild(r),e.appendChild(n),e}(t))})}Mt.addEventListener("submit",Kt),Xt(),Ct.subscribe(Xt),Ct.subscribe(()=>{return t="todo",e=Ct.getState().todo,void localStorage.setItem(t,JSON.stringify(e));var t,e}),console.log(Ct.getState().todo)}]);