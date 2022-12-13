<script>
import Mesa from "../../components/reservar/Mesa.vue";
import Filtros from "../../components/reservar/Filtros.vue";
import { useStore } from "vuex";
import { reactive, computed } from "vue";
import Constant from "../../Constant"
export default {
    components: {
        Mesa,
        Filtros
    },
    setup() {
        const store = useStore();
        const state = reactive({
            tableslist: computed(() => store.getters['tables/' + Constant.GET_TABLE]),
        });

        store.dispatch("tables/" + Constant.GET_TABLE);

        return {
            state
        }
    }
}
</script>

<template >

    <div class="container_restaurant">
        <div class="container-filtros">
            <Filtros />
        </div>
        <div class="restaurant">
            <div class="container_mesas" v-if="state.tableslist">
                <div class="container-terraza">
                    <div v-for="table in state.tableslist.terraza" :key="table.id">
                        <Mesa :table="table" />
                    </div>
                </div>
                <div class="container-interior">
                    <div v-for="(table, index) in state.tableslist.comedor" :key="table.id"
                        v-bind:class="`mesa-comedor-${index}`">
                        <Mesa :table="table" />
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
.container-filtros {
    width: 350px;
    height: 500px;
    background-color: #f5f5f5;
}

.container_restaurant {
    width: 100%;
    height: 75vh;
    display: flex;
    justify-content: space-around;
    align-items: center;
}

.restaurant {
    width: 1300px;
    height: 550px;
}

.container_mesas {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: row;
}

.container-terraza {
    height: 60%;
    width: 35%;
    background-color: #c69272;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
}

.container-interior {
    height: 100%;
    width: 65%;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: repeat(3, 1fr);
    grid-column-gap: 0px;
    grid-row-gap: 0px;
    background-color: rgb(211, 211, 211);
}

.container-interior>div>div {
    height: 100%;
}

.mesa-comedor-2 {
    grid-area: 1 / 3 / 3 / 4;
}

.mesa-comedor-3 {
    grid-area: 2 / 1 / 4 / 2;
}
</style>