<script setup>
import { defineProps } from 'vue';

const props = defineProps({
    product: {
        type: Object
    }
})

</script>

<template>
    <div>
        <div class="title">
            <h1>{{product.nombre}}</h1>
        </div>
        <div class="container-info">
            <div class="imagen">
                <img :src="product.img" alt="" width="100%">
            </div>
            <div class="info">
                <p> <b>Descripción:</b> {{product.descripcion}}</p>
                <br>
                <p> <b>Precio:</b> {{product.precio}} €</p>
            </div>
        </div>
    </div>
</template>

<style scoped>
.info>* {
    font-size: 20px;
}
.info {
    width: 50%;
    height: 100%;
}
.container-info {
    display: flex;
    flex-direction: row;
}
.title {
    width: 100%;
    text-align: center;
    margin-bottom: 10px;
}
.imagen {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 50%;
    /* height: 225px; */
}
.imagen>img {
    width: 225px;
}

</style>