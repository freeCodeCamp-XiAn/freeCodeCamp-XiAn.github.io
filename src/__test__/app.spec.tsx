import * as React from 'react'
import { shallow } from 'enzyme'

import {SampleWidget} from './HelloTest'
import UserMenu from '@components/GISTools/UserMenu'
import NavBar from '@layouts/Header'
// import Layouts from '@layouts/index'
describe('App', () => {
    it('should exist', () => {
        expect(<SampleWidget name='test'/> ).toBeDefined()
    })

    it('should render', () => {
        const wrapper = shallow(<SampleWidget name='test'/>)
        expect(wrapper.find('h1').contains('Hello test'))
    })
})

describe('Platform', () => {
  it('user menu', () => {
    expect(<UserMenu />).toBeDefined()
  })
  it('NavBar', () => {
    expect(<NavBar /> ).toBeDefined()
  })
})
