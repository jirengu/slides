# Form 表单
by 若愚@饥人谷

## 标签概览
```
<!DOCTYPE html>
<html>
<head>
  <title></title>
</head>
<body>
<div class="login">
  <input type="text" name="sex">
  <form action="/getInfo" method="get">
      <div class="submit">
      <button>提交😁</button>
    </div>
    <div class="username">
      <label for="username">姓名</label>
      <input id="username" type="text" name="username" value="ruo">
    </div>
    <div class="password">
      <label for="password">密码</label>
      <input id="password" type="password" name="password" placeholder="输入密码">
    </div>
    <div class="hobby">
      <label>爱好</label>
      <input type="checkbox" name="hobby" value="read"> 读书
      <input type="checkbox" name="hobby" value="music"> 听歌
      <input type="checkbox" name="hobby" value="study"> 学习
    </div>
    <div class="sex">
      <label>性别</label>
      <input type="radio" name="sex" value="男"> 男
      <input type="radio" name="sex" value="女"> 女
    </div>
    <div class="file">
      <input type="file" name="myfile" accept="image/png">
    </div>
    <div class="select">
      <select name="city">
        <option value="beijing">北京</option>
        <option value="shanghai" selected>上海</option>
        <option value="hangzhou">杭州</option>
      </select>
    </div>
    <div class="textarea">
      <textarea name="article">
         多行文本，注意和 type=text的区别
      </textarea>
      <input type="hidden" name="csrf" value="12345623fafdffdd">
        <input type="button" value="Buttom" /> 不会提交
        <input type="submit" value="Submit" /> 会提交
        <input type="reset" value="Reset" /> 重置输入
    </div>
  </form>


</div>
</body>
</html>
```