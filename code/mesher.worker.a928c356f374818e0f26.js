!function(n){var r={};function o(e){if(r[e])return r[e].exports;var t=r[e]={i:e,l:!1,exports:{}};return n[e].call(t.exports,t,t.exports,o),t.l=!0,t.exports}o.m=n,o.c=r,o.d=function(e,t,n){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},o.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)o.d(n,r,function(e){return t[e]}.bind(null,r));return n},o.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="/",o(o.s="H1XT")}({"8oxB":function(e,t){var n,r,o=e.exports={};function i(){throw new Error("setTimeout has not been defined")}function u(){throw new Error("clearTimeout has not been defined")}function a(t){if(n===setTimeout)return setTimeout(t,0);if((n===i||!n)&&setTimeout)return n=setTimeout,setTimeout(t,0);try{return n(t,0)}catch(e){try{return n.call(null,t,0)}catch(e){return n.call(this,t,0)}}}!function(){try{n="function"==typeof setTimeout?setTimeout:i}catch(e){n=i}try{r="function"==typeof clearTimeout?clearTimeout:u}catch(e){r=u}}();var c,s=[],f=!1,l=-1;function d(){f&&c&&(f=!1,c.length?s=c.concat(s):l=-1,s.length&&p())}function p(){if(!f){var e=a(d);f=!0;for(var t=s.length;t;){for(c=s,s=[];++l<t;)c&&c[l].run();l=-1,t=s.length}c=null,f=!1,function(t){if(r===clearTimeout)return clearTimeout(t);if((r===u||!r)&&clearTimeout)return r=clearTimeout,clearTimeout(t);try{r(t)}catch(e){try{return r.call(null,t)}catch(e){return r.call(this,t)}}}(e)}}function m(e,t){this.fun=e,this.array=t}function h(){}o.nextTick=function(e){var t=new Array(arguments.length-1);if(1<arguments.length)for(var n=1;n<arguments.length;n++)t[n-1]=arguments[n];s.push(new m(e,t)),1!==s.length||f||a(p)},m.prototype.run=function(){this.fun.apply(null,this.array)},o.title="browser",o.browser=!0,o.env={},o.argv=[],o.version="",o.versions={},o.on=h,o.addListener=h,o.once=h,o.off=h,o.removeListener=h,o.removeAllListeners=h,o.emit=h,o.prependListener=h,o.prependOnceListener=h,o.listeners=function(e){return[]},o.binding=function(e){throw new Error("process.binding is not supported")},o.cwd=function(){return"/"},o.chdir=function(e){throw new Error("process.chdir is not supported")},o.umask=function(){return 0}},H1XT:function(e,t,n){(function(i){function j(e){return function(e){if(Array.isArray(e)){for(var t=0,n=new Array(e.length);t<e.length;t++)n[t]=e[t];return n}}(e)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}var x=self;x.addEventListener("message",function(e){var t=e.data,n=t.promiseId,r=t.size,o=t.voxels;return i(function(){return function(e){for(var t=e.promiseId,s=e.size,f=e.voxels,l={},r=function(e,t,n){e<0&&(e+=s),s<=e&&(e-=s),t<0&&(t+=s),s<=t&&(t-=s),n<0&&(n+=s),s<=n&&(n-=s);var r="".concat(e,":").concat(t,":").concat(n);if(!l[r]){var o=f[n*s*s+t*s+e],i=o>>24&1,u=(o>>16&255)/255,a=(o>>8&255)/255,c=(255&o)/255;l[r]={type:i,r:u,g:a,b:c}}return l[r]},n=function(e,t,n){return!!r(e,t,n).type},p=function(e){return e[0]&&e[1]&&(e[3]=!0),e.reduce(function(e,t){return t?e-.2:e},1)},m=[],h=[],y=[],v=[],g=[],T=0,o=function(e,t,n,r,o,i,u,a,c,s){var f=[e,n,o,u],l=[p(t),p(r),p(i),p(a)],d=[[0,0],[1,0],[1,1],[0,1]];l[0]+l[2]<l[1]+l[3]&&(f.unshift(f.pop()),l.unshift(l.pop()),d.unshift(d.pop())),f.forEach(function(e){return h.push.apply(h,j(e))}),l.forEach(function(e){return y.push(c[0]*e,c[1]*e,c[2]*e)}),v.push.apply(v,j(s).concat(j(s),j(s),j(s))),d.forEach(function(e){return g.push.apply(g,j(e))}),m.push(T,T+1,T+2,T+2,T+3,T),T+=4},i=0;i<s;i+=1)for(var u=0;u<s;u+=1)for(var a=0;a<s;a+=1){var c=r(a,u,i),d=c.type,b=c.r,w=c.g,I=c.b;1===d&&(n(a,u+1,i)||o([a,u+1,i+1],[n(a-1,u+1,i),n(a,u+1,i+1),n(a-1,u+1,i+1)],[a+1,u+1,i+1],[n(a+1,u+1,i),n(a,u+1,i+1),n(a+1,u+1,i+1)],[a+1,u+1,i],[n(a+1,u+1,i),n(a,u+1,i-1),n(a+1,u+1,i-1)],[a,u+1,i],[n(a-1,u+1,i),n(a,u+1,i-1),n(a-1,u+1,i-1)],[b,w,I],[0,1,0]),n(a,u-1,i)||o([a,u,i],[n(a-1,u-1,i),n(a,u-1,i-1),n(a-1,u-1,i-1)],[a+1,u,i],[n(a+1,u-1,i),n(a,u-1,i-1),n(a+1,u-1,i-1)],[a+1,u,i+1],[n(a+1,u-1,i),n(a,u-1,i+1),n(a+1,u-1,i+1)],[a,u,i+1],[n(a-1,u-1,i),n(a,u-1,i+1),n(a-1,u-1,i+1)],[b,w,I],[0,-1,0]),n(a,u,i+1)||o([a,u,i+1],[n(a-1,u,i+1),n(a,u-1,i+1),n(a-1,u-1,i+1)],[a+1,u,i+1],[n(a+1,u,i+1),n(a,u-1,i+1),n(a+1,u-1,i+1)],[a+1,u+1,i+1],[n(a+1,u,i+1),n(a,u+1,i+1),n(a+1,u+1,i+1)],[a,u+1,i+1],[n(a-1,u,i+1),n(a,u+1,i+1),n(a-1,u+1,i+1)],[b,w,I],[0,0,1]),n(a,u,i-1)||o([a+1,u,i],[n(a+1,u,i-1),n(a,u-1,i-1),n(a+1,u-1,i-1)],[a,u,i],[n(a-1,u,i-1),n(a,u-1,i-1),n(a-1,u-1,i-1)],[a,u+1,i],[n(a-1,u,i-1),n(a,u+1,i-1),n(a-1,u+1,i-1)],[a+1,u+1,i],[n(a+1,u,i-1),n(a,u+1,i-1),n(a+1,u+1,i-1)],[b,w,I],[0,0,-1]),n(a+1,u,i)||o([a+1,u,i+1],[n(a+1,u,i+1),n(a+1,u-1,i),n(a+1,u-1,i+1)],[a+1,u,i],[n(a+1,u,i-1),n(a+1,u-1,i),n(a+1,u-1,i-1)],[a+1,u+1,i],[n(a+1,u,i-1),n(a+1,u+1,i),n(a+1,u+1,i-1)],[a+1,u+1,i+1],[n(a+1,u,i+1),n(a+1,u+1,i),n(a+1,u+1,i+1)],[b,w,I],[1,0,0]),n(a-1,u,i)||o([a,u,i],[n(a-1,u,i-1),n(a-1,u-1,i),n(a-1,u-1,i-1)],[a,u,i+1],[n(a-1,u,i+1),n(a-1,u-1,i),n(a-1,u-1,i+1)],[a,u+1,i+1],[n(a-1,u,i+1),n(a-1,u+1,i),n(a-1,u+1,i+1)],[a,u+1,i],[n(a-1,u,i-1),n(a-1,u+1,i),n(a-1,u+1,i-1)],[b,w,I],[-1,0,0]))}var _={index:new Uint32Array(m),position:new Float32Array(h),color:new Float32Array(y),normal:new Float32Array(v),uv:new Float32Array(g)};x.postMessage({geometry:_,promiseId:t},[_.index.buffer,_.position.buffer,_.color.buffer,_.normal.buffer,_.uv.buffer])}({promiseId:n,size:r,voxels:o})})})}).call(this,n("URgk").setImmediate)},URgk:function(e,o,i){(function(e){var t=void 0!==e&&e||"undefined"!=typeof self&&self||window,n=Function.prototype.apply;function r(e,t){this._id=e,this._clearFn=t}o.setTimeout=function(){return new r(n.call(setTimeout,t,arguments),clearTimeout)},o.setInterval=function(){return new r(n.call(setInterval,t,arguments),clearInterval)},o.clearTimeout=o.clearInterval=function(e){e&&e.close()},r.prototype.unref=r.prototype.ref=function(){},r.prototype.close=function(){this._clearFn.call(t,this._id)},o.enroll=function(e,t){clearTimeout(e._idleTimeoutId),e._idleTimeout=t},o.unenroll=function(e){clearTimeout(e._idleTimeoutId),e._idleTimeout=-1},o._unrefActive=o.active=function(e){clearTimeout(e._idleTimeoutId);var t=e._idleTimeout;0<=t&&(e._idleTimeoutId=setTimeout(function(){e._onTimeout&&e._onTimeout()},t))},i("YBdB"),o.setImmediate="undefined"!=typeof self&&self.setImmediate||void 0!==e&&e.setImmediate||this&&this.setImmediate,o.clearImmediate="undefined"!=typeof self&&self.clearImmediate||void 0!==e&&e.clearImmediate||this&&this.clearImmediate}).call(this,i("yLpj"))},YBdB:function(e,t,n){(function(e,m){!function(n,r){"use strict";if(!n.setImmediate){var o,i,t,u,e,a=1,c={},s=!1,f=n.document,l=Object.getPrototypeOf&&Object.getPrototypeOf(n);l=l&&l.setTimeout?l:n,o="[object process]"==={}.toString.call(n.process)?function(e){m.nextTick(function(){p(e)})}:function(){if(n.postMessage&&!n.importScripts){var e=!0,t=n.onmessage;return n.onmessage=function(){e=!1},n.postMessage("","*"),n.onmessage=t,e}}()?(u="setImmediate$"+Math.random()+"$",e=function(e){e.source===n&&"string"==typeof e.data&&0===e.data.indexOf(u)&&p(+e.data.slice(u.length))},n.addEventListener?n.addEventListener("message",e,!1):n.attachEvent("onmessage",e),function(e){n.postMessage(u+e,"*")}):n.MessageChannel?((t=new MessageChannel).port1.onmessage=function(e){p(e.data)},function(e){t.port2.postMessage(e)}):f&&"onreadystatechange"in f.createElement("script")?(i=f.documentElement,function(e){var t=f.createElement("script");t.onreadystatechange=function(){p(e),t.onreadystatechange=null,i.removeChild(t),t=null},i.appendChild(t)}):function(e){setTimeout(p,0,e)},l.setImmediate=function(e){"function"!=typeof e&&(e=new Function(""+e));for(var t=new Array(arguments.length-1),n=0;n<t.length;n++)t[n]=arguments[n+1];var r={callback:e,args:t};return c[a]=r,o(a),a++},l.clearImmediate=d}function d(e){delete c[e]}function p(e){if(s)setTimeout(p,0,e);else{var t=c[e];if(t){s=!0;try{!function(e){var t=e.callback,n=e.args;switch(n.length){case 0:t();break;case 1:t(n[0]);break;case 2:t(n[0],n[1]);break;case 3:t(n[0],n[1],n[2]);break;default:t.apply(r,n)}}(t)}finally{d(e),s=!1}}}}}("undefined"==typeof self?void 0===e?this:e:self)}).call(this,n("yLpj"),n("8oxB"))},yLpj:function(e,t){var n;n=function(){return this}();try{n=n||new Function("return this")()}catch(e){"object"==typeof window&&(n=window)}e.exports=n}});
//# sourceMappingURL=main.f5c70bafde28965d1dd8d2535acb73db.js.map