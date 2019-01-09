import * as React from 'react'

import * as maptalks from 'maptalks'
import './index.less'
import { Tree } from 'antd'
import classnames from 'classnames'
const TreeNode = Tree.TreeNode

// 目前仅限于Arcgis 服务的处理后续完善
// interface ILayer {
//   mapServerURL?: string // 图层
//   subLayerid?: string // 自图层id 仅对动态服务而言
//   subgeotype?: string // 是动态服务的数据节点还是逻辑节点
// }

interface INode {
  title?: string // 节点名称
  pkey?: string // 该节点的父节点key值
  key?: string // 节点key值
  checked?: boolean // 是否为勾选状态
  isBaseMap?: boolean // 是否为地图
  serverType?: string // 图层名称 某种切片还是某种动态， 根据这个节点的标识决定该节点的图层以哪种方式加载，目前知道如何处理的只有Arcgis 的普通切片和普通动态服务，其他的后续补充
  // layer?: ILayer
  mapServerURL?: string // 图层
  subLayerid?: string // 自图层id 仅对动态服务而言
  subgeotype?: string // 是动态服务的数据节点还是逻辑节点
}

interface IProps {
  /**
   * map对象
   */
  map: any
  /**
   * 图层控制数据源
   */
  data? : INode[]
  /**
   * 样式名
   */
  className ?: string
  /**
   * 图层控制面板是否显示
   */
  visible ?: boolean
}


interface IState {
  expandedKeys?: string [] // 展开节点的key值
  // autoExpandParent? : boolean
  checkedKeys?: string []  // 选中节点key值
  // selectedKeys ?: string [] 
  visible ? : boolean
 
}
export default class LayerTree extends React.Component <IProps , IState > {
  map = this.props.map
  expandedKeys? : string [] // 保存展开节点的key值
  checkedKeys?: string [] // 保存被选中节点的key值（全选）
  halfCheckedKeys?: string [] // 保存半选节点的key值（半选）
  
  initData = this.props.data // 原始tree数据
  treeData ?: INode[] // 转换后的tree数据

  currentCheckedKeys = []
  lastCheckedKeys = []
  constructor (props : IProps) {
    super(props)
    this.state = {
      expandedKeys: ['2'],
      // autoExpandParent: true,
      checkedKeys: [],
      visible : this.props.visible
    }
  }
  
  componentWillMount () {
    this.treeData =  this.createTreeData(this.initData)
    // this.treeData =  this.createTreeData(this.props.data)
  }

  componentWillReceiveProps(nextProps: IProps) {
    if (nextProps.visible !== this.props.visible) {
      this.setState({
        visible: nextProps.visible
      })
    }
  }
  componentWillUnmount() {
    this.setState({
      visible: false
    })
  }

  /**
   * 节点展开时触发事件
   * 树节点展开时将展开节点的key值保存在全局变量expandedKeys中，用于资源目录状态保持
   */
  onExpand = (expandedKeys) => {
    this.setState({
      expandedKeys,
      // autoExpandParent: false,
    })
    this.expandedKeys = expandedKeys
  }
  /**
   * 节点被选中时触发的事件
   */
  onCheck = (checkedKeys, e) => {
    this.setState({ checkedKeys }, () => {
      // this.checkedKeys = checkedKeys
      this.halfCheckedKeys = e.halfCheckedKeys // 当前半选节点key值
      this.currentCheckedKeys = checkedKeys // 当前全选节点key值

      // const checkedNodes = e.checkedNodes                                  // 当前的被勾选节点
      // const halfCheckedKeys = e.halfCheckedKeys                            // 当前的半选节点
      const checked = e.checked                                           // ture为节点被勾选，false为节点被取消勾选
      // const node = e.node.props   

      if (checked === true) { // 节点被选中
        this.addLayerByNodeCheck(e)
      } else { // 节点被移除
        this.removeLayerByNodeUncheck(e) 
      }
    })
  }



  /**
   * 通过勾选树节点的复选框来加载图岑
   * 图层的加载移除操作只有在数据节点的勾选情况改变时才会触发
   */
  addLayerByNodeCheck = (e) => {
    let layerURL
    let layerID

    // const node = e.node.props
    const leaf = e.node.isLeaf() // 是否为叶子节点
    const key = e.node.props.key ? e.node.props.key : e.node.props.eventKey
    
    if (leaf === true) {
      const nodeData  = this.getNodeByKey(key, this.initData)
      if (nodeData.serverType === 'tile') { // 判断节点类型
        // 做切片图层添加，目前只做Arcgis切片的处理，后续的其他切片在这里添加
        layerURL = nodeData.mapServerURL
        layerID = nodeData.key
        this.addArcgisTileLayer(layerURL, layerID) // 添加图层
      }
    } else {
      // 如果不是叶子节点，则获取其子节点
      const children = e.node.getNodeChildren()
      children.map((item) => {
        const childrenKey = item.key // 子节点的key值
        const childrenProps = item.props 
        if (childrenProps.children && childrenProps.children.length !== 0) { // 判断子节点的子节点是否存在，应该写一个递归来找该当前点击节点的子节点
          console.log('还有子节点')
        } else {
          const nodeData  = this.getNodeByKey(childrenKey, this.initData)
          layerURL = nodeData.mapServerURL
          layerID = nodeData.key
          this.addArcgisTileLayer(layerURL, layerID)
        }
      }) 
    }
  }
  /**
   * 根据key值获取对应的数据节点
   */
  getNodeByKey = (key, data) => {
    if (data.length > 0) {
      for (const value of data) {
        if (value.key === key) {
          return value
        }
      }
    } else {
      console.log('遍历的不是一个数组')
    }
    
  }

  /**
   * 通过取消树节点的勾选状态来移除已加载图层
   */
  removeLayerByNodeUncheck = (e) => {
    // const node = e.node.props
    const leaf = e.node.isLeaf() // 是否为叶子节点
    if (leaf === true) {
      const key = e.node.props.key ? e.node.props.key : e.node.props.eventKey
      const nodeData = this.getNodeByKey(key, this.initData)
      if (nodeData.serverType === 'tile') { // 移除图层只需要找到服务节点即可
       
        this.removeLayerByLayerId(key)
      }
    } else {
      // 如果不是叶子节点，则获取其子节点
      const children = e.node.getNodeChildren()
      children.map((item) => {
        const childrenProps = item.props 
        if (childrenProps.children ) { // 判断子节点的子节点是否存在，应该写一个递归来找该当前点击节点的子节点\
          console.log()
        } else {
          this.removeLayerByLayerId(item.key)
        }
      }) 
    }
  }

  
  removeLayerByLayerId = (layerId) => {
    const layer = this.map.getLayer(layerId)
    if (layer) {
      this.map.removeLayer(layer)
    }
  }
 /**
  * 加载切片图层 各类切片
  */
  addArcgisTileLayer = (layerURL, layerID) => {
    const layer = this.map.getLayer(layerID)
    if (!layer) {
      const addLayer = new maptalks.TileLayer(layerID, {
        spatialReference: {
          projection: 'EPSG:3857'
        },
        'urlTemplate': layerURL + '/tile/{z}/{y}/{x}',
        'visible': true
      })
      this.map.addLayer(addLayer)
    }
  }
 /**
  * 加载动态图层
  */
  addDynamicLayer = () => {
    console.log('添加动态图层')
  }


  
  /**
   * 删除数组中指定值的元素
   * @param arr 数组
   * @param val 要删除的值
   */
  deleteArrayItemByValue = (arr, val) => {
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] === val) {
        arr.splice(i, 1)
        break
      }
    }
  }

   /**
    * 将数据转换成有层级结构的数据
    * @param data 
    */
   createTreeData(data) {
    // const tree = [] 
    // console.log(data)
    this.treeData = [] 
    
    if (data.length > 0) {
      for (const n of data) {
        if (n.pkey === '-1') {
          const obj = {
            title: n.title,
            pkey: n.pkey,
            key: n.key,
            isBaseMap: n.isBaseMap,
            checked: n.checked,
            mapServerURL: n.mapServerURL,
            serverType: n.serverType,
            subLayerid: n.subLayerid,
            subgeotype: n.subgeotype,
          }
          this.treeData.push( obj )
          // this.deleteArrayItemByValue(data, n) // 从数组中删除元素 n
        }
      }
      // tree 根节点，resData只有当前没有遍历到的节点
      this.run(data, this.treeData)  
    } else {
      console.log('遍历对象不是一个数组或为一个空数组')
    }     
    return this.treeData
  }

  /**
   * 递归方法 找chiArr的所有子节点
   * @param resData 
   * @param chiArr 
   */
  run(resData, chiArr) {
    if (resData.length !== 0) {                       // 说明还没有遍历完
      // 找现有节点的子节点
      if (chiArr) {                                     // 判断是否有需要遍历的子节点
        for ( const value of chiArr) {
          for (const value2 of resData) {
            if (value.key === value2.pkey) {
              const obj = {
                title: value2.title,
                pkey: value2.pkey,
                key: value2.key,
                isBaseMap: value2.isBaseMap,
                mapServerURL: value2.mapServerURL,
                serverType: value2.serverType,
                // "nodeType":"subLayer",            // 子节点图层节点（ subLayer ）和子节点逻辑节点(logicalSubLayer
                subLayerid: value2.subLayerid,
                subgeotype: value2.subgeotype,
                checked: value2.checked
                // ,
                // children: []
              }
              /*如果该节点没有children节点则创建一个，再添加数据，如果有就直接添加数据*/
              if (!value.children) {
                value.children = []
              }

              value.children.push(obj)
              // resData.splice(j, 1)
              // j--
            }
          }
          // console.log(chiArr[i].children);
          this.run(resData, value.children)
        }
      }
    }
  }
  /**
   * 生成资源目录UI效果
   */
  renderTreeNodes = (data) => {
    const currentOpData = data
    return currentOpData.map((item) => {
      if (item.children) {
        return (
          // dataRef={item}
          <TreeNode title={item.title} key={item.key} >
            {this.renderTreeNodes(item.children)}
          </TreeNode>
        )
      }
      // return <TreeNode {...item} />
      // dataRef={item}
      return <TreeNode title={item.title} key={item.key} />
    })
  }

  onSelect = (e) => {
    console.log(e)
  }

  render () {
    const style = classnames(`unVisibleTreeContainer ${this.props.className}`, {'visibleTreeContainer': this.state.visible})
    return (
      // <Tree checkable 
      // onExpand={this.onExpand} 
      // expandedKeys={this.state.expandedKeys} 
      // // autoExpandParent={this.state.autoExpandParent}
      // onCheck={this.onCheck}
      // checkedKeys={this.state.checkedKeys}
      // // onSelect={this.onSelect}
      // // selectedKeys={this.state.selectedKeys}
      // >
      //   {this.renderTreeNodes(this.treeData)}
      // </Tree>


      <div className={style}>
         <Tree 
         checkable 
          onExpand={this.onExpand} 
          expandedKeys={this.state.expandedKeys} 
         // autoExpandParent={this.state.autoExpandParent}
          onCheck={this.onCheck}
          checkedKeys={this.state.checkedKeys}
          onSelect={this.onSelect}
          // selectedKeys={this.state.selectedKeys}
          >
            {this.renderTreeNodes(this.treeData)}
          </Tree>
      </div>
    )
  }

}