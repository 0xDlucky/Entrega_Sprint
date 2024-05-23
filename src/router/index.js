import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Acesso from '../views/Acesso.vue'
import HistoricoProduto from '../views/HistoricoProduto.vue'
import CadProduto from '../views/CadProduto.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/acess',
      name: 'acesso',
      component: Acesso
    },
    {
      path: '/historico',
      name: 'historico',
      component: HistoricoProduto
    },
    {
      path: '/cadProduto',
      name: 'cadProduto',
      component: CadProduto
    },
  ]
})

export default router
