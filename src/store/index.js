import Vue from 'vue'
import Vuex from 'vuex'
import state from './state'
import mutations from './mutations'



//使用vuex插件
Vue.use(Vuex)

export default new Vuex.Store({
  state,  //存放公共数据
  mutations   //对数据同步的改变，异步用action
})

