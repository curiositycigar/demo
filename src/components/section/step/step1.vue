<template>
  <div>
    <el-row class="myTable">
      <el-col :span="24">
        <el-row>
          <el-col :span="4" style="text-align: right">共同体类型</el-col>
          <el-col :span="20">
            <el-radio class="radio" v-model="type" label="1">v1</el-radio>
            <el-radio class="radio" v-model="type" label="2">v2</el-radio>
            <el-radio class="radio" v-model="type" label="3">v3</el-radio>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="4" style="text-align: right">共同体名称</el-col>
          <el-col :span="20">
            <el-input style="width: 200px" v-model="name" placeholder="输入名称" size="mini"></el-input>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="6" style="text-align: right"></el-col>
          <el-col :span="18">
            <el-button type="primary" size="mini" @click="putCommunity">提交凭证</el-button>
          </el-col>
        </el-row>
      </el-col>
    </el-row>
    <div class="deleteButton">
      <el-button type="primary" size="small" style="margin-top: 12px;" @click="deleteSelected">删除</el-button>
    </div>
    <el-table :data="table" border style="width: 100%" height="260" @selection-change="handleSelectionChange">
      <el-table-column type="selection" width="55">
      </el-table-column>
      <el-table-column prop="version" label="版本号" width="180">
      </el-table-column>
      <el-table-column prop="sign" label="凭证" width="180">
      </el-table-column>
      <el-table-column prop="edit" label="操作">
      </el-table-column>
    </el-table>
  </div>
</template>

<script type="text/ecmascript-6">
  const OK = 0;
  export default {
    data() {
      return {
        type: 0,
        name: '',
        table: [],
        multipleSelection: []
      };
    },
    created() {
      this.$http.get('/api/communities').then((res) => {
        res = res.body;
        if (res.errno === OK) {
          this.table = res.data;
        }
      });
    },
    props: ['data'],
    methods: {
      handleSelectionChange(val) {
        this.multipleSelection = val;
      },
      deleteSelected() {
        console.log(this.multipleSelection);
      },
      putCommunity() {
        console.log('Community:', this.type, this.name);
      }
    }
  };
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .myTable
    border-width: 1px 0 0 1px
    border-style: solid
    border-color: #f1f1f1
    font-size: 12px
    .el-col
      .el-col
        height: 36px
        line-height: 36px
        padding: 0 12px
        border-width: 0 1px 1px 0
        border-style: solid
        border-color: #e4e4e4
        &.bg-gray
          background: #f1f1f1
          border: none
          color: #000000
          font-weight: 700

  .deleteButton
    padding: 10px 4px
</style>
