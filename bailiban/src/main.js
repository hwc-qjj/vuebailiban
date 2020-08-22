import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'


Vue.config.productionTip = false

router.beforeEach( (to,from,next)=>{  //每一次进入路由，不管是什么路由，都会守卫
  // console.log("beforeEach")
  // next()
  // 根据一些限定条件进行守卫
  // console.log(to)
  // console.log(from)
  // console.log(to.meta.login)
  console.log(to.matched)
  // every some
  let needLogin = to.matched.some(item => item.meta && item.meta.luyou)
  if(needLogin){
    // 判断是否登陆
    // 假设登录cookie中存入login=true的字段
    // BAIDUID=3F21E85CD570417D50164832BB4D3F19:FG=1; PSTM=1595298606; BIDUPSID=7B1A413D6ACBD9E06FE030819A2CB6F8; BD_UPN=12314353; BDORZ=B490B5EBF6F3CD402E515D22BCDA1598; BD_HOME=1; delPer=0; BD_CK_SAM=1; PSINO=6; H_PS_PSSID=32292_1442_31669_32357_32348_32045_32399_32429_32448_32116_31322_31639_22158; COOKIE_SESSION=204_0_9_9_23_13_0_0_9_8_85_0_84411_0_79_0_1596510241_0_1596510320%7C9%230_1_1595552459%7C1; BDSVRTM=0"
    // document.cookie.indexOf("login=true")

    let loginFalg = document.cookie.includes("login=true");
    if(loginFalg){
      next()
    }else{
      let toLogin = window.confirm("该页面需要登录以后才可以进入，需要立即登陆吗？")
      if(toLogin){
        next('/login')
      }
    }
  }else{
    next()
  }
} )
// router.beforeResolve( (to,from,next)=>{ //当内部路由解析完成以后才去执行
//   console.log("beforeResolve")
//   next()
// } )
// router.afterEach( (to,from,next)=>{   //当所有内容解析完成以后执行
//   console.log("afterEach")
//   // next()
// } )

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
