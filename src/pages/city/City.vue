<template>
    <div>
        <city-header></city-header>
        <city-search :cities="cities"></city-search>
        <city-list :cities="cities" :hot="hotCities" :letter="letter"></city-list>
        <city-alphabet :cities="cities" @change ="handleLetterChange"></city-alphabet>
    </div>
    
</template>


<script>
import axios from 'axios'
import CityHeader from './components/Header'   //局部组件，需要引入
import CitySearch from './components/Search'   //局部组件，需要引入
import CityList from './components/List'   //局部组件，需要引入
import CityAlphabet from './components/Alphabet'   //局部组件，需要引入

export default {
    name:'City',
	components:{
		CityHeader,  //局部组件注册到首页大组件之中，名字一致时可以省略 HomeHeader:HomeHeader
        CitySearch,
        CityList,
        CityAlphabet
    },
    data () {
        return {
            cities:{},  //用来存放从后台接收的数据
            hotCities:[],
            letter:' '
        }
    },
    methods:{
        getCityInfo () {
            axios.get('/api/city.json')   //发送ajax请求
                .then(this.handleGetCItyInfoSucc)    //请求后执行的方法
        },
        handleGetCItyInfoSucc (res){
            res = res.data
            if(res.ret &&res.data){
                const data = res.data
                this.cities = data.cities
                this.hotCities = data.hotCities
            }
        },
        handleLetterChange(letter){
            this.letter=letter
        }
    },
    mounted () {
        this.getCityInfo()
    }
}
</script>

<style lang="stylus" scoped>

</style>


