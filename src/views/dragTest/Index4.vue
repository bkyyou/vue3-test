<script setup>
import {
  reactive,
  ref,
  onMounted,
  // onCreated,
  onUpdated,
  watch,
  watchEffect,
  computed,
  defineProps,
  provide,
} from 'vue';
import Item from './Item.vue';

const divRef = ref(null);
const list = reactive({
  data: new Array(10).fill({id: -1, label: ''}).map((val, i) => ({id: i, label: `第${i + 1}个`}))
})
const transPosiArr = ref(list.data.map(val => 0));
const currDragIndex = ref(-1);

console.log('list', list);

// const changeTransPosiArr = (i, offset) => {
//   transPosiArr.value.splice(i, 1, offset);
//   console.log('transPosiArr', transPosiArr.value);
// }

const changeTransPosiArr = (newTransPosiArrArr) => {
  transPosiArr.value = newTransPosiArrArr;
  // console.log('transPosiArr', transPosiArr.value);
}

const changeList = (newIndex, oldIndex) => {
  // list.data = newList;
  console.log(newIndex, oldIndex);
  const obj = list.data[oldIndex];
  const _list = [...list.data];
  // 本来应该放到 newIndex 后边的， splice 是放到前面的位置，所以需要 newIndex + 1, 或者 数组减 1
  _list.splice(newIndex, 0, _list.splice(oldIndex, 1)[0]);
  list.data = _list;
}

const setCurrDragIndex = (index) => {
  currDragIndex.value = index;
}

// onCreated(() => {
//   list.data.forEach(val => {
//     transPosiArr.value.push(0)
//   });
// })

onMounted(() => {
  
})

const obj = {color: 'red'}
</script>

<template>
<div>
  <Item 
    v-for="(v, i) in list.data" 
    :key="v.id" 
    ref="divRef" 
    :index="i"
    :transPosiArr="transPosiArr"
    :currDragIndex="currDragIndex"
    :dataLength="list.data.length"
    @changeTransPosiArr="changeTransPosiArr"
    @changeList="changeList"
    @setCurrDragIndex="setCurrDragIndex"
  >
    {{ v.label }}
  </Item>
</div>

</template>

<style scoped>
</style>