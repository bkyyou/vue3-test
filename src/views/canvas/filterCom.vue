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
// getImageData canvas内容的像素
import { saveAs } from 'file-saver';

const imgSrc = ref('');
const img1 = ref(null);
const divRef1 = ref(null);

const change = (e) => {
  const file = e.target.files[0];
  console.log('file', file);
  const fr = new FileReader();
  fr.readAsDataURL(file);
  fr.onload = function() {
    imgSrc.value = fr.result;
    setTimeout(() => {
      const pressCanvas = document.createElement('canvas');
      pressCanvas.width = img1.value.width;
      pressCanvas.height = img1.value.height;
      const ctx = pressCanvas.getContext('2d');
      ctx.drawImage(img1.value, 0, 0, img1.value.width, img1.value.height);
      pressCanvas.toBlob((blob) => {
        console.log(blob);
        // saveAs(blob);
      }, file.type, 0.1);
    });
  }
}

const addFilfter = () => {
  const imageWidth = img1.value.width;
  const imageHeight = img1.value.height;
  const filterCanvas = document.createElement('canvas');
  filterCanvas.width = imageWidth;
  filterCanvas.height = imageHeight;
  const ctx = filterCanvas.getContext('2d');
  ctx.drawImage(img1.value, 0, 0, imageWidth, imageHeight);
  // getImageData canvas内容的像素
  const imageData = ctx.getImageData(0, 0, imageWidth, imageHeight);
  console.log(imageData);
  // const _len = imageData.data.length;
  // for (let i = 0; i < _len; i++) {
  //   if (i % 2 === 0) {
  //     imageData.data[i] = 0;
  //   }
  // }
  var _data = imageData.data;
  var _len = _data.length;
  for (var i = 0 ; i < _len; i++) {
      var _r = _data[4*i+0]*0.3;
      var _g = _data[4*i+1]*0.59;
      var _b = _data[4*i+2]*0.11;
      var grey = _r + _g + _b;
      _data[4*i+0] = grey;
      _data[4*i+1] = grey;
      _data[4*i+2] = grey;
  }
  // 清空 canvas
  ctx.clearRect(0, 0, imageWidth, imageHeight);
  ctx.putImageData(imageData, 0, 0);
  divRef1.value.appendChild(filterCanvas);
}
</script>

<template>
<div ref="divRef1"></div>
<input type="file" @change="change">

<img ref="img1" :src="imgSrc" alt="" srcset="">
<button @click="addFilfter">添加滤镜</button>
</template>

<style scoped>

</style>