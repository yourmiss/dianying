<template>
    <div>
        <van-swipe class="my-swipe" :autoplay="3000" indicator-color="blue" :key="datalist.length">
            <van-swipe-item v-for="data in datalist" :key="data.id"
            class="filmswiperitem">
              <!-- {{data }} -->
              <img :src="data.imgUrl"/>
              <!-- {{ data.title }} -->
              </van-swipe-item>

        </van-swipe>
        <film-header class="sticky"></film-header>
 
        <router-view></router-view>

    </div>
</template>
<script>
import filmSwiper from '@/components/filmSwiper.vue'
import filmHeader from '@/components/filmHeader.vue'
import filmSwiperItem from '@/components/filmSwiperItem.vue'
import axios from 'axios'

export default {
  data(){
    return{
      datalist:[]
    }
  },
  mounted(){
    axios.get('/banner.json').then(res=>{
      // console.log(res.data)
      this.datalist = res.data.banner
    })
    setTimeout(()=>{
      // this.datalist=['aaa','bbb','ccc']
    },2000)
  },
  components: {
    filmSwiper,
    filmSwiperItem,
    filmHeader
  }
}
</script>
<style scoped lang="scss">
.my-swipe .van-swipe-item {
    color: #fff;
    font-size: 20px;
    line-height: 0px;
    text-align: center;
    // background-color: #39a9ed;
  }
.filmswiperiterm{
  div img{
    width: 100%;
    background-position: center;
    background-size: cover;
    display:block;
  }
}
.sticky{
  position:sticky;
  top: 0px;
  background: white;
  z-index: 100;
}
</style>