import React from 'react'
import { connect } from 'dva'

function Home(props) {
	return (
		<div>
			{props.title}
		</div>
	)
}

export default connect(state => state.home)(Home)