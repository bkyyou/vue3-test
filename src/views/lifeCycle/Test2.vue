<script setup>
import { reactive, ref, onMounted, onUpdated, watch, watchEffect, computed } from 'vue';

const num1 = ref(0);
const num2 = ref(1);

const cNum1 = computed(() => {
  return num1.value + 2;
})

const stop = watch([num1, num2], () => {
  console.log('watch')

  if (num1.value > 3) {
    stop();
  }
}, {
  // 是在 dom 更新 之前还是之后触发
  flush: 'pre' // pre post 
  // 只在开发模式下
  // onTract: 
  // onTrigger: 
});

watchEffect(() => {
  // 没在页面上变量改变不会触发 watchEffect  只有写在 函数里并且用在视图里的变量更改才会引起更新
  console.log('watcheffect', num2.value)
}, {});

setTimeout(() => {
  num1.value = 88
}, 200);

setTimeout(() => {
  num2.value = 99
}, 2000);

</script>
<style scoped>

</style>
<template>
  <div>
    <div>{{ num1 }}</div>
    <!-- <div>{{ num2 }}</div> -->
    <div>{{ switchNode }}</div>
  </div>
</template>