<template>
  <div>11</div>
</template>

<script setup>
import { reactive, ref, onMounted, onUpdated } from 'vue';

const data1 = reactive({data: {}})

onMounted(() => {
  console.log('onmouted')
})

// fetch('/').then((res) => {
//   // data1 = res 错的
//   data1.data = res;
// })



console.log('setup')
</script>

<style>

</style>