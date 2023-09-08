import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

import { throttle } from 'lodash'

import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

import myscroll from '@/directives/myScroll.js';
import myLoading from '@/directives/myLoading.js';
import myui from '@/myui/index.js';

// import '@/myui/css/index.scss';
// 换肤
import './myindex.scss';
import './assets/main.css';

const app = createApp(App)

app.use(createPinia())
app.use(ElementPlus)
app.use(router)

app.use(myscroll);
app.use(myLoading);
app.use(myui);

// app.directive('myscroll', {
//   created(el, binding, vnode, prevNnode) {
//     const self = vnode.ctx.ctx;
//     // console.log('binding', binding.instance.dataList, self.dataList)
//     const tableWrapperDom = el.querySelector('.el-scrollbar__wrap');
//     // const tableWrapperDom = el.querySelector('.el-table__body-wrapper');
//     // console.log('tableWrapperDom', tableWrapperDom)
//     console.log(vnode);
//     console.log(self);
//     console.log(over)

//     const scroll = throttle(() => {
//       const { scrollTop, clientHeight ,scrollHeight } = tableWrapperDom;
//       // console.log('binding', binding.instance.dataList, self.dataList)
//       if (scrollTop + clientHeight >= scrollHeight) {
//         // if (self.over >= self.dataList.length) {
//         //   return
//         // }
//         console.log(111)
//         self.over += 15;
//       } 
//     }, 200);
//     tableWrapperDom.addEventListener('scroll', scroll)
    
//   },
//   updated(el, binding, vnode, prevVnode) {
//     const self = vnode.ctx;
    
//   },

// })

// app.mixin({
//   data: function() {
//     return {
//       start: 0,
//       over: 5,
//     }
//   }
// })


app.mount('#app')
