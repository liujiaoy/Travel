<template>
  <div>
    <ul>
      <li
        class="item border-bottom"
        v-for="item of weekendList"
        :key="item.id"
      >
        <router-link :to="'/detail/' + item.id">
          <div class="item-img">
            <img
              class="img-content"
              :src="item.imgUrl"
            />
          </div>
          <div class="item-info">
            <p class="item-info-title">{{item.title}}</p>
            <p class="item-info-desc">{{item.desc}}</p>
          </div>
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'HomeWeekend',
  props: {
    weekendList: Array
  }
}
</script>

<style lang="stylus" scoped>
  .title
    background:$darkColor
    height: .64rem
    padding-left: .2rem
    line-height: .64rem
  .border-bottom
    border-color: #000000
    .item-img
      width: 100%
      height: 0
      padding-bottom: 35%
      overflow: hidden
      .img-content
        width: 100%
    .item-info
      padding-left: .16rem
      margin: .1rem 0
      .item-info-title
        margin-bottom: .06rem
        font-size: .30rem
        ellipsis()
      .item-info-desc
        color: $darkGray
        font-size: .24rem
        ellipsis()
</style>
