import * as React from 'react'
import './index.less'

interface IProps {
	title: string
}
export default (props: IProps) => {
	return (
		<div className='partTitle'>{props.title}</div>
	)
}
