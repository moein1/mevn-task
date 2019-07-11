import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () =>
        import(/* webpackChunkName: "about" */ './views/About.vue')
    },
    {
      path: '/signup',
      name: 'signup',
      component: () => import('./components/signup.vue')
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('./components/login.vue'),
    },
    {
      path: '/projects',
      name: 'projects',
      component: () => import('./components/projects.vue'),
    },
    {
      path: '/card',
      name: 'card',
      component: () => import('./components/card.vue'),
    },
    {
      path: '/grid',
      name: 'grid',
      component: () => import('./components/grid.vue'),
    },
    {
      path: '/portfolio',
      name: 'portfolio',
      component: () => import('./components/portfolio.vue'),
    },
    {
      path: '/eat',
      name: 'eat',
      component: () => import('./components/eat.vue'),
    },
    {
      path: '/netflix',
      name: 'netflix',
      component: () => import('./components/netflix.vue'),
    },
    {
      path: '/modalContainer',
      name: 'modalContainer',
      component: () => import('./components/modalContainer.vue'),
    },
    {
      path: '/menu',
      name: 'menu',
      component: () => import('./components/menu.vue'),
    },
    {
      path: '/alert',
      name: 'alert',
      component: () => import('./components/alert.vue'),
    },
  ]
})
