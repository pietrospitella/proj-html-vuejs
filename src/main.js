import Vue from 'vue'
import App from './App.vue'

// IMPORT MAIN FONT

import '@fontsource/poppins'

// IMPORT ICONS

import '@fortawesome/fontawesome-free/js/all.js'
import '@fortawesome/fontawesome-free/css/all.css'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
