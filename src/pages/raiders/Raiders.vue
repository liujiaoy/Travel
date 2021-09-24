<template>
  <div>
    <nav-bar>
      <div slot="center">攻略社区</div>
    </nav-bar>
  </div>
</template>
<script>
import NavBar from '../../common/navbar/NavBar.vue'
import { getData } from '../../api/test'
export default {
  components: { NavBar },
  name: 'Raiders',
  data () {
    return {
    }
  },
  methods: {
     getMock () {
      getData().then(res => {
        console.log(res.data)
      })
    }
  },
  mounted () {
    this.getMock()
  }
}
</script>
<style lang="stylus" scoped>
</style>
