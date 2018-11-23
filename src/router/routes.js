import Pages from '../pages'
export default [
  {
    path: '/',
    name: 'index',
    component: Pages.Index
  },
  {
    path: '/list',
    name: 'list',
    component: Pages.ListOld
  },
  {
    path: '/detail/:num',
    name: 'detail',
    component: Pages.Detail
  },
  {
    path: '/learningCenter/:num',
    name: 'learningCenter',
    component: Pages.LearningCenter
  },
  {
    path: '/userCourse',
    name: 'userCourse',
    component: Pages.UserCourse
  },
  {
    path: '/userCenter',
    name: 'userCenter',
    component: Pages.UserCenter
  },
  {
    path: '/login',
    name: 'login',
    component: Pages.Login
  },
  {
    path: '/register',
    name: 'register',
    component: Pages.Register
  },
  {
    path: '/about',
    name: 'about',
    component: Pages.About
  },
  {
    path: '/pay/:num',
    name: 'pay',
    component: Pages.Pay
  }
]
