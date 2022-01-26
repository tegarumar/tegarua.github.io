import Vue from 'vue'
import App from './App.vue'
import Vuesax from 'vuesax'
import 'vuesax/dist/vuesax.css' 
import router from './router';
import 'bootstrap/dist/css/bootstrap.css'
import 'boxicons/css/boxicons.min.css'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import AOS from 'aos';
import 'aos/dist/aos.css';
import VueSweetalert2 from 'vue-sweetalert2';
// import { SweetAlert } from 'sweetalert2/dist/sweetalert2';

// If you don't need the styles, do not connect
import 'sweetalert2/dist/sweetalert2.min.css';

Vue.use(VueSweetalert2);
Vue.config.productionTip = false
Vue.use(BootstrapVue)
Vue.use(IconsPlugin)
AOS.init();
Vue.use(Vuesax, {
  // options here
  colors: {
    primary:'#0275d8',
    success:'#ffffff',
    danger:'rgb(242, 19, 93)',
    warning:'rgb(255, 130, 0)',
    dark:'#fa34af',
  }
})

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
