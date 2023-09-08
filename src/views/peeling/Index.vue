<script setup>
import {
  reactive,
  ref,
} from 'vue';

const changeTheme = (theme) => {
  document.documentElement.setAttribute('data-skin', theme);
}
</script>

<template>
  <div class="change_theme">
    <el-button @click="changeTheme('skin1')">切换skin1</el-button>
    <el-button @click="changeTheme('skin2')">切换skin2</el-button>
  </div>
  <my-header></my-header>
  <my-button>按钮</my-button>
</template>

<style scoped>
.change_theme {
  margin-bottom: 20px
}
</style>