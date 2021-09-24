<template>
  <div>
    <fade title="一周最热"></fade>
    <!-- 顶部图片区域 -->
    <div class="title-img">
    <back-in-circle></back-in-circle>
      <img src="http://img1.qunarzz.com/sight/p0/1606/5d/5d50a982b5b14fff90.water.jpg_375x170_8a953cf6.jpg" />
      <div class="mask"></div>
      <div class="mask-content">
        <div>--{{this.city}}--</div>
        <div class="font-level-1">本周热门榜单</div>
      </div>
    </div>
    <!-- 榜单tab选择区域 -->
    <tab-item 
      :tabtxt="['TOP景点','TOP路线']" 
      @scrollToView="scrollToView"
    ></tab-item>
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
  </div>
</template>
<script>
import Fade from 'common/fade/Fade.vue'
import axios from 'axios'
import { mapState } from 'vuex'
import BackInCircle from 'common/goback/BackInCircle.vue'
import TabBar from 'common/tabbar/TabBar.vue'
import Tab from 'common/tab/Tab.vue'
import TabItem from 'common/tab/TabItem.vue'
import TabBarItem from 'common/tabbar/TabBarItem.vue'
import CateTitle from '../home/components/CateTitle.vue'
export default {
  components: { 
    Fade, 
    BackInCircle,
    TabBar,
    TabBarItem,
    Tab,TabItem,
    CateTitle
  },
  name:'HotList',
  data () {
    return {
      hotlist:""
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
      let tabContent = document.querySelectorAll(".tab-content")[index];
      tabContent.scrollIntoView();
    }
  },
  created(){
    this.getData();
  },
  mounted () {
  }
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
.tab-content
  padding-top 50px
  margin-top -50px
.title-img
  position relative
.header-left
  z-index 3
</style>