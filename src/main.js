// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import fastclick from 'fastclick'    //npm install fastclick --save   在命令行中安装，解决移动端点击事件的300ms延迟问题
import VueAwesomeSwiper from 'vue-awesome-swiper'//轮播图插件github搜索，npm安装，import导入
import store from './store'
import 'styles/reset.css'   //基础样式初始化
import 'styles/border.css'   //不同倍屏下1px物理边框的实现
import 'styles/iconfont.css'   //不同倍屏下1px物理边框的实现
import 'swiper/dist/css/swiper.css'


Vue.config.productionTip = false
fastclick.attach(document.body)    //使用fastclick
Vue.use(VueAwesomeSwiper, /* { default global options } */)  //使用轮播图插件vue-awesome-swiper

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
