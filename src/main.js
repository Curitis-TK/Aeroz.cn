import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
/*element样式库引入*/
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

/*animate动画库*/
import animated from 'animate.css'

/*重置默认CSS*/
import 'normalize.css'

/*定制container宽度*/
import './assets/css/container.less'

Vue.config.productionTip = false

Vue.use(ElementUI)
Vue.use(animated)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
