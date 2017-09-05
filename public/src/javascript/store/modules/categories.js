import * as types from '../mutation-types';
import axios from 'axios';

const state = {
    categories: [
        {
            id: 1,
            name: '电子书',
            route: '/books',
            icon: 'fa-file-pdf-o'
        },
        {
            id: 2,
            name: '照片',
            route: '/photos',
            icon: 'fa-file-image-o'
        },
        {
            id: 3,
            name: '其他文件',
            route: '/otherfiles',
            icon: 'fa-file-text-o'
        }
    ],
    currentCategory: {},
    currentFolder: ''
};

const mutations = {
    [types.SET_CURRENT_CATEGORY](state, newCurrentCategory) {
        state.currentCategory = newCurrentCategory;
    }
};

const actions = {
    setCurrentCategory({ commit, state }, payload) {
        let categories = state.categories;
        let res = categories.filter((item) => {
            return payload.fullPath.indexOf(item.route) === 0;
        })[0];
        commit(types.SET_CURRENT_CATEGORY, res);
    },
    setCurrentFolder({ commit, state }, payload) {
        
    }
};

export default {
    state,
    mutations,
    actions,
    namespaced: true
};
