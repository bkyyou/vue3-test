<!-- <script setup name="scrolltable"> -->
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
  defineEmits,
  provide,
} from 'vue';
import { throttle } from 'lodash';

const props = defineProps({
  dataList: Array,
  isLoading: Boolean
})
const emit = defineEmits(['request']);

const total = 1000;
const { dataList, isLoading } = props;
const height = 40;
const start = ref(0);
const over = ref(20);
const tableRef = ref({});
const divRef = ref({});
const rowHeight = [];
const isadd = ref(false);
// const dataList = reactive([]);

const getData = async (querys) => {
  emit('request', querys);
  // const res = await emit('request', querys);
  // console.log('res'. res);
  // dataList.push(res);
}

// const sum = (arr) => arr.reduce((prev, curr) => prev + curr)
const sum = (arr) => {
  // console.log('arr', arr);
  let _sum = 0;
  arr.forEach(num => {
    _sum += num
  });
  return _sum
}

const addRowHeight = () => {
  setTimeout(() => {
    const tableRowsDom = document.querySelector('.you_table').querySelectorAll('.el-table__row')
    // console.log('tableRowsDom', tableRowsDom);
    for (let i = tableRowsDom.length - 1; i >= tableRowsDom.length - 20; i--) {
      rowHeight.push(tableRowsDom[i].clientHeight)
    }

    // console.log('-----=====', rowHeight)

  }, 200);
}

const scroll = throttle((e) => {
  const { scrollTop, clientHeight, scrollHeight } = e.target;
  const viewDom = document.querySelector('.you_table').querySelector('.el-scrollbar__view');
  // const tableDom = document.querySelector('.you_table').querySelector('.el-table__body');
  // const { scrollTop: tablescrollTop, clientHeight: tableclientHeight, scrollHeight: tablescrollHeight } = tableDom;

  // console.log('tablescrollTop', tablescrollTop);
  // console.log('tableclientHeight', tableclientHeight);
  // console.log('tablescrollHeight', tablescrollHeight);
  // if (scrollTop + clientHeight >= scrollHeight) {
  //   if (over.value >= props.dataList.length) {
  //     return;
  //   }
  //   over.value += 20
  //   over.value += 20
  //   viewDom.style.paddingBottom = (dataList.length - over.value) * height + 'px';
  //   viewDom.style.paddingTop = start.value * height + 'px';
  // } else if (scrollTop + clientHeight >= scrollHeight) {
  //   if (start.value <= 0) {
  //     return;
  //   }
  //   over.value -= 20
  //   over.value -= 20
  //   viewDom.style.paddingBottom = (dataList.length - over.value) * height + 'px';
  //   viewDom.style.paddingTop = start.value * height + 'px';
  // }

  // 方案一
  // if (scrollTop + clientHeight >= scrollHeight) {
  //   if (over >= props.dataList.length) {
  //     return;
  //   }
  //   over.value += 15
  // }

  // 方案二
  // start.value = Math.max(scrollTop / height - 5, 0);
  // over.value = Math.min((scrollTop + clientHeight) / height + 5, dataList.length);
  // viewDom.style.paddingBottom = (dataList.length - over.value) * height + 'px';
  // viewDom.style.paddingTop = start.value * height + 'px';

  // 方案三
  if (isLoading) {
    return;
  }
  if (scrollTop + clientHeight >= scrollHeight && dataList.length <= total) {
    // if (over >= dataList.length) {
    //   return;
    // }
    getData();
    over.value += 20
    isadd.value = true;
  } else if (isadd) {
    // console.log('=======', dataList);
    let _startH = 0;
    let _startI = 0;
    let _endH = 0;
    let _endI = 0;
    for (let i = 0; i < rowHeight.length; i++) {
      _startH += rowHeight[i]
      if (_startH >= scrollTop && _startH !== 0) {
        _startI = i;
        break;
      }
      // if (condition) {
      // }
    }

    start.value = Math.max(_startI, 0);
    // console.log('start.value', start.value)
    over.value = start.value + 20;
    viewDom.style.paddingTop = sum(rowHeight.slice(0, start.value)) + 'px';
    // console.log('sum(rowHeight.slice(over.value))', sum(rowHeight.slice(over.value)))
    viewDom.style.paddingBottom = sum(rowHeight.slice(over.value)) + 'px';
    // console.log('over.value', over.value);
  }

}, 200);

getData({page: 1, size: 20});

watch([dataList], () => {
  addRowHeight();
})

onMounted(() => {
  document.querySelector('.you_table').querySelector('.el-scrollbar__wrap').addEventListener('scroll', scroll)
  // 方案二
  // document.querySelector('.you_table').querySelector('.el-scrollbar__view').style.paddingBottom = height * (dataList.length - (over - start)) + 'px';

  addRowHeight()
})
</script>

<template>
  <div ref="divRef"></div>
  <el-table class="you_table" ref="tableRef" :data="dataList.slice(start, over)" style="width: 100%;height: 440px;">
    <el-table-column prop="date" label="Date" width="180" />
    <el-table-column prop="date" label="Date" width="50" />
    <!-- <el-table-column prop="name" label="Name" width="180" /> -->
    <el-table-column prop="id" label="id" />
  </el-table>
</template>

<style scoped></style>