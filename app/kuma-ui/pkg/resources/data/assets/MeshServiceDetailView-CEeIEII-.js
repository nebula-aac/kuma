import{d as R,r as d,o as r,p as u,w as e,b as n,Q as _,e as t,t as s,q as f,c,J as g,K as C,l as k,m as I,Z as q,A as F,S as K,F as O,_ as $}from"./index-Ds8TyCyC.js";import{F as j}from"./FilterBar-Bn0WzgLg.js";import{S as G}from"./SummaryView-BNDYr_J1.js";const J={key:0},M={key:1},Z=R({__name:"MeshServiceDetailView",props:{data:{}},setup(w){const p=w;return(Q,l)=>{const h=d("XBadge"),z=d("XAction"),X=d("KumaPort"),x=d("XAboutCard"),V=d("XIcon"),A=d("XActionGroup"),S=d("RouterView"),D=d("DataCollection"),T=d("DataLoader"),L=d("XCard"),B=d("XLayout"),P=d("AppView"),E=d("RouteView");return r(),u(E,{name:"mesh-service-detail-view",params:{mesh:"",service:"",page:1,size:50,s:"",dataPlane:"",codeSearch:"",codeFilter:!1,codeRegExp:!1}},{default:e(({can:v,route:o,t:m,uri:N,me:y})=>[n(P,null,{default:e(()=>[n(B,{type:"stack"},{default:e(()=>[n(x,{title:m("services.mesh-service.about.title"),created:p.data.creationTime,modified:p.data.modificationTime},{default:e(()=>[n(_,{layout:"horizontal"},{title:e(()=>[t(s(m("http.api.property.state")),1)]),body:e(()=>[n(h,{appearance:p.data.spec.state==="Available"?"success":"danger"},{default:e(()=>[t(s(p.data.spec.state),1)]),_:1},8,["appearance"])]),_:2},1024),l[5]||(l[5]=t()),p.data.namespace.length>0?(r(),u(_,{key:0,layout:"horizontal"},{title:e(()=>[t(s(m("http.api.property.namespace")),1)]),body:e(()=>[n(h,{appearance:"decorative"},{default:e(()=>[t(s(p.data.namespace),1)]),_:1})]),_:2},1024)):f("",!0),l[6]||(l[6]=t()),v("use zones")&&p.data.zone?(r(),u(_,{key:1,layout:"horizontal"},{title:e(()=>[t(s(m("http.api.property.zone")),1)]),body:e(()=>[n(h,{appearance:"decorative"},{default:e(()=>[n(z,{to:{name:"zone-cp-detail-view",params:{zone:p.data.zone}}},{default:e(()=>[t(s(p.data.zone),1)]),_:1},8,["to"])]),_:1})]),_:2},1024)):f("",!0),l[7]||(l[7]=t()),n(_,{layout:"horizontal"},{title:e(()=>[t(s(m("http.api.property.ports")),1)]),body:e(()=>[p.data.spec.ports.length?(r(!0),c(g,{key:0},C(p.data.spec.ports,i=>(r(),u(X,{key:i.port,port:{...i,targetPort:void 0}},null,8,["port"]))),128)):(r(),c(g,{key:1},[t(s(m("common.detail.none")),1)],64))]),_:2},1024),l[8]||(l[8]=t()),n(_,{layout:"horizontal"},{title:e(()=>[t(s(m("http.api.property.selector")),1)]),body:e(()=>[Object.keys(p.data.spec.selector.dataplaneTags).length?(r(!0),c(g,{key:0},C(p.data.spec.selector.dataplaneTags,(i,a)=>(r(),u(h,{key:`${a}:${i}`,appearance:"info"},{default:e(()=>[t(s(a)+":"+s(i),1)]),_:2},1024))),128)):(r(),c(g,{key:1},[t(s(m("common.detail.none")),1)],64))]),_:2},1024)]),_:2},1032,["title","created","modified"]),l[19]||(l[19]=t()),k("div",null,[k("h3",null,s(m("services.detail.data_plane_proxies")),1),l[18]||(l[18]=t()),n(L,{class:"mt-4"},{default:e(()=>[k("search",null,[n(j,{class:"data-plane-proxy-filter",placeholder:"name:dataplane-name",query:o.params.s,fields:{name:{description:"filter by name or parts of a name"},protocol:{description:"filter by “kuma.io/protocol” value"},tag:{description:"filter by tags (e.g. “tag: version:2”)"}},onChange:i=>o.update({...Object.fromEntries(i.entries())})},null,8,["query","onChange"])]),l[17]||(l[17]=t()),n(T,{src:N(I(q),"/meshes/:mesh/dataplanes/for/mesh-service/:tags",{mesh:o.params.mesh,tags:JSON.stringify({...v("use zones")&&p.data.zone?{"kuma.io/zone":p.data.zone}:{},...p.data.spec.selector.dataplaneTags})},{page:o.params.page,size:o.params.size,search:o.params.s})},{loadable:e(({data:i})=>[n(D,{type:"data-planes",items:(i==null?void 0:i.items)??[void 0],page:o.params.page,"page-size":o.params.size,total:i==null?void 0:i.total,onChange:o.update},{default:e(()=>[n(F,{class:"data-plane-collection","data-testid":"data-plane-collection",headers:[{...y.get("headers.name"),label:"Name",key:"name"},{...y.get("headers.namespace"),label:"Namespace",key:"namespace"},...v("use zones")?[{...y.get("headers.zone"),label:"Zone",key:"zone"}]:[],{...y.get("headers.certificate"),label:"Certificate Info",key:"certificate"},{...y.get("headers.status"),label:"Status",key:"status"},{...y.get("headers.warnings"),label:"Warnings",key:"warnings",hideLabel:!0},{...y.get("headers.actions"),label:"Actions",key:"actions",hideLabel:!0}],items:i==null?void 0:i.items,"is-selected-row":a=>a.name===o.params.dataPlane,onResize:y.set},{name:e(({row:a})=>[n(z,{class:"name-link",to:{name:"mesh-service-data-plane-summary-view",params:{mesh:a.mesh,dataPlane:a.id},query:{page:o.params.page,size:o.params.size,s:o.params.s}},"data-action":""},{default:e(()=>[t(s(a.name),1)]),_:2},1032,["to"])]),namespace:e(({row:a})=>[t(s(a.namespace),1)]),zone:e(({row:a})=>[a.zone?(r(),u(z,{key:0,to:{name:"zone-cp-detail-view",params:{zone:a.zone}}},{default:e(()=>[t(s(a.zone),1)]),_:2},1032,["to"])):(r(),c(g,{key:1},[t(s(m("common.collection.none")),1)],64))]),certificate:e(({row:a})=>{var b;return[(b=a.dataplaneInsight.mTLS)!=null&&b.certificateExpirationTime?(r(),c(g,{key:0},[t(s(m("common.formats.datetime",{value:Date.parse(a.dataplaneInsight.mTLS.certificateExpirationTime)})),1)],64)):(r(),c(g,{key:1},[t(s(m("data-planes.components.data-plane-list.certificate.none")),1)],64))]}),status:e(({row:a})=>[n(K,{status:a.status},null,8,["status"])]),warnings:e(({row:a})=>[a.isCertExpired||a.warnings.length>0?(r(),u(V,{key:0,class:"mr-1",name:"warning"},{default:e(()=>[k("ul",null,[a.warnings.length>0?(r(),c("li",J,s(m("data-planes.components.data-plane-list.version_mismatch")),1)):f("",!0),l[9]||(l[9]=t()),a.isCertExpired?(r(),c("li",M,s(m("data-planes.components.data-plane-list.cert_expired")),1)):f("",!0)])]),_:2},1024)):(r(),c(g,{key:1},[t(s(m("common.collection.none")),1)],64))]),actions:e(({row:a})=>[n(A,null,{default:e(()=>[n(z,{to:{name:"data-plane-detail-view",params:{dataPlane:a.id}}},{default:e(()=>[t(s(m("common.collection.actions.view")),1)]),_:2},1032,["to"])]),_:2},1024)]),_:2},1032,["headers","items","is-selected-row","onResize"]),l[16]||(l[16]=t()),o.params.dataPlane?(r(),u(S,{key:0},{default:e(a=>[n(G,{onClose:b=>o.replace({name:o.name,params:{mesh:o.params.mesh},query:{page:o.params.page,size:o.params.size,s:o.params.s}})},{default:e(()=>[typeof i<"u"?(r(),u(O(a.Component),{key:0,items:i.items},null,8,["items"])):f("",!0)]),_:2},1032,["onClose"])]),_:2},1024)):f("",!0)]),_:2},1032,["items","page","page-size","total","onChange"])]),_:2},1032,["src"])]),_:2},1024)])]),_:2},1024)]),_:2},1024)]),_:1})}}}),Y=$(Z,[["__scopeId","data-v-56b92a49"]]);export{Y as default};
