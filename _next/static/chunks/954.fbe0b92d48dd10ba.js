"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[954],{75954:(e,r,t)=>{t.r(r),t.d(r,{DetectViteDevServerStopped:()=>v,DevServerStoppedErrorScreen:()=>u,ViteDevServerStoppedError:()=>d});var o=t(95155),s=t(988),i=t(91611),n=t(12115);let c="Dev server stopped";class d extends Error{constructor(){super(c),this.name="ViteDevServerStoppedError",this.ViteDevServerStoppedError=!0}}let l=void 0,p=e=>!!e,a=()=>{let e,r,t,o;let i=(0,s.c)(5),[c,d]=(0,n.useState)(!1);i[0]===Symbol.for("react.memo_cache_sentinel")?(e=()=>d(!0),i[0]=e):e=i[0];let a=e;return i[1]===Symbol.for("react.memo_cache_sentinel")?(r=()=>{p(l)&&l.on("vite:ws:disconnect",a)},t=[a],i[1]=r,i[2]=t):(r=i[1],t=i[2]),(0,n.useEffect)(r,t),i[3]!==c?(o={devServerStopped:c},i[3]=c,i[4]=o):o=i[4],o},h=()=>{let{devServerStopped:e}=a();if(e)throw new d;return null},v=()=>p(l)?(0,o.jsx)(h,{}):null,u=()=>(0,o.jsx)(i.Zp,{height:"fill",overflow:"auto",paddingY:[4,5,6,7],paddingX:4,sizing:"border",tone:"critical",children:(0,o.jsx)(i.mc,{width:3,children:(0,o.jsxs)(i.BJ,{space:4,children:[(0,o.jsx)(i.DZ,{children:c}),(0,o.jsx)(i.Zp,{border:!0,radius:2,overflow:"auto",padding:4,tone:"inherit",children:(0,o.jsx)(i.BJ,{space:4,children:(0,o.jsx)(i.EY,{size:2,children:"The development server has stopped. You may need to restart it to continue working."})})})]})})})}}]);