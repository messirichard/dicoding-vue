import Vue from 'vue'
import Router from 'vue-router'
import Dashboard from '@/components/Template/Dashboard'
import MyAcc from '@/components/Page/MyAcc/index'
import Global from '@/components/Page/Global/index'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Dashboard',
      component: Dashboard,
      children: [{
        path: '/',
        name: 'Global',
        component: Global
      },
      {
        path: '/acc',
        name: 'MyAcc',
        component: MyAcc
      }
      ]
    }
  ]
})
