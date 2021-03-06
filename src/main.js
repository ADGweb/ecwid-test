import Vue from 'vue'
import App from './EcwidTest.vue'
import axios from 'axios'
import VueAxios from 'vue-axios'

export const eventEmitter = new Vue();

Vue.use(VueAxios, axios)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
