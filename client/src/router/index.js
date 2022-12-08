import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/home/HomeView.vue'
import ReserveView from '../views/reserve/ReserveView.vue'
import PanelAdminView from '../views/panelAdmin/panelAdminView.vue'
import NotFoundView from '../views/notFound/notFoundView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { 
      path: '/', 
      redirect: '/home'
    },
    { path: '/home', name: 'home', component: HomeView },
    { path: '/reserve', name: 'reserve', component: ReserveView },
    { path: '/profile', name: 'profile', component: ReserveView },
    { 
      path: '/admin', 
      name: 'panelAdmin', 
      component: PanelAdminView,
      children: [
        {path: '/', redirect: '/admin'},
        // {path: 'tables', name: 'rooms', component: () => import('../views/panelAdmin/rooms/RoomsView.vue')},
        // {path: 'users', name: 'users', component: () => import('../views/panelAdmin/users/UsersView.vue')},
        // {path: 'reservations', name: 'reservations', component: () => import('../views/panelAdmin/reservations/ReservationsView.vue')},
      ]
    },

    { path: '/:pathMatch(.*)*', name: 'not-found', component: NotFoundView }
  ]
})

export default router
