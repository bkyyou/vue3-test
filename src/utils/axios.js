// 配置全局的基础配置
import axios from 'axios';
import axiosConfig from './axios.config.js';
import md5 from 'js-md5';
// 配置中心
// 常用的基础配置： baseURL, timeout, header, responseType, withCredentials
// 后面的请求用 request 来发
const request = axios.create({
  baseURL: 'http://localhost:4008',
  // timeout: 30 * 1000,
  // responseType: 'json',
  // headers: {
  //   'a': '123', 
  // }
})

request.interceptors.request.use((config) => {
  // token，密钥的设置
  const { whiteListApi, secretId } = config;
  const { url } = config;
  const token = localStorage.getItem('token');
  if (!whiteListApi.includes(url) && token) {
    config.headers.token = token;
  }
  // 这里最好是 md5 加密  密钥 secretId + 特殊算法
  const _secret = md5(secretId + new Date().valueOf());
  config.headers.secret = _secret;

  return config;
}, error => {
  return Promise.reject(new Error(error))
})

request.interceptors.response.use((res) => {
  // 响应得统一处理
  const { code = 200, msg } = res.data;

  if (code === 401) {
    alert(msg);
    window.location.href = '/#/login';
    return Promise.reject(msg);
  }

  if (code !== 200) {
    alert(msg);
    return Promise.reject(msg);
  }

  return res;
}, error => {
  return Promise.reject(new Error(error))
})

export default request;
