import * as React from 'react'
import './Right.less'

interface IProps {
	project?: string
	name?: string
	description?: string
	imgUrl?: string
}

const Right = (props: IProps) => (
	<div>
		<div className='content_in_r'>
			<div className='content_in_right'>
				<div className='cir_t'>{props.project}</div>
				<div className='cir_c'>{props.name}</div>
				<div className='cir_b'>{props.description}</div>
			</div>
			<div className='content_in_left'>
				<img
					className='content_in_img'
					src={require('../../assets/images/content_in.jpg')}
					alt='花儿飞飞'
				/>
			</div>
		</div>
	</div>
)

export default Right
