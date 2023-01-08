<script setup>
import SectionAdmin from "../../components/header/adminSections.vue"
import { RouterLink } from 'vue-router'

const routes = [
  {
    path: '/admin/users',
    title: 'users',
    icon: 'fa-user-circle',
  },
  {
    path: '/admin/tables',
    title: 'tables',
    icon: 'md-tablerestaurant',
  },
  {
    path: '/admin/reserve',
    title: 'reserveAdmin',
    icon: 'bi-calendar-event-fill',
  },
  {
    path: '/admin/order',
    title: 'order',
    icon: 'fa-shopping-cart',
  },
  {
    path: '/admin/product',
    title: 'product',
    icon: 'fa-utensils'
  }
]

</script>

<template>

  <div class="container_panel_admin">
    <nav>
      <RouterLink to="/">
        <img src="../../../public/ggFood_logo.png" alt="" width="100">
      </RouterLink>
      <RouterLink v-for="(item, index) in routes" :key="index" :to=item.path>
        <SectionAdmin :title=item.title :icon=item.icon />
      </RouterLink>
    </nav>
    <div class="admin-view">
      <RouterView />
    </div>
  </div>


</template>

<style scoped>
/* html, body {
  margin: 0;
  padding: 0;
  height: 100%;
  width: 100%;
  background-color: red;
} */
.container_panel_admin {
  /* padding-top: 10px; */
  /* background-color: red;  */
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 100vh;
}

.container_panel_admin>nav {
  position: fixed;
  background-color: #a97555;
  width: 100px;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
}

nav>a:nth-child(1) {
  margin-top: 5px;
}

.admin-view {
  /* background-color: green; */
  width: 94%;
  padding: 10px 15px;
  padding-left: 175px;
}
</style>