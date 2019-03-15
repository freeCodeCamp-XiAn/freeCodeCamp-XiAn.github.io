import * as React from 'react'
import './index.less'
import Config from '../../config'
import { Footer, Banner } from '@layouts/index'
import IndexContent from '@components/IndexContent'
import Title from '@components/Title'
import Organization from '@components/Organization'
import Partner from '@components/Partner'
interface IState {
	isPhone?: boolean
	isFinished?: boolean
}

export default class Index extends React.Component<any, IState> {
	map: any
	constructor(props: any) {
		super(props)
		this.state = {
			isPhone: false,
			isFinished: false
		}
	}
	componentWillMount() {
		this.isPhone()
	}

	isPhone() {
		const userAgentInfo = navigator.userAgent
		const Agents = [
			'Android',
			'iPhone',
			'SymbianOS',
			'Windows Phone',
			'iPad',
			'iPod'
		]
		let flag = false
		if (Agents.some(v => userAgentInfo.indexOf(v) > -1)) { flag = true }
		this.setState({
			isPhone: flag,
			isFinished: true
		})
	}
	componentDidMount() {
		window.onresize = () => {
			if (window.document.body.clientWidth > 900) {
				this.setState({
					isPhone: false
				})
			} else {
				this.setState({
					isPhone: true
				})
			}
		}
	}

	render() {
		return (
			<React.Fragment>
				<Banner />
				<Title title={'大会精彩内容'} />
				{this.state.isFinished && (
					<IndexContent isPhone={this.state.isPhone} />
				)}
				<Title title={'主办单位'} />
				<Organization data={Config.corporateSponsor[0]} />
				<Title title={'协办单位'} />
				<Organization data={Config.corporateSponsor[1]} />
				<Title title={'🏅金牌赞助商'} />
				<Organization data={Config.corporateSponsor[2]} />
				<Title title={'🥈银牌赞助商'} />
				<Organization data={Config.corporateSponsor[3]} />
				<Title title={'合作伙伴'} />
				<Partner data={Config.partner} />
				<Title title={'志愿者'} />
				<Partner data={Config.volunteer} />
				<Footer />
			</React.Fragment>
		)
	}
}
