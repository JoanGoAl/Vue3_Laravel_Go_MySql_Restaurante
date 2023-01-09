<script setup>
import { useStore } from "vuex";
import { reactive, computed, ref } from "vue";
import Constant from "../../Constant"
import TargetCarrito from "./TargetCarrito.vue";
import PedidoService from "@/services/PedidoService";

const store = useStore();

const state = reactive({
    cart: computed(() => store.getters['pedidos/' + Constant.GET_CART]),
})

const getNumberOfProducts = () => {
    let temp = 0;
    state.cart.forEach(item => {
        temp += item.cantidad
    });
    return temp
}

const delteCart = () => {
    store.dispatch("pedidos/" + Constant.CLEAR_CART);
}

const sendCard = () => {
    let info = {
        idcliente: 1,
        pedido: JSON.stringify(state.cart),
        precio: state.cart.reduce((acc, item) => acc + (item.precio * item.cantidad), 0),
        status: 0
    }

    PedidoService.setPedido(info)
        .then(res => {
            console.log(res);
        }).catch(err => {
            console.log(err);
        })
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
                <TargetCarrito :product="producto" />
            </div>
        </div>
        <div class="container-buttons">
            <div>
                <h3>Total: {{ state.cart.reduce((acc, item) => acc + (item.precio * item.cantidad), 0) }} €</h3>
            </div>
            <div>
                <button class="delete" @click="delteCart">Eliminar carrito</button>
                <button class="comprar" @click="sendCard">Comprar</button>
            </div>
        </div>
    </div>
</template>

<style scoped>
.comprar {
    padding: 5px;
    background-color: green;
    color: white;
    border: none;
    border-radius: 5px;
    margin-right: 15px;
}

.comprar:hover,
.delete:hover {
    cursor: pointer;
}

.delete {
    padding: 5px;
    background-color: red;
    color: white;
    border: none;
    border-radius: 5px;
    margin-right: 15px;
}

.container-buttons {
    display: flex;
    justify-content: space-between;
}

.container-carrito {
    height: 100%;
}

.container-buttons {
    height: 10%;
}

.container-products {
    height: 80%;
    overflow-y: scroll;
}

.title {
    height: 10%;
    text-align: center;
}
</style>