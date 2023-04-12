<template>
  <div id="app">
    <div @click="$router.back()">返回</div>
    <div @click="$router.push('/echarts')">跳转到echarts</div>
    <div @click="$router.push('/item')">跳转到item</div>
    <div @click="$router.push('/microApps')">跳转到microApps</div>
    <div style="margin-bottom: 50px;border-bottom: 1px solid #000;">{{ $store.state.infos }}</div>
    <router-view></router-view>
    <!-- 需要给子页面一个容器 -->
    <!-- 1.容器 -->
    <!-- 2.在main.js中注册 -->
    <!-- 3.修改路由模式 -->
    <div id="container" style="border: 1px solid #000;">
    </div>
  </div>
</template>

<script>
export default {
  name: 'BaiduTestApp',

  data() {
    return {
    };
  },

  mounted() {
    
  },

  methods: {
  },
};
</script>

<style lang="less" scoped>
#app {
  background-color: orange;
}
</style>