import Vue from 'vue';
import imeFrag from '@/vue-ime-model-fragment';

const imeModel = {
  inserted(el, binding, vnode) {
    if (!imeFrag.modelableTagRE.test(vnode.tag)) {
      console.log(
        `v-imeModel is not supported on element type: <${vnode.tag}>. `,
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
};

export default Vue.directive('imeModel', imeModel);
