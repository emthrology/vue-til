import { shallowMount } from '@vue/test-utils';
// import Vue from 'vue';
import LoginForm from '@/components/LoginForm.vue';

describe('LoginForm.vue', ()=> {
    test('username should be email-formed', () => {
        const wrapper = shallowMount(LoginForm, {
            data() {
                return {
                    username: 'test@adj.com'
                }
            },
        });
        const usernameInput = wrapper.find('#username');
        console.log(usernameInput.element.value);
        console.log(wrapper.vm.isUsernameValid); //컴포넌트 computed 접근

    })
    // test('username should be initialized when component is mounted', () => {
    //     const wrapper = shallowMount(LoginForm);
    //     expect(wrapper.vm.username).toBe('');
    // })
})