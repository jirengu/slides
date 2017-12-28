# BFC
讲解了 BFC、IFC 相关概念和作用

## 视觉格式化模型(visual formatting model)
规定了浏览器如何在屏幕上绘制元素。在视觉格式化模型中,每个元素根据盒模型创建零个或者多个盒子，盒子的布局由以下因素决定：

1. 盒子的尺寸和**类型**
2. 定位机制(normal flow, float, ansolute positionging)
3. 元素在文档树中的关系
4. 其它因素(viewport size, 图片的本身的尺寸等) 

## 包含块(Containing blocks)

包含块是相对概念(相对于它的后代)，当我们说”一个盒子的包含块“是指这个盒子所在的块，而不是这个盒子本身创建的块

每个盒子都拥有一个相对于它包含块的位置，但并不受限于它的包含块，比如它可能会溢出

## 块级元素(Block-level elements)和块盒(Block boxes)

块级元素是那些被视觉上展现为块的元素，比如 display 默认为 `block`、`list-item`、`table`的元素

每一个块级元素生成一个主**块级盒**(principal block-level box),它包含后代盒以及产生的内容

除了 table 盒以及可替换元素(replaced elements, 如img, object, video, canvas等)，一个**块级盒**也是一个**块容器盒**(block container box)。块容器盒要么只包含块级盒子，要么建立一个只包含内联盒子的**内联格式化上下文**(inline formatting content)

不一定所有的块容器盒都是块级盒，比如非可替换内联块(no-replaced inline blocks，如a)也是块容器盒，但不是块级盒子

即是块级盒子，又是块容器盒的叫做*块盒*(block boxes)

### 匿名块盒
```
<div>
   hello
   <p>wolrd</p>
</div>
```
hello

## 行级元素(inline-level elements)和行盒(inline boxes)
行级元素是指那些内容分布在一行的元素。比如 display 默认为: `inline`、`inline-table`、`inline-block`。行级元素创建行级盒子，参与内联格式上下文（inline formatting content, IFC）

行盒是指那些既是行级元素，并且它的内容参与包含它的内联格式化上下文的元素。display: inline 的非替换元素(如a, span)创建一个行盒.

一些行级盒子不是行盒（例如替换的行级元素，inline-block元素和 inline-table元素）称为原子行级盒子，因为它们作为单个不透明的框参与其内联格式化上下文。

### 匿名行盒
直接包含在块容器元素（不是直接在内联元素里）里的文本被当成一个匿名内联元素，生成一个匿名行盒

## 格式化上下文( Formatting contexts)
每个渲染区域用formatting context表示，它决定了其子元素将如何定位，以及和其他元素的关系和相互作用

在正常流中的盒子要么属于块级格式化上下文，要么属于内联格式化上下文

## 块级格式化上下文(Block formatting contexts)
哪些元素生成 BFC

1. 根元素；
2. float属性不为none；
3. position为absolute或fixed；
4. display为inline-block, flex, 或者inline-flex；
5. overflow不为visible；

### 特性
- 内部的Box会在垂直方向，一个接一个地放置。
- Box垂直方向的距离由margin决定。属于同一个BFC的两个相邻Box的margin会发生重叠每个元素的margin box的左边，与包含块border box的左边相接触(对于从左往右的格式化，否则相反)。即使存在浮动也是如此。
- BFC的区域不会与float box重叠。
- BFC就是页面上的一个隔离的独立容器，容器里面的子元素不会影响到外面的元素。反之也如此。
- 计算BFC的高度时，浮动元素也参与计算。　

### 作用
1. margin 合并
2. contain float

## 内联格式化上下文(Inline formatting contexts)
IFC也是一种布局规则

块容器盒里面只有行级元素的时候，自动生成 IFC


## 参考
1. https://www.w3.org/TR/CSS21/visuren.html#block-boxes
2. http://www.cnblogs.com/Candybunny/p/6222939.html


