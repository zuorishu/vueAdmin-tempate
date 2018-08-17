// import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)
export default new Router({
    routes: [{
            path: '/',
            redirect: '/login'
        },
        {
            path: '/login',
            component: r => require.ensure([], () => r(require('@/view/Login')), 'login'),
            meta: { islogin: false }
        },
        {
            path: '',
            component: r => require.ensure([], () => r(require('@/view/Home')), 'home'),
            children: [{
                path: '/home',
                name: 'nav.home',
                component: r => require.ensure([], () => r(require('@/view/dashboard')), 'home'),
            }, {
                path: '/userAdmin/userList',
                name: 'nav.userAdmin',
                meta: {},
                component: r => require.ensure([], () => r(require('@/view/userAdmin/userList')), 'userAdmin')
            }, {
                path: '/productAdmin/productList',
                name: 'nav.productAdmin',
                meta: {},
                component: r => require.ensure([], () => r(require('@/view/productAdmin/productList')), 'productAdmin')
            }, {
                path: '/dictionary',
                name: 'nav.dictionary',
                meta: {},
                component: r => require.ensure([], () => r(require('@/view/dictionary/dictionary')), 'dictionary')
            }, {
                path: '/ueditor',
                name: 'nav.ueditor',
                meta: {},
                component: r => require.ensure([], () => r(require('@/view/ueditor/ueditor')), 'ueditor')
            }, {
                path: '/i18n',
                name: 'nav.i18n',
                meta: {},
                component: r => require.ensure([], () => r(require('@/view/i18n/index')), 'i18n')
            }]
        }
    ]
})