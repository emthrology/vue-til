import Vue from 'vue';
import VueRouter from 'vue-router';
// import LoginPage from '@/views/LoginPage.vue';
// import SignupPage from '@/views/SignupPage.vue';

Vue.use(VueRouter);

//코드 스플리팅
//SPA 초기 로드 부하 방지 lazy loading 통해서 -> 위와같이 static import 안함
const routes = [
  {
    path: '/',
    redirect: '/login',
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('@/views/LoginPage.vue'),
  },
  {
    path: '/signup',
    name: 'Signup',
    component: () => import('@/views/SignupPage.vue'),
  },
  {
    path: '/main',
    name: 'Main',
    component: () => import('@/views/MainPage.vue'),
  },
  {
    path: '/add',
    name: 'Add',
    component: () => import('@/views/PostPage.vue'),
  },
  {
    path: '/post/:id',
    name: 'Update',
    component: () => import('@/views/PostEditPage.vue'),
  },
  {
    path: '*', // 위의  path 를 제외한 나머지
    component: () => import('@/views/404.vue'),
  },
  // {
  //   path: '/about',
  //   name: 'About',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () =>
  //     import(/* webpackChunkName: "about" */ '../views/About.vue'),
  // },
];

const router = new VueRouter({
  //mode:history - url 상 '#' 제거 (주의점:배포시 서버엔진별 url 필터링 설정 필요함)
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
