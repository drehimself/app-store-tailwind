import Vue from 'vue'
import Router from 'vue-router'
import Discover from './views/Discover.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'discover',
      component: Discover
    },
    {
      path: '/create',
      name: 'create',
      // route level code-splitting
      // this generates a separate chunk (create.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "create" */ './views/Create.vue')
    },
    {
      path: '/work',
      name: 'work',
      component: () => import(/* webpackChunkName: "work" */ './views/Work.vue')
    },
    {
      path: '/play',
      name: 'play',
      component: () => import(/* webpackChunkName: "play" */ './views/Play.vue')
    },
    {
      path: '/develop',
      name: 'develop',
      component: () => import(/* webpackChunkName: "develop" */ './views/Develop.vue')
    },
    {
      path: '/categories',
      name: 'categories',
      component: () => import(/* webpackChunkName: "categories" */ './views/Categories.vue')
    },
    {
      path: '/updates',
      name: 'updates',
      component: () => import(/* webpackChunkName: "updates" */ './views/Updates.vue')
    },
    {
      path: '/profile',
      name: 'profile',
      component: () => import(/* webpackChunkName: "profile" */ './views/Profile.vue')
    },
    {
      path: '/story',
      name: 'story',
      props: true,
      component: () => import(/* webpackChunkName: "story" */ './views/Story.vue')
    },
    {
      path: '/product',
      name: 'product',
      props: true,
      component: () => import(/* webpackChunkName: "product" */ './views/Product.vue')
    },
  ]
})
