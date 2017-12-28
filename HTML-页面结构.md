# 页面结构
by 若愚@[饥人谷](http://jirengu.com)

## 关于HTML
超文本标记语言（HyperText Markup Language，简称：HTML）是一种用于创建网页的标准标记语言。HTML是一种基础技术，常与CSS、JavaScript一起被众多网站用于设计令人赏心悦目的网页、网页应用程序以及移动应用程序的用户界面。网页浏览器可以读取HTML文件，并将其渲染成可视化网页 【[参考](https://zh.wikipedia.org/wiki/HTML)】

### 发展
| 年份 | 版本|
| --- | --- |
| 1997.1 | HTML 3.2 |
| 1997.12 | HTML 4.0 |
| 1999.12 | HTML 4.01 |
| 2014.10 | HTML 5 |

## 一个典型的HTML5页面
```
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Document</title>
</head>
<body>
    <header>
      <h1>HTML5</h1>
    </header>
    <main></main>
    <footer></footer>
</body>
</html>
```

## 一个典型的html4页面
```
<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html lang="en">
<head>
    <meta http-equiv="Content-Type" content="text/html;charset=UTF-8">
    <title>Document</title>
</head>
<body>
    <div id="header">
      <h1>HTML4</h1>
    </div>
    <div id="main"></div>
    <div id="footer"></div>
</body>
</html>
```
## HTML vs XML vs XHTML
- HTML，超文本标记语言，是语法较为松散的、不严格的Web语言；
- XML，可扩展标记语言，主要用于存储数据和结构[参考](http://w3school.com.cn/xml/xml_intro.asp)；
- XHTML，可扩展超文本标记语言，基于XML，作用与HTML类似，但语法更严格[参考](http://w3school.com.cn/xhtml/xhtml_why.asp)。


## 表现(内容)、样式、行为分离
- 写 HTML 的时候先不管样式, 重点放在HTML的结构和语义化上，让 HTML 能体现页面结构或者内容。之后再去写样式。
- 写 JS 的时候，尽量不要用 JS 去直接操作样式，而是通过给元素添加删除class来控制样式变化
- HTML 内不允许出现属性样式，尽量不要出现行内样式


## 语义化HTML

语义化HTML是一种编写HTML的方式

选择合适的标签、使用合理的代码结构，便于开发者阅读，同时让浏览器的爬虫和机器很好地解析。

## 任务
写一篇简单的博客，回答以下问题

- HTML、XML、XHTML 有什么区别
- 怎样理解 HTML 语义化
- 怎样理解内容与样式分离的原则

