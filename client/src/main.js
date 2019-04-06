import Vue from 'vue'
import App from './App.vue'
import store from './store'

import taskBoard from './components/taskBoard'
import taskBoards from './components/taskBoards'
import Tasks from './components/tasks.vue'
import AddTasks from './components/addTasks.vue'
import navbar from './components/navbar.vue'
import brandSection from './components/brandSection.vue'
import authentication from './components/authentication'
import users from './components/users.vue'
import signup from './components/signup'
import login from './components/login'

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
