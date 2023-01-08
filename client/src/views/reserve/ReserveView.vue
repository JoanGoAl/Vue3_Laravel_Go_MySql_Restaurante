<script setup>
import Mesa from "../../components/reservar/Mesa.vue";
import Filtros from "../../components/reservar/Filtros.vue";
import { useStore } from "vuex";
import { reactive, computed, ref } from "vue";
import Constant from "../../Constant"

const store = useStore();
const state = reactive({
    tableslist: computed(() => store.getters['tables/' + Constant.GET_TABLE]),
    filterReserve: computed(() => store.getters['tables/' + Constant.GET_RESERVE]),
});

const tableSelected = ref(null);

const selectMesa = (id) => {
    tableSelected.value = id;
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
                    <Mesa :table="table" :id="table.id"
                        :selectMesa="selectMesa" />
                </div>
            </div>
            <div v-else class="container-table-not-found">
                <h1>Selecciones la hora de la reserva</h1>
            </div>
            <div class="container-vista-previa" v-if="state.tableslist">
                <h1>Vista previa</h1>
                <div v-if="tableSelected">
                    <h1>{{ tableSelected }}</h1>
                    <p>{{ state.filterReserve }}</p>
                </div>
            </div>
        </div>
    </div>
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
    display: flex;
    flex-direction: row;
}

.container_mesas {
    width: 70%;
    display: flex;
    flex-wrap: wrap;
}

</style>