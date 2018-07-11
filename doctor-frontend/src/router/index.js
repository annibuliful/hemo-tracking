import Vue from "vue";
import Router from "vue-router";
import feathers from "../plugins/feathers.js";
import SignUpPage from "../pages/Signup.vue";
import SignInPage from "../pages/Signin.vue";
import DashboardPage from "../pages/Dashboard.vue";
Vue.use(Router);

const router = new Router({
  routes: [
    {
      path: "/",
      name: "signin",
      component: SignInPage
    },
    {
      path: "/reg",
      name: "signup",
      component: SignUpPage
    },
    {
      path: '/dashboard',
      name: 'dashboard',
      component: DashboardPage
    }
  ]
});

router.beforeEach((to, from, next) => {
  if (to.name === 'signin' || to.name === 'signup') {
    feathers.authenticate().then(()=>{
      next('/dashboard');
    }).catch((err) => {
      next(true)
    })

  } else {
    feathers.authenticate().then(() => {
      next(true)
    }).catch((err) => {
      next('/')
    })

  }


})
export default router
