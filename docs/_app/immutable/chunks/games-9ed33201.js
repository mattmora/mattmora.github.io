import{S as we,i as be,s as Ie,k as m,q as s,a as P,l as c,m as f,r as l,c as T,h as t,n as k,b as h,F as n,u as Ve,g as It,t as ce,d as _t,f as fe,C as kt,E as Re,G as Et,H as $t,I as At,e as yt,B as ue,w as Pe,x as Te,y as je,z as De}from"./index-2324210b.js";function vt(p){var v;let e,r,a=((v=p[0].link)!=null?v:p[0].url)+"",i,o;return{c(){e=m("a"),r=s("Play at "),i=s(a),this.h()},l(d){e=c(d,"A",{href:!0,target:!0,rel:!0,class:!0});var S=f(e);r=l(S,"Play at "),i=l(S,a),S.forEach(t),this.h()},h(){var d;k(e,"href",o=(d=p[0].link)!=null?d:p[0].url),k(e,"target","_blank"),k(e,"rel","noopener noreferrer"),k(e,"class","svelte-1n3nhpt")},m(d,S){h(d,e,S),n(e,r),n(e,i)},p(d,S){var g,y;S&1&&a!==(a=((g=d[0].link)!=null?g:d[0].url)+"")&&Ve(i,a),S&1&&o!==(o=(y=d[0].link)!=null?y:d[0].url)&&k(e,"href",o)},d(d){d&&t(e)}}}function St(p){let e,r,a,i,o,v,d;const S=p[3].default,g=kt(S,p,p[2],null);return{c(){e=m("div"),r=m("div"),a=m("img"),v=P(),g&&g.c(),this.h()},l(y){e=c(y,"DIV",{});var E=f(e);r=c(E,"DIV",{class:!0});var $=f(r);a=c($,"IMG",{src:!0,alt:!0,class:!0}),$.forEach(t),v=T(E),g&&g.l(E),E.forEach(t),this.h()},h(){Re(a.src,i=p[0].cover_image)||k(a,"src",i),k(a,"alt",o=p[0].title+" cover image"),k(a,"class","svelte-1n3nhpt"),k(r,"class","float svelte-1n3nhpt")},m(y,E){h(y,e,E),n(e,r),n(r,a),n(e,v),g&&g.m(e,null),d=!0},p(y,E){(!d||E&1&&!Re(a.src,i=y[0].cover_image))&&k(a,"src",i),(!d||E&1&&o!==(o=y[0].title+" cover image"))&&k(a,"alt",o),g&&g.p&&(!d||E&4)&&Et(g,S,y,y[2],d?At(S,y[2],E,null):$t(y[2]),null)},i(y){d||(fe(g,y),d=!0)},o(y){ce(g,y),d=!1},d(y){y&&t(e),g&&g.d(y)}}}function xt(p){let e,r=p[0].brief+"",a,i,o,v,d,S,g,y,E=p[0].article&&wt(p),$=p[0].video&&bt(p);return{c(){e=m("p"),a=s(r),i=P(),o=m("a"),v=s("Play"),S=P(),E&&E.c(),g=P(),$&&$.c(),y=yt(),this.h()},l(b){e=c(b,"P",{class:!0});var A=f(e);a=l(A,r),A.forEach(t),i=T(b),o=c(b,"A",{href:!0,target:!0,rel:!0,class:!0});var x=f(o);v=l(x,"Play"),x.forEach(t),S=T(b),E&&E.l(b),g=T(b),$&&$.l(b),y=yt(),this.h()},h(){var b;k(e,"class","svelte-1n3nhpt"),k(o,"href",d=(b=p[0].link)!=null?b:p[0].url),k(o,"target","_blank"),k(o,"rel","noopener noreferrer"),k(o,"class","svelte-1n3nhpt")},m(b,A){h(b,e,A),n(e,a),h(b,i,A),h(b,o,A),n(o,v),h(b,S,A),E&&E.m(b,A),h(b,g,A),$&&$.m(b,A),h(b,y,A)},p(b,A){var x;A&1&&r!==(r=b[0].brief+"")&&Ve(a,r),A&1&&d!==(d=(x=b[0].link)!=null?x:b[0].url)&&k(o,"href",d),b[0].article?E?E.p(b,A):(E=wt(b),E.c(),E.m(g.parentNode,g)):E&&(E.d(1),E=null),b[0].video?$?$.p(b,A):($=bt(b),$.c(),$.m(y.parentNode,y)):$&&($.d(1),$=null)},i:ue,o:ue,d(b){b&&t(e),b&&t(i),b&&t(o),b&&t(S),E&&E.d(b),b&&t(g),$&&$.d(b),b&&t(y)}}}function wt(p){let e,r,a,i;return{c(){e=s("/ "),r=m("a"),a=s("Read"),this.h()},l(o){e=l(o,"/ "),r=c(o,"A",{href:!0,class:!0});var v=f(r);a=l(v,"Read"),v.forEach(t),this.h()},h(){k(r,"href",i="/articles/"+p[0].id),k(r,"class","svelte-1n3nhpt")},m(o,v){h(o,e,v),h(o,r,v),n(r,a)},p(o,v){v&1&&i!==(i="/articles/"+o[0].id)&&k(r,"href",i)},d(o){o&&t(e),o&&t(r)}}}function bt(p){let e,r,a,i;return{c(){e=s("/ "),r=m("a"),a=s("Watch"),this.h()},l(o){e=l(o,"/ "),r=c(o,"A",{href:!0,class:!0});var v=f(r);a=l(v,"Watch"),v.forEach(t),this.h()},h(){k(r,"href",i="/articles/"+p[0].id),k(r,"class","svelte-1n3nhpt")},m(o,v){h(o,e,v),h(o,r,v),n(r,a)},p(o,v){v&1&&i!==(i="/articles/"+o[0].id)&&k(r,"href",i)},d(o){o&&t(e),o&&t(r)}}}function Pt(p){var W;let e,r,a=((W=p[0].title)!=null?W:". . .")+"",i,o,v,d,S=p[0].role+" / "+p[0].date,g,y,E,$,b,A,x,q,H=!p[1]&&vt(p);const R=[xt,St],M=[];function K(j,G){return j[1]?0:1}return A=K(p),x=M[A]=R[A](p),{c(){e=m("section"),r=m("h3"),i=s(a),o=P(),v=m("span"),d=s("/ "),g=s(S),y=P(),H&&H.c(),E=P(),$=m("hr"),b=P(),x.c(),this.h()},l(j){e=c(j,"SECTION",{});var G=f(e);r=c(G,"H3",{class:!0});var D=f(r);i=l(D,a),o=T(D),v=c(D,"SPAN",{class:!0});var O=f(v);d=l(O,"/ "),g=l(O,S),O.forEach(t),D.forEach(t),y=T(G),H&&H.l(G),E=T(G),$=c(G,"HR",{}),b=T(G),x.l(G),G.forEach(t),this.h()},h(){k(v,"class","info svelte-1n3nhpt"),k(r,"class","svelte-1n3nhpt")},m(j,G){h(j,e,G),n(e,r),n(r,i),n(r,o),n(r,v),n(v,d),n(v,g),n(e,y),H&&H.m(e,null),n(e,E),n(e,$),n(e,b),M[A].m(e,null),q=!0},p(j,[G]){var O;(!q||G&1)&&a!==(a=((O=j[0].title)!=null?O:". . .")+"")&&Ve(i,a),(!q||G&1)&&S!==(S=j[0].role+" / "+j[0].date)&&Ve(g,S),j[1]?H&&(H.d(1),H=null):H?H.p(j,G):(H=vt(j),H.c(),H.m(e,E));let D=A;A=K(j),A===D?M[A].p(j,G):(It(),ce(M[D],1,1,()=>{M[D]=null}),_t(),x=M[A],x?x.p(j,G):(x=M[A]=R[A](j),x.c()),fe(x,1),x.m(e,null))},i(j){q||(fe(x),q=!0)},o(j){ce(x),q=!1},d(j){j&&t(e),H&&H.d(),M[A].d()}}}function Tt(p,e,r){let{$$slots:a={},$$scope:i}=e,{game:o}=e,{brief:v=!1}=e;return p.$$set=d=>{"game"in d&&r(0,o=d.game),"brief"in d&&r(1,v=d.brief),"$$scope"in d&&r(2,i=d.$$scope)},[o,v,i,a]}class He extends we{constructor(e){super(),be(this,e,Tt,Pt,Ie,{game:0,brief:1})}}function jt(p){let e,r,a,i,o,v,d,S,g,y,E,$,b,A,x,q,H,R,M,K,W,j,G;return{c(){e=m("p"),r=s("Another short game I made in Prototype Studio at the NYU Game Center, the prompt that inspired "),a=m("i"),i=s("An Autumn Day"),o=s(`\r
    was to make a game "for" a classmate. It could be a game they would like, a game in their style,\r
    a remake of one of their games, or anything similar. I was assigned to make a game for my classmate\r
    `),v=m("a"),d=s("Hao"),S=s(` and I chose\r
    to attempt to emulate his style and make a sort of spinoff to a few of his games that feature a common\r
    character.`),g=P(),y=m("p"),E=s(`As a quick way to start getting into Hao's visual style (and because I thought it would be\r
    funny), I used `),$=m("a"),b=s("AssetStudio"),A=s(`\r
    to extract the sprites from a couple of Hao's games,\r
    `),x=m("a"),q=s("I want to hear that again"),H=s(`\r
    and\r
    `),R=m("a"),M=s("There's a Beautiful Star"),K=s(". At that point, I also decided I would use Hao's rabbit character from those games."),W=P(),j=m("p"),G=s(`In terms of game design, Hao excels conveying complex and abstract emotions through simple\r
    controls and mechanics, which is of course a challenge to emulate, so I tried to just follow the\r
    structure of the two games I had taken assets from. Each one starts by establishing a simple\r
    task for the player and through the act of doing this task, its meaning takes form.`),this.h()},l(D){e=c(D,"P",{});var O=f(e);r=l(O,"Another short game I made in Prototype Studio at the NYU Game Center, the prompt that inspired "),a=c(O,"I",{});var C=f(a);i=l(C,"An Autumn Day"),C.forEach(t),o=l(O,`\r
    was to make a game "for" a classmate. It could be a game they would like, a game in their style,\r
    a remake of one of their games, or anything similar. I was assigned to make a game for my classmate\r
    `),v=c(O,"A",{href:!0,target:!0,rel:!0});var F=f(v);d=l(F,"Hao"),F.forEach(t),S=l(O,` and I chose\r
    to attempt to emulate his style and make a sort of spinoff to a few of his games that feature a common\r
    character.`),O.forEach(t),g=T(D),y=c(D,"P",{});var L=f(y);E=l(L,`As a quick way to start getting into Hao's visual style (and because I thought it would be\r
    funny), I used `),$=c(L,"A",{href:!0,target:!0,rel:!0});var U=f($);b=l(U,"AssetStudio"),U.forEach(t),A=l(L,`\r
    to extract the sprites from a couple of Hao's games,\r
    `),x=c(L,"A",{href:!0,target:!0,rel:!0});var Q=f(x);q=l(Q,"I want to hear that again"),Q.forEach(t),H=l(L,`\r
    and\r
    `),R=c(L,"A",{href:!0,target:!0,rel:!0});var w=f(R);M=l(w,"There's a Beautiful Star"),w.forEach(t),K=l(L,". At that point, I also decided I would use Hao's rabbit character from those games."),L.forEach(t),W=T(D),j=c(D,"P",{});var z=f(j);G=l(z,`In terms of game design, Hao excels conveying complex and abstract emotions through simple\r
    controls and mechanics, which is of course a challenge to emulate, so I tried to just follow the\r
    structure of the two games I had taken assets from. Each one starts by establishing a simple\r
    task for the player and through the act of doing this task, its meaning takes form.`),z.forEach(t),this.h()},h(){k(v,"href","https://haoliao.itch.io/"),k(v,"target","_blank"),k(v,"rel","noopener noreferrer"),k($,"href","https://github.com/Perfare/AssetStudio"),k($,"target","_blank"),k($,"rel","noopener noreferrer"),k(x,"href","https://haoliao.itch.io/i-want-to-hear-that-again"),k(x,"target","_blank"),k(x,"rel","noopener noreferrer"),k(R,"href","https://haoliao.itch.io/there-is-a-beautiful-star"),k(R,"target","_blank"),k(R,"rel","noopener noreferrer")},m(D,O){h(D,e,O),n(e,r),n(e,a),n(a,i),n(e,o),n(e,v),n(v,d),n(e,S),h(D,g,O),h(D,y,O),n(y,E),n(y,$),n($,b),n(y,A),n(y,x),n(x,q),n(y,H),n(y,R),n(R,M),n(y,K),h(D,W,O),h(D,j,O),n(j,G)},p:ue,d(D){D&&t(e),D&&t(g),D&&t(y),D&&t(W),D&&t(j)}}}function Dt(p){let e,r;return e=new He({props:{game:p[0],$$slots:{default:[jt]},$$scope:{ctx:p}}}),{c(){Pe(e.$$.fragment)},l(a){Te(e.$$.fragment,a)},m(a,i){je(e,a,i),r=!0},p(a,[i]){const o={};i&1&&(o.game=a[0]),i&2&&(o.$$scope={dirty:i,ctx:a}),e.$set(o)},i(a){r||(fe(e.$$.fragment,a),r=!0)},o(a){ce(e.$$.fragment,a),r=!1},d(a){De(e,a)}}}function Ht(p,e,r){let{game:a}=e;return p.$$set=i=>{"game"in i&&r(0,a=i.game)},[a]}class Gt extends we{constructor(e){super(),be(this,e,Ht,Dt,Ie,{game:0})}}function Wt(p){let e,r,a,i,o,v,d,S,g,y,E,$,b,A,x,q,H,R,M,K,W,j,G,D,O,C,F,L,U,Q,w,z,I,B,X,Z,te,ee,J,ae,Y,ne,u,N,oe,pe,de,_e,ke,ge,he,Ee,ye,me,$e,ve,se,Ae,Ge,Ke,Ce,ze,Se,Fe,Ne,le,Ue,We,Ye,Qe,Oe,Xe,Je;return{c(){e=m("p"),r=m("i"),a=s("Stellata Waterway"),i=s(` started as a recreation of the systems and mechanics of one of my\r
    favorite games as kid (and still), `),o=m("i"),v=s("Klonoa 2: Lunatea's Veil"),d=s(`. Specifically, my design is\r
    directly based on\r
    `),S=m("a"),g=s("the first phase of the game's final boss"),y=s("."),E=P(),$=m("h3"),b=s("Making the game"),A=P(),x=m("p"),q=s("I started with the space and movement system, trying to recreate aspects of "),H=m("i"),R=s("Klonoa"),M=s(`'s\r
    design that I liked. One was the movement around the tunnel, which has a certain sense of\r
    inertia. The tunnel and camera don't immediately rotate to center the player and they don't\r
    immediately stop rotating when the player stops moving to the side. Another was the camera\r
    position, which is slightly below the tunnel's center and angled slightly downward, which\r
    compared to a centered and forward facing camera, as I first tried, is more readable and makes\r
    the space feel larger.`),K=P(),W=m("p"),j=s("But for various parts of the movement system, I chose to stray from "),G=m("i"),D=s("Klonoa"),O=s(`'s design.\r
    `),C=m("i"),F=s("Klonoa"),L=s(` is a rather slow game which suits its tone. But I was interested in making\r
    something more action-oriented, so the player moves much faster than in `),U=m("i"),Q=s("Klonoa"),w=s(`. Likewise,\r
    `),z=m("i"),I=s("Klonoa"),B=s(`\r
    has a midair "flutter" mechanic that aids slow, deliberate platforming. That didn't feel suited to\r
    what I was making, so I left it out. In general, as my game came together, it started to form its\r
    own identity and I moved away from simply recreating a reference. I did, however, arrive at a similar\r
    double jump system to `),X=m("i"),Z=s("Klonoa"),te=s(", though more organically than as a recreation."),ee=P(),J=m("p"),ae=s(`Coming up with the double jump system was a memorable moment to me in "finding the fun" in a\r
    system. I had implemented nearly every other mechanic in the game and while testing just\r
    happened to hit a star while midair. It was immediately obvious that doing so should give the\r
    player another jump. This mechanic became a central part of what makes the game fun and\r
    challenging. It's by no means an innovative mechanic (plenty of platformers including `),Y=m("i"),ne=s("Klonoa"),u=s(` feature similar mechanics), but the way I arrived at it through making and testing is a process\r
    I hope to repeat.`),N=P(),oe=m("p"),pe=s(`The last thing I made was the level. As another game made in one week, making a boss or a level\r
    with a satisfying end seemed out of scope, so I decided to again diverge from `),de=m("i"),_e=s("Klonoa"),ke=s(` and create\r
    an infinite runner. I designed a basic level that could loop, added a scoring system to provide a\r
    clear goal, and linked the score to the player's speed as a basic difficulty ramp. There are a few\r
    issues with the design, such as level readability at high speed and extreme bias towards certain\r
    scoring strategies, but there's nothing beyond fixing and things mostly function as I'd hoped.`),ge=P(),he=m("h3"),Ee=s("Playing my own games"),ye=P(),me=m("p"),$e=s(`Of all of my games, this is the one I probably enjoy playing the most, which I don't think means\r
    it's better (certainly it's hard to properly enjoy narrative, puzzle, or other\r
    one-time-experience games as their designer, but that doesn't mean they're worse), but it's a\r
    valuable observation to make in developing my design process. I enjoy action-oriented games and\r
    I can apparently make one, at least to my own taste, yet I have rarely made such games. If I\r
    want to make more action-oriented games, I need to question what about my current circumstances,\r
    intuitions, and processes as designer might be drawing me away from doing so.`),ve=P(),se=m("p"),Ae=s(`One idea is that I often get caught up in the idea of having a higher concept or purpose for the\r
    game than simply to be fun. I avoided that thinking with `),Ge=m("i"),Ke=s("Stellata Waterway"),Ce=s(` because it was\r
    intended as just a mechanical homage. Instead of concept, I was able to focus on small features and\r
    interactions that I enjoyed, and I found that even without a driving concept, new and interesting\r
    ideas came out of the processing of making. Maybe if I want to make more games like this, I need\r
    to think less conceptually and just incrementally build on small features that excite me.`),ze=P(),Se=m("h3"),Fe=s("Tunnel runners"),Ne=P(),le=m("p"),Ue=s(`Since finishing this game, I've also enjoyed hearing what games it reminds people of. People\r
    have likened it to Vectrex games, a sequence in `),We=m("i"),Ye=s("Spyro the Dragon"),Qe=s(`, and\r
    `),Oe=m("i"),Xe=s("Sonic the Hedgehog 2"),Je=s(`. While none of those were on my mind when making this, it's\r
    interesting to see more instances of what I've come to call "tunnel runners" as a relatively\r
    uncommon spatial system.`),this.h()},l(_){e=c(_,"P",{});var V=f(e);r=c(V,"I",{});var Ze=f(r);a=l(Ze,"Stellata Waterway"),Ze.forEach(t),i=l(V,` started as a recreation of the systems and mechanics of one of my\r
    favorite games as kid (and still), `),o=c(V,"I",{});var et=f(o);v=l(et,"Klonoa 2: Lunatea's Veil"),et.forEach(t),d=l(V,`. Specifically, my design is\r
    directly based on\r
    `),S=c(V,"A",{href:!0,target:!0,rel:!0});var tt=f(S);g=l(tt,"the first phase of the game's final boss"),tt.forEach(t),y=l(V,"."),V.forEach(t),E=T(_),$=c(_,"H3",{});var at=f($);b=l(at,"Making the game"),at.forEach(t),A=T(_),x=c(_,"P",{});var qe=f(x);q=l(qe,"I started with the space and movement system, trying to recreate aspects of "),H=c(qe,"I",{});var nt=f(H);R=l(nt,"Klonoa"),nt.forEach(t),M=l(qe,`'s\r
    design that I liked. One was the movement around the tunnel, which has a certain sense of\r
    inertia. The tunnel and camera don't immediately rotate to center the player and they don't\r
    immediately stop rotating when the player stops moving to the side. Another was the camera\r
    position, which is slightly below the tunnel's center and angled slightly downward, which\r
    compared to a centered and forward facing camera, as I first tried, is more readable and makes\r
    the space feel larger.`),qe.forEach(t),K=T(_),W=c(_,"P",{});var ie=f(W);j=l(ie,"But for various parts of the movement system, I chose to stray from "),G=c(ie,"I",{});var it=f(G);D=l(it,"Klonoa"),it.forEach(t),O=l(ie,`'s design.\r
    `),C=c(ie,"I",{});var rt=f(C);F=l(rt,"Klonoa"),rt.forEach(t),L=l(ie,` is a rather slow game which suits its tone. But I was interested in making\r
    something more action-oriented, so the player moves much faster than in `),U=c(ie,"I",{});var ot=f(U);Q=l(ot,"Klonoa"),ot.forEach(t),w=l(ie,`. Likewise,\r
    `),z=c(ie,"I",{});var st=f(z);I=l(st,"Klonoa"),st.forEach(t),B=l(ie,`\r
    has a midair "flutter" mechanic that aids slow, deliberate platforming. That didn't feel suited to\r
    what I was making, so I left it out. In general, as my game came together, it started to form its\r
    own identity and I moved away from simply recreating a reference. I did, however, arrive at a similar\r
    double jump system to `),X=c(ie,"I",{});var lt=f(X);Z=l(lt,"Klonoa"),lt.forEach(t),te=l(ie,", though more organically than as a recreation."),ie.forEach(t),ee=T(_),J=c(_,"P",{});var Me=f(J);ae=l(Me,`Coming up with the double jump system was a memorable moment to me in "finding the fun" in a\r
    system. I had implemented nearly every other mechanic in the game and while testing just\r
    happened to hit a star while midair. It was immediately obvious that doing so should give the\r
    player another jump. This mechanic became a central part of what makes the game fun and\r
    challenging. It's by no means an innovative mechanic (plenty of platformers including `),Y=c(Me,"I",{});var ht=f(Y);ne=l(ht,"Klonoa"),ht.forEach(t),u=l(Me,` feature similar mechanics), but the way I arrived at it through making and testing is a process\r
    I hope to repeat.`),Me.forEach(t),N=T(_),oe=c(_,"P",{});var Be=f(oe);pe=l(Be,`The last thing I made was the level. As another game made in one week, making a boss or a level\r
    with a satisfying end seemed out of scope, so I decided to again diverge from `),de=c(Be,"I",{});var mt=f(de);_e=l(mt,"Klonoa"),mt.forEach(t),ke=l(Be,` and create\r
    an infinite runner. I designed a basic level that could loop, added a scoring system to provide a\r
    clear goal, and linked the score to the player's speed as a basic difficulty ramp. There are a few\r
    issues with the design, such as level readability at high speed and extreme bias towards certain\r
    scoring strategies, but there's nothing beyond fixing and things mostly function as I'd hoped.`),Be.forEach(t),ge=T(_),he=c(_,"H3",{});var ct=f(he);Ee=l(ct,"Playing my own games"),ct.forEach(t),ye=T(_),me=c(_,"P",{});var ft=f(me);$e=l(ft,`Of all of my games, this is the one I probably enjoy playing the most, which I don't think means\r
    it's better (certainly it's hard to properly enjoy narrative, puzzle, or other\r
    one-time-experience games as their designer, but that doesn't mean they're worse), but it's a\r
    valuable observation to make in developing my design process. I enjoy action-oriented games and\r
    I can apparently make one, at least to my own taste, yet I have rarely made such games. If I\r
    want to make more action-oriented games, I need to question what about my current circumstances,\r
    intuitions, and processes as designer might be drawing me away from doing so.`),ft.forEach(t),ve=T(_),se=c(_,"P",{});var Le=f(se);Ae=l(Le,`One idea is that I often get caught up in the idea of having a higher concept or purpose for the\r
    game than simply to be fun. I avoided that thinking with `),Ge=c(Le,"I",{});var dt=f(Ge);Ke=l(dt,"Stellata Waterway"),dt.forEach(t),Ce=l(Le,` because it was\r
    intended as just a mechanical homage. Instead of concept, I was able to focus on small features and\r
    interactions that I enjoyed, and I found that even without a driving concept, new and interesting\r
    ideas came out of the processing of making. Maybe if I want to make more games like this, I need\r
    to think less conceptually and just incrementally build on small features that excite me.`),Le.forEach(t),ze=T(_),Se=c(_,"H3",{});var ut=f(Se);Fe=l(ut,"Tunnel runners"),ut.forEach(t),Ne=T(_),le=c(_,"P",{class:!0});var xe=f(le);Ue=l(xe,`Since finishing this game, I've also enjoyed hearing what games it reminds people of. People\r
    have likened it to Vectrex games, a sequence in `),We=c(xe,"I",{});var pt=f(We);Ye=l(pt,"Spyro the Dragon"),pt.forEach(t),Qe=l(xe,`, and\r
    `),Oe=c(xe,"I",{});var gt=f(Oe);Xe=l(gt,"Sonic the Hedgehog 2"),gt.forEach(t),Je=l(xe,`. While none of those were on my mind when making this, it's\r
    interesting to see more instances of what I've come to call "tunnel runners" as a relatively\r
    uncommon spatial system.`),xe.forEach(t),this.h()},h(){k(S,"href","https://youtu.be/6JQQhQK05SY?t=205"),k(S,"target","_blank"),k(S,"rel","noopener noreferrer"),k(le,"class","final")},m(_,V){h(_,e,V),n(e,r),n(r,a),n(e,i),n(e,o),n(o,v),n(e,d),n(e,S),n(S,g),n(e,y),h(_,E,V),h(_,$,V),n($,b),h(_,A,V),h(_,x,V),n(x,q),n(x,H),n(H,R),n(x,M),h(_,K,V),h(_,W,V),n(W,j),n(W,G),n(G,D),n(W,O),n(W,C),n(C,F),n(W,L),n(W,U),n(U,Q),n(W,w),n(W,z),n(z,I),n(W,B),n(W,X),n(X,Z),n(W,te),h(_,ee,V),h(_,J,V),n(J,ae),n(J,Y),n(Y,ne),n(J,u),h(_,N,V),h(_,oe,V),n(oe,pe),n(oe,de),n(de,_e),n(oe,ke),h(_,ge,V),h(_,he,V),n(he,Ee),h(_,ye,V),h(_,me,V),n(me,$e),h(_,ve,V),h(_,se,V),n(se,Ae),n(se,Ge),n(Ge,Ke),n(se,Ce),h(_,ze,V),h(_,Se,V),n(Se,Fe),h(_,Ne,V),h(_,le,V),n(le,Ue),n(le,We),n(We,Ye),n(le,Qe),n(le,Oe),n(Oe,Xe),n(le,Je)},p:ue,d(_){_&&t(e),_&&t(E),_&&t($),_&&t(A),_&&t(x),_&&t(K),_&&t(W),_&&t(ee),_&&t(J),_&&t(N),_&&t(oe),_&&t(ge),_&&t(he),_&&t(ye),_&&t(me),_&&t(ve),_&&t(se),_&&t(ze),_&&t(Se),_&&t(Ne),_&&t(le)}}}function Ot(p){let e,r;return e=new He({props:{game:p[0],$$slots:{default:[Wt]},$$scope:{ctx:p}}}),{c(){Pe(e.$$.fragment)},l(a){Te(e.$$.fragment,a)},m(a,i){je(e,a,i),r=!0},p(a,[i]){const o={};i&1&&(o.game=a[0]),i&2&&(o.$$scope={dirty:i,ctx:a}),e.$set(o)},i(a){r||(fe(e.$$.fragment,a),r=!0)},o(a){ce(e.$$.fragment,a),r=!1},d(a){De(e,a)}}}function zt(p,e,r){let{game:a}=e;return p.$$set=i=>{"game"in i&&r(0,a=i.game)},[a]}class Nt extends we{constructor(e){super(),be(this,e,zt,Ot,Ie,{game:0})}}function qt(p){let e,r,a,i,o,v,d,S,g,y,E,$,b,A,x,q,H,R,M,K,W,j,G,D,O,C,F,L,U,Q,w,z;return{c(){e=m("h3"),r=s("Concept"),a=P(),i=m("p"),o=s(`The initial idea for this game came from the prompt "non-human POV." Approaching this prompt, I\r
    knew I wanted to make a game from the perspective of an animal with a much more limited\r
    perception of the world than humans. First, I feel such perspectives are underexplored in games,\r
    and second, I had one week to make the game and thought a highly restricted perspective would be\r
    more reasonable to implement in that timeframe.`),v=P(),d=m("p"),S=s(`My first idea was to make a game about a jellyfish, but a bit of research suggested to me that\r
    both a jellyfish's sensory and locomotive systems are much more complicated than I assumed. But\r
    in my research, I happened to find `),g=m("a"),y=s("Dr. Helm's blog"),E=s(`\r
    and\r
    `),$=m("a"),b=s("her article"),A=s(` about the violet snail caught my eye. The perspective depicted in the article was exactly what\r
    I was looking for, and with its descriptive writing, dramatic tone, and second person perspective,\r
    it felt natural feature the text in the game.`),x=P(),q=m("h3"),H=s("Development"),R=P(),M=m("p"),K=s(`With the concept and permission from Dr. Helm to use her text, putting together the actual game\r
    was relatively straightforward as I aimed to emphasize and add to the text through pacing,\r
    visual representation, and interaction.`),W=P(),j=m("p"),G=s(`Concerning pacing, the source text has a very clear voice and sense of drama, so I took care to\r
    split the text into sort of poetic lines and time each line accordingly. Where I saw lists or\r
    parallel phrases in the text, I created parallel lines and paced them as continuous sequences.\r
    Where I saw turns in the narrative, I let the critical phrases stand alone and/or put a pause.`),D=P(),O=m("p"),C=s(`Creating the visual representation was a less clear process. Aside from the technical\r
    difficulties of working with some new tools and learning more about shaders, interpretation was\r
    challenge. While the source text is very descriptive, there are some gray areas, such as to what\r
    extent the snail is blind (completely blind versus an extremely limited sense of light). With\r
    the limited timeframe, I made choices based on intuition and convenience while trying to achieve\r
    a balance between creative license and realism. I wanted to make the game interesting to play\r
    but not misrepresent the science.`),F=P(),L=m("p"),U=s(`For interaction, I wanted to help the player engage with the snail's perspective beyond just\r
    reading about it. I avoided anything complex that might conflict with the simple existence of\r
    the snail. Instead I focused on minimalistically representing the actions described in the text,\r
    looking, clinging, and making bubbles. I also decided that none of these interactions should\r
    significantly impact what happens in the game (for example, letting go of Space causing you to\r
    stop clinging and sink) both for simplicity's sake and because the closing point of the text is\r
    that the perception of effort and struggle that we impose on the snail isn't necessarily\r
    accurate, and therefore the snail may not need to consciously cling to its raft at all.`),Q=P(),w=m("p"),z=s(`All said and done, I'm very happy with how the game turned out, and there are honestly no major\r
    changes I would make in retrospect. Thanks to Dr. Rebecca Helm for generously allowing me to use\r
    her text and for her immensely positive response to the result.`),this.h()},l(I){e=c(I,"H3",{});var B=f(e);r=l(B,"Concept"),B.forEach(t),a=T(I),i=c(I,"P",{});var X=f(i);o=l(X,`The initial idea for this game came from the prompt "non-human POV." Approaching this prompt, I\r
    knew I wanted to make a game from the perspective of an animal with a much more limited\r
    perception of the world than humans. First, I feel such perspectives are underexplored in games,\r
    and second, I had one week to make the game and thought a highly restricted perspective would be\r
    more reasonable to implement in that timeframe.`),X.forEach(t),v=T(I),d=c(I,"P",{});var Z=f(d);S=l(Z,`My first idea was to make a game about a jellyfish, but a bit of research suggested to me that\r
    both a jellyfish's sensory and locomotive systems are much more complicated than I assumed. But\r
    in my research, I happened to find `),g=c(Z,"A",{href:!0,target:!0,rel:!0});var te=f(g);y=l(te,"Dr. Helm's blog"),te.forEach(t),E=l(Z,`\r
    and\r
    `),$=c(Z,"A",{href:!0,target:!0,rel:!0});var ee=f($);b=l(ee,"her article"),ee.forEach(t),A=l(Z,` about the violet snail caught my eye. The perspective depicted in the article was exactly what\r
    I was looking for, and with its descriptive writing, dramatic tone, and second person perspective,\r
    it felt natural feature the text in the game.`),Z.forEach(t),x=T(I),q=c(I,"H3",{});var J=f(q);H=l(J,"Development"),J.forEach(t),R=T(I),M=c(I,"P",{});var ae=f(M);K=l(ae,`With the concept and permission from Dr. Helm to use her text, putting together the actual game\r
    was relatively straightforward as I aimed to emphasize and add to the text through pacing,\r
    visual representation, and interaction.`),ae.forEach(t),W=T(I),j=c(I,"P",{});var Y=f(j);G=l(Y,`Concerning pacing, the source text has a very clear voice and sense of drama, so I took care to\r
    split the text into sort of poetic lines and time each line accordingly. Where I saw lists or\r
    parallel phrases in the text, I created parallel lines and paced them as continuous sequences.\r
    Where I saw turns in the narrative, I let the critical phrases stand alone and/or put a pause.`),Y.forEach(t),D=T(I),O=c(I,"P",{});var ne=f(O);C=l(ne,`Creating the visual representation was a less clear process. Aside from the technical\r
    difficulties of working with some new tools and learning more about shaders, interpretation was\r
    challenge. While the source text is very descriptive, there are some gray areas, such as to what\r
    extent the snail is blind (completely blind versus an extremely limited sense of light). With\r
    the limited timeframe, I made choices based on intuition and convenience while trying to achieve\r
    a balance between creative license and realism. I wanted to make the game interesting to play\r
    but not misrepresent the science.`),ne.forEach(t),F=T(I),L=c(I,"P",{});var u=f(L);U=l(u,`For interaction, I wanted to help the player engage with the snail's perspective beyond just\r
    reading about it. I avoided anything complex that might conflict with the simple existence of\r
    the snail. Instead I focused on minimalistically representing the actions described in the text,\r
    looking, clinging, and making bubbles. I also decided that none of these interactions should\r
    significantly impact what happens in the game (for example, letting go of Space causing you to\r
    stop clinging and sink) both for simplicity's sake and because the closing point of the text is\r
    that the perception of effort and struggle that we impose on the snail isn't necessarily\r
    accurate, and therefore the snail may not need to consciously cling to its raft at all.`),u.forEach(t),Q=T(I),w=c(I,"P",{class:!0});var N=f(w);z=l(N,`All said and done, I'm very happy with how the game turned out, and there are honestly no major\r
    changes I would make in retrospect. Thanks to Dr. Rebecca Helm for generously allowing me to use\r
    her text and for her immensely positive response to the result.`),N.forEach(t),this.h()},h(){k(g,"href","https://jellybiologist.com/"),k(g,"target","_blank"),k(g,"rel","noopener noreferrer"),k($,"href","https://jellybiologist.com/2020/08/03/the-harrowing-life-of-the-violet-snail/"),k($,"target","_blank"),k($,"rel","noopener noreferrer"),k(w,"class","final")},m(I,B){h(I,e,B),n(e,r),h(I,a,B),h(I,i,B),n(i,o),h(I,v,B),h(I,d,B),n(d,S),n(d,g),n(g,y),n(d,E),n(d,$),n($,b),n(d,A),h(I,x,B),h(I,q,B),n(q,H),h(I,R,B),h(I,M,B),n(M,K),h(I,W,B),h(I,j,B),n(j,G),h(I,D,B),h(I,O,B),n(O,C),h(I,F,B),h(I,L,B),n(L,U),h(I,Q,B),h(I,w,B),n(w,z)},p:ue,d(I){I&&t(e),I&&t(a),I&&t(i),I&&t(v),I&&t(d),I&&t(x),I&&t(q),I&&t(R),I&&t(M),I&&t(W),I&&t(j),I&&t(D),I&&t(O),I&&t(F),I&&t(L),I&&t(Q),I&&t(w)}}}function Mt(p){let e,r;return e=new He({props:{game:p[0],$$slots:{default:[qt]},$$scope:{ctx:p}}}),{c(){Pe(e.$$.fragment)},l(a){Te(e.$$.fragment,a)},m(a,i){je(e,a,i),r=!0},p(a,[i]){const o={};i&1&&(o.game=a[0]),i&2&&(o.$$scope={dirty:i,ctx:a}),e.$set(o)},i(a){r||(fe(e.$$.fragment,a),r=!0)},o(a){ce(e.$$.fragment,a),r=!1},d(a){De(e,a)}}}function Bt(p,e,r){let{game:a}=e;return p.$$set=i=>{"game"in i&&r(0,a=i.game)},[a]}class Lt extends we{constructor(e){super(),be(this,e,Bt,Mt,Ie,{game:0})}}function Vt(p){let e,r,a,i,o,v,d,S,g,y,E,$,b,A,x,q,H,R,M,K,W,j,G,D,O,C,F,L,U,Q;return{c(){e=m("h3"),r=s("Sound toys and instruments"),a=P(),i=m("p"),o=s(`I like to think about sound toys as musical instruments. I don't mean that they should be suited\r
    for performance or be capable of producing conventional music, but that they are interfaces that\r
    map to sound, and the affordances of their interfaces define them. There isn't a fundamental\r
    difference between the input-mapping-to-sound structure of an instrument in a DAW and `),v=m("i"),d=s("Electroplankton"),S=s("; they just differ in their affordances."),g=P(),y=m("p"),E=s(`Maybe that's self-evident (the structure described is extremely broad), but the point is that\r
    the affordances of an instrument's interface define that instrument even more than its sound.\r
    This is important because while game engines, DAWs, and other digital sound-making tools can\r
    produce the same sounds, they have vastly different built-in affordances, which will tend to be\r
    expressed in their instruments. If I want to make a certain kind of instrument, I should choose\r
    a tool with the appropriate affordances. If I want to use a specific tool to make an instrument,\r
    I should leverage what that tool is good at.`),$=P(),b=m("h3"),A=s("Stones"),x=P(),q=m("p"),H=m("i"),R=s("Stones"),M=s(` is a small exploration of one special affordance of Unity and many game engines: physics\r
    simulation. It uses a 3D point-and-click interface to move around blocks whose linear and angular\r
    velocity map to sound.`),K=P(),W=m("p"),j=s(`The sound generation is actually extremely simple. Each block plays a looping drone sound with a\r
    different sound for each texture, then linear velocity controls its volume and angular velocity\r
    controls its pitch. Even with this simple mapping, the physics can produce some very dynamic\r
    sounds, such as impact transients when the velocities abruptly change on collision. The\r
    different weights of each block texture also create different volume and pitch curves when\r
    dragging them around.`),G=P(),D=m("h3"),O=s("Problems"),C=P(),F=m("p"),L=m("i"),U=s("Stones"),Q=s(` definitely has some issues. Some of the physics are too sensitive, there's an odd disconnect\r
    between the player cursor and moving around blocks, the isometric view and lack of lighting hurts\r
    depth perception, and I don't think the pitch quantization works. Nevertheless, I think it's an interesting\r
    prototype and an idea I might like to do more with at some point.`),this.h()},l(w){e=c(w,"H3",{});var z=f(e);r=l(z,"Sound toys and instruments"),z.forEach(t),a=T(w),i=c(w,"P",{});var I=f(i);o=l(I,`I like to think about sound toys as musical instruments. I don't mean that they should be suited\r
    for performance or be capable of producing conventional music, but that they are interfaces that\r
    map to sound, and the affordances of their interfaces define them. There isn't a fundamental\r
    difference between the input-mapping-to-sound structure of an instrument in a DAW and `),v=c(I,"I",{});var B=f(v);d=l(B,"Electroplankton"),B.forEach(t),S=l(I,"; they just differ in their affordances."),I.forEach(t),g=T(w),y=c(w,"P",{});var X=f(y);E=l(X,`Maybe that's self-evident (the structure described is extremely broad), but the point is that\r
    the affordances of an instrument's interface define that instrument even more than its sound.\r
    This is important because while game engines, DAWs, and other digital sound-making tools can\r
    produce the same sounds, they have vastly different built-in affordances, which will tend to be\r
    expressed in their instruments. If I want to make a certain kind of instrument, I should choose\r
    a tool with the appropriate affordances. If I want to use a specific tool to make an instrument,\r
    I should leverage what that tool is good at.`),X.forEach(t),$=T(w),b=c(w,"H3",{});var Z=f(b);A=l(Z,"Stones"),Z.forEach(t),x=T(w),q=c(w,"P",{});var te=f(q);H=c(te,"I",{});var ee=f(H);R=l(ee,"Stones"),ee.forEach(t),M=l(te,` is a small exploration of one special affordance of Unity and many game engines: physics\r
    simulation. It uses a 3D point-and-click interface to move around blocks whose linear and angular\r
    velocity map to sound.`),te.forEach(t),K=T(w),W=c(w,"P",{});var J=f(W);j=l(J,`The sound generation is actually extremely simple. Each block plays a looping drone sound with a\r
    different sound for each texture, then linear velocity controls its volume and angular velocity\r
    controls its pitch. Even with this simple mapping, the physics can produce some very dynamic\r
    sounds, such as impact transients when the velocities abruptly change on collision. The\r
    different weights of each block texture also create different volume and pitch curves when\r
    dragging them around.`),J.forEach(t),G=T(w),D=c(w,"H3",{});var ae=f(D);O=l(ae,"Problems"),ae.forEach(t),C=T(w),F=c(w,"P",{class:!0});var Y=f(F);L=c(Y,"I",{});var ne=f(L);U=l(ne,"Stones"),ne.forEach(t),Q=l(Y,` definitely has some issues. Some of the physics are too sensitive, there's an odd disconnect\r
    between the player cursor and moving around blocks, the isometric view and lack of lighting hurts\r
    depth perception, and I don't think the pitch quantization works. Nevertheless, I think it's an interesting\r
    prototype and an idea I might like to do more with at some point.`),Y.forEach(t),this.h()},h(){k(F,"class","final")},m(w,z){h(w,e,z),n(e,r),h(w,a,z),h(w,i,z),n(i,o),n(i,v),n(v,d),n(i,S),h(w,g,z),h(w,y,z),n(y,E),h(w,$,z),h(w,b,z),n(b,A),h(w,x,z),h(w,q,z),n(q,H),n(H,R),n(q,M),h(w,K,z),h(w,W,z),n(W,j),h(w,G,z),h(w,D,z),n(D,O),h(w,C,z),h(w,F,z),n(F,L),n(L,U),n(F,Q)},p:ue,d(w){w&&t(e),w&&t(a),w&&t(i),w&&t(g),w&&t(y),w&&t($),w&&t(b),w&&t(x),w&&t(q),w&&t(K),w&&t(W),w&&t(G),w&&t(D),w&&t(C),w&&t(F)}}}function Rt(p){let e,r;return e=new He({props:{game:p[0],$$slots:{default:[Vt]},$$scope:{ctx:p}}}),{c(){Pe(e.$$.fragment)},l(a){Te(e.$$.fragment,a)},m(a,i){je(e,a,i),r=!0},p(a,[i]){const o={};i&1&&(o.game=a[0]),i&2&&(o.$$scope={dirty:i,ctx:a}),e.$set(o)},i(a){r||(fe(e.$$.fragment,a),r=!0)},o(a){ce(e.$$.fragment,a),r=!1},d(a){De(e,a)}}}function Kt(p,e,r){let{game:a}=e;return p.$$set=i=>{"game"in i&&r(0,a=i.game)},[a]}class Ct extends we{constructor(e){super(),be(this,e,Kt,Rt,Ie,{game:0})}}function Ft(p){let e,r,a,i,o,v,d,S;return{c(){e=m("p"),r=s(`goodbye.monster is an ongoing project. Players meet and care for monsters in a dark and\r
    ambiguous world. In many ways, it's a response to the instrumental role of creatures in creature\r
    collector games.`),a=P(),i=m("iframe"),v=P(),d=m("iframe"),this.h()},l(g){e=c(g,"P",{});var y=f(e);r=l(y,`goodbye.monster is an ongoing project. Players meet and care for monsters in a dark and\r
    ambiguous world. In many ways, it's a response to the instrumental role of creatures in creature\r
    collector games.`),y.forEach(t),a=T(g),i=c(g,"IFRAME",{src:!0,title:!0,frameborder:!0,allow:!0,class:!0}),f(i).forEach(t),v=T(g),d=c(g,"IFRAME",{title:!0,src:!0,frameborder:!0,allow:!0,class:!0}),f(d).forEach(t),this.h()},h(){Re(i.src,o="https://www.youtube.com/embed/1tXSoDF18CA?si=Dpym31bXyPLfcL12")||k(i,"src",o),k(i,"title","goodbye.monster trailer"),k(i,"frameborder","1"),k(i,"allow","accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"),i.allowFullscreen=!0,k(i,"class","svelte-oqzu8p"),k(d,"title","goodbye.monster gameplay video"),Re(d.src,S="https://player.vimeo.com/video/851962984?h=d7ced28ac1&byline=0&portrait=0")||k(d,"src",S),k(d,"frameborder","1"),k(d,"allow","autoplay; fullscreen; picture-in-picture"),d.allowFullscreen=!0,k(d,"class","svelte-oqzu8p")},m(g,y){h(g,e,y),n(e,r),h(g,a,y),h(g,i,y),h(g,v,y),h(g,d,y)},p:ue,d(g){g&&t(e),g&&t(a),g&&t(i),g&&t(v),g&&t(d)}}}function Ut(p){let e,r;return e=new He({props:{game:p[0],$$slots:{default:[Ft]},$$scope:{ctx:p}}}),{c(){Pe(e.$$.fragment)},l(a){Te(e.$$.fragment,a)},m(a,i){je(e,a,i),r=!0},p(a,[i]){const o={};i&1&&(o.game=a[0]),i&2&&(o.$$scope={dirty:i,ctx:a}),e.$set(o)},i(a){r||(fe(e.$$.fragment,a),r=!0)},o(a){ce(e.$$.fragment,a),r=!1},d(a){De(e,a)}}}function Yt(p,e,r){let{game:a}=e;return p.$$set=i=>{"game"in i&&r(0,a=i.game)},[a]}class Qt extends we{constructor(e){super(),be(this,e,Yt,Ut,Ie,{game:0})}}function Xt(p){let e,r,a,i,o,v,d,S,g,y,E,$,b,A,x,q,H,R,M,K,W,j,G,D,O,C,F,L,U,Q,w,z,I,B,X,Z,te,ee,J,ae,Y,ne;return{c(){e=m("p"),r=m("i"),a=s("Grid Garden"),i=s(` is my attempt at an incremental game for the spreadsheet. My goal was to\r
    leverage the ways we normally interact with spreadsheets - typing, copying, pasting, selecting,\r
    and deleting text in cells - and the data organization affordances of the grid. I was also\r
    inspired by\r
    `),o=m("a"),v=s("Everest Pipkin\u2019s "),d=m("i"),S=s("Barnacle Goose"),g=s(` and its item combinations and non-clicker incremental systems, which both felt suited for adaptation\r
    to the spreadsheet.`),y=P(),E=m("h3"),$=s("Process"),b=P(),A=m("p"),x=s(`I started with the ideas of creating items by typing, combining items, and creating an abstract\r
    garden on the grid of the spreadsheet. From there I decided on treating the spreadsheet as a\r
    space in which items can be combined and compartmentalizing item creation to an item that has a\r
    sort of input field. That then presented the question of what should happen when the player\r
    tries to create an invalid item or makes an error. While it may have worked for nothing to\r
    happen, it seemed more interesting to convert the invalid text by length into an item, compost,\r
    which could serve as the substrate for the garden. Around the same time, I thought of digging up\r
    buried items as another interaction, as only typing into a single cell to generate items felt\r
    too restrictive.`),q=P(),H=m("p"),R=s(`I then broke down the information that might need to exist for a cell in the garden and for an\r
    item. A single cell might need to hold item text placed by the player, a flag for compost, and\r
    text or an ID for a buried item. Items might need counts, descriptions, recipes, and visual\r
    information.`),M=P(),K=m("p"),W=s(`As I figured out what information was needed, I also started to lay out the structure of the\r
    workbook. I realized that for the amount of information a given cell needed it would be easiest\r
    to use multiple sheets in parallel, such that A1 of one sheet corresponds to A1 of the others. I\r
    created the main garden sheet that uses cell fills and conditional formatting for display and\r
    other only holds item text, a surface sheet that holds compost information, and an underground\r
    sheet that holds buried items. Structuring the information for items was simpler as that could\r
    exist in basic tables, organized in different sheets, and be easily accessed with Match and\r
    VLookup functions.`),j=P(),G=m("p"),D=s(`From there, implementation was relatively straightforward, learning VBA aside. And the project\r
    does use a significant amount of VBA, but its purpose is not to fight the inherent affordances\r
    of the spreadsheet. Rather the code mainly serves to apply complex comparisons and operations\r
    across worksheets and react to user input in a way that basic Excel functions cannot.`),O=P(),C=m("h3"),F=s("VBA and Excel"),L=P(),U=m("p"),Q=s(`Working in VBA was a challenge. I don\u2019t like the syntax and the errors are not especially clear\r
    or helpful. Working in Excel generally, however, was convenient in that it\u2019s very natural to\r
    edit and access tabular information, such as the inventory or item recipes. It calls for a\r
    different, more data driven kind of design and thinking than I\u2019m used to and which I hope to\r
    transfer to games outside of spreadsheets.`),w=P(),z=m("h3"),I=s("Shovels"),B=P(),X=m("p"),Z=s(`A small feature I really like and would like to highlight is the dig-area scaling with shovels.\r
    Aside from the comedic gaminess of more shovels allowing you to dig more efficiently, I like the\r
    scaling system I ended up with where each shovel allows you to dig in an area one row or column\r
    larger. I first tried having each shovel increase the area by one cell, but the growth of that\r
    felt much too slow and didn\u2019t adequately incentivize making shovels. Squaring the number of\r
    shovels is another obvious option, and one that might even work well, but I suspected it would\r
    scale too quickly. The row and column system is a middle ground. The current system may also be\r
    somewhat unintuitive, but in a game that isn\u2019t too complicated overall, I think the bit of extra\r
    complexity in one of the primary interactions (digging) is a benefit.`),te=P(),ee=m("h3"),J=s("Improvement"),ae=P(),Y=m("p"),ne=s(`If I had more time to work on this or were to continue work on it, I\u2019d look at tuning the\r
    incremental systems, which I didn\u2019t have much time to do, improving logging, easing recipe\r
    discovery, and adding more items, especially items with special behaviors like the materializer\r
    and automaton. One of the more exciting things to me currently is the little machine that can be\r
    created by placing an automaton below a materializer, and I would like to have more of those be\r
    possible. And of course, there are probably bugs that I haven\u2019t found and fixed.`),this.h()},l(u){e=c(u,"P",{});var N=f(e);r=c(N,"I",{});var oe=f(r);a=l(oe,"Grid Garden"),oe.forEach(t),i=l(N,` is my attempt at an incremental game for the spreadsheet. My goal was to\r
    leverage the ways we normally interact with spreadsheets - typing, copying, pasting, selecting,\r
    and deleting text in cells - and the data organization affordances of the grid. I was also\r
    inspired by\r
    `),o=c(N,"A",{href:!0,target:!0,rel:!0});var pe=f(o);v=l(pe,"Everest Pipkin\u2019s "),d=c(pe,"I",{});var de=f(d);S=l(de,"Barnacle Goose"),de.forEach(t),pe.forEach(t),g=l(N,` and its item combinations and non-clicker incremental systems, which both felt suited for adaptation\r
    to the spreadsheet.`),N.forEach(t),y=T(u),E=c(u,"H3",{});var _e=f(E);$=l(_e,"Process"),_e.forEach(t),b=T(u),A=c(u,"P",{});var ke=f(A);x=l(ke,`I started with the ideas of creating items by typing, combining items, and creating an abstract\r
    garden on the grid of the spreadsheet. From there I decided on treating the spreadsheet as a\r
    space in which items can be combined and compartmentalizing item creation to an item that has a\r
    sort of input field. That then presented the question of what should happen when the player\r
    tries to create an invalid item or makes an error. While it may have worked for nothing to\r
    happen, it seemed more interesting to convert the invalid text by length into an item, compost,\r
    which could serve as the substrate for the garden. Around the same time, I thought of digging up\r
    buried items as another interaction, as only typing into a single cell to generate items felt\r
    too restrictive.`),ke.forEach(t),q=T(u),H=c(u,"P",{});var ge=f(H);R=l(ge,`I then broke down the information that might need to exist for a cell in the garden and for an\r
    item. A single cell might need to hold item text placed by the player, a flag for compost, and\r
    text or an ID for a buried item. Items might need counts, descriptions, recipes, and visual\r
    information.`),ge.forEach(t),M=T(u),K=c(u,"P",{});var he=f(K);W=l(he,`As I figured out what information was needed, I also started to lay out the structure of the\r
    workbook. I realized that for the amount of information a given cell needed it would be easiest\r
    to use multiple sheets in parallel, such that A1 of one sheet corresponds to A1 of the others. I\r
    created the main garden sheet that uses cell fills and conditional formatting for display and\r
    other only holds item text, a surface sheet that holds compost information, and an underground\r
    sheet that holds buried items. Structuring the information for items was simpler as that could\r
    exist in basic tables, organized in different sheets, and be easily accessed with Match and\r
    VLookup functions.`),he.forEach(t),j=T(u),G=c(u,"P",{});var Ee=f(G);D=l(Ee,`From there, implementation was relatively straightforward, learning VBA aside. And the project\r
    does use a significant amount of VBA, but its purpose is not to fight the inherent affordances\r
    of the spreadsheet. Rather the code mainly serves to apply complex comparisons and operations\r
    across worksheets and react to user input in a way that basic Excel functions cannot.`),Ee.forEach(t),O=T(u),C=c(u,"H3",{});var ye=f(C);F=l(ye,"VBA and Excel"),ye.forEach(t),L=T(u),U=c(u,"P",{});var me=f(U);Q=l(me,`Working in VBA was a challenge. I don\u2019t like the syntax and the errors are not especially clear\r
    or helpful. Working in Excel generally, however, was convenient in that it\u2019s very natural to\r
    edit and access tabular information, such as the inventory or item recipes. It calls for a\r
    different, more data driven kind of design and thinking than I\u2019m used to and which I hope to\r
    transfer to games outside of spreadsheets.`),me.forEach(t),w=T(u),z=c(u,"H3",{});var $e=f(z);I=l($e,"Shovels"),$e.forEach(t),B=T(u),X=c(u,"P",{});var ve=f(X);Z=l(ve,`A small feature I really like and would like to highlight is the dig-area scaling with shovels.\r
    Aside from the comedic gaminess of more shovels allowing you to dig more efficiently, I like the\r
    scaling system I ended up with where each shovel allows you to dig in an area one row or column\r
    larger. I first tried having each shovel increase the area by one cell, but the growth of that\r
    felt much too slow and didn\u2019t adequately incentivize making shovels. Squaring the number of\r
    shovels is another obvious option, and one that might even work well, but I suspected it would\r
    scale too quickly. The row and column system is a middle ground. The current system may also be\r
    somewhat unintuitive, but in a game that isn\u2019t too complicated overall, I think the bit of extra\r
    complexity in one of the primary interactions (digging) is a benefit.`),ve.forEach(t),te=T(u),ee=c(u,"H3",{});var se=f(ee);J=l(se,"Improvement"),se.forEach(t),ae=T(u),Y=c(u,"P",{class:!0});var Ae=f(Y);ne=l(Ae,`If I had more time to work on this or were to continue work on it, I\u2019d look at tuning the\r
    incremental systems, which I didn\u2019t have much time to do, improving logging, easing recipe\r
    discovery, and adding more items, especially items with special behaviors like the materializer\r
    and automaton. One of the more exciting things to me currently is the little machine that can be\r
    created by placing an automaton below a materializer, and I would like to have more of those be\r
    possible. And of course, there are probably bugs that I haven\u2019t found and fixed.`),Ae.forEach(t),this.h()},h(){k(o,"href","https://everest-pipkin.com/barnacle-goose/"),k(o,"target","_blank"),k(o,"rel","noopener noreferrer"),k(Y,"class","final")},m(u,N){h(u,e,N),n(e,r),n(r,a),n(e,i),n(e,o),n(o,v),n(o,d),n(d,S),n(e,g),h(u,y,N),h(u,E,N),n(E,$),h(u,b,N),h(u,A,N),n(A,x),h(u,q,N),h(u,H,N),n(H,R),h(u,M,N),h(u,K,N),n(K,W),h(u,j,N),h(u,G,N),n(G,D),h(u,O,N),h(u,C,N),n(C,F),h(u,L,N),h(u,U,N),n(U,Q),h(u,w,N),h(u,z,N),n(z,I),h(u,B,N),h(u,X,N),n(X,Z),h(u,te,N),h(u,ee,N),n(ee,J),h(u,ae,N),h(u,Y,N),n(Y,ne)},p:ue,d(u){u&&t(e),u&&t(y),u&&t(E),u&&t(b),u&&t(A),u&&t(q),u&&t(H),u&&t(M),u&&t(K),u&&t(j),u&&t(G),u&&t(O),u&&t(C),u&&t(L),u&&t(U),u&&t(w),u&&t(z),u&&t(B),u&&t(X),u&&t(te),u&&t(ee),u&&t(ae),u&&t(Y)}}}function Jt(p){let e,r;return e=new He({props:{game:p[0],$$slots:{default:[Xt]},$$scope:{ctx:p}}}),{c(){Pe(e.$$.fragment)},l(a){Te(e.$$.fragment,a)},m(a,i){je(e,a,i),r=!0},p(a,[i]){const o={};i&1&&(o.game=a[0]),i&2&&(o.$$scope={dirty:i,ctx:a}),e.$set(o)},i(a){r||(fe(e.$$.fragment,a),r=!0)},o(a){ce(e.$$.fragment,a),r=!1},d(a){De(e,a)}}}function Zt(p,e,r){let{game:a}=e;return p.$$set=i=>{"game"in i&&r(0,a=i.game)},[a]}class ea extends we{constructor(e){super(),be(this,e,Zt,Jt,Ie,{game:0})}}const aa={ITCH:"itch",LOCAL:"local"},re={GOODBYE_MONSTER:"goodbyemonster",STELLATA:"stellata-waterway",GRID_GARDEN:"grid-garden",AUTUMN_DAY:"an-autumn-day",VIOLET_SNAIL:"the-harrowing-life-of-the-violet-snail",STONES:"stones",INTERFERENCE:"interference"},na={[re.STELLATA]:{type:"itch",user:"mattmora",id:re.STELLATA,role:"Solo project",date:"2022",brief:"A retro-styled infinite runner that takes inspiration from games of the 90s and early 2000s.",article:!0,video:!1,component:Nt},[re.AUTUMN_DAY]:{type:"itch",user:"mattmora",id:re.AUTUMN_DAY,role:"Solo project",date:"2022",brief:"A game about sitting down and watching the wind.",article:!0,video:!1,component:Gt},[re.VIOLET_SNAIL]:{type:"itch",user:"mattmora",id:re.VIOLET_SNAIL,role:"Solo project",date:"2022",brief:"An interactive rendering of an article about a sea snail by Dr. Rebecca Helm, professor of marine biology at Georgetown University.",article:!0,video:!1,component:Lt},[re.STONES]:{type:"itch",user:"mattmora",id:re.STONES,role:"Solo project",date:"2022",brief:"A small 3D physics-based sound toy.",article:!0,video:!1,component:Ct},[re.GRID_GARDEN]:{type:"itch",user:"mattmora",id:re.GRID_GARDEN,role:"Solo project",date:"2022",brief:"An incremental game for Excel.",article:!0,video:!1,component:ea},[re.GOODBYE_MONSTER]:{type:"itch",user:"beckettrowan",id:re.GOODBYE_MONSTER,role:"Designer, Programmer, Audio",date:"2023",brief:"An text-based adventure and pet game for the web that challenges the instrumentality of monsters in games.",article:!1,video:!0,link:"https://goodbye.monster",component:Qt}};export{re as G,aa as I,na as a,He as b};
