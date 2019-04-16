import Vuex from 'vuex'
import Vue from 'vue'
import todos from './modules/todos'
import tasks from './modules/tasks'
import users from './modules/users'
import projects from './modules/projects';

// Load the Vuex

Vue.use(Vuex)

// create the store
export default new Vuex.Store({
  modules: {
    todos,
    tasks,
    users,
    projects
  }
})
