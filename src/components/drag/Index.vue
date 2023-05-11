<script setup>
import {
  ref,
  defineProps,
} from 'vue';

const props = defineProps({
  style: Object,
  // 一
  // mode: String, // posi | trans
})
const emit = defineEmits(['mouseDownCb', 'mouseMoveCb', 'mouseUpCb'])

const isPosi = props.mode === 'posi';
const dragRef = ref(null);

// 二
let transform = {
  offsetX: 0,
  offsetY: 0,
}

function getClientRect() {
  return dragRef.value.getBoundingClientRect()
}

const mouseDown = (e) => {
  console.log('mousedown', e);

  // 一
  // const { clientX, clientY } = e;
  // const dragRefStyle = dragRef.value.getBoundingClientRect();
  // const diffLeft = clientX - dragRefStyle.left;
  // const diffTop = clientY - dragRefStyle.top;

  const downX = e.clientX
  const downY = e.clientY
  const { offsetX, offsetY } = transform

  // 二
  const dragRect = dragRef.value.getBoundingClientRect()
  const dragLeft = dragRect.left
  const dragTop = dragRect.top
  const dragWidth = dragRect.width
  const dragHeight = dragRect.height
  const clientWidth = document.documentElement.clientWidth
  const clientHeight = document.documentElement.clientHeight
  const minLeft = -dragLeft + offsetX
  const minTop = -dragTop + offsetY
  const maxLeft = clientWidth - dragLeft - dragWidth + offsetX
  const maxTop = clientHeight - dragTop - dragHeight + offsetY

  emit('mouseDownCb', e, getClientRect());

  const mouseMove = function (e) {
    // 一
    // const x = document.body.clientWidth - (e.clientX - diffLeft + dragRefStyle.width) > 0 ?
    //   Math.max(e.clientX - diffLeft, 0) :
    //   document.body.clientWidth - dragRefStyle.width;
    // const y = document.body.clientHeight - (e.clientY - diffTop + dragRefStyle.height) > 0 ?
    //   Math.max(e.clientY - diffTop, 0) :
    //   document.body.clientHeight - dragRefStyle.width;
    // if (isPosi) {
    //   dragRef.value.style.left = x + 'px';
    //   dragRef.value.style.top = y + 'px';
    // } else {
    //   dragRef.value.style.transform = `translate(${x}px, ${y}px)`;
    // }

    // 二
    const moveX = Math.min(
      Math.max(offsetX + e.clientX - downX, minLeft),
      maxLeft
    )
    const moveY = Math.min(
      Math.max(offsetY + e.clientY - downY, minTop),
      maxTop
    )

    transform = {
      offsetX: moveX,
      offsetY: moveY,
    }
    dragRef.value.style.transform = `translate(${moveX}px, ${moveY}px)`

    emit('mouseMoveCb', e, getClientRect());

  }
  const mouseUp = function (e) {
    emit('mouseUpCb', e, getClientRect());

    document.removeEventListener('mousemove', mouseMove);
    document.removeEventListener('mouseup', mouseUp);
  }

  document.addEventListener('mousemove', mouseMove);
  document.addEventListener('mouseup', mouseUp)
}

defineExpose({
  getClientRect
})

</script>

<template>
  <div ref="dragRef" @mousedown="mouseDown($event)"
    :class="['dragWrapper', isPosi ? 'dragWrapperPosi' : 'dragWrapperTrans']" :style="style">
    <slot></slot>
  </div>
</template>

<style scoped>
.dragWrapper {
  /* position: absolute; */
  /* z-index: 999;
  display: inline-block; */
  /* left: 0;
  top: 0; */
}

.dragWrapperTrans {
  display: inline-block;
}

.dragWrapperPosi {
  position: absolute;
  z-index: 999;
}
</style>