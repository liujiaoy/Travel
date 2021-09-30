<template>
<ul class="tab border-bottom" >
  <!-- <div class="item-icon-active" v-show="isActive"><slot name="item-icon-active"></slot></div> -->
  <li 
    v-for="(item,index) of tabtxt" 
    :key="index" 
    :class="{'tab-item-active':index==cTab}"  
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
    tabtxt:Array,
    currentTab:{
      type:Number,
      default:0
    }
  },

  data () {
    return {
      cTab:this.currentTab||0
    }
  },
  methods: {
    itemClick(index){
      // console.log(index);
      this.cTab = index;
      this.$emit('scrollToView',this.cTab)
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