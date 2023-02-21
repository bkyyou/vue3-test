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
  defineEmits,
  provide,
} from 'vue';
const a = ref(0);
// import { $ref } from 'vue/macros';

// 语法糖 1
// const a = $ref(0)
// watch([$$(a)], () => {
// })

// 语法糖 2  x y 不用 .value 了， 就直接使用了
// function fn() {
//   return {
//     x: ref(1),
//     y: ref(2),
//   }
// }
// const { x, y } = $(fn())

const add = () => {
  a.value++;
}
</script>

<style scoped>

</style>

<template>
  <div>{{ a }}</div>
  <button @click="add">a++</button>
</template>