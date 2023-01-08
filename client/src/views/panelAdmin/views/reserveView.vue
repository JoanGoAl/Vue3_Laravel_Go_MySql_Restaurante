<script setup>
import { useStore } from "vuex";
import { computed, reactive } from "vue";
import Constant from "@/Constant";
import ReservaService from "@/services/reservaService";
import { createToaster } from "@meforma/vue-toaster";

const store = useStore();
store.dispatch("reservas/" + Constant.GET_RESERVAS);
const state = reactive({
  reserveslist: computed(() => store.getters['reservas/' + Constant.GET_RESERVAS]),
});

const toaster = createToaster({
    position: "bottom-right",
    duration: 3000,
});

const handleUpdate = (id) => {
    ReservaService.changeStatusReserva(id)
        .then((res) => {
            console.log(res);
            toaster.success("Reserva aceptada");
            store.dispatch("reservas/" + Constant.GET_RESERVAS);
        }).catch(err => {
            console.log(err);
            toaster.error("Error al aceptar la reserva");
        })
};

</script>
<template>

    <div class="container-reservas-admin">
        <h1>Reservas</h1>
        <div>
            <table>
                <thead>
                    <tr>
                        <th>id</th>
                        <th>idtable</th>
                        <th>idclient</th>
                        <th>date</th>
                        <th>time</th>
                        <th>status</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="item in state.reserveslist" :key="item.id" :id="item.id">
                        <td>{{ item.id }}</td>
                        <td>{{ item.idtable }}</td>
                        <td>{{ item.idclient }}</td>
                        <td>{{ item.date }}</td>
                        <td>{{ item.time }}</td>
                        <td class="status-column">
                            <div v-if="!item.status" class="container-pendiente">Pendiente</div>
                            <div v-if="item.status" class="container-aceptado">Aceptado</div>

                            <button v-if="!item.status" @click="handleUpdate(item.id)">Aceptar</button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>

</template>

<style scoped>
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