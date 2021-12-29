<template>
  <div class="contents">
    <h1 class="page-header">Edit Post</h1>
    <div class="form-wrapper">
      <form class="form" @submit.prevent="submitForm">
        <div>
          <label for="title">Title: </label>
          <input id="title" type="text" v-ime-model="title" />
        </div>
        <div>
          <label for="contents">Contents: </label>
          <textarea id="contents" rows="5" v-ime-model="contents" />
          <p class="validation-text warning" v-if="isContentsValid">
            Contents must be less then 200 length.
          </p>
        </div>
        <button class="btn" type="submit">Edit</button>
      </form>
    </div>
  </div>
</template>

<script>
import { fetchPost, editPost } from '@/api/posts';
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
        const id = this.$route.params.id;
        const response = await editPost(id, {
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
  async created() {
    const { data } = await fetchPost(this.$route.params.id);
    this.title = data.title;
    this.contents = data.contents;
  },
};
</script>

<style scoped>
@import '../../css/post.css';
</style>
