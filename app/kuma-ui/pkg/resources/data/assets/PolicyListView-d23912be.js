import{d as $,L as x,e as L,r as w,o,j as g,h as c,w as a,F as R,G as I,x as N,i as e,l as s,D as n,m as r,a5 as T,g as p,aj as P,k as v,az as B,E,a6 as S,a7 as A,a1 as O,H as V,a8 as K,K as U,a9 as j,q as F,A as G,C as q,p as z,s as H,au as J,_ as X}from"./index-d55538be.js";import{P as Z}from"./PolicyTypeTag-ea30e1af.js";const M={class:"policy-list-content"},Q={class:"policy-count"},W={class:"policy-list"},Y={class:"stack"},D={class:"description"},ee={class:"description-content"},te={class:"description-actions"},ae={class:"visually-hidden"},se={key:0},oe=$({__name:"PolicyList",props:{pageNumber:{},pageSize:{},policyTypes:{},currentPolicyType:{},policyCollection:{},policyError:{},meshInsight:{}},emits:["change"],setup(b,{emit:u}){const t=b,{t:l}=x(),f=L();return(d,y)=>{const h=w("RouterLink");return o(),g("div",M,[c(e(T),{class:"policy-type-list","data-testid":"policy-type-list"},{body:a(()=>[(o(!0),g(R,null,I(t.policyTypes,(m,_)=>{var i,k,C;return o(),g("div",{key:_,class:N(["policy-type-link-wrapper",{"policy-type-link-wrapper--is-active":m.path===t.currentPolicyType.path}])},[c(h,{class:"policy-type-link",to:{name:"policies-list-view",params:{mesh:e(f).params.mesh,policyPath:m.path}},"data-testid":`policy-type-link-${m.name}`},{default:a(()=>[s(n(m.name),1)]),_:2},1032,["to","data-testid"]),s(),r("div",Q,n(((C=(k=(i=t.meshInsight)==null?void 0:i.policies)==null?void 0:k[m.name])==null?void 0:C.total)??0),1)],2)}),128))]),_:1}),s(),r("div",W,[r("div",Y,[c(e(T),null,{body:a(()=>[r("div",D,[r("div",ee,[r("h3",null,[c(Z,{"policy-type":t.currentPolicyType.name},{default:a(()=>[s(n(e(l)("policies.collection.title",{name:t.currentPolicyType.name})),1)]),_:1},8,["policy-type"])]),s(),r("p",null,n(e(l)("policies.collection.description")),1)]),s(),r("div",te,[t.currentPolicyType.isExperimental?(o(),p(e(P),{key:0,appearance:"warning"},{default:a(()=>[s(n(e(l)("policies.collection.beta")),1)]),_:1})):v("",!0),s(),t.currentPolicyType.isInbound?(o(),p(e(P),{key:1,appearance:"neutral"},{default:a(()=>[s(n(e(l)("policies.collection.inbound")),1)]),_:1})):v("",!0),s(),t.currentPolicyType.isOutbound?(o(),p(e(P),{key:2,appearance:"neutral"},{default:a(()=>[s(n(e(l)("policies.collection.outbound")),1)]),_:1})):v("",!0),s(),c(B,{href:e(l)("policies.href.docs",{name:t.currentPolicyType.name}),"data-testid":"policy-documentation-link"},{default:a(()=>[r("span",ae,n(e(l)("common.documentation")),1)]),_:1},8,["href"])])])]),_:1}),s(),c(e(T),null,{body:a(()=>{var m,_;return[t.policyError!==void 0?(o(),p(E,{key:0,error:t.policyError},null,8,["error"])):(o(),p(S,{key:1,class:"policy-collection","data-testid":"policy-collection","empty-state-message":e(l)("common.emptyState.message",{type:`${t.currentPolicyType.name} policies`}),"empty-state-cta-to":e(l)("policies.href.docs",{name:t.currentPolicyType.name}),"empty-state-cta-text":e(l)("common.documentation"),headers:[{label:"Name",key:"name"},...t.currentPolicyType.isTargetRefBased?[{label:"Target ref",key:"targetRef"}]:[],{label:"Actions",key:"actions",hideLabel:!0}],"page-number":t.pageNumber,"page-size":t.pageSize,total:(m=t.policyCollection)==null?void 0:m.total,items:(_=t.policyCollection)==null?void 0:_.items,error:t.policyError,onChange:y[0]||(y[0]=i=>u("change",i))},{name:a(({rowValue:i})=>[c(h,{to:{name:"policy-detail-view",params:{mesh:e(f).params.mesh,policyPath:t.currentPolicyType.path,policy:i}}},{default:a(()=>[s(n(i),1)]),_:2},1032,["to"])]),targetRef:a(({row:i})=>[t.currentPolicyType.isTargetRefBased?(o(),p(e(P),{key:0,appearance:"neutral"},{default:a(()=>[s(n(i.spec.targetRef.kind),1),i.spec.targetRef.name?(o(),g("span",se,[s(":"),r("b",null,n(i.spec.targetRef.name),1)])):v("",!0)]),_:2},1024)):(o(),g(R,{key:1},[s(n(e(l)("common.detail.none")),1)],64))]),actions:a(({row:i})=>[c(e(A),{class:"actions-dropdown","kpop-attributes":{placement:"bottomEnd",popoverClasses:"mt-5 more-actions-popover"},width:"150"},{default:a(()=>[c(e(O),{class:"non-visual-button",appearance:"secondary",size:"small"},{icon:a(()=>[c(e(V),{color:e(K),icon:"more",size:e(U)},null,8,["color","size"])]),_:1})]),items:a(()=>[c(e(j),{item:{to:{name:"policy-detail-view",params:{mesh:e(f).params.mesh,policyPath:t.currentPolicyType.path,policy:i.name}},label:e(l)("common.collection.actions.view")}},null,8,["item"])]),_:2},1024)]),_:1},8,["empty-state-message","empty-state-cta-to","empty-state-cta-text","headers","page-number","page-size","total","items","error"]))]}),_:1})])])])}}});const ie=F(oe,[["__scopeId","data-v-0706742e"]]),ne=$({__name:"PolicyListView",props:{page:{},size:{}},setup(b){const u=b,{t}=x();return(l,f)=>(o(),p(X,{name:"policies-list-view"},{default:a(({route:d})=>[c(G,null,{title:a(()=>[r("h2",null,[c(q,{title:e(t)("policies.routes.items.title"),render:!0},null,8,["title"])])]),default:a(()=>[s(),c(z,{src:"/*/policy-types"},{default:a(({data:y,error:h})=>[h?(o(),p(E,{key:0,error:h},null,8,["error"])):y===void 0?(o(),p(H,{key:1})):y.policies.length===0?(o(),p(J,{key:2})):(o(),p(z,{key:3,src:`/meshes/${d.params.mesh}/policy-path/${d.params.policyPath}?page=${u.page}&size=${u.size}`},{default:a(({data:m,error:_})=>[c(z,{src:`/mesh-insights/${d.params.mesh}`},{default:a(({data:i})=>[(o(),p(ie,{key:d.params.policyPath,"page-number":u.page,"page-size":u.size,"current-policy-type":y.policies.find(k=>k.path===d.params.policyPath)??y.policies[0],"policy-types":y.policies,"mesh-insight":i,"policy-collection":m,"policy-error":_,onChange:d.update},null,8,["page-number","page-size","current-policy-type","policy-types","mesh-insight","policy-collection","policy-error","onChange"]))]),_:2},1032,["src"])]),_:2},1032,["src"]))]),_:2},1024)]),_:2},1024)]),_:1}))}});export{ne as default};
