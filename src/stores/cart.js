import { defineStore } from "pinia";

defineStore('cart', {
  state: () => {
    return {
      cartList: []
    }
  },
  actions: {
    // 不能写箭头函数
    addCartNum(goods) {
      let _index = -1;
      this.cartList.forEach((item, index) => {
        if (item.id === goods.id) {
          _index = index
        }
      })
      if(_index !== -1) {
        this.cartList[_index].num++
      } else {
        this.cartList.push(goods)
      }
    },
    minuCartNum(id) {
      this.cartList.forEach((item, index) => {
        if (item.id === id) {
          item.num--;
          if (item.num <= 0) {
            this.cartList.slice(index, 1)
          }
        }
      })
    },
  }
})