import * as React from 'react'
import { FaTh } from 'react-icons/fa'
import { Row, Col } from 'antd'
import { NavLink } from 'react-router-dom'
import testImg from './img/03.png'
import './index.less'
interface IProps {
  classNames?: string, // 样式

}
interface IState {
  classNames?: string, // 样式

}
export default class MapNavHeader extends React.Component<IProps, IState> {
  constructor(props: IProps) {
    super(props)
    this.state = {
      classNames: this.props.classNames ? this.props.classNames : ''
    }
  }

  render() {
    return (
      <div className={`_MapNavHeader ${this.state.classNames}`}>
        <div className='_MapNavHeaderContainer'>
          <FaTh fontSize='30px' className='MapNavHeaderMenuIcon' />
          <Row gutter={4} type={'flex'} justify='space-around' align='middle' className='MapNavHeaderMenu'>
            <Col span={8} className='middle'>
              <NavLink to='/'>
                <img src={testImg} alt='首页' />
                <div>首页</div>
              </NavLink>
            </Col>
            <Col span={8} className='middle'>
              <NavLink to='/demo'>
                <img src={testImg} alt='Demo示例' />
                <div>Demo示例</div>
              </NavLink>
            </Col>
            <Col span={8} className='middle'>
              <NavLink to='/routerTest'>
                <img src={testImg} alt='嵌套路由' />
                <div>嵌套路由</div>
              </NavLink>
            </Col>
            <Col span={8} className='middle'>
              <NavLink to='/test'>
                <img src={testImg} alt='404' />
                <div>404</div>
              </NavLink>
            </Col>
            <Col span={8} className='middle'>
              <NavLink to='/'>
                <img src={testImg} alt='测试栏' />
                <div>首页</div>
              </NavLink>
            </Col>
            <Col span={8} className='middle'>
              <NavLink to='/'>
                <img src={testImg} alt='测试栏' />
                <div>首页</div>
              </NavLink>
            </Col>
            <Col span={8} className='middle'>
              <NavLink to='/'>
                <img src={testImg} alt='测试栏' />
                <div>首页</div>
              </NavLink>
            </Col>
            <Col span={8} className='middle'>
              <NavLink to='/'>
                <img src={testImg} alt='测试栏' />
                <div>首页</div>
              </NavLink>
            </Col>
          </Row>
        </div>
      </div>
    )
  }
}