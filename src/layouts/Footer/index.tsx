import * as React from 'react'
import './index.less'

export default () => {
	const year = (new Date()).getFullYear()
	return(
		<div className='footer'>
			<div className='func'>
				<a href='mailto:xian@freecodecamp.one'>联系我们</a>
				<a href='https://github.com/freeCodeCamp-XiAn'>加入我们</a>
			</div>
			<div className='right'>
				@{year} freeCodeCamp 西安
			</div>
		</div>
	)
}
