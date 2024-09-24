import{d as j,v as T,r as i,o as s,m as g,w as e,b as a,k as C,e as t,l as I,B as J,a0 as O,c as f,L as h,t as m,p as v,A as Q,M as b,a1 as U,S as Y,E as ee,q as ne}from"./index-DZjsE3st.js";import{S as oe}from"./SummaryView-C3mbnwKZ.js";const te=["innerHTML"],se=["data-testid"],ae=["innerHTML"],le=j({__name:"ZoneListView",setup(ie){const S=T({}),L=T({}),A=w=>{const y="zoneIngress";S.value=w.items.reduce((u,d)=>{var z;const r=(z=d[y])==null?void 0:z.zone;if(typeof r<"u"){typeof u[r]>"u"&&(u[r]={online:[],offline:[]});const k=typeof d[`${y}Insight`].connectedSubscription<"u"?"online":"offline";u[r][k].push(d)}return u},{})},R=w=>{const y="zoneEgress";L.value=w.items.reduce((u,d)=>{var z;const r=(z=d[y])==null?void 0:z.zone;if(typeof r<"u"){typeof u[r]>"u"&&(u[r]={online:[],offline:[]});const k=typeof d[`${y}Insight`].connectedSubscription<"u"?"online":"offline";u[r][k].push(d)}return u},{})};return(w,y)=>{const u=i("RouteTitle"),d=i("DataSource"),r=i("XAction"),z=i("XTeleportTemplate"),k=i("XIcon"),B=i("DataLoader"),$=i("XPrompt"),E=i("DataSink"),M=i("XDisclosure"),x=i("XActionGroup"),N=i("DataCollection"),Z=i("KCard"),H=i("RouterView"),q=i("AppView"),P=i("RouteView");return s(),g(P,{name:"zone-cp-list-view",params:{page:1,size:50,zone:""}},{default:e(({route:c,t:p,can:D,uri:G,me:_})=>[a(q,{docs:p("zones.href.docs.cta")},{title:e(()=>[C("h1",null,[a(u,{title:p("zone-cps.routes.items.title")},null,8,["title"])])]),default:e(()=>[t(),a(d,{src:G(I(J),"/zone-cps",{},{page:c.params.page,size:c.params.size})},{default:e(({data:l,error:X,refresh:K})=>[a(d,{src:"/zone-ingress-overviews?page=1&size=100",onChange:A}),t(),a(d,{src:"/zone-egress-overviews?page=1&size=100",onChange:R}),t(),C("div",{innerHTML:p("zone-cps.routes.items.intro",{},{defaultMessage:""})},null,8,te),t(),a(Z,null,{default:e(()=>[X!==void 0?(s(),g(O,{key:0,error:X},null,8,["error"])):(s(),f(h,{key:1},[D("create zones")&&((l==null?void 0:l.items)??[]).length>0?(s(),g(z,{key:0,to:{name:"zone-cp-list-view-actions"}},{default:e(()=>[a(r,{action:"create",appearance:"primary",to:{name:"zone-create-view"},"data-testid":"create-zone-link"},{default:e(()=>[t(m(p("zones.index.create")),1)]),_:2},1024)]),_:2},1024)):v("",!0),t(),a(N,{type:"zones",items:(l==null?void 0:l.items)??[void 0],page:c.params.page,"page-size":c.params.size,total:l==null?void 0:l.total,onChange:c.update},{default:e(()=>[a(Q,{class:"zone-cp-collection","data-testid":"zone-cp-collection",headers:[{..._.get("headers.type"),label:" ",key:"type"},{..._.get("headers.name"),label:"Name",key:"name"},{..._.get("headers.zoneCpVersion"),label:"Zone Leader CP Version",key:"zoneCpVersion"},{..._.get("headers.ingress"),label:"Ingresses (online / total)",key:"ingress"},{..._.get("headers.egress"),label:"Egresses (online / total)",key:"egress"},{..._.get("headers.state"),label:"Status",key:"state"},{..._.get("headers.warnings"),label:"Warnings",key:"warnings",hideLabel:!0},{..._.get("headers.actions"),label:"Actions",key:"actions",hideLabel:!0}],items:l==null?void 0:l.items,"is-selected-row":n=>n.name===c.params.zone,onResize:_.set},{type:e(({row:n})=>[(s(!0),f(h,null,b([["kubernetes","universal"].find(o=>o===n.zoneInsight.environment)??"kubernetes"],o=>(s(),g(k,{key:o,name:o},{default:e(()=>[t(m(p(`common.product.environment.${o}`)),1)]),_:2},1032,["name"]))),128))]),name:e(({row:n})=>[a(r,{"data-action":"",to:{name:"zone-cp-detail-view",params:{zone:n.name},query:{page:c.params.page,size:c.params.size}}},{default:e(()=>[t(m(n.name),1)]),_:2},1032,["to"])]),zoneCpVersion:e(({row:n})=>[t(m(I(U)(n.zoneInsight,"version.kumaCp.version",p("common.collection.none"))),1)]),ingress:e(({row:n})=>[(s(!0),f(h,null,b([S.value[n.name]||{online:[],offline:[]}],o=>(s(),f(h,null,[t(m(o.online.length)+" / "+m(o.online.length+o.offline.length),1)],64))),256))]),egress:e(({row:n})=>[(s(!0),f(h,null,b([L.value[n.name]||{online:[],offline:[]}],o=>(s(),f(h,null,[t(m(o.online.length)+" / "+m(o.online.length+o.offline.length),1)],64))),256))]),state:e(({row:n})=>[a(Y,{status:n.state},null,8,["status"])]),warnings:e(({row:n})=>[n.warnings.length>0?(s(),g(k,{key:0,name:"warning","data-testid":"warning"},{default:e(()=>[C("ul",null,[(s(!0),f(h,null,b(n.warnings,o=>(s(),f("li",{key:o.kind,"data-testid":`warning-${o.kind}`},m(p(`zone-cps.list.${o.kind}`)),9,se))),128))])]),_:2},1024)):(s(),f(h,{key:1},[t(m(p("common.collection.none")),1)],64))]),actions:e(({row:n})=>[a(x,null,{default:e(()=>[a(M,null,{default:e(({expanded:o,toggle:V})=>[a(r,{to:{name:"zone-cp-detail-view",params:{zone:n.name}}},{default:e(()=>[t(m(p("common.collection.actions.view")),1)]),_:2},1032,["to"]),t(),D("create zones")?(s(),g(r,{key:0,appearance:"danger",onClick:V},{default:e(()=>[t(m(p("common.collection.actions.delete")),1)]),_:2},1032,["onClick"])):v("",!0),t(),a(z,{to:{name:"modal-layer"}},{default:e(()=>[o?(s(),g(E,{key:0,src:`/zone-cps/${n.name}/delete`,onChange:()=>{V(),K()}},{default:e(({submit:F,error:W})=>[a($,{action:p("common.delete_modal.proceed_button"),expected:n.name,"data-testid":"delete-zone-modal",onCancel:V,onSubmit:()=>F({})},{title:e(()=>[t(m(p("common.delete_modal.title",{type:"Zone"})),1)]),default:e(()=>[t(),C("div",{innerHTML:p("common.delete_modal.text",{type:"Zone",name:n.name})},null,8,ae),t(),a(B,{class:"mt-4",errors:[W],loader:!1},null,8,["errors"])]),_:2},1032,["action","expected","onCancel","onSubmit"])]),_:2},1032,["src","onChange"])):v("",!0)]),_:2},1024)]),_:2},1024)]),_:2},1024)]),_:2},1032,["headers","items","is-selected-row","onResize"])]),_:2},1032,["items","page","page-size","total","onChange"])],64))]),_:2},1024),t(),c.params.zone?(s(),g(H,{key:0},{default:e(n=>[a(oe,{onClose:o=>c.replace({name:"zone-cp-list-view",query:{page:c.params.page,size:c.params.size}})},{default:e(()=>[(s(),g(ee(n.Component),{name:c.params.zone,"zone-overview":l==null?void 0:l.items.find(o=>o.name===c.params.zone)},null,8,["name","zone-overview"]))]),_:2},1032,["onClose"])]),_:2},1024)):v("",!0)]),_:2},1032,["src"])]),_:2},1032,["docs"])]),_:1})}}}),pe=ne(le,[["__scopeId","data-v-f3b09832"]]);export{pe as default};