!function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="/",n(n.s="H1XT")}({"8oxB":function(e,t){var n,r,o=e.exports={};function i(){throw new Error("setTimeout has not been defined")}function u(){throw new Error("clearTimeout has not been defined")}function a(e){if(n===setTimeout)return setTimeout(e,0);if((n===i||!n)&&setTimeout)return n=setTimeout,setTimeout(e,0);try{return n(e,0)}catch(t){try{return n.call(null,e,0)}catch(t){return n.call(this,e,0)}}}!function(){try{n="function"==typeof setTimeout?setTimeout:i}catch(e){n=i}try{r="function"==typeof clearTimeout?clearTimeout:u}catch(e){r=u}}();var c,s=[],f=!1,l=-1;function d(){f&&c&&(f=!1,c.length?s=c.concat(s):l=-1,s.length&&p())}function p(){if(!f){var e=a(d);f=!0;for(var t=s.length;t;){for(c=s,s=[];++l<t;)c&&c[l].run();l=-1,t=s.length}c=null,f=!1,function(e){if(r===clearTimeout)return clearTimeout(e);if((r===u||!r)&&clearTimeout)return r=clearTimeout,clearTimeout(e);try{r(e)}catch(t){try{return r.call(null,e)}catch(t){return r.call(this,e)}}}(e)}}function m(e,t){this.fun=e,this.array=t}function h(){}o.nextTick=function(e){var t=new Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)t[n-1]=arguments[n];s.push(new m(e,t)),1!==s.length||f||a(p)},m.prototype.run=function(){this.fun.apply(null,this.array)},o.title="browser",o.browser=!0,o.env={},o.argv=[],o.version="",o.versions={},o.on=h,o.addListener=h,o.once=h,o.off=h,o.removeListener=h,o.removeAllListeners=h,o.emit=h,o.prependListener=h,o.prependOnceListener=h,o.listeners=function(e){return[]},o.binding=function(e){throw new Error("process.binding is not supported")},o.cwd=function(){return"/"},o.chdir=function(e){throw new Error("process.chdir is not supported")},o.umask=function(){return 0}},H1XT:function(e,t,n){(function(e){function t(e){return function(e){if(Array.isArray(e)){for(var t=0,n=new Array(e.length);t<e.length;t++)n[t]=e[t];return n}}(e)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}var n=self;n.addEventListener("message",function(r){var o=r.data,i=o.promiseId,u=o.size,a=o.voxels;return e(function(){return function(e){for(var r=e.promiseId,o=e.size,i=e.voxels,u={},a=function(e,t,n){e<0&&(e+=o),e>=o&&(e-=o),t<0&&(t+=o),t>=o&&(t-=o),n<0&&(n+=o),n>=o&&(n-=o);var r="".concat(e,":").concat(t,":").concat(n);if(!u[r]){var a=i[n*o*o+t*o+e],c=a>>24&1,s=(a>>16&255)/255,f=(a>>8&255)/255,l=(255&a)/255;u[r]={type:c,r:s,g:f,b:l}}return u[r]},c=function(e,t,n){return!!a(e,t,n).type},s=function(e){return e[0]&&e[1]&&(e[3]=!0),e.reduce(function(e,t){return t?e-.2:e},1)},f=[],l=[],d=[],p=[],m=[],h=0,y=function(e,n,r,o,i,u,a,c,y,v){var g=[e,r,i,a],T=[s(n),s(o),s(u),s(c)],b=[[0,0],[1,0],[1,1],[0,1]];T[0]+T[2]<T[1]+T[3]&&(g.unshift(g.pop()),T.unshift(T.pop()),b.unshift(b.pop())),g.forEach(function(e){return l.push.apply(l,t(e))}),T.forEach(function(e){return d.push(y[0]*e,y[1]*e,y[2]*e)}),p.push.apply(p,t(v).concat(t(v),t(v),t(v))),b.forEach(function(e){return m.push.apply(m,t(e))}),f.push(h,h+1,h+2,h+2,h+3,h),h+=4},v=0;v<o;v+=1)for(var g=0;g<o;g+=1)for(var T=0;T<o;T+=1){var b=a(T,g,v),w=b.type,I=b.r,_=b.g,j=b.b;1===w&&(c(T,g+1,v)||y([T,g+1,v+1],[c(T-1,g+1,v),c(T,g+1,v+1),c(T-1,g+1,v+1)],[T+1,g+1,v+1],[c(T+1,g+1,v),c(T,g+1,v+1),c(T+1,g+1,v+1)],[T+1,g+1,v],[c(T+1,g+1,v),c(T,g+1,v-1),c(T+1,g+1,v-1)],[T,g+1,v],[c(T-1,g+1,v),c(T,g+1,v-1),c(T-1,g+1,v-1)],[I,_,j],[0,1,0]),c(T,g-1,v)||y([T,g,v],[c(T-1,g-1,v),c(T,g-1,v-1),c(T-1,g-1,v-1)],[T+1,g,v],[c(T+1,g-1,v),c(T,g-1,v-1),c(T+1,g-1,v-1)],[T+1,g,v+1],[c(T+1,g-1,v),c(T,g-1,v+1),c(T+1,g-1,v+1)],[T,g,v+1],[c(T-1,g-1,v),c(T,g-1,v+1),c(T-1,g-1,v+1)],[I,_,j],[0,-1,0]),c(T,g,v+1)||y([T,g,v+1],[c(T-1,g,v+1),c(T,g-1,v+1),c(T-1,g-1,v+1)],[T+1,g,v+1],[c(T+1,g,v+1),c(T,g-1,v+1),c(T+1,g-1,v+1)],[T+1,g+1,v+1],[c(T+1,g,v+1),c(T,g+1,v+1),c(T+1,g+1,v+1)],[T,g+1,v+1],[c(T-1,g,v+1),c(T,g+1,v+1),c(T-1,g+1,v+1)],[I,_,j],[0,0,1]),c(T,g,v-1)||y([T+1,g,v],[c(T+1,g,v-1),c(T,g-1,v-1),c(T+1,g-1,v-1)],[T,g,v],[c(T-1,g,v-1),c(T,g-1,v-1),c(T-1,g-1,v-1)],[T,g+1,v],[c(T-1,g,v-1),c(T,g+1,v-1),c(T-1,g+1,v-1)],[T+1,g+1,v],[c(T+1,g,v-1),c(T,g+1,v-1),c(T+1,g+1,v-1)],[I,_,j],[0,0,-1]),c(T+1,g,v)||y([T+1,g,v+1],[c(T+1,g,v+1),c(T+1,g-1,v),c(T+1,g-1,v+1)],[T+1,g,v],[c(T+1,g,v-1),c(T+1,g-1,v),c(T+1,g-1,v-1)],[T+1,g+1,v],[c(T+1,g,v-1),c(T+1,g+1,v),c(T+1,g+1,v-1)],[T+1,g+1,v+1],[c(T+1,g,v+1),c(T+1,g+1,v),c(T+1,g+1,v+1)],[I,_,j],[1,0,0]),c(T-1,g,v)||y([T,g,v],[c(T-1,g,v-1),c(T-1,g-1,v),c(T-1,g-1,v-1)],[T,g,v+1],[c(T-1,g,v+1),c(T-1,g-1,v),c(T-1,g-1,v+1)],[T,g+1,v+1],[c(T-1,g,v+1),c(T-1,g+1,v),c(T-1,g+1,v+1)],[T,g+1,v],[c(T-1,g,v-1),c(T-1,g+1,v),c(T-1,g+1,v-1)],[I,_,j],[-1,0,0]))}var x={index:new Uint32Array(f),position:new Float32Array(l),color:new Float32Array(d),normal:new Float32Array(p),uv:new Float32Array(m)};n.postMessage({geometry:x,promiseId:r},[x.index.buffer,x.position.buffer,x.color.buffer,x.normal.buffer,x.uv.buffer])}({promiseId:i,size:u,voxels:a})})})}).call(this,n("URgk").setImmediate)},URgk:function(e,t,n){(function(e){var r=void 0!==e&&e||"undefined"!=typeof self&&self||window,o=Function.prototype.apply;function i(e,t){this._id=e,this._clearFn=t}t.setTimeout=function(){return new i(o.call(setTimeout,r,arguments),clearTimeout)},t.setInterval=function(){return new i(o.call(setInterval,r,arguments),clearInterval)},t.clearTimeout=t.clearInterval=function(e){e&&e.close()},i.prototype.unref=i.prototype.ref=function(){},i.prototype.close=function(){this._clearFn.call(r,this._id)},t.enroll=function(e,t){clearTimeout(e._idleTimeoutId),e._idleTimeout=t},t.unenroll=function(e){clearTimeout(e._idleTimeoutId),e._idleTimeout=-1},t._unrefActive=t.active=function(e){clearTimeout(e._idleTimeoutId);var t=e._idleTimeout;t>=0&&(e._idleTimeoutId=setTimeout(function(){e._onTimeout&&e._onTimeout()},t))},n("YBdB"),t.setImmediate="undefined"!=typeof self&&self.setImmediate||void 0!==e&&e.setImmediate||this&&this.setImmediate,t.clearImmediate="undefined"!=typeof self&&self.clearImmediate||void 0!==e&&e.clearImmediate||this&&this.clearImmediate}).call(this,n("yLpj"))},YBdB:function(e,t,n){(function(e,t){!function(e,n){"use strict";if(!e.setImmediate){var r,o,i,u,a,c=1,s={},f=!1,l=e.document,d=Object.getPrototypeOf&&Object.getPrototypeOf(e);d=d&&d.setTimeout?d:e,"[object process]"==={}.toString.call(e.process)?r=function(e){t.nextTick(function(){m(e)})}:!function(){if(e.postMessage&&!e.importScripts){var t=!0,n=e.onmessage;return e.onmessage=function(){t=!1},e.postMessage("","*"),e.onmessage=n,t}}()?e.MessageChannel?((i=new MessageChannel).port1.onmessage=function(e){m(e.data)},r=function(e){i.port2.postMessage(e)}):l&&"onreadystatechange"in l.createElement("script")?(o=l.documentElement,r=function(e){var t=l.createElement("script");t.onreadystatechange=function(){m(e),t.onreadystatechange=null,o.removeChild(t),t=null},o.appendChild(t)}):r=function(e){setTimeout(m,0,e)}:(u="setImmediate$"+Math.random()+"$",a=function(t){t.source===e&&"string"==typeof t.data&&0===t.data.indexOf(u)&&m(+t.data.slice(u.length))},e.addEventListener?e.addEventListener("message",a,!1):e.attachEvent("onmessage",a),r=function(t){e.postMessage(u+t,"*")}),d.setImmediate=function(e){"function"!=typeof e&&(e=new Function(""+e));for(var t=new Array(arguments.length-1),n=0;n<t.length;n++)t[n]=arguments[n+1];var o={callback:e,args:t};return s[c]=o,r(c),c++},d.clearImmediate=p}function p(e){delete s[e]}function m(e){if(f)setTimeout(m,0,e);else{var t=s[e];if(t){f=!0;try{!function(e){var t=e.callback,r=e.args;switch(r.length){case 0:t();break;case 1:t(r[0]);break;case 2:t(r[0],r[1]);break;case 3:t(r[0],r[1],r[2]);break;default:t.apply(n,r)}}(t)}finally{p(e),f=!1}}}}}("undefined"==typeof self?void 0===e?this:e:self)}).call(this,n("yLpj"),n("8oxB"))},yLpj:function(e,t){var n;n=function(){return this}();try{n=n||new Function("return this")()}catch(e){"object"==typeof window&&(n=window)}e.exports=n}});
//# sourceMappingURL=main.f1d9cbe1287e7864319545527167b1e1.js.map