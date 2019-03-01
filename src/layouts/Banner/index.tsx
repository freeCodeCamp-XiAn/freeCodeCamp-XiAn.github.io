import * as React from 'react'
import './index.less'

import Config from '@config/index'
/**
 * 转换为当前尺寸
 * @param px 输入px转换
 */
function bannerLess(px: number): number {
    return document.body.clientWidth / 1440 * px
}
interface IStyle {
    [index: string]: string
}
const styleBaner: IStyle = {
    'height': bannerLess(750) + 'px'
}
const styleH2: IStyle = {
    'fontSize': bannerLess(107) + 'px',
}
const styleH3: IStyle = {
    'fontSize': bannerLess(41) + 'px',
}
const styleH4: IStyle = {
    'fontSize': bannerLess(41) + 'px',
}

const Banner = () => (
    <div className='banner' style={styleBaner} >
        <h2 style={styleH2} >{Config.banner.bannerTitle}</h2>
        <h3 style={styleH3} >时间：{Config.banner.bannerDate}</h3>
        <h3 style={styleH4} >地点：{Config.banner.bannerPlace}</h3>
    </div>
)
export default Banner
