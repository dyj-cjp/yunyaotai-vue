import Vue from 'vue'
import App from './App'
import router from './router'
import qs from 'qs'
import ElUpload from 'element-upload'

Vue.config.productionTip = false
Vue.component('el-upload',ElUpload)

Vue.prototype.$qs=qs;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
