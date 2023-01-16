<script setup>
import { useStore } from "vuex";
import { reactive, computed, ref } from "vue";
import Constant from "../../Constant"
import useFilter from "@/composables/useFilter"
import Carrito from "../../components/pedido/CarritoView.vue"
import PoductTarget from "../../components/pedido/ProductoTarget.vue"
import pagination from "@/components/pedido/Pagination.vue"

const store = useStore();
store.dispatch("products/" + Constant.GET_PRODUCTS);
const state = reactive({
    productList: computed(() => store.getters['products/' + Constant.GET_PRODUCTS]),
})

const categories = () => {
    return new Set(state.productList.map(item => { return item.categoria }))
}

const pagCant = 4

const filter = ref({
    categoria: '',
    search: '',
    start: 0,
    end: pagCant
})

const actualLength = ref(0)

const handleFilter = (products) => {
    return useFilter(products)
        .filter(filter.value)
}

const handleFilterPagination = (products) => {
    return handleFilter(products)
        .slice(filter.value.start, filter.value.end)
}

const cantOfProducts = computed(() => {
    let temp = handleFilter(state.productList).length
    actualLength.value = temp
    return temp
})

const handlePagination = (aux) => {
    if (filter.value.start + aux < 0 || filter.value.end + aux > (actualLength.value + pagCant)) return;
    filter.value.start = filter.value.start + aux;
    filter.value.end = filter.value.end + aux;
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
                <div class="target-contianer">
                    <PoductTarget 
                        v-for="product in handleFilterPagination(state.productList)"
                        :product="product" 
                        :key="product.id" 
                    /> 
                </div>
                <div class="pagination-container">
                    <pagination 
                        :longitud="cantOfProducts" 
                        :handlePagination="handlePagination"
                        :cantPage="pagCant"
                        :page="{start: filter.start, end: filter.end}"
                        :key="cantOfProducts"
                    >
                    </pagination>
                </div>
            </div>
        </div>
        <div class="container-carrito">
            <Carrito />
        </div>
    </div>
</template>

<style scoped>
.target-contianer {
    height: 68.2vh;
}
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