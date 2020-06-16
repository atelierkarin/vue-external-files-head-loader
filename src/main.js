import Vue from 'vue'
import App from './App.vue'

import HeadLoader from "@/plugins/HeadLoader"

Vue.config.productionTip = false

Vue.use(HeadLoader)

new Vue({
  render: h => h(App),
}).$mount('#app')