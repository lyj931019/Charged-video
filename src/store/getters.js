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
  },
  getLoading: state => {
    return state.LOADING;
  },
  getHomeworkListChange: state => {
    return state.userCourse;
  },
  getHomepage: state => {
    return state.homepage;
  },
  getTypes: state => {
    return state.types;
  },
  getLang: state => {
    return state.lang;
  }

}
