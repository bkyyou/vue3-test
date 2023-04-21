<script setup ts="jsx">
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
  h,
} from 'vue';

const props = defineProps({
  tableColumns: {
    type: Array,
    required: true,
  },
  tableColumnOpt: {
    type: Object,
  },
  tableData: {
    type: Array,
  },
  tableOpt: {
    type: Object,
  },
  loading: {
    type: Boolean,
  },
})

const aaa = '1111'

</script>

<template>
  <el-table :data="tableData" v-bind="tableOpt" v-loading="loading"  element-loading-background = "rgba(0, 0, 0, 0.5)">
    <!-- <el-table-column v-if="loading" >
    加载中
  </el-table-column> -->
    <!-- <template v-else > -->
    <el-table-column 
      v-for="(item, i) in tableColumns" 
      :key="i"
      :prop="item.prop" 
      :label="item.label" 
      v-bind="tableColumnOpt"
    >
      <template #default="{row, $index}">
        <!-- {{ JSON.stringify(tableColumns)}} -->
        <!-- {{ (scope.row.name) }} -->

        <template v-if="tableColumns[i].render">
          <!-- {{ tableColumns[i].render(h, row) }} -->
          <!-- <component :is="tableColumns[i].render" :data="row"></component> -->
          <component :is="tableColumns[i].render(row)" ></component>
         <!-- <template v-html="tableColumns[i].render(h, row)"></template> -->
        </template>
        <template v-else>{{ row[tableColumns[i].prop] }}</template>
      </template>
      <!-- 找不到 item 可以找到 aaa-->
      <!-- <template>
        {{ item.name + aaa }}
      </template> -->
    </el-table-column>
  <!-- </template> -->
 
  </el-table>
</template>

<style scoped>

</style>