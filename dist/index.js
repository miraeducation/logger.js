!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports["@mira/logger"]=t():e.miraLogger=t()}(this,function(){return function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="/",n(n.s=0)}([function(e,t,n){e.exports=n(1)},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=n(2);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}const i={error:0,warn:1,info:2,verbose:3,debug:4,silly:5};var u=({logLevel:e,debugMode:t,inspectOptions:n={}})=>{const u=(e,n)=>t&&`[${e}m${n}[0m`||n,c=e=>u("31",e),l=e=>u("32",e),f=e=>u("33",e),s=e=>u("34",e);n=function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter(function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),r.forEach(function(t){o(e,t,n[t])})}return e}({colors:t},n),e=(e||(t?"debug":"info")).toLowerCase();const a={color:{red:c,green:l,yellow:f,blue:s},log:(e,...o)=>{(o=o.map(e=>e===Object(e)?t?(0,r.inspect)(e,n):JSON.stringify(e):e)).unshift(e),!t&&o.unshift((new Date).toISOString().replace(/[TZ]/g," ")),console.log(...o)},error:(...e)=>{a.log(c("ERROR"),...e)},warn:(...t)=>{i[e]>=i.warn&&a.log(f("WARN"),...t)},info:(...t)=>{i[e]>=i.info&&a.log(s("INFO"),...t)},debug:(...t)=>{i[e]>=i.debug&&a.log(l("DEBUG"),...t)},silly:(...t)=>{i[e]>=i.silly&&a.log("SILLY",...t)}};return a};t.default=u},function(e,t,n){(function(e,r){var o=/%[sdj%]/g;t.format=function(e){if(!h(e)){for(var t=[],n=0;n<arguments.length;n++)t.push(c(arguments[n]));return t.join(" ")}n=1;for(var r=arguments,i=r.length,u=String(e).replace(o,function(e){if("%%"===e)return"%";if(n>=i)return e;switch(e){case"%s":return String(r[n++]);case"%d":return Number(r[n++]);case"%j":try{return JSON.stringify(r[n++])}catch(e){return"[Circular]"}default:return e}}),l=r[n];n<i;l=r[++n])d(l)||!w(l)?u+=" "+l:u+=" "+c(l);return u},t.deprecate=function(n,o){if(m(e.process))return function(){return t.deprecate(n,o).apply(this,arguments)};if(!0===r.noDeprecation)return n;var i=!1;return function(){if(!i){if(r.throwDeprecation)throw new Error(o);r.traceDeprecation?console.trace(o):console.error(o),i=!0}return n.apply(this,arguments)}};var i,u={};function c(e,n){var r={seen:[],stylize:f};return arguments.length>=3&&(r.depth=arguments[2]),arguments.length>=4&&(r.colors=arguments[3]),g(n)?r.showHidden=n:n&&t._extend(r,n),m(r.showHidden)&&(r.showHidden=!1),m(r.depth)&&(r.depth=2),m(r.colors)&&(r.colors=!1),m(r.customInspect)&&(r.customInspect=!0),r.colors&&(r.stylize=l),s(r,e,r.depth)}function l(e,t){var n=c.styles[t];return n?"["+c.colors[n][0]+"m"+e+"["+c.colors[n][1]+"m":e}function f(e,t){return e}function s(e,n,r){if(e.customInspect&&n&&S(n.inspect)&&n.inspect!==t.inspect&&(!n.constructor||n.constructor.prototype!==n)){var o=n.inspect(r,e);return h(o)||(o=s(e,o,r)),o}var i=function(e,t){if(m(t))return e.stylize("undefined","undefined");if(h(t)){var n="'"+JSON.stringify(t).replace(/^"|"$/g,"").replace(/'/g,"\\'").replace(/\\"/g,'"')+"'";return e.stylize(n,"string")}if(b(t))return e.stylize(""+t,"number");if(g(t))return e.stylize(""+t,"boolean");if(d(t))return e.stylize("null","null")}(e,n);if(i)return i;var u=Object.keys(n),c=function(e){var t={};return e.forEach(function(e,n){t[e]=!0}),t}(u);if(e.showHidden&&(u=Object.getOwnPropertyNames(n)),j(n)&&(u.indexOf("message")>=0||u.indexOf("description")>=0))return a(n);if(0===u.length){if(S(n)){var l=n.name?": "+n.name:"";return e.stylize("[Function"+l+"]","special")}if(v(n))return e.stylize(RegExp.prototype.toString.call(n),"regexp");if(O(n))return e.stylize(Date.prototype.toString.call(n),"date");if(j(n))return a(n)}var f,w="",x=!1,E=["{","}"];(y(n)&&(x=!0,E=["[","]"]),S(n))&&(w=" [Function"+(n.name?": "+n.name:"")+"]");return v(n)&&(w=" "+RegExp.prototype.toString.call(n)),O(n)&&(w=" "+Date.prototype.toUTCString.call(n)),j(n)&&(w=" "+a(n)),0!==u.length||x&&0!=n.length?r<0?v(n)?e.stylize(RegExp.prototype.toString.call(n),"regexp"):e.stylize("[Object]","special"):(e.seen.push(n),f=x?function(e,t,n,r,o){for(var i=[],u=0,c=t.length;u<c;++u)z(t,String(u))?i.push(p(e,t,n,r,String(u),!0)):i.push("");return o.forEach(function(o){o.match(/^\d+$/)||i.push(p(e,t,n,r,o,!0))}),i}(e,n,r,c,u):u.map(function(t){return p(e,n,r,c,t,x)}),e.seen.pop(),function(e,t,n){if(e.reduce(function(e,t){return 0,t.indexOf("\n")>=0&&0,e+t.replace(/\u001b\[\d\d?m/g,"").length+1},0)>60)return n[0]+(""===t?"":t+"\n ")+" "+e.join(",\n  ")+" "+n[1];return n[0]+t+" "+e.join(", ")+" "+n[1]}(f,w,E)):E[0]+w+E[1]}function a(e){return"["+Error.prototype.toString.call(e)+"]"}function p(e,t,n,r,o,i){var u,c,l;if((l=Object.getOwnPropertyDescriptor(t,o)||{value:t[o]}).get?c=l.set?e.stylize("[Getter/Setter]","special"):e.stylize("[Getter]","special"):l.set&&(c=e.stylize("[Setter]","special")),z(r,o)||(u="["+o+"]"),c||(e.seen.indexOf(l.value)<0?(c=d(n)?s(e,l.value,null):s(e,l.value,n-1)).indexOf("\n")>-1&&(c=i?c.split("\n").map(function(e){return"  "+e}).join("\n").substr(2):"\n"+c.split("\n").map(function(e){return"   "+e}).join("\n")):c=e.stylize("[Circular]","special")),m(u)){if(i&&o.match(/^\d+$/))return c;(u=JSON.stringify(""+o)).match(/^"([a-zA-Z_][a-zA-Z_0-9]*)"$/)?(u=u.substr(1,u.length-2),u=e.stylize(u,"name")):(u=u.replace(/'/g,"\\'").replace(/\\"/g,'"').replace(/(^"|"$)/g,"'"),u=e.stylize(u,"string"))}return u+": "+c}function y(e){return Array.isArray(e)}function g(e){return"boolean"==typeof e}function d(e){return null===e}function b(e){return"number"==typeof e}function h(e){return"string"==typeof e}function m(e){return void 0===e}function v(e){return w(e)&&"[object RegExp]"===x(e)}function w(e){return"object"==typeof e&&null!==e}function O(e){return w(e)&&"[object Date]"===x(e)}function j(e){return w(e)&&("[object Error]"===x(e)||e instanceof Error)}function S(e){return"function"==typeof e}function x(e){return Object.prototype.toString.call(e)}function E(e){return e<10?"0"+e.toString(10):e.toString(10)}t.debuglog=function(e){if(m(i)&&(i=r.env.NODE_DEBUG||""),e=e.toUpperCase(),!u[e])if(new RegExp("\\b"+e+"\\b","i").test(i)){var n=r.pid;u[e]=function(){var r=t.format.apply(t,arguments);console.error("%s %d: %s",e,n,r)}}else u[e]=function(){};return u[e]},t.inspect=c,c.colors={bold:[1,22],italic:[3,23],underline:[4,24],inverse:[7,27],white:[37,39],grey:[90,39],black:[30,39],blue:[34,39],cyan:[36,39],green:[32,39],magenta:[35,39],red:[31,39],yellow:[33,39]},c.styles={special:"cyan",number:"yellow",boolean:"yellow",undefined:"grey",null:"bold",string:"green",date:"magenta",regexp:"red"},t.isArray=y,t.isBoolean=g,t.isNull=d,t.isNullOrUndefined=function(e){return null==e},t.isNumber=b,t.isString=h,t.isSymbol=function(e){return"symbol"==typeof e},t.isUndefined=m,t.isRegExp=v,t.isObject=w,t.isDate=O,t.isError=j,t.isFunction=S,t.isPrimitive=function(e){return null===e||"boolean"==typeof e||"number"==typeof e||"string"==typeof e||"symbol"==typeof e||void 0===e},t.isBuffer=n(5);var T=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];function z(e,t){return Object.prototype.hasOwnProperty.call(e,t)}t.log=function(){console.log("%s - %s",function(){var e=new Date,t=[E(e.getHours()),E(e.getMinutes()),E(e.getSeconds())].join(":");return[e.getDate(),T[e.getMonth()],t].join(" ")}(),t.format.apply(t,arguments))},t.inherits=n(6),t._extend=function(e,t){if(!t||!w(t))return e;for(var n=Object.keys(t),r=n.length;r--;)e[n[r]]=t[n[r]];return e}}).call(this,n(3),n(4))},function(e,t){var n;n=function(){return this}();try{n=n||Function("return this")()||(0,eval)("this")}catch(e){"object"==typeof window&&(n=window)}e.exports=n},function(e,t){var n,r,o=e.exports={};function i(){throw new Error("setTimeout has not been defined")}function u(){throw new Error("clearTimeout has not been defined")}function c(e){if(n===setTimeout)return setTimeout(e,0);if((n===i||!n)&&setTimeout)return n=setTimeout,setTimeout(e,0);try{return n(e,0)}catch(t){try{return n.call(null,e,0)}catch(t){return n.call(this,e,0)}}}!function(){try{n="function"==typeof setTimeout?setTimeout:i}catch(e){n=i}try{r="function"==typeof clearTimeout?clearTimeout:u}catch(e){r=u}}();var l,f=[],s=!1,a=-1;function p(){s&&l&&(s=!1,l.length?f=l.concat(f):a=-1,f.length&&y())}function y(){if(!s){var e=c(p);s=!0;for(var t=f.length;t;){for(l=f,f=[];++a<t;)l&&l[a].run();a=-1,t=f.length}l=null,s=!1,function(e){if(r===clearTimeout)return clearTimeout(e);if((r===u||!r)&&clearTimeout)return r=clearTimeout,clearTimeout(e);try{r(e)}catch(t){try{return r.call(null,e)}catch(t){return r.call(this,e)}}}(e)}}function g(e,t){this.fun=e,this.array=t}function d(){}o.nextTick=function(e){var t=new Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)t[n-1]=arguments[n];f.push(new g(e,t)),1!==f.length||s||c(y)},g.prototype.run=function(){this.fun.apply(null,this.array)},o.title="browser",o.browser=!0,o.env={},o.argv=[],o.version="",o.versions={},o.on=d,o.addListener=d,o.once=d,o.off=d,o.removeListener=d,o.removeAllListeners=d,o.emit=d,o.prependListener=d,o.prependOnceListener=d,o.listeners=function(e){return[]},o.binding=function(e){throw new Error("process.binding is not supported")},o.cwd=function(){return"/"},o.chdir=function(e){throw new Error("process.chdir is not supported")},o.umask=function(){return 0}},function(e,t){e.exports=function(e){return e&&"object"==typeof e&&"function"==typeof e.copy&&"function"==typeof e.fill&&"function"==typeof e.readUInt8}},function(e,t){"function"==typeof Object.create?e.exports=function(e,t){e.super_=t,e.prototype=Object.create(t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}})}:e.exports=function(e,t){e.super_=t;var n=function(){};n.prototype=t.prototype,e.prototype=new n,e.prototype.constructor=e}}])});
//# sourceMappingURL=index.js.map