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
    store.dispatch("carrito/" + Constant.ADD_TO_CART, {product, cant: parseInt(cant.value)})
}

const setCant = (e) => {
    cant.value = e.target.value
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
            <div style="margin-bottom: 5px;">
                <label for="cantidad" style="margin-right: 5px;" >Cantidad</label>
                <input type="number" @change="setCant" name="cantidad" id="cantidad" min="1" max="10" value="1" class="cantidad-producto">
            </div>
            <button class="btn btn-primary" @click="addCart(product)">Añadir al carrito</button>
        </div>
    </div>
</template>

<style scoped>
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