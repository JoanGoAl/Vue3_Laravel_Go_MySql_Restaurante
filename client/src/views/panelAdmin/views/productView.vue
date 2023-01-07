<script setup>
import { useStore } from "vuex";
import { computed, reactive } from "vue";
import Constant from "@/Constant";
import TargetProduct from "@/components/panelAdmin/TargetProduct.vue"
import ProductService from "@/services/productService";
import { ref } from 'vue';
import { Modal } from 'usemodal-vue3';
import { createToaster } from "@meforma/vue-toaster";

const toaster = createToaster({
    position: "bottom-right",
    duration: 3000,
});

let isVisible = ref(false);

const store = useStore();
store.dispatch("products/" + Constant.GET_PRODUCTS_ADMIN);
const state = reactive({
  productslist: computed(() => store.getters['products/' + Constant.GET_PRODUCTS_ADMIN]),
});

const handelOpenModal = () => {
    isVisible.value = true;
    formInfo.value = {
        nombre: '',
        precio: '',
        descripcion: '',
        categoria: '',
        img: ''
    }
}

const formInfo = ref({
    nombre: '',
    precio: '',
    descripcion: '',
    categoria: '',
    img: ''
});

const search = ref('');
const categoryFilter = ref('');

const handleCategoryFilter = (e) => {
    categoryFilter.value = e.target.value;    
}

const createProduct = async () => {

    const info = {
        "nombre": formInfo.value.nombre,
        "descripcion": formInfo.value.descripcion,
        "img": formInfo.value.img,
        "precio": formInfo.value.precio,
        "categoria": formInfo.value.categoria
    }

    ProductService.addProduct(info)
        .then(res => {
            console.log(res);
            if (res.statusText = "Created") {
                toaster.success("Producto creado correctamente");
                store.dispatch("products/" + Constant.GET_PRODUCTS_ADMIN);
                isVisible.value = false;
            } else {
                toaster.error("Error al crear el producto");
            }
        }).catch(err => {
            console.log(err);
            toaster.error("Error al crear el producto");
        })
}

const handleSearch = (e) => {
    search.value = e.target.value;
}

</script>
 
<template>
    <Modal v-model:visible="isVisible" 
        :okButton="{ text: 'Create', onclick: createProduct }"
        :title="`Create Product`"
    >
        <form class="form-create-product" >
            <div>
                <label for="nombre">Nombre</label>
                <input type="text" id="nombre" name="nombre" v-model="formInfo.nombre" />
            </div>
            <div>
                <label for="precio">Precio</label>
                <input type="number" id="precio" v-model="formInfo.precio" name="precio" />
            </div>
            <div>
                <label for="descripcion">Descripcion</label>
                <input type="text" id="descripcion" v-model="formInfo.descripcion" name="descripcion" />
            </div>
            <div>
                <label for="categoria">Categoria</label>
                <select name="" id="" v-model="formInfo.categoria">
                    <option value="">Seleccione una categoria</option>
                    <option  v-for="category in new Set(state.productslist.map(item =>{return item.categoria}))" :value="category">{{ category }}</option>
                </select>
                <!-- <input type="text" id="categoria" v-modal="formInfo.categoria" name="categoria" /> -->
            </div>
            <div>
                <label for="img">Imagen</label>
                <input type="text" id="img" v-model="formInfo.img" name="img" />
            </div>
        </form>
    </Modal>
    <div>
        <div class="header-products">
            <h1>Productos</h1>
            <div>
                <input type="text" placeholder="Buscar" v-model="search" @keypress="handleSearch" />
                <select name="" id="" @change="handleCategoryFilter" >
                    <option value="">Seleccione una categoria</option>
                    <option v-if="state.productslist" v-for="category in new Set(state.productslist.map(item =>{return item.categoria}))" :value="category">{{ category }}</option>
                </select>
            </div>
            <div>
                <button @click="handelOpenModal">Crear Producto</button>
            </div>
        </div>
        <div class="main-target" v-if="state.productslist">
            <div class="container-target" v-for="(product, index) in state.productslist.filter(item => {
                if (item.nombre.toLowerCase().includes(search.toLowerCase()) && (item.categoria === categoryFilter || categoryFilter === '')) {
                    return item
                }           
            })">
                <TargetProduct :product="product" />
            </div>
        </div>
    </div>
</template>

<style scoped>
.header-products {
    display: flex;
    justify-content: space-between;
    align-items: center;
}
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