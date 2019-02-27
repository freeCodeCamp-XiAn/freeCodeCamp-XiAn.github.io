import * as React from 'react'
import './index.less'

import Config from '@config/index'
const Banner = () => (
    <div className='banner' >
        <h2>{Config.banner.bannerTitle}</h2>
        <h3>时间：{Config.banner.bannerDate}</h3>
        <h3>地点：{Config.banner.bannerPlace}</h3>
    </div>
)
export default Banner
