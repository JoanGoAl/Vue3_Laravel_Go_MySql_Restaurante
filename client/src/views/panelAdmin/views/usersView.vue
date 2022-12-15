<script setup>
import { useStore } from "vuex";
import { computed, reactive } from "vue";
import Constant from "@/Constant";
import { ref } from "vue";
import TargetUser from "@/components/panelAdmin/TargetUser.vue";


const store = useStore();
const state = reactive({
    clientlist: computed(() => store.getters['clients/' + Constant.GET_CLIENTS]),
});

store.dispatch("clients/" + Constant.GET_CLIENTS);


</script>

<template >

    <div class="container-users">
        <h1>Usuarios</h1>
        <div v-if="state.clientlist" class="flex-users">
            <TargetUser v-for="client in state.clientlist" :key="client.id" :user="client"></TargetUser>
        </div>
    </div>
</template>

<style scoped>
.info input {
    height: 2rem;
    margin-top: 5px;
}

.flex-users {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    height: 100%;
    /* overflow-y: scroll; */
}

.avatar {
    height: 100%;
    width: 20%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border: 1px solid red;
}

.avatar>img {
    max-width: 50%;
    height: auto;
}

.avatar>h4 {
    width: 100%;
    height: 20%;
    text-align: center;
}

.info {
    height: 100%;
    width: 80%;
    border: 1px solid red;
    display: grid;
    grid-template-columns: 1fr 1fr
}

.info>div {
    margin: 10px 20px;
}

.container-users {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    height: 100%;


}

.user-target {
    /* background-color: rgb(141, 141, 221); */
    margin: 25px;
    height: 250px;
    display: flex;
    flex-direction: row;
    max-width: 75%;
}
</style>