import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const Index = () => import('../views/index.vue')

export function createRouter() {

  return new Router({
    mode: 'history',
    scrollBehavior: () => ({y: 0}),
    routes: [
      {path: '/', component: Index}
    ]
  })
}