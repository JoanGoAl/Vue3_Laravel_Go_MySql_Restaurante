<script setup>
import { defineProps, ref } from 'vue';
import ProductService from "@/services/productService";
import { createToaster } from "@meforma/vue-toaster";
import Constant from "@/Constant";
import { useStore } from "vuex";

const props = defineProps({
    product: {
        type: Object
    }
})

const toaster = createToaster({
    position: "bottom-right",
    duration: 3000,
});

const store = useStore();

const editable = ref(false);

const handleEdit = () => {
    editable.value = !editable.value;

    if (!editable.value) {
        ProductService.updateProduct(props.product.id, props.product)
            .then(res => {
                if (res.statusText = "Created") {
                    toaster.success(`<b>${props.product.nombre}</b> Producto actualizado correctamente`);
                    store.dispatch("products/" + Constant.GET_PRODUCTS_ADMIN);
                } else {
                    toaster.error("Error al actualizar el producto");
                }
            }).catch(err => {
                console.log(err);
                toaster.error("Error al actualizar el producto");
            })
    }
}

const handleDelete = () => {

    ProductService.deleteProduct(props.product.id)
        .then(res => {
            store.dispatch("products/" + Constant.GET_PRODUCTS_ADMIN);
            toaster.success(`<b>${props.product.nombre}</b> Producto eliminado correctamente `)
        }).catch(err => {
            toaster.error("Error al eliminar el producto");
            console.log(err);
        })

    console.log("Delete");
}

</script>

<template>
    <div>
        <div class="title">
            <h1 v-if="!editable">{{product.nombre}}</h1>
            <input v-else type="text" class="edit-title" v-model="product.nombre">
        </div>
        <div class="container-info">
            <div class="imagen">
                <img :src="product.img" alt="" width="100%">
            </div>
            <div class="info">
                <p v-if="!editable"> <b>Descripción:</b> {{product.descripcion}}</p>
                <p v-else> <b>Descripción:</b> <textarea name="" id="" cols="30" rows="3" v-model="product.descripcion"></textarea> </p>
                <br>
                <p v-if="!editable"> <b>Precio:</b> {{product.precio}} €</p>
                <p v-else> <b>Precio:</b> <input class="edit-number" type="number" v-model="product.precio"> €</p>
            </div>
        </div>
        <div class="container-buttons">
            <button @click="handleEdit"> {{ !editable ? 'Editar' : 'Guardar' }} </button>
            <button @click="handleDelete">Eliminar</button>
        </div>
    </div>
</template>

<style scoped>
.edit-title {
    width: 100%;
    font-size: 25px;
}
.edit-number {
    width: 50px;
    font-size: 15px;
}
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