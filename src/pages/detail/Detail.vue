<template>
  <div>
    <detail-banner :bannerImg="bannerImg" :gallaryImgs="gallaryImgs" :sightName="sightName"></detail-banner>
    <detail-score class="mp" :scoreContent="scoreContent"></detail-score>
    <detail-header></detail-header>
    <detail-container></detail-container>
  </div>
</template>

<script>
import DetailBanner from './components/Banner'
import DetailHeader from './components/Header'
import DetailScore from './components/Score'
import DetailContainer from './components/Container'
import axios from 'axios'
export default {
  name: 'Detail',
  components: {
    DetailBanner,
    DetailHeader,
    DetailScore,
    DetailContainer
  },
  data () {
    return {
      bannerImg: '',
      gallaryImgs: [],
      sightName: '',
      scoreContent: {}
    }
  },
  computed: {
    itemid () {
      return this.$route.params.id
    }
  },
  methods: {
    getDetailInfo () {
      axios.get('/api/detail.json')
        .then(this.getDetailInfoSucc)
    },
    getDetailInfoSucc (res) {
      res = res.data
      if (res.ret && res.data) {
        const data = res.data
        this.bannerImg = data.bannerImg
        this.gallaryImgs = data.gallaryImgs
        this.sightName = data.sightName
        this.scoreContent.score = data.score
        this.scoreContent.level = data.level
        this.scoreContent.raidersNum = data.raidersNum
        this.scoreContent.commentNum = data.commentNum
        this.scoreContent.address = data.address
      }
    }
  },
  mounted () {
    this.getDetailInfo()
  }
}
</script>

<style lang="stylus" scoped>
  .mp
    border-radius : .1rem
    margin-top: -0.1rem
</style>
