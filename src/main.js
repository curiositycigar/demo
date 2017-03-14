// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import VueRouter from 'vue-router';
import VueResource from 'vue-resource';
import App from './App';
import { bodyRouter } from './router';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-default/index.css';
import '@/common/stylus/index.styl';

Vue.config.productionTip = false;

/* eslint-disable no-new */
Vue.use(ElementUI);
Vue.use(VueRouter);
Vue.use(VueResource);

new Vue({
  el: '#app',
  router: bodyRouter,
  template: '<App/>',
  components: { App }
});
