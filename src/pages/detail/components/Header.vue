<template>
  <div>
    <div class="header-fix-back" v-show="showHeader" :style="opacityStyle">
      <router-link to="/">
        <div class="header-left">
          <div class="iconfont">&#xe624;</div>
        </div>
      </router-link>
      <div class="selectCity">景点详情</div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'DetailHeader',
  data () {
    return {
      showHeader: false,
      opacityStyle: {
        opacity: 1
      }
    }
  },
  methods: {
    handleScroll () {
      const top = document.documentElement.scrollTop
      if (top > 60) {
        this.showHeader = true
        this.opacityStyle.opacity = top / 200 > 1 ? 1 : top / 200
      } else {
        this.showHeader = false
      }
    }
  },
  activated () {
    window.addEventListener('scroll', this.handleScroll)
  },
  deactivated () {
    window.removeEventListener('scroll', this.handleScroll)
  }
}
</script>

<style lang="stylus" scoped>
  .header-fix-back
    position: fixed
    z-index: 2
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
