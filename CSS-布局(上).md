# CSS布局
by 若愚@饥人谷



## 课程内容
- 什么是布局
- DIV + CSS？
- 固定宽度 VS 弹性布局
- 单列布局
- 双列布局
- 三列布局


## 什么是布局
现有样式不能满足人们的需求

- 文档流
- 浮动
- 定位

人们需要：

- 导航栏+内容
- 导航栏+内容+广告栏
- 从上到下、从左到右、定宽、自适应...

CSS 2 并没有提供原生支持，所以需要将一些属性组合起来，以实现布局

## “DIV + CSS 布局”？

中国特色，国外一般不这么叫
`<div>` 是一个无语义的标签，适合用来做与内容无关的事情
只能用 `<div>` 吗？

1. 不一定
2. 尽量使用有语义的标签

## 常见布局（PC）
- 固定宽度布局 
- 弹性（fluid）布局 
- 响应式布局 —— 多终端（PC、Pad、Phone）

## 单列布局

![](http://7xpvnv.com2.z0.glb.qiniucdn.com/ee7cb56f-35bb-45b3-ba25-b1b66a001d9a) 

### 如何实现
定宽
```
width: 1000px; 或 max-width: 1000px;
```

水平居中
```
margin-left: auto; margin-right: auto;
```
### 范例
[范例](http://js.jirengu.com/ludo/)
注意 `max-width`和`width`的区别
```
<style>
  .layout{
  /*   width: 960px; */
    max-width: 960px;
    margin: 0 auto;
  }
  #header{
    height: 60px;
    background: red;
  }
  #content{
    height: 400px;
    background: blue;
  }
  #footer{
    height: 50px;
    background: yellow;
  }
</style>
<div class="layout">
  <div id="header">头部</div>
  <div id="content">内容</div>
  <div id="footer">尾部</div>
</div>

```
### 进化
省标签，便于控制局部  [范例](http://js.jirengu.com/hobu)
```
<style>
  .layout{
    width: 960px;
    margin: 0 auto;
  }
  #header{
    height: 60px;
    background: red;
  }
  #content{
    height: 400px;
    background: blue;
  }
  #footer{
    height: 50px;
    background: yellow;
  }
</style>
<div id="header"  class="layout">头部</div>
<div id="content" class="layout">内容</div>
<div id="footer" class="layout">尾部</div>


```
### 通栏
给通栏加背景色 [范例](http://js.jirengu.com/zira)
```
<style>
  .layout{
    width: 960px;
    margin: 0 auto;
  }
  #header{
    height: 60px;
    background: red;
  }
  #content{
    height: 400px;
    background: blue;
  }
  #footer{
    height: 50px;
    background: yellow;
  }
</style>
<div id="header">
  <div class="layout">头部</div>
</div>
<div id="content" class="layout">内容</div>
<div id="footer">
  <div class="layout">尾部</div>
</div>

```
查看范例效果，能发现不完美的地方吗?

### 通栏优化
给 body 设置min-width 去掉滚动背景色 bug
```
<style>
  .layout{
    width: 960px;
    margin: 0 auto;
  }
  body{
    min-width: 960px;
  }
  #header{
    height: 60px;
    background: red;
  }
  #content{
    height: 400px;
    background: blue;
  }
  #footer{
    height: 50px;
    background: yellow;
  }
</style>
<div id="header">
  <div class="layout">头部</div>
</div>
<div id="content" class="layout">内容</div>
<div id="footer">
  <div class="layout">尾部</div>
</div>
```

### 内部元素水平居中
```
.parent{text-align:center;}
.child{display: inline-block;}
```
IE 6 不支持 inline-block (为什么用下面的写法)
```
.child{*display: inline; *zoom: 1;}
```

[范例](http://js.jirengu.com/raji)

![单列布局](http://7xpvnv.com2.z0.glb.qiniucdn.com/29bea229-2889-4737-9ed1-67fab4da56a4) 

## 双列布局
> 一列固定宽度，另外一列自适应宽度

![双列布局](http://7xpvnv.com2.z0.glb.qiniucdn.com/74f2ada5-53df-4340-97ae-1450ca9382e8) 

### 如何实现
浮动元素 + 普通元素margin
[范例](http://js.jirengu.com/loxe)

```
  <style>
    #content:after{
      content: '';
      display: block;
      clear: both;
    }
    .aside{
      width: 200px;
      height: 500px;
      background: yellow;
      float: left;
    }
    .main{
      margin-left: 210px;
      height: 400px;
      background: red;
    }
    
    #footer{
      background: #ccc;
    }
  
  </style>
  <div id="content">
    <div class="aside">aside</div>
    <div class="main">content</div>
  </div>
  <div id="footer">footer</div>
```
如果侧边栏在右边呢？

### 侧边栏在右
谨记页面元素的渲染顺序 
[范例](http://js.jirengu.com/qaca)
```
  <style>
    #content:after{
      content: '';
      display: block;
      clear: both;
    }
    .aside{
      width: 200px;
      height: 500px;
      background: yellow;
      float: right;
    }
    .main{
      margin-right: 210px;
      height: 400px;
      background: red;
    }
    
    #footer{
      background: #ccc;
    }
  
  </style>

  <div id="content">
    <div class="aside">aside</div>
    <div class="main">content</div>
  </div>
  <div id="footer">footer</div>

```

## 三列布局
> 两侧两列固定宽度，中间列自适应宽度

![三列布局](http://7xpvnv.com2.z0.glb.qiniucdn.com/1959fe4e-8877-4e4d-af91-e3869186af8f) 

### 如何实现
[范例](http://js.jirengu.com/jige)

```

    #content:after{
      content: '';
      display: block;
      clear: both;
    }
    .menu{
      width: 100px;
      height: 500px;
      background: pink;
      float: left;
    }
    .aside{
      width: 200px;
      height: 500px;
      background: yellow;
      float: right;
    }
    .main{
      margin-left: 110px; /*为什么要加margin-left*/
      margin-right: 210px;
      height: 400px;
      background: red;
    }
    
    #footer{
      background: #ccc;
    }

  <div id="content">
    <!-- 为什么不是main在前面 -->
    <div class="menu">aside</div>
    <div class="aside">aside</div>
    <div class="main">content</div>
  </div>
  <div id="footer">footer</div>

```

### 三列布局


