import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import { routes } from './routes'

Vue.use(VueRouter)
// default mode is hashtag
const router = new VueRouter({
  routes,
  mode: 'history',
  scrollBehavior (to, from, savedPostion) { // handle scroll
    if (savedPostion) {
      return savedPostion
    }
    if (to.hash) {
      return { selector: to.hash }
    }
    return { x: 0, y: 0 }
  }
})

router.beforeEach((to, from, next) => {
  console.log('global beforeEach')
  next()
})
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
