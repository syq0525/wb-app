/*
 * @Description: 
 * @Author: ShiYangquan
 * @Date: 2019-06-26 09:41:02
 * @LastEditors: ShiYangquan
 * @LastEditTime: 2020-08-04 10:28:13
 */
const path = require('path');
module.exports = {
	publicPath: process.env.NODE_ENV === 'production' ? '/CRM/WeChat/App/' : '/',
	assetsDir: 'static',
	lintOnSave: false,
	productionSourceMap: false,
	chainWebpack: (config) => {
		config.plugins.delete('prefetch');
		config.module
			.rule('images')
			.use('url-loader')
			.loader('url-loader')
			.tap((options) => Object.assign(options, { limit: 4096 }));
  },
  css: {
    loaderOptions: {
      // 给 sass-loader 传递选项
      sass: {
        // @/ 是 src/ 的别名
        // 所以这里假设你有 `src/variables.scss` 这个文件
        additionalData: `@import "~@/assets/css/base.scss";`
      }
    }
  },

	devServer: {
		open: true, // 启动服务后是否打开浏览器
		host: '0.0.0.0',
		port: 8080, // 服务端口
		https: false,
		hotOnly: true,
		proxy: {
			'/mall29': {
				target: 'https://ceshi.lechengclub.com',
				changeOrigin: true
			},
			
		}
	}
};
