import React from 'react'

import './index.less'

// interface IHistoryData {
//   id: string,
//   title: string
// }

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
  className?: string
  data: any[]

}
interface IState {
  visible?: boolean // 组件是否显示
  historyData: any[]
}

export default class SearchHistory extends React.Component<IProps, IState> {
  isMount?: boolean
  constructor(props: IProps) {
    super(props)
    this.state = {
      visible: this.props.visible,
      historyData: this.props.data
    }
  }
  componentWillMount() {
    this.isMount = true
  }
  componentWillUnmount() {
    this.isMount = false
  }

  componentWillReceiveProps(nextProps: IProps) {
    if (this.isMount) {
      this.setState({
        visible: nextProps.visible,
      })
    }
    if (nextProps.data !== this.props.data) {
      this.setState({
        historyData: nextProps.data
      })
    }
  }

  onListClick = (e) => {
    this.props.onListClick(e)
  }
  onClearClick = () => {
    this.props.onClearClick()
  }
  renderHistoryList = (historyList) => {
    return historyList.map((item) => {
      return (
          <div className='historyList_list' key = {item.id} onClick = {this.onListClick.bind(this, item.title)}>
            {item.title}
          </div>
      )
    })
  }

  render() {
    const currentHistoryList = this.state.historyData
    const containerClassName = this.state.visible === true ? 'containerDown_searchHistory' : 'containerUp_searchHistory'
    const historyList = this.renderHistoryList(currentHistoryList)
    return (
      <div className={`container_searchHistory ` + this.props.className + ' ' + containerClassName}>
        {historyList}
        <div className='clear_searchHistory' onClick={this.onClearClick} >
          {currentHistoryList && currentHistoryList.length > 0 ? '清空搜索记录' : '暂无搜索记录'}
        </div>
      </div>
    )
  }
}

