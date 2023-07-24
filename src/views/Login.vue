<template>
    <div>
        登录
        <button @click="handleLogin">login</button>
    </div>
</template>
<script>
export default {
  methods: {
    handleLogin () {
      setTimeout(() => {
        localStorage.setItem('token', '后端返回的token字段')
        this.$router.push('this.$route.query.redirect')
      }, 0)
      // 获取query字段
      // console.log(this.$route.query.redirect)
      // this.$router.push('this.$route.query.redirect')
    }
  }
}
</script>
