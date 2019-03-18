import * as React from 'react'
import './index.less'

interface IProps {
	url: any
	name?: string
	active: number
	type: string
}


export default class RoundImage extends React.Component<IProps, any> {
	constructor(props) {
		super(props)
	}

	render() {
		return (
			<React.Fragment>
				<img
					className={`img ${this.props.active === 1 ? 'active' : ''}`}
					src={this.props.url}
					alt={this.props.name}
					style={{ margin: '1.25rem auto', borderRadius: '50%' }}
				/>
			</React.Fragment>
		)
	}
}
