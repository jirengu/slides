# 函数
by 若愚@饥人谷

## 
涉及知识点：

1. 函数的声明方式
2. 参数、返回值
3. 声明前置
4. 作用域
5. 立即执行函数表达式
6. 递归

## 函数是什么
JavaScript函数是指一个特定代码块，可能包含多条语句，可以通过名字来供其它语句调用以执行函数包含的代码语句。

### 
比如我们有一个特定的功能需要三条语句实现
```
  statement1;
  statement2;
  statement3;
```
那么每次想实现这个功能的时候就需要写这三句话，很麻烦，我们可以把这三条语句打包为一个函数
```
  function doSomething(){
    statement1;
    statement2;
    statement3;
  }
```
这样每次想实现功能的时候我们就**调用**一下函数就可以了，调用函数通过`函数名称()`的形式调用

```
  doSomething();
```
## 声明函数

ECMAScript规定了三种声明函数方式


### 构造函数

首先函数也是对象的一种，我们可以通过其构造函数，使用`new`来创建一个函数对象
```
  var sayHello = new Function("console.log('hello world');");
```
不推荐使用

### 函数声明

使用`function`关键字可以声明一个函数
```
  //函数声明
  function sayHello(){
    console.log('hello')
  }

  //函数调用
  sayHello()
```
声明**不必**放到调用的前面

### 函数表达式
```
  var sayHello = function(){
    console.log('hello');
  }

  sayHello()
```
声明**必须**放到调用的前面

## 参数
```
  function sayHello(name){
    console.log('hello ' +  name)
  }

  sayHello('若愚')
  sayHello('饥人谷)
```

### 多个参数

函数在定义的时候可以写多个参数
```
  function printInfo(name, age, sex){
    console.log(name);
    console.log(age);
    console.log(sex);
  }
  printInfo('饥人谷', 2, 'boy')
```

### arguments

在函数内部,你可以使用`arguments`对象获取到该函数的所有传入参数
```
  function printPersonInfo(name, age, sex){
    console.log(name);
    console.log(age);
    console.log(sex);
    console.log(arguments);
  }
```
## 重载

### 其他语言重载范例
```
int sum(int num1, int num2){
  return num1 + num2;
}

float sum(float num1, float num2){
  return num1 + num2;
}

sum(1, 2);
sum(1.5, 2.4);

```


### 在 JS 中
没有重载! 同名函数会覆盖。 但可以在函数体针对不同的参数调用执行相应的逻辑

```

  function printPeopleInfo(name, age, sex){
    if(name){
      console.log(name);
    }

    if(age){
      console.log(age);
    }

    if(sex){
      console.log(sex);
    }
  }


  printPeopleInfo('Byron', 26);
  printPeopleInfo('Byron', 26, 'male');
```

## 返回值

有时候我们希望在函数执行后得到一个结果供别人使用，可以通过`return`来实现

```
  function sum(a, b){
    a++;
    b++;
    return a + b;
  }

  var result = sum(2, 3);
  conslole.log(result);

```
### 注意点
如果不写return语句，函数也会默认给我们返回`undefined`

### 注意点2
函数在执行过程中，只要遇到`return `就会立即结束退出函数体

```
function fn(a){
  if(a < 0){
    return;  
  }
  //下面没用 else ，但效果一样
  a++;
  return a + a;
}
```

### 注意点3
函数的返回值和 `console.log()`是两个不同的东西，千万不要这样

```
function getAge(age){
  return console.log(age);
}

```



## 声明前置
### `var` 和 `function` 的声明前置

在一个作用域下，`var` 声明的变量和`function` 声明的函数会前置

```
console.log(a); //undefined
var a = 3;
console.log(a); //3

sayHello();

function sayHello(){
  console.log('hello');
}

```

### 函数表达式
```
  console.log(fn); //undefined
  fn(); //报错

  var fn = function(){}
```
函数表达式和 var 一个变量没什么区别

先`有`，再 `用`

### 函数内部的声明前置
```
function fn(){
  console.log(a)  //undefined
  var a = 3
  console.log(a)
}
fn()

```

### 当命名冲突时
先 前置，再 覆盖
```

  var fn = 3;
  function fn(){}

  console.log(fn); // 3
```
```
  
  function fn(){}
  var fn = 3;

  console.log(fn); // 3
```


### 参数重名
```
  function fn(fn){
    console.log(fn);

    var fn = 3;
    console.log(fn);
  }

  fn(10); //10 3
```

## 作用域

在 JS 中只有函数作用域，没有块作用域
```
  function fn(){
    var a =1;

    if(a > 2){
      var b = 3;
    }
    console.log(b);
  }

  fn(); // undefined

  console.log(a); // "ReferenceError: a is not defined
```
## var
### 声明一个已经存在的变量
```
function fn(){}
var fn
console.log(fn)

var a = 1
var a
var a 
console.log(a)

```
`var`重复声明一个已经存在的变量，原变量值不变

### 不加`var`作用
```
  function fn(){
    a = 1;
  }

  fn();

  console.log(a); // 1
```
可以看到不写var会声明一个全局的变量，这是我们在编程中应该要避免的，即使真的需要全局变量，也应该在最外层作用域使用var声明

更深入了解，参考下一节 作用域链


## 递归
1. 自己调用自己
2. 设定终止条件
3. 优点: 算法简单
4. 缺点: 效率低

### 求 n 的阶乘 n!

```
function factor(n){
  if(n === 1) {
    return 1
  }
  return n * factor(n-1)
}

factor(5)
```

### 求 1+2+...+n 的值
```
function sum(n){
  if(n === 1) {
    return 1
  }
  return n + sum(n-1)
}
sum(10)
```

## 立即执行函数表达式
```
(function(){
  var a  = 1;
})()
console.log(a); //undefined
```
作用： 隔离作用域

### 其他写法
```
(function fn1() {});
 
// 在数组初始化器内只能是表达式
[function fn2() {}];
 
// 逗号也只能操作表达式
1, function fn3() {};
```

## 练习题
### 
```
    console.log(j);
    console.log(i);
    for(var i=0; i<10; i++){
        var j = 100;
    }
    console.log(i);
    console.log(j);
```
###
```
  fn();
    var i = 10;
    var fn = 20;
    console.log(i);
    function fn(){
        console.log(i);
        var i = 99;
        fn2();
        console.log(i);
        function fn2(){
            i = 100;
        }
    }
```




