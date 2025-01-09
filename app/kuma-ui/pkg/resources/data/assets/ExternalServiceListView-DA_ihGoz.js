import{d as y,r as o,o as c,p as u,w as e,b as t,e as l,m as z,ar as A,A as X,t as m,c as V,J as b}from"./index-BIN9nSPF.js";const L=y({__name:"ExternalServiceListView",setup(R){return(B,p)=>{const g=o("RouteTitle"),_=o("XAction"),d=o("XCopyButton"),h=o("XActionGroup"),v=o("DataCollection"),x=o("DataLoader"),f=o("XCard"),w=o("AppView"),C=o("RouteView");return c(),u(C,{name:"external-service-list-view",params:{page:1,size:50,mesh:""}},{default:e(({route:a,t:r,me:i,uri:k})=>[t(g,{render:!1,title:r("external-services.routes.items.title")},null,8,["title"]),p[2]||(p[2]=l()),t(w,{docs:r("external-services.href.docs")},{default:e(()=>[t(f,null,{default:e(()=>[t(x,{src:k(z(A),"/meshes/:mesh/external-services",{mesh:a.params.mesh},{page:a.params.page,size:a.params.size})},{loadable:e(({data:n})=>[t(v,{type:"external-services",items:(n==null?void 0:n.items)??[void 0],page:a.params.page,"page-size":a.params.size,total:n==null?void 0:n.total,onChange:a.update},{default:e(()=>[t(X,{class:"external-service-collection","data-testid":"external-service-collection",headers:[{...i.get("headers.name"),label:"Name",key:"name"},{...i.get("headers.address"),label:"Address",key:"address"},{...i.get("headers.actions"),label:"Actions",key:"actions",hideLabel:!0}],items:n==null?void 0:n.items,onResize:i.set},{name:e(({row:s})=>[t(d,{text:s.name},{default:e(()=>[t(_,{to:{name:"external-service-detail-view",params:{mesh:s.mesh,service:s.name},query:{page:a.params.page,size:a.params.size}}},{default:e(()=>[l(m(s.name),1)]),_:2},1032,["to"])]),_:2},1032,["text"])]),address:e(({row:s})=>[s.networking.address?(c(),u(d,{key:0,text:s.networking.address},null,8,["text"])):(c(),V(b,{key:1},[l(m(r("common.collection.none")),1)],64))]),actions:e(({row:s})=>[t(h,null,{default:e(()=>[t(_,{to:{name:"external-service-detail-view",params:{mesh:s.mesh,service:s.name}}},{default:e(()=>[l(m(r("common.collection.actions.view")),1)]),_:2},1032,["to"])]),_:2},1024)]),_:2},1032,["headers","items","onResize"])]),_:2},1032,["items","page","page-size","total","onChange"])]),_:2},1032,["src"])]),_:2},1024)]),_:2},1032,["docs"])]),_:1})}}});export{L as default};
