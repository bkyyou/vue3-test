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

const dataList = reactive([])
const isLoading = ref(false);

setTimeout(() => {
  for (let i = 0; i < 200; i++) {
    dataList.push({
      id: i,
      date: '2016-05-03',
      name: 'Tom',
      // address: 'No. 189, Grove St, Los Angeles',
    })
  }
}, 2000);
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
  <el-table v-myscroll="dataList" :data="dataList" style="width: 100%;height: 500px;">
    <el-table-column prop="date" label="Date" width="180" />
    <el-table-column prop="name" label="Name" width="180" />
    <el-table-column prop="address" label="Address" />
  </el-table>
</template>

<style scoped></style>