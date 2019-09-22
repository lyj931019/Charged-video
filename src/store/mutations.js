/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-06-15 23:25:35
 * @LastEditTime: 2019-06-15 23:25:35
 * @LastEditors: your name
 */
const muntation = {
  changeLoginStatus(state,isLogin){
    state.isLogin = isLogin;
  },
  changeUserInfo(state,userInfo){
    state.user.user_id = userInfo.id;
    state.user.user_email = userInfo.email;
    state.user.user_nickname = userInfo.nickname;
    state.user.user_sex = userInfo.sex;
    state.user.user_avatar = userInfo.avatar;
    state.user.user_phone = userInfo.phone;
    state.user.user_adderss = userInfo.adderss_1;
    state.user.user_adderss2 = userInfo.adderss_2;
    state.user.user_city = userInfo.city;
    state.user.user_country = userInfo.country;
    state.user.customer = userInfo.customer;
  },
  changelearningNum(state,learningNum){
    state.learningNum = learningNum;
  },
  changeUserCourse(state,type,id){
    state.userCourse[type].push(id);
  },
  showLoading(state){
    state.LOADING = true;
  },
  hideLoading (state) {
    state.LOADING = false;
  },
  changeHomeworkList(state,isChange){
    state.homeworkListChange = isChange;
  },
  changeHomepage(state,homepage){
    state.homepage = homepage;
  },
  changeTypes(state,types){
    state.types = types;
  },
  changeStateLang(state,lang){
    state.lang = lang;
  },
};
export default muntation;
