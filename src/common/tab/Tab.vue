<template>
  <div>
    <ul class="tab border-bottom">
      <slot></slot>
    </ul>
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
  },
  mounted () {
  }
}
</script>
<style lang="stylus" scoped>
.tab
  display flex
  flex-direction row
  justify-content space-around
</style>