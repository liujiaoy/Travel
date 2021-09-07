<template>
  <div>
    <nav-bar>
      <div slot="center">订单中心</div>
    </nav-bar>
    <lifecycle></lifecycle>
  </div>
</template>

<script>
import NavBar from '../../common/navbar/NavBar.vue'
import Lifecycle from './components/lifecycle.vue';
export default {
  components: { NavBar, Lifecycle },
  name: 'Orders',
  data (){
    return {
      newArr:[]
    }
  },
  mounted () {
    //第一题
    // var a = this.mySetInterVal(function(){console.log("111")}, 2000, 2000);
    // a.start();
    // a.stop();
    //第二题
    // console.log(this.mergeSortnew([1,[7,10,15],[10,20,30,85,100],[4,9,12,22]]));
    // console.log(this.newArr.sort())
    //第三题
    this.testdeepclone();
  },
  methods: {
    //第 1 题：写一个 mySetInterVal(fn, a, b),每次间隔 a,a+b,a+2b,...,a+nb 的时间，然后写一个 myClear，停止上面的 mySetInterVal 
    mySetInterVal(fn, a, b){
      let index = 0;//第几次调用
      let timer;//计时器
      let start = ()=>{
        console.log(a+index*b)
        timer = setTimeout(function(){
          fn();
          index++;
          start();
        },a+index*b)
      };
      let stop= ()=>{
        clearTimeout(timer);
        index = 0;
      }
      // start();
      return{start,stop}
    },
    // 2.实现归并排序
    //解题思路：了解什么是归并排序，即先把数组对半分至每个小数组只有两个有序数，再讲数组两两合并
    //例如[1,8,9,25,10,3,4,6,11]
    //[1,8,9,25,10][3,4,6,11]
    //[1,8,9],[25,10],[3,4],[6,11]
    //[1,8],[9],[25,10],[3,4],[6,11]
    //[1,8],[9],[10,25],[3,4],[6,11]
    //[1,8,9],[10,25],[3,4],[6,11]
    //[1,8,9,10,25],[,11]
    //[1,3,4,6,8,9,10,11,25]
    mergeSort(arr){
      if(arr.length<2){
        return arr;
      }
      let mid = Math.floor(arr.length /2);
      let left = arr.slice(0,mid);
      let right = arr.slice(mid,arr.length);
      return this.merge(this.mergeSort(left),this.mergeSort(right))
    },
    merge (left,right){
      //合并两个有序数组
      const result = [];
      while(left.length && right.length){
        if(right[0]<=left[0]){
          result.push(right.shift())
        }else{
          result.push(left.shift())
        }
      }
      while(left.length){
        result.push(left.shift())
      }
      while(right.length){
        result.push(right.shift())
      }
      return result;
    },
    //2.1合并二维有序数组成一维有序数组
    //例如：[[1,2,8],[7,10,15],[10,20,30,85,100],[4,9,12,22]]
    //有点像做了一半的归并排序
    mergeSortnew(arr){
      if(arr.length == 0){
        return [];
      }
      while(arr.length>1){
        let left = arr.shift();
        let right = arr.shift();
        let mergeArr =  this.merge(left,right);
        arr.push(mergeArr)
      }
      return arr[0]
    },

    ////第三题:多种方式实现斐波那契数列
    //斐波那契数列：形如：0 1 1 2 3 5 8 13 .... a b (a+b) 即F[n]=F[n-1]+F[n-2](n>=2,F[0]=0,F[1]=1);
    FibSqu(n){
      // let result = [];
      if(n < 0) throw new Error('输入的数字不能小于0');
      if(n < 2){
        return n;
      }else{
        return this.FibSqu(n-1)+this.FibSqu(n-2);
      }
    },
    fib(n){
      let fn = 1;
      let fn1 = 0;
      let newfn;
      for(let i = 1;i<n;i++){
        newfn = fn + fn1;
        fn1 =fn;
        fn = newfn;
      }
      return newfn;
    },
    fib1(n){
      if(n < 0) throw new Error('输入的数字不能小于0');
      if (n < 2) return n;
      function _fib(n, a, b) {
        if (n === 0) return a;
        return _fib(n - 1, b, a + b);//把前两个数当参数传回去
      }
      return _fib(n, 0, 1);
    },
    //深拷贝
    deepClone(obj) {
      var result = {};
      for (var i in obj) {
          if(typeof obj[i] === "object"){
              result[i] = this.deepClone(obj[i])
          }else{
              result[i] = obj[i];
          }
      }
      return result;
    },
    testdeepclone(){
      let obj = {
        a:1,
        b:{
          c:1
        }
      }
      let cloneobj = this.deepClone(obj);
      cloneobj.b.c=2;
      console.log(cloneobj);
      console.log(obj);
    }
  }
}
</script>
<style>
</style>
