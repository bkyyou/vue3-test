<template>
  <div>
    <transition-group name="drag" class="list" tag="ul">
      <li @dragstart="dragStart(item, index)" @dragover.prevent="dragOver(index)" @dragend="dragEnd()" draggable
        v-for="(item, index) in todolist" :key="item.label" :class="['list-item', { 'is-dragover': index === newIndex }]">
        {{ item.label }}
      </li>
    </transition-group>
  </div>
</template>
<script setup>
// https://blog.csdn.net/alokka/article/details/126088642

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
  defineExpose,
} from 'vue';

const todolist = reactive([
  { label: "列表1" },
  { label: "列表2" },
  { label: "列表3" },
  { label: "列表4" },
  { label: "列表5" },
  { label: "列表6" },
])
const oldIndex = ref('')
const oldData = ref('')
const newIndex = ref('')

function dragStart(val, i) {
  console.log(val, i);
  this.oldIndex = i;
  this.oldData = val;
}

function dragOver(i) {
  this.newIndex = i;
}

function dragEnd() {
  let newItems = [...this.todolist];
  // 删除老的节点
  newItems.splice(this.oldIndex, 1);
  // 在列表中目标位置增加新的节点
  newItems.splice(this.newIndex, 0, this.oldData);
  this.todolist = [...newItems];
  this.newIndex = "";
}
</script>
<style scoped>
.list {
  list-style: none;
}

.drag-move {
  transition: transform 0.3s;
}

.list-item {
  position: relative;
  cursor: move;
  width: 300px;
  background: #2997f4;
  border-radius: 4px;
  color: #FFF;
  margin: 10px 0;
  height: 50px;
  line-height: 50px;
  text-align: center;
}

.list-item.is-dragover::before {
  content: "";
  position: absolute;
  bottom: -8px;
  left: 0;
  width: 100%;
  height: 4px;
  background-color: #0c6bc9;
}

.list-item.is-dragover::after {
  content: "";
  position: absolute;
  bottom: -12px;
  left: -6px;
  border: 3px solid #0c6bc9;
  border-radius: 50%;
  width: 6px;
  height: 6px;
  background-color: #fff;
}
</style>