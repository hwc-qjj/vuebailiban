import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from '../views/Home.vue'

Vue.use(VueRouter)

export default new VueRouter({
  mode : "history",
  linkExactActiveClass:"active-exact",//配置完全匹配的class名
  linkActiveClass:"active",//配置包含匹配的class名
  routes : [
    // {
    //   path:'/',
    //   redirect : "/home"
    // },
    {
      path: '/home',
      name: 'Home',
      component: Home,
      beforeEnter(to,from,next){
        console.log("beforeEnter")
        next()
      }
    },
    {
      path: '/about',
      name: 'About',
      component: () => import('../views/About')
    },
    {
      path: '/student',
      name: 'student',
      component: () => import('../views/student'),
      meta :{ //meta是固定的，里面的属性名和属性值是任意添加，尽量语义化，公司需求
        luyou : true
      }
    },
    {
      path: '/learn',
      name: 'learn',
      component: () => import('../views/learn')
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('../views/Login')
    },
    {
      path: '/community',
      name: 'community',
      component: () => import('../views/community.vue'),
      redirect:"/community/academic",//路径重定向
      meta :{ //meta是固定的，里面的属性名和属性值是任意添加，尽量语义化，公司需求
        luyou : true
      },
      children:[
        {
          path: '/community/academic',//要不然就写全，要不然直接写后半部分，加上斜杠表示独立的部分，不加斜杠表示拼接
          name: 'academic',
          component: () => import('../views/Academic')
        },
        {
          path: 'download',
          name: 'download',
          component: () => import('../views/download')
        },
        {
          path: 'personal',
          name: 'personal',
          component: () => import('../views/Personal')
        },
      ]
    },
    {
      path: '/question/:id',//这个组件的路由跳转只能用name来跳转，不能使用path，因为path是动态的
      name:"question",
      component: () => import('../views/Question')
    },
    {
      path: '/NotFound',
      name: '',
      component: () => import('../views/NotFound')
    },
    {
      path:"*",
      redirect(to){
        if(to.path === "/"){
          return "/home"
        }else{
          return "/NotFound"
        }
      }
    }
  ]
})

 
