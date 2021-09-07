<template>
  <div id="message">{{message}}</div>
</template>

<script>
export default {
  name:'Lifecycle',
  data () {
    return {
      message:18
    }
  },
  beforeCreate (){
    console.log(this.message);
    console.log(document.getElementById("message"));
    console.log("------------------beforeCreate");
  },
  created (){
    console.log(this.message);
    console.log(document.getElementById("message"));
    console.log("------------------created");
  },
  beforeMount (){
    console.log(this.message);
    console.log(document.getElementById("message"));
    console.log("------------------beforeMount");
  },
  mounted (){
    console.log(this.message);
    console.log(document.getElementById("message"));
    console.log("------------------beforeCreate");
  },
  beforeDestroy (){
    alert("确定要离开吗")
    console.log("------------------beforeDestory");
  },
  destoryed (){
    console.log("------------------destoryed");
  }
}
</script>

<style>

</style>