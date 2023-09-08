import { createRouter, createWebHistory, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

export const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  // {
  //   path: '/about',
  //   name: 'about',
  //   component: () => import('../views/AboutView.vue')
  // },
  {
    path: '/test1',
    name: 'test1',
    navName: "测试vue3api01",
    component: () => import('../views/TestApi/Test1.vue')
  },
  {
    path: '/test2',
    name: 'test2',
    navName: "测试vue3api02",
    component: () => import('../views/TestApi/Test2.vue')
  },
  {
    path: '/test3',
    name: 'test3',
    navName: "测试vue3api03",
    component: () => import('../views/TestApi/Test3.tsx')
  },
  {
    path: '/test4',
    name: 'test4',
    navName: "测试vue3api04",
    component: () => import('../views/TestApi/Test4.tsx')
  },
  {
    path: '/lifecycle',
    name: 'lifecycle',
    navName: "测试vue3生命周期",
    component: () => import('../views/lifeCycle/Test.vue')
  },
  {
    path: '/comtest',
    name: 'comtest',
    navName: "测试vue3组件传值",
    component: () => import('../views/comTest/Index.vue')
  },
  {
    path: '/domtest',
    name: 'domtest',
    navName: "测试vue3dom绑定",
    component: () => import('../views/domTest/Index.vue')
  },
  {
    path: '/globalapitest',
    name: 'globalapitest',
    navName: "测试vue3全局api",
    component: () => import('../views/globalApiTest/Index.vue')
  },
  {
    path: '/other',
    name: 'other',
    navName: "测试vue3defineExpose",
    component: () => import('../views/other/Index.vue')
  },
  {
    path: '/storesTest',
    name: 'storesTest',
    navName: "测试store",
    component: () => import('../views/storesTest/Index.vue')
  },
  {
    path: '/storesTest1',
    name: 'storesTest1',
    navName: "测试store02",
    component: () => import('../views/storesTest/Test1.vue')
  },
  {
    path: '/scrolltable',
    name: 'scrolltable',
    navName: "滚动虚拟表格",
    component: () => import('../views/scrollTable/Index.vue')
  },
  {
    path: '/directicescrolltable',
    name: 'directicescrolltable',
    navName: "指令滚动加载表格",
    component: () => import('../views/scrollTable/Test2.vue')
  },
  {
    path: '/requesttest',
    name: 'requesttest',
    navName: "axios封装",
    component: () => import('../views/requestTest/Index.vue')
  },
  {
    path: '/fileupload',
    name: 'fileupload',
    meta: {
      cache: false,
    },
    navName: "文件上传",
    component: () => import('../views/fileUpload/Index.vue')
  },
  {
    path: '/excel',
    name: 'excel',
    navName: "使用vueOfficeExcel生成excel",
    // webpackPrefetch: 10 表示优先级是 10， 越大优先级越高
    component: () => import( /** webpackChunckName: "excel"  */ /** webpackPrefetch: true */ '../views/excel/Index.vue')
  },
  {
    path: '/word',
    name: 'word',
    navName: "使用VueOfficeDocx生成wrod和预览docx文件",
    component: () => import('../views/word/Index.vue')
  },
  {
    path: '/bigjs',
    name: 'bigjs',
    navName: "测试bigjs",
    component: () => import('../views/bigjs/Index.vue')
  },
  {
    path: '/testmydialog',
    name: 'testmydialog',
    navName: "自定义弹窗",
    component: () => import('../views/testmydialog/Index.vue')
  },
  {
    path: '/download',
    name: 'download',
    navName: "下载",
    component: () => import('../views/download/Index.vue')
  },
  {
    path: '/testsearchtable',
    name: 'testsearchtable',
    navName: "搜索表格组件",
    component: () => import('../views/testsearchtable/Index.vue')
  },
  {
    path: '/testmyloading',
    name: 'testmyloading',
    navName: "loading指令",
    component: () => import('../views/testmyloading/Index.vue')
  },
  {
    path: '/testcomponentoptions',
    name: 'testcomponentoptions',
    navName: "测试组件配置",
    component: () => import('../views/testComponentOptions/Index.vue')
  },
  {
    path: '/testdrag',
    name: 'testdrag',
    navName: "拖拽",
    component: () => import('../views/dragTest/Index.vue')
  },
  {
    path: '/testdrag2',
    name: 'testdrag2',
    navName: "拖拽2",
    component: () => import('../views/dragTest/Index2.vue')
  },
  {
    path: '/canvas',
    name: 'canvas',
    navName: "canvas",
    component: () => import('../views/canvas/Index.vue')
  },
  {
    path: '/testecharts',
    name: 'testecharts',
    navName: "echarts",
    component: () => import('../views/testecharts/Index.vue')
  },
  {
    path: '/peeling',
    name: 'peeling',
    navName: "换肤",
    component: () => import('../views/peeling/Index.vue')
  },
  {
    path:'/:cathchAll(.*)',
    name: 404,
    component:()=>import('../views/404.vue')
  },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

router.beforeEach((to, from, next) => {
  console.log(to, from);
  next();
})

export default router
