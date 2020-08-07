import Vue from 'vue'
import App from './App.vue'

Vue.directive('highlight', {
  bind (el, binding, vnode) {
    // el.style.backgroundColor = binding.value
    var delay = 0
    if (binding.modifiers.delayed) {
      delay = 3000
    }
    if (binding.modifiers.blink) {
      const mainColor = binding.value.mainColor
      const secondColor = binding.value.secondColor
      let currentColor = mainColor
      setTimeout(() => {
        setInterval(() => {
          currentColor = currentColor === mainColor ? secondColor : mainColor
          if (binding.arg === 'background') {
            el.style.backgroundColor = currentColor
          } else {
            el.style.color = currentColor
          }
        }, binding.value.delay)
      }, delay)
    } else {
      setTimeout(() => {
        if (binding.arg === 'background') {
          el.style.backgroundColor = binding.value
        } else {
          el.style.color = binding.value
        }
      }, delay)
    }
  }
})

new Vue({
  el: '#app',
  render: h => h(App)
})
