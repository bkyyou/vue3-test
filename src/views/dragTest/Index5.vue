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
    let oldData = null; // 开始排序时按住的旧数据
    let newData = null; // 拖拽过程的数据
 
    // 列表数据
    const  dataList = reactive({
        data: [
        { id:1,label:'测试一号' },
        { id:2,label:'测试二号' },
        { id:3,label:'测试三号' },
        { id:4,label:'测试四号' },
      ]
      });
 
    function dragstart(value) {
      oldData = value
    }
 
    // 记录移动过程中信息
    function dragenter(value, e) {
      newData = value
      e.preventDefault()
    }
 
    // 拖拽最终操作
    function dragend(value, e) {
      if (oldData !== newData) {
        let oldIndex = this.dataList.data.indexOf(oldData)
        let newIndex = this.dataList.data.indexOf(newData)
        let newItems = [...this.dataList.data]
        // 删除老的节点
        newItems.splice(oldIndex, 1)
        // 在列表中目标位置增加新的节点
        newItems.splice(newIndex, 0, oldData)
        this.dataList.data = [...newItems]
      }
    }
 
 
    // 拖动事件（主要是为了拖动时鼠标光标不变为禁止）
   const dragover = function(e) {
      e.preventDefault()
    }
</script>

<template>
<div class="test_wrapper" @dragover="dragover($event)">
    <transition-group class="transition-wrapper" name="sort">
      <div v-for="(item) in dataList.data" :key='item.id' class="sort-item"
        :draggable="true"
        @dragstart="dragstart(item)"
        @dragenter="dragenter(item,$event)"
        @dragend="dragend(item,$event)"
        @dragover="dragover($event)"
      >
        {{ item.label }}
      </div>
    </transition-group>
  </div>
</template>

<style scoped>
.sort-move {
  transition: transform 0.3s;
}
</style>