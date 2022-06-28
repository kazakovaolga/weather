/*! For license information please see bundle.js.LICENSE.txt */
!function(){"use strict";function t(e){return t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},t(e)}function e(){e=function(){return n};var n={},r=Object.prototype,o=r.hasOwnProperty,a="function"==typeof Symbol?Symbol:{},c=a.iterator||"@@iterator",i=a.asyncIterator||"@@asyncIterator",u=a.toStringTag||"@@toStringTag";function l(t,e,n){return Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{l({},"")}catch(t){l=function(t,e,n){return t[e]=n}}function s(t,e,n,r){var o=e&&e.prototype instanceof d?e:d,a=Object.create(o.prototype),c=new S(r||[]);return a._invoke=function(t,e,n){var r="suspendedStart";return function(o,a){if("executing"===r)throw new Error("Generator is already running");if("completed"===r){if("throw"===o)throw a;return{value:void 0,done:!0}}for(n.method=o,n.arg=a;;){var c=n.delegate;if(c){var i=E(c,n);if(i){if(i===h)continue;return i}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if("suspendedStart"===r)throw r="completed",n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);r="executing";var u=p(t,e,n);if("normal"===u.type){if(r=n.done?"completed":"suspendedYield",u.arg===h)continue;return{value:u.arg,done:n.done}}"throw"===u.type&&(r="completed",n.method="throw",n.arg=u.arg)}}}(t,n,c),a}function p(t,e,n){try{return{type:"normal",arg:t.call(e,n)}}catch(t){return{type:"throw",arg:t}}}n.wrap=s;var h={};function d(){}function f(){}function m(){}var y={};l(y,c,(function(){return this}));var v=Object.getPrototypeOf,g=v&&v(v(C([])));g&&g!==r&&o.call(g,c)&&(y=g);var w=m.prototype=d.prototype=Object.create(y);function b(t){["next","throw","return"].forEach((function(e){l(t,e,(function(t){return this._invoke(e,t)}))}))}function x(e,n){function r(a,c,i,u){var l=p(e[a],e,c);if("throw"!==l.type){var s=l.arg,h=s.value;return h&&"object"==t(h)&&o.call(h,"__await")?n.resolve(h.__await).then((function(t){r("next",t,i,u)}),(function(t){r("throw",t,i,u)})):n.resolve(h).then((function(t){s.value=t,i(s)}),(function(t){return r("throw",t,i,u)}))}u(l.arg)}var a;this._invoke=function(t,e){function o(){return new n((function(n,o){r(t,e,n,o)}))}return a=a?a.then(o,o):o()}}function E(t,e){var n=t.iterator[e.method];if(void 0===n){if(e.delegate=null,"throw"===e.method){if(t.iterator.return&&(e.method="return",e.arg=void 0,E(t,e),"throw"===e.method))return h;e.method="throw",e.arg=new TypeError("The iterator does not provide a 'throw' method")}return h}var r=p(n,t.iterator,e.arg);if("throw"===r.type)return e.method="throw",e.arg=r.arg,e.delegate=null,h;var o=r.arg;return o?o.done?(e[t.resultName]=o.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=void 0),e.delegate=null,h):o:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,h)}function L(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function N(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function S(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(L,this),this.reset(!0)}function C(t){if(t){var e=t[c];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var n=-1,r=function e(){for(;++n<t.length;)if(o.call(t,n))return e.value=t[n],e.done=!1,e;return e.value=void 0,e.done=!0,e};return r.next=r}}return{next:T}}function T(){return{value:void 0,done:!0}}return f.prototype=m,l(w,"constructor",m),l(m,"constructor",f),f.displayName=l(m,u,"GeneratorFunction"),n.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===f||"GeneratorFunction"===(e.displayName||e.name))},n.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,m):(t.__proto__=m,l(t,u,"GeneratorFunction")),t.prototype=Object.create(w),t},n.awrap=function(t){return{__await:t}},b(x.prototype),l(x.prototype,i,(function(){return this})),n.AsyncIterator=x,n.async=function(t,e,r,o,a){void 0===a&&(a=Promise);var c=new x(s(t,e,r,o),a);return n.isGeneratorFunction(e)?c:c.next().then((function(t){return t.done?t.value:c.next()}))},b(w),l(w,u,"Generator"),l(w,c,(function(){return this})),l(w,"toString",(function(){return"[object Generator]"})),n.keys=function(t){var e=[];for(var n in t)e.push(n);return e.reverse(),function n(){for(;e.length;){var r=e.pop();if(r in t)return n.value=r,n.done=!1,n}return n.done=!0,n}},n.values=C,S.prototype={constructor:S,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(N),!t)for(var e in this)"t"===e.charAt(0)&&o.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function n(n,r){return c.type="throw",c.arg=t,e.next=n,r&&(e.method="next",e.arg=void 0),!!r}for(var r=this.tryEntries.length-1;r>=0;--r){var a=this.tryEntries[r],c=a.completion;if("root"===a.tryLoc)return n("end");if(a.tryLoc<=this.prev){var i=o.call(a,"catchLoc"),u=o.call(a,"finallyLoc");if(i&&u){if(this.prev<a.catchLoc)return n(a.catchLoc,!0);if(this.prev<a.finallyLoc)return n(a.finallyLoc)}else if(i){if(this.prev<a.catchLoc)return n(a.catchLoc,!0)}else{if(!u)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return n(a.finallyLoc)}}}},abrupt:function(t,e){for(var n=this.tryEntries.length-1;n>=0;--n){var r=this.tryEntries[n];if(r.tryLoc<=this.prev&&o.call(r,"finallyLoc")&&this.prev<r.finallyLoc){var a=r;break}}a&&("break"===t||"continue"===t)&&a.tryLoc<=e&&e<=a.finallyLoc&&(a=null);var c=a?a.completion:{};return c.type=t,c.arg=e,a?(this.method="next",this.next=a.finallyLoc,h):this.complete(c)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),h},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.finallyLoc===t)return this.complete(n.completion,n.afterLoc),N(n),h}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.tryLoc===t){var r=n.completion;if("throw"===r.type){var o=r.arg;N(n)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,n){return this.delegate={iterator:C(t),resultName:e,nextLoc:n},"next"===this.method&&(this.arg=void 0),h}},n}function n(t,e,n,r,o,a,c){try{var i=t[a](c),u=i.value}catch(t){return void n(t)}i.done?e(u):Promise.resolve(u).then(r,o)}function r(t){return function(){var e=this,r=arguments;return new Promise((function(o,a){var c=t.apply(e,r);function i(t){n(c,o,a,i,u,"next",t)}function u(t){n(c,o,a,i,u,"throw",t)}i(void 0)}))}}var o="citiesNames";function a(t,e,n){var r;r="notFound"===e||"notFound"===n?"https://picsum.photos/id/1025/500/300":"https://static-maps.yandex.ru/1.x/?ll=".concat(n,",").concat(e,"&z=10&l=map"),t.querySelector(".map").style.backgroundImage="url(".concat(r,")")}function c(){return i.apply(this,arguments)}function i(){return(i=r(e().mark((function t(){var n;return e().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=localStorage.getItem(o),t.abrupt("return",null===n?[]:JSON.parse(n));case 2:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function u(t){localStorage.setItem(o,JSON.stringify(t))}function l(t,e){t.querySelector("ol").innerHTML="".concat(e.map((function(t){return"<li>".concat(t,"</li>")})).join(""))}function s(t,e){return p.apply(this,arguments)}function p(){return(p=r(e().mark((function t(n,r){var o,a,c,i,u,l,s,p,h,d,f,m,y,v,g,w;return e().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:n.querySelector("table").remove(),o=document.createElement("table"),a=document.createElement("thead"),c=document.createElement("tbody"),o.appendChild(a),o.appendChild(c),i=document.createElement("tr"),(u=document.createElement("th")).innerHTML="Город",(l=document.createElement("th")).innerHTML="Температура",(s=document.createElement("th")).innerHTML="Изображение",(p=document.createElement("th")).innerHTML="Широта",(h=document.createElement("th")).innerHTML="Долгота",i.appendChild(u),i.appendChild(l),i.appendChild(s),i.appendChild(p),i.appendChild(h),a.appendChild(i),d=r,f=document.createElement("tr"),(m=document.createElement("td")).className="cityName",m.innerHTML="".concat(d.name),(y=document.createElement("td")).className="temp",y.innerHTML="".concat(d.main.temp," С"),(v=document.createElement("td")).className="icon",v.innerHTML='<img src="https://openweathermap.org/img/wn/'.concat(d.weather[0].icon,'@2x.png">'),(g=document.createElement("td")).innerHTML="".concat(d.coord.lat),g.className="lat",(w=document.createElement("td")).innerHTML="".concat(d.coord.lon),w.className="lon",f.appendChild(m),f.appendChild(y),f.appendChild(v),f.appendChild(g),f.appendChild(w),c.appendChild(f),n.appendChild(o);case 47:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function h(t){return d.apply(this,arguments)}function d(){return(d=r(e().mark((function t(n){var r,o,a;return e().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r="https://api.openweathermap.org/data/2.5/weather?units=metric&q=\n  ".concat(n,"&appid=").concat("2597ebe4fdf3e724b73c766fb984c2fb"),t.next=4,fetch(r);case 4:if(200===(o=t.sent).status){t.next=8;break}return t.abrupt("return",{name:n,main:{temp:"notFound"},weather:[{icon:"https://picsum.photos/seed/picsum/10/300"}],coord:{lat:"notFound",lon:"notFound"}});case 8:return t.next=10,o.json();case 10:return a=t.sent,t.abrupt("return",a);case 12:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function f(){return m.apply(this,arguments)}function m(){return(m=r(e().mark((function t(){var n,r;return e().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=3,fetch("https://ipwho.is/");case 3:return n=t.sent,t.next=6,n.json();case 6:return r=t.sent,t.abrupt("return",{name:r.city,coord:{lat:r.latitude,lon:r.longitude}});case 8:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function y(t){var e=document.createElement("div");e.className="yourWeatherInfo";var n=document.createElement("table");n.className="youWeatherTable",e.appendChild(n);var r=document.createElement("label");r.className="label",r.innerText="Карта",r.setAttribute("for",e.className),e.appendChild(r);var o=document.createElement("div");o.className="map",e.appendChild(o),t.appendChild(e);var a=document.createElement("div");a.className="container";var c=document.createElement("ol");c.className="citiesList",c.placeholder="Список городов";var i=document.createElement("div");i.className="weatherInfo";var u=document.createElement("label");u.className="label",u.id="label2",u.innerText="Ваш список городов",u.setAttribute("for",i.className),u.hidden="true",i.appendChild(u);var l=document.createElement("table");l.className="cityWeatherTable",i.appendChild(l),a.appendChild(i),a.appendChild(c),t.appendChild(a);var s=document.createElement("form");s.className="myForm";var p=document.createElement("input");p.className="userInput",p.placeholder="Type city and press enter",s.appendChild(p);var h=document.createElement("button");return h.className="userButton",h.innerText="Get weather",s.appendChild(h),t.appendChild(s),t}function v(){return v=r(e().mark((function t(n){var o,i,p,d,m;return e().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=y(n),t.next=3,f();case 3:return o=t.sent,i=o.name,p=o.coord,t.next=8,h(i);case 8:return d=t.sent,t.next=11,s(n.querySelector(".yourWeatherInfo"),d);case 11:return t.next=13,c();case 13:m=t.sent,l(n.querySelector(".container"),m),a(n,p.lat,p.lon),n.querySelector(".myForm").addEventListener("submit",function(){var t=r(e().mark((function t(r){var o,c,i,p,d;return e().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r.preventDefault(),o=r.target,c=o.querySelector("input"),i=c.value,c.value="",p=m.reduce((function(t,e){return e===i?t=!0:t}),!1),p||m.push(i),m.splice(m,m.length-10),l(n.querySelector(".container"),m),u(m),t.next=12,h(i);case 12:return d=t.sent,t.next=15,s(n.querySelector(".weatherInfo"),d);case 15:a(n,d.coord.lat,d.coord.lon);case 16:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()),n.querySelector("ol").addEventListener("click",function(){var t=r(e().mark((function t(r){var o,c,i;return e().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r.preventDefault(),o=r.target,c=o.innerHTML,t.next=5,h(c);case 5:return i=t.sent,t.next=8,s(n.querySelector(".weatherInfo"),i);case 8:document.querySelector("#label2").innerText="Погода в выбранном городе",a(n,i.coord.lat,i.coord.lon);case 11:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}());case 18:case"end":return t.stop()}}),t)}))),v.apply(this,arguments)}!function(t){v.apply(this,arguments)}(document.querySelector("body"))}();
//# sourceMappingURL=bundle.js.map