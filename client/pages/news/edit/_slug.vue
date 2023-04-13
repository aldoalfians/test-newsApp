<template>
  <div>
    <div class="edit-news">
      <h1>Edit News</h1>
      <form @submit="update">
        <div>
          <div>Title :</div>
          <input v-model="news.title" type="text" :v-bind="news.title" />
        </div>
        <div>
          <div>Photo :</div>
          <input v-model="news.imageUrl" type="text" />
        </div>
        <div>
          <div>Content :</div>
          <textarea v-model="news.content" type="text" rows="4" />
        </div>
        <button type="submit">Update berita</button>
      </form>
    </div>
  </div>
</template>

<script>
import axios from '../../../plugins/axios'

export default {
  data() {
    return {
      news: {
        title: '',
        content: '',
        imageUrl: '',
      },
    }
  },
  mounted() {
    axios.get(`news/${this.$route.params.slug}`).then((response) => {
      this.news.title = response.data.title
      this.news.content = response.data.content
      this.news.imageUrl = response.data.imageUrl
    })
  },
  methods: {
    async update(e) {
      e.preventDefault()

      await axios
        .patch(`news/${this.$route.params.slug}`, {
          title: this.news.title,
          content: this.news.content,
          imageUrl: this.news.imageUrl,
        })
        .then(() => {
          this.$router.go(-1)
        })
        .catch((error) => {
          console.log(error)
        })
    },
  },
}
</script>

<style lang="scss">
.edit-news {
  padding: 16px;
  background: $white-color;
  border-radius: $radius-md;

  h1 {
    color: $secondary-color;
  }

  form {
    display: flex;
    flex-direction: column;
    gap: 16px;

    div input,
    div textarea {
      width: -webkit-fill-available;
      padding: 0.5rem;
      outline: none;
      border-radius: $radius-md;
      color: $gray-color;
      border: 0.1rem solid $gray-color;

      &[type='text']:focus {
        color: $gray-color;
        font-weight: bold;
        border: 0.2rem solid $secondary-color;
      }
    }

    button {
      width: fit-content;
      padding: 8px;
      background: $secondary-color;
      border: 1px solid $secondary-color;
      color: $white-color;
      font-weight: bold;
      border-radius: $radius-md;
    }
  }
}
</style>
