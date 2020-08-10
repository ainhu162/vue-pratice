import Vue from 'vue'
import App from './App.vue'

// globally filters
Vue.filter('lowercase', function (value) {
  return value.toLowerCase()
})

new Vue({
  el: '#app',
  render: h => h(App)
})
