# CSS常见样式[下]
by 若愚@饥人谷


## 背景


|属性 |描述|
|---|---|
|background|  简写属性，作用是将背景属性设置在一个声明中|
|background-attachment| 背景图像是否固定或者随着页面的其余部分滚动|
|background-color|  设置元素的背景颜色|
|background-image|  把图像设置为背景|
|background-position| 设置背景图像的起始位置|
|background-repeat| 设置背景图像是否及如何重复|
|background-size| 设置背景的大小(兼容性) |


### 

* background-position：默认左上角
  * x y
  * x% y%
  * [top | center | bottom] [left | center | right]

* background-repeat
  * no-repeat：背景图片在规定位置
  * repeat-x：图片横向重复
  * repeat-y：图片纵向重复
  * repeat：全部重复

* background-size
  * `100px 100px`
  * `contain`
  * `cover`

###

```
background-color: #F00;
background-image: url(background.gif);
background-repeat: no-repeat;
background-attachment: fixed;
background-position: 0 0;
```

可以缩写为一句：

```
background: #f00 url(background.gif) no-repeat fixed 0 0;
```

### CSS Sprite
- 指将不同的图片/图标合并在一张图上。
- 使用CSS Sprite 可以减少网络请求，提高网页加载性能。

## 隐藏or透明
- `opacity: 0` ; 透明度为0，整体
- `visibility: hidden` ;  和opacity:0 类似
- `display:none`; 消失，不占用位置
- `background-color: rgba(0，0，0，0.2)` 只是背景色透明


## inline-block
> - 既呈现 inline 特性(不占据一整行，宽度由内容宽度决定)
> - 又呈现 block 特性 (可设置宽高，内外边距)
> - 缝隙问题

## line-height 
> - line-height: 2
> - line-height: 100%
> - height = line-heihgt 来垂直居中单行文本

## 盒模型

### 
![](http://lsly1989.qiniudn.com/201503151.JPG)

###
![](http://lsly1989.qiniudn.com/201503152.JPG)


### 区别

W3C标准中`padding`、`border`所占的空间不在width、height范围内，大家俗称的IE的盒模型width包括`content尺寸`＋`padding`＋`border`

###

> ie678怪异模式（不添加 doctype）使用 ie 盒模型，`宽度=边框+padding+内容宽度`

![](http://7xpvnv.com2.z0.glb.qiniucdn.com/93138fc5-aec8-4693-9065-5d99dee1f223.jpg)

###

> `chrome， ie9+, ie678(添加 doctype) 使用标准盒模型， 宽度= 内容宽度`

![](http://7xpvnv.com2.z0.glb.qiniucdn.com/d419e9a6-90c6-4c85-814f-36795e1ee03b.jpg)



### 使用css3新样式box-sizing


1.  `box-sizing: content-box`：w3c标准盒模型
2.  `box-sizing: border-box`：“IE盒模型”

```
  <div style="height:200px;width:200px;border:solid 10px #333;padding:100px;box-sizing: border-box;">
  </div>
```


