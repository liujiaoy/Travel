<template>
  <div class="container">
    <router-link to="/waiting">
      <div class="score sc-item">
        <div class="sc-item-left">
          <div class="sc-one sc-yellow"><span class="sc-score-large">{{this.scoreContent.score}}</span>分{{scoreContent.scoreText}}<span class="sc-score-dj">{{scoreContent.level}}</span></div>
          <div class="sc-gray"><span class="sc-score-pl">{{scoreContent.commentNum}} 条评论</span><span class="sc-score-gl">{{scoreContent.raidersNum}}条攻略</span></div>
          <div class="iconfont icon-go"><i class="iconarrow-right"></i></div>
        </div>
      </div>
    </router-link>
    <router-link to="/waiting">
      <div class="sc-desc sc-item">
        <div class="sc-item-right">
          <div class="sc-one"><span class="sc-desc-title">景点简介</span></div>
          <div class="sc-gray"><span class="sc-desc-text">开放时间、贴士</span></div>
          <div class="iconfont icon-go"><i class="iconarrow-right"></i></div>
        </div>
      </div>
    </router-link>
    <div class="addr"><i class="iconfont">&#xe63d;</i>{{this.scoreContent.address}}</div>
  </div>
</template>

<script>
export default {
  name: 'DetailScore',
  props: {
    scoreContent: Object
  },
  mounted () {
    // console.log(this.scoreContent)
  }
}
</script>

<style lang="stylus" scoped>
@import '~styles/varibles.styl';
  .container
    box-sizing: border-box
    position: relative
    height: 2rem
    background: #fff
    font-size:0
    .sc-item
      box-sizing: border-box
      width: 50%
      height: 1.16rem
      display:inline-block
      position: relative
      vertical-align:top
      font-size:.30rem
      padding: .16rem .16rem .1rem .16rem
      border-right: .01rem solid #efffef
      border-bottom: .01rem solid #efffef
    .sc-one
      height: .5rem
      line-height: .5rem
  .sc-yellow
    color: $yellowFont
  .sc-gray
    color: #9e9e9e
    font-size: .2rem
    padding: .1rem 0
  .sc-score-large
    font-size: .44rem
  .sc-score-dj,.sc-score-gl
    padding-left: .2rem
  .icon-go
    position:absolute
    right .1rem
    top:50%
    margin-top: -.12rem
  .sc-desc-title
    vertical-align:sub
  .addr
    padding: .16rem .16rem .1rem .16rem
    border-right: .01rem solid #efffef
    border-bottom: .01rem solid #efffef
    font-size:.30rem
</style>
