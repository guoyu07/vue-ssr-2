import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const index = () => import('../views/index.vue')
const item = () => import('../views/item.vue')

export function createRouter() {
  return new Router({
    mode: 'history',
    fallback: false,
    scrollBehavior: () => ({y: 0}),
    routes: [
      {path: '/', component: index},
      {path: '/item', component: item},
    ]
  })
}