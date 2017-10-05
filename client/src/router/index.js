import Vue from 'vue';
import Router from 'vue-router';

import Home from '@/components/Home';
import Dashboard from '@/components/post-login/Dashboard';

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/dashboard',
      name: 'Dashboard',
      component: Dashboard
    }
  ]
})
