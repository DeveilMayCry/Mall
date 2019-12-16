import Vue from 'vue'
import App from './App.vue'
import router from './router'
import axios from 'axios'
import VueAxios from 'vue-axios';

//拦截器，统一处理错误返回信息
axios.interceptors.response.use(function (response) {
  let res = response.data;
  if (res.status == 0) {
    return res.data
  } else if (res.status == 10) {
    window.location.href = '/#/login'
  } else {
    alert(res.msg);
  }
});

Vue.Vue(VueAxios, axios);
Vue.config.productionTip = true
Vue.config.devtools = true

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
