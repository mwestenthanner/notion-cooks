(function(){"use strict";var e={874:function(e,n,t){var i=t(963),r=t(655),o=t(252);const c=e=>((0,o.dD)("data-v-44fd98fd"),e=e(),(0,o.Cn)(),e),l=c((()=>(0,o._)("ul",null,[(0,o._)("li",null,"Kategorien"),(0,o._)("li",null,"Sammlungen"),(0,o._)("li",null,"Zeitaufwand"),(0,o._)("li",null,"Alle Rezepte")],-1))),s=[l];function u(e,n){return(0,o.wg)(),(0,o.iD)("nav",null,s)}var a=t(744);const f={},p=(0,a.Z)(f,[["render",u],["__scopeId","data-v-44fd98fd"]]);var d=p,g=t(907),v=(0,o._)("h1",null,[(0,o.Uk)("recipe"),(0,o._)("span",{class:"heading"},"box")],-1),h=(0,o._)("footer",null,[(0,o._)("div",{class:"credits"},"© Marianne Westenthanner 2022")],-1),_=(0,o.aZ)({__name:"App",setup:function(e){var n=this,t=(0,g.oR)();return(0,o.wF)((function(){return(0,r.mG)(n,void 0,void 0,(function(){var e,n;return(0,r.Jh)(this,(function(i){switch(i.label){case 0:return[4,fetch("https://notion-cooks.netlify.app/.netlify/functions/api/recipes")];case 1:return e=i.sent(),[4,e.json()];case 2:return n=i.sent(),t.commit("setRecipeList",n),[2]}}))}))})),function(e,n){var t=(0,o.up)("router-link"),i=(0,o.up)("router-view");return(0,o.wg)(),(0,o.iD)(o.HY,null,[(0,o._)("header",null,[(0,o.Wm)(t,{to:"/"},{default:(0,o.w5)((function(){return[v]})),_:1}),(0,o.Wm)(d)]),(0,o._)("main",null,[(0,o.Wm)(i)]),h],64)}}});const m=_;var w=m,b=t(205);(0,b.z)("".concat("/","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(e){console.error("Error during service worker registration:",e)}});var y=(0,g.MT)({state:{recipeList:[{id:"",title:"",desc:"",img:"",category:"",slug:"",tags:[""],time:"",collections:[]}],categoryList:["Brotzeit","Grillen","Pasta","Reis","Kartoffeln"]},getters:{getRecipeList:function(e){return e.recipeList},getRecipeContent:function(e){return function(n){return e.recipeList.find((function(e){return e.slug===n}))}},getCategories:function(e){return e.categoryList}},mutations:{setRecipeList:function(e,n){e.recipeList=n},setRecipeContent:function(e,n){var t=e.recipeList.findIndex((function(e){return e.slug===n.slug}));e.recipeList[t]=n}},actions:{},modules:{}}),k=t(119),D=t(262),z=t(577),R={class:"panel"},x={class:"image"},H=["src","alt"],L={class:"content"},S={class:"tags"},j=(0,o.aZ)({__name:"RecipePanel",props:["recipe"],setup:function(e){var n=e;return function(e,t){var i=(0,o.up)("router-link");return(0,o.wg)(),(0,o.j4)(i,{to:"/recipe/"+n.recipe.slug},{default:(0,o.w5)((function(){return[(0,o._)("div",R,[(0,o._)("div",x,[(0,o._)("img",{src:n.recipe.img,alt:n.recipe.title},null,8,H)]),(0,o._)("div",L,[(0,o._)("h3",null,(0,z.zw)(n.recipe.title),1),(0,o._)("div",S,[((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(n.recipe.tags,(function(e){return(0,o.wg)(),(0,o.iD)("span",{class:"tag",key:e},(0,z.zw)(e),1)})),128))])])])]})),_:1},8,["to"])}}});const U=(0,a.Z)(j,[["__scopeId","data-v-d2c40366"]]);var O=U,Z={class:"collection"},M={class:"image"},Y=["src"],B={class:"content"},C=(0,o.aZ)({__name:"CollectionPanel",props:["collection"],setup:function(e){var n=e;return function(e,t){return(0,o.wg)(),(0,o.iD)("div",Z,[(0,o._)("div",M,[(0,o._)("img",{src:n.collection.img,alt:""},null,8,Y)]),(0,o._)("div",B,[(0,o._)("h2",null,(0,z.zw)(n.collection.name),1),(0,o._)("h3",null,(0,z.zw)(n.collection.desc),1)])])}}});const F=(0,a.Z)(C,[["__scopeId","data-v-ddc856ba"]]);var K=F,A={class:"collections"},G={class:"recipes"},W=(0,o._)("h2",null,"Neueste Rezepte",-1),P={class:"panels"},I=(0,o.aZ)({__name:"MainView",setup:function(e){var n=(0,g.oR)(),t=(0,D.Fl)((function(){return n.getters.getRecipeList})),i=[{name:"Fantastic BBQ",desc:"Grillrezepte für den ganzen Sommer",img:"https://images.unsplash.com/photo-1544470554-71345f04eba0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"},{name:"Schnelle Sommergerichte",desc:"Unter 15 Minuten und perfekt für heiße Tage",img:"https://images.unsplash.com/photo-1496318447583-f524534e9ce1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1534&q=80"}];return function(e,n){return(0,o.wg)(),(0,o.iD)(o.HY,null,[(0,o._)("div",A,[((0,o.wg)(),(0,o.iD)(o.HY,null,(0,o.Ko)(i,(function(e){return(0,o.Wm)(K,{key:e.name,collection:e},null,8,["collection"])})),64))]),(0,o._)("div",G,[W,(0,o._)("div",P,[((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)((0,D.SU)(t),(function(e){return(0,o.wg)(),(0,o.j4)(O,{key:e.slug,recipe:e},null,8,["recipe"])})),128))])])],64)}}});const N=I;var V=N,q={class:"recipes"},T=(0,o._)("h2",null,"Neueste Rezepte",-1),E={class:"panels"},J=(0,o.aZ)({__name:"RecipeListView",setup:function(e){var n=(0,g.oR)(),t=(0,D.Fl)((function(){return n.getters.getRecipeList}));return function(e,n){return(0,o.wg)(),(0,o.iD)("div",q,[T,(0,o._)("div",E,[((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)((0,D.SU)(t),(function(e){return(0,o.wg)(),(0,o.j4)(O,{key:e.slug,recipe:e},null,8,["recipe"])})),128))])])}}});const Q=J;var X=Q,$={class:"recipe"},ee={class:"left"},ne=["src","alt"],te={class:"right"},ie={class:"title-block"},re={class:"ingredients"},oe={class:"prep"},ce=(0,o.aZ)({__name:"RecipeView",setup:function(e){var n=(0,g.oR)(),t=(0,k.yj)(),i=t.params.slug,r=(0,D.Fl)((function(){return n.getters.getRecipeContent(i)}));return function(e,n){return(0,o.wg)(),(0,o.iD)("div",$,[(0,o._)("div",ee,[(0,o._)("img",{src:(0,D.SU)(r).img,alt:(0,D.SU)(r).title},null,8,ne)]),(0,o._)("div",te,[(0,o._)("div",ie,[(0,o._)("h2",null,(0,z.zw)((0,D.SU)(r).title),1),(0,o._)("h4",null,(0,z.zw)((0,D.SU)(r).category)+" | "+(0,z.zw)((0,D.SU)(r).time),1)]),(0,o._)("div",re,[(0,o._)("h3",null,(0,z.zw)((0,D.SU)(r).content.ingredientsHeading),1),(0,o._)("table",null,[((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)((0,D.SU)(r).content.ingredientsList,(function(e){return(0,o.wg)(),(0,o.iD)("tr",{key:e.ingredient},[(0,o._)("td",null,(0,z.zw)(e.quantity),1),(0,o._)("td",null,(0,z.zw)(e.ingredient),1)])})),128))])]),(0,o._)("div",oe,[(0,o._)("h3",null,(0,z.zw)((0,D.SU)(r).content.prepHeading),1),(0,o._)("ol",null,[((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)((0,D.SU)(r).content.prepList,(function(e){return(0,o.wg)(),(0,o.iD)("li",{key:e},(0,z.zw)(e),1)})),128))])])])])}}});const le=(0,a.Z)(ce,[["__scopeId","data-v-1cdfe0d5"]]);var se=le,ue=[{path:"",name:"home",component:V},{path:"/recipe/:slug",name:"recipe",component:se,props:!0},{path:"/recipe/",name:"recipelist",component:X}],ae=(0,k.p7)({history:(0,k.PO)(),routes:ue,scrollBehavior:function(e){return e.hash?{el:e.hash,top:50,behavior:"smooth"}:{top:0,behavior:"smooth"}}}),fe=ae;(0,i.ri)(w).use(y).use(fe).mount("#app")}},n={};function t(i){var r=n[i];if(void 0!==r)return r.exports;var o=n[i]={exports:{}};return e[i](o,o.exports,t),o.exports}t.m=e,function(){var e=[];t.O=function(n,i,r,o){if(!i){var c=1/0;for(a=0;a<e.length;a++){i=e[a][0],r=e[a][1],o=e[a][2];for(var l=!0,s=0;s<i.length;s++)(!1&o||c>=o)&&Object.keys(t.O).every((function(e){return t.O[e](i[s])}))?i.splice(s--,1):(l=!1,o<c&&(c=o));if(l){e.splice(a--,1);var u=r();void 0!==u&&(n=u)}}return n}o=o||0;for(var a=e.length;a>0&&e[a-1][2]>o;a--)e[a]=e[a-1];e[a]=[i,r,o]}}(),function(){t.d=function(e,n){for(var i in n)t.o(n,i)&&!t.o(e,i)&&Object.defineProperty(e,i,{enumerable:!0,get:n[i]})}}(),function(){t.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){t.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)}}(),function(){var e={143:0};t.O.j=function(n){return 0===e[n]};var n=function(n,i){var r,o,c=i[0],l=i[1],s=i[2],u=0;if(c.some((function(n){return 0!==e[n]}))){for(r in l)t.o(l,r)&&(t.m[r]=l[r]);if(s)var a=s(t)}for(n&&n(i);u<c.length;u++)o=c[u],t.o(e,o)&&e[o]&&e[o][0](),e[o]=0;return t.O(a)},i=self["webpackChunkfrontend"]=self["webpackChunkfrontend"]||[];i.forEach(n.bind(null,0)),i.push=n.bind(null,i.push.bind(i))}();var i=t.O(void 0,[998],(function(){return t(874)}));i=t.O(i)})();
//# sourceMappingURL=app.1d60fcb6.js.map