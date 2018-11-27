export default {
  getIsLogin: state => {
    return state.isLogin;
  },
  getUserInfo: state => {
    return state.user;
  },
  getLearningNum: state => {
    return state.learningNum;
  },
  getUserCourses: state => {
    return state.userCourse;
  }
}
