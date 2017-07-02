import Vue from 'vue';
import Router from 'vue-router';
import Home from '@/components/Home';
import LatestMovies from '@/components/LatestMovies';

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/latest',
      name: 'LatestMovies',
      component: LatestMovies
    }
  ]
})
