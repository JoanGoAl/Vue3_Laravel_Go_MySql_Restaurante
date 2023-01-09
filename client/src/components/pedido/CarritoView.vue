<script setup>
import { useStore } from "vuex";
import { reactive, computed, ref } from "vue";
import Constant from "../../Constant"
import TargetCarrito from "./TargetCarrito.vue";

const store = useStore();

const state = reactive({
    cart: computed(() => store.getters['carrito/' + Constant.GET_CART]),
})

const getNumberOfProducts = () => {
    let temp = 0;
    state.cart.forEach(item => {
        temp += item.cantidad
    });
    return temp
}

</script>

<template>
    <div class="container-carrito">
        <div class="title">
            <h1>Carrito</h1>
            <h3>Cantidad: {{ getNumberOfProducts() }}</h3>
        </div>
        <div class="container-products">
            <div v-for="producto in state.cart">
                <TargetCarrito :product="producto"/>
            </div>
        </div>
        <div class="container-buttons">

        </div>
    </div>
</template>

<style scoped>
.container-carrito {
    height: 100%;
}

.container-buttons {
    height: 10%;
    background-color: blue;
}
.container-products {
    background-color: red;
    height: 80%;
    /* overflow-y: scroll; */
}
.title {
    height: 10%;
    text-align: center;
}
</style>