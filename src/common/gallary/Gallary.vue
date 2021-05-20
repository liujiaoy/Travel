<template>
  <div class="container" @click="handleClickBack">
    <swiper
      ref="mySwiper"
      class="swiper-content"
      :options="swiperOption"
    >
      <!-- slides -->
      <swiper-slide v-for="(value,index) in imgList" :key="index" >
        <img class="swiper-img"
             :src="value"/>
      </swiper-slide>
      <!-- Optional controls -->
      <div class="swiper-pagination"  slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>
export default {
  name: 'CommonGallary',
  props: {
    imgList: Array,
    clickIndex: Number
  },
  data () {
    return {
      swiperOption: {
        pagination: '.swiper-pagination',
        paginationType: 'fraction',
        initialSlide: this.clickIndex || 0,
        observeParents: true,
        observer: true
      },
      container: true
    }
  },
  methods: {
    handleClickBack () {
      this.$emit('close')
    }
  }
}
</script>

<style lang="stylus" scoped>
  .container >>> .swiper-container
    overflow: inherit
  .container
    position: fixed
    top: 0
    right: 0
    bottom: 0
    left: 0
    background: #000
    z-index: 99
    display: flex
    flex-direction: column
    justify-content: center
    .swiper-content
      width: 100%
      .swiper-img
        width: 100%
    .swiper-pagination
      bottom: -1rem
      color: #fff
</style>
