# 按钮 
* ## 暂只支持点击事件 : click
```
  <Btn type="danger" @click="handleClick">按钮</Btn>
```
* ## 可以直接添加class或style改变其样式
* ## 属性:
  + ### type:
    - **effect**: 改变按钮的默认样式,
    - **value**:
      1. primary : 蓝色,
      2. danger : 红色,
      3. warning : 黄色,
      4. success :绿色,
      5. info : 浅蓝,
      6. text : 取消边框,
      7. default : 白色,默认,不用写,写了也白写
  + ### size
    - **effect** :改变按钮的尺寸,改变的是内边距,
    - **value** :
      1. small :小,
      2. large :大,
      3. default : 默认,不用写,写了也白写

  + ### shape
    - **effect** : 改变按钮的圆角,
    - **value** :
      1. half : 半圆角,radius-5px
      2. circle : 圆角,radius-32px,
      3. default :直角,默认,不用写,写了也白写
  + ### long:
    - **effect** : 改变按钮的display方式,即是否充满整行。添加时，按钮为块级元素，充满整行
    ``` 
      <Btn long>按钮</Btn>
    ``` 

