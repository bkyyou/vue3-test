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
import { ElMessage } from 'element-plus';
import {useRouter} from 'vue-router';
import { upload } from '@/api/index.js';


const router = useRouter();

const inputData = ref('');

let base64 = ref('');
// let base64 = reactive('');
let fileobj = {};

const imgsList = reactive([]);
const pre = ref(0)

const fileChange = (e) => {
  // console.log('e', e.target.files[0]);
  // const file = e.target.files[0];
  // fileobj = file;
  // if (e.size > 10 * 24 * 24) {
  //   ElMessage.warn('文件不能大于10M');
  //   return
  // }
  // // if (e.type !== 'video/mp4') {
  // //   ElMessage.warn('文件只能是mp4');
  // //   return
  // // }
  // const _blob = new Blob([file]);
  // const _sliceBlob = _blob.slice(0, 50000);
  // const _sliceFile = new File([_sliceBlob], 'test.png'); 
  // const fr = new FileReader();
  // fr.readAsDataURL(_sliceFile);
  // // fr.readAsDataURL(file);
  // fr.onload =  function() {
  //   base64.value = fr.result;
  //   console.log(base64);;
  // }

  // 多文件上传
  // console.log('e', e.target.files);
  const files = e.target.files;
  for (const val of files) {
    imgsList.push(val);
  }

  // 切片上传
  // fileobj = e.target.files[0];
}


const submit = async (e) => {
  console.log('e', e);
  const fd = new FormData();
  // fd.append('file', fileobj);
  // fd.append('user', 'zhangsan');
  // 多文件上传是循环上传？？？
  imgsList.forEach(file => {
    fd.append('file', file);
    // await axios.post('**', fd);
  });
  // axios.post('http://', fd);
  const res = upload(fd)
  console.log('upload res', res);

  // 切片上传
  // const size = 2 * 1024 * 1024; // 2M
  // const fileSize = fileobj.size;
  // let current = 0;
  // while (current < fileSize) {
  //   const fd = new FormData();
  //   fd.append('file', fileobj.slice(current, current + size));
  //   await axios.post('http:localhost:4000/upload', fd)
  //   pre.value = Math.min(Math.ceil(current / fileSize * 100), 100) + '%' ;
  //   current += size;
  // }
  // 断点续传
  // 前端记住上传的位置
}

const goTestdrag = () => {
  console.log(1111);
  sessionStorage.setItem("key1", '1111');
  router.push('/testdrag');
}

onMounted(() => {
  // const file = new File(['111'], 'a.text');
  // console.log('file', file);
  // const _blob = new Blob([file]);
  // console.log(_blob);
  
})

</script>

<template>
<div>
  <div @click="goTestdrag">跳转</div>
  <input type="text" v-model="inputData">
  <!-- 默认参数是 query， 可以指定为 formdata -->
  <!-- <form action="" method="post" enctype="multipart/form-data"></form> -->
  <input type="file" name="file" @change="fileChange($event)" multiple>
  <button @click="submit">提交</button>

  <div>进度 {{ pre }}</div>

  <div v-for="(val,i) in imgsList" :key="i">
    {{ i }}. {{ val.name }}
  </div>

  <h2>预览</h2>
  <div>{{ base64 }}</div>
  <img :src="base64" alt="" srcset="">
</div>
</template>

<style scoped>

</style>