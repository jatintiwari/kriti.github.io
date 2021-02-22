var app=function(){"use strict";function t(){}function e(t){return t()}function n(){return Object.create(null)}function i(t){t.forEach(e)}function s(t){return"function"==typeof t}function r(t,e){return t!=t?e==e:t!==e||t&&"object"==typeof t||"function"==typeof t}function a(t,e){t.appendChild(e)}function o(t,e,n){t.insertBefore(e,n)}function l(t){t.parentNode.removeChild(t)}function c(t){return document.createElement(t)}function d(t){return document.createTextNode(t)}function u(){return d(" ")}function h(t,e,n){t.style.setProperty(e,n)}let m;function g(t){m=t}function f(t){(function(){if(!m)throw new Error("Function called outside component initialization");return m})().$$.on_mount.push(t)}const p=[];let b;const $=[],v=[],y=[];function _(t){v.push(t)}function w(){const t=new Set;do{for(;p.length;){const t=p.shift();g(t),M(t.$$)}for(;$.length;)$.shift()();for(;v.length;){const e=v.pop();t.has(e)||(e(),t.add(e))}}while(p.length);for(;y.length;)y.pop()();b=null}function M(t){t.fragment&&(t.update(t.dirty),i(t.before_render),t.fragment.p(t.dirty,t.ctx),t.dirty=null,t.after_render.forEach(_))}function x(t,n,r){const{fragment:a,on_mount:o,on_destroy:l,after_render:c}=t.$$;a.m(n,r),_(()=>{const n=o.map(e).filter(s);l?l.push(...n):i(n),t.$$.on_mount=[]}),c.forEach(_)}function I(t,e){t.$$.dirty||(p.push(t),b||(b=Promise.resolve(),b.then(w)),t.$$.dirty={}),t.$$.dirty[e]=!0}function N(e,s,r,a,o,l){const c=m;g(e);const d=s.props||{},u=e.$$={fragment:null,ctx:null,props:l,update:t,not_equal:o,bound:n(),on_mount:[],on_destroy:[],before_render:[],after_render:[],context:new Map(c?c.$$.context:[]),callbacks:n(),dirty:null};let h=!1;u.ctx=r?r(e,d,(t,n)=>{u.ctx&&o(u.ctx[t],u.ctx[t]=n)&&(u.bound[t]&&u.bound[t](n),h&&I(e,t))}):d,u.update(),h=!0,i(u.before_render),u.fragment=a(u.ctx),s.target&&(s.hydrate?u.fragment.l(function(t){return Array.from(t.childNodes)}(s.target)):u.fragment.c(),s.intro&&e.$$.fragment.i&&e.$$.fragment.i(),x(e,s.target,s.anchor),w()),g(c)}class C{$destroy(){var e,n;n=!0,(e=this).$$&&(i(e.$$.on_destroy),e.$$.fragment.d(n),e.$$.on_destroy=e.$$.fragment=null,e.$$.ctx={}),this.$destroy=t}$on(t,e){const n=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return n.push(e),()=>{const t=n.indexOf(e);-1!==t&&n.splice(t,1)}}$set(){}}function k(e){var n,i,s,r,d;return{c(){var t,a,o,l;n=c("div"),i=c("div"),(s=c("div")).innerHTML='<button class="links svelte-1dfbl6" data-id="expertise">Intro</button>\n\t\t\t      <button class="links svelte-1dfbl6" data-id="certificates">Certificates</button>\n\t\t\t      <a target="_blank" href="./src/images/resume.pdf" class="links svelte-1dfbl6">Resume</a>',s.className="buttons-container svelte-1dfbl6",i.className="header svelte-1dfbl6",n.className=r="header-container container-fluid "+(e.isMobile?"mobile":"")+" svelte-1dfbl6",t=s,a="click",o=e.handleNavigation,t.addEventListener(a,o,l),d=()=>t.removeEventListener(a,o,l)},m(t,e){o(t,n,e),a(n,i),a(i,s)},p(t,e){t.isMobile&&r!==(r="header-container container-fluid "+(e.isMobile?"mobile":"")+" svelte-1dfbl6")&&(n.className=r)},i:t,o:t,d(t){t&&l(n),d()}}}function H(t,e,n){let{isMobile:i}=e;return t.$set=t=>{"isMobile"in t&&n("isMobile",i=t.isMobile)},{isMobile:i,handleNavigation:t=>{const e=t.target.dataset.id,n=document.getElementById(e);console.log({element:n}),n&&n.scrollIntoView({behavior:"smooth"})}}}class E extends C{constructor(t){super(),N(this,t,H,k,r,["isMobile"])}}function z(e){var n,i;return{c(){n=c("div"),(i=c("img")).src=e.src,i.alt="",i.className="svelte-1nhw3cv",h(n,"height",e.height+"px"),h(n,"width",e.width+"px"),n.className="image-container svelte-1nhw3cv"},m(t,e){o(t,n,e),a(n,i)},p(t,e){t.src&&(i.src=e.src),t.height&&h(n,"height",e.height+"px"),t.width&&h(n,"width",e.width+"px")},i:t,o:t,d(t){t&&l(n)}}}function T(t,e,n){let{src:i="https://via.placeholder.com/150/150",height:s=150,width:r=150}=e;return t.$set=t=>{"src"in t&&n("src",i=t.src),"height"in t&&n("height",s=t.height),"width"in t&&n("width",r=t.width)},{src:i,height:s,width:r}}class L extends C{constructor(t){super(),N(this,t,T,z,r,["src","height","width"])}}function D(e){var n;return{c(){(n=c("div")).innerHTML="<h3>My professional Mission</h3>\n\t\t\t  <p>\n\t\t\t    My mission as an educator is to promote inclusion of different kinds of\n\t\t\t    learner, encourage them and work on them for their holistic development by\n\t\t\t    inculcating in them the passion for learning and creating quality\n\t\t\t    relationships, so that they grow up to be independent and critical thinkers.\n\t\t\t  </p>\n\t\t\t  <h3>My Beliefs</h3>\n\t\t\t  <p>\n\t\t\t    I believe that students are capable of doing everything they want and all\n\t\t\t    they need is a little push in the right direction. I believe that I, as a\n\t\t\t    teacher, am teaching individuals instead of a class, who contribute to the\n\t\t\t    teaching environment.\n\t\t\t  </p>\n\t\t\t  <p>\n\t\t\t    I believe that teachers have an obligation to design environments that\n\t\t\t    maximize the potential for the students to have meaningful and\n\t\t\t    transformative learning experiences Teachers must educate their students and\n\t\t\t    teach them the skills needed in the practical world. I believe that not only\n\t\t\t    teachers, but families and communities all work and support each other in\n\t\t\t    enriching the life of a child.\n\t\t\t  </p>",n.className="about-container"},m(t,e){o(t,n,e)},p:t,i:t,o:t,d(t){t&&l(n)}}}class A extends C{constructor(t){super(),N(this,t,null,D,r,[])}}function B(t){var e,n,i,s,r,d,h,m,g,f,p,b,$,v,y,_,w,M,I,N,C=new L({props:{src:"src/images/intro.png"}}),k=new A({});return{c(){e=c("div"),n=c("div"),C.$$.fragment.c(),i=u(),(s=c("h3")).textContent="Kriti",r=u(),d=c("div"),(h=c("p")).textContent="I am a post graduate in Economics and currently pursuing B.Ed from\n      Chitkara College of Education, Chitkara University.",m=u(),(g=c("p")).textContent="I am a highly organised and a patient person who believes in finding\n      solutions to problems in hand.",f=u(),(p=c("p")).textContent="I am currently working part time with an NGO, Anugrah Siksha Kendra- A\n      center for Dyslexic Students which has increased my love for teaching even\n      more.",b=u(),($=c("p")).textContent="I am a creative person who is always up for new activities. I love\n      exploring new things and places.",v=u(),(y=c("p")).textContent="I am very dedicated and self motivated in addition to this In addition to\n      this I strive to perfect every task I take up.",_=u(),(w=c("p")).textContent="I have imbibed my disciplined behavior from my mother's lifestyle and it\n      is now a part of who I am.",M=u(),k.$$.fragment.c(),s.className="name svelte-1piwtpd",n.className="intro-image svelte-1piwtpd",d.className="intro-text",e.className=I="intro-container container-fluid "+(t.isMobile?"mobile":"")+" svelte-1piwtpd"},m(t,l){o(t,e,l),a(e,n),x(C,n,null),a(n,i),a(n,s),a(e,r),a(e,d),a(d,h),a(d,m),a(d,g),a(d,f),a(d,p),a(d,b),a(d,$),a(d,v),a(d,y),a(d,_),a(d,w),a(d,M),x(k,d,null),N=!0},p(t,n){N&&!t.isMobile||I===(I="intro-container container-fluid "+(n.isMobile?"mobile":"")+" svelte-1piwtpd")||(e.className=I)},i(t){N||(C.$$.fragment.i(t),k.$$.fragment.i(t),N=!0)},o(t){C.$$.fragment.o(t),k.$$.fragment.o(t),N=!1},d(t){t&&l(e),C.$destroy(),k.$destroy()}}}function j(t,e,n){let{isMobile:i}=e;return t.$set=t=>{"isMobile"in t&&n("isMobile",i=t.isMobile)},{isMobile:i}}class K extends C{constructor(t){super(),N(this,t,j,B,r,["isMobile"])}}function O(t){var e;return{c(){(e=c("div")).className="center text-grey container-subheading thin xxl-h-padding"},m(n,i){o(n,e,i),e.innerHTML=t.subHeading},p(t,n){t.subHeading&&(e.innerHTML=n.subHeading)},d(t){t&&l(e)}}}function S(e){var n,i,s,r,h=e.subHeading&&O(e);return{c(){n=c("div"),i=c("div"),s=d(e.heading),r=u(),h&&h.c(),i.className="container-heading bold",n.className=e.containerClass},m(t,e){o(t,n,e),a(n,i),a(i,s),a(n,r),h&&h.m(n,null)},p(t,e){t.heading&&function(t,e){e=""+e,t.data!==e&&(t.data=e)}(s,e.heading),e.subHeading?h?h.p(t,e):((h=O(e)).c(),h.m(n,null)):h&&(h.d(1),h=null),t.containerClass&&(n.className=e.containerClass)},i:t,o:t,d(t){t&&l(n),h&&h.d()}}}function q(t,e,n){let{heading:i,subHeading:s,containerClass:r=""}=e;return t.$set=t=>{"heading"in t&&n("heading",i=t.heading),"subHeading"in t&&n("subHeading",s=t.subHeading),"containerClass"in t&&n("containerClass",r=t.containerClass)},{heading:i,subHeading:s,containerClass:r}}class G extends C{constructor(t){super(),N(this,t,q,S,r,["heading","subHeading","containerClass"])}}function P(e){var n,i,s,r,d,h,m,g,f,p,b,$,v,y,_,w;return{c(){n=c("div"),i=c("div"),(s=c("div")).innerHTML='<div class="glide__slides list svelte-18p3fzs"><img src="./src/images/KRITI.jpg" alt="cert1">\n\t\t\t        <img src="./src/images/kriti2.png" alt="cert2">\n\t\t\t        <img src="./src/images/kriti3.png" alt="cert3">\n\t\t\t        <img src="./src/images/kriti4.png" alt="cert4"></div>',r=u(),d=c("div"),h=c("li"),g=u(),f=c("li"),b=u(),$=c("li"),y=u(),_=c("li"),s.className="glide__track",s.dataset.glideEl="track",h.className=m="glide__bullet "+(0===e.currentId?"glide__bullet--active":"")+" svelte-18p3fzs",h.dataset.glideDir=0,f.className=p="glide__bullet "+(1===e.currentId?"glide__bullet--active":"")+" svelte-18p3fzs",f.dataset.glideDir=1,$.className=v="glide__bullet "+(2===e.currentId?"glide__bullet--active":"")+" svelte-18p3fzs",$.dataset.glideDir=2,_.className=w="glide__bullet "+(3===e.currentId?"glide__bullet--active":"")+" svelte-18p3fzs",_.dataset.glideDir=3,d.className="glide__bullets",i.className="glide",n.className="slider-container"},m(t,e){o(t,n,e),a(n,i),a(i,s),a(i,r),a(i,d),a(d,h),a(d,g),a(d,f),a(d,b),a(d,$),a(d,y),a(d,_)},p(t,e){t.currentId&&m!==(m="glide__bullet "+(0===e.currentId?"glide__bullet--active":"")+" svelte-18p3fzs")&&(h.className=m),t.currentId&&p!==(p="glide__bullet "+(1===e.currentId?"glide__bullet--active":"")+" svelte-18p3fzs")&&(f.className=p),t.currentId&&v!==(v="glide__bullet "+(2===e.currentId?"glide__bullet--active":"")+" svelte-18p3fzs")&&($.className=v),t.currentId&&w!==(w="glide__bullet "+(3===e.currentId?"glide__bullet--active":"")+" svelte-18p3fzs")&&(_.className=w)},i:t,o:t,d(t){t&&l(n)}}}function R(t,e,n){let{list:i=[],Component:s,autoplay:r=0,currentId:a=0}=e;return f(()=>{let t=new Glide(".glide");t.on("run.after",e=>{t.index>=0&&n("currentId",a=t.index)}),t.mount().update({type:"slider",perView:1,startAt:0,autoplay:r})}),t.$set=t=>{"list"in t&&n("list",i=t.list),"Component"in t&&n("Component",s=t.Component),"autoplay"in t&&n("autoplay",r=t.autoplay),"currentId"in t&&n("currentId",a=t.currentId)},{list:i,Component:s,autoplay:r,currentId:a}}class V extends C{constructor(t){super(),N(this,t,R,P,r,["list","Component","autoplay","currentId"])}}function F(e){var n,i,s,r=new G({props:{heading:"Certificates"}}),d=new V({});return{c(){n=c("div"),r.$$.fragment.c(),i=u(),d.$$.fragment.c(),n.className="container-fluid",n.id="certificates"},m(t,e){o(t,n,e),x(r,n,null),a(n,i),x(d,n,null),s=!0},p:t,i(t){s||(r.$$.fragment.i(t),d.$$.fragment.i(t),s=!0)},o(t){r.$$.fragment.o(t),d.$$.fragment.o(t),s=!1},d(t){t&&l(n),r.$destroy(),d.$destroy()}}}class U extends C{constructor(t){super(),N(this,t,null,F,r,[])}}function W(t){var e,n,i,s=new E({props:{isMobile:t.isMobile}}),r=new K({props:{isMobile:t.isMobile}}),a=new U({});return{c(){s.$$.fragment.c(),e=u(),r.$$.fragment.c(),n=u(),a.$$.fragment.c()},m(t,l){x(s,t,l),o(t,e,l),x(r,t,l),o(t,n,l),x(a,t,l),i=!0},p(t,e){var n={};t.isMobile&&(n.isMobile=e.isMobile),s.$set(n);var i={};t.isMobile&&(i.isMobile=e.isMobile),r.$set(i)},i(t){i||(s.$$.fragment.i(t),r.$$.fragment.i(t),a.$$.fragment.i(t),i=!0)},o(t){s.$$.fragment.o(t),r.$$.fragment.o(t),a.$$.fragment.o(t),i=!1},d(t){s.$destroy(t),t&&l(e),r.$destroy(t),t&&l(n),a.$destroy(t)}}}function J(t,e,n){let{isMobile:i}=e;return t.$set=t=>{"isMobile"in t&&n("isMobile",i=t.isMobile)},{isMobile:i}}return new class extends C{constructor(t){super(),N(this,t,J,W,r,["isMobile"])}}({target:document.body,props:{isMobile:document.body.clientWidth<768}})}();