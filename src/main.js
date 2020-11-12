import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './assets/tailwind.css'

import TheHeader from './components/TheHeader'
import BaseCard from './components/layouts/BaseCard'

Vue.config.productionTip = false

Vue.component('the-header', TheHeader)
Vue.component('base-card', BaseCard)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
