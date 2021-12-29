<template>
  <li>
    <div class="post_title">
      {{ item.title }}
    </div>
    <div class="post-contents">
      {{ item.contents }}
    </div>
    <div class="post-time">
      {{ item.createdAt | formatDate }}
      {{ item.createdAt }}
      <i class="icon ion-md-create" @click="routeUpdatePage"></i>
      <i class="icon ion-md-trash" @click="deleteItem"></i>
    </div>
  </li>
</template>

<script>
import { deletePost } from '@/api/posts';
// import { formatDate } from '@/utils/filters';
export default {
  props: {
    item: {
      type: Object,
      default: () => {},
      required: true,
    },
  },
  // filters: {
  //   formatDate,
  // },
  methods: {
    async deleteItem() {
      if (confirm('삭제하시겠습니까?')) {
        await deletePost(this.item._id);
        this.$emit('refresh'); //상위 컴포넌트 refresh 이벤트 호출
      }
    },
    routeUpdatePage() {
      this.$router.push(`post/${this.item._id}`);
    },
  },
};
</script>

<style></style>
