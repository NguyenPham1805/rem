import{d as R,r as e,o as F,w as A,a as B,c as E,b as C,e as c,f as _,_ as P,g as T,F as b,u as D,m as L,G as N,C as S,j as u,k as $,l as I,R as j}from"./index.425d6e0a.js";const G={key:2,class:"flex p-2 justify-center text-rem-color font-light sm:text-xl"},U=R({setup(H){const o=D(),v=e([]),n=e(!1),l=e(1),f=e(1),m=e(!1),d=e(o.params.path),i=e(o.params.slug),g=e(null),r=e("Rem | Phim m\u1EDBi"),s=e(!1),h=async a=>{n.value=!0,s.value=!1,l.value>=f.value&&(m.value=!0),L(d.value,i.value,a).then(t=>{v.value.push(...t.items),f.value=Math.ceil(t.pagination.totalItems/t.pagination.totalItemsPerPage)}).catch(()=>s.value=!0).finally(()=>n.value=!1)},k=()=>{if(g.value.offsetHeight+g.value.offsetTop<document.documentElement.scrollTop+window.innerHeight){if(n.value||l.value>=(f.value||1))return;h(++l.value)}},x=()=>{var y,w;const a=(y=N.find(p=>p.slug=i.value))==null?void 0:y.name,t=(w=S.find(p=>p.slug=i.value))==null?void 0:w.name;if(!a&&!t){s.value=!0;return}switch(d.value){case"genres":r.value="Th\u1EC3 lo\u1EA1i - "+a;break;case"countries":r.value="Qu\u1ED1c gia - "+t;break}document.title="Rem | "+r.value};return F(()=>{h(l.value),x()}),window.addEventListener("scroll",k),A(()=>o.params,a=>{o.name==="Category"&&(d.value=a.path,i.value=a.slug,x(),v.value=[],l.value=1,h(l.value),m.value=!1)}),B(()=>{window.removeEventListener("scroll",k)}),(a,t)=>(u(),E(b,null,[s.value?(u(),C(I,{key:0})):c("",!0),_(P,{loading:n.value,title:r.value},null,8,["loading","title"]),s.value?c("",!0):(u(),E("div",{key:1,class:"pt-8",ref_key:"containerRef",ref:g},[_(T,{list:v.value},null,8,["list"]),n.value?(u(),C(j,{key:0})):c("",!0)],512)),_($),m.value?(u(),E("div",G," C\xF3 nhi\xEAu \u0111\xF3 phim th\xF4i b\u1EEFa n\xE0o v\xF4 l\u1EA1i c\u1EADp nh\u1EADt ti\u1EBFp cho ")):c("",!0)],64))}});export{U as default};
