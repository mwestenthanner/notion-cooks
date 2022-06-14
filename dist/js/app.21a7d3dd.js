(function(){"use strict";var e={713:function(e,n,t){var i=t(963),r=t(655),o=t(252);const s=e=>((0,o.dD)("data-v-44fd98fd"),e=e(),(0,o.Cn)(),e),c=s((()=>(0,o._)("ul",null,[(0,o._)("li",null,"Kategorien"),(0,o._)("li",null,"Sammlungen"),(0,o._)("li",null,"Zeitaufwand"),(0,o._)("li",null,"Alle Rezepte")],-1))),a=[c];function u(e,n){return(0,o.wg)(),(0,o.iD)("nav",null,a)}var l=t(744);const d={},f=(0,l.Z)(d,[["render",u],["__scopeId","data-v-44fd98fd"]]);var g=f,p=t(907),h=(0,o._)("h1",null,[(0,o.Uk)("recipe"),(0,o._)("span",{class:"heading"},"box")],-1),m=(0,o._)("footer",null,[(0,o._)("div",{class:"credits"},"© Marianne Westenthanner 2022")],-1),v=(0,o.aZ)({__name:"App",setup:function(e){var n=this,t=(0,p.oR)();return(0,o.wF)((function(){return(0,r.mG)(n,void 0,void 0,(function(){var e,n;return(0,r.Jh)(this,(function(i){switch(i.label){case 0:return[4,fetch("https://notion-cooks.netlify.app/.netlify/functions/api/recipes")];case 1:return e=i.sent(),[4,e.json()];case 2:return n=i.sent(),t.commit("setRecipeList",n),[2]}}))}))})),function(e,n){var t=(0,o.up)("router-link"),i=(0,o.up)("router-view");return(0,o.wg)(),(0,o.iD)(o.HY,null,[(0,o._)("header",null,[(0,o.Wm)(t,{to:"/"},{default:(0,o.w5)((function(){return[h]})),_:1}),(0,o.Wm)(g)]),(0,o._)("main",null,[((0,o.wg)(),(0,o.j4)(o.n4,null,{default:(0,o.w5)((function(){return[(0,o.Wm)(i)]})),_:1}))]),m],64)}}});const w=v;var _=w,b=t(205);(0,b.z)("".concat("/","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(e){console.error("Error during service worker registration:",e)}});var y=(0,p.MT)({state:{recipeList:[{id:"",title:"",desc:"",img:"",category:"",slug:"",tags:[""],time:"",collections:[]}],categoryList:["Brotzeit","Grillen","Pasta","Reis","Kartoffeln"]},getters:{getRecipeList:function(e){return e.recipeList},getRecipeContent:function(e){return function(n){return e.recipeList.find((function(e){return e.slug===n}))}},getCategories:function(e){return e.categoryList}},mutations:{setRecipeList:function(e,n){e.recipeList=n},setRecipeContent:function(e,n){var t=e.recipeList.findIndex((function(e){return e.slug===n.slug}));e.recipeList[t]=n}},actions:{},modules:{}}),z=t(119),S=t(262),k=t(577),D={class:"panel"},L={class:"image"},A=["src","alt"],H={class:"content"},j={class:"tags"},x=(0,o.aZ)({__name:"RecipePanel",props:["recipe"],setup:function(e){var n=e;return function(e,t){var i=(0,o.up)("router-link");return(0,o.wg)(),(0,o.j4)(i,{to:"/recipe/"+n.recipe.slug},{default:(0,o.w5)((function(){return[(0,o._)("div",D,[(0,o._)("div",L,[(0,o._)("img",{src:n.recipe.img,alt:n.recipe.title},null,8,A)]),(0,o._)("div",H,[(0,o._)("h3",null,(0,k.zw)(n.recipe.title),1),(0,o._)("div",j,[((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(n.recipe.tags,(function(e){return(0,o.wg)(),(0,o.iD)("span",{class:"tag",key:e},(0,k.zw)(e),1)})),128))])])])]})),_:1},8,["to"])}}});const R=(0,l.Z)(x,[["__scopeId","data-v-d2c40366"]]);var G=R,O={class:"collection"},q={class:"image"},F=["src"],P={class:"content"},U=(0,o.aZ)({__name:"CollectionPanel",props:["collection"],setup:function(e){var n=e;return function(e,t){return(0,o.wg)(),(0,o.iD)("div",O,[(0,o._)("div",q,[(0,o._)("img",{src:n.collection.img,alt:""},null,8,F)]),(0,o._)("div",P,[(0,o._)("h2",null,(0,k.zw)(n.collection.name),1),(0,o._)("h3",null,(0,k.zw)(n.collection.desc),1)])])}}});const Z=(0,l.Z)(U,[["__scopeId","data-v-ddc856ba"]]);var B=Z,C={class:"collections"},E={class:"recipes"},M=(0,o._)("h2",null,"Neueste Rezepte",-1),W={class:"panels"},Y=(0,o.aZ)({__name:"MainView",setup:function(e){var n=(0,p.oR)(),t=(0,S.Fl)((function(){return n.getters.getRecipeList})),i=[{name:"Fantastic BBQ",desc:"Grillrezepte für den ganzen Sommer",img:"https://images.unsplash.com/photo-1544470554-71345f04eba0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"},{name:"Schnelle Sommergerichte",desc:"Unter 15 Minuten und perfekt für heiße Tage",img:"https://images.unsplash.com/photo-1496318447583-f524534e9ce1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1534&q=80"}];return function(e,n){return(0,o.wg)(),(0,o.iD)(o.HY,null,[(0,o._)("div",C,[((0,o.wg)(),(0,o.iD)(o.HY,null,(0,o.Ko)(i,(function(e){return(0,o.Wm)(B,{key:e.name,collection:e},null,8,["collection"])})),64))]),(0,o._)("div",E,[M,(0,o._)("div",W,[((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)((0,S.SU)(t),(function(e){return(0,o.wg)(),(0,o.j4)(G,{key:e.slug,recipe:e},null,8,["recipe"])})),128))])])],64)}}});const K=Y;var X=K,I={class:"recipe"},N={class:"left"},T=["src","alt"],V={class:"right"},J={class:"title-block"},Q={class:"ingredients"},$={class:"prep"},ee=(0,o.aZ)({__name:"RecipeView",setup:function(e){return(0,r.mG)(this,void 0,void 0,(function(){var e,n,t,i,s,c,a,u,l,d,f=this;return(0,r.Jh)(this,(function(g){switch(g.label){case 0:return t=(0,p.oR)(),i=(0,z.yj)(),s=i.params.slug,c={title:"Sobanudelsalat",desc:"Kühl, erfrischend und in 10 Minuten fertig - der perfekte Lunch für heiße Sommertage.",img:"https://s3.us-west-2.amazonaws.com/secure.notion-static.com/0f206c11-73a2-4315-a91f-0c55c7cd60df/PXL_20220611_164502586.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20220614%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20220614T135218Z&X-Amz-Expires=3600&X-Amz-Signature=598c4b3cb80c57e7695fd3fdcbc7f6b3a8f060cc31cfaa7f0c3ccf85611e70a3&X-Amz-SignedHeaders=host&x-id=GetObject",category:"Kochen",tags:["Brotzeit","Nudeln"],time:"< 15 min",collections:["Schnelle Sommergerichte"],ingredientsHeading:"Zutaten für 4 Portionen",ingredientsList:[{quantity:"1 Packung",ingredient:"Sobanudeln (japanische Buchweizennudeln)"},{quantity:"½",ingredient:"Gurke"},{quantity:"1 Handvoll",ingredient:"Edamame"},{quantity:"2",ingredient:"Frühlingszwiebeln"},{quantity:"4 EL",ingredient:"Erdnussbutter"},{quantity:"2 EL",ingredient:"Sojasauce"},{quantity:"1 TL",ingredient:"Reisessig"},{quantity:"4 EL",ingredient:"Wasser"}],prepHeading:"Zubereitung",prepList:["Die Sobanudeln und Edamame nach Packungsanweisung kochen, dann mit eiskaltem Wasser abbrausen. ","Die Gurke in dünne Streifen schneiden. Die Frühlingszwiebeln putzen und in Scheiben schneiden.","Für das Dressing Erdnussbutter, Sojasauce, Reisessig und Wasser verrühren und gut durchmischen.","Das Gemüse mit den Nudeln mischen, das Dressing darübergeben und gut vermengen. Bis zum Servieren kaltstellen."]},(0,o.YP)(t.state,(function(){return(0,r.mG)(f,void 0,void 0,(function(){return(0,r.Jh)(this,(function(e){return console.log("state changed"),[2]}))}))})),c.ingredientsHeading?[3,3]:(l=(0,o.mv)((function(){return fetch("https://notion-cooks.netlify.app/.netlify/functions/api/recipe/"+s)})),e=l[0],n=l[1],[4,e]);case 1:return e=g.sent(),n(),a=e,d=(0,o.mv)((function(){return a.json()})),e=d[0],n=d[1],[4,e];case 2:e=g.sent(),n(),u=e,t.commit("setRecipeContent",u),g.label=3;case 3:return[2,function(e,n){return(0,o.wg)(),(0,o.iD)("div",I,[(0,o._)("div",N,[(0,o._)("img",{src:(0,S.SU)(c).img,alt:(0,S.SU)(c).title},null,8,T)]),(0,o._)("div",V,[(0,o._)("div",J,[(0,o._)("h2",null,(0,k.zw)((0,S.SU)(c).title),1),(0,o._)("h4",null,(0,k.zw)((0,S.SU)(c).category)+" | "+(0,k.zw)((0,S.SU)(c).time),1)]),(0,o._)("div",Q,[(0,o._)("h3",null,(0,k.zw)((0,S.SU)(c).ingredientsHeading),1),(0,o._)("table",null,[((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)((0,S.SU)(c).ingredientsList,(function(e){return(0,o.wg)(),(0,o.iD)("tr",{key:e.ingredient},[(0,o._)("td",null,(0,k.zw)(e.quantity),1),(0,o._)("td",null,(0,k.zw)(e.ingredient),1)])})),128))])]),(0,o._)("div",$,[(0,o._)("h3",null,(0,k.zw)((0,S.SU)(c).prepHeading),1),(0,o._)("ol",null,[((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)((0,S.SU)(c).prepList,(function(e){return(0,o.wg)(),(0,o.iD)("li",{key:e},(0,k.zw)(e),1)})),128))])])])])}]}}))}))}});const ne=(0,l.Z)(ee,[["__scopeId","data-v-7707dcda"]]);var te=ne,ie=[{path:"",name:"home",component:X},{path:"/test",name:"test",component:te},{path:"/recipe/:slug",name:"recipe",component:te,props:!0}],re=(0,z.p7)({history:(0,z.PO)(),routes:ie,scrollBehavior:function(e){return e.hash?{el:e.hash,top:50,behavior:"smooth"}:{top:0,behavior:"smooth"}}}),oe=re;(0,i.ri)(_).use(y).use(oe).mount("#app")}},n={};function t(i){var r=n[i];if(void 0!==r)return r.exports;var o=n[i]={exports:{}};return e[i](o,o.exports,t),o.exports}t.m=e,function(){var e=[];t.O=function(n,i,r,o){if(!i){var s=1/0;for(l=0;l<e.length;l++){i=e[l][0],r=e[l][1],o=e[l][2];for(var c=!0,a=0;a<i.length;a++)(!1&o||s>=o)&&Object.keys(t.O).every((function(e){return t.O[e](i[a])}))?i.splice(a--,1):(c=!1,o<s&&(s=o));if(c){e.splice(l--,1);var u=r();void 0!==u&&(n=u)}}return n}o=o||0;for(var l=e.length;l>0&&e[l-1][2]>o;l--)e[l]=e[l-1];e[l]=[i,r,o]}}(),function(){t.d=function(e,n){for(var i in n)t.o(n,i)&&!t.o(e,i)&&Object.defineProperty(e,i,{enumerable:!0,get:n[i]})}}(),function(){t.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){t.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)}}(),function(){var e={143:0};t.O.j=function(n){return 0===e[n]};var n=function(n,i){var r,o,s=i[0],c=i[1],a=i[2],u=0;if(s.some((function(n){return 0!==e[n]}))){for(r in c)t.o(c,r)&&(t.m[r]=c[r]);if(a)var l=a(t)}for(n&&n(i);u<s.length;u++)o=s[u],t.o(e,o)&&e[o]&&e[o][0](),e[o]=0;return t.O(l)},i=self["webpackChunkfrontend"]=self["webpackChunkfrontend"]||[];i.forEach(n.bind(null,0)),i.push=n.bind(null,i.push.bind(i))}();var i=t.O(void 0,[998],(function(){return t(713)}));i=t.O(i)})();
//# sourceMappingURL=app.21a7d3dd.js.map