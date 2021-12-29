<template>
  <div class="conents">
    <div class="form-wrapper form-wrapper-sm">
      <!-- .prevent = preventDefault -->
      <form @submit.prevent="submitForm" class="form">
        <div>
          <label for="username">id: </label>
          <input id="username" type="text" v-model="username" />
        </div>
        <div>
          <label for="password">pw: </label>
          <input id="password" type="text" v-model="password" />
          <p class="validation-text">
            <span class="warning" v-if="!isPasswordValid && isPwKeyup">
              비밀번호 조건: 6~16자, 특수문자 1글자 이상
            </span>
          </p>
        </div>
        <div>
          <label for="nickname">nickname: </label>
          <!-- vue.js cjk IME issue : https://en.wikipedia.org/wiki/Input_method, https://vuejs.org/v2/guide/forms.html#vmodel-ime-tip -->
          <!-- cannot bind data object directly by this way -->
          <!-- <input
            id="nickname"
            type="text"
            @input="nickname = $event.target.value"
            :nickname="nickname"
          /> -->

          <!-- use custom directive: https://github.com/kciter/vue-ime-model -->
          <input id="nickname" type="text" v-imeModel="nickname" />
        </div>
        <button
          :disabled="!(isUsernameValid && isPasswordValid && nickname)"
          type="submit"
          class="btn"
          :class="
            !(isUsernameValid && isPasswordValid && nickname)
              ? 'disabled'
              : null
          "
        >
          signup
        </button>
        <p v-if="logMsg">{{ logMsg }}</p>
      </form>
    </div>
  </div>
</template>

<script>
import { validateEmail, validatiePassword } from '@/utils/validation';
import { registerUser } from '@/api/auth';
export default {
  data() {
    return {
      username: '',
      password: '',
      nickname: '',
      logMsg: '',
    };
  },
  computed: {
    isUsernameValid() {
      return validateEmail(this.username);
    },
    isPasswordValid() {
      return validatiePassword(this.password);
    },
    isPwKeyup() {
      return !!this.password;
    },
  },
  methods: {
    async submitForm() {
      const userData = {
        username: this.username,
        password: this.password,
        nickname: this.nickname,
      };
      const { data } = await registerUser(userData);
      console.log({ data });
      this.logMsg = `${data.username}님 가입완료`;
      this.initForm();
    },
    initForm() {
      this.username = '';
      this.password = '';
      this.nickname = '';
    },
  },
};
</script>

<style></style>
