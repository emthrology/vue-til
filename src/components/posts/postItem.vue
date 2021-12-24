<template>
  <li>
    <div class="post_title">
      {{ item.title }}
    </div>
    <div class="post-contents">
      {{ item.contents }}
    </div>
    <div class="post-time">
      {{ item.createdAt }}
    </div>
  </li>
</template>

<script>
export default {
  props: {
    item: {
      type: Object,
      default: () => {},
      required: true,
    },
  },
};
</script>

<style></style>
