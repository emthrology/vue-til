import Vue from 'vue';
import LoginForm from '@/components/LoginForm.vue';

describe('LoginForm.vue', ()=> {
    test('username should be initialized when component is mounted', () => {
        const wrapper = new Vue(LoginForm).$mount();
        console.log(wrapper.username);
        expect(wrapper.username).toBe('');
    })
})