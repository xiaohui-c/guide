import Vue from 'vue'
import App from './App.vue'
import ImageGuide from '@/components/Guide'

// 全局注册组件
Vue.use(ImageGuide)

new Vue({
  render: h => h(App)
}).$mount('#app')