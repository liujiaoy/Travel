webpackJsonp([2],{BsWG:function(t,e){},Cdx3:function(t,e,n){var i=n("sB3e"),o=n("lktj");n("uqUo")("keys",function(){return function(t){return o(i(t))}})},Erzt:function(t,e,n){t.exports=n.p+"static/img/1.642841c.jpg"},HkIW:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=n("EdT2"),o=n("0RrJ");var s=n("fZjL"),r=n.n(s),a={name:"Waterfall",props:{col:Number,mainMenuList:Array},data:function(){return{dataList:{},scrolltime:null}},computed:{colwidth:function(){return{width:100/r()(this.dataList).length+"%",color:"red"}}},created:function(){this.initdataList()},mounted:function(){window.addEventListener("scroll",this.listenScroll,!0)},methods:{mountMenu:function(t){var e=this,n=this.mainMenuList,i=t||0,o=this.selectCol(),s=this;n.length>i&&(this.dataList[o].push(this.mainMenuList[i]),this.$nextTick(function(){var t=new Image;t.src=e.mainMenuList[i].imgUrl,t.onload=function(){var e=t.height/t.width,n=s.$refs.img[i];n.height=n.width*e,s.lazyloadimg(i),s.mountMenu(i+1)}}))},selectCol:function(){for(var t=this.$refs.col,e=0,n=t[e].offsetHeight,i=0;i<this.col;i++){var o=t[i].offsetHeight;n>=o&&(n=o,e=i)}return e},lazyloadimg:function(t){window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop;var e=document.documentElement.clientHeight,n=this.$refs.img[t];if(void 0!=n){var i=n.getBoundingClientRect(),o=i.top,s=i.bottom;n.dataset.src&&(o>0&&o<e||s>0&&s<e)&&(n.src=n.dataset.src,n.dataset.src="")}},initdataList:function(){for(var t=0;t<this.col;t++)this.$set(this.dataList,t,[])},listenScroll:function(){clearTimeout(this.scrolltime),this.scrolltime=setTimeout(this.handleScroll,200)},handleScroll:function(){for(var t=0;t<this.mainMenuList.length;)this.lazyloadimg(t),t++}}},c={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("div",{ref:"box",staticClass:"box"},t._l(t.dataList,function(e,o,s){return i("div",{key:s,ref:"col",refInFor:!0,staticClass:"col",style:t.colwidth},t._l(e,function(e){return i("div",{key:e.id,staticClass:"item border-right border-bottom"},[i("img",{ref:"img",refInFor:!0,attrs:{src:n("Erzt"),"data-src":e.imgUrl}}),t._v(" "),i("div",{staticClass:"title"},[t._v(t._s(e.title))]),t._v(" "),t._t("default")],2)}),0)}),0)])},staticRenderFns:[]};var l=n("VU/8")(a,c,!1,function(t){n("jTvM")},"data-v-1ea1b2f8",null).exports,u={name:"Profile",components:{NavBar:i.a,Waterfall:l},data:function(){return{mainMenuList:[],col:5}},mounted:function(){var t=this;Object(o.a)({url:"/profile/goods.json"}).then(function(e){t.mainMenuList=e.data,t.$nextTick(function(){t.$refs.waterfall.mountMenu()})})},methods:{}},d={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("nav-bar",[e("div",{attrs:{slot:"center"},slot:"center"},[this._v("照片墙")])]),this._v(" "),e("waterfall",{ref:"waterfall",attrs:{mainMenuList:this.mainMenuList,col:this.col}})],1)},staticRenderFns:[]};var f=n("VU/8")(u,d,!1,function(t){n("BsWG")},"data-v-404cc9e4",null);e.default=f.exports},fZjL:function(t,e,n){t.exports={default:n("jFbC"),__esModule:!0}},jFbC:function(t,e,n){n("Cdx3"),t.exports=n("FeBl").Object.keys},jTvM:function(t,e){},uqUo:function(t,e,n){var i=n("kM2E"),o=n("FeBl"),s=n("S82l");t.exports=function(t,e){var n=(o.Object||{})[t]||Object[t],r={};r[t]=e(n),i(i.S+i.F*s(function(){n(1)}),"Object",r)}}});
//# sourceMappingURL=2.1dd4d0e72a3eddbc3bf4.js.map