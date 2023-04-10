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
import Test3 from './Test3.tsx';
import Test2 from './Test2.tsx';
import Test1 from './Test1.vue';

const indexData = ref(0)
provide('indexData', indexData)

const parentMethod = (data, cb) => {
  console.log('parendmehtod', data);
  if (typeof(cb) === 'function') {
    cb(2222)
  }
}
</script>
<style scoped>

</style>
<template>
  <div>
    <div>3</div>
    <Test3 toTsxSon="parentData1" @parentMethod="parentMethod" />
    <div>2</div>
    <Test2 toTsxSon="parentData1" @parentMethod="parentMethod" />
    <div>1</div>
    <Test1 :arr="[1,2]" toTsxSon="parentData1" @parentMethod="parentMethod" />
  </div>
</template>