import { Route } from 'dva/router'
/**
 * 把一个路由配置的数组渲染成 React 组件数组
 * @param {*} routerConfig
 */
export function renderRoutes(routerConfig) {
	return routerConfig.map((routeConfig, index) => {
		const { path, exact=false, component: Component, routes=[] } = routeConfig
		return (
			<Route 
				path={path}
				exact={exact}
				key={index}
				render={(props) => <Component {...props} routes={routes}/>}
			/>
		)
	})
}