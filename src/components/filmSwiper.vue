<template>
    <div class="swiper-container liuyu">
    <div class="swiper-wrapper">
        <slot></slot>
    </div>
    <div class="swiper-pagination"></div>
    </div>
</template>
<script>
import Swiper from 'swiper/bundle'
import 'swiper/css/bundle'

export default {
  props: {
    loop: {
      type: Boolean,
      default: true
    }
  },
  mounted () {
    // console.log("mounted")
     new Swiper('.liuyu', {
      // direction:"vertical", //垂直
      // 如果需要分页器
      pagination: {
        el: '.swiper-pagination'
      },
      loop: this.loop,
      autoplay: {
        delay: 2500,
        disableOnInteraction: false
      }
    })
  }
}
</script>
<style scoped lang="scss">
.swiper-pagination{
  text-align: center;
  transition: 300ms opacity;
  position: relative;
  bottom: var(--swiper-pagination-bottom, 0px);
}
</style>
