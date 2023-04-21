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
  withDefaults,
  defineExpose,
} from 'vue';
import youField from '../you-field/index.vue';
const props = defineProps({
  // formRef: {
  //   // type: Ref,
  //   required: true,
  // },
  fieldColumns: {
    type: Array,
    required: true
  },
  formOpt: {
    type: Object,
  },
})
const emit = defineEmits(['submit', 'reset'])
const formRef = ref(null);
const formData = reactive({});
const test = ref(0);

const onSubmit = () => {
  console.log('submit!')
  emit('submit', formData);
}

const onReset = (formEl) => {
  console.log('onReset!');
  // for (const key in formData) {
  //   formData[key] = ''
  // }
  formRef.value.resetFields();
  emit('reset', {});
}

defineExpose({
  formRef,
  onSubmit,
  onReset,
})
</script>

<template>
  <!-- <el-form :inline="true" :model="_formData" :ref="_formRef">
      <el-input v-model="_formData.aaa"></el-input>
      <el-form-item 
        v-for="(v, i) in fields" 
        :key="v.name"
        :label="v.label"
        :prop="v.name"
      >
        <you-field 
          v-model="formData[v.name]"
          :config="v"
          :test="test"
        >
        </you-field>
      </el-form-item>
      <el-form-item>
        <el-button @click="onReset">重置</el-button>
        <el-button type="primary" @click="onSubmit">搜索</el-button>
      </el-form-item>
    </el-form> -->

  <!-- 动态表单 -->
  <component v-bind="formOpt" :is="'el-form'" ref="formRef" :model="formData" :inline="true"  class="demo-ruleForm">
    <template v-for="item in fieldColumns" :key="item.name">
      <component :is="'el-form-item'" :prop="item.name" :label="item.label" v-bind="item.formItemOpt">
        <component :is="`el-${item.type}`" v-model="formData[item.name]" v-bind="item.opt">
          <template v-if="item.type === 'select'">
            <el-option v-for="val in item.enumValue" :key="val.value" :value="val.value" :label="val.label"></el-option>
          </template>
        </component>
      </component>
    </template>

    <el-form-item>
      <el-button @click="onReset(formEl)">重置</el-button>
      <el-button type="primary" @click="onSubmit">搜索</el-button>
    </el-form-item>
  </component>
</template>

<style scoped></style>