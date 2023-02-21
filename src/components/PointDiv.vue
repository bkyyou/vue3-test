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
  useSlots,
} from 'vue';

// function move(event: any) {
function move(event) {
  console.log(event.clientX)
}

// 可以判断具名插槽是否使用
console.log('pointdiv', useSlots().one, useSlots().two)

</script>

<style scoped>
  .pointDiv {
    width: 300px;
    height: 200px;
    background-color: red;
  }
</style>

<template>
  <div @mousemove="move" class="pointDiv">
    <slot name="one"></slot>
  </div>
</template>