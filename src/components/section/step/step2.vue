<template>
  <el-row id="step2" :gutter="10">
    <el-col :span="17">
      <el-row class="myTable">
        <el-col :span="24">
          <el-row>
            <el-col :span="4" style="text-align: right">* 子网地址</el-col>
            <el-col :span="8">
              <el-input v-model="form.address" placeholder="" size="mini"></el-input>
            </el-col>
            <el-col :span="4" style="text-align: right">* 最大主机数</el-col>
            <el-col :span="8">
              <el-input v-model="form.maxNumber" placeholder="" size="mini"></el-input>
            </el-col>
          </el-row>
          <el-row>
            <el-col :span="4" style="text-align: right">子网掩码</el-col>
            <el-col :span="8">
              <el-input v-model="form.netMask" placeholder="" size="mini"></el-input>
            </el-col>
            <el-col :span="4" style="text-align: right">IP地址段</el-col>
            <el-col :span="8">
              <el-input v-model="form.ipField" placeholder="" size="mini"></el-input>
            </el-col>
          </el-row>
          <el-row>
            <el-col :span="4" style="text-align: right"></el-col>
            <el-col :span="20">
              <el-button type="primary" size="mini" @click="putCommunity">提交</el-button>
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
        <el-table-column prop="address" label="子网地址" width="140">
        </el-table-column>
        <el-table-column prop="netMask" label="子网掩码" width="140">
        </el-table-column>
        <el-table-column prop="maxNumber" label="最大主机数">
        </el-table-column>
        <el-table-column prop="ipField" label="IP地址段" width="240">
        </el-table-column>
      </el-table>
    </el-col>
    <el-col :span="7">
      <el-row class="myTable">
        <el-col :span="24">
          <el-row>
            <el-col class="bg-gray" :span="24">其他扫描方式</el-col>
          </el-row>
          <el-row>
            <el-col :span="24">

              <el-button type="primary" size="mini">从网关扫描</el-button>
            </el-col>
          </el-row>
          <el-row>
            <el-col :span="24">
              <el-input style="width: 170px" v-model="gateway" placeholder="" size="mini"></el-input>
              <el-button type="primary" size="mini">从网关 扫描</el-button>
            </el-col>
          </el-row>
          <el-row>
            <el-col :span="24" style="height: 350px"></el-col>
          </el-row>
        </el-col>
      </el-row>
    </el-col>
  </el-row>
</template>

<script type="text/ecmascript-6">
  const OK = 0;
  export default {
    data() {
      return {
        form: {
          address: '',
          maxNumber: '',
          netMask: '',
          ipField: ''
        },
        table: [],
        gateway: '',
        selected: []
      };
    },
    created() {
      this.$http.get('/api/netWork').then((res) => {
        res = res.body;
        if (res.errno === OK) {
          this.table = res.data;
        }
      });
    },
    methods: {
      handleSelectionChange(val) {
        this.selected = val;
      },
      deleteSelected() {
        console.log(this.selected);
      },
      putCommunity() {
        console.log('Community:', this.form);
      }
    }
  };
</script>

<style lang="stylus" rel="stylesheet/stylus">
  #step2 > .el-col
    height: 430px
</style>
