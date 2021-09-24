<template>
  <!-- <input 
    v-bind:value="value" 
    v-on:input="$emit('input',$event.target.value)"
  > -->
  <input v-model="message"  :input="$emit('input',message)">
</template>
<script>
export default {
  name:'modelInput',
  props: ['value'],
  data () {
    return {
      message:"22"
    }
  },
  methods: {
  },
  mounted () {
  }
}
</script>
<style lang="stylus" scoped>
</style>