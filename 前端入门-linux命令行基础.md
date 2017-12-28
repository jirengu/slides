# Linux 命令行基础
by 若愚@[饥人谷](http://jirengu.com)

## 一些名词
- 「图形界面」 
- 「命令行」
- 「终端」
- 「shell」
- 「bash」


## 安装使用
- Windws: 安装git, 打开 gitbash
- Linux 打开终端
- Mac 打开终端

## 基本命令

### 查看当前完整路径
```
pwd
```

### 查看当前目录下文件

```
# 不包括隐藏文件
ls

# 查看当前目录下所有文件(包括隐藏文件)
ls -a

# 查看当前目录下所有文件(包括隐藏文件)的详细信息
ls -al
```
### 切换目录
```
cd /c/project
cd code
cd ../css
cd ~/Desktop

```
### 创建文件
```
touch readme.md
```

### 删除文件
```
#创建readme.md
rm readme.md 

#删除node_modules文件夹，不提示
rm -rf node_modules
```

### 重命名文件
```
mv readme.md README.md
```

### 创建文件夹
```
mkdir projects
```

## 文件路径
### 根目录

```
cd /
```
### 家目录
```
cd ~
pwd
```

### 当前目录
```
cd books
cd ./books
```

### 上级目录
```
cd ..
cd ../css
```

## 编辑器vim
>编辑模式
>命令模式

1. `vim a.md` 初始进入编辑器命令模式
2. `i` 进入编辑模式
3. 键盘左上角`esc` 进入命令命令模式
4. `:wq` 保存退出
5. `:q!` 不保存强制退出

## 安装服务器
```
npm install -g http-server
http-server
```

## 登录开发机
```
ssh vip14@47.91.156.35
```

## 文件权限
```
chmod 777 index.html
chown -R git:git ruoyu

```

## 新手最大的问题
> 1. 大小写看错
> 2. 空格写漏
> 3. 把多个命令当成一个命令

## 推荐资料

http://www.cnblogs.com/peida/tag/linux%E5%91%BD%E4%BB%A4/default.html?page=4




