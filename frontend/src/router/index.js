import Vue from 'vue'
import Router from 'vue-router'
import feathers from '../plugins/feathers.js';
import SignUpPage from '../pages/SignUp.vue';
import SignInPage from '../pages/SignIn.vue';
import DashboardPage from '../pages/dashboard.vue';
import InjectionPage from '../pages/injection.vue';
import InjuryPage from '../pages/injury.vue';
import PermissionPage from '../pages/permission.vue';
import LifeQualityPage from '../pages/life-quality.vue';
Vue.use(Router)

const router = new Router({
  mode: 'history',
  routes: [{
      path: '/',
      name: 'signin',
      component: SignInPage
    },
    {
      path: '/reg',
      name: 'signup',
      component: SignUpPage
    },
    {
      path: '/dashboard',
      name: 'dasboard',
      component: DashboardPage
    }, 
    {
      path: '/injection',
      name: 'injection',
      component: InjectionPage
    },
    {
      path: '/injury',
      name: 'injury',
      component: InjuryPage
    },{
      path: '/permission',
      name: 'permission',
      component: PermissionPage
    },{
      path: '/life',
      name: 'life',
      component: LifeQualityPage
    }
  ]
})
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
