<template>
  <header>
    <div class="app-logo">
      <nuxt-link to="/">ALDO TEST</nuxt-link>
    </div>
    <div class="app-links">
      <ul class="nav-list">
        <li class="nav-item"><nuxt-link to="/">Beranda</nuxt-link></li>
        <li class="nav-item"><nuxt-link to="/news">Berita</nuxt-link></li>
      </ul>
    </div>
  </header>
</template>

<style lang="scss">
header {
  display: grid;
  grid-template: 60px / auto 1fr;
  align-items: center;
  background-color: $white-color;
}

.app-logo {
  margin: 0 10px;
  font-size: 1.3rem;

  a {
    text-decoration: none;
    font-weight: bold;
    color: $primary-color;
  }
}

.app-links {
  justify-self: end;

  .nav-list {
    list-style: none;
    padding: 0;
    margin: 0;

    .nav-item {
      margin: 0 10px;
      a {
        text-decoration: none;
        color: $gray-color;
      }

      a:hover,
      a:active {
        color: $gray-color;
        font-weight: bold;
      }

      a.nuxt-link-active {
        color: $gray-color;
      }

      a.nuxt-link-exact-active {
        color: $gray-color;
        font-weight: bold;
      }
    }
  }
}

@media (max-width: 767px) {
  header {
    padding: 0 16px;
  }
  header:nth-child {
    justify-self: end !important;
  }
  .app-links {
    display: none;
  }

  .nav-list {
    display: block;

    .nav-item {
      margin-top: 16px;
      margin-bottom: 16px;
    }
  }
}

@media (min-width: 768px) {
  header {
    padding: 0 64px;
  }
  .app-links {
    display: block;
  }
  .nav-list {
    display: flex;
  }
}
</style>
