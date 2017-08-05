import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const root = (component) => () => import(`../views/${component}.vue`)

export function createRouter() {

  return new Router({
    mode: 'history',
    scrollBehavior: () => ({y: 0}),
    routes: [
      {path: '/', component: root('index')}
    ]
  })
}