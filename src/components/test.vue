<template>
  <div class="login">
    <div class="title">
      <h2>华容县防疫物资管理系统</h2>
    </div>
    <el-form :model="form" :rules="rules" label-width="100px" ref="form" >
      <el-form-item label="用户名" prop="username" label-width="100px">
        <el-input placeholder="请输入用户名" v-model="form.username" @blur="form.username = $event.target.value.trim()"></el-input>
      </el-form-item>
      <el-form-item label="用户密码" prop="password" label-width="100px">
        <el-input placeholder="请输入密码" v-model="form.password" @blur="form.username = $event.target.value.trim()"></el-input>
      </el-form-item>
      <el-form-item label="用户权限" prop="power" label-width="100px">
        <el-select v-model="form.power" placeholder="请选择用户权限">
          <el-option label="管理员" :value="1"></el-option>
          <el-option label="供应商" :value="2"></el-option>
          <el-option label="需求方" :value="3"></el-option>
        </el-select>
      </el-form-item>
    </el-form>
    <div class="footer">
      <el-button type="info" >注册</el-button>
      <el-button type="primary" @click="getLogin" :loading="isLoading">登录</el-button>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'BaiduTestTest',
  data() {
    var usernameValid = (rule, value, callback) => {
      if (!(/^[\w-]{4,16}$/.test(value))) {
        callback(new Error('请输入由数字，字母，下划线和减号组成的用户名'))
      } else {
        callback()
      }
    }
    return {
      form: {
        username: '',
        password: '',
        power: ''
      },
      rules: {
        username: [
          { required: true, message: '请输入用户名', trigger: 'blur' },
          { validator: usernameValid, trigger: 'blur'}
        ],
        password: [
          { required: true, message: '请输入用户密码', trigger: 'blur' }
        ],
        power: [
          { required: true, message: '请选择用户权限', trigger: 'blur' }
        ]
      },
      isLoading: false
    };
  },
  watch: {

  },
  created() {
    window.addEventListener('keydown', this.listerEnter)
  },
  mounted() {
    // window.addEventListener('keydown', this.listerEnter)
  },
  beforeDestroy() {
    window.removeEventListener('keydown', this.listerEnter)
  },
  methods: {
    getLogin() {
      this.$refs.form.validate(valid => {
        if (valid) {
          this.isLoading = true
          axios({
            method: 'post',
            url: 'http://localhost:3000/api/login',
            data: {
              form: this.form
            }
          }).then(res => {
            if (res.data.status === 200) {
              this.$message({
                message: '登录成功',
                type: 'success'
              })
            } else {
              this.$message({
                message: '登录失败，查找不到该用户',
                type: 'error'
              })
            }
          }).finally(() => {
            this.isLoading = false
            this.$refs.form.resetFields()
          })
        } else {
          this.$message({
            message: '请通过表单验证后在登录',
            type: 'warning'
          })
        }
      })
    },
    listerEnter(e) {
      if (e.code === 'Enter') {
        this.getLogin()
      }
    }
  },
};
</script>

<style lang="less" scoped>
.login {
  margin: 0 auto;
  border-radius: 30px;
  box-shadow: 0 0 10px 0 rgb(238, 210, 157);
  .title {
    text-align: center;
    font-weight: 700;
  }
  width: 400px;
  background-color: #f3f3f3;
  padding: 20px;
  /deep/ .el-form {
    .el-form-item {
      .el-form-item__label {
        color: #000;
        font-weight: 500;
        font-size: 16px;
      }
      .el-form-item__content {
        .el-select, & > .el-input {
          width: 80%;
        }
      }
    }
  }
  .footer {
    text-align: center;
    .el-button {
      width: 40%;
    }
  }
}
</style>