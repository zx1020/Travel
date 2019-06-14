<template>
    <div class="wrapper">
        <swiper :options="swiperOption" v-if="showSwiper">
    <!-- slides -->
        <swiper-slide  v-for="item of list" :key="item.id">
            <img class="swiper-img" :src="item.imgURL" />        
        </swiper-slide>

        <!-- Optional controls -->
        <div class="swiper-pagination"  slot="pagination"></div>
  </swiper>
    </div>
    
    
</template>


<script>
export default {
    name:'HomeSwiper',  //组件命名
    //从父组件接收数据
    props:{
        list:Array
    },
    //在组件中定义data是函数的形式，ES6可以简写为
    data (){
        return {
            swiperOption: {
                pagination:'.swiper-pagination',
                loop: true , //使轮播图可以循环滚动，最后一张向右可以滚动到第一张
                autoplay: 2000, //可设置数值来指定播放速度,几豪秒换一次
                speed: 1000,  // 切换图片速度
            }
            // ,
            // swiperList:[
            //     {
            //         id:'0001',
            //         imgURL:'http://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20196/46615d61d13ad13c173c72565bc202b0.jpg_750x200_3ca0aaf9.jpg'
            //     },
            //     {
            //         id:'0002',
            //         imgURL:'http://img1.qunarzz.com/piao/fusion/1811/29/2a6b77b6ff72402.jpg_750x200_d4cec568.jpg'
            //     },
            //     {
            //         id:'0003',
            //         imgURL:'http://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20196/292b7afd8042e0fde68b5c09d4a22d27.jpg_750x200_42d7391a.jpg'
            //     }
            //]
         }
    },
    computed:{
        showSwiper (){
            return this.list.length
        }
    }
}
</script>

<style lang="stylus" scoped>
//由于设置了scoped，无法设置不在此页面中定义的class样式，>>>表示穿透scoped限制，可以访问到.wrapper下的所有class属性
    .wrapper>>>.swiper-pagination-bullet-active
        background #fff !important
    .wrapper
        overflow hidden  //当内容溢出元素框时,内容会被修剪，并且其余内容是不可见
        width 100%
        height 0    //不能在此设置宽高占比，这里设置31.25是相对父元素的高
        padding-bottom 26.7%  //图片加载完成之前，用来撑开轮播图位置的高度（//设置元素高度自适应，相当于父宽，31.25%），否则会出现页面抖动
        background #eee
        .swiper-img
            width 100%
</style>

