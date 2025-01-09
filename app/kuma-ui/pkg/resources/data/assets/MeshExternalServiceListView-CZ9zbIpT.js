import{d as q,r as t,o as a,p as u,w as o,b as r,e as l,m as y,as as E,c as _,J as h,K as k,R as K,aq as M,A as P,t as d,q as f,F,l as G}from"./index-BIN9nSPF.js";import{S as H}from"./SummaryView-CA02nKhw.js";const $=["innerHTML"],O=q({__name:"MeshExternalServiceListView",props:{mesh:{}},setup(w){const C=w;return(I,c)=>{const x=t("RouteTitle"),v=t("XAction"),b=t("XCopyButton"),V=t("KumaPort"),A=t("XActionGroup"),R=t("RouterView"),D=t("DataCollection"),S=t("DataLoader"),X=t("XCard"),B=t("AppView"),L=t("DataSource"),N=t("RouteView");return a(),u(N,{name:"mesh-external-service-list-view",params:{page:1,size:50,mesh:"",service:""}},{default:o(({route:n,t:m,can:T,uri:z,me:p})=>[r(x,{render:!1,title:m("services.routes.mesh-external-service-list-view.title")},null,8,["title"]),c[6]||(c[6]=l()),r(L,{src:z(y(E),"/zone-cps/:name/egresses",{name:"*"},{page:1,size:100})},{default:o(({data:g})=>[(a(!0),_(h,null,k([[[m("services.mesh-external-service.notifications.mtls-warning"),typeof C.mesh.mtlsBackend>"u"],[m("services.mesh-external-service.notifications.no-zone-egress"),g&&!g.items.find(i=>typeof i.zoneEgressInsight.connectedSubscription<"u")]].filter(([i,s])=>s).map(i=>i[0])],i=>(a(),u(B,{key:typeof i,docs:m("services.mesh-external-service.href.docs")},K({default:o(()=>[c[5]||(c[5]=l()),r(X,null,{default:o(()=>[r(S,{src:z(y(M),"/meshes/:mesh/mesh-external-services",{mesh:n.params.mesh},{page:n.params.page,size:n.params.size})},{loadable:o(({data:s})=>[r(D,{type:"services",items:(s==null?void 0:s.items)??[void 0],page:n.params.page,"page-size":n.params.size,total:s==null?void 0:s.total,onChange:n.update},{default:o(()=>[r(P,{"data-testid":"service-collection",headers:[{...p.get("headers.name"),label:"Name",key:"name"},{...p.get("headers.namespace"),label:"Namespace",key:"namespace"},...T("use zones")?[{...p.get("headers.zone"),label:"Zone",key:"zone"}]:[],{...p.get("headers.port"),label:"Port",key:"port"},{...p.get("headers.actions"),label:"Actions",key:"actions",hideLabel:!0}],items:s==null?void 0:s.items,"is-selected-row":e=>e.name===n.params.service,onResize:p.set},{name:o(({row:e})=>[r(b,{text:e.name},{default:o(()=>[r(v,{"data-action":"",to:{name:"mesh-external-service-summary-view",params:{mesh:e.mesh,service:e.id},query:{page:n.params.page,size:n.params.size}}},{default:o(()=>[l(d(e.name),1)]),_:2},1032,["to"])]),_:2},1032,["text"])]),namespace:o(({row:e})=>[l(d(e.namespace),1)]),zone:o(({row:e})=>[e.labels&&e.labels["kuma.io/origin"]==="zone"&&e.labels["kuma.io/zone"]?(a(),_(h,{key:0},[e.labels["kuma.io/zone"]?(a(),u(v,{key:0,to:{name:"zone-cp-detail-view",params:{zone:e.labels["kuma.io/zone"]}}},{default:o(()=>[l(d(e.labels["kuma.io/zone"]),1)]),_:2},1032,["to"])):f("",!0)],64)):(a(),_(h,{key:1},[l(d(m("common.detail.none")),1)],64))]),port:o(({row:e})=>[e.spec.match?(a(),u(V,{key:0,port:e.spec.match},null,8,["port"])):f("",!0)]),actions:o(({row:e})=>[r(A,null,{default:o(()=>[r(v,{to:{name:"mesh-external-service-detail-view",params:{mesh:e.mesh,service:e.id}}},{default:o(()=>[l(d(m("common.collection.actions.view")),1)]),_:2},1032,["to"])]),_:2},1024)]),_:2},1032,["headers","items","is-selected-row","onResize"]),c[4]||(c[4]=l()),s!=null&&s.items&&n.params.service?(a(),u(R,{key:0},{default:o(e=>[r(H,{onClose:J=>n.replace({name:"mesh-external-service-list-view",params:{mesh:n.params.mesh},query:{page:n.params.page,size:n.params.size}})},{default:o(()=>[(a(),u(F(e.Component),{items:s==null?void 0:s.items},null,8,["items"]))]),_:2},1032,["onClose"])]),_:2},1024)):f("",!0)]),_:2},1032,["items","page","page-size","total","onChange"])]),_:2},1032,["src"])]),_:2},1024)]),_:2},[i.length>0?{name:"notifications",fn:o(()=>[G("ul",null,[(a(!0),_(h,null,k(i,s=>(a(),_("li",{key:s,innerHTML:s},null,8,$))),128))])]),key:"0"}:void 0]),1032,["docs"]))),128))]),_:2},1032,["src"])]),_:1})}}});export{O as default};
