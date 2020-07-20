import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'

import { DatePicker,Upload, Icon } from 'ant-design-vue';
Vue.use(DatePicker);
Vue.use(Upload);
Vue.use(Icon);


Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
