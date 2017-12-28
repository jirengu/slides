# 媒体查询与栅格系统
by 若愚@饥人谷

## 媒体查询
根据媒体特征(设备类型、窗口大小、分辨率...)来执行相应的 CSS 代码
### 

```
<!-- link元素中的CSS媒体查询 -->
<link rel="stylesheet" media="(max-width: 800px)" href="example.css" />

<!-- 样式表中的CSS媒体查询 -->
<style>
@media (max-width: 600px) {
  .facet_sidebar {
    display: none;
  }
}
</style>
``` 
