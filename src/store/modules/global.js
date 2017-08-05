import * as types from '../mutations-types';

export default {
  namespaced: true,
  state: () => ({
    testData: []
  }),
  actions: {
    fetchItem({commit}) {
      let api = new Promise(resolve => {
        setTimeout(() => {
          resolve(['测试数据1', '测试数据2', '测试数据3'])
        }, 1000);
      });
      return api.then(data => {
        commit(types.TEST_DATA, data)
      })
    }
  },
  mutations: {
    [types.TEST_DATA](state, data) {
      state.testData = data
    },
  }
}