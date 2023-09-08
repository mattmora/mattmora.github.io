import{S as we,i as be,s as Ie,k as m,q as s,a as x,l as c,m as f,r as l,h as t,c as P,n as k,b as h,F as n,u as Je,g as It,t as ce,d as _t,f as fe,C as kt,E as Ve,G as Et,H as $t,I as At,e as yt,B as ue,w as Pe,x as Te,y as je,z as De}from"./index-2324210b.js";function vt(p){let e,r,a;return{c(){e=m("a"),r=s("Play"),this.h()},l(i){e=c(i,"A",{href:!0,target:!0,rel:!0,class:!0});var o=f(e);r=l(o,"Play"),o.forEach(t),this.h()},h(){var i;k(e,"href",a=(i=p[0].link)!=null?i:p[0].url),k(e,"target","_blank"),k(e,"rel","noopener noreferrer"),k(e,"class","svelte-6ykqc2")},m(i,o){h(i,e,o),n(e,r)},p(i,o){var y;o&1&&a!==(a=(y=i[0].link)!=null?y:i[0].url)&&k(e,"href",a)},d(i){i&&t(e)}}}function St(p){let e,r,a,i,o,y,w;const q=p[3].default,v=kt(q,p,p[2],null);return{c(){e=m("div"),r=m("div"),a=m("img"),y=x(),v&&v.c(),this.h()},l(g){e=c(g,"DIV",{});var A=f(e);r=c(A,"DIV",{class:!0});var $=f(r);a=c($,"IMG",{src:!0,alt:!0,class:!0}),$.forEach(t),y=P(A),v&&v.l(A),A.forEach(t),this.h()},h(){Ve(a.src,i=p[0].cover_image)||k(a,"src",i),k(a,"alt",o=p[0].title+" cover image"),k(a,"class","svelte-6ykqc2"),k(r,"class","float svelte-6ykqc2")},m(g,A){h(g,e,A),n(e,r),n(r,a),n(e,y),v&&v.m(e,null),w=!0},p(g,A){(!w||A&1&&!Ve(a.src,i=g[0].cover_image))&&k(a,"src",i),(!w||A&1&&o!==(o=g[0].title+" cover image"))&&k(a,"alt",o),v&&v.p&&(!w||A&4)&&Et(v,q,g,g[2],w?At(q,g[2],A,null):$t(g[2]),null)},i(g){w||(fe(v,g),w=!0)},o(g){ce(v,g),w=!1},d(g){g&&t(e),v&&v.d(g)}}}function xt(p){let e,r=p[0].brief+"",a,i,o,y,w,q,v,g,A=p[0].article&&wt(p),$=p[0].video&&bt(p);return{c(){e=m("p"),a=s(r),i=x(),o=m("a"),y=s("Play"),q=x(),A&&A.c(),v=x(),$&&$.c(),g=yt(),this.h()},l(u){e=c(u,"P",{class:!0});var S=f(e);a=l(S,r),S.forEach(t),i=P(u),o=c(u,"A",{href:!0,target:!0,rel:!0,class:!0});var j=f(o);y=l(j,"Play"),j.forEach(t),q=P(u),A&&A.l(u),v=P(u),$&&$.l(u),g=yt(),this.h()},h(){var u;k(e,"class","svelte-6ykqc2"),k(o,"href",w=(u=p[0].link)!=null?u:p[0].url),k(o,"target","_blank"),k(o,"rel","noopener noreferrer"),k(o,"class","svelte-6ykqc2")},m(u,S){h(u,e,S),n(e,a),h(u,i,S),h(u,o,S),n(o,y),h(u,q,S),A&&A.m(u,S),h(u,v,S),$&&$.m(u,S),h(u,g,S)},p(u,S){var j;S&1&&r!==(r=u[0].brief+"")&&Je(a,r),S&1&&w!==(w=(j=u[0].link)!=null?j:u[0].url)&&k(o,"href",w),u[0].article?A?A.p(u,S):(A=wt(u),A.c(),A.m(v.parentNode,v)):A&&(A.d(1),A=null),u[0].video?$?$.p(u,S):($=bt(u),$.c(),$.m(g.parentNode,g)):$&&($.d(1),$=null)},i:ue,o:ue,d(u){u&&t(e),u&&t(i),u&&t(o),u&&t(q),A&&A.d(u),u&&t(v),$&&$.d(u),u&&t(g)}}}function wt(p){let e,r,a,i;return{c(){e=s("/ "),r=m("a"),a=s("Read"),this.h()},l(o){e=l(o,"/ "),r=c(o,"A",{href:!0,class:!0});var y=f(r);a=l(y,"Read"),y.forEach(t),this.h()},h(){k(r,"href",i="/"+p[0].id),k(r,"class","svelte-6ykqc2")},m(o,y){h(o,e,y),h(o,r,y),n(r,a)},p(o,y){y&1&&i!==(i="/"+o[0].id)&&k(r,"href",i)},d(o){o&&t(e),o&&t(r)}}}function bt(p){let e,r,a,i;return{c(){e=s("/ "),r=m("a"),a=s("Watch"),this.h()},l(o){e=l(o,"/ "),r=c(o,"A",{href:!0,class:!0});var y=f(r);a=l(y,"Watch"),y.forEach(t),this.h()},h(){k(r,"href",i="/"+p[0].id),k(r,"class","svelte-6ykqc2")},m(o,y){h(o,e,y),h(o,r,y),n(r,a)},p(o,y){y&1&&i!==(i="/"+o[0].id)&&k(r,"href",i)},d(o){o&&t(e),o&&t(r)}}}function Pt(p){var R;let e,r,a=((R=p[0].title)!=null?R:". . .")+"",i,o,y,w=p[0].role+" / "+p[0].date,q,v,g,A,$,u,S,j,D=!p[1]&&vt(p);const L=[xt,St],O=[];function K(E,T){return E[1]?0:1}return u=K(p),S=O[u]=L[u](p),{c(){e=m("section"),r=m("h3"),i=s(a),o=x(),y=m("h4"),q=s(w),v=x(),D&&D.c(),g=x(),A=m("hr"),$=x(),S.c(),this.h()},l(E){e=c(E,"SECTION",{});var T=f(e);r=c(T,"H3",{});var z=f(r);i=l(z,a),z.forEach(t),o=P(T),y=c(T,"H4",{class:!0});var H=f(y);q=l(H,w),H.forEach(t),v=P(T),D&&D.l(T),g=P(T),A=c(T,"HR",{}),$=P(T),S.l(T),T.forEach(t),this.h()},h(){k(y,"class","svelte-6ykqc2")},m(E,T){h(E,e,T),n(e,r),n(r,i),n(e,o),n(e,y),n(y,q),n(e,v),D&&D.m(e,null),n(e,g),n(e,A),n(e,$),O[u].m(e,null),j=!0},p(E,[T]){var H;(!j||T&1)&&a!==(a=((H=E[0].title)!=null?H:". . .")+"")&&Je(i,a),(!j||T&1)&&w!==(w=E[0].role+" / "+E[0].date)&&Je(q,w),E[1]?D&&(D.d(1),D=null):D?D.p(E,T):(D=vt(E),D.c(),D.m(e,g));let z=u;u=K(E),u===z?O[u].p(E,T):(It(),ce(O[z],1,1,()=>{O[z]=null}),_t(),S=O[u],S?S.p(E,T):(S=O[u]=L[u](E),S.c()),fe(S,1),S.m(e,null))},i(E){j||(fe(S),j=!0)},o(E){ce(S),j=!1},d(E){E&&t(e),D&&D.d(),O[u].d()}}}function Tt(p,e,r){let{$$slots:a={},$$scope:i}=e,{game:o}=e,{brief:y=!1}=e;return p.$$set=w=>{"game"in w&&r(0,o=w.game),"brief"in w&&r(1,y=w.brief),"$$scope"in w&&r(2,i=w.$$scope)},[o,y,i,a]}class He extends we{constructor(e){super(),be(this,e,Tt,Pt,Ie,{game:0,brief:1})}}function jt(p){let e,r,a,i,o,y,w,q,v,g,A,$,u,S,j,D,L,O,K,R,E,T,z;return{c(){e=m("p"),r=s("Another short game I made in Prototype Studio at the NYU Game Center, the prompt that inspired "),a=m("i"),i=s("An Autumn Day"),o=s(`\r
    was to make a game "for" a classmate. It could be a game they would like, a game in their style,\r
    a remake of one of their games, or anything similar. I was assigned to make a game for my classmate\r
    `),y=m("a"),w=s("Hao"),q=s(` and I chose\r
    to attempt to emulate his style and make a sort of spinoff to a few of his games that feature a common\r
    character.`),v=x(),g=m("p"),A=s(`As a quick way to start getting into Hao's visual style (and because I thought it would be\r
    funny), I used `),$=m("a"),u=s("AssetStudio"),S=s(`\r
    to extract the sprites from a couple of Hao's games,\r
    `),j=m("a"),D=s("I want to hear that again"),L=s(`\r
    and\r
    `),O=m("a"),K=s("There's a Beautiful Star"),R=s(". At that point, I also decided I would use Hao's rabbit character from those games."),E=x(),T=m("p"),z=s(`In terms of game design, Hao excels conveying complex and abstract emotions through simple\r
    controls and mechanics, which is of course a challenge to emulate, so I tried to just follow the\r
    structure of the two games I had taken assets from. Each one starts by establishing a simple\r
    task for the player and through the act of doing this task, its meaning takes form.`),this.h()},l(H){e=c(H,"P",{});var N=f(e);r=l(N,"Another short game I made in Prototype Studio at the NYU Game Center, the prompt that inspired "),a=c(N,"I",{});var C=f(a);i=l(C,"An Autumn Day"),C.forEach(t),o=l(N,`\r
    was to make a game "for" a classmate. It could be a game they would like, a game in their style,\r
    a remake of one of their games, or anything similar. I was assigned to make a game for my classmate\r
    `),y=c(N,"A",{href:!0,target:!0,rel:!0});var F=f(y);w=l(F,"Hao"),F.forEach(t),q=l(N,` and I chose\r
    to attempt to emulate his style and make a sort of spinoff to a few of his games that feature a common\r
    character.`),N.forEach(t),v=P(H),g=c(H,"P",{});var B=f(g);A=l(B,`As a quick way to start getting into Hao's visual style (and because I thought it would be\r
    funny), I used `),$=c(B,"A",{href:!0,target:!0,rel:!0});var U=f($);u=l(U,"AssetStudio"),U.forEach(t),S=l(B,`\r
    to extract the sprites from a couple of Hao's games,\r
    `),j=c(B,"A",{href:!0,target:!0,rel:!0});var Q=f(j);D=l(Q,"I want to hear that again"),Q.forEach(t),L=l(B,`\r
    and\r
    `),O=c(B,"A",{href:!0,target:!0,rel:!0});var b=f(O);K=l(b,"There's a Beautiful Star"),b.forEach(t),R=l(B,". At that point, I also decided I would use Hao's rabbit character from those games."),B.forEach(t),E=P(H),T=c(H,"P",{});var W=f(T);z=l(W,`In terms of game design, Hao excels conveying complex and abstract emotions through simple\r
    controls and mechanics, which is of course a challenge to emulate, so I tried to just follow the\r
    structure of the two games I had taken assets from. Each one starts by establishing a simple\r
    task for the player and through the act of doing this task, its meaning takes form.`),W.forEach(t),this.h()},h(){k(y,"href","https://haoliao.itch.io/"),k(y,"target","_blank"),k(y,"rel","noopener noreferrer"),k($,"href","https://github.com/Perfare/AssetStudio"),k($,"target","_blank"),k($,"rel","noopener noreferrer"),k(j,"href","https://haoliao.itch.io/i-want-to-hear-that-again"),k(j,"target","_blank"),k(j,"rel","noopener noreferrer"),k(O,"href","https://haoliao.itch.io/there-is-a-beautiful-star"),k(O,"target","_blank"),k(O,"rel","noopener noreferrer")},m(H,N){h(H,e,N),n(e,r),n(e,a),n(a,i),n(e,o),n(e,y),n(y,w),n(e,q),h(H,v,N),h(H,g,N),n(g,A),n(g,$),n($,u),n(g,S),n(g,j),n(j,D),n(g,L),n(g,O),n(O,K),n(g,R),h(H,E,N),h(H,T,N),n(T,z)},p:ue,d(H){H&&t(e),H&&t(v),H&&t(g),H&&t(E),H&&t(T)}}}function Dt(p){let e,r;return e=new He({props:{game:p[0],$$slots:{default:[jt]},$$scope:{ctx:p}}}),{c(){Pe(e.$$.fragment)},l(a){Te(e.$$.fragment,a)},m(a,i){je(e,a,i),r=!0},p(a,[i]){const o={};i&1&&(o.game=a[0]),i&2&&(o.$$scope={dirty:i,ctx:a}),e.$set(o)},i(a){r||(fe(e.$$.fragment,a),r=!0)},o(a){ce(e.$$.fragment,a),r=!1},d(a){De(e,a)}}}function Ht(p,e,r){let{game:a}=e;return p.$$set=i=>{"game"in i&&r(0,a=i.game)},[a]}class qt extends we{constructor(e){super(),be(this,e,Ht,Dt,Ie,{game:0})}}function Wt(p){let e,r,a,i,o,y,w,q,v,g,A,$,u,S,j,D,L,O,K,R,E,T,z,H,N,C,F,B,U,Q,b,W,I,M,X,Z,te,ee,J,ae,Y,ne,d,G,oe,pe,de,_e,ke,ge,he,Ee,ye,me,$e,ve,se,Ae,qe,Re,Ke,Oe,Se,Ce,ze,le,Fe,We,Ue,Ye,Ge,Qe,Xe;return{c(){e=m("p"),r=m("i"),a=s("Stellata Waterway"),i=s(` started as a recreation of the systems and mechanics of one of my\r
    favorite games as kid (and still), `),o=m("i"),y=s("Klonoa 2: Lunatea's Veil"),w=s(`. Specifically, my design is\r
    directly based on\r
    `),q=m("a"),v=s("the first phase of the game's final boss"),g=s("."),A=x(),$=m("h3"),u=s("Making the game"),S=x(),j=m("p"),D=s("I started with the space and movement system, trying to recreate aspects of "),L=m("i"),O=s("Klonoa"),K=s(`'s\r
    design that I liked. One was the movement around the tunnel, which has a certain sense of\r
    inertia. The tunnel and camera don't immediately rotate to center the player and they don't\r
    immediately stop rotating when the player stops moving to the side. Another was the camera\r
    position, which is slightly below the tunnel's center and angled slightly downward, which\r
    compared to a centered and forward facing camera, as I first tried, is more readable and makes\r
    the space feel larger.`),R=x(),E=m("p"),T=s("But for various parts of the movement system, I chose to stray from "),z=m("i"),H=s("Klonoa"),N=s(`'s design.\r
    `),C=m("i"),F=s("Klonoa"),B=s(` is a rather slow game which suits its tone. But I was interested in making\r
    something more action-oriented, so the player moves much faster than in `),U=m("i"),Q=s("Klonoa"),b=s(`. Likewise,\r
    `),W=m("i"),I=s("Klonoa"),M=s(`\r
    has a midair "flutter" mechanic that aids slow, deliberate platforming. That didn't feel suited to\r
    what I was making, so I left it out. In general, as my game came together, it started to form its\r
    own identity and I moved away from simply recreating a reference. I did, however, arrive at a similar\r
    double jump system to `),X=m("i"),Z=s("Klonoa"),te=s(", though more organically than as a recreation."),ee=x(),J=m("p"),ae=s(`Coming up with the double jump system was a memorable moment to me in "finding the fun" in a\r
    system. I had implemented nearly every other mechanic in the game and while testing just\r
    happened to hit a star while midair. It was immediately obvious that doing so should give the\r
    player another jump. This mechanic became a central part of what makes the game fun and\r
    challenging. It's by no means an innovative mechanic (plenty of platformers including `),Y=m("i"),ne=s("Klonoa"),d=s(` feature similar mechanics), but the way I arrived at it through making and testing is a process\r
    I hope to repeat.`),G=x(),oe=m("p"),pe=s(`The last thing I made was the level. As another game made in one week, making a boss or a level\r
    with a satisfying end seemed out of scope, so I decided to again diverge from `),de=m("i"),_e=s("Klonoa"),ke=s(` and create\r
    an infinite runner. I designed a basic level that could loop, added a scoring system to provide a\r
    clear goal, and linked the score to the player's speed as a basic difficulty ramp. There are a few\r
    issues with the design, such as level readability at high speed and extreme bias towards certain\r
    scoring strategies, but there's nothing beyond fixing and things mostly function as I'd hoped.`),ge=x(),he=m("h3"),Ee=s("Playing my own games"),ye=x(),me=m("p"),$e=s(`Of all of my games, this is the one I probably enjoy playing the most, which I don't think means\r
    it's better (certainly it's hard to properly enjoy narrative, puzzle, or other\r
    one-time-experience games as their designer, but that doesn't mean they're worse), but it's a\r
    valuable observation to make in developing my design process. I enjoy action-oriented games and\r
    I can apparently make one, at least to my own taste, yet I have rarely made such games. If I\r
    want to make more action-oriented games, I need to question what about my current circumstances,\r
    intuitions, and processes as designer might be drawing me away from doing so.`),ve=x(),se=m("p"),Ae=s(`One idea is that I often get caught up in the idea of having a higher concept or purpose for the\r
    game than simply to be fun. I avoided that thinking with `),qe=m("i"),Re=s("Stellata Waterway"),Ke=s(` because it was\r
    intended as just a mechanical homage. Instead of concept, I was able to focus on small features and\r
    interactions that I enjoyed, and I found that even without a driving concept, new and interesting\r
    ideas came out of the processing of making. Maybe if I want to make more games like this, I need\r
    to think less conceptually and just incrementally build on small features that excite me.`),Oe=x(),Se=m("h3"),Ce=s("Tunnel runners"),ze=x(),le=m("p"),Fe=s(`Since finishing this game, I've also enjoyed hearing what games it reminds people of. People\r
    have likened it to Vectrex games, a sequence in `),We=m("i"),Ue=s("Spyro the Dragon"),Ye=s(`, and\r
    `),Ge=m("i"),Qe=s("Sonic the Hedgehog 2"),Xe=s(`. While none of those were on my mind when making this, it's\r
    interesting to see more instances of what I've come to call "tunnel runners" as a relatively\r
    uncommon spatial system.`),this.h()},l(_){e=c(_,"P",{});var V=f(e);r=c(V,"I",{});var Ze=f(r);a=l(Ze,"Stellata Waterway"),Ze.forEach(t),i=l(V,` started as a recreation of the systems and mechanics of one of my\r
    favorite games as kid (and still), `),o=c(V,"I",{});var et=f(o);y=l(et,"Klonoa 2: Lunatea's Veil"),et.forEach(t),w=l(V,`. Specifically, my design is\r
    directly based on\r
    `),q=c(V,"A",{href:!0,target:!0,rel:!0});var tt=f(q);v=l(tt,"the first phase of the game's final boss"),tt.forEach(t),g=l(V,"."),V.forEach(t),A=P(_),$=c(_,"H3",{});var at=f($);u=l(at,"Making the game"),at.forEach(t),S=P(_),j=c(_,"P",{});var Ne=f(j);D=l(Ne,"I started with the space and movement system, trying to recreate aspects of "),L=c(Ne,"I",{});var nt=f(L);O=l(nt,"Klonoa"),nt.forEach(t),K=l(Ne,`'s\r
    design that I liked. One was the movement around the tunnel, which has a certain sense of\r
    inertia. The tunnel and camera don't immediately rotate to center the player and they don't\r
    immediately stop rotating when the player stops moving to the side. Another was the camera\r
    position, which is slightly below the tunnel's center and angled slightly downward, which\r
    compared to a centered and forward facing camera, as I first tried, is more readable and makes\r
    the space feel larger.`),Ne.forEach(t),R=P(_),E=c(_,"P",{});var ie=f(E);T=l(ie,"But for various parts of the movement system, I chose to stray from "),z=c(ie,"I",{});var it=f(z);H=l(it,"Klonoa"),it.forEach(t),N=l(ie,`'s design.\r
    `),C=c(ie,"I",{});var rt=f(C);F=l(rt,"Klonoa"),rt.forEach(t),B=l(ie,` is a rather slow game which suits its tone. But I was interested in making\r
    something more action-oriented, so the player moves much faster than in `),U=c(ie,"I",{});var ot=f(U);Q=l(ot,"Klonoa"),ot.forEach(t),b=l(ie,`. Likewise,\r
    `),W=c(ie,"I",{});var st=f(W);I=l(st,"Klonoa"),st.forEach(t),M=l(ie,`\r
    has a midair "flutter" mechanic that aids slow, deliberate platforming. That didn't feel suited to\r
    what I was making, so I left it out. In general, as my game came together, it started to form its\r
    own identity and I moved away from simply recreating a reference. I did, however, arrive at a similar\r
    double jump system to `),X=c(ie,"I",{});var lt=f(X);Z=l(lt,"Klonoa"),lt.forEach(t),te=l(ie,", though more organically than as a recreation."),ie.forEach(t),ee=P(_),J=c(_,"P",{});var Me=f(J);ae=l(Me,`Coming up with the double jump system was a memorable moment to me in "finding the fun" in a\r
    system. I had implemented nearly every other mechanic in the game and while testing just\r
    happened to hit a star while midair. It was immediately obvious that doing so should give the\r
    player another jump. This mechanic became a central part of what makes the game fun and\r
    challenging. It's by no means an innovative mechanic (plenty of platformers including `),Y=c(Me,"I",{});var ht=f(Y);ne=l(ht,"Klonoa"),ht.forEach(t),d=l(Me,` feature similar mechanics), but the way I arrived at it through making and testing is a process\r
    I hope to repeat.`),Me.forEach(t),G=P(_),oe=c(_,"P",{});var Be=f(oe);pe=l(Be,`The last thing I made was the level. As another game made in one week, making a boss or a level\r
    with a satisfying end seemed out of scope, so I decided to again diverge from `),de=c(Be,"I",{});var mt=f(de);_e=l(mt,"Klonoa"),mt.forEach(t),ke=l(Be,` and create\r
    an infinite runner. I designed a basic level that could loop, added a scoring system to provide a\r
    clear goal, and linked the score to the player's speed as a basic difficulty ramp. There are a few\r
    issues with the design, such as level readability at high speed and extreme bias towards certain\r
    scoring strategies, but there's nothing beyond fixing and things mostly function as I'd hoped.`),Be.forEach(t),ge=P(_),he=c(_,"H3",{});var ct=f(he);Ee=l(ct,"Playing my own games"),ct.forEach(t),ye=P(_),me=c(_,"P",{});var ft=f(me);$e=l(ft,`Of all of my games, this is the one I probably enjoy playing the most, which I don't think means\r
    it's better (certainly it's hard to properly enjoy narrative, puzzle, or other\r
    one-time-experience games as their designer, but that doesn't mean they're worse), but it's a\r
    valuable observation to make in developing my design process. I enjoy action-oriented games and\r
    I can apparently make one, at least to my own taste, yet I have rarely made such games. If I\r
    want to make more action-oriented games, I need to question what about my current circumstances,\r
    intuitions, and processes as designer might be drawing me away from doing so.`),ft.forEach(t),ve=P(_),se=c(_,"P",{});var Le=f(se);Ae=l(Le,`One idea is that I often get caught up in the idea of having a higher concept or purpose for the\r
    game than simply to be fun. I avoided that thinking with `),qe=c(Le,"I",{});var dt=f(qe);Re=l(dt,"Stellata Waterway"),dt.forEach(t),Ke=l(Le,` because it was\r
    intended as just a mechanical homage. Instead of concept, I was able to focus on small features and\r
    interactions that I enjoyed, and I found that even without a driving concept, new and interesting\r
    ideas came out of the processing of making. Maybe if I want to make more games like this, I need\r
    to think less conceptually and just incrementally build on small features that excite me.`),Le.forEach(t),Oe=P(_),Se=c(_,"H3",{});var ut=f(Se);Ce=l(ut,"Tunnel runners"),ut.forEach(t),ze=P(_),le=c(_,"P",{class:!0});var xe=f(le);Fe=l(xe,`Since finishing this game, I've also enjoyed hearing what games it reminds people of. People\r
    have likened it to Vectrex games, a sequence in `),We=c(xe,"I",{});var pt=f(We);Ue=l(pt,"Spyro the Dragon"),pt.forEach(t),Ye=l(xe,`, and\r
    `),Ge=c(xe,"I",{});var gt=f(Ge);Qe=l(gt,"Sonic the Hedgehog 2"),gt.forEach(t),Xe=l(xe,`. While none of those were on my mind when making this, it's\r
    interesting to see more instances of what I've come to call "tunnel runners" as a relatively\r
    uncommon spatial system.`),xe.forEach(t),this.h()},h(){k(q,"href","https://youtu.be/6JQQhQK05SY?t=205"),k(q,"target","_blank"),k(q,"rel","noopener noreferrer"),k(le,"class","final")},m(_,V){h(_,e,V),n(e,r),n(r,a),n(e,i),n(e,o),n(o,y),n(e,w),n(e,q),n(q,v),n(e,g),h(_,A,V),h(_,$,V),n($,u),h(_,S,V),h(_,j,V),n(j,D),n(j,L),n(L,O),n(j,K),h(_,R,V),h(_,E,V),n(E,T),n(E,z),n(z,H),n(E,N),n(E,C),n(C,F),n(E,B),n(E,U),n(U,Q),n(E,b),n(E,W),n(W,I),n(E,M),n(E,X),n(X,Z),n(E,te),h(_,ee,V),h(_,J,V),n(J,ae),n(J,Y),n(Y,ne),n(J,d),h(_,G,V),h(_,oe,V),n(oe,pe),n(oe,de),n(de,_e),n(oe,ke),h(_,ge,V),h(_,he,V),n(he,Ee),h(_,ye,V),h(_,me,V),n(me,$e),h(_,ve,V),h(_,se,V),n(se,Ae),n(se,qe),n(qe,Re),n(se,Ke),h(_,Oe,V),h(_,Se,V),n(Se,Ce),h(_,ze,V),h(_,le,V),n(le,Fe),n(le,We),n(We,Ue),n(le,Ye),n(le,Ge),n(Ge,Qe),n(le,Xe)},p:ue,d(_){_&&t(e),_&&t(A),_&&t($),_&&t(S),_&&t(j),_&&t(R),_&&t(E),_&&t(ee),_&&t(J),_&&t(G),_&&t(oe),_&&t(ge),_&&t(he),_&&t(ye),_&&t(me),_&&t(ve),_&&t(se),_&&t(Oe),_&&t(Se),_&&t(ze),_&&t(le)}}}function Gt(p){let e,r;return e=new He({props:{game:p[0],$$slots:{default:[Wt]},$$scope:{ctx:p}}}),{c(){Pe(e.$$.fragment)},l(a){Te(e.$$.fragment,a)},m(a,i){je(e,a,i),r=!0},p(a,[i]){const o={};i&1&&(o.game=a[0]),i&2&&(o.$$scope={dirty:i,ctx:a}),e.$set(o)},i(a){r||(fe(e.$$.fragment,a),r=!0)},o(a){ce(e.$$.fragment,a),r=!1},d(a){De(e,a)}}}function Ot(p,e,r){let{game:a}=e;return p.$$set=i=>{"game"in i&&r(0,a=i.game)},[a]}class zt extends we{constructor(e){super(),be(this,e,Ot,Gt,Ie,{game:0})}}function Nt(p){let e,r,a,i,o,y,w,q,v,g,A,$,u,S,j,D,L,O,K,R,E,T,z,H,N,C,F,B,U,Q,b,W;return{c(){e=m("h3"),r=s("Concept"),a=x(),i=m("p"),o=s(`The initial idea for this game came from the prompt "non-human POV." Approaching this prompt, I\r
    knew I wanted to make a game from the perspective of an animal with a much more limited\r
    perception of the world than humans. First, I feel such perspectives are underexplored in games,\r
    and second, I had one week to make the game and thought a highly restricted perspective would be\r
    more reasonable to implement in that timeframe.`),y=x(),w=m("p"),q=s(`My first idea was to make a game about a jellyfish, but a bit of research suggested to me that\r
    both a jellyfish's sensory and locomotive systems are much more complicated than I assumed. But\r
    in my research, I happened to find `),v=m("a"),g=s("Dr. Helm's blog"),A=s(`\r
    and\r
    `),$=m("a"),u=s("her article"),S=s(` about the violet snail caught my eye. The perspective depicted in the article was exactly what\r
    I was looking for, and with its descriptive writing, dramatic tone, and second person perspective,\r
    it felt natural feature the text in the game.`),j=x(),D=m("h3"),L=s("Development"),O=x(),K=m("p"),R=s(`With the concept and permission from Dr. Helm to use her text, putting together the actual game\r
    was relatively straightforward as I aimed to emphasize and add to the text through pacing,\r
    visual representation, and interaction.`),E=x(),T=m("p"),z=s(`Concerning pacing, the source text has a very clear voice and sense of drama, so I took care to\r
    split the text into sort of poetic lines and time each line accordingly. Where I saw lists or\r
    parallel phrases in the text, I created parallel lines and paced them as continuous sequences.\r
    Where I saw turns in the narrative, I let the critical phrases stand alone and/or put a pause.`),H=x(),N=m("p"),C=s(`Creating the visual representation was a less clear process. Aside from the technical\r
    difficulties of working with some new tools and learning more about shaders, interpretation was\r
    challenge. While the source text is very descriptive, there are some gray areas, such as to what\r
    extent the snail is blind (completely blind versus an extremely limited sense of light). With\r
    the limited timeframe, I made choices based on intuition and convenience while trying to achieve\r
    a balance between creative license and realism. I wanted to make the game interesting to play\r
    but not misrepresent the science.`),F=x(),B=m("p"),U=s(`For interaction, I wanted to help the player engage with the snail's perspective beyond just\r
    reading about it. I avoided anything complex that might conflict with the simple existence of\r
    the snail. Instead I focused on minimalistically representing the actions described in the text,\r
    looking, clinging, and making bubbles. I also decided that none of these interactions should\r
    significantly impact what happens in the game (for example, letting go of Space causing you to\r
    stop clinging and sink) both for simplicity's sake and because the closing point of the text is\r
    that the perception of effort and struggle that we impose on the snail isn't necessarily\r
    accurate, and therefore the snail may not need to consciously cling to its raft at all.`),Q=x(),b=m("p"),W=s(`All said and done, I'm very happy with how the game turned out, and there are honestly no major\r
    changes I would make in retrospect. Thanks to Dr. Rebecca Helm for generously allowing me to use\r
    her text and for her immensely positive response to the result.`),this.h()},l(I){e=c(I,"H3",{});var M=f(e);r=l(M,"Concept"),M.forEach(t),a=P(I),i=c(I,"P",{});var X=f(i);o=l(X,`The initial idea for this game came from the prompt "non-human POV." Approaching this prompt, I\r
    knew I wanted to make a game from the perspective of an animal with a much more limited\r
    perception of the world than humans. First, I feel such perspectives are underexplored in games,\r
    and second, I had one week to make the game and thought a highly restricted perspective would be\r
    more reasonable to implement in that timeframe.`),X.forEach(t),y=P(I),w=c(I,"P",{});var Z=f(w);q=l(Z,`My first idea was to make a game about a jellyfish, but a bit of research suggested to me that\r
    both a jellyfish's sensory and locomotive systems are much more complicated than I assumed. But\r
    in my research, I happened to find `),v=c(Z,"A",{href:!0,target:!0,rel:!0});var te=f(v);g=l(te,"Dr. Helm's blog"),te.forEach(t),A=l(Z,`\r
    and\r
    `),$=c(Z,"A",{href:!0,target:!0,rel:!0});var ee=f($);u=l(ee,"her article"),ee.forEach(t),S=l(Z,` about the violet snail caught my eye. The perspective depicted in the article was exactly what\r
    I was looking for, and with its descriptive writing, dramatic tone, and second person perspective,\r
    it felt natural feature the text in the game.`),Z.forEach(t),j=P(I),D=c(I,"H3",{});var J=f(D);L=l(J,"Development"),J.forEach(t),O=P(I),K=c(I,"P",{});var ae=f(K);R=l(ae,`With the concept and permission from Dr. Helm to use her text, putting together the actual game\r
    was relatively straightforward as I aimed to emphasize and add to the text through pacing,\r
    visual representation, and interaction.`),ae.forEach(t),E=P(I),T=c(I,"P",{});var Y=f(T);z=l(Y,`Concerning pacing, the source text has a very clear voice and sense of drama, so I took care to\r
    split the text into sort of poetic lines and time each line accordingly. Where I saw lists or\r
    parallel phrases in the text, I created parallel lines and paced them as continuous sequences.\r
    Where I saw turns in the narrative, I let the critical phrases stand alone and/or put a pause.`),Y.forEach(t),H=P(I),N=c(I,"P",{});var ne=f(N);C=l(ne,`Creating the visual representation was a less clear process. Aside from the technical\r
    difficulties of working with some new tools and learning more about shaders, interpretation was\r
    challenge. While the source text is very descriptive, there are some gray areas, such as to what\r
    extent the snail is blind (completely blind versus an extremely limited sense of light). With\r
    the limited timeframe, I made choices based on intuition and convenience while trying to achieve\r
    a balance between creative license and realism. I wanted to make the game interesting to play\r
    but not misrepresent the science.`),ne.forEach(t),F=P(I),B=c(I,"P",{});var d=f(B);U=l(d,`For interaction, I wanted to help the player engage with the snail's perspective beyond just\r
    reading about it. I avoided anything complex that might conflict with the simple existence of\r
    the snail. Instead I focused on minimalistically representing the actions described in the text,\r
    looking, clinging, and making bubbles. I also decided that none of these interactions should\r
    significantly impact what happens in the game (for example, letting go of Space causing you to\r
    stop clinging and sink) both for simplicity's sake and because the closing point of the text is\r
    that the perception of effort and struggle that we impose on the snail isn't necessarily\r
    accurate, and therefore the snail may not need to consciously cling to its raft at all.`),d.forEach(t),Q=P(I),b=c(I,"P",{class:!0});var G=f(b);W=l(G,`All said and done, I'm very happy with how the game turned out, and there are honestly no major\r
    changes I would make in retrospect. Thanks to Dr. Rebecca Helm for generously allowing me to use\r
    her text and for her immensely positive response to the result.`),G.forEach(t),this.h()},h(){k(v,"href","https://jellybiologist.com/"),k(v,"target","_blank"),k(v,"rel","noopener noreferrer"),k($,"href","https://jellybiologist.com/2020/08/03/the-harrowing-life-of-the-violet-snail/"),k($,"target","_blank"),k($,"rel","noopener noreferrer"),k(b,"class","final")},m(I,M){h(I,e,M),n(e,r),h(I,a,M),h(I,i,M),n(i,o),h(I,y,M),h(I,w,M),n(w,q),n(w,v),n(v,g),n(w,A),n(w,$),n($,u),n(w,S),h(I,j,M),h(I,D,M),n(D,L),h(I,O,M),h(I,K,M),n(K,R),h(I,E,M),h(I,T,M),n(T,z),h(I,H,M),h(I,N,M),n(N,C),h(I,F,M),h(I,B,M),n(B,U),h(I,Q,M),h(I,b,M),n(b,W)},p:ue,d(I){I&&t(e),I&&t(a),I&&t(i),I&&t(y),I&&t(w),I&&t(j),I&&t(D),I&&t(O),I&&t(K),I&&t(E),I&&t(T),I&&t(H),I&&t(N),I&&t(F),I&&t(B),I&&t(Q),I&&t(b)}}}function Mt(p){let e,r;return e=new He({props:{game:p[0],$$slots:{default:[Nt]},$$scope:{ctx:p}}}),{c(){Pe(e.$$.fragment)},l(a){Te(e.$$.fragment,a)},m(a,i){je(e,a,i),r=!0},p(a,[i]){const o={};i&1&&(o.game=a[0]),i&2&&(o.$$scope={dirty:i,ctx:a}),e.$set(o)},i(a){r||(fe(e.$$.fragment,a),r=!0)},o(a){ce(e.$$.fragment,a),r=!1},d(a){De(e,a)}}}function Bt(p,e,r){let{game:a}=e;return p.$$set=i=>{"game"in i&&r(0,a=i.game)},[a]}class Lt extends we{constructor(e){super(),be(this,e,Bt,Mt,Ie,{game:0})}}function Vt(p){let e,r,a,i,o,y,w,q,v,g,A,$,u,S,j,D,L,O,K,R,E,T,z,H,N,C,F,B,U,Q;return{c(){e=m("h3"),r=s("Sound toys and instruments"),a=x(),i=m("p"),o=s(`I like to think about sound toys as musical instruments. I don't mean that they should be suited\r
    for performance or be capable of producing conventional music, but that they are interfaces that\r
    map to sound, and the affordances of their interfaces define them. There isn't a fundamental\r
    difference between the input-mapping-to-sound structure of an instrument in a DAW and `),y=m("i"),w=s("Electroplankton"),q=s("; they just differ in their affordances."),v=x(),g=m("p"),A=s(`Maybe that's self-evident (the structure described is extremely broad), but the point is that\r
    the affordances of an instrument's interface define that instrument even more than its sound.\r
    This is important because while game engines, DAWs, and other digital sound-making tools can\r
    produce the same sounds, they have vastly different built-in affordances, which will tend to be\r
    expressed in their instruments. If I want to make a certain kind of instrument, I should choose\r
    a tool with the appropriate affordances. If I want to use a specific tool to make an instrument,\r
    I should leverage what that tool is good at.`),$=x(),u=m("h3"),S=s("Stones"),j=x(),D=m("p"),L=m("i"),O=s("Stones"),K=s(` is a small exploration of one special affordance of Unity and many game engines: physics\r
    simulation. It uses a 3D point-and-click interface to move around blocks whose linear and angular\r
    velocity map to sound.`),R=x(),E=m("p"),T=s(`The sound generation is actually extremely simple. Each block plays a looping drone sound with a\r
    different sound for each texture, then linear velocity controls its volume and angular velocity\r
    controls its pitch. Even with this simple mapping, the physics can produce some very dynamic\r
    sounds, such as impact transients when the velocities abruptly change on collision. The\r
    different weights of each block texture also create different volume and pitch curves when\r
    dragging them around.`),z=x(),H=m("h3"),N=s("Problems"),C=x(),F=m("p"),B=m("i"),U=s("Stones"),Q=s(` definitely has some issues. Some of the physics are too sensitive, there's an odd disconnect\r
    between the player cursor and moving around blocks, the isometric view and lack of lighting hurts\r
    depth perception, and I don't think the pitch quantization works. Nevertheless, I think it's an interesting\r
    prototype and an idea I might like to do more with at some point.`),this.h()},l(b){e=c(b,"H3",{});var W=f(e);r=l(W,"Sound toys and instruments"),W.forEach(t),a=P(b),i=c(b,"P",{});var I=f(i);o=l(I,`I like to think about sound toys as musical instruments. I don't mean that they should be suited\r
    for performance or be capable of producing conventional music, but that they are interfaces that\r
    map to sound, and the affordances of their interfaces define them. There isn't a fundamental\r
    difference between the input-mapping-to-sound structure of an instrument in a DAW and `),y=c(I,"I",{});var M=f(y);w=l(M,"Electroplankton"),M.forEach(t),q=l(I,"; they just differ in their affordances."),I.forEach(t),v=P(b),g=c(b,"P",{});var X=f(g);A=l(X,`Maybe that's self-evident (the structure described is extremely broad), but the point is that\r
    the affordances of an instrument's interface define that instrument even more than its sound.\r
    This is important because while game engines, DAWs, and other digital sound-making tools can\r
    produce the same sounds, they have vastly different built-in affordances, which will tend to be\r
    expressed in their instruments. If I want to make a certain kind of instrument, I should choose\r
    a tool with the appropriate affordances. If I want to use a specific tool to make an instrument,\r
    I should leverage what that tool is good at.`),X.forEach(t),$=P(b),u=c(b,"H3",{});var Z=f(u);S=l(Z,"Stones"),Z.forEach(t),j=P(b),D=c(b,"P",{});var te=f(D);L=c(te,"I",{});var ee=f(L);O=l(ee,"Stones"),ee.forEach(t),K=l(te,` is a small exploration of one special affordance of Unity and many game engines: physics\r
    simulation. It uses a 3D point-and-click interface to move around blocks whose linear and angular\r
    velocity map to sound.`),te.forEach(t),R=P(b),E=c(b,"P",{});var J=f(E);T=l(J,`The sound generation is actually extremely simple. Each block plays a looping drone sound with a\r
    different sound for each texture, then linear velocity controls its volume and angular velocity\r
    controls its pitch. Even with this simple mapping, the physics can produce some very dynamic\r
    sounds, such as impact transients when the velocities abruptly change on collision. The\r
    different weights of each block texture also create different volume and pitch curves when\r
    dragging them around.`),J.forEach(t),z=P(b),H=c(b,"H3",{});var ae=f(H);N=l(ae,"Problems"),ae.forEach(t),C=P(b),F=c(b,"P",{class:!0});var Y=f(F);B=c(Y,"I",{});var ne=f(B);U=l(ne,"Stones"),ne.forEach(t),Q=l(Y,` definitely has some issues. Some of the physics are too sensitive, there's an odd disconnect\r
    between the player cursor and moving around blocks, the isometric view and lack of lighting hurts\r
    depth perception, and I don't think the pitch quantization works. Nevertheless, I think it's an interesting\r
    prototype and an idea I might like to do more with at some point.`),Y.forEach(t),this.h()},h(){k(F,"class","final")},m(b,W){h(b,e,W),n(e,r),h(b,a,W),h(b,i,W),n(i,o),n(i,y),n(y,w),n(i,q),h(b,v,W),h(b,g,W),n(g,A),h(b,$,W),h(b,u,W),n(u,S),h(b,j,W),h(b,D,W),n(D,L),n(L,O),n(D,K),h(b,R,W),h(b,E,W),n(E,T),h(b,z,W),h(b,H,W),n(H,N),h(b,C,W),h(b,F,W),n(F,B),n(B,U),n(F,Q)},p:ue,d(b){b&&t(e),b&&t(a),b&&t(i),b&&t(v),b&&t(g),b&&t($),b&&t(u),b&&t(j),b&&t(D),b&&t(R),b&&t(E),b&&t(z),b&&t(H),b&&t(C),b&&t(F)}}}function Rt(p){let e,r;return e=new He({props:{game:p[0],$$slots:{default:[Vt]},$$scope:{ctx:p}}}),{c(){Pe(e.$$.fragment)},l(a){Te(e.$$.fragment,a)},m(a,i){je(e,a,i),r=!0},p(a,[i]){const o={};i&1&&(o.game=a[0]),i&2&&(o.$$scope={dirty:i,ctx:a}),e.$set(o)},i(a){r||(fe(e.$$.fragment,a),r=!0)},o(a){ce(e.$$.fragment,a),r=!1},d(a){De(e,a)}}}function Kt(p,e,r){let{game:a}=e;return p.$$set=i=>{"game"in i&&r(0,a=i.game)},[a]}class Ct extends we{constructor(e){super(),be(this,e,Kt,Rt,Ie,{game:0})}}function Ft(p){let e,r,a,i,o,y,w,q;return{c(){e=m("p"),r=s(`goodbye.monster is an ongoing project. Players meet and care for monsters in a dark and\r
    ambiguous world. In many ways, it's a response to the instrumental role of creatures in creature\r
    collector games.`),a=x(),i=m("iframe"),y=x(),w=m("iframe"),this.h()},l(v){e=c(v,"P",{});var g=f(e);r=l(g,`goodbye.monster is an ongoing project. Players meet and care for monsters in a dark and\r
    ambiguous world. In many ways, it's a response to the instrumental role of creatures in creature\r
    collector games.`),g.forEach(t),a=P(v),i=c(v,"IFRAME",{src:!0,title:!0,frameborder:!0,allow:!0,class:!0}),f(i).forEach(t),y=P(v),w=c(v,"IFRAME",{title:!0,src:!0,frameborder:!0,allow:!0,class:!0}),f(w).forEach(t),this.h()},h(){Ve(i.src,o="https://www.youtube.com/embed/1tXSoDF18CA?si=Dpym31bXyPLfcL12")||k(i,"src",o),k(i,"title","goodbye.monster trailer"),k(i,"frameborder","1"),k(i,"allow","accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"),i.allowFullscreen=!0,k(i,"class","svelte-oqzu8p"),k(w,"title","goodbye.monster gameplay video"),Ve(w.src,q="https://player.vimeo.com/video/851962984?h=d7ced28ac1&byline=0&portrait=0")||k(w,"src",q),k(w,"frameborder","1"),k(w,"allow","autoplay; fullscreen; picture-in-picture"),w.allowFullscreen=!0,k(w,"class","svelte-oqzu8p")},m(v,g){h(v,e,g),n(e,r),h(v,a,g),h(v,i,g),h(v,y,g),h(v,w,g)},p:ue,d(v){v&&t(e),v&&t(a),v&&t(i),v&&t(y),v&&t(w)}}}function Ut(p){let e,r;return e=new He({props:{game:p[0],$$slots:{default:[Ft]},$$scope:{ctx:p}}}),{c(){Pe(e.$$.fragment)},l(a){Te(e.$$.fragment,a)},m(a,i){je(e,a,i),r=!0},p(a,[i]){const o={};i&1&&(o.game=a[0]),i&2&&(o.$$scope={dirty:i,ctx:a}),e.$set(o)},i(a){r||(fe(e.$$.fragment,a),r=!0)},o(a){ce(e.$$.fragment,a),r=!1},d(a){De(e,a)}}}function Yt(p,e,r){let{game:a}=e;return p.$$set=i=>{"game"in i&&r(0,a=i.game)},[a]}class Qt extends we{constructor(e){super(),be(this,e,Yt,Ut,Ie,{game:0})}}function Xt(p){let e,r,a,i,o,y,w,q,v,g,A,$,u,S,j,D,L,O,K,R,E,T,z,H,N,C,F,B,U,Q,b,W,I,M,X,Z,te,ee,J,ae,Y,ne;return{c(){e=m("p"),r=m("i"),a=s("Grid Garden"),i=s(` is my attempt at an incremental game for the spreadsheet. My goal was to\r
    leverage the ways we normally interact with spreadsheets - typing, copying, pasting, selecting,\r
    and deleting text in cells - and the data organization affordances of the grid. I was also\r
    inspired by\r
    `),o=m("a"),y=s("Everest Pipkin\u2019s "),w=m("i"),q=s("Barnacle Goose"),v=s(` and its item combinations and non-clicker incremental systems, which both felt suited for adaptation\r
    to the spreadsheet.`),g=x(),A=m("h3"),$=s("Process"),u=x(),S=m("p"),j=s(`I started with the ideas of creating items by typing, combining items, and creating an abstract\r
    garden on the grid of the spreadsheet. From there I decided on treating the spreadsheet as a\r
    space in which items can be combined and compartmentalizing item creation to an item that has a\r
    sort of input field. That then presented the question of what should happen when the player\r
    tries to create an invalid item or makes an error. While it may have worked for nothing to\r
    happen, it seemed more interesting to convert the invalid text by length into an item, compost,\r
    which could serve as the substrate for the garden. Around the same time, I thought of digging up\r
    buried items as another interaction, as only typing into a single cell to generate items felt\r
    too restrictive.`),D=x(),L=m("p"),O=s(`I then broke down the information that might need to exist for a cell in the garden and for an\r
    item. A single cell might need to hold item text placed by the player, a flag for compost, and\r
    text or an ID for a buried item. Items might need counts, descriptions, recipes, and visual\r
    information.`),K=x(),R=m("p"),E=s(`As I figured out what information was needed, I also started to lay out the structure of the\r
    workbook. I realized that for the amount of information a given cell needed it would be easiest\r
    to use multiple sheets in parallel, such that A1 of one sheet corresponds to A1 of the others. I\r
    created the main garden sheet that uses cell fills and conditional formatting for display and\r
    other only holds item text, a surface sheet that holds compost information, and an underground\r
    sheet that holds buried items. Structuring the information for items was simpler as that could\r
    exist in basic tables, organized in different sheets, and be easily accessed with Match and\r
    VLookup functions.`),T=x(),z=m("p"),H=s(`From there, implementation was relatively straightforward, learning VBA aside. And the project\r
    does use a significant amount of VBA, but its purpose is not to fight the inherent affordances\r
    of the spreadsheet. Rather the code mainly serves to apply complex comparisons and operations\r
    across worksheets and react to user input in a way that basic Excel functions cannot.`),N=x(),C=m("h3"),F=s("VBA and Excel"),B=x(),U=m("p"),Q=s(`Working in VBA was a challenge. I don\u2019t like the syntax and the errors are not especially clear\r
    or helpful. Working in Excel generally, however, was convenient in that it\u2019s very natural to\r
    edit and access tabular information, such as the inventory or item recipes. It calls for a\r
    different, more data driven kind of design and thinking than I\u2019m used to and which I hope to\r
    transfer to games outside of spreadsheets.`),b=x(),W=m("h3"),I=s("Shovels"),M=x(),X=m("p"),Z=s(`A small feature I really like and would like to highlight is the dig-area scaling with shovels.\r
    Aside from the comedic gaminess of more shovels allowing you to dig more efficiently, I like the\r
    scaling system I ended up with where each shovel allows you to dig in an area one row or column\r
    larger. I first tried having each shovel increase the area by one cell, but the growth of that\r
    felt much too slow and didn\u2019t adequately incentivize making shovels. Squaring the number of\r
    shovels is another obvious option, and one that might even work well, but I suspected it would\r
    scale too quickly. The row and column system is a middle ground. The current system may also be\r
    somewhat unintuitive, but in a game that isn\u2019t too complicated overall, I think the bit of extra\r
    complexity in one of the primary interactions (digging) is a benefit.`),te=x(),ee=m("h3"),J=s("Improvement"),ae=x(),Y=m("p"),ne=s(`If I had more time to work on this or were to continue work on it, I\u2019d look at tuning the\r
    incremental systems, which I didn\u2019t have much time to do, improving logging, easing recipe\r
    discovery, and adding more items, especially items with special behaviors like the materializer\r
    and automaton. One of the more exciting things to me currently is the little machine that can be\r
    created by placing an automaton below a materializer, and I would like to have more of those be\r
    possible. And of course, there are probably bugs that I haven\u2019t found and fixed.`),this.h()},l(d){e=c(d,"P",{});var G=f(e);r=c(G,"I",{});var oe=f(r);a=l(oe,"Grid Garden"),oe.forEach(t),i=l(G,` is my attempt at an incremental game for the spreadsheet. My goal was to\r
    leverage the ways we normally interact with spreadsheets - typing, copying, pasting, selecting,\r
    and deleting text in cells - and the data organization affordances of the grid. I was also\r
    inspired by\r
    `),o=c(G,"A",{href:!0,target:!0,rel:!0});var pe=f(o);y=l(pe,"Everest Pipkin\u2019s "),w=c(pe,"I",{});var de=f(w);q=l(de,"Barnacle Goose"),de.forEach(t),pe.forEach(t),v=l(G,` and its item combinations and non-clicker incremental systems, which both felt suited for adaptation\r
    to the spreadsheet.`),G.forEach(t),g=P(d),A=c(d,"H3",{});var _e=f(A);$=l(_e,"Process"),_e.forEach(t),u=P(d),S=c(d,"P",{});var ke=f(S);j=l(ke,`I started with the ideas of creating items by typing, combining items, and creating an abstract\r
    garden on the grid of the spreadsheet. From there I decided on treating the spreadsheet as a\r
    space in which items can be combined and compartmentalizing item creation to an item that has a\r
    sort of input field. That then presented the question of what should happen when the player\r
    tries to create an invalid item or makes an error. While it may have worked for nothing to\r
    happen, it seemed more interesting to convert the invalid text by length into an item, compost,\r
    which could serve as the substrate for the garden. Around the same time, I thought of digging up\r
    buried items as another interaction, as only typing into a single cell to generate items felt\r
    too restrictive.`),ke.forEach(t),D=P(d),L=c(d,"P",{});var ge=f(L);O=l(ge,`I then broke down the information that might need to exist for a cell in the garden and for an\r
    item. A single cell might need to hold item text placed by the player, a flag for compost, and\r
    text or an ID for a buried item. Items might need counts, descriptions, recipes, and visual\r
    information.`),ge.forEach(t),K=P(d),R=c(d,"P",{});var he=f(R);E=l(he,`As I figured out what information was needed, I also started to lay out the structure of the\r
    workbook. I realized that for the amount of information a given cell needed it would be easiest\r
    to use multiple sheets in parallel, such that A1 of one sheet corresponds to A1 of the others. I\r
    created the main garden sheet that uses cell fills and conditional formatting for display and\r
    other only holds item text, a surface sheet that holds compost information, and an underground\r
    sheet that holds buried items. Structuring the information for items was simpler as that could\r
    exist in basic tables, organized in different sheets, and be easily accessed with Match and\r
    VLookup functions.`),he.forEach(t),T=P(d),z=c(d,"P",{});var Ee=f(z);H=l(Ee,`From there, implementation was relatively straightforward, learning VBA aside. And the project\r
    does use a significant amount of VBA, but its purpose is not to fight the inherent affordances\r
    of the spreadsheet. Rather the code mainly serves to apply complex comparisons and operations\r
    across worksheets and react to user input in a way that basic Excel functions cannot.`),Ee.forEach(t),N=P(d),C=c(d,"H3",{});var ye=f(C);F=l(ye,"VBA and Excel"),ye.forEach(t),B=P(d),U=c(d,"P",{});var me=f(U);Q=l(me,`Working in VBA was a challenge. I don\u2019t like the syntax and the errors are not especially clear\r
    or helpful. Working in Excel generally, however, was convenient in that it\u2019s very natural to\r
    edit and access tabular information, such as the inventory or item recipes. It calls for a\r
    different, more data driven kind of design and thinking than I\u2019m used to and which I hope to\r
    transfer to games outside of spreadsheets.`),me.forEach(t),b=P(d),W=c(d,"H3",{});var $e=f(W);I=l($e,"Shovels"),$e.forEach(t),M=P(d),X=c(d,"P",{});var ve=f(X);Z=l(ve,`A small feature I really like and would like to highlight is the dig-area scaling with shovels.\r
    Aside from the comedic gaminess of more shovels allowing you to dig more efficiently, I like the\r
    scaling system I ended up with where each shovel allows you to dig in an area one row or column\r
    larger. I first tried having each shovel increase the area by one cell, but the growth of that\r
    felt much too slow and didn\u2019t adequately incentivize making shovels. Squaring the number of\r
    shovels is another obvious option, and one that might even work well, but I suspected it would\r
    scale too quickly. The row and column system is a middle ground. The current system may also be\r
    somewhat unintuitive, but in a game that isn\u2019t too complicated overall, I think the bit of extra\r
    complexity in one of the primary interactions (digging) is a benefit.`),ve.forEach(t),te=P(d),ee=c(d,"H3",{});var se=f(ee);J=l(se,"Improvement"),se.forEach(t),ae=P(d),Y=c(d,"P",{class:!0});var Ae=f(Y);ne=l(Ae,`If I had more time to work on this or were to continue work on it, I\u2019d look at tuning the\r
    incremental systems, which I didn\u2019t have much time to do, improving logging, easing recipe\r
    discovery, and adding more items, especially items with special behaviors like the materializer\r
    and automaton. One of the more exciting things to me currently is the little machine that can be\r
    created by placing an automaton below a materializer, and I would like to have more of those be\r
    possible. And of course, there are probably bugs that I haven\u2019t found and fixed.`),Ae.forEach(t),this.h()},h(){k(o,"href","https://everest-pipkin.com/barnacle-goose/"),k(o,"target","_blank"),k(o,"rel","noopener noreferrer"),k(Y,"class","final")},m(d,G){h(d,e,G),n(e,r),n(r,a),n(e,i),n(e,o),n(o,y),n(o,w),n(w,q),n(e,v),h(d,g,G),h(d,A,G),n(A,$),h(d,u,G),h(d,S,G),n(S,j),h(d,D,G),h(d,L,G),n(L,O),h(d,K,G),h(d,R,G),n(R,E),h(d,T,G),h(d,z,G),n(z,H),h(d,N,G),h(d,C,G),n(C,F),h(d,B,G),h(d,U,G),n(U,Q),h(d,b,G),h(d,W,G),n(W,I),h(d,M,G),h(d,X,G),n(X,Z),h(d,te,G),h(d,ee,G),n(ee,J),h(d,ae,G),h(d,Y,G),n(Y,ne)},p:ue,d(d){d&&t(e),d&&t(g),d&&t(A),d&&t(u),d&&t(S),d&&t(D),d&&t(L),d&&t(K),d&&t(R),d&&t(T),d&&t(z),d&&t(N),d&&t(C),d&&t(B),d&&t(U),d&&t(b),d&&t(W),d&&t(M),d&&t(X),d&&t(te),d&&t(ee),d&&t(ae),d&&t(Y)}}}function Jt(p){let e,r;return e=new He({props:{game:p[0],$$slots:{default:[Xt]},$$scope:{ctx:p}}}),{c(){Pe(e.$$.fragment)},l(a){Te(e.$$.fragment,a)},m(a,i){je(e,a,i),r=!0},p(a,[i]){const o={};i&1&&(o.game=a[0]),i&2&&(o.$$scope={dirty:i,ctx:a}),e.$set(o)},i(a){r||(fe(e.$$.fragment,a),r=!0)},o(a){ce(e.$$.fragment,a),r=!1},d(a){De(e,a)}}}function Zt(p,e,r){let{game:a}=e;return p.$$set=i=>{"game"in i&&r(0,a=i.game)},[a]}class ea extends we{constructor(e){super(),be(this,e,Zt,Jt,Ie,{game:0})}}const aa={ITCH:"itch",LOCAL:"local"},re={GOODBYE_MONSTER:"goodbyemonster",STELLATA:"stellata-waterway",GRID_GARDEN:"grid-garden",AUTUMN_DAY:"an-autumn-day",VIOLET_SNAIL:"the-harrowing-life-of-the-violet-snail",STONES:"stones",INTERFERENCE:"interference"},na={[re.STELLATA]:{type:"itch",user:"mattmora",id:re.STELLATA,role:"Solo project",date:"2022",brief:"A retro-styled infinite runner that takes inspiration from games of the 90s and early 2000s.",article:!0,video:!1,component:zt},[re.AUTUMN_DAY]:{type:"itch",user:"mattmora",id:re.AUTUMN_DAY,role:"Solo project",date:"2022",brief:"A game about sitting down and watching the wind.",article:!0,video:!1,component:qt},[re.VIOLET_SNAIL]:{type:"itch",user:"mattmora",id:re.VIOLET_SNAIL,role:"Solo project",date:"2022",brief:"An interactive rendering of an article about a sea snail by Dr. Rebecca Helm.",article:!0,video:!1,component:Lt},[re.STONES]:{type:"itch",user:"mattmora",id:re.STONES,role:"Solo project",date:"2022",brief:"A small 3D physics-based sound toy.",article:!0,video:!1,component:Ct},[re.GRID_GARDEN]:{type:"itch",user:"mattmora",id:re.GRID_GARDEN,role:"Solo project",date:"2022",brief:"An incremental game for Excel.",article:!0,video:!1,component:ea},[re.GOODBYE_MONSTER]:{type:"itch",user:"beckettrowan",id:re.GOODBYE_MONSTER,role:"Designer, Programmer, Audio",date:"2023",brief:"An text-based adventure and pet game for the web that challenges the instrumentality of monsters in games.",article:!1,video:!0,link:"https://goodbye.monster",component:Qt}};export{re as G,aa as I,na as a,He as b};
