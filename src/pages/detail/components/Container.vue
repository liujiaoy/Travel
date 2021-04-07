<template>
  <div class="mp">
    <div class="mp-main">
      <div class="item"
      v-for="(item,index) of mpContent"
      :key="index"
      >
        <div class="item-title border-bottom"
          @click="handleTitleClick(item)"><i class="iconfont iconmenpiaopiaoxianxing item-icon"></i>{{item.title}}</div>
        <div class="item-child"
          v-if="item.children"
          v-show="item.isshow"
        >
          <detail-container :mpContent="item.children"></detail-container>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'DetailContainer',
  props: {
    mpContent: Array
  },
  data () {
    return {
    }
  },
  mounted () {
    // console.log(this.mpContent)
  },
  methods: {
    handleTitleClick (item) {
      // item.isshow = !(item.isshow === undefined ? false : item.isshow)
      this.$set(item, 'isshow', !(item.isshow === undefined ? false : item.isshow))
      // console.log(item.isshow)
    }
  }
}

</script>

<style lang="stylus" scoped>
@import '~styles/mixins.styl'
@import '~styles/varibles.styl'
  .mp
    background-color : #fff
    .item
      line-height : .8rem
    .item-title
      padding-left : .2rem
      .item-icon
        color: $bgColor
        padding: .02rem
    .item-child
      padding-left : .2rem
</style>
