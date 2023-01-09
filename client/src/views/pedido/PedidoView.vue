<script setup>
import { useStore } from "vuex";
import { reactive, computed, ref } from "vue";
import Constant from "../../Constant"
import useFilter from "@/composables/useFilter"
import Carrito from "../../components/pedido/CarritoView.vue"
import PoductTarget from "../../components/pedido/ProductoTarget.vue"

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
            <div v-if="handleFilter(state.productList)">
                <div v-for="product in handleFilter(state.productList)">
                    <PoductTarget :product="product" /> 
                </div>
            </div>
        </div>
        <div class="container-carrito">
            <Carrito />
        </div>
    </div>
</template>

<style scoped>
.container-filtros {
    width: 100%;
    height: 50px;
    background-color: #f5f5f5;
    display: flex;
    align-items: center;
    justify-content: center;
}
.container-carrito {
    position: fixed;
    right: 0;
    margin-top: 10px;
    background-color: white;
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