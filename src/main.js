import Vue from 'vue'
import App from './App.vue'
import router from './router.js'
import './plugins/element.js'
// 导入全局样式表
import './assets/css/global.css'
import TreeTable from 'vue-table-with-tree-grid'

import axios from 'axios'
// 配置请求路径
axios.defaults.baseURL = 'http://timemeetyou.com:8889/api/private/v1/'
// 添加请求拦截器
axios.interceptors.request.use(config => {
  config.headers.Authorization = window.sessionStorage.getItem('token')
  // 在最后必须 return config
  return config
})
Vue.prototype.$http = axios

Vue.config.productionTip = false

Vue.component('tree-table', TreeTable)

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
