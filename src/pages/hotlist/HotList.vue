<template>
  <div>
    <fade title="一周最热"></fade>
    <!-- 榜单tab选择区域 -->
      <div class="tab-group">
        <tab-item 
          ref="tab2"
          :tabtxt="['TOP景点','TOP路线']" 
          :currentTab="1"
          @scrollToView="scrollToView"
          class="tab-fixed"
          v-show="isFixed"
        ></tab-item>
      </div>
      
    <common-scroll
      class="content-top"
      :probeType="3"
      ref="scroll"
    >
      <!-- 顶部图片区域 -->
      <div class="title-img">
      <back-in-circle class="back"></back-in-circle>
        <img 
          ref="img" 
          class="top-img"
          src="http://img1.qunarzz.com/sight/p0/1606/5d/5d50a982b5b14fff90.water.jpg_375x170_8a953cf6.jpg" 
        />
        <div class="mask"></div>
        <div class="mask-content">
          <div>--{{this.city}}--</div>
          <div class="font-level-1">本周热门榜单</div>
        </div>
      </div>
      <!-- 榜单tab选择区域 -->
      <div class="tab-group">
        <tab-item 
          id="tab"
          ref="tab"
          :tabtxt="['TOP景点','TOP路线']" 
          :currentTab="0"
          @scrollToView="scrollToView"
          v-show="!isFixed"
        ></tab-item>
      </div>
      <!-- 内容-景点 -->
      <div class="tab-content top-addr" id="addr">
        <ul>
          <router-link tag="li"
            class="item border-bottom"
            v-for="item of hotlist.addresslist"
            :key="item.id"
            :to="'/detail/' + item.id"
          >
            <div class="item-img">
              <img
                class="img-content"
                :src="item.imgUrl"
              />
            </div>
            <div class="item-info">
              <p class="item-info-title">{{item.title}}</p>
              <p class="item-info-desc">{{item.desc}}</p>
              <button class="item-button">查看详情</button>
            </div>
          </router-link>
        </ul>
      </div>
      <!-- 内容-路线 -->
      <div class="tab-content top-route" id="route">
        <cate-title title="路线" bgcolor="#eee"></cate-title>
        <ul>
          <router-link tag="li"
            class="item border-bottom"
            v-for="item of hotlist.routelist"
            :key="item.id"
            :to="'/detail/' + item.id"
          >
            <div class="item-img">
              <img
                class="img-content"
                :src="item.imgUrl"
              />
            </div>
            <div class="item-info">
              <p class="item-info-title">{{item.title}}</p>
              <p class="item-info-desc">{{item.desc}}</p>
              <button class="item-button">查看详情</button>
            </div>
          </router-link>
        </ul>
      </div>
    </common-scroll>
  </div>
</template>
<script>
import Fade from 'common/fade/Fade.vue'
import axios from 'axios'
import { mapState } from 'vuex'
import BackInCircle from 'common/goback/BackInCircle.vue'
import TabBar from 'common/tabbar/TabBar.vue'
import TabItem from 'common/tab/TabItem.vue'
import TabBarItem from 'common/tabbar/TabBarItem.vue'
import CateTitle from '../home/components/CateTitle.vue'
import CommonScroll from 'common/scroll/Scroll.vue'
import Bus from '@/main'
export default {
  components: { 
    Fade, 
    BackInCircle,
    TabBar,
    TabBarItem,
    TabItem,
    CateTitle,
    CommonScroll
  },
  name:'HotList',
  data () {
    return {
      hotlist:"",
      tabtop:0,
      isFixed:false
    }
  },
  computed: {
    // 当前选择的城市
    ...mapState({
      city: 'city'
    })
  },
  methods: {
    // 获取榜单数据
    getData(){
      axios.get(this.baseURL + '/hotlist.json?city=' + this.city)
        .then(this.getInfoSucc)
    },
    getInfoSucc(res){
      // debugger
      res = res.data
      if (res.ret && res.data) {
        const data = res.data
        this.hotlist = data
        // console.log(data)
      }
    },
    //模仿锚链接
    scrollToView(index){
      let y = document.querySelectorAll(".tab-content")[index].offsetTop;
      this.$refs.scroll.scroll.scrollTo(0,-y)
      // this.$refs.scroll
      // tabContent.scrollIntoView();
    },
    handleScroll(position){
      // debugger
      let scrolltop = 0-position.y;
      this.switchTabFixed(scrolltop)
      this.switchTabActive(scrolltop)
      
    },
    //路线和景点选择悬浮
    switchTabFixed(scrolltop){
      // console.log(this.tabtop);
      // console.log(scrolltop);
      if(scrolltop>this.tabtop){
        this.isFixed = true;
      }else{
        this.isFixed = false;
      };
    },
    //
    switchTabActive(scrolltop){
      let tabContent = document.getElementsByClassName('tab-content');
      let addrTop  =  tabContent[1].offsetTop;
      // console.log(addrTop);
      // console.log(scrolltop);
      if(scrolltop>addrTop-100){
        this.$refs.tab.cTab = 1;
        this.$refs.tab2.cTab = 1;
      }else{
        this.$refs.tab.cTab = 0;
        this.$refs.tab2.cTab = 0;
      }
    },
    getTabTop(){
      let _this = this;
      this.$nextTick(()=>{
        this.$refs.img.onload=function () { 
          _this.tabtop = document.getElementsByClassName("tab-group")[1].offsetTop;
        } 
      })
    },
  },
  created(){
    this.getData();
  },
  mounted () {
    // console.log("hotlist mounted");
    this.getTabTop();
    Bus.$on('scroll',this.handleScroll)
    // window.addEventListener('scroll', this.handleScroll)
  },
  beforeDestroy(){
    Bus.$off('scroll', this.handleScroll)
  },
  // activated () {
  //   window.addEventListener('scroll', this.handleScroll)
  // },
  // deactivated () {
  //   window.removeEventListener('scroll', this.handleScroll)
  // }
}
</script>
<style lang="stylus" scoped>
  .title
    background:$darkColor
    height: .64rem
    padding-left: .2rem
    line-height: .64rem
  .item
    position: relative
    height: 0
    padding-bottom: 30%
  .border-bottom
    border-color: #000000
    .item-img
      position:absolute
      top:.2rem
      left: .1rem
      width: 25%
      height: 0
      padding-bottom: 25%
      .img-content
        width: 100%
    .item-info
      position:absolute
      top: .2rem
      left: 30%
      .item-info-title
        margin-bottom: .2rem
        padding-right: .2rem
        font-size: .36rem
        wrap_ellipsis(1)
      .item-info-desc
        color: $darkGray
        // width: 100%
        padding-right: .2rem
        wrap_ellipsis(1)
      .item-button
        margin-top: .2rem
        padding-top: .03rem
        padding-bottom: .03rem
        padding-left: .2rem
        padding-right: .2rem
        border-radius: .08rem
        background: #EE9900
.top-img
  width:100%
.tab-content
  padding-top 50px
  margin-top -50px
.title-img
  position relative
.tab-group
  min-height .6rem
.back
  position relative
  z-index 3
.tab-fixed
  position fixed
  z-index 3
  width 100%
  background-color #fff
  top 41px
</style>