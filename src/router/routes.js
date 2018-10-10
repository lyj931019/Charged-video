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
    component: Pages.List
  },
  {
    path: '/detail/:num',
    name: 'detail',
    component: Pages.Detail
  },
  {
    path: '/userLesson',
    name: 'userLesson',
    component: Pages.UserLesson
  },
  {
    path: '/userCourse',
    name: 'userCourse',
    component: Pages.UserCourse
  }
]
