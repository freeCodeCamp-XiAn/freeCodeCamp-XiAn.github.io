

// import * as React from 'react'
// import { storiesOf } from '@storybook/react'
// import { withInfo } from '@storybook/addon-info'
// import BaseToolItemNoneTip from './BaseToolItemNoneTip'
// import BaseToolItem from './BaseToolItem'
// import distance from './MeasureTool/img/distance.png'
// import Full from './Full'
// import Zoom from './Zoom'
// import MeasureTool from './MeasureTool'

// import { Map, TileLayer } from 'maptalks'
// const tempMap = new Map(document.createElement('div'), {
//   center: [-0.113049, 51.498568],
//   zoom: 14,
//   baseLayer: new TileLayer('base', {
//     urlTemplate: 'http://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}.png',
//     subdomains: ['a', 'b', 'c', 'd'],
//     attribution: '&copy; <a href="http://osm.org">OpenStreetMap</a> contributors, &copy; <a href="https://carto.com/">CARTO</a>'
//   })
// })


// storiesOf('BaseTool', module)
//   .add('BaseToolItemNoneTip', withInfo('基础组件子项')(() => {
//     return <BaseToolItemNoneTip title='测距'  imgPath={distance} onClick ={() => {alert('被点击了！！')}}/>
//   }))
//   .add('BaseToolItem', withInfo('气泡提示型基础组件子项')(() => {
//     return <BaseToolItem  imgPath ={distance} tips='测距' placement='top' onClick={() => {alert('我被点击了')}} />
//   }))
//   .add('Full', withInfo('全图：恢复初始地图范围')(() => {
//     return <Full map ={tempMap}/>
//   }))
//   .add('Zoom', withInfo('地图级别缩放')(() => {
//     return <Zoom map ={tempMap}/>
//   })) 
//   .add('MeasureTool', withInfo('测量组件')(() => {
//     return <MeasureTool className='' map = {tempMap}/>
//   }))
