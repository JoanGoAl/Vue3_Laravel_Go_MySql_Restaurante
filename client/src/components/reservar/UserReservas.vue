<script setup>
import ReservaService from "@/services/reservaService";
import { ref } from "vue";

const reservas = ref(null)

ReservaService.getUserReservas().then((res) => {
    reservas.value = res.data
}).catch((error) => {
    console.log(error)
})
</script>

<template>
    <div>
        <h2>Reservas usuario</h2>
    </div>
    <table>
        <thead>
            <tr>
                <th>Mesa</th>
                <th>Fecha</th>
                <th>Hora</th>
                <th>Estado</th>
            </tr>
        </thead>
        <tbody v-if="reservas">
            <tr v-for="reserva in reservas">
                <td>{{reserva.idtable}}</td>
                <td>{{reserva.date}}</td>
                <td>{{reserva.time}}</td>
                <td>
                    <div v-if="reserva.status == 0" class="pendiente">
                        Pendiente
                    </div>
                    <div v-if="reserva.status == 1" class="aceptada">
                        Aceptada
                    </div>
                    <div v-if="reserva.status == -1" class="denegada">
                        Denegada
                    </div>
                </td>
            </tr>
        </tbody>
    </table>
</template>

<style scoped>

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