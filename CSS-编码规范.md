# 编码规范

## 命名技巧

### 语义化
> 1. 语义化标签优先
> 2. 基于功能命名、基于内容命名、基于表现命名
> 2. 简略、明了、无后患

**tips:**

1. 大声叫出它的名字
2. 翻译成英文


### 范例

```
<!-- 不好  -->
<div class="article">
  <div class="article_title">编码规范</div>
  <div class="the_content">今天讲的内容是编码规范，讲师
     <div class="darkbold">若愚</div> @饥人谷</div>
</div>
```
```
<!-- 好 -->
<article>
  <h1>编码规范</h1>
  <p>今天讲的内容是编码规范，讲师
     <b>若愚</b> @饥人谷</p>
</article>
```

### 范例

```
<!-- 不好  -->
<div class="left"></div>
<div class="red"></div>
<div class="s"></div>
<a class="link" href="#"></a>
```
```
<!-- 好 -->
<div class="success"></div>
<div class="theme-color"></div>
<a class="login" href="#"></a>
```

### 范例
```
<!-- 好 -->
<article class="movies">...</article>
<article class="news">...</article>
```
```
<!-- 不好 -->
<article class="blue">...</article>
<article class="redBg mt30 bigText">...</article>
```
### 命名范例

```
1.所有命名都使用英文小写

推荐：`<div class="main"></div> `

不推荐： `<div class="Main"></div> `

2.命名用引号包裹

推荐：`<div id="header"></div> `

不推荐： `<div id=header></div> `

3.用中横线连接

推荐：`<div class="mod-modal"></div> `

不推荐： `<div class="modModal"></div> `

4.命名体现功能，不涉及表现样式(颜色、字体、边框、背景等)

推荐：`<div class="text-lesser"></div>`

不推荐： `<div class="light-grey"></div>`
```
### 常见命名1

1. `.wrap`或`.wrapper` -- 用于外侧包裹
4. `.container`或 `.ct` -- 包裹容器
2. `.header`  -- 用于头部
4. `.body`  -- 页面 body
8. `.footer`  -- 页面尾部
4. `aside`、`sidebar` -- 用于侧边栏
7. `.content` -- 和header footer 对应，用于主要内容
7. `.navigation` -- 导航元素
7. `.pagination` -- 分页

### 常见命名2
1. `.tabs > .tab` -- tab 切换
1. `.breadcrumbs` -- 导航列表、面包屑
3. `.dropdown` -- 下拉菜单
3. `.article` -- 文章
3. `.main` -- 用于主体
1. `.thumbnail` -- 头像，小图像
1. `.media` -- 媒体资源
1. `.panel` -- 面板
25. `.tooltip` -- 鼠标放置上去的提示
25. `.popup` -- 鼠标点击弹出的提示

### 常见命名3
25. `.button`、`.btn` -- 按钮
9. `.ad` -- 广告
10. `.subnav` -- 二级导航
11. `.menu` -- 菜单
12. `.tag` -- 标签
13. `.message`或者`.notice` -- 提示消息
14. `.summary` -- 摘要
15. `.logo` -- logo
16. `.search` -- 搜索框
17. `.login` -- 登录

### 常见命名4
18. `.register` -- 注册
19. `.username` -- 用户名
20. `.password` -- 密码
22. `.banner` -- 广告条
23. `.copyright` -- 版权
24. `.modal`或者 `.dialog` -- 弹窗

### 常见命名5
```
var 名字 = {
  状态: [
    'inverse',
    'toggled',
    'switched',
    'original',
    'initial',
    'identified',
    'disabled',
    'loading',
    'pending',
    'syncing',
    'default'
  ],
  修饰: [
    'dark',
    'light',
    'shaded',
    'flat',
    'ghost',
    'maroon',
    'pale',
    'intense',
    'twisted',
    'narrow',
    'wide',
    'smooth',
    'separate',
    'clean',
    'sharp',
    'aligned'
  ],
  元素: [
    'pagination',
    'modal',
    'popup',
    'article',
    'story',
    'flash',
    'status',
    'state',
    'media',
    'block',
    'card',
    'teaser',
    'badge',
    'label',
    'sheet',
    'poster',
    'notice',
    'record',
    'entry',
    'item',
    'figure',
    'square',
    'module',
    'bar',
    'button',
    'action',
    'knob'
  ],
  布局: [
    'navigation',
    'wrapper',
    'inner',
    'header',
    'footer',
    'aside',
    'section',
    'divider',
    'content',
    'container',
    'panel',
    'pane',
    'construct',
    'composition',
    'spacing',
    'frame'
  ]
}
```

## CSS规范

### 书写规范
1. tab 用两个空格表示
2. css的 `:`后加个空格， `{`前加个空格
3. 每条声明后都加上分号
5. 换行，而不是放到一行
6. 颜色用小写，用缩写, `#fff`
7. 小数不用写前缀, `0.5s` -> `.5s`；0不用加单位
8. 尽量缩写， `margin: 5px 10px 5px 10px` -> `margin: 5px 10px`


### 范例
```
/* Not recommended */
.test {
  display: block;
  height: 100px
}
/* Recommended */
.test {
  display: block;
  height: 100px;
}


/* Not recommended */
h3 {
  font-weight:bold;
}
/* Recommended */
h3 {
  font-weight: bold;
}


/* Not recommended: missing space */
#video{
  margin-top: 1em;
}

/* Not recommended: unnecessary line break */
#video
{
  margin-top: 1em;
}
/* Recommended */
#video {
  margin-top: 1em;
}


/* Not recommended */
a:focus, a:active {
  position: relative; top: 1px;
}
/* Recommended */
h1,
h2,
h3 {
  font-weight: normal;
  line-height: 1.2;
}


/* Always put a blank line (two line breaks) between rules. */
html {
  background: #fff;
}

body {
  margin: auto;
  width: 50%;
}


/* Not recommended */
@import url("//www.google.com/css/maia.css");

html {
  font-family: "open sans", arial, sans-serif;
}
/* Recommended */
@import url(//www.google.com/css/maia.css);

html {
  font-family: 'open sans', arial, sans-serif;
}

```


## 参考

- [google html css编码规范](https://google.github.io/styleguide/htmlcssguide.xml)
- [bootstrap 编码规范](http://codeguide.bootcss.com/)
- [命名这货真难](https://seesparkbox.com/foundry/naming_css_stuff_is_really_hard)
