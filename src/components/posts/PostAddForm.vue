<template>
  <div class="contents">
    <h1 class="page-header">Create Post</h1>
    <div class="form-wrapper">
      <form class="form" @submit.prevent="submitForm">
        <div>
          <label for="title">Title: </label>
          <input id="title" type="text" v-imeModel="title" />
        </div>
        <div>
          <label for="contents">Contents: </label>
          <textarea id="contents" rows="5" v-imeModel="contents" />
          <p class="validation-text warning" v-if="isContentsValid">
            Contents must be less then 200 length.
          </p>
        </div>
        <button class="btn" type="submit">Create</button>
      </form>
    </div>
  </div>
</template>

<script>
import { createPost } from '@/api/posts';
export default {
  data() {
    return {
      title: '',
      contents: '',
    };
  },
  computed: {
    isContentsValid() {
      return this.contents.length > 200;
    },
  },
  methods: {
    async submitForm() {
      try {
        const response = await createPost({
          title: this.title,
          contents: this.contents,
        });
        console.log(response);
        this.$router.push('/main');
      } catch (error) {
        alert(error.response.data.message);
      }
    },
  },
};
</script>

<style scoped>
@import '../../css/post.css';
</style>
