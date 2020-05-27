import Vue from 'vue'
import Router from 'vue-router'
import Dashboard from '@/components/Template/Dashboard'
import DataTable from '@/components/Page/DataTable/index'
import Main from '@/components/Page/Main/index'

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
        name: 'Main',
        component: Main
      },
      {
        path: '/dtable',
        name: 'DataTable',
        component: DataTable
      }
      ]
    }
  ]
})
