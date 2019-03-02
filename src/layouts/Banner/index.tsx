import * as React from 'react'
import './index.less'
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

const Banner = () => (
    <div className='banner' style={styleBaner} >
        <br/>
    </div>
)
export default Banner