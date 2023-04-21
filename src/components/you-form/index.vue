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
  Ref
} from 'vue';
import youField from './you_field';
defineProps({
  ref: {
    type: Ref,
    required: true
  },
  // formCon: {
  //   type: Object,
  //   required: true,
  // },
  // formItemCon: {
  //   type: {},
  // },
  fields: {
    type: Array,
    required: true
  },
  formObj: {
    type: Object,
    // required: true
  },
})

// const formObj = reactive({})


</script>

<template>
  <!-- <el-form :model="formObj" :ref="ref"> -->
    <el-form-item 
      v-for="(v, i) in fields" 
      :key="fields[i].name"
      :label="fields[i].name"
      :prop="fields[i].name"
    >
      <you-field 
        :model="formObj" 
        :name="fields[i].name" 
        :type="fields[i].type"
      >
      </you-field>
    </el-form-item>
  <!-- </el-form> -->
</template>

<style scoped>

</style>