<template>
    <div class="swiper-container " :class="name">
        <div class="swiper-wrapper">
            <slot></slot>
        </div>
    </div>
</template>
<script>
import Swiper from 'swiper/bundle'
import 'swiper/css/bundle'

export default {
  props: {
    preview:{
        type:Number,
        default: 1
    },
    name:{
        type:String,
        default:'liuyu'

    },    
    loop: {
      type: Boolean,
      default: true
    }
  },
  mounted () {
    // console.log("mounted")
     new Swiper('.' + this.name, {
        slidesPerView: this.preview,
        paginationClickable: false,
        spaceBetween: 30,
        freeMode: true
     
    })
  }
}
</script>
<style scoped lang="scss">

</style>
