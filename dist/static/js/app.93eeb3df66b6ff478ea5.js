webpackJsonp([5],{"+4j8":function(t,e,i){"use strict";var s={name:"TabBarItem",props:{path:String},data:function(){return{}},computed:{isActive:function(){return this.$route.path===this.path}},methods:{itemClick:function(){this.$router.replace(this.path)}}},n={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"tab-bar-item",class:{active:this.isActive},on:{click:this.itemClick}},[e("div",{staticClass:"item-icon"},[this._t("item-icon")],2),this._v(" "),this._t("item-text")],2)},staticRenderFns:[]};var a=i("VU/8")(s,n,!1,function(t){i("25n9")},"data-v-43d0bffa",null);e.a=a.exports},"+CPH":function(t,e,i){"use strict";var s={name:"cateTitle",props:{title:String,bgcolor:{type:String,default:"#fff"}},data:function(){return{}},computed:{},methods:{},mounted:function(){}},n={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"cate-tile",style:{backgroundColor:this.bgcolor}},[e("div",{staticClass:"left"},[this._t("icon"),this._v("\n    "+this._s(this.title)+"\n    ")],2),this._v(" "),e("div",{staticClass:"right"},[this._t("right")],2)])},staticRenderFns:[]};var a=i("VU/8")(s,n,!1,function(t){i("B0Oh")},"data-v-f9c302be",null);e.a=a.exports},"0RrJ":function(t,e,i){"use strict";e.a=function(t){var e=a.a.prototype.baseURL,i=n.a.create({baseURL:e,timeout:5e5});return i.interceptors.request.use(function(t){return t},function(t){console.log(t)}),i.interceptors.response.use(function(t){return t.data},function(t){console.log(t)}),i(t)};var s=i("mtWM"),n=i.n(s),a=i("7+uW")},"25n9":function(t,e){},"2DGz":function(t,e){},"320f":function(t,e){},"87cn":function(t,e,i){"use strict";var s={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("div",{staticClass:"header-left",on:{click:this.backHistory}},[e("div",{staticClass:"iconfont"},[this._v("")])])])},staticRenderFns:[]};var n=i("VU/8")({name:"",data:function(){return{}},methods:{backHistory:function(){this.$router.go(-1)}},mounted:function(){}},s,!1,function(t){i("iD2c")},"data-v-6b6616a0",null);e.a=n.exports},"8bRF":function(t,e){},"91ha":function(t,e){},"9n10":function(t,e){},B0Oh:function(t,e){},DPwy:function(t,e){},EdT2:function(t,e,i){"use strict";var s={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"nav-bar"},[e("div",{staticClass:"left"},[this._t("left")],2),this._v(" "),e("div",{staticClass:"center"},[this._t("center")],2),this._v(" "),e("div",{staticClass:"right"},[this._t("right")],2)])},staticRenderFns:[]};var n=i("VU/8")({name:"NavBar",data:function(){return{}},methods:{},mounted:function(){}},s,!1,function(t){i("yqrg")},"data-v-376fd718",null);e.a=n.exports},KXDd:function(t,e){},LR0t:function(t,e){},M6Sr:function(t,e){},"N+zL":function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s={render:function(){var t=this.$createElement;return(this._self._c||t)("div",{class:this.slideClass},[this._t("default")],2)},staticRenderFns:[]},n=i("VU/8")({name:"swiper-slide",data:function(){return{slideClass:"swiper-slide"}},ready:function(){this.update()},mounted:function(){this.update(),this.$parent.options.slideClass&&(this.slideClass=this.$parent.options.slideClass)},updated:function(){this.update()},attached:function(){this.update()},methods:{update:function(){this.$parent&&this.$parent.swiper&&this.$parent.swiper.update&&(this.$parent.swiper.update(!0),this.$parent.options.loop&&this.$parent.swiper.reLoop())}}},s,!1,null,null,null);e.default=n.exports},NHnr:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=i("7+uW"),n=i("Zos3"),a=i("+4j8"),r={name:"MainTabBar",components:{TabBar:n.a,TabBarItem:a.a}},c={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("tab-bar",[i("tab-bar-item",{attrs:{path:"/"}},[i("i",{staticClass:"iconfont iconshouye",attrs:{slot:"item-icon"},slot:"item-icon"}),t._v(" "),i("div",{attrs:{slot:"item-text"},slot:"item-text"},[t._v("首页")])]),t._v(" "),i("tab-bar-item",{attrs:{path:"/orders"}},[i("i",{staticClass:"iconfont icondingdan",attrs:{slot:"item-icon"},slot:"item-icon"}),t._v(" "),i("div",{attrs:{slot:"item-text"},slot:"item-text"},[t._v("订单")])]),t._v(" "),i("tab-bar-item",{attrs:{path:"/raiders"}},[i("i",{staticClass:"iconfont icongonglve",attrs:{slot:"item-icon"},slot:"item-icon"}),t._v(" "),i("div",{attrs:{slot:"item-text"},slot:"item-text"},[t._v("攻略社区")])]),t._v(" "),i("tab-bar-item",{attrs:{path:"/profile"}},[i("i",{staticClass:"iconfont iconwode",attrs:{slot:"item-icon"},slot:"item-icon"}),t._v(" "),i("div",{attrs:{slot:"item-text"},slot:"item-text"},[t._v("我的")])])],1)},staticRenderFns:[]};var o={name:"App",components:{MainTabBar:i("VU/8")(r,c,!1,function(t){i("o4o/")},null,null).exports},mounted:function(){},methods:{}},l={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"app"}},[e("keep-alive",[e("router-view")],1),this._v(" "),e("main-tab-bar")],1)},staticRenderFns:[]};var d=i("VU/8")(o,l,!1,function(t){i("qiDJ")},"data-v-116ebe91",null).exports,u=i("/ocq"),m=i("Dd8w"),h=i.n(m),v=i("mtWM"),p=i.n(v),f=i("GQaK"),_=i("NYxO"),g={name:"CitySearch",data:function(){return{keyword:"",list:[],timer:null}},computed:{hasNoData:function(){return!this.list.length}},watch:{keyword:function(){var t=this;this.timer&&clearTimeout(this.timer),this.keyword?this.timer=setTimeout(function(){var e=[];for(var i in t.cities)t.cities[i].forEach(function(i){(i.spell.indexOf(t.keyword)>-1||i.name.indexOf(t.keyword)>-1)&&e.push(i)});t.list=e},100):this.list=[]}},methods:h()({handleCityClick:function(t){this.cchangeCity(t),this.keyword=""},getCityInfo:function(){p.a.get(this.baseURL+"/city.json").then(this.getCityInfoSucc)},getCityInfoSucc:function(t){if((t=t.data).ret&&t.data){var e=t.data;this.cities=e.cities}}},Object(_.b)(["cchangeCity"])),created:function(){this.getCityInfo()},mounted:function(){this.scroll=new f.a(this.$refs.search,{click:!0})}},C={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("div",{staticClass:"search"},[i("input",{directives:[{name:"model",rawName:"v-model",value:t.keyword,expression:"keyword"}],staticClass:"search-input",attrs:{type:"text",placeholder:"输入城市名/拼音"},domProps:{value:t.keyword},on:{input:function(e){e.target.composing||(t.keyword=e.target.value)}}}),t._v(" "),t._t("default")],2),t._v(" "),i("div",{directives:[{name:"show",rawName:"v-show",value:t.keyword,expression:"keyword"}],ref:"search",staticClass:"search-content"},[i("ul",[t._l(t.list,function(e){return i("li",{key:e.id,staticClass:"search-result border-bottom",on:{click:function(i){return t.handleCityClick(e.name)}}},[t._v(t._s(e.name)+"\n      ")])}),t._v(" "),i("li",{directives:[{name:"show",rawName:"v-show",value:t.hasNoData,expression:"hasNoData"}],staticClass:"search-result border-bottom"},[t._v("没找到")])],2)])])},staticRenderFns:[]};var y=i("VU/8")(g,C,!1,function(t){i("bLiv")},"data-v-9e720446",null).exports,b={name:"HomeHeader",components:{CitySearch:y},computed:{city:function(){return this.$store.state.city}}},w={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"header"},[e("city-search",{staticClass:"header-input"},[e("router-link",{attrs:{to:"/city"}},[e("div",{staticClass:"header-right"},[this._v("\n        "+this._s(this.city)+"\n        "),e("span",{staticClass:"iconfont arrow-icon"},[this._v("")])])])],1),this._v(" "),e("div",{staticClass:"fade"})],1)},staticRenderFns:[]};var k=i("VU/8")(b,w,!1,function(t){i("PnEi")},"data-v-1dbc3353",null).exports,x={name:"HomeSwiper",props:{swiperList:Array},data:function(){return{swiperOption:{pagination:".swiper-pagination",loop:!0,autoplay:3e3}}}},L={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"swiper"},[this.swiperList.length?e("swiper",{staticClass:"swiper-content",attrs:{options:this.swiperOption}},[this._l(this.swiperList,function(t){return e("swiper-slide",{key:t.id},[e("img",{staticClass:"swiper-img",attrs:{src:t.imgUrl}})])}),this._v(" "),e("div",{staticClass:"swiper-pagination",attrs:{slot:"pagination"},slot:"pagination"})],2):this._e()],1)},staticRenderFns:[]};var j=i("VU/8")(x,L,!1,function(t){i("jUPm")},"data-v-37fea3c4",null).exports,$={name:"HomeIcons",props:{iconList:Array},data:function(){return{swiperOption:{autoplay:!1}}},computed:{pages:function(){var t=[];return this.iconList.forEach(function(e,i){var s=Math.floor(i/8);t[s]||(t[s]=[]),t[s].push(e)}),t}}},I={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"icons"},[i("swiper",{attrs:{options:t.swiperOption}},t._l(t.pages,function(e,s){return i("swiper-slide",{key:s},t._l(e,function(e){return i("router-link",{key:e.id,staticClass:"icon-item",attrs:{tag:"div",to:"/detail/"+e.id}},[i("div",{staticClass:"item-img"},[i("img",{staticClass:"img",attrs:{src:e.imgUrl}})]),t._v(" "),i("p",{staticClass:"icon-desc"},[t._v(t._s(e.desc))])])}),1)}),1)],1)},staticRenderFns:[]};var U=i("VU/8")($,I,!1,function(t){i("Vxyy")},"data-v-2020d470",null).exports,S={name:"HomeRecommend",props:{recommendList:Array}},E={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("ul",t._l(t.recommendList,function(e){return i("router-link",{key:e.id,staticClass:"item border-bottom",attrs:{tag:"li",to:"/detail/"+e.id}},[i("div",{staticClass:"item-img"},[i("img",{staticClass:"img-content",attrs:{src:e.imgUrl}})]),t._v(" "),i("div",{staticClass:"item-info"},[i("p",{staticClass:"item-info-title"},[t._v(t._s(e.title))]),t._v(" "),i("p",{staticClass:"item-info-desc"},[t._v(t._s(e.desc))]),t._v(" "),i("button",{staticClass:"item-button"},[t._v("查看详情")])])])}),1)])},staticRenderFns:[]};var R=i("VU/8")(S,E,!1,function(t){i("asw4")},"data-v-44c0a268",null).exports,H={name:"HomeWeekend",props:{weekendList:Array}},T={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("ul",t._l(t.weekendList,function(e){return i("li",{key:e.id,staticClass:"item border-bottom"},[i("router-link",{attrs:{to:"/detail/"+e.id}},[i("div",{staticClass:"item-img"},[i("img",{staticClass:"img-content",attrs:{src:e.imgUrl}})]),t._v(" "),i("div",{staticClass:"item-info"},[i("p",{staticClass:"item-info-title"},[t._v(t._s(e.title))]),t._v(" "),i("p",{staticClass:"item-info-desc"},[t._v(t._s(e.desc))])])])],1)}),0)])},staticRenderFns:[]};var z=i("VU/8")(H,T,!1,function(t){i("lMbw")},"data-v-1469ef84",null).exports,F={name:"HomeHot",props:{hotList:Array},data:function(){return{}},methods:{},mounted:function(){}},D={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"hot-list"},[i("div",{staticClass:"list"},t._l(t.hotList,function(e){return i("router-link",{key:e.id,staticClass:"item",attrs:{tag:"div",to:"/detail/"+e.id}},[i("img",{attrs:{src:e.imgUrl,width:"100%"}}),t._v(" "),i("div",{staticClass:"desc"},[t._v(t._s(e.desc))]),t._v(" "),i("div",[i("span",{staticClass:"price"},[t._v("￥"+t._s(e.price))]),t._v("起")])])}),1)])},staticRenderFns:[]};var V=i("VU/8")(F,D,!1,function(t){i("uQAE")},"data-v-d193adb8",null).exports;i("0RrJ");var N=i("EdT2"),O=i("+CPH"),A={name:"Home",components:{HomeHeader:k,HomeSwiper:j,HomeIcons:U,HomeRecommend:R,HomeWeekend:z,NavBar:N.a,HotList:V,CateTitle:O.a},data:function(){return{lastCity:"",swiperList:[],iconList:[],recommendList:[],weekendList:[],list:""}},computed:h()({},Object(_.c)({city:"city"})),watch:{city:function(){return this.getHomeInfo()}},methods:{getHomeInfo:function(){p.a.get(this.baseURL+"/index.json?city="+this.city).then(this.getHomeInfoSucc)},getHomeInfoSucc:function(t){if((t=t.data).ret&&t.data){var e=t.data;this.list=e,console.log(e),this.swiperList=e.swiperList,this.iconList=e.iconList,this.recommendList=e.recommendList,this.weekendList=e.weekendList}}},mounted:function(){this.getHomeInfo(),this.lastCity=this.city},activated:function(){this.lastCity!==this.city&&(this.lastCity=this.city,this.getHomeInfo())}},q={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("home-header"),t._v(" "),i("home-swiper",{attrs:{swiperList:t.swiperList}}),t._v(" "),i("cate-title",{attrs:{title:"本周热门榜单"}},[i("span",{staticClass:"iconfont iconremen",attrs:{slot:"icon"},slot:"icon"}),t._v(" "),i("router-link",{attrs:{slot:"right",tag:"div",to:"/hotlist"},slot:"right"},[t._v("全部榜单\n      "),i("span",{staticClass:"iconfont"},[t._v("")])])],1),t._v(" "),i("hot-list",{attrs:{hotList:this.list.hotList}}),t._v(" "),i("cate-title",{attrs:{title:"热销推荐",bgcolor:"#eee"}}),t._v(" "),i("home-recommend",{attrs:{recommendList:t.recommendList}}),t._v(" "),i("cate-title",{attrs:{title:"周末去哪儿",bgcolor:"#eee"}}),t._v(" "),i("home-weekend",{attrs:{weekendList:t.weekendList}})],1)},staticRenderFns:[]};var B=i("VU/8")(A,q,!1,function(t){i("kCkk")},"data-v-31943719",null).exports,M={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"header"},[e("router-link",{attrs:{to:"/"}},[e("div",{staticClass:"header-left"},[e("div",{staticClass:"iconfont"},[this._v("")])])]),this._v(" "),e("div",{staticClass:"selectCity"},[this._v("城市选择")])],1)},staticRenderFns:[]};var P=i("VU/8")({name:"CityHeader"},M,!1,function(t){i("2DGz")},"data-v-6e2d8b9e",null).exports,G={name:"CityList",props:{hotCities:Array,cities:Object,letter:String},watch:{letter:function(){if(this.letter){var t=this.$refs[this.letter][0];this.scroll.scrollToElement(t)}}},computed:h()({},Object(_.c)({currentCity:"city"})),methods:h()({handleCityClick:function(t){this.cchangeCity(t),this.$router.push("/")}},Object(_.b)(["cchangeCity"])),mounted:function(){this.scroll=new f.a(this.$refs.wrapper,{click:!0})}},W={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{ref:"wrapper",staticClass:"list"},[i("div",[i("div",{staticClass:"area"},[i("div",{staticClass:"title border-bottom"},[t._v("当前城市")]),t._v(" "),i("div",{staticClass:"content"},[i("div",{staticClass:"button",on:{click:function(e){return t.handleCityClick(t.currentCity)}}},[t._v(t._s(this.currentCity))])])]),t._v(" "),i("div",{staticClass:"area"},[i("div",{staticClass:"title border-bottom"},[t._v("热门城市")]),t._v(" "),i("div",{staticClass:"content"},t._l(t.hotCities,function(e){return i("div",{key:e.id,staticClass:"button",on:{click:function(i){return t.handleCityClick(e.name)}}},[t._v("\n            "+t._s(e.name)+"\n          ")])}),0)]),t._v(" "),t._l(t.cities,function(e,s){return i("div",{key:s,ref:s,refInFor:!0,staticClass:"area"},[i("div",{staticClass:"title border-bottom"},[t._v(t._s(s))]),t._v(" "),i("div",t._l(e,function(e){return i("div",{key:e.id,staticClass:"item-list border-bottom",on:{click:function(i){return t.handleCityClick(e.name)}}},[t._v(t._s(e.name)+"\n        ")])}),0)])})],2)])},staticRenderFns:[]};var Y=i("VU/8")(G,W,!1,function(t){i("pBdq")},"data-v-9ec5b5cc",null).exports,X={name:"CityAlphabet",props:{cities:Object},data:function(){return{touchStatus:!1,startY:0,timer:null}},computed:{letters:function(){var t=[];for(var e in this.cities)t.push(e);return t}},methods:{handleLetterClick:function(t){this.$emit("change",t.target.innerText)},handleTouchStart:function(){this.touchStatus=!0},handleTouchMove:function(t){var e=this;if(this.touchStatus){this.timer&&clearTimeout(this.timer);var i=this.$refs.A[0].offsetHeight;this.timer=setTimeout(function(){var s=t.touches[0].clientY-84,n=Math.floor((s-e.startY)/i);n>=0&&n<e.letters.length&&e.$emit("change",e.letters[n])},15)}},handleTouchEnd:function(t){this.touchStatus=!1}},updated:function(){this.startY=this.$refs.A[0].offsetTop}},J={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"alpahabet"},t._l(t.letters,function(e){return i("div",{key:e,ref:e,refInFor:!0,staticClass:"cityList",on:{touchstart:t.handleTouchStart,touchmove:t.handleTouchMove,touchEnd:t.handleTouchEnd,click:t.handleLetterClick}},[t._v("\n  "+t._s(e)+"\n  ")])}),0)},staticRenderFns:[]};var K={name:"City",components:{CityHeader:P,CitySearch:y,CityList:Y,CityAlphabet:i("VU/8")(X,J,!1,function(t){i("91ha")},"data-v-c138544e",null).exports},data:function(){return{cities:{},hotCities:[],letter:""}},methods:{getCityInfo:function(){p.a.get(this.baseURL+"/city.json").then(this.getCityInfoSucc)},getCityInfoSucc:function(t){if((t=t.data).ret&&t.data){var e=t.data;this.cities=e.cities,this.hotCities=e.hotCities}},handleLetterChange:function(t){this.letter=t}},mounted:function(){this.getCityInfo()}},Q={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("city-header"),t._v(" "),i("city-search",{attrs:{cities:t.cities}}),t._v(" "),i("city-list",{attrs:{cities:t.cities,hotCities:t.hotCities,letter:t.letter}}),t._v(" "),i("city-alphabet",{attrs:{cities:t.cities},on:{change:t.handleLetterChange}})],1)},staticRenderFns:[]};var Z=i("VU/8")(K,Q,!1,function(t){i("r90h")},null,null).exports,tt={name:"CommonGallary",props:{imgList:Array,clickIndex:Number},data:function(){return{swiperOption:{pagination:".swiper-pagination",paginationType:"fraction",initialSlide:this.clickIndex||0,observeParents:!0,observer:!0},container:!0}},methods:{handleClickBack:function(){this.$emit("close")}}},et={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"container",on:{click:this.handleClickBack}},[e("swiper",{ref:"mySwiper",staticClass:"swiper-content",attrs:{options:this.swiperOption}},[this._l(this.imgList,function(t,i){return e("swiper-slide",{key:i},[e("img",{staticClass:"swiper-img",attrs:{src:t}})])}),this._v(" "),e("div",{staticClass:"swiper-pagination",attrs:{slot:"pagination"},slot:"pagination"})],2)],1)},staticRenderFns:[]};var it=i("VU/8")(tt,et,!1,function(t){i("8bRF")},"data-v-74acb0cc",null).exports,st=i("87cn"),nt={name:"DetailBanner",props:{bannerImg:String,gallaryImgs:Array,sightName:String},components:{CommonGallary:it,BackInCircle:st.a},data:function(){return{showGallary:!1}},methods:{handleClickIn:function(){this.showGallary=!0},handleClickOut:function(){this.showGallary=!1}}},at={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("div",{staticClass:"banner",on:{click:t.handleClickIn}},[i("img",{staticClass:"img",attrs:{src:t.bannerImg}}),t._v(" "),i("div",{staticClass:"desc"},[t._v(t._s(t.sightName))]),t._v(" "),i("div",{staticClass:"fade"}),t._v(" "),i("div",{staticClass:"img-num"},[i("span",{staticClass:"iconfont"},[t._v("")]),t._v(t._s(t.gallaryImgs.length)+"\n    ")])]),t._v(" "),i("back-in-circle"),t._v(" "),i("common-gallary",{directives:[{name:"show",rawName:"v-show",value:t.showGallary,expression:"showGallary"}],attrs:{imgList:t.gallaryImgs},on:{close:t.handleClickOut}})],1)},staticRenderFns:[]};var rt=i("VU/8")(nt,at,!1,function(t){i("320f")},"data-v-eb2fbad0",null).exports,ct={name:"DetailHeader",data:function(){return{showHeader:!1,opacityStyle:{opacity:1}}},methods:{handleScroll:function(){var t=document.documentElement.scrollTop;t>60?(this.showHeader=!0,this.opacityStyle.opacity=t/200>1?1:t/200):this.showHeader=!1}},activated:function(){window.addEventListener("scroll",this.handleScroll)},deactivated:function(){window.removeEventListener("scroll",this.handleScroll)}},ot={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("div",{directives:[{name:"show",rawName:"v-show",value:this.showHeader,expression:"showHeader"}],staticClass:"header-fix-back",style:this.opacityStyle},[e("router-link",{attrs:{to:"/"}},[e("div",{staticClass:"header-left"},[e("div",{staticClass:"iconfont"},[this._v("")])])]),this._v(" "),e("div",{staticClass:"selectCity"},[this._v("景点详情")])],1)])},staticRenderFns:[]};var lt=i("VU/8")(ct,ot,!1,function(t){i("VH+j")},"data-v-6062d01c",null).exports,dt={name:"DetailScore",props:{scoreContent:Object},mounted:function(){}},ut={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"container"},[i("router-link",{attrs:{to:"/waiting"}},[i("div",{staticClass:"score sc-item"},[i("div",{staticClass:"sc-item-left"},[i("div",{staticClass:"sc-one sc-yellow"},[i("span",{staticClass:"sc-score-large"},[t._v(t._s(this.scoreContent.score))]),t._v("分"+t._s(t.scoreContent.scoreText)),i("span",{staticClass:"sc-score-dj"},[t._v(t._s(t.scoreContent.level))])]),t._v(" "),i("div",{staticClass:"sc-gray"},[i("span",{staticClass:"sc-score-pl"},[t._v(t._s(t.scoreContent.commentNum)+" 条评论")]),i("span",{staticClass:"sc-score-gl"},[t._v(t._s(t.scoreContent.raidersNum)+"条攻略")])]),t._v(" "),i("div",{staticClass:"iconfont icon-go"},[i("i",{staticClass:"iconarrow-right"})])])])]),t._v(" "),i("router-link",{attrs:{to:"/waiting"}},[i("div",{staticClass:"sc-desc sc-item"},[i("div",{staticClass:"sc-item-right"},[i("div",{staticClass:"sc-one"},[i("span",{staticClass:"sc-desc-title"},[t._v("景点简介")])]),t._v(" "),i("div",{staticClass:"sc-gray"},[i("span",{staticClass:"sc-desc-text"},[t._v("开放时间、贴士")])]),t._v(" "),i("div",{staticClass:"iconfont icon-go"},[i("i",{staticClass:"iconarrow-right"})])])])]),t._v(" "),i("div",{staticClass:"addr"},[i("i",{staticClass:"iconfont"},[t._v("")]),t._v(t._s(this.scoreContent.address))])],1)},staticRenderFns:[]};var mt=i("VU/8")(dt,ut,!1,function(t){i("pjA8")},"data-v-40c0566d",null).exports,ht={name:"DetailContainer",props:{mpContent:Array},data:function(){return{}},mounted:function(){},methods:{handleTitleClick:function(t){this.$set(t,"isshow",!(void 0!==t.isshow&&t.isshow))}}},vt={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"mp"},[i("div",{staticClass:"mp-main"},t._l(t.mpContent,function(e,s){return i("div",{key:s,staticClass:"item"},[i("div",{staticClass:"item-title border-bottom",on:{click:function(i){return t.handleTitleClick(e)}}},[i("i",{staticClass:"iconfont iconmenpiaopiaoxianxing item-icon"}),t._v(t._s(e.title))]),t._v(" "),e.children?i("div",{directives:[{name:"show",rawName:"v-show",value:e.isshow,expression:"item.isshow"}],staticClass:"item-child"},[i("detail-container",{attrs:{mpContent:e.children}})],1):t._e()])}),0)])},staticRenderFns:[]};var pt={name:"DetailComment",components:{CommonGallary:it},data:function(){return{data:{title:"用户评论"},comment:[{name:"张三",avatar:"static/img/1.jpg",satisfaction:"90%",date:"2019-06-06",content:"nice",img:["static/img/1.jpg","static/img/2.jpg","static/img/3.png","static/img/2.jpg"]},{name:"李四",avatar:"static/img/2.jpg",satisfaction:"80%",date:"2019-06-06",content:"我来凑字数凑字数凑字数凑字数凑字数凑字数凑字数凑字数凑凑字数凑字数凑字数凑字数凑字数凑字数凑字数凑字数凑字数凑字数凑字数凑字数凑字数凑字数凑字数凑字数凑字数凑字数凑字数凑字数凑字数字数凑字数凑字数凑字数凑字数凑字数凑字数凑字数凑字数凑字数",img:["static/img/1.jpg","static/img/2.jpg"]},{name:"李四",avatar:"static/img/3.png",satisfaction:"100%",date:"2019-06-06",content:"我来凑字数凑字数凑我来凑字数凑字数凑我来凑字数凑字数凑我来凑字数凑字数凑我来凑字数凑字数凑我来凑字数凑字数凑我来凑字数凑字数凑我来凑字数凑字数凑我来凑字数凑字数凑我来凑字数凑字数凑字数凑字数凑字数凑字数凑字数凑字数凑凑字数凑字数凑字数凑字数凑字数凑字数凑字数凑字数凑字数凑字数凑字数凑字数凑字数凑字数凑字数凑字数凑字数凑字数凑字数凑字数凑字数字数凑字数凑字数凑字数凑字数凑字数凑字数凑字数凑字数凑字数"},{name:"李四",avatar:"static/img/2.jpg",satisfaction:"20%",date:"2019-06-06",content:"垃圾的很啊"},{name:"李四",avatar:"static/img/2.jpg",satisfaction:"10%",date:"2019-06-06",content:"我来凑字数凑字数凑字数凑字数凑字数凑字数凑字数凑字数凑凑字数凑字数凑字数凑字数凑字数凑字数凑字数凑字数凑字数凑字数凑字数凑字数凑字数凑字数凑字数凑字数凑字数凑字数凑字数凑字数凑字数字数凑字数凑字数凑字数凑字数凑字数凑字数凑字数凑字数凑字数"},{name:"李四",avatar:"static/img/2.jpg",satisfaction:"90%",date:"2019-06-06",content:"我来凑字数凑字我来凑字数凑数凑字数数凑字数"}],showGallary:!1,imgArr:[],clickIndex:0,id:""}},mounted:function(){this.id=this.getCityId()},methods:{handleClickIn:function(t){this.showGallary=!0,this.imgArr=t},handleClickOut:function(){this.showGallary=!1},updateClickIndex:function(t){this.clickIndex=t},getCityId:function(){return this.$route.params.id}}},ft={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"detail-comment"},[i("div",{staticClass:"title border-bottom"},[t._v(t._s(t.data.title))]),t._v(" "),i("div",{staticClass:"subtitle"},[t._v(t._s(t.data.subTitle))]),t._v(" "),t._l(t.comment,function(e,s){return i("div",{key:s,staticClass:"item"},[s<4?i("div",[i("div",{staticClass:"item-top"},[i("div",{staticClass:"item-top-star"},[i("i",{staticClass:"iconfont item-star-yellow",style:"width:"+e.satisfaction},[t._v("")]),t._v(" "),i("i",{staticClass:"iconfont item-star-gray"},[t._v("")])]),t._v(" "),i("div",{staticClass:"item-top-userinfo"},[i("span",[t._v(t._s(e.name)+" ")]),i("span",[t._v(t._s(e.date))])])]),t._v(" "),i("div",{staticClass:"item-content"},[i("div",[t._v("\n          "+t._s(e.content)+"\n          ")])]),t._v(" "),e.img?i("div",{staticClass:"item-img",on:{click:function(i){return t.handleClickIn(e.img)}}},t._l(e.img,function(e,s){return i("div",{key:s,staticClass:"img border",on:{click:function(e){return t.updateClickIndex(s)}}},[i("img",{attrs:{src:e}})])}),0):t._e()]):t._e(),t._v(" "),t.showGallary?i("common-gallary",{attrs:{imgList:t.imgArr,clickIndex:t.clickIndex},on:{close:t.handleClickOut}}):t._e()],1)}),t._v(" "),i("div",{directives:[{name:"show",rawName:"v-show",value:t.comment.length>=4,expression:"comment.length >= 4"}]},[i("router-link",{attrs:{to:"/waiting"}},[i("div",{staticClass:"item-more"},[t._v("查看更多")])])],1)],2)},staticRenderFns:[]};var _t={name:"Detail",components:{DetailBanner:rt,DetailHeader:lt,DetailScore:mt,DetailContainer:i("VU/8")(ht,vt,!1,function(t){i("KXDd")},"data-v-14bc9056",null).exports,DetailComment:i("VU/8")(pt,ft,!1,function(t){i("UgxE")},"data-v-331c9fa8",null).exports},data:function(){return{bannerImg:"",sightName:"",gallaryImgs:[],scoreContent:{},mpContent:[]}},computed:{itemid:function(){return this.$route.params.id}},methods:{getDetailInfo:function(){p.a.get(this.baseURL+"/detail.json").then(this.getDetailInfoSucc)},getDetailInfoSucc:function(t){if((t=t.data).ret&&t.data){var e=t.data;this.bannerImg=e.bannerImg,this.gallaryImgs=e.gallaryImgs,this.sightName=e.sightName,this.scoreContent=e,this.mpContent=e.categoryList}}},mounted:function(){this.getDetailInfo()}},gt={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"detail-main"},[i("detail-banner",{attrs:{bannerImg:t.bannerImg,gallaryImgs:t.gallaryImgs,sightName:t.sightName}}),t._v(" "),i("detail-score",{staticClass:"sc",attrs:{scoreContent:t.scoreContent}}),t._v(" "),i("detail-header"),t._v(" "),i("detail-container",{attrs:{mpContent:t.mpContent}}),t._v(" "),i("detail-comment")],1)},staticRenderFns:[]};var Ct=i("VU/8")(_t,gt,!1,function(t){i("LR0t")},"data-v-581c2569",null).exports,yt={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"waiting"},[i("div",{staticClass:"content"},[i("div",{staticClass:"notice"},[t._v(t._s(t.notice))]),t._v(" "),i("div",{staticClass:"lb-top"},[i("div",{staticClass:"lb-center"},[t._v(t._s(t.notice))])]),t._v(" "),i("div",{staticClass:"lb-buttom"}),t._v(" "),i("div",{staticClass:"btn-back"},[i("input",{attrs:{type:"button",value:"返回"},on:{click:function(e){return t.back()}}})])])])},staticRenderFns:[]};var bt=i("VU/8")({name:"Comment",data:function(){return{notice:"页面开发中"}},methods:{back:function(){this.$router.go(-1)}}},yt,!1,function(t){i("DPwy")},"data-v-a6c7fb9e",null).exports;s.a.use(u.a);var wt=new u.a({routes:[{path:"/",name:"Home",component:B},{path:"/hotlist",name:"HotList",component:function(){return i.e(2).then(i.bind(null,"pCPM"))}},{path:"/city",name:"City",component:Z},{path:"/detail/:id",name:"Detail",component:Ct},{path:"/waiting",name:"Waiting",component:bt},{path:"/orders",name:"Orders",component:function(){return i.e(0).then(i.bind(null,"3e44"))}},{path:"/raiders",name:"Raiders",component:function(){return i.e(3).then(i.bind(null,"YZFt"))}},{path:"/profile",name:"Profile",component:function(){return i.e(1).then(i.bind(null,"HkIW"))}}]}),kt=i("DVXL"),xt=i.n(kt),Lt=i("F3EI"),jt=i.n(Lt),$t="上海";try{localStorage.city&&($t=localStorage.city)}catch(t){}var It={city:$t},Ut={cchangeCity:function(t,e){t.city=e;try{localStorage.city=e}catch(t){}}};s.a.use(_.a);var St=new _.a.Store({state:It,mutations:Ut}),Et=(i("9n10"),i("M6Sr"),i("TzC8"),i("v2ns"),i("zNUS")),Rt=i.n(Et),Ht=Rt.a.Random,Tt={data:function(){return Rt.a.mock({"swiperList|1-5":[{"id|+1":1,"imgUrl|1":["//imgs.qunarzz.com/vc/aa/9e/82/14bf523635542806a671763e98.jpg_92.jpg","//mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/201910/abe3418971067bd655fb2794d6e2eeec.jpg","//imgs.qunarzz.com/vc/de/3d/1c/2ea7755853fef62ce549153026.jpg_92.jpg"]}],"iconList|5-10":[{"id|+1":1,"imgUrl|1":["http://img1.qunarzz.com/piao/fusion/1611/54/ace00878a52d9702.png","http://img1.qunarzz.com/piao/fusion/1711/df/86cbcfc533330d02.png"],"desc|1":["景点门票","国庆游"]}],"hotList|2-10":[{"id|+1":1,"imgUrl|1":["http://img1.qunarzz.com/sight/p0/1409/19/adca619faaab0898245dc4ec482b5722.jpg_140x140_80f63803.jpg","http://img1.qunarzz.com/sight/p0/1511/d2/d2aec2dfc5aa771290.water.jpg_140x140_abb362a7.jpg"],"title|1":Ht.ctitle(),"desc|1":Ht.csentence(),"price|1-500":20}],"recommendList|3":[{"id|+1":1,"imgUrl|1":["http://img1.qunarzz.com/sight/p0/1409/19/adca619faaab0898245dc4ec482b5722.jpg_140x140_80f63803.jpg","http://img1.qunarzz.com/sight/p0/1511/d2/d2aec2dfc5aa771290.water.jpg_140x140_abb362a7.jpg"],"title|1":Ht.ctitle(),"desc|1":Ht.csentence()}],"weekendList|5":[{"id|+1":1,"imgUrl|1":["http://img1.qunarzz.com/sight/source/1505/ce/bc89bc2f0e33ea.jpg_r_640x214_3e408453.jpg","http://img1.qunarzz.com/sight/source/1505/b2/fde1bfcd057a52.jpg_r_640x214_bbf3fa44.jpg"],"title|1":Ht.ctitle(),"desc|1":Ht.csentence()}]})}},zt=Rt.a.Random,Ft={hotlistData:function(){return Rt.a.mock({"addresslist|10":[{"id|+1":1,"imgUrl|1":["http://img1.qunarzz.com/sight/p0/1409/19/adca619faaab0898245dc4ec482b5722.jpg_140x140_80f63803.jpg","http://img1.qunarzz.com/sight/p0/1511/d2/d2aec2dfc5aa771290.water.jpg_140x140_abb362a7.jpg"],"title|1":zt.ctitle(),"desc|1":zt.csentence()}],"routelist|10":[{"id|+1":1,"imgUrl|1":["http://img1.qunarzz.com/sight/source/1505/ce/bc89bc2f0e33ea.jpg_r_640x214_3e408453.jpg","http://img1.qunarzz.com/sight/source/1505/b2/fde1bfcd057a52.jpg_r_640x214_bbf3fa44.jpg"],"title|1":zt.ctitle(),"desc|1":zt.csentence()}]})}};Rt.a.mock(/\/index.json/,"get",{ret:!0,data:Tt.data}),Rt.a.mock(/\/hotlist.json/,"get",{ret:!0,data:Ft.hotlistData}),s.a.config.productionTip=!1,xt.a.attach(document.body),s.a.use(jt.a),s.a.prototype.baseURL="//travel.better2020.top/static/mock",new s.a({el:"#app",router:wt,store:St,components:{App:d},template:"<App/>"})},PnEi:function(t,e){},TzC8:function(t,e){},UgxE:function(t,e){},"VH+j":function(t,e){},Vxyy:function(t,e){},Zos3:function(t,e,i){"use strict";var s={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"tabbardiv"},[e("div",{attrs:{id:"tab-bar"}},[this._t("default")],2)])},staticRenderFns:[]};var n=i("VU/8")({name:"TabBar"},s,!1,function(t){i("myTX")},"data-v-2bad87bb",null);e.a=n.exports},asw4:function(t,e){},bLiv:function(t,e){},iD2c:function(t,e){},jUPm:function(t,e){},kCkk:function(t,e){},lMbw:function(t,e){},myTX:function(t,e){},"o4o/":function(t,e){},pBdq:function(t,e){},pYmz:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s="undefined"!=typeof window;s&&(window.Swiper=i("gsqX"));var n={name:"swiper",props:{options:{type:Object,default:function(){return{autoplay:3500}}},notNextTick:{type:Boolean,default:function(){return!1}}},data:function(){return{defaultSwiperClasses:{wrapperClass:"swiper-wrapper"}}},ready:function(){!this.swiper&&s&&(this.swiper=new Swiper(this.$el,this.options))},mounted:function(){var t=this,e=function(){if(!t.swiper&&s){delete t.options.notNextTick;var e=!1;for(var i in t.defaultSwiperClasses)t.defaultSwiperClasses.hasOwnProperty(i)&&t.options[i]&&(e=!0,t.defaultSwiperClasses[i]=t.options[i]);var n=function(){t.swiper=new Swiper(t.$el,t.options)};e?t.$nextTick(n):n()}}(this.options.notNextTick||this.notNextTick)?e():this.$nextTick(e)},updated:function(){this.swiper&&this.swiper.update()},beforeDestroy:function(){this.swiper&&(this.swiper.destroy(),delete this.swiper)}},a={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"swiper-container"},[t._t("parallax-bg"),t._v(" "),i("div",{class:t.defaultSwiperClasses.wrapperClass},[t._t("default")],2),t._v(" "),t._t("pagination"),t._v(" "),t._t("button-prev"),t._v(" "),t._t("button-next"),t._v(" "),t._t("scrollbar")],2)},staticRenderFns:[]},r=i("VU/8")(n,a,!1,null,null,null);e.default=r.exports},pjA8:function(t,e){},qiDJ:function(t,e){},r90h:function(t,e){},uQAE:function(t,e){},v2ns:function(t,e){},yqrg:function(t,e){}},["NHnr"]);
//# sourceMappingURL=app.93eeb3df66b6ff478ea5.js.map