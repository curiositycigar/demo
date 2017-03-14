<template>
  <div class="body">
    <s-sub-nav :list="menu"></s-sub-nav>
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
        menu: [{
          name: '资产管理',
          link: '/2/1'
        }, {
          name: '资产发现',
          link: '/2/2'
        }, {
          name: '配置管理',
          link: '/2/3'
        }, {
          name: 'IP管理',
          link: '/2/4'
        }]
      };
    }
  };
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import "body.styl"
</style>
