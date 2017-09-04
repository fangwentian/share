import * as types from '../mutation-types'
import axios from 'axios'

const state = {
    files: []
}

const mutations = {
    [types.ADD_FOLDER] (state, folder) {
        state.files.push(folder);
    },
    [types.GET_FILES_BY_TYPE] (state, list) {
        state.files = list;
    }
}

const actions = {
    addFolder({commit, state}, folder) {
        axios.post('/addFolder', folder).then((res) => {
            if(res.data.code == 200) {
                commit(types.ADD_FOLDER, folder)
            }
        })
    },
    addFile({commit, state}, file) {
        axios.post('/addFile', file).then((res) => {
            if(res.data.code == 200) {
                commit(types.ADD_FOLDER, folder)
            }
        })
    },
    getFilesByType({commit, state}, category) {
        axios.post('/getFilesByType', {category}).then((res) => {
            if(res.data.code == 200) {
                commit(types.GET_FILES_BY_TYPE, res.data.result.list);
            }
        })
    }
}

export default {
    state,
    mutations,
    actions,
    namespaced: true
}