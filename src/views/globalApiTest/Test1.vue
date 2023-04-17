<!-- <script setup lang="ts"> -->
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
  // Ref,
} from 'vue';
import {useRouter} from 'vue-router';
import { getData } from '@/api/index.js';
import md5 from 'js-md5';
const router = useRouter();

// const num1: Ref<number> = ref(0)
const num1 = ref(0)

const add = () => {
  num1.value = num1.value + 1;
}

console.log(md5('1111111') === '7fa8282ad93047a4d6fe6111c93b308a');
</script>

<style scoped>

</style>

<template>
    <div>test1: {{ num1 }}</div>
    <div @click="add">add</div>
    <div @click="() => {
      router.push('/')
    }">跳转1111</div>
</template>