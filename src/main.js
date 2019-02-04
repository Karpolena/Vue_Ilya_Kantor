import Vue from 'vue'
import 'bootstrap/dist/css/bootstrap.css'
import router from './router'
import store from './store'
// import axios from 'axios'

import App from './App.vue'

Vue.config.productionTip = false
// Vue.use(axios)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
