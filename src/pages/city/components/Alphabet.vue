<template>
  <div class="alpahabet">
    <div
      class="cityList"
      v-for="item of letters"
      :key="item"
      :ref="item"
      @touchstart="handleTouchStart"
      @touchmove="handleTouchMove"
      @touchEnd="handleTouchEnd"
      @click="handleLetterClick"
    >
    {{item}}
    </div>
  </div>
</template>

<script>
export default {
  name: 'CityAlphabet',
  props: {
    cities: Object
  },
  data () {
    return {
      touchStatus: false,
      startY: 0,
      timer: null
    }
  },
  computed: {
    letters () {
      const letters = []
      for (let i in this.cities) {
        letters.push(i)
      }
      return letters
    }
  },
  methods: {
    handleLetterClick (e) {
      this.$emit('change', e.target.innerText)
    },
    handleTouchStart () {
      this.touchStatus = true
    },
    handleTouchMove (e) {
      if (this.touchStatus) {
        if (this.timer) {
          clearTimeout(this.timer)
        }
        const cityListY = this.$refs['A'][0].offsetHeight
        this.timer = setTimeout(() => {
          const touchY = e.touches[0].clientY - 84
          const index = Math.floor((touchY - this.startY) / cityListY)
          if (index >= 0 && index < this.letters.length) {
            this.$emit('change', this.letters[index])
          }
        }, 15)
      }
    },
    handleTouchEnd (e) {
      this.touchStatus = false
    }
  },
  updated () {
    this.startY = this.$refs['A'][0].offsetTop
  }
}
</script>

<style lang="stylus" scoped>
  .alpahabet
    display: flex
    flex-direction: column
    justify-content: center
    position: absolute
    top: 1.68rem
    right: 0
    bottom: 0
    width: .6rem
    text-align: center
    font-size: .2vh
    .cityList
      line-height: 2.5vh
      color: #0077AA
</style>
