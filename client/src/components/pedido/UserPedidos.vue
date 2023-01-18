<script setup>
import { ref } from "vue";
import PedidoService from "../../services/pedidoService";
import { Modal } from 'usemodal-vue3';

const pedidos = ref(null)

PedidoService.getUserPedidos().then((res) => {
    pedidos.value = res.data
}).catch((error) => {
    console.log(error)
})
const isVisible = ref(false);
const infoPedido = ref([])
const handelOpenModal = (pedido) => {
    infoPedido.value = JSON.parse(pedido);
    isVisible.value = true;
}

const formatFecha = (fecha) => {
    let fechaEntrega = new Date(fecha);
    fechaEntrega.setMinutes(fechaEntrega.getMinutes() + 30);

    let dia = fechaEntrega.getDate();
    let mes = fechaEntrega.getMonth() + 1;
    let año = fechaEntrega.getFullYear();
    let hora = fechaEntrega.getHours();
    let minutos = fechaEntrega.getMinutes();
    let segundos = fechaEntrega.getSeconds();
    return `${dia}/${mes}/${año} ${hora}:${minutos}:${segundos}`;
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
        <h2>Pedidos usuarios</h2>
    </div>
    <!-- {{ pedidos }} -->
    <table>
        <thead>
            <tr>
                <th>Numero Pedido</th>
                <th>Pedido</th>
                <th>Precio</th>
                <th>Fecha Entrega</th>
                <th>Estado</th>
            </tr>
        </thead>
        <tbody v-if="pedidos">
            <tr v-for="pedido in pedidos">
                <td>{{pedido.id}}</td>
                <!-- <td>{{pedido.pedido}}</td> -->
                <td><button @click="handelOpenModal(pedido.pedido)">Ver Pedido</button></td>
                <td>{{pedido.precio}}</td>
                <td> {{formatFecha(pedido.updated_at)}}</td>
                <td>
                    <div v-if="pedido.status == 0" class="pendiente">
                        Pendiente
                    </div>
                    <div v-if="pedido.status == 1" class="aceptada">
                        Aceptado
                    </div>
                    <div v-if="pedido.status == -1" class="denegada">
                        Denegado
                    </div>
                </td>
            </tr>
        </tbody>
    </table>
</template>

<style scoped>
.contianer-target-cart {
    display: grid;
    grid-template-columns: 1fr 2fr 1fr;
    border-bottom: 1px solid black;
    padding: 10px;
}

tbody {
    display: block;
    height: 200px;
    overflow: auto;
}

tbody::-webkit-scrollbar {
    width: 0px;
}



thead, tbody tr {
    display: table;
    width: 100%;
    table-layout: fixed;/* even columns width , fix width of table too*/
}

table {
    border-collapse: collapse;
    width: 100%;
}

th, td {
    text-align: left;
    padding: 8px;
}

tr:nth-child(even) {
    background-color: #f2f2f2;
}

th {
    background-color: #a97555;
    color: white;
}

.pendiente {
    padding: 5px;
    background-color: rgb(0, 132, 255);
    color: white;
    border-radius: 5px;
    text-align: center;
}

.aceptada {
    padding: 5px;
    background-color: #4CAF50;
    color: white;
    border-radius: 5px;
    text-align: center;
}

.denegada {
    padding: 5px;
    background-color: #f44336;
    color: white;
    border-radius: 5px;
    text-align: center;
}
</style>