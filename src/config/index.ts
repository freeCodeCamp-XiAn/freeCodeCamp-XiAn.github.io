
const Config = {
  projectName: 'Platform',
  system: {
    loadingText: '别急,努力加载ing'
  },
  banner: {
    title: '2019西安Web交流大会',
    date: '2019-03-30 10:00 ~ 17:00',
	address: '西安市碑林区南二环西段69号，西安创新设计中心大楼三楼'
  },
}


if (typeof (ConfigExt) !== 'undefined') {
  Object.assign(Config, ConfigExt)
}

export default Config
