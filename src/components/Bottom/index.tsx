import * as React from 'react'
import Config from '@config/index'
import './index.less'
import Image from '@components/RoundImage'

interface IState {
	partner: object
	volunteer: object
}

export default class Bottom extends React.Component<any, IState> {
	constructor(props) {
		super(props)
		this.state = {
			partner: Config.partner,
			volunteer: Config.volunteer
		}
	}

	getImage(conf: any[], type: string) {
		return (
			conf.length &&
			conf.map((v: any, i: number) => {
				return (
					<Image
						key={i}
						name={v.name}
						url={v.url}
						active={v.active}
						type={type}
					/>
				)
			})
		)
	}

	render() {
		return (
			<React.Fragment>
				<div className="partner">
                    <div className="title">合作伙伴</div>
                    <div className="details">
                        {this.getImage(this.state.partner['data'], this.state.partner['name'])}
                    </div>
				</div>
				<div className="volunteer">
                    <div className="title">志愿者</div>
                    <div className="details">
					    {this.getImage(this.state.volunteer['data'], this.state.volunteer['name'])}
                    </div>
                </div>
			</React.Fragment>
		)
	}
}
