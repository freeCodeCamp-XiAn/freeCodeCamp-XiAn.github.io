import * as React from 'react'
import './index.less'
import Image from '@components/RoundImage'

interface IImg {
	name: string
	url: any
	active: number
}

interface IPartner {
	data: any
}


export default class Partner extends React.Component<IPartner, any> {
	constructor(props: IPartner) {
		super(props)
	}

	getImage(parts: IImg[]) {
		return (
			parts.map((part: any, i: number) => {
				return (
					<Image
						key={i}
						name={part.name}
						url={part.url}
						active={part.active}
						type={part.type}
					/>
				)
			})
		)
	}

	render() {
		return (
			<React.Fragment>
				<div className='partner'>
					<div className='details'>
						{this.getImage(this.props.data)}
					</div>
				</div>
			</React.Fragment>
		)
	}
}
