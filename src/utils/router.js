import { Route } from 'dva/router'
import dynamic from 'dva/dynamic'
/**
 * 把一个路由配置的数组渲染成 React 组件数组
 * @param {*} routerConfig
 */
export function renderRoutes(routerConfig, app) {
	return routerConfig.map((routeConfig, index) => {
		const { path, exact=false, component, routes=[], models=[] } = routeConfig
		return (
			<Route 
				path={path}
				exact={exact}
				key={index}
				component={
					dynamic({
						app, 
						models: () => models,
						component: () => {
							return component().then(result => {
								let Component = result.default || result
								return (props) => <Component {...props} routes={routes} app={app}/>
							})
						}
					})
				}
			/>
		)
	})
}