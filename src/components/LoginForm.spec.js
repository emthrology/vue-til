import { shallowMount } from '@vue/test-utils';
// import Vue from 'vue';
import LoginForm from '@/components/LoginForm.vue';

describe('LoginForm.vue', ()=> {
    test('username should be email-formed', () => {
        const wrapper = shallowMount(LoginForm, {
            data() {
                return {
                    username: 'malformedUsername'
                }
            },
        });
        //사용자 관점에서, username이 email-form이 아니면 
        //빨간 글씨로 경고문구가 뜨는 것을 그대로 expect해야
        //더 precise한 테스트라 할 수 있음.
        const warningText = wrapper.find('.warning');
        // console.log(warningText.html());
        expect(warningText.exists()).toBeTruthy();

    })
    // test('username should be initialized when component is mounted', () => {
    //     const wrapper = shallowMount(LoginForm);
    //     expect(wrapper.vm.username).toBe('');
    // })
})