<template>
  <div class="header">
    <div class="collapse-btn" @click="collapseChange()">
      <i class="el-icon-menu"></i>
    </div>
    <div class="logo my-p"><a>MUSIC 后台管理</a></div>
    <div class="header-right">
      <div class="btn-fullscreen" @click="handleFullScreen">
        <el-tooltip :content="fullscreen?'取消全屏':'全屏'" placement="top-start">
          <i class="el-icon-rank"></i>
        </el-tooltip>
      </div>
      <div class="user-avator">
        <img src="../assets/img/user.jpg" alt="">
      </div>
      <el-dropdown class="user-name" trigger="click" @command="handleCommand">
        <span class="el-dropdown-link">
          {{userName}}
        </span>
      </el-dropdown>
    </div>
  </div>
</template>
<script>
import bus from '../assets/js/bus'

export default {
  data () {
    return {
      collapse: false,
      fullscreen: false
    }
  },
  computed:{
    userName(){
      return localStorage.getItem("userName")
    }
  },
  methods: {
    collapseChange () {
      this.collapse = !this.collapse
      bus.$emit('collapse', this.collapse)
    },
    handleFullScreen () {
      if (this.fullscreen) {
        if (document.exitFullscreen) {
          document.exitFullscreen()
        } else if (document.webkitCanceFullScreen) {//safari Chrome
          document.webkitCanceFullScreen()
        } else if (document.mozCanceFullScreen) { //fireFox
          document.mozCanceFullScreen()
        } else if (document.msExitFullscreen) { //ie
          document.msExitFullscreen()
        }
      } else {
        let element = document.documentElement
        if (element.requestFullscreen) {
          element.requestFullscreen()
        } else if (element.webkitRequestFullScreen) {
          element.webkitRequestFullScreen()
        } else if (element.mozRequestFullScreen) {
          element.mozRequestFullScreen()
        } else if (element.msRequestFullScreen) {
          element.msRequestFullScreen()
        }
      }
      this.fullscreen = !this.fullscreen
    }
  }
}
</script>
<style scoped>
.header {
  position: relative;
  background-color: #aabdda;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  width: 100%;
  height: 70px;
  font-size: 22px;
  color: #FFFFFF;
  z-index: 99;
  transition: box-shadow 0.5s
}

.header:hover {
  box-shadow: 20px 2px 14px 0px #365a7f;
}

.collapse-btn {
  float: left;
  padding: 0 21px;
  line-height: 70px;
  cursor: pointer;
}

.header .logo {
  line-height: 70px;
  float: left;
}

.header-right {
  float: right;
  padding-right: 50px;
  display: flex;
  height: 70px;
  align-items: center;
}

.btn-fullscreen {
  margin-right: 5px;
  font-size: 24px;
  transform: rotate(45deg);
}

.user-avator {
  margin-left: 20px;
}

.user-avator img {
  display: block;
  width: 40px;
  height: 40px;
  border-radius: 50%;
}
.user-name{
  margin-left: 10px;
}
.el-dropdown-link{
  background-color: #ffffff;
}
.my-p a{
  color:#1e3e5f;;
  font-family:Iceland;
  text-shadow: 0 0 10px #fff,
  0 0 20px  #fff,
  0 0 30px  #fff,
  0 0 40px  #228DFF,
  0 0 70px  #228DFF

}
@font-face {
  font-family: 'Iceland';
  font-style: normal;
  font-weight: 400;
  src: local('Iceland'), local('Iceland-Regular'), url(http://themes.googleusercontent.com/static/fonts/iceland/v3/F6LYTZLHrG9BNYXRjU7RSw.woff) format('woff');
}
</style>
