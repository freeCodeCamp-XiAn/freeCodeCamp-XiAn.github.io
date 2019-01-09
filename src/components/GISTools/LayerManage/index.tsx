import * as React from 'react'
import Animate from 'rc-animate'
import velocity from 'velocity-animate'
import LayerTree from './LayerTree'
import './index.less'
import Config from '@config/index'
// import BaseToolItemNoneTip from '@components/GISTools/BaseTool/BaseToolItemNoneTip'
import LayerManageItem from '@components/GISTools/LayerManage/LayerManageItem'

interface INode {
  title?: string // 节点名称
  pkey?: string // 该节点的父节点key值，根节点pkey为-1
  key?: string // 节点key值
  checked?: boolean // 是否为勾选状态
  isBaseMap?: boolean // 是否为地图
  serverType?: string // 图层名称 某种切片还是某种动态， 根据这个节点的标识决定该节点的图层以哪种方式加载，目前知道如何处理的只有Arcgis 的普通切片和普通动态服务，其他的后续补充
  mapServerURL?: string // 图层
  subLayerid?: string // 自图层id 仅对动态服务而言
  subgeotype?: string // 是动态服务的数据节点还是逻辑节点
}
interface IProps {
  /**
   * map对象
   */
  map : any
  /**
   * 样式名称
   */
  className?: string
  /**
   * 图层控制的显示隐藏控制
   */
  visible : boolean
  onClick : () => void
}

interface IState {
  data?: INode[]
  visible?: boolean
  className: string
}


export default class LayerManager extends React.Component<IProps, IState> {
  tree: any
  isMount = false
  map = this.props.map
  constructor(props: IProps) {
    super(props)
    this.state = {
      visible: this.props.visible ? this.props.visible : false,
      data: Config.LayerManager.layerArray,
      className: '_layerManagerImgUp'
    }
  }

  componentDidMount () {
    this.isMount = true
    this.map.on('click', () => {
      if (this.state.visible === true && this.isMount === true) {
        this.setState({
          visible: false,
        })
      }
    })
  }

  componentWillReceiveProps(nextProps: IProps) {
    if (nextProps.visible !== this.props.visible) {
      this.setState({
        visible: nextProps.visible
      })
    }
  }


  componentWillUnmount() {
    this.setState({
      visible: false
    })
  }


  animateLeave = (node, done) => {
    let ok = false
    function complete() {
      if (!ok) {
        ok = true
        done()
      }
    }
    node.style.display = 'block'
    velocity(node, 'slideUp', {
      duration: Config.animateTime,
      complete,
    })
    return {
      stop() {
        velocity(node, 'finish')
        complete() // velocity complete is async
      },
    }
  }
  animateEnter = (node, done) => {
    let ok = false
    function complete() {
      if (!ok) {
        ok = true
        done()
      }
    }
    node.style.display = 'none'
    velocity(node, 'slideDown', {
      duration: Config.animateTime,
      complete,
    })
    return {
      stop() {
        velocity(node, 'finish')
        complete() // velocity complete is async
      },
    }
  }
  handleLayer = () => {
    this.props.onClick()
    this.setState({
      visible: !this.state.visible ,
      className: this.state.className === '_layerManagerImgUp' ? '_layerManagerImgDown' : '_layerManagerImgUp'
    })
  }


  render() {
    const anim = {
      enter: this.animateEnter,
      leave: this.animateLeave,
    }
    return (
      <div className={`_layerManager`}>
        {/* <BaseToolItemNoneTip className={this.state.className} title='图层控制' onClick={this.handleLayer.bind(this)} /> */}
      <LayerManageItem className={this.state.className} icon ='_layerManagerImgIcon' title='图层控制' onClick={this.handleLayer.bind(this)} />
      <Animate  component='' showProp='visible' animation={anim}>
            <LayerTree visible={this.state.visible} className='_layerTree' map={this.props.map} data={this.state.data} />
          </Animate>
      </div>
    )
  }
}