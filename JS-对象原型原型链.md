# 对象、原型、原型链

by [若愚@饥人谷](http://jirengu.com)

## 关于对象
```
var people = {
  name: '若愚',
  sex: '男',
  sayHi: function(){
    console.log('hi')
  }
}
```
> 一个对象就是一系列属性的集合，一个属性包含一个名字和一个值。一个属性的值可以是函数，这种情况下属性也被称为方法

### 对象字面量
```
var obj1 = new Object()
var obj2 = {}
```

### 对象字面量和 JSON 的关系
```
{
  "name": "若愚",
  "age": 100,
  "friends": ["a", "b"],
  "isHandsome": true,
  "badHabit": null,
  "detail": {}
}
```
1. JSON（JavaScript Object Notation）脱胎自 JavaScript，但它是一种数据交换格式
2. JSON 格式的数据只包括 字符串、数组、数字、布尔、null、对象
3. 键必须用双引号,字符串必须用双引号
4. JS中的对象字面量属性可不加引号，值可以是任意类型，如函数、正则、undefined等

### JSON 对象
> 深拷贝的一种实现方式

```
var obj = {name: '若愚', sex: '男'}
var str = JSON.stringify(obj)
var newObj = JSON.parse(str)
console.log(newObj)
```

### 问题
1. JSON、JSON 字面量、JSON 对象有什么区别?
2. 除了 JSON 你还知道有哪些数据交换格式? [参考](https://zh.wikipedia.org/wiki/JSON)

## 构造函数创建对象
```
function Student(name, sex){
  this.name = name
  this.sex = sex
}
var s1 = new Student('若愚', '男')
var s2 = new Student('方方', '男')
console.log(s1.name)
```
### 执行过程
1. 当 new 一个函数的时候，这个函数就会作为构造函数创建一个对象
2. 函数里面的 this 代表创建的这个对象。给 this添加属性就是给要创建的对象添加属性
3. 上述代码执行流程如下:
  - 创建一个空对象 s1
  - 执行构造函数。里面的 this 代表s1, 给s1 添加属性

## 原型
```
function Student(name, sex){
  this.name = name
}
Student.prototype.sayName = function(){
  console.log(this.name)
}
var s1 = new Student('若愚')
s1.sayName()

```
### 解释说明
1. 任何函数在声明后都有一个属性 prototype，对应的值是一个对象叫原型对象
2. 当 new 这个函数的时候，会作为构造函数创建一个对象
3. 对象里面会有一个__proto__隐藏属性，指向上述构造函数原型对象
4. 当访问对象的属性时先从对象本身里找，找不到再从原型对象里找

![0_1478858480553_prototype.png](http://7xpvnv.com2.z0.glb.qiniucdn.com/796ce43d-9c27-4b0c-a5e6-81f179491577.png) 

### 认识 constructor
```
Student.prototype.constructor === Student
s1.constructor ==> s1.__proto__.constructor === Student

//因为 s1.__proto__ === Student.prototype, 所以
s1 instanceof Student === true
```

![0_1478858814421_constructor.png](http://7xpvnv.com2.z0.glb.qiniucdn.com/4ad99816-5c99-4748-a33c-65a7630667b5.png) 


## 原型链
```
function Student(name, sex){
  this.name = name
}
Student.prototype.sayName = function(){
  console.log(this.name)
}
var s1 = new Student('若愚')
s1.sayName()
s1.toString()

```

- 问题： toString 这个方法是哪里来的?
- 问题：既然对象是由函数new 出来的，那 Student.prototype这个对象是谁 new 出来的？

###  原型链取值
![student.png](http://7xpvnv.com2.z0.glb.qiniucdn.com/2a2f7a6d-770a-4abf-93bf-53feb0be3ea2.png) 

```
s1.toString() ==> s1.__proto__.toString()
              ==> s1.__proto__.__proto__.toString()
```
### 原型链图

1. Student 是函数，Student 创建了 s1， Student.prototype == s1.__proto__
2. Student.prototype 是对象, Student.prototype 是由函数 Object 创建，所以 Student.prototype.__proto__ === Object.prototype
3. 当获取一个对象的属性时，先从自己身上找==> 自己的 __proto__ 对象上找 ==> __proto__.__proto__ 上找, 一直到终点

![原型链](http://7xpvnv.com2.z0.glb.qiniucdn.com/892def4d-e3ee-49b0-97b8-45a92debd7c3.png) 

### 发散
1. 对象拥有属性，而Student是个函数，确能 Student.prototype 调用，难道 Student 也是个对象?
2. 如果Student 是个对象，那谁创建了它?
3. 谁创建了 Object?
4. var a = 1; 和 var a = new Number(1) 有什么区别?
5. 原型链能实现什么目的？

### 完





