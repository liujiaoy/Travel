<!-- The ref attr used to find the swiper instance -->
<template>
  <div class="swiper">
    <swiper
      class="swiper-content"
      :options="swiperOption"
      v-if="swiperList.length"
    >
      <!-- slides -->
      <swiper-slide v-for="item of swiperList" :key="item.id">
        <img class="swiper-img"
             :src="item.imgUrl"/>
      </swiper-slide>
      <!-- Optional controls -->
      <div class="swiper-pagination"  slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>
export default {
  name: 'HomeSwiper',
  props: {
    swiperList: Array
  },
  data () {
    return {
      swiperOption: {
        pagination: '.swiper-pagination',
        loop: true,
        autoplay: 1000
      }
    }
  }
}
</script>

<style lang="stylus" scoped>
  .swiper>>> .swiper-pagination-bullet-active
    background: lightblue
  .swiper
    width: 100%
    height: 0
    padding-bottom: 31.25%
    overflow: hidden
    .swiper-content
      width: 100%
      height: 0
      padding-bottom: 31.25%
    .swiper-img
      width: 100%
</style>
