import Vue from 'vue'
import Vuex from 'vuex'
import https from '@/utill/https.js'
import createPersistedState from 'vuex-persistedstate'

Vue.use(Vuex)

export default new Vuex.Store({
  plugins:[createPersistedState({
    reducer:(state)=>{
      return{
        cityId: state.cityId,
        cityName: state.cityName
      }
    }
  })],
  //公共状态state
 state:{
  cityId:'510800',
  cityName:'广元',
  cinemaList:[],
  isTabbarShow: true

 },
 //支持同步和异步
 actions:{
  getCinemaData(store,cityId){
    return https({
      url: `/gateway?cityId=${store.state.cityId}&ticketFlag=1&k=2442549 `,
      headers: {
          'X-Host':'mall.film-ticket.cinema.list'
      }
      }).then((res) => {
      // console.log(res.data.data.cinemas)
      store.commit('changeCinemaData',res.data.data.cinemas)
      
 }
)
  }
 },
 //统一管理，被devtools记录状态的修改
 //只能支持同步
 mutations:{
  changeCityName(state,cityName){
    state.cityName=cityName
    // console.log(cityName)
  },
  changeCityId(state,cityId){
    state.cityId=cityId
  },
  changeCinemaData(state,data){
    state.cinemaList = data
  },
  clearCinema(state){
    state.cinemaList = []
  },
  show(state){
    state.isTabbarShow = true
  },
  hide(state){
    state.isTabbarShow = false
  }
 }
})
