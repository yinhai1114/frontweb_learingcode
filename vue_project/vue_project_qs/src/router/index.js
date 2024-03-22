import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
//@表示src目录
import helloyinhai from '@/components/helloyinhai'
import yinhai from '@/components/yinhai'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/hello',
      name: 'helloyinhai',
      component: helloyinhai
    },
    {
      path: '/yinhai',
      name: 'yinhai',
      component: yinhai
    }
  ]
})
