webpackJsonp([2],{"7AJS":function(t,e){},K8F0:function(t,e){},Oc9S:function(t,e){},lWV2:function(t,e){},pCPM:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=i("Dd8w"),a=i.n(s),n={name:"fade",props:{title:String},data:function(){return{showHeader:!1,opacityStyle:{opacity:1}}},methods:{handleScroll:function(){var t=document.documentElement.scrollTop;t>60?(this.showHeader=!0,this.opacityStyle.opacity=t/200>1?1:t/200):this.showHeader=!1}},activated:function(){window.addEventListener("scroll",this.handleScroll)},deactivated:function(){window.removeEventListener("scroll",this.handleScroll)}},c={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("div",{directives:[{name:"show",rawName:"v-show",value:this.showHeader,expression:"showHeader"}],staticClass:"header-fix-back",style:this.opacityStyle},[e("router-link",{attrs:{to:"/"}},[e("div",{staticClass:"header-left"},[e("div",{staticClass:"iconfont"},[this._v("")])])]),this._v(" "),e("div",{staticClass:"selectCity"},[this._v(this._s(this.title))])],1)])},staticRenderFns:[]};var o=i("VU/8")(n,c,!1,function(t){i("lWV2")},"data-v-3931c7a1",null).exports,r=i("mtWM"),l=i.n(r),d=i("NYxO"),u=i("87cn"),v=i("Zos3"),m={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("ul",{staticClass:"tab border-bottom"},[this._t("default")],2)])},staticRenderFns:[]};var f=i("VU/8")({name:"",data:function(){return{}},methods:{},mounted:function(){}},m,!1,function(t){i("Oc9S")},"data-v-11bd4486",null).exports,h={name:"",props:{tabtxt:Array},data:function(){return{currentTab:0}},methods:{itemClick:function(t){this.currentTab=t,this.$emit("scrollToView",t)}},mounted:function(){}},_={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("ul",{staticClass:"tab border-bottom"},t._l(t.tabtxt,function(e,s){return i("li",{key:s,class:{"tab-item-active":s==t.currentTab},attrs:{"data-index":s},on:{click:function(e){return t.itemClick(s)}}},[t._v("\n  "+t._s(e)+"\n  ")])}),0)},staticRenderFns:[]};var b=i("VU/8")(h,_,!1,function(t){i("7AJS")},"data-v-e948b7a8",null).exports,C=i("+4j8"),p=i("+CPH"),g={components:{Fade:o,BackInCircle:u.a,TabBar:v.a,TabBarItem:C.a,Tab:f,TabItem:b,CateTitle:p.a},name:"HotList",data:function(){return{hotlist:""}},computed:a()({},Object(d.c)({city:"city"})),methods:{getData:function(){l.a.get(this.baseURL+"/hotlist.json?city="+this.city).then(this.getInfoSucc)},getInfoSucc:function(t){if((t=t.data).ret&&t.data){var e=t.data;this.hotlist=e}},scrollToView:function(t){document.querySelectorAll(".tab-content")[t].scrollIntoView()}},created:function(){this.getData()},mounted:function(){}},y={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("fade",{attrs:{title:"一周最热"}}),t._v(" "),i("div",{staticClass:"title-img"},[i("back-in-circle"),t._v(" "),i("img",{attrs:{src:"http://img1.qunarzz.com/sight/p0/1606/5d/5d50a982b5b14fff90.water.jpg_375x170_8a953cf6.jpg"}}),t._v(" "),i("div",{staticClass:"mask"}),t._v(" "),i("div",{staticClass:"mask-content"},[i("div",[t._v("--"+t._s(this.city)+"--")]),t._v(" "),i("div",{staticClass:"font-level-1"},[t._v("本周热门榜单")])])],1),t._v(" "),i("tab-item",{attrs:{tabtxt:["TOP景点","TOP路线"]},on:{scrollToView:t.scrollToView}}),t._v(" "),i("div",{staticClass:"tab-content top-addr",attrs:{id:"addr"}},[i("ul",t._l(t.hotlist.addresslist,function(e){return i("router-link",{key:e.id,staticClass:"item border-bottom",attrs:{tag:"li",to:"/detail/"+e.id}},[i("div",{staticClass:"item-img"},[i("img",{staticClass:"img-content",attrs:{src:e.imgUrl}})]),t._v(" "),i("div",{staticClass:"item-info"},[i("p",{staticClass:"item-info-title"},[t._v(t._s(e.title))]),t._v(" "),i("p",{staticClass:"item-info-desc"},[t._v(t._s(e.desc))]),t._v(" "),i("button",{staticClass:"item-button"},[t._v("查看详情")])])])}),1)]),t._v(" "),i("div",{staticClass:"tab-content top-route",attrs:{id:"route"}},[i("cate-title",{attrs:{title:"路线",bgcolor:"#eee"}}),t._v(" "),i("ul",t._l(t.hotlist.routelist,function(e){return i("router-link",{key:e.id,staticClass:"item border-bottom",attrs:{tag:"li",to:"/detail/"+e.id}},[i("div",{staticClass:"item-img"},[i("img",{staticClass:"img-content",attrs:{src:e.imgUrl}})]),t._v(" "),i("div",{staticClass:"item-info"},[i("p",{staticClass:"item-info-title"},[t._v(t._s(e.title))]),t._v(" "),i("p",{staticClass:"item-info-desc"},[t._v(t._s(e.desc))]),t._v(" "),i("button",{staticClass:"item-button"},[t._v("查看详情")])])])}),1)],1)],1)},staticRenderFns:[]};var w=i("VU/8")(g,y,!1,function(t){i("K8F0")},"data-v-dcfd0ebe",null);e.default=w.exports}});
//# sourceMappingURL=2.e2b876bf405f81253573.js.map