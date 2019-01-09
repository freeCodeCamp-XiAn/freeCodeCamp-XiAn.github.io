import * as React from 'react'
import './index.less'
import { Button } from 'antd'
interface IUserMenuProps {
  /**
   * 样式
   * @default userMenuContainer
   */
  className?: string, // 样式
  /** 
   * 点击事件
   */
  onClick?: () => void
}

interface IUserMenuState {
  hasLogin?: boolean, // 是否已经登录
  userInfo?: any, // 用户信息
}
/**
 * GIS首页中关于用户信息的组件
 */
export default class UserMenu extends React.Component<IUserMenuProps, IUserMenuState> {
  constructor(props: IUserMenuProps) {
    super(props)
    this.state = {
      hasLogin: true,
      userInfo: {
        name: '张三',
        avatar: './img/loged.jpg'
      }
    }
  }

  renderUserStatus = () => {
    if (this.state.hasLogin) {
      return '欢迎您'
    } else {
      return(
        <Button size='small'>登录</Button>
      )
    }
  }

  render() {
    const userStatus = this.renderUserStatus()
    return (
      <div className={`userMenuContainer ${this.props.className ? this.props.className : ''}`}　onClick = {this.props.onClick!}>
        <div className='userLogo'>
          <img src={this.state.hasLogin ? require<string>('./img/defavatar.png') /*this.state.userInfo.avatar>*/ : require<string>('./img/defavatar.png')} alt='登录' title={this.state.hasLogin ? this.state.userInfo.name : '登录'} />
        </div>
        <div　className='userStatus'>
          {userStatus}
        </div>
      </div>
    )
  }
}