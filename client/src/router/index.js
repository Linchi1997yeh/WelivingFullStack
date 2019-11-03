import Vue from 'vue';
import VueRouter from 'vue-router';
import Login from '../views/Login.vue'
import Notification from '../views/Notification.vue'
import EmptyHouse from '../views/EmptyHouse.vue'

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
    },
    {
      path: '/emptyhouse',
      name: 'emptyhouse',
      component: EmptyHouse
    }
    
  ]
});
