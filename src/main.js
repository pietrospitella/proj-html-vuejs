import Vue from 'vue'
import App from './App.vue'
import '@fontsource/poppins'
import '@fortawesome/fontawesome-free/js/all.js'
import '@fortawesome/fontawesome-free/css/all.css'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
