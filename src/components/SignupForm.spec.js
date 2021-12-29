import { shallowMount } from '@vue/test-utils';
import SignupForm from '@/components/SignupForm.vue';
import imeModel from '@/directives/imeModel';
describe('SignupForm', () => {
  test('submit button should be disabled when username, password, ninckname are not be typed', () => {
    const wrapper = shallowMount(SignupForm, {
      data() {
        return {
          username: 'adskasdl',
          password: '!asdida#$3234',
          nickname: 'test',
        };
      },
      directives: {
        imeModel: imeModel,
      },
    });
    console.log(wrapper.vm.directives);
    // const submitBtn = wrapper.find('.btn');

    // expect(submitBtn.element.disabled).toBeTruthy();
  });
});
