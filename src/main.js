import Vue from 'vue';
import VueResource from 'vue-resource'; // <--- work like axios
import App from './App.vue';

Vue.use(VueResource);
Vue.http.options.root = 'https://vuejs-http-ead37.firebaseio.com';

new Vue({
  el: '#app',
  render: (h) => h(App),
});
