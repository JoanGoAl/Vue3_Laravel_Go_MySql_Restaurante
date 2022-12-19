<script setup>
import { useStore } from "vuex";
import { computed, reactive } from "vue";
import Constant from "@/Constant";
import { ref } from "vue";
import UserInfo from "@/components/panelAdmin/UserInfo.vue";


const store = useStore();
const state = reactive({
    clientlist: computed(() => store.getters['clients/' + Constant.GET_CLIENTS]),
});

store.dispatch("clients/" + Constant.GET_CLIENTS);

const userSelected = ref(null);
const selectUser = (client) => {
    userSelected.value = client;
}

</script>

<template>
    <h1>Usuarios</h1>
    <div class="container-users">
        <div class="table_config">
            <div class="user-target" v-for="client in state.clientlist" v-on:click="selectUser(client)"
                :key="client.id">
                <img :src="client.avatar" alt="">
                <div>{{ client.nombre }}</div>
            </div>
        </div>
        <div class="container-user-info">
            <UserInfo v-if="userSelected" :user="userSelected" :key="userSelected.id" />
        </div>
    </div>
</template>

<style scoped>
.container-user-info {
    width: 50%;
    height: 100%;
}

.container-users {
    display: flex;
    flex-direction: row;
    align-items: center;
    width: 100%;
    height: 100%;
}

.table_config {
    width: 50%;
    height: 100%;
}

.user-target {
    /* background-color: rgb(141, 141, 221); */
    border-bottom: 1px solid rgb(0, 0, 0);
    margin: 25px 0;
    display: flex;
    flex-direction: row;
    width: 100%;
    padding: 15px 10px;
}

.user-target:hover {
    /* background-color: rgb(141, 141, 221); */
    /* nice hover style target */
    border-bottom: 1px solid white;
    background-color: #a97555;
    border-radius: 10px;
    cursor: pointer;
    color: white;
}

.user-target>div {
    font-size: 20px;
    font-weight: bold;
    display: flex;
    align-items: center;
    margin: 0 15px
}

.user-target img {
    width: 50px;

}


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
</style>