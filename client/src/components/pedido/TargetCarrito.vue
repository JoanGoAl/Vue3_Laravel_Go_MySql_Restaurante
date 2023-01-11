<script setup>
import { useStore } from "vuex";
import { reactive, computed, ref } from "vue";
import Constant from "../../Constant"

const store = useStore();

const changeCant = (cant) => {
    if (props.product.cantidad + cant < 1) return
    store.dispatch("pedidos/" + Constant.CHANGE_CANT, { product: props.product, cant: parseInt(props.product.cantidad + cant) })
}

const props = defineProps({
    product: {
        type: Object,
        required: true
    }
})

const calcPrice = () => {
    return props.product.precio * props.product.cantidad
}

</script>

<template>
    <div class="contianer-target-cart">
        <img v-bind:src="product.img" alt="" width="100">
        <div class="info-producto">
            <h1 class="nombre-producto">{{ product.nombre }}</h1>
            <h2 class="precio-producto">{{ calcPrice() }} €</h2>
        </div>
        <div class="info-producto-añadir">
            <div class="container-input-number">
                <div class="more-less" @click="changeCant(-1)">-</div>

                <input type="number" name="cantidad" class="cantidad-producto" :value="product.cantidad" />

                <div class="more-less" @click="changeCant(1)">+</div>
            </div>
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


.contianer-target-cart {
    display: grid;
    grid-template-columns: 1fr 2fr 1fr;
    border-bottom: 1px solid black;
    padding: 10px;
}
</style>