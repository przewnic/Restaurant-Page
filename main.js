(()=>{"use strict";var e={};function n(e){const n=document.createElement("button");return n.innerHTML=e,n.id=e,n.classList.add("nav-button"),n}function t(e,n,t,a){const c=document.createElement("div");c.classList.add(a);const i=document.createElement("img");i.src=e,i.alt=n,c.appendChild(i);const d=document.createElement("div"),p=document.createElement("p");return p.innerHTML=t,d.appendChild(p),c.appendChild(d),c}e.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),(()=>{var n;e.g.importScripts&&(n=e.g.location+"");var t=e.g.document;if(!n&&t&&(t.currentScript&&(n=t.currentScript.src),!n)){var a=t.getElementsByTagName("script");a.length&&(n=a[a.length-1].src)}if(!n)throw new Error("Automatic publicPath is not supported in this browser");n=n.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),e.p=n})();const a=e.p+"img/pexels-anna-tarazevich-7251845-3805ccdec1f134fa201d.jpg",c=e.p+"img/pexels-anna-tarazevich-7287687-300bd301d25f6e949fc5.jpg",i=e.p+"img/pexels-anna-tarazevich-7287697-3259ae634e4d121f080c.jpg";function d(){const e=document.createElement("div");e.classList.add("tab"),e.classList.add("home-tab");const n=t(a,"Dumplings","The best Dumplings in your town!","home-card");e.appendChild(n);const d=t(c,"Dumplings","Visit us today","home-card");e.appendChild(d);const p=t(i,"Dumplings","Your favorite dumplings are waiting!","home-card");return e.appendChild(p),e}const p=e.p+"img/pexels-anna-tarazevich-7287719-c20640c1a8462c550bf8.jpg",o=e.p+"img/pexels-cats-coming-750941-3ba2dfe1f026b1f9bf9b.jpg",r=e.p+"img/pexels-cats-coming-955137-7cb8ad3cc38b724e3f17.jpg",s=e.p+"img/pexels-cats-coming-1385185-a50967aa82098bee4c91.jpg",l=e.p+"img/pexels-cottonbro-3296903-640aa502b22dcf4a3810.jpg",m=e.p+"img/pexels-jamie-saw-13055484-6b9b60fb578b32b6e8cb.jpg",u=e.p+"img/pexels-momo-king-5409015-b675eac9ed18f57c4261.jpg";function g(e,n){const t=document.createElement("div");t.classList.add("menu-card");const a=document.createElement("img");a.alt=e,a.src=n,t.appendChild(a);const c=document.createElement("div"),i=document.createElement("p");return i.innerHTML=e,c.appendChild(i),t.appendChild(c),t}const h=e.p+"img/pexels-anna-tarazevich-7287725-12170876b52f8f7f3ced.jpg",f=e.p+"img/pexels-anna-tarazevich-7287728-8571648a46ed9bbdf544.jpg",b=document.getElementById("content");b.appendChild(function(){const e=document.createElement("header"),t=document.createElement("h1");t.innerHTML="Dumplings",e.appendChild(t);const a=document.createElement("nav");return a.appendChild(n("Home")),a.appendChild(n("Menu")),a.appendChild(n("Contact")),e.appendChild(a),e}());const C=document.createElement("main");C.appendChild(d()),b.appendChild(C),b.appendChild(function(){const e=document.createElement("footer"),n=document.createElement("p");return n.innerHTML="Copyright 2022",e.appendChild(n),e}());const v=document.querySelectorAll(".nav-button");for(let e of v)e.addEventListener("click",(e=>{E(e,C)}));function E(e,n){switch(n.firstChild&&n.removeChild(n.firstChild),e.target.id){case"Home":n.appendChild(d());break;case"Menu":n.appendChild(function(){const e=document.createElement("div");return e.classList.add("tab"),e.classList.add("menu-tab"),e.appendChild(g("Fried Dumplings",p)),e.appendChild(g("Spinach Dumplings",o)),e.appendChild(g("Soup Dumplings",r)),e.appendChild(g("Soucey Dumplings",s)),e.appendChild(g("Parsley Dumplings",l)),e.appendChild(g("Pierogis Dumplings",m)),e.appendChild(g("Round Dumplings",u)),e}());break;case"Contact":n.appendChild(function(){const e=document.createElement("div");e.classList.add("tab"),e.classList.add("contact-tab");const n=t(h,"Dumplings","Call us today and order your favorite Dumplings!","contact-card");e.appendChild(n);const a=t(f,"Dumplings","Come to our Restaurant!","contact-card");return e.appendChild(a),e}())}}})();