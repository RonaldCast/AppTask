//dependences
import Vue from 'vue'
import VueRouter from 'vue-router'

//component
import Signin from './components/auth/Signin.vue'
import Signup from './components/auth/Signup.vue'
import MainApp from './components/MainApp.vue'
import MainTask from './components/Tasks/MainTask.vue'
import User from './components/User/MainUser.vue'
import NotFound from './components/NotFound.vue'

const routes = [
         {
           path: "/signin",
           component: Signin,
           name: "signin",
           meta: {
             guest: true
           }
         },
         {
           path: "/signup",
           component: Signup,
           name: "signup",
           meta: {
             guest: true
           }
         },
         {
           path: "/",
           component: MainApp,
           children: [
             {
               path: "",
               component: MainTask,
               name: "task",
               meta: { authentication: true }
             },
             {
               path: "/user",
               component: User,
               name: "user",
               meta: { authentication: true }
             }
           ]
         },
         { path: "*", component: NotFound }
       ];

       
Vue.use(VueRouter);

const router = new VueRouter({
  mode: "history",
  routes
});
  router.beforeEach((to, from, next) => {
    if (to.matched.some(record => record.meta.authentication)) {
      if (localStorage.getItem("jwt") == null) {
        next({
          path: "/signin",
          params: { nextUrl: to.fulPath }
        });
      } else {
        next();
      }
    } else if (to.matched.some(record => record.meta.guest)) {
      if (localStorage.getItem("jwt") == null) {
        next();
      } else {
        next({ path: "/" });
      }
    } else {
      next();
    }
  });


  export default router