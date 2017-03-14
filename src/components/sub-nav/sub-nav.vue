<template>
  <el-row class="sub-nav">
    <el-col :span="16" :offset="3">
      <el-row is="list" v-for="item of list" :key="item" :value="item">
      </el-row>
    </el-col>
  </el-row>
</template>

<script type="text/ecmascript-6">
  import Vue from 'vue';
  Vue.component('list', {
    template: `
        <el-col :span="2">
          <router-link :to="value.link">
            {{ value.name }}
          </router-link>
        </el-col>
  `,
    props: ['value']
  });
  export default {
    data () {
      return {
      };
    },
    props: ['list']
  };
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import 'sub-nav.styl'
</style>
