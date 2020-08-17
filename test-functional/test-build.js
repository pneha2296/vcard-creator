/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./test-pre-build.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "../dist/vcard-creator.js":
/*!********************************!*\
  !*** ../dist/vcard-creator.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("!function(t,n){ true?module.exports=n():undefined}(\"undefined\"!=typeof self?self:this,(function(){return function(t){var n={};function e(r){if(n[r])return n[r].exports;var o=n[r]={i:r,l:!1,exports:{}};return t[r].call(o.exports,o,o.exports,e),o.l=!0,o.exports}return e.m=t,e.c=n,e.d=function(t,n,r){e.o(t,n)||Object.defineProperty(t,n,{enumerable:!0,get:r})},e.r=function(t){\"undefined\"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:\"Module\"}),Object.defineProperty(t,\"__esModule\",{value:!0})},e.t=function(t,n){if(1&n&&(t=e(t)),8&n)return t;if(4&n&&\"object\"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(e.r(r),Object.defineProperty(r,\"default\",{enumerable:!0,value:t}),2&n&&\"string\"!=typeof t)for(var o in t)e.d(r,o,function(n){return t[n]}.bind(null,o));return r},e.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(n,\"a\",n),n},e.o=function(t,n){return Object.prototype.hasOwnProperty.call(t,n)},e.p=\"\",e(e.s=54)}([function(t,n,e){(function(n){var e=function(t){return t&&t.Math==Math&&t};t.exports=e(\"object\"==typeof globalThis&&globalThis)||e(\"object\"==typeof window&&window)||e(\"object\"==typeof self&&self)||e(\"object\"==typeof n&&n)||Function(\"return this\")()}).call(this,e(56))},function(t,n){t.exports=function(t){try{return!!t()}catch(t){return!0}}},function(t,n){t.exports=function(t){return\"object\"==typeof t?null!==t:\"function\"==typeof t}},function(t,n,e){var r=e(0),o=e(33),i=e(6),c=e(34),u=e(41),a=e(70),f=o(\"wks\"),s=r.Symbol,l=a?s:s&&s.withoutSetter||c;t.exports=function(t){return i(f,t)||(u&&i(s,t)?f[t]=s[t]:f[t]=l(\"Symbol.\"+t)),f[t]}},function(t,n,e){var r=e(0),o=e(28).f,i=e(9),c=e(12),u=e(19),a=e(62),f=e(38);t.exports=function(t,n){var e,s,l,p,v,d=t.target,h=t.global,g=t.stat;if(e=h?r:g?r[d]||u(d,{}):(r[d]||{}).prototype)for(s in n){if(p=n[s],l=t.noTargetGet?(v=o(e,s))&&v.value:e[s],!f(h?s:d+(g?\".\":\"#\")+s,t.forced)&&void 0!==l){if(typeof p==typeof l)continue;a(p,l)}(t.sham||l&&l.sham)&&i(p,\"sham\",!0),c(e,s,p,t)}}},function(t,n,e){var r=e(1);t.exports=!r((function(){return 7!=Object.defineProperty({},1,{get:function(){return 7}})[1]}))},function(t,n){var e={}.hasOwnProperty;t.exports=function(t,n){return e.call(t,n)}},function(t,n,e){var r=e(2);t.exports=function(t){if(!r(t))throw TypeError(String(t)+\" is not an object\");return t}},function(t,n){t.exports=function(t){if(null==t)throw TypeError(\"Can't call method on \"+t);return t}},function(t,n,e){var r=e(5),o=e(11),i=e(16);t.exports=r?function(t,n,e){return o.f(t,n,i(1,e))}:function(t,n,e){return t[n]=e,t}},function(t,n){var e={}.toString;t.exports=function(t){return e.call(t).slice(8,-1)}},function(t,n,e){var r=e(5),o=e(29),i=e(7),c=e(18),u=Object.defineProperty;n.f=r?u:function(t,n,e){if(i(t),n=c(n,!0),i(e),o)try{return u(t,n,e)}catch(t){}if(\"get\"in e||\"set\"in e)throw TypeError(\"Accessors not supported\");return\"value\"in e&&(t[n]=e.value),t}},function(t,n,e){var r=e(0),o=e(9),i=e(6),c=e(19),u=e(30),a=e(32),f=a.get,s=a.enforce,l=String(String).split(\"String\");(t.exports=function(t,n,e,u){var a=!!u&&!!u.unsafe,f=!!u&&!!u.enumerable,p=!!u&&!!u.noTargetGet;\"function\"==typeof e&&(\"string\"!=typeof n||i(e,\"name\")||o(e,\"name\",n),s(e).source=l.join(\"string\"==typeof n?n:\"\")),t!==r?(a?!p&&t[n]&&(f=!0):delete t[n],f?t[n]=e:o(t,n,e)):f?t[n]=e:c(n,e)})(Function.prototype,\"toString\",(function(){return\"function\"==typeof this&&f(this).source||u(this)}))},function(t,n,e){var r=e(15),o=Math.min;t.exports=function(t){return t>0?o(r(t),9007199254740991):0}},function(t,n,e){var r=e(17),o=e(8);t.exports=function(t){return r(o(t))}},function(t,n){var e=Math.ceil,r=Math.floor;t.exports=function(t){return isNaN(t=+t)?0:(t>0?r:e)(t)}},function(t,n){t.exports=function(t,n){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:n}}},function(t,n,e){var r=e(1),o=e(10),i=\"\".split;t.exports=r((function(){return!Object(\"z\").propertyIsEnumerable(0)}))?function(t){return\"String\"==o(t)?i.call(t,\"\"):Object(t)}:Object},function(t,n,e){var r=e(2);t.exports=function(t,n){if(!r(t))return t;var e,o;if(n&&\"function\"==typeof(e=t.toString)&&!r(o=e.call(t)))return o;if(\"function\"==typeof(e=t.valueOf)&&!r(o=e.call(t)))return o;if(!n&&\"function\"==typeof(e=t.toString)&&!r(o=e.call(t)))return o;throw TypeError(\"Can't convert object to primitive value\")}},function(t,n,e){var r=e(0),o=e(9);t.exports=function(t,n){try{o(r,t,n)}catch(e){r[t]=n}return n}},function(t,n,e){var r=e(64),o=e(0),i=function(t){return\"function\"==typeof t?t:void 0};t.exports=function(t,n){return arguments.length<2?i(r[t])||i(o[t]):r[t]&&r[t][n]||o[t]&&o[t][n]}},function(t,n,e){var r=e(8);t.exports=function(t){return Object(r(t))}},function(t,n,e){var r=e(5),o=e(1),i=e(6),c=Object.defineProperty,u={},a=function(t){throw t};t.exports=function(t,n){if(i(u,t))return u[t];n||(n={});var e=[][t],f=!!i(n,\"ACCESSORS\")&&n.ACCESSORS,s=i(n,0)?n[0]:a,l=i(n,1)?n[1]:void 0;return u[t]=!!e&&!o((function(){if(f&&!r)return!0;var t={length:-1};f?c(t,1,{enumerable:!0,get:a}):t[1]=1,e.call(t,s,l)}))}},function(t,n,e){\"use strict\";var r=e(1);t.exports=function(t,n){var e=[][t];return!!e&&r((function(){e.call(null,n||function(){throw 1},1)}))}},function(t,n,e){\"use strict\";var r=e(4),o=e(25);r({target:\"RegExp\",proto:!0,forced:/./.exec!==o},{exec:o})},function(t,n,e){\"use strict\";var r,o,i=e(26),c=e(47),u=RegExp.prototype.exec,a=String.prototype.replace,f=u,s=(r=/a/,o=/b*/g,u.call(r,\"a\"),u.call(o,\"a\"),0!==r.lastIndex||0!==o.lastIndex),l=c.UNSUPPORTED_Y||c.BROKEN_CARET,p=void 0!==/()??/.exec(\"\")[1];(s||p||l)&&(f=function(t){var n,e,r,o,c=this,f=l&&c.sticky,v=i.call(c),d=c.source,h=0,g=t;return f&&(-1===(v=v.replace(\"y\",\"\")).indexOf(\"g\")&&(v+=\"g\"),g=String(t).slice(c.lastIndex),c.lastIndex>0&&(!c.multiline||c.multiline&&\"\\n\"!==t[c.lastIndex-1])&&(d=\"(?: \"+d+\")\",g=\" \"+g,h++),e=new RegExp(\"^(?:\"+d+\")\",v)),p&&(e=new RegExp(\"^\"+d+\"$(?!\\\\s)\",v)),s&&(n=c.lastIndex),r=u.call(f?e:c,g),f?r?(r.input=r.input.slice(h),r[0]=r[0].slice(h),r.index=c.lastIndex,c.lastIndex+=r[0].length):c.lastIndex=0:s&&r&&(c.lastIndex=c.global?r.index+r[0].length:n),p&&r&&r.length>1&&a.call(r[0],e,(function(){for(o=1;o<arguments.length-2;o++)void 0===arguments[o]&&(r[o]=void 0)})),r}),t.exports=f},function(t,n,e){\"use strict\";var r=e(7);t.exports=function(){var t=r(this),n=\"\";return t.global&&(n+=\"g\"),t.ignoreCase&&(n+=\"i\"),t.multiline&&(n+=\"m\"),t.dotAll&&(n+=\"s\"),t.unicode&&(n+=\"u\"),t.sticky&&(n+=\"y\"),n}},function(t,n,e){var r={};r[e(3)(\"toStringTag\")]=\"z\",t.exports=\"[object z]\"===String(r)},function(t,n,e){var r=e(5),o=e(57),i=e(16),c=e(14),u=e(18),a=e(6),f=e(29),s=Object.getOwnPropertyDescriptor;n.f=r?s:function(t,n){if(t=c(t),n=u(n,!0),f)try{return s(t,n)}catch(t){}if(a(t,n))return i(!o.f.call(t,n),t[n])}},function(t,n,e){var r=e(5),o=e(1),i=e(58);t.exports=!r&&!o((function(){return 7!=Object.defineProperty(i(\"div\"),\"a\",{get:function(){return 7}}).a}))},function(t,n,e){var r=e(31),o=Function.toString;\"function\"!=typeof r.inspectSource&&(r.inspectSource=function(t){return o.call(t)}),t.exports=r.inspectSource},function(t,n,e){var r=e(0),o=e(19),i=r[\"__core-js_shared__\"]||o(\"__core-js_shared__\",{});t.exports=i},function(t,n,e){var r,o,i,c=e(59),u=e(0),a=e(2),f=e(9),s=e(6),l=e(60),p=e(35),v=u.WeakMap;if(c){var d=new v,h=d.get,g=d.has,y=d.set;r=function(t,n){return y.call(d,t,n),n},o=function(t){return h.call(d,t)||{}},i=function(t){return g.call(d,t)}}else{var x=l(\"state\");p[x]=!0,r=function(t,n){return f(t,x,n),n},o=function(t){return s(t,x)?t[x]:{}},i=function(t){return s(t,x)}}t.exports={set:r,get:o,has:i,enforce:function(t){return i(t)?o(t):r(t,{})},getterFor:function(t){return function(n){var e;if(!a(n)||(e=o(n)).type!==t)throw TypeError(\"Incompatible receiver, \"+t+\" required\");return e}}}},function(t,n,e){var r=e(61),o=e(31);(t.exports=function(t,n){return o[t]||(o[t]=void 0!==n?n:{})})(\"versions\",[]).push({version:\"3.6.5\",mode:r?\"pure\":\"global\",copyright:\"© 2020 Denis Pushkarev (zloirock.ru)\"})},function(t,n){var e=0,r=Math.random();t.exports=function(t){return\"Symbol(\"+String(void 0===t?\"\":t)+\")_\"+(++e+r).toString(36)}},function(t,n){t.exports={}},function(t,n,e){var r=e(65),o=e(67).concat(\"length\",\"prototype\");n.f=Object.getOwnPropertyNames||function(t){return r(t,o)}},function(t,n,e){var r=e(14),o=e(13),i=e(66),c=function(t){return function(n,e,c){var u,a=r(n),f=o(a.length),s=i(c,f);if(t&&e!=e){for(;f>s;)if((u=a[s++])!=u)return!0}else for(;f>s;s++)if((t||s in a)&&a[s]===e)return t||s||0;return!t&&-1}};t.exports={includes:c(!0),indexOf:c(!1)}},function(t,n,e){var r=e(1),o=/#|\\.prototype\\./,i=function(t,n){var e=u[c(t)];return e==f||e!=a&&(\"function\"==typeof n?r(n):!!n)},c=i.normalize=function(t){return String(t).replace(o,\".\").toLowerCase()},u=i.data={},a=i.NATIVE=\"N\",f=i.POLYFILL=\"P\";t.exports=i},function(t,n,e){var r=e(10);t.exports=Array.isArray||function(t){return\"Array\"==r(t)}},function(t,n,e){var r=e(2),o=e(39),i=e(3)(\"species\");t.exports=function(t,n){var e;return o(t)&&(\"function\"!=typeof(e=t.constructor)||e!==Array&&!o(e.prototype)?r(e)&&null===(e=e[i])&&(e=void 0):e=void 0),new(void 0===e?Array:e)(0===n?0:n)}},function(t,n,e){var r=e(1);t.exports=!!Object.getOwnPropertySymbols&&!r((function(){return!String(Symbol())}))},function(t,n,e){var r=e(1),o=e(3),i=e(43),c=o(\"species\");t.exports=function(t){return i>=51||!r((function(){var n=[];return(n.constructor={})[c]=function(){return{foo:1}},1!==n[t](Boolean).foo}))}},function(t,n,e){var r,o,i=e(0),c=e(71),u=i.process,a=u&&u.versions,f=a&&a.v8;f?o=(r=f.split(\".\"))[0]+r[1]:c&&(!(r=c.match(/Edge\\/(\\d+)/))||r[1]>=74)&&(r=c.match(/Chrome\\/(\\d+)/))&&(o=r[1]),t.exports=o&&+o},function(t,n,e){var r=e(73),o=e(17),i=e(21),c=e(13),u=e(40),a=[].push,f=function(t){var n=1==t,e=2==t,f=3==t,s=4==t,l=6==t,p=5==t||l;return function(v,d,h,g){for(var y,x,E=i(v),S=o(E),b=r(d,h,3),m=c(S.length),O=0,T=g||u,P=n?T(v,m):e?T(v,0):void 0;m>O;O++)if((p||O in S)&&(x=b(y=S[O],O,E),t))if(n)P[O]=x;else if(x)switch(t){case 3:return!0;case 5:return y;case 6:return O;case 2:a.call(P,y)}else if(s)return!1;return l?-1:f||s?s:P}};t.exports={forEach:f(0),map:f(1),filter:f(2),some:f(3),every:f(4),find:f(5),findIndex:f(6)}},function(t,n,e){\"use strict\";var r=e(44).forEach,o=e(23),i=e(22),c=o(\"forEach\"),u=i(\"forEach\");t.exports=c&&u?[].forEach:function(t){return r(this,t,arguments.length>1?arguments[1]:void 0)}},function(t,n,e){\"use strict\";var r=e(4),o=e(17),i=e(14),c=e(23),u=[].join,a=o!=Object,f=c(\"join\",\",\");r({target:\"Array\",proto:!0,forced:a||!f},{join:function(t){return u.call(i(this),void 0===t?\",\":t)}})},function(t,n,e){\"use strict\";var r=e(1);function o(t,n){return RegExp(t,n)}n.UNSUPPORTED_Y=r((function(){var t=o(\"a\",\"y\");return t.lastIndex=2,null!=t.exec(\"abcd\")})),n.BROKEN_CARET=r((function(){var t=o(\"^r\",\"gy\");return t.lastIndex=2,null!=t.exec(\"str\")}))},function(t,n,e){\"use strict\";var r=e(49),o=e(7),i=e(21),c=e(13),u=e(15),a=e(8),f=e(50),s=e(51),l=Math.max,p=Math.min,v=Math.floor,d=/\\$([$&'`]|\\d\\d?|<[^>]*>)/g,h=/\\$([$&'`]|\\d\\d?)/g;r(\"replace\",2,(function(t,n,e,r){var g=r.REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE,y=r.REPLACE_KEEPS_$0,x=g?\"$\":\"$0\";return[function(e,r){var o=a(this),i=null==e?void 0:e[t];return void 0!==i?i.call(e,o,r):n.call(String(o),e,r)},function(t,r){if(!g&&y||\"string\"==typeof r&&-1===r.indexOf(x)){var i=e(n,t,this,r);if(i.done)return i.value}var a=o(t),v=String(this),d=\"function\"==typeof r;d||(r=String(r));var h=a.global;if(h){var S=a.unicode;a.lastIndex=0}for(var b=[];;){var m=s(a,v);if(null===m)break;if(b.push(m),!h)break;\"\"===String(m[0])&&(a.lastIndex=f(v,c(a.lastIndex),S))}for(var O,T=\"\",P=0,A=0;A<b.length;A++){m=b[A];for(var R=String(m[0]),C=l(p(u(m.index),v.length),0),w=[],j=1;j<m.length;j++)w.push(void 0===(O=m[j])?O:String(O));var k=m.groups;if(d){var L=[R].concat(w,C,v);void 0!==k&&L.push(k);var _=String(r.apply(void 0,L))}else _=E(R,v,C,w,k,r);C>=P&&(T+=v.slice(P,C)+_,P=C+R.length)}return T+v.slice(P)}];function E(t,e,r,o,c,u){var a=r+t.length,f=o.length,s=h;return void 0!==c&&(c=i(c),s=d),n.call(u,s,(function(n,i){var u;switch(i.charAt(0)){case\"$\":return\"$\";case\"&\":return t;case\"`\":return e.slice(0,r);case\"'\":return e.slice(a);case\"<\":u=c[i.slice(1,-1)];break;default:var s=+i;if(0===s)return n;if(s>f){var l=v(s/10);return 0===l?n:l<=f?void 0===o[l-1]?i.charAt(1):o[l-1]+i.charAt(1):n}u=o[s-1]}return void 0===u?\"\":u}))}}))},function(t,n,e){\"use strict\";e(24);var r=e(12),o=e(1),i=e(3),c=e(25),u=e(9),a=i(\"species\"),f=!o((function(){var t=/./;return t.exec=function(){var t=[];return t.groups={a:\"7\"},t},\"7\"!==\"\".replace(t,\"$<a>\")})),s=\"$0\"===\"a\".replace(/./,\"$0\"),l=i(\"replace\"),p=!!/./[l]&&\"\"===/./[l](\"a\",\"$0\"),v=!o((function(){var t=/(?:)/,n=t.exec;t.exec=function(){return n.apply(this,arguments)};var e=\"ab\".split(t);return 2!==e.length||\"a\"!==e[0]||\"b\"!==e[1]}));t.exports=function(t,n,e,l){var d=i(t),h=!o((function(){var n={};return n[d]=function(){return 7},7!=\"\"[t](n)})),g=h&&!o((function(){var n=!1,e=/a/;return\"split\"===t&&((e={}).constructor={},e.constructor[a]=function(){return e},e.flags=\"\",e[d]=/./[d]),e.exec=function(){return n=!0,null},e[d](\"\"),!n}));if(!h||!g||\"replace\"===t&&(!f||!s||p)||\"split\"===t&&!v){var y=/./[d],x=e(d,\"\"[t],(function(t,n,e,r,o){return n.exec===c?h&&!o?{done:!0,value:y.call(n,e,r)}:{done:!0,value:t.call(e,n,r)}:{done:!1}}),{REPLACE_KEEPS_$0:s,REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE:p}),E=x[0],S=x[1];r(String.prototype,t,E),r(RegExp.prototype,d,2==n?function(t,n){return S.call(t,this,n)}:function(t){return S.call(t,this)})}l&&u(RegExp.prototype[d],\"sham\",!0)}},function(t,n,e){\"use strict\";var r=e(77).charAt;t.exports=function(t,n,e){return n+(e?r(t,n).length:1)}},function(t,n,e){var r=e(10),o=e(25);t.exports=function(t,n){var e=t.exec;if(\"function\"==typeof e){var i=e.call(t,n);if(\"object\"!=typeof i)throw TypeError(\"RegExp exec method returned something other than an Object or null\");return i}if(\"RegExp\"!==r(t))throw TypeError(\"RegExp#exec called on incompatible receiver\");return o.call(t,n)}},function(t,n,e){\"use strict\";var r=e(4),o=e(78).trim;r({target:\"String\",proto:!0,forced:e(79)(\"trim\")},{trim:function(){return o(this)}})},function(t,n){t.exports=\"\\t\\n\\v\\f\\r                　\\u2028\\u2029\\ufeff\"},function(t,n,e){var r,o,i;e(55),e(72),e(75),e(76),e(46),e(24),e(48),e(52),e(80),\"undefined\"!=typeof globalThis?globalThis:\"undefined\"!=typeof self&&self,o=[n,e(82),e(83),e(84),e(85)],void 0===(i=\"function\"==typeof(r=function(t,n,r,o,i){\"use strict\";var c=e(98);Object.defineProperty(t,\"__esModule\",{value:!0}),t.default=void 0,n=c(n),r=c(r),o=c(o);var u=function(){function t(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:\"vcard\";(0,n.default)(this,t),(0,o.default)(this,\"charset\",\"utf-8\"),(0,o.default)(this,\"contentType\",\"text/x-vcard\"),(0,o.default)(this,\"filename\",\"vcard\"),(0,o.default)(this,\"fileExtension\",\"vcf\"),(0,o.default)(this,\"properties\",[]),(0,o.default)(this,\"definedElements\",{}),(0,o.default)(this,\"multiplePropertiesForElementAllowed\",[\"email\",\"address\",\"phoneNumber\",\"url\"]),(0,o.default)(this,\"useVCalendar\",!1),\"vcalendar\"===e&&this.setFormat(e)}return(0,r.default)(t,[{key:\"setFormat\",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:\"vcard\";\"vcalendar\"===t?(this.contentType=\"text/x-vcalendar\",this.useVCalendar=!0):\"vcard\"===t&&(this.contentType=\"text/x-vcard\",this.useVCalendar=!1)}},{key:\"addAddress\",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:\"\",n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:\"\",e=arguments.length>2&&void 0!==arguments[2]?arguments[2]:\"\",r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:\"\",o=arguments.length>4&&void 0!==arguments[4]?arguments[4]:\"\",i=arguments.length>5&&void 0!==arguments[5]?arguments[5]:\"\",c=arguments.length>6&&void 0!==arguments[6]?arguments[6]:\"\",u=arguments.length>7&&void 0!==arguments[7]?arguments[7]:\"WORK;POSTAL\",a=\"\".concat(t,\";\").concat(n,\";\").concat(e,\";\").concat(r,\";\").concat(o,\";\").concat(i,\";\").concat(c);return this.setProperty(\"address\",\"ADR\".concat(\"\"!==u?\";\".concat(u):\"\").concat(this.getCharsetString()),a),this}},{key:\"addBirthday\",value:function(t){return this.setProperty(\"birthday\",\"BDAY\",t),this}},{key:\"addCompany\",value:function(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:\"\";return this.setProperty(\"company\",\"ORG\".concat(this.getCharsetString()),t+(\"\"!==n?\";\".concat(n):\"\")),this}},{key:\"addEmail\",value:function(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:\"\";return this.setProperty(\"email\",\"EMAIL;INTERNET\".concat(\"\"!==n?\";\".concat(n):\"\"),t),this}},{key:\"addJobtitle\",value:function(t){return this.setProperty(\"jobtitle\",\"TITLE\".concat(this.getCharsetString()),t),this}},{key:\"addRole\",value:function(t){return this.setProperty(\"role\",\"ROLE\".concat(this.getCharsetString()),t),this}},{key:\"addMedia\",value:function(t,n){var e=arguments.length>3?arguments[3]:void 0,r=\"\";return this.setProperty(e,t,r),this}},{key:\"addMediaContent\",value:function(t,n,e){return this.setProperty(e,t,\"\"),this}},{key:\"addName\",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:\"\",n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:\"\",e=arguments.length>2&&void 0!==arguments[2]?arguments[2]:\"\",r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:\"\",o=arguments.length>4&&void 0!==arguments[4]?arguments[4]:\"\",i=[r,n,e,t,o].filter((function(t){return!!t})),c=\"\".concat(t,\";\").concat(n,\";\").concat(e,\";\").concat(r,\";\").concat(o);return this.setProperty(\"name\",\"N\".concat(this.getCharsetString()),c),this.hasProperty(\"FN\")||this.setProperty(\"fullname\",\"FN\".concat(this.getCharsetString()),i.join(\" \").trim()),this}},{key:\"addNote\",value:function(t){return this.setProperty(\"note\",\"NOTE\".concat(this.getCharsetString()),t),this}},{key:\"addCategories\",value:function(t){return this.setProperty(\"categories\",\"CATEGORIES\".concat(this.getCharsetString()),t.join(\",\").trim()),this}},{key:\"addPhoneNumber\",value:function(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:\"\";return this.setProperty(\"phoneNumber\",\"TEL\".concat(\"\"!==n?\";\".concat(n):\"\"),\"\".concat(t)),this}},{key:\"addLogo\",value:function(t){var n=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];return this.addMedia(\"LOGO\",t,n,\"logo\"),this}},{key:\"addPhoto\",value:function(t){var n=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];return this.addMedia(\"PHOTO\",t,n,\"photo\"),this}},{key:\"addURL\",value:function(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:\"\";return this.setProperty(\"url\",\"URL\".concat(\"\"!==n?\";\".concat(n):\"\"),t),this}},{key:\"buildVCard\",value:function(){var t=new Date,n=\"\";return n+=\"BEGIN:VCARD\\r\\n\",n+=\"VERSION:3.0\\r\\n\",n+=\"REV:\".concat(t.toISOString(),\"\\r\\n\"),this.getProperties().forEach((function(t){n+=(0,i.fold)(\"\".concat(t.key,\":\").concat((0,i.escape)(t.value),\"\\r\\n\"))})),n+=\"END:VCARD\\r\\n\"}},{key:\"buildVCalendar\",value:function(){var t=(new Date).toISOString().replace(/-/g,\"\").replace(/:/g,\"\").substring(0,13),n=\"\".concat(t,\"00\"),e=\"\".concat(t,\"01\"),r=(0,i.b64encode)(this.buildVCard()),o=(0,i.chunkSplit)(r,74,\"\\n\").replace(/(.+)/g,\" $1\");return\"BEGIN:VCALENDAR\\nVERSION:2.0\\nBEGIN:VEVENT\\nDTSTART;TZID=Europe/London:\".concat(n,\"\\nDTEND;TZID=Europe/London:\").concat(e,\"\\nSUMMARY:Click the attachment to save to your contacts\\nDTSTAMP:\").concat(n,\"Z\\nATTACH;VALUE=BINARY;ENCODING=BASE64;FMTTYPE=text/directory;\\n X-APPLE-FILENAME=\").concat(this.getFilename(),\".\").concat(this.getFileExtension(),\":\\n\").concat(o,\"END:VEVENT\\nEND:VCALENDAR\\n\")}},{key:\"toString\",value:function(){return this.getOutput()}},{key:\"getCharset\",value:function(){return this.charset}},{key:\"getCharsetString\",value:function(){var t=\"\";return\"utf-8\"===this.charset&&(t=\";CHARSET=\".concat(this.charset)),t}},{key:\"getContentType\",value:function(){return this.contentType}},{key:\"getFilename\",value:function(){return this.filename}},{key:\"getFileExtension\",value:function(){return this.fileExtension}},{key:\"getOutput\",value:function(){return this.useVCalendar?this.buildVCalendar():this.buildVCard()}},{key:\"getProperties\",value:function(){return this.properties}},{key:\"hasProperty\",value:function(t){return this.getProperties().forEach((function(n){if(n.key===t&&\"\"!==n.value)return!0})),!1}},{key:\"setCharset\",value:function(t){this.charset=t}},{key:\"setFilename\",value:function(t){t&&(this.filename=t)}},{key:\"setProperty\",value:function(t,n,e){if(this.multiplePropertiesForElementAllowed.indexOf(t)<0&&this.definedElements[t])throw new Error(\"This element already exists (\".concat(t,\")\"));this.definedElements[t]=!0,this.properties.push({key:n,value:e})}}]),t}();t.default=u})?r.apply(n,o):r)||(t.exports=i)},function(t,n,e){\"use strict\";var r=e(4),o=e(1),i=e(39),c=e(2),u=e(21),a=e(13),f=e(69),s=e(40),l=e(42),p=e(3),v=e(43),d=p(\"isConcatSpreadable\"),h=v>=51||!o((function(){var t=[];return t[d]=!1,t.concat()[0]!==t})),g=l(\"concat\"),y=function(t){if(!c(t))return!1;var n=t[d];return void 0!==n?!!n:i(t)};r({target:\"Array\",proto:!0,forced:!h||!g},{concat:function(t){var n,e,r,o,i,c=u(this),l=s(c,0),p=0;for(n=-1,r=arguments.length;n<r;n++)if(y(i=-1===n?c:arguments[n])){if(p+(o=a(i.length))>9007199254740991)throw TypeError(\"Maximum allowed index exceeded\");for(e=0;e<o;e++,p++)e in i&&f(l,p,i[e])}else{if(p>=9007199254740991)throw TypeError(\"Maximum allowed index exceeded\");f(l,p++,i)}return l.length=p,l}})},function(t,n){var e;e=function(){return this}();try{e=e||new Function(\"return this\")()}catch(t){\"object\"==typeof window&&(e=window)}t.exports=e},function(t,n,e){\"use strict\";var r={}.propertyIsEnumerable,o=Object.getOwnPropertyDescriptor,i=o&&!r.call({1:2},1);n.f=i?function(t){var n=o(this,t);return!!n&&n.enumerable}:r},function(t,n,e){var r=e(0),o=e(2),i=r.document,c=o(i)&&o(i.createElement);t.exports=function(t){return c?i.createElement(t):{}}},function(t,n,e){var r=e(0),o=e(30),i=r.WeakMap;t.exports=\"function\"==typeof i&&/native code/.test(o(i))},function(t,n,e){var r=e(33),o=e(34),i=r(\"keys\");t.exports=function(t){return i[t]||(i[t]=o(t))}},function(t,n){t.exports=!1},function(t,n,e){var r=e(6),o=e(63),i=e(28),c=e(11);t.exports=function(t,n){for(var e=o(n),u=c.f,a=i.f,f=0;f<e.length;f++){var s=e[f];r(t,s)||u(t,s,a(n,s))}}},function(t,n,e){var r=e(20),o=e(36),i=e(68),c=e(7);t.exports=r(\"Reflect\",\"ownKeys\")||function(t){var n=o.f(c(t)),e=i.f;return e?n.concat(e(t)):n}},function(t,n,e){var r=e(0);t.exports=r},function(t,n,e){var r=e(6),o=e(14),i=e(37).indexOf,c=e(35);t.exports=function(t,n){var e,u=o(t),a=0,f=[];for(e in u)!r(c,e)&&r(u,e)&&f.push(e);for(;n.length>a;)r(u,e=n[a++])&&(~i(f,e)||f.push(e));return f}},function(t,n,e){var r=e(15),o=Math.max,i=Math.min;t.exports=function(t,n){var e=r(t);return e<0?o(e+n,0):i(e,n)}},function(t,n){t.exports=[\"constructor\",\"hasOwnProperty\",\"isPrototypeOf\",\"propertyIsEnumerable\",\"toLocaleString\",\"toString\",\"valueOf\"]},function(t,n){n.f=Object.getOwnPropertySymbols},function(t,n,e){\"use strict\";var r=e(18),o=e(11),i=e(16);t.exports=function(t,n,e){var c=r(n);c in t?o.f(t,c,i(0,e)):t[c]=e}},function(t,n,e){var r=e(41);t.exports=r&&!Symbol.sham&&\"symbol\"==typeof Symbol.iterator},function(t,n,e){var r=e(20);t.exports=r(\"navigator\",\"userAgent\")||\"\"},function(t,n,e){\"use strict\";var r=e(4),o=e(44).filter,i=e(42),c=e(22),u=i(\"filter\"),a=c(\"filter\");r({target:\"Array\",proto:!0,forced:!u||!a},{filter:function(t){return o(this,t,arguments.length>1?arguments[1]:void 0)}})},function(t,n,e){var r=e(74);t.exports=function(t,n,e){if(r(t),void 0===n)return t;switch(e){case 0:return function(){return t.call(n)};case 1:return function(e){return t.call(n,e)};case 2:return function(e,r){return t.call(n,e,r)};case 3:return function(e,r,o){return t.call(n,e,r,o)}}return function(){return t.apply(n,arguments)}}},function(t,n){t.exports=function(t){if(\"function\"!=typeof t)throw TypeError(String(t)+\" is not a function\");return t}},function(t,n,e){\"use strict\";var r=e(4),o=e(45);r({target:\"Array\",proto:!0,forced:[].forEach!=o},{forEach:o})},function(t,n,e){\"use strict\";var r=e(4),o=e(37).indexOf,i=e(23),c=e(22),u=[].indexOf,a=!!u&&1/[1].indexOf(1,-0)<0,f=i(\"indexOf\"),s=c(\"indexOf\",{ACCESSORS:!0,1:0});r({target:\"Array\",proto:!0,forced:a||!f||!s},{indexOf:function(t){return a?u.apply(this,arguments)||0:o(this,t,arguments.length>1?arguments[1]:void 0)}})},function(t,n,e){var r=e(15),o=e(8),i=function(t){return function(n,e){var i,c,u=String(o(n)),a=r(e),f=u.length;return a<0||a>=f?t?\"\":void 0:(i=u.charCodeAt(a))<55296||i>56319||a+1===f||(c=u.charCodeAt(a+1))<56320||c>57343?t?u.charAt(a):i:t?u.slice(a,a+2):c-56320+(i-55296<<10)+65536}};t.exports={codeAt:i(!1),charAt:i(!0)}},function(t,n,e){var r=e(8),o=\"[\"+e(53)+\"]\",i=RegExp(\"^\"+o+o+\"*\"),c=RegExp(o+o+\"*$\"),u=function(t){return function(n){var e=String(r(n));return 1&t&&(e=e.replace(i,\"\")),2&t&&(e=e.replace(c,\"\")),e}};t.exports={start:u(1),end:u(2),trim:u(3)}},function(t,n,e){var r=e(1),o=e(53);t.exports=function(t){return r((function(){return!!o[t]()||\"​᠎\"!=\"​᠎\"[t]()||o[t].name!==t}))}},function(t,n,e){var r=e(0),o=e(81),i=e(45),c=e(9);for(var u in o){var a=r[u],f=a&&a.prototype;if(f&&f.forEach!==i)try{c(f,\"forEach\",i)}catch(t){f.forEach=i}}},function(t,n){t.exports={CSSRuleList:0,CSSStyleDeclaration:0,CSSValueList:0,ClientRectList:0,DOMRectList:0,DOMStringList:0,DOMTokenList:1,DataTransferItemList:0,FileList:0,HTMLAllCollection:0,HTMLCollection:0,HTMLFormElement:0,HTMLSelectElement:0,MediaList:0,MimeTypeArray:0,NamedNodeMap:0,NodeList:1,PaintRequestList:0,Plugin:0,PluginArray:0,SVGLengthList:0,SVGNumberList:0,SVGPathSegList:0,SVGPointList:0,SVGStringList:0,SVGTransformList:0,SourceBufferList:0,StyleSheetList:0,TextTrackCueList:0,TextTrackList:0,TouchList:0}},function(t,n){t.exports=function(t,n){if(!(t instanceof n))throw new TypeError(\"Cannot call a class as a function\")}},function(t,n){function e(t,n){for(var e=0;e<n.length;e++){var r=n[e];r.enumerable=r.enumerable||!1,r.configurable=!0,\"value\"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}t.exports=function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}},function(t,n){t.exports=function(t,n,e){return n in t?Object.defineProperty(t,n,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[n]=e,t}},function(t,n,e){var r,o,i;e(46),e(86),e(87),e(90),e(24),e(96),e(97),e(48),e(52),\"undefined\"!=typeof globalThis?globalThis:\"undefined\"!=typeof self&&self,o=[n],void 0===(i=\"function\"==typeof(r=function(t){\"use strict\";Object.defineProperty(t,\"__esModule\",{value:!0}),t.b64encode=function(t){var n=globalThis;if(\"function\"==typeof(null==n?void 0:n.btoa))return n.btoa(t);var e=globalThis;return\"function\"==typeof(null==e?void 0:e.Buffer)?e.Buffer.from(t).toString(\"base64\"):\"\"},t.chunkSplit=function(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:76,e=arguments.length>2&&void 0!==arguments[2]?arguments[2]:\"\\r\\n\",r=n||76,o=e||\"\\r\\n\";if(n<1)return\"\";var i=t.match(new RegExp(\".{0,\".concat(r,\"}\"),\"g\"));return i.join(o)},t.escape=function(t){var n=\"\".concat(t).replace(\"\\r\\n\",\"\\\\n\");return n=n.replace(\"\\n\",\"\\\\n\")},t.fold=function(t){if(t.length<=75)return t;var n=t.match(/.{1,73}/g).join(\"\\r\\n \").trim();return\"\".concat(n,\"\\r\\n\")}})?r.apply(n,o):r)||(t.exports=i)},function(t,n,e){e(4)({global:!0},{globalThis:e(0)})},function(t,n,e){var r=e(27),o=e(12),i=e(88);r||o(Object.prototype,\"toString\",i,{unsafe:!0})},function(t,n,e){\"use strict\";var r=e(27),o=e(89);t.exports=r?{}.toString:function(){return\"[object \"+o(this)+\"]\"}},function(t,n,e){var r=e(27),o=e(10),i=e(3)(\"toStringTag\"),c=\"Arguments\"==o(function(){return arguments}());t.exports=r?o:function(t){var n,e,r;return void 0===t?\"Undefined\":null===t?\"Null\":\"string\"==typeof(e=function(t,n){try{return t[n]}catch(t){}}(n=Object(t),i))?e:c?o(n):\"Object\"==(r=o(n))&&\"function\"==typeof n.callee?\"Arguments\":r}},function(t,n,e){var r=e(5),o=e(0),i=e(38),c=e(91),u=e(11).f,a=e(36).f,f=e(94),s=e(26),l=e(47),p=e(12),v=e(1),d=e(32).set,h=e(95),g=e(3)(\"match\"),y=o.RegExp,x=y.prototype,E=/a/g,S=/a/g,b=new y(E)!==E,m=l.UNSUPPORTED_Y;if(r&&i(\"RegExp\",!b||m||v((function(){return S[g]=!1,y(E)!=E||y(S)==S||\"/a/i\"!=y(E,\"i\")})))){for(var O=function(t,n){var e,r=this instanceof O,o=f(t),i=void 0===n;if(!r&&o&&t.constructor===O&&i)return t;b?o&&!i&&(t=t.source):t instanceof O&&(i&&(n=s.call(t)),t=t.source),m&&(e=!!n&&n.indexOf(\"y\")>-1)&&(n=n.replace(/y/g,\"\"));var u=c(b?new y(t,n):y(t,n),r?this:x,O);return m&&e&&d(u,{sticky:e}),u},T=function(t){t in O||u(O,t,{configurable:!0,get:function(){return y[t]},set:function(n){y[t]=n}})},P=a(y),A=0;P.length>A;)T(P[A++]);x.constructor=O,O.prototype=x,p(o,\"RegExp\",O)}h(\"RegExp\")},function(t,n,e){var r=e(2),o=e(92);t.exports=function(t,n,e){var i,c;return o&&\"function\"==typeof(i=n.constructor)&&i!==e&&r(c=i.prototype)&&c!==e.prototype&&o(t,c),t}},function(t,n,e){var r=e(7),o=e(93);t.exports=Object.setPrototypeOf||(\"__proto__\"in{}?function(){var t,n=!1,e={};try{(t=Object.getOwnPropertyDescriptor(Object.prototype,\"__proto__\").set).call(e,[]),n=e instanceof Array}catch(t){}return function(e,i){return r(e),o(i),n?t.call(e,i):e.__proto__=i,e}}():void 0)},function(t,n,e){var r=e(2);t.exports=function(t){if(!r(t)&&null!==t)throw TypeError(\"Can't set \"+String(t)+\" as a prototype\");return t}},function(t,n,e){var r=e(2),o=e(10),i=e(3)(\"match\");t.exports=function(t){var n;return r(t)&&(void 0!==(n=t[i])?!!n:\"RegExp\"==o(t))}},function(t,n,e){\"use strict\";var r=e(20),o=e(11),i=e(3),c=e(5),u=i(\"species\");t.exports=function(t){var n=r(t),e=o.f;c&&n&&!n[u]&&e(n,u,{configurable:!0,get:function(){return this}})}},function(t,n,e){\"use strict\";var r=e(12),o=e(7),i=e(1),c=e(26),u=RegExp.prototype,a=u.toString,f=i((function(){return\"/a/b\"!=a.call({source:\"a\",flags:\"b\"})})),s=\"toString\"!=a.name;(f||s)&&r(RegExp.prototype,\"toString\",(function(){var t=o(this),n=String(t.source),e=t.flags;return\"/\"+n+\"/\"+String(void 0===e&&t instanceof RegExp&&!(\"flags\"in u)?c.call(t):e)}),{unsafe:!0})},function(t,n,e){\"use strict\";var r=e(49),o=e(7),i=e(13),c=e(8),u=e(50),a=e(51);r(\"match\",1,(function(t,n,e){return[function(n){var e=c(this),r=null==n?void 0:n[t];return void 0!==r?r.call(n,e):new RegExp(n)[t](String(e))},function(t){var r=e(n,t,this);if(r.done)return r.value;var c=o(t),f=String(this);if(!c.global)return a(c,f);var s=c.unicode;c.lastIndex=0;for(var l,p=[],v=0;null!==(l=a(c,f));){var d=String(l[0]);p[v]=d,\"\"===d&&(c.lastIndex=u(f,i(c.lastIndex),s)),v++}return 0===v?null:p}]}))},function(t,n){t.exports=function(t){return t&&t.__esModule?t:{default:t}}}])}));\n\n//# sourceURL=webpack:///../dist/vcard-creator.js?");

/***/ }),

/***/ "./test-pre-build.js":
/*!***************************!*\
  !*** ./test-pre-build.js ***!
  \***************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! .. */ \"../dist/vcard-creator.js\");\n/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(___WEBPACK_IMPORTED_MODULE_0__);\n\n\n// define vcard\nvar vcard = new ___WEBPACK_IMPORTED_MODULE_0___default.a()\n\n// define variables\nvar lastname = 'Desloovere'\nvar firstname = 'Jeroen'\nvar additional = ''\nvar prefix = ''\nvar suffix = ''\n\nvcard\n  // add personal data\n  .addName(lastname, firstname, additional, prefix, suffix)\n  // add work data\n  .addCompany('Siesqo')\n  .addJobtitle('Web Developer')\n  .addRole('Data Protection Officer')\n  .addEmail('info@jeroendesloovere.be')\n  .addPhoneNumber(1234121212, 'PREF;WORK')\n  .addPhoneNumber(123456789, 'WORK')\n  .addAddress('name', 'extended', 'street', 'worktown', 'state', 'workpostcode', 'Belgium')\n  .addURL('http://www.jeroendesloovere.be')\n\nvar output = vcard.toString()\n\nconsole.log(output)\n\ndocument.getElementById('vcard').innerHTML = output\n\n\n//# sourceURL=webpack:///./test-pre-build.js?");

/***/ })

/******/ });