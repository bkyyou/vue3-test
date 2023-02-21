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
  defineExpose
} from 'vue';

const childData = ref(0);

const childFn = () => {

}

defineExpose({
  childData,
  childFn,
})

</script>

<style scoped>

</style>

<template>

</template>