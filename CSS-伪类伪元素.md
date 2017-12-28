# 伪类与伪元素

by 若愚@饥人谷


## 伪类
> 伪类用于当已有元素处于的某个状态时，为其添加对应的样式，这个状态是根据用户行为而动态变化


### 伪类列举
![伪类](http://7xpvnv.com2.z0.glb.qiniucdn.com/0a50717d-df50-47d2-bed8-c7f9b61e1235) 

### link visited hover active 顺序
```
a:link{
  color: blue;
}
a:visited{
  color: yellow;
}
a:hover{
  color: red;
}
a:active{
  color: pink;
}

```

Why? [代码: link visited hover active 顺序](http://js.jirengu.com/kuco/1/edit?css,output)

### first-child vs first-of-type
- `h1:first-child`: 选择是h1并且它是长子的元素
- `h1:first-of-type`: 选择是h1并且它是它父亲里h1类型中的长子的元素

```
<div class="wrap">
  <h1>我是大标题1</h1>
  <p>我是段落2</p>
  <h1>我是大标题3</h1>
</div>
<style>
.wrap h1:first-of-type{
  background: yellow;
}
.wrap p:first-of-type{
  background: pink;
}
.wrap h1:first-child{
  color: red;
}
.wrap p:first-child{
  color: blue;
}  
</style>
```

[代码: first-child 和 first-of-type 区别](http://js.jirengu.com/baqo/1/edit?html,css,output)


## 伪元素
> 伪元素用于创建一些不在文档树中的元素，并为其添加样式。

### 伪元素列举
![伪元素](http://7xpvnv.com2.z0.glb.qiniucdn.com/5bd6121f-bff0-423d-983e-2779e83ee226) 

[查看代码](http://js.jirengu.com/xato/1/embed?html,css,output)


### :before :after
```
  <div class="box">
    <p>这是第一段</p>
  </div>
  <style>
  .box:before{
    content: 'start'
  }
  .box:after{
    content: 'end'
  }
  </style>
```
![](http://7xpvnv.com2.z0.glb.qiniucdn.com/100407c1-0d72-4f36-99c7-12258aa4428d)

[代码](http://js.jirengu.com/xato/1/embed?html,css,output)

### :before :after
- element:before 在element内部创建一个行内元素，作为element的第一个孩子
- element:after 在element内部创建一个行内元素，作为element的最后一个个孩子
- 用:before :after 的目的是为了省标签
- 其中content 是必不可少 

### 应用-清除浮动
```
.clearfix:after {
    content:"";
    display:block;
    clear:both;
}
```
[代码](http://js.jirengu.com/kiwo/1/edit?html,css,output)

### 应用-替代标签
<div class="tooltip">
  <span class="caret"></span>
  hi, 这里是饥人谷
</div>
<div class="bubble">hi, 这里是饥人谷</div>

[代码](http://js.jirengu.com/buqo/1/edit?html,output)

<style>
  .tooltip, 
  .bubble{
    position: relative;
    padding: 10px!important;
    font-size: 14px!important;
    color: #333;
    border-radius: 3px;
    background: #fff;
    border: 1px solid #000;
    display: inline-block;
  }
  .tooltip .caret,
  .bubble:before{
      width: 10px;
      height: 10px;
      border-left: 1px solid #000;
      border-top: 1px solid #000;
      background: #fff;
      display: inline-block;
      transform: rotateZ(45deg);
      position: absolute;
      top: -6px;
  }
  .bubble:before{
    content:''
  }
</style>

```
  <div class="tooltip">
    <span class="caret"></span>
    hi, 这里是饥人谷
  </div>
  <div class="bubble">hi, 这里是饥人谷</div>
  
  <style>
    .tooltip, 
    .bubble{
      position: relative;
      padding: 10px;
      border-radius: 3px;
      background: #fff;
      border: 1px solid #000;
      display: inline-block;
    }
    .tooltip .caret,
    .bubble:before{
        width: 10px;
        height: 10px;
        border-left: 1px solid #000;
        border-top: 1px solid #000;
        background: #fff;
        display: inline-block;
        transform: rotateZ(45deg);
        position: absolute;
        top: -6px;
    }
    .bubble:before{
      content:''
    }
  </style>
```


### 应用-自定义checkbox

点击笑脸切换: <input type="checkbox"> [代码](http://js.jirengu.com/bazi/1/edit?html,output)
<style>
input[type=checkbox]{
  -webkit-appearance: none;
  appearance: none;
  background: url(http://7xpvnv.com2.z0.glb.qiniucdn.com/b6dcd011-23cc-4d95-9e51-9f10100103bd.png) 0 0 no-repeat;
  display: inline-block;
  width: 20px;
  height: 20px;
  background-size: contain;
  vertical-align: middle;
  outline: none;
}
input[type=checkbox]:checked{
  -webkit-appearance: none;
  appearance: none;
  background: url(http://7xpvnv.com2.z0.glb.qiniucdn.com/538f26f0-6f3e-48d5-91e6-5b5bb730dd19.png) 0 0 no-repeat;
  display: inline-block;
  width: 20px;
  height: 20px;
  background-size: contain;
  vertical-align: middle;     
}

</style>

```
今天的心情: <input type="checkbox">
<style>
input[type=checkbox]{
  -webkit-appearance: none;
  appearance: none;
  background: url(http://7xpvnv.com2.z0.glb.qiniucdn.com/b6dcd011-23cc-4d95-9e51-9f10100103bd.png) 0 0 no-repeat;
  display: inline-block;
  width: 20px;
  height: 20px;
  background-size: contain;
  vertical-align: middle;
  outline: none;
}
input[type=checkbox]:checked{
  -webkit-appearance: none;
  appearance: none;
  background: url(http://7xpvnv.com2.z0.glb.qiniucdn.com/538f26f0-6f3e-48d5-91e6-5b5bb730dd19.png) 0 0 no-repeat;
  display: inline-block;
  width: 20px;
  height: 20px;
  background-size: contain;
  vertical-align: middle;     
}

</style>
```

### 字体图标
<link rel="stylesheet" type="text/css" href="//at.alicdn.com/t/font_nyta5x5h650cnmi.css">
<span class="iconfont icon-jirengulogojichu2"></span>
<style type="text/css">
.icon-jirengulogojichu2{
  font-size: 50px;
  color: white;
}
</style>

```
<link rel="stylesheet" type="text/css" href="http//at.alicdn.com/t/font_nyta5x5h650cnmi.css">
<span class="iconfont icon-jirengulogojichu2"></span> [代码](http://js.jirengu.com/bazi/1/edit?html,output)
```
[代码](http://js.jirengu.com/qani/1/edit?html,output)

[参考文章-前端学习指南-字体图标](https://zhuanlan.zhihu.com/p/22724856?refer=study-fe) 
## 参考
- [Alloy Team - 总结伪类与伪元素](http://www.alloyteam.com/2016/05/summary-of-pseudo-classes-and-pseudo-elements/)
- [W3C - Pseudo-elements and pseudo-classes](https://www.w3.org/TR/CSS2/selector.html#pseudo-elements)
- [W3C - Pseudo-elements and pseudo-classes 翻译版](http://www.ayqy.net/doc/css2-1/selector.html#pseudo-elements)