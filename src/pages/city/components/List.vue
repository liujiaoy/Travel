<template>
  <div class="list" ref="wrapper">
    <div>
      <div class="area">
        <div class="title border-bottom">当前城市</div>
        <div class="content">
          <div class="button"  @click="handleCityClick(currentCity)">{{this.currentCity}}</div>
        </div>
      </div>
      <div class="area">
        <div class="title border-bottom">热门城市</div>
          <div class="content">
            <div
              class="button"
              v-for="item of hotCities"
              :key='item.id'
              @click="handleCityClick(item.name)"
            >
              {{item.name}}
            </div>
          </div>
      </div>
      <div
        class="area"
        v-for="(item, key) of cities"
        :key="key"
        :ref="key"
      >
        <div class="title border-bottom">{{key}}</div>
        <div>
          <div
            class="item-list border-bottom"
            v-for="innerItem of item"
            :key="innerItem.id"
            @click="handleCityClick(innerItem.name)"
          >{{innerItem.name}}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Bscroll from 'better-scroll'
import { mapState, mapMutations } from 'vuex'
export default {
  name: 'CityList',
  props: {
    hotCities: Array,
    cities: Object,
    letter: String
  },
  watch: {
    letter () {
      if (this.letter) {
        const element = this.$refs[this.letter][0]
        this.scroll.scrollToElement(element)
      }
    }
  },
  computed: {
    ...mapState({
      currentCity: 'city'
    })
  },
  methods: {
    handleCityClick (city) {
      this.cchangeCity(city)
      this.$router.push('/')
    },
    ...mapMutations(['cchangeCity'])
  },
  mounted () {
    this.scroll = new Bscroll(this.$refs.wrapper, {
      click: true
    })
  }
}
</script>

<style lang="stylus" scoped>
  .border-bottom
    &:before
      border-color: #ccc
  .list
    overflow: hidden
    position: absolute
    top: 1.68rem
    left: 0
    right: 0
    bottom: 0
    .area
      .title
        background: $darkColor
        height: .54rem
        line-height: .54rem
        padding-left: .2rem
      .border-bottom
        border-color: #000
      .content
        // height: 2.0rem
        // padding-right: .86rem
        overflow: auto
        .button
          float: left
          width: 1.92rem
          height: .40rem
          border: .02rem solid #ccc
          line-height: .36rem
          font-size: .34rem
          border-radius: .06rem
          background: #fff
          margin: .1rem
          // margin-left: .2rem
          padding-top: .1rem
          padding-bottom: .04rem
          text-align: center
      .item-list
          height: .74rem
          line-height: .74rem
          padding-left: .2rem
          font-size: .32rem
</style>
