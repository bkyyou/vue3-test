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
  // name: {
  //   type: String,
  // },
  config: {
    type: Object,
  },
  // ...resetConfig,
})

// console.log('resetConfig', resetConfig);

const { config: { name, enumValue }} = props;



</script>

<template>
  <el-select :v-model="model ? model[name] : name" >
    <el-option v-for="(v, i) in enumValue" :value="v.value" :label="v.label" :key="v.value"></el-option>
  </el-select>
</template>

<style scoped>

</style>