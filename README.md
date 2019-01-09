
# 分支说明

> **维护本库的开发人员必须牢记这两个分支**

  * master 分支：打包部署
  * dev 分支： 开发

# FCC西安社区官网

[![Build Status](https://travis-ci.org/freeCodeCamp-XiAn/freeCodeCamp-XiAn.github.io.svg?branch=dev)](https://travis-ci.org/freeCodeCamp-XiAn/freeCodeCamp-XiAn.github.io)
[![codecov](https://codecov.io/gh/freeCodeCamp-XiAn/freeCodeCamp-XiAn.github.io/branch/master/graph/badge.svg)](https://codecov.io/gh/freeCodeCamp-XiAn/freeCodeCamp-XiAn.github.io)
[![Conventional Commits](https://img.shields.io/badge/Conventional%20Commits-1.0.0-yellow.svg)](https://conventionalcommits.org)
[![JavaScript Style Guide](https://cdn.rawgit.com/standard/standard/master/badge.svg)](https://github.com/standard/standard)

## Node版本

|序号|名称|说明|
|:--:|--|--|
|1|Node|^10|

## 获取

```shell
$ git clone -b dev git@github.com:freeCodeCamp-XiAn/freeCodeCamp-XiAn.github.io.git
...
```

## 安装依赖

```shell
# use yarn
$ cd freeCodeCamp-XiAn.github.io && yarn
```

## 启动

```shell
$ yarn dev
...
```

## 生产

```shell
$ yarn build
...
```

## 图标库

**[react-icon](https://react-icons.netlify.com/#/)**： 已集成[Font Awesome](ttps://fontawesome.com/ ), [Ionicons](https://ionicons.com/), [Material Design icons](http://google.github.io/material-design-icons/ ), [Typicons](http://s-ings.com/typicons/), [Github Octicons icons](https://octicons.github.com/ ),[Feather](https://feathericons.com/ )

## 别名引用

> 为节省组件目录搜索，已将**src**目录下的文件夹做了映射

### 之前

```typescript
// ./src/test/index.tsx
import AjaxTest from '../../components/Ajax'
```

### 之后

```typescript
// ./src/test/index.tsx
import AjaxTest from '@components/Ajax'
```

## 支持环境

* IE>9
* Edge>=15
* Chrome>=57
* FireFox>=55
