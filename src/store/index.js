import Vue from 'vue'
import Vuex from 'vuex'
import api from '~server'

Vue.use(Vuex);

export function createStore() {
  return new Vuex.Store({
    namespaced: true,
    state: {
      items: {}
    },
    actions: {
      fetchItem({commit}) {
        return api.get('/getJson').then(item => {
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
