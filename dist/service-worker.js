if(!self.define){let e,i={};const s=(s,r)=>(s=new URL(s+".js",r).href,i[s]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=s,e.onload=i,document.head.appendChild(e)}else e=s,importScripts(s),i()})).then((()=>{let e=i[s];if(!e)throw new Error(`Module ${s} didn’t register its module`);return e})));self.define=(r,l)=>{const n=e||("document"in self?document.currentScript.src:"")||location.href;if(i[n])return;let f={};const u=e=>s(e,n),o={module:{uri:n},exports:f,require:u};i[n]=Promise.all(r.map((e=>o[e]||u(e)))).then((e=>(l(...e),f)))}}define(["./workbox-2d118ab0"],(function(e){"use strict";e.setCacheNameDetails({prefix:"frontend"}),self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"/css/app.8626a860.css",revision:null},{url:"/global.css",revision:"acf251f82d064327117730999f834bfe"},{url:"/img/Brot.3a6c5b4c.svg",revision:null},{url:"/img/Desserts.c43c74c4.svg",revision:null},{url:"/img/Eis.3e5623b1.svg",revision:null},{url:"/img/Grillen.c225c640.svg",revision:null},{url:"/img/Kekse und Stückgebäck.9561f6b7.svg",revision:null},{url:"/img/Nudeln.7e1e0df6.svg",revision:null},{url:"/img/Teig.c421e611.svg",revision:null},{url:"/img/Timer.96a9fcf5.svg",revision:null},{url:"/img/Torten.2deee023.svg",revision:null},{url:"/img/default.049dd296.svg",revision:null},{url:"/img/filters/Brot.svg",revision:"fbcec6964c73a57a98b53be1e5afa8fd"},{url:"/img/filters/Desserts.svg",revision:"66208a95ca3ea40f2bcb3ca62a75d364"},{url:"/img/filters/Eis.svg",revision:"ace5d9a95bfb309745eab95cb692057f"},{url:"/img/filters/Grillen.svg",revision:"ca8fb1869f2cb7b5e36c4ac3d8d8d592"},{url:"/img/filters/Kekse und Stückgebäck.svg",revision:"1aa49d16219c7350901be316fbf96be4"},{url:"/img/filters/Nudeln.svg",revision:"b86bf477c6345b3c1f35fec147a1412e"},{url:"/img/filters/Teig.svg",revision:"eb6e571bfb4b7032ac2e1c7c2d41def0"},{url:"/img/filters/Timer.svg",revision:"f6ea0fe3611dd8f139af66f07fa47f14"},{url:"/img/filters/Torten.svg",revision:"2daf36f2d2981451b1aedd8f95df6ad0"},{url:"/img/filters/default.svg",revision:"1e4be0dab3d12e8edce2b879fe9da507"},{url:"/index.html",revision:"53522bf9d517db608a2947168853db1a"},{url:"/js/494.174ff782.js",revision:null},{url:"/js/856.3134178b.js",revision:null},{url:"/js/app.29d05621.js",revision:null},{url:"/js/chunk-vendors.f29af794.js",revision:null},{url:"/manifest.json",revision:"4b14c64efaf846819b9a229b4193c8b7"},{url:"/robots.txt",revision:"b6216d61c03e6ce0c9aea6ca7808f7ca"}],{})}));
//# sourceMappingURL=service-worker.js.map
