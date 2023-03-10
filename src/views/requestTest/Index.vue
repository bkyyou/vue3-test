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
import axios from 'axios';

let file = null;

const api1Client = () => {
  axios.get('http://localhost:5000/api1?a=1').then(res => {
    console.log('res', res);
  })
}

const api2Client = () => {
  axios.post('http://localhost:5000/api2', {
    firstname: 'Fred',
    lastName: 'Flintstone'
  }).then(res => {
    // axios.post('http://localhost:5000/api2', JSON.stringify({a: 1})).then(res => {
    console.log('res', res);
  })
//   axios({
//     method: 'post',
//     url: 'http://localhost:5000/api2',
//     data: {
//         firstName: 'Fred',
//         lastName: 'Flintstone'
//     },
//     withCredentials: true
// })
}

const fileChange = (e) => {
  console.log('e', e);
  file = e.target.files[0];
}

const submit = () => {
  const fm = new FormData;
  fm.append('file', file);
  axios.post('http://localhost:5000/upload', fm).then(res => {
    console.log('file upload res', res);
  })
}
</script>

<template>
  <div>
    <div class="common_point" @click="api1Client">api1 get 接口请求</div>
    <div class="common_point" @click="api2Client">api2 post 接口请求</div>

    <input type="file" @change="fileChange($event)">
    <button @click="submit">文件提交</button>
  </div>
</template>

<style scoped></style>