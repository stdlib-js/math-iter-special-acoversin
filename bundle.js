// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
!function(t,r){"object"==typeof exports&&"undefined"!=typeof module?module.exports=r():"function"==typeof define&&define.amd?define(r):(t="undefined"!=typeof globalThis?globalThis:t||self).iterAcoversin=r()}(this,(function(){"use strict";function t(t){if(t.__esModule)return t;var r=Object.defineProperty({},"__esModule",{value:!0});return Object.keys(t).forEach((function(e){var n=Object.getOwnPropertyDescriptor(t,e);Object.defineProperty(r,e,n.get?n:{enumerable:!0,get:function(){return t[e]}})})),r}var r="function"==typeof Object.defineProperty?Object.defineProperty:null;var e=function(){try{return r({},"x",{}),!0}catch(t){return!1}},n=Object.defineProperty,o=Object.prototype,u=o.toString,i=o.__defineGetter__,c=o.__defineSetter__,a=o.__lookupGetter__,f=o.__lookupSetter__;var l=function(t,r,e){var n,l,v,p;if("object"!=typeof t||null===t||"[object Array]"===u.call(t))throw new TypeError("invalid argument. First argument must be an object. Value: `"+t+"`.");if("object"!=typeof e||null===e||"[object Array]"===u.call(e))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+e+"`.");if((l="value"in e)&&(a.call(t,r)||f.call(t,r)?(n=t.__proto__,t.__proto__=o,delete t[r],t[r]=e.value,t.__proto__=n):t[r]=e.value),v="get"in e,p="set"in e,l&&(v||p))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return v&&i&&i.call(t,r,e.get),p&&c&&c.call(t,r,e.set),t},v=n,p=l,y=e()?v:p;var b=function(t,r,e){y(t,r,{configurable:!1,enumerable:!1,writable:!1,value:e})},s=b,d=/./;var m=function(t){return"boolean"==typeof t};var j=function(){return"function"==typeof Symbol&&"symbol"==typeof Symbol("foo")}();var _=function(){return j&&"symbol"==typeof Symbol.toStringTag},g=Object.prototype.toString,w=g;var O=function(t){return w.call(t)},h=Object.prototype.hasOwnProperty;var S=function(t,r){return null!=t&&h.call(t,r)},P="function"==typeof Symbol?Symbol.toStringTag:"",E=S,T=P,A=g;var x=O,N=function(t){var r,e,n;if(null==t)return A.call(t);e=t[T],r=E(t,T);try{t[T]=void 0}catch(r){return A.call(t)}return n=A.call(t),r?t[T]=e:delete t[T],n},B=_()?N:x,V=Boolean.prototype.toString;var F=B,M=function(t){try{return V.call(t),!0}catch(t){return!1}},k=_();var G=function(t){return"object"==typeof t&&(t instanceof Boolean||(k?M(t):"[object Boolean]"===F(t)))},C=m,L=G;var R=s,X=function(t){return C(t)||L(t)},q=G;R(X,"isPrimitive",m),R(X,"isObject",q);var z=X;var D=function(){return new Function("return this;")()},I="object"==typeof self?self:null,U="object"==typeof window?window:null,H="undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{},J="object"==typeof H?H:null;module.exports=J;var K=z.isPrimitive,Q=D,W=I,Y=U,Z=t(Object.freeze({__proto__:null}));var $=function(t){if(arguments.length){if(!K(t))throw new TypeError("invalid argument. Must provide a boolean primitive. Value: `"+t+"`.");if(t)return Q()}if(W)return W;if(Y)return Y;if(Z)return Z;throw new Error("unexpected error. Unable to resolve global object.")},tt=$(),rt=tt.document&&tt.document.childNodes,et=Int8Array,nt=d,ot=rt,ut=et;var it=function(){return"function"==typeof nt||"object"==typeof ut||"function"==typeof ot};var ct=function(){return/^\s*function\s*([^(]*)/i},at=ct;s(at,"REGEXP",ct());var ft=at,lt=B;var vt=Array.isArray?Array.isArray:function(t){return"[object Array]"===lt(t)},pt=vt;var yt=function(t){return null!==t&&"object"==typeof t};s(yt,"isObjectLikeArray",function(t){if("function"!=typeof t)throw new TypeError("invalid argument. Must provide a function. Value: `"+t+"`.");return function(r){var e,n;if(!pt(r))return!1;if(0===(e=r.length))return!1;for(n=0;n<e;n++)if(!1===t(r[n]))return!1;return!0}}(yt));var bt=yt;var st=B,dt=ft.REGEXP,mt=function(t){return bt(t)&&(t._isBuffer||t.constructor&&"function"==typeof t.constructor.isBuffer&&t.constructor.isBuffer(t))};var jt=function(t){var r,e,n;if(("Object"===(e=st(t).slice(8,-1))||"Error"===e)&&t.constructor){if("string"==typeof(n=t.constructor).name)return n.name;if(r=dt.exec(n.toString()))return r[1]}return mt(t)?"Buffer":e},_t=jt;var gt=jt;var wt=function(t){var r;return null===t?"null":"object"===(r=typeof t)?_t(t).toLowerCase():r},Ot=function(t){return gt(t).toLowerCase()},ht=it()?Ot:wt;var St=function(t){return"function"===ht(t)},Pt=St;var Et=function(t){var r=typeof t;return null!==t&&("object"===r||"function"===r)&&Pt(t.next)};var Tt=function(t){return"number"==typeof t},At=Number,xt=At.prototype.toString;var Nt=B,Bt=At,Vt=function(t){try{return xt.call(t),!0}catch(t){return!1}},Ft=_();var Mt=function(t){return"object"==typeof t&&(t instanceof Bt||(Ft?Vt(t):"[object Number]"===Nt(t)))},kt=Tt,Gt=Mt;var Ct=s,Lt=function(t){return kt(t)||Gt(t)},Rt=Mt;Ct(Lt,"isPrimitive",Tt),Ct(Lt,"isObject",Rt);var Xt=Lt,qt=S;var zt=function(){return"function"==typeof Symbol&&"symbol"==typeof Symbol("foo")&&qt(Symbol,"iterator")&&"symbol"==typeof Symbol.iterator}()?Symbol.iterator:null,Dt=vt;var It=function(t){return"object"==typeof t&&null!==t&&!Dt(t)},Ut=Object.getPrototypeOf;var Ht=function(t){return t.__proto__},Jt=B,Kt=Ht;var Qt=function(t){var r=Kt(t);return r||null===r?r:"[object Function]"===Jt(t.constructor)?t.constructor.prototype:t instanceof Object?Object.prototype:null},Wt=Ut,Yt=Qt,Zt=St(Object.getPrototypeOf)?Wt:Yt;var $t=It,tr=St,rr=function(t){return null==t?null:(t=Object(t),Zt(t))},er=S,nr=B,or=Object.prototype;var ur=function(t){var r;return!!$t(t)&&(!(r=rr(t))||!er(t,"constructor")&&er(r,"constructor")&&tr(r.constructor)&&"[object Function]"===nr(r.constructor)&&er(r,"isPrototypeOf")&&tr(r.isPrototypeOf)&&(r===or||function(t){var r;for(r in t)if(!er(t,r))return!1;return!0}(t)))},ir=ur,cr=S;var ar=s,fr=St,lr=Et,vr=Xt.isPrimitive,pr=zt,yr=function(t,r){return ir(r)?(cr(r,"invalid")&&(t.invalid=r.invalid),null):new TypeError("invalid argument. Options argument must be an object. Value: `"+r+"`.")};var br=function t(r,e,n){var o,u,i,c;if(!lr(r))throw new TypeError("invalid argument. First argument must be an iterator protocol-compliant object. Value: `"+r+"`.");if(!fr(e))throw new TypeError("invalid argument. Second argument must be a function. Value: `"+e+"`.");if(o={invalid:NaN},arguments.length>2&&(i=yr(o,n)))throw i;return ar(u={},"next",a),ar(u,"return",f),pr&&fr(r[pr])&&ar(u,pr,l),u;function a(){var t;return c?{done:!0}:(t=r.next()).done?(c=!0,t):{value:vr(t.value)?e(t.value):o.invalid,done:!1}}function f(t){return c=!0,arguments.length?{value:t,done:!0}:{done:!0}}function l(){return t(r[pr](),e,o)}},sr=br;var dr=function(t){return t!=t},mr=Math.sqrt;var jr=dr,_r=mr,gr=.7853981633974483,wr=function(t){var r,e;return 0===t?.16666666666666713:((t<0?-t:t)<=1?(r=t*(19.562619833175948+t*(t*(5.444622390564711+t*(.004253011369004428*t-.6019598008014124))-16.262479672107002))-8.198089802484825,e=t*(139.51056146574857+t*(t*(70.49610280856842+t*(1*t-14.740913729888538))-147.1791292232726))-49.18853881490881):(r=.004253011369004428+(t=1/t)*(t*(5.444622390564711+t*(t*(19.562619833175948+-8.198089802484825*t)-16.262479672107002))-.6019598008014124),e=1+t*(t*(70.49610280856842+t*(t*(139.51056146574857+-49.18853881490881*t)-147.1791292232726))-14.740913729888538)),r/e)},Or=function(t){var r,e;return 0===t?.08333333333333809:((t<0?-t:t)<=1?(r=28.536655482610616+t*(t*(6.968710824104713+t*(.002967721961301243*t-.5634242780008963))-25.56901049652825),e=342.43986579130785+t*(t*(147.0656354026815+t*(1*t-21.947795316429207))-383.8770957603691)):(r=.002967721961301243+(t=1/t)*(t*(6.968710824104713+t*(28.536655482610616*t-25.56901049652825))-.5634242780008963),e=1+t*(t*(147.0656354026815+t*(342.43986579130785*t-383.8770957603691))-21.947795316429207)),r/e)};var hr=function(t){var r,e,n,o,u;if(jr(t))return NaN;if(t>0?n=t:(r=!0,n=-t),n>1)return NaN;if(n>.625)o=(e=1-n)*Or(e),e=_r(e+e),u=gr-e,u-=e=e*o-6123233995736766e-32,u+=gr;else{if(n<1e-8)return t;u=n*(u=(e=n*n)*wr(e))+n}return r?-u:u};var Sr=sr,Pr=function(t){return hr(1-t)};var Er=function(t){return Sr(t,Pr)};return Er}));
//# sourceMappingURL=bundle.js.map
