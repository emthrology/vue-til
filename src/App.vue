<template>
  <div class="app">
    <!-- never do self closing tags in DOM template, but it's SFC -->
    <AppHeader />
    <main class="app-contents">
      <router-view></router-view>
    </main>
  </div>
</template>

<script>
import AppHeader from '@/components/common/AppHeader.vue';
export default {
  components: {
    AppHeader,
  },
};
</script>

<style>
@import './css/reset.css';
@import './css/common.css';
</style>
