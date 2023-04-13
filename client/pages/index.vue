<template>
  <div>
    <div class="info-news">
      <h1>Berita - berita menarik dengan berita yang terupdate</h1>
      <h2>Yuk baca berita sekarang juga</h2>

      <nuxt-link :to="`/news`">Baca berita</nuxt-link>
    </div>
  </div>
</template>

<style lang="scss">
.info-news {
  width: 44%;

  h1 {
    color: $primary-color;
    font-size: 48px;
  }

  a {
    text-decoration: none;
    color: $white-color;
    background: $primary-color;
    padding: 8px;
    border-radius: $radius-md;
    font-weight: bold;
  }
}
@media (max-width: 900px) {
  .info-news {
    width: 100%;
    h1 {
      font-size: 32px;
    }
  }
}
</style>
