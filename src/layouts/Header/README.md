# NavBar组件参数
* height 组件高度 默认值与antd导航栏高度一致为48px，现在为60px
* theme 导航主体，由antd内建的两套主题 light|dark， 默认为light。
 
``` typescript
 <NavBar theme='light' height= '100px'/>
```

**使用注意**

如果 NavBar 设置了自定义高度请进入该组件的 index.less 文件中修改一个 css,如下

```scss
.ant-menu-light{
  top:65px!important;
}
```

这里 top 的取值应修改为 NavBar 组件当前自定义高度加5个像素值，如 NavBar 自定义高度为60px，则 top 取值为65px。这是为了保证导航为下拉菜单时下拉菜单位置显示的正确性
