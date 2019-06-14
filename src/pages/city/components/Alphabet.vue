<template>
<!-- <ul class="list">
    <li class="item">A</li>
</ul> -->
  <ul class="list">
    <li
      class="item"
      v-for="(item) of letters"
      :key="item"
      :ref="item"
      @touchstart.prevent="handleTouchStart"
      @touchmove="handleTouchMove"
      @touchend="handleTouchEnd"
      @click="handleLetterClick"
    >
      {{item}}
    </li>
  </ul>
</template>

<script>
export default {
  name: 'CityAlphabet',
  props: {
    cities: Object
  },
  computed: {
    letters () {
      const letters = []
      for (let i in this.cities) {
        letters.push(i)
      }
      return letters   //['A','B','C']
    }
  },
  data () {
    return {
      touchStatus: false,
      startY: 0,
      timer: null  //节流，延迟一定时间执行
    }
  },
  //钩子函数，由于数据更改导致的虚拟DOM重新渲染和打补丁，在这之后会调用该钩子。
  updated () {
    this.startY = this.$refs['A'][0].offsetTop  //获取元素A距离顶部的距离
  },
  methods: {
    handleLetterClick (e) {
      this.$emit('change', e.target.innerText)
    },
    handleTouchStart () {
      this.touchStatus = true
    },
    handleTouchMove (e) {
      if (this.touchStatus) {
        if (this.timer) {
          clearTimeout(this.timer)
        }
        this.timer = setTimeout(() => {
          const touchY = e.touches[0].clientY - 79   //‘手指触摸的位置距离顶部高度’—‘header部分的高度’
          const index = Math.floor((touchY - this.startY) / 20)   //计算出当前触摸的字母下标值‘（触摸Y-字母A的Y）/单个字母高度’
          if (index >= 0 && index < this.letters.length) {
            this.$emit('change', this.letters[index])
          }
        }, 16)
      }
    },
    handleTouchEnd () {
      this.touchStatus = false
    }
  }
}
</script>

<style lang="stylus" scoped>
  @import '~styles/varibles.styl'
  .list
    display: flex
    flex-direction: column
    justify-content: center
    position: absolute
    top: 1.58rem
    right: 0
    bottom: 0
    width: .4rem
    .item
      line-height: .4rem
      text-align: center
      color: $bgcolor
</style>
