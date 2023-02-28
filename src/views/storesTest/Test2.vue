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

import { useCartStore } from '@/stores/cart';

const cartStore = useCartStore();

cartStore.addCartNum({num: 1, id: 1, name: '电视'})

onMounted(() => {
  console.log('storesTest1', cartStore.cartList)
})

</script>

<style scoped>

</style>

<template>
  <div>
    <div>Test2 总数： {{ cartStore.allNum }}</div>
    <div v-for="item in cartStore.cartList" :key="item.id">{{ item.name }}</div>
  </div>
</template>