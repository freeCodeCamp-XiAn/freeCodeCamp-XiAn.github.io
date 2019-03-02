import * as React from 'react'
import './index.less'
import Config from '@config/index'
import { Footer, Banner } from '@layouts/index'
import IndexContent from '@components/IndexContent'
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
		const Agents = ['Android', 'iPhone',
			'SymbianOS', 'Windows Phone',
			'iPad', 'iPod']
		let flag = false
		for (const agent of Agents) {
			if (userAgentInfo.indexOf(agent) > 0) {
				flag = true
				break
			}
		}
		console.log(flag)
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
				{this.state.isFinished && <IndexContent isPhone={this.state.isPhone} />}
				{Config.projectName}
				<Footer />
			</React.Fragment>
		)
	}
}
