import { createApp } from 'vue';
import { createRouter, createWebHistory } from 'vue-router';

import App from './App.vue';
import TeamsList from './components/teams/TeamsList.vue';
import UsersList from './components/users/UsersList.vue';
import TeamMembers from './components/users/TeamMembers.vue';
import NotFound from './components/nav/NotFound.vue';
import TeamsFooter from './components/teams/TeamsFooter.vue';
import UsersFooter from './components/teams/UsersFooter.vue';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', redirect: '/teams' },
    { 
      name: 'teams',
      path: '/teams', 
      components: { 
        default: TeamsList, 
        footer: TeamsFooter 
      },
      children: [
        { name: 'team-members', path: 'teamId', component: TeamMembers, props: true }
      ] 
    },
    { 
      path: '/users', 
      components: {
        default: UsersList, 
        footer: UsersFooter 
      }
    },
    { path: '/teams/:teamId', component: TeamMembers }, //En caso de habilitar las props: "propName" en una ruta, tdebe ponerse al ultimo para no sobreescribir las demas
    { path: '/:notFound(.*)', component: NotFound }, // esta direccion se debe poner al ultimo para no sobrescribir las demas
  ],
  linkActiveClass: 'active',
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    }
    return {left: 0, top: 0};
  }
});


router.beforeEach(function(to, from, next) {

  next();
})

const app = createApp(App)

app.use(router); //conecta nuestra aplicacion de vue con paquetes externet ej: router 

app.mount('#app');
