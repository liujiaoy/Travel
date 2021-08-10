import axios from 'axios'
import Vue from 'vue'


export function request(config) {
  let baseURL = Vue.prototype.baseURL
  // console.log(baseURL)
  //1.创建axios实例
  const instance = axios.create({
    baseURL: baseURL,
    timeout: 500000
  })
  //2.axios的拦截器
  instance.interceptors.request.use(config => {
    // console.log("拦截发送请求");
    return config
  },err => {
    console.log(err);
  })

  instance.interceptors.response.use(res => {
    // console.log("拦截返回请求");
    // console.log(res);
    return res.data
  },err => {
    console.log(err);
  })
  //发送真正的网络请求
  return instance(config)
}