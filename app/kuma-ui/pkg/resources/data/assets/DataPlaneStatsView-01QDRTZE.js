import{K as y}from"./index-FZCiQto1.js";import{d as x,a as t,o as s,b as r,w as a,e as o,m as R,f as c,a0 as E,q as d}from"./index-H9kuPi5I.js";import{C as V}from"./CodeBlock-8ft3dwz3.js";import{E as B}from"./ErrorBlock-dtRm8bS3.js";import{_ as S}from"./LoadingBlock.vue_vue_type_script_setup_true_lang-0vTtwQOF.js";import"./TextWithCopyButton-WiPvXg9-.js";import"./CopyButton-6xMoQ2pP.js";import"./WarningIcon.vue_vue_type_script_setup_true_lang-_XEV9lqg.js";const P=x({__name:"DataPlaneStatsView",props:{data:{}},setup(m){const p=m;return(v,K)=>{const _=t("RouteTitle"),u=t("KButton"),f=t("DataSource"),g=t("KCard"),h=t("AppView"),C=t("RouteView");return s(),r(C,{name:"data-plane-stats-view",params:{mesh:"",dataPlane:"",codeSearch:"",codeFilter:!1,codeRegExp:!1}},{default:a(({route:e,t:w})=>[o(h,null,{title:a(()=>[R("h2",null,[o(_,{title:w("data-planes.routes.item.navigation.data-plane-stats-view")},null,8,["title"])])]),default:a(()=>[c(),o(g,null,{default:a(()=>[o(f,{src:`/meshes/${e.params.mesh}/dataplanes/${e.params.dataPlane}/stats/${p.data.dataplaneType==="builtin"&&p.data.dataplane.networking.gateway?p.data.dataplane.networking.gateway.tags["kuma.io/service"]:"localhost_"}`},{default:a(({data:l,error:i,refresh:k})=>[i?(s(),r(B,{key:0,error:i},null,8,["error"])):l===void 0?(s(),r(S,{key:1})):(s(),r(V,{key:2,language:"json",code:l.raw,"is-searchable":"",query:e.params.codeSearch,"is-filter-mode":e.params.codeFilter,"is-reg-exp-mode":e.params.codeRegExp,onQueryChange:n=>e.update({codeSearch:n}),onFilterModeChange:n=>e.update({codeFilter:n}),onRegExpModeChange:n=>e.update({codeRegExp:n})},{"primary-actions":a(()=>[o(u,{appearance:"primary",onClick:k},{default:a(()=>[o(d(E),{size:d(y)},null,8,["size"]),c(`
                Refresh
              `)]),_:2},1032,["onClick"])]),_:2},1032,["code","query","is-filter-mode","is-reg-exp-mode","onQueryChange","onFilterModeChange","onRegExpModeChange"]))]),_:2},1032,["src"])]),_:2},1024)]),_:2},1024)]),_:1})}}});export{P as default};