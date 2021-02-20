<template>
  <div id="app">
    <keep-alive>
       <router-view/>
    </keep-alive>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
@media only screen and (min-width:375px) {
  body{
    position: relative;
    width:375px;
    height:812px;
  }
  #app{
    position: relative;
    width:375px;
    height:812px;
  }
}
</style>
