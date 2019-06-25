const state = {
    componentList: [],
    fullSize: false
}

const getters = {
    getModal: (state) => state.componentList,
    getFullSize: (state) => state.fullSize
}

const actions = {
    addModal: ({ commit }, payload) => {
        commit('addModal', payload);
    },
    closeModal: ({ commit }, payload) => {
        commit('closeModal', payload);

    },
    toggleFullSize: ({ commit }, payload) => {
        commit('toggleFullSize', payload);
    },
    toggleMinimize: ({ commit }, payload) => {
        commit('toggleMinimize', payload);
    }
}

const mutations = {
    addModal: (state, modal) => state.componentList.push(modal),
    closeModal: (state, modalId) => {
        if (state.fullSize) state.fullSize = false;
        state.componentList = state.componentList.filter(component => {
            return component.id !== modalId;
        });
    },
    toggleFullSize: (state, modalId) => {
        state.fullSize = !state.fullSize;
        state.componentList.map(component => {
            if (component.id === modalId) {
                component.fullSize = !component.fullSize;
            }
        })
    },
    toggleMinimize: (state, modalId) => {
        state.componentList.map(component => {
            if (component.id == modalId) {
                if (component.fullSize) {
                    component.fullSize = false;
                    state.fullSize = false;
                }

                component.minimized = !component.minimized;
            }
        })
    }
}

export default {
    state,
    getters,
    actions,
    mutations
}