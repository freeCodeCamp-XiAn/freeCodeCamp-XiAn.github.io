import * as React from 'react'
import './index.less'
import Config from '@config/index'
import { Header, Footer } from '@layouts/index'

interface IState {
  hasMapLoaded?: boolean
}

export default class Index extends React.Component<any, IState> {
  map: any
  constructor(props: any) {
    super(props)
    // console.log(this.props.match)
  }

  render() {
    return (
      <React.Fragment>
        <Header />
        {Config.projectName}
        <Footer />
      </React.Fragment>
    )
  }
}