const state = {
  isLogin:false,
  user:{
    user_id: 0,
    user_email: "",
    user_nickname: "",
    user_sex: 1,
    user_avatar: "",
    user_phone: "",
    user_adderss:"",
    user_adderss2:"",
    user_city:'',
    user_country:''
  },
  learningNum:'',
  userCourse:{
    favorites:[],
    buy:[],
    try:[]
  }
}
export default state;
