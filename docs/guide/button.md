# Button 按钮
BB叨：暂时就做了个大小选项，本来想改颜色，但是感觉啥颜色都可以换的话，有些颜色确实有点丑陋，我不许 （可能后面会选择几个颜色可以更改吧）:joy: 

后续可能会增加图标按钮，感觉应该也挺好看

## 基础样式

<ClientOnly>
  <div class="client-style">
  <div class="content">
      <nm-button size="large">大按钮</nm-button>
    </div>
    <div class="content">
      <nm-button>默认按钮</nm-button>
    </div>
     <div class="content">
      <nm-button size="small">小按钮</nm-button>
    </div>
    <div class="content">
      <nm-button :disabled="true">禁止按钮</nm-button>
    </div>
  </div>
</ClientOnly>

## 代码查看
```html
  <nm-button size="large">大按钮</nm-button>
  <nm-button>默认按钮</nm-button>
  <nm-button size="small">小按钮</nm-button>
  <nm-button :disabled="true">禁止按钮</nm-button>
```

## 参数说明
|参数 |说明 |默认  |可选  |
|-----|-----|-----|-----|
|size|按钮大小|default|small/large|
|disabled|禁止点击|false|true|
