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
const props = defineProps({
  model: {
    type: Object,
  },
  config: {
    type: Object,
  },
  // ...resetConfig,
})

console.log('model', props.model);
const { name, model } = props;
const _name = model ? model[name] : name

</script>

<template>
  <el-input v-model="_name" />
</template>

<style scoped>

</style>