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
import Child from './Child.vue';

const childDom = ref({});

onMounted(() => {
  console.log('other parent', childDom.value.childData)
  console.log('other parent', childDom.value.childFn)
})

</script>

<style scoped>

</style>

<template>
  <div>
    <Child ref="childDom"></Child>
  </div>
</template>