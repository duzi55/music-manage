<template>
  <div class="login-wrap">
    <div class="ms-title" id="container"><p class="my-p"><a href="#" style="  font-size:1.5em;
">
      Music
    </a></p></div>
    <div class="ms-login">
      <el-form :model="ruleForm" :rules="rules" ref="ruleForm">
        <el-form-item prop="username">
          <el-input class="ms-login-input" v-model="ruleForm.username" placeholder="用户名"></el-input>
        </el-form-item>
        <el-form-item prop="password">
          <el-input type="password" v-model="ruleForm.password" placeholder="密码"></el-input>
        </el-form-item>
        <div class="login-btn">
          <button @click="login()" type="button">登录</button>
        </div>
      </el-form>

    </div>
    <div class="my-login-wrap"></div>
  </div>
</template>
<script>
import '../assets/css/shine.css'
import {getLoginStatus} from '../api'
import {mixin} from '../mixins/index'

export default {
  mixins:[mixin],
  data: function () {
    return {
      ruleForm: {
        username: 'admin',
        password: '123'
      },
      rules: {
        username: [
          {required: true, message: '请输入用户名', trigger: 'blur'}
        ],
        password: [
          {required: true, message: '请输入密码', trigger: 'blur'}
        ]
      }
    }
  },
  methods:{
    login(){
      let params = new URLSearchParams();
      params.append("username",this.ruleForm.username);
      params.append("password",this.ruleForm.password);
      getLoginStatus(params)
      .then(res=>{
        if(res.code == 1){
          localStorage.setItem("userName",this.ruleForm.username)
          this.$router.push('Info')
          this.notify('success','登陆成功')
        }else {
          this.notify('error',res.msg)
          // this.$notify.error({
          //   title: res.msg,
          // });
        }
      })
    }
  }
}
</script>

<style>
.login-wrap {
  position: relative;
  background: url("../assets/img/background.jpg");
  background-attachment: fixed;
  background-position: center;
  background-size: cover;
  width: 100%;
  height: 100%;
}

.my-login-wrap {
  position: absolute;
  background: url("../assets/img/background.jpg");
  background-attachment: fixed;
  background-position: center;
  background-size: cover;
  width: 100%;
  height: 100%;
  z-index: 10;
  top: 0;
  left: 0;
  filter: blur(2px);
}

.ms-title {
  position: absolute;
  /*top: 50%;*/
  width: 100%;
  /*margin-top: -230px;*/
  text-align: center;
  font-size: 12px;
  font-weight: 600;
  color: #fff;
  z-index: 999;
}

.ms-login {
  position: absolute;
  height: 160px;
  width: 300px;
  top: 50%;
  left: 50%;
  margin-left: -190px;
  margin-top: -150px;
  padding: 40px;
  border-radius: 5px;
  background: #a4b3c3;
  z-index: 999;
  transition:box-shadow 0.5s
}

.ms-login:hover, .ms-login:hover .login-btn>button,.ms-login:hover .el-input__inner{
  box-shadow: 10px 10px #a1a1a1;
}



.login-btn {
  text-align: center;
}

.login-btn button {
  width: 100%;
  height: 34px;
  border-radius: 4px;
  border: 1px solid #000000;
  transition:box-shadow 0.5s
}

.ms-login .el-input__inner {
  background-color: #2d4e4fbd;
  border: 1px solid #000000;
  transition:box-shadow 0.5s;
  color: #000000;
}

.el-form-item.is-success .el-input__inner {
  border-color: #181919;
}


</style>
