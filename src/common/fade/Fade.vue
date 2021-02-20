<template>
  <div class="fade-animation">
    <transition>
      <slot></slot>
    </transition>
  </div>
</template>

<script>
export default {
  name: 'CommonFade'
}
</script>

<style>
</style>