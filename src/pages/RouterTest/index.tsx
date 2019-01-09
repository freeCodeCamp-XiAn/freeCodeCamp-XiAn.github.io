import React from 'react'
import {
  Redirect,
  Route,
  Link,
  Switch
} from 'react-router-dom'
// import { ControlFooterDisplay, ControlHeaderDisplay } from '@pages/PageUtils'
import {Header, Footer} from '@layouts/index'
const RouterTest = ({ match }) => {
  // ControlFooterDisplay()
  // ControlHeaderDisplay()
  return (
    <div>
      <Header/>
      <h1>App</h1>
      <ul>
        <li><Link to={`${match.url}/App`}>子路由首页</Link></li>
        <li><Link to={match.url + '/info'}>Inbox</Link></li>
        <li><Link to={match.url + '/about'}>About</Link></li>
        {/* 可实现循环嵌套 */}
      </ul>
      <Switch>
        <Route path={`${match.url}/App`} component={FirstPage} />
        <Route path={`${match.url}/info`} component={Inbox} />
        <Route path={`${match.url}/about`} component={About} />
        <Redirect to={`${match.url}/App`}/>
      </Switch>
      <Footer/>
    </div>
  )
}

const FirstPage = () => {
  return(
    <div>路由首页</div>
  )
}

const About = () => (
  <div>
    <h3>About</h3>
  </div>
)
const Inbox = ({ match }) => (
  <div>
    <h2>Topics</h2>
    <ul>
      <li><Link to={match.url + '/messages/1234'}>gotoMessage 1234</Link></li>
    </ul>
    <Route path={`${match.url}/messages/:id`} component={Message} />

  </div>
)

const Message = ({ match }) => (
  <div>
    <h3>new messages</h3>
    <h3>{match.params.id}</h3>
  </div>
)


export default RouterTest