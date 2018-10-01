# Lwitch : 
* ## 只支持点击事件，点击切换，参数为开关的状态
  + ### 调用事件：
   ```
      <Lwitch @change="switchChange" />
   ```
    - change为事件名，起始就是点击事件
    - switchChange为自定义函数，参数即开关的状态
* ## 不可以添加class或style改变样式，整体样式会乱
* ## 属性: 
  + ### size ：
      - ***effect***：改变开关的大小
      - ***value***：
        1. **large** ：大尺寸，
        2. **small** ：小尺寸，
        3. **default** ：默认尺寸，默认值，写了也白写
  + ### open :
      - ***effect*** : 开关的初始状态，添加上时，开关默认打开
      ``` 
        <Lwitch open />
      ``` 

