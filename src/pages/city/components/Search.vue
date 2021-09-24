<template>
  <div>
    <!-- 输入框 -->
    <div class="search">
      <input
        class="search-input"
        type="text"
        placeholder="输入城市名/拼音"
        v-model="keyword"
      />
      <slot></slot>
    </div>
    <!-- 搜索结果 -->
    <div
      v-show="keyword"
      class="search-content"
      ref="search"
    >
      <ul>
        <li
          v-for="item of list"
          :key="item.id"
          class="search-result border-bottom"
          @click="handleCityClick(item.name)"
        >{{item.name}}
        </li>
        <li class="search-result border-bottom" v-show="hasNoData">没找到</li>
      </ul>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import Bscroll from 'better-scroll'
import { mapMutations } from 'vuex'
export default {
  name: 'CitySearch',
  data () {
    return {
      keyword: '',
      list: [],
      timer: null
    }
  },
  computed: {
    hasNoData () {
      return !this.list.length
    }
  },
  watch: {
    keyword () {
      if (this.timer) {
        clearTimeout(this.timer)
      }
      if (!this.keyword) {
        this.list = []
        return
      }
      this.timer = setTimeout(() => {
        const result = []
        // console.log(this.cities);
        for (let i in this.cities) {
          this.cities[i].forEach((value) => {
            if (value.spell.indexOf(this.keyword) > -1 || value.name.indexOf(this.keyword) > -1) {
              result.push(value)
            }
          })
        }
        this.list = result
      }, 100)
    }
  },
  methods: {
    handleCityClick (city) {
      this.cchangeCity(city)
      // this.$router.push('/')
      this.keyword = ''
    },
    getCityInfo () {
      axios.get(this.baseURL + '/city.json')
        .then(this.getCityInfoSucc)
    },
    getCityInfoSucc (res) {
      res = res.data
      if (res.ret && res.data) {
        const data = res.data
        this.cities = data.cities
      }
    },
    //将this.$store.commit('cchangeCity')映射成this.cchangeCity(city)
    ...mapMutations(['cchangeCity'])
  },
  created (){
    this.getCityInfo()
  },
  //这里不能用created代替，$refs需要等到页面加载完成才能获取到
  mounted () {
    this.scroll = new Bscroll(this.$refs.search, {
      click: true
    })
  }
}
</script>

<style lang="stylus" scoped>
  .search
    display: flex
    height: .62rem
    background: #25A4BB
    padding: .1rem
    .search-input
      flex: 1
      border: .02rem solid #25A4BB
      width: 100%
      box-sizing: border-box
      border-radius: .6rem
      padding: .1rem
      ellipsis()
  .search-content
    position: absolute
    overflow: hidden
    z-index: 999
    top: .8rem
    right: 0
    left: 0
    bottom:0
    background: #eee
    .search-result
      font-size: .32rem
      height: .64rem
      line-height: .64rem
      padding-left: .2rem
      background: #F7F7F7
    border-bottom
      color: #000000
</style>
