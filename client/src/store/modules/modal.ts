const state = {
    componentList: []
}

const getters = {
    getModal: (state) => state.componentList
}

const actions = {
    addModal: ({ commit }, payload) => {
        commit('addModal', payload);
    },
    closeModal: ({ commit }, payload) => {
        console.log('this is the pay load ', payload);
        commit('closeModal', payload);
    }
}

const mutations = {
    addModal: (state, modal) => state.componentList.push(modal),
    closeModal: (state, modalId) => state.componentList = state.componentList.filter(component => {
        return component.id !== modalId;
    })
}

export default {
    state,
    getters,
    actions,
    mutations
}