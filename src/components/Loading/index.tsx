import * as React from 'react'
import { Spin } from 'antd'
import './index.less'
import Config from '@config/index'
export default class MyLoadingComponent extends React.Component {
  render() {
    // const height = window.document.body.clientHeight - (48 + 69)
    return(
      <Spin tip={Config.system.loadingText}>
        <div style={{ textAlign: 'center'}} />
      </Spin>
    )
  }
}