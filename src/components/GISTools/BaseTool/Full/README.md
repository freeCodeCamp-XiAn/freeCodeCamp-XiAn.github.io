# 全图
> 恢复地图初始展示范围

## 属性

|名称|类型|必须|默认值|描述|
|--|--|--|--|--|
|map|obj|是|无|map对象|
|className|string|否|无|样式|

## 说明

无

## 示例

```typescript
import Full from '@components/GISTools/BaseTool/Full'

export default class myConponent extends React.Component<any, any> {
  constructor(props: any) {
    super(props)
  }
  renderFull = () => {
    return (
      <Full map={this.map}/>
    )
  }

  render () {
    const full = this.renderFull()
    return (
          full
    )
  }
}


```