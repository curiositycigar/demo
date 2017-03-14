<template>
  <el-row>
    <el-col class="step-box" :span="12" :offset="6">
      <el-steps :space="100" :active="active" finish-status="success">
        <el-step title="步骤 1"></el-step>
        <el-step title="步骤 2"></el-step>
        <el-step title="步骤 3"></el-step>
      </el-steps>
      <el-button style="margin-top: 12px;" @click="setComplete(1)">完成1</el-button>
      <el-button style="margin-top: 12px;" @click="setComplete(2)">完成2</el-button>
      <el-button style="margin-top: 12px;" @click="setComplete(3)">完成3</el-button>
      <el-button style="margin-top: 12px;" @click="next">下一步</el-button>
    </el-col>
  </el-row>
</template>

<script type="text/ecmascript-6">
  // v-show || v-if切换step
  // data记录步骤数据，next Function判断是否跳转
  export default {
    data() {
      return {
        active: 1,
        step: [
          {complete: true},
          {complete: false},
          {complete: false},
          {complete: false}
        ]
      };
    },
    methods: {
      next() {
        if (this.step[this.active].complete && this.active <= this.step.length) {
          this.active++;
        }
      },
      setComplete(i) {
        if (this.step[i - 1].complete === true) {
          this.step[i].complete = true;
        }
        console.log(i, '::', this.step[i].complete);
      }
    }
  };
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .step-box
    height: 500px
    margin-top: 60px
    border: solid 1px #ccd1cd
</style>
