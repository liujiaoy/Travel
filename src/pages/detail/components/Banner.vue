<template>
  <div>
    <div class="banner" @click="handleClickIn">
      <img class="img" :src="bannerImg" />
      <div class="desc">{{sightName}}</div>
      <div class="fade"></div>
      <div class="img-num">
        <span class="iconfont">&#xe647;</span>{{gallaryImgs.length}}
      </div>
    </div>
    <back-in-circle></back-in-circle>
    <!-- <router-link to="/">
      <div class="header-left">
        <div class="iconfont">&#xe624;</div>
      </div>
    </router-link> -->
    <common-gallary :imgList="gallaryImgs" v-show="showGallary" @close="handleClickOut"></common-gallary>
  </div>
</template>

<script>
import CommonGallary from '@/common/gallary/Gallary'
import BackInCircle from '../../../common/goback/BackInCircle.vue'
export default {
  name: 'DetailBanner',
  props: {
    bannerImg: String,
    gallaryImgs: Array,
    sightName: String
  },
  components: {
    CommonGallary,
    BackInCircle
  },
  data () {
    return {
      showGallary: false
    }
  },
  methods: {
    handleClickIn () {
      this.showGallary = true
    },
    handleClickOut () {
      this.showGallary = false
    }
  }
}
</script>

<style lang="stylus" scoped>
  .banner
    position: relative
    .img
      width: 100%
    .desc
      position: absolute
      bottom: .4rem
      left: .2rem
      font-size : .36rem
      color: #FFFFFF
    .fade
      position: absolute
      bottom: 0
      left: 0
      right: 0
      height: .6rem
      background: linear-gradient(transparent, rgba(0,0,0,0.7))
    .img-num
      height: .4rem
      width: 1.2rem
      position: absolute
      bottom: .9rem
      left: .2rem
      background: rgba(0,0,0,0.4)
      color: #FFFFFF
      border-radius: .6rem
      font-size: .24rem
      .iconfont
        line-height: .4rem
        padding-left: .3rem
        padding-right: .1rem
        font-size: .2rem
  .header-left
    position: absolute
    top: 0.1rem
    left: 0.1rem
    width: .72rem
    height: .72rem
    background: rgba(00,00,00,0.5)
    border-radius: 50%
    text-align: center
    line-height: .72rem
    color: #fff
</style>
