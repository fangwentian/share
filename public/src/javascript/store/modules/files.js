import axios from 'axios';
import * as types from '../mutation-types';

const state = {
    files: [],
    breadcrumb: []
};

const mutations = {
    [types.ADD_FOLDER](state, folder) {
        state.files.push(folder);
    },
    [types.ADD_FILE](state, fileList) {
        state.files = state.files.concat(fileList);
    },
    [types.GET_FILE_LIST](state, list) {
        state.files = list;
    },
    [types.SEARCH_FILE_LIST](state, list) {
        state.files = list;
    },
    [types.HIDE_ALL_MENU](state) {
        state.files = state.files.map((file) => {
            file.isShowMenu = false;
            return file;
        });
    },
    [types.SHOW_MENU](state, file) {
        state.files = state.files.map((item) => {
            if (item._id === file._id) {
                item.isShowMenu = true;
            }
            return item;
        });
    },
    [types.DELETE_FILE](state, id) {
        state.files = state.files.filter(item => item._id !== id);
    },
    [types.SET_BREAD_CRUMB](state, breadcrumb) {
        state.breadcrumb = breadcrumb;
    }
};

const actions = {
    addFolder({ commit, state }, folder) {
        axios.post('/addFolder', folder).then((res) => {
            if (res.data.code === 200) {
                commit(types.ADD_FOLDER, res.data.result.folder);
            }
        });
    },
    addFile({ commit, state }, fileList) {
        axios.post('/addFile', fileList).then((res) => {
            if (res.data.code === 200) {
                commit(types.ADD_FILE, res.data.result.fileList);
            }
        });
    },
    getFileList({ commit, state }, folderId) {
        axios.post('/getFileList', { folderId }).then((res) => {
            if (res.data.code === 200) {
                commit(types.GET_FILE_LIST, res.data.result.list);
            }
        });
    },
    getBreadcrumb({ commit, state }, folderId) {
        axios.post('/getBreadcrumb', { folderId }).then((res) => {
            if (res.data.code === 200) {
                commit(types.SET_BREAD_CRUMB, res.data.result.breadcrumb);
            }
        });
    },
    hideAllMenu({ commit, state }) {
        commit(types.HIDE_ALL_MENU);
    },
    showMenu({ commit, state }, file) {
        commit(types.SHOW_MENU, file);
    },
    deleteFile({ commit, state }, file) {
        axios.post('/deleteFile', { fileId: file._id }).then((res) => {
            if (res.data.code === 200) {
                commit(types.DELETE_FILE, file._id);
            }
        });
    },
    searchFileList({ commit, state }, keyWords) {
        axios.post('/searchFileList', { keyWords }).then((res) => {
            if (res.data.code === 200) {
                commit(types.SEARCH_FILE_LIST, res.data.result.list);
            }
        });
    }
};

export default {
    state,
    mutations,
    actions,
    namespaced: true
};
