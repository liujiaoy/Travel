<template>
  <div class="detail-main">
    <fade title="景点详情"></fade>
    <common-scroll 
      class="content-top"
      :probeType="3"
    >
      <detail-banner :bannerImg="bannerImg" :gallaryImgs="gallaryImgs" :sightName="sightName"></detail-banner>
      <detail-score class="sc" :scoreContent="scoreContent"></detail-score>
      <!-- <detail-header></detail-header> -->
      <detail-container :mpContent="mpContent"></detail-container>
      <detail-comment></detail-comment>
    </common-scroll>
  </div>
</template>

<script>
import DetailBanner from './components/Banner'
import DetailHeader from './components/Header'
import DetailScore from './components/Score'
import DetailContainer from './components/Container'
import DetailComment from './components/Comment'
import axios from 'axios'
import Fade from '../../common/fade/Fade.vue'
import CommonScroll from 'common/scroll/Scroll.vue'
export default {
  name: 'Detail',
  components: {
    DetailBanner,
    DetailHeader,
    DetailScore,
    DetailContainer,
    DetailComment,
    Fade,
    CommonScroll
  },
  data () {
    return {
      bannerImg: '',
      sightName: '',
      gallaryImgs: [],
      scoreContent: {},
      mpContent: []
    }
  },
  computed: {
    itemid () {
      return this.$route.params.id
    }
  },
  methods: {
    getDetailInfo () {
      axios.get(this.baseURL + '/detail.json')
        .then(this.getDetailInfoSucc)
    },
    getDetailInfoSucc (res) {
      res = res.data
      if (res.ret && res.data) {
        const data = res.data
        this.bannerImg = data.bannerImg
        this.gallaryImgs = data.gallaryImgs
        this.sightName = data.sightName
        this.scoreContent = data
        this.mpContent = data.categoryList
      }
    }
  },
  mounted () {
    this.getDetailInfo()
  }
}
</script>

<style lang="stylus" scoped>
.detail-main
  background-color : #f5f5f5
  .sc
    border-radius : .1rem
    margin-top: -0.1rem
</style>
