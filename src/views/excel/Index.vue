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
// @vue-office/docx @vue-office/pdf
import vueOfficeExcel from '@vue-office/excel';
import '@vue-office/excel/lib/index.css';
import { read, writeFile, utils } from 'xlsx';
import { getStudentSource } from './request.js';

// 1.本地读取文件，读取为html和数据对象
// 2.请求，读取为前端html和数据对象
// 3.把前端table dom 转化为 html
// 4.把前端对象转化为excel

let excelHtml = ref('<div></div>');
const excelSrc = ref('/test.xlsx');
const tableExcel = ref(null)

// 获取本地文件
const change = e => {
  const file = e.target.files[0];
  file.arrayBuffer().then(res => {
    console.log('res', res);
    const wb = read(res); // workbook
    const sheet1 = wb.Sheets.sheet1;
    // utils.sheet_to_html
    // 获取数据
    const _data = utils.sheet_to_json(sheet1);
    // console.log('_data', _data);
    // 预览
    excelHtml.value = utils.sheet_to_html(sheet1);
    console.log('excelHtml', excelHtml);
  })

  // 转化为 base64 预览
  const fr = new FileReader()
  fr.readAsDataURL(file);
  fr.onload = function() {
    excelSrc.value = fr.result;
  }
}

// 从接口获取数据
const getStudentSourceRequest = async () => {
  const data = await getStudentSource();
  data.arrayBuffer().then(res => {
    console.log('res', res);
    const wb = read(res); // workbook
    const sheet1 = wb.Sheets.sheet1;
    // utils.sheet_to_html
    const _data = utils.sheet_to_json(sheet1);
    console.log('_data', _data);
    excelHtml.value = utils.sheet_to_html(sheet1);
    console.log('excelHtml', excelHtml);
  })
}
const createExcel = () => {
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
  // 转化 data 数组
  const ws = utils.json_to_sheet(data);
  const wb = utils.book_new();
  utils.book_append_sheet(wb, ws, 'sheet1');
  writeFile(wb, 'test.xlsx');

  // 转化 table dom
  // 直接转换
  // const tableWb = utils.table_to_book(tableExcel.value);
  const tableWs = utils.table_to_sheet(tableExcel.value);
  const wb2 = utils.book_new(tableExcel.value);
  utils.book_append_sheet(wb2, tableWs, 'sheet1');
  writeFile(wb2, 'test2.xlsx');
}

</script>

<template>
  <div>
    <div class="fileWrapper">
      <div>上传excel文件</div>
      <input type="file" @change="change($event)">
      <div>展示</div>
      <div class="excel-content" v-html="excelHtml"></div>
    </div>
    <div class="fileWrapper">
      <button @click="getStudentSourceRequest">请求excel</button>
    </div>

    <div class="fileWrapper">
      <button @click="createExcel">创建一个excel</button>
    </div>
    
    <div class="fileWrapper">
      <div>转化为 ref dom</div>
      <div ref="tableExcel">
        <table>
          <thead>
            <tr>
              <th>科目</th>
              <th>人数</th>
              <th>平均分</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td rowspan="3" >数学</td>
              <td>100</td>
              <td>100</td>
            </tr>
            <tr>
              <td>100</td>
              <td>100</td>
            </tr>
            <tr>
              <td>100</td>
              <td>100</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>

    <div>
      <vue-office-excel :src="excelSrc" style="height: 500px;width: 90%;"></vue-office-excel>
    </div>

  </div>
</template>

<style scoped>
.fileWrapper {
  padding-left: 100px;
  padding-top: 30px;
  box-sizing: border-box;
  margin-bottom: 20px;
}

.excel-content :deep(table) {
  border-collapse: collapse;
}
.excel-content :deep(td) {
  border: 1px solid black;
}
.excel-content :deep(th) {
  border: 1px solid black;
}
</style>