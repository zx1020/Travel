import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/home/Home.vue'     //@表示 src目录，引入组件,后缀可省略
import City from '@/pages/city/City'     //@表示 src目录，引入组件
import Detail from '@/pages/detail/Detail'     //@表示 src目录，引入组件


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',    //访问根目录时
      name: 'Home',    //显示的组件名称
      component: Home    //显示的组件
    },{
      path: '/city',    //访问city目录时
      name: 'City',    
      component: City    
    },{
      path: '/detail/:id',    //访问detail目录时,允许传递一个参数，放在id的位置
      name: 'Detail',    
      component: Detail    
    }],
    scrollBehavior (to, from, savedPosition) {
      return { x: 0, y: 0 }
    }//防止页面之间滚动屏幕互相影响，页面切换时始终回到顶部
})
