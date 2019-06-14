<template>
    <div>
        <div class="title">热销推荐</div>
        <ul>
            <router-link tag="li" class="item border-bottom" v-for="item of list"  :key="item.id" :to="'/detail/'+item.id">
                <img class="item-img"  :src="item.imgUrl" />
                
                <div class="item-info">
                    <p class="item-title">{{item.title}}</p>
                    <p class="item-desc">{{item.desc}}</p>
                    <button class="item-button">查看详情</button>
                </div>
            </router-link>
        </ul>
    </div>
    
</template>

<script>
export default {
    name:'HomeRecommend',
    props:{
        list:Array
    }
    // data () {
    //     return{
    //         recommendList:[{
    //             id:'0001',
    //             imgUrl:'http://img1.qunarzz.com/sight/p0/1504/47/4730a0c01664b63d.water.jpg_200x200_d7f52253.jpg',
    //             title:'武汉海昌极地海洋公园',
    //             desc:'在“海底两万里”鱼你共舞'
    //         },{
    //             id:'0002',
    //             imgUrl:'http://img1.qunarzz.com/sight/p0/1412/3f/f4d858b40070a2232c1f2ffb74d5e2aa.water.jpg_200x200_be41969c.jpg',
    //             title:'锦里沟',
    //             desc:'看樱花桃花次第盛放，感受土苗文化风情'
    //         },{
    //             id:'0003',
    //             imgUrl:'http://img1.qunarzz.com/sight/p0/1904/67/67de943a3d97215ba3.img.jpg_200x200_92497328.jpg',
    //             title:'武汉欢乐谷',
    //             desc:'来试试中国最高的弹射过山车吧~'
    //         },{
    //             id:'0004',
    //             imgUrl:'http://img1.qunarzz.com/sight/p0/1502/bb/bbbbe63e21822952.water.jpg_200x200_9fa7fc75.jpg',
    //             title:'紫薇都市田园',
    //             desc:'紫薇的世界，花的海洋'
    //         },{
    //             id:'0005',
    //             imgUrl:'http://img1.qunarzz.com/sight/p0/1805/f9/f9fa2c4b30dc9f5aa3.img.jpg_200x200_165f7560.jpg',
    //             title:'木兰天池',
    //             desc:'石门锁大别，天池秀木兰。古道接悠远，山气入青岚'
    //         }]
    //     }
    // }
}
</script>

<style lang="stylus" scoped>
@import '~styles/mixins.styl'
    .title
        margin-top .2rem
        line-height .8rem
        background #eeeeee
        text-indent .2rem
    .item
        overflow hidden
        display flex
        height 1.9rem
        .item-img
            width 1.7rem
            height 1.7rem
            padding .1rem
        .item-info
            flex 1
            padding .1rem
            min-width 0
            .item-title
                line-height .54rem
                font-size .32rem
                ellipsis() 
            .item-desc
                line-height .4rem
                color #ccc
                ellipsis() 
            .item-button
                line-height .44rem
                margin-top .16rem
                background #ff9300
                padding 0 .2rem
                border-radius .06rem
                color #fff


</style>


