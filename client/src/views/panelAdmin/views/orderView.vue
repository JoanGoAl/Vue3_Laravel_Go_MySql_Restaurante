<script setup>
import { useStore } from "vuex";
import { computed, reactive } from "vue";
import Constant from "@/Constant";
import PedidoService from "@/services/pedidoService";
import { createToaster } from "@meforma/vue-toaster";
import { ref } from 'vue';
import { Modal } from 'usemodal-vue3';

const store = useStore();
store.dispatch("pedidos/" + Constant.GET_PEDIDOS_ADMIN);
const state = reactive({
    pedidosList: computed(() => store.getters['pedidos/' + Constant.GET_PEDIDOS_ADMIN]),
});


const toaster = createToaster({
    position: "bottom-right",
    duration: 3000,
});

const handleUpdate = (id, status) => {
    PedidoService.changeStatusPedido(id, { status })
        .then((res) => {
            if (status == -1) toaster.success("Reserva cancelada");
            if (status == 1) toaster.success("Reserva aceptada");
            store.dispatch("pedidos/" + Constant.GET_PEDIDOS_ADMIN);
        }).catch(err => {
            console.log(err);
            toaster.error("Error al aceptar la reserva");
        })
};

const isVisible = ref(false);
const infoPedido = ref([])

const handelOpenModal = (pedido) => {
    infoPedido.value = JSON.parse(pedido);
    isVisible.value = true;
}

</script>
<template>
    <Modal v-model:visible="isVisible" :okButton="{ text: 'Aceptar' }" :title="`Pedidio`">
        <div>
            <div v-for="product in infoPedido" class="contianer-target-cart">
                <img v-bind:src="product.img" alt="" width="100">
                <div class="info-producto">
                    <h1 class="nombre-producto">{{ product.nombre }}</h1>
                    <h2 class="precio-producto">{{ product.precio * product.cantidad }} €</h2>
                </div>
                <div class="info-producto-añadir">
                    <label for="cantidad" style="margin-right: 5px;">Cantidad</label>
                    <input type="number" :value="product.cantidad" @change="changeCant" name="cantidad" id="cantidad"
                        min="1" max="10" value="1" class="cantidad-producto" disabled>
                </div>
            </div>
        </div>
    </Modal>
    <div>
        <h1>Pedidos</h1>
        <div>
            <table>
                <thead>
                    <tr>
                        <th>id</th>
                        <th>idcliente</th>
                        <th>pedido</th>
                        <th>precio</th>
                        <th>status</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="item in state.pedidosList" :key="item.id" :id="item.id">
                        <td>{{ item.id }}</td>
                        <td>{{ item.idcliente }}</td>
                        <td><button @click="handelOpenModal(item.pedido)">Ver Pedido</button></td>
                        <td>{{ item.precio }}</td>
                        <td class="status-column">
                            <div v-if="item.status == 0" class="container-pendiente">Pendiente</div>
                            <div v-if="item.status == 1" class="container-aceptado">Aceptado</div>
                            <div v-if="item.status == -1" class="container-rechazada">Rechazada</div>
                            <div v-if="!item.status">
                                <button @click="handleUpdate(item.id, -1)">Rechazar</button>
                                <button @click="handleUpdate(item.id, 1)">Aceptar</button>
                            </div>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>

    </div>
</template>

<style scoped>
.container-rechazada {
    padding: 5px;
    background-color: black;
    color: white;
    border-radius: 5px;
}

.contianer-target-cart {
    display: grid;
    grid-template-columns: 1fr 2fr 1fr;
    border-bottom: 1px solid black;
    padding: 10px;
}

.container-aceptado {
    padding: 5px;
    background-color: #4CAF50;
    color: white;
    border-radius: 5px;

}

.container-pendiente {
    padding: 5px;
    background-color: #f44336;
    color: white;
    border-radius: 5px;
}

.status-column {
    display: flex;
    justify-content: space-between;
}

th {
    padding-top: 12px;
    padding-bottom: 12px;
    text-align: left;
    background-color: #a97555;
    color: white;
}

tr:nth-child(even) {
    background-color: #f2f2f2;
}

table {
    font-family: Arial, Helvetica, sans-serif;
    border-collapse: collapse;
    width: 100%;
}

td,
th {
    border: 1px solid #ddd;
    padding: 8px;
}

.container-reservas-admin {
    width: 100%;
    height: 100%;
}
</style>
