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
import VueOfficeDocx from '@vue-office/docx';
import Docxtemplater from 'docxtemplater';
import { renderAsync } from 'docx-preview';
import { saveAs } from 'file-saver';
import Pizzip from 'pizzip';

const wordPath = ref(null);
const docxPreview = ref(null);

const change = e => {
  const file = e.target.files[0];

  /**
   * 预览
   */
  // 预览第一种
  // 转化为 base64 预览
  const fr = new FileReader()
  fr.readAsDataURL(file);
  fr.onload = function() {
    wordPath.value = fr.result;
  }

  // 预览第二种
  // blob arrayBuffer
  renderAsync(file, docxPreview.value);
}

const templateRenderChange = (e) => {
  const file = e.target.files[0];
  const data = [
    {
      name: 'zs', id: 100, score: 99,
    },
    {
      name: 'ls', id: 200, score: 99,
    },
    {
      name: 'ww', id: 300, score: 99,
    }
  ];
  file.arrayBuffer().then(res => {
    const zip = new Pizzip(res);
    const doc = new Docxtemplater(zip);
    doc.setData(data);
    doc.render();
    const out = doc.getZip().generate({
      type: 'blob',
      // 二进制文档的类型
      mimeType: 'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
    })
    saveAs(out, 'test.docx');
  })
}

</script>

<template>
  <div>上传 docx</div>
  <input type="file" @change="change($event)">
  <VueOfficeDocx :src="wordPath" />
  <div ref="docxPreview"></div>

  <div>点击上传模板渲染展示数据</div>
  <input type="file" @click="templateRenderChange($event)" name="" id="">
  
</template>

<style scoped>

</style>