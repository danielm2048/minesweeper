var app=function(){"use strict";function e(){}function t(e){return e()}function n(){return Object.create(null)}function l(e){e.forEach(t)}function o(e){return"function"==typeof e}function i(e,t){return e!=e?t==t:e!==t||e&&"object"==typeof e||"function"==typeof e}function s(t,n,l){t.$$.on_destroy.push(function(t,...n){if(null==t)return e;const l=t.subscribe(...n);return l.unsubscribe?()=>l.unsubscribe():l}(n,l))}function r(e){return null==e?"":e}function a(e,t){e.appendChild(t)}function c(e,t,n){e.insertBefore(t,n||null)}function u(e){e.parentNode.removeChild(e)}function f(e,t){for(let n=0;n<e.length;n+=1)e[n]&&e[n].d(t)}function d(e){return document.createElement(e)}function m(e){return document.createTextNode(e)}function g(){return m(" ")}function h(){return m("")}function p(e,t,n,l){return e.addEventListener(t,n,l),()=>e.removeEventListener(t,n,l)}function $(e){return function(t){return t.preventDefault(),e.call(this,t)}}function v(e,t,n){null==n?e.removeAttribute(t):e.getAttribute(t)!==n&&e.setAttribute(t,n)}function b(e,t){t=""+t,e.wholeText!==t&&(e.data=t)}function _(e,t){for(let n=0;n<e.options.length;n+=1){const l=e.options[n];if(l.__value===t)return void(l.selected=!0)}}function y(e,t,n){e.classList[n?"add":"remove"](t)}let k;function x(e){k=e}function w(){if(!k)throw new Error("Function called outside component initialization");return k}function j(e){w().$$.on_mount.push(e)}function C(){const e=w();return(t,n)=>{const l=e.$$.callbacks[t];if(l){const o=function(e,t){const n=document.createEvent("CustomEvent");return n.initCustomEvent(e,!1,!1,t),n}(t,n);l.slice().forEach((t=>{t.call(e,o)}))}}}function q(e,t){const n=e.$$.callbacks[t.type];n&&n.slice().forEach((e=>e(t)))}const F=[],T=[],S=[],E=[],I=Promise.resolve();let M=!1;function B(e){S.push(e)}let O=!1;const N=new Set;function L(){if(!O){O=!0;do{for(let e=0;e<F.length;e+=1){const t=F[e];x(t),R(t.$$)}for(x(null),F.length=0;T.length;)T.pop()();for(let e=0;e<S.length;e+=1){const t=S[e];N.has(t)||(N.add(t),t())}S.length=0}while(F.length);for(;E.length;)E.pop()();M=!1,O=!1,N.clear()}}function R(e){if(null!==e.fragment){e.update(),l(e.before_update);const t=e.dirty;e.dirty=[-1],e.fragment&&e.fragment.p(e.ctx,t),e.after_update.forEach(B)}}const A=new Set;let Y;function z(){Y={r:0,c:[],p:Y}}function J(){Y.r||l(Y.c),Y=Y.p}function H(e,t){e&&e.i&&(A.delete(e),e.i(t))}function D(e,t,n,l){if(e&&e.o){if(A.has(e))return;A.add(e),Y.c.push((()=>{A.delete(e),l&&(n&&e.d(1),l())})),e.o(t)}}function G(e){e&&e.c()}function P(e,n,i,s){const{fragment:r,on_mount:a,on_destroy:c,after_update:u}=e.$$;r&&r.m(n,i),s||B((()=>{const n=a.map(t).filter(o);c?c.push(...n):l(n),e.$$.on_mount=[]})),u.forEach(B)}function U(e,t){const n=e.$$;null!==n.fragment&&(l(n.on_destroy),n.fragment&&n.fragment.d(t),n.on_destroy=n.fragment=null,n.ctx=[])}function W(e,t){-1===e.$$.dirty[0]&&(F.push(e),M||(M=!0,I.then(L)),e.$$.dirty.fill(0)),e.$$.dirty[t/31|0]|=1<<t%31}function K(t,o,i,s,r,a,c=[-1]){const f=k;x(t);const d=t.$$={fragment:null,ctx:null,props:a,update:e,not_equal:r,bound:n(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(f?f.$$.context:o.context||[]),callbacks:n(),dirty:c,skip_bound:!1};let m=!1;if(d.ctx=i?i(t,o.props||{},((e,n,...l)=>{const o=l.length?l[0]:n;return d.ctx&&r(d.ctx[e],d.ctx[e]=o)&&(!d.skip_bound&&d.bound[e]&&d.bound[e](o),m&&W(t,e)),n})):[],d.update(),m=!0,l(d.before_update),d.fragment=!!s&&s(d.ctx),o.target){if(o.hydrate){const e=function(e){return Array.from(e.childNodes)}(o.target);d.fragment&&d.fragment.l(e),e.forEach(u)}else d.fragment&&d.fragment.c();o.intro&&H(t.$$.fragment),P(t,o.target,o.anchor,o.customElement),L()}x(f)}class Q{$destroy(){U(this,1),this.$destroy=e}$on(e,t){const n=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return n.push(t),()=>{const e=n.indexOf(t);-1!==e&&n.splice(e,1)}}$set(e){var t;this.$$set&&(t=e,0!==Object.keys(t).length)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}const V=[];function X(t,n=e){let l;const o=[];function s(e){if(i(t,e)&&(t=e,l)){const e=!V.length;for(let e=0;e<o.length;e+=1){const n=o[e];n[1](),V.push(n,t)}if(e){for(let e=0;e<V.length;e+=2)V[e][0](V[e+1]);V.length=0}}}return{set:s,update:function(e){s(e(t))},subscribe:function(i,r=e){const a=[i,r];return o.push(a),1===o.length&&(l=n(s)||e),i(t),()=>{const e=o.indexOf(a);-1!==e&&o.splice(e,1),0===o.length&&(l(),l=null)}}}}const Z=X("playing"),ee=X(3);function te(e,t,n){const l=e.slice();return l[5]=t[n].component,l[6]=t[n].value,l[7]=t[n].isClicked,l[8]=t[n].isFlagged,l[10]=n,l}function ne(e){let t,n,l;var o=e[5];function i(e){return{props:{isBomb:"💣"===e[6],value:e[6],isClicked:e[7],isFlagged:e[8],i:e[1],j:e[10]}}}return o&&(t=new o(i(e)),t.$on("reveal",e[2]),t.$on("flag",e[3]),t.$on("chord",e[4])),{c(){t&&G(t.$$.fragment),n=h()},m(e,o){t&&P(t,e,o),c(e,n,o),l=!0},p(e,l){const s={};if(1&l&&(s.isBomb="💣"===e[6]),1&l&&(s.value=e[6]),1&l&&(s.isClicked=e[7]),1&l&&(s.isFlagged=e[8]),2&l&&(s.i=e[1]),o!==(o=e[5])){if(t){z();const e=t;D(e.$$.fragment,1,0,(()=>{U(e,1)})),J()}o?(t=new o(i(e)),t.$on("reveal",e[2]),t.$on("flag",e[3]),t.$on("chord",e[4]),G(t.$$.fragment),H(t.$$.fragment,1),P(t,n.parentNode,n)):t=null}else o&&t.$set(s)},i(e){l||(t&&H(t.$$.fragment,e),l=!0)},o(e){t&&D(t.$$.fragment,e),l=!1},d(e){e&&u(n),t&&U(t,e)}}}function le(e){let t,n,l,o=e[0],i=[];for(let t=0;t<o.length;t+=1)i[t]=ne(te(e,o,t));const s=e=>D(i[e],1,1,(()=>{i[e]=null}));return{c(){t=d("div"),n=d("div");for(let e=0;e<i.length;e+=1)i[e].c();v(n,"class","svelte-1wvg2uo"),v(t,"class","svelte-1wvg2uo")},m(e,o){c(e,t,o),a(t,n);for(let e=0;e<i.length;e+=1)i[e].m(n,null);l=!0},p(e,[t]){if(3&t){let l;for(o=e[0],l=0;l<o.length;l+=1){const s=te(e,o,l);i[l]?(i[l].p(s,t),H(i[l],1)):(i[l]=ne(s),i[l].c(),H(i[l],1),i[l].m(n,null))}for(z(),l=o.length;l<i.length;l+=1)s(l);J()}},i(e){if(!l){for(let e=0;e<o.length;e+=1)H(i[e]);l=!0}},o(e){i=i.filter(Boolean);for(let e=0;e<i.length;e+=1)D(i[e]);l=!1},d(e){e&&u(t),f(i,e)}}}function oe(e,t,n){let{gameRow:l}=t,{i:o}=t;return e.$$set=e=>{"gameRow"in e&&n(0,l=e.gameRow),"i"in e&&n(1,o=e.i)},[l,o,function(t){q(e,t)},function(t){q(e,t)},function(t){q(e,t)}]}class ie extends Q{constructor(e){super(),K(this,e,oe,le,i,{gameRow:0,i:1})}}function se(e,t,n){const l=e.slice();return l[4]=t[n],l[6]=n,l}function re(e){let t,n;return t=new ie({props:{gameRow:e[4],i:e[6]}}),t.$on("reveal",e[1]),t.$on("flag",e[2]),t.$on("chord",e[3]),{c(){G(t.$$.fragment)},m(e,l){P(t,e,l),n=!0},p(e,n){const l={};1&n&&(l.gameRow=e[4]),t.$set(l)},i(e){n||(H(t.$$.fragment,e),n=!0)},o(e){D(t.$$.fragment,e),n=!1},d(e){U(t,e)}}}function ae(e){let t,n,l=e[0],o=[];for(let t=0;t<l.length;t+=1)o[t]=re(se(e,l,t));const i=e=>D(o[e],1,1,(()=>{o[e]=null}));return{c(){t=d("div");for(let e=0;e<o.length;e+=1)o[e].c();v(t,"class","svelte-uyf9ps")},m(e,l){c(e,t,l);for(let e=0;e<o.length;e+=1)o[e].m(t,null);n=!0},p(e,[n]){if(1&n){let s;for(l=e[0],s=0;s<l.length;s+=1){const i=se(e,l,s);o[s]?(o[s].p(i,n),H(o[s],1)):(o[s]=re(i),o[s].c(),H(o[s],1),o[s].m(t,null))}for(z(),s=l.length;s<o.length;s+=1)i(s);J()}},i(e){if(!n){for(let e=0;e<l.length;e+=1)H(o[e]);n=!0}},o(e){o=o.filter(Boolean);for(let e=0;e<o.length;e+=1)D(o[e]);n=!1},d(e){e&&u(t),f(o,e)}}}function ce(e,t,n){let{gameTiles:l}=t;return e.$$set=e=>{"gameTiles"in e&&n(0,l=e.gameTiles)},[l,function(t){q(e,t)},function(t){q(e,t)},function(t){q(e,t)}]}class ue extends Q{constructor(e){super(),K(this,e,ce,ae,i,{gameTiles:0})}}function fe(t){let n,o,i,s,f,g,h,_=(t[5]||(t[2]?t[1]:""))+"";return{c(){n=d("button"),o=d("div"),i=m(_),v(o,"class","svelte-hq3076"),y(o,"isFlagged",t[3]),n.disabled=s="playing"!==t[4],v(n,"class",f=r(`number${t[1]} size${t[6]}`)+" svelte-hq3076"),y(n,"isClicked",t[2]),y(n,"correct",t[0]&&t[3]&&"lost"===t[4])},m(e,l){c(e,n,l),a(n,o),a(o,i),g||(h=[p(n,"contextmenu",$(t[8])),p(n,"click",t[7]),p(n,"dblclick",t[9])],g=!0)},p(e,[t]){38&t&&_!==(_=(e[5]||(e[2]?e[1]:""))+"")&&b(i,_),8&t&&y(o,"isFlagged",e[3]),16&t&&s!==(s="playing"!==e[4])&&(n.disabled=s),66&t&&f!==(f=r(`number${e[1]} size${e[6]}`)+" svelte-hq3076")&&v(n,"class",f),70&t&&y(n,"isClicked",e[2]),91&t&&y(n,"correct",e[0]&&e[3]&&"lost"===e[4])},i:e,o:e,d(e){e&&u(n),g=!1,l(h)}}}function de(e,t,n){let l,o;s(e,Z,(e=>n(4,l=e))),s(e,ee,(e=>n(6,o=e)));const i=C();let{isBomb:r}=t,{value:a}=t,{isClicked:c}=t,{isFlagged:u}=t,{i:f}=t,{j:d}=t,m="";return e.$$set=e=>{"isBomb"in e&&n(0,r=e.isBomb),"value"in e&&n(1,a=e.value),"isClicked"in e&&n(2,c=e.isClicked),"isFlagged"in e&&n(3,u=e.isFlagged),"i"in e&&n(10,f=e.i),"j"in e&&n(11,d=e.j)},e.$$.update=()=>{21&e.$$.dirty&&"lost"===l&&r&&n(5,m=c?"💥":"💣"),12&e.$$.dirty&&c&&u&&n(5,m="")},[r,a,c,u,l,m,o,()=>{u||i("reveal",{i:f,j:d,isBomb:r})},()=>{c||(i("flag",{i:f,j:d,flagState:!u}),n(5,m=u?"":"🚩"))},()=>{c&&i("chord",{i:f,j:d,value:a})},f,d]}class me extends Q{constructor(e){super(),K(this,e,de,fe,i,{isBomb:0,value:1,isClicked:2,isFlagged:3,i:10,j:11})}}function ge(t){let n,l;return{c(){n=d("p"),l=m(t[0]),v(n,"class","svelte-i2qw56")},m(e,t){c(e,n,t),a(n,l)},p(e,[t]){1&t&&b(l,e[0])},i:e,o:e,d(e){e&&u(n)}}}function he(e,t,n){let l,o;s(e,Z,(e=>n(4,o=e)));let i,{timer:r=0}=t,{formatTimer:a}=t;var c;return j((()=>(i=setInterval((()=>{n(1,r++,r)}),1e3),()=>{clearInterval(i)}))),c=()=>{"playing"!==o&&clearInterval(i)},w().$$.after_update.push(c),e.$$set=e=>{"timer"in e&&n(1,r=e.timer),"formatTimer"in e&&n(2,a=e.formatTimer)},e.$$.update=()=>{6&e.$$.dirty&&n(0,l=a(r))},[l,r,a]}class pe extends Q{constructor(e){super(),K(this,e,he,ge,i,{timer:1,formatTimer:2})}}function $e(t){let n,o,i,s,r,f,h,$,b,_,y,k,x,w;return{c(){n=d("div"),o=d("label"),i=d("input"),s=m("\n\t\tSmall"),r=g(),f=d("label"),h=d("input"),$=m("\n\t\tMedium"),b=g(),_=d("label"),y=d("input"),k=m("\n\t\tLarge"),v(i,"type","radio"),i.__value=1,i.value=i.__value,t[2][0].push(i),v(o,"class","svelte-1ciuqbb"),v(h,"type","radio"),h.__value=2,h.value=h.__value,t[2][0].push(h),v(f,"class","svelte-1ciuqbb"),v(y,"type","radio"),y.__value=3,y.value=y.__value,t[2][0].push(y),v(_,"class","svelte-1ciuqbb"),v(n,"class","svelte-1ciuqbb")},m(e,l){c(e,n,l),a(n,o),a(o,i),i.checked=i.__value===t[0],a(o,s),a(n,r),a(n,f),a(f,h),h.checked=h.__value===t[0],a(f,$),a(n,b),a(n,_),a(_,y),y.checked=y.__value===t[0],a(_,k),x||(w=[p(i,"change",t[1]),p(h,"change",t[3]),p(y,"change",t[4])],x=!0)},p(e,[t]){1&t&&(i.checked=i.__value===e[0]),1&t&&(h.checked=h.__value===e[0]),1&t&&(y.checked=y.__value===e[0])},i:e,o:e,d(e){e&&u(n),t[2][0].splice(t[2][0].indexOf(i),1),t[2][0].splice(t[2][0].indexOf(h),1),t[2][0].splice(t[2][0].indexOf(y),1),x=!1,l(w)}}}function ve(e,t,n){let l;s(e,ee,(e=>n(0,l=e)));return[l,function(){l=this.__value,ee.set(l)},[[]],function(){l=this.__value,ee.set(l)},function(){l=this.__value,ee.set(l)}]}class be extends Q{constructor(e){super(),K(this,e,ve,$e,i,{})}}function _e(t){let n,l,o,i,s;return{c(){n=d("h2"),n.textContent="Instructions",l=g(),o=d("ol"),o.innerHTML='<li class="svelte-ulch0o">You are presented with a board of squares. Some squares contain mines\n\t\t(bombs), others don&#39;t. If you click on a square containing a bomb, you lose.\n\t\tIf you manage to click all the squares (without clicking on any bombs) you\n\t\twin.</li> \n\t<li class="svelte-ulch0o">Clicking a square which doesn&#39;t have a bomb reveals the number of\n\t\tneighbouring squares containing bombs. Use this information plus some guess\n\t\twork to avoid the bombs.</li> \n\t<li class="svelte-ulch0o">To open a square, point at the square and click on it. To mark a square you\n\t\tthink is a bomb, point and right-click. To remove a bomb marker from a\n\t\tsquare, point at it and right-click again.</li> \n\t<li class="svelte-ulch0o">You don&#39;t have to mark all the bombs to win; you just need to open all\n\t\tnon-bomb squares.</li> \n\t<li class="svelte-ulch0o">If an open square has the correct number of marked neighboring bombs, double\n\t\tclick on the open square to open all remaining unopened neighbor squares all\n\t\tat once. If an incorrect number of neighbors are marked, or all neighbors\n\t\tare marked or open, clicking the square has no effect. If an incorrect\n\t\tneighbor is marked, this will cause instant death.</li> \n\t<li class="svelte-ulch0o">Enjoy the game!! Thanks for playing ⛏️⛏️</li>',v(n,"class","svelte-ulch0o"),v(o,"class","svelte-ulch0o"),y(o,"visible",t[0])},m(e,r){c(e,n,r),c(e,l,r),c(e,o,r),i||(s=p(n,"click",t[1]),i=!0)},p(e,[t]){1&t&&y(o,"visible",e[0])},i:e,o:e,d(e){e&&u(n),e&&u(l),e&&u(o),i=!1,s()}}}function ye(e,t,n){let l=!1;return[l,()=>n(0,l=!l)]}class ke extends Q{constructor(e){super(),K(this,e,ye,_e,i,{})}}function xe(e){let t,n,l,o,i;function s(e,t){return"lost"===e[3]?je:"won"===e[3]?we:void 0}let r=s(e),a=r&&r(e);return{c(){t=d("button"),t.textContent="Start over?",n=g(),a&&a.c(),l=h(),v(t,"class","svelte-jlu49b")},m(s,r){c(s,t,r),c(s,n,r),a&&a.m(s,r),c(s,l,r),o||(i=p(t,"click",e[12]),o=!0)},p(e,t){r!==(r=s(e))&&(a&&a.d(1),a=r&&r(e),a&&(a.c(),a.m(l.parentNode,l)))},d(e){e&&u(t),e&&u(n),a&&a.d(e),e&&u(l),o=!1,i()}}}function we(e){let t;return{c(){t=d("h2"),t.textContent="You Won 🙌🎉",v(t,"class","svelte-jlu49b")},m(e,n){c(e,t,n)},d(e){e&&u(t)}}}function je(e){let t;return{c(){t=d("h2"),t.textContent="You Lost 👎",v(t,"class","svelte-jlu49b")},m(e,n){c(e,t,n)},d(e){e&&u(t)}}}function Ce(e){let t,n,l,o,i,s,r,f,h,p,$,_=e[7]-e[6]+"";function y(t){e[16](t)}i=new be({});let k={formatTimer:Se};return void 0!==e[0]&&(k.timer=e[0]),r=new pe({props:k}),T.push((()=>function(e,t,n){const l=e.$$.props[t];void 0!==l&&(e.$$.bound[l]=n,n(e.$$.ctx[l]))}(r,"timer",y))),p=new ue({props:{gameTiles:e[5]}}),p.$on("reveal",e[9]),p.$on("flag",e[10]),p.$on("chord",e[11]),{c(){t=d("h2"),n=m("💣 "),l=m(_),o=g(),G(i.$$.fragment),s=g(),G(r.$$.fragment),h=g(),G(p.$$.fragment),v(t,"class","svelte-jlu49b")},m(e,u){c(e,t,u),a(t,n),a(t,l),c(e,o,u),P(i,e,u),c(e,s,u),P(r,e,u),c(e,h,u),P(p,e,u),$=!0},p(e,t){(!$||192&t)&&_!==(_=e[7]-e[6]+"")&&b(l,_);const n={};var o;!f&&1&t&&(f=!0,n.timer=e[0],o=()=>f=!1,E.push(o)),r.$set(n);const i={};32&t&&(i.gameTiles=e[5]),p.$set(i)},i(e){$||(H(i.$$.fragment,e),H(r.$$.fragment,e),H(p.$$.fragment,e),$=!0)},o(e){D(i.$$.fragment,e),D(r.$$.fragment,e),D(p.$$.fragment,e),$=!1},d(e){e&&u(t),e&&u(o),U(i,e),e&&u(s),U(r,e),e&&u(h),U(p,e)}}}function qe(e){let t,n,o,i,s,r,f,m,h,$,b,y,k,x,w;i=new ke({});let j=null!==e[1][e[2]]&&Fe(e);return{c(){t=d("h1"),t.textContent="Svelte Minesweeper 👷‍♂️👷‍♀️",n=g(),o=d("div"),G(i.$$.fragment),s=g(),r=d("select"),f=d("option"),f.textContent="Easy",m=d("option"),m.textContent="Medium",h=d("option"),h.textContent="Hard",$=g(),j&&j.c(),b=g(),y=d("button"),y.textContent="Start Game!",v(t,"class","svelte-jlu49b"),f.__value="easy",f.value=f.__value,m.__value="medium",m.value=m.__value,h.__value="hard",h.value=h.__value,v(r,"class","svelte-jlu49b"),void 0===e[2]&&B((()=>e[15].call(r))),v(y,"class","svelte-jlu49b"),v(o,"class","game-options svelte-jlu49b")},m(l,u){c(l,t,u),c(l,n,u),c(l,o,u),P(i,o,null),a(o,s),a(o,r),a(r,f),a(r,m),a(r,h),_(r,e[2]),a(o,$),j&&j.m(o,null),a(o,b),a(o,y),k=!0,x||(w=[p(r,"change",e[15]),p(y,"click",e[8])],x=!0)},p(e,t){4&t&&_(r,e[2]),null!==e[1][e[2]]?j?j.p(e,t):(j=Fe(e),j.c(),j.m(o,b)):j&&(j.d(1),j=null)},i(e){k||(H(i.$$.fragment,e),k=!0)},o(e){D(i.$$.fragment,e),k=!1},d(e){e&&u(t),e&&u(n),e&&u(o),U(i),j&&j.d(),x=!1,l(w)}}}function Fe(e){let t,n,l,o=Se(e[1][e[2]])+"";return{c(){t=d("h2"),n=m("🏆 Best Time: "),l=m(o),v(t,"class","svelte-jlu49b")},m(e,o){c(e,t,o),a(t,n),a(t,l)},p(e,t){6&t&&o!==(o=Se(e[1][e[2]])+"")&&b(l,o)},d(e){e&&u(t)}}}function Te(e){let t,n,l,o,i,s,r,f,m="playing"!==e[3]&&xe(e);const h=[qe,Ce],b=[];function _(e,t){return e[4]?1:0}return l=_(e),o=b[l]=h[l](e),{c(){t=d("main"),m&&m.c(),n=g(),o.c(),i=g(),v(t,"class","svelte-jlu49b")},m(o,u){c(o,t,u),m&&m.m(t,null),a(t,n),b[l].m(t,null),c(o,i,u),s=!0,r||(f=p(document.body,"contextmenu",$(e[14])),r=!0)},p(e,[i]){"playing"!==e[3]?m?m.p(e,i):(m=xe(e),m.c(),m.m(t,n)):m&&(m.d(1),m=null);let s=l;l=_(e),l===s?b[l].p(e,i):(z(),D(b[s],1,1,(()=>{b[s]=null})),J(),o=b[l],o?o.p(e,i):(o=b[l]=h[l](e),o.c()),H(o,1),o.m(t,null))},i(e){s||(H(o),s=!0)},o(e){D(o),s=!1},d(e){e&&u(t),m&&m.d(),b[l].d(),e&&u(i),r=!1,f()}}}function Se(e){let t=Math.floor(e/60),n=Math.floor(e%60);return t<=9&&(t="0"+t),n<=9&&(n="0"+n),t+":"+n}function Ee(e,t,n){let l,o,i,r;s(e,Z,(e=>n(3,r=e)));let a=0,c={easy:null,medium:null,hard:null};j((()=>{localStorage.getItem("best-times")?n(1,c=JSON.parse(localStorage.getItem("best-times"))):localStorage.setItem("best-times",JSON.stringify(c))}));let u=!1,f="easy",d=[],m=0,g=0;async function h(e,t){d[e]&&d[e][t]&&!d[e][t].isClicked&&!d[e][t].isFlagged&&(n(5,d[e][t].isClicked=!0,d),n(13,m++,m),"💣"===d[e][t].value&&Z.update((()=>"lost")),1===m&&function(e,t){for(let s=0;s<i;s++){let i=!0;for(;i;){const s=Math.floor(Math.random()*l),r=Math.floor(Math.random()*o);i="💣"===d[s][r].value;const a=Math.abs(e-s),c=Math.abs(t-r);a<=1&&c<=1&&(i=!0),i||n(5,d[s][r].value="💣",d)}}for(let e=0;e<l;e++)for(let t=0;t<o;t++){let l=0;"💣"!==d[e][t].value&&(d[e-1]&&d[e-1][t-1]&&"💣"===d[e-1][t-1].value&&l++,d[e][t-1]&&"💣"===d[e][t-1].value&&l++,d[e+1]&&d[e+1][t-1]&&"💣"===d[e+1][t-1].value&&l++,d[e+1]&&"💣"===d[e+1][t].value&&l++,d[e+1]&&d[e+1][t+1]&&"💣"===d[e+1][t+1].value&&l++,d[e][t+1]&&"💣"===d[e][t+1].value&&l++,d[e-1]&&d[e-1][t+1]&&"💣"===d[e-1][t+1].value&&l++,d[e-1]&&"💣"===d[e-1][t].value&&l++,n(5,d[e][t].value=l||"",d))}}(e,t),setTimeout((()=>{""===d[e][t].value&&(h(e-1,t-1),h(e,t-1),h(e+1,t-1),h(e+1,t),h(e+1,t+1),h(e,t+1),h(e-1,t+1),h(e-1,t))}),22))}return e.$$.update=()=>{4&e.$$.dirty&&(l="easy"===f?9:"medium"===f?16:30),4&e.$$.dirty&&(o="easy"===f?9:16),4&e.$$.dirty&&n(7,i="easy"===f?10:"medium"===f?40:99),8196&e.$$.dirty&&("easy"===f&&71===m||"medium"===f&&216===m||"hard"===f&&381===m)&&Z.update((()=>"won")),15&e.$$.dirty&&"won"===r&&(!c[f]||a<c[f])&&(n(1,c[f]=a,c),localStorage.setItem("best-times",JSON.stringify(c)))},[a,c,f,r,u,d,g,i,function(){for(let e=0;e<l;e++){let e=[];for(let t=0;t<o;t++)e.push({component:me,value:"",isClicked:!1,isFlagged:!1});d.push(e)}n(4,u=!0)},function(e){e.detail.isBomb?(n(5,d[e.detail.i][e.detail.j].isClicked=!0,d),Z.update((()=>"lost"))):h(e.detail.i,e.detail.j)},function(e){n(5,d[e.detail.i][e.detail.j].isFlagged=e.detail.flagState,d),e.detail.flagState?n(6,g++,g):n(6,g--,g)},function(e){const{i:t,j:n,value:l}=e.detail;(function(e,t,n){let l=0;return d[e-1]&&d[e-1][t-1]&&d[e-1][t-1].isFlagged&&l++,d[e][t-1]&&d[e][t-1].isFlagged&&l++,d[e+1]&&d[e+1][t-1]&&d[e+1][t-1].isFlagged&&l++,d[e+1]&&d[e+1][t].isFlagged&&l++,d[e+1]&&d[e+1][t+1]&&d[e+1][t+1].isFlagged&&l++,d[e][t+1]&&d[e][t+1].isFlagged&&l++,d[e-1]&&d[e-1][t+1]&&d[e-1][t+1].isFlagged&&l++,d[e-1]&&d[e-1][t].isFlagged&&l++,n===l})(t,n,l)&&(h(t-1,n-1),h(t,n-1),h(t+1,n-1),h(t+1,n),h(t+1,n+1),h(t,n+1),h(t-1,n+1),h(t-1,n))},function(){n(4,u=!1),Z.update((()=>"playing")),n(5,d=[]),n(13,m=0),n(6,g=0),n(0,a=0)},m,function(t){q(e,t)},function(){f=function(e){const t=e.querySelector(":checked")||e.options[0];return t&&t.__value}(this),n(2,f)},function(e){a=e,n(0,a)}]}return new class extends Q{constructor(e){super(),K(this,e,Ee,Te,i,{})}}({target:document.body})}();
//# sourceMappingURL=bundle.js.map