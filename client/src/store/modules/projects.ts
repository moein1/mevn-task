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
            const response = await axios.put(url, payload);
            if (response.data.project) commit('updateProject', response.data.projet);
        } catch (err) {
            console.log('this is the error for updating the project ');
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
        state.projects.map(projectItem => {
            if (projectItem.id === project.id) projectItem = project;
        })
    }
}

export default {
    state,
    getters,
    actions,
    mutations
}