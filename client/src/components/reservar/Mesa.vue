<script setup>
import { defineProps } from 'vue';
const props = defineProps({
    table: {
        type: Object,
    },
    isReserved: {
        type: Boolean,
    },
    selectMesa: {
        type: Function,
    },
})


</script>

<template >
    <div class="container-mesa">
        <div class="mesa" @click="selectMesa(props.table.id)">
            <img v-bind:src="`../../../${table.img}.png`" alt="" width="100">
            <div class="info-table">
                <div class="number-mesa"><b>Mesa:</b> {{ props.table.id }}</div>
                <div class="number-mesa"><b>Ubicacion:</b> {{ props.table.type }}</div>
                <div class="number-mesa"><b>Comensales:</b> {{ props.table.capacity }}</div>
            </div>
        </div>

    </div>
</template>

<style scoped>
.info-table {
    width: 80%;
    height: 100%;
    padding: 5px;
}
.mesa {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: row
}
.container-mesa {
    padding: 10px;
    width: 100%;
    height: 100%;
    display: flex;
    box-shadow:  0 0 10px 0 rgba(0, 0, 0, 0.2);
    border-radius: 5px;
}

.number-mesa {
    width: 100%;
    text-align: right;
}
</style>