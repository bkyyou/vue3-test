<script setup lang="jsx">
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
  defineComponent,
} from 'vue';
import youSearchForm from '@/components/you-form/you-search-form.vue';
import searchTable from '@/components/you-table/searchTable.vue';

const DATA = [
  {
    name: 'zs',
    age: '1',
    sex: '1',
  },
  {
    name: 'ls',
    age: '1',
    sex: '1',
  },
  {
    name: 'ww',
    age: '1',
    sex: '2',
  },
  {
    name: '66',
    age: '1',
    sex: '2',
  },
]
const fieldColumns = [
  {
    name: 'name',
    label: 'name',
    type: 'input',
  },
  {
    name: 'age',
    label: 'age',
    type: 'input',
  },
  {
    name: 'sex',
    label: 'sex',
    type: 'select',
    // bind
    enumValue: [
      {
        label: '男',
        value: '1',
      },
      {
        label: '女',
        value: '2',
      },
    ]
  },
]
const tableColumns = [
  {
    prop: 'name',
    label: 'name',
  },
  {
    prop: 'age',
    label: 'age',
  },
  {
    prop: 'sex',
    label: 'sex',
    /**
     * 第二种 不推荐
     * <div v-html="tableColumns[i].render(h, row)"></div> 
     */
    // render(h, data) {
    //   return `<div>${data.sex}</div>`
    // }

    /**
     * 第一种
     * 相对应 <component :is="tableColumns[i].render" :data="row"></component>
     */
    // render: defineComponent({
    //   props: {
    //     data: Object
    //   },
    //   setup(props, context) {
    //     console.log('1111111===', props);
    //     return () => {
    //       return <div>{props.data.sex}</div>;
    //     };
    //   },
    // })

    // render: <div>111</div>

    /**
     * 第三种
     * 相对应 <component :is="tableColumns[i].render(h, row)" ></component>
     */
    // render: (h, data) => {
    //   console.log(h, data);
    //   return h('div', {}, data.sex)
    // }

    /**
     * 第四种
     * 相对应 <component :is="tableColumns[i].render(row)" ></component>
     * @param {*} data 
     */
    render(data) {
      return <div>{ data.sex }</div>
    }
  },
];

const tableData = reactive({data: []});
const searchTableRef = ref();

const submit = (data) => {
  console.log('testsearchtable', data);
}

const _filter = (data, filterObj) => {
  let _data = [];
  const keys = Object.keys(filterObj)
  data.forEach(val => {
    let flag = true;
    for (const key of keys) {
      if (filterObj[key] === undefined || filterObj[key] === '') {
        
      } else {
        if (val[key] === filterObj[key]) {
          
        } else {
          flag = false;
          break;
        }
      }
    }
    if (flag) {
      _data.push(val);
    }
  })
  return _data;
}
const request = (query = {}) => {
  const {data = {}, cb} = query;
  setTimeout(() => {
    tableData.data = _filter(DATA, data);
    cb && cb();
  }, 1000); 
}
const testSearch = () => {
  console.log('searchTableRef.value', searchTableRef.value);
  searchTableRef.value.search();
}
</script>

<template>
  <!-- <el-button @click="testSearch">测试搜索</el-button> -->
  <!-- <you-search-form :formOpt="{size: 'small'}" @submit="submit" :fieldColumns="fieldColumns"></you-search-form> -->
  <search-table
    ref="searchTableRef"
    :formOpt="{size: 'small'}" 
    @submit="submit" 
    :fieldColumns="fieldColumns"
    :tableColumns="tableColumns"
    :tableData="tableData.data"
    @request="request"
  >
  </search-table>

  <div class="test" v-loading="true" :style="{width: '100px', height: '100px', backgroundColor: 'red'}" ></div>
</template>

<style scoped>

</style>