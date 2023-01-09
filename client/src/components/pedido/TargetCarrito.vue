<script setup>
import { useStore } from "vuex";
import { reactive, computed, ref } from "vue";
import Constant from "../../Constant"

const store = useStore();

const changeCant = (e) => {
    store.dispatch("carrito/" + Constant.CHANGE_CANT, {product: props.product, cant: parseInt(e.target.value)})
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
                <label for="cantidad" style="margin-right: 5px;" >Cantidad</label>
                <input type="number" :value="product.cantidad" @change="changeCant"  name="cantidad" id="cantidad" min="1" max="10" value="1" class="cantidad-producto">
        </div>
    </div>
</template>

<style scoped>
.contianer-target-cart {
    display: grid;
    grid-template-columns: 1fr 2fr 1fr;
    border-bottom: 1px solid black;
    padding: 10px;
}
</style>