<template>
  <div class="content-news">
    <h1>
      Silahkan menikmati berita
      <span>DetikNews</span>
    </h1>
    <div class="row-content">
      <div v-for="article in news" :key="article.id" class="col-content">
        <CardNews
          :title="article.title"
          :image-url="article.imageUrl"
          :link="`/news/${article.uuid}`"
        />
      </div>
    </div>
  </div>
</template>

<script>
import axios from '../../plugins/axios'

export default {
  async asyncData() {
    const res = await axios.get(`news`)
    return { news: res.data }
  },
}
</script>

<style lang="scss">
.content-news {
  width: 100%;
}
h1 {
  span {
    color: $secondary-color;
  }
}
.row-content {
  display: flex;
  gap: 16px;
  flex-wrap: wrap;
}
.col-content {
  flex: 0 0 auto;
  width: 32.33333333%;
}

@media (max-width: 900px) {
  .col-content {
    width: 100%;
  }
}
</style>
