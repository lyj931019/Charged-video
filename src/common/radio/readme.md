# Radio : 
* ## 暂无事件
* ## 用法：
  ```
    <Radio name="sex" v-model="rdoValue" trueValue="男" falseValue="女">
      <span>男</span>
    </Radio>
    <Radio name="sex" v-model="rdoValue" trueValue="女" falseValue="男" >
      <span>女</span>
    </Radio>
  ```
* ## 属性：
  + ### name: 
      - ***effect***：即原生 input 的name属性 
      - ***value***：字符串即可
  + ### disabled:
      - ***effect*** : 即原生 input 的disable属性 
      - ***value***：true **or** false，默认为false，不禁用
  + ### value：
      - ***effect*** ： 无需设置（供watch使用）
  + ### trueValue：
      - ***effect*** ： 选中时的值，多个同时使用时，必须设置
      - ***value*** : [ String, Number, Boolean ]
   + ### falseValue：
        - ***effect*** ： **未**选中时的值，多个同时使用时，必须设置
        - ***value*** : [ String, Number, Boolean ]
