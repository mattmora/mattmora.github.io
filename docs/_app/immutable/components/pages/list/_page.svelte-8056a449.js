import{S as C,i as D,s as F,k as u,q as b,a as S,l as p,m as d,r as E,h as f,c as A,n as y,b as I,F as _,B as x,O as G}from"../../../chunks/index-9e03c306.js";import{L as q}from"../../../chunks/games-abc5a11a.js";function H(i,e,a){const l=i.slice();return l[0]=e[a],l}function M(i){let e,a=i[0].brief+"",l;return{c(){e=u("p"),l=b(a)},l(o){e=p(o,"P",{});var r=d(e);l=E(r,a),r.forEach(f)},m(o,r){I(o,e,r),_(e,l)},p:x,d(o){o&&f(e)}}}function N(i){let e,a=i[0].title+"",l;return{c(){e=u("a"),l=b(a),this.h()},l(o){e=p(o,"A",{href:!0,target:!0,rel:!0});var r=d(e);l=E(r,a),r.forEach(f),this.h()},h(){y(e,"href",i[0].url),y(e,"target","_blank"),y(e,"rel","noopener noreferrer")},m(o,r){I(o,e,r),_(e,l)},p:x,d(o){o&&f(e)}}}function O(i){let e,a;function l(c,h){return c[0].url?N:M}let r=l(i)(i);return{c(){e=u("li"),r.c(),a=S()},l(c){e=p(c,"LI",{});var h=d(e);r.l(h),a=A(h),h.forEach(f)},m(c,h){I(c,e,h),r.m(e,null),_(e,a)},p(c,h){r.p(c,h)},d(c){c&&f(e),r.d()}}}function V(i){let e,a,l,o,r,c,h,w,g,v=q,s=[];for(let n=0;n<v.length;n+=1)s[n]=O(H(i,v,n));return{c(){e=u("main"),a=u("div"),l=u("p"),o=b("I haven't made this page yet. How'd you get here anyway? Snooping in the repo?"),r=S(),c=u("a"),h=b("Back to home page"),w=S(),g=u("ol");for(let n=0;n<s.length;n+=1)s[n].c();this.h()},l(n){e=p(n,"MAIN",{});var m=d(e);a=p(m,"DIV",{class:!0});var t=d(a);l=p(t,"P",{class:!0});var k=d(l);o=E(k,"I haven't made this page yet. How'd you get here anyway? Snooping in the repo?"),k.forEach(f),r=A(t),c=p(t,"A",{href:!0});var B=d(c);h=E(B,"Back to home page"),B.forEach(f),w=A(t),g=p(t,"OL",{});var P=d(g);for(let L=0;L<s.length;L+=1)s[L].l(P);P.forEach(f),t.forEach(f),m.forEach(f),this.h()},h(){y(l,"class","first"),y(c,"href","/"),y(a,"class","block")},m(n,m){I(n,e,m),_(e,a),_(a,l),_(l,o),_(a,r),_(a,c),_(c,h),_(a,w),_(a,g);for(let t=0;t<s.length;t+=1)s[t].m(g,null)},p(n,[m]){if(m&0){v=q;let t;for(t=0;t<v.length;t+=1){const k=H(n,v,t);s[t]?s[t].p(k,m):(s[t]=O(k),s[t].c(),s[t].m(g,null))}for(;t<s.length;t+=1)s[t].d(1);s.length=v.length}},i:x,o:x,d(n){n&&f(e),G(s,n)}}}class J extends C{constructor(e){super(),D(this,e,null,V,F,{})}}export{J as default};
