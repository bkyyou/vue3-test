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
import { download } from '@/api/index.js';



</script>

<template>
  <div>
    <div>
      <button @click="download">下载</button>
    </div>
  </div>
</template>

<style scoped>

</style>