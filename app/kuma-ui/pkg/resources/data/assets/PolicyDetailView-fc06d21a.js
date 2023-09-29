import{d as $,L as w,t as q,r as B,o as e,j as d,h as l,i as n,aw as L,l as h,w as r,g as i,E as f,s as k,ah as x,F as g,G as b,D as C,p as v,R as S,m as P,a2 as N,A,a8 as E,C as R,_ as j}from"./index-06cdf67b.js";import{_ as F}from"./ResourceCodeBlock.vue_vue_type_style_index_0_lang-f6373913.js";import"./CodeBlock.vue_vue_type_style_index_0_lang-d1991aa2.js";import"./toYaml-4e00099e.js";const I={key:3,"data-testid":"affected-data-plane-proxies"},G=$({__name:"PolicyConnections",props:{mesh:{type:String,required:!0},policyPath:{type:String,required:!0},policyName:{type:String,required:!0}},setup(_){const a=_,{t:y}=w(),c=q("");return(t,o)=>{const m=B("RouterLink");return e(),d("div",null,[l(n(L),{id:"dataplane-search",modelValue:c.value,"onUpdate:modelValue":o[0]||(o[0]=s=>c.value=s),type:"text",placeholder:n(y)("policies.detail.dataplane_input_placeholder"),required:"","data-testid":"dataplane-search-input"},null,8,["modelValue","placeholder"]),h(),l(v,{src:`/meshes/${a.mesh}/policy-path/${a.policyPath}/policy/${a.policyName}/dataplanes`},{default:r(({data:s,error:u})=>[u?(e(),i(f,{key:0,error:u},null,8,["error"])):s===void 0?(e(),i(k,{key:1})):s.items.length===0?(e(),i(x,{key:2})):(e(),d("ul",I,[(e(!0),d(g,null,b(s.items.filter(p=>p.dataplane.name.toLowerCase().includes(c.value.toLowerCase())),(p,V)=>(e(),d("li",{key:V,"data-testid":"dataplane-name"},[l(m,{to:{name:"data-plane-detail-view",params:{mesh:p.dataplane.mesh,dataPlane:p.dataplane.name}}},{default:r(()=>[h(C(p.dataplane.name),1)]),_:2},1032,["to"])]))),128))]))]),_:1},8,["src"])])}}}),J={class:"stack"},K=$({__name:"PolicyDetails",props:{policy:{type:Object,required:!0},path:{type:String,required:!0}},setup(_){const a=_,{t:y}=w(),c=S();return(t,o)=>(e(),d("div",J,[l(n(N),null,{body:r(()=>[P("h2",null,C(n(y)("policies.detail.affected_dpps")),1),h(),l(G,{class:"mt-4",mesh:a.policy.mesh,"policy-name":a.policy.name,"policy-path":a.path},null,8,["mesh","policy-name","policy-path"])]),_:1}),h(),l(F,{id:"code-block-policy",resource:a.policy,"resource-fetcher":m=>n(c).getSinglePolicyEntity({name:a.policy.name,mesh:a.policy.mesh,path:a.path},m),"is-searchable":""},null,8,["resource","resource-fetcher"])]))}}),H=$({__name:"PolicyDetailView",setup(_){const{t:a}=w();return(y,c)=>(e(),i(j,{name:"policy-detail-view","data-testid":"policy-detail-view"},{default:r(({route:t})=>[l(v,{src:"/*/policy-types"},{default:r(({data:o,error:m})=>[m?(e(),i(f,{key:0,error:m},null,8,["error"])):o===void 0?(e(),i(k,{key:1})):o.policies.length===0?(e(),i(x,{key:2})):(e(!0),d(g,{key:3},b([o.policies.find(s=>s.path===t.params.policyPath)??o.policies[0]],s=>(e(),i(A,{key:s.name,breadcrumbs:[{to:{name:"mesh-detail-view",params:{mesh:t.params.mesh}},text:t.params.mesh},{to:{name:"policies-list-view",params:{mesh:t.params.mesh,policyPath:t.params.policyPath}},text:n(a)("policies.routes.item.breadcrumbs")}]},{title:r(()=>[P("h1",null,[l(E,{text:t.params.policy},{default:r(()=>[l(R,{title:n(a)("policies.routes.item.title",{name:t.params.policy}),render:!0},null,8,["title"])]),_:2},1032,["text"])])]),default:r(()=>[h(),l(v,{src:`/meshes/${t.params.mesh}/policy-path/${s.path}/policy/${t.params.policy}`},{default:r(({data:u,error:p})=>[p?(e(),i(f,{key:0,error:p},null,8,["error"])):u===void 0?(e(),i(k,{key:1})):(e(),i(K,{key:2,policy:u,path:s.path,"data-testid":"detail-view-details"},null,8,["policy","path"]))]),_:2},1032,["src"])]),_:2},1032,["breadcrumbs"]))),128))]),_:2},1024)]),_:1}))}});export{H as default};