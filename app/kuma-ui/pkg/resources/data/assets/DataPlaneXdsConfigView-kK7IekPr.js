import{d as x,v as R,r as n,o as V,m as w,w as t,b as o,e as l,l as v,a9 as k}from"./index-D32LqI0w.js";import{C as y}from"./CodeBlock-DRh_0yHF.js";const A=x({__name:"DataPlaneXdsConfigView",setup(E){const s=R(!1);return(b,d)=>{const r=n("RouteTitle"),c=n("KCheckbox"),i=n("XAction"),p=n("DataLoader"),m=n("KCard"),u=n("AppView"),_=n("RouteView");return V(),w(_,{name:"data-plane-xds-config-view",params:{mesh:"",dataPlane:"",codeSearch:"",codeFilter:!1,codeRegExp:!1}},{default:t(({route:e,t:f,uri:g})=>[o(r,{render:!1,title:f("data-planes.routes.item.navigation.data-plane-xds-config-view")},null,8,["title"]),l(),o(u,null,{default:t(()=>[o(m,null,{default:t(()=>[o(p,{src:g(v(k),"/meshes/:mesh/dataplanes/:name/xds/:endpoints",{mesh:e.params.mesh,name:e.params.dataPlane,endpoints:String(s.value)})},{default:t(({data:h,refresh:C})=>[o(y,{language:"json",code:JSON.stringify(h,null,2),"is-searchable":"",query:e.params.codeSearch,"is-filter-mode":e.params.codeFilter,"is-reg-exp-mode":e.params.codeRegExp,onQueryChange:a=>e.update({codeSearch:a}),onFilterModeChange:a=>e.update({codeFilter:a}),onRegExpModeChange:a=>e.update({codeRegExp:a})},{"primary-actions":t(()=>[o(c,{modelValue:s.value,"onUpdate:modelValue":d[0]||(d[0]=a=>s.value=a),label:"Include Endpoints"},null,8,["modelValue"]),l(),o(i,{action:"refresh",appearance:"primary",onClick:C},{default:t(()=>[l(`
                Refresh
              `)]),_:2},1032,["onClick"])]),_:2},1032,["code","query","is-filter-mode","is-reg-exp-mode","onQueryChange","onFilterModeChange","onRegExpModeChange"])]),_:2},1032,["src"])]),_:2},1024)]),_:2},1024)]),_:1})}}});export{A as default};