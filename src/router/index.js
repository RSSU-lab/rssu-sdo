import Vue from 'vue'
import Router from 'vue-router'
import AppBase from '@/components/Base'
import PageNotFound from '@/components/PageNotFound'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'AppBase',
      component: AppBase
    },
    { path: '*', component: PageNotFound }
  ]
})
