import{d as k,K as d,r as h,o as n,q as u,w as i,c as g,M as y,N as b,I as v,m,t as p,e as w,n as T,_ as B}from"./index-iylzCeaz.js";const x={class:"label"},C={class:"value"},L=k({__name:"TagList",props:{tags:{},shouldTruncate:{type:Boolean,default:!1},alignment:{default:"left"}},setup(_){const s=_,c=d(()=>(Array.isArray(s.tags)?s.tags:Object.entries(s.tags??{}).map(([t,l])=>({label:t,value:l}))).map(t=>{const{label:l,value:e}=t,r=f(t);return{label:l,value:e,route:r}})),o=d(()=>s.shouldTruncate||Object.keys(c.value).length>10);function f(a){if(a.value!=="*")switch(a.label){case"kuma.io/zone":return{name:"data-plane-list-view",query:{s:`zone:${a.value}`}};case"kuma.io/service":return{name:"data-plane-list-view",query:{s:`service:${a.value}`}};case"kuma.io/mesh":return{name:"mesh-detail-view",params:{mesh:a.value}};default:return}}return(a,t)=>{const l=h("XBadge");return n(),u(v(o.value?"KTruncate":"div"),{width:o.value?"auto":void 0,class:T({"tag-list":!o.value,"tag-list--align-right":s.alignment==="right"})},{default:i(()=>[(n(!0),g(y,null,b(c.value,(e,r)=>(n(),u(l,{key:r,class:"tag kv","data-kv-key":e.label,"data-kv-owner":e.label.split("/")[0]},{default:i(()=>[(n(),u(v(e.route?"XAction":"span"),{to:e.route},{default:i(()=>[m("span",x,p(e.label),1),t[0]||(t[0]=w(":")),m("span",C,p(e.value),1)]),_:2},1032,["to"]))]),_:2},1032,["data-kv-key","data-kv-owner"]))),128))]),_:1},8,["width","class"])}}}),z=B(L,[["__scopeId","data-v-3e9f64ec"]]);export{z as T};
