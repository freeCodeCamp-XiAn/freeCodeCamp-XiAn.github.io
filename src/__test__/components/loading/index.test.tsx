import * as React from 'react'
import { mount } from 'enzyme'

import MyLoadingComponent from '@components/Loading'
describe('Loading　Test', () => {
  it('should exit', () => {
    expect(<MyLoadingComponent />).toBeDefined()
  })
  describe('Full DOM rendering', () => {
    it('should render', () => {
      const wrapper = mount(<MyLoadingComponent />)
      expect(wrapper.find('.ant-spin-text').text()).toEqual('别急,努力加载ing')
    })
  })
  
})