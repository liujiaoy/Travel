<template>
  <div class="wrapper" ref="wrapper">
    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>
<script>
import Bscroll from 'better-scroll'
import Bus from '@/main'
export default {
  name:'CommonScroll',
  props:{
    probeType:{
      type: Number,
      default: 0
    },
    eventPassthrough:{
      type: String,
      default:''
    }
  },
  data () {
    return {
      scroll:null,
    }
  },
  methods: {
  },
  mounted () {
    this.scroll = new Bscroll(this.$refs.wrapper,{
      click:true,
      probeType:this.probeType,
      eventPassthrough:this.eventPassthrough
    })
    //滚动触发事件
    this.scroll.on("scroll",(position)=>{
      Bus.$emit('scroll',position)
    })
  },
  beforeDestroy(){
    this.scroll.off("scroll")
    // Bus.$off('scroll')
  },
}
</script>
<style lang="stylus" scoped>
</style>