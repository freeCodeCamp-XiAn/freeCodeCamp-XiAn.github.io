import * as React from 'react'
import { TileLayer } from 'maptalks'
import './index.less'
import Config from '@config/index'
import classnames from 'classnames'

interface IProps {
	/**
	 * map对象
	 */
	map: any,
	/**
	 * 组件样式名称
	 */
	className?: string
}

interface IState {
	hasSelectedId?: string, // 选中的底图的Id
	className: string
}

export default class BaseMapSwitcher extends React.Component<IProps, IState> {
	constructor(props: IProps) {
		super(props)
		this.state = {
			hasSelectedId: 'image',
			className: this.props.className ? this.props.className : ''
		}
	}

	handleBaseMapSwitch = (baseLayerInfo) => {
		console.log(baseLayerInfo)
		this.setState({
			hasSelectedId: baseLayerInfo.id
		}, () => {
			// ArcGIS
			// const arcUrl = baseLayerInfo.url
			// SpatialReference.loadArcgis(arcUrl + '?f=pjson', (err) => {
			//   if (err) {
			//     throw new Error(err)
			//   }
			//   const newBaseLayer = new TileLayer('base', {
			//     spatialReference: {
			//       projection: 'EPSG:3857'
			//     },
			//     'urlTemplate': arcUrl + '/tile/{z}/{y}/{x}',
			//     'attribution': '&copy; <a target="_blank" href="' + arcUrl + '"">ArcGIS</a>'
			//   })
			//   this.props.map.setBaseLayer(newBaseLayer)
			// })
			const newBaseLayer = new TileLayer('base', {
				tileSystem: [1, -1, -180, 90],
				urlTemplate: baseLayerInfo.url,
				subdomains: ['1', '2', '3', '4', '5'],
				attribution: '&copy; <a target="_blank" href="http://www.tianditu.cn">Tianditu</a>'
			})
			this.props.map.setBaseLayer(newBaseLayer)
		})

	}

	render() {
		return (
			<div className={`_baseMapSwitcher ${this.state.className}`}>
				<div className={'baseMapList'}>
					{Config.baseMapLayers.baseLayers.map((item, key) => {
						let baseLayer
						switch (item.id) {
							case 'image':
								baseLayer = <div key={key} onClick={this.handleBaseMapSwitch.bind(this, item)} className={classnames('baseMapItem', { 'hasSelectedItem': item.id === this.state.hasSelectedId })} style={{ 'background': `url(${require('./img/image.jpg')}) no-repeat 0 0`, zIndex: key }}>
									<div className='mask'>
										<span className='label' >{item.title}</span>
									</div>
								</div>
								break
							case 'map':
								baseLayer = <div key={key} onClick={this.handleBaseMapSwitch.bind(this, item)} className={classnames('baseMapItem', { 'hasSelectedItem': item.id === this.state.hasSelectedId })} style={{ 'background': `url(${require('./img/map.jpg')}) no-repeat 0 0`, zIndex: key }}>
									<div className='mask'>
										<span className='label' >{item.title}</span>
									</div>
								</div>
								break
							default:
								baseLayer = <div key={key} onClick={this.handleBaseMapSwitch.bind(this, item)} className={classnames('baseMapItem', { 'hasSelectedItem': item.id === this.state.hasSelectedId })} style={{ 'background': `url(${require('./img/terrain.jpg')}) no-repeat 0 0`, zIndex: key }}>
									<div className='mask'>
										<span className='label' >{item.title}</span>
									</div>                </div>
								break
						}
						return baseLayer
					})}
				</div>
			</div>
		)
	}
}
