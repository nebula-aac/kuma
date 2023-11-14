import{d as z,l as x,R as y,o as r,c as p,e as d,w as s,f as t,t as i,q as n,a6 as g,b as _,a3 as h,F as w,a as m,p as c,B as V,C as k,aJ as B,_ as O}from"./index-d70552e2.js";import{S as R}from"./StatusBadge-45879546.js";import{g as $}from"./dataplane-0a086c06.js";import{_ as A}from"./EmptyBlock.vue_vue_type_script_setup_true_lang-afd5d741.js";const C={class:"stack"},Z=z({__name:"ZoneIngressSummary",props:{zoneIngressOverview:{}},setup(l){const{t:o}=x(),a=l,I=y(()=>$(a.zoneIngressOverview.zoneIngressInsight)),v=y(()=>{const{networking:e}=a.zoneIngressOverview.zoneIngress;return e!=null&&e.address&&(e!=null&&e.port)?`${e.address}:${e.port}`:null}),u=y(()=>{const{networking:e}=a.zoneIngressOverview.zoneIngress;return e!=null&&e.advertisedAddress&&(e!=null&&e.advertisedPort)?`${e.advertisedAddress}:${e.advertisedPort}`:null});return(e,f)=>(r(),p("div",C,[d(g,null,{title:s(()=>[t(i(n(o)("http.api.property.status")),1)]),body:s(()=>[d(R,{status:I.value},null,8,["status"])]),_:1}),t(),d(g,null,{title:s(()=>[t(i(n(o)("http.api.property.address")),1)]),body:s(()=>[v.value?(r(),_(h,{key:0,text:v.value},null,8,["text"])):(r(),p(w,{key:1},[t(i(n(o)("common.detail.none")),1)],64))]),_:1}),t(),d(g,null,{title:s(()=>[t(i(n(o)("http.api.property.advertisedAddress")),1)]),body:s(()=>[u.value?(r(),_(h,{key:0,text:u.value},null,8,["text"])):(r(),p(w,{key:1},[t(i(n(o)("common.detail.none")),1)],64))]),_:1})]))}}),b=l=>(V("data-v-d1ae0ed1"),l=l(),k(),l),T={class:"summary-title-wrapper"},F=b(()=>c("img",{"aria-hidden":"true",src:B},null,-1)),N={class:"summary-title"},D={key:1,class:"stack"},L=z({__name:"ZoneIngressSummaryView",props:{name:{},zoneIngressOverview:{default:void 0}},setup(l){const{t:o}=x(),a=l;return(I,v)=>{const u=m("RouteTitle"),e=m("RouterLink"),f=m("AppView"),S=m("RouteView");return r(),_(S,{name:"zone-ingress-summary-view"},{default:s(()=>[d(f,null,{title:s(()=>[c("div",T,[F,t(),c("h2",N,[d(e,{to:{name:"zone-ingress-detail-view",params:{zone:a.name}}},{default:s(()=>[d(u,{title:n(o)("zone-ingresses.routes.item.title",{name:a.name}),render:!0},null,8,["title"])]),_:1},8,["to"])])])]),default:s(()=>[t(),a.zoneIngressOverview===void 0?(r(),_(A,{key:0},{message:s(()=>[c("p",null,i(n(o)("common.collection.summary.empty_message",{type:"ZoneIngress"})),1)]),default:s(()=>[t(i(n(o)("common.collection.summary.empty_title",{type:"ZoneIngress"}))+" ",1)]),_:1})):(r(),p("div",D,[c("div",null,[c("h3",null,i(n(o)("zone-ingresses.routes.item.overview")),1),t(),d(Z,{class:"mt-4","zone-ingress-overview":a.zoneIngressOverview},null,8,["zone-ingress-overview"])])]))]),_:1})]),_:1})}}});const W=O(L,[["__scopeId","data-v-d1ae0ed1"]]);export{W as default};
