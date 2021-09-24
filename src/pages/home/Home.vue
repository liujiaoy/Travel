<template>
  <div>
    <home-header></home-header>
    <!-- <nav-bar>
      <div slot="center"><input type="text" value="请输入城市"/></div>
      <div slot="right">
        <router-link to="/city">
          <div class="header-right">
            宁波
            <span class="iconfont arrow-icon">&#xe62d;</span>
          </div>
        </router-link>
      </div>
    </nav-bar> -->
    <home-swiper :swiperList="swiperList"></home-swiper>
    <cate-title title="本周热门榜单" >
      <span slot="icon" class="iconfont iconremen"></span>
      <router-link tag="div" slot="right" to="/hotlist">全部榜单
        <span class="iconfont">&#xe628;</span>
      </router-link>
    </cate-title>
    <hot-list :hotList="this.list.hotList" ></hot-list>
    <!-- <home-icons :iconList="iconList"></home-icons> -->
    <!-- 这里传入的颜色怎么样才能使用stylus变量呢 bgcolor="$tabbarBackcolor"... -->
    <cate-title title="热销推荐" bgcolor="#eee"></cate-title>
    <home-recommend :recommendList="recommendList"></home-recommend>
    <cate-title title="周末去哪儿" bgcolor="#eee"></cate-title>
    <home-weekend :weekendList="weekendList"></home-weekend>
  </div>
</template>
<script>
import HomeHeader from './components/Header'
import HomeSwiper from './components/Swiper'
import HomeIcons from './components/Icons'
import HomeRecommend from './components/Recommend'
import HomeWeekend from './components/Weekend'
import HotList from './components/Hot'
import axios from 'axios'
import {getHomeData} from '../../network/home'
import { mapState } from 'vuex'
import NavBar from 'common/navbar/NavBar.vue'
import CateTitle from './components/CateTitle.vue'

export default {
  name: 'Home',
  components: {
    HomeHeader,
    HomeSwiper,
    HomeIcons,
    HomeRecommend,
    HomeWeekend,
    NavBar,
    HotList,
    CateTitle
  },
  data () {
    return {
      lastCity: '',
      swiperList: [],
      iconList: [],
      recommendList: [],
      weekendList: [],
      list: ""
    }
  },
  computed: {
    ...mapState({
      city: 'city'
    })
  },
  watch:{
    city (){
      return this.getHomeInfo()
    }
  },
  methods: {
    //测试axios的封装
    // getHomeInfo(){
    //   getHomeData()
    //   .then(this.getHomeInfoSucc)
    // },
    getHomeInfo () {
      // console.log(this.city)
      // console.log(this.baseURL)
      axios.get(this.baseURL + '/index.json?city=' + this.city)
        .then(this.getHomeInfoSucc)
    },
    getHomeInfoSucc (res) {
      // debugger
      res = res.data
      if (res.ret && res.data) {
        const data = res.data
        this.list = data
                console.log(data);
        this.swiperList = data.swiperList
        this.iconList = data.iconList
        this.recommendList = data.recommendList
        this.weekendList = data.weekendList
      }
      // console.log(res)
    }
  },
  mounted () {
    this.getHomeInfo()
    this.lastCity = this.city
  },
  activated () {
    if (this.lastCity !== this.city) {
      this.lastCity = this.city
      this.getHomeInfo()
    }
  }
}
</script>

<style lang="stylus" scoped>
.cate-tile
  padding 10px
.iconremen
  color red
</style>