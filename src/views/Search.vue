<template>
    <div>
        <van-search
            v-model="value"
            shape="round"
            background="#4fc08d"
            label="地址"
            show-action
            placeholder="请输入搜索关键词"
            @search="onSearch"
            @cancel="onCancel"
        />
        <ul v-if="value">
               <li v-for="data in computedList" :key="data.cinemalId">
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
</template>
<script>
export default{
    data(){
        return{
            value:''
        }
    },
    computed:{
        computedList(){
            return this.$store.state.cinemaList.filter(item=>item.name.
            toUpperCase().includes(this.value.toUpperCase()) || item.address.
            toUpperCase().includes(this.value.toUpperCase()))
        }
    },
    methods:{
        onSearch(){

        },
        onCancel(){
            this.router.back()
        }
    },
    mounted(){
        if(this.$store.state.cinemaList.length === 0){
            this.$store.dispatch('getCinemaData',this.$store.state.cityId)
        }else{
            console.log('缓存')
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
   
</style>
