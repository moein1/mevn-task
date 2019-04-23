import axios from 'axios';
import { IProject } from '../../interface/project'
const url = 'api/projects';


const state = {
    project: {},
    projects: []
}

const getters = {
    allProject: (state) => state.projects,
    singleProject: (state) => Object.assign({}, state.project)
}
const actions = {
    setProject: ({ commit }, payload) => {
        console.log('this is the payload for editing the project ', payload);
        state.project = payload

    },
    addProject: async ({ commit }, payload) => {
        try {
            const response = await axios.post(url, payload);
            if (response.data.project) commit('addProject', response.data.project);
        } catch (err) {
            console.log('this is the error  for adding the project ', err);
        }

    },
    fetchProjects: async ({ commit }) => {
        try {
            const response = await axios.get(url);
            if (response.data.projects) commit('fetchProjects', response.data.projects);
        } catch (err) {
            console.log('this is the error for getting the projects ', err);
        }
    },
    updateProject: async ({ commit }, payload) => {
        try {
            const response = await axios.put(`${url}/${payload.id}`, payload);
            console.log('this is the resutl that reieve after update ', response)
            if (response.data.project) commit('updateProject', response.data.project);
        } catch (err) {
            console.log('this is the error for updating the project ', err);
        }
    },
    deleteProject: async ({ commit }, payload) => {
        try {
            const response = await axios.delete(`${url}/${payload}`)
            console.log('this is the projedt that has been deleted ', response);
            if (response.data.project) commit('deleteProject', response.data.project)
        }
        catch (err) {
            console.log('this is the error we redieved for deleting the project ', err);
        }
    }
}

const mutations = {
    addProject: (state, project) => {
        state.projects.push(project);
    },
    fetchProjects: (state, projects) => {
        state.projects = projects;
    },
    updateProject: (state, project) => {
        /**we need to find the projec in the list and just update it with new props data */
        /**find the index of the project to be updated */
        const index = state.projects.findIndex(porjectitem => { return porjectitem.id === project.id });
        /**remove the item from array and insert the new update instead 
         * and we can see tne new wiil be reflect in the dom */
        state.projects.splice(index, 1, project);
    },
    deleteProject: (state, project) => {
        console.log('this is the mutation for deleteing the project ', project);
        state.projects = state.projects.filter(projectItem => {
            return projectItem.id !== project.id
        })
    }
}

export default {
    state,
    getters,
    actions,
    mutations
}