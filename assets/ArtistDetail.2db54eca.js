import{d as k,e as f,Q as b,R as v,S as z,t as I,A as V,T as M,N,K as R,U as L,V as T,r as _,W as q,o as J,c as K,w as e,J as Q,g as t,n,u as a,L as i,X as U,q as u}from"./vendor.23720f1d.js";/* empty css               */import{u as W}from"./artist.3fb54e8a.js";import{_ as X}from"./index.18f4b39d.js";const j=["src","alt"],G={class:"desc"},H=u("\u4E13\u8F91"),O=u("MV"),P=u("\u6B4C\u624B\u8BE6\u60C5"),Y=u("\u76F8\u4F3C\u6B4C\u624B"),Z=k({setup($){const h=f(10),x=b(v,{direction:"vertical"}),F=z(),{id:l}=F.params,p=W(),{artistInfo:s}=I(p),c=f(!1),A=async d=>{c.value=!0;try{await p.fetchArtistDetail(d)}catch{Q.error("\u7F51\u7EDC\u9519\u8BEF\uFF0C\u8BF7\u7A0D\u540E\u91CD\u8BD5\uFF01")}finally{c.value=!1}};return V(async()=>{await A(+l)}),(d,E)=>{const o=M,m=N,w=R,y=L,B=T,g=v,r=_("router-link"),S=q,C=_("router-view"),D=_("base-layout");return J(),K(D,null,{default:e(()=>[t(y,{loading:c.value,animated:""},{template:e(()=>[t(o,{variant:"image",style:{width:"240px",height:"200px","margin-bottom":"20px"}}),t(o,{variant:"text",style:{width:"240px"}}),t(o,{variant:"text",style:{width:"240px"}}),t(o,{variant:"text",style:{width:"240px"}}),t(o,{variant:"text"}),t(o,{variant:"text"})]),default:e(()=>[t(w,{gutter:20},{default:e(()=>[t(m,{span:6,xs:24},{default:e(()=>[n("img",{src:a(s).cover,alt:a(s).name,style:{width:"100%","max-width":"240px"}},null,8,j)]),_:1}),t(m,{span:18,xs:24,class:"info"},{default:e(()=>[n("h1",null,i(a(s).name),1),n("p",null,"\u5355\u66F2\u6570\uFF1A"+i(a(s).musicSize),1),n("p",null,"\u4E13\u8F91\u6570\uFF1A"+i(a(s).albumSize),1),n("p",null,"mv\u6570\uFF1A"+i(a(s).mvSize),1),n("p",G,"\u7B80\u4ECB\uFF1A"+i(a(s).briefDesc),1)]),_:1})]),_:1})]),_:1},8,["loading"]),t(g,{"content-position":"left"},{default:e(()=>[t(B,null,{default:e(()=>[t(a(U))]),_:1})]),_:1}),t(S,{size:h.value,spacer:a(x)},{default:e(()=>[t(r,{to:{name:"ArtistAlbum",params:{id:a(l)}}},{default:e(()=>[H]),_:1},8,["to"]),t(r,{to:{name:"ArtistMV",params:{id:a(l)}}},{default:e(()=>[O]),_:1},8,["to"]),t(r,{to:{name:"ArtistDetail",params:{id:a(l)}}},{default:e(()=>[P]),_:1},8,["to"]),t(r,{to:{name:"ArtistSimi",params:{id:a(l)}}},{default:e(()=>[Y]),_:1},8,["to"])]),_:1},8,["size","spacer"]),t(C)]),_:1})}}});var ot=X(Z,[["__scopeId","data-v-3034f564"]]);export{ot as default};