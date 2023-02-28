import { over, throttle } from "lodash"
const myScroll = {
  install: function(app) {
    app.directive('myscroll', {
      created(el, binding, vnode, prevNnode) {
        // console.log('vnode.mixin', binding.instance.mixin)
        const self = vnode.ctx.ctx;
        // console.log('el', el)
        // console.log('binding', binding.instance.dataList, self.dataList)
        console.log('binding', binding)
        console.log('vnode', vnode)
        console.log(over)
        const tableWrapperDom = el.querySelector('.el-scrollbar__wrap');
        // const tableWrapperDom = el.querySelector('.el-table__body-wrapper');
        // console.log('tableWrapperDom', tableWrapperDom)
        const scroll = throttle(() => {
          const { scrollTop, clientHeight ,scrollHeight } = tableWrapperDom;
          // console.log('vnode.ctx', vnode.ctx.dataList)
          // console.log('scrollTop', scrollTop);
          // console.log('clientHeight', clientHeight);
          // console.log('scrollHeight', scrollHeight);
        console.log('binding', binding.instance.dataList, self.dataList)
          if (scrollTop + clientHeight >= scrollHeight) {
            // if (condition) {
              
            // }
            // self.over += 15
          } 
        }, 200);
        tableWrapperDom.addEventListener('scroll', scroll)
        
      },
      updated(el, binding, vnode, prevVnode) {
        const self = vnode.ctx;
        // console.log('binding1111', binding, vnode)
        
      },

    })
  }
}

export default myScroll;