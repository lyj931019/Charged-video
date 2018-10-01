# notification :
## 用法：
```
  this.$notification.show()
```
```
  this.$notification.show({
      title:'澳门首家线上赌场',
      body:'女装大佬在线发牌',
      icon:'https://...',
      delay:5000,
      onClick:function () {
        console.log('被点击了')
      },
      onShow:function () {
        console.log('刚刚打开')
      },
      onClose:function () {
        console.log('已经关闭了')
      }
    });
```

## 配置项：

### title ：
消息提示的标题，类型为**String** 或 **Number**。
  
### body：
消息提示的内容，类型为**String** 或 **Number**，内容不宜过长。

### icon：
消息提示的左侧头像，类型为**String**，为url地址，建议为'https://....'的服务器地址。

### delay
消息提示的自动关闭延迟，类型为**Number**，为毫秒数，不建议超过20秒，即20000（应该无法超过25s左右）。

### onClick
点击提示框时的触发的函数。

### onShow
提示框打开时（后）的回调函数。

### onClose
提示框关闭时（后）的回调函数。
