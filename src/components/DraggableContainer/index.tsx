
// @author 谷中仁

import * as React from 'react'
import Draggable from 'react-draggable'
import './index.less'

interface IProps {
	orientation?: 'row' | 'row-reverse' | 'column' | 'column-reverse', // 容器内子组件的布局方向， 默认水平
	className?: string,
	handle?: string  // string类型的标签名，鼠标只有作用在该标签上可以拖动
}


interface IState {
	orientation?: 'row' | 'row-reverse' | 'column' | 'column-reverse', // 工具条的方向， 默认水平
	className?: string,
}

/**
 * 可拖拽的组件容器
 *
 * @class DraggableContainer
 * @extends {React.Component<IProps, IState>}
 */
export default class DraggableContainer extends React.Component<IProps, IState> {
	constructor(props: IProps) {
		super(props)
		this.state = {
			orientation: this.props.orientation ? this.props.orientation : 'row',
			className: this.props.className ? this.props.className : ''
		}
		// console.log(this.state.className)
	}

	componentWillReceiveProps(nextProps: IProps) {
		if (nextProps.className !== this.props.className) {
			if (nextProps.className!.includes('layerContainerVisible')) {
				this.setState({
					className: nextProps.className
				})
			} else {
				setTimeout(() => {
					this.setState({
						className: nextProps.className
					})
				}, 250)
			}

		}
	}

	render() {
		return (
			<Draggable axis='both' handle={this.props.handle} cancel='.not-draggable' >
				<div style={{ flexDirection: this.state.orientation }} className={`${'_gisTools ' + this.state.className}`} >
					{this.props.children}
				</div>
			</Draggable>
		)
	}
}
