/*
 * @Description: 
 * @Author: ShiYangquan
 * @Date: 2020-08-04 10:46:46
 * @LastEditors: ShiYangquan
 * @LastEditTime: 2020-08-04 11:13:05
 */
export default {
  getHostSync({
    commit
  },data) {
    commit('getHost',data)
  },
}