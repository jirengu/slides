# 认识 JavaScript


## 网页?

- 网页 = Html+CSS+JavaScript

- `Html`: 网页元素内容

- `CSS`: 控制网页样式

- `JavaScript`：操作网页内容，实现功能或者效果


##  javascript
- javascript !== java
- 是客户端脚本语言
- ECMAScript, DOM, BOM, NodeJS 
- ![](http://cdn.jirengu.com/kejian1/13-1.jpg)



## 引入方式
```
	<!DOCTYPE html>
	<html>
	<head>
	<meta charset="utf-8">
	<title>标题</title>
	<link href="index.css" rel="stylesheet">
	<style>
		body{
			background: red;
		}
	</style>
	</head>
	<body>
	    <p>
	    </p>
	    
	    
	    <script src="index.js"></script>
	    <script>
	        alert(1);
	    </script>
	</body>
	</html>
```


## 浏览器渲染机制

- 解析 HTML 标签, 构建 DOM 树
- 解析 CSS 标签, 构建 CSSOM 树
- 把 DOM 和 CSSOM 组合成 渲染树 (render tree)
- 在渲染树的基础上进行布局, 计算每个节点的几何结构
- 把每个节点绘制到屏幕上 (painting)


![render-tree-construction](http://gitlab.jirengu.com/uploads/companyfile/resource/d8d3459ba7/render-tree-construction.png)

浏览器的工作原理,可参考[How browsers work](http://taligarsiel.com/Projects/howbrowserswork1.htm)





## 白屏问题

如果把样式放在底部,对于IE浏览器,在某些场景下(新窗口打开,刷新等)页面会出现白屏,而不是内容逐步展现

如果使用 `@import` 标签,即使 CSS 放入 link, 并且放在头部,也可能出现白屏 

###
> 使用 link 标签将样式表放在顶部

## FOUC (Flash of Unstyled Content) 无样式内容闪烁

如果把样式放在底部,对于IE浏览器,在某些场景下(点击链接,输入URL,使用书签进入等),会出现 FOUC 现象(逐步加载无样式的内容,等CSS加载后页面突然展现样式).对于 Firefox 会一直表现出 FOUC . 

###
> 将JS放在底部

- 脚本会阻塞后面内容的呈现
- 脚本会阻塞其后组件的下载

对于图片和CSS, 在加载时会并发加载(如一个域名下同时加载两个文件). 但在加载 JavaScript 时,会禁用并发,并且阻止其他内容的下载. 所以把 JavaScript 放入页面顶部也会导致 `白屏` 现象.

## 加载异步


```
    <script src="script.js"></script>
```  

没有 defer 或 async，浏览器会立即加载并执行指定的脚本，“立即”指的是在渲染该 script 标签之下的文档元素之前，也就是说不等待后续载入的文档元素，读到就加载并执行。

```
    <script async src="script.js"></script>
```   
有 async，加载和渲染后续文档元素的过程将和 script.js 的加载与执行并行进行（异步）。

```
	<script defer src="script.js"></script>
```
有 defer，加载后续文档元素的过程将和 script.js 的加载并行进行（异步），但 script.js 的执行要在所有元素解析完成之后，DOMContentLoaded 事件触发之前完成。

### 

- `defer`:脚本延迟到文档解析和显示后执行，有顺序
- `async`:不保证顺序

## 基本调试

- `alert`
- `console.log`
- 打断点
- 二分法



## 参考
- 高性能网站建设指南, Steve Sounders
- [Render-tree construction, layout, and paint
](https://developers.google.com/web/fundamentals/performance/critical-rendering-path/render-tree-construction?hl=en)
- [How browsers work](http://taligarsiel.com/Projects/howbrowserswork1.htm)


