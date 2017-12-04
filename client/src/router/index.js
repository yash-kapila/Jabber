import Vue from 'vue';
import Router from 'vue-router';

import Home from '@/components/Home';
import Dashboard from '@/components/post-login/Dashboard';
import CommonDataService from '@/services/data/common';

const commonDataService = new CommonDataService();

Vue.use(Router)

export default new Router({
  routes: [{
      path: '/dashboard',
      name: 'Dashboard',
      component: Dashboard,
      beforeEnter: (to, from, next) => {
        // If token is valid, continue, else redirect to Home
        if(commonDataService.getTokenValidity()) return next();
        return next('/');
      },
      props: {
          user: commonDataService.getLoggedInUserDetails()
      }
  }, {
      path: '/',
      name: 'Home',
      component: Home,
      beforeEnter: (to, from, next) => {
        commonDataService.verifyToken()
          .then((data) => {
            // Token is valid
            commonDataService.setTokenValidity(data.status);
            commonDataService.setLoggedInUserDetails({
                username: data.username
            });
            return next('/dashboard');
          })
          .catch((err) => {
            // Token is invalid
            commonDataService.setTokenValidity(err.status);
            return next();
          });
      }
  }]
})
