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
                name: '首页',
                component: r => require.ensure([], () => r(require('@/view/dashboard')), 'home'),
            }, {
                path: '/userAdmin/userList',
                name: '用户列表',
                meta: { blockName: '用户管理' },
                component: r => require.ensure([], () => r(require('@/view/userAdmin/userList')), 'userAdmin')
            }, {
                path: '/productAdmin/productList',
                name: '产品管理',
                meta: { blockName: '产品列表' },
                component: r => require.ensure([], () => r(require('@/view/productAdmin/productList')), 'productAdmin')
            }, {
                path: '/dictionary',
                name: '字典表',
                meta: { blockName: '字典表' },
                component: r => require.ensure([], () => r(require('@/view/dictionary/dictionary')), 'dictionary')
            }, {
                path: '/ueditor',
                name: '富文本',
                meta: { blockName: '富文本' },
                component: r => require.ensure([], () => r(require('@/view/ueditor/ueditor')), 'ueditor')
            }, {
                path: '/i18n',
                name: 'i18n',
                meta: { blockName: '国际化' },
                component: r => require.ensure([], () => r(require('@/view/i18n/index')), 'i18n')
            }]
        }
    ]
})