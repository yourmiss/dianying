import Vue from 'vue'
import VueRouter from 'vue-router'
import Films from '../views/Films.vue'
// import Center from '../views/Center.vue'
// import Order from '../views/Order.vue'
import Login from '../views/Login.vue'
import Cinemas from '../views/Cinemas.vue'
import City from '../views/City.vue'
import Search from '../views/Search.vue'
import Detail from '../views/Detail.vue'
import Comingsoon from '@/views/films/Comingsoon.vue'
import Nowplaying from '@/views/films/Nowplaying.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/films',
    component: Films,
    children: [
      {
        path: '/films/nowplaying',
        component: Nowplaying
      },
      {
        path: '/films/comingsoon',
        component: Comingsoon
      },
      {
        path: '/films',
        redirect: '/films/nowplaying'
      }
    ]
  },
  // {
  //   path:'/detail',
  //   component:Detail
  // },
  // {
  //   name: 'liuyudetail', // 命名路由
  //   path: '/detail/:id', // 动态路由
  //   component: Detail
  // },
  {
    name: 'liuyudetail',
    path: '/detail/:id',
    component: () => import('@/views/Detail'),
    meta: {
      isliuyuRequired: true
    }
  },
  {
    path: '/center',
    component: () => import('@/views/Center'),
    meta: {
      isliuyuRequired: true
    }
    // beforeEnter:(to,from,next)=>{
    //   if(localStorage.getItem('token')){
    //     next()
    //   }else{
    //     next('/login')
    //   }
    // }
  },
  {
    path: '/order',
    component: () => import('@/views/Order'),
    meta: {
      isliuyuRequired: true
    }
  },
  {
    path: '/login',
    component: Login
  },
  {
    path: '/cinemas',
    component: Cinemas
  },
  {
    path: '/city',
    component: City
  },
  {
    path: '/cinemas/search',
    component: Search
  },
  // 重定向
  {
    path: '*',
    redirect: '/films'
  }

]

const router = new VueRouter({
  mode: 'hash',
  routes
})

router.beforeEach((to, from, next) => {
  // console.log(to)
  // next()
  
  if (to.meta.isliuyuRequired) {
    if (localStorage.getItem('token')) {
      next()
    } else {
      next({
        path: '/login',
        query: { redirect: to.fullPath }
      })
    }
  } else {
    next()
  }
})

export default router
