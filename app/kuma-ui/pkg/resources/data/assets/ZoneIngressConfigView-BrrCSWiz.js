import{d as V,r as n,o as d,q as p,w as a,b as s,e as E,p as l,au as m,s as v}from"./index-iylzCeaz.js";import{_ as F}from"./ResourceCodeBlock.vue_vue_type_script_setup_true_lang-eMuwTm1M.js";const I=V({__name:"ZoneIngressConfigView",setup(S){return(k,t)=>{const g=n("RouteTitle"),_=n("DataSource"),u=n("DataLoader"),f=n("XCard"),C=n("AppView"),h=n("RouteView");return d(),p(h,{name:"zone-ingress-config-view",params:{zoneIngress:"",codeSearch:"",codeFilter:!1,codeRegExp:!1}},{default:a(({route:e,t:x,uri:c})=>[s(g,{render:!1,title:x("zone-ingresses.routes.item.navigation.zone-ingress-config-view")},null,8,["title"]),t[0]||(t[0]=E()),s(C,null,{default:a(()=>[s(f,null,{default:a(()=>[s(u,{src:c(l(m),"/zone-ingresses/:name",{name:e.params.zoneIngress})},{default:a(({data:w})=>[s(F,{resource:w.config,"is-searchable":"",query:e.params.codeSearch,"is-filter-mode":e.params.codeFilter,"is-reg-exp-mode":e.params.codeRegExp,onQueryChange:o=>e.update({codeSearch:o}),onFilterModeChange:o=>e.update({codeFilter:o}),onRegExpModeChange:o=>e.update({codeRegExp:o})},{default:a(({copy:o,copying:R})=>[R?(d(),p(_,{key:0,src:c(l(m),"/zone-ingresses/:name/as/kubernetes",{name:e.params.zoneIngress},{cacheControl:"no-store"}),onChange:r=>{o(i=>i(r))},onError:r=>{o((i,z)=>z(r))}},null,8,["src","onChange","onError"])):v("",!0)]),_:2},1032,["resource","query","is-filter-mode","is-reg-exp-mode","onQueryChange","onFilterModeChange","onRegExpModeChange"])]),_:2},1032,["src"])]),_:2},1024)]),_:2},1024)]),_:1})}}});export{I as default};
