<template>
  <div id="app">
    <!-- <keep-alive> -->
       <router-view/>
    <!-- </keep-alive> -->
    <main-tab-bar ></main-tab-bar>
  </div>
</template>

<script>
import MainTabBar from './common/MainTabBar.vue'
export default {
  name: 'App',
  components: {
    MainTabBar
  },
  mounted () {
    
  },
  methods: {
  }
}
</script>

<style lang="stylus" scoped>
</style>
