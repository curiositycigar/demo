<template>
  <div id="app">
    <s-header></s-header>
    <router-view></router-view>
  </div>
</template>

<script>
  import Vue from 'vue';
  import VueRouter from 'vue-router';
  import header from './components/header/header.vue';
  import footer from './components/footer/footer.vue';
  Vue.use(VueRouter);
  export default {
    name: 'app',
    components: {
      's-header': header,
      's-footer': footer
    }
  };
</script>

<style>
</style>
