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
import Drag from "@/components/drag/Index.vue";

const dragRef = ref(null);

const getPosi = () => {
  console.log(dragRef.value.getClientRect());
}

const mouseDownCb = (e, posi) => {
  console.log(e, posi);
}
const mouseMoveCb = (e, posi) => {
  console.log(e, posi);
}
const mouseUpCb = (e, posi) => {
  console.log(e, posi);
}

</script>

<template>
  <div @click="getPosi">获取坐标</div>
  <div class="dragTestWrapper">
    <Drag 
      ref="dragRef" 
      @mouseDownCb="mouseDownCb"
      @mouseMoveCb="mouseMoveCb"
      @mouseUpCb="mouseUpCb"
    >
      <div class="content">111</div>
    </Drag>
  </div>
</template>

<style scoped>
.dragTestWrapper {
  /* padding-left: 30px;
  padding-top: 100px; */
  /* position: absolute;
  left: 0;
  top: 0; */
}
.content {
  background-color: skyblue;
  width: 100px;
  height: 100px;
}
</style>