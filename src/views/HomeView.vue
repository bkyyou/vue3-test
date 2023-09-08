<script setup>
import TheWelcome from '../components/TheWelcome.vue'
import { routes } from '@/router/index.js';
import {useRouter} from 'vue-router';

const router = useRouter();

const blackList = ["home", "404"];

const go = (path) => {
  router.push(path);
}

</script>

<template>
  <main>
    <!-- <TheWelcome /> -->
    <ul>
      <li v-for="v in routes" :key="v.name" @click="go(v.path)" v-show="v.navName"> {{ v.navName }}</li>
    </ul>
  </main>
</template>

<style scoped lang="scss">
li {
  cursor: pointer;
  width: 360px;

  &:hover {
    background-color: skyblue;
  }
}
</style>
