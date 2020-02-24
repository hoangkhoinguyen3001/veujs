import Vue from 'vue';
import App from './App.vue';
import VueRouter from 'vue-router';
import Result from './pages/result.vue';
import Home from './components/Home.vue';
import Admin from './pages/Admin.vue';
import Client from './pages/Client-detail.vue';
import {store} from './store/store';


// Vue.config.productionTip = false
Vue.use(VueRouter);

const router = new VueRouter({
  mode: 'history',
  base: __dirname,
  routes: [
    { path: '/', component: Home },
    { path: '/result', component: Result },
    { path: '/admin', component: Admin},
    { path: '/admin/:id', component: Client }
  ]
});



new Vue({
  store: store,
  render: h => h(App),
  router,
}).$mount('#app')
