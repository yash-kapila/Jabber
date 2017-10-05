import Vue from 'vue';
import Router from 'vue-router';

import Home from '@/components/Home';
import Register from '@/components/pre-login/Register';

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/register',
      name: 'Register',
      component: Register
    }
  ]
})
