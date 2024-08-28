import{S as se,i as le,s as he,k as f,q as h,a as R,l as d,m as u,r as m,c as O,h as r,n as p,b as s,F as o,u as We,g as $t,t as ie,d as At,f as oe,C as St,G as Pt,H as Tt,I as Rt,e as Be,B as we,E as $e,p as Ot,w as ce,x as fe,y as de,z as ue}from"./index-2324210b.js";function bt(l){let e,n,t=l[0].playable&&wt(l);return{c(){t&&t.c(),e=R(),n=f("hr")},l(a){t&&t.l(a),e=O(a),n=d(a,"HR",{})},m(a,i){t&&t.m(a,i),s(a,e,i),s(a,n,i)},p(a,i){a[0].playable?t?t.p(a,i):(t=wt(a),t.c(),t.m(e.parentNode,e)):t&&(t.d(1),t=null)},d(a){t&&t.d(a),a&&r(e),a&&r(n)}}}function wt(l){var i;let e,n=((i=l[0].link)!=null?i:l[0].url)+"",t,a;return{c(){e=f("a"),t=h(n),this.h()},l(c){e=d(c,"A",{href:!0,target:!0,rel:!0,class:!0});var y=u(e);t=m(y,n),y.forEach(r),this.h()},h(){var c;p(e,"href",a=(c=l[0].link)!=null?c:l[0].url),p(e,"target","_blank"),p(e,"rel","noopener noreferrer"),p(e,"class","svelte-1d5lome")},m(c,y){s(c,e,y),o(e,t)},p(c,y){var b,g;y&1&&n!==(n=((b=c[0].link)!=null?b:c[0].url)+"")&&We(t,n),y&1&&a!==(a=(g=c[0].link)!=null?g:c[0].url)&&p(e,"href",a)},d(c){c&&r(e)}}}function Lt(l){let e,n;function t(b,g){if(b[0].video&&b[0].embed)return Ht;if(b[0].image)return Gt}let a=t(l),i=a&&a(l);const c=l[3].default,y=St(c,l,l[2],null);return{c(){i&&i.c(),e=R(),y&&y.c()},l(b){i&&i.l(b),e=O(b),y&&y.l(b)},m(b,g){i&&i.m(b,g),s(b,e,g),y&&y.m(b,g),n=!0},p(b,g){a===(a=t(b))&&i?i.p(b,g):(i&&i.d(1),i=a&&a(b),i&&(i.c(),i.m(e.parentNode,e))),y&&y.p&&(!n||g&4)&&Pt(y,c,b,b[2],n?Rt(c,b[2],g,null):Tt(b[2]),null)},i(b){n||(oe(y,b),n=!0)},o(b){ie(y,b),n=!1},d(b){i&&i.d(b),b&&r(e),y&&y.d(b)}}}function jt(l){let e,n=l[0].brief+"",t,a,i,c,y,b=l[0].playable&&vt(l),g=l[0].article&&It(l),I=l[0].video&&kt(l);return{c(){e=f("p"),t=h(n),a=R(),b&&b.c(),i=R(),g&&g.c(),c=R(),I&&I.c(),y=Be(),this.h()},l(_){e=d(_,"P",{class:!0});var v=u(e);t=m(v,n),v.forEach(r),a=O(_),b&&b.l(_),i=O(_),g&&g.l(_),c=O(_),I&&I.l(_),y=Be(),this.h()},h(){p(e,"class","svelte-1d5lome")},m(_,v){s(_,e,v),o(e,t),s(_,a,v),b&&b.m(_,v),s(_,i,v),g&&g.m(_,v),s(_,c,v),I&&I.m(_,v),s(_,y,v)},p(_,v){v&1&&n!==(n=_[0].brief+"")&&We(t,n),_[0].playable?b?b.p(_,v):(b=vt(_),b.c(),b.m(i.parentNode,i)):b&&(b.d(1),b=null),_[0].article?g?g.p(_,v):(g=It(_),g.c(),g.m(c.parentNode,c)):g&&(g.d(1),g=null),_[0].video?I?I.p(_,v):(I=kt(_),I.c(),I.m(y.parentNode,y)):I&&(I.d(1),I=null)},i:we,o:we,d(_){_&&r(e),_&&r(a),b&&b.d(_),_&&r(i),g&&g.d(_),_&&r(c),I&&I.d(_),_&&r(y)}}}function Gt(l){let e,n,t,a;return{c(){e=f("div"),n=f("img"),this.h()},l(i){e=d(i,"DIV",{class:!0});var c=u(e);n=d(c,"IMG",{src:!0,alt:!0,class:!0}),c.forEach(r),this.h()},h(){$e(n.src,t=l[0].cover_image)||p(n,"src",t),p(n,"alt",a=l[0].title+" cover image"),p(n,"class","svelte-1d5lome"),p(e,"class","float svelte-1d5lome")},m(i,c){s(i,e,c),o(e,n)},p(i,c){c&1&&!$e(n.src,t=i[0].cover_image)&&p(n,"src",t),c&1&&a!==(a=i[0].title+" cover image")&&p(n,"alt",a)},d(i){i&&r(e)}}}function Ht(l){let e;function n(i,c){return i[0].article?Nt:Dt}let t=n(l),a=t(l);return{c(){a.c(),e=Be()},l(i){a.l(i),e=Be()},m(i,c){a.m(i,c),s(i,e,c)},p(i,c){t===(t=n(i))&&a?a.p(i,c):(a.d(1),a=t(i),a&&(a.c(),a.m(e.parentNode,e)))},d(i){a.d(i),i&&r(e)}}}function Dt(l){let e,n;return{c(){e=f("iframe"),this.h()},l(t){e=d(t,"IFRAME",{src:!0,title:!0,frameborder:!0,allow:!0,class:!0}),u(e).forEach(r),this.h()},h(){$e(e.src,n=l[0].embed)||p(e,"src",n),p(e,"title","Video player"),p(e,"frameborder","2"),p(e,"allow","accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"),e.allowFullscreen=!0,p(e,"class","svelte-1d5lome")},m(t,a){s(t,e,a)},p(t,a){a&1&&!$e(e.src,n=t[0].embed)&&p(e,"src",n)},d(t){t&&r(e)}}}function Nt(l){let e,n,t;return{c(){e=f("div"),n=f("iframe"),this.h()},l(a){e=d(a,"DIV",{class:!0,style:!0});var i=u(e);n=d(i,"IFRAME",{src:!0,title:!0,frameborder:!0,allow:!0,class:!0}),u(n).forEach(r),i.forEach(r),this.h()},h(){$e(n.src,t=l[0].embed)||p(n,"src",t),p(n,"title","Video player"),p(n,"frameborder","2"),p(n,"allow","accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"),n.allowFullscreen=!0,p(n,"class","svelte-1d5lome"),p(e,"class","float svelte-1d5lome"),Ot(e,"width","50%")},m(a,i){s(a,e,i),o(e,n)},p(a,i){i&1&&!$e(n.src,t=a[0].embed)&&p(n,"src",t)},d(a){a&&r(e)}}}function vt(l){let e,n,t;return{c(){e=f("a"),n=h("Play"),this.h()},l(a){e=d(a,"A",{href:!0,target:!0,rel:!0,class:!0});var i=u(e);n=m(i,"Play"),i.forEach(r),this.h()},h(){var a;p(e,"href",t=(a=l[0].link)!=null?a:l[0].url),p(e,"target","_blank"),p(e,"rel","noopener noreferrer"),p(e,"class","svelte-1d5lome")},m(a,i){s(a,e,i),o(e,n)},p(a,i){var c;i&1&&t!==(t=(c=a[0].link)!=null?c:a[0].url)&&p(e,"href",t)},d(a){a&&r(e)}}}function It(l){let e,n,t,a=l[0].playable&&_t();return{c(){a&&a.c(),e=f("a"),n=h("Read"),this.h()},l(i){a&&a.l(i),e=d(i,"A",{href:!0,class:!0});var c=u(e);n=m(c,"Read"),c.forEach(r),this.h()},h(){p(e,"href",t="/articles/"+l[0].id),p(e,"class","svelte-1d5lome")},m(i,c){a&&a.m(i,c),s(i,e,c),o(e,n)},p(i,c){i[0].playable?a||(a=_t(),a.c(),a.m(e.parentNode,e)):a&&(a.d(1),a=null),c&1&&t!==(t="/articles/"+i[0].id)&&p(e,"href",t)},d(i){a&&a.d(i),i&&r(e)}}}function _t(l){let e;return{c(){e=h(`/\r
      `)},l(n){e=m(n,`/\r
      `)},m(n,t){s(n,e,t)},d(n){n&&r(e)}}}function kt(l){let e,n,t,a=(l[0].playable||l[0].article)&&Et();return{c(){a&&a.c(),e=f("a"),n=h("Watch"),this.h()},l(i){a&&a.l(i),e=d(i,"A",{href:!0,class:!0});var c=u(e);n=m(c,"Watch"),c.forEach(r),this.h()},h(){p(e,"href",t="/articles/"+l[0].id),p(e,"class","svelte-1d5lome")},m(i,c){a&&a.m(i,c),s(i,e,c),o(e,n)},p(i,c){i[0].playable||i[0].article?a||(a=Et(),a.c(),a.m(e.parentNode,e)):a&&(a.d(1),a=null),c&1&&t!==(t="/articles/"+i[0].id)&&p(e,"href",t)},d(i){a&&a.d(i),i&&r(e)}}}function Et(l){let e;return{c(){e=h(`/\r
      `)},l(n){e=m(n,`/\r
      `)},m(n,t){s(n,e,t)},d(n){n&&r(e)}}}function Ft(l){var N;let e,n,t=((N=l[0].title)!=null?N:". . .")+"",a,i,c,y,b=l[0].role+" / "+l[0].date,g,I,_,v,j,z,w=!l[1]&&bt(l);const A=[jt,Lt],H=[];function S(G,T){return G[1]?0:1}return v=S(l),j=H[v]=A[v](l),{c(){e=f("section"),n=f("h3"),a=h(t),i=R(),c=f("span"),y=h("/ "),g=h(b),I=R(),w&&w.c(),_=R(),j.c(),this.h()},l(G){e=d(G,"SECTION",{});var T=u(e);n=d(T,"H3",{class:!0});var F=u(n);a=m(F,t),i=O(F),c=d(F,"SPAN",{class:!0});var x=u(c);y=m(x,"/ "),g=m(x,b),x.forEach(r),F.forEach(r),I=O(T),w&&w.l(T),_=O(T),j.l(T),T.forEach(r),this.h()},h(){p(c,"class","info svelte-1d5lome"),p(n,"class","svelte-1d5lome")},m(G,T){s(G,e,T),o(e,n),o(n,a),o(n,i),o(n,c),o(c,y),o(c,g),o(e,I),w&&w.m(e,null),o(e,_),H[v].m(e,null),z=!0},p(G,[T]){var x;(!z||T&1)&&t!==(t=((x=G[0].title)!=null?x:". . .")+"")&&We(a,t),(!z||T&1)&&b!==(b=G[0].role+" / "+G[0].date)&&We(g,b),G[1]?w&&(w.d(1),w=null):w?w.p(G,T):(w=bt(G),w.c(),w.m(e,_));let F=v;v=S(G),v===F?H[v].p(G,T):($t(),ie(H[F],1,1,()=>{H[F]=null}),At(),j=H[v],j?j.p(G,T):(j=H[v]=A[v](G),j.c()),oe(j,1),j.m(e,null))},i(G){z||(oe(j),z=!0)},o(G){ie(j),z=!1},d(G){G&&r(e),w&&w.d(),H[v].d()}}}function zt(l,e,n){let{$$slots:t={},$$scope:a}=e,{game:i}=e,{brief:c=!1}=e;return l.$$set=y=>{"game"in y&&n(0,i=y.game),"brief"in y&&n(1,c=y.brief),"$$scope"in y&&n(2,a=y.$$scope)},[i,c,a,t]}class pe extends se{constructor(e){super(),le(this,e,zt,Ft,he,{game:0,brief:1})}}function xt(l){let e,n,t,a,i,c,y,b,g,I,_,v,j,z,w,A,H,S,N,G,T,F,x;return{c(){e=f("p"),n=h("Another short game I made in Prototype Studio at the NYU Game Center, the prompt that inspired "),t=f("i"),a=h("An Autumn Day"),i=h(`\r
    was to make a game "for" a classmate. It could be a game they would like, a game in their style,\r
    a remake of one of their games, or anything similar. I was assigned to make a game for my classmate\r
    `),c=f("a"),y=h("Hao"),b=h(` and I chose\r
    to attempt to emulate his style and make a sort of spinoff to a few of his games that feature a common\r
    character.`),g=R(),I=f("p"),_=h(`As a quick way to start getting into Hao's visual style (and because I thought it would be\r
    funny), I used `),v=f("a"),j=h("AssetStudio"),z=h(`\r
    to extract the sprites from a couple of Hao's games,\r
    `),w=f("a"),A=h("I want to hear that again"),H=h(`\r
    and\r
    `),S=f("a"),N=h("There's a Beautiful Star"),G=h(". At that point, I also decided I would use Hao's rabbit character from those games."),T=R(),F=f("p"),x=h(`In terms of game design, Hao excels conveying complex and abstract emotions through simple\r
    controls and mechanics, which is of course a challenge to emulate, so I tried to just follow the\r
    structure of the two games I had taken assets from. Each one starts by establishing a simple\r
    task for the player and through the act of doing this task, its meaning takes form.`),this.h()},l(V){e=d(V,"P",{});var B=u(e);n=m(B,"Another short game I made in Prototype Studio at the NYU Game Center, the prompt that inspired "),t=d(B,"I",{});var U=u(t);a=m(U,"An Autumn Day"),U.forEach(r),i=m(B,`\r
    was to make a game "for" a classmate. It could be a game they would like, a game in their style,\r
    a remake of one of their games, or anything similar. I was assigned to make a game for my classmate\r
    `),c=d(B,"A",{href:!0,target:!0,rel:!0});var J=u(c);y=m(J,"Hao"),J.forEach(r),b=m(B,` and I chose\r
    to attempt to emulate his style and make a sort of spinoff to a few of his games that feature a common\r
    character.`),B.forEach(r),g=O(V),I=d(V,"P",{});var K=u(I);_=m(K,`As a quick way to start getting into Hao's visual style (and because I thought it would be\r
    funny), I used `),v=d(K,"A",{href:!0,target:!0,rel:!0});var Y=u(v);j=m(Y,"AssetStudio"),Y.forEach(r),z=m(K,`\r
    to extract the sprites from a couple of Hao's games,\r
    `),w=d(K,"A",{href:!0,target:!0,rel:!0});var ee=u(w);A=m(ee,"I want to hear that again"),ee.forEach(r),H=m(K,`\r
    and\r
    `),S=d(K,"A",{href:!0,target:!0,rel:!0});var $=u(S);N=m($,"There's a Beautiful Star"),$.forEach(r),G=m(K,". At that point, I also decided I would use Hao's rabbit character from those games."),K.forEach(r),T=O(V),F=d(V,"P",{});var M=u(F);x=m(M,`In terms of game design, Hao excels conveying complex and abstract emotions through simple\r
    controls and mechanics, which is of course a challenge to emulate, so I tried to just follow the\r
    structure of the two games I had taken assets from. Each one starts by establishing a simple\r
    task for the player and through the act of doing this task, its meaning takes form.`),M.forEach(r),this.h()},h(){p(c,"href","https://haoliao.itch.io/"),p(c,"target","_blank"),p(c,"rel","noopener noreferrer"),p(v,"href","https://github.com/Perfare/AssetStudio"),p(v,"target","_blank"),p(v,"rel","noopener noreferrer"),p(w,"href","https://haoliao.itch.io/i-want-to-hear-that-again"),p(w,"target","_blank"),p(w,"rel","noopener noreferrer"),p(S,"href","https://haoliao.itch.io/there-is-a-beautiful-star"),p(S,"target","_blank"),p(S,"rel","noopener noreferrer")},m(V,B){s(V,e,B),o(e,n),o(e,t),o(t,a),o(e,i),o(e,c),o(c,y),o(e,b),s(V,g,B),s(V,I,B),o(I,_),o(I,v),o(v,j),o(I,z),o(I,w),o(w,A),o(I,H),o(I,S),o(S,N),o(I,G),s(V,T,B),s(V,F,B),o(F,x)},p:we,d(V){V&&r(e),V&&r(g),V&&r(I),V&&r(T),V&&r(F)}}}function Mt(l){let e,n;return e=new pe({props:{game:l[0],$$slots:{default:[xt]},$$scope:{ctx:l}}}),{c(){ce(e.$$.fragment)},l(t){fe(e.$$.fragment,t)},m(t,a){de(e,t,a),n=!0},p(t,[a]){const i={};a&1&&(i.game=t[0]),a&2&&(i.$$scope={dirty:a,ctx:t}),e.$set(i)},i(t){n||(oe(e.$$.fragment,t),n=!0)},o(t){ie(e.$$.fragment,t),n=!1},d(t){ue(e,t)}}}function Ct(l,e,n){let{game:t}=e;return l.$$set=a=>{"game"in a&&n(0,t=a.game)},[t]}class Vt extends se{constructor(e){super(),le(this,e,Ct,Mt,he,{game:0})}}function Wt(l){let e,n,t,a,i,c,y,b,g,I,_,v,j,z,w,A,H,S,N,G,T,F,x,V,B,U,J,K,Y,ee,$,M,P,q,Q,ae,re,Z,te,E,C,ne,k,W,me,ge,ve,Ae,Se,ke,ye,Pe,Ee,Te,Oe,Re,Ie,Le,He,qe,Ke,Fe,je,Ue,ze,_e,Ye,De,Xe,Je,Ne,Qe,Ze;return{c(){e=f("p"),n=f("i"),t=h("Stellata Waterway"),a=h(` started as a recreation of certain systems and mechanics from one of my\r
    favorite games as kid (and still), `),i=f("i"),c=h("Klonoa 2: Lunatea's Veil"),y=h(`. Specifically, my design is\r
    directly based on\r
    `),b=f("a"),g=h("the first phase of the game's final boss"),I=h("."),_=R(),v=f("h3"),j=h("Making the game"),z=R(),w=f("p"),A=h("I started with the space and movement system, trying to recreate aspects of "),H=f("i"),S=h("Klonoa"),N=h(`'s\r
    design that I liked. One was the movement around the tunnel, which has a certain sense of\r
    inertia. The tunnel and camera don't immediately rotate to center the player and they don't\r
    immediately stop rotating when the player stops moving to the side. Another was the camera\r
    position, which is slightly below the tunnel's center and angled slightly downward, which\r
    compared to a centered and forward facing camera, as I first tried, is more readable and makes\r
    the space feel larger.`),G=R(),T=f("p"),F=h("But for various parts of the movement system, I chose to stray from "),x=f("i"),V=h("Klonoa"),B=h(`'s design.\r
    `),U=f("i"),J=h("Klonoa"),K=h(` is a rather slow game which suits its tone. But I was interested in making\r
    something more action-oriented, so the player moves much faster than in `),Y=f("i"),ee=h("Klonoa"),$=h(`. Likewise,\r
    `),M=f("i"),P=h("Klonoa"),q=h(`\r
    has a midair "flutter" mechanic that aids slow, deliberate platforming. That didn't feel suited to\r
    what I was making, so I left it out. In general, as my game came together, it started to form its\r
    own identity and I moved away from simply recreating a reference. I did, however, arrive at a similar\r
    double jump system to `),Q=f("i"),ae=h("Klonoa"),re=h(", though more organically than as a recreation."),Z=R(),te=f("p"),E=h(`Coming up with the double jump system was a memorable moment to me in "finding the fun" in a\r
    system. I had implemented nearly every other mechanic in the game and while testing just\r
    happened to hit a star while midair. It was immediately obvious that doing so should give the\r
    player another jump. This mechanic became a central part of what makes the game fun and\r
    challenging. It's by no means an innovative mechanic (plenty of platformers including `),C=f("i"),ne=h("Klonoa"),k=h(` feature similar mechanics), but the way I arrived at it through making and testing is a process\r
    I hope to repeat.`),W=R(),me=f("p"),ge=h(`The last thing I made was the level. As another game made in one week, making a boss or a level\r
    with a satisfying end seemed out of scope, so I decided to again diverge from `),ve=f("i"),Ae=h("Klonoa"),Se=h(` and create\r
    an infinite runner. I designed a basic level that could loop, added a scoring system to provide a\r
    clear goal, and linked the score to the player's speed as a basic difficulty ramp. There are a few\r
    issues with the design, such as level readability at high speed and extreme bias towards certain\r
    scoring strategies, but there's nothing beyond fixing and things mostly function as I'd hoped.`),ke=R(),ye=f("h3"),Pe=h("Playing my own games"),Ee=R(),Te=f("p"),Oe=h(`Of all of my games, this is the one I probably enjoy playing the most, which I don't think means\r
    it's better (certainly it's hard to properly enjoy narrative, puzzle, or other\r
    one-time-experience games as their designer, but that doesn't mean they're worse), but it's a\r
    valuable observation to make in developing my design process. I enjoy action-oriented games and\r
    I can apparently make one, at least to my own taste, yet I have rarely made such games. If I\r
    want to make more action-oriented games, I need to question what about my current circumstances,\r
    intuitions, and processes as designer might be drawing me away from doing so.`),Re=R(),Ie=f("p"),Le=h(`One idea is that I often get caught up in the idea of having a higher concept or purpose for the\r
    game than simply to be fun. I avoided that thinking with `),He=f("i"),qe=h("Stellata Waterway"),Ke=h(` because it was\r
    intended as just a mechanical homage. Instead of concept, I was able to focus on small features and\r
    interactions that I enjoyed, and I found that even without a driving concept, new and interesting\r
    ideas came out of the processing of making. Maybe if I want to make more games like this, I need\r
    to think less conceptually and just incrementally build on small features that excite me.`),Fe=R(),je=f("h3"),Ue=h("Tunnel runners"),ze=R(),_e=f("p"),Ye=h(`Since finishing this game, I've also enjoyed hearing what games it reminds people of. People\r
    have likened it to Vectrex games, a sequence in `),De=f("i"),Xe=h("Spyro the Dragon"),Je=h(`, and\r
    `),Ne=f("i"),Qe=h("Sonic the Hedgehog 2"),Ze=h(`. While none of those were on my mind when making this, it's\r
    interesting to see more instances of what I've come to call "tunnel runners" as a relatively\r
    uncommon spatial system.`),this.h()},l(L){e=d(L,"P",{});var X=u(e);n=d(X,"I",{});var et=u(n);t=m(et,"Stellata Waterway"),et.forEach(r),a=m(X,` started as a recreation of certain systems and mechanics from one of my\r
    favorite games as kid (and still), `),i=d(X,"I",{});var tt=u(i);c=m(tt,"Klonoa 2: Lunatea's Veil"),tt.forEach(r),y=m(X,`. Specifically, my design is\r
    directly based on\r
    `),b=d(X,"A",{href:!0,target:!0,rel:!0});var at=u(b);g=m(at,"the first phase of the game's final boss"),at.forEach(r),I=m(X,"."),X.forEach(r),_=O(L),v=d(L,"H3",{});var rt=u(v);j=m(rt,"Making the game"),rt.forEach(r),z=O(L),w=d(L,"P",{});var xe=u(w);A=m(xe,"I started with the space and movement system, trying to recreate aspects of "),H=d(xe,"I",{});var nt=u(H);S=m(nt,"Klonoa"),nt.forEach(r),N=m(xe,`'s\r
    design that I liked. One was the movement around the tunnel, which has a certain sense of\r
    inertia. The tunnel and camera don't immediately rotate to center the player and they don't\r
    immediately stop rotating when the player stops moving to the side. Another was the camera\r
    position, which is slightly below the tunnel's center and angled slightly downward, which\r
    compared to a centered and forward facing camera, as I first tried, is more readable and makes\r
    the space feel larger.`),xe.forEach(r),G=O(L),T=d(L,"P",{});var be=u(T);F=m(be,"But for various parts of the movement system, I chose to stray from "),x=d(be,"I",{});var it=u(x);V=m(it,"Klonoa"),it.forEach(r),B=m(be,`'s design.\r
    `),U=d(be,"I",{});var ot=u(U);J=m(ot,"Klonoa"),ot.forEach(r),K=m(be,` is a rather slow game which suits its tone. But I was interested in making\r
    something more action-oriented, so the player moves much faster than in `),Y=d(be,"I",{});var st=u(Y);ee=m(st,"Klonoa"),st.forEach(r),$=m(be,`. Likewise,\r
    `),M=d(be,"I",{});var lt=u(M);P=m(lt,"Klonoa"),lt.forEach(r),q=m(be,`\r
    has a midair "flutter" mechanic that aids slow, deliberate platforming. That didn't feel suited to\r
    what I was making, so I left it out. In general, as my game came together, it started to form its\r
    own identity and I moved away from simply recreating a reference. I did, however, arrive at a similar\r
    double jump system to `),Q=d(be,"I",{});var ht=u(Q);ae=m(ht,"Klonoa"),ht.forEach(r),re=m(be,", though more organically than as a recreation."),be.forEach(r),Z=O(L),te=d(L,"P",{});var Me=u(te);E=m(Me,`Coming up with the double jump system was a memorable moment to me in "finding the fun" in a\r
    system. I had implemented nearly every other mechanic in the game and while testing just\r
    happened to hit a star while midair. It was immediately obvious that doing so should give the\r
    player another jump. This mechanic became a central part of what makes the game fun and\r
    challenging. It's by no means an innovative mechanic (plenty of platformers including `),C=d(Me,"I",{});var mt=u(C);ne=m(mt,"Klonoa"),mt.forEach(r),k=m(Me,` feature similar mechanics), but the way I arrived at it through making and testing is a process\r
    I hope to repeat.`),Me.forEach(r),W=O(L),me=d(L,"P",{});var Ce=u(me);ge=m(Ce,`The last thing I made was the level. As another game made in one week, making a boss or a level\r
    with a satisfying end seemed out of scope, so I decided to again diverge from `),ve=d(Ce,"I",{});var ct=u(ve);Ae=m(ct,"Klonoa"),ct.forEach(r),Se=m(Ce,` and create\r
    an infinite runner. I designed a basic level that could loop, added a scoring system to provide a\r
    clear goal, and linked the score to the player's speed as a basic difficulty ramp. There are a few\r
    issues with the design, such as level readability at high speed and extreme bias towards certain\r
    scoring strategies, but there's nothing beyond fixing and things mostly function as I'd hoped.`),Ce.forEach(r),ke=O(L),ye=d(L,"H3",{});var ft=u(ye);Pe=m(ft,"Playing my own games"),ft.forEach(r),Ee=O(L),Te=d(L,"P",{});var dt=u(Te);Oe=m(dt,`Of all of my games, this is the one I probably enjoy playing the most, which I don't think means\r
    it's better (certainly it's hard to properly enjoy narrative, puzzle, or other\r
    one-time-experience games as their designer, but that doesn't mean they're worse), but it's a\r
    valuable observation to make in developing my design process. I enjoy action-oriented games and\r
    I can apparently make one, at least to my own taste, yet I have rarely made such games. If I\r
    want to make more action-oriented games, I need to question what about my current circumstances,\r
    intuitions, and processes as designer might be drawing me away from doing so.`),dt.forEach(r),Re=O(L),Ie=d(L,"P",{});var Ve=u(Ie);Le=m(Ve,`One idea is that I often get caught up in the idea of having a higher concept or purpose for the\r
    game than simply to be fun. I avoided that thinking with `),He=d(Ve,"I",{});var ut=u(He);qe=m(ut,"Stellata Waterway"),ut.forEach(r),Ke=m(Ve,` because it was\r
    intended as just a mechanical homage. Instead of concept, I was able to focus on small features and\r
    interactions that I enjoyed, and I found that even without a driving concept, new and interesting\r
    ideas came out of the processing of making. Maybe if I want to make more games like this, I need\r
    to think less conceptually and just incrementally build on small features that excite me.`),Ve.forEach(r),Fe=O(L),je=d(L,"H3",{});var pt=u(je);Ue=m(pt,"Tunnel runners"),pt.forEach(r),ze=O(L),_e=d(L,"P",{class:!0});var Ge=u(_e);Ye=m(Ge,`Since finishing this game, I've also enjoyed hearing what games it reminds people of. People\r
    have likened it to Vectrex games, a sequence in `),De=d(Ge,"I",{});var gt=u(De);Xe=m(gt,"Spyro the Dragon"),gt.forEach(r),Je=m(Ge,`, and\r
    `),Ne=d(Ge,"I",{});var yt=u(Ne);Qe=m(yt,"Sonic the Hedgehog 2"),yt.forEach(r),Ze=m(Ge,`. While none of those were on my mind when making this, it's\r
    interesting to see more instances of what I've come to call "tunnel runners" as a relatively\r
    uncommon spatial system.`),Ge.forEach(r),this.h()},h(){p(b,"href","https://youtu.be/6JQQhQK05SY?t=205"),p(b,"target","_blank"),p(b,"rel","noopener noreferrer"),p(_e,"class","final")},m(L,X){s(L,e,X),o(e,n),o(n,t),o(e,a),o(e,i),o(i,c),o(e,y),o(e,b),o(b,g),o(e,I),s(L,_,X),s(L,v,X),o(v,j),s(L,z,X),s(L,w,X),o(w,A),o(w,H),o(H,S),o(w,N),s(L,G,X),s(L,T,X),o(T,F),o(T,x),o(x,V),o(T,B),o(T,U),o(U,J),o(T,K),o(T,Y),o(Y,ee),o(T,$),o(T,M),o(M,P),o(T,q),o(T,Q),o(Q,ae),o(T,re),s(L,Z,X),s(L,te,X),o(te,E),o(te,C),o(C,ne),o(te,k),s(L,W,X),s(L,me,X),o(me,ge),o(me,ve),o(ve,Ae),o(me,Se),s(L,ke,X),s(L,ye,X),o(ye,Pe),s(L,Ee,X),s(L,Te,X),o(Te,Oe),s(L,Re,X),s(L,Ie,X),o(Ie,Le),o(Ie,He),o(He,qe),o(Ie,Ke),s(L,Fe,X),s(L,je,X),o(je,Ue),s(L,ze,X),s(L,_e,X),o(_e,Ye),o(_e,De),o(De,Xe),o(_e,Je),o(_e,Ne),o(Ne,Qe),o(_e,Ze)},p:we,d(L){L&&r(e),L&&r(_),L&&r(v),L&&r(z),L&&r(w),L&&r(G),L&&r(T),L&&r(Z),L&&r(te),L&&r(W),L&&r(me),L&&r(ke),L&&r(ye),L&&r(Ee),L&&r(Te),L&&r(Re),L&&r(Ie),L&&r(Fe),L&&r(je),L&&r(ze),L&&r(_e)}}}function Bt(l){let e,n;return e=new pe({props:{game:l[0],$$slots:{default:[Wt]},$$scope:{ctx:l}}}),{c(){ce(e.$$.fragment)},l(t){fe(e.$$.fragment,t)},m(t,a){de(e,t,a),n=!0},p(t,[a]){const i={};a&1&&(i.game=t[0]),a&2&&(i.$$scope={dirty:a,ctx:t}),e.$set(i)},i(t){n||(oe(e.$$.fragment,t),n=!0)},o(t){ie(e.$$.fragment,t),n=!1},d(t){ue(e,t)}}}function qt(l,e,n){let{game:t}=e;return l.$$set=a=>{"game"in a&&n(0,t=a.game)},[t]}class Kt extends se{constructor(e){super(),le(this,e,qt,Bt,he,{game:0})}}function Ut(l){let e,n,t,a,i,c,y,b,g,I,_,v,j,z,w,A,H,S,N,G,T,F,x,V,B,U,J,K,Y,ee,$,M;return{c(){e=f("h3"),n=h("Concept"),t=R(),a=f("p"),i=h(`The initial idea for this game came from the prompt "non-human POV." Approaching this prompt, I\r
    knew I wanted to make a game from the perspective of an animal with a much more limited\r
    perception of the world than humans. First, I feel such perspectives are underexplored in games,\r
    and second, I had one week to make the game and thought a highly restricted perspective would be\r
    more reasonable to implement in that timeframe.`),c=R(),y=f("p"),b=h(`My first idea was to make a game about a jellyfish, but a bit of research suggested to me that\r
    both a jellyfish's sensory and locomotive systems are much more complicated than I assumed. But\r
    in my research, I happened to find `),g=f("a"),I=h("Dr. Helm's blog"),_=h(`\r
    and\r
    `),v=f("a"),j=h("her article"),z=h(` about the violet snail caught my eye. The perspective depicted in the article was exactly what\r
    I was looking for, and with its descriptive writing, dramatic tone, and second person perspective,\r
    it felt natural feature the text in the game.`),w=R(),A=f("h3"),H=h("Development"),S=R(),N=f("p"),G=h(`With the concept and permission from Dr. Helm to use her text, putting together the actual game\r
    was relatively straightforward as I aimed to emphasize and add to the text through pacing,\r
    visual representation, and interaction.`),T=R(),F=f("p"),x=h(`Concerning pacing, the source text has a very clear voice and sense of drama, so I took care to\r
    split the text into sort of poetic lines and time each line accordingly. Where I saw lists or\r
    parallel phrases in the text, I created parallel lines and paced them as continuous sequences.\r
    Where I saw turns in the narrative, I let the critical phrases stand alone and/or put a pause.`),V=R(),B=f("p"),U=h(`Creating the visual representation was a less clear process. Aside from the technical\r
    difficulties of working with some new tools and learning more about shaders, interpretation was\r
    challenge. While the source text is very descriptive, there are some gray areas, such as to what\r
    extent the snail is blind (completely blind versus an extremely limited sense of light). With\r
    the limited timeframe, I made choices based on intuition and convenience while trying to achieve\r
    a balance between creative license and realism. I wanted to make the game interesting to play\r
    but not misrepresent the science.`),J=R(),K=f("p"),Y=h(`For interaction, I wanted to help the player engage with the snail's perspective beyond just\r
    reading about it. I avoided anything complex that might conflict with the simple existence of\r
    the snail. Instead I focused on minimalistically representing the actions described in the text,\r
    looking, clinging, and making bubbles. I also decided that none of these interactions should\r
    significantly impact what happens in the game (for example, letting go of Space causing you to\r
    stop clinging and sink) both for simplicity's sake and because the closing point of the text is\r
    that the perception of effort and struggle that we impose on the snail isn't necessarily\r
    accurate, and therefore the snail may not need to consciously cling to its raft at all.`),ee=R(),$=f("p"),M=h(`All said and done, I'm very happy with how the game turned out, and there are honestly no major\r
    changes I would make in retrospect. Thanks to Dr. Rebecca Helm for generously allowing me to use\r
    her text and for her immensely positive response to the result.`),this.h()},l(P){e=d(P,"H3",{});var q=u(e);n=m(q,"Concept"),q.forEach(r),t=O(P),a=d(P,"P",{});var Q=u(a);i=m(Q,`The initial idea for this game came from the prompt "non-human POV." Approaching this prompt, I\r
    knew I wanted to make a game from the perspective of an animal with a much more limited\r
    perception of the world than humans. First, I feel such perspectives are underexplored in games,\r
    and second, I had one week to make the game and thought a highly restricted perspective would be\r
    more reasonable to implement in that timeframe.`),Q.forEach(r),c=O(P),y=d(P,"P",{});var ae=u(y);b=m(ae,`My first idea was to make a game about a jellyfish, but a bit of research suggested to me that\r
    both a jellyfish's sensory and locomotive systems are much more complicated than I assumed. But\r
    in my research, I happened to find `),g=d(ae,"A",{href:!0,target:!0,rel:!0});var re=u(g);I=m(re,"Dr. Helm's blog"),re.forEach(r),_=m(ae,`\r
    and\r
    `),v=d(ae,"A",{href:!0,target:!0,rel:!0});var Z=u(v);j=m(Z,"her article"),Z.forEach(r),z=m(ae,` about the violet snail caught my eye. The perspective depicted in the article was exactly what\r
    I was looking for, and with its descriptive writing, dramatic tone, and second person perspective,\r
    it felt natural feature the text in the game.`),ae.forEach(r),w=O(P),A=d(P,"H3",{});var te=u(A);H=m(te,"Development"),te.forEach(r),S=O(P),N=d(P,"P",{});var E=u(N);G=m(E,`With the concept and permission from Dr. Helm to use her text, putting together the actual game\r
    was relatively straightforward as I aimed to emphasize and add to the text through pacing,\r
    visual representation, and interaction.`),E.forEach(r),T=O(P),F=d(P,"P",{});var C=u(F);x=m(C,`Concerning pacing, the source text has a very clear voice and sense of drama, so I took care to\r
    split the text into sort of poetic lines and time each line accordingly. Where I saw lists or\r
    parallel phrases in the text, I created parallel lines and paced them as continuous sequences.\r
    Where I saw turns in the narrative, I let the critical phrases stand alone and/or put a pause.`),C.forEach(r),V=O(P),B=d(P,"P",{});var ne=u(B);U=m(ne,`Creating the visual representation was a less clear process. Aside from the technical\r
    difficulties of working with some new tools and learning more about shaders, interpretation was\r
    challenge. While the source text is very descriptive, there are some gray areas, such as to what\r
    extent the snail is blind (completely blind versus an extremely limited sense of light). With\r
    the limited timeframe, I made choices based on intuition and convenience while trying to achieve\r
    a balance between creative license and realism. I wanted to make the game interesting to play\r
    but not misrepresent the science.`),ne.forEach(r),J=O(P),K=d(P,"P",{});var k=u(K);Y=m(k,`For interaction, I wanted to help the player engage with the snail's perspective beyond just\r
    reading about it. I avoided anything complex that might conflict with the simple existence of\r
    the snail. Instead I focused on minimalistically representing the actions described in the text,\r
    looking, clinging, and making bubbles. I also decided that none of these interactions should\r
    significantly impact what happens in the game (for example, letting go of Space causing you to\r
    stop clinging and sink) both for simplicity's sake and because the closing point of the text is\r
    that the perception of effort and struggle that we impose on the snail isn't necessarily\r
    accurate, and therefore the snail may not need to consciously cling to its raft at all.`),k.forEach(r),ee=O(P),$=d(P,"P",{class:!0});var W=u($);M=m(W,`All said and done, I'm very happy with how the game turned out, and there are honestly no major\r
    changes I would make in retrospect. Thanks to Dr. Rebecca Helm for generously allowing me to use\r
    her text and for her immensely positive response to the result.`),W.forEach(r),this.h()},h(){p(g,"href","https://jellybiologist.com/"),p(g,"target","_blank"),p(g,"rel","noopener noreferrer"),p(v,"href","https://jellybiologist.com/2020/08/03/the-harrowing-life-of-the-violet-snail/"),p(v,"target","_blank"),p(v,"rel","noopener noreferrer"),p($,"class","final")},m(P,q){s(P,e,q),o(e,n),s(P,t,q),s(P,a,q),o(a,i),s(P,c,q),s(P,y,q),o(y,b),o(y,g),o(g,I),o(y,_),o(y,v),o(v,j),o(y,z),s(P,w,q),s(P,A,q),o(A,H),s(P,S,q),s(P,N,q),o(N,G),s(P,T,q),s(P,F,q),o(F,x),s(P,V,q),s(P,B,q),o(B,U),s(P,J,q),s(P,K,q),o(K,Y),s(P,ee,q),s(P,$,q),o($,M)},p:we,d(P){P&&r(e),P&&r(t),P&&r(a),P&&r(c),P&&r(y),P&&r(w),P&&r(A),P&&r(S),P&&r(N),P&&r(T),P&&r(F),P&&r(V),P&&r(B),P&&r(J),P&&r(K),P&&r(ee),P&&r($)}}}function Yt(l){let e,n;return e=new pe({props:{game:l[0],$$slots:{default:[Ut]},$$scope:{ctx:l}}}),{c(){ce(e.$$.fragment)},l(t){fe(e.$$.fragment,t)},m(t,a){de(e,t,a),n=!0},p(t,[a]){const i={};a&1&&(i.game=t[0]),a&2&&(i.$$scope={dirty:a,ctx:t}),e.$set(i)},i(t){n||(oe(e.$$.fragment,t),n=!0)},o(t){ie(e.$$.fragment,t),n=!1},d(t){ue(e,t)}}}function Xt(l,e,n){let{game:t}=e;return l.$$set=a=>{"game"in a&&n(0,t=a.game)},[t]}class Jt extends se{constructor(e){super(),le(this,e,Xt,Yt,he,{game:0})}}function Qt(l){let e,n,t,a,i,c,y,b,g,I,_,v,j,z,w,A,H,S,N,G,T,F,x,V,B,U,J,K,Y,ee;return{c(){e=f("h3"),n=h("Sound toys and instruments"),t=R(),a=f("p"),i=h(`I like to think about sound toys as musical instruments. I don't mean that they should be suited\r
    for performance or be capable of producing conventional music, but that they are interfaces that\r
    map to sound, and the affordances of their interfaces define them. There isn't a fundamental\r
    difference between the input-mapping-to-sound structure of an instrument in a DAW and `),c=f("i"),y=h("Electroplankton"),b=h("; they just differ in their affordances."),g=R(),I=f("p"),_=h(`Maybe that's self-evident (the structure described is extremely broad), but the point is that\r
    the affordances of an instrument's interface define that instrument even more than its sound.\r
    This is important because while game engines, DAWs, and other digital sound-making tools can\r
    produce the same sounds, they have vastly different built-in affordances, which will tend to be\r
    expressed in their instruments. If I want to make a certain kind of instrument, I should choose\r
    a tool with the appropriate affordances. If I want to use a specific tool to make an instrument,\r
    I should leverage what that tool is good at.`),v=R(),j=f("h3"),z=h("Stones"),w=R(),A=f("p"),H=f("i"),S=h("Stones"),N=h(` is a small exploration of one special affordance of Unity and many game engines: physics\r
    simulation. It uses a 3D point-and-click interface to move around blocks whose linear and angular\r
    velocity map to sound.`),G=R(),T=f("p"),F=h(`The sound generation is actually extremely simple. Each block plays a looping drone sound with a\r
    different sound for each texture, then linear velocity controls its volume and angular velocity\r
    controls its pitch. Even with this simple mapping, the physics can produce some very dynamic\r
    sounds, such as impact transients when the velocities abruptly change on collision. The\r
    different weights of each block texture also create different volume and pitch curves when\r
    dragging them around.`),x=R(),V=f("h3"),B=h("Problems"),U=R(),J=f("p"),K=f("i"),Y=h("Stones"),ee=h(` definitely has some issues. Some of the physics are too sensitive, there's an odd disconnect\r
    between the player cursor and moving around blocks, the isometric view and lack of lighting hurts\r
    depth perception, and I don't think the pitch quantization works. Nevertheless, I think it's an interesting\r
    prototype and an idea I might like to do more with at some point.`),this.h()},l($){e=d($,"H3",{});var M=u(e);n=m(M,"Sound toys and instruments"),M.forEach(r),t=O($),a=d($,"P",{});var P=u(a);i=m(P,`I like to think about sound toys as musical instruments. I don't mean that they should be suited\r
    for performance or be capable of producing conventional music, but that they are interfaces that\r
    map to sound, and the affordances of their interfaces define them. There isn't a fundamental\r
    difference between the input-mapping-to-sound structure of an instrument in a DAW and `),c=d(P,"I",{});var q=u(c);y=m(q,"Electroplankton"),q.forEach(r),b=m(P,"; they just differ in their affordances."),P.forEach(r),g=O($),I=d($,"P",{});var Q=u(I);_=m(Q,`Maybe that's self-evident (the structure described is extremely broad), but the point is that\r
    the affordances of an instrument's interface define that instrument even more than its sound.\r
    This is important because while game engines, DAWs, and other digital sound-making tools can\r
    produce the same sounds, they have vastly different built-in affordances, which will tend to be\r
    expressed in their instruments. If I want to make a certain kind of instrument, I should choose\r
    a tool with the appropriate affordances. If I want to use a specific tool to make an instrument,\r
    I should leverage what that tool is good at.`),Q.forEach(r),v=O($),j=d($,"H3",{});var ae=u(j);z=m(ae,"Stones"),ae.forEach(r),w=O($),A=d($,"P",{});var re=u(A);H=d(re,"I",{});var Z=u(H);S=m(Z,"Stones"),Z.forEach(r),N=m(re,` is a small exploration of one special affordance of Unity and many game engines: physics\r
    simulation. It uses a 3D point-and-click interface to move around blocks whose linear and angular\r
    velocity map to sound.`),re.forEach(r),G=O($),T=d($,"P",{});var te=u(T);F=m(te,`The sound generation is actually extremely simple. Each block plays a looping drone sound with a\r
    different sound for each texture, then linear velocity controls its volume and angular velocity\r
    controls its pitch. Even with this simple mapping, the physics can produce some very dynamic\r
    sounds, such as impact transients when the velocities abruptly change on collision. The\r
    different weights of each block texture also create different volume and pitch curves when\r
    dragging them around.`),te.forEach(r),x=O($),V=d($,"H3",{});var E=u(V);B=m(E,"Problems"),E.forEach(r),U=O($),J=d($,"P",{class:!0});var C=u(J);K=d(C,"I",{});var ne=u(K);Y=m(ne,"Stones"),ne.forEach(r),ee=m(C,` definitely has some issues. Some of the physics are too sensitive, there's an odd disconnect\r
    between the player cursor and moving around blocks, the isometric view and lack of lighting hurts\r
    depth perception, and I don't think the pitch quantization works. Nevertheless, I think it's an interesting\r
    prototype and an idea I might like to do more with at some point.`),C.forEach(r),this.h()},h(){p(J,"class","final")},m($,M){s($,e,M),o(e,n),s($,t,M),s($,a,M),o(a,i),o(a,c),o(c,y),o(a,b),s($,g,M),s($,I,M),o(I,_),s($,v,M),s($,j,M),o(j,z),s($,w,M),s($,A,M),o(A,H),o(H,S),o(A,N),s($,G,M),s($,T,M),o(T,F),s($,x,M),s($,V,M),o(V,B),s($,U,M),s($,J,M),o(J,K),o(K,Y),o(J,ee)},p:we,d($){$&&r(e),$&&r(t),$&&r(a),$&&r(g),$&&r(I),$&&r(v),$&&r(j),$&&r(w),$&&r(A),$&&r(G),$&&r(T),$&&r(x),$&&r(V),$&&r(U),$&&r(J)}}}function Zt(l){let e,n;return e=new pe({props:{game:l[0],$$slots:{default:[Qt]},$$scope:{ctx:l}}}),{c(){ce(e.$$.fragment)},l(t){fe(e.$$.fragment,t)},m(t,a){de(e,t,a),n=!0},p(t,[a]){const i={};a&1&&(i.game=t[0]),a&2&&(i.$$scope={dirty:a,ctx:t}),e.$set(i)},i(t){n||(oe(e.$$.fragment,t),n=!0)},o(t){ie(e.$$.fragment,t),n=!1},d(t){ue(e,t)}}}function ea(l,e,n){let{game:t}=e;return l.$$set=a=>{"game"in a&&n(0,t=a.game)},[t]}class ta extends se{constructor(e){super(),le(this,e,ea,Zt,he,{game:0})}}function aa(l){let e,n,t,a,i,c,y,b,g,I,_,v,j,z,w,A,H;return{c(){e=f("p"),n=h(`goodbye.monster is an ongoing project. Players meet and care for monsters in a dark and\r
    ambiguous world. In many ways, it's a response to the instrumental role of creatures in creature\r
    collector games.`),t=R(),a=f("p"),i=h("Made alongside "),c=f("a"),y=h("Beckett"),b=h(", "),g=f("a"),I=h("Lorg"),_=h(`,\r
    and `),v=f("a"),j=h("Rook"),z=h("."),w=R(),A=f("iframe"),this.h()},l(S){e=d(S,"P",{});var N=u(e);n=m(N,`goodbye.monster is an ongoing project. Players meet and care for monsters in a dark and\r
    ambiguous world. In many ways, it's a response to the instrumental role of creatures in creature\r
    collector games.`),N.forEach(r),t=O(S),a=d(S,"P",{});var G=u(a);i=m(G,"Made alongside "),c=d(G,"A",{href:!0,target:!0,rel:!0});var T=u(c);y=m(T,"Beckett"),T.forEach(r),b=m(G,", "),g=d(G,"A",{href:!0,target:!0,rel:!0});var F=u(g);I=m(F,"Lorg"),F.forEach(r),_=m(G,`,\r
    and `),v=d(G,"A",{href:!0,target:!0,rel:!0});var x=u(v);j=m(x,"Rook"),x.forEach(r),z=m(G,"."),G.forEach(r),w=O(S),A=d(S,"IFRAME",{title:!0,src:!0,frameborder:!0,allow:!0,class:!0}),u(A).forEach(r),this.h()},h(){p(c,"href","https://beckettrowan.itch.io/"),p(c,"target","_blank"),p(c,"rel","noopener noreferrer"),p(g,"href","https://lorgoncewas.itch.io/"),p(g,"target","_blank"),p(g,"rel","noopener noreferrer"),p(v,"href","https://rookliu.itch.io/"),p(v,"target","_blank"),p(v,"rel","noopener noreferrer"),p(A,"title","goodbye.monster gameplay video"),$e(A.src,H="https://player.vimeo.com/video/851962984?h=d7ced28ac1&byline=0&portrait=0")||p(A,"src",H),p(A,"frameborder","2"),p(A,"allow","autoplay; fullscreen; picture-in-picture"),A.allowFullscreen=!0,p(A,"class","svelte-oqzu8p")},m(S,N){s(S,e,N),o(e,n),s(S,t,N),s(S,a,N),o(a,i),o(a,c),o(c,y),o(a,b),o(a,g),o(g,I),o(a,_),o(a,v),o(v,j),o(a,z),s(S,w,N),s(S,A,N)},p:we,d(S){S&&r(e),S&&r(t),S&&r(a),S&&r(w),S&&r(A)}}}function ra(l){let e,n;return e=new pe({props:{game:l[0],$$slots:{default:[aa]},$$scope:{ctx:l}}}),{c(){ce(e.$$.fragment)},l(t){fe(e.$$.fragment,t)},m(t,a){de(e,t,a),n=!0},p(t,[a]){const i={};a&1&&(i.game=t[0]),a&2&&(i.$$scope={dirty:a,ctx:t}),e.$set(i)},i(t){n||(oe(e.$$.fragment,t),n=!0)},o(t){ie(e.$$.fragment,t),n=!1},d(t){ue(e,t)}}}function na(l,e,n){let{game:t}=e;return l.$$set=a=>{"game"in a&&n(0,t=a.game)},[t]}class ia extends se{constructor(e){super(),le(this,e,na,ra,he,{game:0})}}function oa(l){let e,n,t,a,i,c,y,b,g,I,_,v,j,z,w,A,H,S,N,G,T,F,x,V,B,U,J,K,Y,ee,$,M,P,q,Q,ae,re,Z,te,E,C,ne;return{c(){e=f("p"),n=f("i"),t=h("Grid Garden"),a=h(` is my attempt at an incremental game for the spreadsheet. My goal was to\r
    leverage the ways we normally interact with spreadsheets - typing, copying, pasting, selecting,\r
    and deleting text in cells - and the data organization affordances of the grid. I was also\r
    inspired by\r
    `),i=f("a"),c=h("Everest Pipkin's "),y=f("i"),b=h("Barnacle Goose"),g=h(` and its item combinations and non-clicker incremental systems, which both felt suited for adaptation\r
    to the spreadsheet.`),I=R(),_=f("h3"),v=h("Process"),j=R(),z=f("p"),w=h(`I started with the ideas of creating items by typing, combining items, and creating an abstract\r
    garden on the grid of the spreadsheet. From there I decided on treating the spreadsheet as a\r
    space in which items can be combined and compartmentalizing item creation to an item that has a\r
    sort of input field. That then presented the question of what should happen when the player\r
    tries to create an invalid item or makes an error. While it may have worked for nothing to\r
    happen, it seemed more interesting to convert the invalid text by length into an item, compost,\r
    which could serve as the substrate for the garden. Around the same time, I thought of digging up\r
    buried items as another interaction, as only typing into a single cell to generate items felt\r
    too restrictive.`),A=R(),H=f("p"),S=h(`I then broke down the information that might need to exist for a cell in the garden and for an\r
    item. A single cell might need to hold item text placed by the player, a flag for compost, and\r
    text or an ID for a buried item. Items might need counts, descriptions, recipes, and visual\r
    information.`),N=R(),G=f("p"),T=h(`As I figured out what information was needed, I also started to lay out the structure of the\r
    workbook. I realized that for the amount of information a given cell needed it would be easiest\r
    to use multiple sheets in parallel, such that A1 of one sheet corresponds to A1 of the others. I\r
    created the main garden sheet that uses cell fills and conditional formatting for display and\r
    other only holds item text, a surface sheet that holds compost information, and an underground\r
    sheet that holds buried items. Structuring the information for items was simpler as that could\r
    exist in basic tables, organized in different sheets, and be easily accessed with Match and\r
    VLookup functions.`),F=R(),x=f("p"),V=h(`From there, implementation was relatively straightforward, learning VBA aside. And the project\r
    does use a significant amount of VBA, but its purpose is not to fight the inherent affordances\r
    of the spreadsheet. Rather the code mainly serves to apply complex comparisons and operations\r
    across worksheets and react to user input in a way that basic Excel functions cannot.`),B=R(),U=f("h3"),J=h("VBA and Excel"),K=R(),Y=f("p"),ee=h(`Working in VBA was a challenge. I don't like the syntax and the errors are not especially clear\r
    or helpful. Working in Excel generally, however, was convenient in that it's very natural to\r
    edit and access tabular information, such as the inventory or item recipes. It calls for a\r
    different, more data driven kind of design and thinking than I'm used to and which I hope to\r
    transfer to games outside of spreadsheets.`),$=R(),M=f("h3"),P=h("Shovels"),q=R(),Q=f("p"),ae=h(`A small feature I really like and would like to highlight is the dig-area scaling with shovels.\r
    Aside from the comedic gaminess of more shovels allowing you to dig more efficiently, I like the\r
    scaling system I ended up with where each shovel allows you to dig in an area one row or column\r
    larger. I first tried having each shovel increase the area by one cell, but the growth of that\r
    felt much too slow and didn't adequately incentivize making shovels. Squaring the number of\r
    shovels is another obvious option, and one that might even work well, but I suspected it would\r
    scale too quickly. The row and column system is a middle ground. The current system may also be\r
    somewhat unintuitive, but in a game that isn't too complicated overall, I think the bit of extra\r
    complexity in one of the primary interactions (digging) is a benefit.`),re=R(),Z=f("h3"),te=h("Improvement"),E=R(),C=f("p"),ne=h(`If I had more time to work on this or were to continue work on it, I'd look at tuning the\r
    incremental systems, which I didn't have much time to do, improving logging, easing recipe\r
    discovery, and adding more items, especially items with special behaviors like the materializer\r
    and automaton. One of the more exciting things to me currently is the little machine that can be\r
    created by placing an automaton below a materializer, and I would like to have more of those be\r
    possible. And of course, there are probably bugs that I haven't found and fixed.`),this.h()},l(k){e=d(k,"P",{});var W=u(e);n=d(W,"I",{});var me=u(n);t=m(me,"Grid Garden"),me.forEach(r),a=m(W,` is my attempt at an incremental game for the spreadsheet. My goal was to\r
    leverage the ways we normally interact with spreadsheets - typing, copying, pasting, selecting,\r
    and deleting text in cells - and the data organization affordances of the grid. I was also\r
    inspired by\r
    `),i=d(W,"A",{href:!0,target:!0,rel:!0});var ge=u(i);c=m(ge,"Everest Pipkin's "),y=d(ge,"I",{});var ve=u(y);b=m(ve,"Barnacle Goose"),ve.forEach(r),ge.forEach(r),g=m(W,` and its item combinations and non-clicker incremental systems, which both felt suited for adaptation\r
    to the spreadsheet.`),W.forEach(r),I=O(k),_=d(k,"H3",{});var Ae=u(_);v=m(Ae,"Process"),Ae.forEach(r),j=O(k),z=d(k,"P",{});var Se=u(z);w=m(Se,`I started with the ideas of creating items by typing, combining items, and creating an abstract\r
    garden on the grid of the spreadsheet. From there I decided on treating the spreadsheet as a\r
    space in which items can be combined and compartmentalizing item creation to an item that has a\r
    sort of input field. That then presented the question of what should happen when the player\r
    tries to create an invalid item or makes an error. While it may have worked for nothing to\r
    happen, it seemed more interesting to convert the invalid text by length into an item, compost,\r
    which could serve as the substrate for the garden. Around the same time, I thought of digging up\r
    buried items as another interaction, as only typing into a single cell to generate items felt\r
    too restrictive.`),Se.forEach(r),A=O(k),H=d(k,"P",{});var ke=u(H);S=m(ke,`I then broke down the information that might need to exist for a cell in the garden and for an\r
    item. A single cell might need to hold item text placed by the player, a flag for compost, and\r
    text or an ID for a buried item. Items might need counts, descriptions, recipes, and visual\r
    information.`),ke.forEach(r),N=O(k),G=d(k,"P",{});var ye=u(G);T=m(ye,`As I figured out what information was needed, I also started to lay out the structure of the\r
    workbook. I realized that for the amount of information a given cell needed it would be easiest\r
    to use multiple sheets in parallel, such that A1 of one sheet corresponds to A1 of the others. I\r
    created the main garden sheet that uses cell fills and conditional formatting for display and\r
    other only holds item text, a surface sheet that holds compost information, and an underground\r
    sheet that holds buried items. Structuring the information for items was simpler as that could\r
    exist in basic tables, organized in different sheets, and be easily accessed with Match and\r
    VLookup functions.`),ye.forEach(r),F=O(k),x=d(k,"P",{});var Pe=u(x);V=m(Pe,`From there, implementation was relatively straightforward, learning VBA aside. And the project\r
    does use a significant amount of VBA, but its purpose is not to fight the inherent affordances\r
    of the spreadsheet. Rather the code mainly serves to apply complex comparisons and operations\r
    across worksheets and react to user input in a way that basic Excel functions cannot.`),Pe.forEach(r),B=O(k),U=d(k,"H3",{});var Ee=u(U);J=m(Ee,"VBA and Excel"),Ee.forEach(r),K=O(k),Y=d(k,"P",{});var Te=u(Y);ee=m(Te,`Working in VBA was a challenge. I don't like the syntax and the errors are not especially clear\r
    or helpful. Working in Excel generally, however, was convenient in that it's very natural to\r
    edit and access tabular information, such as the inventory or item recipes. It calls for a\r
    different, more data driven kind of design and thinking than I'm used to and which I hope to\r
    transfer to games outside of spreadsheets.`),Te.forEach(r),$=O(k),M=d(k,"H3",{});var Oe=u(M);P=m(Oe,"Shovels"),Oe.forEach(r),q=O(k),Q=d(k,"P",{});var Re=u(Q);ae=m(Re,`A small feature I really like and would like to highlight is the dig-area scaling with shovels.\r
    Aside from the comedic gaminess of more shovels allowing you to dig more efficiently, I like the\r
    scaling system I ended up with where each shovel allows you to dig in an area one row or column\r
    larger. I first tried having each shovel increase the area by one cell, but the growth of that\r
    felt much too slow and didn't adequately incentivize making shovels. Squaring the number of\r
    shovels is another obvious option, and one that might even work well, but I suspected it would\r
    scale too quickly. The row and column system is a middle ground. The current system may also be\r
    somewhat unintuitive, but in a game that isn't too complicated overall, I think the bit of extra\r
    complexity in one of the primary interactions (digging) is a benefit.`),Re.forEach(r),re=O(k),Z=d(k,"H3",{});var Ie=u(Z);te=m(Ie,"Improvement"),Ie.forEach(r),E=O(k),C=d(k,"P",{class:!0});var Le=u(C);ne=m(Le,`If I had more time to work on this or were to continue work on it, I'd look at tuning the\r
    incremental systems, which I didn't have much time to do, improving logging, easing recipe\r
    discovery, and adding more items, especially items with special behaviors like the materializer\r
    and automaton. One of the more exciting things to me currently is the little machine that can be\r
    created by placing an automaton below a materializer, and I would like to have more of those be\r
    possible. And of course, there are probably bugs that I haven't found and fixed.`),Le.forEach(r),this.h()},h(){p(i,"href","https://everest-pipkin.com/barnacle-goose/"),p(i,"target","_blank"),p(i,"rel","noopener noreferrer"),p(C,"class","final")},m(k,W){s(k,e,W),o(e,n),o(n,t),o(e,a),o(e,i),o(i,c),o(i,y),o(y,b),o(e,g),s(k,I,W),s(k,_,W),o(_,v),s(k,j,W),s(k,z,W),o(z,w),s(k,A,W),s(k,H,W),o(H,S),s(k,N,W),s(k,G,W),o(G,T),s(k,F,W),s(k,x,W),o(x,V),s(k,B,W),s(k,U,W),o(U,J),s(k,K,W),s(k,Y,W),o(Y,ee),s(k,$,W),s(k,M,W),o(M,P),s(k,q,W),s(k,Q,W),o(Q,ae),s(k,re,W),s(k,Z,W),o(Z,te),s(k,E,W),s(k,C,W),o(C,ne)},p:we,d(k){k&&r(e),k&&r(I),k&&r(_),k&&r(j),k&&r(z),k&&r(A),k&&r(H),k&&r(N),k&&r(G),k&&r(F),k&&r(x),k&&r(B),k&&r(U),k&&r(K),k&&r(Y),k&&r($),k&&r(M),k&&r(q),k&&r(Q),k&&r(re),k&&r(Z),k&&r(E),k&&r(C)}}}function sa(l){let e,n;return e=new pe({props:{game:l[0],$$slots:{default:[oa]},$$scope:{ctx:l}}}),{c(){ce(e.$$.fragment)},l(t){fe(e.$$.fragment,t)},m(t,a){de(e,t,a),n=!0},p(t,[a]){const i={};a&1&&(i.game=t[0]),a&2&&(i.$$scope={dirty:a,ctx:t}),e.$set(i)},i(t){n||(oe(e.$$.fragment,t),n=!0)},o(t){ie(e.$$.fragment,t),n=!1},d(t){ue(e,t)}}}function la(l,e,n){let{game:t}=e;return l.$$set=a=>{"game"in a&&n(0,t=a.game)},[t]}class ha extends se{constructor(e){super(),le(this,e,la,sa,he,{game:0})}}function ma(l){let e,n,t,a,i,c,y,b,g,I,_,v,j,z,w,A,H,S,N,G,T,F,x,V,B,U,J,K,Y,ee,$,M,P,q,Q,ae,re,Z,te;return{c(){e=f("p"),n=h(`My initial concept for Horizon was a space travel incremental game in which the main resource is\r
    the spacecraft's velocity. In particular, I was interested in the idea of managing a rate as a\r
    resource instead of a simple count, as is typical in incremental games.`),t=R(),a=f("p"),i=h(`I had doubts at first that the idea was at all viable if I were to maintain some sense of\r
    physical realism. Prior to this project, my knowledge of the physics involved in this kind of\r
    scenario was limited to how velocity cannot exceed lightspeed (seemingly a big problem for an\r
    incremental game about velocity) and a vague idea of what time dilation is. However, after doing\r
    some reading about special relativity, I found that the physics don't conflict with my concept\r
    at all, and while they do complicate it, they also suggest some interesting system dynamics if I\r
    feature two reference frames. Without going into too much detail here, much thought has gone\r
    into the hypothetical \u201Crelativistic rocket,\u201D which while unrealistic with today's technology,\r
    engages with real physics and can certainly work in a game. (`),c=f("a"),y=h("This article"),b=h(" by Philip Gibbs summarizes most of the physics and science that inspired Horizon)."),g=R(),I=f("h3"),_=h("Implementation & Systems"),v=R(),j=f("p"),z=h(`Following ideation, research, and a bit of basic modelling to check that the idea seemed\r
    numerically viable, I moved on to implementation. As with systems in general, the best way to\r
    build an incremental game seems to be incrementally, starting with something simple, then adding\r
    components, so thats what I tried to do. I started with a basic system that takes a given thrust\r
    and increments a velocity using the correct math. From there I added engines to control the\r
    thrust, fuel and material to manage those engines, a research system to upgrades the engines,\r
    and so on. Where possible, but secondary to maintaining physical realism, I tried to make\r
    systems simple, as my premise had complicated things enough.`),w=R(),A=f("figure"),H=f("img"),N=R(),G=f("figcaption"),T=h(`A diagram of all the major components of the systems. The Lorentz factor, a quantification of\r
      effects like time dilation, creates a crucial point of feedback as it increases with velocity\r
      and increases the rate of research.`),F=R(),x=f("h3"),V=h("Challenges"),B=R(),U=f("p"),J=h(`A major challenge was balancing realism against playability. Of course, there isn't really a\r
    need to attempt realism at all. Even if I ignored lightspeed as a limit, many players wouldn't\r
    care about or even notice the lack of realism, besides that I myself don't often value realism\r
    in games. Nevertheless, for Horizon, I wanted a sense of realism if only because the physics\r
    interest me and maybe doing so holds some educational value.`),K=R(),Y=f("p"),ee=h(`That said I still had to forgo many potential features. I decided as a rule that unless I had a\r
    reason other than realism to include a feature, I wouldn't include it, but whatever I did\r
    include I would make some effort to make realistic. For an incremental game, this eliminated\r
    many features, and what remained was reasonable to manage. Even still, I had to make compromises\r
    on some features: research times are extremely short, the fuel capture system assumes there's\r
    much more gas in space than in reality (by about 10 orders of magnitude), and faster-than-light\r
    communication, which is fundamental to the game's premise, is not possible according to the\r
    no-communication theorem. But few players would notice or care about these things anyway.`),$=R(),M=f("h3"),P=h("Review"),q=R(),Q=f("p"),ae=h(`Overall, I'm quite happy with Horizon so far. I think it captures the interesting parts of its\r
    premise without being over-complicated, and aesthetically it's very crunchy and numerical in a\r
    way that I personally like.`),re=R(),Z=f("p"),te=h(`There are plenty of issues though. General clarity could be improved; some elements might be\r
    better represented graphically than numerically. I'd like there to be more feedback from Horizon\r
    to Earth (as suggested by Frank Lantz), like a data collection system to unlock research topics.\r
    And probably most lacking is the arc of progression. The start is very slow \u2013 in fact the\r
    combustion engines are so inefficient as to be basically a waste of fuel (maybe another place I\r
    should've compromised on realism!) \u2013 and the later stages of the game just spiral upward and end\r
    nowhere. But these are good issues in that they inspire ideas, so I think the current build at\r
    least serves as a strong proof of concept should I choose to work on this further.`),this.h()},l(E){e=d(E,"P",{});var C=u(e);n=m(C,`My initial concept for Horizon was a space travel incremental game in which the main resource is\r
    the spacecraft's velocity. In particular, I was interested in the idea of managing a rate as a\r
    resource instead of a simple count, as is typical in incremental games.`),C.forEach(r),t=O(E),a=d(E,"P",{});var ne=u(a);i=m(ne,`I had doubts at first that the idea was at all viable if I were to maintain some sense of\r
    physical realism. Prior to this project, my knowledge of the physics involved in this kind of\r
    scenario was limited to how velocity cannot exceed lightspeed (seemingly a big problem for an\r
    incremental game about velocity) and a vague idea of what time dilation is. However, after doing\r
    some reading about special relativity, I found that the physics don't conflict with my concept\r
    at all, and while they do complicate it, they also suggest some interesting system dynamics if I\r
    feature two reference frames. Without going into too much detail here, much thought has gone\r
    into the hypothetical \u201Crelativistic rocket,\u201D which while unrealistic with today's technology,\r
    engages with real physics and can certainly work in a game. (`),c=d(ne,"A",{href:!0,target:!0,rel:!0});var k=u(c);y=m(k,"This article"),k.forEach(r),b=m(ne," by Philip Gibbs summarizes most of the physics and science that inspired Horizon)."),ne.forEach(r),g=O(E),I=d(E,"H3",{});var W=u(I);_=m(W,"Implementation & Systems"),W.forEach(r),v=O(E),j=d(E,"P",{});var me=u(j);z=m(me,`Following ideation, research, and a bit of basic modelling to check that the idea seemed\r
    numerically viable, I moved on to implementation. As with systems in general, the best way to\r
    build an incremental game seems to be incrementally, starting with something simple, then adding\r
    components, so thats what I tried to do. I started with a basic system that takes a given thrust\r
    and increments a velocity using the correct math. From there I added engines to control the\r
    thrust, fuel and material to manage those engines, a research system to upgrades the engines,\r
    and so on. Where possible, but secondary to maintaining physical realism, I tried to make\r
    systems simple, as my premise had complicated things enough.`),me.forEach(r),w=O(E),A=d(E,"FIGURE",{class:!0});var ge=u(A);H=d(ge,"IMG",{src:!0,alt:!0,class:!0}),N=O(ge),G=d(ge,"FIGCAPTION",{class:!0});var ve=u(G);T=m(ve,`A diagram of all the major components of the systems. The Lorentz factor, a quantification of\r
      effects like time dilation, creates a crucial point of feedback as it increases with velocity\r
      and increases the rate of research.`),ve.forEach(r),ge.forEach(r),F=O(E),x=d(E,"H3",{});var Ae=u(x);V=m(Ae,"Challenges"),Ae.forEach(r),B=O(E),U=d(E,"P",{});var Se=u(U);J=m(Se,`A major challenge was balancing realism against playability. Of course, there isn't really a\r
    need to attempt realism at all. Even if I ignored lightspeed as a limit, many players wouldn't\r
    care about or even notice the lack of realism, besides that I myself don't often value realism\r
    in games. Nevertheless, for Horizon, I wanted a sense of realism if only because the physics\r
    interest me and maybe doing so holds some educational value.`),Se.forEach(r),K=O(E),Y=d(E,"P",{});var ke=u(Y);ee=m(ke,`That said I still had to forgo many potential features. I decided as a rule that unless I had a\r
    reason other than realism to include a feature, I wouldn't include it, but whatever I did\r
    include I would make some effort to make realistic. For an incremental game, this eliminated\r
    many features, and what remained was reasonable to manage. Even still, I had to make compromises\r
    on some features: research times are extremely short, the fuel capture system assumes there's\r
    much more gas in space than in reality (by about 10 orders of magnitude), and faster-than-light\r
    communication, which is fundamental to the game's premise, is not possible according to the\r
    no-communication theorem. But few players would notice or care about these things anyway.`),ke.forEach(r),$=O(E),M=d(E,"H3",{});var ye=u(M);P=m(ye,"Review"),ye.forEach(r),q=O(E),Q=d(E,"P",{});var Pe=u(Q);ae=m(Pe,`Overall, I'm quite happy with Horizon so far. I think it captures the interesting parts of its\r
    premise without being over-complicated, and aesthetically it's very crunchy and numerical in a\r
    way that I personally like.`),Pe.forEach(r),re=O(E),Z=d(E,"P",{});var Ee=u(Z);te=m(Ee,`There are plenty of issues though. General clarity could be improved; some elements might be\r
    better represented graphically than numerically. I'd like there to be more feedback from Horizon\r
    to Earth (as suggested by Frank Lantz), like a data collection system to unlock research topics.\r
    And probably most lacking is the arc of progression. The start is very slow \u2013 in fact the\r
    combustion engines are so inefficient as to be basically a waste of fuel (maybe another place I\r
    should've compromised on realism!) \u2013 and the later stages of the game just spiral upward and end\r
    nowhere. But these are good issues in that they inspire ideas, so I think the current build at\r
    least serves as a strong proof of concept should I choose to work on this further.`),Ee.forEach(r),this.h()},h(){p(c,"href","https://math.ucr.edu/home/baez/physics/Relativity/SR/Rocket/rocket.html"),p(c,"target","_blank"),p(c,"rel","noopener noreferrer"),$e(H.src,S="../horizon-diagram.png")||p(H,"src",S),p(H,"alt","diagram of the main systems of Horizon"),p(H,"class","svelte-rc428q"),p(G,"class","svelte-rc428q"),p(A,"class","svelte-rc428q")},m(E,C){s(E,e,C),o(e,n),s(E,t,C),s(E,a,C),o(a,i),o(a,c),o(c,y),o(a,b),s(E,g,C),s(E,I,C),o(I,_),s(E,v,C),s(E,j,C),o(j,z),s(E,w,C),s(E,A,C),o(A,H),o(A,N),o(A,G),o(G,T),s(E,F,C),s(E,x,C),o(x,V),s(E,B,C),s(E,U,C),o(U,J),s(E,K,C),s(E,Y,C),o(Y,ee),s(E,$,C),s(E,M,C),o(M,P),s(E,q,C),s(E,Q,C),o(Q,ae),s(E,re,C),s(E,Z,C),o(Z,te)},p:we,d(E){E&&r(e),E&&r(t),E&&r(a),E&&r(g),E&&r(I),E&&r(v),E&&r(j),E&&r(w),E&&r(A),E&&r(F),E&&r(x),E&&r(B),E&&r(U),E&&r(K),E&&r(Y),E&&r($),E&&r(M),E&&r(q),E&&r(Q),E&&r(re),E&&r(Z)}}}function ca(l){let e,n;return e=new pe({props:{game:l[0],$$slots:{default:[ma]},$$scope:{ctx:l}}}),{c(){ce(e.$$.fragment)},l(t){fe(e.$$.fragment,t)},m(t,a){de(e,t,a),n=!0},p(t,[a]){const i={};a&1&&(i.game=t[0]),a&2&&(i.$$scope={dirty:a,ctx:t}),e.$set(i)},i(t){n||(oe(e.$$.fragment,t),n=!0)},o(t){ie(e.$$.fragment,t),n=!1},d(t){ue(e,t)}}}function fa(l,e,n){let{game:t}=e;return l.$$set=a=>{"game"in a&&n(0,t=a.game)},[t]}class da extends se{constructor(e){super(),le(this,e,fa,ca,he,{game:0})}}class ua extends se{constructor(e){super(),le(this,e,null,null,he,{})}}function pa(l){let e,n,t,a,i,c,y,b;return{c(){e=f("p"),n=h("Gerridae is a sound toy heavily inspired by Electroplankton."),t=R(),a=f("p"),i=h(`Due to loose training, the ML agents don't behave exactly in the way that I had originally\r
    planned. While I intended for them to follow their targets, the result I got is that they kind\r
    of do, but are mostly bad at it. For a sound toy, I think this result is actually more\r
    interesting than if they strictly followed their targets because it produces more variation\r
    without feeling random.`),c=R(),y=f("p"),b=h(`I'm honestly not particularly interested in ML and AI tools, but when I do use them, I think\r
    there's a lot of value in embracing their finickiness and imperfections.`)},l(g){e=d(g,"P",{});var I=u(e);n=m(I,"Gerridae is a sound toy heavily inspired by Electroplankton."),I.forEach(r),t=O(g),a=d(g,"P",{});var _=u(a);i=m(_,`Due to loose training, the ML agents don't behave exactly in the way that I had originally\r
    planned. While I intended for them to follow their targets, the result I got is that they kind\r
    of do, but are mostly bad at it. For a sound toy, I think this result is actually more\r
    interesting than if they strictly followed their targets because it produces more variation\r
    without feeling random.`),_.forEach(r),c=O(g),y=d(g,"P",{});var v=u(y);b=m(v,`I'm honestly not particularly interested in ML and AI tools, but when I do use them, I think\r
    there's a lot of value in embracing their finickiness and imperfections.`),v.forEach(r)},m(g,I){s(g,e,I),o(e,n),s(g,t,I),s(g,a,I),o(a,i),s(g,c,I),s(g,y,I),o(y,b)},p:we,d(g){g&&r(e),g&&r(t),g&&r(a),g&&r(c),g&&r(y)}}}function ga(l){let e,n;return e=new pe({props:{game:l[0],$$slots:{default:[pa]},$$scope:{ctx:l}}}),{c(){ce(e.$$.fragment)},l(t){fe(e.$$.fragment,t)},m(t,a){de(e,t,a),n=!0},p(t,[a]){const i={};a&1&&(i.game=t[0]),a&2&&(i.$$scope={dirty:a,ctx:t}),e.$set(i)},i(t){n||(oe(e.$$.fragment,t),n=!0)},o(t){ie(e.$$.fragment,t),n=!1},d(t){ue(e,t)}}}function ya(l,e,n){let{game:t}=e;return l.$$set=a=>{"game"in a&&n(0,t=a.game)},[t]}class ba extends se{constructor(e){super(),le(this,e,ya,ga,he,{game:0})}}function wa(l){let e,n,t,a,i,c,y,b,g,I,_,v,j,z;return{c(){e=f("p"),n=h(`I originally developed Interference in 2019 as my undergraduate thesis project to be performed\r
    by the Princeton Laptop Orchestra (PLOrk). Over the following year, I made some revisions,\r
    mostly to the sound design, and I presented a paper about the project at the Web Audio\r
    Conference 2019 in Trondheim, Norway.`),t=R(),a=f("p"),i=h(`I originally chose to build Interference as a web app simply for the availability of tools and\r
    packages and the ease of setup for performers. But when COVID came around in 2020 and in-person\r
    musical performance became more difficult, that choice ended up being even better than I\r
    anticipated, as it made the piece well-suited for remote performance. This gave PLOrk at the\r
    time at least one piece to continue performing.`),c=R(),y=f("p"),b=h("Below are the original in-person performance from 2019 and the remote performance from 2020."),g=R(),I=f("iframe"),v=R(),j=f("iframe"),this.h()},l(w){e=d(w,"P",{});var A=u(e);n=m(A,`I originally developed Interference in 2019 as my undergraduate thesis project to be performed\r
    by the Princeton Laptop Orchestra (PLOrk). Over the following year, I made some revisions,\r
    mostly to the sound design, and I presented a paper about the project at the Web Audio\r
    Conference 2019 in Trondheim, Norway.`),A.forEach(r),t=O(w),a=d(w,"P",{});var H=u(a);i=m(H,`I originally chose to build Interference as a web app simply for the availability of tools and\r
    packages and the ease of setup for performers. But when COVID came around in 2020 and in-person\r
    musical performance became more difficult, that choice ended up being even better than I\r
    anticipated, as it made the piece well-suited for remote performance. This gave PLOrk at the\r
    time at least one piece to continue performing.`),H.forEach(r),c=O(w),y=d(w,"P",{});var S=u(y);b=m(S,"Below are the original in-person performance from 2019 and the remote performance from 2020."),S.forEach(r),g=O(w),I=d(w,"IFRAME",{src:!0,title:!0,frameborder:!0,allow:!0,class:!0}),u(I).forEach(r),v=O(w),j=d(w,"IFRAME",{src:!0,title:!0,frameborder:!0,allow:!0,class:!0}),u(j).forEach(r),this.h()},h(){$e(I.src,_="https://www.youtube.com/embed/C-5P3hXuGfs?si=7lKrMdmQYdJ-yjnW")||p(I,"src",_),p(I,"title","YouTube video player"),p(I,"frameborder","2"),p(I,"allow","accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"),I.allowFullscreen=!0,p(I,"class","svelte-oqzu8p"),$e(j.src,z="https://www.youtube.com/embed/uD4tDYiHQnM?si=kBCJN8GN-mxESGA0&start=1330")||p(j,"src",z),p(j,"title","YouTube video player"),p(j,"frameborder","2"),p(j,"allow","accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"),j.allowFullscreen=!0,p(j,"class","svelte-oqzu8p")},m(w,A){s(w,e,A),o(e,n),s(w,t,A),s(w,a,A),o(a,i),s(w,c,A),s(w,y,A),o(y,b),s(w,g,A),s(w,I,A),s(w,v,A),s(w,j,A)},p:we,d(w){w&&r(e),w&&r(t),w&&r(a),w&&r(c),w&&r(y),w&&r(g),w&&r(I),w&&r(v),w&&r(j)}}}function va(l){let e,n;return e=new pe({props:{game:l[0],$$slots:{default:[wa]},$$scope:{ctx:l}}}),{c(){ce(e.$$.fragment)},l(t){fe(e.$$.fragment,t)},m(t,a){de(e,t,a),n=!0},p(t,[a]){const i={};a&1&&(i.game=t[0]),a&2&&(i.$$scope={dirty:a,ctx:t}),e.$set(i)},i(t){n||(oe(e.$$.fragment,t),n=!0)},o(t){ie(e.$$.fragment,t),n=!1},d(t){ue(e,t)}}}function Ia(l,e,n){let{game:t}=e;return l.$$set=a=>{"game"in a&&n(0,t=a.game)},[t]}class _a extends se{constructor(e){super(),le(this,e,Ia,va,he,{game:0})}}function ka(l){let e,n;return e=new pe({props:{game:l[0]}}),{c(){ce(e.$$.fragment)},l(t){fe(e.$$.fragment,t)},m(t,a){de(e,t,a),n=!0},p(t,[a]){const i={};a&1&&(i.game=t[0]),e.$set(i)},i(t){n||(oe(e.$$.fragment,t),n=!0)},o(t){ie(e.$$.fragment,t),n=!1},d(t){ue(e,t)}}}function Ea(l,e,n){let{game:t}=e;return l.$$set=a=>{"game"in a&&n(0,t=a.game)},[t]}class $a extends se{constructor(e){super(),le(this,e,Ea,ka,he,{game:0})}}function Aa(l){let e,n,t,a,i,c,y,b,g,I,_,v,j,z,w,A,H;return{c(){e=f("p"),n=h(`Slime Forest is a gauntlet of battles inspired old JRPGs. The player takes on the role of a\r
    community of slimes in the forest are a repeatedly assailed by intruder from nearby\r
    civilization.`),t=R(),a=f("p"),i=h(`Filled with hidden character abilities and mechanics, the design is, in a sense, intentionally\r
    unfair. Player can try to survive through persistent trial and error and careful observation or\r
    seek advice outside the game from other players, similar to how players have always approached\r
    sprawling JRPGs filled with secrets and obscure mechanics.`),c=R(),y=f("p"),b=h("Made alongside "),g=f("a"),I=h("Beckett"),_=h(", "),v=f("a"),j=h("Lorg"),z=h(`,\r
    and `),w=f("a"),A=h("Rook"),H=h("."),this.h()},l(S){e=d(S,"P",{});var N=u(e);n=m(N,`Slime Forest is a gauntlet of battles inspired old JRPGs. The player takes on the role of a\r
    community of slimes in the forest are a repeatedly assailed by intruder from nearby\r
    civilization.`),N.forEach(r),t=O(S),a=d(S,"P",{});var G=u(a);i=m(G,`Filled with hidden character abilities and mechanics, the design is, in a sense, intentionally\r
    unfair. Player can try to survive through persistent trial and error and careful observation or\r
    seek advice outside the game from other players, similar to how players have always approached\r
    sprawling JRPGs filled with secrets and obscure mechanics.`),G.forEach(r),c=O(S),y=d(S,"P",{});var T=u(y);b=m(T,"Made alongside "),g=d(T,"A",{href:!0,target:!0,rel:!0});var F=u(g);I=m(F,"Beckett"),F.forEach(r),_=m(T,", "),v=d(T,"A",{href:!0,target:!0,rel:!0});var x=u(v);j=m(x,"Lorg"),x.forEach(r),z=m(T,`,\r
    and `),w=d(T,"A",{href:!0,target:!0,rel:!0});var V=u(w);A=m(V,"Rook"),V.forEach(r),H=m(T,"."),T.forEach(r),this.h()},h(){p(g,"href","https://beckettrowan.itch.io/"),p(g,"target","_blank"),p(g,"rel","noopener noreferrer"),p(v,"href","https://lorgoncewas.itch.io/"),p(v,"target","_blank"),p(v,"rel","noopener noreferrer"),p(w,"href","https://rookliu.itch.io/"),p(w,"target","_blank"),p(w,"rel","noopener noreferrer")},m(S,N){s(S,e,N),o(e,n),s(S,t,N),s(S,a,N),o(a,i),s(S,c,N),s(S,y,N),o(y,b),o(y,g),o(g,I),o(y,_),o(y,v),o(v,j),o(y,z),o(y,w),o(w,A),o(y,H)},p:we,d(S){S&&r(e),S&&r(t),S&&r(a),S&&r(c),S&&r(y)}}}function Sa(l){let e,n;return e=new pe({props:{game:l[0],$$slots:{default:[Aa]},$$scope:{ctx:l}}}),{c(){ce(e.$$.fragment)},l(t){fe(e.$$.fragment,t)},m(t,a){de(e,t,a),n=!0},p(t,[a]){const i={};a&1&&(i.game=t[0]),a&2&&(i.$$scope={dirty:a,ctx:t}),e.$set(i)},i(t){n||(oe(e.$$.fragment,t),n=!0)},o(t){ie(e.$$.fragment,t),n=!1},d(t){ue(e,t)}}}function Pa(l,e,n){let{game:t}=e;return l.$$set=a=>{"game"in a&&n(0,t=a.game)},[t]}class Ta extends se{constructor(e){super(),le(this,e,Pa,Sa,he,{game:0})}}function Ra(l){let e,n;return e=new pe({props:{game:l[0]}}),{c(){ce(e.$$.fragment)},l(t){fe(e.$$.fragment,t)},m(t,a){de(e,t,a),n=!0},p(t,[a]){const i={};a&1&&(i.game=t[0]),e.$set(i)},i(t){n||(oe(e.$$.fragment,t),n=!0)},o(t){ie(e.$$.fragment,t),n=!1},d(t){ue(e,t)}}}function Oa(l,e,n){let{game:t}=e;return l.$$set=a=>{"game"in a&&n(0,t=a.game)},[t]}class La extends se{constructor(e){super(),le(this,e,Oa,Ra,he,{game:0})}}function ja(l){let e,n;return e=new pe({props:{game:l[0]}}),{c(){ce(e.$$.fragment)},l(t){fe(e.$$.fragment,t)},m(t,a){de(e,t,a),n=!0},p(t,[a]){const i={};a&1&&(i.game=t[0]),e.$set(i)},i(t){n||(oe(e.$$.fragment,t),n=!0)},o(t){ie(e.$$.fragment,t),n=!1},d(t){ue(e,t)}}}function Ga(l,e,n){let{game:t}=e;return l.$$set=a=>{"game"in a&&n(0,t=a.game)},[t]}class Ha extends se{constructor(e){super(),le(this,e,Ga,ja,he,{game:0})}}const D={GOODBYE_MONSTER:"goodbyemonster",HORIZON:"horizon",SLIME_FOREST:"slime-forest",GRID_GARDEN:"grid-garden",CLOVER_PATCH:"clover-patch",VALLEY:"from-the-well-in-the-valley",STELLATA:"stellata-waterway",AUTUMN_DAY:"an-autumn-day",VIOLET_SNAIL:"the-harrowing-life-of-the-violet-snail",CHESS:"a-friendly-game-of-chess",SCAFFOLD:"scaffold",KLAVIERING:"klaviering",GERRIDAE:"gerridae",STONES:"stones",URSONATE:"ursonatelargo",GOLF:"gol-f",INTERFERENCE:"interference"},Na=[D.GOODBYE_MONSTER,D.HORIZON,D.SLIME_FOREST,D.GRID_GARDEN,D.CLOVER_PATCH,D.VALLEY,D.STELLATA,D.AUTUMN_DAY,D.VIOLET_SNAIL,D.SCAFFOLD,D.KLAVIERING,D.GERRIDAE,D.STONES,D.URSONATE,D.GOLF,D.INTERFERENCE],Fa={[D.HORIZON]:{id:D.HORIZON,role:"Solo project",date:"2023",brief:"A text-based incremental game about the physics of long-distance, high-speed space travel.",image:!0,playable:!0,article:!0,video:!1,link:"https://matt.mora.games/horizon",component:da},[D.SLIME_FOREST]:{id:D.SLIME_FOREST,role:"Engineer, Audio",date:"2023",brief:"An unfair JRPG-inspired battle gauntlet.",image:!0,playable:!0,article:!0,video:!0,embed:"https://www.youtube.com/embed/kRUBTgfcdYQ?si=reRirXIIZ76twmzl",component:Ta},[D.CLOVER_PATCH]:{id:D.CLOVER_PATCH,role:"Solo project",date:"2022",brief:"A clover picking simulator.",image:!0,playable:!0,article:!1,video:!1,component:ua},[D.VALLEY]:{id:D.VALLEY,role:"Solo project",date:"2022",brief:"A small 2D platformer collect-a-thon.",image:!0,playable:!0,article:!1,video:!0,embed:"https://www.youtube.com/embed/WXUh96q16KA?si=kBnH2qnr6ogtMMdo",component:Ha},[D.CHESS]:{id:D.CHESS,role:"Solo project",date:"2022",brief:"A tiny narrative game that plays with the rigidity of digital chess.",image:!0,playable:!0,article:!1,video:!1},[D.SCAFFOLD]:{id:D.SCAFFOLD,role:"Solo project",date:"2022",brief:"An abstract structure-matching puzzle game.",image:!0,playable:!0,article:!1,video:!1},[D.INTERFERENCE]:{id:D.INTERFERENCE,role:"Solo project",date:"2020",brief:"A game-form networked multiplayer musical system for performance. Originally made for the Princeton Laptop Orchestra.",image:!1,playable:!1,article:!0,video:!0,component:_a,title:"Interference"},[D.URSONATE]:{id:D.URSONATE,role:"Solo project",date:"2021",brief:`A rhythm/typing game for Kurt Schwitters' "Ursonate."`,image:!0,playable:!0,article:!1,video:!0,embed:"https://www.youtube.com/embed/Q4yaFviDVGk?si=A3sumWBrDk8mfnqq",component:La},[D.GOLF]:{id:D.GOLF,role:"Solo project",date:"2021",brief:"A 2-button golf-like physics minigame.",image:!0,playable:!0,article:!1,video:!1},[D.KLAVIERING]:{id:D.KLAVIERING,role:"Solo project",date:"2022",brief:"A pianistic moving sculpture garden.",image:!0,playable:!0,article:!1,video:!0,embed:"https://www.youtube.com/embed/fFsX6hjPEGI?si=g1OSvV3pn-JqXILl",component:$a},[D.GERRIDAE]:{id:D.GERRIDAE,role:"Solo project",date:"2022",brief:"A sound toy driven by Unity ML-Agents.",image:!0,playable:!0,article:!0,video:!0,embed:"https://www.youtube.com/embed/gvH6NGf_KOM?si=IhvaonG1I_PgEvuM",component:ba},[D.STELLATA]:{id:D.STELLATA,role:"Solo project",date:"2022",brief:"A retro-styled infinite runner that takes inspiration from games of the 90s and early 2000s.",image:!0,playable:!0,article:!0,video:!0,embed:"https://www.youtube.com/embed/tWOmR3LsuU4?si=V796O_XIp_rdRIRn",component:Kt},[D.AUTUMN_DAY]:{id:D.AUTUMN_DAY,role:"Solo project",date:"2022",brief:"A game about sitting down and watching the wind.",image:!0,playable:!0,article:!0,video:!1,component:Vt},[D.VIOLET_SNAIL]:{id:D.VIOLET_SNAIL,role:"Solo project",date:"2022",brief:"An interactive rendering of an article about a sea snail by Dr. Rebecca Helm, professor of marine biology at Georgetown University.",image:!0,playable:!0,article:!0,video:!1,component:Jt},[D.STONES]:{id:D.STONES,role:"Solo project",date:"2022",brief:"A small 3D physics-based sound toy.",image:!0,playable:!0,article:!0,video:!0,embed:"https://www.youtube.com/embed/DAWz8SXKhSo?si=UXBF1b1p2cu1LPpk",component:ta},[D.GRID_GARDEN]:{id:D.GRID_GARDEN,role:"Solo project",date:"2022",brief:"An incremental game for Excel.",image:!0,playable:!1,article:!0,video:!0,embed:"https://www.youtube.com/embed/ts6D_aYnd8g?si=90wEl3cEKesmBPXt",component:ha},[D.GOODBYE_MONSTER]:{id:D.GOODBYE_MONSTER,role:"Designer, Engineer, Audio",date:"2023",brief:"An text-based adventure and pet game for the web that challenges the instrumentality of monsters in games.",image:!0,playable:!0,article:!0,video:!0,embed:"https://www.youtube.com/embed/1tXSoDF18CA?si=Dpym31bXyPLfcL12",link:"https://goodbye.monster",component:ia}};export{Fa as G,Na as P,pe as a,D as b};
