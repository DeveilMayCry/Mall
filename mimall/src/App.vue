<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
  import storage from './storage'
  export default {
    name: 'app',
    components: {},
    mounted() {
      storage.getItem('a', 1);
    },
  }
</script>

<style lang="scss">
  @import "./../resource/scss/reset.scss";
  @import "./../resource/scss/config.scss";
</style>