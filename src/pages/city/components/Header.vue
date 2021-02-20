<template>
  <div class="header">
    <router-link to="/">
      <div class="header-left">
        <div class="iconfont">&#xe624;</div>
      </div>
    </router-link>
    <div class="selectCity">城市选择</div>
  </div>
</template>

<script>
export default {
  name: 'CityHeader'
}
</script>

<style lang="stylus" scoped>
  .header
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
