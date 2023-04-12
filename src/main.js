import Vue from 'vue'
import App from './App.vue'
import Antd from 'ant-design-vue';
import 'ant-design-vue/dist/antd.css';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import '@/mock'
import Vant from 'vant';
import 'vant/lib/index.css';
import store from '@/store/index'
import router from '@/router'

// ！！！！微前端
import { registerMicroApps, start } from 'qiankun';



Vue.config.productionTip = false

Vue.use(Antd)
Vue.use(ElementUI);
Vue.use(Vant);

// hash模式需要用的方法
const gerActiveRule = (hash) => (location) => location.hash.startsWith(hash)

registerMicroApps([
  {
    name: 'microApps',
    entry: 'http://localhost:8090',
    container: '#container',
    // activeRule: '/microApps', // history模式
    activeRule: gerActiveRule('#/microApps'), // hash模式  由history变hash只需要添加gerActiveRule方法和修改路由模式
  }
]);
start();


new Vue({
  store,
  router,
  render: h => h(App)
}).$mount('#app')


