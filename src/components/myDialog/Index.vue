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

</script>

<template>
<div class="cover">
  <div class="dialog">
    <div class="close" @click="">X</div>
    <div class="title">
      <slot name="title">
        <div class="default-title">
          {{ title }}
        </div>
      </slot>
    </div>

    <div class="content">

    </div>
  </div>
</div>
</template>

<style scoped>
.cover {
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.15);
  outline: 0;
  z-index: 999;
  overflow: auto;
}
</style>