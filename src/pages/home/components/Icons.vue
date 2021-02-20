<template>
  <div class="icons">
    <swiper :options="swiperOption">
      <swiper-slide v-for ="(page,index) of pages" :key="index">
        <router-link tag="div"
          class="icon-item"
          v-for="item of page"
          :key="item.id"
          :to="'/detail/' + item.id"
        >
          <div class="item-img" >
            <img class="img"  :src="item.imgUrl">
          </div>
          <p class="icon-desc">{{item.desc}}</p>
        </router-link>
      </swiper-slide>
    </swiper>
  </div>
</template>

<script>
export default {
  name: 'HomeIcons',
  props: {
    iconList: Array
  },
  data () {
    return {
      swiperOption: {
        autoplay: false
      }
    }
  },
  computed: {
    pages () {
      const pages = []
      this.iconList.forEach((item, index) => {
        const page = Math.floor(index / 8)
        if (!pages[page]) {
          pages[page] = []
        }
        pages[page].push(item)
      })
      return pages
    }
  }
}
</script>

<style lang="stylus" scoped>
  @import '~styles/mixins.styl'
  .icons
    height: 0
    padding-bottom: 50%
    margin-top: .04rem
    margin-bottom: .04rem
    .icon-item
      position: relative
      width: 25%
      height: 0
      padding-bottom: 25%
      float:left
      overflow:hidden
      .item-img
        position: absolute
        top: 0
        left: 0
        right: 0
        bottom: 25%
        padding:.04rem
        .img
          height: 100%
          display: block
          margin: 0 auto
      .icon-desc
        position: absolute
        left: 0
        right: 0
        bottom: 5%
        text-align:center
        ellipsis()
</style>
