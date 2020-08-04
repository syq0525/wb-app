/*
 * @Description: 
 * @Author: ShiYangquan
 * @Date: 2020-08-04 10:46:59
 * @LastEditors: ShiYangquan
 * @LastEditTime: 2020-08-04 10:53:22
 */
import Vue from 'vue'
import Vuex from 'vuex'
import actions from './actions'
import getters from './getters'
import mutations from './mutations'
import state from './state'
Vue.use(Vuex)

// 创建 store 实例
export default new Vuex.Store({
  actions, // // 保存数据异步方法
  getters,
  state, // 数据状态
  mutations, // 保存数据同步方法
})