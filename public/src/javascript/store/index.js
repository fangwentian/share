import Vue from 'vue';
import Vuex from 'vuex';
import state from './state';
import actions from './actions';
import mutations from './mutatations';
import getters from './getters';
import categories from '.modules/categories';

Vue.use(Vuex);

const store = Vuex.Store({
    state,
    actions,
    mutatations,
    getters,
    modules: {
        categories
    }
})

export default store;