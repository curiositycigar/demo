<template>
  <div class="body">
    <s-sub-nav :list="list"></s-sub-nav>
    <f-box title="这是一个示例" :bars="[1,2,3]" width="600px" height="500px">
      <div slot="0">123</div>
      <div slot="1">123</div>
      <div slot="2">123</div>
    </f-box>
    <router-view></router-view>
  </div>
</template>

<script type="text/ecmascript-6">
  import box from '@/components/f-box/f-box';
  import sub from '@/components/sub-nav/sub-nav';
  export default {
    name: 'body2',
    components: {
      's-sub-nav': sub,
      'f-box': box
    },
    data () {
      return {
        list: [{
          name: 'one',
          link: '/1/1'
        }, {
          name: 'two',
          link: '/1/2'
        }, {
          name: 'three',
          link: '/1/3'
        }]
      };
    }
  };
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import "body.styl"
  .f-box
    margin: 40px
</style>
