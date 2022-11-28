<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <div class="container-header">
    <div>Logo</div>
    <nav>
      <RouterLink to="/">Home</RouterLink>
      <RouterLink to="/reserve">Reservar</RouterLink>
      <RouterLink to="/profile">Perfil</RouterLink>
    </nav>
  </div>

  <RouterView />
</template>

<style scoped>
.container-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  box-shadow: -1px 3px 9px -4px rgba(0, 0, 0, 0.32);
}

nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 15%;
}
</style>
