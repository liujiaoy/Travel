<template>
  <div class="hot-list">
    <div class="list">
        <router-link tag="div" class="item" v-for="item of hotList" :key="item.id" :to="'/detail/' + item.id">
          <img :src="item.imgUrl" width="100%">
          <div class="desc">{{item.desc}}</div>
          <div><span class="price">￥{{item.price}}</span>起</div>
        </router-link>
    </div>
  </div>
</template>
<script>
export default {
  name:'HomeHot',
  props:{
    hotList: Array
  },
  data () {
    return {
    }
  },
  methods: {
  },
  mounted () {
  }
}
</script>
<style lang="stylus" scoped>
.hot-list
  overflow auto
.list
  display flex
  flex-direction row
  flex-wrap nowrap
  overflow visible
  width fit-content
.item
  width 2rem
  padding 2px
  text-align center
  div
    margin 4px 0
.desc
  wrap_ellipsis(1)
.price
  color $yellowFont
</style>