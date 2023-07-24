
import axios from 'axios'
function httpForList(){
    return axios({
        url:'https://m.maizuo.com/gateway?cityId=510800&pageNum=1&pageSize=10&type=1&k=5807938',
        headers:{
          'X-Client-Info':'{"a":"3000","ch":"1002","v":"5.2.1","e":"1689042569785038417330177"}',
          'X-Host':'mall.film-ticket.film.list'
        }
      })
}

function httpForDetail () {
    return axios({
        url: `https://m.maizuo.com/gateway?filmId=6405&k=4844154 `,
        headers:{
          'X-Client-Info':'{"a":"3000","ch":"1002","v":"5.2.1","e":"1689042569785038417330177"}',
          'X-Host':'mall.film-ticket.film.info'
        }
      })
}
function httpForCinemaList () {
  return axios({
      url: `https://m.maizuo.com/gateway?cityId=510800&ticketFlag=1&k=2442549`,
      headers:{
        'X-Client-Info':'{"a":"3000","ch":"1002","v":"5.2.1","e":"1689042569785038417330177"}',
        'X-Host':'mall.film-ticket.cinema.list'
      }
    })
}

export default {
    httpForList,
    httpForDetail,
    httpForCinemaList,
    
}
// const http= axios.create({
//     baseURL: 'https://m.maizuo.com',
//     timeout: 1000,
//     headers: {'X-Client-Info':'{"a":"3000","ch":"1002","v":"5.2.1","e":"1689042569785038417330177"}'}
//   });
//   export default http