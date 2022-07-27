import Home from './routes/Home'
import User from './routes/User'
import Profile from './routes/Profile'
import Register from './routes/Register'
import Login from './routes/Login'
import IndexPage from './routes/IndexPage'

export default [
	{
		path: '/',
		component: IndexPage,
		routes: [
			{
				path: '/home',
				redirect: true,
				component: Home
			},
			{
				path: '/user',
				component: User
			},
			{
				path: '/profile',
				component: Profile
			},
			{
				path: '/register',
				component: Register
			},
			{
				path: '/login',
				component: Login
			}
		]
	}
]