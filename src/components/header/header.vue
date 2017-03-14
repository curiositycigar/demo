<template>
  <div class="header">
    <el-row class="base-nav">
      <el-col :span="5" class="logo">
        <img :src="logo" alt="logo">
      </el-col>
      <el-col :span="17">
        <el-row :gutter="14" class="nav">
          <el-col :span="2">
            <router-link to="/1">
              <span class="base-nav-icon manage-views"></span>
              <span>视图管理</span>
            </router-link>
          </el-col>
          <el-col :span="2">
            <router-link to="/2">
              <span class="base-nav-icon manage-resource"></span>
              <span>资源管理</span></router-link>
          </el-col>
          <el-col :span="2">
            <router-link to="/3">
              <span class="base-nav-icon manage-fault"></span>
              <span>故障管理</span></router-link>
          </el-col>
          <el-col :span="2">
            <router-link to="/4">
              <span class="base-nav-icon manage-flow"></span>
              <span>流程管理</span></router-link>
          </el-col>
          <el-col :span="2">
            <router-link to="/5">
              <span class="base-nav-icon manage-operation"></span>
              <span>运维审计</span></router-link>
          </el-col>
          <el-col :span="2">
            <router-link to="/6">
              <span class="base-nav-icon manage-count"></span>
              <span>统计报表</span></router-link>
          </el-col>
          <el-col :span="2">
            <router-link to="/7">
              <span class="base-nav-icon manage-system"></span>
              <span>系统管理</span></router-link>
          </el-col>
        </el-row>
      </el-col>
      <el-col :span="2">i'm right menu</el-col>
    </el-row>
  </div>
</template>

<script type="text/ecmascript-6">
  import logo from '@/components/header/logo.png';
  export default {
    data () {
      return {
        logo: logo
      };
    }
  };
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .header
    .base-nav
      background: #1d89e4
      color: #ffffff
      .logo
        padding: 20px 0 0 20px
        img
          width: 91%
      a
        display: block
        height: 75px
        padding-top: 10px
        font-size: 15px
        font-weight: 600
        color: #ffffff
        &.active, &:hover
          background: #0f79d5
          .base-nav-icon
            &.manage-views
              background-position: -9px -35px
            &.manage-resource
              background-position: -51px -35px
            &.manage-fault
              background-position: -93px -35px
            &.manage-flow
              background-position: -135px -35px
            &.manage-operation
              background-position: -177px -35px
            &.manage-count
              background-position: -219px -35px
            &.manage-system
              background-position: -261px -35px
        .base-nav-icon
          display: block
          width: 40px
          height: 40px
          margin: 0 auto
          background: url(./nav_topmenu.png);
          &.manage-views
            background-position: -9px 0
          &.manage-resource
            background-position: -51px 0
          &.manage-fault
            background-position: -93px 0
          &.manage-flow
            background-position: -135px 0
          &.manage-operation
            background-position: -177px 0
          &.manage-count
            background-position: -219px 0
          &.manage-system
            background-position: -261px 0
</style>
