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
const props = defineProps(['index', 'transPosiArr', 'dataLength', 'currDragIndex']);
const emit = defineEmits(['changeTransPosiArr', 'changeList', 'setCurrDragIndex']);
const isDrag = ref(false);
const offsetY = ref(0);
let startY = 0;
let rect = {};
let oldIndex;
let newIndex;
const mouseDown = (e) => {
  isDrag.value = true;
  startY = e.clientY;
  oldIndex = props.index;
  console.log('props', props.index);
  newIndex = oldIndex;
  rect = e.target.getBoundingClientRect();
  emit('setCurrDragIndex', props.index);
  document.addEventListener("mousemove", mouseMove);
  document.addEventListener("mouseup", mouseUp, {once: true});
}
const mouseMove = (e) => {
  e.preventDefault();
  // console.log(e);
  let _offsetY = e.clientY - startY;
  const _posi = new Array(props.dataLength).fill(0);
  // 检查是否需要更新元素位置
  if (
    _offsetY > rect.height
  ) {
    // down
    const count = Math.min(Math.floor(_offsetY / rect.height), props.dataLength - 1 - props.index);
    for (let i = 1; i <= count; i++) {
      // emit('changeTransPosiArr', i + props.index,  -rect.height);
      _posi[i + props.index] = -rect.height
    }

    // if (Math.floor(_offsetY / rect.height) <= props.dataLength - 1 - props.index) {
    //   for (let i = 1; i <= count; i++) {
    //     // emit('changeTransPosiArr', i + props.index,  -rect.height);
    //     _posi[i + props.index] = -rect.height
    //   }

    // }

    // for (let i = count; i >= 0; i--) {
    //   emit('changeTransPosiArr', i,  0);
    // }
    newIndex = count + props.index;
  } else if (_offsetY < -rect.height) {
    // up 上面这个区域
    const count = Math.min(Math.floor(-_offsetY / rect.height), props.index);
    for (let i = 1; i <= count; i++) {
      // emit('changeTransPosiArr', props.index - i,  rect.height);
      _posi[props.index - i] = rect.height;
    }
    // for (let i = count; i < props.dataLength; i++) {
    //   emit('changeTransPosiArr', i,  0);
    // }

    // for (let i = 0; i <= count; i++) {
    //   if (props.index - i < count) {
    //     _posi[props.index] = rect.height;
    //   }
    // }
    newIndex = props.index - count;
    console.log('_posi', _posi);
  }
  emit('changeTransPosiArr', _posi);

  offsetY.value = _offsetY;
};
const mouseUp = (e) => {
  e.preventDefault();
  isDrag.value = false;
  startY = 0;
  offsetY.value = 0;
  rect = {};
  emit('setCurrDragIndex', -1);
  const _posi = new Array(props.dataLength).fill(0);
  emit('changeTransPosiArr', _posi);
  if (newIndex !== oldIndex) {
    emit('changeList', newIndex, oldIndex)
  } 
  document.removeEventListener("mousemove", mouseMove);
}
</script>

<template>
  <div 
    :class="{
      list: true,
      trans: currDragIndex !== index && currDragIndex !== -1
    }"
    :style="isDrag ? {
      transform: `translateY(${offsetY}px)`,
      position: 'relative',
      zIndex: 999
    } : {
      transform: `translateY(${transPosiArr[index]}px)`
    }"
    @mousedown="mouseDown($event)" 
  >
    <slot></slot>
  </div>
</template>

<style scoped>
.trans {
  transition: transform .2s linear;
}
.list {
  width: 100px;
  height: 20px;
  /* background-color: skyblue; */
  border: 1px solid black;
  box-sizing: border-box;
}
</style>