import{E as h}from"./ErrorBlock-ec3dc6ed.js";import{_ as w}from"./LoadingBlock.vue_vue_type_script_setup_true_lang-851e7c2d.js";import{_ as k}from"./ResourceCodeBlock.vue_vue_type_style_index_0_lang-e02044c9.js";import{d as V,u as v,a as e,o as t,b as s,w as o,e as r,p as g,f as C,q as x}from"./index-2abc6d0d.js";import"./index-52545d1d.js";import"./TextWithCopyButton-6f5fcbbb.js";import"./CopyButton-31edefd2.js";import"./WarningIcon.vue_vue_type_script_setup_true_lang-1e5409a6.js";import"./CodeBlock.vue_vue_type_style_index_0_lang-f4baddc1.js";import"./toYaml-4e00099e.js";const q=V({__name:"MeshConfigView",setup(y){const i=v();return(A,B)=>{const c=e("RouteTitle"),p=e("DataSource"),u=e("KCard"),_=e("AppView"),l=e("RouteView");return t(),s(l,{name:"mesh-config-view","data-testid":"mesh-config-view",params:{mesh:""}},{default:o(({route:a,t:f})=>[r(_,null,{title:o(()=>[g("h2",null,[r(c,{title:f("meshes.routes.item.navigation.mesh-config-view")},null,8,["title"])])]),default:o(()=>[C(),r(u,null,{body:o(()=>[r(p,{src:`/meshes/${a.params.mesh}`},{default:o(({data:n,error:m})=>[m!==void 0?(t(),s(h,{key:0,error:m},null,8,["error"])):n===void 0?(t(),s(w,{key:1})):(t(),s(k,{key:2,id:"code-block-mesh",resource:n,"resource-fetcher":d=>x(i).getMesh({name:a.params.mesh},d)},null,8,["resource","resource-fetcher"]))]),_:2},1032,["src"])]),_:2},1024)]),_:2},1024)]),_:1})}}});export{q as default};