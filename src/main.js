import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'
import VueI18n from 'vue-i18n'


axios.defaults.withCredentials=true;
Vue.prototype.axios = axios;

Vue.use(VueI18n)
const i18n = new VueI18n({
  locale: 'zh', // 语言标识
  messages: {
    // 'zh': require('/assets/lang/en'),
    // 'en': require('/assets/lang/cn')
  }
})



import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';


Vue.use(ElementUI);

Vue.config.productionTip = false

new Vue({
  i18n,
  router,
  store,
  render: h => h(App)
}).$mount('#app')
