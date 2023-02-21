<template>
  <div>
    <div>{{ num1 }}</div>
    <div>{{ obj.a }}</div>
  </div>
</template>

<script setup>
import { ref, reactive, toRef, toRefs } from "vue";

const num1 = ref(0);
const obj = reactive({ a: 1 });

setTimeout(() => {
  num1.value = 99;
  obj.a = 100;
}, 1000);
</script>

<style>
</style>