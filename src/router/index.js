import Vue from 'vue'
import Router from 'vue-router'
import Dashboard from '@/components/Template/Dashboard'
import DataTable from '@/components/Page/DataTable/index'
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
        path: '/dtable',
        name: 'DataTable',
        component: DataTable
      }
      ]
    }
  ]
})
