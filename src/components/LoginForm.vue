<template>
  <div class="contents">
    <div class="form-wrapper form-wrapper-sm">
      <form @submit.prevent="submitForm" class="form">
        <div>
          <label for="username">id: </label>
          <input id="username" type="email" v-model="username" />
          <p class="validation-text">
            <span class="warning" v-if="!isUsernameValid && username">
              Please enter an email address
            </span>
          </p>
        </div>
        <div>
          <label for="password">pw: </label>
          <input id="password" type="text" v-model="password" />
        </div>
        <button
          :disabled="!(isUsernameValid && password)"
          type="submit"
          class="btn"
        >
          login
        </button>
      </form>
    </div>
  </div>
</template>

<script>
import { validateEmail } from '@/utils/validation';
// import { loginUser } from '@/api/index';
// import { saveAuthToCookie, saveUserToCookie } from '@/utils/cookies';
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
        // const { data } = await loginUser(userData);
        // this.$store.commit('setToken', data.token);
        // this.$store.commit('setUsername', data.user.username);
        // saveAuthToCookie(data.token);
        // saveUserToCookie(data.user.username);
        // this.initForm();
        await this.$store.dispatch('LOGIN', userData);
        //vue-router: progmmatic navigation
        this.$router.push('/main');
      } catch (error) {
        alert(error);
      }
    },
    initForm() {
      this.username = '';
      this.password = '';
    },
  },
};
</script>

<style>
.btn {
  color: white;
}
</style>
