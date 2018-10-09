import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import YDUI from 'vue-ydui'
import 'vue-ydui/dist/ydui.rem.css'
import AirUI from 'airui-vue' // 引入组件库
import 'airui-vue/theme/css/index.css' // 引入样式库
// 样式
import 'flex.css'
import './assets/css/base.less'

Vue.use(YDUI)
Vue.use(AirUI, { mouseWheel: true })

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
