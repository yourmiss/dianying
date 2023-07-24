<template>
    <div>
        <van-index-bar :index-list="computedList" @change ="handleChange">
        <div v-for="data in cityList" :key="data.type">
            <van-index-anchor :index="data.type" />
            <van-cell :title="item.name" 
             v-for="item in data.list" :key="item.cityId"
             @click="handleClick(item)"/>
           
        </div>
    
        </van-index-bar>
        
    </div>
</template>
<script>
import https from '@/utill/https.js'
import {Toast} from 'vant'
import obj from '@/utill/maxinObj'
// var obj={
//     created(){
//         this.$store.commit('hide')
//     },
//     destroyed(){
//         this.$store.commit('show')
//     }
// }

    export default{
        mixins : [obj],
        data(){
            return{
                cityList:[]
            }
        },
        computed:{
            computedList(){
                return this.cityList.map(item=>item.type)
            }
        },
        unmounted(){
            // this.$store.commit('show')
        },
        mounted (){
            // this.$store.commit('hide')
            https({
                url:'/gateway?k=9032243',
                headers:{
                    'X-Host':'mall.film-ticket.city.list'
                }
            }).then((res)=>{
                // console.log(res.data.data.cities)
                // this.cityList=res.data.data.cities
                this.cityList = this.renderCity(res.data.data.cities)
            })
            
        },
        methods:{
            handleChange(data){
                Toast(data)
            },
            renderCity (list){
                // console.log(this.cityList)
                // console.log(list)

                var letterList = []
                var cityList = []
                for (var i = 65; i < 91 ; i++ ){
                    // console.log(String.fromCharCode(i))
                    letterList.push(String.fromCharCode(i))
                }
                // console.log(letterList)
               
                letterList.forEach(letter=>{
                    var newList=list.filter((item) => item.pinyin
                    .substring(0,1).toUpperCase()===letter)
                    // console.log(newList)

                    newList.length > 0 && cityList.push({
                        type:letter,
                        list: newList
                    })
                })
                console.log(cityList)
                // var newList=list.filter(item=>item.pinyin
                // .substring(0,1).toUpperCase()==='A')
                // console.log(newList)
                return cityList
            },
                handleClick(item){
                console.log(item.name,item.cityId)
                // console.log(this.$store.state)
                this.$store.state.cityName=item.name
                this.$store.commit('changeCityName',item.name)
                this.$store.commit('changeCityId',item.cityId)

                this.$router.back()
                // location.href='#/cinemas?cityname='+item.name
            }
        }
    }
</script>
<style lang="scss">
.van-toast--html, .van-toast--text{
    min-width: 50px;
}
</style>