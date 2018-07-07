import Vue from "vue";
import Router from "vue-router";
import SignUpPage from "../pages/Signup.vue";
import SignInPage from "../pages/Signin.vue";
Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "Signin",
      component: SignInPage
    },
    {
      path: "/reg",
      name: "Signup",
      component: SignUpPage
    }
  ]
});
