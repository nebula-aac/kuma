import{d as B,r,o as n,q as d,w as t,b as s,m as u,e as i,t as _,T as D,N as h,c as f,U as y,M as C,s as F}from"./index-iylzCeaz.js";import{_ as N}from"./ResourceCodeBlock.vue_vue_type_script_setup_true_lang-eMuwTm1M.js";const A={key:0,class:"stack-with-borders","data-testid":"structured-view"},L={key:1,class:"mt-4"},K=B({__name:"MeshMultiZoneServiceSummaryView",props:{items:{}},setup(S){const x=S;return(P,a)=>{const w=r("RouteTitle"),k=r("XAction"),b=r("XSelect"),m=r("XLayout"),R=r("KumaPort"),V=r("XBadge"),E=r("DataSource"),X=r("AppView"),M=r("DataCollection"),$=r("RouteView");return n(),d($,{name:"mesh-multi-zone-service-summary-view",params:{mesh:"",service:"",codeSearch:"",codeFilter:!1,codeRegExp:!1,format:String}},{default:t(({route:o,t:c})=>[s(M,{items:x.items,predicate:l=>l.id===o.params.service},{item:t(({item:l})=>[s(X,null,{title:t(()=>[u("h2",null,[s(k,{to:{name:"mesh-multi-zone-service-detail-view",params:{mesh:o.params.mesh,service:o.params.service}}},{default:t(()=>[s(w,{title:c("services.routes.item.title",{name:l.name})},null,8,["title"])]),_:2},1032,["to"])])]),default:t(()=>[a[7]||(a[7]=i()),s(m,{type:"stack"},{default:t(()=>[u("header",null,[s(m,{type:"separated",size:"max"},{default:t(()=>[u("h3",null,_(c("services.routes.item.config")),1),a[0]||(a[0]=i()),u("div",null,[s(b,{label:c("services.routes.item.format"),selected:o.params.format,onChange:e=>{o.update({format:e})}},D({_:2},[h(["structured","yaml"],e=>({name:`${e}-option`,fn:t(()=>[i(_(c(`services.routes.item.formats.${e}`)),1)])}))]),1032,["label","selected","onChange"])])]),_:2},1024)]),a[6]||(a[6]=i()),o.params.format==="structured"?(n(),f("div",A,[s(y,{layout:"horizontal"},{title:t(()=>a[1]||(a[1]=[i(`
                    Ports
                  `)])),body:t(()=>[s(m,{type:"separated",truncate:""},{default:t(()=>[(n(!0),f(C,null,h(l.spec.ports,e=>(n(),d(R,{key:e.port,port:{...e,targetPort:void 0}},null,8,["port"]))),128))]),_:2},1024)]),_:2},1024),a[5]||(a[5]=i()),s(y,{layout:"horizontal"},{title:t(()=>a[3]||(a[3]=[i(`
                    Selector
                  `)])),body:t(()=>[s(m,{type:"separated",truncate:""},{default:t(()=>[(n(!0),f(C,null,h(l.spec.selector.meshService.matchLabels,(e,p)=>(n(),d(V,{key:`${p}:${e}`,appearance:"info"},{default:t(()=>[i(_(p)+":"+_(e),1)]),_:2},1024))),128))]),_:2},1024)]),_:2},1024)])):(n(),f("div",L,[s(N,{resource:l.config,"is-searchable":"",query:o.params.codeSearch,"is-filter-mode":o.params.codeFilter,"is-reg-exp-mode":o.params.codeRegExp,onQueryChange:e=>o.update({codeSearch:e}),onFilterModeChange:e=>o.update({codeFilter:e}),onRegExpModeChange:e=>o.update({codeRegExp:e})},{default:t(({copy:e,copying:p})=>[p?(n(),d(E,{key:0,src:`/meshes/${o.params.mesh}/mesh-multi-zone-service/${o.params.service}/as/kubernetes?no-store`,onChange:g=>{e(v=>v(g))},onError:g=>{e((v,z)=>z(g))}},null,8,["src","onChange","onError"])):F("",!0)]),_:2},1032,["resource","query","is-filter-mode","is-reg-exp-mode","onQueryChange","onFilterModeChange","onRegExpModeChange"])]))]),_:2},1024)]),_:2},1024)]),_:2},1032,["items","predicate"])]),_:1})}}});export{K as default};
