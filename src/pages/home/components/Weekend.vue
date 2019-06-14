<template>
    <div>
        <div class="title">周末去哪儿</div>
        <ul>
            <li class="item border-bottom" v-for="item of list"  :key="item.id">
                <div class="item-img-wrapper">
                    <img class="item-img"  :src="item.imgUrl" />
                </div>
                <div class="item-info">
                    <p class="item-title">{{item.title}}</p>
                    <p class="item-desc">{{item.desc}}</p>
                </div>
            </li>
        </ul>
    </div>
    
</template>

<script>
export default {
    name:'HomeWeekend',
    props:{
        list:Array
    }
    // data () {
    //     return{
    //         recommendList:[{
    //             id:'0001',
    //             imgUrl:'http://img1.qunarzz.com/sight/source/1505/d5/abe8a48a6ef8bf.jpg_r_640x214_7c41cc81.jpg',
    //             title:'武汉必打卡',
    //             desc:'到武汉感受神奇的热干面之都'
    //         },{
    //             id:'0002',
    //             imgUrl:'http://img1.qunarzz.com/sight/source/1811/6d/5afbf529076ef6.jpg_r_640x214_7414b151.jpg',
    //             title:'三峡人家',
    //             desc:'感受长江的水三峡的情怀，自古至今，无数骚人墨客浓墨重彩的描绘三峡，赶紧领略三峡的壮美吧！'
    //         },{
    //             id:'0003',
    //             imgUrl:'http://img1.qunarzz.com/sight/source/1505/4f/95a94c90ef3521.jpg_r_640x214_345412f9.jpg',
    //             title:'开启亲子时光',
    //             desc:'远离喧嚣的都市，带孩子去一个幽静，清新的天然“氧吧”，呼吸新鲜空气，亲近自然健康成长'
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
        line-height .8rem
        background #eeeeee
        text-indent .2rem
    .item-img-wrapper
        overflow hidden
        height 0
        padding-bottom 37.09%
    .item-img
        width 100%
    .item-info
        padding .1rem
        .item-title
            line-height .54rem
            font-size .32rem
            ellipsis() 
        .item-desc
            line-height .4rem
            color #ccc
            ellipsis() 


</style>



