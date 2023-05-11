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
import MyDialog from '@/components/myDialog/Index.vue';
</script>

<template>
<div class="testmydialog">
  <div class="content">

  </div>
  <my-dialog></my-dialog>
</div>
</template>

<style scoped>
.testmydialog{
  width: 100%;
  height: 100%;
  overflow-y: scroll;
}
.content {
  width: 100%;
  height: 3000px;
}
</style>