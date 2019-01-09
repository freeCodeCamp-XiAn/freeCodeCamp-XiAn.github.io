const config = {
  mapOptions: {
    center: [108.89124, 34.228625],
    zoom: 15,
    arcGIS: {
      baseLayer: {
        urlTemplate: 'http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
        subdomains: ['a', 'b', 'c'],
        attribution: '&copy; <a href="http://www.osm.org" target="_blank">OpenStreetMap</a> contributors'
      },
      attribution: {
        'content': '&copy;2018 <a target="_blank" href="http://freeCodeCamp-XiAn.github.io/">FCC西安</a>'
      }
    },
    tianDiTu: {
      baseLayer: {
        tileSystem: [1, -1, -180, 90],
        urlTemplate: 'http://t{s}.tianditu.com/DataServer?T=vec_c&x={x}&y={y}&l={z}',
        subdomains: ['1', '2', '3', '4', '5'],
        attribution: '&copy; <a target="_blank" href="http://www.tianditu.cn">Tianditu</a>'
      },
      attribution: {
        'content': '&copy;2018 <a target="_blank" href="http://freeCodeCamp-XiAn.github.io/">FCC西安</a>'
      }
    }

  }
}
export default config
