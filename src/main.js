import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import IndexModule from '@/modules/IndexModule/IndexModule'

Vue.config.productionTip = false
Vue.use(IndexModule, { store })

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
