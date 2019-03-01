import * as React from 'react'
import './Left.less'

interface IProps {
	project?: string
	name?: string
	description?: string
	imgUrl?: string
}

const Left = (props: IProps) => (
	<div>
		<div className='content_in'>
			<div className='content_in_left'>
				<img
					className='content_in_img'
					src={require('../../assets/images/content_in.jpg')}
					alt='...'
				/>
			</div>
			<div className='content_in_right'>
				<div className='cir_t'>{props.project}</div>
				<div className='cir_c'>{props.name}</div>
				<div className='cir_b'>{props.description}</div>
			</div>
		</div>
	</div>
)

export default Left
