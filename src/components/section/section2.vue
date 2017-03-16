<template>
  <div class="section gray">
    <div class="step-box">
      <div class="title"><i class="el-icon-setting"></i>资产发现</div>
      <div class="step-bar">
        <el-steps :space="180" :active="active">
          <el-step title="共同体设置" icon="edit"></el-step>
          <el-step title="网段设置" icon="upload"></el-step>
          <el-step title="设备扫描" icon="picture"></el-step>
          <el-step title="监控项扫描" icon="date"></el-step>
          <el-step title="拓扑扫描" icon="time"></el-step>
          <el-step title="扫描完成" icon="setting"></el-step>
        </el-steps>
      </div>
      <div class="step-wrap">
        <div class="step-content">
          <s-step1 v-show="onSelected(0)"></s-step1>
          <s-step2 v-show="onSelected(1)"></s-step2>
          <s-step3 v-show="onSelected(2)"></s-step3>
          <s-step4 v-show="onSelected(3)"></s-step4>
          <s-step5 v-show="onSelected(4)"></s-step5>
          <s-step6 v-show="onSelected(5)"></s-step6>
        </div>
        <div class="move-next">
          <el-button size="small" style="margin-top: 12px;" @click="changeState(active)">{{getStepState}}
          </el-button>
          <el-button v-if="active!=0" type="primary" size="small" style="margin-top: 12px;" @click="prev">上一步
          </el-button>
          <el-button v-if="active < step.length" type="primary" size="small" style="margin-top: 12px;" @click="next">
            下一步
          </el-button>
          <el-button v-if="active === step.length" type="primary" size="small" style="margin-top: 12px;" @click="">完成
          </el-button>
        </div>
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  import {step1, step2, step3, step4, step5, step6} from './step';
  // v-show || v-if切换step
  // data记录步骤数据，next Function判断是否跳转
  export default {
    data() {
      return {
        active: 0,
        step: [
          {complete: false},
          {complete: false},
          {complete: false},
          {complete: false},
          {complete: false},
          {complete: false}
        ]
      };
    },
    methods: {
      next() {
        if (this.active < this.step.length && this.step[this.active].complete) {
          this.active++;
        }
      },
      prev() {
        if (this.active > 0) {
          this.active--;
        }
      },
      changeState(i) {
        if (this.active < this.step.length && (i === 0 || this.step[i - 1].complete === true)) {
          this.step[i].complete = !this.step[i].complete;
          console.log(i, '::', this.step[i].complete);
        }
      },
      onSelected(i) {
        return i === this.active;
      }
    },
    computed: {
      getStepState() {
        let state;
        if (this.active < this.step.length) {
          state = this.step[this.active].complete ? '当前项完成' : '当前项未完成';
        } else {
          state = '全部完成';
        }
        return state;
      }
    },
    components: {
      's-step1': step1,
      's-step2': step2,
      's-step3': step3,
      's-step4': step4,
      's-step5': step5,
      's-step6': step6
    }
  };
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .section.gray
    height: 100%
    padding-top: 45px
    margin: 0 auto
    background: #f1f1f1
    .step-box
      height: 673px
      width: 996px
      padding: 15px
      margin: 0 auto
      border-radius: 5px
      background: #ffffff
      .title
        height: 47px
        line-height: 47px
        font-size: 16px
        border-bottom: dashed 1px rgb(233, 233, 233)
        .el-icon-setting
          font-size: 20px
          margin-right: 11px
      .step-bar
        width: 100%
        margin: 20px 0 0 10px
      .step-wrap
        width: 970px
        height: 506px
        padding: 12px
        border: solid 1px rgb(233, 233, 233)
        .step-content
          height: 460px
          overflow: hidden
        .move-next
          float: right
</style>
