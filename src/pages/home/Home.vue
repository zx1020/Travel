<template>
	<div>
		<!-- 引用组件 -->
		<home-header></home-header>   
		<home-swiper :list="swiperList"></home-swiper>
		<home-icons :list="iconList"></home-icons>
		<home-recommend :list="recommendList"></home-recommend>
		<home-weekend :list="weekendList"></home-weekend>
	</div>
	
</template>

<script>
import HomeHeader from './components/Header'   //局部组件，需要引入
import HomeSwiper from './components/Swiper'   //局部组件，需要引入
import HomeIcons from './components/Icons'   //局部组件，需要引入
import HomeRecommend from './components/Recommend'   //局部组件，需要引入
import HomeWeekend from './components/Weekend'   //局部组件，需要引入
import axios from 'axios'  //引入之后才能发ajax请求
import {mapState} from 'vuex'

export default {
	name:'Home',
	components:{
		HomeHeader,  //局部组件注册到首页大组件之中，名字一致时可以省略 HomeHeader:HomeHeader
		HomeSwiper,
		HomeIcons,
		HomeRecommend,
		HomeWeekend
	},
	data () {
		return {
			lastCity: '',
			swiperList:[],
			iconList:[],
			recommendList:[],
			weekendList:[]
		}
	},
	computed: {
    ...mapState(['city'])  //mapState通过扩展运算符将store.state.city映射this.city
    },
	methods:{
		getHomeInfo () {
			axios.get('/api/index.json?city='+this.city)  //发送ajax请求时将city参数加进去，获取对应城市的首页展示
				.then(this.getHomeInfoSucc)
		},
		getHomeInfoSucc (res) {
			res=res.data
			//判断  res正确返回，且不为空
			if(res.ret && res.data) {
				const data = res.data
				this.swiperList = data.swiperList
				this.iconList = data.iconList
				this.recommendList = data.recommendList
				this.weekendList = data.weekendList
			}
		}
	},
	mounted () {
		this.getHomeInfo()
	},
	activated () {
		if (this.lastCity !== this.city) {
		this.lastCity = this.city
		this.getHomeInfo()
		}
	}
		}		
</script>

<style>
	
</style>