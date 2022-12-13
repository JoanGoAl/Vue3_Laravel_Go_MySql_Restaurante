<script setup>
import { defineProps } from 'vue';

const props = defineProps({
  table: {
    type: Object
  }
})

</script>

<template>

  <div class="container-info">
    <h1>hola</h1>

  </div>
</template>

<style scoped>
.container-info {
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;
}
</style>