// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import BootstrapVue from 'bootstrap-vue';
import moment from 'moment';
import VueMomentJS from 'vue-momentjs';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';
import axios from 'axios';

import App from './App';
import router from './router';

Vue.prototype.$http = axios;
Vue.config.productionTip = false;

Vue.use(BootstrapVue);
Vue.use(VueMomentJS, moment);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>',
});
