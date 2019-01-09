// author  谷中仁

import * as React from 'react'
import {Drawer, Menu, Icon } from 'antd'
import {NavLink} from 'react-router-dom'
const SubMenu = Menu.SubMenu
const MenuItemGroup = Menu.ItemGroup

 interface IProps {
   /**
    * 是否可见
    */
   visible : boolean
   /**
    * 关闭的处理函数
    */
   closeHandle : () => void
   /**
    * 对象，包含较多子项
    * menuClickMenu被点击的处理方法
    */
   props : any
 }
 interface IState {
   visible : boolean
 } 
export default class MenuDrawer extends React.Component<IProps , IState> {
  isMount = false 
  constructor( props: IProps) {
    super(props)
    this.state = {
      visible: this.props.visible,
    }
  }


  componentDidMount () {
    this.isMount = true 
  }

  componentWillReceiveProps (nextProps : IProps) {
    if (this.isMount ) {
      this.setState( {
        visible : nextProps.visible,
      })
    }
  }
  componentWillUnmount () {
    this.isMount = false
  }

  closeHandle = () => {
    this.setState({
      visible: !this.state.visible
    }, () => {
      this.props.closeHandle()
    })
  }
  menuClick = () => {
    this.props.props.menuClick()
  }


  render() {
    return (
      <Drawer
      title='导航栏'
      placement='left'
      width={350}
      closable={true}
      onClose={this.closeHandle}
      visible={this.state.visible}
    >
      <Menu
        onClick={this.menuClick}
        style={{width: 326}}
        defaultSelectedKeys={['1']}
        defaultOpenKeys={['sub1']}
        mode='inline'
      >
        <Menu.Item key='1'>
          {/* <Icon type='pie-chart' /> */}
          <NavLink to='/'>
            <Icon type='home'/>
            主页
          </NavLink>
        </Menu.Item>
        <Menu.Item key='2'>
          <NavLink to='/demo'>
            <Icon type='pie-chart'/>
            Demo示例
          </NavLink>
        </Menu.Item>
        <Menu.Item key='3'>
          <NavLink to='/routerTest'>
            <Icon type='pie-chart'/>
            嵌套路由
          </NavLink>
        </Menu.Item>
        <Menu.Item key='12'>
            <NavLink  to='/admin'>
              <Icon type='smile-o' />
              后台
            </NavLink>
          </Menu.Item>
        <SubMenu key='sub1' title={<span><Icon type='mail'/><span>Navigation One</span></span>}>
          <MenuItemGroup key='g1' title='Item 1'>
            <Menu.Item key='g11'>Option 1</Menu.Item>
            <Menu.Item key='g12'>Option 2</Menu.Item>
          </MenuItemGroup>
          <MenuItemGroup key='g2' title='Item 2'>
            <Menu.Item key='g23'>Option 3</Menu.Item>
            <Menu.Item key='g24'>Option 4</Menu.Item>
          </MenuItemGroup>
        </SubMenu>
        <SubMenu key='sub2' title={<span><Icon type='appstore'/><span>Navigation Two</span></span>}>
          <Menu.Item key='sub25'>Option 5</Menu.Item>
          <Menu.Item key='sub26'>Option 6</Menu.Item>
          <SubMenu key='sub3' title='Submenu'>
            <Menu.Item key='sub37'>Option 7</Menu.Item>
            <Menu.Item key='sub38'>Option 8</Menu.Item>
          </SubMenu>
        </SubMenu>
        <SubMenu key='sub4' title={<span><Icon type='setting'/><span>Navigation Three</span></span>}>
          <Menu.Item key='sub49'>Option 9</Menu.Item>
          <Menu.Item key='sub410'>Option 10</Menu.Item>
          <Menu.Item key='sub411'>Option 11</Menu.Item>
          <Menu.Item key='sub412'>Option 12</Menu.Item>
        </SubMenu>
      </Menu>
    </Drawer>
    )
  }
}








