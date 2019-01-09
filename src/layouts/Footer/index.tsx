import * as React from 'react'
import { FaHeart } from 'react-icons/fa'
import './index.less'
import {Layout} from 'antd'

const { Footer } = Layout

export default class BasicFooter extends React.Component {
  render() {
    return (
      <Footer style={{ textAlign: 'center', backgroundColor: 'white' }}>
        {/*<div className='footer-barrier' />*/}
        <div>FCC西安社区官网 ©2018 Created <FaHeart style={{color: 'red'}} /> by Guzhongren</div>
      </Footer>
    )
  }
}
