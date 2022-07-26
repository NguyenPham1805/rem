var rw=Object.defineProperty,sw=Object.defineProperties;var iw=Object.getOwnPropertyDescriptors;var ld=Object.getOwnPropertySymbols;var ow=Object.prototype.hasOwnProperty,aw=Object.prototype.propertyIsEnumerable;var ud=(t,e,n)=>e in t?rw(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n,gc=(t,e)=>{for(var n in e||(e={}))ow.call(e,n)&&ud(t,n,e[n]);if(ld)for(var n of ld(e))aw.call(e,n)&&ud(t,n,e[n]);return t},hd=(t,e)=>sw(t,iw(e));const KL={},cw=function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerpolicy&&(i.referrerPolicy=s.referrerpolicy),s.crossorigin==="use-credentials"?i.credentials="include":s.crossorigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(s){if(s.ep)return;s.ep=!0;const i=n(s);fetch(s.href,i)}};cw();function su(t,e){const n=Object.create(null),r=t.split(",");for(let s=0;s<r.length;s++)n[r[s]]=!0;return e?s=>!!n[s.toLowerCase()]:s=>!!n[s]}const lw="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",uw=su(lw);function Qp(t){return!!t||t===""}function Tr(t){if(Y(t)){const e={};for(let n=0;n<t.length;n++){const r=t[n],s=je(r)?fw(r):Tr(r);if(s)for(const i in s)e[i]=s[i]}return e}else{if(je(t))return t;if($e(t))return t}}const hw=/;(?![^(]*\))/g,dw=/:(.+)/;function fw(t){const e={};return t.split(hw).forEach(n=>{if(n){const r=n.split(dw);r.length>1&&(e[r[0].trim()]=r[1].trim())}}),e}function Xr(t){let e="";if(je(t))e=t;else if(Y(t))for(let n=0;n<t.length;n++){const r=Xr(t[n]);r&&(e+=r+" ")}else if($e(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}const pe=t=>je(t)?t:t==null?"":Y(t)||$e(t)&&(t.toString===Zp||!Z(t.toString))?JSON.stringify(t,Xp,2):String(t),Xp=(t,e)=>e&&e.__v_isRef?Xp(t,e.value):Jr(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((n,[r,s])=>(n[`${r} =>`]=s,n),{})}:Yp(e)?{[`Set(${e.size})`]:[...e.values()]}:$e(e)&&!Y(e)&&!em(e)?String(e):e,we={},Yr=[],$t=()=>{},pw=()=>!1,mw=/^on[^a-z]/,fa=t=>mw.test(t),iu=t=>t.startsWith("onUpdate:"),pt=Object.assign,ou=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},gw=Object.prototype.hasOwnProperty,oe=(t,e)=>gw.call(t,e),Y=Array.isArray,Jr=t=>pa(t)==="[object Map]",Yp=t=>pa(t)==="[object Set]",Z=t=>typeof t=="function",je=t=>typeof t=="string",au=t=>typeof t=="symbol",$e=t=>t!==null&&typeof t=="object",Jp=t=>$e(t)&&Z(t.then)&&Z(t.catch),Zp=Object.prototype.toString,pa=t=>Zp.call(t),yw=t=>pa(t).slice(8,-1),em=t=>pa(t)==="[object Object]",cu=t=>je(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,_o=su(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),ma=t=>{const e=Object.create(null);return n=>e[n]||(e[n]=t(n))},vw=/-(\w)/g,en=ma(t=>t.replace(vw,(e,n)=>n?n.toUpperCase():"")),_w=/\B([A-Z])/g,bs=ma(t=>t.replace(_w,"-$1").toLowerCase()),ga=ma(t=>t.charAt(0).toUpperCase()+t.slice(1)),yc=ma(t=>t?`on${ga(t)}`:""),ui=(t,e)=>!Object.is(t,e),wo=(t,e)=>{for(let n=0;n<t.length;n++)t[n](e)},Lo=(t,e,n)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,value:n})},Zc=t=>{const e=parseFloat(t);return isNaN(e)?t:e};let dd;const ww=()=>dd||(dd=typeof globalThis!="undefined"?globalThis:typeof self!="undefined"?self:typeof window!="undefined"?window:typeof global!="undefined"?global:{});let Kt;class Ew{constructor(e=!1){this.active=!0,this.effects=[],this.cleanups=[],!e&&Kt&&(this.parent=Kt,this.index=(Kt.scopes||(Kt.scopes=[])).push(this)-1)}run(e){if(this.active){const n=Kt;try{return Kt=this,e()}finally{Kt=n}}}on(){Kt=this}off(){Kt=this.parent}stop(e){if(this.active){let n,r;for(n=0,r=this.effects.length;n<r;n++)this.effects[n].stop();for(n=0,r=this.cleanups.length;n<r;n++)this.cleanups[n]();if(this.scopes)for(n=0,r=this.scopes.length;n<r;n++)this.scopes[n].stop(!0);if(this.parent&&!e){const s=this.parent.scopes.pop();s&&s!==this&&(this.parent.scopes[this.index]=s,s.index=this.index)}this.active=!1}}}function bw(t,e=Kt){e&&e.active&&e.effects.push(t)}const lu=t=>{const e=new Set(t);return e.w=0,e.n=0,e},tm=t=>(t.w&Bn)>0,nm=t=>(t.n&Bn)>0,Tw=({deps:t})=>{if(t.length)for(let e=0;e<t.length;e++)t[e].w|=Bn},Iw=t=>{const{deps:e}=t;if(e.length){let n=0;for(let r=0;r<e.length;r++){const s=e[r];tm(s)&&!nm(s)?s.delete(t):e[n++]=s,s.w&=~Bn,s.n&=~Bn}e.length=n}},el=new WeakMap;let Ws=0,Bn=1;const tl=30;let Mt;const ir=Symbol(""),nl=Symbol("");class uu{constructor(e,n=null,r){this.fn=e,this.scheduler=n,this.active=!0,this.deps=[],this.parent=void 0,bw(this,r)}run(){if(!this.active)return this.fn();let e=Mt,n=Dn;for(;e;){if(e===this)return;e=e.parent}try{return this.parent=Mt,Mt=this,Dn=!0,Bn=1<<++Ws,Ws<=tl?Tw(this):fd(this),this.fn()}finally{Ws<=tl&&Iw(this),Bn=1<<--Ws,Mt=this.parent,Dn=n,this.parent=void 0,this.deferStop&&this.stop()}}stop(){Mt===this?this.deferStop=!0:this.active&&(fd(this),this.onStop&&this.onStop(),this.active=!1)}}function fd(t){const{deps:e}=t;if(e.length){for(let n=0;n<e.length;n++)e[n].delete(t);e.length=0}}let Dn=!0;const rm=[];function Ts(){rm.push(Dn),Dn=!1}function Is(){const t=rm.pop();Dn=t===void 0?!0:t}function xt(t,e,n){if(Dn&&Mt){let r=el.get(t);r||el.set(t,r=new Map);let s=r.get(n);s||r.set(n,s=lu()),sm(s)}}function sm(t,e){let n=!1;Ws<=tl?nm(t)||(t.n|=Bn,n=!tm(t)):n=!t.has(Mt),n&&(t.add(Mt),Mt.deps.push(t))}function vn(t,e,n,r,s,i){const o=el.get(t);if(!o)return;let a=[];if(e==="clear")a=[...o.values()];else if(n==="length"&&Y(t))o.forEach((c,l)=>{(l==="length"||l>=r)&&a.push(c)});else switch(n!==void 0&&a.push(o.get(n)),e){case"add":Y(t)?cu(n)&&a.push(o.get("length")):(a.push(o.get(ir)),Jr(t)&&a.push(o.get(nl)));break;case"delete":Y(t)||(a.push(o.get(ir)),Jr(t)&&a.push(o.get(nl)));break;case"set":Jr(t)&&a.push(o.get(ir));break}if(a.length===1)a[0]&&rl(a[0]);else{const c=[];for(const l of a)l&&c.push(...l);rl(lu(c))}}function rl(t,e){for(const n of Y(t)?t:[...t])(n!==Mt||n.allowRecurse)&&(n.scheduler?n.scheduler():n.run())}const Aw=su("__proto__,__v_isRef,__isVue"),im=new Set(Object.getOwnPropertyNames(Symbol).map(t=>Symbol[t]).filter(au)),Sw=hu(),Cw=hu(!1,!0),kw=hu(!0),pd=xw();function xw(){const t={};return["includes","indexOf","lastIndexOf"].forEach(e=>{t[e]=function(...n){const r=fe(this);for(let i=0,o=this.length;i<o;i++)xt(r,"get",i+"");const s=r[e](...n);return s===-1||s===!1?r[e](...n.map(fe)):s}}),["push","pop","shift","unshift","splice"].forEach(e=>{t[e]=function(...n){Ts();const r=fe(this)[e].apply(this,n);return Is(),r}}),t}function hu(t=!1,e=!1){return function(r,s,i){if(s==="__v_isReactive")return!t;if(s==="__v_isReadonly")return t;if(s==="__v_isShallow")return e;if(s==="__v_raw"&&i===(t?e?zw:um:e?lm:cm).get(r))return r;const o=Y(r);if(!t&&o&&oe(pd,s))return Reflect.get(pd,s,i);const a=Reflect.get(r,s,i);return(au(s)?im.has(s):Aw(s))||(t||xt(r,"get",s),e)?a:Qe(a)?!o||!cu(s)?a.value:a:$e(a)?t?hm(a):tn(a):a}}const Rw=om(),Ow=om(!0);function om(t=!1){return function(n,r,s,i){let o=n[r];if(hi(o)&&Qe(o)&&!Qe(s))return!1;if(!t&&!hi(s)&&(dm(s)||(s=fe(s),o=fe(o)),!Y(n)&&Qe(o)&&!Qe(s)))return o.value=s,!0;const a=Y(n)&&cu(r)?Number(r)<n.length:oe(n,r),c=Reflect.set(n,r,s,i);return n===fe(i)&&(a?ui(s,o)&&vn(n,"set",r,s):vn(n,"add",r,s)),c}}function Nw(t,e){const n=oe(t,e);t[e];const r=Reflect.deleteProperty(t,e);return r&&n&&vn(t,"delete",e,void 0),r}function Dw(t,e){const n=Reflect.has(t,e);return(!au(e)||!im.has(e))&&xt(t,"has",e),n}function Pw(t){return xt(t,"iterate",Y(t)?"length":ir),Reflect.ownKeys(t)}const am={get:Sw,set:Rw,deleteProperty:Nw,has:Dw,ownKeys:Pw},Lw={get:kw,set(t,e){return!0},deleteProperty(t,e){return!0}},Mw=pt({},am,{get:Cw,set:Ow}),du=t=>t,ya=t=>Reflect.getPrototypeOf(t);function so(t,e,n=!1,r=!1){t=t.__v_raw;const s=fe(t),i=fe(e);e!==i&&!n&&xt(s,"get",e),!n&&xt(s,"get",i);const{has:o}=ya(s),a=r?du:n?mu:di;if(o.call(s,e))return a(t.get(e));if(o.call(s,i))return a(t.get(i));t!==s&&t.get(e)}function io(t,e=!1){const n=this.__v_raw,r=fe(n),s=fe(t);return t!==s&&!e&&xt(r,"has",t),!e&&xt(r,"has",s),t===s?n.has(t):n.has(t)||n.has(s)}function oo(t,e=!1){return t=t.__v_raw,!e&&xt(fe(t),"iterate",ir),Reflect.get(t,"size",t)}function md(t){t=fe(t);const e=fe(this);return ya(e).has.call(e,t)||(e.add(t),vn(e,"add",t,t)),this}function gd(t,e){e=fe(e);const n=fe(this),{has:r,get:s}=ya(n);let i=r.call(n,t);i||(t=fe(t),i=r.call(n,t));const o=s.call(n,t);return n.set(t,e),i?ui(e,o)&&vn(n,"set",t,e):vn(n,"add",t,e),this}function yd(t){const e=fe(this),{has:n,get:r}=ya(e);let s=n.call(e,t);s||(t=fe(t),s=n.call(e,t)),r&&r.call(e,t);const i=e.delete(t);return s&&vn(e,"delete",t,void 0),i}function vd(){const t=fe(this),e=t.size!==0,n=t.clear();return e&&vn(t,"clear",void 0,void 0),n}function ao(t,e){return function(r,s){const i=this,o=i.__v_raw,a=fe(o),c=e?du:t?mu:di;return!t&&xt(a,"iterate",ir),o.forEach((l,u)=>r.call(s,c(l),c(u),i))}}function co(t,e,n){return function(...r){const s=this.__v_raw,i=fe(s),o=Jr(i),a=t==="entries"||t===Symbol.iterator&&o,c=t==="keys"&&o,l=s[t](...r),u=n?du:e?mu:di;return!e&&xt(i,"iterate",c?nl:ir),{next(){const{value:h,done:d}=l.next();return d?{value:h,done:d}:{value:a?[u(h[0]),u(h[1])]:u(h),done:d}},[Symbol.iterator](){return this}}}}function bn(t){return function(...e){return t==="delete"?!1:this}}function Uw(){const t={get(i){return so(this,i)},get size(){return oo(this)},has:io,add:md,set:gd,delete:yd,clear:vd,forEach:ao(!1,!1)},e={get(i){return so(this,i,!1,!0)},get size(){return oo(this)},has:io,add:md,set:gd,delete:yd,clear:vd,forEach:ao(!1,!0)},n={get(i){return so(this,i,!0)},get size(){return oo(this,!0)},has(i){return io.call(this,i,!0)},add:bn("add"),set:bn("set"),delete:bn("delete"),clear:bn("clear"),forEach:ao(!0,!1)},r={get(i){return so(this,i,!0,!0)},get size(){return oo(this,!0)},has(i){return io.call(this,i,!0)},add:bn("add"),set:bn("set"),delete:bn("delete"),clear:bn("clear"),forEach:ao(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(i=>{t[i]=co(i,!1,!1),n[i]=co(i,!0,!1),e[i]=co(i,!1,!0),r[i]=co(i,!0,!0)}),[t,n,e,r]}const[$w,Fw,Bw,Vw]=Uw();function fu(t,e){const n=e?t?Vw:Bw:t?Fw:$w;return(r,s,i)=>s==="__v_isReactive"?!t:s==="__v_isReadonly"?t:s==="__v_raw"?r:Reflect.get(oe(n,s)&&s in r?n:r,s,i)}const jw={get:fu(!1,!1)},qw={get:fu(!1,!0)},Hw={get:fu(!0,!1)},cm=new WeakMap,lm=new WeakMap,um=new WeakMap,zw=new WeakMap;function Kw(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function Gw(t){return t.__v_skip||!Object.isExtensible(t)?0:Kw(yw(t))}function tn(t){return hi(t)?t:pu(t,!1,am,jw,cm)}function Ww(t){return pu(t,!1,Mw,qw,lm)}function hm(t){return pu(t,!0,Lw,Hw,um)}function pu(t,e,n,r,s){if(!$e(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;const i=s.get(t);if(i)return i;const o=Gw(t);if(o===0)return t;const a=new Proxy(t,o===2?r:n);return s.set(t,a),a}function Zr(t){return hi(t)?Zr(t.__v_raw):!!(t&&t.__v_isReactive)}function hi(t){return!!(t&&t.__v_isReadonly)}function dm(t){return!!(t&&t.__v_isShallow)}function fm(t){return Zr(t)||hi(t)}function fe(t){const e=t&&t.__v_raw;return e?fe(e):t}function pm(t){return Lo(t,"__v_skip",!0),t}const di=t=>$e(t)?tn(t):t,mu=t=>$e(t)?hm(t):t;function mm(t){Dn&&Mt&&(t=fe(t),sm(t.dep||(t.dep=lu())))}function gm(t,e){t=fe(t),t.dep&&rl(t.dep)}function Qe(t){return!!(t&&t.__v_isRef===!0)}function le(t){return ym(t,!1)}function Qw(t){return ym(t,!0)}function ym(t,e){return Qe(t)?t:new Xw(t,e)}class Xw{constructor(e,n){this.__v_isShallow=n,this.dep=void 0,this.__v_isRef=!0,this._rawValue=n?e:fe(e),this._value=n?e:di(e)}get value(){return mm(this),this._value}set value(e){e=this.__v_isShallow?e:fe(e),ui(e,this._rawValue)&&(this._rawValue=e,this._value=this.__v_isShallow?e:di(e),gm(this))}}function Ae(t){return Qe(t)?t.value:t}const Yw={get:(t,e,n)=>Ae(Reflect.get(t,e,n)),set:(t,e,n,r)=>{const s=t[e];return Qe(s)&&!Qe(n)?(s.value=n,!0):Reflect.set(t,e,n,r)}};function vm(t){return Zr(t)?t:new Proxy(t,Yw)}class Jw{constructor(e,n,r,s){this._setter=n,this.dep=void 0,this.__v_isRef=!0,this._dirty=!0,this.effect=new uu(e,()=>{this._dirty||(this._dirty=!0,gm(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!s,this.__v_isReadonly=r}get value(){const e=fe(this);return mm(e),(e._dirty||!e._cacheable)&&(e._dirty=!1,e._value=e.effect.run()),e._value}set value(e){this._setter(e)}}function _m(t,e,n=!1){let r,s;const i=Z(t);return i?(r=t,s=$t):(r=t.get,s=t.set),new Jw(r,s,i||!s,n)}function Pn(t,e,n,r){let s;try{s=r?t(...r):t()}catch(i){va(i,e,n)}return s}function Ft(t,e,n,r){if(Z(t)){const i=Pn(t,e,n,r);return i&&Jp(i)&&i.catch(o=>{va(o,e,n)}),i}const s=[];for(let i=0;i<t.length;i++)s.push(Ft(t[i],e,n,r));return s}function va(t,e,n,r=!0){const s=e?e.vnode:null;if(e){let i=e.parent;const o=e.proxy,a=n;for(;i;){const l=i.ec;if(l){for(let u=0;u<l.length;u++)if(l[u](t,o,a)===!1)return}i=i.parent}const c=e.appContext.config.errorHandler;if(c){Pn(c,null,10,[t,o,a]);return}}Zw(t,n,s,r)}function Zw(t,e,n,r=!0){console.error(t)}let Mo=!1,sl=!1;const At=[];let ln=0;const Zs=[];let Qs=null,jr=0;const ei=[];let Sn=null,qr=0;const wm=Promise.resolve();let gu=null,il=null;function Gr(t){const e=gu||wm;return t?e.then(this?t.bind(this):t):e}function eE(t){let e=ln+1,n=At.length;for(;e<n;){const r=e+n>>>1;fi(At[r])<t?e=r+1:n=r}return e}function Em(t){(!At.length||!At.includes(t,Mo&&t.allowRecurse?ln+1:ln))&&t!==il&&(t.id==null?At.push(t):At.splice(eE(t.id),0,t),bm())}function bm(){!Mo&&!sl&&(sl=!0,gu=wm.then(Am))}function tE(t){const e=At.indexOf(t);e>ln&&At.splice(e,1)}function Tm(t,e,n,r){Y(t)?n.push(...t):(!e||!e.includes(t,t.allowRecurse?r+1:r))&&n.push(t),bm()}function nE(t){Tm(t,Qs,Zs,jr)}function rE(t){Tm(t,Sn,ei,qr)}function yu(t,e=null){if(Zs.length){for(il=e,Qs=[...new Set(Zs)],Zs.length=0,jr=0;jr<Qs.length;jr++)Qs[jr]();Qs=null,jr=0,il=null,yu(t,e)}}function Im(t){if(ei.length){const e=[...new Set(ei)];if(ei.length=0,Sn){Sn.push(...e);return}for(Sn=e,Sn.sort((n,r)=>fi(n)-fi(r)),qr=0;qr<Sn.length;qr++)Sn[qr]();Sn=null,qr=0}}const fi=t=>t.id==null?1/0:t.id;function Am(t){sl=!1,Mo=!0,yu(t),At.sort((n,r)=>fi(n)-fi(r));const e=$t;try{for(ln=0;ln<At.length;ln++){const n=At[ln];n&&n.active!==!1&&Pn(n,null,14)}}finally{ln=0,At.length=0,Im(),Mo=!1,gu=null,(At.length||Zs.length||ei.length)&&Am(t)}}function sE(t,e,...n){if(t.isUnmounted)return;const r=t.vnode.props||we;let s=n;const i=e.startsWith("update:"),o=i&&e.slice(7);if(o&&o in r){const u=`${o==="modelValue"?"model":o}Modifiers`,{number:h,trim:d}=r[u]||we;d?s=n.map(f=>f.trim()):h&&(s=n.map(Zc))}let a,c=r[a=yc(e)]||r[a=yc(en(e))];!c&&i&&(c=r[a=yc(bs(e))]),c&&Ft(c,t,6,s);const l=r[a+"Once"];if(l){if(!t.emitted)t.emitted={};else if(t.emitted[a])return;t.emitted[a]=!0,Ft(l,t,6,s)}}function Sm(t,e,n=!1){const r=e.emitsCache,s=r.get(t);if(s!==void 0)return s;const i=t.emits;let o={},a=!1;if(!Z(t)){const c=l=>{const u=Sm(l,e,!0);u&&(a=!0,pt(o,u))};!n&&e.mixins.length&&e.mixins.forEach(c),t.extends&&c(t.extends),t.mixins&&t.mixins.forEach(c)}return!i&&!a?(r.set(t,null),null):(Y(i)?i.forEach(c=>o[c]=null):pt(o,i),r.set(t,o),o)}function _a(t,e){return!t||!fa(e)?!1:(e=e.slice(2).replace(/Once$/,""),oe(t,e[0].toLowerCase()+e.slice(1))||oe(t,bs(e))||oe(t,e))}let Ut=null,wa=null;function Uo(t){const e=Ut;return Ut=t,wa=t&&t.type.__scopeId||null,e}function WL(t){wa=t}function QL(){wa=null}function ht(t,e=Ut,n){if(!e||t._n)return t;const r=(...s)=>{r._d&&kd(-1);const i=Uo(e),o=t(...s);return Uo(i),r._d&&kd(1),o};return r._n=!0,r._c=!0,r._d=!0,r}function vc(t){const{type:e,vnode:n,proxy:r,withProxy:s,props:i,propsOptions:[o],slots:a,attrs:c,emit:l,render:u,renderCache:h,data:d,setupState:f,ctx:m,inheritAttrs:E}=t;let _,y;const C=Uo(t);try{if(n.shapeFlag&4){const F=s||r;_=Gt(u.call(F,F,h,i,f,d,m)),y=c}else{const F=e;_=Gt(F.length>1?F(i,{attrs:c,slots:a,emit:l}):F(i,null)),y=e.props?c:iE(c)}}catch(F){ti.length=0,va(F,t,1),_=te(hr)}let L=_;if(y&&E!==!1){const F=Object.keys(y),{shapeFlag:re}=L;F.length&&re&7&&(o&&F.some(iu)&&(y=oE(y,o)),L=pi(L,y))}return n.dirs&&(L.dirs=L.dirs?L.dirs.concat(n.dirs):n.dirs),n.transition&&(L.transition=n.transition),_=L,Uo(C),_}const iE=t=>{let e;for(const n in t)(n==="class"||n==="style"||fa(n))&&((e||(e={}))[n]=t[n]);return e},oE=(t,e)=>{const n={};for(const r in t)(!iu(r)||!(r.slice(9)in e))&&(n[r]=t[r]);return n};function aE(t,e,n){const{props:r,children:s,component:i}=t,{props:o,children:a,patchFlag:c}=e,l=i.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&c>=0){if(c&1024)return!0;if(c&16)return r?_d(r,o,l):!!o;if(c&8){const u=e.dynamicProps;for(let h=0;h<u.length;h++){const d=u[h];if(o[d]!==r[d]&&!_a(l,d))return!0}}}else return(s||a)&&(!a||!a.$stable)?!0:r===o?!1:r?o?_d(r,o,l):!0:!!o;return!1}function _d(t,e,n){const r=Object.keys(e);if(r.length!==Object.keys(t).length)return!0;for(let s=0;s<r.length;s++){const i=r[s];if(e[i]!==t[i]&&!_a(n,i))return!0}return!1}function cE({vnode:t,parent:e},n){for(;e&&e.subTree===t;)(t=e.vnode).el=n,e=e.parent}const lE=t=>t.__isSuspense;function uE(t,e){e&&e.pendingBranch?Y(t)?e.effects.push(...t):e.effects.push(t):rE(t)}function Eo(t,e){if(We){let n=We.provides;const r=We.parent&&We.parent.provides;r===n&&(n=We.provides=Object.create(r)),n[t]=e}}function Bt(t,e,n=!1){const r=We||Ut;if(r){const s=r.parent==null?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides;if(s&&t in s)return s[t];if(arguments.length>1)return n&&Z(e)?e.call(r.proxy):e}}const wd={};function Xt(t,e,n){return Cm(t,e,n)}function Cm(t,e,{immediate:n,deep:r,flush:s,onTrack:i,onTrigger:o}=we){const a=We;let c,l=!1,u=!1;if(Qe(t)?(c=()=>t.value,l=dm(t)):Zr(t)?(c=()=>t,r=!0):Y(t)?(u=!0,l=t.some(Zr),c=()=>t.map(y=>{if(Qe(y))return y.value;if(Zr(y))return tr(y);if(Z(y))return Pn(y,a,2)})):Z(t)?e?c=()=>Pn(t,a,2):c=()=>{if(!(a&&a.isUnmounted))return h&&h(),Ft(t,a,3,[d])}:c=$t,e&&r){const y=c;c=()=>tr(y())}let h,d=y=>{h=_.onStop=()=>{Pn(y,a,4)}};if(mi)return d=$t,e?n&&Ft(e,a,3,[c(),u?[]:void 0,d]):c(),$t;let f=u?[]:wd;const m=()=>{if(!!_.active)if(e){const y=_.run();(r||l||(u?y.some((C,L)=>ui(C,f[L])):ui(y,f)))&&(h&&h(),Ft(e,a,3,[y,f===wd?void 0:f,d]),f=y)}else _.run()};m.allowRecurse=!!e;let E;s==="sync"?E=m:s==="post"?E=()=>mt(m,a&&a.suspense):E=()=>{!a||a.isMounted?nE(m):m()};const _=new uu(c,E);return e?n?m():f=_.run():s==="post"?mt(_.run.bind(_),a&&a.suspense):_.run(),()=>{_.stop(),a&&a.scope&&ou(a.scope.effects,_)}}function hE(t,e,n){const r=this.proxy,s=je(t)?t.includes(".")?km(r,t):()=>r[t]:t.bind(r,r);let i;Z(e)?i=e:(i=e.handler,n=e);const o=We;os(this);const a=Cm(s,i.bind(r),n);return o?os(o):ar(),a}function km(t,e){const n=e.split(".");return()=>{let r=t;for(let s=0;s<n.length&&r;s++)r=r[n[s]];return r}}function tr(t,e){if(!$e(t)||t.__v_skip||(e=e||new Set,e.has(t)))return t;if(e.add(t),Qe(t))tr(t.value,e);else if(Y(t))for(let n=0;n<t.length;n++)tr(t[n],e);else if(Yp(t)||Jr(t))t.forEach(n=>{tr(n,e)});else if(em(t))for(const n in t)tr(t[n],e);return t}function et(t){return Z(t)?{setup:t,name:t.name}:t}const ol=t=>!!t.type.__asyncLoader,xm=t=>t.type.__isKeepAlive;function dE(t,e){Rm(t,"a",e)}function fE(t,e){Rm(t,"da",e)}function Rm(t,e,n=We){const r=t.__wdc||(t.__wdc=()=>{let s=n;for(;s;){if(s.isDeactivated)return;s=s.parent}return t()});if(Ea(e,r,n),n){let s=n.parent;for(;s&&s.parent;)xm(s.parent.vnode)&&pE(r,e,n,s),s=s.parent}}function pE(t,e,n,r){const s=Ea(e,t,r,!0);Di(()=>{ou(r[e],s)},n)}function Ea(t,e,n=We,r=!1){if(n){const s=n[t]||(n[t]=[]),i=e.__weh||(e.__weh=(...o)=>{if(n.isUnmounted)return;Ts(),os(n);const a=Ft(e,n,t,o);return ar(),Is(),a});return r?s.unshift(i):s.push(i),i}}const En=t=>(e,n=We)=>(!mi||t==="sp")&&Ea(t,e,n),mE=En("bm"),As=En("m"),gE=En("bu"),yE=En("u"),Om=En("bum"),Di=En("um"),vE=En("sp"),_E=En("rtg"),wE=En("rtc");function EE(t,e=We){Ea("ec",t,e)}let al=!0;function bE(t){const e=Dm(t),n=t.proxy,r=t.ctx;al=!1,e.beforeCreate&&Ed(e.beforeCreate,t,"bc");const{data:s,computed:i,methods:o,watch:a,provide:c,inject:l,created:u,beforeMount:h,mounted:d,beforeUpdate:f,updated:m,activated:E,deactivated:_,beforeDestroy:y,beforeUnmount:C,destroyed:L,unmounted:F,render:re,renderTracked:ce,renderTriggered:Ne,errorCaptured:Ke,serverPrefetch:Fe,expose:jt,inheritAttrs:sn,components:on,directives:Rr,filters:Or}=e;if(l&&TE(l,r,null,t.appContext.config.unwrapInjectedRef),o)for(const Ee in o){const ge=o[Ee];Z(ge)&&(r[Ee]=ge.bind(n))}if(s){const Ee=s.call(n,n);$e(Ee)&&(t.data=tn(Ee))}if(al=!0,i)for(const Ee in i){const ge=i[Ee],bt=Z(ge)?ge.bind(n,n):Z(ge.get)?ge.get.bind(n,n):$t,Dr=!Z(ge)&&Z(ge.set)?ge.set.bind(n):$t,an=vt({get:bt,set:Dr});Object.defineProperty(r,Ee,{enumerable:!0,configurable:!0,get:()=>an.value,set:qt=>an.value=qt})}if(a)for(const Ee in a)Nm(a[Ee],r,n,Ee);if(c){const Ee=Z(c)?c.call(n):c;Reflect.ownKeys(Ee).forEach(ge=>{Eo(ge,Ee[ge])})}u&&Ed(u,t,"c");function Ue(Ee,ge){Y(ge)?ge.forEach(bt=>Ee(bt.bind(n))):ge&&Ee(ge.bind(n))}if(Ue(mE,h),Ue(As,d),Ue(gE,f),Ue(yE,m),Ue(dE,E),Ue(fE,_),Ue(EE,Ke),Ue(wE,ce),Ue(_E,Ne),Ue(Om,C),Ue(Di,F),Ue(vE,Fe),Y(jt))if(jt.length){const Ee=t.exposed||(t.exposed={});jt.forEach(ge=>{Object.defineProperty(Ee,ge,{get:()=>n[ge],set:bt=>n[ge]=bt})})}else t.exposed||(t.exposed={});re&&t.render===$t&&(t.render=re),sn!=null&&(t.inheritAttrs=sn),on&&(t.components=on),Rr&&(t.directives=Rr)}function TE(t,e,n=$t,r=!1){Y(t)&&(t=cl(t));for(const s in t){const i=t[s];let o;$e(i)?"default"in i?o=Bt(i.from||s,i.default,!0):o=Bt(i.from||s):o=Bt(i),Qe(o)&&r?Object.defineProperty(e,s,{enumerable:!0,configurable:!0,get:()=>o.value,set:a=>o.value=a}):e[s]=o}}function Ed(t,e,n){Ft(Y(t)?t.map(r=>r.bind(e.proxy)):t.bind(e.proxy),e,n)}function Nm(t,e,n,r){const s=r.includes(".")?km(n,r):()=>n[r];if(je(t)){const i=e[t];Z(i)&&Xt(s,i)}else if(Z(t))Xt(s,t.bind(n));else if($e(t))if(Y(t))t.forEach(i=>Nm(i,e,n,r));else{const i=Z(t.handler)?t.handler.bind(n):e[t.handler];Z(i)&&Xt(s,i,t)}}function Dm(t){const e=t.type,{mixins:n,extends:r}=e,{mixins:s,optionsCache:i,config:{optionMergeStrategies:o}}=t.appContext,a=i.get(e);let c;return a?c=a:!s.length&&!n&&!r?c=e:(c={},s.length&&s.forEach(l=>$o(c,l,o,!0)),$o(c,e,o)),i.set(e,c),c}function $o(t,e,n,r=!1){const{mixins:s,extends:i}=e;i&&$o(t,i,n,!0),s&&s.forEach(o=>$o(t,o,n,!0));for(const o in e)if(!(r&&o==="expose")){const a=IE[o]||n&&n[o];t[o]=a?a(t[o],e[o]):e[o]}return t}const IE={data:bd,props:Jn,emits:Jn,methods:Jn,computed:Jn,beforeCreate:ct,created:ct,beforeMount:ct,mounted:ct,beforeUpdate:ct,updated:ct,beforeDestroy:ct,beforeUnmount:ct,destroyed:ct,unmounted:ct,activated:ct,deactivated:ct,errorCaptured:ct,serverPrefetch:ct,components:Jn,directives:Jn,watch:SE,provide:bd,inject:AE};function bd(t,e){return e?t?function(){return pt(Z(t)?t.call(this,this):t,Z(e)?e.call(this,this):e)}:e:t}function AE(t,e){return Jn(cl(t),cl(e))}function cl(t){if(Y(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function ct(t,e){return t?[...new Set([].concat(t,e))]:e}function Jn(t,e){return t?pt(pt(Object.create(null),t),e):e}function SE(t,e){if(!t)return e;if(!e)return t;const n=pt(Object.create(null),t);for(const r in e)n[r]=ct(t[r],e[r]);return n}function CE(t,e,n,r=!1){const s={},i={};Lo(i,ba,1),t.propsDefaults=Object.create(null),Pm(t,e,s,i);for(const o in t.propsOptions[0])o in s||(s[o]=void 0);n?t.props=r?s:Ww(s):t.type.props?t.props=s:t.props=i,t.attrs=i}function kE(t,e,n,r){const{props:s,attrs:i,vnode:{patchFlag:o}}=t,a=fe(s),[c]=t.propsOptions;let l=!1;if((r||o>0)&&!(o&16)){if(o&8){const u=t.vnode.dynamicProps;for(let h=0;h<u.length;h++){let d=u[h];if(_a(t.emitsOptions,d))continue;const f=e[d];if(c)if(oe(i,d))f!==i[d]&&(i[d]=f,l=!0);else{const m=en(d);s[m]=ll(c,a,m,f,t,!1)}else f!==i[d]&&(i[d]=f,l=!0)}}}else{Pm(t,e,s,i)&&(l=!0);let u;for(const h in a)(!e||!oe(e,h)&&((u=bs(h))===h||!oe(e,u)))&&(c?n&&(n[h]!==void 0||n[u]!==void 0)&&(s[h]=ll(c,a,h,void 0,t,!0)):delete s[h]);if(i!==a)for(const h in i)(!e||!oe(e,h)&&!0)&&(delete i[h],l=!0)}l&&vn(t,"set","$attrs")}function Pm(t,e,n,r){const[s,i]=t.propsOptions;let o=!1,a;if(e)for(let c in e){if(_o(c))continue;const l=e[c];let u;s&&oe(s,u=en(c))?!i||!i.includes(u)?n[u]=l:(a||(a={}))[u]=l:_a(t.emitsOptions,c)||(!(c in r)||l!==r[c])&&(r[c]=l,o=!0)}if(i){const c=fe(n),l=a||we;for(let u=0;u<i.length;u++){const h=i[u];n[h]=ll(s,c,h,l[h],t,!oe(l,h))}}return o}function ll(t,e,n,r,s,i){const o=t[n];if(o!=null){const a=oe(o,"default");if(a&&r===void 0){const c=o.default;if(o.type!==Function&&Z(c)){const{propsDefaults:l}=s;n in l?r=l[n]:(os(s),r=l[n]=c.call(null,e),ar())}else r=c}o[0]&&(i&&!a?r=!1:o[1]&&(r===""||r===bs(n))&&(r=!0))}return r}function Lm(t,e,n=!1){const r=e.propsCache,s=r.get(t);if(s)return s;const i=t.props,o={},a=[];let c=!1;if(!Z(t)){const u=h=>{c=!0;const[d,f]=Lm(h,e,!0);pt(o,d),f&&a.push(...f)};!n&&e.mixins.length&&e.mixins.forEach(u),t.extends&&u(t.extends),t.mixins&&t.mixins.forEach(u)}if(!i&&!c)return r.set(t,Yr),Yr;if(Y(i))for(let u=0;u<i.length;u++){const h=en(i[u]);Td(h)&&(o[h]=we)}else if(i)for(const u in i){const h=en(u);if(Td(h)){const d=i[u],f=o[h]=Y(d)||Z(d)?{type:d}:d;if(f){const m=Sd(Boolean,f.type),E=Sd(String,f.type);f[0]=m>-1,f[1]=E<0||m<E,(m>-1||oe(f,"default"))&&a.push(h)}}}const l=[o,a];return r.set(t,l),l}function Td(t){return t[0]!=="$"}function Id(t){const e=t&&t.toString().match(/^\s*function (\w+)/);return e?e[1]:t===null?"null":""}function Ad(t,e){return Id(t)===Id(e)}function Sd(t,e){return Y(e)?e.findIndex(n=>Ad(n,t)):Z(e)&&Ad(e,t)?0:-1}const Mm=t=>t[0]==="_"||t==="$stable",vu=t=>Y(t)?t.map(Gt):[Gt(t)],xE=(t,e,n)=>{const r=ht((...s)=>vu(e(...s)),n);return r._c=!1,r},Um=(t,e,n)=>{const r=t._ctx;for(const s in t){if(Mm(s))continue;const i=t[s];if(Z(i))e[s]=xE(s,i,r);else if(i!=null){const o=vu(i);e[s]=()=>o}}},$m=(t,e)=>{const n=vu(e);t.slots.default=()=>n},RE=(t,e)=>{if(t.vnode.shapeFlag&32){const n=e._;n?(t.slots=fe(e),Lo(e,"_",n)):Um(e,t.slots={})}else t.slots={},e&&$m(t,e);Lo(t.slots,ba,1)},OE=(t,e,n)=>{const{vnode:r,slots:s}=t;let i=!0,o=we;if(r.shapeFlag&32){const a=e._;a?n&&a===1?i=!1:(pt(s,e),!n&&a===1&&delete s._):(i=!e.$stable,Um(e,s)),o=e}else e&&($m(t,e),o={default:1});if(i)for(const a in s)!Mm(a)&&!(a in o)&&delete s[a]};function Nt(t,e){const n=Ut;if(n===null)return t;const r=Ta(n)||n.proxy,s=t.dirs||(t.dirs=[]);for(let i=0;i<e.length;i++){let[o,a,c,l=we]=e[i];Z(o)&&(o={mounted:o,updated:o}),o.deep&&tr(a),s.push({dir:o,instance:r,value:a,oldValue:void 0,arg:c,modifiers:l})}return t}function Xn(t,e,n,r){const s=t.dirs,i=e&&e.dirs;for(let o=0;o<s.length;o++){const a=s[o];i&&(a.oldValue=i[o].value);let c=a.dir[r];c&&(Ts(),Ft(c,n,8,[t.el,a,t,e]),Is())}}function Fm(){return{app:null,config:{isNativeTag:pw,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let NE=0;function DE(t,e){return function(r,s=null){Z(r)||(r=Object.assign({},r)),s!=null&&!$e(s)&&(s=null);const i=Fm(),o=new Set;let a=!1;const c=i.app={_uid:NE++,_component:r,_props:s,_container:null,_context:i,_instance:null,version:eb,get config(){return i.config},set config(l){},use(l,...u){return o.has(l)||(l&&Z(l.install)?(o.add(l),l.install(c,...u)):Z(l)&&(o.add(l),l(c,...u))),c},mixin(l){return i.mixins.includes(l)||i.mixins.push(l),c},component(l,u){return u?(i.components[l]=u,c):i.components[l]},directive(l,u){return u?(i.directives[l]=u,c):i.directives[l]},mount(l,u,h){if(!a){const d=te(r,s);return d.appContext=i,u&&e?e(d,l):t(d,l,h),a=!0,c._container=l,l.__vue_app__=c,Ta(d.component)||d.component.proxy}},unmount(){a&&(t(null,c._container),delete c._container.__vue_app__)},provide(l,u){return i.provides[l]=u,c}};return c}}function ul(t,e,n,r,s=!1){if(Y(t)){t.forEach((d,f)=>ul(d,e&&(Y(e)?e[f]:e),n,r,s));return}if(ol(r)&&!s)return;const i=r.shapeFlag&4?Ta(r.component)||r.component.proxy:r.el,o=s?null:i,{i:a,r:c}=t,l=e&&e.r,u=a.refs===we?a.refs={}:a.refs,h=a.setupState;if(l!=null&&l!==c&&(je(l)?(u[l]=null,oe(h,l)&&(h[l]=null)):Qe(l)&&(l.value=null)),Z(c))Pn(c,a,12,[o,u]);else{const d=je(c),f=Qe(c);if(d||f){const m=()=>{if(t.f){const E=d?u[c]:c.value;s?Y(E)&&ou(E,i):Y(E)?E.includes(i)||E.push(i):d?(u[c]=[i],oe(h,c)&&(h[c]=u[c])):(c.value=[i],t.k&&(u[t.k]=c.value))}else d?(u[c]=o,oe(h,c)&&(h[c]=o)):Qe(c)&&(c.value=o,t.k&&(u[t.k]=o))};o?(m.id=-1,mt(m,n)):m()}}}const mt=uE;function PE(t){return LE(t)}function LE(t,e){const n=ww();n.__VUE__=!0;const{insert:r,remove:s,patchProp:i,createElement:o,createText:a,createComment:c,setText:l,setElementText:u,parentNode:h,nextSibling:d,setScopeId:f=$t,cloneNode:m,insertStaticContent:E}=t,_=(p,g,w,A=null,I=null,R=null,P=!1,k=null,O=!!g.dynamicChildren)=>{if(p===g)return;p&&!Bs(p,g)&&(A=q(p),Ot(p,I,R,!0),p=null),g.patchFlag===-2&&(O=!1,g.dynamicChildren=null);const{type:S,ref:z,shapeFlag:B}=g;switch(S){case _u:y(p,g,w,A);break;case hr:C(p,g,w,A);break;case bo:p==null&&L(g,w,A,P);break;case de:Rr(p,g,w,A,I,R,P,k,O);break;default:B&1?ce(p,g,w,A,I,R,P,k,O):B&6?Or(p,g,w,A,I,R,P,k,O):(B&64||B&128)&&S.process(p,g,w,A,I,R,P,k,O,be)}z!=null&&I&&ul(z,p&&p.ref,R,g||p,!g)},y=(p,g,w,A)=>{if(p==null)r(g.el=a(g.children),w,A);else{const I=g.el=p.el;g.children!==p.children&&l(I,g.children)}},C=(p,g,w,A)=>{p==null?r(g.el=c(g.children||""),w,A):g.el=p.el},L=(p,g,w,A)=>{[p.el,p.anchor]=E(p.children,g,w,A,p.el,p.anchor)},F=({el:p,anchor:g},w,A)=>{let I;for(;p&&p!==g;)I=d(p),r(p,w,A),p=I;r(g,w,A)},re=({el:p,anchor:g})=>{let w;for(;p&&p!==g;)w=d(p),s(p),p=w;s(g)},ce=(p,g,w,A,I,R,P,k,O)=>{P=P||g.type==="svg",p==null?Ne(g,w,A,I,R,P,k,O):jt(p,g,I,R,P,k,O)},Ne=(p,g,w,A,I,R,P,k)=>{let O,S;const{type:z,props:B,shapeFlag:K,transition:W,patchFlag:ae,dirs:ke}=p;if(p.el&&m!==void 0&&ae===-1)O=p.el=m(p.el);else{if(O=p.el=o(p.type,R,B&&B.is,B),K&8?u(O,p.children):K&16&&Fe(p.children,O,null,A,I,R&&z!=="foreignObject",P,k),ke&&Xn(p,null,A,"created"),B){for(const Ie in B)Ie!=="value"&&!_o(Ie)&&i(O,Ie,null,B[Ie],R,p.children,A,I,N);"value"in B&&i(O,"value",null,B.value),(S=B.onVnodeBeforeMount)&&zt(S,A,p)}Ke(O,p,p.scopeId,P,A)}ke&&Xn(p,null,A,"beforeMount");const ve=(!I||I&&!I.pendingBranch)&&W&&!W.persisted;ve&&W.beforeEnter(O),r(O,g,w),((S=B&&B.onVnodeMounted)||ve||ke)&&mt(()=>{S&&zt(S,A,p),ve&&W.enter(O),ke&&Xn(p,null,A,"mounted")},I)},Ke=(p,g,w,A,I)=>{if(w&&f(p,w),A)for(let R=0;R<A.length;R++)f(p,A[R]);if(I){let R=I.subTree;if(g===R){const P=I.vnode;Ke(p,P,P.scopeId,P.slotScopeIds,I.parent)}}},Fe=(p,g,w,A,I,R,P,k,O=0)=>{for(let S=O;S<p.length;S++){const z=p[S]=k?Cn(p[S]):Gt(p[S]);_(null,z,g,w,A,I,R,P,k)}},jt=(p,g,w,A,I,R,P)=>{const k=g.el=p.el;let{patchFlag:O,dynamicChildren:S,dirs:z}=g;O|=p.patchFlag&16;const B=p.props||we,K=g.props||we;let W;w&&Yn(w,!1),(W=K.onVnodeBeforeUpdate)&&zt(W,w,g,p),z&&Xn(g,p,w,"beforeUpdate"),w&&Yn(w,!0);const ae=I&&g.type!=="foreignObject";if(S?sn(p.dynamicChildren,S,k,w,A,ae,R):P||bt(p,g,k,null,w,A,ae,R,!1),O>0){if(O&16)on(k,g,B,K,w,A,I);else if(O&2&&B.class!==K.class&&i(k,"class",null,K.class,I),O&4&&i(k,"style",B.style,K.style,I),O&8){const ke=g.dynamicProps;for(let ve=0;ve<ke.length;ve++){const Ie=ke[ve],Pt=B[Ie],Pr=K[Ie];(Pr!==Pt||Ie==="value")&&i(k,Ie,Pt,Pr,I,p.children,w,A,N)}}O&1&&p.children!==g.children&&u(k,g.children)}else!P&&S==null&&on(k,g,B,K,w,A,I);((W=K.onVnodeUpdated)||z)&&mt(()=>{W&&zt(W,w,g,p),z&&Xn(g,p,w,"updated")},A)},sn=(p,g,w,A,I,R,P)=>{for(let k=0;k<g.length;k++){const O=p[k],S=g[k],z=O.el&&(O.type===de||!Bs(O,S)||O.shapeFlag&70)?h(O.el):w;_(O,S,z,null,A,I,R,P,!0)}},on=(p,g,w,A,I,R,P)=>{if(w!==A){for(const k in A){if(_o(k))continue;const O=A[k],S=w[k];O!==S&&k!=="value"&&i(p,k,S,O,P,g.children,I,R,N)}if(w!==we)for(const k in w)!_o(k)&&!(k in A)&&i(p,k,w[k],null,P,g.children,I,R,N);"value"in A&&i(p,"value",w.value,A.value)}},Rr=(p,g,w,A,I,R,P,k,O)=>{const S=g.el=p?p.el:a(""),z=g.anchor=p?p.anchor:a("");let{patchFlag:B,dynamicChildren:K,slotScopeIds:W}=g;W&&(k=k?k.concat(W):W),p==null?(r(S,w,A),r(z,w,A),Fe(g.children,w,z,I,R,P,k,O)):B>0&&B&64&&K&&p.dynamicChildren?(sn(p.dynamicChildren,K,w,I,R,P,k),(g.key!=null||I&&g===I.subTree)&&Bm(p,g,!0)):bt(p,g,w,z,I,R,P,k,O)},Or=(p,g,w,A,I,R,P,k,O)=>{g.slotScopeIds=k,p==null?g.shapeFlag&512?I.ctx.activate(g,w,A,P,O):Nr(g,w,A,I,R,P,O):Ue(p,g,O)},Nr=(p,g,w,A,I,R,P)=>{const k=p.component=GE(p,A,I);if(xm(p)&&(k.ctx.renderer=be),WE(k),k.asyncDep){if(I&&I.registerDep(k,Ee),!p.el){const O=k.subTree=te(hr);C(null,O,g,w)}return}Ee(k,p,g,w,I,R,P)},Ue=(p,g,w)=>{const A=g.component=p.component;if(aE(p,g,w))if(A.asyncDep&&!A.asyncResolved){ge(A,g,w);return}else A.next=g,tE(A.update),A.update();else g.component=p.component,g.el=p.el,A.vnode=g},Ee=(p,g,w,A,I,R,P)=>{const k=()=>{if(p.isMounted){let{next:z,bu:B,u:K,parent:W,vnode:ae}=p,ke=z,ve;Yn(p,!1),z?(z.el=ae.el,ge(p,z,P)):z=ae,B&&wo(B),(ve=z.props&&z.props.onVnodeBeforeUpdate)&&zt(ve,W,z,ae),Yn(p,!0);const Ie=vc(p),Pt=p.subTree;p.subTree=Ie,_(Pt,Ie,h(Pt.el),q(Pt),p,I,R),z.el=Ie.el,ke===null&&cE(p,Ie.el),K&&mt(K,I),(ve=z.props&&z.props.onVnodeUpdated)&&mt(()=>zt(ve,W,z,ae),I)}else{let z;const{el:B,props:K}=g,{bm:W,m:ae,parent:ke}=p,ve=ol(g);if(Yn(p,!1),W&&wo(W),!ve&&(z=K&&K.onVnodeBeforeMount)&&zt(z,ke,g),Yn(p,!0),B&&ee){const Ie=()=>{p.subTree=vc(p),ee(B,p.subTree,p,I,null)};ve?g.type.__asyncLoader().then(()=>!p.isUnmounted&&Ie()):Ie()}else{const Ie=p.subTree=vc(p);_(null,Ie,w,A,p,I,R),g.el=Ie.el}if(ae&&mt(ae,I),!ve&&(z=K&&K.onVnodeMounted)){const Ie=g;mt(()=>zt(z,ke,Ie),I)}g.shapeFlag&256&&p.a&&mt(p.a,I),p.isMounted=!0,g=w=A=null}},O=p.effect=new uu(k,()=>Em(p.update),p.scope),S=p.update=O.run.bind(O);S.id=p.uid,Yn(p,!0),S()},ge=(p,g,w)=>{g.component=p;const A=p.vnode.props;p.vnode=g,p.next=null,kE(p,g.props,A,w),OE(p,g.children,w),Ts(),yu(void 0,p.update),Is()},bt=(p,g,w,A,I,R,P,k,O=!1)=>{const S=p&&p.children,z=p?p.shapeFlag:0,B=g.children,{patchFlag:K,shapeFlag:W}=g;if(K>0){if(K&128){an(S,B,w,A,I,R,P,k,O);return}else if(K&256){Dr(S,B,w,A,I,R,P,k,O);return}}W&8?(z&16&&N(S,I,R),B!==S&&u(w,B)):z&16?W&16?an(S,B,w,A,I,R,P,k,O):N(S,I,R,!0):(z&8&&u(w,""),W&16&&Fe(B,w,A,I,R,P,k,O))},Dr=(p,g,w,A,I,R,P,k,O)=>{p=p||Yr,g=g||Yr;const S=p.length,z=g.length,B=Math.min(S,z);let K;for(K=0;K<B;K++){const W=g[K]=O?Cn(g[K]):Gt(g[K]);_(p[K],W,w,null,I,R,P,k,O)}S>z?N(p,I,R,!0,!1,B):Fe(g,w,A,I,R,P,k,O,B)},an=(p,g,w,A,I,R,P,k,O)=>{let S=0;const z=g.length;let B=p.length-1,K=z-1;for(;S<=B&&S<=K;){const W=p[S],ae=g[S]=O?Cn(g[S]):Gt(g[S]);if(Bs(W,ae))_(W,ae,w,null,I,R,P,k,O);else break;S++}for(;S<=B&&S<=K;){const W=p[B],ae=g[K]=O?Cn(g[K]):Gt(g[K]);if(Bs(W,ae))_(W,ae,w,null,I,R,P,k,O);else break;B--,K--}if(S>B){if(S<=K){const W=K+1,ae=W<z?g[W].el:A;for(;S<=K;)_(null,g[S]=O?Cn(g[S]):Gt(g[S]),w,ae,I,R,P,k,O),S++}}else if(S>K)for(;S<=B;)Ot(p[S],I,R,!0),S++;else{const W=S,ae=S,ke=new Map;for(S=ae;S<=K;S++){const Tt=g[S]=O?Cn(g[S]):Gt(g[S]);Tt.key!=null&&ke.set(Tt.key,S)}let ve,Ie=0;const Pt=K-ae+1;let Pr=!1,od=0;const Fs=new Array(Pt);for(S=0;S<Pt;S++)Fs[S]=0;for(S=W;S<=B;S++){const Tt=p[S];if(Ie>=Pt){Ot(Tt,I,R,!0);continue}let Ht;if(Tt.key!=null)Ht=ke.get(Tt.key);else for(ve=ae;ve<=K;ve++)if(Fs[ve-ae]===0&&Bs(Tt,g[ve])){Ht=ve;break}Ht===void 0?Ot(Tt,I,R,!0):(Fs[Ht-ae]=S+1,Ht>=od?od=Ht:Pr=!0,_(Tt,g[Ht],w,null,I,R,P,k,O),Ie++)}const ad=Pr?ME(Fs):Yr;for(ve=ad.length-1,S=Pt-1;S>=0;S--){const Tt=ae+S,Ht=g[Tt],cd=Tt+1<z?g[Tt+1].el:A;Fs[S]===0?_(null,Ht,w,cd,I,R,P,k,O):Pr&&(ve<0||S!==ad[ve]?qt(Ht,w,cd,2):ve--)}}},qt=(p,g,w,A,I=null)=>{const{el:R,type:P,transition:k,children:O,shapeFlag:S}=p;if(S&6){qt(p.component.subTree,g,w,A);return}if(S&128){p.suspense.move(g,w,A);return}if(S&64){P.move(p,g,w,be);return}if(P===de){r(R,g,w);for(let B=0;B<O.length;B++)qt(O[B],g,w,A);r(p.anchor,g,w);return}if(P===bo){F(p,g,w);return}if(A!==2&&S&1&&k)if(A===0)k.beforeEnter(R),r(R,g,w),mt(()=>k.enter(R),I);else{const{leave:B,delayLeave:K,afterLeave:W}=k,ae=()=>r(R,g,w),ke=()=>{B(R,()=>{ae(),W&&W()})};K?K(R,ae,ke):ke()}else r(R,g,w)},Ot=(p,g,w,A=!1,I=!1)=>{const{type:R,props:P,ref:k,children:O,dynamicChildren:S,shapeFlag:z,patchFlag:B,dirs:K}=p;if(k!=null&&ul(k,null,w,p,!0),z&256){g.ctx.deactivate(p);return}const W=z&1&&K,ae=!ol(p);let ke;if(ae&&(ke=P&&P.onVnodeBeforeUnmount)&&zt(ke,g,p),z&6)V(p.component,w,A);else{if(z&128){p.suspense.unmount(w,A);return}W&&Xn(p,null,g,"beforeUnmount"),z&64?p.type.remove(p,g,w,I,be,A):S&&(R!==de||B>0&&B&64)?N(S,g,w,!1,!0):(R===de&&B&384||!I&&z&16)&&N(O,g,w),A&&mc(p)}(ae&&(ke=P&&P.onVnodeUnmounted)||W)&&mt(()=>{ke&&zt(ke,g,p),W&&Xn(p,null,g,"unmounted")},w)},mc=p=>{const{type:g,el:w,anchor:A,transition:I}=p;if(g===de){T(w,A);return}if(g===bo){re(p);return}const R=()=>{s(w),I&&!I.persisted&&I.afterLeave&&I.afterLeave()};if(p.shapeFlag&1&&I&&!I.persisted){const{leave:P,delayLeave:k}=I,O=()=>P(w,R);k?k(p.el,R,O):O()}else R()},T=(p,g)=>{let w;for(;p!==g;)w=d(p),s(p),p=w;s(g)},V=(p,g,w)=>{const{bum:A,scope:I,update:R,subTree:P,um:k}=p;A&&wo(A),I.stop(),R&&(R.active=!1,Ot(P,p,g,w)),k&&mt(k,g),mt(()=>{p.isUnmounted=!0},g),g&&g.pendingBranch&&!g.isUnmounted&&p.asyncDep&&!p.asyncResolved&&p.suspenseId===g.pendingId&&(g.deps--,g.deps===0&&g.resolve())},N=(p,g,w,A=!1,I=!1,R=0)=>{for(let P=R;P<p.length;P++)Ot(p[P],g,w,A,I)},q=p=>p.shapeFlag&6?q(p.component.subTree):p.shapeFlag&128?p.suspense.next():d(p.anchor||p.el),ye=(p,g,w)=>{p==null?g._vnode&&Ot(g._vnode,null,null,!0):_(g._vnode||null,p,g,null,null,null,w),Im(),g._vnode=p},be={p:_,um:Ot,m:qt,r:mc,mt:Nr,mc:Fe,pc:bt,pbc:sn,n:q,o:t};let se,ee;return e&&([se,ee]=e(be)),{render:ye,hydrate:se,createApp:DE(ye,se)}}function Yn({effect:t,update:e},n){t.allowRecurse=e.allowRecurse=n}function Bm(t,e,n=!1){const r=t.children,s=e.children;if(Y(r)&&Y(s))for(let i=0;i<r.length;i++){const o=r[i];let a=s[i];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=s[i]=Cn(s[i]),a.el=o.el),n||Bm(o,a))}}function ME(t){const e=t.slice(),n=[0];let r,s,i,o,a;const c=t.length;for(r=0;r<c;r++){const l=t[r];if(l!==0){if(s=n[n.length-1],t[s]<l){e[r]=s,n.push(r);continue}for(i=0,o=n.length-1;i<o;)a=i+o>>1,t[n[a]]<l?i=a+1:o=a;l<t[n[i]]&&(i>0&&(e[r]=n[i-1]),n[i]=r)}}for(i=n.length,o=n[i-1];i-- >0;)n[i]=o,o=e[o];return n}const UE=t=>t.__isTeleport,Vm="components",$E="directives";function Ir(t,e){return jm(Vm,t,!0,e)||t}const FE=Symbol();function Ln(t){return jm($E,t)}function jm(t,e,n=!0,r=!1){const s=Ut||We;if(s){const i=s.type;if(t===Vm){const a=JE(i);if(a&&(a===e||a===en(e)||a===ga(en(e))))return i}const o=Cd(s[t]||i[t],e)||Cd(s.appContext[t],e);return!o&&r?i:o}}function Cd(t,e){return t&&(t[e]||t[en(e)]||t[ga(en(e))])}const de=Symbol(void 0),_u=Symbol(void 0),hr=Symbol(void 0),bo=Symbol(void 0),ti=[];let or=null;function D(t=!1){ti.push(or=t?null:[])}function BE(){ti.pop(),or=ti[ti.length-1]||null}let Fo=1;function kd(t){Fo+=t}function qm(t){return t.dynamicChildren=Fo>0?or||Yr:null,BE(),Fo>0&&or&&or.push(t),t}function M(t,e,n,r,s,i){return qm(v(t,e,n,r,s,i,!0))}function Wt(t,e,n,r,s){return qm(te(t,e,n,r,s,!0))}function hl(t){return t?t.__v_isVNode===!0:!1}function Bs(t,e){return t.type===e.type&&t.key===e.key}const ba="__vInternal",Hm=({key:t})=>t!=null?t:null,To=({ref:t,ref_key:e,ref_for:n})=>t!=null?je(t)||Qe(t)||Z(t)?{i:Ut,r:t,k:e,f:!!n}:t:null;function v(t,e=null,n=null,r=0,s=null,i=t===de?0:1,o=!1,a=!1){const c={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&Hm(e),ref:e&&To(e),scopeId:wa,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:i,patchFlag:r,dynamicProps:s,dynamicChildren:null,appContext:null};return a?(Eu(c,n),i&128&&t.normalize(c)):n&&(c.shapeFlag|=je(n)?8:16),Fo>0&&!o&&or&&(c.patchFlag>0||i&6)&&c.patchFlag!==32&&or.push(c),c}const te=VE;function VE(t,e=null,n=null,r=0,s=null,i=!1){if((!t||t===FE)&&(t=hr),hl(t)){const a=pi(t,e,!0);return n&&Eu(a,n),a}if(ZE(t)&&(t=t.__vccOpts),e){e=jE(e);let{class:a,style:c}=e;a&&!je(a)&&(e.class=Xr(a)),$e(c)&&(fm(c)&&!Y(c)&&(c=pt({},c)),e.style=Tr(c))}const o=je(t)?1:lE(t)?128:UE(t)?64:$e(t)?4:Z(t)?2:0;return v(t,e,n,r,s,o,i,!0)}function jE(t){return t?fm(t)||ba in t?pt({},t):t:null}function pi(t,e,n=!1){const{props:r,ref:s,patchFlag:i,children:o}=t,a=e?qE(r||{},e):r;return{__v_isVNode:!0,__v_skip:!0,type:t.type,props:a,key:a&&Hm(a),ref:e&&e.ref?n&&s?Y(s)?s.concat(To(e)):[s,To(e)]:To(e):s,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:o,target:t.target,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==de?i===-1?16:i|16:i,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:t.transition,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&pi(t.ssContent),ssFallback:t.ssFallback&&pi(t.ssFallback),el:t.el,anchor:t.anchor}}function me(t=" ",e=0){return te(_u,null,t,e)}function wu(t,e){const n=te(bo,null,t);return n.staticCount=e,n}function Re(t="",e=!1){return e?(D(),Wt(hr,null,t)):te(hr,null,t)}function Gt(t){return t==null||typeof t=="boolean"?te(hr):Y(t)?te(de,null,t.slice()):typeof t=="object"?Cn(t):te(_u,null,String(t))}function Cn(t){return t.el===null||t.memo?t:pi(t)}function Eu(t,e){let n=0;const{shapeFlag:r}=t;if(e==null)e=null;else if(Y(e))n=16;else if(typeof e=="object")if(r&65){const s=e.default;s&&(s._c&&(s._d=!1),Eu(t,s()),s._c&&(s._d=!0));return}else{n=32;const s=e._;!s&&!(ba in e)?e._ctx=Ut:s===3&&Ut&&(Ut.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else Z(e)?(e={default:e,_ctx:Ut},n=32):(e=String(e),r&64?(n=16,e=[me(e)]):n=8);t.children=e,t.shapeFlag|=n}function qE(...t){const e={};for(let n=0;n<t.length;n++){const r=t[n];for(const s in r)if(s==="class")e.class!==r.class&&(e.class=Xr([e.class,r.class]));else if(s==="style")e.style=Tr([e.style,r.style]);else if(fa(s)){const i=e[s],o=r[s];o&&i!==o&&!(Y(i)&&i.includes(o))&&(e[s]=i?[].concat(i,o):o)}else s!==""&&(e[s]=r[s])}return e}function zt(t,e,n,r=null){Ft(t,e,7,[n,r])}function Ct(t,e,n,r){let s;const i=n&&n[r];if(Y(t)||je(t)){s=new Array(t.length);for(let o=0,a=t.length;o<a;o++)s[o]=e(t[o],o,void 0,i&&i[o])}else if(typeof t=="number"){s=new Array(t);for(let o=0;o<t;o++)s[o]=e(o+1,o,void 0,i&&i[o])}else if($e(t))if(t[Symbol.iterator])s=Array.from(t,(o,a)=>e(o,a,void 0,i&&i[a]));else{const o=Object.keys(t);s=new Array(o.length);for(let a=0,c=o.length;a<c;a++){const l=o[a];s[a]=e(t[l],l,a,i&&i[a])}}else s=[];return n&&(n[r]=s),s}const dl=t=>t?zm(t)?Ta(t)||t.proxy:dl(t.parent):null,Bo=pt(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>dl(t.parent),$root:t=>dl(t.root),$emit:t=>t.emit,$options:t=>Dm(t),$forceUpdate:t=>()=>Em(t.update),$nextTick:t=>Gr.bind(t.proxy),$watch:t=>hE.bind(t)}),HE={get({_:t},e){const{ctx:n,setupState:r,data:s,props:i,accessCache:o,type:a,appContext:c}=t;let l;if(e[0]!=="$"){const f=o[e];if(f!==void 0)switch(f){case 1:return r[e];case 2:return s[e];case 4:return n[e];case 3:return i[e]}else{if(r!==we&&oe(r,e))return o[e]=1,r[e];if(s!==we&&oe(s,e))return o[e]=2,s[e];if((l=t.propsOptions[0])&&oe(l,e))return o[e]=3,i[e];if(n!==we&&oe(n,e))return o[e]=4,n[e];al&&(o[e]=0)}}const u=Bo[e];let h,d;if(u)return e==="$attrs"&&xt(t,"get",e),u(t);if((h=a.__cssModules)&&(h=h[e]))return h;if(n!==we&&oe(n,e))return o[e]=4,n[e];if(d=c.config.globalProperties,oe(d,e))return d[e]},set({_:t},e,n){const{data:r,setupState:s,ctx:i}=t;return s!==we&&oe(s,e)?(s[e]=n,!0):r!==we&&oe(r,e)?(r[e]=n,!0):oe(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(i[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:r,appContext:s,propsOptions:i}},o){let a;return!!n[o]||t!==we&&oe(t,o)||e!==we&&oe(e,o)||(a=i[0])&&oe(a,o)||oe(r,o)||oe(Bo,o)||oe(s.config.globalProperties,o)},defineProperty(t,e,n){return n.get!=null?t._.accessCache[e]=0:oe(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}},zE=Fm();let KE=0;function GE(t,e,n){const r=t.type,s=(e?e.appContext:t.appContext)||zE,i={uid:KE++,vnode:t,type:r,parent:e,appContext:s,root:null,next:null,subTree:null,effect:null,update:null,scope:new Ew(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(s.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Lm(r,s),emitsOptions:Sm(r,s),emit:null,emitted:null,propsDefaults:we,inheritAttrs:r.inheritAttrs,ctx:we,data:we,props:we,attrs:we,slots:we,refs:we,setupState:we,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return i.ctx={_:i},i.root=e?e.root:i,i.emit=sE.bind(null,i),t.ce&&t.ce(i),i}let We=null;const os=t=>{We=t,t.scope.on()},ar=()=>{We&&We.scope.off(),We=null};function zm(t){return t.vnode.shapeFlag&4}let mi=!1;function WE(t,e=!1){mi=e;const{props:n,children:r}=t.vnode,s=zm(t);CE(t,n,s,e),RE(t,r);const i=s?QE(t,e):void 0;return mi=!1,i}function QE(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=pm(new Proxy(t.ctx,HE));const{setup:r}=n;if(r){const s=t.setupContext=r.length>1?YE(t):null;os(t),Ts();const i=Pn(r,t,0,[t.props,s]);if(Is(),ar(),Jp(i)){if(i.then(ar,ar),e)return i.then(o=>{xd(t,o,e)}).catch(o=>{va(o,t,0)});t.asyncDep=i}else xd(t,i,e)}else Km(t,e)}function xd(t,e,n){Z(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:$e(e)&&(t.setupState=vm(e)),Km(t,n)}let Rd;function Km(t,e,n){const r=t.type;if(!t.render){if(!e&&Rd&&!r.render){const s=r.template;if(s){const{isCustomElement:i,compilerOptions:o}=t.appContext.config,{delimiters:a,compilerOptions:c}=r,l=pt(pt({isCustomElement:i,delimiters:a},o),c);r.render=Rd(s,l)}}t.render=r.render||$t}os(t),Ts(),bE(t),Is(),ar()}function XE(t){return new Proxy(t.attrs,{get(e,n){return xt(t,"get","$attrs"),e[n]}})}function YE(t){const e=r=>{t.exposed=r||{}};let n;return{get attrs(){return n||(n=XE(t))},slots:t.slots,emit:t.emit,expose:e}}function Ta(t){if(t.exposed)return t.exposeProxy||(t.exposeProxy=new Proxy(vm(pm(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in Bo)return Bo[n](t)}}))}function JE(t){return Z(t)&&t.displayName||t.name}function ZE(t){return Z(t)&&"__vccOpts"in t}const vt=(t,e)=>_m(t,e,mi);function Gm(t,e,n){const r=arguments.length;return r===2?$e(e)&&!Y(e)?hl(e)?te(t,null,[e]):te(t,e):te(t,null,e):(r>3?n=Array.prototype.slice.call(arguments,2):r===3&&hl(n)&&(n=[n]),te(t,e,n))}const eb="3.2.33",tb="http://www.w3.org/2000/svg",er=typeof document!="undefined"?document:null,Od=er&&er.createElement("template"),nb={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,r)=>{const s=e?er.createElementNS(tb,t):er.createElement(t,n?{is:n}:void 0);return t==="select"&&r&&r.multiple!=null&&s.setAttribute("multiple",r.multiple),s},createText:t=>er.createTextNode(t),createComment:t=>er.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>er.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},cloneNode(t){const e=t.cloneNode(!0);return"_value"in t&&(e._value=t._value),e},insertStaticContent(t,e,n,r,s,i){const o=n?n.previousSibling:e.lastChild;if(s&&(s===i||s.nextSibling))for(;e.insertBefore(s.cloneNode(!0),n),!(s===i||!(s=s.nextSibling)););else{Od.innerHTML=r?`<svg>${t}</svg>`:t;const a=Od.content;if(r){const c=a.firstChild;for(;c.firstChild;)a.appendChild(c.firstChild);a.removeChild(c)}e.insertBefore(a,n)}return[o?o.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}};function rb(t,e,n){const r=t._vtc;r&&(e=(e?[e,...r]:[...r]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}function sb(t,e,n){const r=t.style,s=je(n);if(n&&!s){for(const i in n)fl(r,i,n[i]);if(e&&!je(e))for(const i in e)n[i]==null&&fl(r,i,"")}else{const i=r.display;s?e!==n&&(r.cssText=n):e&&t.removeAttribute("style"),"_vod"in t&&(r.display=i)}}const Nd=/\s*!important$/;function fl(t,e,n){if(Y(n))n.forEach(r=>fl(t,e,r));else if(n==null&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{const r=ib(t,e);Nd.test(n)?t.setProperty(bs(r),n.replace(Nd,""),"important"):t[r]=n}}const Dd=["Webkit","Moz","ms"],_c={};function ib(t,e){const n=_c[e];if(n)return n;let r=en(e);if(r!=="filter"&&r in t)return _c[e]=r;r=ga(r);for(let s=0;s<Dd.length;s++){const i=Dd[s]+r;if(i in t)return _c[e]=i}return e}const Pd="http://www.w3.org/1999/xlink";function ob(t,e,n,r,s){if(r&&e.startsWith("xlink:"))n==null?t.removeAttributeNS(Pd,e.slice(6,e.length)):t.setAttributeNS(Pd,e,n);else{const i=uw(e);n==null||i&&!Qp(n)?t.removeAttribute(e):t.setAttribute(e,i?"":n)}}function ab(t,e,n,r,s,i,o){if(e==="innerHTML"||e==="textContent"){r&&o(r,s,i),t[e]=n==null?"":n;return}if(e==="value"&&t.tagName!=="PROGRESS"&&!t.tagName.includes("-")){t._value=n;const c=n==null?"":n;(t.value!==c||t.tagName==="OPTION")&&(t.value=c),n==null&&t.removeAttribute(e);return}let a=!1;if(n===""||n==null){const c=typeof t[e];c==="boolean"?n=Qp(n):n==null&&c==="string"?(n="",a=!0):c==="number"&&(n=0,a=!0)}try{t[e]=n}catch{}a&&t.removeAttribute(e)}const[Wm,cb]=(()=>{let t=Date.now,e=!1;if(typeof window!="undefined"){Date.now()>document.createEvent("Event").timeStamp&&(t=()=>performance.now());const n=navigator.userAgent.match(/firefox\/(\d+)/i);e=!!(n&&Number(n[1])<=53)}return[t,e]})();let pl=0;const lb=Promise.resolve(),ub=()=>{pl=0},hb=()=>pl||(lb.then(ub),pl=Wm());function Hr(t,e,n,r){t.addEventListener(e,n,r)}function db(t,e,n,r){t.removeEventListener(e,n,r)}function fb(t,e,n,r,s=null){const i=t._vei||(t._vei={}),o=i[e];if(r&&o)o.value=r;else{const[a,c]=pb(e);if(r){const l=i[e]=mb(r,s);Hr(t,a,l,c)}else o&&(db(t,a,o,c),i[e]=void 0)}}const Ld=/(?:Once|Passive|Capture)$/;function pb(t){let e;if(Ld.test(t)){e={};let n;for(;n=t.match(Ld);)t=t.slice(0,t.length-n[0].length),e[n[0].toLowerCase()]=!0}return[bs(t.slice(2)),e]}function mb(t,e){const n=r=>{const s=r.timeStamp||Wm();(cb||s>=n.attached-1)&&Ft(gb(r,n.value),e,5,[r])};return n.value=t,n.attached=hb(),n}function gb(t,e){if(Y(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(r=>s=>!s._stopped&&r&&r(s))}else return e}const Md=/^on[a-z]/,yb=(t,e,n,r,s=!1,i,o,a,c)=>{e==="class"?rb(t,r,s):e==="style"?sb(t,n,r):fa(e)?iu(e)||fb(t,e,n,r,o):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):vb(t,e,r,s))?ab(t,e,r,i,o,a,c):(e==="true-value"?t._trueValue=r:e==="false-value"&&(t._falseValue=r),ob(t,e,r,s))};function vb(t,e,n,r){return r?!!(e==="innerHTML"||e==="textContent"||e in t&&Md.test(e)&&Z(n)):e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA"||Md.test(e)&&je(n)?!1:e in t}const Ud=t=>{const e=t.props["onUpdate:modelValue"];return Y(e)?n=>wo(e,n):e};function _b(t){t.target.composing=!0}function $d(t){const e=t.target;e.composing&&(e.composing=!1,wb(e,"input"))}function wb(t,e){const n=document.createEvent("HTMLEvents");n.initEvent(e,!0,!0),t.dispatchEvent(n)}const Qm={created(t,{modifiers:{lazy:e,trim:n,number:r}},s){t._assign=Ud(s);const i=r||s.props&&s.props.type==="number";Hr(t,e?"change":"input",o=>{if(o.target.composing)return;let a=t.value;n?a=a.trim():i&&(a=Zc(a)),t._assign(a)}),n&&Hr(t,"change",()=>{t.value=t.value.trim()}),e||(Hr(t,"compositionstart",_b),Hr(t,"compositionend",$d),Hr(t,"change",$d))},mounted(t,{value:e}){t.value=e==null?"":e},beforeUpdate(t,{value:e,modifiers:{lazy:n,trim:r,number:s}},i){if(t._assign=Ud(i),t.composing||document.activeElement===t&&(n||r&&t.value.trim()===e||(s||t.type==="number")&&Zc(t.value)===e))return;const o=e==null?"":e;t.value!==o&&(t.value=o)}},Eb=["ctrl","shift","alt","meta"],bb={stop:t=>t.stopPropagation(),prevent:t=>t.preventDefault(),self:t=>t.target!==t.currentTarget,ctrl:t=>!t.ctrlKey,shift:t=>!t.shiftKey,alt:t=>!t.altKey,meta:t=>!t.metaKey,left:t=>"button"in t&&t.button!==0,middle:t=>"button"in t&&t.button!==1,right:t=>"button"in t&&t.button!==2,exact:(t,e)=>Eb.some(n=>t[`${n}Key`]&&!e.includes(n))},Xm=(t,e)=>(n,...r)=>{for(let s=0;s<e.length;s++){const i=bb[e[s]];if(i&&i(n,e))return}return t(n,...r)},XL={beforeMount(t,{value:e},{transition:n}){t._vod=t.style.display==="none"?"":t.style.display,n&&e?n.beforeEnter(t):Vs(t,e)},mounted(t,{value:e},{transition:n}){n&&e&&n.enter(t)},updated(t,{value:e,oldValue:n},{transition:r}){!e!=!n&&(r?e?(r.beforeEnter(t),Vs(t,!0),r.enter(t)):r.leave(t,()=>{Vs(t,!1)}):Vs(t,e))},beforeUnmount(t,{value:e}){Vs(t,e)}};function Vs(t,e){t.style.display=e?t._vod:"none"}const Tb=pt({patchProp:yb},nb);let Fd;function Ib(){return Fd||(Fd=PE(Tb))}const Ab=(...t)=>{const e=Ib().createApp(...t),{mount:n}=e;return e.mount=r=>{const s=Sb(r);if(!s)return;const i=e._component;!Z(i)&&!i.render&&!i.template&&(i.template=s.innerHTML),s.innerHTML="";const o=n(s,!1,s instanceof SVGElement);return s instanceof Element&&(s.removeAttribute("v-cloak"),s.setAttribute("data-v-app","")),o},e};function Sb(t){return je(t)?document.querySelector(t):t}function Cb(){return Ym().__VUE_DEVTOOLS_GLOBAL_HOOK__}function Ym(){return typeof navigator!="undefined"&&typeof window!="undefined"?window:typeof global!="undefined"?global:{}}const kb=typeof Proxy=="function",xb="devtools-plugin:setup",Rb="plugin:settings:set";let Lr,ml;function Ob(){var t;return Lr!==void 0||(typeof window!="undefined"&&window.performance?(Lr=!0,ml=window.performance):typeof global!="undefined"&&((t=global.perf_hooks)===null||t===void 0?void 0:t.performance)?(Lr=!0,ml=global.perf_hooks.performance):Lr=!1),Lr}function Nb(){return Ob()?ml.now():Date.now()}class Db{constructor(e,n){this.target=null,this.targetQueue=[],this.onQueue=[],this.plugin=e,this.hook=n;const r={};if(e.settings)for(const o in e.settings){const a=e.settings[o];r[o]=a.defaultValue}const s=`__vue-devtools-plugin-settings__${e.id}`;let i=Object.assign({},r);try{const o=localStorage.getItem(s),a=JSON.parse(o);Object.assign(i,a)}catch{}this.fallbacks={getSettings(){return i},setSettings(o){try{localStorage.setItem(s,JSON.stringify(o))}catch{}i=o},now(){return Nb()}},n&&n.on(Rb,(o,a)=>{o===this.plugin.id&&this.fallbacks.setSettings(a)}),this.proxiedOn=new Proxy({},{get:(o,a)=>this.target?this.target.on[a]:(...c)=>{this.onQueue.push({method:a,args:c})}}),this.proxiedTarget=new Proxy({},{get:(o,a)=>this.target?this.target[a]:a==="on"?this.proxiedOn:Object.keys(this.fallbacks).includes(a)?(...c)=>(this.targetQueue.push({method:a,args:c,resolve:()=>{}}),this.fallbacks[a](...c)):(...c)=>new Promise(l=>{this.targetQueue.push({method:a,args:c,resolve:l})})})}async setRealTarget(e){this.target=e;for(const n of this.onQueue)this.target.on[n.method](...n.args);for(const n of this.targetQueue)n.resolve(await this.target[n.method](...n.args))}}function Pb(t,e){const n=t,r=Ym(),s=Cb(),i=kb&&n.enableEarlyProxy;if(s&&(r.__VUE_DEVTOOLS_PLUGIN_API_AVAILABLE__||!i))s.emit(xb,t,e);else{const o=i?new Db(n,s):null;(r.__VUE_DEVTOOLS_PLUGINS__=r.__VUE_DEVTOOLS_PLUGINS__||[]).push({pluginDescriptor:n,setupFn:e,proxy:o}),o&&e(o.proxiedTarget)}}/*!
 * vuex v4.0.2
 * (c) 2021 Evan You
 * @license MIT
 */var Jm="store";function Ia(t){return t===void 0&&(t=null),Bt(t!==null?t:Jm)}function Ss(t,e){Object.keys(t).forEach(function(n){return e(t[n],n)})}function Lb(t){return t!==null&&typeof t=="object"}function Mb(t){return t&&typeof t.then=="function"}function Ub(t,e){return function(){return t(e)}}function Zm(t,e,n){return e.indexOf(t)<0&&(n&&n.prepend?e.unshift(t):e.push(t)),function(){var r=e.indexOf(t);r>-1&&e.splice(r,1)}}function eg(t,e){t._actions=Object.create(null),t._mutations=Object.create(null),t._wrappedGetters=Object.create(null),t._modulesNamespaceMap=Object.create(null);var n=t.state;Aa(t,n,[],t._modules.root,!0),bu(t,n,e)}function bu(t,e,n){var r=t._state;t.getters={},t._makeLocalGettersCache=Object.create(null);var s=t._wrappedGetters,i={};Ss(s,function(o,a){i[a]=Ub(o,t),Object.defineProperty(t.getters,a,{get:function(){return i[a]()},enumerable:!0})}),t._state=tn({data:e}),t.strict&&jb(t),r&&n&&t._withCommit(function(){r.data=null})}function Aa(t,e,n,r,s){var i=!n.length,o=t._modules.getNamespace(n);if(r.namespaced&&(t._modulesNamespaceMap[o],t._modulesNamespaceMap[o]=r),!i&&!s){var a=Tu(e,n.slice(0,-1)),c=n[n.length-1];t._withCommit(function(){a[c]=r.state})}var l=r.context=$b(t,o,n);r.forEachMutation(function(u,h){var d=o+h;Fb(t,d,u,l)}),r.forEachAction(function(u,h){var d=u.root?h:o+h,f=u.handler||u;Bb(t,d,f,l)}),r.forEachGetter(function(u,h){var d=o+h;Vb(t,d,u,l)}),r.forEachChild(function(u,h){Aa(t,e,n.concat(h),u,s)})}function $b(t,e,n){var r=e==="",s={dispatch:r?t.dispatch:function(i,o,a){var c=Vo(i,o,a),l=c.payload,u=c.options,h=c.type;return(!u||!u.root)&&(h=e+h),t.dispatch(h,l)},commit:r?t.commit:function(i,o,a){var c=Vo(i,o,a),l=c.payload,u=c.options,h=c.type;(!u||!u.root)&&(h=e+h),t.commit(h,l,u)}};return Object.defineProperties(s,{getters:{get:r?function(){return t.getters}:function(){return tg(t,e)}},state:{get:function(){return Tu(t.state,n)}}}),s}function tg(t,e){if(!t._makeLocalGettersCache[e]){var n={},r=e.length;Object.keys(t.getters).forEach(function(s){if(s.slice(0,r)===e){var i=s.slice(r);Object.defineProperty(n,i,{get:function(){return t.getters[s]},enumerable:!0})}}),t._makeLocalGettersCache[e]=n}return t._makeLocalGettersCache[e]}function Fb(t,e,n,r){var s=t._mutations[e]||(t._mutations[e]=[]);s.push(function(o){n.call(t,r.state,o)})}function Bb(t,e,n,r){var s=t._actions[e]||(t._actions[e]=[]);s.push(function(o){var a=n.call(t,{dispatch:r.dispatch,commit:r.commit,getters:r.getters,state:r.state,rootGetters:t.getters,rootState:t.state},o);return Mb(a)||(a=Promise.resolve(a)),t._devtoolHook?a.catch(function(c){throw t._devtoolHook.emit("vuex:error",c),c}):a})}function Vb(t,e,n,r){t._wrappedGetters[e]||(t._wrappedGetters[e]=function(i){return n(r.state,r.getters,i.state,i.getters)})}function jb(t){Xt(function(){return t._state.data},function(){},{deep:!0,flush:"sync"})}function Tu(t,e){return e.reduce(function(n,r){return n[r]},t)}function Vo(t,e,n){return Lb(t)&&t.type&&(n=e,e=t,t=t.type),{type:t,payload:e,options:n}}var qb="vuex bindings",Bd="vuex:mutations",wc="vuex:actions",Mr="vuex",Hb=0;function zb(t,e){Pb({id:"org.vuejs.vuex",app:t,label:"Vuex",homepage:"https://next.vuex.vuejs.org/",logo:"https://vuejs.org/images/icons/favicon-96x96.png",packageName:"vuex",componentStateTypes:[qb]},function(n){n.addTimelineLayer({id:Bd,label:"Vuex Mutations",color:Vd}),n.addTimelineLayer({id:wc,label:"Vuex Actions",color:Vd}),n.addInspector({id:Mr,label:"Vuex",icon:"storage",treeFilterPlaceholder:"Filter stores..."}),n.on.getInspectorTree(function(r){if(r.app===t&&r.inspectorId===Mr)if(r.filter){var s=[];ig(s,e._modules.root,r.filter,""),r.rootNodes=s}else r.rootNodes=[sg(e._modules.root,"")]}),n.on.getInspectorState(function(r){if(r.app===t&&r.inspectorId===Mr){var s=r.nodeId;tg(e,s),r.state=Wb(Xb(e._modules,s),s==="root"?e.getters:e._makeLocalGettersCache,s)}}),n.on.editInspectorState(function(r){if(r.app===t&&r.inspectorId===Mr){var s=r.nodeId,i=r.path;s!=="root"&&(i=s.split("/").filter(Boolean).concat(i)),e._withCommit(function(){r.set(e._state.data,i,r.state.value)})}}),e.subscribe(function(r,s){var i={};r.payload&&(i.payload=r.payload),i.state=s,n.notifyComponentUpdate(),n.sendInspectorTree(Mr),n.sendInspectorState(Mr),n.addTimelineEvent({layerId:Bd,event:{time:Date.now(),title:r.type,data:i}})}),e.subscribeAction({before:function(r,s){var i={};r.payload&&(i.payload=r.payload),r._id=Hb++,r._time=Date.now(),i.state=s,n.addTimelineEvent({layerId:wc,event:{time:r._time,title:r.type,groupId:r._id,subtitle:"start",data:i}})},after:function(r,s){var i={},o=Date.now()-r._time;i.duration={_custom:{type:"duration",display:o+"ms",tooltip:"Action duration",value:o}},r.payload&&(i.payload=r.payload),i.state=s,n.addTimelineEvent({layerId:wc,event:{time:Date.now(),title:r.type,groupId:r._id,subtitle:"end",data:i}})}})})}var Vd=8702998,Kb=6710886,Gb=16777215,ng={label:"namespaced",textColor:Gb,backgroundColor:Kb};function rg(t){return t&&t!=="root"?t.split("/").slice(-2,-1)[0]:"Root"}function sg(t,e){return{id:e||"root",label:rg(e),tags:t.namespaced?[ng]:[],children:Object.keys(t._children).map(function(n){return sg(t._children[n],e+n+"/")})}}function ig(t,e,n,r){r.includes(n)&&t.push({id:r||"root",label:r.endsWith("/")?r.slice(0,r.length-1):r||"Root",tags:e.namespaced?[ng]:[]}),Object.keys(e._children).forEach(function(s){ig(t,e._children[s],n,r+s+"/")})}function Wb(t,e,n){e=n==="root"?e:e[n];var r=Object.keys(e),s={state:Object.keys(t.state).map(function(o){return{key:o,editable:!0,value:t.state[o]}})};if(r.length){var i=Qb(e);s.getters=Object.keys(i).map(function(o){return{key:o.endsWith("/")?rg(o):o,editable:!1,value:gl(function(){return i[o]})}})}return s}function Qb(t){var e={};return Object.keys(t).forEach(function(n){var r=n.split("/");if(r.length>1){var s=e,i=r.pop();r.forEach(function(o){s[o]||(s[o]={_custom:{value:{},display:o,tooltip:"Module",abstract:!0}}),s=s[o]._custom.value}),s[i]=gl(function(){return t[n]})}else e[n]=gl(function(){return t[n]})}),e}function Xb(t,e){var n=e.split("/").filter(function(r){return r});return n.reduce(function(r,s,i){var o=r[s];if(!o)throw new Error('Missing module "'+s+'" for path "'+e+'".');return i===n.length-1?o:o._children},e==="root"?t:t.root._children)}function gl(t){try{return t()}catch(e){return e}}var Vt=function(e,n){this.runtime=n,this._children=Object.create(null),this._rawModule=e;var r=e.state;this.state=(typeof r=="function"?r():r)||{}},og={namespaced:{configurable:!0}};og.namespaced.get=function(){return!!this._rawModule.namespaced};Vt.prototype.addChild=function(e,n){this._children[e]=n};Vt.prototype.removeChild=function(e){delete this._children[e]};Vt.prototype.getChild=function(e){return this._children[e]};Vt.prototype.hasChild=function(e){return e in this._children};Vt.prototype.update=function(e){this._rawModule.namespaced=e.namespaced,e.actions&&(this._rawModule.actions=e.actions),e.mutations&&(this._rawModule.mutations=e.mutations),e.getters&&(this._rawModule.getters=e.getters)};Vt.prototype.forEachChild=function(e){Ss(this._children,e)};Vt.prototype.forEachGetter=function(e){this._rawModule.getters&&Ss(this._rawModule.getters,e)};Vt.prototype.forEachAction=function(e){this._rawModule.actions&&Ss(this._rawModule.actions,e)};Vt.prototype.forEachMutation=function(e){this._rawModule.mutations&&Ss(this._rawModule.mutations,e)};Object.defineProperties(Vt.prototype,og);var Ar=function(e){this.register([],e,!1)};Ar.prototype.get=function(e){return e.reduce(function(n,r){return n.getChild(r)},this.root)};Ar.prototype.getNamespace=function(e){var n=this.root;return e.reduce(function(r,s){return n=n.getChild(s),r+(n.namespaced?s+"/":"")},"")};Ar.prototype.update=function(e){ag([],this.root,e)};Ar.prototype.register=function(e,n,r){var s=this;r===void 0&&(r=!0);var i=new Vt(n,r);if(e.length===0)this.root=i;else{var o=this.get(e.slice(0,-1));o.addChild(e[e.length-1],i)}n.modules&&Ss(n.modules,function(a,c){s.register(e.concat(c),a,r)})};Ar.prototype.unregister=function(e){var n=this.get(e.slice(0,-1)),r=e[e.length-1],s=n.getChild(r);!s||!s.runtime||n.removeChild(r)};Ar.prototype.isRegistered=function(e){var n=this.get(e.slice(0,-1)),r=e[e.length-1];return n?n.hasChild(r):!1};function ag(t,e,n){if(e.update(n),n.modules)for(var r in n.modules){if(!e.getChild(r))return;ag(t.concat(r),e.getChild(r),n.modules[r])}}function Yb(t){return new Et(t)}var Et=function(e){var n=this;e===void 0&&(e={});var r=e.plugins;r===void 0&&(r=[]);var s=e.strict;s===void 0&&(s=!1);var i=e.devtools;this._committing=!1,this._actions=Object.create(null),this._actionSubscribers=[],this._mutations=Object.create(null),this._wrappedGetters=Object.create(null),this._modules=new Ar(e),this._modulesNamespaceMap=Object.create(null),this._subscribers=[],this._makeLocalGettersCache=Object.create(null),this._devtools=i;var o=this,a=this,c=a.dispatch,l=a.commit;this.dispatch=function(d,f){return c.call(o,d,f)},this.commit=function(d,f,m){return l.call(o,d,f,m)},this.strict=s;var u=this._modules.root.state;Aa(this,u,[],this._modules.root),bu(this,u),r.forEach(function(h){return h(n)})},Iu={state:{configurable:!0}};Et.prototype.install=function(e,n){e.provide(n||Jm,this),e.config.globalProperties.$store=this;var r=this._devtools!==void 0?this._devtools:!1;r&&zb(e,this)};Iu.state.get=function(){return this._state.data};Iu.state.set=function(t){};Et.prototype.commit=function(e,n,r){var s=this,i=Vo(e,n,r),o=i.type,a=i.payload,c={type:o,payload:a},l=this._mutations[o];!l||(this._withCommit(function(){l.forEach(function(h){h(a)})}),this._subscribers.slice().forEach(function(u){return u(c,s.state)}))};Et.prototype.dispatch=function(e,n){var r=this,s=Vo(e,n),i=s.type,o=s.payload,a={type:i,payload:o},c=this._actions[i];if(!!c){try{this._actionSubscribers.slice().filter(function(u){return u.before}).forEach(function(u){return u.before(a,r.state)})}catch{}var l=c.length>1?Promise.all(c.map(function(u){return u(o)})):c[0](o);return new Promise(function(u,h){l.then(function(d){try{r._actionSubscribers.filter(function(f){return f.after}).forEach(function(f){return f.after(a,r.state)})}catch{}u(d)},function(d){try{r._actionSubscribers.filter(function(f){return f.error}).forEach(function(f){return f.error(a,r.state,d)})}catch{}h(d)})})}};Et.prototype.subscribe=function(e,n){return Zm(e,this._subscribers,n)};Et.prototype.subscribeAction=function(e,n){var r=typeof e=="function"?{before:e}:e;return Zm(r,this._actionSubscribers,n)};Et.prototype.watch=function(e,n,r){var s=this;return Xt(function(){return e(s.state,s.getters)},n,Object.assign({},r))};Et.prototype.replaceState=function(e){var n=this;this._withCommit(function(){n._state.data=e})};Et.prototype.registerModule=function(e,n,r){r===void 0&&(r={}),typeof e=="string"&&(e=[e]),this._modules.register(e,n),Aa(this,this.state,e,this._modules.get(e),r.preserveState),bu(this,this.state)};Et.prototype.unregisterModule=function(e){var n=this;typeof e=="string"&&(e=[e]),this._modules.unregister(e),this._withCommit(function(){var r=Tu(n.state,e.slice(0,-1));delete r[e[e.length-1]]}),eg(this)};Et.prototype.hasModule=function(e){return typeof e=="string"&&(e=[e]),this._modules.isRegistered(e)};Et.prototype.hotUpdate=function(e){this._modules.update(e),eg(this,!0)};Et.prototype._withCommit=function(e){var n=this._committing;this._committing=!0,e(),this._committing=n};Object.defineProperties(Et.prototype,Iu);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cg=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let s=t.charCodeAt(r);s<128?e[n++]=s:s<2048?(e[n++]=s>>6|192,e[n++]=s&63|128):(s&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(s=65536+((s&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=s>>18|240,e[n++]=s>>12&63|128,e[n++]=s>>6&63|128,e[n++]=s&63|128):(e[n++]=s>>12|224,e[n++]=s>>6&63|128,e[n++]=s&63|128)}return e},Jb=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const s=t[n++];if(s<128)e[r++]=String.fromCharCode(s);else if(s>191&&s<224){const i=t[n++];e[r++]=String.fromCharCode((s&31)<<6|i&63)}else if(s>239&&s<365){const i=t[n++],o=t[n++],a=t[n++],c=((s&7)<<18|(i&63)<<12|(o&63)<<6|a&63)-65536;e[r++]=String.fromCharCode(55296+(c>>10)),e[r++]=String.fromCharCode(56320+(c&1023))}else{const i=t[n++],o=t[n++];e[r++]=String.fromCharCode((s&15)<<12|(i&63)<<6|o&63)}}return e.join("")},lg={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let s=0;s<t.length;s+=3){const i=t[s],o=s+1<t.length,a=o?t[s+1]:0,c=s+2<t.length,l=c?t[s+2]:0,u=i>>2,h=(i&3)<<4|a>>4;let d=(a&15)<<2|l>>6,f=l&63;c||(f=64,o||(d=64)),r.push(n[u],n[h],n[d],n[f])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(cg(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):Jb(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let s=0;s<t.length;){const i=n[t.charAt(s++)],a=s<t.length?n[t.charAt(s)]:0;++s;const l=s<t.length?n[t.charAt(s)]:64;++s;const h=s<t.length?n[t.charAt(s)]:64;if(++s,i==null||a==null||l==null||h==null)throw Error();const d=i<<2|a>>4;if(r.push(d),l!==64){const f=a<<4&240|l>>2;if(r.push(f),h!==64){const m=l<<6&192|h;r.push(m)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}},Zb=function(t){const e=cg(t);return lg.encodeByteArray(e,!0)},ug=function(t){return Zb(t).replace(/\./g,"")},e0=function(t){try{return lg.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class t0{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qe(){return typeof navigator!="undefined"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function hg(){return typeof window!="undefined"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(qe())}function dg(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function fg(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function n0(){return qe().indexOf("Electron/")>=0}function pg(){const t=qe();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function r0(){return qe().indexOf("MSAppHost/")>=0}function s0(){return typeof indexedDB=="object"}function i0(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(r);s.onsuccess=()=>{s.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},s.onupgradeneeded=()=>{n=!1},s.onerror=()=>{var i;e(((i=s.error)===null||i===void 0?void 0:i.message)||"")}}catch(n){e(n)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const o0="FirebaseError";class Kn extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=o0,Object.setPrototypeOf(this,Kn.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Pi.prototype.create)}}class Pi{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},s=`${this.service}/${e}`,i=this.errors[e],o=i?a0(i,r):"Error",a=`${this.serviceName}: ${o} (${s}).`;return new Kn(s,a,r)}}function a0(t,e){return t.replace(c0,(n,r)=>{const s=e[r];return s!=null?String(s):`<${r}?>`})}const c0=/\{\$([^}]+)}/g;function l0(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function jo(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const s of n){if(!r.includes(s))return!1;const i=t[s],o=e[s];if(jd(i)&&jd(o)){if(!jo(i,o))return!1}else if(i!==o)return!1}for(const s of r)if(!n.includes(s))return!1;return!0}function jd(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Li(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(s=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(s))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function u0(t,e){const n=new h0(t,e);return n.subscribe.bind(n)}class h0{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let s;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");d0(e,["next","error","complete"])?s=e:s={next:e,error:n,complete:r},s.next===void 0&&(s.next=Ec),s.error===void 0&&(s.error=Ec),s.complete===void 0&&(s.complete=Ec);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?s.error(this.finalError):s.complete()}catch{}}),this.observers.push(s),i}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console!="undefined"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function d0(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function Ec(){}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Le(t){return t&&t._delegate?t._delegate:t}class Vn{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zn="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class f0{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new t0;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:n});s&&r.resolve(s)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),s=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(i){if(s)return null;throw i}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(m0(e))try{this.getOrInitializeService({instanceIdentifier:Zn})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(n);try{const i=this.getOrInitializeService({instanceIdentifier:s});r.resolve(i)}catch{}}}}clearInstance(e=Zn){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Zn){return this.instances.has(e)}getOptions(e=Zn){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[i,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(i);r===a&&o.resolve(s)}return s}onInit(e,n){var r;const s=this.normalizeInstanceIdentifier(n),i=(r=this.onInitCallbacks.get(s))!==null&&r!==void 0?r:new Set;i.add(e),this.onInitCallbacks.set(s,i);const o=this.instances.get(s);return o&&e(o,s),()=>{i.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(!!r)for(const s of r)try{s(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:p0(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=Zn){return this.component?this.component.multipleInstances?e:Zn:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function p0(t){return t===Zn?void 0:t}function m0(t){return t.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class g0{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new f0(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var ue;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(ue||(ue={}));const y0={debug:ue.DEBUG,verbose:ue.VERBOSE,info:ue.INFO,warn:ue.WARN,error:ue.ERROR,silent:ue.SILENT},v0=ue.INFO,_0={[ue.DEBUG]:"log",[ue.VERBOSE]:"log",[ue.INFO]:"info",[ue.WARN]:"warn",[ue.ERROR]:"error"},w0=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),s=_0[e];if(s)console[s](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Au{constructor(e){this.name=e,this._logLevel=v0,this._logHandler=w0,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in ue))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?y0[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,ue.DEBUG,...e),this._logHandler(this,ue.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,ue.VERBOSE,...e),this._logHandler(this,ue.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,ue.INFO,...e),this._logHandler(this,ue.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,ue.WARN,...e),this._logHandler(this,ue.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,ue.ERROR,...e),this._logHandler(this,ue.ERROR,...e)}}const E0=(t,e)=>e.some(n=>t instanceof n);let qd,Hd;function b0(){return qd||(qd=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function T0(){return Hd||(Hd=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const mg=new WeakMap,yl=new WeakMap,gg=new WeakMap,bc=new WeakMap,Su=new WeakMap;function I0(t){const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("success",i),t.removeEventListener("error",o)},i=()=>{n(Mn(t.result)),s()},o=()=>{r(t.error),s()};t.addEventListener("success",i),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&mg.set(n,t)}).catch(()=>{}),Su.set(e,t),e}function A0(t){if(yl.has(t))return;const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("complete",i),t.removeEventListener("error",o),t.removeEventListener("abort",o)},i=()=>{n(),s()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),s()};t.addEventListener("complete",i),t.addEventListener("error",o),t.addEventListener("abort",o)});yl.set(t,e)}let vl={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return yl.get(t);if(e==="objectStoreNames")return t.objectStoreNames||gg.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Mn(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function S0(t){vl=t(vl)}function C0(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(Tc(this),e,...n);return gg.set(r,e.sort?e.sort():[e]),Mn(r)}:T0().includes(t)?function(...e){return t.apply(Tc(this),e),Mn(mg.get(this))}:function(...e){return Mn(t.apply(Tc(this),e))}}function k0(t){return typeof t=="function"?C0(t):(t instanceof IDBTransaction&&A0(t),E0(t,b0())?new Proxy(t,vl):t)}function Mn(t){if(t instanceof IDBRequest)return I0(t);if(bc.has(t))return bc.get(t);const e=k0(t);return e!==t&&(bc.set(t,e),Su.set(e,t)),e}const Tc=t=>Su.get(t);function x0(t,e,{blocked:n,upgrade:r,blocking:s,terminated:i}={}){const o=indexedDB.open(t,e),a=Mn(o);return r&&o.addEventListener("upgradeneeded",c=>{r(Mn(o.result),c.oldVersion,c.newVersion,Mn(o.transaction))}),n&&o.addEventListener("blocked",()=>n()),a.then(c=>{i&&c.addEventListener("close",()=>i()),s&&c.addEventListener("versionchange",()=>s())}).catch(()=>{}),a}const R0=["get","getKey","getAll","getAllKeys","count"],O0=["put","add","delete","clear"],Ic=new Map;function zd(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(Ic.get(e))return Ic.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,s=O0.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(s||R0.includes(n)))return;const i=async function(o,...a){const c=this.transaction(o,s?"readwrite":"readonly");let l=c.store;return r&&(l=l.index(a.shift())),(await Promise.all([l[n](...a),s&&c.done]))[0]};return Ic.set(e,i),i}S0(t=>hd(gc({},t),{get:(e,n,r)=>zd(e,n)||t.get(e,n,r),has:(e,n)=>!!zd(e,n)||t.has(e,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class N0{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(D0(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function D0(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const _l="@firebase/app",Kd="0.7.24";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Cu=new Au("@firebase/app"),P0="@firebase/app-compat",L0="@firebase/analytics-compat",M0="@firebase/analytics",U0="@firebase/app-check-compat",$0="@firebase/app-check",F0="@firebase/auth",B0="@firebase/auth-compat",V0="@firebase/database",j0="@firebase/database-compat",q0="@firebase/functions",H0="@firebase/functions-compat",z0="@firebase/installations",K0="@firebase/installations-compat",G0="@firebase/messaging",W0="@firebase/messaging-compat",Q0="@firebase/performance",X0="@firebase/performance-compat",Y0="@firebase/remote-config",J0="@firebase/remote-config-compat",Z0="@firebase/storage",eT="@firebase/storage-compat",tT="@firebase/firestore",nT="@firebase/firestore-compat",rT="firebase",sT="9.8.1";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yg="[DEFAULT]",iT={[_l]:"fire-core",[P0]:"fire-core-compat",[M0]:"fire-analytics",[L0]:"fire-analytics-compat",[$0]:"fire-app-check",[U0]:"fire-app-check-compat",[F0]:"fire-auth",[B0]:"fire-auth-compat",[V0]:"fire-rtdb",[j0]:"fire-rtdb-compat",[q0]:"fire-fn",[H0]:"fire-fn-compat",[z0]:"fire-iid",[K0]:"fire-iid-compat",[G0]:"fire-fcm",[W0]:"fire-fcm-compat",[Q0]:"fire-perf",[X0]:"fire-perf-compat",[Y0]:"fire-rc",[J0]:"fire-rc-compat",[Z0]:"fire-gcs",[eT]:"fire-gcs-compat",[tT]:"fire-fst",[nT]:"fire-fst-compat","fire-js":"fire-js",[rT]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qo=new Map,wl=new Map;function oT(t,e){try{t.container.addComponent(e)}catch(n){Cu.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function dr(t){const e=t.name;if(wl.has(e))return Cu.debug(`There were multiple attempts to register component ${e}.`),!1;wl.set(e,t);for(const n of qo.values())oT(n,t);return!0}function Sa(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const aT={["no-app"]:"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["storage-open"]:"Error thrown when opening storage. Original error: {$originalErrorMessage}.",["storage-get"]:"Error thrown when reading from storage. Original error: {$originalErrorMessage}.",["storage-set"]:"Error thrown when writing to storage. Original error: {$originalErrorMessage}.",["storage-delete"]:"Error thrown when deleting from storage. Original error: {$originalErrorMessage}."},fr=new Pi("app","Firebase",aT);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cT{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new Vn("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw fr.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Cs=sT;function lT(t,e={}){typeof e!="object"&&(e={name:e});const n=Object.assign({name:yg,automaticDataCollectionEnabled:!1},e),r=n.name;if(typeof r!="string"||!r)throw fr.create("bad-app-name",{appName:String(r)});const s=qo.get(r);if(s){if(jo(t,s.options)&&jo(n,s.config))return s;throw fr.create("duplicate-app",{appName:r})}const i=new g0(r);for(const a of wl.values())i.addComponent(a);const o=new cT(t,n,i);return qo.set(r,o),o}function ku(t=yg){const e=qo.get(t);if(!e)throw fr.create("no-app",{appName:t});return e}function Yt(t,e,n){var r;let s=(r=iT[t])!==null&&r!==void 0?r:t;n&&(s+=`-${n}`);const i=s.match(/\s|\//),o=e.match(/\s|\//);if(i||o){const a=[`Unable to register library "${s}" with version "${e}":`];i&&a.push(`library name "${s}" contains illegal characters (whitespace or "/")`),i&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Cu.warn(a.join(" "));return}dr(new Vn(`${s}-version`,()=>({library:s,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const uT="firebase-heartbeat-database",hT=1,gi="firebase-heartbeat-store";let Ac=null;function vg(){return Ac||(Ac=x0(uT,hT,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(gi)}}}).catch(t=>{throw fr.create("storage-open",{originalErrorMessage:t.message})})),Ac}async function dT(t){try{return(await vg()).transaction(gi).objectStore(gi).get(_g(t))}catch(e){throw fr.create("storage-get",{originalErrorMessage:e.message})}}async function Gd(t,e){try{const r=(await vg()).transaction(gi,"readwrite");return await r.objectStore(gi).put(e,_g(t)),r.done}catch(n){throw fr.create("storage-set",{originalErrorMessage:n.message})}}function _g(t){return`${t.name}!${t.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fT=1024,pT=30*24*60*60*1e3;class mT{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new yT(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),r=Wd();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===r||this._heartbeatsCache.heartbeats.some(s=>s.date===r)))return this._heartbeatsCache.heartbeats.push({date:r,agent:n}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(s=>{const i=new Date(s.date).valueOf();return Date.now()-i<=pT}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const e=Wd(),{heartbeatsToSend:n,unsentEntries:r}=gT(this._heartbeatsCache.heartbeats),s=ug(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=e,r.length>0?(this._heartbeatsCache.heartbeats=r,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}}function Wd(){return new Date().toISOString().substring(0,10)}function gT(t,e=fT){const n=[];let r=t.slice();for(const s of t){const i=n.find(o=>o.agent===s.agent);if(i){if(i.dates.push(s.date),Qd(n)>e){i.dates.pop();break}}else if(n.push({agent:s.agent,dates:[s.date]}),Qd(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class yT{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return s0()?i0().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await dT(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return Gd(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return Gd(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...e.heartbeats]})}else return}}function Qd(t){return ug(JSON.stringify({version:2,heartbeats:t})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vT(t){dr(new Vn("platform-logger",e=>new N0(e),"PRIVATE")),dr(new Vn("heartbeat",e=>new mT(e),"PRIVATE")),Yt(_l,Kd,t),Yt(_l,Kd,"esm2017"),Yt("fire-js","")}vT("");function xu(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,r=Object.getOwnPropertySymbols(t);s<r.length;s++)e.indexOf(r[s])<0&&Object.prototype.propertyIsEnumerable.call(t,r[s])&&(n[r[s]]=t[r[s]]);return n}function wg(){return{["dependent-sdk-initialized-before-auth"]:"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const _T=wg,Eg=new Pi("auth","Firebase",wg());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xd=new Au("@firebase/auth");function Io(t,...e){Xd.logLevel<=ue.ERROR&&Xd.error(`Auth (${Cs}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nn(t,...e){throw Ru(t,...e)}function Jt(t,...e){return Ru(t,...e)}function bg(t,e,n){const r=Object.assign(Object.assign({},_T()),{[e]:n});return new Pi("auth","Firebase",r).create(e,{appName:t.name})}function wT(t,e,n){const r=n;if(!(e instanceof r))throw r.name!==e.constructor.name&&nn(t,"argument-error"),bg(t,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function Ru(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return Eg.create(t,...e)}function Q(t,e,...n){if(!t)throw Ru(e,...n)}function dn(t){const e="INTERNAL ASSERTION FAILED: "+t;throw Io(e),new Error(e)}function _n(t,e){t||dn(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Yd=new Map;function fn(t){_n(t instanceof Function,"Expected a class definition");let e=Yd.get(t);return e?(_n(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,Yd.set(t,e),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ET(t,e){const n=Sa(t,"auth");if(n.isInitialized()){const s=n.getImmediate(),i=n.getOptions();if(jo(i,e!=null?e:{}))return s;nn(s,"already-initialized")}return n.initialize({options:e})}function bT(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(fn);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function El(){var t;return typeof self!="undefined"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function TT(){return Jd()==="http:"||Jd()==="https:"}function Jd(){var t;return typeof self!="undefined"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function IT(){return typeof navigator!="undefined"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(TT()||dg()||"connection"in navigator)?navigator.onLine:!0}function AT(){if(typeof navigator=="undefined")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mi{constructor(e,n){this.shortDelay=e,this.longDelay=n,_n(n>e,"Short delay should be less than long delay!"),this.isMobile=hg()||fg()}get(){return IT()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ou(t,e){_n(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tg{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self!="undefined"&&"fetch"in self)return self.fetch;dn("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self!="undefined"&&"Headers"in self)return self.Headers;dn("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self!="undefined"&&"Response"in self)return self.Response;dn("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ST={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"internal-error",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const CT=new Mi(3e4,6e4);function kT(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function Ca(t,e,n,r,s={}){return Ig(t,s,async()=>{let i={},o={};r&&(e==="GET"?o=r:i={body:JSON.stringify(r)});const a=Li(Object.assign({key:t.config.apiKey},o)).slice(1),c=await t._getAdditionalHeaders();return c["Content-Type"]="application/json",t.languageCode&&(c["X-Firebase-Locale"]=t.languageCode),Tg.fetch()(Ag(t,t.config.apiHost,n,a),Object.assign({method:e,headers:c,referrerPolicy:"no-referrer"},i))})}async function Ig(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},ST),e);try{const s=new RT(t),i=await Promise.race([n(),s.promise]);s.clearNetworkTimeout();const o=await i.json();if("needConfirmation"in o)throw Sc(t,"account-exists-with-different-credential",o);if(i.ok&&!("errorMessage"in o))return o;{const a=i.ok?o.errorMessage:o.error.message,[c,l]=a.split(" : ");if(c==="FEDERATED_USER_ID_ALREADY_LINKED")throw Sc(t,"credential-already-in-use",o);if(c==="EMAIL_EXISTS")throw Sc(t,"email-already-in-use",o);const u=r[c]||c.toLowerCase().replace(/[_\s]+/g,"-");if(l)throw bg(t,u,l);nn(t,u)}}catch(s){if(s instanceof Kn)throw s;nn(t,"network-request-failed")}}async function xT(t,e,n,r,s={}){const i=await Ca(t,e,n,r,s);return"mfaPendingCredential"in i&&nn(t,"multi-factor-auth-required",{_serverResponse:i}),i}function Ag(t,e,n,r){const s=`${e}${n}?${r}`;return t.config.emulator?Ou(t.config,s):`${t.config.apiScheme}://${s}`}class RT{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(Jt(this.auth,"network-request-failed")),CT.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function Sc(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const s=Jt(t,e,r);return s.customData._tokenResponse=n,s}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function OT(t,e){return Ca(t,"POST","/v1/accounts:delete",e)}async function NT(t,e){return Ca(t,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ni(t){if(!!t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function DT(t,e=!1){const n=Le(t),r=await n.getIdToken(e),s=Nu(r);Q(s&&s.exp&&s.auth_time&&s.iat,n.auth,"internal-error");const i=typeof s.firebase=="object"?s.firebase:void 0,o=i==null?void 0:i.sign_in_provider;return{claims:s,token:r,authTime:ni(Cc(s.auth_time)),issuedAtTime:ni(Cc(s.iat)),expirationTime:ni(Cc(s.exp)),signInProvider:o||null,signInSecondFactor:(i==null?void 0:i.sign_in_second_factor)||null}}function Cc(t){return Number(t)*1e3}function Nu(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return Io("JWT malformed, contained fewer than 3 sections"),null;try{const s=e0(n);return s?JSON.parse(s):(Io("Failed to decode base64 JWT payload"),null)}catch(s){return Io("Caught error parsing JWT payload as JSON",s),null}}function PT(t){const e=Nu(t);return Q(e,"internal-error"),Q(typeof e.exp!="undefined","internal-error"),Q(typeof e.iat!="undefined","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function yi(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof Kn&&LT(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function LT({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class MT{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){!this.isRunning||(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const s=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,s)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){e.code==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sg{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=ni(this.lastLoginAt),this.creationTime=ni(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ho(t){var e;const n=t.auth,r=await t.getIdToken(),s=await yi(t,NT(n,{idToken:r}));Q(s==null?void 0:s.users.length,n,"internal-error");const i=s.users[0];t._notifyReloadListener(i);const o=!((e=i.providerUserInfo)===null||e===void 0)&&e.length?FT(i.providerUserInfo):[],a=$T(t.providerData,o),c=t.isAnonymous,l=!(t.email&&i.passwordHash)&&!(a!=null&&a.length),u=c?l:!1,h={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:a,metadata:new Sg(i.createdAt,i.lastLoginAt),isAnonymous:u};Object.assign(t,h)}async function UT(t){const e=Le(t);await Ho(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function $T(t,e){return[...t.filter(r=>!e.some(s=>s.providerId===r.providerId)),...e]}function FT(t){return t.map(e=>{var{providerId:n}=e,r=xu(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function BT(t,e){const n=await Ig(t,{},async()=>{const r=Li({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:s,apiKey:i}=t.config,o=Ag(t,s,"/v1/token",`key=${i}`),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",Tg.fetch()(o,{method:"POST",headers:a,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vi{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){Q(e.idToken,"internal-error"),Q(typeof e.idToken!="undefined","internal-error"),Q(typeof e.refreshToken!="undefined","internal-error");const n="expiresIn"in e&&typeof e.expiresIn!="undefined"?Number(e.expiresIn):PT(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}async getToken(e,n=!1){return Q(!this.accessToken||this.refreshToken,e,"user-token-expired"),!n&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:s,expiresIn:i}=await BT(e,n);this.updateTokensAndExpiration(r,s,Number(i))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:s,expirationTime:i}=n,o=new vi;return r&&(Q(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),s&&(Q(typeof s=="string","internal-error",{appName:e}),o.accessToken=s),i&&(Q(typeof i=="number","internal-error",{appName:e}),o.expirationTime=i),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new vi,this.toJSON())}_performRefresh(){return dn("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Tn(t,e){Q(typeof t=="string"||typeof t=="undefined","internal-error",{appName:e})}class cr{constructor(e){var{uid:n,auth:r,stsTokenManager:s}=e,i=xu(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new MT(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=s,this.accessToken=s.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new Sg(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){const n=await yi(this,this.stsTokenManager.getToken(this.auth,e));return Q(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return DT(this,e)}reload(){return UT(this)}_assign(e){this!==e&&(Q(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){return new cr(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}))}_onReload(e){Q(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await Ho(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await yi(this,OT(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,s,i,o,a,c,l,u;const h=(r=n.displayName)!==null&&r!==void 0?r:void 0,d=(s=n.email)!==null&&s!==void 0?s:void 0,f=(i=n.phoneNumber)!==null&&i!==void 0?i:void 0,m=(o=n.photoURL)!==null&&o!==void 0?o:void 0,E=(a=n.tenantId)!==null&&a!==void 0?a:void 0,_=(c=n._redirectEventId)!==null&&c!==void 0?c:void 0,y=(l=n.createdAt)!==null&&l!==void 0?l:void 0,C=(u=n.lastLoginAt)!==null&&u!==void 0?u:void 0,{uid:L,emailVerified:F,isAnonymous:re,providerData:ce,stsTokenManager:Ne}=n;Q(L&&Ne,e,"internal-error");const Ke=vi.fromJSON(this.name,Ne);Q(typeof L=="string",e,"internal-error"),Tn(h,e.name),Tn(d,e.name),Q(typeof F=="boolean",e,"internal-error"),Q(typeof re=="boolean",e,"internal-error"),Tn(f,e.name),Tn(m,e.name),Tn(E,e.name),Tn(_,e.name),Tn(y,e.name),Tn(C,e.name);const Fe=new cr({uid:L,auth:e,email:d,emailVerified:F,displayName:h,isAnonymous:re,photoURL:m,phoneNumber:f,tenantId:E,stsTokenManager:Ke,createdAt:y,lastLoginAt:C});return ce&&Array.isArray(ce)&&(Fe.providerData=ce.map(jt=>Object.assign({},jt))),_&&(Fe._redirectEventId=_),Fe}static async _fromIdTokenResponse(e,n,r=!1){const s=new vi;s.updateFromServerResponse(n);const i=new cr({uid:n.localId,auth:e,stsTokenManager:s,isAnonymous:r});return await Ho(i),i}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cg{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}Cg.type="NONE";const Zd=Cg;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ao(t,e,n){return`firebase:${t}:${e}:${n}`}class es{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:s,name:i}=this.auth;this.fullUserKey=Ao(this.userKey,s.apiKey,i),this.fullPersistenceKey=Ao("persistence",s.apiKey,i),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?cr._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new es(fn(Zd),e,r);const s=(await Promise.all(n.map(async l=>{if(await l._isAvailable())return l}))).filter(l=>l);let i=s[0]||fn(Zd);const o=Ao(r,e.config.apiKey,e.name);let a=null;for(const l of n)try{const u=await l._get(o);if(u){const h=cr._fromJSON(e,u);l!==i&&(a=h),i=l;break}}catch{}const c=s.filter(l=>l._shouldAllowMigration);return!i._shouldAllowMigration||!c.length?new es(i,e,r):(i=c[0],a&&await i._set(o,a.toJSON()),await Promise.all(n.map(async l=>{if(l!==i)try{await l._remove(o)}catch{}})),new es(i,e,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ef(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(Rg(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(kg(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(Ng(e))return"Blackberry";if(Dg(e))return"Webos";if(Du(e))return"Safari";if((e.includes("chrome/")||xg(e))&&!e.includes("edge/"))return"Chrome";if(Og(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function kg(t=qe()){return/firefox\//i.test(t)}function Du(t=qe()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function xg(t=qe()){return/crios\//i.test(t)}function Rg(t=qe()){return/iemobile/i.test(t)}function Og(t=qe()){return/android/i.test(t)}function Ng(t=qe()){return/blackberry/i.test(t)}function Dg(t=qe()){return/webos/i.test(t)}function ka(t=qe()){return/iphone|ipad|ipod/i.test(t)}function VT(t=qe()){var e;return ka(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function jT(){return pg()&&document.documentMode===10}function Pg(t=qe()){return ka(t)||Og(t)||Dg(t)||Ng(t)||/windows phone/i.test(t)||Rg(t)}function qT(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Lg(t,e=[]){let n;switch(t){case"Browser":n=ef(qe());break;case"Worker":n=`${ef(qe())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${Cs}/${r}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class HT{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=i=>new Promise((o,a)=>{try{const c=e(i);o(c)}catch(c){a(c)}});r.onAbort=n,this.queue.push(r);const s=this.queue.length-1;return()=>{this.queue[s]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const s of n)try{s()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r.message})}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zT{constructor(e,n,r){this.app=e,this.heartbeatServiceProvider=n,this.config=r,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new tf(this),this.idTokenSubscription=new tf(this),this.beforeStateQueue=new HT(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Eg,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=r.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=fn(n)),this._initializationPromise=this.queue(async()=>{var r,s;if(!this._deleted&&(this.persistenceManager=await es.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((s=this.currentUser)===null||s===void 0?void 0:s.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUser(e){var n;const r=await this.assertedPersistence.getCurrentUser();let s=r,i=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,a=s==null?void 0:s._redirectEventId,c=await this.tryRedirectSignIn(e);(!o||o===a)&&(c==null?void 0:c.user)&&(s=c.user,i=!0)}if(!s)return this.directlySetCurrentUser(null);if(!s._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(s)}catch(o){s=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return s?this.reloadAndSetCurrentUserOrClear(s):this.directlySetCurrentUser(null)}return Q(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===s._redirectEventId?this.directlySetCurrentUser(s):this.reloadAndSetCurrentUserOrClear(s)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await Ho(e)}catch(n){if(n.code!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=AT()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const n=e?Le(e):null;return n&&Q(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&Q(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(e){return this.queue(async()=>{await this.assertedPersistence.setPersistence(fn(e))})}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new Pi("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&fn(e)||this._popupRedirectResolver;Q(n,this,"argument-error"),this.redirectPersistenceManager=await es.create(this,[fn(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,s){if(this._deleted)return()=>{};const i=typeof n=="function"?n:n.next.bind(n),o=this._isInitialized?Promise.resolve():this._initializationPromise;return Q(o,this,"internal-error"),o.then(()=>i(this.currentUser)),typeof n=="function"?e.addObserver(n,r,s):e.addObserver(n)}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&(this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh()),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return Q(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Lg(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={["X-Client-Version"]:this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());return r&&(n["X-Firebase-Client"]=r),n}}function Pu(t){return Le(t)}class tf{constructor(e){this.auth=e,this.observer=null,this.addObserver=u0(n=>this.observer=n)}get next(){return Q(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mg{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return dn("not implemented")}_getIdTokenResponse(e){return dn("not implemented")}_linkToIdToken(e,n){return dn("not implemented")}_getReauthenticationResolver(e){return dn("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ts(t,e){return xT(t,"POST","/v1/accounts:signInWithIdp",kT(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const KT="http://localhost";class pr extends Mg{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new pr(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):nn("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:s}=n,i=xu(n,["providerId","signInMethod"]);if(!r||!s)return null;const o=new pr(r,s);return o.idToken=i.idToken||void 0,o.accessToken=i.accessToken||void 0,o.secret=i.secret,o.nonce=i.nonce,o.pendingToken=i.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return ts(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,ts(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,ts(e,n)}buildRequest(){const e={requestUri:KT,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=Li(n)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lu{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ui extends Lu{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class un extends Ui{constructor(){super("facebook.com")}static credential(e){return pr._fromParams({providerId:un.PROVIDER_ID,signInMethod:un.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return un.credentialFromTaggedObject(e)}static credentialFromError(e){return un.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return un.credential(e.oauthAccessToken)}catch{return null}}}un.FACEBOOK_SIGN_IN_METHOD="facebook.com";un.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hn extends Ui{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return pr._fromParams({providerId:hn.PROVIDER_ID,signInMethod:hn.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return hn.credentialFromTaggedObject(e)}static credentialFromError(e){return hn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return hn.credential(n,r)}catch{return null}}}hn.GOOGLE_SIGN_IN_METHOD="google.com";hn.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rn extends Ui{constructor(){super("github.com")}static credential(e){return pr._fromParams({providerId:Rn.PROVIDER_ID,signInMethod:Rn.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Rn.credentialFromTaggedObject(e)}static credentialFromError(e){return Rn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Rn.credential(e.oauthAccessToken)}catch{return null}}}Rn.GITHUB_SIGN_IN_METHOD="github.com";Rn.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class On extends Ui{constructor(){super("twitter.com")}static credential(e,n){return pr._fromParams({providerId:On.PROVIDER_ID,signInMethod:On.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return On.credentialFromTaggedObject(e)}static credentialFromError(e){return On.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return On.credential(n,r)}catch{return null}}}On.TWITTER_SIGN_IN_METHOD="twitter.com";On.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class as{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,s=!1){const i=await cr._fromIdTokenResponse(e,r,s),o=nf(r);return new as({user:i,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const s=nf(r);return new as({user:e,providerId:s,_tokenResponse:r,operationType:n})}}function nf(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zo extends Kn{constructor(e,n,r,s){var i;super(n.code,n.message),this.operationType=r,this.user=s,Object.setPrototypeOf(this,zo.prototype),this.customData={appName:e.name,tenantId:(i=e.tenantId)!==null&&i!==void 0?i:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,s){return new zo(e,n,r,s)}}function Ug(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(i=>{throw i.code==="auth/multi-factor-auth-required"?zo._fromErrorAndOperation(t,i,e,r):i})}async function GT(t,e,n=!1){const r=await yi(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return as._forOperation(t,"link",r)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function WT(t,e,n=!1){const{auth:r}=t,s="reauthenticate";try{const i=await yi(t,Ug(r,s,e,t),n);Q(i.idToken,r,"internal-error");const o=Nu(i.idToken);Q(o,r,"internal-error");const{sub:a}=o;return Q(t.uid===a,r,"user-mismatch"),as._forOperation(t,s,i)}catch(i){throw(i==null?void 0:i.code)==="auth/user-not-found"&&nn(r,"user-mismatch"),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function QT(t,e,n=!1){const r="signIn",s=await Ug(t,r,e),i=await as._fromIdTokenResponse(t,r,s);return n||await t._updateCurrentUser(i.user),i}function XT(t,e,n,r){return Le(t).onAuthStateChanged(e,n,r)}function YT(t){return Le(t).signOut()}const Ko="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $g{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(Ko,"1"),this.storage.removeItem(Ko),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function JT(){const t=qe();return Du(t)||ka(t)}const ZT=1e3,e1=10;class Fg extends $g{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=JT()&&qT(),this.fallbackToPolling=Pg(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),s=this.localCache[n];r!==s&&e(n,s,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,a,c)=>{this.notifyListeners(o,c)});return}const r=e.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(r);if(e.newValue!==o)e.newValue!==null?this.storage.setItem(r,e.newValue):this.storage.removeItem(r);else if(this.localCache[r]===e.newValue&&!n)return}const s=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},i=this.storage.getItem(r);jT()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(s,e1):s()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},ZT)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}Fg.type="LOCAL";const t1=Fg;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bg extends $g{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}Bg.type="SESSION";const Vg=Bg;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function n1(t){return Promise.all(t.map(async e=>{try{const n=await e;return{fulfilled:!0,value:n}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xa{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(s=>s.isListeningto(e));if(n)return n;const r=new xa(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:s,data:i}=n.data,o=this.handlersMap[s];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:s});const a=Array.from(o).map(async l=>l(n.origin,i)),c=await n1(a);n.ports[0].postMessage({status:"done",eventId:r,eventType:s,response:c})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}xa.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Mu(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class r1{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const s=typeof MessageChannel!="undefined"?new MessageChannel:null;if(!s)throw new Error("connection_unavailable");let i,o;return new Promise((a,c)=>{const l=Mu("",20);s.port1.start();const u=setTimeout(()=>{c(new Error("unsupported_event"))},r);o={messageChannel:s,onMessage(h){const d=h;if(d.data.eventId===l)switch(d.data.status){case"ack":clearTimeout(u),i=setTimeout(()=>{c(new Error("timeout"))},3e3);break;case"done":clearTimeout(i),a(d.data.response);break;default:clearTimeout(u),clearTimeout(i),c(new Error("invalid_response"));break}}},this.handlers.add(o),s.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:l,data:n},[s.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Zt(){return window}function s1(t){Zt().location.href=t}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jg(){return typeof Zt().WorkerGlobalScope!="undefined"&&typeof Zt().importScripts=="function"}async function i1(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function o1(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function a1(){return jg()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qg="firebaseLocalStorageDb",c1=1,Go="firebaseLocalStorage",Hg="fbase_key";class $i{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function Ra(t,e){return t.transaction([Go],e?"readwrite":"readonly").objectStore(Go)}function l1(){const t=indexedDB.deleteDatabase(qg);return new $i(t).toPromise()}function bl(){const t=indexedDB.open(qg,c1);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(Go,{keyPath:Hg})}catch(s){n(s)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(Go)?e(r):(r.close(),await l1(),e(await bl()))})})}async function rf(t,e,n){const r=Ra(t,!0).put({[Hg]:e,value:n});return new $i(r).toPromise()}async function u1(t,e){const n=Ra(t,!1).get(e),r=await new $i(n).toPromise();return r===void 0?null:r.value}function sf(t,e){const n=Ra(t,!0).delete(e);return new $i(n).toPromise()}const h1=800,d1=3;class zg{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await bl(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>d1)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return jg()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=xa._getInstance(a1()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await i1(),!this.activeServiceWorker)return;this.sender=new r1(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);!r||((e=r[0])===null||e===void 0?void 0:e.fulfilled)&&((n=r[0])===null||n===void 0?void 0:n.value.includes("keyChanged"))&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||o1()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await bl();return await rf(e,Ko,"1"),await sf(e,Ko),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>rf(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>u1(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>sf(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(s=>{const i=Ra(s,!1).getAll();return new $i(i).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;for(const{fbase_key:s,value:i}of e)r.add(s),JSON.stringify(this.localCache[s])!==JSON.stringify(i)&&(this.notifyListeners(s,i),n.push(s));for(const s of Object.keys(this.localCache))this.localCache[s]&&!r.has(s)&&(this.notifyListeners(s,null),n.push(s));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),h1)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}zg.type="LOCAL";const f1=zg;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function p1(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}function m1(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=s=>{const i=Jt("internal-error");i.customData=s,n(i)},r.type="text/javascript",r.charset="UTF-8",p1().appendChild(r)})}function g1(t){return`__${t}${Math.floor(Math.random()*1e6)}`}new Mi(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Kg(t,e){return e?fn(e):(Q(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Uu extends Mg{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return ts(e,this._buildIdpRequest())}_linkToIdToken(e,n){return ts(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return ts(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function y1(t){return QT(t.auth,new Uu(t),t.bypassAuthState)}function v1(t){const{auth:e,user:n}=t;return Q(n,e,"internal-error"),WT(n,new Uu(t),t.bypassAuthState)}async function _1(t){const{auth:e,user:n}=t;return Q(n,e,"internal-error"),GT(n,new Uu(t),t.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gg{constructor(e,n,r,s,i=!1){this.auth=e,this.resolver=r,this.user=s,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:s,tenantId:i,error:o,type:a}=e;if(o){this.reject(o);return}const c={auth:this.auth,requestUri:n,sessionId:r,tenantId:i||void 0,postBody:s||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(c))}catch(l){this.reject(l)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return y1;case"linkViaPopup":case"linkViaRedirect":return _1;case"reauthViaPopup":case"reauthViaRedirect":return v1;default:nn(this.auth,"internal-error")}}resolve(e){_n(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){_n(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const w1=new Mi(2e3,1e4);async function E1(t,e,n){const r=Pu(t);wT(t,e,Lu);const s=Kg(r,n);return new nr(r,"signInViaPopup",e,s).executeNotNull()}class nr extends Gg{constructor(e,n,r,s,i){super(e,n,s,i),this.provider=r,this.authWindow=null,this.pollId=null,nr.currentPopupAction&&nr.currentPopupAction.cancel(),nr.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return Q(e,this.auth,"internal-error"),e}async onExecution(){_n(this.filter.length===1,"Popup operations only handle one event");const e=Mu();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(Jt(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(Jt(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,nr.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Jt(this.auth,"popup-closed-by-user"))},2e3);return}this.pollId=window.setTimeout(e,w1.get())};e()}}nr.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const b1="pendingRedirect",So=new Map;class T1 extends Gg{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=So.get(this.auth._key());if(!e){try{const r=await I1(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}So.set(this.auth._key(),e)}return this.bypassAuthState||So.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function I1(t,e){const n=C1(e),r=S1(t);if(!await r._isAvailable())return!1;const s=await r._get(n)==="true";return await r._remove(n),s}function A1(t,e){So.set(t._key(),e)}function S1(t){return fn(t._redirectPersistence)}function C1(t){return Ao(b1,t.config.apiKey,t.name)}async function k1(t,e,n=!1){const r=Pu(t),s=Kg(r,e),o=await new T1(r,s,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const x1=10*60*1e3;class R1{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!O1(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!Wg(e)){const s=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(Jt(this.auth,s))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=x1&&this.cachedEventUids.clear(),this.cachedEventUids.has(of(e))}saveEventToCache(e){this.cachedEventUids.add(of(e)),this.lastProcessedEventTime=Date.now()}}function of(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function Wg({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function O1(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Wg(t);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function N1(t,e={}){return Ca(t,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const D1=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,P1=/^https?/;async function L1(t){if(t.config.emulator)return;const{authorizedDomains:e}=await N1(t);for(const n of e)try{if(M1(n))return}catch{}nn(t,"unauthorized-domain")}function M1(t){const e=El(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!P1.test(n))return!1;if(D1.test(t))return r===t;const s=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+s+"|"+s+")$","i").test(r)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const U1=new Mi(3e4,6e4);function af(){const t=Zt().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function $1(t){return new Promise((e,n)=>{var r,s,i;function o(){af(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{af(),n(Jt(t,"network-request-failed"))},timeout:U1.get()})}if(!((s=(r=Zt().gapi)===null||r===void 0?void 0:r.iframes)===null||s===void 0)&&s.Iframe)e(gapi.iframes.getContext());else if(!((i=Zt().gapi)===null||i===void 0)&&i.load)o();else{const a=g1("iframefcb");return Zt()[a]=()=>{gapi.load?o():n(Jt(t,"network-request-failed"))},m1(`https://apis.google.com/js/api.js?onload=${a}`).catch(c=>n(c))}}).catch(e=>{throw Co=null,e})}let Co=null;function F1(t){return Co=Co||$1(t),Co}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const B1=new Mi(5e3,15e3),V1="__/auth/iframe",j1="emulator/auth/iframe",q1={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},H1=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function z1(t){const e=t.config;Q(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?Ou(e,j1):`https://${t.config.authDomain}/${V1}`,r={apiKey:e.apiKey,appName:t.name,v:Cs},s=H1.get(t.config.apiHost);s&&(r.eid=s);const i=t._getFrameworks();return i.length&&(r.fw=i.join(",")),`${n}?${Li(r).slice(1)}`}async function K1(t){const e=await F1(t),n=Zt().gapi;return Q(n,t,"internal-error"),e.open({where:document.body,url:z1(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:q1,dontclear:!0},r=>new Promise(async(s,i)=>{await r.restyle({setHideOnLeave:!1});const o=Jt(t,"network-request-failed"),a=Zt().setTimeout(()=>{i(o)},B1.get());function c(){Zt().clearTimeout(a),s(r)}r.ping(c).then(c,()=>{i(o)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const G1={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},W1=500,Q1=600,X1="_blank",Y1="http://localhost";class cf{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function J1(t,e,n,r=W1,s=Q1){const i=Math.max((window.screen.availHeight-s)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let a="";const c=Object.assign(Object.assign({},G1),{width:r.toString(),height:s.toString(),top:i,left:o}),l=qe().toLowerCase();n&&(a=xg(l)?X1:n),kg(l)&&(e=e||Y1,c.scrollbars="yes");const u=Object.entries(c).reduce((d,[f,m])=>`${d}${f}=${m},`,"");if(VT(l)&&a!=="_self")return Z1(e||"",a),new cf(null);const h=window.open(e||"",a,u);Q(h,t,"popup-blocked");try{h.focus()}catch{}return new cf(h)}function Z1(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const eI="__/auth/handler",tI="emulator/auth/handler";function lf(t,e,n,r,s,i){Q(t.config.authDomain,t,"auth-domain-config-required"),Q(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:Cs,eventId:s};if(e instanceof Lu){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",l0(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[c,l]of Object.entries(i||{}))o[c]=l}if(e instanceof Ui){const c=e.getScopes().filter(l=>l!=="");c.length>0&&(o.scopes=c.join(","))}t.tenantId&&(o.tid=t.tenantId);const a=o;for(const c of Object.keys(a))a[c]===void 0&&delete a[c];return`${nI(t)}?${Li(a).slice(1)}`}function nI({config:t}){return t.emulator?Ou(t,tI):`https://${t.authDomain}/${eI}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kc="webStorageSupport";class rI{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Vg,this._completeRedirectFn=k1,this._overrideRedirectResult=A1}async _openPopup(e,n,r,s){var i;_n((i=this.eventManagers[e._key()])===null||i===void 0?void 0:i.manager,"_initialize() not called before _openPopup()");const o=lf(e,n,r,El(),s);return J1(e,o,Mu())}async _openRedirect(e,n,r,s){return await this._originValidation(e),s1(lf(e,n,r,El(),s)),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:s,promise:i}=this.eventManagers[n];return s?Promise.resolve(s):(_n(i,"If manager is not set, promise should be"),i)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await K1(e),r=new R1(e);return n.register("authEvent",s=>(Q(s==null?void 0:s.authEvent,e,"invalid-auth-event"),{status:r.onEvent(s.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(kc,{type:kc},s=>{var i;const o=(i=s==null?void 0:s[0])===null||i===void 0?void 0:i[kc];o!==void 0&&n(!!o),nn(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=L1(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return Pg()||Du()||ka()}}const sI=rI;var uf="@firebase/auth",hf="0.20.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iI{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{var s;e(((s=r)===null||s===void 0?void 0:s.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);!n||(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){Q(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function oI(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function aI(t){dr(new Vn("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),s=e.getProvider("heartbeat"),{apiKey:i,authDomain:o}=r.options;return((a,c)=>{Q(i&&!i.includes(":"),"invalid-api-key",{appName:a.name}),Q(!(o!=null&&o.includes(":")),"argument-error",{appName:a.name});const l={apiKey:i,authDomain:o,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Lg(t)},u=new zT(a,c,l);return bT(u,n),u})(r,s)},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),dr(new Vn("auth-internal",e=>{const n=Pu(e.getProvider("auth").getImmediate());return(r=>new iI(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),Yt(uf,hf,oI(t)),Yt(uf,hf,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function cI(t=ku()){const e=Sa(t,"auth");return e.isInitialized()?e.getImmediate():ET(t,{popupRedirectResolver:sI,persistence:[f1,t1,Vg]})}aI("Browser");var lI=typeof globalThis!="undefined"?globalThis:typeof window!="undefined"?window:typeof global!="undefined"?global:typeof self!="undefined"?self:{},$,$u=$u||{},G=lI||self;function Wo(){}function Tl(t){var e=typeof t;return e=e!="object"?e:t?Array.isArray(t)?"array":e:"null",e=="array"||e=="object"&&typeof t.length=="number"}function Fi(t){var e=typeof t;return e=="object"&&t!=null||e=="function"}function uI(t){return Object.prototype.hasOwnProperty.call(t,xc)&&t[xc]||(t[xc]=++hI)}var xc="closure_uid_"+(1e9*Math.random()>>>0),hI=0;function dI(t,e,n){return t.call.apply(t.bind,arguments)}function fI(t,e,n){if(!t)throw Error();if(2<arguments.length){var r=Array.prototype.slice.call(arguments,2);return function(){var s=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(s,r),t.apply(e,s)}}return function(){return t.apply(e,arguments)}}function Xe(t,e,n){return Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?Xe=dI:Xe=fI,Xe.apply(null,arguments)}function lo(t,e){var n=Array.prototype.slice.call(arguments,1);return function(){var r=n.slice();return r.push.apply(r,arguments),t.apply(this,r)}}function tt(t,e){function n(){}n.prototype=e.prototype,t.Z=e.prototype,t.prototype=new n,t.prototype.constructor=t,t.Vb=function(r,s,i){for(var o=Array(arguments.length-2),a=2;a<arguments.length;a++)o[a-2]=arguments[a];return e.prototype[s].apply(r,o)}}function Gn(){this.s=this.s,this.o=this.o}var pI=0;Gn.prototype.s=!1;Gn.prototype.na=function(){!this.s&&(this.s=!0,this.M(),pI!=0)&&uI(this)};Gn.prototype.M=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const Qg=Array.prototype.indexOf?function(t,e){return Array.prototype.indexOf.call(t,e,void 0)}:function(t,e){if(typeof t=="string")return typeof e!="string"||e.length!=1?-1:t.indexOf(e,0);for(let n=0;n<t.length;n++)if(n in t&&t[n]===e)return n;return-1},Xg=Array.prototype.forEach?function(t,e,n){Array.prototype.forEach.call(t,e,n)}:function(t,e,n){const r=t.length,s=typeof t=="string"?t.split(""):t;for(let i=0;i<r;i++)i in s&&e.call(n,s[i],i,t)};function mI(t){e:{var e=oA;const n=t.length,r=typeof t=="string"?t.split(""):t;for(let s=0;s<n;s++)if(s in r&&e.call(void 0,r[s],s,t)){e=s;break e}e=-1}return 0>e?null:typeof t=="string"?t.charAt(e):t[e]}function df(t){return Array.prototype.concat.apply([],arguments)}function Fu(t){const e=t.length;if(0<e){const n=Array(e);for(let r=0;r<e;r++)n[r]=t[r];return n}return[]}function Qo(t){return/^[\s\xa0]*$/.test(t)}var ff=String.prototype.trim?function(t){return t.trim()}:function(t){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(t)[1]};function lt(t,e){return t.indexOf(e)!=-1}function Rc(t,e){return t<e?-1:t>e?1:0}var ut;e:{var pf=G.navigator;if(pf){var mf=pf.userAgent;if(mf){ut=mf;break e}}ut=""}function Bu(t,e,n){for(const r in t)e.call(n,t[r],r,t)}function Yg(t){const e={};for(const n in t)e[n]=t[n];return e}var gf="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function Jg(t,e){let n,r;for(let s=1;s<arguments.length;s++){r=arguments[s];for(n in r)t[n]=r[n];for(let i=0;i<gf.length;i++)n=gf[i],Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])}}function Vu(t){return Vu[" "](t),t}Vu[" "]=Wo;function gI(t){var e=_I;return Object.prototype.hasOwnProperty.call(e,9)?e[9]:e[9]=t(9)}var yI=lt(ut,"Opera"),cs=lt(ut,"Trident")||lt(ut,"MSIE"),Zg=lt(ut,"Edge"),Il=Zg||cs,ey=lt(ut,"Gecko")&&!(lt(ut.toLowerCase(),"webkit")&&!lt(ut,"Edge"))&&!(lt(ut,"Trident")||lt(ut,"MSIE"))&&!lt(ut,"Edge"),vI=lt(ut.toLowerCase(),"webkit")&&!lt(ut,"Edge");function ty(){var t=G.document;return t?t.documentMode:void 0}var Xo;e:{var Oc="",Nc=function(){var t=ut;if(ey)return/rv:([^\);]+)(\)|;)/.exec(t);if(Zg)return/Edge\/([\d\.]+)/.exec(t);if(cs)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(t);if(vI)return/WebKit\/(\S+)/.exec(t);if(yI)return/(?:Version)[ \/]?(\S+)/.exec(t)}();if(Nc&&(Oc=Nc?Nc[1]:""),cs){var Dc=ty();if(Dc!=null&&Dc>parseFloat(Oc)){Xo=String(Dc);break e}}Xo=Oc}var _I={};function wI(){return gI(function(){let t=0;const e=ff(String(Xo)).split("."),n=ff("9").split("."),r=Math.max(e.length,n.length);for(let o=0;t==0&&o<r;o++){var s=e[o]||"",i=n[o]||"";do{if(s=/(\d*)(\D*)(.*)/.exec(s)||["","","",""],i=/(\d*)(\D*)(.*)/.exec(i)||["","","",""],s[0].length==0&&i[0].length==0)break;t=Rc(s[1].length==0?0:parseInt(s[1],10),i[1].length==0?0:parseInt(i[1],10))||Rc(s[2].length==0,i[2].length==0)||Rc(s[2],i[2]),s=s[3],i=i[3]}while(t==0)}return 0<=t})}var Al;if(G.document&&cs){var yf=ty();Al=yf||parseInt(Xo,10)||void 0}else Al=void 0;var EI=Al,bI=function(){if(!G.addEventListener||!Object.defineProperty)return!1;var t=!1,e=Object.defineProperty({},"passive",{get:function(){t=!0}});try{G.addEventListener("test",Wo,e),G.removeEventListener("test",Wo,e)}catch{}return t}();function st(t,e){this.type=t,this.g=this.target=e,this.defaultPrevented=!1}st.prototype.h=function(){this.defaultPrevented=!0};function _i(t,e){if(st.call(this,t?t.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,t){var n=this.type=t.type,r=t.changedTouches&&t.changedTouches.length?t.changedTouches[0]:null;if(this.target=t.target||t.srcElement,this.g=e,e=t.relatedTarget){if(ey){e:{try{Vu(e.nodeName);var s=!0;break e}catch{}s=!1}s||(e=null)}}else n=="mouseover"?e=t.fromElement:n=="mouseout"&&(e=t.toElement);this.relatedTarget=e,r?(this.clientX=r.clientX!==void 0?r.clientX:r.pageX,this.clientY=r.clientY!==void 0?r.clientY:r.pageY,this.screenX=r.screenX||0,this.screenY=r.screenY||0):(this.clientX=t.clientX!==void 0?t.clientX:t.pageX,this.clientY=t.clientY!==void 0?t.clientY:t.pageY,this.screenX=t.screenX||0,this.screenY=t.screenY||0),this.button=t.button,this.key=t.key||"",this.ctrlKey=t.ctrlKey,this.altKey=t.altKey,this.shiftKey=t.shiftKey,this.metaKey=t.metaKey,this.pointerId=t.pointerId||0,this.pointerType=typeof t.pointerType=="string"?t.pointerType:TI[t.pointerType]||"",this.state=t.state,this.i=t,t.defaultPrevented&&_i.Z.h.call(this)}}tt(_i,st);var TI={2:"touch",3:"pen",4:"mouse"};_i.prototype.h=function(){_i.Z.h.call(this);var t=this.i;t.preventDefault?t.preventDefault():t.returnValue=!1};var Bi="closure_listenable_"+(1e6*Math.random()|0),II=0;function AI(t,e,n,r,s){this.listener=t,this.proxy=null,this.src=e,this.type=n,this.capture=!!r,this.ia=s,this.key=++II,this.ca=this.fa=!1}function Oa(t){t.ca=!0,t.listener=null,t.proxy=null,t.src=null,t.ia=null}function Na(t){this.src=t,this.g={},this.h=0}Na.prototype.add=function(t,e,n,r,s){var i=t.toString();t=this.g[i],t||(t=this.g[i]=[],this.h++);var o=Cl(t,e,r,s);return-1<o?(e=t[o],n||(e.fa=!1)):(e=new AI(e,this.src,i,!!r,s),e.fa=n,t.push(e)),e};function Sl(t,e){var n=e.type;if(n in t.g){var r=t.g[n],s=Qg(r,e),i;(i=0<=s)&&Array.prototype.splice.call(r,s,1),i&&(Oa(e),t.g[n].length==0&&(delete t.g[n],t.h--))}}function Cl(t,e,n,r){for(var s=0;s<t.length;++s){var i=t[s];if(!i.ca&&i.listener==e&&i.capture==!!n&&i.ia==r)return s}return-1}var ju="closure_lm_"+(1e6*Math.random()|0),Pc={};function ny(t,e,n,r,s){if(r&&r.once)return sy(t,e,n,r,s);if(Array.isArray(e)){for(var i=0;i<e.length;i++)ny(t,e[i],n,r,s);return null}return n=zu(n),t&&t[Bi]?t.N(e,n,Fi(r)?!!r.capture:!!r,s):ry(t,e,n,!1,r,s)}function ry(t,e,n,r,s,i){if(!e)throw Error("Invalid event type");var o=Fi(s)?!!s.capture:!!s,a=Hu(t);if(a||(t[ju]=a=new Na(t)),n=a.add(e,n,r,o,i),n.proxy)return n;if(r=SI(),n.proxy=r,r.src=t,r.listener=n,t.addEventListener)bI||(s=o),s===void 0&&(s=!1),t.addEventListener(e.toString(),r,s);else if(t.attachEvent)t.attachEvent(oy(e.toString()),r);else if(t.addListener&&t.removeListener)t.addListener(r);else throw Error("addEventListener and attachEvent are unavailable.");return n}function SI(){function t(n){return e.call(t.src,t.listener,n)}var e=CI;return t}function sy(t,e,n,r,s){if(Array.isArray(e)){for(var i=0;i<e.length;i++)sy(t,e[i],n,r,s);return null}return n=zu(n),t&&t[Bi]?t.O(e,n,Fi(r)?!!r.capture:!!r,s):ry(t,e,n,!0,r,s)}function iy(t,e,n,r,s){if(Array.isArray(e))for(var i=0;i<e.length;i++)iy(t,e[i],n,r,s);else r=Fi(r)?!!r.capture:!!r,n=zu(n),t&&t[Bi]?(t=t.i,e=String(e).toString(),e in t.g&&(i=t.g[e],n=Cl(i,n,r,s),-1<n&&(Oa(i[n]),Array.prototype.splice.call(i,n,1),i.length==0&&(delete t.g[e],t.h--)))):t&&(t=Hu(t))&&(e=t.g[e.toString()],t=-1,e&&(t=Cl(e,n,r,s)),(n=-1<t?e[t]:null)&&qu(n))}function qu(t){if(typeof t!="number"&&t&&!t.ca){var e=t.src;if(e&&e[Bi])Sl(e.i,t);else{var n=t.type,r=t.proxy;e.removeEventListener?e.removeEventListener(n,r,t.capture):e.detachEvent?e.detachEvent(oy(n),r):e.addListener&&e.removeListener&&e.removeListener(r),(n=Hu(e))?(Sl(n,t),n.h==0&&(n.src=null,e[ju]=null)):Oa(t)}}}function oy(t){return t in Pc?Pc[t]:Pc[t]="on"+t}function CI(t,e){if(t.ca)t=!0;else{e=new _i(e,this);var n=t.listener,r=t.ia||t.src;t.fa&&qu(t),t=n.call(r,e)}return t}function Hu(t){return t=t[ju],t instanceof Na?t:null}var Lc="__closure_events_fn_"+(1e9*Math.random()>>>0);function zu(t){return typeof t=="function"?t:(t[Lc]||(t[Lc]=function(e){return t.handleEvent(e)}),t[Lc])}function He(){Gn.call(this),this.i=new Na(this),this.P=this,this.I=null}tt(He,Gn);He.prototype[Bi]=!0;He.prototype.removeEventListener=function(t,e,n,r){iy(this,t,e,n,r)};function Ye(t,e){var n,r=t.I;if(r)for(n=[];r;r=r.I)n.push(r);if(t=t.P,r=e.type||e,typeof e=="string")e=new st(e,t);else if(e instanceof st)e.target=e.target||t;else{var s=e;e=new st(r,t),Jg(e,s)}if(s=!0,n)for(var i=n.length-1;0<=i;i--){var o=e.g=n[i];s=uo(o,r,!0,e)&&s}if(o=e.g=t,s=uo(o,r,!0,e)&&s,s=uo(o,r,!1,e)&&s,n)for(i=0;i<n.length;i++)o=e.g=n[i],s=uo(o,r,!1,e)&&s}He.prototype.M=function(){if(He.Z.M.call(this),this.i){var t=this.i,e;for(e in t.g){for(var n=t.g[e],r=0;r<n.length;r++)Oa(n[r]);delete t.g[e],t.h--}}this.I=null};He.prototype.N=function(t,e,n,r){return this.i.add(String(t),e,!1,n,r)};He.prototype.O=function(t,e,n,r){return this.i.add(String(t),e,!0,n,r)};function uo(t,e,n,r){if(e=t.i.g[String(e)],!e)return!0;e=e.concat();for(var s=!0,i=0;i<e.length;++i){var o=e[i];if(o&&!o.ca&&o.capture==n){var a=o.listener,c=o.ia||o.src;o.fa&&Sl(t.i,o),s=a.call(c,r)!==!1&&s}}return s&&!r.defaultPrevented}var Ku=G.JSON.stringify;function kI(){var t=cy;let e=null;return t.g&&(e=t.g,t.g=t.g.next,t.g||(t.h=null),e.next=null),e}class xI{constructor(){this.h=this.g=null}add(e,n){const r=ay.get();r.set(e,n),this.h?this.h.next=r:this.g=r,this.h=r}}var ay=new class{constructor(t,e){this.i=t,this.j=e,this.h=0,this.g=null}get(){let t;return 0<this.h?(this.h--,t=this.g,this.g=t.next,t.next=null):t=this.i(),t}}(()=>new RI,t=>t.reset());class RI{constructor(){this.next=this.g=this.h=null}set(e,n){this.h=e,this.g=n,this.next=null}reset(){this.next=this.g=this.h=null}}function OI(t){G.setTimeout(()=>{throw t},0)}function Gu(t,e){kl||NI(),xl||(kl(),xl=!0),cy.add(t,e)}var kl;function NI(){var t=G.Promise.resolve(void 0);kl=function(){t.then(DI)}}var xl=!1,cy=new xI;function DI(){for(var t;t=kI();){try{t.h.call(t.g)}catch(n){OI(n)}var e=ay;e.j(t),100>e.h&&(e.h++,t.next=e.g,e.g=t)}xl=!1}function Da(t,e){He.call(this),this.h=t||1,this.g=e||G,this.j=Xe(this.kb,this),this.l=Date.now()}tt(Da,He);$=Da.prototype;$.da=!1;$.S=null;$.kb=function(){if(this.da){var t=Date.now()-this.l;0<t&&t<.8*this.h?this.S=this.g.setTimeout(this.j,this.h-t):(this.S&&(this.g.clearTimeout(this.S),this.S=null),Ye(this,"tick"),this.da&&(Wu(this),this.start()))}};$.start=function(){this.da=!0,this.S||(this.S=this.g.setTimeout(this.j,this.h),this.l=Date.now())};function Wu(t){t.da=!1,t.S&&(t.g.clearTimeout(t.S),t.S=null)}$.M=function(){Da.Z.M.call(this),Wu(this),delete this.g};function Qu(t,e,n){if(typeof t=="function")n&&(t=Xe(t,n));else if(t&&typeof t.handleEvent=="function")t=Xe(t.handleEvent,t);else throw Error("Invalid listener argument");return 2147483647<Number(e)?-1:G.setTimeout(t,e||0)}function ly(t){t.g=Qu(()=>{t.g=null,t.i&&(t.i=!1,ly(t))},t.j);const e=t.h;t.h=null,t.m.apply(null,e)}class PI extends Gn{constructor(e,n){super(),this.m=e,this.j=n,this.h=null,this.i=!1,this.g=null}l(e){this.h=arguments,this.g?this.i=!0:ly(this)}M(){super.M(),this.g&&(G.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function wi(t){Gn.call(this),this.h=t,this.g={}}tt(wi,Gn);var vf=[];function uy(t,e,n,r){Array.isArray(n)||(n&&(vf[0]=n.toString()),n=vf);for(var s=0;s<n.length;s++){var i=ny(e,n[s],r||t.handleEvent,!1,t.h||t);if(!i)break;t.g[i.key]=i}}function hy(t){Bu(t.g,function(e,n){this.g.hasOwnProperty(n)&&qu(e)},t),t.g={}}wi.prototype.M=function(){wi.Z.M.call(this),hy(this)};wi.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};function Pa(){this.g=!0}Pa.prototype.Aa=function(){this.g=!1};function LI(t,e,n,r,s,i){t.info(function(){if(t.g)if(i)for(var o="",a=i.split("&"),c=0;c<a.length;c++){var l=a[c].split("=");if(1<l.length){var u=l[0];l=l[1];var h=u.split("_");o=2<=h.length&&h[1]=="type"?o+(u+"="+l+"&"):o+(u+"=redacted&")}}else o=null;else o=i;return"XMLHTTP REQ ("+r+") [attempt "+s+"]: "+e+`
`+n+`
`+o})}function MI(t,e,n,r,s,i,o){t.info(function(){return"XMLHTTP RESP ("+r+") [ attempt "+s+"]: "+e+`
`+n+`
`+i+" "+o})}function Wr(t,e,n,r){t.info(function(){return"XMLHTTP TEXT ("+e+"): "+$I(t,n)+(r?" "+r:"")})}function UI(t,e){t.info(function(){return"TIMEOUT: "+e})}Pa.prototype.info=function(){};function $I(t,e){if(!t.g)return e;if(!e)return null;try{var n=JSON.parse(e);if(n){for(t=0;t<n.length;t++)if(Array.isArray(n[t])){var r=n[t];if(!(2>r.length)){var s=r[1];if(Array.isArray(s)&&!(1>s.length)){var i=s[0];if(i!="noop"&&i!="stop"&&i!="close")for(var o=1;o<s.length;o++)s[o]=""}}}}return Ku(n)}catch{return e}}var Sr={},_f=null;function La(){return _f=_f||new He}Sr.Ma="serverreachability";function dy(t){st.call(this,Sr.Ma,t)}tt(dy,st);function Ei(t){const e=La();Ye(e,new dy(e,t))}Sr.STAT_EVENT="statevent";function fy(t,e){st.call(this,Sr.STAT_EVENT,t),this.stat=e}tt(fy,st);function dt(t){const e=La();Ye(e,new fy(e,t))}Sr.Na="timingevent";function py(t,e){st.call(this,Sr.Na,t),this.size=e}tt(py,st);function Vi(t,e){if(typeof t!="function")throw Error("Fn must not be null and must be a function");return G.setTimeout(function(){t()},e)}var Ma={NO_ERROR:0,lb:1,yb:2,xb:3,sb:4,wb:5,zb:6,Ja:7,TIMEOUT:8,Cb:9},my={qb:"complete",Mb:"success",Ka:"error",Ja:"abort",Eb:"ready",Fb:"readystatechange",TIMEOUT:"timeout",Ab:"incrementaldata",Db:"progress",tb:"downloadprogress",Ub:"uploadprogress"};function Xu(){}Xu.prototype.h=null;function wf(t){return t.h||(t.h=t.i())}function gy(){}var ji={OPEN:"a",pb:"b",Ka:"c",Bb:"d"};function Yu(){st.call(this,"d")}tt(Yu,st);function Ju(){st.call(this,"c")}tt(Ju,st);var Rl;function Ua(){}tt(Ua,Xu);Ua.prototype.g=function(){return new XMLHttpRequest};Ua.prototype.i=function(){return{}};Rl=new Ua;function qi(t,e,n,r){this.l=t,this.j=e,this.m=n,this.X=r||1,this.V=new wi(this),this.P=FI,t=Il?125:void 0,this.W=new Da(t),this.H=null,this.i=!1,this.s=this.A=this.v=this.K=this.F=this.Y=this.B=null,this.D=[],this.g=null,this.C=0,this.o=this.u=null,this.N=-1,this.I=!1,this.O=0,this.L=null,this.aa=this.J=this.$=this.U=!1,this.h=new yy}function yy(){this.i=null,this.g="",this.h=!1}var FI=45e3,Ol={},Yo={};$=qi.prototype;$.setTimeout=function(t){this.P=t};function Nl(t,e,n){t.K=1,t.v=Fa(wn(e)),t.s=n,t.U=!0,vy(t,null)}function vy(t,e){t.F=Date.now(),Hi(t),t.A=wn(t.v);var n=t.A,r=t.X;Array.isArray(r)||(r=[String(r)]),Ay(n.h,"t",r),t.C=0,n=t.l.H,t.h=new yy,t.g=zy(t.l,n?e:null,!t.s),0<t.O&&(t.L=new PI(Xe(t.Ia,t,t.g),t.O)),uy(t.V,t.g,"readystatechange",t.gb),e=t.H?Yg(t.H):{},t.s?(t.u||(t.u="POST"),e["Content-Type"]="application/x-www-form-urlencoded",t.g.ea(t.A,t.u,t.s,e)):(t.u="GET",t.g.ea(t.A,t.u,null,e)),Ei(1),LI(t.j,t.u,t.A,t.m,t.X,t.s)}$.gb=function(t){t=t.target;const e=this.L;e&&pn(t)==3?e.l():this.Ia(t)};$.Ia=function(t){try{if(t==this.g)e:{const u=pn(this.g);var e=this.g.Da();const h=this.g.ba();if(!(3>u)&&(u!=3||Il||this.g&&(this.h.h||this.g.ga()||If(this.g)))){this.I||u!=4||e==7||(e==8||0>=h?Ei(3):Ei(2)),$a(this);var n=this.g.ba();this.N=n;t:if(_y(this)){var r=If(this.g);t="";var s=r.length,i=pn(this.g)==4;if(!this.h.i){if(typeof TextDecoder=="undefined"){rr(this),ri(this);var o="";break t}this.h.i=new G.TextDecoder}for(e=0;e<s;e++)this.h.h=!0,t+=this.h.i.decode(r[e],{stream:i&&e==s-1});r.splice(0,s),this.h.g+=t,this.C=0,o=this.h.g}else o=this.g.ga();if(this.i=n==200,MI(this.j,this.u,this.A,this.m,this.X,u,n),this.i){if(this.$&&!this.J){t:{if(this.g){var a,c=this.g;if((a=c.g?c.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!Qo(a)){var l=a;break t}}l=null}if(n=l)Wr(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.J=!0,Dl(this,n);else{this.i=!1,this.o=3,dt(12),rr(this),ri(this);break e}}this.U?(wy(this,u,o),Il&&this.i&&u==3&&(uy(this.V,this.W,"tick",this.fb),this.W.start())):(Wr(this.j,this.m,o,null),Dl(this,o)),u==4&&rr(this),this.i&&!this.I&&(u==4?Vy(this.l,this):(this.i=!1,Hi(this)))}else n==400&&0<o.indexOf("Unknown SID")?(this.o=3,dt(12)):(this.o=0,dt(13)),rr(this),ri(this)}}}catch{}finally{}};function _y(t){return t.g?t.u=="GET"&&t.K!=2&&t.l.Ba:!1}function wy(t,e,n){let r=!0,s;for(;!t.I&&t.C<n.length;)if(s=BI(t,n),s==Yo){e==4&&(t.o=4,dt(14),r=!1),Wr(t.j,t.m,null,"[Incomplete Response]");break}else if(s==Ol){t.o=4,dt(15),Wr(t.j,t.m,n,"[Invalid Chunk]"),r=!1;break}else Wr(t.j,t.m,s,null),Dl(t,s);_y(t)&&s!=Yo&&s!=Ol&&(t.h.g="",t.C=0),e!=4||n.length!=0||t.h.h||(t.o=1,dt(16),r=!1),t.i=t.i&&r,r?0<n.length&&!t.aa&&(t.aa=!0,e=t.l,e.g==t&&e.$&&!e.L&&(e.h.info("Great, no buffering proxy detected. Bytes received: "+n.length),ah(e),e.L=!0,dt(11))):(Wr(t.j,t.m,n,"[Invalid Chunked Response]"),rr(t),ri(t))}$.fb=function(){if(this.g){var t=pn(this.g),e=this.g.ga();this.C<e.length&&($a(this),wy(this,t,e),this.i&&t!=4&&Hi(this))}};function BI(t,e){var n=t.C,r=e.indexOf(`
`,n);return r==-1?Yo:(n=Number(e.substring(n,r)),isNaN(n)?Ol:(r+=1,r+n>e.length?Yo:(e=e.substr(r,n),t.C=r+n,e)))}$.cancel=function(){this.I=!0,rr(this)};function Hi(t){t.Y=Date.now()+t.P,Ey(t,t.P)}function Ey(t,e){if(t.B!=null)throw Error("WatchDog timer not null");t.B=Vi(Xe(t.eb,t),e)}function $a(t){t.B&&(G.clearTimeout(t.B),t.B=null)}$.eb=function(){this.B=null;const t=Date.now();0<=t-this.Y?(UI(this.j,this.A),this.K!=2&&(Ei(3),dt(17)),rr(this),this.o=2,ri(this)):Ey(this,this.Y-t)};function ri(t){t.l.G==0||t.I||Vy(t.l,t)}function rr(t){$a(t);var e=t.L;e&&typeof e.na=="function"&&e.na(),t.L=null,Wu(t.W),hy(t.V),t.g&&(e=t.g,t.g=null,e.abort(),e.na())}function Dl(t,e){try{var n=t.l;if(n.G!=0&&(n.g==t||Pl(n.i,t))){if(n.I=t.N,!t.J&&Pl(n.i,t)&&n.G==3){try{var r=n.Ca.g.parse(e)}catch{r=null}if(Array.isArray(r)&&r.length==3){var s=r;if(s[0]==0){e:if(!n.u){if(n.g)if(n.g.F+3e3<t.F)ta(n),ja(n);else break e;oh(n),dt(18)}}else n.ta=s[1],0<n.ta-n.U&&37500>s[2]&&n.N&&n.A==0&&!n.v&&(n.v=Vi(Xe(n.ab,n),6e3));if(1>=ky(n.i)&&n.ka){try{n.ka()}catch{}n.ka=void 0}}else sr(n,11)}else if((t.J||n.g==t)&&ta(n),!Qo(e))for(s=n.Ca.g.parse(e),e=0;e<s.length;e++){let l=s[e];if(n.U=l[0],l=l[1],n.G==2)if(l[0]=="c"){n.J=l[1],n.la=l[2];const u=l[3];u!=null&&(n.ma=u,n.h.info("VER="+n.ma));const h=l[4];h!=null&&(n.za=h,n.h.info("SVER="+n.za));const d=l[5];d!=null&&typeof d=="number"&&0<d&&(r=1.5*d,n.K=r,n.h.info("backChannelRequestTimeoutMs_="+r)),r=n;const f=t.g;if(f){const m=f.g?f.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(m){var i=r.i;!i.g&&(lt(m,"spdy")||lt(m,"quic")||lt(m,"h2"))&&(i.j=i.l,i.g=new Set,i.h&&(th(i,i.h),i.h=null))}if(r.D){const E=f.g?f.g.getResponseHeader("X-HTTP-Session-Id"):null;E&&(r.sa=E,xe(r.F,r.D,E))}}n.G=3,n.j&&n.j.xa(),n.$&&(n.O=Date.now()-t.F,n.h.info("Handshake RTT: "+n.O+"ms")),r=n;var o=t;if(r.oa=Hy(r,r.H?r.la:null,r.W),o.J){xy(r.i,o);var a=o,c=r.K;c&&a.setTimeout(c),a.B&&($a(a),Hi(a)),r.g=o}else Fy(r);0<n.l.length&&qa(n)}else l[0]!="stop"&&l[0]!="close"||sr(n,7);else n.G==3&&(l[0]=="stop"||l[0]=="close"?l[0]=="stop"?sr(n,7):ih(n):l[0]!="noop"&&n.j&&n.j.wa(l),n.A=0)}}Ei(4)}catch{}}function VI(t){if(t.R&&typeof t.R=="function")return t.R();if(typeof t=="string")return t.split("");if(Tl(t)){for(var e=[],n=t.length,r=0;r<n;r++)e.push(t[r]);return e}e=[],n=0;for(r in t)e[n++]=t[r];return e}function Zu(t,e){if(t.forEach&&typeof t.forEach=="function")t.forEach(e,void 0);else if(Tl(t)||typeof t=="string")Xg(t,e,void 0);else{if(t.T&&typeof t.T=="function")var n=t.T();else if(t.R&&typeof t.R=="function")n=void 0;else if(Tl(t)||typeof t=="string"){n=[];for(var r=t.length,s=0;s<r;s++)n.push(s)}else for(s in n=[],r=0,t)n[r++]=s;r=VI(t),s=r.length;for(var i=0;i<s;i++)e.call(void 0,r[i],n&&n[i],t)}}function ks(t,e){this.h={},this.g=[],this.i=0;var n=arguments.length;if(1<n){if(n%2)throw Error("Uneven number of arguments");for(var r=0;r<n;r+=2)this.set(arguments[r],arguments[r+1])}else if(t)if(t instanceof ks)for(n=t.T(),r=0;r<n.length;r++)this.set(n[r],t.get(n[r]));else for(r in t)this.set(r,t[r])}$=ks.prototype;$.R=function(){eh(this);for(var t=[],e=0;e<this.g.length;e++)t.push(this.h[this.g[e]]);return t};$.T=function(){return eh(this),this.g.concat()};function eh(t){if(t.i!=t.g.length){for(var e=0,n=0;e<t.g.length;){var r=t.g[e];mr(t.h,r)&&(t.g[n++]=r),e++}t.g.length=n}if(t.i!=t.g.length){var s={};for(n=e=0;e<t.g.length;)r=t.g[e],mr(s,r)||(t.g[n++]=r,s[r]=1),e++;t.g.length=n}}$.get=function(t,e){return mr(this.h,t)?this.h[t]:e};$.set=function(t,e){mr(this.h,t)||(this.i++,this.g.push(t)),this.h[t]=e};$.forEach=function(t,e){for(var n=this.T(),r=0;r<n.length;r++){var s=n[r],i=this.get(s);t.call(e,i,s,this)}};function mr(t,e){return Object.prototype.hasOwnProperty.call(t,e)}var by=/^(?:([^:/?#.]+):)?(?:\/\/(?:([^\\/?#]*)@)?([^\\/?#]*?)(?::([0-9]+))?(?=[\\/?#]|$))?([^?#]+)?(?:\?([^#]*))?(?:#([\s\S]*))?$/;function jI(t,e){if(t){t=t.split("&");for(var n=0;n<t.length;n++){var r=t[n].indexOf("="),s=null;if(0<=r){var i=t[n].substring(0,r);s=t[n].substring(r+1)}else i=t[n];e(i,s?decodeURIComponent(s.replace(/\+/g," ")):"")}}}function gr(t,e){if(this.i=this.s=this.j="",this.m=null,this.o=this.l="",this.g=!1,t instanceof gr){this.g=e!==void 0?e:t.g,Jo(this,t.j),this.s=t.s,Zo(this,t.i),ea(this,t.m),this.l=t.l,e=t.h;var n=new bi;n.i=e.i,e.g&&(n.g=new ks(e.g),n.h=e.h),Ef(this,n),this.o=t.o}else t&&(n=String(t).match(by))?(this.g=!!e,Jo(this,n[1]||"",!0),this.s=si(n[2]||""),Zo(this,n[3]||"",!0),ea(this,n[4]),this.l=si(n[5]||"",!0),Ef(this,n[6]||"",!0),this.o=si(n[7]||"")):(this.g=!!e,this.h=new bi(null,this.g))}gr.prototype.toString=function(){var t=[],e=this.j;e&&t.push(Xs(e,bf,!0),":");var n=this.i;return(n||e=="file")&&(t.push("//"),(e=this.s)&&t.push(Xs(e,bf,!0),"@"),t.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n=this.m,n!=null&&t.push(":",String(n))),(n=this.l)&&(this.i&&n.charAt(0)!="/"&&t.push("/"),t.push(Xs(n,n.charAt(0)=="/"?GI:KI,!0))),(n=this.h.toString())&&t.push("?",n),(n=this.o)&&t.push("#",Xs(n,QI)),t.join("")};function wn(t){return new gr(t)}function Jo(t,e,n){t.j=n?si(e,!0):e,t.j&&(t.j=t.j.replace(/:$/,""))}function Zo(t,e,n){t.i=n?si(e,!0):e}function ea(t,e){if(e){if(e=Number(e),isNaN(e)||0>e)throw Error("Bad port number "+e);t.m=e}else t.m=null}function Ef(t,e,n){e instanceof bi?(t.h=e,XI(t.h,t.g)):(n||(e=Xs(e,WI)),t.h=new bi(e,t.g))}function xe(t,e,n){t.h.set(e,n)}function Fa(t){return xe(t,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),t}function qI(t){return t instanceof gr?wn(t):new gr(t,void 0)}function HI(t,e,n,r){var s=new gr(null,void 0);return t&&Jo(s,t),e&&Zo(s,e),n&&ea(s,n),r&&(s.l=r),s}function si(t,e){return t?e?decodeURI(t.replace(/%25/g,"%2525")):decodeURIComponent(t):""}function Xs(t,e,n){return typeof t=="string"?(t=encodeURI(t).replace(e,zI),n&&(t=t.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),t):null}function zI(t){return t=t.charCodeAt(0),"%"+(t>>4&15).toString(16)+(t&15).toString(16)}var bf=/[#\/\?@]/g,KI=/[#\?:]/g,GI=/[#\?]/g,WI=/[#\?@]/g,QI=/#/g;function bi(t,e){this.h=this.g=null,this.i=t||null,this.j=!!e}function Wn(t){t.g||(t.g=new ks,t.h=0,t.i&&jI(t.i,function(e,n){t.add(decodeURIComponent(e.replace(/\+/g," ")),n)}))}$=bi.prototype;$.add=function(t,e){Wn(this),this.i=null,t=xs(this,t);var n=this.g.get(t);return n||this.g.set(t,n=[]),n.push(e),this.h+=1,this};function Ty(t,e){Wn(t),e=xs(t,e),mr(t.g.h,e)&&(t.i=null,t.h-=t.g.get(e).length,t=t.g,mr(t.h,e)&&(delete t.h[e],t.i--,t.g.length>2*t.i&&eh(t)))}function Iy(t,e){return Wn(t),e=xs(t,e),mr(t.g.h,e)}$.forEach=function(t,e){Wn(this),this.g.forEach(function(n,r){Xg(n,function(s){t.call(e,s,r,this)},this)},this)};$.T=function(){Wn(this);for(var t=this.g.R(),e=this.g.T(),n=[],r=0;r<e.length;r++)for(var s=t[r],i=0;i<s.length;i++)n.push(e[r]);return n};$.R=function(t){Wn(this);var e=[];if(typeof t=="string")Iy(this,t)&&(e=df(e,this.g.get(xs(this,t))));else{t=this.g.R();for(var n=0;n<t.length;n++)e=df(e,t[n])}return e};$.set=function(t,e){return Wn(this),this.i=null,t=xs(this,t),Iy(this,t)&&(this.h-=this.g.get(t).length),this.g.set(t,[e]),this.h+=1,this};$.get=function(t,e){return t?(t=this.R(t),0<t.length?String(t[0]):e):e};function Ay(t,e,n){Ty(t,e),0<n.length&&(t.i=null,t.g.set(xs(t,e),Fu(n)),t.h+=n.length)}$.toString=function(){if(this.i)return this.i;if(!this.g)return"";for(var t=[],e=this.g.T(),n=0;n<e.length;n++){var r=e[n],s=encodeURIComponent(String(r));r=this.R(r);for(var i=0;i<r.length;i++){var o=s;r[i]!==""&&(o+="="+encodeURIComponent(String(r[i]))),t.push(o)}}return this.i=t.join("&")};function xs(t,e){return e=String(e),t.j&&(e=e.toLowerCase()),e}function XI(t,e){e&&!t.j&&(Wn(t),t.i=null,t.g.forEach(function(n,r){var s=r.toLowerCase();r!=s&&(Ty(this,r),Ay(this,s,n))},t)),t.j=e}var YI=class{constructor(t,e){this.h=t,this.g=e}};function Sy(t){this.l=t||JI,G.PerformanceNavigationTiming?(t=G.performance.getEntriesByType("navigation"),t=0<t.length&&(t[0].nextHopProtocol=="hq"||t[0].nextHopProtocol=="h2")):t=!!(G.g&&G.g.Ea&&G.g.Ea()&&G.g.Ea().Zb),this.j=t?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var JI=10;function Cy(t){return t.h?!0:t.g?t.g.size>=t.j:!1}function ky(t){return t.h?1:t.g?t.g.size:0}function Pl(t,e){return t.h?t.h==e:t.g?t.g.has(e):!1}function th(t,e){t.g?t.g.add(e):t.h=e}function xy(t,e){t.h&&t.h==e?t.h=null:t.g&&t.g.has(e)&&t.g.delete(e)}Sy.prototype.cancel=function(){if(this.i=Ry(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const t of this.g.values())t.cancel();this.g.clear()}};function Ry(t){if(t.h!=null)return t.i.concat(t.h.D);if(t.g!=null&&t.g.size!==0){let e=t.i;for(const n of t.g.values())e=e.concat(n.D);return e}return Fu(t.i)}function nh(){}nh.prototype.stringify=function(t){return G.JSON.stringify(t,void 0)};nh.prototype.parse=function(t){return G.JSON.parse(t,void 0)};function ZI(){this.g=new nh}function eA(t,e,n){const r=n||"";try{Zu(t,function(s,i){let o=s;Fi(s)&&(o=Ku(s)),e.push(r+i+"="+encodeURIComponent(o))})}catch(s){throw e.push(r+"type="+encodeURIComponent("_badmap")),s}}function tA(t,e){const n=new Pa;if(G.Image){const r=new Image;r.onload=lo(ho,n,r,"TestLoadImage: loaded",!0,e),r.onerror=lo(ho,n,r,"TestLoadImage: error",!1,e),r.onabort=lo(ho,n,r,"TestLoadImage: abort",!1,e),r.ontimeout=lo(ho,n,r,"TestLoadImage: timeout",!1,e),G.setTimeout(function(){r.ontimeout&&r.ontimeout()},1e4),r.src=t}else e(!1)}function ho(t,e,n,r,s){try{e.onload=null,e.onerror=null,e.onabort=null,e.ontimeout=null,s(r)}catch{}}function zi(t){this.l=t.$b||null,this.j=t.ib||!1}tt(zi,Xu);zi.prototype.g=function(){return new Ba(this.l,this.j)};zi.prototype.i=function(t){return function(){return t}}({});function Ba(t,e){He.call(this),this.D=t,this.u=e,this.m=void 0,this.readyState=rh,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}tt(Ba,He);var rh=0;$=Ba.prototype;$.open=function(t,e){if(this.readyState!=rh)throw this.abort(),Error("Error reopening a connection");this.C=t,this.B=e,this.readyState=1,Ti(this)};$.send=function(t){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const e={headers:this.v,method:this.C,credentials:this.m,cache:void 0};t&&(e.body=t),(this.D||G).fetch(new Request(this.B,e)).then(this.Va.bind(this),this.ha.bind(this))};$.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted."),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Ki(this)),this.readyState=rh};$.Va=function(t){if(this.g&&(this.l=t,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=t.headers,this.readyState=2,Ti(this)),this.g&&(this.readyState=3,Ti(this),this.g)))if(this.responseType==="arraybuffer")t.arrayBuffer().then(this.Ta.bind(this),this.ha.bind(this));else if(typeof G.ReadableStream!="undefined"&&"body"in t){if(this.j=t.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;Oy(this)}else t.text().then(this.Ua.bind(this),this.ha.bind(this))};function Oy(t){t.j.read().then(t.Sa.bind(t)).catch(t.ha.bind(t))}$.Sa=function(t){if(this.g){if(this.u&&t.value)this.response.push(t.value);else if(!this.u){var e=t.value?t.value:new Uint8Array(0);(e=this.A.decode(e,{stream:!t.done}))&&(this.response=this.responseText+=e)}t.done?Ki(this):Ti(this),this.readyState==3&&Oy(this)}};$.Ua=function(t){this.g&&(this.response=this.responseText=t,Ki(this))};$.Ta=function(t){this.g&&(this.response=t,Ki(this))};$.ha=function(){this.g&&Ki(this)};function Ki(t){t.readyState=4,t.l=null,t.j=null,t.A=null,Ti(t)}$.setRequestHeader=function(t,e){this.v.append(t,e)};$.getResponseHeader=function(t){return this.h&&this.h.get(t.toLowerCase())||""};$.getAllResponseHeaders=function(){if(!this.h)return"";const t=[],e=this.h.entries();for(var n=e.next();!n.done;)n=n.value,t.push(n[0]+": "+n[1]),n=e.next();return t.join(`\r
`)};function Ti(t){t.onreadystatechange&&t.onreadystatechange.call(t)}Object.defineProperty(Ba.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(t){this.m=t?"include":"same-origin"}});var nA=G.JSON.parse;function Me(t){He.call(this),this.headers=new ks,this.u=t||null,this.h=!1,this.C=this.g=null,this.H="",this.m=0,this.j="",this.l=this.F=this.v=this.D=!1,this.B=0,this.A=null,this.J=Ny,this.K=this.L=!1}tt(Me,He);var Ny="",rA=/^https?$/i,sA=["POST","PUT"];$=Me.prototype;$.ea=function(t,e,n,r){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.H+"; newUri="+t);e=e?e.toUpperCase():"GET",this.H=t,this.j="",this.m=0,this.D=!1,this.h=!0,this.g=this.u?this.u.g():Rl.g(),this.C=this.u?wf(this.u):wf(Rl),this.g.onreadystatechange=Xe(this.Fa,this);try{this.F=!0,this.g.open(e,String(t),!0),this.F=!1}catch(i){Tf(this,i);return}t=n||"";const s=new ks(this.headers);r&&Zu(r,function(i,o){s.set(o,i)}),r=mI(s.T()),n=G.FormData&&t instanceof G.FormData,!(0<=Qg(sA,e))||r||n||s.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8"),s.forEach(function(i,o){this.g.setRequestHeader(o,i)},this),this.J&&(this.g.responseType=this.J),"withCredentials"in this.g&&this.g.withCredentials!==this.L&&(this.g.withCredentials=this.L);try{Ly(this),0<this.B&&((this.K=iA(this.g))?(this.g.timeout=this.B,this.g.ontimeout=Xe(this.pa,this)):this.A=Qu(this.pa,this.B,this)),this.v=!0,this.g.send(t),this.v=!1}catch(i){Tf(this,i)}};function iA(t){return cs&&wI()&&typeof t.timeout=="number"&&t.ontimeout!==void 0}function oA(t){return t.toLowerCase()=="content-type"}$.pa=function(){typeof $u!="undefined"&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,Ye(this,"timeout"),this.abort(8))};function Tf(t,e){t.h=!1,t.g&&(t.l=!0,t.g.abort(),t.l=!1),t.j=e,t.m=5,Dy(t),Va(t)}function Dy(t){t.D||(t.D=!0,Ye(t,"complete"),Ye(t,"error"))}$.abort=function(t){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=t||7,Ye(this,"complete"),Ye(this,"abort"),Va(this))};$.M=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),Va(this,!0)),Me.Z.M.call(this)};$.Fa=function(){this.s||(this.F||this.v||this.l?Py(this):this.cb())};$.cb=function(){Py(this)};function Py(t){if(t.h&&typeof $u!="undefined"&&(!t.C[1]||pn(t)!=4||t.ba()!=2)){if(t.v&&pn(t)==4)Qu(t.Fa,0,t);else if(Ye(t,"readystatechange"),pn(t)==4){t.h=!1;try{const a=t.ba();e:switch(a){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var e=!0;break e;default:e=!1}var n;if(!(n=e)){var r;if(r=a===0){var s=String(t.H).match(by)[1]||null;if(!s&&G.self&&G.self.location){var i=G.self.location.protocol;s=i.substr(0,i.length-1)}r=!rA.test(s?s.toLowerCase():"")}n=r}if(n)Ye(t,"complete"),Ye(t,"success");else{t.m=6;try{var o=2<pn(t)?t.g.statusText:""}catch{o=""}t.j=o+" ["+t.ba()+"]",Dy(t)}}finally{Va(t)}}}}function Va(t,e){if(t.g){Ly(t);const n=t.g,r=t.C[0]?Wo:null;t.g=null,t.C=null,e||Ye(t,"ready");try{n.onreadystatechange=r}catch{}}}function Ly(t){t.g&&t.K&&(t.g.ontimeout=null),t.A&&(G.clearTimeout(t.A),t.A=null)}function pn(t){return t.g?t.g.readyState:0}$.ba=function(){try{return 2<pn(this)?this.g.status:-1}catch{return-1}};$.ga=function(){try{return this.g?this.g.responseText:""}catch{return""}};$.Qa=function(t){if(this.g){var e=this.g.responseText;return t&&e.indexOf(t)==0&&(e=e.substring(t.length)),nA(e)}};function If(t){try{if(!t.g)return null;if("response"in t.g)return t.g.response;switch(t.J){case Ny:case"text":return t.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in t.g)return t.g.mozResponseArrayBuffer}return null}catch{return null}}$.Da=function(){return this.m};$.La=function(){return typeof this.j=="string"?this.j:String(this.j)};function aA(t){let e="";return Bu(t,function(n,r){e+=r,e+=":",e+=n,e+=`\r
`}),e}function sh(t,e,n){e:{for(r in n){var r=!1;break e}r=!0}r||(n=aA(n),typeof t=="string"?n!=null&&encodeURIComponent(String(n)):xe(t,e,n))}function js(t,e,n){return n&&n.internalChannelParams&&n.internalChannelParams[t]||e}function My(t){this.za=0,this.l=[],this.h=new Pa,this.la=this.oa=this.F=this.W=this.g=this.sa=this.D=this.aa=this.o=this.P=this.s=null,this.Za=this.V=0,this.Xa=js("failFast",!1,t),this.N=this.v=this.u=this.m=this.j=null,this.X=!0,this.I=this.ta=this.U=-1,this.Y=this.A=this.C=0,this.Pa=js("baseRetryDelayMs",5e3,t),this.$a=js("retryDelaySeedMs",1e4,t),this.Ya=js("forwardChannelMaxRetries",2,t),this.ra=js("forwardChannelRequestTimeoutMs",2e4,t),this.qa=t&&t.xmlHttpFactory||void 0,this.Ba=t&&t.Yb||!1,this.K=void 0,this.H=t&&t.supportsCrossDomainXhr||!1,this.J="",this.i=new Sy(t&&t.concurrentRequestLimit),this.Ca=new ZI,this.ja=t&&t.fastHandshake||!1,this.Ra=t&&t.Wb||!1,t&&t.Aa&&this.h.Aa(),t&&t.forceLongPolling&&(this.X=!1),this.$=!this.ja&&this.X&&t&&t.detectBufferingProxy||!1,this.ka=void 0,this.O=0,this.L=!1,this.B=null,this.Wa=!t||t.Xb!==!1}$=My.prototype;$.ma=8;$.G=1;function ih(t){if(Uy(t),t.G==3){var e=t.V++,n=wn(t.F);xe(n,"SID",t.J),xe(n,"RID",e),xe(n,"TYPE","terminate"),Gi(t,n),e=new qi(t,t.h,e,void 0),e.K=2,e.v=Fa(wn(n)),n=!1,G.navigator&&G.navigator.sendBeacon&&(n=G.navigator.sendBeacon(e.v.toString(),"")),!n&&G.Image&&(new Image().src=e.v,n=!0),n||(e.g=zy(e.l,null),e.g.ea(e.v)),e.F=Date.now(),Hi(e)}qy(t)}$.hb=function(t){try{this.h.info("Origin Trials invoked: "+t)}catch{}};function ja(t){t.g&&(ah(t),t.g.cancel(),t.g=null)}function Uy(t){ja(t),t.u&&(G.clearTimeout(t.u),t.u=null),ta(t),t.i.cancel(),t.m&&(typeof t.m=="number"&&G.clearTimeout(t.m),t.m=null)}function Mc(t,e){t.l.push(new YI(t.Za++,e)),t.G==3&&qa(t)}function qa(t){Cy(t.i)||t.m||(t.m=!0,Gu(t.Ha,t),t.C=0)}function cA(t,e){return ky(t.i)>=t.i.j-(t.m?1:0)?!1:t.m?(t.l=e.D.concat(t.l),!0):t.G==1||t.G==2||t.C>=(t.Xa?0:t.Ya)?!1:(t.m=Vi(Xe(t.Ha,t,e),jy(t,t.C)),t.C++,!0)}$.Ha=function(t){if(this.m)if(this.m=null,this.G==1){if(!t){this.V=Math.floor(1e5*Math.random()),t=this.V++;const s=new qi(this,this.h,t,void 0);let i=this.s;if(this.P&&(i?(i=Yg(i),Jg(i,this.P)):i=this.P),this.o===null&&(s.H=i),this.ja)e:{for(var e=0,n=0;n<this.l.length;n++){t:{var r=this.l[n];if("__data__"in r.g&&(r=r.g.__data__,typeof r=="string")){r=r.length;break t}r=void 0}if(r===void 0)break;if(e+=r,4096<e){e=n;break e}if(e===4096||n===this.l.length-1){e=n+1;break e}}e=1e3}else e=1e3;e=$y(this,s,e),n=wn(this.F),xe(n,"RID",t),xe(n,"CVER",22),this.D&&xe(n,"X-HTTP-Session-Id",this.D),Gi(this,n),this.o&&i&&sh(n,this.o,i),th(this.i,s),this.Ra&&xe(n,"TYPE","init"),this.ja?(xe(n,"$req",e),xe(n,"SID","null"),s.$=!0,Nl(s,n,null)):Nl(s,n,e),this.G=2}}else this.G==3&&(t?Af(this,t):this.l.length==0||Cy(this.i)||Af(this))};function Af(t,e){var n;e?n=e.m:n=t.V++;const r=wn(t.F);xe(r,"SID",t.J),xe(r,"RID",n),xe(r,"AID",t.U),Gi(t,r),t.o&&t.s&&sh(r,t.o,t.s),n=new qi(t,t.h,n,t.C+1),t.o===null&&(n.H=t.s),e&&(t.l=e.D.concat(t.l)),e=$y(t,n,1e3),n.setTimeout(Math.round(.5*t.ra)+Math.round(.5*t.ra*Math.random())),th(t.i,n),Nl(n,r,e)}function Gi(t,e){t.j&&Zu({},function(n,r){xe(e,r,n)})}function $y(t,e,n){n=Math.min(t.l.length,n);var r=t.j?Xe(t.j.Oa,t.j,t):null;e:{var s=t.l;let i=-1;for(;;){const o=["count="+n];i==-1?0<n?(i=s[0].h,o.push("ofs="+i)):i=0:o.push("ofs="+i);let a=!0;for(let c=0;c<n;c++){let l=s[c].h;const u=s[c].g;if(l-=i,0>l)i=Math.max(0,s[c].h-100),a=!1;else try{eA(u,o,"req"+l+"_")}catch{r&&r(u)}}if(a){r=o.join("&");break e}}}return t=t.l.splice(0,n),e.D=t,r}function Fy(t){t.g||t.u||(t.Y=1,Gu(t.Ga,t),t.A=0)}function oh(t){return t.g||t.u||3<=t.A?!1:(t.Y++,t.u=Vi(Xe(t.Ga,t),jy(t,t.A)),t.A++,!0)}$.Ga=function(){if(this.u=null,By(this),this.$&&!(this.L||this.g==null||0>=this.O)){var t=2*this.O;this.h.info("BP detection timer enabled: "+t),this.B=Vi(Xe(this.bb,this),t)}};$.bb=function(){this.B&&(this.B=null,this.h.info("BP detection timeout reached."),this.h.info("Buffering proxy detected and switch to long-polling!"),this.N=!1,this.L=!0,dt(10),ja(this),By(this))};function ah(t){t.B!=null&&(G.clearTimeout(t.B),t.B=null)}function By(t){t.g=new qi(t,t.h,"rpc",t.Y),t.o===null&&(t.g.H=t.s),t.g.O=0;var e=wn(t.oa);xe(e,"RID","rpc"),xe(e,"SID",t.J),xe(e,"CI",t.N?"0":"1"),xe(e,"AID",t.U),Gi(t,e),xe(e,"TYPE","xmlhttp"),t.o&&t.s&&sh(e,t.o,t.s),t.K&&t.g.setTimeout(t.K);var n=t.g;t=t.la,n.K=1,n.v=Fa(wn(e)),n.s=null,n.U=!0,vy(n,t)}$.ab=function(){this.v!=null&&(this.v=null,ja(this),oh(this),dt(19))};function ta(t){t.v!=null&&(G.clearTimeout(t.v),t.v=null)}function Vy(t,e){var n=null;if(t.g==e){ta(t),ah(t),t.g=null;var r=2}else if(Pl(t.i,e))n=e.D,xy(t.i,e),r=1;else return;if(t.I=e.N,t.G!=0){if(e.i)if(r==1){n=e.s?e.s.length:0,e=Date.now()-e.F;var s=t.C;r=La(),Ye(r,new py(r,n,e,s)),qa(t)}else Fy(t);else if(s=e.o,s==3||s==0&&0<t.I||!(r==1&&cA(t,e)||r==2&&oh(t)))switch(n&&0<n.length&&(e=t.i,e.i=e.i.concat(n)),s){case 1:sr(t,5);break;case 4:sr(t,10);break;case 3:sr(t,6);break;default:sr(t,2)}}}function jy(t,e){let n=t.Pa+Math.floor(Math.random()*t.$a);return t.j||(n*=2),n*e}function sr(t,e){if(t.h.info("Error code "+e),e==2){var n=null;t.j&&(n=null);var r=Xe(t.jb,t);n||(n=new gr("//www.google.com/images/cleardot.gif"),G.location&&G.location.protocol=="http"||Jo(n,"https"),Fa(n)),tA(n.toString(),r)}else dt(2);t.G=0,t.j&&t.j.va(e),qy(t),Uy(t)}$.jb=function(t){t?(this.h.info("Successfully pinged google.com"),dt(2)):(this.h.info("Failed to ping google.com"),dt(1))};function qy(t){t.G=0,t.I=-1,t.j&&((Ry(t.i).length!=0||t.l.length!=0)&&(t.i.i.length=0,Fu(t.l),t.l.length=0),t.j.ua())}function Hy(t,e,n){let r=qI(n);if(r.i!="")e&&Zo(r,e+"."+r.i),ea(r,r.m);else{const s=G.location;r=HI(s.protocol,e?e+"."+s.hostname:s.hostname,+s.port,n)}return t.aa&&Bu(t.aa,function(s,i){xe(r,i,s)}),e=t.D,n=t.sa,e&&n&&xe(r,e,n),xe(r,"VER",t.ma),Gi(t,r),r}function zy(t,e,n){if(e&&!t.H)throw Error("Can't create secondary domain capable XhrIo object.");return e=n&&t.Ba&&!t.qa?new Me(new zi({ib:!0})):new Me(t.qa),e.L=t.H,e}function Ky(){}$=Ky.prototype;$.xa=function(){};$.wa=function(){};$.va=function(){};$.ua=function(){};$.Oa=function(){};function na(){if(cs&&!(10<=Number(EI)))throw Error("Environmental error: no available transport.")}na.prototype.g=function(t,e){return new Rt(t,e)};function Rt(t,e){He.call(this),this.g=new My(e),this.l=t,this.h=e&&e.messageUrlParams||null,t=e&&e.messageHeaders||null,e&&e.clientProtocolHeaderRequired&&(t?t["X-Client-Protocol"]="webchannel":t={"X-Client-Protocol":"webchannel"}),this.g.s=t,t=e&&e.initMessageHeaders||null,e&&e.messageContentType&&(t?t["X-WebChannel-Content-Type"]=e.messageContentType:t={"X-WebChannel-Content-Type":e.messageContentType}),e&&e.ya&&(t?t["X-WebChannel-Client-Profile"]=e.ya:t={"X-WebChannel-Client-Profile":e.ya}),this.g.P=t,(t=e&&e.httpHeadersOverwriteParam)&&!Qo(t)&&(this.g.o=t),this.A=e&&e.supportsCrossDomainXhr||!1,this.v=e&&e.sendRawJson||!1,(e=e&&e.httpSessionIdParam)&&!Qo(e)&&(this.g.D=e,t=this.h,t!==null&&e in t&&(t=this.h,e in t&&delete t[e])),this.j=new Rs(this)}tt(Rt,He);Rt.prototype.m=function(){this.g.j=this.j,this.A&&(this.g.H=!0);var t=this.g,e=this.l,n=this.h||void 0;t.Wa&&(t.h.info("Origin Trials enabled."),Gu(Xe(t.hb,t,e))),dt(0),t.W=e,t.aa=n||{},t.N=t.X,t.F=Hy(t,null,t.W),qa(t)};Rt.prototype.close=function(){ih(this.g)};Rt.prototype.u=function(t){if(typeof t=="string"){var e={};e.__data__=t,Mc(this.g,e)}else this.v?(e={},e.__data__=Ku(t),Mc(this.g,e)):Mc(this.g,t)};Rt.prototype.M=function(){this.g.j=null,delete this.j,ih(this.g),delete this.g,Rt.Z.M.call(this)};function Gy(t){Yu.call(this);var e=t.__sm__;if(e){e:{for(const n in e){t=n;break e}t=void 0}(this.i=t)&&(t=this.i,e=e!==null&&t in e?e[t]:void 0),this.data=e}else this.data=t}tt(Gy,Yu);function Wy(){Ju.call(this),this.status=1}tt(Wy,Ju);function Rs(t){this.g=t}tt(Rs,Ky);Rs.prototype.xa=function(){Ye(this.g,"a")};Rs.prototype.wa=function(t){Ye(this.g,new Gy(t))};Rs.prototype.va=function(t){Ye(this.g,new Wy(t))};Rs.prototype.ua=function(){Ye(this.g,"b")};na.prototype.createWebChannel=na.prototype.g;Rt.prototype.send=Rt.prototype.u;Rt.prototype.open=Rt.prototype.m;Rt.prototype.close=Rt.prototype.close;Ma.NO_ERROR=0;Ma.TIMEOUT=8;Ma.HTTP_ERROR=6;my.COMPLETE="complete";gy.EventType=ji;ji.OPEN="a";ji.CLOSE="b";ji.ERROR="c";ji.MESSAGE="d";He.prototype.listen=He.prototype.N;Me.prototype.listenOnce=Me.prototype.O;Me.prototype.getLastError=Me.prototype.La;Me.prototype.getLastErrorCode=Me.prototype.Da;Me.prototype.getStatus=Me.prototype.ba;Me.prototype.getResponseJson=Me.prototype.Qa;Me.prototype.getResponseText=Me.prototype.ga;Me.prototype.send=Me.prototype.ea;var lA=function(){return new na},uA=function(){return La()},Uc=Ma,hA=my,dA=Sr,Sf={rb:0,ub:1,vb:2,Ob:3,Tb:4,Qb:5,Rb:6,Pb:7,Nb:8,Sb:9,PROXY:10,NOPROXY:11,Lb:12,Hb:13,Ib:14,Gb:15,Jb:16,Kb:17,nb:18,mb:19,ob:20},fA=zi,fo=gy,pA=Me;const Cf="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gt{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}gt.UNAUTHENTICATED=new gt(null),gt.GOOGLE_CREDENTIALS=new gt("google-credentials-uid"),gt.FIRST_PARTY=new gt("first-party-uid"),gt.MOCK_USER=new gt("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Os="9.8.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yr=new Au("@firebase/firestore");function kf(){return yr.logLevel}function j(t,...e){if(yr.logLevel<=ue.DEBUG){const n=e.map(ch);yr.debug(`Firestore (${Os}): ${t}`,...n)}}function jn(t,...e){if(yr.logLevel<=ue.ERROR){const n=e.map(ch);yr.error(`Firestore (${Os}): ${t}`,...n)}}function xf(t,...e){if(yr.logLevel<=ue.WARN){const n=e.map(ch);yr.warn(`Firestore (${Os}): ${t}`,...n)}}function ch(t){if(typeof t=="string")return t;try{return e=t,JSON.stringify(e)}catch{return t}/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function X(t="Unexpected state"){const e=`FIRESTORE (${Os}) INTERNAL ASSERTION FAILED: `+t;throw jn(e),new Error(e)}function Te(t,e){t||X()}function J(t,e){return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const b={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class U extends Kn{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mn{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mA{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class gA{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(gt.UNAUTHENTICATED))}shutdown(){}}class yA{constructor(e){this.t=e,this.currentUser=gt.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){let r=this.i;const s=c=>this.i!==r?(r=this.i,n(c)):Promise.resolve();let i=new mn;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new mn,e.enqueueRetryable(()=>s(this.currentUser))};const o=()=>{const c=i;e.enqueueRetryable(async()=>{await c.promise,await s(this.currentUser)})},a=c=>{j("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=c,this.auth.addAuthTokenListener(this.o),o()};this.t.onInit(c=>a(c)),setTimeout(()=>{if(!this.auth){const c=this.t.getImmediate({optional:!0});c?a(c):(j("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new mn)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==e?(j("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(Te(typeof r.accessToken=="string"),new mA(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const e=this.auth&&this.auth.getUid();return Te(e===null||typeof e=="string"),new gt(e)}}class vA{constructor(e,n,r){this.type="FirstParty",this.user=gt.FIRST_PARTY,this.headers=new Map,this.headers.set("X-Goog-AuthUser",n);const s=e.auth.getAuthHeaderValueForFirstParty([]);s&&this.headers.set("Authorization",s),r&&this.headers.set("X-Goog-Iam-Authorization-Token",r)}}class _A{constructor(e,n,r){this.h=e,this.l=n,this.m=r}getToken(){return Promise.resolve(new vA(this.h,this.l,this.m))}start(e,n){e.enqueueRetryable(()=>n(gt.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class wA{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class EA{constructor(e){this.g=e,this.forceRefresh=!1,this.appCheck=null,this.p=null}start(e,n){const r=i=>{i.error!=null&&j("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${i.error.message}`);const o=i.token!==this.p;return this.p=i.token,j("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(i.token):Promise.resolve()};this.o=i=>{e.enqueueRetryable(()=>r(i))};const s=i=>{j("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=i,this.appCheck.addTokenListener(this.o)};this.g.onInit(i=>s(i)),setTimeout(()=>{if(!this.appCheck){const i=this.g.getImmediate({optional:!0});i?s(i):j("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(Te(typeof n.token=="string"),this.p=n.token,new wA(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lh{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=r=>this.I(r),this.T=r=>n.writeSequenceNumber(r))}I(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.T&&this.T(e),e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bA(t){const e=typeof self!="undefined"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */lh.A=-1;class Qy{static R(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/e.length)*e.length;let r="";for(;r.length<20;){const s=bA(40);for(let i=0;i<s.length;++i)r.length<20&&s[i]<n&&(r+=e.charAt(s[i]%e.length))}return r}}function he(t,e){return t<e?-1:t>e?1:0}function ls(t,e,n){return t.length===e.length&&t.every((r,s)=>n(r,e[s]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class it{constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new U(b.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new U(b.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<-62135596800)throw new U(b.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new U(b.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return it.fromMillis(Date.now())}static fromDate(e){return it.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),r=Math.floor(1e6*(e-1e3*n));return new it(n,r)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?he(this.nanoseconds,e.nanoseconds):he(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ne{constructor(e){this.timestamp=e}static fromTimestamp(e){return new ne(e)}static min(){return new ne(new it(0,0))}static max(){return new ne(new it(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Rf(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function Cr(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function Xy(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ii{constructor(e,n,r){n===void 0?n=0:n>e.length&&X(),r===void 0?r=e.length-n:r>e.length-n&&X(),this.segments=e,this.offset=n,this.len=r}get length(){return this.len}isEqual(e){return Ii.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof Ii?e.forEach(r=>{n.push(r)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,r=this.limit();n<r;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const r=Math.min(e.length,n.length);for(let s=0;s<r;s++){const i=e.get(s),o=n.get(s);if(i<o)return-1;if(i>o)return 1}return e.length<n.length?-1:e.length>n.length?1:0}}class Se extends Ii{construct(e,n,r){return new Se(e,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...e){const n=[];for(const r of e){if(r.indexOf("//")>=0)throw new U(b.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(s=>s.length>0))}return new Se(n)}static emptyPath(){return new Se([])}}const TA=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class _t extends Ii{construct(e,n,r){return new _t(e,n,r)}static isValidIdentifier(e){return TA.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),_t.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new _t(["__name__"])}static fromServerFormat(e){const n=[];let r="",s=0;const i=()=>{if(r.length===0)throw new U(b.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let o=!1;for(;s<e.length;){const a=e[s];if(a==="\\"){if(s+1===e.length)throw new U(b.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const c=e[s+1];if(c!=="\\"&&c!=="."&&c!=="`")throw new U(b.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=c,s+=2}else a==="`"?(o=!o,s++):a!=="."||o?(r+=a,s++):(i(),s++)}if(i(),o)throw new U(b.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new _t(n)}static emptyPath(){return new _t([])}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ai{constructor(e){this.fields=e,e.sort(_t.comparator)}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return ls(this.fields,e.fields,(n,r)=>n.isEqual(r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ze{constructor(e){this.binaryString=e}static fromBase64String(e){const n=atob(e);return new Ze(n)}static fromUint8Array(e){const n=function(r){let s="";for(let i=0;i<r.length;++i)s+=String.fromCharCode(r[i]);return s}(e);return new Ze(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return e=this.binaryString,btoa(e);var e}toUint8Array(){return function(e){const n=new Uint8Array(e.length);for(let r=0;r<e.length;r++)n[r]=e.charCodeAt(r);return n}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return he(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}Ze.EMPTY_BYTE_STRING=new Ze("");const IA=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function qn(t){if(Te(!!t),typeof t=="string"){let e=0;const n=IA.exec(t);if(Te(!!n),n[1]){let s=n[1];s=(s+"000000000").substr(0,9),e=Number(s)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:Pe(t.seconds),nanos:Pe(t.nanos)}}function Pe(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function us(t){return typeof t=="string"?Ze.fromBase64String(t):Ze.fromUint8Array(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Yy(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function Jy(t){const e=t.mapValue.fields.__previous_value__;return Yy(e)?Jy(e):e}function Si(t){const e=qn(t.mapValue.fields.__local_write_time__.timestampValue);return new it(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class AA{constructor(e,n,r,s,i,o,a,c){this.databaseId=e,this.appId=n,this.persistenceKey=r,this.host=s,this.ssl=i,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.useFetchStreams=c}}class hs{constructor(e,n){this.projectId=e,this.database=n||"(default)"}static empty(){return new hs("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof hs&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ha(t){return t==null}function ra(t){return t===0&&1/t==-1/0}function SA(t){return typeof t=="number"&&Number.isInteger(t)&&!ra(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class H{constructor(e){this.path=e}static fromPath(e){return new H(Se.fromString(e))}static fromName(e){return new H(Se.fromString(e).popFirst(5))}static empty(){return new H(Se.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&Se.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return Se.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new H(new Se(e.slice()))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const po={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function vr(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?Yy(t)?4:CA(t)?9007199254740991:10:X()}function rn(t,e){if(t===e)return!0;const n=vr(t);if(n!==vr(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return Si(t).isEqual(Si(e));case 3:return function(r,s){if(typeof r.timestampValue=="string"&&typeof s.timestampValue=="string"&&r.timestampValue.length===s.timestampValue.length)return r.timestampValue===s.timestampValue;const i=qn(r.timestampValue),o=qn(s.timestampValue);return i.seconds===o.seconds&&i.nanos===o.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(r,s){return us(r.bytesValue).isEqual(us(s.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(r,s){return Pe(r.geoPointValue.latitude)===Pe(s.geoPointValue.latitude)&&Pe(r.geoPointValue.longitude)===Pe(s.geoPointValue.longitude)}(t,e);case 2:return function(r,s){if("integerValue"in r&&"integerValue"in s)return Pe(r.integerValue)===Pe(s.integerValue);if("doubleValue"in r&&"doubleValue"in s){const i=Pe(r.doubleValue),o=Pe(s.doubleValue);return i===o?ra(i)===ra(o):isNaN(i)&&isNaN(o)}return!1}(t,e);case 9:return ls(t.arrayValue.values||[],e.arrayValue.values||[],rn);case 10:return function(r,s){const i=r.mapValue.fields||{},o=s.mapValue.fields||{};if(Rf(i)!==Rf(o))return!1;for(const a in i)if(i.hasOwnProperty(a)&&(o[a]===void 0||!rn(i[a],o[a])))return!1;return!0}(t,e);default:return X()}}function Ci(t,e){return(t.values||[]).find(n=>rn(n,e))!==void 0}function ds(t,e){if(t===e)return 0;const n=vr(t),r=vr(e);if(n!==r)return he(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return he(t.booleanValue,e.booleanValue);case 2:return function(s,i){const o=Pe(s.integerValue||s.doubleValue),a=Pe(i.integerValue||i.doubleValue);return o<a?-1:o>a?1:o===a?0:isNaN(o)?isNaN(a)?0:-1:1}(t,e);case 3:return Of(t.timestampValue,e.timestampValue);case 4:return Of(Si(t),Si(e));case 5:return he(t.stringValue,e.stringValue);case 6:return function(s,i){const o=us(s),a=us(i);return o.compareTo(a)}(t.bytesValue,e.bytesValue);case 7:return function(s,i){const o=s.split("/"),a=i.split("/");for(let c=0;c<o.length&&c<a.length;c++){const l=he(o[c],a[c]);if(l!==0)return l}return he(o.length,a.length)}(t.referenceValue,e.referenceValue);case 8:return function(s,i){const o=he(Pe(s.latitude),Pe(i.latitude));return o!==0?o:he(Pe(s.longitude),Pe(i.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return function(s,i){const o=s.values||[],a=i.values||[];for(let c=0;c<o.length&&c<a.length;++c){const l=ds(o[c],a[c]);if(l)return l}return he(o.length,a.length)}(t.arrayValue,e.arrayValue);case 10:return function(s,i){if(s===po.mapValue&&i===po.mapValue)return 0;if(s===po.mapValue)return 1;if(i===po.mapValue)return-1;const o=s.fields||{},a=Object.keys(o),c=i.fields||{},l=Object.keys(c);a.sort(),l.sort();for(let u=0;u<a.length&&u<l.length;++u){const h=he(a[u],l[u]);if(h!==0)return h;const d=ds(o[a[u]],c[l[u]]);if(d!==0)return d}return he(a.length,l.length)}(t.mapValue,e.mapValue);default:throw X()}}function Of(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return he(t,e);const n=qn(t),r=qn(e),s=he(n.seconds,r.seconds);return s!==0?s:he(n.nanos,r.nanos)}function ns(t){return Ll(t)}function Ll(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(r){const s=qn(r);return`time(${s.seconds},${s.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?us(t.bytesValue).toBase64():"referenceValue"in t?(n=t.referenceValue,H.fromName(n).toString()):"geoPointValue"in t?`geo(${(e=t.geoPointValue).latitude},${e.longitude})`:"arrayValue"in t?function(r){let s="[",i=!0;for(const o of r.values||[])i?i=!1:s+=",",s+=Ll(o);return s+"]"}(t.arrayValue):"mapValue"in t?function(r){const s=Object.keys(r.fields||{}).sort();let i="{",o=!0;for(const a of s)o?o=!1:i+=",",i+=`${a}:${Ll(r.fields[a])}`;return i+"}"}(t.mapValue):X();var e,n}function Nf(t,e){return{referenceValue:`projects/${t.projectId}/databases/${t.database}/documents/${e.path.canonicalString()}`}}function Ml(t){return!!t&&"integerValue"in t}function uh(t){return!!t&&"arrayValue"in t}function Df(t){return!!t&&"nullValue"in t}function Pf(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function ko(t){return!!t&&"mapValue"in t}function ii(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return Cr(t.mapValue.fields,(n,r)=>e.mapValue.fields[n]=ii(r)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=ii(t.arrayValue.values[n]);return e}return Object.assign({},t)}function CA(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class St{constructor(e){this.value=e}static empty(){return new St({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let r=0;r<e.length-1;++r)if(n=(n.mapValue.fields||{})[e.get(r)],!ko(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=ii(n)}setAll(e){let n=_t.emptyPath(),r={},s=[];e.forEach((o,a)=>{if(!n.isImmediateParentOf(a)){const c=this.getFieldsMap(n);this.applyChanges(c,r,s),r={},s=[],n=a.popLast()}o?r[a.lastSegment()]=ii(o):s.push(a.lastSegment())});const i=this.getFieldsMap(n);this.applyChanges(i,r,s)}delete(e){const n=this.field(e.popLast());ko(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return rn(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<e.length;++r){let s=n.mapValue.fields[e.get(r)];ko(s)&&s.mapValue.fields||(s={mapValue:{fields:{}}},n.mapValue.fields[e.get(r)]=s),n=s}return n.mapValue.fields}applyChanges(e,n,r){Cr(n,(s,i)=>e[s]=i);for(const s of r)delete e[s]}clone(){return new St(ii(this.value))}}function Zy(t){const e=[];return Cr(t.fields,(n,r)=>{const s=new _t([n]);if(ko(r)){const i=Zy(r.mapValue).fields;if(i.length===0)e.push(s);else for(const o of i)e.push(s.child(o))}else e.push(s)}),new Ai(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rt{constructor(e,n,r,s,i,o){this.key=e,this.documentType=n,this.version=r,this.readTime=s,this.data=i,this.documentState=o}static newInvalidDocument(e){return new rt(e,0,ne.min(),ne.min(),St.empty(),0)}static newFoundDocument(e,n,r){return new rt(e,1,n,ne.min(),r,0)}static newNoDocument(e,n){return new rt(e,2,n,ne.min(),St.empty(),0)}static newUnknownDocument(e,n){return new rt(e,3,n,ne.min(),St.empty(),2)}convertToFoundDocument(e,n){return this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=St.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=St.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof rt&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new rt(this.key,this.documentType,this.version,this.readTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}function kA(t,e){const n=t.toTimestamp().seconds,r=t.toTimestamp().nanoseconds+1,s=ne.fromTimestamp(r===1e9?new it(n+1,0):new it(n,r));return new _r(s,H.empty(),e)}function xA(t){return new _r(t.readTime,t.key,-1)}class _r{constructor(e,n,r){this.readTime=e,this.documentKey=n,this.largestBatchId=r}static min(){return new _r(ne.min(),H.empty(),-1)}static max(){return new _r(ne.max(),H.empty(),-1)}}function RA(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=H.comparator(t.documentKey,e.documentKey),n!==0?n:he(t.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ze{constructor(e,n){this.comparator=e,this.root=n||Ge.EMPTY}insert(e,n){return new ze(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,Ge.BLACK,null,null))}remove(e){return new ze(this.comparator,this.root.remove(e,this.comparator).copy(null,null,Ge.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(e){let n=0,r=this.root;for(;!r.isEmpty();){const s=this.comparator(e,r.key);if(s===0)return n+r.left.size;s<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,r)=>(e(n,r),!1))}toString(){const e=[];return this.inorderTraversal((n,r)=>(e.push(`${n}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new mo(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new mo(this.root,e,this.comparator,!1)}getReverseIterator(){return new mo(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new mo(this.root,e,this.comparator,!0)}}class mo{constructor(e,n,r,s){this.isReverse=s,this.nodeStack=[];let i=1;for(;!e.isEmpty();)if(i=n?r(e.key,n):1,n&&s&&(i*=-1),i<0)e=this.isReverse?e.left:e.right;else{if(i===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class Ge{constructor(e,n,r,s,i){this.key=e,this.value=n,this.color=r!=null?r:Ge.RED,this.left=s!=null?s:Ge.EMPTY,this.right=i!=null?i:Ge.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,r,s,i){return new Ge(e!=null?e:this.key,n!=null?n:this.value,r!=null?r:this.color,s!=null?s:this.left,i!=null?i:this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let s=this;const i=r(e,s.key);return s=i<0?s.copy(null,null,null,s.left.insert(e,n,r),null):i===0?s.copy(null,n,null,null,null):s.copy(null,null,null,null,s.right.insert(e,n,r)),s.fixUp()}removeMin(){if(this.left.isEmpty())return Ge.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let r,s=this;if(n(e,s.key)<0)s.left.isEmpty()||s.left.isRed()||s.left.left.isRed()||(s=s.moveRedLeft()),s=s.copy(null,null,null,s.left.remove(e,n),null);else{if(s.left.isRed()&&(s=s.rotateRight()),s.right.isEmpty()||s.right.isRed()||s.right.left.isRed()||(s=s.moveRedRight()),n(e,s.key)===0){if(s.right.isEmpty())return Ge.EMPTY;r=s.right.min(),s=s.copy(r.key,r.value,null,null,s.right.removeMin())}s=s.copy(null,null,null,null,s.right.remove(e,n))}return s.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,Ge.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,Ge.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw X();const e=this.left.check();if(e!==this.right.check())throw X();return e+(this.isRed()?0:1)}}Ge.EMPTY=null,Ge.RED=!0,Ge.BLACK=!1;Ge.EMPTY=new class{constructor(){this.size=0}get key(){throw X()}get value(){throw X()}get color(){throw X()}get left(){throw X()}get right(){throw X()}copy(t,e,n,r,s){return this}insert(t,e,n){return new Ge(t,e)}remove(t,e){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Je{constructor(e){this.comparator=e,this.data=new ze(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,r)=>(e(n),!1))}forEachInRange(e,n){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const s=r.getNext();if(this.comparator(s.key,e[1])>=0)return;n(s.key)}}forEachWhile(e,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new Lf(this.data.getIterator())}getIteratorFrom(e){return new Lf(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(r=>{n=n.add(r)}),n}isEqual(e){if(!(e instanceof Je)||this.size!==e.size)return!1;const n=this.data.getIterator(),r=e.data.getIterator();for(;n.hasNext();){const s=n.getNext().key,i=r.getNext().key;if(this.comparator(s,i)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new Je(this.comparator);return n.data=e,n}}class Lf{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class OA{constructor(e,n=null,r=[],s=[],i=null,o=null,a=null){this.path=e,this.collectionGroup=n,this.orderBy=r,this.filters=s,this.limit=i,this.startAt=o,this.endAt=a,this.P=null}}function Mf(t,e=null,n=[],r=[],s=null,i=null,o=null){return new OA(t,e,n,r,s,i,o)}function hh(t){const e=J(t);if(e.P===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(r=>{return(s=r).field.canonicalString()+s.op.toString()+ns(s.value);var s}).join(","),n+="|ob:",n+=e.orderBy.map(r=>function(s){return s.field.canonicalString()+s.dir}(r)).join(","),Ha(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(r=>ns(r)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(r=>ns(r)).join(",")),e.P=n}return e.P}function NA(t){let e=t.path.canonicalString();return t.collectionGroup!==null&&(e+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(e+=`, filters: [${t.filters.map(n=>{return`${(r=n).field.canonicalString()} ${r.op} ${ns(r.value)}`;var r}).join(", ")}]`),Ha(t.limit)||(e+=", limit: "+t.limit),t.orderBy.length>0&&(e+=`, orderBy: [${t.orderBy.map(n=>function(r){return`${r.field.canonicalString()} (${r.dir})`}(n)).join(", ")}]`),t.startAt&&(e+=", startAt: ",e+=t.startAt.inclusive?"b:":"a:",e+=t.startAt.position.map(n=>ns(n)).join(",")),t.endAt&&(e+=", endAt: ",e+=t.endAt.inclusive?"a:":"b:",e+=t.endAt.position.map(n=>ns(n)).join(",")),`Target(${e})`}function dh(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let s=0;s<t.orderBy.length;s++)if(!BA(t.orderBy[s],e.orderBy[s]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let s=0;s<t.filters.length;s++)if(n=t.filters[s],r=e.filters[s],n.op!==r.op||!n.field.isEqual(r.field)||!rn(n.value,r.value))return!1;var n,r;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!$f(t.startAt,e.startAt)&&$f(t.endAt,e.endAt)}function Ul(t){return H.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}class ft extends class{}{constructor(e,n,r){super(),this.field=e,this.op=n,this.value=r}static create(e,n,r){return e.isKeyField()?n==="in"||n==="not-in"?this.V(e,n,r):new DA(e,n,r):n==="array-contains"?new MA(e,r):n==="in"?new UA(e,r):n==="not-in"?new $A(e,r):n==="array-contains-any"?new FA(e,r):new ft(e,n,r)}static V(e,n,r){return n==="in"?new PA(e,r):new LA(e,r)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&this.v(ds(n,this.value)):n!==null&&vr(this.value)===vr(n)&&this.v(ds(n,this.value))}v(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return X()}}S(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}}class DA extends ft{constructor(e,n,r){super(e,n,r),this.key=H.fromName(r.referenceValue)}matches(e){const n=H.comparator(e.key,this.key);return this.v(n)}}class PA extends ft{constructor(e,n){super(e,"in",n),this.keys=ev("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class LA extends ft{constructor(e,n){super(e,"not-in",n),this.keys=ev("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function ev(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(r=>H.fromName(r.referenceValue))}class MA extends ft{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return uh(n)&&Ci(n.arrayValue,this.value)}}class UA extends ft{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&Ci(this.value.arrayValue,n)}}class $A extends ft{constructor(e,n){super(e,"not-in",n)}matches(e){if(Ci(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&!Ci(this.value.arrayValue,n)}}class FA extends ft{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!uh(n)||!n.arrayValue.values)&&n.arrayValue.values.some(r=>Ci(this.value.arrayValue,r))}}class sa{constructor(e,n){this.position=e,this.inclusive=n}}class rs{constructor(e,n="asc"){this.field=e,this.dir=n}}function BA(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}function Uf(t,e,n){let r=0;for(let s=0;s<t.position.length;s++){const i=e[s],o=t.position[s];if(i.field.isKeyField()?r=H.comparator(H.fromName(o.referenceValue),n.key):r=ds(o,n.data.field(i.field)),i.dir==="desc"&&(r*=-1),r!==0)break}return r}function $f(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!rn(t.position[n],e.position[n]))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ns{constructor(e,n=null,r=[],s=[],i=null,o="F",a=null,c=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=s,this.limit=i,this.limitType=o,this.startAt=a,this.endAt=c,this.D=null,this.C=null,this.startAt,this.endAt}}function VA(t,e,n,r,s,i,o,a){return new Ns(t,e,n,r,s,i,o,a)}function za(t){return new Ns(t)}function jA(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function fh(t){return t.explicitOrderBy.length>0?t.explicitOrderBy[0].field:null}function ph(t){for(const e of t.filters)if(e.S())return e.field;return null}function tv(t){return t.collectionGroup!==null}function ki(t){const e=J(t);if(e.D===null){e.D=[];const n=ph(e),r=fh(e);if(n!==null&&r===null)n.isKeyField()||e.D.push(new rs(n)),e.D.push(new rs(_t.keyField(),"asc"));else{let s=!1;for(const i of e.explicitOrderBy)e.D.push(i),i.field.isKeyField()&&(s=!0);if(!s){const i=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";e.D.push(new rs(_t.keyField(),i))}}}return e.D}function wr(t){const e=J(t);if(!e.C)if(e.limitType==="F")e.C=Mf(e.path,e.collectionGroup,ki(e),e.filters,e.limit,e.startAt,e.endAt);else{const n=[];for(const i of ki(e)){const o=i.dir==="desc"?"asc":"desc";n.push(new rs(i.field,o))}const r=e.endAt?new sa(e.endAt.position,e.endAt.inclusive):null,s=e.startAt?new sa(e.startAt.position,e.startAt.inclusive):null;e.C=Mf(e.path,e.collectionGroup,n,e.filters,e.limit,r,s)}return e.C}function nv(t,e,n){return new Ns(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function Ka(t,e){return dh(wr(t),wr(e))&&t.limitType===e.limitType}function rv(t){return`${hh(wr(t))}|lt:${t.limitType}`}function $l(t){return`Query(target=${NA(wr(t))}; limitType=${t.limitType})`}function mh(t,e){return e.isFoundDocument()&&function(n,r){const s=r.key.path;return n.collectionGroup!==null?r.key.hasCollectionId(n.collectionGroup)&&n.path.isPrefixOf(s):H.isDocumentKey(n.path)?n.path.isEqual(s):n.path.isImmediateParentOf(s)}(t,e)&&function(n,r){for(const s of n.explicitOrderBy)if(!s.field.isKeyField()&&r.data.field(s.field)===null)return!1;return!0}(t,e)&&function(n,r){for(const s of n.filters)if(!s.matches(r))return!1;return!0}(t,e)&&function(n,r){return!(n.startAt&&!function(s,i,o){const a=Uf(s,i,o);return s.inclusive?a<=0:a<0}(n.startAt,ki(n),r)||n.endAt&&!function(s,i,o){const a=Uf(s,i,o);return s.inclusive?a>=0:a>0}(n.endAt,ki(n),r))}(t,e)}function qA(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function sv(t){return(e,n)=>{let r=!1;for(const s of ki(t)){const i=HA(s,e,n);if(i!==0)return i;r=r||s.field.isKeyField()}return 0}}function HA(t,e,n){const r=t.field.isKeyField()?H.comparator(e.key,n.key):function(s,i,o){const a=i.data.field(s),c=o.data.field(s);return a!==null&&c!==null?ds(a,c):X()}(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return X()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function iv(t,e){if(t.N){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:ra(e)?"-0":e}}function ov(t){return{integerValue:""+t}}function zA(t,e){return SA(e)?ov(e):iv(t,e)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ga{constructor(){this._=void 0}}function KA(t,e,n){return t instanceof xi?function(r,s){const i={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:r.seconds,nanos:r.nanoseconds}}}};return s&&(i.fields.__previous_value__=s),{mapValue:i}}(n,e):t instanceof Ri?cv(t,e):t instanceof Oi?lv(t,e):function(r,s){const i=av(r,s),o=Ff(i)+Ff(r.k);return Ml(i)&&Ml(r.k)?ov(o):iv(r.M,o)}(t,e)}function GA(t,e,n){return t instanceof Ri?cv(t,e):t instanceof Oi?lv(t,e):n}function av(t,e){return t instanceof ia?Ml(n=e)||function(r){return!!r&&"doubleValue"in r}(n)?e:{integerValue:0}:null;var n}class xi extends Ga{}class Ri extends Ga{constructor(e){super(),this.elements=e}}function cv(t,e){const n=uv(e);for(const r of t.elements)n.some(s=>rn(s,r))||n.push(r);return{arrayValue:{values:n}}}class Oi extends Ga{constructor(e){super(),this.elements=e}}function lv(t,e){let n=uv(e);for(const r of t.elements)n=n.filter(s=>!rn(s,r));return{arrayValue:{values:n}}}class ia extends Ga{constructor(e,n){super(),this.M=e,this.k=n}}function Ff(t){return Pe(t.integerValue||t.doubleValue)}function uv(t){return uh(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class WA{constructor(e,n){this.field=e,this.transform=n}}function QA(t,e){return t.field.isEqual(e.field)&&function(n,r){return n instanceof Ri&&r instanceof Ri||n instanceof Oi&&r instanceof Oi?ls(n.elements,r.elements,rn):n instanceof ia&&r instanceof ia?rn(n.k,r.k):n instanceof xi&&r instanceof xi}(t.transform,e.transform)}class XA{constructor(e,n){this.version=e,this.transformResults=n}}class Un{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new Un}static exists(e){return new Un(void 0,e)}static updateTime(e){return new Un(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function xo(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class Wa{}function YA(t,e,n){t instanceof Qa?function(r,s,i){const o=r.value.clone(),a=jf(r.fieldTransforms,s,i.transformResults);o.setAll(a),s.convertToFoundDocument(i.version,o).setHasCommittedMutations()}(t,e,n):t instanceof Ds?function(r,s,i){if(!xo(r.precondition,s))return void s.convertToUnknownDocument(i.version);const o=jf(r.fieldTransforms,s,i.transformResults),a=s.data;a.setAll(hv(r)),a.setAll(o),s.convertToFoundDocument(i.version,a).setHasCommittedMutations()}(t,e,n):function(r,s,i){s.convertToNoDocument(i.version).setHasCommittedMutations()}(0,e,n)}function Fl(t,e,n){t instanceof Qa?function(r,s,i){if(!xo(r.precondition,s))return;const o=r.value.clone(),a=qf(r.fieldTransforms,i,s);o.setAll(a),s.convertToFoundDocument(Vf(s),o).setHasLocalMutations()}(t,e,n):t instanceof Ds?function(r,s,i){if(!xo(r.precondition,s))return;const o=qf(r.fieldTransforms,i,s),a=s.data;a.setAll(hv(r)),a.setAll(o),s.convertToFoundDocument(Vf(s),a).setHasLocalMutations()}(t,e,n):function(r,s){xo(r.precondition,s)&&s.convertToNoDocument(ne.min())}(t,e)}function JA(t,e){let n=null;for(const r of t.fieldTransforms){const s=e.data.field(r.field),i=av(r.transform,s||null);i!=null&&(n==null&&(n=St.empty()),n.set(r.field,i))}return n||null}function Bf(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(n,r){return n===void 0&&r===void 0||!(!n||!r)&&ls(n,r,(s,i)=>QA(s,i))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}function Vf(t){return t.isFoundDocument()?t.version:ne.min()}class Qa extends Wa{constructor(e,n,r,s=[]){super(),this.key=e,this.value=n,this.precondition=r,this.fieldTransforms=s,this.type=0}}class Ds extends Wa{constructor(e,n,r,s,i=[]){super(),this.key=e,this.data=n,this.fieldMask=r,this.precondition=s,this.fieldTransforms=i,this.type=1}}function hv(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}}),e}function jf(t,e,n){const r=new Map;Te(t.length===n.length);for(let s=0;s<n.length;s++){const i=t[s],o=i.transform,a=e.data.field(i.field);r.set(i.field,GA(o,a,n[s]))}return r}function qf(t,e,n){const r=new Map;for(const s of t){const i=s.transform,o=n.data.field(s.field);r.set(s.field,KA(i,o,e))}return r}class ZA extends Wa{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}}class eS extends Wa{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tS{constructor(e){this.count=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var De,ie;function nS(t){switch(t){default:return X();case b.CANCELLED:case b.UNKNOWN:case b.DEADLINE_EXCEEDED:case b.RESOURCE_EXHAUSTED:case b.INTERNAL:case b.UNAVAILABLE:case b.UNAUTHENTICATED:return!1;case b.INVALID_ARGUMENT:case b.NOT_FOUND:case b.ALREADY_EXISTS:case b.PERMISSION_DENIED:case b.FAILED_PRECONDITION:case b.ABORTED:case b.OUT_OF_RANGE:case b.UNIMPLEMENTED:case b.DATA_LOSS:return!0}}function dv(t){if(t===void 0)return jn("GRPC error has no .code"),b.UNKNOWN;switch(t){case De.OK:return b.OK;case De.CANCELLED:return b.CANCELLED;case De.UNKNOWN:return b.UNKNOWN;case De.DEADLINE_EXCEEDED:return b.DEADLINE_EXCEEDED;case De.RESOURCE_EXHAUSTED:return b.RESOURCE_EXHAUSTED;case De.INTERNAL:return b.INTERNAL;case De.UNAVAILABLE:return b.UNAVAILABLE;case De.UNAUTHENTICATED:return b.UNAUTHENTICATED;case De.INVALID_ARGUMENT:return b.INVALID_ARGUMENT;case De.NOT_FOUND:return b.NOT_FOUND;case De.ALREADY_EXISTS:return b.ALREADY_EXISTS;case De.PERMISSION_DENIED:return b.PERMISSION_DENIED;case De.FAILED_PRECONDITION:return b.FAILED_PRECONDITION;case De.ABORTED:return b.ABORTED;case De.OUT_OF_RANGE:return b.OUT_OF_RANGE;case De.UNIMPLEMENTED:return b.UNIMPLEMENTED;case De.DATA_LOSS:return b.DATA_LOSS;default:return X()}}(ie=De||(De={}))[ie.OK=0]="OK",ie[ie.CANCELLED=1]="CANCELLED",ie[ie.UNKNOWN=2]="UNKNOWN",ie[ie.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",ie[ie.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",ie[ie.NOT_FOUND=5]="NOT_FOUND",ie[ie.ALREADY_EXISTS=6]="ALREADY_EXISTS",ie[ie.PERMISSION_DENIED=7]="PERMISSION_DENIED",ie[ie.UNAUTHENTICATED=16]="UNAUTHENTICATED",ie[ie.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",ie[ie.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",ie[ie.ABORTED=10]="ABORTED",ie[ie.OUT_OF_RANGE=11]="OUT_OF_RANGE",ie[ie.UNIMPLEMENTED=12]="UNIMPLEMENTED",ie[ie.INTERNAL=13]="INTERNAL",ie[ie.UNAVAILABLE=14]="UNAVAILABLE",ie[ie.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ps{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r!==void 0){for(const[s,i]of r)if(this.equalsFn(s,e))return i}}has(e){return this.get(e)!==void 0}set(e,n){const r=this.mapKeyFn(e),s=this.inner[r];if(s===void 0)return this.inner[r]=[[e,n]],void this.innerSize++;for(let i=0;i<s.length;i++)if(this.equalsFn(s[i][0],e))return void(s[i]=[e,n]);s.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r===void 0)return!1;for(let s=0;s<r.length;s++)if(this.equalsFn(r[s][0],e))return r.length===1?delete this.inner[n]:r.splice(s,1),this.innerSize--,!0;return!1}forEach(e){Cr(this.inner,(n,r)=>{for(const[s,i]of r)e(s,i)})}isEmpty(){return Xy(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rS=new ze(H.comparator);function Er(){return rS}const sS=new ze(H.comparator);function Bl(...t){let e=sS;for(const n of t)e=e.insert(n.key,n);return e}function $c(){return new Ps(t=>t.toString(),(t,e)=>t.isEqual(e))}const iS=new ze(H.comparator),oS=new Je(H.comparator);function Ce(...t){let e=oS;for(const n of t)e=e.add(n);return e}const aS=new Je(he);function fv(){return aS}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xa{constructor(e,n,r,s,i){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=r,this.documentUpdates=s,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(e,n){const r=new Map;return r.set(e,Wi.createSynthesizedTargetChangeForCurrentChange(e,n)),new Xa(ne.min(),r,fv(),Er(),Ce())}}class Wi{constructor(e,n,r,s,i){this.resumeToken=e,this.current=n,this.addedDocuments=r,this.modifiedDocuments=s,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(e,n){return new Wi(Ze.EMPTY_BYTE_STRING,n,Ce(),Ce(),Ce())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ro{constructor(e,n,r,s){this.O=e,this.removedTargetIds=n,this.key=r,this.F=s}}class pv{constructor(e,n){this.targetId=e,this.$=n}}class mv{constructor(e,n,r=Ze.EMPTY_BYTE_STRING,s=null){this.state=e,this.targetIds=n,this.resumeToken=r,this.cause=s}}class Hf{constructor(){this.B=0,this.L=Kf(),this.U=Ze.EMPTY_BYTE_STRING,this.q=!1,this.K=!0}get current(){return this.q}get resumeToken(){return this.U}get G(){return this.B!==0}get j(){return this.K}W(e){e.approximateByteSize()>0&&(this.K=!0,this.U=e)}H(){let e=Ce(),n=Ce(),r=Ce();return this.L.forEach((s,i)=>{switch(i){case 0:e=e.add(s);break;case 2:n=n.add(s);break;case 1:r=r.add(s);break;default:X()}}),new Wi(this.U,this.q,e,n,r)}J(){this.K=!1,this.L=Kf()}Y(e,n){this.K=!0,this.L=this.L.insert(e,n)}X(e){this.K=!0,this.L=this.L.remove(e)}Z(){this.B+=1}tt(){this.B-=1}et(){this.K=!0,this.q=!0}}class cS{constructor(e){this.nt=e,this.st=new Map,this.it=Er(),this.rt=zf(),this.ot=new Je(he)}ut(e){for(const n of e.O)e.F&&e.F.isFoundDocument()?this.at(n,e.F):this.ct(n,e.key,e.F);for(const n of e.removedTargetIds)this.ct(n,e.key,e.F)}ht(e){this.forEachTarget(e,n=>{const r=this.lt(n);switch(e.state){case 0:this.ft(n)&&r.W(e.resumeToken);break;case 1:r.tt(),r.G||r.J(),r.W(e.resumeToken);break;case 2:r.tt(),r.G||this.removeTarget(n);break;case 3:this.ft(n)&&(r.et(),r.W(e.resumeToken));break;case 4:this.ft(n)&&(this.dt(n),r.W(e.resumeToken));break;default:X()}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.st.forEach((r,s)=>{this.ft(s)&&n(s)})}_t(e){const n=e.targetId,r=e.$.count,s=this.wt(n);if(s){const i=s.target;if(Ul(i))if(r===0){const o=new H(i.path);this.ct(n,o,rt.newNoDocument(o,ne.min()))}else Te(r===1);else this.gt(n)!==r&&(this.dt(n),this.ot=this.ot.add(n))}}yt(e){const n=new Map;this.st.forEach((i,o)=>{const a=this.wt(o);if(a){if(i.current&&Ul(a.target)){const c=new H(a.target.path);this.it.get(c)!==null||this.It(o,c)||this.ct(o,c,rt.newNoDocument(c,e))}i.j&&(n.set(o,i.H()),i.J())}});let r=Ce();this.rt.forEach((i,o)=>{let a=!0;o.forEachWhile(c=>{const l=this.wt(c);return!l||l.purpose===2||(a=!1,!1)}),a&&(r=r.add(i))}),this.it.forEach((i,o)=>o.setReadTime(e));const s=new Xa(e,n,this.ot,this.it,r);return this.it=Er(),this.rt=zf(),this.ot=new Je(he),s}at(e,n){if(!this.ft(e))return;const r=this.It(e,n.key)?2:0;this.lt(e).Y(n.key,r),this.it=this.it.insert(n.key,n),this.rt=this.rt.insert(n.key,this.Tt(n.key).add(e))}ct(e,n,r){if(!this.ft(e))return;const s=this.lt(e);this.It(e,n)?s.Y(n,1):s.X(n),this.rt=this.rt.insert(n,this.Tt(n).delete(e)),r&&(this.it=this.it.insert(n,r))}removeTarget(e){this.st.delete(e)}gt(e){const n=this.lt(e).H();return this.nt.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}Z(e){this.lt(e).Z()}lt(e){let n=this.st.get(e);return n||(n=new Hf,this.st.set(e,n)),n}Tt(e){let n=this.rt.get(e);return n||(n=new Je(he),this.rt=this.rt.insert(e,n)),n}ft(e){const n=this.wt(e)!==null;return n||j("WatchChangeAggregator","Detected inactive target",e),n}wt(e){const n=this.st.get(e);return n&&n.G?null:this.nt.Et(e)}dt(e){this.st.set(e,new Hf),this.nt.getRemoteKeysForTarget(e).forEach(n=>{this.ct(e,n,null)})}It(e,n){return this.nt.getRemoteKeysForTarget(e).has(n)}}function zf(){return new ze(H.comparator)}function Kf(){return new ze(H.comparator)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lS=(()=>({asc:"ASCENDING",desc:"DESCENDING"}))(),uS=(()=>({"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"}))();class hS{constructor(e,n){this.databaseId=e,this.N=n}}function oa(t,e){return t.N?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function gv(t,e){return t.N?e.toBase64():e.toUint8Array()}function dS(t,e){return oa(t,e.toTimestamp())}function gn(t){return Te(!!t),ne.fromTimestamp(function(e){const n=qn(e);return new it(n.seconds,n.nanos)}(t))}function gh(t,e){return function(n){return new Se(["projects",n.projectId,"databases",n.database])}(t).child("documents").child(e).canonicalString()}function yv(t){const e=Se.fromString(t);return Te(wv(e)),e}function Vl(t,e){return gh(t.databaseId,e.path)}function Fc(t,e){const n=yv(e);if(n.get(1)!==t.databaseId.projectId)throw new U(b.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new U(b.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new H(vv(n))}function jl(t,e){return gh(t.databaseId,e)}function fS(t){const e=yv(t);return e.length===4?Se.emptyPath():vv(e)}function ql(t){return new Se(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function vv(t){return Te(t.length>4&&t.get(4)==="documents"),t.popFirst(5)}function Gf(t,e,n){return{name:Vl(t,e),fields:n.value.mapValue.fields}}function pS(t,e){let n;if("targetChange"in e){e.targetChange;const r=function(c){return c==="NO_CHANGE"?0:c==="ADD"?1:c==="REMOVE"?2:c==="CURRENT"?3:c==="RESET"?4:X()}(e.targetChange.targetChangeType||"NO_CHANGE"),s=e.targetChange.targetIds||[],i=function(c,l){return c.N?(Te(l===void 0||typeof l=="string"),Ze.fromBase64String(l||"")):(Te(l===void 0||l instanceof Uint8Array),Ze.fromUint8Array(l||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,a=o&&function(c){const l=c.code===void 0?b.UNKNOWN:dv(c.code);return new U(l,c.message||"")}(o);n=new mv(r,s,i,a||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const s=Fc(t,r.document.name),i=gn(r.document.updateTime),o=new St({mapValue:{fields:r.document.fields}}),a=rt.newFoundDocument(s,i,o),c=r.targetIds||[],l=r.removedTargetIds||[];n=new Ro(c,l,a.key,a)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const s=Fc(t,r.document),i=r.readTime?gn(r.readTime):ne.min(),o=rt.newNoDocument(s,i),a=r.removedTargetIds||[];n=new Ro([],a,o.key,o)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const s=Fc(t,r.document),i=r.removedTargetIds||[];n=new Ro([],i,s,null)}else{if(!("filter"in e))return X();{e.filter;const r=e.filter;r.targetId;const s=r.count||0,i=new tS(s),o=r.targetId;n=new pv(o,i)}}return n}function mS(t,e){let n;if(e instanceof Qa)n={update:Gf(t,e.key,e.value)};else if(e instanceof ZA)n={delete:Vl(t,e.key)};else if(e instanceof Ds)n={update:Gf(t,e.key,e.data),updateMask:AS(e.fieldMask)};else{if(!(e instanceof eS))return X();n={verify:Vl(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(r=>function(s,i){const o=i.transform;if(o instanceof xi)return{fieldPath:i.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(o instanceof Ri)return{fieldPath:i.field.canonicalString(),appendMissingElements:{values:o.elements}};if(o instanceof Oi)return{fieldPath:i.field.canonicalString(),removeAllFromArray:{values:o.elements}};if(o instanceof ia)return{fieldPath:i.field.canonicalString(),increment:o.k};throw X()}(0,r))),e.precondition.isNone||(n.currentDocument=function(r,s){return s.updateTime!==void 0?{updateTime:dS(r,s.updateTime)}:s.exists!==void 0?{exists:s.exists}:X()}(t,e.precondition)),n}function gS(t,e){return t&&t.length>0?(Te(e!==void 0),t.map(n=>function(r,s){let i=r.updateTime?gn(r.updateTime):gn(s);return i.isEqual(ne.min())&&(i=gn(s)),new XA(i,r.transformResults||[])}(n,e))):[]}function yS(t,e){return{documents:[jl(t,e.path)]}}function vS(t,e){const n={structuredQuery:{}},r=e.path;e.collectionGroup!==null?(n.parent=jl(t,r),n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(n.parent=jl(t,r.popLast()),n.structuredQuery.from=[{collectionId:r.lastSegment()}]);const s=function(c){if(c.length===0)return;const l=c.map(u=>function(h){if(h.op==="=="){if(Pf(h.value))return{unaryFilter:{field:Ur(h.field),op:"IS_NAN"}};if(Df(h.value))return{unaryFilter:{field:Ur(h.field),op:"IS_NULL"}}}else if(h.op==="!="){if(Pf(h.value))return{unaryFilter:{field:Ur(h.field),op:"IS_NOT_NAN"}};if(Df(h.value))return{unaryFilter:{field:Ur(h.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Ur(h.field),op:bS(h.op),value:h.value}}}(u));return l.length===1?l[0]:{compositeFilter:{op:"AND",filters:l}}}(e.filters);s&&(n.structuredQuery.where=s);const i=function(c){if(c.length!==0)return c.map(l=>function(u){return{field:Ur(u.field),direction:ES(u.dir)}}(l))}(e.orderBy);i&&(n.structuredQuery.orderBy=i);const o=function(c,l){return c.N||Ha(l)?l:{value:l}}(t,e.limit);var a;return o!==null&&(n.structuredQuery.limit=o),e.startAt&&(n.structuredQuery.startAt={before:(a=e.startAt).inclusive,values:a.position}),e.endAt&&(n.structuredQuery.endAt=function(c){return{before:!c.inclusive,values:c.position}}(e.endAt)),n}function _S(t){let e=fS(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let s=null;if(r>0){Te(r===1);const u=n.from[0];u.allDescendants?s=u.collectionId:e=e.child(u.collectionId)}let i=[];n.where&&(i=_v(n.where));let o=[];n.orderBy&&(o=n.orderBy.map(u=>function(h){return new rs(Qr(h.field),function(d){switch(d){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(h.direction))}(u)));let a=null;n.limit&&(a=function(u){let h;return h=typeof u=="object"?u.value:u,Ha(h)?null:h}(n.limit));let c=null;n.startAt&&(c=function(u){const h=!!u.before,d=u.values||[];return new sa(d,h)}(n.startAt));let l=null;return n.endAt&&(l=function(u){const h=!u.before,d=u.values||[];return new sa(d,h)}(n.endAt)),VA(e,s,o,i,a,"F",c,l)}function wS(t,e){const n=function(r,s){switch(s){case 0:return null;case 1:return"existence-filter-mismatch";case 2:return"limbo-document";default:return X()}}(0,e.purpose);return n==null?null:{"goog-listen-tags":n}}function _v(t){return t?t.unaryFilter!==void 0?[IS(t)]:t.fieldFilter!==void 0?[TS(t)]:t.compositeFilter!==void 0?t.compositeFilter.filters.map(e=>_v(e)).reduce((e,n)=>e.concat(n)):X():[]}function ES(t){return lS[t]}function bS(t){return uS[t]}function Ur(t){return{fieldPath:t.canonicalString()}}function Qr(t){return _t.fromServerFormat(t.fieldPath)}function TS(t){return ft.create(Qr(t.fieldFilter.field),function(e){switch(e){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return X()}}(t.fieldFilter.op),t.fieldFilter.value)}function IS(t){switch(t.unaryFilter.op){case"IS_NAN":const e=Qr(t.unaryFilter.field);return ft.create(e,"==",{doubleValue:NaN});case"IS_NULL":const n=Qr(t.unaryFilter.field);return ft.create(n,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const r=Qr(t.unaryFilter.field);return ft.create(r,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const s=Qr(t.unaryFilter.field);return ft.create(s,"!=",{nullValue:"NULL_VALUE"});default:return X()}}function AS(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function wv(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const SS="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class CS{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class x{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&X(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new x((r,s)=>{this.nextCallback=i=>{this.wrapSuccess(e,i).next(r,s)},this.catchCallback=i=>{this.wrapFailure(n,i).next(r,s)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof x?n:x.resolve(n)}catch(n){return x.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):x.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):x.reject(n)}static resolve(e){return new x((n,r)=>{n(e)})}static reject(e){return new x((n,r)=>{r(e)})}static waitFor(e){return new x((n,r)=>{let s=0,i=0,o=!1;e.forEach(a=>{++s,a.next(()=>{++i,o&&i===s&&n()},c=>r(c))}),o=!0,i===s&&n()})}static or(e){let n=x.resolve(!1);for(const r of e)n=n.next(s=>s?x.resolve(s):r());return n}static forEach(e,n){const r=[];return e.forEach((s,i)=>{r.push(n.call(this,s,i))}),this.waitFor(r)}}function Qi(t){return t.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kS{constructor(e,n,r,s){this.batchId=e,this.localWriteTime=n,this.baseMutations=r,this.mutations=s}applyToRemoteDocument(e,n){const r=n.mutationResults;for(let s=0;s<this.mutations.length;s++){const i=this.mutations[s];i.key.isEqual(e.key)&&YA(i,e,r[s])}}applyToLocalView(e){for(const n of this.baseMutations)n.key.isEqual(e.key)&&Fl(n,e,this.localWriteTime);for(const n of this.mutations)n.key.isEqual(e.key)&&Fl(n,e,this.localWriteTime)}applyToLocalDocumentSet(e){this.mutations.forEach(n=>{const r=e.get(n.key),s=r;this.applyToLocalView(s),r.isValidDocument()||s.convertToNoDocument(ne.min())})}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),Ce())}isEqual(e){return this.batchId===e.batchId&&ls(this.mutations,e.mutations,(n,r)=>Bf(n,r))&&ls(this.baseMutations,e.baseMutations,(n,r)=>Bf(n,r))}}class yh{constructor(e,n,r,s){this.batch=e,this.commitVersion=n,this.mutationResults=r,this.docVersions=s}static from(e,n,r){Te(e.mutations.length===r.length);let s=iS;const i=e.mutations;for(let o=0;o<i.length;o++)s=s.insert(i[o].key,r[o].version);return new yh(e,n,r,s)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xS{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lr{constructor(e,n,r,s,i=ne.min(),o=ne.min(),a=Ze.EMPTY_BYTE_STRING){this.target=e,this.targetId=n,this.purpose=r,this.sequenceNumber=s,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=a}withSequenceNumber(e){return new lr(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken)}withResumeToken(e,n){return new lr(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e)}withLastLimboFreeSnapshotVersion(e){return new lr(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class RS{constructor(e){this.Jt=e}}function OS(t){const e=_S({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?nv(e,e.limit,"L"):e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class NS{constructor(){this.qe=new DS}addToCollectionParentIndex(e,n){return this.qe.add(n),x.resolve()}getCollectionParents(e,n){return x.resolve(this.qe.getEntries(n))}addFieldIndex(e,n){return x.resolve()}deleteFieldIndex(e,n){return x.resolve()}getDocumentsMatchingTarget(e,n){return x.resolve(null)}getIndexType(e,n){return x.resolve(0)}getFieldIndexes(e,n){return x.resolve([])}getNextCollectionGroupToUpdate(e){return x.resolve(null)}getMinOffset(e,n){return x.resolve(_r.min())}updateCollectionGroup(e,n,r){return x.resolve()}updateIndexEntries(e,n){return x.resolve()}}class DS{constructor(){this.index={}}add(e){const n=e.lastSegment(),r=e.popLast(),s=this.index[n]||new Je(Se.comparator),i=!s.has(r);return this.index[n]=s.add(r),i}has(e){const n=e.lastSegment(),r=e.popLast(),s=this.index[n];return s&&s.has(r)}getEntries(e){return(this.index[e]||new Je(Se.comparator)).toArray()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fs{constructor(e){this.mn=e}next(){return this.mn+=2,this.mn}static gn(){return new fs(0)}static yn(){return new fs(-1)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Xi(t){if(t.code!==b.FAILED_PRECONDITION||t.message!==SS)throw t;j("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class PS{constructor(){this.changes=new Ps(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,rt.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?x.resolve(r):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class LS{constructor(e,n,r){this.ds=e,this.Bs=n,this.indexManager=r}Ls(e,n){return this.Bs.getAllMutationBatchesAffectingDocumentKey(e,n).next(r=>this.Us(e,n,r))}Us(e,n,r){return this.ds.getEntry(e,n).next(s=>{for(const i of r)i.applyToLocalView(s);return s})}qs(e,n){e.forEach((r,s)=>{for(const i of n)i.applyToLocalView(s)})}Ks(e,n){return this.ds.getEntries(e,n).next(r=>this.Gs(e,r).next(()=>r))}Gs(e,n){return this.Bs.getAllMutationBatchesAffectingDocumentKeys(e,n).next(r=>this.qs(n,r))}Qs(e,n,r){return function(s){return H.isDocumentKey(s.path)&&s.collectionGroup===null&&s.filters.length===0}(n)?this.js(e,n.path):tv(n)?this.Ws(e,n,r):this.zs(e,n,r)}js(e,n){return this.Ls(e,new H(n)).next(r=>{let s=Bl();return r.isFoundDocument()&&(s=s.insert(r.key,r)),s})}Ws(e,n,r){const s=n.collectionGroup;let i=Bl();return this.indexManager.getCollectionParents(e,s).next(o=>x.forEach(o,a=>{const c=function(l,u){return new Ns(u,null,l.explicitOrderBy.slice(),l.filters.slice(),l.limit,l.limitType,l.startAt,l.endAt)}(n,a.child(s));return this.zs(e,c,r).next(l=>{l.forEach((u,h)=>{i=i.insert(u,h)})})}).next(()=>i))}zs(e,n,r){let s;return this.ds.getAllFromCollection(e,n.path,r).next(i=>(s=i,this.Bs.getAllMutationBatchesAffectingQuery(e,n))).next(i=>{for(const o of i)for(const a of o.mutations){const c=a.key;let l=s.get(c);l==null&&(l=rt.newInvalidDocument(c),s=s.insert(c,l)),Fl(a,l,o.localWriteTime),l.isFoundDocument()||(s=s.remove(c))}}).next(()=>(s.forEach((i,o)=>{mh(n,o)||(s=s.remove(i))}),s))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vh{constructor(e,n,r,s){this.targetId=e,this.fromCache=n,this.Hs=r,this.Js=s}static Ys(e,n){let r=Ce(),s=Ce();for(const i of n.docChanges)switch(i.type){case 0:r=r.add(i.doc.key);break;case 1:s=s.add(i.doc.key)}return new vh(e,n.fromCache,r,s)}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class MS{constructor(){this.Xs=!1}initialize(e,n){this.Zs=e,this.indexManager=n,this.Xs=!0}Qs(e,n,r,s){return this.ti(e,n).next(i=>i||this.ei(e,n,s,r)).next(i=>i||this.ni(e,n))}ti(e,n){return x.resolve(null)}ei(e,n,r,s){return jA(n)||s.isEqual(ne.min())?this.ni(e,n):this.Zs.Ks(e,r).next(i=>{const o=this.si(n,i);return this.ii(n,o,r,s)?this.ni(e,n):(kf()<=ue.DEBUG&&j("QueryEngine","Re-using previous result from %s to execute query: %s",s.toString(),$l(n)),this.ri(e,o,n,kA(s,-1)))})}si(e,n){let r=new Je(sv(e));return n.forEach((s,i)=>{mh(e,i)&&(r=r.add(i))}),r}ii(e,n,r,s){if(e.limit===null)return!1;if(r.size!==n.size)return!0;const i=e.limitType==="F"?n.last():n.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(s)>0)}ni(e,n){return kf()<=ue.DEBUG&&j("QueryEngine","Using full collection scan to execute query:",$l(n)),this.Zs.Qs(e,n,_r.min())}ri(e,n,r,s){return this.Zs.Qs(e,r,s).next(i=>(n.forEach(o=>{i=i.insert(o.key,o)}),i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class US{constructor(e,n,r,s){this.persistence=e,this.oi=n,this.M=s,this.ui=new ze(he),this.ai=new Ps(i=>hh(i),dh),this.ci=new Map,this.hi=e.getRemoteDocumentCache(),this.fs=e.getTargetCache(),this._s=e.getBundleCache(),this.li(r)}li(e){this.indexManager=this.persistence.getIndexManager(e),this.Bs=this.persistence.getMutationQueue(e,this.indexManager),this.fi=new LS(this.hi,this.Bs,this.indexManager),this.hi.setIndexManager(this.indexManager),this.oi.initialize(this.fi,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.ui))}}function $S(t,e,n,r){return new US(t,e,n,r)}async function Ev(t,e){const n=J(t);return await n.persistence.runTransaction("Handle user change","readonly",r=>{let s;return n.Bs.getAllMutationBatches(r).next(i=>(s=i,n.li(e),n.Bs.getAllMutationBatches(r))).next(i=>{const o=[],a=[];let c=Ce();for(const l of s){o.push(l.batchId);for(const u of l.mutations)c=c.add(u.key)}for(const l of i){a.push(l.batchId);for(const u of l.mutations)c=c.add(u.key)}return n.fi.Ks(r,c).next(l=>({di:l,removedBatchIds:o,addedBatchIds:a}))})})}function FS(t,e){const n=J(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const s=e.batch.keys(),i=n.hi.newChangeBuffer({trackRemovals:!0});return function(o,a,c,l){const u=c.batch,h=u.keys();let d=x.resolve();return h.forEach(f=>{d=d.next(()=>l.getEntry(a,f)).next(m=>{const E=c.docVersions.get(f);Te(E!==null),m.version.compareTo(E)<0&&(u.applyToRemoteDocument(m,c),m.isValidDocument()&&(m.setReadTime(c.commitVersion),l.addEntry(m)))})}),d.next(()=>o.Bs.removeMutationBatch(a,u))}(n,r,e,i).next(()=>i.apply(r)).next(()=>n.Bs.performConsistencyCheck(r)).next(()=>n.fi.Ks(r,s))})}function bv(t){const e=J(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.fs.getLastRemoteSnapshotVersion(n))}function BS(t,e){const n=J(t),r=e.snapshotVersion;let s=n.ui;return n.persistence.runTransaction("Apply remote event","readwrite-primary",i=>{const o=n.hi.newChangeBuffer({trackRemovals:!0});s=n.ui;const a=[];e.targetChanges.forEach((l,u)=>{const h=s.get(u);if(!h)return;a.push(n.fs.removeMatchingKeys(i,l.removedDocuments,u).next(()=>n.fs.addMatchingKeys(i,l.addedDocuments,u)));let d=h.withSequenceNumber(i.currentSequenceNumber);e.targetMismatches.has(u)?d=d.withResumeToken(Ze.EMPTY_BYTE_STRING,ne.min()).withLastLimboFreeSnapshotVersion(ne.min()):l.resumeToken.approximateByteSize()>0&&(d=d.withResumeToken(l.resumeToken,r)),s=s.insert(u,d),function(f,m,E){return f.resumeToken.approximateByteSize()===0||m.snapshotVersion.toMicroseconds()-f.snapshotVersion.toMicroseconds()>=3e8?!0:E.addedDocuments.size+E.modifiedDocuments.size+E.removedDocuments.size>0}(h,d,l)&&a.push(n.fs.updateTargetData(i,d))});let c=Er();if(e.documentUpdates.forEach(l=>{e.resolvedLimboDocuments.has(l)&&a.push(n.persistence.referenceDelegate.updateLimboDocument(i,l))}),a.push(VS(i,o,e.documentUpdates).next(l=>{c=l})),!r.isEqual(ne.min())){const l=n.fs.getLastRemoteSnapshotVersion(i).next(u=>n.fs.setTargetsMetadata(i,i.currentSequenceNumber,r));a.push(l)}return x.waitFor(a).next(()=>o.apply(i)).next(()=>n.fi.Gs(i,c)).next(()=>c)}).then(i=>(n.ui=s,i))}function VS(t,e,n){let r=Ce();return n.forEach(s=>r=r.add(s)),e.getEntries(t,r).next(s=>{let i=Er();return n.forEach((o,a)=>{const c=s.get(o);a.isNoDocument()&&a.version.isEqual(ne.min())?(e.removeEntry(o,a.readTime),i=i.insert(o,a)):!c.isValidDocument()||a.version.compareTo(c.version)>0||a.version.compareTo(c.version)===0&&c.hasPendingWrites?(e.addEntry(a),i=i.insert(o,a)):j("LocalStore","Ignoring outdated watch update for ",o,". Current version:",c.version," Watch version:",a.version)}),i})}function jS(t,e){const n=J(t);return n.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=-1),n.Bs.getNextMutationBatchAfterBatchId(r,e)))}function qS(t,e){const n=J(t);return n.persistence.runTransaction("Allocate target","readwrite",r=>{let s;return n.fs.getTargetData(r,e).next(i=>i?(s=i,x.resolve(s)):n.fs.allocateTargetId(r).next(o=>(s=new lr(e,o,0,r.currentSequenceNumber),n.fs.addTargetData(r,s).next(()=>s))))}).then(r=>{const s=n.ui.get(r.targetId);return(s===null||r.snapshotVersion.compareTo(s.snapshotVersion)>0)&&(n.ui=n.ui.insert(r.targetId,r),n.ai.set(e,r.targetId)),r})}async function Hl(t,e,n){const r=J(t),s=r.ui.get(e),i=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",i,o=>r.persistence.referenceDelegate.removeTarget(o,s))}catch(o){if(!Qi(o))throw o;j("LocalStore",`Failed to update sequence numbers for target ${e}: ${o}`)}r.ui=r.ui.remove(e),r.ai.delete(s.target)}function Wf(t,e,n){const r=J(t);let s=ne.min(),i=Ce();return r.persistence.runTransaction("Execute query","readonly",o=>function(a,c,l){const u=J(a),h=u.ai.get(l);return h!==void 0?x.resolve(u.ui.get(h)):u.fs.getTargetData(c,l)}(r,o,wr(e)).next(a=>{if(a)return s=a.lastLimboFreeSnapshotVersion,r.fs.getMatchingKeysForTargetId(o,a.targetId).next(c=>{i=c})}).next(()=>r.oi.Qs(o,e,n?s:ne.min(),n?i:Ce())).next(a=>(HS(r,qA(e),a),{documents:a,_i:i})))}function HS(t,e,n){let r=ne.min();n.forEach((s,i)=>{i.readTime.compareTo(r)>0&&(r=i.readTime)}),t.ci.set(e,r)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zS{constructor(e){this.M=e,this.yi=new Map,this.pi=new Map}getBundleMetadata(e,n){return x.resolve(this.yi.get(n))}saveBundleMetadata(e,n){var r;return this.yi.set(n.id,{id:(r=n).id,version:r.version,createTime:gn(r.createTime)}),x.resolve()}getNamedQuery(e,n){return x.resolve(this.pi.get(n))}saveNamedQuery(e,n){return this.pi.set(n.name,function(r){return{name:r.name,query:OS(r.bundledQuery),readTime:gn(r.readTime)}}(n)),x.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class KS{constructor(){this.overlays=new ze(H.comparator),this.Ii=new Map}getOverlay(e,n){return x.resolve(this.overlays.get(n))}saveOverlays(e,n,r){return r.forEach((s,i)=>{this.Xt(e,n,i)}),x.resolve()}removeOverlaysForBatchId(e,n,r){const s=this.Ii.get(r);return s!==void 0&&(s.forEach(i=>this.overlays=this.overlays.remove(i)),this.Ii.delete(r)),x.resolve()}getOverlaysForCollection(e,n,r){const s=$c(),i=n.length+1,o=new H(n.child("")),a=this.overlays.getIteratorFrom(o);for(;a.hasNext();){const c=a.getNext().value,l=c.getKey();if(!n.isPrefixOf(l.path))break;l.path.length===i&&c.largestBatchId>r&&s.set(c.getKey(),c)}return x.resolve(s)}getOverlaysForCollectionGroup(e,n,r,s){let i=new ze((l,u)=>l-u);const o=this.overlays.getIterator();for(;o.hasNext();){const l=o.getNext().value;if(l.getKey().getCollectionGroup()===n&&l.largestBatchId>r){let u=i.get(l.largestBatchId);u===null&&(u=$c(),i=i.insert(l.largestBatchId,u)),u.set(l.getKey(),l)}}const a=$c(),c=i.getIterator();for(;c.hasNext()&&(c.getNext().value.forEach((l,u)=>a.set(l,u)),!(a.size()>=s)););return x.resolve(a)}Xt(e,n,r){if(r===null)return;const s=this.overlays.get(r.key);if(s!==null){const o=this.Ii.get(s.largestBatchId).delete(r.key);this.Ii.set(s.largestBatchId,o)}this.overlays=this.overlays.insert(r.key,new xS(n,r));let i=this.Ii.get(n);i===void 0&&(i=Ce(),this.Ii.set(n,i)),this.Ii.set(n,i.add(r.key))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _h{constructor(){this.Ti=new Je(Ve.Ei),this.Ai=new Je(Ve.Ri)}isEmpty(){return this.Ti.isEmpty()}addReference(e,n){const r=new Ve(e,n);this.Ti=this.Ti.add(r),this.Ai=this.Ai.add(r)}bi(e,n){e.forEach(r=>this.addReference(r,n))}removeReference(e,n){this.Pi(new Ve(e,n))}Vi(e,n){e.forEach(r=>this.removeReference(r,n))}vi(e){const n=new H(new Se([])),r=new Ve(n,e),s=new Ve(n,e+1),i=[];return this.Ai.forEachInRange([r,s],o=>{this.Pi(o),i.push(o.key)}),i}Si(){this.Ti.forEach(e=>this.Pi(e))}Pi(e){this.Ti=this.Ti.delete(e),this.Ai=this.Ai.delete(e)}Di(e){const n=new H(new Se([])),r=new Ve(n,e),s=new Ve(n,e+1);let i=Ce();return this.Ai.forEachInRange([r,s],o=>{i=i.add(o.key)}),i}containsKey(e){const n=new Ve(e,0),r=this.Ti.firstAfterOrEqual(n);return r!==null&&e.isEqual(r.key)}}class Ve{constructor(e,n){this.key=e,this.Ci=n}static Ei(e,n){return H.comparator(e.key,n.key)||he(e.Ci,n.Ci)}static Ri(e,n){return he(e.Ci,n.Ci)||H.comparator(e.key,n.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class GS{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.Bs=[],this.xi=1,this.Ni=new Je(Ve.Ei)}checkEmpty(e){return x.resolve(this.Bs.length===0)}addMutationBatch(e,n,r,s){const i=this.xi;this.xi++,this.Bs.length>0&&this.Bs[this.Bs.length-1];const o=new kS(i,n,r,s);this.Bs.push(o);for(const a of s)this.Ni=this.Ni.add(new Ve(a.key,i)),this.indexManager.addToCollectionParentIndex(e,a.key.path.popLast());return x.resolve(o)}lookupMutationBatch(e,n){return x.resolve(this.ki(n))}getNextMutationBatchAfterBatchId(e,n){const r=n+1,s=this.Mi(r),i=s<0?0:s;return x.resolve(this.Bs.length>i?this.Bs[i]:null)}getHighestUnacknowledgedBatchId(){return x.resolve(this.Bs.length===0?-1:this.xi-1)}getAllMutationBatches(e){return x.resolve(this.Bs.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const r=new Ve(n,0),s=new Ve(n,Number.POSITIVE_INFINITY),i=[];return this.Ni.forEachInRange([r,s],o=>{const a=this.ki(o.Ci);i.push(a)}),x.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new Je(he);return n.forEach(s=>{const i=new Ve(s,0),o=new Ve(s,Number.POSITIVE_INFINITY);this.Ni.forEachInRange([i,o],a=>{r=r.add(a.Ci)})}),x.resolve(this.Oi(r))}getAllMutationBatchesAffectingQuery(e,n){const r=n.path,s=r.length+1;let i=r;H.isDocumentKey(i)||(i=i.child(""));const o=new Ve(new H(i),0);let a=new Je(he);return this.Ni.forEachWhile(c=>{const l=c.key.path;return!!r.isPrefixOf(l)&&(l.length===s&&(a=a.add(c.Ci)),!0)},o),x.resolve(this.Oi(a))}Oi(e){const n=[];return e.forEach(r=>{const s=this.ki(r);s!==null&&n.push(s)}),n}removeMutationBatch(e,n){Te(this.Fi(n.batchId,"removed")===0),this.Bs.shift();let r=this.Ni;return x.forEach(n.mutations,s=>{const i=new Ve(s.key,n.batchId);return r=r.delete(i),this.referenceDelegate.markPotentiallyOrphaned(e,s.key)}).next(()=>{this.Ni=r})}_n(e){}containsKey(e,n){const r=new Ve(n,0),s=this.Ni.firstAfterOrEqual(r);return x.resolve(n.isEqual(s&&s.key))}performConsistencyCheck(e){return this.Bs.length,x.resolve()}Fi(e,n){return this.Mi(e)}Mi(e){return this.Bs.length===0?0:e-this.Bs[0].batchId}ki(e){const n=this.Mi(e);return n<0||n>=this.Bs.length?null:this.Bs[n]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class WS{constructor(e){this.$i=e,this.docs=new ze(H.comparator),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const r=n.key,s=this.docs.get(r),i=s?s.size:0,o=this.$i(n);return this.docs=this.docs.insert(r,{document:n.mutableCopy(),size:o}),this.size+=o-i,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const r=this.docs.get(n);return x.resolve(r?r.document.mutableCopy():rt.newInvalidDocument(n))}getEntries(e,n){let r=Er();return n.forEach(s=>{const i=this.docs.get(s);r=r.insert(s,i?i.document.mutableCopy():rt.newInvalidDocument(s))}),x.resolve(r)}getAllFromCollection(e,n,r){let s=Er();const i=new H(n.child("")),o=this.docs.getIteratorFrom(i);for(;o.hasNext();){const{key:a,value:{document:c}}=o.getNext();if(!n.isPrefixOf(a.path))break;a.path.length>n.length+1||RA(xA(c),r)<=0||(s=s.insert(c.key,c.mutableCopy()))}return x.resolve(s)}getAllFromCollectionGroup(e,n,r,s){X()}Bi(e,n){return x.forEach(this.docs,r=>n(r))}newChangeBuffer(e){return new QS(this)}getSize(e){return x.resolve(this.size)}}class QS extends PS{constructor(e){super(),this.Kn=e}applyChanges(e){const n=[];return this.changes.forEach((r,s)=>{s.isValidDocument()?n.push(this.Kn.addEntry(e,s)):this.Kn.removeEntry(r)}),x.waitFor(n)}getFromCache(e,n){return this.Kn.getEntry(e,n)}getAllFromCache(e,n){return this.Kn.getEntries(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class XS{constructor(e){this.persistence=e,this.Li=new Ps(n=>hh(n),dh),this.lastRemoteSnapshotVersion=ne.min(),this.highestTargetId=0,this.Ui=0,this.qi=new _h,this.targetCount=0,this.Ki=fs.gn()}forEachTarget(e,n){return this.Li.forEach((r,s)=>n(s)),x.resolve()}getLastRemoteSnapshotVersion(e){return x.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return x.resolve(this.Ui)}allocateTargetId(e){return this.highestTargetId=this.Ki.next(),x.resolve(this.highestTargetId)}setTargetsMetadata(e,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this.Ui&&(this.Ui=n),x.resolve()}Tn(e){this.Li.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.Ki=new fs(n),this.highestTargetId=n),e.sequenceNumber>this.Ui&&(this.Ui=e.sequenceNumber)}addTargetData(e,n){return this.Tn(n),this.targetCount+=1,x.resolve()}updateTargetData(e,n){return this.Tn(n),x.resolve()}removeTargetData(e,n){return this.Li.delete(n.target),this.qi.vi(n.targetId),this.targetCount-=1,x.resolve()}removeTargets(e,n,r){let s=0;const i=[];return this.Li.forEach((o,a)=>{a.sequenceNumber<=n&&r.get(a.targetId)===null&&(this.Li.delete(o),i.push(this.removeMatchingKeysForTargetId(e,a.targetId)),s++)}),x.waitFor(i).next(()=>s)}getTargetCount(e){return x.resolve(this.targetCount)}getTargetData(e,n){const r=this.Li.get(n)||null;return x.resolve(r)}addMatchingKeys(e,n,r){return this.qi.bi(n,r),x.resolve()}removeMatchingKeys(e,n,r){this.qi.Vi(n,r);const s=this.persistence.referenceDelegate,i=[];return s&&n.forEach(o=>{i.push(s.markPotentiallyOrphaned(e,o))}),x.waitFor(i)}removeMatchingKeysForTargetId(e,n){return this.qi.vi(n),x.resolve()}getMatchingKeysForTargetId(e,n){const r=this.qi.Di(n);return x.resolve(r)}containsKey(e,n){return x.resolve(this.qi.containsKey(n))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class YS{constructor(e,n){this.Gi={},this.overlays={},this.es=new lh(0),this.ns=!1,this.ns=!0,this.referenceDelegate=e(this),this.fs=new XS(this),this.indexManager=new NS,this.ds=function(r){return new WS(r)}(r=>this.referenceDelegate.Qi(r)),this.M=new RS(n),this._s=new zS(this.M)}start(){return Promise.resolve()}shutdown(){return this.ns=!1,Promise.resolve()}get started(){return this.ns}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new KS,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let r=this.Gi[e.toKey()];return r||(r=new GS(n,this.referenceDelegate),this.Gi[e.toKey()]=r),r}getTargetCache(){return this.fs}getRemoteDocumentCache(){return this.ds}getBundleCache(){return this._s}runTransaction(e,n,r){j("MemoryPersistence","Starting transaction:",e);const s=new JS(this.es.next());return this.referenceDelegate.ji(),r(s).next(i=>this.referenceDelegate.Wi(s).next(()=>i)).toPromise().then(i=>(s.raiseOnCommittedEvent(),i))}zi(e,n){return x.or(Object.values(this.Gi).map(r=>()=>r.containsKey(e,n)))}}class JS extends CS{constructor(e){super(),this.currentSequenceNumber=e}}class wh{constructor(e){this.persistence=e,this.Hi=new _h,this.Ji=null}static Yi(e){return new wh(e)}get Xi(){if(this.Ji)return this.Ji;throw X()}addReference(e,n,r){return this.Hi.addReference(r,n),this.Xi.delete(r.toString()),x.resolve()}removeReference(e,n,r){return this.Hi.removeReference(r,n),this.Xi.add(r.toString()),x.resolve()}markPotentiallyOrphaned(e,n){return this.Xi.add(n.toString()),x.resolve()}removeTarget(e,n){this.Hi.vi(n.targetId).forEach(s=>this.Xi.add(s.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,n.targetId).next(s=>{s.forEach(i=>this.Xi.add(i.toString()))}).next(()=>r.removeTargetData(e,n))}ji(){this.Ji=new Set}Wi(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return x.forEach(this.Xi,r=>{const s=H.fromPath(r);return this.Zi(e,s).next(i=>{i||n.removeEntry(s,ne.min())})}).next(()=>(this.Ji=null,n.apply(e)))}updateLimboDocument(e,n){return this.Zi(e,n).next(r=>{r?this.Xi.delete(n.toString()):this.Xi.add(n.toString())})}Qi(e){return 0}Zi(e,n){return x.or([()=>x.resolve(this.Hi.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.zi(e,n)])}}class Qf{constructor(){this.activeTargetIds=fv()}nr(e){this.activeTargetIds=this.activeTargetIds.add(e)}sr(e){this.activeTargetIds=this.activeTargetIds.delete(e)}er(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class ZS{constructor(){this.Ur=new Qf,this.qr={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,r){}addLocalQueryTarget(e){return this.Ur.nr(e),this.qr[e]||"not-current"}updateQueryState(e,n,r){this.qr[e]=n}removeLocalQueryTarget(e){this.Ur.sr(e)}isLocalQueryTarget(e){return this.Ur.activeTargetIds.has(e)}clearQueryState(e){delete this.qr[e]}getAllActiveQueryTargets(){return this.Ur.activeTargetIds}isActiveQueryTarget(e){return this.Ur.activeTargetIds.has(e)}start(){return this.Ur=new Qf,Promise.resolve()}handleUserChange(e,n,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eC{Kr(e){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xf{constructor(){this.Gr=()=>this.Qr(),this.jr=()=>this.Wr(),this.zr=[],this.Hr()}Kr(e){this.zr.push(e)}shutdown(){window.removeEventListener("online",this.Gr),window.removeEventListener("offline",this.jr)}Hr(){window.addEventListener("online",this.Gr),window.addEventListener("offline",this.jr)}Qr(){j("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.zr)e(0)}Wr(){j("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.zr)e(1)}static vt(){return typeof window!="undefined"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tC={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nC{constructor(e){this.Jr=e.Jr,this.Yr=e.Yr}Xr(e){this.Zr=e}eo(e){this.no=e}onMessage(e){this.so=e}close(){this.Yr()}send(e){this.Jr(e)}io(){this.Zr()}ro(e){this.no(e)}oo(e){this.so(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rC extends class{constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const n=e.ssl?"https":"http";this.uo=n+"://"+e.host,this.ao="projects/"+this.databaseId.projectId+"/databases/"+this.databaseId.database+"/documents"}co(e,n,r,s,i){const o=this.ho(e,n);j("RestConnection","Sending: ",o,r);const a={};return this.lo(a,s,i),this.fo(e,o,a,r).then(c=>(j("RestConnection","Received: ",c),c),c=>{throw xf("RestConnection",`${e} failed with error: `,c,"url: ",o,"request:",r),c})}_o(e,n,r,s,i){return this.co(e,n,r,s,i)}lo(e,n,r){e["X-Goog-Api-Client"]="gl-js/ fire/"+Os,e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),n&&n.headers.forEach((s,i)=>e[i]=s),r&&r.headers.forEach((s,i)=>e[i]=s)}ho(e,n){const r=tC[e];return`${this.uo}/v1/${n}:${r}`}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams}fo(e,n,r,s){return new Promise((i,o)=>{const a=new pA;a.listenOnce(hA.COMPLETE,()=>{try{switch(a.getLastErrorCode()){case Uc.NO_ERROR:const l=a.getResponseJson();j("Connection","XHR received:",JSON.stringify(l)),i(l);break;case Uc.TIMEOUT:j("Connection",'RPC "'+e+'" timed out'),o(new U(b.DEADLINE_EXCEEDED,"Request time out"));break;case Uc.HTTP_ERROR:const u=a.getStatus();if(j("Connection",'RPC "'+e+'" failed with status:',u,"response text:",a.getResponseText()),u>0){const h=a.getResponseJson().error;if(h&&h.status&&h.message){const d=function(f){const m=f.toLowerCase().replace(/_/g,"-");return Object.values(b).indexOf(m)>=0?m:b.UNKNOWN}(h.status);o(new U(d,h.message))}else o(new U(b.UNKNOWN,"Server responded with status "+a.getStatus()))}else o(new U(b.UNAVAILABLE,"Connection failed."));break;default:X()}}finally{j("Connection",'RPC "'+e+'" completed.')}});const c=JSON.stringify(s);a.send(n,"POST",c,r,15)})}wo(e,n,r){const s=[this.uo,"/","google.firestore.v1.Firestore","/",e,"/channel"],i=lA(),o=uA(),a={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling};this.useFetchStreams&&(a.xmlHttpFactory=new fA({})),this.lo(a.initMessageHeaders,n,r),hg()||fg()||n0()||pg()||r0()||dg()||(a.httpHeadersOverwriteParam="$httpHeaders");const c=s.join("");j("Connection","Creating WebChannel: "+c,a);const l=i.createWebChannel(c,a);let u=!1,h=!1;const d=new nC({Jr:m=>{h?j("Connection","Not sending because WebChannel is closed:",m):(u||(j("Connection","Opening WebChannel transport."),l.open(),u=!0),j("Connection","WebChannel sending:",m),l.send(m))},Yr:()=>l.close()}),f=(m,E,_)=>{m.listen(E,y=>{try{_(y)}catch(C){setTimeout(()=>{throw C},0)}})};return f(l,fo.EventType.OPEN,()=>{h||j("Connection","WebChannel transport opened.")}),f(l,fo.EventType.CLOSE,()=>{h||(h=!0,j("Connection","WebChannel transport closed"),d.ro())}),f(l,fo.EventType.ERROR,m=>{h||(h=!0,xf("Connection","WebChannel transport errored:",m),d.ro(new U(b.UNAVAILABLE,"The operation could not be completed")))}),f(l,fo.EventType.MESSAGE,m=>{var E;if(!h){const _=m.data[0];Te(!!_);const y=_,C=y.error||((E=y[0])===null||E===void 0?void 0:E.error);if(C){j("Connection","WebChannel received error:",C);const L=C.status;let F=function(ce){const Ne=De[ce];if(Ne!==void 0)return dv(Ne)}(L),re=C.message;F===void 0&&(F=b.INTERNAL,re="Unknown error status: "+L+" with message "+C.message),h=!0,d.ro(new U(F,re)),l.close()}else j("Connection","WebChannel received:",_),d.oo(_)}}),f(o,dA.STAT_EVENT,m=>{m.stat===Sf.PROXY?j("Connection","Detected buffering proxy"):m.stat===Sf.NOPROXY&&j("Connection","Detected no buffering proxy")}),setTimeout(()=>{d.io()},0),d}}function Bc(){return typeof document!="undefined"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ya(t){return new hS(t,!0)}class Tv{constructor(e,n,r=1e3,s=1.5,i=6e4){this.Yn=e,this.timerId=n,this.mo=r,this.yo=s,this.po=i,this.Io=0,this.To=null,this.Eo=Date.now(),this.reset()}reset(){this.Io=0}Ao(){this.Io=this.po}Ro(e){this.cancel();const n=Math.floor(this.Io+this.bo()),r=Math.max(0,Date.now()-this.Eo),s=Math.max(0,n-r);s>0&&j("ExponentialBackoff",`Backing off for ${s} ms (base delay: ${this.Io} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.To=this.Yn.enqueueAfterDelay(this.timerId,s,()=>(this.Eo=Date.now(),e())),this.Io*=this.yo,this.Io<this.mo&&(this.Io=this.mo),this.Io>this.po&&(this.Io=this.po)}Po(){this.To!==null&&(this.To.skipDelay(),this.To=null)}cancel(){this.To!==null&&(this.To.cancel(),this.To=null)}bo(){return(Math.random()-.5)*this.Io}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Iv{constructor(e,n,r,s,i,o,a,c){this.Yn=e,this.Vo=r,this.vo=s,this.So=i,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=a,this.listener=c,this.state=0,this.Do=0,this.Co=null,this.xo=null,this.stream=null,this.No=new Tv(e,n)}ko(){return this.state===1||this.state===5||this.Mo()}Mo(){return this.state===2||this.state===3}start(){this.state!==4?this.auth():this.Oo()}async stop(){this.ko()&&await this.close(0)}Fo(){this.state=0,this.No.reset()}$o(){this.Mo()&&this.Co===null&&(this.Co=this.Yn.enqueueAfterDelay(this.Vo,6e4,()=>this.Bo()))}Lo(e){this.Uo(),this.stream.send(e)}async Bo(){if(this.Mo())return this.close(0)}Uo(){this.Co&&(this.Co.cancel(),this.Co=null)}qo(){this.xo&&(this.xo.cancel(),this.xo=null)}async close(e,n){this.Uo(),this.qo(),this.No.cancel(),this.Do++,e!==4?this.No.reset():n&&n.code===b.RESOURCE_EXHAUSTED?(jn(n.toString()),jn("Using maximum backoff delay to prevent overloading the backend."),this.No.Ao()):n&&n.code===b.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.Ko(),this.stream.close(),this.stream=null),this.state=e,await this.listener.eo(n)}Ko(){}auth(){this.state=1;const e=this.Go(this.Do),n=this.Do;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,s])=>{this.Do===n&&this.Qo(r,s)},r=>{e(()=>{const s=new U(b.UNKNOWN,"Fetching auth token failed: "+r.message);return this.jo(s)})})}Qo(e,n){const r=this.Go(this.Do);this.stream=this.Wo(e,n),this.stream.Xr(()=>{r(()=>(this.state=2,this.xo=this.Yn.enqueueAfterDelay(this.vo,1e4,()=>(this.Mo()&&(this.state=3),Promise.resolve())),this.listener.Xr()))}),this.stream.eo(s=>{r(()=>this.jo(s))}),this.stream.onMessage(s=>{r(()=>this.onMessage(s))})}Oo(){this.state=5,this.No.Ro(async()=>{this.state=0,this.start()})}jo(e){return j("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}Go(e){return n=>{this.Yn.enqueueAndForget(()=>this.Do===e?n():(j("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class sC extends Iv{constructor(e,n,r,s,i,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,r,s,o),this.M=i}Wo(e,n){return this.So.wo("Listen",e,n)}onMessage(e){this.No.reset();const n=pS(this.M,e),r=function(s){if(!("targetChange"in s))return ne.min();const i=s.targetChange;return i.targetIds&&i.targetIds.length?ne.min():i.readTime?gn(i.readTime):ne.min()}(e);return this.listener.zo(n,r)}Ho(e){const n={};n.database=ql(this.M),n.addTarget=function(s,i){let o;const a=i.target;return o=Ul(a)?{documents:yS(s,a)}:{query:vS(s,a)},o.targetId=i.targetId,i.resumeToken.approximateByteSize()>0?o.resumeToken=gv(s,i.resumeToken):i.snapshotVersion.compareTo(ne.min())>0&&(o.readTime=oa(s,i.snapshotVersion.toTimestamp())),o}(this.M,e);const r=wS(this.M,e);r&&(n.labels=r),this.Lo(n)}Jo(e){const n={};n.database=ql(this.M),n.removeTarget=e,this.Lo(n)}}class iC extends Iv{constructor(e,n,r,s,i,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,r,s,o),this.M=i,this.Yo=!1}get Xo(){return this.Yo}start(){this.Yo=!1,this.lastStreamToken=void 0,super.start()}Ko(){this.Yo&&this.Zo([])}Wo(e,n){return this.So.wo("Write",e,n)}onMessage(e){if(Te(!!e.streamToken),this.lastStreamToken=e.streamToken,this.Yo){this.No.reset();const n=gS(e.writeResults,e.commitTime),r=gn(e.commitTime);return this.listener.tu(r,n)}return Te(!e.writeResults||e.writeResults.length===0),this.Yo=!0,this.listener.eu()}nu(){const e={};e.database=ql(this.M),this.Lo(e)}Zo(e){const n={streamToken:this.lastStreamToken,writes:e.map(r=>mS(this.M,r))};this.Lo(n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oC extends class{}{constructor(e,n,r,s){super(),this.authCredentials=e,this.appCheckCredentials=n,this.So=r,this.M=s,this.su=!1}iu(){if(this.su)throw new U(b.FAILED_PRECONDITION,"The client has already been terminated.")}co(e,n,r){return this.iu(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([s,i])=>this.So.co(e,n,r,s,i)).catch(s=>{throw s.name==="FirebaseError"?(s.code===b.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),s):new U(b.UNKNOWN,s.toString())})}_o(e,n,r){return this.iu(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([s,i])=>this.So._o(e,n,r,s,i)).catch(s=>{throw s.name==="FirebaseError"?(s.code===b.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),s):new U(b.UNKNOWN,s.toString())})}terminate(){this.su=!0}}class aC{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.ru=0,this.ou=null,this.uu=!0}au(){this.ru===0&&(this.cu("Unknown"),this.ou=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.ou=null,this.hu("Backend didn't respond within 10 seconds."),this.cu("Offline"),Promise.resolve())))}lu(e){this.state==="Online"?this.cu("Unknown"):(this.ru++,this.ru>=1&&(this.fu(),this.hu(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.cu("Offline")))}set(e){this.fu(),this.ru=0,e==="Online"&&(this.uu=!1),this.cu(e)}cu(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}hu(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.uu?(jn(n),this.uu=!1):j("OnlineStateTracker",n)}fu(){this.ou!==null&&(this.ou.cancel(),this.ou=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cC{constructor(e,n,r,s,i){this.localStore=e,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this.du=[],this._u=new Map,this.wu=new Set,this.mu=[],this.gu=i,this.gu.Kr(o=>{r.enqueueAndForget(async()=>{kr(this)&&(j("RemoteStore","Restarting streams for network reachability change."),await async function(a){const c=J(a);c.wu.add(4),await Yi(c),c.yu.set("Unknown"),c.wu.delete(4),await Ja(c)}(this))})}),this.yu=new aC(r,s)}}async function Ja(t){if(kr(t))for(const e of t.mu)await e(!0)}async function Yi(t){for(const e of t.mu)await e(!1)}function Av(t,e){const n=J(t);n._u.has(e.targetId)||(n._u.set(e.targetId,e),Th(n)?bh(n):Ls(n).Mo()&&Eh(n,e))}function Sv(t,e){const n=J(t),r=Ls(n);n._u.delete(e),r.Mo()&&Cv(n,e),n._u.size===0&&(r.Mo()?r.$o():kr(n)&&n.yu.set("Unknown"))}function Eh(t,e){t.pu.Z(e.targetId),Ls(t).Ho(e)}function Cv(t,e){t.pu.Z(e),Ls(t).Jo(e)}function bh(t){t.pu=new cS({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),Et:e=>t._u.get(e)||null}),Ls(t).start(),t.yu.au()}function Th(t){return kr(t)&&!Ls(t).ko()&&t._u.size>0}function kr(t){return J(t).wu.size===0}function kv(t){t.pu=void 0}async function lC(t){t._u.forEach((e,n)=>{Eh(t,e)})}async function uC(t,e){kv(t),Th(t)?(t.yu.lu(e),bh(t)):t.yu.set("Unknown")}async function hC(t,e,n){if(t.yu.set("Online"),e instanceof mv&&e.state===2&&e.cause)try{await async function(r,s){const i=s.cause;for(const o of s.targetIds)r._u.has(o)&&(await r.remoteSyncer.rejectListen(o,i),r._u.delete(o),r.pu.removeTarget(o))}(t,e)}catch(r){j("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),r),await aa(t,r)}else if(e instanceof Ro?t.pu.ut(e):e instanceof pv?t.pu._t(e):t.pu.ht(e),!n.isEqual(ne.min()))try{const r=await bv(t.localStore);n.compareTo(r)>=0&&await function(s,i){const o=s.pu.yt(i);return o.targetChanges.forEach((a,c)=>{if(a.resumeToken.approximateByteSize()>0){const l=s._u.get(c);l&&s._u.set(c,l.withResumeToken(a.resumeToken,i))}}),o.targetMismatches.forEach(a=>{const c=s._u.get(a);if(!c)return;s._u.set(a,c.withResumeToken(Ze.EMPTY_BYTE_STRING,c.snapshotVersion)),Cv(s,a);const l=new lr(c.target,a,1,c.sequenceNumber);Eh(s,l)}),s.remoteSyncer.applyRemoteEvent(o)}(t,n)}catch(r){j("RemoteStore","Failed to raise snapshot:",r),await aa(t,r)}}async function aa(t,e,n){if(!Qi(e))throw e;t.wu.add(1),await Yi(t),t.yu.set("Offline"),n||(n=()=>bv(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{j("RemoteStore","Retrying IndexedDB access"),await n(),t.wu.delete(1),await Ja(t)})}function xv(t,e){return e().catch(n=>aa(t,n,e))}async function Za(t){const e=J(t),n=Hn(e);let r=e.du.length>0?e.du[e.du.length-1].batchId:-1;for(;dC(e);)try{const s=await jS(e.localStore,r);if(s===null){e.du.length===0&&n.$o();break}r=s.batchId,fC(e,s)}catch(s){await aa(e,s)}Rv(e)&&Ov(e)}function dC(t){return kr(t)&&t.du.length<10}function fC(t,e){t.du.push(e);const n=Hn(t);n.Mo()&&n.Xo&&n.Zo(e.mutations)}function Rv(t){return kr(t)&&!Hn(t).ko()&&t.du.length>0}function Ov(t){Hn(t).start()}async function pC(t){Hn(t).nu()}async function mC(t){const e=Hn(t);for(const n of t.du)e.Zo(n.mutations)}async function gC(t,e,n){const r=t.du.shift(),s=yh.from(r,e,n);await xv(t,()=>t.remoteSyncer.applySuccessfulWrite(s)),await Za(t)}async function yC(t,e){e&&Hn(t).Xo&&await async function(n,r){if(s=r.code,nS(s)&&s!==b.ABORTED){const i=n.du.shift();Hn(n).Fo(),await xv(n,()=>n.remoteSyncer.rejectFailedWrite(i.batchId,r)),await Za(n)}var s}(t,e),Rv(t)&&Ov(t)}async function Yf(t,e){const n=J(t);n.asyncQueue.verifyOperationInProgress(),j("RemoteStore","RemoteStore received new credentials");const r=kr(n);n.wu.add(3),await Yi(n),r&&n.yu.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.wu.delete(3),await Ja(n)}async function vC(t,e){const n=J(t);e?(n.wu.delete(2),await Ja(n)):e||(n.wu.add(2),await Yi(n),n.yu.set("Unknown"))}function Ls(t){return t.Iu||(t.Iu=function(e,n,r){const s=J(e);return s.iu(),new sC(n,s.So,s.authCredentials,s.appCheckCredentials,s.M,r)}(t.datastore,t.asyncQueue,{Xr:lC.bind(null,t),eo:uC.bind(null,t),zo:hC.bind(null,t)}),t.mu.push(async e=>{e?(t.Iu.Fo(),Th(t)?bh(t):t.yu.set("Unknown")):(await t.Iu.stop(),kv(t))})),t.Iu}function Hn(t){return t.Tu||(t.Tu=function(e,n,r){const s=J(e);return s.iu(),new iC(n,s.So,s.authCredentials,s.appCheckCredentials,s.M,r)}(t.datastore,t.asyncQueue,{Xr:pC.bind(null,t),eo:yC.bind(null,t),eu:mC.bind(null,t),tu:gC.bind(null,t)}),t.mu.push(async e=>{e?(t.Tu.Fo(),await Za(t)):(await t.Tu.stop(),t.du.length>0&&(j("RemoteStore",`Stopping write stream with ${t.du.length} pending writes`),t.du=[]))})),t.Tu}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ih{constructor(e,n,r,s,i){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=r,this.op=s,this.removalCallback=i,this.deferred=new mn,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}static createAndSchedule(e,n,r,s,i){const o=Date.now()+r,a=new Ih(e,n,o,s,i);return a.start(r),a}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new U(b.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Ah(t,e){if(jn("AsyncQueue",`${e}: ${t}`),Qi(t))return new U(b.UNAVAILABLE,`${e}: ${t}`);throw t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ss{constructor(e){this.comparator=e?(n,r)=>e(n,r)||H.comparator(n.key,r.key):(n,r)=>H.comparator(n.key,r.key),this.keyedMap=Bl(),this.sortedSet=new ze(this.comparator)}static emptySet(e){return new ss(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,r)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof ss)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;n.hasNext();){const s=n.getNext().key,i=r.getNext().key;if(!s.isEqual(i))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const r=new ss;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=n,r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jf{constructor(){this.Eu=new ze(H.comparator)}track(e){const n=e.doc.key,r=this.Eu.get(n);r?e.type!==0&&r.type===3?this.Eu=this.Eu.insert(n,e):e.type===3&&r.type!==1?this.Eu=this.Eu.insert(n,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.Eu=this.Eu.insert(n,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.Eu=this.Eu.insert(n,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.Eu=this.Eu.remove(n):e.type===1&&r.type===2?this.Eu=this.Eu.insert(n,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.Eu=this.Eu.insert(n,{type:2,doc:e.doc}):X():this.Eu=this.Eu.insert(n,e)}Au(){const e=[];return this.Eu.inorderTraversal((n,r)=>{e.push(r)}),e}}class ps{constructor(e,n,r,s,i,o,a,c){this.query=e,this.docs=n,this.oldDocs=r,this.docChanges=s,this.mutatedKeys=i,this.fromCache=o,this.syncStateChanged=a,this.excludesMetadataChanges=c}static fromInitialDocuments(e,n,r,s){const i=[];return n.forEach(o=>{i.push({type:0,doc:o})}),new ps(e,n,ss.emptySet(n),i,r,s,!0,!1)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&Ka(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,r=e.docChanges;if(n.length!==r.length)return!1;for(let s=0;s<n.length;s++)if(n[s].type!==r[s].type||!n[s].doc.isEqual(r[s].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _C{constructor(){this.Ru=void 0,this.listeners=[]}}class wC{constructor(){this.queries=new Ps(e=>rv(e),Ka),this.onlineState="Unknown",this.bu=new Set}}async function Sh(t,e){const n=J(t),r=e.query;let s=!1,i=n.queries.get(r);if(i||(s=!0,i=new _C),s)try{i.Ru=await n.onListen(r)}catch(o){const a=Ah(o,`Initialization of query '${$l(e.query)}' failed`);return void e.onError(a)}n.queries.set(r,i),i.listeners.push(e),e.Pu(n.onlineState),i.Ru&&e.Vu(i.Ru)&&kh(n)}async function Ch(t,e){const n=J(t),r=e.query;let s=!1;const i=n.queries.get(r);if(i){const o=i.listeners.indexOf(e);o>=0&&(i.listeners.splice(o,1),s=i.listeners.length===0)}if(s)return n.queries.delete(r),n.onUnlisten(r)}function EC(t,e){const n=J(t);let r=!1;for(const s of e){const i=s.query,o=n.queries.get(i);if(o){for(const a of o.listeners)a.Vu(s)&&(r=!0);o.Ru=s}}r&&kh(n)}function bC(t,e,n){const r=J(t),s=r.queries.get(e);if(s)for(const i of s.listeners)i.onError(n);r.queries.delete(e)}function kh(t){t.bu.forEach(e=>{e.next()})}class xh{constructor(e,n,r){this.query=e,this.vu=n,this.Su=!1,this.Du=null,this.onlineState="Unknown",this.options=r||{}}Vu(e){if(!this.options.includeMetadataChanges){const r=[];for(const s of e.docChanges)s.type!==3&&r.push(s);e=new ps(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0)}let n=!1;return this.Su?this.Cu(e)&&(this.vu.next(e),n=!0):this.xu(e,this.onlineState)&&(this.Nu(e),n=!0),this.Du=e,n}onError(e){this.vu.error(e)}Pu(e){this.onlineState=e;let n=!1;return this.Du&&!this.Su&&this.xu(this.Du,e)&&(this.Nu(this.Du),n=!0),n}xu(e,n){if(!e.fromCache)return!0;const r=n!=="Offline";return(!this.options.ku||!r)&&(!e.docs.isEmpty()||n==="Offline")}Cu(e){if(e.docChanges.length>0)return!0;const n=this.Du&&this.Du.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}Nu(e){e=ps.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache),this.Su=!0,this.vu.next(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nv{constructor(e){this.key=e}}class Dv{constructor(e){this.key=e}}class TC{constructor(e,n){this.query=e,this.Uu=n,this.qu=null,this.current=!1,this.Ku=Ce(),this.mutatedKeys=Ce(),this.Gu=sv(e),this.Qu=new ss(this.Gu)}get ju(){return this.Uu}Wu(e,n){const r=n?n.zu:new Jf,s=n?n.Qu:this.Qu;let i=n?n.mutatedKeys:this.mutatedKeys,o=s,a=!1;const c=this.query.limitType==="F"&&s.size===this.query.limit?s.last():null,l=this.query.limitType==="L"&&s.size===this.query.limit?s.first():null;if(e.inorderTraversal((u,h)=>{const d=s.get(u),f=mh(this.query,h)?h:null,m=!!d&&this.mutatedKeys.has(d.key),E=!!f&&(f.hasLocalMutations||this.mutatedKeys.has(f.key)&&f.hasCommittedMutations);let _=!1;d&&f?d.data.isEqual(f.data)?m!==E&&(r.track({type:3,doc:f}),_=!0):this.Hu(d,f)||(r.track({type:2,doc:f}),_=!0,(c&&this.Gu(f,c)>0||l&&this.Gu(f,l)<0)&&(a=!0)):!d&&f?(r.track({type:0,doc:f}),_=!0):d&&!f&&(r.track({type:1,doc:d}),_=!0,(c||l)&&(a=!0)),_&&(f?(o=o.add(f),i=E?i.add(u):i.delete(u)):(o=o.delete(u),i=i.delete(u)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const u=this.query.limitType==="F"?o.last():o.first();o=o.delete(u.key),i=i.delete(u.key),r.track({type:1,doc:u})}return{Qu:o,zu:r,ii:a,mutatedKeys:i}}Hu(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,r){const s=this.Qu;this.Qu=e.Qu,this.mutatedKeys=e.mutatedKeys;const i=e.zu.Au();i.sort((l,u)=>function(h,d){const f=m=>{switch(m){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return X()}};return f(h)-f(d)}(l.type,u.type)||this.Gu(l.doc,u.doc)),this.Ju(r);const o=n?this.Yu():[],a=this.Ku.size===0&&this.current?1:0,c=a!==this.qu;return this.qu=a,i.length!==0||c?{snapshot:new ps(this.query,e.Qu,s,i,e.mutatedKeys,a===0,c,!1),Xu:o}:{Xu:o}}Pu(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({Qu:this.Qu,zu:new Jf,mutatedKeys:this.mutatedKeys,ii:!1},!1)):{Xu:[]}}Zu(e){return!this.Uu.has(e)&&!!this.Qu.has(e)&&!this.Qu.get(e).hasLocalMutations}Ju(e){e&&(e.addedDocuments.forEach(n=>this.Uu=this.Uu.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.Uu=this.Uu.delete(n)),this.current=e.current)}Yu(){if(!this.current)return[];const e=this.Ku;this.Ku=Ce(),this.Qu.forEach(r=>{this.Zu(r.key)&&(this.Ku=this.Ku.add(r.key))});const n=[];return e.forEach(r=>{this.Ku.has(r)||n.push(new Dv(r))}),this.Ku.forEach(r=>{e.has(r)||n.push(new Nv(r))}),n}ta(e){this.Uu=e._i,this.Ku=Ce();const n=this.Wu(e.documents);return this.applyChanges(n,!0)}ea(){return ps.fromInitialDocuments(this.query,this.Qu,this.mutatedKeys,this.qu===0)}}class IC{constructor(e,n,r){this.query=e,this.targetId=n,this.view=r}}class AC{constructor(e){this.key=e,this.na=!1}}class SC{constructor(e,n,r,s,i,o){this.localStore=e,this.remoteStore=n,this.eventManager=r,this.sharedClientState=s,this.currentUser=i,this.maxConcurrentLimboResolutions=o,this.sa={},this.ia=new Ps(a=>rv(a),Ka),this.ra=new Map,this.oa=new Set,this.ua=new ze(H.comparator),this.aa=new Map,this.ca=new _h,this.ha={},this.la=new Map,this.fa=fs.yn(),this.onlineState="Unknown",this.da=void 0}get isPrimaryClient(){return this.da===!0}}async function CC(t,e){const n=UC(t);let r,s;const i=n.ia.get(e);if(i)r=i.targetId,n.sharedClientState.addLocalQueryTarget(r),s=i.view.ea();else{const o=await qS(n.localStore,wr(e));n.isPrimaryClient&&Av(n.remoteStore,o);const a=n.sharedClientState.addLocalQueryTarget(o.targetId);r=o.targetId,s=await kC(n,e,r,a==="current")}return s}async function kC(t,e,n,r){t._a=(u,h,d)=>async function(f,m,E,_){let y=m.view.Wu(E);y.ii&&(y=await Wf(f.localStore,m.query,!1).then(({documents:F})=>m.view.Wu(F,y)));const C=_&&_.targetChanges.get(m.targetId),L=m.view.applyChanges(y,f.isPrimaryClient,C);return ep(f,m.targetId,L.Xu),L.snapshot}(t,u,h,d);const s=await Wf(t.localStore,e,!0),i=new TC(e,s._i),o=i.Wu(s.documents),a=Wi.createSynthesizedTargetChangeForCurrentChange(n,r&&t.onlineState!=="Offline"),c=i.applyChanges(o,t.isPrimaryClient,a);ep(t,n,c.Xu);const l=new IC(e,n,i);return t.ia.set(e,l),t.ra.has(n)?t.ra.get(n).push(e):t.ra.set(n,[e]),c.snapshot}async function xC(t,e){const n=J(t),r=n.ia.get(e),s=n.ra.get(r.targetId);if(s.length>1)return n.ra.set(r.targetId,s.filter(i=>!Ka(i,e))),void n.ia.delete(e);n.isPrimaryClient?(n.sharedClientState.removeLocalQueryTarget(r.targetId),n.sharedClientState.isActiveQueryTarget(r.targetId)||await Hl(n.localStore,r.targetId,!1).then(()=>{n.sharedClientState.clearQueryState(r.targetId),Sv(n.remoteStore,r.targetId),zl(n,r.targetId)}).catch(Xi)):(zl(n,r.targetId),await Hl(n.localStore,r.targetId,!0))}async function RC(t,e,n){const r=$C(t);try{const s=await function(i,o){const a=J(i),c=it.now(),l=o.reduce((h,d)=>h.add(d.key),Ce());let u;return a.persistence.runTransaction("Locally write mutations","readwrite",h=>a.fi.Ks(h,l).next(d=>{u=d;const f=[];for(const m of o){const E=JA(m,u.get(m.key));E!=null&&f.push(new Ds(m.key,E,Zy(E.value.mapValue),Un.exists(!0)))}return a.Bs.addMutationBatch(h,c,f,o)})).then(h=>(h.applyToLocalDocumentSet(u),{batchId:h.batchId,changes:u}))}(r.localStore,e);r.sharedClientState.addPendingMutation(s.batchId),function(i,o,a){let c=i.ha[i.currentUser.toKey()];c||(c=new ze(he)),c=c.insert(o,a),i.ha[i.currentUser.toKey()]=c}(r,s.batchId,n),await Ji(r,s.changes),await Za(r.remoteStore)}catch(s){const i=Ah(s,"Failed to persist write");n.reject(i)}}async function Pv(t,e){const n=J(t);try{const r=await BS(n.localStore,e);e.targetChanges.forEach((s,i)=>{const o=n.aa.get(i);o&&(Te(s.addedDocuments.size+s.modifiedDocuments.size+s.removedDocuments.size<=1),s.addedDocuments.size>0?o.na=!0:s.modifiedDocuments.size>0?Te(o.na):s.removedDocuments.size>0&&(Te(o.na),o.na=!1))}),await Ji(n,r,e)}catch(r){await Xi(r)}}function Zf(t,e,n){const r=J(t);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const s=[];r.ia.forEach((i,o)=>{const a=o.view.Pu(e);a.snapshot&&s.push(a.snapshot)}),function(i,o){const a=J(i);a.onlineState=o;let c=!1;a.queries.forEach((l,u)=>{for(const h of u.listeners)h.Pu(o)&&(c=!0)}),c&&kh(a)}(r.eventManager,e),s.length&&r.sa.zo(s),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function OC(t,e,n){const r=J(t);r.sharedClientState.updateQueryState(e,"rejected",n);const s=r.aa.get(e),i=s&&s.key;if(i){let o=new ze(H.comparator);o=o.insert(i,rt.newNoDocument(i,ne.min()));const a=Ce().add(i),c=new Xa(ne.min(),new Map,new Je(he),o,a);await Pv(r,c),r.ua=r.ua.remove(i),r.aa.delete(e),Rh(r)}else await Hl(r.localStore,e,!1).then(()=>zl(r,e,n)).catch(Xi)}async function NC(t,e){const n=J(t),r=e.batch.batchId;try{const s=await FS(n.localStore,e);Mv(n,r,null),Lv(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await Ji(n,s)}catch(s){await Xi(s)}}async function DC(t,e,n){const r=J(t);try{const s=await function(i,o){const a=J(i);return a.persistence.runTransaction("Reject batch","readwrite-primary",c=>{let l;return a.Bs.lookupMutationBatch(c,o).next(u=>(Te(u!==null),l=u.keys(),a.Bs.removeMutationBatch(c,u))).next(()=>a.Bs.performConsistencyCheck(c)).next(()=>a.fi.Ks(c,l))})}(r.localStore,e);Mv(r,e,n),Lv(r,e),r.sharedClientState.updateMutationState(e,"rejected",n),await Ji(r,s)}catch(s){await Xi(s)}}function Lv(t,e){(t.la.get(e)||[]).forEach(n=>{n.resolve()}),t.la.delete(e)}function Mv(t,e,n){const r=J(t);let s=r.ha[r.currentUser.toKey()];if(s){const i=s.get(e);i&&(n?i.reject(n):i.resolve(),s=s.remove(e)),r.ha[r.currentUser.toKey()]=s}}function zl(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const r of t.ra.get(e))t.ia.delete(r),n&&t.sa.wa(r,n);t.ra.delete(e),t.isPrimaryClient&&t.ca.vi(e).forEach(r=>{t.ca.containsKey(r)||Uv(t,r)})}function Uv(t,e){t.oa.delete(e.path.canonicalString());const n=t.ua.get(e);n!==null&&(Sv(t.remoteStore,n),t.ua=t.ua.remove(e),t.aa.delete(n),Rh(t))}function ep(t,e,n){for(const r of n)r instanceof Nv?(t.ca.addReference(r.key,e),PC(t,r)):r instanceof Dv?(j("SyncEngine","Document no longer in limbo: "+r.key),t.ca.removeReference(r.key,e),t.ca.containsKey(r.key)||Uv(t,r.key)):X()}function PC(t,e){const n=e.key,r=n.path.canonicalString();t.ua.get(n)||t.oa.has(r)||(j("SyncEngine","New document in limbo: "+n),t.oa.add(r),Rh(t))}function Rh(t){for(;t.oa.size>0&&t.ua.size<t.maxConcurrentLimboResolutions;){const e=t.oa.values().next().value;t.oa.delete(e);const n=new H(Se.fromString(e)),r=t.fa.next();t.aa.set(r,new AC(n)),t.ua=t.ua.insert(n,r),Av(t.remoteStore,new lr(wr(za(n.path)),r,2,lh.A))}}async function Ji(t,e,n){const r=J(t),s=[],i=[],o=[];r.ia.isEmpty()||(r.ia.forEach((a,c)=>{o.push(r._a(c,e,n).then(l=>{if(l){r.isPrimaryClient&&r.sharedClientState.updateQueryState(c.targetId,l.fromCache?"not-current":"current"),s.push(l);const u=vh.Ys(c.targetId,l);i.push(u)}}))}),await Promise.all(o),r.sa.zo(s),await async function(a,c){const l=J(a);try{await l.persistence.runTransaction("notifyLocalViewChanges","readwrite",u=>x.forEach(c,h=>x.forEach(h.Hs,d=>l.persistence.referenceDelegate.addReference(u,h.targetId,d)).next(()=>x.forEach(h.Js,d=>l.persistence.referenceDelegate.removeReference(u,h.targetId,d)))))}catch(u){if(!Qi(u))throw u;j("LocalStore","Failed to update sequence numbers: "+u)}for(const u of c){const h=u.targetId;if(!u.fromCache){const d=l.ui.get(h),f=d.snapshotVersion,m=d.withLastLimboFreeSnapshotVersion(f);l.ui=l.ui.insert(h,m)}}}(r.localStore,i))}async function LC(t,e){const n=J(t);if(!n.currentUser.isEqual(e)){j("SyncEngine","User change. New user:",e.toKey());const r=await Ev(n.localStore,e);n.currentUser=e,function(s,i){s.la.forEach(o=>{o.forEach(a=>{a.reject(new U(b.CANCELLED,i))})}),s.la.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await Ji(n,r.di)}}function MC(t,e){const n=J(t),r=n.aa.get(e);if(r&&r.na)return Ce().add(r.key);{let s=Ce();const i=n.ra.get(e);if(!i)return s;for(const o of i){const a=n.ia.get(o);s=s.unionWith(a.view.ju)}return s}}function UC(t){const e=J(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=Pv.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=MC.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=OC.bind(null,e),e.sa.zo=EC.bind(null,e.eventManager),e.sa.wa=bC.bind(null,e.eventManager),e}function $C(t){const e=J(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=NC.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=DC.bind(null,e),e}class FC{constructor(){this.synchronizeTabs=!1}async initialize(e){this.M=Ya(e.databaseInfo.databaseId),this.sharedClientState=this.ga(e),this.persistence=this.ya(e),await this.persistence.start(),this.gcScheduler=this.pa(e),this.localStore=this.Ia(e)}pa(e){return null}Ia(e){return $S(this.persistence,new MS,e.initialUser,this.M)}ya(e){return new YS(wh.Yi,this.M)}ga(e){return new ZS}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class BC{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>Zf(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=LC.bind(null,this.syncEngine),await vC(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return new wC}createDatastore(e){const n=Ya(e.databaseInfo.databaseId),r=(s=e.databaseInfo,new rC(s));var s;return function(i,o,a,c){return new oC(i,o,a,c)}(e.authCredentials,e.appCheckCredentials,r,n)}createRemoteStore(e){return n=this.localStore,r=this.datastore,s=e.asyncQueue,i=a=>Zf(this.syncEngine,a,0),o=Xf.vt()?new Xf:new eC,new cC(n,r,s,i,o);var n,r,s,i,o}createSyncEngine(e,n){return function(r,s,i,o,a,c,l){const u=new SC(r,s,i,o,a,c);return l&&(u.da=!0),u}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}terminate(){return async function(e){const n=J(e);j("RemoteStore","RemoteStore shutting down."),n.wu.add(5),await Yi(n),n.gu.shutdown(),n.yu.set("Unknown")}(this.remoteStore)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Oh{constructor(e){this.observer=e,this.muted=!1}next(e){this.observer.next&&this.Ea(this.observer.next,e)}error(e){this.observer.error?this.Ea(this.observer.error,e):console.error("Uncaught Error in snapshot listener:",e)}Aa(){this.muted=!0}Ea(e,n){this.muted||setTimeout(()=>{this.muted||e(n)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class VC{constructor(e,n,r,s){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=r,this.databaseInfo=s,this.user=gt.UNAUTHENTICATED,this.clientId=Qy.R(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(r,async i=>{j("FirestoreClient","Received user=",i.uid),await this.authCredentialListener(i),this.user=i}),this.appCheckCredentials.start(r,i=>(j("FirestoreClient","Received new app check token=",i),this.appCheckCredentialListener(i,this.user)))}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new U(b.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const e=new mn;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this.onlineComponents&&await this.onlineComponents.terminate(),this.offlineComponents&&await this.offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const r=Ah(n,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function jC(t,e){t.asyncQueue.verifyOperationInProgress(),j("FirestoreClient","Initializing OfflineComponentProvider");const n=await t.getConfiguration();await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener(async s=>{r.isEqual(s)||(await Ev(e.localStore,s),r=s)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t.offlineComponents=e}async function qC(t,e){t.asyncQueue.verifyOperationInProgress();const n=await HC(t);j("FirestoreClient","Initializing OnlineComponentProvider");const r=await t.getConfiguration();await e.initialize(n,r),t.setCredentialChangeListener(s=>Yf(e.remoteStore,s)),t.setAppCheckTokenChangeListener((s,i)=>Yf(e.remoteStore,i)),t.onlineComponents=e}async function HC(t){return t.offlineComponents||(j("FirestoreClient","Using default OfflineComponentProvider"),await jC(t,new FC)),t.offlineComponents}async function $v(t){return t.onlineComponents||(j("FirestoreClient","Using default OnlineComponentProvider"),await qC(t,new BC)),t.onlineComponents}function zC(t){return $v(t).then(e=>e.syncEngine)}async function ca(t){const e=await $v(t),n=e.eventManager;return n.onListen=CC.bind(null,e.syncEngine),n.onUnlisten=xC.bind(null,e.syncEngine),n}function KC(t,e,n={}){const r=new mn;return t.asyncQueue.enqueueAndForget(async()=>function(s,i,o,a,c){const l=new Oh({next:h=>{i.enqueueAndForget(()=>Ch(s,u));const d=h.docs.has(o);!d&&h.fromCache?c.reject(new U(b.UNAVAILABLE,"Failed to get document because the client is offline.")):d&&h.fromCache&&a&&a.source==="server"?c.reject(new U(b.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):c.resolve(h)},error:h=>c.reject(h)}),u=new xh(za(o.path),l,{includeMetadataChanges:!0,ku:!0});return Sh(s,u)}(await ca(t),t.asyncQueue,e,n,r)),r.promise}function GC(t,e,n={}){const r=new mn;return t.asyncQueue.enqueueAndForget(async()=>function(s,i,o,a,c){const l=new Oh({next:h=>{i.enqueueAndForget(()=>Ch(s,u)),h.fromCache&&a.source==="server"?c.reject(new U(b.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):c.resolve(h)},error:h=>c.reject(h)}),u=new xh(o,l,{includeMetadataChanges:!0,ku:!0});return Sh(s,u)}(await ca(t),t.asyncQueue,e,n,r)),r.promise}const tp=new Map;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Fv(t,e,n){if(!n)throw new U(b.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function WC(t,e,n,r){if(e===!0&&r===!0)throw new U(b.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function np(t){if(!H.isDocumentKey(t))throw new U(b.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function rp(t){if(H.isDocumentKey(t))throw new U(b.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function ec(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(n){return n.constructor?n.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":X()}function Dt(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new U(b.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=ec(t);throw new U(b.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}function QC(t,e){if(e<=0)throw new U(b.INVALID_ARGUMENT,`Function ${t}() requires a positive number, but it was: ${e}.`)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sp{constructor(e){var n;if(e.host===void 0){if(e.ssl!==void 0)throw new U(b.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(n=e.ssl)===null||n===void 0||n;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new U(b.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.useFetchStreams=!!e.useFetchStreams,WC("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling)}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nh{constructor(e,n,r){this._authCredentials=n,this._appCheckCredentials=r,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new sp({}),this._settingsFrozen=!1,e instanceof hs?this._databaseId=e:(this._app=e,this._databaseId=function(s){if(!Object.prototype.hasOwnProperty.apply(s.options,["projectId"]))throw new U(b.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new hs(s.options.projectId)}(e))}get app(){if(!this._app)throw new U(b.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(e){if(this._settingsFrozen)throw new U(b.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new sp(e),e.credentials!==void 0&&(this._authCredentials=function(n){if(!n)return new gA;switch(n.type){case"gapi":const r=n.client;return Te(!(typeof r!="object"||r===null||!r.auth||!r.auth.getAuthHeaderValueForFirstParty)),new _A(r,n.sessionIndex||"0",n.iamToken||null);case"provider":return n.client;default:throw new U(b.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(e){const n=tp.get(e);n&&(j("ComponentProvider","Removing Datastore"),tp.delete(e),n.terminate())}(this),Promise.resolve()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ot{constructor(e,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new $n(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new ot(this.firestore,e,this._key)}}class Qn{constructor(e,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new Qn(this.firestore,e,this._query)}}class $n extends Qn{constructor(e,n,r){super(e,n,za(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new ot(this.firestore,null,new H(e))}withConverter(e){return new $n(this.firestore,e,this._path)}}function ip(t,e,...n){if(t=Le(t),Fv("collection","path",e),t instanceof Nh){const r=Se.fromString(e,...n);return rp(r),new $n(t,null,r)}{if(!(t instanceof ot||t instanceof $n))throw new U(b.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(Se.fromString(e,...n));return rp(r),new $n(t.firestore,null,r)}}function Bv(t,e,...n){if(t=Le(t),arguments.length===1&&(e=Qy.R()),Fv("doc","path",e),t instanceof Nh){const r=Se.fromString(e,...n);return np(r),new ot(t,null,new H(r))}{if(!(t instanceof ot||t instanceof $n))throw new U(b.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(Se.fromString(e,...n));return np(r),new ot(t.firestore,t instanceof $n?t.converter:null,new H(r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class XC{constructor(){this.Fa=Promise.resolve(),this.$a=[],this.Ba=!1,this.La=[],this.Ua=null,this.qa=!1,this.Ka=!1,this.Ga=[],this.No=new Tv(this,"async_queue_retry"),this.Qa=()=>{const n=Bc();n&&j("AsyncQueue","Visibility state changed to "+n.visibilityState),this.No.Po()};const e=Bc();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this.Qa)}get isShuttingDown(){return this.Ba}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.ja(),this.Wa(e)}enterRestrictedMode(e){if(!this.Ba){this.Ba=!0,this.Ka=e||!1;const n=Bc();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.Qa)}}enqueue(e){if(this.ja(),this.Ba)return new Promise(()=>{});const n=new mn;return this.Wa(()=>this.Ba&&this.Ka?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.$a.push(e),this.za()))}async za(){if(this.$a.length!==0){try{await this.$a[0](),this.$a.shift(),this.No.reset()}catch(e){if(!Qi(e))throw e;j("AsyncQueue","Operation failed with retryable error: "+e)}this.$a.length>0&&this.No.Ro(()=>this.za())}}Wa(e){const n=this.Fa.then(()=>(this.qa=!0,e().catch(r=>{this.Ua=r,this.qa=!1;const s=function(i){let o=i.message||"";return i.stack&&(o=i.stack.includes(i.message)?i.stack:i.message+`
`+i.stack),o}(r);throw jn("INTERNAL UNHANDLED ERROR: ",s),r}).then(r=>(this.qa=!1,r))));return this.Fa=n,n}enqueueAfterDelay(e,n,r){this.ja(),this.Ga.indexOf(e)>-1&&(n=0);const s=Ih.createAndSchedule(this,e,n,r,i=>this.Ha(i));return this.La.push(s),s}ja(){this.Ua&&X()}verifyOperationInProgress(){}async Ja(){let e;do e=this.Fa,await e;while(e!==this.Fa)}Ya(e){for(const n of this.La)if(n.timerId===e)return!0;return!1}Xa(e){return this.Ja().then(()=>{this.La.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this.La)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.Ja()})}Za(e){this.Ga.push(e)}Ha(e){const n=this.La.indexOf(e);this.La.splice(n,1)}}function op(t){return function(e,n){if(typeof e!="object"||e===null)return!1;const r=e;for(const s of n)if(s in r&&typeof r[s]=="function")return!0;return!1}(t,["next","error","complete"])}class zn extends Nh{constructor(e,n,r){super(e,n,r),this.type="firestore",this._queue=new XC,this._persistenceKey="name"in e?e.name:"[DEFAULT]"}_terminate(){return this._firestoreClient||Vv(this),this._firestoreClient.terminate()}}function YC(t=ku()){return Sa(t,"firestore").getImmediate()}function tc(t){return t._firestoreClient||Vv(t),t._firestoreClient.verifyNotTerminated(),t._firestoreClient}function Vv(t){var e;const n=t._freezeSettings(),r=function(s,i,o,a){return new AA(s,i,o,a.host,a.ssl,a.experimentalForceLongPolling,a.experimentalAutoDetectLongPolling,a.useFetchStreams)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,n);t._firestoreClient=new VC(t._authCredentials,t._appCheckCredentials,t._queue,r)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nc{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new U(b.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new _t(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ms{constructor(e){this._byteString=e}static fromBase64String(e){try{return new ms(Ze.fromBase64String(e))}catch(n){throw new U(b.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new ms(Ze.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rc{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dh{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new U(b.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new U(b.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return he(this._lat,e._lat)||he(this._long,e._long)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const JC=/^__.*__$/;class ZC{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return this.fieldMask!==null?new Ds(e,this.data,this.fieldMask,n,this.fieldTransforms):new Qa(e,this.data,n,this.fieldTransforms)}}class jv{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return new Ds(e,this.data,this.fieldMask,n,this.fieldTransforms)}}function qv(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw X()}}class Ph{constructor(e,n,r,s,i,o){this.settings=e,this.databaseId=n,this.M=r,this.ignoreUndefinedProperties=s,i===void 0&&this.tc(),this.fieldTransforms=i||[],this.fieldMask=o||[]}get path(){return this.settings.path}get ec(){return this.settings.ec}nc(e){return new Ph(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.M,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}sc(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),s=this.nc({path:r,ic:!1});return s.rc(e),s}oc(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),s=this.nc({path:r,ic:!1});return s.tc(),s}uc(e){return this.nc({path:void 0,ic:!0})}ac(e){return la(e,this.settings.methodName,this.settings.cc||!1,this.path,this.settings.hc)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}tc(){if(this.path)for(let e=0;e<this.path.length;e++)this.rc(this.path.get(e))}rc(e){if(e.length===0)throw this.ac("Document fields must not be empty");if(qv(this.ec)&&JC.test(e))throw this.ac('Document fields cannot begin and end with "__"')}}class ek{constructor(e,n,r){this.databaseId=e,this.ignoreUndefinedProperties=n,this.M=r||Ya(e)}lc(e,n,r,s=!1){return new Ph({ec:e,methodName:n,hc:r,path:_t.emptyPath(),ic:!1,cc:s},this.databaseId,this.M,this.ignoreUndefinedProperties)}}function sc(t){const e=t._freezeSettings(),n=Ya(t._databaseId);return new ek(t._databaseId,!!e.ignoreUndefinedProperties,n)}function Hv(t,e,n,r,s,i={}){const o=t.lc(i.merge||i.mergeFields?2:0,e,n,s);Mh("Data must be an object, but it was:",o,r);const a=zv(r,o);let c,l;if(i.merge)c=new Ai(o.fieldMask),l=o.fieldTransforms;else if(i.mergeFields){const u=[];for(const h of i.mergeFields){const d=Kl(e,h,n);if(!o.contains(d))throw new U(b.INVALID_ARGUMENT,`Field '${d}' is specified in your field mask but missing from your input data.`);Gv(u,d)||u.push(d)}c=new Ai(u),l=o.fieldTransforms.filter(h=>c.covers(h.field))}else c=null,l=o.fieldTransforms;return new ZC(new St(a),c,l)}class ic extends rc{_toFieldTransform(e){if(e.ec!==2)throw e.ec===1?e.ac(`${this._methodName}() can only appear at the top level of your update data`):e.ac(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof ic}}class Lh extends rc{_toFieldTransform(e){return new WA(e.path,new xi)}isEqual(e){return e instanceof Lh}}function tk(t,e,n,r){const s=t.lc(1,e,n);Mh("Data must be an object, but it was:",s,r);const i=[],o=St.empty();Cr(r,(c,l)=>{const u=Uh(e,c,n);l=Le(l);const h=s.oc(u);if(l instanceof ic)i.push(u);else{const d=Zi(l,h);d!=null&&(i.push(u),o.set(u,d))}});const a=new Ai(i);return new jv(o,a,s.fieldTransforms)}function nk(t,e,n,r,s,i){const o=t.lc(1,e,n),a=[Kl(e,r,n)],c=[s];if(i.length%2!=0)throw new U(b.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let d=0;d<i.length;d+=2)a.push(Kl(e,i[d])),c.push(i[d+1]);const l=[],u=St.empty();for(let d=a.length-1;d>=0;--d)if(!Gv(l,a[d])){const f=a[d];let m=c[d];m=Le(m);const E=o.oc(f);if(m instanceof ic)l.push(f);else{const _=Zi(m,E);_!=null&&(l.push(f),u.set(f,_))}}const h=new Ai(l);return new jv(u,h,o.fieldTransforms)}function rk(t,e,n,r=!1){return Zi(n,t.lc(r?4:3,e))}function Zi(t,e){if(Kv(t=Le(t)))return Mh("Unsupported field value:",e,t),zv(t,e);if(t instanceof rc)return function(n,r){if(!qv(r.ec))throw r.ac(`${n._methodName}() can only be used with update() and set()`);if(!r.path)throw r.ac(`${n._methodName}() is not currently supported inside arrays`);const s=n._toFieldTransform(r);s&&r.fieldTransforms.push(s)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.ic&&e.ec!==4)throw e.ac("Nested arrays are not supported");return function(n,r){const s=[];let i=0;for(const o of n){let a=Zi(o,r.uc(i));a==null&&(a={nullValue:"NULL_VALUE"}),s.push(a),i++}return{arrayValue:{values:s}}}(t,e)}return function(n,r){if((n=Le(n))===null)return{nullValue:"NULL_VALUE"};if(typeof n=="number")return zA(r.M,n);if(typeof n=="boolean")return{booleanValue:n};if(typeof n=="string")return{stringValue:n};if(n instanceof Date){const s=it.fromDate(n);return{timestampValue:oa(r.M,s)}}if(n instanceof it){const s=new it(n.seconds,1e3*Math.floor(n.nanoseconds/1e3));return{timestampValue:oa(r.M,s)}}if(n instanceof Dh)return{geoPointValue:{latitude:n.latitude,longitude:n.longitude}};if(n instanceof ms)return{bytesValue:gv(r.M,n._byteString)};if(n instanceof ot){const s=r.databaseId,i=n.firestore._databaseId;if(!i.isEqual(s))throw r.ac(`Document reference is for database ${i.projectId}/${i.database} but should be for database ${s.projectId}/${s.database}`);return{referenceValue:gh(n.firestore._databaseId||r.databaseId,n._key.path)}}throw r.ac(`Unsupported field value: ${ec(n)}`)}(t,e)}function zv(t,e){const n={};return Xy(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):Cr(t,(r,s)=>{const i=Zi(s,e.sc(r));i!=null&&(n[r]=i)}),{mapValue:{fields:n}}}function Kv(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof it||t instanceof Dh||t instanceof ms||t instanceof ot||t instanceof rc)}function Mh(t,e,n){if(!Kv(n)||!function(r){return typeof r=="object"&&r!==null&&(Object.getPrototypeOf(r)===Object.prototype||Object.getPrototypeOf(r)===null)}(n)){const r=ec(n);throw r==="an object"?e.ac(t+" a custom object"):e.ac(t+" "+r)}}function Kl(t,e,n){if((e=Le(e))instanceof nc)return e._internalPath;if(typeof e=="string")return Uh(t,e);throw la("Field path arguments must be of type string or ",t,!1,void 0,n)}const sk=new RegExp("[~\\*/\\[\\]]");function Uh(t,e,n){if(e.search(sk)>=0)throw la(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new nc(...e.split("."))._internalPath}catch{throw la(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function la(t,e,n,r,s){const i=r&&!r.isEmpty(),o=s!==void 0;let a=`Function ${e}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let c="";return(i||o)&&(c+=" (found",i&&(c+=` in field ${r}`),o&&(c+=` in document ${s}`),c+=")"),new U(b.INVALID_ARGUMENT,a+t+c)}function Gv(t,e){return t.some(n=>n.isEqual(e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wv{constructor(e,n,r,s,i){this._firestore=e,this._userDataWriter=n,this._key=r,this._document=s,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new ot(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new ik(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(oc("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class ik extends Wv{data(){return super.data()}}function oc(t,e){return typeof e=="string"?Uh(t,e):e instanceof nc?e._internalPath:e._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ys{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class Qv extends Wv{constructor(e,n,r,s,i,o){super(e,n,r,s,o),this._firestore=e,this._firestoreImpl=e,this.metadata=i}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new Oo(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const r=this._document.data.field(oc("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,n.serverTimestamps)}}}class Oo extends Qv{data(e={}){return super.data(e)}}class Xv{constructor(e,n,r,s){this._firestore=e,this._userDataWriter=n,this._snapshot=s,this.metadata=new Ys(s.hasPendingWrites,s.fromCache),this.query=r}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(r=>{e.call(n,new Oo(this._firestore,this._userDataWriter,r.key,r,new Ys(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new U(b.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(r,s){if(r._snapshot.oldDocs.isEmpty()){let i=0;return r._snapshot.docChanges.map(o=>({type:"added",doc:new Oo(r._firestore,r._userDataWriter,o.doc.key,o.doc,new Ys(r._snapshot.mutatedKeys.has(o.doc.key),r._snapshot.fromCache),r.query.converter),oldIndex:-1,newIndex:i++}))}{let i=r._snapshot.oldDocs;return r._snapshot.docChanges.filter(o=>s||o.type!==3).map(o=>{const a=new Oo(r._firestore,r._userDataWriter,o.doc.key,o.doc,new Ys(r._snapshot.mutatedKeys.has(o.doc.key),r._snapshot.fromCache),r.query.converter);let c=-1,l=-1;return o.type!==0&&(c=i.indexOf(o.doc.key),i=i.delete(o.doc.key)),o.type!==1&&(i=i.add(o.doc),l=i.indexOf(o.doc.key)),{type:ok(o.type),doc:a,oldIndex:c,newIndex:l}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}}function ok(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return X()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Yv(t){if(t.limitType==="L"&&t.explicitOrderBy.length===0)throw new U(b.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class $h{}function ap(t,...e){for(const n of e)t=n._apply(t);return t}class ak extends $h{constructor(e,n,r){super(),this._c=e,this.wc=n,this.mc=r,this.type="where"}_apply(e){const n=sc(e.firestore),r=function(s,i,o,a,c,l,u){let h;if(c.isKeyField()){if(l==="array-contains"||l==="array-contains-any")throw new U(b.INVALID_ARGUMENT,`Invalid Query. You can't perform '${l}' queries on documentId().`);if(l==="in"||l==="not-in"){hp(u,l);const f=[];for(const m of u)f.push(up(a,s,m));h={arrayValue:{values:f}}}else h=up(a,s,u)}else l!=="in"&&l!=="not-in"&&l!=="array-contains-any"||hp(u,l),h=rk(o,i,u,l==="in"||l==="not-in");const d=ft.create(c,l,h);return function(f,m){if(m.S()){const _=ph(f);if(_!==null&&!_.isEqual(m.field))throw new U(b.INVALID_ARGUMENT,`Invalid query. All where filters with an inequality (<, <=, !=, not-in, >, or >=) must be on the same field. But you have inequality filters on '${_.toString()}' and '${m.field.toString()}'`);const y=fh(f);y!==null&&Jv(f,m.field,y)}const E=function(_,y){for(const C of _.filters)if(y.indexOf(C.op)>=0)return C.op;return null}(f,function(_){switch(_){case"!=":return["!=","not-in"];case"array-contains":return["array-contains","array-contains-any","not-in"];case"in":return["array-contains-any","in","not-in"];case"array-contains-any":return["array-contains","array-contains-any","in","not-in"];case"not-in":return["array-contains","array-contains-any","in","not-in","!="];default:return[]}}(m.op));if(E!==null)throw E===m.op?new U(b.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${m.op.toString()}' filter.`):new U(b.INVALID_ARGUMENT,`Invalid query. You cannot use '${m.op.toString()}' filters with '${E.toString()}' filters.`)}(s,d),d}(e._query,"where",n,e.firestore._databaseId,this._c,this.wc,this.mc);return new Qn(e.firestore,e.converter,function(s,i){const o=s.filters.concat([i]);return new Ns(s.path,s.collectionGroup,s.explicitOrderBy.slice(),o,s.limit,s.limitType,s.startAt,s.endAt)}(e._query,r))}}function ck(t,e,n){const r=e,s=oc("where",t);return new ak(s,r,n)}class lk extends $h{constructor(e,n){super(),this._c=e,this.gc=n,this.type="orderBy"}_apply(e){const n=function(r,s,i){if(r.startAt!==null)throw new U(b.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(r.endAt!==null)throw new U(b.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");const o=new rs(s,i);return function(a,c){if(fh(a)===null){const l=ph(a);l!==null&&Jv(a,l,c.field)}}(r,o),o}(e._query,this._c,this.gc);return new Qn(e.firestore,e.converter,function(r,s){const i=r.explicitOrderBy.concat([s]);return new Ns(r.path,r.collectionGroup,i,r.filters.slice(),r.limit,r.limitType,r.startAt,r.endAt)}(e._query,n))}}function cp(t,e="asc"){const n=e,r=oc("orderBy",t);return new lk(r,n)}class uk extends $h{constructor(e,n,r){super(),this.type=e,this.yc=n,this.Ic=r}_apply(e){return new Qn(e.firestore,e.converter,nv(e._query,this.yc,this.Ic))}}function lp(t){return QC("limit",t),new uk("limit",t,"F")}function up(t,e,n){if(typeof(n=Le(n))=="string"){if(n==="")throw new U(b.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!tv(e)&&n.indexOf("/")!==-1)throw new U(b.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${n}' contains a '/' character.`);const r=e.path.child(Se.fromString(n));if(!H.isDocumentKey(r))throw new U(b.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return Nf(t,new H(r))}if(n instanceof ot)return Nf(t,n._key);throw new U(b.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${ec(n)}.`)}function hp(t,e){if(!Array.isArray(t)||t.length===0)throw new U(b.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`);if(t.length>10)throw new U(b.INVALID_ARGUMENT,`Invalid Query. '${e.toString()}' filters support a maximum of 10 elements in the value array.`)}function Jv(t,e,n){if(!n.isEqual(e))throw new U(b.INVALID_ARGUMENT,`Invalid query. You have a where filter with an inequality (<, <=, !=, not-in, >, or >=) on field '${e.toString()}' and so you must also use '${e.toString()}' as your first argument to orderBy(), but your first orderBy() is on field '${n.toString()}' instead.`)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hk{convertValue(e,n="none"){switch(vr(e)){case 0:return null;case 1:return e.booleanValue;case 2:return Pe(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(us(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 10:return this.convertObject(e.mapValue,n);default:throw X()}}convertObject(e,n){const r={};return Cr(e.fields,(s,i)=>{r[s]=this.convertValue(i,n)}),r}convertGeoPoint(e){return new Dh(Pe(e.latitude),Pe(e.longitude))}convertArray(e,n){return(e.values||[]).map(r=>this.convertValue(r,n))}convertServerTimestamp(e,n){switch(n){case"previous":const r=Jy(e);return r==null?null:this.convertValue(r,n);case"estimate":return this.convertTimestamp(Si(e));default:return null}}convertTimestamp(e){const n=qn(e);return new it(n.seconds,n.nanos)}convertDocumentKey(e,n){const r=Se.fromString(e);Te(wv(r));const s=new hs(r.get(1),r.get(3)),i=new H(r.popFirst(5));return s.isEqual(n)||jn(`Document ${i} contains a document reference within a different database (${s.projectId}/${s.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Zv(t,e,n){let r;return r=t?n&&(n.merge||n.mergeFields)?t.toFirestore(e,n):t.toFirestore(e):e,r}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function YL(t){t=Dt(t,ot);const e=Dt(t.firestore,zn);return KC(tc(e),t._key).then(n=>e_(e,t,n))}class Fh extends hk{constructor(e){super(),this.firestore=e}convertBytes(e){return new ms(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new ot(this.firestore,null,n)}}function dk(t){t=Dt(t,Qn);const e=Dt(t.firestore,zn),n=tc(e),r=new Fh(e);return Yv(t._query),GC(n,t._query).then(s=>new Xv(e,r,t,s))}function fk(t,e,n){t=Dt(t,ot);const r=Dt(t.firestore,zn),s=Zv(t.converter,e,n);return Bh(r,[Hv(sc(r),"setDoc",t._key,s,t.converter!==null,n).toMutation(t._key,Un.none())])}function JL(t,e,n,...r){t=Dt(t,ot);const s=Dt(t.firestore,zn),i=sc(s);let o;return o=typeof(e=Le(e))=="string"||e instanceof nc?nk(i,"updateDoc",t._key,e,n,r):tk(i,"updateDoc",t._key,e),Bh(s,[o.toMutation(t._key,Un.exists(!0))])}function ZL(t,e){const n=Dt(t.firestore,zn),r=Bv(t),s=Zv(t.converter,e);return Bh(n,[Hv(sc(t.firestore),"addDoc",r._key,s,t.converter!==null,{}).toMutation(r._key,Un.exists(!1))]).then(()=>r)}function pk(t,...e){var n,r,s;t=Le(t);let i={includeMetadataChanges:!1},o=0;typeof e[o]!="object"||op(e[o])||(i=e[o],o++);const a={includeMetadataChanges:i.includeMetadataChanges};if(op(e[o])){const h=e[o];e[o]=(n=h.next)===null||n===void 0?void 0:n.bind(h),e[o+1]=(r=h.error)===null||r===void 0?void 0:r.bind(h),e[o+2]=(s=h.complete)===null||s===void 0?void 0:s.bind(h)}let c,l,u;if(t instanceof ot)l=Dt(t.firestore,zn),u=za(t._key.path),c={next:h=>{e[o]&&e[o](e_(l,t,h))},error:e[o+1],complete:e[o+2]};else{const h=Dt(t,Qn);l=Dt(h.firestore,zn),u=h._query;const d=new Fh(l);c={next:f=>{e[o]&&e[o](new Xv(l,d,h,f))},error:e[o+1],complete:e[o+2]},Yv(t._query)}return function(h,d,f,m){const E=new Oh(m),_=new xh(d,E,f);return h.asyncQueue.enqueueAndForget(async()=>Sh(await ca(h),_)),()=>{E.Aa(),h.asyncQueue.enqueueAndForget(async()=>Ch(await ca(h),_))}}(tc(l),u,a,c)}function Bh(t,e){return function(n,r){const s=new mn;return n.asyncQueue.enqueueAndForget(async()=>RC(await zC(n),r,s)),s.promise}(tc(t),e)}function e_(t,e,n){const r=n.docs.get(e._key),s=new Fh(t);return new Qv(t,s,e._key,r,new Ys(n.hasPendingWrites,n.fromCache),e.converter)}function eM(){return new Lh("serverTimestamp")}(function(t,e=!0){(function(n){Os=n})(Cs),dr(new Vn("firestore",(n,{options:r})=>{const s=n.getProvider("app").getImmediate(),i=new zn(s,new yA(n.getProvider("auth-internal")),new EA(n.getProvider("app-check-internal")));return r=Object.assign({useFetchStreams:e},r),i._setSettings(r),i},"PUBLIC")),Yt(Cf,"3.4.9",t),Yt(Cf,"3.4.9","esm2017")})();/*!
  * vue-router v4.0.13
  * (c) 2022 Eduardo San Martin Morote
  * @license MIT
  */const t_=typeof Symbol=="function"&&typeof Symbol.toStringTag=="symbol",Ms=t=>t_?Symbol(t):"_vr_"+t,mk=Ms("rvlm"),dp=Ms("rvd"),ac=Ms("r"),Vh=Ms("rl"),Gl=Ms("rvl"),zr=typeof window!="undefined";function gk(t){return t.__esModule||t_&&t[Symbol.toStringTag]==="Module"}const _e=Object.assign;function Vc(t,e){const n={};for(const r in e){const s=e[r];n[r]=Array.isArray(s)?s.map(t):t(s)}return n}const oi=()=>{},yk=/\/$/,vk=t=>t.replace(yk,"");function jc(t,e,n="/"){let r,s={},i="",o="";const a=e.indexOf("?"),c=e.indexOf("#",a>-1?a:0);return a>-1&&(r=e.slice(0,a),i=e.slice(a+1,c>-1?c:e.length),s=t(i)),c>-1&&(r=r||e.slice(0,c),o=e.slice(c,e.length)),r=bk(r!=null?r:e,n),{fullPath:r+(i&&"?")+i+o,path:r,query:s,hash:o}}function _k(t,e){const n=e.query?t(e.query):"";return e.path+(n&&"?")+n+(e.hash||"")}function fp(t,e){return!e||!t.toLowerCase().startsWith(e.toLowerCase())?t:t.slice(e.length)||"/"}function wk(t,e,n){const r=e.matched.length-1,s=n.matched.length-1;return r>-1&&r===s&&gs(e.matched[r],n.matched[s])&&n_(e.params,n.params)&&t(e.query)===t(n.query)&&e.hash===n.hash}function gs(t,e){return(t.aliasOf||t)===(e.aliasOf||e)}function n_(t,e){if(Object.keys(t).length!==Object.keys(e).length)return!1;for(const n in t)if(!Ek(t[n],e[n]))return!1;return!0}function Ek(t,e){return Array.isArray(t)?pp(t,e):Array.isArray(e)?pp(e,t):t===e}function pp(t,e){return Array.isArray(e)?t.length===e.length&&t.every((n,r)=>n===e[r]):t.length===1&&t[0]===e}function bk(t,e){if(t.startsWith("/"))return t;if(!t)return e;const n=e.split("/"),r=t.split("/");let s=n.length-1,i,o;for(i=0;i<r.length;i++)if(o=r[i],!(s===1||o==="."))if(o==="..")s--;else break;return n.slice(0,s).join("/")+"/"+r.slice(i-(i===r.length?1:0)).join("/")}var Ni;(function(t){t.pop="pop",t.push="push"})(Ni||(Ni={}));var ai;(function(t){t.back="back",t.forward="forward",t.unknown=""})(ai||(ai={}));function Tk(t){if(!t)if(zr){const e=document.querySelector("base");t=e&&e.getAttribute("href")||"/",t=t.replace(/^\w+:\/\/[^\/]+/,"")}else t="/";return t[0]!=="/"&&t[0]!=="#"&&(t="/"+t),vk(t)}const Ik=/^[^#]+#/;function Ak(t,e){return t.replace(Ik,"#")+e}function Sk(t,e){const n=document.documentElement.getBoundingClientRect(),r=t.getBoundingClientRect();return{behavior:e.behavior,left:r.left-n.left-(e.left||0),top:r.top-n.top-(e.top||0)}}const cc=()=>({left:window.pageXOffset,top:window.pageYOffset});function Ck(t){let e;if("el"in t){const n=t.el,r=typeof n=="string"&&n.startsWith("#"),s=typeof n=="string"?r?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!s)return;e=Sk(s,t)}else e=t;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(e.left!=null?e.left:window.pageXOffset,e.top!=null?e.top:window.pageYOffset)}function mp(t,e){return(history.state?history.state.position-e:-1)+t}const Wl=new Map;function kk(t,e){Wl.set(t,e)}function xk(t){const e=Wl.get(t);return Wl.delete(t),e}let Rk=()=>location.protocol+"//"+location.host;function r_(t,e){const{pathname:n,search:r,hash:s}=e,i=t.indexOf("#");if(i>-1){let a=s.includes(t.slice(i))?t.slice(i).length:1,c=s.slice(a);return c[0]!=="/"&&(c="/"+c),fp(c,"")}return fp(n,t)+r+s}function Ok(t,e,n,r){let s=[],i=[],o=null;const a=({state:d})=>{const f=r_(t,location),m=n.value,E=e.value;let _=0;if(d){if(n.value=f,e.value=d,o&&o===m){o=null;return}_=E?d.position-E.position:0}else r(f);s.forEach(y=>{y(n.value,m,{delta:_,type:Ni.pop,direction:_?_>0?ai.forward:ai.back:ai.unknown})})};function c(){o=n.value}function l(d){s.push(d);const f=()=>{const m=s.indexOf(d);m>-1&&s.splice(m,1)};return i.push(f),f}function u(){const{history:d}=window;!d.state||d.replaceState(_e({},d.state,{scroll:cc()}),"")}function h(){for(const d of i)d();i=[],window.removeEventListener("popstate",a),window.removeEventListener("beforeunload",u)}return window.addEventListener("popstate",a),window.addEventListener("beforeunload",u),{pauseListeners:c,listen:l,destroy:h}}function gp(t,e,n,r=!1,s=!1){return{back:t,current:e,forward:n,replaced:r,position:window.history.length,scroll:s?cc():null}}function Nk(t){const{history:e,location:n}=window,r={value:r_(t,n)},s={value:e.state};s.value||i(r.value,{back:null,current:r.value,forward:null,position:e.length-1,replaced:!0,scroll:null},!0);function i(c,l,u){const h=t.indexOf("#"),d=h>-1?(n.host&&document.querySelector("base")?t:t.slice(h))+c:Rk()+t+c;try{e[u?"replaceState":"pushState"](l,"",d),s.value=l}catch(f){console.error(f),n[u?"replace":"assign"](d)}}function o(c,l){const u=_e({},e.state,gp(s.value.back,c,s.value.forward,!0),l,{position:s.value.position});i(c,u,!0),r.value=c}function a(c,l){const u=_e({},s.value,e.state,{forward:c,scroll:cc()});i(u.current,u,!0);const h=_e({},gp(r.value,c,null),{position:u.position+1},l);i(c,h,!1),r.value=c}return{location:r,state:s,push:a,replace:o}}function Dk(t){t=Tk(t);const e=Nk(t),n=Ok(t,e.state,e.location,e.replace);function r(i,o=!0){o||n.pauseListeners(),history.go(i)}const s=_e({location:"",base:t,go:r,createHref:Ak.bind(null,t)},e,n);return Object.defineProperty(s,"location",{enumerable:!0,get:()=>e.location.value}),Object.defineProperty(s,"state",{enumerable:!0,get:()=>e.state.value}),s}function Pk(t){return typeof t=="string"||t&&typeof t=="object"}function s_(t){return typeof t=="string"||typeof t=="symbol"}const In={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},i_=Ms("nf");var yp;(function(t){t[t.aborted=4]="aborted",t[t.cancelled=8]="cancelled",t[t.duplicated=16]="duplicated"})(yp||(yp={}));function ys(t,e){return _e(new Error,{type:t,[i_]:!0},e)}function An(t,e){return t instanceof Error&&i_ in t&&(e==null||!!(t.type&e))}const vp="[^/]+?",Lk={sensitive:!1,strict:!1,start:!0,end:!0},Mk=/[.+*?^${}()[\]/\\]/g;function Uk(t,e){const n=_e({},Lk,e),r=[];let s=n.start?"^":"";const i=[];for(const l of t){const u=l.length?[]:[90];n.strict&&!l.length&&(s+="/");for(let h=0;h<l.length;h++){const d=l[h];let f=40+(n.sensitive?.25:0);if(d.type===0)h||(s+="/"),s+=d.value.replace(Mk,"\\$&"),f+=40;else if(d.type===1){const{value:m,repeatable:E,optional:_,regexp:y}=d;i.push({name:m,repeatable:E,optional:_});const C=y||vp;if(C!==vp){f+=10;try{new RegExp(`(${C})`)}catch(F){throw new Error(`Invalid custom RegExp for param "${m}" (${C}): `+F.message)}}let L=E?`((?:${C})(?:/(?:${C}))*)`:`(${C})`;h||(L=_&&l.length<2?`(?:/${L})`:"/"+L),_&&(L+="?"),s+=L,f+=20,_&&(f+=-8),E&&(f+=-20),C===".*"&&(f+=-50)}u.push(f)}r.push(u)}if(n.strict&&n.end){const l=r.length-1;r[l][r[l].length-1]+=.7000000000000001}n.strict||(s+="/?"),n.end?s+="$":n.strict&&(s+="(?:/|$)");const o=new RegExp(s,n.sensitive?"":"i");function a(l){const u=l.match(o),h={};if(!u)return null;for(let d=1;d<u.length;d++){const f=u[d]||"",m=i[d-1];h[m.name]=f&&m.repeatable?f.split("/"):f}return h}function c(l){let u="",h=!1;for(const d of t){(!h||!u.endsWith("/"))&&(u+="/"),h=!1;for(const f of d)if(f.type===0)u+=f.value;else if(f.type===1){const{value:m,repeatable:E,optional:_}=f,y=m in l?l[m]:"";if(Array.isArray(y)&&!E)throw new Error(`Provided param "${m}" is an array but it is not repeatable (* or + modifiers)`);const C=Array.isArray(y)?y.join("/"):y;if(!C)if(_)d.length<2&&(u.endsWith("/")?u=u.slice(0,-1):h=!0);else throw new Error(`Missing required param "${m}"`);u+=C}}return u}return{re:o,score:r,keys:i,parse:a,stringify:c}}function $k(t,e){let n=0;for(;n<t.length&&n<e.length;){const r=e[n]-t[n];if(r)return r;n++}return t.length<e.length?t.length===1&&t[0]===40+40?-1:1:t.length>e.length?e.length===1&&e[0]===40+40?1:-1:0}function Fk(t,e){let n=0;const r=t.score,s=e.score;for(;n<r.length&&n<s.length;){const i=$k(r[n],s[n]);if(i)return i;n++}return s.length-r.length}const Bk={type:0,value:""},Vk=/[a-zA-Z0-9_]/;function jk(t){if(!t)return[[]];if(t==="/")return[[Bk]];if(!t.startsWith("/"))throw new Error(`Invalid path "${t}"`);function e(f){throw new Error(`ERR (${n})/"${l}": ${f}`)}let n=0,r=n;const s=[];let i;function o(){i&&s.push(i),i=[]}let a=0,c,l="",u="";function h(){!l||(n===0?i.push({type:0,value:l}):n===1||n===2||n===3?(i.length>1&&(c==="*"||c==="+")&&e(`A repeatable param (${l}) must be alone in its segment. eg: '/:ids+.`),i.push({type:1,value:l,regexp:u,repeatable:c==="*"||c==="+",optional:c==="*"||c==="?"})):e("Invalid state to consume buffer"),l="")}function d(){l+=c}for(;a<t.length;){if(c=t[a++],c==="\\"&&n!==2){r=n,n=4;continue}switch(n){case 0:c==="/"?(l&&h(),o()):c===":"?(h(),n=1):d();break;case 4:d(),n=r;break;case 1:c==="("?n=2:Vk.test(c)?d():(h(),n=0,c!=="*"&&c!=="?"&&c!=="+"&&a--);break;case 2:c===")"?u[u.length-1]=="\\"?u=u.slice(0,-1)+c:n=3:u+=c;break;case 3:h(),n=0,c!=="*"&&c!=="?"&&c!=="+"&&a--,u="";break;default:e("Unknown state");break}}return n===2&&e(`Unfinished custom RegExp for param "${l}"`),h(),o(),s}function qk(t,e,n){const r=Uk(jk(t.path),n),s=_e(r,{record:t,parent:e,children:[],alias:[]});return e&&!s.record.aliasOf==!e.record.aliasOf&&e.children.push(s),s}function Hk(t,e){const n=[],r=new Map;e=wp({strict:!1,end:!0,sensitive:!1},e);function s(u){return r.get(u)}function i(u,h,d){const f=!d,m=Kk(u);m.aliasOf=d&&d.record;const E=wp(e,u),_=[m];if("alias"in u){const L=typeof u.alias=="string"?[u.alias]:u.alias;for(const F of L)_.push(_e({},m,{components:d?d.record.components:m.components,path:F,aliasOf:d?d.record:m}))}let y,C;for(const L of _){const{path:F}=L;if(h&&F[0]!=="/"){const re=h.record.path,ce=re[re.length-1]==="/"?"":"/";L.path=h.record.path+(F&&ce+F)}if(y=qk(L,h,E),d?d.alias.push(y):(C=C||y,C!==y&&C.alias.push(y),f&&u.name&&!_p(y)&&o(u.name)),"children"in m){const re=m.children;for(let ce=0;ce<re.length;ce++)i(re[ce],y,d&&d.children[ce])}d=d||y,c(y)}return C?()=>{o(C)}:oi}function o(u){if(s_(u)){const h=r.get(u);h&&(r.delete(u),n.splice(n.indexOf(h),1),h.children.forEach(o),h.alias.forEach(o))}else{const h=n.indexOf(u);h>-1&&(n.splice(h,1),u.record.name&&r.delete(u.record.name),u.children.forEach(o),u.alias.forEach(o))}}function a(){return n}function c(u){let h=0;for(;h<n.length&&Fk(u,n[h])>=0&&(u.record.path!==n[h].record.path||!o_(u,n[h]));)h++;n.splice(h,0,u),u.record.name&&!_p(u)&&r.set(u.record.name,u)}function l(u,h){let d,f={},m,E;if("name"in u&&u.name){if(d=r.get(u.name),!d)throw ys(1,{location:u});E=d.record.name,f=_e(zk(h.params,d.keys.filter(C=>!C.optional).map(C=>C.name)),u.params),m=d.stringify(f)}else if("path"in u)m=u.path,d=n.find(C=>C.re.test(m)),d&&(f=d.parse(m),E=d.record.name);else{if(d=h.name?r.get(h.name):n.find(C=>C.re.test(h.path)),!d)throw ys(1,{location:u,currentLocation:h});E=d.record.name,f=_e({},h.params,u.params),m=d.stringify(f)}const _=[];let y=d;for(;y;)_.unshift(y.record),y=y.parent;return{name:E,path:m,params:f,matched:_,meta:Wk(_)}}return t.forEach(u=>i(u)),{addRoute:i,resolve:l,removeRoute:o,getRoutes:a,getRecordMatcher:s}}function zk(t,e){const n={};for(const r of e)r in t&&(n[r]=t[r]);return n}function Kk(t){return{path:t.path,redirect:t.redirect,name:t.name,meta:t.meta||{},aliasOf:void 0,beforeEnter:t.beforeEnter,props:Gk(t),children:t.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in t?t.components||{}:{default:t.component}}}function Gk(t){const e={},n=t.props||!1;if("component"in t)e.default=n;else for(const r in t.components)e[r]=typeof n=="boolean"?n:n[r];return e}function _p(t){for(;t;){if(t.record.aliasOf)return!0;t=t.parent}return!1}function Wk(t){return t.reduce((e,n)=>_e(e,n.meta),{})}function wp(t,e){const n={};for(const r in t)n[r]=r in e?e[r]:t[r];return n}function o_(t,e){return e.children.some(n=>n===t||o_(t,n))}const a_=/#/g,Qk=/&/g,Xk=/\//g,Yk=/=/g,Jk=/\?/g,c_=/\+/g,Zk=/%5B/g,ex=/%5D/g,l_=/%5E/g,tx=/%60/g,u_=/%7B/g,nx=/%7C/g,h_=/%7D/g,rx=/%20/g;function jh(t){return encodeURI(""+t).replace(nx,"|").replace(Zk,"[").replace(ex,"]")}function sx(t){return jh(t).replace(u_,"{").replace(h_,"}").replace(l_,"^")}function Ql(t){return jh(t).replace(c_,"%2B").replace(rx,"+").replace(a_,"%23").replace(Qk,"%26").replace(tx,"`").replace(u_,"{").replace(h_,"}").replace(l_,"^")}function ix(t){return Ql(t).replace(Yk,"%3D")}function ox(t){return jh(t).replace(a_,"%23").replace(Jk,"%3F")}function ax(t){return t==null?"":ox(t).replace(Xk,"%2F")}function ua(t){try{return decodeURIComponent(""+t)}catch{}return""+t}function cx(t){const e={};if(t===""||t==="?")return e;const r=(t[0]==="?"?t.slice(1):t).split("&");for(let s=0;s<r.length;++s){const i=r[s].replace(c_," "),o=i.indexOf("="),a=ua(o<0?i:i.slice(0,o)),c=o<0?null:ua(i.slice(o+1));if(a in e){let l=e[a];Array.isArray(l)||(l=e[a]=[l]),l.push(c)}else e[a]=c}return e}function Ep(t){let e="";for(let n in t){const r=t[n];if(n=ix(n),r==null){r!==void 0&&(e+=(e.length?"&":"")+n);continue}(Array.isArray(r)?r.map(i=>i&&Ql(i)):[r&&Ql(r)]).forEach(i=>{i!==void 0&&(e+=(e.length?"&":"")+n,i!=null&&(e+="="+i))})}return e}function lx(t){const e={};for(const n in t){const r=t[n];r!==void 0&&(e[n]=Array.isArray(r)?r.map(s=>s==null?null:""+s):r==null?r:""+r)}return e}function qs(){let t=[];function e(r){return t.push(r),()=>{const s=t.indexOf(r);s>-1&&t.splice(s,1)}}function n(){t=[]}return{add:e,list:()=>t,reset:n}}function kn(t,e,n,r,s){const i=r&&(r.enterCallbacks[s]=r.enterCallbacks[s]||[]);return()=>new Promise((o,a)=>{const c=h=>{h===!1?a(ys(4,{from:n,to:e})):h instanceof Error?a(h):Pk(h)?a(ys(2,{from:e,to:h})):(i&&r.enterCallbacks[s]===i&&typeof h=="function"&&i.push(h),o())},l=t.call(r&&r.instances[s],e,n,c);let u=Promise.resolve(l);t.length<3&&(u=u.then(c)),u.catch(h=>a(h))})}function qc(t,e,n,r){const s=[];for(const i of t)for(const o in i.components){let a=i.components[o];if(!(e!=="beforeRouteEnter"&&!i.instances[o]))if(ux(a)){const l=(a.__vccOpts||a)[e];l&&s.push(kn(l,n,r,i,o))}else{let c=a();s.push(()=>c.then(l=>{if(!l)return Promise.reject(new Error(`Couldn't resolve component "${o}" at "${i.path}"`));const u=gk(l)?l.default:l;i.components[o]=u;const d=(u.__vccOpts||u)[e];return d&&kn(d,n,r,i,o)()}))}}return s}function ux(t){return typeof t=="object"||"displayName"in t||"props"in t||"__vccOpts"in t}function bp(t){const e=Bt(ac),n=Bt(Vh),r=vt(()=>e.resolve(Ae(t.to))),s=vt(()=>{const{matched:c}=r.value,{length:l}=c,u=c[l-1],h=n.matched;if(!u||!h.length)return-1;const d=h.findIndex(gs.bind(null,u));if(d>-1)return d;const f=Tp(c[l-2]);return l>1&&Tp(u)===f&&h[h.length-1].path!==f?h.findIndex(gs.bind(null,c[l-2])):d}),i=vt(()=>s.value>-1&&px(n.params,r.value.params)),o=vt(()=>s.value>-1&&s.value===n.matched.length-1&&n_(n.params,r.value.params));function a(c={}){return fx(c)?e[Ae(t.replace)?"replace":"push"](Ae(t.to)).catch(oi):Promise.resolve()}return{route:r,href:vt(()=>r.value.href),isActive:i,isExactActive:o,navigate:a}}const hx=et({name:"RouterLink",props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:bp,setup(t,{slots:e}){const n=tn(bp(t)),{options:r}=Bt(ac),s=vt(()=>({[Ip(t.activeClass,r.linkActiveClass,"router-link-active")]:n.isActive,[Ip(t.exactActiveClass,r.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const i=e.default&&e.default(n);return t.custom?i:Gm("a",{"aria-current":n.isExactActive?t.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:s.value},i)}}}),dx=hx;function fx(t){if(!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)&&!t.defaultPrevented&&!(t.button!==void 0&&t.button!==0)){if(t.currentTarget&&t.currentTarget.getAttribute){const e=t.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return t.preventDefault&&t.preventDefault(),!0}}function px(t,e){for(const n in e){const r=e[n],s=t[n];if(typeof r=="string"){if(r!==s)return!1}else if(!Array.isArray(s)||s.length!==r.length||r.some((i,o)=>i!==s[o]))return!1}return!0}function Tp(t){return t?t.aliasOf?t.aliasOf.path:t.path:""}const Ip=(t,e,n)=>t!=null?t:e!=null?e:n,mx=et({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},setup(t,{attrs:e,slots:n}){const r=Bt(Gl),s=vt(()=>t.route||r.value),i=Bt(dp,0),o=vt(()=>s.value.matched[i]);Eo(dp,i+1),Eo(mk,o),Eo(Gl,s);const a=le();return Xt(()=>[a.value,o.value,t.name],([c,l,u],[h,d,f])=>{l&&(l.instances[u]=c,d&&d!==l&&c&&c===h&&(l.leaveGuards.size||(l.leaveGuards=d.leaveGuards),l.updateGuards.size||(l.updateGuards=d.updateGuards))),c&&l&&(!d||!gs(l,d)||!h)&&(l.enterCallbacks[u]||[]).forEach(m=>m(c))},{flush:"post"}),()=>{const c=s.value,l=o.value,u=l&&l.components[t.name],h=t.name;if(!u)return Ap(n.default,{Component:u,route:c});const d=l.props[t.name],f=d?d===!0?c.params:typeof d=="function"?d(c):d:null,E=Gm(u,_e({},f,e,{onVnodeUnmounted:_=>{_.component.isUnmounted&&(l.instances[h]=null)},ref:a}));return Ap(n.default,{Component:E,route:c})||E}}});function Ap(t,e){if(!t)return null;const n=t(e);return n.length===1?n[0]:n}const gx=mx;function yx(t){const e=Hk(t.routes,t),n=t.parseQuery||cx,r=t.stringifyQuery||Ep,s=t.history,i=qs(),o=qs(),a=qs(),c=Qw(In);let l=In;zr&&t.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const u=Vc.bind(null,T=>""+T),h=Vc.bind(null,ax),d=Vc.bind(null,ua);function f(T,V){let N,q;return s_(T)?(N=e.getRecordMatcher(T),q=V):q=T,e.addRoute(q,N)}function m(T){const V=e.getRecordMatcher(T);V&&e.removeRoute(V)}function E(){return e.getRoutes().map(T=>T.record)}function _(T){return!!e.getRecordMatcher(T)}function y(T,V){if(V=_e({},V||c.value),typeof T=="string"){const ee=jc(n,T,V.path),p=e.resolve({path:ee.path},V),g=s.createHref(ee.fullPath);return _e(ee,p,{params:d(p.params),hash:ua(ee.hash),redirectedFrom:void 0,href:g})}let N;if("path"in T)N=_e({},T,{path:jc(n,T.path,V.path).path});else{const ee=_e({},T.params);for(const p in ee)ee[p]==null&&delete ee[p];N=_e({},T,{params:h(T.params)}),V.params=h(V.params)}const q=e.resolve(N,V),ye=T.hash||"";q.params=u(d(q.params));const be=_k(r,_e({},T,{hash:sx(ye),path:q.path})),se=s.createHref(be);return _e({fullPath:be,hash:ye,query:r===Ep?lx(T.query):T.query||{}},q,{redirectedFrom:void 0,href:se})}function C(T){return typeof T=="string"?jc(n,T,c.value.path):_e({},T)}function L(T,V){if(l!==T)return ys(8,{from:V,to:T})}function F(T){return Ne(T)}function re(T){return F(_e(C(T),{replace:!0}))}function ce(T){const V=T.matched[T.matched.length-1];if(V&&V.redirect){const{redirect:N}=V;let q=typeof N=="function"?N(T):N;return typeof q=="string"&&(q=q.includes("?")||q.includes("#")?q=C(q):{path:q},q.params={}),_e({query:T.query,hash:T.hash,params:T.params},q)}}function Ne(T,V){const N=l=y(T),q=c.value,ye=T.state,be=T.force,se=T.replace===!0,ee=ce(N);if(ee)return Ne(_e(C(ee),{state:ye,force:be,replace:se}),V||N);const p=N;p.redirectedFrom=V;let g;return!be&&wk(r,q,N)&&(g=ys(16,{to:p,from:q}),Dr(q,q,!0,!1)),(g?Promise.resolve(g):Fe(p,q)).catch(w=>An(w)?An(w,2)?w:bt(w):Ee(w,p,q)).then(w=>{if(w){if(An(w,2))return Ne(_e(C(w.to),{state:ye,force:be,replace:se}),V||p)}else w=sn(p,q,!0,se,ye);return jt(p,q,w),w})}function Ke(T,V){const N=L(T,V);return N?Promise.reject(N):Promise.resolve()}function Fe(T,V){let N;const[q,ye,be]=vx(T,V);N=qc(q.reverse(),"beforeRouteLeave",T,V);for(const ee of q)ee.leaveGuards.forEach(p=>{N.push(kn(p,T,V))});const se=Ke.bind(null,T,V);return N.push(se),$r(N).then(()=>{N=[];for(const ee of i.list())N.push(kn(ee,T,V));return N.push(se),$r(N)}).then(()=>{N=qc(ye,"beforeRouteUpdate",T,V);for(const ee of ye)ee.updateGuards.forEach(p=>{N.push(kn(p,T,V))});return N.push(se),$r(N)}).then(()=>{N=[];for(const ee of T.matched)if(ee.beforeEnter&&!V.matched.includes(ee))if(Array.isArray(ee.beforeEnter))for(const p of ee.beforeEnter)N.push(kn(p,T,V));else N.push(kn(ee.beforeEnter,T,V));return N.push(se),$r(N)}).then(()=>(T.matched.forEach(ee=>ee.enterCallbacks={}),N=qc(be,"beforeRouteEnter",T,V),N.push(se),$r(N))).then(()=>{N=[];for(const ee of o.list())N.push(kn(ee,T,V));return N.push(se),$r(N)}).catch(ee=>An(ee,8)?ee:Promise.reject(ee))}function jt(T,V,N){for(const q of a.list())q(T,V,N)}function sn(T,V,N,q,ye){const be=L(T,V);if(be)return be;const se=V===In,ee=zr?history.state:{};N&&(q||se?s.replace(T.fullPath,_e({scroll:se&&ee&&ee.scroll},ye)):s.push(T.fullPath,ye)),c.value=T,Dr(T,V,N,se),bt()}let on;function Rr(){on=s.listen((T,V,N)=>{const q=y(T),ye=ce(q);if(ye){Ne(_e(ye,{replace:!0}),q).catch(oi);return}l=q;const be=c.value;zr&&kk(mp(be.fullPath,N.delta),cc()),Fe(q,be).catch(se=>An(se,12)?se:An(se,2)?(Ne(se.to,q).then(ee=>{An(ee,20)&&!N.delta&&N.type===Ni.pop&&s.go(-1,!1)}).catch(oi),Promise.reject()):(N.delta&&s.go(-N.delta,!1),Ee(se,q,be))).then(se=>{se=se||sn(q,be,!1),se&&(N.delta?s.go(-N.delta,!1):N.type===Ni.pop&&An(se,20)&&s.go(-1,!1)),jt(q,be,se)}).catch(oi)})}let Or=qs(),Nr=qs(),Ue;function Ee(T,V,N){bt(T);const q=Nr.list();return q.length?q.forEach(ye=>ye(T,V,N)):console.error(T),Promise.reject(T)}function ge(){return Ue&&c.value!==In?Promise.resolve():new Promise((T,V)=>{Or.add([T,V])})}function bt(T){return Ue||(Ue=!T,Rr(),Or.list().forEach(([V,N])=>T?N(T):V()),Or.reset()),T}function Dr(T,V,N,q){const{scrollBehavior:ye}=t;if(!zr||!ye)return Promise.resolve();const be=!N&&xk(mp(T.fullPath,0))||(q||!N)&&history.state&&history.state.scroll||null;return Gr().then(()=>ye(T,V,be)).then(se=>se&&Ck(se)).catch(se=>Ee(se,T,V))}const an=T=>s.go(T);let qt;const Ot=new Set;return{currentRoute:c,addRoute:f,removeRoute:m,hasRoute:_,getRoutes:E,resolve:y,options:t,push:F,replace:re,go:an,back:()=>an(-1),forward:()=>an(1),beforeEach:i.add,beforeResolve:o.add,afterEach:a.add,onError:Nr.add,isReady:ge,install(T){const V=this;T.component("RouterLink",dx),T.component("RouterView",gx),T.config.globalProperties.$router=V,Object.defineProperty(T.config.globalProperties,"$route",{enumerable:!0,get:()=>Ae(c)}),zr&&!qt&&c.value===In&&(qt=!0,F(s.location).catch(ye=>{}));const N={};for(const ye in In)N[ye]=vt(()=>c.value[ye]);T.provide(ac,V),T.provide(Vh,tn(N)),T.provide(Gl,c);const q=T.unmount;Ot.add(T),T.unmount=function(){Ot.delete(T),Ot.size<1&&(l=In,on&&on(),c.value=In,qt=!1,Ue=!1),q()}}}}function $r(t){return t.reduce((e,n)=>e.then(()=>n()),Promise.resolve())}function vx(t,e){const n=[],r=[],s=[],i=Math.max(e.matched.length,t.matched.length);for(let o=0;o<i;o++){const a=e.matched[o];a&&(t.matched.find(l=>gs(l,a))?r.push(a):n.push(a));const c=t.matched[o];c&&(e.matched.find(l=>gs(l,c))||s.push(c))}return[n,r,s]}function qh(){return Bt(ac)}function d_(){return Bt(Vh)}const is="https://remlove.herokuapp.com/api/v1/",f_=[{name:"H\xE0nh \u0111\u1ED9ng",slug:"hanh-dong"},{name:"T\xECnh c\u1EA3m",slug:"tinh-cam"},{name:"H\xE0i h\u01B0\u1EDBc",slug:"hai-huoc"},{name:"C\u1ED5 trang",slug:"co-trang"},{name:"T\xE2m l\xED",slug:"tam-li"},{name:"H\xECnh s\u1EF1",slug:"hinh-su"},{name:"Chi\u1EBFn tranh",slug:"chien-tranh"},{name:"Th\u1EC3 thao",slug:"the-thao"},{name:"V\xF5 thu\u1EADt",slug:"vo-thuat"},{name:"Vi\u1EC5n t\u01B0\u1EDFng",slug:"vien-tuong"},{name:"Phi\xEAu l\u01B0u",slug:"phieu-luu"},{name:"Khoa h\u1ECDc",slug:"khoa-hoc"},{name:"Kinh d\u1ECB",slug:"kinh-di"},{name:"\xC2m nh\u1EA1c",slug:"am-nhac"},{name:"Th\u1EA7n tho\u1EA1i",slug:"than-thoai"},{name:"T\xE0i li\u1EC7u",slug:"tai-lieu"},{name:"Gia \u0111\xECnh",slug:"gia-dinh"},{name:"Ch\xEDnh k\u1ECBch",slug:"chinh-kich"},{name:"B\xED \u1EA9n",slug:"bi-han"},{name:"H\u1ECDc \u0111\u01B0\u1EDDng",slug:"hoc-duong"},{name:"Kinh \u0111i\u1EC3n",slug:"kinh-dien"},{name:"Phim 18+",slug:"phim-18"}],p_=[{name:"Trung cu\u1ED1c",slug:"trung-quoc"},{name:"H\xE0n Qu\u1ED1c",slug:"han-quoc"},{name:"Nh\u1EADt B\u1EA3n",slug:"nhat-ban"},{name:"Th\xE1i Lan",slug:"th\xE1i lan"},{name:"\xC2u M\u1EF9",slug:"au-my"},{name:"\u0110\xE0i Loan",slug:"dai-loan"},{name:"H\u1ED3ng C\xF4ng",slug:"hong-khong"},{name:"\u1EA4n \u0110\u1ED9",slug:"an-do"},{name:"Anh",slug:"anh"},{name:"Ph\xE1p",slug:"phap"},{name:"Canada",slug:"canada"},{name:"\u0110\u1EE9c",slug:"duc"},{name:"T\xE2y Ba Nha",slug:"tay-ba-nha"},{name:"Th\u1ED5 Nh\u0129 K\u1EF3",slug:"tho-nhi-ky"},{name:"H\xE0 Lan",slug:"ha-lan"},{name:"Indonesia",slug:"indonesia"},{name:"Nga",slug:"nga"},{name:"Mexico",slug:"mexico"},{name:"Ba Lan",slug:"ba-lan"},{name:"\xDAc",slug:"uc"},{name:"Th\u1EE5y \u0110i\u1EC3n",slug:"thuy-dien"},{name:"Malaysia",slug:"malaysia"},{name:"Brazil",slug:"brazil"},{name:"Philippines",slug:"philippines"},{name:"B\u1ED3 \u0110\xE0o Nha",slug:"bo-dao-nha"},{name:"\xDD",slug:"y"},{name:"\u0110an M\u1EA1ch",slug:"dan-mach"},{name:"UAE",slug:"uae"},{name:"Na Uy",slug:"na-uy"},{name:"Th\u1EE5y S\u0129",slug:"thuy-si"},{name:"Ch\xE2u Phi",slug:"chau-phi"},{name:"Nam Phi",slug:"nam-phi"},{name:"Ukraina",slug:"ukraina"},{name:"\u1EA2 R\u1EADp X\xEA \xDAt",slug:"a-rap-xe-ut"}],_x=[{name:"Phim m\u1EDBi",slug:"phim-moi"},{name:"Phim s\u1EAFp chi\u1EBFu",slug:"phim-sap-chieu"},{name:"Phim b\u1ED9",slug:"phim-bo"},{name:"Phim l\u1EBB",slug:"phim-le"},{name:"Phim vietsub",slug:"phim-vietsub"},{name:"Phim thuy\u1EBFt minh",slug:"phim-thuyet-minh"},{name:"Phim l\u1ED3ng ti\u1EBFng",slug:"phim-long-tieng"},{name:"Phim b\u1ED9 \u0111ang chi\u1EBFu",slug:"phim-bo-dang-chieu"},{name:"Phim b\u1ED9 ho\xE0n th\xE0nh",slug:"phim-bo-hoan-thanh"},{name:"TV shows",slug:"tv-shows"},{name:"Anime",slug:"hoat-hinh"},{name:"Subteam",slug:"subteam"}],wx=[{name:"Phim m\u1EDBi nh\u1EA5t",slug:"_id"},{name:"Th\u1EDDi gian c\u1EADp nh\u1EADt",slug:"modified.time"},{name:"N\u0103m s\u1EA3n xu\u1EA5t",slug:"year"}],Ex=[{name:"2022",slug:"2022"},{name:"2021",slug:"2021"},{name:"2020",slug:"2020"},{name:"2019",slug:"2019"},{name:"2018",slug:"2018"},{name:"2017",slug:"2017"},{name:"2016",slug:"2016"},{name:"2015",slug:"2015"},{name:"2014",slug:"2014"},{name:"2013",slug:"2013"},{name:"2012",slug:"2012"},{name:"2011",slug:"2011"},{name:"2010",slug:"2010"}],tM={slug:_x,category:f_,country:p_,year:Ex,sortField:wx},m_=[{name:"TV",routeName:"List",path:"tv-series"},{name:"Phim l\u1EBB",routeName:"List",path:"movie"},{name:"Shows",routeName:"List",path:"tv-shows"},{name:"Anime",routeName:"List",path:"anime"},{name:"Th\u1EC3 lo\u1EA1i",routeName:"Category",path:"genres",isDropdown:!0,dropdownData:f_},{name:"Qu\u1ED1c gia",routeName:"Category",path:"countries",isDropdown:!0,dropdownData:p_}],ci=(t,e)=>t?e?e+"image?url="+t:new URL(t,KL.url).href:"",nM=(t,e)=>(t=t.toLowerCase().replace(/à|á|ạ|ả|ã|â|ầ|ấ|ậ|ẩ|ẫ|ă|ằ|ắ|ặ|ẳ|ẵ/g,"a").replace(/è|é|ẹ|ẻ|ẽ|ê|ề|ế|ệ|ể|ễ/g,"e").replace(/ì|í|ị|ỉ|ĩ/g,"i").replace(/ò|ó|ọ|ỏ|õ|ô|ồ|ố|ộ|ổ|ỗ|ơ|ờ|ớ|ợ|ở|ỡ/g,"o").replace(/ù|ú|ụ|ủ|ũ|ư|ừ|ứ|ự|ử|ữ/g,"u").replace(/ỳ|ý|ỵ|ỷ|ỹ/g,"y").replace(/đ/g,"d").replace(/\s+/g,"-").replace(/[^A-Za-z0-9_-]/g,"").replace(/-+/g,"-"),e?t.replace(/-/g,e):t),rM=t=>{switch(t){case"series":return"TV-Series";case"single":return"Movie";case"hoathinh":return"Anime";case"tvshows":return"TV-Shows";default:return"Movie"}},sM=t=>t.startsWith("<p>")?t.slice(3).slice(0,-4):t,iM=t=>{if(!t)return"00:00";let e=Math.floor(t/60/60),n=Math.floor(t/60%60),r=Math.floor(t%60);return e<10&&(e="0"+e),n<10&&(n="0"+n),r<10&&(r="0"+r),t>=3600?`${e}:${n}:${r}`:`${n}:${r}`},oM=t=>{const e=Math.floor((Date.now()-t)/1e3);let n=e/31536e3;return n>1?Math.floor(n)+" n\u0103m tr\u01B0\u1EDBc":(n=e/2592e3,n>1?Math.floor(n)+" th\xE1ng tr\u01B0\u1EDBc":(n=e/86400,n>1?Math.floor(n)+" ng\xE0y tr\u01B0\u1EDBc":(n=e/3600,n>1?Math.floor(n)+" gi\u1EDD tr\u01B0\u1EDBc":(n=e/60,n>1?Math.floor(n)+" ph\xFAt tr\u01B0\u1EDBc":e<10?"v\u1EEBa xong":Math.floor(e)+" gi\xE2y tr\u01B0\u1EDBc"))))},bx=t=>{let e=new Date(t),n=""+(e.getMonth()+1),r=""+e.getDate(),s=e.getFullYear();return n.length<2&&(n="0"+n),r.length<2&&(r="0"+r),`${r}/${n}/${s}`},aM=(t,e,n)=>{var r;return e?((r=Object.entries(t).find(s=>s[0]===e))==null?void 0:r[1])===n:!1},cM=(t,e)=>Object.values(t).filter(n=>n===e).length,lM=t=>JSON.stringify(t)==="{}"?{rating:"N/A",totalUserRating:0}:{rating:`${Object.values(t).reduce((e,n)=>e+n,0)/Object.values(t).length}/10`,totalUserRating:Object.values(t).length},uM=(t,e)=>{if(!e)return!1;const n=Object.keys(t);for(let r=0;r<n.length;r++)if(n[r]===e)return!0;return!1},hM=(t,e)=>{var n;return e?((n=Object.entries(t).find(r=>r[0]===e))==null?void 0:n[1])===1:!1},dM=t=>{switch(t){case"slug":return"Lo\u1EA1i phim";case"country":return"Qu\u1ED1c gia";case"sortField":return"S\u1EAFp x\u1EBFp theo";case"category":return"Th\u1EC3 lo\u1EA1i";case"year":return"N\u0103m ph\xE1t h\xE0nh";default:return""}},fM=t=>{for(const e in t)return!1;return!0},pM=(t,e)=>{const n=gc({},t);let r;for(r in t)r in e&&delete n[r];return n},Tx={class:"flex px-2 justify-between mt-2"},Ix=v("span",{class:"material-icons-outlined text-2xl md:text-[28px] hover:text-rem-color"}," west ",-1),Ax=[Ix],Sx={key:0,class:"relative"},Cx=v("span",{class:"material-icons"},"more_vert",-1),kx=[Cx],xx={key:0,class:"flex flex-col rounded overflow-hidden bg-rem-dark bs-lg absolute botton-4 right-0 h-fit w-36"},Rx=v("button",{class:"group px-3 gap-1 font-semibold py-2 flex items-center hover:text-rem-color hover:bg-rem-quiet-dark hover:bg-opacity-40"},[v("span",{class:"material-icons-outlined group-hover:text-rem-color"}," account_circle "),me(" T\xE0i Kho\u1EA3n ")],-1),Ox=v("button",{class:"group px-3 gap-1 font-semibold py-2 flex items-center hover:text-rem-color hover:bg-rem-quiet-dark hover:bg-opacity-40"},[v("span",{class:"material-icons-outlined group-hover:text-rem-color"}," notifications "),me(" Th\xF4ng b\xE1o ")],-1),Nx=v("span",{class:"material-icons-outlined group-hover:text-rem-color"}," history ",-1),Dx=me(" L\u1ECBch s\u1EED "),Px=v("button",{class:"group px-3 gap-1 font-semibold py-2 flex items-center hover:text-rem-color hover:bg-rem-quiet-dark hover:bg-opacity-40"},[v("span",{class:"material-icons-outlined group-hover:text-rem-color"}," settings "),me(" C\xE0i \u0111\u1EB7t ")],-1),Lx=v("span",{class:"material-icons-outlined group-hover:text-rem-color"}," logout ",-1),Mx=me(" \u0110\u0103ng xu\u1EA5t "),Ux=[Lx,Mx],$x={key:0,class:"flex gap-2 items-center w-full justify-center"},Fx={class:"flex items-center w-16 h-16 justify-center rounded-full overflow-hidden"},Bx=["src"],Vx={class:"flex flex-col"},jx={class:"font-semibold text-2xl"},qx={class:"leading-4 text-rem cursor-pointer"},Hx={class:"leading-4"},zx=me(" Tham giao v\xE0o: "),Kx={class:"font-light"},Gx={class:"flex flex-col w-full p-1 mt-4"},Wx={class:"flex w-full items-center p-2 hover:text-rem-color font-medium"},Qx=v("span",{class:"material-icons-outlined"},"arrow_drop_down",-1),Xx={class:"grid grid-cols-[1fr_1fr] px-1 w-full h-0 overflow-hidden bg-rem-dark"},Yx=et({props:{isOpen:{type:Boolean},user:null},emits:["close","sign-out"],setup(t){const e=le(!1);return(n,r)=>{const s=Ir("router-link"),i=Ln("rem-click-away"),o=Ln("rem-mb-dropdown");return D(),M(de,null,[v("div",{class:"min-scroll flex flex-col w-full mb:w-[380px] h-full p-2 fixed z-50 overflow-auto bg-rem-quiet-dark transition-all duration-300",style:Tr([t.isOpen?{left:"0%"}:{left:"-100%"}])},[v("div",Tx,[v("button",{class:"ml-4 self-start",onClick:r[0]||(r[0]=a=>n.$emit("close"))},Ax),t.user?Nt((D(),M("div",Sx,[v("button",{class:"cursor-pointer",onClick:r[1]||(r[1]=()=>e.value=!0)},kx),e.value?(D(),M("div",xx,[Rx,Ox,te(s,{class:"group px-3 gap-1 font-semibold py-2 flex items-center hover:text-rem-color hover:bg-rem-quiet-dark hover:bg-opacity-40",onClick:r[2]||(r[2]=a=>n.$emit("close")),to:"/history"},{default:ht(()=>[Nx,Dx]),_:1}),Px,v("button",{class:"group px-3 gap-1 font-semibold py-2 flex items-center hover:text-rem-color hover:bg-rem-quiet-dark hover:bg-opacity-40",onClick:r[3]||(r[3]=a=>n.$emit("sign-out"))},Ux)])):Re("",!0)])),[[i,()=>e.value=!1]]):Re("",!0)]),t.user?(D(),M("div",$x,[v("div",Fx,[v("img",{class:"w-full",referrerpolicy:"no-referrer",src:t.user.photoURL},null,8,Bx)]),v("div",Vx,[v("h2",jx,pe(t.user.displayName),1),v("span",qx,pe(t.user.email),1),v("div",Hx,[zx,v("span",Kx,pe(Ae(bx)(t.user.createdAt)),1)])])])):Re("",!0),v("ul",Gx,[(D(!0),M(de,null,Ct(Ae(m_),a=>(D(),M("li",{class:"w-full border-b last:border-0",key:a.path},[a.isDropdown?(D(),M(de,{key:1},[Nt((D(),M("button",Wx,[me(pe(a.name)+" ",1),Qx])),[[o]]),v("ul",Xx,[(D(!0),M(de,null,Ct(a.dropdownData,c=>(D(),M("li",{key:c.slug},[te(s,{class:"flex items-center justify-center py-[6px] hover:bg-zinc-700 hover:bg-opacity-80 w-full h-full hover:text-rem-color",to:{name:a.routeName,params:{path:a.path,slug:c.slug}},onClick:r[5]||(r[5]=l=>n.$emit("close"))},{default:ht(()=>[me(pe(c.name),1)]),_:2},1032,["to"])]))),128))])],64)):(D(),Wt(s,{key:0,class:"flex w-full items-center p-2 hover:text-rem-color",to:{name:a.routeName,params:{slug:a.path}},onClick:r[4]||(r[4]=c=>n.$emit("close"))},{default:ht(()=>[me(pe(a.name),1)]),_:2},1032,["to"]))]))),128))])],4),t.isOpen?(D(),M("div",{key:0,class:"fixed z-40 top-0 left-0 bottom-0 right-0 bg-rem-so-dark bg-opacity-60",onClick:r[6]||(r[6]=a=>n.$emit("close"))})):Re("",!0)],64)}}});var Hh={exports:{}},g_=function(e,n){return function(){for(var s=new Array(arguments.length),i=0;i<s.length;i++)s[i]=arguments[i];return e.apply(n,s)}},Jx=g_,zh=Object.prototype.toString,Kh=function(t){return function(e){var n=zh.call(e);return t[n]||(t[n]=n.slice(8,-1).toLowerCase())}}(Object.create(null));function xr(t){return t=t.toLowerCase(),function(n){return Kh(n)===t}}function Gh(t){return Array.isArray(t)}function ha(t){return typeof t=="undefined"}function Zx(t){return t!==null&&!ha(t)&&t.constructor!==null&&!ha(t.constructor)&&typeof t.constructor.isBuffer=="function"&&t.constructor.isBuffer(t)}var y_=xr("ArrayBuffer");function eR(t){var e;return typeof ArrayBuffer!="undefined"&&ArrayBuffer.isView?e=ArrayBuffer.isView(t):e=t&&t.buffer&&y_(t.buffer),e}function tR(t){return typeof t=="string"}function nR(t){return typeof t=="number"}function v_(t){return t!==null&&typeof t=="object"}function No(t){if(Kh(t)!=="object")return!1;var e=Object.getPrototypeOf(t);return e===null||e===Object.prototype}var rR=xr("Date"),sR=xr("File"),iR=xr("Blob"),oR=xr("FileList");function Wh(t){return zh.call(t)==="[object Function]"}function aR(t){return v_(t)&&Wh(t.pipe)}function cR(t){var e="[object FormData]";return t&&(typeof FormData=="function"&&t instanceof FormData||zh.call(t)===e||Wh(t.toString)&&t.toString()===e)}var lR=xr("URLSearchParams");function uR(t){return t.trim?t.trim():t.replace(/^\s+|\s+$/g,"")}function hR(){return typeof navigator!="undefined"&&(navigator.product==="ReactNative"||navigator.product==="NativeScript"||navigator.product==="NS")?!1:typeof window!="undefined"&&typeof document!="undefined"}function Qh(t,e){if(!(t===null||typeof t=="undefined"))if(typeof t!="object"&&(t=[t]),Gh(t))for(var n=0,r=t.length;n<r;n++)e.call(null,t[n],n,t);else for(var s in t)Object.prototype.hasOwnProperty.call(t,s)&&e.call(null,t[s],s,t)}function Xl(){var t={};function e(s,i){No(t[i])&&No(s)?t[i]=Xl(t[i],s):No(s)?t[i]=Xl({},s):Gh(s)?t[i]=s.slice():t[i]=s}for(var n=0,r=arguments.length;n<r;n++)Qh(arguments[n],e);return t}function dR(t,e,n){return Qh(e,function(s,i){n&&typeof s=="function"?t[i]=Jx(s,n):t[i]=s}),t}function fR(t){return t.charCodeAt(0)===65279&&(t=t.slice(1)),t}function pR(t,e,n,r){t.prototype=Object.create(e.prototype,r),t.prototype.constructor=t,n&&Object.assign(t.prototype,n)}function mR(t,e,n){var r,s,i,o={};e=e||{};do{for(r=Object.getOwnPropertyNames(t),s=r.length;s-- >0;)i=r[s],o[i]||(e[i]=t[i],o[i]=!0);t=Object.getPrototypeOf(t)}while(t&&(!n||n(t,e))&&t!==Object.prototype);return e}function gR(t,e,n){t=String(t),(n===void 0||n>t.length)&&(n=t.length),n-=e.length;var r=t.indexOf(e,n);return r!==-1&&r===n}function yR(t){if(!t)return null;var e=t.length;if(ha(e))return null;for(var n=new Array(e);e-- >0;)n[e]=t[e];return n}var vR=function(t){return function(e){return t&&e instanceof t}}(typeof Uint8Array!="undefined"&&Object.getPrototypeOf(Uint8Array)),nt={isArray:Gh,isArrayBuffer:y_,isBuffer:Zx,isFormData:cR,isArrayBufferView:eR,isString:tR,isNumber:nR,isObject:v_,isPlainObject:No,isUndefined:ha,isDate:rR,isFile:sR,isBlob:iR,isFunction:Wh,isStream:aR,isURLSearchParams:lR,isStandardBrowserEnv:hR,forEach:Qh,merge:Xl,extend:dR,trim:uR,stripBOM:fR,inherits:pR,toFlatObject:mR,kindOf:Kh,kindOfTest:xr,endsWith:gR,toArray:yR,isTypedArray:vR,isFileList:oR},Fr=nt;function Sp(t){return encodeURIComponent(t).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}var __=function(e,n,r){if(!n)return e;var s;if(r)s=r(n);else if(Fr.isURLSearchParams(n))s=n.toString();else{var i=[];Fr.forEach(n,function(c,l){c===null||typeof c=="undefined"||(Fr.isArray(c)?l=l+"[]":c=[c],Fr.forEach(c,function(h){Fr.isDate(h)?h=h.toISOString():Fr.isObject(h)&&(h=JSON.stringify(h)),i.push(Sp(l)+"="+Sp(h))}))}),s=i.join("&")}if(s){var o=e.indexOf("#");o!==-1&&(e=e.slice(0,o)),e+=(e.indexOf("?")===-1?"?":"&")+s}return e},_R=nt;function lc(){this.handlers=[]}lc.prototype.use=function(e,n,r){return this.handlers.push({fulfilled:e,rejected:n,synchronous:r?r.synchronous:!1,runWhen:r?r.runWhen:null}),this.handlers.length-1};lc.prototype.eject=function(e){this.handlers[e]&&(this.handlers[e]=null)};lc.prototype.forEach=function(e){_R.forEach(this.handlers,function(r){r!==null&&e(r)})};var wR=lc,ER=nt,bR=function(e,n){ER.forEach(e,function(s,i){i!==n&&i.toUpperCase()===n.toUpperCase()&&(e[n]=s,delete e[i])})},w_=nt;function vs(t,e,n,r,s){Error.call(this),this.message=t,this.name="AxiosError",e&&(this.code=e),n&&(this.config=n),r&&(this.request=r),s&&(this.response=s)}w_.inherits(vs,Error,{toJSON:function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:this.config,code:this.code,status:this.response&&this.response.status?this.response.status:null}}});var E_=vs.prototype,b_={};["ERR_BAD_OPTION_VALUE","ERR_BAD_OPTION","ECONNABORTED","ETIMEDOUT","ERR_NETWORK","ERR_FR_TOO_MANY_REDIRECTS","ERR_DEPRECATED","ERR_BAD_RESPONSE","ERR_BAD_REQUEST","ERR_CANCELED"].forEach(function(t){b_[t]={value:t}});Object.defineProperties(vs,b_);Object.defineProperty(E_,"isAxiosError",{value:!0});vs.from=function(t,e,n,r,s,i){var o=Object.create(E_);return w_.toFlatObject(t,o,function(c){return c!==Error.prototype}),vs.call(o,t.message,e,n,r,s),o.name=t.name,i&&Object.assign(o,i),o};var Us=vs,T_={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1},Lt=nt;function TR(t,e){e=e||new FormData;var n=[];function r(i){return i===null?"":Lt.isDate(i)?i.toISOString():Lt.isArrayBuffer(i)||Lt.isTypedArray(i)?typeof Blob=="function"?new Blob([i]):Buffer.from(i):i}function s(i,o){if(Lt.isPlainObject(i)||Lt.isArray(i)){if(n.indexOf(i)!==-1)throw Error("Circular reference detected in "+o);n.push(i),Lt.forEach(i,function(c,l){if(!Lt.isUndefined(c)){var u=o?o+"."+l:l,h;if(c&&!o&&typeof c=="object"){if(Lt.endsWith(l,"{}"))c=JSON.stringify(c);else if(Lt.endsWith(l,"[]")&&(h=Lt.toArray(c))){h.forEach(function(d){!Lt.isUndefined(d)&&e.append(u,r(d))});return}}s(c,u)}}),n.pop()}else e.append(o,r(i))}return s(t),e}var I_=TR,Hc=Us,IR=function(e,n,r){var s=r.config.validateStatus;!r.status||!s||s(r.status)?e(r):n(new Hc("Request failed with status code "+r.status,[Hc.ERR_BAD_REQUEST,Hc.ERR_BAD_RESPONSE][Math.floor(r.status/100)-4],r.config,r.request,r))},go=nt,AR=go.isStandardBrowserEnv()?function(){return{write:function(n,r,s,i,o,a){var c=[];c.push(n+"="+encodeURIComponent(r)),go.isNumber(s)&&c.push("expires="+new Date(s).toGMTString()),go.isString(i)&&c.push("path="+i),go.isString(o)&&c.push("domain="+o),a===!0&&c.push("secure"),document.cookie=c.join("; ")},read:function(n){var r=document.cookie.match(new RegExp("(^|;\\s*)("+n+")=([^;]*)"));return r?decodeURIComponent(r[3]):null},remove:function(n){this.write(n,"",Date.now()-864e5)}}}():function(){return{write:function(){},read:function(){return null},remove:function(){}}}(),SR=function(e){return/^([a-z][a-z\d+\-.]*:)?\/\//i.test(e)},CR=function(e,n){return n?e.replace(/\/+$/,"")+"/"+n.replace(/^\/+/,""):e},kR=SR,xR=CR,A_=function(e,n){return e&&!kR(n)?xR(e,n):n},zc=nt,RR=["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"],OR=function(e){var n={},r,s,i;return e&&zc.forEach(e.split(`
`),function(a){if(i=a.indexOf(":"),r=zc.trim(a.substr(0,i)).toLowerCase(),s=zc.trim(a.substr(i+1)),r){if(n[r]&&RR.indexOf(r)>=0)return;r==="set-cookie"?n[r]=(n[r]?n[r]:[]).concat([s]):n[r]=n[r]?n[r]+", "+s:s}}),n},Cp=nt,NR=Cp.isStandardBrowserEnv()?function(){var e=/(msie|trident)/i.test(navigator.userAgent),n=document.createElement("a"),r;function s(i){var o=i;return e&&(n.setAttribute("href",o),o=n.href),n.setAttribute("href",o),{href:n.href,protocol:n.protocol?n.protocol.replace(/:$/,""):"",host:n.host,search:n.search?n.search.replace(/^\?/,""):"",hash:n.hash?n.hash.replace(/^#/,""):"",hostname:n.hostname,port:n.port,pathname:n.pathname.charAt(0)==="/"?n.pathname:"/"+n.pathname}}return r=s(window.location.href),function(o){var a=Cp.isString(o)?s(o):o;return a.protocol===r.protocol&&a.host===r.host}}():function(){return function(){return!0}}(),Yl=Us,DR=nt;function S_(t){Yl.call(this,t==null?"canceled":t,Yl.ERR_CANCELED),this.name="CanceledError"}DR.inherits(S_,Yl,{__CANCEL__:!0});var uc=S_,PR=function(e){var n=/^([-+\w]{1,25})(:?\/\/|:)/.exec(e);return n&&n[1]||""},Hs=nt,LR=IR,MR=AR,UR=__,$R=A_,FR=OR,BR=NR,VR=T_,cn=Us,jR=uc,qR=PR,kp=function(e){return new Promise(function(r,s){var i=e.data,o=e.headers,a=e.responseType,c;function l(){e.cancelToken&&e.cancelToken.unsubscribe(c),e.signal&&e.signal.removeEventListener("abort",c)}Hs.isFormData(i)&&Hs.isStandardBrowserEnv()&&delete o["Content-Type"];var u=new XMLHttpRequest;if(e.auth){var h=e.auth.username||"",d=e.auth.password?unescape(encodeURIComponent(e.auth.password)):"";o.Authorization="Basic "+btoa(h+":"+d)}var f=$R(e.baseURL,e.url);u.open(e.method.toUpperCase(),UR(f,e.params,e.paramsSerializer),!0),u.timeout=e.timeout;function m(){if(!!u){var y="getAllResponseHeaders"in u?FR(u.getAllResponseHeaders()):null,C=!a||a==="text"||a==="json"?u.responseText:u.response,L={data:C,status:u.status,statusText:u.statusText,headers:y,config:e,request:u};LR(function(re){r(re),l()},function(re){s(re),l()},L),u=null}}if("onloadend"in u?u.onloadend=m:u.onreadystatechange=function(){!u||u.readyState!==4||u.status===0&&!(u.responseURL&&u.responseURL.indexOf("file:")===0)||setTimeout(m)},u.onabort=function(){!u||(s(new cn("Request aborted",cn.ECONNABORTED,e,u)),u=null)},u.onerror=function(){s(new cn("Network Error",cn.ERR_NETWORK,e,u,u)),u=null},u.ontimeout=function(){var C=e.timeout?"timeout of "+e.timeout+"ms exceeded":"timeout exceeded",L=e.transitional||VR;e.timeoutErrorMessage&&(C=e.timeoutErrorMessage),s(new cn(C,L.clarifyTimeoutError?cn.ETIMEDOUT:cn.ECONNABORTED,e,u)),u=null},Hs.isStandardBrowserEnv()){var E=(e.withCredentials||BR(f))&&e.xsrfCookieName?MR.read(e.xsrfCookieName):void 0;E&&(o[e.xsrfHeaderName]=E)}"setRequestHeader"in u&&Hs.forEach(o,function(C,L){typeof i=="undefined"&&L.toLowerCase()==="content-type"?delete o[L]:u.setRequestHeader(L,C)}),Hs.isUndefined(e.withCredentials)||(u.withCredentials=!!e.withCredentials),a&&a!=="json"&&(u.responseType=e.responseType),typeof e.onDownloadProgress=="function"&&u.addEventListener("progress",e.onDownloadProgress),typeof e.onUploadProgress=="function"&&u.upload&&u.upload.addEventListener("progress",e.onUploadProgress),(e.cancelToken||e.signal)&&(c=function(y){!u||(s(!y||y&&y.type?new jR:y),u.abort(),u=null)},e.cancelToken&&e.cancelToken.subscribe(c),e.signal&&(e.signal.aborted?c():e.signal.addEventListener("abort",c))),i||(i=null);var _=qR(f);if(_&&["http","https","file"].indexOf(_)===-1){s(new cn("Unsupported protocol "+_+":",cn.ERR_BAD_REQUEST,e));return}u.send(i)})},HR=null,Be=nt,xp=bR,Rp=Us,zR=T_,KR=I_,GR={"Content-Type":"application/x-www-form-urlencoded"};function Op(t,e){!Be.isUndefined(t)&&Be.isUndefined(t["Content-Type"])&&(t["Content-Type"]=e)}function WR(){var t;return(typeof XMLHttpRequest!="undefined"||typeof process!="undefined"&&Object.prototype.toString.call(process)==="[object process]")&&(t=kp),t}function QR(t,e,n){if(Be.isString(t))try{return(e||JSON.parse)(t),Be.trim(t)}catch(r){if(r.name!=="SyntaxError")throw r}return(n||JSON.stringify)(t)}var hc={transitional:zR,adapter:WR(),transformRequest:[function(e,n){if(xp(n,"Accept"),xp(n,"Content-Type"),Be.isFormData(e)||Be.isArrayBuffer(e)||Be.isBuffer(e)||Be.isStream(e)||Be.isFile(e)||Be.isBlob(e))return e;if(Be.isArrayBufferView(e))return e.buffer;if(Be.isURLSearchParams(e))return Op(n,"application/x-www-form-urlencoded;charset=utf-8"),e.toString();var r=Be.isObject(e),s=n&&n["Content-Type"],i;if((i=Be.isFileList(e))||r&&s==="multipart/form-data"){var o=this.env&&this.env.FormData;return KR(i?{"files[]":e}:e,o&&new o)}else if(r||s==="application/json")return Op(n,"application/json"),QR(e);return e}],transformResponse:[function(e){var n=this.transitional||hc.transitional,r=n&&n.silentJSONParsing,s=n&&n.forcedJSONParsing,i=!r&&this.responseType==="json";if(i||s&&Be.isString(e)&&e.length)try{return JSON.parse(e)}catch(o){if(i)throw o.name==="SyntaxError"?Rp.from(o,Rp.ERR_BAD_RESPONSE,this,null,this.response):o}return e}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:HR},validateStatus:function(e){return e>=200&&e<300},headers:{common:{Accept:"application/json, text/plain, */*"}}};Be.forEach(["delete","get","head"],function(e){hc.headers[e]={}});Be.forEach(["post","put","patch"],function(e){hc.headers[e]=Be.merge(GR)});var Xh=hc,XR=nt,YR=Xh,JR=function(e,n,r){var s=this||YR;return XR.forEach(r,function(o){e=o.call(s,e,n)}),e},C_=function(e){return!!(e&&e.__CANCEL__)},Np=nt,Kc=JR,ZR=C_,eO=Xh,tO=uc;function Gc(t){if(t.cancelToken&&t.cancelToken.throwIfRequested(),t.signal&&t.signal.aborted)throw new tO}var nO=function(e){Gc(e),e.headers=e.headers||{},e.data=Kc.call(e,e.data,e.headers,e.transformRequest),e.headers=Np.merge(e.headers.common||{},e.headers[e.method]||{},e.headers),Np.forEach(["delete","get","head","post","put","patch","common"],function(s){delete e.headers[s]});var n=e.adapter||eO.adapter;return n(e).then(function(s){return Gc(e),s.data=Kc.call(e,s.data,s.headers,e.transformResponse),s},function(s){return ZR(s)||(Gc(e),s&&s.response&&(s.response.data=Kc.call(e,s.response.data,s.response.headers,e.transformResponse))),Promise.reject(s)})},It=nt,k_=function(e,n){n=n||{};var r={};function s(u,h){return It.isPlainObject(u)&&It.isPlainObject(h)?It.merge(u,h):It.isPlainObject(h)?It.merge({},h):It.isArray(h)?h.slice():h}function i(u){if(It.isUndefined(n[u])){if(!It.isUndefined(e[u]))return s(void 0,e[u])}else return s(e[u],n[u])}function o(u){if(!It.isUndefined(n[u]))return s(void 0,n[u])}function a(u){if(It.isUndefined(n[u])){if(!It.isUndefined(e[u]))return s(void 0,e[u])}else return s(void 0,n[u])}function c(u){if(u in n)return s(e[u],n[u]);if(u in e)return s(void 0,e[u])}var l={url:o,method:o,data:o,baseURL:a,transformRequest:a,transformResponse:a,paramsSerializer:a,timeout:a,timeoutMessage:a,withCredentials:a,adapter:a,responseType:a,xsrfCookieName:a,xsrfHeaderName:a,onUploadProgress:a,onDownloadProgress:a,decompress:a,maxContentLength:a,maxBodyLength:a,beforeRedirect:a,transport:a,httpAgent:a,httpsAgent:a,cancelToken:a,socketPath:a,responseEncoding:a,validateStatus:c};return It.forEach(Object.keys(e).concat(Object.keys(n)),function(h){var d=l[h]||i,f=d(h);It.isUndefined(f)&&d!==c||(r[h]=f)}),r},x_={version:"0.27.2"},rO=x_.version,xn=Us,Yh={};["object","boolean","number","function","string","symbol"].forEach(function(t,e){Yh[t]=function(r){return typeof r===t||"a"+(e<1?"n ":" ")+t}});var Dp={};Yh.transitional=function(e,n,r){function s(i,o){return"[Axios v"+rO+"] Transitional option '"+i+"'"+o+(r?". "+r:"")}return function(i,o,a){if(e===!1)throw new xn(s(o," has been removed"+(n?" in "+n:"")),xn.ERR_DEPRECATED);return n&&!Dp[o]&&(Dp[o]=!0,console.warn(s(o," has been deprecated since v"+n+" and will be removed in the near future"))),e?e(i,o,a):!0}};function sO(t,e,n){if(typeof t!="object")throw new xn("options must be an object",xn.ERR_BAD_OPTION_VALUE);for(var r=Object.keys(t),s=r.length;s-- >0;){var i=r[s],o=e[i];if(o){var a=t[i],c=a===void 0||o(a,i,t);if(c!==!0)throw new xn("option "+i+" must be "+c,xn.ERR_BAD_OPTION_VALUE);continue}if(n!==!0)throw new xn("Unknown option "+i,xn.ERR_BAD_OPTION)}}var iO={assertOptions:sO,validators:Yh},R_=nt,oO=__,Pp=wR,Lp=nO,dc=k_,aO=A_,O_=iO,Br=O_.validators;function _s(t){this.defaults=t,this.interceptors={request:new Pp,response:new Pp}}_s.prototype.request=function(e,n){typeof e=="string"?(n=n||{},n.url=e):n=e||{},n=dc(this.defaults,n),n.method?n.method=n.method.toLowerCase():this.defaults.method?n.method=this.defaults.method.toLowerCase():n.method="get";var r=n.transitional;r!==void 0&&O_.assertOptions(r,{silentJSONParsing:Br.transitional(Br.boolean),forcedJSONParsing:Br.transitional(Br.boolean),clarifyTimeoutError:Br.transitional(Br.boolean)},!1);var s=[],i=!0;this.interceptors.request.forEach(function(f){typeof f.runWhen=="function"&&f.runWhen(n)===!1||(i=i&&f.synchronous,s.unshift(f.fulfilled,f.rejected))});var o=[];this.interceptors.response.forEach(function(f){o.push(f.fulfilled,f.rejected)});var a;if(!i){var c=[Lp,void 0];for(Array.prototype.unshift.apply(c,s),c=c.concat(o),a=Promise.resolve(n);c.length;)a=a.then(c.shift(),c.shift());return a}for(var l=n;s.length;){var u=s.shift(),h=s.shift();try{l=u(l)}catch(d){h(d);break}}try{a=Lp(l)}catch(d){return Promise.reject(d)}for(;o.length;)a=a.then(o.shift(),o.shift());return a};_s.prototype.getUri=function(e){e=dc(this.defaults,e);var n=aO(e.baseURL,e.url);return oO(n,e.params,e.paramsSerializer)};R_.forEach(["delete","get","head","options"],function(e){_s.prototype[e]=function(n,r){return this.request(dc(r||{},{method:e,url:n,data:(r||{}).data}))}});R_.forEach(["post","put","patch"],function(e){function n(r){return function(i,o,a){return this.request(dc(a||{},{method:e,headers:r?{"Content-Type":"multipart/form-data"}:{},url:i,data:o}))}}_s.prototype[e]=n(),_s.prototype[e+"Form"]=n(!0)});var cO=_s,lO=uc;function ws(t){if(typeof t!="function")throw new TypeError("executor must be a function.");var e;this.promise=new Promise(function(s){e=s});var n=this;this.promise.then(function(r){if(!!n._listeners){var s,i=n._listeners.length;for(s=0;s<i;s++)n._listeners[s](r);n._listeners=null}}),this.promise.then=function(r){var s,i=new Promise(function(o){n.subscribe(o),s=o}).then(r);return i.cancel=function(){n.unsubscribe(s)},i},t(function(s){n.reason||(n.reason=new lO(s),e(n.reason))})}ws.prototype.throwIfRequested=function(){if(this.reason)throw this.reason};ws.prototype.subscribe=function(e){if(this.reason){e(this.reason);return}this._listeners?this._listeners.push(e):this._listeners=[e]};ws.prototype.unsubscribe=function(e){if(!!this._listeners){var n=this._listeners.indexOf(e);n!==-1&&this._listeners.splice(n,1)}};ws.source=function(){var e,n=new ws(function(s){e=s});return{token:n,cancel:e}};var uO=ws,hO=function(e){return function(r){return e.apply(null,r)}},dO=nt,fO=function(e){return dO.isObject(e)&&e.isAxiosError===!0},Mp=nt,pO=g_,Do=cO,mO=k_,gO=Xh;function N_(t){var e=new Do(t),n=pO(Do.prototype.request,e);return Mp.extend(n,Do.prototype,e),Mp.extend(n,e),n.create=function(s){return N_(mO(t,s))},n}var wt=N_(gO);wt.Axios=Do;wt.CanceledError=uc;wt.CancelToken=uO;wt.isCancel=C_;wt.VERSION=x_.version;wt.toFormData=I_;wt.AxiosError=Us;wt.Cancel=wt.CanceledError;wt.all=function(e){return Promise.all(e)};wt.spread=hO;wt.isAxiosError=fO;Hh.exports=wt;Hh.exports.default=wt;var yO=Hh.exports;const fc=yO.create({baseURL:is}),D_=async(t="phim-moi",e={})=>{const{data:n}=await fc.get("list/"+t,{params:e});return n},mM=async(t,e,n=1)=>{t=t==="genres"?"the-loai":"quoc-gia";const{data:r}=await fc.get("data/"+t+"/"+e,{params:{page:n}});return r},gM=async t=>{const{data:e}=await fc.get(`film/${t}`);return e},vO=async(t,e=1)=>{const{data:n}=await fc.get("search",{params:{q:t,page:e}});return n},_O={class:"flex justify-between mt-2"},wO=v("span",{class:"material-icons-outlined text-2xl md:text-[28px] hover:text-rem-color"}," west ",-1),EO=[wO],bO=me(" B\u1ED9 l\u1ECDc "),TO=v("span",{class:"material-icons-outlined text-2xl md:text-[28px] group-hover:text-rem-color"}," filter_alt ",-1),IO=[bO,TO],AO={class:"flex justify-center"},SO=["src"],CO=["onSubmit"],kO={class:"relative"},xO=v("span",{class:"material-icons-outlined translate-y-[1px] text-[13px] leading-none font-light bg-rem-color bg-opacity-25 z-10 rounded-full"}," close ",-1),RO=[xO],OO=v("span",{class:"border-bottom"},null,-1),NO=v("button",null,[v("span",{class:"material-icons-outlined"},"search")],-1),DO={key:0,class:"flex flex-col mt-2"},PO={key:0,class:"flex justify-between gap-1 items-center px-2 mt-4"},LO={class:"text-lg font-semibold leading-normal"},MO=me(" K\u1EBFt qu\u1EA3 c\u1EE7a: "),UO={class:"text-rem-color"},$O={key:1,class:"flex flex-col mt-3"},FO={class:"w-24 object-cover"},BO={class:"flex flex-col flex-wrap p-1"},VO={class:"text-lg hover:text-rem-color leading-tight font-semibold break-line-2"},jO={class:"text-rem break-line-2"},qO={class:"flex flex-wrap"},HO=v("div",{class:"flex w-full justify-center"},[v("span",{class:"material-icons-outlined text-red-500 text-5xl leading-none"}," cancel ")],-1),zO={class:"text-lg font-semibold"},KO=me(" Kh\xF4ng t\xECm th\u1EA5y k\u1EBFt qu\u1EA3 li\xEAn quan \u0111\u1EBFn "),GO={class:"text text-rem-color"},WO=me(" ! "),QO={key:1,class:"min-scroll flex flex-col mt-2"},XO=wu('<div class="skt-item w-16 h-24 rounded-md"></div><div class="flex w-full flex-col gap-3 flex-[1]"><div class="skt-item rounded-md w-3/4 h-5"></div><div class="skt-item rounded-md w-2/3 h-5"></div><div class="flex gap-4"><div class="skt-item rounded-md w-20 h-5"></div><div class="skt-item rounded-md w-20 h-5"></div></div></div>',2),YO=[XO],JO=et({props:{isOpen:{type:Boolean}},emits:["close"],setup(t,{emit:e}){const n=qh(),r=le(""),s=le(!1),i=le(!1),o=le(!1),a=le(),c=le([]),l=le(null),u=()=>{r.value.trim().length<1||(s.value=!0,o.value=!1,l.value&&clearTimeout(l.value),l.value=setTimeout(()=>{vO(encodeURIComponent(r.value)).then(f=>{if(!f.items.length){o.value=!0;return}c.value=f.items,f.pagination.totalItems/24>24?a.value=!0:a.value=!1}).catch(f=>{console.log(f)}).finally(()=>s.value=!1)},1e3))},h=()=>{r.value="",c.value=[]},d=()=>{n.push({path:"/search",query:{q:r.value}}),e("close")};return(f,m)=>{const E=Ir("router-link"),_=Ln("lazy");return D(),M(de,null,[v("div",{class:"min-scroll flex flex-col w-full mb:w-[380px] h-full p-1 fixed z-50 overflow-auto bg-rem-quiet-dark transition-all duration-300",style:Tr([t.isOpen?{left:"0%"}:{left:"-100%"}])},[v("div",_O,[v("button",{class:"ml-4",onClick:m[0]||(m[0]=y=>f.$emit("close"))},EO),v("button",{class:"group mr-4 flex items-center hover:text-rem-color",onClick:d},IO)]),v("div",AO,[v("img",{class:"w-28",src:"/rem-logo.png",alt:"rem logo"},null,8,SO)]),v("form",{class:"flex items-center justify-center w-full",onSubmit:Xm(d,["prevent"])},[v("div",kO,[Nt(v("input",{class:"outline-0 bg-transparent py-1 px-2 border-0 border-b border-gray-500",type:"text",autocomplete:"off",id:"search-input",placeholder:"Nh\u1EADp t\u1EEB kh\xF3a...",name:"search","onUpdate:modelValue":m[1]||(m[1]=y=>r.value=y),onInput:u},null,544),[[Qm,r.value,void 0,{trim:!0}]]),r.value.length?(D(),M("button",{key:0,class:"absolute right-2 top-2",onClick:h},RO)):Re("",!0),OO]),NO],40,CO),s.value?(D(),M("ul",QO,[(D(),M(de,null,Ct(8,y=>v("li",{class:"flex gap-2 p-1",key:y},YO)),64))])):(D(),M("div",DO,[!i.value&&!!r.value.length?(D(),M("div",PO,[v("h3",LO,[MO,v("span",UO,'"'+pe(r.value)+'"',1)]),a.value?(D(),M("button",{key:0,class:"flex w-[105px] hover:text-rem hover:last:text-rem",onClick:m[2]||(m[2]=y=>f.$emit("close"))}," Xem t\u1EA5t c\u1EA3 >> ")):Re("",!0)])):Re("",!0),o.value?r.value.length?(D(),M(de,{key:2},[HO,v("h3",zO,[KO,v("span",GO,'"'+pe(r.value)+'"',1),WO])],64)):Re("",!0):(D(),M("ul",$O,[c.value.length?(D(!0),M(de,{key:0},Ct(c.value,y=>(D(),M("li",{class:"border-b border-gray-500 last:border-0",onClick:m[3]||(m[3]=C=>f.$emit("close")),key:y._id},[te(E,{class:"flex gap-1 py-2 px-1",to:{name:"Watch",params:{slug:y.slug}}},{default:ht(()=>[Nt(v("img",FO,null,512),[[_,Ae(ci)(y.thumb_url,Ae(is))]]),v("div",BO,[v("h3",VO,pe(y.name+" - "+y.year),1),v("h4",jO,pe(y.origin_name),1),v("div",qO,[(D(!0),M(de,null,Ct(y.category,C=>(D(),Wt(E,{class:"px-2 m-1 text-sm border border-gray-300 text-gray-300 rounded-full hover:bg-rem-so-dark hover:bg-opacity-30",key:C.id,to:{name:"Category",params:{path:"genres",slug:C.slug}}},{default:ht(()=>[me(pe(C.name),1)]),_:2},1032,["to"]))),128))])])]),_:2},1032,["to"])]))),128)):Re("",!0)]))]))],4),t.isOpen?(D(),M("div",{key:0,class:"fixed z-40 top-0 left-0 bottom-0 right-0 bg-rem-so-dark bg-opacity-60",onClick:m[4]||(m[4]=y=>f.$emit("close"))})):Re("",!0)],64)}}});var ZO="firebase",eN="9.8.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Yt(ZO,eN,"app");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const P_="firebasestorage.googleapis.com",L_="storageBucket",tN=2*60*1e3,nN=10*60*1e3;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Oe extends Kn{constructor(e,n){super(Wc(e),`Firebase Storage: ${n} (${Wc(e)})`),this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,Oe.prototype)}_codeEquals(e){return Wc(e)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(e){this.customData.serverResponse=e,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}function Wc(t){return"storage/"+t}function Jh(){const t="An unknown error occurred, please check the error payload for server response.";return new Oe("unknown",t)}function rN(t){return new Oe("object-not-found","Object '"+t+"' does not exist.")}function sN(t){return new Oe("quota-exceeded","Quota for bucket '"+t+"' exceeded, please view quota on https://firebase.google.com/pricing/.")}function iN(){const t="User is not authenticated, please authenticate using Firebase Authentication and try again.";return new Oe("unauthenticated",t)}function oN(){return new Oe("unauthorized-app","This app does not have permission to access Firebase Storage on this project.")}function aN(t){return new Oe("unauthorized","User does not have permission to access '"+t+"'.")}function cN(){return new Oe("retry-limit-exceeded","Max retry time for operation exceeded, please try again.")}function M_(){return new Oe("canceled","User canceled the upload/download.")}function lN(t){return new Oe("invalid-url","Invalid URL '"+t+"'.")}function uN(t){return new Oe("invalid-default-bucket","Invalid default bucket '"+t+"'.")}function hN(){return new Oe("no-default-bucket","No default bucket found. Did you set the '"+L_+"' property when initializing the app?")}function U_(){return new Oe("cannot-slice-blob","Cannot slice blob for upload. Please retry the upload.")}function dN(){return new Oe("server-file-wrong-size","Server recorded incorrect upload file size, please retry the upload.")}function fN(){return new Oe("no-download-url","The given file does not have any download URLs.")}function Jl(t){return new Oe("invalid-argument",t)}function $_(){return new Oe("app-deleted","The Firebase app was deleted.")}function pN(t){return new Oe("invalid-root-operation","The operation '"+t+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}function li(t,e){return new Oe("invalid-format","String does not match format '"+t+"': "+e)}function zs(t){throw new Oe("internal-error","Internal error: "+t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kt{constructor(e,n){this.bucket=e,this.path_=n}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(e,n){let r;try{r=kt.makeFromUrl(e,n)}catch{return new kt(e,"")}if(r.path==="")return r;throw uN(e)}static makeFromUrl(e,n){let r=null;const s="([A-Za-z0-9.\\-_]+)";function i(F){F.path.charAt(F.path.length-1)==="/"&&(F.path_=F.path_.slice(0,-1))}const o="(/(.*))?$",a=new RegExp("^gs://"+s+o,"i"),c={bucket:1,path:3};function l(F){F.path_=decodeURIComponent(F.path)}const u="v[A-Za-z0-9_]+",h=n.replace(/[.]/g,"\\."),d="(/([^?#]*).*)?$",f=new RegExp(`^https?://${h}/${u}/b/${s}/o${d}`,"i"),m={bucket:1,path:3},E=n===P_?"(?:storage.googleapis.com|storage.cloud.google.com)":n,_="([^?#]*)",y=new RegExp(`^https?://${E}/${s}/${_}`,"i"),L=[{regex:a,indices:c,postModify:i},{regex:f,indices:m,postModify:l},{regex:y,indices:{bucket:1,path:2},postModify:l}];for(let F=0;F<L.length;F++){const re=L[F],ce=re.regex.exec(e);if(ce){const Ne=ce[re.indices.bucket];let Ke=ce[re.indices.path];Ke||(Ke=""),r=new kt(Ne,Ke),re.postModify(r);break}}if(r==null)throw lN(e);return r}}class mN{constructor(e){this.promise_=Promise.reject(e)}getPromise(){return this.promise_}cancel(e=!1){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gN(t,e,n){let r=1,s=null,i=null,o=!1,a=0;function c(){return a===2}let l=!1;function u(..._){l||(l=!0,e.apply(null,_))}function h(_){s=setTimeout(()=>{s=null,t(f,c())},_)}function d(){i&&clearTimeout(i)}function f(_,...y){if(l){d();return}if(_){d(),u.call(null,_,...y);return}if(c()||o){d(),u.call(null,_,...y);return}r<64&&(r*=2);let L;a===1?(a=2,L=0):L=(r+Math.random())*1e3,h(L)}let m=!1;function E(_){m||(m=!0,d(),!l&&(s!==null?(_||(a=2),clearTimeout(s),h(0)):_||(a=1)))}return h(0),i=setTimeout(()=>{o=!0,E(!0)},n),E}function yN(t){t(!1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vN(t){return t!==void 0}function _N(t){return typeof t=="function"}function wN(t){return typeof t=="object"&&!Array.isArray(t)}function pc(t){return typeof t=="string"||t instanceof String}function Up(t){return Zh()&&t instanceof Blob}function Zh(){return typeof Blob!="undefined"}function $p(t,e,n,r){if(r<e)throw Jl(`Invalid value for '${t}'. Expected ${e} or greater.`);if(r>n)throw Jl(`Invalid value for '${t}'. Expected ${n} or less.`)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function eo(t,e,n){let r=e;return n==null&&(r=`https://${e}`),`${n}://${r}/v0${t}`}function F_(t){const e=encodeURIComponent;let n="?";for(const r in t)if(t.hasOwnProperty(r)){const s=e(r)+"="+e(t[r]);n=n+s+"&"}return n=n.slice(0,-1),n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var ur;(function(t){t[t.NO_ERROR=0]="NO_ERROR",t[t.NETWORK_ERROR=1]="NETWORK_ERROR",t[t.ABORT=2]="ABORT"})(ur||(ur={}));/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class EN{constructor(e,n,r,s,i,o,a,c,l,u,h){this.url_=e,this.method_=n,this.headers_=r,this.body_=s,this.successCodes_=i,this.additionalRetryCodes_=o,this.callback_=a,this.errorCallback_=c,this.timeout_=l,this.progressCallback_=u,this.connectionFactory_=h,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((d,f)=>{this.resolve_=d,this.reject_=f,this.start_()})}start_(){const e=(r,s)=>{if(s){r(!1,new yo(!1,null,!0));return}const i=this.connectionFactory_();this.pendingConnection_=i;const o=a=>{const c=a.loaded,l=a.lengthComputable?a.total:-1;this.progressCallback_!==null&&this.progressCallback_(c,l)};this.progressCallback_!==null&&i.addUploadProgressListener(o),i.send(this.url_,this.method_,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&i.removeUploadProgressListener(o),this.pendingConnection_=null;const a=i.getErrorCode()===ur.NO_ERROR,c=i.getStatus();if(!a||this.isRetryStatusCode_(c)){const u=i.getErrorCode()===ur.ABORT;r(!1,new yo(!1,null,u));return}const l=this.successCodes_.indexOf(c)!==-1;r(!0,new yo(l,i))})},n=(r,s)=>{const i=this.resolve_,o=this.reject_,a=s.connection;if(s.wasSuccessCode)try{const c=this.callback_(a,a.getResponse());vN(c)?i(c):i()}catch(c){o(c)}else if(a!==null){const c=Jh();c.serverResponse=a.getErrorText(),this.errorCallback_?o(this.errorCallback_(a,c)):o(c)}else if(s.canceled){const c=this.appDelete_?$_():M_();o(c)}else{const c=cN();o(c)}};this.canceled_?n(!1,new yo(!1,null,!0)):this.backoffId_=gN(e,n,this.timeout_)}getPromise(){return this.promise_}cancel(e){this.canceled_=!0,this.appDelete_=e||!1,this.backoffId_!==null&&yN(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}isRetryStatusCode_(e){const n=e>=500&&e<600,s=[408,429].indexOf(e)!==-1,i=this.additionalRetryCodes_.indexOf(e)!==-1;return n||s||i}}class yo{constructor(e,n,r){this.wasSuccessCode=e,this.connection=n,this.canceled=!!r}}function bN(t,e){e!==null&&e.length>0&&(t.Authorization="Firebase "+e)}function TN(t,e){t["X-Firebase-Storage-Version"]="webjs/"+(e!=null?e:"AppManager")}function IN(t,e){e&&(t["X-Firebase-GMPID"]=e)}function AN(t,e){e!==null&&(t["X-Firebase-AppCheck"]=e)}function SN(t,e,n,r,s,i){const o=F_(t.urlParams),a=t.url+o,c=Object.assign({},t.headers);return IN(c,e),bN(c,n),TN(c,i),AN(c,r),new EN(a,t.method,c,t.body,t.successCodes,t.additionalRetryCodes,t.handler,t.errorHandler,t.timeout,t.progressCallback,s)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function CN(){return typeof BlobBuilder!="undefined"?BlobBuilder:typeof WebKitBlobBuilder!="undefined"?WebKitBlobBuilder:void 0}function kN(...t){const e=CN();if(e!==void 0){const n=new e;for(let r=0;r<t.length;r++)n.append(t[r]);return n.getBlob()}else{if(Zh())return new Blob(t);throw new Oe("unsupported-environment","This browser doesn't seem to support creating Blobs")}}function xN(t,e,n){return t.webkitSlice?t.webkitSlice(e,n):t.mozSlice?t.mozSlice(e,n):t.slice?t.slice(e,n):null}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function RN(t){return atob(t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qt={RAW:"raw",BASE64:"base64",BASE64URL:"base64url",DATA_URL:"data_url"};class Qc{constructor(e,n){this.data=e,this.contentType=n||null}}function ON(t,e){switch(t){case Qt.RAW:return new Qc(B_(e));case Qt.BASE64:case Qt.BASE64URL:return new Qc(V_(t,e));case Qt.DATA_URL:return new Qc(DN(e),PN(e))}throw Jh()}function B_(t){const e=[];for(let n=0;n<t.length;n++){let r=t.charCodeAt(n);if(r<=127)e.push(r);else if(r<=2047)e.push(192|r>>6,128|r&63);else if((r&64512)===55296)if(!(n<t.length-1&&(t.charCodeAt(n+1)&64512)===56320))e.push(239,191,189);else{const i=r,o=t.charCodeAt(++n);r=65536|(i&1023)<<10|o&1023,e.push(240|r>>18,128|r>>12&63,128|r>>6&63,128|r&63)}else(r&64512)===56320?e.push(239,191,189):e.push(224|r>>12,128|r>>6&63,128|r&63)}return new Uint8Array(e)}function NN(t){let e;try{e=decodeURIComponent(t)}catch{throw li(Qt.DATA_URL,"Malformed data URL.")}return B_(e)}function V_(t,e){switch(t){case Qt.BASE64:{const s=e.indexOf("-")!==-1,i=e.indexOf("_")!==-1;if(s||i)throw li(t,"Invalid character '"+(s?"-":"_")+"' found: is it base64url encoded?");break}case Qt.BASE64URL:{const s=e.indexOf("+")!==-1,i=e.indexOf("/")!==-1;if(s||i)throw li(t,"Invalid character '"+(s?"+":"/")+"' found: is it base64 encoded?");e=e.replace(/-/g,"+").replace(/_/g,"/");break}}let n;try{n=RN(e)}catch{throw li(t,"Invalid character found")}const r=new Uint8Array(n.length);for(let s=0;s<n.length;s++)r[s]=n.charCodeAt(s);return r}class j_{constructor(e){this.base64=!1,this.contentType=null;const n=e.match(/^data:([^,]+)?,/);if(n===null)throw li(Qt.DATA_URL,"Must be formatted 'data:[<mediatype>][;base64],<data>");const r=n[1]||null;r!=null&&(this.base64=LN(r,";base64"),this.contentType=this.base64?r.substring(0,r.length-7):r),this.rest=e.substring(e.indexOf(",")+1)}}function DN(t){const e=new j_(t);return e.base64?V_(Qt.BASE64,e.rest):NN(e.rest)}function PN(t){return new j_(t).contentType}function LN(t,e){return t.length>=e.length?t.substring(t.length-e.length)===e:!1}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nn{constructor(e,n){let r=0,s="";Up(e)?(this.data_=e,r=e.size,s=e.type):e instanceof ArrayBuffer?(n?this.data_=new Uint8Array(e):(this.data_=new Uint8Array(e.byteLength),this.data_.set(new Uint8Array(e))),r=this.data_.length):e instanceof Uint8Array&&(n?this.data_=e:(this.data_=new Uint8Array(e.length),this.data_.set(e)),r=e.length),this.size_=r,this.type_=s}size(){return this.size_}type(){return this.type_}slice(e,n){if(Up(this.data_)){const r=this.data_,s=xN(r,e,n);return s===null?null:new Nn(s)}else{const r=new Uint8Array(this.data_.buffer,e,n-e);return new Nn(r,!0)}}static getBlob(...e){if(Zh()){const n=e.map(r=>r instanceof Nn?r.data_:r);return new Nn(kN.apply(null,n))}else{const n=e.map(o=>pc(o)?ON(Qt.RAW,o).data:o.data_);let r=0;n.forEach(o=>{r+=o.byteLength});const s=new Uint8Array(r);let i=0;return n.forEach(o=>{for(let a=0;a<o.length;a++)s[i++]=o[a]}),new Nn(s,!0)}}uploadData(){return this.data_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function q_(t){let e;try{e=JSON.parse(t)}catch{return null}return wN(e)?e:null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function MN(t){if(t.length===0)return null;const e=t.lastIndexOf("/");return e===-1?"":t.slice(0,e)}function UN(t,e){const n=e.split("/").filter(r=>r.length>0).join("/");return t.length===0?n:t+"/"+n}function H_(t){const e=t.lastIndexOf("/",t.length-2);return e===-1?t:t.slice(e+1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $N(t,e){return e}class at{constructor(e,n,r,s){this.server=e,this.local=n||e,this.writable=!!r,this.xform=s||$N}}let vo=null;function FN(t){return!pc(t)||t.length<2?t:H_(t)}function z_(){if(vo)return vo;const t=[];t.push(new at("bucket")),t.push(new at("generation")),t.push(new at("metageneration")),t.push(new at("name","fullPath",!0));function e(i,o){return FN(o)}const n=new at("name");n.xform=e,t.push(n);function r(i,o){return o!==void 0?Number(o):o}const s=new at("size");return s.xform=r,t.push(s),t.push(new at("timeCreated")),t.push(new at("updated")),t.push(new at("md5Hash",null,!0)),t.push(new at("cacheControl",null,!0)),t.push(new at("contentDisposition",null,!0)),t.push(new at("contentEncoding",null,!0)),t.push(new at("contentLanguage",null,!0)),t.push(new at("contentType",null,!0)),t.push(new at("metadata","customMetadata",!0)),vo=t,vo}function BN(t,e){function n(){const r=t.bucket,s=t.fullPath,i=new kt(r,s);return e._makeStorageReference(i)}Object.defineProperty(t,"ref",{get:n})}function VN(t,e,n){const r={};r.type="file";const s=n.length;for(let i=0;i<s;i++){const o=n[i];r[o.local]=o.xform(r,e[o.server])}return BN(r,t),r}function K_(t,e,n){const r=q_(e);return r===null?null:VN(t,r,n)}function jN(t,e,n,r){const s=q_(e);if(s===null||!pc(s.downloadTokens))return null;const i=s.downloadTokens;if(i.length===0)return null;const o=encodeURIComponent;return i.split(",").map(l=>{const u=t.bucket,h=t.fullPath,d="/b/"+o(u)+"/o/"+o(h),f=eo(d,n,r),m=F_({alt:"media",token:l});return f+m})[0]}function G_(t,e){const n={},r=e.length;for(let s=0;s<r;s++){const i=e[s];i.writable&&(n[i.server]=t[i.local])}return JSON.stringify(n)}class $s{constructor(e,n,r,s){this.url=e,this.method=n,this.handler=r,this.timeout=s,this.urlParams={},this.headers={},this.body=null,this.errorHandler=null,this.progressCallback=null,this.successCodes=[200],this.additionalRetryCodes=[]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yn(t){if(!t)throw Jh()}function ed(t,e){function n(r,s){const i=K_(t,s,e);return yn(i!==null),i}return n}function qN(t,e){function n(r,s){const i=K_(t,s,e);return yn(i!==null),jN(i,s,t.host,t._protocol)}return n}function to(t){function e(n,r){let s;return n.getStatus()===401?n.getErrorText().includes("Firebase App Check token is invalid")?s=oN():s=iN():n.getStatus()===402?s=sN(t.bucket):n.getStatus()===403?s=aN(t.path):s=r,s.serverResponse=r.serverResponse,s}return e}function W_(t){const e=to(t);function n(r,s){let i=e(r,s);return r.getStatus()===404&&(i=rN(t.path)),i.serverResponse=s.serverResponse,i}return n}function HN(t,e,n){const r=e.fullServerUrl(),s=eo(r,t.host,t._protocol),i="GET",o=t.maxOperationRetryTime,a=new $s(s,i,ed(t,n),o);return a.errorHandler=W_(e),a}function zN(t,e,n){const r=e.fullServerUrl(),s=eo(r,t.host,t._protocol),i="GET",o=t.maxOperationRetryTime,a=new $s(s,i,qN(t,n),o);return a.errorHandler=W_(e),a}function KN(t,e){return t&&t.contentType||e&&e.type()||"application/octet-stream"}function Q_(t,e,n){const r=Object.assign({},n);return r.fullPath=t.path,r.size=e.size(),r.contentType||(r.contentType=KN(null,e)),r}function GN(t,e,n,r,s){const i=e.bucketOnlyServerUrl(),o={"X-Goog-Upload-Protocol":"multipart"};function a(){let L="";for(let F=0;F<2;F++)L=L+Math.random().toString().slice(2);return L}const c=a();o["Content-Type"]="multipart/related; boundary="+c;const l=Q_(e,r,s),u=G_(l,n),h="--"+c+`\r
Content-Type: application/json; charset=utf-8\r
\r
`+u+`\r
--`+c+`\r
Content-Type: `+l.contentType+`\r
\r
`,d=`\r
--`+c+"--",f=Nn.getBlob(h,r,d);if(f===null)throw U_();const m={name:l.fullPath},E=eo(i,t.host,t._protocol),_="POST",y=t.maxUploadRetryTime,C=new $s(E,_,ed(t,n),y);return C.urlParams=m,C.headers=o,C.body=f.uploadData(),C.errorHandler=to(e),C}class da{constructor(e,n,r,s){this.current=e,this.total=n,this.finalized=!!r,this.metadata=s||null}}function td(t,e){let n=null;try{n=t.getResponseHeader("X-Goog-Upload-Status")}catch{yn(!1)}return yn(!!n&&(e||["active"]).indexOf(n)!==-1),n}function WN(t,e,n,r,s){const i=e.bucketOnlyServerUrl(),o=Q_(e,r,s),a={name:o.fullPath},c=eo(i,t.host,t._protocol),l="POST",u={"X-Goog-Upload-Protocol":"resumable","X-Goog-Upload-Command":"start","X-Goog-Upload-Header-Content-Length":`${r.size()}`,"X-Goog-Upload-Header-Content-Type":o.contentType,"Content-Type":"application/json; charset=utf-8"},h=G_(o,n),d=t.maxUploadRetryTime;function f(E){td(E);let _;try{_=E.getResponseHeader("X-Goog-Upload-URL")}catch{yn(!1)}return yn(pc(_)),_}const m=new $s(c,l,f,d);return m.urlParams=a,m.headers=u,m.body=h,m.errorHandler=to(e),m}function QN(t,e,n,r){const s={"X-Goog-Upload-Command":"query"};function i(l){const u=td(l,["active","final"]);let h=null;try{h=l.getResponseHeader("X-Goog-Upload-Size-Received")}catch{yn(!1)}h||yn(!1);const d=Number(h);return yn(!isNaN(d)),new da(d,r.size(),u==="final")}const o="POST",a=t.maxUploadRetryTime,c=new $s(n,o,i,a);return c.headers=s,c.errorHandler=to(e),c}const Fp=256*1024;function XN(t,e,n,r,s,i,o,a){const c=new da(0,0);if(o?(c.current=o.current,c.total=o.total):(c.current=0,c.total=r.size()),r.size()!==c.total)throw dN();const l=c.total-c.current;let u=l;s>0&&(u=Math.min(u,s));const h=c.current,d=h+u,m={"X-Goog-Upload-Command":u===l?"upload, finalize":"upload","X-Goog-Upload-Offset":`${c.current}`},E=r.slice(h,d);if(E===null)throw U_();function _(F,re){const ce=td(F,["active","final"]),Ne=c.current+u,Ke=r.size();let Fe;return ce==="final"?Fe=ed(e,i)(F,re):Fe=null,new da(Ne,Ke,ce==="final",Fe)}const y="POST",C=e.maxUploadRetryTime,L=new $s(n,y,_,C);return L.headers=m,L.body=E.uploadData(),L.progressCallback=a||null,L.errorHandler=to(t),L}const yt={RUNNING:"running",PAUSED:"paused",SUCCESS:"success",CANCELED:"canceled",ERROR:"error"};function Xc(t){switch(t){case"running":case"pausing":case"canceling":return yt.RUNNING;case"paused":return yt.PAUSED;case"success":return yt.SUCCESS;case"canceled":return yt.CANCELED;case"error":return yt.ERROR;default:return yt.ERROR}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class YN{constructor(e,n,r){if(_N(e)||n!=null||r!=null)this.next=e,this.error=n!=null?n:void 0,this.complete=r!=null?r:void 0;else{const i=e;this.next=i.next,this.error=i.error,this.complete=i.complete}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Vr(t){return(...e)=>{Promise.resolve().then(()=>t(...e))}}class JN{constructor(){this.sent_=!1,this.xhr_=new XMLHttpRequest,this.initXhr(),this.errorCode_=ur.NO_ERROR,this.sendPromise_=new Promise(e=>{this.xhr_.addEventListener("abort",()=>{this.errorCode_=ur.ABORT,e()}),this.xhr_.addEventListener("error",()=>{this.errorCode_=ur.NETWORK_ERROR,e()}),this.xhr_.addEventListener("load",()=>{e()})})}send(e,n,r,s){if(this.sent_)throw zs("cannot .send() more than once");if(this.sent_=!0,this.xhr_.open(n,e,!0),s!==void 0)for(const i in s)s.hasOwnProperty(i)&&this.xhr_.setRequestHeader(i,s[i].toString());return r!==void 0?this.xhr_.send(r):this.xhr_.send(),this.sendPromise_}getErrorCode(){if(!this.sent_)throw zs("cannot .getErrorCode() before sending");return this.errorCode_}getStatus(){if(!this.sent_)throw zs("cannot .getStatus() before sending");try{return this.xhr_.status}catch{return-1}}getResponse(){if(!this.sent_)throw zs("cannot .getResponse() before sending");return this.xhr_.response}getErrorText(){if(!this.sent_)throw zs("cannot .getErrorText() before sending");return this.xhr_.statusText}abort(){this.xhr_.abort()}getResponseHeader(e){return this.xhr_.getResponseHeader(e)}addUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.addEventListener("progress",e)}removeUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.removeEventListener("progress",e)}}class ZN extends JN{initXhr(){this.xhr_.responseType="text"}}function Kr(){return new ZN}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eD{constructor(e,n,r=null){this._transferred=0,this._needToFetchStatus=!1,this._needToFetchMetadata=!1,this._observers=[],this._error=void 0,this._uploadUrl=void 0,this._request=void 0,this._chunkMultiplier=1,this._resolve=void 0,this._reject=void 0,this._ref=e,this._blob=n,this._metadata=r,this._mappings=z_(),this._resumable=this._shouldDoResumable(this._blob),this._state="running",this._errorHandler=s=>{this._request=void 0,this._chunkMultiplier=1,s._codeEquals("canceled")?(this._needToFetchStatus=!0,this.completeTransitions_()):(this._error=s,this._transition("error"))},this._metadataErrorHandler=s=>{this._request=void 0,s._codeEquals("canceled")?this.completeTransitions_():(this._error=s,this._transition("error"))},this._promise=new Promise((s,i)=>{this._resolve=s,this._reject=i,this._start()}),this._promise.then(null,()=>{})}_makeProgressCallback(){const e=this._transferred;return n=>this._updateProgress(e+n)}_shouldDoResumable(e){return e.size()>256*1024}_start(){this._state==="running"&&this._request===void 0&&(this._resumable?this._uploadUrl===void 0?this._createResumable():this._needToFetchStatus?this._fetchStatus():this._needToFetchMetadata?this._fetchMetadata():this._continueUpload():this._oneShotUpload())}_resolveToken(e){Promise.all([this._ref.storage._getAuthToken(),this._ref.storage._getAppCheckToken()]).then(([n,r])=>{switch(this._state){case"running":e(n,r);break;case"canceling":this._transition("canceled");break;case"pausing":this._transition("paused");break}})}_createResumable(){this._resolveToken((e,n)=>{const r=WN(this._ref.storage,this._ref._location,this._mappings,this._blob,this._metadata),s=this._ref.storage._makeRequest(r,Kr,e,n);this._request=s,s.getPromise().then(i=>{this._request=void 0,this._uploadUrl=i,this._needToFetchStatus=!1,this.completeTransitions_()},this._errorHandler)})}_fetchStatus(){const e=this._uploadUrl;this._resolveToken((n,r)=>{const s=QN(this._ref.storage,this._ref._location,e,this._blob),i=this._ref.storage._makeRequest(s,Kr,n,r);this._request=i,i.getPromise().then(o=>{o=o,this._request=void 0,this._updateProgress(o.current),this._needToFetchStatus=!1,o.finalized&&(this._needToFetchMetadata=!0),this.completeTransitions_()},this._errorHandler)})}_continueUpload(){const e=Fp*this._chunkMultiplier,n=new da(this._transferred,this._blob.size()),r=this._uploadUrl;this._resolveToken((s,i)=>{let o;try{o=XN(this._ref._location,this._ref.storage,r,this._blob,e,this._mappings,n,this._makeProgressCallback())}catch(c){this._error=c,this._transition("error");return}const a=this._ref.storage._makeRequest(o,Kr,s,i);this._request=a,a.getPromise().then(c=>{this._increaseMultiplier(),this._request=void 0,this._updateProgress(c.current),c.finalized?(this._metadata=c.metadata,this._transition("success")):this.completeTransitions_()},this._errorHandler)})}_increaseMultiplier(){Fp*this._chunkMultiplier<32*1024*1024&&(this._chunkMultiplier*=2)}_fetchMetadata(){this._resolveToken((e,n)=>{const r=HN(this._ref.storage,this._ref._location,this._mappings),s=this._ref.storage._makeRequest(r,Kr,e,n);this._request=s,s.getPromise().then(i=>{this._request=void 0,this._metadata=i,this._transition("success")},this._metadataErrorHandler)})}_oneShotUpload(){this._resolveToken((e,n)=>{const r=GN(this._ref.storage,this._ref._location,this._mappings,this._blob,this._metadata),s=this._ref.storage._makeRequest(r,Kr,e,n);this._request=s,s.getPromise().then(i=>{this._request=void 0,this._metadata=i,this._updateProgress(this._blob.size()),this._transition("success")},this._errorHandler)})}_updateProgress(e){const n=this._transferred;this._transferred=e,this._transferred!==n&&this._notifyObservers()}_transition(e){if(this._state!==e)switch(e){case"canceling":this._state=e,this._request!==void 0&&this._request.cancel();break;case"pausing":this._state=e,this._request!==void 0&&this._request.cancel();break;case"running":const n=this._state==="paused";this._state=e,n&&(this._notifyObservers(),this._start());break;case"paused":this._state=e,this._notifyObservers();break;case"canceled":this._error=M_(),this._state=e,this._notifyObservers();break;case"error":this._state=e,this._notifyObservers();break;case"success":this._state=e,this._notifyObservers();break}}completeTransitions_(){switch(this._state){case"pausing":this._transition("paused");break;case"canceling":this._transition("canceled");break;case"running":this._start();break}}get snapshot(){const e=Xc(this._state);return{bytesTransferred:this._transferred,totalBytes:this._blob.size(),state:e,metadata:this._metadata,task:this,ref:this._ref}}on(e,n,r,s){const i=new YN(n||void 0,r||void 0,s||void 0);return this._addObserver(i),()=>{this._removeObserver(i)}}then(e,n){return this._promise.then(e,n)}catch(e){return this.then(null,e)}_addObserver(e){this._observers.push(e),this._notifyObserver(e)}_removeObserver(e){const n=this._observers.indexOf(e);n!==-1&&this._observers.splice(n,1)}_notifyObservers(){this._finishPromise(),this._observers.slice().forEach(n=>{this._notifyObserver(n)})}_finishPromise(){if(this._resolve!==void 0){let e=!0;switch(Xc(this._state)){case yt.SUCCESS:Vr(this._resolve.bind(null,this.snapshot))();break;case yt.CANCELED:case yt.ERROR:const n=this._reject;Vr(n.bind(null,this._error))();break;default:e=!1;break}e&&(this._resolve=void 0,this._reject=void 0)}}_notifyObserver(e){switch(Xc(this._state)){case yt.RUNNING:case yt.PAUSED:e.next&&Vr(e.next.bind(e,this.snapshot))();break;case yt.SUCCESS:e.complete&&Vr(e.complete.bind(e))();break;case yt.CANCELED:case yt.ERROR:e.error&&Vr(e.error.bind(e,this._error))();break;default:e.error&&Vr(e.error.bind(e,this._error))()}}resume(){const e=this._state==="paused"||this._state==="pausing";return e&&this._transition("running"),e}pause(){const e=this._state==="running";return e&&this._transition("pausing"),e}cancel(){const e=this._state==="running"||this._state==="pausing";return e&&this._transition("canceling"),e}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class br{constructor(e,n){this._service=e,n instanceof kt?this._location=n:this._location=kt.makeFromUrl(n,e.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(e,n){return new br(e,n)}get root(){const e=new kt(this._location.bucket,"");return this._newRef(this._service,e)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return H_(this._location.path)}get storage(){return this._service}get parent(){const e=MN(this._location.path);if(e===null)return null;const n=new kt(this._location.bucket,e);return new br(this._service,n)}_throwIfRoot(e){if(this._location.path==="")throw pN(e)}}function tD(t,e,n){return t._throwIfRoot("uploadBytesResumable"),new eD(t,new Nn(e),n)}function nD(t){t._throwIfRoot("getDownloadURL");const e=zN(t.storage,t._location,z_());return t.storage.makeRequestWithTokens(e,Kr).then(n=>{if(n===null)throw fN();return n})}function rD(t,e){const n=UN(t._location.path,e),r=new kt(t._location.bucket,n);return new br(t.storage,r)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sD(t){return/^[A-Za-z]+:\/\//.test(t)}function iD(t,e){return new br(t,e)}function X_(t,e){if(t instanceof nd){const n=t;if(n._bucket==null)throw hN();const r=new br(n,n._bucket);return e!=null?X_(r,e):r}else return e!==void 0?rD(t,e):t}function oD(t,e){if(e&&sD(e)){if(t instanceof nd)return iD(t,e);throw Jl("To use ref(service, url), the first argument must be a Storage instance.")}else return X_(t,e)}function Bp(t,e){const n=e==null?void 0:e[L_];return n==null?null:kt.makeFromBucketSpec(n,t)}class nd{constructor(e,n,r,s,i){this.app=e,this._authProvider=n,this._appCheckProvider=r,this._url=s,this._firebaseVersion=i,this._bucket=null,this._host=P_,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=tN,this._maxUploadRetryTime=nN,this._requests=new Set,s!=null?this._bucket=kt.makeFromBucketSpec(s,this._host):this._bucket=Bp(this._host,this.app.options)}get host(){return this._host}set host(e){this._host=e,this._url!=null?this._bucket=kt.makeFromBucketSpec(this._url,e):this._bucket=Bp(e,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(e){$p("time",0,Number.POSITIVE_INFINITY,e),this._maxUploadRetryTime=e}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(e){$p("time",0,Number.POSITIVE_INFINITY,e),this._maxOperationRetryTime=e}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const e=this._authProvider.getImmediate({optional:!0});if(e){const n=await e.getToken();if(n!==null)return n.accessToken}return null}async _getAppCheckToken(){const e=this._appCheckProvider.getImmediate({optional:!0});return e?(await e.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(e=>e.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(e){return new br(this,e)}_makeRequest(e,n,r,s){if(this._deleted)return new mN($_());{const i=SN(e,this._appId,r,s,n,this._firebaseVersion);return this._requests.add(i),i.getPromise().then(()=>this._requests.delete(i),()=>this._requests.delete(i)),i}}async makeRequestWithTokens(e,n){const[r,s]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(e,n,r,s).getPromise()}}const Vp="@firebase/storage",jp="0.9.6";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Y_="storage";function yM(t,e,n){return t=Le(t),tD(t,e,n)}function vM(t){return t=Le(t),nD(t)}function _M(t,e){return t=Le(t),oD(t,e)}function aD(t=ku(),e){return t=Le(t),Sa(t,Y_).getImmediate({identifier:e})}function cD(t,{instanceIdentifier:e}){const n=t.getProvider("app").getImmediate(),r=t.getProvider("auth-internal"),s=t.getProvider("app-check-internal");return new nd(n,r,s,e,Cs)}function lD(){dr(new Vn(Y_,cD,"PUBLIC").setMultipleInstances(!0)),Yt(Vp,jp,""),Yt(Vp,jp,"esm2017")}lD();const rd=lT(JSON.parse('{"apiKey": "AIzaSyAenIlf2tdBgigAND1EC5qbtvE1g-cMo4E","authDomain": "rem-app-113.firebaseapp.com","projectId": "rem-app-113","storageBucket": "rem-app-113.appspot.com","messagingSenderId": "342831982247","appId": "1:342831982247:web:8c7f4dd636412c7c569d82"}')),sd=cI(rd),Zl=YC(rd),wM=aD(rd);var eu=(t=>(t.TOGGLE_SIGN_IN="@User/ToggleSignIn",t.SET_USER="@User/Set",t))(eu||{});const uD={["@User/ToggleSignIn"](t,e){t.isSignInOpen=e},["@User/Set"](t,e){t.user=e}};var Es=(t=>(t.TOGGLE_SIGN_IN="@User/ToggleSignIn",t.SET_USER="@User/Set",t))(Es||{});const hD={["@User/ToggleSignIn"]({commit:t},e){t(eu.TOGGLE_SIGN_IN,e)},["@User/Set"]({commit:t},e){t(eu.SET_USER,e)}},dD=v("span",{class:"material-icons-outlined text-2xl md:text-[28px] hover:text-rem-color"},"close",-1),fD=[dD],pD=["src"],mD=v("h3",{class:"text-lg text-center mt-4 sm:text-xl"},[me(" \u0110\u0103ng nh\u1EADp v\xE0o "),v("span",null,"Rem"),me(" \u0111\u1EC3 c\xF3 tr\u1EA3i nghi\u1EC7m t\u1ED1t nh\u1EA5t! ")],-1),gD=v("p",{class:"text-gray-400 mt-4 text-center"},[me(" Tr\xEAn "),v("span",{class:"text-rem-color"},"16k"),me(" phim nhi\u1EC1u th\u1EC3 lo\u1EA1i. v\xE0 v\u1EABn \u0111ang \u0111\u01B0\u1EE3c c\u1EADp nh\u1EADt m\u1ED7i ng\xE0y ")],-1),yD={class:"flex flex-col px-4 gap-3 mt-4"},vD=v("h3",{class:"text-rem-color"},"B\u1EA1n c\xF3 th\u1EC3 \u0111\u0103ng nh\u1EADp v\u1EDBi:",-1),_D=["src"],wD=me(" Facebook "),ED=["src"],bD=me(" Google "),TD=et({setup(t){const e=Ia(),n=vt(()=>e.getters.getSignInState),r=()=>e.dispatch(Es.TOGGLE_SIGN_IN,!1),s=a=>{r(),E1(sd,a).catch(c=>console.log(c))},i=()=>{s(new un)},o=()=>{s(new hn)};return(a,c)=>(D(),M(de,null,[v("div",{class:"flex flex-col transition-all items-center w-72 sm:w-80 fixed p-3 pt-8 bg-rem-dark rounded-xl left-[50%] translate-x-[-50%] z-50 duration-500",style:Tr([Ae(n)?{top:"70px"}:{top:"-500px"}])},[v("button",{class:"absolute top-1 right-2",onClick:r},fD),v("img",{class:"w-24",src:"/rem-logo.png"},null,8,pD),mD,gD,v("div",yD,[vD,v("button",{class:"flex items-center justify-center gap-2 p-1 border-2 border-rem text-xl hover:bg-rem hover:text-rem-so-dark transition font-normal",onClick:i},[v("img",{class:"w-10",src:"/icon-facebook.png"},null,8,_D),wD]),v("button",{class:"flex items-center justify-center gap-2 p-1 border-2 border-white text-xl hover:bg-white hover:text-rem-so-dark transition font-normal",onClick:o},[v("img",{class:"w-10",src:"/icon-google.png"},null,8,ED),bD])])],4),Ae(n)?(D(),M("div",{key:0,class:"fixed top-0 right-0 bottom-0 left-0 bg-rem-so-dark z-40 bg-opacity-60",onClick:r})):Re("",!0)],64))}}),ID={class:"flex w-full h-12 sm:h-14 bg-transparent items-center justify-between fixed px-4 md:px-8 z-30 transition-all duration-300"},AD={class:"flex h-full"},SD=["src"],CD={class:"hidden md:flex items-center justify-center flex-1 h-full ml-3"},kD={class:"grid-cols-[1fr_1fr_1fr_1fr] grid p-1 w-[450px] absolute left-[-150px] opacity-0 pointer-events-none bg-rem-dark bg-opacity-80 shadow-md rounded-lg transition-all"},xD={class:"flex items-center h-full"},RD=v("span",{class:"material-icons-outlined text-2xl md:text-[28px] hover:text-rem-color"}," search ",-1),OD=[RD],ND={key:0,class:"relative"},DD={class:"flex items-center justify-center overflow-hidden w-9 h-9 rounded-full"},PD=["src"],LD=v("span",{class:"material-icons"},"arrow_drop_down",-1),MD={key:0,class:"flex flex-col rounded-md overflow-hidden bg-rem-dark bs-lg absolute botton-4 right-0 h-fit w-36"},UD=v("button",{class:"group px-3 gap-1 font-semibold py-2 flex items-center hover:text-rem-color hover:bg-rem-quiet-dark hover:bg-opacity-40"},[v("span",{class:"material-icons-outlined group-hover:text-rem-color"}," account_circle "),me(" T\xE0i Kho\u1EA3n ")],-1),$D=v("button",{class:"group px-3 gap-1 font-semibold py-2 flex items-center hover:text-rem-color hover:bg-rem-quiet-dark hover:bg-opacity-40"},[v("span",{class:"material-icons-outlined group-hover:text-rem-color"}," notifications "),me(" Th\xF4ng b\xE1o ")],-1),FD=v("span",{class:"material-icons-outlined group-hover:text-rem-color"}," history ",-1),BD=me(" L\u1ECBch s\u1EED "),VD=v("button",{class:"group px-3 gap-1 font-semibold py-2 flex items-center hover:text-rem-color hover:bg-rem-quiet-dark hover:bg-opacity-40"},[v("span",{class:"material-icons-outlined group-hover:text-rem-color"}," settings "),me(" C\xE0i \u0111\u1EB7t ")],-1),jD=v("span",{class:"material-icons-outlined group-hover:text-rem-color"}," logout ",-1),qD=me(" \u0110\u0103ng xu\u1EA5t "),HD=[jD,qD],zD=v("span",{class:"material-icons-outlined text-[26px] md:text-3xl hover:text-rem-color"}," account_circle ",-1),KD=[zD],GD=v("span",{class:"material-icons-outlined text-[26px] md:text-3xl hover:text-rem-color"}," menu ",-1),WD=[GD],QD=et({setup(t){const e=d_(),n=Ia(),r=le(!1),s=le(!1),i=le(!1),o=le("/"),a=vt(()=>n.getters.getUser),c=()=>n.dispatch(Es.TOGGLE_SIGN_IN,!0),l=()=>i.value=!1,u=()=>{YT(sd),r.value=!1,n.dispatch(Es.SET_USER,null)};return Xt(()=>e.path,()=>{window.scrollTo({top:0,behavior:"smooth"}),o.value=e.path.split("/")[2]}),(h,d)=>{const f=Ir("router-link"),m=Ln("rem-dropdown"),E=Ln("rem-click-away"),_=Ln("rem-scrolltop");return D(),M(de,null,[Nt((D(),M("nav",ID,[v("div",AD,[te(f,{to:"/",class:"no-underline w-[70px] h-full flex items-center justify-center"},{default:ht(()=>[v("img",{src:"/rem-logo.png",alt:"rem logo",class:"w-full"},null,8,SD)]),_:1}),v("ul",CD,[(D(!0),M(de,null,Ct(Ae(m_),y=>Nt((D(),M("li",{class:"relative h-full list-none",key:y.path},[y.isDropdown?(D(),M(de,{key:1},[v("button",{class:Xr(["flex items-center justify-center h-full px-3 font-bold group hover:text-rem-color",{"text-rem-color":y.path===o.value}])},[me(pe(y.name)+" ",1),v("span",{class:Xr(["material-icons-outlined group-hover:text-rem-color",{"text-rem-color":y.path===o.value}])},"arrow_drop_down",2)],2),v("ul",kD,[(D(!0),M(de,null,Ct(y.dropdownData,C=>(D(),M("li",{key:C.slug},[te(f,{to:{name:y.routeName,params:{path:y.path,slug:C.slug}},class:"flex items-center justify-center py-[6px] hover:bg-zinc-700 hover:bg-opacity-80 w-full h-full bg-opacity-10 hover:text-rem-color"},{default:ht(()=>[me(pe(C.name),1)]),_:2},1032,["to"])]))),128))])],64)):(D(),Wt(f,{key:0,class:Xr(["flex items-center justify-center h-full no-underline px-3 font-bold hover:text-rem-color",{"text-rem-color":y.path===o.value}]),to:{name:y.routeName,params:{slug:y.path}}},{default:ht(()=>[me(pe(y.name),1)]),_:2},1032,["class","to"]))])),[[m,y.isDropdown]])),128))])]),v("div",xD,[v("button",{class:"flex rounded-full bg-transparent items-center justify-center p-2",onClick:d[0]||(d[0]=y=>s.value=!0)},OD),Ae(a)?Nt((D(),M("div",ND,[v("button",{class:"hidden md:flex items-center",onClick:d[1]||(d[1]=y=>i.value=!0)},[v("div",DD,[v("img",{class:"object-cover w-full",referrerpolicy:"no-referrer",src:Ae(a).photoURL},null,8,PD)]),LD]),i.value?(D(),M("div",MD,[UD,$D,te(f,{class:"group px-3 gap-1 font-semibold py-2 flex items-center hover:text-rem-color hover:bg-rem-quiet-dark hover:bg-opacity-40",to:"/history"},{default:ht(()=>[FD,BD]),_:1}),VD,v("button",{class:"group px-3 gap-1 font-semibold py-2 flex items-center hover:text-rem-color hover:bg-rem-quiet-dark hover:bg-opacity-40",onClick:u},HD)])):Re("",!0)])),[[E,l]]):(D(),M("button",{key:1,class:"flex rounded-full bg-transparent items-center justify-center p-2",onClick:c},KD)),v("button",{class:"flex rounded-full bg-transparent items-center justify-center p-2 md:hidden",onClick:d[2]||(d[2]=y=>r.value=!0)},WD)])])),[[_]]),te(Yx,{isOpen:r.value,user:Ae(a),onClose:d[3]||(d[3]=y=>r.value=!1),onSignOut:u},null,8,["isOpen","user"]),te(JO,{isOpen:s.value,onClose:d[4]||(d[4]=y=>s.value=!1)},null,8,["isOpen"]),te(TD)],64)}}});var J_=(t,e)=>{const n=t.__vccOpts||t;for(const[r,s]of e)n[r]=s;return n};const XD={},YD={class:"flex flex-col-reverse sm:flex-row gap-2 py-2 px-3 md:px-10 justify-between items-center border-solid border-t border-gray-500 bg-rem-dark"},JD=wu('<div class="flex flex-col"><h4 class="text-gray-400"><span class="text-rem underline cursor-pointer text-lg">remapp.tv</span> | Web xem phim gi\u1EA3i tr\xED mi\u1EC5n ph\xED kh\xF4ng qu\u1EA3ng c\xE1o. </h4><p class="leading-4"> M\u1ECDi th\xF4ng tin li\xEAn h\u1EC7 : <span class="font-light cursor-pointer text-teal-600"> ongphamtrungnguendeveloper@email.dev </span></p></div>',1),ZD={class:"flex items-center justify-end"},eP=["src"];function tP(t,e){const n=Ir("router-link");return D(),M("div",YD,[JD,v("div",ZD,[te(n,{class:"w-[70px] h-full",to:"/"},{default:ht(()=>[v("img",{class:"w-full",src:"/rem-logo.png",alt:"rem logo"},null,8,eP)]),_:1})])])}var nP=J_(XD,[["render",tP]]);const rP={key:0,class:"min-scroll flex flex-col w-full max-h-[85vh] py-2 px-1 mt-4 overflow-auto bg-rem-so-dark"},sP=wu('<div class="skt-item w-16 h-24 rounded-md"></div><div class="flex w-full flex-col gap-3 flex-[1]"><div class="skt-item rounded-md w-40 md:w-64 h-5"></div><div class="skt-item rounded-md w-36 md:w-56 h-5"></div><div class="flex gap-4"><div class="skt-item rounded-md w-16 md:w-20 h-5"></div><div class="skt-item rounded-md w-16 md:w-20 h-5"></div></div></div>',2),iP=[sP],oP={key:1,class:"min-scroll flex flex-col w-full max-h-[85vh] py-2 px-1 mt-4 overflow-auto bg-rem-so-dark"},aP={class:"w-16 rounded object-cover"},cP={class:"flex flex-col"},lP={class:"break-line text-lg"},uP={class:"break-line text-gray-400 font-light"},hP={class:"capitalize text-sm"},dP={class:"w-16 rounded object-cover"},fP={class:"flex flex-col"},pP={class:"break-line text-lg"},mP={class:"break-line text-gray-400 font-light"},gP={class:"capitalize text-sm"},yP={class:"w-16 rounded object-cover"},vP={class:"flex flex-col"},_P={class:"break-line text-lg"},wP={class:"break-line text-gray-400 font-light"},EP={key:3,class:"text-xl text-center py-1"},Yc=et({props:{filmsUnComing:null,filmsTop:null,filmsRecent:null,loading:{type:Boolean}},setup(t){return(e,n)=>{var i;const r=Ir("router-link"),s=Ln("lazy");return t.loading?(D(),M("ul",rP,[(D(),M(de,null,Ct(4,o=>v("li",{class:"flex gap-2 p-1",key:o},iP)),64))])):(D(),M("ul",oP,[t.filmsUnComing?(D(!0),M(de,{key:0},Ct(t.filmsUnComing,o=>(D(),M("li",{class:"border-b last:border-0 border-stone-500 border-opacity-50",key:o._id},[te(r,{class:"flex gap-2 p-1 hover:bg-gray-600 hover:bg-opacity-30",to:{name:"Watch",params:{slug:o.slug}}},{default:ht(()=>[Nt(v("img",aP,null,512),[[s,Ae(ci)(o.thumb_url,Ae(is))]]),v("div",cP,[v("h2",lP,pe(o.name),1),v("span",uP,pe(o.origin_name),1),v("span",hP,pe(o.time.length?o.time:"N/A"),1)])]),_:2},1032,["to"])]))),128)):(i=t.filmsTop)!=null&&i.length?(D(!0),M(de,{key:1},Ct(t.filmsTop,o=>(D(),M("li",{class:"border-b last:border-0 border-stone-500 border-opacity-50",key:o.slug},[te(r,{class:"flex gap-2 p-1 hover:bg-gray-600 hover:bg-opacity-30",to:"/watch/"+o.slug},{default:ht(()=>[Nt(v("img",dP,null,512),[[s,Ae(ci)(o.thumb_url,Ae(is))]]),v("div",fP,[v("h2",pP,pe(o.name),1),v("span",mP,pe(o.name),1),v("span",gP,pe(o==null?void 0:o.country)+" - "+pe(o.year?o.year:"N/A"),1)])]),_:2},1032,["to"])]))),128)):t.filmsRecent?(D(!0),M(de,{key:2},Ct(t.filmsRecent,o=>(D(),M("li",{class:"border-b last:border-0 border-stone-500 border-opacity-50",key:o.slug},[te(r,{class:"flex gap-2 p-1 hover:bg-gray-600 hover:bg-opacity-30",to:{name:"Watch",params:{slug:o.slug},query:{episode_index:o.epLastest}}},{default:ht(()=>[Nt(v("img",yP,null,512),[[s,Ae(ci)(o.thumb_url,Ae(is))]]),v("div",vP,[v("h2",_P,pe(o.name),1),v("span",wP,pe(o.name),1),v("span",null,"V\u1EEBa xem t\u1EADp "+pe(o.epLastestName),1)])]),_:2},1032,["to"])]))),128)):(D(),M("h3",EP,"Kh\xF4ng c\xF3 l\u1ECBch s\u1EED xem"))]))}}}),bP={key:0,class:"h-9 md:h-10 bg-rem-so-dark mt-3 md:mt-4"},TP={key:1,class:"flex bg-rem-so-dark mt-3 md:mt-4 overflow-hidden"},IP={class:"flex relative ml-5 py-1 px-8 font-semibold text-xl bg-rem-color text-rem-dark lg:text-2xl z-2 before:absolute before:content-[''] before:top-0 before:w-[30px] before:h-[30px] before:left-0 before:z-1 before:rotate-45 before:translate-x-[-14px] before:translate-y-[2px] lg:before:translate-y-[5px] before:bg-rem-so-dark after:absolute after:content-[''] after:top-0 after:w-[30px] after:h-[30px] after:z-0 after:right-0 after:bg-rem-color after:rotate-45 after:translate-x-[14px] after:translate-y-[2px] lg:after:translate-y-[5px]"},Po=et({props:{title:null,loading:{type:Boolean}},setup(t){return(e,n)=>t.loading?(D(),M("div",bP)):(D(),M("div",TP,[v("h1",IP,pe(t.title),1)]))}}),AP={class:"flex flex-col gap-4 w-full lg:w-[35%]"},SP=et({setup(t){const e=Ia(),n=le(!1),r=le(!1),s=le(!1),i=le(void 0),o=le(void 0),a=le(void 0),c=_m(()=>e.getters.getUser),l=()=>{n.value=!0,D_("phim-sap-chieu").then(d=>{n.value=!1,i.value=d})},u=()=>{r.value=!0,dk(ap(ip(Zl,"films"),ck("year",">",new Date().getFullYear()-1),cp("year","desc"),lp(10))).then(d=>{r.value=!1,o.value=d.docs.map(f=>f.data())})},h=()=>{!c.value||(s.value=!0,pk(ap(ip(Zl,`users/${c.value.uid}/recent`),cp("createdAt","desc"),lp(10)),d=>{s.value=!1,a.value=d.docs.map(f=>f.data())}))};return As(()=>{l(),u()}),Xt(()=>c.value,d=>{d&&h()}),(d,f)=>{var m;return D(),M("div",AP,[te(Po,{loading:n.value,title:"S\u1EAFp chi\u1EBFu"},null,8,["loading"]),te(Yc,{loading:n.value,"films-un-coming":(m=i.value)==null?void 0:m.items},null,8,["loading","films-un-coming"]),te(Po,{loading:r.value,title:"BXH trong n\u0103m"},null,8,["loading"]),te(Yc,{loading:r.value,"films-top":o.value},null,8,["loading","films-top"]),Ae(c)?(D(),Wt(Po,{key:0,loading:s.value,title:"Xem g\u1EA7n \u0111\xE2y"},null,8,["loading"])):Re("",!0),Ae(c)?(D(),Wt(Yc,{key:1,loading:s.value,"films-recent":a.value},null,8,["loading","films-recent"])):Re("",!0)])}}}),CP={class:"rem-container flex flex-col lg:flex-row gap-4"},kP={class:"w-full lg:w-[65%] min-h-screen"},xP=et({setup(t){const e=Ia();return XT(sd,n=>{if(n){const r={uid:n.uid,email:n.email,displayName:n.displayName,photoURL:n.photoURL,createdAt:n.metadata.creationTime};fk(Bv(Zl,"users",n.uid),r),e.dispatch(Es.SET_USER,r)}else e.dispatch(Es.SET_USER,null)}),(n,r)=>{const s=Ir("router-view");return D(),M(de,null,[te(QD),v("div",CP,[v("div",kP,[te(s)]),te(SP)]),te(nP)],64)}}}),RP="modulepreload",qp={},OP="/",Ks=function(e,n){return!n||n.length===0?e():Promise.all(n.map(r=>{if(r=`${OP}${r}`,r in qp)return;qp[r]=!0;const s=r.endsWith(".css"),i=s?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${r}"]${i}`))return;const o=document.createElement("link");if(o.rel=s?"stylesheet":RP,s||(o.as="script",o.crossOrigin=""),o.href=r,document.head.appendChild(o),s)return new Promise((a,c)=>{o.addEventListener("load",a),o.addEventListener("error",()=>c(new Error(`Unable to preload CSS for ${r}`)))})})).then(()=>e())},NP={class:"grid grid-cols-2 gap-2 sm:gap-4 md:gap-6 sm:grid-cols-3 md:grid-cols-4 p-1 lg:p-2"},DP={class:"w-full overflow-hidden relative"},PP={class:"px-2 text-sm py-[2px] border z-10 bg-rem-quiet-dark border-gray-500 rounded absolute top-2 left-3"},LP={class:"img pb-[145%] bg-rem-quiet-dark bg-cover",lazy:"loaded"},MP=["title"],UP={class:"flex w-full absolute bottom-[-1px] z-10 left-0 overflow-hidden bg-rem-so-dark"},$P=["title"],FP=et({props:{list:null},setup(t){return(e,n)=>{const r=Ir("router-link"),s=Ln("lazy");return D(),M("div",NP,[(D(!0),M(de,null,Ct(t.list,i=>(D(),M("div",{class:"flex relative w-full h-fit drop-shadow-lg",key:i._id},[te(r,{class:"no-underline w-full h-fit",to:{name:"Watch",params:{slug:i.slug}}},{default:ht(()=>[v("div",DP,[v("span",PP,pe(i.episode_current),1),Nt(v("div",LP,null,512),[[s,Ae(ci)(i.thumb_url,Ae(is)),"background-image"]]),v("span",{class:"px-2 py-2 text-sm lg:text-base absolute bottom-8 z-10 ts-lg bg-gradient-to-t from-rem-dark to-transparent w-full",title:i.lang+" - "+i.quality},pe(i.lang+" - "+i.quality),9,MP)])]),_:2},1032,["to"]),v("div",UP,[v("h3",{class:"text-lg px-3 py-1 break-line",title:i.name+" - "+i.year},pe(i.name+" - "+i.year||"N/A"),9,$P)])]))),128))])}}}),BP={class:"flex justify-center mt-4 md:mt-8"},VP={class:"flex font-semibold"},jP={key:0},qP=v("span",{class:"material-icons-outlined"},"arrow_back_ios",-1),HP=[qP],zP={key:1,class:"flex h-10 w-10 items-center justify-center"},KP={key:2,class:"flex h-10 w-10 items-center justify-center"},GP=v("span",null,". . .",-1),WP=[GP],QP={key:3,class:"flex h-10 w-10 items-center justify-center"},XP=v("span",null,". . .",-1),YP=[XP],JP={key:4,class:"flex h-10 w-10 items-center justify-center"},ZP={key:5,class:"flex h-10 w-10 items-center justify-center"},eL=v("span",{class:"material-icons-outlined"},"arrow_forward_ios",-1),tL=[eL],nL=et({props:{currentPage:null,totalPages:null},emits:["change-page","check-page"],setup(t){const n=le(t.currentPage);return(r,s)=>(D(),M("div",BP,[v("ul",VP,[n.value>1?(D(),M("li",jP,[v("button",{class:"flex h-10 w-10 items-center justify-center",onClick:s[0]||(s[0]=i=>r.$emit("change-page",n.value-1))},HP)])):Re("",!0),n.value>1?(D(),M("li",zP,[v("button",{onClick:s[1]||(s[1]=i=>r.$emit("change-page",1))},"1")])):Re("",!0),n.value>2?(D(),M("li",KP,WP)):Re("",!0),v("li",null,[v("form",{class:"border mx-2 border-zinc-500",onSubmit:s[4]||(s[4]=Xm(i=>r.$emit("change-page",n.value),["prevent"]))},[Nt(v("input",{class:"h-9 w-9 text-rem-color bg-transparent text-center outline-0",type:"number","onUpdate:modelValue":s[2]||(s[2]=i=>n.value=i),onInput:s[3]||(s[3]=i=>r.$emit("check-page",n.value)),autocomplete:"off"},null,544),[[Qm,n.value]])],32)]),n.value<t.totalPages-1?(D(),M("li",QP,YP)):Re("",!0),n.value<t.totalPages?(D(),M("li",JP,[v("button",{onClick:s[5]||(s[5]=i=>r.$emit("change-page",t.totalPages))},pe(t.totalPages),1)])):Re("",!0),n.value<t.totalPages?(D(),M("li",ZP,[v("button",{onClick:s[6]||(s[6]=i=>r.$emit("change-page",n.value+1))},tL)])):Re("",!0)])]))}}),rL=v("span",{class:"material-icons-outlined text-rem-color text-2xl font-bold leading-none"}," expand_less ",-1),sL=[rL],iL=et({setup(t){const e=le(!1),n=()=>{window.pageYOffset>1e3?e.value=!0:e.value=!1},r=()=>window.scrollTo({top:0,behavior:"smooth"});return window.addEventListener("scroll",n),Om(()=>window.removeEventListener("scroll",n)),(s,i)=>e.value?(D(),M("button",{key:0,class:"flex p-2 md:p-3 border border-rem-color hover:bg-rem-color hover:bg-opacity-30 rounded-md fixed right-5 bottom-5 md:right-10 md:bottom:10 transition-all z-30",onClick:r},sL)):Re("",!0)}}),oL={},aL={class:"grid grid-cols-2 gap-2 sm:gap-4 md:gap-6 sm:grid-cols-3 md:grid-cols-4 p-1 lg:p-2"};function cL(t,e){return D(),M("div",aL,[(D(),M(de,null,Ct(24,n=>v("div",{class:"skt-item flex relative w-full pb-[135%] drop-shadow-lg bg-rem-so-dark",key:n})),64))])}var lL=J_(oL,[["render",cL]]),uL="/rem404.png";const hL={class:"w-[100vw] h-[100vh] fixed z-10 bg-rem-dark left-0 top-0"},dL=v("p",{class:"font-light text-center max-w-[85%] sm:text-lg"}," B\u1EA1n v\u1EEBa l\u1EA1c isekai v\xE0o th\u1EBF gi\u1EDBi alime. Nh\u01B0ng r\u1EA5t ti\u1EBFc th\u1EBF gi\u1EDBi n\xE0y kh\xF4ng c\xF3 g\xEC :(( ",-1),fL=v("h1",{class:"text-white text-6xl sm:text-8xl font-thin"},"404",-1),pL=v("h2",{class:"text-rem-color text-4xl sm:text-6xl font-extralight"},"Not Found",-1),mL=v("img",{class:"w-[200px]",src:uL},null,-1),Z_=et({setup(t){const e=le(null),n=qh();As(()=>{document.body.style.overflow="hidden",document.title="Not Found | 404"}),Di(()=>{document.body.style.overflow="auto"});const r=i=>{let o=i.clientX/5,a=i.clientY/5;e.value.style.backgroundPositionX=o+"px",e.value.style.backgroundPositionY=a+"px"},s=()=>n.back();return(i,o)=>(D(),M("div",hL,[v("div",{class:"flex w-full h-full items-center justify-center flex-col",style:Tr({backgroundImage:"url(/p404.png)"}),ref_key:"container",ref:e,onMousemove:r},[dL,fL,pL,mL,v("button",{class:"border text-lg px-4 mt-4 border-rem-color text-rem-color hover:bg-rem-color hover:bg-opacity-40",onClick:s}," Tr\u1EDF v\u1EC1 ")],36)]))}}),gL={key:1,class:"w-full px-2 pb-4 md:pb-8"},yL=et({setup(t){const e=qh(),n=d_(),r=le(!1),s=le(),i=le(n.query.page||1),o=le(1),a=le(!1),c=le("Rem | Phim m\u1EDBi"),l=async d=>{c.value=d>1?"Trang "+d:"Phim M\u1EDBi C\u1EADp Nh\u1EADt",document.title="Rem | Phim M\u1EDBi C\u1EADp Nh\u1EADt"+(d>1?" | Trang "+d:""),r.value=!0,a.value=!1,D_("phim-moi",{page:d}).then(f=>{o.value=Math.ceil(f.pagination.totalItems/f.pagination.totalItemsPerPage),s.value=f}).catch(()=>{a.value=!0}).finally(()=>r.value=!1)},u=d=>(d<1?d=1:d>o.value&&(d=o.value),i.value=d,d),h=d=>{e.push({path:"/",query:{page:u(d)}})};return As(()=>l(i.value)),Xt(()=>n.query.page,()=>{n.name==="Home"&&(l(i.value),window.scrollTo({top:0,behavior:"smooth"}))},{deep:!0}),(d,f)=>{var m;return a.value?(D(),Wt(Z_,{key:0})):(D(),M("div",gL,[te(Po,{loading:r.value,title:c.value},null,8,["loading","title"]),r.value?(D(),Wt(lL,{key:1,class:"mt-8"})):(D(),Wt(FP,{key:0,class:"mt-8",list:((m=s.value)==null?void 0:m.items)||[]},null,8,["list"])),r.value?Re("",!0):(D(),Wt(nL,{key:2,currentPage:i.value||1,totalPages:o.value,onChangePage:h,onCheckPage:u},null,8,["currentPage","totalPages"])),te(iL)]))}}}),vL=[{path:"/",name:"Home",component:yL},{path:"/list/:slug",name:"List",component:()=>Ks(()=>import("./RemBrowser.3bf73d12.js"),[])},{path:"/category/:path/:slug",name:"Category",component:()=>Ks(()=>import("./RemCategory.14e693ec.js"),[])},{path:"/watch/:slug",name:"Watch",component:()=>Ks(()=>import("./RemWatch.321045ed.js"),["assets/RemWatch.321045ed.js","assets/RemWatch.756ca428.css"])},{path:"/search",name:"Search",component:()=>Ks(()=>import("./RemSearch.bb408701.js"),["assets/RemSearch.bb408701.js","assets/RemSearch.e6f17253.css"])},{path:"/history",name:"History",component:()=>Ks(()=>import("./RemHistory.aa613e17.js"),["assets/RemHistory.aa613e17.js","assets/RemHistory.32f0f45e.css"])},{path:"/:pathMatch(.*)*",name:"Error",component:Z_}],_L=yx({history:Dk(),routes:vL}),wL={user:null,isLoading:!1,isSignInOpen:!1,isDarkTheme:!1,error:null},EL={getUser:t=>t.user,getTheme:t=>t.isDarkTheme,getError:t=>t.error,getSignInState:t=>t.isSignInOpen,getLoading:t=>t.isLoading},bL={state:wL,getters:EL,mutations:uD,actions:hD};var TL=Yb({modules:{userModule:bL}});function ew(t,e){return t(e={exports:{}},e.exports),e.exports}var tu=ew(function(t){var e=Object.prototype.toString,n=Object.prototype.propertyIsEnumerable,r=Object.getOwnPropertySymbols;function s(i){return typeof i=="function"||e.call(i)==="[object Object]"||Array.isArray(i)}t.exports=function(i){for(var o=arguments.length,a=Array(o>1?o-1:0),c=1;c<o;c++)a[c-1]=arguments[c];if(!s(i))throw new TypeError("expected the first argument to be an object");if(a.length===0||typeof Symbol!="function"||typeof r!="function")return i;var l=!0,u=!1,h=void 0;try{for(var d,f=a[Symbol.iterator]();!(l=(d=f.next()).done);l=!0){var m=d.value,E=r(m),_=!0,y=!1,C=void 0;try{for(var L,F=E[Symbol.iterator]();!(_=(L=F.next()).done);_=!0){var re=L.value;n.call(m,re)&&(i[re]=m[re])}}catch(ce){y=!0,C=ce}finally{try{!_&&F.return&&F.return()}finally{if(y)throw C}}}}catch(ce){u=!0,h=ce}finally{try{!l&&f.return&&f.return()}finally{if(u)throw h}}return i}}),Hp=Object.freeze({__proto__:null,default:tu,__moduleExports:tu}),IL=Hp&&tu||Hp,tw=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},no=function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")},ro=function(){function t(e,n){for(var r=0;r<n.length;r++){var s=n[r];s.enumerable=s.enumerable||!1,s.configurable=!0,"value"in s&&(s.writable=!0),Object.defineProperty(e,s.key,s)}}return function(e,n,r){return n&&t(e.prototype,n),r&&t(e,r),e}}(),nu=ew(function(t){var e=Object.prototype.toString,n=function(o){return o!=="__proto__"&&o!=="constructor"&&o!=="prototype"},r=t.exports=function(o){for(var a=arguments.length,c=Array(a>1?a-1:0),l=1;l<a;l++)c[l-1]=arguments[l];var u=0;for(i(o)&&(o=c[u++]),o||(o={});u<c.length;u++)if(s(c[u])){var h=!0,d=!1,f=void 0;try{for(var m,E=Object.keys(c[u])[Symbol.iterator]();!(h=(m=E.next()).done);h=!0){var _=m.value;n(_)&&(s(o[_])&&s(c[u][_])?r(o[_],c[u][_]):o[_]=c[u][_])}}catch(y){d=!0,f=y}finally{try{!h&&E.return&&E.return()}finally{if(d)throw f}}IL(o,c[u])}return o};function s(o){return typeof o=="function"||e.call(o)==="[object Object]"}function i(o){return(o===void 0?"undefined":tw(o))==="object"?o===null:typeof o!="function"}}),Fn=typeof window!="undefined"&&window!==null,zp=function(){return Fn&&"IntersectionObserver"in window&&"IntersectionObserverEntry"in window&&"intersectionRatio"in window.IntersectionObserverEntry.prototype?("isIntersecting"in window.IntersectionObserverEntry.prototype||Object.defineProperty(window.IntersectionObserverEntry.prototype,"isIntersecting",{get:function(){return this.intersectionRatio>0}}),!0):!1}(),Gs="event",Kp="observer";function Js(t,e){if(t.length){var n=t.indexOf(e);return n>-1?t.splice(n,1):void 0}}function Gp(t,e){if(t.tagName!=="IMG"||!t.getAttribute("data-srcset"))return"";var n=t.getAttribute("data-srcset").trim().split(","),r=[],s=t.parentNode.offsetWidth*e,i=void 0,o=void 0,a=void 0;n.forEach(function(d){d=d.trim(),(i=d.lastIndexOf(" "))===-1?(o=d,a=99999):(o=d.substr(0,i),a=parseInt(d.substr(i+1,d.length-i-2),10)),r.push([a,o])}),r.sort(function(d,f){if(d[0]<f[0])return 1;if(d[0]>f[0])return-1;if(d[0]===f[0]){if(f[1].indexOf(".webp",f[1].length-5)!==-1)return 1;if(d[1].indexOf(".webp",d[1].length-5)!==-1)return-1}return 0});for(var c="",l=void 0,u=0;u<r.length;u++){c=(l=r[u])[1];var h=r[u+1];if(h&&h[0]<s){c=l[1];break}if(!h){c=l[1];break}}return c}var AL=function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:1;return Fn&&window.devicePixelRatio||t};function SL(){if(!Fn)return!1;var t=!0;function e(n,r){var s=new Image;s.onload=function(){var i=s.width>0&&s.height>0;r(i)},s.onerror=function(){r(!1)},s.src="data:image/webp;base64,"+{lossy:"UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEADsD+JaQAA3AAAAAA",lossless:"UklGRhoAAABXRUJQVlA4TA0AAAAvAAAAEAcQERGIiP4HAA==",alpha:"UklGRkoAAABXRUJQVlA4WAoAAAAQAAAAAAAAAAAAQUxQSAwAAAARBxAR/Q9ERP8DAABWUDggGAAAABQBAJ0BKgEAAQAAAP4AAA3AAP7mtQAAAA==",animation:"UklGRlIAAABXRUJQVlA4WAoAAAASAAAAAAAAAAAAQU5JTQYAAAD/////AABBTk1GJgAAAAAAAAAAAAAAAAAAAGQAAABWUDhMDQAAAC8AAAAQBxAREYiI/gcA"}[n]}return e("lossy",function(n){t=n}),e("lossless",function(n){t=n}),e("alpha",function(n){t=n}),e("animation",function(n){t=n}),t}var CL=function(){if(!Fn)return!1;var t=!1;try{var e=Object.defineProperty({},"passive",{get:function(){t=!0}});window.addEventListener("test",id,e)}catch{}return t}(),kL={on:function(t,e,n){var r=arguments.length>3&&arguments[3]!==void 0&&arguments[3];CL?t.addEventListener(e,n,{capture:r,passive:!0}):t.addEventListener(e,n,r)},off:function(t,e,n){var r=arguments.length>3&&arguments[3]!==void 0&&arguments[3];t.removeEventListener(e,n,r)}},ru=function(t,e,n){var r=new Image;if(!t||!t.src){var s=new Error("image src is required");return n(s)}t.cors&&(r.crossOrigin=t.cors),r.src=t.src,r.onload=function(){e({naturalHeight:r.naturalHeight,naturalWidth:r.naturalWidth,src:r.src}),r=null},r.onerror=function(i){n(i)}},Jc=function(t,e){return typeof getComputedStyle!="undefined"?getComputedStyle(t,null).getPropertyValue(e):t.style[e]},xL=function(t){return Jc(t,"overflow")+Jc(t,"overflowY")+Jc(t,"overflowX")};function id(){}var RL=function(){function t(e){no(this,t),this.max=e||100,this._caches=[]}return ro(t,[{key:"has",value:function(e){return this._caches.indexOf(e)>-1}},{key:"add",value:function(e){this.has(e)||(this._caches.push(e),this._caches.length>this.max&&this.free())}},{key:"free",value:function(){this._caches.shift()}}]),t}(),OL=function(){function t(e,n,r,s,i,o,a,c,l,u){no(this,t),this.el=e,this.src=n,this.error=r,this.loading=s,this.bindType=i,this.attempt=0,this.cors=c,this.naturalHeight=0,this.naturalWidth=0,this.options=a,this.rect={},this.$parent=o,this.elRenderer=l,this._imageCache=u,this.performanceData={init:Date.now(),loadStart:0,loadEnd:0},this.filter(),this.initState(),this.render("loading",!1)}return ro(t,[{key:"initState",value:function(){"dataset"in this.el?this.el.dataset.src=this.src:this.el.setAttribute("data-src",this.src),this.state={loading:!1,error:!1,loaded:!1,rendered:!1}}},{key:"record",value:function(e){this.performanceData[e]=Date.now()}},{key:"update",value:function(e){var n=this.src;this.src=e.src,this.loading=e.loading,this.error=e.error,this.filter(),n!==this.src&&(this.attempt=0,this.initState())}},{key:"getRect",value:function(){this.rect=this.el.getBoundingClientRect()}},{key:"checkInView",value:function(){return this.getRect(),this.rect.top<window.innerHeight*this.options.preLoad&&this.rect.bottom>this.options.preLoadTop&&this.rect.left<window.innerWidth*this.options.preLoad&&this.rect.right>0}},{key:"filter",value:function(){for(var e in this.options.filter)this.options.filter[e](this,this.options)}},{key:"renderLoading",value:function(e){var n=this;this.state.loading=!0,ru({src:this.loading,cors:this.cors},function(){n.render("loading",!1),n.state.loading=!1,e()},function(){e(),n.state.loading=!1,n.options.silent||console.warn("VueLazyload log: load failed with loading image("+n.loading+")")})}},{key:"load",value:function(){var e=this,n=arguments.length>0&&arguments[0]!==void 0?arguments[0]:id;return this.attempt>this.options.attempt-1&&this.state.error?(this.options.silent||console.log("VueLazyload log: "+this.src+" tried too more than "+this.options.attempt+" times"),void n()):this.state.rendered&&this.state.loaded?void 0:this._imageCache.has(this.src)?(this.state.loaded=!0,this.render("loaded",!0),this.state.rendered=!0,n()):void this.renderLoading(function(){e.attempt++,e.options.adapter.beforeLoad&&e.options.adapter.beforeLoad(e,e.options),e.record("loadStart"),ru({src:e.src,cors:e.cors},function(r){e.naturalHeight=r.naturalHeight,e.naturalWidth=r.naturalWidth,e.state.loaded=!0,e.state.error=!1,e.record("loadEnd"),e.render("loaded",!1),e.state.rendered=!0,e._imageCache.add(e.src),n()},function(r){!e.options.silent&&console.error(r),e.state.error=!0,e.state.loaded=!1,e.render("error",!1)})})}},{key:"render",value:function(e,n){this.elRenderer(this,e,n)}},{key:"performance",value:function(){var e="loading",n=0;return this.state.loaded&&(e="loaded",n=(this.performanceData.loadEnd-this.performanceData.loadStart)/1e3),this.state.error&&(e="error"),{src:this.src,state:e,time:n}}},{key:"$destroy",value:function(){this.el=null,this.src="",this.error=null,this.loading="",this.bindType=null,this.attempt=0}}]),t}(),Wp="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7",NL=["scroll","wheel","mousewheel","resize","animationend","transitionend","touchmove"],DL={rootMargin:"0px",threshold:0},PL=function(){function t(e){var n,r,s,i,o=e.preLoad,a=e.error,c=e.throttleWait,l=e.preLoadTop,u=e.dispatchEvent,h=e.loading,d=e.attempt,f=e.silent,m=f===void 0||f,E=e.scale,_=e.listenEvents,y=e.filter,C=e.adapter,L=e.observer,F=e.observerOptions;no(this,t),this.version="__VUE_LAZYLOAD_NEXT_VERSION__",this.lazyContainerMananger=null,this.mode=Gs,this.ListenerQueue=[],this.TargetIndex=0,this.TargetQueue=[],this.options={silent:m,dispatchEvent:!!u,throttleWait:c||200,preLoad:o||1.3,preLoadTop:l||0,error:a||Wp,loading:h||Wp,attempt:d||3,scale:E||AL(E),listenEvents:_||NL,supportWebp:SL(),filter:y||{},adapter:C||{},observer:!!L,observerOptions:F||DL},this._initEvent(),this._imageCache=new RL(200),this.lazyLoadHandler=(n=this._lazyLoadHandler.bind(this),r=this.options.throttleWait,s=null,i=0,function(){if(!s){var re=Date.now()-i,ce=this,Ne=arguments,Ke=function(){i=Date.now(),s=!1,n.apply(ce,Ne)};re>=r?Ke():s=setTimeout(Ke,r)}}),this.setMode(this.options.observer?Kp:Gs)}return ro(t,[{key:"config",value:function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};nu(this.options,e)}},{key:"performance",value:function(){var e=[];return this.ListenerQueue.map(function(n){return e.push(n.performance())}),e}},{key:"addLazyBox",value:function(e){this.ListenerQueue.push(e),Fn&&(this._addListenerTarget(window),this._observer&&this._observer.observe(e.el),e.$el&&e.$el.parentNode&&this._addListenerTarget(e.$el.parentNode))}},{key:"add",value:function(e,n,r){var s=this;if(this.ListenerQueue.some(function(u){return u.el===e}))return this.update(e,n),Gr(this.lazyLoadHandler);var i=this._valueFormatter(n.value),o=i.src,a=i.loading,c=i.error,l=i.cors;Gr(function(){o=Gp(e,s.options.scale)||o,s._observer&&s._observer.observe(e);var u=Object.keys(n.modifiers)[0],h=void 0;u&&(h=(h=n.instance.$refs[u])?h.el||h:document.getElementById(u)),h||(h=function(f){if(Fn){if(!(f instanceof Element))return window;for(var m=f;m&&m!==document.body&&m!==document.documentElement&&m.parentNode;){if(/(scroll|auto)/.test(xL(m)))return m;m=m.parentNode}return window}}(e));var d=new OL(e,o,c,a,n.arg,h,s.options,l,s._elRenderer.bind(s),s._imageCache);s.ListenerQueue.push(d),Fn&&(s._addListenerTarget(window),s._addListenerTarget(h)),Gr(function(){return s.lazyLoadHandler()})})}},{key:"update",value:function(e,n,r){var s=this,i=this._valueFormatter(n.value),o=i.src,a=i.loading,c=i.error;o=Gp(e,this.options.scale)||o;var l=this.ListenerQueue.find(function(u){return u.el===e});l?l.update({src:o,loading:a,error:c}):this.add(e,n,r),this._observer&&(this._observer.unobserve(e),this._observer.observe(e)),Gr(function(){return s.lazyLoadHandler()})}},{key:"remove",value:function(e){if(e){this._observer&&this._observer.unobserve(e);var n=this.ListenerQueue.find(function(r){return r.el===e});n&&(this._removeListenerTarget(n.$parent),this._removeListenerTarget(window),Js(this.ListenerQueue,n),n.$destroy&&n.$destroy())}}},{key:"removeComponent",value:function(e){e&&(Js(this.ListenerQueue,e),this._observer&&this._observer.unobserve(e.el),e.$parent&&e.$el.parentNode&&this._removeListenerTarget(e.$el.parentNode),this._removeListenerTarget(window))}},{key:"setMode",value:function(e){var n=this;zp||e!==Kp||(e=Gs),this.mode=e,e===Gs?(this._observer&&(this.ListenerQueue.forEach(function(r){n._observer.unobserve(r.el)}),this._observer=null),this.TargetQueue.forEach(function(r){n._initListen(r.el,!0)})):(this.TargetQueue.forEach(function(r){n._initListen(r.el,!1)}),this._initIntersectionObserver())}},{key:"_addListenerTarget",value:function(e){if(e){var n=this.TargetQueue.find(function(r){return r.el===e});return n?n.childrenCount++:(n={el:e,id:++this.TargetIndex,childrenCount:1,listened:!0},this.mode===Gs&&this._initListen(n.el,!0),this.TargetQueue.push(n)),this.TargetIndex}}},{key:"_removeListenerTarget",value:function(e){var n=this;this.TargetQueue.forEach(function(r,s){r.el===e&&(r.childrenCount--,r.childrenCount||(n._initListen(r.el,!1),n.TargetQueue.splice(s,1),r=null))})}},{key:"_initListen",value:function(e,n){var r=this;this.options.listenEvents.forEach(function(s){return kL[n?"on":"off"](e,s,r.lazyLoadHandler)})}},{key:"_initEvent",value:function(){var e=this;this.Event={listeners:{loading:[],loaded:[],error:[]}},this.$on=function(n,r){e.Event.listeners[n]||(e.Event.listeners[n]=[]),e.Event.listeners[n].push(r)},this.$once=function(n,r){var s=e;e.$on(n,function i(){s.$off(n,i),r.apply(s,arguments)})},this.$off=function(n,r){if(r)Js(e.Event.listeners[n],r);else{if(!e.Event.listeners[n])return;e.Event.listeners[n].length=0}},this.$emit=function(n,r,s){e.Event.listeners[n]&&e.Event.listeners[n].forEach(function(i){return i(r,s)})}}},{key:"_lazyLoadHandler",value:function(){var e=this,n=[];this.ListenerQueue.forEach(function(r,s){r.el&&r.el.parentNode&&!r.state.loaded||n.push(r),r.checkInView()&&(r.state.loaded||r.load())}),n.forEach(function(r){Js(e.ListenerQueue,r),r.$destroy&&r.$destroy()})}},{key:"_initIntersectionObserver",value:function(){var e=this;zp&&(this._observer=new IntersectionObserver(this._observerHandler.bind(this),this.options.observerOptions),this.ListenerQueue.length&&this.ListenerQueue.forEach(function(n){e._observer.observe(n.el)}))}},{key:"_observerHandler",value:function(e){var n=this;e.forEach(function(r){r.isIntersecting&&n.ListenerQueue.forEach(function(s){if(s.el===r.target){if(s.state.loaded)return n._observer.unobserve(s.el);s.load()}})})}},{key:"_elRenderer",value:function(e,n,r){if(e.el){var s=e.el,i=e.bindType,o=void 0;switch(n){case"loading":o=e.loading;break;case"error":o=e.error;break;default:o=e.src}if(i?s.style[i]='url("'+o+'")':s.getAttribute("src")!==o&&s.setAttribute("src",o),s.setAttribute("lazy",n),this.$emit(n,e,r),this.options.adapter[n]&&this.options.adapter[n](e,this.options),this.options.dispatchEvent){var a=new CustomEvent(n,{detail:e});s.dispatchEvent(a)}}}},{key:"_valueFormatter",value:function(e){var n,r=e,s=this.options.loading,i=this.options.error,o=this.options.cors;return(n=e)!==null&&(n===void 0?"undefined":tw(n))==="object"&&(e.src||this.options.silent||console.error("Vue Lazyload Next warning: miss src with "+e),r=e.src,s=e.loading||this.options.loading,i=e.error||this.options.error),{src:r,loading:s,error:i,cors:o}}}]),t}(),nw=function(t,e){var n=tn({});return{rect:n,checkInView:function(){return n=t.value.getBoundingClientRect(),Fn&&n.top<window.innerHeight*e&&n.bottom>0&&n.left<window.innerWidth*e&&n.right>0}}},LL=function(t){return et({props:{tag:{type:String,default:"div"}},emits:["show"],setup:function(e,n){var r=n.emit,s=n.slots,i=le(null),o=tn({loaded:!1,error:!1,attempt:0}),a=le(!1),c=nw(i,t.options.preLoad),l=c.rect,u=c.checkInView,h=function(){a.value=!0,o.loaded=!0,r("show",a.value)},d=vt(function(){return{el:i.value,rect:l,checkInView:u,load:h,state:o}});return As(function(){t.addLazyBox(d.value),t.lazyLoadHandler()}),Di(function(){t.removeComponent(d.value)}),function(){var f;return te(e.tag,{ref:i},[a.value&&((f=s.default)===null||f===void 0?void 0:f.call(s))])}}})},ML=function(){function t(e){no(this,t),this.lazy=e,e.lazyContainerMananger=this,this._queue=[]}return ro(t,[{key:"bind",value:function(e,n,r){var s=new $L(e,n,r,this.lazy);this._queue.push(s)}},{key:"update",value:function(e,n,r){var s=this._queue.find(function(i){return i.el===e});s&&s.update(e,n)}},{key:"unbind",value:function(e,n,r){var s=this._queue.find(function(i){return i.el===e});s&&(s.clear(),Js(this._queue,s))}}]),t}(),UL={selector:"img",error:"",loading:""},$L=function(){function t(e,n,r,s){no(this,t),this.el=e,this.vnode=r,this.binding=n,this.options={},this.lazy=s,this._queue=[],this.update(e,n)}return ro(t,[{key:"update",value:function(e,n){var r=this;this.el=e,this.options=nu({},UL,n.value),this.getImgs().forEach(function(s){r.lazy.add(s,nu({},r.binding,{value:{src:s.getAttribute("data-src")||s.dataset.src,error:s.getAttribute("data-error")||s.dataset.error||r.options.error,loading:s.getAttribute("data-loading")||s.dataset.loading||r.options.loading}}),r.vnode)})}},{key:"getImgs",value:function(){return Array.from(this.el.querySelectorAll(this.options.selector))}},{key:"clear",value:function(){var e=this;this.getImgs().forEach(function(n){return e.lazy.remove(n)}),this.vnode=null,this.binding=null,this.lazy=null}}]),t}(),FL=function(t){return et({props:{src:[String,Object],tag:{type:String,default:"img"}},setup:function(e,n){var r=n.slots,s=le(null),i=tn({src:"",error:"",loading:"",attempt:t.options.attempt}),o=tn({loaded:!1,error:!1,attempt:0}),a=nw(s,t.options.preLoad),c=a.rect,l=a.checkInView,u=le(""),h=function(){var m=arguments.length>0&&arguments[0]!==void 0?arguments[0]:id;if(o.attempt>i.attempt-1&&o.error)return t.options.silent||console.log("VueLazyload log: "+i.src+" tried too more than "+i.attempt+" times"),void m();var E=i.src;ru({src:E},function(_){var y=_.src;u.value=y,o.loaded=!0},function(){o.attempt++,u.value=i.error,o.error=!0})},d=vt(function(){return{el:s.value,rect:c,checkInView:l,load:h,state:o}});As(function(){t.addLazyBox(d.value),t.lazyLoadHandler()}),Di(function(){t.removeComponent(d.value)});var f=function(){var m=t._valueFormatter(e.src),E=m.src,_=m.loading,y=m.error;o.loaded=!1,i.src=E,i.error=y,i.loading=_,u.value=i.loading};return Xt(function(){return e.src},function(){f(),t.addLazyBox(d.value),t.lazyLoadHandler()}),f(),function(){var m;return te(e.tag,{src:u.value,ref:s},[(m=r.default)===null||m===void 0?void 0:m.call(r)])}}})},BL={install:function(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=new PL(e),r=new ML(n),s=Number(t.version.split(".")[0]);if(s<3)return new Error("Vue version at least 3.0");t.config.globalProperties.$Lazyload=n,e.lazyComponent&&t.component("lazy-component",LL(n)),e.lazyImage&&t.component("lazy-image",FL(n)),t.directive("lazy",{beforeMount:n.add.bind(n),beforeUpdate:n.update.bind(n),updated:n.lazyLoadHandler.bind(n),unmounted:n.remove.bind(n)}),t.directive("lazy-container",{beforeMount:r.bind.bind(r),updated:r.update.bind(r),unmounted:r.unbind.bind(r)})}};const VL={mounted(t,e){const n=t.children[1];!e.value||(t.addEventListener("mousemove",()=>{n.classList.remove("opacity-0","pointer-events-none"),n.classList.add("opacity-1","pointer-events-auto")}),t.addEventListener("mouseleave",()=>{n.classList.remove("opacity-1","pointer-events-auto"),n.classList.add("opacity-0","pointer-events-none")}))}},jL={mounted(t){const e=t.nextSibling;t.addEventListener("click",()=>{e.classList.toggle("h-0")})}},qL={mounted(t){const e=t;let n=0;const r=()=>{window.pageYOffset>=55&&(window.pageYOffset>=n?e.style.top="-56px":e.style.top="0",n=window.pageYOffset)},s=()=>{window.pageYOffset>0?(e.classList.remove("bg-transparent"),e.classList.add("drop-shadow-lg","bg-rem-dark")):(e.classList.remove("drop-shadow-lg","bg-rem-dark"),e.classList.add("bg-transparent"))};window.addEventListener("scroll",()=>{r(),s()})}},HL={beforeMount:(t,e)=>{t.clickOutsideEvent=n=>{t==n.target||t.contains(n.target)||e==null||e.value()},document.addEventListener("click",t.clickOutsideEvent)},unmounted:t=>{document.removeEventListener("click",t.clickOutsideEvent)}},zL=Ab(xP);zL.directive("rem-dropdown",VL).directive("rem-mb-dropdown",jL).directive("rem-scrolltop",qL).directive("rem-click-away",HL).use(TL).use(_L).use(BL).mount("#app");export{cM as $,JL as A,Xr as B,p_ as C,Xm as D,Tr as E,de as F,f_ as G,Ae as H,Bv as I,iM as J,Nt as K,Qm as L,Ct as M,XL as N,me as O,YL as P,wu as Q,lL as R,Ia as S,vt as T,Ir as U,Ln as V,ht as W,nM as X,rM as Y,aM as Z,Po as _,Di as a,uM as a0,lM as a1,hM as a2,sM as a3,_M as a4,wM as a5,yM as a6,vM as a7,ZL as a8,ip as a9,oM as aa,pk as ab,ap as ac,cp as ad,Es as ae,lp as af,ck as ag,qh as ah,gM as ai,dM as aj,tM as ak,tn as al,pM as am,fM as an,vO as ao,bx as ap,dk as aq,ci as ar,is as as,Wt as b,M as c,et as d,Re as e,te as f,FP as g,D_ as h,m_ as i,D as j,iL as k,Z_ as l,mM as m,J_ as n,As as o,WL as p,QL as q,le as r,v as s,pe as t,d_ as u,Om as v,Xt as w,fk as x,eM as y,Zl as z};
