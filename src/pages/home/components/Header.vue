<template>
	<div class="header">
		<div class="header-left">
			<div class="iconfont back-icon">&#xe624;</div>
		</div>
		<div class="header-input">
			<span class="iconfont">&#xe632;</span>	
			输入城市/景点/游玩主题
		</div>
  <!-- 页面跳转到/City路径，这里的路径都是路由里面配置好的 -->
		<router-link to='/City'>   
			<div class="header-right">
			{{this.city}}
			<span class="iconfont arrow-icon">&#xe64a;</span>	
			</div>
		</router-link>
		
	</div>
	
</template>

<script>
import { mapState } from 'vuex'   
export default {
	name:'HomeHeader',		//组件命名
	computed: {
    ...mapState(['city'])  //mapState通过扩展运算符将store.state.city映射this.city
  }
}		
</script>

<style lang="stylus" scoped>
//在css中引入css文件，访问src目录时@前面要加~
//@import '~@/assets/styles/varibles.styl'   
  //在'build/webpack.base.conf.js'中可以创建目录引用名,修改webpack文件后要重启服务器
  @import '~styles/varibles.styl'   

	.header
		display: flex
		line-height: $headerHeight
		background: $bgcolor
		color: #fff
		.header-left
			width: .64rem
			float: left
			.back-icon
				text-align: center
				font-size: .4rem
		.header-input
			flex: 1
			height:.64rem
			line-height: .64rem
			margin-top: .12rem
			margin-left: .2rem
			padding-left .2rem
			background: #fff
			border-radius: .1rem
			color: #ccc
		.header-right
			min-width: 1.04rem
			padding  0 .1rem
			float: right
			text-align: center
			color: #ffffff
			.arrow-icon
				margin-left -.04rem
				font-size .24rem

</style>