export default {
  /*
  * 判断一个数是否undefined
  * 返回值：是--true ， 否--false
  * */
  isUndefined(value){
    //获得undefined，保证它没有被重新赋值
    var undefined = void(0);
    return value === undefined;
  },

  /*
  * 判断该值是否在预期的范围内
  * 参数：value：目标值（基本类型：number，string。不接受boolean）; valueList: 范围（数组，array）
  * 返回值: 在--true ， 不在--false
  * */
  oneOf(value,valueList){
    for(let i = 0; i < valueList.length; i++){
      if(value === valueList[i]) return true;
    }
    return false;
  }
}
