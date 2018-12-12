/**
 * Created by jiang on 2017/11/16.
 */
import Vue from 'vue'
import axios from 'axios'

let service = axios.create({
  baseURL: 'http://localhost:9600/systemaudit',
  'Accept': 'application/json',
  'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8',
  withCredentials: true
})

// 添加一个请求拦截器
service.interceptors.request.use(function (config) {
  return config
}, function (error) {
  return Promise.reject(error)
})

// 添加一个响应拦截器
service.interceptors.response.use(function (response) {
  return response
}, function (error) {
  return Promise.reject(error)
})

Vue.prototype.$http = axios
export default service
