!function n(o,i,a){function u(e,t){if(!i[e]){if(!o[e]){var r="function"==typeof require&&require;if(!t&&r)return r(e,!0);if(c)return c(e,!0);throw(t=new Error("Cannot find module '"+e+"'")).code="MODULE_NOT_FOUND",t}r=i[e]={exports:{}},o[e][0].call(r.exports,function(t){return u(o[e][1][t]||t)},r,r.exports,n,o,i,a)}return i[e].exports}for(var c="function"==typeof require&&require,t=0;t<a.length;t++)u(a[t]);return u}({1:[function(t,e,r){"use strict";const h=()=>{const t=new Error("Delay aborted");return t.name="AbortError",t},o=({clearTimeout:s,setTimeout:l,willResolve:f})=>(r,{value:n,signal:o}={})=>{if(o&&o.aborted)return Promise.reject(h());let i,a,u;const t=s||clearTimeout,c=()=>{t(i),u(h())},e=new Promise((t,e)=>{a=()=>{o&&o.removeEventListener("abort",c),(f?t:e)(n)},u=e,i=(l||setTimeout)(a,r)});return o&&o.addEventListener("abort",c,{once:!0}),e.clear=()=>{t(i),i=null,a()},e};var n=t=>{const n=o({...t,willResolve:!0});return n.reject=o({...t,willResolve:!1}),n.range=(t,e,r)=>n(((t,e)=>Math.floor(Math.random()*(e-t+1)+t))(t,e),r),n};const i=n();i.createWithTimers=n,e.exports=i,e.exports.default=i},{}],2:[function(e,t,r){!function(t){!function(){"use strict";function E(t){return(E="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function k(){k=function(){return a};var a={},t=Object.prototype,c=t.hasOwnProperty,e="function"==typeof Symbol?Symbol:{},n=e.iterator||"@@iterator",r=e.asyncIterator||"@@asyncIterator",o=e.toStringTag||"@@toStringTag";function i(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{i({},"")}catch(t){i=function(t,e,r){return t[e]=r}}function u(t,e,r,n){var o,i,a,u,e=e&&e.prototype instanceof f?e:f,e=Object.create(e.prototype),n=new b(n||[]);return e._invoke=(o=t,i=r,a=n,u="suspendedStart",function(t,e){if("executing"===u)throw new Error("Generator is already running");if("completed"===u){if("throw"===t)throw e;return L()}for(a.method=t,a.arg=e;;){var r=a.delegate;if(r){r=function t(e,r){var n=e.iterator[r.method];if(void 0===n){if(r.delegate=null,"throw"===r.method){if(e.iterator.return&&(r.method="return",r.arg=void 0,t(e,r),"throw"===r.method))return l;r.method="throw",r.arg=new TypeError("The iterator does not provide a 'throw' method")}return l}n=s(n,e.iterator,r.arg);if("throw"===n.type)return r.method="throw",r.arg=n.arg,r.delegate=null,l;n=n.arg;return n?n.done?(r[e.resultName]=n.value,r.next=e.nextLoc,"return"!==r.method&&(r.method="next",r.arg=void 0),r.delegate=null,l):n:(r.method="throw",r.arg=new TypeError("iterator result is not an object"),r.delegate=null,l)}(r,a);if(r){if(r===l)continue;return r}}if("next"===a.method)a.sent=a._sent=a.arg;else if("throw"===a.method){if("suspendedStart"===u)throw u="completed",a.arg;a.dispatchException(a.arg)}else"return"===a.method&&a.abrupt("return",a.arg);u="executing";r=s(o,i,a);if("normal"===r.type){if(u=a.done?"completed":"suspendedYield",r.arg===l)continue;return{value:r.arg,done:a.done}}"throw"===r.type&&(u="completed",a.method="throw",a.arg=r.arg)}}),e}function s(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(t){return{type:"throw",arg:t}}}a.wrap=u;var l={};function f(){}function h(){}function p(){}var e={},y=(i(e,n,function(){return this}),Object.getPrototypeOf),y=y&&y(y(x([]))),d=(y&&y!==t&&c.call(y,n)&&(e=y),p.prototype=f.prototype=Object.create(e));function v(t){["next","throw","return"].forEach(function(e){i(t,e,function(t){return this._invoke(e,t)})})}function m(a,u){var e;this._invoke=function(r,n){function t(){return new u(function(t,e){!function e(t,r,n,o){var i,t=s(a[t],a,r);if("throw"!==t.type)return(r=(i=t.arg).value)&&"object"==E(r)&&c.call(r,"__await")?u.resolve(r.__await).then(function(t){e("next",t,n,o)},function(t){e("throw",t,n,o)}):u.resolve(r).then(function(t){i.value=t,n(i)},function(t){return e("throw",t,n,o)});o(t.arg)}(r,n,t,e)})}return e=e?e.then(t,t):t()}}function g(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function w(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function b(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(g,this),this.reset(!0)}function x(e){if(e){var r,t=e[n];if(t)return t.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length))return r=-1,(t=function t(){for(;++r<e.length;)if(c.call(e,r))return t.value=e[r],t.done=!1,t;return t.value=void 0,t.done=!0,t}).next=t}return{next:L}}function L(){return{value:void 0,done:!0}}return i(d,"constructor",h.prototype=p),i(p,"constructor",h),h.displayName=i(p,o,"GeneratorFunction"),a.isGeneratorFunction=function(t){t="function"==typeof t&&t.constructor;return!!t&&(t===h||"GeneratorFunction"===(t.displayName||t.name))},a.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,p):(t.__proto__=p,i(t,o,"GeneratorFunction")),t.prototype=Object.create(d),t},a.awrap=function(t){return{__await:t}},v(m.prototype),i(m.prototype,r,function(){return this}),a.AsyncIterator=m,a.async=function(t,e,r,n,o){void 0===o&&(o=Promise);var i=new m(u(t,e,r,n),o);return a.isGeneratorFunction(e)?i:i.next().then(function(t){return t.done?t.value:i.next()})},v(d),i(d,o,"Generator"),i(d,n,function(){return this}),i(d,"toString",function(){return"[object Generator]"}),a.keys=function(r){var t,n=[];for(t in r)n.push(t);return n.reverse(),function t(){for(;n.length;){var e=n.pop();if(e in r)return t.value=e,t.done=!1,t}return t.done=!0,t}},a.values=x,b.prototype={constructor:b,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(w),!t)for(var e in this)"t"===e.charAt(0)&&c.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(r){if(this.done)throw r;var n=this;function t(t,e){return i.type="throw",i.arg=r,n.next=t,e&&(n.method="next",n.arg=void 0),!!e}for(var e=this.tryEntries.length-1;0<=e;--e){var o=this.tryEntries[e],i=o.completion;if("root"===o.tryLoc)return t("end");if(o.tryLoc<=this.prev){var a=c.call(o,"catchLoc"),u=c.call(o,"finallyLoc");if(a&&u){if(this.prev<o.catchLoc)return t(o.catchLoc,!0);if(this.prev<o.finallyLoc)return t(o.finallyLoc)}else if(a){if(this.prev<o.catchLoc)return t(o.catchLoc,!0)}else{if(!u)throw new Error("try statement without catch or finally");if(this.prev<o.finallyLoc)return t(o.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;0<=r;--r){var n=this.tryEntries[r];if(n.tryLoc<=this.prev&&c.call(n,"finallyLoc")&&this.prev<n.finallyLoc){var o=n;break}}var i=(o=o&&("break"===t||"continue"===t)&&o.tryLoc<=e&&e<=o.finallyLoc?null:o)?o.completion:{};return i.type=t,i.arg=e,o?(this.method="next",this.next=o.finallyLoc,l):this.complete(i)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),l},finish:function(t){for(var e=this.tryEntries.length-1;0<=e;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),w(r),l}},catch:function(t){for(var e=this.tryEntries.length-1;0<=e;--e){var r,n,o=this.tryEntries[e];if(o.tryLoc===t)return"throw"===(r=o.completion).type&&(n=r.arg,w(o)),n}throw new Error("illegal catch attempt")},delegateYield:function(t,e,r){return this.delegate={iterator:x(t),resultName:e,nextLoc:r},"next"===this.method&&(this.arg=void 0),l}},a}function c(t,e,r,n,o,i,a){try{var u=t[i](a),c=u.value}catch(t){return void r(t)}u.done?e(c):Promise.resolve(c).then(n,o)}function i(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}var a=e("delay");t.RateLimitedApi=function(){function e(t){if(this instanceof e)return this.key=t,this.timeLastRan=new Date,this.request.bind(this);throw new TypeError("Cannot call a class as a function")}var t,r,n,u,o;return t=e,(r=[{key:"request",value:(u=k().mark(function t(e){var r,n,o;return k().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(o=e.area,r=e.selections,n=e.id,o="https://api.torn.com/".concat(o,"/").concat(null!=n?n:"","?selections=").concat(r,"&key=").concat(this.key),this.shouldDelay())return t.next=5,a(this.getDelay());t.next=5;break;case 5:return this.timeLastRan=new Date,t.next=8,fetch(o).then(function(t){return t.json()}).then(function(t){return t});case 8:return t.abrupt("return",t.sent);case 9:case"end":return t.stop()}},t,this)}),o=function(){var t=this,a=arguments;return new Promise(function(e,r){var n=u.apply(t,a);function o(t){c(n,e,r,o,i,"next",t)}function i(t){c(n,e,r,o,i,"throw",t)}o(void 0)})},function(t){return o.apply(this,arguments)})},{key:"shouldDelay",value:function(){return this.getTimeSinceLastRun()<this.getMaximumRequestRate()}},{key:"getDelay",value:function(){return this.getMaximumRequestRate()-this.getTimeSinceLastRun()}},{key:"getTimeSinceLastRun",value:function(){return new Date-this.timeLastRan}},{key:"getMaximumRequestRate",value:function(){return 600}}])&&i(t.prototype,r),n&&i(t,n),Object.defineProperty(t,"prototype",{writable:!1}),e}()}.call(this)}.call(this,"undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{})},{delay:1}]},{},[2]);