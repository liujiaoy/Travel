<template>
  <div>
    <div class="box" ref="box">
      <div class="col" :style="colwidth" v-for="(itemdata,name,index) in dataList" :key=index  ref="col">
        <transition-group name="list">
          <div class="item border-right border-bottom" v-for="item of itemdata" :key="item.id" >
            <img src="../../../assets/img/1.jpg" :data-src="item.imgUrl"  ref="img" >
            <div class="title">{{item.title}}</div>
            <slot></slot>
          </div>
        </transition-group>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'Waterfall',
  props:{
    col:Number,
    mainMenuList:Array
  },
  data() {
    return{
      // mainMenuList: [],
      dataList:{},
      // col:2,
      scrolltime:null
     
    }
  },
  computed:{
    //列宽
    colwidth:function(){
      return{
        width:(100/Object.keys(this.dataList).length)+"%",
        color:"red"
      }
    },
   
    
  },
  created(){
    this.initdataList();
  },
  mounted() {
    // var _this = this;
    //初始化datalist
    // console.log(this.dataList)
    // console.log(this.$refs.box); 
    window.addEventListener('scroll',this.listenScroll, true)
    // this.$nextTick(()=>{
    //   testMockData().then( res =>{
    //     this.mainMenuList = res.data
    // debugger
    //     this.mountMenu()
    //   })
    // })
     
  },
  methods: {
    //加载数据
    mountMenu(arg) {
      // console.log(this.dataList.length)
      var temp = this.mainMenuList
      var index = arg || 0
      var refName = this.selectCol();
      var _this =  this;
      if (temp.length > index) {
        // this.$set(this.dataList[refName],this.dataList[refName].length,this.mainMenuList[index])
        this.dataList[refName].push(this.mainMenuList[index])
        // console.log(this.dataList)

        this.$nextTick(() => {
      
          // console.log(img.offsetWidth)
          let newimg = new Image();
          newimg.src = this.mainMenuList[index].imgUrl;

          // newimg.width = img.offsetWidth;
          newimg.onload = function(){
            // console.log(_this.dataList)
            // console.log(newimg.width)
            // console.log(newimg.height) 
            let scale = newimg.height/newimg.width;
            // console.log(scale)
            let img = _this.$refs.img[index];
            // let item = img.parentNode        
            // console.log(img.width)
            img.height=img.width*scale;
            // console.log(img.height)
            _this.lazyloadimg(index)  
            _this.mountMenu(index + 1)          
            
          }
          
        })
      }
    },
    //选择高度最矮的列
    selectCol() {
      let cols = this.$refs.col;//所有列
      let lowcol=0;
      let lowheight = cols[lowcol].offsetHeight;
      for (let index = 0; index<this.col; index++) {
        let item = cols[index];
        let itemheight = item.offsetHeight;
        if(lowheight >= itemheight){
          lowheight = itemheight;
          lowcol = index;
        }
      }
      return lowcol;
    },
    //只显示当前页面的image
    lazyloadimg(index) {
      let scrollT = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
      let winH = document.documentElement.clientHeight;
      let elem = this.$refs.img[index];
      if(elem == undefined){return}
      let elemposition  = elem.getBoundingClientRect();
      // console.log(elemposition)
      let elemTop = elemposition.top;
      let elemBot = elemposition.bottom;
      if(elem.dataset.src&&((elemTop>0 && elemTop<winH)||(elemBot>0 && elemBot<winH))){
        elem.src = elem.dataset.src;
        elem.dataset.src = "";
        // this.lazyloadimg(index+1)
      }
    },
    initdataList(){
      for(let i = 0;i<this.col;i++){
        this.$set(this.dataList,i,[])
        // this.dataList[i]=[];
      }
    },
    listenScroll(){
      // console.log("scroll")
      clearTimeout(this.scrolltime);
      this.scrolltime = setTimeout(this.handleScroll,200);
    },
    handleScroll(){
      // console.log(111)
      let length = 0;
      while(length<this.mainMenuList.length){
        this.lazyloadimg(length);
        length ++;
      }
      
    }
  }
}
</script>
<style lang="stylus" scoped>
*
  box-sizing border-box
.box
  width 100%
  display flex
  align-items flex-start
.col img
  width 100%
  padding .1rem
.item .title
  text-align center
  line-height .5rem
.border-right,.border-bottom
  border 1px solid #ddd
</style>
