# switch 开关

两种对立状态开关 

(不善言辞的我不知道别人怎么就能介绍那么多 :sweat_smile: )

## 基础样式
<div class="client-style">
  <div class="content">
    <nm-switch></nm-switch>
  </div>
   <div class="content">
    <nm-switch :width="60"></nm-switch>
  </div>
  <div class="content">
    <nm-switch :value="true"></nm-switch>
  </div>
  <div class="content">
    <nm-switch :disabled="true"></nm-switch>
  </div>
</div>

## 代码查看
```html
  <nm-switch></nm-switch>
  <nm-switch :width="60"></nm-switch>
  <nm-switch :value="true"></nm-switch>
  <nm-switch :disabled="true"></nm-switch>
```

## 参数说明
|参数 |说明 | 类型 | 默认 |可选  |
|-----|-----|-----|-----|-----|
|width|整体宽度|number|40|-|
|value|绑定值(开关)|boolean/string/number|false|-|
|disabled|禁止点击|boolean|false|true|