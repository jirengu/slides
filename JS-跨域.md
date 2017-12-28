# 跨域
by 若愚@饥人谷

##  同源策略(Same origin Policy)

浏览器出于安全方面的考虑，只允许与本域下的接口交互。不同源的客户端脚本在没有明确授权的情况下，不能读写对方的资源。

本域指的是？

- 同协议：如都是http或者https
- 同域名：如都是http://jirengu.com/a 和http://jirengu.com/b
- 同端口：如都是80端口

### 
如：

- http://jirengu.com/a/b.js 和 http://jirengu.com/index.php (同源)

不同源的例子：

- http://jirengu.com/main.js 和 https://jirengu.com/a.php (协议不同)
- http://jirengu.com/main.js 和 http://bbs.jirengu.com/a.php  (域名不同，域名必须完全相同才可以)
- http://jiengu.com/main.js 和 http://jirengu.com:8080/a.php (端口不同,第一个是80)



**需要注意的是: 对于当前页面来说页面存放的 JS 文件的域不重要，重要的是加载该 JS 页面所在什么域 **


## 跨域的几种方法

### JSONP

html中script标签可以引入其他域下的js，比如引入线上的jquery库。利用这个特性，可实现跨域访问接口。需要后端支持

    echo $cb . '&&' . $cb . '(' . json_encode($ret) . ')';


1. 定义数据处理函数_fun
2. 创建script标签，src的地址执行后端接口，最后加个参数callback=_fun
3. 服务端在收到请求后，解析参数，计算返还数据，输出 fun(data) 字符串。
4. fun(data)会放到script标签做为js执行。此时会调用fun函数，将data做为参数。


### CORS
CORS 全称是跨域资源共享（Cross-Origin Resource Sharing），是一种 ajax 跨域请求资源的方式，支持现代浏览器，IE支持10以上。
实现方式很简单，当你使用 XMLHttpRequest 发送请求时，浏览器发现该请求不符合同源策略，会给该请求加一个请求头：Origin，后台进行一系列处理，如果确定接受请求则在返回结果中加入一个响应头：Access-Control-Allow-Origin; 浏览器判断该相应头中是否包含 Origin 的值，如果有则浏览器会处理响应，我们就可以拿到响应数据，如果不包含浏览器直接驳回，这时我们无法拿到响应数据。所以 CORS 的表象是让你觉得它与同源的 ajax 请求没啥区别，代码完全一样。




### 降域


范例:

- [a.html](../../code/跨域/降域/a.html)  
- [b.html](../../code/跨域/降域/b.html)



### postMessage


范例:

- [a.html](../../code/跨域/postMessage/a.html)  
- [b.html](../../code/跨域/postMessage/b.html)




## 参考
- [wikipedia-JSONP](https://zh.wikipedia.org/wiki/JSONP)
- [wikipedia-CORS](https://zh.wikipedia.org/wiki/%E8%B7%A8%E4%BE%86%E6%BA%90%E8%B3%87%E6%BA%90%E5%85%B1%E4%BA%AB)
