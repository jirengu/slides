# 聊一聊markdown

by 若愚@[饥人谷](http://jirengu.com)

## markdown 是什么
是一个简单的标记语言，这些标记和 html 的一些标签对应

通过一些转换库可以把 markdown 转换成html或者把html 转换成markdown

## 有什么作用
用来在网页上展示文章，省去排版布局的烦恼

### Why?
1. 小谷在简书上用 markdown语法 写了篇博客，点击提交
2. markdown 语法的字符串提交到简书服务器保存起来
3. 当小谷打开博客页面时，markdown 字符串被后端语言转换成 HTML，然后放到博客页面
4. 博客页面里引入一些 CSS，会把丑陋的 HTML 变的好看适合阅读

## 基本语法
```
# 一级标题 h1
## 二级标题 h2
### 三级标题 h3
#### 四级标题 h4
##### 五级标题 h5

这是段落 p

- 无序列表
- 无序列表
- 无序列表

1. 有序列表
2. 有序列表
3. 有序列表

\```
var a = 1
var b = 2
\```

`var a = 1`

[链接文字](http://jirengu.com)

![](http://jirengu.com/imgs/a.png)

> 引用

| 表头 | 表头 | 表头 |
| --- | --- | ---  |
| 内容 | 内容 | 内容 |
| 内容 | 内容 | 内容 |

```

## 转换库
```
https://github.com/evilstreak/markdown-js
http://api.jirengu.com/md2html.php?url=https://raw.githubusercontent.com/jirengu/server-mock/master/README.md
```

