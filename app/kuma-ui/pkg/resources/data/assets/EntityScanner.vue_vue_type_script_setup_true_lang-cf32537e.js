import{o as u,q as k}from"./kongponents.es-75dcad6b.js";import{d as g,r as o,k as b,Q as w,o as s,j as B,i as m,g as C,w as y,b as d,e as l,h as E,z as n}from"./index-139fff7d.js";const $={class:"scanner"},q={class:"scanner-content"},N={class:"mb-2"},S=g({__name:"EntityScanner",props:{interval:{type:Number,required:!1,default:1e3},retries:{type:Number,required:!1,default:3600},hasError:{type:Boolean,default:!1},loaderFunction:{type:Function,required:!0},canComplete:{type:Boolean,default:!1}},emits:["hide-siblings"],setup(a,{emit:p}){const r=a,f=o(0),t=o(!1),v=o(!1),i=o(null);b(function(){h()}),w(function(){c()});function h(){t.value=!0,v.value=!1,c(),i.value=window.setInterval(async()=>{f.value++,await r.loaderFunction(),(f.value===r.retries||r.canComplete===!0)&&(c(),t.value=!1,v.value=!0,p("hide-siblings",!0))},r.interval)}function c(){i.value!==null&&window.clearInterval(i.value)}return(e,z)=>(s(),B("div",$,[m("div",q,[C(l(k),{"cta-is-hidden":""},{title:y(()=>[m("div",N,[t.value?(s(),d(l(u),{key:0,icon:"spinner",color:"var(--grey-300)",size:"42"})):a.hasError?(s(),d(l(u),{key:1,icon:"errorFilled",color:"var(--red-500)",size:"42"})):(s(),d(l(u),{key:2,icon:"circleCheck",color:"var(--green-500)",size:"42"}))]),E(),t.value?n(e.$slots,"loading-title",{key:0}):a.hasError?n(e.$slots,"error-title",{key:1}):n(e.$slots,"complete-title",{key:2})]),message:y(()=>[t.value?n(e.$slots,"loading-content",{key:0}):a.hasError?n(e.$slots,"error-content",{key:1}):n(e.$slots,"complete-content",{key:2})]),_:3})])]))}});export{S as _};
