let mask = null;
const myLoading = {
  install: function(app) {
    app.directive('myloading', {
      created(el, binding, vnode, prevNnode) {
        
      },
      updated(el, binding, vnode, prevVnode) {
        console.log('binding', binding.value);
        console.log('binding', binding.oldValue);
        
        if (binding.value) {
          el.classList.add('position-relative');
          mask = document.createElement('div');
          mask.classList.add('loading-mask');
          el.appendChild(mask);
        } else {
          el.classList.remove('position-relative');
          mask.remove();
          mask = null;
        }
      },

    })
  }
}

export default myLoading;