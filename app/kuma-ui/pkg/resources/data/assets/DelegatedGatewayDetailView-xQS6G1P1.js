import{d as k,a as n,o,b as l,w as e,T as _,t as i,f as s,e as t,F as x,c as u,aw as g,m as v}from"./index-79jx220V.js";import{E as V}from"./ErrorBlock-yarDbHDF.js";import{_ as B}from"./LoadingBlock.vue_vue_type_script_setup_true_lang-EoJks4UR.js";import{S as C}from"./StatusBadge-G790FmjC.js";import{T as S}from"./TextWithCopyButton-VaV_OxHN.js";import"./index-CMzbRF1u.js";import"./WarningIcon.vue_vue_type_script_setup_true_lang-5wXnEXbm.js";import"./CopyButton-IfIOlr2n.js";const D={key:2,class:"stack"},E={class:"columns"},j=k({__name:"DelegatedGatewayDetailView",setup(P){return(R,T)=>{const f=n("KCard"),y=n("DataSource"),h=n("AppView"),w=n("RouteView");return o(),l(w,{name:"delegated-gateway-detail-view",params:{mesh:"",service:"",codeSearch:"",codeFilter:!1,codeRegExp:!1,dataplane:""}},{default:e(({route:p,t:r})=>[t(h,null,{default:e(()=>[t(y,{src:`/meshes/${p.params.mesh}/service-insights/${p.params.service}`},{default:e(({data:a,error:c})=>[c?(o(),l(V,{key:0,error:c},null,8,["error"])):a===void 0?(o(),l(B,{key:1})):(o(),u("div",D,[t(f,null,{default:e(()=>{var m,d;return[v("div",E,[t(_,null,{title:e(()=>[s(i(r("http.api.property.status")),1)]),body:e(()=>[t(C,{status:a.status},null,8,["status"])]),_:2},1024),s(),t(_,null,{title:e(()=>[s(i(r("http.api.property.address")),1)]),body:e(()=>[a.addressPort?(o(),l(S,{key:0,text:a.addressPort},null,8,["text"])):(o(),u(x,{key:1},[s(i(r("common.detail.none")),1)],64))]),_:2},1024),s(),t(g,{online:((m=a.dataplanes)==null?void 0:m.online)??0,total:((d=a.dataplanes)==null?void 0:d.total)??0},{title:e(()=>[s(i(r("http.api.property.dataPlaneProxies")),1)]),_:2},1032,["online","total"])])]}),_:2},1024)]))]),_:2},1032,["src"])]),_:2},1024)]),_:1})}}});export{j as default};