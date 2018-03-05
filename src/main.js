// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import MyMap from './components/MyMap'

Vue.config.productionTip = true
Vue.component('my-map', MyMap)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  // template: '<App/>',
  components: { App }
})
