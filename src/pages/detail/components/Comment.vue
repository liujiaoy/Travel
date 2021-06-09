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
              <i class="iconfont item-star-yellow" :style="'width:'+item.satisfaction">&#xe621;</i>
              <i class="iconfont item-star-gray">&#xe621;</i>
            </div>
            <div class="item-top-userinfo"><span>{{item.name}}&nbsp;</span><span>{{item.date}}</span></div>
        </div>
        <div class="item-content">
            <div>
            {{item.content}}
            </div>
        </div>
        <div class="item-img"
        @click="handleClickIn(item.img)"
        v-if="item.img"
        >
          <div class="img border"
           v-for="(item,index) of item.img"
           :key="index"
           @click="updateClickIndex(index)"
           ><img :src=item></div>
        </div>
      </div>
      <common-gallary
      :imgList="imgArr"
      :clickIndex="clickIndex"
      v-if="showGallary"
      @close="handleClickOut"
      ></common-gallary>
    </div>
    <div v-show="comment.length >= 4">
      <router-link to="/waiting">
        <div class="item-more">查看更多</div>
      </router-link>
    </div>
  </div>
</template>

<script>
import CommonGallary from '@/common/gallary/Gallary'
export default {
  name: 'DetailComment',
  components: {
    CommonGallary
  },
  data () {
    return {
      'data': {
        title: '用户评论'
      },
      'comment': [{
        name: '张三',
        avatar: 'static/img/1.jpg',
        satisfaction: '90%',
        date: '2019-06-06',
        content: 'nice',
        img: ['static/img/1.jpg', 'static/img/2.jpg', 'static/img/3.png', 'static/img/2.jpg']
      }, {
        name: '李四',
        avatar: 'static/img/2.jpg',
        satisfaction: '80%',
        date: '2019-06-06',
        content: '我来凑字数凑字数凑字数凑字数凑字数凑字数凑字数凑字数凑凑字数凑字数凑字数凑字数凑字数凑字数凑字数凑字数凑字数凑字数凑字数凑字数凑字数凑字数凑字数凑字数凑字数凑字数凑字数凑字数凑字数字数凑字数凑字数凑字数凑字数凑字数凑字数凑字数凑字数凑字数',
        img: ['static/img/1.jpg', 'static/img/2.jpg']
      }, {
        name: '李四',
        avatar: 'static/img/3.png',
        satisfaction: '100%',
        date: '2019-06-06',
        content: '我来凑字数凑字数凑我来凑字数凑字数凑我来凑字数凑字数凑我来凑字数凑字数凑我来凑字数凑字数凑我来凑字数凑字数凑我来凑字数凑字数凑我来凑字数凑字数凑我来凑字数凑字数凑我来凑字数凑字数凑字数凑字数凑字数凑字数凑字数凑字数凑凑字数凑字数凑字数凑字数凑字数凑字数凑字数凑字数凑字数凑字数凑字数凑字数凑字数凑字数凑字数凑字数凑字数凑字数凑字数凑字数凑字数字数凑字数凑字数凑字数凑字数凑字数凑字数凑字数凑字数凑字数'
      }, {
        name: '李四',
        avatar: 'static/img/2.jpg',
        satisfaction: '20%',
        date: '2019-06-06',
        content: '垃圾的很啊'
      }, {
        name: '李四',
        avatar: 'static/img/2.jpg',
        satisfaction: '10%',
        date: '2019-06-06',
        content: '我来凑字数凑字数凑字数凑字数凑字数凑字数凑字数凑字数凑凑字数凑字数凑字数凑字数凑字数凑字数凑字数凑字数凑字数凑字数凑字数凑字数凑字数凑字数凑字数凑字数凑字数凑字数凑字数凑字数凑字数字数凑字数凑字数凑字数凑字数凑字数凑字数凑字数凑字数凑字数'
      }, {
        name: '李四',
        avatar: 'static/img/2.jpg',
        satisfaction: '90%',
        date: '2019-06-06',
        content: '我来凑字数凑字我来凑字数凑数凑字数数凑字数'
      }
      ],
      showGallary: false,
      imgArr: [],
      clickIndex: 0,
      id: ''

    }
  },
  mounted () {
    this.id = this.getCityId()
  },
  methods: {
    handleClickIn (imgArr) {
      this.showGallary = true
      this.imgArr = imgArr
    },
    handleClickOut () {
      this.showGallary = false
    },
    updateClickIndex (index) {
      this.clickIndex = index
    },
    getCityId () {
      console.log(this.$route.params.id)
      return this.$route.params.id
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
    .item-top
      padding: .1rem 0
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
      color: $yellowFont
      z-index: 2
    .item-top-userinfo
      float: right
      color: $darkGray
      font-size: .2rem
    .item-content
      width: 100%
      wrap_ellipsis(3)
      margin: .1rem 0
    .item-img .img
      display: inline-block
      box-sizing: border-box
      padding: 0 .1rem .1rem 0
      width: 25%
      height: 2rem
      overflow: hidden
      img
        width: 100%
        width: 100%
    .item-more
      text-align: center
      color: $darkGray
</style>
