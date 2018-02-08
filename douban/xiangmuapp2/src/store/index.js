import Vue from 'vue'
import Vuex from 'vuex'
import home from './modules/home'
import class2 from './modules/class'
import list from './modules/list'
import details from './modules/details'
import supermarket from './modules/supermarket'
import cart from './modules/cart'




Vue.use(Vuex)

const Store = new Vuex.Store({
    modules:{
        home, class2, list, details, supermarket, cart
    }
})

export default Store