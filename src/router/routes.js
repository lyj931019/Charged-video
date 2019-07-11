import Pages from '../pages'
import LearningContent from '../components/learningContent.vue'
import Homework from '../components/homework.vue'
export default [
  {
    path: '/',
    name: 'index',
    component: Pages.Home,
    meta: {
      pageTitle: '主页',
      keepAlive: true,
      hasHeader:true
    }
  },
  {
    path: '/list/:type',
    name: 'list',
    component: Pages.ListOld,
    meta: {
      keepAlive: false,
      hasHeader:true
    }
  },
  {
    path: '/detail/:num',//传课程的num，courses.num
    name: 'detail',
    component: Pages.Detail,
    meta: {
      keepAlive: false,
      hasHeader:true
    }
  },
  {
    path: '/learningCenter/:courseId',//传课程的id，courses.id
    name: 'learningCenter',
    component: Pages.LearningCenter,
    meta: {
      keepAlive: false
    },
    children:[
      {
        path:"learningContent/:id",
        name: 'learningContent',
        component:LearningContent
      },
      {
        path:"homework/:id",
        name: 'homework',
        component:Homework
      },
    ]
  },
  {
    path: '/userCourse',
    name: 'userCourse',
    component: Pages.UserCourse,
    meta: {
      keepAlive: false,
      hasHeader:true
    }
  },
  {
    path: '/userCenter',
    name: 'userCenter',
    component: Pages.UserCenter,
    meta: {
      keepAlive: false,
      hasHeader:true
    }
  },
  {
    path: '/login',
    name: 'login',
    component: Pages.Login,
    meta: {
      keepAlive: false
    }
  },
  {
    path: '/register',
    name: 'register',
    component: Pages.Register,
    meta: {
      keepAlive: false
    }
  },
  {
    path: '/about/:item',
    name: 'about',
    component: Pages.About,
    meta: {
      keepAlive: true,
      hasHeader:true
    }
  },
  {
    path: '/pay/:num',
    name: 'pay',
    component: Pages.Pay,
    meta: {
      keepAlive: false,
      hasHeader:true
    }
  },
  {
    path: '/methods',
    name: 'methods',
    component: Pages.Methods,
    meta: {
      keepAlive: true,
      hasHeader:true
    }
  }
]
