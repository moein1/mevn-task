import axios from 'axios'
const url = 'api/users'

const state = {
  user: {},
  users: []
}

const getters = {
  allUsers: state => state.users
}

const actions = {
  fetchUsers: async ({ commit }) => {
    const response = await axios.get(url)
    commit('setUsers', response.data)
  },

  addUser: async ({ commit }, payload) => {
    console.log('this is the paylaod for addng new user ', payload)
    const response = await axios.post(url, payload)
    console.log(
      'this is the response that we recieved from tje server ',
      response
    )
    commit('newUser', response.data.user)
  },
  login: async ({ commit }, payload) => {
    try {
      const response = await axios.post(`${url}/login`, payload)
      console.log('this is the repponse ', response)
      if (response.data.user) commit('login', response.data.user)
    } catch (err) {
      console.log('this is the error that we recieve in client side ', err)
    }
  }
}

const mutations = {
  setUsers: (state, users) => (state.users = users),
  newUser: (state, user) => {
    console.log('this is the new user in the mutation ', user, state.users)
    state.users.push(user)
  },
  login: (state, response) => {
    console.log('this is the login mutation ', response)
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
