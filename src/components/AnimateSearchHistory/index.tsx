import * as React from 'react'
import Animate from 'rc-animate'
import velocity from 'velocity-animate'
// import './index.less'
import Config from '@config/index'
import SearchHistory from './SearchHistory'

interface IProps {
  /**
   *  组件是否显示
   */
  visible?: boolean
  /**
   * 历史记录列被点击触发的事件
   */
  onListClick: (e) => void
  /**
   * 清除历史记录事件
   */
  onClearClick: () => void
  /**
   * 样式名称
   */
  className ?: string
  /**
   * 历史记录数据
   */
  data : any []

}
interface IState {
  visible?: boolean // 组件是否显示
  data : any[]
}


export default class AnimateSearchHistory extends React.Component<IProps, IState> {
  isMount = false
  constructor(props: IProps) {
    super(props)
    this.state = {
      visible: this.props.visible,
      data : this.props.data
    }
  }

  componentWillUnmount() {
    this.setState({
      visible: false
    })
  }

  componentDidMount () {
    this.isMount = true
  }

  componentWillReceiveProps(nextProps: IProps) {
    if (this.isMount) {
      this.setState({
        visible: nextProps.visible,
        data: nextProps.data
      })
    }
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
  onListClick = (e) => {
    this.props.onListClick(e)
  }
  onClearClick = () => {
    this.props.onClearClick()
  }


  render() {
    const anim = {
      enter: this.animateEnter,
      leave: this.animateLeave,
    }
    return (
      <Animate className='layerTree' component='' showProp='visible' animation={anim}>
            {/* <LayerTree visible={this.state.visible} className='' map={this.props.map} data={this.state.data} /> */}

            <SearchHistory className={this.props.className} visible = {this.state.visible} onListClick= {this.onListClick} onClearClick = {this.onClearClick} data ={this.state.data}/>
      </Animate>
    )
  }
}