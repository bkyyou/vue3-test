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
import Index3 from './Index3.vue';
import Index4 from './Index4.vue';
import Index5 from './Index5.vue';
import SmoothDnd from './SmoothDnd.vue';

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

  <Index3 />

  <Index5 />

  <Index4 />

  <SmoothDnd />

  <!-- <div draggable="true">ceshi</div> -->
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