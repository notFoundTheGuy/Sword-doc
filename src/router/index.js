import Vue from 'vue'
import VueRouter from 'vue-router'
// import WebShow from '../pages/WebShow.vue'
// import schedule from '../pages/schedule-view-demo/index'
import Main from '../pages/main'
import Home from '../pages/home'

import Explain from '../pages/c-explain/index.vue'
import DragSelect from '../pages/c-time/dragSelect.vue'
import Schedule from '../pages/c-time/schedule.vue'
import MultiSteps from '../pages/c-time/multiSteps.vue'
import TreeTable from '../pages/c-layout/treeTable.vue'
import imgFillW from '../pages/c-img/imgfill-w.vue'
import imgFillH from '../pages/c-img/imgfill-h.vue'
import imgcard from '../pages/c-img/imgcard.vue'
import magicCss from '../pages/c-magic-css/index.vue'


// import TouchShow from '../pages/TouchShow.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    component: Home,
  },
  {
    path: '/main',
    name: 'main',
    component: Main,
    redirect: '/main/explain',
    children: [
      {
        path: 'explain',
        component: Explain
      },
      {
        path: 'dragSelect',
        component: DragSelect
      },
      {
        path: 'schedule',
        component: Schedule
      },
      {
        path: 'steps',
        component: MultiSteps
      },
      {
        path: 'treeTable',
        component: TreeTable
      },
      {
        path: 'imgfill-w',
        component: imgFillW
      },
      {
        path: 'imgfill-h',
        component: imgFillH
      },
      {
        path: 'imgcard',
        component: imgcard
      },
      ,
      {
        path: 'magic-css',
        component: magicCss
      }
    ]
  },
  {
    path: '/touch',
    name: 'touch',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../pages/TouchShow.vue')
  }
]

const router = new VueRouter({
  routes
})

router.afterEach((to, from) => {
  window.scrollTo(0,0)
})
export default router
