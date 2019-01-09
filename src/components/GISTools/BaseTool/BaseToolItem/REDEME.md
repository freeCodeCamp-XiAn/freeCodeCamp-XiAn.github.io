# 包含提示气泡和气泡位置修改入口的基础组件子项
>该组件效果上基本与BaseToolItemNoneTip组件一致是基础组件的组成子项，区别在于该组件不直接显示子项名称而是通过添加了气泡提示来展示，同时允许根据情况修改提示气泡位置。

## 属性

|名称|类型|必须|默认值|描述|
|--|--|--|--|--|
|tips|string|是|无|显示的子项名称|
|placement|string|是|top|气泡展示位置|
|imgPath|string|是|无|对外展示的子项图标路径|
|onClick|function|是|无|该子项的点击事件|

## 说明

该组件只提供了UI效果，引用该组件的组件需要做相应方法的实现,该组件的使用与BaseToolItemNoneTip组件类似你也可以参考它的使用示例。

## 示例

```typescript
import BaseToolItem from '@components/GISTools/BaseTool/BaseToolItem'
import img from './XX.png'

interface ITool {
  tips: string,
  placement: string,
  imgPath: string,
  handler: () => void
}
interface Istate {
  toolArr?: ITool[], // 样式
}
export default class myConponent extends React.Component<any, IState> {
  constructor(props: any) {
    super(props)
    this.state. = {
      toolArr:  [{
        tips :'title'
        placement :'top'
        imgPath: img,
        handler: this.hander
      }
      ...
      ]
    } 
  }
  hander = () => {
  console.log('hander')
} 
/**
   * 渲染工具条
   *
   * @memberof GISTools
   */
  renderToolBar = () => {
    return (
      this.state.toolArr!.map((item, key) => {
        return (
          <BaseToolItem tips={item.tips} placement={item.placement} imgPath ={img}  onClick={item.handler.bind(this)} />
        )
      })
    )
  }

  render () {
    const toolbar = this.renderToolBar()
    return (
          toolbar
    )
  }
}


```