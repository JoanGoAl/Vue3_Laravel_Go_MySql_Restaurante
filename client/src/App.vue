<script setup>
import { RouterView } from 'vue-router'
import HeaderVue from './components/header/Header.vue';

// console.log(this.$route.query.page);
</script>

<template>
  <HeaderVue />
  <RouterView />
</template>

