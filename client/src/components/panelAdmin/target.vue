<script setup>
import { defineProps } from 'vue';

const props = defineProps({
  table: {
    type: Object
  }
})

const hola = ({ table }) => {
  console.log(table)
}

</script>

<template>

  <div class="container-info" v-on:click="hola({ table })">
    <h1>{{ table.id }}</h1>
    <img :src="`../../../public/${table.img}.png`" :alt="table.img" width="50">
  </div>
</template>

<style scoped>
.container-info {
  height: 300px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;
}
</style>