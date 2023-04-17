// import request from "../utils/axios.js";
import { request } from "./request.js";

export const getData = (params) => {
  return request({
    method: 'get',
    params: {
      ...params
    },

  })
}

// const obj = {
//   getList: {url: '/getList', method: 'get'},
//   getList2: {url: '/getList2', method: 'get'},
// }
// for (const item in obj) {
//   request[item] = function() {
//     return request({
//       url: obj[item].url,
//       method: obj[item].method,
//     })
//   }
// }

// export default {
//   a: 1111
// }