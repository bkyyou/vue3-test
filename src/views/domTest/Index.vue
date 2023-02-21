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
  nextTick,
} from 'vue';

// const domDiv = ref({} as HTMLElement);
const domDiv = ref({});
const num = ref(1);

onMounted(() => {
  console.log(domDiv.value)
})

const addNum = () => {
  num.value = num.value + 1;
  nextTick(() => {
    console.log(domDiv.value.innerHTML)
  })
}

</script>
<style scoped>

</style>
<template>
  <div>
    <div ref="domDiv">{{ num }}</div>
    <button @click="addNum">改变值</button>
  </div>
</template>