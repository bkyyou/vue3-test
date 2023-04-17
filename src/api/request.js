import request from '@/utils/axios.js';

const myRequest = (function() {
  let hasRequest = [];
  const mem = {}; // map 数据更好
  return function(config) {
    const { url } = config;
    if (mem[url]) {
      return Promise.resolve(mem[url]);
    }
    if (hasRequest.includes(url)) {
      return Promise.reject('请求已经提交')
    } 
    hasRequest.push(url);
    return request(config).then(res => {
      hasRequest = hasRequest.filter(val => val !== url);
      return res;
    })
    
  }
})()

export {
  request as initRequest,
  myRequest as request,
}