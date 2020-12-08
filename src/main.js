import Vue from 'vue'
import Antd from 'ant-design-vue';
import App from './App.vue'
import 'ant-design-vue/dist/antd.css';
import VueResource from 'vue-resource';
import VueAvatar from '@lossendae/vue-avatar'
import router from './router';
import VueScrollTo from 'vue-scrollto';
import KProgress from 'k-progress';
// import VueMq from 'vue-mq';


Vue.use(VueResource);
Vue.component('vue-avatar', VueAvatar);
Vue.use(VueScrollTo);
Vue.component('k-progress', KProgress);
// Vue.use(VueMq ,{
//   breakpoints:{
//     sm:450,
//     md:1250,
//     lg:Infinity,
//   },
//   defaultBreakpoint:'sm'
// })



Vue.config.productionTip = false
const config = require('../config');
window.config = config;

Vue.use(Antd);


new Vue({
  data:{
    member:{}
  },
  router,
  render: h => h(App),
}).$mount('#app')
