import Vue from 'vue'
import Vuex from 'vuex'
import global from './module/global'

Vue.use(Vuex);

export function createStore() {
  return new Vuex.Store({
    modules: {
      global
    }
  })
}
