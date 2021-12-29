import Vue from 'vue';
import App from './App.vue';
import router from '@/router';
import store from './store';
import { formatDate } from '@/utils/filters';
import imeFrag from './vue-ime-model-fragment';

Vue.config.productionTip = false;

//필터 전역 설정
Vue.filter('formatDate', formatDate);

//for vue ime input issue: https://github.com/kciter/vue-ime-model
Vue.directive('ime-model', {
  inserted(el, binding, vnode) {
    if (!imeFrag.modelableTagRE.test(vnode.tag)) {
      console.log(
        `v-ime-model is not supported on element type: <${vnode.tag}>. `,
        vnode.context,
      );
    }

    function watchForExpression() {
      return vnode.context.$watch(binding.expression, function () {
        el.value = imeFrag.getByPath(vnode.context.$data, binding.expression);
      });
    }
    var unwatch = watchForExpression();
    el.addEventListener('input', function () {
      if (unwatch != null) {
        unwatch();
        unwatch = null;
      }
      //vnode.context.$data[binding.expression] = el.value
      imeFrag.assignByPath(vnode.context.$data, binding.expression, el.value);
      if (unwatch == null) {
        unwatch = watchForExpression();
      }
    });
    //el.value = vnode.context.$data[binding.expression]
    el.value = imeFrag.getByPath(vnode.context.$data, binding.expression);
  },
});
new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');
