import * as React from 'react'
import * as ReactDOM from 'react-dom'
// import Layouts from '@layouts/index'
import Pages from '@pages/index'
import { LocaleProvider } from 'antd'
import zh_CN from 'antd/lib/locale-provider/zh_CN'
import 'moment/locale/zh-cn'
import './index.less'
ReactDOM.render(
	<LocaleProvider locale={zh_CN}><Pages /></LocaleProvider>,
	document.getElementById('root') as HTMLElement
)

declare var module: any
if (module.hot) {
	module.hot.accept()
}
