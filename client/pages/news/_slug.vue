<template>
  <div>
    <div class="detail-news">
      <div class="content-news">
        <h1>
          {{ news.title }}
        </h1>
        <nuxt-link :to="`/news/edit/${news.uuid}`">Edit</nuxt-link>
      </div>
      <div class="image-news">
        <img :src="news.imageUrl" />
      </div>
      <div>
        {{ news.content }}
      </div>
    </div>
  </div>
</template>

<script>
// import { mapGetters } from 'vuex'
import axios from '../../plugins/axios'

export default {
  async asyncData({ params }) {
    const res = await axios.get(`news/${params.slug}`)
    return { news: res.data }
  },
}
</script>

<style lang="scss">
.detail-news {
  display: flex;
  justify-content: center;
  flex-direction: column;
  gap: 8px;
  padding: 16px;
  background: $white-color;
  border-radius: $radius-md;

  .content-news {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 8px;
    h1 {
      span {
        color: $secondary-color;
      }
    }

    a {
      text-decoration: none;
      color: $secondary-color;
      background: $white-color;
      padding: 8px;
      border-radius: $radius-md;
      font-weight: bold;
    }
  }

  @media (max-width: 900px) {
    .content-news {
      display: block;
    }
  }

  .image-news img {
    width: 100%;
    border-radius: $radius-md;
  }
}
</style>
