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

const list = reactive({
  data: [
  {
    label: '第一个',
    id: 0,
  },
  {
    label: '第二个',
    id: 1,
  },
  {
    label: '第三个',
    id: 2,
  },
]
})

const changeSeq = () => {
  list.data = [
    {
      label: '第三个',
      id: 2,
    },
    {
      label: '第二个',
      id: 1,
    },
    {
      label: '第一个',
      id: 0,
    },
  ]
}
</script>

<template>
<div>
  <div @click="changeSeq">改变数据顺序</div>
  <ul>
    <li v-for="(v, i) in list.data" :key="v.id">
      {{ v.label }}
    </li>
  </ul>
</div>
</template>

<style scoped>
ul li {
  transition: "transform 3s, box-shadow .2s";
}
</style>