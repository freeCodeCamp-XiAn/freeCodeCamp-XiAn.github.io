import * as React from 'react'
import './index.less'
import avatar from '../../assets/images/avatar.jpg'

interface IProps {
	project: string
	name: string
	description: string
	isImgLeft?: boolean,
	style?: React.CSSProperties
}

export default (props: IProps) => (
	<div className='item' style={props.style}>
		<img src={avatar} alt='花儿飞飞' className='img' />
		<div className='article'>
			<div className='title'>{props.project}</div>
			<div className='author'>{props.name}</div>
			<div className='desc'>{props.description}</div>
		</div>

	</div>
)

