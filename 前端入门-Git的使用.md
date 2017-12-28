# Git 的使用
by 若愚@[饥人谷](http://jirengu.com)

## Git 使用初尝试
> 1. 新建项目来操作
> 2. 克隆已有项目来操作

###
![0_1480066967091_1.png](http://7xpvnv.com2.z0.glb.qiniucdn.com/a078c308-e97d-4082-a19f-b6ea4a62d129.png) 
###
![1_1480066967091_2.png](http://7xpvnv.com2.z0.glb.qiniucdn.com/d47a5ea5-d007-4861-a9b4-7966c22a6cc1.png) 
### 
![2_1480066967092_3.png](http://7xpvnv.com2.z0.glb.qiniucdn.com/b66ceb4d-2de5-4937-b061-c0773cd65caa.png) 
### 
![3_1480066967092_4.png](http://7xpvnv.com2.z0.glb.qiniucdn.com/fc7d3e4b-b467-443a-8082-97dc0f021d9e.png) 
###
![4_1480066967093_5.png](http://7xpvnv.com2.z0.glb.qiniucdn.com/79ad3f24-bd82-420f-b2a7-93d833273154.png) 
###
![0_1480066992762_6.png](http://7xpvnv.com2.z0.glb.qiniucdn.com/fe536751-db3b-4d1e-a172-21e2f613893f.png) 
###
![1_1480066992762_7.png](http://7xpvnv.com2.z0.glb.qiniucdn.com/abdf2497-207f-4195-807d-0ef5ae3c5cfc.png) 
###
![2_1480066992763_8.png](http://7xpvnv.com2.z0.glb.qiniucdn.com/b7f4a956-0d67-4d71-ae7a-fdd46a23927b.png) 
###
![3_1480066992763_9.png](http://7xpvnv.com2.z0.glb.qiniucdn.com/c60fc3ab-60bd-4ebe-826e-234072f4c3c6.png) 
###
![4_1480066992763_10.png](http://7xpvnv.com2.z0.glb.qiniucdn.com/805ce8c0-c80f-4df5-90a3-816500015f84.png) 
### 
 ![0_1480067013919_11.png](http://7xpvnv.com2.z0.glb.qiniucdn.com/7c4b39bd-81ad-4b7e-9051-ea52caeb8e32.png) 
###
![1_1480067013919_12.png](http://7xpvnv.com2.z0.glb.qiniucdn.com/29732f4b-1fa8-4d06-9d54-9c0e393d186c.png)
###
![2_1480067013920_13.png](http://7xpvnv.com2.z0.glb.qiniucdn.com/5cf851bb-c266-4fe9-ad1b-f89fe3c0304f.png) 
###
![3_1480067013920_14.png](http://7xpvnv.com2.z0.glb.qiniucdn.com/483cf4e8-50d6-418f-8ea6-a6772636ee15.png)
###
![4_1480067013920_15.png](http://7xpvnv.com2.z0.glb.qiniucdn.com/e02ea917-770d-4f8f-9cf2-4e6d378590f5.png) 

## Why Git

### 关于版本控制
> 版本控制是一种记录一个或若干文件内容变化，以便将来查阅特定版本修订情况的系统。

- 本地版本控制系统
- 集中式版本控制系统(SVN)
- 分布式版本控制系统(Git)

### Git 优势
> 诞生自2005，Linux 开源社区

- 速度
- 简单的设计
- 允许上千个并行分支
- 分布式

## 安装
[window下载地址](https://git-for-windows.github.io/)
[mac下载地址](https://git-scm.com/)

## 简单使用
### 重要概念
> - 已提交(mommitted) 该文件已经被安全地保存在本地数据库中了
> - 已修改(modified) 修改了某个文件，但还没有提交保存
> - 已暂存(staged) 把已修改的文件放在下次提交时要保存的清单中

![](http://7xpvnv.com2.z0.glb.qiniucdn.com/ac44ff1a-438f-4d40-ad32-acd56e30a462.png) 

### 起步
初次使用需要设置姓名和邮箱
```
git config --global user.name "你的姓名"
git config --global user.email johndoe@example.com
```

### clone 项目
用于把一个GitHub是的项目clone(下载)到本地变为本地仓库
```
git clone git@github.com:jirengu/blog.git

cd blog
```

### 添加文件并提交
```
# 创建文件
touch a.md
# 在文件里写入一个字符串  
echo "hello" > a.md
git status
```
![17.png](http://7xpvnv.com2.z0.glb.qiniucdn.com/86e69325-3c28-46be-9b65-7c7cb0fb7996.png) 

### 添加文件并提交
```
# 把当前目录下的新增和修改的文件添加到暂存区
git add .
git status
```
![18.png](http://7xpvnv.com2.z0.glb.qiniucdn.com/cfc60fc9-5b90-4314-9936-71cacd94abda.png) 

### 添加文件并提交
```
# 把暂存区的更新提交到本地库
git commit -am "add file"
git status
```
![19.png](http://7xpvnv.com2.z0.glb.qiniucdn.com/08e742d1-1bec-4fe5-a378-2e91523417f2.png)

### 添加文件并提交
```
# 把当前本地库里的改动推送到远程库(origin)的master 分支
git push origin master
```
![20.png](http://7xpvnv.com2.z0.glb.qiniucdn.com/a015dbc4-642b-4d9c-995a-1b7c54fc642b.png) 

### 修改删除文件
```
# 把远程仓库的变动更新合并到本地仓库
git pull

# 修改文件
vim a.md
git add .

# 这里需要注意，如果提交消息包含大量字符串，提交参数不用加 m
# 此时会进入 vim 界面，按下i进入编辑状态，进行编辑
# 编辑完成后按下 esc 进入命令态， 输入 :wq 保存退出 vim
git commit -a

git push origin master

rm -rf a.md
git add .
git commit -am "删除a.md"

#如果之前已经git push origin master 过，后面可以直接简化成 git push
git push

```

### 问题
> - `git clone url`和 `git pull`有什么区别
> - 本地仓库和远程仓库的区别?
> - origin 代表什么?

## 复杂使用

### 本地创建一个 git 项目推送到远程空仓库

```
mkdir newProject
cd new Project

# 把一个文件夹初始化成一个本地 git 仓库
# 注意 仓库和文件夹的区别在于仓库下有一个隐藏的 .git文件夹，里面有一些信息
# 对于一个仓库，删除.git文件夹，就变成一个普通文件夹了
git init

touch index.html
echo "hello" > index.html

git add .
git commit -am "init"

```
### 本地创建一个 git 项目推送到远程空仓库
```
# 查看本地库里记录的远程库地址
git remote -v

# 这里把远程库的地址添加个标签叫origin
git remote add origin git@github.com:jirengu/blog2.git
# 推送到远程库地址
git push origin master

```
### 本地创建一个 git 项目推送到远程空仓库
```
#慎用，这样会强制推送，会覆盖别人的代码
git push -f origin master 

# 在添加一个远程库的标签
git remote add gitlab git@gitlab.com:abc/blog.git

# 推送到gitlab标签的地址上
git push gitlab master

# 删除gitlab 标签
git remote remove gitlab

# 修改origin标签对应的地址
git remote set-url origin git@github.com:jirengu/blog3.git

# 把 gitlab 标签改名为coding
git remote rename gitlab coding
```

### 分支操作
```
# 创建本地库dev 分支
git branch dev

# 切换到dev 分支
git checkout dev

touch b.md
git add .
git commit -am "add b.md"

# 推送到origin地址的dev分支上
git push origin dev

```

### 分支合并
```
git checkout master

# 把 dev 分支上的内容合并到当前分支(master) 上
git merge dev
```

### 冲突
> 当自己和别人改同一个文件的同一个地方，在执行 `git pull`时更新本地合并时会出现冲突

1. 修改冲突文件
2. 重新提交


## 任务
1. 在 github 上创建一个项目，通过命令行的方式执行添加、删除、修改文件
2. 注册 coding.net 账号，把当前项目再推送到 coding 上




