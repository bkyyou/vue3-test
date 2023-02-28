<script setup lang="ts">
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
  inject,
} from 'vue';

defineProps({
  toTsxSon: String,
})
const emit = defineEmits(['parentMethod'])
const indexData = inject('indexData')

// const emit = function() {

// }
</script>
<style scoped>

</style>
<template>
  <div>
    <div>{{ toTsxSon }}</div>
    <div>indexData: {{ indexData }}</div>
    <button @click="emit('parentMethod', 11111)">向父组件传参</button>
  </div>
</template>