import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';
import CreateRoom from '../views/CreateRoom.vue';
import ShowTeam from '../views/ShowTeam.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/create-room',
    name: 'CreateRoom',
    component: CreateRoom,
  },
  {
    path: '/show-team',
    name: 'ShowTeam',
    component: ShowTeam,
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
