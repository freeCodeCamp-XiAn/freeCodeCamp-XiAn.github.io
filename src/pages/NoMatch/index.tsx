import * as React from 'react'
import { Header, Footer } from '@layouts/index'
export default function NoMatch() {
  return (
    <React.Fragment>
      <Header />
      <h2 style={{ textAlign: 'center' }}>4000000000000000000000.............4...........<br />请选择正确的路由。。。</h2>
      <Footer />
    </React.Fragment>
  )
}