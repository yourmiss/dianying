<template>
    <div>
        <ul>
        <router-link to="/films/nowplaying" custom v-slot="{ navigate ,isActive}">
            <li @click="navigate" @keypress.enter="navigate" role="link"
            >
            <span :class="isActive?'liuyuactive':''">正在热映</span>
            </li>
        </router-link>
        <router-link to="/films/comingsoon" custom v-slot="{ navigate ,isActive}">
            <li @click="navigate" @keypress.enter="navigate" role="link"
           >
            <span :class="isActive?'liuyuactive':''">即将上映</span>
            </li>
        </router-link>
         </ul>
    </div>
</template>
<style scoped lang="scss">
ul{
    display:flex;
    height:3.0625rem;
    line-height:3.0625rem;
    li{
        flex:1;
        text-align: center;
    }
}
.liuyuactive{
    color:red;
    border-bottom:0.125rem solid red;
}
</style>