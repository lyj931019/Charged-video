const muntation = {
  changeLoginStatus(state,isLogin){
    console.log(isLogin);
    state.isLogin = isLogin;
  },
  changeUserInfo(state,userInfo){
    state.user.user_id = userInfo.id;
    state.user.user_email = userInfo.email;
    state.user.user_nickname = userInfo.nickname;
    state.user.user_sex = userInfo.sex;
    state.user.user_avatar = userInfo.avatar;
    state.user.user_phone = userInfo.phone;
    state.user.user_adderss = userInfo.adderss;
  }
};
export default muntation;
