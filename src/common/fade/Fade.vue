<template>
  <div>
    <div class="header-fix-back" v-show="showHeader" :style="opacityStyle">
      <router-link to="/">
        <div class="header-left">
          <div class="iconfont">&#xe624;</div>
        </div>
      </router-link>
      <div class="selectCity">{{title}}</div>
    </div>
  </div>
</template>

<script>
import Bus from '@/main.js'
export default {
  name: 'fade',
  props:{
    title:String
  },
  data () {
    return {
      showHeader: false,
      opacityStyle: {
        opacity: 1
      }
    }
  },
  methods: {
    handleScroll (position) {
      
      const top = 0- position.y
      // console.log(top);
      if (top > 60) {
        this.showHeader = true
        this.opacityStyle.opacity = top / 200 > 1 ? 1 : top / 200
      } else {
        this.showHeader = false
      }
    }
  },
  created (){
    // console.log("fade mounted");
    
    // window.addEventListener('scroll', this.handleScroll)
  },
  mounted () {
    Bus.$on("scroll",this.handleScroll) 
  },
  destoryed (){
    console.log("fade destoryed");
    window.removeEventListener('scroll', this.handleScroll)
    // window.removeEventListener('scroll', this.handleScroll)
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
  .header-fix-back
    position: fixed
    z-index: 10
    top: 0
    left: 0
    width: 100%
    line-height: .86rem
    background: #25A4BB
    color: #fff
    .header-left
      width: .64rem
      float: left
      text-align: center
      color: #FFFFFF
    .selectCity
      width: 100%
      font-size: .32rem
      text-align: center
</style>
