
const Config = {
  projectName: 'Platform',
  system: {
    loadingText: '别急,努力加载ing'
  },
  // 底图
  baseMapLayers: {
    title: '底图切换',
    baseLayers: [
      // ArcGIS
      // {
      //   id: 'image',
      //   type: 'esri',
      //   title: '影像图',
      //   image: './img/image.png',
      //   url: 'http://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer'
      // },
      // {
      //   id: 'map',
      //   type: 'esri',
      //   title: '电子地图',
      //   image: './img/map.png',
      //   url: 'http://cache1.arcgisonline.cn/ArcGIS/rest/services/ChinaOnlineCommunity/MapServer'
      // },
      // {
      //   id: 'terrain',
      //   type: 'esri',
      //   title: '地形图',
      //   image: './img/terrain.png',
      //   url: 'http://services.arcgisonline.com/ArcGIS/rest/services/World_Terrain_Base/MapServer'
      // }
      // 天地图
      {
        id: 'image',
        type: 'esri',
        title: '影像图',
        image: './img/image.png',
        url: 'http://t{s}.tianditu.com/DataServer?T=img_c&x={x}&y={y}&l={z}'
      },
      {
        id: 'map',
        type: 'esri',
        title: '电子地图',
        image: './img/map.png',
        url: 'http://t{s}.tianditu.com/DataServer?T=vec_c&x={x}&y={y}&l={z}'
      },
      {
        id: 'terrain',
        type: 'esri',
        title: '地形图',
        image: './img/terrain.png',
        url: 'http://t{s}.tianditu.com/DataServer?T=ter_c&x={x}&y={y}&l={z}'
      }
    ]
  },
  animateTime: 300,  //  rc-animate动画时间（ms ）
  LayerManager: {
    layerArray: [
      {
        title: '切片服务',
        pkey: '-1',
        key: '2',
        checked: false,
        isBaseMap: false,
        serverType: 'tile',
        mapServerURL: '',
        subLayerid: '',
        subgeotype: '',
      },
      {
        title: '测试图层1-假如图层名称很长....',
        pkey: '2',
        key: 'test1',
        checked: false,
        isBaseMap: false,
        serverType: 'tile',
        mapServerURL: 'http://cache1.arcgisonline.cn/arcgis/rest/services/ChinaOnlineCommunityENG/MapServer',
        subLayerid: '',
        subgeotype: '',
      },
      {
        title: '测试图层2',
        pkey: '2',
        key: 'test2-EN世界地图',
        checked: false,
        isBaseMap: false,
        serverType: 'tile',
        mapServerURL: 'https://services.arcgisonline.com/arcgis/rest/services/World_Street_Map/MapServer',
        subLayerid: '',
        subgeotype: '',
      },
      {
        title: '测试图层3',
        pkey: '2',
        key: 'test3',
        checked: false,
        isBaseMap: false,
        serverType: 'tile',
        mapServerURL: 'http://cache1.arcgisonline.cn/arcgis/rest/services/ChinaOnlineStreetWarm/MapServer',
        subLayerid: '',
        subgeotype: '',
      },


      {
        title: 'UI测试不要点',
        pkey: '-1',
        key: '22',
        checked: false,
        isBaseMap: false,
        serverType: 'tile',
        mapServerURL: '',
        subLayerid: '',
        subgeotype: '',
      },
      {
        title: '测试图层1-假如图层名称很长....',
        pkey: '22',
        key: 'test122',
        checked: false,
        isBaseMap: false,
        serverType: 'tile',
        mapServerURL: 'http://cache1.arcgisonline.cn/arcgis/rest/services/ChinaOnlineCommunityENG/MapServer',
        subLayerid: '',
        subgeotype: '',
      },
      {
        title: '测试图层22',
        pkey: '22',
        key: 'test22-EN世界地图',
        checked: false,
        isBaseMap: false,
        serverType: 'tile',
        mapServerURL: 'https://services.arcgisonline.com/arcgis/rest/services/World_Street_Map/MapServer',
        subLayerid: '',
        subgeotype: '',
      },
      {
        title: '测试图层32',
        pkey: '22',
        key: 'test32',
        checked: false,
        isBaseMap: false,
        serverType: 'tile',
        mapServerURL: 'http://cache1.arcgisonline.cn/arcgis/rest/services/ChinaOnlineStreetWarm/MapServer',
        subLayerid: '',
        subgeotype: '',
      }
    ]
  },
  // 站点指示器列表，到时候从后台获取
  stationIndicators: [
    {
      'id': '4028d781669f1a1701669f453ff801ec',
      'name': '水位站',
      'type': 'ZZ',
      'uri': '/img/zz.png',
      'serialNumber': 0,
      'status': 'true',
      'warnNum': 2,
      'collsed': false
    },
    {
      'id': '4028d781669f1a1701669f478e8e01f9',
      'name': '雨量站',
      'type': 'PP',
      'uri': '/img/pp.png',
      'serialNumber': 1,
      'status': 'true',
      'warnNum': 8,
      'collsed': false
    },
    {
      'id': '4028d781669f1a1701669f47f7380206',
      'name': 'IT设备',
      'type': 'HOST',
      'uri': '/img/host.png',
      'serialNumber': 2,
      'status': 'true',
      'warnNum': 0,
      'collsed': false
    },
    {
      'id': '4028d781669f1a1701669f485d890207',
      'name': '告警',
      'type': 'WARN',
      'uri': '/img/warn.png',
      'serialNumber': 3,
      'status': 'true',
      'warnNum': 0,
      'collsed': false
    },
    {
      'id': '4028d781669fdb5e01669fdbff890001',
      'name': '河道水文站',
      'type': 'ZQ',
      'uri': '/img/zq.png',
      'serialNumber': 4,
      'status': 'true',
      'warnNum': 0,
      'collsed': false
    }
  ]
}


if (typeof (ConfigExt) !== 'undefined') {
  Object.assign(Config, ConfigExt)
}

export default Config