const state = {
    componentList: []
}

const getters = {
    getModal: (state) => state.componentList
}

const actions = {
    addModal: ({ commit }, payload) => {
        commit('addModal', payload);
    }
}

const mutations = {
    addModal: (state, modal) => state.componentList.push(modal)
}

export default {
    state,
    getters,
    actions,
    mutations
}