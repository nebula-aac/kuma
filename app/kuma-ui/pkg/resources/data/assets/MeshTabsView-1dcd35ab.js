import{d,l as f,Z as w,a as n,o as R,b as V,w as m,e as s,p as b,q as p,f as _}from"./index-203d56a2.js";import{N as x}from"./NavTabs-94b01e67.js";import{T}from"./TextWithCopyButton-45b0690a.js";import"./CopyButton-4a565fd0.js";import"./index-9dd3e7d3.js";const q=d({__name:"MeshTabsView",setup(v){var c;const{t:u}=f(),h=(((c=w().getRoutes().find(e=>e.name==="mesh-tabs-view"))==null?void 0:c.children)??[]).map(e=>{var a,t;const r=typeof e.name>"u"?(a=e.children)==null?void 0:a[0]:e,o=r.name,i=((t=r.meta)==null?void 0:t.module)??"";return{title:u(`meshes.routes.item.navigation.${o}`),routeName:o,module:i}});return(e,r)=>{const o=n("RouteTitle"),i=n("RouterView"),l=n("AppView"),a=n("RouteView");return R(),V(a,{name:"mesh-tabs-view",params:{mesh:""}},{default:m(({route:t})=>[s(l,null,{title:m(()=>[b("h1",null,[s(T,{text:t.params.mesh},{default:m(()=>[s(o,{title:p(u)("meshes.routes.item.title",{name:t.params.mesh})},null,8,["title"])]),_:2},1032,["text"])])]),default:m(()=>[_(),s(x,{class:"route-mesh-view-tabs",tabs:p(h)},null,8,["tabs"]),_(),s(i)]),_:2},1024)]),_:1})}}});export{q as default};