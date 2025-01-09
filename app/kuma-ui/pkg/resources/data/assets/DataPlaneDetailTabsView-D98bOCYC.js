import{d as z,v as G,r as o,o as d,p as b,w as a,b as t,m as S,Y as A,R as g,e as s,l as f,Z as H,c as v,J as V,K as y,t as h,q as x,F as Q,_ as W}from"./index-BIN9nSPF.js";const ee=["onSubmit"],ae=["disabled"],te={key:0},oe={key:0},se=z({__name:"DataPlaneDetailTabsView",props:{mesh:{}},setup(N){const U=N,n=G({eds:!1,xds:!1,clusters:!1,stats:!1,dataplane:!1,policies:!1}),E=D=>async e=>{const i=document.createElement("a");i.download=e.name,i.href=e.url,setTimeout(()=>{window.URL.revokeObjectURL(i.href)},6e4),await Promise.resolve(),i.click(),await Promise.resolve(),D()};return(D,e)=>{const i=o("RouteTitle"),I=o("XCopyButton"),X=o("XAction"),T=o("XI18n"),k=o("XCheckbox"),M=o("XAlert"),R=o("DataLoader"),O=o("XLayout"),$=o("XModal"),B=o("XDisclosure"),j=o("XTeleportTemplate"),F=o("XTabs"),J=o("RouterView"),q=o("AppView"),K=o("DataSource"),Y=o("RouteView");return d(),b(Y,{name:"data-plane-detail-tabs-view",params:{mesh:"",dataPlane:""}},{default:a(({route:l,t:m,uri:L})=>[t(K,{src:L(S(A),"/meshes/:mesh/dataplane-overviews/:name",{mesh:l.params.mesh,name:l.params.dataPlane})},{default:a(({data:c,error:Z})=>[t(q,{breadcrumbs:[{to:{name:"mesh-detail-view",params:{mesh:l.params.mesh}},text:l.params.mesh},{to:{name:"data-plane-list-view",params:{mesh:l.params.mesh}},text:m("data-planes.routes.item.breadcrumbs")}]},g({actions:a(()=>[t(B,null,{default:a(({expanded:w,toggle:r})=>[t(X,{appearance:"primary",onClick:r},{default:a(()=>e[1]||(e[1]=[s(`
              Download Bundle
            `)])),_:2},1032,["onClick"]),e[6]||(e[6]=s()),w?(d(),b(j,{key:0,to:{name:"modal-layer"}},{default:a(()=>[t(B,null,{default:a(({expanded:C,toggle:P})=>[f("form",{onSubmit:H(P,["prevent"])},[t($,{title:m("data-planes.routes.item.download.title"),onCancel:r},{"footer-actions":a(()=>[t(O,{type:"separated"},{default:a(()=>[(d(!0),v(V,null,y([E(r)],p=>(d(),b(R,{key:typeof p,variant:"spinner",src:C?L(S(A),"/meshes/:mesh/dataplanes/:name/as/tarball/:spec",{mesh:l.params.mesh,name:l.params.dataPlane,spec:JSON.stringify(n.value)},{cacheControl:"no-cache"}):"",onChange:p,onError:P},{error:a(()=>[t(M,{appearance:"warning","show-icon":""},{default:a(()=>[t(T,{t:"data-planes.routes.item.download.error"})]),_:1})]),_:2},1032,["src","onChange","onError"]))),128)),e[4]||(e[4]=s()),t(X,{appearance:"primary",type:"submit",disabled:C||Object.values(n.value).every(p=>!p)},{default:a(()=>[s(h(m("data-planes.routes.item.download.action")),1)]),_:2},1032,["disabled"])]),_:2},1024)]),default:a(()=>[f("fieldset",{disabled:C},[t(T,{t:"data-planes.routes.item.download.description"}),e[3]||(e[3]=s()),f("ul",null,[(d(!0),v(V,null,y(n.value,(p,u)=>(d(),v(V,{key:typeof p},[u!=="eds"?(d(),v("li",te,[t(k,{modelValue:n.value[u],"onUpdate:modelValue":_=>n.value[u]=_,onChange:_=>{u==="xds"&&!_&&(n.value.eds=!1)}},{default:a(()=>[s(h(m(`data-planes.routes.item.download.options.${u}`)),1)]),_:2},1032,["modelValue","onUpdate:modelValue","onChange"]),e[2]||(e[2]=s()),u==="xds"?(d(),v("ul",oe,[f("li",null,[t(k,{modelValue:n.value.eds,"onUpdate:modelValue":e[0]||(e[0]=_=>n.value.eds=_),disabled:!n.value.xds},{default:a(()=>[s(h(m("data-planes.routes.item.download.options.eds")),1)]),_:2},1032,["modelValue","disabled"])])])):x("",!0)])):x("",!0)],64))),128))])],8,ae),e[5]||(e[5]=s())]),_:2},1032,["title","onCancel"])],40,ee)]),_:2},1024)]),_:2},1024)):x("",!0)]),_:2},1024)]),default:a(()=>[e[8]||(e[8]=s()),e[9]||(e[9]=s()),t(R,{data:[c],errors:[Z]},{default:a(()=>{var w;return[t(F,{selected:(w=l.child())==null?void 0:w.name},g({_:2},[y(l.children,({name:r})=>({name:`${r}-tab`,fn:a(()=>[t(X,{to:{name:r}},{default:a(()=>[s(h(m(`data-planes.routes.item.navigation.${r}`)),1)]),_:2},1032,["to"])])}))]),1032,["selected"]),e[7]||(e[7]=s()),t(J,null,{default:a(r=>[(d(),b(Q(r.Component),{data:c,mesh:U.mesh},null,8,["data","mesh"]))]),_:2},1024)]}),_:2},1032,["data","errors"])]),_:2},[c?{name:"title",fn:a(()=>[f("h1",null,[t(I,{text:c.name},{default:a(()=>[t(i,{title:m("data-planes.routes.item.title",{name:c.name})},null,8,["title"])]),_:2},1032,["text"])])]),key:"0"}:void 0]),1032,["breadcrumbs"])]),_:2},1032,["src"])]),_:1})}}}),le=W(se,[["__scopeId","data-v-e15358e1"]]);export{le as default};
