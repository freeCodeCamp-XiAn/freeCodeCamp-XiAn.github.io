import * as React from 'react'
import './index.less'
import Config from '@config/index'
import { Footer, Banner } from '@layouts/index'

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
        <Banner />
        {Config.projectName}
        <Footer />
      </React.Fragment>
    )
  }
}