<template>
    <footer>
    <ul>
    <!-- <li>
      <a href="/#/films">电影</a>
    </li>
    <li>
      <a href="/#/cinemas">影院</a>
    </li>
    <li>
      <a href="/#/center">我的</a>
    </li> -->
    <!-- <div class="box"></div> -->
    <!-- <li>
      <router-link to="/films" active-class="liuyuactive" tag="li">电影</router-link>
    </li>
    <li>
      <router-link to="/cinemas" active-class="liuyuactive" tag="li">影院</router-link>
    </li>
    <li>
      <router-link to="/center" active-class="liuyuactive" tag="li">我的</router-link>
    </li> -->
    <router-link to="/films" custom v-slot="{ navigate ,isActive}">
    <li @click="navigate" @keypress.enter="navigate" 
    :class="isActive?'liuyuactive':''">
    <i class="iconfont icon-all"></i>
    <span>电影</span>
    </li>
     </router-link>
     <router-link to="/cinemas" custom v-slot="{ navigate ,isActive}">
    <li @click="navigate" @keypress.enter="navigate" 
    :class="isActive?'liuyuactive':''">
    <i class="iconfont icon-comments"></i>
    <span>影院</span>
    </li>
     </router-link>
     <router-link to="/center" custom v-slot="{ navigate ,isActive}">
    <li @click="navigate" @keypress.enter="navigate" 
    :class="isActive?'liuyuactive':''">
    <i class="iconfont icon-account"></i>
    <span>我的</span>
    </li>
     </router-link>
   </ul>
   </footer>
</template>
<script>
import '../assets/iconfont/iconfont.css'
export default {
  
}
</script>
<style scoped lang="scss">
    footer{
        position: fixed;
        bottom: 0;
        left: 0;
        width: 100%;
        height: 3.0625rem;
        background: wheat;
        z-index:100;
        ul{
            display: flex;
            overflow: hidden;
            li{
                flex:1;
                line-height: 1.5625rem;
                text-align: center;
                display: flex;
                flex-direction: column;
                overflow: hidden;
                i{
                  font-size: 20px;
                }
                span{
                  font-size: 1.25rem;
                }
            }
        }
    }
    .liuyuactive {
      color: red;
    }
</style>