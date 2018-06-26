import Vue from 'vue'
import Router from 'vue-router'
import SignUpPage from '../pages/SignUp.vue';
import SignInPage from '../pages/SignIn.vue';
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'signin',
      component: SignInPage
    },
    {
      path: '/reg',
      name: 'signup',
      component: SignUpPage
    }
  ]
})
