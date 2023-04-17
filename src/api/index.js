import $http from "../utils/http";
import { saveAs } from 'file-saver';
// 不带 default
export * from './user.js';
// 带 default
// export * as user from './user.js';

// console.log(user);;

export const  download = async () => {
  return new Promise(reslove => {
    $http.post('/downloadExecl', {}, {responseType: 'blob'}).then(res => {
      console.log(res);
      /**
       * 下载 二
       */
      saveAs(res.data, 'test.xlsx')
      /**
       * 下载 一
       */
      // if (window.navigator.msSaveBlob) {
      //   // 兼容 ie type 太长了 ie 想看 ie 里打印看一下，没ie浏览器
      //   window.navigator.msSaveBlob(res.data, 
      //     {type: ''},
      //     'test.xlsx',
      //   )
      // } else {
      //   const blobUrl = window.URL.createObjectURL(res.data);
      //   console.log(blobUrl);
      //   const link = document.createElement('a');
      //   link.href = blobUrl;
      //   link.download = 'test.xlsx';
      //   link.style.display = 'none';
      //   link.click();
      //   window.URL.revokeObjectURL(blobUrl);
      //   // link.remove();
      // }

      /**
       * 预览
       */
      // url -》 线上地址
      // base64URL blob -> 对应的预览处 -> fileReader
      reslove();
    })
  })
}
export const  download2 = async (params) => {
  
}