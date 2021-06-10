<template>
  <div id="tab-bar">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'TabBar'
}
</script>

<style lang="stylus" scoped>
#tab-bar
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex
  display: -webkit-flex
  background-color: $tabbarBackcolor
  height: 49px
  flex-flow: row nowrap
  justify-content:  space-between
  align-items: center
  z-index: 2
</style>
