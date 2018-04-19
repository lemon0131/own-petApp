
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store/store'
import '../mock/MockServer'
import {Button,Lazyload,Indicator} from 'mint-ui'
Vue.use(Lazyload)
Vue.use(Indicator)
Vue.component('Button',Button);
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>',
  store
});
