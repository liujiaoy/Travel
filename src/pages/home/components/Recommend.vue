<template>
  <div>
    <div class="title">热销推荐</div>
    <ul>
      <router-link tag="li"
        class="item border-bottom"
        v-for="item of recommendList"
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
</template>

<script>
export default {
  name: 'HomeRecommend',
  props: {
    recommendList: Array
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
</style>
