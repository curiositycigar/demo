<template>
  <div class="section clearfix">
    <div class="left-nav">
      <el-menu default-active="1-1" class="el-menu-vertical" @open="handleOpen" @close="handleClose">
        <el-submenu index="1">
          <template slot="title"><i class="el-icon-message"></i>IT资产</template>
          <el-tabs type="border-card">
            <el-tab-pane label="IT资产">
              <div class="lv-group">
                <el-menu-item index="1-1" @click="changeType(0)" class="lv1">网络设备</el-menu-item>
                <el-menu-item index="1-2" @click="changeType(1)" class="lv2">路由器</el-menu-item>
                <el-menu-item index="1-3" @click="changeType(2)" class="lv2">交换机</el-menu-item>
                <el-menu-item index="1-4" @click="changeType(3)" class="lv2">其他</el-menu-item>
              </div>
            </el-tab-pane>
            <el-tab-pane label="位置">
              <div></div>
            </el-tab-pane>
            <el-tab-pane label="区域">
              <div></div>
            </el-tab-pane>
          </el-tabs>
        </el-submenu>
        <el-submenu index="2">
          <template slot="title"><i class="el-icon-menu"></i>非IT资产</template>
          <el-menu-item index="2-1">文档</el-menu-item>
          <el-menu-item index="2-2">用户</el-menu-item>
          <el-menu-item index="2-3">组织机构</el-menu-item>
        </el-submenu>
      </el-menu>
    </div>
    <div class="content">
      <div class="operate-form">
        <el-menu class="el-menu" mode="horizontal" @select="handleSelect">
          <el-menu-item index="3">新扫描</el-menu-item>
          <el-menu-item index="4"><a href="javascript:;">新增</a></el-menu-item>
          <el-submenu index="5">
            <template slot="title">批量操作</template>
            <el-menu-item index="4-1">选项1</el-menu-item>
            <el-menu-item index="4-2">选项2</el-menu-item>
            <el-menu-item index="4-3">选项3</el-menu-item>
          </el-submenu>
        </el-menu>
      </div>
      <div class="table">
        <el-table :data="data" border style="width: 100%" @selection-change="handleSelectionChange">
          <el-table-column type="selection" width="55"></el-table-column>
          <el-table-column prop="state" label="状态"></el-table-column>
          <el-table-column prop="type" label="设备类型"></el-table-column>
          <el-table-column prop="company" label="厂商"></el-table-column>
          <el-table-column prop="model" label="型号"></el-table-column>
          <el-table-column prop="watch" label="监控">
            <template scope="scope">
              <el-switch v-model="scope.row.watch" on-text="on" off-text="off"></el-switch>
            </template>
          </el-table-column>
          <el-table-column prop="proof" label="凭证"></el-table-column>
          <el-table-column prop="devicename" label="设备名称"></el-table-column>
          <el-table-column prop="ip" label="IP地址" width="200"></el-table-column>
          <el-table-column prop="cpu" label="CPU利用率">
            <template scope="scope">
              <el-progress :percentage="scope.row.cpu"></el-progress>
            </template>
          </el-table-column>
          <el-table-column prop="memory" label="内存利用率">
            <template scope="scope">
              <el-progress :percentage="scope.row.memory"></el-progress>
            </template>
          </el-table-column>
          <el-table-column prop="disk" label="磁盘利用率">
            <template scope="scope">
              <el-progress :percentage="scope.row.disk"></el-progress>
            </template>
          </el-table-column>
          <el-table-column prop="level" label="管理级别"></el-table-column>
          <el-table-column prop="businessname" label="业务名称"></el-table-column>
          <el-table-column prop="operation" label="操作" width="200"></el-table-column>
        </el-table>
      </div>
      <el-pagination
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page="page.current"
        :page-sizes="page.sizes"
        :page-size="page.size"
        layout="total, sizes, prev, pager, next, jumper"
        :total="page.total">
      </el-pagination>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  const OK = 0;
  export default {
    data() {
      return {
        data: [],
        page: {
          type: 0,
          sizes: [10, 20, 25, 30],
          size: 20,
          total: 100,
          current: 1,
          changing: null
        }
      };
    },
    created() {
      let vm = this;
      let page = this.page;
      console.log('type=' + page.type + '&size=' + page.size + '&current=' + page.current);
      vm.getData();
    },
    methods: {
      handleOpen(key, keyPath) {
        console.log(key, keyPath);
      },
      handleClose(key, keyPath) {
        console.log(key, keyPath);
      },
      handleSelect(key, path) {
        console.log(key, path);
      },
      handleSubSelect(key, keyPath) {
        console.log(key, keyPath);
      },
      handleSelectionChange() {
        console.log(' ');
      },
      changeType(type) {
        let vm = this;
        let page = this.page;
        page.type = type;
        vm.getData();
      },
      handleSizeChange(val) {
        let vm = this;
        let page = this.page;
        page.size = val;
        console.log('每 页' + val + '条', this.page);
        clearTimeout(page.changing);
        page.changing = setTimeout(function () {
          vm.getData();
        }, 100);
      },
      handleCurrentChange(val) {
        let vm = this;
        let page = this.page;
        page.current = val;
        console.log('当前页: ' + val, this.page);
        clearTimeout(page.changing);
        page.changing = setTimeout(function () {
          vm.getData();
        }, 100);
      },
      getData(callback, completeCb) {
        let page = this.page;
        let url = '/api/devices?' + 'type=' + page.type + '&size=' + page.size + '&current=' + page.current;
        this.$http.get(url).then((res) => {
          res = res.body;
          if (res.errno === OK) {
            if (callback) {
              // 数据加载前执行
              callback(res);
            }
            this.data = res.data;
            this.setPage(this.page, res);
            if (completeCb) {
              // 数据加载前执行
              completeCb(res);
            }
          }
        });
      },
      setPage(page, data) {
        page.type = Number.parseInt(data.type);
        page.size = Number.parseInt(data.size);
        page.current = Number.parseInt(data.current);
        page.total = Number.parseInt(data.total);
      }
    }
  };
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .section
    width: 100%
    height: 100%
    .left-nav
      float: left
      width: 231px
      min-height: 780px
      border-right: solid 1px #ccd1cd
      background: #ffffff
      .el-menu-vertical
        .el-submenu
          background: #ffffff
          .el-submenu__title
            border-bottom: solid 1px #ccd1cd
            &:hover
              background: #ffffff
          .el-menu
            margin-top: 2px
            .el-tabs
              box-shadow: none;
          .lv-group
            font-size: 12px
            .lv1, .lv2
              height: 30px
              line-height: 30px
              cursor: pointer
              &:hover
                color: #1d89e4
            .lv1
              margin-left: 20px
            .lv2
              margin-left: 40px
          .el-menu-item
            background: #ffffff
            &:hover
              background: #ffffff
        .el-menu-horizontal
          background: #ffffff
          width: 231px
          .horizontal-item
            background: #ffffff
            padding: 0 15px
    .content
      margin: 0 0 0 250px
      width: auto
      .operate-form
        padding-top: 10px
        height: 60px
        .el-menu
          height: 100%
          background: #ffffff
          .el-menu-item, .el-submenu__title
            height: 50px
            line-height: 50px
      .table
        margin-right: 10px
        width: auto
        padding-top: 10px
        .el-table
          font-size: 14px
</style>
