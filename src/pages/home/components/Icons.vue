<template>
    <div class="icons">
        <swiper  :options="swiperOption">
            <swiper-slide v-for='page of pages' :key='page.index'>
                <div class="icon" v-for="item of page" :key="item.id">
                    <div class="icon-img">
                        <img class='icon-img-content' :src="item.imgUrl" />
                    </div>
                    <p class="icon-desc">{{item.desc}}</p>
                </div>
            </swiper-slide>
        </swiper>
    </div>
</template>

<script>
export default {
    name:'HomeIcons',
    props:{
        list:Array
    },
    data () {
        return {
    //         iconList:[{
    //             id:'0001',
    //             imgUrl:'http://img1.qunarzz.com/piao/fusion/1803/95/f3dd6c383aeb3b02.png',
    //             desc:'热门景点'
    //         },{
    //             id:'0002',
    //             imgUrl:'http://img1.qunarzz.com/piao/fusion/1804/5a/13ceb38dcf262f02.png',
    //             desc:'一日游'
    //         },{
    //             id:'0003',
    //             imgUrl:'http://img1.qunarzz.com/piao/fusion/1804/ff/fdf170ee89594b02.png',
    //             desc:'武汉必游'
    //         },{
    //             id:'0004',
    //             imgUrl:'http://img1.qunarzz.com/piao/fusion/1803/50/26ffa31b56646402.png',
    //             desc:'亲子游'
    //         },{
    //             id:'0005',
    //             imgUrl:'http://img1.qunarzz.com/piao/fusion/1803/75/eca3ce656c886502.png',
    //             desc:'木兰天池'
    //         },{
    //             id:'0006',
    //             imgUrl:'http://img1.qunarzz.com/piao/fusion/1803/76/eb88861d78fb9902.png',
    //             desc:'动植物园'
    //         },{
    //             id:'0007',
    //             imgUrl:'http://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20196/c77aa5a455e750b2f43711b2aa7f7ce2.png',
    //             desc:'端午优惠'
    //         },{
    //             id:'0008',
    //             imgUrl:'http://img1.qunarzz.com/piao/fusion/1803/50/26ffa31b56646402.png',
    //             desc:'武汉欢乐谷'
    //         },{
    //             id:'0009',
    //             imgUrl:'http://img1.qunarzz.com/piao/fusion/1803/95/f3dd6c383aeb3b02.png',
    //             desc:'极地海洋'
    //         }],
            swiperOption: {
                autoplay: false
            }
            
        }
    },
    computed: {
        pages (){
            const pages=[]
            this.list.forEach((item,index)=>{
                const page = Math.floor(index/8)
                if(!pages[page]){
                    pages[page]=[]
                }
                pages[page].push(item)
            })
            return pages
        }
    }
}
</script>

<style lang="stylus" scoped>
//定义了几种颜色
@import '~styles/varibles.styl'    
//文字较长无法全部显示时，显示三个点的样式，ellipsis() 
@import '~styles/mixins.styl'
    .icons>>>.swiper-container
        height:0
        padding-bottom 50%
    .icons
        margin-top .1rem
        .icon
            position relative
            overflow hidden
            float:left
            width 25%
            height 0
            padding-bottom 25%
            .icon-img
                position absolute
                top 0
                left 0
                right 0
                bottom:.44rem
                box-sizing border-box
                padding .1rem
                .icon-img-content
                    display block   //成为块级元素
                    margin 0 auto
                    height 100%
            .icon-desc
                position absolute
                left 0
                right 0
                bottom 0
                height .44rem
                line-height .44rem
                text-align center
                color $darkTextColor
                // overflow hidden
                // white-sapce nowrap
                // text-overflow ellipsis
                ellipsis()   

</style>

