import Pages from '../pages'
import LearningContent from '../components/learningContent.vue'
import Homework from '../components/homework.vue'
export default [
  {
    path: '/',
    name: 'index',
    component: Pages.Index
  },
  {
    path: '/list/:type',
    name: 'list',
    component: Pages.ListOld
  },
  {
    path: '/detail/:num',
    name: 'detail',
    component: Pages.Detail
  },
  {
    path: '/learningCenter',
    name: 'learningCenter',
    component: Pages.LearningCenter,
    children:[
      {
        path:"learningContent/:id",
        name: 'learningContent',
        component:LearningContent
      },
      {
        path:"homework",
        name: 'homework',
        component:Homework
      },
    ]
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
    path: '/about/:item',
    name: 'about',
    component: Pages.About
  },
  {
    path: '/pay/:num',
    name: 'pay',
    component: Pages.Pay
  }
]
