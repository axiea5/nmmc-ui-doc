# content 块级容器

主要还是一个div，有点样式效果而已，分为新拟态效果和磨砂效果，默认新拟态

注：背景图片只是为了显示效果，实际项目中不会出现

## 基础样式

<ClientOnly>
  <div class="client-only" style="background:url('../bg.jpg');padding:20px;margin-top:13.6px;">
  <div class="client-style">
    <nm-content :hover="true">
      块级容器内容，块级容器内容，块级容器内容，块级容器内容，块级容器内容，块级容器内容，块级容器内容，块级容器内容，块级容器内容，块级容器内容，块级容器内容
    </nm-content>
  </div>
    <div class="client-style">
    <nm-content type="frosted">
      块级容器内容，块级容器内容，块级容器内容，块级容器内容，块级容器内容，块级容器内容，块级容器内容，块级容器内容，块级容器内容，块级容器内容，块级容器内容
    </nm-content>
  </div>
  <div class="client-style">
    <nm-content :radius="14">
      块级容器内容，块级容器内容，块级容器内容，块级容器内容，块级容器内容，块级容器内容，块级容器内容，块级容器内容，块级容器内容，块级容器内容，块级容器内容
    </nm-content>
  </div>
  <div class="client-style">
    <nm-content type="frosted" :radius="14">
      块级容器内容，块级容器内容，块级容器内容，块级容器内容，块级容器内容，块级容器内容，块级容器内容，块级容器内容，块级容器内容，块级容器内容，块级容器内容
    </nm-content>
  </div>
  <div class="client-style">
    <nm-content :hover="true">
      块级容器内容，块级容器内容，块级容器内容，块级容器内容，块级容器内容，块级容器内容，块级容器容，块级容器内容，块级容器内容，块级容器内容，块级容器内容
    </nm-content>
  </div>
  </div>
</ClientOnly>


## 代码查看

```html
  <nm-content>
    块级容器内容，块级容器内容，块级容器内容，块级容器内容，块级容器内容，块级容器内容，块级容器容，块级容器内容，块级容器内容，块级容器内容，块级容器内容
  </nm-content>

  <nm-content type="frosted">
    块级容器内容，块级容器内容，块级容器内容，块级容器内容，块级容器内容，块级容器内容，块级容器内容，块级容器内容，块级容器内容，块级容器内容，块级容器内容
  </nm-content>

  <nm-content :radius="14">
    块级容器内容，块级容器内容，块级容器内容，块级容器内容，块级容器内容，块级容器内容，块级容器内容，块级容器内容，块级容器内容，块级容器内容，块级容器内容
  </nm-content>

  <nm-content type="frosted" :radius="14">
    块级容器内容，块级容器内容，块级容器内容，块级容器内容，块级容器内容，块级容器内容，块级容器内容，块级容器内容，块级容器内容，块级容器内容，块级容器内容
  </nm-content>

   <nm-content :hover="true">
    块级容器内容，块级容器内容，块级容器内容，块级容器内容，块级容器内容，块级容器内容，块级容器容，块级容器内容，块级容器内容，块级容器内容，块级容器内容
  </nm-content>
```


## 参数说明

|参数 |说明 | 类型 | 默认 |可选  |
|-----|-----|-----|-----|-----|
|type|内容样式|string|mimicry|frosted|
|radius|边框圆角大小|number|4|-|
|hover|浮动效果|boolean|false|true|