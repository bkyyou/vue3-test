import { defineStore } from "pinia";
import { reactive, computed } from "vue";

export const useCartStore = defineStore('cart', () => {
  console.log('cart_1')
  const cartList = reactive([]);

    const allNum = computed(() => {
      let _allNum = 0
      cartList.forEach((val) => _allNum += val.num);
      return _allNum;
    })

    // 不能写箭头函数
    function addCartNum(goods) {
      console.log('cart_1 addCartNum')
      let _index = -1;
      cartList.forEach((item, index) => {
        if (item.id === goods.id) {
          _index = index
        }
      })
      if(_index !== -1) {
        console.log(111)
        cartList[_index].num++
      } else {
        cartList.push(goods)
      }
    }
    function minuCartNum(id) {
      cartList.forEach((item, index) => {
        if (item.id === id) {
          item.num--;
          if (item.num <= 0) {
            cartList.splice(index, 1)
          }
        }
      })
    }
  return {
    cartList,
    allNum,
    addCartNum,
    minuCartNum,
  }
})