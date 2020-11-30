<template>
  <div class="sidebar">
    <el-menu
      class="sidebar-el-menu"
      :default-active="onRoutes"
      :collapse="collapse"
      background-color="#ccd9e7"
      text-color="#00000094"
      active-text-color="#000"
      router
    >
      <template v-for="item in items">
        <template>
          <el-menu-item
            :index="item.index" :key="item.index"
            width="100%"
            :class="{'my-active':item.index == onRoutes}"
          >
            <i :class="item.icon"></i>
            {{ item.title }}
          </el-menu-item>
        </template>
      </template>

    </el-menu>
  </div>
</template>
<script>
import bus from '../../src/assets/js/bus'
export default {
  data () {
    return {
      collapse: false,
      items: [
        {
          icon: 'el-icon-document',
          index: 'Info',
          title: '系统首页'
        },
        {
          icon: 'el-icon-document',
          index: 'Consumer',
          title: '用户管理'
        },
        {
          icon: 'el-icon-document',
          index: 'Singer',
          title: '歌手管理'
        },
        {
          icon: 'el-icon-document',
          index: 'SongList',
          title: '歌单管理'
        }
      ]
    }
  },
  computed: {
    onRoutes () {
      return this.$route.path.replace('/', '')
    }
  },
  created () {
    bus.$on('collapse',msg=>{
      this.collapse = msg
    })
  }
}
</script>
<style scoped>
.sidebar {
  display: block;
  position: absolute;
  left: 0;
  top: 70px;
  bottom: 0;
  background: #ccd9e7;
  overflow-y: scroll;
  transition: box-shadow 0.5s;
}

.sidebar:hover {
  box-shadow: 3px 3px 17px 0px #365a7f;
}

.sidebar-el-menu:not(.el-menu--collapse) {
  width: 150px;
}

.sidebar::-webkit-scrollbar {
  width: 1px;
}

.el-menu {
  border-right: solid 0px #e6e6e6;
}

.el-menu-item {
  padding-left: 20px;
  color: rgb(27, 27, 27);
  background-color: #bfcbd8 !important;
  border: 1px solid rgb(115, 93, 93);
  border-radius: 5px;
  margin: 10px;
  transition: box-shadow 0.5s;
}

.el-menu-item:hover {
  box-shadow: 5px 5px #a1a1a1;
}

.my-active {
  box-shadow: 5px 5px #8099a0;
}
</style>
