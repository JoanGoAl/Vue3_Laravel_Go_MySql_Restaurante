<script setup>
import { RouterView } from 'vue-router'
import HeaderVue from './components/header/Header.vue';
import FooterVue from './components/footer/Footer.vue';
// console.log(this.$route.query.page);
</script>

<template>
  <HeaderVue v-if="$route.path.split('/')[1] !== 'admin'" />
  <RouterView />
  <FooterVue v-if="$route.path.split('/')[1] !== 'admin'" />
</template>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
</style>