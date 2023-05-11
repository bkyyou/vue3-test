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
  defineExpose,
} from 'vue';
import baseTable from './baseTable.vue';
import youSearchForm from '../you-form/you-search-form.vue';

const props = defineProps({
  tableColumns: {
    type: Array,
  },
  tableData: {
    type: Array,
  },
  fieldColumns: {
    type: Array,
  },
  formOpt: {
    type: Object,
  },
})
const emit = defineEmits('request');

const formRef = ref(null);
const loading = ref(false);

const newRequest = (data) => {
  console.log(data);
  loading.value = true;
  emit('request', {data, cb: () => {
    loading.value = false;
  }});
}

const search = () => {
  formRef.value.onSubmit();
}
const reset = () => {
  formRef.value.onReset();
}

onMounted(() => {
  emit('request');
})

defineExpose({
  search,
  reset,
  formRef,
})


</script>

<template>
  <div>
    <you-search-form ref="formRef" :formOpt="formOpt" @submit="newRequest" @reset="newRequest" :fieldColumns="fieldColumns">
    </you-search-form>

    <base-table :tableColumns="tableColumns" :tableData="tableData" :loading="loading" >
    </base-table>
  </div>
</template>

<style scoped></style>