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
import { saveAs } from 'file-saver';
// 如果截图的是图片，canvasdom或者video
// ctx.drawImage(dom);
// ctx.toBlob -> filesave

// div document.body -> html2canvas
import html2canvas from 'html2canvas';

const div1Ref = ref(null);

const saveScreen = (type) => {
  html2canvas(type === 'body' ? document.body : div1Ref.value).then(canvas => {
    // canvas.toDataURL 转化为 base64
    canvas.toBlob(blob => {
      saveAs(blob, 'screen.png')
    })
  }, 'image/png')
}
</script>

<template>
<div ref="div1Ref" class="div1">
  111
</div>
<div @click="saveScreen">截图</div>
<div @click="saveScreen('body')">截body图</div>
</template>

<style scoped>
.div1 {
  width: 100px;
  height: 100px;
  background-color: skyblue;
}
</style>