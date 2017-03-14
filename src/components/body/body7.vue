<template>
  <div class="body">
    <s-sub-nav :list="list"></s-sub-nav>
    <router-view></router-view>
  </div>
</template>

<script type="text/ecmascript-6">
  import sub from '@/components/sub-nav/sub-nav';
  export default {
    name: 'body2',
    components: {
      's-sub-nav': sub
    },
    data () {
      return {
        list: [{
          name: 'one',
          link: '/7/1'
        }, {
          name: 'two',
          link: '/7/2'
        }, {
          name: 'three',
          link: '/7/3'
        }]
      };
    }
  };
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import "body.styl"
</style>
