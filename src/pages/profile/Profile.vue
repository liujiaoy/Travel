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
import Waterfall from './components/Waterfall'
export default {
  name: 'Profile',
  components: {
    NavBar,
    Waterfall,
  },
  data() {
    return{
      mainMenuList: [] ,
      col:5
    }
  },
  beforeMount(){
    if(document.body.clientWidth < 750){
      this.col = 2;
    }
  },
  mounted() {
    // var _this = this;
    testMockData().then( res =>{
      this.mainMenuList = res.data
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
