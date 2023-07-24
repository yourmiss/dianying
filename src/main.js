import Vue from 'vue'
import App from './App.vue'
import router from './router'
// import App from './PcApp.vue'

import store from './store'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

// const obj = {
//   name: 'liu',
//   age: 20
// }
// console.log(obj)
