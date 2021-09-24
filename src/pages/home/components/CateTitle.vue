<template>
  <div class="cate-tile" :style="{backgroundColor:bgcolor}">
    <div class="left">
      <slot name="icon"></slot>
      {{title}}
      </div>
    <div class="right">
      <slot name="right"></slot>
    </div>
  </div>
</template>
<script>
export default {
  name:'cateTitle',
  props:{
    title: String,
    bgcolor: {
      type:String,
      default:"#fff"
    }
  },
  data () {
    return {
      
    }
  },
  computed:{
    
  },
  methods: {
  },
  mounted () {
  }
}
</script>
<style lang="stylus" scoped>
.cate-tile
  display: flex
  flex-direction row
  padding 10px
  .left
    text-align left
    flex 1
  .right
    text-align right
    width 30%
</style>