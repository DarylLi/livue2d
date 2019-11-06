import Vue from 'vue'
import Router from 'vue-router'

const starter = () => import('../view/demo').then(m => m.default);
const l2dComponent = () => import('../components/l2d/live2d').then(m => m.default);
const l2d3Component = () => import('../components/l2d/live2d-3').then(m => m.default);

Vue.use(Router)

export default new Router({
  scrollBehavior: () => ({
    y: 0
  }),
  routes: [
    {
      path: '/',
      name: 'live2d',
      component: starter
    },
    {
      path: '/live2d',
      name: 'live2d',
      component: l2dComponent
    },
    {
      path: '/live2d-3',
      name: 'live2d-3.0',
      component: l2d3Component
    }    
  ]
})
