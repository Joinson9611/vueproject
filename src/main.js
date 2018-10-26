// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import './assets/styles/reset.css'
// 解决移动端1px的问题 例：1px在二倍屏会显示成2px
import './assets/styles/border.css'
import fastClick from 'fastClick'
Vue.config.productionTip = false
//fastClick解决移动端click事件延迟300ms
fastClick.attach(document.body)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
