<script setup>
import { useStore } from "vuex";
import { reactive, computed, ref } from "vue";
import Constant from "../../Constant"

const store = useStore();
store.dispatch("products/" + Constant.GET_PRODUCTS);
const state = reactive({
    productList: computed(() => store.getters['products/' + Constant.GET_PRODUCTS]),
})

const categories = () => {
    return new Set(state.productList.map(item => { return item.categoria }))
}

</script>

<template>
    <div class="main-pedidos">
        <div class="container-productos">
            <div class="container-filtros">
                <select name="" id="" @change="handleCategoryFilter">
                    <option value="">Seleccione una categoria</option>
                    <option v-if="state.productList" v-for="category in categories()" :value="category">{{ category }}
                    </option>
                </select>
            </div>
            <div v-if="state.productList">
                <div v-for="product in state.productList" class="product">
                    {{ product }}
                    <img v-bind:src="product.img" alt="" width="100">
                    <!-- <div class="info-table">
                        <div class="number-mesa"><b>Mesa:</b> {{ props.table.id }}</div>
                        <div class="number-mesa"><b>Ubicacion:</b> {{ props.table.type }}</div>
                        <div class="number-mesa"><b>Comensales:</b> {{ props.table.capacity }}</div>
                    </div> -->
                </div>
            </div>
        </div>
        <div class="container-carrito">

        </div>
    </div>
</template>

<style scoped>
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