<template>
  <div>
    <div class="main list-container contents">
      <h1 class="page-header">Today I Learned</h1>
      <LoadingSpinner v-if="isLoading" />
      <ul v-else>
        <PostItem v-for="post of postItems" :key="post._id" :item="post" />
      </ul>
    </div>
    <router-link to="/add" class="create-button">
      <i class="ion-md-create"></i>
    </router-link>
  </div>
</template>

<script>
import LoadingSpinner from '@/components/common/LoadingSpinner.vue';
import PostItem from '@/components/posts/PostItem.vue';
import { fetchPostList } from '@/api/posts';
export default {
  components: {
    PostItem,
    LoadingSpinner,
  },
  data() {
    return {
      postItems: [],
      isLoading: false,
    };
  },
  methods: {
    async fetchList() {
      try {
        this.isLoading = true;
        const { data } = await fetchPostList();
        this.postItems = data.posts;
      } catch (error) {
        console.error(error);
      } finally {
        this.isLoading = false;
      }
    },
  },
  created() {
    this.fetchList();
  },
};
</script>

<style></style>
