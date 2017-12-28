# server-mock 的使用
by 若愚@饥人谷

## server-mock是什么
一款 nodejs 命令行工具，用于搭建 web服务器，模拟网站后端。方便前端开发者 Mock 数据。基于express。

[npm地址](https://www.npmjs.com/package/server-mock)
[GitHub地址](https://github.com/jirengu/server-mock)

## 安装
1. [下载安装](https://nodejs.org/zh-cn/)nodejs（如果已安装可忽略）
2. 打开终端(windows用户打开GitBash)，执行
```
npm install -g server-mock
```
如果安装太慢，也可执行 `npm install -g server-mock --registry=https://registry.npm.taobao.org`

## 使用

## 场景1：搭建 web 服务器
1. 在终端 `cd`到你的文件所在的文件夹
2. 执行`mock start`可将当前文件夹路径作为根目录启动一个 web服务器
3. 在浏览器输入 http://localhost:8080/xxx.html

## 场景2：为 ajax 请求 mock 数据
1. 在终端 `cd`到你的文件所在的文件夹
2. 在当前文件夹创建 `router.js`，该文件是接收并处理后端请求的文件(可认为是网站的后端)
3. `mock init 可创建范例文件`