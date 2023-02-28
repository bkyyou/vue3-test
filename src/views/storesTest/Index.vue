<script setup>
import {
  reactive,
  ref,
  onMounted,
  onUpdated,
  watch,
  watchEffect,
  computed,
  defineProps,
  provide,
} from 'vue';
import Test1 from './Test1.vue';
import Test2 from './Test2.vue';
// import { useCartStore } from '@/stores/cart';

// const cartStore = useCartStore();

// cartStore.addCartNum({num: 1, id: 1, name: '电视'})

// onMounted(() => {
//   console.log('storesTest', cartStore.cartList)
// })

</script>

<template>
  <div>
    storesTest
    <Test1></Test1>
    <Test2></Test2>
  </div>
</template>

<style scoped>
  
</style>
