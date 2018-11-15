import Vue from 'vue';
import Router from 'vue-router';
import Videos from '@/components/Videos';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Videos',
      component: Videos,
    },
  ],
});
