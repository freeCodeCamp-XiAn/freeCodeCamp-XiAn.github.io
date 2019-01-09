import * as React from 'react'
import { Button, Input, Breadcrumb, Modal, Icon } from 'antd'
import './App.less'
import './fontImg/style.css'
// import {Hello} from 'andor'
import logo from './image/logo.svg'
// import MaptalksCom from '@components/mapComponents/MaptalksCom'
// import Summit, { Topic } from '@components/Demo/Summit'
import Summit from '@components/Demo/Summit'
import Web from '@components/Demo/Web'
import { FaBeer } from 'react-icons/fa'
import { Button as MaterialButton, IconButton } from '@material-ui/core'
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart'
import ReactEcharts from 'echarts-for-react'
import echarts from 'echarts'
import AjaxTest from '@components/Demo/Ajax'
// import PubSub from 'pubsub-js'
import Draggable from 'react-draggable'
import classNames from 'classnames'
// import { ControlFooterDisplay, ControlHeaderDisplay } from '@pages/PageUtils'
import Animate from 'rc-animate'
import velocity from 'velocity-animate'
import { Header, Footer } from '@layouts/index'
import Button1 from '@components/Demo/Button'
interface IState {
  SummitMessage?: string,
  WebMessage?: string,
  echartsOption?: any,
  modelVisible?: boolean,
  isTestClassName?: boolean
  visible?: boolean
  exclusive?: boolean
  data?: object[]
}
export interface IProps {
  empty?: any
}


const Box = (props) => {
  const style = {
    width: '200px',
    display: props.visible ? 'block' : 'none',
    height: '200px',
    backgroundColor: 'red',
  }
  return (<div style={style} />)
}


class App extends React.Component<IProps, IState> {

  db: any // indexDB对象
  constructor(props: any) {
    super(props)
    this.state = {
      SummitMessage: '',
      WebMessage: '',
      echartsOption: this.getOption(),
      modelVisible: false,
      visible: true,
      exclusive: false,
      data: []
    }
    // ControlFooterDisplay()
    // ControlHeaderDisplay()
    this.receiveFromSummit = this.receiveFromSummit.bind(this)
    this.receiveFromWeb = this.receiveFromWeb.bind(this)
    this.getOption = this.getOption.bind(this)
  }
  handleOk = () => {
    this.setState({
      modelVisible: !this.state.modelVisible
    })
  }
  getOption() {
    return {
      title: {
        text: 'ECharts 入门示例'
      },
      tooltip: {},
      legend: {
        data: ['销量']
      },
      xAxis: {
        data: ['衬衫', '羊毛衫', '雪纺衫', '裤子', '高跟鞋', '袜子']
      },
      yAxis: {},
      series: [{
        name: '销量',
        type: 'bar',
        data: [5, 20, 36, 10, 10, 20]
      }]
    }
  }
  public say() {
    alert('test')
  }
  public receiveFromSummit(content: any) {
    this.setState({
      WebMessage: content
    }, () => {
      console.log(`父容器收到信息，内容为：${this.state.WebMessage}`)
    })
  }
  receiveFromWeb(content: any) {
    this.setState({
      SummitMessage: content
    })
  }
  componentDidMount() {
    const option = {
      title: {
        text: 'ECharts 入门示例'
      },
      tooltip: {},
      legend: {
        data: ['销量']
      },
      xAxis: {
        data: ['衬衫', '羊毛衫', '雪纺衫', '裤子', '高跟鞋', '袜子']
      },
      yAxis: {},
      series: [{
        name: '销量',
        type: 'bar',
        data: [5, 20, 36, 10, 10, 20]
      }]
    }
    const myEchart = echarts.init(document.getElementById('test_echarts'))
    myEchart.setOption(option)
    // ================= pubsub.js===============
    // PubSub.subscribe(Topic, (msg, data) => {
    //   console.log(msg)
    //   this.setState({
    //     echartsOption: data
    //   }, () => {
    //     console.log(msg)
    //     console.log(data)
    //   })
    // })
    // ================= pubsub.js===============
  }
  testClassNames = () => {
    this.setState({
      isTestClassName: !this.state.isTestClassName
    })
  }

  animateLeave = (node, done) => {
    let ok = false

    function complete() {
      if (!ok) {
        ok = true
        done()
      }
    }

    node.style.display = 'block'

    velocity(node, 'slideUp', {
      duration: 1000,
      complete,
    })
    return {
      stop() {
        velocity(node, 'finish')
        // velocity complete is async
        complete()
      },
    }
  }

  animateEnter = (node, done) => {
    let ok = false

    function complete() {
      if (!ok) {
        ok = true
        done()
      }
    }

    node.style.display = 'none'

    velocity(node, 'slideDown', {
      duration: 1000,
      complete,
    })
    return {
      stop() {
        velocity(node, 'finish')
        // velocity complete is async
        complete()
      },
    }
  }

  toggle = (field) => {
    this.setState({
      [field]: !this.state[field],
    })
  }

  // ================= indexDB ======================
  /**
   *  浏览器是否支持indexDB
   */
  isSupportIndexDB = () => {
    if ('indexedDB' in window) {
      console.log('浏览器支持indexedDB...')
    } else { // 不支持
      console.error('浏览器不支持indexedDB!!')
    }

  }
  /**
   * 创建数据库和数据仓库
   * const dbInfo = {
   * dbName: 'history',
   * dbVersion: 2021,
   *  dbInstance: {}
   * }
   * dbInfo类型需要定义补充
   */
  createindexDB = (dbInfo) => {
    const openRequest = window.indexedDB.open(dbInfo.dbName, dbInfo.dbVersion) // 打开指定数据库，没有的话就创建再打开

    // 数据库打开成功的回调
    openRequest.onsuccess = (e: any) => {
      console.log('数据库打开成功...')
      const db = e.target.result
      const trans = db.transaction(['chart'], 'readwrite') // 返回一个事务对象
      const store = trans.objectStore('chart') // objectStore方法用于返回指定的对象仓库(数据库表格)对象。
      this.db = db
      console.log(store)
      // this.addData(db)  // 数据库中添加数据   ------->xian说这个啦
      // del_data(db)  // 数据库中删除数据
      // deal_data(db) // 读取数据
      // update_data(db)// 更新数据（类似于Add方法）
      // this.traverseData(db) // 遍历数据
    }

    // 数据库打开失败的回调
    openRequest.onerror = (e: any) => {
      console.log('数据库打开失败...')
      console.dir(e)
    }

    // 数据库升级的回调 - onupgradeneeded的执行会在onsuccess和onerror之前
    openRequest.onupgradeneeded = (e: any) => {
      console.log('第一次打开该数据库，或者数据库版本发生变化....')
      // console.log('database version is already upgrade to '+ this.DBversion);
      const db = e.target.result
      const storeNames = db.objectStoreNames
      if (!storeNames.contains('chart')) {
        // 指定一个键为主键,且指定主键自增模式
        db.createObjectStore('chart', {
          keyPath: 'goodId',
          autoIncrement: true
        })
      }
      this.db = db
    }

  }

  /**
   * 关闭数据库的方法
   */
  closeDB = () => {
    this.db.close()
    console.log(this.db.name + ' database is already closed!')
  }
  // /**
  //  * 删除数据库的方法
  //  */
  // deleteDB() {
  //   window.indexedDB.deleteDatabase(this.DBname);
  //   console.log(this.DBname + ' database is already deleted!');
  // }

  /**
   *
   */
  addData = (storeName) => {
    console.log(storeName)
    console.log(this.db)
    const transaction = this.db.transaction(storeName, 'readwrite')

    const store = transaction.objectStore(storeName)

    const datas = [{
      id: 11,
      name: 'zhangsan',
      age: 24
    }, {
      id: 12,
      name: 'lisi',
      age: 30
    }, {
      id: 13,
      name: 'wangwu',
      age: 26
    }, {
      id: 14,
      name: 'zhaoliu',
      age: 26
    }]

    for (const n of datas) {
      store.add(n)
      console.log(n)
    }

  }

  /**
   * 删除指定数据仓库中指定根据主键key(id)数据
   * @param storeName
   * @param key
   */
  deleteDataByKey(storeName, key) {
    const transaction = this.db.transaction(storeName, 'readwrite')
    const store = transaction.objectStore(storeName)
    store.delete(key)
    console.log('数据仓库' + storeName + '中，id = ' + key + '的数据已被删除')
  }
  /**
   * 清空指定数据库表
   * @param storeName
   */
  deleteAllData(storeName) {
    const transaction = this.db.transaction(storeName, 'readwrite')
    const store = transaction.objectStore(storeName)
    store.clear()
    console.log('数据仓库' + storeName + '已清空')
  }
  LostPointerCapture = (evt) => {
    console.log(evt)
  }

  // ================= indexDB ======================



  // ================= pubsub.js===============
  public render() {
    const anim = {
      enter: this.animateEnter,
      leave: this.animateLeave,
    }
    const testClassNames = classNames({ 'classNameTest': this.state.isTestClassName })
    const reactEchartsOptions = this.state.echartsOption!
    return (
      <div className='App'>
        <Header />
        <header className='App-header'>
          <img src={logo} className='App-logo' alt='logo' />
          <h1 className='App-title'>Welcomes to React</h1>
        </header>
		{/* <Hello/> */}
		<Button1>tresrts</Button1>
        <p className='App-intro'>
          To get started, edit <code>src/App.tsx</code> and save to reload.
        </p>
        <Button onClick={this.say}> antd test</Button>
        <Input placeholder='Basic usage' onBlur={this.LostPointerCapture} />
        <Breadcrumb>
          <Breadcrumb.Item>Home</Breadcrumb.Item>
          <Breadcrumb.Item><a >Application Center</a></Breadcrumb.Item>
          <Breadcrumb.Item><a >Application List</a></Breadcrumb.Item>
          <Breadcrumb.Item>An Application</Breadcrumb.Item>
        </Breadcrumb>
        <Summit message={this.state.SummitMessage} onSay={this.receiveFromSummit} />
        <h3>分割线哈<Icon type='link' /><Button type='primary' icon='search'> <Icon type='github' />Search</Button></h3>
        <MaterialButton variant='contained' color='primary'>
          Hello World
        </MaterialButton>
        <IconButton color='primary' aria-label='Add to shopping cart'>
          <AddShoppingCartIcon />
        </IconButton>
        <AjaxTest />
        <Draggable
          axis='both'
          defaultPosition={{ x: 0, y: 0 }}
          grid={[25, 25]}
          cancel='.not-draggable'
        // onStart={this.handleStart}
        // onDrag={this.handleDrag}
        // onStop={this.handleStop}
        >
          <div className='draggable' >
            <div className='handle'>拖动我吧<Icon type='setting' /></div>
            <div>要实现特效，请从参考我的API</div>
            <input type='text' className='not-draggable' />
          </div>
        </Draggable>
        <h3> Lets go for a <FaBeer size={40} color='#a24b00' />? </h3>
        <Web message={this.state.WebMessage} onSendMessage={this.receiveFromWeb} />
        {/*<MaptalksCom />*/}
        <ReactEcharts
          option={reactEchartsOptions}
          notMerge={true}
          lazyUpdate={true}
          opts={{ renderer: 'svg' }} />


        <div>
          <h3>react简单动画示例rc-animate+velocity-animate</h3>
          <label><input type='checkbox' onChange={() => { this.toggle('visible') }} checked={this.state.visible} />
            show</label>
          &nbsp;
        <Animate
            component=''
            exclusive={this.state.exclusive}
            showProp='visible'
            animation={anim}
          >
            <Box visible={this.state.visible} />
          </Animate>
        </div>
        {/* 字体图标使用 */}
        <div>
          <h3>字体图标使用测试</h3>
          <span className='icon-test1 myTest' />
        </div>
        <div>
          <h3>indexDB测试,测试输出请在浏览器console窗口查看</h3>
          <Button onClick={this.isSupportIndexDB}>浏览器是否支持indexDB</Button>
          <Button onClick={this.createindexDB.bind(this, { dbName: 'history', dbVersion: 2021, dbInstance: {} })}>打开数据库（创建indexDB数据库和数据仓库）</Button>
          <Button onClick={this.addData.bind(this, 'chart')}>添加数据</Button>
          <Button onClick={this.deleteDataByKey.bind(this, 'chart', 14)}>删除指定key值的一条数据</Button>
          <Button onClick={this.deleteAllData.bind(this, 'chart')}>清空指定的整个数据库表</Button>
        </div>


        <div style={{ width: '100%', height: '300px' }} id='test_echarts' />
        <Modal
          title='Basic Modal'
          visible={this.state.modelVisible}
          onOk={this.handleOk}
        // onCancel={this.handleCancel}
        >
          <p>Some contents...</p>
          <p>Some contents...</p>
          <p>Some contents...</p>
        </Modal>
        <span className={testClassNames}>classnames 测试</span> <Button onClick={this.testClassNames}>测试classNames</Button>
        <div>后台数据交互{
          this.state.data!.map((item: any) => {
            return (
              <span key={item.stacd}>{item.stcd}</span>
            )
          })
        }</div>
        <Footer />
      </div>

      // react中的动画



    )
  }
}

export default App
