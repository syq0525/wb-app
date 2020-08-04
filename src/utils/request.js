/*
 * @Description: 
 * @Author: ShiYangquan
 * @Date: 2020-08-03 13:53:41
 * @LastEditors: ShiYangquan
 * @LastEditTime: 2020-08-04 10:42:06
 */
import axios from 'axios';

const install = function (Vue) {
  let httpArr = [];
  function checkStatus(response) {
    httpArr.pop();
		if (httpArr.length === 0) {
			// Vue.$indicator.close();
		}
		// 如果http状态码正常，则直接返回数据
		if (response && (response.status === 200 || response.status === 304 || response.status === 400)) {
      let resData = response.data;
			return resData;
		}
		// 异常状态下，把错误信息返回去
		return {
			status: -404,
			msg: '网络异常'
		};
	}

  Vue.$post = Vue.prototype.$post = function (url, data, popup) {
		// if (httpArr.length === 0) {
		// 	Vue.$indicator.open();
		// }
		// httpArr.push(1);
		
		return axios({
				method: 'post',
				url: url,
				data: JSON.stringify(data),
				timeout: 10000,
				headers: {
					'X-Requested-With': 'XMLHttpRequest',
					'Content-Type': 'application/json;charset=UTF-8',
				}
			})
			.then((response) => {
				return checkStatus(response);
			})
			
	};

	Vue.$get = Vue.prototype.$get = function (url, params) {
		// if (httpArr.length === 0) {
		// 	Vue.$indicator.open();
		// }
		// httpArr.push(1);
		return axios({
				method: 'get',
				url: url,
				params, // get 请求时带的参数
				timeout: 10000,
				headers: {
					'X-Requested-With': 'XMLHttpRequest'
				}
			})
			.then((response) => {
				return checkStatus(response);
			})
			
	};
};
export default install;