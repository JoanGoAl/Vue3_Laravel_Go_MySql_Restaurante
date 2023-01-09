<script setup>
import { useStore } from "vuex";
import { reactive, computed, ref } from "vue";
import Constant from "../../Constant"
import useFilter from "@/composables/useFilter"

const store = useStore();
store.dispatch("products/" + Constant.GET_PRODUCTS);
const state = reactive({
    productList: computed(() => store.getters['products/' + Constant.GET_PRODUCTS]),
})

const categories = () => {
    return new Set(state.productList.map(item => { return item.categoria }))
}

const filter = ref({
    categoria: ''
})

const handleFilter = (products) => {
    return useFilter(products).filter(filter.value)
}

</script>

<template>
    <div class="main-pedidos">
        <div class="container-productos">
            <div class="container-filtros">
                <input type="text" name="search" id="search" placeholder="Buscar producto..." v-model="filter.search" >
                <label for="categoria" style="margin-right: 5px;">Categoria</label>
                <select name="" id="" v-model="filter.categoria">
                    <option value="">Seleccione una categoria</option>
                    <option v-if="state.productList" v-for="category in categories()" :value="category">{{ category }}
                    </option>
                </select>
            </div>
            <div v-if="state.productList">
                <div v-for="product in handleFilter(state.productList)" class="product">
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
                            <label for="cantidad" style="margin-right: 5px;">Cantidad</label>
                            <input type="number" name="cantidad" id="cantidad" min="1" max="10" value="1" class="cantidad-producto">
                        </div>
                        <button class="btn btn-primary">Añadir al carrito</button>
                    </div>
                </div>
            </div>
        </div>
        <div class="container-carrito">

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
.container-filtros {
    width: 100%;
    height: 50px;
    background-color: #f5f5f5;
    display: flex;
    align-items: center;
    justify-content: center;
}
.product {
    width: 100%;
    height: 150px;
    background-color: white;
    margin-bottom: 10px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 10px;
}

.container-carrito {
    position: fixed;
    right: 0;
    background-color: blue;
    height: 70%;
    width: 25%;
}

.container-productos {
    height: 100%;
    width: 70%;
}

.main-pedidos {
    width: 100%;
    min-height: 76.3vh;
    background-color: #f5f5f5;
    display: flex;
}
</style>