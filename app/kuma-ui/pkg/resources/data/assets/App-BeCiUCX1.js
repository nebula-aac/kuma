import{d as E,r as p,o as c,c as w,a as _,b as a,w as n,e,t as f,n as O,_ as M,h as V,f as X,g as z,i as D,u as T,j as U,k as B,l as L,m as o,p as i,q as $,s as b,v as x,x as K,y as G,z as S}from"./index-iylzCeaz.js";const P=""+new URL("product-logo-CDoXkXpC.png",import.meta.url).href,Y={class:"app-navigator"},q=E({__name:"AppNavigator",props:{active:{type:Boolean,default:!1},label:{default:""},to:{default:()=>({})}},setup(d){const s=d;return(u,m)=>{const l=p("XAction");return c(),w("li",Y,[_(u.$slots,"default",{},()=>[a(l,{class:O({"is-active":s.active}),to:s.to},{default:n(()=>[e(f(s.label),1)]),_:1},8,["class","to"])],!0)])}}}),k=M(q,[["__scopeId","data-v-a28d552b"]]),H=E({name:"github-button",props:{href:String,ariaLabel:String,title:String,dataIcon:String,dataColorScheme:String,dataSize:String,dataShowCount:String,dataText:String},render:function(){const d={ref:"_"};for(const s in this.$props)d[V(s)]=this.$props[s];return X("span",[z(this.$slots,"default")?X("a",d,this.$slots.default()):X("a",d)])},mounted:function(){this.paint()},beforeUpdate:function(){this.reset()},updated:function(){this.paint()},beforeUnmount:function(){this.reset()},methods:{paint:function(){if(this.$el.lastChild!==this.$refs._)return;const d=this.$el.appendChild(document.createElement("span")),s=this;D(()=>import("./buttons.esm-DK2fWHEW.js"),[],import.meta.url).then(function(u){s.$el.lastChild===d&&u.render(d.appendChild(s.$refs._),function(m){s.$el.lastChild===d&&d.parentNode.replaceChild(m,d)})})},reset:function(){this.$refs._!=null&&this.$el.replaceChild(this.$refs._,this.$el.lastChild)}}}),Z={class:"application-shell"},j={role:"banner"},F={class:"horizontal-list"},J={class:"upgrade-check-wrapper"},Q={class:"alert-content"},W={class:"horizontal-list"},tt={class:"app-status app-status--mobile"},et={class:"app-status app-status--desktop"},nt={class:"app-content-container"},ot={class:"app-sidebar"},at={"aria-label":"Main"},st={key:0},it={key:1,role:"separator",class:"navigation-separator"},rt={key:2},lt={class:"app-main-content"},dt={class:"app-notifications"},ut={"data-testid":"warning-GLOBAL_STORE_TYPE_MEMORY"},pt=E({__name:"ApplicationShell",setup(d){const s=T(),u=U(),m=B(),{t:l}=L();return(r,t)=>{const g=p("XTeleportSlot"),v=p("XAction"),A=p("XAlert"),y=p("DataSource"),h=p("XPop"),N=p("XIcon"),C=p("XActionGroup"),R=p("XI18n");return c(),w("div",Z,[a(g,{name:"modal-layer"}),t[24]||(t[24]=e()),o("header",j,[o("div",F,[_(r.$slots,"header",{},()=>[a(v,{to:{name:"home"}},{default:n(()=>[_(r.$slots,"home",{},void 0,!0)]),_:3}),t[3]||(t[3]=e()),a(i(H),{class:"gh-star",href:"https://github.com/kumahq/kuma","aria-label":"Star kumahq/kuma on GitHub"},{default:n(()=>t[0]||(t[0]=[e(`
            Star
          `)])),_:1}),t[4]||(t[4]=e()),o("div",J,[a(y,{src:"/control-plane/version/latest"},{default:n(({data:I})=>[I&&i(u)("KUMA_VERSION")!==I.version?(c(),$(A,{key:0,class:"upgrade-alert","data-testid":"upgrade-check",appearance:"info"},{default:n(()=>[o("div",Q,[o("p",null,f(i(l)("common.product.name"))+` update available
                  `,1),t[2]||(t[2]=e()),a(v,{appearance:"primary",href:i(l)("common.product.href.install")},{default:n(()=>t[1]||(t[1]=[e(`
                    Update
                  `)])),_:1},8,["href"])])]),_:1})):b("",!0)]),_:1})])],!0)]),t[18]||(t[18]=e()),o("div",W,[_(r.$slots,"content-info",{},()=>[o("div",tt,[a(h,{width:"280"},{content:n(()=>[o("p",null,[e(f(i(l)("common.product.name"))+" ",1),o("b",null,f(i(u)("KUMA_VERSION")),1),t[6]||(t[6]=e(" on ")),o("b",null,f(i(l)(`common.product.environment.${i(u)("KUMA_ENVIRONMENT")}`)),1),e(" ("+f(i(l)(`common.product.mode.${i(u)("KUMA_MODE")}`))+`)
                `,1)])]),default:n(()=>[a(v,{appearance:"tertiary"},{default:n(()=>t[5]||(t[5]=[e(`
                Info
              `)])),_:1}),t[7]||(t[7]=e())]),_:1})]),t[16]||(t[16]=e()),o("p",et,[e(f(i(l)("common.product.name"))+" ",1),o("b",null,f(i(u)("KUMA_VERSION")),1),t[8]||(t[8]=e(" on ")),o("b",null,f(i(l)(`common.product.environment.${i(u)("KUMA_ENVIRONMENT")}`)),1),e(" ("+f(i(l)(`common.product.mode.${i(u)("KUMA_MODE")}`))+`)
          `,1)]),t[17]||(t[17]=e()),a(C,null,{control:n(()=>[a(v,{appearance:"tertiary"},{default:n(()=>[a(N,{name:"help"},{default:n(()=>t[9]||(t[9]=[e(`
                  Help
                `)])),_:1})]),_:1})]),default:n(()=>[t[13]||(t[13]=e()),a(v,{href:i(l)("common.product.href.docs.index"),target:"_blank",rel:"noopener noreferrer"},{default:n(()=>t[10]||(t[10]=[e(`
              Documentation
            `)])),_:1},8,["href"]),t[14]||(t[14]=e()),a(v,{href:i(l)("common.product.href.feedback"),target:"_blank",rel:"noopener noreferrer"},{default:n(()=>t[11]||(t[11]=[e(`
              Feedback
            `)])),_:1},8,["href"]),t[15]||(t[15]=e()),a(v,{to:{name:"onboarding-welcome-view"},target:"_blank",rel:"noopener noreferrer"},{default:n(()=>t[12]||(t[12]=[e(`
              Onboarding
            `)])),_:1})]),_:1})],!0)])]),t[25]||(t[25]=e()),o("div",nt,[o("div",ot,[o("nav",at,[s.navigation?(c(),w("ul",st,[_(r.$slots,"navigation",{},void 0,!0)])):b("",!0),t[19]||(t[19]=e()),s.navigation&&s.bottomNavigation?(c(),w("div",it)):b("",!0),t[20]||(t[20]=e()),s.bottomNavigation?(c(),w("ul",rt,[_(r.$slots,"bottomNavigation",{},void 0,!0)])):b("",!0)])]),t[23]||(t[23]=e()),o("main",lt,[o("div",dt,[_(r.$slots,"notifications",{},void 0,!0),t[21]||(t[21]=e()),i(m)("use state")?b("",!0):(c(),$(A,{key:0,class:"mb-4",appearance:"warning"},{default:n(()=>[o("ul",null,[o("li",ut,[a(R,{path:"common.warnings.GLOBAL_STORE_TYPE_MEMORY"})])])]),_:1}))]),t[22]||(t[22]=e()),_(r.$slots,"default",{},void 0,!0)])])])}}}),mt=M(pt,[["__scopeId","data-v-7a0e1b77"]]),ct=["alt"],ft=E({__name:"App",setup(d){var l;const s=x(),u=((l=s.getRoutes().find(r=>r.name==="app"))==null?void 0:l.children.map(r=>(r.name=String(r.name),r)))??[],m=K({name:""});return s.afterEach(()=>{const r=s.currentRoute.value.matched.map(g=>g.name),t=u.find(g=>r.includes(g.name));t&&t.name!==m.value.name&&(m.value=t)}),(r,t)=>{const g=p("RouterView"),v=p("AppView"),A=p("RouteView"),y=p("DataSource"),h=G("style");return c(),$(y,{src:"/control-plane/addresses"},{default:n(({data:N})=>[typeof N<"u"?(c(),$(A,{key:0,name:"app",attrs:{class:"kuma-ready"},"data-testid-root":"mesh-app"},{default:n(({t:C,can:R})=>[a(mt,{class:"kuma-application"},{home:n(()=>[o("img",{class:"logo",src:P,alt:`${C("common.product.name")} Logo`,"data-testid":"logo"},null,8,ct)]),navigation:n(()=>[S(a(k,{"data-testid":"control-planes-navigator",active:m.value.name==="home",label:"Home",to:{name:"home"}},null,8,["active"]),[[h,"--icon: var(--icon-home)"]]),t[0]||(t[0]=e()),R("use zones")?S((c(),$(k,{key:0,"data-testid":"zones-navigator",active:m.value.name==="zone-index-view",label:"Zones",to:{name:"zone-index-view"}},null,8,["active"])),[[h,"--icon: var(--icon-zones)"]]):S((c(),$(k,{key:1,"data-testid":"zone-egresses-navigator",active:m.value.name==="zone-egress-index-view",label:"Zone Egresses",to:{name:"zone-egress-list-view"}},null,8,["active"])),[[h,"--icon: var(--icon-zone-egresses)"]]),t[1]||(t[1]=e()),S(a(k,{active:m.value.name==="mesh-index-view","data-testid":"meshes-navigator",label:"Meshes",to:{name:"mesh-index-view"}},null,8,["active"]),[[h,"--icon: var(--icon-meshes)"]])]),bottomNavigation:n(()=>[S(a(k,{active:m.value.name==="configuration-view","data-testid":"configuration-navigator",label:"Configuration",to:{name:"configuration-view"}},null,8,["active"]),[[h,"--icon: var(--icon-configuration)"]])]),default:n(()=>[t[2]||(t[2]=e()),t[3]||(t[3]=e()),t[4]||(t[4]=e()),a(v,null,{default:n(()=>[a(g)]),_:1})]),_:2},1024)]),_:1})):b("",!0)]),_:1})}}}),_t=M(ft,[["__scopeId","data-v-5aec8b56"]]);export{_t as default};
