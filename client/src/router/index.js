import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/home/HomeView.vue'
import ReserveView from '../views/reserve/ReserveView.vue'
import PanelAdminView from '../views/panelAdmin/panelAdminView.vue'
import NotFoundView from '../views/notFound/notFoundView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/', redirect: '/home' },
    { path: '/home', name: 'home', component: HomeView },
    { path: '/reserve', name: 'reserve', component: ReserveView },
    { path: '/profile', name: 'profile', component: ReserveView },
    {
      path: '/admin',
      name: 'panelAdmin',
      redirect: '/admin/users',
      component: PanelAdminView,
      children: [
        { path: 'tables', name: 'tables', component: () => import('../views/panelAdmin/views/tablesView.vue') },
        { path: 'users', name: 'users', component: () => import('../views/panelAdmin/views/usersView.vue') },
        { path: 'reserve', name: 'reserveAdmin', component: () => import('../views/panelAdmin/views/reserveView.vue') },
        { path: 'order', name: 'order', component: () => import('../views/panelAdmin/views/orderView.vue') },
        { path: 'product', name: 'product', component: () => import('../views/panelAdmin/views/productView.vue') },
      ]
    },
    { path: '/:pathMatch(.*)*', name: 'not-found', component: NotFoundView }
  ]
})

export default router