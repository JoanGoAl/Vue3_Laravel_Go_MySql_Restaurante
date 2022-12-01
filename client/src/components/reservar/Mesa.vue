<script setup>
import { defineProps } from 'vue';
const props = defineProps({
    table: {
        type: Object,
    },
})

const reserved = props.table.reserved ? 'reservada' : 'disponible';

const selectMesa = () => {
    if (!props.table.reserved) {
        console.log('mesa seleccionada', props.table.id);
    }
}

</script>

<template >
    <div class="container-mesa">
        <div v-bind:class="`mesa ${reserved}`" v-on:click="selectMesa">
            <img v-bind:src="`../../../${table.img}.png`" alt="" width="100">
            <div class="number-mesa">Mesa {{ props.table.id }}</div>
        </div>
    </div>
</template>

<style>
.container-mesa {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
}

.reservada {
    filter: brightness(30%);
}

.reservada:hover {
    cursor: not-allowed;
}

.disponible {
    opacity: 0.5;
}

/* .mesa {
    opacity: 0.5;
} */

.disponible:hover {
    opacity: 1;
    cursor: pointer;
}

.number-mesa {
    width: 100%;
    text-align: center;
}
</style>