import * as React from 'react'

import { message } from 'antd'

import './index.less'
import BaseToolItem from '../BaseToolItem'
// import zoomOut from './img/zoomOut.png'
// import zoomIn from './img/zoomIn.png'

interface ITool {
  className: string,
  tips: string,
  placement: string,
  handler: () => void
}
interface IProps {
  /**
   * 样式
   */
  className?: string, 
  /**
   * map对象
   */
  map: any, // 地图实例
  /**
   * 工具条的方向， 默认水平
   */
  orientation?: 'row' | 'row-reverse' | 'column' | 'column-reverse',
}

interface IState {
  orientation?: 'row' | 'row-reverse' | 'column' | 'column-reverse', // 工具条的方向， 默认水平
  toolArr?: ITool[], // 工具条工具集合
}

export default class Zoom extends React.Component<IProps, IState> {
  map = this.props.map
  maxZoom: any // 记录最大缩放级别
  constructor(props: IProps) {
    super(props)
    this.state = {
      orientation: this.props.orientation ? this.props.orientation : 'row',
      toolArr: [
        {
          className: 'zoomInInit',
          tips: '放大',
          handler: this.zoomInHandle,
          placement: 'left'
        }
      ],
    }
  }
  componentDidMount() {
    this.maxZoom = this.map.getMaxZoom() // 获取最大zoom值
  }

  /**
   * 全局警告
   * 
   * warningText 警告提示语
   * time 警告自动关闭时间，单位s,默认值为3
   */
  warning = (warningText, time) => {
    message.warning(warningText, time)
  }

  /**
   * 放大
   *
   * @memberof GISTools
   */
  zoomInHandle = () => {
    const currentZoom = this.map.getZoom()
    if (currentZoom >= this.maxZoom) {
      // if (currentZoom >= 17) { // 通过getMaxZoom()方法获取到的maxZoom值为19，但是实测发现17级之后就没有数据了
      this.warning('目前已为最大级别！', 1.5)
    } else {
      this.map.zoomIn()
    }
  }
  /**
   * 渲染工具条
   *
   * @memberof GISTools
   */
  renderToolBar = () => {
    return (
      this.state.toolArr!.map((item, key) => {
        return (
          <BaseToolItem className={item.className} key={key} tips={item.tips} onClick={item.handler.bind(this)} placement={item.placement} />
        )
      })

    )
  }
  render() {
    const toolbar = this.renderToolBar()
    return (
      <div style={{ flexDirection: this.state.orientation }} className={`${'_gisBaseTools ' + (this.props.className ? this.props.className : '')}`}>
        {toolbar}
      </div>
    )
  }
}