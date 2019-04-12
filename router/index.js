import Vue from 'vue'
import Router from 'vue-router'
//路由懒加载
const Home =() => import('@/page/home')
const Item =() => import('@/page/item')

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/item',
      name: 'Item',
      component: Item
    },
    {
      path: '/score',
      name: 'Score',
      component: r => require.ensure([], () => r(require('@/page/score')), 'Score')
    }
  ]
})
