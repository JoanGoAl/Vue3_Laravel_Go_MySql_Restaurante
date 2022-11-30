<script>
import { useStore } from "vuex";
import Constant from "../../Constant"
import { reactive, computed } from "vue";

export default {
    setup() {
        const store = useStore();
        const state = reactive({
            tableslist: computed(() => store.getters['tables/' + Constant.GET_TABLE]),
        });

        store.dispatch("tables/" + Constant.GET_TABLE);

        return {
            state,
        }
    }
}


</script>

<template >
    <div class="container_restaurant">
        <div class="restaurant">
            <div class="container_mesas">
                <div class="mesa" v-for="table in state.tableslist" :key="table.id">
                    <div class="mesa__number">{{ table }}</div>
                </div>
            </div>
        </div>
    </div>
    <h1>Reservar</h1>
    <button @click="hola">Hola</button>
    <button @click="adios">Adios</button>
</template>

<style scoped>
.container_restaurant {
    width: 100%;
    height: 75vh;
    display: flex;
    justify-content: center;
    align-items: center;
}

.restaurant {
    width: 80%;
    height: 80%;
    background-color: grey;
    clip-path: polygon(0 0, 100% 0, 100% 20%, 100% 80%, 100% 100%, 40% 100%, 40% 60%, 0 60%);
}
</style>