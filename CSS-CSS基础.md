# CSS基础
by 若愚@饥人谷

## 目录
- CSS 是什么 
- 如何在页面引用CSS
- 认识开发者工具
- 文件路径
- 书写规范

## CSS 是什么 
> CSS全称是 Cascading Style Sheets, 层叠样式表

```
@charset "utf-8";
h1 {
  color: red;
  font-size: 20px;
  /*这是注释*/
}
a:hover{
  color: red;
}

```

![](http://cdn.jirengu.com/kejian1/8-1.png)



## 如何在页面引用 CSS

### 内联样式
```
<h1 style="color: red; font-size: 20px;"></h1>
```

### 内部样式
```

<style type="text/css">
  h1 {
    color: red;
    font-size: 20px;
  }
</style>
<h1>饥人谷</h1>
```

### 外部样式
```
<head>
  <link rel="stylesheet" type="text/css" href="index.css">
</head>
```
```
<style>
  @import url("hello.css");
  @import "world.css";
</style>

```

### 浏览器默认样
![](http://7xpvnv.com2.z0.glb.qiniucdn.com/b48faaff-a4d3-4dd9-a844-06bb851cf998) 

## 认识开发者工具
> 右键 -> 检查

![](http://7xpvnv.com2.z0.glb.qiniucdn.com/efc84867-ede0-414f-8fb9-9b04f9a5babe) 

## 文件路径
- 相对路径
  - `css/a.css`
  - `./css/a.css`
  - `b.css`
  - `../imgs/a.png`
- 绝对路径  
  - `/Users/hunger/project/css/a.css`
- 网站路径
  - `/static/css/a.css`
  - `css/a.css`
  - `http://cdn.jirengu.com/kejian1/8-1.png`

## 书写规范
- 语法不区分大小写，但建议统一使用小写
- 不使用内联的style属性定义样式
- id和class使用有意义的单词，分隔符建议使用-
- 有可能就是用缩写
- 属性值是0的省略单位
- 块内容缩进
- 属性名冒号后面添加一个空格

[参考](https://github.com/fex-team/styleguide/blob/master/css.md)

