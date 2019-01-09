import * as React from 'react'
import { mount } from 'enzyme'
import { Map, TileLayer } from 'maptalks'
import DirectTool from '@components/GISTools/MapDirectTool'


const container = document.createElement('div')
container.style.width = '10px'
container.style.height = '10px'
const tempMap = new Map(container, {
  center: [-0.113049, 51.498568],
  zoom: 14,
  baseLayer: new TileLayer('base', {
    urlTemplate: 'http://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}.png',
    subdomains: ['a', 'b', 'c', 'd'],
    attribution: '&copy; <a href="http://osm.org">OpenStreetMap</a> contributors, &copy; <a href="https://carto.com/">CARTO</a>'
  })
})
describe('GISTools 组件测试', () => {

  describe('DirectTool测试', () => {

    it('should exit', () => {
      console.log(tempMap)
      expect(mount(<DirectTool />)).toBeDefined()
    })
  })

})