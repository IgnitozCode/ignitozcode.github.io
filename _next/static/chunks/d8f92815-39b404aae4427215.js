"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[480],{3818:(e,t,r)=>{r.d(t,{$n:()=>rr,AM:()=>oc,B3:()=>v,BI:()=>ns,BJ:()=>oj,CA:()=>tV,Co:()=>ny,Cy:()=>rc,D0:()=>j,DP:()=>eN,DZ:()=>rv,Dr:()=>nO,EA:()=>nJ,EY:()=>t0,EZ:()=>rA,Ex:()=>t2,GD:()=>r8,GE:()=>tU,IU:()=>nC,JU:()=>tA,KC:()=>I,Ki:()=>rY,Kp:()=>nY,NP:()=>eT,Nj:()=>nA,PR:()=>C,Qx:()=>x,Sc:()=>rl,U1:()=>R,W1:()=>nI,WP:()=>r6,Wd:()=>r2,X:()=>rJ,XS:()=>rK,Xy:()=>eH,Z4:()=>rL,ZL:()=>r7,Zp:()=>rn,aY:()=>eW,az:()=>tK,cF:()=>eR,cV:()=>rw,cZ:()=>eM,dO:()=>oI,dU:()=>rO,dj:()=>ir,eu:()=>tD,fs:()=>oN,gK:()=>eS,jT:()=>na,ks:()=>oq,l6:()=>oy,lG:()=>nw,m_:()=>o4,mc:()=>rp,oz:()=>nq,qW:()=>nj,r5:()=>nV,rX:()=>nF,s5:()=>rU,sQ:()=>eE,sU:()=>rF,sb:()=>rP,so:()=>t4,sx:()=>op,tE:()=>it,tH:()=>rW,vE:()=>o2,wb:()=>nU,wj:()=>oi,xA:()=>rb,y$:()=>t7});var o=r(24285),n=r(42029),i=r(95155),a=r(45054),l=r(12115),d=r(40583),s=r(65285),c=r(64775),u=r(53888),f=r(57205),p=r(96932),h=r(71714),b=r(25683),m=r(47650),g=r(84880);let v=o.B3,x=(0,o.me)(),w=[],y={},$="--motion-content-opacity",k={initial:{opacity:.5,[$]:0,scale:.97,willChange:"transform"},animate:{opacity:[null,1,1],[$]:[null,null,1],scale:1},exit:{opacity:[null,null,0],[$]:[null,0,0],scale:.97},transition:{duration:.4,type:"spring"}};function j(e){return 0===e?0:`${e/16}rem`}function R(e,t,r){return(t?.map(r)||[]).map((t,r)=>0===r?t:{[`@media screen and (min-width: ${e[r-1]}px)`]:t})}function E(e,t){return void 0===e?t||w:Array.isArray(e)?e:[e]}function S(e,t,r=w){if(!Array.isArray(r))throw Error("the property must be array of numbers");if(0===r.length)return null;let{media:o,space:i}=(0,n.JW)(e);return R(o,r,e=>{var r;return r=j(i[e]),t.reduce((e,t)=>(e[t]=r,e),{})})}function z(e,t){let{$size:r,$weight:o}=t,{font:i,media:a}=(0,n.JW)(t.theme),{family:l,sizes:d,weights:s}=i[e],c=o&&s[o]||s.regular,u=d[2],f={position:"relative",fontFamily:l,fontWeight:c,padding:"1px 0",margin:0,"&:before":{content:'""',display:"block",height:0},"&:after":{content:'""',display:"block",height:0},"& > code, & > span":{display:"block"},"&:not([hidden])":{display:"block"}};return r?[f,...R(a,r,e=>(function(e){let{ascenderHeight:t,descenderHeight:r,fontSize:o,iconSize:n,letterSpacing:i,lineHeight:a}=e,l=t+r,d=a-l,s=2*Math.floor(1.125*o/2)+1;return{fontSize:j(o),lineHeight:`calc(${a} / ${o})`,letterSpacing:j(i),transform:`translateY(${j(r)})`,"&:before":{marginTop:`calc(${j(0-l)} - 1px)`},"&:after":{marginBottom:"-1px"},"& svg:not([data-sanity-icon])":{fontSize:`calc(${s} / 16 * 1rem)`,margin:j((d-s)/2)},"& [data-sanity-icon]":{fontSize:`calc(${n} / 16 * 1rem)`,margin:j((d-n)/2)}}})(d[e]||u))]:(z.warned||(console.warn("No size specified for responsive font",{fontKey:e,$size:r,props:t,base:f}),z.warned=!0),[f])}function _(e){let{media:t}=(0,n.JW)(e.theme);return R(t,e.$align,e=>({textAlign:e}))}function I(e,t){let r;let o=(0,a.c)(3);o[0]!==t||o[1]!==e?(r=()=>[E(e,t),JSON.stringify(e??t)],o[0]=t,o[1]=e,o[2]=r):r=o[2];let[n,i]=(0,l.useState)(r),[d,s]=n,c=JSON.stringify(e??t);return c!==s&&i([E(e,t),c]),d}function C(e,t,r){let o,n,i;let d=(0,a.c)(8),s=void 0===t?T:t;d[0]!==r||d[1]!==s||d[2]!==e?(o=t=>{if(!e)return;let o=t.target;if(!(o instanceof Node))return;let n=r?.();if(!n||n.contains(o)){for(let e of s().flat())if(e&&(o===e||e.contains(o)))return;e(t)}},d[0]=r,d[1]=s,d[2]=e,d[3]=o):o=d[3];let c=(0,g.J)(o),u=!!e;d[4]!==u||d[5]!==c?(n=()=>{if(!u)return;let e=e=>c(e);return document.addEventListener("mousedown",e),()=>{document.removeEventListener("mousedown",e)}},i=[u,c],d[4]=u,d[5]=c,d[6]=n,d[7]=i):(n=d[6],i=d[7]),(0,l.useEffect)(n,i),(0,l.useDebugValue)(e?"MouseDown On":"MouseDown Off")}function T(){return w}function A(e,t){let r,o;let n=(0,a.c)(6);n[0]!==t||n[1]!==e.current?(r=()=>{e.current?.setCustomValidity(t||"")},n[0]=t,n[1]=e.current,n[2]=r):r=n[2],n[3]!==t||n[4]!==e?(o=[t,e],n[3]=t,n[4]=e,n[5]=o):o=n[5],(0,l.useEffect)(r,o)}var M,N=[],F="ResizeObserver loop completed with undelivered notifications.",O=function(){var e;"function"==typeof ErrorEvent?e=new ErrorEvent("error",{message:F}):((e=document.createEvent("Event")).initEvent("error",!1,!1),e.message=F),window.dispatchEvent(e)};!function(e){e.BORDER_BOX="border-box",e.CONTENT_BOX="content-box",e.DEVICE_PIXEL_CONTENT_BOX="device-pixel-content-box"}(M||(M={}));var W,H=function(e){return Object.freeze(e)},B=function(e,t){this.inlineSize=e,this.blockSize=t,H(this)},L=function(){function e(e,t,r,o){return this.x=e,this.y=t,this.width=r,this.height=o,this.top=this.y,this.left=this.x,this.bottom=this.top+this.height,this.right=this.left+this.width,H(this)}return e.prototype.toJSON=function(){var e=this.x,t=this.y,r=this.top,o=this.right,n=this.bottom;return{x:e,y:t,top:r,right:o,bottom:n,left:this.left,width:this.width,height:this.height}},e.fromRect=function(t){return new e(t.x,t.y,t.width,t.height)},e}(),D=function(e){return e instanceof SVGElement&&"getBBox"in e},J=function(e){if(D(e)){var t=e.getBBox(),r=t.width,o=t.height;return!r&&!o}var n=e.offsetWidth,i=e.offsetHeight;return!(n||i||e.getClientRects().length)},P=function(e){if(e instanceof Element)return!0;var t,r=null===(t=e?.ownerDocument)||void 0===t?void 0:t.defaultView;return!!(r&&e instanceof r.Element)},V=function(e){switch(e.tagName){case"INPUT":if("image"!==e.type)break;case"VIDEO":case"AUDIO":case"EMBED":case"OBJECT":case"CANVAS":case"IFRAME":case"IMG":return!0}return!1},X="u">typeof window?window:{},q=new WeakMap,G=/auto|scroll/,U=/^tb|vertical/,Y=/msie|trident/i.test(X.navigator&&X.navigator.userAgent),K=function(e){return parseFloat(e||"0")},Z=function(e,t,r){return void 0===e&&(e=0),void 0===t&&(t=0),void 0===r&&(r=!1),new B((r?t:e)||0,(r?e:t)||0)},Q=H({devicePixelContentBoxSize:Z(),borderBoxSize:Z(),contentBoxSize:Z(),contentRect:new L(0,0,0,0)}),ee=function(e,t){if(void 0===t&&(t=!1),q.has(e)&&!t)return q.get(e);if(J(e))return q.set(e,Q),Q;var r=getComputedStyle(e),o=D(e)&&e.ownerSVGElement&&e.getBBox(),n=!Y&&"border-box"===r.boxSizing,i=U.test(r.writingMode||""),a=!o&&G.test(r.overflowY||""),l=!o&&G.test(r.overflowX||""),d=o?0:K(r.paddingTop),s=o?0:K(r.paddingRight),c=o?0:K(r.paddingBottom),u=o?0:K(r.paddingLeft),f=o?0:K(r.borderTopWidth),p=o?0:K(r.borderRightWidth),h=o?0:K(r.borderBottomWidth),b=o?0:K(r.borderLeftWidth),m=u+s,g=d+c,v=b+p,x=f+h,w=l?e.offsetHeight-x-e.clientHeight:0,y=a?e.offsetWidth-v-e.clientWidth:0,$=o?o.width:K(r.width)-(n?m+v:0)-y,k=o?o.height:K(r.height)-(n?g+x:0)-w,j=$+m+y+v,R=k+g+w+x,E=H({devicePixelContentBoxSize:Z(Math.round($*devicePixelRatio),Math.round(k*devicePixelRatio),i),borderBoxSize:Z(j,R,i),contentBoxSize:Z($,k,i),contentRect:new L(u,d,$,k)});return q.set(e,E),E},et=function(e,t,r){var o=ee(e,r),n=o.borderBoxSize,i=o.contentBoxSize,a=o.devicePixelContentBoxSize;switch(t){case M.DEVICE_PIXEL_CONTENT_BOX:return a;case M.BORDER_BOX:return n;default:return i}},er=function(e){var t=ee(e);this.target=e,this.contentRect=t.contentRect,this.borderBoxSize=H([t.borderBoxSize]),this.contentBoxSize=H([t.contentBoxSize]),this.devicePixelContentBoxSize=H([t.devicePixelContentBoxSize])},eo=function(e){if(J(e))return 1/0;for(var t=0,r=e.parentNode;r;)t+=1,r=r.parentNode;return t},en=function(){var e=1/0,t=[];N.forEach(function(r){if(0!==r.activeTargets.length){var o=[];r.activeTargets.forEach(function(t){var r=new er(t.target),n=eo(t.target);o.push(r),t.lastReportedSize=et(t.target,t.observedBox),n<e&&(e=n)}),t.push(function(){r.callback.call(r.observer,o,r.observer)}),r.activeTargets.splice(0,r.activeTargets.length)}});for(var r=0;r<t.length;r++)(0,t[r])();return e},ei=function(e){N.forEach(function(t){t.activeTargets.splice(0,t.activeTargets.length),t.skippedTargets.splice(0,t.skippedTargets.length),t.observationTargets.forEach(function(r){r.isActive()&&(eo(r.target)>e?t.activeTargets.push(r):t.skippedTargets.push(r))})})},ea=function(){var e=0;for(ei(0);N.some(function(e){return e.activeTargets.length>0});)ei(e=en());return N.some(function(e){return e.skippedTargets.length>0})&&O(),e>0},el=[],ed=function(e){if(!W){var t=0,r=document.createTextNode("");new MutationObserver(function(){return el.splice(0).forEach(function(e){return e()})}).observe(r,{characterData:!0}),W=function(){r.textContent="".concat(t?t--:t++)}}el.push(e),W()},es=function(e){ed(function(){requestAnimationFrame(e)})},ec=0,eu={attributes:!0,characterData:!0,childList:!0,subtree:!0},ef=["resize","load","transitionend","animationend","animationstart","animationiteration","keyup","keydown","mouseup","mousedown","mouseover","mouseout","blur","focus"],ep=function(e){return void 0===e&&(e=0),Date.now()+e},eh=!1,eb=new(function(){function e(){var e=this;this.stopped=!0,this.listener=function(){return e.schedule()}}return e.prototype.run=function(e){var t=this;if(void 0===e&&(e=250),!eh){eh=!0;var r=ep(e);es(function(){var o=!1;try{o=ea()}finally{if(eh=!1,e=r-ep(),!ec)return;o?t.run(1e3):e>0?t.run(e):t.start()}})}},e.prototype.schedule=function(){this.stop(),this.run()},e.prototype.observe=function(){var e=this,t=function(){return e.observer&&e.observer.observe(document.body,eu)};document.body?t():X.addEventListener("DOMContentLoaded",t)},e.prototype.start=function(){var e=this;this.stopped&&(this.stopped=!1,this.observer=new MutationObserver(this.listener),this.observe(),ef.forEach(function(t){return X.addEventListener(t,e.listener,!0)}))},e.prototype.stop=function(){var e=this;this.stopped||(this.observer&&this.observer.disconnect(),ef.forEach(function(t){return X.removeEventListener(t,e.listener,!0)}),this.stopped=!0)},e}()),em=function(e){!ec&&e>0&&eb.start(),(ec+=e)||eb.stop()},eg=function(){function e(e,t){this.target=e,this.observedBox=t||M.CONTENT_BOX,this.lastReportedSize={inlineSize:0,blockSize:0}}return e.prototype.isActive=function(){var e,t=et(this.target,this.observedBox,!0);return D(e=this.target)||V(e)||"inline"!==getComputedStyle(e).display||(this.lastReportedSize=t),this.lastReportedSize.inlineSize!==t.inlineSize||this.lastReportedSize.blockSize!==t.blockSize},e}(),ev=function(e,t){this.activeTargets=[],this.skippedTargets=[],this.observationTargets=[],this.observer=e,this.callback=t},ex=new WeakMap,ew=function(e,t){for(var r=0;r<e.length;r+=1)if(e[r].target===t)return r;return -1},ey=function(){function e(){}return e.connect=function(e,t){var r=new ev(e,t);ex.set(e,r)},e.observe=function(e,t,r){var o=ex.get(e),n=0===o.observationTargets.length;0>ew(o.observationTargets,t)&&(n&&N.push(o),o.observationTargets.push(new eg(t,r&&r.box)),em(1),eb.schedule())},e.unobserve=function(e,t){var r=ex.get(e),o=ew(r.observationTargets,t),n=1===r.observationTargets.length;o>=0&&(n&&N.splice(N.indexOf(r),1),r.observationTargets.splice(o,1),em(-1))},e.disconnect=function(e){var t=this,r=ex.get(e);r.observationTargets.slice().forEach(function(r){return t.unobserve(e,r.target)}),r.activeTargets.splice(0,r.activeTargets.length)},e}(),e$=function(){function e(e){if(0==arguments.length)throw TypeError("Failed to construct 'ResizeObserver': 1 argument required, but only 0 present.");if("function"!=typeof e)throw TypeError("Failed to construct 'ResizeObserver': The callback provided as parameter 1 is not a function.");ey.connect(this,e)}return e.prototype.observe=function(e,t){if(0==arguments.length)throw TypeError("Failed to execute 'observe' on 'ResizeObserver': 1 argument required, but only 0 present.");if(!P(e))throw TypeError("Failed to execute 'observe' on 'ResizeObserver': parameter 1 is not of type 'Element");ey.observe(this,e,t)},e.prototype.unobserve=function(e){if(0==arguments.length)throw TypeError("Failed to execute 'unobserve' on 'ResizeObserver': 1 argument required, but only 0 present.");if(!P(e))throw TypeError("Failed to execute 'unobserve' on 'ResizeObserver': parameter 1 is not of type 'Element");ey.unobserve(this,e)},e.prototype.disconnect=function(){ey.disconnect(this)},e.toString=function(){return"function ResizeObserver () { [polyfill code] }"},e}();let ek="u">typeof document&&"u">typeof window&&window.ResizeObserver?window.ResizeObserver:e$,ej=function(){let e=new WeakMap,t=new WeakMap;return{subscribe(r,o){let n=t.get(r)||[],i=e.get(r);return t.has(r)||(t.set(r,n),i=({subscribe(e,t){let r=new ek(([e])=>{t({_contentRect:e.contentRect,border:{width:e.borderBoxSize[0].inlineSize,height:e.borderBoxSize[0].blockSize},content:{width:e.contentRect.width,height:e.contentRect.height}})});return r.observe(e),()=>{r.unobserve(e),r.disconnect()}}}).subscribe(r,e=>{for(let t of n)t(e)})),n.push(o),()=>{let e=n.indexOf(o);e>-1&&n.splice(e,1),0===n.length&&i&&i()}}}}();function eR(e){let t,r;let o=(0,a.c)(3),[n,i]=(0,l.useState)(null);return o[0]!==e?(t=()=>{if(e)return ej.subscribe(e,i)},r=[e],o[0]=e,o[1]=t,o[2]=r):(t=o[1],r=o[2]),(0,l.useEffect)(t,r),n}function eE(e){return eR(e)?._contentRect||null}function eS(e){let t,r,o;let n=(0,a.c)(5);n[0]!==e?(t=t=>e(t),n[0]=e,n[1]=t):t=n[1];let i=(0,g.J)(t);n[2]!==i?(r=()=>{let e=e=>i(e);return window.addEventListener("keydown",e),()=>window.removeEventListener("keydown",e)},o=[i],n[2]=i,n[3]=r,n[4]=o):(r=n[3],o=n[4]),(0,l.useEffect)(r,o)}function ez(e,t){let{subscribe:r,getSnapshot:o}=(0,l.useMemo)(()=>{let t;let r=()=>(t||(t=window.matchMedia(e)),t);return{subscribe:e=>{let t=r();return t.addEventListener("change",e),()=>t.removeEventListener("change",e)},getSnapshot:()=>r().matches}},[e]);return(0,l.useDebugValue)(e),(0,l.useSyncExternalStore)(r,o,t)}let e_=function(){if("u">typeof globalThis)return globalThis;if("u">typeof window)return window;if("u">typeof self)return self;if("u">typeof global)return global;throw Error("@sanity/ui: could not locate global scope")}();function eI(e,t){let r=Symbol.for(e);return typeof document>"u"?(0,l.createContext)(t):(e_[r]=e_[r]||(0,l.createContext)(t),e_[r])}let eC=eI("@sanity/ui/context/theme",null);function eT(e){let t,r,n,d;let c=(0,a.c)(15),u=(0,l.useContext)(eC),{children:f}=e,p=e.scheme??(u?.scheme||"light"),h=e.theme??(u?.theme||null),b=e.tone??(u?.tone||"default");e:{let e;if(!h){t=null;break e}c[0]!==h||c[1]!==p||c[2]!==b?(e={version:0,theme:h,scheme:p,tone:b},c[0]=h,c[1]=p,c[2]=b,c[3]=e):e=c[3],t=e}let m=t;t:{let e;if(!h){r=null;break t}c[4]!==h||c[5]!==p||c[6]!==b?(e=(0,o.sR)(h,p,b),c[4]=h,c[5]=p,c[6]=b,c[7]=e):e=c[7],r=e}let g=r;if(!g){let e;return c[8]===Symbol.for("react.memo_cache_sentinel")?(e=(0,i.jsx)("pre",{children:'ThemeProvider: no "theme" property provided'}),c[8]=e):e=c[8],e}return c[9]!==f||c[10]!==g?(n=(0,i.jsx)(s.NP,{theme:g,children:f}),c[9]=f,c[10]=g,c[11]=n):n=c[11],c[12]!==n||c[13]!==m?(d=(0,i.jsx)(eC.Provider,{value:m,children:n}),c[12]=n,c[13]=m,c[14]=d):d=c[14],d}function eA(){let e=(0,l.useContext)(eC);if(!e)throw Error("useRootTheme(): missing context value");return e}function eM(e){let t;let r=(0,a.c)(5),{children:o,scheme:n,tone:l}=e,d=eA(),s=n||d.scheme;return r[0]!==o||r[1]!==d.theme||r[2]!==s||r[3]!==l?(t=(0,i.jsx)(eT,{scheme:s,theme:d.theme,tone:l,children:o}),r[0]=o,r[1]=d.theme,r[2]=s,r[3]=l,r[4]=t):t=r[4],t}function eN(){return(0,s.DP)()}function eF(){let e;let t=(0,a.c)(2),r=(0,s.DP)();return t[0]!==r?(e=(0,n.JW)(r),t[0]=r,t[1]=e):e=t[1],e}function eO(){return 0}function eW(){let e,t;let r=(0,a.c)(2),{media:o}=eF();return r[0]!==o?(t=function(e){let t;let r=e.length,o=()=>{if(!t){t=[];for(let n=r;n>-1;n-=1){var o;let r=0===(o=n)?`screen and (max-width: ${e[o]-1}px)`:o===e.length?`screen and (min-width: ${e[o-1]}px)`:`screen and (min-width: ${e[o-1]}px) and (max-width: ${e[o]-1}px)`;t.push({index:n,mq:window.matchMedia(r)})}}return t};return{getSnapshot:()=>{for(let{index:e,mq:t}of o())if(t.matches)return e;return 0},subscribe:e=>{let t=[];for(let{mq:r}of o()){let o=()=>{r.matches&&e()};r.addEventListener("change",o),t.push(()=>r.removeEventListener("change",o))}return()=>{for(let e of t)e()}}}}(o),r[0]=o,r[1]=t):t=r[1],e=t,(0,l.useSyncExternalStore)(e.subscribe,e.getSnapshot,eO)}function eH(e){return ez("(prefers-color-scheme: dark)",void 0===e?eB:e)}function eB(){return!1}function eL(e){return ez("(prefers-reduced-motion: reduce)",void 0===e?eD:e)}function eD(){return!1}function eJ(e){let{card:t,media:r}=(0,n.JW)(e.theme),o=`${t.border?.width??1}px solid var(--card-border-color)`;return R(r,e.$border,e=>e?{"&&":{border:o}}:{"&&":{border:0}})}function eP(e){let{card:t,media:r}=(0,n.JW)(e.theme),o=`${t.border?.width??1}px solid var(--card-border-color)`;return R(r,e.$borderTop,e=>e?{"&&":{borderTop:o}}:{"&&":{borderTop:0}})}function eV(e){let{card:t,media:r}=(0,n.JW)(e.theme),o=`${t.border?.width??1}px solid var(--card-border-color)`;return R(r,e.$borderRight,e=>e?{"&&":{borderRight:o}}:{"&&":{borderRight:0}})}function eX(e){let{card:t,media:r}=(0,n.JW)(e.theme),o=`${t.border?.width??1}px solid var(--card-border-color)`;return R(r,e.$borderBottom,e=>e?{"&&":{borderBottom:o}}:{"&&":{borderBottom:0}})}function eq(e){let{card:t,media:r}=(0,n.JW)(e.theme),o=`${t.border?.width??1}px solid var(--card-border-color)`;return R(r,e.$borderLeft,e=>e?{"&&":{borderLeft:o}}:{"&&":{borderLeft:0}})}eT.displayName="ThemeProvider",eM.displayName="ThemeColorProvider";let eG={'&[data-as="ul"],&[data-as="ol"]':{listStyle:"none"}},eU={content:"content-box",border:"border-box"},eY={stretch:"stretch",fill:"100%"};function eK(e){let{media:t}=(0,n.JW)(e.theme);return R(t,e.$display,e=>({"&:not([hidden])":{display:e}}))}function eZ(e){let{media:t}=(0,n.JW)(e.theme);return R(t,e.$sizing,e=>({boxSizing:eU[e]}))}function eQ(e){let{media:t}=(0,n.JW)(e.theme);return R(t,e.$height,e=>({height:eY[e]}))}function e0(e){let{media:t}=(0,n.JW)(e.theme);return R(t,e.$overflow,e=>({overflow:e}))}let e1={"&&:not([hidden])":{display:"flex"}};function e2(e){let{media:t}=(0,n.JW)(e.theme);return R(t,e.$align,e=>({alignItems:e}))}function e3(e){let{media:t,space:r}=(0,n.JW)(e.theme);return R(t,e.$gap,e=>({gap:e?j(r[e]):void 0}))}function e4(e){let{media:t}=(0,n.JW)(e.theme);return R(t,e.$wrap,e=>({flexWrap:e}))}function e5(e){let{media:t}=(0,n.JW)(e.theme);return R(t,e.$justify,e=>({justifyContent:e}))}function e6(e){let{media:t}=(0,n.JW)(e.theme);return R(t,e.$direction,e=>({flexDirection:e}))}let e7={minWidth:0,minHeight:0};function e8(){return[e7,e9]}function e9(e){let{media:t}=(0,n.JW)(e.theme);return e.$flex?R(t,e.$flex,e=>({flex:e})):w}function te(e){return`inset 0 0 0 ${e.width}px ${e.color}`}function tt(e){let{base:t,border:r,focusRing:o}=e,n=o.offset+o.width,i=0-o.offset,a=t?t.bg:"var(--card-bg-color)";return[i>0&&`inset 0 0 0 ${i}px var(--card-focus-ring-color)`,r&&te(r),i<0&&`0 0 0 ${0-i}px ${a}`,n>0&&`0 0 0 ${n}px var(--card-focus-ring-color)`].filter(Boolean).join(",")}let tr={"&&:not([hidden])":{display:"grid"},'&[data-as="ul"],&[data-as="ol"]':{listStyle:"none"}},to={auto:"auto",min:"min-content",max:"max-content",fr:"minmax(0, 1fr)"},tn={auto:"auto",min:"min-content",max:"max-content",fr:"minmax(0, 1fr)"};function ti(e){let{media:t}=(0,n.JW)(e.theme);return R(t,e.$autoFlow,e=>({gridAutoFlow:e}))}function ta(e){let{media:t}=(0,n.JW)(e.theme);return R(t,e.$autoRows,e=>({gridAutoRows:e&&tn[e]}))}function tl(e){let{media:t}=(0,n.JW)(e.theme);return R(t,e.$autoCols,e=>({gridAutoColumns:e&&to[e]}))}function td(e){let{media:t}=(0,n.JW)(e.theme);return R(t,e.$columns,e=>({gridTemplateColumns:e&&`repeat(${e},minmax(0,1fr));`}))}function ts(e){let{media:t}=(0,n.JW)(e.theme);return R(t,e.$rows,e=>({gridTemplateRows:e&&`repeat(${e},minmax(0,1fr));`}))}function tc(e){let{media:t,space:r}=(0,n.JW)(e.theme);return R(t,e.$gap,e=>({gridGap:e?j(r[e]):void 0}))}function tu(e){let{media:t,space:r}=(0,n.JW)(e.theme);return R(t,e.$gapX,e=>({columnGap:e?j(r[e]):void 0}))}function tf(e){let{media:t,space:r}=(0,n.JW)(e.theme);return R(t,e.$gapY,e=>({rowGap:e?j(r[e]):void 0}))}let tp={auto:"auto",full:"1 / -1"},th={auto:"auto",full:"1 / -1"};function tb(e){let{media:t}=(0,n.JW)(e.theme);return R(t,e.$row,e=>"number"==typeof e?{gridRow:`span ${e} / span ${e}`}:{gridRow:tp[e]})}function tm(e){let{media:t}=(0,n.JW)(e.theme);return R(t,e.$rowStart,e=>({gridRowStart:e}))}function tg(e){let{media:t}=(0,n.JW)(e.theme);return R(t,e.$rowEnd,e=>({gridRowEnd:e}))}function tv(e){let{media:t}=(0,n.JW)(e.theme);return R(t,e.$column,e=>"number"==typeof e?{gridColumn:`span ${e} / span ${e}`}:{gridColumn:th[e]})}function tx(e){let{media:t}=(0,n.JW)(e.theme);return R(t,e.$columnStart,e=>({gridColumnStart:e}))}function tw(e){let{media:t}=(0,n.JW)(e.theme);return R(t,e.$columnEnd,e=>({gridColumnEnd:e}))}function ty(e){let{$fontSize:t,$iconLeft:r,$iconRight:o,$padding:i,$space:a}=e,{font:l,media:d,space:s}=(0,n.JW)(e.theme),c=Math.max(i.length,a.length,t.length),u=[],f=[],p=[];for(let e=0;e<c;e+=1)p[e]=void 0===t[e]?p[e-1]:t[e],u[e]=void 0===i[e]?u[e-1]:i[e],f[e]=void 0===a[e]?f[e-1]:a[e];return R(d,u,(e,t)=>{let n=l.text.sizes[p[t]]||l.text.sizes[2],i=n.lineHeight-n.ascenderHeight-n.descenderHeight,a=s[u[t]],d=s[f[t]],c={paddingTop:j(a-n.ascenderHeight),paddingRight:j(a),paddingBottom:j(a-n.descenderHeight),paddingLeft:j(a)};return o&&(c.paddingRight=j(a+i+d)),r&&(c.paddingLeft=j(a+i+d)),c})}function t$(e){return ty({...e,$iconRight:!0})}let tk=(0,s.AH)`
  &:not([hidden]) {
    display: flex;
  }

  align-items: center;
`;function tj(){return tk}function tR(e){let{$scheme:t,$tone:r,$weight:o}=e,{color:i,font:a}=(0,n.JW)(e.theme);return(0,s.AH)`
    appearance: none;
    background: none;
    border: 0;
    border-radius: 0;
    outline: none;
    width: 100%;
    box-sizing: border-box;
    font-family: ${a.text.family};
    font-weight: ${o&&a.text.weights[o]||a.text.weights.regular};
    margin: 0;
    position: relative;
    z-index: 1;
    display: block;

    /* NOTE: This is a hack to disable Chrome’s autofill styles */
    &:-webkit-autofill,
    &:-webkit-autofill:hover,
    &:-webkit-autofill:focus,
    &:-webkit-autofill:active {
      -webkit-text-fill-color: var(--input-fg-color) !important;
      transition: background-color 5000s;
      transition-delay: 86400s /* 24h */;
    }

    /* &:is(textarea) */
    &[data-as='textarea'] {
      resize: none;
    }

    color: var(--input-fg-color);

    &::placeholder {
      color: var(--input-placeholder-color);
    }

    &[data-scheme='${t}'][data-tone='${r}'] {
      --input-fg-color: ${i.input.default.enabled.fg};
      --input-placeholder-color: ${i.input.default.enabled.placeholder};

      /* enabled */
      &:not(:invalid):not(:disabled):not(:read-only) {
        --input-fg-color: ${i.input.default.enabled.fg};
        --input-placeholder-color: ${i.input.default.enabled.placeholder};
      }

      /* disabled */
      &:not(:invalid):disabled {
        --input-fg-color: ${i.input.default.disabled.fg};
        --input-placeholder-color: ${i.input.default.disabled.placeholder};
      }

      /* invalid */
      &:invalid {
        --input-fg-color: ${i.input.invalid.enabled.fg};
        --input-placeholder-color: ${i.input.invalid.enabled.placeholder};
      }

      /* readOnly */
      &:read-only {
        --input-fg-color: ${i.input.default.readOnly.fg};
        --input-placeholder-color: ${i.input.default.readOnly.placeholder};
      }
    }
  `}function tE(e){let{font:t,media:r}=(0,n.JW)(e.theme);return R(r,e.$fontSize,e=>{let r=t.text.sizes[e]||t.text.sizes[2];return{fontSize:j(r.fontSize),lineHeight:r.lineHeight/r.fontSize}})}function tS(e){let{$hasPrefix:t,$hasSuffix:r,$scheme:o,$tone:i,$unstableDisableFocusRing:a}=e,{color:l,input:d}=(0,n.JW)(e.theme);return(0,s.AH)`
    --input-box-shadow: none;

    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    display: block;
    pointer-events: none;
    z-index: 0;

    background-color: var(--card-bg-color);
    box-shadow: var(--input-box-shadow);

    border-top-left-radius: ${t?0:void 0};
    border-bottom-left-radius: ${t?0:void 0};
    border-top-right-radius: ${r?0:void 0};
    border-bottom-right-radius: ${r?0:void 0};

    &[data-scheme='${o}'][data-tone='${i}'] {
      --card-bg-color: ${l.input.default.enabled.bg};
      --card-fg-color: ${l.input.default.enabled.fg};

      /* enabled */
      *:not(:disabled) + &[data-border] {
        --input-box-shadow: ${te({color:l.input.default.enabled.border,width:d.border.width})};
      }

      /* invalid */
      *:not(:disabled):invalid + & {
        --card-bg-color: ${l.input.invalid.enabled.bg};
        --card-fg-color: ${l.input.invalid.enabled.fg};

        &[data-border] {
          --input-box-shadow: ${te({color:l.input.invalid.enabled.border,width:d.border.width})};
        }
      }

      /* focused */
      *:not(:disabled):focus + & {
        &[data-border] {
          --input-box-shadow: ${a?void 0:tt({border:{color:l.input.default.enabled.border,width:d.border.width},focusRing:d.text.focusRing})};
        }

        &:not([data-border]) {
          --input-box-shadow: ${a?void 0:tt({focusRing:d.text.focusRing})};
        }
      }

      /* disabled */
      *:not(:invalid):disabled + & {
        --card-bg-color: ${l.input.default.disabled.bg} !important;
        --card-fg-color: ${l.input.default.disabled.fg} !important;
        --card-icon-color: ${l.input.default.disabled.fg} !important;

        &[data-border] {
          --input-box-shadow: ${te({color:l.input.default.disabled.border,width:d.border.width})};
        }
      }

      *:invalid:disabled + & {
        --card-bg-color: ${l.input.invalid.disabled.bg} !important;
        --card-fg-color: ${l.input.invalid.disabled.fg} !important;
        --card-icon-color: ${l.input.invalid.disabled.fg} !important;

        &[data-border] {
          --input-box-shadow: ${te({color:l.input.invalid.disabled.border,width:d.border.width})};
        }
      }

      /* readOnly */
      *:not(:invalid):read-only + & {
        --card-bg-color: ${l.input.default.readOnly.bg} !important;
        --card-fg-color: ${l.input.default.readOnly.fg} !important;
      }

      *:invalid:read-only + & {
        --card-bg-color: ${l.input.invalid.readOnly.bg} !important;
        --card-fg-color: ${l.input.invalid.readOnly.fg} !important;
      }

      /* hovered */
      @media (hover: hover) {
        *:not(:disabled):not(:read-only):not(:invalid):hover + & {
          --card-bg-color: ${l.input.default.hovered.bg};
          --card-fg-color: ${l.input.default.hovered.fg};
        }

        *:invalid:not(:disabled):not(:read-only):hover + & {
          --card-bg-color: ${l.input.invalid.hovered.bg};
          --card-fg-color: ${l.input.invalid.hovered.fg};
        }

        *:not(:disabled):not(:read-only):not(:invalid):not(:focus):hover + &[data-border] {
          --input-box-shadow: ${te({color:l.input.default.hovered.border,width:d.border.width})};
        }

        *:invalid:not(:disabled):not(:read-only):not(:focus):hover + &[data-border] {
          --input-box-shadow: ${te({color:l.input.invalid.hovered.border,width:d.border.width})};
        }
      }
    }
  `}function tz(e){let{theme:t}=e;return[S(t,["padding"],e.$padding),S(t,["paddingLeft","paddingRight"],e.$paddingX),S(t,["paddingTop","paddingBottom"],e.$paddingY),S(t,["paddingTop"],e.$paddingTop),S(t,["paddingRight"],e.$paddingRight),S(t,["paddingBottom"],e.$paddingBottom),S(t,["paddingLeft"],e.$paddingLeft)].filter(Boolean)}function t_(e){let{media:t,radius:r}=(0,n.JW)(e.theme);return R(t,e.$radius,e=>{let t=0;return"number"==typeof e&&(t=j(r[e])),"full"===e&&(t="9999px"),{borderRadius:t}})}function tI(e,t){return`${e.map(j).join(" ")} ${t}`}let tC=s.I4.div(function(e){return z("label",e)},_,function(e){let{$accent:t,$muted:r}=e,{font:o}=(0,n.JW)(e.theme);return(0,s.AH)`
    text-transform: uppercase;

    ${t&&(0,s.AH)`
      color: var(--card-accent-fg-color);
    `}

    ${r&&(0,s.AH)`
      color: var(--card-muted-fg-color);
    `}

    & code {
      font-family: ${o.code.family};
      border-radius: 1px;
    }

    & a {
      text-decoration: none;
      border-radius: 1px;
    }

    & svg {
      /* Certain popular CSS libraries changes the defaults for SVG display */
      /* Make sure SVGs are rendered as inline elements */
      display: inline;
    }

    & [data-sanity-icon] {
      vertical-align: baseline;
    }
  `}),tT=s.I4.span`
  display: block;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
  overflow: clip;
`,tA=(0,l.forwardRef)(function(e,t){let r,o,n,l,d,s,c,u,f;let p=(0,a.c)(22);p[0]!==e?({accent:r,align:o,children:n,muted:d,size:s,textOverflow:c,weight:u,...l}=e,p[0]=e,p[1]=r,p[2]=o,p[3]=n,p[4]=l,p[5]=d,p[6]=s,p[7]=c,p[8]=u):(r=p[1],o=p[2],n=p[3],l=p[4],d=p[5],s=p[6],c=p[7],u=p[8]);let h=void 0!==d&&d,b=void 0===s?2:s,m=n;if("ellipsis"===c){let e;p[9]!==m?(e=(0,i.jsx)(tT,{children:m}),p[9]=m,p[10]=e):e=p[10],m=e}else{let e;p[11]!==m?(e=(0,i.jsx)("span",{children:m}),p[11]=m,p[12]=e):e=p[12],m=e}let g=I(o),v=I(b);return p[13]!==r||p[14]!==m||p[15]!==h||p[16]!==t||p[17]!==l||p[18]!==g||p[19]!==v||p[20]!==u?(f=(0,i.jsx)(tC,{"data-ui":"Label",...l,$accent:r,$align:g,$muted:h,$size:v,$weight:u,ref:t,children:m}),p[13]=r,p[14]=m,p[15]=h,p[16]=t,p[17]=l,p[18]=g,p[19]=v,p[20]=u,p[21]=f):f=p[21],f});tA.displayName="ForwardRef(Label)";let tM={root:function(e){let{$color:t}=e,{avatar:r}=(0,n.JW)(e.theme);return{"--avatar-bg-color":`var(--card-avatar-${t}-bg-color)`,"--avatar-fg-color":`var(--card-avatar-${t}-fg-color)`,backgroundColor:"var(--avatar-bg-color)",position:"relative",boxSizing:"border-box",userSelect:"none",boxShadow:"0 0 0 1px var(--card-bg-color)",'&[data-status="inactive"]':{opacity:.5},"&>svg":{"&:not([hidden])":{display:"block"}},'&[data-as="button"]':{WebkitFontSmoothing:"inherit",appearance:"none",margin:0,padding:0,border:0,font:"inherit",color:"inherit",outline:"none","&:focus":{boxShadow:tt({focusRing:r.focusRing})},"&:focus:not(:focus-visible)":{boxShadow:"none"}}}},arrow:function(){return{position:"absolute",boxSizing:"border-box",zIndex:0,opacity:0,transition:"all 0.2s linear",transform:"rotate(-90deg) translate3d(0, 6px, 0)",left:0,right:0,top:0,bottom:0,"& > svg":{width:"11px",height:"7px",position:"absolute",top:"-5px",left:"50%",transform:"translateX(-6px)","&:not([hidden])":{display:"block"}},"[data-arrow-position='inside'] > &":{transform:"rotate(-90deg) translate3d(0, 6px, 0)",opacity:0},"[data-arrow-position='top'] > &":{opacity:1,transform:"rotate(0deg)"},"[data-arrow-position='bottom'] > &":{opacity:1,transform:"rotate(-180deg)"}}},bgStroke:function(){return{strokeWidth:"4px",stroke:"var(--card-bg-color)"}},stroke:function(){return{strokeWidth:"2px",stroke:"var(--avatar-bg-color)",'[data-status="editing"] &':{strokeDasharray:"2 4",strokeLinecap:"round"}}},initials:function(){return{width:"100%",height:"100%",color:"var(--avatar-fg-color)",alignItems:"center",justifyContent:"center",textTransform:"uppercase",textAlign:"center",borderRadius:"50%","&:not([hidden])":{display:"flex"}}},image:function(){return{position:"relative"}}},tN=s.I4.div(function(e){let{avatar:t,media:r}=(0,n.JW)(e.theme);return R(r,e.$size,e=>{let r=t.sizes[e]||t.sizes[0];return{width:j(r.size),height:j(r.size),borderRadius:j(r.size/2),"&>svg":{width:j(r.size),height:j(r.size),borderRadius:j(r.size/2)}}})},tM.root),tF=s.I4.div(tM.arrow),tO=s.I4.ellipse(tM.bgStroke),tW=s.I4.ellipse(tM.stroke),tH=s.I4.div(tM.initials),tB=(0,s.I4)(tA)({color:"inherit"}),tL=s.I4.svg(tM.image),tD=(0,l.forwardRef)(function(e,t){let r,o,n,s,c,u,f,p,h,b,m,g,v,x,w,y,$,k,j,R,E,S,z;let _=(0,a.c)(52);_[0]!==e?({__unstable_hideInnerStroke:r,as:s,color:h,src:p,title:g,initials:c,onImageLoadError:u,arrowPosition:n,animateArrowFrom:o,status:b,size:m,...f}=e,_[0]=e,_[1]=r,_[2]=o,_[3]=n,_[4]=s,_[5]=c,_[6]=u,_[7]=f,_[8]=p,_[9]=h,_[10]=b,_[11]=m,_[12]=g):(r=_[1],o=_[2],n=_[3],s=_[4],c=_[5],u=_[6],f=_[7],p=_[8],h=_[9],b=_[10],m=_[11],g=_[12]);let C=void 0===h?"gray":h,T=void 0===b?"online":b,A=void 0===m?1:m,{avatar:M}=eF(),N=d.isValidElementType(s)?s:"div",F=I(A),O=(M.sizes[F[0]]||M.sizes[0]).size,W=O/2,H=(0,l.useId)(),[B,L]=(0,l.useState)(o||n||"inside"),[D,J]=(0,l.useState)(!1),P=`avatar-image-${H}`;_[13]!==B||_[14]!==n?(v=()=>{if(B===n)return;let e=requestAnimationFrame(()=>L(n));return()=>cancelAnimationFrame(e)},x=[B,n],_[13]=B,_[14]=n,_[15]=v,_[16]=x):(v=_[15],x=_[16]),(0,l.useEffect)(v,x),_[17]!==p?(w=()=>{p&&J(!1)},y=[p],_[17]=p,_[18]=w,_[19]=y):(w=_[18],y=_[19]),(0,l.useEffect)(w,y),_[20]!==u?($=()=>{J(!0),u&&u(Error("Avatar: the image failed to load"))},_[20]=u,_[21]=$):$=_[21];let V=$;_[22]!==F?(j=F.map(tJ),_[22]=F,_[23]=j):j=_[23],k=j;let X="string"==typeof N?N:void 0;return _[24]!==C?(R=(0,i.jsx)(tF,{children:(0,i.jsx)("svg",{width:"11",height:"7",viewBox:"0 0 11 7",fill:"none",children:(0,i.jsx)("path",{d:"M6.67948 1.50115L11 7L0 7L4.32052 1.50115C4.92109 0.736796 6.07891 0.736795 6.67948 1.50115Z",fill:C})})}),_[24]=C,_[25]=R):R=_[25],_[26]!==r||_[27]!==W||_[28]!==O||_[29]!==V||_[30]!==D||_[31]!==P||_[32]!==p?(E=!D&&p&&(0,i.jsxs)(tL,{viewBox:`0 0 ${O} ${O}`,fill:"none",children:[(0,i.jsx)("defs",{children:(0,i.jsx)("pattern",{id:P,patternContentUnits:"objectBoundingBox",width:"1",height:"1",children:(0,i.jsx)("image",{href:p,width:"1",height:"1",onError:V})})}),(0,i.jsx)("circle",{cx:W,cy:W,r:W,fill:`url(#${P})`}),!r&&(0,i.jsx)(tO,{cx:W,cy:W,rx:W,ry:W,vectorEffect:"non-scaling-stroke"}),(0,i.jsx)(tW,{cx:W,cy:W,rx:W,ry:W,vectorEffect:"non-scaling-stroke"})]}),_[26]=r,_[27]=W,_[28]=O,_[29]=V,_[30]=D,_[31]=P,_[32]=p,_[33]=E):E=_[33],_[34]!==D||_[35]!==c||_[36]!==k||_[37]!==p?(S=(D||!p)&&c&&(0,i.jsx)(i.Fragment,{children:(0,i.jsx)(tH,{children:(0,i.jsx)(tB,{forwardedAs:"span",size:k,weight:"medium",children:c})})}),_[34]=D,_[35]=c,_[36]=k,_[37]=p,_[38]=S):S=_[38],_[39]!==B||_[40]!==N||_[41]!==C||_[42]!==t||_[43]!==f||_[44]!==F||_[45]!==T||_[46]!==X||_[47]!==R||_[48]!==E||_[49]!==S||_[50]!==g?(z=(0,i.jsxs)(tN,{as:N,"data-as":X,"data-ui":"Avatar",...f,$color:C,$size:F,"aria-label":g,"data-arrow-position":B,"data-status":T,ref:t,title:g,children:[R,E,S]}),_[39]=B,_[40]=N,_[41]=C,_[42]=t,_[43]=f,_[44]=F,_[45]=T,_[46]=X,_[47]=R,_[48]=E,_[49]=S,_[50]=g,_[51]=z):z=_[51],z});function tJ(e){return 1===e?1:2===e?3:3===e?5:0}tD.displayName="ForwardRef(Avatar)";let tP=s.I4.div(function(e){let{avatar:t,media:r}=(0,n.JW)(e.theme);return R(r,e.$size,e=>{let r=t.sizes[e];return r?{borderRadius:j(r.size/2),minWidth:j(r.size),height:j(r.size)}:y})},function(e){let{space:t}=(0,n.JW)(e.theme);return(0,s.AH)`
    align-items: center;
    justify-content: center;
    box-sizing: border-box;
    user-select: none;
    color: inherit;
    color: var(--card-fg-color);
    background: var(--card-bg-color);
    box-shadow:
      0 0 0 1px var(--card-bg-color),
      inset 0 0 0 1px var(--card-hairline-hard-color);
    padding: 0 ${j(t[2])};

    &:not([hidden]) {
      display: flex;
    }
  `}),tV=(0,l.forwardRef)(function(e,t){let r,o,n,l;let d=(0,a.c)(9),{count:s,size:c}=e,u=I(void 0===c?1:c);return d[0]!==u?(o=u.map(tX),d[0]=u,d[1]=o):o=d[1],r=o,d[2]!==s||d[3]!==r?(n=(0,i.jsx)(tA,{as:"span",size:r,weight:"medium",children:s}),d[2]=s,d[3]=r,d[4]=n):n=d[4],d[5]!==t||d[6]!==u||d[7]!==n?(l=(0,i.jsx)(tP,{$size:u,"data-ui":"AvatarCounter",ref:t,children:n}),d[5]=t,d[6]=u,d[7]=n,d[8]=l):l=d[8],l});function tX(e){return 1===e?1:2===e?3:3===e?5:0}tV.displayName="ForwardRef(AvatarCounter)";let tq=(0,s.AH)`
  white-space: nowrap;

  & > div {
    vertical-align: top;

    &:not([hidden]) {
      display: inline-block;
    }
  }
`,tG=s.I4.div(function(e){let{avatar:t,media:r}=(0,n.JW)(e.theme);return R(r,e.$size,e=>{let r=t.sizes[e];return r?{"& > div + div":{marginLeft:j(r.distance)}}:y})},function(){return tq}),tU=(0,l.forwardRef)(function(e,t){let r,o,n,d,s,c;let u=(0,a.c)(15);u[0]!==e?({children:r,maxLength:n,size:d,...o}=e,u[0]=e,u[1]=r,u[2]=o,u[3]=n,u[4]=d):(r=u[1],o=u[2],n=u[3],d=u[4]);let f=void 0===n?4:n,p=void 0===d?1:d,h=l.Children.toArray(r).filter(l.isValidElement),b=Math.max(f,0),m=I(p),g=h.length,v=g-(b-1),x=v>1?h.slice(v,g):h,w=0===g&&(0,i.jsx)("div",{children:(0,i.jsx)(tV,{count:g,size:m})}),y=0!==g&&v>1&&(0,i.jsx)("div",{children:(0,i.jsx)(tV,{count:v,size:m})});u[5]!==m?(s=(e,t)=>(0,i.jsx)("div",{children:(0,l.cloneElement)(e,{size:m})},String(t)),u[5]=m,u[6]=s):s=u[6];let $=x.map(s);return u[7]!==tG||u[8]!==t||u[9]!==o||u[10]!==m||u[11]!==w||u[12]!==y||u[13]!==$?(c=(0,i.jsxs)(tG,{"data-ui":"AvatarStack",...o,ref:t,$size:m,children:[w,y,$]}),u[7]=tG,u[8]=t,u[9]=o,u[10]=m,u[11]=w,u[12]=y,u[13]=$,u[14]=c):c=u[14],c});tU.displayName="ForwardRef(AvatarStack)";let tY=s.I4.div(function(){return eG},e8,function(){return[eZ,eQ,e0,eK]},function(){return[tb,tm,tg,tv,tx,tw]},function(e){let{theme:t}=e;return[S(t,["margin"],e.$margin),S(t,["marginLeft","marginRight"],e.$marginX),S(t,["marginTop","marginBottom"],e.$marginY),S(t,["marginTop"],e.$marginTop),S(t,["marginRight"],e.$marginRight),S(t,["marginBottom"],e.$marginBottom),S(t,["marginLeft"],e.$marginLeft)].filter(Boolean)},tz),tK=(0,l.forwardRef)(function(e,t){let r,o,n,l,d,s,c,u,f,p,h,b,m,g,v,x,w,y,$,k,j,R,E,S,z,_,C,T;let A=(0,a.c)(59);A[0]!==e?({as:S,column:r,columnStart:n,columnEnd:o,display:z,flex:l,height:d,margin:_,marginX:p,marginY:h,marginTop:f,marginRight:u,marginBottom:s,marginLeft:c,overflow:b,padding:C,paddingX:w,paddingY:y,paddingTop:x,paddingRight:v,paddingBottom:m,paddingLeft:g,row:k,rowStart:R,rowEnd:j,sizing:E,...$}=e,A[0]=e,A[1]=r,A[2]=o,A[3]=n,A[4]=l,A[5]=d,A[6]=s,A[7]=c,A[8]=u,A[9]=f,A[10]=p,A[11]=h,A[12]=b,A[13]=m,A[14]=g,A[15]=v,A[16]=x,A[17]=w,A[18]=y,A[19]=$,A[20]=k,A[21]=j,A[22]=R,A[23]=E,A[24]=S,A[25]=z,A[26]=_,A[27]=C):(r=A[1],o=A[2],n=A[3],l=A[4],d=A[5],s=A[6],c=A[7],u=A[8],f=A[9],p=A[10],h=A[11],b=A[12],m=A[13],g=A[14],v=A[15],x=A[16],w=A[17],y=A[18],$=A[19],k=A[20],j=A[21],R=A[22],E=A[23],S=A[24],z=A[25],_=A[26],C=A[27]);let M=void 0===S?"div":S,N=void 0===z?"block":z,F=void 0===_?0:_,O=void 0===C?0:C,W="string"==typeof M?M:void 0,H=I(r),B=I(n),L=I(o),D=I(N),J=I(l),P=I(d),V=I(F),X=I(p),q=I(h),G=I(f),U=I(u),Y=I(s),K=I(c),Z=I(b),Q=I(O),ee=I(w),et=I(y),er=I(x),eo=I(v),en=I(m),ei=I(g),ea=I(k),el=I(R),ed=I(j),es=I(E);return A[28]!==M||A[29]!==e.children||A[30]!==t||A[31]!==$||A[32]!==P||A[33]!==V||A[34]!==X||A[35]!==q||A[36]!==G||A[37]!==U||A[38]!==Y||A[39]!==K||A[40]!==Z||A[41]!==Q||A[42]!==ee||A[43]!==et||A[44]!==er||A[45]!==eo||A[46]!==en||A[47]!==ei||A[48]!==ea||A[49]!==el||A[50]!==ed||A[51]!==es||A[52]!==W||A[53]!==H||A[54]!==B||A[55]!==L||A[56]!==D||A[57]!==J?(T=(0,i.jsx)(tY,{"data-as":W,"data-ui":"Box",...$,$column:H,$columnStart:B,$columnEnd:L,$display:D,$flex:J,$height:P,$margin:V,$marginX:X,$marginY:q,$marginTop:G,$marginRight:U,$marginBottom:Y,$marginLeft:K,$overflow:Z,$padding:Q,$paddingX:ee,$paddingY:et,$paddingTop:er,$paddingRight:eo,$paddingBottom:en,$paddingLeft:ei,$row:ea,$rowStart:el,$rowEnd:ed,$sizing:es,as:M,ref:t,children:e.children}),A[28]=M,A[29]=e.children,A[30]=t,A[31]=$,A[32]=P,A[33]=V,A[34]=X,A[35]=q,A[36]=G,A[37]=U,A[38]=Y,A[39]=K,A[40]=Z,A[41]=Q,A[42]=ee,A[43]=et,A[44]=er,A[45]=eo,A[46]=en,A[47]=ei,A[48]=ea,A[49]=el,A[50]=ed,A[51]=es,A[52]=W,A[53]=H,A[54]=B,A[55]=L,A[56]=D,A[57]=J,A[58]=T):T=A[58],T});tK.displayName="ForwardRef(Box)";let tZ=s.I4.div(function(e){return z("text",e)},_,function(e){let{$accent:t,$muted:r}=e,{font:o}=(0,n.JW)(e.theme);return(0,s.AH)`
    color: var(--card-fg-color);

    ${t&&(0,s.AH)`
      color: var(--card-accent-fg-color);
    `}

    ${r&&(0,s.AH)`
      color: var(--card-muted-fg-color);
    `}

    & code {
      font-family: ${o.code.family};
      border-radius: 1px;
      background-color: var(--card-code-bg-color);
      color: var(--card-code-fg-color);
    }

    & a {
      text-decoration: none;
      border-radius: 1px;
      color: var(--card-link-color);
      outline: none;

      @media (hover: hover) {
        &:hover {
          text-decoration: underline;
        }
      }

      &:focus {
        box-shadow:
          0 0 0 1px var(--card-bg-color),
          0 0 0 3px var(--card-focus-ring-color);
      }

      &:focus:not(:focus-visible) {
        box-shadow: none;
      }
    }

    & strong {
      font-weight: ${o.text.weights.bold};
    }

    & svg {
      /* Certain popular CSS libraries changes the defaults for SVG display */
      /* Make sure SVGs are rendered as inline elements */
      display: inline;
    }

    & [data-sanity-icon] {
      vertical-align: baseline;
      color: var(--card-icon-color);

      & path {
        vector-effect: non-scaling-stroke !important;
      }
    }
  `}),tQ=s.I4.span`
  display: block;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
  overflow: clip;
`,t0=(0,l.forwardRef)(function(e,t){let r,o,n,l,d,s,c,u,f,p;let h=(0,a.c)(22);h[0]!==e?({accent:l,align:r,children:o,muted:d,size:s,textOverflow:c,weight:u,...n}=e,h[0]=e,h[1]=r,h[2]=o,h[3]=n,h[4]=l,h[5]=d,h[6]=s,h[7]=c,h[8]=u):(r=h[1],o=h[2],n=h[3],l=h[4],d=h[5],s=h[6],c=h[7],u=h[8]);let b=void 0!==l&&l,m=void 0!==d&&d,g=void 0===s?2:s,v=o;if("ellipsis"===c){let e;h[9]!==v?(e=(0,i.jsx)(tQ,{children:v}),h[9]=v,h[10]=e):e=h[10],v=e}let x=I(r),w=I(g);return h[11]!==v?(f=(0,i.jsx)("span",{children:v}),h[11]=v,h[12]=f):f=h[12],h[13]!==b||h[14]!==m||h[15]!==t||h[16]!==n||h[17]!==x||h[18]!==w||h[19]!==f||h[20]!==u?(p=(0,i.jsx)(tZ,{"data-ui":"Text",...n,$accent:b,$align:x,$muted:m,ref:t,$size:w,$weight:u,children:f}),h[13]=b,h[14]=m,h[15]=t,h[16]=n,h[17]=x,h[18]=w,h[19]=f,h[20]=u,h[21]=p):p=h[21],p});t0.displayName="ForwardRef(Text)";let t1=(0,s.I4)(tK)(t_,function(e){let{$tone:t}=e;return{"--card-bg-color":`var(--card-badge-${t}-bg-color)`,"--card-fg-color":`var(--card-badge-${t}-fg-color)`,backgroundColor:"var(--card-bg-color)",cursor:"default","&:not([hidden])":{display:"inline-block",verticalAlign:"top"}}}),t2=(0,l.forwardRef)(function(e,t){let r,o,n,l,d,s,c,u;let f=(0,a.c)(17);if(f[0]!==e){let{children:t,fontSize:i,mode:a,padding:c,radius:u,tone:p,...h}=e;r=t,n=i,l=c,d=u,s=p,o=h,f[0]=e,f[1]=r,f[2]=o,f[3]=n,f[4]=l,f[5]=d,f[6]=s}else r=f[1],o=f[2],n=f[3],l=f[4],d=f[5],s=f[6];let p=void 0===n?1:n,h=void 0===l?1:l,b=void 0===s?"default":s,m=I(void 0===d?"full":d),g=I(h);return f[7]!==r||f[8]!==p?(c=(0,i.jsx)(t0,{size:p,children:r}),f[7]=r,f[8]=p,f[9]=c):c=f[9],f[10]!==t||f[11]!==o||f[12]!==m||f[13]!==g||f[14]!==c||f[15]!==b?(u=(0,i.jsx)(t1,{"data-ui":"Badge",...o,$tone:b,$radius:m,padding:g,ref:t,children:c}),f[10]=t,f[11]=o,f[12]=m,f[13]=g,f[14]=c,f[15]=b,f[16]=u):u=f[16],u});t2.displayName="ForwardRef(Badge)";let t3=(0,s.I4)(tK)(e8,function(){return[e1,e2,e3,e4,e5,e6]}),t4=(0,l.forwardRef)(function(e,t){let r,o,n,l,d,s,c,u;let f=(0,a.c)(17);f[0]!==e?({align:r,as:o,direction:s,gap:n,justify:l,wrap:c,...d}=e,f[0]=e,f[1]=r,f[2]=o,f[3]=n,f[4]=l,f[5]=d,f[6]=s,f[7]=c):(r=f[1],o=f[2],n=f[3],l=f[4],d=f[5],s=f[6],c=f[7]);let p=void 0===s?"row":s,h=I(r),b=I(p),m=I(n),g=I(l),v=I(c);return f[8]!==o||f[9]!==t||f[10]!==d||f[11]!==h||f[12]!==b||f[13]!==m||f[14]!==g||f[15]!==v?(u=(0,i.jsx)(t3,{"data-ui":"Flex",...d,$align:h,$direction:b,$gap:m,$justify:g,$wrap:v,forwardedAs:o,ref:t}),f[8]=o,f[9]=t,f[10]=d,f[11]=h,f[12]=b,f[13]=m,f[14]=g,f[15]=v,f[16]=u):u=f[16],u});t4.displayName="ForwardRef(Flex)";let t5=(0,s.i7)`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`,t6=(0,s.I4)(t0)`
  & > span > svg {
    animation: ${t5} 500ms linear infinite;
  }
`,t7=(0,l.forwardRef)(function(e,t){let r,o;let n=(0,a.c)(4);return n[0]===Symbol.for("react.memo_cache_sentinel")?(r=(0,i.jsx)(c.Nl1,{}),n[0]=r):r=n[0],n[1]!==e||n[2]!==t?(o=(0,i.jsx)(t6,{"data-ui":"Spinner",...e,ref:t,children:r}),n[1]=e,n[2]=t,n[3]=o):o=n[3],o});function t8(e,t,r=!1){return{"--card-backdrop-color":e.backdrop,"--card-focus-ring-color":e.focusRing,"--card-shadow-outline-color":e.shadow.outline,"--card-shadow-umbra-color":e.shadow.umbra,"--card-shadow-penumbra-color":e.shadow.penumbra,"--card-shadow-ambient-color":e.shadow.ambient,"--card-accent-fg-color":t.accent.fg,"--card-avatar-gray-bg-color":t.avatar.gray.bg,"--card-avatar-gray-fg-color":t.avatar.gray.fg,"--card-avatar-blue-bg-color":t.avatar.blue.bg,"--card-avatar-blue-fg-color":t.avatar.blue.fg,"--card-avatar-purple-bg-color":t.avatar.purple.bg,"--card-avatar-purple-fg-color":t.avatar.purple.fg,"--card-avatar-magenta-bg-color":t.avatar.magenta.bg,"--card-avatar-magenta-fg-color":t.avatar.magenta.fg,"--card-avatar-red-bg-color":t.avatar.red.bg,"--card-avatar-red-fg-color":t.avatar.red.fg,"--card-avatar-orange-bg-color":t.avatar.orange.bg,"--card-avatar-orange-fg-color":t.avatar.orange.fg,"--card-avatar-yellow-bg-color":t.avatar.yellow.bg,"--card-avatar-yellow-fg-color":t.avatar.yellow.fg,"--card-avatar-green-bg-color":t.avatar.green.bg,"--card-avatar-green-fg-color":t.avatar.green.fg,"--card-avatar-cyan-bg-color":t.avatar.cyan.bg,"--card-avatar-cyan-fg-color":t.avatar.cyan.fg,"--card-bg-color":t.bg,"--card-bg-image":r?`repeating-conic-gradient(${t.bg} 0% 25%, ${t.muted.bg} 0% 50%)`:void 0,"--card-border-color":t.border,"--card-badge-default-bg-color":t.badge.default.bg,"--card-badge-default-dot-color":t.badge.default.dot,"--card-badge-default-fg-color":t.badge.default.fg,"--card-badge-default-icon-color":t.badge.default.icon,"--card-badge-neutral-bg-color":t.badge.neutral?.bg,"--card-badge-neutral-dot-color":t.badge.neutral?.dot,"--card-badge-neutral-fg-color":t.badge.neutral?.fg,"--card-badge-neutral-icon-color":t.badge.neutral?.icon,"--card-badge-primary-bg-color":t.badge.primary.bg,"--card-badge-primary-dot-color":t.badge.primary.dot,"--card-badge-primary-fg-color":t.badge.primary.fg,"--card-badge-primary-icon-color":t.badge.primary.icon,"--card-badge-suggest-bg-color":t.badge.suggest?.bg,"--card-badge-suggest-dot-color":t.badge.suggest?.dot,"--card-badge-suggest-fg-color":t.badge.suggest?.fg,"--card-badge-suggest-icon-color":t.badge.suggest?.icon,"--card-badge-positive-bg-color":t.badge.positive.bg,"--card-badge-positive-dot-color":t.badge.positive.dot,"--card-badge-positive-fg-color":t.badge.positive.fg,"--card-badge-positive-icon-color":t.badge.positive.icon,"--card-badge-caution-bg-color":t.badge.caution.bg,"--card-badge-caution-dot-color":t.badge.caution.dot,"--card-badge-caution-fg-color":t.badge.caution.fg,"--card-badge-caution-icon-color":t.badge.caution.icon,"--card-badge-critical-bg-color":t.badge.critical.bg,"--card-badge-critical-dot-color":t.badge.critical.dot,"--card-badge-critical-fg-color":t.badge.critical.fg,"--card-badge-critical-icon-color":t.badge.critical.icon,"--card-code-bg-color":t.code.bg,"--card-code-fg-color":t.code.fg,"--card-fg-color":t.fg,"--card-icon-color":t.icon,"--card-kbd-bg-color":t.kbd.bg,"--card-kbd-border-color":t.kbd.border,"--card-kbd-fg-color":t.kbd.fg,"--card-link-fg-color":t.link.fg,"--card-muted-bg-color":t.muted.bg,"--card-muted-fg-color":t.muted.fg,"--card-skeleton-color-from":t.skeleton.from,"--card-skeleton-color-to":t.skeleton.to,"--card-bg2-color":t.muted.bg,"--card-link-color":t.link.fg,"--card-hairline-soft-color":t.border,"--card-hairline-hard-color":t.border}}function t9(...e){return e.filter(Boolean).join(",")}t7.displayName="ForwardRef(Spinner)";let re=s.I4.button(t_,function(e){let{$width:t}=e,{style:r}=(0,n.JW)(e.theme);return(0,s.AH)`
    ${r?.button};

    -webkit-font-smoothing: inherit;
    appearance: none;
    display: inline-flex;
    align-items: center;
    font: inherit;
    border: 0;
    outline: none;
    user-select: none;
    text-decoration: none;
    border: 0;
    box-sizing: border-box;
    padding: 0;
    margin: 0;
    white-space: nowrap;
    text-align: left;
    position: relative;
    vertical-align: top;

    ${"fill"===t&&(0,s.AH)`
      width: -moz-available;
      width: -webkit-fill-available;
      width: stretch;
    `}

    & > span {
      display: block;
      flex: 1;
      min-width: 0;
      border-radius: inherit;
    }

    &::-moz-focus-inner {
      border: 0;
      padding: 0;
    }
  `},function(e){let{$mode:t}=e,{button:r,color:o,style:i}=(0,n.JW)(e.theme),a="ghost"===e.$mode,l=o.button[t]||o.button.default,d=l[e.$tone]||l.default,s={width:r.border.width,color:"var(--card-border-color)"},c=void 0;return[t8(o,d.enabled),{backgroundColor:"var(--card-bg-color)",color:"var(--card-fg-color)",boxShadow:te(s),'&:disabled, &[data-disabled="true"]':t8(o,d.disabled),"&:not([data-disabled='true'])":{boxShadow:t9(te(s),a?c:void 0),"&:focus":{boxShadow:tt({base:o,border:{width:2,color:o.bg},focusRing:r.focusRing})},"&:focus:not(:focus-visible)":{boxShadow:t9(te(s),a?c:void 0)},"@media (hover: hover)":{"&:hover":t8(o,d.hovered),"&:active":t8(o,d.pressed),"&[data-hovered]":t8(o,d.hovered)},"&[data-selected]":t8(o,d.pressed)}},i?.button?.root].filter(Boolean)}),rt=s.I4.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: var(--card-bg-color);
  border-radius: inherit;
  z-index: 1;
  box-shadow: inherit;
`,rr=(0,l.forwardRef)(function(e,t){let r,o,n,s,c,u,f,p,h,b,m,g,v,x,w,y,$,k,j,R,E,S,z,_,C,T,A,M,N,F,O;let W=(0,a.c)(64);W[0]!==e?({children:n,disabled:s,fontSize:x,icon:r,iconRight:o,justify:w,loading:c,mode:y,padding:$,paddingX:b,paddingY:m,paddingTop:h,paddingBottom:u,paddingLeft:f,paddingRight:p,radius:k,selected:v,space:j,text:z,textAlign:_,tone:R,type:E,muted:S,width:C,...g}=e,W[0]=e,W[1]=r,W[2]=o,W[3]=n,W[4]=s,W[5]=c,W[6]=u,W[7]=f,W[8]=p,W[9]=h,W[10]=b,W[11]=m,W[12]=g,W[13]=v,W[14]=x,W[15]=w,W[16]=y,W[17]=$,W[18]=k,W[19]=j,W[20]=R,W[21]=E,W[22]=S,W[23]=z,W[24]=_,W[25]=C):(r=W[1],o=W[2],n=W[3],s=W[4],c=W[5],u=W[6],f=W[7],p=W[8],h=W[9],b=W[10],m=W[11],g=W[12],v=W[13],x=W[14],w=W[15],y=W[16],$=W[17],k=W[18],j=W[19],R=W[20],E=W[21],S=W[22],z=W[23],_=W[24],C=W[25]);let H=void 0===x?1:x,B=void 0===w?"center":w,L=void 0===y?"default":y,D=void 0===$?3:$,J=void 0===k?2:k,P=void 0===j?3:j,V=void 0===R?"default":R,X=void 0===E?"button":E,q=void 0!==S&&S,{button:G}=eF(),U=I(B),Y=I(D),K=I(b),Z=I(m),Q=I(h),ee=I(u),et=I(f),er=I(p),eo=I(J),en=I(P);W[26]!==Y||W[27]!==ee||W[28]!==et||W[29]!==er||W[30]!==Q||W[31]!==K||W[32]!==Z?(A={padding:Y,paddingX:K,paddingY:Z,paddingTop:Q,paddingBottom:ee,paddingLeft:et,paddingRight:er},W[26]=Y,W[27]=ee,W[28]=et,W[29]=er,W[30]=Q,W[31]=K,W[32]=Z,W[33]=A):A=W[33],T=A;let ei=!!(c||s),ea=v?"":void 0,el=!!(c||s);return W[34]!==c?(M=!!c&&(0,i.jsx)(rt,{children:(0,i.jsx)(t7,{})}),W[34]=c,W[35]=M):M=W[35],W[36]!==r||W[37]!==o||W[38]!==T||W[39]!==G||W[40]!==H||W[41]!==U||W[42]!==q||W[43]!==en||W[44]!==z||W[45]!==_?(N=(r||z||o)&&(0,i.jsx)(tK,{as:"span",...T,children:(0,i.jsxs)(t4,{as:"span",justify:U,gap:en,children:[r&&(0,i.jsxs)(t0,{size:H,children:[(0,l.isValidElement)(r)&&r,(0,d.isValidElementType)(r)&&(0,i.jsx)(r,{})]}),z&&(0,i.jsx)(tK,{children:(0,i.jsx)(t0,{muted:q,align:_,size:H,textOverflow:"ellipsis",weight:G.textWeight,children:z})}),o&&(0,i.jsxs)(t0,{size:H,children:[(0,l.isValidElement)(o)&&o,(0,d.isValidElementType)(o)&&(0,i.jsx)(o,{})]})]})}),W[36]=r,W[37]=o,W[38]=T,W[39]=G,W[40]=H,W[41]=U,W[42]=q,W[43]=en,W[44]=z,W[45]=_,W[46]=N):N=W[46],W[47]!==T||W[48]!==n?(F=n&&(0,i.jsx)(tK,{as:"span",...T,children:n}),W[47]=T,W[48]=n,W[49]=F):F=W[49],W[50]!==L||W[51]!==eo||W[52]!==t||W[53]!==g||W[54]!==ei||W[55]!==ea||W[56]!==el||W[57]!==M||W[58]!==N||W[59]!==F||W[60]!==V||W[61]!==X||W[62]!==C?(O=(0,i.jsxs)(re,{"data-ui":"Button",...g,$mode:L,$radius:eo,$tone:V,"data-disabled":ei,"data-selected":ea,disabled:el,ref:t,type:X,$width:C,children:[M,N,F]}),W[50]=L,W[51]=eo,W[52]=t,W[53]=g,W[54]=ei,W[55]=ea,W[56]=el,W[57]=M,W[58]=N,W[59]=F,W[60]=V,W[61]=X,W[62]=C,W[63]=O):O=W[63],O});rr.displayName="ForwardRef(Button)";let ro=(0,s.I4)(tK)(function(){return[eJ,eP,eV,eX,eq]},t_,function(e){let{card:t,media:r,shadow:o}=(0,n.JW)(e.theme);return R(r,e.$shadow,e=>(function(e,t=1){if(!e)return y;let r=`0 0 0 ${j(t)} var(--card-shadow-outline-color)`,o=tI(e.umbra,"var(--card-shadow-umbra-color)"),n=tI(e.penumbra,"var(--card-shadow-penumbra-color)"),i=tI(e.ambient,"var(--card-shadow-ambient-color)");return{boxShadow:`${r}, ${o}, ${n}, ${i}`}})(o[e],t.shadow.outline))},function(e){return[function(e){let{$checkered:t}=e,{space:r}=(0,n.JW)(e.theme);return(0,s.AH)`
    ${t&&(0,s.AH)`
      background-size: ${r[3]}px ${r[3]}px;
      background-position: 50% 50%;
      background-image: var(--card-bg-image);
    `}

    &[data-as='button'] {
      -webkit-font-smoothing: inherit;
      appearance: none;
      outline: none;
      font: inherit;
      text-align: inherit;
      border: 0;
      width: -moz-available;
      width: -webkit-fill-available;
      width: stretch;
    }

    /* &:is(a) */
    &[data-as='a'] {
      outline: none;
      text-decoration: none;
    }

    /* &:is(pre) */
    &[data-as='pre'] {
      font: inherit;
    }
  `}(e),function(e){let{$checkered:t,$focusRing:r,$muted:o}=e,{card:i,color:a,style:l}=(0,n.JW)(e.theme),d={width:i.border.width,color:"var(--card-border-color)"};return(0,s.AH)`
    color-scheme: ${a._dark?"dark":"light"};

    ${t8(a,a,t)}

    background-color: ${o?"var(--card-muted-bg-color)":"var(--card-bg-color)"};
    color: var(--card-fg-color);

    /* &:is(button) */
    &[data-as='button'] {
      --card-focus-ring-box-shadow: none;

      cursor: default;
      box-shadow: var(--card-focus-ring-box-shadow);

      &:disabled {
        ${t8(a,a.selectable.default.disabled,t)}
      }

      &:not(:disabled) {
        &[data-pressed] {
          ${t8(a,a.selectable.default.pressed,t)}
        }

        &[data-selected] {
          ${t8(a,a.selectable.default.selected,t)}
        }

        @media (hover: hover) {
          &:not([data-pressed]):not([data-selected]) {
            &[data-hovered],
            &:hover {
              ${t8(a,a.selectable.default.hovered,t)}
            }

            &:active {
              ${t8(a,a.selectable.default.pressed,t)}
            }
          }
        }

        &:focus-visible {
          --card-focus-ring-box-shadow: ${r?tt({base:a,border:d,focusRing:i.focusRing}):void 0};
        }
      }
    }

    /* &:is(a) */
    &[data-as='a'] {
      cursor: pointer;
      box-shadow: var(--card-focus-ring-box-shadow);

      &[data-disabled] {
        ${t8(a,a.selectable.default.disabled,t)}
      }

      &:not([data-disabled]) {
        &[data-pressed] {
          ${t8(a,a.selectable.default.pressed,t)}
        }

        &[data-selected] {
          ${t8(a,a.selectable.default.selected,t)}
        }

        @media (hover: hover) {
          &:not([data-pressed]):not([data-selected]) {
            &[data-hovered],
            &:hover {
              ${t8(a,a.selectable.default.hovered,t)}
            }

            &:active {
              ${t8(a,a.selectable.default.pressed,t)}
            }
          }
        }

        &:focus-visible {
          --card-focus-ring-box-shadow: ${r?tt({base:a,border:d,focusRing:i.focusRing}):void 0};
        }
      }
    }

    ${l?.card?.root}
  `}(e)]}),rn=(0,l.forwardRef)(function(e,t){let r,o,n,l,s,c,u,f,p,h,b,m,g,v,x,w,y,$;let k=(0,a.c)(42);k[0]!==e?({__unstable_checkered:g,__unstable_focusRing:v,as:r,border:o,borderTop:c,borderRight:s,borderBottom:n,borderLeft:l,muted:u,pressed:f,radius:x,scheme:h,selected:b,shadow:m,tone:w,...p}=e,k[0]=e,k[1]=r,k[2]=o,k[3]=n,k[4]=l,k[5]=s,k[6]=c,k[7]=u,k[8]=f,k[9]=p,k[10]=h,k[11]=b,k[12]=m,k[13]=g,k[14]=v,k[15]=x,k[16]=w):(r=k[1],o=k[2],n=k[3],l=k[4],s=k[5],c=k[6],u=k[7],f=k[8],p=k[9],h=k[10],b=k[11],m=k[12],g=k[13],v=k[14],x=k[15],w=k[16]);let j=void 0!==g&&g,R=void 0!==v&&v,E=void 0===x?0:x,S=void 0===w?"default":w,z=(0,d.isValidElementType)(r)?r:"div",_=eA(),C="inherit"===S?_.tone:S,T="string"==typeof z?z:void 0,A=_.scheme,M=I(o),N=I(c),F=I(s),O=I(n),W=I(l),H=I(E),B=I(m),L=j?"":void 0,D=f?"":void 0,J=b?"":void 0;return k[17]!==z||k[18]!==j||k[19]!==R||k[20]!==u||k[21]!==t||k[22]!==p||k[23]!==_.scheme||k[24]!==b||k[25]!==W||k[26]!==H||k[27]!==B||k[28]!==L||k[29]!==D||k[30]!==J||k[31]!==T||k[32]!==M||k[33]!==N||k[34]!==F||k[35]!==O||k[36]!==C?(y=(0,i.jsx)(ro,{"data-as":T,"data-scheme":A,"data-ui":"Card","data-tone":C,...p,$border:M,$borderTop:N,$borderRight:F,$borderBottom:O,$borderLeft:W,$checkered:j,$focusRing:R,$muted:u,$radius:H,$shadow:B,$tone:C,"data-checkered":L,"data-pressed":D,"data-selected":J,forwardedAs:z,ref:t,selected:b}),k[17]=z,k[18]=j,k[19]=R,k[20]=u,k[21]=t,k[22]=p,k[23]=_.scheme,k[24]=b,k[25]=W,k[26]=H,k[27]=B,k[28]=L,k[29]=D,k[30]=J,k[31]=T,k[32]=M,k[33]=N,k[34]=F,k[35]=O,k[36]=C,k[37]=y):y=k[37],k[38]!==h||k[39]!==y||k[40]!==C?($=(0,i.jsx)(eM,{scheme:h,tone:C,children:y}),k[38]=h,k[39]=y,k[40]=C,k[41]=$):$=k[41],$});rn.displayName="ForwardRef(Card)";let ri=s.I4.div(function(){return(0,s.AH)`
    position: relative;
    display: inline-block;
  `}),ra=s.I4.input(function(e){let{color:t,input:r,radius:o}=(0,n.JW)(e.theme),{focusRing:i}=r.checkbox;return(0,s.AH)`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    outline: none;
    opacity: 0;
    z-index: 1;
    padding: 0;
    margin: 0;

    & + span {
      position: relative;
      display: block;
      height: ${j(r.checkbox.size)};
      width: ${j(r.checkbox.size)};
      box-sizing: border-box;
      box-shadow: ${te({color:t.input.default.enabled.border,width:r.border.width})};
      border-radius: ${j(o[2])};
      line-height: 1;
      background-color: ${t.input.default.enabled.bg};

      & > svg {
        display: block;
        position: absolute;
        opacity: 0;
        height: 100%;
        width: 100%;

        & > path {
          vector-effect: non-scaling-stroke;
          stroke-width: 1.5px !important;
        }
      }
    }

    &:checked + span {
      background: ${t.input.default.enabled.fg};
      box-shadow: ${te({color:t.input.default.enabled.fg,width:r.border.width})};
      color: ${t.input.default.enabled.bg};
    }

    /* focus */
    &:not(:disabled):focus:focus-visible + span {
      box-shadow: ${tt({focusRing:i})};
    }

    /* focus when checked - uses a different offset */
    &:not(:disabled):focus:focus-visible&:checked + span {
      box-shadow: ${tt({focusRing:{width:1,offset:1}})};
    }

    &[data-error] + span {
      background-color: ${t.input.invalid.enabled.border};
      box-shadow: ${te({width:r.border.width,color:t.input.invalid.enabled.muted.bg})};
      color: ${t.input.default.disabled.fg};
    }
    &[data-error]&:checked + span {
      background-color: ${t.input.invalid.enabled.muted.bg};
      color: ${t.input.default.enabled.bg};
    }
    &[data-error]&:checked&:not(:disabled):focus:focus-visible + span {
      box-shadow: ${tt({border:{width:r.border.width,color:t.input.invalid.readOnly.muted.bg},focusRing:{width:1,offset:1}})};
    }

    &:disabled + span {
      background-color: ${t.input.default.disabled.bg};
      box-shadow: ${te({width:r.border.width,color:t.input.default.disabled.border})};
      color: ${t.input.default.disabled.fg};
    }
    &:disabled&:checked + span {
      background-color: ${t.input.default.disabled.muted.bg};
    }

    &[data-read-only] + span {
      background-color: ${t.input.default.readOnly.bg};
      box-shadow: ${te({width:r.border.width,color:t.input.default.readOnly.border})};
      color: ${t.input.default.readOnly.fg};
    }

    &[data-read-only]&:checked + span {
      background-color: ${t.input.default.readOnly.muted.bg};
    }

    &:checked + span > svg:first-child {
      opacity: 1;
    }
    &:indeterminate + span > svg:last-child {
      opacity: 1;
    }
  `}),rl=(0,l.forwardRef)(function(e,t){let r,o,n,d,s,u,f,p,h,b,m,g,v,x;let w=(0,a.c)(25);w[0]!==e?({checked:r,className:o,disabled:d,indeterminate:s,customValidity:n,readOnly:u,style:p,...f}=e,w[0]=e,w[1]=r,w[2]=o,w[3]=n,w[4]=d,w[5]=s,w[6]=u,w[7]=f,w[8]=p):(r=w[1],o=w[2],n=w[3],d=w[4],s=w[5],u=w[6],f=w[7],p=w[8]);let y=(0,l.useRef)(null);w[9]===Symbol.for("react.memo_cache_sentinel")?(h=()=>y.current,w[9]=h):h=w[9],(0,l.useImperativeHandle)(t,h),w[10]!==s?(b=()=>{y.current&&(y.current.indeterminate=s||!1)},m=[s],w[10]=s,w[11]=b,w[12]=m):(b=w[11],m=w[12]),(0,l.useEffect)(b,m),A(y,n);let $=!d&&u?"":void 0,k=n?"":void 0,j=d||u;return w[13]!==r||w[14]!==u||w[15]!==f||w[16]!==$||w[17]!==k||w[18]!==j?(g=(0,i.jsx)(ra,{"data-read-only":$,"data-error":k,...f,checked:r,disabled:j,type:"checkbox",readOnly:u,ref:y}),w[13]=r,w[14]=u,w[15]=f,w[16]=$,w[17]=k,w[18]=j,w[19]=g):g=w[19],w[20]===Symbol.for("react.memo_cache_sentinel")?(v=(0,i.jsxs)("span",{children:[(0,i.jsx)(c.Nrt,{}),(0,i.jsx)(c.YPx,{})]}),w[20]=v):v=w[20],w[21]!==o||w[22]!==p||w[23]!==g?(x=(0,i.jsxs)(ri,{className:o,"data-ui":"Checkbox",style:p,children:[g,v]}),w[21]=o,w[22]=p,w[23]=g,w[24]=x):x=w[24],x});function rd({theme:e}){let{color:{syntax:t}}=(0,n.JW)(e);return{"&.atrule":{color:t.atrule},"&.attr-name":{color:t.attrName},"&.attr-value":{color:t.attrValue},"&.attribute":{color:t.attribute},"&.boolean":{color:t.boolean},"&.builtin":{color:t.builtin},"&.cdata":{color:t.cdata},"&.char":{color:t.char},"&.class":{color:t.class},"&.class-name":{color:t.className},"&.comment":{color:t.comment},"&.constant":{color:t.constant},"&.deleted":{color:t.deleted},"&.doctype":{color:t.doctype},"&.entity":{color:t.entity},"&.function":{color:t.function},"&.hexcode":{color:t.hexcode},"&.id":{color:t.id},"&.important":{color:t.important},"&.inserted":{color:t.inserted},"&.keyword":{color:t.keyword},"&.number":{color:t.number},"&.operator":{color:t.operator},"&.prolog":{color:t.prolog},"&.property":{color:t.property},"&.pseudo-class":{color:t.pseudoClass},"&.pseudo-element":{color:t.pseudoElement},"&.punctuation":{color:t.punctuation},"&.regex":{color:t.regex},"&.selector":{color:t.selector},"&.string":{color:t.string},"&.symbol":{color:t.symbol},"&.tag":{color:t.tag},"&.unit":{color:t.unit},"&.url":{color:t.url},"&.variable":{color:t.variable}}}rl.displayName="ForwardRef(Checkbox)";let rs=s.I4.pre(function(){return(0,s.AH)`
    color: var(--card-code-fg-color);

    & code {
      font-family: inherit;

      &.refractor .token {
        ${rd}
      }
    }

    & a {
      color: inherit;
      text-decoration: underline;
      border-radius: 1px;
    }

    & svg {
      /* Certain popular CSS libraries changes the defaults for SVG display */
      /* Make sure SVGs are rendered as inline elements */
      display: inline;
    }

    & [data-sanity-icon] {
      vertical-align: baseline;
    }
  `},function(e){return z("code",e)}),rc=(0,l.forwardRef)(function(e,t){let r,o,n,l,d,s,c,f,p;let h=(0,a.c)(23);h[0]!==e?({children:r,language:o,size:l,weight:d,...n}=e,h[0]=e,h[1]=r,h[2]=o,h[3]=n,h[4]=l,h[5]=d):(r=h[1],o=h[2],n=h[3],l=h[4],d=h[5]);let b=void 0===l?2:l,m="string"==typeof o?o:void 0;h[6]!==m?(s=!!m&&u.hasLanguage(m),h[6]=m,h[7]=s):s=h[7];let g=s,v=I(b);return h[8]!==r||h[9]!==m||h[10]!==g?(c=!(m&&g)&&(0,i.jsx)("code",{children:r}),h[8]=r,h[9]=m,h[10]=g,h[11]=c):c=h[11],h[12]!==r||h[13]!==m||h[14]!==g?(f=m&&g&&(0,i.jsx)(u,{inline:!0,language:m,value:String(r)}),h[12]=r,h[13]=m,h[14]=g,h[15]=f):f=h[15],h[16]!==t||h[17]!==n||h[18]!==v||h[19]!==c||h[20]!==f||h[21]!==d?(p=(0,i.jsxs)(rs,{"data-ui":"Code",...n,$size:v,$weight:d,ref:t,children:[c,f]}),h[16]=t,h[17]=n,h[18]=v,h[19]=c,h[20]=f,h[21]=d,h[22]=p):p=h[22],p});rc.displayName="ForwardRef(Code)";let ru={width:"100%",margin:"0 auto"},rf=(0,s.I4)(tK)(function(){return ru},function(e){let{container:t,media:r}=(0,n.JW)(e.theme);return R(r,e.$width,e=>({maxWidth:"auto"===e?"none":j(t[e])}))}),rp=(0,l.forwardRef)(function(e,t){let r,o,n,l;let d=(0,a.c)(9);d[0]!==e?({as:r,width:n,...o}=e,d[0]=e,d[1]=r,d[2]=o,d[3]=n):(r=d[1],o=d[2],n=d[3]);let s=I(void 0===n?2:n);return d[4]!==r||d[5]!==t||d[6]!==o||d[7]!==s?(l=(0,i.jsx)(rf,{"data-ui":"Container",...o,$width:s,forwardedAs:r,ref:t}),d[4]=r,d[5]=t,d[6]=o,d[7]=s,d[8]=l):l=d[8],l});rp.displayName="ForwardRef(Container)";let rh=(0,s.I4)(tK)(function(){return[tr,ti,ta,tl,td,ts,tc,tu,tf]}),rb=(0,l.forwardRef)(function(e,t){let r,o,n,l,d,s,c,u,f,p,h,b;let m=(0,a.c)(26);m[0]!==e?({as:r,autoRows:l,autoCols:o,autoFlow:n,columns:s,gap:c,gapX:u,gapY:f,rows:h,children:d,...p}=e,m[0]=e,m[1]=r,m[2]=o,m[3]=n,m[4]=l,m[5]=d,m[6]=s,m[7]=c,m[8]=u,m[9]=f,m[10]=p,m[11]=h):(r=m[1],o=m[2],n=m[3],l=m[4],d=m[5],s=m[6],c=m[7],u=m[8],f=m[9],p=m[10],h=m[11]);let g="string"==typeof r?r:void 0,v=I(l),x=I(o),w=I(n),y=I(s),$=I(c),k=I(u),j=I(f),R=I(h);return m[12]!==r||m[13]!==d||m[14]!==t||m[15]!==p||m[16]!==g||m[17]!==v||m[18]!==x||m[19]!==w||m[20]!==y||m[21]!==$||m[22]!==k||m[23]!==j||m[24]!==R?(b=(0,i.jsx)(rh,{"data-as":g,"data-ui":"Grid",...p,$autoRows:v,$autoCols:x,$autoFlow:w,$columns:y,$gap:$,$gapX:k,$gapY:j,$rows:R,forwardedAs:r,ref:t,children:d}),m[12]=r,m[13]=d,m[14]=t,m[15]=p,m[16]=g,m[17]=v,m[18]=x,m[19]=w,m[20]=y,m[21]=$,m[22]=k,m[23]=j,m[24]=R,m[25]=b):b=m[25],b});rb.displayName="ForwardRef(Grid)";let rm=s.I4.div(function(e){let{$accent:t,$muted:r}=e,{font:o}=(0,n.JW)(e.theme);return(0,s.AH)`
    ${t&&(0,s.AH)`
      color: var(--card-accent-fg-color);
    `}

    ${r&&(0,s.AH)`
      color: var(--card-muted-fg-color);
    `}

    & code {
      font-family: ${o.code.family};
      border-radius: 1px;
    }

    & a {
      text-decoration: none;
      border-radius: 1px;
      color: var(--card-link-color);
      outline: none;

      @media (hover: hover) {
        &:hover {
          text-decoration: underline;
        }
      }

      &:focus {
        box-shadow:
          0 0 0 1px var(--card-bg-color),
          0 0 0 3px var(--card-focus-ring-color);
      }

      &:focus:not(:focus-visible) {
        box-shadow: none;
      }
    }

    & strong {
      font-weight: ${o.heading.weights.bold};
    }

    & svg {
      /* Certain popular CSS libraries changes the defaults for SVG display */
      /* Make sure SVGs are rendered as inline elements */
      display: inline;
    }

    & [data-sanity-icon] {
      vertical-align: baseline;
    }
  `},_,function(e){return z("heading",e)}),rg=s.I4.span`
  display: block;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
  overflow: clip;
`,rv=(0,l.forwardRef)(function(e,t){let r,o,n,l,d,s,c,u,f,p;let h=(0,a.c)(22);h[0]!==e?({accent:l,align:r,children:o,muted:d,size:s,textOverflow:c,weight:u,...n}=e,h[0]=e,h[1]=r,h[2]=o,h[3]=n,h[4]=l,h[5]=d,h[6]=s,h[7]=c,h[8]=u):(r=h[1],o=h[2],n=h[3],l=h[4],d=h[5],s=h[6],c=h[7],u=h[8]);let b=void 0!==l&&l,m=void 0!==d&&d,g=void 0===s?2:s,v=o;if("ellipsis"===c){let e;h[9]!==v?(e=(0,i.jsx)(rg,{children:v}),h[9]=v,h[10]=e):e=h[10],v=e}let x=I(r),w=I(g);return h[11]!==v?(f=(0,i.jsx)("span",{children:v}),h[11]=v,h[12]=f):f=h[12],h[13]!==b||h[14]!==m||h[15]!==t||h[16]!==n||h[17]!==x||h[18]!==w||h[19]!==f||h[20]!==u?(p=(0,i.jsx)(rm,{"data-ui":"Heading",...n,$accent:b,$align:x,$muted:m,$size:w,$weight:u,ref:t,children:f}),h[13]=b,h[14]=m,h[15]=t,h[16]=n,h[17]=x,h[18]=w,h[19]=f,h[20]=u,h[21]=p):p=h[21],p});rv.displayName="ForwardRef(Heading)";let rx=(0,s.I4)(tK)(function(){return{lineHeight:0,"&&:not([hidden])":{display:"block"},"& > div":{display:"inline-block",verticalAlign:"middle"}}},function(e){let{media:t,space:r}=(0,n.JW)(e.theme);return R(t,e.$space,e=>{let t=j(.5===e?r[1]/2:r[e]);return{margin:`-${t} 0 0 -${t}`,"& > div":{padding:`${t} 0 0 ${t}`}}})}),rw=(0,l.forwardRef)(function(e,t){let r,o,n,d,s,c,u;let f=(0,a.c)(12);f[0]!==e?({as:r,children:o,space:d,...n}=e,f[0]=e,f[1]=r,f[2]=o,f[3]=n,f[4]=d):(r=f[1],o=f[2],n=f[3],d=f[4]),f[5]!==o?(c=l.Children.map(o,ry),f[5]=o,f[6]=c):c=f[6],s=c;let p=I(d);return f[7]!==r||f[8]!==s||f[9]!==n||f[10]!==p?(u=(0,i.jsx)(rx,{"data-ui":"Inline",...n,$space:p,forwardedAs:r,ref:t,children:s}),f[7]=r,f[8]=s,f[9]=n,f[10]=p,f[11]=u):u=f[11],u});function ry(e){return e&&(0,i.jsx)("div",{children:e})}rw.displayName="ForwardRef(Inline)";let r$=s.I4.kbd(t_,function(){return(0,s.AH)`
    --card-bg-color: var(--card-kbd-bg-color);
    --card-border-color: var(--card-kbd-border-color);
    --card-fg-color: var(--card-kbd-fg-color);

    box-shadow: inset 0 0 0 1px var(--card-border-color);
    background: var(--card-bg-color);
    font: inherit;

    vertical-align: top;

    &:not([hidden]) {
      display: inline-block;
    }
  `}),rk=(0,l.forwardRef)(function(e,t){let r,o,n,l,d,s,c,u;let f=(0,a.c)(17);f[0]!==e?({children:r,fontSize:n,padding:l,radius:d,...o}=e,f[0]=e,f[1]=r,f[2]=o,f[3]=n,f[4]=l,f[5]=d):(r=f[1],o=f[2],n=f[3],l=f[4],d=f[5]);let p=void 0===n?0:n,h=void 0===l?1:l,b=I(void 0===d?2:d);return f[6]!==r||f[7]!==p?(s=(0,i.jsx)(t0,{as:"span",size:p,weight:"semibold",children:r}),f[6]=r,f[7]=p,f[8]=s):s=f[8],f[9]!==h||f[10]!==s?(c=(0,i.jsx)(tK,{as:"span",padding:h,children:s}),f[9]=h,f[10]=s,f[11]=c):c=f[11],f[12]!==t||f[13]!==o||f[14]!==b||f[15]!==c?(u=(0,i.jsx)(r$,{"data-ui":"KBD",...o,$radius:b,ref:t,children:c}),f[12]=t,f[13]=o,f[14]=b,f[15]=c,f[16]=u):u=f[16],u});rk.displayName="ForwardRef(KBD)";let rj={name:"@sanity/ui/origin",fn({middlewareData:e,placement:t,rects:r}){let[o]=t.split("-"),n=r.floating.width,i=r.floating.height,a=e.shift?.x||0,l=e.shift?.y||0;if(n<=0||i<=0)return{};let{originX:d,originY:s}=["bottom","top"].includes(o)?{originX:rR(.5-a/n,0,1),originY:"bottom"===o?0:1}:{originX:"left"===o?1:0,originY:rR(.5-l/i,0,1)};return{data:{originX:d,originY:s}}}};function rR(e,t,r){return Math.min(Math.max(e,t),r)}function rE(e,t,r){let o=t.x-e.x,n=t.y-e.y;return rS(e,t,Math.min(1,r/Math.sqrt(o*o+n*n)))}function rS(e,t,r){return{x:e.x+(t.x-e.x)*r,y:e.y+(t.y-e.y)*r}}let rz=s.I4.div(({$w:e})=>(0,s.AH)`
    position: absolute;
    width: ${e}px;
    height: ${e}px;

    :empty + & {
      display: none;
    }

    & > svg {
      display: block;
      line-height: 0;
      transform-origin: ${e/2}px ${e/2}px;
    }

    [data-placement^='top'] > & {
      bottom: -${e}px;

      & > svg {
        transform: rotate(0);
      }
    }

    [data-placement^='right'] > & {
      left: -${e}px;

      & > svg {
        transform: rotate(90deg);
      }
    }

    [data-placement^='left'] > & {
      right: -${e}px;

      & > svg {
        transform: rotate(-90deg);
      }
    }

    [data-placement^='bottom'] > & {
      top: -${e}px;

      & > svg {
        transform: rotate(180deg);
      }
    }
  `),r_=s.I4.path`
  stroke: var(--card-shadow-outline-color);
`,rI=s.I4.path`
  fill: var(--card-bg-color);
`,rC=(0,l.forwardRef)(function(e,t){let r,o,n,l,d,s,c,u,f;let p=(0,a.c)(24);p[0]!==e?({width:l,height:r,radius:n,...o}=e,p[0]=e,p[1]=r,p[2]=o,p[3]=n,p[4]=l):(r=p[1],o=p[2],n=p[3],l=p[4]);let h=void 0===n?0:n,{card:b}=eF(),m=b.shadow.outline,g=(function(e){let t=e.length,r=[];for(let o=0;o<t;o+=1){let t=e[o],n=e[o-1],i=e[o+1];if(n&&t.radius){let e=rE(t,n,t.radius),o=rE(t,i,t.radius),a=rS(e,t,.5),l=rS(t,o,.5);r.push({type:"point",...e}),r.push({type:"curve",curveEnd:o,startControl:a,endControl:l})}else r.push({type:"point",...t})}return r})([{x:0,y:0},{x:h,y:0,radius:h},{x:l/2,y:r-1,radius:h},{x:l-h,y:0,radius:h},{x:l,y:0}]).map((e,t)=>"point"===e.type?`${0===t?"M":"L"} ${e.x} ${e.y}`:"curve"===e.type?`C ${e.startControl.x} ${e.startControl.y} ${e.endControl.x} ${e.endControl.y} ${e.curveEnd.x} ${e.curveEnd.y}`:"").join(" "),v=`${g}`,x=`${g} M ${l} -1 M 0 -1 Z`,w=`0 0 ${l} ${l}`;p[5]!==m||p[6]!==l?(d=(0,i.jsx)("mask",{id:"stroke-mask",children:(0,i.jsx)("rect",{x:0,y:m,width:l,height:l,fill:"white"})}),p[5]=m,p[6]=l,p[7]=d):d=p[7];let y=2*m;return p[8]!==v||p[9]!==y?(s=(0,i.jsx)(r_,{d:v,mask:"url(#stroke-mask)",strokeWidth:y}),p[8]=v,p[9]=y,p[10]=s):s=p[10],p[11]!==x?(c=(0,i.jsx)(rI,{d:x}),p[11]=x,p[12]=c):c=p[12],p[13]!==w||p[14]!==d||p[15]!==s||p[16]!==c||p[17]!==l?(u=(0,i.jsxs)("svg",{width:l,height:l,viewBox:w,children:[d,s,c]}),p[13]=w,p[14]=d,p[15]=s,p[16]=c,p[17]=l,p[18]=u):u=p[18],p[19]!==t||p[20]!==o||p[21]!==u||p[22]!==l?(f=(0,i.jsx)(rz,{...o,$w:l,ref:t,children:u}),p[19]=t,p[20]=o,p[21]=u,p[22]=l,p[23]=f):f=p[23],f});rC.displayName="ForwardRef(Arrow)";let rT=eI("@sanity/ui/context/boundaryElement",null);function rA(e){let t,r,o;let n=(0,a.c)(5),{children:l,element:d}=e;return n[0]!==d?(r={version:0,element:d},n[0]=d,n[1]=r):r=n[1],t=r,n[2]!==l||n[3]!==t?(o=(0,i.jsx)(rT.Provider,{value:t,children:l}),n[2]=l,n[3]=t,n[4]=o):o=n[4],o}function rM(e){return!!(e&&"object"==typeof e&&!Array.isArray(e))}rA.displayName="BoundaryElementProvider";let rN={version:0,element:null};function rF(){let e=(0,l.useContext)(rT);if(e&&(!rM(e)||0!==e.version))throw Error("useBoundaryElement(): the context value is not compatible");return e||rN}let rO=(0,l.forwardRef)(function(e,t){let r,o,n,d,s,c,u,f,p,h,b;let m=(0,a.c)(18),g=eF();m[0]!==e?({children:o,media:r,...n}=e,m[0]=e,m[1]=r,m[2]=o,m[3]=n):(r=m[1],o=m[2],n=m[3]);let v=r??g.media,[x,w]=(0,l.useState)(null),y=eR(x);if(d=y?.border.width??window.innerWidth,m[4]!==v||m[5]!==d){let e=function(e,t){let r=[];for(let o=0;o<e.length;o+=1)e[o]>t&&r.push(o);return r}(v,d);c=e.length?e.join(" "):void 0,m[4]=v,m[5]=d,m[6]=c}else c=m[6];if(s=c,m[7]!==v||m[8]!==d){let e=function(e,t){let r=[];for(let o=0;o<e.length;o+=1)e[o]<=t&&r.push(o);return r}(v,d);f=e.length?e.join(" "):void 0,m[7]=v,m[8]=d,m[9]=f}else f=m[9];return u=f,m[10]!==x?(p=()=>x,h=[x],m[10]=x,m[11]=p,m[12]=h):(p=m[11],h=m[12]),(0,l.useImperativeHandle)(t,p,h),m[13]!==o||m[14]!==s||m[15]!==u||m[16]!==n?(b=(0,i.jsx)("div",{"data-ui":"ElementQuery",...n,"data-eq-max":s,"data-eq-min":u,ref:w,children:o}),m[13]=o,m[14]=s,m[15]=u,m[16]=n,m[17]=b):b=m[17],b});rO.displayName="ForwardRef(ElementQuery)";class rW extends l.Component{state={error:null};static getDerivedStateFromError(e){return{error:e}}componentDidCatch(e,t){this.props.onCatch({error:e,info:t})}render(){let{error:e}=this.state;if(e){let t="string"==typeof e?.message?e.message:"Error";return(0,i.jsx)(rc,{children:t})}return this.props.children}}function rH(e){if(!rM(e)||0!==e.version)throw Error("the context value is not compatible");if(!e)throw Error("components using `useLayer()` should be wrapped in a <LayerProvider>.");if(0===e.version)return e;throw Error("could not get layer context")}let rB=eI("@sanity/ui/context/layer",null);function rL(){let e=(0,a.c)(2),t=(0,l.useContext)(rB);if(!t)throw Error("useLayer(): missing context value");try{let r;return e[0]!==t?(r=rH(t),e[0]=t,e[1]=r):r=e[1],r}catch(e){throw e instanceof Error?Error(`useLayer(): ${e.message}`):Error(`useLayer(): ${e}`)}}function rD(e){let t=requestAnimationFrame(e);return()=>{cancelAnimationFrame(t)}}function rJ(e){let t=null,r=rD(()=>{t=rD(e)});return()=>{t&&t(),r()}}function rP(e){return e instanceof Node&&e.nodeType===Node.ELEMENT_NODE}function rV(e){return rP(e)&&"A"===e.nodeName}function rX(e){return rP(e)&&"BUTTON"===e.nodeName}function rq(e,t){return e.contains(t)||e===t}function rG(e){if(!(e.tabIndex>0||0===e.tabIndex&&null!==e.getAttribute("tabIndex")||(rV(e)?!!e.href&&"ignore"!==e.rel:rP(e)&&"INPUT"===e.nodeName?"hidden"!==e.type&&"file"!==e.type&&!e.disabled:!!(rX(e)||rP(e)&&"SELECT"===e.nodeName||rP(e)&&"TEXTAREA"===e.nodeName)&&!e.disabled)))return!1;try{e.focus()}catch{}return document.activeElement===e}function rU(e){for(let t=0;t<e.childNodes.length;t++){let r=e.childNodes[t];if(rP(r)&&(rG(r)||rU(r)))return!0}return!1}function rY(e){for(let t=e.childNodes.length-1;t>=0;t--){let r=e.childNodes[t];if(rP(r)&&(rG(r)||rY(r)))return!0}return!1}function rK(e){let t,r,o,n,d,s,c,u;let f=(0,a.c)(19),{children:p,zOffset:h}=e,b=(0,l.useContext)(rB);f[0]!==b?(t=b&&rH(b),f[0]=b,f[1]=t):t=f[1];let m=t,g=m?.registerChild,v=(m?.level??0)+1,x=I(void 0===h?0:h),w=x.length-1,y=Math.min(eW(),w),$=m?m.zIndex+x[y]:x[y];f[2]===Symbol.for("react.memo_cache_sentinel")?(r={},f[2]=r):r=f[2];let[,k]=(0,l.useState)(r),[j,R]=(0,l.useState)(0),E=0===j;f[3]!==g||f[4]!==k?(o=e=>{let t=g?.(e);return void 0!==e?k(t=>{let r=t[e]??0,o={...t,[e]:r+1};return R(Object.keys(o).length),o}):R(rQ),()=>{void 0!==e?k(t=>{let r={...t};return 1===r[e]?(delete r[e],R(Object.keys(r).length)):r[e]=r[e]-1,r}):R(rZ),t?.()}},f[3]=g,f[4]=k,f[5]=o):o=f[5];let S=o;return f[6]!==v||f[7]!==g?(n=()=>g?.(v),d=[v,g],f[6]=v,f[7]=g,f[8]=n,f[9]=d):(n=f[8],d=f[9]),(0,l.useEffect)(n,d),f[10]!==E||f[11]!==v||f[12]!==S||f[13]!==j||f[14]!==$?(c={version:0,isTopLayer:E,level:v,registerChild:S,size:j,zIndex:$},f[10]=E,f[11]=v,f[12]=S,f[13]=j,f[14]=$,f[15]=c):c=f[15],s=c,f[16]!==p||f[17]!==s?(u=(0,i.jsx)(rB.Provider,{value:s,children:p}),f[16]=p,f[17]=s,f[18]=u):u=f[18],u}function rZ(e){return e-1}function rQ(e){return e+1}rK.displayName="LayerProvider";let r0=s.I4.div({position:"relative"}),r1=(0,l.forwardRef)(function(e,t){let r,o,n,d,s,c,u,f,p,h,b;let m=(0,a.c)(22);m[0]!==e?({children:r,onActivate:o,onFocus:n,style:s,...d}=e,m[0]=e,m[1]=r,m[2]=o,m[3]=n,m[4]=d,m[5]=s):(r=m[1],o=m[2],n=m[3],d=m[4],s=m[5]);let g=void 0===s?y:s,{zIndex:v,isTopLayer:x}=rL(),w=(0,l.useRef)(null),$=(0,l.useRef)(null),k=(0,l.useRef)(x);m[6]===Symbol.for("react.memo_cache_sentinel")?(c=()=>$.current,m[6]=c):c=m[6],(0,l.useImperativeHandle)(t,c),m[7]!==x||m[8]!==o?(u=()=>{k.current!==x&&x&&o?.({activeElement:w.current}),k.current=x},f=[x,o],m[7]=x,m[8]=o,m[9]=u,m[10]=f):(u=m[9],f=m[10]),(0,l.useEffect)(u,f),m[11]!==x||m[12]!==n?(p=e=>{n?.(e);let t=$.current,r=document.activeElement;!x||!t||!r||rP(r)&&rq(t,r)&&(w.current=r)},m[11]=x,m[12]=n,m[13]=p):p=m[13];let j=p;return m[14]!==g||m[15]!==v?(h={...g,zIndex:v},m[14]=g,m[15]=v,m[16]=h):h=m[16],m[17]!==r||m[18]!==j||m[19]!==d||m[20]!==h?(b=(0,i.jsx)(r0,{...d,"data-ui":"Layer",onFocus:j,ref:$,style:h,children:r}),m[17]=r,m[18]=j,m[19]=d,m[20]=h,m[21]=b):b=m[21],b}),r2=(0,l.forwardRef)(function(e,t){let r,o,n,l,d;let s=(0,a.c)(11);s[0]!==e?({children:r,zOffset:n,...o}=e,s[0]=e,s[1]=r,s[2]=o,s[3]=n):(r=s[1],o=s[2],n=s[3]);let c=void 0===n?1:n;return s[4]!==r||s[5]!==t||s[6]!==o?(l=(0,i.jsx)(r1,{...o,ref:t,children:r}),s[4]=r,s[5]=t,s[6]=o,s[7]=l):l=s[7],s[8]!==l||s[9]!==c?(d=(0,i.jsx)(rK,{zOffset:c,children:l}),s[8]=l,s[9]=c,s[10]=d):d=s[10],d});r2.displayName="ForwardRef(Layer)";let r3="@sanity/ui/context/portal",r4=Symbol.for(`${r3}/element`);e_[r4]=null;let r5=eI(r3,{version:0,boundaryElement:null,get element(){return typeof document>"u"?null:(e_[r4]||(e_[r4]=document.createElement("div"),e_[r4].setAttribute("data-portal",""),document.body.appendChild(e_[r4])),e_[r4])}});function r6(){let e=(0,l.useContext)(r5);if(!e)throw Error("usePortal(): missing context value");if(!rM(e)||0!==e.version)throw Error("usePortal(): the context value is not compatible");return e}function r7(e){let t;let r=(0,a.c)(3),{children:o,__unstable_name:n}=e,i=r6(),l=(n?i.elements&&i.elements[n]:i.element)||i.elements?.default;return l?(r[0]!==o||r[1]!==l?(t=(0,m.createPortal)(o,l),r[0]=o,r[1]=l,r[2]=t):t=r[2],t):null}function r8(e){let t,r,o;let n=(0,a.c)(7),{boundaryElement:d,children:s,element:c,__unstable_elements:u}=e,f=function(e){let t=(0,l.useRef)(e);return function(e,t){if(!e||!t)return e===t;let r=Object.keys(e),o=Object.keys(t);return r.length===o.length&&r.every(r=>e[r]===t[r])}(t.current,e)||(t.current=e),t.current}(u),p=(0,l.useSyncExternalStore)(ot,oe,r9),h=d||null,b=c||p;return n[0]!==f||n[1]!==h||n[2]!==b?(r={version:0,boundaryElement:h,element:b,elements:f},n[0]=f,n[1]=h,n[2]=b,n[3]=r):r=n[3],t=r,n[4]!==s||n[5]!==t?(o=(0,i.jsx)(r5.Provider,{value:t,children:s}),n[4]=s,n[5]=t,n[6]=o):o=n[6],o}function r9(){return null}function oe(){return document.body}r7.displayName="Portal",r8.displayName="PortalProvider";let ot=()=>()=>{},or=s.I4.div`
  display: block;
  width: 0;
  height: 0;
  position: absolute;
  overflow: hidden;
  overflow: clip;
`;(0,l.forwardRef)(function(e,t){let r;let o=(0,a.c)(4),{as:n,children:l}=e;return o[0]!==n||o[1]!==l||o[2]!==t?(r=(0,i.jsx)(or,{"aria-hidden":!0,as:n,"data-ui":"SrOnly",ref:t,children:l}),o[0]=n,o[1]=l,o[2]=t,o[3]=r):r=o[3],r}).displayName="ForwardRef(SrOnly)";let oo=s.I4.div`
  position: relative;
`,on=s.I4.div`
  position: absolute;
  left: 0;
  right: 0;
`,oi=(0,l.forwardRef)(function(e,t){let r,o,n,d,s,c,u,f,p,h,b,m,g,v,x,w,y,$,k,j;let R=(0,a.c)(56);R[0]!==e?({as:s,gap:c,getItemKey:r,items:u,onChange:o,renderItem:n,...d}=e,R[0]=e,R[1]=r,R[2]=o,R[3]=n,R[4]=d,R[5]=s,R[6]=c,R[7]=u):(r=R[1],o=R[2],n=R[3],d=R[4],s=R[5],c=R[6],u=R[7]);let E=void 0===s?"div":s,S=void 0===c?0:c;R[8]!==u?(f=void 0===u?[]:u,R[8]=u,R[9]=f):f=R[9];let z=f,{space:_}=eF(),I=(0,l.useRef)(null),C=(0,l.useRef)(null),[T,A]=(0,l.useState)(0),[M,N]=(0,l.useState)(0),[F,O]=(0,l.useState)(-1);R[10]===Symbol.for("react.memo_cache_sentinel")?(p=()=>I.current,R[10]=p):p=R[10],(0,l.useImperativeHandle)(t,p),R[11]===Symbol.for("react.memo_cache_sentinel")?(h=()=>{if(!C.current)return;let e=C.current.firstChild;e instanceof HTMLElement&&O(e.offsetHeight)},R[11]=h):h=R[11],R[12]!==n?(b=[n],R[12]=n,R[13]=b):b=R[13],(0,l.useEffect)(h,b),R[14]===Symbol.for("react.memo_cache_sentinel")?(m=()=>{if(!I.current)return;let e=I.current.parentNode;for(;e&&!function(e){if(!(e instanceof Element))return!1;let t=window.getComputedStyle(e);return t.overflowX.includes("auto")||t.overflowX.includes("scroll")||t.overflowY.includes("auto")||t.overflowY.includes("scroll")}(e);)e=e.parentNode;if(e){let t=e;if(!(t instanceof HTMLElement))return;let r=()=>{A(t.scrollTop)};t.addEventListener("scroll",r,{passive:!0});let o=new ek(e=>{N(e[0].contentRect.height)});return o.observe(t),r(),()=>{t.removeEventListener("scroll",r),o.unobserve(t),o.disconnect()}}let t=()=>{A(window.scrollY)},r=()=>{N(window.innerHeight)};return window.addEventListener("scroll",t,{passive:!0}),window.addEventListener("resize",r),N(window.innerHeight),t(),()=>{window.removeEventListener("scroll",t),window.removeEventListener("resize",r)}},g=[],R[14]=m,R[15]=g):(m=R[14],g=R[15]),(0,l.useEffect)(m,g);let W=z.length,H=F?W*(F+_[S])-_[S]:0,B=H?Math.max(Math.floor(T/H*W)-2,0):0,L=H?Math.ceil((T+M)/H*W)+1:0;R[16]!==B||R[17]!==S||R[18]!==F||R[19]!==o||R[20]!==M||R[21]!==T||R[22]!==_||R[23]!==L?(x=()=>{o&&o({fromIndex:B,gap:_[S],itemHeight:F,scrollHeight:M,scrollTop:T,toIndex:L})},v=[B,S,F,o,M,T,_,L],R[16]=B,R[17]=S,R[18]=F,R[19]=o,R[20]=M,R[21]=T,R[22]=_,R[23]=L,R[24]=v,R[25]=x):(v=R[24],x=R[25]),(0,l.useEffect)(x,v);e:{let e;if(!n||0===z.length){w=null;break e}if(-1===F){let e,t;let r=z[0];R[26]!==n||R[27]!==r?(e=n(r),R[26]=n,R[27]=r,R[28]=e):e=R[28],R[29]!==e?(t=[(0,i.jsx)(on,{children:e},0)],R[29]=e,R[30]=t):t=R[30],w=t;break e}if(R[31]!==B||R[32]!==S||R[33]!==r||R[34]!==F||R[35]!==z||R[36]!==n||R[37]!==_||R[38]!==L){let t;R[40]!==B||R[41]!==S||R[42]!==r||R[43]!==F||R[44]!==n||R[45]!==_?(t=(e,t)=>{let o=B+t,a=n(e),l=r?r(e,o):o;return(0,i.jsx)(on,{style:{top:o*(F+_[S])},children:a},l)},R[40]=B,R[41]=S,R[42]=r,R[43]=F,R[44]=n,R[45]=_,R[46]=t):t=R[46],e=z.slice(B,L).map(t),R[31]=B,R[32]=S,R[33]=r,R[34]=F,R[35]=z,R[36]=n,R[37]=_,R[38]=L,R[39]=e}else e=R[39];w=e}let D=w;return R[47]!==H?($={height:H},R[47]=H,R[48]=$):$=R[48],y=$,R[49]!==D||R[50]!==y?(k=(0,i.jsx)("div",{ref:C,style:y,children:D}),R[49]=D,R[50]=y,R[51]=k):k=R[51],R[52]!==E||R[53]!==d||R[54]!==k?(j=(0,i.jsx)(oo,{as:E,"data-ui":"VirtualList",...d,ref:I,children:k}),R[52]=E,R[53]=d,R[54]=k,R[55]=j):j=R[55],j});oi.displayName="ForwardRef(VirtualList)";let oa=[0,0,0,0],ol={top:["bottom","left","right"],"top-start":["bottom-start","left-start","right-start"],"top-end":["bottom-end","left-end","right-end"],bottom:["top","left","right"],"bottom-start":["top-start","left-start","right-start"],"bottom-end":["top-end","left-end","right-end"],left:["right","top","bottom"],"left-start":["right-start","top-start","bottom-start"],"left-end":["right-end","top-end","bottom-end"],right:["left","top","bottom"],"right-start":["left-start","top-start","bottom-start"],"right-end":["left-end","top-end","bottom-end"]},od=(0,s.I4)(h.P.create(rn))`
  &:not([hidden]) {
    display: flex;
  }
  flex-direction: column;
  width: max-content;
  min-width: min-content;
  & > * {
    opacity: var(${$}, 1);
    will-change: opacity;
  }
`,os=(0,l.memo)((0,l.forwardRef)(function(e,t){let r,o,n,l,d,s,c,u,f,p,h,b,m,g,v,x,w,y,$,j,R,E,S,z,_,I,C,T,A,M,N,F;let O=(0,a.c)(60);O[0]!==e?({__unstable_margins:c,animate:r,arrow:o,arrowRef:n,arrowX:l,arrowY:d,children:s,padding:h,placement:b,originX:u,originY:f,overflow:p,radius:m,scheme:v,shadow:x,strategy:w,style:y,tone:$,width:j,x:R,y:E,...g}=e,O[0]=e,O[1]=r,O[2]=o,O[3]=n,O[4]=l,O[5]=d,O[6]=s,O[7]=c,O[8]=u,O[9]=f,O[10]=p,O[11]=h,O[12]=b,O[13]=m,O[14]=g,O[15]=v,O[16]=x,O[17]=w,O[18]=y,O[19]=$,O[20]=j,O[21]=R,O[22]=E):(r=O[1],o=O[2],n=O[3],l=O[4],d=O[5],s=O[6],c=O[7],u=O[8],f=O[9],p=O[10],h=O[11],b=O[12],m=O[13],g=O[14],v=O[15],x=O[16],w=O[17],y=O[18],$=O[19],j=O[20],R=O[21],E=O[22]);let{zIndex:W}=rL(),H=(R??0)+(S=c||oa)[3],B=(E??0)+S[0],L=r?"transform":void 0;O[23]!==u||O[24]!==f||O[25]!==w||O[26]!==y||O[27]!==L||O[28]!==j||O[29]!==H||O[30]!==B||O[31]!==W?(_={left:H,originX:u,originY:f,position:w,top:B,width:j,zIndex:W,willChange:L,...y},O[23]=u,O[24]=f,O[25]=w,O[26]=y,O[27]=L,O[28]=j,O[29]=H,O[30]=B,O[31]=W,O[32]=_):_=O[32],z=_;let D=null!==l?l:void 0,J=null!==d?d:void 0;O[33]!==D||O[34]!==J?(C={left:D,top:J,right:void 0,bottom:void 0},O[33]=D,O[34]=J,O[35]=C):C=O[35],I=C;let P=g;return O[36]!==r?(T=r?k:{},O[36]=r,O[37]=T):T=O[37],O[38]!==s||O[39]!==h?(A=(0,i.jsx)(t4,{direction:"column",flex:1,padding:h,children:s}),O[38]=s,O[39]=h,O[40]=A):A=O[40],O[41]!==p||O[42]!==A?(M=(0,i.jsx)(t4,{"data-ui":"Popover__wrapper",direction:"column",flex:1,overflow:p,children:A}),O[41]=p,O[42]=A,O[43]=M):M=O[43],O[44]!==o||O[45]!==n||O[46]!==I?(N=o&&(0,i.jsx)(rC,{ref:n,style:I,width:19,height:8,radius:2}),O[44]=o,O[45]=n,O[46]=I,O[47]=N):N=O[47],O[48]!==b||O[49]!==m||O[50]!==t||O[51]!==z||O[52]!==v||O[53]!==x||O[54]!==M||O[55]!==N||O[56]!==P||O[57]!==T||O[58]!==$?(F=(0,i.jsxs)(od,{"data-ui":"Popover",...P,"data-placement":b,radius:m,ref:t,scheme:v,shadow:x,sizing:"border",style:z,tone:$,...T,children:[M,N]}),O[48]=b,O[49]=m,O[50]=t,O[51]=z,O[52]=v,O[53]=x,O[54]=M,O[55]=N,O[56]=P,O[57]=T,O[58]=$,O[59]=F):F=O[59],F}));os.displayName="Memo(ForwardRef(PopoverCard))";let oc=(0,l.memo)((0,l.forwardRef)(function(e,t){let{container:r,layer:o}=eF(),n=rF(),{__unstable_margins:a=oa,animate:d=!1,arrow:s=!1,boundaryElement:c=n.element,children:u,constrainSize:h=!1,content:m,disabled:g,fallbackPlacements:v=e.fallbackPlacements??ol[e.placement??"bottom"],matchReferenceWidth:x,floatingBoundary:w=e.boundaryElement??n.element,onActivate:y,open:$,overflow:k="hidden",padding:j,placement:R="bottom",portal:E,preventOverflow:S=!0,radius:z=3,referenceBoundary:_=e.boundaryElement??n.element,referenceElement:C,scheme:T,shadow:A=3,tone:M="inherit",width:N="auto",zOffset:F=o.popover.zOffset,updateRef:O,...W}=e,H=!eL()&&d,B=eR(c)?.border,L=I(j),D=I(z),J=I(A),P=I(N),V=I(F),X=(0,l.useRef)(null),q=(0,l.useRef)(null),G="viewport";(0,l.useImperativeHandle)(t,()=>X.current);let U=eW(),Y=h||S?B?.width:void 0,K=function(e){let{container:t,mediaIndex:r,width:o}=e,n=o[r],i=void 0===n?o[o.length-1]:n;return"number"==typeof i?t[i]:void 0}({container:r,mediaIndex:U,width:P}),Z=(0,l.useRef)(K);(0,l.useEffect)(()=>{Z.current=K},[K]);let Q=function(e){let{boundaryWidth:t,currentWidth:r}=e;if(!(void 0===r&&void 0===t))return Math.min(r??1/0,(t||1/0)-8)}({boundaryWidth:Y,currentWidth:K}),ee=(0,l.useRef)(Q);(0,l.useEffect)(()=>{ee.current=Q},[Q]);let et=(0,l.useRef)(void 0);(0,l.useEffect)(()=>{let e=X.current;if(!$||!e)return;let t=et.current;x?void 0!==t&&(e.style.width=`${t}px`):void 0!==K&&(e.style.width=`${K}px`),"number"==typeof Q&&(e.style.maxWidth=`${Q}px`)},[K,x,Q,$]);let er=(0,l.useMemo)(()=>{let e=[];return(h||S)&&e.push((0,p.UU)({boundary:w||void 0,fallbackPlacements:v,padding:4,rootBoundary:G})),e.push((0,p.cY)({mainAxis:4})),(h||x)&&e.push(function(e){let{apply:t,margins:r,padding:o=0}=e;return{name:"@sanity/ui/size",async fn(n){let{elements:i,placement:a,platform:l,rects:d}=n,{floating:s,reference:c}=d,u=await (0,f.__)(n,{altBoundary:!0,boundary:e.boundaryElement||void 0,elementContext:"floating",padding:o,rootBoundary:"viewport"}),p=1/0,h=1/0,b=s.width,m=s.height;a.includes("top")&&(p=b-(u.left+u.right),h=m-u.top),a.includes("right")&&(p=b-u.right,h=m-(u.top+u.bottom)),a.includes("bottom")&&(p=b-(u.left+u.right),h=m-u.bottom),a.includes("left")&&(p=b-u.left,h=m-(u.top+u.bottom)),t({availableWidth:p-r[1]-r[3],availableHeight:h-r[0]-r[2],elements:i,referenceWidth:c.width-r[1]-r[3]});let g=await l.getDimensions(i.floating),v=g.height;return b!==g.width||m!==v?{reset:{rects:!0}}:{}}}}({apply({availableWidth:e,availableHeight:t,elements:r,referenceWidth:o}){et.current=o;let n=Z.current,i=ee.current;x?r.floating.style.width=`${o}px`:void 0!==n&&(r.floating.style.width=`${n}px`),h&&(r.floating.style.maxWidth=`${Math.min(e,i??1/0)}px`,r.floating.style.maxHeight=`${t}px`)},boundaryElement:w||void 0,constrainSize:h,margins:a,matchReferenceWidth:x,padding:4})),S&&e.push((0,p.BN)({boundary:w||void 0,rootBoundary:G,padding:4})),s&&e.push((0,p.UE)({element:q,padding:4})),H&&e.push(rj),e.push((0,p.jD)({boundary:_||void 0,padding:4,strategy:"referenceHidden"})),e},[H,s,h,v,w,a,x,S,_]),{x:eo,y:en,middlewareData:ei,placement:ea,refs:el,strategy:ed,update:es}=(0,p.we)({middleware:er,placement:R,whileElementsMounted:f.ll,elements:C?{reference:C}:void 0}),ec=ei.hide?.referenceHidden,eu=ei.arrow?.x,ef=ei.arrow?.y,ep=ei["@sanity/ui/origin"]?.originX,eh=ei["@sanity/ui/origin"]?.originY,eb=(0,l.useCallback)(e=>{q.current=e},[]),em=(0,l.useCallback)(e=>{X.current=e,el.setFloating(e)},[el]),eg=(0,l.useCallback)(e=>{let t,r;el.setReference(e);let o=(t=Object.getOwnPropertyDescriptor(u.props,"ref")?.get)&&"isReactWarning"in t&&t.isReactWarning?u.ref:(t=Object.getOwnPropertyDescriptor(u,"ref")?.get)&&"isReactWarning"in t&&t.isReactWarning?u.props.ref:u.props.ref||u.ref;"function"==typeof o?o(e):o&&(o.current=e)},[u,el]),ev=(0,l.useMemo)(()=>C?u:u?(0,l.cloneElement)(u,{ref:eg}):null,[u,C,eg]);if((0,l.useEffect)(()=>{O&&("function"==typeof O?O(es):O&&(O.current=es))},[es,O]),g)return u||(0,i.jsx)(i.Fragment,{});let ex=(0,i.jsx)(rK,{zOffset:V,children:(0,i.jsx)(os,{...W,__unstable_margins:a,animate:H,arrow:s,arrowRef:eb,arrowX:eu,arrowY:ef,hidden:ec,overflow:k,padding:L,placement:ea,radius:D,ref:em,scheme:T,shadow:J,originX:ep,originY:eh,strategy:ed,tone:M,width:x?et.current:K,x:eo,y:en,children:m})}),ew=$&&(E?(0,i.jsx)(r7,{__unstable_name:"string"==typeof E?E:void 0,children:ex}):ex);return(0,i.jsxs)(i.Fragment,{children:[H?(0,i.jsx)(b.N,{children:ew}):ew,ev]})}));oc.displayName="Memo(ForwardRef(Popover))";let ou=s.I4.div(function(){return(0,s.AH)`
    position: relative;

    &:not([hidden]) {
      display: inline-block;
    }

    &[data-read-only] {
      outline: 1px solid red;
    }
  `}),of=s.I4.input(function(e){let{color:t,input:r}=(0,n.JW)(e.theme),o=(r.radio.size-r.radio.markSize)/2;return(0,s.AH)`
    appearance: none;
    position: absolute;
    top: 0;
    left: 0;
    opacity: 0;
    height: 100%;
    width: 100%;
    outline: none;
    z-index: 1;
    padding: 0;
    margin: 0;
    border-radius: ${j(r.radio.size/2)};
    border: none;

    /* enabled */
    & + span {
      display: block;
      position: relative;
      height: ${j(r.radio.size)};
      width: ${j(r.radio.size)};
      border-radius: ${j(r.radio.size/2)};
      background: ${t.input.default.enabled.bg};
      box-shadow: ${te({color:t.input.default.enabled.border,width:r.border.width})};

      &::after {
        content: '';
        position: absolute;
        top: ${j(o)};
        left: ${j(o)};
        height: ${j(r.radio.markSize)};
        width: ${j(r.radio.markSize)};
        border-radius: ${j(r.radio.markSize/2)};
        background: ${t.input.default.enabled.fg};
        opacity: 0;
      }
    }

    /* focused */
    &:not(:disabled):focus + span {
      box-shadow: ${tt({border:{width:r.border.width,color:t.input.default.enabled.border},focusRing:r.radio.focusRing})};
    }

    &:not(:disabled):focus:not(:focus-visible) + span {
      box-shadow: ${te({color:t.input.default.enabled.border,width:r.border.width})};
    }

    &:checked + span::after {
      opacity: 1;
    }

    /* customValidity */
    &[data-error] + span {
      background-color: ${t.input.invalid.enabled.border};
      box-shadow: ${te({width:r.border.width,color:t.input.invalid.enabled.muted.bg})};
      &::after {
        background: ${t.input.invalid.enabled.muted.bg};
      }
    }

    /* read only */
    &[data-read-only] + span {
      box-shadow: 0 0 0 1px ${t.input.default.readOnly.border};
      background: ${t.input.default.readOnly.bg};

      &::after {
        background: ${t.input.default.readOnly.border};
      }
    }

    /* disabled */
    &:not([data-read-only]):disabled + span {
      box-shadow: 0 0 0 1px ${t.input.default.disabled.border};
      background: ${t.input.default.disabled.bg};

      &::after {
        background: ${t.input.default.disabled.border};
      }
    }
  `}),op=(0,l.forwardRef)(function(e,t){let r,o,n,d,s,c,u,f,p,h;let b=(0,a.c)(19);b[0]!==e?({className:r,disabled:n,style:c,customValidity:o,readOnly:d,...s}=e,b[0]=e,b[1]=r,b[2]=o,b[3]=n,b[4]=d,b[5]=s,b[6]=c):(r=b[1],o=b[2],n=b[3],d=b[4],s=b[5],c=b[6]);let m=(0,l.useRef)(null);b[7]===Symbol.for("react.memo_cache_sentinel")?(u=()=>m.current,b[7]=u):u=b[7],(0,l.useImperativeHandle)(t,u),A(m,o);let g=!n&&d?"":void 0,v=o?"":void 0,x=n||d;return b[8]!==d||b[9]!==s||b[10]!==g||b[11]!==v||b[12]!==x?(f=(0,i.jsx)(of,{"data-read-only":g,"data-error":v,...s,disabled:x,readOnly:d,ref:m,type:"radio"}),b[8]=d,b[9]=s,b[10]=g,b[11]=v,b[12]=x,b[13]=f):f=b[13],b[14]===Symbol.for("react.memo_cache_sentinel")?(p=(0,i.jsx)("span",{}),b[14]=p):p=b[14],b[15]!==r||b[16]!==c||b[17]!==f?(h=(0,i.jsxs)(ou,{className:r,"data-ui":"Radio",style:c,children:[f,p]}),b[15]=r,b[16]=c,b[17]=f,b[18]=h):h=b[18],h});function oh(e){let{font:t}=(0,n.JW)(e.theme);return(0,s.AH)`
    -webkit-font-smoothing: antialiased;
    appearance: none;
    border: 0;
    font-family: ${t.text.family};
    color: inherit;
    width: 100%;
    outline: none;
    margin: 0;

    &:disabled {
      opacity: 1;
    }
  `}function ob(e){let{color:t,input:r}=(0,n.JW)(e.theme);return(0,s.AH)`
    /* enabled */
    background-color: ${t.input.default.enabled.bg};
    color: ${t.input.default.enabled.fg};
    box-shadow: ${te({color:t.input.default.enabled.border,width:r.border.width})};

    /* hovered */
    @media (hover: hover) {
      &:not(:disabled):hover {
        background-color: ${t.input.default.hovered.bg};
        color: ${t.input.default.hovered.fg};
        box-shadow: ${te({color:t.input.default.hovered.border,width:r.border.width})};
      }
    }

    /* focused */
    &:not(:disabled):focus {
      box-shadow: ${tt({border:{width:r.border.width,color:t.input.default.enabled.border},focusRing:r.select.focusRing})};
    }

    /* read-only */
    &[data-read-only] {
      background-color: ${t.input.default.readOnly.bg};
      color: ${t.input.default.readOnly.fg};
      box-shadow: ${te({color:t.input.default.readOnly.border,width:r.border.width})};
    }

    /* disabled */
    &:not([data-read-only]):disabled {
      background-color: ${t.input.default.disabled.bg};
      color: ${t.input.default.disabled.fg};
      box-shadow: ${te({color:t.input.default.disabled.border,width:r.border.width})};
    }
  `}function om(e){let{$fontSize:t}=e,{font:r,media:o}=(0,n.JW)(e.theme);return R(o,t,e=>{var t;return{fontSize:j((t=r.text.sizes[e]||r.text.sizes[2]).fontSize),lineHeight:j(t.lineHeight)}})}op.displayName="ForwardRef(Radio)";let og={root:function(){return(0,s.AH)`
    position: relative;
    width: -moz-available;
    width: -webkit-fill-available;
    width: stretch;

    &:not([hidden]) {
      display: inline-block;
    }
  `},input:function(){return[t_,oh,ob,om,t$]},iconBox:function(e){let{color:t}=(0,n.JW)(e.theme);return(0,s.AH)`
    pointer-events: none;
    position: absolute;
    top: 0;
    right: 0;

    /* enabled */
    --card-fg-color: ${t.input.default.enabled.fg};

    /* hover */
    @media (hover: hover) {
      select:not(disabled):not(:read-only):hover + && {
        --card-fg-color: ${t.input.default.hovered.fg};
      }
    }

    /* disabled */
    select:disabled + && {
      --card-fg-color: ${t.input.default.disabled.fg};
    }

    /* read-only */
    select[data-read-only] + && {
      --card-fg-color: ${t.input.default.readOnly.fg};
    }
  `}},ov=s.I4.div(og.root),ox=s.I4.select(og.input),ow=(0,s.I4)(tK)(og.iconBox),oy=(0,l.forwardRef)(function(e,t){let r,o,n,d,s,u,f,p,h,b,m,g,v,x,w;let y=(0,a.c)(29);y[0]!==e?({children:r,customValidity:o,disabled:n,fontSize:u,padding:f,radius:p,readOnly:d,space:h,...s}=e,y[0]=e,y[1]=r,y[2]=o,y[3]=n,y[4]=d,y[5]=s,y[6]=u,y[7]=f,y[8]=p,y[9]=h):(r=y[1],o=y[2],n=y[3],d=y[4],s=y[5],u=y[6],f=y[7],p=y[8],h=y[9]);let $=void 0===u?2:u,k=void 0===f?3:f,j=void 0===p?2:p,R=void 0===h?3:h,E=(0,l.useRef)(null);y[10]===Symbol.for("react.memo_cache_sentinel")?(b=()=>E.current,y[10]=b):b=y[10],(0,l.useImperativeHandle)(t,b),A(E,o);let S=!n&&d?"":void 0,z=I($),_=I(k),C=I(j),T=I(R),M=n||d;return y[11]!==r||y[12]!==s||y[13]!==M||y[14]!==S||y[15]!==z||y[16]!==_||y[17]!==C||y[18]!==T?(m=(0,i.jsx)(ox,{"data-read-only":S,"data-ui":"Select",...s,$fontSize:z,$padding:_,$radius:C,$space:T,disabled:M,ref:E,children:r}),y[11]=r,y[12]=s,y[13]=M,y[14]=S,y[15]=z,y[16]=_,y[17]=C,y[18]=T,y[19]=m):m=y[19],y[20]===Symbol.for("react.memo_cache_sentinel")?(g=(0,i.jsx)(c.D3D,{}),y[20]=g):g=y[20],y[21]!==$?(v=(0,i.jsx)(t0,{size:$,children:g}),y[21]=$,y[22]=v):v=y[22],y[23]!==k||y[24]!==v?(x=(0,i.jsx)(ow,{padding:k,children:v}),y[23]=k,y[24]=v,y[25]=x):x=y[25],y[26]!==m||y[27]!==x?(w=(0,i.jsxs)(ov,{"data-ui":"Select",children:[m,x]}),y[26]=m,y[27]=x,y[28]=w):w=y[28],w});oy.displayName="ForwardRef(Select)";let o$={"&&:not([hidden])":{display:"grid"},'&[data-as="ul"],&[data-as="ol"]':{listStyle:"none"},gridTemplateColumns:"minmax(0, 1fr)",gridAutoRows:"min-content"},ok=(0,s.I4)(tK)(function(){return o$},function(e){let{media:t,space:r}=(0,n.JW)(e.theme);return R(t,e.$space,e=>({gridGap:j(r[e])}))}),oj=(0,l.forwardRef)(function(e,t){let r,o,n,l;let d=(0,a.c)(10);d[0]!==e?({as:r,space:n,...o}=e,d[0]=e,d[1]=r,d[2]=o,d[3]=n):(r=d[1],o=d[2],n=d[3]);let s="string"==typeof r?r:void 0,c=I(n);return d[4]!==r||d[5]!==t||d[6]!==o||d[7]!==s||d[8]!==c?(l=(0,i.jsx)(ok,{"data-as":s,"data-ui":"Stack",...o,$space:c,forwardedAs:r,ref:t}),d[4]=r,d[5]=t,d[6]=o,d[7]=s,d[8]=c,d[9]=l):l=d[9],l});oj.displayName="ForwardRef(Stack)";let oR=s.I4.span(function(){return(0,s.AH)`
    position: relative;
    &:not([hidden]) {
      display: inline-block;
    }
  `}),oE=s.I4.input(function(){return(0,s.AH)`
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    opacity: 0;
    height: 100%;
    width: 100%;
    outline: none;
    padding: 0;
    margin: 0;

    /* Place the input element above the representation element */
    z-index: 1;
  `}),oS=s.I4.span(function(e){let{color:t,input:r}=(0,n.JW)(e.theme);return(0,s.AH)`
    --switch-bg-color: ${t.input.default.enabled.border};
    --switch-fg-color: ${t.input.default.enabled.bg};
    --switch-box-shadow: none;

    &:not([hidden]) {
      display: block;
    }
    position: relative;
    width: ${j(r.switch.width)};
    height: ${j(r.switch.height)};
    border-radius: ${j(r.switch.height/2)};

    /* Make sure it’s not possible to interact with the wrapper element */
    pointer-events: none;

    &:after {
      content: '';
      display: block;
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      z-index: 1;
      box-shadow: var(--switch-box-shadow);
      border-radius: inherit;
    }

    /* Focus styles */
    input:focus + && {
      --switch-box-shadow: ${tt({focusRing:r.switch.focusRing})};
    }

    input:focus:not(:focus-visible) + && {
      --switch-box-shadow: none;
    }

    input:checked + && {
      --switch-bg-color: ${t.input.default.enabled.fg};
      --switch-fg-color: ${t.input.default.enabled.bg};
    }

    @media (hover: hover) {
      input:not(:disabled):hover + && {
        --switch-bg-color: ${t.input.default.hovered.border};
        --switch-fg-color: ${t.input.default.hovered.bg};
      }

      input:not(:disabled):checked:hover + && {
        --switch-bg-color: ${t.input.default.enabled.fg};
        --switch-fg-color: ${t.input.default.enabled.bg};
      }
    }

    input:not([data-read-only]):disabled + && {
      --switch-bg-color: ${t.input.default.disabled.border};
      --switch-fg-color: ${t.input.default.disabled.bg};
    }

    input[data-read-only]:disabled + && {
      --switch-bg-color: ${t.input.default.readOnly.border};
      --switch-fg-color: ${t.input.default.readOnly.bg};
    }

    input:checked[data-read-only]:disabled + && {
      --switch-bg-color: ${t.input.default.readOnly.fg};
      --switch-fg-color: ${t.input.default.readOnly.bg};
    }
  `}),oz=s.I4.span(function(e){let{input:t}=(0,n.JW)(e.theme);return(0,s.AH)`
    &:not([hidden]) {
      display: block;
    }
    background-color: var(--switch-bg-color);
    position: absolute;
    left: 0;
    top: 0;
    width: ${j(t.switch.width)};
    height: ${j(t.switch.height)};
    border-radius: ${j(t.switch.height/2)};
  `}),o_=s.I4.span(function(e){let{$indeterminate:t}=e,{input:r}=(0,n.JW)(e.theme),o=r.switch.width,i=r.switch.height,a=r.switch.padding,l=i-2*r.switch.padding,d=o-2*a-l,c=o/2-l/2-a,u=!0!==t&&!0===e.$checked;return(0,s.AH)`
    &:not([hidden]) {
      display: block;
    }
    position: absolute;
    left: ${j(a)};
    top: ${j(a)};
    height: ${j(l)};
    width: ${j(l)};
    border-radius: ${j(l/2)};
    transition-property: transform;
    transition-duration: ${r.switch.transitionDurationMs}ms;
    transition-timing-function: ${r.switch.transitionTimingFunction};
    background: var(--switch-fg-color);
    transform: translate3d(0, 0, 0);
    box-shadow: 0px 1px 0px 0px rgba(0, 0, 0, 0.05);

    ${u&&(0,s.AH)`
      transform: translate3d(${d}px, 0, 0);
    `}

    ${t&&(0,s.AH)`
      transform: translate3d(${c}px, 0, 0);
    `}
  `}),oI=(0,l.forwardRef)(function(e,t){let r,o,n,d,s,c,u,f,p,h,b,m,g,v;let x=(0,a.c)(26);x[0]!==e?({checked:r,className:o,disabled:n,indeterminate:d,readOnly:s,style:u,...c}=e,x[0]=e,x[1]=r,x[2]=o,x[3]=n,x[4]=d,x[5]=s,x[6]=c,x[7]=u):(r=x[1],o=x[2],n=x[3],d=x[4],s=x[5],c=x[6],u=x[7]);let w=(0,l.useRef)(null);x[8]===Symbol.for("react.memo_cache_sentinel")?(f=()=>w.current,x[8]=f):f=x[8],(0,l.useImperativeHandle)(t,f),x[9]!==d?(p=()=>{w.current&&(w.current.indeterminate=d||!1)},h=[d],x[9]=d,x[10]=p,x[11]=h):(p=x[10],h=x[11]),(0,l.useEffect)(p,h);let y=!n&&s?"":void 0,$=!0!==d&&r,k=n||s;return x[12]!==c||x[13]!==y||x[14]!==$||x[15]!==k?(b=(0,i.jsx)(oE,{"data-read-only":y,...c,checked:$,disabled:k,type:"checkbox",ref:w}),x[12]=c,x[13]=y,x[14]=$,x[15]=k,x[16]=b):b=x[16],x[17]===Symbol.for("react.memo_cache_sentinel")?(m=(0,i.jsx)(oz,{}),x[17]=m):m=x[17],x[18]!==r||x[19]!==d?(g=(0,i.jsxs)(oS,{"aria-hidden":!0,"data-name":"representation",children:[m,(0,i.jsx)(o_,{$checked:r,$indeterminate:d})]}),x[18]=r,x[19]=d,x[20]=g):g=x[20],x[21]!==o||x[22]!==u||x[23]!==b||x[24]!==g?(v=(0,i.jsxs)(oR,{className:o,"data-ui":"Switch",style:u,children:[b,g]}),x[21]=o,x[22]=u,x[23]=b,x[24]=g,x[25]=v):v=x[25],v});oI.displayName="ForwardRef(Switch)";let oC=s.I4.span(tj),oT=s.I4.span`
  flex: 1;
  min-width: 0;
  display: block;
  position: relative;
`,oA=s.I4.textarea(ty,tR,tE),oM=s.I4.div(t_,tS),oN=(0,l.forwardRef)(function(e,t){let r,o,n,d,s,c,u,f,p,h,b,m,g;let v=(0,a.c)(29);v[0]!==e?({border:d,customValidity:o,disabled:s,fontSize:c,padding:u,radius:f,weight:p,__unstable_disableFocusRing:r,...n}=e,v[0]=e,v[1]=r,v[2]=o,v[3]=n,v[4]=d,v[5]=s,v[6]=c,v[7]=u,v[8]=f,v[9]=p):(r=v[1],o=v[2],n=v[3],d=v[4],s=v[5],c=v[6],u=v[7],f=v[8],p=v[9]);let x=void 0===d||d,w=void 0!==s&&s,y=void 0===c?2:c,$=void 0===u?3:u,k=void 0===f?2:f,j=(0,l.useRef)(null),R=eA();v[10]===Symbol.for("react.memo_cache_sentinel")?(h=()=>j.current,v[10]=h):h=v[10],(0,l.useImperativeHandle)(t,h),A(j,o);let E=R.scheme,S=R.tone,z=I(y),_=I($),C=R.scheme,T=I(0);v[11]!==w||v[12]!==n||v[13]!==R.scheme||v[14]!==R.tone||v[15]!==T||v[16]!==z||v[17]!==_||v[18]!==p?(b=(0,i.jsx)(oA,{"data-as":"textarea","data-scheme":E,"data-tone":S,...n,$fontSize:z,$padding:_,$scheme:C,$space:T,$tone:R.tone,$weight:p,disabled:w,ref:j}),v[11]=w,v[12]=n,v[13]=R.scheme,v[14]=R.tone,v[15]=T,v[16]=z,v[17]=_,v[18]=p,v[19]=b):b=v[19];let M=I(k),N=x?"":void 0;return v[20]!==r||v[21]!==R.scheme||v[22]!==R.tone||v[23]!==M||v[24]!==N?(m=(0,i.jsx)(oM,{$radius:M,$unstableDisableFocusRing:r,$scheme:R.scheme,$tone:R.tone,"data-border":N,"data-scheme":R.scheme,"data-tone":R.tone}),v[20]=r,v[21]=R.scheme,v[22]=R.tone,v[23]=M,v[24]=N,v[25]=m):m=v[25],v[26]!==b||v[27]!==m?(g=(0,i.jsx)(oC,{"data-ui":"TextArea",children:(0,i.jsxs)(oT,{children:[b,m]})}),v[26]=b,v[27]=m,v[28]=g):g=v[28],g});oN.displayName="ForwardRef(TextArea)";let oF={zIndex:2},oO=(0,s.I4)(rn).attrs({forwardedAs:"span"})(tj),oW=s.I4.span`
  flex: 1;
  min-width: 0;
  display: block;
  position: relative;
`,oH=(0,s.I4)(rn).attrs({forwardedAs:"span"})`
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;

  & > span {
    display: block;
    margin: -1px;
  }
`,oB=(0,s.I4)(rn).attrs({forwardedAs:"span"})`
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;

  & > span {
    display: block;
    margin: -1px;
  }
`,oL=s.I4.input(ty,tR,tE),oD=s.I4.span(t_,tS),oJ=(0,s.I4)(tK)`
  position: absolute;
  top: 0;
  left: 0;
`,oP=(0,s.I4)(tK)`
  position: absolute;
  top: 0;
  right: 0;
`,oV=(0,s.I4)(rn)`
  background-color: transparent;
  position: absolute;
  top: 0;
  right: 0;
`,oX=(0,s.I4)(rr)({"&:not([hidden])":{display:"block"}}),oq=(0,l.forwardRef)(function(e,t){let r,o,n,s,u,f,p,h,b,m,g,v,x,w,$,k,j,R,E,S,z,_,C,T,M,N,F,O,W,H,B,L,D,J,P,V,X,q;let G=(0,a.c)(84);G[0]!==e?({__unstable_disableFocusRing:n,border:g,clearButton:s,disabled:v,fontSize:x,icon:r,iconRight:o,onClear:f,padding:w,prefix:p,radius:$,readOnly:h,space:k,suffix:m,customValidity:u,type:j,weight:R,...b}=e,G[0]=e,G[1]=r,G[2]=o,G[3]=n,G[4]=s,G[5]=u,G[6]=f,G[7]=p,G[8]=h,G[9]=b,G[10]=m,G[11]=g,G[12]=v,G[13]=x,G[14]=w,G[15]=$,G[16]=k,G[17]=j,G[18]=R):(r=G[1],o=G[2],n=G[3],s=G[4],u=G[5],f=G[6],p=G[7],h=G[8],b=G[9],m=G[10],g=G[11],v=G[12],x=G[13],w=G[14],$=G[15],k=G[16],j=G[17],R=G[18]);let U=void 0===g||g,Y=void 0!==v&&v,K=void 0===x?2:x,Z=void 0===w?3:w,Q=void 0===$?2:$,ee=void 0===k?3:k,et=void 0===j?"text":j,er=(0,l.useRef)(null),eo=eA(),en=I(K),ei=I(Z),ea=I(Q),el=I(ee),ed=!!s,es=!!r,ec=!!o,eu=!!m,ef=!!p;G[19]===Symbol.for("react.memo_cache_sentinel")?(E=()=>er.current,G[19]=E):E=G[19],(0,l.useImperativeHandle)(t,E),A(er,u),G[20]!==f?(S=e=>{e.preventDefault(),e.stopPropagation(),f&&f(),er.current?.focus()},G[20]=f,G[21]=S):S=G[21];let ep=S;G[22]!==p||G[23]!==ea?(_=p&&(0,i.jsx)(oH,{borderTop:!0,borderLeft:!0,borderBottom:!0,radius:ea,sizing:"border",tone:"inherit",children:(0,i.jsx)("span",{children:p})}),G[22]=p,G[23]=ea,G[24]=_):_=G[24],z=_;let eh=U?"":void 0;G[25]!==r||G[26]!==en||G[27]!==ei?(T=r&&(0,i.jsx)(oJ,{padding:ei,children:(0,i.jsxs)(t0,{size:en,children:[(0,l.isValidElement)(r)&&r,(0,d.isValidElementType)(r)&&(0,i.jsx)(r,{})]})}),G[25]=r,G[26]=en,G[27]=ei,G[28]=T):T=G[28],G[29]!==ed||G[30]!==o||G[31]!==en||G[32]!==ei?(M=!ed&&o&&(0,i.jsx)(oP,{padding:ei,children:(0,i.jsxs)(t0,{size:en,children:[(0,l.isValidElement)(o)&&o,(0,d.isValidElementType)(o)&&(0,i.jsx)(o,{})]})}),G[29]=ed,G[30]=o,G[31]=en,G[32]=ei,G[33]=M):M=G[33],G[34]!==ef||G[35]!==eu||G[36]!==n||G[37]!==ea||G[38]!==eo.scheme||G[39]!==eo.tone||G[40]!==eh||G[41]!==T||G[42]!==M?(N=(0,i.jsxs)(oD,{$hasPrefix:ef,$unstableDisableFocusRing:n,$hasSuffix:eu,$radius:ea,$scheme:eo.scheme,$tone:eo.tone,"data-border":eh,"data-scheme":eo.scheme,"data-tone":eo.tone,children:[T,M]}),G[34]=ef,G[35]=eu,G[36]=n,G[37]=ea,G[38]=eo.scheme,G[39]=eo.tone,G[40]=eh,G[41]=T,G[42]=M,G[43]=N):N=G[43],C=N,G[44]!==ei?(O=ei.map(oU),G[44]=ei,G[45]=O):O=G[45],F=O,G[46]!==ei?(H=ei.map(oY),G[46]=ei,G[47]=H):H=G[47],W=H,B="object"==typeof s?s:y,G[48]!==s||G[49]!==F||G[50]!==W||G[51]!==B||G[52]!==u||G[53]!==Y||G[54]!==en||G[55]!==ep||G[56]!==ea||G[57]!==h?(D=!Y&&!h&&s&&(0,i.jsx)(oV,{forwardedAs:"span",padding:F,style:oF,tone:u?"critical":"inherit",children:(0,i.jsx)(oX,{"aria-label":"Clear","data-qa":"clear-button",fontSize:en,icon:c.USm,mode:"bleed",padding:W,radius:ea,...B,onClick:ep,onMouseDown:oG})}),G[48]=s,G[49]=F,G[50]=W,G[51]=B,G[52]=u,G[53]=Y,G[54]=en,G[55]=ep,G[56]=ea,G[57]=h,G[58]=D):D=G[58],L=D,G[59]!==ea||G[60]!==m?(P=m&&(0,i.jsx)(oB,{borderTop:!0,borderRight:!0,borderBottom:!0,radius:ea,sizing:"border",tone:"inherit",children:(0,i.jsx)("span",{children:m})}),G[59]=ea,G[60]=m,G[61]=P):P=G[61],J=P;let eb=ec||ed;return G[62]!==es||G[63]!==Y||G[64]!==en||G[65]!==ei||G[66]!==h||G[67]!==b||G[68]!==eo.scheme||G[69]!==eo.tone||G[70]!==el||G[71]!==eb||G[72]!==et||G[73]!==R?(V=(0,i.jsx)(oL,{"data-as":"input","data-scheme":eo.scheme,"data-tone":eo.tone,...b,$fontSize:en,$iconLeft:es,$iconRight:eb,$padding:ei,$scheme:eo.scheme,$space:el,$tone:eo.tone,$weight:R,disabled:Y,readOnly:h,ref:er,type:et}),G[62]=es,G[63]=Y,G[64]=en,G[65]=ei,G[66]=h,G[67]=b,G[68]=eo.scheme,G[69]=eo.tone,G[70]=el,G[71]=eb,G[72]=et,G[73]=R,G[74]=V):V=G[74],G[75]!==L||G[76]!==C||G[77]!==V?(X=(0,i.jsxs)(oW,{children:[V,C,L]}),G[75]=L,G[76]=C,G[77]=V,G[78]=X):X=G[78],G[79]!==z||G[80]!==eo.tone||G[81]!==J||G[82]!==X?(q=(0,i.jsxs)(oO,{"data-ui":"TextInput",tone:eo.tone,children:[z,X,J]}),G[79]=z,G[80]=eo.tone,G[81]=J,G[82]=X,G[83]=q):q=G[83],q});function oG(e){e.preventDefault(),e.stopPropagation()}function oU(e){return 0===e?0:1===e||2===e?1:e-2}function oY(e){return 0===e||1===e?0:2===e?1:e-1}function oK(e){let t,r;let o=(0,a.c)(3),[n,i]=(0,l.useState)(e),d=(0,l.useRef)(void 0);o[0]===Symbol.for("react.memo_cache_sentinel")?(t=(e,t)=>{let r=()=>{i(e)};if(d.current&&(clearTimeout(d.current),d.current=void 0),!t)return r();d.current=setTimeout(r,t)},o[0]=t):t=o[0];let s=t;return o[1]!==n?(r=[n,s],o[1]=n,o[2]=r):r=o[2],r}oq.displayName="ForwardRef(TextInput)";let oZ={top:["top-end","top-start","bottom","left","right"],"top-start":["top","top-end","bottom-start","left-start","right-start"],"top-end":["top","top-start","bottom-end","left-end","right-end"],bottom:["bottom-end","bottom-start","top","left","right"],"bottom-start":["bottom","bottom-end","top-start","left-start","right-start"],"bottom-end":["bottom","bottom-start","top-end","left-end","right-end"],left:["left-end","left-start","right","top","bottom"],"left-start":["left","left-end","right-start","top-start","bottom-start"],"left-end":["left","left-start","right-end","top-end","bottom-end"],right:["right-end","right-start","left","top","bottom"],"right-start":["right","right-end","left-start","top-start","bottom-start"],"right-end":["right","right-start","left-end","top-end","bottom-end"]},oQ=(0,s.I4)(h.P.create(rn))`
  & > * {
    opacity: var(${$}, 1);
    will-change: opacity;
  }
`,o0=(0,l.memo)((0,l.forwardRef)(function(e,t){let r,o,n,l,d,s,c,u,f,p,h,b,m,g,v,x,w,y,$,j,R,E;let S=(0,a.c)(42);S[0]!==e?({animate:r,arrow:o,arrowRef:n,arrowX:l,arrowY:d,children:s,originX:c,originY:u,padding:f,placement:p,radius:h,scheme:m,shadow:g,style:v,...b}=e,S[0]=e,S[1]=r,S[2]=o,S[3]=n,S[4]=l,S[5]=d,S[6]=s,S[7]=c,S[8]=u,S[9]=f,S[10]=p,S[11]=h,S[12]=b,S[13]=m,S[14]=g,S[15]=v):(r=S[1],o=S[2],n=S[3],l=S[4],d=S[5],s=S[6],c=S[7],u=S[8],f=S[9],p=S[10],h=S[11],b=S[12],m=S[13],g=S[14],v=S[15]);let z=r?"transform":void 0;S[16]!==c||S[17]!==u||S[18]!==v||S[19]!==z?(w={originX:c,originY:u,willChange:z,...v},S[16]=c,S[17]=u,S[18]=v,S[19]=z,S[20]=w):w=S[20],x=w;let _=null!==l?l:void 0,I=null!==d?d:void 0;S[21]!==_||S[22]!==I?($={left:_,top:I,right:void 0,bottom:void 0},S[21]=_,S[22]=I,S[23]=$):$=S[23],y=$;let C=b;return S[24]!==r?(j=r?k:{},S[24]=r,S[25]=j):j=S[25],S[26]!==o||S[27]!==n||S[28]!==y?(R=o&&(0,i.jsx)(rC,{ref:n,style:y,width:15,height:6,radius:2}),S[26]=o,S[27]=n,S[28]=y,S[29]=R):R=S[29],S[30]!==s||S[31]!==f||S[32]!==p||S[33]!==h||S[34]!==t||S[35]!==x||S[36]!==m||S[37]!==g||S[38]!==C||S[39]!==j||S[40]!==R?(E=(0,i.jsxs)(oQ,{"data-ui":"Tooltip__card",...C,"data-placement":p,padding:f,radius:h,ref:t,scheme:m,shadow:g,style:x,...j,children:[s,R]}),S[30]=s,S[31]=f,S[32]=p,S[33]=h,S[34]=t,S[35]=x,S[36]=m,S[37]=g,S[38]=C,S[39]=j,S[40]=R,S[41]=E):E=S[41],E}));o0.displayName="Memo(ForwardRef(TooltipCard))";let o1=eI("@sanity/ui/context/tooltipDelayGroup",null);function o2(e){let t,r,o;let n=(0,a.c)(10),{children:l,delay:d}=e,[s,c]=oK(!1),[u,f]=oK(null),p="number"==typeof d?d:d?.open||0,h="number"==typeof d?d:d?.close||0,b=s?1:p;return n[0]!==h||n[1]!==s||n[2]!==u||n[3]!==c||n[4]!==f||n[5]!==b?(r={isGroupActive:s,setIsGroupActive:c,openTooltipId:u,setOpenTooltipId:f,openDelay:b,closeDelay:h},n[0]=h,n[1]=s,n[2]=u,n[3]=c,n[4]=f,n[5]=b,n[6]=r):r=n[6],t=r,n[7]!==l||n[8]!==t?(o=(0,i.jsx)(o1.Provider,{value:t,children:l}),n[7]=l,n[8]=t,n[9]=o):o=n[9],o}o2.displayName="TooltipDelayGroupProvider";let o3=(0,s.I4)(r2)`
  pointer-events: none;
`,o4=(0,l.forwardRef)(function(e,t){let r=rF(),{layer:o}=eF(),{animate:n=!1,arrow:d=!1,boundaryElement:s=r?.element,children:c,content:u,disabled:h,fallbackPlacements:m=e.fallbackPlacements??oZ[e.placement??"bottom"],padding:v=2,placement:x="bottom",portal:w,radius:y=2,scheme:$,shadow:k=2,zOffset:j=o.tooltip.zOffset,delay:R,...E}=e,S=!eL()&&n,z=I(m),_=(0,l.useRef)(null),[C,T]=(0,l.useState)(null),A=(0,l.useRef)(null),M="viewport",[N,F]=(0,l.useState)(0);(0,l.useImperativeHandle)(t,()=>_.current);let O=r6(),W="string"==typeof w?O.elements?.[w]||null:O.element,H=(0,l.useMemo)(()=>{let e=[];return e.push((0,p.UU)({boundary:s||void 0,fallbackPlacements:z,padding:4,rootBoundary:M})),e.push((0,p.cY)({mainAxis:4})),e.push((0,p.BN)({boundary:s||void 0,rootBoundary:M,padding:4})),d&&e.push((0,p.UE)({element:A,padding:4})),S&&e.push(rj),e},[S,d,s,z]),{floatingStyles:B,placement:L,middlewareData:D,refs:J,update:P}=(0,p.we)({middleware:H,placement:x,whileElementsMounted:f.ll,elements:{reference:C}}),V=D.arrow?.x,X=D.arrow?.y,q=D["@sanity/ui/origin"]?.originX,G=D["@sanity/ui/origin"]?.originY,U=(0,l.useId)(),[Y,K]=oK(!1),Z=(0,l.useContext)(o1),Q=Y||Z?.openTooltipId===U,ee=null!==Z,et="number"==typeof R?R:R?.open||0,er="number"==typeof R?R:R?.close||0,eo=ee?Z.openDelay:et,en=ee?Z.closeDelay:er,ei=(0,l.useCallback)((e,t)=>{if(ee){if(e){let r=t?0:eo;Z.setIsGroupActive(e,r),Z.setOpenTooltipId(U,r)}else{let r=en>200?en:200;Z.setIsGroupActive(e,r),Z.setOpenTooltipId(null,t?0:en)}}else K(e,t?0:e?eo:en)},[ee,Z,eo,U,en,K]),ea=(0,l.useCallback)(e=>{ei(!1),c?.props?.onBlur?.(e)},[c?.props,ei]),el=(0,l.useCallback)(e=>{ei(!1,!0),c?.props.onClick?.(e)},[c?.props,ei]),ed=(0,l.useCallback)(e=>{ei(!1,!0),c?.props.onContextMenu?.(e)},[c?.props,ei]),es=(0,l.useCallback)(e=>{ei(!0),c?.props?.onFocus?.(e)},[c?.props,ei]),ec=(0,l.useCallback)(e=>{ei(!0),c?.props?.onMouseEnter?.(e)},[c?.props,ei]),eu=(0,l.useCallback)(e=>{ei(!1),c?.props?.onMouseLeave?.(e)},[c?.props,ei]);(function(e){let t,r,o;let n=(0,a.c)(7),{handleIsOpenChange:i,referenceElement:d,showTooltip:s}=e;n[0]!==i||n[1]!==d?(t=(e,t)=>{d&&(d===e||e instanceof Node&&d.contains(e)||(i(!1),t()))},n[0]=i,n[1]=d,n[2]=t):t=n[2];let c=(0,g.J)(t);n[3]!==c||n[4]!==s?(r=()=>{if(!s)return;let e=t=>{c(t.target,()=>window.removeEventListener("mousemove",e))};return window.addEventListener("mousemove",e),()=>window.removeEventListener("mousemove",e)},o=[c,s],n[3]=c,n[4]=s,n[5]=r,n[6]=o):(r=n[5],o=n[6]),(0,l.useEffect)(r,o)})({handleIsOpenChange:ei,referenceElement:C,showTooltip:Q}),(0,l.useEffect)(()=>{h&&Q&&ei(!1)},[h,ei,Q]),(0,l.useEffect)(()=>{!u&&Q&&ei(!1)},[u,ei,Q]),(0,l.useEffect)(()=>{if(Q)return window.addEventListener("keydown",e),()=>{window.removeEventListener("keydown",e)};function e(e){"Escape"===e.key&&ei(!1,!0)}},[ei,Q]),(0,l.useLayoutEffect)(()=>{F(Math.min(...s?[s.offsetWidth]:[],W?.offsetWidth||document.body.offsetWidth)-8)},[s,W]);let ef=(0,l.useCallback)(e=>{A.current=e,P()},[P]),ep=(0,l.useCallback)(e=>{_.current=e,J.setFloating(e)},[J]),eh=(0,l.useRef)(null);(0,l.useImperativeHandle)(c?.ref,()=>eh.current);let eb=(0,l.useMemo)(()=>c?(0,l.cloneElement)(c,{onBlur:ea,onFocus:es,onMouseEnter:ec,onMouseLeave:eu,onClick:el,onContextMenu:ed,ref:eh}):null,[c,ea,el,ed,es,ec,eu]);if((0,l.useEffect)(()=>{if(eb)return T(eh.current),()=>T(null)},[eb]),!eb)return(0,i.jsx)(i.Fragment,{});if(h)return eb;let em=(0,i.jsx)(o3,{"data-ui":"Tooltip",...E,ref:ep,style:{...B,maxWidth:N>0?`${N}px`:void 0},zOffset:j,children:(0,i.jsx)(o0,{...E,animate:S,arrow:d,arrowRef:ef,arrowX:V,arrowY:X,originX:q,originY:G,padding:v,placement:L,radius:y,ref:ep,scheme:$,shadow:k,children:u})}),eg=Q&&(w?(0,i.jsx)(r7,{__unstable_name:"string"==typeof w?w:void 0,children:em}):em);return(0,i.jsxs)(i.Fragment,{children:[S?(0,i.jsx)(b.N,{children:eg}):eg,eb]})});o4.displayName="ForwardRef(Tooltip)";let o5=s.I4.div`
  line-height: 0;
`,o6=(0,s.I4)(tK)`
  & > ul {
    list-style: none;
    padding: 0;
    margin: 0;
  }
`,o7=(0,s.i7)`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`,o8=(0,s.I4)(c.Nl1)`
  animation: ${o7} 500ms linear infinite;
`;function o9(e){let t,r,o;let n=(0,a.c)(11),{children:l,id:d,onSelect:s,selected:c,value:u}=e;n[0]!==s||n[1]!==u?(t=()=>{setTimeout(()=>{s(u)},0)},n[0]=s,n[1]=u,n[2]=t):t=n[2];let f=t;n[3]!==f?(r=e=>{var t;"Enter"!==e.key||rV(t=e.currentTarget)||rX(t)||f()},n[3]=f,n[4]=r):r=n[4];let p=r;return n[5]!==l||n[6]!==f||n[7]!==p||n[8]!==d||n[9]!==c?(o=(0,i.jsx)("li",{"aria-selected":c,"data-ui":"AutocompleteOption",id:d,role:"option",onClick:f,onKeyDown:p,children:l}),n[5]=l,n[6]=f,n[7]=p,n[8]=d,n[9]=c,n[10]=o):o=n[10],o}function ne(e,t){return"input/change"===t.type?{...e,activeValue:null,focused:!0,query:t.query}:"input/focus"===t.type?{...e,focused:!0}:"root/blur"===t.type?{...e,focused:!1,query:null}:"root/clear"===t.type?{...e,activeValue:null,query:null,value:null}:"root/escape"===t.type?{...e,focused:!1,query:null}:"root/open"===t.type?{...e,query:e.query||t.query}:"root/setActiveValue"===t.type?{...e,activeValue:t.value,listFocused:t.listFocused||e.listFocused}:"root/setListFocused"===t.type?{...e,listFocused:t.listFocused}:"value/change"===t.type?{...e,activeValue:t.value,query:null,value:t.value}:e}let nt=["Control","Shift","Alt","Enter","Home","End","PageUp","PageDown","Meta","Tab","CapsLock"],nr=["bottom-start","top-start"],no=(e,t)=>t?t.value:e,nn=(e,t)=>t.value.toLowerCase().indexOf(e.toLowerCase())>-1,ni=(0,l.forwardRef)(function(e,t){let{border:r=!0,customValidity:o,disabled:n,filterOption:a,fontSize:d=2,icon:s,id:u,listBox:f=y,loading:p,onBlur:h,onChange:b,onFocus:m,onQueryChange:g,onSelect:v,openButton:x,openOnFocus:$,options:k,padding:j=3,popover:R=y,prefix:E,radius:S=2,readOnly:z,relatedElements:_,renderOption:C,renderPopover:T,renderValue:A=no,suffix:M,value:N,...F}=e,[O,W]=(0,l.useReducer)(ne,{activeValue:N||null,focused:!1,listFocused:!1,query:null,value:N||null}),{activeValue:H,focused:B,listFocused:L,query:D,value:J}=O,P=(0,l.useCallback)(({value:e})=>(0,i.jsx)(rn,{"data-as":"button",padding:j,radius:2,tone:"inherit",children:(0,i.jsx)(t0,{size:d,textOverflow:"ellipsis",children:e})}),[d,j]),V="function"==typeof C?C:P,X="function"==typeof a?a:nn,q=(0,l.useRef)(null),G=(0,l.useRef)(null),U=(0,l.useRef)(null),Y=(0,l.useRef)(null),K=(0,l.useRef)(!1),Z=(0,l.useRef)(J),Q=(0,l.useRef)(N),ee=(0,l.useRef)(!1);(0,l.useImperativeHandle)(t,()=>U.current);let et=`${u}-listbox`,er=Array.isArray(k)?k:w,eo=I(j),en=(0,l.useMemo)(()=>null!==J?er.find(e=>e.value===J):void 0,[er,J]),ei=(0,l.useMemo)(()=>er.filter(e=>!D||X(D,e)),[X,er,D]),ea=ei.length,el=H?`${u}-option-${H}`:void 0,ed=null!==D&&p||B&&null!==D,es=(0,l.useCallback)(e=>{setTimeout(()=>{if(ee.current)return;let t=(_||[]).concat(q.current?[q.current]:[],G.current?[G.current]:[]),r=!1;if(document.activeElement){for(let e of t)if(e===document.activeElement||e.contains(document.activeElement)){r=!0;break}}!1===r&&(W({type:"root/blur"}),ee.current=!1,g&&g(null),h&&h(e))},0)},[h,g,_]),ec=(0,l.useCallback)(e=>{let t=Y.current,r=e.target instanceof HTMLElement?e.target:null,o=t?.contains(r)||!1;o!==K.current&&(K.current=o,W({type:"root/setListFocused",listFocused:o}))},[]),eu=(0,l.useCallback)(e=>{W({type:"value/change",value:e}),ee.current=!1,v&&v(e),Z.current=e,b&&b(e),g&&g(null),U.current?.focus()},[b,v,g]),ef=(0,l.useCallback)(e=>{if("ArrowDown"===e.key){if(e.preventDefault(),!ea)return;let t=ei.find(e=>e.value===H),r=t?ei.indexOf(t):-1,o=ei[(r+1)%ea];o&&W({type:"root/setActiveValue",value:o.value,listFocused:!0});return}if("ArrowUp"===e.key){if(e.preventDefault(),!ea)return;let t=ei.find(e=>e.value===H),r=t?ei.indexOf(t):-1,o=ei[-1===r?ea-1:(ea+r-1)%ea];o&&W({type:"root/setActiveValue",value:o.value,listFocused:!0});return}if("Escape"===e.key){W({type:"root/escape"}),ee.current=!1,g&&g(null),U.current?.focus();return}let t=e.target,r=Y.current;if((r===t||r?.contains(t))&&!nt.includes(e.key)){U.current?.focus();return}},[H,ei,ea,g]),ep=(0,l.useCallback)(e=>{let t=e.currentTarget.value;W({type:"input/change",query:t}),g&&g(t)},[g]),eh=(0,l.useCallback)(()=>{W({type:"root/open",query:J?A(J,en):""})},[en,A,J]),eb=(0,l.useCallback)(e=>{B||(W({type:"input/focus"}),m&&m(e),$&&eh())},[B,m,$,eh]),em=(0,l.useCallback)(()=>{ee.current=!0},[]),eg=(0,l.useCallback)(()=>{ee.current=!1},[]),ev=(0,l.useCallback)(()=>{W({type:"root/clear"}),Z.current="",b&&b(""),g&&g(null),U.current?.focus()},[b,g]),ex=(0,l.useCallback)(()=>{W({type:"input/focus"})},[]);(0,l.useEffect)(()=>{if(N!==Q.current){Q.current=N,void 0!==N&&(W({type:"value/change",value:N}),Z.current=N);return}N!==Z.current&&(Z.current=N||null,W({type:"value/change",value:N||null}))},[N]),(0,l.useEffect)(()=>{!B&&Z.current&&W({type:"root/setActiveValue",value:Z.current})},[B]),(0,l.useEffect)(()=>{let e=Y.current;if(!e)return;let t=ei.find(e=>e.value===H);if(t){let r=ei.indexOf(t),o=e.childNodes[r];if(o){if(document.activeElement&&o.contains(document.activeElement))return;rU(o)}}},[H,ei]);let ew=(0,l.useMemo)(()=>{if(!p&&!n&&J)return{"aria-label":"Clear",onFocus:ex}},[n,ex,p,J]),ey=(0,l.useMemo)(()=>eo.map(e=>0===e?0:1===e||2===e?1:e-2),[eo]),e$=(0,l.useMemo)(()=>eo.map(e=>Math.max(e-1,0)),[eo]),ek=(0,l.useMemo)(()=>"object"==typeof x?x:y,[x]),ej=(0,l.useCallback)(e=>{eh(),ek.onClick&&ek.onClick(e),rD(()=>U.current?.focus())},[ek,eh]),eR=(0,l.useMemo)(()=>n||z||!x?void 0:(0,i.jsx)(tK,{"aria-hidden":ed,padding:ey,children:(0,i.jsx)(rr,{"aria-label":"Open",disabled:ed,fontSize:d,icon:c.D3D,mode:"bleed",padding:e$,...ek,onClick:ej})}),[n,ed,d,ej,x,ey,e$,ek,z]),eE=(0,l.useMemo)(()=>null===D?null!==J?A(J,en):"":D,[en,D,A,J]),eS=(0,i.jsx)(oq,{...F,"aria-activedescendant":el,"aria-autocomplete":"list","aria-expanded":ed,"aria-owns":et,autoCapitalize:"off",autoComplete:"off",autoCorrect:"off",border:r,clearButton:ew,customValidity:o,disabled:n,fontSize:d,icon:s,iconRight:p&&o8,id:u,inputMode:"search",onChange:ep,onClear:ev,onFocus:eb,padding:eo,prefix:E,radius:S,readOnly:z,ref:U,role:"combobox",spellCheck:!1,suffix:M||eR,value:eE}),ez=(0,l.useCallback)(e=>{"Tab"===e.key&&L&&U.current?.focus()},[L]),e_=(0,l.useMemo)(()=>0===ei.length?null:(0,i.jsx)(o6,{"data-ui":"AutoComplete__results",onKeyDown:ez,padding:1,...f,tabIndex:-1,children:(0,i.jsx)(oj,{as:"ul","aria-multiselectable":!1,"data-ui":"AutoComplete__resultsList",id:et,ref:Y,role:"listbox",space:1,children:ei.map(e=>{let t=null!==H?e.value===H:en===e;return(0,i.jsx)(o9,{id:`${u}-option-${e.value}`,onSelect:eu,selected:t,value:e.value,children:(0,l.cloneElement)(V(e),{disabled:p,selected:t,tabIndex:L&&t?0:-1})},e.value)})})}),[H,en,ei,eu,ez,u,f,et,L,p,V]),eI=(0,l.useMemo)(()=>T?T({content:e_,hidden:!ed,inputElement:U.current,onMouseEnter:em,onMouseLeave:eg},G):0===ea?null:(0,i.jsx)(oc,{arrow:!1,constrainSize:!0,content:e_,fallbackPlacements:nr,matchReferenceWidth:!0,onMouseEnter:em,onMouseLeave:eg,open:ed,overflow:"auto",placement:"bottom-start",portal:!0,radius:S,ref:G,referenceElement:U.current,...R}),[e_,ed,ea,em,eg,R,S,T]);return(0,i.jsxs)(o5,{"data-ui":"Autocomplete",onBlur:es,onFocus:ec,onKeyDown:ef,ref:q,children:[eS,eI]})});ni.displayName="ForwardRef(Autocomplete)";let na=ni,nl=s.I4.ol`
  margin: 0;
  padding: 0;
  display: flex;
  list-style: none;
  align-items: center;
  white-space: nowrap;
  line-height: 0;
`,nd=(0,s.I4)(rr)`
  appearance: none;
  margin: -4px;
`,ns=(0,l.forwardRef)(function(e,t){let{children:r,maxLength:o,separator:n,space:a=2,...d}=e,s=I(a),[c,u]=(0,l.useState)(!1),f=(0,l.useRef)(null),p=(0,l.useRef)(null),h=(0,l.useCallback)(()=>u(!1),[]),b=(0,l.useCallback)(()=>u(!0),[]);C(h,()=>[f.current,p.current]);let m=(0,l.useMemo)(()=>l.Children.toArray(r).filter(l.isValidElement),[r]),g=(0,l.useMemo)(()=>{let e=m.length;if(o&&e>o){let t=Math.ceil(o/2),r=Math.floor(o/2);return[...m.slice(0,t-1),(0,i.jsx)(oc,{constrainSize:!0,content:(0,i.jsx)(oj,{as:"ol",overflow:"auto",padding:s,space:s,children:m.slice(t-1,e-r)}),open:c,placement:"top",portal:!0,ref:p,children:(0,i.jsx)(nd,{fontSize:1,mode:"bleed",onClick:c?h:b,padding:1,ref:f,selected:c,text:"…"})},"button"),...m.slice(e-r)]}return m},[h,b,o,c,m,s]);return(0,i.jsx)(nl,{"data-ui":"Breadcrumbs",...d,ref:t,children:g.map((e,t)=>(0,i.jsxs)(l.Fragment,{children:[t>0&&(0,i.jsx)(tK,{"aria-hidden":!0,as:"li",paddingX:s,children:n||(0,i.jsx)(t0,{muted:!0,children:"/"})}),(0,i.jsx)(tK,{as:"li",children:e})]},t))})});ns.displayName="ForwardRef(Breadcrumbs)";let nc=eI("@sanity/ui/context/dialog",{version:0});function nu(e,t,r){return!e||!t||rq(e,r)||rq(t,r)}let nf=(0,s.I4)(r2)(tz,function({theme:e}){let{color:t}=(0,n.JW)(e);return{"&:not([hidden])":{display:"flex"},top:0,left:0,right:0,bottom:0,alignItems:"center",justifyContent:"center",outline:"none",background:t.backdrop}},function(e){let{media:t}=(0,n.JW)(e.theme);return R(t,e.$position,e=>({"&&":{position:e}}))},function(e){return e.$animate?(0,s.AH)`
    @keyframes zoomIn {
      from {
        opacity: 0;
        transform: scale(0.95);
      }
      to {
        opacity: 1;
        transform: scale(1);
      }
    }
    @keyframes fadeIn {
      from {
        opacity: 0;
      }
      to {
        opacity: 1;
      }
    }

    animation: fadeIn 200ms ease-out;
    // Animates the dialog card.
    & > [data-ui='DialogCard'] {
      animation: zoomIn 200ms ease-out;
    }
  `:(0,s.AH)``}),np=(0,s.I4)(rp)`
  &:not([hidden]) {
    display: flex;
  }
  width: 100%;
  height: 100%;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`,nh=(0,s.I4)(rn)`
  &:not([hidden]) {
    display: flex;
  }
  width: 100%;
  min-height: 0;
  max-height: 100%;
  overflow: hidden;
  overflow: clip;
`,nb=(0,s.I4)(t4)`
  flex: 1;
  min-height: 0;
  width: 100%;
`,nm=(0,s.I4)(tK)`
  position: relative;
  z-index: 2;
`,ng=(0,s.I4)(tK)`
  position: relative;
  z-index: 1;
  overflow: auto;
  outline: none;
`,nv=(0,s.I4)(tK)`
  position: relative;
  z-index: 3;
`,nx=(0,l.forwardRef)(function(e,t){let r,o,n,d,s,u,f,p,h,b,m,g,v;let x=(0,a.c)(38),{__unstable_autoFocus:w,__unstable_hideCloseButton:y,children:$,contentRef:k,footer:j,header:R,id:E,onClickOutside:S,onClose:z,portal:_,radius:T,scheme:A,shadow:M,width:N}=e,F=r6(),O=_?F.elements?.[_]||null:F.element,W=rF().element,H=I(T),B=I(M),L=I(N),D=(0,l.useRef)(null),J=(0,l.useRef)(null),{isTopLayer:P}=rL(),V=`${E}_label`,X=!!z&&!1===y,q=!!R||X;return x[0]===Symbol.for("react.memo_cache_sentinel")?(r=()=>D.current,x[0]=r):r=x[0],(0,l.useImperativeHandle)(t,r),x[1]===Symbol.for("react.memo_cache_sentinel")?(o=()=>J.current,x[1]=o):o=x[1],(0,l.useImperativeHandle)(k,o),x[2]!==w?(n=()=>{w&&D.current&&rU(D.current)},d=[w,D],x[2]=w,x[3]=n,x[4]=d):(n=x[3],d=x[4]),(0,l.useEffect)(n,d),x[5]!==W||x[6]!==P||x[7]!==z||x[8]!==O?(s=e=>{if(!P||!z)return;let t=document.activeElement;t&&!nu(W,O,t)||"Escape"===e.key&&(e.preventDefault(),e.stopPropagation(),z())},x[5]=W,x[6]=P,x[7]=z,x[8]=O,x[9]=s):s=x[9],eS(s),x[10]!==W||x[11]!==P||x[12]!==S||x[13]!==O?(u=P&&S&&(e=>{let t=e.target;t&&!nu(W,O,t)||S()}),x[10]=W,x[11]=P,x[12]=S,x[13]=O,x[14]=u):u=x[14],x[15]===Symbol.for("react.memo_cache_sentinel")?(f=()=>[D.current],x[15]=f):f=x[15],C(u,f),x[16]!==R||x[17]!==V||x[18]!==z||x[19]!==X||x[20]!==q?(p=q&&(0,i.jsx)(nm,{children:(0,i.jsxs)(t4,{align:"flex-start",padding:3,children:[(0,i.jsx)(tK,{flex:1,padding:2,children:R&&(0,i.jsx)(t0,{id:V,size:1,weight:"semibold",children:R})}),X&&(0,i.jsx)(tK,{flex:"none",children:(0,i.jsx)(rr,{"aria-label":"Close dialog",disabled:!z,icon:c.USm,mode:"bleed",onClick:z,padding:2})})]})}),x[16]=R,x[17]=V,x[18]=z,x[19]=X,x[20]=q,x[21]=p):p=x[21],x[22]!==$?(h=(0,i.jsx)(ng,{flex:1,ref:J,tabIndex:-1,children:$}),x[22]=$,x[23]=h):h=x[23],x[24]!==j?(b=j&&(0,i.jsx)(nv,{children:j}),x[24]=j,x[25]=b):b=x[25],x[26]!==p||x[27]!==h||x[28]!==b?(m=(0,i.jsxs)(nb,{direction:"column",children:[p,h,b]}),x[26]=p,x[27]=h,x[28]=b,x[29]=m):m=x[29],x[30]!==H||x[31]!==A||x[32]!==B||x[33]!==m?(g=(0,i.jsx)(nh,{radius:H,ref:D,scheme:A,shadow:B,children:m}),x[30]=H,x[31]=A,x[32]=B,x[33]=m,x[34]=g):g=x[34],x[35]!==g||x[36]!==L?(v=(0,i.jsx)(np,{"data-ui":"DialogCard",width:L,children:g}),x[35]=g,x[36]=L,x[37]=v):v=x[37],v});nx.displayName="ForwardRef(DialogCard)";let nw=(0,l.forwardRef)(function(e,t){let r,o,n,d,s,c,u,f,p,h,b,m,g,v,x,w,y,$,k,j,R,E,S,z,_,C,T,A;let M=(0,a.c)(60),N=(0,l.useContext)(nc),{layer:F}=eF();M[0]!==e?({__unstable_autoFocus:x,__unstable_hideCloseButton:w,cardRadius:y,cardShadow:$,children:n,contentRef:d,footer:s,header:c,id:u,onActivate:f,onClickOutside:p,onClose:h,onFocus:b,padding:k,portal:m,position:r,scheme:v,width:j,zOffset:o,animate:R,...g}=e,M[0]=e,M[1]=r,M[2]=o,M[3]=n,M[4]=d,M[5]=s,M[6]=c,M[7]=u,M[8]=f,M[9]=p,M[10]=h,M[11]=b,M[12]=m,M[13]=g,M[14]=v,M[15]=x,M[16]=w,M[17]=y,M[18]=$,M[19]=k,M[20]=j,M[21]=R):(r=M[1],o=M[2],n=M[3],d=M[4],s=M[5],c=M[6],u=M[7],f=M[8],p=M[9],h=M[10],b=M[11],m=M[12],g=M[13],v=M[14],x=M[15],w=M[16],y=M[17],$=M[18],k=M[19],j=M[20],R=M[21]);let O=void 0===x||x,W=void 0!==w&&w,H=void 0===y?4:y,B=void 0===$?3:$,L=void 0===k?3:k,D=void 0===j?0:j,J=void 0!==R&&R,P=r??(N.position||"fixed"),V=o??(N.zOffset||F.dialog.zOffset),X=!eL()&&J,q=r6(),G=m?q.elements?.[m]||null:q.element,U=rF().element,Y=I(H),K=I(L),Z=I(P),Q=I(D),ee=I(V),et=(0,l.useRef)(null),er=(0,l.useRef)(null),eo=(0,l.useRef)(null),en=(0,l.useRef)(null);M[22]!==b?(E=e=>{b?.(e);let t=e.target,r=eo.current;if(r&&t===et.current){rY(r);return}if(r&&t===er.current){rU(r);return}rP(e.target)&&(en.current=e.target)},M[22]=b,M[23]=E):E=M[23];let ei=E,ea=`${u}_label`,el=(0,l.useRef)(void 0);M[24]!==U||M[25]!==G?(S=()=>{el.current&&clearTimeout(el.current),el.current=setTimeout(()=>{let e=document.activeElement;if(e&&!nu(U,G,e)){let e=en.current;if(!e||!document.body.contains(e)){let e=eo.current;e&&rU(e);return}e.focus()}},0)},M[24]=U,M[25]=G,M[26]=S):S=M[26];let ed=S;return M[27]===Symbol.for("react.memo_cache_sentinel")?(z=(0,i.jsx)("div",{ref:et,tabIndex:0}),M[27]=z):z=M[27],M[28]!==O||M[29]!==Y||M[30]!==B||M[31]!==n||M[32]!==d||M[33]!==s||M[34]!==c||M[35]!==W||M[36]!==u||M[37]!==p||M[38]!==h||M[39]!==m||M[40]!==v||M[41]!==Q?(_=(0,i.jsx)(nx,{__unstable_autoFocus:O,__unstable_hideCloseButton:W,contentRef:d,footer:s,header:c,id:u,onClickOutside:p,onClose:h,portal:m,radius:Y,ref:eo,scheme:v,shadow:B,width:Q,children:n}),M[28]=O,M[29]=Y,M[30]=B,M[31]=n,M[32]=d,M[33]=s,M[34]=c,M[35]=W,M[36]=u,M[37]=p,M[38]=h,M[39]=m,M[40]=v,M[41]=Q,M[42]=_):_=M[42],M[43]===Symbol.for("react.memo_cache_sentinel")?(C=(0,i.jsx)("div",{ref:er,tabIndex:0}),M[43]=C):C=M[43],M[44]!==X||M[45]!==ei||M[46]!==ed||M[47]!==u||M[48]!==ea||M[49]!==f||M[50]!==K||M[51]!==Z||M[52]!==t||M[53]!==g||M[54]!==_||M[55]!==ee?(T=(0,i.jsxs)(nf,{...g,$animate:X,$padding:K,$position:Z,"aria-labelledby":ea,"aria-modal":!0,"data-ui":"Dialog",id:u,onActivate:f,onClick:ed,onFocus:ei,ref:t,role:"dialog",zOffset:ee,children:[z,_,C]}),M[44]=X,M[45]=ei,M[46]=ed,M[47]=u,M[48]=ea,M[49]=f,M[50]=K,M[51]=Z,M[52]=t,M[53]=g,M[54]=_,M[55]=ee,M[56]=T):T=M[56],M[57]!==m||M[58]!==T?(A=(0,i.jsx)(r7,{__unstable_name:m,children:T}),M[57]=m,M[58]=T,M[59]=A):A=M[59],A});function ny(e){let t,r,o;let n=(0,a.c)(6),{children:l,position:d,zOffset:s}=e;return n[0]!==d||n[1]!==s?(r={version:0,position:d,zOffset:s},n[0]=d,n[1]=s,n[2]=r):r=n[2],t=r,n[3]!==l||n[4]!==t?(o=(0,i.jsx)(nc.Provider,{value:t,children:l}),n[3]=l,n[4]=t,n[5]=o):o=n[5],o}nw.displayName="ForwardRef(Dialog)",ny.displayName="DialogProvider";let n$=s.I4.kbd`
  font: inherit;
  padding: 1px;

  &:not([hidden]) {
    display: block;
  }
`,nk=(0,s.I4)(rk)`
  &:not([hidden]) {
    display: block;
  }
`,nj=(0,l.forwardRef)(function(e,t){let r,o,n,l,d,s,c,u,f;let p=(0,a.c)(24);p[0]!==e?({fontSize:r,keys:o,padding:n,radius:l,space:s,...d}=e,p[0]=e,p[1]=r,p[2]=o,p[3]=n,p[4]=l,p[5]=d,p[6]=s):(r=p[1],o=p[2],n=p[3],l=p[4],d=p[5],s=p[6]);let h=I(void 0===s?.5:s);if(!o||0===o.length){let e;return p[7]===Symbol.for("react.memo_cache_sentinel")?(e=(0,i.jsx)(i.Fragment,{}),p[7]=e):e=p[7],e}if(p[8]!==r||p[9]!==o||p[10]!==n||p[11]!==l){let e;p[13]!==r||p[14]!==n||p[15]!==l?(e=(e,t)=>(0,i.jsx)(nk,{fontSize:r,padding:n,radius:l,children:e},t),p[13]=r,p[14]=n,p[15]=l,p[16]=e):e=p[16],c=o.map(e),p[8]=r,p[9]=o,p[10]=n,p[11]=l,p[12]=c}else c=p[12];return p[17]!==h||p[18]!==c?(u=(0,i.jsx)(rw,{as:"span",space:h,children:c}),p[17]=h,p[18]=c,p[19]=u):u=p[19],p[20]!==t||p[21]!==d||p[22]!==u?(f=(0,i.jsx)(n$,{"data-ui":"Hotkeys",...d,ref:t,children:u}),p[20]=t,p[21]=d,p[22]=u,p[23]=f):f=p[23],f});nj.displayName="ForwardRef(Hotkeys)";let nR=eI("@sanity/ui/context/menu",null);function nE(e){return rV(e)&&"true"!==e.getAttribute("data-disabled")||rX(e)&&!e.disabled}function nS(e){return e.filter(nE)}let nz=[],n_=(0,s.I4)(tK)`
  outline: none;
  overflow: auto;
`,nI=(0,l.forwardRef)(function(e,t){let r,o,n,d,s,c,u,f,p,h,b,m,g,v,x,w,y,$,k,j,R,E,S,z;let _=(0,a.c)(50);if(_[0]!==e){let{children:t,focusFirst:i,focusLast:a,onClickOutside:l,onEscape:g,onItemClick:v,onItemSelect:x,onKeyDown:w,originElement:y,padding:$,registerElement:k,shouldFocus:j,space:R,...E}=e;o=t,n=l,d=g,s=v,c=x,u=w,f=y,b=$,p=k,r=j,m=R,h=E,_[0]=e,_[1]=r,_[2]=o,_[3]=n,_[4]=d,_[5]=s,_[6]=c,_[7]=u,_[8]=f,_[9]=p,_[10]=h,_[11]=b,_[12]=m}else r=_[1],o=_[2],n=_[3],d=_[4],s=_[5],c=_[6],u=_[7],f=_[8],p=_[9],h=_[10],b=_[11],m=_[12];let I=void 0===b?1:b,T=void 0===m?1:m,A=r??(e.focusFirst&&"first"||e.focusLast&&"last"||null),M=(0,l.useRef)(null);_[13]===Symbol.for("react.memo_cache_sentinel")?(g=()=>M.current,_[13]=g):g=_[13],(0,l.useImperativeHandle)(t,g);let{isTopLayer:N}=rL();_[14]!==u||_[15]!==f||_[16]!==A?(v={onKeyDown:u,originElement:f,shouldFocus:A,rootElementRef:M},_[14]=u,_[15]=f,_[16]=A,_[17]=v):v=_[17];let{activeElement:F,activeIndex:O,handleItemMouseEnter:W,handleItemMouseLeave:H,handleKeyDown:B,mount:L}=function(e){let{onKeyDown:t,originElement:r,shouldFocus:o,rootElementRef:n}=e,i=(0,l.useRef)([]),[a,d]=(0,l.useState)(-1),s=(0,l.useRef)(a),c=(0,l.useMemo)(()=>i.current[a]||null,[a]),u=!!n.current,f=(0,l.useCallback)(e=>{d(e),s.current=e},[]),p=(0,l.useCallback)((e,t)=>e?(-1===i.current.indexOf(e)&&(i.current.push(e),function(e,t){if(!e)return;let r=new WeakMap;for(let o of t)r.set(o,function(e,t){let r=[],o=t;for(;o!==e;){let t=o.parentElement;if(!t)break;let n=Array.from(t.childNodes).indexOf(o);if(r.unshift(n),t===e)break;o=t}return r}(e,o));t.sort((e,t)=>{let o=r.get(e)||nz,n=r.get(t)||nz,i=Math.max(o.length,n.length);for(let e=0;e<i;e+=1){let t=o[e]||-1,r=n[e]||-1;if(t!==r)return t-r}return 0})}(n.current,i.current)),t&&f(i.current.indexOf(e)),()=>{let t=i.current.indexOf(e);t>-1&&i.current.splice(t,1)}):()=>{},[n,f]),h=(0,l.useCallback)(e=>{if("Tab"===e.key){r&&r.focus();return}if("Home"===e.key){e.preventDefault(),e.stopPropagation();let t=nS(i.current)[0];if(!t)return;f(i.current.indexOf(t));return}if("End"===e.key){e.preventDefault(),e.stopPropagation();let t=nS(i.current),r=t[t.length-1];if(!r)return;f(i.current.indexOf(r));return}if("ArrowUp"===e.key){e.preventDefault(),e.stopPropagation();let t=nS(i.current),r=t.length;if(0===r)return;let o=i.current[s.current],n=t.indexOf(o),a=t[n=(n-1+r)%r];f(i.current.indexOf(a));return}if("ArrowDown"===e.key){e.preventDefault(),e.stopPropagation();let t=nS(i.current),r=t.length;if(0===r)return;let o=i.current[s.current],n=t.indexOf(o),a=t[n=(n+1)%r];f(i.current.indexOf(a));return}t&&t(e)},[t,r,f]),b=(0,l.useCallback)(e=>{let t=e.currentTarget;f(i.current.indexOf(t))},[f]),m=(0,l.useCallback)(()=>{f(-2),n.current?.focus()},[n,f]);return(0,l.useEffect)(()=>{if(!u)return;let e=requestAnimationFrame(()=>{if(-1===a){if("first"===o){let e=nS(i.current)[0];e&&f(i.current.indexOf(e))}if("last"===o){let e=nS(i.current),t=e[e.length-1];t&&f(i.current.indexOf(t))}return}(i.current[a]||null)?.focus()});return()=>cancelAnimationFrame(e)},[a,u,f,o]),{activeElement:c,activeIndex:a,handleItemMouseEnter:b,handleItemMouseLeave:m,handleKeyDown:h,mount:p}}(v),D=(0,l.useRef)(null);_[18]!==p?(x=e=>{D.current&&(D.current(),D.current=null),M.current=e,M.current&&p&&(D.current=p(M.current))},_[18]=p,_[19]=x):x=_[19];let J=x;return _[20]!==O||_[21]!==c?(w=()=>{c&&c(O)},y=[O,c],_[20]=O,_[21]=c,_[22]=w,_[23]=y):(w=_[22],y=_[23]),(0,l.useEffect)(w,y),_[24]===Symbol.for("react.memo_cache_sentinel")?($=()=>[M.current],_[24]=$):$=_[24],C(N&&n,$),_[25]!==N||_[26]!==d?(k=e=>{N&&"Escape"===e.key&&(e.stopPropagation(),d&&d())},_[25]=N,_[26]=d,_[27]=k):k=_[27],eS(k),_[28]!==F||_[29]!==O||_[30]!==W||_[31]!==H||_[32]!==L||_[33]!==n||_[34]!==d||_[35]!==s||_[36]!==p?(R={version:0,activeElement:F,activeIndex:O,mount:L,onClickOutside:n,onEscape:d,onItemClick:s,onItemMouseEnter:W,onItemMouseLeave:H,registerElement:p,onMouseEnter:W,onMouseLeave:H},_[28]=F,_[29]=O,_[30]=W,_[31]=H,_[32]=L,_[33]=n,_[34]=d,_[35]=s,_[36]=p,_[37]=R):R=_[37],j=R,_[38]!==o||_[39]!==T?(E=(0,i.jsx)(oj,{space:T,children:o}),_[38]=o,_[39]=T,_[40]=E):E=_[40],_[41]!==B||_[42]!==J||_[43]!==I||_[44]!==h||_[45]!==E?(S=(0,i.jsx)(n_,{"data-ui":"Menu",...h,onKeyDown:B,padding:I,ref:J,role:"menu",tabIndex:-1,children:E}),_[41]=B,_[42]=J,_[43]=I,_[44]=h,_[45]=E,_[46]=S):S=_[46],_[47]!==S||_[48]!==j?(z=(0,i.jsx)(nR.Provider,{value:j,children:S}),_[47]=S,_[48]=j,_[49]=z):z=_[49],z});nI.displayName="ForwardRef(Menu)";let nC=(0,l.forwardRef)(function(e,t){let r,o,n,d,s,c,u,f,p,h,b,m,g,v,x,w,y,$,k,j,R,E,S,z,_;let I=(0,a.c)(62),{__unstable_disableRestoreFocusOnClose:C,boundaryElement:T,button:A,id:M,menu:N,onClose:F,onOpen:O,placement:W,popoverScheme:H,portal:B,popover:L,popoverRadius:D,preventOverflow:J}=e,P=void 0!==C&&C,V=void 0===B||B,[X,q]=(0,l.useState)(!1),[G,U]=(0,l.useState)(null),[Y,K]=(0,l.useState)(null);I[0]===Symbol.for("react.memo_cache_sentinel")?(r=[],I[0]=r):r=I[0];let[Z,Q]=(0,l.useState)(r),ee=(0,l.useRef)(X);I[1]!==O||I[2]!==X?(o=()=>{O&&X&&!ee.current&&O()},n=[O,X],I[1]=O,I[2]=X,I[3]=o,I[4]=n):(o=I[3],n=I[4]),(0,l.useEffect)(o,n),I[5]!==F||I[6]!==X?(d=()=>{F&&!X&&ee.current&&F()},s=[F,X],I[5]=F,I[6]=X,I[7]=d,I[8]=s):(d=I[7],s=I[8]),(0,l.useEffect)(d,s),I[9]!==X?(c=()=>{ee.current=X},u=[X],I[9]=X,I[10]=c,I[11]=u):(c=I[10],u=I[11]),(0,l.useEffect)(c,u),I[12]===Symbol.for("react.memo_cache_sentinel")?(f=()=>{q(nT),U(null)},I[12]=f):f=I[12];let et=f;I[13]!==X?(p=e=>{X&&e.preventDefault()},I[13]=X,I[14]=p):p=I[14];let er=p;I[15]===Symbol.for("react.memo_cache_sentinel")?(h=e=>{if("ArrowDown"===e.key||"Enter"===e.key||" "===e.key){e.preventDefault(),q(!0),U("first");return}if("ArrowUp"===e.key){e.preventDefault(),q(!0),U("last");return}},I[15]=h):h=I[15];let eo=h;I[16]!==Y||I[17]!==Z?(b=e=>{let t=e.target;if(t instanceof Node&&!(Y&&(t===Y||Y.contains(t)))){for(let e of Z)if(t===e||e.contains(t))return;q(!1)}},I[16]=Y,I[17]=Z,I[18]=b):b=I[18];let en=b;I[19]!==Y||I[20]!==P?(m=()=>{q(!1),!P&&Y&&Y.focus()},I[19]=Y,I[20]=P,I[21]=m):m=I[21];let ei=m;I[22]!==Z?(g=e=>{let t=e.relatedTarget;if(t instanceof Node){for(let e of Z)if(e===t||e.contains(t))return;q(!1)}},I[22]=Z,I[23]=g):g=I[23];let ea=g;I[24]!==Y||I[25]!==P?(v=()=>{q(!1),!P&&Y&&Y.focus()},I[24]=Y,I[25]=P,I[26]=v):v=I[26];let el=v;I[27]===Symbol.for("react.memo_cache_sentinel")?(x=e=>(Q(t=>t.concat([e])),()=>Q(t=>t.filter(t=>t!==e))),I[27]=x):x=I[27];let ed=x;I[28]!==Y||I[29]!==ea||I[30]!==el||I[31]!==en||I[32]!==ei||I[33]!==M||I[34]!==N||I[35]!==G?(w=N&&(0,l.cloneElement)(N,{"aria-labelledby":M,onBlurCapture:ea,onClickOutside:en,onEscape:ei,onItemClick:el,originElement:Y,registerElement:ed,shouldFocus:G}),I[28]=Y,I[29]=ea,I[30]=el,I[31]=en,I[32]=ei,I[33]=M,I[34]=N,I[35]=G,I[36]=w):w=I[36];let es=w;return I[37]!==A||I[38]!==er||I[39]!==M||I[40]!==X?($=A&&(0,l.cloneElement)(A,{"data-ui":"MenuButton",id:M,onClick:et,onKeyDown:eo,onMouseDown:er,"aria-haspopup":!0,"aria-expanded":X,ref:K,selected:A.props.selected??X}),I[37]=A,I[38]=er,I[39]=M,I[40]=X,I[41]=$):$=I[41],y=$,I[42]!==Y?(k=()=>Y,j=[Y],I[42]=Y,I[43]=k,I[44]=j):(k=I[43],j=I[44]),(0,l.useImperativeHandle)(t,k,j),I[45]!==L?(E=L||{},I[45]=L,I[46]=E):E=I[46],I[47]!==T||I[48]!==W||I[49]!==D||I[50]!==H||I[51]!==V||I[52]!==J||I[53]!==E?(S={boundaryElement:T,overflow:"auto",placement:W,portal:V,preventOverflow:J,radius:D,scheme:H,...E},I[47]=T,I[48]=W,I[49]=D,I[50]=H,I[51]=V,I[52]=J,I[53]=E,I[54]=S):S=I[54],R=S,I[55]!==y?(z=y||(0,i.jsx)(i.Fragment,{}),I[55]=y,I[56]=z):z=I[56],I[57]!==es||I[58]!==X||I[59]!==R||I[60]!==z?(_=(0,i.jsx)(oc,{"data-ui":"MenuButton__popover",...R,content:es,open:X,children:z}),I[57]=es,I[58]=X,I[59]=R,I[60]=z,I[61]=_):_=I[61],_});function nT(e){return!e}nC.displayName="ForwardRef(MenuButton)";let nA=s.I4.hr`
  height: 1px;
  border: 0;
  background: var(--card-hairline-soft-color);
  margin: 0;
`;nA.displayName="MenuDivider";let nM=(0,s.I4)(tK)(t_,function(){return(0,s.AH)`
    background-color: inherit;
    color: inherit;

    &[data-as='button'] {
      -webkit-font-smoothing: inherit;
      appearance: none;
      outline: none;
      font: inherit;
      text-align: inherit;
      border: 0;
      width: -moz-available;
      width: -webkit-fill-available;
      width: stretch;
    }

    /* &:is(a) */
    &[data-as='a'] {
      text-decoration: none;
    }
  `},function(e){let{$tone:t}=e,{color:r,style:o}=(0,n.JW)(e.theme),i=r.selectable[t];return(0,s.AH)`
    ${t8(r,i.enabled)}

    background-color: var(--card-bg-color);
    color: var(--card-fg-color);
    outline: none;

    /* &:is(button) */
    &[data-as='button'] {
      &:disabled {
        ${t8(r,i.disabled)}
      }

      &:not(:disabled) {
        &[aria-pressed='true'] {
          ${t8(r,i.pressed)}
        }

        &[data-selected],
        &[aria-selected='true'] > & {
          ${t8(r,i.selected)}
        }

        @media (hover: hover) {
          &:not([data-selected]) {
            &[data-hovered],
            &:hover {
              ${t8(r,i.hovered)}
            }

            &:active {
              ${t8(r,i.pressed)}
            }
          }
        }
      }
    }

    /* &:is(a) */
    &[data-as='a'] {
      &[data-disabled] {
        ${t8(r,i.disabled)}
      }

      &:not([data-disabled]) {
        &[data-pressed] {
          ${t8(r,i.pressed)}
        }

        &[data-selected] {
          ${t8(r,i.selected)}
        }

        @media (hover: hover) {
          &:not([data-selected]) {
            &[data-hovered],
            &:hover {
              ${t8(r,i.hovered)}
            }
            &:active {
              ${t8(r,i.pressed)}
            }
          }
        }
      }
    }

    ${o?.card?.root}
  `});function nN(){let e=(0,l.useContext)(nR);if(!e)throw Error("useMenu(): missing context value");if(!rM(e)||0!==e.version)throw Error("useMenu(): the context value is not compatible");return e}function nF(e){let t,r,o,n,s,u,f,p,h,b,m,g,v,x,w,y,$,k,j,R,E,S,z,_,C,T,A,M,N,F,O,W,H,B;let L=(0,a.c)(77);L[0]!==e?({as:u,children:r,fontSize:f,icon:t,onClick:o,padding:p,popover:n,radius:h,space:b,text:g,tone:m,...s}=e,L[0]=e,L[1]=t,L[2]=r,L[3]=o,L[4]=n,L[5]=s,L[6]=u,L[7]=f,L[8]=p,L[9]=h,L[10]=b,L[11]=m,L[12]=g):(t=L[1],r=L[2],o=L[3],n=L[4],s=L[5],u=L[6],f=L[7],p=L[8],h=L[9],b=L[10],m=L[11],g=L[12]);let D=void 0===u?"button":u,J=void 0===f?1:f,P=void 0===p?3:p,V=void 0===h?2:h,X=void 0===b?3:b,q=void 0===m?"default":m,G=nN(),{scheme:U}=eA(),{activeElement:Y,mount:K,onClickOutside:Z,onEscape:Q,onItemClick:ee,onItemMouseEnter:et,registerElement:er}=G,eo=et??G.onMouseEnter,[en,ei]=(0,l.useState)(null),[ea,el]=(0,l.useState)(!1),[ed,es]=(0,l.useState)(null),ec=!!Y&&Y===en,[eu,ef]=(0,l.useState)(!1);L[13]!==eo?(v=e=>{ef(!1),eo(e),el(!0)},L[13]=eo,L[14]=v):v=L[14];let ep=v;L[15]!==en?(x=e=>{"ArrowLeft"===e.key&&(e.stopPropagation(),el(!1),requestAnimationFrame(()=>{en?.focus()}))},L[15]=en,L[16]=x):x=L[16];let eh=x;L[17]!==o?(w=e=>{o?.(e),es("first"),el(!0)},L[17]=o,L[18]=w):w=L[18];let eb=w;L[19]!==ee?(y=()=>{el(!1),ee?.()},L[19]=ee,L[20]=y):y=L[20];let em=y;L[21]===Symbol.for("react.memo_cache_sentinel")?($=()=>ef(!0),L[21]=$):$=L[21];let eg=$;L[22]!==K||L[23]!==en?(k=()=>K(en),j=[K,en],L[22]=K,L[23]=en,L[24]=k,L[25]=j):(k=L[24],j=L[25]),(0,l.useEffect)(k,j),L[26]!==ec?(R=()=>{ec||el(!1)},E=[ec],L[26]=ec,L[27]=R,L[28]=E):(R=L[27],E=L[28]),(0,l.useEffect)(R,E),L[29]!==ea?(S=()=>{ea||ef(!1)},z=[ea],L[29]=ea,L[30]=S,L[31]=z):(S=L[30],z=L[31]),(0,l.useEffect)(S,z),L[32]!==ed?(_=()=>{if(!ed)return;let e=requestAnimationFrame(()=>es(null));return()=>cancelAnimationFrame(e)},C=[ed],L[32]=ed,L[33]=_,L[34]=C):(_=L[33],C=L[34]),(0,l.useEffect)(_,C),L[35]!==r||L[36]!==em||L[37]!==eh||L[38]!==Z||L[39]!==Q||L[40]!==er||L[41]!==ed?(T=(0,i.jsx)(nI,{onClickOutside:Z,onEscape:Q,onItemClick:em,onKeyDown:eh,onMouseEnter:eg,registerElement:er,shouldFocus:ed,children:r}),L[35]=r,L[36]=em,L[37]=eh,L[38]=Z,L[39]=Q,L[40]=er,L[41]=ed,L[42]=T):T=L[42];let ev=T;L[43]===Symbol.for("react.memo_cache_sentinel")?(A=e=>{let t=e.currentTarget;if(document.activeElement===t&&"ArrowRight"===e.key){es("first"),el(!0),ef(!0);return}},L[43]=A):A=L[43];let ex=A,ew="button"===D?eu:void 0,ey="button"!==D?eu:void 0,e$=!eu&&ec?"":void 0,ek=I(V),ej="button"===D?"button":void 0;return L[44]!==t||L[45]!==J?(M=t&&(0,i.jsxs)(t0,{size:J,children:[(0,l.isValidElement)(t)&&t,(0,d.isValidElementType)(t)&&(0,i.jsx)(t,{})]}),L[44]=t,L[45]=J,L[46]=M):M=L[46],L[47]!==J||L[48]!==g?(N=(0,i.jsx)(tK,{flex:1,children:(0,i.jsx)(t0,{size:J,textOverflow:"ellipsis",weight:"medium",children:g})}),L[47]=J,L[48]=g,L[49]=N):N=L[49],L[50]===Symbol.for("react.memo_cache_sentinel")?(F=(0,i.jsx)(c.vKP,{}),L[50]=F):F=L[50],L[51]!==J?(O=(0,i.jsx)(t0,{size:J,children:F}),L[51]=J,L[52]=O):O=L[52],L[53]!==P||L[54]!==X||L[55]!==M||L[56]!==N||L[57]!==O?(W=(0,i.jsxs)(t4,{gap:X,padding:P,children:[M,N,O]}),L[53]=P,L[54]=X,L[55]=M,L[56]=N,L[57]=O,L[58]=W):W=L[58],L[59]!==D||L[60]!==eb||L[61]!==ep||L[62]!==s||L[63]!==U||L[64]!==ew||L[65]!==ey||L[66]!==e$||L[67]!==ek||L[68]!==ej||L[69]!==W||L[70]!==q?(H=(0,i.jsx)(nM,{"data-as":D,"data-ui":"MenuGroup",forwardedAs:D,...s,"aria-pressed":ew,"data-pressed":ey,"data-selected":e$,$radius:ek,$tone:q,$scheme:U,onClick:eb,onKeyDown:ex,onMouseEnter:ep,ref:ei,tabIndex:-1,type:ej,children:W}),L[59]=D,L[60]=eb,L[61]=ep,L[62]=s,L[63]=U,L[64]=ew,L[65]=ey,L[66]=e$,L[67]=ek,L[68]=ej,L[69]=W,L[70]=q,L[71]=H):H=L[71],L[72]!==ev||L[73]!==ea||L[74]!==n||L[75]!==H?(B=(0,i.jsx)(oc,{...n,content:ev,"data-ui":"MenuGroup__popover",open:ea,children:H}),L[72]=ev,L[73]=ea,L[74]=n,L[75]=H,L[76]=B):B=L[76],B}nM.displayName="Selectable",nF.displayName="MenuGroup";let nO=(0,l.forwardRef)(function(e,t){let r,o,n,s,c,u,f,p,h,b,m,g,v,x,w,y,$,k,j,R,E,S,z,_,C,T,A,M,N,F,O,W,H;let B=(0,a.c)(74);B[0]!==e?({as:y,children:n,disabled:s,fontSize:$,hotkeys:c,icon:r,iconRight:o,onClick:u,padding:k,paddingX:m,paddingY:g,paddingTop:b,paddingRight:h,paddingBottom:f,paddingLeft:p,pressed:v,radius:j,selected:w,space:R,text:S,tone:E,...x}=e,B[0]=e,B[1]=r,B[2]=o,B[3]=n,B[4]=s,B[5]=c,B[6]=u,B[7]=f,B[8]=p,B[9]=h,B[10]=b,B[11]=m,B[12]=g,B[13]=v,B[14]=x,B[15]=w,B[16]=y,B[17]=$,B[18]=k,B[19]=j,B[20]=R,B[21]=E,B[22]=S):(r=B[1],o=B[2],n=B[3],s=B[4],c=B[5],u=B[6],f=B[7],p=B[8],h=B[9],b=B[10],m=B[11],g=B[12],v=B[13],x=B[14],w=B[15],y=B[16],$=B[17],k=B[18],j=B[19],R=B[20],E=B[21],S=B[22]);let L=void 0===y?"button":y,D=void 0===$?1:$,J=void 0===k?3:k,P=void 0===j?2:j,V=void 0===R?3:R,X=void 0===E?"default":E,{scheme:q}=eA(),G=nN(),{activeElement:U,mount:Y,onItemClick:K,onItemMouseEnter:Z,onItemMouseLeave:Q}=G,ee=Z??G.onMouseEnter,et=Q??G.onMouseLeave,[er,eo]=(0,l.useState)(null),en=!!U&&U===er,ei=(0,l.useRef)(null);B[23]===Symbol.for("react.memo_cache_sentinel")?(z=()=>ei.current,B[23]=z):z=B[23],(0,l.useImperativeHandle)(t,z),B[24]!==Y||B[25]!==er||B[26]!==w?(_=()=>Y(er,w),C=[Y,er,w],B[24]=Y,B[25]=er,B[26]=w,B[27]=_,B[28]=C):(_=B[27],C=B[28]),(0,l.useEffect)(_,C),B[29]!==s||B[30]!==u||B[31]!==K?(T=e=>{s||(u&&u(e),K&&K())},B[29]=s,B[30]=u,B[31]=K,B[32]=T):T=B[32];let ea=T;B[33]!==J||B[34]!==f||B[35]!==p||B[36]!==h||B[37]!==b||B[38]!==m||B[39]!==g?(M={padding:J,paddingX:m,paddingY:g,paddingTop:b,paddingRight:h,paddingBottom:f,paddingLeft:p},B[33]=J,B[34]=f,B[35]=p,B[36]=h,B[37]=b,B[38]=m,B[39]=g,B[40]=M):M=B[40],A=M;let el=I(D);B[41]!==el?(N=el.map(nW),B[41]=el,B[42]=N):N=B[42];let ed=N;B[43]===Symbol.for("react.memo_cache_sentinel")?(F=e=>{ei.current=e,eo(e)},B[43]=F):F=B[43];let es=F,ec="button"===L&&v,eu="button"!==L&&v?"":void 0,ef=en?"":void 0,ep=s?"":void 0,eh=I(P),eb=I(0),em=s?"default":X,eg="button"===L?"button":void 0;return B[44]!==r||B[45]!==o||B[46]!==D||B[47]!==c||B[48]!==ed||B[49]!==A||B[50]!==V||B[51]!==S?(O=(r||S||o)&&(0,i.jsxs)(t4,{as:"span",gap:V,align:"center",...A,children:[r&&(0,i.jsxs)(t0,{size:D,children:[(0,l.isValidElement)(r)&&r,(0,d.isValidElementType)(r)&&(0,i.jsx)(r,{})]}),S&&(0,i.jsx)(tK,{flex:1,children:(0,i.jsx)(t0,{size:D,textOverflow:"ellipsis",weight:"medium",children:S})}),c&&(0,i.jsx)(nj,{fontSize:ed,keys:c,style:{marginTop:-4,marginBottom:-4}}),o&&(0,i.jsxs)(t0,{size:D,children:[(0,l.isValidElement)(o)&&o,(0,d.isValidElementType)(o)&&(0,i.jsx)(o,{})]})]}),B[44]=r,B[45]=o,B[46]=D,B[47]=c,B[48]=ed,B[49]=A,B[50]=V,B[51]=S,B[52]=O):O=B[52],B[53]!==n||B[54]!==A?(W=n&&(0,i.jsx)(tK,{as:"span",...A,children:n}),B[53]=n,B[54]=A,B[55]=W):W=B[55],B[56]!==L||B[57]!==s||B[58]!==ea||B[59]!==ee||B[60]!==et||B[61]!==x||B[62]!==q||B[63]!==ec||B[64]!==eu||B[65]!==ef||B[66]!==ep||B[67]!==eh||B[68]!==eb||B[69]!==em||B[70]!==eg||B[71]!==O||B[72]!==W?(H=(0,i.jsxs)(nM,{"data-ui":"MenuItem",role:"menuitem",...x,"aria-pressed":ec,"data-pressed":eu,"data-selected":ef,"data-disabled":ep,forwardedAs:L,$radius:eh,$padding:eb,$tone:em,$scheme:q,disabled:s,onClick:ea,onMouseEnter:ee,onMouseLeave:et,ref:es,tabIndex:-1,type:eg,children:[O,W]}),B[56]=L,B[57]=s,B[58]=ea,B[59]=ee,B[60]=et,B[61]=x,B[62]=q,B[63]=ec,B[64]=eu,B[65]=ef,B[66]=ep,B[67]=eh,B[68]=eb,B[69]=em,B[70]=eg,B[71]=O,B[72]=W,B[73]=H):H=B[73],H});function nW(e){return e-1}nO.displayName="ForwardRef(MenuItem)";let nH=(0,s.i7)`
  0% {
    background-position: 100%;
  }
  100% {
    background-position: -100%;
  }
`,nB=(0,s.AH)`
  background-image: linear-gradient(
    to right,
    var(--card-skeleton-color-from),
    var(--card-skeleton-color-to),
    var(--card-skeleton-color-from),
    var(--card-skeleton-color-from),
    var(--card-skeleton-color-from)
  );
  background-position: 100%;
  background-size: 200% 100%;
  background-attachment: fixed;
  animation-name: ${nH};
  animation-timing-function: ease-in-out;
  animation-iteration-count: infinite;
  animation-duration: 2000ms;
`,nL=(0,s.AH)`
  opacity: ${({$visible:e})=>e?1:0};
  transition: opacity 200ms ease-in;

  @media screen and (prefers-reduced-motion: no-preference) {
    ${({$animated:e})=>e?nB:(0,s.AH)`
            background-color: var(--card-skeleton-color-from);
          `}
  }

  @media screen and (prefers-reduced-motion: reduce) {
    background-color: var(--card-skeleton-color-from);
  }
`,nD=(0,s.I4)(tK)(t_,nL),nJ=(0,l.forwardRef)(function(e,t){let r,o,n,d,s,c,u;let f=(0,a.c)(14);f[0]!==e?({animated:d,delay:r,radius:o,...n}=e,f[0]=e,f[1]=r,f[2]=o,f[3]=n,f[4]=d):(r=f[1],o=f[2],n=f[3],d=f[4]);let p=void 0!==d&&d,[h,b]=(0,l.useState)(!r);f[5]!==r?(s=()=>{if(!r)return b(!0);let e=setTimeout(()=>{b(!0)},r);return()=>{clearTimeout(e)}},c=[r],f[5]=r,f[6]=s,f[7]=c):(s=f[6],c=f[7]),(0,l.useEffect)(s,c);let m=I(o);return f[8]!==p||f[9]!==t||f[10]!==n||f[11]!==m||f[12]!==h?(u=(0,i.jsx)(nD,{...n,$animated:p,$radius:m,$visible:h,ref:t}),f[8]=p,f[9]=t,f[10]=n,f[11]=m,f[12]=h,f[13]=u):u=f[13],u});nJ.displayName="ForwardRef(Skeleton)";let nP=(0,s.I4)(nJ)(e=>{let{$size:t,$style:r}=e,{font:o,media:i}=(0,n.JW)(e.theme),a=o[r];return R(i,t,e=>{let t=a.sizes[e];return{height:t.lineHeight-t.ascenderHeight-t.descenderHeight}})}),nV=(0,l.forwardRef)(function(e,t){let r,o,n;let l=(0,a.c)(7);l[0]!==e?({size:o,...r}=e,l[0]=e,l[1]=r,l[2]=o):(r=l[1],o=l[2]);let d=I(void 0===o?2:o);return l[3]!==d||l[4]!==t||l[5]!==r?(n=(0,i.jsx)(nP,{...r,$size:d,ref:t,$style:"text"}),l[3]=d,l[4]=t,l[5]=r,l[6]=n):n=l[6],n});nV.displayName="ForwardRef(TextSkeleton)",(0,l.forwardRef)(function(e,t){let r,o,n;let l=(0,a.c)(7);l[0]!==e?({size:o,...r}=e,l[0]=e,l[1]=r,l[2]=o):(r=l[1],o=l[2]);let d=I(void 0===o?2:o);return l[3]!==d||l[4]!==t||l[5]!==r?(n=(0,i.jsx)(nP,{...r,$size:d,ref:t,$style:"label"}),l[3]=d,l[4]=t,l[5]=r,l[6]=n):n=l[6],n}).displayName="ForwardRef(LabelSkeleton)",(0,l.forwardRef)(function(e,t){let r,o,n;let l=(0,a.c)(7);l[0]!==e?({size:o,...r}=e,l[0]=e,l[1]=r,l[2]=o):(r=l[1],o=l[2]);let d=I(void 0===o?2:o);return l[3]!==d||l[4]!==t||l[5]!==r?(n=(0,i.jsx)(nP,{...r,$size:d,ref:t,$style:"heading"}),l[3]=d,l[4]=t,l[5]=r,l[6]=n):n=l[6],n}).displayName="ForwardRef(HeadingSkeleton)",(0,l.forwardRef)(function(e,t){let r,o,n;let l=(0,a.c)(7);l[0]!==e?({size:o,...r}=e,l[0]=e,l[1]=r,l[2]=o):(r=l[1],o=l[2]);let d=I(void 0===o?2:o);return l[3]!==d||l[4]!==t||l[5]!==r?(n=(0,i.jsx)(nP,{...r,$size:d,ref:t,$style:"code"}),l[3]=d,l[4]=t,l[5]=r,l[6]=n):n=l[6],n}).displayName="ForwardRef(CodeSkeleton)";let nX=(0,s.I4)(rr)`
  max-width: 100%;
`,nq=(0,l.forwardRef)(function(e,t){let r,o,n,d,s,c,u,f,p,h,b,m,g,v,x,w;let y=(0,a.c)(30);y[0]!==e?({icon:o,id:n,focused:r,fontSize:p,label:d,onClick:s,onFocus:c,padding:h,selected:f,...u}=e,y[0]=e,y[1]=r,y[2]=o,y[3]=n,y[4]=d,y[5]=s,y[6]=c,y[7]=u,y[8]=f,y[9]=p,y[10]=h):(r=y[1],o=y[2],n=y[3],d=y[4],s=y[5],c=y[6],u=y[7],f=y[8],p=y[9],h=y[10]);let $=void 0===p?1:p,k=void 0===h?2:h,j=(0,l.useRef)(null),R=(0,l.useRef)(!1);y[11]===Symbol.for("react.memo_cache_sentinel")?(b=()=>j.current,y[11]=b):b=y[11],(0,l.useImperativeHandle)(t,b),y[12]===Symbol.for("react.memo_cache_sentinel")?(m=()=>{R.current=!1},y[12]=m):m=y[12];let E=m;y[13]!==c?(g=e=>{R.current=!0,c&&c(e)},y[13]=c,y[14]=g):g=y[14];let S=g;y[15]!==r?(v=()=>{r&&!R.current&&(j.current&&j.current.focus(),R.current=!0)},x=[r],y[15]=r,y[16]=v,y[17]=x):(v=y[16],x=y[17]),(0,l.useEffect)(v,x);let z=f?"true":"false",_=f?0:-1;return y[18]!==$||y[19]!==S||y[20]!==o||y[21]!==n||y[22]!==d||y[23]!==s||y[24]!==k||y[25]!==u||y[26]!==f||y[27]!==z||y[28]!==_?(w=(0,i.jsx)(nX,{"data-ui":"Tab",...u,"aria-selected":z,fontSize:$,icon:o,id:n,mode:"bleed",onClick:s,onBlur:E,onFocus:S,padding:k,ref:j,role:"tab",selected:f,tabIndex:_,text:d,type:"button"}),y[18]=$,y[19]=S,y[20]=o,y[21]=n,y[22]=d,y[23]=s,y[24]=k,y[25]=u,y[26]=f,y[27]=z,y[28]=_,y[29]=w):w=y[29],w});nq.displayName="ForwardRef(Tab)";let nG=(0,s.I4)(rw)`
  & > div {
    display: inline-block;
    vertical-align: middle;
    max-width: 100%;
    box-sizing: border-box;
  }
`,nU=(0,l.forwardRef)(function(e,t){let r,o,n,d,s;let c=(0,a.c)(15);c[0]!==e?({children:r,...o}=e,c[0]=e,c[1]=r,c[2]=o):(r=c[1],o=c[2]);let[u,f]=(0,l.useState)(-1);if(c[3]!==r||c[4]!==u){let e;let t=l.Children.toArray(r).filter(l.isValidElement);c[6]!==u?(e=(e,t)=>(0,l.cloneElement)(e,{focused:u===t,key:t,onFocus:()=>f(t)}),c[6]=u,c[7]=e):e=c[7],n=t.map(e),c[3]=r,c[4]=u,c[5]=n}else n=c[5];let p=n,h=p.length;c[8]!==h?(d=e=>{"ArrowLeft"===e.key&&f(e=>(e+h-1)%h),"ArrowRight"===e.key&&f(e=>(e+1)%h)},c[8]=h,c[9]=d):d=c[9];let b=d;return c[10]!==b||c[11]!==t||c[12]!==o||c[13]!==p?(s=(0,i.jsx)(nG,{"data-ui":"TabList",...o,onKeyDown:b,ref:t,role:"tablist",children:p}),c[10]=b,c[11]=t,c[12]=o,c[13]=p,c[14]=s):s=c[14],s});nU.displayName="ForwardRef(TabList)";let nY=(0,l.forwardRef)(function(e,t){let r,o,n;let l=(0,a.c)(9);l[0]!==e?({flex:r,...o}=e,l[0]=e,l[1]=r,l[2]=o):(r=l[1],o=l[2]);let d=void 0===e.tabIndex?0:e.tabIndex;return l[3]!==r||l[4]!==e.children||l[5]!==t||l[6]!==o||l[7]!==d?(n=(0,i.jsx)(tK,{"data-ui":"TabPanel",...o,flex:r,ref:t,role:"tabpanel",tabIndex:d,children:e.children}),l[3]=r,l[4]=e.children,l[5]=t,l[6]=o,l[7]=d,l[8]=n):n=l[8],n});nY.displayName="ForwardRef(TabPanel)";let nK=(0,s.I4)(t4)`
  overflow-x: auto;
`,nZ=(0,s.i7)`
  0% {
    width: 0;
  }
  100% {
    width: 100%;
  }
`,nQ={error:"critical",warning:"caution",success:"positive",info:"neutral"},n0={error:"critical",warning:"caution",success:"positive",info:"neutral"},n1={error:"alert",warning:"alert",success:"alert",info:"alert"},n2=(0,s.I4)(rn)(function(e){let{color:t}=(0,n.JW)(e.theme),r=t.button.default[e.tone].enabled.bg;return e.$duration?(0,s.AH)`
    pointer-events: all;
    width: 100%;
    position: relative;
    overflow: hidden;
    overflow: clip;
    padding-bottom: ${2}px;
    &::before {
      content: '';
      position: absolute;
      bottom: 0px;
      height: ${2}px;
      background: ${r};
      animation-name: ${nZ};
      animation-duration: ${e.$duration}ms;
      animation-fill-mode: both;
    }

    & > * {
      opacity: var(${$}, 1);
      will-change: opacity;
    }
  `:(0,s.AH)`
      pointer-events: all;
      & > * {
        opacity: var(${$}, 1);
        will-change: opacity;
      }
    `});function n3(e){let t,r,o,n,l,d,s,u,f,p,h,b,m,g;let v=(0,a.c)(30);v[0]!==e?({closable:t,description:r,duration:o,onClose:n,radius:s,title:u,status:d,...l}=e,v[0]=e,v[1]=t,v[2]=r,v[3]=o,v[4]=n,v[5]=l,v[6]=d,v[7]=s,v[8]=u):(t=v[1],r=v[2],o=v[3],n=v[4],l=v[5],d=v[6],s=v[7],u=v[8]);let x=void 0===s?3:s,w=d?nQ[d]:"default",y=d?n0[d]:"default",$=d?n1[d]:"status";return v[9]!==u?(f=u&&(0,i.jsx)(t0,{size:1,weight:"medium",children:u}),v[9]=u,v[10]=f):f=v[10],v[11]!==r?(p=r&&(0,i.jsx)(t0,{muted:!0,size:1,children:r}),v[11]=r,v[12]=p):p=v[12],v[13]!==f||v[14]!==p?(h=(0,i.jsx)(nK,{flex:1,padding:3,children:(0,i.jsxs)(oj,{space:3,children:[f,p]})}),v[13]=f,v[14]=p,v[15]=h):h=v[15],v[16]!==y||v[17]!==t||v[18]!==n?(b=t&&(0,i.jsx)(tK,{padding:1,children:(0,i.jsx)(rr,{as:"button",icon:c.USm,mode:"bleed",padding:2,tone:y,onClick:n,style:{verticalAlign:"top"}})}),v[16]=y,v[17]=t,v[18]=n,v[19]=b):b=v[19],v[20]!==h||v[21]!==b?(m=(0,i.jsxs)(t4,{align:"flex-start",children:[h,b]}),v[20]=h,v[21]=b,v[22]=m):m=v[22],v[23]!==w||v[24]!==o||v[25]!==x||v[26]!==l||v[27]!==$||v[28]!==m?(g=(0,i.jsx)(n2,{"data-ui":"Toast",role:$,...l,marginTop:3,radius:x,shadow:2,tone:w,$duration:o,children:m}),v[23]=w,v[24]=o,v[25]=x,v[26]=l,v[27]=$,v[28]=m,v[29]=g):g=v[29],g}function n4(){return!1}function n5(){return!0}n3.displayName="Toast";let n6=()=>()=>{},n7=eI("@sanity/ui/context/toast",null),n8=0,n9=(0,s.I4)(r2)`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  pointer-events: none;
`,ie=s.I4.div`
  box-sizing: border-box;
  position: absolute;
  right: 0;
  bottom: 0;
  max-width: 420px;
  width: 100%;
`;function it(e){let t,r,o,n,d,s,c,u,f,p,m,g,v,x,w;let y=(0,a.c)(24),{children:k,padding:j,paddingX:R,paddingY:E,zOffset:S}=e,z=void 0===j?4:j;y[0]===Symbol.for("react.memo_cache_sentinel")?(t=[],y[0]=t):t=y[0];let[_,I]=(0,l.useState)(t);y[1]===Symbol.for("react.memo_cache_sentinel")?(r={},y[1]=r):r=y[1];let C=(0,l.useRef)(r),T=(0,l.useSyncExternalStore)(n6,n5,n4),A=eL();y[2]===Symbol.for("react.memo_cache_sentinel")?(n={opacity:0,[$]:0,y:32,scale:.25,willChange:"transform"},d=[0,1,1],y[2]=n,y[3]=d):(n=y[2],d=y[3]),y[4]===Symbol.for("react.memo_cache_sentinel")?(s={opacity:d,[$]:[0,0,1],y:0,scale:1},c=[1,1,0],y[4]=s,y[5]=c):(s=y[4],c=y[5]),y[6]===Symbol.for("react.memo_cache_sentinel")?(u=[1,0,0],y[6]=u):u=y[6];let M=A?0:.2;return y[7]!==M?(f={initial:n,animate:s,exit:{opacity:c,[$]:u,scale:.5,transition:{duration:M}}},y[7]=M,y[8]=f):f=y[8],o=f,y[9]===Symbol.for("react.memo_cache_sentinel")?(m={version:0,push:e=>{let t=e=>(0,l.startTransition)(()=>I(e)),r=e.id||String(n8++),o=e.duration||5e3,n=()=>{let e=C.current[r]?.timeoutId;t(e=>{let t=e.findIndex(e=>e.id===r);if(t>-1){let r=e.slice(0);return r.splice(t,1),r}return e}),void 0!==e&&(clearTimeout(e),delete C.current[r])};return t(t=>t.filter(e=>e.id!==r).concat([{dismiss:n,id:r,params:{...e,duration:o}}])),C.current[r]&&(clearTimeout(C.current[r].timeoutId),delete C.current[r]),C.current[r]={timeoutId:setTimeout(n,o)},r}},y[9]=m):m=y[9],p=m,y[10]===Symbol.for("react.memo_cache_sentinel")?(g=()=>()=>{for(let{timeoutId:e}of Object.values(C.current))clearTimeout(e);C.current={}},v=[],y[10]=g,y[11]=v):(g=y[10],v=y[11]),(0,l.useEffect)(g,v),y[12]!==T||y[13]!==z||y[14]!==R||y[15]!==E||y[16]!==A||y[17]!==_||y[18]!==o||y[19]!==S?(x=T&&(0,i.jsx)(n9,{"data-ui":"ToastProvider",zOffset:S,children:(0,i.jsx)(ie,{children:(0,i.jsx)(tK,{padding:z,paddingX:R,paddingY:E,children:(0,i.jsx)(b.N,{initial:!1,children:_.map(e=>{let{dismiss:t,id:r,params:n}=e;return(0,i.jsx)(h.P.div,{layout:"position",initial:"initial",animate:"animate",exit:"exit",variants:o,transition:A?{duration:0}:{type:"spring",damping:30,stiffness:400},children:(0,i.jsx)(n3,{closable:n.closable,description:n.description,onClose:t,status:n.status,title:n.title,duration:n.duration})},r)})})})})}),y[12]=T,y[13]=z,y[14]=R,y[15]=E,y[16]=A,y[17]=_,y[18]=o,y[19]=S,y[20]=x):x=y[20],y[21]!==k||y[22]!==x?(w=(0,i.jsxs)(n7.Provider,{value:p,children:[k,x]}),y[21]=k,y[22]=x,y[23]=w):w=y[23],w}function ir(){let e=(0,l.useContext)(n7);if(!e)throw Error("useToast(): missing context value");if(!rM(e)||0!==e.version)throw Error("useToast(): the context value is not compatible");return e}function io(e){if("treeitem"===e.getAttribute("role")&&e.focus(),"none"===e.getAttribute("role")){let t=e.firstChild;t&&t instanceof HTMLElement&&t.focus()}}it.displayName="ToastProvider";let ii=eI("@sanity/ui/context/tree",null);function ia(){let e=(0,l.useContext)(ii);if(!e)throw Error("Tree: missing context value");return e}(0,l.memo)((0,l.forwardRef)(function(e,t){let r,o,n,d,s,c,u,f,p,h,b,m,g,v,x,w,y,$,k,j,R,E,S;let z=(0,a.c)(37);z[0]!==e?({children:r,space:d,onFocus:o,...n}=e,z[0]=e,z[1]=r,z[2]=o,z[3]=n,z[4]=d):(r=z[1],o=z[2],n=z[3],d=z[4]);let _=void 0===d?1:d,I=(0,l.useRef)(null),[C,T]=(0,l.useState)(null),A=(0,l.useRef)(C);z[5]===Symbol.for("react.memo_cache_sentinel")?(c=[],z[5]=c):c=z[5],s=c,z[6]===Symbol.for("react.memo_cache_sentinel")?(u=[],z[6]=u):u=z[6];let[M,N]=(0,l.useState)(u);z[7]===Symbol.for("react.memo_cache_sentinel")?(f={},z[7]=f):f=z[7];let[F,O]=(0,l.useState)(f),W=(0,l.useRef)(F);z[8]===Symbol.for("react.memo_cache_sentinel")?(p=()=>I.current,z[8]=p):p=z[8],(0,l.useImperativeHandle)(t,p),z[9]!==C?(h=()=>{A.current=C},b=[C],z[9]=C,z[10]=h,z[11]=b):(h=z[10],b=z[11]),(0,l.useEffect)(h,b),z[12]!==F?(m=()=>{W.current=F},g=[F],z[12]=F,z[13]=m,z[14]=g):(m=z[13],g=z[14]),(0,l.useEffect)(m,g),z[15]===Symbol.for("react.memo_cache_sentinel")?(v=(e,t,r,o)=>(O(o=>({...o,[t]:{element:e,expanded:r}})),o&&T(e),()=>{O(e=>{let r={...e};return delete r[t],r})}),z[15]=v):v=z[15];let H=v;z[16]===Symbol.for("react.memo_cache_sentinel")?(x=(e,t)=>{O(r=>{let o=r[e];return o?{...r,[e]:{...o,expanded:t}}:r})},z[16]=x):x=z[16];let B=x,L=C||M[0]||null;z[17]!==_||z[18]!==F||z[19]!==L?(y={version:0,focusedElement:L,level:0,path:s,registerItem:H,setExpanded:B,setFocusedElement:T,space:_,state:F},z[17]=_,z[18]=F,z[19]=L,z[20]=y):y=z[20],w=y,z[21]!==M?($=e=>{if(A.current){if("ArrowDown"===e.key){e.preventDefault();let t=function(e,t,r){let o=t.indexOf(r),n=t.slice(o),i=t.length;for(let t=1;t<i;t+=1){if(!n[t])continue;let r=n[t].getAttribute("data-tree-key");if(!r)continue;let o=r.split("/");o.pop();let i=[],a=!0;for(let t=0;t<o.length;t+=1){i.push(o[t]);let r=i.join("/");if(!e[r]?.expanded){a=!1;break}}if(a)return n[t]}return null}(W.current,M,A.current);t&&(io(t),T(t));return}if("ArrowUp"===e.key){e.preventDefault();let t=function(e,t,r){let o=t.indexOf(r),n=t.slice(0,o),i=n.length;for(let t=i-1;t>=0;t-=1){let r=n[t].getAttribute("data-tree-key");if(!r)continue;let o=r.split("/");o.pop();let i=[],a=!0;for(let t=0;t<o.length;t+=1){i.push(o[t]);let r=i.join("/");if(!e[r]?.expanded){a=!1;break}}if(a)return n[t]}return null}(W.current,M,A.current);t&&(io(t),T(t));return}if("ArrowLeft"===e.key){e.preventDefault();let t=A.current.getAttribute("data-tree-key");if(!t)return;let r=W.current[t];if(!r)return;if(r.expanded)O(e=>{let r=e[t];return r?{...e,[t]:{...r,expanded:!1}}:e});else{let e=t.split("/");e.pop();let r=e.join("/"),o=r&&W.current[r];o&&(o.element.focus(),T(o.element))}return}if("ArrowRight"===e.key){e.preventDefault();let t=A.current.getAttribute("data-tree-key");if(!t)return;W.current[t]?.expanded||O(e=>{let r=e[t];return r?{...e,[t]:{...r,expanded:!0}}:e});return}}},z[21]=M,z[22]=$):$=z[22];let D=$;z[23]!==o?(k=e=>{T(e.target),o?.(e)},z[23]=o,z[24]=k):k=z[24];let J=k;return z[25]===Symbol.for("react.memo_cache_sentinel")?(j=()=>{I.current&&N(Array.from(I.current.querySelectorAll('[data-ui="TreeItem"]')))},z[25]=j):j=z[25],z[26]!==r?(R=[r],z[26]=r,z[27]=R):R=z[27],(0,l.useEffect)(j,R),z[28]!==r||z[29]!==J||z[30]!==D||z[31]!==n||z[32]!==_?(E=(0,i.jsx)(oj,{as:"ul","data-ui":"Tree",...n,onFocus:J,onKeyDown:D,ref:I,role:"tree",space:_,children:r}),z[28]=r,z[29]=J,z[30]=D,z[31]=n,z[32]=_,z[33]=E):E=z[33],z[34]!==w||z[35]!==E?(S=(0,i.jsx)(ii.Provider,{value:w,children:E}),z[34]=w,z[35]=E,z[36]=S):S=z[36],S})).displayName="Memo(ForwardRef(Tree))";let il=(0,l.memo)(function(e){let t,r,o,n;let l=(0,a.c)(9);l[0]!==e?({children:t,expanded:o,...r}=e,l[0]=e,l[1]=t,l[2]=r,l[3]=o):(t=l[1],r=l[2],o=l[3]);let d=void 0!==o&&o,s=ia(),c=!d;return l[4]!==t||l[5]!==r||l[6]!==c||l[7]!==s.space?(n=(0,i.jsx)(oj,{as:"ul","data-ui":"TreeGroup",...r,hidden:c,marginTop:s.space,role:"group",space:s.space,children:t}),l[4]=t,l[5]=r,l[6]=c,l[7]=s.space,l[8]=n):n=l[8],n}),id=(0,l.memo)(s.I4.li(function(){return(0,s.AH)`
    &[role='none'] > [role='treeitem'] {
      outline: none;
      cursor: default;
      border-radius: 3px;

      background-color: var(--card-bg-color);
      color: var(--treeitem-fg-color);

      &:focus {
        position: relative;
      }
    }

    &[role='treeitem'] {
      outline: none;

      & > div {
        cursor: default;
        border-radius: 3px;

        background-color: var(--card-bg-color);
        color: var(--treeitem-fg-color);
      }

      &:focus > div {
        position: relative;
      }
    }
  `},function(e){let{color:t}=(0,n.JW)(e.theme),r=t.selectable.default;return(0,s.AH)`
    &[role='none'] {
      & > [role='treeitem'] {
        ${t8(t,r.enabled)}
      }

      &[data-selected] > [role='treeitem'] {
        ${t8(t,r.pressed)}
      }

      @media (hover: hover) {
        &:not([data-selected]) > [role='treeitem']:not(:focus):hover {
          ${t8(t,r.hovered)}
        }

        & > [role='treeitem']:focus {
          ${t8(t,r.selected)}
        }
      }
    }

    &[role='treeitem'] {
      & > [data-ui='TreeItem__box'] {
        ${t8(t,r.enabled)}
      }

      &[data-selected] > [data-ui='TreeItem__box'] {
        ${t8(t,r.pressed)}
      }

      @media (hover: hover) {
        &:not([data-selected]):not(:focus) > [data-ui='TreeItem__box']:hover {
          ${t8(t,r.hovered)}
        }

        &:focus > [data-ui='TreeItem__box'] {
          ${t8(t,r.selected)}
        }
      }
    }
  `})),is=(0,s.I4)(tK).attrs({forwardedAs:"a"})(function(e){let{$level:t}=e,{space:r}=(0,n.JW)(e.theme);return(0,s.AH)`
    padding-left: ${j(r[2]*t)};

    &[data-as='a'] {
      text-decoration: none;
    }
  `}),ic=(0,s.I4)(t0)`
  & > svg {
    transition: transform 100ms;
  }
`;(0,l.memo)(function(e){let{children:t,expanded:r=!1,fontSize:o=1,href:n,icon:a,id:d,linkAs:s,muted:u,onClick:f,padding:p=2,selected:h=!1,space:b=2,text:m,weight:g,...v}=e,x=(0,l.useRef)(null),w=(0,l.useRef)(null),y=ia(),{path:$,registerItem:k,setExpanded:j,setFocusedElement:R}=y,E=(0,l.useId)(),S=d||E,z=(0,l.useMemo)(()=>$.concat([S||""]),[S,$]),_=z.join("/"),I=y.state[_],C=y.focusedElement===x.current,T=I?.expanded===void 0?r:I?.expanded||!1,A=y.focusedElement&&y.focusedElement===x.current?0:-1,M=(0,l.useMemo)(()=>({...y,level:y.level+1,path:z}),[z,y]),N=(0,l.useCallback)(e=>{f&&f(e);let t=e.target;t instanceof HTMLElement&&("TreeItem"===t.getAttribute("data-ui")||t.closest('[data-ui="TreeItem__box"]'))&&(e.stopPropagation(),j(_,!T),R(x.current))},[T,_,f,j,R]),F=(0,l.useCallback)(e=>{C&&"Enter"===e.key&&(w.current||x.current)?.click()},[C]);(0,l.useEffect)(()=>{if(x.current)return k(x.current,z.join("/"),T,h)},[T,z,k,h]);let O=(0,i.jsxs)(t4,{padding:p,children:[(0,i.jsxs)(tK,{marginRight:b,style:{visibility:a||t?"visible":"hidden",pointerEvents:"none"},children:[a&&(0,i.jsx)(t0,{muted:u,size:o,weight:g,children:(0,i.jsx)(a,{})}),!a&&(0,i.jsx)(ic,{muted:u,size:o,weight:g,children:(0,i.jsx)(c.nVd,{style:{transform:T?"rotate(90deg)":void 0}})})]}),(0,i.jsx)(tK,{flex:1,children:(0,i.jsx)(t0,{muted:u,size:o,textOverflow:"ellipsis",weight:g,children:m})})]});return n?(0,i.jsxs)(id,{"data-selected":h?"":void 0,"data-tree-id":S,"data-tree-key":_,"data-ui":"TreeItem",...v,onClick:N,ref:x,role:"none",children:[(0,i.jsx)(is,{$level:y.level,"aria-expanded":T,as:s,"data-ui":"TreeItem__box",href:n,ref:w,role:"treeitem",tabIndex:A,children:O}),(0,i.jsx)(ii.Provider,{value:M,children:t&&(0,i.jsx)(il,{hidden:!T,children:t})})]}):(0,i.jsxs)(id,{"data-selected":h?"":void 0,"data-ui":"TreeItem","data-tree-id":S,"data-tree-key":_,...v,"aria-expanded":T,onClick:N,onKeyDown:F,ref:x,role:"treeitem",tabIndex:A,children:[(0,i.jsx)(is,{$level:y.level,as:"div","data-ui":"TreeItem__box",children:O}),(0,i.jsx)(ii.Provider,{value:M,children:t&&(0,i.jsx)(il,{expanded:T,children:t})})]})}).displayName="Memo(TreeItem)"}}]);