<template>
  <div class="login">
    <div class="content">
      <div>登陆</div>
      <el-form class="login-form" :model="user" :rules="rules" status-icon ref="loginForm">
        <el-form-item prop="name">
          <el-input placeholder="请输入用户名" v-model="user.name" clearable>
            chen
            <i slot="prefix" class="icon iconfont icon-yonghu"></i>
          </el-input>
        </el-form-item>
        <el-form-item prop="pwd">
          <el-input placeholder="请输入密码" type="password" v-model="user.pwd" @keyup.enter.native="login" clearable>
            123
            <i slot="prefix" class="icon iconfont icon-mima"></i>
          </el-input>
        </el-form-item>
      </el-form>
      <el-button type="primary" @click="login">登陆</el-button>
      <p>没有账号，去
        <span class="reg">注册</span>
      </p>
      <!--  -->
    </div>
  </div>
</template>

<script>
export default {
  name: 'login',
  data () {
    return {
      user: {},
      // 表单验证
      rules: {
        name: [
          { required: true, message: '用户名不能为空', trigger: 'blur' }
        ],
        pwd: [
          { required: true, message: '密码不能为空', trigger: 'blur' }
        ]
      }
    }
  },
  methods: {
    login: function () {
      //
      this.$refs.loginForm.validate((valid) => {
        if (valid) {

          if (this.user.name === 'chen' && this.user.pwd === '123') {
            this.$notify({
              type: 'success',
              message: '欢迎你,' + this.user.name + '!',
              duration: 3000
            })
            this.$router.push('/bookIndex')

          } else {
            this.$message({
              type: 'erro',
              message: '密码或账号错误',
              showClose: true
            })
          }


          // console.log('dddd')
        }
        else {
          return false
          // alert('请输入密码或账号')
        }
      })

      // alert('dddddddd')
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
/* div {
  margin: 0;
  padding: 0;
} */
.reg {
  color: #f56c6c;
  cursor: pointer;
}
.content {
  margin: 0 auto;
  width: 400px;
  height: 250px;
  text-align: center;
  box-shadow: 0px 0px 12px#CBCBCB;
  border-radius: 4px;
  /* background: #f56c6c; */
}
.login-form {
  /* margin: 0 auto; */
  margin: 10px;
  /* box-sizing: content-box; */
  box-sizing: border-box;
}
</style>
