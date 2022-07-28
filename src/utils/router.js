import React from 'react'
import { Route, Redirect } from 'dva/router'
import dynamic from 'dva/dynamic'

// function dynamic({app, models, component}) {
// 	 return class Dynamic extends React.Component{
// 		constructor(props){
// 			super(props)
// 			this.state = {Component: null}
// 		}
// 		componentDidMount() {
// 			Promise.all([
// 				Promise.all(models()),
// 				component()
// 			]).then(([models, Component]) => {
// 				models.map(item => item.default).forEach(model => app.model(model))
// 				this.setState({Component: Component.default || Component})
// 			})
// 		}
// 		render() {
// 			const { Component } = this.state
// 			return Component && <Component {...this.props}/>
// 		}
// 	 }
// }


/**
 * 把一个路由配置的数组渲染成 React 组件数组
 * @param {*} routerConfig
 */
export function renderRoutes(routerConfig, app) {
	return routerConfig.map((routeConfig, index) => {
		const { path, exact=false, component, routes=[], models=[], authority } = routeConfig
		return (
			<Route 
				path={path}
				exact={exact}
				key={index}
				component={
					dynamic({
						app, 
						models: () => models.map(model => model()),
						component: () => {
							if (authority && !localStorage.getItem('login')) {
								return (props) => <Redirect to="/login" />
							}
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

export function renderRedirect(from, exact, routesConfig) {
	let { path } = routesConfig.find(router => router.redirect) || routesConfig[0]
	return <Redirect exact={exact} from={from} to={path}/>

}