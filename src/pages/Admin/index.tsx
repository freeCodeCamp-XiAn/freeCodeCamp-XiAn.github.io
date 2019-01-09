import * as React from 'react'
import './index.less'
import { Header, Footer } from '@layouts/index'
import { Icon, Layout, Menu } from 'antd'
const { Sider, Content } = Layout
const SubMenu = Menu.SubMenu
import {
  NavLink,
  Redirect,
  Route,
  Link,
  Switch
} from 'react-router-dom'

// import { Header, Footer } from '@layouts/index'
const Admin = ({ match }) => {
  return (
    <Layout>
      <Sider className={'layout-sider'} theme='dark' width='256px'>
        <Menu theme='dark' defaultSelectedKeys={[match.url]} mode='inline'>
          <Menu.Item key='11'>
            <NavLink to='/admin'>
              <Icon type='smile-o' />
              Logo
            </NavLink>
          </Menu.Item>

          <SubMenu
            key='sub1'
            title={<span><Icon type='user' /><span>User</span></span>}
          >
            <Menu.Item key='3'><Link to={`${match.url}/user/3`}>Tom</Link ></Menu.Item>
            <Menu.Item key='4'><Link to={`${match.url}/user/4`}>Bill</Link ></Menu.Item>
            <Menu.Item key='5'><Link to={`${match.url}/user/5`}>Alex</Link ></Menu.Item>
          </SubMenu>
          <SubMenu
            key='sub2'
            title={<span><Icon type='team' /><span>Team</span></span>}
          >
            <Menu.Item key='team1'><Link to={`${match.url}/team/1`}>Team 1</Link></Menu.Item>
            <Menu.Item key='team2'><Link to={`${match.url}/team/2`}>Team 2</Link></Menu.Item>
          </SubMenu>
          <Menu.Item key='9'>
            <Icon type='file' />
            <span>File</span>
          </Menu.Item>
        </Menu>
      </Sider>
      <Layout>
        <Header />
        <Content>
          <Switch>
            <Route path={`${match.url}/:type`} component={AdminContent} />
            <Route exact path={`${match.url}`} component={Index} />
            <Redirect to={`${match.url}`} />
          </Switch>
        </Content>
        <Footer />
      </Layout>

    </Layout>
  )
}
const Index = () => (
  <div>Hello Admin</div>
)
const AdminContent = ({ match }) => {
  let willLoadingComponent : any
  switch (match.params.type) {
    case 'user':
      willLoadingComponent = Detail
      break
    case 'team':
      willLoadingComponent = Team
      break
    default:
      willLoadingComponent = Detail
      break
  }
  return (
    // <div>{`Hello User iD: ${match.params.type}`}</div>
    <Switch>
      <Route path={`${match.url}/:detail`} component={willLoadingComponent} />
      <Route exact path={`${match.url}`} component={Index} />
      <Redirect to={`${match.url}`} />
    </Switch>
  )
}
/**
 * 子路由中套子路由
 * @param param0
 */
const Team = ({match}) => {
  return (
    <React.Fragment>
    <div>{`team iD: ${match.params.detail}`}</div>
    <h3><Link to={`${match.url}/guzhongren`}>Show Leader</Link></h3>
    <Switch>
      <Route path={`${match.url}/:name`} component={ShowLeader} />
      {/* <Redirect to={`${match.url}`} /> */}
    </Switch>
    </React.Fragment>
  )
}
const ShowLeader = ({ match }) => (
  <div>Leader Name: {match.params.name}</div>
)
const Detail = ({ match }) => {
  console.log(match)
  return (
    <div>{`Hello User iD: ${match.params.detail}`}</div>
  )
}

export default Admin
