<template>
    <div>
        <van-nav-bar title="影院" ref="navbar" @click-left="handleLeft"
        @click-right="handleRight">
            <template #left >
                {{cityName}}
                <van-icon name="arrow-down" />
            </template>
            <template #right>
                <van-icon name="search" size="18" />
            </template>
        </van-nav-bar>
        <div class="box" :style="{
            height:height
        }">
            <ul>
                <li v-for="data in cinemaList" :key="data.cinemalId">
                    <div class="left">
                        <div class="cinemaname">{{ data.name }}</div>
                        <div class="cinematext">{{ data.address }}</div>
                    </div>
                    <div class="right">
                        <div style="color:red;">￥{{ data. lowPrice/100}}起</div>
                    </div>
                </li>
            </ul>
        </div>
    </div>
</template>
<script>
import http from '@/utill/http.js'
import https from '@/utill/https.js'
import BetterScroll from 'better-scroll'
import {mapState,mapActions,mapMutations} from 'vuex'
// console.log(mapState(['cinemaList']))
export default {
    data(){
        return {
            cinemasList:[],
            height: 'opx'
        }
    },
    computed:{
        ...mapState(['cinemaList','cityId','cityName'])
    },
    mounted(){
        this.height = document.documentElement.clientHeight-
        this.$refs.navbar.$el.offsetHeight-
        document.querySelector('footer').offsetHeight+'px'
        // http.httpForCinemaList().then(res=>{
        //     // console.log(res.data.data.cinemas)
        // this.cinemasList= res.data.data.cinemas

        //分发
        if(this.cinemaList.length === 0){
            // this.$store.dispatch('getCinemaData',this.cityId).then
           this.getCinemaData(this.cityId).then
            ( res=>{
                    this.$nextTick(()=>{
                    new BetterScroll('.box',{
                        scrollbar:{
                            fade:true
                        }
                    })
                })
            }
        )
        }else{
            this.$nextTick(()=>{
            new BetterScroll('.box',{
                scrollbar:{
                    fade:true
                }
            })
        })
        }

    //     https({
    //         url: `/gateway?cityId=${this.$store.state.cityId}&ticketFlag=1&k=2442549 `,
    //         headers: {
    //             'X-Host':'mall.film-ticket.cinema.list'
    //         }
    //         }).then((res) => {
    //         // console.log(res)
        //     this.cinemasList= res.data.data.cinemas
        // this.$nextTick(()=>{
        //     new BetterScroll('.box',{
        //         fade:true
        //     })
        // })
    //    }
    // )
    },
    methods:{
        ...mapActions(['getCinemaData']),
        ...mapMutations(['clearCinema']),
        handleLeft(){
            // console.log('left')
            this.$router.push('/city')
            //清空电影
            // this.$store.commit('clearCinema')
            this.clearCinema()
        },
        handleRight(){
            this.$router.push('/cinemas/search')
        }
    }
}
</script>
<style scoped lang="scss">
    li{
        padding: 0.9375rem;
        display: flex;
        justify-content: space-between;
        .left{
            width: 14.625rem;
        }
        .cinemaname{
            color: #191a1b;
            font-size: 0.9375rem;
        }
        .cinematext{
            color: #797d82;
            font-size: 0.75rem;
            margin-top: 0.3125rem;
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
            // width: 100%;
        }
    }
    .box{
        height:50rem;
        overflow:hidden;
        position:relative;
    }
</style>
