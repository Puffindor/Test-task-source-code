(function(){"use strict";var t={9872:function(t,e,n){var o=n(9242),i=n(3396);const r={class:"container"},s={key:0},c={key:1};function d(t,e,n,o,d,l){const a=(0,i.up)("inputForm"),u=(0,i.up)("TaskList"),h=(0,i.up)("iconLoading");return(0,i.wg)(),(0,i.iD)("div",r,[(0,i.Wm)(a,{onCreate:l.create},null,8,["onCreate"]),d.loaded?((0,i.wg)(),(0,i.iD)("div",s,[(0,i.Wm)(u,{items:d.items,onDel:l.del,onDone:l.done},null,8,["items","onDel","onDone"])])):(0,i.kq)("",!0),d.loaded?(0,i.kq)("",!0):((0,i.wg)(),(0,i.iD)("div",c,[(0,i.Wm)(h)]))])}n(541);const l=t=>((0,i.dD)("data-v-40840b42"),t=t(),(0,i.Cn)(),t),a={xmlns:"http://www.w3.org/2000/svg",height:"48",width:"48"},u=l((()=>(0,i._)("path",{d:"M8.35 40v-3h6.5l-.75-.6q-3.2-2.55-4.65-5.55-1.45-3-1.45-6.7 0-5.3 3.125-9.525Q14.25 10.4 19.35 8.8v3.1q-3.75 1.45-6.05 4.825T11 24.15q0 3.15 1.175 5.475 1.175 2.325 3.175 4.025l1.5 1.05v-6.2h3V40Zm20.35-.75V36.1q3.8-1.45 6.05-4.825T37 23.85q0-2.4-1.175-4.875T32.75 14.6l-1.45-1.3v6.2h-3V8h11.5v3h-6.55l.75.7q3 2.8 4.5 6t1.5 6.15q0 5.3-3.1 9.55-3.1 4.25-8.2 5.85Z"},null,-1))),h=[u];function v(t,e,n,o,r,s){return(0,i.wg)(),(0,i.iD)("svg",a,h)}var p={},m=n(89);const f=(0,m.Z)(p,[["render",v],["__scopeId","data-v-40840b42"]]);var g=f;const w={class:"form"},_=["value"];function D(t,e,n,o,r,s){const c=(0,i.up)("Switch"),d=(0,i.up)("IconAdd");return(0,i.wg)(),(0,i.iD)("div",w,[(0,i._)("input",{placeholder:"Enter title",value:r.title,onInput:e[0]||(e[0]=t=>r.title=t.target.value)},null,40,_),(0,i.Wm)(c,{onOn:s.on},null,8,["onOn"]),(0,i._)("div",{onClick:e[1]||(e[1]=(...t)=>s.create&&s.create(...t))},[(0,i.Wm)(d)])])}const k={class:"switch"};function Z(t,e,n,o,r,s){return(0,i.wg)(),(0,i.iD)("div",k,[(0,i._)("div",{class:"curcle",onClick:e[0]||(e[0]=(...t)=>s.toggle&&s.toggle(...t))})])}const b={emits:["on"],data(){return{on:!1}},methods:{toggle(){this.on=!this.on,this.$emit("on")}},computed:{color(){return this.on?"#30c13f":"#B41A1A"},pos(){return this.on?"0px":"40px"}}},y=()=>{(0,o.sj)((t=>({f057e8de:t.color,"5673c202":t.pos})))},C=b.setup;b.setup=C?(t,e)=>(y(),C(t,e)):y;var I=b;const O=(0,m.Z)(I,[["render",Z],["__scopeId","data-v-c1490438"]]);var V=O;const q=t=>((0,i.dD)("data-v-3ef3d91e"),t=t(),(0,i.Cn)(),t),j={xmlns:"http://www.w3.org/2000/svg",height:"48",width:"48"},x=q((()=>(0,i._)("path",{d:"M22.5 38V25.5H10v-3h12.5V10h3v12.5H38v3H25.5V38Z",fill:"#30C13F"},null,-1))),T=[x];function W(t,e,n,o,r,s){return(0,i.wg)(),(0,i.iD)("svg",j,T)}var F={};const A=(0,m.Z)(F,[["render",W],["__scopeId","data-v-3ef3d91e"]]);var H=A,M={components:{Switch:V,IconAdd:H},emits:["create"],methods:{on(){this.complited=!this.complited},create(){if(this.title){const t={id:Math.random(),title:this.title,complited:this.complited};this.$emit("create",t),this.title=""}else alert("Enter the title")}},data(){return{complited:!1,title:""}}};const $=(0,m.Z)(M,[["render",D],["__scopeId","data-v-43c9cdc6"]]);var E=$;const L={class:"con"};function B(t,e,n,o,r,s){const c=(0,i.up)("TaskItem");return(0,i.wg)(),(0,i.iD)("div",L,[((0,i.wg)(!0),(0,i.iD)(i.HY,null,(0,i.Ko)(n.items,(t=>((0,i.wg)(),(0,i.iD)("div",{key:t.id},[(0,i.Wm)(c,{id:t.id,title:t.title,complited:t.complited,onDel:s.del,onDone:s.done},null,8,["id","title","complited","onDel","onDone"])])))),128))])}var P=n(7139);const S={class:"item"};function z(t,e,n,o,r,s){const c=(0,i.up)("icon-done"),d=(0,i.up)("icon-delete");return(0,i.wg)(),(0,i.iD)("div",S,[(0,i._)("div",null,[(0,i._)("div",null,(0,P.zw)(n.title),1),(0,i._)("span",null,[(0,i._)("div",{onClick:e[0]||(e[0]=(...t)=>s.done&&s.done(...t))},[(0,i.Wm)(c)]),(0,i._)("div",{onClick:e[1]||(e[1]=(...t)=>s.del&&s.del(...t))},[(0,i.Wm)(d)])])])])}const K=t=>((0,i.dD)("data-v-cf52a698"),t=t(),(0,i.Cn)(),t),Q=K((()=>(0,i._)("svg",{xmlns:"http://www.w3.org/2000/svg",height:"48",width:"48"},[(0,i._)("path",{d:"M13.05 42q-1.25 0-2.125-.875T10.05 39V10.5H8v-3h9.4V6h13.2v1.5H40v3h-2.05V39q0 1.2-.9 2.1-.9.9-2.1.9Zm21.9-31.5h-21.9V39h21.9Zm-16.6 24.2h3V14.75h-3Zm8.3 0h3V14.75h-3Zm-13.6-24.2V39Z",fill:"#B41A1A"})],-1))),Y=[Q];function G(t,e,n,o,r,s){return(0,i.wg)(),(0,i.iD)("div",null,Y)}var J={};const N=(0,m.Z)(J,[["render",G],["__scopeId","data-v-cf52a698"]]);var R=N;const U=t=>((0,i.dD)("data-v-af2154ca"),t=t(),(0,i.Cn)(),t),X=U((()=>(0,i._)("svg",{xmlns:"http://www.w3.org/2000/svg",height:"48",width:"48"},[(0,i._)("path",{d:"M18.9 35.7 7.7 24.5l2.15-2.15 9.05 9.05 19.2-19.2 2.15 2.15Z",fill:"#30C13F"})],-1))),tt=[X];function et(t,e,n,o,r,s){return(0,i.wg)(),(0,i.iD)("div",null,tt)}var nt={};const ot=(0,m.Z)(nt,[["render",et],["__scopeId","data-v-af2154ca"]]);var it=ot;const rt={components:{iconDelete:R,iconDone:it},props:["id","title","complited"],emits:["done","del"],computed:{color(){return this.complited?"#3F763E":"#666666"}},methods:{done(){this.$emit("done",this.id)},del(){this.$emit("del",this.id)}}},st=()=>{(0,o.sj)((t=>({84826716:t.color})))},ct=rt.setup;rt.setup=ct?(t,e)=>(st(),ct(t,e)):st;var dt=rt;const lt=(0,m.Z)(dt,[["render",z],["__scopeId","data-v-362a1942"]]);var at=lt,ut={props:["items"],emits:["done","del"],components:{TaskItem:at},methods:{del(t){this.$emit("del",t)},done(t){this.$emit("done",t)}}};const ht=(0,m.Z)(ut,[["render",B],["__scopeId","data-v-68b295e8"]]);var vt=ht,pt={components:{TaskList:vt,inputForm:E,iconLoading:g},methods:{async getitems(){try{const t=await fetch("https://jsonplaceholder.typicode.com/todos/").then((t=>t.json()));this.items=t,this.loaded=!0}catch{alert("Faild to load items")}},del(t){this.items=this.items.filter((e=>e.id!==t))},done(t){this.items.forEach((e=>{e.id===t&&(e.complited=!e.complited)}))},create(t){this.items.unshift(t)}},mounted(){this.getitems()},data(){return{loaded:!1,items:[]}}};const mt=(0,m.Z)(pt,[["render",d]]);var ft=mt;(0,o.ri)(ft).mount("#app")}},e={};function n(o){var i=e[o];if(void 0!==i)return i.exports;var r=e[o]={exports:{}};return t[o](r,r.exports,n),r.exports}n.m=t,function(){var t=[];n.O=function(e,o,i,r){if(!o){var s=1/0;for(a=0;a<t.length;a++){o=t[a][0],i=t[a][1],r=t[a][2];for(var c=!0,d=0;d<o.length;d++)(!1&r||s>=r)&&Object.keys(n.O).every((function(t){return n.O[t](o[d])}))?o.splice(d--,1):(c=!1,r<s&&(s=r));if(c){t.splice(a--,1);var l=i();void 0!==l&&(e=l)}}return e}r=r||0;for(var a=t.length;a>0&&t[a-1][2]>r;a--)t[a]=t[a-1];t[a]=[o,i,r]}}(),function(){n.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return n.d(e,{a:e}),e}}(),function(){n.d=function(t,e){for(var o in e)n.o(e,o)&&!n.o(t,o)&&Object.defineProperty(t,o,{enumerable:!0,get:e[o]})}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)}}(),function(){var t={143:0};n.O.j=function(e){return 0===t[e]};var e=function(e,o){var i,r,s=o[0],c=o[1],d=o[2],l=0;if(s.some((function(e){return 0!==t[e]}))){for(i in c)n.o(c,i)&&(n.m[i]=c[i]);if(d)var a=d(n)}for(e&&e(o);l<s.length;l++)r=s[l],n.o(t,r)&&t[r]&&t[r][0](),t[r]=0;return n.O(a)},o=self["webpackChunktest_task"]=self["webpackChunktest_task"]||[];o.forEach(e.bind(null,0)),o.push=e.bind(null,o.push.bind(o))}();var o=n.O(void 0,[998],(function(){return n(9872)}));o=n.O(o)})();
//# sourceMappingURL=app.7aca88ea.js.map