import axios from 'axios'
import { Toast } from 'vant'
const https= axios.create({
    baseURL: 'https://m.maizuo.com',
    timeout: 3000,
    headers: {'X-Client-Info':'{"a":"3000","ch":"1002","v":"5.2.1","e":"1689042569785038417330177"}'}
  });


  // 在发请求之前拦截 -- showLoading
https.interceptors.request.use(function (config) {
    // Do something before request is sent
    // console.log(config)
    Toast.loading({
      message: '加载中...',
      forbidClick: true,
      duration: 0
    })
    return config
  }, function (error) {
    // Do something with request error
    return Promise.reject(error)
  })
  
  // 在成功后拦截 -- hideLoading
  https.interceptors.response.use(function (response) {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
  
    Toast.clear()
  
    return {
      ...response,
      NAME: 'liuyu'
    }
  }, function (error) {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    Toast.clear()
    return Promise.reject(error)
  })
  export default https