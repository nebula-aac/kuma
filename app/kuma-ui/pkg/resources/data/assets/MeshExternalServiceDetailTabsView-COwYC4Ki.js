import{d as D,r as e,o as c,q as p,w as t,b as a,p as T,aq as R,c as X,s as y,e as i,T as B,N as S,t as k,I as A}from"./index-iylzCeaz.js";const N={key:0},E=D({__name:"MeshExternalServiceDetailTabsView",setup(L){return(g,n)=>{const _=e("RouteTitle"),d=e("XCopyButton"),u=e("XAction"),h=e("XTabs"),v=e("RouterView"),f=e("DataLoader"),x=e("AppView"),w=e("DataSource"),b=e("RouteView");return c(),p(b,{name:"mesh-external-service-detail-tabs-view",params:{mesh:"",service:""}},{default:t(({route:s,t:r,uri:V})=>[a(w,{src:V(T(R),"/meshes/:mesh/mesh-external-service/:name",{mesh:s.params.mesh,name:s.params.service})},{default:t(({data:m,error:C})=>[a(x,{docs:r("services.mesh-external-service.href.docs"),breadcrumbs:[{to:{name:"mesh-detail-view",params:{mesh:s.params.mesh}},text:s.params.mesh},{to:{name:"mesh-external-service-list-view",params:{mesh:s.params.mesh}},text:r("services.routes.mesh-external-service-list-view.title")}]},{title:t(()=>[m?(c(),X("h1",N,[a(d,{text:s.params.service},{default:t(()=>[a(_,{title:r("services.routes.item.title",{name:m.name})},null,8,["title"])]),_:2},1032,["text"])])):y("",!0)]),default:t(()=>[n[1]||(n[1]=i()),a(f,{data:[m],errors:[C]},{default:t(()=>{var l;return[a(h,{selected:(l=s.child())==null?void 0:l.name},B({_:2},[S(s.children,({name:o})=>({name:`${o}-tab`,fn:t(()=>[a(u,{to:{name:o}},{default:t(()=>[i(k(r(`services.routes.item.navigation.${o}`)),1)]),_:2},1032,["to"])])}))]),1032,["selected"]),n[0]||(n[0]=i()),a(v,null,{default:t(o=>[(c(),p(A(o.Component),{data:m},null,8,["data"]))]),_:2},1024)]}),_:2},1032,["data","errors"])]),_:2},1032,["docs","breadcrumbs"])]),_:2},1032,["src"])]),_:1})}}});export{E as default};
