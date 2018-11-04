import Pages from '../pages'
export default [
  {
    path: '/',
    name: 'index',
    component: Pages.IndexF
  },
  {
    path: '/list',
    name: 'list',
    component: Pages.ListF
  },
  {
    path: '/detail/:num',
    name: 'detail',
    component: Pages.DetailF
  },
  // {
  //   path: '/detail/:num',
  //   name: 'detail',
  //   component: Pages.Detail
  // },
  {
    path: '/userLesson',
    name: 'userLesson',
    component: Pages.UserLesson
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
  }
]
