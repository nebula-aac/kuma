import{_ as v,r as t,o as b,p as f,w as s,b as a,l as w,e as i,R as V,K as h,t as R}from"./index-BIN9nSPF.js";const T={};function X(B,o){const l=t("RouteTitle"),m=t("XCopyButton"),p=t("XAction"),_=t("XTabs"),d=t("RouterView"),u=t("AppView"),x=t("RouteView");return b(),f(x,{name:"external-service-detail-tabs-view",params:{mesh:"",service:""}},{default:s(({route:e,t:n})=>[a(u,{docs:n("external-services.href.docs"),breadcrumbs:[{to:{name:"mesh-detail-view",params:{mesh:e.params.mesh}},text:e.params.mesh},{to:{name:"external-service-list-view",params:{mesh:e.params.mesh}},text:n("external-services.routes.item.breadcrumbs")}]},{title:s(()=>[w("h1",null,[a(m,{text:e.params.service},{default:s(()=>[a(l,{title:n("external-services.routes.item.title",{name:e.params.service})},null,8,["title"])]),_:2},1032,["text"])])]),default:s(()=>{var c;return[o[0]||(o[0]=i()),a(_,{selected:(c=e.child())==null?void 0:c.name},V({_:2},[h(e.children,({name:r})=>({name:`${r}-tab`,fn:s(()=>[a(p,{to:{name:r}},{default:s(()=>[i(R(n(`external-services.routes.item.navigation.${r}`)),1)]),_:2},1032,["to"])])}))]),1032,["selected"]),o[1]||(o[1]=i()),a(d)]}),_:2},1032,["docs","breadcrumbs"])]),_:1})}const C=v(T,[["render",X]]);export{C as default};
