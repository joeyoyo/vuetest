import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)
export default new Router({
    mode: 'history',
    routes:[
        {
            path:'/A',
            component:() => import('./components/form/A.vue')
        },
        {
            path:'/B',
            component:() => import('./components/form/B.vue')
        },
        {
            path:'/form',
            component:() => import('./components/form/form.vue')
        },
        {
            path:'*', redirect:'/A'
        }
    ]
})