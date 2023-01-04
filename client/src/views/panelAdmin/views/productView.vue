<script setup>
import { useStore } from "vuex";
import { computed, reactive } from "vue";
import Constant from "@/Constant";
import TargetProduct from "@/components/panelAdmin/TargetProduct.vue"

import { ref } from 'vue';
import { Modal } from 'usemodal-vue3';

let isVisible = ref(false);



const store = useStore();
store.dispatch("products/" + Constant.GET_PRODUCTS_ADMIN);
const state = reactive({
  productslist: computed(() => store.getters['products/' + Constant.GET_PRODUCTS_ADMIN]),
});

const createProduct = () => {
    console.log('holaaa');
}
const handelOpenModal = () => {
    isVisible.value = true;
}

</script>

<template>
    <Modal v-model:visible="isVisible" 
        :okButton="{ text: 'Create', onclick: createProduct }"
        :title="`Create Product`"
    >
        <form class="form-create-product">
            <div>
                <label for="nombre">Nombre</label>
                <input type="text" id="nombre" name="nombre" />
            </div>
            <div>
                <label for="precio">Precio</label>
                <input type="text" id="precio" name="precio" />
            </div>
            <div>
                <label for="descripcion">Descripcion</label>
                <input type="text" id="descripcion" name="descripcion" />
            </div>
            <div>
                <label for="categoria">Categoria</label>
                <input type="text" id="categoria" name="categoria" />
            </div>
        </form>
    </Modal>
    <div>
        <div>
            <h1>Productos</h1>
            <div>
                <button @click="handelOpenModal">Crear Producto</button>
            </div>
        </div>
        <div class="main-target">
            <div class="container-target" v-for="(product, index) in state.productslist">
                <TargetProduct :product="product" />
            </div>
        </div>
    </div>
</template>

<style scoped>
.form-create-product>div {
    margin: 10px 0;

}

.form-create-product>div>label {
    display: block;
    margin-bottom: 5px;
}
.main-target {
    display: flex;
    flex-wrap: wrap;
}
.container-target {
    margin: 10px 15px;
    padding: 10px;
    /* height: 300px; */
    width: 500px;
    border-radius: 10px;
    box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;
}

</style>