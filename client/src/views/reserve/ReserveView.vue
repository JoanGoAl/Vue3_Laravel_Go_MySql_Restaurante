<script setup>
import Mesa from "../../components/reservar/Mesa.vue";
import Filtros from "../../components/reservar/Filtros.vue";
import { useStore } from "vuex";
import { reactive, computed, ref } from "vue";
import Constant from "../../Constant"
import { createToaster } from "@meforma/vue-toaster";
import { Modal } from 'usemodal-vue3';
import ReserveService from "@/services/reservaService";

const store = useStore();
const state = reactive({
    tableslist: computed(() => store.getters['tables/' + Constant.GET_TABLE]),
    filterReserve: computed(() => store.getters['tables/' + Constant.GET_RESERVE]),
});

let isVisible = ref(false);

const handelOpenModal = () => {
    if (!state.filterReserve.time) {
        toaster.error("Seleccione la hora de la reserva");
        return
    }

    if (!state.filterReserve.date) {
        toaster.error("Seleccione la fecha de la reserva");
        return
    }
    isVisible.value = true;
}

const toaster = createToaster({
    position: "bottom-right",
    duration: 3000,
});

const tableSelected = ref(null);

const selectMesa = (id) => {
    tableSelected.value = id;
}

const getTable = (id) => {
    return state.tableslist.find(table => table.id === id);
}

const hundelSend = () => {
    let item = {
        idtable: tableSelected.value,
        date: state.filterReserve.date,
        time: state.filterReserve.time,
        status: false
    }
    ReserveService.setReserve(item).then(res => {
        if (res.status === 200) {
            store.dispatch("tables/" + Constant.GET_TABLE, state.filterReserve);
            toaster.success("Reserva realizada con exito");
            isVisible.value = false;
        } else {
            toaster.error("Error al realizar la reserva");
        }
    }).catch(err => {
        console.log(err);
    })

}

</script>

<template >
    <div class="main-reservas">
        <div class="container-filtros">
            <Filtros />
        </div>
        <div class="container_restaurant">
            <div class="container_mesas" v-if="state.tableslist">
                <div class="mesa" v-for="table in state.tableslist" :key="table.id">
                    <Mesa :table="table" :id="table.id" :selectMesa="selectMesa" />
                </div>
            </div>
            <div v-else class="container-table-not-found">
                <h1>Selecciones la hora de la reserva</h1>
            </div>
            <div class="container-vista-previa" v-if="state.tableslist && getTable(tableSelected)">
                <h1>Vista previa</h1>
                <div>
                    <h1>Mesa: {{ getTable(tableSelected).id }}</h1>
                    <img :src="`../../../${getTable(tableSelected).img}.png`" alt="" width="150">
                    <div>
                        <p><b>Ubicacion:</b> {{ getTable(tableSelected).type }}</p>
                        <p><b>Comensales:</b> {{ getTable(tableSelected).capacity }}</p>
                    </div>
                    <div>
                        <p><b>Fecha:</b> {{ state.filterReserve.date }}</p>
                        <p><b>Hora:</b> {{ state.filterReserve.time }}</p>
                    </div>
                </div>
                <div class="container-button-reserve">
                    <button @click="handelOpenModal">Reservar</button>
                </div>
            </div>
        </div>
    </div>
    <Modal v-model:visible="isVisible" title="Reservar" :okButton="{ text: 'Reservar', onclick: hundelSend }">
        <div>
            <b>¿Quieres confirmar tu reserva para el dia {{ state.filterReserve.date }} a las {{
                state.filterReserve.time
            }}?</b>
        </div>
    </Modal>
</template>

<style scoped>
.container-vista-previa {
    width: 25%;
    height: 100%;
    margin-left: 10px;
    padding: 10px;
    text-align: center;
}

.mesa {
    width: 300px;
    margin: 15px 10px;
}

.container-table-not-found {
    width: 100%;
    height: 70vh;
    display: flex;
    justify-content: center;
    align-items: center;
}

.main-reservas {
    width: 100%;
    min-height: 76.3vh;
}

.container-filtros {
    width: 100%;
    padding: 10px 25px;
    background-color: #f5f5f5;
}

.container_restaurant {
    margin-top: 10px;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: row;
}

.container_mesas {
    width: 70%;
    display: flex;
    flex-wrap: wrap;
}
</style>