<template>
  <div class="waiting">
    <div class="content">
      <div class="notice">{{notice}}</div>
      <div class="lb-top"><div class="lb-center">{{notice}}</div></div>
      <div class="lb-buttom"></div>
      <div class="btn-back"><input type="button" value="返回" @click='back()'></div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Comment',
  data () {
    return {
      notice: '页面开发中'
    }
  },
  methods: {
    back () {
      this.$router.go(-1)
    }
  }
}
</script>

<style lang="stylus" scoped>
@import '~styles/varibles.styl'
  .waiting
    box-sizing: border-box
    height: 100%
    padding: 2rem .6rem
    .content
      border: .02rem solid #ccc
      border-radius: .2rem
      box-shadow : .2rem .2rem .1rem #ddd
      width: 100%
      height: 100%
      .notice
        font-size: .4rem
        font-weight: bold
        text-align: center
        height: 2rem
        line-height: 2rem
      .lb-top
        background-color: #e9b428
        height: 3.6rem
        width: 2.4rem
        border-radius: .4rem
        padding: .2rem
        box-sizing: border-box
        margin: 0 auto
        .lb-center
          box-sizing: border-box
          border: .1rem solid #000
          border-radius: .4rem
          background-color: inherit
          width: 100%
          height: 100%
          padding: .2rem .6rem
          font-size: .4rem
          font-weight: bold
          text-align: center
      .lb-buttom
        background-color: #000
        height: 2.6rem
        width: .2rem
        box-sizing: border-box
        margin: 0 auto
      .btn-back
        padding: 0.2rem
        text-align: center
      .btn-back input[type='button']
        padding: .06rem .2rem
        background: $bgColor
        color: #fff
        font-weight: bold
        border-radius: .06rem
        border-bottom: .04rem solid #888
        border-right: .04rem solid #888
</style>
