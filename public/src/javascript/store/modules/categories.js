import axios from 'axios';
import * as types from '../mutation-types';

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
    },
    [types.SET_CURRENT_FOLDER](state, folderId) {
        state.currentFolder = folderId;
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
        commit(types.SET_CURRENT_FOLDER, payload.folderId || state.currentCategory.id);
    }
};

export default {
    state,
    mutations,
    actions,
    namespaced: true
};
