<template>
  <div>
    <div class="banner" @click="handleClickIn">
      <img class="img" src="//img1.qunarzz.com/sight/p0/201301/08/08d4928f58459a5993835fbb.jpg_600x330_c5d891f4.jpg" />
      <div class="desc">伍山石窟度假区(AAAA景区)</div>
      <div class="fade"></div>
      <div class="img-num">
        <span class="iconfont">&#xe647;</span>11
      </div>
    </div>
    <router-link to="/">
      <div class="header-left">
        <div class="iconfont">&#xe624;</div>
      </div>
    </router-link>
    <common-gallary :imgList="imgList" v-show="showGallary" @close="handleClickOut"></common-gallary>
  </div>
</template>

<script>
import CommonGallary from '@/common/gallary/Gallary'
export default {
  name: 'DetailBanner',
  components: {
    CommonGallary
  },
  data () {
    return {
      showGallary: false,
      imgList: [
        {
          id: '001',
          imgUrl: 'http://img1.qunarzz.com/sight/p0/1701/6c/6c5e1f8fa365adada3.img.png_r_800x800_bcbc8092.png'
        }, {
          id: '002',
          imgUrl: 'http://img1.qunarzz.com/sight/p0/1808/5e/5e69962d1c4d7e8fa3.img.jpg_r_800x800_c11c5564.jpg'
        }, {
          id: '003',
          imgUrl: 'http://img1.qunarzz.com/sight/p0/1808/d1/d137655f0353c42ea3.img.png_r_800x800_1f755d3f.png'
        }]
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
