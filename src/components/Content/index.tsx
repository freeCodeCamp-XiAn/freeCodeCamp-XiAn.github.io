import * as React from 'react'
import './index.less'
import avatar01 from '../../assets/images/avatar_0.jpg'
import avatar02 from '../../assets/images/avatar_1.jpg'
import avatar03 from '../../assets/images/avatar_2.jpg'
import avatar04 from '../../assets/images/avatar_3.jpg'
import avatar05 from '../../assets/images/avatar_4.jpg'


interface IProps {
	project: string
	name: string
	description: string
	isImgLeft?: boolean,
	style?: React.CSSProperties,
	index?: number
}

const content = (props: IProps) => {
	let avatar: any
	switch (props.index) {
		case 0:
			avatar = avatar01
			break
		case 1:
			avatar = avatar02
			break
		case 2:
			avatar = avatar03
			break
		case 3:
			avatar = avatar04
			break
		case 4:
			avatar = avatar05
			break
	}

	return (
		<div className='item' style={props.style}>
			<img src={avatar} className='img' />
			<div className='article'>
				<div className='title'>{props.project}</div>
				<div className='author'>{props.name}</div>
				<div className='desc'>{props.description}</div>
			</div>

		</div>
	)
}

export default content
