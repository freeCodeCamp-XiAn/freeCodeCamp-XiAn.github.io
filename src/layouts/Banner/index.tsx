import * as React from 'react'
import './index.less'

import Config from '@config/index'

const Banner = () => (
    <div className='banner'>
		<div>
			<span className='title'>{Config.banner.title}</span>
			<span className='date'>时间：{Config.banner.date}</span>
			<span className='address'>地点：{Config.banner.address}</span>
		</div>
    </div>
)
export default Banner
