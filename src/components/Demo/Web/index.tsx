import * as React from 'react'
import {Button, Icon, message, Upload} from 'antd'

// enum Type { // 枚举类型
//   SEND,
//   RECEIVE
// }
// interface IMessage {
//   type: Type, // 消息类型
//   message: string // 消息内容
// }
interface IState {
  receivedMessage?: string, // 收到的消息
  sendMessage?: string // 要发送的消息
}

interface IProps {
  message?: string, // 传递的消息
  onSendMessage?: (message: string) => void
}

const myProps = {
  name: 'file',
  action: '/api/test/',
  multiple: true,
  onChange(info) {
    if (info.file.status !== 'uploading') {
      console.log(info.file, info.fileList)
    }
    if (info.file.status === 'done') {
      message.success(`${info.file.name} file uploaded successfully`)
    } else if (info.file.status === 'error') {
      message.error(`${info.file.name} file upload failed.`)
    }
  },
}

export default class Web extends React.Component<IProps, IState> {
  constructor(props: IProps) {
    super(props)
    this.state = {
      receivedMessage: this.props.message ? this.props.message : '',
      sendMessage: '',
    }
    this.getValue = this.getValue.bind(this)
    this.sendMessage = this.sendMessage.bind(this)
  }

  getValue(evt: any) {
    if (evt.target.value) {
      this.setState({
        sendMessage: evt.target.value,
      }, () => {
        console.log(this.state.sendMessage)
      })
    }
  }

  private sendMessage() {
    if (this.state.sendMessage) {
      if (this.props.onSendMessage) {
        this.props.onSendMessage(this.state.sendMessage)
      }
    }
  }

  componentWillReceiveProps(nextProps: IProps) {
    if (nextProps.message !== this.props.message) {
      this.setState({
        receivedMessage: nextProps.message,
      }, () => {
        console.log('Web组件接受到信息：', nextProps.message)
      })
    }
  }

  render() {
    const receivedMessage = this.state.receivedMessage
    return (
      <div>
        <div>收到消息: {receivedMessage}</div>
        <div>
          <input type='text' onChange={this.getValue}/>
          <Button onClick={this.sendMessage}>发送</Button>
        </div>

        <div>
          <label>测试文件上传</label>
          <Upload {...myProps}>
            <Button>
              <Icon type='upload'/> Click to Upload
            </Button>
          </Upload>
        </div>
        
        <div>
          <label>测试多文件上传</label>
        </div>

      </div>
    )
  }
}