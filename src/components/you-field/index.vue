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
import youInput from '../you-input/index.vue';
import youSelect from '../you-select/index.vue';
const props = defineProps({
  // type: {
  //   type: String,
  //   required: true,
  // },
  modelValue: String ,
  model: {
    type: Object,
    required: true,
  },
  config: {
    type: Object,
    required: true,
  },
  // name: {
  //   type: String,
  //   required: true,
  // },
})
const emit = defineEmits(['update:modelValue']);
const { config: { type } } = props;
const name = ref(null);

// console.log('props.test', props.config);
console.log('props.model', props.model);
watch([name], () => {
  emit('update:modelValue');
})

</script>

<template>
  <!-- <you-input v-if="type === 'input'" :model="model" :config="config"></you-input>
  <you-select v-if="type === 'select'" :model="model" :config="config"></you-select> -->
  <!-- <el-input v-if="type === 'input'" v-model="name" ></el-input> -->
  <el-form-item 
      v-for="(v, i) in fields" 
      :key="v.name"
      :label="v.label"
      :prop="v.name"
    >
      <you-field 
        v-model="formObj[v.name]"
        :config="v"
        :test="test"
      >
      </you-field>
    </el-form-item>
</template>

<style scoped>

</style>