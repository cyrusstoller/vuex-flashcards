import Vue from 'vue'
import Vuex from 'vuex'

import App from './App.vue'
import store from './store' // We still need to create this file

Vue.config.productionTip = false
Vue.use(Vuex)

new Vue({
  render: h => h(App),
  store // this still hasn't been created
}).$mount('#app')
