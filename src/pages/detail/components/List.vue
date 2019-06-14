<template>
  <div>
    <div
      class="item" v-for="(item, index) of list" :key="index"
    >
      <div class="item-title border-bottom" @click="handleTitleClick(index)" >
        <span class="item-title-icon" ></span>
        {{item.title}}
			  <span class="iconfont arrow-icon" style="color: #ccc" v-show="item.children">&#xe64a;</span>	        
      </div>
      <div class="item-chilren" >
        <detail-list :list="item.children" v-show="isShow[index]"></detail-list>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'DetailList',
  props: {
    list: Array
  },
  data () {
    return {
      isShow:[]
    }
  },
  methods:{
      handleTitleClick (index) {
        // this.list[index].open = !this.list[index].open; 
        this.isShow.splice(index,1,!this.isShow[index])  //这个数组isShow必须使用splic改变自身的值，如果直接赋值改变，vue页面的值不能对应的更新（也就是vue页面拿不到改变后的值）
    }
  }
}
</script>

<style lang="stylus" scoped>
  .item-title-icon
    position: relative
    left: .06rem
    top: .06rem
    display: inline-block
    width: .36rem
    height: .36rem
    background: url(http://s.qunarzz.com/piao/image/touch/sight/detail.png) 0 -.45rem no-repeat
    margin-right: .1rem
    background-size: .4rem 3rem
  .item-title
    line-height: .8rem
    font-size: .32rem
    padding: 0 .2rem
  .item-chilren
    padding: 0 .2rem
</style>
