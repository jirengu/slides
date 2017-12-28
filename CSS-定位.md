# CSS 定位
by 若愚@饥人谷



## 基本属性


值     | 属性
:---    | :---
inherit   | 规定应该从父元素继承 position 属性的值
static    | 默认值,没有定位，元素出现在正常的流中（忽略 top, bottom, left, right 或者 z-index 声明）
relative  | 生成相对定位的元素，相对于元素本身正常位置进行定位,因此，`left:20px` 会向元素的 left 位置添加20px
absolute  | 生成绝对定位的元素，相对于`static`定位以外的第一个祖先元素（offset parent）进行定位,元素的位置通过 `left`, `top`, `right` 以及 `bottom` 属性进行规定
fixed   | 生成绝对定位的元素，相对于浏览器窗口进行定位。元素的位置通过 `left`, `top`, `right` 以及 `bottom` 属性进行规定
sticky    | CSS3新属性，表现类似`position:relative`和`position:fixed`的合体，在目标区域在屏幕中可见时，它的行为就像position:relative; 而当页面滚动超出目标区域时，它的表现就像position:fixed，它会固定在目标位置

##  定位机制

CSS有三种基本的定位机制：普通流，浮动，绝对定位(absolute,fixed)


- 普通流是默认定位方式，在普通流中元素框的位置由元素在html中的位置决定，这也是我们最常见的方式，其中`position: static`与`position:relative`属于普通流的定位方式
- 浮动定位定位机制后续讲解
- 绝对定位包括 absolute和 fixed



## Position 的几个值

**static**
```
  <div style="border: solid 1px #0e0; width:200px; position: static;">
      <div style="height: 100px; width: 100px; background-color: Red;">
      </div>
      <div style="height: 100px; width: 100px; background-color: Green;">
      </div>
      <div style="height: 100px; width: 100px; background-color: Red;">
      </div>
  </div>
```
<div style="border: solid 1px #0e0; width:200px; position: static;">
    <div style="height: 100px; width: 100px; background-color: Red;">
    </div>
    <div style="height: 100px; width: 100px; background-color: Green;">
    </div>
    <div style="height: 100px; width: 100px; background-color: Red;">
    </div>
</div>

###
**relative**
```
  <div style="border: solid 1px #0e0; width:200px;">
      <div style="height: 100px; width: 100px; background-color: Red;">
      </div>
      <div style="height: 100px; width: 100px; background-color: Green; position:relative; top:20px; left:20px;">
      </div>
      <div style="height: 100px; width: 100px; background-color: Red;">
      </div>
  </div>
```
<div style="border: solid 1px #0e0; width:200px;">
    <div style="height: 100px; width: 100px; background-color: Red;">
    </div>
    <div style="height: 100px; width: 100px; background-color: Green; position:relative; top:20px; left:20px;">
    </div>
    <div style="height: 100px; width: 100px; background-color: Red;">
    </div>
</div>


## absolute 和 fixed

- 相对定位可以看作特殊的普通流定位，元素位置是相对于它在普通流中位置发生变化，而绝对定位使元素的位置与文档流无关，也不占据文档流空间，普通流中的元素布局就像绝对定位元素不存在一样

- 绝对定位的元素的位置是相对于距离最近的`非static祖先元素`位置决定的。如果元素没有已定位的祖先元素，那么他的位置就相对于初始包含块html来定位[demo](http://js.jirengu.com/jeko)。

- 因为绝对定位与文档流无关，所以绝对定位的元素可以覆盖页面上的其他元素，可以通过`z-index`属性控制叠放顺序，z-index越高，元素位置越靠上。


###
```

  <div style="border: solid 1px #0e0; width:200px; position:relative;">
      <div style="height: 100px; width: 100px; background-color: Red;">
      </div>
      <div style="height: 100px; width: 100px; background-color: Green; position:absolute; top:20px; left:20px;">
      </div>
      <div style="height: 100px; width: 100px; background-color: Yellow;">
      </div>
  </div>
```
<div style="border: solid 1px #0e0; width:200px; position:relative;">
    <div style="height: 100px; width: 100px; background-color: Red;">
    </div>
    <div style="height: 100px; width: 100px; background-color: Green; position:absolute; top:20px; left:20px;">
    </div>
    <div style="height: 100px; width: 100px; background-color: Yellow;">
    </div>
</div>

### 

fixed固定定位，固定定位是绝对定位的一种，固定定位的元素也不包含在普通文档流中，差异是固定元素的包含块儿是视口（viewport）
```
  <div style="border: solid 1px #0e0; width:200px;">
      <div style="height: 100px; width: 100px; background-color: Red;">
      </div>
      <div style="height: 100px; width: 100px; background-color: Green; position:fixed; bottom:20px; left:20px;">
      </div>
      <div style="height: 100px; width: 100px; background-color: Yellow;">
      </div>
  </div>
```
<div style="border: solid 1px #0e0; width:200px;">
    <div style="height: 100px; width: 100px; background-color: Red;">
    </div>
    <div style="height: 100px; width: 100px; background-color: Green; position:fixed; bottom:20px; left:20px;">
    </div>
    <div style="height: 100px; width: 100px; background-color: Yellow;">
    </div>
</div>


## 绝对定位宽度
> 绝对定位宽度是收缩的，如果想撑满父容器，可以设置 `width: 100%`
```
<div style="position: absolute; background: red">
hello 饥人谷
</div>
```
<div style="position: absolute; background: red">
hello 饥人谷
</div>

## 绝对定位和 BFC
> 绝对定位能形成 BFC
> 可用来清除浮动
> 可用来阻止外边距合并

## 绝对定位垂直水平居中

