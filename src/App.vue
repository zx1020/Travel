<template>
  <div id="app">
    <keep-alive exclude="Detail">    <!-- 执行一次后将数据放入内存，避免切换页面时钩子函数mounted重复执行发送ajax请求，可通过activated修改存在内存中的数据，功能类似于mounted -->
                                        <!-- exclude="Detail"  Detail.vue页面不受keep-alive限制，每次进入都会刷新 -->
      <router-view/> <!-- 显示的是当前路由地址所对应的内容 -->
    </keep-alive>
    
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>

</style>
