<template>
    <div class="header">
        <i class="iconfont icon-back" @click="handleBack"></i>
        <slot></slot>
    </div>
</template>
<script>
export default {
    methods:{
        handleBack(){
            this.$router.back()//返回上一个页面
        }
    }
}
</script>
<style scoped lang="scss">
.header{
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 2.75rem;
    line-height: 2.75rem;
    background-color: white;
    text-align: center;
    i{
        font-size: 30px;
        position: fixed;
        left: 10px;
        top: 0px;
    }
}
</style>