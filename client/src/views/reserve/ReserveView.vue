<script setup>
import TableService from '@/services/tables.service'

function hola() {
    console.log(TableService.getTables());
}

</script>

<template>
    <h1>Reservar</h1>
    <button @click="hola">Hola</button>

</template>