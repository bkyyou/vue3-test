<script setup>
import {
  reactive,
  ref,
  onMounted,
  onUpdated,
  watch,
  watchEffect,
  computed,
  // defineProps,
  // defineEmits,
  provide,
} from 'vue';
import Parent from './Parent.vue';
import Test1 from './Test1.vue';

</script>

<style scoped>

</style>

<template>
  <Parent></Parent>
  <Test1></Test1>
</template>