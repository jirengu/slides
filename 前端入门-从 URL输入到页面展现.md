# 从URL输入到页面展现

by 若愚@[饥人谷](http://jirengu.com)

## 第一步. 在浏览器输入URL

### URL是什么
> - URL: 统一资源定位符，用于定位互联网上的资源
> - http、https、ftp、file 协议

```
http://jirengu.com/blog
file:///Users/hunger/workspace/a.html
https://10.245.23.456:3000/users
//jirengu.com/static/imgs/a.png
```
## 第二步. 域名解析
对于 `http://jirengu.com`的URL，浏览器实际上不知道 `jirengu.com`到底是什么东西，需要查找`jirengu.com`网站所在服务器的IP地址，才能找到目标

> 1. 为什么要发明域名，不直接用IP?

### 域名是什么
对于`http://jirengu.com:8080/blog` , `jirengu.com`就是域名

### IP地址是什么
- 每个处于互联网中的设备都有IP 地址，形如 `192.168.0.1`
- 局域网 IP 和公网 IP 是有差别的
- `127.0.0.1`代表本机的 IP

### 域名解析的流程
1. 浏览器缓存 – 浏览器会缓存DNS记录一段时间 
2. 系统缓存 - 从 Hosts 文件查找是否有该域名和对应 IP。
3. 路由器缓存 – 一般路由器也会缓存域名信息。
4. ISP DNS 缓存 – 比如到电信的 DNS 上查找缓存。
5. 如果都没有找到，则向根域名服务器查找域名对应 IP，根域名服务器把请求转发到下一级，知道找到 IP

> 1. 电脑上不了网，为什么修改dns为8.8.8.8 或者114.114.114.114?
> 2. dns 劫持是什么？

## 第三步. 服务器处理
服务器是一台安装系统的机器，常见的系统如Linux、windows server 2012

系统里安装的处理请求的应用叫 Web server

### Web服务器
- 常见的 web服务器有 Apache、Nginx、IIS、Lighttpd
- web服务器接收用户的Request 交给网站代码，或者接受请求反向代理到其他 web服务器

![web服务器.png](http://7xpvnv.com2.z0.glb.qiniucdn.com/ddc261f1-3495-4225-98e8-6282f6eee422.png) 

## 第四步. 网站处理流程

> MVC 模型(model)-视图(view)-控制器(controller)

![rails_mvc](http://7xpvnv.com2.z0.glb.qiniucdn.com/26373b7e-83c5-41f3-bb33-c614fb8a37fd.png) 

1. 浏览器向 /users 发送请求；
2. Rails 的路由把 /users 交给 Users 控制器的 index 动作处理；
3. index 动作要求 User 模型读取所有用户（User.all）；
4. User 模型从数据库中读取所有用户；
5. User 模型把所有用户组成的列表返回给控制器；
6. 控制器把所有用户赋值给 @users 变量，然后传入 index 视图；
7. 视图使用嵌入式 Ruby 把页面渲染成 HTML；
8. 控制器把 HTML 送回浏览器

## 浏览器处理
- HTML字符串被浏览器接受后被一句句读取解析

- 解析到link 标签后重新发送请求获取css

- 解析到 script标签后发送请求获取 js，并执行代码

- 解析到img 标签后发送请求获取图片资源

- 浏览器根据 HTML 和 CSS 计算得到渲染树，绘制到屏幕上

- js 会被执行

## 课程任务
1. 问题: 小谷购买了一个域名和一个主机，需要经过什么步骤才能让访问该域名最终展示该主机上的网站?
2. 动手(可选): 购买一个个人域名(如 ruoyu.com)，绑定到 github pages 上。打开域名能访问到github pages 页面


