import{E as d}from"./EnvoyData-cf2afcb8.js";import{d as c,a as t,o as m,b as u,w as o,e as n,p as _,f as h}from"./index-8567ed34.js";import"./index-52545d1d.js";import"./CodeBlock.vue_vue_type_style_index_0_lang-93993f58.js";import"./EmptyBlock.vue_vue_type_script_setup_true_lang-c8b34455.js";import"./ErrorBlock-3040d559.js";import"./TextWithCopyButton-cadc290c.js";import"./CopyButton-faeef64d.js";import"./WarningIcon.vue_vue_type_script_setup_true_lang-184215be.js";import"./LoadingBlock.vue_vue_type_script_setup_true_lang-bbe0c89a.js";const B=c({__name:"DataPlaneClustersView",setup(g){return(f,x)=>{const r=t("RouteTitle"),s=t("KCard"),p=t("AppView"),l=t("RouteView");return m(),u(l,{name:"data-plane-clusters-view",params:{mesh:"",dataPlane:"",codeSearch:"",codeFilter:!1,codeRegExp:!1}},{default:o(({route:e,t:i})=>[n(p,null,{title:o(()=>[_("h2",null,[n(r,{title:i("data-planes.routes.item.navigation.data-plane-clusters-view")},null,8,["title"])])]),default:o(()=>[h(),n(s,null,{default:o(()=>[n(d,{resource:"Data Plane Proxy",src:`/meshes/${e.params.mesh}/dataplanes/${e.params.dataPlane}/data-path/clusters`,query:e.params.codeSearch,"is-filter-mode":e.params.codeFilter==="true","is-reg-exp-mode":e.params.codeRegExp==="true",onQueryChange:a=>e.update({codeSearch:a}),onFilterModeChange:a=>e.update({codeFilter:a}),onRegExpModeChange:a=>e.update({codeRegExp:a})},null,8,["src","query","is-filter-mode","is-reg-exp-mode","onQueryChange","onFilterModeChange","onRegExpModeChange"])]),_:2},1024)]),_:2},1024)]),_:1})}}});export{B as default};