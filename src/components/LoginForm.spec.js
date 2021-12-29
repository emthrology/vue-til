import { shallowMount } from '@vue/test-utils';
import Vue from 'vue';
import LoginForm from '@/components/LoginForm.vue';

describe('LoginForm.vue', ()=> {
    test('username should be initialized when component is mounted', () => {
        // const wrapper = new Vue(LoginForm).$mount();
        const wrapper = shallowMount(LoginForm);
        // expect(wrapper.username).toBe('');
        expect(wrapper.vm.username).toBe('');
    })
})