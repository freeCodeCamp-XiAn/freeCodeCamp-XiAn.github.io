import * as React from 'react'
import './index.less'

interface IProps {
	/**
	 * 样式
	 */
	className?: string,
	/**
	 * 内连样式
	 */
	style?: React.CSSProperties
}
interface IState {
	/**
	 * 样式
	 */
	className?: string,
	/**
	 * 内连样式
	 */
	style?: React.CSSProperties
}

/**
 * 一个有最高高度为(100% - @top - 5 *@margin)高的容器组件
 */
export default class ComplexContainer extends React.Component<IProps, IState> {
	constructor(props: IProps) {
		super(props)
		this.state = {
			className: this.props.className ? this.props.className : '',
			style: this.props.style ? this.props.style : {}
		}
	}
	componentWillReceiveProps(nextProps: IProps) {
		if (nextProps.className !== this.props.className) {
			this.setState({
				className: nextProps.className
			})
		}
		if (nextProps.style !== this.props.style) {
			this.setState({
				style: nextProps.style
			})
		}
	}
	render() {
		return (
			<div className={`_complexContainer ${this.state.className ? this.state.className : ''}`} style={this.state.style}>
				{this.props.children}
			</div>
		)
	}
}
