// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'

import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);

import moment from 'moment'//导入moment用来做时间转换 
Vue.prototype.$moment = moment;

//导入路由
import VueRouter from 'vue-router'
Vue.use(VueRouter)

import router from './myrouter'


Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  components: { App },
  router,
  template: '<App/>'
})
