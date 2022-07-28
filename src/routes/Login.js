import React from 'react'

function Login(props) {
	const login = () => {
		localStorage.setItem('login', true)
	}
	return (
		<div>
			<button onClick={login}>登录</button>
		</div>
	)
}

export default Login