import{r as f,o as h,c as v,a as g,b as y,E as A,d as L,e as b,f as O,g as P,h as k,w as a,i,j as _,u as V,s as I,k as R,l as x,m as D,n as T}from"./vendor.62ae568e.js";const w=function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))t(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const n of o.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&t(n)}).observe(document,{childList:!0,subtree:!0});function s(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerpolicy&&(o.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?o.credentials="include":e.crossorigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function t(e){if(e.ep)return;e.ep=!0;const o=s(e);fetch(e.href,o)}};w();var C=(l,r)=>{const s=l.__vccOpts||l;for(const[t,e]of r)s[t]=e;return s};const N={};function $(l,r){const s=f("router-view");return h(),v(s)}var B=C(N,[["render",$]]);const S="modulepreload",m={},H="/",c=function(r,s){return!s||s.length===0?r():Promise.all(s.map(t=>{if(t=`${H}${t}`,t in m)return;m[t]=!0;const e=t.endsWith(".css"),o=e?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${t}"]${o}`))return;const n=document.createElement("link");if(n.rel=e?"stylesheet":S,e||(n.as="script",n.crossOrigin=""),n.href=t,document.head.appendChild(n),e)return new Promise((d,p)=>{n.addEventListener("load",d),n.addEventListener("error",p)})})).then(()=>r())},q=g({history:y(),linkExactActiveClass:"active",routes:[{path:"/",name:"Landing",component:()=>c(()=>import("./Landing.60add3b2.js"),["assets/Landing.60add3b2.js","assets/Landing.10c356c0.css","assets/el-card.41ee44b8.css","assets/vendor.62ae568e.js","assets/vendor.3e7cc8a2.css","assets/artist.3cc8760f.js"])},{path:"/artist/:id",component:()=>c(()=>import("./ArtistDetail.16212150.js"),["assets/ArtistDetail.16212150.js","assets/ArtistDetail.e6b86b97.css","assets/vendor.62ae568e.js","assets/vendor.3e7cc8a2.css","assets/artist.3cc8760f.js"]),children:[{path:"",name:"ArtistDetail",component:()=>c(()=>import("./Detail.82e410a6.js"),["assets/Detail.82e410a6.js","assets/Detail.6dcdd383.css","assets/vendor.62ae568e.js","assets/vendor.3e7cc8a2.css","assets/artist.3cc8760f.js"])},{path:"album",name:"ArtistAlbum",component:()=>c(()=>import("./Album.8354c24d.js"),["assets/Album.8354c24d.js","assets/vendor.62ae568e.js","assets/vendor.3e7cc8a2.css"])},{path:"mv",name:"ArtistMV",component:()=>c(()=>import("./MV.6fd5122b.js"),["assets/MV.6fd5122b.js","assets/MV.ef941f5a.css","assets/el-card.41ee44b8.css","assets/vendor.62ae568e.js","assets/vendor.3e7cc8a2.css","assets/artist.3cc8760f.js"])},{path:"simi",name:"ArtistSimi",component:()=>c(()=>import("./Simi.63eb62f8.js"),["assets/Simi.63eb62f8.js","assets/vendor.62ae568e.js","assets/vendor.3e7cc8a2.css"])}]},{path:"/about",name:"About",component:()=>c(()=>import("./About.19ef5f61.js"),["assets/About.19ef5f61.js","assets/About.7380854c.css","assets/vendor.62ae568e.js","assets/vendor.3e7cc8a2.css"])}]});var F="/assets/logo.03d6d6da.png";const M={class:"content"},W=_("img",{height:"40",src:F,alt:"\u97F3\u4E50\u{1F3B5}"},null,-1),j={class:"container"},K=_("span",null,"Links: ",-1),z=x("About"),G={setup(l){return(r,s)=>{const t=f("router-link"),e=A,o=L,n=b,d=O,p=P,E=k;return h(),v(E,null,{default:a(()=>[i(n,null,{default:a(()=>[_("div",M,[i(t,{class:"logo",to:{name:"Landing"}},{default:a(()=>[W]),_:1}),i(o,{placeholder:"\u8BF7\u8F93\u5165\u641C\u7D22\u5173\u952E\u8BCD",class:"search"},{append:a(()=>[i(e,{icon:V(I)},null,8,["icon"])]),_:1})])]),_:1}),_("div",j,[i(d,null,{default:a(()=>[R(r.$slots,"default")]),_:3}),i(p,null,{default:a(()=>[_("div",null,[K,i(t,{to:{name:"About"}},{default:a(()=>[z]),_:1})])]),_:1})])]),_:3})}}},u=D(B);u.use(q);u.use(T());u.component("base-layout",G);u.mount("#app");export{C as _};
