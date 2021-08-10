<template>
  <div>
     <nav-bar>
      <div slot="center">照片墙</div>
    </nav-bar>
    <waterfall 
      :mainMenuList="mainMenuList"
      :col="col"
      ref="waterfall"
    >
    <!-- <div class="title">{{item.title}}</div> -->
    </waterfall>
  </div>
</template>
<script>
import NavBar from '../../common/navbar/NavBar.vue'
import {testMockData} from '../../network/profile.js'
import Waterfall from './components/waterfall.vue'
export default {
  name: 'Profile',
  components: {
    NavBar,
    Waterfall
  },
  data() {
    return{
      mainMenuList: [] ,
      col:2
    }
  },
  mounted() {
    // var _this = this;
    testMockData().then( res =>{
      this.mainMenuList = res.data
      debugger
      this.$nextTick(()=>{
        this.$refs.waterfall.mountMenu();
      })
      
      // this.mountMenu()
    })
     
  },
  methods: {
  }
}
</script>
<style lang="stylus" scoped>
*
  box-sizing border-box
</style>
