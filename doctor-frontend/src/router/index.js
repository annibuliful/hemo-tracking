import Vue from "vue";
import Router from "vue-router";
import feathers,{doctorInformationService} from "../plugins/feathers.js";
import getUserId from '../plugins/getUserId.js';
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
    feathers.authenticate().then(async({accessToken})=>{
      const userId = getUserId(accessToken);
      const {data} = await doctorInformationService.find({
        query:{
          userId:'22',
          $limit: 1
        }
      })
      if(data.length > 0 ){
        next('/dashboard');
      }else{
        next('/');
      }
    }).catch((err) => {
      next(true);
    })

  } else {
    feathers.authenticate().then(async({accessToken}) => {
      const userId = getUserId(accessToken);
      const {data} = await doctorInformationService.find({
        query:{
          userId,
          $limit: 1
        }
      })
      if(data.length > 0 ){
        next(true);
      }else{
        next('/');
      }
    }).catch((err) => {
      next('/');
    })

  }


})
export default router
