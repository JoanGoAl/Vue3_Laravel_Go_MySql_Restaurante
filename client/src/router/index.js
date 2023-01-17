import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/home/HomeView.vue'
import ReserveView from '../views/reserve/ReserveView.vue'
import PanelAdminView from '../views/panelAdmin/panelAdminView.vue'
import NotFoundView from '../views/notFound/notFoundView.vue'
import PedidoView from '../views/pedido/PedidoView.vue'
import LoginView from '../views/login/LoginView.vue'
import RegisterView from '../views/login/RegisterView.vue'
import AuthGuards from '../services/guards/AuthGuards'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/', redirect: '/home' },
    { path: '/home', name: 'home', component: HomeView },
    { path: '/reserve', name: 'reserve', component: ReserveView, beforeEnter: AuthGuards.isAuth, meta: { requiresAuth: true } },
    { path: '/pedido', name: 'pedido', component: PedidoView, beforeEnter: AuthGuards.isAuth, meta: { requiresAuth: true } },
    { path: '/profile', name: 'profile', component: ReserveView },
    { path: '/login', name: 'login', component: LoginView, beforeEnter: AuthGuards.isNotAuth, meta: { requiresAuth: true } },
    { path: '/register', name: 'register', component: RegisterView, beforeEnter: AuthGuards.isNotAuth, meta: { requiresAuth: true } },
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
      ],
      beforeEnter: AuthGuards.authGuardAdmin, meta: { requiresAuth: true }
    },
    { path: '/:pathMatch(.*)*', name: 'not-found', component: NotFoundView }
  ]
})

export default router