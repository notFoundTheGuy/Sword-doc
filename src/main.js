import Vue from 'vue'
import App from './App.vue'
import router from './router'

// 文档书写
import dataTable from './components/datatable.vue'
Vue.component('data-table', dataTable)
import codearea from './components/codearea.vue'
Vue.component('codearea', codearea)

// 本地开发目录
import TheSword from '../../sword/src/index'
// 发布前测试
// import TheSword from '../../sword/dist/sword.min.js'
// 正式使用
// import TheSword from 'the-sword'

import ViewUI from 'view-design';
import 'view-design/dist/styles/iview.css';

import './common/style/index.less'


Vue.use(ViewUI);

Vue.config.productionTip = false
Vue.use(TheSword)

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
