<template>
    <div>
      <van-list
            v-model="loading"
            :finished="finished"
            finished-text="没有更多了"
            @load="onLoad"
            :immediate-check="false"	>
            <van-cell v-for="data in datalist" :key="data.filmId"
            @click="handleChangePage(data.filmId)">
                <img :src="data.poster"/>
                <div>
                  <div class="title"> {{ data.name}}</div>
                  <div class="content">
                    <div :class="data.grade?'':'hidden'">
                      观众评分：<span style="color:red">{{ data.grade}}</span>
                    </div>
                    <div class="actors">主演：{{ data.actors |  actorsFilter}}</div>
                    <div>
                      {{ data.nation }}|{{ data.runtime }}分钟
                    </div>
                  </div>
                </div>
                <!-- <router-link to="/detail">{{ data }}</router-link> -->
            </van-cell>
          </van-list>
    </div>
</template>
<script>
import axios from 'axios'
import Vue from 'vue'
import http from '@/utill/http.js'
import https from '@/utill/https.js'

Vue.filter('actorsFilter',(data)=>{
  // console.log(data.map(item=>item.name).join(','))
  return data.map(item=>item.name).join(',')
})
// Vue.filter('gradeFilter',(data)=>{
//   if(data.grade=null){
//     return '暂无评分'
//   }
// })
export default {
  data () {
    return {
      datalist: [],
      loading :false,
      finished :false,
      total: 0,
      current:1,
    }
  },
  mounted(){
  https({
    url:`/gateway?cityId=${this.$store.state.cityId}&pageNum=1&pageSize=10&type=1&k=5807938`,
        headers:{'X-Host':'mall.film-ticket.film.list'}
  }).then(res=>{
      // console.log(res.data.data.films)
      this.datalist=res.data.data.films
      this.total=res.data.data.total
    })
  },
  methods: {
    onLoad (){
      console.log('到底了')
      if(this.datalist.length === this.total && this.total!==0){
        this.finished = true
        return
      }
      this.current++
      https({
        url:`/gateway?cityId=${this.$store.state.cityId}&pageNum=${this.current}&pageSize=10&type=1&k=5807938`,
        headers:{'X-Host':'mall.film-ticket.film.list'}
      }).then(res=>{
      // console.log(res.data.data.films)
      this.datalist = [...this.datalist, ...res.data.data.films]

        // loading主动设置成 false
        this.loading = false
    })
    },
    handleChangePage (id) {
      // console.log(id)
      // 编程式导航
      // locatiion.href='#/detail'
      // 通过路经跳转
      // this.$router.push('/detail/${id}')
      // 通过命名跳转
      this.$router.push({
        name: 'liuyudetail',
        params: { id }
      })
    }
  }
}
</script>
<style scoped lang="scss">
.van-list{
  .van-cell{
    overflow: hidden ;
    padding:15px;
    img{
      float:left;
      width:66px;
    }
    .title{
      font-size:16px;
    }
    .content{
      font-size:13px;
      color:gray;
      .actors{
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        // width: 100%;

      }
    }
  }
}
.hidden{
  visibility: hidden;
}
</style>
