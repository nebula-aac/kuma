import{d as b,l as T,K as q,a1 as R,r as a,o as v,c as I,b as i,w as s,p as m,e as p,t as K,a as S}from"./index-iylzCeaz.js";const D=b({__name:"ResourceCodeBlock",props:{resource:{},codeMaxHeight:{default:void 0},isSearchable:{type:Boolean,default:!1},query:{default:""},isFilterMode:{type:Boolean,default:!1},isRegExpMode:{type:Boolean,default:!1}},emits:["query-change","filter-mode-change","reg-exp-mode-change"],setup(u,{emit:f}){const{t:c}=T(),n=u,l=f,y=q(()=>r(n.resource));function r(e){return"creationTime"in e&&delete e.creationTime,"modificationTime"in e&&delete e.modificationTime,R.stringify(e)}const g=e=>console.error(e);return(e,t)=>{const h=a("XIcon"),C=a("KCodeBlockIconButton"),x=a("XCopyButton"),B=a("XDisclosure"),_=a("XCodeBlock");return v(),I("div",null,[i(_,{language:"yaml",code:y.value,"is-searchable":n.isSearchable,"code-max-height":n.codeMaxHeight,query:n.query,"is-filter-mode":n.isFilterMode,"is-reg-exp-mode":n.isRegExpMode,onQueryChange:t[0]||(t[0]=o=>l("query-change",o)),onFilterModeChange:t[1]||(t[1]=o=>l("filter-mode-change",o)),onRegExpModeChange:t[2]||(t[2]=o=>l("reg-exp-mode-change",o))},{"secondary-actions":s(()=>[i(B,null,{default:s(({expanded:o,toggle:d})=>[i(C,{"copy-tooltip":m(c)("common.copyKubernetesText"),theme:"dark",onClick:()=>{o||d()}},{default:s(()=>[i(h,{name:"copy"}),p(K(m(c)("common.copyKubernetesShortText")),1)]),_:2},1032,["copy-tooltip","onClick"]),t[3]||(t[3]=p()),i(x,{format:"hidden"},{default:s(({copy:k})=>[S(e.$slots,"default",{copy:M=>{o&&d(),M(X=>k(r(X)),g)},copying:o})]),_:2},1024)]),_:3})]),_:3},8,["code","is-searchable","code-max-height","query","is-filter-mode","is-reg-exp-mode"])])}}});export{D as _};
