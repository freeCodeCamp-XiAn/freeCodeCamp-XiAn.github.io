import * as React from 'react'

import { message } from 'antd'

import './index.less'
import BaseToolItem from '../BaseToolItem'
import full from './img/full.png'

interface IProps  {
  
  map: any, 
  /**
   * 样式
   */
  className ?: string,
  /**
   * 提示气泡显示内容
   */
  tips ?: string,
  /**
   * 提示气泡位置控制
   */
  placement ?: string,
  /**
   * 点击事件
   */
  handler?: () => void,
}

interface IState {
  // imgPath?: string,
  className: string,
  tips?: string,
  placement ?: string
}

export default class Full extends React.Component<IProps, IState> {
  map = this.props.map
  defaultCenter: any // 记录地图显示的默认中心点
  defaultZoom: any // 记录地图显示的默认zoom值
  constructor(props: IProps) {
    super(props)
    this.state = {
        className: this.props.className ? this.props.className : full,
        tips: this.props.tips ? this.props.tips : '全图',
        placement: this.props.placement ? this.props.placement : 'left'
    }
  }
  componentDidMount() {
    this.defaultCenter = this.map.getCenter() // 获取地图默认中心点                    
    this.defaultZoom = this.map.getZoom() // 获取地图默认zoom值
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
   * 全图
   * 回到初始范围
   */
  fullExtentHandle = () => {
    this.map.setCenterAndZoom(this.defaultCenter, this.defaultZoom)
    if (this.props.handler) {
      this.props.handler()
    }
  }

  render() {
    return (
      <div  className='_gisBaseTools'>
        <BaseToolItem className='fullBackgroundInit' tips={this.state.tips!}   onClick={this.fullExtentHandle.bind(this)} placement={this.state.placement} /> 
      </div>

    )
  }
}