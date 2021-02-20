<template>
  <div>
    <detail-banner></detail-banner>
    <detail-score></detail-score>
    <detail-header></detail-header>
  </div>
</template>

<script>
import DetailBanner from './components/Banner'
import DetailHeader from './components/Header'
import DetailScore from './components/Score'
export default {
  name: 'Detail',
  components: {
    DetailBanner,
    DetailHeader,
    DetailScore
  }
}
</script>

<style lang="stylus" scoped>
</style>
