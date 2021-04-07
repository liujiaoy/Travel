<template>
  <div class="detail-comment">
    <div class="title border-bottom">{{data.title}}</div>
    <div class="subtitle">{{data.subTitle}}</div>
    <div class="item"
    v-for="(item,index) of comment" :key='index'
    >
      <div v-if="index < 4">
        <div class="item-top">
            <div class="item-top-star">
              <i class="iconfont item-star-yellow">&#xe621;</i>
              <i class="iconfont item-star-gray">&#xe621;</i>
            </div>
            <div class="item-top-userinfo"><span>{{item.name}}&nbsp;</span><span>{{item.date}}</span></div>
        </div>
        <div class="item-content">
            <div>
            {{item.content}}
            </div>
        </div>
        <div class="item-img">
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Comment',
  data () {
    return {
      'data': {
        title: '用户评论'
      },
      'comment': [{
        name: '张三',
        avatar: 'static/img/1.jpg',
        date: '2019-06-06',
        content: 'nice'
      }, {
        name: '李四',
        avatar: 'static/img/2.jpg',
        date: '2019-06-06',
        content: '我来凑字数凑字数凑字数凑字数凑字数凑字数凑字数凑字数凑凑字数凑字数凑字数凑字数凑字数凑字数凑字数凑字数凑字数凑字数凑字数凑字数凑字数凑字数凑字数凑字数凑字数凑字数凑字数凑字数凑字数字数凑字数凑字数凑字数凑字数凑字数凑字数凑字数凑字数凑字数'
      }, {
        name: '李四',
        avatar: 'static/img/1.jpg',
        date: '2019-06-06',
        content: '我来凑字数凑字数凑我来凑字数凑字数凑我来凑字数凑字数凑我来凑字数凑字数凑我来凑字数凑字数凑我来凑字数凑字数凑我来凑字数凑字数凑我来凑字数凑字数凑我来凑字数凑字数凑我来凑字数凑字数凑字数凑字数凑字数凑字数凑字数凑字数凑凑字数凑字数凑字数凑字数凑字数凑字数凑字数凑字数凑字数凑字数凑字数凑字数凑字数凑字数凑字数凑字数凑字数凑字数凑字数凑字数凑字数字数凑字数凑字数凑字数凑字数凑字数凑字数凑字数凑字数凑字数'
      }, {
        name: '李四',
        avatar: 'static/img/2.jpg',
        date: '2019-06-06',
        content: '我来凑字数凑字数凑字数凑字数凑字数凑字数凑字数凑字数凑凑字数凑字数凑字数凑字数凑字数凑字数凑字数凑字数凑字数凑字数凑字数凑字数凑字数凑字数凑字数凑字数凑字数凑字数凑字数凑字数凑字数字数凑字数凑字数凑字数凑字数凑字数凑字数凑字数凑字数凑字数'
      }, {
        name: '李四',
        avatar: 'static/img/2.jpg',
        date: '2019-06-06',
        content: '我来凑字数凑字数凑字数凑字数凑字数凑字数凑字数凑字数凑凑字数凑字数凑字数凑字数凑字数凑字数凑字数凑字数凑字数凑字数凑字数凑字数凑字数凑字数凑字数凑字数凑字数凑字数凑字数凑字数凑字数字数凑字数凑字数凑字数凑字数凑字数凑字数凑字数凑字数凑字数'
      }, {
        name: '李四',
        avatar: 'static/img/2.jpg',
        date: '2019-06-06',
        content: '我来凑字数凑字我来凑字数凑数凑字数数凑字数'
      }
      ]
    }
  }
}
</script>

<style lang="stylus" scoped>
@import '~styles/mixins.styl'
@import '~styles/varibles.styl'
  .detail-comment
    margin-top: .2rem
    background-color: #fff
    .title
      font-size : .4rem
      font-weight : bold
      padding : .4rem 0 0 .2rem
    .item
      padding: 0 .1rem
    .item-top div
      display: inline-block
    .item-top-star
      position: relative
      width: 1.4rem
      height: .2rem
    .item-top-star .iconfont
      font-size: .06rem
      position: absolute
      top: 0
      left: 0
      overflow: hidden
    .item-star-gray
      color: $lightGray
    .item-star-yellow
      width: 20%
      color: $yellowFont
      z-index: 2
    .item-top-userinfo
      float: right
      color: $darkGray
      font-size: .2rem
    .item-content
      width: 100%
      wrap_ellipsis()
      margin: .2rem 0
</style>
