# 继承者们
by 若愚@饥人谷

## 面向对象的特性
- 封装
- 继承
- 多态

![来源自知乎](http://pic1.zhimg.com/664ba37eeee9f4623c06c066867f1d38_b.jpg)

## 什么是继承
> 人:      姓名，年纪，会说话，会走路

> 程序员:   姓名, 年纪, 爱好, 会说话, 会走路，会写代码

> 女程序员: 姓名, 年纪，会说话，会走路，会写代码，女

### 人
```
function People(name, age){
  this.name = name;
  this.age = age;
}
People.prototype = {
  walk: function(){
    console.log(this.name + ' is ' + 'walking...');
  },
  say: function(){
    console.lo(this.name + ' is ' + 'talking...' );
  }
}

var people = new People('小明', 18);

```

### 程序员
```
function Programmer(name, age, hobby){
  this.name = name;
  this.age = age;
  this.hobby = hobby;
}
Programmer.prototype = {
  walk: function(){
    console.log(this.name + ' is ' + 'walking...');
  },
  say: function(){
    console.lo(this.name + ' is ' + 'talking...' );
  },
  coding: function(){
    console.log(this.name + ' is ' + 'coding...');
  }
}
```
### 女程序员
```
function FemaleProgrammer(name, age, hobby, sex){
  this.name = name;
  this.age = age;
  this.hobby = hobby;
  this.sex = sex;
}
FemaleProgrammer.prototype = {
  walk: function(){
    console.log(this.name + ' is ' + 'walking...');
  },
  say: function(){
    console.lo(this.name + ' is ' + 'talking...' );
  },
  coding: function(){
    console.log(this.name + ' is ' + 'coding...');
  },
  buying: function(){
    console.log(this.name + ' is ' + 'buying...');
  }
}
```


## 属性的继承
```
function Programmer(name, age, hobby){
  People.call(this, name, age);
  this.hobby = hobby;
}
var programmer = new Programmer('小谷', 2, 'drive')
```

> call有什么作用？



## 方法的继承
```
Programmer.prototype = Object.create(People.prototype);
```

> Object.create 有什么作用?
> b = Object.create(a) ==> b.__proto__ = a

## 完整代码
```
function People(name, age){
  this.name = name;
  this.age = age;
}
People.prototype = {
  walk: function(){
    console.log(this.name + ' is ' + 'walking...');
  },
  say: function(){
    console.lo(this.name + ' is ' + 'talking...' );
  }
}

function Programmer(name, age, hobby){
  People.call(this, name, age);
  this.hobby = hobby;
}
Programmer.prototype = Object.create(People.prototype);
Programmer.prototype.constructor = Programmer;
Programmer.prototype.coding = function(){console.log('coding...')}
var p = new Programmer('小谷', 2, 'drive')
p.coding()
```

## Objec.create 不能用怎么办!
```
function People(name, age){
  this.name = name;
  this.age = age;
}
People.prototype = {
  walk: function(){
    console.log(this.name + ' is ' + 'walking...');
  },
  say: function(){
    console.log(this.name + ' is ' + 'talking...' );
  }
}

function Programmer(name, age, hobby){
  People.call(this, name, age);
  this.hobby = hobby;
}
function inherit(superClass, subClass){
  var temp = function(){}
  temp.prototype = superClass.prototype
  subClass.prototype =  new temp()
  subClass.prototype.constructor = subClass
}
inherit(People, Programmer);

Programmer.prototype.coding = function(){console.log('coding...')}
var p = new Programmer('小谷', 2, 'drive')
```

## hasOwnProperty
> 判断属性是不是自有属性

```
p.hasOwnProperty('hobby')
p.hasOwnProperty('coding')
p.hasOwnProperty('say')
```

