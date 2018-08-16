// import Vue from 'vue'
// import "babel-polyfill"
import vuex from 'vuex'
import vuexAlong from 'vuex-along'
Vue.use(vuex);
const state = {
    isCollapse: false,
    isLogin: false
};
const mutations = {
    isCollapse(state) {
        state.isCollapse = !state.isCollapse;
    },
    isLogin(state, val) {
        state.isLogin = val
    }
};
export default new vuex.Store({
    state: state,
    mutations: mutations,
    plugins: [vuexAlong]
})