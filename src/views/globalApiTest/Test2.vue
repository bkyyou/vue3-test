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

const num1 = ref(0)

const add = () => {
  num1.value = num1.value + 1;
}
</script>

<style scoped>

</style>

<template>
    <div>test2: {{ num1 }}</div>
    <div @click="add">add</div>
</template>