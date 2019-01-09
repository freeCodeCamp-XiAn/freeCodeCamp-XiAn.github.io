import * as React from 'react'
import { Button } from 'antd'
// import PubSub from 'pubsub-js'
interface IState {
  receivedMessage?: string, // 收到的消息
  sendMessage?: string // 要发送的消息
}
// export const Topic = 'testTopic' // 消息传递
export interface IProps {
  message?: string, // 传递进来的消息
  onSay?: (content?: string) => void
}
export default class Summit extends React.Component<IProps, IState> {
  constructor(props: IProps) {
    super(props)
    this.state = {
      receivedMessage: this.props.message ? this.props.message : '',
      sendMessage: ''
    }
    this.getValue = this.getValue.bind(this)
    this.sendMessage = this.sendMessage.bind(this)
  }
  // c#中方法默认私有，ts中方法默认公共
  getValue(evt: any) {
    if (evt.target.value) {
      this.setState({
        sendMessage: evt.target.value
      }, () => {
        console.log(this.state.sendMessage)
      })
    }
  }
  private sendMessage() {
    if (this.props.onSay) {
      this.props.onSay(this.state.sendMessage)
      console.log('PubSub')
      // const option = {
      //   title: {
      //     text: 'ECharts 入门示例'
      //   },
      //   tooltip: {},
      //   legend: {
      //     data: ['销量']
      //   },
      //   xAxis: {
      //     data: ['衬衫-PubSub', '羊毛衫-PubSub', '雪纺衫-PubSub', '裤子-PubSub', '高跟鞋-PubSub', '袜子-', '香烟-PubSub']
      //   },
      //   yAxis: {},
      //   series: [{
      //     name: '销量',
      //     type: 'bar',
      //     data: [5, 20, 36, 10, 10, 20, 40]
      //   }]
      // }
      // PubSub.publish(Topic, option)
    }
  }
  componentWillReceiveProps(nextProps: IProps) {
    if (nextProps !== this.props.message) {
      this.setState({
        receivedMessage: nextProps.message
      })
    }
  }
  componentWillUnmount() {
    // PubSub.unsubscribe(Topic)
  }
  render() {
    const receiveMessage = this.state.receivedMessage
    return (
      <div>
        <div>收到消息：{receiveMessage}</div>
        <input type='text' onChange={this.getValue} />
        <Button onClick={this.sendMessage}>发送</Button>
      </div>
    )
  }



}
