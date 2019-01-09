# 可拖拽组件

> 为子组件提供可已拖动的父容器

## 属性

|名称|类型|必须|默认值|描述|
|--|--|--|--|--|
|orientation|enue: 'row', 'row-reverse', 'column', 'column-reverse'|否|'row'| 容器内子组件的布局方向， 默认水平|
|className|string|否||样式名|
|handle|string|否||string类型的标签名，鼠标只有作用在该标签上可以拖动|

## 说明

如果自组件中还有input等输入对话框，要或得焦点，需要在该组件上添加**not-draggable**样式名

## 示例

```typescript
import DraggableContainer from './index'index.less
const Drag = (props) => (
  <DraggableContainer>
    {props.username}, 请拖拽我吧。
  </DraggableContainer>
)

export default Drag

```