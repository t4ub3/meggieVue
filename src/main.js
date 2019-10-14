import Vue from 'vue'
import App from './App.vue'
import VueMq from 'vue-mq'

import { library } from '@fortawesome/fontawesome-svg-core'
import { faTachometerAlt, faTable, faEuroSign } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
 
library.add(faTachometerAlt, faTable, faEuroSign);
 
Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.use(VueMq, {
  breakpoints: {
    sm: 800,
    lg: 1300,
  }
})

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
