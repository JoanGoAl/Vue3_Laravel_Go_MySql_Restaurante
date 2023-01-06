<script setup>
import { defineProps } from 'vue';
import ProductService from "@/services/productService";
// import { createToaster } from "@meforma/vue-toaster";
// import Constant from "@/Constant";
// import { useStore } from "vuex";

const props = defineProps({
    product: {
        type: Object
    }
})

// const toaster = createToaster({
//     position: "bottom-right",
//     duration: 3000,
// });

// const store = useStore();

const handleEdit = () => {
    console.log("Edit");
}

const handleDelete = () => {

    ProductService.deleteProduct(props.product.id)
        .then(res => {
            console.log(res);
            // store.dispatch("products/" + Constant.GET_PRODUCTS_ADMIN);
            // toaster.success("Producto eliminado correctamente");
        }).catch(err => {
            console.log(err);
        })

    console.log("Delete");
}

</script>

<template>
    <div>
        <div class="title">
            <h1>{{product.nombre}}</h1>
        </div>
        <div class="container-info">
            <div class="imagen">
                <img :src="product.img" alt="" width="100%">
            </div>
            <div class="info">
                <p> <b>Descripción:</b> {{product.descripcion}}</p>
                <br>
                <p> <b>Precio:</b> {{product.precio}} €</p>
            </div>
        </div>
        <div class="container-buttons">
            <button @click="handleEdit">Editar</button>
            <button @click="handleDelete">Eliminar</button>
        </div>
    </div>
</template>

<style scoped>
.container-buttons {
    margin: 10px;
    text-align: right;
    vertical-align: bottom;
}

button {
    margin: 0 5px;
    padding: 5px;
    border: none;
    border-radius: 5px;
    color: white;    
    cursor: pointer;
}

button:nth-child(1) {
    background-color: green;
}

button:nth-child(2) {
    background-color: red;
}

button:hover {
    filter: brightness(0.9);
}
.info>* {
    font-size: 20px;
}
.info {
    width: 50%;
    height: 100%;
}
.container-info {
    display: flex;
    flex-direction: row;
}
.title {
    width: 100%;
    text-align: center;
    margin-bottom: 10px;
}
.imagen {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 50%;
    /* height: 225px; */
}
.imagen>img {
    width: 225px;
}

</style>