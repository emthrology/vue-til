<template>
  <!-- .prevent = preventDefault -->
  <form @submit.prevent="submitForm">
    <div>
      <label for="username">id: </label>
      <input id="username" type="text" v-model="username" />
    </div>
    <div>
      <label for="password">pw: </label>
      <input id="password" type="text" v-model="password" />
    </div>
    <div>
      <label for="nickname">nickname: </label>
      <!-- vue.js cjk IME issue : https://en.wikipedia.org/wiki/Input_method, https://vuejs.org/v2/guide/forms.html#vmodel-ime-tip -->
      <!-- cannot bind data object directly by this way -->
      <input
        id="nickname"
        type="text"
        @input="nickname = $event.target.value"
        :nickname="nickname"
      />
    </div>
    <button type="submit">login</button>
    <p v-if="logMsg">{{ logMsg }}</p>
  </form>
</template>

<script>
import { registerUser } from '@/api/index';
export default {
  data() {
    return {
      username: '',
      password: '',
      nickname: '',
      logMsg: '',
    };
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
