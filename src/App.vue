<template>
  <div>
    <tabbar ref="mytabbar" v-show="$store.state.isTabbarShow"></tabbar>
   <!-- <ul> -->
    <!-- <li>
      <a href="/#/films">电影</a>
    </li>
    <li>
      <a href="/#/cinemas">影院</a>
    </li>
    <li>
      <a href="/#/center">我的</a>
    </li> -->
    <!-- <div class="box">11111</div>
    <li>
      <router-link to="/films" active-class="liuyuactive" tag="li">电影</router-link>
    </li>
    <li>
      <router-link to="/cinemas" active-class="liuyuactive" tag="li">影院</router-link>
    </li>
    <li>
      <router-link to="/center" active-class="liuyuactive" tag="li">我的</router-link>
    </li> -->
    <!-- <router-link to="/films" custom v-slot="{ navigate ,isActive}">
    <li @click="navigate" @keypress.enter="navigate" role="link"
    :class="isActive?'liuyuactive':''">电影--{{ isActive }}</li>
     </router-link> -->
   <!-- </ul> -->
   <section>
    <router-view></router-view>
   </section>
  </div>
</template>
<script>
import Vue from 'vue'
import Vant from 'vant'
import 'vant/lib/index.css'
import tabbar from '@/components/Tabbar'

Vue.use(Vant)
export default {
  data () {
    return {

    }
  },
  mounted (){
    // console.log(this.$refs.mytabbar.$el.offsetHeight)
  },
  components: {
    tabbar
  }

}
</script>
<style >
*{
  margin:0;
  padding: 0;
}
.liuyuactive{
  color:red
}
html,body{
  height: 100%;
  font-size:15px;
}
ul{
  list-style: none;
}
section{
  padding-bottom: 50px;
}
/* .box{
  width:375px;
  height: 192.88px;
  background-color: yellow;
} */

</style>
