/*
 * @Description: 
 * @Author: ShiYangquan
 * @Date: 2020-08-03 17:08:14
 * @LastEditors: ShiYangquan
 * @LastEditTime: 2020-08-03 17:48:49
 */
const baseSize = 75
const bodySize = 30
// 设置 rem 函数
function setRem () {
  // 当前页面宽度相对于 750 宽的缩放比例，可根据自己需要修改。
  let width = document.documentElement.clientWidth
  if (width > 768) {
		width = 768;
  }
  const rem = width / 750
  // 设置页面根节点字体大小
  document.documentElement.style.fontSize = baseSize * rem + 'px'
  document.body.style.fontSize = bodySize * rem + 'px'
}
// 初始化
setRem()
// 改变窗口大小时重新设置 rem
window.onresize = function () {
  setRem()
}