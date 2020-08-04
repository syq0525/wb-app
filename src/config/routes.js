
const home = () => import('../pages/home.vue')
export default [
  {
		path: '',
		redirect: '/home'
	},
	{
		path: '/home',
		meta: {
			title: '主页',
		},
		component: home
	},
]