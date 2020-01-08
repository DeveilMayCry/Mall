<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
  export default {
    name: 'app',
    components: {},
    mounted() {
      this.getUserInfo();
      this.getCartCount();
    },
    methods: {
      getUserInfo() {
        this.axios.get('/user').then((res) => {
          this.$store.dispatch('saveUserName', res.username)
        });
      },
      getCartCount() {
        this.axios.get('/carts/products/sum').then(() => {});
      }
    },
  }
</script>

<style lang="scss">
  @import "./../resource/scss/reset.scss";
  @import "./../resource/scss/config.scss";
</style>