<template>
  <div class="login-page">
    <el-card class="login-form" size="small">
      <div slot="header">
        <span>欢迎登录</span>
      </div>
      <el-form label-width="60px">
        <el-form-item label="用户名:">
          <el-input size="small"></el-input>
        </el-form-item>
        <el-form-item label="密码:">
          <el-input size="small"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" size="small">登录</el-button>
        </el-form-item>
      </el-form>
    </el-card>
  </div>
</template>

<script>
  export default {
    name: "index"
  }
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
  .login-page {
    width: 100%;
    height: 100%;
    background: url('../../assets/login-bg.jpg') no-repeat;
    background-size: cover;
    position: relative;
    background-position: 50%;
    background-position-x: 50%;
    background-position-y: center;
    .login-form {
      position: absolute;
      right: 160px;
      top: 30%;
      width: 300px;
      .el-form-item {
        margin-bottom: 10px;
        button {
          float: right;
        }
      }
    }
  }
</style>
