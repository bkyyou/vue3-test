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
  provide,
} from 'vue';
import you_table from '@/components/you_table/Index.vue';

const dataList = reactive([])
const isLoading = ref(false);

// const dataList = [
//   {
//     date: '2016-05-03',
//     name: 'Tom',
//     address: 'No. 189, Grove St, Los Angeles',
//   },
//   {
//     date: '2016-05-02',
//     name: 'Tom',
//     address: 'No. 189, Grove St, Los Angeles',
//   },
//   {
//     date: '2016-05-04',
//     name: 'Tom',
//     address: 'No. 189, Grove St, Los Angeles',
//   },
//   {
//     date: '2016-05-01',
//     name: 'Tom',
//     address: 'No. 189, Grove St, Los Angeles',
//   },
// ]

// setTimeout(() => {
//   for (let i = 0; i < 200; i++) {
//     dataList.push({
//       id: i,
//       date: '2016-05-03',
//       name: 'Tom',
//       // address: 'No. 189, Grove St, Los Angeles',
//     })
//   }
// }, 2000);

let currentI = 0;

const request = async () => {
  // console.log('request', request)
  // return new Promise(resolve => {
  //   const _dataList = [];
  //   for (let i = 0; i < 20; i++) {
  //     _dataList.push({
  //       id: i,
  //       date: '2016-05-03',
  //       name: 'Tom',
  //       // address: 'No. 189, Grove St, Los Angeles',
  //     })
  //   };
  //   console.log('_dataList', _dataList)
  //   // setTimeout(() => {
  //     resolve(_dataList)
  //   // }, 1000);
  // })
  isLoading.value = true;
  const _dataList = [];
  for (let i = currentI; i < currentI + 20; i++) {
    dataList.push({
      id: i,
      date: '2016-05-03',
      name: 'Tom',
      // address: 'No. 189, Grove St, Los Angeles',
    })
  };
  currentI += 20
  isLoading.value = true;
}
</script>
<!-- <script>
export default {
  name: 'scrolltable',
  data: function () {
    return {
      dataList: [],
      // start: 0,
      // over: 5,
    }
  },
  mounted() {
    setTimeout(() => {
      for (let i = 0; i < 200; i++) {
        this.dataList.push({
          id: i,
          date: '2016-05-03',
          name: 'Tom',
          address: 'No. 189, Grove St, Los Angeles',
        })
      }
    }, 2000);
  }
}
</script> -->

<template>
  <you_table :dataList="dataList" @request="request" :isLoading="isLoading"></you_table>
</template>

<style scoped></style>