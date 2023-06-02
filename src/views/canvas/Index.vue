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
import Screecut from './Screecut.vue';
import filterCom from './filterCom.vue';
import ImageCuter from './ImageCuter.vue';

const imgSrc = ref('');
const img1 = ref(null);

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
</script>

<template>
<input type="file" @change="change">

<img ref="img1" :src="imgSrc" alt="" srcset="">

<Screecut></Screecut>

<filterCom></filterCom>

<ImageCuter></ImageCuter>

</template>

<style scoped>

</style>