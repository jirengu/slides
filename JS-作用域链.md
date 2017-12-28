# 作用域链
by 若愚@饥人谷

## 先上菜

```
var x = 10
bar()
function foo() {
  console.log(x)
}
function bar(){
  var x = 30
  foo() //  输出什么
}

```
```
var x = 10;
bar() //  输出什么
function bar(){
  var x = 30;
  function foo(){
    console.log(x)
  }
  foo();
}

```

## 相关概念
- 执行上下文 executionContext
- 活动对象 AO
- Scope 属性

## 执行顺序

## 范例1
```
var x = 10
bar()
function foo() {
  console.log(x)
}
function bar(){
  var x = 30
  foo() //  输出什么
}

```
### 

```

globalContext = {
  AO: {
    x: 10
    foo: function
    bar: function
  },
  Scope: null
}

//声明 foo 时 得到下面
foo.[[scope]] = globalContext.AO
//声明 bar 时 得到下面
bar.[[scope]] = globalContext.AO

```
注意： 在当前的执行上下文内声明的函数，这个函数的[[scope]]就执行当前执行上下文的 AO

### 
当调用 `bar()` 时， 进入 `bar` 的执行上下文 
```
barContext = {
  AO: {
    x: 30
  },
  Scope: bar.[[scope]] //globalContext.AO
}
```

###
当调用 `foo()` 时，先从 bar 执行上下文中的 AO里找，找不到再从 bar 的 [[scope]]里找

找到后即调用

### 
当调用 `foo()` 时，进入 `foo` 的执行上下文
``` 
fooContext = {
  AO: {},
  Scope: foo.[[scope]] // globalContext.AO
}

```
所以 `console.log(x)`是 10

## 范例2
```
var x = 10;
bar() //  输出什么
function bar(){
  var x = 30;
  function foo(){
    console.log(x)
  }
  foo();
}

```
### 

```

globalContext = {
  AO: {
    x: 10
    bar: function
  },
  Scope: null
}

//声明 bar 时 得到下面
bar.[[scope]] = globalContext.AO

```
注意： 在当前的执行上下文内声明的函数，这个函数的[[scope]]就执行当前执行上下文的 AO

### 
当调用 `bar()` 时， 进入 `bar` 的执行上下文 
```
barContext = {
  AO: {
    x: 30,
    foo: function
  },
  Scope: bar.[[scope]] //globalContext.AO
}
//在 bar 的执行上下文里声明 foo 时 得到下面
foo.[[scope]] = barContext.AO
```

###
当调用 `foo()` 时，先从 bar 执行上下文中的 AO里找，找到后即调用

### 
当调用 `foo()` 时，进入 `foo` 的执行上下文
``` 
fooContext = {
  AO: {},
  Scope: foo.[[scope]] // barContext.AO
}

```
所以 `console.log(x)`是 30


## 笔试题

```
var a = 1;

function fn(){
  console.log(a); 
  var a = 5;
  console.log(a);  
  a++;
  var a;
  fn3();
  fn2();
  console.log(a);

  function fn2(){
    console.log(a); 
    a = 20;
  }
}

function fn3(){
  console.log(a)
  a = 200;
}

fn();
console.log(a); 

```













