// import Vue from 'vue'
import Vue from './vue.runtime.esm.js'
import App from './App.vue'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
