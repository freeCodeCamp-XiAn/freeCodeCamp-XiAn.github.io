import * as React from 'react'
import './index.less'

interface IProps {
	title: string
}
export default (props: IProps) => {
	return (
		<div className='partTitle'>
			<div className='line'/>
			<div className='title'>{props.title}</div>
			<div  className='line' />
		</div>
	)
}
