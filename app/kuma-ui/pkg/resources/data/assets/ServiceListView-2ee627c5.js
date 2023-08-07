import{d as f,r as g,o as c,a as u,w as t,h as a,q as b,b as s,g as i,G as k,t as l,e as m,F as p,$ as w,D as h,v as x,H as S}from"./index-545578a7.js";import{A as z}from"./AppCollection-5445ba9e.js";import{g as C,A as $,_ as A,f as T}from"./RouteView.vue_vue_type_script_setup_true_lang-3ef6698f.js";import{_ as B}from"./DataSource.vue_vue_type_script_setup_true_lang-0ee45356.js";import{_ as L}from"./RouteTitle.vue_vue_type_script_setup_true_lang-ec38e26b.js";import{S as V}from"./StatusBadge-5fda1979.js";import{T as N}from"./TextWithCopyButton-6c757590.js";const D=f({__name:"ServiceListView",props:{page:{},size:{},mesh:{}},setup(_){const r=_,{t:o}=C();return(P,E)=>{const d=g("RouterLink");return c(),u(A,{name:"services-list-view"},{default:t(({route:v})=>[a(B,{src:`/${r.mesh}/service-insights?page=${r.page}&size=${r.size}`},{default:t(({data:n,error:y})=>[a($,null,{title:t(()=>[b("h2",null,[a(L,{title:s(o)("services.routes.items.title"),render:!0},null,8,["title"])])]),default:t(()=>[i(),a(s(k),null,{body:t(()=>[a(z,{class:"service-collection","data-testid":"service-collection","empty-state-title":s(o)("common.emptyState.title"),"empty-state-message":s(o)("common.emptyState.message",{type:"Services"}),headers:[{label:"Name",key:"name"},{label:"Type",key:"serviceType"},{label:"Address",key:"addressPort"},{label:"DP proxies (online / total)",key:"online"},{label:"Status",key:"status"},{label:"Actions",key:"actions",hideLabel:!0}],"page-number":r.page,"page-size":r.size,total:n==null?void 0:n.total,items:n==null?void 0:n.items,error:y,onChange:v.update},{name:t(({row:e})=>[a(d,{to:{name:"service-detail-view",params:{service:e.name}}},{default:t(()=>[i(l(e.name),1)]),_:2},1032,["to"])]),serviceType:t(({rowValue:e})=>[i(l(e||s(o)("common.collection.none")),1)]),addressPort:t(({rowValue:e})=>[e?(c(),u(N,{key:0,text:e},null,8,["text"])):(c(),m(p,{key:1},[i(l(s(o)("common.collection.none")),1)],64))]),online:t(({row:e})=>[e.dataplanes?(c(),m(p,{key:0},[i(l(e.dataplanes.online||0)+" / "+l(e.dataplanes.total||0),1)],64)):(c(),m(p,{key:1},[i(l(s(o)("common.collection.none")),1)],64))]),status:t(({row:e})=>[a(V,{status:e.status||"not_available"},null,8,["status"])]),actions:t(({row:e})=>[a(s(w),{class:"actions-dropdown","kpop-attributes":{placement:"bottomEnd",popoverClasses:"mt-5 more-actions-popover"},width:"150"},{default:t(()=>[a(s(h),{class:"non-visual-button",appearance:"secondary",size:"small"},{icon:t(()=>[a(s(x),{color:"var(--black-400)",icon:"more",size:"16"})]),_:1})]),items:t(()=>[a(s(S),{item:{to:{name:"service-detail-view",params:{service:e.name}},label:s(o)("common.collection.actions.view")}},null,8,["item"])]),_:2},1024)]),_:2},1032,["empty-state-title","empty-state-message","headers","page-number","page-size","total","items","error","onChange"])]),_:2},1024)]),_:2},1024)]),_:2},1032,["src"])]),_:1})}}});const j=T(D,[["__scopeId","data-v-3f20e8ec"]]);export{j as default};
