<script setup>
import { useStore } from "vuex";
import { computed, reactive } from "vue";
import Constant from "@/Constant";

const store = useStore();
const state = reactive({
    clientlist: computed(() => store.getters['clients/' + Constant.GET_CLIENTS]),
});

store.dispatch("clients/" + Constant.GET_CLIENTS);
</script>

<template >

    <div>
        <h1>Usuarios</h1>
        <div>
            Estos son los usuarios
        </div>
        <div>
            <div v-for="client in state.clientlist" :key="client.id">
                <div>
                    {{ client.name }}
                </div>
                <div>
                    {{ client.email }}
                </div>
            </div>
        </div>

    </div>

</template>

<style scoped>

</style>