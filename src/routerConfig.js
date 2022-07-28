
export default [
	{
		path: '/',
		component: () => import('./routes/IndexPage'),
		routes: [
			{
				path: '/home',
				redirect: true,
				models: [() => import('./models/home')],
				component: () => import('./routes/Home')
			},
			{
				path: '/user',
				component: () => import('./routes/User')
			},
			{
				path: '/profile',
				authority: true,
				component: () => import('./routes/Profile')
			},
			{
				path: '/register',
				component: () => import('./routes/Register')
			},
			{
				path: '/login',
				component: () => import('./routes/Login')
			}
		]
	}
]