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

const loading = ref(false);

const changeLoading = () => {
  loading.value = !loading.value;
}
</script>

<template>
  <button @click="changeLoading">loading</button>

  <div class="loadingWrapper" v-myloading="loading">

  </div>
</template>

<style scoped>
.loadingWrapper {
  width: 300px;
  height: 300px;
  background-color: red;
  margin-top: 10px;
}
</style>