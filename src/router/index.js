import { createRouter, createWebHistory, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/test1',
      name: 'test1',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/TestApi/Test1.vue')
    },
    {
      path: '/test2',
      name: 'test2',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/TestApi/Test2.vue')
    },
    {
      path: '/test3',
      name: 'test3',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/TestApi/Test3.tsx')
    },
    {
      path: '/test4',
      name: 'test4',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/TestApi/Test4.tsx')
    },
    {
      path: '/lifecycle',
      name: 'lifecycle',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/lifeCycle/Test.vue')
    },
    {
      path: '/comtest',
      name: 'comtest',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/comTest/Index.vue')
    },
    {
      path: '/domtest',
      name: 'domtest',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/domTest/Index.vue')
    },
    {
      path: '/globalapitest',
      name: 'globalapitest',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/globalApiTest/Index.vue')
    },
    {
      path: '/other',
      name: 'other',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/other/Index.vue')
    },
    {
      path: '/storesTest',
      name: 'storesTest',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/storesTest/Index.vue')
    },
    {
      path: '/storesTest1',
      name: 'storesTest1',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/storesTest/Test1.vue')
    },
    {
      path: '/scrolltable',
      name: 'scrolltable',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/scrollTable/Index.vue')
    },
    {
      path: '/directicescrolltable',
      name: 'directicescrolltable',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/scrollTable/Test2.vue')
    },
    {
      path: '/requesttest',
      name: 'requesttest',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/requestTest/Index.vue')
    },
    {
      path: '/fileupload',
      name: 'fileupload',
      meta: {
        cache: false,
      },
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/fileUpload/Index.vue')
    },
    {
      path: '/excel',
      name: 'excel',
      // webpackPrefetch: 10 表示优先级是 10， 越大优先级越高
      component: () => import( /** webpackChunckName: "excel"  */ /** webpackPrefetch: true */ '../views/excel/Index.vue')
    },
    {
      path: '/word',
      name: 'word',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/word/Index.vue')
    },
    {
      path: '/bigjs',
      name: 'bigjs',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/bigjs/Index.vue')
    },
    {
      path: '/testmydialog',
      name: 'testmydialog',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/testmydialog/Index.vue')
    },
    {
      path: '/download',
      name: 'download',
      component: () => import('../views/download/Index.vue')
    },
    {
      path: '/testsearchtable',
      name: 'testsearchtable',
      component: () => import('../views/testsearchtable/Index.vue')
    },
    {
      path: '/testmyloading',
      name: 'testmyloading',
      component: () => import('../views/testmyloading/Index.vue')
    },
    {
      path: '/testcomponentoptions',
      name: 'testcomponentoptions',
      component: () => import('../views/testComponentOptions/Index.vue')
    },
    {
      path: '/testdrag',
      name: 'testdrag',
      component: () => import('../views/dragTest/Index.vue')
    },
    {
      path: '/testdrag2',
      name: 'testdrag2',
      component: () => import('../views/dragTest/Index2.vue')
    },
    {
      path:'/:cathchAll(.*)',
      name: 404,
      component:()=>import('../views/404.vue')
    },
  ]
})

router.beforeEach((to, from, next) => {
  console.log(to, from);
  next();
})

export default router
