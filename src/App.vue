<template>
  <div>
    <!-- never do self closing tags in DOM template, but it's SFC -->
    <AppHeader />
    <main>
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

<style></style>
