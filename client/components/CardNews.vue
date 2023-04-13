<template>
  <nuxt-link :to="link" class="card-news">
    <img class="image-news" :src="imageUrl" />
    <div class="title-news">{{ title }}</div>
  </nuxt-link>
</template>

<script>
export default {
  props: {
    title: String,
    imageUrl: String,
    link: String,
  },
}
</script>

<style lang="scss">
.card-news {
  padding: 16px;
  display: flex;
  flex-direction: column;
  border-radius: $radius-md;
  background: $white-color;
  gap: 8px;
  cursor: pointer;
  text-decoration: none;

  .image-news {
    border-radius: $radius-md;
  }

  .title-news {
    font-weight: bold;
    font-size: 18px;
    color: $gray-color;
  }
}

.card-news:hover {
  .title-news {
    color: $secondary-color;
  }
}
</style>
