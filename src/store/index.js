import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

import $http from '../util/request'

export function createStore() {
  return new Vuex.Store({
    namespaced: true,
    state: {
      items: {}
    },
    actions: {
      fetchItem({commit}) {
        return $http.get('http://localhost:8080/getJson').then(item => {
          commit('setItem', item.data)
        });
      }
    },
    mutations: {
      setItem(state, items) {
        state.items = items;
      }
    }
  })
}
