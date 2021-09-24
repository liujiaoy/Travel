<template>
  <ul class="tab border-bottom" >
    <!-- <div class="item-icon-active" v-show="isActive"><slot name="item-icon-active"></slot></div> -->
    <li 
      v-for="(item,index) of tabtxt" 
      :key="index" 
      :class="{'tab-item-active':index==currentTab}"  
      @click="itemClick(index)"
      :data-index="index"
    >
    {{item}}
    </li>
  </ul>
</template>
<script>
export default {
  name:'',
  props:{
    tabtxt:Array
  },

  data () {
    return {
      currentTab:0
    }
  },
  methods: {
    itemClick(index){
      // console.log(index);
      this.currentTab = index;
      this.$emit('scrollToView',index)
    }
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
.tab a
  color inherit
.tab-item-active
  color $title
  border-bottom 2px solid $title
</style>