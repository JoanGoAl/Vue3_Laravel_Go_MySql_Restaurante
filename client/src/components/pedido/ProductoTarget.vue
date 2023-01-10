<script setup>

import { useStore } from "vuex";
import { reactive, computed, ref } from "vue";
import Constant from "../../Constant"

const props = defineProps({
    product: {
        type: Object,
        required: true
    }
})

const store = useStore();

const cant = ref('1')

const addCart = (product) => {
    store.dispatch("pedidos/" + Constant.ADD_TO_CART, { product, cant: parseInt(cant.value) })
}

const moreCant = (e) => {
    cant.value = parseInt(cant.value) + 1
}

const lessCant = (e) => {
    if (cant.value > 1) {
        cant.value = parseInt(cant.value) - 1
    }
}



</script>

<template>
    <div class="product">
        <img v-bind:src="product.img" alt="" width="150">
        <div class="info-producto">
            <h1 class="nombre-producto">{{ product.nombre }}</h1>
            <h2 class="precio-producto">{{ product.precio }} €</h2>
        </div>
        <div class="info-producto">
            <h3 class="nombre-descripcion">{{ product.descripcion }}</h3>
            <h3>Tipo producto: {{ product.categoria }}</h3>
        </div>
        <div class="info-producto-añadir">
            <div class="container-input-number">
                <div class="more-less" @click="lessCant">-</div>

                <input type="number" name="cantidad" class="cantidad-producto" :value="cant" />

                <div class="more-less" @click="moreCant">+</div>
            </div>
            <button class="btn btn-primary" @click="addCart(product)">Añadir al carrito</button>
        </div>
    </div>
</template>

<style scoped>
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
}

.more-less {
    user-select: none;
    font-size: 25px;
    font-weight: bold;
    cursor: pointer;
    padding: 0 10px;
    background-color: grey;
    color: white;
    /* display: flex;
    align-items: center;
    justify-content: center; */
}

.more-less:nth-child(1) {
    border-radius: 5px 0 0 5px;
}

.more-less:nth-child(3) {
    border-radius: 0 5px 5px 0;
}

.container-input-number {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    margin-bottom: 10px;
}

input {
    /* margin: 0 15px; */
    width: 25%;
    padding: 5px;
    /* border-radius: 5px; */
    border: 1px solid #ccc;
    font-size: 15px;
    text-align: center;
    box-decoration-break: clone;
    appearance: none;
}

button {
    font-size: 17px;
    color: white;
    background-color: #a97555;
    padding: 5px;
    border-radius: 5px;
    border: none;
    cursor: pointer;
    user-select: none;
}

.info-producto-añadir {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}

.precio-producto {
    text-align: center;
}

.product>div {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}

.product {
    width: 100%;
    height: 150px;
    background-color: white;
    margin-bottom: 10px;
    display: grid;
    grid-template-columns: 10% 35% 35% 20%;
    padding: 0 10px;
}
</style>