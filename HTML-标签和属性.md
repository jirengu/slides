# 畅游 HTML标签、属性
by 若愚@[饥人谷](http://jirengu.com)

## 一个简单的页面
```
<!DOCTYPE html>
<html lang="zh">
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
    <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1">
    <meta name="keywords" content="前端 饥人谷">
    <meta name="description" content="最有爱的前端学习社区">
    <title>Document</title>
</head>
<body>
    <h1>h1</h1>
    <h2>h2</h2>
    <h3>h3</h3>
    <h4>h4</h4>
    <h5>h5</h5>
    <h6>h6</h6>
    <p>段落 <span>3</span></p>
    <a href="http://jirengu.com" target="_blank">饥人谷.com</a>
    <img src="a.png" >
    <div class="box"></div>
    <ul>
      <li>1</li>
      <li>2</li>
      <li>3</li>
    </ul>

</body>
</html>
```
## 常见标签
### h1~h6
> 标题

- h1代表页面最大的标题
- h2二级标题
- h3... 更弱的标题

### p
> 段落，表示大段文字

### a
> 链接，链到一个地址

```
<a href="http://jirengu.com" target="_blank" title="饥人谷">饥人谷.com</a>
<a href="#">饥人谷.com</a>
<a href="#about">饥人谷.com</a>
<a href="/getCourse">饥人谷.com</a>
```

### img
> 展示一张图片

```
<img src="a.png" alt="头像">
```

只闭合标签，最后不需要加 /

### div
> 语义为“一大块”，用于给页面划分区块，让结构更清晰

```
<div id="header">...</div>
<div id="content">...</div>
<div id="footer">...</div>
```
### ul li
> - ul: unsort list 无序列表
> - 用于表示并列的内容
> - ul的直接子元素是li
> - 可以嵌套

```
<ul class="nav">
  <li><a href="#">首页</a></li>
  <li><a href="#">关于</a></li>
  <li>
    <a href="#">更多</a>
    <ul>
      <li>联系</li>
      <li>地址</li>
    </ul>
  </li>
</ul>
```

### ol li
> ol: order list 有序序列表
> 用于表示带步骤或者编号的并列内容
> ol的直接子元素只能是li
> 可以嵌套

```
<h2>把大象关到冰箱的步骤</h2>
<ol>
  <li>把大象变小</li>
  <li>打开冰箱</li>
  <li>把大象塞进去</li>
</ol>
```

### dl dt dd
> - 用于展示一系列 “标题:内容... ”的场景

```
<dl>
  <dt>商品名称:</dt>
  <dd>青花瓷</dd>
  <dt>特征:</dt>
  <dd>白色</dd>
  <dd>圆口</dd>
  <dt>商品介绍</dt>
  <dd>这是一个年代久远的瓷器，很贵，易碎</dd>
</dl>
```

### button
>按钮

```
<button>点我</button>
```


### strong em
> - `em` 需要强调一下
> - `strong` 很重要、强调性更强

```
<p>优惠 <strong>100</strong> 元</p>
<p>小谷 <em>2</em> 岁了</p>
```

### iframe
> 用于嵌入一个页面
> 注意跨域操作问题

```
<iframe src="http://jirengu.com" name="myPage"></iframe>
<p><a href="http://www.w3cschool.cc" target="myPage">W3Cschool.cc</a></p>
```

### table
> 用于展示表格，不要用来做布局
> thead tbody tfoot可省略，浏览器会自动添加 
> `border-collapse: collapse;`用于合并边框 

```
<table>
  <thead>
    <tr>
      <th>姓名</th>
      <th>年纪</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>姓名</th>
      <th>年纪</th>
    </tr>
    <tr>
      <td>小明</td>
      <td>18</td>
    </tr>
    <tr>
      <td>小花</td>
      <td>20</td>
    </tr>  
  </tbody>
  <tfoot></tfoot>
</table>

<table>
  <tr>
    <th>姓名</th>
    <th>年纪</th>
  </tr>
  <tr>
    <td>小明</td>
    <td>18</td>
  </tr>
  <tr>
    <td>小花</td>
    <td>20</td>
  </tr>
</table>
```

## 注意点
- 标签属性全小写
- 标签要闭合、自闭合标签可以省略 /
- 标题里不能有段落，段落里不能有标题

## 相关知识点

### meta
### 文档声明
### lang的作用
### 设置charset
### 块级元素vs 行内元素