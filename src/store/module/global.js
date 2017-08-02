import * as types from '../types';

const state = {
  testData: ['zhangsan', 'lisi', 'wangwu']
};

const getters = {
  getTDLength: state => state.testData.length
};

const actions = {
  getTestData({commit}) {
    let arr = [];
    for (let i = 0; i < 10; i++) {
      arr.push({
        name: '涅槃重生' + i,
        price: 12.9
      });
    }
    commit(types.TEST_DATA, {arr});
  }
};

const mutations = {
  [types.TEST_DATA](state, data) {
    state.bookList = data.arr;
  },
};

export default {
  state,
  getters,
  actions,
  mutations
};