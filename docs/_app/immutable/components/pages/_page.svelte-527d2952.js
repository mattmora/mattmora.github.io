import{S as pe,i as ve,s as be,K as ke,k as _,q as k,a as E,l as d,m as g,r as w,h as n,c as I,n as h,b,F as i,L as we,f as H,d as ye,t as W,M as Ee,e as C,g as Ie,w as qe,x as De,p as he,y as Me,z as Pe,E as _e,B as de}from"../../chunks/index-2324210b.js";import{P as me,G as $e,a as Ge}from"../../chunks/localInfo-7d023914.js";import{i as He}from"../../chunks/itch-data-1dfdffcb.js";function fe(c,e,t){var r,s;const l=c.slice();l[3]=e[t];const a={...(s=(r=He)==null?void 0:r[l[3]])!=null?s:{},...$e[l[3]]};return l[4]=a,l}function Ae(c){let e,t,l,a=c[4].title&&Re(c);return{c(){e=_("article"),a&&a.c(),t=E(),this.h()},l(r){e=d(r,"ARTICLE",{class:!0});var s=g(e);a&&a.l(s),t=I(s),s.forEach(n),this.h()},h(){h(e,"class","row svelte-1vbtq0t")},m(r,s){b(r,e,s),a&&a.m(e,null),i(e,t),l=!0},p(r,s){r[4].title&&a.p(r,s)},i(r){l||(H(a),l=!0)},o(r){W(a),l=!1},d(r){r&&n(e),a&&a.d()}}}function Re(c){let e,t,l,a,r;t=new Ge({props:{game:c[4],brief:!0}});let s=c[4].image&&c[4].cover_image&&Ve(c);return{c(){e=_("div"),qe(t.$$.fragment),l=E(),s&&s.c(),a=C(),this.h()},l(m){e=d(m,"DIV",{class:!0,style:!0});var v=g(e);De(t.$$.fragment,v),v.forEach(n),l=I(m),s&&s.l(m),a=C(),this.h()},h(){h(e,"class","brief svelte-1vbtq0t"),he(e,"width","75%")},m(m,v){b(m,e,v),Me(t,e,null),b(m,l,v),s&&s.m(m,v),b(m,a,v),r=!0},p(m,v){m[4].image&&m[4].cover_image&&s.p(m,v)},i(m){r||(H(t.$$.fragment,m),r=!0)},o(m){W(t.$$.fragment,m),r=!1},d(m){m&&n(e),Pe(t),m&&n(l),s&&s.d(m),m&&n(a)}}}function Ve(c){let e;function t(r,s){return r[4].article||r[4].video?Ye:We}let a=t(c)(c);return{c(){e=_("div"),a.c(),this.h()},l(r){e=d(r,"DIV",{class:!0,style:!0});var s=g(e);a.l(s),s.forEach(n),this.h()},h(){h(e,"class","panel"),he(e,"width","25%")},m(r,s){b(r,e,s),a.m(e,null)},p(r,s){a.p(r,s)},d(r){r&&n(e),a.d()}}}function We(c){let e,t,l;return{c(){e=_("figure"),t=_("img"),this.h()},l(a){e=d(a,"FIGURE",{class:!0});var r=g(e);t=d(r,"IMG",{src:!0,alt:!0,class:!0}),r.forEach(n),this.h()},h(){_e(t.src,l=c[4].cover_image)||h(t,"src",l),h(t,"alt",c[4].title+" cover image"),h(t,"class","svelte-1vbtq0t"),h(e,"class","svelte-1vbtq0t")},m(a,r){b(a,e,r),i(e,t)},p:de,d(a){a&&n(e)}}}function Ye(c){let e,t,l,a;return{c(){e=_("a"),t=_("figure"),l=_("img"),this.h()},l(r){e=d(r,"A",{href:!0});var s=g(e);t=d(s,"FIGURE",{class:!0});var m=g(t);l=d(m,"IMG",{src:!0,alt:!0,class:!0}),m.forEach(n),s.forEach(n),this.h()},h(){_e(l.src,a=c[4].cover_image)||h(l,"src",a),h(l,"alt",c[4].title+" cover image"),h(l,"class","svelte-1vbtq0t"),h(t,"class","svelte-1vbtq0t"),h(e,"href","/articles/"+c[3])},m(r,s){b(r,e,s),i(e,t),i(t,l)},p:de,d(r){r&&n(e)}}}function ue(c){let e,t,l=c[4]&&Ae(c);return{c(){l&&l.c(),e=C()},l(a){l&&l.l(a),e=C()},m(a,r){l&&l.m(a,r),b(a,e,r),t=!0},p(a,r){a[4]&&l.p(a,r)},i(a){t||(H(l),t=!0)},o(a){W(l),t=!1},d(a){l&&l.d(a),a&&n(e)}}}function ze(c){let e,t,l,a,r,s,m,v,L,S,A,U,K,M,N,q,T,J,O,D,Q,$,X,Z,Y,G,y,R,x,ee,z,te,re;ke(c[2]);let P=me,u=[];for(let f=0;f<P.length;f+=1)u[f]=ue(fe(c,P,f));const ge=f=>W(u[f],1,1,()=>{u[f]=null});return{c(){e=_("header"),t=_("div"),l=_("h1"),a=k("Matt Mora / Matt Wang"),r=E(),s=_("h3"),m=k("Game Designer, Programmer"),v=E(),L=_("hr"),S=E(),A=_("p"),U=k(`I'm a game designer with a background in audio programming and music composition. I'm\r
      interested in systems design, web games, experimental games, music games, creature collectors,\r
      and more.`),K=E(),M=_("p"),N=k(`You can play most of my games on my\r
      `),q=_("a"),T=k("itch.io"),J=k(` page,\r
      and you can read about or see gameplay of some of them at the links below.`),O=E(),D=_("p"),Q=k("You can contact me at "),$=_("a"),X=k("mattwmora@gmail.com"),Z=k(`\r
      or on Discord as mattmora.`),Y=E(),G=_("main"),y=_("div"),R=_("h2"),x=k("Projects"),ee=E();for(let f=0;f<u.length;f+=1)u[f].c();this.h()},l(f){e=d(f,"HEADER",{});var p=g(e);t=d(p,"DIV",{class:!0});var o=g(t);l=d(o,"H1",{id:!0,class:!0});var V=g(l);a=w(V,"Matt Mora / Matt Wang"),V.forEach(n),r=I(o),s=d(o,"H3",{id:!0,class:!0});var le=g(s);m=w(le,"Game Designer, Programmer"),le.forEach(n),v=I(o),L=d(o,"HR",{}),S=I(o),A=d(o,"P",{});var se=g(A);U=w(se,`I'm a game designer with a background in audio programming and music composition. I'm\r
      interested in systems design, web games, experimental games, music games, creature collectors,\r
      and more.`),se.forEach(n),K=I(o),M=d(o,"P",{});var F=g(M);N=w(F,`You can play most of my games on my\r
      `),q=d(F,"A",{href:!0,target:!0,rel:!0});var oe=g(q);T=w(oe,"itch.io"),oe.forEach(n),J=w(F,` page,\r
      and you can read about or see gameplay of some of them at the links below.`),F.forEach(n),O=I(o),D=d(o,"P",{class:!0});var j=g(D);Q=w(j,"You can contact me at "),$=d(j,"A",{href:!0});var ie=g($);X=w(ie,"mattwmora@gmail.com"),ie.forEach(n),Z=w(j,`\r
      or on Discord as mattmora.`),j.forEach(n),o.forEach(n),p.forEach(n),Y=I(f),G=d(f,"MAIN",{});var ne=g(G);y=d(ne,"DIV",{class:!0});var B=g(y);R=d(B,"H2",{});var ce=g(R);x=w(ce,"Projects"),ce.forEach(n),ee=I(B);for(let ae=0;ae<u.length;ae+=1)u[ae].l(B);B.forEach(n),ne.forEach(n),this.h()},h(){h(l,"id","name"),h(l,"class","svelte-1vbtq0t"),h(s,"id","roles"),h(s,"class","svelte-1vbtq0t"),h(q,"href","https://mattmora.itch.io"),h(q,"target","_blank"),h(q,"rel","noopener noreferrer"),h($,"href","mailto:mattwmora@gmail.com"),h(D,"class","final"),h(t,"class","panel block"),h(y,"class","games panel block svelte-1vbtq0t")},m(f,p){b(f,e,p),i(e,t),i(t,l),i(l,a),i(t,r),i(t,s),i(s,m),i(t,v),i(t,L),i(t,S),i(t,A),i(A,U),i(t,K),i(t,M),i(M,N),i(M,q),i(q,T),i(M,J),i(t,O),i(t,D),i(D,Q),i(D,$),i($,X),i(D,Z),b(f,Y,p),b(f,G,p),i(G,y),i(y,R),i(R,x),i(y,ee);for(let o=0;o<u.length;o+=1)u[o].m(y,null);z=!0,te||(re=we(window,"resize",c[2]),te=!0)},p(f,[p]){if(p&0){P=me;let o;for(o=0;o<P.length;o+=1){const V=fe(f,P,o);u[o]?(u[o].p(V,p),H(u[o],1)):(u[o]=ue(V),u[o].c(),H(u[o],1),u[o].m(y,null))}for(Ie(),o=P.length;o<u.length;o+=1)ge(o);ye()}},i(f){if(!z){for(let p=0;p<P.length;p+=1)H(u[p]);z=!0}},o(f){u=u.filter(Boolean);for(let p=0;p<u.length;p+=1)W(u[p]);z=!1},d(f){f&&n(e),f&&n(Y),f&&n(G),Ee(u,f),te=!1,re()}}}function Fe(c,e,t){let l,a;function r(){t(0,l=window.innerWidth),t(1,a=window.innerHeight)}return[l,a,r]}class Le extends pe{constructor(e){super(),ve(this,e,Fe,ze,be,{})}}export{Le as default};
