<template>
  <div class="app-main">
    <HeaderApp />

    <div class="container">
      <nuxt />
    </div>
  </div>
</template>

<script>
import HeaderApp from '~/components/HeaderApp'

export default {
  components: {
    HeaderApp,
  },
}
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css?family=Poppins&display=swap');
html,
body {
  margin: 0;
  height: 100%;
  width: 100%;
  font-family: 'Poppins';
}
.app-main {
  min-height: 100vh;
  background: linear-gradient(180deg, #f5f8fb 0%, #e8eff2 35.8%);
}
.container {
  padding: 24px;
  position: relative;
  margin-left: auto;
  margin-right: auto;
  max-width: 100%;
}
@media (min-width: 1300px) {
  .container {
    width: 1240px;
    max-width: 100%;
  }
}

@media (min-width: 1400px) {
  .container {
    width: 1340px;
    max-width: 100%;
  }
}
</style>
