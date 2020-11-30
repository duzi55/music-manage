import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/Login'
    },
    {
      path: '/Login',
      component: resolve => require(['../pages/Login.vue'], resolve)
    }
    ,
    {
      path: '/Home',
      component: resolve => require(['../components/Home.vue'], resolve),
      children: [
        {
          path: '/Info',
          component: resolve => require(['../pages/Info.vue'], resolve)
        },
        {
          path: '/Consumer',
          component: resolve => require(['../components/ConsumerPage.vue'], resolve)
        },     {
          path: '/Singer',
          component: resolve => require(['../components/SingerPage.vue'], resolve)
        }, {
          path: '/SongList',
          component: resolve => require(['../components/SongListPage.vue'], resolve)
        }
      ]
    }
  ]
})
