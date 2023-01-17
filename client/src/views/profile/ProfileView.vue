<script setup>
import ClientService from "@/services/clientService";
import { ref } from "vue";
import Loading from "@/components/Loading.vue";

const user = ref(null)

ClientService.getProfile().then((res) => {
    user.value = res.data
}).catch((error) => {
    console.log(error)
})

</script>

<template>
    <div class="main-profile" v-if="user">
        <div class="user-container">
            <div class="user-img">
                <img :src="user.avatar" alt="" width="250">
            </div>
            <div class="user-info">
                <div>
                    <h1>Información del usuario</h1>
                </div>
                <div class="user-info-name">
                    <h3>{{ user.nombre }}</h3>
                </div>
                <div class="user-info-email">
                    <h3>{{ user.email }}</h3>
                </div>
                <div class="user-info-username">
                    <h3>{{ user.username }}</h3>
                </div>
                <div class="user-info-dni">
                    <h3>{{ user.dni }}</h3>
                </div>
                <div class="user-info-telefono">
                    <h3>{{ user.telefono }}</h3>
                </div>
                <div class="user-info-direccion">
                    <h3>{{ user.direccion }}</h3>
                </div>
            </div>
            <div class="container-reservas">Reservas</div>
            <div class="container-pedidos">Pedidos</div>
        </div>
        <!-- {{user}} -->
    </div>
    <Loading v-else />
</template>

<style scoped>
.user-container>div {
    border-radius: 15px;
    margin: 25px;
    box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.2);
    padding: 25px;
}

.user-img {
    grid-area: 1 / 1 / 2 / 2;
    display: flex;
    justify-content: center;
    align-items: center;
}

.user-info {
    grid-area: 1 / 2 / 2 / 5;
}

.container-reservas {
    grid-area: 2 / 1 / 3 / 3;
}

.container-pedidos {
    grid-area: 2 / 3 / 3 / 5;
}


.user-container {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: repeat(2, 1fr);
    grid-column-gap: 0px;
    grid-row-gap: 0px;
    width: 100%;
    height: 100%;
}

.main-profile {
    width: 100%;
    height: 79vh;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
}
</style>