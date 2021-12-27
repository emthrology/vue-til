<template>
  <div class="contents">
    <h1 class="page-header">Create Post</h1>
    <div class="form-wrapper">
      <form class="form" @submit.prevent="submitForm">
        <div>
          <label for="title">Title: </label>
          <input id="title" type="text" v-ime-model="title" />
        </div>
        <div>
          <label for="contents">Contents: </label>
          <textarea id="contents" rows="5" v-ime-model="contents" />
        </div>
        <button class="btn" type="submit">Create</button>
      </form>
    </div>
  </div>
</template>

<script>
import { createPost } from '@/api';
export default {
  data() {
    return {
      title: '',
      contents: '',
    };
  },
  methods: {
    async submitForm() {
      try {
        const response = await createPost({
          title: this.title,
          contents: this.contents,
        });
        console.log(response);
      } catch (error) {
        alert(error);
      }
    },
  },
};
</script>

<style scoped>
.form-wrapper .form {
  width: 100%;
}
.btn {
  color: white;
}
</style>
