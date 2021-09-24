<template>
  <div>
     <div class="header-left" @click="backHistory">
        <div class="iconfont">&#xe624;</div>
      </div>
  </div>
</template>
<script>
export default {
  name:'',
  data () {
    return {
    }
  },
  methods: {
    backHistory(){
      this.$router.go(-1);
    }
  },
  mounted () {
  }
}
</script>
<style lang="stylus" scoped>
.header-left
  position absolute
  top 0.1rem
  left 0.1rem
  width .72rem
  height .72rem
  background rgba(00,00,00,0.5)
  border-radius 50%
  text-align center
  line-height .72rem
  color #fff
</style>