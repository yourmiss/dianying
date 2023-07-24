<template>
    <div v-if="filmInfo">
      <detail-header v-scroll="50">
        {{ filmInfo.name }}
      </detail-header>
      <!-- <img :src="filmInfo.poster"/> -->
      <div :style="{
        backgroundImage:'url('+ filmInfo.poster+')'
      }" class="poster"></div>
      <div class="content">
        <div>{{ filmInfo.name }}</div>
        <div>
          <div class="detail-text">{{ filmInfo.category }}</div>
          <div class="detail-text">{{ filmInfo.premiereAt | dataFilter}}上映</div>
          <div class="detail-text">{{ filmInfo.nation }} |{{ filmInfo.runtime }}分钟</div>
          <div class="detail-text" style="
          line-height:15px;" :class="isHidden?'hidden':''">{{ filmInfo.synopsis }}</div>
          <div style="text-align:center"><i class="iconfont icon-moreunfold"
          @click="isHidden=!isHidden" :class="isHidden?' icon-moreunfold':' icon-less'"></i></div>
        </div>
      </div>
      <div>
        <div>演职人员</div>
        <detail-swiper :preview="4" name="actors" class="detailswiper">
        <detail-swiper-item v-for="(data,index) in filmInfo.actors" 
        :key="index">
        <div  :style="{
          backgroundImage:'url('+ data.avatarAddress+')'
          }" class="avatar"></div>
        <!-- <img :src="data.avatarAddress"/> -->
        <div style="text-align:center;fontsize:12px">{{ data.name }}</div>
        <div style="text-align:center;fontsize:13px">{{ data.role }}</div>
        </detail-swiper-item>
        
        </detail-swiper>

      </div>
      <div>
        <div>剧照</div>
        <detail-swiper :preview="3" name="photos" >
        <detail-swiper-item v-for="(data,index) in filmInfo.photos" 
        :key="index">
        <div  :style="{
          backgroundImage:'url('+ data+')'
          }" class="photos" @click="handlepreview(index)">
        </div>       
        </detail-swiper-item>
        
        </detail-swiper>

      </div>
    </div>
</template>
<script>
import axios from 'axios'
import http from '@/utill/http.js'
import https from '@/utill/https.js'
import moment from 'moment'
import Vue from 'vue'
import detailHeader from '@/components/detail/DetailHeader.vue'
import detailSwiper from '@/components/detail/detailSwiper.vue'
import detailSwiperItem from '@/components/detail/detailSwiperItem.vue'
import { ImagePreview ,Toast} from 'vant';


moment.locale('zh-cn')

Vue.filter("dataFilter",(data)=>{
  return moment(data*1000).format('YYYY-MM-DD')
})
Vue.directive('scroll',{
  inserted(el,binding){
    // console.log(binding.value)
    el.style.display = 'none'

    window.onscroll = ()=>{
      // console.log('scroll')
      if((document.documentElement.scrollTop || document.body.scrollTop)> 50){
        el.style.display = 'block'
      }else{
        el.style.display = 'none'
      }
    }
  },
  unbind (){
    window.onscroll = null
  }
})
export default {
  data(){
    return {
      filmInfo: null,
      isHidden: true,

    }
  },
  components:{
    detailSwiper,
    detailSwiperItem,
    detailHeader
  },
  methods:{
    handlepreview(index){
      // console.log(index)
      ImagePreview({
        images: this.filmInfo.photos,
        startPosition: index,
        closeable: true,
      })
    }
  },
  mounted () {
    // console.log(this.$route.params.id)
    // Toast.loading({
    // message: '加载中...',
    // forbidClick: true,
    // duration: 0,
    //  });
     https({
      url: `/gateway?filmId=${this.$route.params.id}&k=4844154 `,
      headers: {
        'X-Host':'mall.film-ticket.film.info'
      }
    }).then((res) => {
      // console.log(res)
      this.filmInfo = res.data.data.film
    })
    // console.log('created', this.$route.params.filmId)

    // http.httpForDetail().then(res=>{
    // console.log(res.data.data.film)
    // console.log(res.data)
    // this.filmInfo= res.data.data.film

    // Toast.clear()
  //      }
  //   )
  },
  // mounted () {
  //   window.onscroll=()=>{
  //     console.log('scroll')
  //     if(document.documentElement.scrollTop > 50) {
  //       console.log('显示')
  //     } else{
  //       console.log('隐藏')
  //     }
  //   }
  // },
  destroyed (){
    window.onscroll= null
  }
}
</script>
<style scoped lang="scss">
.detailswiper{
  overflow: hidden;
}
.poster{
  width: 100%;
  height: 210px;
  background-position: center;
  background-size: cover;
}
.content{
  padding:15px ;
  .detail-text{
    color:#797d82;
    font-size:13px;
    margin-top:4px;
  }
}
.hidden{
  overflow: hidden;
  height:30px;
}
.avatar{
  width: 100%;
  height: 85px;
  background-position: center;
  background-size:cover;
  overflow: hidden;
}
.photos{
  width: 100%;
  height: 120px;
  background-position: center;
  background-size:cover;
  overflow: hidden;
}
</style>
