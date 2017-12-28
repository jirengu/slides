# 浮动的边边角角
by 若愚@饥人谷

## 浮动的定义
>一个浮动盒会向左或向右移动，直到其外边（outer edge）挨到包含块边沿或者另一个浮动盒的外边。如果存在行盒，浮动盒的外top（边）会与当前行盒的top（边）对齐
如果没有足够的水平空间来浮动，它会向下移动，直到空间合适或者不会再出现其它浮动了

>因为浮动（盒）不在普通流内，在浮动盒之前或者之后创建的未定位的（non-positioned）块盒会竖直排列，就像浮动不存在一样。然而，接着（next to）浮动（盒）创建的当前及后续行盒会进行必要的缩短，为了给浮动（盒）的margin box让出空间

[w3.org](https://www.w3.org/TR/CSS2/visuren.html#floats) [mdn](https://developer.mozilla.org/zh-CN/docs/CSS/float)

## 浮动的例子讲解
### 放不下会换行
![](http://7xpvnv.com2.z0.glb.qiniucdn.com/30a6a47f-bf8d-4387-a628-374551b148d2) 


[代码](http://js.jirengu.com/vipe/1/edit?html,output)

### 被卡住
![](http://7xpvnv.com2.z0.glb.qiniucdn.com/47c65f00-2a0a-4957-98d7-9a6e96dbf588) 

[代码](http://js.jirengu.com/vipe/6/edit)


### 文本被缩短下移动

![](http://7xpvnv.com2.z0.glb.qiniucdn.com/aab5be37-54fc-4f6c-adc2-34e318133b54) 

[代码](http://js.jirengu.com/vipe/5/edit)

### 脱离普通流?!
[代码](http://js.jirengu.com/tiye/1/edit)

> 注意和absolute 不一样

### 块级元素浮动宽度收缩
[代码](http://js.jirengu.com/muha/1/edit)

> width: 100% 的用武之地

### 行内元素浮动以块级特性呈现
[代码](http://js.jirengu.com/muha/1/edit)

> 不用再写 display: inline-block; 

## 浮动的使用场景
### 两栏布局
[左侧固定宽度，右侧自适应](http://js.jirengu.com/vefu/1/edit)

[右侧固定宽度，左侧自适应](http://js.jirengu.com/lete/1/edit)

### 三栏布局
[简单的三栏布局](http://js.jirengu.com/jawu/1/edit)

> 注意 menu、aside、main 的顺序！

### 导航条
[左浮导航条](http://js.jirengu.com/zece/1/edit)

[右浮动导航条](http://js.jirengu.com/nilu/1/edit) DOM顺序不变

## 清除浮动

### clear:left?
- clear: left; 要求该盒的top border边位于源文档中在此之前的元素形成的所有左浮动盒的bottom外边下方
- clear: right; 要求该盒的top border边位于源文档中在此之前的元素形成的所有右浮动盒的bottom外边下方

[问题:box2设置clear:right有效吗?](http://js.jirengu.com/taja/1/edit?html,output)

> 注意要求的是自己，不是别人


### 浮动的副作用

- [问题1](http://js.jirengu.com/sado/1/edit)：对后续元素位置产生影响
- [问题2](http://js.jirengu.com/towu/1/edit)： 父容器高度计算出现问题

### 清除浮动

> 给包含浮动元素的容器设置 clearfix

```
.clearfix{
  content:'';
  display: block;
  clear: both;
}
```
- [解决](http://js.jirengu.com/vuju/1/edit?html,output)
- [解决](http://js.jirengu.com/towu/2/edit)

## 浮动与BFC
> 浮动元素创建 BFC

- 可用来 「解释/顺道解决 」外边距合并问题
- 可用来 「解释/顺道解决」 清除浮动问题

## 浮动和负边距
> 两个浮动元素，如果因放不下导致其中一个下移，对下移的元素设置负 margin 值大于自身的宽度可将其上移

[代码](http://js.jirengu.com/nucu/1/edit?html,output)

## 用 inline-block 还是 浮动
- inline-block 优势: 不需要清除浮动，简单，在设置居中时更方便,适合子内容不多的元素水平排列
- inline-block 劣势: 需要注意缝隙，注意对齐，ie8以下不能用
- float优势: 兼容性好，没缝隙问题
- float劣势: 需要清除浮动，适合稍大的布局

## 用 定位 还是 浮动
- 大布局、自适应 用浮动
- 小元素、固定宽高 用定位
- 结合实际情况是关键

