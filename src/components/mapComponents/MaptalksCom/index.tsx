import * as React from 'react'
import { TileLayer, SpatialReference, Map } from 'maptalks'
import 'maptalks/dist/maptalks.css'
import config from './config'
import './index.less'
/**
 * 接入的服务类型
 */
export enum MapServiceType {
  TianDiTu,
  ArcGIS,
  Default
}
interface IState {
  mapOptions?: object // maptalks的初始化配置信息
}
interface IProps {
  // maptalks配置信息
  mapOptions?: object, // maptalks的初始化配置信息
  className?: string, // 地图样式
  MapServiceType?: MapServiceType,
  isArcGISLayer?: boolean, // 是否为arcgis底图服务，如果是必须提供arcGISLayerServiceUrl值
  arcGISLayerServiceUrl?: string, // ArcGIS地图url
  onCreate?: (maptalksMap: any) => void // 地图创建完成事件，参数为创建好的地图
}

export default class MaptalksCom extends React.Component<IProps, IState> {
  static MapServiceType = MapServiceType
  map: any
  mapContainer: HTMLDivElement | null

  constructor(props: IProps) {
    super(props)
   
  }
  componentDidMount() {
    this.constructMap(this.mapContainer).then(map => {
      this.map = map
    }, (errInfo) => {
      console.error(errInfo)
    })
      .then(() => {
        if (this.props.onCreate) {
          this.props.onCreate(this.map)
        }
      })
  }
  refs: {
    [key: string]: any
  }
  render() {
    const style = this.props.className ? this.props.className : 'maptalksCom'
    return (
      <div ref={node => this.mapContainer = node} className={style} />
    )
  }
  /**
   * 创建地图
   *
   * @param {(HTMLDivElement| null)} mapContainer 地图容器
   * @returns Promise
   * @memberof MaptalksCom
   */
  constructMap(mapContainer: HTMLDivElement | null) {
    const self = this
    return new Promise((resolve, reject) => {
      if (mapContainer) {
        const mapOption = config.mapOptions
        const propsMapServiceType = self.props.MapServiceType
        if (propsMapServiceType === MapServiceType.ArcGIS) {
          // ArcGIS地图默认配置
          this.state = {
            mapOptions: Object.assign({}, ...[{
              center: mapOption.center,
              zoom: mapOption.zoom,
              baseLayer: new TileLayer('base', mapOption.arcGIS.baseLayer),
              attribution: mapOption.arcGIS.attribution
            }], this.props.mapOptions)
          }
          const arcUrl = self.props.arcGISLayerServiceUrl
          SpatialReference.loadArcgis(arcUrl + '?f=pjson', (err) => {
            if (err) {
              throw new Error(err)
            }
            const options = Object.assign({}, ...[self.state.mapOptions], ...[{
              spatialReference: {
                projection: 'EPSG:4326'
              },
              baseLayer: new TileLayer('base', {
                spatialReference: {
                  projection: 'EPSG:3857'
                },
                'urlTemplate': arcUrl + '/tile/{z}/{y}/{x}',
                'attribution': '&copy; <a target="_blank" href="' + arcUrl + '"">ArcGIS</a>'
              })
            }])
            resolve(new Map(mapContainer, options))
          })
        } else if ( propsMapServiceType === MapServiceType.TianDiTu) {
          // 天地图
          this.setState({
            mapOptions: Object.assign({}, ...[{
              center: mapOption.center,
              zoom: mapOption.zoom,
              baseLayer: new TileLayer('base', mapOption.tianDiTu.baseLayer),
              attribution: mapOption.tianDiTu.attribution
            }], this.props.mapOptions)
          }, () => {
            const options = Object.assign({}, ...[self.state.mapOptions], ...[{
              spatialReference: {
                projection: 'EPSG:4326'
              },
              layers: [
                new TileLayer('label', {
                  urlTemplate: 'http://t{s}.tianditu.com/DataServer?T=cva_c&x={x}&y={y}&l={z}',
                  subdomains: ['1', '2', '3', '4', '5'],
                  opacity: 1
                })
              ]
            }])
          resolve(new Map(mapContainer, options))
          })
        } else {
          resolve(new Map(self.mapContainer, self.state.mapOptions))
        }
      } else {
        reject('Invalid map container div')
      }
    })
  }
}