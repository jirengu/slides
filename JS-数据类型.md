# 数据类型
by 若愚@饥人谷

## 数据类型分类
JavaScript语言的每一个值，都属于某一种数据类型。JavaScript的数据类型，共有六种。

- 数值（number）：整数和小数（比如1和3.14）
- 字符串（string）：字符组成的文本（比如"Hello World"）
- 布尔值（boolean）：`true`（真）和`false`（假）两个特定值
- undefined：表示“未定义”或不存在，即此处目前没有任何值
- null：表示空缺，即此处应该有一个值，但目前为空
- 对象（object）：各种值组成的集合

### 范例
```
var num = 100;
var str = 'jirengu';
var isOk = true ;
var hello;  //undefined
var empty = null; 
var person = {
  name: '若愚',
  age: 100
}
var arr = [1, 2, 3];
var sayName = function(){
  console.log('my name is jirengu')
}
var reg = /hello/;

```

### 原始类型和复杂类型
数值、字符串、布尔值称为原始类型（primitive type）的值，即它们是最基本的数据类型，不能再细分了。

将对象称为复杂类型（complex type）的值，因为一个对象往往是多个原始类型的值的合成，可以看作是一个存放各种值的容器。

至于`undefined`和`null`，一般将它们看成两个特殊值。

### 对象的细分
对象又可以分成三个子类型。

- 狭义的对象（object）
- 数组（array）
- 函数（function）
- 正则表达式 (regexp)



## typeof运算符

JavaScript有三种方法，可以确定一个值到底是什么类型。

- `typeof`运算符
- `instanceof`运算符
- `Object.prototype.toString`方法

`instanceof`运算符和`Object.prototype.toString`方法，将在后文相关章节介绍。这里着重介绍`typeof`运算符。

`typeof`运算符可以返回一个值的数据类型，可能有以下结果。

### 原始类型

数值、字符串、布尔值分别返回`number`、`string`、`boolean`。

```javascript
typeof 123 // "number"
typeof '123' // "string"
typeof false // "boolean"
```

### 函数

函数返回`function`。

```javascript
function f() {}
typeof f
// "function"
```

### undefined

`undefined`返回`undefined`。

```javascript
typeof undefined
// "undefined"
```

### typeof undefined 范例
利用这一点，typeof可以用来检查一个没有声明的变量，而不报错。

```javascript
v  // ReferenceError: v is not defined
typeof v // "undefined"
```

实际编程中，这个特点通常用在判断语句。

```javascript
// 错误的写法
if (v) { }  // ReferenceError: v is not defined

// 正确的写法
if (typeof v === "undefined") { }
```

### 其他

除此以外，其他情况都返回`object`。

```javascript
typeof window // "object"
typeof {} // "object"
typeof [] // "object"
typeof null // "object"
```

### 区分数组和对象

```javascript
var o = {};
var a = [];

o instanceof Array // false
a instanceof Array // true
```


## null 和 undefined
可选

### 渊源
```

`null`与`undefined`都可以表示“没有”，含义非常相似。将一个变量赋值为`undefined`或`null`，老实说，语法效果几乎没区别。


var a = undefined;
var a = null;


上面代码中，a变量分别被赋值为`undefined`和`null`，这两种写法的效果几乎等价。

在`if`语句中，它们都会被自动转为`false`，相等运算符（`==`）甚至直接报告两者相等。


if (!undefined) {
  console.log('undefined is false');
}
// undefined is false

if (!null) {
  console.log('null is false');
}
// null is false

undefined == null
// true


上面代码说明，两者的行为是何等相似！Google公司开发的JavaScript语言的替代品Dart语言，就明确规定只有`null`，没有`undefined`！

既然含义与用法都差不多，为什么要同时设置两个这样的值，这不是无端增加复杂度，令初学者困扰吗？这与历史原因有关。

1995年JavaScript诞生时，最初像Java一样，只设置了`null`作为表示"无"的值。根据C语言的传统，`null`被设计成可以自动转为0。


Number(null) // 0
5 + null // 5


但是，JavaScript的设计者Brendan Eich，觉得这样做还不够，有两个原因。

首先，null像在Java里一样，被当成一个对象。但是，JavaScript的数据类型分成原始类型和合成类型两大类，Brendan Eich觉得表示"无"的值最好不是对象。

其次，JavaScript的最初版本没有包括错误处理机制，发生数据类型不匹配时，往往是自动转换类型或者默默地失败。Brendan Eich觉得，如果`null`自动转为0，很不容易发现错误。

因此，Brendan Eich又设计了一个`undefined`。他是这样区分的：`null`是一个表示"无"的对象，转为数值时为0；`undefined`是一个表示"无"的原始值，转为数值时为`NaN`。


Number(undefined) // NaN
5 + undefined // NaN


但是，这样的区分在实践中很快就被证明不可行。目前`null`和`undefined`基本是同义的，只有一些细微的差别。

`null`的特殊之处在于，JavaScript把它包含在对象类型（object）之中。


typeof null // "object"


上面代码表示，查询`null`的类型，JavaScript返回`object`（对象）。

这并不是说null的数据类型就是对象，而是JavaScript早期部署中的一个约定俗成，其实不完全正确，后来再想改已经太晚了，会破坏现存代码，所以一直保留至今。

注意，JavaScript的标识名区分大小写，所以`undefined`和`null`不同于`Undefined`和`Null`（或者其他仅仅大小写不同的词形），后者只是普通的变量名。
```

### 用法和含义

对于`null`和`undefined`，可以大致可以像下面这样理解。

`null`表示空值，即该处的值现在为空。典型用法是：

- 作为函数的参数，表示该函数的参数是一个没有任何内容的对象。
- 作为对象原型链的终点。

`undefined`表示不存在值，就是此处目前不存在任何值。典型用法是：

- 变量被声明了，但没有赋值时，就等于undefined。
- 调用函数时，应该提供的参数没有提供，该参数等于undefined。
- 对象没有赋值的属性，该属性的值为undefined。
- 函数没有返回值时，默认返回undefined。

### 举例
```javascript
var i;
i // undefined

function f(x){console.log(x)}
f() // undefined

var  o = new Object();
o.p // undefined

var x = f();
x // undefined
```


## Boolean

布尔值代表“真”和“假”两个状态。“真”用关键字`true`表示，“假”用关键字`false`表示。布尔值只有这两个值。

下列运算符会返回布尔值：

- 两元逻辑运算符： `&&` (And)，`||` (Or)
- 前置逻辑运算符： `!` (Not)
- 相等运算符：`===`，`!==`，`==`，`!=`
- 比较运算符：`>`，`>=`，`<`，`<=`

### 转换为false的类型
如果JavaScript预期某个位置应该是布尔值，会将该位置上现有的值自动转为布尔值。转换规则是除了下面六个值被转为`false`，其他值都视为`true`。

- `undefined`
- `null`
- `false`
- `0`
- `NaN`
- `""`（空字符串）

### 范例

```javascript
if ('') {
  console.log(true);
}
// 没有任何输出
```

上面代码的`if`命令后面的判断条件，预期应该是一个布尔值，所以JavaScript自动将空字符串，转为布尔值`false`，导致程序不会进入代码块，所以没有任何输出。

### 空对象和空数组的转换
需要特别注意的是，空数组（`[]`）和空对象（`{}`）对应的布尔值，都是`true`。

```javascript
if ([]) {
  console.log(true);
}
// true

if ({}) {
  console.log(true);
}
// true
```
## Number

JavaScript的数字类型和其它语言有所不同，没有整型和浮点数的区别，统一都是Number类型，可以表示十进制、八进制、十六进制
```
	var a = 10; //十进制
	var b = 073; //八进制
	vat c = 0xf3; //十六进制
```
### 浮点数

浮点数是指数字包含小数点，小数点后至少有一位数字(没有或者是0会转为整数)，前面可以没有
```
	var a = 0.27;
	var b = .45;
```

对于极大或极小的数字可以使用科学计数法
```
	var a = 3.1e5; //310000
```
浮点数最高精度是17位，但是在计算的时候精度不如整数
```
	1 - 0.9; // 0.09999999999999998
	0.1 + 0.2; //0.30000000000000004
```
### Infinity

JavaScript Number不能表示所有数字，Infinity 表示无穷大
```  
  1/0  //Infinity
```

### NaN

NaN含义是Not a Number，表示非数字，NaN和任何值都不相等，包括自己
```
	NaN == NaN; //false
  parseInt('abc'); //NaN
```
### 数值转换

有三个函数可以把非数值转换为数值

```
1. Number()
2. parseInt()
3. parseFloat()
```
### parseInt parseFloat

1. 忽略字符串前面的空白字符，找到第一个非空白字符
2. 如果第一个字符不是`-`或者数字返回`NaN`
3. 如果是继续解析，直到非数值模式为止
4. `0`开头会当做八进制，`0x`开头会当做十六进制，但是可以指定第二个参数指定基数
```

	parseInt('blue'); //NaN
	parseInt('-23ABS'); // -23
	parseInt('0xf1'); // 241
	parseInt('101', 2); // 5

```
[数值参考](http://javascript.ruanyifeng.com/grammar/number.html)

## String

String是Unicode字符组成的序列，俗称字符串，可以用双引号或者单引号表示，没有区别，匹配即可
```
var str = 'hello';
var str2 = "jirengu";
var str3 = 'hello "ruoyu" ';

```


## Object


对象，就是一种无序的数据集合，由若干个“键值对”（key-value）构成。key我们称为对象的属性，value可以是任何JavaScript类型，甚至可以是对象
```
  var obj = {
    name: 'jirengu',
    age: 2
  };
```

object的属性读取有两种方式

```
	obj.name;
	obj['name'];
```


## 参考
- http://javascript.ruanyifeng.com/grammar/basic.html

