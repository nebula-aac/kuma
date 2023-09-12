import{d as S,t as N,o as a,g as i,w as e,U as R,l as n,i as s,ag as D,k as T,aH as q,R as F,r as K,h as l,A as U,X as W,m as E,C as P,p as G,a5 as H,E as J,a6 as X,D as r,Y,j as Z,F as A,af as j,a2 as Q,K as I,a7 as ee,a1 as L,H as te,a8 as oe,a9 as M,_ as ne,aI as ae,q as se}from"./index-d55538be.js";import{_ as ie}from"./MultizoneInfo.vue_vue_type_script_setup_true_lang-14994ae2.js";const le=S({__name:"DeleteResourceModal",props:{actionButtonText:{type:String,required:!1,default:"Yes, delete"},confirmationText:{type:String,required:!1,default:""},deleteFunction:{type:Function,required:!0},isVisible:{type:Boolean,required:!0},modalId:{type:String,required:!0},title:{type:String,required:!1,default:"Delete"}},emits:["cancel","delete"],setup(w,{emit:p}){const c=w,d=N(!1);async function g(){d.value=!1;try{await c.deleteFunction(),p("delete")}catch{d.value=!0}}return(u,v)=>(a(),i(s(q),{"action-button-text":c.actionButtonText,"confirmation-text":c.confirmationText,"is-visible":c.isVisible,"modal-id":c.modalId,title:c.title,type:"danger","data-testid":"delete-resource-modal",onCanceled:v[0]||(v[0]=O=>p("cancel")),onProceed:g},{"body-content":e(()=>[R(u.$slots,"body-content"),n(),d.value?(a(),i(s(D),{key:0,class:"mt-4",appearance:"danger","is-dismissible":""},{alertMessage:e(()=>[R(u.$slots,"error")]),_:3})):T("",!0)]),_:3},8,["action-button-text","confirmation-text","is-visible","modal-id","title"]))}}),re=S({__name:"ZoneListView",props:{page:{type:Number,required:!0},size:{type:Number,required:!0}},setup(w){const p=w,c=F(),d=N(!1),g=N(!1),u=N("");function v(m){return m.map(z=>{var C;const{name:k}=z,h={name:"zone-cp-detail-view",params:{zone:k}};let t="",f="kubernetes",_=!0;(((C=z.zoneInsight)==null?void 0:C.subscriptions)??[]).forEach(o=>{if(o.version&&o.version.kumaCp){t=o.version.kumaCp.version;const{kumaCpGlobalCompatible:x=!0}=o.version.kumaCp;_=x}o.config&&(f=JSON.parse(o.config).environment)});const b=ae(z);return{detailViewRoute:h,name:k,status:b,zoneCpVersion:t,type:f,warnings:!_}})}async function O(){await c.deleteZone({name:u.value})}function V(){d.value=!d.value}function B(m){V(),u.value=m}function $(m){g.value=(m==null?void 0:m.items.length)>0}return(m,z)=>{const k=K("RouterLink");return a(),i(ne,{name:"zone-cp-list-view"},{default:e(({route:h,t,can:f,env:_})=>[l(U,null,W({title:e(()=>[E("h1",null,[l(P,{title:t("zone-cps.routes.items.title"),render:!0},null,8,["title"])])]),default:e(()=>[n(),n(),f("use zones")?(a(),i(G,{key:1,src:`/zone-cps?size=${p.size}&page=${p.page}`,onChange:$},{default:e(({data:y,error:b,refresh:C})=>[l(s(H),null,{body:e(()=>[b!==void 0?(a(),i(J,{key:0,error:b},null,8,["error"])):(a(),i(X,{key:1,class:"zone-cp-collection","data-testid":"zone-cp-collection",headers:[{label:"Name",key:"name"},{label:"Zone CP Version",key:"zoneCpVersion"},{label:"Type",key:"type"},{label:"Status",key:"status"},{label:"Warnings",key:"warnings",hideLabel:!0},{label:"Actions",key:"actions",hideLabel:!0}],"page-number":p.page,"page-size":p.size,total:y==null?void 0:y.total,items:y?v(y.items):void 0,error:b,"empty-state-title":_("KUMA_ZONE_CREATION_FLOW")==="enabled"?t("zone-cps.empty_state.title"):void 0,"empty-state-message":_("KUMA_ZONE_CREATION_FLOW")==="enabled"?t("zone-cps.empty_state.message"):void 0,"empty-state-cta-to":_("KUMA_ZONE_CREATION_FLOW")==="enabled"?{name:"zone-create-view"}:void 0,"empty-state-cta-text":_("KUMA_ZONE_CREATION_FLOW")==="enabled"?t("zones.index.create"):void 0,onChange:h.update},{name:e(({row:o,rowValue:x})=>[l(k,{to:o.detailViewRoute,"data-testid":"detail-view-link"},{default:e(()=>[n(r(x),1)]),_:2},1032,["to"])]),zoneCpVersion:e(({rowValue:o})=>[n(r(o||t("common.collection.none")),1)]),type:e(({rowValue:o})=>[n(r(o||t("common.collection.none")),1)]),status:e(({rowValue:o})=>[o?(a(),i(Y,{key:0,status:o},null,8,["status"])):(a(),Z(A,{key:1},[n(r(t("common.collection.none")),1)],64))]),warnings:e(({rowValue:o})=>[o?(a(),i(s(j),{key:0,label:t("zone-cps.list.version_mismatch")},{default:e(()=>[l(Q,{class:"mr-1",size:s(I),"hide-title":""},null,8,["size"])]),_:2},1032,["label"])):(a(),Z(A,{key:1},[n(r(t("common.collection.none")),1)],64))]),actions:e(({row:o})=>[l(s(ee),{class:"actions-dropdown","data-testid":"actions-dropdown","kpop-attributes":{placement:"bottomEnd",popoverClasses:"mt-5 more-actions-popover"},width:"150"},{default:e(()=>[l(s(L),{class:"non-visual-button",appearance:"secondary",size:"small"},{icon:e(()=>[l(s(te),{color:s(oe),icon:"more",size:s(I)},null,8,["color","size"])]),_:1})]),items:e(()=>[l(s(M),{item:{to:o.detailViewRoute,label:t("common.collection.actions.view")}},null,8,["item"]),n(),f("create zones")?(a(),i(s(M),{key:0,"has-divider":"","is-dangerous":"","data-testid":"dropdown-delete-item",onClick:x=>B(o.name)},{default:e(()=>[n(r(t("common.collection.actions.delete")),1)]),_:2},1032,["onClick"])):T("",!0)]),_:2},1024)]),_:2},1032,["page-number","page-size","total","items","error","empty-state-title","empty-state-message","empty-state-cta-to","empty-state-cta-text","onChange"]))]),_:2},1024),n(),d.value?(a(),i(le,{key:0,"confirmation-text":u.value,"delete-function":O,"is-visible":d.value,"modal-id":"delete-zone-modal","action-button-text":t("zones.delete.confirmModal.proceedText"),title:t("zones.delete.confirmModal.title"),onCancel:V,onDelete:()=>{V(),C()}},{"body-content":e(()=>[E("p",null,r(t("zones.delete.confirmModal.text1",{zoneName:u.value})),1),n(),E("p",null,r(t("zones.delete.confirmModal.text2")),1)]),error:e(()=>[n(r(t("zones.delete.confirmModal.errorText")),1)]),_:2},1032,["confirmation-text","is-visible","action-button-text","title","onDelete"])):T("",!0)]),_:2},1032,["src"])):(a(),i(ie,{key:0}))]),_:2},[f("create zones")&&g.value?{name:"actions",fn:e(()=>[l(s(L),{appearance:"primary",icon:"plus",to:{name:"zone-create-view"},"data-testid":"create-zone-link"},{default:e(()=>[n(r(t("zones.index.create")),1)]),_:2},1024)]),key:"0"}:void 0]),1024)]),_:1})}}});const ue=se(re,[["__scopeId","data-v-d0cdd1d2"]]);export{ue as default};
