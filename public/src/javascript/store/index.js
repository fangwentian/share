import Vue from 'vue';
import Vuex from 'vuex';
import state from './state';
import actions from './actions';
import mutations from './mutations';
import getters from './getters';
import categories from './modules/categories';
import files from './modules/files';

Vue.use(Vuex);

const store = new Vuex.Store({
    state,
    actions,
    mutations,
    getters,
    modules: {
        categories,
        files
    }
});

export default store;
