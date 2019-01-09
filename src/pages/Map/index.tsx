import * as React from 'react'
// import Draggable from 'react-draggable'
import MaptalksCom from '@components/mapComponents/MaptalksCom'
const MapServiceTypea = MaptalksCom.MapServiceType
import './index.less'
import Config from '@config/index'
// import DirectTool from '@components/GISTools/MapDirectTool'
import Full from '@components/GISTools/BaseTool/Full'
// import Zoom from '@components/GISTools/BaseTool/Zoom'
import ZoomIn from '@components/GISTools/BaseTool/ZoomIn'
import ZoomOut from '@components/GISTools/BaseTool/ZoomOut'
// import { ControlFooterDisplay, ControlHeaderDisplay } from '@pages/PageUtils'
import DraggableContainer from '@components/DraggableContainer'
import MeasureTool from '@components/GISTools/BaseTool/MeasureTool'
import LayerManage from '@components/GISTools/LayerManage'

import BaseMapSwitcher from '@components/GISTools/BaseMapSwitcher'
// import UserMenu from '@components/GISTools/UserMenu'
// import MapNavHeader from '@layouts/Header/MapNavHeader'
interface IState {
  hasMapLoaded?: boolean,
  // toolArr?: ITool[], // 工具条显示配置
  layerContainerVisible: boolean // 图层控制窗口显示状态控制
}

interface IProps {
  test?: string
}

export default class Map extends React.Component<IProps, IState> {
  map: any
  constructor(props: IProps) {
    super(props)
    this.state = {
      hasMapLoaded: false,
      layerContainerVisible: false,
    }
    // ControlFooterDisplay(false)
    // ControlHeaderDisplay(false)
  }

  // renderUserMenu = () => {
  //   return (
  //     <UserMenu className='userMenu' />
  //   )
  // }
  /**
   * 底图切换功能
   *
   * @memberof Map
   */
  renderBaseMapSwitcher = () => {
    return (
		<BaseMapSwitcher className='baseMapSwitcher' map={this.map} />
    )
  }

  /**
   * 切换图层控制窗口的显示与关闭
   */
  // LayerContainerToggle = () => {
  //   this.setState({
  //     layerContainerVisible: !this.state.layerContainerVisible
  //   })
  // }
  /**
   * 渲染direct
   *
   * @memberof Map
   */
  // renderDirect = () => {
  //   return (
  //     <DirectTool className='mapDirectTool' map={this.map} />
  //   )
  // }
  /**
   * 渲染全屏
   *
   * @memberof Map
   */
  renderFull = () => {
    return (
      <div className='fullContainer'>
        <Full map={this.map} />
      </div>
    )
  }

  /**
   * 渲染放大按钮
   *
   * @memberof Map
   */
  renderZoomIn = () => {
    return (
      <div className='zoomInContainer'>
        <ZoomIn map={this.map} className=''  orientation='column' />
      </div>
    )
  }


  /**
   * 渲染缩小按钮
   *
   * @memberof Map
   */
  renderZoomOut = () => {
    return (
      <div className='zoomOutContainer'>
        <ZoomOut map={this.map} className=''  orientation='column' />
      </div>
    )
  }
  layerContainerVisibleToggle = () => {
    this.setState({
      layerContainerVisible : !this.state.layerContainerVisible
    })
  }

  /**
   * 渲染gis工具条
   */
  renderGisToolBar = () => {
    const className = this.state.layerContainerVisible === true ? 'layerContainerVisible' : 'layerContainerUnVisible'
    return (
      <DraggableContainer handle='strong'  className={'gisToolBar ' + className} >
      <strong className='strong-inlineBlock'/>
        {/* <div className='gisToolBar'> */}
        {/* {this.renderLayerControl()} */}
        <LayerManage map={this.map!} visible={this.state.layerContainerVisible} onClick = {this.layerContainerVisibleToggle}/>
        <MeasureTool map={this.map}/>
        {/* <LayerManage visible={this.state.layerContainerVisible} className='layerWindow' map={this.map!} /> */}
        {/* </div> */}
        <strong className='strong-inlineBlock'/>
      </DraggableContainer>
    )
  }

  /**
   * 获取创建的地图
   *
   * @param {*} map 返回的地图对象
   * @memberof Map
   */
  getMap = (map) => {
    this.map = map
    this.setState({
      hasMapLoaded: true
    })
  }
  render() {
    const arcGISLayerServiceUrl = Config.baseMapLayers.baseLayers[0].url
    const mapOption = {
      center: [116.581548, 35.404373],
      zoom: 10,
      scaleControl: {
        'maxWidth': 100,
        'metric': true,
        // 'containerClass': 'scaleControl'
      }
    }
    let full, zoomIn, zoomOut, /*direct,*/ gisToolBar, baseMapSwitcher /*,userMenu*/
    if (this.state.hasMapLoaded!) {
      full = this.renderFull()
      zoomIn = this.renderZoomIn()
      zoomOut = this.renderZoomOut()
      // direct = this.renderDirect()
      baseMapSwitcher = this.renderBaseMapSwitcher()
      gisToolBar = this.renderGisToolBar()
      baseMapSwitcher = this.renderBaseMapSwitcher()
      // userMenu = this.renderUserMenu()
    }
    return (
      <div className='MapInstance'>
        <MaptalksCom className='maptalksContainer' mapOptions={mapOption} MapServiceType={MapServiceTypea.TianDiTu} arcGISLayerServiceUrl={arcGISLayerServiceUrl} onCreate={this.getMap} />
        {gisToolBar}
        {full}
        {zoomIn}
        {zoomOut}
        {/* {direct} */}
        {baseMapSwitcher}
        {/* {userMenu} */}
        {/* <MapNavHeader classNames='MapNavHeader' /> */}
      </div>
    )
  }
}
