<template>
  <div class="f-box" :style="getContentStyle">
    <div v-show="header" class="f-box-header" :style="getHeaderHeight">
      <i class="warning"></i>
      <span>{{ title }}</span>
    </div>
    <div class="f-box-body" :style="getBodyHeight">
      <div class="f-box-bar" v-for="item in barArray" :style="getStyle(item)">
        <slot :name="item.index"></slot>
      </div>
    </div>
  </div>
</template>

<script type="text/babel">
  // width,height,icon格式,是否显示Header,分栏条数
  export default {
    data() {
      return {
        barArray: ['100%']
      };
    },
    created() {
      let reBars = [];
      if (typeof this.bars === 'number') {
        let bar = 100 / this.bars;
        for (let i = 0; i < this.bars; i++) {
          reBars.push({
            index: i,
            width: bar + '%'
          });
        }
      } else if (typeof this.bars === 'object' && this.bars.length) {
        let count = 0;
        for (let i = 0; i < this.bars.length; i++) {
          count += this.bars[i];
        }
        let minBar = 100 / count;
        reBars = this.bars.map(function (value, index) {
          return {
            index: index,
            width: minBar * value + '%'
          };
        });
      }
      console.log(reBars);
      this.barArray = reBars;
    },
    methods: {
      getStyle(item) {
        return 'width:' + item.width;
      }
    },
    computed: {
      getBodyHeight() {
        return 'height:' + (Number.parseInt(this.height) - Number.parseInt(this.headerHeight)) + 'px';
      },
      getContentStyle() {
        return 'width:' + this.width + '; height:' + this.height;
      },
      getHeaderHeight() {
        return 'height:' + this.headerHeight;
      }
    },
    props: {
      title: {
        type: String,
        default: ''
      },
      height: {
        type: String,
        default: '300px'
      },
      width: {
        type: String,
        default: '100%'
      },
      iconStyle: {
        type: String,
        default: 'warning'
      },
      header: {
        type: Boolean,
        default: true
      },
      headerHeight: {
        type: String,
        default: '40px'
      },
      bars: {
        type: [Number, Array],
        default: 1
      }
    }
    //  ['title', 'height', 'width', 'iconStyle', 'header', 'bars']
  };
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .f-box
    border: solid 1px #d1dbe5;
    border-radius: 5px;
    .f-box-header
      box-sizing: border-box
      width: 100%
      padding: 10px 0 10px 15px
      border-bottom: solid 1px #d1dbe5
      i
        display: inline-block
        width: 20px
        height: 20px
        border-radius: 10px
        background: #00ffff
        vertical-align: top
      span
        display: inline-block
        height: 20px
        margin: auto 0
        font-size: 14px
        font-weight: 600
        vertical-align: top
    .f-box-body
      display: inline-block
      width: 100%
      .f-box-bar
        padding: 10px
        box-sizing: border-box
        float: left
        height: 100%
      > .f-box-bar + .f-box-bar
        border-left: solid 1px #d1dbe5
</style>
