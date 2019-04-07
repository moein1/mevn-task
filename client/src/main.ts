import Vue from 'vue'
import App from './App.vue'
import store from './store'

import taskBoard from './components/taskBoard.vue'
import taskBoards from './components/taskBoards.vue'
import Tasks from './components/tasks.vue'
import AddTasks from './components/addTasks.vue'
import navbar from './components/navbar.vue'
import brandSection from './components/brandSection.vue'
import authentication from './components/authentication.vue'
import users from './components/users.vue'
import signup from './components/signup.vue'
import login from './components/login.vue'

import 'font-awesome/css/font-awesome.css'
import router from './router'

Vue.component('taskBoard', taskBoard)
Vue.component('taskBoards', taskBoards)
Vue.component('navbar', navbar)
Vue.component('brandSection', brandSection)
Vue.component('authentication', authentication)
Vue.component('Tasks', Tasks)
Vue.component('AddTasks', AddTasks)
Vue.component('Users', users)
Vue.component('signup', signup)
Vue.component('login', login)

Vue.config.productionTip = false

new Vue({
  store,
  router,
  render: h => h(App)
}).$mount('#app')
