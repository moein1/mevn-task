import axios from 'axios';
import { IProject } from '../../interface/project'
const url = 'api/projects';


const state = {
    project: {},
    projects: []
}

const getters = {
    allProject: (state) => state.projects
}
const actions = {
    addProject: async ({ commit }, payload) => {
        try {
            const response = await axios.post(url, payload);
            if (response.data.project) commit('addProject', response.data.projet);
        } catch (err) {
            console.log('this is the error  for adding the project ', err);
        }

    },
    fetchProjects: async ({ commit }, payload) => {
        try {
            const response = await axios.get(url, payload);
            if (response.data.projects) commit('fetchProjects', response.data.projects);
        } catch (err) {
            console.log('this is the error for getting the projects ', err);
        }
    }
}

const mutations = {
    addProject: (state, project) => {
        state.projects.push(project);
    },
    fetchProjects: (state, projects) => {
        state.projects = projects;
    }
}

export default {
    state,
    getters,
    actions,
    mutations
}