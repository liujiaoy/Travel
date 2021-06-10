<template>
  <div id="app">
    <keep-alive>
       <router-view/>
    </keep-alive>
    <tab-bar>
      <tab-bar-item path="/">
        <i slot="item-icon" class="iconfont iconshouye"></i>
        <div slot="item-text">首页</div>
      </tab-bar-item>
       <tab-bar-item path="/orders">
        <i slot="item-icon" class="iconfont icondingdan"></i>
        <div slot="item-text">订单</div>
      </tab-bar-item>
       <tab-bar-item path="/raiders">
        <i slot="item-icon" class="iconfont icongonglve"></i>
        <div slot="item-text">攻略社区</div>
      </tab-bar-item>
       <tab-bar-item path="/profile">
        <i slot="item-icon" class="iconfont iconwode"></i>
        <div slot="item-text">我的</div>
      </tab-bar-item>
    </tab-bar>
  </div>
</template>

<script>
import TabBar from '@/common/tabbar/TabBar'
import TabBarItem from '@/common/tabbar/TabBarItem'
export default {
  name: 'App',
  components: {
    TabBar,
    TabBarItem
  }
}
</script>

<style lang="stylus" scoped>
@media only screen and (min-width:375px) {
}
</style>
