<template>
  <div>
    <div class="main list-container contents">
      <h1 class="page-header">Today I Learned</h1>
      <ul>
        <li v-for="post of postItems" :key="post._id">
          {{ post.title }} <br />
          {{ post.contents }}
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { fetchPostList } from '@/api';
export default {
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
