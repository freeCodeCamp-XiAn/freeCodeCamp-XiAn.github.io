import * as React from 'react'
import * as maptalks from 'maptalks'

import { message } from 'antd'

import './index.less'
import BaseToolItemNoneTip from '@components/GISTools/BaseTool/BaseToolItemNoneTip'
import distance from './img/distance.png'
import area from './img/area.png' // 面积测量图标
// import clear from './img/clear.png' // 清除图标

interface ITool {
  className: string,
  title: string,
  handler: () => void
}
interface IProps {
  /**
   * 样式
   */
  className?: string, 
  /**
   * map实例
   */
  map: any, 
}

interface IState {
  toolArr?: ITool[], // 工具条工具集合
}

export default class MeasureTool extends React.Component<IProps, IState> {
  map = this.props.map
  distanceTool : any // 距离测量  
  areaTool : any // 面积测量
  defaultCenter : any // 记录地图显示的默认中心点
  defaultZoom : any // 记录地图显示的默认zoom值
  constructor(props: IProps) {
    super(props)
    this.state = {
      toolArr:  [{
        className: '_distanceBackimg',
        title: '测距',
        handler: this.measureDistance
      } ,
      {
        className: '_areaBackimg',
        title: '测面',
        handler: this.measureArea
      },
       {
        className: '_clearBackimg',
        title: '清除',
        handler: this.clear
      }]
    }
  }
  componentDidMount() {
    this.defaultCenter = this.map.getCenter() // 获取地图默认中心点                    
    this.defaultZoom = this.map.getZoom() // 获取地图默认zoom值
    this.distanceTool = this.addDistanceToolToMap() 
    this.areaTool = this.addAreaToolToMap() 
    
    // registerEvent
    this.distanceTool.on('drawend', () => {
      this.distanceTool.disable()
      this.map.resetCursor()
    })
    
    this.areaTool.on('drawend', () => {
      this.areaTool.disable()
      this.map.resetCursor()
    })
  }
  /**
   * 实例化Maptalks.DistanceTool，并将其添加到map上
   *
   * @returns maptalk.DistanceTools
   * @memberof GISTools
   */
  addDistanceToolToMap() {
    return new maptalks.DistanceTool({
      'symbol': {
        'lineColor' : '#34495e',
        'lineWidth' : 2
      },
      'vertexSymbol' : {
        'markerType'        : 'ellipse',
        'markerFill'        : '#1bbc9b',
        'markerLineColor'   : '#000',
        'markerLineWidth'   : 3,
        'markerWidth'       : 10,
        'markerHeight'      : 10
      },

      'labelOptions' : {
        'textSymbol': {
          'textFaceName': 'monospace',
          'textFill' : '#fff',
          'textLineSpacing': 1,
          'textHorizontalAlignment': 'right',
          'textDx': 15,
          'markerLineColor': '#b4b3b3',
          'markerFill' : '#000'
        },
        'boxStyle' : {
          'padding' : [6, 2],
          'symbol' : {
            'markerType' : 'square',
            'markerFill' : '#000',
            'markerFillOpacity' : 0.9,
            'markerLineColor' : '#b4b3b3'
          }
        }
      },
      'clearButtonSymbol' : [{
        'markerType': 'square',
        'markerFill': '#000',
        'markerLineColor': '#b4b3b3',
        'markerLineWidth': 2,
        'markerWidth': 15,
        'markerHeight': 15,
        'markerDx': 20
      }, {
        'markerType': 'x',
        'markerWidth': 10,
        'markerHeight': 10,
        'markerLineColor' : '#fff',
        'markerDx': 20
      }],
      'language' : 'zh-CN'
    }).addTo(this.map).disable()
    this.map.resetCursor()
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
   * 距离测量
   */
  measureDistance = () => {
    if (this.areaTool.isEnabled()) {
      this.areaTool.endDraw()
      this.areaTool.clear() 
      this.areaTool.disable()
    }
    this.distanceTool.enable()
    this.map.setCursor('url(' + distance + ') 4 12, auto')
  }
  /**
   * 面积测量
   */
  measureArea = () => {
    if (this.distanceTool.isEnabled()) {
      this.distanceTool.endDraw()
      this.distanceTool.clear() 
      this.distanceTool.disable()
    }
    this.areaTool.enable()
    this.map.setCursor('url(' + area + ') 4 12, auto')
  }
  addAreaToolToMap = () => {
    return new maptalks.AreaTool({
      'symbol': {
        'lineColor' : '#1bbc9b',
        'lineWidth' : 2,
        'polygonFill' : '#34495e',
        'polygonOpacity' : 0.3
      },
      'vertexSymbol' : {
        'markerType'        : 'ellipse',
        'markerFill'        : '#34495e',
        'markerLineColor'   : '#1bbc9b',
        'markerLineWidth'   : 3,
        'markerWidth'       : 10,
        'markerHeight'      : 10
      },
      'labelOptions' : {
        'textSymbol': {
          'textFaceName': 'monospace',
          'textFill' : '#fff',
          'textLineSpacing': 1,
          'textHorizontalAlignment': 'right',
          'textDx': 15
        },
        'boxStyle' : {
          'padding' : [6, 2],
          'symbol' : {
            'markerType' : 'square',
            'markerFill' : '#000',
            'markerFillOpacity' : 0.9,
            'markerLineColor' : '#b4b3b3'
          }
        }
      },
      'clearButtonSymbol' : [{
        'markerType': 'square',
        'markerFill': '#000',
        'markerLineColor': '#b4b3b3',
        'markerLineWidth': 2,
        'markerWidth': 15,
        'markerHeight': 15,
        'markerDx': 22
      }, {
        'markerType': 'x',
        'markerWidth': 10,
        'markerHeight': 10,
        'markerLineColor' : '#fff',
        'markerDx': 22
      }],
      'language' : 'zh-CN'
    }).addTo(this.map).disable()
    this.map.resetCursor()
  }
  
  /**
   * 全图
   * 回到初始范围
   */
  fullExtentHandle = () => {                      
    this.map.setCenterAndZoom(this.defaultCenter, this.defaultZoom)                  
  }
  /**
   * 清除所有地图常用小工具留在地图上的标记
   */
  clear = () => {
    this.distanceTool.endDraw()
    this.areaTool.endDraw()
    this.distanceTool.clear() // 清除距离测量结果
    this.areaTool.clear() // 清除面积测量结果
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
          <BaseToolItemNoneTip title={item.title} key={key}  className={item.className} onClick={item.handler.bind(this)} />
        )
      })
    )
  }
  render() {
    const toolbar = this.renderToolBar()
    return (
          toolbar
    )
  }
}