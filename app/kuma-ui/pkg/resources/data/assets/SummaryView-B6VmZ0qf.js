import{a2 as E,a3 as I,K as $,a4 as T,a5 as m,a6 as g,a7 as L,a8 as M,p as P,a9 as R,d as V,aa as N,ab as q,x as B,ac as F,r as _,o as K,q as W,w as x,b as X,e as j,a as D,_ as z}from"./index-iylzCeaz.js";const A=L?window:void 0;function y(n){var i;const a=m(n);return(i=a==null?void 0:a.$el)!=null?i:a}function v(...n){const i=[],a=()=>{i.forEach(t=>t()),i.length=0},l=(t,s,r,d)=>(t.addEventListener(s,r,d),()=>t.removeEventListener(s,r,d)),f=$(()=>{const t=T(m(n[0])).filter(s=>s!=null);return t.every(s=>typeof s!="string")?t:void 0}),p=g(()=>{var t,s;return[(s=(t=f.value)==null?void 0:t.map(r=>y(r)))!=null?s:[A].filter(r=>r!=null),T(m(f.value?n[1]:n[0])),T(P(f.value?n[2]:n[1])),m(f.value?n[3]:n[2])]},([t,s,r,d])=>{if(a(),!(t!=null&&t.length)||!(s!=null&&s.length)||!(r!=null&&r.length))return;const w=M(d)?{...d}:d;i.push(...t.flatMap(h=>s.flatMap(b=>r.map(k=>l(h,b,k,w)))))},{flush:"post"}),c=()=>{p(),a()};return R(a),c}let O=!1;function G(n,i,a={}){const{window:l=A,ignore:f=[],capture:p=!0,detectIframe:c=!1}=a;if(!l)return E;if(I&&!O){O=!0;const e={passive:!0};Array.from(l.document.body.children).forEach(o=>v(o,"click",E,e)),v(l.document.documentElement,"click",E,e)}let t=!0;const s=e=>m(f).some(o=>{if(typeof o=="string")return Array.from(l.document.querySelectorAll(o)).some(u=>u===e.target||e.composedPath().includes(u));{const u=y(o);return u&&(e.target===u||e.composedPath().includes(u))}});function r(e){const o=m(e);return o&&o.$.subTree.shapeFlag===16}function d(e,o){const u=m(e),S=u.$.subTree&&u.$.subTree.children;return S==null||!Array.isArray(S)?!1:S.some(C=>C.el===o.target||o.composedPath().includes(C.el))}const w=e=>{const o=y(n);if(e.target!=null&&!(!(o instanceof Element)&&r(n)&&d(n,e))&&!(!o||o===e.target||e.composedPath().includes(o))){if(e.detail===0&&(t=!s(e)),!t){t=!0;return}i(e)}};let h=!1;const b=[v(l,"click",e=>{h||(h=!0,setTimeout(()=>{h=!1},0),w(e))},{passive:!0,capture:p}),v(l,"pointerdown",e=>{const o=y(n);t=!s(e)&&!!(o&&!e.composedPath().includes(o))},{passive:!0}),c&&v(l,"blur",e=>{setTimeout(()=>{var o;const u=y(n);((o=l.document.activeElement)==null?void 0:o.tagName)==="IFRAME"&&!(u!=null&&u.contains(l.document.activeElement))&&i(e)},0)},{passive:!0})].filter(Boolean);return()=>b.forEach(e=>e())}const H=V({__name:"SummaryView",props:{width:{default:"560px"}},emits:["close"],setup(n,{emit:i}){const a=N("summary-view-title");q("app-summary-view",a);const l=B(null);G(l,F(c=>{var s;const t=c.target;(((s=window.getSelection())==null?void 0:s.isCollapsed)??!0)&&!c.defaultPrevented&&c.isTrusted&&t.nodeName.toLowerCase()!=="a"&&p("close")},1,!0,!1));const f=n,p=i;return(c,t)=>{const s=_("XTeleportSlot"),r=_("KSlideout");return K(),W(r,{ref_key:"slideOutRef",ref:l,class:"summary-slideout","close-on-blur":!1,"has-overlay":!1,visible:"","max-width":f.width,"offset-top":"var(--app-slideout-offset-top, 0)","data-testid":"summary",onClose:t[0]||(t[0]=d=>p("close"))},{title:x(()=>[X(s,{name:P(a)},null,8,["name"])]),default:x(()=>[t[1]||(t[1]=j()),D(c.$slots,"default",{},void 0,!0)]),_:3},8,["max-width"])}}}),Q=z(H,[["__scopeId","data-v-0b1b5d96"]]);export{Q as S};
