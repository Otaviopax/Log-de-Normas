import { createRouter, createWebHistory } from 'vue-router'
import Formulario from '../views/Formulario.vue'
import Historico from '../views/Historico.vue'
import Home from '../views/Home.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/pesquisa/:norma',
      name: 'Pesquisa Normas',
      props: true,
      component: Formulario
    },
    {
      path: '/historico/:id',
      name: 'event-list',
      props: true,
      component: Historico
    },
  ],
})

export default router
