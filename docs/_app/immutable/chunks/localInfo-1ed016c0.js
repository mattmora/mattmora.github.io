import{S as se,i as le,s as he,k as c,q as h,a as O,l as f,m as p,r as m,c as R,h as r,n as y,b as s,F as o,u as Be,g as Et,t as ie,d as $t,f as oe,C as At,G as St,H as Pt,I as Tt,e as Ce,B as ye,E as _e,p as Ot,w as ce,x as fe,y as de,z as ue}from"./index-2324210b.js";function bt(l){var b;let e,n=((b=l[0].link)!=null?b:l[0].url)+"",t,a,i,d;return{c(){e=c("a"),t=h(n),i=O(),d=c("hr"),this.h()},l(u){e=f(u,"A",{href:!0,target:!0,rel:!0,class:!0});var g=p(e);t=m(g,n),g.forEach(r),i=R(u),d=f(u,"HR",{}),this.h()},h(){var u;y(e,"href",a=(u=l[0].link)!=null?u:l[0].url),y(e,"target","_blank"),y(e,"rel","noopener noreferrer"),y(e,"class","svelte-1d5lome")},m(u,g){s(u,e,g),o(e,t),s(u,i,g),s(u,d,g)},p(u,g){var I,_;g&1&&n!==(n=((I=u[0].link)!=null?I:u[0].url)+"")&&Be(t,n),g&1&&a!==(a=(_=u[0].link)!=null?_:u[0].url)&&y(e,"href",a)},d(u){u&&r(e),u&&r(i),u&&r(d)}}}function Rt(l){let e,n;function t(u,g){if(u[0].video&&u[0].embed)return Gt;if(u[0].image)return jt}let a=t(l),i=a&&a(l);const d=l[3].default,b=At(d,l,l[2],null);return{c(){i&&i.c(),e=O(),b&&b.c()},l(u){i&&i.l(u),e=R(u),b&&b.l(u)},m(u,g){i&&i.m(u,g),s(u,e,g),b&&b.m(u,g),n=!0},p(u,g){a===(a=t(u))&&i?i.p(u,g):(i&&i.d(1),i=a&&a(u),i&&(i.c(),i.m(e.parentNode,e))),b&&b.p&&(!n||g&4)&&St(b,d,u,u[2],n?Tt(d,u[2],g,null):Pt(u[2]),null)},i(u){n||(oe(b,u),n=!0)},o(u){ie(b,u),n=!1},d(u){i&&i.d(u),u&&r(e),b&&b.d(u)}}}function Lt(l){let e,n=l[0].brief+"",t,a,i,d,b,u=l[0].playable&&wt(l),g=l[0].article&&vt(l),I=l[0].video&&_t(l);return{c(){e=c("p"),t=h(n),a=O(),u&&u.c(),i=O(),g&&g.c(),d=O(),I&&I.c(),b=Ce(),this.h()},l(_){e=f(_,"P",{class:!0});var v=p(e);t=m(v,n),v.forEach(r),a=R(_),u&&u.l(_),i=R(_),g&&g.l(_),d=R(_),I&&I.l(_),b=Ce(),this.h()},h(){y(e,"class","svelte-1d5lome")},m(_,v){s(_,e,v),o(e,t),s(_,a,v),u&&u.m(_,v),s(_,i,v),g&&g.m(_,v),s(_,d,v),I&&I.m(_,v),s(_,b,v)},p(_,v){v&1&&n!==(n=_[0].brief+"")&&Be(t,n),_[0].playable?u?u.p(_,v):(u=wt(_),u.c(),u.m(i.parentNode,i)):u&&(u.d(1),u=null),_[0].article?g?g.p(_,v):(g=vt(_),g.c(),g.m(d.parentNode,d)):g&&(g.d(1),g=null),_[0].video?I?I.p(_,v):(I=_t(_),I.c(),I.m(b.parentNode,b)):I&&(I.d(1),I=null)},i:ye,o:ye,d(_){_&&r(e),_&&r(a),u&&u.d(_),_&&r(i),g&&g.d(_),_&&r(d),I&&I.d(_),_&&r(b)}}}function jt(l){let e,n,t,a;return{c(){e=c("div"),n=c("img"),this.h()},l(i){e=f(i,"DIV",{class:!0});var d=p(e);n=f(d,"IMG",{src:!0,alt:!0,class:!0}),d.forEach(r),this.h()},h(){_e(n.src,t=l[0].cover_image)||y(n,"src",t),y(n,"alt",a=l[0].title+" cover image"),y(n,"class","svelte-1d5lome"),y(e,"class","float svelte-1d5lome")},m(i,d){s(i,e,d),o(e,n)},p(i,d){d&1&&!_e(n.src,t=i[0].cover_image)&&y(n,"src",t),d&1&&a!==(a=i[0].title+" cover image")&&y(n,"alt",a)},d(i){i&&r(e)}}}function Gt(l){let e;function n(i,d){return i[0].article?Dt:Ht}let t=n(l),a=t(l);return{c(){a.c(),e=Ce()},l(i){a.l(i),e=Ce()},m(i,d){a.m(i,d),s(i,e,d)},p(i,d){t===(t=n(i))&&a?a.p(i,d):(a.d(1),a=t(i),a&&(a.c(),a.m(e.parentNode,e)))},d(i){a.d(i),i&&r(e)}}}function Ht(l){let e,n;return{c(){e=c("iframe"),this.h()},l(t){e=f(t,"IFRAME",{src:!0,title:!0,frameborder:!0,allow:!0,class:!0}),p(e).forEach(r),this.h()},h(){_e(e.src,n=l[0].embed)||y(e,"src",n),y(e,"title","Video player"),y(e,"frameborder","2"),y(e,"allow","accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"),e.allowFullscreen=!0,y(e,"class","svelte-1d5lome")},m(t,a){s(t,e,a)},p(t,a){a&1&&!_e(e.src,n=t[0].embed)&&y(e,"src",n)},d(t){t&&r(e)}}}function Dt(l){let e,n,t;return{c(){e=c("div"),n=c("iframe"),this.h()},l(a){e=f(a,"DIV",{class:!0,style:!0});var i=p(e);n=f(i,"IFRAME",{src:!0,title:!0,frameborder:!0,allow:!0,class:!0}),p(n).forEach(r),i.forEach(r),this.h()},h(){_e(n.src,t=l[0].embed)||y(n,"src",t),y(n,"title","Video player"),y(n,"frameborder","2"),y(n,"allow","accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"),n.allowFullscreen=!0,y(n,"class","svelte-1d5lome"),y(e,"class","float svelte-1d5lome"),Ot(e,"width","50%")},m(a,i){s(a,e,i),o(e,n)},p(a,i){i&1&&!_e(n.src,t=a[0].embed)&&y(n,"src",t)},d(a){a&&r(e)}}}function wt(l){let e,n,t;return{c(){e=c("a"),n=h("Play"),this.h()},l(a){e=f(a,"A",{href:!0,target:!0,rel:!0,class:!0});var i=p(e);n=m(i,"Play"),i.forEach(r),this.h()},h(){var a;y(e,"href",t=(a=l[0].link)!=null?a:l[0].url),y(e,"target","_blank"),y(e,"rel","noopener noreferrer"),y(e,"class","svelte-1d5lome")},m(a,i){s(a,e,i),o(e,n)},p(a,i){var d;i&1&&t!==(t=(d=a[0].link)!=null?d:a[0].url)&&y(e,"href",t)},d(a){a&&r(e)}}}function vt(l){let e,n,t,a=l[0].playable&&It();return{c(){a&&a.c(),e=c("a"),n=h("Read"),this.h()},l(i){a&&a.l(i),e=f(i,"A",{href:!0,class:!0});var d=p(e);n=m(d,"Read"),d.forEach(r),this.h()},h(){y(e,"href",t="/articles/"+l[0].id),y(e,"class","svelte-1d5lome")},m(i,d){a&&a.m(i,d),s(i,e,d),o(e,n)},p(i,d){i[0].playable?a||(a=It(),a.c(),a.m(e.parentNode,e)):a&&(a.d(1),a=null),d&1&&t!==(t="/articles/"+i[0].id)&&y(e,"href",t)},d(i){a&&a.d(i),i&&r(e)}}}function It(l){let e;return{c(){e=h(`/\r
      `)},l(n){e=m(n,`/\r
      `)},m(n,t){s(n,e,t)},d(n){n&&r(e)}}}function _t(l){let e,n,t,a=(l[0].playable||l[0].article)&&kt();return{c(){a&&a.c(),e=c("a"),n=h("Watch"),this.h()},l(i){a&&a.l(i),e=f(i,"A",{href:!0,class:!0});var d=p(e);n=m(d,"Watch"),d.forEach(r),this.h()},h(){y(e,"href",t="/articles/"+l[0].id),y(e,"class","svelte-1d5lome")},m(i,d){a&&a.m(i,d),s(i,e,d),o(e,n)},p(i,d){i[0].playable||i[0].article?a||(a=kt(),a.c(),a.m(e.parentNode,e)):a&&(a.d(1),a=null),d&1&&t!==(t="/articles/"+i[0].id)&&y(e,"href",t)},d(i){a&&a.d(i),i&&r(e)}}}function kt(l){let e;return{c(){e=h(`/\r
      `)},l(n){e=m(n,`/\r
      `)},m(n,t){s(n,e,t)},d(n){n&&r(e)}}}function Nt(l){var N;let e,n,t=((N=l[0].title)!=null?N:". . .")+"",a,i,d,b,u=l[0].role+" / "+l[0].date,g,I,_,v,T,D,w=!l[1]&&l[0].playable&&bt(l);const G=[Lt,Rt],H=[];function A(L,P){return L[1]?0:1}return v=A(l),T=H[v]=G[v](l),{c(){e=c("section"),n=c("h3"),a=h(t),i=O(),d=c("span"),b=h("/ "),g=h(u),I=O(),w&&w.c(),_=O(),T.c(),this.h()},l(L){e=f(L,"SECTION",{});var P=p(e);n=f(P,"H3",{class:!0});var x=p(n);a=m(x,t),i=R(x),d=f(x,"SPAN",{class:!0});var z=p(d);b=m(z,"/ "),g=m(z,u),z.forEach(r),x.forEach(r),I=R(P),w&&w.l(P),_=R(P),T.l(P),P.forEach(r),this.h()},h(){y(d,"class","info svelte-1d5lome"),y(n,"class","svelte-1d5lome")},m(L,P){s(L,e,P),o(e,n),o(n,a),o(n,i),o(n,d),o(d,b),o(d,g),o(e,I),w&&w.m(e,null),o(e,_),H[v].m(e,null),D=!0},p(L,[P]){var z;(!D||P&1)&&t!==(t=((z=L[0].title)!=null?z:". . .")+"")&&Be(a,t),(!D||P&1)&&u!==(u=L[0].role+" / "+L[0].date)&&Be(g,u),!L[1]&&L[0].playable?w?w.p(L,P):(w=bt(L),w.c(),w.m(e,_)):w&&(w.d(1),w=null);let x=v;v=A(L),v===x?H[v].p(L,P):(Et(),ie(H[x],1,1,()=>{H[x]=null}),$t(),T=H[v],T?T.p(L,P):(T=H[v]=G[v](L),T.c()),oe(T,1),T.m(e,null))},i(L){D||(oe(T),D=!0)},o(L){ie(T),D=!1},d(L){L&&r(e),w&&w.d(),H[v].d()}}}function Ft(l,e,n){let{$$slots:t={},$$scope:a}=e,{game:i}=e,{brief:d=!1}=e;return l.$$set=b=>{"game"in b&&n(0,i=b.game),"brief"in b&&n(1,d=b.brief),"$$scope"in b&&n(2,a=b.$$scope)},[i,d,a,t]}class pe extends se{constructor(e){super(),le(this,e,Ft,Nt,he,{game:0,brief:1})}}function xt(l){let e,n,t,a,i,d,b,u,g,I,_,v,T,D,w,G,H,A,N,L,P,x,z;return{c(){e=c("p"),n=h("Another short game I made in Prototype Studio at the NYU Game Center, the prompt that inspired "),t=c("i"),a=h("An Autumn Day"),i=h(`\r
    was to make a game "for" a classmate. It could be a game they would like, a game in their style,\r
    a remake of one of their games, or anything similar. I was assigned to make a game for my classmate\r
    `),d=c("a"),b=h("Hao"),u=h(` and I chose\r
    to attempt to emulate his style and make a sort of spinoff to a few of his games that feature a common\r
    character.`),g=O(),I=c("p"),_=h(`As a quick way to start getting into Hao's visual style (and because I thought it would be\r
    funny), I used `),v=c("a"),T=h("AssetStudio"),D=h(`\r
    to extract the sprites from a couple of Hao's games,\r
    `),w=c("a"),G=h("I want to hear that again"),H=h(`\r
    and\r
    `),A=c("a"),N=h("There's a Beautiful Star"),L=h(". At that point, I also decided I would use Hao's rabbit character from those games."),P=O(),x=c("p"),z=h(`In terms of game design, Hao excels conveying complex and abstract emotions through simple\r
    controls and mechanics, which is of course a challenge to emulate, so I tried to just follow the\r
    structure of the two games I had taken assets from. Each one starts by establishing a simple\r
    task for the player and through the act of doing this task, its meaning takes form.`),this.h()},l(V){e=f(V,"P",{});var C=p(e);n=m(C,"Another short game I made in Prototype Studio at the NYU Game Center, the prompt that inspired "),t=f(C,"I",{});var U=p(t);a=m(U,"An Autumn Day"),U.forEach(r),i=m(C,`\r
    was to make a game "for" a classmate. It could be a game they would like, a game in their style,\r
    a remake of one of their games, or anything similar. I was assigned to make a game for my classmate\r
    `),d=f(C,"A",{href:!0,target:!0,rel:!0});var J=p(d);b=m(J,"Hao"),J.forEach(r),u=m(C,` and I chose\r
    to attempt to emulate his style and make a sort of spinoff to a few of his games that feature a common\r
    character.`),C.forEach(r),g=R(V),I=f(V,"P",{});var K=p(I);_=m(K,`As a quick way to start getting into Hao's visual style (and because I thought it would be\r
    funny), I used `),v=f(K,"A",{href:!0,target:!0,rel:!0});var Y=p(v);T=m(Y,"AssetStudio"),Y.forEach(r),D=m(K,`\r
    to extract the sprites from a couple of Hao's games,\r
    `),w=f(K,"A",{href:!0,target:!0,rel:!0});var Z=p(w);G=m(Z,"I want to hear that again"),Z.forEach(r),H=m(K,`\r
    and\r
    `),A=f(K,"A",{href:!0,target:!0,rel:!0});var $=p(A);N=m($,"There's a Beautiful Star"),$.forEach(r),L=m(K,". At that point, I also decided I would use Hao's rabbit character from those games."),K.forEach(r),P=R(V),x=f(V,"P",{});var M=p(x);z=m(M,`In terms of game design, Hao excels conveying complex and abstract emotions through simple\r
    controls and mechanics, which is of course a challenge to emulate, so I tried to just follow the\r
    structure of the two games I had taken assets from. Each one starts by establishing a simple\r
    task for the player and through the act of doing this task, its meaning takes form.`),M.forEach(r),this.h()},h(){y(d,"href","https://haoliao.itch.io/"),y(d,"target","_blank"),y(d,"rel","noopener noreferrer"),y(v,"href","https://github.com/Perfare/AssetStudio"),y(v,"target","_blank"),y(v,"rel","noopener noreferrer"),y(w,"href","https://haoliao.itch.io/i-want-to-hear-that-again"),y(w,"target","_blank"),y(w,"rel","noopener noreferrer"),y(A,"href","https://haoliao.itch.io/there-is-a-beautiful-star"),y(A,"target","_blank"),y(A,"rel","noopener noreferrer")},m(V,C){s(V,e,C),o(e,n),o(e,t),o(t,a),o(e,i),o(e,d),o(d,b),o(e,u),s(V,g,C),s(V,I,C),o(I,_),o(I,v),o(v,T),o(I,D),o(I,w),o(w,G),o(I,H),o(I,A),o(A,N),o(I,L),s(V,P,C),s(V,x,C),o(x,z)},p:ye,d(V){V&&r(e),V&&r(g),V&&r(I),V&&r(P),V&&r(x)}}}function zt(l){let e,n;return e=new pe({props:{game:l[0],$$slots:{default:[xt]},$$scope:{ctx:l}}}),{c(){ce(e.$$.fragment)},l(t){fe(e.$$.fragment,t)},m(t,a){de(e,t,a),n=!0},p(t,[a]){const i={};a&1&&(i.game=t[0]),a&2&&(i.$$scope={dirty:a,ctx:t}),e.$set(i)},i(t){n||(oe(e.$$.fragment,t),n=!0)},o(t){ie(e.$$.fragment,t),n=!1},d(t){ue(e,t)}}}function Mt(l,e,n){let{game:t}=e;return l.$$set=a=>{"game"in a&&n(0,t=a.game)},[t]}class Vt extends se{constructor(e){super(),le(this,e,Mt,zt,he,{game:0})}}function Wt(l){let e,n,t,a,i,d,b,u,g,I,_,v,T,D,w,G,H,A,N,L,P,x,z,V,C,U,J,K,Y,Z,$,M,S,q,Q,te,k,W,ae,ne,ee,re,E,B,me,Ie,be,ke,Ee,Se,$e,Oe,Pe,Ae,Re,Te,we,Le,He,qe,Ke,Fe,je,Ue,xe,ve,Ye,De,Xe,Je,Ne,Qe,Ze;return{c(){e=c("p"),n=c("i"),t=h("Stellata Waterway"),a=h(` started as a recreation of certain systems and mechanics from one of my\r
    favorite games as kid (and still), `),i=c("i"),d=h("Klonoa 2: Lunatea's Veil"),b=h(`. Specifically, my design is\r
    directly based on\r
    `),u=c("a"),g=h("the first phase of the game's final boss"),I=h("."),_=O(),v=c("h3"),T=h("Making the game"),D=O(),w=c("p"),G=h("I started with the space and movement system, trying to recreate aspects of "),H=c("i"),A=h("Klonoa"),N=h(`'s\r
    design that I liked. One was the movement around the tunnel, which has a certain sense of\r
    inertia. The tunnel and camera don't immediately rotate to center the player and they don't\r
    immediately stop rotating when the player stops moving to the side. Another was the camera\r
    position, which is slightly below the tunnel's center and angled slightly downward, which\r
    compared to a centered and forward facing camera, as I first tried, is more readable and makes\r
    the space feel larger.`),L=O(),P=c("p"),x=h("But for various parts of the movement system, I chose to stray from "),z=c("i"),V=h("Klonoa"),C=h(`'s design.\r
    `),U=c("i"),J=h("Klonoa"),K=h(` is a rather slow game which suits its tone. But I was interested in making\r
    something more action-oriented, so the player moves much faster than in `),Y=c("i"),Z=h("Klonoa"),$=h(`. Likewise,\r
    `),M=c("i"),S=h("Klonoa"),q=h(`\r
    has a midair "flutter" mechanic that aids slow, deliberate platforming. That didn't feel suited to\r
    what I was making, so I left it out. In general, as my game came together, it started to form its\r
    own identity and I moved away from simply recreating a reference. I did, however, arrive at a similar\r
    double jump system to `),Q=c("i"),te=h("Klonoa"),k=h(", though more organically than as a recreation."),W=O(),ae=c("p"),ne=h(`Coming up with the double jump system was a memorable moment to me in "finding the fun" in a\r
    system. I had implemented nearly every other mechanic in the game and while testing just\r
    happened to hit a star while midair. It was immediately obvious that doing so should give the\r
    player another jump. This mechanic became a central part of what makes the game fun and\r
    challenging. It's by no means an innovative mechanic (plenty of platformers including `),ee=c("i"),re=h("Klonoa"),E=h(` feature similar mechanics), but the way I arrived at it through making and testing is a process\r
    I hope to repeat.`),B=O(),me=c("p"),Ie=h(`The last thing I made was the level. As another game made in one week, making a boss or a level\r
    with a satisfying end seemed out of scope, so I decided to again diverge from `),be=c("i"),ke=h("Klonoa"),Ee=h(` and create\r
    an infinite runner. I designed a basic level that could loop, added a scoring system to provide a\r
    clear goal, and linked the score to the player's speed as a basic difficulty ramp. There are a few\r
    issues with the design, such as level readability at high speed and extreme bias towards certain\r
    scoring strategies, but there's nothing beyond fixing and things mostly function as I'd hoped.`),Se=O(),$e=c("h3"),Oe=h("Playing my own games"),Pe=O(),Ae=c("p"),Re=h(`Of all of my games, this is the one I probably enjoy playing the most, which I don't think means\r
    it's better (certainly it's hard to properly enjoy narrative, puzzle, or other\r
    one-time-experience games as their designer, but that doesn't mean they're worse), but it's a\r
    valuable observation to make in developing my design process. I enjoy action-oriented games and\r
    I can apparently make one, at least to my own taste, yet I have rarely made such games. If I\r
    want to make more action-oriented games, I need to question what about my current circumstances,\r
    intuitions, and processes as designer might be drawing me away from doing so.`),Te=O(),we=c("p"),Le=h(`One idea is that I often get caught up in the idea of having a higher concept or purpose for the\r
    game than simply to be fun. I avoided that thinking with `),He=c("i"),qe=h("Stellata Waterway"),Ke=h(` because it was\r
    intended as just a mechanical homage. Instead of concept, I was able to focus on small features and\r
    interactions that I enjoyed, and I found that even without a driving concept, new and interesting\r
    ideas came out of the processing of making. Maybe if I want to make more games like this, I need\r
    to think less conceptually and just incrementally build on small features that excite me.`),Fe=O(),je=c("h3"),Ue=h("Tunnel runners"),xe=O(),ve=c("p"),Ye=h(`Since finishing this game, I've also enjoyed hearing what games it reminds people of. People\r
    have likened it to Vectrex games, a sequence in `),De=c("i"),Xe=h("Spyro the Dragon"),Je=h(`, and\r
    `),Ne=c("i"),Qe=h("Sonic the Hedgehog 2"),Ze=h(`. While none of those were on my mind when making this, it's\r
    interesting to see more instances of what I've come to call "tunnel runners" as a relatively\r
    uncommon spatial system.`),this.h()},l(j){e=f(j,"P",{});var X=p(e);n=f(X,"I",{});var et=p(n);t=m(et,"Stellata Waterway"),et.forEach(r),a=m(X,` started as a recreation of certain systems and mechanics from one of my\r
    favorite games as kid (and still), `),i=f(X,"I",{});var tt=p(i);d=m(tt,"Klonoa 2: Lunatea's Veil"),tt.forEach(r),b=m(X,`. Specifically, my design is\r
    directly based on\r
    `),u=f(X,"A",{href:!0,target:!0,rel:!0});var at=p(u);g=m(at,"the first phase of the game's final boss"),at.forEach(r),I=m(X,"."),X.forEach(r),_=R(j),v=f(j,"H3",{});var rt=p(v);T=m(rt,"Making the game"),rt.forEach(r),D=R(j),w=f(j,"P",{});var ze=p(w);G=m(ze,"I started with the space and movement system, trying to recreate aspects of "),H=f(ze,"I",{});var nt=p(H);A=m(nt,"Klonoa"),nt.forEach(r),N=m(ze,`'s\r
    design that I liked. One was the movement around the tunnel, which has a certain sense of\r
    inertia. The tunnel and camera don't immediately rotate to center the player and they don't\r
    immediately stop rotating when the player stops moving to the side. Another was the camera\r
    position, which is slightly below the tunnel's center and angled slightly downward, which\r
    compared to a centered and forward facing camera, as I first tried, is more readable and makes\r
    the space feel larger.`),ze.forEach(r),L=R(j),P=f(j,"P",{});var ge=p(P);x=m(ge,"But for various parts of the movement system, I chose to stray from "),z=f(ge,"I",{});var it=p(z);V=m(it,"Klonoa"),it.forEach(r),C=m(ge,`'s design.\r
    `),U=f(ge,"I",{});var ot=p(U);J=m(ot,"Klonoa"),ot.forEach(r),K=m(ge,` is a rather slow game which suits its tone. But I was interested in making\r
    something more action-oriented, so the player moves much faster than in `),Y=f(ge,"I",{});var st=p(Y);Z=m(st,"Klonoa"),st.forEach(r),$=m(ge,`. Likewise,\r
    `),M=f(ge,"I",{});var lt=p(M);S=m(lt,"Klonoa"),lt.forEach(r),q=m(ge,`\r
    has a midair "flutter" mechanic that aids slow, deliberate platforming. That didn't feel suited to\r
    what I was making, so I left it out. In general, as my game came together, it started to form its\r
    own identity and I moved away from simply recreating a reference. I did, however, arrive at a similar\r
    double jump system to `),Q=f(ge,"I",{});var ht=p(Q);te=m(ht,"Klonoa"),ht.forEach(r),k=m(ge,", though more organically than as a recreation."),ge.forEach(r),W=R(j),ae=f(j,"P",{});var Me=p(ae);ne=m(Me,`Coming up with the double jump system was a memorable moment to me in "finding the fun" in a\r
    system. I had implemented nearly every other mechanic in the game and while testing just\r
    happened to hit a star while midair. It was immediately obvious that doing so should give the\r
    player another jump. This mechanic became a central part of what makes the game fun and\r
    challenging. It's by no means an innovative mechanic (plenty of platformers including `),ee=f(Me,"I",{});var mt=p(ee);re=m(mt,"Klonoa"),mt.forEach(r),E=m(Me,` feature similar mechanics), but the way I arrived at it through making and testing is a process\r
    I hope to repeat.`),Me.forEach(r),B=R(j),me=f(j,"P",{});var Ve=p(me);Ie=m(Ve,`The last thing I made was the level. As another game made in one week, making a boss or a level\r
    with a satisfying end seemed out of scope, so I decided to again diverge from `),be=f(Ve,"I",{});var ct=p(be);ke=m(ct,"Klonoa"),ct.forEach(r),Ee=m(Ve,` and create\r
    an infinite runner. I designed a basic level that could loop, added a scoring system to provide a\r
    clear goal, and linked the score to the player's speed as a basic difficulty ramp. There are a few\r
    issues with the design, such as level readability at high speed and extreme bias towards certain\r
    scoring strategies, but there's nothing beyond fixing and things mostly function as I'd hoped.`),Ve.forEach(r),Se=R(j),$e=f(j,"H3",{});var ft=p($e);Oe=m(ft,"Playing my own games"),ft.forEach(r),Pe=R(j),Ae=f(j,"P",{});var dt=p(Ae);Re=m(dt,`Of all of my games, this is the one I probably enjoy playing the most, which I don't think means\r
    it's better (certainly it's hard to properly enjoy narrative, puzzle, or other\r
    one-time-experience games as their designer, but that doesn't mean they're worse), but it's a\r
    valuable observation to make in developing my design process. I enjoy action-oriented games and\r
    I can apparently make one, at least to my own taste, yet I have rarely made such games. If I\r
    want to make more action-oriented games, I need to question what about my current circumstances,\r
    intuitions, and processes as designer might be drawing me away from doing so.`),dt.forEach(r),Te=R(j),we=f(j,"P",{});var We=p(we);Le=m(We,`One idea is that I often get caught up in the idea of having a higher concept or purpose for the\r
    game than simply to be fun. I avoided that thinking with `),He=f(We,"I",{});var ut=p(He);qe=m(ut,"Stellata Waterway"),ut.forEach(r),Ke=m(We,` because it was\r
    intended as just a mechanical homage. Instead of concept, I was able to focus on small features and\r
    interactions that I enjoyed, and I found that even without a driving concept, new and interesting\r
    ideas came out of the processing of making. Maybe if I want to make more games like this, I need\r
    to think less conceptually and just incrementally build on small features that excite me.`),We.forEach(r),Fe=R(j),je=f(j,"H3",{});var pt=p(je);Ue=m(pt,"Tunnel runners"),pt.forEach(r),xe=R(j),ve=f(j,"P",{class:!0});var Ge=p(ve);Ye=m(Ge,`Since finishing this game, I've also enjoyed hearing what games it reminds people of. People\r
    have likened it to Vectrex games, a sequence in `),De=f(Ge,"I",{});var gt=p(De);Xe=m(gt,"Spyro the Dragon"),gt.forEach(r),Je=m(Ge,`, and\r
    `),Ne=f(Ge,"I",{});var yt=p(Ne);Qe=m(yt,"Sonic the Hedgehog 2"),yt.forEach(r),Ze=m(Ge,`. While none of those were on my mind when making this, it's\r
    interesting to see more instances of what I've come to call "tunnel runners" as a relatively\r
    uncommon spatial system.`),Ge.forEach(r),this.h()},h(){y(u,"href","https://youtu.be/6JQQhQK05SY?t=205"),y(u,"target","_blank"),y(u,"rel","noopener noreferrer"),y(ve,"class","final")},m(j,X){s(j,e,X),o(e,n),o(n,t),o(e,a),o(e,i),o(i,d),o(e,b),o(e,u),o(u,g),o(e,I),s(j,_,X),s(j,v,X),o(v,T),s(j,D,X),s(j,w,X),o(w,G),o(w,H),o(H,A),o(w,N),s(j,L,X),s(j,P,X),o(P,x),o(P,z),o(z,V),o(P,C),o(P,U),o(U,J),o(P,K),o(P,Y),o(Y,Z),o(P,$),o(P,M),o(M,S),o(P,q),o(P,Q),o(Q,te),o(P,k),s(j,W,X),s(j,ae,X),o(ae,ne),o(ae,ee),o(ee,re),o(ae,E),s(j,B,X),s(j,me,X),o(me,Ie),o(me,be),o(be,ke),o(me,Ee),s(j,Se,X),s(j,$e,X),o($e,Oe),s(j,Pe,X),s(j,Ae,X),o(Ae,Re),s(j,Te,X),s(j,we,X),o(we,Le),o(we,He),o(He,qe),o(we,Ke),s(j,Fe,X),s(j,je,X),o(je,Ue),s(j,xe,X),s(j,ve,X),o(ve,Ye),o(ve,De),o(De,Xe),o(ve,Je),o(ve,Ne),o(Ne,Qe),o(ve,Ze)},p:ye,d(j){j&&r(e),j&&r(_),j&&r(v),j&&r(D),j&&r(w),j&&r(L),j&&r(P),j&&r(W),j&&r(ae),j&&r(B),j&&r(me),j&&r(Se),j&&r($e),j&&r(Pe),j&&r(Ae),j&&r(Te),j&&r(we),j&&r(Fe),j&&r(je),j&&r(xe),j&&r(ve)}}}function Bt(l){let e,n;return e=new pe({props:{game:l[0],$$slots:{default:[Wt]},$$scope:{ctx:l}}}),{c(){ce(e.$$.fragment)},l(t){fe(e.$$.fragment,t)},m(t,a){de(e,t,a),n=!0},p(t,[a]){const i={};a&1&&(i.game=t[0]),a&2&&(i.$$scope={dirty:a,ctx:t}),e.$set(i)},i(t){n||(oe(e.$$.fragment,t),n=!0)},o(t){ie(e.$$.fragment,t),n=!1},d(t){ue(e,t)}}}function Ct(l,e,n){let{game:t}=e;return l.$$set=a=>{"game"in a&&n(0,t=a.game)},[t]}class qt extends se{constructor(e){super(),le(this,e,Ct,Bt,he,{game:0})}}function Kt(l){let e,n,t,a,i,d,b,u,g,I,_,v,T,D,w,G,H,A,N,L,P,x,z,V,C,U,J,K,Y,Z,$,M;return{c(){e=c("h3"),n=h("Concept"),t=O(),a=c("p"),i=h(`The initial idea for this game came from the prompt "non-human POV." Approaching this prompt, I\r
    knew I wanted to make a game from the perspective of an animal with a much more limited\r
    perception of the world than humans. First, I feel such perspectives are underexplored in games,\r
    and second, I had one week to make the game and thought a highly restricted perspective would be\r
    more reasonable to implement in that timeframe.`),d=O(),b=c("p"),u=h(`My first idea was to make a game about a jellyfish, but a bit of research suggested to me that\r
    both a jellyfish's sensory and locomotive systems are much more complicated than I assumed. But\r
    in my research, I happened to find `),g=c("a"),I=h("Dr. Helm's blog"),_=h(`\r
    and\r
    `),v=c("a"),T=h("her article"),D=h(` about the violet snail caught my eye. The perspective depicted in the article was exactly what\r
    I was looking for, and with its descriptive writing, dramatic tone, and second person perspective,\r
    it felt natural feature the text in the game.`),w=O(),G=c("h3"),H=h("Development"),A=O(),N=c("p"),L=h(`With the concept and permission from Dr. Helm to use her text, putting together the actual game\r
    was relatively straightforward as I aimed to emphasize and add to the text through pacing,\r
    visual representation, and interaction.`),P=O(),x=c("p"),z=h(`Concerning pacing, the source text has a very clear voice and sense of drama, so I took care to\r
    split the text into sort of poetic lines and time each line accordingly. Where I saw lists or\r
    parallel phrases in the text, I created parallel lines and paced them as continuous sequences.\r
    Where I saw turns in the narrative, I let the critical phrases stand alone and/or put a pause.`),V=O(),C=c("p"),U=h(`Creating the visual representation was a less clear process. Aside from the technical\r
    difficulties of working with some new tools and learning more about shaders, interpretation was\r
    challenge. While the source text is very descriptive, there are some gray areas, such as to what\r
    extent the snail is blind (completely blind versus an extremely limited sense of light). With\r
    the limited timeframe, I made choices based on intuition and convenience while trying to achieve\r
    a balance between creative license and realism. I wanted to make the game interesting to play\r
    but not misrepresent the science.`),J=O(),K=c("p"),Y=h(`For interaction, I wanted to help the player engage with the snail's perspective beyond just\r
    reading about it. I avoided anything complex that might conflict with the simple existence of\r
    the snail. Instead I focused on minimalistically representing the actions described in the text,\r
    looking, clinging, and making bubbles. I also decided that none of these interactions should\r
    significantly impact what happens in the game (for example, letting go of Space causing you to\r
    stop clinging and sink) both for simplicity's sake and because the closing point of the text is\r
    that the perception of effort and struggle that we impose on the snail isn't necessarily\r
    accurate, and therefore the snail may not need to consciously cling to its raft at all.`),Z=O(),$=c("p"),M=h(`All said and done, I'm very happy with how the game turned out, and there are honestly no major\r
    changes I would make in retrospect. Thanks to Dr. Rebecca Helm for generously allowing me to use\r
    her text and for her immensely positive response to the result.`),this.h()},l(S){e=f(S,"H3",{});var q=p(e);n=m(q,"Concept"),q.forEach(r),t=R(S),a=f(S,"P",{});var Q=p(a);i=m(Q,`The initial idea for this game came from the prompt "non-human POV." Approaching this prompt, I\r
    knew I wanted to make a game from the perspective of an animal with a much more limited\r
    perception of the world than humans. First, I feel such perspectives are underexplored in games,\r
    and second, I had one week to make the game and thought a highly restricted perspective would be\r
    more reasonable to implement in that timeframe.`),Q.forEach(r),d=R(S),b=f(S,"P",{});var te=p(b);u=m(te,`My first idea was to make a game about a jellyfish, but a bit of research suggested to me that\r
    both a jellyfish's sensory and locomotive systems are much more complicated than I assumed. But\r
    in my research, I happened to find `),g=f(te,"A",{href:!0,target:!0,rel:!0});var k=p(g);I=m(k,"Dr. Helm's blog"),k.forEach(r),_=m(te,`\r
    and\r
    `),v=f(te,"A",{href:!0,target:!0,rel:!0});var W=p(v);T=m(W,"her article"),W.forEach(r),D=m(te,` about the violet snail caught my eye. The perspective depicted in the article was exactly what\r
    I was looking for, and with its descriptive writing, dramatic tone, and second person perspective,\r
    it felt natural feature the text in the game.`),te.forEach(r),w=R(S),G=f(S,"H3",{});var ae=p(G);H=m(ae,"Development"),ae.forEach(r),A=R(S),N=f(S,"P",{});var ne=p(N);L=m(ne,`With the concept and permission from Dr. Helm to use her text, putting together the actual game\r
    was relatively straightforward as I aimed to emphasize and add to the text through pacing,\r
    visual representation, and interaction.`),ne.forEach(r),P=R(S),x=f(S,"P",{});var ee=p(x);z=m(ee,`Concerning pacing, the source text has a very clear voice and sense of drama, so I took care to\r
    split the text into sort of poetic lines and time each line accordingly. Where I saw lists or\r
    parallel phrases in the text, I created parallel lines and paced them as continuous sequences.\r
    Where I saw turns in the narrative, I let the critical phrases stand alone and/or put a pause.`),ee.forEach(r),V=R(S),C=f(S,"P",{});var re=p(C);U=m(re,`Creating the visual representation was a less clear process. Aside from the technical\r
    difficulties of working with some new tools and learning more about shaders, interpretation was\r
    challenge. While the source text is very descriptive, there are some gray areas, such as to what\r
    extent the snail is blind (completely blind versus an extremely limited sense of light). With\r
    the limited timeframe, I made choices based on intuition and convenience while trying to achieve\r
    a balance between creative license and realism. I wanted to make the game interesting to play\r
    but not misrepresent the science.`),re.forEach(r),J=R(S),K=f(S,"P",{});var E=p(K);Y=m(E,`For interaction, I wanted to help the player engage with the snail's perspective beyond just\r
    reading about it. I avoided anything complex that might conflict with the simple existence of\r
    the snail. Instead I focused on minimalistically representing the actions described in the text,\r
    looking, clinging, and making bubbles. I also decided that none of these interactions should\r
    significantly impact what happens in the game (for example, letting go of Space causing you to\r
    stop clinging and sink) both for simplicity's sake and because the closing point of the text is\r
    that the perception of effort and struggle that we impose on the snail isn't necessarily\r
    accurate, and therefore the snail may not need to consciously cling to its raft at all.`),E.forEach(r),Z=R(S),$=f(S,"P",{class:!0});var B=p($);M=m(B,`All said and done, I'm very happy with how the game turned out, and there are honestly no major\r
    changes I would make in retrospect. Thanks to Dr. Rebecca Helm for generously allowing me to use\r
    her text and for her immensely positive response to the result.`),B.forEach(r),this.h()},h(){y(g,"href","https://jellybiologist.com/"),y(g,"target","_blank"),y(g,"rel","noopener noreferrer"),y(v,"href","https://jellybiologist.com/2020/08/03/the-harrowing-life-of-the-violet-snail/"),y(v,"target","_blank"),y(v,"rel","noopener noreferrer"),y($,"class","final")},m(S,q){s(S,e,q),o(e,n),s(S,t,q),s(S,a,q),o(a,i),s(S,d,q),s(S,b,q),o(b,u),o(b,g),o(g,I),o(b,_),o(b,v),o(v,T),o(b,D),s(S,w,q),s(S,G,q),o(G,H),s(S,A,q),s(S,N,q),o(N,L),s(S,P,q),s(S,x,q),o(x,z),s(S,V,q),s(S,C,q),o(C,U),s(S,J,q),s(S,K,q),o(K,Y),s(S,Z,q),s(S,$,q),o($,M)},p:ye,d(S){S&&r(e),S&&r(t),S&&r(a),S&&r(d),S&&r(b),S&&r(w),S&&r(G),S&&r(A),S&&r(N),S&&r(P),S&&r(x),S&&r(V),S&&r(C),S&&r(J),S&&r(K),S&&r(Z),S&&r($)}}}function Ut(l){let e,n;return e=new pe({props:{game:l[0],$$slots:{default:[Kt]},$$scope:{ctx:l}}}),{c(){ce(e.$$.fragment)},l(t){fe(e.$$.fragment,t)},m(t,a){de(e,t,a),n=!0},p(t,[a]){const i={};a&1&&(i.game=t[0]),a&2&&(i.$$scope={dirty:a,ctx:t}),e.$set(i)},i(t){n||(oe(e.$$.fragment,t),n=!0)},o(t){ie(e.$$.fragment,t),n=!1},d(t){ue(e,t)}}}function Yt(l,e,n){let{game:t}=e;return l.$$set=a=>{"game"in a&&n(0,t=a.game)},[t]}class Xt extends se{constructor(e){super(),le(this,e,Yt,Ut,he,{game:0})}}function Jt(l){let e,n,t,a,i,d,b,u,g,I,_,v,T,D,w,G,H,A,N,L,P,x,z,V,C,U,J,K,Y,Z;return{c(){e=c("h3"),n=h("Sound toys and instruments"),t=O(),a=c("p"),i=h(`I like to think about sound toys as musical instruments. I don't mean that they should be suited\r
    for performance or be capable of producing conventional music, but that they are interfaces that\r
    map to sound, and the affordances of their interfaces define them. There isn't a fundamental\r
    difference between the input-mapping-to-sound structure of an instrument in a DAW and `),d=c("i"),b=h("Electroplankton"),u=h("; they just differ in their affordances."),g=O(),I=c("p"),_=h(`Maybe that's self-evident (the structure described is extremely broad), but the point is that\r
    the affordances of an instrument's interface define that instrument even more than its sound.\r
    This is important because while game engines, DAWs, and other digital sound-making tools can\r
    produce the same sounds, they have vastly different built-in affordances, which will tend to be\r
    expressed in their instruments. If I want to make a certain kind of instrument, I should choose\r
    a tool with the appropriate affordances. If I want to use a specific tool to make an instrument,\r
    I should leverage what that tool is good at.`),v=O(),T=c("h3"),D=h("Stones"),w=O(),G=c("p"),H=c("i"),A=h("Stones"),N=h(` is a small exploration of one special affordance of Unity and many game engines: physics\r
    simulation. It uses a 3D point-and-click interface to move around blocks whose linear and angular\r
    velocity map to sound.`),L=O(),P=c("p"),x=h(`The sound generation is actually extremely simple. Each block plays a looping drone sound with a\r
    different sound for each texture, then linear velocity controls its volume and angular velocity\r
    controls its pitch. Even with this simple mapping, the physics can produce some very dynamic\r
    sounds, such as impact transients when the velocities abruptly change on collision. The\r
    different weights of each block texture also create different volume and pitch curves when\r
    dragging them around.`),z=O(),V=c("h3"),C=h("Problems"),U=O(),J=c("p"),K=c("i"),Y=h("Stones"),Z=h(` definitely has some issues. Some of the physics are too sensitive, there's an odd disconnect\r
    between the player cursor and moving around blocks, the isometric view and lack of lighting hurts\r
    depth perception, and I don't think the pitch quantization works. Nevertheless, I think it's an interesting\r
    prototype and an idea I might like to do more with at some point.`),this.h()},l($){e=f($,"H3",{});var M=p(e);n=m(M,"Sound toys and instruments"),M.forEach(r),t=R($),a=f($,"P",{});var S=p(a);i=m(S,`I like to think about sound toys as musical instruments. I don't mean that they should be suited\r
    for performance or be capable of producing conventional music, but that they are interfaces that\r
    map to sound, and the affordances of their interfaces define them. There isn't a fundamental\r
    difference between the input-mapping-to-sound structure of an instrument in a DAW and `),d=f(S,"I",{});var q=p(d);b=m(q,"Electroplankton"),q.forEach(r),u=m(S,"; they just differ in their affordances."),S.forEach(r),g=R($),I=f($,"P",{});var Q=p(I);_=m(Q,`Maybe that's self-evident (the structure described is extremely broad), but the point is that\r
    the affordances of an instrument's interface define that instrument even more than its sound.\r
    This is important because while game engines, DAWs, and other digital sound-making tools can\r
    produce the same sounds, they have vastly different built-in affordances, which will tend to be\r
    expressed in their instruments. If I want to make a certain kind of instrument, I should choose\r
    a tool with the appropriate affordances. If I want to use a specific tool to make an instrument,\r
    I should leverage what that tool is good at.`),Q.forEach(r),v=R($),T=f($,"H3",{});var te=p(T);D=m(te,"Stones"),te.forEach(r),w=R($),G=f($,"P",{});var k=p(G);H=f(k,"I",{});var W=p(H);A=m(W,"Stones"),W.forEach(r),N=m(k,` is a small exploration of one special affordance of Unity and many game engines: physics\r
    simulation. It uses a 3D point-and-click interface to move around blocks whose linear and angular\r
    velocity map to sound.`),k.forEach(r),L=R($),P=f($,"P",{});var ae=p(P);x=m(ae,`The sound generation is actually extremely simple. Each block plays a looping drone sound with a\r
    different sound for each texture, then linear velocity controls its volume and angular velocity\r
    controls its pitch. Even with this simple mapping, the physics can produce some very dynamic\r
    sounds, such as impact transients when the velocities abruptly change on collision. The\r
    different weights of each block texture also create different volume and pitch curves when\r
    dragging them around.`),ae.forEach(r),z=R($),V=f($,"H3",{});var ne=p(V);C=m(ne,"Problems"),ne.forEach(r),U=R($),J=f($,"P",{class:!0});var ee=p(J);K=f(ee,"I",{});var re=p(K);Y=m(re,"Stones"),re.forEach(r),Z=m(ee,` definitely has some issues. Some of the physics are too sensitive, there's an odd disconnect\r
    between the player cursor and moving around blocks, the isometric view and lack of lighting hurts\r
    depth perception, and I don't think the pitch quantization works. Nevertheless, I think it's an interesting\r
    prototype and an idea I might like to do more with at some point.`),ee.forEach(r),this.h()},h(){y(J,"class","final")},m($,M){s($,e,M),o(e,n),s($,t,M),s($,a,M),o(a,i),o(a,d),o(d,b),o(a,u),s($,g,M),s($,I,M),o(I,_),s($,v,M),s($,T,M),o(T,D),s($,w,M),s($,G,M),o(G,H),o(H,A),o(G,N),s($,L,M),s($,P,M),o(P,x),s($,z,M),s($,V,M),o(V,C),s($,U,M),s($,J,M),o(J,K),o(K,Y),o(J,Z)},p:ye,d($){$&&r(e),$&&r(t),$&&r(a),$&&r(g),$&&r(I),$&&r(v),$&&r(T),$&&r(w),$&&r(G),$&&r(L),$&&r(P),$&&r(z),$&&r(V),$&&r(U),$&&r(J)}}}function Qt(l){let e,n;return e=new pe({props:{game:l[0],$$slots:{default:[Jt]},$$scope:{ctx:l}}}),{c(){ce(e.$$.fragment)},l(t){fe(e.$$.fragment,t)},m(t,a){de(e,t,a),n=!0},p(t,[a]){const i={};a&1&&(i.game=t[0]),a&2&&(i.$$scope={dirty:a,ctx:t}),e.$set(i)},i(t){n||(oe(e.$$.fragment,t),n=!0)},o(t){ie(e.$$.fragment,t),n=!1},d(t){ue(e,t)}}}function Zt(l,e,n){let{game:t}=e;return l.$$set=a=>{"game"in a&&n(0,t=a.game)},[t]}class ea extends se{constructor(e){super(),le(this,e,Zt,Qt,he,{game:0})}}function ta(l){let e,n,t,a,i,d,b,u,g,I,_,v,T,D,w,G,H;return{c(){e=c("p"),n=h(`goodbye.monster is an ongoing project. Players meet and care for monsters in a dark and\r
    ambiguous world. In many ways, it's a response to the instrumental role of creatures in creature\r
    collector games.`),t=O(),a=c("p"),i=h("Made alongside "),d=c("a"),b=h("Beckett"),u=h(", "),g=c("a"),I=h("Lorg"),_=h(`,\r
    and `),v=c("a"),T=h("Rook"),D=h("."),w=O(),G=c("iframe"),this.h()},l(A){e=f(A,"P",{});var N=p(e);n=m(N,`goodbye.monster is an ongoing project. Players meet and care for monsters in a dark and\r
    ambiguous world. In many ways, it's a response to the instrumental role of creatures in creature\r
    collector games.`),N.forEach(r),t=R(A),a=f(A,"P",{});var L=p(a);i=m(L,"Made alongside "),d=f(L,"A",{href:!0,target:!0,rel:!0});var P=p(d);b=m(P,"Beckett"),P.forEach(r),u=m(L,", "),g=f(L,"A",{href:!0,target:!0,rel:!0});var x=p(g);I=m(x,"Lorg"),x.forEach(r),_=m(L,`,\r
    and `),v=f(L,"A",{href:!0,target:!0,rel:!0});var z=p(v);T=m(z,"Rook"),z.forEach(r),D=m(L,"."),L.forEach(r),w=R(A),G=f(A,"IFRAME",{title:!0,src:!0,frameborder:!0,allow:!0,class:!0}),p(G).forEach(r),this.h()},h(){y(d,"href","https://beckettrowan.itch.io/"),y(d,"target","_blank"),y(d,"rel","noopener noreferrer"),y(g,"href","https://lorgoncewas.itch.io/"),y(g,"target","_blank"),y(g,"rel","noopener noreferrer"),y(v,"href","https://rookliu.itch.io/"),y(v,"target","_blank"),y(v,"rel","noopener noreferrer"),y(G,"title","goodbye.monster gameplay video"),_e(G.src,H="https://player.vimeo.com/video/851962984?h=d7ced28ac1&byline=0&portrait=0")||y(G,"src",H),y(G,"frameborder","2"),y(G,"allow","autoplay; fullscreen; picture-in-picture"),G.allowFullscreen=!0,y(G,"class","svelte-oqzu8p")},m(A,N){s(A,e,N),o(e,n),s(A,t,N),s(A,a,N),o(a,i),o(a,d),o(d,b),o(a,u),o(a,g),o(g,I),o(a,_),o(a,v),o(v,T),o(a,D),s(A,w,N),s(A,G,N)},p:ye,d(A){A&&r(e),A&&r(t),A&&r(a),A&&r(w),A&&r(G)}}}function aa(l){let e,n;return e=new pe({props:{game:l[0],$$slots:{default:[ta]},$$scope:{ctx:l}}}),{c(){ce(e.$$.fragment)},l(t){fe(e.$$.fragment,t)},m(t,a){de(e,t,a),n=!0},p(t,[a]){const i={};a&1&&(i.game=t[0]),a&2&&(i.$$scope={dirty:a,ctx:t}),e.$set(i)},i(t){n||(oe(e.$$.fragment,t),n=!0)},o(t){ie(e.$$.fragment,t),n=!1},d(t){ue(e,t)}}}function ra(l,e,n){let{game:t}=e;return l.$$set=a=>{"game"in a&&n(0,t=a.game)},[t]}class na extends se{constructor(e){super(),le(this,e,ra,aa,he,{game:0})}}function ia(l){let e,n,t,a,i,d,b,u,g,I,_,v,T,D,w,G,H,A,N,L,P,x,z,V,C,U,J,K,Y,Z,$,M,S,q,Q,te,k,W,ae,ne,ee,re;return{c(){e=c("p"),n=c("i"),t=h("Grid Garden"),a=h(` is my attempt at an incremental game for the spreadsheet. My goal was to\r
    leverage the ways we normally interact with spreadsheets - typing, copying, pasting, selecting,\r
    and deleting text in cells - and the data organization affordances of the grid. I was also\r
    inspired by\r
    `),i=c("a"),d=h("Everest Pipkin's "),b=c("i"),u=h("Barnacle Goose"),g=h(` and its item combinations and non-clicker incremental systems, which both felt suited for adaptation\r
    to the spreadsheet.`),I=O(),_=c("h3"),v=h("Process"),T=O(),D=c("p"),w=h(`I started with the ideas of creating items by typing, combining items, and creating an abstract\r
    garden on the grid of the spreadsheet. From there I decided on treating the spreadsheet as a\r
    space in which items can be combined and compartmentalizing item creation to an item that has a\r
    sort of input field. That then presented the question of what should happen when the player\r
    tries to create an invalid item or makes an error. While it may have worked for nothing to\r
    happen, it seemed more interesting to convert the invalid text by length into an item, compost,\r
    which could serve as the substrate for the garden. Around the same time, I thought of digging up\r
    buried items as another interaction, as only typing into a single cell to generate items felt\r
    too restrictive.`),G=O(),H=c("p"),A=h(`I then broke down the information that might need to exist for a cell in the garden and for an\r
    item. A single cell might need to hold item text placed by the player, a flag for compost, and\r
    text or an ID for a buried item. Items might need counts, descriptions, recipes, and visual\r
    information.`),N=O(),L=c("p"),P=h(`As I figured out what information was needed, I also started to lay out the structure of the\r
    workbook. I realized that for the amount of information a given cell needed it would be easiest\r
    to use multiple sheets in parallel, such that A1 of one sheet corresponds to A1 of the others. I\r
    created the main garden sheet that uses cell fills and conditional formatting for display and\r
    other only holds item text, a surface sheet that holds compost information, and an underground\r
    sheet that holds buried items. Structuring the information for items was simpler as that could\r
    exist in basic tables, organized in different sheets, and be easily accessed with Match and\r
    VLookup functions.`),x=O(),z=c("p"),V=h(`From there, implementation was relatively straightforward, learning VBA aside. And the project\r
    does use a significant amount of VBA, but its purpose is not to fight the inherent affordances\r
    of the spreadsheet. Rather the code mainly serves to apply complex comparisons and operations\r
    across worksheets and react to user input in a way that basic Excel functions cannot.`),C=O(),U=c("h3"),J=h("VBA and Excel"),K=O(),Y=c("p"),Z=h(`Working in VBA was a challenge. I don't like the syntax and the errors are not especially clear\r
    or helpful. Working in Excel generally, however, was convenient in that it's very natural to\r
    edit and access tabular information, such as the inventory or item recipes. It calls for a\r
    different, more data driven kind of design and thinking than I'm used to and which I hope to\r
    transfer to games outside of spreadsheets.`),$=O(),M=c("h3"),S=h("Shovels"),q=O(),Q=c("p"),te=h(`A small feature I really like and would like to highlight is the dig-area scaling with shovels.\r
    Aside from the comedic gaminess of more shovels allowing you to dig more efficiently, I like the\r
    scaling system I ended up with where each shovel allows you to dig in an area one row or column\r
    larger. I first tried having each shovel increase the area by one cell, but the growth of that\r
    felt much too slow and didn't adequately incentivize making shovels. Squaring the number of\r
    shovels is another obvious option, and one that might even work well, but I suspected it would\r
    scale too quickly. The row and column system is a middle ground. The current system may also be\r
    somewhat unintuitive, but in a game that isn't too complicated overall, I think the bit of extra\r
    complexity in one of the primary interactions (digging) is a benefit.`),k=O(),W=c("h3"),ae=h("Improvement"),ne=O(),ee=c("p"),re=h(`If I had more time to work on this or were to continue work on it, I'd look at tuning the\r
    incremental systems, which I didn't have much time to do, improving logging, easing recipe\r
    discovery, and adding more items, especially items with special behaviors like the materializer\r
    and automaton. One of the more exciting things to me currently is the little machine that can be\r
    created by placing an automaton below a materializer, and I would like to have more of those be\r
    possible. And of course, there are probably bugs that I haven't found and fixed.`),this.h()},l(E){e=f(E,"P",{});var B=p(e);n=f(B,"I",{});var me=p(n);t=m(me,"Grid Garden"),me.forEach(r),a=m(B,` is my attempt at an incremental game for the spreadsheet. My goal was to\r
    leverage the ways we normally interact with spreadsheets - typing, copying, pasting, selecting,\r
    and deleting text in cells - and the data organization affordances of the grid. I was also\r
    inspired by\r
    `),i=f(B,"A",{href:!0,target:!0,rel:!0});var Ie=p(i);d=m(Ie,"Everest Pipkin's "),b=f(Ie,"I",{});var be=p(b);u=m(be,"Barnacle Goose"),be.forEach(r),Ie.forEach(r),g=m(B,` and its item combinations and non-clicker incremental systems, which both felt suited for adaptation\r
    to the spreadsheet.`),B.forEach(r),I=R(E),_=f(E,"H3",{});var ke=p(_);v=m(ke,"Process"),ke.forEach(r),T=R(E),D=f(E,"P",{});var Ee=p(D);w=m(Ee,`I started with the ideas of creating items by typing, combining items, and creating an abstract\r
    garden on the grid of the spreadsheet. From there I decided on treating the spreadsheet as a\r
    space in which items can be combined and compartmentalizing item creation to an item that has a\r
    sort of input field. That then presented the question of what should happen when the player\r
    tries to create an invalid item or makes an error. While it may have worked for nothing to\r
    happen, it seemed more interesting to convert the invalid text by length into an item, compost,\r
    which could serve as the substrate for the garden. Around the same time, I thought of digging up\r
    buried items as another interaction, as only typing into a single cell to generate items felt\r
    too restrictive.`),Ee.forEach(r),G=R(E),H=f(E,"P",{});var Se=p(H);A=m(Se,`I then broke down the information that might need to exist for a cell in the garden and for an\r
    item. A single cell might need to hold item text placed by the player, a flag for compost, and\r
    text or an ID for a buried item. Items might need counts, descriptions, recipes, and visual\r
    information.`),Se.forEach(r),N=R(E),L=f(E,"P",{});var $e=p(L);P=m($e,`As I figured out what information was needed, I also started to lay out the structure of the\r
    workbook. I realized that for the amount of information a given cell needed it would be easiest\r
    to use multiple sheets in parallel, such that A1 of one sheet corresponds to A1 of the others. I\r
    created the main garden sheet that uses cell fills and conditional formatting for display and\r
    other only holds item text, a surface sheet that holds compost information, and an underground\r
    sheet that holds buried items. Structuring the information for items was simpler as that could\r
    exist in basic tables, organized in different sheets, and be easily accessed with Match and\r
    VLookup functions.`),$e.forEach(r),x=R(E),z=f(E,"P",{});var Oe=p(z);V=m(Oe,`From there, implementation was relatively straightforward, learning VBA aside. And the project\r
    does use a significant amount of VBA, but its purpose is not to fight the inherent affordances\r
    of the spreadsheet. Rather the code mainly serves to apply complex comparisons and operations\r
    across worksheets and react to user input in a way that basic Excel functions cannot.`),Oe.forEach(r),C=R(E),U=f(E,"H3",{});var Pe=p(U);J=m(Pe,"VBA and Excel"),Pe.forEach(r),K=R(E),Y=f(E,"P",{});var Ae=p(Y);Z=m(Ae,`Working in VBA was a challenge. I don't like the syntax and the errors are not especially clear\r
    or helpful. Working in Excel generally, however, was convenient in that it's very natural to\r
    edit and access tabular information, such as the inventory or item recipes. It calls for a\r
    different, more data driven kind of design and thinking than I'm used to and which I hope to\r
    transfer to games outside of spreadsheets.`),Ae.forEach(r),$=R(E),M=f(E,"H3",{});var Re=p(M);S=m(Re,"Shovels"),Re.forEach(r),q=R(E),Q=f(E,"P",{});var Te=p(Q);te=m(Te,`A small feature I really like and would like to highlight is the dig-area scaling with shovels.\r
    Aside from the comedic gaminess of more shovels allowing you to dig more efficiently, I like the\r
    scaling system I ended up with where each shovel allows you to dig in an area one row or column\r
    larger. I first tried having each shovel increase the area by one cell, but the growth of that\r
    felt much too slow and didn't adequately incentivize making shovels. Squaring the number of\r
    shovels is another obvious option, and one that might even work well, but I suspected it would\r
    scale too quickly. The row and column system is a middle ground. The current system may also be\r
    somewhat unintuitive, but in a game that isn't too complicated overall, I think the bit of extra\r
    complexity in one of the primary interactions (digging) is a benefit.`),Te.forEach(r),k=R(E),W=f(E,"H3",{});var we=p(W);ae=m(we,"Improvement"),we.forEach(r),ne=R(E),ee=f(E,"P",{class:!0});var Le=p(ee);re=m(Le,`If I had more time to work on this or were to continue work on it, I'd look at tuning the\r
    incremental systems, which I didn't have much time to do, improving logging, easing recipe\r
    discovery, and adding more items, especially items with special behaviors like the materializer\r
    and automaton. One of the more exciting things to me currently is the little machine that can be\r
    created by placing an automaton below a materializer, and I would like to have more of those be\r
    possible. And of course, there are probably bugs that I haven't found and fixed.`),Le.forEach(r),this.h()},h(){y(i,"href","https://everest-pipkin.com/barnacle-goose/"),y(i,"target","_blank"),y(i,"rel","noopener noreferrer"),y(ee,"class","final")},m(E,B){s(E,e,B),o(e,n),o(n,t),o(e,a),o(e,i),o(i,d),o(i,b),o(b,u),o(e,g),s(E,I,B),s(E,_,B),o(_,v),s(E,T,B),s(E,D,B),o(D,w),s(E,G,B),s(E,H,B),o(H,A),s(E,N,B),s(E,L,B),o(L,P),s(E,x,B),s(E,z,B),o(z,V),s(E,C,B),s(E,U,B),o(U,J),s(E,K,B),s(E,Y,B),o(Y,Z),s(E,$,B),s(E,M,B),o(M,S),s(E,q,B),s(E,Q,B),o(Q,te),s(E,k,B),s(E,W,B),o(W,ae),s(E,ne,B),s(E,ee,B),o(ee,re)},p:ye,d(E){E&&r(e),E&&r(I),E&&r(_),E&&r(T),E&&r(D),E&&r(G),E&&r(H),E&&r(N),E&&r(L),E&&r(x),E&&r(z),E&&r(C),E&&r(U),E&&r(K),E&&r(Y),E&&r($),E&&r(M),E&&r(q),E&&r(Q),E&&r(k),E&&r(W),E&&r(ne),E&&r(ee)}}}function oa(l){let e,n;return e=new pe({props:{game:l[0],$$slots:{default:[ia]},$$scope:{ctx:l}}}),{c(){ce(e.$$.fragment)},l(t){fe(e.$$.fragment,t)},m(t,a){de(e,t,a),n=!0},p(t,[a]){const i={};a&1&&(i.game=t[0]),a&2&&(i.$$scope={dirty:a,ctx:t}),e.$set(i)},i(t){n||(oe(e.$$.fragment,t),n=!0)},o(t){ie(e.$$.fragment,t),n=!1},d(t){ue(e,t)}}}function sa(l,e,n){let{game:t}=e;return l.$$set=a=>{"game"in a&&n(0,t=a.game)},[t]}class la extends se{constructor(e){super(),le(this,e,sa,oa,he,{game:0})}}function ha(l){let e,n,t,a,i,d,b,u,g,I,_,v,T,D,w,G,H,A,N,L,P,x,z,V,C,U,J,K,Y,Z,$,M,S,q,Q,te;return{c(){e=c("p"),n=h(`My initial concept for Horizon was a space travel incremental game in which the main resource is\r
    the spacecraft's velocity. In particular, I was interested in the idea of managing a rate as a\r
    resource instead of a simple count, as is typical in incremental games.`),t=O(),a=c("p"),i=h(`I had doubts at first that the idea was at all viable if I were to maintain some sense of\r
    physical realism. Prior to this project, my knowledge of the physics involved in this kind of\r
    scenario was limited to how velocity cannot exceed lightspeed (seemingly a big problem for an\r
    incremental game about velocity) and a vague idea of what time dilation is. However, after doing\r
    some reading about special relativity, I found that the physics don't conflict with my concept\r
    at all, and while they do complicate it, they also suggest some interesting system dynamics if I\r
    feature two reference frames. Without going into too much detail here, much thought has gone\r
    into the hypothetical \u201Crelativistic rocket,\u201D which while unrealistic with today's technology,\r
    engages with real physics and can certainly work in a game. (This article by Philip Gibbs\r
    summarizes most of the physics and science that inspired Horizon).`),d=O(),b=c("h3"),u=h("Implementation & Systems"),g=O(),I=c("p"),_=h(`Following ideation, research, and a bit of basic modelling to check that the idea seemed\r
    numerically viable, I moved on to implementation. As with systems in general, the best way to\r
    build an incremental game seems to be incrementally, starting with something simple, then adding\r
    components, so thats what I tried to do. I started with a basic system that takes a given thrust\r
    and increments a velocity using the correct math. From there I added engines to control the\r
    thrust, fuel and material to manage those engines, a research system to upgrades the engines,\r
    and so on. Where possible, but secondary to maintaining physical realism, I tried to make\r
    systems simple, as my premise had complicated things enough.`),v=O(),T=c("figure"),D=c("img"),G=O(),H=c("figcaption"),A=h(`A diagram of all the major components of the systems. The Lorentz factor, a quantification of\r
      effects like time dilation, creates a crucial point of feedback as it increases with velocity\r
      and increases the rate of research.`),N=O(),L=c("h3"),P=h("Challenges"),x=O(),z=c("p"),V=h(`A major challenge was balancing realism against playability. Of course, there isn't really a\r
    need to attempt realism at all. Even if I ignored lightspeed as a limit, many players wouldn't\r
    care about or even notice the lack of realism, besides that I myself don't often value realism\r
    in games. Nevertheless, for Horizon, I wanted a sense of realism if only because the physics\r
    interest me and maybe doing so holds some educational value.`),C=O(),U=c("p"),J=h(`That said I still had to forgo many potential features. I decided as a rule that unless I had a\r
    reason other than realism to include a feature, I wouldn't include it, but whatever I did\r
    include I would make some effort to make realistic. For an incremental game, this eliminated\r
    many features, and what remained was reasonable to manage. Even still, I had to make compromises\r
    on some features: research times are extremely short, the fuel capture system assumes there's\r
    much more gas in space than in reality (by about 10 orders of magnitude), and faster-than-light\r
    communication, which is fundamental to the game's premise, is not possible according to the\r
    no-communication theorem. But few players would notice or care about these things anyway.`),K=O(),Y=c("h3"),Z=h("Review"),$=O(),M=c("p"),S=h(`Overall, I'm quite happy with Horizon so far. I think it captures the interesting parts of its\r
    premise without being over-complicated, and aesthetically it's very crunchy and numerical in a\r
    way that I personally like.`),q=O(),Q=c("p"),te=h(`There are plenty of issues though. General clarity could be improved; some elements might be\r
    better represented graphically than numerically. I'd like there to be more feedback from Horizon\r
    to Earth (as suggested by Frank Lantz), like a data collection system to unlock research topics.\r
    And probably most lacking is the arc of progression. The start is very slow \u2013 in fact the\r
    combustion engines are so inefficient as to be basically a waste of fuel (maybe another place I\r
    should've compromised on realism!) \u2013 and the later stages of the game just spiral upward and end\r
    nowhere. But these are good issues in that they inspire ideas, so I think the current build at\r
    least serves as a strong proof of concept should I choose to work on this further.`),this.h()},l(k){e=f(k,"P",{});var W=p(e);n=m(W,`My initial concept for Horizon was a space travel incremental game in which the main resource is\r
    the spacecraft's velocity. In particular, I was interested in the idea of managing a rate as a\r
    resource instead of a simple count, as is typical in incremental games.`),W.forEach(r),t=R(k),a=f(k,"P",{});var ae=p(a);i=m(ae,`I had doubts at first that the idea was at all viable if I were to maintain some sense of\r
    physical realism. Prior to this project, my knowledge of the physics involved in this kind of\r
    scenario was limited to how velocity cannot exceed lightspeed (seemingly a big problem for an\r
    incremental game about velocity) and a vague idea of what time dilation is. However, after doing\r
    some reading about special relativity, I found that the physics don't conflict with my concept\r
    at all, and while they do complicate it, they also suggest some interesting system dynamics if I\r
    feature two reference frames. Without going into too much detail here, much thought has gone\r
    into the hypothetical \u201Crelativistic rocket,\u201D which while unrealistic with today's technology,\r
    engages with real physics and can certainly work in a game. (This article by Philip Gibbs\r
    summarizes most of the physics and science that inspired Horizon).`),ae.forEach(r),d=R(k),b=f(k,"H3",{});var ne=p(b);u=m(ne,"Implementation & Systems"),ne.forEach(r),g=R(k),I=f(k,"P",{});var ee=p(I);_=m(ee,`Following ideation, research, and a bit of basic modelling to check that the idea seemed\r
    numerically viable, I moved on to implementation. As with systems in general, the best way to\r
    build an incremental game seems to be incrementally, starting with something simple, then adding\r
    components, so thats what I tried to do. I started with a basic system that takes a given thrust\r
    and increments a velocity using the correct math. From there I added engines to control the\r
    thrust, fuel and material to manage those engines, a research system to upgrades the engines,\r
    and so on. Where possible, but secondary to maintaining physical realism, I tried to make\r
    systems simple, as my premise had complicated things enough.`),ee.forEach(r),v=R(k),T=f(k,"FIGURE",{class:!0});var re=p(T);D=f(re,"IMG",{src:!0,alt:!0,class:!0}),G=R(re),H=f(re,"FIGCAPTION",{class:!0});var E=p(H);A=m(E,`A diagram of all the major components of the systems. The Lorentz factor, a quantification of\r
      effects like time dilation, creates a crucial point of feedback as it increases with velocity\r
      and increases the rate of research.`),E.forEach(r),re.forEach(r),N=R(k),L=f(k,"H3",{});var B=p(L);P=m(B,"Challenges"),B.forEach(r),x=R(k),z=f(k,"P",{});var me=p(z);V=m(me,`A major challenge was balancing realism against playability. Of course, there isn't really a\r
    need to attempt realism at all. Even if I ignored lightspeed as a limit, many players wouldn't\r
    care about or even notice the lack of realism, besides that I myself don't often value realism\r
    in games. Nevertheless, for Horizon, I wanted a sense of realism if only because the physics\r
    interest me and maybe doing so holds some educational value.`),me.forEach(r),C=R(k),U=f(k,"P",{});var Ie=p(U);J=m(Ie,`That said I still had to forgo many potential features. I decided as a rule that unless I had a\r
    reason other than realism to include a feature, I wouldn't include it, but whatever I did\r
    include I would make some effort to make realistic. For an incremental game, this eliminated\r
    many features, and what remained was reasonable to manage. Even still, I had to make compromises\r
    on some features: research times are extremely short, the fuel capture system assumes there's\r
    much more gas in space than in reality (by about 10 orders of magnitude), and faster-than-light\r
    communication, which is fundamental to the game's premise, is not possible according to the\r
    no-communication theorem. But few players would notice or care about these things anyway.`),Ie.forEach(r),K=R(k),Y=f(k,"H3",{});var be=p(Y);Z=m(be,"Review"),be.forEach(r),$=R(k),M=f(k,"P",{});var ke=p(M);S=m(ke,`Overall, I'm quite happy with Horizon so far. I think it captures the interesting parts of its\r
    premise without being over-complicated, and aesthetically it's very crunchy and numerical in a\r
    way that I personally like.`),ke.forEach(r),q=R(k),Q=f(k,"P",{});var Ee=p(Q);te=m(Ee,`There are plenty of issues though. General clarity could be improved; some elements might be\r
    better represented graphically than numerically. I'd like there to be more feedback from Horizon\r
    to Earth (as suggested by Frank Lantz), like a data collection system to unlock research topics.\r
    And probably most lacking is the arc of progression. The start is very slow \u2013 in fact the\r
    combustion engines are so inefficient as to be basically a waste of fuel (maybe another place I\r
    should've compromised on realism!) \u2013 and the later stages of the game just spiral upward and end\r
    nowhere. But these are good issues in that they inspire ideas, so I think the current build at\r
    least serves as a strong proof of concept should I choose to work on this further.`),Ee.forEach(r),this.h()},h(){_e(D.src,w="../horizon-diagram.png")||y(D,"src",w),y(D,"alt","diagram of the main systems of Horizon"),y(D,"class","svelte-rc428q"),y(H,"class","svelte-rc428q"),y(T,"class","svelte-rc428q")},m(k,W){s(k,e,W),o(e,n),s(k,t,W),s(k,a,W),o(a,i),s(k,d,W),s(k,b,W),o(b,u),s(k,g,W),s(k,I,W),o(I,_),s(k,v,W),s(k,T,W),o(T,D),o(T,G),o(T,H),o(H,A),s(k,N,W),s(k,L,W),o(L,P),s(k,x,W),s(k,z,W),o(z,V),s(k,C,W),s(k,U,W),o(U,J),s(k,K,W),s(k,Y,W),o(Y,Z),s(k,$,W),s(k,M,W),o(M,S),s(k,q,W),s(k,Q,W),o(Q,te)},p:ye,d(k){k&&r(e),k&&r(t),k&&r(a),k&&r(d),k&&r(b),k&&r(g),k&&r(I),k&&r(v),k&&r(T),k&&r(N),k&&r(L),k&&r(x),k&&r(z),k&&r(C),k&&r(U),k&&r(K),k&&r(Y),k&&r($),k&&r(M),k&&r(q),k&&r(Q)}}}function ma(l){let e,n;return e=new pe({props:{game:l[0],$$slots:{default:[ha]},$$scope:{ctx:l}}}),{c(){ce(e.$$.fragment)},l(t){fe(e.$$.fragment,t)},m(t,a){de(e,t,a),n=!0},p(t,[a]){const i={};a&1&&(i.game=t[0]),a&2&&(i.$$scope={dirty:a,ctx:t}),e.$set(i)},i(t){n||(oe(e.$$.fragment,t),n=!0)},o(t){ie(e.$$.fragment,t),n=!1},d(t){ue(e,t)}}}function ca(l,e,n){let{game:t}=e;return l.$$set=a=>{"game"in a&&n(0,t=a.game)},[t]}class fa extends se{constructor(e){super(),le(this,e,ca,ma,he,{game:0})}}class da extends se{constructor(e){super(),le(this,e,null,null,he,{})}}function ua(l){let e,n,t,a,i,d,b,u;return{c(){e=c("p"),n=h("Gerridae is a sound toy heavily inspired by Electroplankton."),t=O(),a=c("p"),i=h(`Due to loose training, the ML agents don't behave exactly in the way that I had originally\r
    planned. While I intended for them to follow their targets, the result I got is that they kind\r
    of do, but are mostly bad at it. For a sound toy, I think this result is actually more\r
    interesting than if they strictly followed their targets because it produces more variation\r
    without feeling random.`),d=O(),b=c("p"),u=h(`I'm honestly not particularly interested in ML and AI tools, but when I do use them, I think\r
    there's a lot of value in embracing their finickiness and imperfections.`)},l(g){e=f(g,"P",{});var I=p(e);n=m(I,"Gerridae is a sound toy heavily inspired by Electroplankton."),I.forEach(r),t=R(g),a=f(g,"P",{});var _=p(a);i=m(_,`Due to loose training, the ML agents don't behave exactly in the way that I had originally\r
    planned. While I intended for them to follow their targets, the result I got is that they kind\r
    of do, but are mostly bad at it. For a sound toy, I think this result is actually more\r
    interesting than if they strictly followed their targets because it produces more variation\r
    without feeling random.`),_.forEach(r),d=R(g),b=f(g,"P",{});var v=p(b);u=m(v,`I'm honestly not particularly interested in ML and AI tools, but when I do use them, I think\r
    there's a lot of value in embracing their finickiness and imperfections.`),v.forEach(r)},m(g,I){s(g,e,I),o(e,n),s(g,t,I),s(g,a,I),o(a,i),s(g,d,I),s(g,b,I),o(b,u)},p:ye,d(g){g&&r(e),g&&r(t),g&&r(a),g&&r(d),g&&r(b)}}}function pa(l){let e,n;return e=new pe({props:{game:l[0],$$slots:{default:[ua]},$$scope:{ctx:l}}}),{c(){ce(e.$$.fragment)},l(t){fe(e.$$.fragment,t)},m(t,a){de(e,t,a),n=!0},p(t,[a]){const i={};a&1&&(i.game=t[0]),a&2&&(i.$$scope={dirty:a,ctx:t}),e.$set(i)},i(t){n||(oe(e.$$.fragment,t),n=!0)},o(t){ie(e.$$.fragment,t),n=!1},d(t){ue(e,t)}}}function ga(l,e,n){let{game:t}=e;return l.$$set=a=>{"game"in a&&n(0,t=a.game)},[t]}class ya extends se{constructor(e){super(),le(this,e,ga,pa,he,{game:0})}}function ba(l){let e,n,t,a,i,d,b,u,g,I,_,v,T,D;return{c(){e=c("p"),n=h(`I originally developed Interference in 2019 as my undergraduate thesis project to be performed\r
    by the Princeton Laptop Orchestra (PLOrk). Over the following year, I made some revisions,\r
    mostly to the sound design, and I presented a paper about the project at the Web Audio\r
    Conference 2019 in Trondheim, Norway.`),t=O(),a=c("p"),i=h(`I originally chose to build Interference as a web app simply for the availability of tools and\r
    packages and the ease of setup for performers. But when COVID came around in 2020 and in-person\r
    musical performance became more difficult, that choice ended up being even better than I\r
    anticipated, as it made the piece well-suited for remote performance. This gave PLOrk at the\r
    time at least one piece to continue performing.`),d=O(),b=c("p"),u=h("Below are the original in-person performance from 2019 and the remote performance from 2020."),g=O(),I=c("iframe"),v=O(),T=c("iframe"),this.h()},l(w){e=f(w,"P",{});var G=p(e);n=m(G,`I originally developed Interference in 2019 as my undergraduate thesis project to be performed\r
    by the Princeton Laptop Orchestra (PLOrk). Over the following year, I made some revisions,\r
    mostly to the sound design, and I presented a paper about the project at the Web Audio\r
    Conference 2019 in Trondheim, Norway.`),G.forEach(r),t=R(w),a=f(w,"P",{});var H=p(a);i=m(H,`I originally chose to build Interference as a web app simply for the availability of tools and\r
    packages and the ease of setup for performers. But when COVID came around in 2020 and in-person\r
    musical performance became more difficult, that choice ended up being even better than I\r
    anticipated, as it made the piece well-suited for remote performance. This gave PLOrk at the\r
    time at least one piece to continue performing.`),H.forEach(r),d=R(w),b=f(w,"P",{});var A=p(b);u=m(A,"Below are the original in-person performance from 2019 and the remote performance from 2020."),A.forEach(r),g=R(w),I=f(w,"IFRAME",{src:!0,title:!0,frameborder:!0,allow:!0,class:!0}),p(I).forEach(r),v=R(w),T=f(w,"IFRAME",{src:!0,title:!0,frameborder:!0,allow:!0,class:!0}),p(T).forEach(r),this.h()},h(){_e(I.src,_="https://www.youtube.com/embed/C-5P3hXuGfs?si=7lKrMdmQYdJ-yjnW")||y(I,"src",_),y(I,"title","YouTube video player"),y(I,"frameborder","2"),y(I,"allow","accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"),I.allowFullscreen=!0,y(I,"class","svelte-oqzu8p"),_e(T.src,D="https://www.youtube.com/embed/uD4tDYiHQnM?si=kBCJN8GN-mxESGA0&start=1330")||y(T,"src",D),y(T,"title","YouTube video player"),y(T,"frameborder","2"),y(T,"allow","accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"),T.allowFullscreen=!0,y(T,"class","svelte-oqzu8p")},m(w,G){s(w,e,G),o(e,n),s(w,t,G),s(w,a,G),o(a,i),s(w,d,G),s(w,b,G),o(b,u),s(w,g,G),s(w,I,G),s(w,v,G),s(w,T,G)},p:ye,d(w){w&&r(e),w&&r(t),w&&r(a),w&&r(d),w&&r(b),w&&r(g),w&&r(I),w&&r(v),w&&r(T)}}}function wa(l){let e,n;return e=new pe({props:{game:l[0],$$slots:{default:[ba]},$$scope:{ctx:l}}}),{c(){ce(e.$$.fragment)},l(t){fe(e.$$.fragment,t)},m(t,a){de(e,t,a),n=!0},p(t,[a]){const i={};a&1&&(i.game=t[0]),a&2&&(i.$$scope={dirty:a,ctx:t}),e.$set(i)},i(t){n||(oe(e.$$.fragment,t),n=!0)},o(t){ie(e.$$.fragment,t),n=!1},d(t){ue(e,t)}}}function va(l,e,n){let{game:t}=e;return l.$$set=a=>{"game"in a&&n(0,t=a.game)},[t]}class Ia extends se{constructor(e){super(),le(this,e,va,wa,he,{game:0})}}function _a(l){let e,n;return e=new pe({props:{game:l[0]}}),{c(){ce(e.$$.fragment)},l(t){fe(e.$$.fragment,t)},m(t,a){de(e,t,a),n=!0},p(t,[a]){const i={};a&1&&(i.game=t[0]),e.$set(i)},i(t){n||(oe(e.$$.fragment,t),n=!0)},o(t){ie(e.$$.fragment,t),n=!1},d(t){ue(e,t)}}}function ka(l,e,n){let{game:t}=e;return l.$$set=a=>{"game"in a&&n(0,t=a.game)},[t]}class Ea extends se{constructor(e){super(),le(this,e,ka,_a,he,{game:0})}}function $a(l){let e,n,t,a,i,d,b,u,g,I,_,v,T,D,w,G,H;return{c(){e=c("p"),n=h(`Slime Forest is a gauntlet of battles inspired old JRPGs. The player takes on the role of a\r
    community of slimes in the forest are a repeatedly assailed by intruder from nearby\r
    civilization.`),t=O(),a=c("p"),i=h(`Filled with hidden character abilities and mechanics, the design is, in a sense, intentionally\r
    unfair. Player can try to survive through persistent trial and error and careful observation or\r
    seek advice outside the game from other players, similar to how players have always approached\r
    sprawling JRPGs filled with secrets and obscure mechanics.`),d=O(),b=c("p"),u=h("Made alongside "),g=c("a"),I=h("Beckett"),_=h(", "),v=c("a"),T=h("Lorg"),D=h(`,\r
    and `),w=c("a"),G=h("Rook"),H=h("."),this.h()},l(A){e=f(A,"P",{});var N=p(e);n=m(N,`Slime Forest is a gauntlet of battles inspired old JRPGs. The player takes on the role of a\r
    community of slimes in the forest are a repeatedly assailed by intruder from nearby\r
    civilization.`),N.forEach(r),t=R(A),a=f(A,"P",{});var L=p(a);i=m(L,`Filled with hidden character abilities and mechanics, the design is, in a sense, intentionally\r
    unfair. Player can try to survive through persistent trial and error and careful observation or\r
    seek advice outside the game from other players, similar to how players have always approached\r
    sprawling JRPGs filled with secrets and obscure mechanics.`),L.forEach(r),d=R(A),b=f(A,"P",{});var P=p(b);u=m(P,"Made alongside "),g=f(P,"A",{href:!0,target:!0,rel:!0});var x=p(g);I=m(x,"Beckett"),x.forEach(r),_=m(P,", "),v=f(P,"A",{href:!0,target:!0,rel:!0});var z=p(v);T=m(z,"Lorg"),z.forEach(r),D=m(P,`,\r
    and `),w=f(P,"A",{href:!0,target:!0,rel:!0});var V=p(w);G=m(V,"Rook"),V.forEach(r),H=m(P,"."),P.forEach(r),this.h()},h(){y(g,"href","https://beckettrowan.itch.io/"),y(g,"target","_blank"),y(g,"rel","noopener noreferrer"),y(v,"href","https://lorgoncewas.itch.io/"),y(v,"target","_blank"),y(v,"rel","noopener noreferrer"),y(w,"href","https://rookliu.itch.io/"),y(w,"target","_blank"),y(w,"rel","noopener noreferrer")},m(A,N){s(A,e,N),o(e,n),s(A,t,N),s(A,a,N),o(a,i),s(A,d,N),s(A,b,N),o(b,u),o(b,g),o(g,I),o(b,_),o(b,v),o(v,T),o(b,D),o(b,w),o(w,G),o(b,H)},p:ye,d(A){A&&r(e),A&&r(t),A&&r(a),A&&r(d),A&&r(b)}}}function Aa(l){let e,n;return e=new pe({props:{game:l[0],$$slots:{default:[$a]},$$scope:{ctx:l}}}),{c(){ce(e.$$.fragment)},l(t){fe(e.$$.fragment,t)},m(t,a){de(e,t,a),n=!0},p(t,[a]){const i={};a&1&&(i.game=t[0]),a&2&&(i.$$scope={dirty:a,ctx:t}),e.$set(i)},i(t){n||(oe(e.$$.fragment,t),n=!0)},o(t){ie(e.$$.fragment,t),n=!1},d(t){ue(e,t)}}}function Sa(l,e,n){let{game:t}=e;return l.$$set=a=>{"game"in a&&n(0,t=a.game)},[t]}class Pa extends se{constructor(e){super(),le(this,e,Sa,Aa,he,{game:0})}}function Ta(l){let e,n;return e=new pe({props:{game:l[0]}}),{c(){ce(e.$$.fragment)},l(t){fe(e.$$.fragment,t)},m(t,a){de(e,t,a),n=!0},p(t,[a]){const i={};a&1&&(i.game=t[0]),e.$set(i)},i(t){n||(oe(e.$$.fragment,t),n=!0)},o(t){ie(e.$$.fragment,t),n=!1},d(t){ue(e,t)}}}function Oa(l,e,n){let{game:t}=e;return l.$$set=a=>{"game"in a&&n(0,t=a.game)},[t]}class Ra extends se{constructor(e){super(),le(this,e,Oa,Ta,he,{game:0})}}function La(l){let e,n;return e=new pe({props:{game:l[0]}}),{c(){ce(e.$$.fragment)},l(t){fe(e.$$.fragment,t)},m(t,a){de(e,t,a),n=!0},p(t,[a]){const i={};a&1&&(i.game=t[0]),e.$set(i)},i(t){n||(oe(e.$$.fragment,t),n=!0)},o(t){ie(e.$$.fragment,t),n=!1},d(t){ue(e,t)}}}function ja(l,e,n){let{game:t}=e;return l.$$set=a=>{"game"in a&&n(0,t=a.game)},[t]}class Ga extends se{constructor(e){super(),le(this,e,ja,La,he,{game:0})}}const F={GOODBYE_MONSTER:"goodbyemonster",HORIZON:"horizon",SLIME_FOREST:"slime-forest",GRID_GARDEN:"grid-garden",CLOVER_PATCH:"clover-patch",VALLEY:"from-the-well-in-the-valley",STELLATA:"stellata-waterway",AUTUMN_DAY:"an-autumn-day",VIOLET_SNAIL:"the-harrowing-life-of-the-violet-snail",CHESS:"a-friendly-game-of-chess",SCAFFOLD:"scaffold",KLAVIERING:"klaviering",GERRIDAE:"gerridae",STONES:"stones",URSONATE:"ursonatelargo",GOLF:"gol-f",INTERFERENCE:"interference"},Da=[F.GOODBYE_MONSTER,F.HORIZON,F.SLIME_FOREST,F.GRID_GARDEN,F.VALLEY,F.STELLATA,F.AUTUMN_DAY,F.VIOLET_SNAIL,F.SCAFFOLD,F.KLAVIERING,F.GERRIDAE,F.STONES,F.URSONATE,F.GOLF,F.INTERFERENCE],Na={[F.HORIZON]:{id:F.HORIZON,role:"Solo project",date:"2023",brief:"A text-based incremental game about the physics of long-distance, high-speed space travel.",image:!0,playable:!0,article:!0,video:!1,link:"https://matt.mora.games/horizon",component:fa},[F.SLIME_FOREST]:{id:F.SLIME_FOREST,role:"Engineer, Audio",date:"2023",brief:"An unfair JRPG-inspired battle gauntlet.",image:!0,playable:!0,article:!0,video:!0,embed:"https://www.youtube.com/embed/kRUBTgfcdYQ?si=reRirXIIZ76twmzl",component:Pa},[F.CLOVER_PATCH]:{id:F.CLOVER_PATCH,role:"Solo project",date:"2022",brief:"A clover picking simulator.",image:!0,playable:!0,article:!1,video:!1,component:da},[F.VALLEY]:{id:F.VALLEY,role:"Solo project",date:"2022",brief:"A small 2D platformer collect-a-thon.",image:!0,playable:!0,article:!1,video:!0,embed:"https://www.youtube.com/embed/WXUh96q16KA?si=kBnH2qnr6ogtMMdo",component:Ga},[F.CHESS]:{id:F.CHESS,role:"Solo project",date:"2022",brief:"A tiny narrative game that plays with the rigidity of digital chess.",image:!0,playable:!0,article:!1,video:!1},[F.SCAFFOLD]:{id:F.SCAFFOLD,role:"Solo project",date:"2022",brief:"An abstract structure-matching puzzle game.",image:!0,playable:!0,article:!1,video:!1},[F.INTERFERENCE]:{id:F.INTERFERENCE,role:"Solo project",date:"2020",brief:"A game-form networked multiplayer musical system for performance. Originally made for the Princeton Laptop Orchestra.",image:!1,playable:!1,article:!0,video:!0,component:Ia,title:"Interference"},[F.URSONATE]:{id:F.URSONATE,role:"Solo project",date:"2021",brief:`A rhythm/typing game for Kurt Schwitters' "Ursonate."`,image:!0,playable:!0,article:!1,video:!0,embed:"https://www.youtube.com/embed/Q4yaFviDVGk?si=A3sumWBrDk8mfnqq",component:Ra},[F.GOLF]:{id:F.GOLF,role:"Solo project",date:"2021",brief:"A 2-button golf-like physics minigame.",image:!0,playable:!0,article:!1,video:!1},[F.KLAVIERING]:{id:F.KLAVIERING,role:"Solo project",date:"2022",brief:"A sound toy driven by Unity ML-Agents.",image:!0,playable:!0,article:!1,video:!0,embed:"https://www.youtube.com/embed/fFsX6hjPEGI?si=g1OSvV3pn-JqXILl",component:Ea},[F.GERRIDAE]:{id:F.GERRIDAE,role:"Solo project",date:"2022",brief:"A sound toy driven by Unity ML-Agents.",image:!0,playable:!0,article:!0,video:!0,embed:"https://www.youtube.com/embed/gvH6NGf_KOM?si=IhvaonG1I_PgEvuM",component:ya},[F.STELLATA]:{id:F.STELLATA,role:"Solo project",date:"2022",brief:"A retro-styled infinite runner that takes inspiration from games of the 90s and early 2000s.",image:!0,playable:!0,article:!0,video:!0,embed:"https://www.youtube.com/embed/tWOmR3LsuU4?si=V796O_XIp_rdRIRn",component:qt},[F.AUTUMN_DAY]:{id:F.AUTUMN_DAY,role:"Solo project",date:"2022",brief:"A game about sitting down and watching the wind.",image:!0,playable:!0,article:!0,video:!1,component:Vt},[F.VIOLET_SNAIL]:{id:F.VIOLET_SNAIL,role:"Solo project",date:"2022",brief:"An interactive rendering of an article about a sea snail by Dr. Rebecca Helm, professor of marine biology at Georgetown University.",image:!0,playable:!0,article:!0,video:!1,component:Xt},[F.STONES]:{id:F.STONES,role:"Solo project",date:"2022",brief:"A small 3D physics-based sound toy.",image:!0,playable:!0,article:!0,video:!0,embed:"https://www.youtube.com/embed/DAWz8SXKhSo?si=UXBF1b1p2cu1LPpk",component:ea},[F.GRID_GARDEN]:{id:F.GRID_GARDEN,role:"Solo project",date:"2022",brief:"An incremental game for Excel.",image:!0,playable:!0,article:!0,video:!0,embed:"https://www.youtube.com/embed/ts6D_aYnd8g?si=90wEl3cEKesmBPXt",component:la},[F.GOODBYE_MONSTER]:{id:F.GOODBYE_MONSTER,role:"Designer, Programmer, Audio",date:"2023",brief:"An text-based adventure and pet game for the web that challenges the instrumentality of monsters in games.",image:!0,playable:!0,article:!0,video:!0,embed:"https://www.youtube.com/embed/1tXSoDF18CA?si=Dpym31bXyPLfcL12",link:"https://goodbye.monster",component:na}};export{Na as G,Da as P,pe as a,F as b};
