import { defineStore } from "pinia";

export const useCartStore = defineStore('cart', {
  state: () => {
    return {
      cartList: []
    }
  },
  // 相当于计算属性
  getters: {
    allNum() {
      let _allNum = 0
      this.cartList.forEach((val) => _allNum += val.num);
      return _allNum;
    }
  },
  actions: {
    // 不能写箭头函数
    addCartNum(goods) {
      console.log('cart.js')
      let _index = -1;
      this.cartList.forEach((item, index) => {
        if (item.id === goods.id) {
          _index = index
        }
      })
      if(_index !== -1) {
        console.log(111)
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
            this.cartList.splice(index, 1)
          }
        }
      })
    },
  }
})