<template>
  <div class="tab-bar-item" :class="{active: isActive}" @click="itemClick">
    <div class="item-icon"><slot name="item-icon"></slot></div>
    <!-- <div class="item-icon-active" v-show="isActive"><slot name="item-icon-active"></slot></div> -->
    <slot name="item-text"></slot>
  </div>
</template>

<script>
export default {
  name: 'TabBarItem',
  props: {
    path: String
  },
  data () {
    return {
      // isActive: false
    }
  },
  computed: {
    isActive () {
      // this.$route当前路由
      return this.$route.path === this.path
    }
  },
  methods: {
    itemClick () {
      this.$router.replace(this.path)
    }
  }
}
</script>

<style lang="stylus" scoped>
.tab-bar-item
  padding: 3px 10px
  text-align: center
  .item-icon
    font-size: .4rem
    margin-bottom: 4px
.active
  color: $bgColor
</style>
