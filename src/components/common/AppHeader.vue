<template>
  <header>
    <div>
      <router-link :to="logoLink" class="logo">
        TIL
        <span v-if="isLogin" class="username">{{ $store.state.username }}</span>
      </router-link>
    </div>
    <div class="navigations">
      <template v-if="isLogin">
        &nbsp;
        <span class="logout" @click="logout">logout</span>
      </template>
      <template v-else>
        <router-link to="/login">로그인</router-link>
        <router-link to="/signup">회원가입</router-link>
      </template>
    </div>
  </header>
</template>

<script>
import { deleteCookie } from '@/utils/cookies';
export default {
  computed: {
    isLogin() {
      return this.$store.getters.isLoggedin;
    },
    logoLink() {
      return this.isLogin ? '/main' : '/';
    },
  },
  methods: {
    logout() {
      this.$store.commit('clearUsername');
      this.$store.commit('clearToken');
      deleteCookie('til_auth');
      deleteCookie('til_user');
      this.$router.push('/');
    },
  },
};
</script>

<style scoped>
.username {
  color: white;
}
.logout {
  color: red;
  font-size: 14px;
}
.logout:hover {
  cursor: default;
  text-decoration: underline;
  color: white;
  font-weight: bold;
}
header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px;
  background-color: #927dfc;
  z-index: 2;
  box-shadow: 0px 3px 10px rgba(0, 0, 0, 0.05);
}
a {
  color: #dedede;
  font-size: 18px;
}
a.logo {
  font-size: 30px;
  font-weight: 900;
  color: white;
}
.logo > span {
  font-size: 14px;
  font-weight: normal;
}
.navigations a {
  margin-left: 10px;
}
.fixed {
  position: fixed;
  top: 0;
  width: 100%;
}
a.router-link-exact-active {
  color: white;
  font-weight: bold;
}
</style>
