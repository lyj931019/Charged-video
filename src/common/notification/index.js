// 获得权限
// 第一次打开网页就申请权限
// Notification.requestPermission();

export default {
  name: 'Message',
  show(opt={}){
    if(typeof opt != 'object'){
      throw new TypeError('参数是一个对象');
    }
    if(!opt.title){
      opt['title']='嘿，哥们！';
    }else{
      if( !(typeof opt.title ==='string' || typeof opt.title === 'number') ){
        throw new TypeError('body 的类型必须是 string 或 number');
      }
    }
    if(!opt.body){
      opt['body']='要光盘嘛？';
    }else {
      if( !(typeof opt.body ==='string' || typeof opt.body === 'number') ){
        throw new TypeError('body 的类型必须是 string 或 number');
      }
    }
    if(!opt.icon){
      opt['icon']='';
    }else {
      if( typeof opt.icon !='string' ){
        throw new TypeError('icon 的类型必须是 string');
      }
    }
    if(!opt.delay){
      opt['delay']= 5000;
    }else {
      if( typeof opt.delay !='number' || opt.delay >= 20000){
        throw new TypeError('delay 的类型必须是 number,且小于20000');
      }
    }

    if (window.Notification) {
      var notification = new Notification(opt.title, {
        body: opt.body,
        icon: opt.icon
      });
      notification.onclick = function() {
        if(opt.onClick && typeof opt.onClick == 'function'){
          opt.onClick();
        }
        notification.close()
      };
      notification.onclose = function() {
        if(opt.onClose && typeof opt.onClose == 'function'){
          opt.onClose();
          notification = null; // 关闭后清除该对象
        }
      }
      notification.onshow = function() {
        if(opt.onShow && typeof opt.onShow == 'function'){
          opt.onShow();
        }
      }
      setTimeout(()=>{
          notification.close();
      },opt.delay)
    }else{
      console.log('浏览器不支持Web Notification');
    }

  }
}
