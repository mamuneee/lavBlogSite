import Vue from 'vue'
import Router from 'vue-router'
Vue.use('Router')
import firstPage from './components/pages/myFirstVuePage'
import anotherPage from './components/pages/anotherPage'
import hooks from './components/pages/basic/hooks.vue'
import methods from './components/pages/basic/methods.vue'
const routes = [
    {
        path: '/my-new-vue-route',
        component: firstPage
    },

    {
        path: '/another-route',
        component: anotherPage
    },

    // vue hooks
    {
        path: '/hooks',
        component: hooks
    },

    // vue methods
    {
        path: '/methods',
        component: methods
    }
]

export default new Router({
    mode: 'history',
    routes
})