<template>
  <form @submit.prevent="submitForm">
    <div>
      <label for="username">id: </label>
      <input id="username" type="email" v-model="username" />
    </div>
    <div>
      <label for="password">pw: </label>
      <input id="password" type="text" v-model="password" />
    </div>
    <button :disabled="!(isUsernameValid && password)" type="submit">
      login
    </button>
  </form>
</template>

<script>
import { validateEmail } from '@/utils/validation';
import { loginUser } from '@/api/index';
export default {
  data() {
    return {
      username: '',
      password: '',
    };
  },
  computed: {
    isUsernameValid() {
      return validateEmail(this.username);
    },
  },
  methods: {
    async submitForm() {
      try {
        const userData = {
          username: this.username,
          password: this.password,
        };
        const { data } = await loginUser(userData);
        console.log({ data });
        alert(`${data.user.username}님 로그인`);
        this.initForm();
      } catch (error) {
        alert(error.response.data);
      }
    },
    initForm() {
      this.username = '';
      this.password = '';
    },
  },
};
</script>

<style></style>
