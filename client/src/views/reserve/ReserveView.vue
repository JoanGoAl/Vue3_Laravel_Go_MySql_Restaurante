<script setup>
import TableService from '@/services/tables.service'

async function hola() {
    let tables = await TableService.getTables()
    console.log(tables.data);
}

function adios() {
    let fecha = new Date('Wed Nov 30 2022 19:11:10 GMT+0100 (hora estándar de Europa central)')
    fecha.setMonth(fecha.getMonth() + 1)
    fecha.setDate(fecha.getDate() - 13)
    console.log(fecha);
}
</script>

<template>
    <h1>Reservar</h1>
    <button @click="hola">Hola</button>
    <button @click="adios">Adios</button>
</template>