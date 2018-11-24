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
  },
  changelearningNum(state,learningNum){
    state.learningNum = learningNum;
  }
};
export default muntation;
