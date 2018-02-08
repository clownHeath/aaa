// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'
import store from "./store"
import animate from './assets/animate.css'

import Mint from 'mint-ui';
Vue.use(Mint);
import MintUI from 'mint-ui'
Vue.use(MintUI)
import 'mint-ui/lib/style.css'

Vue.prototype.axios = axios
Vue.config.productionTip = false

/* 导入公用组件 */
import lHeader from '@/components/Header'
import lContent from '@/components/Content'
import lFooter from '@/components/Footer'

//导入mint-ui组件
import { Search } from 'mint-ui';
import { Swipe, SwipeItem } from 'mint-ui';
import { Navbar, TabItem } from 'mint-ui';



Vue.component(Swipe.name, Swipe);
Vue.component(SwipeItem.name, SwipeItem);
Vue.component(Search.name, Search);
Vue.component(Navbar.name, Navbar);
Vue.component(TabItem.name, TabItem);

/* 全局注册公用组件 */
Vue.component("l-header",lHeader)
Vue.component("l-content",lContent)
Vue.component("l-footer",lFooter)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
