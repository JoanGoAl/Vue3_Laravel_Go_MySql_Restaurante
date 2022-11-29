<script setup>
import TableService from '@/services/tables.service'

async function hola() {
    let tables = await TableService.getTables()
    console.log(tables.data);
}

</script>

<template>
    <h1>Reservar</h1>
    <button @click="hola">Hola</button>

</template>