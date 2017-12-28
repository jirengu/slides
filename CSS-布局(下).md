# CSS布局(下)
by 若愚@饥人谷

## 课程内容
- 浮动 vs 负margin
- 水平等距排列
- 圣杯布局
- 双飞翼布局

## 浮动 vs 负margin
对于相邻的两个浮动元素，如果因为空间不够导致第二个浮动元素下移，可以通过给第二个浮动元素设置 `margin-left: 负值` 来让第二个元素上移，其中 `负值` 大于等于元素上移后和第一个元素重合的临界值

### 
三个浮动元素

![三个浮动元素](http://7xpvnv.com2.z0.glb.qiniucdn.com/d425977a-04be-4c01-9a32-c2ac9bea91cd) 

最后一个浮动元素使用了负边距

![使用了负边距](http://7xpvnv.com2.z0.glb.qiniucdn.com/4e8403cd-46a8-4954-be37-4c3ebc1aec46) 

###  范例演示
[范例](http://js.jirengu.com/jobi)  想想最后一个元素为什么要设置为 -20px?
```
.float{
    overflow:hidden;
    width:280px;
    border:dashed 1px orange;
}

.float .item{
    width:100px;
    height:100px;
    float:left;
}

.float .item:nth-child(1){
    background:red;
}
.float .item:nth-child(2){
    background:grey;
}
.float .item:nth-child(3){
    background:blue;
    margin-left: -20px;  /* 为什么这里是 -20px ??*/
}
</style>

<div class="float">
    <div class="item"></div>
    <div class="item"></div>
    <div class="item"></div>
</div>
```
## 水平等距排列
[范例](http://js.jirengu.com/xute)
```
<style>
ul,li{
  margin: 0;
  padding: 0;
  list-style: none;
}
.ct{
    overflow:hidden;
    width: 640px;
    border:dashed 1px orange;
    margin: 0 auto;
}

.ct .item{
    float:left;
    margin-left: 20px;
    margin-top: 20px;
    width:200px;
    height:200px;
    background: red;
}
.ct>ul{
  margin-left: -20px;
}

</style>
<div class="ct">
  <ul>
    <li class="item">1</li>
    <li class="item">2</li>
    <li class="item">3</li>
    <li class="item">4</li>
    <li class="item">5</li>
    <li class="item">6</li>
    <li class="item">7</li>
    <li class="item">8</li>
  </ul>
</div>
```
## 圣杯布局
why it?

1. 是三列布局，两边固定宽度，中间自适应
2. 中间内容元素在 dom 元素次序中优先位置
 
### 实现
按照注释编号，一行行实现观察效果 [范例](http://js.jirengu.com/poya/1/edit?html,output)
```
  <style>
    #content:after{
      content: '';        /*8*/
      display: block;     /*8*/
      clear: both;        /*8*/
    }
    #content{
      padding-left: 100px;  /*5*/
      padding-right: 150px; /*5*/
    }
    .aside, .main, .extra{
      float: left;         /*2*/
    }
    
    .aside{
      width: 100px;        /*1*/
      height: 300px;       /*1*/
      background: red;     /*1*/
      
      margin-left: -100%;  /*4*/
      position: relative;  /*6*/
      left: -100px;        /*6*/
    }
    .extra{
      width: 150px;        /*1*/
      height: 300px;       /*1*/
      background: yellow;  /*1*/
      
      margin-left: -150px; /*5*/
      position: relative;  /*7*/
      left: 150px;         /*7*/
      
    }
    .main{
      height: 350px;       /*1*/
      background: blue;    /*1*/
      
      width: 100%;         /*3*/
    }
  
  </style>

  <div id="content">
    <div class="main">main</div>
    <div class="aside">aside</div>
    <div class="extra">extra</div>
  </div>

```
### 缺点
`.mian`的最小宽度不能小于`.aside`的宽度

why?

## 双飞翼布局
按照注释编号，一行行实现观察效果 [范例](http://js.jirengu.com/tewom/2/edit)

解决了什么问题?

```
  <style>
    
    #content:after{
      content: '';        /*8*/
      display: block;     /*8*/
      clear: both;        /*8*/
    }
    #content{
  
    }
    .aside, .main, .extra{
      float: left;         /*2*/
    }
    
    .aside{
      width: 100px;        /*1*/
      height: 300px;       /*1*/
      background: red;     /*1*/
      
      margin-left: -100%;  /*4*/

    }
    .extra{
      width: 150px;        /*1*/
      height: 300px;       /*1*/
      background: yellow;  /*1*/
      
      margin-left: -150px; /*5*/

      
    }
    .main{
      /* background: blue;  */   /*第1步添加，第7步注释掉*/
      /* height: 350px;  */      /*第1步添加，第7步注释掉*/
      
      width: 100%;         /*3*/
    }
    
    .wrap{
      margin-left: 100px;  /*6*/
      margin-right: 150px; /*6*/
      background: blue;    /*7*/
      height: 350px;       /*7*/
 
    }
  
  </style>
  
  <div id="content">
    <div class="main">
      <div class="wrap">main</div>
    </div>
    <div class="aside">aside</div>
    <div class="extra">extra</div>
  </div>

```





