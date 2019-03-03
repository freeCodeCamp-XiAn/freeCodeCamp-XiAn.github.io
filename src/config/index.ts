import plmpas from '../assets/images/v2_plmpas.png'
import plmpbm from '../assets/images/v2_plmpbm.png'
import plmpjd from '../assets/images/v2_plmpjd.png'
import plmpjq from '../assets/images/v2_plmpjq.jpg'
import pncxtm from '../assets/images/v2_pncxtm.png'

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
  contents: [
	  {
		  project: 'React入门填坑',
		  name: '谷中仁',
		  description: '从上面的代码可以看到将HTML直接嵌入了JS代码里面，这个就是React提出的一种JSX语法，这应该是最开始接触React最不能接受的设定之一，因为前端被"变现和逻辑层分离"这种思想"洗脑"太久了。但实际上组件的HTML是组成一个组件不可分割的一份，能够将HTML封装起来才是组件的完全体，React发明了JSX让JS支持嵌入...',
		  isImgLeft: true
	  }, {
		  project: 'React入门填坑',
		  name: '谷中仁',
		  description: '从上面的代码可以看到将HTML直接嵌入了JS代码里面，这个就是React提出的一种JSX语法，这应该是最开始接触React最不能接受的设定之一，因为前端被"变现和逻辑层分离"这种思想"洗脑"太久了。但实际上组件的HTML是组成一个组件不可分割的一份，能够将HTML封装起来才是组件的完全体，React发明了JSX让JS支持嵌入...',
		  isImgLeft: false
	  }, {
		  project: 'React入门填坑',
		  name: '谷中仁',
		  description: '从上面的代码可以看到将HTML直接嵌入了JS代码里面，这个就是React提出的一种JSX语法，这应该是最开始接触React最不能接受的设定之一，因为前端被"变现和逻辑层分离"这种思想"洗脑"太久了。但实际上组件的HTML是组成一个组件不可分割的一份，能够将HTML封装起来才是组件的完全体，React发明了JSX让JS支持嵌入...',
		  isImgLeft: true
	  }, {
		  project: 'React入门填坑',
		  name: '谷中仁',
		  description: '从上面的代码可以看到将HTML直接嵌入了JS代码里面，这个就是React提出的一种JSX语法，这应该是最开始接触React最不能接受的设定之一，因为前端被"变现和逻辑层分离"这种思想"洗脑"太久了。但实际上组件的HTML是组成一个组件不可分割的一份，能够将HTML封装起来才是组件的完全体，React发明了JSX让JS支持嵌入...',
		  isImgLeft: false
	  }, {
		  project: 'React入门填坑',
		  name: '谷中仁',
		  description: '从上面的代码可以看到将HTML直接嵌入了JS代码里面，这个就是React提出的一种JSX语法，这应该是最开始接触React最不能接受的设定之一，因为前端被"变现和逻辑层分离"这种思想"洗脑"太久了。但实际上组件的HTML是组成一个组件不可分割的一份，能够将HTML封装起来才是组件的完全体，React发明了JSX让JS支持嵌入...',
		  isImgLeft: true
	  }
	],
	corporateSponsor: [
		{
			title: '主办单位',
			colNum: 1,
			imgs: [{url : pncxtm, className: 'bigImg'}]
		},
		{
			title: '协办单位',
			colNum: 1,
			imgs: [{url : plmpas, className: 'midImg'}]
		},
		{
			title: '🏅金牌赞助商',
			colNum: 1,
			imgs: [
				{url : plmpjq, className: 'litImgx1'},
				{url : plmpbm, className: 'midImgx1'}
			]
		},
		{
			title: '🥈银牌赞助商',
			colNum: 2,
			imgs: [
				{url : plmpjd, className: 'litImgx2'},
				{url : plmpjq, className: 'litImgx3'},
				{url : plmpjq, className: 'litImgx3'},
				{url : plmpjd, className: 'litImgx2'}
			]
		}
	]
}

if (typeof ConfigExt !== 'undefined') {
	Object.assign(Config, ConfigExt)
}

export default Config
