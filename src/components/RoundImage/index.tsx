import * as React from 'react'
import './index.less'

interface IProps {
	url: string
	name?: string
	active: number
	type: string
}

interface IState {
	active: number
	type: string
}

export default class RoundImage extends React.Component<IProps, IState> {
	constructor(props) {
		super(props)
		this.state = {
			active: this.props.active,
			type: this.props.type
		}
	}

	render() {
		return (
			<React.Fragment>
					<img 
                        className={`${this.state.type}-img ${this.state.active === 1 ? 'active' : ''}`}
						src={this.props.url}
						alt={this.props.name}
						style={{ margin: '1.25rem auto', borderRadius: '50%' }}
					/>
			</React.Fragment>
		)
	}
}
