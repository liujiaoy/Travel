<template>
  <div class="header">
    <!-- 搜索栏组件 -->
    <city-search class="header-input">
      <router-link to="/city">
        <div class="header-right">
          {{this.city}}
          <span class="iconfont arrow-icon">&#xe62d;</span>
        </div>
      </router-link>
    </city-search>
    <div class="fade"></div>
  </div>
</template>

<script>
import CitySearch from '../../city/components/Search.vue'
import { mapState } from 'vuex'
export default {
  name: 'HomeHeader',
  components: {
    CitySearch
  },
  computed: {
    // 写法一
    city(){
      return this.$store.state.city
    }
    //写法二
    // ...mapState(['city']) //语法糖
  }
}
</script>

<style lang="stylus" scoped>
  .header
    .header-right
      transform: translateY(50%);
      color: #000000
      .arrow-icon
        margin-left: -.025rem
        font-size: .2rem
</style>
