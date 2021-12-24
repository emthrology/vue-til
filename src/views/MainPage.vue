<template>
  <div>
    <div class="main list-container contents">
      <h1 class="page-header">Today I Learned</h1>
      <ul>
        <PostItem v-for="post of postItems" :key="post._id" :item="post" />
      </ul>
    </div>
  </div>
</template>

<script>
import PostItem from '@/components/posts/PostItem.vue';
import { fetchPostList } from '@/api';
export default {
  components: {
    PostItem,
  },
  data() {
    return {
      postItems: [],
    };
  },
  methods: {
    async fetchList() {
      const { data } = await fetchPostList();
      this.postItems = data.posts;
    },
  },
  created() {
    this.fetchList();
  },
};
</script>

<style></style>
