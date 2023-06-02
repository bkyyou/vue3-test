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

const imageSrc = ref('');
const image1Ref = ref(null);
const canvas1Ref = ref(null);
const coverRef = ref(null);
const maskRef = ref(null);
const coverPoint = reactive({x: 0, y: 0});
const isMaskShow = ref(false);

const change = (e) => {
  const file = e.target.files[0];
  const fr = new FileReader();
  fr.readAsDataURL(file);
  fr.onload = function() {
    imageSrc.value = fr.result;
    // setTimeout(() => {
    //   const ctx = canvas1Ref.value.getContext('2d'); 
    //   // 五个参数的时候，后四个数据代表画布的 起点和宽高， 九个参数的时候 2-5 代表图片 起点和宽高
    //   // 因为图片进行了缩放，所以等比取宽高
    //   const w = 200 / image1Ref.value.width * image1Ref.value.naturalWidth;
    //   const h = 200 / image1Ref.value.height * image1Ref.value.naturalHeight;
    //   ctx.drawImage(image1Ref.value, 0, 0, w, h, 0, 0, 200, 200);
    // });
  }
}

const image1Load = () => {
  console.log(image1Ref.value.naturalWidth);
  console.log(image1Ref.value.naturalHeight);
}

const imageCuter = () => {
  const { x, y } = image1Ref.value.getBoundingClientRect();
  coverPoint.x = x;
  coverPoint.y = y;
  isMaskShow.value = true;
}

const mouseDown = function(e) {
  e.preventDefault()
  // console.log('mouseDown', e);
  const clickX = e.clientX;
  const clickY = e.clientY;
  const { x: coverRefX, y: coverRefY } = coverRef.value.getBoundingClientRect();
  const { x: image1RefX, y: image1RefY, width: image1RefWidth, height: image1RefHeight } = image1Ref.value.getBoundingClientRect();
  const diffX = clickX - coverRefX;
  const diffY = clickY - coverRefY;

  const mouseMove = (e) => {
    // console.log(e);
    // console.log('image1Ref.value.offsetLeft', image1Ref.value.offsetLeft);
    e.preventDefault()
    const moveX = e.clientX;
    const moveY = e.clientY;
    let currentX  = moveX - diffX;
    let currentY  = moveY - diffY;
    if (currentX <= image1RefX) {
      coverPoint.x = image1RefX;
    } else if (currentX + 200 >= image1RefX + image1RefWidth) {
      coverPoint.x = image1RefX + image1RefWidth - 200;
    } else {
      coverPoint.x = currentX;
    }
    // coverPoint.x = moveX - diffX;
    // coverPoint.y = moveY - diffY;
    if (currentY + 200 >= image1RefY + image1RefHeight) {
      currentY = image1RefY + image1RefHeight - 200;
    }
    if (currentY <= image1RefY) {
      currentY = image1RefY;
    }

    coverPoint.y = currentY;

  }

  maskRef.value.addEventListener('mousemove', mouseMove);
  maskRef.value.addEventListener('mouseup', function() {
    maskRef.value.removeEventListener('mousemove', mouseMove);
    const ctx = canvas1Ref.value.getContext('2d'); 
    // 五个参数的时候，后四个数据代表画布的 起点和宽高， 九个参数的时候 2-5 代表图片 起点和宽高
    // 因为图片进行了缩放，所以等比取宽高
    const x = (coverPoint.x - image1Ref.value.offsetLeft) / image1Ref.value.width * image1Ref.value.naturalWidth;
    const y = (coverPoint.y - image1Ref.value.offsetTop) / image1Ref.value.height * image1Ref.value.naturalHeight;
    const w = 200 / image1Ref.value.width * image1Ref.value.naturalWidth
    const h = 200 / image1Ref.value.height * image1Ref.value.naturalHeight
    ctx.drawImage(image1Ref.value, x, y, w, h, 0, 0, 200, 200);
    isMaskShow.value = false;
  }, {once: true});
}

onMounted(() => {
  // console.log(image1Ref.value.naturalWidth);
  // console.log(image1Ref.value.naturalHeight);
  console.log(image1Ref.value.getBoundingClientRect());
})

</script>

<template>

<div class="line"></div>

<div @click="imageCuter">截图</div>

<input type="file" @change="change">

<div></div>

<img @load="image1Load" ref="image1Ref" width="300" :src="imageSrc" alt="" srcset="">

<canvas ref="canvas1Ref" width="200" height="200"></canvas>

<div ref="maskRef" class="mask" v-show="isMaskShow" >
  <div 
    ref="coverRef" 
    class="cover"
    @mousedown="mouseDown($event)"
    :style="{
      left: coverPoint.x + 'px',
      top: coverPoint.y + 'px',
    }"
  ></div>
</div>
</template>

<style scoped>
.line {
  width: 100%;
  height: 1px;
  background-color: black;
  margin: 20px 0;
}

.mask {
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  position: fixed;
  background-color: rgba(0, 0, 0, 0.2);
}

.cover {
  width: 200px;
  height: 200px;
  border: 1px solid red;
  box-sizing: border-box;
  position: absolute;
}
</style>