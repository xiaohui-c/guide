import Vue from 'vue'
import App from './App.vue'
import ImageGuide from '@/components/Guide'
import draggable from '@/directives/draggable'

// 全局注册组件
Vue.use(ImageGuide)

Vue.directive('draggable', draggable)
new Vue({
  render: h => h(App)
}).$mount('#app')