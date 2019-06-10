
import Signin from './components/auth/Signin.vue'
import Signup from './components/auth/Signup.vue'
import MainApp from './components/MainApp.vue'
import MainTask from './components/Tasks/MainTask.vue'
import User from './components/User/MainUser.vue'
import NotFound from './components/NotFound.vue'

export const routes = [
         { path: "/signin", component: Signin, name: 'signin' },
         { path: "/signup", component: Signup, name: 'signup' },
         { path: "/", component: MainApp, children : [
             {path: '', component: MainTask, name: 'task' },
             {path: '/user', component: User, name: 'user'},
             
         ]},
         {path: '*', component: NotFound }
       ];