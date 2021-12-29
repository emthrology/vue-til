import Vue from 'vue';
import App from './App.vue';
import router from '@/router';
import store from './store';
import { formatDate } from '@/utils/filters';
// import imeFrag from './vue-ime-model-fragment';
import imeModel from '@/directives/imeModel';
Vue.config.productionTip = false;

//필터 전역 설정
Vue.filter('formatDate', formatDate);

//for vue ime input issue: https://github.com/kciter/vue-ime-model
Vue.directive('imeModel', imeModel);
new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');
