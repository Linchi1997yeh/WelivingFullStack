import Vue from 'vue';
import VueRouter from 'vue-router';
import Login from '../views/Login.vue'
import Notification from '../views/Notification.vue'

Vue.use(VueRouter);


export default new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes : [
    
    {
      path: '/',
      name: 'login',
      component: Login
    },
    {
      path: '/notification',
      name: 'notification',
      component: Notification
    }
    
  ]
});
