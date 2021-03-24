<template>
  <div class="container">
    <div class="score mp-item">
      <div class="mp-item-left">
        <div class="mp-yellow"><span class="mp-score-large">{{score}}</span>{{scoreText}}<span class="mp-score-dj">{{level}}</span></div>
        <div class="mp-gray"><span class="mp-score-pl">{{commentNum}}</span><span class="mp-score-gl">{{raidersNum}}</span></div>
      </div>
    </div>
    <div class="mp-desc mp-item">
      <div class="mp-item-right">
        <div><span class="mp-desc-title">景点简介</span></div>
        <div class="mp-gray"><span class="mp-desc-text">开放时间、贴士</span></div>
      </div>
    </div>
    <div class="addr">{{address}}</div>
  </div>
</template>

<script>
export default {
  name: 'DetailScore',
  props: {
    scoreContent: Object
  },
  data () {
    return {
      score: this.scoreContent.score,
      scoreText: '分',
      level: this.scoreContent.level,
      commentNum: this.scoreContent.commentNum + '条评论',
      raidersNum: this.scoreContent.raidersNum + '条攻略',
      address: this.scoreContent.address
    }
  },
  mounted () {
    console.log(this.scoreContent)
  }
}
</script>

<style lang="stylus" scoped>
  .container
    box-sizing: border-box
    position: relative
    height: 2rem
    background: #fff
    .mp-item
      width: 49.1%
      display:inline-block
      .mp-item-right,.mp-item-left
        padding: .16rem .16rem .1rem .16rem
        border-right: .01rem solid #efefef
        border-bottom: .01rem solid #efefef
  .mp-yellow
    color: #ff8300
  .mp-gray
    color: #9e9e9e
    font-size: .24rem
    padding: .1rem 0
  .mp-score-large
    font-size: .44rem
  .mp-score-dj,.mp-score-gl
    padding-left: .2rem
</style>
